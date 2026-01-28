import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)

  //useeffect hook in react: we use this hock for making effect when element or component mounts that me 
  //when component enter or work in app\

  //case 03: run only when certain value change
  useEffect(() => {
   alert("count is clicked")
   setColor(color + 1)
  }, [count]) // make it work when count is mounting 

  

  return (
    <>

      <div className="count_div">{count}</div>
      <button onClick={()=> setCount(count+1)}>update count</button>
      
      {/* <Footer color = {"red" + color}/> */}

    </>
  )
}

export default App
