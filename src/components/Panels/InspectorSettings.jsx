import { __ } from '@wordpress/i18n';
import { 
  Panel,
  PanelBody,
  PanelRow,
  Button,
  Placeholder,
  ColorPalette
} from '@wordpress/components';
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';

const InspectorSettings = (props) => {
  const { attributes, setAttributes } = props;
  const { 
      coverImage,
      overlayColor,
    } = attributes;

  const colors = [
    { name: 'red', color: '#f00' },
    { name: 'white', color: '#fff' },
    { name: 'blue', color: '#000' },
  ];

  const onSelectImage = (media) => {
    setAttributes({ coverImage: media.url });
  };

  return (
    <InspectorControls>
      <Panel header="Countdown Timer Settings">
        <PanelBody initialOpen={true} title='General Settings'>
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
                      <div>{__('No image selected', 'c-codez-countdown-timer')}</div>
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

          <PanelRow>
            <div style={{ width: '100%', marginTop: '2rem' }}>
              <h3> { __( 'Cover Image Overlay', 'c-codez-countdown-timer' )  }</h3>
              <ColorPalette
                colors={ colors }
                value={ overlayColor }
                enableAlpha
                onChange={ ( color ) => setAttributes( { overlayColor: color } ) }
              />
            </div>
          </PanelRow>
        </PanelBody>
      </Panel>
    </InspectorControls>
  );
};

export default InspectorSettings;