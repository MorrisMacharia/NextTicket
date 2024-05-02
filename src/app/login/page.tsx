"use client";
import React, { useState } from "react";
import "../../components/Styles/emailsignup.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Emailsignup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email) {
      toast.error("Email is required");
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    if (!formData.password) {
      toast.error("Password is required");
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    const promise = toast.promise(
      fetch("/api/user-auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })
        .then(async (response) => {
          if (!response.ok) {
            throw new Error("Login failed");
          }
          const data = await response.json();
          console.log(data);
          // Save user data and token to local storage
          localStorage.setItem("userData", JSON.stringify(data.data));
          localStorage.setItem("token", data.token);
          router.push("/");
          return data;
        })
        .catch((error) => {
          throw new Error("Login failed");
        }),
      {
        loading: "Logging in...",
        success: (data) => data.message,
        error: "Login failed. Please try again.",
      }
    );
    await promise;
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container5">
      <div className="header3">
        <div className="logo">
          <img src="/Logo.svg" alt="" />
        </div>
        <button className="btn">X</button>
      </div>
      <form className="body3" onSubmit={handleSubmit}>
        <div className="welcome"> Welcome back</div>
        <div className="pass3">
          <div className={emailError ? "form-error" : "e-add"}>
            {emailError ? "Email is required" : "Your email address"}
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="e-add">Your password</div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <div className={passwordError ? "form-error" : "e-add"}>
            {passwordError ? "Password is required" : "Your password"}
          </div>

          <button className="button3" type="submit">
            Sign in
          </button>
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
      </form>
    </div>
  );
};

export default Emailsignup;
