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
      t((t.s = 101))
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
    10: function(e, t) {
      e.exports = {
        header1: 'src-components-Header-header1__1s1ty',
        header2: 'src-components-Header-header2__2fFqm',
        header3: 'src-components-Header-header3__2PtsS',
        header4: 'src-components-Header-header4__11ivh',
        header5: 'src-components-Header-header5__2EQzv',
        header6: 'src-components-Header-header6__NYIWL',
        clearfix: 'src-components-Header-clearfix__2NdLd',
        invert: 'src-components-Header-invert__rioxF',
        rule: 'src-components-Header-rule__1ZAN8',
        noMargin: 'src-components-Header-noMargin__3i6cr',
      };
    },
    101: function(e, t, r) {
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
      var c =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        i = (function() {
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
        f = r(9),
        p = n(f),
        d = r(1),
        h = r(102),
        _ = n(h),
        b = (function(e) {
          function t() {
            return (
              o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            u(t, e),
            i(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.title,
                    r = e.children,
                    n = e.actions,
                    o = e.breadcrumb;
                  return l.default.createElement(
                    'div',
                    c({ className: _.default.wrapper }, (0, d.getDataAttrs)(this.props.data)),
                    l.default.createElement(
                      'div',
                      { className: _.default.content },
                      o && l.default.createElement('div', { className: _.default.breadcrumb }, o),
                      (t || n) &&
                        l.default.createElement(
                          'div',
                          { className: _.default.top },
                          t && l.default.createElement(p.default, { h2: !0, noMargin: !0 }, t),
                          n &&
                            l.default.createElement(
                              'div',
                              { className: _.default.pageActions },
                              n.map(function(e) {
                                return e;
                              })
                            )
                        ),
                      r
                    )
                  );
                },
              },
            ]),
            t
          );
        })(l.default.Component);
      (b.displayName = 'Plasma@Page'), (t.default = b);
    },
    102: function(e, t) {
      e.exports = {
        wrapper: 'src-components-layout-Page-wrapper__37dDb',
        clearfix: 'src-components-layout-Page-clearfix__IZwQW',
        top: 'src-components-layout-Page-top__KQ1sr',
        pageActions: 'src-components-layout-Page-pageActions__3eQcn',
      };
    },
    2: function(e, t) {
      e.exports = require('lodash');
    },
    3: function(e, t) {
      e.exports = require('classnames');
    },
    9: function(e, t, r) {
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
      function c(e, t) {
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
        l = r(3),
        f = n(l),
        p = r(0),
        d = n(p),
        h = r(10),
        _ = n(h),
        b = r(1),
        m = (function(e) {
          function t() {
            return (
              a(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            c(t, e),
            s(t, [
              {
                key: 'render',
                value: function() {
                  var e,
                    t = (0, f.default)(
                      _.default.header,
                      ((e = {}),
                      o(e, _.default.header1, this.props.h1),
                      o(e, _.default.header2, this.props.h2),
                      o(e, _.default.header3, this.props.h3),
                      o(e, _.default.header4, this.props.h4),
                      o(e, _.default.header5, this.props.h5),
                      o(e, _.default.header6, this.props.h6),
                      o(e, _.default.invert, this.props.invert),
                      o(e, _.default.noMargin, this.props.noMargin),
                      e)
                    );
                  return d.default.createElement(
                    'div',
                    i({}, (0, b.getDataAttrs)(this.props.data), { className: [t] }),
                    d.default.createElement(
                      'div',
                      { className: _.default.content },
                      this.props.text || this.props.children
                    ),
                    this.props.underline &&
                      d.default.createElement('div', { className: _.default.rule })
                  );
                },
              },
            ]),
            t
          );
        })(d.default.Component);
      (m.displayName = 'Plasma@Header'), (t.default = m);
    },
  })
);
