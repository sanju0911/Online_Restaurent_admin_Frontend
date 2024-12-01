import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start mb-3">
            <h5 className="fw-bold">MyRestaurant</h5>
            <p>Delivering happiness, one bite at a time.</p>
          </Col>
          <Col md={4} className="text-center mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-decoration-none text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-decoration-none text-light">
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" className="text-decoration-none text-light">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5>Follow Us</h5>
            <a href="https://facebook.com" className="text-light mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" className="text-light mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" className="text-light mx-2">
              <i className="fab fa-twitter"></i>
            </a>
          </Col>
        </Row>
        <hr className="bg-light" />
        <p className="text-center m-0">
          &copy; 2024 MyRestaurant. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
