import React from "react";
import "./Card.css"
import CardText from "./CardText";
import CardImage from "./CardImage";

export default function Card(props) {
    return <article className="card">

        <CardText title={props.content.title} text={props.content.text}/>
        <CardImage src={props.content.imageSource}/>
    </article>

}