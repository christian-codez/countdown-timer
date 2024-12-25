import React, { useState, useEffect } from 'react';
import { calculateTimeLeft } from '../../helpers/timer';

const CountdownTimer = (props) => {
  const { attributes } = props;
  const { 
    startDate,
    labelDays,
    labelHours,
    labelMinutes,
    labelSeconds,
    labelTextColor,
    numberTextColor, 
    backgroundColor } = attributes;

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startDate));

  useEffect(() => {
    const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft(startDate));

        if(timeLeft.completed) {
            clearInterval(timer);
        }
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  const labelStyle = { color: labelTextColor };
  const numberStyle = { color: numberTextColor };
  const backgroundStyle = { backgroundColor: backgroundColor };

  return (
    <div className='countdown-container'>
      <div className="countdown-timer">
        <div className="countdown-item" style={backgroundStyle}>
            <span className="countdown-number" style={numberStyle}>{timeLeft.days}</span>
            <span className="countdown-label" style={labelStyle}>{labelDays}</span>
        </div>
        <div className="countdown-item" style={backgroundStyle}>
            <span className="countdown-number" style={numberStyle}>{timeLeft.hours}</span>
            <span className="countdown-label" style={labelStyle}>{ labelHours }</span>
        </div>
        <div className="countdown-item" style={backgroundStyle}>
            <span className="countdown-number" style={numberStyle}>{timeLeft.minutes}</span>
            <span className="countdown-label" style={labelStyle}>{ labelMinutes }</span>
        </div>
        <div className="countdown-item" style={backgroundStyle}>
            <span className="countdown-number" style={numberStyle}>{timeLeft.seconds}</span>
            <span className="countdown-label" style={labelStyle}>{ labelSeconds }</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;