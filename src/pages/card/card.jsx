import React, { useState } from "react";
import "./card.css";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import Carts from "../carts/carts";
const Card = () => {
  const [cartOpen, setCartOpen] = useState(false);
  let totalQuantity = useSelector((state) => state.productReducer.quantity);
  let cartItems = useSelector((state) => state.productReducer.cartItems);
  const sumTotal = (cartItems) =>
    cartItems.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  let items = useSelector((state) => state.productReducer.cartItems);
  return (
    <div className="cartMainDiv">
      <BiShoppingBag
        className="bagIcon"
        onClick={() => setCartOpen(!cartOpen)}
      />
      <span className={totalQuantity > 9 ? "quantity1" : "quantity"}>
        {totalQuantity}
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
          {items.map((item, index) => {
            return <Carts key={index} items={item} />;
          })}
        </div>
        <div className="Subtotal">
          <p>
            Subtotal:
            <span> ${sumTotal(cartItems)}</span>
          </p>
          <span className="checkout">Checkout</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
