import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart";
import { loginSlice } from "./login";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    login: loginSlice.reducer,
  },
});

export default store;
