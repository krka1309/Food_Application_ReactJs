import React from "react";
import { Link } from "react-router-dom";
import "./products.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/productSlice";
const Products = (props) => {
  const { id, title, price, image01, quantity } = props.item;
  let dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addToCart({
        id,
        title,
        image01,
        price,
        quantity,
      })
    );
  };

  return (
    <div className="productsMainDIv">
      <div className="productsChildDiv">
        <div className="childDiv2">
          <img src={image01} className="productImage" />
          <Link
            style={{
              color: "black",
              listStyleType: "none",
              textDecoration: "none",
            }}
          >
            {title}
          </Link>
          <div className="addToCartDiv">
            <span style={{ color: "rgb(220 38 38)" }}>${price}</span>
            <button className="addToCartBtn" onClick={handleAdd}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
