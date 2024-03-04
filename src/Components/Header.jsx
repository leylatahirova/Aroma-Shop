import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoIosSearch } from "react-icons/io";
import { TfiShoppingCart } from "react-icons/tfi";
import { GrFavorite } from "react-icons/gr";
import "../styles/Header.sass";
import { Link } from "react-router-dom";
import CartSidebar from "./Shop/CartSidebar";
import { useSelector } from "react-redux";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const cartItems = useSelector((state) => state.cart);
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const handleCloseCartSidebar = () => setShowCartSidebar(false);

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
      <div className="header__nav">
        <div className="logo">
          <Link to="/home">
            <img src="/images/logo.png.png" alt="logo" />
          </Link>
        </div>
        <div className="navbar1">
          <ul className="navbar-ul">
            <li className="nav-item active">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/shopcategory">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar1">
          <ul className="navbar-ul">
          {/* <li className="nav-item">
              <GrFavorite
                 style={{ color: "#222", fontSize: "17px", cursor: "pointer" }}
              />
            </li> */}
            <li className="nav-item">
              <IoIosSearch
                style={{ color: "#222", fontSize: "20px", cursor: "pointer" }}
              />
            </li>
            <li className="nav-item">
              <div className="shopping-basket">{cartItemCount}</div>
              <TfiShoppingCart
                onClick={() => setShowCartSidebar(true)}
                style={{ color: "#222", fontSize: "18px", cursor: "pointer" }}
              />
            </li>
            <li className="nav-item">
              <Link to="/loginregister">
                <button>Login</button>
              </Link>
            </li>
          </ul>
           <MobileMenu/>
        </div>
        </div>
      <CartSidebar
        show={showCartSidebar}
        handleClose={handleCloseCartSidebar}
      />
    </header>
  );
}
