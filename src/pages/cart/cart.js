import React, { useState } from "react";
import "./cart.css";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const handleCart = () => {
    setCartOpen(true);
  };
  console.log(cartOpen);
  return (
    <div className="cartMainDiv">
      <BiShoppingBag
        className="bagIcon"
        onClick={() => setCartOpen(!cartOpen)}
      />

      <div className={cartOpen ? "cartOpen" : "cartClose"}>
        <p>Shopping list</p>
        <AiOutlineClose
          onClick={() => setCartOpen(false)}
          className="outlineIcon"
        />
      </div>
    </div>
  );
};

export default Cart;
