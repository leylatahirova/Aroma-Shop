import React, {useRef} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/BestSellers.sass";

export default function BestSellers() {
 const sliderRef = useRef(null);
  const products = [
    {
      id: 1,
      image: "/images/products/product1.png",
      category: "Accessories",
      title: "Quartz Belt Watch",
      price: "$150.00"
    },
    {
      id: 2,
      image: "/images/products/product2.png",
      category: "Beauty",
      title: "Women Freshwash",
      price: "$140.00"
    },
    {
      id: 3,
      image: "/images/products/product3.png",
      category: "Decor",
      title: "Room Flash Light",
      price: "$160.00"
    },
    {
      id: 4,
      image: "/images/products/product4.png",
      category: "Decor",
      title: "Room Flash Light",
      price: "$160.00"
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
}

const handleNextSlide = () => {
    sliderRef.current.slickNext();
}

  return (
    <Container>
      <Row>
        <div className='product-heading'>
          <p>Popular Item in the market</p>
          <h2>Best<span> Sellers</span></h2>
        </div>
        <div className='row'>
        <Slider ref={sliderRef} {...settings}>
          {products.map((productItem) => (
            <div key={productItem.id} className='col-md-6 col-lg-4 col-xl-3'>
              <div className='product-card'>
                <div className='product-card-img'>
                  <img src={productItem.image} alt="productImage" />
                </div>
                <div className='card-text'>
                  <p>{productItem.category}</p>
                  <h4>{productItem.title}</h4>
                  <p className='product-price'>{productItem.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div style={{textAlign:"center", fontSize:"20px", cursor:"pointer"}}>
            <GoArrowLeft onClick={handlePrevSlide} />
            <GoArrowRight onClick={handleNextSlide} />
        </div>
        </div>
      </Row>
    </Container>
  );
}