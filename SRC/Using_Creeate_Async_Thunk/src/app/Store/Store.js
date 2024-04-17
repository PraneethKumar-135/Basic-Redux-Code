// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Slices/userDetailsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    // Additional reducers can go here if needed
  },
});
