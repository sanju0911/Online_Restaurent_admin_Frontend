import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
          <span style={{ color: "#FFD700" }}>My</span>Restaurant
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/Home" className="mx-2">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/restaurants" className="mx-2">
                  Restaurants
                </Nav.Link>
                <Nav.Link as={Link} to="/items" className="mx-2">
                  Items
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="mx-2">
                  About Us
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="mx-2">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" className="mx-2">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
          {isAuthenticated && (
            <Button
              variant="outline-warning"
              className="ms-3"
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
