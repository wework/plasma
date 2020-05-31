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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"clearfix":"src-components-SideNavBar-clearfix__2tgtU","wrapper":"src-components-SideNavBar-wrapper__1Pz2L","groupWrapper":"src-components-SideNavBar-groupWrapper__vtkUJ","top":"src-components-SideNavBar-top__1PMat","input":"src-components-SideNavBar-input__3y-7h","fullWidth":"src-components-SideNavBar-fullWidth__2_Voa","sidebarContent":"src-components-SideNavBar-sidebarContent__31tpS","groupSubItems":"src-components-SideNavBar-groupSubItems__g3ydh","itemWrapper":"src-components-SideNavBar-itemWrapper__3ALdX","selected":"src-components-SideNavBar-selected__LwvJi","iconAndLabelContainer":"src-components-SideNavBar-iconAndLabelContainer__23y53","iconWrapper":"src-components-SideNavBar-iconWrapper__Ozjr4","topText":"src-components-SideNavBar-topText__3pEkL","groupLabelWrapper":"src-components-SideNavBar-groupLabelWrapper__1wdlJ","tag":"src-components-SideNavBar-tag__3qOGh","darkBg":"src-components-SideNavBar-darkBg___XzfH"};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"clearfix":"src-components-Icon-clearfix__3zhE-","wrapper":"src-components-Icon-wrapper__1y5Fo"};

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
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

var _Icon = __webpack_require__(5);

var _Icon2 = _interopRequireDefault(_Icon);

var _style = __webpack_require__(6);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideBarNavTop = function (_React$Component) {
  _inherits(SideBarNavTop, _React$Component);

  function SideBarNavTop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SideBarNavTop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SideBarNavTop.__proto__ || Object.getPrototypeOf(SideBarNavTop)).call.apply(_ref, [this].concat(args))), _this), _this.input = _this.props.forwardedRef || _react2.default.createRef(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  // $FlowFixMe (https://github.com/facebook/flow/issues/6103)


  _createClass(SideBarNavTop, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.editing && !prevProps.editing) {
        this.input.current && this.input.current.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          onClick = _props.onClick,
          icon = _props.icon,
          editing = _props.editing,
          placeholder = _props.placeholder,
          value = _props.value,
          onChange = _props.onChange,
          onBlur = _props.onBlur,
          fullWidth = _props.fullWidth,
          className = _props.className;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(className, _style2.default.top, _defineProperty({}, _style2.default.fullWidth, fullWidth)), onClick: onClick },
        _react2.default.createElement(
          'div',
          { className: _style2.default.iconAndLabelContainer },
          _react2.default.createElement(
            'div',
            { className: _style2.default.iconWrapper },
            _react2.default.createElement(_Icon2.default, { color: '#fff', icon: icon })
          ),
          _react2.default.createElement(
            'div',
            { className: _style2.default.topText },
            editing ? _react2.default.createElement('input', {
              className: _style2.default.input,
              value: value
              // $FlowFixMe (https://github.com/facebook/flow/issues/6103)
              , ref: this.input,
              type: 'text',
              onChange: onChange,
              onBlur: onBlur,
              placeholder: placeholder
            }) : label
          )
        )
      );
    }
  }]);

  return SideBarNavTop;
}(_react2.default.Component);

// $FlowFixMe


exports.default = _react2.default.forwardRef(function (props, ref) {
  return _react2.default.createElement(SideBarNavTop, _extends({}, props, { forwardedRef: ref }));
});

/***/ })
/******/ ]);