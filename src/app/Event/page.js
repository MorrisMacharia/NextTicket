import React from "react";
import "../../components/Styles/Event.css";
import { MdLanguage } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { CiShare2 } from "react-icons/ci";
import Footer from "@/components/Footer/footer";
import Row2 from "@/components/Row2/row2"

const Event = () => {
  return (
    <div className="container11">
      <div className="logo">
        <img src="/Logo.svg" alt="" />
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
            <img src="/Event1.png" alt="card" />
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
          </div>
        </div>
      </div>
      <Row2 />
<Footer />
      </div>

  );
};

export default Event;
