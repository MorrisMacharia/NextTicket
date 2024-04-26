import React from "react";
import Link from "next/link";
import "../../components/Styles/signup.css";
const Signup = () => {
  return (
    <div className="container4">
      <div className="header2">
        <div className="logo1">
          <img src="/Logo.svg" alt="" />
        </div>
        <div>
          <button className="btn">X</button>
        </div>
      </div>
      <div className="body2">
        <div className="name"> Enter your full name</div>
        <div className="pass2">
          <div className="name2">First name</div>
          <input type="text" placeholder="First name " className="password" />
          <div className="name2">Last name</div>
          <input type="text" placeholder="Last name " className="password" />
          <button className="button2">
            <Link href="/passcode" className="as">continue</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
