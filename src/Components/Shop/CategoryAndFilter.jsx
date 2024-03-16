import React, { useState} from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/CategoryAndFilter.sass";


export default function CategoryAndFilter() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);



  const handleAddToCart = (productItem) => {
    dispatch(addToCart(productItem));
  
  };


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
  


  return (
    <section className="section-margin--small mb-5">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-5">
          <div className="sidebar-categories">
            <div className="sidebar-list">Browse Categories</div>
            <div className="sidebar-all">
              <ul style={{listStyle:"none"}}>
                <li>
                  <input
                    className="input-radio"
                    type="radio"
                    id="all"
                    checked={!selectedCategory}
                    onChange={() => handleCategoryChange("all")}
                  />
                  <label htmlFor="all">All (15)</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="electronics"
                    checked={selectedCategory === "Electronics"}
                    onChange={() => handleCategoryChange("Electronics")}
                  />
                  <label htmlFor="electronics">Electronics (2)</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="accessories"
                    checked={selectedCategory === "Accessories"}
                    onChange={() => handleCategoryChange("Accessories")}
                  />
                  <label htmlFor="accessories">Accessories (7)</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="beauty"
                    checked={selectedCategory === "Beauty"}
                    onChange={() => handleCategoryChange("Beauty")}
                  />
                  <label htmlFor="beauty">Beauty (3)</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="decor"
                    checked={selectedCategory === "Decor"}
                    onChange={() => handleCategoryChange("Decor")}
                  />
                  <label htmlFor="decor">Decor (2)</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="kidsToy"
                    checked={selectedCategory === "Kids Toy"}
                    onChange={() => handleCategoryChange("Kids Toy")}
                  />
                  <label htmlFor="kidsToy">Kids Toy (1)</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-categories">
            <div className="sidebar-list">Product Filters</div>
            <div className="sidebar-all">
              <ul style={{listStyle:"none"}}>
                <span>Brands</span>
                <li>
                  <input
                    className="input-radio"
                    type="radio"
                    id="all2"
                    checked={!selectedBrand}
                    onChange={() => handleBrandChange("all")}
                  />
                  <label htmlFor="all2">All (15)</label>
                </li>
                <li>
                  <input 
                    type="radio" 
                    id="apple" 
                    checked={selectedBrand === "apple"}
                    onChange={() => handleBrandChange("apple")}
                  />
                  <label htmlFor="apple">Apple (12)</label>
                </li>
                <li>
                  <input 
                    type="radio" 
                    id="asus" 
                    checked={selectedBrand === "asus"}
                    onChange={() => handleBrandChange("asus")}
                    />
                  <label htmlFor="asus">Asus (23)</label>
                </li>
                <li>
                  <input 
                    type="radio"
                    id="gionee"
                    checked={selectedBrand === "gionee"}
                    onChange={() => handleBrandChange("gionee")}
                  />
                  <label htmlFor="gionee">Gionee (34)</label>
                </li>
                <li>
                  <input 
                    type="radio"
                    id="micromax"
                    checked={selectedBrand === "micromax"}
                    onChange={() => handleBrandChange("micromax")}
                  />
                  <label htmlFor="micromax">Micromax (12)</label>
                </li>
                <li>
                  <input 
                    type="radio"
                    id="samsung"
                    checked={selectedBrand === "samsung"}
                    onChange={() => handleBrandChange("samsung")}
                  />
                  <label htmlFor="samsung">Samsung (54)</label>
                </li>
              </ul>
              <ul style={{listStyle:"none"}}>
                <span>Color</span>
                <li>
                  <input
                    className="input-radio"
                    type="radio"
                    id="all3"
                    checked={!selectedColor}
                    onChange={() => handleColorChange("all")}
                  />
                  <label htmlFor="all3">All (15)</label>
                </li>
                <li>
                  <input 
                    type="radio"
                    id="black"
                    checked={selectedColor === "black"}
                    onChange={() => handleColorChange("black")}
                  />
                  <label htmlFor="black">Black (22)</label>
                </li>
                <li>
                  <input 
                    type="radio"
                    id="blackLeather"
                    checked={selectedColor === "blackLeather"}
                    onChange={() => handleColorChange("blackLeather")}
                  />
                  <label htmlFor="blackLeather">Black Leather (64)</label>
                </li>
                <li>
                  <input 
                    type="radio"
                    id="white"
                    checked={selectedColor === "white"}
                    onChange={() => handleColorChange("white")}
                  />
                  <label htmlFor="white">White (23)</label>
                </li>
                <li>
                  <input 
                    type="radio"
                    id="gold"
                    checked={selectedColor === "gold"}
                    onChange={() => handleColorChange("gold")}
                  />
                  <label htmlFor="gold">Gold (34)</label>
                </li>
                <li>
                  <input 
                    type="radio"
                    id="spacegrey"
                    checked={selectedColor === "spacegrey"}
                    onChange={() => handleColorChange("spacegrey")}
                  />
                  <label htmlFor="spacegrey">Spacegrey (56)</label>
                </li>
              </ul>
              {/* <ul>
                <span>Price</span>
                <input
                  type="range"
                  id="volume"
                  name="volume"
                  min="0"
                  max="1000"
                />
              </ul> */}
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-8 col-md-7">
          <div className="filter__bar">
            {/* <div className="sorting">
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
            </div> */}
            <div>
              <div className="input-group filter-bar-search">
                <input id="search"  type="text" placeholder="Search" />
                <CiSearch className="input__search" />
                <div className="input-group-append"> </div>
              </div>
            </div>
          </div>
          <section className="latest__product">
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
                    <div className="product-icon1">
                      <div className="iconn">
                        <IoIosSearch
                          style={{ color: "#fff", fontSize: "20px" }}
                        />
                      </div>
                      <div className="iconn">
                        <GiShoppingCart
                        onClick={() => {
                          handleAddToCart(productItem)
                        }}
                          style={{ color: "#fff", fontSize: "20px" }}
                        />
                      </div>
                      <div className="iconn">
                        <CiHeart style={{ color: "#fff", fontSize: "20px" }} />
                      </div>
                    </div>
                    <div></div>
                    <div className="card-text">
                      <p>{productItem.category}</p>
                      <Link to={`/productdetails/${productItem.id}`}>
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
      </div>
    </div>
    </section>
  );
}
