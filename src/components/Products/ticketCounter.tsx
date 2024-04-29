import React, { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import "./TicketCounter.css";

interface TicketCounterProps {
  initialValue?: number;
  addValue?: number;
  onValueChange?: (value: number) => void;
}

const TicketCounter: React.FC<TicketCounterProps> = ({
  initialValue = 0,
  addValue = 1,
  onValueChange,
}) => {
  const [tickets, setTickets] = useState<number>(initialValue);

  const handleAddTicket = () => {
    setTickets((prevTickets) => prevTickets + addValue);
    if (onValueChange) {
      onValueChange(tickets + addValue);
    }
  };

  const handleRemoveTicket = () => {
    if (tickets > 0) {
      setTickets((prevTickets) => prevTickets - addValue);
      if (onValueChange) {
        onValueChange(tickets - addValue);
      }
    }
  };

  return (
    <div className="ticket-counter">
      <button onClick={handleRemoveTicket} className="ticket-button">
        <IoMdRemove />
      </button>
      <span>{tickets}</span>
      <button onClick={handleAddTicket} className="ticket-button">
        <IoMdAdd />
      </button>
    </div>
  );
};

export default TicketCounter;
