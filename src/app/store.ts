import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import {productSlice} from "../features/products/productSlice"
import { productDetailsSlice } from "../features/productsDetails/productDetailsSlice"
import {imageSlice} from "../features/imageGallery/imageSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products:productSlice.reducer,
    productsDetails:productDetailsSlice.reducer,
     imageGallery: imageSlice.reducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
