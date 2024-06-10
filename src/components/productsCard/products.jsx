import React from "react";
import { Link } from "react-router-dom";
import "./products.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/productSlice";
const Products = (props) => {
  const { id, title, price, image01 } = props.item;
  let dispatch = useDispatch();
  let selector = useSelector((state) => state.productReducer.cartItems);
  selector.map((item) => {
    console.log(process.env.PUBLIC_URL + item.image01);
  });

  const handleAdd = () => {
    dispatch(
      addToCart({
        id,
        title,
        image01,
        price,
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
