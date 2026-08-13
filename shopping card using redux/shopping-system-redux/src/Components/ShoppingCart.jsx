import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, increaseQuantity ,decreaseQuantity } from '../Redux/Cart/cartSlice'
const ShoppingCart = () => {

  // useSelector = "Give me data from Redux."
  // useDispatch = "I want to tell Redux to change something."

  //  const selected_items = useSelector(state => state.cart.items)

  return (
    <div className="p-6 mt-8">
      <h2 className="text-2xl font-bold mb-5">
        🛒 Shopping Cart
      </h2>

  

      <div className="border rounded-lg p-4 mb-3">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">Laptop</h3>
            <p>$800</p>
          </div>

          <div className="flex items-center gap-3">
    
            <button className="border px-3 py-1 rounded">
              -
            </button>

            <span>1</span>

            <button className="border px-3 py-1 rounded">
              +
            </button>

          
            <button className="bg-red-500 text-white px-3 py-1 rounded">
              Remove
            </button>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-5">
        Total: $800
      </h3>
    </div>
  );
};

export default ShoppingCart;