import React, { useEffect, useState } from "react";
import "./food.css";
import Products from "../../components/productsCard/products";
import products from "../../assets/fake-data/products";
import Contact from "../contact/contact";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../store/productSlice";
const Food = () => {
  const [filterText, setFilterText] = useState("");
  const [allProducts, setAllProducts] = useState(products);
  let dispatch = useDispatch();
  const handleFilter = (e) => {
    setFilterText(e.target.value);
    dispatch(filterProducts(e.target.value));
  };
  let selector = useSelector((state) => state.productReducer.searchText);

  useEffect(() => {
    if (selector.length === 0) {
      setAllProducts(products);
    } else {
      setAllProducts(
        products.filter((item) => item.title.toLowerCase().includes(selector))
      );
    }
  }, [selector]);
  return (
    <div>
      <div className="mainDivFood">
        <div className="allFood">All Foods</div>
        <div className="filterItems">
          <input
            type="text"
            className="inputFilter"
            value={filterText}
            onChange={handleFilter}
          />
        </div>

        <div className="productsContainer1">
          {allProducts.map((item, index) => {
            return <Products key={index} item={item} />;
          })}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Food;
