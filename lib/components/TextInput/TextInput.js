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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 82));
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

    /***/ 82: /***/ function(module, exports, __webpack_require__) {
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

      var _react = __webpack_require__(0);

      var _react2 = _interopRequireDefault(_react);

      var _classnames = __webpack_require__(2);

      var _classnames2 = _interopRequireDefault(_classnames);

      var _dataUtils = __webpack_require__(1);

      var _style = __webpack_require__(83);

      var _style2 = _interopRequireDefault(_style);

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

      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0) continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
          target[i] = obj[i];
        }
        return target;
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

      var TextInput = (function(_Component) {
        _inherits(TextInput, _Component);

        function TextInput() {
          _classCallCheck(this, TextInput);

          return _possibleConstructorReturn(
            this,
            (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments)
          );
        }

        _createClass(TextInput, [
          {
            key: 'render',
            value: function render() {
              var _cx;

              var _props = this.props,
                className = _props.className,
                disabled = _props.disabled,
                error = _props.error,
                data = _props.data,
                prefix = _props.prefix,
                suffix = _props.suffix,
                type = _props.type,
                rest = _objectWithoutProperties(_props, [
                  'className',
                  'disabled',
                  'error',
                  'data',
                  'prefix',
                  'suffix',
                  'type',
                ]);

              var inputType = type || 'text';

              var classes = (0, _classnames2.default)(
                _style2.default.wrapper,
                className,
                ((_cx = {}),
                _defineProperty(_cx, _style2.default.wrapperDisabled, disabled),
                _defineProperty(_cx, _style2.default.wrapperError, error),
                _cx)
              );

              return _react2.default.createElement(
                'div',
                _extends({}, (0, _dataUtils.getDataAttrs)(data), { className: classes }),
                prefix &&
                  _react2.default.createElement(
                    'div',
                    { className: _style2.default.prefix },
                    prefix
                  ),
                _react2.default.createElement(
                  'input',
                  _extends(
                    { className: _style2.default.input, disabled: disabled, type: inputType },
                    rest
                  )
                ),
                suffix &&
                  _react2.default.createElement(
                    'div',
                    { className: _style2.default.suffix },
                    suffix
                  )
              );
            },
          },
        ]);

        return TextInput;
      })(_react.Component);

      TextInput.defaultProps = {
        placeholder: 'Type something...',
      };

      TextInput.displayName = 'Plasma@TextInput';

      exports.default = TextInput;

      /***/
    },

    /***/ 83: /***/ function(module, exports) {
      // removed by extract-text-webpack-plugin
      module.exports = {
        wrapper: 'src-components-TextInput-wrapper__lq6pB',
        input: 'src-components-TextInput-input__2XPTx',
        clearfix: 'src-components-TextInput-clearfix__2exBy',
        wrapperDisabled: 'src-components-TextInput-wrapperDisabled__30qE3',
        wrapperError: 'src-components-TextInput-wrapperError__2D-Kv',
        prefix: 'src-components-TextInput-prefix__CMqS_',
        suffix: 'src-components-TextInput-suffix__2naE6',
      };

      /***/
    },

    /******/
  }
);
