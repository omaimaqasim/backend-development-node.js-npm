
import './App.css'
import Navbar from"./components/Navbar"
import Card from "./components/Card"
import { useState, useEffect } from 'react'

function App() {
 
    const [count , setCount] = useState(0);
    //this will trigger whenever component render
     useEffect(() => {
       alert("count is change")
     },[count]);
     
    
  return (
    <>
        <Navbar/>
        <div className="cards">
        {/* <Card title = "card 1" des = "this is card one" /> */}
          <Card title = "card 2" des = "this is card two" />
            <Card title = "card 3" des = "this is card three" />
        </div>

        
        <div className="count">{count}</div>
        <button onClick={()=>setCount(count+1)}>UPDATE COUNT</button>
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