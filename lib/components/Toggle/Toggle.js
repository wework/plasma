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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 92));
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

    /***/ 92: /***/ function(module, exports, __webpack_require__) {
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

      var _lodash = __webpack_require__(3);

      var _lodash2 = _interopRequireDefault(_lodash);

      var _dataUtils = __webpack_require__(1);

      var _style = __webpack_require__(93);

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

      var type = {
        HORIZONTAL: 'horizontal',
        VERTICAL: 'vertical',
        SMALL: 'small',
      };

      var Toggle = (function(_React$Component) {
        _inherits(Toggle, _React$Component);

        function Toggle() {
          _classCallCheck(this, Toggle);

          return _possibleConstructorReturn(
            this,
            (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments)
          );
        }

        _createClass(Toggle, [
          {
            key: 'onClick',
            value: function onClick(item, index) {
              if (!item.disabled) {
                this.props.onChange(item.label, index);
              }
            },
          },
          {
            key: 'onKeyDown',
            value: function onKeyDown(event, item, index) {
              if (event.keyCode === 13 /* enter */) {
                this.onClick(item, index);
              }
            },
          },
          {
            key: 'render',
            value: function render() {
              var _this2 = this;

              return _react2.default.createElement(
                'ul',
                _extends({}, (0, _dataUtils.getDataAttrs)(this.props.data), {
                  className: _style2.default.toggleWrapper,
                  role: 'tablist',
                }),
                _lodash2.default.map(this.props.items, function(item, index) {
                  var _cx;

                  var isActive =
                    _this2.props.selectedIndex === index ||
                    _this2.props.selectedLabel === item.label;
                  var toggleClasses = (0, _classnames2.default)(
                    _style2.default.toggle,
                    _this2.props.className,
                    ((_cx = {}),
                    _defineProperty(_cx, _style2.default.active, isActive),
                    _defineProperty(_cx, _style2.default.disabled, item.disabled),
                    _defineProperty(
                      _cx,
                      _style2.default.horizontal,
                      _this2.props.type === type.HORIZONTAL
                    ),
                    _defineProperty(
                      _cx,
                      _style2.default.vertical,
                      _this2.props.type === type.VERTICAL
                    ),
                    _defineProperty(_cx, _style2.default.small, _this2.props.size === type.SMALL),
                    _cx)
                  );

                  return _react2.default.createElement(
                    'li',
                    {
                      role: 'tab',
                      onClick: function onClick() {
                        return _this2.onClick(item, index);
                      },
                      onKeyDown: function onKeyDown(event) {
                        return _this2.onKeyDown(event, item, index);
                      },
                      className: toggleClasses,
                      key: index,
                      type: _this2.props.type,
                      'data-state': item.disabled ? 'disabled' : 'enabled',
                      'data-active': isActive,
                    },
                    item.title
                  );
                })
              );
            },
          },
        ]);

        return Toggle;
      })(_react2.default.Component);

      Toggle.defaultProps = {
        items: [],
        type: type.HORIZONTAL,
        onChange: function onChange() {},
      };

      Toggle.displayName = 'Plasma@Toggle';

      exports.default = Toggle;

      /***/
    },

    /***/ 93: /***/ function(module, exports) {
      // removed by extract-text-webpack-plugin
      module.exports = {
        toggle: 'src-components-Toggle-toggle__QQ3Oi',
        clearfix: 'src-components-Toggle-clearfix__1h5vE',
        toggleWrapper: 'src-components-Toggle-toggleWrapper__1rWLv',
        small: 'src-components-Toggle-small__3ENgU',
        horizontal: 'src-components-Toggle-horizontal__3e6ds',
        active: 'src-components-Toggle-active__1qXnY',
        vertical: 'src-components-Toggle-vertical__3sHwb',
        disabled: 'src-components-Toggle-disabled__1iJdD',
      };

      /***/
    },

    /******/
  }
);
