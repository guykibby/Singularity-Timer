import React from "react";
import { useState } from "react";
// import DoomsDelayButton from "./Components/DoomsDelayButton.js";
// import calcTime from "./Utils/calcTime.js";

const TimeDisplay = ({ time }) => {
  return <div id="timer">{time}</div>;
};

let state = "running";

const switchState = () => {
  if (state !== "running") {
    prevTimeTill = newTimeTill;
    startTime = Date.now();
    state = "running";
    console.log("running");
  } else {
    state = "delay";
    console.log("delay");
    setTimeout(switchState, 10000);
  }
  // calcTime();
};

let prevTimeTill = 1000000;
let startTime = Date.now();
let newTimeTill = 0;

const calcTime = () => {
  if (state === "running") {
    newTimeTill = prevTimeTill - (Date.now() - startTime) / 1000;
  }
  // console.log(newTimeTill);
};

// setInterval(calcTime, 1000);

const Timer = () => {
  console.log("buggy");

  const [timeTill, whatTime] = useState(prevTimeTill);

  const checkTime = () => {
    calcTime();
    whatTime(Math.floor(newTimeTill));
  };

  setInterval(checkTime, 100);
  // const [theState, whatState] = useState(0);

  // const switchState = () => {
  //   let newState = state + 1;
  //   console.log(newState);
  //   whatState(newState);

  //   initTimeTill = timeTill;
  //   timeNow = Date.now();
  //   state += 1;
  //   console.log(state);
  //   // clearInterval(refreshIntervalId);

  // console.log("this;" + state);
  // const calcTime = () => {
  //   if (state % 2 === 0) {
  //     let x = Math.floor(initTimeTill + (timeNow - Date.now()) / 1000);
  //     return whatTime(x);
  //   }
  //   // else {
  //   //   console.log("switch");
  //   //   switchState();
  //   else {
  //     delaySwitch(switchState);
  //   }
  // };

  // let runTimer =
  //

  return (
    <>
      <h1>Goodbye World</h1>
      <h3>Seconds until the singularity:</h3>
      <TimeDisplay time={timeTill} />
      <button className="button" onClick={switchState}>
        DOOMSDELAY
      </button>
      {/* <DoomsDelayButton onclick={switchState} /> */}
    </>
  );
};

export default Timer;

// try placing setInterval/clearInteval inside calcTime w staes
