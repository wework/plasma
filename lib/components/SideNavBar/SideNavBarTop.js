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
      t((t.s = 11))
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
      var o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        a = r(0),
        c = n(a),
        i = r(1),
        u = r(7),
        l = n(u),
        p = function(e) {
          var t = e.icon,
            r = e.color,
            n = e.data;
          return c.default.createElement(
            'div',
            o(
              {
                className: l.default.wrapper,
                style: { fill: r },
                dangerouslySetInnerHTML: { __html: t },
              },
              (0, i.getDataAttrs)(n)
            )
          );
        };
      (p.defaultProps = { color: '#000', size: 16 }),
        (p.displayName = 'Plasma@Icon'),
        (t.default = p);
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
      var u =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        l = (function() {
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
        p = r(0),
        s = n(p),
        f = r(3),
        d = n(f),
        _ = r(5),
        v = n(_),
        m = r(6),
        b = n(m),
        y = (function(e) {
          function t() {
            var e, r, n, o;
            a(this, t);
            for (var i = arguments.length, u = Array(i), l = 0; l < i; l++) u[l] = arguments[l];
            return (
              (r = n = c(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))
              )),
              (n.input = n.props.forwardedRef || s.default.createRef()),
              (o = r),
              c(n, o)
            );
          }
          return (
            i(t, e),
            l(t, [
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
                    a = e.editing,
                    c = e.placeholder,
                    i = e.value,
                    u = e.onChange,
                    l = e.onBlur,
                    p = e.fullWidth,
                    f = e.className;
                  return s.default.createElement(
                    'div',
                    {
                      className: (0, d.default)(f, b.default.top, o({}, b.default.fullWidth, p)),
                      onClick: r,
                    },
                    s.default.createElement(
                      'div',
                      { className: b.default.iconAndLabelContainer },
                      s.default.createElement(
                        'div',
                        { className: b.default.iconWrapper },
                        s.default.createElement(v.default, { color: '#fff', icon: n })
                      ),
                      s.default.createElement(
                        'div',
                        { className: b.default.topText },
                        a
                          ? s.default.createElement('input', {
                              className: b.default.input,
                              value: i,
                              ref: this.input,
                              type: 'text',
                              onChange: u,
                              onBlur: l,
                              placeholder: c,
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
        })(s.default.Component);
      t.default = s.default.forwardRef(function(e, t) {
        return s.default.createElement(y, u({}, e, { forwardedRef: t }));
      });
    },
  ])
);
