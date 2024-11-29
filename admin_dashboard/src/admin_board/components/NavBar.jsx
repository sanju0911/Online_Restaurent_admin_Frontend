import React from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Navbar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navbar">
      <h2>admin_dashboard</h2>
      <div>
        {!token && (
          <>
            <span onClick={() => navigate("/login")}>Login</span>
            <span onClick={() => navigate("/register")}>Register</span>
          </>
        )}

        {token && (
          <>
            <span onClick={() => navigate("/dashboard")}>Dashboard</span>
            <span onClick={() => navigate("/add-restaurant")}>
              Add Restaurant
            </span>
            <span onClick={() => navigate("/items")}>Items</span>
            <span onClick={() => navigate("/about")}>About Us</span>
            <span onClick={handleLogout}>Logout</span>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
