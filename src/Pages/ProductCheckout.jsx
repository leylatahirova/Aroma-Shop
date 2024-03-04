import React, {useState, useEffect} from "react";
import Header from "../Components/Header";
import PagesBanner from "../Components/PagesBanner";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function ProductCheckout() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const calculateSubtotal = () => {
      let total = 0;
      cartItems.forEach((item) => {
        const price = parseFloat(item.price.replace("$", ""));
        const quantity = item.quantity;
        total += price * quantity;
      });
      setSubtotal(total);
    };

    calculateSubtotal();
  }, [cartItems]);

  return (
    <>
      <Header />
      <PagesBanner text1="Product Checkout" text2="Home-Checkout" />
      <section style={{marginBottom:"30px"}} className="checkout_area section-margin--small">
        <div className="container">
          <div className="returning_customer">
            <div className="check_title">
              <p>
                Returning Customer?
                <Link to="/loginregister"> Click here to login</Link>
              </p>
            </div>
            <p>
              If you have shopped with us before, please enter your details in
              the boxes below. If you are a new customer, please proceed to the
              Billing & Shipping section.
            </p>
            <form className="row contact_form">
              <div className="col-md-6 form-group p_star">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username or Email*"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Username or Email*")}
                  id="name"
                  name="name"
                />
              </div>
              <div className="col-md-6 form-group p_star">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password*"
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = "Password*")}
                  id="password"
                  name="password"
                />
              </div>
              <div className="col-md-12 form-group">
                <div className="button__remember" style={{display:"flex"}}>
                  <Link to="/loginregister">
                  <button
                    type="submit"
                    value="submit"
                  >
                    login
                  </button>
                  </Link>
                  <div className="creat_account">
                    <input style={{marginRight:"15px"}} type="checkbox"  />
                    <label>Remember me</label>
                  </div>
                </div>
                <Link>Lost your password?</Link>
              </div>
            </form>
          </div>
          <div className="billing_details">
            <div className="row">
              <div className="col-lg-8">
                <h5>Billing Details</h5>
                <form
                  className="row contact_form"
                  action="#"
                  method="post"
                  noValidate
                >
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="first"
                      name="name"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="First name"
                    ></span>
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="last"
                      name="name"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Last name"
                    ></span>
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      name="company"
                      placeholder="Company name"
                    />
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="number"
                      name="number"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Phone number"
                    ></span>
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="compemailany"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Email Address"
                    ></span>
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <select className="country_select">
                      <option value="1">Country</option>
                      <option value="2">Country</option>
                      <option value="4">Country</option>
                    </select>
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="add1"
                      name="add1"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Address line 01"
                    ></span>
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="add2"
                      name="add2"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Address line 02"
                    ></span>
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                    />
                    <span
                      className="placeholder"
                      data-placeholder="Town/City"
                    ></span>
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <select className="country_select">
                      <option value="1">District</option>
                      <option value="2">District</option>
                      <option value="4">District</option>
                    </select>
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      name="zip"
                      placeholder="Postcode/ZIP"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="creat_account">
                      <h5 style={{marginTop:"20px", marginBottom:"20px"}}>Shipping Details</h5>
                      <input style={{marginRight:"10px"}} type="checkbox" id="f-option2" name="selector" />
                      <label style={{marginBottom:"20px"}} htmlFor="f-option2">
                        Ship to a different address?
                      </label>
                    </div>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows="1"
                      placeholder="Order Notes"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="order_box">
                  <h5>Your Order</h5>
                  <ul style={{paddingLeft:"0px" , listStyle:"none"}} className="list">
                    <li style={{display:"flex", alignItems:"center", justifyContent:"space-between"}} >
                      <p>Product</p>
                      <p>Total</p>
                    </li>
                    {cartItems.map((productItem, index) => (
                    <li  key={index} style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                      <p>{productItem.title}</p>
                      <p>{productItem.price} x {productItem.quantity}</p>
                    </li>
                    ))}
                  </ul>
                  <ul style={{paddingLeft:"0px", listStyle:"none"}} className="list list_2">
                    <li style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                      <p style={{color:"black"}}>Subtotal</p>
                      <p> ${subtotal.toFixed(2)}</p>
                    </li>
                  
                  
                  </ul>
                  <div className="payment_item">
                    <div className="radion_btn">
                      <input style={{marginRight:"10px"}} type="radio" id="f-option5" name="selector" />
                      <label style={{fontWeight:"500"}} htmlFor="f-option5">Check payments</label>
                      <div className="check"></div>
                    </div>
                    <p  style={{backgroundColor:"#fff", fontSize:"13px", padding:"20px", marginTop:"10px", color:"#777777"}}>
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                  <div className="payment_item active">
                    <div className="radion_btn">
                      <input style={{marginRight:"10px"}} type="radio" id="f-option6" name="selector" />
                      <label style={{fontWeight:"500"}} htmlFor="f-option6">Paypal </label>
                      <img src="img/product/single-product/card.jpg" alt="" />
                      <div className="check"></div>
                    </div>
                    <p style={{backgroundColor:"#fff", fontSize:"13px", padding:"20px", marginTop:"10px", color:"#777777"}}>
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                  <div className="creat_account">
                    <input style={{marginRight:"10px"}} type="checkbox" id="f-option4" name="selector" />
                    <label style={{marginBottom:"20px", fontSize:"14px"}} htmlFor="f-option4">I’ve read and accept the  terms & conditions </label>
                   
                  </div>
                  <button className="button button-paypal" href="#">
                    Proceed to Paypal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
