import { createSlice } from "@reduxjs/toolkit";
const items = [];
const quantity = 0;
var initialState = {
  cartItems: items,
  quantity: quantity,
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.quantity += 1;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },
    removeItem: (state, action) => {
      const newItem = action.payload;
      // state.cartItems = state.cartItems.filter(
      //   (item) => item.id !== newItem.id
      // );
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== existingItem.id
        );
      }
    },
    deleteProduct: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem);
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== existingItem.id
      );
    },
  },
});

export const { addToCart, increment, removeItem, deleteProduct } =
  productSlice.actions;
export default productSlice.reducer;
