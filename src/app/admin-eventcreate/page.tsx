"use client"
import { useState } from "react";
import "./admin-eventcreate.css";
import toast from "react-hot-toast";

const Admineventcreate = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [ticketPriceEarlyBird, setTicketPriceEarlyBird] = useState("");
  const [ticketPriceGate, setTicketPriceGate] = useState("");
  const [ticketPriceAdvance, setTicketPriceAdvance] = useState("");
  const [eventImage, setEventImage] = useState(null); // State for event image

  const handleSubmit = async  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(); // Create FormData object
      formData.append("eventName", eventName);
      formData.append("eventDate", eventDate);
      formData.append("eventLocation", eventLocation);
      formData.append("ticketPriceEarlyBird", ticketPriceEarlyBird);
      formData.append("ticketPriceGate", ticketPriceGate);
      formData.append("ticketPriceAdvance", ticketPriceAdvance);
      formData.append("eventImage", eventImage); // Append image to FormData

      const response = await fetch("/api/admin/create-event", {
        method: "POST",
        
        body: formData
      });
      console.log(response)
      if (response.ok) {
        toast.success("Event created successfully")
        console.log("Event created successfully");
      } else {
        toast.error("Failed to create event")
        console.error("Failed to create event");
      }
    } catch (error) {
      console.error("Network error:", error.message);
    }
  };

  return (
    <div className="orgz">
      <div className="head12">{/* Header content */}</div>
      <div className="orgbody">
        <div className="orgdets">
          <div className="create-event">
            <form onSubmit={handleSubmit}>
              <h2>Create Event</h2>
              <div className="form-group">
                <label htmlFor="eventImage">Event Image:</label>
                <input
                  type="file"
                  id="eventImage"
                  name="eventImage"
                  accept="image/*"
                  onChange={(e) => setEventImage(e.target.files[0])}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="eventName">Event Name:</label>
                <input
                  type="text"
                  id="eventName"
                  name="eventName"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="eventDate">Event Date:</label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="eventLocation">Event Location:</label>
                <input
                  type="text"
                  id="eventLocation"
                  name="eventLocation"
                  value={eventLocation}
                  onChange={(e) => setEventLocation(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="ticketPriceEarlyBird">
                  Early Bird Ticket Price:
                </label>
                <input
                  type="number"
                  id="ticketPriceEarlyBird"
                  name="ticketPriceEarlyBird"
                  value={ticketPriceEarlyBird}
                  onChange={(e) => setTicketPriceEarlyBird(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="ticketPriceGate">Gate Ticket Price:</label>
                <input
                  type="number"
                  id="ticketPriceGate"
                  name="ticketPriceGate"
                  value={ticketPriceGate}
                  onChange={(e) => setTicketPriceGate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="ticketPriceAdvance">
                  Advance Ticket Price:
                </label>
                <input
                  type="number"
                  id="ticketPriceAdvance"
                  name="ticketPriceAdvance"
                  value={ticketPriceAdvance}
                  onChange={(e) => setTicketPriceAdvance(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Create Event</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admineventcreate;
