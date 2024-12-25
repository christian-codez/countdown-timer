import { useBlockProps } from '@wordpress/block-editor';
import CountdownTimer from '../../components/CountdownTimer';
import TimerPanel from './Panels';

const TimerEdit = (props) => {
  return (
    <>
      <TimerPanel { ...props } />

      <div {...useBlockProps()}>
        <CountdownTimer { ...props } />
      </div>
    </>
  );
};

export default TimerEdit;