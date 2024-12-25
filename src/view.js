import { calculateTimeLeft } from "./helpers/timer";

const handleCountdownTimer = () => {
  const countdownTimer = document.querySelector('.wp-block-christian-codez-timer .countdown-timer');
  const countdownDays = countdownTimer.querySelector('#countdown-days');
  const countdownHours = countdownTimer.querySelector('#countdown-hours');
  const countdownMinutes = countdownTimer.querySelector('#countdown-minutes');
  const countdownSeconds = countdownTimer.querySelector('#countdown-seconds');

  if(!countdownTimer) {
    return;
  }

  let timeLeft = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    completed: true,
  };

  const startDate = countdownTimer.dataset.startDate;
  
  const timer = setInterval(() => {
    timeLeft = calculateTimeLeft(startDate);
    
    if(timeLeft.completed) {
      clearInterval(timer);
    }

    countdownDays.innerHTML = timeLeft.days;
    countdownSeconds.innerHTML = timeLeft.seconds;
    countdownMinutes.innerHTML = timeLeft.minutes;
    countdownHours.innerHTML = timeLeft.hours;

  }, 1000);
}

handleCountdownTimer();