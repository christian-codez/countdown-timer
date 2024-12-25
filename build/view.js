/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/timer.js":
/*!******************************!*\
  !*** ./src/helpers/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateTimeLeft: () => (/* binding */ calculateTimeLeft),
/* harmony export */   padZero: () => (/* binding */ padZero)
/* harmony export */ });
const calculateTimeLeft = startDate => {
  const timerPayload = {
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
    completed: true
  };
  if (!startDate) {
    return timerPayload;
  }
  const targetDate = new Date(startDate).getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;
  if (difference <= 0) {
    return timerPayload;
  }
  timerPayload.days = padZero(Math.floor(difference / (1000 * 60 * 60 * 24)));
  timerPayload.hours = padZero(Math.floor(difference / (1000 * 60 * 60) % 24));
  timerPayload.minutes = padZero(Math.floor(difference / 1000 / 60 % 60));
  timerPayload.seconds = padZero(Math.floor(difference / 1000 % 60));
  timerPayload.completed = false;
  return timerPayload;
};
const padZero = num => {
  return num < 10 ? '0' + num : num;
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/timer */ "./src/helpers/timer.js");

const handleCountdownTimer = () => {
  const countdownTimer = document.querySelector('.wp-block-christian-codez-timer .countdown-timer');
  const countdownDays = countdownTimer.querySelector('#countdown-days');
  const countdownHours = countdownTimer.querySelector('#countdown-hours');
  const countdownMinutes = countdownTimer.querySelector('#countdown-minutes');
  const countdownSeconds = countdownTimer.querySelector('#countdown-seconds');
  if (!countdownTimer) {
    return;
  }
  let timeLeft = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    completed: true
  };
  const startDate = countdownTimer.dataset.startDate;
  const timer = setInterval(() => {
    timeLeft = (0,_helpers_timer__WEBPACK_IMPORTED_MODULE_0__.calculateTimeLeft)(startDate);
    if (timeLeft.completed) {
      clearInterval(timer);
    }
    countdownDays.innerHTML = timeLeft.days;
    countdownSeconds.innerHTML = timeLeft.seconds;
    countdownMinutes.innerHTML = timeLeft.minutes;
    countdownHours.innerHTML = timeLeft.hours;
  }, 1000);
};
handleCountdownTimer();
})();

/******/ })()
;
//# sourceMappingURL=view.js.map