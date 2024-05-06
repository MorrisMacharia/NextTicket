import React from "react";
import "./review.css";
import { FaCreditCard } from "react-icons/fa";
import Morecontactinfo from "../morecontactinfo/page";
import Footer from "../../components/Footer/footer";
import Image from "next/image";

const Review = () => {
  return (
    <div className="review">
      <div className="headred">
        <Image src="/Logored.svg" alt="logo" width={170} height={30} />
        <div className="cancel">
          <button>X</button>
        </div>
      </div>
      <div className="rev1">
        <div className="rev2">
          <div className="pay">
            <div>Payment</div>
            <div>·</div>
            <div>2 of 2</div>
          </div>
          <div className="paymethod">
            Payment information
            <div className="infor">
              <div className="credit">
                <input type="radio" /> <FaCreditCard /> Card
              </div>

              <div className="credit">
                <input type="radio" />
                <Image src="/MPesa.png" alt="mpesa" width={18} height={18} />
                M-Pesa
              </div>
            </div>
          </div>
          <div className="purchase">
            Enter your phone number below to pay with M-PESA. Please ensure you
            have your phone near you. You will receive instructions from M-PESA
            to complete your purchase.
          </div>
          <div className="purchase"> Payment number</div>
          <div>
            <input
              type="tel"
              id="phone"
              className="phone"
              placeholder="+254  . Phone number"
            />
          </div>
          <button type="button" className="place">
            Place Order
          </button>
        </div>
        {/* <Morecontactinfo /> */}
      </div>

      <Footer />
    </div>
  );
};

export default Review;
