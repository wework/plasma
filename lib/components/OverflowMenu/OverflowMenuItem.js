!(function(e, n) {
  for (var r in n) e[r] = n[r];
})(
  exports,
  (function(e) {
    function n(t) {
      if (r[t]) return r[t].exports;
      var o = (r[t] = { i: t, l: !1, exports: {} });
      return e[t].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    var r = {};
    return (
      (n.m = e),
      (n.c = r),
      (n.d = function(e, r, t) {
        n.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: t });
      }),
      (n.n = function(e) {
        var r =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(r, 'a', r), r;
      }),
      (n.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      }),
      (n.p = ''),
      n((n.s = 28))
    );
  })({
    0: function(e, n) {
      e.exports = require('react');
    },
    17: function(e, n) {
      e.exports = {
        revealableListItem: 'src-components-OverflowMenu-revealableListItem__A34a8',
        clearfix: 'src-components-OverflowMenu-clearfix__2Xf5m',
        overflow: 'src-components-OverflowMenu-overflow__k7TpV',
        container: 'src-components-OverflowMenu-container__1z8o8',
        action: 'src-components-OverflowMenu-action__38-0_',
        revealable: 'src-components-OverflowMenu-revealable__3-kiJ',
        openLeft: 'src-components-OverflowMenu-openLeft__3SJdt',
        revealed: 'src-components-OverflowMenu-revealed__3qoKU',
        revealableTopWrapper: 'src-components-OverflowMenu-revealableTopWrapper__2q3_Q',
        revealableTop: 'src-components-OverflowMenu-revealableTop__32qV6',
        labelWithText: 'src-components-OverflowMenu-labelWithText__ETA6L',
        revealableList: 'src-components-OverflowMenu-revealableList__1YJUE',
      };
    },
    28: function(e, n, r) {
      'use strict';
      function t(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(n, '__esModule', { value: !0 });
      var o = r(0),
        l = t(o),
        a = r(17),
        c = t(a),
        u = function(e) {
          var n = e.onClick,
            r = e.optionKey,
            t = e.text;
          return l.default.createElement(
            'li',
            {
              className: c.default.revealableListItem,
              onClick: (function(e) {
                function n() {
                  return e.apply(this, arguments);
                }
                return (
                  (n.toString = function() {
                    return e.toString();
                  }),
                  n
                );
              })(function() {
                return n(r);
              }),
            },
            t
          );
        };
      (u.displayName = 'Plasma@OverflowMenuItem'), (n.default = u);
    },
  })
);
