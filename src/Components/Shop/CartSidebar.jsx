import React, { useEffect, useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart } from "../../redux/actions";

function CartSidebar({ show, handleClose }) {
  const [currentProducts, setCurrentProducts] = useState([]);
  const cartItems = useSelector(state => state.cart);
  const [subtotal, setSubtotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);
    setSubtotal(total);
  }, [cartItems]);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Offcanvas placement="end" show={show} onHide={handleClose}>
      <Offcanvas.Header className="close__button" closeButton>
        <Offcanvas.Title>Subtotal: ${subtotal.toFixed(2)}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="canvas">
          {cartItems.map((productItem, index) => (
            <div className="cart__items" key={index}>
              <h6>{productItem.title}</h6>
              <div className="canvas__info">
                <img src={productItem.image} alt={productItem.title} />
                <div>
                  <p>Category: {productItem.category}</p>
                  <p>{productItem.price}</p>
                </div>
                <MdDeleteOutline style={{fontSize:"20px", cursor:"pointer", marginLeft:"10px"}} onClick={() => handleRemoveFromCart(productItem.id)} />
              </div>
            </div>
          ))}
          <div className="product__button">
            <Link to="/productcheckout">
              <Button style={{ backgroundColor: "#495DED" }} variant="primary">
                Checkout
              </Button>
            </Link>
            <Link to="/shoppingcart">
              <Button style={{ backgroundColor: "#495DED" }} variant="primary">
                View cart
              </Button>
            </Link>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CartSidebar;
