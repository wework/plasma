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
      t((t.s = 67))
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
    67: function(e, t, r) {
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
      function u(e, t) {
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
      var i =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        c = (function() {
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
        s = r(0),
        l = n(s),
        f = r(3),
        p = n(f),
        d = r(68),
        y = n(d),
        b = r(1),
        g = 'https://cdn.spacetelescope.org/archives/images/screen/s82e5407.jpg',
        h = (function(e) {
          function t() {
            var e, r, n, u;
            o(this, t);
            for (var i = arguments.length, c = Array(i), s = 0; s < i; s++) c[s] = arguments[s];
            return (
              (r = n = a(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))
              )),
              (n.state = { errored: !1 }),
              (n.handleError = function() {
                n.setState({ errored: !0 });
              }),
              (u = r),
              a(n, u)
            );
          }
          return (
            u(t, e),
            c(t, [
              {
                key: 'getImageUrl',
                value: function() {
                  var e = this.props,
                    t = e.src,
                    r = e.fallback;
                  return this.state.errored || !t ? r : t;
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.className,
                    r = e.data,
                    n = e.style,
                    o = e.altText,
                    a = e.imageStyle,
                    u = e.onClick,
                    c = e.onLoad,
                    s = (0, p.default)(y.default.image, t);
                  return l.default.createElement(
                    'div',
                    i({}, (0, b.getDataAttrs)(r), { style: n }),
                    l.default.createElement('img', {
                      alt: o,
                      className: s,
                      src: this.getImageUrl(),
                      style: a,
                      onError: this.handleError,
                      onClick: u,
                      onLoad: c,
                    })
                  );
                },
              },
            ]),
            t
          );
        })(l.default.Component);
      (h.defaultProps = {
        style: { width: 200, height: 'auto' },
        src: g,
        fallback: g,
        altText: 'Image',
      }),
        (h.displayName = 'Plasma@Image'),
        (t.default = h);
    },
    68: function(e, t) {
      e.exports = { image: 'src-components-Image-image__213Z-' };
    },
  })
);
