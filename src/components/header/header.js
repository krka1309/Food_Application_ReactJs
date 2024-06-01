import React from "react";
import "./header.css";
import restaurant from "../../assets/images/resturant.jpeg";
import Card from "../../pages/card/card";
import Navbar from "./navbar";
const Header = () => {
  return (
    <div className="mainDiv">
      <img src={restaurant} alt="" className="restaurantImg" />
      <Navbar />
      <Card />
    </div>
  );
};

export default Header;
