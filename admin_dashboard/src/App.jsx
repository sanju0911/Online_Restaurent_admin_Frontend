import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../src/admin_board/components/NavBar";
import Admin_Login from "./admin_board/components/Admin_Login";
import Admin_Register from "./admin_board/components/Admin_Register";
import Add_Rest from "./admin_board/components/Add_Rest";
import FoodItems from "./admin_board/components/AllProducts";

import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Admin_Login />} />
        <Route path="/login" element={<Admin_Login />} />
        <Route path="/register" element={<Admin_Register />} />
        <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />
        <Route path="/add-restaurant" element={<Add_Rest />} />
        <Route path="/items" element={<FoodItems />} />
        <Route path="/about" element={<h1>About Us</h1>} />
      </Routes>
    </>
  );
};

export default App;
