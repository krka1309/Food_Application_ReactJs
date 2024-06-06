import React from "react";
import whyImg from "../../assets/imagesAll/location.png";
import "./ambrosiya.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
const Ambrosiya = () => {
  return (
    <div className="aboutUs">
      <div className="whyImage">
        <img src={whyImg} alt="" className="whyImage" />
      </div>
      <div className="why">
        <span className="heading">
          Why <strong style={{ color: "red" }}>Ambrosyia?</strong>
        </span>
        <p className="whyParagraph">
          <b style={{ color: "red" }}>Ambrosyia</b> is a revolutionary food
          delivery app designed to make your dining experience more convenient,
          <br /> enjoyable, and hassle-free. With a wide range of restaurants,
          cuisines, and delivery options at your fingertips, <br />
          you can satisfy your cravings in just a few taps.
        </p>
        <ol className="listStyle">
          <li>
            <AiOutlineCheckCircle className="tickeIcon" />
            Fresh and tasty foods
          </li>
          <li>
            <AiOutlineCheckCircle className="tickeIcon" />
            Quatity Support
          </li>
          <li>
            <AiOutlineCheckCircle className="tickeIcon" />
            Order from any location
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Ambrosiya;
