import {
  /*hami power deta hai ki cartSlice mein multiple state management ka kam kar can be done*/ createSlice,
} from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cartslice",
  initialState: [],
  /*big reducer in that multiple micro reducer*/ reducers: {
    //addToCart,deleteItem,removeSingleItem,emptyCartItems is updated function like useState & also known as action for CartSlices//
    addToCart: (state, action) => {
      const IndexValue = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (IndexValue >= 0) {
        state[IndexValue].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        state.push(temp);
      }
    },
    // removeFromCart: (state, action) => {
    //   state.cart = state.cart.filter((item) => item.id !== action.payload);
    // },
  },
});

export const { addToCart } = cartslice.actions;
export default cartslice.reducer;
