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
      t((t.s = 103))
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
    103: function(e, t, r) {
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
      var s =
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
        l = r(0),
        p = n(l),
        f = r(3),
        y = n(f),
        d = r(2),
        b = r(1),
        h = r(104),
        v = n(h),
        _ = (function(e) {
          function t() {
            return (
              a(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            i(t, e),
            c(t, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = (0, y.default)(
                      v.default.wrapper,
                      o({}, v.default.vertical, this.props.vertical)
                    ),
                    r = this.props.children;
                  return (
                    (0, d.isArray)(this.props.children) ||
                      (r = (0, d.toArray)(this.props.children)),
                    p.default.createElement(
                      'div',
                      s({}, (0, b.getDataAttrs)(this.props.data), {
                        className: t,
                        style: this.props.style,
                      }),
                      (0, d.map)(r, function(t, r) {
                        var n = {};
                        return (
                          'shrink' === e.props.layout[r]
                            ? (n.flexShrink = '1')
                            : 'grow' === e.props.layout[r]
                            ? (n.flexGrow = '1')
                            : e.props.layout[r]
                            ? (n.flexBasis = e.props.layout[r])
                            : (n.flexBasis = 100 / e.props.children.length + '%'),
                          p.default.createElement('div', { key: r, style: n }, t)
                        );
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(p.default.Component);
      (_.defaultProps = { children: [], layout: [] }),
        (_.displayName = 'Plasma@Group'),
        (t.default = _);
    },
    104: function(e, t) {
      e.exports = {
        clearfix: 'src-components-layout-Group-clearfix__1vRuS',
        wrapper: 'src-components-layout-Group-wrapper__rAJcp',
        vertical: 'src-components-layout-Group-vertical__2YB0f',
      };
    },
    2: function(e, t) {
      e.exports = require('lodash');
    },
    3: function(e, t) {
      e.exports = require('classnames');
    },
  })
);
