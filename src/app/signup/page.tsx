"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./signup.css";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend to create a new user
      const response = await fetch("/api/user-auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstname: firstName,
          lastname: lastName,
          password,
          role: "NORMAL",
        }),
      });

      if (response.ok) {
        router.push("/login");
      } else {
        setError("Failed to create user. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container4">
      <div className="header2">
        <div className="logo1">
          <Image src="/Logo.svg" alt="" height={160} width={30} />
        </div>
        <div>
          <button className="btn">X</button>
        </div>
      </div>
      <div className="body2">
        <div className="name"> Enter your Details</div>
        <form onSubmit={handleSubmit}>
          <div className="pass2">
            <div className="name2">Enter Email</div>
            <input
              type="email"
              placeholder="Email"
              className={error ? "errorInput" : "password"} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="name2">First name</div>
            <input
              type="text"
              placeholder="First name"
              className={error ? "errorInput" : "password"} 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <div className="name2">Last name</div>
            <input
              type="text"
              placeholder="Last name"
              className={error ? "errorInput" : "password"} 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className="name2">Password</div>
            <input
              type="password"
              placeholder="Password"
              className={error ? "errorInput" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="button2">
              Continue
            </button>
          </div>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default Signup;
