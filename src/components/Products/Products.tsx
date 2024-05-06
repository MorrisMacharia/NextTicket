import React from "react";
import "../Styles/Products.css";
import Link from "next/link";
import Image from "next/image";
import eventData from "./eventsData";
import EventData from "../../types/event";

const Products = () => {
  return (
    <div className="body1">
      <div className="upComing">
        <div className="events">UpComing Events</div>
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
    </div>
  );
};

export default Products;
