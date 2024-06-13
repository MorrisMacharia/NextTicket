"use client";
import React, { useEffect, useState } from "react";
import "./Products.css";
import Link from "next/link";
import Image from "next/image";
import eventData from "./eventsData";
import EventData from "../../types/event";

const Products = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for login status

  useEffect(() => {
    // Check if user is logged in (e.g., token exists in localStorage)
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Clear user session data (e.g., remove token from localStorage)
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    // Update the isLoggedIn state to false
    setIsLoggedIn(false);
    // Redirect to the login page or any other relevant page
    // For demonstration purposes, let's redirect to the login page
    window.location.href = "/login";
  };

  return (
    <div className="body1">
      <div className="upComing">
        <div className="events">Upcoming Events</div>
        <div className="see">
          <a href="url">See All</a>
        </div>
      </div>
      <div className="row1">
        {eventData.map((event: EventData, index) => (
          <Link href={`/events/${event.id}`} className="as1" key={index}>
            <div className="card">
              <div className="choral">
                <Image
                  src={event.imageSrc}
                  // width={100}
                  // height={100}
                  alt={event.altText}
                  fill
                  className="card-image"
                  quality={75}
                  priority
                  style={{
                    objectFit: "fill",
                  }}
                />
              </div>

              <div className="text-wrapper">
                <div className="title">{event.title}</div>
                <div className="day">{event.date}</div>
                <div className="loc"> {event.location}</div>
                <div className="price">{event.price}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="more">
        <button type="button" className="bttn">
          Show More
        </button>
      </div>
       {/* Display logout button if user is logged in */}
       {isLoggedIn && (
        <button className="logout-btn" onClick={handleLogout}>
          Log Out
        </button>
      )}
    </div>
  );
};

export default Products;
