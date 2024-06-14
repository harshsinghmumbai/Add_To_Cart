import {
  /*configure is settings for store ki number of khand(slices) kitana create karna hai*/ configureStore,
} from "@reduxjs/toolkit";
import cartslice from "@/Store/Slice/CartSlice";

const store = configureStore({
  /*divider for making multiple khand*/ reducer: {
    allcart: cartslice,
  },
});

export default store;
