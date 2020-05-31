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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
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

/***/ 20:
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

var _style = __webpack_require__(26);

var _style2 = _interopRequireDefault(_style);

var _dataUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function (_React$Component) {
  _inherits(Loader, _React$Component);

  function Loader() {
    _classCallCheck(this, Loader);

    return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
  }

  _createClass(Loader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          dotColor = _props.dotColor,
          _props$dotStyle = _props.dotStyle,
          dotStyle = _props$dotStyle === undefined ? {} : _props$dotStyle;

      if (dotColor != null) {
        dotStyle.backgroundColor = dotColor;
      }

      return _react2.default.createElement(
        'div',
        _extends({}, (0, _dataUtils.getDataAttrs)(this.props.data), {
          className: (0, _classnames2.default)(_style2.default.container, this.props.className),
          style: this.props.style
        }),
        _react2.default.createElement(
          'div',
          { className: _style2.default.spinner },
          _react2.default.createElement('div', { className: (0, _classnames2.default)(_style2.default.bounce2, this.props.dotClassName), style: dotStyle }),
          _react2.default.createElement('div', { className: (0, _classnames2.default)(_style2.default.bounce3, this.props.dotClassName), style: dotStyle }),
          _react2.default.createElement('div', { className: (0, _classnames2.default)(_style2.default.bounce1, this.props.dotClassName), style: dotStyle })
        )
      );
    }
  }]);

  return Loader;
}(_react2.default.Component);

Loader.defaultProps = {
  dotStyle: {}
};


Loader.displayName = 'Plasma@Loader';

exports.default = Loader;

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"clearfix":"src-components-Loader-clearfix__2u-pC","container":"src-components-Loader-container__2NlKb","spinner":"src-components-Loader-spinner__AzWJk","sk-bouncedelay":"src-components-Loader-sk-bouncedelay__3VHOa","bounce1":"src-components-Loader-bounce1__3U_xa","bounce2":"src-components-Loader-bounce2__16ySy","bounce3":"src-components-Loader-bounce3__ayLpW"};

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Loader = __webpack_require__(20);

var _Loader2 = _interopRequireDefault(_Loader);

var _dataUtils = __webpack_require__(1);

var _style = __webpack_require__(59);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Variants = Object.freeze({
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary'
});
var Sizes = Object.freeze({
  SMALL: 'small'
});

function Button(props) {
  var _cx;

  var children = props.children,
      className = props.className,
      data = props.data,
      _props$disabled = props.disabled,
      disabled = _props$disabled === undefined ? false : _props$disabled,
      isSubmit = props.isSubmit,
      label = props.label,
      _props$loading = props.loading,
      loading = _props$loading === undefined ? false : _props$loading,
      onClick = props.onClick,
      size = props.size,
      style = props.style,
      _props$type = props.type,
      type = _props$type === undefined ? Variants.PRIMARY : _props$type,
      rest = _objectWithoutProperties(props, ['children', 'className', 'data', 'disabled', 'isSubmit', 'label', 'loading', 'onClick', 'size', 'style', 'type']);

  var classes = (0, _classnames2.default)(_style2.default.button, className, (_cx = {}, _defineProperty(_cx, _style2.default.primary, type === Variants.PRIMARY), _defineProperty(_cx, _style2.default.secondary, type === Variants.SECONDARY), _defineProperty(_cx, _style2.default.tertiary, type === Variants.TERTIARY), _defineProperty(_cx, _style2.default.small, size === Sizes.SMALL), _defineProperty(_cx, _style2.default.loading, loading), _cx));

  var contentComponent = void 0;
  if (loading) {
    var loaderDotStyle = type === Variants.SECONDARY || type === Variants.TERTIARY ? { backgroundColor: '#000', opacity: '0.1' } : undefined;

    contentComponent = _react2.default.createElement(_Loader2.default, { dotStyle: loaderDotStyle });
  } else {
    contentComponent = children || label;
  }

  return (
    // eslint-disable-next-line react/button-has-type
    _react2.default.createElement(
      'button',
      _extends({}, (0, _dataUtils.getDataAttrs)(data), {
        className: classes,
        disabled: disabled,
        onClick: onClick,
        style: style,
        type: isSubmit ? 'submit' : 'button'
      }, rest),
      contentComponent
    )
  );
}

Button.displayName = 'Plasma@Button';

exports.default = Button;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"src-components-Button-button__1MgdH","clearfix":"src-components-Button-clearfix__2_yPE","primary":"src-components-Button-primary__1I9gR","secondary":"src-components-Button-secondary__39EKa","tertiary":"src-components-Button-tertiary__1kVXP","small":"src-components-Button-small__1WMMU","loading":"src-components-Button-loading__3c2Ql"};

/***/ })

/******/ });