import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Home from './Components/Home'
import {createBrowserRouter} from "react-router-dom"

function App() {
 const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
     path:"/about",
    element:<About/>
  }

 ])
  return (
    <>
    <Navbar/>

    </>
  )
}

export default App
