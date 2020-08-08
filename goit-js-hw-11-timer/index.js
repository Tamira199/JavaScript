class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timer = document.querySelector(this.selector);
        this.startTimer();
    }

    startTimer() {
        setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);
            this.timer.innerHTML = `
          <div class="field">
              <span class="value" data-value="days">${days}</span>
              <span class="label">Days</span>
            </div>
            <div class="field">
              <span class="value" data-value="hours">${hours}</span>
              <span class="label">Hours</span>
            </div>
            <div class="field">
              <span class="value" data-value="mins">${mins}</span>
              <span class="label">Minutes</span>
            </div>
            <div class="field">
              <span class="value" data-value="secs">${secs}</span>
              <span class="label">Seconds</span>
            </div>`;
        }, 1000);
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2020'),
});