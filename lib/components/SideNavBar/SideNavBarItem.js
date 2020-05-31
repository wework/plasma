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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _style = __webpack_require__(6);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideNavBarItem = function (_Component) {
  _inherits(SideNavBarItem, _Component);

  function SideNavBarItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SideNavBarItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SideNavBarItem.__proto__ || Object.getPrototypeOf(SideNavBarItem)).call.apply(_ref, [this].concat(args))), _this), _this._onClick = function () {
      _this.props.onClick(_this.props.id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SideNavBarItem, [{
    key: 'renderIconAndLabel',
    value: function renderIconAndLabel() {
      var label = this.props.label;


      return _react2.default.createElement(
        'div',
        { className: _style2.default.iconAndLabelContainer },
        _react2.default.createElement(
          'div',
          { className: _style2.default.label },
          label
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _cn;

      var _props = this.props,
          darkBg = _props.darkBg,
          selected = _props.selected,
          linkComponent = _props.linkComponent,
          tagText = _props.tagText;


      var wrapperClasses = (0, _classnames2.default)(_style2.default.itemWrapper, (_cn = {}, _defineProperty(_cn, _style2.default.darkBg, darkBg), _defineProperty(_cn, _style2.default.selected, selected), _cn));

      var comp = void 0;

      if (linkComponent) {
        comp = _react2.default.createElement(
          'div',
          { className: wrapperClasses },
          linkComponent,
          tagText && _react2.default.createElement(
            'div',
            { className: _style2.default.tag },
            tagText
          )
        );
      } else {
        comp = _react2.default.createElement(
          'div',
          { className: wrapperClasses, onClick: this._onClick },
          this.renderIconAndLabel(),
          tagText && _react2.default.createElement(
            'div',
            { className: _style2.default.tag },
            tagText
          )
        );
      }

      return comp;
    }
  }]);

  return SideNavBarItem;
}(_react.Component);

SideNavBarItem.defaultProps = {
  label: 'Label',
  selected: false,
  tagText: null
};


SideNavBarItem.displayName = 'Plasma@SideNavBarItem';

exports.default = SideNavBarItem;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"clearfix":"src-components-SideNavBar-clearfix__2tgtU","wrapper":"src-components-SideNavBar-wrapper__1Pz2L","groupWrapper":"src-components-SideNavBar-groupWrapper__vtkUJ","top":"src-components-SideNavBar-top__1PMat","input":"src-components-SideNavBar-input__3y-7h","fullWidth":"src-components-SideNavBar-fullWidth__2_Voa","sidebarContent":"src-components-SideNavBar-sidebarContent__31tpS","groupSubItems":"src-components-SideNavBar-groupSubItems__g3ydh","itemWrapper":"src-components-SideNavBar-itemWrapper__3ALdX","selected":"src-components-SideNavBar-selected__LwvJi","iconAndLabelContainer":"src-components-SideNavBar-iconAndLabelContainer__23y53","iconWrapper":"src-components-SideNavBar-iconWrapper__Ozjr4","topText":"src-components-SideNavBar-topText__3pEkL","groupLabelWrapper":"src-components-SideNavBar-groupLabelWrapper__1wdlJ","tag":"src-components-SideNavBar-tag__3qOGh","darkBg":"src-components-SideNavBar-darkBg___XzfH"};

/***/ })

/******/ });