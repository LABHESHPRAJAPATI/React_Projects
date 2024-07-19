import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feauture/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
