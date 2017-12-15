'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _date_utils = require('./date_utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Day = function (_React$Component) {
  _inherits(Day, _React$Component);

  function Day() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Day);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Day.__proto__ || Object.getPrototypeOf(Day)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (!_this.isDisabled() && _this.props.onClick) {
        _this.props.onClick(event);
      }
    }, _this.handleMouseEnter = function (event) {
      if (!_this.isDisabled() && _this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.isSameDay = function (other) {
      return (0, _date_utils.isSameDay)(_this.props.day, other);
    }, _this.isKeyboardSelected = function () {
      return !_this.props.inline && !_this.isSameDay(_this.props.selected) && _this.isSameDay(_this.props.preSelection);
    }, _this.isDisabled = function () {
      return (0, _date_utils.isDayDisabled)(_this.props.day, _this.props);
    }, _this.isHighlighted = function () {
      var _this$props = _this.props,
          day = _this$props.day,
          highlightDates = _this$props.highlightDates;

      if (!highlightDates) {
        return false;
      }
      return highlightDates.some(function (testDay) {
        return (0, _date_utils.isSameDay)(day, testDay);
      });
    }, _this.isInRange = function () {
      var _this$props2 = _this.props,
          day = _this$props2.day,
          startDate = _this$props2.startDate,
          endDate = _this$props2.endDate;

      if (!startDate || !endDate) {
        return false;
      }
      return (0, _date_utils.isDayInRange)(day, startDate, endDate);
    }, _this.isInSelectingRange = function () {
      var _this$props3 = _this.props,
          day = _this$props3.day,
          selectsStart = _this$props3.selectsStart,
          selectsEnd = _this$props3.selectsEnd,
          selectingDate = _this$props3.selectingDate,
          startDate = _this$props3.startDate,
          endDate = _this$props3.endDate;


      if (!(selectsStart || selectsEnd) || !selectingDate || _this.isDisabled()) {
        return false;
      }

      if (selectsStart && endDate && selectingDate.isSameOrBefore(endDate)) {
        return (0, _date_utils.isDayInRange)(day, selectingDate, endDate);
      }

      if (selectsEnd && startDate && selectingDate.isSameOrAfter(startDate)) {
        return (0, _date_utils.isDayInRange)(day, startDate, selectingDate);
      }

      return false;
    }, _this.isSelectingRangeStart = function () {
      if (!_this.isInSelectingRange()) {
        return false;
      }

      var _this$props4 = _this.props,
          day = _this$props4.day,
          selectingDate = _this$props4.selectingDate,
          startDate = _this$props4.startDate,
          selectsStart = _this$props4.selectsStart;


      if (selectsStart) {
        return (0, _date_utils.isSameDay)(day, selectingDate);
      } else {
        return (0, _date_utils.isSameDay)(day, startDate);
      }
    }, _this.isSelectingRangeEnd = function () {
      if (!_this.isInSelectingRange()) {
        return false;
      }

      var _this$props5 = _this.props,
          day = _this$props5.day,
          selectingDate = _this$props5.selectingDate,
          endDate = _this$props5.endDate,
          selectsEnd = _this$props5.selectsEnd;


      if (selectsEnd) {
        return (0, _date_utils.isSameDay)(day, selectingDate);
      } else {
        return (0, _date_utils.isSameDay)(day, endDate);
      }
    }, _this.isRangeStart = function () {
      var _this$props6 = _this.props,
          day = _this$props6.day,
          startDate = _this$props6.startDate,
          endDate = _this$props6.endDate;

      if (!startDate || !endDate) {
        return false;
      }
      return (0, _date_utils.isSameDay)(startDate, day);
    }, _this.isRangeEnd = function () {
      var _this$props7 = _this.props,
          day = _this$props7.day,
          startDate = _this$props7.startDate,
          endDate = _this$props7.endDate;

      if (!startDate || !endDate) {
        return false;
      }
      return (0, _date_utils.isSameDay)(endDate, day);
    }, _this.isWeekend = function () {
      var weekday = _this.props.day.day();
      return weekday === 0 || weekday === 6;
    }, _this.isOutsideMonth = function () {
      return _this.props.month !== undefined && _this.props.month !== _this.props.day.month();
    }, _this.getClassNames = function () {
      return (0, _classnames2.default)('react-datepicker__day', {
        'react-datepicker__day--disabled': _this.isDisabled(),
        'react-datepicker__day--selected': _this.isSameDay(_this.props.selected),
        'react-datepicker__day--keyboard-selected': _this.isKeyboardSelected(),
        'react-datepicker__day--highlighted': _this.isHighlighted(),
        'react-datepicker__day--range-start': _this.isRangeStart(),
        'react-datepicker__day--range-end': _this.isRangeEnd(),
        'react-datepicker__day--in-range': _this.isInRange(),
        'react-datepicker__day--in-selecting-range': _this.isInSelectingRange(),
        'react-datepicker__day--selecting-range-start': _this.isSelectingRangeStart(),
        'react-datepicker__day--selecting-range-end': _this.isSelectingRangeEnd(),
        'react-datepicker__day--today': _this.isSameDay(_moment2.default.utc().utcOffset(_this.props.utcOffset)),
        'react-datepicker__day--weekend': _this.isWeekend(),
        'react-datepicker__day--outside-month': _this.isOutsideMonth()
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Day, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: this.getClassNames(),
          onClick: this.handleClick,
          onMouseEnter: this.handleMouseEnter,
          'aria-label': 'day-' + this.props.day.date(),
          role: 'option' },
        this.props.day.date()
      );
    }
  }]);

  return Day;
}(_react2.default.Component);

Day.propTypes = {
  day: _propTypes2.default.object.isRequired,
  endDate: _propTypes2.default.object,
  highlightDates: _propTypes2.default.array,
  inline: _propTypes2.default.bool,
  month: _propTypes2.default.number,
  onClick: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  preSelection: _propTypes2.default.object,
  selected: _propTypes2.default.object,
  selectingDate: _propTypes2.default.object,
  selectsEnd: _propTypes2.default.bool,
  selectsStart: _propTypes2.default.bool,
  startDate: _propTypes2.default.object,
  utcOffset: _propTypes2.default.number
};
Day.defaultProps = {
  utcOffset: _moment2.default.utc().utcOffset()
};
exports.default = Day;
