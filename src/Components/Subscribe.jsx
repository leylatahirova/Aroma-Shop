import React from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/Subscribe.sass";
import Button from "./Button";

export default function Subscribe() {
  return (
    <Container style={{paddingInline:"80px"}}>
      <Row>
        <section className="subscribe-position">
            <div className="subscribe text-center">
              <h3 className="subscribe__title">Get Update From Anywhere</h3>
              <p>Bearing Void gathering light light his eavening unto dont afraid</p>
              <div>
                <form style={{display:"flex", justifyContent:"center"}}  className="subscribe-form form-inline mt-5 pt-1">
                    <div className="form-group ml-sm-auto">
                        <input
                        className="form-control mb-1"
                        type="email"
                        name="EMAIL"
                        placeholder="Enter your email"
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                            (e.target.placeholder = "Your Email Address")
                        }
                        />
                    </div>
                  <Button type="submit">Subscribe Now</Button>
                </form>
              </div>
            </div>
        </section>
      </Row>
    </Container>
  );
}
