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
      t((t.s = 62))
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
    2: function(e, t) {
      e.exports = require('lodash');
    },
    21: function(e, t, r) {
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
      function l(e, t) {
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
        d = r(3),
        u = n(d),
        f = r(0),
        p = n(f),
        h = r(8),
        b = n(h),
        m = r(1),
        _ = r(27),
        y = n(_),
        v = r(9),
        C = n(v),
        x = { REGULAR: 'regular', CONDENSED: 'condensed' },
        O = { DASHED: 'dashed' },
        g = (t.borderColors = { RED: 'red' }),
        w = (function(e) {
          function t() {
            a(this, t);
            var e = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (e.state = { isMounted: !1 }), e;
          }
          return (
            l(t, e),
            c(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  if (this.props.expandedComponent) {
                    var e = b.default.findDOMNode(this.default),
                      t = e.offsetHeight,
                      r = b.default.findDOMNode(this.expanded),
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
                    l = r.expandedComponent,
                    c = r.onClick,
                    d = r.data,
                    f = r.isExpanded,
                    h = r.borderType,
                    b = r.borderColor,
                    _ = r.type,
                    v = r.minWidth,
                    w = (0, u.default)(
                      y.default.card,
                      ((e = {}),
                      o(e, y.default.condensed, _ === x.CONDENSED),
                      o(e, y.default.borderDashed, h === O.DASHED),
                      o(e, y.default.borderRed, b === g.RED),
                      o(e, y.default.isExpanded, f),
                      e)
                    ),
                    E = 'auto',
                    j = 'auto';
                  return (
                    this.state.isMounted &&
                      (this.props.isExpanded
                        ? ((E = 0), (j = this.state.expandedHeight))
                        : ((E = this.state.defaultHeight), (j = 0))),
                    p.default.createElement(
                      'div',
                      i(
                        {
                          ref: function(e) {
                            t.outer = e;
                          },
                          className: w,
                          style: { minWidth: v },
                          onClick: c,
                        },
                        (0, m.getDataAttrs)(d)
                      ),
                      p.default.createElement(
                        'div',
                        { className: y.default.inner },
                        (n || a) &&
                          p.default.createElement(
                            'div',
                            { className: y.default.top },
                            n && p.default.createElement(C.default, { h4: !0 }, n),
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
                            style: { maxHeight: E },
                          },
                          s
                        ),
                        l &&
                          p.default.createElement(
                            'div',
                            {
                              ref: function(e) {
                                t.expanded = e;
                              },
                              className: y.default.expanded,
                              style: { maxHeight: j },
                            },
                            l
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
      (w.displayName = 'Plasma@Card'), (t.default = w);
    },
    27: function(e, t) {
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
    3: function(e, t) {
      e.exports = require('classnames');
    },
    62: function(e, t, r) {
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
      function l(e, t) {
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
      var i = (function() {
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
        c = r(0),
        d = n(c),
        u = r(3),
        f = n(u),
        p = r(21),
        h = n(p),
        b = r(63),
        m = n(b),
        _ = (function(e) {
          function t() {
            var e, r, n, o;
            a(this, t);
            for (var l = arguments.length, i = Array(l), c = 0; c < l; c++) i[c] = arguments[c];
            return (
              (r = n = s(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))
              )),
              (n.state = { shouldDisplayCard: !n.props.isCollapsed }),
              (n.onClick = function() {
                n.setState(function(e) {
                  return { shouldDisplayCard: !e.shouldDisplayCard };
                });
              }),
              (o = r),
              s(n, o)
            );
          }
          return (
            l(t, e),
            i(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.headerText,
                    r = e.collapsibleText,
                    n = e.children,
                    a = e.styleColor,
                    s = e.disabled,
                    l = this.state.shouldDisplayCard,
                    i = (0, f.default)(
                      m.default.collapsibleCard,
                      o({}, m.default.styleColorRed, a === p.borderColors.RED)
                    );
                  return d.default.createElement(
                    'div',
                    { className: i },
                    d.default.createElement(
                      'div',
                      { className: m.default.cardHeader },
                      t,
                      !s &&
                        d.default.createElement(
                          'div',
                          { className: m.default.textLink, onClick: this.onClick },
                          r,
                          d.default.createElement('div', {
                            className: l ? m.default.textLinkArrowUp : m.default.textLinkArrowDown,
                          })
                        )
                    ),
                    !s && l && d.default.createElement(h.default, { borderColor: a }, n)
                  );
                },
              },
            ]),
            t
          );
        })(c.Component);
      (_.defaultProps = { isCollapsed: !1 }),
        (_.displayName = 'Plasma@CollapsibleCard'),
        (t.default = _);
    },
    63: function(e, t) {
      e.exports = {
        clearfix: 'src-components-CollapsibleCard-clearfix__F6p1f',
        collapsibleCard: 'src-components-CollapsibleCard-collapsibleCard__32LcH',
        cardHeader: 'src-components-CollapsibleCard-cardHeader__RObOz',
        textLink: 'src-components-CollapsibleCard-textLink__105PP',
        textLinkArrowUp: 'src-components-CollapsibleCard-textLinkArrowUp__2_TZf',
        textLinkArrowDown: 'src-components-CollapsibleCard-textLinkArrowDown__RDKsF',
        styleColorRed: 'src-components-CollapsibleCard-styleColorRed__1vmwl',
      };
    },
    8: function(e, t) {
      e.exports = require('react-dom');
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
      function s(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function l(e, t) {
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
        d = r(3),
        u = n(d),
        f = r(0),
        p = n(f),
        h = r(10),
        b = n(h),
        m = r(1),
        _ = (function(e) {
          function t() {
            return (
              a(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            l(t, e),
            c(t, [
              {
                key: 'render',
                value: function() {
                  var e,
                    t = (0, u.default)(
                      b.default.header,
                      ((e = {}),
                      o(e, b.default.header1, this.props.h1),
                      o(e, b.default.header2, this.props.h2),
                      o(e, b.default.header3, this.props.h3),
                      o(e, b.default.header4, this.props.h4),
                      o(e, b.default.header5, this.props.h5),
                      o(e, b.default.header6, this.props.h6),
                      o(e, b.default.invert, this.props.invert),
                      o(e, b.default.noMargin, this.props.noMargin),
                      e)
                    );
                  return p.default.createElement(
                    'div',
                    i({}, (0, m.getDataAttrs)(this.props.data), { className: [t] }),
                    p.default.createElement(
                      'div',
                      { className: b.default.content },
                      this.props.text || this.props.children
                    ),
                    this.props.underline &&
                      p.default.createElement('div', { className: b.default.rule })
                  );
                },
              },
            ]),
            t
          );
        })(p.default.Component);
      (_.displayName = 'Plasma@Header'), (t.default = _);
    },
  })
);
