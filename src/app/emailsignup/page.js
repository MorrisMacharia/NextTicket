
"use client"; 

import React from "react";
import "../../components/Styles/emailsignup.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";


const Emailsignup = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(formData,"https://1c5a-41-72-200-174.ngrok-free.app/login")
    .then(res=>{console.log(res)})
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
    return (
    <div className="container5">
      <div className="header3">
        <div className="logo">
          <img src="/Logo.svg" alt="" />
        </div>
        <div>
          <button className="btn">X</button>
        </div>
      </div>
      <div className="body3">
        <div className="welcome"> Welcome back</div>
        <div className="pass3">
          <div className="e-add">Your email address</div>
          <input type="email" placeholder="Email" name="email"
          value={formData.email}
          onChange={handleInputChange} />
          <div className="e-add">Your password</div>
          <input type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange} />
          <button className="button3"  type="submit" onSubmit={handleSubmit}>Sign in</button>
        </div>
        <div className="pass4">
          <div className="send">Send a code via email instead</div>
          <div className="orr">Or</div>
          <button className="googlebtn">
            <FcGoogle />
            <Link
              href="https://www.google.com/"
              target="blank"
              className="google"
            >
              Continue with google
            </Link>
          </button>
          <button className="applebtn">
            <BsApple />
            <Link
              href="https://www.apple.com/ke/"
              target="blank"
              className="apple"
            >
              Continue with apple
            </Link>
          </button>
          <button className="signupbtn"> Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Emailsignup;
