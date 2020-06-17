import React from "react";
import "./SiteContent.css";
import Card2 from "./Card/Card2";
import Box from "@material-ui/core/Box";
import InputFields from "./InputFields";


export default function SiteContent(props) {
    return (
<main className="flex-grow">
        <Box  display="flex" justifyContent="center" >
            <Card2 content={props.cardContent}/>

        </Box>
    <InputFields/>
    </main>
    );

}