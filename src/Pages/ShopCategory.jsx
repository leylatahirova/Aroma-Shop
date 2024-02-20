import React from 'react'
import Header from "../Components/Header";
import PagesBanner from "../Components/PagesBanner";
import Footer from "../Components/Footer";
import Subscribe from '../Components/Subscribe';
import TopProducts from '../Components/Shop/TopProducts';
import FilterBar from '../Components/Shop/FilterBar';
// import "../styles/ShopCategory.sass";

export default function Shop() {
  return (
    <>
    <Header />
    <PagesBanner text1="Shop Category" text2="Home-Shop Category" />
    <FilterBar/>
    <TopProducts/>
    <Subscribe />
    <Footer />
  </>
  )
}
