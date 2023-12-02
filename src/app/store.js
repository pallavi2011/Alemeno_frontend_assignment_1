import { configureStore } from '@reduxjs/toolkit'
import courseReducer from '../components/features/courseSlice';

export const store = configureStore({
  reducer: {
    course: courseReducer
    
  },
})