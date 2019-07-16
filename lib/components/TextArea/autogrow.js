!(function(t, e) {
  for (var o in e) t[o] = e[o];
})(
  exports,
  (function(t) {
    function e(n) {
      if (o[n]) return o[n].exports;
      var r = (o[n] = { i: n, l: !1, exports: {} });
      return t[n].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
    }
    var o = {};
    return (
      (e.m = t),
      (e.c = o),
      (e.d = function(t, o, n) {
        e.o(t, o) || Object.defineProperty(t, o, { configurable: !1, enumerable: !0, get: n });
      }),
      (e.n = function(t) {
        var o =
          t && t.__esModule
            ? function() {
                return t.default;
              }
            : function() {
                return t;
              };
        return e.d(o, 'a', o), o;
      }),
      (e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (e.p = ''),
      e((e.s = 33))
    );
  })({
    33: function(t, e, o) {
      'use strict';
      var n, r, i;
      'function' == typeof Symbol && Symbol.iterator;
      !(function(o, u) {
        (r = []),
          (n = u),
          void 0 !== (i = 'function' == typeof n ? n.apply(e, r) : n) && (t.exports = i);
      })(0, function() {
        return function(t, e) {
          var o = this;
          void 0 === e && (e = 999),
            (o.getOffset = function(t) {
              for (
                var e = window.getComputedStyle(t, null),
                  o = ['paddingTop', 'paddingBottom'],
                  n = 0,
                  r = 0;
                r < o.length;
                r++
              )
                n += parseInt(e[o[r]]);
              return n;
            }),
            (o.autogrowFn = function() {
              var e = 0,
                r = !1;
              return (
                t.scrollHeight - n > o.maxAllowedHeight
                  ? ((t.style.overflowY = 'scroll'), (e = o.maxAllowedHeight))
                  : ((t.style.overflowY = 'hidden'),
                    (t.style.height = 'auto'),
                    (e = t.scrollHeight - n),
                    (r = !0)),
                (t.style.height = e + 'px'),
                r
              );
            }),
            (o.destroy = function() {
              t.removeEventListener('input', o.autogrowFn);
            });
          var n = o.getOffset(t);
          (o.rows = t.rows || 1),
            (o.lineHeight = t.scrollHeight / o.rows - n / o.rows),
            (o.maxAllowedHeight = o.lineHeight * e - n),
            t.addEventListener('input', o.autogrowFn);
        };
      });
    },
  })
);
