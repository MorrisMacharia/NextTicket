"use client";
import React, { useState } from "react";
import "../Event.css";
import { GrFavorite } from "react-icons/gr";
import { CiShare2 } from "react-icons/ci";
import Row2 from "../../../components/Row2/row2";
import eventData from "../../../components/Products/eventsData";
import EventData from "../../../types/event";
import { useRouter } from "next/navigation";
import TicketCounter from "../../../components/Products/ticketCounter";
import EventsLayout from "../../../layouts/EventsLayout";
import Image from "next/image";

function EventPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const [earlyBirdCount, setEarlyBirdCount] = useState<number>(0);
  const [gateCount, setGateCount] = useState<number>(0);
  const [advancedCount, setAdvancedCount] = useState<number>(0);

  const { slug } = params;

  const eventDataById: EventData = eventData.find(
    (event: EventData) => event.id === parseInt(slug, 10)
  );

  if (!eventDataById) {
    return <div>Event not found</div>;
  }

  const handleEarlyBirdChange = (value: number) => {
    setEarlyBirdCount(value);
  };

  const handleGateChange = (value: number) => {
    setGateCount(value);
  };

  const handleAdvancedChange = (value: number) => {
    setAdvancedCount(value);
  };

  const totalValue =
    earlyBirdCount * eventDataById.earlyBirdTicket +
    gateCount * eventDataById.gateTicket +
    advancedCount * eventDataById.advancedTicket;

  const handleRoute = () => {
    router.push("/contactinfo");
  };

  // const handleLoginRoute = () => {
  //   router.push("/about");
  // };

  const remainingEvents = eventData.filter(
    (event) => event.id !== parseInt(slug, 10)
  );

  return (
    <EventsLayout>
      <div className="container11" >
        <div className="dets">
          <div className="neutral">
            <div>
              <Image src={eventDataById.imageSrc} alt={eventDataById.altText} width={300} height={300} />
            </div>
            <div className="details">
              <div className="upper">
                <div className="head1">
                  <div className="head2">{eventDataById.title}</div>
                  <div>
                    <GrFavorite />
                    <CiShare2 />
                  </div>
                </div>
                <div className="time">
                  <div>{eventDataById.date}</div>
                  <div>{eventDataById.timeOfEvent} EAT</div>
                </div>
                <div className="time">{eventDataById.location}</div>
              </div>
              <div className="tickdet">
                <div className="tik">Tickets</div>
                <div className="det2">
                  <div className="tiktype">
                    <div className="bird">
                      <h1>Early Bird Ticket</h1>
                      <div className="adm">
                        <h3>KES {eventDataById.earlyBirdTicket} each</h3>
                        <div>·</div>
                        <div>Admits 1</div>
                      </div>
                    </div>
                    <div>
                      <div>
                        {eventDataById.earlyBirdStatus === true ? (
                          <div className="chipset">Sold out</div>
                        ) : (
                          <TicketCounter
                            initialValue={0}
                            addValue={1}
                            onValueChange={handleEarlyBirdChange}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="tiktype4">
                    <div className="tiktype2">
                      <div>
                        <div className="bird">
                          <h1>Gate Tickets (4pack Redeemable)</h1>
                          <div className="adm">
                            <h3>KES {eventDataById.gateTicket} each</h3>
                            <div>·</div>
                            <div>Admits 1</div>
                          </div>
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
                        {eventDataById.gateStatus === true ? (
                          <div className="chipset">Sold out</div>
                        ) : (
                          <TicketCounter
                            initialValue={0}
                            addValue={1}
                            onValueChange={handleGateChange}
                          />
                        )}
                      </div>
                    </div>

                    <div className="tiktype2">
                      <div>
                        <div className="bird">
                          <h1>Gate Tickets (4pack Redeemable)</h1>
                          <div className="adm">
                            <h3>KES {eventDataById.advancedTicket} each</h3>
                            <div>·</div>
                            <div>Admits 1</div>
                          </div>
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
                        <div>
                          {eventDataById.advancedStatus === true ? (
                            <div className="chipset">Sold out</div>
                          ) : (
                            <TicketCounter
                              initialValue={0}
                              addValue={1}
                              onValueChange={handleAdvancedChange}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkout">
                <div className="total">Total: KES {totalValue}</div>
                <button type="button" className="check" onClick={handleRoute}>
                  Proceed to checkout
                </button>
              </div>

              <div className="bott">
                <div className="org">Organised by</div>
                <div className="exp">
                  <div className="bott1">
                    <div className="circle">{/* <FaRegCircle /> */}</div>
                    <div className="momnt">EXP Momentum LTD</div>
                  </div>
                  <button type="button" className="follow">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row2 data={remainingEvents} />
      </div>
    </EventsLayout>
  );
}
export default EventPage;
