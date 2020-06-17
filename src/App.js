import React, {useEffect, useState} from 'react';
import SiteHeader from "./components/SiteHeader";
import SiteContent from "./components/SiteContent";
import SiteFooter from "./components/SiteFooter";
import "./App.css"
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SiteButtons from "./components/SiteButtons";
import TemporaryDrawer from "./components/PermanentDrawerLeft";
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";

async function getAllBirds() {
    const response = await fetch("https://api.jsonbin.io/b/5ee9e76c0e966a7aa36b3fd4");
    const data = await response.json();
    return data.animals;

}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

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
            <PermanentDrawerLeft/>
            {fetchState ==="LOADING" && <LoadingSpinner/>}
            <div className="button">
                <SiteButtons title="Small bird" function={setSmallBirdAsContent}/>
                <SiteButtons title="Big bird" function={setBigBirdAsContent}/>
                <SiteButtons title="Birdy" function={setBirdyAsContent}/>
                <SiteButtons title="Jürgen" function={setJuergenAsContent}/>
                <SiteButtons title="Random" function={setRandomAsContent}/>
            </div>
            {content && <SiteContent cardContent={content}/>}

            <SiteFooter/>

        </div>
    );
}

export default App;
