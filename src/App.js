import React, {useEffect, useState} from 'react';
import SiteHeader from "./components/SiteHeader";
import SiteContent from "./components/SiteContent";
import SiteFooter from "./components/SiteFooter";
import "./App.css"
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import InputFields from "./components/InputFields";

async function getAllBirds() {
    const response = await fetch("https://api.jsonbin.io/b/5ee9e76c0e966a7aa36b3fd4");
    const data = await response.json();
    return data.animals;

}

function App() {

    const [content, setContent] = useState();
    const [birds, setBirds] = useState([]);
    const[fetchState, setFetchState] = useState();


    useEffect(() => {
        setFetchState("LOADING");
        getAllBirds().then(data => {
            setContent(data[0]);
            setBirds(data);
            setFetchState("SUCCESS");
        }).catch(()=> setFetchState("FAILED"));
    }, []);


    function setBigBirdAsContent() {
        setContent(birds[0]);
    }

    function setSmallBirdAsContent() {
        setContent(birds[1]);
    }

    function setBirdyAsContent() {
        setContent(birds[2]);
    }

    function setJuergenAsContent() {
        setContent(birds[3]);
    }

    function setRandomAsContent() {

        const index = Math.floor(Math.random() * birds.length);
        setContent(birds[index]);

    }

    return (

        <div className="app">

            <SiteHeader/>
            {fetchState ==="LOADING" && <LoadingSpinner/>}
            <div className="button">
                <button onClick={setSmallBirdAsContent}>Small bird</button>
                <button onClick={setBigBirdAsContent}>Big bird</button>
                <button onClick={setBirdyAsContent}>Birdy</button>
                <button onClick={setJuergenAsContent}>Jürgen</button>
                <button onClick={setRandomAsContent}>Random bird</button>

            </div>
            {content && <SiteContent cardContent={content}/>}
            <InputFields/>
            <SiteFooter/>

        </div>
    );
}

export default App;
