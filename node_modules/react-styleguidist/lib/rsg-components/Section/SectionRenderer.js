'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SectionRenderer = SectionRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

var _SectionHeading = require('rsg-components/SectionHeading');

var _SectionHeading2 = _interopRequireDefault(_SectionHeading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(_ref) {
	var space = _ref.space;
	return {
		root: {
			marginBottom: space[4]
		}
	};
};

function SectionRenderer(allProps) {
	var classes = allProps.classes,
	    name = allProps.name,
	    slug = allProps.slug,
	    content = allProps.content,
	    components = allProps.components,
	    sections = allProps.sections;

	return _react2.default.createElement(
		'section',
		{ className: classes.root },
		name && _react2.default.createElement(
			_SectionHeading2.default,
			{ primary: true, id: slug, slotName: 'sectionToolbar', slotProps: allProps },
			name
		),
		content,
		components,
		sections
	);
}

SectionRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	name: _propTypes2.default.string,
	slug: _propTypes2.default.string,
	content: _propTypes2.default.node,
	components: _propTypes2.default.node,
	sections: _propTypes2.default.node,
	isolated: _propTypes2.default.bool
};

exports.default = (0, _Styled2.default)(styles)(SectionRenderer);