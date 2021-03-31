const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime(min, sec) {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  minDec.innerText = 
  `${chronometer.twoDigitsNumber(chronometer.getMinutes())}`[0];
  minUni.innerText = 
  `${chronometer.twoDigitsNumber(chronometer.getMinutes())}`[1];
}

function printSeconds() {
  secDec.innerText = 
  `${chronometer.twoDigitsNumber(chronometer.getSeconds())}`[0];
  secUni.innerText = 
  `${chronometer.twoDigitsNumber(chronometer.getSeconds())}`[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splits.innerHTML = chronometer.splitClick()
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.classList.toggle("stop");
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.classList.toggle("split");
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.classList.toggle("start");
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.classList.toggle("reset");
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerText == "START") {
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
  console.log("change start button");
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.innerText == "RESET") {
    chronometer.resetClick(printTime);
  } else {
    chronometer.splitClick();
  }
});
