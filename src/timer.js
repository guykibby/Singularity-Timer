import React from "react";
import { useState } from "react";

const TimeDisplay = ({ time }) => {
  return <div id="timer">{time}</div>;
};

const Timer = () => {
  console.log("buggy");

  const calcTime = () => {
    let x = Math.floor((4105854000000 - Date.now()) / 1000);
    return whatTime(x);
  };

  setInterval(calcTime, 100);

  const [timeTill, whatTime] = useState(0);

  return (
    <>
      <h1>Goodbye World</h1>
      <h3>Seconds until the singularity:</h3>
      <TimeDisplay time={timeTill} />
      {/* <button onClick={WhatTime}>PUSH</button> */}
    </>
  );
};

export default Timer;
