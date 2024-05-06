"use client";
import React from "react";
import "../../components/Styles/login.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <div className="log">
      <div className="bar">
        <div className="logo">

          <Image  src="/Logo.svg" alt="logo" width={160} height={30}/> 
          
        </div>
        <div className="cancel">
          <button>X</button>
        </div>
      </div>
      <div className="bars">
        <div className="wave">Welcome to TicketWave</div>
        <div className="bttns1">
          <div className="enter">
            <div>Enter your Email Now</div>
            <input type="email" placeholder="Email" className="email1" />
          </div>

          <button type="button" className="btn3" onClick={handleSignUp}>
            Continue
          </button>

          <button type="button" className="btn4">
            <FcGoogle />
            Continue with Google
          </button>
          <button type="button" className="btn4">
            <FaApple /> Continue with Apple
          </button>
          <div className="sgn">
            <Link href="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
