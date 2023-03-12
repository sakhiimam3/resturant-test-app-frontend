import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import getallProduct from "../features/getallProduct";

export const store = configureStore({
  reducer: {
    allCart: cartReducer,
    allproduct: getallProduct,
  },
});
