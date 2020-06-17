import React from 'react';
import SiteHeader from "./components/SiteHeader";
import SiteContent from "./components/SiteContent";
import SiteFooter from "./components/SiteFooter";
import "./App.css"


const birdsArray = [
    {
        title: "Big Bird",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis excepturi iure iusto maiores officia ratione. Dolorem esse est itaque?",
        imageSource: "https://cdn.prod.www.spiegel.de/images/188c5f65-534b-41b3-be01-2650baa51794_w948_r1.77_fpx50_fpy48.jpg",

    },
    {
        title: "Small Bird",
        text: "Loading...",
        imageSource: "https://www.nabu.de/imperia/md/nabu/images/arten/tiere/voegel/lerchen/160118-nabu-feldlerche-gaby-schroeder.jpeg",

    },
    {
        title: "Birdy",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis excepturi iure iusto maiores officia ratione. Dolorem esse est itaque?",
        imageSource: "https://amp.volksstimme.de/storyimage/MA/20190515/DPA/305159999/AR/0/AR-305159999.jpg&MaxW=1200&Imageversion=default",
    },

];

async function getAllBirds() {
    const response = await fetch("https://api.jsonbin.io/b/5ee9e76c0e966a7aa36b3fd4");
    const data = await response.json();
    return data.animals;

}


function App() {

    const [content, setContent] = React.useState(birdsArray[1]);


    function setBigBirdAsContent() {
        getAllBirds().then((response) => setContent(response[0]));
    }

    function setSmallBirdAsContent() {
        getAllBirds().then((response) => setContent(response[1]));

    }

    function setBirdyAsContent() {
        getAllBirds().then((response) => setContent(response[2]));
    }

    function setJürgenAsContent() {
        getAllBirds().then((response) => setContent(response[3]));
    }


    function setRandomAsContent() {

        getAllBirds().then(birds => {
            const index = Math.floor(Math.random() * birds.length);
            setContent(birds[index]);
        })

    }


    return (

        <div className="app">
            <SiteHeader/>
            <div className="button">
                <button onClick={setSmallBirdAsContent}>Small bird</button>
                <button onClick={setBigBirdAsContent}>Big bird</button>
                <button onClick={setBirdyAsContent}>Birdy</button>
                <button onClick={setJürgenAsContent}>Jürgen</button>
                <button onClick={setRandomAsContent}>Random bird</button>

            </div>
            <SiteContent cardContent={content}/>
            <SiteFooter/>

        </div>
    );
}

export default App;
