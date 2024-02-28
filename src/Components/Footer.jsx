import React from 'react';
import "../styles/Footer.sass";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Container className='footer' fluid>
        <Row style={{margin:"0 auto", maxWidth:"1200px" }}>
            <div className='col-lg-3 col-md-6 col-sm-6'>
                <div className='footer-about'>
                    <h4>
                        Our Mission
                    </h4>
                    <p>
                        So seed seed green that winged cattle in. 
                        Gathering thing made fly you're no divided 
                        deep moved us lan Gathering thing us land years 
                        living.
                    </p>
                    <p>
                        So seed seed green that winged cattle in. Gathering 
                        thing made fly you're no divided deep moved
                    </p>
                </div>
            </div>
            <div className='offset-lg-1 col-lg-2 col-md-6 col-sm-6'>
                <div className='footer-links'>
                    <h4>
                        Quick Links
                    </h4>
                    <ul>
                        <Link to="/home"><li>Home</li></Link>
                        <Link to="/shopcategory"><li>Shop</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                </div>
            </div>
            <div className='col-lg-2 col-md-6 col-sm-6'>
                <div className='footer-gallery'>
                    <h4>
                        Gallery
                    </h4>
                    <div style={{display:"flex"}}>
                        <ul>
                            <li><img src="./images/footer/r5.jpg" alt="gallery4" /></li>
                            <li><img src="./images/footer/r7.jpg" alt="gallery5" /></li>
                            <li><img src="./images/footer/r8.jpg" alt="gallery6" /></li>
                        </ul>
                        <ul>
                        <li><img src="./images/footer/r1.jpg" alt="gallery1" /></li>
                        <li><img src="./images/footer/r2.jpg" alt="gallery2" /></li>
                        <li><img src="./images/footer/r3.jpg" alt="gallery3" /></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className='offset-lg-1 col-lg-3 col-md-6 col-sm-6'>
                <div className='footer-contact'>
                    <Link to="/contact"><h4>Contact Us</h4></Link>
                    <div className='ml-40'>
                        <div style={{display:"flex"}}>
                            <div className='footer__icon'><FaLocationArrow style={{color:"#fff"}}/></div> 
                            <div className='footer__info'>
                                <h6 >Head Office</h6>
                                <p>123, Main Street, Your City</p>
                            </div>
                        </div>
                        <div style={{display:"flex"}}>
                            <div className='footer__icon'><FaPhone style={{color:"#fff"}} /></div>
                            <div className='footer__info'>
                                <h6> Phone Number</h6>
                                <p>+123 456 7890 
                                    <br/>
                                    +123 456 7890
                                </p>
                            </div>
                        </div>
                        <div style={{display:"flex"}}>
                        <div className='footer__icon'><MdEmail style={{color:"#fff"}}/> </div>
                            <div className='footer__info'>
                                <h6>Email</h6>
                                <p>
                                    free@infoexample.com
                                    <br/>
                                    www.infoexample.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center",alignContent:"center", marginTop:"130px"}}>
                <p style={{color:"#fff"}}>
                     Copyright ©2024 All rights reserved | This template is made with <FaHeart />  by <span style={{color:"#384aeb"}}>Colorlib</span>
                 </p>
            </div>
         </Row> 
    </Container>
  )
}
