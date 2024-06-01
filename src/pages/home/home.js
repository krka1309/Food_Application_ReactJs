import React from "react";
import Header from "../../components/header/header";
import boy from "../../assets/images/boyA.jpeg";
import "./home.css";

const Home = () => {
  return (
    <div className="homeMainDiv">
      <div>
        <h2 className="orderParagraph">Easy way to make an Order </h2>

        <span className="word">HUNGRY? </span>
        <span className="doorTitle">Just wait</span>
        <br />
        <span className="doorTitle">food at your door</span>
      </div>
      <img src={boy} className="boyImage" />
    </div>
  );
};

export default Home;
