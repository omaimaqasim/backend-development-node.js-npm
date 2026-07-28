import { useState, useCallback } from 'react'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setadjective] = useState("good");
  

  const getAdjective = useCallback(() => {
    return "Another" + count
  }
    , [count]); //now it freezes this function until  count changes here count is dependence of this function


  return (
    <>
      <Navbar adjective="good" getAdjective={getAdjective} />

      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>

    </>
  )
}

export default App
