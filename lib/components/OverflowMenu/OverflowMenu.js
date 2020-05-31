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
/******/ 	return __webpack_require__(__webpack_require__.s = 64);
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

/***/ 17:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"revealableListItem":"src-components-OverflowMenu-revealableListItem__A34a8","clearfix":"src-components-OverflowMenu-clearfix__2Xf5m","overflow":"src-components-OverflowMenu-overflow__k7TpV","container":"src-components-OverflowMenu-container__1z8o8","action":"src-components-OverflowMenu-action__38-0_","revealable":"src-components-OverflowMenu-revealable__3-kiJ","openLeft":"src-components-OverflowMenu-openLeft__3SJdt","revealed":"src-components-OverflowMenu-revealed__3qoKU","revealableTopWrapper":"src-components-OverflowMenu-revealableTopWrapper__2q3_Q","revealableTop":"src-components-OverflowMenu-revealableTop__32qV6","labelWithText":"src-components-OverflowMenu-labelWithText__ETA6L","revealableList":"src-components-OverflowMenu-revealableList__1YJUE"};

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(17);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OverflowMenuItem = function OverflowMenuItem(_ref) {
  var onClick = _ref.onClick,
      optionKey = _ref.optionKey,
      text = _ref.text;

  return _react2.default.createElement(
    'li',
    { className: _style2.default.revealableListItem, onClick: function (_onClick) {
        function onClick() {
          return _onClick.apply(this, arguments);
        }

        onClick.toString = function () {
          return _onClick.toString();
        };

        return onClick;
      }(function () {
        return onClick(optionKey);
      }) },
    text
  );
};

OverflowMenuItem.displayName = 'Plasma@OverflowMenuItem';

exports.default = OverflowMenuItem;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(3);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dataUtils = __webpack_require__(1);

var _OverflowMenuItem = __webpack_require__(28);

var _OverflowMenuItem2 = _interopRequireDefault(_OverflowMenuItem);

var _style = __webpack_require__(17);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var direction = { RIGHT: 'right', LEFT: 'left' };

var OverflowMenu = function (_React$Component) {
  _inherits(OverflowMenu, _React$Component);

  function OverflowMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OverflowMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OverflowMenu.__proto__ || Object.getPrototypeOf(OverflowMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      revealed: false
    }, _this.handleMouseEnter = function () {
      if (!_this.props.disabled) {
        _this.setState({ revealed: true });
      }
    }, _this.handleMouseLeave = function () {
      _this.setState({ revealed: false });
    }, _this.handleClick = function (optionKey) {
      _this.setState({ revealed: false });
      _this.props.onClick(optionKey);
    }, _this.renderLabel = function () {
      var label = _this.props.label;

      if (label) {
        return _react2.default.createElement(
          'div',
          { className: _style2.default.labelWithText },
          label,
          ' \u25BE'
        );
      }

      return _react2.default.createElement('div', { className: _style2.default.overflow });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OverflowMenu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var revealableStyle = (0, _classnames2.default)(_style2.default.revealable, _defineProperty({}, _style2.default.revealed, this.state.revealed));
      var revealableListStyle = (0, _classnames2.default)(_style2.default.revealableList, _defineProperty({}, _style2.default.openLeft, this.props.openDirection && this.props.openDirection === direction.LEFT));
      return _react2.default.createElement(
        'div',
        _extends({}, (0, _dataUtils.getDataAttrs)(this.props.data), {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          className: _style2.default.container
        }),
        _react2.default.createElement(
          'div',
          { className: _style2.default.action },
          this.renderLabel()
        ),
        _react2.default.createElement(
          'div',
          { className: revealableStyle },
          _react2.default.createElement(
            'div',
            { className: _style2.default.revealableTopWrapper },
            _react2.default.createElement(
              'div',
              { className: _style2.default.revealableTop },
              this.renderLabel()
            )
          ),
          _react2.default.createElement(
            'ol',
            { className: revealableListStyle },
            (0, _lodash.map)(this.props.options, function (option) {
              return _react2.default.createElement(_OverflowMenuItem2.default, {
                key: option.key,
                optionKey: option.key,
                text: option.text,
                onClick: _this2.handleClick
              });
            })
          )
        )
      );
    }
  }]);

  return OverflowMenu;
}(_react2.default.Component);

OverflowMenu.defaultProps = {
  options: [],
  openDirection: direction.RIGHT
};


OverflowMenu.displayName = 'Plasma@OverflowMenu';

exports.default = OverflowMenu;

/***/ })

/******/ });