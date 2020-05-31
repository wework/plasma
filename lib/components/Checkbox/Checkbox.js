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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dataUtils = __webpack_require__(1);

var _style = __webpack_require__(7);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      color = _ref.color,
      data = _ref.data;

  return _react2.default.createElement('div', _extends({
    className: _style2.default.wrapper,
    style: { fill: color },
    dangerouslySetInnerHTML: { __html: icon }
  }, (0, _dataUtils.getDataAttrs)(data)));
};

Icon.defaultProps = {
  color: '#000',
  size: 16
};

Icon.displayName = 'Plasma@Icon';

exports.default = Icon;

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _style = __webpack_require__(61);

var _style2 = _interopRequireDefault(_style);

var _Icon = __webpack_require__(5);

var _Icon2 = _interopRequireDefault(_Icon);

var _dataUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var _cx2, _cx3;

      var _props = this.props,
          checked = _props.checked,
          data = _props.data,
          description = _props.description,
          disabled = _props.disabled,
          fancy = _props.fancy,
          icon = _props.icon,
          indeterminate = _props.indeterminate,
          isBold = _props.isBold,
          name = _props.name,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          text = _props.text,
          value = _props.value,
          id = _props.id;


      var isChecked = checked || value;
      var inlineClass = (0, _classnames2.default)(_defineProperty({}, _style2.default.inline, fancy));
      var inputClassName = indeterminate ? _style2.default.indeterminate : _style2.default.original;
      var wrapperClassName = (0, _classnames2.default)(_style2.default.wrapper, (_cx2 = {}, _defineProperty(_cx2, _style2.default.wrapperDisabled, disabled), _defineProperty(_cx2, _style2.default.fancy, fancy), _defineProperty(_cx2, _style2.default.fancyChecked, fancy && isChecked), _cx2));
      var textClassName = (0, _classnames2.default)(_style2.default.text, (_cx3 = {}, _defineProperty(_cx3, _style2.default.textBold, isBold), _defineProperty(_cx3, _style2.default.textDisabled, disabled), _cx3));

      return _react2.default.createElement(
        'div',
        _extends({}, (0, _dataUtils.getDataAttrs)(data), { className: inlineClass }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: id, className: wrapperClassName },
            _react2.default.createElement('input', {
              checked: isChecked,
              className: inputClassName,
              disabled: disabled,
              id: id,
              name: name,
              onChange: onChange,
              onBlur: onBlur,
              type: 'checkbox'
            }),
            !fancy && _react2.default.createElement('div', { className: _style2.default.checkbox }),
            icon && _react2.default.createElement(
              'div',
              { className: fancy ? _style2.default.fancyIcon : _style2.default.icon },
              _react2.default.createElement(_Icon2.default, { icon: icon })
            ),
            _react2.default.createElement(
              'div',
              { className: textClassName },
              text
            )
          )
        ),
        description && _react2.default.createElement(
          'span',
          { className: _style2.default.description },
          description
        )
      );
    }
  }]);

  return Checkbox;
}(_react2.default.Component);

Checkbox.defaultProps = {
  checked: false,
  indeterminate: false,
  name: 'checkbox',
  text: 'Option',
  value: false
};


Checkbox.displayName = 'Plasma@Checkbox';

exports.default = Checkbox;

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"text":"src-components-Checkbox-text__17XBM","description":"src-components-Checkbox-description__1-816","clearfix":"src-components-Checkbox-clearfix__2irHj","inline":"src-components-Checkbox-inline__1JEED","wrapper":"src-components-Checkbox-wrapper__3JmR1","original":"src-components-Checkbox-original__3CBDl","intermediate":"src-components-Checkbox-intermediate__3bNEk","checkbox":"src-components-Checkbox-checkbox__3nwSj","fancy":"src-components-Checkbox-fancy__1M2lj","fancyChecked":"src-components-Checkbox-fancyChecked__CF2m3","wrapperDisabled":"src-components-Checkbox-wrapperDisabled__2Gx22","indeterminate":"src-components-Checkbox-indeterminate__3MFpa","textBold":"src-components-Checkbox-textBold__2H8NI","textDisabled":"src-components-Checkbox-textDisabled__1tJX6","icon":"src-components-Checkbox-icon__1C2sv","fancyIcon":"src-components-Checkbox-fancyIcon__2hKYH"};

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"clearfix":"src-components-Icon-clearfix__3zhE-","wrapper":"src-components-Icon-wrapper__1y5Fo"};

/***/ })

/******/ });