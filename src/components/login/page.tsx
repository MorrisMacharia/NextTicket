import React, { useState } from "react";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Password from "../PasswordPage/password";
import Image from "next/image";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();
  const handleEnterPass = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="log">
      <div className="bar">
        <div className="logo">
          <Image src="/Logo.svg" alt="logo" width={170} height={30} />
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
          <button
            type="button"
            className="btn3"
            onClick={() => handleEnterPass()}
          >
            Continue
          </button>
          {isOpen && <Password />}

          <button type="button" className="btn4">
            {" "}
            <FcGoogle /> Continue with Google
          </button>
          <button type="button" className="btn4">
            {" "}
            <FaApple /> Continue with Apple
          </button>

          <div className="sgn">
            <a href="url">sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
