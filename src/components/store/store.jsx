import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../feature/userSlice'; // Adjust the path according to your file structure

const store = configureStore({
  reducer: {
    user: userReducer, // Assuming you have a user slice
  },
});

export default store;
