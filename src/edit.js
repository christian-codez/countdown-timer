import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './editor.scss';
import InspectorSettings from './components/Panels/InspectorSettings';

export default function Edit(props) {
  const { attributes } = props;
  const { coverImage, overlayColor } = attributes;

  const blockProps = useBlockProps();
  const innerBlockProps = useInnerBlocksProps( blockProps, {
    allowedBlocks: [ 'core/heading', 'core/paragraph', 'christian-codez/timer', 'core/button', 'core/spacer' ],
    template: [
      [ 'core/heading', { 
        level: 2,
        content: 'Countdown Timer Title',
        placeholder: 'Countdown Timer',
        className: 'has-text-align-center',
      } ],
      [ 'core/paragraph', { 
        placeholder: 'Enter a description for the countdown.' ,
        content: 'Enter a description for the countdown.',
        className: 'has-text-align-center',
      } ],
      ['christian-codez/timer'],
      [ 'core/button', { 
        placeholder: 'Click me!',
        text: 'Click Me',
        url: '#',
        className: 'is-style-align-center' 
      } ],
    ],
  });

	return (
    <>
      <InspectorSettings { ...props } />
      <div className="c-codez-countdown-timer-wrapper" {...useBlockProps()}>
        {coverImage && (
          <div className='countdown-cover-image-wrapper'
          style={{
            '--overlay-color': overlayColor || '#000',
          }}
          >
            <img className='countdown-cover-image' src={coverImage} alt={coverImage.alt} style={{ width: '100%' }} />
          </div>
        )}
        <div { ...innerBlockProps } style={{ zIndex: 4 }}></div>
      </div>
    </>
	);
}
