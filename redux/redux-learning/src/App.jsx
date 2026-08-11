import { useState } from 'react'
import Navbar from '../Components/Navbar'
import './App.css'
//wherever they that component or this app want to use state from store you have to do this
import { useSelector, useDispatch } from 'react-redux' //these are hooks 
import { decrement, increment } from './redux/counter/counterSlice'//function in counterslice want to import so that we can use to hange it

function App() {

  const count = useSelector((state) => state.counter.value)//use t display value of counter state
   const dispatch = useDispatch();
  return (
    <>
    <Navbar/>
    <div className="counter">
    <button onClick={()=> dispatch(decrement()) }>-</button>
    <div> currently the count is :{count}</div>
      <button onClick={()=> dispatch(increment()) }>+</button>

    </div>
    </>
  )
}

export default App
