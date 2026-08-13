import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, increaseQuantity ,decreaseQuantity } from '../Redux/Cart/cartSlice'
import Item from "./Item";
const ShoppingCart = () => {

  // useSelector = "Give me data from Redux."
  // useDispatch = "I want to tell Redux to change something."

   const selected_items = useSelector(state => state.cart.items)
   console.log(selected_items)

  return (
    <div className="p-6 mt-8">
      <h2 className="text-2xl font-bold mb-5">
        🛒 Shopping Cart
      </h2>

     {selected_items.map(item=>{
       return  <Item key={item.key} item = {item}/>
     })}
   
    </div>
  );
};

export default ShoppingCart;