!(function(e, t) {
  for (var n in t) e[n] = t[n];
})(
  exports,
  (function(e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var a = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
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
      t((t.s = 71))
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
    71: function(e, t, n) {
      'use strict';
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a(e, t, n) {
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
      function o(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function u(e, t) {
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
      var s =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        p = (function() {
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
        i = n(2),
        c = n(0),
        f = r(c),
        d = n(3),
        m = r(d),
        b = n(72),
        h = r(b),
        v = n(1),
        _ = (function(e) {
          function t() {
            var e, n, r, a;
            o(this, t);
            for (var l = arguments.length, s = Array(l), p = 0; p < l; p++) s[p] = arguments[p];
            return (
              (n = r = u(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))
              )),
              (r.handleIncrement = function() {
                var e = r.props,
                  t = e.maxValue,
                  n = e.value,
                  a = e.step,
                  o = e.onChange,
                  u = (0, i.toNumber)(n),
                  l = u + a;
                t >= l && o((0, i.toString)(l));
              }),
              (r.handleDecrement = function() {
                var e = r.props,
                  t = e.minValue,
                  n = e.value,
                  a = e.step,
                  o = e.onChange,
                  u = (0, i.toNumber)(n),
                  l = u - a;
                t <= l && o((0, i.toString)(l));
              }),
              (r.handleChange = function(e) {
                r.props.onChange && r.props.onChange(e.nativeEvent.target.value);
              }),
              (r.handleBlur = function(e) {
                e.target.parentElement.classList.remove(h.default.wrapperFocused),
                  r.props.onBlur && r.props.onBlur(e.nativeEvent.target.value);
              }),
              (r.handleFocus = function(e) {
                e.target.parentElement.classList.add(h.default.wrapperFocused),
                  r.props.onFocus && r.props.onFocus(e.nativeEvent.target.value);
              }),
              (a = n),
              u(r, a)
            );
          }
          return (
            l(t, e),
            p(t, [
              {
                key: 'render',
                value: function() {
                  var e,
                    t = this.props,
                    n = t.disabled,
                    r = t.error,
                    o = t.data,
                    u = t.placeholder,
                    l = t.value,
                    p = t.step,
                    i = t.minValue,
                    c = t.maxValue,
                    d = (0, m.default)(
                      h.default.wrapper,
                      ((e = {}),
                      a(e, h.default.wrapperDisabled, n),
                      a(e, h.default.wrapperError, r),
                      e)
                    ),
                    b = (0, m.default)(h.default.spinner, a({}, h.default.spinnerDisabled, n)),
                    _ = (0, m.default)(h.default.input, a({}, h.default.inputDisabled, n)),
                    y = (0, m.default)(h.default.action, a({}, h.default.buttonDisabled, n));
                  return f.default.createElement(
                    'div',
                    s({}, (0, v.getDataAttrs)(o), { className: d }),
                    f.default.createElement('input', {
                      type: 'number',
                      placeholder: u,
                      className: _,
                      disabled: n,
                      value: l,
                      step: p,
                      min: i,
                      max: c,
                      onChange: this.handleChange,
                      onBlur: this.handleBlur,
                      onFocus: this.handleFocus,
                    }),
                    f.default.createElement(
                      'div',
                      { className: b },
                      f.default.createElement(
                        'div',
                        { className: y, onClick: !n && this.handleIncrement },
                        '+'
                      ),
                      f.default.createElement(
                        'div',
                        { className: y, onClick: !n && this.handleDecrement },
                        '-'
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(f.default.Component);
      (_.defaultProps = {
        value: '',
        placeholder: '',
        step: 1,
        maxValue: Number.MAX_SAFE_INTEGER,
        minValue: Number.MIN_SAFE_INTEGER,
        onChange: function() {},
      }),
        (_.displayName = 'Plasma@NumberInput'),
        (t.default = _);
    },
    72: function(e, t) {
      e.exports = {
        input: 'src-components-NumberInput-input__2iPjS',
        clearfix: 'src-components-NumberInput-clearfix__IdSxH',
        buttonDisabled: 'src-components-NumberInput-buttonDisabled__1mL2M',
        wrapperFocused: 'src-components-NumberInput-wrapperFocused__rtCoG',
        wrapperDisabled: 'src-components-NumberInput-wrapperDisabled__29kyT',
        wrapperError: 'src-components-NumberInput-wrapperError__3JQdd',
        inputDisabled: 'src-components-NumberInput-inputDisabled__3f-wf',
        wrapper: 'src-components-NumberInput-wrapper__1oZGU',
        spinner: 'src-components-NumberInput-spinner__276Gd',
        action: 'src-components-NumberInput-action__1zQWq',
        spinnerDisabled: 'src-components-NumberInput-spinnerDisabled__3ZmmA',
      };
    },
  })
);
