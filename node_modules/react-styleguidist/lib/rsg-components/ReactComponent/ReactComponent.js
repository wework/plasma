'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Examples = require('rsg-components/Examples');

var _Examples2 = _interopRequireDefault(_Examples);

var _SectionHeading = require('rsg-components/SectionHeading');

var _SectionHeading2 = _interopRequireDefault(_SectionHeading);

var _JsDoc = require('rsg-components/JsDoc');

var _JsDoc2 = _interopRequireDefault(_JsDoc);

var _Markdown = require('rsg-components/Markdown');

var _Markdown2 = _interopRequireDefault(_Markdown);

var _Slot = require('rsg-components/Slot');

var _Slot2 = _interopRequireDefault(_Slot);

var _ReactComponentRenderer = require('rsg-components/ReactComponent/ReactComponentRenderer');

var _ReactComponentRenderer2 = _interopRequireDefault(_ReactComponentRenderer);

var _slots = require('../slots');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExamplePlaceholder = process.env.NODE_ENV !== 'production' ? require('rsg-components/ExamplePlaceholder').default : function () {
	return _react2.default.createElement('div', null);
};

var ReactComponent = function (_Component) {
	_inherits(ReactComponent, _Component);

	function ReactComponent(props, context) {
		_classCallCheck(this, ReactComponent);

		var _this = _possibleConstructorReturn(this, (ReactComponent.__proto__ || Object.getPrototypeOf(ReactComponent)).call(this, props, context));

		var showUsage = context.config.showUsage;


		_this.handleTabChange = _this.handleTabChange.bind(_this);

		_this.state = {
			activeTab: showUsage ? _slots.DOCS_TAB_USAGE : undefined
		};
		return _this;
	}

	_createClass(ReactComponent, [{
		key: 'handleTabChange',
		value: function handleTabChange(name) {
			this.setState(function (state) {
				return {
					activeTab: state.activeTab !== name ? name : undefined
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var activeTab = this.state.activeTab;
			var isolatedComponent = this.context.isolatedComponent;
			var component = this.props.component;
			var name = component.name,
			    slug = component.slug,
			    pathLine = component.pathLine;
			var _component$props = component.props,
			    description = _component$props.description,
			    _component$props$exam = _component$props.examples,
			    examples = _component$props$exam === undefined ? [] : _component$props$exam,
			    _component$props$tags = _component$props.tags,
			    tags = _component$props$tags === undefined ? {} : _component$props$tags;

			if (!name) {
				return null;
			}

			return _react2.default.createElement(_ReactComponentRenderer2.default, {
				name: name,
				slug: slug,
				pathLine: pathLine,
				docs: _react2.default.createElement(_JsDoc2.default, tags),
				description: description && _react2.default.createElement(_Markdown2.default, { text: description }),
				heading: _react2.default.createElement(
					_SectionHeading2.default,
					{
						id: slug,
						deprecated: !!tags.deprecated,
						slotName: 'componentToolbar',
						slotProps: _extends({}, component, {
							isolated: isolatedComponent
						})
					},
					name
				),
				examples: examples.length > 0 ? _react2.default.createElement(_Examples2.default, { examples: examples, name: name }) : _react2.default.createElement(ExamplePlaceholder, { name: name }),
				tabButtons: _react2.default.createElement(_Slot2.default, {
					name: 'docsTabButtons',
					active: activeTab,
					props: _extends({}, component, { onClick: this.handleTabChange })
				}),
				tabBody: _react2.default.createElement(_Slot2.default, { name: 'docsTabs', active: activeTab, onlyActive: true, props: component })
			});
		}
	}]);

	return ReactComponent;
}(_react.Component);

ReactComponent.propTypes = {
	component: _propTypes2.default.object.isRequired
};
ReactComponent.contextTypes = {
	config: _propTypes2.default.object.isRequired,
	isolatedComponent: _propTypes2.default.bool
};
exports.default = ReactComponent;