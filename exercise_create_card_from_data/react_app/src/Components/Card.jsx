import React from 'react'

const Card = ({ ID, title, des }) => {
  return (
    <div>

      <div className="card flex flex-col items-center justify-center border-2 p-7 m-3 w-[33vw] bg-red-300">

        <h1>{title}</h1>
        <h1>ID : {ID}</h1>
        <p>{des}</p>
      </div>

 


    </div>
  )
}

export default Card
