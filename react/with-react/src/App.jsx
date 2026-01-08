import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from '../src/components/Navbar'
function App() {
  // This line of code uses useState to create a variable called value, a function called setValue to change that variable, and initializes value with 0.
  //usestate fn give two thing one variable and second fn to change it
  const [value,setvalue] = useState(0)
  return (
    <div className="App">
      {/* you use components like bellow in your folder */}
     {/* this is the way to use props */}
      <Navbar name = "zeyden khan" />
      <div className="className">
        {value}
        </div> 
        <button onClick={()=>{setvalue(value+1)}}>click me</button>
    

    </div>
  );
}

export default App;
