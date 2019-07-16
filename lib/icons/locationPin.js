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
      e((e.s = 117))
    );
  })({
    117: function(t, e, r) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      e.default =
        '<svg width="13px" height="18px" viewBox="0 0 13 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1"><g transform="translate(-18.000000, -16.000000)"><g transform="translate(18.000000, 16.000000)"><path d="M6.3,0 C2.817,0 0,2.817 0,6.3 C0,11.025 6.3,18 6.3,18 C6.3,18 12.6,11.025 12.6,6.3 C12.6,2.817 9.783,0 6.3,0 Z M6.3,8.55 C5.058,8.55 4.05,7.542 4.05,6.3 C4.05,5.058 5.058,4.05 6.3,4.05 C7.542,4.05 8.55,5.058 8.55,6.3 C8.55,7.542 7.542,8.55 6.3,8.55 Z" id="Shape"></path></g></g></g></svg>';
    },
  })
);
