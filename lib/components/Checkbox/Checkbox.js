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
      t((t.s = 60))
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
    5: function(e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        a = n(0),
        c = r(a),
        i = n(1),
        l = n(7),
        u = r(l),
        s = function(e) {
          var t = e.icon,
            n = e.color,
            r = e.data;
          return c.default.createElement(
            'div',
            o(
              {
                className: u.default.wrapper,
                style: { fill: n },
                dangerouslySetInnerHTML: { __html: t },
              },
              (0, i.getDataAttrs)(r)
            )
          );
        };
      (s.defaultProps = { color: '#000', size: 16 }),
        (s.displayName = 'Plasma@Icon'),
        (t.default = s);
    },
    60: function(e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e, t, n) {
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
      var l =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        u = (function() {
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
        s = n(2),
        f = n(0),
        d = r(f),
        p = n(3),
        b = r(p),
        m = n(61),
        _ = r(m),
        h = n(5),
        x = r(h),
        y = n(1),
        v = (function(e) {
          function t() {
            return (
              a(this, t), c(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            i(t, e),
            u(t, [
              {
                key: 'render',
                value: function() {
                  var e,
                    t,
                    n = this.props,
                    r = n.checked,
                    a = n.data,
                    c = n.description,
                    i = n.disabled,
                    u = n.fancy,
                    f = n.icon,
                    p = n.indeterminate,
                    m = n.isBold,
                    h = n.name,
                    v = n.onBlur,
                    k = n.onChange,
                    C = n.text,
                    w = n.value,
                    O = r || w,
                    g = (0, s.uniqueId)('id'),
                    j = (0, b.default)(o({}, _.default.inline, u)),
                    E = p ? _.default.indeterminate : _.default.original,
                    P = (0, b.default)(
                      _.default.wrapper,
                      ((e = {}),
                      o(e, _.default.wrapperDisabled, i),
                      o(e, _.default.fancy, u),
                      o(e, _.default.fancyChecked, u && O),
                      e)
                    ),
                    D = (0, b.default)(
                      _.default.text,
                      ((t = {}), o(t, _.default.textBold, m), o(t, _.default.textDisabled, i), t)
                    );
                  return d.default.createElement(
                    'div',
                    l({}, (0, y.getDataAttrs)(a), { className: j }),
                    d.default.createElement(
                      'div',
                      null,
                      d.default.createElement(
                        'label',
                        { htmlFor: g, className: P },
                        d.default.createElement('input', {
                          checked: O,
                          className: E,
                          disabled: i,
                          id: g,
                          name: h,
                          onChange: k,
                          onBlur: v,
                          type: 'checkbox',
                        }),
                        !u && d.default.createElement('div', { className: _.default.checkbox }),
                        f &&
                          d.default.createElement(
                            'div',
                            { className: u ? _.default.fancyIcon : _.default.icon },
                            d.default.createElement(x.default, { icon: f })
                          ),
                        d.default.createElement('div', { className: D }, C)
                      )
                    ),
                    c && d.default.createElement('span', { className: _.default.description }, c)
                  );
                },
              },
            ]),
            t
          );
        })(d.default.Component);
      (v.defaultProps = {
        checked: !1,
        indeterminate: !1,
        name: 'checkbox',
        text: 'Option',
        value: !1,
      }),
        (v.displayName = 'Plasma@Checkbox'),
        (t.default = v);
    },
    61: function(e, t) {
      e.exports = {
        text: 'src-components-Checkbox-text__17XBM',
        description: 'src-components-Checkbox-description__1-816',
        clearfix: 'src-components-Checkbox-clearfix__2irHj',
        inline: 'src-components-Checkbox-inline__1JEED',
        wrapper: 'src-components-Checkbox-wrapper__3JmR1',
        original: 'src-components-Checkbox-original__3CBDl',
        intermediate: 'src-components-Checkbox-intermediate__3bNEk',
        checkbox: 'src-components-Checkbox-checkbox__3nwSj',
        fancy: 'src-components-Checkbox-fancy__1M2lj',
        fancyChecked: 'src-components-Checkbox-fancyChecked__CF2m3',
        wrapperDisabled: 'src-components-Checkbox-wrapperDisabled__2Gx22',
        indeterminate: 'src-components-Checkbox-indeterminate__3MFpa',
        textBold: 'src-components-Checkbox-textBold__2H8NI',
        textDisabled: 'src-components-Checkbox-textDisabled__1tJX6',
        icon: 'src-components-Checkbox-icon__1C2sv',
        fancyIcon: 'src-components-Checkbox-fancyIcon__2hKYH',
      };
    },
    7: function(e, t) {
      e.exports = {
        clearfix: 'src-components-Icon-clearfix__3zhE-',
        wrapper: 'src-components-Icon-wrapper__1y5Fo',
      };
    },
  })
);
