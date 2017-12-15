'use strict';

var ES = require('es-abstract/es2017');

var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || (Math.pow(2, 53) - 1);

// eslint-disable-next-line max-params, max-statements
var FlattenIntoArray = function FlattenIntoArray(target, original, source, sourceLen, start, depth) {
	var targetIndex = start;
	var sourceIndex = 0;

	/*
	var mapperFunction;
	if (arguments.length > 6) {
		mapperFunction = arguments[6];
	}
	*/

	while (sourceIndex < sourceLen) {
		var P = ES.ToString(sourceIndex);
		var exists = ES.HasProperty(source, P);
		if (exists) {
			var element = ES.Get(source, P);
			/*
			if (typeof mapperFunction !== 'undefined') {
				if (arguments.length <= 7) {
					throw new TypeError('Assertion failed: thisArg is required when mapperFunction is provided');
				}
				element = ES.Call(mapperFunction, arguments[7], [element, sourceIndex, original]);
			}
			*/
			var spreadable = ES.IsArray(element);
			if (spreadable && depth > 0) {
				var elementLen = ES.ToLength(ES.Get(element, 'length'));
				var nextIndex = FlattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1);
				targetIndex = nextIndex - 1;
			} else {
				if (targetIndex >= MAX_SAFE_INTEGER) {
					throw new TypeError('index too large');
				}
				ES.CreateDataPropertyOrThrow(target, ES.ToString(targetIndex), element);
			}
			targetIndex += 1;
		}
		sourceIndex += 1;
	}

	return targetIndex;
};

module.exports = function flatten() {
	var O = ES.ToObject(this);
	var depthNum = 1;
	if (arguments.length > 0 && typeof arguments[0] !== 'undefined') {
		depthNum = ES.ToInteger(arguments[0]);
	}

	var sourceLen = ES.ToLength(ES.Get(O, 'length'));

	var A = ES.ArraySpeciesCreate(O, 0);
	var nextIndex = FlattenIntoArray(A, O, O, sourceLen, 0, depthNum);
	ES.Set(A, 'length', nextIndex, true);
	return A;
};
