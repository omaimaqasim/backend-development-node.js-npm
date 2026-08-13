import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, increaseQuantity ,decreaseQuantity } from '../Redux/Cart/cartSlice'
const Item = ({item}) => {
      const dispatch = useDispatch()
  return (
    <div>
         <div className="border rounded-lg p-4 mb-3">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p>{item.price}</p>
          </div>

          <div className="flex items-center gap-3">
    
            <button onClick={()=>{dispatch(decreaseQuantity(item.id))}} className="border px-3 py-1 rounded">
              -
            </button>

            <span>{item.quantity}</span>

            <button onClick={()=>{dispatch(increaseQuantity(item.id))}}  className="border px-3 py-1 rounded">
              +
            </button>

          
            <button onClick={()=>{dispatch(removeFromCart(item.id))}}  className="bg-red-500 text-white px-3 py-1 rounded">
              Remove
            </button>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-5">
        Total: $800
      </h3>
    </div>
  )
}

export default Item
