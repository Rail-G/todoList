/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 925:
/***/ (() => {

var pinnedTask = document.querySelector('.pinned');
var allTasks = document.querySelector('.all');
var input = document.querySelector('#tasks-value');
var blog = document.querySelector('.blog');
blog.addEventListener('click', function (e) {
  if (e.target.closest('.task-check')) {
    if (e.target.classList.contains('checked')) {
      e.target.textContent = '';
      e.target.classList.remove('checked');
      allTasks.appendChild(e.target.closest('.task'));
      if (pinnedTask.querySelector('h2').classList.contains('hidden') && pinnedTask.querySelectorAll('.task').length == 0) {
        pinnedTask.querySelector('h2').classList.remove('hidden');
      }
      if (!allTasks.querySelector('h2').classList.contains('hidden')) {
        allTasks.querySelector('h2').classList.add('hidden');
      }
    } else {
      e.target.textContent = 'V';
      e.target.classList.add('checked');
      if (!pinnedTask.querySelector('h2').classList.contains('hidden')) {
        pinnedTask.querySelector('h2').classList.add('hidden');
      }
      pinnedTask.appendChild(e.target.closest('.task'));
      if (allTasks.querySelector('h2').classList.contains('hidden') && allTasks.querySelectorAll('.task').length == 0) {
        allTasks.querySelector('h2').classList.remove('hidden');
      }
    }
  }
});
input.addEventListener('keyup', function (e) {
  if (e.key == 'Enter' && input.value != '') {
    allTasks.insertAdjacentHTML('afterbegin', "<div class=\"task\"><span class=\"task-text\">".concat(input.value, "</span><div for=\"checkbox1\" class=\"task-check\"></div></div>"));
    if (!allTasks.querySelector('h2').classList.contains('hidden')) {
      allTasks.querySelector('h2').classList.add('hidden');
    }
    input.value = '';
  }
  allTasks.querySelectorAll('.task').forEach(function (elem) {
    if (!elem.querySelector('.task-text').textContent.toLowerCase().includes(input.value.toLowerCase())) {
      elem.classList.add('hidden');
    } else {
      elem.classList.remove('hidden');
    }
  });
  var poi = allTasks.querySelector('h2.hidden') ? 1 : 0;
  if (allTasks.querySelectorAll('.hidden').length - poi == allTasks.querySelectorAll('.task').length) {
    allTasks.querySelector('h2').classList.remove('hidden');
  } else {
    allTasks.querySelector('h2').classList.add('hidden');
  }
});

// Через Input:checkbox
// const inpId = document.querySelectorAll('input')

// inpId.forEach(elem => {
//     elem.addEventListener('change', () => {
//         const label = document.querySelector(`label[for="${elem.id}"]`);
//         if(elem.checked) {
//             label.textContent = 'V'
//         } else {
//             label.textContent = ''
//         }
//     })
// })

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(925);
/* harmony import */ var _js_todo_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_todo_js__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ })()
;