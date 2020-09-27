//Плагин ожидает следующую HTML-разметку и показывает
//четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX.
//Количество дней может состоять из более чем двух цифр.
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

class CountdownTimer {
  constructor(options) {
    this.targetDate = options.targetDate;
    this.daysSpanRef = document.querySelector(
      options.selector + ' span.value[data-value=days]',
    );
    this.hoursSpanRef = document.querySelector(
      options.selector + ' span.value[data-value=hours]',
    );
    this.minsSpanRef = document.querySelector(
      options.selector + ' span.value[data-value=mins]',
    );
    this.secsSpanRef = document.querySelector(
      options.selector + ' span.value[data-value=secs]',
    );
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
    this.daysSpanRef.textContent = this.pad(
      Math.floor(time / (1000 * 60 * 60 * 24)),
    );
    this.hoursSpanRef.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.minsSpanRef.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    this.secsSpanRef.textContent = this.pad(
      Math.floor((time % (1000 * 60)) / 1000),
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
