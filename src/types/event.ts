interface EventData {
  id: number;
  title: string;
  imageSrc: string;
  altText: string;
  date: string;
  location: string;
  price: string;
  earlyBirdTicket: number;
  advancedTicket: number;
  gateTicket: number;
  timeOfEvent: string;
  earlyBirdStatus?: Boolean;
  gateStatus: Boolean;
  advancedStatus: Boolean;
}

export default EventData;
