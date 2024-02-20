import React from 'react'
import "../styles/Product.sass"
import Container from "react-bootstrap/Container";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';


export default function Product() {
    const products = [
        {
            id: 1,
            image: "./images/products/product1.png",
            category: "Accessories",
            title: "Quartz Belt Watch",
            price: "$150.00"
        },
        {
            id: 2,
            image: "./images/products/product2.png",
            category: "Beauty",
            title: "Women Freshwash",
            price: "$140.00"
        },
        {
            id: 3,
            image: "./images/products/product3.png",
            category: "Decor",
            title: "Room Flash Light",
            price: "$160.00"
        },
        {
            id: 4,
            image: "./images/products/product4.png",
            category: "Decor",
            title: "Room Flash Light",
            price: "$160.00"
        },
        {
            id: 5,
            image: "./images/products/product5.png",
            category: "Accessories",
            title: "Man Office Bag",
            price: "$160.00"
        },
        {
            id: 6,
            image: "./images/products/product6.png",
            category: "Kids Toy",
            title: "Charging Car",
            price: "$160.00"
        },
        {
            id: 7,
            image: "./images/products/product7.png",
            category: "Accessories",
            title: "Blutooth Speaker",
            price: "$160.00"
        },
        {
            id: 8,
            image: "./images/products/product8.png",
            category: "Accessories",
            title: "Charging Car",
            price: "$160.00"
        },
    ]


  return (
    <Container>
        <Row>
            <div className='product-heading'>
                <p>Popular Item in the market</p>
                <h2>Trending<span> Product</span></h2>
            </div>
            <div className='row'>
                {products.map((productItem) => (
                <div key={productItem.id} className='col-md-6 col-lg-4 col-xl-3'>
                    <div className='product-card'>
                        <div className='product-card-img'>
                            <img src={productItem.image} alt="productImage" />
                        </div>
                        <div className='product-icon'>
                            <div className='icon'>
                                <IoIosSearch style={{color:"#fff",fontSize:"20px"}} />
                            </div>
                            <div className='icon'>
                                < GiShoppingCart style={{color:"#fff",fontSize:"20px"}} />
                            </div>
                            <div className='icon'>
                                <CiHeart style={{color:"#fff",fontSize:"20px"}} />
                            </div>
                        </div>
                    <div>
                </div>
                        <div className='card-text'>
                            <p>{productItem.category}</p>
                            <Link to="../productdetails"><h4>{productItem.title}</h4></Link>
                            <p className='product-price'>{productItem.price}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </Row>
    </Container>
  )
}
