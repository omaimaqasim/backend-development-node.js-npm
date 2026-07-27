import { useState , useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const nums = new Array(30_000_000).fill(0).map((_ , i)=>{
  return {
    index : i,
    isMagical : i===29_000_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  const [numbers, setnumbers] = useState(nums);
  
  //second argument is when numbers change then this recalculate
const magical = useMemo(() => numbers.find(item=>item.isMagical===true), [numbers]);//this will  recalculate only when numbers change this will not run on every rerender

  return (
    <>
    
     <p>Magical number is {magical.index}</p>
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
