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
      t((t.s = 19))
    );
  })({
    0: function(e, t) {
      e.exports = require('react');
    },
    19: function(e, t, r) {
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
      var l = (function() {
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
        u = n(p),
        s = r(3),
        d = n(s),
        f = r(6),
        _ = n(f),
        m = (function(e) {
          function t() {
            var e, r, n, a;
            o(this, t);
            for (var i = arguments.length, l = Array(i), p = 0; p < i; p++) l[p] = arguments[p];
            return (
              (r = n = c(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l))
              )),
              (n._onClick = function() {
                n.props.onClick(n.props.id);
              }),
              (a = r),
              c(n, a)
            );
          }
          return (
            i(t, e),
            l(t, [
              {
                key: 'renderIconAndLabel',
                value: function() {
                  var e = this.props.label;
                  return u.default.createElement(
                    'div',
                    { className: _.default.iconAndLabelContainer },
                    u.default.createElement('div', { className: _.default.label }, e)
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
                    c = t.tagText,
                    i = (0, d.default)(
                      _.default.itemWrapper,
                      ((e = {}), a(e, _.default.darkBg, r), a(e, _.default.selected, n), e)
                    );
                  return o
                    ? u.default.createElement(
                        'div',
                        { className: i },
                        o,
                        c && u.default.createElement('div', { className: _.default.tag }, c)
                      )
                    : u.default.createElement(
                        'div',
                        { className: i, onClick: this._onClick },
                        this.renderIconAndLabel(),
                        c && u.default.createElement('div', { className: _.default.tag }, c)
                      );
                },
              },
            ]),
            t
          );
        })(p.Component);
      (m.defaultProps = { label: 'Label', iconSize: 16, selected: !1, tagText: null }),
        (m.displayName = 'Plasma@SideNavBarItem'),
        (t.default = m);
    },
    3: function(e, t) {
      e.exports = require('classnames');
    },
    6: function(e, t) {
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
  })
);
