import React from "react";
import food from "../../assets/images/food2.png";
import "./foodCart.css";
const FoodCard = () => {
  return (
    <div className="foodCart">
      <div className="childDiv">
        <img src={food} alt="" className="foodImage" />
        <span className="title">FastFood</span>
      </div>
      <div className="childDiv">
        <img src={food} alt="" className="foodImage" />
        <span className="title">FastFood</span>
      </div>
      <div className="childDiv">
        <img src={food} alt="" className="foodImage" />
        <span className="title">FastFood</span>
      </div>
      <div className="childDiv">
        <img src={food} alt="" className="foodImage" />
        <span className="title">FastFood</span>
      </div>
    </div>
  );
};

export default FoodCard;
