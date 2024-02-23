import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
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

export default function BestSellers() {
  const sliderRef = useRef(null);
  const products = [
    {
      id: 1,
      image: "/images/products/product1.png",
      category: "Accessories",
      title: "Quartz Belt Watch",
      price: "$150.00",
    },
    {
      id: 2,
      image: "/images/products/product2.png",
      category: "Beauty",
      title: "Women Freshwash",
      price: "$140.00",
    },
    {
      id: 3,
      image: "/images/products/product3.png",
      category: "Decor",
      title: "Room Flash Light",
      price: "$160.00",
    },
    {
      id: 4,
      image: "/images/products/product4.png",
      category: "Decor",
      title: "Room Flash Light",
      price: "$160.00",
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
    }
  ];

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
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
    <Container style={{paddingInline:"80px",marginTop:"100px", marginBottom:"100px"}}>
      <Row>
        <div className="product-heading">
          <p>Popular Item in the market</p>
          <h2>
            Best<span> Sellers</span>
          </h2>
        </div>
        <div className="row">
          <Slider ref={sliderRef} {...settings}>
            {products.map((productItem) => (
              <div key={productItem.id} className="col-md-6 col-lg-4 col-xl-3">
                <div className="product-card">
                  <div className="product-card-img">
                    <img src={productItem.image} alt="productImage" />
                  </div>
                  <div className="product-icon">
                    <div className="icon">
                      <IoIosSearch style={{ color: "#fff", fontSize: "20px"}}/>
                    </div>
                    <div className="icon">
                      <GiShoppingCart style={{ color: "#fff", fontSize: "20px"}}/>
                    </div>
                    <div className="icon">
                      <CiHeart style={{ color: "#fff", fontSize: "20px"}} />
                    </div>
                  </div>
                  <div className="card-text">
                    <p>{productItem.category}</p>
                    <Link to="../productdetails"><h4>{productItem.title}</h4></Link>
                    <p className="product-price">{productItem.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div style={{ textAlign: "center", fontSize: "20px", cursor: "pointer" }}>
            <GoArrowLeft onClick={handlePrevSlide} />
            <GoArrowRight onClick={handleNextSlide} />
          </div>
        </div>
      </Row>
    </Container>
  );
}
