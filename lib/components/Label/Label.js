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
      t((t.s = 22))
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
    22: function(e, t, r) {
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
      function l(e, t) {
        var r = {};
        for (var n in e)
          t.indexOf(n) >= 0 || (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
        return r;
      }
      function o(e) {
        var t,
          r = e.children,
          n = e.className,
          o = e.data,
          u = e.disabled,
          s = e.htmlFor,
          b = e.inline,
          m = e.required,
          _ = e.text,
          v = l(e, [
            'children',
            'className',
            'data',
            'disabled',
            'htmlFor',
            'inline',
            'required',
            'text',
          ]),
          x = (0, f.default)(
            p.default.label,
            n,
            ((t = {}),
            a(t, p.default.labelInline, b),
            a(t, p.default.labelDisabled, u),
            a(t, p.default.labelRequired, m),
            t)
          );
        return c.default.createElement(
          'label',
          i({ className: x, htmlFor: s }, (0, d.getDataAttrs)(o), v),
          r || _
        );
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
        f = n(s),
        d = r(1),
        b = r(29),
        p = n(b);
      (o.displayName = 'Plasma@Label'), (t.default = o);
    },
    29: function(e, t) {
      e.exports = {
        label: 'src-components-Label-label__270Um',
        clearfix: 'src-components-Label-clearfix__Pj57p',
        labelInline: 'src-components-Label-labelInline__1qiIr',
        labelDisabled: 'src-components-Label-labelDisabled__1N114',
        labelRequired: 'src-components-Label-labelRequired__2ow0G',
      };
    },
    3: function(e, t) {
      e.exports = require('classnames');
    },
  })
);
