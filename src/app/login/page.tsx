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
  // react hooks
  const router = useRouter();
  // hoooks states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [useEmail, setEmail] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [code, setCode] = useState<number>();

  // functionality
  const handleRoute = () => {
    router.push("/signup");
  };

  // this sets onclick the opposite of useEmail
  const handleEmailOrPass = () => {
    if (!emailError) {
      setEmailError(true);
    } else {
      setEmail(!useEmail);
    }
  };

  // handle submitting form inputs
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
                    const errorData = await response.json();
                    throw new Error(errorData.message || "Login failed");
                }
                // Parse response and save userData and token
                const responseData = await response.json();
                const { data: userData, token } = responseData;

                console.log({ userData, token})
                // Save user data and token to local storage
                localStorage.setItem("userData", JSON.stringify(userData));
                localStorage.setItem("token", token);

                // Navigate to home page
                router.push("/");

                // Return the responseData
                return responseData;
            })
            .catch((error) => {
                console.error("Error during login:", error.message);
                throw new Error("Login failed");
            }),
        {
            loading: "Logging in...",
            success: "Successfully logged in!",
            error: "Login failed. Please try again.",
        }
    );
    await promise;
};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "code") {
      setCode(Number(value));
    }
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
            <div className="send" onClick={handleEmailOrPass}>
              {useEmail ? "Use Password" : " Send a code via email instead"}
            </div>
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
