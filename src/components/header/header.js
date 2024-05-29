import React from "react";
import "./header.css";
import restaurant from "../../assets/images/resturant.jpeg";
import Navbar from "./navbar";
const Header = () => {
  return (
    <div className="mainDiv">
      <img src={restaurant} alt="" className="restaurantImg" />
      {/* <Navbar /> */}
    </div>
  );
};

export default Header;
