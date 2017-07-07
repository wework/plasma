(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.Autogrow = factory();
  }
})(this, function() {
  return function(textarea, maxLines) {
    var self = this;

    if (maxLines === undefined) {
      maxLines = 999;
    }

    /**
     * Calculates the vertical padding of the element
     * @param textarea
     * @returns {number}
     */
    self.getOffset = function(textarea) {
      var style = window.getComputedStyle(textarea, null),
        props = ['paddingTop', 'paddingBottom'],
        offset = 0;
      // console.log(style);

      for (var i = 0; i < props.length; i++) {
        offset += parseInt(style[props[i]]);
      }
      return offset;
    };

    /**
     * Sets textarea height as exact height of content
     * @returns {boolean}
     */
    self.autogrowFn = function() {
      var newHeight = 0,
        hasGrown = false;
      console.log('scrollheight', textarea.scrollHeight);
      console.log('offset', offset);
      if ((textarea.scrollHeight - offset) > self.maxAllowedHeight) {
        textarea.style.overflowY = 'scroll';
        newHeight = self.maxAllowedHeight;
      } else {
        textarea.style.overflowY = 'hidden';
        textarea.style.height = 'auto';
        newHeight = textarea.scrollHeight - offset;
        hasGrown = true;
      }
      textarea.style.height = newHeight + 'px';
      return hasGrown;
    };

    var offset = self.getOffset(textarea);
    self.rows = textarea.rows || 1;
    self.lineHeight = (textarea.scrollHeight / self.rows) - (offset / self.rows);
    console.log('lineHeight', self.lineHeight);
    self.maxAllowedHeight = (self.lineHeight * maxLines) - offset;
    console.log('maxAllowedHeight', self.maxAllowedHeight);

    // Call autogrowFn() when textarea's value is changed
    textarea.addEventListener('input', self.autogrowFn);
  };
});
