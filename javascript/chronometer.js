class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback()
      }
      console.log(this.currentTime);
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return this.currentTime % 60
  }

  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  }
 
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick(callback) {
    this.currentTime = 0;
    callback();
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes())
    let sec = this.twoDigitsNumber(this.getSeconds())
    console.log(min, sec);
    return `${min}:${sec}`
    
  }
}
