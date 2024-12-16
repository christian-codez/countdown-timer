import React from 'react';
import { TextControl, Button, Dropdown, ToggleControl } from '@wordpress/components';
import { URLPopover } from '@wordpress/block-editor';

const LinkPicker = ({ link, onChangeLink, onChangeTitle, onChangeTarget }) => {
    return (
        <div style={{ position: 'relative' }}>
          <Dropdown
              className="anchor-link-container"
              contentClassName="anchor-link-content"
              paddingSize="medium"
              popoverProps={ { placement: 'bottom-start' } }
              renderToggle={ ( { isOpen, onToggle } ) => (
                <Button
                  variant="secondary"
                  onClick={ onToggle }
                  aria-expanded={ isOpen }
                >
                  Toggle Dropdown!
                </Button>
              ) }
              renderContent={ () => (
                <div>
                  <TextControl
                      __nextHasNoMarginBottom
                      label="URL"
                      value={link.url}
                      onChange={onChangeLink}
                      placeholder="https://example.com"
                  />
                  
                  <TextControl
                      __nextHasNoMarginBottom
                      label="Title"
                      value={link.title}
                      onChange={onChangeTitle}
                      placeholder="Enter link title"
                  />

                  <ToggleControl
                    __nextHasNoMarginBottom
                    checked={link.target}
                    label="Open in new tab"
                    onChange={onChangeTarget}
                  />
                </div>
              )}
            />
        </div>
    );
};

export default LinkPicker;
