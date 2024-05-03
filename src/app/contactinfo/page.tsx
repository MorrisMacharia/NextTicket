import React from "react";
import "../../components/Styles/contactinfo.css";
import Footer from "../../components/Footer/footer";
import Morecontactinfo from "../morecontactinfo/page";
import Link from "next/link";
import Image from "next/image";

const Contactinfo = () => {
  return (
    <div className="container6">
      <div className="header4">
        <div className="logo">
          <Image src="/Logo.svg" alt="" />
        </div>
        <div className="btn11">
          <button className="btn">X</button>
        </div>
      </div>
      <div className="div1-div2">
        <div className="div1">
          <div className="where">Where should we send the tickets?</div>
          <div className="names">
            <div>
              <div className="name4">First name</div>
              <input type="text" placeholder="First name" />
            </div>
            <div>
              <div className="name4">last name</div>
              <input type="text" placeholder="last name" />
            </div>
          </div>
          <div className="email-address">
            <div className="emailaddress">Email address</div>
            <input type="email" placeholder="Email" />
          </div>
          <div className="mobile-number">
            <div className="mobilenumber">mobile number</div>
            <input type="tel" placeholder=" +254 phone number" />
          </div>
          <button className="paybtn">
            <Link href="/Review" className="as">
            continue to payment
            </Link>
             </button>
        </div>
        <div className="div2">
          {/* <Morecontactinfo /> */}
        </div>
      </div>
      <div className="foooter">
        <Footer />
      </div>
    </div>
  );
};

export default Contactinfo;
