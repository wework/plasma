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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 9 */
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

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header1":"src-components-Header-header1__1s1ty","header2":"src-components-Header-header2__2fFqm","header3":"src-components-Header-header3__2PtsS","header4":"src-components-Header-header4__11ivh","header5":"src-components-Header-header5__2EQzv","header6":"src-components-Header-header6__NYIWL","clearfix":"src-components-Header-clearfix__2NdLd","invert":"src-components-Header-invert__rioxF","rule":"src-components-Header-rule__1ZAN8","noMargin":"src-components-Header-noMargin__3i6cr"};

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderColors = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dataUtils = __webpack_require__(1);

var _style = __webpack_require__(27);

var _style2 = _interopRequireDefault(_style);

var _Header = __webpack_require__(9);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cardTypes = {
  REGULAR: 'regular',
  CONDENSED: 'condensed'
};
var borderTypes = { DASHED: 'dashed' };
var borderColors = exports.borderColors = { RED: 'red' };

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

    _this.state = {
      isMounted: false
    };
    return _this;
  }

  /**
   * TODO: remove the use of react-dom here as it is not needed for refs
   */


  _createClass(Card, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      /* eslint-disable */
      if (this.props.expandedComponent) {
        var defaultEl = _reactDom2.default.findDOMNode(this.default); //$FlowFixMe
        var _defaultHeight = defaultEl.offsetHeight;
        var expandedEl = _reactDom2.default.findDOMNode(this.expanded); //$FlowFixMe
        var _expandedHeight = expandedEl.offsetHeight;
        this.setState({ defaultHeight: _defaultHeight, expandedHeight: _expandedHeight });
      }
      this.setState({ isMounted: true });
      /* eslint-enable */
    }
  }, {
    key: 'render',
    value: function render() {
      var _cx,
          _this2 = this;

      var _props = this.props,
          title = _props.title,
          actions = _props.actions,
          children = _props.children,
          expandedComponent = _props.expandedComponent,
          onClick = _props.onClick,
          data = _props.data,
          isExpanded = _props.isExpanded,
          borderType = _props.borderType,
          borderColor = _props.borderColor,
          type = _props.type,
          minWidth = _props.minWidth;


      var cardStyle = (0, _classnames2.default)(_style2.default.card, (_cx = {}, _defineProperty(_cx, _style2.default.condensed, type === cardTypes.CONDENSED), _defineProperty(_cx, _style2.default.borderDashed, borderType === borderTypes.DASHED), _defineProperty(_cx, _style2.default.borderRed, borderColor === borderColors.RED), _defineProperty(_cx, _style2.default.isExpanded, isExpanded), _cx));

      var defaultHeight = 'auto';
      var expandedHeight = 'auto';

      if (this.state.isMounted) {
        if (this.props.isExpanded) {
          defaultHeight = 0;
          // eslint-disable-next-line prefer-destructuring
          expandedHeight = this.state.expandedHeight;
        } else {
          // eslint-disable-next-line prefer-destructuring
          defaultHeight = this.state.defaultHeight;
          expandedHeight = 0;
        }
      }

      return _react2.default.createElement(
        'div',
        _extends({
          ref: function ref(c) {
            _this2.outer = c;
          },
          className: cardStyle,
          style: { minWidth: minWidth },
          onClick: onClick
        }, (0, _dataUtils.getDataAttrs)(data)),
        _react2.default.createElement(
          'div',
          { className: _style2.default.inner },
          (title || actions) && _react2.default.createElement(
            'div',
            { className: _style2.default.top },
            title && _react2.default.createElement(
              _Header2.default,
              { h4: true },
              title
            ),
            actions && _react2.default.createElement(
              'div',
              { className: _style2.default.cardActions },
              actions.map(function (action) {
                return action;
              })
            )
          ),
          _react2.default.createElement(
            'div',
            {
              ref: function ref(c) {
                _this2.default = c;
              },
              className: _style2.default.default,
              style: { maxHeight: defaultHeight }
            },
            children
          ),
          expandedComponent && _react2.default.createElement(
            'div',
            {
              ref: function ref(c) {
                _this2.expanded = c;
              },
              className: _style2.default.expanded,
              style: { maxHeight: expandedHeight }
            },
            expandedComponent
          )
        )
      );
    }
  }]);

  return Card;
}(_react2.default.Component);

Card.displayName = 'Plasma@Card';

exports.default = Card;

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"clearfix":"src-components-Card-clearfix__2PsB8","card":"src-components-Card-card__2Sgvf","default":"src-components-Card-default__2jKy1","expanded":"src-components-Card-expanded__1u6dy","isExpanded":"src-components-Card-isExpanded__2Xmw5","condensed":"src-components-Card-condensed__1Qlkk","borderDashed":"src-components-Card-borderDashed__18gdz","borderRed":"src-components-Card-borderRed__2iuXV","top":"src-components-Card-top__3CYbl","cardActions":"src-components-Card-cardActions__2cMsF"};

/***/ })
/******/ ]);