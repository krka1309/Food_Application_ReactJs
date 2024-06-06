import React from "react";
import boy from "../../assets/images/boyA.jpeg";
import "./hero.css";

const Hero = () => {
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
          <button className="seeFoodBtn">See all foods</button>
        </p>
      </div>

      <img src={boy} className="boyImage" alt="" />
    </div>
  );
};

export default Hero;
