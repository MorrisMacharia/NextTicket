import React from "react";
import './Event.css'
import { MdLanguage } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

const Event = () => {
  return (
    <div className="container11">
      <div className="logo">
        <img src="/Logo.svg" alt="" />
      </div>
      <div className="searchbar11">
        <input type="text" className="cityinput11"  />
        <IoSearchOutline />
      </div>
      <div className="wordings">
        <div className="create"> Create Event</div>

        <div className="create">
          <MdLanguage /> English
        </div>
        <button type="button" className="btn11" >
          Sign in
        </button>
      </div>
      <div className="dets">


      </div>
    </div>
  );
};

export default Event;
