import React from "react";
import { useState } from "react";
import DoomsDelayButton from "./DoomsDelayButton.js";

const TimeDisplay = ({ time }) => {
  return <div id="timer">{time}</div>;
};

let initTimeTill = 23575724;
let timeNow = Date.now();
let state = 0;

const calcTime = (func) => {
  let x = Math.floor(initTimeTill + (timeNow - Date.now()) / 1000);
  func(x);
};

// const delaySwitch = (func) => {
//   setTimeout(func, 10000);
// };

const Timer = () => {
  console.log("buggy");

  const [timeTill, whatTime] = useState(initTimeTill);
  // const [state, whatState] = useState(0);

  if (state % 2 === 0) {
    let runTimer = setInterval(calcTime(whatTime), 100);
  }

  // const switchState = () => {
  //   initTimeTill = timeTill;
  //   timeNow = Date.now();
  //   state += 1;
  //   console.log(state);
  //   // clearInterval(refreshIntervalId);
  // };

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
  // setInterval(calcTime, 100);

  return (
    <>
      <h1>Goodbye World</h1>
      <h3>Seconds until the singularity:</h3>
      <TimeDisplay time={timeTill} />
      {/* <DoomsDelayButton onclick={switchState} /> */}
    </>
  );
};

export default Timer;

// try placing setInterval/clearInteval inside calcTime w staes
