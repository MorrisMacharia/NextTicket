import React from "react";
import "../../components/Styles/Event.css";
import { MdLanguage } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { CiShare2 } from "react-icons/ci";
import Footer from "@/components/Footer/footer";
import Row2 from "@/components/Row2/row2";

const Event = () => {
  return (
    <div className="container11">
      <div className="evt1">
        <div className="logo11">
          <img src="/Logo.svg" alt="" />
        <div className="searchbar11">
          <input type="text" className="cityinput11" />
          <IoSearchOutline />
        </div>
        </div>
        <div className="navlinks">
          <div className="create"> Create Event</div>

          <div className="create">
            <MdLanguage /> English
          </div>
          <button type="button" className="btn">
            Log in
          </button>
        </div>
      </div>

      <div className="dets">
        <div className="neutral">
          <div>
            <img src="/Event1.png" alt="card" />
          </div>
          <div className="details">
            <div className="upper">
              <div className="head1">
                <div>Passionate Pages Flavoured by Manyatta Cider</div>
                <div>
                  <GrFavorite />
                  <CiShare2 />
                </div>
              </div>
              <div className="time">
                <div>Sat, Mar 23</div>
                <div>6:00pm EAT</div>
                <div>New Muthaiga Mall, Thigiri Ridge</div>
              </div>
            </div>
            <div className="tickdet">
              <div>Tickets</div>
              <div className="det2">
                <div className="tiktype">
                  <div>Early Bird Ticket</div>
                  <div>
                    <div>KES 1,000 each</div>
                    <div>·</div>
                    <div>Admits 1</div>
                  </div>
                  <div>
                    <div>Sold out</div>
                  </div>
                </div>

                <div className="tiktype3">
                  <div>
                    <div>
                      <div>Advance Tickets (4pack Redeemable)</div>
                      <div>
                        <div>KES 1,000 each</div>
                        <div>·</div>
                        <div>Admits 1</div>
                      </div>
                    </div>
                    <div
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 16,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          padding: 8,
                          background: "#040404",
                          borderRadius: 8,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 8,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 1.25,
                              left: 2.5,
                              top: 9.38,
                              position: "absolute",
                              background: "white",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>2</div>
                      <div
                        style={{
                          padding: 8,
                          background: "#040404",
                          borderRadius: 8,
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 8,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              width: 15,
                              height: 15,
                              left: 2.5,
                              top: 2.5,
                              position: "absolute",
                              background: "white",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="tiktype2">
                      <div>
                        <div className="">Gate Tickets (4pack Redeemable)</div>
                        <div>
                          <div>KES 1,000 each</div>
                          <div>·</div>
                          <div>Admits 1</div>
                        </div>
                      </div>
                      <div
                        style={{
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 16,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            padding: 8,
                            background: "rgba(4, 4, 4, 0.32)",
                            borderRadius: 8,
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 8,
                            display: "flex",
                          }}
                        >
                          <div
                          // style={{
                          //   width: 20,
                          //   height: 20,
                          //   position: "relative",
                          // }}
                          >
                            <div
                              style={{
                                width: 15,
                                height: 1.25,
                                left: 2.5,
                                top: 9.38,
                                position: "absolute",
                                background: "white",
                              }}
                            ></div>
                          </div>
                        </div>
                        <div
                          style={{
                            color: "#5C5C5C",
                            fontSize: 24,
                            fontFamily: "DM Sans",
                            fontWeight: "500",
                            wordWrap: "break-word",
                          }}
                        >
                          0
                        </div>
                        <div
                          style={{
                            padding: 8,
                            background: "#040404",
                            borderRadius: 8,
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 8,
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              width: 20,
                              height: 20,
                              position: "relative",
                            }}
                          >
                            <div
                              style={{
                                width: 15,
                                height: 15,
                                left: 2.5,
                                top: 2.5,
                                position: "absolute",
                                background: "white",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Row2 />
      <Footer />
    </div>
  );
};

export default Event;
