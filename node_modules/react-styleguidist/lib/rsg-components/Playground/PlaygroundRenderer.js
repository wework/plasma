'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PlaygroundRenderer = PlaygroundRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(_ref) {
	var space = _ref.space,
	    color = _ref.color,
	    borderRadius = _ref.borderRadius;
	return {
		root: {
			marginBottom: space[4]
		},
		preview: {
			padding: space[2],
			border: [[1, color.border, 'solid']],
			borderRadius: borderRadius
		},
		controls: {
			display: 'flex',
			alignItems: 'center'
		},
		toolbar: {
			marginLeft: 'auto'
		}
	};
};

function PlaygroundRenderer(_ref2) {
	var classes = _ref2.classes,
	    name = _ref2.name,
	    preview = _ref2.preview,
	    tabButtons = _ref2.tabButtons,
	    tabBody = _ref2.tabBody,
	    toolbar = _ref2.toolbar;

	return _react2.default.createElement(
		'div',
		{ className: classes.root },
		_react2.default.createElement(
			'div',
			{ className: classes.preview, 'data-preview': name },
			preview
		),
		_react2.default.createElement(
			'div',
			{ className: classes.controls },
			_react2.default.createElement(
				'div',
				{ className: classes.tabs },
				tabButtons
			),
			_react2.default.createElement(
				'div',
				{ className: classes.toolbar },
				toolbar
			)
		),
		_react2.default.createElement(
			'div',
			{ className: classes.tab },
			tabBody
		)
	);
}

PlaygroundRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	name: _propTypes2.default.string.isRequired,
	preview: _propTypes2.default.node.isRequired,
	tabButtons: _propTypes2.default.node.isRequired,
	tabBody: _propTypes2.default.node.isRequired,
	toolbar: _propTypes2.default.node.isRequired
};

exports.default = (0, _Styled2.default)(styles)(PlaygroundRenderer);