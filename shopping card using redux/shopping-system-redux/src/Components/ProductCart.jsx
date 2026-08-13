import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart} from '../Redux/Cart/cartSlice'
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
  },
  {
    id: 2,
    name: "Headphones",
    price: 100,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 50,
  },
];


const ProductCart = () => {
  const dispatch = useDispatch()
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-5">Products</h2>

      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-5"
          >
            <h3 className="text-xl font-semibold">
              {product.name}
            </h3>

            <p className="my-3">${product.price}</p>

            {/* TODO: Connect this button to Redux */}
            <button onClick={()=> dispatch(addToCart(product))} className="bg-blue-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;