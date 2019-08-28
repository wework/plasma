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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 113));
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

    /***/ 113: /***/ function(module, exports, __webpack_require__) {
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

      var _style = __webpack_require__(114);

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

      var FixedTop = (function(_React$Component) {
        _inherits(FixedTop, _React$Component);

        function FixedTop() {
          _classCallCheck(this, FixedTop);

          var _this = _possibleConstructorReturn(
            this,
            (FixedTop.__proto__ || Object.getPrototypeOf(FixedTop)).call(this)
          );

          _this.state = {
            fixedHeight: 0,
          };
          return _this;
        }

        _createClass(FixedTop, [
          {
            key: 'componentDidMount',
            value: function componentDidMount() {
              // eslint-disable-next-line
              this.setState({ fixedHeight: this.fixed.offsetHeight });
            },
          },
          {
            key: 'render',
            value: function render() {
              var _this2 = this;

              var children = _react2.default.Children.toArray(this.props.children);

              return _react2.default.createElement(
                'div',
                _extends({}, (0, _dataUtils.getDataAttrs)(this.props.data), {
                  className: _style2.default.wrapper,
                }),
                _react2.default.createElement(
                  'div',
                  {
                    className: _style2.default.fixedWrapper,
                    ref: function ref(c) {
                      return (_this2.fixed = c);
                    },
                  },
                  children[0]
                ),
                _react2.default.createElement(
                  'div',
                  { className: _style2.default.contentWrapper },
                  _react2.default.createElement('div', {
                    className: _style2.default.stub,
                    style: { height: this.state.fixedHeight, minHeight: this.state.fixedHeight },
                  }),
                  _react2.default.createElement(
                    'div',
                    {
                      className: _style2.default.content,
                      style: { backgroundColor: this.props.backgroundColor },
                    },
                    children[1]
                  )
                )
              );
            },
          },
        ]);

        return FixedTop;
      })(_react2.default.Component);

      FixedTop.defaultProps = {
        children: ['', ''],
        backgroundColor: 'transparent',
      };

      FixedTop.defaultProps = {
        children: ['', ''],
        backgroundColor: 'transparent',
      };

      FixedTop.displayName = '!Plasma@FixedTop';

      exports.default = FixedTop;

      /***/
    },

    /***/ 114: /***/ function(module, exports) {
      // removed by extract-text-webpack-plugin
      module.exports = {
        clearfix: 'src-components-layout-FixedTop-clearfix__3Zz81',
        wrapper: 'src-components-layout-FixedTop-wrapper__3sgZ2',
        fixedWrapper: 'src-components-layout-FixedTop-fixedWrapper__1FfKy',
        contentWrapper: 'src-components-layout-FixedTop-contentWrapper__3f-Y5',
        stub: 'src-components-layout-FixedTop-stub__zGO-K',
        content: 'src-components-layout-FixedTop-content__3zLOT',
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
