import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <div>
              <button style={{marginLeft:"40px"}}>Login</button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
