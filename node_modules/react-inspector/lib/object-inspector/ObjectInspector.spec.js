'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _ObjectInspector = require('./ObjectInspector');

var _ObjectInspector2 = _interopRequireDefault(_ObjectInspector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderer = _reactAddonsTestUtils2.default.createRenderer();

var defaultProps = {};

describe('ObjectInspector', function () {
  beforeEach(function () {});

  it('should render', function () {
    renderer.render(_react2.default.createElement(_ObjectInspector2.default, { theme: 'testvalue' }));
    var tree = renderer.getRenderOutput();
    (0, _expect2.default)(tree.type).toBeA('function');
    (0, _expect2.default)(tree.props.theme).toEqual('testvalue');
  });

  it('passes `nodeRenderer` prop to <TreeView/>', function () {
    // Test that a custom `nodeRenderer` props is passed to <TreeView/>
    var nodeRenderer = function nodeRenderer() {
      return null;
    };
    renderer.render(_react2.default.createElement(_ObjectInspector2.default, { nodeRenderer: nodeRenderer }));
    var tree = renderer.getRenderOutput();

    (0, _expect2.default)(tree.props.children.type).toBeA('function');
    (0, _expect2.default)(tree.props.children.props.nodeRenderer).toEqual(nodeRenderer);
  });
});