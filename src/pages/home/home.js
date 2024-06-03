import React from "react";
import Header from "../../components/header/header";
import boy from "../../assets/images/boyA.jpeg";
import "./home.css";
import Hero from "../hero/hero";
import FoodCard from "../card/foodCard";
import Delivery from "../hero/delivery";

const Home = () => {
  return (
    <div className="homeMainDiv">
      <Hero />
      <FoodCard />
      <Delivery />
    </div>
  );
};

export default Home;
