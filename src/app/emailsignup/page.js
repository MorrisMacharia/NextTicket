import React from "react";
import "../../components/Styles/emailsignup.css";
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
      </div>
    </div>
  );
};

export default Emailsignup;
