import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadImages = createAsyncThunk(
  'images/loadImages',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://raw.githubusercontent.com/Gkalina-Borisevits/imgPitomnikApi/main/image.json');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
