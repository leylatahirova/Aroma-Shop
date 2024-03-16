import React from "react";
import { Container} from "react-bootstrap";
import "../styles/Subscribe.sass";


export default function Subscribe() {
  return (
    <Container>
        <section className="subscribe-position">
          <div className="subscribe text-center">
            <h3 className="subscribe__title">Get Update From Anywhere</h3>
            <p>
              Stay informed with our subscription page!
            </p>
            <div>
              <form className="subscribe-form form-inline mt-5 pt-1" >
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
                <button className="subButton" type="submit">Subscribe Now</button>
              </form>
            </div>
          </div>
        </section>
    </Container>
  );
}
