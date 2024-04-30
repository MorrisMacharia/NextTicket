"use client"
import { useState } from "react";
import "../../components/Styles/admin-eventcreate.css"

const Admineventcreate = () => {

  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [ticketPriceEarlyBird, setTicketPriceEarlyBird] = useState("");
  const [ticketPriceGate, setTicketPriceGate] = useState("");
  const [ticketPriceAdvance, setTicketPriceAdvance] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/create-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventName,
          eventDate,
          eventLocation,
          ticketPriceEarlyBird,
          ticketPriceGate,
          ticketPriceAdvance,
        }),
      });

      if (response.ok) {
        // Event created successfully, handle accordingly
        console.log("Event created successfully");
      } else {
        // Handle error response from server
        console.error("Failed to create event");
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error:", error.message);
    }
  };

  return (
    <div className="orgz">
      <div className="head12">{/* Header content */}</div>
      <div className="orgbody">
        <div className="sidebar">{/* Sidebar content */}</div>
        <div className="orgdets">
          {/* Organizer details content */}
          {/* Event creation form */}
          <div className="create-event">
            <form onSubmit={handleSubmit}>
              <h2>Create Event</h2>
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

