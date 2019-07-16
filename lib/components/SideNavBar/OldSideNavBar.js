!(function(e, r) {
  for (var t in r) e[t] = r[t];
})(
  exports,
  (function(e) {
    function r(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    var t = {};
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n });
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
      r((r.s = 86))
    );
  })({
    0: function(e, r) {
      e.exports = require('react');
    },
    24: function(e, r) {
      e.exports = {
        wrapper: 'src-components-SideNavBar-wrapper__3Y5Ng',
        clearfix: 'src-components-SideNavBar-clearfix__3N_SL',
        itemWrapper: 'src-components-SideNavBar-itemWrapper__30n4q',
        icon: 'src-components-SideNavBar-icon__2A6Sa',
        darkBg: 'src-components-SideNavBar-darkBg__1aKNM',
        selected: 'src-components-SideNavBar-selected__3QTh2',
      };
    },
    86: function(e, r, t) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, r) {
        if (!(e instanceof r)) throw new TypeError('Cannot call a class as a function');
      }
      function a(e, r) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !r || ('object' != typeof r && 'function' != typeof r) ? e : r;
      }
      function c(e, r) {
        if ('function' != typeof r && null !== r)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof r
          );
        (e.prototype = Object.create(r && r.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : (e.__proto__ = r));
      }
      Object.defineProperty(r, '__esModule', { value: !0 });
      var i = (function() {
          function e(e, r) {
            for (var t = 0; t < r.length; t++) {
              var n = r[t];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function(r, t, n) {
            return t && e(r.prototype, t), n && e(r, n), r;
          };
        })(),
        u = t(0),
        p = n(u),
        f = t(24),
        s = n(f),
        l = (function(e) {
          function r() {
            return (
              o(this, r), a(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
            );
          }
          return (
            c(r, e),
            i(r, [
              {
                key: 'render',
                value: function() {
                  return p.default.createElement(
                    'div',
                    { className: s.default.wrapper },
                    this.props.children
                  );
                },
              },
            ]),
            r
          );
        })(u.Component);
      (l.displayName = 'Plasma@SideNavBar'), (r.default = l);
    },
  })
);
