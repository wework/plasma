!(function(e, t) {
  for (var r in t) e[r] = t[r];
})(
  exports,
  (function(e) {
    function t(n) {
      if (r[n]) return r[n].exports;
      var o = (r[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
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
      t((t.s = 5))
    );
  })([
    function(e, t) {
      e.exports = require('react');
    },
    function(e, t, r) {
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
    function(e, t) {
      e.exports = require('lodash');
    },
    ,
    ,
    function(e, t, r) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        a = r(0),
        u = n(a),
        c = r(1),
        s = r(7),
        i = n(s),
        l = function(e) {
          var t = e.icon,
            r = e.color,
            n = e.data;
          return u.default.createElement(
            'div',
            o(
              {
                className: i.default.wrapper,
                style: { fill: r },
                dangerouslySetInnerHTML: { __html: t },
              },
              (0, c.getDataAttrs)(n)
            )
          );
        };
      (l.defaultProps = { color: '#000', size: 16 }),
        (l.displayName = 'Plasma@Icon'),
        (t.default = l);
    },
    ,
    function(e, t) {
      e.exports = {
        clearfix: 'src-components-Icon-clearfix__3zhE-',
        wrapper: 'src-components-Icon-wrapper__1y5Fo',
      };
    },
  ])
);
