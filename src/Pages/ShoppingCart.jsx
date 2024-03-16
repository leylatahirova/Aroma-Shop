import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import PagesBanner from "../Components/PagesBanner";
import Footer from "../Components/Footer";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/ShoppingCart.sass";

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(0);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };



useEffect(() => {
  const calculateSubtotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const price = parseFloat(item.price.replace("$", ""));
      const quantity = item.quantity;
      const totalPrice = price * quantity;
      total += totalPrice;
    });
    setSubtotal(total);
  };

  calculateSubtotal();
}, [cartItems]);

  return (
    <>
      <Header />
      <PagesBanner text1="Shopping Cart" text2="Home-Shopping Cart" />
      <section className="cart__area">
        <div className="container">
          <div className="cart__area_thead">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              {cartItems.map((productItem, index) => (
                <tbody key={productItem.id}>
                  <tr>
                    <td>
                      <div className="cart__area__image">
                        <Link to="/productdetails">
                          <div>
                            <img src={productItem.image} alt="cart1" />
                          </div>
                        </Link>
                        <div>
                          <p>{productItem.title}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>{productItem.price}</h5>
                    </td>
                    <td>
                      <div>
                        <input
                          type="number"
                          defaultValue={productItem.quantity}
                          title="Quantity:"
                        />
                      </div>
                    </td>
                    <td>
                      <h5>${(parseFloat(productItem.price.replace("$", "")) * productItem.quantity).toFixed(2)}</h5>
                    </td>
                    <td>
                      <MdDeleteOutline
                        style={{
                          fontSize: "20px",
                          marginBottom: "10px",
                          marginLeft: "10px",
                          color: "#880000",
                          cursor:"pointer"
                        }}
                        onClick={() => handleRemoveFromCart(productItem.id)}
                      />
                    </td>
                  </tr>
                </tbody>
              ))}
              <tfoot>
                <tr>
                  <td colSpan={5}>
                    <div className="cart__area__subtotal">
                      <h5 style={{ marginTop: "40px", marginBottom:"30px" }}>
                        Subtotal: ${subtotal.toFixed(2)}
                      </h5>
                    </div>
                    <div
                      style={{
                        marginTop: "20px",
                        marginBottom: "40px",
                        gap: "10px",
                      }}
                      className="cart__area__buttons"
                    >
                      <Link to="/shopcategory">
                        <button className="mr-2">Continue Shopping</button>
                      </Link>
                      <Link to="/productcheckout">
                        <button className="mr-3">Proceed To Checkout</button>
                      </Link>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}


