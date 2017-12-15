'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Usage;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Props = require('rsg-components/Props');

var _Props2 = _interopRequireDefault(_Props);

var _Methods = require('rsg-components/Methods');

var _Methods2 = _interopRequireDefault(_Methods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Usage(_ref) {
	var _ref$props = _ref.props,
	    props = _ref$props.props,
	    methods = _ref$props.methods;

	var propsNode = props && _react2.default.createElement(_Props2.default, { props: props });
	var methodsNode = methods && methods.length > 0 && _react2.default.createElement(_Methods2.default, { methods: methods });

	if (!propsNode && !methodsNode) {
		return null;
	}

	return _react2.default.createElement(
		'div',
		null,
		propsNode,
		methodsNode
	);
}

Usage.propTypes = {
	props: _propTypes2.default.shape({
		props: _propTypes2.default.object,
		methods: _propTypes2.default.array
	}).isRequired
};