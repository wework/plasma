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
      t((t.s = 88))
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
    88: function(e, t, n) {
      'use strict';
      function r(e) {
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
      function c(e, t) {
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
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        s = (function() {
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
        i = n(0),
        l = r(i),
        p = n(1),
        f = n(89),
        d = r(f),
        h = (function(e) {
          function t(e) {
            o(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (n.onChange = function(e) {
                var t = n.props.onChange;
                n.setState({ text: e.currentTarget.value }), t && t(e);
              }),
              (n.onClear = function(e) {
                var t = n.props.onClear;
                n.setState({ text: '' }), t && t(e);
              }),
              (n.state = { text: '' }),
              n
            );
          }
          return (
            c(t, e),
            s(t, [
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  var t = e.value;
                  t !== this.props.value && this.setState({ text: t });
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.clearable,
                    n = e.clearIconUrl,
                    r = e.disabled,
                    o = e.iconUrl,
                    a = e.instructionText,
                    c = e.placeholder,
                    s = e.autoFocus;
                  return l.default.createElement(
                    'div',
                    u({}, (0, p.getDataAttrs)(this.props.data), { className: d.default.container }),
                    l.default.createElement(
                      'div',
                      { className: d.default.inputWrapper },
                      l.default.createElement(
                        'span',
                        { className: d.default.searchIconContainer },
                        l.default.createElement('img', { src: o, role: 'presentation' })
                      ),
                      l.default.createElement('input', {
                        className: d.default.input,
                        disabled: r,
                        onChange: this.onChange,
                        onKeyDown: this.props.onKeyDown,
                        placeholder: c,
                        type: 'text',
                        value: this.state.text,
                        autoFocus: s,
                      }),
                      t &&
                        n &&
                        '' !== this.state.text &&
                        l.default.createElement('img', {
                          className: d.default.clearableIcon,
                          onClick: this.onClear,
                          src: n,
                          role: 'presentation',
                        })
                    ),
                    a && l.default.createElement('div', { className: d.default.instructionText }, a)
                  );
                },
              },
            ]),
            t
          );
        })(i.Component);
      (h.defaultProps = { placeholder: 'Search...', onKeyDown: null, autoFocus: !1 }),
        (h.displayName = 'Plasma@Search'),
        (t.default = h);
    },
    89: function(e, t) {
      e.exports = {
        clearfix: 'src-components-Search-clearfix__3Y1K2',
        container: 'src-components-Search-container__2fbWJ',
        inputWrapper: 'src-components-Search-inputWrapper__y-uAE',
        searchIconContainer: 'src-components-Search-searchIconContainer__1zw0K',
        input: 'src-components-Search-input__61AAH',
        instructionText: 'src-components-Search-instructionText__F2rEa',
        clearableIcon: 'src-components-Search-clearableIcon__1txF9',
      };
    },
  })
);
