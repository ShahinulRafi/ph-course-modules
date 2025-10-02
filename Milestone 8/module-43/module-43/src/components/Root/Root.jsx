import React from "react";
import { Outlet } from "react-router";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import "./Root.css";
const Root = () => {
  return (
    <div>
      <h3>This is Root Page</h3>
      <Nav></Nav>
      <div style={{display: "flex", gap: 100}}>
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
