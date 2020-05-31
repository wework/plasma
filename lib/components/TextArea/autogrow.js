module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.Autogrow = factory();
  }
})(undefined, function () {
  return function (textarea, maxLines) {
    var self = this;

    if (maxLines === undefined) {
      maxLines = 999;
    }

    /**
     * Calculates the vertical padding of the element
     * @param textarea
     * @returns {number}
     */
    self.getOffset = function (textarea) {
      var style = window.getComputedStyle(textarea, null),
          props = ['paddingTop', 'paddingBottom'],
          offset = 0;

      for (var i = 0; i < props.length; i++) {
        offset += parseInt(style[props[i]]);
      }
      return offset;
    };

    /**
     * Sets textarea height as exact height of content
     * @returns {boolean}
     */
    self.autogrowFn = function () {
      var newHeight = 0,
          hasGrown = false;
      if (textarea.scrollHeight - offset > self.maxAllowedHeight) {
        textarea.style.overflowY = 'scroll';
        newHeight = self.maxAllowedHeight;
      } else {
        textarea.style.overflowY = 'hidden';
        textarea.style.height = 'auto';
        newHeight = textarea.scrollHeight - offset;
        hasGrown = true;
      }
      textarea.style.height = newHeight + 'px';
      return hasGrown;
    };

    self.destroy = function () {
      textarea.removeEventListener('input', self.autogrowFn);
    };

    var offset = self.getOffset(textarea);
    self.rows = textarea.rows || 1;
    self.lineHeight = textarea.scrollHeight / self.rows - offset / self.rows;
    self.maxAllowedHeight = self.lineHeight * maxLines - offset;

    // Call autogrowFn() when textarea's value is changed
    textarea.addEventListener('input', self.autogrowFn);
  };
});

/***/ })

/******/ });