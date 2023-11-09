import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadProductsDetails = createAsyncThunk(
  'productsDetails/loadProductsDetails',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`https://raw.githubusercontent.com/Gkalina-Borisevits/pitomnikApi/main/flowers.json/${id}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
