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
      t((t.s = 105))
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
    105: function(e, t, r) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function a(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function l(e, t) {
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
        u = (function() {
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
        i = r(0),
        s = n(i),
        p = r(1),
        f = r(106),
        d = n(f),
        y = (function(e) {
          function t() {
            var e, r, n, l;
            o(this, t);
            for (var c = arguments.length, u = Array(c), i = 0; i < c; i++) u[i] = arguments[i];
            return (
              (r = n = a(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))
              )),
              (n.handleScroll = function(e) {
                n.props.onScroll(e);
              }),
              (l = r),
              a(n, l)
            );
          }
          return (
            l(t, e),
            u(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.wrapper && this.wrapper.addEventListener('scroll', this.handleScroll);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  this.wrapper && this.wrapper.removeEventListener('scroll', this.handleScroll);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return s.default.createElement(
                    'div',
                    c({}, (0, p.getDataAttrs)(this.props.data), {
                      style: this.props.style,
                      className: d.default.wrapper,
                      ref: function(t) {
                        e.wrapper = t;
                      },
                    }),
                    s.default.createElement(
                      'div',
                      { className: d.default.content },
                      this.props.children
                    )
                  );
                },
              },
            ]),
            t
          );
        })(s.default.Component);
      (y.defaultProps = { children: null, onScroll: function() {} }),
        (y.displayName = 'Plasma@HorizontalScroll'),
        (t.default = y);
    },
    106: function(e, t) {
      e.exports = {
        clearfix: 'src-components-layout-HorizontalScroll-clearfix__3PMJ5',
        wrapper: 'src-components-layout-HorizontalScroll-wrapper__2d7gj',
        content: 'src-components-layout-HorizontalScroll-content__4IZzR',
      };
    },
    2: function(e, t) {
      e.exports = require('lodash');
    },
  })
);
