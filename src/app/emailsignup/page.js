import React from "react";
import "../../components/Styles/emailsignup.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Link from "next/link";

const Emailsignup = () => {
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
          <input type="email" placeholder="Email " />
          <div className="e-add">Your password</div>
          <input type="password" placeholder="password " />
          <button className="button3">Sign in</button>
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
