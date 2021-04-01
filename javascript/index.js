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

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDec.innerText = `${chronometer.twoDigitsNumber(
    chronometer.getMinutes()
  )}`[0];
  minUni.innerText = `${chronometer.twoDigitsNumber(
    chronometer.getMinutes()
  )}`[1];
}

function printSeconds() {
  secDec.innerText = 
  `${chronometer.twoDigitsNumber(chronometer.getSeconds())}`[0];
  secUni.innerText = 
  `${chronometer.twoDigitsNumber(chronometer.getSeconds())}`[1];
}

// ==> BONUS
function printMilliseconds() {
  chronometer.twoDigitsNumber(currentMilliseconds)
  
}

// function printSplit() {
  
// }

function clearSplits() {
  splits.innerHTML = "00:00"
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  
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
  btnRight.classList.toggle("split");
  btnLeft.classList.toggle("stop");
  console.log("change start button");
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.innerText == "RESET") {
    chronometer.resetClick(printTime);
    clearSplits()
  } else {
    chronometer.splitClick();
  }
});
