import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice
    ({
        name: "wishlist",
        initialState: [],
        // since this state have to hold more tan one item
        reducers: {
            // actions
            // function to add items to wishlist array state
            addToWishlist: (state, action) => {
                state.push(action.payload)
            },
            // function to remove items from wishlist array state
            removeFromWishlist: (state, action) => {
                return state.filter(item => item.id !== action.payload)
            }
        }


    })

export const { addToWishlist,removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer