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
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapper":"src-components-SideNavBar-wrapper__3Y5Ng","clearfix":"src-components-SideNavBar-clearfix__3N_SL","itemWrapper":"src-components-SideNavBar-itemWrapper__30n4q","icon":"src-components-SideNavBar-icon__2A6Sa","darkBg":"src-components-SideNavBar-darkBg__1aKNM","selected":"src-components-SideNavBar-selected__3QTh2"};

/***/ }),

/***/ 87:
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

var _oldStyle = __webpack_require__(24);

var _oldStyle2 = _interopRequireDefault(_oldStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideNavBarItem = function (_Component) {
  _inherits(SideNavBarItem, _Component);

  function SideNavBarItem() {
    _classCallCheck(this, SideNavBarItem);

    return _possibleConstructorReturn(this, (SideNavBarItem.__proto__ || Object.getPrototypeOf(SideNavBarItem)).apply(this, arguments));
  }

  _createClass(SideNavBarItem, [{
    key: 'renderIconAndLabel',
    value: function renderIconAndLabel() {
      var _props = this.props,
          icon = _props.icon,
          iconSize = _props.iconSize,
          iconStyle = _props.iconStyle,
          label = _props.label;


      var renderIcon = icon && iconSize && _react2.default.createElement('img', {
        className: _oldStyle2.default.icon,
        style: _extends({
          width: iconSize,
          height: iconSize
        }, iconStyle),
        src: icon,
        alt: label
      });

      return _react2.default.createElement(
        'div',
        null,
        renderIcon,
        _react2.default.createElement(
          'div',
          { className: _oldStyle2.default.label },
          label
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _cn;

      var _props2 = this.props,
          children = _props2.children,
          darkBg = _props2.darkBg,
          onClick = _props2.onClick,
          selected = _props2.selected;


      var wrapperClasses = (0, _classnames2.default)(_oldStyle2.default.itemWrapper, (_cn = {}, _defineProperty(_cn, _oldStyle2.default.darkBg, darkBg), _defineProperty(_cn, _oldStyle2.default.selected, selected), _cn));

      return _react2.default.createElement(
        'div',
        { className: wrapperClasses, onClick: onClick },
        children || this.renderIconAndLabel()
      );
    }
  }]);

  return SideNavBarItem;
}(_react.Component);

SideNavBarItem.defaultProps = {
  label: 'Label',
  iconSize: 24,
  selected: false
};


SideNavBarItem.displayName = 'Plasma@SideNavBarItem';

exports.default = SideNavBarItem;

/***/ })

/******/ });