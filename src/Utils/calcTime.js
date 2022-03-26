let doomTime = 100000;
let timeStart = Date.now();

const calcTime = (func) => {
  let x = Math.floor(doomTime - (Date.now() - timeStart) / 1000);
  func(x);
  console.log(x);
};

export default calcTime;
