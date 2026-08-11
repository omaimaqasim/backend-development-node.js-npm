import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../Redux/Cart/cartSlice"//simply exporting cartslice.reducer
export default configureStore({
  reducer: {
    cart : cartReducer
  }
})