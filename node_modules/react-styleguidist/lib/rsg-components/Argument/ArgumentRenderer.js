'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.styles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.ArgumentRenderer = ArgumentRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

var _Markdown = require('rsg-components/Markdown');

var _Markdown2 = _interopRequireDefault(_Markdown);

var _Name = require('rsg-components/Name');

var _Name2 = _interopRequireDefault(_Name);

var _Type = require('rsg-components/Type');

var _Type2 = _interopRequireDefault(_Type);

var _reactGroup = require('react-group');

var _reactGroup2 = _interopRequireDefault(_reactGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = exports.styles = function styles(_ref) {
	var space = _ref.space;
	return {
		block: {
			marginBottom: space[2]
		}
	};
};

function ArgumentRenderer(_ref2) {
	var classes = _ref2.classes,
	    name = _ref2.name,
	    type = _ref2.type,
	    description = _ref2.description,
	    returns = _ref2.returns,
	    block = _ref2.block,
	    props = _objectWithoutProperties(_ref2, ['classes', 'name', 'type', 'description', 'returns', 'block']);

	return _react2.default.createElement(
		_reactGroup2.default,
		_extends({ className: block && classes.block }, props),
		returns && 'Returns',
		name && _react2.default.createElement(
			'span',
			null,
			_react2.default.createElement(
				_Name2.default,
				null,
				name
			),
			type && ':'
		),
		type && _react2.default.createElement(
			_Type2.default,
			null,
			type.name
		),
		description && _react2.default.createElement(_Markdown2.default, { text: '\u2014 ' + description, inline: true })
	);
}

ArgumentRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	name: _propTypes2.default.string,
	type: _propTypes2.default.object,
	description: _propTypes2.default.string,
	returns: _propTypes2.default.bool,
	block: _propTypes2.default.bool
};

exports.default = (0, _Styled2.default)(styles)(ArgumentRenderer);