import React from "react";
import "./CardImage.css"

export default function CardImage(props) {
    return <img className="card-image"
        src={props.src}
        alt="a picture"/>;


}