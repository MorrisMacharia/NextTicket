import Navbar from "../components/Navbar/page";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/footer";
import Morecontactinfo from "./morecontactinfo/page";
import Organizers from "./organisers/page";
import EventsLayout from "../layouts/EventsLayout";
// import Admineventcreate from "../components/admin-eventcreate/page";

export default function Home() {
  return (
    <EventsLayout>
      <Products />

      {/* <Admineventcreate /> */}
      {/* <Organizers/> */}
      {/* <Review /> */}
      {/* <Signup /> */}
      {/* <Emailsignup /> */}
      {/* <Contactinfo /> */}
      {/* <Morecontactinfo /> */}

      {/* <Authenticate /> */}
    </EventsLayout>
  );
}
