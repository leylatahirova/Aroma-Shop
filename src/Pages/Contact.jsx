import React from "react";
import Header from "../Components/Header";
import PagesBanner from "../Components/PagesBanner";
import Footer from "../Components/Footer";
import "../styles/Contact.sass";

export default function Contact() {
  return (
    <>
      <Header />
      <PagesBanner text1="Contact Us" text2="Home-Contact Us" />
      <Footer />
    </>
  );
}
