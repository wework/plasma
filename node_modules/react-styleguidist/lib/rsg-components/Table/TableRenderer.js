'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.styles = undefined;
exports.TableRenderer = TableRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(_ref) {
	var space = _ref.space,
	    color = _ref.color,
	    fontFamily = _ref.fontFamily,
	    fontSize = _ref.fontSize;
	return {
		table: {
			width: '100%',
			borderCollapse: 'collapse',
			marginBottom: space[4]
		},
		tableHead: {
			borderBottom: [[1, color.border, 'solid']]
		},
		cellHeading: {
			color: color.base,
			paddingRight: space[2],
			paddingBottom: space[1],
			textAlign: 'left',
			fontFamily: fontFamily.base,
			fontWeight: 'bold',
			fontSize: fontSize.small,
			whiteSpace: 'nowrap'
		},
		cell: {
			color: color.base,
			paddingRight: space[2],
			paddingTop: space[1],
			paddingBottom: space[1],
			verticalAlign: 'top',
			fontFamily: fontFamily.base,
			fontSize: fontSize.small,
			'&:last-child': {
				isolate: false,
				width: '99%',
				paddingRight: 0
			},
			'& p:last-child': {
				isolate: false,
				marginBottom: 0
			}
		}
	};
};

function TableRenderer(_ref2) {
	var classes = _ref2.classes,
	    columns = _ref2.columns,
	    rows = _ref2.rows,
	    getRowKey = _ref2.getRowKey;

	return _react2.default.createElement(
		'table',
		{ className: classes.table },
		_react2.default.createElement(
			'thead',
			{ className: classes.tableHead },
			_react2.default.createElement(
				'tr',
				null,
				columns.map(function (_ref3) {
					var caption = _ref3.caption;
					return _react2.default.createElement(
						'th',
						{ key: caption, className: classes.cellHeading },
						caption
					);
				})
			)
		),
		_react2.default.createElement(
			'tbody',
			null,
			rows.map(function (row) {
				return _react2.default.createElement(
					'tr',
					{ key: getRowKey(row) },
					columns.map(function (_ref4, index) {
						var render = _ref4.render;
						return _react2.default.createElement(
							'td',
							{ key: index, className: classes.cell },
							render(row)
						);
					})
				);
			})
		)
	);
}

TableRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	columns: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		caption: _propTypes2.default.string.isRequired,
		render: _propTypes2.default.func.isRequired
	})).isRequired,
	rows: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
	getRowKey: _propTypes2.default.func.isRequired
};

exports.default = (0, _Styled2.default)(styles)(TableRenderer);