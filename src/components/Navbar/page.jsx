"use client";

import React from "react";
import "../Styles/navbar.css";
import { MdLanguage } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container">
      <div className="container2">
        <div className="logo">
          <img src="/Logo.svg" alt="" />
        </div>
        <div className="wordings">
          <div className="create"> Create Event</div>

          <div className="create">
            <MdLanguage /> English
          </div>
          <button type="button" className="btn">
            <Link href="/about">Sign in</Link>
          </button>
        </div>
      </div>
      <div className="intro">Find your next experience</div>

      <div className="searchbar">
        <input
          type="text"
          className="cityinput"
          placeholder="search for events,concerts,organizers and more  "
        />
        <IoSearchOutline />
      </div>
    </div>
  );
};

export default Navbar;
