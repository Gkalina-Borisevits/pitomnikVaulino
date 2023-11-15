import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import {productSlice} from "../features/products/productSlice"
import {imageSlice} from "../features/imageGallery/imageSlice"
import userSlice from "../features/user/userSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products:productSlice.reducer,
    imageGallery: imageSlice.reducer,
    user: userSlice.reducer
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
