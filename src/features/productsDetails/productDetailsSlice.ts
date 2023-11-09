import { createSlice } from '@reduxjs/toolkit';
import ProductDetailsState from './types/ProductDetailsState';
import { loadProductsDetails } from "./productDetailsAction";


const initialState: ProductDetailsState = {
  productsDetails: [],
  isLoading: false,
  error: null,
};

export const productDetailsSlice = createSlice({
  name: 'productsDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProductsDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadProductsDetails.fulfilled, (state, action) => {
        state.productsDetails = action.payload.details;
      })
      .addCase(loadProductsDetails.rejected, (state, action) => {
        state.isLoading = false
        state.productsDetails = []
        state.error = action.payload as string
      })
  },
});
