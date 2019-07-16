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
      t((t.s = 94))
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
    33: function(e, t, r) {
      'use strict';
      var n, o, a;
      'function' == typeof Symbol && Symbol.iterator;
      !(function(r, u) {
        (o = []),
          (n = u),
          void 0 !== (a = 'function' == typeof n ? n.apply(t, o) : n) && (e.exports = a);
      })(0, function() {
        return function(e, t) {
          var r = this;
          void 0 === t && (t = 999),
            (r.getOffset = function(e) {
              for (
                var t = window.getComputedStyle(e, null),
                  r = ['paddingTop', 'paddingBottom'],
                  n = 0,
                  o = 0;
                o < r.length;
                o++
              )
                n += parseInt(t[r[o]]);
              return n;
            }),
            (r.autogrowFn = function() {
              var t = 0,
                o = !1;
              return (
                e.scrollHeight - n > r.maxAllowedHeight
                  ? ((e.style.overflowY = 'scroll'), (t = r.maxAllowedHeight))
                  : ((e.style.overflowY = 'hidden'),
                    (e.style.height = 'auto'),
                    (t = e.scrollHeight - n),
                    (o = !0)),
                (e.style.height = t + 'px'),
                o
              );
            }),
            (r.destroy = function() {
              e.removeEventListener('input', r.autogrowFn);
            });
          var n = r.getOffset(e);
          (r.rows = e.rows || 1),
            (r.lineHeight = e.scrollHeight / r.rows - n / r.rows),
            (r.maxAllowedHeight = r.lineHeight * t - n),
            e.addEventListener('input', r.autogrowFn);
        };
      });
    },
    94: function(e, t, r) {
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
      var l =
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
        c = r(2),
        p = r(0),
        f = n(p),
        d = r(3),
        g = n(d),
        w = r(1),
        h = r(33),
        y = n(h),
        m = r(95),
        b = n(m),
        v = (function(e) {
          function t() {
            var e, r, n, o;
            a(this, t);
            for (var i = arguments.length, l = Array(i), s = 0; s < i; s++) l[s] = arguments[s];
            return (
              (r = n = u(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l))
              )),
              (n.onRef = function(e) {
                e && n.props.autosize && (n.autogrow = new y.default(e));
              }),
              (o = r),
              u(n, o)
            );
          }
          return (
            i(t, e),
            s(t, [
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.autogrow && this.autogrow.destroy();
                },
              },
              {
                key: 'render',
                value: function() {
                  var e,
                    t,
                    r = this.props,
                    n = r.data,
                    a = r.disabled,
                    u = r.error,
                    i = r.maxLength,
                    s = r.onBlur,
                    p = r.onChange,
                    d = r.onFocus,
                    h = r.placeholder,
                    y = r.rows,
                    m = r.size,
                    v = r.value,
                    x = (0, g.default)(
                      b.default.wrapper,
                      ((e = {}),
                      o(e, b.default.wrapperDisabled, a),
                      o(e, b.default.wrapperError, u),
                      o(e, b.default.wrapperLarge, 'LARGE' === (0, c.toUpper)(m)),
                      e)
                    ),
                    _ = (0, g.default)(
                      b.default.textarea,
                      ((t = {}),
                      o(t, b.default.disabled, a),
                      o(t, b.default.large, 'LARGE' === (0, c.toUpper)(m)),
                      t)
                    );
                  return f.default.createElement(
                    'div',
                    l({ className: x }, (0, w.getDataAttrs)(n)),
                    f.default.createElement('textarea', {
                      ref: this.onRef,
                      className: _,
                      disabled: a,
                      onChange: p,
                      rows: y,
                      onFocus: (function(e) {
                        function t(t) {
                          return e.apply(this, arguments);
                        }
                        return (
                          (t.toString = function() {
                            return e.toString();
                          }),
                          t
                        );
                      })(function(e) {
                        (e.target.parentElement.className += ' ' + b.default.wrapperFocused),
                          d && d();
                      }),
                      onBlur: (function(e) {
                        function t(t) {
                          return e.apply(this, arguments);
                        }
                        return (
                          (t.toString = function() {
                            return e.toString();
                          }),
                          t
                        );
                      })(function(e) {
                        e.target.parentElement.classList.remove(b.default.wrapperFocused), s && s();
                      }),
                      placeholder: h,
                      value: v,
                      maxLength: i,
                    })
                  );
                },
              },
            ]),
            t
          );
        })(p.Component);
      (v.defaultProps = { placeholder: '', rows: '3', autosize: !0 }),
        (v.displayName = 'Plasma@TextArea'),
        (t.default = v);
    },
    95: function(e, t) {
      e.exports = {
        textarea: 'src-components-TextArea-textarea__3-ToC',
        clearfix: 'src-components-TextArea-clearfix__1Bs85',
        wrapper: 'src-components-TextArea-wrapper__3LRph',
        wrapperFocused: 'src-components-TextArea-wrapperFocused__3s80H',
        wrapperDisabled: 'src-components-TextArea-wrapperDisabled__29toe',
        wrapperLarge: 'src-components-TextArea-wrapperLarge__3XY72',
        wrapperError: 'src-components-TextArea-wrapperError__1dAKr',
        disabled: 'src-components-TextArea-disabled__1F3e9',
        large: 'src-components-TextArea-large__KT5-A',
      };
    },
  })
);
