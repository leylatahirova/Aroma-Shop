import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./styles/responsive.sass";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ShopCategory from "./Pages/ShopCategory";
import ProductDetails from "./Pages/ProductDetails";
import ShoppingCart from "./Pages/ShoppingCart";
// import ProductCheckout from "./Pages/ProductCheckout";
import LoginRegister from "./Pages/LoginRegister";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shopcategory" element={<ShopCategory />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        {/* <Route path="/productcheckout" element={<ProductCheckout />} /> */}
        <Route path="/loginregister" element={<LoginRegister />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
