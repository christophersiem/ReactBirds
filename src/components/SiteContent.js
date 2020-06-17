import React from "react";
import "./SiteContent.css";
import Card from "./Card/Card";
import InputFields from "./InputFields"


export default function SiteContent(props) {
    return (
        <main className="flex-grow">
     <Card content={props.cardContent}/>
     <InputFields/>
    </main>
    );

}