!(function(e, t) {
  for (var r in t) e[r] = t[r];
})(
  exports,
  (function(e) {
    function t(n) {
      if (r[n]) return r[n].exports;
      var a = (r[n] = { i: n, l: !1, exports: {} });
      return e[n].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
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
      t((t.s = 25))
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
    function(e, t, r) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        o = r(0),
        i = n(o),
        l = r(1),
        c = r(7),
        u = n(c),
        s = function(e) {
          var t = e.icon,
            r = e.color,
            n = e.data;
          return i.default.createElement(
            'div',
            a(
              {
                className: u.default.wrapper,
                style: { fill: r },
                dangerouslySetInnerHTML: { __html: t },
              },
              (0, l.getDataAttrs)(n)
            )
          );
        };
      (s.defaultProps = { color: '#000', size: 16 }),
        (s.displayName = 'Plasma@Icon'),
        (t.default = s);
    },
    function(e, t) {
      e.exports = {
        clearfix: 'src-components-SideNavBar-clearfix__2tgtU',
        wrapper: 'src-components-SideNavBar-wrapper__1Pz2L',
        groupWrapper: 'src-components-SideNavBar-groupWrapper__vtkUJ',
        top: 'src-components-SideNavBar-top__1PMat',
        input: 'src-components-SideNavBar-input__3y-7h',
        fullWidth: 'src-components-SideNavBar-fullWidth__2_Voa',
        sidebarContent: 'src-components-SideNavBar-sidebarContent__31tpS',
        groupSubItems: 'src-components-SideNavBar-groupSubItems__g3ydh',
        itemWrapper: 'src-components-SideNavBar-itemWrapper__3ALdX',
        selected: 'src-components-SideNavBar-selected__LwvJi',
        iconAndLabelContainer: 'src-components-SideNavBar-iconAndLabelContainer__23y53',
        iconWrapper: 'src-components-SideNavBar-iconWrapper__Ozjr4',
        topText: 'src-components-SideNavBar-topText__3pEkL',
        groupLabelWrapper: 'src-components-SideNavBar-groupLabelWrapper__1wdlJ',
        tag: 'src-components-SideNavBar-tag__3qOGh',
        darkBg: 'src-components-SideNavBar-darkBg___XzfH',
      };
    },
    function(e, t) {
      e.exports = {
        clearfix: 'src-components-Icon-clearfix__3zhE-',
        wrapper: 'src-components-Icon-wrapper__1y5Fo',
      };
    },
    ,
    ,
    ,
    function(e, t, r) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t, r) {
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
      function o(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function i(e, t) {
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
      var c =
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
        p = n(s),
        f = r(3),
        d = n(f),
        m = r(5),
        b = n(m),
        v = r(6),
        y = n(v),
        h = (function(e) {
          function t() {
            var e, r, n, a;
            o(this, t);
            for (var l = arguments.length, c = Array(l), u = 0; u < l; u++) c[u] = arguments[u];
            return (
              (r = n = i(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))
              )),
              (n.input = n.props.forwardedRef || p.default.createRef()),
              (a = r),
              i(n, a)
            );
          }
          return (
            l(t, e),
            u(t, [
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  this.props.editing &&
                    !e.editing &&
                    this.input.current &&
                    this.input.current.focus();
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.label,
                    r = e.onClick,
                    n = e.icon,
                    o = e.editing,
                    i = e.placeholder,
                    l = e.value,
                    c = e.onChange,
                    u = e.onBlur,
                    s = e.fullWidth,
                    f = e.className;
                  return p.default.createElement(
                    'div',
                    {
                      className: (0, d.default)(f, y.default.top, a({}, y.default.fullWidth, s)),
                      onClick: r,
                    },
                    p.default.createElement(
                      'div',
                      { className: y.default.iconAndLabelContainer },
                      p.default.createElement(
                        'div',
                        { className: y.default.iconWrapper },
                        p.default.createElement(b.default, { color: '#fff', icon: n })
                      ),
                      p.default.createElement(
                        'div',
                        { className: y.default.topText },
                        o
                          ? p.default.createElement('input', {
                              className: y.default.input,
                              value: l,
                              ref: this.input,
                              type: 'text',
                              onChange: c,
                              onBlur: u,
                              placeholder: i,
                            })
                          : t
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(p.default.Component);
      t.default = p.default.forwardRef(function(e, t) {
        return p.default.createElement(h, c({}, e, { forwardedRef: t }));
      });
    },
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
      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
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
        u = r(0),
        s = n(u),
        p = r(1),
        f = r(25),
        d = n(f),
        m = r(11),
        b = n(m),
        v = r(6),
        y = n(v),
        h = (function(e) {
          function t() {
            var e, r, n, i;
            a(this, t);
            for (var l = arguments.length, c = Array(l), u = 0; u < l; u++) c[u] = arguments[u];
            return (
              (r = n = o(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))
              )),
              (n.handleClick = function(e) {
                n.props.onChange && n.props.onChange({ id: e.id });
              }),
              (i = r),
              o(n, i)
            );
          }
          return (
            i(t, e),
            c(t, [
              {
                key: 'renderItems',
                value: function() {
                  var e = this;
                  return this.props.items.map(function(t) {
                    return s.default.createElement(d.default, {
                      key: t.id,
                      id: t.id,
                      icon: t.icon,
                      label: t.label,
                      onClick: e.handleClick,
                      items: t.items,
                      selectedId: e.props.selectedId,
                    });
                  });
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.data,
                    r = e.editingTopText,
                    n = e.onBlurTop,
                    a = e.onClickTop,
                    o = e.onTopTextChange,
                    i = e.topIcon,
                    c = e.topText,
                    u = e.topTextValue;
                  return s.default.createElement(
                    'div',
                    l({}, (0, p.getDataAttrs)(t), { className: y.default.wrapper }),
                    (c || i) &&
                      s.default.createElement(b.default, {
                        label: c,
                        icon: i,
                        onClick: a,
                        onBlur: n,
                        editing: r,
                        placeholder: c,
                        value: u,
                        onChange: o,
                      }),
                    s.default.createElement(
                      'div',
                      { className: y.default.sidebarContent },
                      this.renderItems()
                    )
                  );
                },
              },
            ]),
            t
          );
        })(u.Component);
      (h.displayName = 'Plasma@SideNavBar'), (t.default = h);
    },
    function(e, t, r) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t, r) {
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
      function o(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function i(e, t) {
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
      var c = (function() {
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
        u = r(0),
        s = n(u),
        p = r(3),
        f = n(p),
        d = r(6),
        m = n(d),
        b = (function(e) {
          function t() {
            var e, r, n, a;
            o(this, t);
            for (var l = arguments.length, c = Array(l), u = 0; u < l; u++) c[u] = arguments[u];
            return (
              (r = n = i(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))
              )),
              (n._onClick = function() {
                n.props.onClick(n.props.id);
              }),
              (a = r),
              i(n, a)
            );
          }
          return (
            l(t, e),
            c(t, [
              {
                key: 'renderIconAndLabel',
                value: function() {
                  var e = this.props.label;
                  return s.default.createElement(
                    'div',
                    { className: m.default.iconAndLabelContainer },
                    s.default.createElement('div', { className: m.default.label }, e)
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  var e,
                    t = this.props,
                    r = t.darkBg,
                    n = t.selected,
                    o = t.linkComponent,
                    i = t.tagText,
                    l = (0, f.default)(
                      m.default.itemWrapper,
                      ((e = {}), a(e, m.default.darkBg, r), a(e, m.default.selected, n), e)
                    );
                  return o
                    ? s.default.createElement(
                        'div',
                        { className: l },
                        o,
                        i && s.default.createElement('div', { className: m.default.tag }, i)
                      )
                    : s.default.createElement(
                        'div',
                        { className: l, onClick: this._onClick },
                        this.renderIconAndLabel(),
                        i && s.default.createElement('div', { className: m.default.tag }, i)
                      );
                },
              },
            ]),
            t
          );
        })(u.Component);
      (b.defaultProps = { label: 'Label', iconSize: 16, selected: !1, tagText: null }),
        (b.displayName = 'Plasma@SideNavBarItem'),
        (t.default = b);
    },
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
      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
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
        u = r(0),
        s = n(u),
        p = r(2),
        f = r(19),
        d = n(f);
      r(18);
      var m = r(6),
        b = n(m),
        v = (function(e) {
          function t() {
            var e, r, n, i;
            a(this, t);
            for (var l = arguments.length, c = Array(l), u = 0; u < l; u++) c[u] = arguments[u];
            return (
              (r = n = o(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(c))
              )),
              (n.handleGroupClick = function() {
                n.props.items && n.props.items[0]
                  ? n.props.onClick({ id: n.props.items[0].id })
                  : n.props.onClick({ id: n.props.id });
              }),
              (n.handleItemClick = function(e) {
                n.props.onClick({ id: e });
              }),
              (i = r),
              o(n, i)
            );
          }
          return (
            i(t, e),
            c(t, [
              {
                key: 'renderIconAndLabel',
                value: function() {
                  var e = this.props,
                    t = e.icon,
                    r = e.iconSize,
                    n = e.iconStyle,
                    a = e.label,
                    o = e.items;
                  if (
                    !(0, p.find)(o, function(e) {
                      return !e.hidden;
                    })
                  )
                    return null;
                  var i =
                    t &&
                    r &&
                    s.default.createElement('img', {
                      className: b.default.icon,
                      style: l({ width: r, height: r }, n),
                      src: t,
                      alt: a,
                    });
                  return s.default.createElement(
                    'div',
                    { onClick: this.handleGroupClick, className: b.default.iconAndLabelContainer },
                    s.default.createElement('div', { className: b.default.iconWrapper }, i),
                    s.default.createElement('div', { className: b.default.groupLabelWrapper }, a)
                  );
                },
              },
              {
                key: 'renderSubItems',
                value: function() {
                  var e = this;
                  return (
                    this.props.items &&
                    this.props.items.map(function(t) {
                      return (
                        !t.hidden &&
                        s.default.createElement(d.default, {
                          key: t.id,
                          id: t.id,
                          label: t.label,
                          tagText: t.tagText,
                          onClick: e.handleItemClick,
                          selected: t.id === e.props.selectedId,
                          linkComponent: t.linkComponent,
                        })
                      );
                    })
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  return s.default.createElement(
                    'div',
                    { className: b.default.groupWrapper },
                    this.renderIconAndLabel(),
                    s.default.createElement(
                      'div',
                      { className: b.default.groupSubItems },
                      this.renderSubItems()
                    )
                  );
                },
              },
            ]),
            t
          );
        })(u.Component);
      (v.defaultProps = { label: 'Label', iconSize: 22 }),
        (v.displayName = 'Plasma@SideNavBarItemGroup'),
        (t.default = v);
    },
  ])
);
