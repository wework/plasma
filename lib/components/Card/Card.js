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
      t((t.s = 21))
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
    function(e, t) {
      e.exports = require('react-dom');
    },
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
      var d =
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
        c = r(3),
        l = n(c),
        f = r(0),
        p = n(f),
        h = r(10),
        m = n(h),
        _ = r(1),
        b = (function(e) {
          function t() {
            return (
              a(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            i(t, e),
            u(t, [
              {
                key: 'render',
                value: function() {
                  var e,
                    t = (0, l.default)(
                      m.default.header,
                      ((e = {}),
                      o(e, m.default.header1, this.props.h1),
                      o(e, m.default.header2, this.props.h2),
                      o(e, m.default.header3, this.props.h3),
                      o(e, m.default.header4, this.props.h4),
                      o(e, m.default.header5, this.props.h5),
                      o(e, m.default.header6, this.props.h6),
                      o(e, m.default.invert, this.props.invert),
                      o(e, m.default.noMargin, this.props.noMargin),
                      e)
                    );
                  return p.default.createElement(
                    'div',
                    d({}, (0, _.getDataAttrs)(this.props.data), { className: [t] }),
                    p.default.createElement(
                      'div',
                      { className: m.default.content },
                      this.props.text || this.props.children
                    ),
                    this.props.underline &&
                      p.default.createElement('div', { className: m.default.rule })
                  );
                },
              },
            ]),
            t
          );
        })(p.default.Component);
      (b.displayName = 'Plasma@Header'), (t.default = b);
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
    ,
    ,
    ,
    ,
    ,
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
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.borderColors = void 0);
      var d =
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
        c = r(3),
        l = n(c),
        f = r(0),
        p = n(f),
        h = r(8),
        m = n(h),
        _ = r(1),
        b = r(27),
        y = n(b),
        v = r(9),
        x = n(v),
        g = { REGULAR: 'regular', CONDENSED: 'condensed' },
        O = { DASHED: 'dashed' },
        E = (t.borderColors = { RED: 'red' }),
        C = (function(e) {
          function t() {
            a(this, t);
            var e = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (e.state = { isMounted: !1 }), e;
          }
          return (
            i(t, e),
            u(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  if (this.props.expandedComponent) {
                    var e = m.default.findDOMNode(this.default),
                      t = e.offsetHeight,
                      r = m.default.findDOMNode(this.expanded),
                      n = r.offsetHeight;
                    this.setState({ defaultHeight: t, expandedHeight: n });
                  }
                  this.setState({ isMounted: !0 });
                },
              },
              {
                key: 'render',
                value: function() {
                  var e,
                    t = this,
                    r = this.props,
                    n = r.title,
                    a = r.actions,
                    s = r.children,
                    i = r.expandedComponent,
                    u = r.onClick,
                    c = r.data,
                    f = r.isExpanded,
                    h = r.borderType,
                    m = r.borderColor,
                    b = r.type,
                    v = r.minWidth,
                    C = (0, l.default)(
                      y.default.card,
                      ((e = {}),
                      o(e, y.default.condensed, b === g.CONDENSED),
                      o(e, y.default.borderDashed, h === O.DASHED),
                      o(e, y.default.borderRed, m === E.RED),
                      o(e, y.default.isExpanded, f),
                      e)
                    ),
                    j = 'auto',
                    w = 'auto';
                  return (
                    this.state.isMounted &&
                      (this.props.isExpanded
                        ? ((j = 0), (w = this.state.expandedHeight))
                        : ((j = this.state.defaultHeight), (w = 0))),
                    p.default.createElement(
                      'div',
                      d(
                        {
                          ref: function(e) {
                            t.outer = e;
                          },
                          className: C,
                          style: { minWidth: v },
                          onClick: u,
                        },
                        (0, _.getDataAttrs)(c)
                      ),
                      p.default.createElement(
                        'div',
                        { className: y.default.inner },
                        (n || a) &&
                          p.default.createElement(
                            'div',
                            { className: y.default.top },
                            n && p.default.createElement(x.default, { h4: !0 }, n),
                            a &&
                              p.default.createElement(
                                'div',
                                { className: y.default.cardActions },
                                a.map(function(e) {
                                  return e;
                                })
                              )
                          ),
                        p.default.createElement(
                          'div',
                          {
                            ref: function(e) {
                              t.default = e;
                            },
                            className: y.default.default,
                            style: { maxHeight: j },
                          },
                          s
                        ),
                        i &&
                          p.default.createElement(
                            'div',
                            {
                              ref: function(e) {
                                t.expanded = e;
                              },
                              className: y.default.expanded,
                              style: { maxHeight: w },
                            },
                            i
                          )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(p.default.Component);
      (C.displayName = 'Plasma@Card'), (t.default = C);
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t) {
      e.exports = {
        clearfix: 'src-components-Card-clearfix__2PsB8',
        card: 'src-components-Card-card__2Sgvf',
        default: 'src-components-Card-default__2jKy1',
        expanded: 'src-components-Card-expanded__1u6dy',
        isExpanded: 'src-components-Card-isExpanded__2Xmw5',
        condensed: 'src-components-Card-condensed__1Qlkk',
        borderDashed: 'src-components-Card-borderDashed__18gdz',
        borderRed: 'src-components-Card-borderRed__2iuXV',
        top: 'src-components-Card-top__3CYbl',
        cardActions: 'src-components-Card-cardActions__2cMsF',
      };
    },
  ])
);
