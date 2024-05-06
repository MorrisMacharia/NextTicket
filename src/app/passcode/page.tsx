"use client";
import React from "react";
import "./passcode.css";
import CustomButton from "../../components/CustomButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Password = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/login");
  };
  return (
    <div className="container3">
      <div className="header">
        <div className="logo">
          <Image src="/Logo.svg" alt="" width={160} height={30} />
        </div>
        <div>
          <button className="btn">X</button>
        </div>
      </div>
      <div className="body">
        <div className="create"> Create your password</div>
        <div className="pass">
          <div className="create2">Create a password</div>
          <input
            type="Password"
            placeholder="Password "
            className="passcode1"
          />

          <div>
            <CustomButton
              backgroundColor="#040404"
              color="white"
              border="none"
              borderRadius="12px"
              hoverColor="#F5F5F5"
              padding="20px 24px"
              onClick={handleRoute}
            >
              Create Password
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
