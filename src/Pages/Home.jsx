import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Slider from "../Components/Slider";
import Product from "../Components/Product";
import SaleBanner from "../Components/SaleBanner";
import BestSellers from "../Components/BestSellers";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Slider />
      <Product />
      <SaleBanner />
      <BestSellers />
      <Subscribe />
      <Footer />
    </>
  );
}
