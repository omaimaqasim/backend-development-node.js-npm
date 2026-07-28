import React from 'react'
import { memo } from 'react'
const Navbar = ({adjective , getAdjective}) => {
    console.log("navbar rerendered")
  return (
    <div>
      i am {getAdjective()} Navbar
      <button onClick={()=> getAdjective()}>change me</button>
    </div>
  )
}

export default memo(Navbar)
