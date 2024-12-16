import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { 
  Panel,
  PanelBody,
  PanelRow,
  TextControl,
  Button,
  ColorPicker,
  Placeholder,
  ToggleControl,
} from '@wordpress/components';
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import LinkPicker from '../LinkPicker';

const InspectorSettings = (props) => {
  const { attributes, setAttributes } = props;
  const { 
      title,
      link,
      showLabels,
      coverImage,
      labelDays,
      labelMinutes,
      labelHours,
      labelSeconds,
      labelTextColor,
      numberTextColor,
      backgroundColor,
    } = attributes;

  const onSelectImage = (media) => {
    setAttributes({ coverImage: media.url });
  };

  const onLinkChange = (property, url) => {
    setAttributes({ link: { ...link, [property]: url } });
  }

  return (
    <InspectorControls>
      <Panel header="Countdown Timer Settings">
        <PanelBody initialOpen={true} title='General Settings'>
            <PanelRow>
              <div style={{  width: '100%' }}>
                <TextControl
                  __nextHasNoMarginBottom
                  label="Title"
                  onChange={(newTitle) => setAttributes({ title: newTitle })}
                  value={title}
                />
              </div>
            </PanelRow>

            <PanelRow>
              <LinkPicker
                  link={link}
                  onChangeLink={(url) => onLinkChange('url', url)}
                  onChangeTitle={(title) => onLinkChange('title', title)}
                  onChangeTarget={(target) => onLinkChange('target', target)}
              />
            </PanelRow>

            <PanelRow>
              <Placeholder
                instructions="Select a cover image for the countdown timer"
                label="Cover Image"
              >
                {
                  !coverImage && (
                    <MediaUpload
                        onSelect={onSelectImage}
                        allowedTypes={['image']}
                        render={({ open }) => (
                            <Button onClick={open} variant="primary">
                                {__('Select Image', 'c-codez-countdown-timer')}
                            </Button>
                        )}
                    />
                  )
                }

                <div className="image-picker-block">
                    {coverImage ? (
                        <img src={coverImage} alt={__('Countdown timer cover image', 'c-codez-countdown-timer')} />
                    ) : (
                        <p>{__('No image selected', 'c-codez-countdown-timer')}</p>
                    )}
                </div>

                {coverImage && (
                  <Button
                      onClick={() => setAttributes({ coverImage: '' })}
                      variant="secondary"
                      isDestructive
                      size="small"
                  >
                      {__('Remove Image', 'c-codez-countdown-timer')}
                  </Button>
                )}
              </Placeholder>
            </PanelRow>
        </PanelBody>

        <PanelBody initialOpen={false} title='Style Settings'>
          <PanelRow>
          <Placeholder
                label="Label text color"
              >
              <ColorPicker
                color={labelTextColor}
                enableAlpha={true}
                onChange={(newColor) => setAttributes({ labelTextColor: newColor })}
                />
              </Placeholder>
          </PanelRow>

          <PanelRow>
            <Placeholder
                label="Number text color"
              >
              <ColorPicker
                color={numberTextColor}
                enableAlpha={true}
                onChange={(newColor) => setAttributes({ numberTextColor: newColor })}
                />
              </Placeholder>
          </PanelRow>

          <PanelRow>
            <Placeholder
                label="Background color"
              >
              <ColorPicker
                color={backgroundColor}
                enableAlpha={true}
                onChange={(newColor) => setAttributes({ backgroundColor: newColor })}
                />
              </Placeholder>
          </PanelRow>

        </PanelBody>

        <PanelBody initialOpen={false} title='Label Settings'>
          <PanelRow>
            <ToggleControl
              __nextHasNoMarginBottom
              checked={showLabels}
              label="Show Labels"
              onChange={(value) => setAttributes({ showLabels: value })}
            />
          </PanelRow>

          {
            showLabels && (
              <>
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
              </>
            )
          }
        </PanelBody>
      </Panel>
    </InspectorControls>
  );
};

export default InspectorSettings;