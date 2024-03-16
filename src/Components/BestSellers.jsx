import React, { useRef } from "react";
import Row from "react-bootstrap/Row";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/BestSellers.sass";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function BestSellers() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);


  const handleAddToCart = (productItem) => {
    dispatch(addToCart(productItem));
    
  };
  const sliderRef = useRef(null);
  
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
      <Row style={{margin:"0 auto", maxWidth:"1200px", marginTop:"100px", marginBottom:"100px", }}>
        <div className="product__heading">
          <p>Popular Item in the market</p>
          <h2>
            Best<span> Sellers</span>
          </h2>
        </div>
        <div className="row">
          <Slider ref={sliderRef} {...settings}>
            {products.map((productItem) => (
              <div key={productItem.id} className="col-md-6 col-lg-4 col-xl-3">
                <div className="product__card">
                  <div className="product-card-img">
                    <img src={productItem.image} alt="productImage" />
                  </div>
                  <div className="product-icon">
                    <div className="icon">
                      <IoIosSearch style={{ color: "#fff", fontSize: "20px"}}/>
                    </div>
                    <div className="icon">
                      <GiShoppingCart style={{ color: "#fff", fontSize: "20px"}}
                        onClick={() => {
                        handleAddToCart(productItem)
                      }}
                      />
                    </div>
                    <div className="icon">
                      <CiHeart style={{ color: "#fff", fontSize: "20px"}} />
                    </div>
                  </div>
                  <div className="card__text">
                    <p>{productItem.category}</p>
                    <Link to={`/productdetails/${productItem.id}`}>
                      <h4>{productItem.title}</h4>
                    </Link>
                    <p className="product__price">{productItem.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div style={{ textAlign: "center", fontSize: "25px", cursor: "pointer", }}>
            <GoArrowLeft style={{marginRight:"20px"}} onClick={handlePrevSlide} />
            <GoArrowRight style={{marginLeft:"20px"}} onClick={handleNextSlide} />
          </div>
        </div>
      </Row>
  );
}
