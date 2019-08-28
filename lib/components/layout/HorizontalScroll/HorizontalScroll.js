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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 105));
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

    /***/ 105: /***/ function(module, exports, __webpack_require__) {
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

      var _dataUtils = __webpack_require__(1);

      var _style = __webpack_require__(106);

      var _style2 = _interopRequireDefault(_style);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
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

      var HorizontalScroll = (function(_React$Component) {
        _inherits(HorizontalScroll, _React$Component);

        function HorizontalScroll() {
          var _ref;

          var _temp, _this, _ret;

          _classCallCheck(this, HorizontalScroll);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return (
            (_ret = ((_temp = ((_this = _possibleConstructorReturn(
              this,
              (_ref =
                HorizontalScroll.__proto__ || Object.getPrototypeOf(HorizontalScroll)).call.apply(
                _ref,
                [this].concat(args)
              )
            )),
            _this)),
            (_this.handleScroll = function(e) {
              _this.props.onScroll(e);
            }),
            _temp)),
            _possibleConstructorReturn(_this, _ret)
          );
        }

        _createClass(HorizontalScroll, [
          {
            key: 'componentDidMount',
            value: function componentDidMount() {
              if (this.wrapper) {
                this.wrapper.addEventListener('scroll', this.handleScroll);
              }
            },
          },
          {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
              if (this.wrapper) {
                this.wrapper.removeEventListener('scroll', this.handleScroll);
              }
            },
          },
          {
            key: 'render',
            value: function render() {
              var _this2 = this;

              return _react2.default.createElement(
                'div',
                _extends({}, (0, _dataUtils.getDataAttrs)(this.props.data), {
                  style: this.props.style,
                  className: _style2.default.wrapper,
                  ref: function ref(c) {
                    _this2.wrapper = c;
                  },
                }),
                _react2.default.createElement(
                  'div',
                  { className: _style2.default.content },
                  this.props.children
                )
              );
            },
          },
        ]);

        return HorizontalScroll;
      })(_react2.default.Component);

      HorizontalScroll.defaultProps = {
        children: null,
        onScroll: function onScroll() {},
      };

      HorizontalScroll.displayName = 'Plasma@HorizontalScroll';

      exports.default = HorizontalScroll;

      /***/
    },

    /***/ 106: /***/ function(module, exports) {
      // removed by extract-text-webpack-plugin
      module.exports = {
        clearfix: 'src-components-layout-HorizontalScroll-clearfix__3PMJ5',
        wrapper: 'src-components-layout-HorizontalScroll-wrapper__2d7gj',
        content: 'src-components-layout-HorizontalScroll-content__4IZzR',
      };

      /***/
    },

    /***/ 3: /***/ function(module, exports) {
      module.exports = require('lodash');

      /***/
    },

    /******/
  }
);
