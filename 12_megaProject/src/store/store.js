import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const Store = configureStore({
  reducer: authSlice,
});

export default Store;
