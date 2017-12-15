'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.styles = undefined;
exports.ToolbarButtonRenderer = ToolbarButtonRenderer;

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
	    color = _ref.color;
	return {
		button: {
			padding: 2, // Increase clickable area a bit
			color: color.light,
			background: 'transparent',
			transition: 'color 750ms ease-out',
			cursor: 'pointer',
			'&:hover, &:focus': {
				isolate: false,
				color: color.linkHover,
				transition: 'color 150ms ease-in'
			},
			'&:focus': {
				isolate: false,
				outline: [[1, 'dotted', color.linkHover]]
			},
			'& + &': {
				isolate: false,
				marginLeft: space[1]
			},
			// Style react-icons icon passed as children
			'& svg': {
				width: space[3],
				height: space[3],
				color: 'currentColor',
				cursor: 'inherit'
			}
		},
		isSmall: {
			'& svg': {
				width: 14,
				height: 14
			}
		}
	};
};

function ToolbarButtonRenderer(_ref2) {
	var classes = _ref2.classes,
	    className = _ref2.className,
	    onClick = _ref2.onClick,
	    href = _ref2.href,
	    title = _ref2.title,
	    small = _ref2.small,
	    children = _ref2.children;

	var classNames = (0, _classnames2.default)(classes.button, className, _defineProperty({}, classes.isSmall, small));

	if (href !== undefined) {
		return _react2.default.createElement(
			'a',
			{ href: href, title: title, className: classNames },
			children
		);
	}

	return _react2.default.createElement(
		'button',
		{ type: 'button', onClick: onClick, title: title, className: classNames },
		children
	);
}

ToolbarButtonRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	className: _propTypes2.default.string,
	href: _propTypes2.default.string,
	onClick: _propTypes2.default.func,
	title: _propTypes2.default.string,
	small: _propTypes2.default.bool,
	children: _propTypes2.default.node
};

exports.default = (0, _Styled2.default)(styles)(ToolbarButtonRenderer);