import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import { CounterContext } from './context/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* by this your all components and nested component will get value that you wanted */}
      <CounterContext.Provider value={{count,setCount}}>
        <Navbar />
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </CounterContext.Provider>
    </>
  )
}

export default App
