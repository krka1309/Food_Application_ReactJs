import { createSlice } from "@reduxjs/toolkit";
const items = [];
var initialState = {
  cartItems: items,
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.cartItems.push({
        id: newItem.id,
        title: newItem.title,
        image01: newItem.image01,
        price: newItem.price,
      });
    },
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
