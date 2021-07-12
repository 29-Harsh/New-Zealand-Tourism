import React from 'react'
import "./index.css"

function Card(props) {
  return (
    <div className="cards-list">

      <div className="card 1">
        <div className="card_image">
          <img src={props.imgsrc} alt={props.sname} /> </div>
        <div className="card_title title-white">
          <p>{props.sname}</p>
        </div>
      </div>

      <div className="card 2">
        <div className="card_image">
          <img src={props.imgsrc2} alt={props.sname2} />
        </div>
        <div className="card_title title-white">
          <p>{props.sname2}</p>
        </div>
      </div>

      <div className="card 3">
        <div className="card_image">
          <img src={props.imgsrc3} alt={props.sname3} />
        </div>
        <div className="card_title">
          <p>{props.sname3}</p>
        </div>
      </div>

    </div>
  )
}

export default Card;
