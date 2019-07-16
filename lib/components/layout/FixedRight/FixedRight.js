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
      t((t.s = 111))
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
    111: function(e, t, n) {
      'use strict';
      function r(e) {
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
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        f = (function() {
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
        u = n(2),
        c = n(0),
        l = r(c),
        p = n(57),
        d = n(1),
        h = n(112),
        y = r(h),
        m = (function(e) {
          function t() {
            o(this, t);
            var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (
              (e.handleScroll = function() {
                if (!(0, u.isNull)(e.props.stickAt)) {
                  var t = e.fixed.offsetTop,
                    n = (0, p.getOffsetTop)(e.fixed),
                    r = (0, u.clamp)(n - t, 0, e.fixedViewportOffsetOrigin - e.props.stickAt);
                  e.fixed.style.transform = 'translateY(' + -r + ')';
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
                  (0, u.isNull)(this.props.stickAt) ||
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
                  return l.default.createElement(
                    'div',
                    s({}, (0, d.getDataAttrs)(this.props.data), { className: y.default.wrapper }),
                    l.default.createElement(
                      'div',
                      { className: y.default.contentWrapper },
                      l.default.createElement(
                        'div',
                        { className: y.default.content },
                        this.props.children[0]
                      ),
                      l.default.createElement('div', {
                        className: y.default.stub,
                        style: { width: this.state.fixedWidth, minWidth: this.state.fixedWidth },
                      })
                    ),
                    l.default.createElement(
                      'div',
                      {
                        className: y.default.fixedWrapper,
                        style: this.props.fixedContainerStyle,
                        ref: function(t) {
                          t &&
                            (e.fixedViewportOffsetOrigin ||
                              (e.fixedViewportOffsetOrigin = t.offsetTop),
                            (e.fixed = t));
                        },
                      },
                      this.props.children[1]
                    )
                  );
                },
              },
            ]),
            t
          );
        })(l.default.Component);
      (m.defaultProps = { children: [null, null], stickAt: null }),
        (m.displayName = '!Plasma@FixedRight'),
        (t.default = m);
    },
    112: function(e, t) {
      e.exports = {
        clearfix: 'src-components-layout-FixedRight-clearfix__2EzPJ',
        wrapper: 'src-components-layout-FixedRight-wrapper__2EMTQ',
        fixedWrapper: 'src-components-layout-FixedRight-fixedWrapper__3VcHP',
        contentWrapper: 'src-components-layout-FixedRight-contentWrapper__39FM0',
        stub: 'src-components-layout-FixedRight-stub__1u3EK',
        content: 'src-components-layout-FixedRight-content__uat9Z',
      };
    },
    2: function(e, t) {
      e.exports = require('lodash');
    },
    57: function(e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.getOffsetTop = void 0);
      var r = n(0);
      (function(e) {
        e && e.__esModule;
      })(r),
        (t.getOffsetTop = function(e) {
          var t = 0;
          do {
            isNaN(e.offsetTop) || (t += e.offsetTop);
          } while ((e = e.offsetParent));
          return t;
        });
    },
  })
);
