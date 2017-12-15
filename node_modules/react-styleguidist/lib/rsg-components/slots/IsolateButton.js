'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fullscreen = require('react-icons/lib/md/fullscreen');

var _fullscreen2 = _interopRequireDefault(_fullscreen);

var _fullscreenExit = require('react-icons/lib/md/fullscreen-exit');

var _fullscreenExit2 = _interopRequireDefault(_fullscreenExit);

var _ToolbarButton = require('rsg-components/ToolbarButton');

var _ToolbarButton2 = _interopRequireDefault(_ToolbarButton);

var _utils = require('../../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IsolateButton = function IsolateButton(_ref) {
	var name = _ref.name,
	    example = _ref.example,
	    isolated = _ref.isolated;
	return isolated ? _react2.default.createElement(
		_ToolbarButton2.default,
		{ href: (0, _utils.getUrl)(), title: 'Show all components' },
		_react2.default.createElement(_fullscreenExit2.default, null)
	) : _react2.default.createElement(
		_ToolbarButton2.default,
		{ href: (0, _utils.getUrl)({ name: name, example: example, isolated: true }), title: 'Open isolated' },
		_react2.default.createElement(_fullscreen2.default, null)
	);
};

IsolateButton.propTypes = {
	name: _propTypes2.default.string.isRequired,
	example: _propTypes2.default.number,
	isolated: _propTypes2.default.bool
};

exports.default = IsolateButton;