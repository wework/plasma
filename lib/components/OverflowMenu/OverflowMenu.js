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
      t((t.s = 64))
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
    17: function(e, t) {
      e.exports = {
        revealableListItem: 'src-components-OverflowMenu-revealableListItem__A34a8',
        clearfix: 'src-components-OverflowMenu-clearfix__2Xf5m',
        overflow: 'src-components-OverflowMenu-overflow__k7TpV',
        container: 'src-components-OverflowMenu-container__1z8o8',
        action: 'src-components-OverflowMenu-action__38-0_',
        revealable: 'src-components-OverflowMenu-revealable__3-kiJ',
        openLeft: 'src-components-OverflowMenu-openLeft__3SJdt',
        revealed: 'src-components-OverflowMenu-revealed__3qoKU',
        revealableTopWrapper: 'src-components-OverflowMenu-revealableTopWrapper__2q3_Q',
        revealableTop: 'src-components-OverflowMenu-revealableTop__32qV6',
        labelWithText: 'src-components-OverflowMenu-labelWithText__ETA6L',
        revealableList: 'src-components-OverflowMenu-revealableList__1YJUE',
      };
    },
    2: function(e, t) {
      e.exports = require('lodash');
    },
    28: function(e, t, r) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = r(0),
        a = n(o),
        l = r(17),
        u = n(l),
        i = function(e) {
          var t = e.onClick,
            r = e.optionKey,
            n = e.text;
          return a.default.createElement(
            'li',
            {
              className: u.default.revealableListItem,
              onClick: (function(e) {
                function t() {
                  return e.apply(this, arguments);
                }
                return (
                  (t.toString = function() {
                    return e.toString();
                  }),
                  t
                );
              })(function() {
                return t(r);
              }),
            },
            n
          );
        };
      (i.displayName = 'Plasma@OverflowMenuItem'), (t.default = i);
    },
    3: function(e, t) {
      e.exports = require('classnames');
    },
    64: function(e, t, r) {
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
      function l(e, t) {
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
        s = r(3),
        f = n(s),
        p = r(2),
        d = r(0),
        v = n(d),
        b = r(1),
        m = r(28),
        _ = n(m),
        h = r(17),
        y = n(h),
        O = { RIGHT: 'right', LEFT: 'left' },
        w = (function(e) {
          function t() {
            var e, r, n, o;
            a(this, t);
            for (var u = arguments.length, i = Array(u), c = 0; c < u; c++) i[c] = arguments[c];
            return (
              (r = n = l(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))
              )),
              (n.state = { revealed: !1 }),
              (n.handleMouseEnter = function() {
                n.props.disabled || n.setState({ revealed: !0 });
              }),
              (n.handleMouseLeave = function() {
                n.setState({ revealed: !1 });
              }),
              (n.handleClick = function(e) {
                n.setState({ revealed: !1 }), n.props.onClick(e);
              }),
              (n.renderLabel = function() {
                var e = n.props.label;
                return e
                  ? v.default.createElement('div', { className: y.default.labelWithText }, e, ' ▾')
                  : v.default.createElement('div', { className: y.default.overflow });
              }),
              (o = r),
              l(n, o)
            );
          }
          return (
            u(t, e),
            c(t, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = (0, f.default)(
                      y.default.revealable,
                      o({}, y.default.revealed, this.state.revealed)
                    ),
                    r = (0, f.default)(
                      y.default.revealableList,
                      o(
                        {},
                        y.default.openLeft,
                        this.props.openDirection && this.props.openDirection === O.LEFT
                      )
                    );
                  return v.default.createElement(
                    'div',
                    i({}, (0, b.getDataAttrs)(this.props.data), {
                      onMouseEnter: this.handleMouseEnter,
                      onMouseLeave: this.handleMouseLeave,
                      className: y.default.container,
                    }),
                    v.default.createElement(
                      'div',
                      { className: y.default.action },
                      this.renderLabel()
                    ),
                    v.default.createElement(
                      'div',
                      { className: t },
                      v.default.createElement(
                        'div',
                        { className: y.default.revealableTopWrapper },
                        v.default.createElement(
                          'div',
                          { className: y.default.revealableTop },
                          this.renderLabel()
                        )
                      ),
                      v.default.createElement(
                        'ol',
                        { className: r },
                        (0, p.map)(this.props.options, function(t) {
                          return v.default.createElement(_.default, {
                            key: t.key,
                            optionKey: t.key,
                            text: t.text,
                            onClick: e.handleClick,
                          });
                        })
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(v.default.Component);
      (w.defaultProps = { options: [], openDirection: O.RIGHT }),
        (w.displayName = 'Plasma@OverflowMenu'),
        (t.default = w);
    },
  })
);
