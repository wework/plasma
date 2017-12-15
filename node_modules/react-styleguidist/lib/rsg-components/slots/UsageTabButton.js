'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TabButton = require('rsg-components/TabButton');

var _TabButton2 = _interopRequireDefault(_TabButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsageTabButton = function UsageTabButton(props) {
	var component = props.props;
	var showButton = component.props || component.methods && component.methods.length > 0;
	return showButton ? _react2.default.createElement(
		_TabButton2.default,
		props,
		'Props & methods'
	) : null;
};

UsageTabButton.propTypes = {
	onClick: _propTypes2.default.func.isRequired,
	name: _propTypes2.default.string.isRequired,
	props: _propTypes2.default.shape({
		props: _propTypes2.default.object,
		methods: _propTypes2.default.array
	}).isRequired,
	active: _propTypes2.default.bool
};

exports.default = UsageTabButton;