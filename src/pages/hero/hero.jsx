import React from "react";
import boy from "../../assets/images/boyA.jpeg";
import "./hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/food");
  };
  return (
    <div className="heroMainDiv">
      <div>
        <h2 className="orderParagraph">Easy way to make an Order </h2>

        <span className="word">HUNGRY? </span>
        <span className="doorTitle">Just wait</span>
        <br />
        <span className="doorTitle">food at your door</span>
        <p>
          <button className="orderBtn">Order Now</button>
          <button className="seeFoodBtn" onClick={handleNavigate}>
            See all foods
          </button>
        </p>
      </div>

      <img src={boy} className="boyImage" alt="" />
    </div>
  );
};

export default Hero;
