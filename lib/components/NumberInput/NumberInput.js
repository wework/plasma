module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter,
        /******/
      });
      /******/
    }
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 71));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ 0: /***/ function(module, exports) {
      module.exports = require('react');

      /***/
    },

    /***/ 1: /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.getDataAttrs = undefined;

      var _lodash = __webpack_require__(3);

      var getDataAttrs = (exports.getDataAttrs = function getDataAttrs(data) {
        if (!data) return {};
        return (0, _lodash.mapKeys)(data, function(val, key) {
          return 'data-' + (0, _lodash.kebabCase)(key);
        });
      });

      /***/
    },

    /***/ 2: /***/ function(module, exports) {
      module.exports = require('classnames');

      /***/
    },

    /***/ 3: /***/ function(module, exports) {
      module.exports = require('lodash');

      /***/
    },

    /***/ 71: /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _extends =
        Object.assign ||
        function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };

      var _createClass = (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();

      var _lodash = __webpack_require__(3);

      var _react = __webpack_require__(0);

      var _react2 = _interopRequireDefault(_react);

      var _classnames = __webpack_require__(2);

      var _classnames2 = _interopRequireDefault(_classnames);

      var _style = __webpack_require__(72);

      var _style2 = _interopRequireDefault(_style);

      var _dataUtils = __webpack_require__(1);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof superClass
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
        });
        if (superClass)
          Object.setPrototypeOf
            ? Object.setPrototypeOf(subClass, superClass)
            : (subClass.__proto__ = superClass);
      }

      var NumberInput = (function(_React$Component) {
        _inherits(NumberInput, _React$Component);

        function NumberInput() {
          var _ref;

          var _temp, _this, _ret;

          _classCallCheck(this, NumberInput);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return (
            (_ret = ((_temp = ((_this = _possibleConstructorReturn(
              this,
              (_ref = NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call.apply(
                _ref,
                [this].concat(args)
              )
            )),
            _this)),
            (_this.handleIncrement = function() {
              var _this$props = _this.props,
                maxValue = _this$props.maxValue,
                value = _this$props.value,
                step = _this$props.step,
                onChange = _this$props.onChange;

              var prevValue = (0, _lodash.toNumber)(value);
              var nextValue = prevValue + step;
              if (maxValue >= nextValue) onChange((0, _lodash.toString)(nextValue));
            }),
            (_this.handleDecrement = function() {
              var _this$props2 = _this.props,
                minValue = _this$props2.minValue,
                value = _this$props2.value,
                step = _this$props2.step,
                onChange = _this$props2.onChange;

              var prevValue = (0, _lodash.toNumber)(value);
              var nextValue = prevValue - step;
              if (minValue <= nextValue) onChange((0, _lodash.toString)(nextValue));
            }),
            (_this.handleChange = function(e) {
              _this.props.onChange && _this.props.onChange(e.nativeEvent.target.value);
            }),
            (_this.handleBlur = function(e) {
              e.target.parentElement.classList.remove(_style2.default.wrapperFocused);
              _this.props.onBlur && _this.props.onBlur(e.nativeEvent.target.value);
            }),
            (_this.handleFocus = function(e) {
              e.target.parentElement.classList.add(_style2.default.wrapperFocused);
              _this.props.onFocus && _this.props.onFocus(e.nativeEvent.target.value);
            }),
            _temp)),
            _possibleConstructorReturn(_this, _ret)
          );
        }

        _createClass(NumberInput, [
          {
            key: 'render',
            value: function render() {
              var _cx;

              var _props = this.props,
                disabled = _props.disabled,
                error = _props.error,
                data = _props.data,
                placeholder = _props.placeholder,
                value = _props.value,
                step = _props.step,
                minValue = _props.minValue,
                maxValue = _props.maxValue;

              var wrapperStyle = (0, _classnames2.default)(
                _style2.default.wrapper,
                ((_cx = {}),
                _defineProperty(_cx, _style2.default.wrapperDisabled, disabled),
                _defineProperty(_cx, _style2.default.wrapperError, error),
                _cx)
              );

              var spinnerStyle = (0, _classnames2.default)(
                _style2.default.spinner,
                _defineProperty({}, _style2.default.spinnerDisabled, disabled)
              );

              var inputStyle = (0, _classnames2.default)(
                _style2.default.input,
                _defineProperty({}, _style2.default.inputDisabled, disabled)
              );

              var actionStyle = (0, _classnames2.default)(
                _style2.default.action,
                _defineProperty({}, _style2.default.buttonDisabled, disabled)
              );

              return _react2.default.createElement(
                'div',
                _extends({}, (0, _dataUtils.getDataAttrs)(data), { className: wrapperStyle }),
                _react2.default.createElement('input', {
                  type: 'number',
                  placeholder: placeholder,
                  className: inputStyle,
                  disabled: disabled,
                  value: value,
                  step: step,
                  min: minValue,
                  max: maxValue,
                  onChange: this.handleChange,
                  onBlur: this.handleBlur,
                  onFocus: this.handleFocus,
                }),
                _react2.default.createElement(
                  'div',
                  { className: spinnerStyle },
                  _react2.default.createElement(
                    'div',
                    { className: actionStyle, onClick: !disabled && this.handleIncrement },
                    '+'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: actionStyle, onClick: !disabled && this.handleDecrement },
                    '-'
                  )
                )
              );
            },
          },
        ]);

        return NumberInput;
      })(_react2.default.Component);

      NumberInput.defaultProps = {
        value: '',
        placeholder: '',
        step: 1,
        maxValue: Number.MAX_SAFE_INTEGER,
        minValue: Number.MIN_SAFE_INTEGER,
        onChange: function onChange() {},
      };

      NumberInput.displayName = 'Plasma@NumberInput';

      exports.default = NumberInput;

      /***/
    },

    /***/ 72: /***/ function(module, exports) {
      // removed by extract-text-webpack-plugin
      module.exports = {
        input: 'src-components-NumberInput-input__2iPjS',
        clearfix: 'src-components-NumberInput-clearfix__IdSxH',
        buttonDisabled: 'src-components-NumberInput-buttonDisabled__1mL2M',
        wrapperFocused: 'src-components-NumberInput-wrapperFocused__rtCoG',
        wrapperDisabled: 'src-components-NumberInput-wrapperDisabled__29kyT',
        wrapperError: 'src-components-NumberInput-wrapperError__3JQdd',
        inputDisabled: 'src-components-NumberInput-inputDisabled__3f-wf',
        wrapper: 'src-components-NumberInput-wrapper__1oZGU',
        spinner: 'src-components-NumberInput-spinner__276Gd',
        action: 'src-components-NumberInput-action__1zQWq',
        spinnerDisabled: 'src-components-NumberInput-spinnerDisabled__3ZmmA',
      };

      /***/
    },

    /******/
  }
);
