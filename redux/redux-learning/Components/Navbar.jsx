import React from 'react'
import { useSelector, useDispatch } from 'react-redux' //these are hooks 
const Navbar = () => {
    
  const count = useSelector((state) => state.counter.value)
  return (
    <div>
      <nav>
     <h1>counter : {count}</h1>  

      </nav>
    </div>
  )
}

export default Navbar
