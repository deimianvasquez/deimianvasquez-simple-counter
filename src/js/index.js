//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let counter = 0
setInterval(() => {
    const one = Math.floor(counter / 1)
    const two = Math.floor(counter / 10)
    const three = Math.floor(counter / 100)
    const four = 1


    counter++
    //render your react application
    ReactDOM.createRoot(document.getElementById('app')).render(
        <SecondsCounter
            numOne={one}
            numTwo={two}
            numThree={three}
            numFour={four}
        />

    );
}, 300)



