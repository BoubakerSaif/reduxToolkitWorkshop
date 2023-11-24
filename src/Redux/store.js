import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counterSlice";
const store = configureStore({
  reducer: { countReducer },
});

export default store;
