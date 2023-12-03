// const { createSlice }  = require("@reduxjs/toolkit");  //show an error
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartList:[],
        total:0
    },
    reducers:{
        add(state, action){
            const updatedCartList = state.cartList.concat(action.payload);
            const updatedTotal = state.total + action.payload.price;
            return {...state, cartList: updatedCartList, total:updatedTotal }
        },
        remove(){

        }
    }

});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;