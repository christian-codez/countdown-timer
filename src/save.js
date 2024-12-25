import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const Save = (props) => {
    const { attributes } = props;
    const { coverImage, overlayColor } = attributes;

      return (
        <div {...useBlockProps.save()}>
          {coverImage && (
            <div className='countdown-cover-image-wrapper'
            style={{
              '--overlay-color': overlayColor || '#000',
            }}
            >
              <img className='countdown-cover-image' src={coverImage} alt={coverImage.alt} style={{ width: '100%' }} />
            </div>
          )}

          <div className="inner-block-content-container">
            <InnerBlocks.Content />
          </div>
        </div>
      );
};

export default Save;

