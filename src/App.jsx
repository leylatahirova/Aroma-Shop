import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/responsive.sass";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
