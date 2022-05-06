
import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./favSlice.jsx";

const store = configureStore({
  reducer: {
    fav: favSlice,
  },
});

export default store;
