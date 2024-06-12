import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiCirclePlus } from "react-icons/ci";
import { addToCart, removeItem } from "../../store/productSlice";
import { CiCircleMinus } from "react-icons/ci";
import "./carts.css";
const Carts = (props) => {
  const { id, price, image01, title, quantity } = props.items;
  const products = useSelector((state) => state.productReducer.cartItems);
  let dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(
      addToCart({
        id,
        price,
        image01,
        title,
      })
    );
  };
  const handleDelete = () => {
    dispatch(
      removeItem({
        id,
        quantity,
      })
    );
  };
  return (
    <div>
      <div>
        {products.length === 0 ? (
          <div>No products added</div>
        ) : (
          <div>
            <div className="cartMainDivP">
              <div className="cartItems">
                <img src={image01} alt="" className="prodImg" />
                <div className="productValue">
                  <span className="prodTitle">{title}</span>
                  <span className="prodPrice">$ {price}</span>
                </div>
                {/* <div className="productQty"> */}
                <div className="productIcons">
                  <CiCirclePlus
                    className="circleIcon"
                    onClick={handleIncrement}
                  />
                  <div className="qty">{quantity}</div>
                  <CiCircleMinus
                    className="circleIcon"
                    onClick={handleDelete}
                  />
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carts;
