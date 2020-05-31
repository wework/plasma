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
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
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

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dataUtils = __webpack_require__(1);

var _style = __webpack_require__(107);

var _style2 = _interopRequireDefault(_style);

var _Label = __webpack_require__(22);

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormField = function FormField(_ref) {
  var children = _ref.children,
      isDisabled = _ref.isDisabled,
      isRequired = _ref.isRequired,
      label = _ref.label,
      data = _ref.data,
      displayError = _ref.displayError,
      errorMessage = _ref.errorMessage,
      style = _ref.style;

  var labelText = label;

  if (isRequired) {
    labelText += ' *';
  }

  return _react2.default.createElement(
    'div',
    _extends({}, (0, _dataUtils.getDataAttrs)(data), { className: _style2.default.wrapper, style: style }),
    _react2.default.createElement(
      _Label2.default,
      { disabled: isDisabled },
      labelText
    ),
    _react2.default.createElement(
      'div',
      { className: _style2.default.input },
      children
    ),
    displayError && errorMessage && _react2.default.createElement(
      'div',
      { className: _style2.default.error },
      errorMessage
    )
  );
};

FormField.defaultProps = {
  children: '',
  disabled: false,
  label: '',
  style: {}
};

FormField.displayName = 'Plasma@FormField';

exports.default = FormField;

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"clearfix":"src-components-layout-FormField-clearfix__2JcJE","disabledWrapper":"src-components-layout-FormField-disabledWrapper__nKBka","disabled":"src-components-layout-FormField-disabled__3wGcs","wrapper":"src-components-layout-FormField-wrapper__3rQr5","error":"src-components-layout-FormField-error__2RjpE"};

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _dataUtils = __webpack_require__(1);

var _style = __webpack_require__(29);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Label(_ref) {
  var _cx;

  var children = _ref.children,
      className = _ref.className,
      data = _ref.data,
      disabled = _ref.disabled,
      htmlFor = _ref.htmlFor,
      inline = _ref.inline,
      required = _ref.required,
      text = _ref.text,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'data', 'disabled', 'htmlFor', 'inline', 'required', 'text']);

  var classes = (0, _classnames2.default)(_style2.default.label, className, (_cx = {}, _defineProperty(_cx, _style2.default.labelInline, inline), _defineProperty(_cx, _style2.default.labelDisabled, disabled), _defineProperty(_cx, _style2.default.labelRequired, required), _cx));

  return _react2.default.createElement(
    'label',
    _extends({ className: classes, htmlFor: htmlFor }, (0, _dataUtils.getDataAttrs)(data), rest),
    children || text
  );
}

Label.displayName = 'Plasma@Label';

exports.default = Label;

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"label":"src-components-Label-label__270Um","clearfix":"src-components-Label-clearfix__Pj57p","labelInline":"src-components-Label-labelInline__1qiIr","labelDisabled":"src-components-Label-labelDisabled__1N114","labelRequired":"src-components-Label-labelRequired__2ow0G"};

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })

/******/ });