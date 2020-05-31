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
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
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

/***/ 90:
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

var _lodash = __webpack_require__(3);

var _dataUtils = __webpack_require__(1);

var _style = __webpack_require__(91);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (tab, index) {
      _this.props.onChange && _this.props.onChange(tab.label, index);
    }, _this.onKeyDown = function (event, tab, index) {
      if (event.keyCode === 13 /* enter */) {
          _this.onClick(tab, index);
        }
    }, _this.getTabClassNames = function (tab, index) {
      var _cn;

      var baseTabClass = _this.getTabStyle();
      return (0, _classnames2.default)(baseTabClass, (_cn = {}, _defineProperty(_cn, _style2.default.active, _this.props.selectedIndex === index || _this.props.selectedLabel === tab.label), _defineProperty(_cn, _style2.default.first, index === 0), _defineProperty(_cn, _style2.default.last, index === _this.props.items.length - 1), _cn));
    }, _this.renderTab = function (tab, index) {
      return _react2.default.createElement(
        'li',
        {
          role: 'tab',
          onClick: function onClick() {
            return _this.onClick(tab, index);
          },
          onKeyDown: function onKeyDown(event) {
            return _this.onKeyDown(event, tab, index);
          },
          className: _this.getTabClassNames(tab, index),
          key: index,
          tabIndex: '0'
        },
        tab.title
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tabs, [{
    key: 'getTabsStyle',
    value: function getTabsStyle() {
      var _props = this.props,
          vertical = _props.vertical,
          plain = _props.plain;

      if (vertical) return _style2.default.verticalTabs;
      if (plain) return _style2.default.plainTabs;
      return _style2.default.tabs;
    }
  }, {
    key: 'getTabStyle',
    value: function getTabStyle() {
      var _props2 = this.props,
          vertical = _props2.vertical,
          plain = _props2.plain;

      if (vertical) return _style2.default.verticalTab;
      if (plain) return _style2.default.plainTab;
      return _style2.default.tab;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        _extends({}, (0, _dataUtils.getDataAttrs)(this.props.data), { className: this.getTabsStyle(), role: 'tablist' }),
        (0, _lodash.map)(this.props.items, this.renderTab)
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.defaultProps = {
  items: [],
  onChange: function onChange() {}
};


Tabs.displayName = 'Plasma@Tabs';

exports.default = Tabs;

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tab":"src-components-Tabs-tab__37Knu","verticalTab":"src-components-Tabs-verticalTab__h_yi_","plainTab":"src-components-Tabs-plainTab__G6Qpc","clearfix":"src-components-Tabs-clearfix__2SWt5","tabs":"src-components-Tabs-tabs__N3ued","verticalTabs":"src-components-Tabs-verticalTabs__2pXe3","first":"src-components-Tabs-first__2PAAz","last":"src-components-Tabs-last__2MTg7","active":"src-components-Tabs-active__2XgDr","plainTabs":"src-components-Tabs-plainTabs__1lZ4a"};

/***/ })

/******/ });