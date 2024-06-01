import React, { useState } from "react";
import "./card.css";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
const Card = () => {
  const [cartOpen, setCartOpen] = useState(false);
  console.log(cartOpen);
  return (
    <div className="cartMainDiv">
      <BiShoppingBag
        className="bagIcon"
        onClick={() => setCartOpen(!cartOpen)}
      />
      <div />
      <div className={cartOpen ? "cartOpen" : "cartClose"}>
        <p className="title">Shopping list</p>
        <AiOutlineClose
          onClick={() => setCartOpen(false)}
          className="outlineIcon"
        />
      </div>
    </div>
  );
};

export default Card;
