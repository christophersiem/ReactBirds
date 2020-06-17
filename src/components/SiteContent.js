import React from "react";
import "./SiteContent.css";
import Card2 from "./Card/Card2";
import Box from "@material-ui/core/Box";


export default function SiteContent(props) {
    return (

        <Box  display="flex" justifyContent="center" >
            <Card2 content={props.cardContent}/>

        </Box>
    );

}