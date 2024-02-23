import React from "react";
import Header from "../Components/Header";
import PagesBanner from "../Components/PagesBanner";
import Footer from "../Components/Footer";
import Button from "../Components/Button";

export default function ShoppingCart() {
  const cartProducts = [
    {
      id: 1,
      image: "./images/shop/cart1.png",
      title: "Minimalistic shop for multipurpose use",
      price: "$360.00",
      quantity: "2",
      total: "$720.00",
    },
    {
      id: 2,
      image: "./images/shop/cart2.png",
      title: "Minimalistic shop for multipurpose use",
      price: "$360.00",
      quantity: "2",
      total: "$720.00",
    },
    {
      id: 3,
      image: "./images/shop/cart3.png",
      title: "Minimalistic shop for multipurpose use",
      price: "$360.00",
      quantity: "2",
      total: "$720.00",
    },
  ];
  return (
    <>
      <Header />
      <PagesBanner text1="Shopping Cart" text2="Home-Shopping Cart" />
      <section className="cart__area">
        <div className="container" style={{ paddingInline: "80px" }}>
          <div className="cart__area_thead">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              {cartProducts.map((cartItem)=> (
              <tbody key={cartItem.id}>
                <tr>
                  <td>
                    <div className="cart__area__image">
                      <div>
                        <img src={cartItem.image} alt="cart1" />
                      </div>
                      <div>
                        <p>{cartItem.title}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>{cartItem.price}</h5>
                  </td>
                  <td>
                    <div>
                      <input type="number" defaultValue={1} title="Quantity:" />
                    </div>
                  </td>
                  <td>
                    <h5>{cartItem.total}</h5>
                  </td>
                </tr>
              </tbody>
                ))}
                <tbody>
                    <tr>
                        <td>
                            <Button>Update Cart</Button>
                        </td>
                        <td>
                            <Button>Coupon Code</Button>
                        </td>
                        <td>
                            <Button>Apply</Button>
                        </td>
                        <td>
                            <Button>Have a Coupon?</Button>
                        </td>
                    </tr>
                </tbody>

            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
