!(function(e, t) {
  for (var a in t) e[a] = t[a];
})(
  exports,
  (function(e) {
    function t(l) {
      if (a[l]) return a[l].exports;
      var n = (a[l] = { i: l, l: !1, exports: {} });
      return e[l].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
    }
    var a = {};
    return (
      (t.m = e),
      (t.c = a),
      (t.d = function(e, a, l) {
        t.o(e, a) || Object.defineProperty(e, a, { configurable: !1, enumerable: !0, get: l });
      }),
      (t.n = function(e) {
        var a =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return t.d(a, 'a', a), a;
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ''),
      t((t.s = 78))
    );
  })({
    0: function(e, t) {
      e.exports = require('react');
    },
    1: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.getDataAttrs = void 0);
      var l = a(2);
      t.getDataAttrs = function(e) {
        return e
          ? (0, l.mapKeys)(e, function(e, t) {
              return 'data-' + (0, l.kebabCase)(t);
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
    31: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.default =
        '<svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Sortable-headers" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Nearby-inventory_pricedecreasing" transform="translate(-832.000000, -249.000000)" fill="#252729"><polygon id="ic_uparrow" points="836 249 840 254 832 254"></polygon></g></g></svg>';
    },
    32: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.default =
        '<svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Sortable-headers" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Nearby-inventory" transform="translate(-680.000000, -249.000000)" fill="#252729"><polygon id="ic_downarrow" transform="translate(684.000000, 251.500000) scale(1, -1) translate(-684.000000, -251.500000) " points="684 249 688 254 680 254"></polygon></g></g></svg>';
    },
    5: function(e, t, a) {
      'use strict';
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
            }
            return e;
          },
        r = a(0),
        o = l(r),
        s = a(1),
        i = a(7),
        c = l(i),
        u = function(e) {
          var t = e.icon,
            a = e.color,
            l = e.data;
          return o.default.createElement(
            'div',
            n(
              {
                className: c.default.wrapper,
                style: { fill: a },
                dangerouslySetInnerHTML: { __html: t },
              },
              (0, s.getDataAttrs)(l)
            )
          );
        };
      (u.defaultProps = { color: '#000', size: 16 }),
        (u.displayName = 'Plasma@Icon'),
        (t.default = u);
    },
    7: function(e, t) {
      e.exports = {
        clearfix: 'src-components-Icon-clearfix__3zhE-',
        wrapper: 'src-components-Icon-wrapper__1y5Fo',
      };
    },
    78: function(e, t, a) {
      'use strict';
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function n(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function s(e, t) {
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
              var a = arguments[t];
              for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l]);
            }
            return e;
          },
        c = (function() {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var l = t[a];
              (l.enumerable = l.enumerable || !1),
                (l.configurable = !0),
                'value' in l && (l.writable = !0),
                Object.defineProperty(e, l.key, l);
            }
          }
          return function(t, a, l) {
            return a && e(t.prototype, a), l && e(t, l), t;
          };
        })(),
        u = a(2),
        d = a(0),
        f = l(d),
        p = a(3),
        h = l(p),
        m = a(1),
        b = a(5),
        y = l(b),
        g = a(31),
        v = l(g),
        w = a(32),
        _ = l(w),
        k = a(79),
        x = l(k),
        E = (function(e) {
          function t() {
            r(this, t);
            var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (
              (e.handleWindowResize = function() {
                e.calculateSizes(), e.handleScroll();
              }),
              (e.handleScroll = function() {
                if (!(0, u.isNull)(e.props.stickAt)) {
                  var t = e.table.getBoundingClientRect().top,
                    a = e.table.getBoundingClientRect().bottom,
                    l = t < e.props.stickAt,
                    n = a - e.state.headerHeight < e.props.stickAt,
                    r = !1;
                  l && !n && (r = !0),
                    (e.fixed.style.height = e.props.stickAt + e.state.headerHeight + 'px'),
                    (e.fixed.style['pointer-event'] = r ? 'auto' : 'none'),
                    (e.fixed.style.opacity = r ? 1 : 0);
                }
              }),
              (e.updateState = function(t, a) {
                (0, u.isEqual)((0, u.pick)(e.state, (0, u.keys)(t)), t) || e.setState(t, a);
              }),
              (e.calculateSizes = function(t) {
                var a = {},
                  l = 0;
                (0, u.forEach)(e.headerComponents, function(e, t) {
                  var n = window.getComputedStyle(e, null),
                    r = parseInt(n.getPropertyValue('width'), 10),
                    o = parseInt(n.getPropertyValue('height'), 10);
                  (a[t] = { width: r, height: o }), o > l && (l = o);
                });
                var n = parseInt(e.table.offsetWidth, 10);
                e.updateState({ columnSizes: a, headerHeight: l, tableWidth: n }, t);
              }),
              (e.state = {
                columnSizes: {},
                tableWidth: 0,
                backgroundColor: null,
                stickyCoverHeight: 0,
                translateY: 0,
                showSticky: !1,
                headerHeight: 0,
              }),
              (e.headerComponents = {}),
              e
            );
          }
          return (
            s(t, e),
            c(t, [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this;
                  if ((0, u.isNull)(this.props.stickAt)) this.calculateSizes();
                  else {
                    document.addEventListener('scroll', this.handleScroll),
                      window.addEventListener('resize', this.handleWindowResize);
                    var t = function() {
                      e.handleWindowResize(), e.handleScroll();
                    };
                    this.calculateSizes(t);
                  }
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  this.props.stickAt && !(0, u.isEqual)(this.props, e) && this.calculateSizes();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  document.removeEventListener('scroll', this.handleScroll),
                    window.removeEventListener('resize', this.handleWindowResize);
                },
              },
              {
                key: 'renderStickyHeader',
                value: function() {
                  return this.renderHeader({ sticky: !0 });
                },
              },
              {
                key: 'renderCarat',
                value: function() {
                  return f.default.createElement(y.default, {
                    color: '#fff',
                    icon: 'asc' === this.props.sort.order ? _.default : v.default,
                  });
                },
              },
              {
                key: 'renderHeader',
                value: function() {
                  var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = this.props,
                    l = a.sort,
                    r = a.onSort,
                    o = (0, u.map)(this.props.headerData, function(a) {
                      var o,
                        s = { width: a.width },
                        i = a.key;
                      t.sticky &&
                        e.state.columnSizes[i] &&
                        !a.width &&
                        (s = { width: e.state.columnSizes[i].width });
                      var c = (0, h.default)(
                        x.default.cell,
                        n({}, x.default.sortableColumn, a.sortable)
                      );
                      return f.default.createElement(
                        'th',
                        {
                          className: (0, h.default)(
                            ((o = {}), n(o, c, !0), n(o, x.default.condensedCell, a.condensed), o)
                          ),
                          style: s,
                          key: i,
                          ref: function(a) {
                            t.sticky || (e.headerComponents[i] = a);
                          },
                          onClick: function() {
                            return a.sortable && r && r(i);
                          },
                        },
                        a.label,
                        l && i === l.key && e.renderCarat(),
                        a.sortable &&
                          f.default.createElement('div', {
                            className: (0, h.default)(
                              x.default.sortableColumnHighlight,
                              n(
                                {},
                                x.default.sortableColumnHighlightSelected,
                                e.props.selectedColumnKey === i
                              )
                            ),
                          })
                      );
                    });
                  return f.default.createElement(
                    'thead',
                    null,
                    f.default.createElement(
                      'tr',
                      { className: (0, h.default)(x.default.row, x.default.header) },
                      o
                    )
                  );
                },
              },
              {
                key: 'renderItems',
                value: function() {
                  var e = void 0,
                    t = void 0,
                    a = this.props,
                    l = a.clickable,
                    r = a.empty,
                    o = a.emptyText,
                    s = a.headerData,
                    i = a.highlightable,
                    c = a.items,
                    d = a.loading,
                    p = a.spanMap,
                    m = s.length;
                  if (d)
                    return f.default.createElement(
                      'tbody',
                      { className: x.default.tbody },
                      f.default.createElement(
                        'tr',
                        { className: x.default.row },
                        f.default.createElement(
                          'td',
                          { className: x.default.cell, colSpan: m },
                          f.default.createElement(
                            'span',
                            { className: x.default.loadingText },
                            'Loading...'
                          )
                        )
                      )
                    );
                  if (r && o)
                    return f.default.createElement(
                      'tbody',
                      { className: x.default.tbody },
                      f.default.createElement(
                        'tr',
                        { className: x.default.row },
                        f.default.createElement(
                          'td',
                          { className: x.default.cell, colSpan: m },
                          f.default.createElement('span', { className: x.default.emptyText }, o)
                        )
                      )
                    );
                  p && ((e = (0, u.keys)(p)[0]), (t = p[e]));
                  var b = (0, u.map)(s, 'key'),
                    y = [];
                  return (
                    (0, u.forEach)(c, function(a, r) {
                      var o,
                        c = (0, u.get)(a[e], 'length'),
                        d = [],
                        p = a.disabled;
                      if (
                        ((0, u.forEach)(b, function(l) {
                          var r,
                            o = (0, u.includes)(t, l),
                            i = (0, u.find)(s, { key: l }),
                            p = i && i.condensed,
                            m = void 0,
                            b = void 0;
                          o ? (m = a[e][0][l]) : ((b = c), (m = a[l])),
                            m || (m = '-'),
                            d.push(
                              f.default.createElement(
                                'td',
                                {
                                  className: (0, h.default)(
                                    ((r = {}),
                                    n(r, x.default.cell, !0),
                                    n(r, x.default.condensedCell, p),
                                    r)
                                  ),
                                  key: l,
                                  rowSpan: b,
                                },
                                m
                              )
                            );
                        }),
                        y.push(
                          f.default.createElement(
                            'tr',
                            {
                              key: r,
                              className: (0, h.default)(
                                ((o = {}),
                                n(o, x.default.row, !0),
                                n(o, x.default.rowDisabled, p),
                                n(o, x.default.clickable, l),
                                n(o, x.default.highlightable, i),
                                o)
                              ),
                            },
                            d
                          )
                        ),
                        c)
                      )
                        for (var m = 1; m < c; m++)
                          !(function(o) {
                            var s,
                              c = [];
                            (0, u.forEach)(t, function(t) {
                              c.push(
                                f.default.createElement(
                                  'td',
                                  { key: t, className: x.default.cell },
                                  a[e][o][t]
                                )
                              );
                            }),
                              y.push(
                                f.default.createElement(
                                  'tr',
                                  {
                                    key: r + '.' + o,
                                    className: (0, h.default)(
                                      ((s = {}),
                                      n(s, x.default.row, !0),
                                      n(s, x.default.rowDisabled, p),
                                      n(s, x.default.clickable, l),
                                      n(s, x.default.highlightable, i),
                                      s)
                                    ),
                                  },
                                  c
                                )
                              );
                          })(m);
                    }),
                    f.default.createElement('tbody', { className: x.default.tbody }, y)
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this;
                  return f.default.createElement(
                    'div',
                    i({}, (0, m.getDataAttrs)(this.props.data), {
                      style: this.props.style,
                      className: x.default.wrapper,
                    }),
                    !(0, u.isNull)(this.props.stickAt) &&
                      f.default.createElement(
                        'div',
                        {
                          ref: function(t) {
                            return (e.fixed = t);
                          },
                          className: (0, h.default)(x.default.table, x.default.sticky),
                          style: {
                            backgroundColor: this.state.backgroundColor,
                            width: this.state.tableWidth,
                          },
                        },
                        f.default.createElement(
                          'table',
                          { style: { width: this.state.tableWidth } },
                          this.renderStickyHeader()
                        )
                      ),
                    f.default.createElement(
                      'table',
                      {
                        ref: function(t) {
                          e.table = t;
                        },
                        className: x.default.table,
                      },
                      this.renderHeader(),
                      this.renderItems()
                    )
                  );
                },
              },
            ]),
            t
          );
        })(f.default.Component);
      (E.defaultProps = {
        empty: !1,
        emptyText: '',
        loading: !1,
        stickAt: null,
        headerData: [],
        sort: {},
      }),
        (E.displayName = 'Plasma@Table'),
        (t.default = E);
    },
    79: function(e, t) {
      e.exports = {
        table: 'src-components-Table-table__3YQjf',
        clearfix: 'src-components-Table-clearfix__3btMP',
        sticky: 'src-components-Table-sticky__BqqPR',
        tbody: 'src-components-Table-tbody__1jqAV',
        row: 'src-components-Table-row__2Gq-d',
        header: 'src-components-Table-header__1PK2_',
        sortableColumn: 'src-components-Table-sortableColumn__3I5v0',
        sortableColumnHighlight: 'src-components-Table-sortableColumnHighlight__3RRdk',
        sortableColumnHighlightSelected:
          'src-components-Table-sortableColumnHighlightSelected__1XDvI',
        rowDisabled: 'src-components-Table-rowDisabled__1Iu5h',
        clickable: 'src-components-Table-clickable__83sfR',
        highlightable: 'src-components-Table-highlightable__2zlsi',
        cell: 'src-components-Table-cell__-1Rff',
        condensedCell: 'src-components-Table-condensedCell__28phA',
        headerCell: 'src-components-Table-headerCell__fYI7B',
        emptyText: 'src-components-Table-emptyText__3iI4L',
        loadingText: 'src-components-Table-loadingText__-8kWz',
      };
    },
  })
);
