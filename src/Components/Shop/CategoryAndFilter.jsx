import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "../../styles/Shop.sass";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function CategoryAndFilter() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === "all" ? "" : category);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand === "all" ? "" : brand);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color === "all" ? "" : color);
  };

  const products = [
    {
      id: 1,
      image: "./images/products/product1.png",
      category: "Accessories",
      title: "Quartz Belt Watch",
      price: "$150.00",
      brand: "Apple",
      color: "Black",
    },
    {
      id: 2,
      image: "./images/products/product2.png",
      category: "Beauty",
      title: "Women Freshwash",
      price: "$140.00",
      brand: "Asus",
      color: "Black",
    },
    {
      id: 3,
      image: "./images/products/product3.png",
      category: "Decor",
      title: "Room Flash Light",
      price: "$160.00",
    },
    {
      id: 4,
      image: "./images/products/product4.png",
      category: "Decor",
      title: "Room Flash Light",
      price: "$190.00",
    },
    {
      id: 5,
      image: "./images/products/product5.png",
      category: "Accessories",
      title: "Man Office Bag",
      price: "$110.00",
    },
    {
      id: 6,
      image: "./images/products/product6.png",
      category: "Kids Toy",
      title: "Charging Car",
      price: "$100.00",
    },
    {
      id: 7,
      image: "./images/products/product7.png",
      category: "Electronics",
      title: "Blutooth Speaker",
      price: "$120.00",
    },
    {
      id: 8,
      image: "./images/products/product8.png",
      category: "Electronics",
      title: "Charging Car",
      price: "$160.00",
    },
    {
      id: 9,
      image: "./images/products/product9.png",
      category: "Accessories",
      title: "Architecture Book",
      price: "$160.00",
    },
    {
      id: 10,
      image: "./images/products/product10.png",
      category: "Beauty",
      title: "Tallow Cream",
      price: "$160.00",
    },
    {
      id: 11,
      image: "./images/products/product11.png",
      category: "Beauty",
      title: "Yuzu Organic Soap",
      price: "$180.00",
    },
    {
      id: 12,
      image: "./images/products/product12.png",
      category: "Accessories",
      title: "Workout Bottle (16oz)",
      price: "$160.00",
    },
    {
      id: 13,
      image: "./images/products/product13.png",
      category: "Accessories",
      title: "Signet Ring — 5mm",
      price: "$160.00",
    },
    {
      id: 14,
      image: "./images/products/product14.png",
      category: "Accessories",
      title: "iPhone Xs — Case",
      price: "$190.00",
    },
    {
      id: 15,
      image: "./images/products/product15.png",
      category: "Accessories",
      title: "Minimalist wallet",
      price: "$130.00",
    },
  ];

  const filteredProducts = products.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    if (selectedBrand && product.brand !== selectedBrand) {
      return false;
    }
    if (selectedColor && product.color !== selectedColor) {
      return false;
    }
    return true;
  });
  // const filteredProducts = selectedCategory
  //   ? products.filter((product) => product.category === selectedCategory)
  //   : products;

  return (
    <Container style={{ paddingInline: "80px" }}>
      <Row>
        <div className="col-xl-3 col-lg-4 col-md-5">
          <div className="sidebar-categories">
            <div className="sidebar-list">Browse Categories</div>
            <div className="sidebar-all">
              <ul>
                <li>
                  <input
                    className="input-radio"
                    type="radio"
                    id="all"
                    checked={!selectedCategory}
                    onChange={() => handleCategoryChange("all")}
                  />
                  <label>All (15)</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="electronics"
                    checked={selectedCategory === "Electronics"}
                    onChange={() => handleCategoryChange("Electronics")}
                  />
                  <label>Electronics (2)</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="accessories"
                    checked={selectedCategory === "Accessories"}
                    onChange={() => handleCategoryChange("Accessories")}
                  />
                  <label>Accessories (7)</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="beauty"
                    checked={selectedCategory === "Beauty"}
                    onChange={() => handleCategoryChange("Beauty")}
                  />
                  <label>Beauty (3)</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="decor"
                    checked={selectedCategory === "Decor"}
                    onChange={() => handleCategoryChange("Decor")}
                  />
                  <label>Decor (2)</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="kidsToy"
                    checked={selectedCategory === "Kids Toy"}
                    onChange={() => handleCategoryChange("Kids Toy")}
                  />
                  <label>Kids Toy (1)</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-categories">
            <div className="sidebar-list">Product Filters</div>
            <div className="sidebar-all">
              <ul>
                <span>Brands</span>
                <li>
                  <input type="radio" id="apple" />
                  <label>Apple (12)</label>
                </li>
                <li>
                  <input type="radio" id="asus" />
                  <label>Asus (23)</label>
                </li>
                <li>
                  <input type="radio" id="gionee" />
                  <label>Gionee (34)</label>
                </li>
                <li>
                  <input type="radio" id="micromax" />
                  <label>Micromax (12)</label>
                </li>
                <li>
                  <input type="radio" id="samsung" />
                  <label>Samsung (54)</label>
                </li>
              </ul>
              <ul>
                <span>Color</span>
                <li>
                  <input type="radio" id="black" />
                  <label>Black (22)</label>
                </li>
                <li>
                  <input type="radio" id="blackLeather" />
                  <label>Black Leather (64)</label>
                </li>
                <li>
                  <input type="radio" id="red" />
                  <label>Black with red (23)</label>
                </li>
                <li>
                  <input type="radio" id="gold" />
                  <label>Gold (34)</label>
                </li>
                <li>
                  <input type="radio" id="spacegrey" />
                  <label>Spacegrey (56)</label>
                </li>
              </ul>
              <ul>
                <span>Price</span>
                <input
                  type="range"
                  id="volume"
                  name="volume"
                  min="0"
                  max="1000"
                />
              </ul>
            </div>
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
              {filteredProducts.map((productItem) => (
                <div
                  key={productItem.id}
                  className="col-md-6 col-lg-4 col-xl-4"
                >
                  <div className="product-card">
                    <div className="product-card-img">
                      <img src={productItem.image} alt="productImage" />
                    </div>
                    <div className="product-icon">
                      <div className="icon">
                        <IoIosSearch
                          style={{ color: "#fff", fontSize: "20px" }}
                        />
                      </div>
                      <div className="icon">
                        <GiShoppingCart
                          style={{ color: "#fff", fontSize: "20px" }}
                        />
                      </div>
                      <div className="icon">
                        <CiHeart style={{ color: "#fff", fontSize: "20px" }} />
                      </div>
                    </div>
                    <div></div>
                    <div className="card-text">
                      <p>{productItem.category}</p>
                      <Link to="../productdetails">
                        <h4>{productItem.title}</h4>
                      </Link>
                      <p className="product-price">{productItem.price}</p>
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
