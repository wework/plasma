'use strict';

const mimes = require('./mimes.json');

function getMime(path) {
  const extension = path.split('.').pop().toLowerCase();
  const mime = mimes[extension];
  if (!mime) {
    throw new Error('Unsupported type of image of extension ' + extension + ': ' + path);
  }
  return mime;
}

module.exports = function base64ImageLoader(content) {
  this.cacheable && this.cacheable();
  return `module.exports = "data:${getMime(this.resourcePath)};base64,${content.toString('base64')}"`;
};
module.exports.raw = true;
