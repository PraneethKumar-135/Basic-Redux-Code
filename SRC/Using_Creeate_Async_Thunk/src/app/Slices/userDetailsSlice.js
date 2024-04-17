// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch user data
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async () => {
    const response = await axios.get('https://reqres.in/api/users');
    return response.data.data; // Extracting the 'data' field from the response
    // console.log(response);
  }
);
export const postUserData = createAsyncThunk(
  'user/postUserData',
  async (userData) => {
    const response = await axios.post('https://reqres.in/api/users', userData);
    return response.data;
  }
);
const initialState = {
  data: [],
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Additional reducers can go here if needed
  },
  extraReducers: (builder) => {
    builder
      // Reducer for fetchUserData pending action
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Reducer for fetchUserData fulfilled action
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      // Reducer for fetchUserData rejected action
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Reducer for postUserData pending action
      .addCase(postUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Reducer for postUserData fulfilled action
      .addCase(postUserData.fulfilled, (state, action) => {
        state.loading = false;
        // Assuming that the posted user is added to the existing data array
        state.data = [...state.data, action.payload];
      })
      // Reducer for postUserData rejected action
      .addCase(postUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default userSlice.reducer;
