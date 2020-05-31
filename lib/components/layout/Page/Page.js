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
/******/ 	return __webpack_require__(__webpack_require__.s = 100);
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

/***/ 10:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header1":"src-components-Header-header1__1s1ty","header2":"src-components-Header-header2__2fFqm","header3":"src-components-Header-header3__2PtsS","header4":"src-components-Header-header4__11ivh","header5":"src-components-Header-header5__2EQzv","header6":"src-components-Header-header6__NYIWL","clearfix":"src-components-Header-clearfix__2NdLd","invert":"src-components-Header-invert__rioxF","rule":"src-components-Header-rule__1ZAN8","noMargin":"src-components-Header-noMargin__3i6cr"};

/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(9);

var _Header2 = _interopRequireDefault(_Header);

var _dataUtils = __webpack_require__(1);

var _style = __webpack_require__(101);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          children = _props.children,
          actions = _props.actions,
          breadcrumb = _props.breadcrumb;


      return _react2.default.createElement(
        'div',
        _extends({ className: _style2.default.wrapper }, (0, _dataUtils.getDataAttrs)(this.props.data)),
        _react2.default.createElement(
          'div',
          { className: _style2.default.content },
          breadcrumb && _react2.default.createElement(
            'div',
            { className: _style2.default.breadcrumb },
            breadcrumb
          ),
          (title || actions) && _react2.default.createElement(
            'div',
            { className: _style2.default.top },
            title && _react2.default.createElement(
              _Header2.default,
              { h2: true, noMargin: true },
              title
            ),
            actions && _react2.default.createElement(
              'div',
              { className: _style2.default.pageActions },
              actions.map(function (action) {
                return action;
              })
            )
          ),
          children
        )
      );
    }
  }]);

  return Page;
}(_react2.default.Component);

Page.displayName = 'Plasma@Page';

exports.default = Page;

/***/ }),

/***/ 101:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapper":"src-components-layout-Page-wrapper__37dDb","clearfix":"src-components-layout-Page-clearfix__IZwQW","top":"src-components-layout-Page-top__KQ1sr","pageActions":"src-components-layout-Page-pageActions__3eQcn"};

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(10);

var _style2 = _interopRequireDefault(_style);

var _dataUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _cx;

      var headerStyle = (0, _classnames2.default)(_style2.default.header, (_cx = {}, _defineProperty(_cx, _style2.default.header1, this.props.h1), _defineProperty(_cx, _style2.default.header2, this.props.h2), _defineProperty(_cx, _style2.default.header3, this.props.h3), _defineProperty(_cx, _style2.default.header4, this.props.h4), _defineProperty(_cx, _style2.default.header5, this.props.h5), _defineProperty(_cx, _style2.default.header6, this.props.h6), _defineProperty(_cx, _style2.default.invert, this.props.invert), _defineProperty(_cx, _style2.default.noMargin, this.props.noMargin), _cx));

      return _react2.default.createElement(
        'div',
        _extends({}, (0, _dataUtils.getDataAttrs)(this.props.data), { className: [headerStyle] }),
        _react2.default.createElement(
          'div',
          { className: _style2.default.content },
          this.props.text || this.props.children
        ),
        this.props.underline && _react2.default.createElement('div', { className: _style2.default.rule })
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

Header.displayName = 'Plasma@Header';

exports.default = Header;

/***/ })

/******/ });