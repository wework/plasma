'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ComponentsList = require('rsg-components/ComponentsList');

var _ComponentsList2 = _interopRequireDefault(_ComponentsList);

var _TableOfContentsRenderer = require('rsg-components/TableOfContents/TableOfContentsRenderer');

var _TableOfContentsRenderer2 = _interopRequireDefault(_TableOfContentsRenderer);

var _utils = require('../../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableOfContents = function (_Component) {
	_inherits(TableOfContents, _Component);

	function TableOfContents() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TableOfContents);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableOfContents.__proto__ || Object.getPrototypeOf(TableOfContents)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			searchTerm: ''
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TableOfContents, [{
		key: 'renderLevel',
		value: function renderLevel(sections) {
			var _this2 = this;

			var items = sections.map(function (section) {
				var children = [].concat(_toConsumableArray(section.sections || []), _toConsumableArray(section.components || []));
				return Object.assign({}, section, {
					heading: !!section.name && children.length > 0,
					content: children.length > 0 && _this2.renderLevel(children)
				});
			});
			return _react2.default.createElement(_ComponentsList2.default, { items: items });
		}
	}, {
		key: 'renderSections',
		value: function renderSections() {
			var searchTerm = this.state.searchTerm;
			var sections = this.props.sections;

			// If there is only one section, we treat it as a root section
			// In this case the name of the section won't be rendered and it won't get left padding

			var firstLevel = sections.length === 1 ? sections[0].components : sections;
			var filtered = (0, _utils.filterSectionsByName)(firstLevel, searchTerm);

			return this.renderLevel(filtered);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var searchTerm = this.state.searchTerm;

			return _react2.default.createElement(
				_TableOfContentsRenderer2.default,
				{
					searchTerm: searchTerm,
					onSearchTermChange: function onSearchTermChange(searchTerm) {
						return _this3.setState({ searchTerm: searchTerm });
					}
				},
				this.renderSections()
			);
		}
	}]);

	return TableOfContents;
}(_react.Component);

TableOfContents.propTypes = {
	sections: _propTypes2.default.array.isRequired
};
exports.default = TableOfContents;