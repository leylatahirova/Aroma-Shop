import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../styles/Slider.sass";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderComponent() {
  const sliderImages = [
    {
      id: 1,
      image: "./images/banner/hero-slide1.png",
      title: "Wireless Headphone",
      category: "Accessories Item",
    },
    {
      id: 2,
      image: "./images/banner/hero-slide2.png",
      title: "Wireless Headphone",
      category: "Accessories Item",
    },
    {
      id: 3,
      image: "./images/banner/hero-slide3.png",
      title: "Wireless Headphone",
      category: "Accessories Item",
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

  return (
      <Row >
        <div className="banner-row-images">
          <Slider {...settings}>
            {sliderImages.map((item) => (
              <div className="slider-info" key={item.id}>
                <img src={item.image} alt="slide1" />
                <div className="slide-overlay">
                  <h5>{item.title}</h5>
                  <p>{item.category}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Row>
  
  );
}
