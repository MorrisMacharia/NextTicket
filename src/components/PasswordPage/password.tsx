import React from "react";
import "./password.css";
const PasswordPage = () => {
  return (
    <div className="container3">
      <div className="header">
        <div className="logo">
          <img src="/Logo.svg" alt="" />
        </div>
        <div>
          <button className="btn">X</button>
        </div>
      </div>
      <div className="create"> Create your password</div>
      <div className="pass">
        <div>create a password</div>
        <input type="Password" placeholder="Password" className="password" />
      </div>
    </div>
  );
};

export default PasswordPage;