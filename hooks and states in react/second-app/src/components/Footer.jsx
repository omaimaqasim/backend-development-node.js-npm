import React, { useEffect, useEffectEvent } from 'react'

//why curly brackets bc props contain obj 
const Footer = ({color}) => {

  
    //case 01: run on every render
    useEffect(() => {
    
      alert("hey i will run on every render")
    }, )
    
  //case 02 : run only on first render
    useEffect(() => {
     alert("this is the first render, run on first render ")
    }, []) // empty arr is saying that make it work when app is mounting
  
  // example of cleanup fn
  useEffect(() => {
    //this wilk return when this component remove from the app
    alert("this will run on every render")
    return () => {
      alert("footer was unmounted");
    }
  }, [])
  
  return (
    <div>
      hay i am footer of {color}
    </div>
  )
}

export default Footer
