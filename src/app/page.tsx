import Navbar from "../components/Navbar/page";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/footer";
import Morecontactinfo from "./morecontactinfo/page";
import Organizers from "./organisers/page";
import EventsLayout from "../layouts/EventsLayout";

export default function Home() {
  return (
    <EventsLayout>
      <Products />
    </EventsLayout>
  );
}
