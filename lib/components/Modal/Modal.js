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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 69));
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

    /***/ 10: /***/ function(module, exports) {
      // removed by extract-text-webpack-plugin
      module.exports = {
        header1: 'src-components-Header-header1__1s1ty',
        header2: 'src-components-Header-header2__2fFqm',
        header3: 'src-components-Header-header3__2PtsS',
        header4: 'src-components-Header-header4__11ivh',
        header5: 'src-components-Header-header5__2EQzv',
        header6: 'src-components-Header-header6__NYIWL',
        clearfix: 'src-components-Header-clearfix__2NdLd',
        invert: 'src-components-Header-invert__rioxF',
        rule: 'src-components-Header-rule__1ZAN8',
        noMargin: 'src-components-Header-noMargin__3i6cr',
      };

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

    /***/ 69: /***/ function(module, exports, __webpack_require__) {
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

      var _style = __webpack_require__(70);

      var _style2 = _interopRequireDefault(_style);

      var _Header = __webpack_require__(9);

      var _Header2 = _interopRequireDefault(_Header);

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

      var Modal = (function(_React$Component) {
        _inherits(Modal, _React$Component);

        function Modal() {
          _classCallCheck(this, Modal);

          return _possibleConstructorReturn(
            this,
            (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments)
          );
        }

        _createClass(Modal, [
          {
            key: 'render',
            value: function render() {
              var _props = this.props,
                title = _props.title,
                actions = _props.actions,
                data = _props.data,
                children = _props.children,
                onDismiss = _props.onDismiss,
                _props$minWidth = _props.minWidth,
                minWidth = _props$minWidth === undefined ? 0 : _props$minWidth,
                maxWidth = _props.maxWidth,
                visible = _props.visible,
                innerCardStyle = _props.innerCardStyle,
                contentClassName = _props.contentClassName;

              if (!visible) {
                return null;
              }

              return _react2.default.createElement(
                'div',
                _extends({}, (0, _dataUtils.getDataAttrs)(data), {
                  className: _style2.default.wrapper,
                }),
                _react2.default.createElement(
                  'div',
                  { className: _style2.default.innerWrapper },
                  _react2.default.createElement(
                    'div',
                    {
                      style: _extends({}, innerCardStyle, {
                        minWidth: minWidth,
                        maxWidth: maxWidth,
                      }),
                      className: _style2.default.card,
                    },
                    _react2.default.createElement(
                      'div',
                      {
                        className: (0, _classnames2.default)(
                          _style2.default.content,
                          contentClassName
                        ),
                      },
                      title &&
                        _react2.default.createElement(
                          'div',
                          { className: _style2.default.top },
                          _react2.default.createElement(_Header2.default, { h3: true }, title)
                        ),
                      children,
                      actions &&
                        _react2.default.createElement(
                          'div',
                          { className: _style2.default.pageActions },
                          actions
                        )
                    )
                  )
                ),
                _react2.default.createElement('div', {
                  className: _style2.default.overlay,
                  onClick: onDismiss,
                })
              );
            },
          },
        ]);

        return Modal;
      })(_react2.default.Component);

      Modal.displayName = 'Plasma@Modal';

      exports.default = Modal;

      /***/
    },

    /***/ 70: /***/ function(module, exports) {
      // removed by extract-text-webpack-plugin
      module.exports = {
        clearfix: 'src-components-Modal-clearfix__1NOG6',
        content: 'src-components-Modal-content__1ULzZ',
        wrapper: 'src-components-Modal-wrapper__2iL_T',
        innerWrapper: 'src-components-Modal-innerWrapper__md1tX',
        overlay: 'src-components-Modal-overlay__2OGUZ',
        fadeOverlay: 'src-components-Modal-fadeOverlay__2fiEd',
        card: 'src-components-Modal-card__1f8Lb',
        slidein: 'src-components-Modal-slidein__8iES0',
        pageActions: 'src-components-Modal-pageActions__1mJw1',
      };

      /***/
    },

    /***/ 9: /***/ function(module, exports, __webpack_require__) {
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

      var _classnames = __webpack_require__(2);

      var _classnames2 = _interopRequireDefault(_classnames);

      var _react = __webpack_require__(0);

      var _react2 = _interopRequireDefault(_react);

      var _style = __webpack_require__(10);

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

      var Header = (function(_React$Component) {
        _inherits(Header, _React$Component);

        function Header() {
          _classCallCheck(this, Header);

          return _possibleConstructorReturn(
            this,
            (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments)
          );
        }

        _createClass(Header, [
          {
            key: 'render',
            value: function render() {
              var _cx;

              var headerStyle = (0, _classnames2.default)(
                _style2.default.header,
                ((_cx = {}),
                _defineProperty(_cx, _style2.default.header1, this.props.h1),
                _defineProperty(_cx, _style2.default.header2, this.props.h2),
                _defineProperty(_cx, _style2.default.header3, this.props.h3),
                _defineProperty(_cx, _style2.default.header4, this.props.h4),
                _defineProperty(_cx, _style2.default.header5, this.props.h5),
                _defineProperty(_cx, _style2.default.header6, this.props.h6),
                _defineProperty(_cx, _style2.default.invert, this.props.invert),
                _defineProperty(_cx, _style2.default.noMargin, this.props.noMargin),
                _cx)
              );

              return _react2.default.createElement(
                'div',
                _extends({}, (0, _dataUtils.getDataAttrs)(this.props.data), {
                  className: [headerStyle],
                }),
                _react2.default.createElement(
                  'div',
                  { className: _style2.default.content },
                  this.props.text || this.props.children
                ),
                this.props.underline &&
                  _react2.default.createElement('div', { className: _style2.default.rule })
              );
            },
          },
        ]);

        return Header;
      })(_react2.default.Component);

      Header.displayName = 'Plasma@Header';

      exports.default = Header;

      /***/
    },

    /******/
  }
);
