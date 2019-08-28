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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 109));
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

    /***/ 109: /***/ function(module, exports, __webpack_require__) {
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

      var _style = __webpack_require__(110);

      var _style2 = _interopRequireDefault(_style);

      var _dataUtils = __webpack_require__(1);

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

      /**
       * The fixed left page is great.
       */

      /* eslint-disable */
      var getOffsetTop = function getOffsetTop(elem) {
        var offsetTop = 0;
        do {
          if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
          }
        } while ((elem = elem.offsetParent));
        return offsetTop;
      };

      /* eslint-enable */
      var FixedLeft = (function(_React$Component) {
        _inherits(FixedLeft, _React$Component);

        function FixedLeft() {
          _classCallCheck(this, FixedLeft);

          var _this = _possibleConstructorReturn(
            this,
            (FixedLeft.__proto__ || Object.getPrototypeOf(FixedLeft)).call(this)
          );

          _this.handleScroll = function() {
            if (_this.props.stickAt) {
              var offsetViewport = _this.fixed.offsetTop;
              var offsetDoc = getOffsetTop(_this.fixed);
              var ty = (0, _lodash.clamp)(
                offsetDoc - offsetViewport,
                0,
                _this.fixedViewportOffsetOrigin - (_this.props.stickAt || 0)
              );
              _this.fixed.style.transform = 'translateY(' + -ty + ')';
            }
          };

          _this.state = {
            fixedWidth: 0,
            translateY: 0,
          };
          return _this;
        }

        _createClass(FixedLeft, [
          {
            key: 'componentDidMount',
            value: function componentDidMount() {
              if (this.props.stickAt) {
                document.addEventListener('scroll', this.handleScroll);
              }
              // eslint-disable-next-line
              this.setState({ fixedWidth: this.fixed.offsetWidth });
            },
          },
          {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
              document.removeEventListener('scroll', this.handleScroll);
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
                    style: _extends({}, this.props.fixedStyle),
                    ref: function ref(c) {
                      if (c) {
                        if (!_this2.fixedViewportOffsetOrigin) {
                          _this2.fixedViewportOffsetOrigin = c.offsetTop;
                        }
                        _this2.fixed = c;
                      }
                    },
                  },
                  children[0]
                ),
                _react2.default.createElement(
                  'div',
                  { className: _style2.default.contentWrapper },
                  _react2.default.createElement('div', {
                    className: _style2.default.stub,
                    style: { width: this.state.fixedWidth, minWidth: this.state.fixedWidth },
                  }),
                  _react2.default.createElement(
                    'div',
                    {
                      className: _style2.default.content,
                      style: _extends({}, this.props.contentStyle),
                    },
                    children[1]
                  )
                )
              );
            },
          },
        ]);

        return FixedLeft;
      })(_react2.default.Component);

      FixedLeft.defaultProps = {
        children: [null, null],
        stickAt: 0,
      };

      FixedLeft.displayName = '!Plasma@FixedLeft';

      exports.default = FixedLeft;

      /***/
    },

    /***/ 110: /***/ function(module, exports) {
      // removed by extract-text-webpack-plugin
      module.exports = {
        clearfix: 'src-components-layout-FixedLeft-clearfix__3998L',
        wrapper: 'src-components-layout-FixedLeft-wrapper__156Sv',
        fixedWrapper: 'src-components-layout-FixedLeft-fixedWrapper__2wyeB',
        contentWrapper: 'src-components-layout-FixedLeft-contentWrapper__3BCtj',
        stub: 'src-components-layout-FixedLeft-stub__lvre9',
        content: 'src-components-layout-FixedLeft-content__1TpN6',
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
