import React from 'react'
//i just write rafce then it give me react arrow fn of my file
const Navbar = (props) => {
  return (
    <div>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>contact us</li>
        {/* this is the way to make props */}
         <li>{props.name}</li>
      </ul>
    </div>
  )
}

export default Navbar
