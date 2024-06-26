import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AllProducts: [],
};

const AllProduct = createSlice({
  name: "AllProduct",
  initialState,
  reducers: {
    FetchProducts: (state, action) => {
      state.AllProducts = action.payload;
    },
  },
});

export const { FetchProducts } = AllProduct.actions;
export default AllProduct.reducer;
