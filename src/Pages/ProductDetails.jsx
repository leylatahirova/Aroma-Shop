import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import PagesBanner from "../Components/PagesBanner";
import TopProducts from "../Components/Shop/TopProducts";
import Footer from "../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { IoDiamondOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import Button from "react-bootstrap/Button";
import { addToCart } from "../redux/actions";
import "../styles/ProductDetails.sass";


export default function ProductDetails() {
  const { id } = useParams();
  const productId = parseInt(id);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const productItem = products.find((product) => product.id === productId);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (productItem) => {
    dispatch(addToCart({ ...productItem, quantity }));
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };
  
  
  
  return (
    <>
      <Header />
      <PagesBanner text1="Shop Single" text2="Home-Shop Single" />
      <Container>
        <Row className="product__row">
          <Col lg={5}>
            <div className="product__img">
              <img src={productItem.image}  alt="product1" />
            </div>
          </Col>
          <Col lg={5} className="offset-lg-1">
            <div className="product__details">
              <div className="product__text">
                <h3>{productItem.title}</h3>
                <h2>{productItem.price}</h2>
                <ul style={{listStyle:"none"}}>
                  <li>
                    Category<span> :{productItem.category}</span>
                  </li>
                  <li>
                    Availibility<span> :{productItem.availibility}</span>
                  </li>
                </ul>
                <p>{productItem.description} </p>
              </div>
              <label>
                Quantity:
                <input 
                    type="number" 
                    value={quantity}
                    onChange={handleQuantityChange}
                    >
                </input>
              </label>
              <Button
                style={{ backgroundColor: "#495DED" }}
                variant="primary"
                onClick={() => {
                  handleAddToCart(productItem);
                }}
              >
                Add to cart
              </Button>
              <div className="product__icon">
                <div className="product__icon1">
                  <IoDiamondOutline />
                </div>
                <div className="product__icon1">
                  <IoMdHeartEmpty />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <TopProducts />
      <Footer />
    </>
  );
}








