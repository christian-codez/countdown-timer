import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { 
  PanelBody,
  TextControl,
  PanelRow,
  DateTimePicker,
  Button,
  Modal,
  ColorPalette,
  Flex,
  FlexBlock,
  FlexItem,
  Placeholder
} from '@wordpress/components';

const TimerPanel = (props) => {
  const { attributes, setAttributes } = props;
  const { 
    startDate,
    labelDays,
    labelMinutes,
    labelHours,
    labelSeconds,
    numberTextColor,
    labelTextColor,
    backgroundColor,
  } = attributes;
  const [ isOpen, setOpen ] = useState( false );
  const openModal = () => setOpen( true );
  const closeModal = () => setOpen( false );

  const colors = [
    { name: 'red', color: '#f00' },
    { name: 'white', color: '#fff' },
    { name: 'blue', color: '#000' },
  ];

  const handleStartDateChange = (value) => {
    setAttributes({ startDate: value });
  }

  return (
    <div { ...useBlockProps() }>
      <InspectorControls>
          <PanelBody initialOpen={true} title='General'>
            <Placeholder
              label="Countdown Date"
            >
              <div>
                <PanelRow>
                  <Flex direction="column">
                    <FlexItem>
                      <Button variant="secondary" onClick={ openModal }>
                        Select End Date
                      </Button>
                    </FlexItem>
                    <FlexBlock>
                      {startDate && <strong>{ new Date(startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }) }</strong> }
                    </FlexBlock>
                  </Flex>

                    { isOpen && (
                      <Modal
                        title="Timer Date"
                        size="large"
                        onRequestClose={ closeModal }>
                          <DateTimePicker
                            currentDate={ startDate }
                            onChange={(value) => handleStartDateChange(value)}
                          /> 
                      </Modal>
                    ) }
                </PanelRow>
              </div>
            </Placeholder>
          </PanelBody>

          <PanelBody initialOpen={true} title='Display'>
            <PanelRow>
              <div style={{ width: '100%' }}>
                <h3> { __( 'Number Text Color', 'c-codez-countdown-timer' ) }</h3>
                <ColorPalette
                  colors={ colors }
                  value={ numberTextColor }
                  enableAlpha
                  onChange={ ( color ) => setAttributes( { numberTextColor: color } ) }
                />
              </div>
            </PanelRow>

            <PanelRow>
              <div style={{ width: '100%' }}>
                <h3> { __( 'Label Text Color', 'c-codez-countdown-timer' ) }</h3>
                <ColorPalette
                  colors={ colors }
                  value={ labelTextColor }
                  enableAlpha
                  onChange={ ( color ) => setAttributes( { labelTextColor: color } ) }
                />
              </div>
            </PanelRow>

            <PanelRow>
              <div style={{ width: '100%' }}>
                <h3> { __( 'background Color', 'c-codez-countdown-timer' ) }</h3>
                <ColorPalette
                  colors={ colors }
                  value={ backgroundColor }
                  enableAlpha
                  onChange={ ( color ) => setAttributes( { backgroundColor: color } ) }
                />
              </div>
            </PanelRow>
          </PanelBody>

          <PanelBody initialOpen={false} title='Labels'>
            <PanelRow>
              <div style={{ width: '100%' }}>
                <TextControl
                  __nextHasNoMarginBottom
                  label="Days Label"
                  placeholder={__('Enter days label', 'c-codez-countdown-timer')}
                  value={labelDays}
                  onChange={(value) => setAttributes({ labelDays: value })}
                />
              </div>
            </PanelRow>

            <PanelRow>
              <div style={{ width: '100%' }}>
                <TextControl
                  __nextHasNoMarginBottom
                  label="Hours Label"
                  value={labelHours}
                  placeholder={__('Enter hours label', 'c-codez-countdown-timer')}
                  onChange={(value) => setAttributes({ labelHours: value })}
                />
              </div>
            </PanelRow>

            <PanelRow>
              <div style={{ width: '100%' }}>
                <TextControl
                  __nextHasNoMarginBottom
                  label="Minutes Label"
                  placeholder={__('Enter minutes label', 'c-codez-countdown-timer')}
                  value={labelMinutes}
                  onChange={(value) => setAttributes({ labelMinutes: value })}
                />
              </div>
            </PanelRow>

            <PanelRow>
              <div style={{ width: '100%' }}>
                <TextControl
                  __nextHasNoMarginBottom
                  label="Seconds Label"
                  placeholder={__('Enter seconds label', 'c-codez-countdown-timer')}
                  value={labelSeconds}
                  onChange={(value) => setAttributes({ labelSeconds: value })}
                />
              </div>
            </PanelRow>
        </PanelBody>
      </InspectorControls>
    </div>
  );
};

export default TimerPanel;