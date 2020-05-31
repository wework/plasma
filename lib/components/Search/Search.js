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
/******/ 	return __webpack_require__(__webpack_require__.s = 88);
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

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dataUtils = __webpack_require__(1);

var _style = __webpack_require__(89);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.onChange = function (event) {
      var onChange = _this.props.onChange;


      _this.setState({ text: event.currentTarget.value });

      onChange && onChange(event);
    };

    _this.onClear = function (event) {
      var onClear = _this.props.onClear;


      _this.setState({ text: '' });

      if (onClear) {
        onClear(event);
      }
    };

    _this.state = {
      text: ''
    };
    return _this;
  }

  _createClass(Search, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value;


      if (value !== this.props.value) {
        this.setState({ text: value });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          clearable = _props.clearable,
          clearIconUrl = _props.clearIconUrl,
          disabled = _props.disabled,
          iconUrl = _props.iconUrl,
          instructionText = _props.instructionText,
          placeholder = _props.placeholder,
          autoFocus = _props.autoFocus;


      return _react2.default.createElement(
        'div',
        _extends({}, (0, _dataUtils.getDataAttrs)(this.props.data), { className: _style2.default.container }),
        _react2.default.createElement(
          'div',
          { className: _style2.default.inputWrapper },
          _react2.default.createElement(
            'span',
            { className: _style2.default.searchIconContainer },
            _react2.default.createElement('img', { src: iconUrl, role: 'presentation' })
          ),
          _react2.default.createElement('input', {
            className: _style2.default.input,
            disabled: disabled,
            onChange: this.onChange,
            onKeyDown: this.props.onKeyDown,
            placeholder: placeholder,
            type: 'text',
            value: this.state.text,
            autoFocus: autoFocus
          }),
          clearable && clearIconUrl && this.state.text !== '' && _react2.default.createElement('img', {
            className: _style2.default.clearableIcon,
            onClick: this.onClear,
            src: clearIconUrl,
            role: 'presentation'
          })
        ),
        instructionText && _react2.default.createElement(
          'div',
          { className: _style2.default.instructionText },
          instructionText
        )
      );
    }
  }]);

  return Search;
}(_react.Component);

Search.defaultProps = {
  placeholder: 'Search...',
  autoFocus: false
};


Search.displayName = 'Plasma@Search';

exports.default = Search;

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"clearfix":"src-components-Search-clearfix__3Y1K2","container":"src-components-Search-container__2fbWJ","inputWrapper":"src-components-Search-inputWrapper__y-uAE","searchIconContainer":"src-components-Search-searchIconContainer__1zw0K","input":"src-components-Search-input__61AAH","instructionText":"src-components-Search-instructionText__F2rEa","clearableIcon":"src-components-Search-clearableIcon__1txF9"};

/***/ })

/******/ });