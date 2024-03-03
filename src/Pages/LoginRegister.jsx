import React from "react";
import Header from "../Components/Header";
import PagesBanner from "../Components/PagesBanner";
import Footer from "../Components/Footer";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

export default function LoginRegister() {
  return (
    <>
      <Header />
      <PagesBanner text1="Login / Register" text2="Home-Login/Register" />
      <MDBContainer className="my-5 gradient-form">
        <MDBRow>
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <h4 className="mt-1 mb-5 pb-1">LOG IN TO ENTER</h4>
              </div>

              <p>Please login to your account</p>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
              />

              <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} className="text-center pt-1 mb-5 pb-1">
                <MDBBtn style={{backgroundColor:"#495DED", borderRadius:"20px"}} className="mb-4 w-50 gradient-custom-2">
                  Sign in
                </MDBBtn>
                <Link>
                  Forgot password?
                </Link>
              </div>
            </div>
          </MDBCol>

          <MDBCol style={{backgroundColor:"#495DED"}} col="6" className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 style={{color:"#fff"}} class="mb-4">New to our website?</h4>
                <p style={{color:"#fff"}} class="small mb-0">
                  There are advances being made in science and technology
                  everyday, and a good example of this is the
                </p>
                <Button style={{marginTop:"20px", borderRadius:"20px", border: "1px solid #fff", backgroundColor:"transparent"}}>Create an account</Button>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  );
}
