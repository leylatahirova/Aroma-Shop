import React from "react";
import { Container, Row } from "react-bootstrap";
import "../../styles/Shop.sass"
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";


export default function CategoryAndFilter() {
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
    {
      id: 9,
      image: "./images/products/product4.png",
      category: "Accessories",
      title: "Charging Car",
      price: "$160.00"
  },
]
  return (
    <Container style={{ paddingInline: "80px" }}>
      <Row>
        <div className="col-xl-3 col-lg-4 col-md-5">
            <div className="sidebar-categories">
                <div className="sidebar-list">Browse Categories</div>
                <ul>
                  <li><input type="radio" id="men" /><label>Men <span>(3600)</span></label></li>
                  <li><input type="radio" id="men" /><label>Women <span>(3600)</span></label></li>
                  <li><input type="radio" id="men" /><label>Accessories <span>(3600)</span></label></li>
                  <li><input type="radio" id="men" /><label>Footwear <span>(3600)</span></label></li>
                  <li><input type="radio" id="men" /><label>Bay item <span>(3600)</span></label></li>
                  <li><input type="radio" id="men" /><label>Electronics <span>(3600)</span></label></li>
                </ul>
            </div>
            <div className="sidebar-categories">
            <div className="sidebar-list">Product Filters</div>
                <ul>
                  <li>Brands</li>
                  <li><input type="radio" id="men" /><label>Apple <span>(3600)</span></label></li>
                  <li><input type="radio" id="men" /><label>Asus <span>(3600)</span></label></li>
                  <li><input type="radio" id="men" /><label>Gionee <span>(3600)</span></label></li>
                  <li><input type="radio" id="men" /><label>Micromax <span>(3600)</span></label></li>
                  <li><input type="radio" id="men" /><label>Samsung <span>(3600)</span></label></li>
                </ul>
                <ul>
                  <li>Color</li>
                  <li><input type="radio" id="men" /><label>Black<span>(3600)</span></label></li>
                  <li><input type="radio" id="men" /><label>Black Leather <span>(3600)</span></label></li>
                  <li><input type="radio" id="men" /><label>Black with red <span>(3600)</span></label></li>
                  <li><input type="radio" id="men" /><label>Gold <span>(3600)</span></label></li>
                  <li><input type="radio" id="men" /><label>Spacegrey <span>(3600)</span></label></li>
                </ul>
                <p>Price</p>
                <input type="range" id="volume" name="volume" min="0" max="11" />
            </div>
        </div>
        <div className="col-xl-9 col-lg-8 col-md-7">
            <div className="filter__bar">
            <div className="sorting">
              <select className="option-a">
                <option value="1">Sort by Recommended</option>
                <option value="1">Price(High to Low)</option>
                <option value="1">Price(Low to High)</option>
                <option value="1">Price(Name (A-Z))</option>
                <option value="1">Price(Name (Z-A))</option>
                <option value="1">Price(Top Rated)</option>
              </select>
            </div>
            <div className="sorting">
              <select className="option-a">
                <option value="1">Show 1</option>
                <option value="1">Show 2</option>
                <option value="1">Show 3</option>
              </select>
            </div>
            <div>
              <div className="input-group filter-bar-search">
                <input type="text" placeholder="Search" />
                <CiSearch className="input__search" />
                <div className="input-group-append"> </div>
              </div>
            </div>
          </div>
          <section className="latest-product">
            <div className="row">
            {products.map((productItem) => (
                <div key={productItem.id} className='col-md-6 col-lg-4 col-xl-4'>
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
          </section>
        </div>


      
      </Row>
    </Container>
  );
}
