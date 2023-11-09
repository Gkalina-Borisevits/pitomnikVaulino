import { createSlice } from "@reduxjs/toolkit"
import ImageState from "./types/ImageState"
import { loadImages } from "./imageAction"

const initialState: ImageState = {
  images: [],
  isLoading: false,
  error: null,
}

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadImages.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loadImages.fulfilled, (state, action) => {
        state.images = action.payload
        state.isLoading = false
      })
      .addCase(loadImages.rejected, (state, action) => {
        state.isLoading = false
        state.images = []
        state.error = action.payload as string
      })
  }
})

