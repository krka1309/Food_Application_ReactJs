import "./delivery.css";
import React from "react";
import quick from "../../assets/images/Quick.png";
import dine from "../../assets/images/Dine.png";
import pick from "../../assets/images/pick.png";
const Delivery = () => {
  return (
    <div className="deliveryMainDiv">
      <div className="deliveryChildDiv">
        <p className="dishParagraph">
          Your <b className="highlight">Favorite</b> Dishes,
        </p>
        <p className="awayParagraph">
          Just a <b className="highlight">Click </b>Away
        </p>
        <p className="mealParagraph">
          Delicious Meals, Delivered to Your Doorstep.
        </p>
        <p>
          No more waiting in long lines. Get your favorite meals delivered in no
          time, hassle-free.
        </p>
      </div>
      <div className="services">
        <div className="deliveryImage">
          <img src={quick} alt="" />
          <p className="deliveryServices">Quick Delivery </p>
          <p>Your Cravings, Right on Time!</p>{" "}
        </div>
        <div className="deliveryImage">
          <img src={pick} alt="" />
          <p className="deliveryServices"> Super Dine</p>
          <p>In Elevate Your Culinary Experience!</p>
        </div>
        <div className="deliveryImage">
          <img src={dine} alt="" />
          <p className="deliveryServices">Easy Pick Up</p>
          <p>Effortless Pickup: Grab and Go!</p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
