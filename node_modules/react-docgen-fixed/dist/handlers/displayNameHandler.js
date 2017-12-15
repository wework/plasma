'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = displayNameHandler;

var _getMemberValuePath = require('../utils/getMemberValuePath');

var _getMemberValuePath2 = _interopRequireDefault(_getMemberValuePath);

var _recast = require('recast');

var _recast2 = _interopRequireDefault(_recast);

var _resolveToValue = require('../utils/resolveToValue');

var _resolveToValue2 = _interopRequireDefault(_resolveToValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 *
 */

var types = _recast2.default.types.namedTypes;
function displayNameHandler(documentation, path) {
  var displayNamePath = (0, _getMemberValuePath2.default)(path, 'displayName');
  if (!displayNamePath) {
    return;
  }
  displayNamePath = (0, _resolveToValue2.default)(displayNamePath);
  if (!displayNamePath || !types.Literal.check(displayNamePath.node)) {
    return;
  }
  documentation.set('displayName', displayNamePath.node.value);
}