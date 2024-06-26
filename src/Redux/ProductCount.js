import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productCount: 0,
};

const ProductsSlice = createSlice({
  name: "ProductCount",
  initialState,
  reducers: {
    IncreaseCount: (state) => {
      state.productCount++;
    },
    DecreaseCount: (state) => {
      state.productCount--;
    },
  },
});

export const { IncreaseCount, DecreaseCount } = ProductsSlice.actions;
export default ProductsSlice.reducer;
