import React from "react";
import "./footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div className="all11">
        <div className="tick-icons">
          <div className="ticket"> TicketWave </div>
          <div className="socials">
            <FaXTwitter />
            <FaInstagram />
            <RxLinkedinLogo />
            <IoLogoFacebook />
          </div>
        </div>
        <div className="information">
          <div className="info">
            <h3>Your account</h3>
            <div className="write">Sign up </div>{" "}
            <div className="write">Log in</div>{" "}
            <div className="write">Help & support</div>{" "}
          </div>
          <div className="info">
            <h3>About</h3>
            <div className="write">About TicketWave </div>{" "}
            <div className="write">Contact us</div>{" "}
            <div className="write">News</div>{" "}
          </div>
          <div className="info">
            <h3>Info</h3>
            <div className="write">Terms of use </div>{" "}
            <div className="write">Privacy policy</div>{" "}
            <div className="write">F.A.Q.</div>{" "}
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2024 TicketWave. All rights reserved. Made in Nairobi.
      </div>
    </div>
  );
};

export default Footer;
