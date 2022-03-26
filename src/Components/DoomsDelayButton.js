let state = 0;

const DoomsDelayButton = ({ callback }) => {
  //   setInterval(callback, 100);

  const onclick = () => {
    state = state + 1;
    callback(state);

    return;
  };

  return (
    <button className="button" onClick={onclick}>
      DOOMS DELAY
    </button>
  );
};

export default DoomsDelayButton;
