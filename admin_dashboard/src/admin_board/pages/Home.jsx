import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Admin_Login from "../components/Forms/Admin_Login";
import "../Styles/Home.css";
import Admin_Register from "../components/Forms/Admin_Register";

const Home = () => {
  return (
    <>
      <section className="Home">
        <NavBar />
        <div className="main-content">
          <SideBar />
          {/* <Admin_Login /> */}
          <Admin_Register />
        </div>
      </section>
    </>
  );
};

export default Home;
