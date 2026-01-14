import React from 'react'
import "../components/Card.css"
const Card = (props) => {
  return (
    <div>
      {/* in jsx you cannot write inline css with string for that you have to use {{}} outerone for js and inner one is obj that has all css property */}
      
      <div className="card" style={{overflow : 'hidden'}}>
     <img src="pak.jpg" alt="" width={150} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
