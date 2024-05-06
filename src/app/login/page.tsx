"use client";
import React, { useState } from "react";
import "./emailsignup.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

const Emailsignup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleRoute = () => {
    router.push("/signup");
  };
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
          const { data: userData, token } = await response.json();
          console.log(userData);
          // Save user data and token to local storage
          localStorage.setItem("userData", JSON.stringify(userData));
          localStorage.setItem("token", token);
          router.push("/");
          return await response.json();
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
      <div className="wrapper">
      <div className="header3">
        <div className="logo">
          <Image src="/Logo.svg" alt="" width={160} height={30} />
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
          <div className={passwordError ? "form-error" : "e-add"}>
            {passwordError ? "Password is required" : "Your password"}
          </div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <button className="button3" type="submit">
            Log In
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
      <div className="send">Don&apos;t have an account?</div>

      <button className="signupbtn" onClick={handleRoute}>
        Sign up
      </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Emailsignup;
