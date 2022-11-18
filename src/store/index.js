import { configureStore } from "@reduxjs/toolkit";
import documentReducer from './documentsSlice';

export const store = configureStore({
  reducer: {
    documents: documentReducer,
  },
});
