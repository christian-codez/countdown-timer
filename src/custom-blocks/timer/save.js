import { useBlockProps } from '@wordpress/block-editor';

const TimerSave = (props) => {
  const { attributes } = props;
  const { 
    startDate,
    numberTextColor,
    labelTextColor,
    backgroundColor,
  } = attributes;

  const numberTextStyles = { color: numberTextColor };
  const labelTextStyles = { color: labelTextColor };
  const countdownItemStyles = { backgroundColor: backgroundColor };

  return (
    <div {...useBlockProps.save()}>
      <div className='countdown-container'>
        <div className="countdown-timer" data-start-date={startDate}>
          <div className="countdown-item" style={countdownItemStyles}>
              <span id='countdown-days' style={numberTextStyles} className="countdown-number">00</span>
              <span className="countdown-label" style={labelTextStyles}>Days</span>
          </div>
          <div className="countdown-item" style={countdownItemStyles}>
              <span id='countdown-hours' style={numberTextStyles} className="countdown-number">00</span>
              <span className="countdown-label" style={labelTextStyles}>Hours</span>
          </div>
          <div className="countdown-item" style={countdownItemStyles}>
              <span id='countdown-minutes' style={numberTextStyles} className="countdown-number">00</span>
              <span className="countdown-label" style={labelTextStyles}>Minutes</span>
          </div>
          <div className="countdown-item" style={countdownItemStyles}>
              <span id='countdown-seconds' style={numberTextStyles} className="countdown-number">00</span>
              <span className="countdown-label" style={labelTextStyles}>Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerSave;
