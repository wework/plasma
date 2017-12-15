'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.styles = undefined;
exports.SectionHeadingRenderer = SectionHeadingRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SectionHeadingRenderer(_ref) {
	var _cx;

	var classes = _ref.classes,
	    children = _ref.children,
	    toolbar = _ref.toolbar,
	    id = _ref.id,
	    href = _ref.href,
	    primary = _ref.primary,
	    deprecated = _ref.deprecated;

	var Tag = primary ? 'h1' : 'h2';
	var headingClasses = (0, _classnames2.default)(classes.heading, (_cx = {}, _defineProperty(_cx, classes.isPrimary, primary), _defineProperty(_cx, classes.isDeprecated, deprecated), _cx));
	return _react2.default.createElement(
		Tag,
		{ id: id, className: classes.root },
		_react2.default.createElement(
			'a',
			{ href: href, className: headingClasses },
			children
		),
		_react2.default.createElement(
			'div',
			{ className: classes.toolbar },
			toolbar
		)
	);
}

var styles = exports.styles = function styles(_ref2) {
	var color = _ref2.color,
	    space = _ref2.space,
	    fontSize = _ref2.fontSize,
	    fontFamily = _ref2.fontFamily;
	return {
		root: {
			display: 'flex',
			marginBottom: space[1],
			alignItems: 'center'
		},
		heading: {
			color: color.base,
			fontSize: fontSize.h2,
			fontFamily: fontFamily.base,
			fontWeight: 'normal',
			'&:hover, &:active': {
				isolate: false,
				textDecoration: 'underline'
			}
		},
		isPrimary: {
			fontSize: fontSize.h1
		},
		isDeprecated: {
			textDecoration: 'line-through',
			color: color.light
		},
		toolbar: {
			marginLeft: 'auto'
		}
	};
};

SectionHeadingRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	children: _propTypes2.default.node,
	toolbar: _propTypes2.default.node,
	id: _propTypes2.default.string.isRequired,
	href: _propTypes2.default.string.isRequired,
	primary: _propTypes2.default.bool,
	deprecated: _propTypes2.default.bool
};

exports.default = (0, _Styled2.default)(styles)(SectionHeadingRenderer);