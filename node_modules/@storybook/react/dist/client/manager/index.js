'use strict';

var _ui = require('@storybook/ui');

var _ui2 = _interopRequireDefault(_ui);

var _provider = require('./provider');

var _provider2 = _interopRequireDefault(_provider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global document */

var rootEl = document.getElementById('root');
(0, _ui2.default)(rootEl, new _provider2.default());