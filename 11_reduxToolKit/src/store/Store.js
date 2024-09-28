import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/Todo/TodoSlice";

export const Store = configureStore({
  reducer: TodoReducer ,
});
