import React from "react";
import Header from "../Components/Header";
import PagesBanner from "../Components/PagesBanner";
import Footer from "../Components/Footer";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineHeadphones } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import "../styles/Contact.sass";

export default function Contact() {
  return (
    <>
      <Header />
      <PagesBanner text1="Contact Us" text2="Home-Contact Us" />
      <div className="contact__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.1727625711774!2d-118.34038082493527!3d34.09071441569905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bebb074ab833%3A0x3003ecc0a07f08fe!2sSanta%20Monica%20Blvd%2C%20California%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2saz!4v1708438707430!5m2!1str!2saz"
          width="1200"
          height="400"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <div style={{paddingInline:"80px", marginBottom:"100px"}} className="container">
      <div className="row">
        <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
          <div className="contact-info">
            <span className="contact-info__icon"><AiOutlineHome style={{color:"#384aeb",fontSize:"20px"}} /></span>
            <div className="media-body" >
              <h3>California United States</h3>
              <p>Santa monica bullevard</p>
            </div>
          </div>
          <div className="contact-info">
            <span className="contact-info__icon"><MdOutlineHeadphones style={{color:"#384aeb",fontSize:"20px"}} /></span>
            <div className="media-body">
              <h3>00 (440) 9865 562</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="contact-info">
            <span className="contact-info__icon"><MdOutlineMailOutline style={{color:"#384aeb",fontSize:"20px"}} /></span>
            <div className="media-body">
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-lg-9">
          <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate>
            <div className="row">
              <div className="col-lg-5">
                <div className="form-group">
                  <input className="form-control" name="name" id="name" type="text" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <input className="form-control" name="email" id="email" type="email" placeholder="Enter email address" />
                </div>
                <div className="form-group">
                  <input className="form-control" name="subject" id="subject" type="text" placeholder="Enter Subject" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="form-group">
                  <textarea className="form-control different-control w-100" name="message" id="message" cols="30" rows="5" placeholder="Enter Message"></textarea>
                </div>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="button-contactForm">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
