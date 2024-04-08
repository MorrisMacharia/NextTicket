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
          <Link href="/organisers">
            <div className="create"> Create Event </div>
          </Link>

          <div className="create">
            <MdLanguage /> English
          </div>
          <button type="button" className="btn">
            <Link href="/about" className="as">
              Sign in
            </Link>
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
