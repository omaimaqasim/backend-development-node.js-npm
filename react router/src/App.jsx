import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
import User from './Components/User'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {
 const router = createBrowserRouter([
  {
    path:"/",
    element: <><Navbar/> <Home/></> 
  },
  {
     path:"/about",
    element:<><Navbar/> <About/></> 
  },
   {
     path:"/contact",
    element:<><Navbar/> <Contact/></> 
  },
   {
     path:"/user/:username",
    element:<><Navbar/> <User/></> 
  }

 ])
  return (
    <>

    <RouterProvider router={router}/>

    </>
  )
}

export default App
