import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../styles/Slider.sass";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function SliderComponent() {
  const sliderImages = [
    {
      id: 1,
      image: "./images/banner/hero-slide1.png",
      title: "Shoes",
      category: "Accessories",
    },
    {
      id: 2,
      image: "./images/banner/hero-slide2.png",
      title: "Wireless Headphone",
      category: "Accessories",
    },
    {
      id: 3,
      image: "./images/banner/hero-slide3.png",
      title: "Decorative items",
      category: "Accessories",
    },
    {
      id: 4,
      image: "./images/banner/hero-slide5.png",
      title: "Face cream",
      category: "Beauty",
    },
    {
      id: 5,
      image: "./images/banner/hero-slide7.png",
      title: "Skin lotion",
      category: "Beauty",
    },
  ];

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  return (
    <Container   >
      <Row style={{paddingInline:"14px"}}>
        <div className="banner-row-images">
          <Slider {...settings}>
            {sliderImages.map((item) => (
            <Link to="/productdetails" key={item.id}>
              <div className="slider-info">
                <img src={item.image} alt="slide1" />
                <div className="slide-overlay">
                  <h5>{item.title}</h5>
                  <p>{item.category}</p>
                </div>
              </div>
            </Link>
            ))}
          </Slider>
        </div>
      </Row>
    </Container>
  );
}
