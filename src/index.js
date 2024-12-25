import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './custom-blocks/timer/style.scss';


/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';
import TimerEdit from './custom-blocks/timer/edit';
import TimerSave from './custom-blocks/timer/save';
import Save from './save';
import { ReactComponent as countdownIcon } from './images/countdown-icon.svg';
import { ReactComponent as TimerIcon } from './images/timer.svg';

registerBlockType( metadata.name, {
	edit: Edit,
  save: Save,
  icon: countdownIcon,
} );

registerBlockType("christian-codez/timer", {
  apiVersion: 3,
  title: "Timer",
  description: "A simple timer block",
  icon: TimerIcon,
  parent: [ "christian-codez/c-codez-countdown-timer" ],
  example: {
    attributes: {
      // coverImage: "https://via.placeholder.com/1200x600",
      startDate: "2022-12-31T23:59:59",
      labelDays: "Days",
      labelHours: "Hours",
      labelMinutes: "Minutes",
      labelSeconds: "Seconds",
      labelTextColor: "#fff",
      numberTextColor: "#fff",
      backgroundColor: "#000",
    },
  },
  attributes: {
    startDate: {
      type: 'string',
      default: '',
    },
    labelDays: {
      "type": "string",
      "default": "Days"
    },
    labelHours: {
      "type": "string",
      "default": "Hours"
    },
    labelMinutes: {
      "type": "string",
      "default": "Minutes"
    },
    labelSeconds: {
      "type": "string",
      "default": "Seconds"
    },
    labelTextColor: {
      "type": "string",
      "default": "#fff"
    },
    numberTextColor: {
      "type": "string",
      "default": "#fff"
    },
    backgroundColor: {
      "type": "string",
      "default": "#000"
    },
  },
  edit: TimerEdit,
  save: TimerSave,
});
