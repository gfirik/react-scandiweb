import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";

const store = configureStore({
  reducer: {
    basket: basketSlice.reducer,
  },
});

export default store;
