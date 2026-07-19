import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
const [Text, setText] = useState("");
const [HoverText, setHoverText] = useState("Hover me");
const [Input, setInput] = useState("zeyd");
const [Form, setForm] = useState({email:"" , phone: ""});


const handleClick = ()=>{
  setText("hey you clicked the button");
}

const handleHover = ()=>{
  setHoverText("hey you hover the hover div");
}

const changeValue = (e)=>{

  setInput(e.target.value);
}

//only using one handle function multiple inputs ko handle karsakte hain
const handleChange = (e)=>{

  setForm({...Form, [e.target.name]:e.target.value});
  // key: → Use the word key.
// ✅ [key]: → Use the value inside key.
// "JavaScript, look inside this variable and use its value."
//first sprad form properties key and values then we replae those values with current value
  console.log(Form)
}

  return (
    <>
     
     <button onClick={handleClick}>click me</button>
     <div className="text">{Text}</div>

     <div className="hover" onMouseOver={handleHover}>{HoverText}</div>

     <input type="text" value={Input} onChange={changeValue} />
     <input type="text " name='email' value={Form.email} onChange={handleChange} />
     <input type="text" name='phone' value={Form.phone} onChange={handleChange} />
     {/* why need onchange event because without it whatever you write js dont now we use this event for storing
     value so if we need it js knows */}
     
    </>
  )
}

export default App
