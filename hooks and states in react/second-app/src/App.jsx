import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //useeffect hook in react: we use this hock for making effect when element or component mounts that me 
  //when component enter or work in app\

  //case 01: run on every render
  useEffect(() => {
  
    alert("hey i will run on every render")
  }, )
  
//case 02 : run only on first render
  useEffect(() => {
   alert("this is the first render, run on first render ")
  }, []) // empty arr is saying that make it work when app is mounting


  //case 03: run only when certain value change
  useEffect(() => {
   alert("count is clicked")
  }, [count]) // make it work when count is mounting 

  

  return (
    <>
      <div className="count_div">{count}</div>
      <button onClick={()=> setCount(count+1)}>update count</button>
    </>
  )
}

export default App
