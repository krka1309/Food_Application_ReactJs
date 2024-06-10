import React from "react";
import { useSelector } from "react-redux";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import "./carts.css";
const Carts = () => {
  const products = useSelector((state) => state.productReducer.cartItems);
  return (
    <div>
      <div>
        {products.length == 0 ? (
          <div>No products added</div>
        ) : (
          <div>
            {products.map((item) => {
              return (
                <div className="cartMainDivP">
                  <div className="cartItems">
                    <img src={item.image01} alt="" className="prodImg" />
                    <div className="productValue">
                      <span className="prodTitle">{item.title}</span>
                      <span className="prodPrice">$ {item.price}</span>
                    </div>
                    <div className="productIcons">
                      <CiCirclePlus className="circleIcon" />
                      <CiCircleMinus className="circleIcon" />
                    </div>
                  </div>
                </div>
              );
            })}{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carts;
