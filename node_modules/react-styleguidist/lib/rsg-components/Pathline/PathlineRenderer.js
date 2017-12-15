'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.styles = undefined;
exports.PathlineRenderer = PathlineRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _clipboardCopy = require('clipboard-copy');

var _clipboardCopy2 = _interopRequireDefault(_clipboardCopy);

var _contentCopy = require('react-icons/lib/md/content-copy');

var _contentCopy2 = _interopRequireDefault(_contentCopy);

var _ToolbarButton = require('rsg-components/ToolbarButton');

var _ToolbarButton2 = _interopRequireDefault(_ToolbarButton);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(_ref) {
	var space = _ref.space,
	    fontFamily = _ref.fontFamily,
	    fontSize = _ref.fontSize,
	    color = _ref.color;
	return {
		pathline: {
			fontFamily: fontFamily.monospace,
			fontSize: fontSize.small,
			color: color.light
		},
		copyButton: {
			marginLeft: space[0]
		}
	};
};

function PathlineRenderer(_ref2) {
	var classes = _ref2.classes,
	    children = _ref2.children;

	return _react2.default.createElement(
		'div',
		{ className: classes.pathline },
		children,
		_react2.default.createElement(
			_ToolbarButton2.default,
			{
				small: true,
				className: classes.copyButton,
				onClick: function onClick() {
					return (0, _clipboardCopy2.default)(children);
				},
				title: 'Copy to clipboard'
			},
			_react2.default.createElement(_contentCopy2.default, null)
		)
	);
}

PathlineRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	children: _propTypes2.default.string
};

exports.default = (0, _Styled2.default)(styles)(PathlineRenderer);