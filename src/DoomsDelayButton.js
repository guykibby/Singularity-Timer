let state = 0;

const DoomsDelayButton = ({ onclick }) => {
  //   setInterval(callback, 100);

  return (
    <button className="button" onClick={onclick}>
      DOOMS DELAY
    </button>
  );
};

export default DoomsDelayButton;
