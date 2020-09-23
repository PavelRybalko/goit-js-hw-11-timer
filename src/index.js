// const daysSpanRef = document.querySelector("span.value[data-value=days]");
// const hoursSpanRef = document.querySelector("span.value[data-value=hours]");
// const minsSpanRef = document.querySelector("span.value[data-value=mins]");
// const secsSpanRef = document.querySelector("span.value[data-value=secs]");

// const intervalId = setInterval( () => {

//   const currentTime = Date.now();
//   const targetTime = new Date('November 21, 2020').getTime();
//   const deltaTime = targetTime - currentTime;

//   showTime(deltaTime);
//   if(deltaTime <= 0){
//     clearInterval(intervalId);
//   }
// },1000)

// function showTime(time){

// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// const secs = Math.floor((time % (1000 * 60)) / 1000);
// daysSpanRef.textContent = pad(days);
// hoursSpanRef.textContent = pad(hours);
// minsSpanRef.textContent = pad(mins);
// secsSpanRef.textContent = pad(secs);

// console.log(`${days}:${hours}:${mins}:${secs}`);
// };

// function pad(value){

//   return String(value).padStart(2,'0');
// };

//Плагин ожидает следующую HTML-разметку и показывает
//четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX.
//Количество дней может состоять из более чем двух цифр.
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

class CountdownTimer {
  constructor(options) {
    this.selector = options.selector;
    this.targetDate = options.targetDate;
    this.daysSpanRef = document.querySelector('span.value[data-value=days]');
    this.hoursSpanRef = document.querySelector('span.value[data-value=hours]');
    this.minsSpanRef = document.querySelector('span.value[data-value=mins]');
    this.secsSpanRef = document.querySelector('span.value[data-value=secs]');
  }

  startTimer() {
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const targetTime = this.targetDate.getTime();
      const deltaTime = targetTime - currentTime;

      this.showTime(deltaTime);
      if (deltaTime <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  showTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.daysSpanRef.textContent = this.pad(days);
    this.hoursSpanRef.textContent = this.pad(hours);
    this.minsSpanRef.textContent = this.pad(mins);
    this.secsSpanRef.textContent = this.pad(secs);

    console.log(
      `${this.pad(days)}:${this.pad(hours)}:${this.pad(mins)}:${this.pad(
        secs,
      )}`,
    );
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('November 21, 2020'),
});

timer1.startTimer();
