let state = 0;

// const onclick = () => {
//   if (state % 2 === 0) {
//     let timeAtStart = Date.now();
//     console.log(timeAtStart);
//   }
//   state += 1;
//   console.log(state);
//   return;
// };

// onclick();

const DoomsDelayButton = ({ onclick }) => {
  //   setInterval(callback, 100);

  return (
    <button className="button" onClick={onclick}>
      DOOMS DELAY
    </button>
  );
};

export default DoomsDelayButton;
