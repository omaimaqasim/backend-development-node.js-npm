import React from 'react'
// import { Link } from 'react-router-dom' // it des not give us classname thats why we usse navlink
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      
      <nav>
        <ul>
            <NavLink className={(e)=> e.isActive ? "red" : ""} to="/"><li>Home</li></NavLink>
            <NavLink className={(e)=> e.isActive ? "red" : ""} to="/about"><li>About</li></NavLink>
            <NavLink className={(e)=> e.isActive ? "red" : ""} to="/contact"><li>contact</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
