!(function(e, t) {
  for (var n in t) e[n] = t[n];
})(
  exports,
  (function(e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var a = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
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
      t((t.s = 90))
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
    3: function(e, t) {
      e.exports = require('classnames');
    },
    90: function(e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function s(e, t) {
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
      var c =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        l = (function() {
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
        u = n(0),
        f = r(u),
        p = n(3),
        b = r(p),
        d = n(2),
        y = n(1),
        _ = n(91),
        v = r(_),
        T = (function(e) {
          function t() {
            var e, n, r, i;
            o(this, t);
            for (var c = arguments.length, l = Array(c), u = 0; u < c; u++) l[u] = arguments[u];
            return (
              (n = r = s(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l))
              )),
              (r.onClick = function(e, t) {
                r.props.onChange && r.props.onChange(e.label, t);
              }),
              (r.onKeyDown = function(e, t, n) {
                13 === e.keyCode && r.onClick(t, n);
              }),
              (r.getTabClassNames = function(e, t) {
                var n,
                  o = r.getTabStyle();
                return (0, b.default)(
                  o,
                  ((n = {}),
                  a(
                    n,
                    v.default.active,
                    r.props.selectedIndex === t || r.props.selectedLabel === e.label
                  ),
                  a(n, v.default.first, 0 === t),
                  a(n, v.default.last, t === r.props.items.length - 1),
                  n)
                );
              }),
              (r.renderTab = function(e, t) {
                return f.default.createElement(
                  'li',
                  {
                    role: 'tab',
                    onClick: function() {
                      return r.onClick(e, t);
                    },
                    onKeyDown: function(n) {
                      return r.onKeyDown(n, e, t);
                    },
                    className: r.getTabClassNames(e, t),
                    key: t,
                    tabIndex: '0',
                  },
                  e.title
                );
              }),
              (i = n),
              s(r, i)
            );
          }
          return (
            i(t, e),
            l(t, [
              {
                key: 'getTabsStyle',
                value: function() {
                  var e = this.props,
                    t = e.vertical,
                    n = e.plain;
                  return t ? v.default.verticalTabs : n ? v.default.plainTabs : v.default.tabs;
                },
              },
              {
                key: 'getTabStyle',
                value: function() {
                  var e = this.props,
                    t = e.vertical,
                    n = e.plain;
                  return t ? v.default.verticalTab : n ? v.default.plainTab : v.default.tab;
                },
              },
              {
                key: 'render',
                value: function() {
                  return f.default.createElement(
                    'ul',
                    c({}, (0, y.getDataAttrs)(this.props.data), {
                      className: this.getTabsStyle(),
                      role: 'tablist',
                    }),
                    (0, d.map)(this.props.items, this.renderTab)
                  );
                },
              },
            ]),
            t
          );
        })(f.default.Component);
      (T.defaultProps = { items: [], onChange: function() {} }),
        (T.displayName = 'Plasma@Tabs'),
        (t.default = T);
    },
    91: function(e, t) {
      e.exports = {
        tab: 'src-components-Tabs-tab__37Knu',
        verticalTab: 'src-components-Tabs-verticalTab__h_yi_',
        plainTab: 'src-components-Tabs-plainTab__G6Qpc',
        clearfix: 'src-components-Tabs-clearfix__2SWt5',
        tabs: 'src-components-Tabs-tabs__N3ued',
        verticalTabs: 'src-components-Tabs-verticalTabs__2pXe3',
        first: 'src-components-Tabs-first__2PAAz',
        last: 'src-components-Tabs-last__2MTg7',
        active: 'src-components-Tabs-active__2XgDr',
        plainTabs: 'src-components-Tabs-plainTabs__1lZ4a',
      };
    },
  })
);
