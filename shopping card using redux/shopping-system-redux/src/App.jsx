import { useState } from 'react'
import ProductCart from './Components/ProductCart'
import ShoppingCart from './Components/ShoppingCart'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductCart />
      <ShoppingCart />
    </>
  )
}

export default App
