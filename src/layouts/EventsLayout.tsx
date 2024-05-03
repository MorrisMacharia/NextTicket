import React from "react";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/footer";

interface ILayout {
  children: React.ReactNode;
}

export default function EventsLayout({ children }: ILayout) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
