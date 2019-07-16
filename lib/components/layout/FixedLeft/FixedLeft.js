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
      t((t.s = 109))
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
    109: function(e, t, r) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function a(e, t) {
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
        f = (function() {
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
        l = r(2),
        c = r(0),
        u = n(c),
        p = r(110),
        d = n(p),
        h = r(1),
        y = function(e) {
          var t = 0;
          do {
            isNaN(e.offsetTop) || (t += e.offsetTop);
          } while ((e = e.offsetParent));
          return t;
        },
        m = (function(e) {
          function t() {
            o(this, t);
            var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (
              (e.handleScroll = function() {
                if (!(0, l.isNull)(e.props.stickAt)) {
                  var t = e.fixed.offsetTop,
                    r = y(e.fixed),
                    n = (0, l.clamp)(r - t, 0, e.fixedViewportOffsetOrigin - e.props.stickAt);
                  e.fixed.style.transform = 'translateY(' + -n + ')';
                }
              }),
              (e.state = { fixedWidth: 0, translateY: 0 }),
              e
            );
          }
          return (
            a(t, e),
            f(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  (0, l.isNull)(this.props.stickAt) ||
                    document.addEventListener('scroll', this.handleScroll),
                    this.setState({ fixedWidth: this.fixed.offsetWidth });
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  document.removeEventListener('scroll', this.handleScroll);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return u.default.createElement(
                    'div',
                    s({}, (0, h.getDataAttrs)(this.props.data), { className: d.default.wrapper }),
                    u.default.createElement(
                      'div',
                      {
                        className: d.default.fixedWrapper,
                        style: s({}, this.props.fixedStyle),
                        ref: function(t) {
                          t &&
                            (e.fixedViewportOffsetOrigin ||
                              (e.fixedViewportOffsetOrigin = t.offsetTop),
                            (e.fixed = t));
                        },
                      },
                      this.props.children[0]
                    ),
                    u.default.createElement(
                      'div',
                      { className: d.default.contentWrapper },
                      u.default.createElement('div', {
                        className: d.default.stub,
                        style: { width: this.state.fixedWidth, minWidth: this.state.fixedWidth },
                      }),
                      u.default.createElement(
                        'div',
                        { className: d.default.content, style: s({}, this.props.contentStyle) },
                        this.props.children[1]
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(u.default.Component);
      (m.defaultProps = { children: [null, null], stickAt: 0 }),
        (m.displayName = '!Plasma@FixedLeft'),
        (t.default = m);
    },
    110: function(e, t) {
      e.exports = {
        clearfix: 'src-components-layout-FixedLeft-clearfix__3998L',
        wrapper: 'src-components-layout-FixedLeft-wrapper__156Sv',
        fixedWrapper: 'src-components-layout-FixedLeft-fixedWrapper__2wyeB',
        contentWrapper: 'src-components-layout-FixedLeft-contentWrapper__3BCtj',
        stub: 'src-components-layout-FixedLeft-stub__lvre9',
        content: 'src-components-layout-FixedLeft-content__1TpN6',
      };
    },
    2: function(e, t) {
      e.exports = require('lodash');
    },
  })
);
