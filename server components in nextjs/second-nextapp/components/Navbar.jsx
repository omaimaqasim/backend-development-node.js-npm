"use client" // we use this to tell nextjs compiler that this is client base component for client
import React from 'react'
import { useState } from "react";
const Navbar = () => {
      const [count, setcount] = useState(0);
  return (

    <div>
      <p>the count is {count}</p>
   
       <button onClick={()=> setcount(count +1)}>click me</button>
    </div>
  )
}

export default Navbar
