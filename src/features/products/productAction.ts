import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadProducts  = createAsyncThunk(
  'products/loadProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://raw.githubusercontent.com/Gkalina-Borisevits/pitomnikApi/main/flowers.json')
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
