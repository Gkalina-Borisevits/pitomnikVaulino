import { createSlice } from '@reduxjs/toolkit';
import UserState from './types/UserState';
import { login } from './userAction';

const initialState: UserState = {
    user: undefined,
    isLoading: false,
    error: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.user =undefined
        state.error = action.payload as string
      })
  },
});

export default userSlice;