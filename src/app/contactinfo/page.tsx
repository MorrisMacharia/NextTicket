'use client'
import React, { useState } from "react";
import "./contactinfo.css";
import Footer from "../../components/Footer/footer";
import Link from "next/link";
import Image from "next/image";

const Contactinfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !phoneNumber) {
      setError("All fields are required");
    } else {
      window.location.href = "/Review";
    }
  };

  return (
    <div className="container6">
      <div className="header4">
        <div className="logo">
          <Image src="/Logo.svg" alt="" width="160" height="30" />
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
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <div className="name4">last name</div>
              <input
                type="text"
                placeholder="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="email-address">
            <div className="emailaddress">Email address</div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mobile-number">
            <div className="mobilenumber">mobile number</div>
            <input
              type="tel"
              placeholder="+254 phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button className="paybtn" onClick={handleSubmit}>
            Continue to payment
          </button>
        </div>
      </div>
      <div className="foooter">
        <Footer />
      </div>
    </div>
  );
};

export default Contactinfo;
