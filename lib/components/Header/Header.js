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
      t((t.s = 9))
    );
  })([
    function(e, t) {
      e.exports = require('react');
    },
    function(e, t, r) {
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
    function(e, t) {
      e.exports = require('lodash');
    },
    function(e, t) {
      e.exports = require('classnames');
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, r) {
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
      function s(e, t) {
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
        p = r(3),
        f = n(p),
        l = r(0),
        d = n(l),
        h = r(10),
        _ = n(h),
        b = r(1),
        m = (function(e) {
          function t() {
            return (
              a(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            u(t, e),
            c(t, [
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
    function(e, t) {
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
  ])
);
