'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = SectionHeading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Slot = require('rsg-components/Slot');

var _Slot2 = _interopRequireDefault(_Slot);

var _SectionHeadingRenderer = require('rsg-components/SectionHeading/SectionHeadingRenderer');

var _SectionHeadingRenderer2 = _interopRequireDefault(_SectionHeadingRenderer);

var _utils = require('../../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function SectionHeading(_ref) {
	var slotName = _ref.slotName,
	    slotProps = _ref.slotProps,
	    children = _ref.children,
	    id = _ref.id,
	    rest = _objectWithoutProperties(_ref, ['slotName', 'slotProps', 'children', 'id']);

	var href = (0, _utils.getUrl)({ slug: id, anchor: true });
	return _react2.default.createElement(
		_SectionHeadingRenderer2.default,
		_extends({
			toolbar: _react2.default.createElement(_Slot2.default, { name: slotName, props: slotProps }),
			id: id,
			href: href
		}, rest),
		children
	);
}

SectionHeading.propTypes = {
	children: _propTypes2.default.node,
	id: _propTypes2.default.string.isRequired,
	slotName: _propTypes2.default.string.isRequired,
	slotProps: _propTypes2.default.object.isRequired,
	primary: _propTypes2.default.bool,
	deprecated: _propTypes2.default.bool
};