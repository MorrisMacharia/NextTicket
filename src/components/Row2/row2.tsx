import React from "react";
import "../../components/Styles/Row2.css";
import EventData from "../../types/event";
import { useRouter } from "next/navigation";

interface Row2Props {
  data: EventData[];
}

const Row2: React.FC<Row2Props> = ({ data }) => {
  const router = useRouter();
  const handleRoute = (id: number) => {
    router.push(`/events/${id}`);
  };
  return (
    <div>
      <div className="row2">
        {data.slice(0, 4).map((event: EventData) => (
          <div
            className="card"
            key={event.id}
            onClick={() => handleRoute(event.id)}
          >
            <div className="choral">
              <img src={event.imageSrc} alt="soul" />
            </div>
            <div className="title">{event.title}</div>
            <div className="day">{event.date}</div>
            <div className="loc">{event.location}</div>
            <div className="price">{event.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row2;