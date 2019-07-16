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
      t((t.s = 96))
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
    96: function(e, t, r) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = r(0),
        u = n(o),
        s = r(3),
        c = n(s),
        l = r(1),
        i = r(97),
        f = n(i),
        p = function(e) {
          var t = e.text,
            r = e.children,
            n = e.data,
            o = e.className,
            s = void 0 === o ? '' : o,
            i = (0, c.default)(f.default.tag, f.default.small, s);
          return u.default.createElement(
            'div',
            a({ className: i }, (0, l.getDataAttrs)(n)),
            u.default.createElement('span', null, t || r)
          );
        };
      (p.displayName = 'Plasma@Tag'), (t.default = p);
    },
    97: function(e, t) {
      e.exports = {
        clearfix: 'src-components-Tag-clearfix__1p3YO',
        tag: 'src-components-Tag-tag__2_nYd',
        small: 'src-components-Tag-small__1_iso',
      };
    },
  })
);
