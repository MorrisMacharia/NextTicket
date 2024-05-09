"use client";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import { MdLanguage } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token");
    if (tokenFromLocalStorage) {
      setToken(tokenFromLocalStorage);
    }
    console.log(tokenFromLocalStorage);
  }, []);

  const handleLogout = () => {
    // Clear user session data (e.g., remove token from localStorage)
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    // Update the isLoggedIn state to false
    setToken("");
    // Redirect to the login page or any other relevant page
    // For demonstration purposes, let's redirect to the login page
    window.location.href = "/login";
  };
  return (
    <div className="container">
      <div className="container2">
        <div className="logo">
          <Image src="/Logo.svg" alt="" width="180" height="30" />
        </div>
        <div className="wordings">
          <Link href="/organisers">
            <div className="create"> Create Event </div>
          </Link>

          <div className="create">
            <MdLanguage /> English
          </div>
          <button type="button" className="abtn">
            {token === "" ? (
              <Link href="/login">Sign in</Link>
            ) : (
              <div onClick={handleLogout}>Sign out</div>
            )}
          </button>
        </div>
      </div>
      <div className="intro">Find your next experience</div>

      <div className="searchWrapper">
        <div className="searchbar">
          <input
            type="text"
            className="cityinput"
            placeholder="search for events,concerts,organizers and more  "
          />
          <IoSearchOutline />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
