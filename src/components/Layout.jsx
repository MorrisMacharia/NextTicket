import React from "react";
import Navbar from "./Navbar/page";
import Products from "./Products/Products";
import Footer from "./Footer/footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Products />
      <Footer />
    </>
  );
}
