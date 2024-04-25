import Navbar from "../components/Navbar/page";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/footer";
import Morecontactinfo from "./morecontactinfo/page";
import Organizers from "./organisers/page";
import RootLayout from "./layout";
// import Authenticate from "./authenticate/page";



export default function Home() {
  return (
    <RootLayout>
      <Navbar />
      <Products />
      <Footer />
      {/* <Organizers/> */}
      {/* <Review /> */}
      {/* <Signup /> */}
      {/* <Emailsignup /> */}
      {/* <Contactinfo /> */}
      {/* <Morecontactinfo /> */}

      {/* <Authenticate /> */}
    </RootLayout>
  );
}
