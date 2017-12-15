'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ReactComponentRenderer = ReactComponentRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Pathline = require('rsg-components/Pathline');

var _Pathline2 = _interopRequireDefault(_Pathline);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(_ref) {
	var color = _ref.color,
	    fontSize = _ref.fontSize,
	    space = _ref.space;
	return {
		root: {
			marginBottom: space[6]
		},
		header: {
			marginBottom: space[3]
		},
		tabs: {
			marginBottom: space[3]
		},
		tabButtons: {
			marginBottom: space[2]
		},
		docs: {
			color: color.base,
			fontSize: fontSize.text
		}
	};
};

function ReactComponentRenderer(_ref2) {
	var classes = _ref2.classes,
	    name = _ref2.name,
	    heading = _ref2.heading,
	    pathLine = _ref2.pathLine,
	    description = _ref2.description,
	    docs = _ref2.docs,
	    examples = _ref2.examples,
	    tabButtons = _ref2.tabButtons,
	    tabBody = _ref2.tabBody;

	return _react2.default.createElement(
		'div',
		{ className: classes.root, id: name + '-container' },
		_react2.default.createElement(
			'header',
			{ className: classes.header },
			heading,
			_react2.default.createElement(
				_Pathline2.default,
				null,
				pathLine
			)
		),
		(description || docs) && _react2.default.createElement(
			'div',
			{ className: classes.docs },
			description,
			docs
		),
		tabButtons && _react2.default.createElement(
			'div',
			{ className: classes.tabs },
			_react2.default.createElement(
				'div',
				{ className: classes.tabButtons },
				tabButtons
			),
			tabBody
		),
		examples
	);
}

ReactComponentRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	name: _propTypes2.default.string.isRequired,
	heading: _propTypes2.default.node.isRequired,
	pathLine: _propTypes2.default.string.isRequired,
	tabButtons: _propTypes2.default.node,
	tabBody: _propTypes2.default.node,
	description: _propTypes2.default.node,
	docs: _propTypes2.default.node,
	examples: _propTypes2.default.node,
	isolated: _propTypes2.default.bool
};

exports.default = (0, _Styled2.default)(styles)(ReactComponentRenderer);