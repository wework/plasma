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
      t((t.s = 82))
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
    82: function(e, t, r) {
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
        var r = {};
        for (var n in e)
          t.indexOf(n) >= 0 || (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
        return r;
      }
      function u(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function p(e, t) {
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
        l = n(f),
        d = r(3),
        b = n(d),
        x = r(1),
        y = r(83),
        _ = n(y),
        m = (function(e) {
          function t() {
            return (
              u(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            p(t, e),
            s(t, [
              {
                key: 'render',
                value: function() {
                  var e,
                    t = this.props,
                    r = t.className,
                    n = t.disabled,
                    u = t.error,
                    i = t.data,
                    p = t.prefix,
                    s = t.suffix,
                    f = t.type,
                    d = a(t, [
                      'className',
                      'disabled',
                      'error',
                      'data',
                      'prefix',
                      'suffix',
                      'type',
                    ]),
                    y = f || 'text',
                    m = (0, b.default)(
                      _.default.wrapper,
                      r,
                      ((e = {}),
                      o(e, _.default.wrapperDisabled, n),
                      o(e, _.default.wrapperError, u),
                      e)
                    );
                  return l.default.createElement(
                    'div',
                    c({}, (0, x.getDataAttrs)(i), { className: m }),
                    p && l.default.createElement('div', { className: _.default.prefix }, p),
                    l.default.createElement(
                      'input',
                      c({ className: _.default.input, disabled: n, type: y }, d)
                    ),
                    s && l.default.createElement('div', { className: _.default.suffix }, s)
                  );
                },
              },
            ]),
            t
          );
        })(f.Component);
      (m.defaultProps = { placeholder: 'Type something...' }),
        (m.displayName = 'Plasma@TextInput'),
        (t.default = m);
    },
    83: function(e, t) {
      e.exports = {
        wrapper: 'src-components-TextInput-wrapper__lq6pB',
        input: 'src-components-TextInput-input__2XPTx',
        clearfix: 'src-components-TextInput-clearfix__2exBy',
        wrapperDisabled: 'src-components-TextInput-wrapperDisabled__30qE3',
        wrapperError: 'src-components-TextInput-wrapperError__2D-Kv',
        prefix: 'src-components-TextInput-prefix__CMqS_',
        suffix: 'src-components-TextInput-suffix__2naE6',
      };
    },
  })
);
