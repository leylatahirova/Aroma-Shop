import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { TfiShoppingCart } from "react-icons/tfi";
import CartSidebar from "./Shop/CartSidebar";
import "../styles/Header.sass";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const handleCloseCartSidebar = () => setShowCartSidebar(false);

  return (
    <>
      <GiHamburgerMenu
        onClick={handleShow}
        className="hamburgerMenu"
        style={{ color: "#384aeb", fontSize: "26px", cursor:"pointer" }}
      />

      <Offcanvas style={{ height: "280px" }} show={show} onHide={handleClose} placement="top">
        <Offcanvas.Body>
          <div style={{marginTop:"80px"}}>
            <Link style={{textDecoration:"none"}} to="/home"><p>Home</p></Link>
            <Link style={{textDecoration:"none"}} to="/shopcategory"><p>Shop</p></Link>
            <Link style={{textDecoration:"none"}} to="/contact"><p>Contact</p></Link>
          </div>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"20px"}}>
            <div>
              <IoIosSearch
                style={{ color: "#222", fontSize: "20px", cursor: "pointer" }}
              />
            </div>
            <Link to="/loginregister">
            <div>
              <button style={{marginLeft:"40px"}}>Login</button>
            </div>
            </Link>
            <div>
              <TfiShoppingCart
                onClick={() => setShowCartSidebar(true)}
                style={{ color: "#222", fontSize: "18px", cursor: "pointer", marginLeft:"20px" }}
              />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <CartSidebar
        show={showCartSidebar}
        handleClose={handleCloseCartSidebar}
      />
    </>
  );
}

export default Example;
