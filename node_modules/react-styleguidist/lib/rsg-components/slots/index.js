'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DOCS_TAB_USAGE = exports.EXAMPLE_TAB_CODE_EDITOR = undefined;

var _Editor = require('rsg-components/Editor');

var _Editor2 = _interopRequireDefault(_Editor);

var _Usage = require('rsg-components/Usage');

var _Usage2 = _interopRequireDefault(_Usage);

var _IsolateButton = require('./IsolateButton');

var _IsolateButton2 = _interopRequireDefault(_IsolateButton);

var _CodeTabButton = require('./CodeTabButton');

var _CodeTabButton2 = _interopRequireDefault(_CodeTabButton);

var _UsageTabButton = require('./UsageTabButton');

var _UsageTabButton2 = _interopRequireDefault(_UsageTabButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EXAMPLE_TAB_CODE_EDITOR = exports.EXAMPLE_TAB_CODE_EDITOR = 'rsg-code-editor';
var DOCS_TAB_USAGE = exports.DOCS_TAB_USAGE = 'rsg-usage';

var toolbar = [_IsolateButton2.default];

exports.default = {
	sectionToolbar: toolbar,
	componentToolbar: toolbar,
	exampleToolbar: toolbar,
	exampleTabButtons: [{
		id: EXAMPLE_TAB_CODE_EDITOR,
		render: _CodeTabButton2.default
	}],
	exampleTabs: [{
		id: EXAMPLE_TAB_CODE_EDITOR,
		render: _Editor2.default
	}],
	docsTabButtons: [{
		id: DOCS_TAB_USAGE,
		render: _UsageTabButton2.default
	}],
	docsTabs: [{
		id: DOCS_TAB_USAGE,
		render: _Usage2.default
	}]
};