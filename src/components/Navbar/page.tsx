import React from "react";
import "./navbar.css";
import { MdLanguage } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
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
            <Link href="/login" className="as">
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
