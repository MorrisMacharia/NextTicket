import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import formidable from 'formidable'; // for handling multipart form data (image upload)
import { promises as fs } from 'fs'; // for file system operations

const uri = "mongodb://localhost:27017"; // Database connection string (replace with yours)
const uploadDir = '/public/uploads'; // Directory to store uploaded images (replace with your path)

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Connect to the database
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const database = client.db("your_database_name");
    const events = database.collection("events");

    const form = new formidable.IncomingForm({
      multiples: false, // Allow only one image upload
      uploadDir, // Set the upload directory
      keepExtensions: true, // Keep original file extensions
    });

    // Parse the form data with image upload handling
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
        } else {
          resolve({ fields, files });
        }
      });
    });

    // Extract event data from form fields
    const { eventName, eventDate, eventLocation, ticketPriceEarlyBird, ticketPriceGate, ticketPriceAdvance } = fields;

    // Validation (optional, can be done on frontend as well)
    if (!eventName || !eventDate || !eventLocation || !ticketPriceEarlyBird || !ticketPriceGate || !ticketPriceAdvance) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Handle image upload results
    let eventImage = '';
    if (files.eventImage) {
      const oldPath = files.eventImage.filepath;
      const newPath = `${uploadDir}/${files.eventImage.originalFilename}`;

      // Move uploaded file to the designated directory
      await fs.rename(oldPath, newPath);

      // Generate a relative or absolute URL for the image (based on your setup)
      eventImage = newPath.replace(/\\/g, '/'); // Replace backslashes for consistency
    }

    // Create a new event document
    const newEvent = {
      eventName,
      eventDate,
      eventLocation,
      ticketPriceEarlyBird,
      ticketPriceGate,
      ticketPriceAdvance,
      eventImage,
    };

    // Insert the event into the database
    const result = await events.insertOne(newEvent);

    // Respond with success message or created event details
    res.status(201).json({ message: "Event created successfully", event: result.ops[0] });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create event" });
  } finally {
    await client.close();
  }
}

export default handler;
