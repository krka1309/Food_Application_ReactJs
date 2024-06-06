import React from "react";
import { Link } from "react-router-dom";
import "./products.css";
const Products = (props) => {
  const { id, title, price, image01 } = props.item;
  return (
    <div className="productsMainDIv">
      <div className="productsChildDiv">
        <div className="childDiv2">
          <img src={image01} className="productImage" />
          <Link>{title}</Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
