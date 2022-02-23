import { configureStore } from '@reduxjs/toolkit';
import phonesReducer from './phones/phoneSlice';

const store = configureStore({
  reducer: {
    phones: phonesReducer,
  },
})

export default store;
