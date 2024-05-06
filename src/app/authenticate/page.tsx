import React from "react";
import "./authentication.css"
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Image from "next/image";



const Authenticate = () => {
  return (
    <div className="authent">
      <div className="header3">
        <div className="logo">
          <Image src="/Logo.svg" alt=""  width={160} height={30}/>
        </div>
        {/* <div>
          <button className="btn">X</button>
        </div> */}
      </div>
      <div className="section1">
        <div className="confirm">Confirm it’s you</div>
        <div className="secure">
          Enter the secure code we sent to your email.
        </div>
        <div className="dig">
          <input type="number" placeholder="Your 6 digit code" className="dig" />
        </div>
        <div className="bttn12">
          <button className="ctn12">Continue</button>
        </div>
        <div className="secure">  <Link href="/authenticate" className="aal">Resend Code</Link> </div>
        <div className="secure">  <Link href="/emailsignup" className="aal"> Use Password Instead</Link> </div>
        <div className="lines">
          or
        </div>
        <div>
            <button className="ctn12" > <FcGoogle /> <Link href="https://www.google.com/" target="blank" className="aal">Continue with Google</Link> </button>
        </div>
        <div>
            <button className="ctn12" ><FaApple /> <Link href="https://appleid.apple.com/" target="blank" className="aal">Continue with Apple</Link></button>
        </div>
        <div>
        <button type="button" className="ctn13" > <Link href="/signup" className="aal">Sign Up</Link> </button>
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
