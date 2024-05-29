import React from "react";
import "./header.css";
import restaurant from "../../assets/images/resturant.jpeg";
import Cart from "../../pages/cart/cart";
import Navbar from "./navbar";
const Header = () => {
  return (
    <div className="mainDiv">
      <img src={restaurant} alt="" className="restaurantImg" />
      <Navbar />
      <Cart />
    </div>
  );
};

export default Header;
