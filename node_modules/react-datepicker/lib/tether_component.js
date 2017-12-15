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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tether = require('tether');

var _tether2 = _interopRequireDefault(_tether);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function childrenPropType(_ref, propName, componentName) {
  var children = _ref.children;

  var childCount = _react2.default.Children.count(children);
  if (childCount <= 0) {
    return new Error(componentName + ' expects at least one child to use as the target element.');
  } else if (childCount > 2) {
    return new Error('Only a max of two children allowed in ' + componentName + '.');
  }
}

var attachmentPositions = ['top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'];

var TetherComponent = function (_React$Component) {
  _inherits(TetherComponent, _React$Component);

  function TetherComponent() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, TetherComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = TetherComponent.__proto__ || Object.getPrototypeOf(TetherComponent)).call.apply(_ref2, [this].concat(args))), _this), _this.disable = function () {
      return _this._tether.disable();
    }, _this.enable = function () {
      return _this._tether.enable();
    }, _this.position = function () {
      return _this._tether.position();
    }, _this._destroy = function () {
      if (_this._elementParentNode) {
        _reactDom2.default.unmountComponentAtNode(_this._elementParentNode);
        _this._elementParentNode.parentNode.removeChild(_this._elementParentNode);
      }

      if (_this._tether) {
        _this._tether.destroy();
      }

      _this._elementParentNode = null;
      _this._tether = null;
    }, _this._update = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          renderElementTag = _this$props.renderElementTag,
          renderElementTo = _this$props.renderElementTo;

      var elementComponent = children[1];

      // if no element component provided, bail out
      if (!elementComponent) {
        // destroy Tether elements if they have been created
        if (_this._tether) {
          _this._destroy();
        }
        return;
      }

      // create element node container if it hasn't been yet
      if (!_this._elementParentNode) {
        // create a node that we can stick our content Component in
        _this._elementParentNode = document.createElement(renderElementTag);

        // append node to the end of the body
        var renderTo = renderElementTo || document.body;
        renderTo.appendChild(_this._elementParentNode);
      }

      // render element component into the DOM
      _reactDom2.default.unstable_renderSubtreeIntoContainer(_this, elementComponent, _this._elementParentNode, function () {
        // don't update Tether until the subtree has finished rendering
        _this._updateTether();
      });
    }, _this._updateTether = function () {
      var _this$props2 = _this.props,
          renderElementTag = _this$props2.renderElementTag,
          renderElementTo = _this$props2.renderElementTo,
          options = _objectWithoutProperties(_this$props2, ['renderElementTag', 'renderElementTo']); // eslint-disable-line no-unused-vars


      var tetherOptions = _extends({
        target: _this._targetNode,
        element: _this._elementParentNode
      }, options);

      if (!_this._tether) {
        _this._tether = new _tether2.default(tetherOptions);
      } else {
        _this._tether.setOptions(tetherOptions);
      }

      _this._tether.position();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TetherComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._targetNode = _reactDom2.default.findDOMNode(this);
      this._update();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      var firstChild = null;

      // we use forEach because the second child could be null
      // causing children to not be an array
      _react2.default.Children.forEach(children, function (child, index) {
        if (index === 0) {
          firstChild = child;
          return false;
        }
      });

      return firstChild;
    }
  }]);

  return TetherComponent;
}(_react2.default.Component);

TetherComponent.propTypes = {
  attachment: _propTypes2.default.oneOf(attachmentPositions).isRequired,
  children: childrenPropType,
  className: _propTypes2.default.string,
  classPrefix: _propTypes2.default.string,
  classes: _propTypes2.default.object,
  constraints: _propTypes2.default.array,
  enabled: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  offset: _propTypes2.default.string,
  optimizations: _propTypes2.default.object,
  renderElementTag: _propTypes2.default.string,
  renderElementTo: _propTypes2.default.any,
  style: _propTypes2.default.object,
  targetAttachment: _propTypes2.default.oneOf(attachmentPositions),
  targetModifier: _propTypes2.default.string,
  targetOffset: _propTypes2.default.string
};
TetherComponent.defaultProps = {
  renderElementTag: 'div',
  renderElementTo: null
};
exports.default = TetherComponent;
