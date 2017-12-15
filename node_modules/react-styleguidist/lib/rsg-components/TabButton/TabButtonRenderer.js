'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.styles = undefined;
exports.TabButtonRenderer = TabButtonRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = exports.styles = function styles(_ref) {
	var space = _ref.space,
	    color = _ref.color,
	    fontFamily = _ref.fontFamily,
	    fontSize = _ref.fontSize;
	return {
		button: {
			padding: [[space[1], 0]],
			fontFamily: fontFamily.base,
			fontSize: fontSize.base,
			color: color.light,
			background: 'transparent',
			textTransform: 'uppercase',
			transition: 'color 750ms ease-out',
			border: 'none',
			cursor: 'pointer',
			'&:hover, &:focus': {
				isolate: false,
				outline: 0,
				color: color.linkHover,
				transition: 'color 150ms ease-in'
			},
			'&:focus:not($isActive)': {
				isolate: false,
				outline: [[1, 'dotted', color.linkHover]]
			},
			'& + &': {
				isolate: false,
				marginLeft: space[1]
			}
		},
		isActive: {
			borderBottom: [[2, color.linkHover, 'solid']]
		}
	};
};

function TabButtonRenderer(_ref2) {
	var classes = _ref2.classes,
	    name = _ref2.name,
	    className = _ref2.className,
	    onClick = _ref2.onClick,
	    active = _ref2.active,
	    children = _ref2.children;

	var classNames = (0, _classnames2.default)(classes.button, className, _defineProperty({}, classes.isActive, active));

	return _react2.default.createElement(
		'button',
		{ type: 'button', name: name, className: classNames, onClick: onClick },
		children
	);
}

TabButtonRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	name: _propTypes2.default.string,
	className: _propTypes2.default.string,
	onClick: _propTypes2.default.func,
	active: _propTypes2.default.bool,
	children: _propTypes2.default.node
};

exports.default = (0, _Styled2.default)(styles)(TabButtonRenderer);