import React from "react";
import { useState } from "react";
// import DoomsDelayButton from "./Components/DoomsDelayButton.js";
import calcTime from "./Utils/calcTime.js";

const TimeDisplay = ({ time }) => {
  return <div id="timer">{time}</div>;
};

// const delaySwitch = (func) => {
//   setTimeout(func, 10000);
// };

const Timer = () => {
  console.log("buggy");

  const [timeTill, whatTime] = useState(0);

  // setInterval(calcTime(whatTime), 1000);

  // const [state, whatState] = useState(0);

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
      {/* <DoomsDelayButton onclick={switchState} /> */}
    </>
  );
};

export default Timer;

// try placing setInterval/clearInteval inside calcTime w staes
