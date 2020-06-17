import React from 'react';
import SiteHeader from "./components/SiteHeader";
import SiteContent from "./components/SiteContent";
import SiteFooter from "./components/SiteFooter";
import "./App.css"



const birdsArray = [{
    title: "Big Bird",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis excepturi iure iusto maiores officia ratione. Dolorem esse est itaque?",
    imageSource: "https://cdn.prod.www.spiegel.de/images/188c5f65-534b-41b3-be01-2650baa51794_w948_r1.77_fpx50_fpy48.jpg",


},
    {
        title: "Small Bird",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis excepturi iure iusto maiores officia ratione. Dolorem esse est itaque?",
        imageSource: "https://www.nabu.de/imperia/md/nabu/images/arten/tiere/voegel/lerchen/160118-nabu-feldlerche-gaby-schroeder.jpeg",


    },
    {
    title: "Birdy",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis excepturi iure iusto maiores officia ratione. Dolorem esse est itaque?",
    imageSource: "https://amp.volksstimme.de/storyimage/MA/20190515/DPA/305159999/AR/0/AR-305159999.jpg&MaxW=1200&Imageversion=default",
    },

];

function App() {

    const [content, setContent] = React.useState(birdsArray[1]);

    function setBigBirdAsContent() {
        setContent(birdsArray[0]);
    }

    function setSmallBirdAsContent() {
        setContent(birdsArray[1]);
    }

    function setBirdyAsContent() {
        setContent(birdsArray[2]);
    }


    return (

        <div className="app">
            <SiteHeader/>
            <div class="button">
                <button onClick={setSmallBirdAsContent}>Small bird</button>
                <button onClick={setBigBirdAsContent}>Big bird</button>
                <button onClick={setBirdyAsContent}>Birdy</button>
            </div>
            <SiteContent cardContent={content}/>
            <SiteFooter/>

        </div>
    );
}

export default App;
