import { createSlice } from "@reduxjs/toolkit";
import Cart from "../../pages/Cart";

const cartSlice= createSlice({
    name:'cart',

    initialState:[],
    reducers:{
        //actions
        // function to add items to cart arrary
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        // function to remove item from cart
        removeFromcart :(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        },
        // function to empty cart
        emptyCart:(state)=>{
         return   state=[]
        }
    }
})

export default cartSlice.reducer
export const {addToCart,removeFromcart,emptyCart}= cartSlice.actions