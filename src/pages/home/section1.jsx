import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";
function Section1() {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg-md={7} class   Name="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} alt="Hero" className="img-fluid" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="only">Only</h4>
                  <h4 className="price">Rs.129</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">With Onions</h2>
              <p className="text-white pt-2 pb-2">Enjoy our new Indian Tadka Masala Burger with Onion, Capsicum,  Red Chilli Sause and our secret ingredients.</p>
              <Link to="/order" className="btn">
              <button className="order_now">Order Now</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section1;
