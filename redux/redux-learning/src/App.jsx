import { useState } from 'react'

import './App.css'
//wherever they that component or this app want to use state from store you have to do this
import { useSelector, useDispatch } from 'react-redux' //these are hooks 
// import { decrement, increment } from './redux/counter/counterSlice'//function in counterslice want to import so that we can use to hange it

function App() {

  const count = useSelector((state) => state.counter.value)//use t display value of counter state
  return (
    <>
    <div>{count}</div>
    </>
  )
}

export default App
