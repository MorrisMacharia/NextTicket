import React from "react";
import "./morecont.css";
import Image from "next/image";
const Morecontactinfo = () => {
  return (
    <>
      <div className="orderpage">
        <div className="eventimage">
          <Image src="/Eventimg.png" alt="uuh" />
        </div>
        <div className="order"> Your order</div>
        <div className="passion">
          Passionate Pages Flavoured by Manyatta Cider
        </div>
        <div>Sat, Mar 23 - 6:00pm EAT</div>
        <div>New Muthaiga Mall, Thigiri ridge</div>
        <div className="tickets">
          <div>2x Advanced tickets</div>
          <div> KES 2,000</div>
        </div>
        <div className="tickets2">
          <div>Fees</div>
          <div> KES 0.00</div>
        </div>
        <div className="coupon"> Add coupon</div>
        <div className="tickets3">
          <div>Total</div>
          <div> KES 2,000.00 </div>
        </div>
      </div>
    </>
  );
};

export default Morecontactinfo;
