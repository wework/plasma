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
      t((t.s = 87))
    );
  })({
    0: function(e, t) {
      e.exports = require('react');
    },
    24: function(e, t) {
      e.exports = {
        wrapper: 'src-components-SideNavBar-wrapper__3Y5Ng',
        clearfix: 'src-components-SideNavBar-clearfix__3N_SL',
        itemWrapper: 'src-components-SideNavBar-itemWrapper__30n4q',
        icon: 'src-components-SideNavBar-icon__2A6Sa',
        darkBg: 'src-components-SideNavBar-darkBg__1aKNM',
        selected: 'src-components-SideNavBar-selected__3QTh2',
      };
    },
    3: function(e, t) {
      e.exports = require('classnames');
    },
    87: function(e, t, r) {
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
      function c(e, t) {
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
        s = r(0),
        f = n(s),
        p = r(3),
        d = n(p),
        b = r(24),
        m = n(b),
        v = (function(e) {
          function t() {
            return (
              a(this, t), c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            i(t, e),
            u(t, [
              {
                key: 'renderIconAndLabel',
                value: function() {
                  var e = this.props,
                    t = e.icon,
                    r = e.iconSize,
                    n = e.iconStyle,
                    o = e.label,
                    a =
                      t &&
                      r &&
                      f.default.createElement('img', {
                        className: m.default.icon,
                        style: l({ width: r, height: r }, n),
                        src: t,
                        alt: o,
                      });
                  return f.default.createElement(
                    'div',
                    null,
                    a,
                    f.default.createElement('div', { className: m.default.label }, o)
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  var e,
                    t = this.props,
                    r = t.children,
                    n = t.darkBg,
                    a = t.onClick,
                    c = t.selected,
                    i = (0, d.default)(
                      m.default.itemWrapper,
                      ((e = {}), o(e, m.default.darkBg, n), o(e, m.default.selected, c), e)
                    );
                  return f.default.createElement(
                    'div',
                    { className: i, onClick: a },
                    r || this.renderIconAndLabel()
                  );
                },
              },
            ]),
            t
          );
        })(s.Component);
      (v.defaultProps = { label: 'Label', iconSize: 24, selected: !1 }),
        (v.displayName = 'Plasma@SideNavBarItem'),
        (t.default = v);
    },
  })
);
