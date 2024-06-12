import React, { useState } from "react";
import "./home.css";
import Hero from "../hero/hero";
import FoodCard from "../card/foodCard";
import burger from "../../assets/imagesAll/hamburger.png";
import pizza from "../../assets/imagesAll/pizza.png";
import bread from "../../assets/imagesAll/bread.png";
import products from "../../assets/fake-data/products";
import Delivery from "../hero/delivery";
import Products from "../../components/productsCard/products";
import Ambrosiya from "../Ambrosiya/ambrosiya";
import Reviews from "../reviews/reviews";
import Contact from "../contact/contact";

const Home = () => {
  const [allProducts, setAllProducts] = useState(products);
  return (
    <div className="homeMainDiv">
      <Hero />
      <FoodCard />
      <Delivery />
      <div className="homeMainHeadline">
        <h2>Popular Foods</h2>
        <div className="childDiv10">
          <button className="titleAll">All</button>
          <button className="titleImages">
            <img src={burger} alt="" />
            Burger
          </button>
          <button className="titleImages">
            <img src={pizza} alt="" />
            Pizza
          </button>
          <button className="titleImages">
            <img src={bread} alt="" />
            Bread
          </button>
        </div>
      </div>
      <div className="productMainContainer">
        <div className="productsContainer">
          {allProducts.map((item, index) => {
            return <Products key={index} item={item} />;
          })}
        </div>
      </div>
      <Ambrosiya />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
