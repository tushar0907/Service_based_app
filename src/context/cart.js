import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../base";

const fetchCartData = async() => {
    return await axios.get(BASE_URL + "/rest/cart").then((res) => res.data);
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        count: 0,
    },
    reducers: {
        addItemInCart: (state, action) => {
            const findProduct = state.cart.find(
                (item) => item.sid === action.payload.sid
            );
            if (findProduct) {} else {
                state.cart.push(action.payload);
            }
        },
        removeItemInCart: (state, action) => {
            const findProduct = state.cart.findIndex(
                (item) => item.sid === action.payload.sid
            );
            if (findProduct !== -1) {
                state.cart.splice(findProduct, 1);
            }
        },
    },
});

export const { addItemInCart, removeItemInCart } = cartSlice.actions;