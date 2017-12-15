'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _ObjectName = require('./ObjectName');

var _ObjectName2 = _interopRequireDefault(_ObjectName);

var _chromeLight = require('../styles/themes/chromeLight');

var _chromeLight2 = _interopRequireDefault(_chromeLight);

var _base = require('../styles/base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTheme = (0, _base2.default)(_chromeLight2.default);

var renderer = _reactAddonsTestUtils2.default.createRenderer();

var defaultProps = {};

describe('ObjectName', function () {
  beforeEach(function () {});

  it('should render', function () {
    renderer.render(_react2.default.createElement(_ObjectName2.default, { name: 'testvalue' }));
    var tree = renderer.getRenderOutput();

    (0, _expect2.default)(tree.type).toEqual('span');
  });

  it('should apply default theme', function () {
    renderer.render(_react2.default.createElement(_ObjectName2.default, { name: 'testvalue' }));
    var tree = renderer.getRenderOutput();

    (0, _expect2.default)(tree.props.style).toInclude(defaultTheme.ObjectName.base);
  });

  it('should apply dimming if `dimmed` prop is true', function () {
    renderer.render(_react2.default.createElement(_ObjectName2.default, { name: 'testvalue', dimmed: true }));
    var tree = renderer.getRenderOutput();

    (0, _expect2.default)(tree.props.style).toInclude(defaultTheme.ObjectName.dimmed);
  });

  it('should not apply dimming if `dimmed` prop is false', function () {
    renderer.render(_react2.default.createElement(_ObjectName2.default, { name: 'testvalue', dimmed: false }));
    var tree = renderer.getRenderOutput();

    (0, _expect2.default)(tree.props.style).toExclude(defaultTheme.ObjectName.dimmed);
  });

  it('Accepts and applies additional `style` prop', function () {
    // Test that a custom `style` props is passed and applied to <span/>
    var style = { color: 'blue' };
    renderer.render(_react2.default.createElement(_ObjectName2.default, { styles: style }));
    var tree = renderer.getRenderOutput();

    (0, _expect2.default)(tree.props.style.color).toEqual('blue');
  });
});