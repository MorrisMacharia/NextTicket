import React from "react";
import "./Event.css";
import { MdLanguage } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";

import { CiShare2 } from "react-icons/ci";
import Image from "next/image";

const Event = () => {
  return (
    <div className="container11">
      <div className="logo">
        <Image src="/Logo.svg" alt="" width={170} height={30} />
      </div>
      <div className="searchbar11">
        <input type="text" className="cityinput11" />
        <IoSearchOutline />
      </div>
      <div className="wordings11">
        <div className="create"> Create Event</div>

        <div className="create">
          <MdLanguage /> English
        </div>
        <button type="button" className="btn">
          Sign in
        </button>
      </div>
      <div className="dets">
        <div className="neutral">
          <div>
            <Image
              src="/Event1.png"
              alt="card"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="details">
            <div className="upper">
              <div className="head1">
                <div>Passionate Pages Flavoured by Manyatta Cider</div>
                <div>
                  <GrFavorite />
                  <CiShare2 />
                </div>
              </div>
              <div className="time">
                <div>Sat, Mar 23</div>
                <div>6:00pm EAT</div>
                <div>New Muthaiga Mall, Thigiri Ridge</div>
              </div>
            </div>

            <div className="tickdet">
              <div>Tickets</div>
              <div className="det2">
                <div className="tiktype">
                  <div>Early Bird Ticket</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
