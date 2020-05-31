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
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//  strict
var icon = '<svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Sortable-headers" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Nearby-inventory_pricedecreasing" transform="translate(-832.000000, -249.000000)" fill="#252729"><polygon id="ic_uparrow" points="836 249 840 254 832 254"></polygon></g></g></svg>';

exports.default = icon;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//  strict
var icon = '<svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Sortable-headers" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Nearby-inventory" transform="translate(-680.000000, -249.000000)" fill="#252729"><polygon id="ic_downarrow" transform="translate(684.000000, 251.500000) scale(1, -1) translate(-684.000000, -251.500000) " points="684 249 688 254 680 254"></polygon></g></g></svg>';

exports.default = icon;

/***/ }),

/***/ 5:
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

/***/ 7:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"clearfix":"src-components-Icon-clearfix__3zhE-","wrapper":"src-components-Icon-wrapper__1y5Fo"};

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(3);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _dataUtils = __webpack_require__(1);

var _Icon = __webpack_require__(5);

var _Icon2 = _interopRequireDefault(_Icon);

var _upArrow = __webpack_require__(31);

var _upArrow2 = _interopRequireDefault(_upArrow);

var _downArrow = __webpack_require__(32);

var _downArrow2 = _interopRequireDefault(_downArrow);

var _style = __webpack_require__(79);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this));

    _this.handleWindowResize = function () {
      _this.calculateSizes();
      _this.handleScroll();
    };

    _this.handleScroll = function () {
      var stickAt = _this.props.stickAt;

      if (stickAt != null) {
        var tableTopOffset = _this.table.getBoundingClientRect().top;
        var tableBottomOffset = _this.table.getBoundingClientRect().bottom;
        var topAtOrAboveStickyPoint = tableTopOffset < stickAt;
        var bottomAtOrAboveStickyPoint = tableBottomOffset - _this.state.headerHeight < stickAt;
        var isVisible = false;
        if (topAtOrAboveStickyPoint && !bottomAtOrAboveStickyPoint) {
          isVisible = true;
        }
        _this.fixed.style.height = _this.props.stickAt + _this.state.headerHeight + 'px';
        _this.fixed.style['pointer-event'] = isVisible ? 'auto' : 'none';
        _this.fixed.style.opacity = isVisible ? 1 : 0;
      }
    };

    _this.updateState = function (newState, callback) {
      // only update the state if it changed to save on updates
      // and prevent a render loop
      if (!(0, _lodash.isEqual)((0, _lodash.pick)(_this.state, (0, _lodash.keys)(newState)), newState)) {
        _this.setState(newState, callback);
      }
    };

    _this.calculateSizes = function (callback) {
      var headerSizes = {};
      var maxHeaderHeight = 0;
      (0, _lodash.forEach)(_this.headerComponents, function (value, key) {
        var headerCompStyle = window.getComputedStyle(value, null);
        var width = parseInt(headerCompStyle.getPropertyValue('width'), 10);
        var height = parseInt(headerCompStyle.getPropertyValue('height'), 10);
        headerSizes[key] = { width: width, height: height };
        if (height > maxHeaderHeight) {
          maxHeaderHeight = height;
        }
      });
      var tableWidth = parseInt(_this.table.offsetWidth, 10);
      _this.updateState({
        columnSizes: headerSizes,
        headerHeight: maxHeaderHeight,
        tableWidth: tableWidth
      }, callback);
    };

    _this.state = {
      columnSizes: {},
      tableWidth: 0,
      backgroundColor: null,
      stickyCoverHeight: 0,
      translateY: 0,
      showSticky: false,
      headerHeight: 0
    };
    _this.headerComponents = {};
    return _this;
  }

  _createClass(Table, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.stickAt != null) {
        document.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleWindowResize);
        var init = function init() {
          _this2.handleWindowResize();
          _this2.handleScroll();
        };
        this.calculateSizes(init);
      } else {
        this.calculateSizes();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.stickAt && !(0, _lodash.isEqual)(this.props, prevProps)) {
        this.calculateSizes();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.handleWindowResize);
    }
  }, {
    key: 'renderStickyHeader',
    value: function renderStickyHeader() {
      return this.renderHeader({ sticky: true });
    }
  }, {
    key: 'renderCarat',
    value: function renderCarat() {
      var sort = this.props.sort;

      return _react2.default.createElement(_Icon2.default, { color: '#fff', icon: sort && sort.order === 'asc' ? _downArrow2.default : _upArrow2.default });
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      var _this3 = this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _props = this.props,
          sort = _props.sort,
          onSort = _props.onSort;

      var headerComponents = (0, _lodash.map)(this.props.headerData, function (value) {
        var _cx2;

        var colStyles = { width: value.width };
        var key = value.key;


        if (opts.sticky && _this3.state.columnSizes[key] && !value.width) {
          colStyles = { width: _this3.state.columnSizes[key].width };
        }
        var cellStyle = (0, _classnames2.default)(_style2.default.cell, _defineProperty({}, _style2.default.sortableColumn, value.sortable));
        return _react2.default.createElement(
          'th',
          {
            className: (0, _classnames2.default)((_cx2 = {}, _defineProperty(_cx2, cellStyle, true), _defineProperty(_cx2, _style2.default.condensedCell, value.condensed), _cx2)),
            style: colStyles,
            key: key,
            ref: function ref(c) {
              if (!opts.sticky) {
                _this3.headerComponents[key] = c;
              }
            },
            onClick: function onClick() {
              return value.sortable && onSort && onSort(key);
            }
          },
          value.label,
          sort && key === sort.key && _this3.renderCarat(),
          value.sortable && _react2.default.createElement('div', {
            className: (0, _classnames2.default)(_style2.default.sortableColumnHighlight, _defineProperty({}, _style2.default.sortableColumnHighlightSelected, _this3.props.selectedColumnKey === key))
          })
        );
      });
      return _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          { className: (0, _classnames2.default)(_style2.default.row, _style2.default.header) },
          headerComponents
        )
      );
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var spanKey = void 0;
      var spannedHeaderKeys = void 0;

      var _props2 = this.props,
          clickable = _props2.clickable,
          empty = _props2.empty,
          emptyText = _props2.emptyText,
          headerData = _props2.headerData,
          highlightable = _props2.highlightable,
          items = _props2.items,
          loading = _props2.loading,
          spanMap = _props2.spanMap;


      var totalColumns = headerData.length;

      if (loading) {
        return _react2.default.createElement(
          'tbody',
          { className: _style2.default.tbody },
          _react2.default.createElement(
            'tr',
            { className: _style2.default.row },
            _react2.default.createElement(
              'td',
              { className: _style2.default.cell, colSpan: totalColumns },
              _react2.default.createElement(
                'span',
                { className: _style2.default.loadingText },
                'Loading...'
              )
            )
          )
        );
      }

      if (empty && emptyText) {
        return _react2.default.createElement(
          'tbody',
          { className: _style2.default.tbody },
          _react2.default.createElement(
            'tr',
            { className: _style2.default.row },
            _react2.default.createElement(
              'td',
              { className: _style2.default.cell, colSpan: totalColumns },
              typeof emptyText === 'string' ? _react2.default.createElement(
                'span',
                { className: _style2.default.emptyText },
                emptyText
              ) : emptyText
            )
          )
        );
      }

      if (spanMap) {
        // eslint-disable-next-line prefer-destructuring
        spanKey = (0, _lodash.keys)(spanMap)[0];
        spannedHeaderKeys = spanMap[spanKey];
      }

      var headerKeys = (0, _lodash.map)(headerData, 'key');

      var rowComponents = [];

      (0, _lodash.forEach)(items, function (itemValue, itemIndex) {
        var _cx5;

        var spanCount = (0, _lodash.get)(itemValue[spanKey], 'length');
        var columnComponents = [];
        var isDisabledRow = itemValue.disabled;

        (0, _lodash.forEach)(headerKeys, function (headerKey) {
          var isInnerKey = (0, _lodash.includes)(spannedHeaderKeys, headerKey);
          var headerDataVal = (0, _lodash.find)(headerData, { key: headerKey });
          var isCondensed = headerDataVal && headerDataVal.condensed;
          var cellValue = void 0;
          var rowsToSpan = void 0;

          if (!isInnerKey) {
            rowsToSpan = spanCount;
            cellValue = itemValue[headerKey];
          } else {
            cellValue = itemValue[spanKey][0][headerKey];
          }

          if (!cellValue) {
            cellValue = '-';
          }

          columnComponents.push(_react2.default.createElement(
            'td',
            {
              className: (0, _classnames2.default)(_style2.default.cell, _defineProperty({}, _style2.default.condensedCell, isCondensed)),
              key: headerKey,
              rowSpan: rowsToSpan
            },
            cellValue
          ));
        });

        rowComponents.push(_react2.default.createElement(
          'tr',
          {
            key: itemIndex,
            className: (0, _classnames2.default)(_style2.default.row, itemValue.rowClassName, (_cx5 = {}, _defineProperty(_cx5, _style2.default.rowDisabled, isDisabledRow), _defineProperty(_cx5, _style2.default.clickable, clickable), _defineProperty(_cx5, _style2.default.highlightable, highlightable), _cx5))
          },
          columnComponents
        ));

        // Create the remaining partial rows if necessary
        if (spanCount) {
          var _loop = function _loop(i) {
            var _cx6;

            var partialRowColumns = [];
            (0, _lodash.forEach)(spannedHeaderKeys, function (key) {
              partialRowColumns.push(_react2.default.createElement(
                'td',
                { key: key, className: _style2.default.cell },
                itemValue[spanKey][i][key]
              ));
            });
            rowComponents.push(_react2.default.createElement(
              'tr',
              {
                key: itemIndex + '.' + i,
                className: (0, _classnames2.default)(_style2.default.row, itemValue.rowClassName, (_cx6 = {}, _defineProperty(_cx6, _style2.default.rowDisabled, isDisabledRow), _defineProperty(_cx6, _style2.default.clickable, clickable), _defineProperty(_cx6, _style2.default.highlightable, highlightable), _cx6))
              },
              partialRowColumns
            ));
          };

          // eslint-disable-next-line no-plusplus
          for (var i = 1; i < spanCount; i++) {
            _loop(i);
          }
        }
      });

      return _react2.default.createElement(
        'tbody',
        { className: _style2.default.tbody },
        rowComponents
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        _extends({}, (0, _dataUtils.getDataAttrs)(this.props.data), { style: this.props.style, className: _style2.default.wrapper }),
        this.props.stickAt != null && _react2.default.createElement(
          'div',
          {
            // eslint-disable-next-line no-return-assign
            ref: function ref(c) {
              return _this4.fixed = c;
            },
            className: (0, _classnames2.default)(_style2.default.table, _style2.default.sticky),
            style: {
              backgroundColor: this.state.backgroundColor,
              width: this.state.tableWidth
            }
          },
          _react2.default.createElement(
            'table',
            {
              style: {
                width: this.state.tableWidth
              }
            },
            this.renderStickyHeader()
          )
        ),
        _react2.default.createElement(
          'table',
          {
            ref: function ref(c) {
              _this4.table = c;
            },
            className: _style2.default.table
          },
          this.renderHeader(),
          this.renderItems()
        )
      );
    }
  }]);

  return Table;
}(_react2.default.Component);

Table.defaultProps = {
  empty: false,
  emptyText: '',
  loading: false,
  headerData: []
};


Table.displayName = 'Plasma@Table';

exports.default = Table;

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"table":"src-components-Table-table__3YQjf","clearfix":"src-components-Table-clearfix__3btMP","sticky":"src-components-Table-sticky__BqqPR","tbody":"src-components-Table-tbody__1jqAV","row":"src-components-Table-row__2Gq-d","header":"src-components-Table-header__1PK2_","sortableColumn":"src-components-Table-sortableColumn__3I5v0","sortableColumnHighlight":"src-components-Table-sortableColumnHighlight__3RRdk","sortableColumnHighlightSelected":"src-components-Table-sortableColumnHighlightSelected__1XDvI","rowDisabled":"src-components-Table-rowDisabled__1Iu5h","clickable":"src-components-Table-clickable__83sfR","highlightable":"src-components-Table-highlightable__2zlsi","cell":"src-components-Table-cell__-1Rff","condensedCell":"src-components-Table-condensedCell__28phA","headerCell":"src-components-Table-headerCell__fYI7B","emptyText":"src-components-Table-emptyText__3iI4L","loadingText":"src-components-Table-loadingText__-8kWz"};

/***/ })

/******/ });