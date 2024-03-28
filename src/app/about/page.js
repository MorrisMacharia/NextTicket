import React from "react";
import "../../components/Styles/login.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
  return (
    <div className="log">
      <div className="bar">
        <div className="logo">
          <img src="/Logo.svg" alt="logo" />
        </div>
        <div className="cancel">
          <button>X</button>
        </div>
      </div>
      <div className="bars">
        <div className="wave">Welcome to TicketWave</div>
        <div className="bttns1">
          <div className="enter">
            <div>Enter your Email</div>
            <input type="email" placeholder="Email" className="email1" />
          </div>

          <button type="button" className="btn3">
            <Link href="/signup">Continue</Link>
          </button>

          <button type="button" className="btn4">
            <FcGoogle />
            Continue with Google
          </button>
          <button type="button" className="btn4">
            <FaApple /> Continue with Apple
          </button>
          <div className="sgn">
            <Link href="/emailsignup">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
