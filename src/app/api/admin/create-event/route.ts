import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import formidable, { Fields, Files, File } from 'formidable';
import { promises as fs } from 'fs';

const uri = "mongodb+srv://mmmchiuri:dLiQkj8Kl4gZGNZf@morris.qmsao5k.mongodb.net/";
const uploadDir = '/public/uploads';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  let client: MongoClient | null = null;

  try {
    client = new MongoClient(uri);
    await client.connect();
    const database = client.db("your_database_name");
    const events = database.collection("events");

    const form = new formidable.IncomingForm({
      multiples: false,
      uploadDir,
      keepExtensions: true,
    });

    const { fields, files }: { fields: Fields; files: Files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
        } else {
          resolve({ fields, files });
        }
      });
    });

    const { eventName, eventDate, eventLocation, ticketPriceEarlyBird, ticketPriceGate, ticketPriceAdvance } = fields;

    if (!eventName || !eventDate || !eventLocation || !ticketPriceEarlyBird || !ticketPriceGate || !ticketPriceAdvance) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    let eventImage = '';
    const eventImageFile = files.eventImage as unknown as File;
    if (eventImageFile) {
      const oldPath = eventImageFile.filepath;
      const newPath = `${uploadDir}/${eventImageFile.originalFilename}`;
      await fs.rename(oldPath, newPath);
      eventImage = newPath.replace(/\\/g, '/');
    }

    const newEvent = {
      eventName,
      eventDate,
      eventLocation,
      ticketPriceEarlyBird,
      ticketPriceGate,
      ticketPriceAdvance,
      eventImage,
    };

    const result = await events.insertOne(newEvent);
    const insertedEvent = await events.findOne({ _id: result.insertedId });

    res.status(201).json({ message: "Event created successfully", event: insertedEvent });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create event" });
  } finally {
    if (client) {
      await client.close();
    }
  }
};
