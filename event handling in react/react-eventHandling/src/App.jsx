import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
const [Text, setText] = useState("");
const [HoverText, setHoverText] = useState("Hover me");
const [Input, setInput] = useState("zeyd");


const handleClick = ()=>{
  setText("hey you clicked the button");
}

const handleHover = ()=>{
  setHoverText("hey you hover the hover div");
}

const changeValue = (e)=>{

  setInput(e.target.value);
}

  return (
    <>
     
     <button onClick={handleClick}>click me</button>
     <div className="text">{Text}</div>

     <div className="hover" onMouseOver={handleHover}>{HoverText}</div>

     <input type="text" value={Input} onChange={changeValue} />
     {/* why need onchange event because without it whatever you write js dont now we use this event for storing
     value so if we need it js knows */}
     
    </>
  )
}

export default App
