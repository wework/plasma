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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 28));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ 0: /***/ function(module, exports) {
      module.exports = require('react');

      /***/
    },

    /***/ 17: /***/ function(module, exports) {
      // removed by extract-text-webpack-plugin
      module.exports = {
        revealableListItem: 'src-components-OverflowMenu-revealableListItem__A34a8',
        clearfix: 'src-components-OverflowMenu-clearfix__2Xf5m',
        overflow: 'src-components-OverflowMenu-overflow__k7TpV',
        container: 'src-components-OverflowMenu-container__1z8o8',
        action: 'src-components-OverflowMenu-action__38-0_',
        revealable: 'src-components-OverflowMenu-revealable__3-kiJ',
        openLeft: 'src-components-OverflowMenu-openLeft__3SJdt',
        revealed: 'src-components-OverflowMenu-revealed__3qoKU',
        revealableTopWrapper: 'src-components-OverflowMenu-revealableTopWrapper__2q3_Q',
        revealableTop: 'src-components-OverflowMenu-revealableTop__32qV6',
        labelWithText: 'src-components-OverflowMenu-labelWithText__ETA6L',
        revealableList: 'src-components-OverflowMenu-revealableList__1YJUE',
      };

      /***/
    },

    /***/ 28: /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _react = __webpack_require__(0);

      var _react2 = _interopRequireDefault(_react);

      var _style = __webpack_require__(17);

      var _style2 = _interopRequireDefault(_style);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var OverflowMenuItem = function OverflowMenuItem(_ref) {
        var onClick = _ref.onClick,
          optionKey = _ref.optionKey,
          text = _ref.text;

        return _react2.default.createElement(
          'li',
          {
            className: _style2.default.revealableListItem,
            onClick: (function(_onClick) {
              function onClick() {
                return _onClick.apply(this, arguments);
              }

              onClick.toString = function() {
                return _onClick.toString();
              };

              return onClick;
            })(function() {
              return onClick(optionKey);
            }),
          },
          text
        );
      };

      OverflowMenuItem.displayName = 'Plasma@OverflowMenuItem';

      exports.default = OverflowMenuItem;

      /***/
    },

    /******/
  }
);
