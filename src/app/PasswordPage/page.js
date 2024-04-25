import React from "react";
import "../../components/Styles/password.css";
const Password = () => {
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
      <div className="body">
        <div className="create"> Create your password</div>
        <div className="pass">
           <div className="create2">create a password</div>
          <input type="Password" placeholder="Password " className="password" />
          <button className="button1"> Create password</button>
        </div>
      </div>
    </div>
  );
};

export default Password;
