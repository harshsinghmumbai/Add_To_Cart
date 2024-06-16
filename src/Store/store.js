import {
  /*configure is settings for store ki number of khand(slices) kitana create karna hai*/ configureStore,
} from "@reduxjs/toolkit";
import CartSlice from "@/Store/Slice/CartSlice";

const store = configureStore({
  /*divider for making multiple khand*/ reducer: {
    allcart: CartSlice,
  },
});

export default store;
