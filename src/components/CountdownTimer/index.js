import React, { useState, useEffect } from 'react';
import { InnerBlocks} from '@wordpress/block-editor';

const calculateTimeLeft = (startDate) => {
  const targetDate = new Date(startDate).getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
      return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          completed: true,
      };
  }

  return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      completed: false,
  };
};

const CountdownTimer = (props) => {
  const { attributes } = props;
  const { 
    title,
    startDate,
    coverImage,
    labelDays,
    labelHours,
    labelMinutes,
    labelSeconds,
    labelTextColor,
    numberTextColor, 
    backgroundColor} = attributes;

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startDate));

  useEffect(() => {
      const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft(startDate));
      }, 1000);

      if(timeLeft.completed) {
          clearInterval(timer);
      }

      return () => clearInterval(timer);
  }, [startDate]);

  if (timeLeft.completed) {
    return <div className="countdown-completed">🎉 Countdown completed!</div>;
  }

  const labelStyle = { color: labelTextColor };
  const numberStyle = { color: numberTextColor };
  const backgroundStyle = { backgroundColor: backgroundColor };

  return (
    <div className='countdown-container' style={{ width: '100%' }}>
      {coverImage && (
        <img className='countdown-cover-image' src={coverImage} alt={coverImage.alt} style={{ width: '100%' }} />
      )}
    
      {title && <h2 className='countdown-heading'>{title}</h2>}

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