import React from "react";
import { Container, Carousel, Row, Col, Card, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Row className="text-center mb-5">
        <Col>
          <h1 style={{ color: "#2a5298" }}>Welcome to MyRestaurant!</h1>
          <p className="lead">
            Discover amazing food and restaurants near you!
          </p>
        </Col>
      </Row>

      {/* Carousel for Images */}
      <Carousel className="mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400/2a5298/ffffff?text=Restaurant+Image+1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Delicious Dishes</h3>
            <p>Enjoy fresh and flavorful meals made with love.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400/2a5298/ffffff?text=Restaurant+Image+2"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Cozy Atmosphere</h3>
            <p>
              Relax and unwind in a cozy environment with friends and family.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1200x400/2a5298/ffffff?text=Restaurant+Image+3"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Exceptional Service</h3>
            <p>Our staff ensures a delightful dining experience every time.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Card Section */}
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/400x200/2a5298/ffffff?text=Food+Item+1"
            />
            <Card.Body>
              <Card.Title>Food Item 1</Card.Title>
              <Card.Text>
                A savory dish that brings out the true taste of authentic
                flavors.
              </Card.Text>
              <Button variant="primary">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/400x200/2a5298/ffffff?text=Food+Item+2"
            />
            <Card.Body>
              <Card.Title>Food Item 2</Card.Title>
              <Card.Text>
                A healthy and delicious option for those who love nutritious
                meals.
              </Card.Text>
              <Button variant="primary">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/400x200/2a5298/ffffff?text=Food+Item+3"
            />
            <Card.Body>
              <Card.Title>Food Item 3</Card.Title>
              <Card.Text>
                A sweet treat to satisfy your dessert cravings after a hearty
                meal.
              </Card.Text>
              <Button variant="primary">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
