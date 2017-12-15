'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.columns = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = MethodsRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Markdown = require('rsg-components/Markdown');

var _Markdown2 = _interopRequireDefault(_Markdown);

var _Argument = require('rsg-components/Argument');

var _Argument2 = _interopRequireDefault(_Argument);

var _Arguments = require('rsg-components/Arguments');

var _Arguments2 = _interopRequireDefault(_Arguments);

var _Name = require('rsg-components/Name');

var _Name2 = _interopRequireDefault(_Name);

var _JsDoc = require('rsg-components/JsDoc');

var _JsDoc2 = _interopRequireDefault(_JsDoc);

var _Table = require('rsg-components/Table');

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRowKey = function getRowKey(row) {
	return row.name;
};

var columns = exports.columns = [{
	caption: 'Method name',
	// eslint-disable-next-line react/prop-types
	render: function render(_ref) {
		var name = _ref.name,
		    _ref$tags = _ref.tags,
		    tags = _ref$tags === undefined ? {} : _ref$tags;
		return _react2.default.createElement(
			_Name2.default,
			{ deprecated: !!tags.deprecated },
			name + '()'
		);
	}
}, {
	caption: 'Parameters',
	// eslint-disable-next-line react/prop-types
	render: function render(_ref2) {
		var _ref2$params = _ref2.params,
		    params = _ref2$params === undefined ? [] : _ref2$params;
		return _react2.default.createElement(_Arguments2.default, { args: params });
	}
}, {
	caption: 'Description',
	// eslint-disable-next-line react/prop-types
	render: function render(_ref3) {
		var description = _ref3.description,
		    returns = _ref3.returns,
		    _ref3$tags = _ref3.tags,
		    tags = _ref3$tags === undefined ? {} : _ref3$tags;
		return _react2.default.createElement(
			'div',
			null,
			description && _react2.default.createElement(_Markdown2.default, { text: description }),
			returns && _react2.default.createElement(_Argument2.default, _extends({ block: true, returns: true }, returns)),
			_react2.default.createElement(_JsDoc2.default, tags)
		);
	}
}];

function MethodsRenderer(_ref4) {
	var methods = _ref4.methods;

	return _react2.default.createElement(_Table2.default, { columns: columns, rows: methods, getRowKey: getRowKey });
}

MethodsRenderer.propTypes = {
	methods: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		name: _propTypes2.default.string.isRequired,
		description: _propTypes2.default.string,
		returns: _propTypes2.default.object,
		params: _propTypes2.default.array,
		tags: _propTypes2.default.object
	})).isRequired
};