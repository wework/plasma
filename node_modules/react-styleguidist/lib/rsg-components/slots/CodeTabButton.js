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

var CodeTabButton = function CodeTabButton(props) {
	return _react2.default.createElement(
		_TabButton2.default,
		props,
		'Code'
	);
};

CodeTabButton.propTypes = {
	onClick: _propTypes2.default.func.isRequired,
	name: _propTypes2.default.string.isRequired,
	active: _propTypes2.default.bool
};

exports.default = CodeTabButton;