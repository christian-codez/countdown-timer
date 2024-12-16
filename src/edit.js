/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { 
  Panel,
  PanelBody,
  PanelRow,
  Placeholder,
  DateTimePicker,
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import InspectorSettings from './components/Panels/InspectorSettings';
import CountdownTimer from './components/CountdownTimer';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
  const { attributes, setAttributes } = props;
  const { startDate } = attributes;

	return (
    <>
        <InspectorSettings { ...props } />
        <Panel header="Countdown Timer">
          <div { ...useBlockProps() }>
            <PanelBody initialOpen={true} title='Countdown Timer Settings'>
              <Placeholder
                  instructions="Enter the date you intend to stop the countdown"
                  label="End Date"
                >
                  <div style={{ width: '100%' }}>
                    <DateTimePicker
                      currentDate={ startDate }
                      onChange={(value) => setAttributes({ startDate: value })}
                    />
                  </div>
                </Placeholder>
            </PanelBody>
            
            <PanelBody initialOpen={false} title='Preview'>
              <PanelRow>
                <CountdownTimer { ...props } />
              </PanelRow>
            </PanelBody>
          </div>
        </Panel>
    </>
	);
}
