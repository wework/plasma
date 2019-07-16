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
      t((t.s = 80))
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
    80: function(e, t, r) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t, r) {
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
      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function u(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function i(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var c =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        s = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        f = r(0),
        p = n(f),
        l = r(3),
        y = n(l),
        d = r(81),
        b = n(d),
        _ = r(1),
        h = { PRIMARY: 'primary', SECONDARY: 'secondary' },
        m = (function(e) {
          function t() {
            return (
              a(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            i(t, e),
            s(t, [
              {
                key: 'render',
                value: function() {
                  var e,
                    t = this.props,
                    r = t.large,
                    n = t.type,
                    a = (0, y.default)(
                      b.default.wrapper,
                      ((e = {}),
                      o(e, b.default.large, r),
                      o(e, b.default.primary, n === h.PRIMARY),
                      o(e, b.default.secondary, n === h.SECONDARY),
                      e)
                    );
                  return p.default.createElement(
                    'div',
                    c({}, (0, _.getDataAttrs)(this.props.data), {
                      className: a,
                      style: this.props.style,
                    }),
                    this.props.children
                  );
                },
              },
            ]),
            t
          );
        })(p.default.Component);
      (m.defaultProps = { style: { width: 200, height: 'auto' } }),
        (m.displayName = 'Plasma@Text'),
        (t.default = m);
    },
    81: function(e, t) {
      e.exports = {
        wrapper: 'src-components-Text-wrapper__2iE-C',
        clearfix: 'src-components-Text-clearfix__3fO6H',
        large: 'src-components-Text-large__1NrVV',
        primary: 'src-components-Text-primary__2rUI-',
        secondary: 'src-components-Text-secondary__2O7IS',
      };
    },
  })
);
