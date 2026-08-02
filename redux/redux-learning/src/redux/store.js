import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counter/counterslice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})