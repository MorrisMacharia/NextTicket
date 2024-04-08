import React from "react";
import "../../components/Styles/organizers.css";
import { IoChevronDownSharp } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BsHouse } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCaretUp } from "react-icons/fa";
import Link from "next/link";

const Organizers = () => {
  return (
    <div className="orgz">
      <div className="head12">
        <div className="vector">
          <img src="/Vector2.svg" alt="tick" />{" "}
          <img src="/Vector1.svg" alt="tick" />
        </div>
        <div className="orglogo">
          <img src="/OrganiserL.png" alt="org" />
          <div>Pamoja Events</div>
          <IoChevronDownSharp />
          <div>
            <button type="button" className="bell">
              <CiBellOn />
            </button>
          </div>
          <div className="user">
            <CiUser />
          </div>
        </div>
      </div>
      <div className="orgbody">
        <div className="sidebar">
          <div className="content">
            <div className="sbar">
              <div>
                <BsHouse />
              </div>
              <div>Dashboard</div>
            </div>

            <div className="sbar">
              <div>
                <MdOutlineCalendarMonth />
              </div>
              <div>Events</div>
            </div>
            <div className="sbar">
              <div>
                <LuWallet />
              </div>
              <div>Wallet</div>
            </div>
            <div className="sbar">
              <div>
                <IoSettingsOutline />
              </div>
              <div>Settings</div>
            </div>
          </div>
        </div>

        <div className="orgdets">
          <div className="welcome">
            <div className="orgname">Welcome, John</div>
            <div>
              <button type="button" className="btncreate">
                + Create Event
              </button>
            </div>
          </div>
          <div className="specs">
            <div className="orgprofile">
              <div>
                <img src="/OrganiserL.png" alt="logo" />
              </div>
              <div className="pamoja">
                <div className="ptxt"> Pamoja Events</div>
                <div className="plink">View organiser profile</div>
              </div>
            </div>
            <div className="period">
              <div class="dropdown">
                In the last 28 Days
                <select></select>
              </div>
            </div>
            <div className="rev11">

            <div className="rev">
              <div className="rev12">Revenue</div>
              <div className="rev13">KES 0</div>
            </div>
            <div className="perc">
              <div>
                <FaCaretUp /> vs previous 28 days
              </div>
            </div>
            </div>
          </div>
          <div className="gross">
            <div className="sales">
              <div className="sal">Gross Sales</div>
              <div className="saldig">0</div>
            </div>
            <div className="sales">
              <div className="sal">Tickets Sold</div>
              <div className="saldig">0</div>
            </div>
            <div className="sales">
              <div className="sal">Page Views</div>
              <div className="saldig">0</div>
            </div>
            <div className="sales">
              <div className="sal">Followers</div>
              <div className="saldig">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
