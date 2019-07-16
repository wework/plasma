!(function(e, t) {
  for (var n in t) e[n] = t[n];
})(
  exports,
  (function(e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
      }),
      (t.n = function(e) {
        var n =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return t.d(n, 'a', n), n;
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ''),
      t((t.s = 20))
    );
  })({
    0: function(e, t) {
      e.exports = require('react');
    },
    1: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.getDataAttrs = void 0);
      var r = n(2);
      t.getDataAttrs = function(e) {
        return e
          ? (0, r.mapKeys)(e, function(e, t) {
              return 'data-' + (0, r.kebabCase)(t);
            })
          : {};
      };
    },
    2: function(e, t) {
      e.exports = require('lodash');
    },
    20: function(e, t, n) {
      'use strict';
      function r(e) {
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
      function s(e, t) {
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
      var u =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        c = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        l = n(0),
        i = r(l),
        f = n(3),
        p = r(f),
        d = n(26),
        b = r(d),
        y = n(1),
        m = (function(e) {
          function t() {
            return (
              o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            s(t, e),
            c(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.dotColor,
                    n = e.dotStyle;
                  return (
                    null != t && (n.backgroundColor = t),
                    i.default.createElement(
                      'div',
                      u({}, (0, y.getDataAttrs)(this.props.data), {
                        className: (0, p.default)(b.default.container, this.props.className),
                        style: this.props.style,
                      }),
                      i.default.createElement(
                        'div',
                        { className: b.default.spinner },
                        i.default.createElement('div', {
                          className: (0, p.default)(b.default.bounce2, this.props.dotClassName),
                          style: n,
                        }),
                        i.default.createElement('div', {
                          className: (0, p.default)(b.default.bounce3, this.props.dotClassName),
                          style: n,
                        }),
                        i.default.createElement('div', {
                          className: (0, p.default)(b.default.bounce1, this.props.dotClassName),
                          style: n,
                        })
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(i.default.Component);
      (m.defaultProps = { dotStyle: {} }), (m.displayName = 'Plasma@Loader'), (t.default = m);
    },
    26: function(e, t) {
      e.exports = {
        clearfix: 'src-components-Loader-clearfix__2u-pC',
        container: 'src-components-Loader-container__2NlKb',
        spinner: 'src-components-Loader-spinner__AzWJk',
        'sk-bouncedelay': 'src-components-Loader-sk-bouncedelay__3VHOa',
        bounce1: 'src-components-Loader-bounce1__3U_xa',
        bounce2: 'src-components-Loader-bounce2__16ySy',
        bounce3: 'src-components-Loader-bounce3__ayLpW',
      };
    },
    3: function(e, t) {
      e.exports = require('classnames');
    },
  })
);
