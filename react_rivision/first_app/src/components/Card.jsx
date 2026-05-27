import React from 'react'
import { useEffect } from 'react'
import "./Card.css"
const Card = (props) => {

    //clean up function = when component unmount from the ui

    useEffect(() => {
      return () => {
       alert("card component unmount from ui")
      };
    }, []);
    
    
  return (
        <div>
            <div className="card">
                <div className="title">{props.title}</div>
                <div className="description">{props.des}</div>
            </div>
        </div>
    )
}

export default Card
