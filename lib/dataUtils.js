!(function(t, e) {
  for (var r in e) t[r] = e[r];
})(
  exports,
  (function(t) {
    function e(n) {
      if (r[n]) return r[n].exports;
      var o = (r[n] = { i: n, l: !1, exports: {} });
      return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    var r = {};
    return (
      (e.m = t),
      (e.c = r),
      (e.d = function(t, r, n) {
        e.o(t, r) || Object.defineProperty(t, r, { configurable: !1, enumerable: !0, get: n });
      }),
      (e.n = function(t) {
        var r =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return e.d(r, 'a', r), r;
      }),
      (e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (e.p = ''),
      e((e.s = 1))
    );
  })([
    ,
    function(t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.getDataAttrs = void 0);
      var n = r(2);
      e.getDataAttrs = function(t) {
        return t
          ? (0, n.mapKeys)(t, function(t, e) {
              return 'data-' + (0, n.kebabCase)(e);
            })
          : {};
      };
    },
    function(t, e) {
      t.exports = require('lodash');
    },
  ])
);
