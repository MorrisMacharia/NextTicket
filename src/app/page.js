import Navbar from "@/components/Navbar/page";
import Products from "@/components/Products/Products";
import Footer from "@/components/Footer/footer";
// import Signup from "./signup/page";
// import Emailsignup from "./emailsignup/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Products />
      <Footer />
      {/* <Signup /> */}
      {/* <Emailsignup /> */}
    </div>
  );
}
