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
      t((t.s = 113))
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
    113: function(e, t, r) {
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
      var u =
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
        s = r(0),
        f = n(s),
        l = r(1),
        p = r(114),
        d = n(p),
        h = (function(e) {
          function t() {
            o(this, t);
            var e = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (e.state = { fixedHeight: 0 }), e;
          }
          return (
            i(t, e),
            c(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.setState({ fixedHeight: this.fixed.offsetHeight });
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return f.default.createElement(
                    'div',
                    u({}, (0, l.getDataAttrs)(this.props.data), { className: d.default.wrapper }),
                    f.default.createElement(
                      'div',
                      {
                        className: d.default.fixedWrapper,
                        ref: function(t) {
                          return (e.fixed = t);
                        },
                      },
                      this.props.children[0]
                    ),
                    f.default.createElement(
                      'div',
                      { className: d.default.contentWrapper },
                      f.default.createElement('div', {
                        className: d.default.stub,
                        style: {
                          height: this.state.fixedHeight,
                          minHeight: this.state.fixedHeight,
                        },
                      }),
                      f.default.createElement(
                        'div',
                        {
                          className: d.default.content,
                          style: { backgroundColor: this.props.backgroundColor },
                        },
                        this.props.children[1]
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(f.default.Component);
      (h.defaultProps = { children: ['', ''], backgroundColor: 'transparent' }),
        (h.defaultProps = { children: ['', ''], backgroundColor: 'transparent' }),
        (h.displayName = '!Plasma@FixedTop'),
        (t.default = h);
    },
    114: function(e, t) {
      e.exports = {
        clearfix: 'src-components-layout-FixedTop-clearfix__3Zz81',
        wrapper: 'src-components-layout-FixedTop-wrapper__3sgZ2',
        fixedWrapper: 'src-components-layout-FixedTop-fixedWrapper__1FfKy',
        contentWrapper: 'src-components-layout-FixedTop-contentWrapper__3f-Y5',
        stub: 'src-components-layout-FixedTop-stub__zGO-K',
        content: 'src-components-layout-FixedTop-content__3zLOT',
      };
    },
    2: function(e, t) {
      e.exports = require('lodash');
    },
  })
);
