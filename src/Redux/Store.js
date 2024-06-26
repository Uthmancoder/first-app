import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Products from "./ProductCount";
import AllProduct from "./AllProduct";

const reducers = combineReducers({
  Products,
  AllProduct,
});

const Store = configureStore({
  reducer: reducers,
});

export { Store };
