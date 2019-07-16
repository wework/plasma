!(function(e, r) {
  for (var t in r) e[t] = r[t];
})(
  exports,
  (function(e) {
    function r(a) {
      if (t[a]) return t[a].exports;
      var l = (t[a] = { i: a, l: !1, exports: {} });
      return e[a].call(l.exports, l, l.exports, r), (l.l = !0), l.exports;
    }
    var t = {};
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function(e, t, a) {
        r.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: a });
      }),
      (r.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return r.d(t, 'a', t), t;
      }),
      (r.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
      }),
      (r.p = ''),
      r((r.s = 107))
    );
  })({
    0: function(e, r) {
      e.exports = require('react');
    },
    1: function(e, r, t) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.getDataAttrs = void 0);
      var a = t(2);
      r.getDataAttrs = function(e) {
        return e
          ? (0, a.mapKeys)(e, function(e, r) {
              return 'data-' + (0, a.kebabCase)(r);
            })
          : {};
      };
    },
    107: function(e, r, t) {
      'use strict';
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(r, '__esModule', { value: !0 });
      var l =
          Object.assign ||
          function(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            }
            return e;
          },
        n = t(0),
        o = a(n),
        i = t(1),
        s = t(108),
        u = a(s),
        c = t(22),
        d = a(c),
        f = function(e) {
          var r = e.children,
            t = e.isDisabled,
            a = e.isRequired,
            n = e.label,
            s = e.data,
            c = e.displayError,
            f = e.errorMessage,
            p = e.style,
            b = n;
          return (
            a && (b += ' *'),
            o.default.createElement(
              'div',
              l({}, (0, i.getDataAttrs)(s), { className: u.default.wrapper, style: p }),
              o.default.createElement(d.default, { disabled: t }, b),
              o.default.createElement('div', { className: u.default.input }, r),
              c && f && o.default.createElement('div', { className: u.default.error }, f)
            )
          );
        };
      (f.defaultProps = { children: '', disabled: !1, label: '', style: {} }),
        (f.displayName = 'Plasma@FormField'),
        (r.default = f);
    },
    108: function(e, r) {
      e.exports = {
        clearfix: 'src-components-layout-FormField-clearfix__2JcJE',
        disabledWrapper: 'src-components-layout-FormField-disabledWrapper__nKBka',
        disabled: 'src-components-layout-FormField-disabled__3wGcs',
        wrapper: 'src-components-layout-FormField-wrapper__3rQr5',
        error: 'src-components-layout-FormField-error__2RjpE',
      };
    },
    2: function(e, r) {
      e.exports = require('lodash');
    },
    22: function(e, r, t) {
      'use strict';
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function n(e, r) {
        var t = {};
        for (var a in e)
          r.indexOf(a) >= 0 || (Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]));
        return t;
      }
      function o(e) {
        var r,
          t = e.children,
          a = e.className,
          o = e.data,
          s = e.disabled,
          c = e.htmlFor,
          p = e.inline,
          m = e.required,
          _ = e.text,
          v = n(e, [
            'children',
            'className',
            'data',
            'disabled',
            'htmlFor',
            'inline',
            'required',
            'text',
          ]),
          y = (0, d.default)(
            b.default.label,
            a,
            ((r = {}),
            l(r, b.default.labelInline, p),
            l(r, b.default.labelDisabled, s),
            l(r, b.default.labelRequired, m),
            r)
          );
        return u.default.createElement(
          'label',
          i({ className: y, htmlFor: c }, (0, f.getDataAttrs)(o), v),
          t || _
        );
      }
      Object.defineProperty(r, '__esModule', { value: !0 });
      var i =
          Object.assign ||
          function(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r];
              for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            }
            return e;
          },
        s = t(0),
        u = a(s),
        c = t(3),
        d = a(c),
        f = t(1),
        p = t(29),
        b = a(p);
      (o.displayName = 'Plasma@Label'), (r.default = o);
    },
    29: function(e, r) {
      e.exports = {
        label: 'src-components-Label-label__270Um',
        clearfix: 'src-components-Label-clearfix__Pj57p',
        labelInline: 'src-components-Label-labelInline__1qiIr',
        labelDisabled: 'src-components-Label-labelDisabled__1N114',
        labelRequired: 'src-components-Label-labelRequired__2ow0G',
      };
    },
    3: function(e, r) {
      e.exports = require('classnames');
    },
  })
);
