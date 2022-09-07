import React from 'react'
import './Card.css'

const Card = ({name, job, about, image}) => {



  return (
    <div>

      <div className="Card">

        <div className="upper-container">
            <div className="image-container">
                <img src={image} alt="" height="100px" width="100px"/>
            </div>
        </div>
        <div className="lower-container">
            <h4>{name}</h4>
            <h5>{job}</h5>
           
        </div>
      </div>
    </div>
  )
}

export default Card
