!(function(e, t) {
  for (var r in t) e[r] = t[r];
})(
  exports,
  (function(e) {
    function t(n) {
      if (r[n]) return r[n].exports;
      var a = (r[n] = { i: n, l: !1, exports: {} });
      return e[n].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
    }
    var r = {};
    return (
      (t.m = e),
      (t.c = r),
      (t.d = function(e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
      }),
      (t.n = function(e) {
        var r =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return t.d(r, 'a', r), r;
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ''),
      t((t.s = 65))
    );
  })({
    0: function(e, t) {
      e.exports = require('react');
    },
    1: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.getDataAttrs = void 0);
      var n = r(2);
      t.getDataAttrs = function(e) {
        return e
          ? (0, n.mapKeys)(e, function(e, t) {
              return 'data-' + (0, n.kebabCase)(t);
            })
          : {};
      };
    },
    2: function(e, t) {
      e.exports = require('lodash');
    },
    3: function(e, t) {
      e.exports = require('classnames');
    },
    65: function(e, t, r) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function o(e, t) {
        var r = {};
        for (var n in e)
          t.indexOf(n) >= 0 || (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
        return r;
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        u = r(0),
        c = n(u),
        s = r(3),
        l = n(s),
        f = r(1),
        d = r(66),
        p = n(d),
        b = function(e) {
          var t,
            r = e.children,
            n = e.className,
            u = e.data,
            s = e.disabled,
            d = e.error,
            b = e.text,
            v = o(e, ['children', 'className', 'data', 'disabled', 'error', 'text']),
            h = (0, l.default)(
              p.default.hint,
              n,
              ((t = {}), a(t, p.default.hintDisabled, s), a(t, p.default.hintError, d), t)
            );
          return c.default.createElement(
            'div',
            i({ className: h }, (0, f.getDataAttrs)(u), v),
            r || b
          );
        };
      (b.displayName = 'Plasma@Hint'), (t.default = b);
    },
    66: function(e, t) {
      e.exports = {
        hint: 'src-components-Hint-hint__16Jld',
        clearfix: 'src-components-Hint-clearfix__2y76p',
        hintDisabled: 'src-components-Hint-hintDisabled__1WufE',
        hintError: 'src-components-Hint-hintError__202Gj',
      };
    },
  })
);
