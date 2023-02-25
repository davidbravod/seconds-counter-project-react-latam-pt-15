//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondsCounter.jsx";

//render your react application

let seconds = 0;
let tensOfSeconds = 0;
let minutes = 0;
let tensOfMinutes = 0;
let hours = 0;
let tensOfHours = 0;

setInterval(()=>{

seconds = seconds +1

if (seconds > 9){
    seconds = 0;
    tensOfSeconds++;
}

if (tensOfSeconds>5){
    tensOfSeconds = 0;
    minutes++;
}

if (minutes>9){
    minutes = 0;
    tensOfMinutes++;
}

if (tensOfMinutes>5){
    tensOfMinutes = 0;
    hours++;
}

if (hours>9){
    hours = 0;
    tensOfHours++;
}

    ReactDOM.render(<SecondsCounter secondsCount = {seconds} tensOfSecondsCount = {tensOfSeconds} minutesCount = {minutes} tensOfMinutesCount = {tensOfMinutes} hoursCount = {hours} tensOfHoursCount = {tensOfHours}/>, document.querySelector("#app"));

},100)

