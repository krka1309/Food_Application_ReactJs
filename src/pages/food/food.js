import React, { useState } from "react";
import "./food.css";
import Products from "../../components/productsCard/products";
import products from "../../assets/fake-data/products";
import Contact from "../contact/contact";
const Food = () => {
  const [allProducts, setAllProducts] = useState(products);
  return (
    <div>
      <div className="mainDivFood">
        <div className="allFood">All Foods</div>
        <div className="filterItems">
          <input type="text" className="inputFilter" />
        </div>

        <div className="productsContainer1">
          {allProducts.map((item) => {
            return <Products item={item} />;
          })}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Food;
