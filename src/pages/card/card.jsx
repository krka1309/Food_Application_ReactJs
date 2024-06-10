import React, { useState } from "react";
import "./card.css";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import Carts from "../carts/carts";
const Card = () => {
  const [cartOpen, setCartOpen] = useState(false);
  let selector = useSelector((state) => state.productReducer.cartItems);
  let totalItems = selector.length;
  console.log(selector.length);
  return (
    <div className="cartMainDiv">
      <BiShoppingBag
        className="bagIcon"
        onClick={() => setCartOpen(!cartOpen)}
      />
      <span className={totalItems > 9 ? "quantity1" : "quantity"}>
        {totalItems}
      </span>
      <div />
      <div className={cartOpen ? "cartOpen" : "cartClose"}>
        <div className="title">
          <p>Shopping list</p>
          <AiOutlineClose
            onClick={() => setCartOpen(false)}
            className="outlineIcon"
          />
        </div>
        <div className="itemsP">
          <Carts />
        </div>
        <div className="Subtotal">
          <p>
            Subtotal:
            <nbsp /> <span>$0</span>
          </p>
          <span className="checkout">Checkout</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
