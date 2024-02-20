import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/responsive.sass";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ShopCategory from "./Pages/ShopCategory";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shopcategory" element={<ShopCategory />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
