export const calculateTimeLeft = (startDate) => {
  const timerPayload = {
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
    completed: true,
  };

  if(!startDate) {
    return timerPayload;
  }

  const targetDate = new Date(startDate).getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    return timerPayload;
  }

  timerPayload.days = padZero(Math.floor(difference / (1000 * 60 * 60 * 24)));
  timerPayload.hours = padZero(Math.floor((difference / (1000 * 60 * 60)) % 24));
  timerPayload.minutes = padZero(Math.floor((difference / 1000 / 60) % 60));
  timerPayload.seconds = padZero(Math.floor((difference / 1000) % 60));
  timerPayload.completed = false;

  return timerPayload;
};

export const padZero = (num) => {
  return num < 10 ? '0' + num : num;
}