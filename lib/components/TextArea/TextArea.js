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
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataAttrs = undefined;

var _lodash = __webpack_require__(3);

var getDataAttrs = exports.getDataAttrs = function getDataAttrs(data) {
  if (!data) return {};
  return (0, _lodash.mapKeys)(data, function (val, key) {
    return 'data-' + (0, _lodash.kebabCase)(key);
  });
};

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

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

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(3);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _dataUtils = __webpack_require__(1);

var _autogrow = __webpack_require__(33);

var _autogrow2 = _interopRequireDefault(_autogrow);

var _style = __webpack_require__(95);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = function (_Component) {
  _inherits(TextArea, _Component);

  function TextArea() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.onRef = function (el) {
      if (el && _this.props.autosize) {
        _this.autogrow = new _autogrow2.default(el);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextArea, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.autogrow && this.autogrow.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var _cx, _cx2;

      var _props = this.props,
          data = _props.data,
          disabled = _props.disabled,
          error = _props.error,
          maxLength = _props.maxLength,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          onFocus = _props.onFocus,
          placeholder = _props.placeholder,
          rows = _props.rows,
          size = _props.size,
          value = _props.value;


      var wrapperStyle = (0, _classnames2.default)(_style2.default.wrapper, (_cx = {}, _defineProperty(_cx, _style2.default.wrapperDisabled, disabled), _defineProperty(_cx, _style2.default.wrapperError, error), _defineProperty(_cx, _style2.default.wrapperLarge, (0, _lodash.toUpper)(size) === 'LARGE'), _cx));

      var textareaStyle = (0, _classnames2.default)(_style2.default.textarea, (_cx2 = {}, _defineProperty(_cx2, _style2.default.disabled, disabled), _defineProperty(_cx2, _style2.default.large, (0, _lodash.toUpper)(size) === 'LARGE'), _cx2));

      return _react2.default.createElement(
        'div',
        _extends({ className: wrapperStyle }, (0, _dataUtils.getDataAttrs)(data)),
        _react2.default.createElement('textarea', {
          ref: this.onRef,
          className: textareaStyle,
          disabled: disabled,
          onChange: onChange,
          rows: rows,
          onFocus: function (_onFocus) {
            function onFocus(_x) {
              return _onFocus.apply(this, arguments);
            }

            onFocus.toString = function () {
              return _onFocus.toString();
            };

            return onFocus;
          }(function (e) {
            /* eslint-disable no-param-reassign */
            e.target.parentElement.className += ' ' + _style2.default.wrapperFocused;
            /* eslint-enable no-param-reassign */
            onFocus && onFocus();
          }),
          onBlur: function (_onBlur) {
            function onBlur(_x2) {
              return _onBlur.apply(this, arguments);
            }

            onBlur.toString = function () {
              return _onBlur.toString();
            };

            return onBlur;
          }(function (e) {
            e.target.parentElement.classList.remove(_style2.default.wrapperFocused);
            onBlur && onBlur();
          }),
          placeholder: placeholder,
          value: value,
          maxLength: maxLength
        })
      );
    }
  }]);

  return TextArea;
}(_react.Component);

TextArea.defaultProps = {
  placeholder: '',
  rows: '3',
  autosize: true
};


TextArea.displayName = 'Plasma@TextArea';

exports.default = TextArea;

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"textarea":"src-components-TextArea-textarea__3-ToC","clearfix":"src-components-TextArea-clearfix__1Bs85","wrapper":"src-components-TextArea-wrapper__3LRph","wrapperFocused":"src-components-TextArea-wrapperFocused__3s80H","wrapperDisabled":"src-components-TextArea-wrapperDisabled__29toe","wrapperLarge":"src-components-TextArea-wrapperLarge__3XY72","wrapperError":"src-components-TextArea-wrapperError__1dAKr","disabled":"src-components-TextArea-disabled__1F3e9","large":"src-components-TextArea-large__KT5-A"};

/***/ })

/******/ });