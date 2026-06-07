
import './App.css'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import { useState, useEffect, useRef } from 'react'

function App() {

  const [count, setCount] = useState(0);
  const [showbtn, setShowBtn] = useState(true);
  const a = useRef(0);
  const[todos , settodos] = useState([
    {
      title : "todo 1",
      desc : "this is todo 1 bring chocolate"
    },
    {
      title : "todo 2",
      desc : "this is todo 2 bring juice"
    },
    {
      title : "todo 3",
      desc : "this is todo 3 bring strawberry"
    }
  ])

  const Todo = (todo)=>{
     return (<>
     
       <div className="todo_title">{todo.title}</div>
       <div className="todo_desc">{todo.desc}</div>
     
     
     
     </>

     )
  }
  //remember when component rerender react again run code from to to bottom and reintialize our normal
  // variable again but we dont want it that why we use useref as it make our variable persist our variable 
  //will not reinitailize again

  const refBtn = useRef();
  // This is for accessing the actual button HTML element.

  useEffect(() => {
    a.current = a.current + 1;
     console.log(`rrendering but a value is ${a.current}`)
      refBtn.current.style.backgroundColor = "green";
  });
  
  //this will trigger whenever component render
  // useEffect(() => {
  //   alert("count is change")
  // }, [count]);


  return (
    <>
      <Navbar />
      <div className="cards">
        {/* <Card title = "card 1" des = "this is card one" /> */}
        <Card title="card 2" des="this is card two" />
        <Card title="card 3" des="this is card three" />
      </div>


      <div className="count">{count}</div>
      {/* this ref tell that this button is store to refbtn variable mean you can access button dom through useref also */}
      <button ref={refBtn} onClick={() => setCount(count + 1)}>UPDATE COUNT</button>

      {showbtn &&  <button>yes btn show</button> }

{/* When React renders a list, every item must have a unique key prop so React can track which item changed, was added, or was removed.

key is impoortant because if you delete one todo then when it renders again it misplace todo props for example todo 1 2 and 3 in page if i delte todo 2 then react
 render again and todo 3 take place of todo 2 so react give props of todo 2 not 3 */}
      {todos.map(todo=>{
          return <Todo key = {todo.title} title = {todo.title} desc = {todo.desc}/>
          // return <Todo todo = {todo}/>
      })}

      {/* We use map() because it returns a new array, and React can render an array of components. */}
  
    </>
  )
}

export default App


//  rule no 1 in jsx : return sirf ek tag ko hi kar sakte ai 
//rule no 2 : hr tag ka closing tag hona chahiyeh if miss then error


// Props is an object used to pass data dynamically from a parent component to a child component.

// In React, component file names are usually written with the first letter capitalized
// , like Navbar.jsx, because React treats capitalized names as components.

//Because in React:
// lowercase names → treated like HTML tags (div, span)
// Capital names → treated like React components


//using react with vite you  dont have to reload everytime if you have to go to another page in website it changes pages
//without load it save time and make webasite smooth

// JavaScript changes data only
// React state changes data + automatically updates the screen

// code -r project is se ap ka project jo hai wohi kul jai ga manually nahi kholna parega jo react app banai hai


// Render = updating UI
// Reload = restarting entire page

// 👉 Rendering means React runs your component again and updates the UI based on its output.
// A component is a reusable piece of UI in React.


// whenever state is change react rerender entire component

// Mount = first time it appears on UI
//unmount = remove from the ui
// UI = how it looks
// UX = how it works and feel when use  mean user experience

