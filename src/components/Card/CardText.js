import React from "react";
import "./CardText.css"

export default function CardText(props) {
    return <div className="card-text">

        <h2>{props.title}</h2>
        <p>{props.text}</p>
    </div>


}