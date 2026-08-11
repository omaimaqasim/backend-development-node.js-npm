import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',//name of the slice
  initialState: {
    items: []//initial state of the slice
  },

  reducers: {


    addToCart: (state, action) => {
      state.items.push({
        ...action.payload,//as you know that action.payload contain new information so this is obj we just get all its value using spread op
        quantity: 1

      })

    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload) //state is what redux currently has that is items, and you can change it with the action you want to do
    },
    increaseQuantity: (state, action) => {
       const item = state.items.find(item =>  item.id === action.payload)  //action means what you want to do with the state, payload is the value you want to add to the state
 
       if(item){
           item.quantity += 1
       }
 
      },

    decreaseQuantity: (state , action) => {
   const item = state.items.find(
        item => item.id === action.payload
      )//item is a reference to the actual object inside state.items. so we can directly change it and in items array it automaticslly changes

      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },


  }


})

// Action creators are generated for each case reducer function
export const { addToCart , removeFromCart , decreaseQuantity , increaseQuantity } = cartSlice.actions

export default cartSlice.reducer