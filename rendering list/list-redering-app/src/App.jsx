import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'


function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [rendertodo, setrendertodo] = useState([

    {
      title: "hay i am todo 1",
      desc : " i am lovely todo 1 complete me"
    },

    {
      title: "hay i am todo 2",
      desc : " i am lovely todo 2 complete me"
    },

    {
      title: "hay i am todo 3",
      desc : " i am lovely todo 3 complete me"
    }
  ])

//   The core reason (simple)
// In React, capital letters tell React: “this is a component”.
// Lowercase tells React: “this is an HTML tag.”
//if you want to make a sall conponent you can easily make it in this app fn also for example
  const Todo = ({todo})=>{
    return (<>
    <div className = "border p-2 border-2 border-purple-950">

        <div className="todo">{todo.title}</div>
        <div className="desc">{todo.desc}</div>
    </div>
    </>)
  }

  return (
    <>
        {/* for rendering all todos use this technique */}
      {rendertodo.map(todo=>{
        return <Todo  todo = {todo}/>
      })}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
            showbtn render
        </button>


      
      </div>

    
      { showbtn && <button>hay btn is showing</button> }
       {/* { showbtn ? <button>hay htn is showing</button> : ""} */}
    </>
  )
}

export default App
