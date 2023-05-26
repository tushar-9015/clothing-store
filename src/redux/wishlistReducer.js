import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
}

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.products.push(action.payload);
        },
        removeWishlistItem: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload)
        },
        resetWishlist: (state) => {
            state.products = []
        }

    }
})

export const { addToWishlist,removeWishlistItem,resetWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;