import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: [],
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id); //find if  there is same product added
      if (item) {
        item.quantity += action.payload.quantity; // increase quantity if the product is same
      } else {
        state.products.push(action.payload); //For adding product in array
      }
    },
  },
});

export const { addToCart } = amazonSlice.actions;
export default amazonSlice.reducer;
