var d3 = Object.defineProperty,
  p3 = Object.defineProperties;
var h3 = Object.getOwnPropertyDescriptors;
var Fy = Object.getOwnPropertySymbols;
var v3 = Object.prototype.hasOwnProperty,
  g3 = Object.prototype.propertyIsEnumerable;
var $y = (e, t, n) =>
    t in e ? d3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  Ze = (e, t) => {
    for (var n in t || (t = {})) v3.call(t, n) && $y(e, n, t[n]);
    if (Fy) for (var n of Fy(t)) g3.call(t, n) && $y(e, n, t[n]);
    return e;
  },
  at = (e, t) => p3(e, h3(t));
const m3 = function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver(i => {
    for (const u of i)
      if (u.type === 'childList')
        for (const l of u.addedNodes) l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const u = {};
    return (
      i.integrity && (u.integrity = i.integrity),
      i.referrerpolicy && (u.referrerPolicy = i.referrerpolicy),
      i.crossorigin === 'use-credentials'
        ? (u.credentials = 'include')
        : i.crossorigin === 'anonymous'
        ? (u.credentials = 'omit')
        : (u.credentials = 'same-origin'),
      u
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const u = n(i);
    fetch(i.href, u);
  }
};
m3();
var ru =
    typeof globalThis != 'undefined'
      ? globalThis
      : typeof window != 'undefined'
      ? window
      : typeof global != 'undefined'
      ? global
      : typeof self != 'undefined'
      ? self
      : {},
  T = { exports: {} },
  Ke = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var zy = Object.getOwnPropertySymbols,
  y3 = Object.prototype.hasOwnProperty,
  w3 = Object.prototype.propertyIsEnumerable;
function S3(e) {
  if (e == null) throw new TypeError('Object.assign cannot be called with null or undefined');
  return Object(e);
}
function E3() {
  try {
    if (!Object.assign) return !1;
    var e = new String('abc');
    if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1;
    for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (u) {
      return t[u];
    });
    if (r.join('') !== '0123456789') return !1;
    var i = {};
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function (u) {
        i[u] = u;
      }),
      Object.keys(Object.assign({}, i)).join('') === 'abcdefghijklmnopqrst'
    );
  } catch (u) {
    return !1;
  }
}
var VS = E3()
  ? Object.assign
  : function (e, t) {
      for (var n, r = S3(e), i, u = 1; u < arguments.length; u++) {
        n = Object(arguments[u]);
        for (var l in n) y3.call(n, l) && (r[l] = n[l]);
        if (zy) {
          i = zy(n);
          for (var c = 0; c < i.length; c++) w3.call(n, i[c]) && (r[i[c]] = n[i[c]]);
        }
      }
      return r;
    };
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mv = VS,
  ka = 60103,
  XS = 60106;
Ke.Fragment = 60107;
Ke.StrictMode = 60108;
Ke.Profiler = 60114;
var GS = 60109,
  qS = 60110,
  ZS = 60112;
Ke.Suspense = 60113;
var KS = 60115,
  QS = 60116;
if (typeof Symbol == 'function' && Symbol.for) {
  var lr = Symbol.for;
  (ka = lr('react.element')),
    (XS = lr('react.portal')),
    (Ke.Fragment = lr('react.fragment')),
    (Ke.StrictMode = lr('react.strict_mode')),
    (Ke.Profiler = lr('react.profiler')),
    (GS = lr('react.provider')),
    (qS = lr('react.context')),
    (ZS = lr('react.forward_ref')),
    (Ke.Suspense = lr('react.suspense')),
    (KS = lr('react.memo')),
    (QS = lr('react.lazy'));
}
var Uy = typeof Symbol == 'function' && Symbol.iterator;
function _3(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Uy && e[Uy]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
function gl(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var JS = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  eE = {};
function Ra(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = eE), (this.updater = n || JS);
}
Ra.prototype.isReactComponent = {};
Ra.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null) throw Error(gl(85));
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Ra.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function tE() {}
tE.prototype = Ra.prototype;
function Pv(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = eE), (this.updater = n || JS);
}
var Av = (Pv.prototype = new tE());
Av.constructor = Pv;
Mv(Av, Ra.prototype);
Av.isPureReactComponent = !0;
var Dv = { current: null },
  nE = Object.prototype.hasOwnProperty,
  rE = { key: !0, ref: !0, __self: !0, __source: !0 };
function oE(e, t, n) {
  var r,
    i = {},
    u = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (u = '' + t.key), t))
      nE.call(t, r) && !rE.hasOwnProperty(r) && (i[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) i.children = n;
  else if (1 < c) {
    for (var f = Array(c), p = 0; p < c; p++) f[p] = arguments[p + 2];
    i.children = f;
  }
  if (e && e.defaultProps) for (r in ((c = e.defaultProps), c)) i[r] === void 0 && (i[r] = c[r]);
  return { $$typeof: ka, type: e, key: u, ref: l, props: i, _owner: Dv.current };
}
function x3(e, t) {
  return { $$typeof: ka, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function kv(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ka;
}
function b3(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var jy = /\/+/g;
function np(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? b3('' + e.key) : t.toString(36);
}
function Vs(e, t, n, r, i) {
  var u = typeof e;
  (u === 'undefined' || u === 'boolean') && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (u) {
      case 'string':
      case 'number':
        l = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ka:
          case XS:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === '' ? '.' + np(l, 0) : r),
      Array.isArray(i)
        ? ((n = ''),
          e != null && (n = e.replace(jy, '$&/') + '/'),
          Vs(i, t, n, '', function (p) {
            return p;
          }))
        : i != null &&
          (kv(i) &&
            (i = x3(
              i,
              n +
                (!i.key || (l && l.key === i.key) ? '' : ('' + i.key).replace(jy, '$&/') + '/') +
                e,
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), Array.isArray(e)))
    for (var c = 0; c < e.length; c++) {
      u = e[c];
      var f = r + np(u, c);
      l += Vs(u, t, n, f, i);
    }
  else if (((f = _3(e)), typeof f == 'function'))
    for (e = f.call(e), c = 0; !(u = e.next()).done; )
      (u = u.value), (f = r + np(u, c++)), (l += Vs(u, t, n, f, i));
  else if (u === 'object')
    throw (
      ((t = '' + e),
      Error(
        gl(
          31,
          t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t,
        ),
      ))
    );
  return l;
}
function ws(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Vs(e, r, '', '', function (u) {
      return t.call(n, u, i++);
    }),
    r
  );
}
function C3(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      (e._status = 0),
      (e._result = t),
      t.then(
        function (n) {
          e._status === 0 && ((n = n.default), (e._status = 1), (e._result = n));
        },
        function (n) {
          e._status === 0 && ((e._status = 2), (e._result = n));
        },
      );
  }
  if (e._status === 1) return e._result;
  throw e._result;
}
var iE = { current: null };
function uo() {
  var e = iE.current;
  if (e === null) throw Error(gl(321));
  return e;
}
var O3 = {
  ReactCurrentDispatcher: iE,
  ReactCurrentBatchConfig: { transition: 0 },
  ReactCurrentOwner: Dv,
  IsSomeRendererActing: { current: !1 },
  assign: Mv,
};
Ke.Children = {
  map: ws,
  forEach: function (e, t, n) {
    ws(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ws(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ws(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!kv(e)) throw Error(gl(143));
    return e;
  },
};
Ke.Component = Ra;
Ke.PureComponent = Pv;
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O3;
Ke.cloneElement = function (e, t, n) {
  if (e == null) throw Error(gl(267, e));
  var r = Mv({}, e.props),
    i = e.key,
    u = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((u = t.ref), (l = Dv.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var c = e.type.defaultProps;
    for (f in t)
      nE.call(t, f) &&
        !rE.hasOwnProperty(f) &&
        (r[f] = t[f] === void 0 && c !== void 0 ? c[f] : t[f]);
  }
  var f = arguments.length - 2;
  if (f === 1) r.children = n;
  else if (1 < f) {
    c = Array(f);
    for (var p = 0; p < f; p++) c[p] = arguments[p + 2];
    r.children = c;
  }
  return { $$typeof: ka, type: e.type, key: i, ref: u, props: r, _owner: l };
};
Ke.createContext = function (e, t) {
  return (
    t === void 0 && (t = null),
    (e = {
      $$typeof: qS,
      _calculateChangedBits: t,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = { $$typeof: GS, _context: e }),
    (e.Consumer = e)
  );
};
Ke.createElement = oE;
Ke.createFactory = function (e) {
  var t = oE.bind(null, e);
  return (t.type = e), t;
};
Ke.createRef = function () {
  return { current: null };
};
Ke.forwardRef = function (e) {
  return { $$typeof: ZS, render: e };
};
Ke.isValidElement = kv;
Ke.lazy = function (e) {
  return { $$typeof: QS, _payload: { _status: -1, _result: e }, _init: C3 };
};
Ke.memo = function (e, t) {
  return { $$typeof: KS, type: e, compare: t === void 0 ? null : t };
};
Ke.useCallback = function (e, t) {
  return uo().useCallback(e, t);
};
Ke.useContext = function (e, t) {
  return uo().useContext(e, t);
};
Ke.useDebugValue = function () {};
Ke.useEffect = function (e, t) {
  return uo().useEffect(e, t);
};
Ke.useImperativeHandle = function (e, t, n) {
  return uo().useImperativeHandle(e, t, n);
};
Ke.useLayoutEffect = function (e, t) {
  return uo().useLayoutEffect(e, t);
};
Ke.useMemo = function (e, t) {
  return uo().useMemo(e, t);
};
Ke.useReducer = function (e, t, n) {
  return uo().useReducer(e, t, n);
};
Ke.useRef = function (e) {
  return uo().useRef(e);
};
Ke.useState = function (e) {
  return uo().useState(e);
};
Ke.version = '17.0.2';
T.exports = Ke;
var Kc = T.exports,
  ml = { exports: {} },
  er = {},
  aE = { exports: {} },
  uE = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  var t, n, r, i;
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var u = performance;
    e.unstable_now = function () {
      return u.now();
    };
  } else {
    var l = Date,
      c = l.now();
    e.unstable_now = function () {
      return l.now() - c;
    };
  }
  if (typeof window == 'undefined' || typeof MessageChannel != 'function') {
    var f = null,
      p = null,
      h = function () {
        if (f !== null)
          try {
            var j = e.unstable_now();
            f(!0, j), (f = null);
          } catch (k) {
            throw (setTimeout(h, 0), k);
          }
      };
    (t = function (j) {
      f !== null ? setTimeout(t, 0, j) : ((f = j), setTimeout(h, 0));
    }),
      (n = function (j, k) {
        p = setTimeout(j, k);
      }),
      (r = function () {
        clearTimeout(p);
      }),
      (e.unstable_shouldYield = function () {
        return !1;
      }),
      (i = e.unstable_forceFrameRate = function () {});
  } else {
    var x = window.setTimeout,
      S = window.clearTimeout;
    if (typeof console != 'undefined') {
      var b = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != 'function' &&
        console.error(
          "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
        ),
        typeof b != 'function' &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
          );
    }
    var E = !1,
      _ = null,
      m = -1,
      v = 5,
      w = 0;
    (e.unstable_shouldYield = function () {
      return e.unstable_now() >= w;
    }),
      (i = function () {}),
      (e.unstable_forceFrameRate = function (j) {
        0 > j || 125 < j
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
            )
          : (v = 0 < j ? Math.floor(1e3 / j) : 5);
      });
    var N = new MessageChannel(),
      g = N.port2;
    (N.port1.onmessage = function () {
      if (_ !== null) {
        var j = e.unstable_now();
        w = j + v;
        try {
          _(!0, j) ? g.postMessage(null) : ((E = !1), (_ = null));
        } catch (k) {
          throw (g.postMessage(null), k);
        }
      } else E = !1;
    }),
      (t = function (j) {
        (_ = j), E || ((E = !0), g.postMessage(null));
      }),
      (n = function (j, k) {
        m = x(function () {
          j(e.unstable_now());
        }, k);
      }),
      (r = function () {
        S(m), (m = -1);
      });
  }
  function M(j, k) {
    var D = j.length;
    j.push(k);
    e: for (;;) {
      var B = (D - 1) >>> 1,
        q = j[B];
      if (q !== void 0 && 0 < F(q, k)) (j[B] = k), (j[D] = q), (D = B);
      else break e;
    }
  }
  function P(j) {
    return (j = j[0]), j === void 0 ? null : j;
  }
  function H(j) {
    var k = j[0];
    if (k !== void 0) {
      var D = j.pop();
      if (D !== k) {
        j[0] = D;
        e: for (var B = 0, q = j.length; B < q; ) {
          var Q = 2 * (B + 1) - 1,
            le = j[Q],
            de = Q + 1,
            pe = j[de];
          if (le !== void 0 && 0 > F(le, D))
            pe !== void 0 && 0 > F(pe, le)
              ? ((j[B] = pe), (j[de] = D), (B = de))
              : ((j[B] = le), (j[Q] = D), (B = Q));
          else if (pe !== void 0 && 0 > F(pe, D)) (j[B] = pe), (j[de] = D), (B = de);
          else break e;
        }
      }
      return k;
    }
    return null;
  }
  function F(j, k) {
    var D = j.sortIndex - k.sortIndex;
    return D !== 0 ? D : j.id - k.id;
  }
  var U = [],
    V = [],
    fe = 1,
    ae = null,
    he = 3,
    R = !1,
    Y = !1,
    W = !1;
  function X(j) {
    for (var k = P(V); k !== null; ) {
      if (k.callback === null) H(V);
      else if (k.startTime <= j) H(V), (k.sortIndex = k.expirationTime), M(U, k);
      else break;
      k = P(V);
    }
  }
  function ne(j) {
    if (((W = !1), X(j), !Y))
      if (P(U) !== null) (Y = !0), t(ce);
      else {
        var k = P(V);
        k !== null && n(ne, k.startTime - j);
      }
  }
  function ce(j, k) {
    (Y = !1), W && ((W = !1), r()), (R = !0);
    var D = he;
    try {
      for (
        X(k), ae = P(U);
        ae !== null && (!(ae.expirationTime > k) || (j && !e.unstable_shouldYield()));

      ) {
        var B = ae.callback;
        if (typeof B == 'function') {
          (ae.callback = null), (he = ae.priorityLevel);
          var q = B(ae.expirationTime <= k);
          (k = e.unstable_now()),
            typeof q == 'function' ? (ae.callback = q) : ae === P(U) && H(U),
            X(k);
        } else H(U);
        ae = P(U);
      }
      if (ae !== null) var Q = !0;
      else {
        var le = P(V);
        le !== null && n(ne, le.startTime - k), (Q = !1);
      }
      return Q;
    } finally {
      (ae = null), (he = D), (R = !1);
    }
  }
  var ue = i;
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      Y || R || ((Y = !0), t(ce));
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return he;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return P(U);
    }),
    (e.unstable_next = function (j) {
      switch (he) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = he;
      }
      var D = he;
      he = k;
      try {
        return j();
      } finally {
        he = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = ue),
    (e.unstable_runWithPriority = function (j, k) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var D = he;
      he = j;
      try {
        return k();
      } finally {
        he = D;
      }
    }),
    (e.unstable_scheduleCallback = function (j, k, D) {
      var B = e.unstable_now();
      switch (
        (typeof D == 'object' && D !== null
          ? ((D = D.delay), (D = typeof D == 'number' && 0 < D ? B + D : B))
          : (D = B),
        j)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = D + q),
        (j = {
          id: fe++,
          callback: k,
          priorityLevel: j,
          startTime: D,
          expirationTime: q,
          sortIndex: -1,
        }),
        D > B
          ? ((j.sortIndex = D),
            M(V, j),
            P(U) === null && j === P(V) && (W ? r() : (W = !0), n(ne, D - B)))
          : ((j.sortIndex = q), M(U, j), Y || R || ((Y = !0), t(ce))),
        j
      );
    }),
    (e.unstable_wrapCallback = function (j) {
      var k = he;
      return function () {
        var D = he;
        he = k;
        try {
          return j.apply(this, arguments);
        } finally {
          he = D;
        }
      };
    });
})(uE);
aE.exports = uE;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qc = T.exports,
  gt = VS,
  Lt = aE.exports;
function ve(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
if (!Qc) throw Error(ve(227));
var lE = new Set(),
  Wu = {};
function bi(e, t) {
  _a(e, t), _a(e + 'Capture', t);
}
function _a(e, t) {
  for (Wu[e] = t, e = 0; e < t.length; e++) lE.add(t[e]);
}
var oo = !(
    typeof window == 'undefined' ||
    typeof window.document == 'undefined' ||
    typeof window.document.createElement == 'undefined'
  ),
  N3 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Wy = Object.prototype.hasOwnProperty,
  Yy = {},
  Vy = {};
function T3(e) {
  return Wy.call(Vy, e) ? !0 : Wy.call(Yy, e) ? !1 : N3.test(e) ? (Vy[e] = !0) : ((Yy[e] = !0), !1);
}
function M3(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function P3(e, t, n, r) {
  if (t === null || typeof t == 'undefined' || M3(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function un(e, t, n, r, i, u, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = u),
    (this.removeEmptyString = l);
}
var Wt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Wt[e] = new un(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Wt[t] = new un(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Wt[e] = new un(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  Wt[e] = new un(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Wt[e] = new un(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Wt[e] = new un(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Wt[e] = new un(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Wt[e] = new un(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Wt[e] = new un(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Rv = /[\-:]([a-z])/g;
function Iv(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Rv, Iv);
    Wt[t] = new un(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Rv, Iv);
    Wt[t] = new un(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Rv, Iv);
  Wt[t] = new un(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Wt[e] = new un(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Wt.xlinkHref = new un('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Wt[e] = new un(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Lv(e, t, n, r) {
  var i = Wt.hasOwnProperty(t) ? Wt[t] : null,
    u =
      i !== null
        ? i.type === 0
        : r
        ? !1
        : !(!(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N'));
  u ||
    (P3(t, n, i, r) && (n = null),
    r || i === null
      ? T3(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ci = Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Eu = 60103,
  ci = 60106,
  Co = 60107,
  Hv = 60108,
  Mu = 60114,
  Bv = 60109,
  Fv = 60110,
  Jc = 60112,
  Pu = 60113,
  vc = 60120,
  ef = 60115,
  $v = 60116,
  zv = 60121,
  Uv = 60128,
  sE = 60129,
  jv = 60130,
  uh = 60131;
if (typeof Symbol == 'function' && Symbol.for) {
  var It = Symbol.for;
  (Eu = It('react.element')),
    (ci = It('react.portal')),
    (Co = It('react.fragment')),
    (Hv = It('react.strict_mode')),
    (Mu = It('react.profiler')),
    (Bv = It('react.provider')),
    (Fv = It('react.context')),
    (Jc = It('react.forward_ref')),
    (Pu = It('react.suspense')),
    (vc = It('react.suspense_list')),
    (ef = It('react.memo')),
    ($v = It('react.lazy')),
    (zv = It('react.block')),
    It('react.scope'),
    (Uv = It('react.opaque.id')),
    (sE = It('react.debug_trace_mode')),
    (jv = It('react.offscreen')),
    (uh = It('react.legacy_hidden'));
}
var Xy = typeof Symbol == 'function' && Symbol.iterator;
function ou(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Xy && e[Xy]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var rp;
function _u(e) {
  if (rp === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      rp = (t && t[1]) || '';
    }
  return (
    `
` +
    rp +
    e
  );
}
var op = !1;
function Ss(e, t) {
  if (!e || op) return '';
  op = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == 'string') {
      for (
        var i = f.stack.split(`
`),
          u = r.stack.split(`
`),
          l = i.length - 1,
          c = u.length - 1;
        1 <= l && 0 <= c && i[l] !== u[c];

      )
        c--;
      for (; 1 <= l && 0 <= c; l--, c--)
        if (i[l] !== u[c]) {
          if (l !== 1 || c !== 1)
            do
              if ((l--, c--, 0 > c || i[l] !== u[c]))
                return (
                  `
` + i[l].replace(' at new ', ' at ')
                );
            while (1 <= l && 0 <= c);
          break;
        }
    }
  } finally {
    (op = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? _u(e) : '';
}
function A3(e) {
  switch (e.tag) {
    case 5:
      return _u(e.type);
    case 16:
      return _u('Lazy');
    case 13:
      return _u('Suspense');
    case 19:
      return _u('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ss(e.type, !1)), e;
    case 11:
      return (e = Ss(e.type.render, !1)), e;
    case 22:
      return (e = Ss(e.type._render, !1)), e;
    case 1:
      return (e = Ss(e.type, !0)), e;
    default:
      return '';
  }
}
function ua(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Co:
      return 'Fragment';
    case ci:
      return 'Portal';
    case Mu:
      return 'Profiler';
    case Hv:
      return 'StrictMode';
    case Pu:
      return 'Suspense';
    case vc:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Fv:
        return (e.displayName || 'Context') + '.Consumer';
      case Bv:
        return (e._context.displayName || 'Context') + '.Provider';
      case Jc:
        var t = e.render;
        return (
          (t = t.displayName || t.name || ''),
          e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
        );
      case ef:
        return ua(e.type);
      case zv:
        return ua(e._render);
      case $v:
        (t = e._payload), (e = e._init);
        try {
          return ua(e(t));
        } catch (n) {}
    }
  return null;
}
function Uo(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'object':
    case 'string':
    case 'undefined':
      return e;
    default:
      return '';
  }
}
function cE(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function D3(e) {
  var t = cE(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n != 'undefined' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      u = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = '' + l), u.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = '' + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Es(e) {
  e._valueTracker || (e._valueTracker = D3(e));
}
function fE(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = cE(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function gc(e) {
  if (((e = e || (typeof document != 'undefined' ? document : void 0)), typeof e == 'undefined'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch (t) {
    return e.body;
  }
}
function lh(e, t) {
  var n = t.checked;
  return gt({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Gy(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Uo(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function dE(e, t) {
  (t = t.checked), t != null && Lv(e, 'checked', t, !1);
}
function sh(e, t) {
  dE(e, t);
  var n = Uo(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? ch(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ch(e, t.type, Uo(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function qy(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function ch(e, t, n) {
  (t !== 'number' || gc(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
function k3(e) {
  var t = '';
  return (
    Qc.Children.forEach(e, function (n) {
      n != null && (t += n);
    }),
    t
  );
}
function fh(e, t) {
  return (e = gt({ children: void 0 }, t)), (t = k3(t.children)) && (e.children = t), e;
}
function la(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Uo(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function dh(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(ve(91));
  return gt({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Zy(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(ve(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(ve(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Uo(n) };
}
function pE(e, t) {
  var n = Uo(t.value),
    r = Uo(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Ky(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
var ph = {
  html: 'http://www.w3.org/1999/xhtml',
  mathml: 'http://www.w3.org/1998/Math/MathML',
  svg: 'http://www.w3.org/2000/svg',
};
function hE(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function hh(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? hE(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var _s,
  vE = (function (e) {
    return typeof MSApp != 'undefined' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== ph.svg || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        _s = _s || document.createElement('div'),
          _s.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = _s.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yu(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Au = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  R3 = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Au).forEach(function (e) {
  R3.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Au[t] = Au[e]);
  });
});
function gE(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Au.hasOwnProperty(e) && Au[e])
    ? ('' + t).trim()
    : t + 'px';
}
function mE(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = gE(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var I3 = gt(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function vh(e, t) {
  if (t) {
    if (I3[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(ve(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(ve(60));
      if (!(typeof t.dangerouslySetInnerHTML == 'object' && '__html' in t.dangerouslySetInnerHTML))
        throw Error(ve(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(ve(62));
  }
}
function gh(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
function Wv(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var mh = null,
  sa = null,
  ca = null;
function Qy(e) {
  if ((e = wl(e))) {
    if (typeof mh != 'function') throw Error(ve(280));
    var t = e.stateNode;
    t && ((t = uf(t)), mh(e.stateNode, e.type, t));
  }
}
function yE(e) {
  sa ? (ca ? ca.push(e) : (ca = [e])) : (sa = e);
}
function wE() {
  if (sa) {
    var e = sa,
      t = ca;
    if (((ca = sa = null), Qy(e), t)) for (e = 0; e < t.length; e++) Qy(t[e]);
  }
}
function Yv(e, t) {
  return e(t);
}
function SE(e, t, n, r, i) {
  return e(t, n, r, i);
}
function Vv() {}
var EE = Yv,
  fi = !1,
  ip = !1;
function Xv() {
  (sa !== null || ca !== null) && (Vv(), wE());
}
function L3(e, t, n) {
  if (ip) return e(t, n);
  ip = !0;
  try {
    return EE(e, t, n);
  } finally {
    (ip = !1), Xv();
  }
}
function Vu(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = uf(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(ve(231, t, typeof n));
  return n;
}
var yh = !1;
if (oo)
  try {
    var iu = {};
    Object.defineProperty(iu, 'passive', {
      get: function () {
        yh = !0;
      },
    }),
      window.addEventListener('test', iu, iu),
      window.removeEventListener('test', iu, iu);
  } catch (e) {
    yh = !1;
  }
function H3(e, t, n, r, i, u, l, c, f) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, p);
  } catch (h) {
    this.onError(h);
  }
}
var Du = !1,
  mc = null,
  yc = !1,
  wh = null,
  B3 = {
    onError: function (e) {
      (Du = !0), (mc = e);
    },
  };
function F3(e, t, n, r, i, u, l, c, f) {
  (Du = !1), (mc = null), H3.apply(B3, arguments);
}
function $3(e, t, n, r, i, u, l, c, f) {
  if ((F3.apply(this, arguments), Du)) {
    if (Du) {
      var p = mc;
      (Du = !1), (mc = null);
    } else throw Error(ve(198));
    yc || ((yc = !0), (wh = p));
  }
}
function Oi(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 1026) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _E(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function Jy(e) {
  if (Oi(e) !== e) throw Error(ve(188));
}
function z3(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Oi(e)), t === null)) throw Error(ve(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var u = i.alternate;
    if (u === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === u.child) {
      for (u = i.child; u; ) {
        if (u === n) return Jy(i), e;
        if (u === r) return Jy(i), t;
        u = u.sibling;
      }
      throw Error(ve(188));
    }
    if (n.return !== r.return) (n = i), (r = u);
    else {
      for (var l = !1, c = i.child; c; ) {
        if (c === n) {
          (l = !0), (n = i), (r = u);
          break;
        }
        if (c === r) {
          (l = !0), (r = i), (n = u);
          break;
        }
        c = c.sibling;
      }
      if (!l) {
        for (c = u.child; c; ) {
          if (c === n) {
            (l = !0), (n = u), (r = i);
            break;
          }
          if (c === r) {
            (l = !0), (r = u), (n = i);
            break;
          }
          c = c.sibling;
        }
        if (!l) throw Error(ve(189));
      }
    }
    if (n.alternate !== r) throw Error(ve(190));
  }
  if (n.tag !== 3) throw Error(ve(188));
  return n.stateNode.current === n ? e : t;
}
function xE(e) {
  if (((e = z3(e)), !e)) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) (t.child.return = t), (t = t.child);
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return null;
}
function e1(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var bE,
  Gv,
  CE,
  OE,
  Sh = !1,
  Cr = [],
  ko = null,
  Ro = null,
  Io = null,
  Xu = new Map(),
  Gu = new Map(),
  au = [],
  t1 = 'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
    ' ',
  );
function Eh(e, t, n, r, i) {
  return {
    blockedOn: e,
    domEventName: t,
    eventSystemFlags: n | 16,
    nativeEvent: i,
    targetContainers: [r],
  };
}
function n1(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ko = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Ro = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Io = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Xu.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Gu.delete(t.pointerId);
  }
}
function uu(e, t, n, r, i, u) {
  return e === null || e.nativeEvent !== u
    ? ((e = Eh(t, n, r, i, u)), t !== null && ((t = wl(t)), t !== null && Gv(t)), e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function U3(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (ko = uu(ko, e, t, n, r, i)), !0;
    case 'dragenter':
      return (Ro = uu(Ro, e, t, n, r, i)), !0;
    case 'mouseover':
      return (Io = uu(Io, e, t, n, r, i)), !0;
    case 'pointerover':
      var u = i.pointerId;
      return Xu.set(u, uu(Xu.get(u) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (u = i.pointerId), Gu.set(u, uu(Gu.get(u) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function j3(e) {
  var t = di(e.target);
  if (t !== null) {
    var n = Oi(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _E(n)), t !== null)) {
          (e.blockedOn = t),
            OE(e.lanePriority, function () {
              Lt.unstable_runWithPriority(e.priority, function () {
                CE(n);
              });
            });
          return;
        }
      } else if (t === 3 && n.stateNode.hydrate) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Qv(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null) return (t = wl(n)), t !== null && Gv(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function r1(e, t, n) {
  Xs(e) && n.delete(t);
}
function W3() {
  for (Sh = !1; 0 < Cr.length; ) {
    var e = Cr[0];
    if (e.blockedOn !== null) {
      (e = wl(e.blockedOn)), e !== null && bE(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Qv(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && Cr.shift();
  }
  ko !== null && Xs(ko) && (ko = null),
    Ro !== null && Xs(Ro) && (Ro = null),
    Io !== null && Xs(Io) && (Io = null),
    Xu.forEach(r1),
    Gu.forEach(r1);
}
function lu(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Sh || ((Sh = !0), Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, W3)));
}
function NE(e) {
  function t(i) {
    return lu(i, e);
  }
  if (0 < Cr.length) {
    lu(Cr[0], e);
    for (var n = 1; n < Cr.length; n++) {
      var r = Cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ko !== null && lu(ko, e),
      Ro !== null && lu(Ro, e),
      Io !== null && lu(Io, e),
      Xu.forEach(t),
      Gu.forEach(t),
      n = 0;
    n < au.length;
    n++
  )
    (r = au[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < au.length && ((n = au[0]), n.blockedOn === null); )
    j3(n), n.blockedOn === null && au.shift();
}
function xs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Ji = {
    animationend: xs('Animation', 'AnimationEnd'),
    animationiteration: xs('Animation', 'AnimationIteration'),
    animationstart: xs('Animation', 'AnimationStart'),
    transitionend: xs('Transition', 'TransitionEnd'),
  },
  ap = {},
  TE = {};
oo &&
  ((TE = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ji.animationend.animation,
    delete Ji.animationiteration.animation,
    delete Ji.animationstart.animation),
  'TransitionEvent' in window || delete Ji.transitionend.transition);
function tf(e) {
  if (ap[e]) return ap[e];
  if (!Ji[e]) return e;
  var t = Ji[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in TE) return (ap[e] = t[n]);
  return e;
}
var ME = tf('animationend'),
  PE = tf('animationiteration'),
  AE = tf('animationstart'),
  DE = tf('transitionend'),
  kE = new Map(),
  qv = new Map(),
  Y3 = [
    'abort',
    'abort',
    ME,
    'animationEnd',
    PE,
    'animationIteration',
    AE,
    'animationStart',
    'canplay',
    'canPlay',
    'canplaythrough',
    'canPlayThrough',
    'durationchange',
    'durationChange',
    'emptied',
    'emptied',
    'encrypted',
    'encrypted',
    'ended',
    'ended',
    'error',
    'error',
    'gotpointercapture',
    'gotPointerCapture',
    'load',
    'load',
    'loadeddata',
    'loadedData',
    'loadedmetadata',
    'loadedMetadata',
    'loadstart',
    'loadStart',
    'lostpointercapture',
    'lostPointerCapture',
    'playing',
    'playing',
    'progress',
    'progress',
    'seeking',
    'seeking',
    'stalled',
    'stalled',
    'suspend',
    'suspend',
    'timeupdate',
    'timeUpdate',
    DE,
    'transitionEnd',
    'waiting',
    'waiting',
  ];
function Zv(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n],
      i = e[n + 1];
    (i = 'on' + (i[0].toUpperCase() + i.slice(1))), qv.set(r, t), kE.set(r, i), bi(i, [r]);
  }
}
var V3 = Lt.unstable_now;
V3();
var ct = 8;
function Ki(e) {
  if ((1 & e) !== 0) return (ct = 15), 1;
  if ((2 & e) !== 0) return (ct = 14), 2;
  if ((4 & e) !== 0) return (ct = 13), 4;
  var t = 24 & e;
  return t !== 0
    ? ((ct = 12), t)
    : (e & 32) !== 0
    ? ((ct = 11), 32)
    : ((t = 192 & e),
      t !== 0
        ? ((ct = 10), t)
        : (e & 256) !== 0
        ? ((ct = 9), 256)
        : ((t = 3584 & e),
          t !== 0
            ? ((ct = 8), t)
            : (e & 4096) !== 0
            ? ((ct = 7), 4096)
            : ((t = 4186112 & e),
              t !== 0
                ? ((ct = 6), t)
                : ((t = 62914560 & e),
                  t !== 0
                    ? ((ct = 5), t)
                    : e & 67108864
                    ? ((ct = 4), 67108864)
                    : (e & 134217728) !== 0
                    ? ((ct = 3), 134217728)
                    : ((t = 805306368 & e),
                      t !== 0
                        ? ((ct = 2), t)
                        : (1073741824 & e) !== 0
                        ? ((ct = 1), 1073741824)
                        : ((ct = 8), e))))));
}
function X3(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function G3(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(ve(358, e));
  }
}
function qu(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return (ct = 0);
  var r = 0,
    i = 0,
    u = e.expiredLanes,
    l = e.suspendedLanes,
    c = e.pingedLanes;
  if (u !== 0) (r = u), (i = ct = 15);
  else if (((u = n & 134217727), u !== 0)) {
    var f = u & ~l;
    f !== 0 ? ((r = Ki(f)), (i = ct)) : ((c &= u), c !== 0 && ((r = Ki(c)), (i = ct)));
  } else (u = n & ~l), u !== 0 ? ((r = Ki(u)), (i = ct)) : c !== 0 && ((r = Ki(c)), (i = ct));
  if (r === 0) return 0;
  if (
    ((r = 31 - jo(r)),
    (r = n & (((0 > r ? 0 : 1 << r) << 1) - 1)),
    t !== 0 && t !== r && (t & l) === 0)
  ) {
    if ((Ki(t), i <= ct)) return t;
    ct = i;
  }
  if (((t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - jo(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function RE(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function wc(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return (e = Qi(24 & ~t)), e === 0 ? wc(10, t) : e;
    case 10:
      return (e = Qi(192 & ~t)), e === 0 ? wc(8, t) : e;
    case 8:
      return (e = Qi(3584 & ~t)), e === 0 && ((e = Qi(4186112 & ~t)), e === 0 && (e = 512)), e;
    case 2:
      return (t = Qi(805306368 & ~t)), t === 0 && (t = 268435456), t;
  }
  throw Error(ve(358, e));
}
function Qi(e) {
  return e & -e;
}
function up(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function nf(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  (e.suspendedLanes &= r), (e.pingedLanes &= r), (e = e.eventTimes), (t = 31 - jo(t)), (e[t] = n);
}
var jo = Math.clz32 ? Math.clz32 : K3,
  q3 = Math.log,
  Z3 = Math.LN2;
function K3(e) {
  return e === 0 ? 32 : (31 - ((q3(e) / Z3) | 0)) | 0;
}
var Q3 = Lt.unstable_UserBlockingPriority,
  J3 = Lt.unstable_runWithPriority,
  Gs = !0;
function eD(e, t, n, r) {
  fi || Vv();
  var i = Kv,
    u = fi;
  fi = !0;
  try {
    SE(i, e, t, n, r);
  } finally {
    (fi = u) || Xv();
  }
}
function tD(e, t, n, r) {
  J3(Q3, Kv.bind(null, e, t, n, r));
}
function Kv(e, t, n, r) {
  if (Gs) {
    var i;
    if ((i = (t & 4) === 0) && 0 < Cr.length && -1 < t1.indexOf(e))
      (e = Eh(null, e, t, n, r)), Cr.push(e);
    else {
      var u = Qv(e, t, n, r);
      if (u === null) i && n1(e, r);
      else {
        if (i) {
          if (-1 < t1.indexOf(e)) {
            (e = Eh(u, e, t, n, r)), Cr.push(e);
            return;
          }
          if (U3(u, e, t, n, r)) return;
          n1(e, r);
        }
        XE(e, t, r, null, n);
      }
    }
  }
}
function Qv(e, t, n, r) {
  var i = Wv(r);
  if (((i = di(i)), i !== null)) {
    var u = Oi(i);
    if (u === null) i = null;
    else {
      var l = u.tag;
      if (l === 13) {
        if (((i = _E(u)), i !== null)) return i;
        i = null;
      } else if (l === 3) {
        if (u.stateNode.hydrate) return u.tag === 3 ? u.stateNode.containerInfo : null;
        i = null;
      } else u !== i && (i = null);
    }
  }
  return XE(e, t, r, i, n), null;
}
var To = null,
  Jv = null,
  qs = null;
function IE() {
  if (qs) return qs;
  var e,
    t = Jv,
    n = t.length,
    r,
    i = 'value' in To ? To.value : To.textContent,
    u = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[u - r]; r++);
  return (qs = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Zs(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function bs() {
  return !0;
}
function o1() {
  return !1;
}
function kn(e) {
  function t(n, r, i, u, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = u),
      (this.target = l),
      (this.currentTarget = null);
    for (var c in e) e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(u) : u[c]));
    return (
      (this.isDefaultPrevented = (
        u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
      )
        ? bs
        : o1),
      (this.isPropagationStopped = o1),
      this
    );
  }
  return (
    gt(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = bs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = bs));
      },
      persist: function () {},
      isPersistent: bs,
    }),
    t
  );
}
var Ia = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  eg = kn(Ia),
  yl = gt({}, Ia, { view: 0, detail: 0 }),
  nD = kn(yl),
  lp,
  sp,
  su,
  rf = gt({}, yl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: tg,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== su &&
            (su && e.type === 'mousemove'
              ? ((lp = e.screenX - su.screenX), (sp = e.screenY - su.screenY))
              : (sp = lp = 0),
            (su = e)),
          lp);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : sp;
    },
  }),
  i1 = kn(rf),
  rD = gt({}, rf, { dataTransfer: 0 }),
  oD = kn(rD),
  iD = gt({}, yl, { relatedTarget: 0 }),
  cp = kn(iD),
  aD = gt({}, Ia, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uD = kn(aD),
  lD = gt({}, Ia, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sD = kn(lD),
  cD = gt({}, Ia, { data: 0 }),
  a1 = kn(cD),
  fD = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  dD = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  pD = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function hD(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pD[e]) ? !!t[e] : !1;
}
function tg() {
  return hD;
}
var vD = gt({}, yl, {
    key: function (e) {
      if (e.key) {
        var t = fD[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Zs(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? dD[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tg,
    charCode: function (e) {
      return e.type === 'keypress' ? Zs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Zs(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  gD = kn(vD),
  mD = gt({}, rf, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  u1 = kn(mD),
  yD = gt({}, yl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tg,
  }),
  wD = kn(yD),
  SD = gt({}, Ia, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ED = kn(SD),
  _D = gt({}, rf, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xD = kn(_D),
  bD = [9, 13, 27, 32],
  ng = oo && 'CompositionEvent' in window,
  ku = null;
oo && 'documentMode' in document && (ku = document.documentMode);
var CD = oo && 'TextEvent' in window && !ku,
  LE = oo && (!ng || (ku && 8 < ku && 11 >= ku)),
  l1 = String.fromCharCode(32),
  s1 = !1;
function HE(e, t) {
  switch (e) {
    case 'keyup':
      return bD.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function BE(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ea = !1;
function OD(e, t) {
  switch (e) {
    case 'compositionend':
      return BE(t);
    case 'keypress':
      return t.which !== 32 ? null : ((s1 = !0), l1);
    case 'textInput':
      return (e = t.data), e === l1 && s1 ? null : e;
    default:
      return null;
  }
}
function ND(e, t) {
  if (ea)
    return e === 'compositionend' || (!ng && HE(e, t))
      ? ((e = IE()), (qs = Jv = To = null), (ea = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return LE && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var TD = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function c1(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!TD[e.type] : t === 'textarea';
}
function FE(e, t, n, r) {
  yE(r),
    (t = Sc(t, 'onChange')),
    0 < t.length &&
      ((n = new eg('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Ru = null,
  Zu = null;
function MD(e) {
  WE(e, 0);
}
function of(e) {
  var t = na(e);
  if (fE(t)) return e;
}
function PD(e, t) {
  if (e === 'change') return t;
}
var $E = !1;
if (oo) {
  var fp;
  if (oo) {
    var dp = 'oninput' in document;
    if (!dp) {
      var f1 = document.createElement('div');
      f1.setAttribute('oninput', 'return;'), (dp = typeof f1.oninput == 'function');
    }
    fp = dp;
  } else fp = !1;
  $E = fp && (!document.documentMode || 9 < document.documentMode);
}
function d1() {
  Ru && (Ru.detachEvent('onpropertychange', zE), (Zu = Ru = null));
}
function zE(e) {
  if (e.propertyName === 'value' && of(Zu)) {
    var t = [];
    if ((FE(t, Zu, e, Wv(e)), (e = MD), fi)) e(t);
    else {
      fi = !0;
      try {
        Yv(e, t);
      } finally {
        (fi = !1), Xv();
      }
    }
  }
}
function AD(e, t, n) {
  e === 'focusin'
    ? (d1(), (Ru = t), (Zu = n), Ru.attachEvent('onpropertychange', zE))
    : e === 'focusout' && d1();
}
function DD(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return of(Zu);
}
function kD(e, t) {
  if (e === 'click') return of(t);
}
function RD(e, t) {
  if (e === 'input' || e === 'change') return of(t);
}
function ID(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xn = typeof Object.is == 'function' ? Object.is : ID,
  LD = Object.prototype.hasOwnProperty;
function Ku(e, t) {
  if (Xn(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) if (!LD.call(t, n[r]) || !Xn(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function p1(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function h1(e, t) {
  var n = p1(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = p1(n);
  }
}
function UE(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? UE(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function v1() {
  for (var e = window, t = gc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch (r) {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = gc(e.document);
  }
  return t;
}
function _h(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
var HD = oo && 'documentMode' in document && 11 >= document.documentMode,
  ta = null,
  xh = null,
  Iu = null,
  bh = !1;
function g1(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bh ||
    ta == null ||
    ta !== gc(r) ||
    ((r = ta),
    'selectionStart' in r && _h(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Iu && Ku(Iu, r)) ||
      ((Iu = r),
      (r = Sc(xh, 'onSelect')),
      0 < r.length &&
        ((t = new eg('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ta))));
}
Zv(
  'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
    ' ',
  ),
  0,
);
Zv(
  'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
    ' ',
  ),
  1,
);
Zv(Y3, 2);
for (
  var m1 = 'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
      ' ',
    ),
    pp = 0;
  pp < m1.length;
  pp++
)
  qv.set(m1[pp], 0);
_a('onMouseEnter', ['mouseout', 'mouseover']);
_a('onMouseLeave', ['mouseout', 'mouseover']);
_a('onPointerEnter', ['pointerout', 'pointerover']);
_a('onPointerLeave', ['pointerout', 'pointerover']);
bi('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
bi(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '),
);
bi('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
bi('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
bi('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
bi('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var xu = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
    ' ',
  ),
  jE = new Set('cancel close invalid load scroll toggle'.split(' ').concat(xu));
function y1(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), $3(r, t, void 0, e), (e.currentTarget = null);
}
function WE(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var u = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var c = r[l],
            f = c.instance,
            p = c.currentTarget;
          if (((c = c.listener), f !== u && i.isPropagationStopped())) break e;
          y1(i, c, p), (u = f);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((c = r[l]),
            (f = c.instance),
            (p = c.currentTarget),
            (c = c.listener),
            f !== u && i.isPropagationStopped())
          )
            break e;
          y1(i, c, p), (u = f);
        }
    }
  }
  if (yc) throw ((e = wh), (yc = !1), (wh = null), e);
}
function dt(e, t) {
  var n = qE(t),
    r = e + '__bubble';
  n.has(r) || (VE(t, e, 2, !1), n.add(r));
}
var w1 = '_reactListening' + Math.random().toString(36).slice(2);
function YE(e) {
  e[w1] ||
    ((e[w1] = !0),
    lE.forEach(function (t) {
      jE.has(t) || S1(t, !1, e, null), S1(t, !0, e, null);
    }));
}
function S1(e, t, n, r) {
  var i = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
    u = n;
  if (
    (e === 'selectionchange' && n.nodeType !== 9 && (u = n.ownerDocument),
    r !== null && !t && jE.has(e))
  ) {
    if (e !== 'scroll') return;
    (i |= 2), (u = r);
  }
  var l = qE(u),
    c = e + '__' + (t ? 'capture' : 'bubble');
  l.has(c) || (t && (i |= 4), VE(u, e, i, t), l.add(c));
}
function VE(e, t, n, r) {
  var i = qv.get(t);
  switch (i === void 0 ? 2 : i) {
    case 0:
      i = eD;
      break;
    case 1:
      i = tD;
      break;
    default:
      i = Kv;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !yh || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function XE(e, t, n, r, i) {
  var u = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var c = r.stateNode.containerInfo;
        if (c === i || (c.nodeType === 8 && c.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var f = l.tag;
            if (
              (f === 3 || f === 4) &&
              ((f = l.stateNode.containerInfo), f === i || (f.nodeType === 8 && f.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; c !== null; ) {
          if (((l = di(c)), l === null)) return;
          if (((f = l.tag), f === 5 || f === 6)) {
            r = u = l;
            continue e;
          }
          c = c.parentNode;
        }
      }
      r = r.return;
    }
  L3(function () {
    var p = u,
      h = Wv(n),
      x = [];
    e: {
      var S = kE.get(e);
      if (S !== void 0) {
        var b = eg,
          E = e;
        switch (e) {
          case 'keypress':
            if (Zs(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            b = gD;
            break;
          case 'focusin':
            (E = 'focus'), (b = cp);
            break;
          case 'focusout':
            (E = 'blur'), (b = cp);
            break;
          case 'beforeblur':
          case 'afterblur':
            b = cp;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            b = i1;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            b = oD;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            b = wD;
            break;
          case ME:
          case PE:
          case AE:
            b = uD;
            break;
          case DE:
            b = ED;
            break;
          case 'scroll':
            b = nD;
            break;
          case 'wheel':
            b = xD;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            b = sD;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            b = u1;
        }
        var _ = (t & 4) !== 0,
          m = !_ && e === 'scroll',
          v = _ ? (S !== null ? S + 'Capture' : null) : S;
        _ = [];
        for (var w = p, N; w !== null; ) {
          N = w;
          var g = N.stateNode;
          if (
            (N.tag === 5 &&
              g !== null &&
              ((N = g), v !== null && ((g = Vu(w, v)), g != null && _.push(Qu(w, g, N)))),
            m)
          )
            break;
          w = w.return;
        }
        0 < _.length && ((S = new b(S, E, null, n, h)), x.push({ event: S, listeners: _ }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((S = e === 'mouseover' || e === 'pointerover'),
          (b = e === 'mouseout' || e === 'pointerout'),
          S && (t & 16) === 0 && (E = n.relatedTarget || n.fromElement) && (di(E) || E[La]))
        )
          break e;
        if (
          (b || S) &&
          ((S =
            h.window === h ? h : (S = h.ownerDocument) ? S.defaultView || S.parentWindow : window),
          b
            ? ((E = n.relatedTarget || n.toElement),
              (b = p),
              (E = E ? di(E) : null),
              E !== null && ((m = Oi(E)), E !== m || (E.tag !== 5 && E.tag !== 6)) && (E = null))
            : ((b = null), (E = p)),
          b !== E)
        ) {
          if (
            ((_ = i1),
            (g = 'onMouseLeave'),
            (v = 'onMouseEnter'),
            (w = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((_ = u1), (g = 'onPointerLeave'), (v = 'onPointerEnter'), (w = 'pointer')),
            (m = b == null ? S : na(b)),
            (N = E == null ? S : na(E)),
            (S = new _(g, w + 'leave', b, n, h)),
            (S.target = m),
            (S.relatedTarget = N),
            (g = null),
            di(h) === p &&
              ((_ = new _(v, w + 'enter', E, n, h)),
              (_.target = N),
              (_.relatedTarget = m),
              (g = _)),
            (m = g),
            b && E)
          )
            t: {
              for (_ = b, v = E, w = 0, N = _; N; N = Gi(N)) w++;
              for (N = 0, g = v; g; g = Gi(g)) N++;
              for (; 0 < w - N; ) (_ = Gi(_)), w--;
              for (; 0 < N - w; ) (v = Gi(v)), N--;
              for (; w--; ) {
                if (_ === v || (v !== null && _ === v.alternate)) break t;
                (_ = Gi(_)), (v = Gi(v));
              }
              _ = null;
            }
          else _ = null;
          b !== null && E1(x, S, b, _, !1), E !== null && m !== null && E1(x, m, E, _, !0);
        }
      }
      e: {
        if (
          ((S = p ? na(p) : window),
          (b = S.nodeName && S.nodeName.toLowerCase()),
          b === 'select' || (b === 'input' && S.type === 'file'))
        )
          var M = PD;
        else if (c1(S))
          if ($E) M = RD;
          else {
            M = DD;
            var P = AD;
          }
        else
          (b = S.nodeName) &&
            b.toLowerCase() === 'input' &&
            (S.type === 'checkbox' || S.type === 'radio') &&
            (M = kD);
        if (M && (M = M(e, p))) {
          FE(x, M, n, h);
          break e;
        }
        P && P(e, S, p),
          e === 'focusout' &&
            (P = S._wrapperState) &&
            P.controlled &&
            S.type === 'number' &&
            ch(S, 'number', S.value);
      }
      switch (((P = p ? na(p) : window), e)) {
        case 'focusin':
          (c1(P) || P.contentEditable === 'true') && ((ta = P), (xh = p), (Iu = null));
          break;
        case 'focusout':
          Iu = xh = ta = null;
          break;
        case 'mousedown':
          bh = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (bh = !1), g1(x, n, h);
          break;
        case 'selectionchange':
          if (HD) break;
        case 'keydown':
        case 'keyup':
          g1(x, n, h);
      }
      var H;
      if (ng)
        e: {
          switch (e) {
            case 'compositionstart':
              var F = 'onCompositionStart';
              break e;
            case 'compositionend':
              F = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              F = 'onCompositionUpdate';
              break e;
          }
          F = void 0;
        }
      else
        ea
          ? HE(e, n) && (F = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (F = 'onCompositionStart');
      F &&
        (LE &&
          n.locale !== 'ko' &&
          (ea || F !== 'onCompositionStart'
            ? F === 'onCompositionEnd' && ea && (H = IE())
            : ((To = h), (Jv = 'value' in To ? To.value : To.textContent), (ea = !0))),
        (P = Sc(p, F)),
        0 < P.length &&
          ((F = new a1(F, e, null, n, h)),
          x.push({ event: F, listeners: P }),
          H ? (F.data = H) : ((H = BE(n)), H !== null && (F.data = H)))),
        (H = CD ? OD(e, n) : ND(e, n)) &&
          ((p = Sc(p, 'onBeforeInput')),
          0 < p.length &&
            ((h = new a1('onBeforeInput', 'beforeinput', null, n, h)),
            x.push({ event: h, listeners: p }),
            (h.data = H)));
    }
    WE(x, t);
  });
}
function Qu(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Sc(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      u = i.stateNode;
    i.tag === 5 &&
      u !== null &&
      ((i = u),
      (u = Vu(e, n)),
      u != null && r.unshift(Qu(e, u, i)),
      (u = Vu(e, t)),
      u != null && r.push(Qu(e, u, i))),
      (e = e.return);
  }
  return r;
}
function Gi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function E1(e, t, n, r, i) {
  for (var u = t._reactName, l = []; n !== null && n !== r; ) {
    var c = n,
      f = c.alternate,
      p = c.stateNode;
    if (f !== null && f === r) break;
    c.tag === 5 &&
      p !== null &&
      ((c = p),
      i
        ? ((f = Vu(n, u)), f != null && l.unshift(Qu(n, f, c)))
        : i || ((f = Vu(n, u)), f != null && l.push(Qu(n, f, c)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
function Ec() {}
var hp = null,
  vp = null;
function GE(e, t) {
  switch (e) {
    case 'button':
    case 'input':
    case 'select':
    case 'textarea':
      return !!t.autoFocus;
  }
  return !1;
}
function Ch(e, t) {
  return (
    e === 'textarea' ||
    e === 'option' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var _1 = typeof setTimeout == 'function' ? setTimeout : void 0,
  BD = typeof clearTimeout == 'function' ? clearTimeout : void 0;
function rg(e) {
  e.nodeType === 1
    ? (e.textContent = '')
    : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ''));
}
function fa(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function x1(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gp = 0;
function FD(e) {
  return { $$typeof: Uv, toString: e, valueOf: e };
}
var af = Math.random().toString(36).slice(2),
  Mo = '__reactFiber$' + af,
  _c = '__reactProps$' + af,
  La = '__reactContainer$' + af,
  b1 = '__reactEvents$' + af;
function di(e) {
  var t = e[Mo];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[La] || n[Mo])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = x1(e); e !== null; ) {
          if ((n = e[Mo])) return n;
          e = x1(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function wl(e) {
  return (
    (e = e[Mo] || e[La]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function na(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(ve(33));
}
function uf(e) {
  return e[_c] || null;
}
function qE(e) {
  var t = e[b1];
  return t === void 0 && (t = e[b1] = new Set()), t;
}
var Oh = [],
  ra = -1;
function Go(e) {
  return { current: e };
}
function pt(e) {
  0 > ra || ((e.current = Oh[ra]), (Oh[ra] = null), ra--);
}
function Et(e, t) {
  ra++, (Oh[ra] = e.current), (e.current = t);
}
var Wo = {},
  Jt = Go(Wo),
  vn = Go(!1),
  yi = Wo;
function xa(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Wo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    u;
  for (u in n) i[u] = t[u];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function gn(e) {
  return (e = e.childContextTypes), e != null;
}
function xc() {
  pt(vn), pt(Jt);
}
function C1(e, t, n) {
  if (Jt.current !== Wo) throw Error(ve(168));
  Et(Jt, t), Et(vn, n);
}
function ZE(e, t, n) {
  var r = e.stateNode;
  if (((e = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(ve(108, ua(t) || 'Unknown', i));
  return gt({}, n, r);
}
function Ks(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Wo),
    (yi = Jt.current),
    Et(Jt, e),
    Et(vn, vn.current),
    !0
  );
}
function O1(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(ve(169));
  n
    ? ((e = ZE(e, t, yi)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      pt(vn),
      pt(Jt),
      Et(Jt, e))
    : pt(vn),
    Et(vn, n);
}
var og = null,
  mi = null,
  $D = Lt.unstable_runWithPriority,
  ig = Lt.unstable_scheduleCallback,
  Nh = Lt.unstable_cancelCallback,
  zD = Lt.unstable_shouldYield,
  N1 = Lt.unstable_requestPaint,
  Th = Lt.unstable_now,
  UD = Lt.unstable_getCurrentPriorityLevel,
  lf = Lt.unstable_ImmediatePriority,
  KE = Lt.unstable_UserBlockingPriority,
  QE = Lt.unstable_NormalPriority,
  JE = Lt.unstable_LowPriority,
  e_ = Lt.unstable_IdlePriority,
  mp = {},
  jD = N1 !== void 0 ? N1 : function () {},
  Kr = null,
  Qs = null,
  yp = !1,
  T1 = Th(),
  Kt =
    1e4 > T1
      ? Th
      : function () {
          return Th() - T1;
        };
function ba() {
  switch (UD()) {
    case lf:
      return 99;
    case KE:
      return 98;
    case QE:
      return 97;
    case JE:
      return 96;
    case e_:
      return 95;
    default:
      throw Error(ve(332));
  }
}
function t_(e) {
  switch (e) {
    case 99:
      return lf;
    case 98:
      return KE;
    case 97:
      return QE;
    case 96:
      return JE;
    case 95:
      return e_;
    default:
      throw Error(ve(332));
  }
}
function wi(e, t) {
  return (e = t_(e)), $D(e, t);
}
function Ju(e, t, n) {
  return (e = t_(e)), ig(e, t, n);
}
function Lr() {
  if (Qs !== null) {
    var e = Qs;
    (Qs = null), Nh(e);
  }
  n_();
}
function n_() {
  if (!yp && Kr !== null) {
    yp = !0;
    var e = 0;
    try {
      var t = Kr;
      wi(99, function () {
        for (; e < t.length; e++) {
          var n = t[e];
          do n = n(!0);
          while (n !== null);
        }
      }),
        (Kr = null);
    } catch (n) {
      throw (Kr !== null && (Kr = Kr.slice(e + 1)), ig(lf, Lr), n);
    } finally {
      yp = !1;
    }
  }
}
var WD = Ci.ReactCurrentBatchConfig;
function cr(e, t) {
  if (e && e.defaultProps) {
    (t = gt({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var bc = Go(null),
  Cc = null,
  oa = null,
  Oc = null;
function ag() {
  Oc = oa = Cc = null;
}
function ug(e) {
  var t = bc.current;
  pt(bc), (e.type._context._currentValue = t);
}
function r_(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else (e.childLanes |= t), n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function da(e, t) {
  (Cc = e),
    (Oc = oa = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (dr = !0), (e.firstContext = null));
}
function Zn(e, t) {
  if (Oc !== e && t !== !1 && t !== 0)
    if (
      ((typeof t != 'number' || t === 1073741823) && ((Oc = e), (t = 1073741823)),
      (t = { context: e, observedBits: t, next: null }),
      oa === null)
    ) {
      if (Cc === null) throw Error(ve(308));
      (oa = t), (Cc.dependencies = { lanes: 0, firstContext: t, responders: null });
    } else oa = oa.next = t;
  return e._currentValue;
}
var xo = !1;
function lg(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function o_(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Lo(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ho(e, t) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
  }
}
function M1(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      u = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        u === null ? (i = u = l) : (u = u.next = l), (n = n.next);
      } while (n !== null);
      u === null ? (i = u = t) : (u = u.next = t);
    } else i = u = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: u,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function el(e, t, n, r) {
  var i = e.updateQueue;
  xo = !1;
  var u = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    c = i.shared.pending;
  if (c !== null) {
    i.shared.pending = null;
    var f = c,
      p = f.next;
    (f.next = null), l === null ? (u = p) : (l.next = p), (l = f);
    var h = e.alternate;
    if (h !== null) {
      h = h.updateQueue;
      var x = h.lastBaseUpdate;
      x !== l && (x === null ? (h.firstBaseUpdate = p) : (x.next = p), (h.lastBaseUpdate = f));
    }
  }
  if (u !== null) {
    (x = i.baseState), (l = 0), (h = p = f = null);
    do {
      c = u.lane;
      var S = u.eventTime;
      if ((r & c) === c) {
        h !== null &&
          (h = h.next = {
            eventTime: S,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          });
        e: {
          var b = e,
            E = u;
          switch (((c = t), (S = n), E.tag)) {
            case 1:
              if (((b = E.payload), typeof b == 'function')) {
                x = b.call(S, x, c);
                break e;
              }
              x = b;
              break e;
            case 3:
              b.flags = (b.flags & -4097) | 64;
            case 0:
              if (((b = E.payload), (c = typeof b == 'function' ? b.call(S, x, c) : b), c == null))
                break e;
              x = gt({}, x, c);
              break e;
            case 2:
              xo = !0;
          }
        }
        u.callback !== null &&
          ((e.flags |= 32), (c = i.effects), c === null ? (i.effects = [u]) : c.push(u));
      } else
        (S = {
          eventTime: S,
          lane: c,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((p = h = S), (f = x)) : (h = h.next = S),
          (l |= c);
      if (((u = u.next), u === null)) {
        if (((c = i.shared.pending), c === null)) break;
        (u = c.next), (c.next = null), (i.lastBaseUpdate = c), (i.shared.pending = null);
      }
    } while (1);
    h === null && (f = x),
      (i.baseState = f),
      (i.firstBaseUpdate = p),
      (i.lastBaseUpdate = h),
      (El |= l),
      (e.lanes = l),
      (e.memoizedState = x);
  }
}
function P1(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(ve(191, i));
        i.call(r);
      }
    }
}
var i_ = new Qc.Component().refs;
function Nc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : gt({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var sf = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Oi(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pn(),
      i = Bo(e),
      u = Lo(r, i);
    (u.payload = t), n != null && (u.callback = n), Ho(e, u), Fo(e, i, r);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pn(),
      i = Bo(e),
      u = Lo(r, i);
    (u.tag = 1), (u.payload = t), n != null && (u.callback = n), Ho(e, u), Fo(e, i, r);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pn(),
      r = Bo(e),
      i = Lo(n, r);
    (i.tag = 2), t != null && (i.callback = t), Ho(e, i), Fo(e, r, n);
  },
};
function A1(e, t, n, r, i, u, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, u, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ku(n, r) || !Ku(i, u)
      : !0
  );
}
function a_(e, t, n) {
  var r = !1,
    i = Wo,
    u = t.contextType;
  return (
    typeof u == 'object' && u !== null
      ? (u = Zn(u))
      : ((i = gn(t) ? yi : Jt.current),
        (r = t.contextTypes),
        (u = (r = r != null) ? xa(e, i) : Wo)),
    (t = new t(n, u)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = sf),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = u)),
    t
  );
}
function D1(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && sf.enqueueReplaceState(t, t.state, null);
}
function Mh(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = i_), lg(e);
  var u = t.contextType;
  typeof u == 'object' && u !== null
    ? (i.context = Zn(u))
    : ((u = gn(t) ? yi : Jt.current), (i.context = xa(e, u))),
    el(e, n, i, r),
    (i.state = e.memoizedState),
    (u = t.getDerivedStateFromProps),
    typeof u == 'function' && (Nc(e, t, u, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && sf.enqueueReplaceState(i, i.state, null),
      el(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4);
}
var Cs = Array.isArray;
function cu(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(ve(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(ve(147, e));
      var i = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
        ? t.ref
        : ((t = function (u) {
            var l = r.refs;
            l === i_ && (l = r.refs = {}), u === null ? delete l[i] : (l[i] = u);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(ve(284));
    if (!n._owner) throw Error(ve(290, e));
  }
  return e;
}
function Os(e, t) {
  if (e.type !== 'textarea')
    throw Error(
      ve(
        31,
        Object.prototype.toString.call(t) === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : t,
      ),
    );
}
function u_(e) {
  function t(m, v) {
    if (e) {
      var w = m.lastEffect;
      w !== null ? ((w.nextEffect = v), (m.lastEffect = v)) : (m.firstEffect = m.lastEffect = v),
        (v.nextEffect = null),
        (v.flags = 8);
    }
  }
  function n(m, v) {
    if (!e) return null;
    for (; v !== null; ) t(m, v), (v = v.sibling);
    return null;
  }
  function r(m, v) {
    for (m = new Map(); v !== null; )
      v.key !== null ? m.set(v.key, v) : m.set(v.index, v), (v = v.sibling);
    return m;
  }
  function i(m, v) {
    return (m = Vo(m, v)), (m.index = 0), (m.sibling = null), m;
  }
  function u(m, v, w) {
    return (
      (m.index = w),
      e
        ? ((w = m.alternate),
          w !== null ? ((w = w.index), w < v ? ((m.flags = 2), v) : w) : ((m.flags = 2), v))
        : v
    );
  }
  function l(m) {
    return e && m.alternate === null && (m.flags = 2), m;
  }
  function c(m, v, w, N) {
    return v === null || v.tag !== 6
      ? ((v = xp(w, m.mode, N)), (v.return = m), v)
      : ((v = i(v, w)), (v.return = m), v);
  }
  function f(m, v, w, N) {
    return v !== null && v.elementType === w.type
      ? ((N = i(v, w.props)), (N.ref = cu(m, v, w)), (N.return = m), N)
      : ((N = nc(w.type, w.key, w.props, null, m.mode, N)),
        (N.ref = cu(m, v, w)),
        (N.return = m),
        N);
  }
  function p(m, v, w, N) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== w.containerInfo ||
      v.stateNode.implementation !== w.implementation
      ? ((v = bp(w, m.mode, N)), (v.return = m), v)
      : ((v = i(v, w.children || [])), (v.return = m), v);
  }
  function h(m, v, w, N, g) {
    return v === null || v.tag !== 7
      ? ((v = ga(w, m.mode, N, g)), (v.return = m), v)
      : ((v = i(v, w)), (v.return = m), v);
  }
  function x(m, v, w) {
    if (typeof v == 'string' || typeof v == 'number')
      return (v = xp('' + v, m.mode, w)), (v.return = m), v;
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Eu:
          return (
            (w = nc(v.type, v.key, v.props, null, m.mode, w)),
            (w.ref = cu(m, null, v)),
            (w.return = m),
            w
          );
        case ci:
          return (v = bp(v, m.mode, w)), (v.return = m), v;
      }
      if (Cs(v) || ou(v)) return (v = ga(v, m.mode, w, null)), (v.return = m), v;
      Os(m, v);
    }
    return null;
  }
  function S(m, v, w, N) {
    var g = v !== null ? v.key : null;
    if (typeof w == 'string' || typeof w == 'number') return g !== null ? null : c(m, v, '' + w, N);
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case Eu:
          return w.key === g
            ? w.type === Co
              ? h(m, v, w.props.children, N, g)
              : f(m, v, w, N)
            : null;
        case ci:
          return w.key === g ? p(m, v, w, N) : null;
      }
      if (Cs(w) || ou(w)) return g !== null ? null : h(m, v, w, N, null);
      Os(m, w);
    }
    return null;
  }
  function b(m, v, w, N, g) {
    if (typeof N == 'string' || typeof N == 'number')
      return (m = m.get(w) || null), c(v, m, '' + N, g);
    if (typeof N == 'object' && N !== null) {
      switch (N.$$typeof) {
        case Eu:
          return (
            (m = m.get(N.key === null ? w : N.key) || null),
            N.type === Co ? h(v, m, N.props.children, g, N.key) : f(v, m, N, g)
          );
        case ci:
          return (m = m.get(N.key === null ? w : N.key) || null), p(v, m, N, g);
      }
      if (Cs(N) || ou(N)) return (m = m.get(w) || null), h(v, m, N, g, null);
      Os(v, N);
    }
    return null;
  }
  function E(m, v, w, N) {
    for (var g = null, M = null, P = v, H = (v = 0), F = null; P !== null && H < w.length; H++) {
      P.index > H ? ((F = P), (P = null)) : (F = P.sibling);
      var U = S(m, P, w[H], N);
      if (U === null) {
        P === null && (P = F);
        break;
      }
      e && P && U.alternate === null && t(m, P),
        (v = u(U, v, H)),
        M === null ? (g = U) : (M.sibling = U),
        (M = U),
        (P = F);
    }
    if (H === w.length) return n(m, P), g;
    if (P === null) {
      for (; H < w.length; H++)
        (P = x(m, w[H], N)),
          P !== null && ((v = u(P, v, H)), M === null ? (g = P) : (M.sibling = P), (M = P));
      return g;
    }
    for (P = r(m, P); H < w.length; H++)
      (F = b(P, m, H, w[H], N)),
        F !== null &&
          (e && F.alternate !== null && P.delete(F.key === null ? H : F.key),
          (v = u(F, v, H)),
          M === null ? (g = F) : (M.sibling = F),
          (M = F));
    return (
      e &&
        P.forEach(function (V) {
          return t(m, V);
        }),
      g
    );
  }
  function _(m, v, w, N) {
    var g = ou(w);
    if (typeof g != 'function') throw Error(ve(150));
    if (((w = g.call(w)), w == null)) throw Error(ve(151));
    for (
      var M = (g = null), P = v, H = (v = 0), F = null, U = w.next();
      P !== null && !U.done;
      H++, U = w.next()
    ) {
      P.index > H ? ((F = P), (P = null)) : (F = P.sibling);
      var V = S(m, P, U.value, N);
      if (V === null) {
        P === null && (P = F);
        break;
      }
      e && P && V.alternate === null && t(m, P),
        (v = u(V, v, H)),
        M === null ? (g = V) : (M.sibling = V),
        (M = V),
        (P = F);
    }
    if (U.done) return n(m, P), g;
    if (P === null) {
      for (; !U.done; H++, U = w.next())
        (U = x(m, U.value, N)),
          U !== null && ((v = u(U, v, H)), M === null ? (g = U) : (M.sibling = U), (M = U));
      return g;
    }
    for (P = r(m, P); !U.done; H++, U = w.next())
      (U = b(P, m, H, U.value, N)),
        U !== null &&
          (e && U.alternate !== null && P.delete(U.key === null ? H : U.key),
          (v = u(U, v, H)),
          M === null ? (g = U) : (M.sibling = U),
          (M = U));
    return (
      e &&
        P.forEach(function (fe) {
          return t(m, fe);
        }),
      g
    );
  }
  return function (m, v, w, N) {
    var g = typeof w == 'object' && w !== null && w.type === Co && w.key === null;
    g && (w = w.props.children);
    var M = typeof w == 'object' && w !== null;
    if (M)
      switch (w.$$typeof) {
        case Eu:
          e: {
            for (M = w.key, g = v; g !== null; ) {
              if (g.key === M) {
                switch (g.tag) {
                  case 7:
                    if (w.type === Co) {
                      n(m, g.sibling), (v = i(g, w.props.children)), (v.return = m), (m = v);
                      break e;
                    }
                    break;
                  default:
                    if (g.elementType === w.type) {
                      n(m, g.sibling),
                        (v = i(g, w.props)),
                        (v.ref = cu(m, g, w)),
                        (v.return = m),
                        (m = v);
                      break e;
                    }
                }
                n(m, g);
                break;
              } else t(m, g);
              g = g.sibling;
            }
            w.type === Co
              ? ((v = ga(w.props.children, m.mode, N, w.key)), (v.return = m), (m = v))
              : ((N = nc(w.type, w.key, w.props, null, m.mode, N)),
                (N.ref = cu(m, v, w)),
                (N.return = m),
                (m = N));
          }
          return l(m);
        case ci:
          e: {
            for (g = w.key; v !== null; ) {
              if (v.key === g)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === w.containerInfo &&
                  v.stateNode.implementation === w.implementation
                ) {
                  n(m, v.sibling), (v = i(v, w.children || [])), (v.return = m), (m = v);
                  break e;
                } else {
                  n(m, v);
                  break;
                }
              else t(m, v);
              v = v.sibling;
            }
            (v = bp(w, m.mode, N)), (v.return = m), (m = v);
          }
          return l(m);
      }
    if (typeof w == 'string' || typeof w == 'number')
      return (
        (w = '' + w),
        v !== null && v.tag === 6
          ? (n(m, v.sibling), (v = i(v, w)), (v.return = m), (m = v))
          : (n(m, v), (v = xp(w, m.mode, N)), (v.return = m), (m = v)),
        l(m)
      );
    if (Cs(w)) return E(m, v, w, N);
    if (ou(w)) return _(m, v, w, N);
    if ((M && Os(m, w), typeof w == 'undefined' && !g))
      switch (m.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(ve(152, ua(m.type) || 'Component'));
      }
    return n(m, v);
  };
}
var Tc = u_(!0),
  l_ = u_(!1),
  Sl = {},
  Tr = Go(Sl),
  tl = Go(Sl),
  nl = Go(Sl);
function pi(e) {
  if (e === Sl) throw Error(ve(174));
  return e;
}
function Ph(e, t) {
  switch ((Et(nl, t), Et(tl, e), Et(Tr, Sl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : hh(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = hh(t, e));
  }
  pt(Tr), Et(Tr, t);
}
function Ca() {
  pt(Tr), pt(tl), pt(nl);
}
function k1(e) {
  pi(nl.current);
  var t = pi(Tr.current),
    n = hh(t, e.type);
  t !== n && (Et(tl, e), Et(Tr, n));
}
function sg(e) {
  tl.current === e && (pt(Tr), pt(tl));
}
var St = Go(0);
function Mc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 64) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var to = null,
  Po = null,
  Mr = !1;
function s_(e, t) {
  var n = Gn(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.type = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (n.flags = 8),
    e.lastEffect !== null
      ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
      : (e.firstEffect = e.lastEffect = n);
}
function R1(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), !0) : !1
      );
    case 13:
      return !1;
    default:
      return !1;
  }
}
function Ah(e) {
  if (Mr) {
    var t = Po;
    if (t) {
      var n = t;
      if (!R1(e, t)) {
        if (((t = fa(n.nextSibling)), !t || !R1(e, t))) {
          (e.flags = (e.flags & -1025) | 2), (Mr = !1), (to = e);
          return;
        }
        s_(to, n);
      }
      (to = e), (Po = fa(t.firstChild));
    } else (e.flags = (e.flags & -1025) | 2), (Mr = !1), (to = e);
  }
}
function I1(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  to = e;
}
function Ns(e) {
  if (e !== to) return !1;
  if (!Mr) return I1(e), (Mr = !0), !1;
  var t = e.type;
  if (e.tag !== 5 || (t !== 'head' && t !== 'body' && !Ch(t, e.memoizedProps)))
    for (t = Po; t; ) s_(e, t), (t = fa(t.nextSibling));
  if ((I1(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(ve(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Po = fa(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Po = null;
    }
  } else Po = to ? fa(e.stateNode.nextSibling) : null;
  return !0;
}
function wp() {
  (Po = to = null), (Mr = !1);
}
var pa = [];
function cg() {
  for (var e = 0; e < pa.length; e++) pa[e]._workInProgressVersionPrimary = null;
  pa.length = 0;
}
var Lu = Ci.ReactCurrentDispatcher,
  qn = Ci.ReactCurrentBatchConfig,
  rl = 0,
  Mt = null,
  Zt = null,
  Ut = null,
  Pc = !1,
  Hu = !1;
function pn() {
  throw Error(ve(321));
}
function fg(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Xn(e[n], t[n])) return !1;
  return !0;
}
function dg(e, t, n, r, i, u) {
  if (
    ((rl = u),
    (Mt = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Lu.current = e === null || e.memoizedState === null ? VD : XD),
    (e = n(r, i)),
    Hu)
  ) {
    u = 0;
    do {
      if (((Hu = !1), !(25 > u))) throw Error(ve(301));
      (u += 1), (Ut = Zt = null), (t.updateQueue = null), (Lu.current = GD), (e = n(r, i));
    } while (Hu);
  }
  if (
    ((Lu.current = Rc),
    (t = Zt !== null && Zt.next !== null),
    (rl = 0),
    (Ut = Zt = Mt = null),
    (Pc = !1),
    t)
  )
    throw Error(ve(300));
  return e;
}
function hi() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ut === null ? (Mt.memoizedState = Ut = e) : (Ut = Ut.next = e), Ut;
}
function Ni() {
  if (Zt === null) {
    var e = Mt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Zt.next;
  var t = Ut === null ? Mt.memoizedState : Ut.next;
  if (t !== null) (Ut = t), (Zt = e);
  else {
    if (e === null) throw Error(ve(310));
    (Zt = e),
      (e = {
        memoizedState: Zt.memoizedState,
        baseState: Zt.baseState,
        baseQueue: Zt.baseQueue,
        queue: Zt.queue,
        next: null,
      }),
      Ut === null ? (Mt.memoizedState = Ut = e) : (Ut = Ut.next = e);
  }
  return Ut;
}
function Or(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function fu(e) {
  var t = Ni(),
    n = t.queue;
  if (n === null) throw Error(ve(311));
  n.lastRenderedReducer = e;
  var r = Zt,
    i = r.baseQueue,
    u = n.pending;
  if (u !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = u.next), (u.next = l);
    }
    (r.baseQueue = i = u), (n.pending = null);
  }
  if (i !== null) {
    (i = i.next), (r = r.baseState);
    var c = (l = u = null),
      f = i;
    do {
      var p = f.lane;
      if ((rl & p) === p)
        c !== null &&
          (c = c.next = {
            lane: 0,
            action: f.action,
            eagerReducer: f.eagerReducer,
            eagerState: f.eagerState,
            next: null,
          }),
          (r = f.eagerReducer === e ? f.eagerState : e(r, f.action));
      else {
        var h = {
          lane: p,
          action: f.action,
          eagerReducer: f.eagerReducer,
          eagerState: f.eagerState,
          next: null,
        };
        c === null ? ((l = c = h), (u = r)) : (c = c.next = h), (Mt.lanes |= p), (El |= p);
      }
      f = f.next;
    } while (f !== null && f !== i);
    c === null ? (u = r) : (c.next = l),
      Xn(r, t.memoizedState) || (dr = !0),
      (t.memoizedState = r),
      (t.baseState = u),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  return [t.memoizedState, n.dispatch];
}
function du(e) {
  var t = Ni(),
    n = t.queue;
  if (n === null) throw Error(ve(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    u = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (u = e(u, l.action)), (l = l.next);
    while (l !== i);
    Xn(u, t.memoizedState) || (dr = !0),
      (t.memoizedState = u),
      t.baseQueue === null && (t.baseState = u),
      (n.lastRenderedState = u);
  }
  return [u, r];
}
function L1(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var i = t._workInProgressVersionPrimary;
  if (
    (i !== null
      ? (e = i === r)
      : ((e = e.mutableReadLanes),
        (e = (rl & e) === e) && ((t._workInProgressVersionPrimary = r), pa.push(t))),
    e)
  )
    return n(t._source);
  throw (pa.push(t), Error(ve(350)));
}
function c_(e, t, n, r) {
  var i = on;
  if (i === null) throw Error(ve(349));
  var u = t._getVersion,
    l = u(t._source),
    c = Lu.current,
    f = c.useState(function () {
      return L1(i, t, n);
    }),
    p = f[1],
    h = f[0];
  f = Ut;
  var x = e.memoizedState,
    S = x.refs,
    b = S.getSnapshot,
    E = x.source;
  x = x.subscribe;
  var _ = Mt;
  return (
    (e.memoizedState = { refs: S, source: t, subscribe: r }),
    c.useEffect(
      function () {
        (S.getSnapshot = n), (S.setSnapshot = p);
        var m = u(t._source);
        if (!Xn(l, m)) {
          (m = n(t._source)),
            Xn(h, m) || (p(m), (m = Bo(_)), (i.mutableReadLanes |= m & i.pendingLanes)),
            (m = i.mutableReadLanes),
            (i.entangledLanes |= m);
          for (var v = i.entanglements, w = m; 0 < w; ) {
            var N = 31 - jo(w),
              g = 1 << N;
            (v[N] |= m), (w &= ~g);
          }
        }
      },
      [n, t, r],
    ),
    c.useEffect(
      function () {
        return r(t._source, function () {
          var m = S.getSnapshot,
            v = S.setSnapshot;
          try {
            v(m(t._source));
            var w = Bo(_);
            i.mutableReadLanes |= w & i.pendingLanes;
          } catch (N) {
            v(function () {
              throw N;
            });
          }
        });
      },
      [t, r],
    ),
    (Xn(b, n) && Xn(E, t) && Xn(x, r)) ||
      ((e = { pending: null, dispatch: null, lastRenderedReducer: Or, lastRenderedState: h }),
      (e.dispatch = p = vg.bind(null, Mt, e)),
      (f.queue = e),
      (f.baseQueue = null),
      (h = L1(i, t, n)),
      (f.memoizedState = f.baseState = h)),
    h
  );
}
function f_(e, t, n) {
  var r = Ni();
  return c_(r, e, t, n);
}
function pu(e) {
  var t = hi();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = t.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: Or,
      lastRenderedState: e,
    }),
    (e = e.dispatch = vg.bind(null, Mt, e)),
    [t.memoizedState, e]
  );
}
function Ac(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Mt.updateQueue),
    t === null
      ? ((t = { lastEffect: null }), (Mt.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function H1(e) {
  var t = hi();
  return (e = { current: e }), (t.memoizedState = e);
}
function Dc() {
  return Ni().memoizedState;
}
function Dh(e, t, n, r) {
  var i = hi();
  (Mt.flags |= e), (i.memoizedState = Ac(1 | t, n, void 0, r === void 0 ? null : r));
}
function pg(e, t, n, r) {
  var i = Ni();
  r = r === void 0 ? null : r;
  var u = void 0;
  if (Zt !== null) {
    var l = Zt.memoizedState;
    if (((u = l.destroy), r !== null && fg(r, l.deps))) {
      Ac(t, n, u, r);
      return;
    }
  }
  (Mt.flags |= e), (i.memoizedState = Ac(1 | t, n, u, r));
}
function B1(e, t) {
  return Dh(516, 4, e, t);
}
function kc(e, t) {
  return pg(516, 4, e, t);
}
function d_(e, t) {
  return pg(4, 2, e, t);
}
function p_(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function h_(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), pg(4, 2, p_.bind(null, t, e), n);
}
function hg() {}
function v_(e, t) {
  var n = Ni();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fg(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function g_(e, t) {
  var n = Ni();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fg(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function YD(e, t) {
  var n = ba();
  wi(98 > n ? 98 : n, function () {
    e(!0);
  }),
    wi(97 < n ? 97 : n, function () {
      var r = qn.transition;
      qn.transition = 1;
      try {
        e(!1), t();
      } finally {
        qn.transition = r;
      }
    });
}
function vg(e, t, n) {
  var r = Pn(),
    i = Bo(e),
    u = { lane: i, action: n, eagerReducer: null, eagerState: null, next: null },
    l = t.pending;
  if (
    (l === null ? (u.next = u) : ((u.next = l.next), (l.next = u)),
    (t.pending = u),
    (l = e.alternate),
    e === Mt || (l !== null && l === Mt))
  )
    Hu = Pc = !0;
  else {
    if (e.lanes === 0 && (l === null || l.lanes === 0) && ((l = t.lastRenderedReducer), l !== null))
      try {
        var c = t.lastRenderedState,
          f = l(c, n);
        if (((u.eagerReducer = l), (u.eagerState = f), Xn(f, c))) return;
      } catch (p) {
      } finally {
      }
    Fo(e, i, r);
  }
}
var Rc = {
    readContext: Zn,
    useCallback: pn,
    useContext: pn,
    useEffect: pn,
    useImperativeHandle: pn,
    useLayoutEffect: pn,
    useMemo: pn,
    useReducer: pn,
    useRef: pn,
    useState: pn,
    useDebugValue: pn,
    useDeferredValue: pn,
    useTransition: pn,
    useMutableSource: pn,
    useOpaqueIdentifier: pn,
    unstable_isNewReconciler: !1,
  },
  VD = {
    readContext: Zn,
    useCallback: function (e, t) {
      return (hi().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Zn,
    useEffect: B1,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Dh(4, 2, p_.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Dh(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = hi();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = hi();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = r.queue = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (e = e.dispatch = vg.bind(null, Mt, e)),
        [r.memoizedState, e]
      );
    },
    useRef: H1,
    useState: pu,
    useDebugValue: hg,
    useDeferredValue: function (e) {
      var t = pu(e),
        n = t[0],
        r = t[1];
      return (
        B1(
          function () {
            var i = qn.transition;
            qn.transition = 1;
            try {
              r(e);
            } finally {
              qn.transition = i;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = pu(!1),
        t = e[0];
      return (e = YD.bind(null, e[1])), H1(e), [e, t];
    },
    useMutableSource: function (e, t, n) {
      var r = hi();
      return (
        (r.memoizedState = {
          refs: { getSnapshot: t, setSnapshot: null },
          source: e,
          subscribe: n,
        }),
        c_(r, e, t, n)
      );
    },
    useOpaqueIdentifier: function () {
      if (Mr) {
        var e = !1,
          t = FD(function () {
            throw (e || ((e = !0), n('r:' + (gp++).toString(36))), Error(ve(355)));
          }),
          n = pu(t)[1];
        return (
          (Mt.mode & 2) === 0 &&
            ((Mt.flags |= 516),
            Ac(
              5,
              function () {
                n('r:' + (gp++).toString(36));
              },
              void 0,
              null,
            )),
          t
        );
      }
      return (t = 'r:' + (gp++).toString(36)), pu(t), t;
    },
    unstable_isNewReconciler: !1,
  },
  XD = {
    readContext: Zn,
    useCallback: v_,
    useContext: Zn,
    useEffect: kc,
    useImperativeHandle: h_,
    useLayoutEffect: d_,
    useMemo: g_,
    useReducer: fu,
    useRef: Dc,
    useState: function () {
      return fu(Or);
    },
    useDebugValue: hg,
    useDeferredValue: function (e) {
      var t = fu(Or),
        n = t[0],
        r = t[1];
      return (
        kc(
          function () {
            var i = qn.transition;
            qn.transition = 1;
            try {
              r(e);
            } finally {
              qn.transition = i;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = fu(Or)[0];
      return [Dc().current, e];
    },
    useMutableSource: f_,
    useOpaqueIdentifier: function () {
      return fu(Or)[0];
    },
    unstable_isNewReconciler: !1,
  },
  GD = {
    readContext: Zn,
    useCallback: v_,
    useContext: Zn,
    useEffect: kc,
    useImperativeHandle: h_,
    useLayoutEffect: d_,
    useMemo: g_,
    useReducer: du,
    useRef: Dc,
    useState: function () {
      return du(Or);
    },
    useDebugValue: hg,
    useDeferredValue: function (e) {
      var t = du(Or),
        n = t[0],
        r = t[1];
      return (
        kc(
          function () {
            var i = qn.transition;
            qn.transition = 1;
            try {
              r(e);
            } finally {
              qn.transition = i;
            }
          },
          [e],
        ),
        n
      );
    },
    useTransition: function () {
      var e = du(Or)[0];
      return [Dc().current, e];
    },
    useMutableSource: f_,
    useOpaqueIdentifier: function () {
      return du(Or)[0];
    },
    unstable_isNewReconciler: !1,
  },
  qD = Ci.ReactCurrentOwner,
  dr = !1;
function hn(e, t, n, r) {
  t.child = e === null ? l_(t, null, n, r) : Tc(t, e.child, n, r);
}
function F1(e, t, n, r, i) {
  n = n.render;
  var u = t.ref;
  return (
    da(t, i),
    (r = dg(e, t, n, r, u, i)),
    e !== null && !dr
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~i), no(e, t, i))
      : ((t.flags |= 1), hn(e, t, r, i), t.child)
  );
}
function $1(e, t, n, r, i, u) {
  if (e === null) {
    var l = n.type;
    return typeof l == 'function' &&
      !Eg(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), m_(e, t, l, r, i, u))
      : ((e = nc(n.type, null, r, t, t.mode, u)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  return (
    (l = e.child),
    (i & u) === 0 &&
    ((i = l.memoizedProps), (n = n.compare), (n = n !== null ? n : Ku), n(i, r) && e.ref === t.ref)
      ? no(e, t, u)
      : ((t.flags |= 1), (e = Vo(l, r)), (e.ref = t.ref), (e.return = t), (t.child = e))
  );
}
function m_(e, t, n, r, i, u) {
  if (e !== null && Ku(e.memoizedProps, r) && e.ref === t.ref)
    if (((dr = !1), (u & i) !== 0)) (e.flags & 16384) !== 0 && (dr = !0);
    else return (t.lanes = e.lanes), no(e, t, u);
  return kh(e, t, n, r, u);
}
function Sp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    u = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden' || r.mode === 'unstable-defer-without-hiding')
    if ((t.mode & 4) === 0) (t.memoizedState = { baseLanes: 0 }), Ms(t, n);
    else if ((n & 1073741824) !== 0)
      (t.memoizedState = { baseLanes: 0 }), Ms(t, u !== null ? u.baseLanes : n);
    else
      return (
        (e = u !== null ? u.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = { baseLanes: e }),
        Ms(t, e),
        null
      );
  else u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n), Ms(t, r);
  return hn(e, t, i, n), t.child;
}
function y_(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && (t.flags |= 128);
}
function kh(e, t, n, r, i) {
  var u = gn(n) ? yi : Jt.current;
  return (
    (u = xa(t, u)),
    da(t, i),
    (n = dg(e, t, n, r, u, i)),
    e !== null && !dr
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~i), no(e, t, i))
      : ((t.flags |= 1), hn(e, t, n, i), t.child)
  );
}
function z1(e, t, n, r, i) {
  if (gn(n)) {
    var u = !0;
    Ks(t);
  } else u = !1;
  if ((da(t, i), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      a_(t, n, r),
      Mh(t, n, r, i),
      (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      c = t.memoizedProps;
    l.props = c;
    var f = l.context,
      p = n.contextType;
    typeof p == 'object' && p !== null
      ? (p = Zn(p))
      : ((p = gn(n) ? yi : Jt.current), (p = xa(t, p)));
    var h = n.getDerivedStateFromProps,
      x = typeof h == 'function' || typeof l.getSnapshotBeforeUpdate == 'function';
    x ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((c !== r || f !== p) && D1(t, l, r, p)),
      (xo = !1);
    var S = t.memoizedState;
    (l.state = S),
      el(t, r, l, i),
      (f = t.memoizedState),
      c !== r || S !== f || vn.current || xo
        ? (typeof h == 'function' && (Nc(t, n, h, r), (f = t.memoizedState)),
          (c = xo || A1(t, n, c, r, S, f, p))
            ? (x ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4),
              (t.memoizedProps = r),
              (t.memoizedState = f)),
          (l.props = r),
          (l.state = f),
          (l.context = p),
          (r = c))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4), (r = !1));
  } else {
    (l = t.stateNode),
      o_(e, t),
      (c = t.memoizedProps),
      (p = t.type === t.elementType ? c : cr(t.type, c)),
      (l.props = p),
      (x = t.pendingProps),
      (S = l.context),
      (f = n.contextType),
      typeof f == 'object' && f !== null
        ? (f = Zn(f))
        : ((f = gn(n) ? yi : Jt.current), (f = xa(t, f)));
    var b = n.getDerivedStateFromProps;
    (h = typeof b == 'function' || typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((c !== x || S !== f) && D1(t, l, r, f)),
      (xo = !1),
      (S = t.memoizedState),
      (l.state = S),
      el(t, r, l, i);
    var E = t.memoizedState;
    c !== x || S !== E || vn.current || xo
      ? (typeof b == 'function' && (Nc(t, n, b, r), (E = t.memoizedState)),
        (p = xo || A1(t, n, p, r, S, E, f))
          ? (h ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' && l.componentWillUpdate(r, E, f),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, E, f)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 256))
          : (typeof l.componentDidUpdate != 'function' ||
              (c === e.memoizedProps && S === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (c === e.memoizedProps && S === e.memoizedState) ||
              (t.flags |= 256),
            (t.memoizedProps = r),
            (t.memoizedState = E)),
        (l.props = r),
        (l.state = E),
        (l.context = f),
        (r = p))
      : (typeof l.componentDidUpdate != 'function' ||
          (c === e.memoizedProps && S === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (c === e.memoizedProps && S === e.memoizedState) ||
          (t.flags |= 256),
        (r = !1));
  }
  return Rh(e, t, n, r, u, i);
}
function Rh(e, t, n, r, i, u) {
  y_(e, t);
  var l = (t.flags & 64) !== 0;
  if (!r && !l) return i && O1(t, n, !1), no(e, t, u);
  (r = t.stateNode), (qD.current = t);
  var c = l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Tc(t, e.child, null, u)), (t.child = Tc(t, null, c, u)))
      : hn(e, t, c, u),
    (t.memoizedState = r.state),
    i && O1(t, n, !0),
    t.child
  );
}
function U1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? C1(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && C1(e, t.context, !1),
    Ph(e, t.containerInfo);
}
var Ts = { dehydrated: null, retryLane: 0 };
function j1(e, t, n) {
  var r = t.pendingProps,
    i = St.current,
    u = !1,
    l;
  return (
    (l = (t.flags & 64) !== 0) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((u = !0), (t.flags &= -65))
      : (e !== null && e.memoizedState === null) ||
        r.fallback === void 0 ||
        r.unstable_avoidThisFallback === !0 ||
        (i |= 1),
    Et(St, i & 1),
    e === null
      ? (r.fallback !== void 0 && Ah(t),
        (e = r.children),
        (i = r.fallback),
        u
          ? ((e = W1(t, e, i, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = Ts),
            e)
          : typeof r.unstable_expectedLoadTime == 'number'
          ? ((e = W1(t, e, i, n)),
            (t.child.memoizedState = { baseLanes: n }),
            (t.memoizedState = Ts),
            (t.lanes = 33554432),
            e)
          : ((n = _g({ mode: 'visible', children: e }, t.mode, n, null)),
            (n.return = t),
            (t.child = n)))
      : e.memoizedState !== null
      ? u
        ? ((r = V1(e, t, r.children, r.fallback, n)),
          (u = t.child),
          (i = e.child.memoizedState),
          (u.memoizedState = i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }),
          (u.childLanes = e.childLanes & ~n),
          (t.memoizedState = Ts),
          r)
        : ((n = Y1(e, t, r.children, n)), (t.memoizedState = null), n)
      : u
      ? ((r = V1(e, t, r.children, r.fallback, n)),
        (u = t.child),
        (i = e.child.memoizedState),
        (u.memoizedState = i === null ? { baseLanes: n } : { baseLanes: i.baseLanes | n }),
        (u.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ts),
        r)
      : ((n = Y1(e, t, r.children, n)), (t.memoizedState = null), n)
  );
}
function W1(e, t, n, r) {
  var i = e.mode,
    u = e.child;
  return (
    (t = { mode: 'hidden', children: t }),
    (i & 2) === 0 && u !== null
      ? ((u.childLanes = 0), (u.pendingProps = t))
      : (u = _g(t, i, 0, null)),
    (n = ga(n, i, r, null)),
    (u.return = e),
    (n.return = e),
    (u.sibling = n),
    (e.child = u),
    n
  );
}
function Y1(e, t, n, r) {
  var i = e.child;
  return (
    (e = i.sibling),
    (n = Vo(i, { mode: 'visible', children: n })),
    (t.mode & 2) === 0 && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null && ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
    (t.child = n)
  );
}
function V1(e, t, n, r, i) {
  var u = t.mode,
    l = e.child;
  e = l.sibling;
  var c = { mode: 'hidden', children: n };
  return (
    (u & 2) === 0 && t.child !== l
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = c),
        (l = n.lastEffect),
        l !== null
          ? ((t.firstEffect = n.firstEffect), (t.lastEffect = l), (l.nextEffect = null))
          : (t.firstEffect = t.lastEffect = null))
      : (n = Vo(l, c)),
    e !== null ? (r = Vo(e, r)) : ((r = ga(r, u, i, null)), (r.flags |= 2)),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function X1(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), r_(e.return, t);
}
function Ep(e, t, n, r, i, u) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
        lastEffect: u,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i),
      (l.lastEffect = u));
}
function G1(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    u = r.tail;
  if ((hn(e, t, r.children, n), (r = St.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 64);
  else {
    if (e !== null && (e.flags & 64) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && X1(e, n);
        else if (e.tag === 19) X1(e, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Et(St, r), (t.mode & 2) === 0)) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && Mc(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Ep(t, !1, i, n, u, t.lastEffect);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Mc(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ep(t, !0, n, null, u, t.lastEffect);
        break;
      case 'together':
        Ep(t, !1, null, null, void 0, t.lastEffect);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function no(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies), (El |= t.lanes), (n & t.childLanes) !== 0)
  ) {
    if (e !== null && t.child !== e.child) throw Error(ve(153));
    if (t.child !== null) {
      for (e = t.child, n = Vo(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        (e = e.sibling), (n = n.sibling = Vo(e, e.pendingProps)), (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var w_, Ih, S_, E_;
w_ = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ih = function () {};
S_ = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), pi(Tr.current);
    var u = null;
    switch (n) {
      case 'input':
        (i = lh(e, i)), (r = lh(e, r)), (u = []);
        break;
      case 'option':
        (i = fh(e, i)), (r = fh(e, r)), (u = []);
        break;
      case 'select':
        (i = gt({}, i, { value: void 0 })), (r = gt({}, r, { value: void 0 })), (u = []);
        break;
      case 'textarea':
        (i = dh(e, i)), (r = dh(e, r)), (u = []);
        break;
      default:
        typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Ec);
    }
    vh(n, r);
    var l;
    n = null;
    for (p in i)
      if (!r.hasOwnProperty(p) && i.hasOwnProperty(p) && i[p] != null)
        if (p === 'style') {
          var c = i[p];
          for (l in c) c.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
        } else
          p !== 'dangerouslySetInnerHTML' &&
            p !== 'children' &&
            p !== 'suppressContentEditableWarning' &&
            p !== 'suppressHydrationWarning' &&
            p !== 'autoFocus' &&
            (Wu.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
    for (p in r) {
      var f = r[p];
      if (
        ((c = i != null ? i[p] : void 0),
        r.hasOwnProperty(p) && f !== c && (f != null || c != null))
      )
        if (p === 'style')
          if (c) {
            for (l in c)
              !c.hasOwnProperty(l) || (f && f.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ''));
            for (l in f) f.hasOwnProperty(l) && c[l] !== f[l] && (n || (n = {}), (n[l] = f[l]));
          } else n || (u || (u = []), u.push(p, n)), (n = f);
        else
          p === 'dangerouslySetInnerHTML'
            ? ((f = f ? f.__html : void 0),
              (c = c ? c.__html : void 0),
              f != null && c !== f && (u = u || []).push(p, f))
            : p === 'children'
            ? (typeof f != 'string' && typeof f != 'number') || (u = u || []).push(p, '' + f)
            : p !== 'suppressContentEditableWarning' &&
              p !== 'suppressHydrationWarning' &&
              (Wu.hasOwnProperty(p)
                ? (f != null && p === 'onScroll' && dt('scroll', e), u || c === f || (u = []))
                : typeof f == 'object' && f !== null && f.$$typeof === Uv
                ? f.toString()
                : (u = u || []).push(p, f));
    }
    n && (u = u || []).push('style', n);
    var p = u;
    (t.updateQueue = p) && (t.flags |= 4);
  }
};
E_ = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function hu(e, t) {
  if (!Mr)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ZD(e, t, n) {
  var r = t.pendingProps;
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return gn(t.type) && xc(), null;
    case 3:
      return (
        Ca(),
        pt(vn),
        pt(Jt),
        cg(),
        (r = t.stateNode),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ns(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
        Ih(t),
        null
      );
    case 5:
      sg(t);
      var i = pi(nl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        S_(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(ve(166));
          return null;
        }
        if (((e = pi(Tr.current)), Ns(t))) {
          (r = t.stateNode), (n = t.type);
          var u = t.memoizedProps;
          switch (((r[Mo] = t), (r[_c] = u), n)) {
            case 'dialog':
              dt('cancel', r), dt('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              dt('load', r);
              break;
            case 'video':
            case 'audio':
              for (e = 0; e < xu.length; e++) dt(xu[e], r);
              break;
            case 'source':
              dt('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              dt('error', r), dt('load', r);
              break;
            case 'details':
              dt('toggle', r);
              break;
            case 'input':
              Gy(r, u), dt('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!u.multiple }), dt('invalid', r);
              break;
            case 'textarea':
              Zy(r, u), dt('invalid', r);
          }
          vh(n, u), (e = null);
          for (var l in u)
            u.hasOwnProperty(l) &&
              ((i = u[l]),
              l === 'children'
                ? typeof i == 'string'
                  ? r.textContent !== i && (e = ['children', i])
                  : typeof i == 'number' && r.textContent !== '' + i && (e = ['children', '' + i])
                : Wu.hasOwnProperty(l) && i != null && l === 'onScroll' && dt('scroll', r));
          switch (n) {
            case 'input':
              Es(r), qy(r, u, !0);
              break;
            case 'textarea':
              Es(r), Ky(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof u.onClick == 'function' && (r.onclick = Ec);
          }
          (r = e), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          switch (
            ((l = i.nodeType === 9 ? i : i.ownerDocument),
            e === ph.html && (e = hE(n)),
            e === ph.html
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' &&
                    ((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Mo] = t),
            (e[_c] = r),
            w_(e, t, !1, !1),
            (t.stateNode = e),
            (l = gh(n, r)),
            n)
          ) {
            case 'dialog':
              dt('cancel', e), dt('close', e), (i = r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              dt('load', e), (i = r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < xu.length; i++) dt(xu[i], e);
              i = r;
              break;
            case 'source':
              dt('error', e), (i = r);
              break;
            case 'img':
            case 'image':
            case 'link':
              dt('error', e), dt('load', e), (i = r);
              break;
            case 'details':
              dt('toggle', e), (i = r);
              break;
            case 'input':
              Gy(e, r), (i = lh(e, r)), dt('invalid', e);
              break;
            case 'option':
              i = fh(e, r);
              break;
            case 'select':
              (e._wrapperState = { wasMultiple: !!r.multiple }),
                (i = gt({}, r, { value: void 0 })),
                dt('invalid', e);
              break;
            case 'textarea':
              Zy(e, r), (i = dh(e, r)), dt('invalid', e);
              break;
            default:
              i = r;
          }
          vh(n, i);
          var c = i;
          for (u in c)
            if (c.hasOwnProperty(u)) {
              var f = c[u];
              u === 'style'
                ? mE(e, f)
                : u === 'dangerouslySetInnerHTML'
                ? ((f = f ? f.__html : void 0), f != null && vE(e, f))
                : u === 'children'
                ? typeof f == 'string'
                  ? (n !== 'textarea' || f !== '') && Yu(e, f)
                  : typeof f == 'number' && Yu(e, '' + f)
                : u !== 'suppressContentEditableWarning' &&
                  u !== 'suppressHydrationWarning' &&
                  u !== 'autoFocus' &&
                  (Wu.hasOwnProperty(u)
                    ? f != null && u === 'onScroll' && dt('scroll', e)
                    : f != null && Lv(e, u, f, l));
            }
          switch (n) {
            case 'input':
              Es(e), qy(e, r, !1);
              break;
            case 'textarea':
              Es(e), Ky(e);
              break;
            case 'option':
              r.value != null && e.setAttribute('value', '' + Uo(r.value));
              break;
            case 'select':
              (e.multiple = !!r.multiple),
                (u = r.value),
                u != null
                  ? la(e, !!r.multiple, u, !1)
                  : r.defaultValue != null && la(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof i.onClick == 'function' && (e.onclick = Ec);
          }
          GE(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) E_(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(ve(166));
        (n = pi(nl.current)),
          pi(Tr.current),
          Ns(t)
            ? ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Mo] = t),
              r.nodeValue !== n && (t.flags |= 4))
            : ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Mo] = t),
              (t.stateNode = r));
      }
      return null;
    case 13:
      return (
        pt(St),
        (r = t.memoizedState),
        (t.flags & 64) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            (n = !1),
            e === null
              ? t.memoizedProps.fallback !== void 0 && Ns(t)
              : (n = e.memoizedState !== null),
            r &&
              !n &&
              (t.mode & 2) !== 0 &&
              ((e === null && t.memoizedProps.unstable_avoidThisFallback !== !0) ||
              (St.current & 1) !== 0
                ? jt === 0 && (jt = 3)
                : ((jt === 0 || jt === 3) && (jt = 4),
                  on === null || ((El & 134217727) === 0 && (Ba & 134217727) === 0) || ha(on, Qt))),
            (r || n) && (t.flags |= 4),
            null)
      );
    case 4:
      return Ca(), Ih(t), e === null && YE(t.stateNode.containerInfo), null;
    case 10:
      return ug(t), null;
    case 17:
      return gn(t.type) && xc(), null;
    case 19:
      if ((pt(St), (r = t.memoizedState), r === null)) return null;
      if (((u = (t.flags & 64) !== 0), (l = r.rendering), l === null))
        if (u) hu(r, !1);
        else {
          if (jt !== 0 || (e !== null && (e.flags & 64) !== 0))
            for (e = t.child; e !== null; ) {
              if (((l = Mc(e)), l !== null)) {
                for (
                  t.flags |= 64,
                    hu(r, !1),
                    u = l.updateQueue,
                    u !== null && ((t.updateQueue = u), (t.flags |= 4)),
                    r.lastEffect === null && (t.firstEffect = null),
                    t.lastEffect = r.lastEffect,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (u = n),
                    (e = r),
                    (u.flags &= 2),
                    (u.nextEffect = null),
                    (u.firstEffect = null),
                    (u.lastEffect = null),
                    (l = u.alternate),
                    l === null
                      ? ((u.childLanes = 0),
                        (u.lanes = e),
                        (u.child = null),
                        (u.memoizedProps = null),
                        (u.memoizedState = null),
                        (u.updateQueue = null),
                        (u.dependencies = null),
                        (u.stateNode = null))
                      : ((u.childLanes = l.childLanes),
                        (u.lanes = l.lanes),
                        (u.child = l.child),
                        (u.memoizedProps = l.memoizedProps),
                        (u.memoizedState = l.memoizedState),
                        (u.updateQueue = l.updateQueue),
                        (u.type = l.type),
                        (e = l.dependencies),
                        (u.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return Et(St, (St.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          r.tail !== null &&
            Kt() > zh &&
            ((t.flags |= 64), (u = !0), hu(r, !1), (t.lanes = 33554432));
        }
      else {
        if (!u)
          if (((e = Mc(l)), e !== null)) {
            if (
              ((t.flags |= 64),
              (u = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              hu(r, !0),
              r.tail === null && r.tailMode === 'hidden' && !l.alternate && !Mr)
            )
              return (t = t.lastEffect = r.lastEffect), t !== null && (t.nextEffect = null), null;
          } else
            2 * Kt() - r.renderingStartTime > zh &&
              n !== 1073741824 &&
              ((t.flags |= 64), (u = !0), hu(r, !1), (t.lanes = 33554432));
        r.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = r.last), n !== null ? (n.sibling = l) : (t.child = l), (r.last = l));
      }
      return r.tail !== null
        ? ((n = r.tail),
          (r.rendering = n),
          (r.tail = n.sibling),
          (r.lastEffect = t.lastEffect),
          (r.renderingStartTime = Kt()),
          (n.sibling = null),
          (t = St.current),
          Et(St, u ? (t & 1) | 2 : t & 1),
          n)
        : null;
    case 23:
    case 24:
      return (
        Sg(),
        e !== null &&
          (e.memoizedState !== null) != (t.memoizedState !== null) &&
          r.mode !== 'unstable-defer-without-hiding' &&
          (t.flags |= 4),
        null
      );
  }
  throw Error(ve(156, t.tag));
}
function KD(e) {
  switch (e.tag) {
    case 1:
      gn(e.type) && xc();
      var t = e.flags;
      return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
    case 3:
      if ((Ca(), pt(vn), pt(Jt), cg(), (t = e.flags), (t & 64) !== 0)) throw Error(ve(285));
      return (e.flags = (t & -4097) | 64), e;
    case 5:
      return sg(e), null;
    case 13:
      return pt(St), (t = e.flags), t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
    case 19:
      return pt(St), null;
    case 4:
      return Ca(), null;
    case 10:
      return ug(e), null;
    case 23:
    case 24:
      return Sg(), null;
    default:
      return null;
  }
}
function gg(e, t) {
  try {
    var n = '',
      r = t;
    do (n += A3(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (u) {
    i =
      `
Error generating stack: ` +
      u.message +
      `
` +
      u.stack;
  }
  return { value: e, source: t, stack: i };
}
function Lh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var QD = typeof WeakMap == 'function' ? WeakMap : Map;
function __(e, t, n) {
  (n = Lo(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Lc || ((Lc = !0), (Uh = r)), Lh(e, t);
    }),
    n
  );
}
function x_(e, t, n) {
  (n = Lo(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    n.payload = function () {
      return Lh(e, t), r(i);
    };
  }
  var u = e.stateNode;
  return (
    u !== null &&
      typeof u.componentDidCatch == 'function' &&
      (n.callback = function () {
        typeof r != 'function' && (Nr === null ? (Nr = new Set([this])) : Nr.add(this), Lh(e, t));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' });
      }),
    n
  );
}
var JD = typeof WeakSet == 'function' ? WeakSet : Set;
function q1(e) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == 'function')
      try {
        t(null);
      } catch (n) {
        $o(e, n);
      }
    else t.current = null;
}
function ek(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps,
          r = e.memoizedState;
        (e = t.stateNode),
          (t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? n : cr(t.type, n), r)),
          (e.__reactInternalSnapshotBeforeUpdate = t);
      }
      return;
    case 3:
      t.flags & 256 && rg(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(ve(163));
}
function tk(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (((t = n.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        e = t = t.next;
        do {
          if ((e.tag & 3) === 3) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== t);
      }
      if (((t = n.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        e = t = t.next;
        do {
          var i = e;
          (r = i.next),
            (i = i.tag),
            (i & 4) !== 0 && (i & 1) !== 0 && (D_(n, e), sk(n, e)),
            (e = r);
        } while (e !== t);
      }
      return;
    case 1:
      (e = n.stateNode),
        n.flags & 4 &&
          (t === null
            ? e.componentDidMount()
            : ((r = n.elementType === n.type ? t.memoizedProps : cr(n.type, t.memoizedProps)),
              e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
        (t = n.updateQueue),
        t !== null && P1(n, t, e);
      return;
    case 3:
      if (((t = n.updateQueue), t !== null)) {
        if (((e = null), n.child !== null))
          switch (n.child.tag) {
            case 5:
              e = n.child.stateNode;
              break;
            case 1:
              e = n.child.stateNode;
          }
        P1(n, t, e);
      }
      return;
    case 5:
      (e = n.stateNode), t === null && n.flags & 4 && GE(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null &&
        ((n = n.alternate),
        n !== null &&
          ((n = n.memoizedState), n !== null && ((n = n.dehydrated), n !== null && NE(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(ve(163));
}
function Z1(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t)
        (r = r.style),
          typeof r.setProperty == 'function'
            ? r.setProperty('display', 'none', 'important')
            : (r.display = 'none');
      else {
        r = n.stateNode;
        var i = n.memoizedProps.style;
        (i = i != null && i.hasOwnProperty('display') ? i.display : null),
          (r.style.display = gE('display', i));
      }
    } else if (n.tag === 6) n.stateNode.nodeValue = t ? '' : n.memoizedProps;
    else if (
      ((n.tag !== 23 && n.tag !== 24) || n.memoizedState === null || n === e) &&
      n.child !== null
    ) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function K1(e, t) {
  if (mi && typeof mi.onCommitFiberUnmount == 'function')
    try {
      mi.onCommitFiberUnmount(og, t);
    } catch (u) {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))) {
        var n = (e = e.next);
        do {
          var r = n,
            i = r.destroy;
          if (((r = r.tag), i !== void 0))
            if ((r & 4) !== 0) D_(t, n);
            else {
              r = t;
              try {
                i();
              } catch (u) {
                $o(r, u);
              }
            }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if ((q1(t), (e = t.stateNode), typeof e.componentWillUnmount == 'function'))
        try {
          (e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount();
        } catch (u) {
          $o(t, u);
        }
      break;
    case 5:
      q1(t);
      break;
    case 4:
      b_(e, t);
  }
}
function Q1(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function J1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ew(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (J1(t)) break e;
      t = t.return;
    }
    throw Error(ve(160));
  }
  var n = t;
  switch (((t = n.stateNode), n.tag)) {
    case 5:
      var r = !1;
      break;
    case 3:
      (t = t.containerInfo), (r = !0);
      break;
    case 4:
      (t = t.containerInfo), (r = !0);
      break;
    default:
      throw Error(ve(161));
  }
  n.flags & 16 && (Yu(t, ''), (n.flags &= -17));
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || J1(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
      if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
      (n.child.return = n), (n = n.child);
    }
    if (!(n.flags & 2)) {
      n = n.stateNode;
      break e;
    }
  }
  r ? Hh(e, n, t) : Bh(e, n, t);
}
function Hh(e, t, n) {
  var r = e.tag,
    i = r === 5 || r === 6;
  if (i)
    (e = i ? e.stateNode : e.stateNode.instance),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ec));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hh(e, t, n), e = e.sibling; e !== null; ) Hh(e, t, n), (e = e.sibling);
}
function Bh(e, t, n) {
  var r = e.tag,
    i = r === 5 || r === 6;
  if (i) (e = i ? e.stateNode : e.stateNode.instance), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bh(e, t, n), e = e.sibling; e !== null; ) Bh(e, t, n), (e = e.sibling);
}
function b_(e, t) {
  for (var n = t, r = !1, i, u; ; ) {
    if (!r) {
      r = n.return;
      e: for (;;) {
        if (r === null) throw Error(ve(160));
        switch (((i = r.stateNode), r.tag)) {
          case 5:
            u = !1;
            break e;
          case 3:
            (i = i.containerInfo), (u = !0);
            break e;
          case 4:
            (i = i.containerInfo), (u = !0);
            break e;
        }
        r = r.return;
      }
      r = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var l = e, c = n, f = c; ; )
        if ((K1(l, f), f.child !== null && f.tag !== 4)) (f.child.return = f), (f = f.child);
        else {
          if (f === c) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === c) break e;
            f = f.return;
          }
          (f.sibling.return = f.return), (f = f.sibling);
        }
      u
        ? ((l = i),
          (c = n.stateNode),
          l.nodeType === 8 ? l.parentNode.removeChild(c) : l.removeChild(c))
        : i.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        (i = n.stateNode.containerInfo), (u = !0), (n.child.return = n), (n = n.child);
        continue;
      }
    } else if ((K1(e, n), n.child !== null)) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      (n = n.return), n.tag === 4 && (r = !1);
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
}
function _p(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue;
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var r = (n = n.next);
        do
          (r.tag & 3) === 3 && ((e = r.destroy), (r.destroy = void 0), e !== void 0 && e()),
            (r = r.next);
        while (r !== n);
      }
      return;
    case 1:
      return;
    case 5:
      if (((n = t.stateNode), n != null)) {
        r = t.memoizedProps;
        var i = e !== null ? e.memoizedProps : r;
        e = t.type;
        var u = t.updateQueue;
        if (((t.updateQueue = null), u !== null)) {
          for (
            n[_c] = r,
              e === 'input' && r.type === 'radio' && r.name != null && dE(n, r),
              gh(e, i),
              t = gh(e, r),
              i = 0;
            i < u.length;
            i += 2
          ) {
            var l = u[i],
              c = u[i + 1];
            l === 'style'
              ? mE(n, c)
              : l === 'dangerouslySetInnerHTML'
              ? vE(n, c)
              : l === 'children'
              ? Yu(n, c)
              : Lv(n, l, c, t);
          }
          switch (e) {
            case 'input':
              sh(n, r);
              break;
            case 'textarea':
              pE(n, r);
              break;
            case 'select':
              (e = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!r.multiple),
                (u = r.value),
                u != null
                  ? la(n, !!r.multiple, u, !1)
                  : e !== !!r.multiple &&
                    (r.defaultValue != null
                      ? la(n, !!r.multiple, r.defaultValue, !0)
                      : la(n, !!r.multiple, r.multiple ? [] : '', !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(ve(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      (n = t.stateNode), n.hydrate && ((n.hydrate = !1), NE(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && ((wg = Kt()), Z1(t.child, !0)), tw(t);
      return;
    case 19:
      tw(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      Z1(t, t.memoizedState !== null);
      return;
  }
  throw Error(ve(163));
}
function tw(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new JD()),
      t.forEach(function (r) {
        var i = dk.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function nk(e, t) {
  return e !== null && ((e = e.memoizedState), e === null || e.dehydrated !== null)
    ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
    : !1;
}
var rk = Math.ceil,
  Ic = Ci.ReactCurrentDispatcher,
  mg = Ci.ReactCurrentOwner,
  Re = 0,
  on = null,
  kt = null,
  Qt = 0,
  Si = 0,
  Fh = Go(0),
  jt = 0,
  cf = null,
  Ha = 0,
  El = 0,
  Ba = 0,
  yg = 0,
  $h = null,
  wg = 0,
  zh = 1 / 0;
function Fa() {
  zh = Kt() + 500;
}
var Se = null,
  Lc = !1,
  Uh = null,
  Nr = null,
  Yo = !1,
  Bu = null,
  bu = 90,
  jh = [],
  Wh = [],
  ro = null,
  Fu = 0,
  Yh = null,
  Js = -1,
  eo = 0,
  ec = 0,
  $u = null,
  tc = !1;
function Pn() {
  return (Re & 48) !== 0 ? Kt() : Js !== -1 ? Js : (Js = Kt());
}
function Bo(e) {
  if (((e = e.mode), (e & 2) === 0)) return 1;
  if ((e & 4) === 0) return ba() === 99 ? 1 : 2;
  if ((eo === 0 && (eo = Ha), WD.transition !== 0)) {
    ec !== 0 && (ec = $h !== null ? $h.pendingLanes : 0), (e = eo);
    var t = 4186112 & ~ec;
    return (t &= -t), t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)), t;
  }
  return (
    (e = ba()), (Re & 4) !== 0 && e === 98 ? (e = wc(12, eo)) : ((e = X3(e)), (e = wc(e, eo))), e
  );
}
function Fo(e, t, n) {
  if (50 < Fu) throw ((Fu = 0), (Yh = null), Error(ve(185)));
  if (((e = ff(e, t)), e === null)) return null;
  nf(e, t, n), e === on && ((Ba |= t), jt === 4 && ha(e, Qt));
  var r = ba();
  t === 1
    ? (Re & 8) !== 0 && (Re & 48) === 0
      ? Vh(e)
      : (Kn(e, n), Re === 0 && (Fa(), Lr()))
    : ((Re & 4) === 0 || (r !== 98 && r !== 99) || (ro === null ? (ro = new Set([e])) : ro.add(e)),
      Kn(e, n)),
    ($h = e);
}
function ff(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
function Kn(e, t) {
  for (
    var n = e.callbackNode,
      r = e.suspendedLanes,
      i = e.pingedLanes,
      u = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var c = 31 - jo(l),
      f = 1 << c,
      p = u[c];
    if (p === -1) {
      if ((f & r) === 0 || (f & i) !== 0) {
        (p = t), Ki(f);
        var h = ct;
        u[c] = 10 <= h ? p + 250 : 6 <= h ? p + 5e3 : -1;
      }
    } else p <= t && (e.expiredLanes |= f);
    l &= ~f;
  }
  if (((r = qu(e, e === on ? Qt : 0)), (t = ct), r === 0))
    n !== null && (n !== mp && Nh(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== mp && Nh(n);
    }
    t === 15
      ? ((n = Vh.bind(null, e)),
        Kr === null ? ((Kr = [n]), (Qs = ig(lf, n_))) : Kr.push(n),
        (n = mp))
      : t === 14
      ? (n = Ju(99, Vh.bind(null, e)))
      : ((n = G3(t)), (n = Ju(n, C_.bind(null, e)))),
      (e.callbackPriority = t),
      (e.callbackNode = n);
  }
}
function C_(e) {
  if (((Js = -1), (ec = eo = 0), (Re & 48) !== 0)) throw Error(ve(327));
  var t = e.callbackNode;
  if (qo() && e.callbackNode !== t) return null;
  var n = qu(e, e === on ? Qt : 0);
  if (n === 0) return null;
  var r = n,
    i = Re;
  Re |= 16;
  var u = M_();
  (on !== e || Qt !== r) && (Fa(), va(e, r));
  do
    try {
      ak();
      break;
    } catch (c) {
      T_(e, c);
    }
  while (1);
  if (
    (ag(),
    (Ic.current = u),
    (Re = i),
    kt !== null ? (r = 0) : ((on = null), (Qt = 0), (r = jt)),
    (Ha & Ba) !== 0)
  )
    va(e, 0);
  else if (r !== 0) {
    if (
      (r === 2 &&
        ((Re |= 64),
        e.hydrate && ((e.hydrate = !1), rg(e.containerInfo)),
        (n = RE(e)),
        n !== 0 && (r = Cu(e, n))),
      r === 1)
    )
      throw ((t = cf), va(e, 0), ha(e, n), Kn(e, Kt()), t);
    switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)) {
      case 0:
      case 1:
        throw Error(ve(345));
      case 2:
        li(e);
        break;
      case 3:
        if ((ha(e, n), (n & 62914560) === n && ((r = wg + 500 - Kt()), 10 < r))) {
          if (qu(e, 0) !== 0) break;
          if (((i = e.suspendedLanes), (i & n) !== n)) {
            Pn(), (e.pingedLanes |= e.suspendedLanes & i);
            break;
          }
          e.timeoutHandle = _1(li.bind(null, e), r);
          break;
        }
        li(e);
        break;
      case 4:
        if ((ha(e, n), (n & 4186112) === n)) break;
        for (r = e.eventTimes, i = -1; 0 < n; ) {
          var l = 31 - jo(n);
          (u = 1 << l), (l = r[l]), l > i && (i = l), (n &= ~u);
        }
        if (
          ((n = i),
          (n = Kt() - n),
          (n =
            (120 > n
              ? 120
              : 480 > n
              ? 480
              : 1080 > n
              ? 1080
              : 1920 > n
              ? 1920
              : 3e3 > n
              ? 3e3
              : 4320 > n
              ? 4320
              : 1960 * rk(n / 1960)) - n),
          10 < n)
        ) {
          e.timeoutHandle = _1(li.bind(null, e), n);
          break;
        }
        li(e);
        break;
      case 5:
        li(e);
        break;
      default:
        throw Error(ve(329));
    }
  }
  return Kn(e, Kt()), e.callbackNode === t ? C_.bind(null, e) : null;
}
function ha(e, t) {
  for (
    t &= ~yg, t &= ~Ba, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - jo(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Vh(e) {
  if ((Re & 48) !== 0) throw Error(ve(327));
  if ((qo(), e === on && (e.expiredLanes & Qt) !== 0)) {
    var t = Qt,
      n = Cu(e, t);
    (Ha & Ba) !== 0 && ((t = qu(e, t)), (n = Cu(e, t)));
  } else (t = qu(e, 0)), (n = Cu(e, t));
  if (
    (e.tag !== 0 &&
      n === 2 &&
      ((Re |= 64),
      e.hydrate && ((e.hydrate = !1), rg(e.containerInfo)),
      (t = RE(e)),
      t !== 0 && (n = Cu(e, t))),
    n === 1)
  )
    throw ((n = cf), va(e, 0), ha(e, t), Kn(e, Kt()), n);
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), li(e), Kn(e, Kt()), null;
}
function ok() {
  if (ro !== null) {
    var e = ro;
    (ro = null),
      e.forEach(function (t) {
        (t.expiredLanes |= 24 & t.pendingLanes), Kn(t, Kt());
      });
  }
  Lr();
}
function O_(e, t) {
  var n = Re;
  Re |= 1;
  try {
    return e(t);
  } finally {
    (Re = n), Re === 0 && (Fa(), Lr());
  }
}
function N_(e, t) {
  var n = Re;
  (Re &= -2), (Re |= 8);
  try {
    return e(t);
  } finally {
    (Re = n), Re === 0 && (Fa(), Lr());
  }
}
function Ms(e, t) {
  Et(Fh, Si), (Si |= t), (Ha |= t);
}
function Sg() {
  (Si = Fh.current), pt(Fh);
}
function va(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), BD(n)), kt !== null))
    for (n = kt.return; n !== null; ) {
      var r = n;
      switch (r.tag) {
        case 1:
          (r = r.type.childContextTypes), r != null && xc();
          break;
        case 3:
          Ca(), pt(vn), pt(Jt), cg();
          break;
        case 5:
          sg(r);
          break;
        case 4:
          Ca();
          break;
        case 13:
          pt(St);
          break;
        case 19:
          pt(St);
          break;
        case 10:
          ug(r);
          break;
        case 23:
        case 24:
          Sg();
      }
      n = n.return;
    }
  (on = e),
    (kt = Vo(e.current, null)),
    (Qt = Si = Ha = t),
    (jt = 0),
    (cf = null),
    (yg = Ba = El = 0);
}
function T_(e, t) {
  do {
    var n = kt;
    try {
      if ((ag(), (Lu.current = Rc), Pc)) {
        for (var r = Mt.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Pc = !1;
      }
      if (
        ((rl = 0),
        (Ut = Zt = Mt = null),
        (Hu = !1),
        (mg.current = null),
        n === null || n.return === null)
      ) {
        (jt = 1), (cf = t), (kt = null);
        break;
      }
      e: {
        var u = e,
          l = n.return,
          c = n,
          f = t;
        if (
          ((t = Qt),
          (c.flags |= 2048),
          (c.firstEffect = c.lastEffect = null),
          f !== null && typeof f == 'object' && typeof f.then == 'function')
        ) {
          var p = f;
          if ((c.mode & 2) === 0) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var x = (St.current & 1) !== 0,
            S = l;
          do {
            var b;
            if ((b = S.tag === 13)) {
              var E = S.memoizedState;
              if (E !== null) b = E.dehydrated !== null;
              else {
                var _ = S.memoizedProps;
                b = _.fallback === void 0 ? !1 : _.unstable_avoidThisFallback !== !0 ? !0 : !x;
              }
            }
            if (b) {
              var m = S.updateQueue;
              if (m === null) {
                var v = new Set();
                v.add(p), (S.updateQueue = v);
              } else m.add(p);
              if ((S.mode & 2) === 0) {
                if (((S.flags |= 64), (c.flags |= 16384), (c.flags &= -2981), c.tag === 1))
                  if (c.alternate === null) c.tag = 17;
                  else {
                    var w = Lo(-1, 1);
                    (w.tag = 2), Ho(c, w);
                  }
                c.lanes |= 1;
                break e;
              }
              (f = void 0), (c = t);
              var N = u.pingCache;
              if (
                (N === null
                  ? ((N = u.pingCache = new QD()), (f = new Set()), N.set(p, f))
                  : ((f = N.get(p)), f === void 0 && ((f = new Set()), N.set(p, f))),
                !f.has(c))
              ) {
                f.add(c);
                var g = fk.bind(null, u, p, c);
                p.then(g, g);
              }
              (S.flags |= 4096), (S.lanes = t);
              break e;
            }
            S = S.return;
          } while (S !== null);
          f = Error(
            (ua(c.type) || 'A React component') +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`,
          );
        }
        jt !== 5 && (jt = 2), (f = gg(f, c)), (S = l);
        do {
          switch (S.tag) {
            case 3:
              (u = f), (S.flags |= 4096), (t &= -t), (S.lanes |= t);
              var M = __(S, u, t);
              M1(S, M);
              break e;
            case 1:
              u = f;
              var P = S.type,
                H = S.stateNode;
              if (
                (S.flags & 64) === 0 &&
                (typeof P.getDerivedStateFromError == 'function' ||
                  (H !== null &&
                    typeof H.componentDidCatch == 'function' &&
                    (Nr === null || !Nr.has(H))))
              ) {
                (S.flags |= 4096), (t &= -t), (S.lanes |= t);
                var F = x_(S, u, t);
                M1(S, F);
                break e;
              }
          }
          S = S.return;
        } while (S !== null);
      }
      A_(n);
    } catch (U) {
      (t = U), kt === n && n !== null && (kt = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function M_() {
  var e = Ic.current;
  return (Ic.current = Rc), e === null ? Rc : e;
}
function Cu(e, t) {
  var n = Re;
  Re |= 16;
  var r = M_();
  (on === e && Qt === t) || va(e, t);
  do
    try {
      ik();
      break;
    } catch (i) {
      T_(e, i);
    }
  while (1);
  if ((ag(), (Re = n), (Ic.current = r), kt !== null)) throw Error(ve(261));
  return (on = null), (Qt = 0), jt;
}
function ik() {
  for (; kt !== null; ) P_(kt);
}
function ak() {
  for (; kt !== null && !zD(); ) P_(kt);
}
function P_(e) {
  var t = k_(e.alternate, e, Si);
  (e.memoizedProps = e.pendingProps), t === null ? A_(e) : (kt = t), (mg.current = null);
}
function A_(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 2048) === 0)) {
      if (((n = ZD(n, t, Si)), n !== null)) {
        kt = n;
        return;
      }
      if (
        ((n = t),
        (n.tag !== 24 && n.tag !== 23) ||
          n.memoizedState === null ||
          (Si & 1073741824) !== 0 ||
          (n.mode & 4) === 0)
      ) {
        for (var r = 0, i = n.child; i !== null; ) (r |= i.lanes | i.childLanes), (i = i.sibling);
        n.childLanes = r;
      }
      e !== null &&
        (e.flags & 2048) === 0 &&
        (e.firstEffect === null && (e.firstEffect = t.firstEffect),
        t.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect),
          (e.lastEffect = t.lastEffect)),
        1 < t.flags &&
          (e.lastEffect !== null ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t),
          (e.lastEffect = t)));
    } else {
      if (((n = KD(t)), n !== null)) {
        (n.flags &= 2047), (kt = n);
        return;
      }
      e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    }
    if (((t = t.sibling), t !== null)) {
      kt = t;
      return;
    }
    kt = t = e;
  } while (t !== null);
  jt === 0 && (jt = 5);
}
function li(e) {
  var t = ba();
  return wi(99, uk.bind(null, e, t)), null;
}
function uk(e, t) {
  do qo();
  while (Bu !== null);
  if ((Re & 48) !== 0) throw Error(ve(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(ve(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes,
    i = r,
    u = e.pendingLanes & ~i;
  (e.pendingLanes = i),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= i),
    (e.mutableReadLanes &= i),
    (e.entangledLanes &= i),
    (i = e.entanglements);
  for (var l = e.eventTimes, c = e.expirationTimes; 0 < u; ) {
    var f = 31 - jo(u),
      p = 1 << f;
    (i[f] = 0), (l[f] = -1), (c[f] = -1), (u &= ~p);
  }
  if (
    (ro !== null && (r & 24) === 0 && ro.has(e) && ro.delete(e),
    e === on && ((kt = on = null), (Qt = 0)),
    1 < n.flags
      ? n.lastEffect !== null
        ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
        : (r = n)
      : (r = n.firstEffect),
    r !== null)
  ) {
    if (((i = Re), (Re |= 32), (mg.current = null), (hp = Gs), (l = v1()), _h(l))) {
      if ('selectionStart' in l) c = { start: l.selectionStart, end: l.selectionEnd };
      else
        e: if (
          ((c = ((c = l.ownerDocument) && c.defaultView) || window),
          (p = c.getSelection && c.getSelection()) && p.rangeCount !== 0)
        ) {
          (c = p.anchorNode), (u = p.anchorOffset), (f = p.focusNode), (p = p.focusOffset);
          try {
            c.nodeType, f.nodeType;
          } catch (U) {
            c = null;
            break e;
          }
          var h = 0,
            x = -1,
            S = -1,
            b = 0,
            E = 0,
            _ = l,
            m = null;
          t: for (;;) {
            for (
              var v;
              _ !== c || (u !== 0 && _.nodeType !== 3) || (x = h + u),
                _ !== f || (p !== 0 && _.nodeType !== 3) || (S = h + p),
                _.nodeType === 3 && (h += _.nodeValue.length),
                (v = _.firstChild) !== null;

            )
              (m = _), (_ = v);
            for (;;) {
              if (_ === l) break t;
              if (
                (m === c && ++b === u && (x = h),
                m === f && ++E === p && (S = h),
                (v = _.nextSibling) !== null)
              )
                break;
              (_ = m), (m = _.parentNode);
            }
            _ = v;
          }
          c = x === -1 || S === -1 ? null : { start: x, end: S };
        } else c = null;
      c = c || { start: 0, end: 0 };
    } else c = null;
    (vp = { focusedElem: l, selectionRange: c }), (Gs = !1), ($u = null), (tc = !1), (Se = r);
    do
      try {
        lk();
      } catch (U) {
        if (Se === null) throw Error(ve(330));
        $o(Se, U), (Se = Se.nextEffect);
      }
    while (Se !== null);
    ($u = null), (Se = r);
    do
      try {
        for (l = e; Se !== null; ) {
          var w = Se.flags;
          if ((w & 16 && Yu(Se.stateNode, ''), w & 128)) {
            var N = Se.alternate;
            if (N !== null) {
              var g = N.ref;
              g !== null && (typeof g == 'function' ? g(null) : (g.current = null));
            }
          }
          switch (w & 1038) {
            case 2:
              ew(Se), (Se.flags &= -3);
              break;
            case 6:
              ew(Se), (Se.flags &= -3), _p(Se.alternate, Se);
              break;
            case 1024:
              Se.flags &= -1025;
              break;
            case 1028:
              (Se.flags &= -1025), _p(Se.alternate, Se);
              break;
            case 4:
              _p(Se.alternate, Se);
              break;
            case 8:
              (c = Se), b_(l, c);
              var M = c.alternate;
              Q1(c), M !== null && Q1(M);
          }
          Se = Se.nextEffect;
        }
      } catch (U) {
        if (Se === null) throw Error(ve(330));
        $o(Se, U), (Se = Se.nextEffect);
      }
    while (Se !== null);
    if (
      ((g = vp),
      (N = v1()),
      (w = g.focusedElem),
      (l = g.selectionRange),
      N !== w && w && w.ownerDocument && UE(w.ownerDocument.documentElement, w))
    ) {
      for (
        l !== null &&
          _h(w) &&
          ((N = l.start),
          (g = l.end),
          g === void 0 && (g = N),
          ('selectionStart' in w)
            ? ((w.selectionStart = N), (w.selectionEnd = Math.min(g, w.value.length)))
            : ((g = ((N = w.ownerDocument || document) && N.defaultView) || window),
              g.getSelection &&
                ((g = g.getSelection()),
                (c = w.textContent.length),
                (M = Math.min(l.start, c)),
                (l = l.end === void 0 ? M : Math.min(l.end, c)),
                !g.extend && M > l && ((c = l), (l = M), (M = c)),
                (c = h1(w, M)),
                (u = h1(w, l)),
                c &&
                  u &&
                  (g.rangeCount !== 1 ||
                    g.anchorNode !== c.node ||
                    g.anchorOffset !== c.offset ||
                    g.focusNode !== u.node ||
                    g.focusOffset !== u.offset) &&
                  ((N = N.createRange()),
                  N.setStart(c.node, c.offset),
                  g.removeAllRanges(),
                  M > l
                    ? (g.addRange(N), g.extend(u.node, u.offset))
                    : (N.setEnd(u.node, u.offset), g.addRange(N)))))),
          N = [],
          g = w;
        (g = g.parentNode);

      )
        g.nodeType === 1 && N.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
      for (typeof w.focus == 'function' && w.focus(), w = 0; w < N.length; w++)
        (g = N[w]), (g.element.scrollLeft = g.left), (g.element.scrollTop = g.top);
    }
    (Gs = !!hp), (vp = hp = null), (e.current = n), (Se = r);
    do
      try {
        for (w = e; Se !== null; ) {
          var P = Se.flags;
          if ((P & 36 && tk(w, Se.alternate, Se), P & 128)) {
            N = void 0;
            var H = Se.ref;
            if (H !== null) {
              var F = Se.stateNode;
              switch (Se.tag) {
                case 5:
                  N = F;
                  break;
                default:
                  N = F;
              }
              typeof H == 'function' ? H(N) : (H.current = N);
            }
          }
          Se = Se.nextEffect;
        }
      } catch (U) {
        if (Se === null) throw Error(ve(330));
        $o(Se, U), (Se = Se.nextEffect);
      }
    while (Se !== null);
    (Se = null), jD(), (Re = i);
  } else e.current = n;
  if (Yo) (Yo = !1), (Bu = e), (bu = t);
  else
    for (Se = r; Se !== null; )
      (t = Se.nextEffect),
        (Se.nextEffect = null),
        Se.flags & 8 && ((P = Se), (P.sibling = null), (P.stateNode = null)),
        (Se = t);
  if (
    ((r = e.pendingLanes),
    r === 0 && (Nr = null),
    r === 1 ? (e === Yh ? Fu++ : ((Fu = 0), (Yh = e))) : (Fu = 0),
    (n = n.stateNode),
    mi && typeof mi.onCommitFiberRoot == 'function')
  )
    try {
      mi.onCommitFiberRoot(og, n, void 0, (n.current.flags & 64) === 64);
    } catch (U) {}
  if ((Kn(e, Kt()), Lc)) throw ((Lc = !1), (e = Uh), (Uh = null), e);
  return (Re & 8) !== 0 || Lr(), null;
}
function lk() {
  for (; Se !== null; ) {
    var e = Se.alternate;
    tc ||
      $u === null ||
      ((Se.flags & 8) !== 0
        ? e1(Se, $u) && (tc = !0)
        : Se.tag === 13 && nk(e, Se) && e1(Se, $u) && (tc = !0));
    var t = Se.flags;
    (t & 256) !== 0 && ek(e, Se),
      (t & 512) === 0 ||
        Yo ||
        ((Yo = !0),
        Ju(97, function () {
          return qo(), null;
        })),
      (Se = Se.nextEffect);
  }
}
function qo() {
  if (bu !== 90) {
    var e = 97 < bu ? 97 : bu;
    return (bu = 90), wi(e, ck);
  }
  return !1;
}
function sk(e, t) {
  jh.push(t, e),
    Yo ||
      ((Yo = !0),
      Ju(97, function () {
        return qo(), null;
      }));
}
function D_(e, t) {
  Wh.push(t, e),
    Yo ||
      ((Yo = !0),
      Ju(97, function () {
        return qo(), null;
      }));
}
function ck() {
  if (Bu === null) return !1;
  var e = Bu;
  if (((Bu = null), (Re & 48) !== 0)) throw Error(ve(331));
  var t = Re;
  Re |= 32;
  var n = Wh;
  Wh = [];
  for (var r = 0; r < n.length; r += 2) {
    var i = n[r],
      u = n[r + 1],
      l = i.destroy;
    if (((i.destroy = void 0), typeof l == 'function'))
      try {
        l();
      } catch (f) {
        if (u === null) throw Error(ve(330));
        $o(u, f);
      }
  }
  for (n = jh, jh = [], r = 0; r < n.length; r += 2) {
    (i = n[r]), (u = n[r + 1]);
    try {
      var c = i.create;
      i.destroy = c();
    } catch (f) {
      if (u === null) throw Error(ve(330));
      $o(u, f);
    }
  }
  for (c = e.current.firstEffect; c !== null; )
    (e = c.nextEffect),
      (c.nextEffect = null),
      c.flags & 8 && ((c.sibling = null), (c.stateNode = null)),
      (c = e);
  return (Re = t), Lr(), !0;
}
function nw(e, t, n) {
  (t = gg(n, t)),
    (t = __(e, t, 1)),
    Ho(e, t),
    (t = Pn()),
    (e = ff(e, 1)),
    e !== null && (nf(e, 1, t), Kn(e, t));
}
function $o(e, t) {
  if (e.tag === 3) nw(e, e, t);
  else
    for (var n = e.return; n !== null; ) {
      if (n.tag === 3) {
        nw(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (Nr === null || !Nr.has(r)))
        ) {
          e = gg(t, e);
          var i = x_(n, e, 1);
          if ((Ho(n, i), (i = Pn()), (n = ff(n, 1)), n !== null)) nf(n, 1, i), Kn(n, i);
          else if (typeof r.componentDidCatch == 'function' && (Nr === null || !Nr.has(r)))
            try {
              r.componentDidCatch(t, e);
            } catch (u) {}
          break;
        }
      }
      n = n.return;
    }
}
function fk(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Pn()),
    (e.pingedLanes |= e.suspendedLanes & n),
    on === e &&
      (Qt & n) === n &&
      (jt === 4 || (jt === 3 && (Qt & 62914560) === Qt && 500 > Kt() - wg) ? va(e, 0) : (yg |= n)),
    Kn(e, t);
}
function dk(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t),
    (t = 0),
    t === 0 &&
      ((t = e.mode),
      (t & 2) === 0
        ? (t = 1)
        : (t & 4) === 0
        ? (t = ba() === 99 ? 1 : 2)
        : (eo === 0 && (eo = Ha), (t = Qi(62914560 & ~eo)), t === 0 && (t = 4194304))),
    (n = Pn()),
    (e = ff(e, t)),
    e !== null && (nf(e, t, n), Kn(e, n));
}
var k_;
k_ = function (e, t, n) {
  var r = t.lanes;
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || vn.current) dr = !0;
    else if ((n & r) !== 0) dr = (e.flags & 16384) !== 0;
    else {
      switch (((dr = !1), t.tag)) {
        case 3:
          U1(t), wp();
          break;
        case 5:
          k1(t);
          break;
        case 1:
          gn(t.type) && Ks(t);
          break;
        case 4:
          Ph(t, t.stateNode.containerInfo);
          break;
        case 10:
          r = t.memoizedProps.value;
          var i = t.type._context;
          Et(bc, i._currentValue), (i._currentValue = r);
          break;
        case 13:
          if (t.memoizedState !== null)
            return (n & t.child.childLanes) !== 0
              ? j1(e, t, n)
              : (Et(St, St.current & 1), (t = no(e, t, n)), t !== null ? t.sibling : null);
          Et(St, St.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), (e.flags & 64) !== 0)) {
            if (r) return G1(e, t, n);
            t.flags |= 64;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            Et(St, St.current),
            r)
          )
            break;
          return null;
        case 23:
        case 24:
          return (t.lanes = 0), Sp(e, t, n);
      }
      return no(e, t, n);
    }
  else dr = !1;
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      if (
        ((r = t.type),
        e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps),
        (i = xa(t, Jt.current)),
        da(t, n),
        (i = dg(null, t, r, e, i, n)),
        (t.flags |= 1),
        typeof i == 'object' &&
          i !== null &&
          typeof i.render == 'function' &&
          i.$$typeof === void 0)
      ) {
        if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), gn(r))) {
          var u = !0;
          Ks(t);
        } else u = !1;
        (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null), lg(t);
        var l = r.getDerivedStateFromProps;
        typeof l == 'function' && Nc(t, r, l, e),
          (i.updater = sf),
          (t.stateNode = i),
          (i._reactInternals = t),
          Mh(t, r, e, n),
          (t = Rh(null, t, r, !0, u, n));
      } else (t.tag = 0), hn(null, t, i, n), (t = t.child);
      return t;
    case 16:
      i = t.elementType;
      e: {
        switch (
          (e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (u = i._init),
          (i = u(i._payload)),
          (t.type = i),
          (u = t.tag = hk(i)),
          (e = cr(i, e)),
          u)
        ) {
          case 0:
            t = kh(null, t, i, e, n);
            break e;
          case 1:
            t = z1(null, t, i, e, n);
            break e;
          case 11:
            t = F1(null, t, i, e, n);
            break e;
          case 14:
            t = $1(null, t, i, cr(i.type, e), r, n);
            break e;
        }
        throw Error(ve(306, i, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : cr(r, i)),
        kh(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : cr(r, i)),
        z1(e, t, r, i, n)
      );
    case 3:
      if ((U1(t), (r = t.updateQueue), e === null || r === null)) throw Error(ve(282));
      if (
        ((r = t.pendingProps),
        (i = t.memoizedState),
        (i = i !== null ? i.element : null),
        o_(e, t),
        el(t, r, null, n),
        (r = t.memoizedState.element),
        r === i)
      )
        wp(), (t = no(e, t, n));
      else {
        if (
          ((i = t.stateNode),
          (u = i.hydrate) &&
            ((Po = fa(t.stateNode.containerInfo.firstChild)), (to = t), (u = Mr = !0)),
          u)
        ) {
          if (((e = i.mutableSourceEagerHydrationData), e != null))
            for (i = 0; i < e.length; i += 2)
              (u = e[i]), (u._workInProgressVersionPrimary = e[i + 1]), pa.push(u);
          for (n = l_(t, null, r, n), t.child = n; n; )
            (n.flags = (n.flags & -3) | 1024), (n = n.sibling);
        } else hn(e, t, r, n), wp();
        t = t.child;
      }
      return t;
    case 5:
      return (
        k1(t),
        e === null && Ah(t),
        (r = t.type),
        (i = t.pendingProps),
        (u = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Ch(r, i) ? (l = null) : u !== null && Ch(r, u) && (t.flags |= 16),
        y_(e, t),
        hn(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Ah(t), null;
    case 13:
      return j1(e, t, n);
    case 4:
      return (
        Ph(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Tc(t, null, r, n)) : hn(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : cr(r, i)),
        F1(e, t, r, i, n)
      );
    case 7:
      return hn(e, t, t.pendingProps, n), t.child;
    case 8:
      return hn(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return hn(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        (r = t.type._context), (i = t.pendingProps), (l = t.memoizedProps), (u = i.value);
        var c = t.type._context;
        if ((Et(bc, c._currentValue), (c._currentValue = u), l !== null))
          if (
            ((c = l.value),
            (u = Xn(c, u)
              ? 0
              : (typeof r._calculateChangedBits == 'function'
                  ? r._calculateChangedBits(c, u)
                  : 1073741823) | 0),
            u === 0)
          ) {
            if (l.children === i.children && !vn.current) {
              t = no(e, t, n);
              break e;
            }
          } else
            for (c = t.child, c !== null && (c.return = t); c !== null; ) {
              var f = c.dependencies;
              if (f !== null) {
                l = c.child;
                for (var p = f.firstContext; p !== null; ) {
                  if (p.context === r && (p.observedBits & u) !== 0) {
                    c.tag === 1 && ((p = Lo(-1, n & -n)), (p.tag = 2), Ho(c, p)),
                      (c.lanes |= n),
                      (p = c.alternate),
                      p !== null && (p.lanes |= n),
                      r_(c.return, n),
                      (f.lanes |= n);
                    break;
                  }
                  p = p.next;
                }
              } else l = c.tag === 10 && c.type === t.type ? null : c.child;
              if (l !== null) l.return = c;
              else
                for (l = c; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((c = l.sibling), c !== null)) {
                    (c.return = l.return), (l = c);
                    break;
                  }
                  l = l.return;
                }
              c = l;
            }
        hn(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (u = t.pendingProps),
        (r = u.children),
        da(t, n),
        (i = Zn(i, u.unstable_observedBits)),
        (r = r(i)),
        (t.flags |= 1),
        hn(e, t, r, n),
        t.child
      );
    case 14:
      return (i = t.type), (u = cr(i, t.pendingProps)), (u = cr(i.type, u)), $1(e, t, i, u, r, n);
    case 15:
      return m_(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : cr(r, i)),
        e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        gn(r) ? ((e = !0), Ks(t)) : (e = !1),
        da(t, n),
        a_(t, r, i),
        Mh(t, r, i, n),
        Rh(null, t, r, !0, e, n)
      );
    case 19:
      return G1(e, t, n);
    case 23:
      return Sp(e, t, n);
    case 24:
      return Sp(e, t, n);
  }
  throw Error(ve(156, t.tag));
};
function pk(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Gn(e, t, n, r) {
  return new pk(e, t, n, r);
}
function Eg(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function hk(e) {
  if (typeof e == 'function') return Eg(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Jc)) return 11;
    if (e === ef) return 14;
  }
  return 2;
}
function Vo(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Gn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.nextEffect = null),
        (n.firstEffect = null),
        (n.lastEffect = null)),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function nc(e, t, n, r, i, u) {
  var l = 2;
  if (((r = e), typeof e == 'function')) Eg(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case Co:
        return ga(n.children, i, u, t);
      case sE:
        (l = 8), (i |= 16);
        break;
      case Hv:
        (l = 8), (i |= 1);
        break;
      case Mu:
        return (e = Gn(12, n, t, i | 8)), (e.elementType = Mu), (e.type = Mu), (e.lanes = u), e;
      case Pu:
        return (e = Gn(13, n, t, i)), (e.type = Pu), (e.elementType = Pu), (e.lanes = u), e;
      case vc:
        return (e = Gn(19, n, t, i)), (e.elementType = vc), (e.lanes = u), e;
      case jv:
        return _g(n, i, u, t);
      case uh:
        return (e = Gn(24, n, t, i)), (e.elementType = uh), (e.lanes = u), e;
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Bv:
              l = 10;
              break e;
            case Fv:
              l = 9;
              break e;
            case Jc:
              l = 11;
              break e;
            case ef:
              l = 14;
              break e;
            case $v:
              (l = 16), (r = null);
              break e;
            case zv:
              l = 22;
              break e;
          }
        throw Error(ve(130, e == null ? e : typeof e, ''));
    }
  return (t = Gn(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = u), t;
}
function ga(e, t, n, r) {
  return (e = Gn(7, e, r, t)), (e.lanes = n), e;
}
function _g(e, t, n, r) {
  return (e = Gn(23, e, r, t)), (e.elementType = jv), (e.lanes = n), e;
}
function xp(e, t, n) {
  return (e = Gn(6, e, null, t)), (e.lanes = n), e;
}
function bp(e, t, n) {
  return (
    (t = Gn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function vk(e, t, n) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = n),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = up(0)),
    (this.expirationTimes = up(-1)),
    (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
    (this.entanglements = up(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function gk(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ci,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Hc(e, t, n, r) {
  var i = t.current,
    u = Pn(),
    l = Bo(i);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (Oi(n) !== n || n.tag !== 1) throw Error(ve(170));
      var c = n;
      do {
        switch (c.tag) {
          case 3:
            c = c.stateNode.context;
            break t;
          case 1:
            if (gn(c.type)) {
              c = c.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        c = c.return;
      } while (c !== null);
      throw Error(ve(171));
    }
    if (n.tag === 1) {
      var f = n.type;
      if (gn(f)) {
        n = ZE(n, f, c);
        break e;
      }
    }
    n = c;
  } else n = Wo;
  return (
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lo(u, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    Ho(i, t),
    Fo(i, l, u),
    l
  );
}
function Cp(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rw(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function xg(e, t) {
  rw(e, t), (e = e.alternate) && rw(e, t);
}
function mk() {
  return null;
}
function bg(e, t, n) {
  var r = (n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources) || null;
  if (
    ((n = new vk(e, t, n != null && n.hydrate === !0)),
    (t = Gn(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
    (n.current = t),
    (t.stateNode = n),
    lg(t),
    (e[La] = n.current),
    YE(e.nodeType === 8 ? e.parentNode : e),
    r)
  )
    for (e = 0; e < r.length; e++) {
      t = r[e];
      var i = t._getVersion;
      (i = i(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, i])
          : n.mutableSourceEagerHydrationData.push(t, i);
    }
  this._internalRoot = n;
}
bg.prototype.render = function (e) {
  Hc(e, this._internalRoot, null, null);
};
bg.prototype.unmount = function () {
  var e = this._internalRoot,
    t = e.containerInfo;
  Hc(null, e, null, function () {
    t[La] = null;
  });
};
function _l(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function yk(e, t) {
  if (
    (t ||
      ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (t = !(!t || t.nodeType !== 1 || !t.hasAttribute('data-reactroot')))),
    !t)
  )
    for (var n; (n = e.lastChild); ) e.removeChild(n);
  return new bg(e, 0, t ? { hydrate: !0 } : void 0);
}
function df(e, t, n, r, i) {
  var u = n._reactRootContainer;
  if (u) {
    var l = u._internalRoot;
    if (typeof i == 'function') {
      var c = i;
      i = function () {
        var p = Cp(l);
        c.call(p);
      };
    }
    Hc(t, l, e, i);
  } else {
    if (((u = n._reactRootContainer = yk(n, r)), (l = u._internalRoot), typeof i == 'function')) {
      var f = i;
      i = function () {
        var p = Cp(l);
        f.call(p);
      };
    }
    N_(function () {
      Hc(t, l, e, i);
    });
  }
  return Cp(l);
}
bE = function (e) {
  if (e.tag === 13) {
    var t = Pn();
    Fo(e, 4, t), xg(e, 4);
  }
};
Gv = function (e) {
  if (e.tag === 13) {
    var t = Pn();
    Fo(e, 67108864, t), xg(e, 67108864);
  }
};
CE = function (e) {
  if (e.tag === 13) {
    var t = Pn(),
      n = Bo(e);
    Fo(e, n, t), xg(e, n);
  }
};
OE = function (e, t) {
  return t();
};
mh = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((sh(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = uf(r);
            if (!i) throw Error(ve(90));
            fE(r), sh(r, i);
          }
        }
      }
      break;
    case 'textarea':
      pE(e, n);
      break;
    case 'select':
      (t = n.value), t != null && la(e, !!n.multiple, t, !1);
  }
};
Yv = O_;
SE = function (e, t, n, r, i) {
  var u = Re;
  Re |= 4;
  try {
    return wi(98, e.bind(null, t, n, r, i));
  } finally {
    (Re = u), Re === 0 && (Fa(), Lr());
  }
};
Vv = function () {
  (Re & 49) === 0 && (ok(), qo());
};
EE = function (e, t) {
  var n = Re;
  Re |= 2;
  try {
    return e(t);
  } finally {
    (Re = n), Re === 0 && (Fa(), Lr());
  }
};
function R_(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_l(t)) throw Error(ve(200));
  return gk(e, t, null, n);
}
var wk = { Events: [wl, na, uf, yE, wE, qo, { current: !1 }] },
  vu = {
    findFiberByHostInstance: di,
    bundleType: 0,
    version: '17.0.2',
    rendererPackageName: 'react-dom',
  },
  Sk = {
    bundleType: vu.bundleType,
    version: vu.version,
    rendererPackageName: vu.rendererPackageName,
    rendererConfig: vu.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ci.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xE(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vu.findFiberByHostInstance || mk,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != 'undefined') {
  var Ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ps.isDisabled && Ps.supportsFiber)
    try {
      (og = Ps.inject(Sk)), (mi = Ps);
    } catch (e) {}
}
er.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wk;
er.createPortal = R_;
er.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(ve(188)) : Error(ve(268, Object.keys(e)));
  return (e = xE(t)), (e = e === null ? null : e.stateNode), e;
};
er.flushSync = function (e, t) {
  var n = Re;
  if ((n & 48) !== 0) return e(t);
  Re |= 1;
  try {
    if (e) return wi(99, e.bind(null, t));
  } finally {
    (Re = n), Lr();
  }
};
er.hydrate = function (e, t, n) {
  if (!_l(t)) throw Error(ve(200));
  return df(null, e, t, !0, n);
};
er.render = function (e, t, n) {
  if (!_l(t)) throw Error(ve(200));
  return df(null, e, t, !1, n);
};
er.unmountComponentAtNode = function (e) {
  if (!_l(e)) throw Error(ve(40));
  return e._reactRootContainer
    ? (N_(function () {
        df(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[La] = null);
        });
      }),
      !0)
    : !1;
};
er.unstable_batchedUpdates = O_;
er.unstable_createPortal = function (e, t) {
  return R_(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
er.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_l(n)) throw Error(ve(200));
  if (e == null || e._reactInternals === void 0) throw Error(ve(38));
  return df(e, t, n, !1, r);
};
er.version = '17.0.2';
function I_() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == 'undefined' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I_);
    } catch (e) {
      console.error(e);
    }
}
I_(), (ml.exports = er);
var Cg = ml.exports;
var L_ = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ (function (
  e,
) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var u = arguments[i];
        if (!!u) {
          var l = typeof u;
          if (l === 'string' || l === 'number') r.push(u);
          else if (Array.isArray(u)) {
            if (u.length) {
              var c = n.apply(null, u);
              c && r.push(c);
            }
          } else if (l === 'object')
            if (u.toString === Object.prototype.toString)
              for (var f in u) t.call(u, f) && u[f] && r.push(f);
            else r.push(u.toString());
        }
      }
      return r.join(' ');
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(L_);
var Vn = L_.exports,
  pf = { exports: {} },
  xl = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ek = T.exports,
  H_ = 60103;
xl.Fragment = 60107;
if (typeof Symbol == 'function' && Symbol.for) {
  var ow = Symbol.for;
  (H_ = ow('react.element')), (xl.Fragment = ow('react.fragment'));
}
var _k = Ek.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  xk = Object.prototype.hasOwnProperty,
  bk = { key: !0, ref: !0, __self: !0, __source: !0 };
function B_(e, t, n) {
  var r,
    i = {},
    u = null,
    l = null;
  n !== void 0 && (u = '' + n),
    t.key !== void 0 && (u = '' + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) xk.call(t, r) && !bk.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: H_, type: e, key: u, ref: l, props: i, _owner: _k.current };
}
xl.jsx = B_;
xl.jsxs = B_;
pf.exports = xl;
const L = pf.exports.jsx,
  xe = pf.exports.jsxs,
  Tt = pf.exports.Fragment;
function an(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Ck(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    u;
  for (u = 0; u < r.length; u++) (i = r[u]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function hf(e, t) {
  if (e == null) return {};
  var n = Ck(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (i = 0; i < u.length; i++)
      (r = u[i]),
        !(t.indexOf(r) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
function tr(e) {
  if (typeof e == 'string' || typeof e == 'number') return '' + e;
  let t = '';
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++) (r = tr(e[n])) !== '' && (t += (t && ' ') + r);
  else for (let n in e) e[n] && (t += (t && ' ') + n);
  return t;
}
function Nn(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var iw = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  Op = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  aw = {
    INIT: '@@redux/INIT' + Op(),
    REPLACE: '@@redux/REPLACE' + Op(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + Op();
    },
  };
function Ok(e) {
  if (typeof e != 'object' || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function F_(e, t, n) {
  var r;
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Nn(0));
  if (
    (typeof t == 'function' && typeof n == 'undefined' && ((n = t), (t = void 0)),
    typeof n != 'undefined')
  ) {
    if (typeof n != 'function') throw new Error(Nn(1));
    return n(F_)(e, t);
  }
  if (typeof e != 'function') throw new Error(Nn(2));
  var i = e,
    u = t,
    l = [],
    c = l,
    f = !1;
  function p() {
    c === l && (c = l.slice());
  }
  function h() {
    if (f) throw new Error(Nn(3));
    return u;
  }
  function x(_) {
    if (typeof _ != 'function') throw new Error(Nn(4));
    if (f) throw new Error(Nn(5));
    var m = !0;
    return (
      p(),
      c.push(_),
      function () {
        if (!!m) {
          if (f) throw new Error(Nn(6));
          (m = !1), p();
          var w = c.indexOf(_);
          c.splice(w, 1), (l = null);
        }
      }
    );
  }
  function S(_) {
    if (!Ok(_)) throw new Error(Nn(7));
    if (typeof _.type == 'undefined') throw new Error(Nn(8));
    if (f) throw new Error(Nn(9));
    try {
      (f = !0), (u = i(u, _));
    } finally {
      f = !1;
    }
    for (var m = (l = c), v = 0; v < m.length; v++) {
      var w = m[v];
      w();
    }
    return _;
  }
  function b(_) {
    if (typeof _ != 'function') throw new Error(Nn(10));
    (i = _), S({ type: aw.REPLACE });
  }
  function E() {
    var _,
      m = x;
    return (
      (_ = {
        subscribe: function (w) {
          if (typeof w != 'object' || w === null) throw new Error(Nn(11));
          function N() {
            w.next && w.next(h());
          }
          N();
          var g = m(N);
          return { unsubscribe: g };
        },
      }),
      (_[iw] = function () {
        return this;
      }),
      _
    );
  }
  return (
    S({ type: aw.INIT }),
    (r = { dispatch: S, subscribe: x, getState: h, replaceReducer: b }),
    (r[iw] = E),
    r
  );
}
function uw(e, t) {
  return function () {
    return t(e.apply(this, arguments));
  };
}
function lw(e, t) {
  if (typeof e == 'function') return uw(e, t);
  if (typeof e != 'object' || e === null) throw new Error(Nn(16));
  var n = {};
  for (var r in e) {
    var i = e[r];
    typeof i == 'function' && (n[r] = uw(i, t));
  }
  return n;
}
function Nk(e) {
  if (e.__esModule) return e;
  var t = Object.defineProperty({}, '__esModule', { value: !0 });
  return (
    Object.keys(e).forEach(function (n) {
      var r = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(
        t,
        n,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            },
      );
    }),
    t
  );
}
var Og = { exports: {} },
  $_ = { exports: {} },
  ot = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bt = typeof Symbol == 'function' && Symbol.for,
  Ng = Bt ? Symbol.for('react.element') : 60103,
  Tg = Bt ? Symbol.for('react.portal') : 60106,
  vf = Bt ? Symbol.for('react.fragment') : 60107,
  gf = Bt ? Symbol.for('react.strict_mode') : 60108,
  mf = Bt ? Symbol.for('react.profiler') : 60114,
  yf = Bt ? Symbol.for('react.provider') : 60109,
  wf = Bt ? Symbol.for('react.context') : 60110,
  Mg = Bt ? Symbol.for('react.async_mode') : 60111,
  Sf = Bt ? Symbol.for('react.concurrent_mode') : 60111,
  Ef = Bt ? Symbol.for('react.forward_ref') : 60112,
  _f = Bt ? Symbol.for('react.suspense') : 60113,
  Tk = Bt ? Symbol.for('react.suspense_list') : 60120,
  xf = Bt ? Symbol.for('react.memo') : 60115,
  bf = Bt ? Symbol.for('react.lazy') : 60116,
  Mk = Bt ? Symbol.for('react.block') : 60121,
  Pk = Bt ? Symbol.for('react.fundamental') : 60117,
  Ak = Bt ? Symbol.for('react.responder') : 60118,
  Dk = Bt ? Symbol.for('react.scope') : 60119;
function Rn(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ng:
        switch (((e = e.type), e)) {
          case Mg:
          case Sf:
          case vf:
          case mf:
          case gf:
          case _f:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case wf:
              case Ef:
              case bf:
              case xf:
              case yf:
                return e;
              default:
                return t;
            }
        }
      case Tg:
        return t;
    }
  }
}
function z_(e) {
  return Rn(e) === Sf;
}
ot.AsyncMode = Mg;
ot.ConcurrentMode = Sf;
ot.ContextConsumer = wf;
ot.ContextProvider = yf;
ot.Element = Ng;
ot.ForwardRef = Ef;
ot.Fragment = vf;
ot.Lazy = bf;
ot.Memo = xf;
ot.Portal = Tg;
ot.Profiler = mf;
ot.StrictMode = gf;
ot.Suspense = _f;
ot.isAsyncMode = function (e) {
  return z_(e) || Rn(e) === Mg;
};
ot.isConcurrentMode = z_;
ot.isContextConsumer = function (e) {
  return Rn(e) === wf;
};
ot.isContextProvider = function (e) {
  return Rn(e) === yf;
};
ot.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ng;
};
ot.isForwardRef = function (e) {
  return Rn(e) === Ef;
};
ot.isFragment = function (e) {
  return Rn(e) === vf;
};
ot.isLazy = function (e) {
  return Rn(e) === bf;
};
ot.isMemo = function (e) {
  return Rn(e) === xf;
};
ot.isPortal = function (e) {
  return Rn(e) === Tg;
};
ot.isProfiler = function (e) {
  return Rn(e) === mf;
};
ot.isStrictMode = function (e) {
  return Rn(e) === gf;
};
ot.isSuspense = function (e) {
  return Rn(e) === _f;
};
ot.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === vf ||
    e === Sf ||
    e === mf ||
    e === gf ||
    e === _f ||
    e === Tk ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === bf ||
        e.$$typeof === xf ||
        e.$$typeof === yf ||
        e.$$typeof === wf ||
        e.$$typeof === Ef ||
        e.$$typeof === Pk ||
        e.$$typeof === Ak ||
        e.$$typeof === Dk ||
        e.$$typeof === Mk))
  );
};
ot.typeOf = Rn;
$_.exports = ot;
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var sw = Object.getOwnPropertySymbols,
  kk = Object.prototype.hasOwnProperty,
  Rk = Object.prototype.propertyIsEnumerable;
function Ik(e) {
  if (e == null) throw new TypeError('Object.assign cannot be called with null or undefined');
  return Object(e);
}
function Lk() {
  try {
    if (!Object.assign) return !1;
    var e = new String('abc');
    if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1;
    for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (u) {
      return t[u];
    });
    if (r.join('') !== '0123456789') return !1;
    var i = {};
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function (u) {
        i[u] = u;
      }),
      Object.keys(Object.assign({}, i)).join('') === 'abcdefghijklmnopqrst'
    );
  } catch (u) {
    return !1;
  }
}
Lk();
var Hk = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  Bk = Hk;
Function.call.bind(Object.prototype.hasOwnProperty);
var Fk = Bk;
function U_() {}
function j_() {}
j_.resetWarningCache = U_;
var $k = function () {
  function e(r, i, u, l, c, f) {
    if (f !== Fk) {
      var p = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      );
      throw ((p.name = 'Invariant Violation'), p);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: j_,
    resetWarningCache: U_,
  };
  return (n.PropTypes = n), n;
};
Og.exports = $k();
var io = Kc.createContext(null);
function zk(e) {
  e();
}
var W_ = zk,
  Uk = function (t) {
    return (W_ = t);
  },
  jk = function () {
    return W_;
  };
function Wk() {
  var e = jk(),
    t = null,
    n = null;
  return {
    clear: function () {
      (t = null), (n = null);
    },
    notify: function () {
      e(function () {
        for (var i = t; i; ) i.callback(), (i = i.next);
      });
    },
    get: function () {
      for (var i = [], u = t; u; ) i.push(u), (u = u.next);
      return i;
    },
    subscribe: function (i) {
      var u = !0,
        l = (n = { callback: i, next: null, prev: n });
      return (
        l.prev ? (l.prev.next = l) : (t = l),
        function () {
          !u ||
            t === null ||
            ((u = !1),
            l.next ? (l.next.prev = l.prev) : (n = l.prev),
            l.prev ? (l.prev.next = l.next) : (t = l.next));
        }
      );
    },
  };
}
var cw = {
  notify: function () {},
  get: function () {
    return [];
  },
};
function Y_(e, t) {
  var n,
    r = cw;
  function i(x) {
    return f(), r.subscribe(x);
  }
  function u() {
    r.notify();
  }
  function l() {
    h.onStateChange && h.onStateChange();
  }
  function c() {
    return Boolean(n);
  }
  function f() {
    n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (r = Wk()));
  }
  function p() {
    n && (n(), (n = void 0), r.clear(), (r = cw));
  }
  var h = {
    addNestedSub: i,
    notifyNestedSubs: u,
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: function () {
      return r;
    },
  };
  return h;
}
var Xh =
  typeof window != 'undefined' &&
  typeof window.document != 'undefined' &&
  typeof window.document.createElement != 'undefined'
    ? T.exports.useLayoutEffect
    : T.exports.useEffect;
function V_(e) {
  var t = e.store,
    n = e.context,
    r = e.children,
    i = T.exports.useMemo(
      function () {
        var c = Y_(t);
        return (c.onStateChange = c.notifyNestedSubs), { store: t, subscription: c };
      },
      [t],
    ),
    u = T.exports.useMemo(
      function () {
        return t.getState();
      },
      [t],
    );
  Xh(
    function () {
      var c = i.subscription;
      return (
        c.trySubscribe(),
        u !== t.getState() && c.notifyNestedSubs(),
        function () {
          c.tryUnsubscribe(), (c.onStateChange = null);
        }
      );
    },
    [i, u],
  );
  var l = n || io;
  return L(l.Provider, { value: i, children: r });
}
var X_ = $_.exports,
  Yk = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  Vk = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  G_ = {};
G_[X_.ForwardRef] = Yk;
G_[X_.Memo] = Vk;
if (typeof Symbol == 'function' && Symbol.for) {
  var zt = Symbol.for;
  zt('react.element'),
    zt('react.portal'),
    zt('react.fragment'),
    zt('react.strict_mode'),
    zt('react.profiler'),
    zt('react.provider'),
    zt('react.context'),
    zt('react.forward_ref'),
    zt('react.suspense'),
    zt('react.suspense_list'),
    zt('react.memo'),
    zt('react.lazy'),
    zt('react.block'),
    zt('react.server.block'),
    zt('react.fundamental'),
    zt('react.debug_trace_mode'),
    zt('react.legacy_hidden');
}
function q_() {
  var e = T.exports.useContext(io);
  return e;
}
function Z_(e) {
  e === void 0 && (e = io);
  var t =
    e === io
      ? q_
      : function () {
          return T.exports.useContext(e);
        };
  return function () {
    var r = t(),
      i = r.store;
    return i;
  };
}
var K_ = Z_();
function Xk(e) {
  e === void 0 && (e = io);
  var t = e === io ? K_ : Z_(e);
  return function () {
    var r = t();
    return r.dispatch;
  };
}
var Gk = Xk(),
  qk = function (t, n) {
    return t === n;
  };
function Zk(e, t, n, r) {
  var i = T.exports.useReducer(function (E) {
      return E + 1;
    }, 0),
    u = i[1],
    l = T.exports.useMemo(
      function () {
        return Y_(n, r);
      },
      [n, r],
    ),
    c = T.exports.useRef(),
    f = T.exports.useRef(),
    p = T.exports.useRef(),
    h = T.exports.useRef(),
    x = n.getState(),
    S;
  try {
    if (e !== f.current || x !== p.current || c.current) {
      var b = e(x);
      h.current === void 0 || !t(b, h.current) ? (S = b) : (S = h.current);
    } else S = h.current;
  } catch (E) {
    throw (
      (c.current &&
        (E.message +=
          `
The error may be correlated with this previous error:
` +
          c.current.stack +
          `

`),
      E)
    );
  }
  return (
    Xh(function () {
      (f.current = e), (p.current = x), (h.current = S), (c.current = void 0);
    }),
    Xh(
      function () {
        function E() {
          try {
            var _ = n.getState();
            if (_ === p.current) return;
            var m = f.current(_);
            if (t(m, h.current)) return;
            (h.current = m), (p.current = _);
          } catch (v) {
            c.current = v;
          }
          u();
        }
        return (
          (l.onStateChange = E),
          l.trySubscribe(),
          E(),
          function () {
            return l.tryUnsubscribe();
          }
        );
      },
      [n, l],
    ),
    S
  );
}
function Kk(e) {
  e === void 0 && (e = io);
  var t =
    e === io
      ? q_
      : function () {
          return T.exports.useContext(e);
        };
  return function (r, i) {
    i === void 0 && (i = qk);
    var u = t(),
      l = u.store,
      c = u.subscription,
      f = Zk(r, i, l, c);
    return T.exports.useDebugValue(f), f;
  };
}
var Qk = Kk();
Uk(ml.exports.unstable_batchedUpdates);
function Qe(e, t) {
  return { type: e, payload: t };
}
var Q_ = 'SET_ON_CONNECT',
  J_ = 'SET_ON_CONNECT_START',
  ex = 'SET_ON_CONNECT_STOP',
  tx = 'SET_ON_CONNECT_END',
  nx = 'SET_ELEMENTS',
  rx = 'UPDATE_NODE_DIMENSIONS',
  ox = 'UPDATE_NODE_POS',
  ix = 'UPDATE_NODE_POS_DIFF',
  ax = 'SET_USER_SELECTION',
  ux = 'UPDATE_USER_SELECTION',
  lx = 'UNSET_USER_SELECTION',
  Jk = 'SET_SELECTION',
  sx = 'UNSET_NODES_SELECTION',
  cx = 'SET_SELECTED_ELEMENTS',
  fx = 'RESET_SELECTED_ELEMENTS',
  dx = 'ADD_SELECTED_ELEMENTS',
  px = 'UPDATE_TRANSFORM',
  hx = 'UPDATE_SIZE',
  vx = 'INIT_D3ZOOM',
  gx = 'SET_MINZOOM',
  mx = 'SET_MAXZOOM',
  yx = 'SET_TRANSLATEEXTENT',
  wx = 'SET_CONNECTION_POSITION',
  Sx = 'SET_CONNECTION_NODEID',
  Ex = 'SET_SNAPTOGRID',
  _x = 'SET_SNAPGRID',
  xx = 'SET_INTERACTIVE',
  bx = 'SET_NODES_DRAGGABLE',
  Cx = 'SET_NODES_CONNECTABLE',
  Ox = 'SET_ELEMENTS_SELECTABLE',
  Nx = 'SET_MULTI_SELECTION_ACTIVE',
  Tx = 'SET_CONNECTION_MODE',
  Mx = 'SET_NODE_EXTENT',
  eR = function (t) {
    return Qe(Q_, { onConnect: t });
  },
  tR = function (t) {
    return Qe(J_, { onConnectStart: t });
  },
  nR = function (t) {
    return Qe(ex, { onConnectStop: t });
  },
  rR = function (t) {
    return Qe(tx, { onConnectEnd: t });
  },
  oR = function (t) {
    return Qe(nx, t);
  },
  iR = function (t) {
    return Qe(rx, t);
  },
  aR = function (t) {
    return Qe(ox, t);
  },
  uR = function (t) {
    return Qe(ix, t);
  },
  lR = function (t) {
    return Qe(ax, t);
  },
  sR = function (t) {
    return Qe(ux, t);
  },
  cR = function () {
    return Qe(lx);
  },
  fR = function (t) {
    return Qe(Jk, { selectionActive: t });
  },
  dR = function () {
    return Qe(sx, { nodesSelectionActive: !1 });
  },
  pR = function () {
    return Qe(fx, { selectedElements: null });
  },
  hR = function (t) {
    return Qe(cx, t);
  },
  vR = function (t) {
    return Qe(dx, t);
  },
  gR = function (t) {
    return Qe(px, { transform: t });
  },
  mR = function (t) {
    return Qe(hx, { width: t.width || 500, height: t.height || 500 });
  },
  yR = function (t) {
    return Qe(vx, t);
  },
  wR = function (t) {
    return Qe(gx, t);
  },
  SR = function (t) {
    return Qe(mx, t);
  },
  ER = function (t) {
    return Qe(yx, t);
  },
  _R = function (t) {
    return Qe(wx, { connectionPosition: t });
  },
  xR = function (t) {
    return Qe(Sx, t);
  },
  bR = function (t) {
    return Qe(Ex, { snapToGrid: t });
  },
  CR = function (t) {
    return Qe(_x, { snapGrid: t });
  },
  OR = function (t) {
    return Qe(xx, { nodesDraggable: t, nodesConnectable: t, elementsSelectable: t });
  },
  NR = function (t) {
    return Qe(bx, { nodesDraggable: t });
  },
  TR = function (t) {
    return Qe(Cx, { nodesConnectable: t });
  },
  MR = function (t) {
    return Qe(Ox, { elementsSelectable: t });
  },
  PR = function (t) {
    return Qe(Nx, { multiSelectionActive: t });
  },
  AR = function (t) {
    return Qe(Tx, { connectionMode: t });
  },
  DR = function (t) {
    return Qe(Mx, t);
  },
  kR = Object.freeze({
    __proto__: null,
    setOnConnect: eR,
    setOnConnectStart: tR,
    setOnConnectStop: nR,
    setOnConnectEnd: rR,
    setElements: oR,
    updateNodeDimensions: iR,
    updateNodePos: aR,
    updateNodePosDiff: uR,
    setUserSelection: lR,
    updateUserSelection: sR,
    unsetUserSelection: cR,
    setSelection: fR,
    unsetNodesSelection: dR,
    resetSelectedElements: pR,
    setSelectedElements: hR,
    addSelectedElements: vR,
    updateTransform: gR,
    updateSize: mR,
    initD3Zoom: yR,
    setMinZoom: wR,
    setMaxZoom: SR,
    setTranslateExtent: ER,
    setConnectionPosition: _R,
    setConnectionNodeId: xR,
    setSnapToGrid: bR,
    setSnapGrid: CR,
    setInteractive: OR,
    setNodesDraggable: NR,
    setNodesConnectable: TR,
    setElementsSelectable: MR,
    setMultiSelectionActive: PR,
    setConnectionMode: AR,
    setNodeExtent: DR,
  }),
  RR = Qk;
function Ie(e) {
  var t = Gk(),
    n = e(kR),
    r = T.exports.useMemo(
      function () {
        return lw(n, t);
      },
      [t, n],
    );
  return r;
}
var Pe = RR,
  Cf = function () {
    var t = K_();
    return t;
  };
function Gh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function IR(e) {
  if (Array.isArray(e)) return Gh(e);
}
function LR(e) {
  if ((typeof Symbol != 'undefined' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function Px(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Gh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Gh(e, t);
  }
}
function HR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ao(e) {
  return IR(e) || LR(e) || Px(e) || HR();
}
function BR(e) {
  if (Array.isArray(e)) return e;
}
function FR(e, t) {
  var n =
    e == null ? null : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r = [],
      i = !0,
      u = !1,
      l,
      c;
    try {
      for (
        n = n.call(e);
        !(i = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t));
        i = !0
      );
    } catch (f) {
      (u = !0), (c = f);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (u) throw c;
      }
    }
    return r;
  }
}
function $R() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ht(e, t) {
  return BR(e) || FR(e, t) || Px(e, t) || $R();
}
var fw = function (t) {
    var n = t == null ? void 0 : t.target;
    return (
      ['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON'].includes(n == null ? void 0 : n.nodeName) ||
      (n == null ? void 0 : n.hasAttribute('contenteditable'))
    );
  },
  Pg = function (t) {
    return { width: t.offsetWidth, height: t.offsetHeight };
  },
  ma = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    return Math.min(Math.max(t, n), r);
  },
  Ax = function (t, n) {
    return { x: ma(t.x, n[0][0], n[1][0]), y: ma(t.y, n[0][1], n[1][1]) };
  },
  zR = function (t) {
    var n, r;
    return (
      ((n = t.getRootNode) === null || n === void 0 ? void 0 : n.call(t)) ||
      ((r = window) === null || r === void 0 ? void 0 : r.document)
    );
  },
  Bc = function (e) {
    var t = T.exports.useState(!1),
      n = Ht(t, 2),
      r = n[0],
      i = n[1];
    return (
      T.exports.useEffect(
        function () {
          if (typeof e != 'undefined') {
            var u = function (p) {
                !fw(p) && (p.key === e || p.keyCode === e) && (p.preventDefault(), i(!0));
              },
              l = function (p) {
                !fw(p) && (p.key === e || p.keyCode === e) && i(!1);
              },
              c = function () {
                return i(!1);
              };
            return (
              window.addEventListener('keydown', u),
              window.addEventListener('keyup', l),
              window.addEventListener('blur', c),
              function () {
                window.removeEventListener('keydown', u),
                  window.removeEventListener('keyup', l),
                  window.removeEventListener('blur', c);
              }
            );
          }
        },
        [e, i],
      ),
      r
    );
  };
function dw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Dr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dw(Object(n), !0).forEach(function (r) {
          an(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : dw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var Dx = function (t) {
    return 'id' in t && 'source' in t && 'target' in t;
  },
  Oa = function (t) {
    return 'id' in t && !('source' in t) && !('target' in t);
  },
  UR = function (t, n) {
    var r = t.map(function (i) {
      return i.id;
    });
    return n.filter(function (i) {
      var u = i;
      return !(r.includes(i.id) || r.includes(u.target) || r.includes(u.source));
    });
  },
  kx = function (t, n, r, i) {
    var u = t.x,
      l = t.y,
      c = Ht(n, 3),
      f = c[0],
      p = c[1],
      h = c[2],
      x = Ht(i, 2),
      S = x[0],
      b = x[1],
      E = { x: (u - f) / h, y: (l - p) / h };
    return r ? { x: S * Math.round(E.x / S), y: b * Math.round(E.y / b) } : E;
  },
  jR = function (t) {
    return function (n) {
      var r = t.getState(),
        i = r.transform,
        u = r.snapToGrid,
        l = r.snapGrid;
      return kx(n, i, u, l);
    };
  },
  WR = function (t, n) {
    var r, i;
    return Dr(
      Dr({}, t),
      {},
      {
        id: t.id.toString(),
        type: t.type || 'default',
        __rf: {
          position: Ax(t.position, n),
          width: ((r = t.style) === null || r === void 0 ? void 0 : r.width) || null,
          height: ((i = t.style) === null || i === void 0 ? void 0 : i.height) || null,
          handleBounds: {},
          isDragging: !1,
        },
      },
    );
  },
  YR = function (t) {
    return Dr(
      Dr({}, t),
      {},
      {
        source: t.source.toString(),
        target: t.target.toString(),
        sourceHandle: t.sourceHandle ? t.sourceHandle.toString() : null,
        targetHandle: t.targetHandle ? t.targetHandle.toString() : null,
        id: t.id.toString(),
        type: t.type || 'default',
      },
    );
  },
  Rx = function (t, n) {
    return {
      x: Math.min(t.x, n.x),
      y: Math.min(t.y, n.y),
      x2: Math.max(t.x2, n.x2),
      y2: Math.max(t.y2, n.y2),
    };
  },
  Na = function (t) {
    var n = t.x,
      r = t.y,
      i = t.width,
      u = t.height;
    return { x: n, y: r, x2: n + i, y2: r + u };
  },
  Ix = function (t) {
    var n = t.x,
      r = t.y,
      i = t.x2,
      u = t.y2;
    return { x: n, y: r, width: i - n, height: u - r };
  },
  VR = function (t, n) {
    return Ix(Rx(Na(t), Na(n)));
  },
  Ag = function (t) {
    var n = t.reduce(
      function (r, i) {
        var u = i.__rf;
        u = u === void 0 ? {} : u;
        var l = u.position,
          c = u.width,
          f = u.height;
        return Rx(r, Na(Dr(Dr({}, l), {}, { width: c, height: f })));
      },
      { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
    );
    return Ix(n);
  },
  Lx = function (t, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [0, 0, 1],
      i = Ht(r, 3),
      u = i[0],
      l = i[1],
      c = i[2],
      f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
      p = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
      h = Na({ x: (n.x - u) / c, y: (n.y - l) / c, width: n.width / c, height: n.height / c });
    return t.filter(function (x) {
      var S = x.selectable,
        b = S === void 0 ? !0 : S,
        E = x.__rf,
        _ = E.position,
        m = E.width,
        v = E.height,
        w = E.isDragging;
      if (p && !b) return !1;
      var N = Na(Dr(Dr({}, _), {}, { width: m, height: v })),
        g = Math.max(0, Math.min(h.x2, N.x2) - Math.max(h.x, N.x)),
        M = Math.max(0, Math.min(h.y2, N.y2) - Math.max(h.y, N.y)),
        P = Math.ceil(g * M);
      if (m === null || v === null || w) return !0;
      if (f) return P > 0;
      var H = m * v;
      return P >= H;
    });
  },
  Hx = function (t, n) {
    var r = t.map(function (i) {
      return i.id;
    });
    return n.filter(function (i) {
      return r.includes(i.source) || r.includes(i.target);
    });
  },
  Bx = function (t, n) {
    return [].concat(
      Ao(
        t.map(function (r) {
          var i = Dr({}, r);
          return (i.position = i.__rf.position), delete i.__rf, i;
        }),
      ),
      Ao(
        n.map(function (r) {
          return Dr({}, r);
        }),
      ),
    );
  },
  XR = function (t) {
    return function () {
      var n = t.getState(),
        r = n.nodes,
        i = r === void 0 ? [] : r,
        u = n.edges,
        l = u === void 0 ? [] : u;
      return Bx(i, l);
    };
  },
  GR = function (t) {
    return function () {
      var n = t.getState(),
        r = n.nodes,
        i = r === void 0 ? [] : r,
        u = n.edges,
        l = u === void 0 ? [] : u,
        c = n.transform;
      return { elements: Bx(i, l), position: [c[0], c[1]], zoom: c[2] };
    };
  },
  pw = function (t, n, r, i, u) {
    var l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0.1,
      c = n / (t.width * (1 + l)),
      f = r / (t.height * (1 + l)),
      p = Math.min(c, f),
      h = ma(p, i, u),
      x = t.x + t.width / 2,
      S = t.y + t.height / 2,
      b = n / 2 - x * h,
      E = r / 2 - S * h;
    return [b, E, h];
  },
  qR = function (e) {
    var t = e.deleteKeyCode,
      n = e.multiSelectionKeyCode,
      r = e.onElementsRemove,
      i = Cf(),
      u = Ie(function (h) {
        return h.unsetNodesSelection;
      }),
      l = Ie(function (h) {
        return h.setMultiSelectionActive;
      }),
      c = Ie(function (h) {
        return h.resetSelectedElements;
      }),
      f = Bc(t),
      p = Bc(n);
    T.exports.useEffect(
      function () {
        var h = i.getState(),
          x = h.edges,
          S = h.selectedElements;
        if (r && f && S) {
          var b = S.filter(Oa),
            E = Hx(b, x),
            _ = [].concat(Ao(S), Ao(E)).reduce(function (m, v) {
              return m.set(v.id, v);
            }, new Map());
          r(Array.from(_.values())), u(), c();
        }
      },
      [f],
    ),
      T.exports.useEffect(
        function () {
          l(p);
        },
        [p],
      );
  },
  ZR = { value: () => {} };
function Dg() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + '') || r in n || /[\s.]/.test(r))
      throw new Error('illegal type: ' + r);
    n[r] = [];
  }
  return new rc(n);
}
function rc(e) {
  this._ = e;
}
function KR(e, t) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (n) {
      var r = '',
        i = n.indexOf('.');
      if ((i >= 0 && ((r = n.slice(i + 1)), (n = n.slice(0, i))), n && !t.hasOwnProperty(n)))
        throw new Error('unknown type: ' + n);
      return { type: n, name: r };
    });
}
rc.prototype = Dg.prototype = {
  constructor: rc,
  on: function (e, t) {
    var n = this._,
      r = KR(e + '', n),
      i,
      u = -1,
      l = r.length;
    if (arguments.length < 2) {
      for (; ++u < l; ) if ((i = (e = r[u]).type) && (i = QR(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != 'function') throw new Error('invalid callback: ' + t);
    for (; ++u < l; )
      if ((i = (e = r[u]).type)) n[i] = hw(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = hw(n[i], e.name, null);
    return this;
  },
  copy: function () {
    var e = {},
      t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new rc(e);
  },
  call: function (e, t) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), r = 0, i, u; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error('unknown type: ' + e);
    for (u = this._[e], r = 0, i = u.length; r < i; ++r) u[r].value.apply(t, n);
  },
  apply: function (e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error('unknown type: ' + e);
    for (var r = this._[e], i = 0, u = r.length; i < u; ++i) r[i].value.apply(t, n);
  },
};
function QR(e, t) {
  for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function hw(e, t, n) {
  for (var r = 0, i = e.length; r < i; ++r)
    if (e[r].name === t) {
      (e[r] = ZR), (e = e.slice(0, r).concat(e.slice(r + 1)));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var qh = 'http://www.w3.org/1999/xhtml',
  vw = {
    svg: 'http://www.w3.org/2000/svg',
    xhtml: qh,
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace',
    xmlns: 'http://www.w3.org/2000/xmlns/',
  };
function Of(e) {
  var t = (e += ''),
    n = t.indexOf(':');
  return (
    n >= 0 && (t = e.slice(0, n)) !== 'xmlns' && (e = e.slice(n + 1)),
    vw.hasOwnProperty(t) ? { space: vw[t], local: e } : e
  );
}
function JR(e) {
  return function () {
    var t = this.ownerDocument,
      n = this.namespaceURI;
    return n === qh && t.documentElement.namespaceURI === qh
      ? t.createElement(e)
      : t.createElementNS(n, e);
  };
}
function eI(e) {
  return function () {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Fx(e) {
  var t = Of(e);
  return (t.local ? eI : JR)(t);
}
function tI() {}
function kg(e) {
  return e == null
    ? tI
    : function () {
        return this.querySelector(e);
      };
}
function nI(e) {
  typeof e != 'function' && (e = kg(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var u = t[i], l = u.length, c = (r[i] = new Array(l)), f, p, h = 0; h < l; ++h)
      (f = u[h]) &&
        (p = e.call(f, f.__data__, h, u)) &&
        ('__data__' in f && (p.__data__ = f.__data__), (c[h] = p));
  return new Dn(r, this._parents);
}
function rI(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function oI() {
  return [];
}
function $x(e) {
  return e == null
    ? oI
    : function () {
        return this.querySelectorAll(e);
      };
}
function iI(e) {
  return function () {
    return rI(e.apply(this, arguments));
  };
}
function aI(e) {
  typeof e == 'function' ? (e = iI(e)) : (e = $x(e));
  for (var t = this._groups, n = t.length, r = [], i = [], u = 0; u < n; ++u)
    for (var l = t[u], c = l.length, f, p = 0; p < c; ++p)
      (f = l[p]) && (r.push(e.call(f, f.__data__, p, l)), i.push(f));
  return new Dn(r, i);
}
function zx(e) {
  return function () {
    return this.matches(e);
  };
}
function Ux(e) {
  return function (t) {
    return t.matches(e);
  };
}
var uI = Array.prototype.find;
function lI(e) {
  return function () {
    return uI.call(this.children, e);
  };
}
function sI() {
  return this.firstElementChild;
}
function cI(e) {
  return this.select(e == null ? sI : lI(typeof e == 'function' ? e : Ux(e)));
}
var fI = Array.prototype.filter;
function dI() {
  return Array.from(this.children);
}
function pI(e) {
  return function () {
    return fI.call(this.children, e);
  };
}
function hI(e) {
  return this.selectAll(e == null ? dI : pI(typeof e == 'function' ? e : Ux(e)));
}
function vI(e) {
  typeof e != 'function' && (e = zx(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var u = t[i], l = u.length, c = (r[i] = []), f, p = 0; p < l; ++p)
      (f = u[p]) && e.call(f, f.__data__, p, u) && c.push(f);
  return new Dn(r, this._parents);
}
function jx(e) {
  return new Array(e.length);
}
function gI() {
  return new Dn(this._enter || this._groups.map(jx), this._parents);
}
function Fc(e, t) {
  (this.ownerDocument = e.ownerDocument),
    (this.namespaceURI = e.namespaceURI),
    (this._next = null),
    (this._parent = e),
    (this.__data__ = t);
}
Fc.prototype = {
  constructor: Fc,
  appendChild: function (e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function (e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function (e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function (e) {
    return this._parent.querySelectorAll(e);
  },
};
function mI(e) {
  return function () {
    return e;
  };
}
function yI(e, t, n, r, i, u) {
  for (var l = 0, c, f = t.length, p = u.length; l < p; ++l)
    (c = t[l]) ? ((c.__data__ = u[l]), (r[l] = c)) : (n[l] = new Fc(e, u[l]));
  for (; l < f; ++l) (c = t[l]) && (i[l] = c);
}
function wI(e, t, n, r, i, u, l) {
  var c,
    f,
    p = new Map(),
    h = t.length,
    x = u.length,
    S = new Array(h),
    b;
  for (c = 0; c < h; ++c)
    (f = t[c]) &&
      ((S[c] = b = l.call(f, f.__data__, c, t) + ''), p.has(b) ? (i[c] = f) : p.set(b, f));
  for (c = 0; c < x; ++c)
    (b = l.call(e, u[c], c, u) + ''),
      (f = p.get(b)) ? ((r[c] = f), (f.__data__ = u[c]), p.delete(b)) : (n[c] = new Fc(e, u[c]));
  for (c = 0; c < h; ++c) (f = t[c]) && p.get(S[c]) === f && (i[c] = f);
}
function SI(e) {
  return e.__data__;
}
function EI(e, t) {
  if (!arguments.length) return Array.from(this, SI);
  var n = t ? wI : yI,
    r = this._parents,
    i = this._groups;
  typeof e != 'function' && (e = mI(e));
  for (var u = i.length, l = new Array(u), c = new Array(u), f = new Array(u), p = 0; p < u; ++p) {
    var h = r[p],
      x = i[p],
      S = x.length,
      b = _I(e.call(h, h && h.__data__, p, r)),
      E = b.length,
      _ = (c[p] = new Array(E)),
      m = (l[p] = new Array(E)),
      v = (f[p] = new Array(S));
    n(h, x, _, m, v, b, t);
    for (var w = 0, N = 0, g, M; w < E; ++w)
      if ((g = _[w])) {
        for (w >= N && (N = w + 1); !(M = m[N]) && ++N < E; );
        g._next = M || null;
      }
  }
  return (l = new Dn(l, r)), (l._enter = c), (l._exit = f), l;
}
function _I(e) {
  return typeof e == 'object' && 'length' in e ? e : Array.from(e);
}
function xI() {
  return new Dn(this._exit || this._groups.map(jx), this._parents);
}
function bI(e, t, n) {
  var r = this.enter(),
    i = this,
    u = this.exit();
  return (
    typeof e == 'function' ? ((r = e(r)), r && (r = r.selection())) : (r = r.append(e + '')),
    t != null && ((i = t(i)), i && (i = i.selection())),
    n == null ? u.remove() : n(u),
    r && i ? r.merge(i).order() : i
  );
}
function CI(e) {
  for (
    var t = e.selection ? e.selection() : e,
      n = this._groups,
      r = t._groups,
      i = n.length,
      u = r.length,
      l = Math.min(i, u),
      c = new Array(i),
      f = 0;
    f < l;
    ++f
  )
    for (var p = n[f], h = r[f], x = p.length, S = (c[f] = new Array(x)), b, E = 0; E < x; ++E)
      (b = p[E] || h[E]) && (S[E] = b);
  for (; f < i; ++f) c[f] = n[f];
  return new Dn(c, this._parents);
}
function OI() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], i = r.length - 1, u = r[i], l; --i >= 0; )
      (l = r[i]) &&
        (u && l.compareDocumentPosition(u) ^ 4 && u.parentNode.insertBefore(l, u), (u = l));
  return this;
}
function NI(e) {
  e || (e = TI);
  function t(x, S) {
    return x && S ? e(x.__data__, S.__data__) : !x - !S;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), u = 0; u < r; ++u) {
    for (var l = n[u], c = l.length, f = (i[u] = new Array(c)), p, h = 0; h < c; ++h)
      (p = l[h]) && (f[h] = p);
    f.sort(t);
  }
  return new Dn(i, this._parents).order();
}
function TI(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function MI() {
  var e = arguments[0];
  return (arguments[0] = this), e.apply(null, arguments), this;
}
function PI() {
  return Array.from(this);
}
function AI() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, u = r.length; i < u; ++i) {
      var l = r[i];
      if (l) return l;
    }
  return null;
}
function DI() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function kI() {
  return !this.node();
}
function RI(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var i = t[n], u = 0, l = i.length, c; u < l; ++u)
      (c = i[u]) && e.call(c, c.__data__, u, i);
  return this;
}
function II(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function LI(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function HI(e, t) {
  return function () {
    this.setAttribute(e, t);
  };
}
function BI(e, t) {
  return function () {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function FI(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function $I(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function zI(e, t) {
  var n = Of(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each(
    (t == null
      ? n.local
        ? LI
        : II
      : typeof t == 'function'
      ? n.local
        ? $I
        : FI
      : n.local
      ? BI
      : HI)(n, t),
  );
}
function Wx(e) {
  return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView;
}
function UI(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function jI(e, t, n) {
  return function () {
    this.style.setProperty(e, t, n);
  };
}
function WI(e, t, n) {
  return function () {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function YI(e, t, n) {
  return arguments.length > 1
    ? this.each((t == null ? UI : typeof t == 'function' ? WI : jI)(e, t, n == null ? '' : n))
    : Ta(this.node(), e);
}
function Ta(e, t) {
  return e.style.getPropertyValue(t) || Wx(e).getComputedStyle(e, null).getPropertyValue(t);
}
function VI(e) {
  return function () {
    delete this[e];
  };
}
function XI(e, t) {
  return function () {
    this[e] = t;
  };
}
function GI(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : (this[e] = n);
  };
}
function qI(e, t) {
  return arguments.length > 1
    ? this.each((t == null ? VI : typeof t == 'function' ? GI : XI)(e, t))
    : this.node()[e];
}
function Yx(e) {
  return e.trim().split(/^|\s+/);
}
function Rg(e) {
  return e.classList || new Vx(e);
}
function Vx(e) {
  (this._node = e), (this._names = Yx(e.getAttribute('class') || ''));
}
Vx.prototype = {
  add: function (e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute('class', this._names.join(' ')));
  },
  remove: function (e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute('class', this._names.join(' ')));
  },
  contains: function (e) {
    return this._names.indexOf(e) >= 0;
  },
};
function Xx(e, t) {
  for (var n = Rg(e), r = -1, i = t.length; ++r < i; ) n.add(t[r]);
}
function Gx(e, t) {
  for (var n = Rg(e), r = -1, i = t.length; ++r < i; ) n.remove(t[r]);
}
function ZI(e) {
  return function () {
    Xx(this, e);
  };
}
function KI(e) {
  return function () {
    Gx(this, e);
  };
}
function QI(e, t) {
  return function () {
    (t.apply(this, arguments) ? Xx : Gx)(this, e);
  };
}
function JI(e, t) {
  var n = Yx(e + '');
  if (arguments.length < 2) {
    for (var r = Rg(this.node()), i = -1, u = n.length; ++i < u; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == 'function' ? QI : t ? ZI : KI)(n, t));
}
function eL() {
  this.textContent = '';
}
function tL(e) {
  return function () {
    this.textContent = e;
  };
}
function nL(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.textContent = t == null ? '' : t;
  };
}
function rL(e) {
  return arguments.length
    ? this.each(e == null ? eL : (typeof e == 'function' ? nL : tL)(e))
    : this.node().textContent;
}
function oL() {
  this.innerHTML = '';
}
function iL(e) {
  return function () {
    this.innerHTML = e;
  };
}
function aL(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.innerHTML = t == null ? '' : t;
  };
}
function uL(e) {
  return arguments.length
    ? this.each(e == null ? oL : (typeof e == 'function' ? aL : iL)(e))
    : this.node().innerHTML;
}
function lL() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function sL() {
  return this.each(lL);
}
function cL() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function fL() {
  return this.each(cL);
}
function dL(e) {
  var t = typeof e == 'function' ? e : Fx(e);
  return this.select(function () {
    return this.appendChild(t.apply(this, arguments));
  });
}
function pL() {
  return null;
}
function hL(e, t) {
  var n = typeof e == 'function' ? e : Fx(e),
    r = t == null ? pL : typeof t == 'function' ? t : kg(t);
  return this.select(function () {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function vL() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function gL() {
  return this.each(vL);
}
function mL() {
  var e = this.cloneNode(!1),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function yL() {
  var e = this.cloneNode(!0),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function wL(e) {
  return this.select(e ? yL : mL);
}
function SL(e) {
  return arguments.length ? this.property('__data__', e) : this.node().__data__;
}
function EL(e) {
  return function (t) {
    e.call(this, t, this.__data__);
  };
}
function _L(e) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (t) {
      var n = '',
        r = t.indexOf('.');
      return r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))), { type: t, name: n };
    });
}
function xL(e) {
  return function () {
    var t = this.__on;
    if (!!t) {
      for (var n = 0, r = -1, i = t.length, u; n < i; ++n)
        (u = t[n]),
          (!e.type || u.type === e.type) && u.name === e.name
            ? this.removeEventListener(u.type, u.listener, u.options)
            : (t[++r] = u);
      ++r ? (t.length = r) : delete this.__on;
    }
  };
}
function bL(e, t, n) {
  return function () {
    var r = this.__on,
      i,
      u = EL(t);
    if (r) {
      for (var l = 0, c = r.length; l < c; ++l)
        if ((i = r[l]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options),
            this.addEventListener(i.type, (i.listener = u), (i.options = n)),
            (i.value = t);
          return;
        }
    }
    this.addEventListener(e.type, u, n),
      (i = { type: e.type, name: e.name, value: t, listener: u, options: n }),
      r ? r.push(i) : (this.__on = [i]);
  };
}
function CL(e, t, n) {
  var r = _L(e + ''),
    i,
    u = r.length,
    l;
  if (arguments.length < 2) {
    var c = this.node().__on;
    if (c) {
      for (var f = 0, p = c.length, h; f < p; ++f)
        for (i = 0, h = c[f]; i < u; ++i)
          if ((l = r[i]).type === h.type && l.name === h.name) return h.value;
    }
    return;
  }
  for (c = t ? bL : xL, i = 0; i < u; ++i) this.each(c(r[i], t, n));
  return this;
}
function qx(e, t, n) {
  var r = Wx(e),
    i = r.CustomEvent;
  typeof i == 'function'
    ? (i = new i(t, n))
    : ((i = r.document.createEvent('Event')),
      n
        ? (i.initEvent(t, n.bubbles, n.cancelable), (i.detail = n.detail))
        : i.initEvent(t, !1, !1)),
    e.dispatchEvent(i);
}
function OL(e, t) {
  return function () {
    return qx(this, e, t);
  };
}
function NL(e, t) {
  return function () {
    return qx(this, e, t.apply(this, arguments));
  };
}
function TL(e, t) {
  return this.each((typeof t == 'function' ? NL : OL)(e, t));
}
function* ML() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], i = 0, u = r.length, l; i < u; ++i) (l = r[i]) && (yield l);
}
var Zx = [null];
function Dn(e, t) {
  (this._groups = e), (this._parents = t);
}
function bl() {
  return new Dn([[document.documentElement]], Zx);
}
function PL() {
  return this;
}
Dn.prototype = bl.prototype = {
  constructor: Dn,
  select: nI,
  selectAll: aI,
  selectChild: cI,
  selectChildren: hI,
  filter: vI,
  data: EI,
  enter: gI,
  exit: xI,
  join: bI,
  merge: CI,
  selection: PL,
  order: OI,
  sort: NI,
  call: MI,
  nodes: PI,
  node: AI,
  size: DI,
  empty: kI,
  each: RI,
  attr: zI,
  style: YI,
  property: qI,
  classed: JI,
  text: rL,
  html: uL,
  raise: sL,
  lower: fL,
  append: dL,
  insert: hL,
  remove: gL,
  clone: wL,
  datum: SL,
  on: CL,
  dispatch: TL,
  [Symbol.iterator]: ML,
};
function Oo(e) {
  return typeof e == 'string'
    ? new Dn([[document.querySelector(e)]], [document.documentElement])
    : new Dn([[e]], Zx);
}
function AL(e) {
  let t;
  for (; (t = e.sourceEvent); ) e = t;
  return e;
}
function _o(e, t) {
  if (((e = AL(e)), t === void 0 && (t = e.currentTarget), t)) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return (
        (r.x = e.clientX),
        (r.y = e.clientY),
        (r = r.matrixTransform(t.getScreenCTM().inverse())),
        [r.x, r.y]
      );
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const Zh = { capture: !0, passive: !1 };
function Kh(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function DL(e) {
  var t = e.document.documentElement,
    n = Oo(e).on('dragstart.drag', Kh, Zh);
  'onselectstart' in t
    ? n.on('selectstart.drag', Kh, Zh)
    : ((t.__noselect = t.style.MozUserSelect), (t.style.MozUserSelect = 'none'));
}
function kL(e, t) {
  var n = e.document.documentElement,
    r = Oo(e).on('dragstart.drag', null);
  t &&
    (r.on('click.drag', Kh, Zh),
    setTimeout(function () {
      r.on('click.drag', null);
    }, 0)),
    'onselectstart' in n
      ? r.on('selectstart.drag', null)
      : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
}
function Ig(e, t, n) {
  (e.prototype = t.prototype = n), (n.constructor = e);
}
function Kx(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Cl() {}
var ol = 0.7,
  $c = 1 / ol,
  ya = '\\s*([+-]?\\d+)\\s*',
  il = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  Pr = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  RL = /^#([0-9a-f]{3,8})$/,
  IL = new RegExp('^rgb\\(' + [ya, ya, ya] + '\\)$'),
  LL = new RegExp('^rgb\\(' + [Pr, Pr, Pr] + '\\)$'),
  HL = new RegExp('^rgba\\(' + [ya, ya, ya, il] + '\\)$'),
  BL = new RegExp('^rgba\\(' + [Pr, Pr, Pr, il] + '\\)$'),
  FL = new RegExp('^hsl\\(' + [il, Pr, Pr] + '\\)$'),
  $L = new RegExp('^hsla\\(' + [il, Pr, Pr, il] + '\\)$'),
  gw = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Ig(Cl, al, {
  copy: function (e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable: function () {
    return this.rgb().displayable();
  },
  hex: mw,
  formatHex: mw,
  formatHsl: zL,
  formatRgb: yw,
  toString: yw,
});
function mw() {
  return this.rgb().formatHex();
}
function zL() {
  return Qx(this).formatHsl();
}
function yw() {
  return this.rgb().formatRgb();
}
function al(e) {
  var t, n;
  return (
    (e = (e + '').trim().toLowerCase()),
    (t = RL.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? ww(t)
          : n === 3
          ? new Mn(
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              ((t & 15) << 4) | (t & 15),
              1,
            )
          : n === 8
          ? As((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (t & 255) / 255)
          : n === 4
          ? As(
              ((t >> 12) & 15) | ((t >> 8) & 240),
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              (((t & 15) << 4) | (t & 15)) / 255,
            )
          : null)
      : (t = IL.exec(e))
      ? new Mn(t[1], t[2], t[3], 1)
      : (t = LL.exec(e))
      ? new Mn((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
      : (t = HL.exec(e))
      ? As(t[1], t[2], t[3], t[4])
      : (t = BL.exec(e))
      ? As((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
      : (t = FL.exec(e))
      ? _w(t[1], t[2] / 100, t[3] / 100, 1)
      : (t = $L.exec(e))
      ? _w(t[1], t[2] / 100, t[3] / 100, t[4])
      : gw.hasOwnProperty(e)
      ? ww(gw[e])
      : e === 'transparent'
      ? new Mn(NaN, NaN, NaN, 0)
      : null
  );
}
function ww(e) {
  return new Mn((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function As(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Mn(e, t, n, r);
}
function UL(e) {
  return (
    e instanceof Cl || (e = al(e)), e ? ((e = e.rgb()), new Mn(e.r, e.g, e.b, e.opacity)) : new Mn()
  );
}
function Qh(e, t, n, r) {
  return arguments.length === 1 ? UL(e) : new Mn(e, t, n, r == null ? 1 : r);
}
function Mn(e, t, n, r) {
  (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
}
Ig(
  Mn,
  Qh,
  Kx(Cl, {
    brighter: function (e) {
      return (
        (e = e == null ? $c : Math.pow($c, e)),
        new Mn(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker: function (e) {
      return (
        (e = e == null ? ol : Math.pow(ol, e)),
        new Mn(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb: function () {
      return this;
    },
    displayable: function () {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: Sw,
    formatHex: Sw,
    formatRgb: Ew,
    toString: Ew,
  }),
);
function Sw() {
  return '#' + Np(this.r) + Np(this.g) + Np(this.b);
}
function Ew() {
  var e = this.opacity;
  return (
    (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))),
    (e === 1 ? 'rgb(' : 'rgba(') +
      Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
      ', ' +
      Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
      ', ' +
      Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
      (e === 1 ? ')' : ', ' + e + ')')
  );
}
function Np(e) {
  return (e = Math.max(0, Math.min(255, Math.round(e) || 0))), (e < 16 ? '0' : '') + e.toString(16);
}
function _w(e, t, n, r) {
  return (
    r <= 0 ? (e = t = n = NaN) : n <= 0 || n >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN),
    new br(e, t, n, r)
  );
}
function Qx(e) {
  if (e instanceof br) return new br(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Cl || (e = al(e)), !e)) return new br();
  if (e instanceof br) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    i = Math.min(t, n, r),
    u = Math.max(t, n, r),
    l = NaN,
    c = u - i,
    f = (u + i) / 2;
  return (
    c
      ? (t === u
          ? (l = (n - r) / c + (n < r) * 6)
          : n === u
          ? (l = (r - t) / c + 2)
          : (l = (t - n) / c + 4),
        (c /= f < 0.5 ? u + i : 2 - u - i),
        (l *= 60))
      : (c = f > 0 && f < 1 ? 0 : l),
    new br(l, c, f, e.opacity)
  );
}
function jL(e, t, n, r) {
  return arguments.length === 1 ? Qx(e) : new br(e, t, n, r == null ? 1 : r);
}
function br(e, t, n, r) {
  (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
}
Ig(
  br,
  jL,
  Kx(Cl, {
    brighter: function (e) {
      return (
        (e = e == null ? $c : Math.pow($c, e)), new br(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker: function (e) {
      return (
        (e = e == null ? ol : Math.pow(ol, e)), new br(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb: function () {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new Mn(
        Tp(e >= 240 ? e - 240 : e + 120, i, r),
        Tp(e, i, r),
        Tp(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity,
      );
    },
    displayable: function () {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl: function () {
      var e = this.opacity;
      return (
        (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))),
        (e === 1 ? 'hsl(' : 'hsla(') +
          (this.h || 0) +
          ', ' +
          (this.s || 0) * 100 +
          '%, ' +
          (this.l || 0) * 100 +
          '%' +
          (e === 1 ? ')' : ', ' + e + ')')
      );
    },
  }),
);
function Tp(e, t, n) {
  return (
    (e < 60 ? t + ((n - t) * e) / 60 : e < 180 ? n : e < 240 ? t + ((n - t) * (240 - e)) / 60 : t) *
    255
  );
}
var Jx = e => () => e;
function WL(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function YL(e, t, n) {
  return (
    (e = Math.pow(e, n)),
    (t = Math.pow(t, n) - e),
    (n = 1 / n),
    function (r) {
      return Math.pow(e + r * t, n);
    }
  );
}
function VL(e) {
  return (e = +e) == 1
    ? eb
    : function (t, n) {
        return n - t ? YL(t, n, e) : Jx(isNaN(t) ? n : t);
      };
}
function eb(e, t) {
  var n = t - e;
  return n ? WL(e, n) : Jx(isNaN(e) ? t : e);
}
var xw = (function e(t) {
  var n = VL(t);
  function r(i, u) {
    var l = n((i = Qh(i)).r, (u = Qh(u)).r),
      c = n(i.g, u.g),
      f = n(i.b, u.b),
      p = eb(i.opacity, u.opacity);
    return function (h) {
      return (i.r = l(h)), (i.g = c(h)), (i.b = f(h)), (i.opacity = p(h)), i + '';
    };
  }
  return (r.gamma = e), r;
})(1);
function bo(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
var Jh = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Mp = new RegExp(Jh.source, 'g');
function XL(e) {
  return function () {
    return e;
  };
}
function GL(e) {
  return function (t) {
    return e(t) + '';
  };
}
function qL(e, t) {
  var n = (Jh.lastIndex = Mp.lastIndex = 0),
    r,
    i,
    u,
    l = -1,
    c = [],
    f = [];
  for (e = e + '', t = t + ''; (r = Jh.exec(e)) && (i = Mp.exec(t)); )
    (u = i.index) > n && ((u = t.slice(n, u)), c[l] ? (c[l] += u) : (c[++l] = u)),
      (r = r[0]) === (i = i[0])
        ? c[l]
          ? (c[l] += i)
          : (c[++l] = i)
        : ((c[++l] = null), f.push({ i: l, x: bo(r, i) })),
      (n = Mp.lastIndex);
  return (
    n < t.length && ((u = t.slice(n)), c[l] ? (c[l] += u) : (c[++l] = u)),
    c.length < 2
      ? f[0]
        ? GL(f[0].x)
        : XL(t)
      : ((t = f.length),
        function (p) {
          for (var h = 0, x; h < t; ++h) c[(x = f[h]).i] = x.x(p);
          return c.join('');
        })
  );
}
var bw = 180 / Math.PI,
  ev = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function tb(e, t, n, r, i, u) {
  var l, c, f;
  return (
    (l = Math.sqrt(e * e + t * t)) && ((e /= l), (t /= l)),
    (f = e * n + t * r) && ((n -= e * f), (r -= t * f)),
    (c = Math.sqrt(n * n + r * r)) && ((n /= c), (r /= c), (f /= c)),
    e * r < t * n && ((e = -e), (t = -t), (f = -f), (l = -l)),
    {
      translateX: i,
      translateY: u,
      rotate: Math.atan2(t, e) * bw,
      skewX: Math.atan(f) * bw,
      scaleX: l,
      scaleY: c,
    }
  );
}
var Ds;
function ZL(e) {
  const t = new (typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix)(e + '');
  return t.isIdentity ? ev : tb(t.a, t.b, t.c, t.d, t.e, t.f);
}
function KL(e) {
  return e == null ||
    (Ds || (Ds = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
    Ds.setAttribute('transform', e),
    !(e = Ds.transform.baseVal.consolidate()))
    ? ev
    : ((e = e.matrix), tb(e.a, e.b, e.c, e.d, e.e, e.f));
}
function nb(e, t, n, r) {
  function i(p) {
    return p.length ? p.pop() + ' ' : '';
  }
  function u(p, h, x, S, b, E) {
    if (p !== x || h !== S) {
      var _ = b.push('translate(', null, t, null, n);
      E.push({ i: _ - 4, x: bo(p, x) }, { i: _ - 2, x: bo(h, S) });
    } else (x || S) && b.push('translate(' + x + t + S + n);
  }
  function l(p, h, x, S) {
    p !== h
      ? (p - h > 180 ? (h += 360) : h - p > 180 && (p += 360),
        S.push({ i: x.push(i(x) + 'rotate(', null, r) - 2, x: bo(p, h) }))
      : h && x.push(i(x) + 'rotate(' + h + r);
  }
  function c(p, h, x, S) {
    p !== h
      ? S.push({ i: x.push(i(x) + 'skewX(', null, r) - 2, x: bo(p, h) })
      : h && x.push(i(x) + 'skewX(' + h + r);
  }
  function f(p, h, x, S, b, E) {
    if (p !== x || h !== S) {
      var _ = b.push(i(b) + 'scale(', null, ',', null, ')');
      E.push({ i: _ - 4, x: bo(p, x) }, { i: _ - 2, x: bo(h, S) });
    } else (x !== 1 || S !== 1) && b.push(i(b) + 'scale(' + x + ',' + S + ')');
  }
  return function (p, h) {
    var x = [],
      S = [];
    return (
      (p = e(p)),
      (h = e(h)),
      u(p.translateX, p.translateY, h.translateX, h.translateY, x, S),
      l(p.rotate, h.rotate, x, S),
      c(p.skewX, h.skewX, x, S),
      f(p.scaleX, p.scaleY, h.scaleX, h.scaleY, x, S),
      (p = h = null),
      function (b) {
        for (var E = -1, _ = S.length, m; ++E < _; ) x[(m = S[E]).i] = m.x(b);
        return x.join('');
      }
    );
  };
}
var QL = nb(ZL, 'px, ', 'px)', 'deg)'),
  JL = nb(KL, ', ', ')', ')'),
  e5 = 1e-12;
function Cw(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function t5(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function n5(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var r5 = (function e(t, n, r) {
    function i(u, l) {
      var c = u[0],
        f = u[1],
        p = u[2],
        h = l[0],
        x = l[1],
        S = l[2],
        b = h - c,
        E = x - f,
        _ = b * b + E * E,
        m,
        v;
      if (_ < e5)
        (v = Math.log(S / p) / t),
          (m = function (H) {
            return [c + H * b, f + H * E, p * Math.exp(t * H * v)];
          });
      else {
        var w = Math.sqrt(_),
          N = (S * S - p * p + r * _) / (2 * p * n * w),
          g = (S * S - p * p - r * _) / (2 * S * n * w),
          M = Math.log(Math.sqrt(N * N + 1) - N),
          P = Math.log(Math.sqrt(g * g + 1) - g);
        (v = (P - M) / t),
          (m = function (H) {
            var F = H * v,
              U = Cw(M),
              V = (p / (n * w)) * (U * n5(t * F + M) - t5(M));
            return [c + V * b, f + V * E, (p * U) / Cw(t * F + M)];
          });
      }
      return (m.duration = (v * 1e3 * t) / Math.SQRT2), m;
    }
    return (
      (i.rho = function (u) {
        var l = Math.max(0.001, +u),
          c = l * l,
          f = c * c;
        return e(l, c, f);
      }),
      i
    );
  })(Math.SQRT2, 2, 4),
  Ma = 0,
  Ou = 0,
  gu = 0,
  rb = 1e3,
  zc,
  Nu,
  Uc = 0,
  Ei = 0,
  Nf = 0,
  ul = typeof performance == 'object' && performance.now ? performance : Date,
  ob =
    typeof window == 'object' && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (e) {
          setTimeout(e, 17);
        };
function Lg() {
  return Ei || (ob(o5), (Ei = ul.now() + Nf));
}
function o5() {
  Ei = 0;
}
function jc() {
  this._call = this._time = this._next = null;
}
jc.prototype = ib.prototype = {
  constructor: jc,
  restart: function (e, t, n) {
    if (typeof e != 'function') throw new TypeError('callback is not a function');
    (n = (n == null ? Lg() : +n) + (t == null ? 0 : +t)),
      !this._next && Nu !== this && (Nu ? (Nu._next = this) : (zc = this), (Nu = this)),
      (this._call = e),
      (this._time = n),
      tv();
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), tv());
  },
};
function ib(e, t, n) {
  var r = new jc();
  return r.restart(e, t, n), r;
}
function i5() {
  Lg(), ++Ma;
  for (var e = zc, t; e; ) (t = Ei - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
  --Ma;
}
function Ow() {
  (Ei = (Uc = ul.now()) + Nf), (Ma = Ou = 0);
  try {
    i5();
  } finally {
    (Ma = 0), u5(), (Ei = 0);
  }
}
function a5() {
  var e = ul.now(),
    t = e - Uc;
  t > rb && ((Nf -= t), (Uc = e));
}
function u5() {
  for (var e, t = zc, n, r = 1 / 0; t; )
    t._call
      ? (r > t._time && (r = t._time), (e = t), (t = t._next))
      : ((n = t._next), (t._next = null), (t = e ? (e._next = n) : (zc = n)));
  (Nu = e), tv(r);
}
function tv(e) {
  if (!Ma) {
    Ou && (Ou = clearTimeout(Ou));
    var t = e - Ei;
    t > 24
      ? (e < 1 / 0 && (Ou = setTimeout(Ow, e - ul.now() - Nf)), gu && (gu = clearInterval(gu)))
      : (gu || ((Uc = ul.now()), (gu = setInterval(a5, rb))), (Ma = 1), ob(Ow));
  }
}
function Nw(e, t, n) {
  var r = new jc();
  return (
    (t = t == null ? 0 : +t),
    r.restart(
      i => {
        r.stop(), e(i + t);
      },
      t,
      n,
    ),
    r
  );
}
var l5 = Dg('start', 'end', 'cancel', 'interrupt'),
  s5 = [],
  ab = 0,
  Tw = 1,
  nv = 2,
  oc = 3,
  Mw = 4,
  rv = 5,
  ic = 6;
function Tf(e, t, n, r, i, u) {
  var l = e.__transition;
  if (!l) e.__transition = {};
  else if (n in l) return;
  c5(e, n, {
    name: t,
    index: r,
    group: i,
    on: l5,
    tween: s5,
    time: u.time,
    delay: u.delay,
    duration: u.duration,
    ease: u.ease,
    timer: null,
    state: ab,
  });
}
function Hg(e, t) {
  var n = vr(e, t);
  if (n.state > ab) throw new Error('too late; already scheduled');
  return n;
}
function Hr(e, t) {
  var n = vr(e, t);
  if (n.state > oc) throw new Error('too late; already running');
  return n;
}
function vr(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error('transition not found');
  return n;
}
function c5(e, t, n) {
  var r = e.__transition,
    i;
  (r[t] = n), (n.timer = ib(u, 0, n.time));
  function u(p) {
    (n.state = Tw), n.timer.restart(l, n.delay, n.time), n.delay <= p && l(p - n.delay);
  }
  function l(p) {
    var h, x, S, b;
    if (n.state !== Tw) return f();
    for (h in r)
      if (((b = r[h]), b.name === n.name)) {
        if (b.state === oc) return Nw(l);
        b.state === Mw
          ? ((b.state = ic),
            b.timer.stop(),
            b.on.call('interrupt', e, e.__data__, b.index, b.group),
            delete r[h])
          : +h < t &&
            ((b.state = ic),
            b.timer.stop(),
            b.on.call('cancel', e, e.__data__, b.index, b.group),
            delete r[h]);
      }
    if (
      (Nw(function () {
        n.state === oc && ((n.state = Mw), n.timer.restart(c, n.delay, n.time), c(p));
      }),
      (n.state = nv),
      n.on.call('start', e, e.__data__, n.index, n.group),
      n.state === nv)
    ) {
      for (n.state = oc, i = new Array((S = n.tween.length)), h = 0, x = -1; h < S; ++h)
        (b = n.tween[h].value.call(e, e.__data__, n.index, n.group)) && (i[++x] = b);
      i.length = x + 1;
    }
  }
  function c(p) {
    for (
      var h =
          p < n.duration
            ? n.ease.call(null, p / n.duration)
            : (n.timer.restart(f), (n.state = rv), 1),
        x = -1,
        S = i.length;
      ++x < S;

    )
      i[x].call(e, h);
    n.state === rv && (n.on.call('end', e, e.__data__, n.index, n.group), f());
  }
  function f() {
    (n.state = ic), n.timer.stop(), delete r[t];
    for (var p in r) return;
    delete e.__transition;
  }
}
function ac(e, t) {
  var n = e.__transition,
    r,
    i,
    u = !0,
    l;
  if (!!n) {
    t = t == null ? null : t + '';
    for (l in n) {
      if ((r = n[l]).name !== t) {
        u = !1;
        continue;
      }
      (i = r.state > nv && r.state < rv),
        (r.state = ic),
        r.timer.stop(),
        r.on.call(i ? 'interrupt' : 'cancel', e, e.__data__, r.index, r.group),
        delete n[l];
    }
    u && delete e.__transition;
  }
}
function f5(e) {
  return this.each(function () {
    ac(this, e);
  });
}
function d5(e, t) {
  var n, r;
  return function () {
    var i = Hr(this, e),
      u = i.tween;
    if (u !== n) {
      r = n = u;
      for (var l = 0, c = r.length; l < c; ++l)
        if (r[l].name === t) {
          (r = r.slice()), r.splice(l, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function p5(e, t, n) {
  var r, i;
  if (typeof n != 'function') throw new Error();
  return function () {
    var u = Hr(this, e),
      l = u.tween;
    if (l !== r) {
      i = (r = l).slice();
      for (var c = { name: t, value: n }, f = 0, p = i.length; f < p; ++f)
        if (i[f].name === t) {
          i[f] = c;
          break;
        }
      f === p && i.push(c);
    }
    u.tween = i;
  };
}
function h5(e, t) {
  var n = this._id;
  if (((e += ''), arguments.length < 2)) {
    for (var r = vr(this.node(), n).tween, i = 0, u = r.length, l; i < u; ++i)
      if ((l = r[i]).name === e) return l.value;
    return null;
  }
  return this.each((t == null ? d5 : p5)(n, e, t));
}
function Bg(e, t, n) {
  var r = e._id;
  return (
    e.each(function () {
      var i = Hr(this, r);
      (i.value || (i.value = {}))[t] = n.apply(this, arguments);
    }),
    function (i) {
      return vr(i, r).value[t];
    }
  );
}
function ub(e, t) {
  var n;
  return (typeof t == 'number' ? bo : t instanceof al ? xw : (n = al(t)) ? ((t = n), xw) : qL)(
    e,
    t,
  );
}
function v5(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function g5(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function m5(e, t, n) {
  var r,
    i = n + '',
    u;
  return function () {
    var l = this.getAttribute(e);
    return l === i ? null : l === r ? u : (u = t((r = l), n));
  };
}
function y5(e, t, n) {
  var r,
    i = n + '',
    u;
  return function () {
    var l = this.getAttributeNS(e.space, e.local);
    return l === i ? null : l === r ? u : (u = t((r = l), n));
  };
}
function w5(e, t, n) {
  var r, i, u;
  return function () {
    var l,
      c = n(this),
      f;
    return c == null
      ? void this.removeAttribute(e)
      : ((l = this.getAttribute(e)),
        (f = c + ''),
        l === f ? null : l === r && f === i ? u : ((i = f), (u = t((r = l), c))));
  };
}
function S5(e, t, n) {
  var r, i, u;
  return function () {
    var l,
      c = n(this),
      f;
    return c == null
      ? void this.removeAttributeNS(e.space, e.local)
      : ((l = this.getAttributeNS(e.space, e.local)),
        (f = c + ''),
        l === f ? null : l === r && f === i ? u : ((i = f), (u = t((r = l), c))));
  };
}
function E5(e, t) {
  var n = Of(e),
    r = n === 'transform' ? JL : ub;
  return this.attrTween(
    e,
    typeof t == 'function'
      ? (n.local ? S5 : w5)(n, r, Bg(this, 'attr.' + e, t))
      : t == null
      ? (n.local ? g5 : v5)(n)
      : (n.local ? y5 : m5)(n, r, t),
  );
}
function _5(e, t) {
  return function (n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function x5(e, t) {
  return function (n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function b5(e, t) {
  var n, r;
  function i() {
    var u = t.apply(this, arguments);
    return u !== r && (n = (r = u) && x5(e, u)), n;
  }
  return (i._value = t), i;
}
function C5(e, t) {
  var n, r;
  function i() {
    var u = t.apply(this, arguments);
    return u !== r && (n = (r = u) && _5(e, u)), n;
  }
  return (i._value = t), i;
}
function O5(e, t) {
  var n = 'attr.' + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != 'function') throw new Error();
  var r = Of(e);
  return this.tween(n, (r.local ? b5 : C5)(r, t));
}
function N5(e, t) {
  return function () {
    Hg(this, e).delay = +t.apply(this, arguments);
  };
}
function T5(e, t) {
  return (
    (t = +t),
    function () {
      Hg(this, e).delay = t;
    }
  );
}
function M5(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == 'function' ? N5 : T5)(t, e))
    : vr(this.node(), t).delay;
}
function P5(e, t) {
  return function () {
    Hr(this, e).duration = +t.apply(this, arguments);
  };
}
function A5(e, t) {
  return (
    (t = +t),
    function () {
      Hr(this, e).duration = t;
    }
  );
}
function D5(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == 'function' ? P5 : A5)(t, e))
    : vr(this.node(), t).duration;
}
function k5(e, t) {
  if (typeof t != 'function') throw new Error();
  return function () {
    Hr(this, e).ease = t;
  };
}
function R5(e) {
  var t = this._id;
  return arguments.length ? this.each(k5(t, e)) : vr(this.node(), t).ease;
}
function I5(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    if (typeof n != 'function') throw new Error();
    Hr(this, e).ease = n;
  };
}
function L5(e) {
  if (typeof e != 'function') throw new Error();
  return this.each(I5(this._id, e));
}
function H5(e) {
  typeof e != 'function' && (e = zx(e));
  for (var t = this._groups, n = t.length, r = new Array(n), i = 0; i < n; ++i)
    for (var u = t[i], l = u.length, c = (r[i] = []), f, p = 0; p < l; ++p)
      (f = u[p]) && e.call(f, f.__data__, p, u) && c.push(f);
  return new ao(r, this._parents, this._name, this._id);
}
function B5(e) {
  if (e._id !== this._id) throw new Error();
  for (
    var t = this._groups,
      n = e._groups,
      r = t.length,
      i = n.length,
      u = Math.min(r, i),
      l = new Array(r),
      c = 0;
    c < u;
    ++c
  )
    for (var f = t[c], p = n[c], h = f.length, x = (l[c] = new Array(h)), S, b = 0; b < h; ++b)
      (S = f[b] || p[b]) && (x[b] = S);
  for (; c < r; ++c) l[c] = t[c];
  return new ao(l, this._parents, this._name, this._id);
}
function F5(e) {
  return (e + '')
    .trim()
    .split(/^|\s+/)
    .every(function (t) {
      var n = t.indexOf('.');
      return n >= 0 && (t = t.slice(0, n)), !t || t === 'start';
    });
}
function $5(e, t, n) {
  var r,
    i,
    u = F5(t) ? Hg : Hr;
  return function () {
    var l = u(this, e),
      c = l.on;
    c !== r && (i = (r = c).copy()).on(t, n), (l.on = i);
  };
}
function z5(e, t) {
  var n = this._id;
  return arguments.length < 2 ? vr(this.node(), n).on.on(e) : this.each($5(n, e, t));
}
function U5(e) {
  return function () {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function j5() {
  return this.on('end.remove', U5(this._id));
}
function W5(e) {
  var t = this._name,
    n = this._id;
  typeof e != 'function' && (e = kg(e));
  for (var r = this._groups, i = r.length, u = new Array(i), l = 0; l < i; ++l)
    for (var c = r[l], f = c.length, p = (u[l] = new Array(f)), h, x, S = 0; S < f; ++S)
      (h = c[S]) &&
        (x = e.call(h, h.__data__, S, c)) &&
        ('__data__' in h && (x.__data__ = h.__data__), (p[S] = x), Tf(p[S], t, n, S, p, vr(h, n)));
  return new ao(u, this._parents, t, n);
}
function Y5(e) {
  var t = this._name,
    n = this._id;
  typeof e != 'function' && (e = $x(e));
  for (var r = this._groups, i = r.length, u = [], l = [], c = 0; c < i; ++c)
    for (var f = r[c], p = f.length, h, x = 0; x < p; ++x)
      if ((h = f[x])) {
        for (var S = e.call(h, h.__data__, x, f), b, E = vr(h, n), _ = 0, m = S.length; _ < m; ++_)
          (b = S[_]) && Tf(b, t, n, _, S, E);
        u.push(S), l.push(h);
      }
  return new ao(u, l, t, n);
}
var V5 = bl.prototype.constructor;
function X5() {
  return new V5(this._groups, this._parents);
}
function G5(e, t) {
  var n, r, i;
  return function () {
    var u = Ta(this, e),
      l = (this.style.removeProperty(e), Ta(this, e));
    return u === l ? null : u === n && l === r ? i : (i = t((n = u), (r = l)));
  };
}
function lb(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function q5(e, t, n) {
  var r,
    i = n + '',
    u;
  return function () {
    var l = Ta(this, e);
    return l === i ? null : l === r ? u : (u = t((r = l), n));
  };
}
function Z5(e, t, n) {
  var r, i, u;
  return function () {
    var l = Ta(this, e),
      c = n(this),
      f = c + '';
    return (
      c == null && (f = c = (this.style.removeProperty(e), Ta(this, e))),
      l === f ? null : l === r && f === i ? u : ((i = f), (u = t((r = l), c)))
    );
  };
}
function K5(e, t) {
  var n,
    r,
    i,
    u = 'style.' + t,
    l = 'end.' + u,
    c;
  return function () {
    var f = Hr(this, e),
      p = f.on,
      h = f.value[u] == null ? c || (c = lb(t)) : void 0;
    (p !== n || i !== h) && (r = (n = p).copy()).on(l, (i = h)), (f.on = r);
  };
}
function Q5(e, t, n) {
  var r = (e += '') == 'transform' ? QL : ub;
  return t == null
    ? this.styleTween(e, G5(e, r)).on('end.style.' + e, lb(e))
    : typeof t == 'function'
    ? this.styleTween(e, Z5(e, r, Bg(this, 'style.' + e, t))).each(K5(this._id, e))
    : this.styleTween(e, q5(e, r, t), n).on('end.style.' + e, null);
}
function J5(e, t, n) {
  return function (r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function eH(e, t, n) {
  var r, i;
  function u() {
    var l = t.apply(this, arguments);
    return l !== i && (r = (i = l) && J5(e, l, n)), r;
  }
  return (u._value = t), u;
}
function tH(e, t, n) {
  var r = 'style.' + (e += '');
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != 'function') throw new Error();
  return this.tween(r, eH(e, t, n == null ? '' : n));
}
function nH(e) {
  return function () {
    this.textContent = e;
  };
}
function rH(e) {
  return function () {
    var t = e(this);
    this.textContent = t == null ? '' : t;
  };
}
function oH(e) {
  return this.tween(
    'text',
    typeof e == 'function' ? rH(Bg(this, 'text', e)) : nH(e == null ? '' : e + ''),
  );
}
function iH(e) {
  return function (t) {
    this.textContent = e.call(this, t);
  };
}
function aH(e) {
  var t, n;
  function r() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && iH(i)), t;
  }
  return (r._value = e), r;
}
function uH(e) {
  var t = 'text';
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != 'function') throw new Error();
  return this.tween(t, aH(e));
}
function lH() {
  for (
    var e = this._name, t = this._id, n = sb(), r = this._groups, i = r.length, u = 0;
    u < i;
    ++u
  )
    for (var l = r[u], c = l.length, f, p = 0; p < c; ++p)
      if ((f = l[p])) {
        var h = vr(f, t);
        Tf(f, e, n, p, l, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease,
        });
      }
  return new ao(r, this._parents, e, n);
}
function sH() {
  var e,
    t,
    n = this,
    r = n._id,
    i = n.size();
  return new Promise(function (u, l) {
    var c = { value: l },
      f = {
        value: function () {
          --i === 0 && u();
        },
      };
    n.each(function () {
      var p = Hr(this, r),
        h = p.on;
      h !== e && ((t = (e = h).copy()), t._.cancel.push(c), t._.interrupt.push(c), t._.end.push(f)),
        (p.on = t);
    }),
      i === 0 && u();
  });
}
var cH = 0;
function ao(e, t, n, r) {
  (this._groups = e), (this._parents = t), (this._name = n), (this._id = r);
}
function sb() {
  return ++cH;
}
var Zr = bl.prototype;
ao.prototype = {
  constructor: ao,
  select: W5,
  selectAll: Y5,
  selectChild: Zr.selectChild,
  selectChildren: Zr.selectChildren,
  filter: H5,
  merge: B5,
  selection: X5,
  transition: lH,
  call: Zr.call,
  nodes: Zr.nodes,
  node: Zr.node,
  size: Zr.size,
  empty: Zr.empty,
  each: Zr.each,
  on: z5,
  attr: E5,
  attrTween: O5,
  style: Q5,
  styleTween: tH,
  text: oH,
  textTween: uH,
  remove: j5,
  tween: h5,
  delay: M5,
  duration: D5,
  ease: R5,
  easeVarying: L5,
  end: sH,
  [Symbol.iterator]: Zr[Symbol.iterator],
};
function fH(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var dH = { time: null, delay: 0, duration: 250, ease: fH };
function pH(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
  return n;
}
function hH(e) {
  var t, n;
  e instanceof ao
    ? ((t = e._id), (e = e._name))
    : ((t = sb()), ((n = dH).time = Lg()), (e = e == null ? null : e + ''));
  for (var r = this._groups, i = r.length, u = 0; u < i; ++u)
    for (var l = r[u], c = l.length, f, p = 0; p < c; ++p)
      (f = l[p]) && Tf(f, e, t, p, l, n || pH(f, t));
  return new ao(r, this._parents, e, t);
}
bl.prototype.interrupt = f5;
bl.prototype.transition = hH;
var ks = e => () => e;
function vH(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i },
  });
}
function Do(e, t, n) {
  (this.k = e), (this.x = t), (this.y = n);
}
Do.prototype = {
  constructor: Do,
  scale: function (e) {
    return e === 1 ? this : new Do(this.k * e, this.x, this.y);
  },
  translate: function (e, t) {
    return (e === 0) & (t === 0) ? this : new Do(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function (e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function (e) {
    return e * this.k + this.x;
  },
  applyY: function (e) {
    return e * this.k + this.y;
  },
  invert: function (e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function (e) {
    return (e - this.x) / this.k;
  },
  invertY: function (e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function (e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function (e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function () {
    return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
  },
};
var vi = new Do(1, 0, 0);
function Pp(e) {
  e.stopImmediatePropagation();
}
function mu(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function gH(e) {
  return (!e.ctrlKey || e.type === 'wheel') && !e.button;
}
function mH() {
  var e = this;
  return e instanceof SVGElement
    ? ((e = e.ownerSVGElement || e),
      e.hasAttribute('viewBox')
        ? ((e = e.viewBox.baseVal),
          [
            [e.x, e.y],
            [e.x + e.width, e.y + e.height],
          ])
        : [
            [0, 0],
            [e.width.baseVal.value, e.height.baseVal.value],
          ])
    : [
        [0, 0],
        [e.clientWidth, e.clientHeight],
      ];
}
function Pw() {
  return this.__zoom || vi;
}
function yH(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * (e.ctrlKey ? 10 : 1);
}
function wH() {
  return navigator.maxTouchPoints || 'ontouchstart' in this;
}
function SH(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0],
    i = e.invertX(t[1][0]) - n[1][0],
    u = e.invertY(t[0][1]) - n[0][1],
    l = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    l > u ? (u + l) / 2 : Math.min(0, u) || Math.max(0, l),
  );
}
function EH() {
  var e = gH,
    t = mH,
    n = SH,
    r = yH,
    i = wH,
    u = [0, 1 / 0],
    l = [
      [-1 / 0, -1 / 0],
      [1 / 0, 1 / 0],
    ],
    c = 250,
    f = r5,
    p = Dg('start', 'zoom', 'end'),
    h,
    x,
    S,
    b = 500,
    E = 150,
    _ = 0,
    m = 10;
  function v(R) {
    R.property('__zoom', Pw)
      .on('wheel.zoom', F, { passive: !1 })
      .on('mousedown.zoom', U)
      .on('dblclick.zoom', V)
      .filter(i)
      .on('touchstart.zoom', fe)
      .on('touchmove.zoom', ae)
      .on('touchend.zoom touchcancel.zoom', he)
      .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
  }
  (v.transform = function (R, Y, W, X) {
    var ne = R.selection ? R.selection() : R;
    ne.property('__zoom', Pw),
      R !== ne
        ? M(R, Y, W, X)
        : ne.interrupt().each(function () {
            P(this, arguments)
              .event(X)
              .start()
              .zoom(null, typeof Y == 'function' ? Y.apply(this, arguments) : Y)
              .end();
          });
  }),
    (v.scaleBy = function (R, Y, W, X) {
      v.scaleTo(
        R,
        function () {
          var ne = this.__zoom.k,
            ce = typeof Y == 'function' ? Y.apply(this, arguments) : Y;
          return ne * ce;
        },
        W,
        X,
      );
    }),
    (v.scaleTo = function (R, Y, W, X) {
      v.transform(
        R,
        function () {
          var ne = t.apply(this, arguments),
            ce = this.__zoom,
            ue = W == null ? g(ne) : typeof W == 'function' ? W.apply(this, arguments) : W,
            j = ce.invert(ue),
            k = typeof Y == 'function' ? Y.apply(this, arguments) : Y;
          return n(N(w(ce, k), ue, j), ne, l);
        },
        W,
        X,
      );
    }),
    (v.translateBy = function (R, Y, W, X) {
      v.transform(
        R,
        function () {
          return n(
            this.__zoom.translate(
              typeof Y == 'function' ? Y.apply(this, arguments) : Y,
              typeof W == 'function' ? W.apply(this, arguments) : W,
            ),
            t.apply(this, arguments),
            l,
          );
        },
        null,
        X,
      );
    }),
    (v.translateTo = function (R, Y, W, X, ne) {
      v.transform(
        R,
        function () {
          var ce = t.apply(this, arguments),
            ue = this.__zoom,
            j = X == null ? g(ce) : typeof X == 'function' ? X.apply(this, arguments) : X;
          return n(
            vi
              .translate(j[0], j[1])
              .scale(ue.k)
              .translate(
                typeof Y == 'function' ? -Y.apply(this, arguments) : -Y,
                typeof W == 'function' ? -W.apply(this, arguments) : -W,
              ),
            ce,
            l,
          );
        },
        X,
        ne,
      );
    });
  function w(R, Y) {
    return (Y = Math.max(u[0], Math.min(u[1], Y))), Y === R.k ? R : new Do(Y, R.x, R.y);
  }
  function N(R, Y, W) {
    var X = Y[0] - W[0] * R.k,
      ne = Y[1] - W[1] * R.k;
    return X === R.x && ne === R.y ? R : new Do(R.k, X, ne);
  }
  function g(R) {
    return [(+R[0][0] + +R[1][0]) / 2, (+R[0][1] + +R[1][1]) / 2];
  }
  function M(R, Y, W, X) {
    R.on('start.zoom', function () {
      P(this, arguments).event(X).start();
    })
      .on('interrupt.zoom end.zoom', function () {
        P(this, arguments).event(X).end();
      })
      .tween('zoom', function () {
        var ne = this,
          ce = arguments,
          ue = P(ne, ce).event(X),
          j = t.apply(ne, ce),
          k = W == null ? g(j) : typeof W == 'function' ? W.apply(ne, ce) : W,
          D = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]),
          B = ne.__zoom,
          q = typeof Y == 'function' ? Y.apply(ne, ce) : Y,
          Q = f(B.invert(k).concat(D / B.k), q.invert(k).concat(D / q.k));
        return function (le) {
          if (le === 1) le = q;
          else {
            var de = Q(le),
              pe = D / de[2];
            le = new Do(pe, k[0] - de[0] * pe, k[1] - de[1] * pe);
          }
          ue.zoom(null, le);
        };
      });
  }
  function P(R, Y, W) {
    return (!W && R.__zooming) || new H(R, Y);
  }
  function H(R, Y) {
    (this.that = R),
      (this.args = Y),
      (this.active = 0),
      (this.sourceEvent = null),
      (this.extent = t.apply(R, Y)),
      (this.taps = 0);
  }
  H.prototype = {
    event: function (R) {
      return R && (this.sourceEvent = R), this;
    },
    start: function () {
      return ++this.active === 1 && ((this.that.__zooming = this), this.emit('start')), this;
    },
    zoom: function (R, Y) {
      return (
        this.mouse && R !== 'mouse' && (this.mouse[1] = Y.invert(this.mouse[0])),
        this.touch0 && R !== 'touch' && (this.touch0[1] = Y.invert(this.touch0[0])),
        this.touch1 && R !== 'touch' && (this.touch1[1] = Y.invert(this.touch1[0])),
        (this.that.__zoom = Y),
        this.emit('zoom'),
        this
      );
    },
    end: function () {
      return --this.active === 0 && (delete this.that.__zooming, this.emit('end')), this;
    },
    emit: function (R) {
      var Y = Oo(this.that).datum();
      p.call(
        R,
        this.that,
        new vH(R, {
          sourceEvent: this.sourceEvent,
          target: v,
          type: R,
          transform: this.that.__zoom,
          dispatch: p,
        }),
        Y,
      );
    },
  };
  function F(R, ...Y) {
    if (!e.apply(this, arguments)) return;
    var W = P(this, Y).event(R),
      X = this.__zoom,
      ne = Math.max(u[0], Math.min(u[1], X.k * Math.pow(2, r.apply(this, arguments)))),
      ce = _o(R);
    if (W.wheel)
      (W.mouse[0][0] !== ce[0] || W.mouse[0][1] !== ce[1]) &&
        (W.mouse[1] = X.invert((W.mouse[0] = ce))),
        clearTimeout(W.wheel);
    else {
      if (X.k === ne) return;
      (W.mouse = [ce, X.invert(ce)]), ac(this), W.start();
    }
    mu(R),
      (W.wheel = setTimeout(ue, E)),
      W.zoom('mouse', n(N(w(X, ne), W.mouse[0], W.mouse[1]), W.extent, l));
    function ue() {
      (W.wheel = null), W.end();
    }
  }
  function U(R, ...Y) {
    if (S || !e.apply(this, arguments)) return;
    var W = R.currentTarget,
      X = P(this, Y, !0).event(R),
      ne = Oo(R.view).on('mousemove.zoom', k, !0).on('mouseup.zoom', D, !0),
      ce = _o(R, W),
      ue = R.clientX,
      j = R.clientY;
    DL(R.view), Pp(R), (X.mouse = [ce, this.__zoom.invert(ce)]), ac(this), X.start();
    function k(B) {
      if ((mu(B), !X.moved)) {
        var q = B.clientX - ue,
          Q = B.clientY - j;
        X.moved = q * q + Q * Q > _;
      }
      X.event(B).zoom(
        'mouse',
        n(N(X.that.__zoom, (X.mouse[0] = _o(B, W)), X.mouse[1]), X.extent, l),
      );
    }
    function D(B) {
      ne.on('mousemove.zoom mouseup.zoom', null), kL(B.view, X.moved), mu(B), X.event(B).end();
    }
  }
  function V(R, ...Y) {
    if (!!e.apply(this, arguments)) {
      var W = this.__zoom,
        X = _o(R.changedTouches ? R.changedTouches[0] : R, this),
        ne = W.invert(X),
        ce = W.k * (R.shiftKey ? 0.5 : 2),
        ue = n(N(w(W, ce), X, ne), t.apply(this, Y), l);
      mu(R),
        c > 0
          ? Oo(this).transition().duration(c).call(M, ue, X, R)
          : Oo(this).call(v.transform, ue, X, R);
    }
  }
  function fe(R, ...Y) {
    if (!!e.apply(this, arguments)) {
      var W = R.touches,
        X = W.length,
        ne = P(this, Y, R.changedTouches.length === X).event(R),
        ce,
        ue,
        j,
        k;
      for (Pp(R), ue = 0; ue < X; ++ue)
        (j = W[ue]),
          (k = _o(j, this)),
          (k = [k, this.__zoom.invert(k), j.identifier]),
          ne.touch0
            ? !ne.touch1 && ne.touch0[2] !== k[2] && ((ne.touch1 = k), (ne.taps = 0))
            : ((ne.touch0 = k), (ce = !0), (ne.taps = 1 + !!h));
      h && (h = clearTimeout(h)),
        ce &&
          (ne.taps < 2 &&
            ((x = k[0]),
            (h = setTimeout(function () {
              h = null;
            }, b))),
          ac(this),
          ne.start());
    }
  }
  function ae(R, ...Y) {
    if (!!this.__zooming) {
      var W = P(this, Y).event(R),
        X = R.changedTouches,
        ne = X.length,
        ce,
        ue,
        j,
        k;
      for (mu(R), ce = 0; ce < ne; ++ce)
        (ue = X[ce]),
          (j = _o(ue, this)),
          W.touch0 && W.touch0[2] === ue.identifier
            ? (W.touch0[0] = j)
            : W.touch1 && W.touch1[2] === ue.identifier && (W.touch1[0] = j);
      if (((ue = W.that.__zoom), W.touch1)) {
        var D = W.touch0[0],
          B = W.touch0[1],
          q = W.touch1[0],
          Q = W.touch1[1],
          le = (le = q[0] - D[0]) * le + (le = q[1] - D[1]) * le,
          de = (de = Q[0] - B[0]) * de + (de = Q[1] - B[1]) * de;
        (ue = w(ue, Math.sqrt(le / de))),
          (j = [(D[0] + q[0]) / 2, (D[1] + q[1]) / 2]),
          (k = [(B[0] + Q[0]) / 2, (B[1] + Q[1]) / 2]);
      } else if (W.touch0) (j = W.touch0[0]), (k = W.touch0[1]);
      else return;
      W.zoom('touch', n(N(ue, j, k), W.extent, l));
    }
  }
  function he(R, ...Y) {
    if (!!this.__zooming) {
      var W = P(this, Y).event(R),
        X = R.changedTouches,
        ne = X.length,
        ce,
        ue;
      for (
        Pp(R),
          S && clearTimeout(S),
          S = setTimeout(function () {
            S = null;
          }, b),
          ce = 0;
        ce < ne;
        ++ce
      )
        (ue = X[ce]),
          W.touch0 && W.touch0[2] === ue.identifier
            ? delete W.touch0
            : W.touch1 && W.touch1[2] === ue.identifier && delete W.touch1;
      if ((W.touch1 && !W.touch0 && ((W.touch0 = W.touch1), delete W.touch1), W.touch0))
        W.touch0[1] = this.__zoom.invert(W.touch0[0]);
      else if (
        (W.end(), W.taps === 2 && ((ue = _o(ue, this)), Math.hypot(x[0] - ue[0], x[1] - ue[1]) < m))
      ) {
        var j = Oo(this).on('dblclick.zoom');
        j && j.apply(this, arguments);
      }
    }
  }
  return (
    (v.wheelDelta = function (R) {
      return arguments.length ? ((r = typeof R == 'function' ? R : ks(+R)), v) : r;
    }),
    (v.filter = function (R) {
      return arguments.length ? ((e = typeof R == 'function' ? R : ks(!!R)), v) : e;
    }),
    (v.touchable = function (R) {
      return arguments.length ? ((i = typeof R == 'function' ? R : ks(!!R)), v) : i;
    }),
    (v.extent = function (R) {
      return arguments.length
        ? ((t =
            typeof R == 'function'
              ? R
              : ks([
                  [+R[0][0], +R[0][1]],
                  [+R[1][0], +R[1][1]],
                ])),
          v)
        : t;
    }),
    (v.scaleExtent = function (R) {
      return arguments.length ? ((u[0] = +R[0]), (u[1] = +R[1]), v) : [u[0], u[1]];
    }),
    (v.translateExtent = function (R) {
      return arguments.length
        ? ((l[0][0] = +R[0][0]),
          (l[1][0] = +R[1][0]),
          (l[0][1] = +R[0][1]),
          (l[1][1] = +R[1][1]),
          v)
        : [
            [l[0][0], l[0][1]],
            [l[1][0], l[1][1]],
          ];
    }),
    (v.constrain = function (R) {
      return arguments.length ? ((n = R), v) : n;
    }),
    (v.duration = function (R) {
      return arguments.length ? ((c = +R), v) : c;
    }),
    (v.interpolate = function (R) {
      return arguments.length ? ((f = R), v) : f;
    }),
    (v.on = function () {
      var R = p.on.apply(p, arguments);
      return R === p ? v : R;
    }),
    (v.clickDistance = function (R) {
      return arguments.length ? ((_ = (R = +R) * R), v) : Math.sqrt(_);
    }),
    (v.tapDistance = function (R) {
      return arguments.length ? ((m = +R), v) : m;
    }),
    v
  );
}
var _H = function (e) {
    var t = Ie(function (n) {
      return n.updateSize;
    });
    T.exports.useEffect(function () {
      var n,
        r = function () {
          if (!!e.current) {
            var u = Pg(e.current);
            (u.height === 0 || u.width === 0) &&
              console.warn(
                'The React Flow parent container needs a width and a height to render the graph.',
              ),
              t(u);
          }
        };
      return (
        r(),
        (window.onresize = r),
        e.current &&
          ((n = new ResizeObserver(function () {
            return r();
          })),
          n.observe(e.current)),
        function () {
          (window.onresize = null), n && e.current && n.unobserve(e.current);
        }
      );
    }, []);
  },
  De;
(function (e) {
  (e.Left = 'left'), (e.Top = 'top'), (e.Right = 'right'), (e.Bottom = 'bottom');
})(De || (De = {}));
var Aw;
(function (e) {
  (e.Arrow = 'arrow'), (e.ArrowClosed = 'arrowclosed');
})(Aw || (Aw = {}));
var _i;
(function (e) {
  (e.Lines = 'lines'), (e.Dots = 'dots');
})(_i || (_i = {}));
var Pa;
(function (e) {
  (e.Strict = 'strict'), (e.Loose = 'loose');
})(Pa || (Pa = {}));
var gi;
(function (e) {
  (e.Bezier = 'default'),
    (e.Straight = 'straight'),
    (e.Step = 'step'),
    (e.SmoothStep = 'smoothstep');
})(gi || (gi = {}));
var wa;
(function (e) {
  (e.Free = 'free'), (e.Vertical = 'vertical'), (e.Horizontal = 'horizontal');
})(wa || (wa = {}));
var xH = function (t, n) {
    return t.x !== n.x || t.y !== n.y || t.zoom !== n.k;
  },
  Ap = function (t) {
    return { x: t.x, y: t.y, zoom: t.k };
  },
  Dp = function (t) {
    return t.target.closest('.nowheel');
  },
  bH = function (t) {
    var n = t.onMove,
      r = t.onMoveStart,
      i = t.onMoveEnd,
      u = t.zoomOnScroll,
      l = u === void 0 ? !0 : u,
      c = t.zoomOnPinch,
      f = c === void 0 ? !0 : c,
      p = t.panOnScroll,
      h = p === void 0 ? !1 : p,
      x = t.panOnScrollSpeed,
      S = x === void 0 ? 0.5 : x,
      b = t.panOnScrollMode,
      E = b === void 0 ? wa.Free : b,
      _ = t.zoomOnDoubleClick,
      m = _ === void 0 ? !0 : _,
      v = t.selectionKeyPressed,
      w = t.elementsSelectable,
      N = t.paneMoveable,
      g = N === void 0 ? !0 : N,
      M = t.defaultPosition,
      P = M === void 0 ? [0, 0] : M,
      H = t.defaultZoom,
      F = H === void 0 ? 1 : H,
      U = t.translateExtent,
      V = t.zoomActivationKeyCode,
      fe = t.preventScrolling,
      ae = fe === void 0 ? !0 : fe,
      he = t.children,
      R = T.exports.useRef(null),
      Y = T.exports.useRef({ x: 0, y: 0, zoom: 0 }),
      W = Cf(),
      X = Pe(function (D) {
        return D.d3Zoom;
      }),
      ne = Pe(function (D) {
        return D.d3Selection;
      }),
      ce = Pe(function (D) {
        return D.d3ZoomHandler;
      }),
      ue = Ie(function (D) {
        return D.initD3Zoom;
      }),
      j = Ie(function (D) {
        return D.updateTransform;
      }),
      k = Bc(V);
    return (
      _H(R),
      T.exports.useEffect(function () {
        if (R.current) {
          var D = W.getState(),
            B = typeof U != 'undefined' ? U : D.translateExtent,
            q = EH().scaleExtent([D.minZoom, D.maxZoom]).translateExtent(B),
            Q = Oo(R.current).call(q),
            le = ma(P[0], B[0][0], B[1][0]),
            de = ma(P[1], B[0][1], B[1][1]),
            pe = ma(F, D.minZoom, D.maxZoom),
            Ee = vi.translate(le, de).scale(pe);
          q.transform(Q, Ee),
            ue({
              d3Zoom: q,
              d3Selection: Q,
              d3ZoomHandler: Q.on('wheel.zoom'),
              transform: [le, de, pe],
            });
        }
      }, []),
      T.exports.useEffect(
        function () {
          ne &&
            X &&
            (h && !k
              ? ne
                  .on('wheel', function (D) {
                    if (Dp(D)) return !1;
                    D.preventDefault(), D.stopImmediatePropagation();
                    var B = ne.property('__zoom').k || 1;
                    if (D.ctrlKey && f) {
                      var q = _o(D),
                        Q = -D.deltaY * (D.deltaMode === 1 ? 0.05 : D.deltaMode ? 1 : 0.002) * 10,
                        le = B * Math.pow(2, Q);
                      X.scaleTo(ne, le, q);
                      return;
                    }
                    var de = D.deltaMode === 1 ? 20 : 1,
                      pe = E === wa.Vertical ? 0 : D.deltaX * de,
                      Ee = E === wa.Horizontal ? 0 : D.deltaY * de;
                    X.translateBy(ne, -(pe / B) * S, -(Ee / B) * S);
                  })
                  .on('wheel.zoom', null)
              : typeof ce != 'undefined' &&
                ne
                  .on('wheel', function (D) {
                    if (!ae || Dp(D)) return null;
                    D.preventDefault();
                  })
                  .on('wheel.zoom', ce));
        },
        [h, E, ne, X, ce, k, f, ae],
      ),
      T.exports.useEffect(
        function () {
          X &&
            (v
              ? X.on('zoom', null)
              : X.on('zoom', function (D) {
                  if ((j([D.transform.x, D.transform.y, D.transform.k]), n)) {
                    var B = Ap(D.transform);
                    n(B);
                  }
                }));
        },
        [v, X, j, n],
      ),
      T.exports.useEffect(
        function () {
          X &&
            (r
              ? X.on('start', function (D) {
                  var B = Ap(D.transform);
                  (Y.current = B), r(B);
                })
              : X.on('start', null));
        },
        [X, r],
      ),
      T.exports.useEffect(
        function () {
          X &&
            (i
              ? X.on('end', function (D) {
                  if (xH(Y.current, D.transform)) {
                    var B = Ap(D.transform);
                    (Y.current = B), i(B);
                  }
                })
              : X.on('end', null));
        },
        [X, i],
      ),
      T.exports.useEffect(
        function () {
          X &&
            X.filter(function (D) {
              var B = k || l,
                q = f && D.ctrlKey;
              return (!g && !B && !h && !m && !f) ||
                v ||
                (!m && D.type === 'dblclick') ||
                (Dp(D) && D.type === 'wheel') ||
                ((D.target.closest('.react-flow__node') || D.target.closest('.react-flow__edge')) &&
                  D.type !== 'wheel') ||
                (D.target.closest('.react-flow__nodesselection') && D.type !== 'wheel') ||
                (!f && D.ctrlKey && D.type === 'wheel') ||
                (!B && !h && !q && D.type === 'wheel') ||
                (!g && (D.type === 'mousedown' || D.type === 'touchstart'))
                ? !1
                : (!D.ctrlKey || D.type === 'wheel') && !D.button;
            });
        },
        [X, l, f, h, m, g, v, w, k],
      ),
      L('div', { className: 'react-flow__renderer react-flow__zoompane', ref: R, children: he })
    );
  };
function Dw(e) {
  var t = e.target.closest('.react-flow');
  if (!!t) {
    var n = t.getBoundingClientRect();
    return { x: e.clientX - n.left, y: e.clientY - n.top };
  }
}
var CH = function () {
    var t = Pe(function (n) {
      return n.userSelectionRect;
    });
    return t.draw
      ? L('div', {
          className: 'react-flow__selection',
          style: {
            width: t.width,
            height: t.height,
            transform: 'translate('.concat(t.x, 'px, ').concat(t.y, 'px)'),
          },
        })
      : null;
  },
  OH = T.exports.memo(function (e) {
    var t = e.selectionKeyPressed,
      n = Pe(function (b) {
        return b.selectionActive;
      }),
      r = Pe(function (b) {
        return b.elementsSelectable;
      }),
      i = Ie(function (b) {
        return b.setUserSelection;
      }),
      u = Ie(function (b) {
        return b.updateUserSelection;
      }),
      l = Ie(function (b) {
        return b.unsetUserSelection;
      }),
      c = Ie(function (b) {
        return b.unsetNodesSelection;
      }),
      f = n || t;
    if (!r || !f) return null;
    var p = function (E) {
        var _ = Dw(E);
        !_ || i(_);
      },
      h = function (E) {
        if (!(!t || !n)) {
          var _ = Dw(E);
          !_ || u(_);
        }
      },
      x = function () {
        return l();
      },
      S = function () {
        l(), c();
      };
    return L('div', {
      className: 'react-flow__selectionpane',
      onMouseDown: p,
      onMouseMove: h,
      onMouseUp: x,
      onMouseLeave: S,
      children: L(CH, {}),
    });
  }),
  Mf = { exports: {} },
  cb = {};
function fb(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++) e[t] && (n = fb(e[t])) && (r && (r += ' '), (r += n));
    else for (t in e) e[t] && (r && (r += ' '), (r += t));
  return r;
}
function NH() {
  for (var e = 0, t, n, r = ''; e < arguments.length; )
    (t = arguments[e++]) && (n = fb(t)) && (r && (r += ' '), (r += n));
  return r;
}
var TH = Object.freeze({ __proto__: null, default: NH }),
  MH = Nk(TH),
  _t = {},
  Br = {};
Object.defineProperty(Br, '__esModule', { value: !0 });
Br.findInArray = PH;
Br.isFunction = AH;
Br.isNum = DH;
Br.int = kH;
Br.dontSetMe = RH;
function PH(e, t) {
  for (var n = 0, r = e.length; n < r; n++) if (t.apply(t, [e[n], n, e])) return e[n];
}
function AH(e) {
  return typeof e == 'function' || Object.prototype.toString.call(e) === '[object Function]';
}
function DH(e) {
  return typeof e == 'number' && !isNaN(e);
}
function kH(e) {
  return parseInt(e, 10);
}
function RH(e, t, n) {
  if (e[t])
    return new Error(
      'Invalid prop '
        .concat(t, ' passed to ')
        .concat(n, ' - do not set this, set it on the child.'),
    );
}
var Ti = {};
Object.defineProperty(Ti, '__esModule', { value: !0 });
Ti.getPrefix = db;
Ti.browserPrefixToKey = pb;
Ti.browserPrefixToStyle = IH;
Ti.default = void 0;
var kp = ['Moz', 'Webkit', 'O', 'ms'];
function db() {
  var e,
    t,
    n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'transform';
  if (typeof window == 'undefined') return '';
  var r =
    (e = window.document) === null ||
    e === void 0 ||
    (t = e.documentElement) === null ||
    t === void 0
      ? void 0
      : t.style;
  if (!r || n in r) return '';
  for (var i = 0; i < kp.length; i++) if (pb(n, kp[i]) in r) return kp[i];
  return '';
}
function pb(e, t) {
  return t ? ''.concat(t).concat(LH(e)) : e;
}
function IH(e, t) {
  return t ? '-'.concat(t.toLowerCase(), '-').concat(e) : e;
}
function LH(e) {
  for (var t = '', n = !0, r = 0; r < e.length; r++)
    n ? ((t += e[r].toUpperCase()), (n = !1)) : e[r] === '-' ? (n = !0) : (t += e[r]);
  return t;
}
var HH = db();
Ti.default = HH;
function uc(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (uc = function (n) {
          return typeof n;
        })
      : (uc = function (n) {
          return n &&
            typeof Symbol == 'function' &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? 'symbol'
            : typeof n;
        }),
    uc(e)
  );
}
Object.defineProperty(_t, '__esModule', { value: !0 });
_t.matchesSelector = mb;
_t.matchesSelectorAndParentsTo = FH;
_t.addEvent = $H;
_t.removeEvent = zH;
_t.outerHeight = UH;
_t.outerWidth = jH;
_t.innerHeight = WH;
_t.innerWidth = YH;
_t.offsetXYFromParent = VH;
_t.createCSSTransform = XH;
_t.createSVGTransform = GH;
_t.getTranslation = Fg;
_t.getTouch = qH;
_t.getTouchIdentifier = ZH;
_t.addUserSelectStyles = KH;
_t.removeUserSelectStyles = QH;
_t.addClassName = yb;
_t.removeClassName = wb;
var An = Br,
  kw = BH(Ti);
function hb(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (hb = function (i) {
    return i ? n : t;
  })(e);
}
function BH(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (uc(e) !== 'object' && typeof e != 'function')) return { default: e };
  var n = hb(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if (u !== 'default' && Object.prototype.hasOwnProperty.call(e, u)) {
      var l = i ? Object.getOwnPropertyDescriptor(e, u) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, u, l) : (r[u] = e[u]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Rw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function vb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rw(Object(n), !0).forEach(function (r) {
          gb(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Rw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function gb(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
var Rs = '';
function mb(e, t) {
  return (
    Rs ||
      (Rs = (0, An.findInArray)(
        [
          'matches',
          'webkitMatchesSelector',
          'mozMatchesSelector',
          'msMatchesSelector',
          'oMatchesSelector',
        ],
        function (n) {
          return (0, An.isFunction)(e[n]);
        },
      )),
    (0, An.isFunction)(e[Rs]) ? e[Rs](t) : !1
  );
}
function FH(e, t, n) {
  var r = e;
  do {
    if (mb(r, t)) return !0;
    if (r === n) return !1;
    r = r.parentNode;
  } while (r);
  return !1;
}
function $H(e, t, n, r) {
  if (!!e) {
    var i = vb({ capture: !0 }, r);
    e.addEventListener
      ? e.addEventListener(t, n, i)
      : e.attachEvent
      ? e.attachEvent('on' + t, n)
      : (e['on' + t] = n);
  }
}
function zH(e, t, n, r) {
  if (!!e) {
    var i = vb({ capture: !0 }, r);
    e.removeEventListener
      ? e.removeEventListener(t, n, i)
      : e.detachEvent
      ? e.detachEvent('on' + t, n)
      : (e['on' + t] = null);
  }
}
function UH(e) {
  var t = e.clientHeight,
    n = e.ownerDocument.defaultView.getComputedStyle(e);
  return (t += (0, An.int)(n.borderTopWidth)), (t += (0, An.int)(n.borderBottomWidth)), t;
}
function jH(e) {
  var t = e.clientWidth,
    n = e.ownerDocument.defaultView.getComputedStyle(e);
  return (t += (0, An.int)(n.borderLeftWidth)), (t += (0, An.int)(n.borderRightWidth)), t;
}
function WH(e) {
  var t = e.clientHeight,
    n = e.ownerDocument.defaultView.getComputedStyle(e);
  return (t -= (0, An.int)(n.paddingTop)), (t -= (0, An.int)(n.paddingBottom)), t;
}
function YH(e) {
  var t = e.clientWidth,
    n = e.ownerDocument.defaultView.getComputedStyle(e);
  return (t -= (0, An.int)(n.paddingLeft)), (t -= (0, An.int)(n.paddingRight)), t;
}
function VH(e, t, n) {
  var r = t === t.ownerDocument.body,
    i = r ? { left: 0, top: 0 } : t.getBoundingClientRect(),
    u = (e.clientX + t.scrollLeft - i.left) / n,
    l = (e.clientY + t.scrollTop - i.top) / n;
  return { x: u, y: l };
}
function XH(e, t) {
  var n = Fg(e, t, 'px');
  return gb({}, (0, kw.browserPrefixToKey)('transform', kw.default), n);
}
function GH(e, t) {
  var n = Fg(e, t, '');
  return n;
}
function Fg(e, t, n) {
  var r = e.x,
    i = e.y,
    u = 'translate('.concat(r).concat(n, ',').concat(i).concat(n, ')');
  if (t) {
    var l = ''.concat(typeof t.x == 'string' ? t.x : t.x + n),
      c = ''.concat(typeof t.y == 'string' ? t.y : t.y + n);
    u = 'translate('.concat(l, ', ').concat(c, ')') + u;
  }
  return u;
}
function qH(e, t) {
  return (
    (e.targetTouches &&
      (0, An.findInArray)(e.targetTouches, function (n) {
        return t === n.identifier;
      })) ||
    (e.changedTouches &&
      (0, An.findInArray)(e.changedTouches, function (n) {
        return t === n.identifier;
      }))
  );
}
function ZH(e) {
  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
}
function KH(e) {
  if (!!e) {
    var t = e.getElementById('react-draggable-style-el');
    t ||
      ((t = e.createElement('style')),
      (t.type = 'text/css'),
      (t.id = 'react-draggable-style-el'),
      (t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`),
      (t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`),
      e.getElementsByTagName('head')[0].appendChild(t)),
      e.body && yb(e.body, 'react-draggable-transparent-selection');
  }
}
function QH(e) {
  if (!!e)
    try {
      if ((e.body && wb(e.body, 'react-draggable-transparent-selection'), e.selection))
        e.selection.empty();
      else {
        var t = (e.defaultView || window).getSelection();
        t && t.type !== 'Caret' && t.removeAllRanges();
      }
    } catch (n) {}
}
function yb(e, t) {
  e.classList
    ? e.classList.add(t)
    : e.className.match(new RegExp('(?:^|\\s)'.concat(t, '(?!\\S)'))) ||
      (e.className += ' '.concat(t));
}
function wb(e, t) {
  e.classList
    ? e.classList.remove(t)
    : (e.className = e.className.replace(new RegExp('(?:^|\\s)'.concat(t, '(?!\\S)'), 'g'), ''));
}
var Fr = {};
Object.defineProperty(Fr, '__esModule', { value: !0 });
Fr.getBoundPosition = JH;
Fr.snapToGrid = e4;
Fr.canDragX = t4;
Fr.canDragY = n4;
Fr.getControlPosition = r4;
Fr.createCoreData = o4;
Fr.createDraggableData = i4;
var Tn = Br,
  ia = _t;
function JH(e, t, n) {
  if (!e.props.bounds) return [t, n];
  var r = e.props.bounds;
  r = typeof r == 'string' ? r : a4(r);
  var i = $g(e);
  if (typeof r == 'string') {
    var u = i.ownerDocument,
      l = u.defaultView,
      c;
    if (
      (r === 'parent' ? (c = i.parentNode) : (c = u.querySelector(r)),
      !(c instanceof l.HTMLElement))
    )
      throw new Error('Bounds selector "' + r + '" could not find an element.');
    var f = c,
      p = l.getComputedStyle(i),
      h = l.getComputedStyle(f);
    r = {
      left: -i.offsetLeft + (0, Tn.int)(h.paddingLeft) + (0, Tn.int)(p.marginLeft),
      top: -i.offsetTop + (0, Tn.int)(h.paddingTop) + (0, Tn.int)(p.marginTop),
      right:
        (0, ia.innerWidth)(f) -
        (0, ia.outerWidth)(i) -
        i.offsetLeft +
        (0, Tn.int)(h.paddingRight) -
        (0, Tn.int)(p.marginRight),
      bottom:
        (0, ia.innerHeight)(f) -
        (0, ia.outerHeight)(i) -
        i.offsetTop +
        (0, Tn.int)(h.paddingBottom) -
        (0, Tn.int)(p.marginBottom),
    };
  }
  return (
    (0, Tn.isNum)(r.right) && (t = Math.min(t, r.right)),
    (0, Tn.isNum)(r.bottom) && (n = Math.min(n, r.bottom)),
    (0, Tn.isNum)(r.left) && (t = Math.max(t, r.left)),
    (0, Tn.isNum)(r.top) && (n = Math.max(n, r.top)),
    [t, n]
  );
}
function e4(e, t, n) {
  var r = Math.round(t / e[0]) * e[0],
    i = Math.round(n / e[1]) * e[1];
  return [r, i];
}
function t4(e) {
  return e.props.axis === 'both' || e.props.axis === 'x';
}
function n4(e) {
  return e.props.axis === 'both' || e.props.axis === 'y';
}
function r4(e, t, n) {
  var r = typeof t == 'number' ? (0, ia.getTouch)(e, t) : null;
  if (typeof t == 'number' && !r) return null;
  var i = $g(n),
    u = n.props.offsetParent || i.offsetParent || i.ownerDocument.body;
  return (0, ia.offsetXYFromParent)(r || e, u, n.props.scale);
}
function o4(e, t, n) {
  var r = e.state,
    i = !(0, Tn.isNum)(r.lastX),
    u = $g(e);
  return i
    ? { node: u, deltaX: 0, deltaY: 0, lastX: t, lastY: n, x: t, y: n }
    : {
        node: u,
        deltaX: t - r.lastX,
        deltaY: n - r.lastY,
        lastX: r.lastX,
        lastY: r.lastY,
        x: t,
        y: n,
      };
}
function i4(e, t) {
  var n = e.props.scale;
  return {
    node: t.node,
    x: e.state.x + t.deltaX / n,
    y: e.state.y + t.deltaY / n,
    deltaX: t.deltaX / n,
    deltaY: t.deltaY / n,
    lastX: e.state.x,
    lastY: e.state.y,
  };
}
function a4(e) {
  return { left: e.left, top: e.top, right: e.right, bottom: e.bottom };
}
function $g(e) {
  var t = e.findDOMNode();
  if (!t) throw new Error('<DraggableCore>: Unmounted during event!');
  return t;
}
var Pf = {},
  Af = {};
Object.defineProperty(Af, '__esModule', { value: !0 });
Af.default = u4;
function u4() {}
function zu(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (zu = function (n) {
          return typeof n;
        })
      : (zu = function (n) {
          return n &&
            typeof Symbol == 'function' &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? 'symbol'
            : typeof n;
        }),
    zu(e)
  );
}
Object.defineProperty(Pf, '__esModule', { value: !0 });
Pf.default = void 0;
var Rp = s4(Kc),
  On = zg(Og.exports),
  l4 = zg(Cg),
  Xt = _t,
  ai = Fr,
  Ip = Br,
  yu = zg(Af);
function zg(e) {
  return e && e.__esModule ? e : { default: e };
}
function Sb(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Sb = function (i) {
    return i ? n : t;
  })(e);
}
function s4(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (zu(e) !== 'object' && typeof e != 'function')) return { default: e };
  var n = Sb(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if (u !== 'default' && Object.prototype.hasOwnProperty.call(e, u)) {
      var l = i ? Object.getOwnPropertyDescriptor(e, u) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, u, l) : (r[u] = e[u]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function c4(e, t) {
  return h4(e) || p4(e, t) || d4(e, t) || f4();
}
function f4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d4(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Iw(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Iw(e, t);
  }
}
function Iw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function p4(e, t) {
  var n =
    e == null ? null : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r = [],
      i = !0,
      u = !1,
      l,
      c;
    try {
      for (
        n = n.call(e);
        !(i = (l = n.next()).done) && (r.push(l.value), !(t && r.length === t));
        i = !0
      );
    } catch (f) {
      (u = !0), (c = f);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (u) throw c;
      }
    }
    return r;
  }
}
function h4(e) {
  if (Array.isArray(e)) return e;
}
function v4(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Lw(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function g4(e, t, n) {
  return t && Lw(e.prototype, t), n && Lw(e, n), e;
}
function m4(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && ov(e, t);
}
function ov(e, t) {
  return (
    (ov =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    ov(e, t)
  );
}
function y4(e) {
  var t = S4();
  return function () {
    var r = Wc(e),
      i;
    if (t) {
      var u = Wc(this).constructor;
      i = Reflect.construct(r, arguments, u);
    } else i = r.apply(this, arguments);
    return w4(this, i);
  };
}
function w4(e, t) {
  if (t && (zu(t) === 'object' || typeof t == 'function')) return t;
  if (t !== void 0) throw new TypeError('Derived constructors may only return object or undefined');
  return Gt(e);
}
function Gt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function S4() {
  if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch (e) {
    return !1;
  }
}
function Wc(e) {
  return (
    (Wc = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Wc(e)
  );
}
function Yn(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
var sr = {
    touch: { start: 'touchstart', move: 'touchmove', stop: 'touchend' },
    mouse: { start: 'mousedown', move: 'mousemove', stop: 'mouseup' },
  },
  Eo = sr.mouse,
  Df = (function (e) {
    m4(n, e);
    var t = y4(n);
    function n() {
      var r;
      v4(this, n);
      for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++) u[l] = arguments[l];
      return (
        (r = t.call.apply(t, [this].concat(u))),
        Yn(Gt(r), 'state', { dragging: !1, lastX: NaN, lastY: NaN, touchIdentifier: null }),
        Yn(Gt(r), 'mounted', !1),
        Yn(Gt(r), 'handleDragStart', function (c) {
          if (
            (r.props.onMouseDown(c),
            !r.props.allowAnyClick && typeof c.button == 'number' && c.button !== 0)
          )
            return !1;
          var f = r.findDOMNode();
          if (!f || !f.ownerDocument || !f.ownerDocument.body)
            throw new Error('<DraggableCore> not mounted on DragStart!');
          var p = f.ownerDocument;
          if (
            !(
              r.props.disabled ||
              !(c.target instanceof p.defaultView.Node) ||
              (r.props.handle &&
                !(0, Xt.matchesSelectorAndParentsTo)(c.target, r.props.handle, f)) ||
              (r.props.cancel && (0, Xt.matchesSelectorAndParentsTo)(c.target, r.props.cancel, f))
            )
          ) {
            c.type === 'touchstart' && c.preventDefault();
            var h = (0, Xt.getTouchIdentifier)(c);
            r.setState({ touchIdentifier: h });
            var x = (0, ai.getControlPosition)(c, h, Gt(r));
            if (x != null) {
              var S = x.x,
                b = x.y,
                E = (0, ai.createCoreData)(Gt(r), S, b);
              (0, yu.default)('DraggableCore: handleDragStart: %j', E),
                (0, yu.default)('calling', r.props.onStart);
              var _ = r.props.onStart(c, E);
              _ === !1 ||
                r.mounted === !1 ||
                (r.props.enableUserSelectHack && (0, Xt.addUserSelectStyles)(p),
                r.setState({ dragging: !0, lastX: S, lastY: b }),
                (0, Xt.addEvent)(p, Eo.move, r.handleDrag),
                (0, Xt.addEvent)(p, Eo.stop, r.handleDragStop));
            }
          }
        }),
        Yn(Gt(r), 'handleDrag', function (c) {
          var f = (0, ai.getControlPosition)(c, r.state.touchIdentifier, Gt(r));
          if (f != null) {
            var p = f.x,
              h = f.y;
            if (Array.isArray(r.props.grid)) {
              var x = p - r.state.lastX,
                S = h - r.state.lastY,
                b = (0, ai.snapToGrid)(r.props.grid, x, S),
                E = c4(b, 2);
              if (((x = E[0]), (S = E[1]), !x && !S)) return;
              (p = r.state.lastX + x), (h = r.state.lastY + S);
            }
            var _ = (0, ai.createCoreData)(Gt(r), p, h);
            (0, yu.default)('DraggableCore: handleDrag: %j', _);
            var m = r.props.onDrag(c, _);
            if (m === !1 || r.mounted === !1) {
              try {
                r.handleDragStop(new MouseEvent('mouseup'));
              } catch (w) {
                var v = document.createEvent('MouseEvents');
                v.initMouseEvent('mouseup', !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null),
                  r.handleDragStop(v);
              }
              return;
            }
            r.setState({ lastX: p, lastY: h });
          }
        }),
        Yn(Gt(r), 'handleDragStop', function (c) {
          if (!!r.state.dragging) {
            var f = (0, ai.getControlPosition)(c, r.state.touchIdentifier, Gt(r));
            if (f != null) {
              var p = f.x,
                h = f.y,
                x = (0, ai.createCoreData)(Gt(r), p, h),
                S = r.props.onStop(c, x);
              if (S === !1 || r.mounted === !1) return !1;
              var b = r.findDOMNode();
              b && r.props.enableUserSelectHack && (0, Xt.removeUserSelectStyles)(b.ownerDocument),
                (0, yu.default)('DraggableCore: handleDragStop: %j', x),
                r.setState({ dragging: !1, lastX: NaN, lastY: NaN }),
                b &&
                  ((0, yu.default)('DraggableCore: Removing handlers'),
                  (0, Xt.removeEvent)(b.ownerDocument, Eo.move, r.handleDrag),
                  (0, Xt.removeEvent)(b.ownerDocument, Eo.stop, r.handleDragStop));
            }
          }
        }),
        Yn(Gt(r), 'onMouseDown', function (c) {
          return (Eo = sr.mouse), r.handleDragStart(c);
        }),
        Yn(Gt(r), 'onMouseUp', function (c) {
          return (Eo = sr.mouse), r.handleDragStop(c);
        }),
        Yn(Gt(r), 'onTouchStart', function (c) {
          return (Eo = sr.touch), r.handleDragStart(c);
        }),
        Yn(Gt(r), 'onTouchEnd', function (c) {
          return (Eo = sr.touch), r.handleDragStop(c);
        }),
        r
      );
    }
    return (
      g4(n, [
        {
          key: 'componentDidMount',
          value: function () {
            this.mounted = !0;
            var i = this.findDOMNode();
            i && (0, Xt.addEvent)(i, sr.touch.start, this.onTouchStart, { passive: !1 });
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.mounted = !1;
            var i = this.findDOMNode();
            if (i) {
              var u = i.ownerDocument;
              (0, Xt.removeEvent)(u, sr.mouse.move, this.handleDrag),
                (0, Xt.removeEvent)(u, sr.touch.move, this.handleDrag),
                (0, Xt.removeEvent)(u, sr.mouse.stop, this.handleDragStop),
                (0, Xt.removeEvent)(u, sr.touch.stop, this.handleDragStop),
                (0, Xt.removeEvent)(i, sr.touch.start, this.onTouchStart, { passive: !1 }),
                this.props.enableUserSelectHack && (0, Xt.removeUserSelectStyles)(u);
            }
          },
        },
        {
          key: 'findDOMNode',
          value: function () {
            var i, u, l;
            return (i =
              (u = this.props) === null || u === void 0 || (l = u.nodeRef) === null || l === void 0
                ? void 0
                : l.current) !== null && i !== void 0
              ? i
              : l4.default.findDOMNode(this);
          },
        },
        {
          key: 'render',
          value: function () {
            return Rp.cloneElement(Rp.Children.only(this.props.children), {
              onMouseDown: this.onMouseDown,
              onMouseUp: this.onMouseUp,
              onTouchEnd: this.onTouchEnd,
            });
          },
        },
      ]),
      n
    );
  })(Rp.Component);
Pf.default = Df;
Yn(Df, 'displayName', 'DraggableCore');
Yn(Df, 'propTypes', {
  allowAnyClick: On.default.bool,
  disabled: On.default.bool,
  enableUserSelectHack: On.default.bool,
  offsetParent: function (t, n) {
    if (t[n] && t[n].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  grid: On.default.arrayOf(On.default.number),
  handle: On.default.string,
  cancel: On.default.string,
  nodeRef: On.default.object,
  onStart: On.default.func,
  onDrag: On.default.func,
  onStop: On.default.func,
  onMouseDown: On.default.func,
  scale: On.default.number,
  className: Ip.dontSetMe,
  style: Ip.dontSetMe,
  transform: Ip.dontSetMe,
});
Yn(Df, 'defaultProps', {
  allowAnyClick: !1,
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function () {},
  onDrag: function () {},
  onStop: function () {},
  onMouseDown: function () {},
  scale: 1,
});
(function (e) {
  function t(k) {
    return (
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? (t = function (B) {
            return typeof B;
          })
        : (t = function (B) {
            return B &&
              typeof Symbol == 'function' &&
              B.constructor === Symbol &&
              B !== Symbol.prototype
              ? 'symbol'
              : typeof B;
          }),
      t(k)
    );
  }
  Object.defineProperty(e, '__esModule', { value: !0 }),
    Object.defineProperty(e, 'DraggableCore', {
      enumerable: !0,
      get: function () {
        return p.default;
      },
    }),
    (e.default = void 0);
  var n = E(Kc),
    r = S(Og.exports),
    i = S(Cg),
    u = S(MH),
    l = _t,
    c = Fr,
    f = Br,
    p = S(Pf),
    h = S(Af),
    x = [
      'axis',
      'bounds',
      'children',
      'defaultPosition',
      'defaultClassName',
      'defaultClassNameDragging',
      'defaultClassNameDragged',
      'position',
      'positionOffset',
      'scale',
    ];
  function S(k) {
    return k && k.__esModule ? k : { default: k };
  }
  function b(k) {
    if (typeof WeakMap != 'function') return null;
    var D = new WeakMap(),
      B = new WeakMap();
    return (b = function (Q) {
      return Q ? B : D;
    })(k);
  }
  function E(k, D) {
    if (!D && k && k.__esModule) return k;
    if (k === null || (t(k) !== 'object' && typeof k != 'function')) return { default: k };
    var B = b(D);
    if (B && B.has(k)) return B.get(k);
    var q = {},
      Q = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var le in k)
      if (le !== 'default' && Object.prototype.hasOwnProperty.call(k, le)) {
        var de = Q ? Object.getOwnPropertyDescriptor(k, le) : null;
        de && (de.get || de.set) ? Object.defineProperty(q, le, de) : (q[le] = k[le]);
      }
    return (q.default = k), B && B.set(k, q), q;
  }
  function _() {
    return (
      (_ =
        Object.assign ||
        function (k) {
          for (var D = 1; D < arguments.length; D++) {
            var B = arguments[D];
            for (var q in B) Object.prototype.hasOwnProperty.call(B, q) && (k[q] = B[q]);
          }
          return k;
        }),
      _.apply(this, arguments)
    );
  }
  function m(k, D) {
    if (k == null) return {};
    var B = v(k, D),
      q,
      Q;
    if (Object.getOwnPropertySymbols) {
      var le = Object.getOwnPropertySymbols(k);
      for (Q = 0; Q < le.length; Q++)
        (q = le[Q]),
          !(D.indexOf(q) >= 0) &&
            (!Object.prototype.propertyIsEnumerable.call(k, q) || (B[q] = k[q]));
    }
    return B;
  }
  function v(k, D) {
    if (k == null) return {};
    var B = {},
      q = Object.keys(k),
      Q,
      le;
    for (le = 0; le < q.length; le++) (Q = q[le]), !(D.indexOf(Q) >= 0) && (B[Q] = k[Q]);
    return B;
  }
  function w(k, D) {
    var B = Object.keys(k);
    if (Object.getOwnPropertySymbols) {
      var q = Object.getOwnPropertySymbols(k);
      D &&
        (q = q.filter(function (Q) {
          return Object.getOwnPropertyDescriptor(k, Q).enumerable;
        })),
        B.push.apply(B, q);
    }
    return B;
  }
  function N(k) {
    for (var D = 1; D < arguments.length; D++) {
      var B = arguments[D] != null ? arguments[D] : {};
      D % 2
        ? w(Object(B), !0).forEach(function (q) {
            ue(k, q, B[q]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(k, Object.getOwnPropertyDescriptors(B))
        : w(Object(B)).forEach(function (q) {
            Object.defineProperty(k, q, Object.getOwnPropertyDescriptor(B, q));
          });
    }
    return k;
  }
  function g(k, D) {
    return U(k) || F(k, D) || P(k, D) || M();
  }
  function M() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function P(k, D) {
    if (!!k) {
      if (typeof k == 'string') return H(k, D);
      var B = Object.prototype.toString.call(k).slice(8, -1);
      if ((B === 'Object' && k.constructor && (B = k.constructor.name), B === 'Map' || B === 'Set'))
        return Array.from(k);
      if (B === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B)) return H(k, D);
    }
  }
  function H(k, D) {
    (D == null || D > k.length) && (D = k.length);
    for (var B = 0, q = new Array(D); B < D; B++) q[B] = k[B];
    return q;
  }
  function F(k, D) {
    var B =
      k == null ? null : (typeof Symbol != 'undefined' && k[Symbol.iterator]) || k['@@iterator'];
    if (B != null) {
      var q = [],
        Q = !0,
        le = !1,
        de,
        pe;
      try {
        for (
          B = B.call(k);
          !(Q = (de = B.next()).done) && (q.push(de.value), !(D && q.length === D));
          Q = !0
        );
      } catch (Ee) {
        (le = !0), (pe = Ee);
      } finally {
        try {
          !Q && B.return != null && B.return();
        } finally {
          if (le) throw pe;
        }
      }
      return q;
    }
  }
  function U(k) {
    if (Array.isArray(k)) return k;
  }
  function V(k, D) {
    if (!(k instanceof D)) throw new TypeError('Cannot call a class as a function');
  }
  function fe(k, D) {
    for (var B = 0; B < D.length; B++) {
      var q = D[B];
      (q.enumerable = q.enumerable || !1),
        (q.configurable = !0),
        'value' in q && (q.writable = !0),
        Object.defineProperty(k, q.key, q);
    }
  }
  function ae(k, D, B) {
    return D && fe(k.prototype, D), B && fe(k, B), k;
  }
  function he(k, D) {
    if (typeof D != 'function' && D !== null)
      throw new TypeError('Super expression must either be null or a function');
    (k.prototype = Object.create(D && D.prototype, {
      constructor: { value: k, writable: !0, configurable: !0 },
    })),
      D && R(k, D);
  }
  function R(k, D) {
    return (
      (R =
        Object.setPrototypeOf ||
        function (q, Q) {
          return (q.__proto__ = Q), q;
        }),
      R(k, D)
    );
  }
  function Y(k) {
    var D = ne();
    return function () {
      var q = ce(k),
        Q;
      if (D) {
        var le = ce(this).constructor;
        Q = Reflect.construct(q, arguments, le);
      } else Q = q.apply(this, arguments);
      return W(this, Q);
    };
  }
  function W(k, D) {
    if (D && (t(D) === 'object' || typeof D == 'function')) return D;
    if (D !== void 0)
      throw new TypeError('Derived constructors may only return object or undefined');
    return X(k);
  }
  function X(k) {
    if (k === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return k;
  }
  function ne() {
    if (typeof Reflect == 'undefined' || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == 'function') return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (k) {
      return !1;
    }
  }
  function ce(k) {
    return (
      (ce = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (B) {
            return B.__proto__ || Object.getPrototypeOf(B);
          }),
      ce(k)
    );
  }
  function ue(k, D, B) {
    return (
      D in k
        ? Object.defineProperty(k, D, { value: B, enumerable: !0, configurable: !0, writable: !0 })
        : (k[D] = B),
      k
    );
  }
  var j = (function (k) {
    he(B, k);
    var D = Y(B);
    function B(q) {
      var Q;
      return (
        V(this, B),
        (Q = D.call(this, q)),
        ue(X(Q), 'onDragStart', function (le, de) {
          (0, h.default)('Draggable: onDragStart: %j', de);
          var pe = Q.props.onStart(le, (0, c.createDraggableData)(X(Q), de));
          if (pe === !1) return !1;
          Q.setState({ dragging: !0, dragged: !0 });
        }),
        ue(X(Q), 'onDrag', function (le, de) {
          if (!Q.state.dragging) return !1;
          (0, h.default)('Draggable: onDrag: %j', de);
          var pe = (0, c.createDraggableData)(X(Q), de),
            Ee = { x: pe.x, y: pe.y };
          if (Q.props.bounds) {
            var it = Ee.x,
              Ve = Ee.y;
            (Ee.x += Q.state.slackX), (Ee.y += Q.state.slackY);
            var ut = (0, c.getBoundPosition)(X(Q), Ee.x, Ee.y),
              J = g(ut, 2),
              te = J[0],
              ie = J[1];
            (Ee.x = te),
              (Ee.y = ie),
              (Ee.slackX = Q.state.slackX + (it - Ee.x)),
              (Ee.slackY = Q.state.slackY + (Ve - Ee.y)),
              (pe.x = Ee.x),
              (pe.y = Ee.y),
              (pe.deltaX = Ee.x - Q.state.x),
              (pe.deltaY = Ee.y - Q.state.y);
          }
          var G = Q.props.onDrag(le, pe);
          if (G === !1) return !1;
          Q.setState(Ee);
        }),
        ue(X(Q), 'onDragStop', function (le, de) {
          if (!Q.state.dragging) return !1;
          var pe = Q.props.onStop(le, (0, c.createDraggableData)(X(Q), de));
          if (pe === !1) return !1;
          (0, h.default)('Draggable: onDragStop: %j', de);
          var Ee = { dragging: !1, slackX: 0, slackY: 0 },
            it = Boolean(Q.props.position);
          if (it) {
            var Ve = Q.props.position,
              ut = Ve.x,
              J = Ve.y;
            (Ee.x = ut), (Ee.y = J);
          }
          Q.setState(Ee);
        }),
        (Q.state = {
          dragging: !1,
          dragged: !1,
          x: q.position ? q.position.x : q.defaultPosition.x,
          y: q.position ? q.position.y : q.defaultPosition.y,
          prevPropsPosition: N({}, q.position),
          slackX: 0,
          slackY: 0,
          isElementSVG: !1,
        }),
        q.position &&
          !(q.onDrag || q.onStop) &&
          console.warn(
            'A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.',
          ),
        Q
      );
    }
    return (
      ae(
        B,
        [
          {
            key: 'componentDidMount',
            value: function () {
              typeof window.SVGElement != 'undefined' &&
                this.findDOMNode() instanceof window.SVGElement &&
                this.setState({ isElementSVG: !0 });
            },
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              this.setState({ dragging: !1 });
            },
          },
          {
            key: 'findDOMNode',
            value: function () {
              var Q, le, de;
              return (Q =
                (le = this.props) === null ||
                le === void 0 ||
                (de = le.nodeRef) === null ||
                de === void 0
                  ? void 0
                  : de.current) !== null && Q !== void 0
                ? Q
                : i.default.findDOMNode(this);
            },
          },
          {
            key: 'render',
            value: function () {
              var Q,
                le = this.props;
              le.axis, le.bounds;
              var de = le.children,
                pe = le.defaultPosition,
                Ee = le.defaultClassName,
                it = le.defaultClassNameDragging,
                Ve = le.defaultClassNameDragged,
                ut = le.position,
                J = le.positionOffset;
              le.scale;
              var te = m(le, x),
                ie = {},
                G = null,
                ye = Boolean(ut),
                be = !ye || this.state.dragging,
                Xe = ut || pe,
                Fe = {
                  x: (0, c.canDragX)(this) && be ? this.state.x : Xe.x,
                  y: (0, c.canDragY)(this) && be ? this.state.y : Xe.y,
                };
              this.state.isElementSVG
                ? (G = (0, l.createSVGTransform)(Fe, J))
                : (ie = (0, l.createCSSTransform)(Fe, J));
              var nt = (0, u.default)(
                de.props.className || '',
                Ee,
                ((Q = {}), ue(Q, it, this.state.dragging), ue(Q, Ve, this.state.dragged), Q),
              );
              return n.createElement(
                p.default,
                _({}, te, {
                  onStart: this.onDragStart,
                  onDrag: this.onDrag,
                  onStop: this.onDragStop,
                }),
                n.cloneElement(n.Children.only(de), {
                  className: nt,
                  style: N(N({}, de.props.style), ie),
                  transform: G,
                }),
              );
            },
          },
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function (Q, le) {
              var de = Q.position,
                pe = le.prevPropsPosition;
              return de && (!pe || de.x !== pe.x || de.y !== pe.y)
                ? ((0, h.default)('Draggable: getDerivedStateFromProps %j', {
                    position: de,
                    prevPropsPosition: pe,
                  }),
                  { x: de.x, y: de.y, prevPropsPosition: N({}, de) })
                : null;
            },
          },
        ],
      ),
      B
    );
  })(n.Component);
  (e.default = j),
    ue(j, 'displayName', 'Draggable'),
    ue(
      j,
      'propTypes',
      N(
        N({}, p.default.propTypes),
        {},
        {
          axis: r.default.oneOf(['both', 'x', 'y', 'none']),
          bounds: r.default.oneOfType([
            r.default.shape({
              left: r.default.number,
              right: r.default.number,
              top: r.default.number,
              bottom: r.default.number,
            }),
            r.default.string,
            r.default.oneOf([!1]),
          ]),
          defaultClassName: r.default.string,
          defaultClassNameDragging: r.default.string,
          defaultClassNameDragged: r.default.string,
          defaultPosition: r.default.shape({ x: r.default.number, y: r.default.number }),
          positionOffset: r.default.shape({
            x: r.default.oneOfType([r.default.number, r.default.string]),
            y: r.default.oneOfType([r.default.number, r.default.string]),
          }),
          position: r.default.shape({ x: r.default.number, y: r.default.number }),
          className: f.dontSetMe,
          style: f.dontSetMe,
          transform: f.dontSetMe,
        },
      ),
    ),
    ue(
      j,
      'defaultProps',
      N(
        N({}, p.default.defaultProps),
        {},
        {
          axis: 'both',
          bounds: !1,
          defaultClassName: 'react-draggable',
          defaultClassNameDragging: 'react-draggable-dragging',
          defaultClassNameDragged: 'react-draggable-dragged',
          defaultPosition: { x: 0, y: 0 },
          scale: 1,
        },
      ),
    );
})(cb);
var Eb = cb,
  _b = Eb.default,
  E4 = Eb.DraggableCore;
Mf.exports = _b;
Mf.exports.default = _b;
var _4 = (Mf.exports.DraggableCore = E4),
  x4 = Mf.exports;
function Hw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Bw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hw(Object(n), !0).forEach(function (r) {
          an(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Hw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var b4 = function (e) {
    var t = e.onSelectionDragStart,
      n = e.onSelectionDrag,
      r = e.onSelectionDragStop,
      i = e.onSelectionContextMenu,
      u = Pe(function (V) {
        return V.transform;
      }),
      l = Ht(u, 3),
      c = l[0],
      f = l[1],
      p = l[2],
      h = Pe(function (V) {
        return V.selectedNodesBbox;
      }),
      x = Pe(function (V) {
        return V.selectionActive;
      }),
      S = Pe(function (V) {
        return V.selectedElements;
      }),
      b = Pe(function (V) {
        return V.snapToGrid;
      }),
      E = Pe(function (V) {
        return V.snapGrid;
      }),
      _ = Pe(function (V) {
        return V.nodes;
      }),
      m = Ie(function (V) {
        return V.updateNodePosDiff;
      }),
      v = T.exports.useRef(null),
      w = T.exports.useMemo(
        function () {
          return b ? E : [1, 1];
        },
        [b, E],
      ),
      N = T.exports.useMemo(
        function () {
          return S
            ? S.filter(Oa).map(function (V) {
                var fe = _.find(function (ae) {
                  return ae.id === V.id;
                });
                return Bw(Bw({}, fe), {}, { position: fe == null ? void 0 : fe.__rf.position });
              })
            : [];
        },
        [S, _],
      ),
      g = T.exports.useMemo(
        function () {
          return {
            transform: 'translate('.concat(c, 'px,').concat(f, 'px) scale(').concat(p, ')'),
          };
        },
        [c, f, p],
      ),
      M = T.exports.useMemo(
        function () {
          return { width: h.width, height: h.height, top: h.y, left: h.x };
        },
        [h],
      ),
      P = T.exports.useCallback(
        function (V) {
          t == null || t(V, N);
        },
        [t, N],
      ),
      H = T.exports.useCallback(
        function (V, fe) {
          n && n(V, N), m({ diff: { x: fe.deltaX, y: fe.deltaY }, isDragging: !0 });
        },
        [n, N, m],
      ),
      F = T.exports.useCallback(
        function (V) {
          m({ isDragging: !1 }), r == null || r(V, N);
        },
        [N, r],
      ),
      U = T.exports.useCallback(
        function (V) {
          var fe = S
            ? S.filter(Oa).map(function (ae) {
                return _.find(function (he) {
                  return he.id === ae.id;
                });
              })
            : [];
          i == null || i(V, fe);
        },
        [i],
      );
    return !S || x
      ? null
      : L('div', {
          className: 'react-flow__nodesselection',
          style: g,
          children: L(x4, {
            scale: p,
            grid: w,
            onStart: function (fe) {
              return P(fe);
            },
            onDrag: function (fe, ae) {
              return H(fe, ae);
            },
            onStop: function (fe) {
              return F(fe);
            },
            nodeRef: v,
            enableUserSelectHack: !1,
            children: L('div', {
              ref: v,
              className: 'react-flow__nodesselection-rect',
              onContextMenu: U,
              style: M,
            }),
          }),
        });
  },
  xb = function (t) {
    var n = t.children,
      r = t.onPaneClick,
      i = t.onPaneContextMenu,
      u = t.onPaneScroll,
      l = t.onElementsRemove,
      c = t.deleteKeyCode,
      f = t.onMove,
      p = t.onMoveStart,
      h = t.onMoveEnd,
      x = t.selectionKeyCode,
      S = t.multiSelectionKeyCode,
      b = t.zoomActivationKeyCode,
      E = t.elementsSelectable,
      _ = t.zoomOnScroll,
      m = t.zoomOnPinch,
      v = t.panOnScroll,
      w = t.panOnScrollSpeed,
      N = t.panOnScrollMode,
      g = t.zoomOnDoubleClick,
      M = t.paneMoveable,
      P = t.defaultPosition,
      H = t.defaultZoom,
      F = t.translateExtent,
      U = t.preventScrolling,
      V = t.onSelectionDragStart,
      fe = t.onSelectionDrag,
      ae = t.onSelectionDragStop,
      he = t.onSelectionContextMenu,
      R = Ie(function (j) {
        return j.unsetNodesSelection;
      }),
      Y = Ie(function (j) {
        return j.resetSelectedElements;
      }),
      W = Pe(function (j) {
        return j.nodesSelectionActive;
      }),
      X = Bc(x);
    qR({ onElementsRemove: l, deleteKeyCode: c, multiSelectionKeyCode: S });
    var ne = T.exports.useCallback(
        function (j) {
          r == null || r(j), R(), Y();
        },
        [r],
      ),
      ce = T.exports.useCallback(
        function (j) {
          i == null || i(j);
        },
        [i],
      ),
      ue = T.exports.useCallback(
        function (j) {
          u == null || u(j);
        },
        [u],
      );
    return xe(bH, {
      onMove: f,
      onMoveStart: p,
      onMoveEnd: h,
      selectionKeyPressed: X,
      elementsSelectable: E,
      zoomOnScroll: _,
      zoomOnPinch: m,
      panOnScroll: v,
      panOnScrollSpeed: w,
      panOnScrollMode: N,
      zoomOnDoubleClick: g,
      paneMoveable: M,
      defaultPosition: P,
      defaultZoom: H,
      translateExtent: F,
      zoomActivationKeyCode: b,
      preventScrolling: U,
      children: [
        n,
        L(OH, { selectionKeyPressed: X }),
        W &&
          L(b4, {
            onSelectionDragStart: V,
            onSelectionDrag: fe,
            onSelectionDragStop: ae,
            onSelectionContextMenu: he,
          }),
        L('div', { className: 'react-flow__pane', onClick: ne, onContextMenu: ce, onWheel: ue }),
      ],
    });
  };
xb.displayName = 'FlowRenderer';
var C4 = T.exports.memo(xb),
  bb = function (t) {
    var n = Pe(function (E) {
        return E.transform;
      }),
      r = Pe(function (E) {
        return E.selectedElements;
      }),
      i = Pe(function (E) {
        return E.nodesDraggable;
      }),
      u = Pe(function (E) {
        return E.nodesConnectable;
      }),
      l = Pe(function (E) {
        return E.elementsSelectable;
      }),
      c = Pe(function (E) {
        return E.width;
      }),
      f = Pe(function (E) {
        return E.height;
      }),
      p = Pe(function (E) {
        return E.nodes;
      }),
      h = Ie(function (E) {
        return E.updateNodeDimensions;
      }),
      x = t.onlyRenderVisibleElements ? Lx(p, { x: 0, y: 0, width: c, height: f }, n, !0) : p,
      S = T.exports.useMemo(
        function () {
          return {
            transform: 'translate('
              .concat(n[0], 'px,')
              .concat(n[1], 'px) scale(')
              .concat(n[2], ')'),
          };
        },
        [n[0], n[1], n[2]],
      ),
      b = T.exports.useMemo(function () {
        return typeof ResizeObserver == 'undefined'
          ? null
          : new ResizeObserver(function (E) {
              var _ = E.map(function (m) {
                return { id: m.target.getAttribute('data-id'), nodeElement: m.target };
              });
              h(_);
            });
      }, []);
    return L('div', {
      className: 'react-flow__nodes',
      style: S,
      children: x.map(function (E) {
        var _ = E.type || 'default',
          m = t.nodeTypes[_] || t.nodeTypes.default;
        t.nodeTypes[_] ||
          console.warn('Node type "'.concat(_, '" not found. Using fallback type "default".'));
        var v = !!(E.draggable || (i && typeof E.draggable == 'undefined')),
          w = !!(E.selectable || (l && typeof E.selectable == 'undefined')),
          N = !!(E.connectable || (u && typeof E.connectable == 'undefined'));
        return L(
          m,
          {
            id: E.id,
            className: E.className,
            style: E.style,
            type: _,
            data: E.data,
            sourcePosition: E.sourcePosition,
            targetPosition: E.targetPosition,
            isHidden: E.isHidden,
            xPos: E.__rf.position.x,
            yPos: E.__rf.position.y,
            isDragging: E.__rf.isDragging,
            isInitialized: E.__rf.width !== null && E.__rf.height !== null,
            snapGrid: t.snapGrid,
            snapToGrid: t.snapToGrid,
            selectNodesOnDrag: t.selectNodesOnDrag,
            onClick: t.onElementClick,
            onMouseEnter: t.onNodeMouseEnter,
            onMouseMove: t.onNodeMouseMove,
            onMouseLeave: t.onNodeMouseLeave,
            onContextMenu: t.onNodeContextMenu,
            onNodeDoubleClick: t.onNodeDoubleClick,
            onNodeDragStart: t.onNodeDragStart,
            onNodeDrag: t.onNodeDrag,
            onNodeDragStop: t.onNodeDragStop,
            scale: n[2],
            selected:
              (r == null
                ? void 0
                : r.some(function (g) {
                    var M = g.id;
                    return M === E.id;
                  })) || !1,
            isDraggable: v,
            isSelectable: w,
            isConnectable: N,
            resizeObserver: b,
            dragHandle: E.dragHandle,
          },
          E.id,
        );
      }),
    });
  };
bb.displayName = 'NodeRenderer';
var O4 = T.exports.memo(bb),
  N4 = [
    'x',
    'y',
    'label',
    'labelStyle',
    'labelShowBg',
    'labelBgStyle',
    'labelBgPadding',
    'labelBgBorderRadius',
    'children',
    'className',
  ];
function Fw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function T4(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fw(Object(n), !0).forEach(function (r) {
          an(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Fw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var M4 = function (t) {
    var n = t.x,
      r = t.y,
      i = t.label,
      u = t.labelStyle,
      l = u === void 0 ? {} : u,
      c = t.labelShowBg,
      f = c === void 0 ? !0 : c,
      p = t.labelBgStyle,
      h = p === void 0 ? {} : p,
      x = t.labelBgPadding,
      S = x === void 0 ? [2, 4] : x,
      b = t.labelBgBorderRadius,
      E = b === void 0 ? 2 : b,
      _ = t.children,
      m = t.className,
      v = hf(t, N4),
      w = T.exports.useRef(null),
      N = T.exports.useState({ x: 0, y: 0, width: 0, height: 0 }),
      g = Ht(N, 2),
      M = g[0],
      P = g[1],
      H = tr(['react-flow__edge-textwrapper', m]);
    return (
      T.exports.useEffect(
        function () {
          if (w.current) {
            var F = w.current.getBBox();
            P({ x: F.x, y: F.y, width: F.width, height: F.height });
          }
        },
        [i],
      ),
      typeof i == 'undefined' || !i
        ? null
        : xe(
            'g',
            at(
              Ze(
                {},
                T4(
                  {
                    transform: 'translate('
                      .concat(n - M.width / 2, ' ')
                      .concat(r - M.height / 2, ')'),
                    className: H,
                  },
                  v,
                ),
              ),
              {
                children: [
                  f &&
                    L('rect', {
                      width: M.width + 2 * S[0],
                      x: -S[0],
                      y: -S[1],
                      height: M.height + 2 * S[1],
                      className: 'react-flow__edge-textbg',
                      style: h,
                      rx: E,
                      ry: E,
                    }),
                  L('text', {
                    className: 'react-flow__edge-text',
                    y: M.height / 2,
                    dy: '0.3em',
                    ref: w,
                    style: l,
                    children: i,
                  }),
                  _,
                ],
              },
            ),
          )
    );
  },
  kf = T.exports.memo(M4),
  Ug = function (t, n) {
    return typeof n != 'undefined' && n
      ? 'url(#'.concat(n, ')')
      : typeof t != 'undefined'
      ? 'url(#react-flow__'.concat(t, ')')
      : 'none';
  },
  $w = [De.Left, De.Right],
  Ol = function (t) {
    var n = t.sourceX,
      r = t.sourceY,
      i = t.targetX,
      u = t.targetY,
      l = t.sourcePosition,
      c = l === void 0 ? De.Bottom : l,
      f = t.targetPosition,
      p = f === void 0 ? De.Top : f,
      h = $w.includes(c),
      x = $w.includes(p),
      S = (h && !x) || (x && !h);
    if (S) {
      var b = h ? Math.abs(i - n) : 0,
        E = n > i ? n - b : n + b,
        _ = h ? 0 : Math.abs(u - r),
        m = r < u ? r + _ : r - _;
      return [E, m, b, _];
    }
    var v = Math.abs(i - n) / 2,
      w = i < n ? i + v : i - v,
      N = Math.abs(u - r) / 2,
      g = u < r ? u + N : u - N;
    return [w, g, v, N];
  };
function jg(e) {
  var t = e.sourceX,
    n = e.sourceY,
    r = e.sourcePosition,
    i = r === void 0 ? De.Bottom : r,
    u = e.targetX,
    l = e.targetY,
    c = e.targetPosition,
    f = c === void 0 ? De.Top : c,
    p = e.centerX,
    h = e.centerY,
    x = Ol({ sourceX: t, sourceY: n, targetX: u, targetY: l }),
    S = Ht(x, 2),
    b = S[0],
    E = S[1],
    _ = [De.Left, De.Right],
    m = typeof p != 'undefined' ? p : b,
    v = typeof h != 'undefined' ? h : E,
    w = 'M'
      .concat(t, ',')
      .concat(n, ' C')
      .concat(t, ',')
      .concat(v, ' ')
      .concat(u, ',')
      .concat(v, ' ')
      .concat(u, ',')
      .concat(l);
  return (
    _.includes(i) && _.includes(f)
      ? (w = 'M'
          .concat(t, ',')
          .concat(n, ' C')
          .concat(m, ',')
          .concat(n, ' ')
          .concat(m, ',')
          .concat(l, ' ')
          .concat(u, ',')
          .concat(l))
      : _.includes(f)
      ? (w = 'M'
          .concat(t, ',')
          .concat(n, ' Q')
          .concat(t, ',')
          .concat(l, ' ')
          .concat(u, ',')
          .concat(l))
      : _.includes(i) &&
        (w = 'M'
          .concat(t, ',')
          .concat(n, ' Q')
          .concat(u, ',')
          .concat(n, ' ')
          .concat(u, ',')
          .concat(l)),
    w
  );
}
var iv = T.exports.memo(function (e) {
    var t = e.sourceX,
      n = e.sourceY,
      r = e.targetX,
      i = e.targetY,
      u = e.sourcePosition,
      l = u === void 0 ? De.Bottom : u,
      c = e.targetPosition,
      f = c === void 0 ? De.Top : c,
      p = e.label,
      h = e.labelStyle,
      x = e.labelShowBg,
      S = e.labelBgStyle,
      b = e.labelBgPadding,
      E = e.labelBgBorderRadius,
      _ = e.style,
      m = e.arrowHeadType,
      v = e.markerEndId,
      w = Ol({
        sourceX: t,
        sourceY: n,
        targetX: r,
        targetY: i,
        sourcePosition: l,
        targetPosition: f,
      }),
      N = Ht(w, 2),
      g = N[0],
      M = N[1],
      P = jg({
        sourceX: t,
        sourceY: n,
        sourcePosition: l,
        targetX: r,
        targetY: i,
        targetPosition: f,
      }),
      H = p
        ? L(kf, {
            x: g,
            y: M,
            label: p,
            labelStyle: h,
            labelShowBg: x,
            labelBgStyle: S,
            labelBgPadding: b,
            labelBgBorderRadius: E,
          })
        : null,
      F = Ug(m, v);
    return xe(Tt, {
      children: [
        L('path', { style: _, d: P, className: 'react-flow__edge-path', markerEnd: F }),
        H,
      ],
    });
  }),
  Lp = function (t, n, r) {
    return 'L '
      .concat(t, ',')
      .concat(n - r, 'Q ')
      .concat(t, ',')
      .concat(n, ' ')
      .concat(t + r, ',')
      .concat(n);
  },
  Hp = function (t, n, r) {
    return 'L '
      .concat(t + r, ',')
      .concat(n, 'Q ')
      .concat(t, ',')
      .concat(n, ' ')
      .concat(t, ',')
      .concat(n - r);
  },
  Bp = function (t, n, r) {
    return 'L '
      .concat(t, ',')
      .concat(n - r, 'Q ')
      .concat(t, ',')
      .concat(n, ' ')
      .concat(t - r, ',')
      .concat(n);
  },
  Fp = function (t, n, r) {
    return 'L '
      .concat(t - r, ',')
      .concat(n, 'Q ')
      .concat(t, ',')
      .concat(n, ' ')
      .concat(t, ',')
      .concat(n - r);
  },
  $p = function (t, n, r) {
    return 'L '
      .concat(t + r, ',')
      .concat(n, 'Q ')
      .concat(t, ',')
      .concat(n, ' ')
      .concat(t, ',')
      .concat(n + r);
  },
  zp = function (t, n, r) {
    return 'L '
      .concat(t, ',')
      .concat(n + r, 'Q ')
      .concat(t, ',')
      .concat(n, ' ')
      .concat(t + r, ',')
      .concat(n);
  },
  Up = function (t, n, r) {
    return 'L '
      .concat(t, ',')
      .concat(n + r, 'Q ')
      .concat(t, ',')
      .concat(n, ' ')
      .concat(t - r, ',')
      .concat(n);
  },
  jp = function (t, n, r) {
    return 'L '
      .concat(t - r, ',')
      .concat(n, 'Q ')
      .concat(t, ',')
      .concat(n, ' ')
      .concat(t, ',')
      .concat(n + r);
  };
function av(e) {
  var t = e.sourceX,
    n = e.sourceY,
    r = e.sourcePosition,
    i = r === void 0 ? De.Bottom : r,
    u = e.targetX,
    l = e.targetY,
    c = e.targetPosition,
    f = c === void 0 ? De.Top : c,
    p = e.borderRadius,
    h = p === void 0 ? 5 : p,
    x = e.centerX,
    S = e.centerY,
    b = Ol({ sourceX: t, sourceY: n, targetX: u, targetY: l }),
    E = Ht(b, 4),
    _ = E[0],
    m = E[1],
    v = E[2],
    w = E[3],
    N = Math.min(h, Math.abs(u - t)),
    g = Math.min(h, Math.abs(l - n)),
    M = Math.min(N, g, v, w),
    P = [De.Left, De.Right],
    H = typeof x != 'undefined' ? x : _,
    F = typeof S != 'undefined' ? S : m,
    U = null,
    V = null;
  return (
    t <= u
      ? ((U = n <= l ? Lp(t, F, M) : zp(t, F, M)), (V = n <= l ? jp(u, F, M) : Fp(u, F, M)))
      : ((U = n < l ? Bp(t, F, M) : Up(t, F, M)), (V = n < l ? $p(u, F, M) : Hp(u, F, M))),
    P.includes(i) && P.includes(f)
      ? t <= u
        ? ((U = n <= l ? jp(H, n, M) : Fp(H, n, M)), (V = n <= l ? Lp(H, l, M) : zp(H, l, M)))
        : ((i === De.Right && f === De.Left) ||
            (i === De.Left && f === De.Right) ||
            (i === De.Left && f === De.Left)) &&
          ((U = n <= l ? $p(H, n, M) : Hp(H, n, M)), (V = n <= l ? Bp(H, l, M) : Up(H, l, M)))
      : P.includes(i) && !P.includes(f)
      ? (t <= u
          ? (U = n <= l ? jp(u, n, M) : Fp(u, n, M))
          : (U = n <= l ? $p(u, n, M) : Hp(u, n, M)),
        (V = ''))
      : !P.includes(i) &&
        P.includes(f) &&
        (t <= u
          ? (U = n <= l ? Lp(t, l, M) : zp(t, l, M))
          : (U = n <= l ? Bp(t, l, M) : Up(t, l, M)),
        (V = '')),
    'M '.concat(t, ',').concat(n).concat(U).concat(V, 'L ').concat(u, ',').concat(l)
  );
}
var Wg = T.exports.memo(function (e) {
    var t = e.sourceX,
      n = e.sourceY,
      r = e.targetX,
      i = e.targetY,
      u = e.label,
      l = e.labelStyle,
      c = e.labelShowBg,
      f = e.labelBgStyle,
      p = e.labelBgPadding,
      h = e.labelBgBorderRadius,
      x = e.style,
      S = e.sourcePosition,
      b = S === void 0 ? De.Bottom : S,
      E = e.targetPosition,
      _ = E === void 0 ? De.Top : E,
      m = e.arrowHeadType,
      v = e.markerEndId,
      w = e.borderRadius,
      N = w === void 0 ? 5 : w,
      g = Ol({
        sourceX: t,
        sourceY: n,
        targetX: r,
        targetY: i,
        sourcePosition: b,
        targetPosition: _,
      }),
      M = Ht(g, 2),
      P = M[0],
      H = M[1],
      F = av({
        sourceX: t,
        sourceY: n,
        sourcePosition: b,
        targetX: r,
        targetY: i,
        targetPosition: _,
        borderRadius: N,
      }),
      U = Ug(m, v),
      V = u
        ? L(kf, {
            x: P,
            y: H,
            label: u,
            labelStyle: l,
            labelShowBg: c,
            labelBgStyle: f,
            labelBgPadding: p,
            labelBgBorderRadius: h,
          })
        : null;
    return xe(Tt, {
      children: [
        L('path', { style: x, className: 'react-flow__edge-path', d: F, markerEnd: U }),
        V,
      ],
    });
  }),
  P4 = function (t, n, r) {
    var i = r === 'source' ? 'target' : 'source',
      u = n.__rf.handleBounds[r] || n.__rf.handleBounds[i];
    return t
      ? u.find(function (l) {
          return l.id === t;
        })
      : u[0];
  },
  A4 = function (e) {
    var t = e.connectionNodeId,
      n = e.connectionHandleId,
      r = e.connectionHandleType,
      i = e.connectionLineStyle,
      u = e.connectionPositionX,
      l = e.connectionPositionY,
      c = e.connectionLineType,
      f = c === void 0 ? gi.Bezier : c,
      p = e.nodes,
      h = p === void 0 ? [] : p,
      x = e.transform,
      S = e.isConnectable,
      b = e.CustomConnectionLineComponent,
      E = T.exports.useState(null),
      _ = Ht(E, 2),
      m = _[0],
      v = _[1],
      w = t,
      N = n;
    if (
      (T.exports.useEffect(function () {
        var R =
          h.find(function (Y) {
            return Y.id === w;
          }) || null;
        v(R);
      }, []),
      !m || !S)
    )
      return null;
    var g = P4(N, m, r),
      M = g ? g.x + g.width / 2 : m.__rf.width / 2,
      P = g ? g.y + g.height / 2 : m.__rf.height,
      H = m.__rf.position.x + M,
      F = m.__rf.position.y + P,
      U = (u - x[0]) / x[2],
      V = (l - x[1]) / x[2],
      fe =
        (g == null ? void 0 : g.position) === De.Left ||
        (g == null ? void 0 : g.position) === De.Right,
      ae = fe ? De.Left : De.Top;
    if (b)
      return L('g', {
        className: 'react-flow__connection',
        children: L(b, {
          sourceX: H,
          sourceY: F,
          sourcePosition: g == null ? void 0 : g.position,
          targetX: U,
          targetY: V,
          targetPosition: ae,
          connectionLineType: f,
          connectionLineStyle: i,
          sourceNode: m,
          sourceHandle: g,
        }),
      });
    var he = '';
    return (
      f === gi.Bezier
        ? (he = jg({
            sourceX: H,
            sourceY: F,
            sourcePosition: g == null ? void 0 : g.position,
            targetX: U,
            targetY: V,
            targetPosition: ae,
          }))
        : f === gi.Step
        ? (he = av({
            sourceX: H,
            sourceY: F,
            sourcePosition: g == null ? void 0 : g.position,
            targetX: U,
            targetY: V,
            targetPosition: ae,
            borderRadius: 0,
          }))
        : f === gi.SmoothStep
        ? (he = av({
            sourceX: H,
            sourceY: F,
            sourcePosition: g == null ? void 0 : g.position,
            targetX: U,
            targetY: V,
            targetPosition: ae,
          }))
        : (he = 'M'.concat(H, ',').concat(F, ' ').concat(U, ',').concat(V)),
      L('g', {
        className: 'react-flow__connection',
        children: L('path', { d: he, className: 'react-flow__connection-path', style: i }),
      })
    );
  },
  zw = function (t) {
    var n = t.id,
      r = t.children;
    return L('marker', {
      className: 'react-flow__arrowhead',
      id: n,
      markerWidth: '12.5',
      markerHeight: '12.5',
      viewBox: '-10 -10 20 20',
      orient: 'auto',
      refX: '0',
      refY: '0',
      children: r,
    });
  },
  Cb = function (t) {
    var n = t.color;
    return xe('defs', {
      children: [
        L(zw, {
          id: 'react-flow__arrowclosed',
          children: L('polyline', {
            stroke: n,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1',
            fill: n,
            points: '-5,-4 0,0 -5,4 -5,-4',
          }),
        }),
        L(zw, {
          id: 'react-flow__arrow',
          children: L('polyline', {
            stroke: n,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.5',
            fill: 'none',
            points: '-5,-4 0,0 -5,4',
          }),
        }),
      ],
    });
  };
Cb.displayName = 'MarkerDefinitions';
function Uw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function jw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Uw(Object(n), !0).forEach(function (r) {
          an(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Uw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var Ob = T.exports.memo(function (e) {
    return L(Wg, Ze({}, jw(jw({}, e), {}, { borderRadius: 0 })));
  }),
  Nb = T.exports.memo(function (e) {
    var t = e.sourceX,
      n = e.sourceY,
      r = e.targetX,
      i = e.targetY,
      u = e.label,
      l = e.labelStyle,
      c = e.labelShowBg,
      f = e.labelBgStyle,
      p = e.labelBgPadding,
      h = e.labelBgBorderRadius,
      x = e.style,
      S = e.arrowHeadType,
      b = e.markerEndId,
      E = Math.abs(i - n) / 2,
      _ = i < n ? i + E : i - E,
      m = Math.abs(r - t) / 2,
      v = r < t ? r + m : r - m,
      w = Ug(S, b),
      N = u
        ? L(kf, {
            x: v,
            y: _,
            label: u,
            labelStyle: l,
            labelShowBg: c,
            labelBgStyle: f,
            labelBgPadding: p,
            labelBgBorderRadius: h,
          })
        : null;
    return xe(Tt, {
      children: [
        L('path', {
          style: x,
          className: 'react-flow__edge-path',
          d: 'M '.concat(t, ',').concat(n, 'L ').concat(r, ',').concat(i),
          markerEnd: w,
        }),
        N,
      ],
    });
  });
function Ww(e, t, n, r, i, u, l) {
  var c = l.elementFromPoint(e.clientX, e.clientY),
    f = (c == null ? void 0 : c.classList.contains('target')) || !1,
    p = (c == null ? void 0 : c.classList.contains('source')) || !1,
    h = {
      elementBelow: c,
      isValid: !1,
      connection: { source: null, target: null, sourceHandle: null, targetHandle: null },
      isHoveringHandle: !1,
    };
  if (c && (f || p)) {
    h.isHoveringHandle = !0;
    var x = t === Pa.Strict ? (n && p) || (!n && f) : !0;
    if (x) {
      var S = c.getAttribute('data-nodeid'),
        b = c.getAttribute('data-handleid'),
        E = n
          ? { source: S, sourceHandle: b, target: r, targetHandle: i }
          : { source: r, sourceHandle: i, target: S, targetHandle: b };
      (h.connection = E), (h.isValid = u(E));
    }
  }
  return h;
}
function Yw(e) {
  e == null || e.classList.remove('react-flow__handle-valid'),
    e == null || e.classList.remove('react-flow__handle-connecting');
}
function Tb(e, t, n, r, i, u, l, c, f, p, h, x, S, b) {
  var E = e.target.closest('.react-flow'),
    _ = zR(e.target);
  if (!_) return;
  var m = _.elementFromPoint(e.clientX, e.clientY),
    v = m == null ? void 0 : m.classList.contains('target'),
    w = m == null ? void 0 : m.classList.contains('source');
  if (!E || (!v && !w && !p)) return;
  var N = p || (v ? 'target' : 'source'),
    g = E.getBoundingClientRect(),
    M;
  i({ x: e.clientX - g.left, y: e.clientY - g.top }),
    r({ connectionNodeId: n, connectionHandleId: t, connectionHandleType: N }),
    x == null || x(e, { nodeId: n, handleId: t, handleType: N });
  function P(F) {
    i({ x: F.clientX - g.left, y: F.clientY - g.top });
    var U = Ww(F, f, l, n, t, c, _),
      V = U.connection,
      fe = U.elementBelow,
      ae = U.isValid,
      he = U.isHoveringHandle;
    if (!he) return Yw(M);
    var R = V.source === V.target;
    !R &&
      fe &&
      ((M = fe),
      fe.classList.add('react-flow__handle-connecting'),
      fe.classList.toggle('react-flow__handle-valid', ae));
  }
  function H(F) {
    var U = Ww(F, f, l, n, t, c, _),
      V = U.connection,
      fe = U.isValid;
    S == null || S(F),
      fe && (u == null || u(V)),
      b == null || b(F),
      p && h && h(F),
      Yw(M),
      r({ connectionNodeId: null, connectionHandleId: null, connectionHandleType: null }),
      _.removeEventListener('mousemove', P),
      _.removeEventListener('mouseup', H);
  }
  _.addEventListener('mousemove', P), _.addEventListener('mouseup', H);
}
var D4 = function (t, n, r) {
    return r === De.Left ? t - n : r === De.Right ? t + n : t;
  },
  k4 = function (t, n, r) {
    return r === De.Top ? t - n : r === De.Bottom ? t + n : t;
  },
  Vw = function (t) {
    var n = t.className,
      r = t.position,
      i = t.centerX,
      u = t.centerY,
      l = t.radius,
      c = l === void 0 ? 10 : l;
    return L('circle', {
      className: tr(['react-flow__edgeupdater', n]),
      cx: D4(i, c, r),
      cy: k4(u, c, r),
      r: c,
      stroke: 'transparent',
      fill: 'transparent',
    });
  },
  wu = function (e) {
    var t = function (r) {
      var i = r.id,
        u = r.className,
        l = r.type,
        c = r.data,
        f = r.onClick,
        p = r.onEdgeDoubleClick,
        h = r.selected,
        x = r.animated,
        S = r.label,
        b = r.labelStyle,
        E = r.labelShowBg,
        _ = r.labelBgStyle,
        m = r.labelBgPadding,
        v = r.labelBgBorderRadius,
        w = r.style,
        N = r.arrowHeadType,
        g = r.source,
        M = r.target,
        P = r.sourceX,
        H = r.sourceY,
        F = r.targetX,
        U = r.targetY,
        V = r.sourcePosition,
        fe = r.targetPosition,
        ae = r.elementsSelectable,
        he = r.markerEndId,
        R = r.isHidden,
        Y = r.sourceHandleId,
        W = r.targetHandleId,
        X = r.handleEdgeUpdate,
        ne = r.onConnectEdge,
        ce = r.onContextMenu,
        ue = r.onMouseEnter,
        j = r.onMouseMove,
        k = r.onMouseLeave,
        D = r.edgeUpdaterRadius,
        B = r.onEdgeUpdateStart,
        q = r.onEdgeUpdateEnd,
        Q = Ie(function (Ae) {
          return Ae.addSelectedElements;
        }),
        le = Ie(function (Ae) {
          return Ae.setConnectionNodeId;
        }),
        de = Ie(function (Ae) {
          return Ae.unsetNodesSelection;
        }),
        pe = Ie(function (Ae) {
          return Ae.setConnectionPosition;
        }),
        Ee = Pe(function (Ae) {
          return Ae.connectionMode;
        }),
        it = T.exports.useState(!1),
        Ve = Ht(it, 2),
        ut = Ve[0],
        J = Ve[1],
        te = !ae && !f,
        ie = tr([
          'react-flow__edge',
          'react-flow__edge-'.concat(l),
          u,
          { selected: h, animated: x, inactive: te, updating: ut },
        ]),
        G = T.exports.useMemo(
          function () {
            var Ae = { id: i, source: g, target: M, type: l };
            return (
              Y && (Ae.sourceHandle = Y),
              W && (Ae.targetHandle = W),
              typeof c != 'undefined' && (Ae.data = c),
              Ae
            );
          },
          [i, g, M, l, Y, W, c],
        ),
        ye = T.exports.useCallback(
          function (Ae) {
            ae && (de(), Q(G)), f == null || f(Ae, G);
          },
          [ae, G, f],
        ),
        be = T.exports.useCallback(
          function (Ae) {
            p == null || p(Ae, G);
          },
          [G, p],
        ),
        Xe = T.exports.useCallback(
          function (Ae) {
            ce == null || ce(Ae, G);
          },
          [G, ce],
        ),
        Fe = T.exports.useCallback(
          function (Ae) {
            ue == null || ue(Ae, G);
          },
          [G, ce],
        ),
        nt = T.exports.useCallback(
          function (Ae) {
            j == null || j(Ae, G);
          },
          [G, ce],
        ),
        xt = T.exports.useCallback(
          function (Ae) {
            k == null || k(Ae, G);
          },
          [G, ce],
        ),
        ke = T.exports.useCallback(
          function (Ae, ln) {
            var In = ln ? M : g,
              nr = ln ? W : Y,
              Ln = function () {
                return !0;
              },
              K = ln;
            B == null || B(Ae, G);
            var we = q
              ? function (Ce) {
                  return q(Ce, G);
                }
              : void 0;
            Tb(Ae, nr, In, le, pe, ne, K, Ln, Ee, ln ? 'target' : 'source', we);
          },
          [i, g, M, l, Y, W, le, pe, G, ne],
        ),
        $e = T.exports.useCallback(
          function (Ae) {
            ke(Ae, !0);
          },
          [i, g, Y, ke],
        ),
        ht = T.exports.useCallback(
          function (Ae) {
            ke(Ae, !1);
          },
          [i, M, W, ke],
        ),
        yt = T.exports.useCallback(
          function () {
            return J(!0);
          },
          [J],
        ),
        bt = T.exports.useCallback(
          function () {
            return J(!1);
          },
          [J],
        );
      return R
        ? null
        : xe('g', {
            className: ie,
            onClick: ye,
            onDoubleClick: be,
            onContextMenu: Xe,
            onMouseEnter: Fe,
            onMouseMove: nt,
            onMouseLeave: xt,
            children: [
              L(e, {
                id: i,
                source: g,
                target: M,
                selected: h,
                animated: x,
                label: S,
                labelStyle: b,
                labelShowBg: E,
                labelBgStyle: _,
                labelBgPadding: m,
                labelBgBorderRadius: v,
                data: c,
                style: w,
                arrowHeadType: N,
                sourceX: P,
                sourceY: H,
                targetX: F,
                targetY: U,
                sourcePosition: V,
                targetPosition: fe,
                markerEndId: he,
                sourceHandleId: Y,
                targetHandleId: W,
              }),
              X &&
                L('g', {
                  onMouseDown: $e,
                  onMouseEnter: yt,
                  onMouseOut: bt,
                  children: L(Vw, { position: V, centerX: P, centerY: H, radius: D }),
                }),
              X &&
                L('g', {
                  onMouseDown: ht,
                  onMouseEnter: yt,
                  onMouseOut: bt,
                  children: L(Vw, { position: fe, centerX: F, centerY: U, radius: D }),
                }),
            ],
          });
    };
    return (t.displayName = 'EdgeWrapper'), T.exports.memo(t);
  };
function Xw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Gw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xw(Object(n), !0).forEach(function (r) {
          an(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Xw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function R4(e) {
  var t = {
      default: wu(e.default || iv),
      straight: wu(e.bezier || Nb),
      step: wu(e.step || Ob),
      smoothstep: wu(e.step || Wg),
    },
    n = {},
    r = Object.keys(e)
      .filter(function (i) {
        return !['default', 'bezier'].includes(i);
      })
      .reduce(function (i, u) {
        return (i[u] = wu(e[u] || iv)), i;
      }, n);
  return Gw(Gw({}, t), r);
}
function qw(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null,
    r = ((n == null ? void 0 : n.x) || 0) + t.__rf.position.x,
    i = ((n == null ? void 0 : n.y) || 0) + t.__rf.position.y,
    u = (n == null ? void 0 : n.width) || t.__rf.width,
    l = (n == null ? void 0 : n.height) || t.__rf.height;
  switch (e) {
    case De.Top:
      return { x: r + u / 2, y: i };
    case De.Right:
      return { x: r + u, y: i + l / 2 };
    case De.Bottom:
      return { x: r + u / 2, y: i + l };
    case De.Left:
      return { x: r, y: i + l / 2 };
  }
}
function Zw(e, t) {
  if (!e) return null;
  var n = null;
  return (
    e.length === 1 || !t
      ? (n = e[0])
      : t &&
        (n = e.find(function (r) {
          return r.id === t;
        })),
    typeof n == 'undefined' ? null : n
  );
}
var I4 = function (t, n, r, i, u, l) {
  var c = qw(r, t, n),
    f = qw(l, i, u);
  return { sourceX: c.x, sourceY: c.y, targetX: f.x, targetY: f.y };
};
function L4(e) {
  var t = e.sourcePos,
    n = e.targetPos,
    r = e.width,
    i = e.height,
    u = e.transform,
    l = {
      x: Math.min(t.x, n.x),
      y: Math.min(t.y, n.y),
      x2: Math.max(t.x, n.x),
      y2: Math.max(t.y, n.y),
    };
  l.x === l.x2 && (l.x2 += 1), l.y === l.y2 && (l.y2 += 1);
  var c = Na({ x: (0 - u[0]) / u[2], y: (0 - u[1]) / u[2], width: r / u[2], height: i / u[2] }),
    f = Math.max(0, Math.min(c.x2, l.x2) - Math.max(c.x, l.x)),
    p = Math.max(0, Math.min(c.y2, l.y2) - Math.max(c.y, l.y)),
    h = Math.ceil(f * p);
  return h > 0;
}
var H4 = function (t, n) {
    return n.reduce(
      function (r, i) {
        return i.id === t.source && (r.sourceNode = i), i.id === t.target && (r.targetNode = i), r;
      },
      { sourceNode: null, targetNode: null },
    );
  },
  B4 = function (t) {
    var n = t.edge,
      r = t.props,
      i = t.nodes,
      u = t.selectedElements,
      l = t.elementsSelectable,
      c = t.transform,
      f = t.width,
      p = t.height,
      h = t.onlyRenderVisibleElements,
      x = t.connectionMode,
      S = n.sourceHandle || null,
      b = n.targetHandle || null,
      E = H4(n, i),
      _ = E.sourceNode,
      m = E.targetNode,
      v = T.exports.useCallback(
        function (X) {
          var ne;
          (ne = r.onEdgeUpdate) === null || ne === void 0 || ne.call(r, n, X);
        },
        [n, r.onEdgeUpdate],
      );
    if (!_)
      return (
        console.warn(
          "couldn't create edge for source id: ".concat(n.source, '; edge id: ').concat(n.id),
        ),
        null
      );
    if (!m)
      return (
        console.warn(
          "couldn't create edge for target id: ".concat(n.target, '; edge id: ').concat(n.id),
        ),
        null
      );
    if (!_.__rf.width || !m.__rf.width) return null;
    var w = n.type || 'default',
      N = r.edgeTypes[w] || r.edgeTypes.default,
      g = m.__rf.handleBounds,
      M = x === Pa.Strict ? g.target : g.target || g.source,
      P = Zw(_.__rf.handleBounds.source, S),
      H = Zw(M, b),
      F = P ? P.position : De.Bottom,
      U = H ? H.position : De.Top;
    if (!P)
      return (
        console.warn(
          "couldn't create edge for source handle id: ".concat(S, '; edge id: ').concat(n.id),
        ),
        null
      );
    if (!H)
      return (
        console.warn(
          "couldn't create edge for target handle id: ".concat(b, '; edge id: ').concat(n.id),
        ),
        null
      );
    var V = I4(_, P, F, m, H, U),
      fe = V.sourceX,
      ae = V.sourceY,
      he = V.targetX,
      R = V.targetY,
      Y = h
        ? L4({
            sourcePos: { x: fe, y: ae },
            targetPos: { x: he, y: R },
            width: f,
            height: p,
            transform: c,
          })
        : !0;
    if (!Y) return null;
    var W =
      (u == null
        ? void 0
        : u.some(function (X) {
            return Dx(X) && X.id === n.id;
          })) || !1;
    return L(
      N,
      {
        id: n.id,
        className: n.className,
        type: n.type,
        data: n.data,
        onClick: r.onElementClick,
        selected: W,
        animated: n.animated,
        label: n.label,
        labelStyle: n.labelStyle,
        labelShowBg: n.labelShowBg,
        labelBgStyle: n.labelBgStyle,
        labelBgPadding: n.labelBgPadding,
        labelBgBorderRadius: n.labelBgBorderRadius,
        style: n.style,
        arrowHeadType: n.arrowHeadType,
        source: n.source,
        target: n.target,
        sourceHandleId: S,
        targetHandleId: b,
        sourceX: fe,
        sourceY: ae,
        targetX: he,
        targetY: R,
        sourcePosition: F,
        targetPosition: U,
        elementsSelectable: l,
        markerEndId: r.markerEndId,
        isHidden: n.isHidden,
        onConnectEdge: v,
        handleEdgeUpdate: typeof r.onEdgeUpdate != 'undefined',
        onContextMenu: r.onEdgeContextMenu,
        onMouseEnter: r.onEdgeMouseEnter,
        onMouseMove: r.onEdgeMouseMove,
        onMouseLeave: r.onEdgeMouseLeave,
        edgeUpdaterRadius: r.edgeUpdaterRadius,
        onEdgeDoubleClick: r.onEdgeDoubleClick,
        onEdgeUpdateStart: r.onEdgeUpdateStart,
        onEdgeUpdateEnd: r.onEdgeUpdateEnd,
      },
      n.id,
    );
  },
  Mb = function (t) {
    var n = Pe(function (M) {
        return M.transform;
      }),
      r = Pe(function (M) {
        return M.nodes;
      }),
      i = Pe(function (M) {
        return M.edges;
      }),
      u = Pe(function (M) {
        return M.connectionNodeId;
      }),
      l = Pe(function (M) {
        return M.connectionHandleId;
      }),
      c = Pe(function (M) {
        return M.connectionHandleType;
      }),
      f = Pe(function (M) {
        return M.connectionPosition;
      }),
      p = Pe(function (M) {
        return M.selectedElements;
      }),
      h = Pe(function (M) {
        return M.nodesConnectable;
      }),
      x = Pe(function (M) {
        return M.elementsSelectable;
      }),
      S = Pe(function (M) {
        return M.width;
      }),
      b = Pe(function (M) {
        return M.height;
      });
    if (!S) return null;
    var E = t.connectionLineType,
      _ = t.arrowHeadColor,
      m = t.connectionLineStyle,
      v = t.connectionLineComponent,
      w = t.onlyRenderVisibleElements,
      N = 'translate('.concat(n[0], 'px,').concat(n[1], 'px) scale(').concat(n[2], ')'),
      g = u && c;
    return xe('svg', {
      width: S,
      height: b,
      className: 'react-flow__edges',
      children: [
        L(Cb, { color: _ }),
        xe('g', {
          style: { transform: N },
          children: [
            i.map(function (M) {
              return L(
                B4,
                {
                  edge: M,
                  props: t,
                  nodes: r,
                  selectedElements: p,
                  elementsSelectable: x,
                  transform: n,
                  width: S,
                  height: b,
                  onlyRenderVisibleElements: w,
                },
                M.id,
              );
            }),
            g &&
              L(A4, {
                nodes: r,
                connectionNodeId: u,
                connectionHandleId: l,
                connectionHandleType: c,
                connectionPositionX: f.x,
                connectionPositionY: f.y,
                transform: n,
                connectionLineStyle: m,
                connectionLineType: E,
                isConnectable: h,
                CustomConnectionLineComponent: v,
              }),
          ],
        }),
      ],
    });
  };
Mb.displayName = 'EdgeRenderer';
var F4 = T.exports.memo(Mb),
  Wp = 0.1,
  $4 = {
    zoomIn: function () {},
    zoomOut: function () {},
    zoomTo: function (t) {},
    transform: function (t) {},
    fitView: function () {},
    setCenter: function (t, n) {},
    fitBounds: function (t) {},
    project: function (t) {
      return t;
    },
    initialized: !1,
  },
  ui = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return t.transition().duration(n);
  },
  Pb = function () {
    var t = Cf(),
      n = Pe(function (u) {
        return u.d3Zoom;
      }),
      r = Pe(function (u) {
        return u.d3Selection;
      }),
      i = T.exports.useMemo(
        function () {
          return r && n
            ? {
                zoomIn: function (l) {
                  return n.scaleBy(ui(r, l), 1.2);
                },
                zoomOut: function (l) {
                  return n.scaleBy(ui(r, l), 1 / 1.2);
                },
                zoomTo: function (l, c) {
                  return n.scaleTo(ui(r, c), l);
                },
                transform: function (l, c) {
                  var f = vi.translate(l.x, l.y).scale(l.zoom);
                  n.transform(ui(r, c), f);
                },
                fitView: function () {
                  var l,
                    c,
                    f,
                    p =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : { padding: Wp, includeHiddenNodes: !1, duration: 0 },
                    h = t.getState(),
                    x = h.nodes,
                    S = h.width,
                    b = h.height,
                    E = h.minZoom,
                    _ = h.maxZoom;
                  if (!!x.length) {
                    var m = Ag(
                        p.includeHiddenNodes
                          ? x
                          : x.filter(function (H) {
                              return !H.isHidden;
                            }),
                      ),
                      v = pw(
                        m,
                        S,
                        b,
                        (l = p.minZoom) !== null && l !== void 0 ? l : E,
                        (c = p.maxZoom) !== null && c !== void 0 ? c : _,
                        (f = p.padding) !== null && f !== void 0 ? f : Wp,
                      ),
                      w = Ht(v, 3),
                      N = w[0],
                      g = w[1],
                      M = w[2],
                      P = vi.translate(N, g).scale(M);
                    n.transform(ui(r, p.duration), P);
                  }
                },
                setCenter: function (l, c, f, p) {
                  var h = t.getState(),
                    x = h.width,
                    S = h.height,
                    b = h.maxZoom,
                    E = typeof f != 'undefined' ? f : b,
                    _ = x / 2 - l * E,
                    m = S / 2 - c * E,
                    v = vi.translate(_, m).scale(E);
                  n.transform(ui(r, p), v);
                },
                fitBounds: function (l) {
                  var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wp,
                    f = arguments.length > 2 ? arguments[2] : void 0,
                    p = t.getState(),
                    h = p.width,
                    x = p.height,
                    S = p.minZoom,
                    b = p.maxZoom,
                    E = pw(l, h, x, S, b, c),
                    _ = Ht(E, 3),
                    m = _[0],
                    v = _[1],
                    w = _[2],
                    N = vi.translate(m, v).scale(w);
                  n.transform(ui(r, f), N);
                },
                project: function (l) {
                  var c = t.getState(),
                    f = c.transform,
                    p = c.snapToGrid,
                    h = c.snapGrid;
                  return kx(l, f, p, h);
                },
                initialized: !0,
              }
            : $4;
        },
        [n, r],
      );
    return i;
  },
  Ab = function (t) {
    var n = t.nodeTypes,
      r = t.edgeTypes,
      i = t.onMove,
      u = t.onMoveStart,
      l = t.onMoveEnd,
      c = t.onLoad,
      f = t.onElementClick,
      p = t.onNodeDoubleClick,
      h = t.onEdgeDoubleClick,
      x = t.onNodeMouseEnter,
      S = t.onNodeMouseMove,
      b = t.onNodeMouseLeave,
      E = t.onNodeContextMenu,
      _ = t.onNodeDragStart,
      m = t.onNodeDrag,
      v = t.onNodeDragStop,
      w = t.onSelectionDragStart,
      N = t.onSelectionDrag,
      g = t.onSelectionDragStop,
      M = t.onSelectionContextMenu,
      P = t.connectionMode,
      H = t.connectionLineType,
      F = t.connectionLineStyle,
      U = t.connectionLineComponent,
      V = t.selectionKeyCode,
      fe = t.multiSelectionKeyCode,
      ae = t.zoomActivationKeyCode,
      he = t.onElementsRemove,
      R = t.deleteKeyCode,
      Y = t.onConnect,
      W = t.onConnectStart,
      X = t.onConnectStop,
      ne = t.onConnectEnd,
      ce = t.snapToGrid,
      ue = t.snapGrid,
      j = t.onlyRenderVisibleElements,
      k = t.nodesDraggable,
      D = t.nodesConnectable,
      B = t.elementsSelectable,
      q = t.selectNodesOnDrag,
      Q = t.minZoom,
      le = t.maxZoom,
      de = t.defaultZoom,
      pe = t.defaultPosition,
      Ee = t.translateExtent,
      it = t.preventScrolling,
      Ve = t.nodeExtent,
      ut = t.arrowHeadColor,
      J = t.markerEndId,
      te = t.zoomOnScroll,
      ie = t.zoomOnPinch,
      G = t.panOnScroll,
      ye = t.panOnScrollSpeed,
      be = t.panOnScrollMode,
      Xe = t.zoomOnDoubleClick,
      Fe = t.paneMoveable,
      nt = t.onPaneClick,
      xt = t.onPaneScroll,
      ke = t.onPaneContextMenu,
      $e = t.onEdgeUpdate,
      ht = t.onEdgeContextMenu,
      yt = t.onEdgeMouseEnter,
      bt = t.onEdgeMouseMove,
      Ae = t.onEdgeMouseLeave,
      ln = t.edgeUpdaterRadius,
      In = t.onEdgeUpdateStart,
      nr = t.onEdgeUpdateEnd,
      Ln = T.exports.useRef(!1),
      K = Ie(function (Je) {
        return Je.setOnConnect;
      }),
      we = Ie(function (Je) {
        return Je.setOnConnectStart;
      }),
      Ce = Ie(function (Je) {
        return Je.setOnConnectStop;
      }),
      We = Ie(function (Je) {
        return Je.setOnConnectEnd;
      }),
      Ue = Ie(function (Je) {
        return Je.setSnapGrid;
      }),
      Ct = Ie(function (Je) {
        return Je.setSnapToGrid;
      }),
      Pt = Ie(function (Je) {
        return Je.setNodesDraggable;
      }),
      mn = Ie(function (Je) {
        return Je.setNodesConnectable;
      }),
      mr = Ie(function (Je) {
        return Je.setElementsSelectable;
      }),
      yn = Ie(function (Je) {
        return Je.setMinZoom;
      }),
      yr = Ie(function (Je) {
        return Je.setMaxZoom;
      }),
      wr = Ie(function (Je) {
        return Je.setTranslateExtent;
      }),
      wn = Ie(function (Je) {
        return Je.setNodeExtent;
      }),
      lo = Ie(function (Je) {
        return Je.setConnectionMode;
      }),
      rr = Cf(),
      en = Pb(),
      Mi = en.zoomIn,
      so = en.zoomOut,
      Pi = en.zoomTo,
      co = en.transform,
      Ai = en.fitView,
      Di = en.initialized;
    return (
      T.exports.useEffect(
        function () {
          !Ln.current &&
            Di &&
            (c &&
              c({
                fitView: function () {
                  var $a =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : { padding: 0.1 };
                  return Ai($a);
                },
                zoomIn: Mi,
                zoomOut: so,
                zoomTo: Pi,
                setTransform: co,
                project: jR(rr),
                getElements: XR(rr),
                toObject: GR(rr),
              }),
            (Ln.current = !0));
        },
        [c, Mi, so, Pi, co, Ai, Di],
      ),
      T.exports.useEffect(
        function () {
          Y && K(Y);
        },
        [Y],
      ),
      T.exports.useEffect(
        function () {
          W && we(W);
        },
        [W],
      ),
      T.exports.useEffect(
        function () {
          X && Ce(X);
        },
        [X],
      ),
      T.exports.useEffect(
        function () {
          ne && We(ne);
        },
        [ne],
      ),
      T.exports.useEffect(
        function () {
          typeof ce != 'undefined' && Ct(ce);
        },
        [ce],
      ),
      T.exports.useEffect(
        function () {
          typeof ue != 'undefined' && Ue(ue);
        },
        [ue],
      ),
      T.exports.useEffect(
        function () {
          typeof k != 'undefined' && Pt(k);
        },
        [k],
      ),
      T.exports.useEffect(
        function () {
          typeof D != 'undefined' && mn(D);
        },
        [D],
      ),
      T.exports.useEffect(
        function () {
          typeof B != 'undefined' && mr(B);
        },
        [B],
      ),
      T.exports.useEffect(
        function () {
          typeof Q != 'undefined' && yn(Q);
        },
        [Q],
      ),
      T.exports.useEffect(
        function () {
          typeof le != 'undefined' && yr(le);
        },
        [le],
      ),
      T.exports.useEffect(
        function () {
          typeof Ee != 'undefined' && wr(Ee);
        },
        [Ee],
      ),
      T.exports.useEffect(
        function () {
          typeof Ve != 'undefined' && wn(Ve);
        },
        [Ve],
      ),
      T.exports.useEffect(
        function () {
          typeof P != 'undefined' && lo(P);
        },
        [P],
      ),
      xe(C4, {
        onPaneClick: nt,
        onPaneContextMenu: ke,
        onPaneScroll: xt,
        onElementsRemove: he,
        deleteKeyCode: R,
        selectionKeyCode: V,
        multiSelectionKeyCode: fe,
        zoomActivationKeyCode: ae,
        elementsSelectable: B,
        onMove: i,
        onMoveStart: u,
        onMoveEnd: l,
        zoomOnScroll: te,
        zoomOnPinch: ie,
        zoomOnDoubleClick: Xe,
        panOnScroll: G,
        panOnScrollSpeed: ye,
        panOnScrollMode: be,
        paneMoveable: Fe,
        defaultPosition: pe,
        defaultZoom: de,
        translateExtent: Ee,
        onSelectionDragStart: w,
        onSelectionDrag: N,
        onSelectionDragStop: g,
        onSelectionContextMenu: M,
        preventScrolling: it,
        children: [
          L(O4, {
            nodeTypes: n,
            onElementClick: f,
            onNodeDoubleClick: p,
            onNodeMouseEnter: x,
            onNodeMouseMove: S,
            onNodeMouseLeave: b,
            onNodeContextMenu: E,
            onNodeDragStop: v,
            onNodeDrag: m,
            onNodeDragStart: _,
            selectNodesOnDrag: q,
            snapToGrid: ce,
            snapGrid: ue,
            onlyRenderVisibleElements: j,
          }),
          L(F4, {
            edgeTypes: r,
            onElementClick: f,
            onEdgeDoubleClick: h,
            connectionLineType: H,
            connectionLineStyle: F,
            connectionLineComponent: U,
            connectionMode: P,
            arrowHeadColor: ut,
            markerEndId: J,
            onEdgeUpdate: $e,
            onlyRenderVisibleElements: j,
            onEdgeContextMenu: ht,
            onEdgeMouseEnter: yt,
            onEdgeMouseMove: bt,
            onEdgeMouseLeave: Ae,
            onEdgeUpdateStart: In,
            onEdgeUpdateEnd: nr,
            edgeUpdaterRadius: ln,
          }),
        ],
      })
    );
  };
Ab.displayName = 'GraphView';
var z4 = T.exports.memo(Ab),
  U4 = function (t) {
    var n = t.elements,
      r = Ie(function (i) {
        return i.setElements;
      });
    return (
      T.exports.useEffect(
        function () {
          r(n);
        },
        [n],
      ),
      null
    );
  },
  Yg = T.exports.createContext(null),
  j4 = Yg.Provider;
Yg.Consumer;
var W4 = [
  'type',
  'position',
  'isValidConnection',
  'isConnectable',
  'id',
  'onConnect',
  'children',
  'className',
];
function Kw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Y4(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kw(Object(n), !0).forEach(function (r) {
          an(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Kw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var V4 = function () {
    return !0;
  },
  Db = T.exports.forwardRef(function (e, t) {
    var n = e.type,
      r = n === void 0 ? 'source' : n,
      i = e.position,
      u = i === void 0 ? De.Top : i,
      l = e.isValidConnection,
      c = l === void 0 ? V4 : l,
      f = e.isConnectable,
      p = f === void 0 ? !0 : f,
      h = e.id,
      x = e.onConnect,
      S = e.children,
      b = e.className,
      E = hf(e, W4),
      _ = T.exports.useContext(Yg),
      m = Ie(function (ae) {
        return ae.setConnectionPosition;
      }),
      v = Ie(function (ae) {
        return ae.setConnectionNodeId;
      }),
      w = Pe(function (ae) {
        return ae.onConnect;
      }),
      N = Pe(function (ae) {
        return ae.onConnectStart;
      }),
      g = Pe(function (ae) {
        return ae.onConnectStop;
      }),
      M = Pe(function (ae) {
        return ae.onConnectEnd;
      }),
      P = Pe(function (ae) {
        return ae.connectionMode;
      }),
      H = h || null,
      F = r === 'target',
      U = T.exports.useCallback(
        function (ae) {
          w == null || w(ae), x == null || x(ae);
        },
        [w, x],
      ),
      V = T.exports.useCallback(
        function (ae) {
          Tb(ae, H, _, v, m, U, F, c, P, void 0, void 0, N, g, M);
        },
        [H, _, v, m, U, F, c, P, N, g, M],
      ),
      fe = tr([
        'react-flow__handle',
        'react-flow__handle-'.concat(u),
        'nodrag',
        b,
        { source: !F, target: F, connectable: p },
      ]);
    return L(
      'div',
      at(
        Ze(
          {},
          Y4(
            {
              'data-handleid': H,
              'data-nodeid': _,
              'data-handlepos': u,
              className: fe,
              onMouseDown: V,
              ref: t,
            },
            E,
          ),
        ),
        { children: S },
      ),
    );
  });
Db.displayName = 'Handle';
var kr = T.exports.memo(Db),
  kb = function (t) {
    var n = t.data,
      r = t.isConnectable,
      i = t.targetPosition,
      u = i === void 0 ? De.Top : i,
      l = t.sourcePosition,
      c = l === void 0 ? De.Bottom : l;
    return xe(Tt, {
      children: [
        L(kr, { type: 'target', position: u, isConnectable: r }),
        n.label,
        L(kr, { type: 'source', position: c, isConnectable: r }),
      ],
    });
  };
kb.displayName = 'DefaultNode';
var uv = T.exports.memo(kb),
  Rb = function (t) {
    var n = t.data,
      r = t.isConnectable,
      i = t.sourcePosition,
      u = i === void 0 ? De.Bottom : i;
    return xe(Tt, {
      children: [n.label, L(kr, { type: 'source', position: u, isConnectable: r })],
    });
  };
Rb.displayName = 'InputNode';
var Ib = T.exports.memo(Rb),
  Lb = function (t) {
    var n = t.data,
      r = t.isConnectable,
      i = t.targetPosition,
      u = i === void 0 ? De.Top : i;
    return xe(Tt, {
      children: [L(kr, { type: 'target', position: u, isConnectable: r }), n.label],
    });
  };
Lb.displayName = 'OutputNode';
var Hb = T.exports.memo(Lb);
function Qw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function X4(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qw(Object(n), !0).forEach(function (r) {
          an(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Qw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var Is = function (e) {
  var t = function (r) {
    var i = r.id,
      u = r.type,
      l = r.data,
      c = r.scale,
      f = r.xPos,
      p = r.yPos,
      h = r.selected,
      x = r.onClick,
      S = r.onMouseEnter,
      b = r.onMouseMove,
      E = r.onMouseLeave,
      _ = r.onContextMenu,
      m = r.onNodeDoubleClick,
      v = r.onNodeDragStart,
      w = r.onNodeDrag,
      N = r.onNodeDragStop,
      g = r.style,
      M = r.className,
      P = r.isDraggable,
      H = r.isSelectable,
      F = r.isConnectable,
      U = r.selectNodesOnDrag,
      V = r.sourcePosition,
      fe = r.targetPosition,
      ae = r.isHidden,
      he = r.isInitialized,
      R = r.snapToGrid,
      Y = r.snapGrid,
      W = r.isDragging,
      X = r.resizeObserver,
      ne = r.dragHandle,
      ce = Ie(function (G) {
        return G.updateNodeDimensions;
      }),
      ue = Ie(function (G) {
        return G.addSelectedElements;
      }),
      j = Ie(function (G) {
        return G.updateNodePosDiff;
      }),
      k = Ie(function (G) {
        return G.unsetNodesSelection;
      }),
      D = T.exports.useRef(null),
      B = T.exports.useMemo(
        function () {
          return { id: i, type: u, position: { x: f, y: p }, data: l };
        },
        [i, u, f, p, l],
      ),
      q = T.exports.useMemo(
        function () {
          return R ? Y : [1, 1];
        },
        [R, Y],
      ),
      Q = T.exports.useMemo(
        function () {
          return X4(
            {
              zIndex: h ? 10 : 3,
              transform: 'translate('.concat(f, 'px,').concat(p, 'px)'),
              pointerEvents: H || P || x || S || b || E ? 'all' : 'none',
              opacity: he ? 1 : 0,
            },
            g,
          );
        },
        [h, f, p, H, P, x, he, g, S, b, E],
      ),
      le = T.exports.useMemo(
        function () {
          if (!(!S || W))
            return function (G) {
              return S(G, B);
            };
        },
        [S, W, B],
      ),
      de = T.exports.useMemo(
        function () {
          if (!(!b || W))
            return function (G) {
              return b(G, B);
            };
        },
        [b, W, B],
      ),
      pe = T.exports.useMemo(
        function () {
          if (!(!E || W))
            return function (G) {
              return E(G, B);
            };
        },
        [E, W, B],
      ),
      Ee = T.exports.useMemo(
        function () {
          if (!!_)
            return function (G) {
              return _(G, B);
            };
        },
        [_, B],
      ),
      it = T.exports.useCallback(
        function (G) {
          P || (H && (k(), h || ue(B)), x == null || x(G, B));
        },
        [H, h, P, x, B],
      ),
      Ve = T.exports.useCallback(
        function (G) {
          v == null || v(G, B), U && H ? (k(), h || ue(B)) : !U && !h && H && (k(), ue([]));
        },
        [B, h, U, H, v],
      ),
      ut = T.exports.useCallback(
        function (G, ye) {
          w && ((B.position.x += ye.deltaX), (B.position.y += ye.deltaY), w(G, B)),
            j({ id: i, diff: { x: ye.deltaX, y: ye.deltaY }, isDragging: !0 });
        },
        [i, B, w],
      ),
      J = T.exports.useCallback(
        function (G) {
          if (!W) {
            H && !U && !h && ue(B), x == null || x(G, B);
            return;
          }
          j({ id: B.id, isDragging: !1 }), N == null || N(G, B);
        },
        [B, H, U, x, N, W, h],
      ),
      te = T.exports.useCallback(
        function (G) {
          m == null || m(G, B);
        },
        [B, m],
      );
    if (
      (T.exports.useLayoutEffect(
        function () {
          D.current && !ae && ce([{ id: i, nodeElement: D.current, forceUpdate: !0 }]);
        },
        [i, ae, V, fe],
      ),
      T.exports.useEffect(function () {
        if (D.current) {
          var G = D.current;
          return (
            X == null || X.observe(G),
            function () {
              return X == null ? void 0 : X.unobserve(G);
            }
          );
        }
      }, []),
      ae)
    )
      return null;
    var ie = tr([
      'react-flow__node',
      'react-flow__node-'.concat(u),
      M,
      { selected: h, selectable: H },
    ]);
    return L(_4, {
      onStart: Ve,
      onDrag: ut,
      onStop: J,
      scale: c,
      disabled: !P,
      cancel: '.nodrag',
      nodeRef: D,
      grid: q,
      enableUserSelectHack: !1,
      handle: ne,
      children: L('div', {
        className: ie,
        ref: D,
        style: Q,
        onMouseEnter: le,
        onMouseMove: de,
        onMouseLeave: pe,
        onContextMenu: Ee,
        onClick: it,
        onDoubleClick: te,
        'data-id': i,
        children: L(j4, {
          value: i,
          children: L(e, {
            id: i,
            data: l,
            type: u,
            xPos: f,
            yPos: p,
            selected: h,
            isConnectable: F,
            sourcePosition: V,
            targetPosition: fe,
            isDragging: W,
            dragHandle: ne,
          }),
        }),
      }),
    });
  };
  return (t.displayName = 'NodeWrapper'), T.exports.memo(t);
};
function Jw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function eS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jw(Object(n), !0).forEach(function (r) {
          an(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Jw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function G4(e) {
  var t = { input: Is(e.input || Ib), default: Is(e.default || uv), output: Is(e.output || Hb) },
    n = {},
    r = Object.keys(e)
      .filter(function (i) {
        return !['input', 'default', 'output'].includes(i);
      })
      .reduce(function (i, u) {
        return (i[u] = Is(e[u] || uv)), i;
      }, n);
  return eS(eS({}, t), r);
}
var q4 = function (e) {
    var t = e.onSelectionChange,
      n = Pe(function (r) {
        return r.selectedElements;
      });
    return (
      T.exports.useEffect(
        function () {
          t(n);
        },
        [n],
      ),
      null
    );
  },
  Yp = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == 'object' && typeof n == 'object') {
      if (t.constructor !== n.constructor) return !1;
      var r, i, u;
      if (Array.isArray(t)) {
        if (((r = t.length), r != n.length)) return !1;
        for (i = r; i-- !== 0; ) if (!e(t[i], n[i])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (((u = Object.keys(t)), (r = u.length), r !== Object.keys(n).length)) return !1;
      for (i = r; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(n, u[i])) return !1;
      for (i = r; i-- !== 0; ) {
        var l = u[i];
        if (!e(t[l], n[l])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  };
function tS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Z4(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? tS(Object(n), !0).forEach(function (r) {
          an(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : tS(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var K4 = function (t, n) {
    var r = t.getBoundingClientRect();
    return { source: nS('.source', t, r, n), target: nS('.target', t, r, n) };
  },
  nS = function (t, n, r, i) {
    var u = n.querySelectorAll(t);
    if (!u || !u.length) return null;
    var l = Array.from(u);
    return l.map(function (c) {
      var f = c.getBoundingClientRect(),
        p = Pg(c),
        h = c.getAttribute('data-handleid'),
        x = c.getAttribute('data-handlepos');
      return Z4({ id: h, position: x, x: (f.left - r.left) / i, y: (f.top - r.top) / i }, p);
    });
  };
function rS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rS(Object(n), !0).forEach(function (r) {
          an(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : rS(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Q4() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vg,
    t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case nx: {
      var n = t.payload,
        r = { nextNodes: [], nextEdges: [] },
        i = n.reduce(function (ke, $e) {
          if (Oa($e)) {
            var ht = e.nodes.find(function (Ae) {
              return Ae.id === $e.id;
            });
            if (ht) {
              var yt = Oe(Oe({}, ht), $e);
              (ht.position.x !== $e.position.x || ht.position.y !== $e.position.y) &&
                (yt.__rf.position = $e.position),
                typeof $e.type != 'undefined' && $e.type !== ht.type && (yt.__rf.width = null),
                ke.nextNodes.push(yt);
            } else ke.nextNodes.push(WR($e, e.nodeExtent));
          } else if (Dx($e)) {
            var bt = e.edges.find(function (Ae) {
              return Ae.id === $e.id;
            });
            bt ? ke.nextEdges.push(Oe(Oe({}, bt), $e)) : ke.nextEdges.push(YR($e));
          }
          return ke;
        }, r),
        u = i.nextNodes,
        l = i.nextEdges;
      return Oe(Oe({}, e), {}, { nodes: u, edges: l });
    }
    case rx: {
      var c = e.nodes.map(function (ke) {
        var $e = t.payload.find(function (Ae) {
          return Ae.id === ke.id;
        });
        if ($e) {
          var ht = Pg($e.nodeElement),
            yt =
              ht.width &&
              ht.height &&
              (ke.__rf.width !== ht.width || ke.__rf.height !== ht.height || $e.forceUpdate);
          if (yt) {
            var bt = K4($e.nodeElement, e.transform[2]);
            return Oe(
              Oe({}, ke),
              {},
              { __rf: Oe(Oe(Oe({}, ke.__rf), ht), {}, { handleBounds: bt }) },
            );
          }
        }
        return ke;
      });
      return Oe(Oe({}, e), {}, { nodes: c });
    }
    case ox: {
      var f = t.payload,
        p = f.id,
        h = f.pos,
        x = h;
      if (e.snapToGrid) {
        var S = Ht(e.snapGrid, 2),
          b = S[0],
          E = S[1];
        x = { x: b * Math.round(h.x / b), y: E * Math.round(h.y / E) };
      }
      var _ = e.nodes.map(function (ke) {
        return ke.id === p
          ? Oe(Oe({}, ke), {}, { __rf: Oe(Oe({}, ke.__rf), {}, { position: x }) })
          : ke;
      });
      return Oe(Oe({}, e), {}, { nodes: _ });
    }
    case ix: {
      var m = t.payload,
        v = m.id,
        w = m.diff,
        N = m.isDragging,
        g = e.nodes.map(function (ke) {
          var $e;
          if (
            v === ke.id ||
            (($e = e.selectedElements) !== null &&
              $e !== void 0 &&
              $e.find(function (yt) {
                return yt.id === ke.id;
              }))
          ) {
            var ht = Oe(Oe({}, ke), {}, { __rf: Oe(Oe({}, ke.__rf), {}, { isDragging: N }) });
            return (
              w &&
                (ht.__rf.position = { x: ke.__rf.position.x + w.x, y: ke.__rf.position.y + w.y }),
              ht
            );
          }
          return ke;
        });
      return Oe(Oe({}, e), {}, { nodes: g });
    }
    case ax: {
      var M = t.payload;
      return Oe(
        Oe({}, e),
        {},
        {
          selectionActive: !0,
          userSelectionRect: {
            width: 0,
            height: 0,
            startX: M.x,
            startY: M.y,
            x: M.x,
            y: M.y,
            draw: !0,
          },
        },
      );
    }
    case ux: {
      var P,
        H,
        F = t.payload,
        U = (P = e.userSelectionRect.startX) !== null && P !== void 0 ? P : 0,
        V = (H = e.userSelectionRect.startY) !== null && H !== void 0 ? H : 0,
        fe = Oe(
          Oe({}, e.userSelectionRect),
          {},
          {
            x: F.x < U ? F.x : U,
            y: F.y < V ? F.y : V,
            width: Math.abs(F.x - U),
            height: Math.abs(F.y - V),
          },
        ),
        ae = Lx(e.nodes, fe, e.transform, !1, !0),
        he = Hx(ae, e.edges),
        R = [].concat(Ao(ae), Ao(he)),
        Y = !Yp(R, e.selectedElements),
        W = Y ? { selectedElements: R.length > 0 ? R : null } : {};
      return Oe(Oe(Oe({}, e), W), {}, { userSelectionRect: fe });
    }
    case lx: {
      var X,
        ne =
          (X = e.selectedElements) === null || X === void 0
            ? void 0
            : X.filter(function (ke) {
                return Oa(ke) && ke.__rf;
              }),
        ce = Oe(
          Oe({}, e),
          {},
          {
            selectionActive: !1,
            userSelectionRect: Oe(Oe({}, e.userSelectionRect), {}, { draw: !1 }),
          },
        );
      if (!ne || ne.length === 0) (ce.selectedElements = null), (ce.nodesSelectionActive = !1);
      else {
        var ue = Ag(ne);
        (ce.selectedNodesBbox = ue), (ce.nodesSelectionActive = !0);
      }
      return ce;
    }
    case cx: {
      var j = t.payload,
        k = Array.isArray(j) ? j : [j],
        D = !Yp(k, e.selectedElements),
        B = D ? k : e.selectedElements;
      return Oe(Oe({}, e), {}, { selectedElements: B });
    }
    case dx: {
      var q = e.multiSelectionActive,
        Q = e.selectedElements,
        le = t.payload,
        de = Array.isArray(le) ? le : [le],
        pe = de;
      q && (pe = Q ? [].concat(Ao(Q), Ao(de)) : de);
      var Ee = !Yp(pe, e.selectedElements),
        it = Ee ? pe : e.selectedElements;
      return Oe(Oe({}, e), {}, { selectedElements: it });
    }
    case vx: {
      var Ve = t.payload,
        ut = Ve.d3Zoom,
        J = Ve.d3Selection,
        te = Ve.d3ZoomHandler,
        ie = Ve.transform;
      return Oe(Oe({}, e), {}, { d3Zoom: ut, d3Selection: J, d3ZoomHandler: te, transform: ie });
    }
    case gx: {
      var G,
        ye = t.payload;
      return (
        (G = e.d3Zoom) === null || G === void 0 || G.scaleExtent([ye, e.maxZoom]),
        Oe(Oe({}, e), {}, { minZoom: ye })
      );
    }
    case mx: {
      var be,
        Xe = t.payload;
      return (
        (be = e.d3Zoom) === null || be === void 0 || be.scaleExtent([e.minZoom, Xe]),
        Oe(Oe({}, e), {}, { maxZoom: Xe })
      );
    }
    case yx: {
      var Fe,
        nt = t.payload;
      return (
        (Fe = e.d3Zoom) === null || Fe === void 0 || Fe.translateExtent(nt),
        Oe(Oe({}, e), {}, { translateExtent: nt })
      );
    }
    case Mx: {
      var xt = t.payload;
      return Oe(
        Oe({}, e),
        {},
        {
          nodeExtent: xt,
          nodes: e.nodes.map(function (ke) {
            return Oe(
              Oe({}, ke),
              {},
              { __rf: Oe(Oe({}, ke.__rf), {}, { position: Ax(ke.__rf.position, xt) }) },
            );
          }),
        },
      );
    }
    case Q_:
    case J_:
    case ex:
    case tx:
    case fx:
    case sx:
    case px:
    case hx:
    case wx:
    case Sx:
    case Ex:
    case _x:
    case xx:
    case bx:
    case Cx:
    case Ox:
    case Nx:
    case Tx:
      return Oe(Oe({}, e), t.payload);
    default:
      return e;
  }
}
function Bb(e) {
  var t = F_(Q4, e);
  return t;
}
var Vg = {
    width: 0,
    height: 0,
    transform: [0, 0, 1],
    nodes: [],
    edges: [],
    selectedElements: null,
    selectedNodesBbox: { x: 0, y: 0, width: 0, height: 0 },
    d3Zoom: null,
    d3Selection: null,
    d3ZoomHandler: void 0,
    minZoom: 0.5,
    maxZoom: 2,
    translateExtent: [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
    ],
    nodeExtent: [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
    ],
    nodesSelectionActive: !1,
    selectionActive: !1,
    userSelectionRect: { startX: 0, startY: 0, x: 0, y: 0, width: 0, height: 0, draw: !1 },
    connectionNodeId: null,
    connectionHandleId: null,
    connectionHandleType: 'source',
    connectionPosition: { x: 0, y: 0 },
    connectionMode: Pa.Strict,
    snapGrid: [15, 15],
    snapToGrid: !1,
    nodesDraggable: !0,
    nodesConnectable: !0,
    elementsSelectable: !0,
    multiSelectionActive: !1,
    reactFlowVersion: '9.7.4',
  },
  J4 = Bb(Vg),
  Fb = function (t) {
    var n = t.children,
      r = T.exports.useContext(io),
      i = T.exports.useMemo(
        function () {
          var u, l;
          return r == null ||
            (u = r.store) === null ||
            u === void 0 ||
            (l = u.getState()) === null ||
            l === void 0
            ? void 0
            : l.reactFlowVersion;
        },
        [r],
      );
    return i ? L(Tt, { children: n }) : L(V_, { store: J4, children: n });
  };
Fb.displayName = 'ReactFlowWrapper';
function $b(e, t) {
  t === void 0 && (t = {});
  var n = t.insertAt;
  if (!(!e || typeof document == 'undefined')) {
    var r = document.head || document.getElementsByTagName('head')[0],
      i = document.createElement('style');
    (i.type = 'text/css'),
      n === 'top' && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i),
      i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e));
  }
}
var eB =
  '.react-flow{height:100%;overflow:hidden;position:relative;width:100%}.react-flow__pane,.react-flow__renderer,.react-flow__selectionpane{height:100%;left:0;position:absolute;top:0;width:100%}.react-flow__pane{z-index:1}.react-flow__renderer{z-index:4}.react-flow__selectionpane{z-index:5}.react-flow__edges,.react-flow__selection{left:0;position:absolute;top:0}.react-flow__edges{pointer-events:none;z-index:2}.react-flow__edge{pointer-events:visibleStroke}.react-flow__edge.inactive{pointer-events:none}@-webkit-keyframes dashdraw{0%{stroke-dashoffset:10}}@keyframes dashdraw{0%{stroke-dashoffset:10}}.react-flow__edge-path{fill:none}.react-flow__edge-textwrapper{pointer-events:all}.react-flow__edge-text{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-flow__connection{pointer-events:none}.react-flow__connection .animated{stroke-dasharray:5;-webkit-animation:dashdraw .5s linear infinite;animation:dashdraw .5s linear infinite}.react-flow__connection-path{fill:none}.react-flow__nodes{height:100%;pointer-events:none;width:100%;z-index:3}.react-flow__node,.react-flow__nodes{position:absolute;transform-origin:0 0}.react-flow__node{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.react-flow__nodesselection{height:100%;left:0;pointer-events:none;position:absolute;top:0;transform-origin:left top;width:100%;z-index:3}.react-flow__nodesselection-rect{cursor:-webkit-grab;cursor:grab;pointer-events:all;position:absolute}.react-flow__handle{pointer-events:none}.react-flow__handle.connectable{pointer-events:all}.react-flow__handle-bottom{bottom:-4px;left:50%;top:auto;transform:translate(-50%)}.react-flow__handle-top{left:50%;top:-4px;transform:translate(-50%)}.react-flow__handle-left{left:-4px;top:50%;transform:translateY(-50%)}.react-flow__handle-right{right:-4px;top:50%;transform:translateY(-50%)}.react-flow__edgeupdater{cursor:move;pointer-events:all}.react-flow__background{height:100%;left:0;position:absolute;top:0;width:100%}.react-flow__controls{bottom:10px;left:10px;position:absolute;z-index:5}.react-flow__controls-button{border:none;height:24px;width:24px}.react-flow__controls-button svg{width:100%}.react-flow__minimap{bottom:10px;position:absolute;right:10px;z-index:5}';
$b(eB);
var tB =
  '.react-flow__selection{background:rgba(0,89,220,.08);border:1px dotted rgba(0,89,220,.8)}.react-flow__edge.selected .react-flow__edge-path{stroke:#555}.react-flow__edge.animated path{stroke-dasharray:5;-webkit-animation:dashdraw .5s linear infinite;animation:dashdraw .5s linear infinite}.react-flow__edge.updating .react-flow__edge-path{stroke:#777}.react-flow__edge-path{stroke:#b1b1b7;stroke-width:1}.react-flow__edge-text{font-size:10px}.react-flow__edge-textbg{fill:#fff}.react-flow__connection-path{stroke:#b1b1b7;stroke-width:1}.react-flow__node{cursor:-webkit-grab;cursor:grab}.react-flow__node-default,.react-flow__node-input,.react-flow__node-output{border-radius:3px;border-style:solid;border-width:1px;color:#222;font-size:12px;padding:10px;text-align:center;width:150px}.react-flow__node-default.selectable:hover,.react-flow__node-input.selectable:hover,.react-flow__node-output.selectable:hover{box-shadow:0 1px 4px 1px rgba(0,0,0,.08)}.react-flow__node-input{background:#fff;border-color:#0041d0}.react-flow__node-input.selected,.react-flow__node-input.selected:hover{box-shadow:0 0 0 .5px #0041d0}.react-flow__node-input .react-flow__handle{background:#0041d0}.react-flow__node-default{background:#fff;border-color:#1a192b}.react-flow__node-default.selected,.react-flow__node-default.selected:hover{box-shadow:0 0 0 .5px #1a192b}.react-flow__node-default .react-flow__handle{background:#1a192b}.react-flow__node-output{background:#fff;border-color:#ff0072}.react-flow__node-output.selected,.react-flow__node-output.selected:hover{box-shadow:0 0 0 .5px #ff0072}.react-flow__node-output .react-flow__handle{background:#ff0072}.react-flow__nodesselection-rect{background:rgba(0,89,220,.08);border:1px dotted rgba(0,89,220,.8)}.react-flow__handle{background:#555;border:1px solid #fff;border-radius:100%;height:6px;position:absolute;width:6px}.react-flow__handle.connectable{cursor:crosshair}.react-flow__minimap{background-color:#fff}.react-flow__controls{box-shadow:0 0 2px 1px rgba(0,0,0,.08)}.react-flow__controls-button{align-items:center;background:#fefefe;border-bottom:1px solid #eee;box-sizing:content-box;cursor:pointer;display:flex;height:16px;justify-content:center;padding:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:16px}.react-flow__controls-button svg{max-height:12px;max-width:12px}.react-flow__controls-button:hover{background:#f4f4f4}';
$b(tB);
var nB = [
  'elements',
  'className',
  'nodeTypes',
  'edgeTypes',
  'onElementClick',
  'onLoad',
  'onMove',
  'onMoveStart',
  'onMoveEnd',
  'onElementsRemove',
  'onConnect',
  'onConnectStart',
  'onConnectStop',
  'onConnectEnd',
  'onNodeMouseEnter',
  'onNodeMouseMove',
  'onNodeMouseLeave',
  'onNodeContextMenu',
  'onNodeDoubleClick',
  'onNodeDragStart',
  'onNodeDrag',
  'onNodeDragStop',
  'onSelectionChange',
  'onSelectionDragStart',
  'onSelectionDrag',
  'onSelectionDragStop',
  'onSelectionContextMenu',
  'connectionMode',
  'connectionLineType',
  'connectionLineStyle',
  'connectionLineComponent',
  'deleteKeyCode',
  'selectionKeyCode',
  'multiSelectionKeyCode',
  'zoomActivationKeyCode',
  'snapToGrid',
  'snapGrid',
  'onlyRenderVisibleElements',
  'selectNodesOnDrag',
  'nodesDraggable',
  'nodesConnectable',
  'elementsSelectable',
  'minZoom',
  'maxZoom',
  'defaultZoom',
  'defaultPosition',
  'translateExtent',
  'preventScrolling',
  'nodeExtent',
  'arrowHeadColor',
  'markerEndId',
  'zoomOnScroll',
  'zoomOnPinch',
  'panOnScroll',
  'panOnScrollSpeed',
  'panOnScrollMode',
  'zoomOnDoubleClick',
  'paneMoveable',
  'onPaneClick',
  'onPaneScroll',
  'onPaneContextMenu',
  'children',
  'onEdgeUpdate',
  'onEdgeContextMenu',
  'onEdgeDoubleClick',
  'onEdgeMouseEnter',
  'onEdgeMouseMove',
  'onEdgeMouseLeave',
  'onEdgeUpdateStart',
  'onEdgeUpdateEnd',
  'edgeUpdaterRadius',
  'nodeTypesId',
  'edgeTypesId',
];
function oS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function iS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? oS(Object(n), !0).forEach(function (r) {
          an(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : oS(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var rB = { input: Ib, default: uv, output: Hb },
  oB = { default: iv, straight: Nb, step: Ob, smoothstep: Wg },
  zb = T.exports.forwardRef(function (e, t) {
    var n = e.elements,
      r = n === void 0 ? [] : n,
      i = e.className,
      u = e.nodeTypes,
      l = u === void 0 ? rB : u,
      c = e.edgeTypes,
      f = c === void 0 ? oB : c,
      p = e.onElementClick,
      h = e.onLoad,
      x = e.onMove,
      S = e.onMoveStart,
      b = e.onMoveEnd,
      E = e.onElementsRemove,
      _ = e.onConnect,
      m = e.onConnectStart,
      v = e.onConnectStop,
      w = e.onConnectEnd,
      N = e.onNodeMouseEnter,
      g = e.onNodeMouseMove,
      M = e.onNodeMouseLeave,
      P = e.onNodeContextMenu,
      H = e.onNodeDoubleClick,
      F = e.onNodeDragStart,
      U = e.onNodeDrag,
      V = e.onNodeDragStop,
      fe = e.onSelectionChange,
      ae = e.onSelectionDragStart,
      he = e.onSelectionDrag,
      R = e.onSelectionDragStop,
      Y = e.onSelectionContextMenu,
      W = e.connectionMode,
      X = W === void 0 ? Pa.Strict : W,
      ne = e.connectionLineType,
      ce = ne === void 0 ? gi.Bezier : ne,
      ue = e.connectionLineStyle,
      j = e.connectionLineComponent,
      k = e.deleteKeyCode,
      D = k === void 0 ? 'Backspace' : k,
      B = e.selectionKeyCode,
      q = B === void 0 ? 'Shift' : B,
      Q = e.multiSelectionKeyCode,
      le = Q === void 0 ? 'Meta' : Q,
      de = e.zoomActivationKeyCode,
      pe = de === void 0 ? 'Meta' : de,
      Ee = e.snapToGrid,
      it = Ee === void 0 ? !1 : Ee,
      Ve = e.snapGrid,
      ut = Ve === void 0 ? [15, 15] : Ve,
      J = e.onlyRenderVisibleElements,
      te = J === void 0 ? !1 : J,
      ie = e.selectNodesOnDrag,
      G = ie === void 0 ? !0 : ie,
      ye = e.nodesDraggable,
      be = e.nodesConnectable,
      Xe = e.elementsSelectable,
      Fe = e.minZoom,
      nt = e.maxZoom,
      xt = e.defaultZoom,
      ke = xt === void 0 ? 1 : xt,
      $e = e.defaultPosition,
      ht = $e === void 0 ? [0, 0] : $e,
      yt = e.translateExtent,
      bt = e.preventScrolling,
      Ae = bt === void 0 ? !0 : bt,
      ln = e.nodeExtent,
      In = e.arrowHeadColor,
      nr = In === void 0 ? '#b1b1b7' : In,
      Ln = e.markerEndId,
      K = e.zoomOnScroll,
      we = K === void 0 ? !0 : K,
      Ce = e.zoomOnPinch,
      We = Ce === void 0 ? !0 : Ce,
      Ue = e.panOnScroll,
      Ct = Ue === void 0 ? !1 : Ue,
      Pt = e.panOnScrollSpeed,
      mn = Pt === void 0 ? 0.5 : Pt,
      mr = e.panOnScrollMode,
      yn = mr === void 0 ? wa.Free : mr,
      yr = e.zoomOnDoubleClick,
      wr = yr === void 0 ? !0 : yr,
      wn = e.paneMoveable,
      lo = wn === void 0 ? !0 : wn,
      rr = e.onPaneClick,
      en = e.onPaneScroll,
      Mi = e.onPaneContextMenu,
      so = e.children,
      Pi = e.onEdgeUpdate,
      co = e.onEdgeContextMenu,
      Ai = e.onEdgeDoubleClick,
      Di = e.onEdgeMouseEnter,
      Je = e.onEdgeMouseMove,
      $a = e.onEdgeMouseLeave,
      Bf = e.onEdgeUpdateStart,
      Ff = e.onEdgeUpdateEnd,
      Pl = e.edgeUpdaterRadius,
      $f = Pl === void 0 ? 10 : Pl,
      za = e.nodeTypesId,
      zf = za === void 0 ? '1' : za,
      Al = e.edgeTypesId,
      Uf = Al === void 0 ? '1' : Al,
      jf = hf(e, nB),
      Wf = T.exports.useMemo(
        function () {
          return G4(l);
        },
        [zf],
      ),
      Yf = T.exports.useMemo(
        function () {
          return R4(f);
        },
        [Uf],
      ),
      ki = tr(['react-flow', i]);
    return L(
      'div',
      at(Ze({}, iS(iS({}, jf), {}, { ref: t, className: ki })), {
        children: xe(Fb, {
          children: [
            L(z4, {
              onLoad: h,
              onMove: x,
              onMoveStart: S,
              onMoveEnd: b,
              onElementClick: p,
              onNodeMouseEnter: N,
              onNodeMouseMove: g,
              onNodeMouseLeave: M,
              onNodeContextMenu: P,
              onNodeDoubleClick: H,
              onNodeDragStart: F,
              onNodeDrag: U,
              onNodeDragStop: V,
              nodeTypes: Wf,
              edgeTypes: Yf,
              connectionMode: X,
              connectionLineType: ce,
              connectionLineStyle: ue,
              connectionLineComponent: j,
              selectionKeyCode: q,
              onElementsRemove: E,
              deleteKeyCode: D,
              multiSelectionKeyCode: le,
              zoomActivationKeyCode: pe,
              onConnect: _,
              onConnectStart: m,
              onConnectStop: v,
              onConnectEnd: w,
              snapToGrid: it,
              snapGrid: ut,
              onlyRenderVisibleElements: te,
              nodesDraggable: ye,
              nodesConnectable: be,
              elementsSelectable: Xe,
              selectNodesOnDrag: G,
              minZoom: Fe,
              maxZoom: nt,
              defaultZoom: ke,
              defaultPosition: ht,
              translateExtent: yt,
              preventScrolling: Ae,
              nodeExtent: ln,
              arrowHeadColor: nr,
              markerEndId: Ln,
              zoomOnScroll: we,
              zoomOnPinch: We,
              zoomOnDoubleClick: wr,
              panOnScroll: Ct,
              panOnScrollSpeed: mn,
              panOnScrollMode: yn,
              paneMoveable: lo,
              onPaneClick: rr,
              onPaneScroll: en,
              onPaneContextMenu: Mi,
              onSelectionDragStart: ae,
              onSelectionDrag: he,
              onSelectionDragStop: R,
              onSelectionContextMenu: Y,
              onEdgeUpdate: Pi,
              onEdgeContextMenu: co,
              onEdgeDoubleClick: Ai,
              onEdgeMouseEnter: Di,
              onEdgeMouseMove: Je,
              onEdgeMouseLeave: $a,
              onEdgeUpdateStart: Bf,
              onEdgeUpdateEnd: Ff,
              edgeUpdaterRadius: $f,
            }),
            L(U4, { elements: r }),
            fe && L(q4, { onSelectionChange: fe }),
            so,
          ],
        }),
      }),
    );
  });
zb.displayName = 'ReactFlow';
var Ub = function (t) {
  var n = t.x,
    r = t.y,
    i = t.width,
    u = t.height,
    l = t.style,
    c = t.color,
    f = t.strokeColor,
    p = t.strokeWidth,
    h = t.className,
    x = t.borderRadius,
    S = t.shapeRendering,
    b = l || {},
    E = b.background,
    _ = b.backgroundColor,
    m = c || E || _;
  return L('rect', {
    className: tr(['react-flow__minimap-node', h]),
    x: n,
    y: r,
    rx: x,
    ry: x,
    width: i,
    height: u,
    fill: m,
    stroke: f,
    strokeWidth: p,
    shapeRendering: S,
  });
};
Ub.displayName = 'MiniMapNode';
var iB = T.exports.memo(Ub),
  aB = 200,
  uB = 150,
  jb = function (t) {
    var n = t.style,
      r = t.className,
      i = t.nodeStrokeColor,
      u = i === void 0 ? '#555' : i,
      l = t.nodeColor,
      c = l === void 0 ? '#fff' : l,
      f = t.nodeClassName,
      p = f === void 0 ? '' : f,
      h = t.nodeBorderRadius,
      x = h === void 0 ? 5 : h,
      S = t.nodeStrokeWidth,
      b = S === void 0 ? 2 : S,
      E = t.maskColor,
      _ = E === void 0 ? 'rgb(240, 242, 243, 0.7)' : E,
      m = Pe(function (pe) {
        return pe.width;
      }),
      v = Pe(function (pe) {
        return pe.height;
      }),
      w = Pe(function (pe) {
        return pe.transform;
      }),
      N = Ht(w, 3),
      g = N[0],
      M = N[1],
      P = N[2],
      H = Pe(function (pe) {
        return pe.nodes;
      }),
      F = tr(['react-flow__minimap', r]),
      U = (n == null ? void 0 : n.width) || aB,
      V = (n == null ? void 0 : n.height) || uB,
      fe =
        c instanceof Function
          ? c
          : function () {
              return c;
            },
      ae =
        u instanceof Function
          ? u
          : function () {
              return u;
            },
      he =
        p instanceof Function
          ? p
          : function () {
              return p;
            },
      R = H && H.length,
      Y = Ag(H),
      W = { x: -g / P, y: -M / P, width: m / P, height: v / P },
      X = R ? VR(Y, W) : W,
      ne = X.width / U,
      ce = X.height / V,
      ue = Math.max(ne, ce),
      j = ue * U,
      k = ue * V,
      D = 5 * ue,
      B = X.x - (j - X.width) / 2 - D,
      q = X.y - (k - X.height) / 2 - D,
      Q = j + D * 2,
      le = k + D * 2,
      de = typeof window == 'undefined' || !!window.chrome ? 'crispEdges' : 'geometricPrecision';
    return xe('svg', {
      width: U,
      height: V,
      viewBox: ''.concat(B, ' ').concat(q, ' ').concat(Q, ' ').concat(le),
      style: n,
      className: F,
      children: [
        H.filter(function (pe) {
          return !pe.isHidden;
        }).map(function (pe) {
          return L(
            iB,
            {
              x: pe.__rf.position.x,
              y: pe.__rf.position.y,
              width: pe.__rf.width,
              height: pe.__rf.height,
              style: pe.style,
              className: he(pe),
              color: fe(pe),
              borderRadius: x,
              strokeColor: ae(pe),
              strokeWidth: b,
              shapeRendering: de,
            },
            pe.id,
          );
        }),
        L('path', {
          className: 'react-flow__minimap-mask',
          d: 'M'
            .concat(B - D, ',')
            .concat(q - D, 'h')
            .concat(Q + D * 2, 'v')
            .concat(le + D * 2, 'h')
            .concat(
              -Q - D * 2,
              `z
        M`,
            )
            .concat(W.x, ',')
            .concat(W.y, 'h')
            .concat(W.width, 'v')
            .concat(W.height, 'h')
            .concat(-W.width, 'z'),
          fill: _,
          fillRule: 'evenodd',
        }),
      ],
    });
  };
jb.displayName = 'MiniMap';
var lB = T.exports.memo(jb),
  aS;
function lv() {
  return (
    (lv =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    lv.apply(this, arguments)
  );
}
var sB = function (t) {
    return T.exports.createElement(
      'svg',
      lv({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32' }, t),
      aS ||
        (aS = T.exports.createElement('path', {
          d: 'M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z',
        })),
    );
  },
  uS;
function sv() {
  return (
    (sv =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    sv.apply(this, arguments)
  );
}
var cB = function (t) {
    return T.exports.createElement(
      'svg',
      sv({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 5' }, t),
      uS || (uS = T.exports.createElement('path', { d: 'M0 0h32v4.2H0z' })),
    );
  },
  lS;
function cv() {
  return (
    (cv =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    cv.apply(this, arguments)
  );
}
var fB = function (t) {
    return T.exports.createElement(
      'svg',
      cv({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 30' }, t),
      lS ||
        (lS = T.exports.createElement('path', {
          d:
            'M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z',
        })),
    );
  },
  sS;
function fv() {
  return (
    (fv =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    fv.apply(this, arguments)
  );
}
var dB = function (t) {
    return T.exports.createElement(
      'svg',
      fv({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 25 32' }, t),
      sS ||
        (sS = T.exports.createElement('path', {
          d:
            'M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z',
        })),
    );
  },
  cS;
function dv() {
  return (
    (dv =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    dv.apply(this, arguments)
  );
}
var pB = function (t) {
    return T.exports.createElement(
      'svg',
      dv({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 25 32' }, t),
      cS ||
        (cS = T.exports.createElement('path', {
          d:
            'M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z',
        })),
    );
  },
  hB = ['children', 'className'];
function fS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function vB(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fS(Object(n), !0).forEach(function (r) {
          an(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : fS(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var Ls = function (t) {
    var n = t.children,
      r = t.className,
      i = hf(t, hB);
    return L(
      'button',
      at(Ze({}, vB({ type: 'button', className: tr(['react-flow__controls-button', r]) }, i)), {
        children: n,
      }),
    );
  },
  Wb = function (t) {
    var n = t.style,
      r = t.showZoom,
      i = r === void 0 ? !0 : r,
      u = t.showFitView,
      l = u === void 0 ? !0 : u,
      c = t.showInteractive,
      f = c === void 0 ? !0 : c,
      p = t.fitViewParams,
      h = t.onZoomIn,
      x = t.onZoomOut,
      S = t.onFitView,
      b = t.onInteractiveChange,
      E = t.className,
      _ = t.children,
      m = T.exports.useState(!1),
      v = Ht(m, 2),
      w = v[0],
      N = v[1],
      g = Ie(function (Y) {
        return Y.setInteractive;
      }),
      M = Pb(),
      P = M.zoomIn,
      H = M.zoomOut,
      F = M.fitView,
      U = Pe(function (Y) {
        return Y.nodesDraggable && Y.nodesConnectable && Y.elementsSelectable;
      }),
      V = tr(['react-flow__controls', E]),
      fe = T.exports.useCallback(
        function () {
          P == null || P(), h == null || h();
        },
        [P, h],
      ),
      ae = T.exports.useCallback(
        function () {
          H == null || H(), x == null || x();
        },
        [H, x],
      ),
      he = T.exports.useCallback(
        function () {
          F == null || F(p), S == null || S();
        },
        [F, p, S],
      ),
      R = T.exports.useCallback(
        function () {
          g == null || g(!U), b == null || b(!U);
        },
        [U, g, b],
      );
    return (
      T.exports.useEffect(function () {
        N(!0);
      }, []),
      w
        ? xe('div', {
            className: V,
            style: n,
            children: [
              i &&
                xe(Tt, {
                  children: [
                    L(Ls, {
                      onClick: fe,
                      className: 'react-flow__controls-zoomin',
                      children: L(sB, {}),
                    }),
                    L(Ls, {
                      onClick: ae,
                      className: 'react-flow__controls-zoomout',
                      children: L(cB, {}),
                    }),
                  ],
                }),
              l &&
                L(Ls, {
                  className: 'react-flow__controls-fitview',
                  onClick: he,
                  children: L(fB, {}),
                }),
              f &&
                L(Ls, {
                  className: 'react-flow__controls-interactive',
                  onClick: R,
                  children: U ? L(pB, {}) : L(dB, {}),
                }),
              _,
            ],
          })
        : null
    );
  };
Wb.displayName = 'Controls';
var gB = T.exports.memo(Wb),
  mB = function (t, n, r) {
    return L('path', {
      stroke: r,
      strokeWidth: n,
      d: 'M'
        .concat(t / 2, ' 0 V')
        .concat(t, ' M0 ')
        .concat(t / 2, ' H')
        .concat(t),
    });
  },
  yB = function (t, n) {
    return L('circle', { cx: t, cy: t, r: t, fill: n });
  },
  Hs;
function dS(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function pS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dS(Object(n), !0).forEach(function (r) {
          an(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : dS(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
var wB = ((Hs = {}), an(Hs, _i.Dots, '#81818a'), an(Hs, _i.Lines, '#eee'), Hs),
  Yb = function (t) {
    var n = t.variant,
      r = n === void 0 ? _i.Dots : n,
      i = t.gap,
      u = i === void 0 ? 15 : i,
      l = t.size,
      c = l === void 0 ? 0.4 : l,
      f = t.color,
      p = t.style,
      h = t.className,
      x = Pe(function (F) {
        return F.transform;
      }),
      S = Ht(x, 3),
      b = S[0],
      E = S[1],
      _ = S[2],
      m = T.exports.useMemo(function () {
        return 'pattern-'.concat(Math.floor(Math.random() * 1e5));
      }, []),
      v = tr(['react-flow__background', h]),
      w = u * _,
      N = b % w,
      g = E % w,
      M = r === _i.Lines,
      P = f || wB[r],
      H = M ? mB(w, c, P) : yB(c * _, P);
    return xe('svg', {
      className: v,
      style: pS(pS({}, p), {}, { width: '100%', height: '100%' }),
      children: [
        L('pattern', {
          id: m,
          x: N,
          y: g,
          width: w,
          height: w,
          patternUnits: 'userSpaceOnUse',
          children: H,
        }),
        L('rect', { x: '0', y: '0', width: '100%', height: '100%', fill: 'url(#'.concat(m, ')') }),
      ],
    });
  };
Yb.displayName = 'Background';
var SB = T.exports.memo(Yb),
  Vb = function (t) {
    var n = t.children,
      r = T.exports.useMemo(function () {
        return Bb(Vg);
      }, []);
    return L(V_, { store: r, children: n });
  };
Vb.displayName = 'ReactFlowProvider';
var Qn = 'top',
  pr = 'bottom',
  hr = 'right',
  Jn = 'left',
  Xg = 'auto',
  Nl = [Qn, pr, hr, Jn],
  Aa = 'start',
  Gg = 'end',
  EB = 'clippingParents',
  Xb = 'viewport',
  Su = 'popper',
  _B = 'reference',
  hS = Nl.reduce(function (e, t) {
    return e.concat([t + '-' + Aa, t + '-' + Gg]);
  }, []),
  Gb = [].concat(Nl, [Xg]).reduce(function (e, t) {
    return e.concat([t, t + '-' + Aa, t + '-' + Gg]);
  }, []),
  xB = 'beforeRead',
  bB = 'read',
  CB = 'afterRead',
  OB = 'beforeMain',
  NB = 'main',
  TB = 'afterMain',
  MB = 'beforeWrite',
  PB = 'write',
  AB = 'afterWrite',
  DB = [xB, bB, CB, OB, NB, TB, MB, PB, AB];
function Rr(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function gr(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function ll(e) {
  var t = gr(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ir(e) {
  var t = gr(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function qb(e) {
  if (typeof ShadowRoot == 'undefined') return !1;
  var t = gr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function kB(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      i = t.attributes[n] || {},
      u = t.elements[n];
    !Ir(u) ||
      !Rr(u) ||
      (Object.assign(u.style, r),
      Object.keys(i).forEach(function (l) {
        var c = i[l];
        c === !1 ? u.removeAttribute(l) : u.setAttribute(l, c === !0 ? '' : c);
      }));
  });
}
function RB(e) {
  var t = e.state,
    n = {
      popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
      arrow: { position: 'absolute' },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var i = t.elements[r],
          u = t.attributes[r] || {},
          l = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          c = l.reduce(function (f, p) {
            return (f[p] = ''), f;
          }, {});
        !Ir(i) ||
          !Rr(i) ||
          (Object.assign(i.style, c),
          Object.keys(u).forEach(function (f) {
            i.removeAttribute(f);
          }));
      });
    }
  );
}
var Zb = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: kB,
  effect: RB,
  requires: ['computeStyles'],
};
function Ar(e) {
  return e.split('-')[0];
}
function Da(e) {
  var t = e.getBoundingClientRect();
  return {
    width: t.width,
    height: t.height,
    top: t.top,
    right: t.right,
    bottom: t.bottom,
    left: t.left,
    x: t.left,
    y: t.top,
  };
}
function qg(e) {
  var t = Da(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function Kb(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && qb(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Xo(e) {
  return gr(e).getComputedStyle(e);
}
function IB(e) {
  return ['table', 'td', 'th'].indexOf(Rr(e)) >= 0;
}
function Zo(e) {
  return ((ll(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Rf(e) {
  return Rr(e) === 'html' ? e : e.assignedSlot || e.parentNode || (qb(e) ? e.host : null) || Zo(e);
}
function vS(e) {
  return !Ir(e) || Xo(e).position === 'fixed' ? null : e.offsetParent;
}
function LB(e) {
  for (
    var t = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1, n = Rf(e);
    Ir(n) && ['html', 'body'].indexOf(Rr(n)) < 0;

  ) {
    var r = Xo(n);
    if (
      r.transform !== 'none' ||
      r.perspective !== 'none' ||
      r.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(r.willChange) !== -1 ||
      (t && r.willChange === 'filter') ||
      (t && r.filter && r.filter !== 'none')
    )
      return n;
    n = n.parentNode;
  }
  return null;
}
function Tl(e) {
  for (var t = gr(e), n = vS(e); n && IB(n) && Xo(n).position === 'static'; ) n = vS(n);
  return n && (Rr(n) === 'html' || (Rr(n) === 'body' && Xo(n).position === 'static'))
    ? t
    : n || LB(e) || t;
}
function Zg(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
var zo = Math.max,
  sl = Math.min,
  Bs = Math.round;
function lc(e, t, n) {
  return zo(e, sl(t, n));
}
function Qb() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Jb(e) {
  return Object.assign({}, Qb(), e);
}
function eC(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var HB = function (t, n) {
  return (
    (t = typeof t == 'function' ? t(Object.assign({}, n.rects, { placement: n.placement })) : t),
    Jb(typeof t != 'number' ? t : eC(t, Nl))
  );
};
function BB(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    u = n.elements.arrow,
    l = n.modifiersData.popperOffsets,
    c = Ar(n.placement),
    f = Zg(c),
    p = [Jn, hr].indexOf(c) >= 0,
    h = p ? 'height' : 'width';
  if (!(!u || !l)) {
    var x = HB(i.padding, n),
      S = qg(u),
      b = f === 'y' ? Qn : Jn,
      E = f === 'y' ? pr : hr,
      _ = n.rects.reference[h] + n.rects.reference[f] - l[f] - n.rects.popper[h],
      m = l[f] - n.rects.reference[f],
      v = Tl(u),
      w = v ? (f === 'y' ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
      N = _ / 2 - m / 2,
      g = x[b],
      M = w - S[h] - x[E],
      P = w / 2 - S[h] / 2 + N,
      H = lc(g, P, M),
      F = f;
    n.modifiersData[r] = ((t = {}), (t[F] = H), (t.centerOffset = H - P), t);
  }
}
function FB(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    i = r === void 0 ? '[data-popper-arrow]' : r;
  i != null &&
    ((typeof i == 'string' && ((i = t.elements.popper.querySelector(i)), !i)) ||
      !Kb(t.elements.popper, i) ||
      (t.elements.arrow = i));
}
var $B = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: BB,
    effect: FB,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow'],
  },
  zB = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function UB(e) {
  var t = e.x,
    n = e.y,
    r = window,
    i = r.devicePixelRatio || 1;
  return { x: Bs(Bs(t * i) / i) || 0, y: Bs(Bs(n * i) / i) || 0 };
}
function gS(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    i = e.placement,
    u = e.offsets,
    l = e.position,
    c = e.gpuAcceleration,
    f = e.adaptive,
    p = e.roundOffsets,
    h = p === !0 ? UB(u) : typeof p == 'function' ? p(u) : u,
    x = h.x,
    S = x === void 0 ? 0 : x,
    b = h.y,
    E = b === void 0 ? 0 : b,
    _ = u.hasOwnProperty('x'),
    m = u.hasOwnProperty('y'),
    v = Jn,
    w = Qn,
    N = window;
  if (f) {
    var g = Tl(n),
      M = 'clientHeight',
      P = 'clientWidth';
    g === gr(n) &&
      ((g = Zo(n)), Xo(g).position !== 'static' && ((M = 'scrollHeight'), (P = 'scrollWidth'))),
      (g = g),
      i === Qn && ((w = pr), (E -= g[M] - r.height), (E *= c ? 1 : -1)),
      i === Jn && ((v = hr), (S -= g[P] - r.width), (S *= c ? 1 : -1));
  }
  var H = Object.assign({ position: l }, f && zB);
  if (c) {
    var F;
    return Object.assign(
      {},
      H,
      ((F = {}),
      (F[w] = m ? '0' : ''),
      (F[v] = _ ? '0' : ''),
      (F.transform =
        (N.devicePixelRatio || 1) < 2
          ? 'translate(' + S + 'px, ' + E + 'px)'
          : 'translate3d(' + S + 'px, ' + E + 'px, 0)'),
      F),
    );
  }
  return Object.assign(
    {},
    H,
    ((t = {}), (t[w] = m ? E + 'px' : ''), (t[v] = _ ? S + 'px' : ''), (t.transform = ''), t),
  );
}
function jB(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    u = n.adaptive,
    l = u === void 0 ? !0 : u,
    c = n.roundOffsets,
    f = c === void 0 ? !0 : c,
    p = {
      placement: Ar(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      gS(
        Object.assign({}, p, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: l,
          roundOffsets: f,
        }),
      ),
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        gS(
          Object.assign({}, p, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: f,
          }),
        ),
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }));
}
var WB = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: jB, data: {} },
  Fs = { passive: !0 };
function YB(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    i = r.scroll,
    u = i === void 0 ? !0 : i,
    l = r.resize,
    c = l === void 0 ? !0 : l,
    f = gr(t.elements.popper),
    p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    u &&
      p.forEach(function (h) {
        h.addEventListener('scroll', n.update, Fs);
      }),
    c && f.addEventListener('resize', n.update, Fs),
    function () {
      u &&
        p.forEach(function (h) {
          h.removeEventListener('scroll', n.update, Fs);
        }),
        c && f.removeEventListener('resize', n.update, Fs);
    }
  );
}
var VB = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: YB,
    data: {},
  },
  XB = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function sc(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return XB[t];
  });
}
var GB = { start: 'end', end: 'start' };
function mS(e) {
  return e.replace(/start|end/g, function (t) {
    return GB[t];
  });
}
function Kg(e) {
  var t = gr(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Qg(e) {
  return Da(Zo(e)).left + Kg(e).scrollLeft;
}
function qB(e) {
  var t = gr(e),
    n = Zo(e),
    r = t.visualViewport,
    i = n.clientWidth,
    u = n.clientHeight,
    l = 0,
    c = 0;
  return (
    r &&
      ((i = r.width),
      (u = r.height),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        ((l = r.offsetLeft), (c = r.offsetTop))),
    { width: i, height: u, x: l + Qg(e), y: c }
  );
}
function ZB(e) {
  var t,
    n = Zo(e),
    r = Kg(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    u = zo(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
    l = zo(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
    c = -r.scrollLeft + Qg(e),
    f = -r.scrollTop;
  return (
    Xo(i || n).direction === 'rtl' && (c += zo(n.clientWidth, i ? i.clientWidth : 0) - u),
    { width: u, height: l, x: c, y: f }
  );
}
function Jg(e) {
  var t = Xo(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function tC(e) {
  return ['html', 'body', '#document'].indexOf(Rr(e)) >= 0
    ? e.ownerDocument.body
    : Ir(e) && Jg(e)
    ? e
    : tC(Rf(e));
}
function Uu(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = tC(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    u = gr(r),
    l = i ? [u].concat(u.visualViewport || [], Jg(r) ? r : []) : r,
    c = t.concat(l);
  return i ? c : c.concat(Uu(Rf(l)));
}
function pv(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function KB(e) {
  var t = Da(e);
  return (
    (t.top = t.top + e.clientTop),
    (t.left = t.left + e.clientLeft),
    (t.bottom = t.top + e.clientHeight),
    (t.right = t.left + e.clientWidth),
    (t.width = e.clientWidth),
    (t.height = e.clientHeight),
    (t.x = t.left),
    (t.y = t.top),
    t
  );
}
function yS(e, t) {
  return t === Xb ? pv(qB(e)) : Ir(t) ? KB(t) : pv(ZB(Zo(e)));
}
function QB(e) {
  var t = Uu(Rf(e)),
    n = ['absolute', 'fixed'].indexOf(Xo(e).position) >= 0,
    r = n && Ir(e) ? Tl(e) : e;
  return ll(r)
    ? t.filter(function (i) {
        return ll(i) && Kb(i, r) && Rr(i) !== 'body';
      })
    : [];
}
function JB(e, t, n) {
  var r = t === 'clippingParents' ? QB(e) : [].concat(t),
    i = [].concat(r, [n]),
    u = i[0],
    l = i.reduce(function (c, f) {
      var p = yS(e, f);
      return (
        (c.top = zo(p.top, c.top)),
        (c.right = sl(p.right, c.right)),
        (c.bottom = sl(p.bottom, c.bottom)),
        (c.left = zo(p.left, c.left)),
        c
      );
    }, yS(e, u));
  return (
    (l.width = l.right - l.left), (l.height = l.bottom - l.top), (l.x = l.left), (l.y = l.top), l
  );
}
function cl(e) {
  return e.split('-')[1];
}
function nC(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? Ar(r) : null,
    u = r ? cl(r) : null,
    l = t.x + t.width / 2 - n.width / 2,
    c = t.y + t.height / 2 - n.height / 2,
    f;
  switch (i) {
    case Qn:
      f = { x: l, y: t.y - n.height };
      break;
    case pr:
      f = { x: l, y: t.y + t.height };
      break;
    case hr:
      f = { x: t.x + t.width, y: c };
      break;
    case Jn:
      f = { x: t.x - n.width, y: c };
      break;
    default:
      f = { x: t.x, y: t.y };
  }
  var p = i ? Zg(i) : null;
  if (p != null) {
    var h = p === 'y' ? 'height' : 'width';
    switch (u) {
      case Aa:
        f[p] = f[p] - (t[h] / 2 - n[h] / 2);
        break;
      case Gg:
        f[p] = f[p] + (t[h] / 2 - n[h] / 2);
        break;
    }
  }
  return f;
}
function fl(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    u = n.boundary,
    l = u === void 0 ? EB : u,
    c = n.rootBoundary,
    f = c === void 0 ? Xb : c,
    p = n.elementContext,
    h = p === void 0 ? Su : p,
    x = n.altBoundary,
    S = x === void 0 ? !1 : x,
    b = n.padding,
    E = b === void 0 ? 0 : b,
    _ = Jb(typeof E != 'number' ? E : eC(E, Nl)),
    m = h === Su ? _B : Su,
    v = e.elements.reference,
    w = e.rects.popper,
    N = e.elements[S ? m : h],
    g = JB(ll(N) ? N : N.contextElement || Zo(e.elements.popper), l, f),
    M = Da(v),
    P = nC({ reference: M, element: w, strategy: 'absolute', placement: i }),
    H = pv(Object.assign({}, w, P)),
    F = h === Su ? H : M,
    U = {
      top: g.top - F.top + _.top,
      bottom: F.bottom - g.bottom + _.bottom,
      left: g.left - F.left + _.left,
      right: F.right - g.right + _.right,
    },
    V = e.modifiersData.offset;
  if (h === Su && V) {
    var fe = V[i];
    Object.keys(U).forEach(function (ae) {
      var he = [hr, pr].indexOf(ae) >= 0 ? 1 : -1,
        R = [Qn, pr].indexOf(ae) >= 0 ? 'y' : 'x';
      U[ae] += fe[R] * he;
    });
  }
  return U;
}
function e6(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    u = n.rootBoundary,
    l = n.padding,
    c = n.flipVariations,
    f = n.allowedAutoPlacements,
    p = f === void 0 ? Gb : f,
    h = cl(r),
    x = h
      ? c
        ? hS
        : hS.filter(function (E) {
            return cl(E) === h;
          })
      : Nl,
    S = x.filter(function (E) {
      return p.indexOf(E) >= 0;
    });
  S.length === 0 && (S = x);
  var b = S.reduce(function (E, _) {
    return (E[_] = fl(e, { placement: _, boundary: i, rootBoundary: u, padding: l })[Ar(_)]), E;
  }, {});
  return Object.keys(b).sort(function (E, _) {
    return b[E] - b[_];
  });
}
function t6(e) {
  if (Ar(e) === Xg) return [];
  var t = sc(e);
  return [mS(e), t, mS(t)];
}
function n6(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var i = n.mainAxis,
        u = i === void 0 ? !0 : i,
        l = n.altAxis,
        c = l === void 0 ? !0 : l,
        f = n.fallbackPlacements,
        p = n.padding,
        h = n.boundary,
        x = n.rootBoundary,
        S = n.altBoundary,
        b = n.flipVariations,
        E = b === void 0 ? !0 : b,
        _ = n.allowedAutoPlacements,
        m = t.options.placement,
        v = Ar(m),
        w = v === m,
        N = f || (w || !E ? [sc(m)] : t6(m)),
        g = [m].concat(N).reduce(function (B, q) {
          return B.concat(
            Ar(q) === Xg
              ? e6(t, {
                  placement: q,
                  boundary: h,
                  rootBoundary: x,
                  padding: p,
                  flipVariations: E,
                  allowedAutoPlacements: _,
                })
              : q,
          );
        }, []),
        M = t.rects.reference,
        P = t.rects.popper,
        H = new Map(),
        F = !0,
        U = g[0],
        V = 0;
      V < g.length;
      V++
    ) {
      var fe = g[V],
        ae = Ar(fe),
        he = cl(fe) === Aa,
        R = [Qn, pr].indexOf(ae) >= 0,
        Y = R ? 'width' : 'height',
        W = fl(t, { placement: fe, boundary: h, rootBoundary: x, altBoundary: S, padding: p }),
        X = R ? (he ? hr : Jn) : he ? pr : Qn;
      M[Y] > P[Y] && (X = sc(X));
      var ne = sc(X),
        ce = [];
      if (
        (u && ce.push(W[ae] <= 0),
        c && ce.push(W[X] <= 0, W[ne] <= 0),
        ce.every(function (B) {
          return B;
        }))
      ) {
        (U = fe), (F = !1);
        break;
      }
      H.set(fe, ce);
    }
    if (F)
      for (
        var ue = E ? 3 : 1,
          j = function (q) {
            var Q = g.find(function (le) {
              var de = H.get(le);
              if (de)
                return de.slice(0, q).every(function (pe) {
                  return pe;
                });
            });
            if (Q) return (U = Q), 'break';
          },
          k = ue;
        k > 0;
        k--
      ) {
        var D = j(k);
        if (D === 'break') break;
      }
    t.placement !== U && ((t.modifiersData[r]._skip = !0), (t.placement = U), (t.reset = !0));
  }
}
var r6 = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: n6,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
};
function wS(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function SS(e) {
  return [Qn, hr, pr, Jn].some(function (t) {
    return e[t] >= 0;
  });
}
function o6(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    u = t.modifiersData.preventOverflow,
    l = fl(t, { elementContext: 'reference' }),
    c = fl(t, { altBoundary: !0 }),
    f = wS(l, r),
    p = wS(c, i, u),
    h = SS(f),
    x = SS(p);
  (t.modifiersData[n] = {
    referenceClippingOffsets: f,
    popperEscapeOffsets: p,
    isReferenceHidden: h,
    hasPopperEscaped: x,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': h,
      'data-popper-escaped': x,
    }));
}
var i6 = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: o6,
};
function a6(e, t, n) {
  var r = Ar(e),
    i = [Jn, Qn].indexOf(r) >= 0 ? -1 : 1,
    u = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
    l = u[0],
    c = u[1];
  return (
    (l = l || 0), (c = (c || 0) * i), [Jn, hr].indexOf(r) >= 0 ? { x: c, y: l } : { x: l, y: c }
  );
}
function u6(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    u = i === void 0 ? [0, 0] : i,
    l = Gb.reduce(function (h, x) {
      return (h[x] = a6(x, t.rects, u)), h;
    }, {}),
    c = l[t.placement],
    f = c.x,
    p = c.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += f), (t.modifiersData.popperOffsets.y += p)),
    (t.modifiersData[r] = l);
}
var l6 = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: u6 };
function s6(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = nC({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  });
}
var c6 = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: s6, data: {} };
function f6(e) {
  return e === 'x' ? 'y' : 'x';
}
function d6(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.mainAxis,
    u = i === void 0 ? !0 : i,
    l = n.altAxis,
    c = l === void 0 ? !1 : l,
    f = n.boundary,
    p = n.rootBoundary,
    h = n.altBoundary,
    x = n.padding,
    S = n.tether,
    b = S === void 0 ? !0 : S,
    E = n.tetherOffset,
    _ = E === void 0 ? 0 : E,
    m = fl(t, { boundary: f, rootBoundary: p, padding: x, altBoundary: h }),
    v = Ar(t.placement),
    w = cl(t.placement),
    N = !w,
    g = Zg(v),
    M = f6(g),
    P = t.modifiersData.popperOffsets,
    H = t.rects.reference,
    F = t.rects.popper,
    U = typeof _ == 'function' ? _(Object.assign({}, t.rects, { placement: t.placement })) : _,
    V = { x: 0, y: 0 };
  if (!!P) {
    if (u || c) {
      var fe = g === 'y' ? Qn : Jn,
        ae = g === 'y' ? pr : hr,
        he = g === 'y' ? 'height' : 'width',
        R = P[g],
        Y = P[g] + m[fe],
        W = P[g] - m[ae],
        X = b ? -F[he] / 2 : 0,
        ne = w === Aa ? H[he] : F[he],
        ce = w === Aa ? -F[he] : -H[he],
        ue = t.elements.arrow,
        j = b && ue ? qg(ue) : { width: 0, height: 0 },
        k = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Qb(),
        D = k[fe],
        B = k[ae],
        q = lc(0, H[he], j[he]),
        Q = N ? H[he] / 2 - X - q - D - U : ne - q - D - U,
        le = N ? -H[he] / 2 + X + q + B + U : ce + q + B + U,
        de = t.elements.arrow && Tl(t.elements.arrow),
        pe = de ? (g === 'y' ? de.clientTop || 0 : de.clientLeft || 0) : 0,
        Ee = t.modifiersData.offset ? t.modifiersData.offset[t.placement][g] : 0,
        it = P[g] + Q - Ee - pe,
        Ve = P[g] + le - Ee;
      if (u) {
        var ut = lc(b ? sl(Y, it) : Y, R, b ? zo(W, Ve) : W);
        (P[g] = ut), (V[g] = ut - R);
      }
      if (c) {
        var J = g === 'x' ? Qn : Jn,
          te = g === 'x' ? pr : hr,
          ie = P[M],
          G = ie + m[J],
          ye = ie - m[te],
          be = lc(b ? sl(G, it) : G, ie, b ? zo(ye, Ve) : ye);
        (P[M] = be), (V[M] = be - ie);
      }
    }
    t.modifiersData[r] = V;
  }
}
var p6 = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: d6,
  requiresIfExists: ['offset'],
};
function h6(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function v6(e) {
  return e === gr(e) || !Ir(e) ? Kg(e) : h6(e);
}
function g6(e, t, n) {
  n === void 0 && (n = !1);
  var r = Zo(t),
    i = Da(e),
    u = Ir(t),
    l = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (u || (!u && !n)) &&
      ((Rr(t) !== 'body' || Jg(r)) && (l = v6(t)),
      Ir(t) ? ((c = Da(t)), (c.x += t.clientLeft), (c.y += t.clientTop)) : r && (c.x = Qg(r))),
    {
      x: i.left + l.scrollLeft - c.x,
      y: i.top + l.scrollTop - c.y,
      width: i.width,
      height: i.height,
    }
  );
}
function m6(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (u) {
    t.set(u.name, u);
  });
  function i(u) {
    n.add(u.name);
    var l = [].concat(u.requires || [], u.requiresIfExists || []);
    l.forEach(function (c) {
      if (!n.has(c)) {
        var f = t.get(c);
        f && i(f);
      }
    }),
      r.push(u);
  }
  return (
    e.forEach(function (u) {
      n.has(u.name) || i(u);
    }),
    r
  );
}
function y6(e) {
  var t = m6(e);
  return DB.reduce(function (n, r) {
    return n.concat(
      t.filter(function (i) {
        return i.phase === r;
      }),
    );
  }, []);
}
function w6(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function S6(e) {
  var t = e.reduce(function (n, r) {
    var i = n[r.name];
    return (
      (n[r.name] = i
        ? Object.assign({}, i, r, {
            options: Object.assign({}, i.options, r.options),
            data: Object.assign({}, i.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var ES = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function _S() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == 'function');
  });
}
function E6(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    u = i === void 0 ? ES : i;
  return function (c, f, p) {
    p === void 0 && (p = u);
    var h = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, ES, u),
        modifiersData: {},
        elements: { reference: c, popper: f },
        attributes: {},
        styles: {},
      },
      x = [],
      S = !1,
      b = {
        state: h,
        setOptions: function (v) {
          _(),
            (h.options = Object.assign({}, u, h.options, v)),
            (h.scrollParents = {
              reference: ll(c) ? Uu(c) : c.contextElement ? Uu(c.contextElement) : [],
              popper: Uu(f),
            });
          var w = y6(S6([].concat(r, h.options.modifiers)));
          return (
            (h.orderedModifiers = w.filter(function (N) {
              return N.enabled;
            })),
            E(),
            b.update()
          );
        },
        forceUpdate: function () {
          if (!S) {
            var v = h.elements,
              w = v.reference,
              N = v.popper;
            if (!!_S(w, N)) {
              (h.rects = {
                reference: g6(w, Tl(N), h.options.strategy === 'fixed'),
                popper: qg(N),
              }),
                (h.reset = !1),
                (h.placement = h.options.placement),
                h.orderedModifiers.forEach(function (V) {
                  return (h.modifiersData[V.name] = Object.assign({}, V.data));
                });
              for (var g = 0; g < h.orderedModifiers.length; g++) {
                if (h.reset === !0) {
                  (h.reset = !1), (g = -1);
                  continue;
                }
                var M = h.orderedModifiers[g],
                  P = M.fn,
                  H = M.options,
                  F = H === void 0 ? {} : H,
                  U = M.name;
                typeof P == 'function' &&
                  (h = P({ state: h, options: F, name: U, instance: b }) || h);
              }
            }
          }
        },
        update: w6(function () {
          return new Promise(function (m) {
            b.forceUpdate(), m(h);
          });
        }),
        destroy: function () {
          _(), (S = !0);
        },
      };
    if (!_S(c, f)) return b;
    b.setOptions(p).then(function (m) {
      !S && p.onFirstUpdate && p.onFirstUpdate(m);
    });
    function E() {
      h.orderedModifiers.forEach(function (m) {
        var v = m.name,
          w = m.options,
          N = w === void 0 ? {} : w,
          g = m.effect;
        if (typeof g == 'function') {
          var M = g({ state: h, name: v, instance: b, options: N }),
            P = function () {};
          x.push(M || P);
        }
      });
    }
    function _() {
      x.forEach(function (m) {
        return m();
      }),
        (x = []);
    }
    return b;
  };
}
var _6 = [VB, c6, WB, Zb, l6, r6, p6, $B, i6],
  x6 = E6({ defaultModifiers: _6 }),
  b6 = 'tippy-box',
  rC = 'tippy-content',
  C6 = 'tippy-backdrop',
  oC = 'tippy-arrow',
  iC = 'tippy-svg-arrow',
  si = { passive: !0, capture: !0 };
function Vp(e, t, n) {
  if (Array.isArray(e)) {
    var r = e[t];
    return r == null ? (Array.isArray(n) ? n[t] : n) : r;
  }
  return e;
}
function em(e, t) {
  var n = {}.toString.call(e);
  return n.indexOf('[object') === 0 && n.indexOf(t + ']') > -1;
}
function aC(e, t) {
  return typeof e == 'function' ? e.apply(void 0, t) : e;
}
function xS(e, t) {
  if (t === 0) return e;
  var n;
  return function (r) {
    clearTimeout(n),
      (n = setTimeout(function () {
        e(r);
      }, t));
  };
}
function O6(e) {
  return e.split(/\s+/).filter(Boolean);
}
function Tu(e) {
  return [].concat(e);
}
function bS(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function N6(e) {
  return e.filter(function (t, n) {
    return e.indexOf(t) === n;
  });
}
function T6(e) {
  return e.split('-')[0];
}
function Yc(e) {
  return [].slice.call(e);
}
function M6(e) {
  return Object.keys(e).reduce(function (t, n) {
    return e[n] !== void 0 && (t[n] = e[n]), t;
  }, {});
}
function ju() {
  return document.createElement('div');
}
function If(e) {
  return ['Element', 'Fragment'].some(function (t) {
    return em(e, t);
  });
}
function P6(e) {
  return em(e, 'NodeList');
}
function A6(e) {
  return em(e, 'MouseEvent');
}
function D6(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
function k6(e) {
  return If(e) ? [e] : P6(e) ? Yc(e) : Array.isArray(e) ? e : Yc(document.querySelectorAll(e));
}
function Xp(e, t) {
  e.forEach(function (n) {
    n && (n.style.transitionDuration = t + 'ms');
  });
}
function CS(e, t) {
  e.forEach(function (n) {
    n && n.setAttribute('data-state', t);
  });
}
function R6(e) {
  var t,
    n = Tu(e),
    r = n[0];
  return !(r == null || (t = r.ownerDocument) == null) && t.body ? r.ownerDocument : document;
}
function I6(e, t) {
  var n = t.clientX,
    r = t.clientY;
  return e.every(function (i) {
    var u = i.popperRect,
      l = i.popperState,
      c = i.props,
      f = c.interactiveBorder,
      p = T6(l.placement),
      h = l.modifiersData.offset;
    if (!h) return !0;
    var x = p === 'bottom' ? h.top.y : 0,
      S = p === 'top' ? h.bottom.y : 0,
      b = p === 'right' ? h.left.x : 0,
      E = p === 'left' ? h.right.x : 0,
      _ = u.top - r + x > f,
      m = r - u.bottom - S > f,
      v = u.left - n + b > f,
      w = n - u.right - E > f;
    return _ || m || v || w;
  });
}
function Gp(e, t, n) {
  var r = t + 'EventListener';
  ['transitionend', 'webkitTransitionEnd'].forEach(function (i) {
    e[r](i, n);
  });
}
var xr = { isTouch: !1 },
  OS = 0;
function L6() {
  xr.isTouch ||
    ((xr.isTouch = !0), window.performance && document.addEventListener('mousemove', uC));
}
function uC() {
  var e = performance.now();
  e - OS < 20 && ((xr.isTouch = !1), document.removeEventListener('mousemove', uC)), (OS = e);
}
function H6() {
  var e = document.activeElement;
  if (D6(e)) {
    var t = e._tippy;
    e.blur && !t.state.isVisible && e.blur();
  }
}
function B6() {
  document.addEventListener('touchstart', L6, si), window.addEventListener('blur', H6);
}
var F6 = typeof window != 'undefined' && typeof document != 'undefined',
  $6 = F6 ? navigator.userAgent : '',
  z6 = /MSIE |Trident\//.test($6),
  U6 = { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
  j6 = {
    allowHTML: !1,
    animation: 'fade',
    arrow: !0,
    content: '',
    inertia: !1,
    maxWidth: 350,
    role: 'tooltip',
    theme: '',
    zIndex: 9999,
  },
  fr = Object.assign(
    {
      appendTo: function () {
        return document.body;
      },
      aria: { content: 'auto', expanded: 'auto' },
      delay: 0,
      duration: [300, 250],
      getReferenceClientRect: null,
      hideOnClick: !0,
      ignoreAttributes: !1,
      interactive: !1,
      interactiveBorder: 2,
      interactiveDebounce: 0,
      moveTransition: '',
      offset: [0, 10],
      onAfterUpdate: function () {},
      onBeforeUpdate: function () {},
      onCreate: function () {},
      onDestroy: function () {},
      onHidden: function () {},
      onHide: function () {},
      onMount: function () {},
      onShow: function () {},
      onShown: function () {},
      onTrigger: function () {},
      onUntrigger: function () {},
      onClickOutside: function () {},
      placement: 'top',
      plugins: [],
      popperOptions: {},
      render: null,
      showOnCreate: !1,
      touch: !0,
      trigger: 'mouseenter focus',
      triggerTarget: null,
    },
    U6,
    {},
    j6,
  ),
  W6 = Object.keys(fr),
  Y6 = function (t) {
    var n = Object.keys(t);
    n.forEach(function (r) {
      fr[r] = t[r];
    });
  };
function lC(e) {
  var t = e.plugins || [],
    n = t.reduce(function (r, i) {
      var u = i.name,
        l = i.defaultValue;
      return u && (r[u] = e[u] !== void 0 ? e[u] : l), r;
    }, {});
  return Object.assign({}, e, {}, n);
}
function V6(e, t) {
  var n = t ? Object.keys(lC(Object.assign({}, fr, { plugins: t }))) : W6,
    r = n.reduce(function (i, u) {
      var l = (e.getAttribute('data-tippy-' + u) || '').trim();
      if (!l) return i;
      if (u === 'content') i[u] = l;
      else
        try {
          i[u] = JSON.parse(l);
        } catch (c) {
          i[u] = l;
        }
      return i;
    }, {});
  return r;
}
function NS(e, t) {
  var n = Object.assign(
    {},
    t,
    { content: aC(t.content, [e]) },
    t.ignoreAttributes ? {} : V6(e, t.plugins),
  );
  return (
    (n.aria = Object.assign({}, fr.aria, {}, n.aria)),
    (n.aria = {
      expanded: n.aria.expanded === 'auto' ? t.interactive : n.aria.expanded,
      content: n.aria.content === 'auto' ? (t.interactive ? null : 'describedby') : n.aria.content,
    }),
    n
  );
}
var X6 = function () {
  return 'innerHTML';
};
function hv(e, t) {
  e[X6()] = t;
}
function TS(e) {
  var t = ju();
  return (
    e === !0 ? (t.className = oC) : ((t.className = iC), If(e) ? t.appendChild(e) : hv(t, e)), t
  );
}
function MS(e, t) {
  If(t.content)
    ? (hv(e, ''), e.appendChild(t.content))
    : typeof t.content != 'function' &&
      (t.allowHTML ? hv(e, t.content) : (e.textContent = t.content));
}
function vv(e) {
  var t = e.firstElementChild,
    n = Yc(t.children);
  return {
    box: t,
    content: n.find(function (r) {
      return r.classList.contains(rC);
    }),
    arrow: n.find(function (r) {
      return r.classList.contains(oC) || r.classList.contains(iC);
    }),
    backdrop: n.find(function (r) {
      return r.classList.contains(C6);
    }),
  };
}
function sC(e) {
  var t = ju(),
    n = ju();
  (n.className = b6), n.setAttribute('data-state', 'hidden'), n.setAttribute('tabindex', '-1');
  var r = ju();
  (r.className = rC),
    r.setAttribute('data-state', 'hidden'),
    MS(r, e.props),
    t.appendChild(n),
    n.appendChild(r),
    i(e.props, e.props);
  function i(u, l) {
    var c = vv(t),
      f = c.box,
      p = c.content,
      h = c.arrow;
    l.theme ? f.setAttribute('data-theme', l.theme) : f.removeAttribute('data-theme'),
      typeof l.animation == 'string'
        ? f.setAttribute('data-animation', l.animation)
        : f.removeAttribute('data-animation'),
      l.inertia ? f.setAttribute('data-inertia', '') : f.removeAttribute('data-inertia'),
      (f.style.maxWidth = typeof l.maxWidth == 'number' ? l.maxWidth + 'px' : l.maxWidth),
      l.role ? f.setAttribute('role', l.role) : f.removeAttribute('role'),
      (u.content !== l.content || u.allowHTML !== l.allowHTML) && MS(p, e.props),
      l.arrow
        ? h
          ? u.arrow !== l.arrow && (f.removeChild(h), f.appendChild(TS(l.arrow)))
          : f.appendChild(TS(l.arrow))
        : h && f.removeChild(h);
  }
  return { popper: t, onUpdate: i };
}
sC.$$tippy = !0;
var G6 = 1,
  $s = [],
  qp = [];
function q6(e, t) {
  var n = NS(e, Object.assign({}, fr, {}, lC(M6(t)))),
    r,
    i,
    u,
    l = !1,
    c = !1,
    f = !1,
    p = !1,
    h,
    x,
    S,
    b = [],
    E = xS(J, n.interactiveDebounce),
    _,
    m = G6++,
    v = null,
    w = N6(n.plugins),
    N = { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 },
    g = {
      id: m,
      reference: e,
      popper: ju(),
      popperInstance: v,
      props: n,
      state: N,
      plugins: w,
      clearDelayTimeouts: ht,
      setProps: yt,
      setContent: bt,
      show: Ae,
      hide: ln,
      hideWithInteractivity: In,
      enable: ke,
      disable: $e,
      unmount: nr,
      destroy: Ln,
    };
  if (!n.render) return g;
  var M = n.render(g),
    P = M.popper,
    H = M.onUpdate;
  P.setAttribute('data-tippy-root', ''),
    (P.id = 'tippy-' + g.id),
    (g.popper = P),
    (e._tippy = g),
    (P._tippy = g);
  var F = w.map(function (K) {
      return K.fn(g);
    }),
    U = e.hasAttribute('aria-expanded');
  return (
    it(),
    ue(),
    X(),
    ne('onCreate', [g]),
    n.showOnCreate && nt(),
    P.addEventListener('mouseenter', function () {
      g.props.interactive && g.state.isVisible && g.clearDelayTimeouts();
    }),
    P.addEventListener('mouseleave', function (K) {
      g.props.interactive &&
        g.props.trigger.indexOf('mouseenter') >= 0 &&
        (R().addEventListener('mousemove', E), E(K));
    }),
    g
  );
  function V() {
    var K = g.props.touch;
    return Array.isArray(K) ? K : [K, 0];
  }
  function fe() {
    return V()[0] === 'hold';
  }
  function ae() {
    var K;
    return !!((K = g.props.render) != null && K.$$tippy);
  }
  function he() {
    return _ || e;
  }
  function R() {
    var K = he().parentNode;
    return K ? R6(K) : document;
  }
  function Y() {
    return vv(P);
  }
  function W(K) {
    return (g.state.isMounted && !g.state.isVisible) || xr.isTouch || (h && h.type === 'focus')
      ? 0
      : Vp(g.props.delay, K ? 0 : 1, fr.delay);
  }
  function X() {
    (P.style.pointerEvents = g.props.interactive && g.state.isVisible ? '' : 'none'),
      (P.style.zIndex = '' + g.props.zIndex);
  }
  function ne(K, we, Ce) {
    if (
      (Ce === void 0 && (Ce = !0),
      F.forEach(function (Ue) {
        Ue[K] && Ue[K].apply(void 0, we);
      }),
      Ce)
    ) {
      var We;
      (We = g.props)[K].apply(We, we);
    }
  }
  function ce() {
    var K = g.props.aria;
    if (!!K.content) {
      var we = 'aria-' + K.content,
        Ce = P.id,
        We = Tu(g.props.triggerTarget || e);
      We.forEach(function (Ue) {
        var Ct = Ue.getAttribute(we);
        if (g.state.isVisible) Ue.setAttribute(we, Ct ? Ct + ' ' + Ce : Ce);
        else {
          var Pt = Ct && Ct.replace(Ce, '').trim();
          Pt ? Ue.setAttribute(we, Pt) : Ue.removeAttribute(we);
        }
      });
    }
  }
  function ue() {
    if (!(U || !g.props.aria.expanded)) {
      var K = Tu(g.props.triggerTarget || e);
      K.forEach(function (we) {
        g.props.interactive
          ? we.setAttribute('aria-expanded', g.state.isVisible && we === he() ? 'true' : 'false')
          : we.removeAttribute('aria-expanded');
      });
    }
  }
  function j() {
    R().removeEventListener('mousemove', E),
      ($s = $s.filter(function (K) {
        return K !== E;
      }));
  }
  function k(K) {
    if (
      !(xr.isTouch && (f || K.type === 'mousedown')) &&
      !(g.props.interactive && P.contains(K.target))
    ) {
      if (he().contains(K.target)) {
        if (xr.isTouch || (g.state.isVisible && g.props.trigger.indexOf('click') >= 0)) return;
      } else ne('onClickOutside', [g, K]);
      g.props.hideOnClick === !0 &&
        (g.clearDelayTimeouts(),
        g.hide(),
        (c = !0),
        setTimeout(function () {
          c = !1;
        }),
        g.state.isMounted || Q());
    }
  }
  function D() {
    f = !0;
  }
  function B() {
    f = !1;
  }
  function q() {
    var K = R();
    K.addEventListener('mousedown', k, !0),
      K.addEventListener('touchend', k, si),
      K.addEventListener('touchstart', B, si),
      K.addEventListener('touchmove', D, si);
  }
  function Q() {
    var K = R();
    K.removeEventListener('mousedown', k, !0),
      K.removeEventListener('touchend', k, si),
      K.removeEventListener('touchstart', B, si),
      K.removeEventListener('touchmove', D, si);
  }
  function le(K, we) {
    pe(K, function () {
      !g.state.isVisible && P.parentNode && P.parentNode.contains(P) && we();
    });
  }
  function de(K, we) {
    pe(K, we);
  }
  function pe(K, we) {
    var Ce = Y().box;
    function We(Ue) {
      Ue.target === Ce && (Gp(Ce, 'remove', We), we());
    }
    if (K === 0) return we();
    Gp(Ce, 'remove', x), Gp(Ce, 'add', We), (x = We);
  }
  function Ee(K, we, Ce) {
    Ce === void 0 && (Ce = !1);
    var We = Tu(g.props.triggerTarget || e);
    We.forEach(function (Ue) {
      Ue.addEventListener(K, we, Ce), b.push({ node: Ue, eventType: K, handler: we, options: Ce });
    });
  }
  function it() {
    fe() && (Ee('touchstart', ut, { passive: !0 }), Ee('touchend', te, { passive: !0 })),
      O6(g.props.trigger).forEach(function (K) {
        if (K !== 'manual')
          switch ((Ee(K, ut), K)) {
            case 'mouseenter':
              Ee('mouseleave', te);
              break;
            case 'focus':
              Ee(z6 ? 'focusout' : 'blur', ie);
              break;
            case 'focusin':
              Ee('focusout', ie);
              break;
          }
      });
  }
  function Ve() {
    b.forEach(function (K) {
      var we = K.node,
        Ce = K.eventType,
        We = K.handler,
        Ue = K.options;
      we.removeEventListener(Ce, We, Ue);
    }),
      (b = []);
  }
  function ut(K) {
    var we,
      Ce = !1;
    if (!(!g.state.isEnabled || G(K) || c)) {
      var We = ((we = h) == null ? void 0 : we.type) === 'focus';
      (h = K),
        (_ = K.currentTarget),
        ue(),
        !g.state.isVisible &&
          A6(K) &&
          $s.forEach(function (Ue) {
            return Ue(K);
          }),
        K.type === 'click' &&
        (g.props.trigger.indexOf('mouseenter') < 0 || l) &&
        g.props.hideOnClick !== !1 &&
        g.state.isVisible
          ? (Ce = !0)
          : nt(K),
        K.type === 'click' && (l = !Ce),
        Ce && !We && xt(K);
    }
  }
  function J(K) {
    var we = K.target,
      Ce = he().contains(we) || P.contains(we);
    if (!(K.type === 'mousemove' && Ce)) {
      var We = Fe()
        .concat(P)
        .map(function (Ue) {
          var Ct,
            Pt = Ue._tippy,
            mn = (Ct = Pt.popperInstance) == null ? void 0 : Ct.state;
          return mn ? { popperRect: Ue.getBoundingClientRect(), popperState: mn, props: n } : null;
        })
        .filter(Boolean);
      I6(We, K) && (j(), xt(K));
    }
  }
  function te(K) {
    var we = G(K) || (g.props.trigger.indexOf('click') >= 0 && l);
    if (!we) {
      if (g.props.interactive) {
        g.hideWithInteractivity(K);
        return;
      }
      xt(K);
    }
  }
  function ie(K) {
    (g.props.trigger.indexOf('focusin') < 0 && K.target !== he()) ||
      (g.props.interactive && K.relatedTarget && P.contains(K.relatedTarget)) ||
      xt(K);
  }
  function G(K) {
    return xr.isTouch ? fe() !== K.type.indexOf('touch') >= 0 : !1;
  }
  function ye() {
    be();
    var K = g.props,
      we = K.popperOptions,
      Ce = K.placement,
      We = K.offset,
      Ue = K.getReferenceClientRect,
      Ct = K.moveTransition,
      Pt = ae() ? vv(P).arrow : null,
      mn = Ue ? { getBoundingClientRect: Ue, contextElement: Ue.contextElement || he() } : e,
      mr = {
        name: '$$tippy',
        enabled: !0,
        phase: 'beforeWrite',
        requires: ['computeStyles'],
        fn: function (wr) {
          var wn = wr.state;
          if (ae()) {
            var lo = Y(),
              rr = lo.box;
            ['placement', 'reference-hidden', 'escaped'].forEach(function (en) {
              en === 'placement'
                ? rr.setAttribute('data-placement', wn.placement)
                : wn.attributes.popper['data-popper-' + en]
                ? rr.setAttribute('data-' + en, '')
                : rr.removeAttribute('data-' + en);
            }),
              (wn.attributes.popper = {});
          }
        },
      },
      yn = [
        { name: 'offset', options: { offset: We } },
        { name: 'preventOverflow', options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
        { name: 'flip', options: { padding: 5 } },
        { name: 'computeStyles', options: { adaptive: !Ct } },
        mr,
      ];
    ae() && Pt && yn.push({ name: 'arrow', options: { element: Pt, padding: 3 } }),
      yn.push.apply(yn, (we == null ? void 0 : we.modifiers) || []),
      (g.popperInstance = x6(
        mn,
        P,
        Object.assign({}, we, { placement: Ce, onFirstUpdate: S, modifiers: yn }),
      ));
  }
  function be() {
    g.popperInstance && (g.popperInstance.destroy(), (g.popperInstance = null));
  }
  function Xe() {
    var K = g.props.appendTo,
      we,
      Ce = he();
    (g.props.interactive && K === fr.appendTo) || K === 'parent'
      ? (we = Ce.parentNode)
      : (we = aC(K, [Ce])),
      we.contains(P) || we.appendChild(P),
      ye();
  }
  function Fe() {
    return Yc(P.querySelectorAll('[data-tippy-root]'));
  }
  function nt(K) {
    g.clearDelayTimeouts(), K && ne('onTrigger', [g, K]), q();
    var we = W(!0),
      Ce = V(),
      We = Ce[0],
      Ue = Ce[1];
    xr.isTouch && We === 'hold' && Ue && (we = Ue),
      we
        ? (r = setTimeout(function () {
            g.show();
          }, we))
        : g.show();
  }
  function xt(K) {
    if ((g.clearDelayTimeouts(), ne('onUntrigger', [g, K]), !g.state.isVisible)) {
      Q();
      return;
    }
    if (
      !(
        g.props.trigger.indexOf('mouseenter') >= 0 &&
        g.props.trigger.indexOf('click') >= 0 &&
        ['mouseleave', 'mousemove'].indexOf(K.type) >= 0 &&
        l
      )
    ) {
      var we = W(!1);
      we
        ? (i = setTimeout(function () {
            g.state.isVisible && g.hide();
          }, we))
        : (u = requestAnimationFrame(function () {
            g.hide();
          }));
    }
  }
  function ke() {
    g.state.isEnabled = !0;
  }
  function $e() {
    g.hide(), (g.state.isEnabled = !1);
  }
  function ht() {
    clearTimeout(r), clearTimeout(i), cancelAnimationFrame(u);
  }
  function yt(K) {
    if (!g.state.isDestroyed) {
      ne('onBeforeUpdate', [g, K]), Ve();
      var we = g.props,
        Ce = NS(e, Object.assign({}, g.props, {}, K, { ignoreAttributes: !0 }));
      (g.props = Ce),
        it(),
        we.interactiveDebounce !== Ce.interactiveDebounce &&
          (j(), (E = xS(J, Ce.interactiveDebounce))),
        we.triggerTarget && !Ce.triggerTarget
          ? Tu(we.triggerTarget).forEach(function (We) {
              We.removeAttribute('aria-expanded');
            })
          : Ce.triggerTarget && e.removeAttribute('aria-expanded'),
        ue(),
        X(),
        H && H(we, Ce),
        g.popperInstance &&
          (ye(),
          Fe().forEach(function (We) {
            requestAnimationFrame(We._tippy.popperInstance.forceUpdate);
          })),
        ne('onAfterUpdate', [g, K]);
    }
  }
  function bt(K) {
    g.setProps({ content: K });
  }
  function Ae() {
    var K = g.state.isVisible,
      we = g.state.isDestroyed,
      Ce = !g.state.isEnabled,
      We = xr.isTouch && !g.props.touch,
      Ue = Vp(g.props.duration, 0, fr.duration);
    if (
      !(K || we || Ce || We) &&
      !he().hasAttribute('disabled') &&
      (ne('onShow', [g], !1), g.props.onShow(g) !== !1)
    ) {
      if (
        ((g.state.isVisible = !0),
        ae() && (P.style.visibility = 'visible'),
        X(),
        q(),
        g.state.isMounted || (P.style.transition = 'none'),
        ae())
      ) {
        var Ct = Y(),
          Pt = Ct.box,
          mn = Ct.content;
        Xp([Pt, mn], 0);
      }
      (S = function () {
        var yn;
        if (!(!g.state.isVisible || p)) {
          if (
            ((p = !0),
            P.offsetHeight,
            (P.style.transition = g.props.moveTransition),
            ae() && g.props.animation)
          ) {
            var yr = Y(),
              wr = yr.box,
              wn = yr.content;
            Xp([wr, wn], Ue), CS([wr, wn], 'visible');
          }
          ce(),
            ue(),
            bS(qp, g),
            (yn = g.popperInstance) == null || yn.forceUpdate(),
            (g.state.isMounted = !0),
            ne('onMount', [g]),
            g.props.animation &&
              ae() &&
              de(Ue, function () {
                (g.state.isShown = !0), ne('onShown', [g]);
              });
        }
      }),
        Xe();
    }
  }
  function ln() {
    var K = !g.state.isVisible,
      we = g.state.isDestroyed,
      Ce = !g.state.isEnabled,
      We = Vp(g.props.duration, 1, fr.duration);
    if (!(K || we || Ce) && (ne('onHide', [g], !1), g.props.onHide(g) !== !1)) {
      if (
        ((g.state.isVisible = !1),
        (g.state.isShown = !1),
        (p = !1),
        (l = !1),
        ae() && (P.style.visibility = 'hidden'),
        j(),
        Q(),
        X(),
        ae())
      ) {
        var Ue = Y(),
          Ct = Ue.box,
          Pt = Ue.content;
        g.props.animation && (Xp([Ct, Pt], We), CS([Ct, Pt], 'hidden'));
      }
      ce(), ue(), g.props.animation ? ae() && le(We, g.unmount) : g.unmount();
    }
  }
  function In(K) {
    R().addEventListener('mousemove', E), bS($s, E), E(K);
  }
  function nr() {
    g.state.isVisible && g.hide(),
      g.state.isMounted &&
        (be(),
        Fe().forEach(function (K) {
          K._tippy.unmount();
        }),
        P.parentNode && P.parentNode.removeChild(P),
        (qp = qp.filter(function (K) {
          return K !== g;
        })),
        (g.state.isMounted = !1),
        ne('onHidden', [g]));
  }
  function Ln() {
    g.state.isDestroyed ||
      (g.clearDelayTimeouts(),
      g.unmount(),
      Ve(),
      delete e._tippy,
      (g.state.isDestroyed = !0),
      ne('onDestroy', [g]));
  }
}
function Ml(e, t) {
  t === void 0 && (t = {});
  var n = fr.plugins.concat(t.plugins || []);
  B6();
  var r = Object.assign({}, t, { plugins: n }),
    i = k6(e),
    u = i.reduce(function (l, c) {
      var f = c && q6(c, r);
      return f && l.push(f), l;
    }, []);
  return If(e) ? u[0] : u;
}
Ml.defaultProps = fr;
Ml.setDefaultProps = Y6;
Ml.currentInput = xr;
Object.assign({}, Zb, {
  effect: function (t) {
    var n = t.state,
      r = {
        popper: { position: n.options.strategy, left: '0', top: '0', margin: '0' },
        arrow: { position: 'absolute' },
        reference: {},
      };
    Object.assign(n.elements.popper.style, r.popper),
      (n.styles = r),
      n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow);
  },
});
Ml.setDefaultProps({ render: sC });
function cC(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    u;
  for (u = 0; u < r.length; u++) (i = r[u]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var fC = typeof window != 'undefined' && typeof document != 'undefined';
function gv(e, t) {
  e && (typeof e == 'function' && e(t), {}.hasOwnProperty.call(e, 'current') && (e.current = t));
}
function PS() {
  return fC && document.createElement('div');
}
function Z6(e) {
  var t = { 'data-placement': e.placement };
  return (
    e.referenceHidden && (t['data-reference-hidden'] = ''), e.escaped && (t['data-escaped'] = ''), t
  );
}
function dC(e, t) {
  if (e === t) return !0;
  if (typeof e == 'object' && e != null && typeof t == 'object' && t != null) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (var n in e)
      if (t.hasOwnProperty(n)) {
        if (!dC(e[n], t[n])) return !1;
      } else return !1;
    return !0;
  } else return !1;
}
function K6(e) {
  var t = [];
  return (
    e.forEach(function (n) {
      t.find(function (r) {
        return dC(n, r);
      }) || t.push(n);
    }),
    t
  );
}
function Q6(e, t) {
  var n, r;
  return Object.assign({}, t, {
    popperOptions: Object.assign({}, e.popperOptions, t.popperOptions, {
      modifiers: K6(
        [].concat(
          ((n = e.popperOptions) == null ? void 0 : n.modifiers) || [],
          ((r = t.popperOptions) == null ? void 0 : r.modifiers) || [],
        ),
      ),
    }),
  });
}
var Zp = fC ? T.exports.useLayoutEffect : T.exports.useEffect;
function J6(e) {
  var t = T.exports.useRef();
  return t.current || (t.current = typeof e == 'function' ? e() : e), t.current;
}
function AS(e, t, n) {
  n.split(/\s+/).forEach(function (r) {
    r && e.classList[t](r);
  });
}
var eF = {
  name: 'className',
  defaultValue: '',
  fn: function (t) {
    var n = t.popper.firstElementChild,
      r = function () {
        var c;
        return !!((c = t.props.render) != null && c.$$tippy);
      };
    function i() {
      (t.props.className && !r()) || AS(n, 'add', t.props.className);
    }
    function u() {
      r() && AS(n, 'remove', t.props.className);
    }
    return { onCreate: i, onBeforeUpdate: u, onAfterUpdate: i };
  },
};
function tF(e) {
  function t(n) {
    var r = n.children,
      i = n.content,
      u = n.visible,
      l = n.singleton,
      c = n.render,
      f = n.reference,
      p = n.disabled,
      h = p === void 0 ? !1 : p,
      x = n.ignoreAttributes,
      S = x === void 0 ? !0 : x;
    n.__source, n.__self;
    var b = cC(n, [
        'children',
        'content',
        'visible',
        'singleton',
        'render',
        'reference',
        'disabled',
        'ignoreAttributes',
        '__source',
        '__self',
      ]),
      E = u !== void 0,
      _ = l !== void 0,
      m = T.exports.useState(!1),
      v = m[0],
      w = m[1],
      N = T.exports.useState({}),
      g = N[0],
      M = N[1],
      P = T.exports.useState(),
      H = P[0],
      F = P[1],
      U = J6(function () {
        return { container: PS(), renders: 1 };
      }),
      V = Object.assign({ ignoreAttributes: S }, b, { content: U.container });
    E && ((V.trigger = 'manual'), (V.hideOnClick = !1)), _ && (h = !0);
    var fe = V,
      ae = V.plugins || [];
    c &&
      (fe = Object.assign({}, V, {
        plugins:
          _ && l.data != null
            ? [].concat(ae, [
                {
                  fn: function () {
                    return {
                      onTrigger: function (W, X) {
                        var ne = l.data.children.find(function (ce) {
                          var ue = ce.instance;
                          return ue.reference === X.currentTarget;
                        });
                        (W.state.$$activeSingletonInstance = ne.instance), F(ne.content);
                      },
                    };
                  },
                },
              ])
            : ae,
        render: function () {
          return { popper: U.container };
        },
      }));
    var he = [f].concat(r ? [r.type] : []);
    return (
      Zp(function () {
        var R = f;
        f && f.hasOwnProperty('current') && (R = f.current);
        var Y = e(
          R || U.ref || PS(),
          Object.assign({}, fe, { plugins: [eF].concat(V.plugins || []) }),
        );
        return (
          (U.instance = Y),
          h && Y.disable(),
          u && Y.show(),
          _ && l.hook({ instance: Y, content: i, props: fe, setSingletonContent: F }),
          w(!0),
          function () {
            Y.destroy(), l == null || l.cleanup(Y);
          }
        );
      }, he),
      Zp(function () {
        var R;
        if (U.renders === 1) {
          U.renders++;
          return;
        }
        var Y = U.instance;
        Y.setProps(Q6(Y.props, fe)),
          (R = Y.popperInstance) == null || R.forceUpdate(),
          h ? Y.disable() : Y.enable(),
          E && (u ? Y.show() : Y.hide()),
          _ && l.hook({ instance: Y, content: i, props: fe, setSingletonContent: F });
      }),
      Zp(function () {
        var R;
        if (!!c) {
          var Y = U.instance;
          Y.setProps({
            popperOptions: Object.assign({}, Y.props.popperOptions, {
              modifiers: [].concat(
                (((R = Y.props.popperOptions) == null ? void 0 : R.modifiers) || []).filter(
                  function (W) {
                    var X = W.name;
                    return X !== '$$tippyReact';
                  },
                ),
                [
                  {
                    name: '$$tippyReact',
                    enabled: !0,
                    phase: 'beforeWrite',
                    requires: ['computeStyles'],
                    fn: function (X) {
                      var ne,
                        ce = X.state,
                        ue = (ne = ce.modifiersData) == null ? void 0 : ne.hide;
                      (g.placement !== ce.placement ||
                        g.referenceHidden !== (ue == null ? void 0 : ue.isReferenceHidden) ||
                        g.escaped !== (ue == null ? void 0 : ue.hasPopperEscaped)) &&
                        M({
                          placement: ce.placement,
                          referenceHidden: ue == null ? void 0 : ue.isReferenceHidden,
                          escaped: ue == null ? void 0 : ue.hasPopperEscaped,
                        }),
                        (ce.attributes.popper = {});
                    },
                  },
                ],
              ),
            }),
          });
        }
      }, [g.placement, g.referenceHidden, g.escaped].concat(he)),
      xe(Tt, {
        children: [
          r
            ? T.exports.cloneElement(r, {
                ref: function (Y) {
                  (U.ref = Y), gv(r.ref, Y);
                },
              })
            : null,
          v && ml.exports.createPortal(c ? c(Z6(g), H, U.instance) : i, U.container),
        ],
      })
    );
  }
  return t;
}
var nF = function (e, t) {
    return T.exports.forwardRef(function (r, i) {
      var u = r.children,
        l = cC(r, ['children']);
      return L(
        e,
        at(Ze({}, Object.assign({}, t, l)), {
          children: u
            ? T.exports.cloneElement(u, {
                ref: function (f) {
                  gv(i, f), gv(u.ref, f);
                },
              })
            : null,
        }),
      );
    });
  },
  rF = nF(tF(Ml)),
  tm = rF;
var oF = '/assets/triangle.d1ee3ba3.svg',
  iF = '/assets/table.fa46fad1.svg';
const pC = '(prefers-reduced-motion: no-preference)',
  aF = () => !window.matchMedia(pC).matches;
function Lf() {
  const [e, t] = T.exports.useState(aF);
  return (
    T.exports.useEffect(() => {
      const n = window.matchMedia(pC);
      function r(i) {
        t(!i.matches);
      }
      return n.addEventListener('change', r), () => n.removeEventListener('change', r);
    }, []),
    e
  );
}
function DS() {
  const [e, t] = T.exports.useState('--transparent --display-none'),
    n = Lf();
  function r() {
    n
      ? t('')
      : (t('--transparent'),
        setTimeout(() => {
          t('');
        }, 25));
  }
  function i() {
    n
      ? t('--transparent --display-none')
      : (t('--transparent'),
        setTimeout(() => {
          t('--transparent --display-none');
        }, 100));
  }
  return [e, r, i];
}
function uF({
  updateNodePos: e,
  selectedElements: t,
  setSelectedElements: n,
  resetSelectedElements: r,
  unsetNodesSelection: i,
}) {
  return (
    (e.current = Ie(u => u.updateNodePos)),
    (t.current = Pe(u => u.selectedElements)),
    (n.current = Ie(u => u.setSelectedElements)),
    (r.current = Ie(u => u.resetSelectedElements)),
    (i.current = Ie(u => u.unsetNodesSelection)),
    null
  );
}
let lF = (e = 21) =>
  crypto
    .getRandomValues(new Uint8Array(e))
    .reduce(
      (t, n) => (
        (n &= 63),
        n < 36
          ? (t += n.toString(36))
          : n < 62
          ? (t += (n - 26).toString(36).toUpperCase())
          : n > 62
          ? (t += '-')
          : (t += '_'),
        t
      ),
      '',
    );
function sF() {}
sF.prototype = new Error();
var mv = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ (function (e, t) {
  (function () {
    var n,
      r = '4.17.21',
      i = 200,
      u = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      l = 'Expected a function',
      c = 'Invalid `variable` option passed into `_.template`',
      f = '__lodash_hash_undefined__',
      p = 500,
      h = '__lodash_placeholder__',
      x = 1,
      S = 2,
      b = 4,
      E = 1,
      _ = 2,
      m = 1,
      v = 2,
      w = 4,
      N = 8,
      g = 16,
      M = 32,
      P = 64,
      H = 128,
      F = 256,
      U = 512,
      V = 30,
      fe = '...',
      ae = 800,
      he = 16,
      R = 1,
      Y = 2,
      W = 3,
      X = 1 / 0,
      ne = 9007199254740991,
      ce = 17976931348623157e292,
      ue = 0 / 0,
      j = 4294967295,
      k = j - 1,
      D = j >>> 1,
      B = [
        ['ary', H],
        ['bind', m],
        ['bindKey', v],
        ['curry', N],
        ['curryRight', g],
        ['flip', U],
        ['partial', M],
        ['partialRight', P],
        ['rearg', F],
      ],
      q = '[object Arguments]',
      Q = '[object Array]',
      le = '[object AsyncFunction]',
      de = '[object Boolean]',
      pe = '[object Date]',
      Ee = '[object DOMException]',
      it = '[object Error]',
      Ve = '[object Function]',
      ut = '[object GeneratorFunction]',
      J = '[object Map]',
      te = '[object Number]',
      ie = '[object Null]',
      G = '[object Object]',
      ye = '[object Promise]',
      be = '[object Proxy]',
      Xe = '[object RegExp]',
      Fe = '[object Set]',
      nt = '[object String]',
      xt = '[object Symbol]',
      ke = '[object Undefined]',
      $e = '[object WeakMap]',
      ht = '[object WeakSet]',
      yt = '[object ArrayBuffer]',
      bt = '[object DataView]',
      Ae = '[object Float32Array]',
      ln = '[object Float64Array]',
      In = '[object Int8Array]',
      nr = '[object Int16Array]',
      Ln = '[object Int32Array]',
      K = '[object Uint8Array]',
      we = '[object Uint8ClampedArray]',
      Ce = '[object Uint16Array]',
      We = '[object Uint32Array]',
      Ue = /\b__p \+= '';/g,
      Ct = /\b(__p \+=) '' \+/g,
      Pt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      mn = /&(?:amp|lt|gt|quot|#39);/g,
      mr = /[&<>"']/g,
      yn = RegExp(mn.source),
      yr = RegExp(mr.source),
      wr = /<%-([\s\S]+?)%>/g,
      wn = /<%([\s\S]+?)%>/g,
      lo = /<%=([\s\S]+?)%>/g,
      rr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      en = /^\w*$/,
      Mi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      so = /[\\^$.*+?()[\]{}|]/g,
      Pi = RegExp(so.source),
      co = /^\s+/,
      Ai = /\s/,
      Di = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      Je = /\{\n\/\* \[wrapped with (.+)\] \*/,
      $a = /,? & /,
      Bf = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      Ff = /[()=,{}\[\]\/\s]/,
      Pl = /\\(\\)?/g,
      $f = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      za = /\w*$/,
      zf = /^[-+]0x[0-9a-f]+$/i,
      Al = /^0b[01]+$/i,
      Uf = /^\[object .+?Constructor\]$/,
      jf = /^0o[0-7]+$/i,
      Wf = /^(?:0|[1-9]\d*)$/,
      Yf = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      ki = /($^)/,
      oO = /['\n\r\u2028\u2029\\]/g,
      Dl = '\\ud800-\\udfff',
      iO = '\\u0300-\\u036f',
      aO = '\\ufe20-\\ufe2f',
      uO = '\\u20d0-\\u20ff',
      hm = iO + aO + uO,
      vm = '\\u2700-\\u27bf',
      gm = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      lO = '\\xac\\xb1\\xd7\\xf7',
      sO = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      cO = '\\u2000-\\u206f',
      fO =
        ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      mm = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      ym = '\\ufe0e\\ufe0f',
      wm = lO + sO + cO + fO,
      Vf = "['\u2019]",
      dO = '[' + Dl + ']',
      Sm = '[' + wm + ']',
      kl = '[' + hm + ']',
      Em = '\\d+',
      pO = '[' + vm + ']',
      _m = '[' + gm + ']',
      xm = '[^' + Dl + wm + Em + vm + gm + mm + ']',
      Xf = '\\ud83c[\\udffb-\\udfff]',
      hO = '(?:' + kl + '|' + Xf + ')',
      bm = '[^' + Dl + ']',
      Gf = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      qf = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      Ri = '[' + mm + ']',
      Cm = '\\u200d',
      Om = '(?:' + _m + '|' + xm + ')',
      vO = '(?:' + Ri + '|' + xm + ')',
      Nm = '(?:' + Vf + '(?:d|ll|m|re|s|t|ve))?',
      Tm = '(?:' + Vf + '(?:D|LL|M|RE|S|T|VE))?',
      Mm = hO + '?',
      Pm = '[' + ym + ']?',
      gO = '(?:' + Cm + '(?:' + [bm, Gf, qf].join('|') + ')' + Pm + Mm + ')*',
      mO = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      yO = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      Am = Pm + Mm + gO,
      wO = '(?:' + [pO, Gf, qf].join('|') + ')' + Am,
      SO = '(?:' + [bm + kl + '?', kl, Gf, qf, dO].join('|') + ')',
      EO = RegExp(Vf, 'g'),
      _O = RegExp(kl, 'g'),
      Zf = RegExp(Xf + '(?=' + Xf + ')|' + SO + Am, 'g'),
      xO = RegExp(
        [
          Ri + '?' + _m + '+' + Nm + '(?=' + [Sm, Ri, '$'].join('|') + ')',
          vO + '+' + Tm + '(?=' + [Sm, Ri + Om, '$'].join('|') + ')',
          Ri + '?' + Om + '+' + Nm,
          Ri + '+' + Tm,
          yO,
          mO,
          Em,
          wO,
        ].join('|'),
        'g',
      ),
      bO = RegExp('[' + Cm + Dl + hm + ym + ']'),
      CO = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      OO = [
        'Array',
        'Buffer',
        'DataView',
        'Date',
        'Error',
        'Float32Array',
        'Float64Array',
        'Function',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Map',
        'Math',
        'Object',
        'Promise',
        'RegExp',
        'Set',
        'String',
        'Symbol',
        'TypeError',
        'Uint8Array',
        'Uint8ClampedArray',
        'Uint16Array',
        'Uint32Array',
        'WeakMap',
        '_',
        'clearTimeout',
        'isFinite',
        'parseInt',
        'setTimeout',
      ],
      NO = -1,
      ft = {};
    (ft[Ae] = ft[ln] = ft[In] = ft[nr] = ft[Ln] = ft[K] = ft[we] = ft[Ce] = ft[We] = !0),
      (ft[q] = ft[Q] = ft[yt] = ft[de] = ft[bt] = ft[pe] = ft[it] = ft[Ve] = ft[J] = ft[te] = ft[
        G
      ] = ft[Xe] = ft[Fe] = ft[nt] = ft[$e] = !1);
    var st = {};
    (st[q] = st[Q] = st[yt] = st[bt] = st[de] = st[pe] = st[Ae] = st[ln] = st[In] = st[nr] = st[
      Ln
    ] = st[J] = st[te] = st[G] = st[Xe] = st[Fe] = st[nt] = st[xt] = st[K] = st[we] = st[Ce] = st[
      We
    ] = !0),
      (st[it] = st[Ve] = st[$e] = !1);
    var TO = {
        À: 'A',
        Á: 'A',
        Â: 'A',
        Ã: 'A',
        Ä: 'A',
        Å: 'A',
        à: 'a',
        á: 'a',
        â: 'a',
        ã: 'a',
        ä: 'a',
        å: 'a',
        Ç: 'C',
        ç: 'c',
        Ð: 'D',
        ð: 'd',
        È: 'E',
        É: 'E',
        Ê: 'E',
        Ë: 'E',
        è: 'e',
        é: 'e',
        ê: 'e',
        ë: 'e',
        Ì: 'I',
        Í: 'I',
        Î: 'I',
        Ï: 'I',
        ì: 'i',
        í: 'i',
        î: 'i',
        ï: 'i',
        Ñ: 'N',
        ñ: 'n',
        Ò: 'O',
        Ó: 'O',
        Ô: 'O',
        Õ: 'O',
        Ö: 'O',
        Ø: 'O',
        ò: 'o',
        ó: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ø: 'o',
        Ù: 'U',
        Ú: 'U',
        Û: 'U',
        Ü: 'U',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        Ý: 'Y',
        ý: 'y',
        ÿ: 'y',
        Æ: 'Ae',
        æ: 'ae',
        Þ: 'Th',
        þ: 'th',
        ß: 'ss',
        Ā: 'A',
        Ă: 'A',
        Ą: 'A',
        ā: 'a',
        ă: 'a',
        ą: 'a',
        Ć: 'C',
        Ĉ: 'C',
        Ċ: 'C',
        Č: 'C',
        ć: 'c',
        ĉ: 'c',
        ċ: 'c',
        č: 'c',
        Ď: 'D',
        Đ: 'D',
        ď: 'd',
        đ: 'd',
        Ē: 'E',
        Ĕ: 'E',
        Ė: 'E',
        Ę: 'E',
        Ě: 'E',
        ē: 'e',
        ĕ: 'e',
        ė: 'e',
        ę: 'e',
        ě: 'e',
        Ĝ: 'G',
        Ğ: 'G',
        Ġ: 'G',
        Ģ: 'G',
        ĝ: 'g',
        ğ: 'g',
        ġ: 'g',
        ģ: 'g',
        Ĥ: 'H',
        Ħ: 'H',
        ĥ: 'h',
        ħ: 'h',
        Ĩ: 'I',
        Ī: 'I',
        Ĭ: 'I',
        Į: 'I',
        İ: 'I',
        ĩ: 'i',
        ī: 'i',
        ĭ: 'i',
        į: 'i',
        ı: 'i',
        Ĵ: 'J',
        ĵ: 'j',
        Ķ: 'K',
        ķ: 'k',
        ĸ: 'k',
        Ĺ: 'L',
        Ļ: 'L',
        Ľ: 'L',
        Ŀ: 'L',
        Ł: 'L',
        ĺ: 'l',
        ļ: 'l',
        ľ: 'l',
        ŀ: 'l',
        ł: 'l',
        Ń: 'N',
        Ņ: 'N',
        Ň: 'N',
        Ŋ: 'N',
        ń: 'n',
        ņ: 'n',
        ň: 'n',
        ŋ: 'n',
        Ō: 'O',
        Ŏ: 'O',
        Ő: 'O',
        ō: 'o',
        ŏ: 'o',
        ő: 'o',
        Ŕ: 'R',
        Ŗ: 'R',
        Ř: 'R',
        ŕ: 'r',
        ŗ: 'r',
        ř: 'r',
        Ś: 'S',
        Ŝ: 'S',
        Ş: 'S',
        Š: 'S',
        ś: 's',
        ŝ: 's',
        ş: 's',
        š: 's',
        Ţ: 'T',
        Ť: 'T',
        Ŧ: 'T',
        ţ: 't',
        ť: 't',
        ŧ: 't',
        Ũ: 'U',
        Ū: 'U',
        Ŭ: 'U',
        Ů: 'U',
        Ű: 'U',
        Ų: 'U',
        ũ: 'u',
        ū: 'u',
        ŭ: 'u',
        ů: 'u',
        ű: 'u',
        ų: 'u',
        Ŵ: 'W',
        ŵ: 'w',
        Ŷ: 'Y',
        ŷ: 'y',
        Ÿ: 'Y',
        Ź: 'Z',
        Ż: 'Z',
        Ž: 'Z',
        ź: 'z',
        ż: 'z',
        ž: 'z',
        Ĳ: 'IJ',
        ĳ: 'ij',
        Œ: 'Oe',
        œ: 'oe',
        ŉ: "'n",
        ſ: 's',
      },
      MO = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
      PO = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" },
      AO = { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' },
      DO = parseFloat,
      kO = parseInt,
      Dm = typeof ru == 'object' && ru && ru.Object === Object && ru,
      RO = typeof self == 'object' && self && self.Object === Object && self,
      Ft = Dm || RO || Function('return this')(),
      Kf = t && !t.nodeType && t,
      Ko = Kf && !0 && e && !e.nodeType && e,
      km = Ko && Ko.exports === Kf,
      Qf = km && Dm.process,
      Hn = (function () {
        try {
          var $ = Ko && Ko.require && Ko.require('util').types;
          return $ || (Qf && Qf.binding && Qf.binding('util'));
        } catch (ee) {}
      })(),
      Rm = Hn && Hn.isArrayBuffer,
      Im = Hn && Hn.isDate,
      Lm = Hn && Hn.isMap,
      Hm = Hn && Hn.isRegExp,
      Bm = Hn && Hn.isSet,
      Fm = Hn && Hn.isTypedArray;
    function Sn($, ee, Z) {
      switch (Z.length) {
        case 0:
          return $.call(ee);
        case 1:
          return $.call(ee, Z[0]);
        case 2:
          return $.call(ee, Z[0], Z[1]);
        case 3:
          return $.call(ee, Z[0], Z[1], Z[2]);
      }
      return $.apply(ee, Z);
    }
    function IO($, ee, Z, me) {
      for (var Le = -1, et = $ == null ? 0 : $.length; ++Le < et; ) {
        var At = $[Le];
        ee(me, At, Z(At), $);
      }
      return me;
    }
    function Bn($, ee) {
      for (var Z = -1, me = $ == null ? 0 : $.length; ++Z < me && ee($[Z], Z, $) !== !1; );
      return $;
    }
    function LO($, ee) {
      for (var Z = $ == null ? 0 : $.length; Z-- && ee($[Z], Z, $) !== !1; );
      return $;
    }
    function $m($, ee) {
      for (var Z = -1, me = $ == null ? 0 : $.length; ++Z < me; ) if (!ee($[Z], Z, $)) return !1;
      return !0;
    }
    function fo($, ee) {
      for (var Z = -1, me = $ == null ? 0 : $.length, Le = 0, et = []; ++Z < me; ) {
        var At = $[Z];
        ee(At, Z, $) && (et[Le++] = At);
      }
      return et;
    }
    function Rl($, ee) {
      var Z = $ == null ? 0 : $.length;
      return !!Z && Ii($, ee, 0) > -1;
    }
    function Jf($, ee, Z) {
      for (var me = -1, Le = $ == null ? 0 : $.length; ++me < Le; ) if (Z(ee, $[me])) return !0;
      return !1;
    }
    function vt($, ee) {
      for (var Z = -1, me = $ == null ? 0 : $.length, Le = Array(me); ++Z < me; )
        Le[Z] = ee($[Z], Z, $);
      return Le;
    }
    function po($, ee) {
      for (var Z = -1, me = ee.length, Le = $.length; ++Z < me; ) $[Le + Z] = ee[Z];
      return $;
    }
    function ed($, ee, Z, me) {
      var Le = -1,
        et = $ == null ? 0 : $.length;
      for (me && et && (Z = $[++Le]); ++Le < et; ) Z = ee(Z, $[Le], Le, $);
      return Z;
    }
    function HO($, ee, Z, me) {
      var Le = $ == null ? 0 : $.length;
      for (me && Le && (Z = $[--Le]); Le--; ) Z = ee(Z, $[Le], Le, $);
      return Z;
    }
    function td($, ee) {
      for (var Z = -1, me = $ == null ? 0 : $.length; ++Z < me; ) if (ee($[Z], Z, $)) return !0;
      return !1;
    }
    var BO = nd('length');
    function FO($) {
      return $.split('');
    }
    function $O($) {
      return $.match(Bf) || [];
    }
    function zm($, ee, Z) {
      var me;
      return (
        Z($, function (Le, et, At) {
          if (ee(Le, et, At)) return (me = et), !1;
        }),
        me
      );
    }
    function Il($, ee, Z, me) {
      for (var Le = $.length, et = Z + (me ? 1 : -1); me ? et-- : ++et < Le; )
        if (ee($[et], et, $)) return et;
      return -1;
    }
    function Ii($, ee, Z) {
      return ee === ee ? QO($, ee, Z) : Il($, Um, Z);
    }
    function zO($, ee, Z, me) {
      for (var Le = Z - 1, et = $.length; ++Le < et; ) if (me($[Le], ee)) return Le;
      return -1;
    }
    function Um($) {
      return $ !== $;
    }
    function jm($, ee) {
      var Z = $ == null ? 0 : $.length;
      return Z ? od($, ee) / Z : ue;
    }
    function nd($) {
      return function (ee) {
        return ee == null ? n : ee[$];
      };
    }
    function rd($) {
      return function (ee) {
        return $ == null ? n : $[ee];
      };
    }
    function Wm($, ee, Z, me, Le) {
      return (
        Le($, function (et, At, lt) {
          Z = me ? ((me = !1), et) : ee(Z, et, At, lt);
        }),
        Z
      );
    }
    function UO($, ee) {
      var Z = $.length;
      for ($.sort(ee); Z--; ) $[Z] = $[Z].value;
      return $;
    }
    function od($, ee) {
      for (var Z, me = -1, Le = $.length; ++me < Le; ) {
        var et = ee($[me]);
        et !== n && (Z = Z === n ? et : Z + et);
      }
      return Z;
    }
    function id($, ee) {
      for (var Z = -1, me = Array($); ++Z < $; ) me[Z] = ee(Z);
      return me;
    }
    function jO($, ee) {
      return vt(ee, function (Z) {
        return [Z, $[Z]];
      });
    }
    function Ym($) {
      return $ && $.slice(0, qm($) + 1).replace(co, '');
    }
    function En($) {
      return function (ee) {
        return $(ee);
      };
    }
    function ad($, ee) {
      return vt(ee, function (Z) {
        return $[Z];
      });
    }
    function Ua($, ee) {
      return $.has(ee);
    }
    function Vm($, ee) {
      for (var Z = -1, me = $.length; ++Z < me && Ii(ee, $[Z], 0) > -1; );
      return Z;
    }
    function Xm($, ee) {
      for (var Z = $.length; Z-- && Ii(ee, $[Z], 0) > -1; );
      return Z;
    }
    function WO($, ee) {
      for (var Z = $.length, me = 0; Z--; ) $[Z] === ee && ++me;
      return me;
    }
    var YO = rd(TO),
      VO = rd(MO);
    function XO($) {
      return '\\' + AO[$];
    }
    function GO($, ee) {
      return $ == null ? n : $[ee];
    }
    function Li($) {
      return bO.test($);
    }
    function qO($) {
      return CO.test($);
    }
    function ZO($) {
      for (var ee, Z = []; !(ee = $.next()).done; ) Z.push(ee.value);
      return Z;
    }
    function ud($) {
      var ee = -1,
        Z = Array($.size);
      return (
        $.forEach(function (me, Le) {
          Z[++ee] = [Le, me];
        }),
        Z
      );
    }
    function Gm($, ee) {
      return function (Z) {
        return $(ee(Z));
      };
    }
    function ho($, ee) {
      for (var Z = -1, me = $.length, Le = 0, et = []; ++Z < me; ) {
        var At = $[Z];
        (At === ee || At === h) && (($[Z] = h), (et[Le++] = Z));
      }
      return et;
    }
    function Ll($) {
      var ee = -1,
        Z = Array($.size);
      return (
        $.forEach(function (me) {
          Z[++ee] = me;
        }),
        Z
      );
    }
    function KO($) {
      var ee = -1,
        Z = Array($.size);
      return (
        $.forEach(function (me) {
          Z[++ee] = [me, me];
        }),
        Z
      );
    }
    function QO($, ee, Z) {
      for (var me = Z - 1, Le = $.length; ++me < Le; ) if ($[me] === ee) return me;
      return -1;
    }
    function JO($, ee, Z) {
      for (var me = Z + 1; me--; ) if ($[me] === ee) return me;
      return me;
    }
    function Hi($) {
      return Li($) ? tN($) : BO($);
    }
    function or($) {
      return Li($) ? nN($) : FO($);
    }
    function qm($) {
      for (var ee = $.length; ee-- && Ai.test($.charAt(ee)); );
      return ee;
    }
    var eN = rd(PO);
    function tN($) {
      for (var ee = (Zf.lastIndex = 0); Zf.test($); ) ++ee;
      return ee;
    }
    function nN($) {
      return $.match(Zf) || [];
    }
    function rN($) {
      return $.match(xO) || [];
    }
    var oN = function $(ee) {
        ee = ee == null ? Ft : Bi.defaults(Ft.Object(), ee, Bi.pick(Ft, OO));
        var Z = ee.Array,
          me = ee.Date,
          Le = ee.Error,
          et = ee.Function,
          At = ee.Math,
          lt = ee.Object,
          ld = ee.RegExp,
          iN = ee.String,
          Fn = ee.TypeError,
          Hl = Z.prototype,
          aN = et.prototype,
          Fi = lt.prototype,
          Bl = ee['__core-js_shared__'],
          Fl = aN.toString,
          rt = Fi.hasOwnProperty,
          uN = 0,
          Zm = (function () {
            var o = /[^.]+$/.exec((Bl && Bl.keys && Bl.keys.IE_PROTO) || '');
            return o ? 'Symbol(src)_1.' + o : '';
          })(),
          $l = Fi.toString,
          lN = Fl.call(lt),
          sN = Ft._,
          cN = ld(
            '^' +
              Fl.call(rt)
                .replace(so, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
              '$',
          ),
          zl = km ? ee.Buffer : n,
          vo = ee.Symbol,
          Ul = ee.Uint8Array,
          Km = zl ? zl.allocUnsafe : n,
          jl = Gm(lt.getPrototypeOf, lt),
          Qm = lt.create,
          Jm = Fi.propertyIsEnumerable,
          Wl = Hl.splice,
          e0 = vo ? vo.isConcatSpreadable : n,
          ja = vo ? vo.iterator : n,
          Qo = vo ? vo.toStringTag : n,
          Yl = (function () {
            try {
              var o = ri(lt, 'defineProperty');
              return o({}, '', {}), o;
            } catch (a) {}
          })(),
          fN = ee.clearTimeout !== Ft.clearTimeout && ee.clearTimeout,
          dN = me && me.now !== Ft.Date.now && me.now,
          pN = ee.setTimeout !== Ft.setTimeout && ee.setTimeout,
          Vl = At.ceil,
          Xl = At.floor,
          sd = lt.getOwnPropertySymbols,
          hN = zl ? zl.isBuffer : n,
          t0 = ee.isFinite,
          vN = Hl.join,
          gN = Gm(lt.keys, lt),
          Dt = At.max,
          Yt = At.min,
          mN = me.now,
          yN = ee.parseInt,
          n0 = At.random,
          wN = Hl.reverse,
          cd = ri(ee, 'DataView'),
          Wa = ri(ee, 'Map'),
          fd = ri(ee, 'Promise'),
          $i = ri(ee, 'Set'),
          Ya = ri(ee, 'WeakMap'),
          Va = ri(lt, 'create'),
          Gl = Ya && new Ya(),
          zi = {},
          SN = oi(cd),
          EN = oi(Wa),
          _N = oi(fd),
          xN = oi($i),
          bN = oi(Ya),
          ql = vo ? vo.prototype : n,
          Xa = ql ? ql.valueOf : n,
          r0 = ql ? ql.toString : n;
        function C(o) {
          if (wt(o) && !He(o) && !(o instanceof Ge)) {
            if (o instanceof $n) return o;
            if (rt.call(o, '__wrapped__')) return oy(o);
          }
          return new $n(o);
        }
        var Ui = (function () {
          function o() {}
          return function (a) {
            if (!mt(a)) return {};
            if (Qm) return Qm(a);
            o.prototype = a;
            var s = new o();
            return (o.prototype = n), s;
          };
        })();
        function Zl() {}
        function $n(o, a) {
          (this.__wrapped__ = o),
            (this.__actions__ = []),
            (this.__chain__ = !!a),
            (this.__index__ = 0),
            (this.__values__ = n);
        }
        (C.templateSettings = {
          escape: wr,
          evaluate: wn,
          interpolate: lo,
          variable: '',
          imports: { _: C },
        }),
          (C.prototype = Zl.prototype),
          (C.prototype.constructor = C),
          ($n.prototype = Ui(Zl.prototype)),
          ($n.prototype.constructor = $n);
        function Ge(o) {
          (this.__wrapped__ = o),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = j),
            (this.__views__ = []);
        }
        function CN() {
          var o = new Ge(this.__wrapped__);
          return (
            (o.__actions__ = sn(this.__actions__)),
            (o.__dir__ = this.__dir__),
            (o.__filtered__ = this.__filtered__),
            (o.__iteratees__ = sn(this.__iteratees__)),
            (o.__takeCount__ = this.__takeCount__),
            (o.__views__ = sn(this.__views__)),
            o
          );
        }
        function ON() {
          if (this.__filtered__) {
            var o = new Ge(this);
            (o.__dir__ = -1), (o.__filtered__ = !0);
          } else (o = this.clone()), (o.__dir__ *= -1);
          return o;
        }
        function NN() {
          var o = this.__wrapped__.value(),
            a = this.__dir__,
            s = He(o),
            d = a < 0,
            y = s ? o.length : 0,
            O = FT(0, y, this.__views__),
            A = O.start,
            I = O.end,
            z = I - A,
            re = d ? I : A - 1,
            oe = this.__iteratees__,
            se = oe.length,
            ge = 0,
            _e = Yt(z, this.__takeCount__);
          if (!s || (!d && y == z && _e == z)) return N0(o, this.__actions__);
          var Te = [];
          e: for (; z-- && ge < _e; ) {
            re += a;
            for (var ze = -1, Me = o[re]; ++ze < se; ) {
              var Ye = oe[ze],
                qe = Ye.iteratee,
                bn = Ye.type,
                rn = qe(Me);
              if (bn == Y) Me = rn;
              else if (!rn) {
                if (bn == R) continue e;
                break e;
              }
            }
            Te[ge++] = Me;
          }
          return Te;
        }
        (Ge.prototype = Ui(Zl.prototype)), (Ge.prototype.constructor = Ge);
        function Jo(o) {
          var a = -1,
            s = o == null ? 0 : o.length;
          for (this.clear(); ++a < s; ) {
            var d = o[a];
            this.set(d[0], d[1]);
          }
        }
        function TN() {
          (this.__data__ = Va ? Va(null) : {}), (this.size = 0);
        }
        function MN(o) {
          var a = this.has(o) && delete this.__data__[o];
          return (this.size -= a ? 1 : 0), a;
        }
        function PN(o) {
          var a = this.__data__;
          if (Va) {
            var s = a[o];
            return s === f ? n : s;
          }
          return rt.call(a, o) ? a[o] : n;
        }
        function AN(o) {
          var a = this.__data__;
          return Va ? a[o] !== n : rt.call(a, o);
        }
        function DN(o, a) {
          var s = this.__data__;
          return (this.size += this.has(o) ? 0 : 1), (s[o] = Va && a === n ? f : a), this;
        }
        (Jo.prototype.clear = TN),
          (Jo.prototype.delete = MN),
          (Jo.prototype.get = PN),
          (Jo.prototype.has = AN),
          (Jo.prototype.set = DN);
        function zr(o) {
          var a = -1,
            s = o == null ? 0 : o.length;
          for (this.clear(); ++a < s; ) {
            var d = o[a];
            this.set(d[0], d[1]);
          }
        }
        function kN() {
          (this.__data__ = []), (this.size = 0);
        }
        function RN(o) {
          var a = this.__data__,
            s = Kl(a, o);
          if (s < 0) return !1;
          var d = a.length - 1;
          return s == d ? a.pop() : Wl.call(a, s, 1), --this.size, !0;
        }
        function IN(o) {
          var a = this.__data__,
            s = Kl(a, o);
          return s < 0 ? n : a[s][1];
        }
        function LN(o) {
          return Kl(this.__data__, o) > -1;
        }
        function HN(o, a) {
          var s = this.__data__,
            d = Kl(s, o);
          return d < 0 ? (++this.size, s.push([o, a])) : (s[d][1] = a), this;
        }
        (zr.prototype.clear = kN),
          (zr.prototype.delete = RN),
          (zr.prototype.get = IN),
          (zr.prototype.has = LN),
          (zr.prototype.set = HN);
        function Ur(o) {
          var a = -1,
            s = o == null ? 0 : o.length;
          for (this.clear(); ++a < s; ) {
            var d = o[a];
            this.set(d[0], d[1]);
          }
        }
        function BN() {
          (this.size = 0),
            (this.__data__ = { hash: new Jo(), map: new (Wa || zr)(), string: new Jo() });
        }
        function FN(o) {
          var a = ss(this, o).delete(o);
          return (this.size -= a ? 1 : 0), a;
        }
        function $N(o) {
          return ss(this, o).get(o);
        }
        function zN(o) {
          return ss(this, o).has(o);
        }
        function UN(o, a) {
          var s = ss(this, o),
            d = s.size;
          return s.set(o, a), (this.size += s.size == d ? 0 : 1), this;
        }
        (Ur.prototype.clear = BN),
          (Ur.prototype.delete = FN),
          (Ur.prototype.get = $N),
          (Ur.prototype.has = zN),
          (Ur.prototype.set = UN);
        function ei(o) {
          var a = -1,
            s = o == null ? 0 : o.length;
          for (this.__data__ = new Ur(); ++a < s; ) this.add(o[a]);
        }
        function jN(o) {
          return this.__data__.set(o, f), this;
        }
        function WN(o) {
          return this.__data__.has(o);
        }
        (ei.prototype.add = ei.prototype.push = jN), (ei.prototype.has = WN);
        function ir(o) {
          var a = (this.__data__ = new zr(o));
          this.size = a.size;
        }
        function YN() {
          (this.__data__ = new zr()), (this.size = 0);
        }
        function VN(o) {
          var a = this.__data__,
            s = a.delete(o);
          return (this.size = a.size), s;
        }
        function XN(o) {
          return this.__data__.get(o);
        }
        function GN(o) {
          return this.__data__.has(o);
        }
        function qN(o, a) {
          var s = this.__data__;
          if (s instanceof zr) {
            var d = s.__data__;
            if (!Wa || d.length < i - 1) return d.push([o, a]), (this.size = ++s.size), this;
            s = this.__data__ = new Ur(d);
          }
          return s.set(o, a), (this.size = s.size), this;
        }
        (ir.prototype.clear = YN),
          (ir.prototype.delete = VN),
          (ir.prototype.get = XN),
          (ir.prototype.has = GN),
          (ir.prototype.set = qN);
        function o0(o, a) {
          var s = He(o),
            d = !s && ii(o),
            y = !s && !d && So(o),
            O = !s && !d && !y && Vi(o),
            A = s || d || y || O,
            I = A ? id(o.length, iN) : [],
            z = I.length;
          for (var re in o)
            (a || rt.call(o, re)) &&
              !(
                A &&
                (re == 'length' ||
                  (y && (re == 'offset' || re == 'parent')) ||
                  (O && (re == 'buffer' || re == 'byteLength' || re == 'byteOffset')) ||
                  Vr(re, z))
              ) &&
              I.push(re);
          return I;
        }
        function i0(o) {
          var a = o.length;
          return a ? o[_d(0, a - 1)] : n;
        }
        function ZN(o, a) {
          return cs(sn(o), ti(a, 0, o.length));
        }
        function KN(o) {
          return cs(sn(o));
        }
        function dd(o, a, s) {
          ((s !== n && !ar(o[a], s)) || (s === n && !(a in o))) && jr(o, a, s);
        }
        function Ga(o, a, s) {
          var d = o[a];
          (!(rt.call(o, a) && ar(d, s)) || (s === n && !(a in o))) && jr(o, a, s);
        }
        function Kl(o, a) {
          for (var s = o.length; s--; ) if (ar(o[s][0], a)) return s;
          return -1;
        }
        function QN(o, a, s, d) {
          return (
            go(o, function (y, O, A) {
              a(d, y, s(y), A);
            }),
            d
          );
        }
        function a0(o, a) {
          return o && Er(a, Rt(a), o);
        }
        function JN(o, a) {
          return o && Er(a, fn(a), o);
        }
        function jr(o, a, s) {
          a == '__proto__' && Yl
            ? Yl(o, a, { configurable: !0, enumerable: !0, value: s, writable: !0 })
            : (o[a] = s);
        }
        function pd(o, a) {
          for (var s = -1, d = a.length, y = Z(d), O = o == null; ++s < d; )
            y[s] = O ? n : Xd(o, a[s]);
          return y;
        }
        function ti(o, a, s) {
          return o === o && (s !== n && (o = o <= s ? o : s), a !== n && (o = o >= a ? o : a)), o;
        }
        function zn(o, a, s, d, y, O) {
          var A,
            I = a & x,
            z = a & S,
            re = a & b;
          if ((s && (A = y ? s(o, d, y, O) : s(o)), A !== n)) return A;
          if (!mt(o)) return o;
          var oe = He(o);
          if (oe) {
            if (((A = zT(o)), !I)) return sn(o, A);
          } else {
            var se = Vt(o),
              ge = se == Ve || se == ut;
            if (So(o)) return P0(o, I);
            if (se == G || se == q || (ge && !y)) {
              if (((A = z || ge ? {} : q0(o)), !I)) return z ? PT(o, JN(A, o)) : MT(o, a0(A, o));
            } else {
              if (!st[se]) return y ? o : {};
              A = UT(o, se, I);
            }
          }
          O || (O = new ir());
          var _e = O.get(o);
          if (_e) return _e;
          O.set(o, A),
            by(o)
              ? o.forEach(function (Me) {
                  A.add(zn(Me, a, s, Me, o, O));
                })
              : _y(o) &&
                o.forEach(function (Me, Ye) {
                  A.set(Ye, zn(Me, a, s, Ye, o, O));
                });
          var Te = re ? (z ? kd : Dd) : z ? fn : Rt,
            ze = oe ? n : Te(o);
          return (
            Bn(ze || o, function (Me, Ye) {
              ze && ((Ye = Me), (Me = o[Ye])), Ga(A, Ye, zn(Me, a, s, Ye, o, O));
            }),
            A
          );
        }
        function eT(o) {
          var a = Rt(o);
          return function (s) {
            return u0(s, o, a);
          };
        }
        function u0(o, a, s) {
          var d = s.length;
          if (o == null) return !d;
          for (o = lt(o); d--; ) {
            var y = s[d],
              O = a[y],
              A = o[y];
            if ((A === n && !(y in o)) || !O(A)) return !1;
          }
          return !0;
        }
        function l0(o, a, s) {
          if (typeof o != 'function') throw new Fn(l);
          return tu(function () {
            o.apply(n, s);
          }, a);
        }
        function qa(o, a, s, d) {
          var y = -1,
            O = Rl,
            A = !0,
            I = o.length,
            z = [],
            re = a.length;
          if (!I) return z;
          s && (a = vt(a, En(s))),
            d ? ((O = Jf), (A = !1)) : a.length >= i && ((O = Ua), (A = !1), (a = new ei(a)));
          e: for (; ++y < I; ) {
            var oe = o[y],
              se = s == null ? oe : s(oe);
            if (((oe = d || oe !== 0 ? oe : 0), A && se === se)) {
              for (var ge = re; ge--; ) if (a[ge] === se) continue e;
              z.push(oe);
            } else O(a, se, d) || z.push(oe);
          }
          return z;
        }
        var go = I0(Sr),
          s0 = I0(vd, !0);
        function tT(o, a) {
          var s = !0;
          return (
            go(o, function (d, y, O) {
              return (s = !!a(d, y, O)), s;
            }),
            s
          );
        }
        function Ql(o, a, s) {
          for (var d = -1, y = o.length; ++d < y; ) {
            var O = o[d],
              A = a(O);
            if (A != null && (I === n ? A === A && !xn(A) : s(A, I)))
              var I = A,
                z = O;
          }
          return z;
        }
        function nT(o, a, s, d) {
          var y = o.length;
          for (
            s = Be(s),
              s < 0 && (s = -s > y ? 0 : y + s),
              d = d === n || d > y ? y : Be(d),
              d < 0 && (d += y),
              d = s > d ? 0 : Oy(d);
            s < d;

          )
            o[s++] = a;
          return o;
        }
        function c0(o, a) {
          var s = [];
          return (
            go(o, function (d, y, O) {
              a(d, y, O) && s.push(d);
            }),
            s
          );
        }
        function $t(o, a, s, d, y) {
          var O = -1,
            A = o.length;
          for (s || (s = WT), y || (y = []); ++O < A; ) {
            var I = o[O];
            a > 0 && s(I) ? (a > 1 ? $t(I, a - 1, s, d, y) : po(y, I)) : d || (y[y.length] = I);
          }
          return y;
        }
        var hd = L0(),
          f0 = L0(!0);
        function Sr(o, a) {
          return o && hd(o, a, Rt);
        }
        function vd(o, a) {
          return o && f0(o, a, Rt);
        }
        function Jl(o, a) {
          return fo(a, function (s) {
            return Xr(o[s]);
          });
        }
        function ni(o, a) {
          a = yo(a, o);
          for (var s = 0, d = a.length; o != null && s < d; ) o = o[_r(a[s++])];
          return s && s == d ? o : n;
        }
        function d0(o, a, s) {
          var d = a(o);
          return He(o) ? d : po(d, s(o));
        }
        function tn(o) {
          return o == null ? (o === n ? ke : ie) : Qo && Qo in lt(o) ? BT(o) : KT(o);
        }
        function gd(o, a) {
          return o > a;
        }
        function rT(o, a) {
          return o != null && rt.call(o, a);
        }
        function oT(o, a) {
          return o != null && a in lt(o);
        }
        function iT(o, a, s) {
          return o >= Yt(a, s) && o < Dt(a, s);
        }
        function md(o, a, s) {
          for (
            var d = s ? Jf : Rl, y = o[0].length, O = o.length, A = O, I = Z(O), z = 1 / 0, re = [];
            A--;

          ) {
            var oe = o[A];
            A && a && (oe = vt(oe, En(a))),
              (z = Yt(oe.length, z)),
              (I[A] = !s && (a || (y >= 120 && oe.length >= 120)) ? new ei(A && oe) : n);
          }
          oe = o[0];
          var se = -1,
            ge = I[0];
          e: for (; ++se < y && re.length < z; ) {
            var _e = oe[se],
              Te = a ? a(_e) : _e;
            if (((_e = s || _e !== 0 ? _e : 0), !(ge ? Ua(ge, Te) : d(re, Te, s)))) {
              for (A = O; --A; ) {
                var ze = I[A];
                if (!(ze ? Ua(ze, Te) : d(o[A], Te, s))) continue e;
              }
              ge && ge.push(Te), re.push(_e);
            }
          }
          return re;
        }
        function aT(o, a, s, d) {
          return (
            Sr(o, function (y, O, A) {
              a(d, s(y), O, A);
            }),
            d
          );
        }
        function Za(o, a, s) {
          (a = yo(a, o)), (o = J0(o, a));
          var d = o == null ? o : o[_r(jn(a))];
          return d == null ? n : Sn(d, o, s);
        }
        function p0(o) {
          return wt(o) && tn(o) == q;
        }
        function uT(o) {
          return wt(o) && tn(o) == yt;
        }
        function lT(o) {
          return wt(o) && tn(o) == pe;
        }
        function Ka(o, a, s, d, y) {
          return o === a
            ? !0
            : o == null || a == null || (!wt(o) && !wt(a))
            ? o !== o && a !== a
            : sT(o, a, s, d, Ka, y);
        }
        function sT(o, a, s, d, y, O) {
          var A = He(o),
            I = He(a),
            z = A ? Q : Vt(o),
            re = I ? Q : Vt(a);
          (z = z == q ? G : z), (re = re == q ? G : re);
          var oe = z == G,
            se = re == G,
            ge = z == re;
          if (ge && So(o)) {
            if (!So(a)) return !1;
            (A = !0), (oe = !1);
          }
          if (ge && !oe)
            return O || (O = new ir()), A || Vi(o) ? V0(o, a, s, d, y, O) : LT(o, a, z, s, d, y, O);
          if (!(s & E)) {
            var _e = oe && rt.call(o, '__wrapped__'),
              Te = se && rt.call(a, '__wrapped__');
            if (_e || Te) {
              var ze = _e ? o.value() : o,
                Me = Te ? a.value() : a;
              return O || (O = new ir()), y(ze, Me, s, d, O);
            }
          }
          return ge ? (O || (O = new ir()), HT(o, a, s, d, y, O)) : !1;
        }
        function cT(o) {
          return wt(o) && Vt(o) == J;
        }
        function yd(o, a, s, d) {
          var y = s.length,
            O = y,
            A = !d;
          if (o == null) return !O;
          for (o = lt(o); y--; ) {
            var I = s[y];
            if (A && I[2] ? I[1] !== o[I[0]] : !(I[0] in o)) return !1;
          }
          for (; ++y < O; ) {
            I = s[y];
            var z = I[0],
              re = o[z],
              oe = I[1];
            if (A && I[2]) {
              if (re === n && !(z in o)) return !1;
            } else {
              var se = new ir();
              if (d) var ge = d(re, oe, z, o, a, se);
              if (!(ge === n ? Ka(oe, re, E | _, d, se) : ge)) return !1;
            }
          }
          return !0;
        }
        function h0(o) {
          if (!mt(o) || VT(o)) return !1;
          var a = Xr(o) ? cN : Uf;
          return a.test(oi(o));
        }
        function fT(o) {
          return wt(o) && tn(o) == Xe;
        }
        function dT(o) {
          return wt(o) && Vt(o) == Fe;
        }
        function pT(o) {
          return wt(o) && gs(o.length) && !!ft[tn(o)];
        }
        function v0(o) {
          return typeof o == 'function'
            ? o
            : o == null
            ? dn
            : typeof o == 'object'
            ? He(o)
              ? y0(o[0], o[1])
              : m0(o)
            : Hy(o);
        }
        function wd(o) {
          if (!eu(o)) return gN(o);
          var a = [];
          for (var s in lt(o)) rt.call(o, s) && s != 'constructor' && a.push(s);
          return a;
        }
        function hT(o) {
          if (!mt(o)) return ZT(o);
          var a = eu(o),
            s = [];
          for (var d in o) (d == 'constructor' && (a || !rt.call(o, d))) || s.push(d);
          return s;
        }
        function Sd(o, a) {
          return o < a;
        }
        function g0(o, a) {
          var s = -1,
            d = cn(o) ? Z(o.length) : [];
          return (
            go(o, function (y, O, A) {
              d[++s] = a(y, O, A);
            }),
            d
          );
        }
        function m0(o) {
          var a = Id(o);
          return a.length == 1 && a[0][2]
            ? K0(a[0][0], a[0][1])
            : function (s) {
                return s === o || yd(s, o, a);
              };
        }
        function y0(o, a) {
          return Hd(o) && Z0(a)
            ? K0(_r(o), a)
            : function (s) {
                var d = Xd(s, o);
                return d === n && d === a ? Gd(s, o) : Ka(a, d, E | _);
              };
        }
        function es(o, a, s, d, y) {
          o !== a &&
            hd(
              a,
              function (O, A) {
                if ((y || (y = new ir()), mt(O))) vT(o, a, A, s, es, d, y);
                else {
                  var I = d ? d(Fd(o, A), O, A + '', o, a, y) : n;
                  I === n && (I = O), dd(o, A, I);
                }
              },
              fn,
            );
        }
        function vT(o, a, s, d, y, O, A) {
          var I = Fd(o, s),
            z = Fd(a, s),
            re = A.get(z);
          if (re) {
            dd(o, s, re);
            return;
          }
          var oe = O ? O(I, z, s + '', o, a, A) : n,
            se = oe === n;
          if (se) {
            var ge = He(z),
              _e = !ge && So(z),
              Te = !ge && !_e && Vi(z);
            (oe = z),
              ge || _e || Te
                ? He(I)
                  ? (oe = I)
                  : Ot(I)
                  ? (oe = sn(I))
                  : _e
                  ? ((se = !1), (oe = P0(z, !0)))
                  : Te
                  ? ((se = !1), (oe = A0(z, !0)))
                  : (oe = [])
                : nu(z) || ii(z)
                ? ((oe = I), ii(I) ? (oe = Ny(I)) : (!mt(I) || Xr(I)) && (oe = q0(z)))
                : (se = !1);
          }
          se && (A.set(z, oe), y(oe, z, d, O, A), A.delete(z)), dd(o, s, oe);
        }
        function w0(o, a) {
          var s = o.length;
          if (!!s) return (a += a < 0 ? s : 0), Vr(a, s) ? o[a] : n;
        }
        function S0(o, a, s) {
          a.length
            ? (a = vt(a, function (O) {
                return He(O)
                  ? function (A) {
                      return ni(A, O.length === 1 ? O[0] : O);
                    }
                  : O;
              }))
            : (a = [dn]);
          var d = -1;
          a = vt(a, En(Ne()));
          var y = g0(o, function (O, A, I) {
            var z = vt(a, function (re) {
              return re(O);
            });
            return { criteria: z, index: ++d, value: O };
          });
          return UO(y, function (O, A) {
            return TT(O, A, s);
          });
        }
        function gT(o, a) {
          return E0(o, a, function (s, d) {
            return Gd(o, d);
          });
        }
        function E0(o, a, s) {
          for (var d = -1, y = a.length, O = {}; ++d < y; ) {
            var A = a[d],
              I = ni(o, A);
            s(I, A) && Qa(O, yo(A, o), I);
          }
          return O;
        }
        function mT(o) {
          return function (a) {
            return ni(a, o);
          };
        }
        function Ed(o, a, s, d) {
          var y = d ? zO : Ii,
            O = -1,
            A = a.length,
            I = o;
          for (o === a && (a = sn(a)), s && (I = vt(o, En(s))); ++O < A; )
            for (var z = 0, re = a[O], oe = s ? s(re) : re; (z = y(I, oe, z, d)) > -1; )
              I !== o && Wl.call(I, z, 1), Wl.call(o, z, 1);
          return o;
        }
        function _0(o, a) {
          for (var s = o ? a.length : 0, d = s - 1; s--; ) {
            var y = a[s];
            if (s == d || y !== O) {
              var O = y;
              Vr(y) ? Wl.call(o, y, 1) : Cd(o, y);
            }
          }
          return o;
        }
        function _d(o, a) {
          return o + Xl(n0() * (a - o + 1));
        }
        function yT(o, a, s, d) {
          for (var y = -1, O = Dt(Vl((a - o) / (s || 1)), 0), A = Z(O); O--; )
            (A[d ? O : ++y] = o), (o += s);
          return A;
        }
        function xd(o, a) {
          var s = '';
          if (!o || a < 1 || a > ne) return s;
          do a % 2 && (s += o), (a = Xl(a / 2)), a && (o += o);
          while (a);
          return s;
        }
        function je(o, a) {
          return $d(Q0(o, a, dn), o + '');
        }
        function wT(o) {
          return i0(Xi(o));
        }
        function ST(o, a) {
          var s = Xi(o);
          return cs(s, ti(a, 0, s.length));
        }
        function Qa(o, a, s, d) {
          if (!mt(o)) return o;
          a = yo(a, o);
          for (var y = -1, O = a.length, A = O - 1, I = o; I != null && ++y < O; ) {
            var z = _r(a[y]),
              re = s;
            if (z === '__proto__' || z === 'constructor' || z === 'prototype') return o;
            if (y != A) {
              var oe = I[z];
              (re = d ? d(oe, z, I) : n), re === n && (re = mt(oe) ? oe : Vr(a[y + 1]) ? [] : {});
            }
            Ga(I, z, re), (I = I[z]);
          }
          return o;
        }
        var x0 = Gl
            ? function (o, a) {
                return Gl.set(o, a), o;
              }
            : dn,
          ET = Yl
            ? function (o, a) {
                return Yl(o, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: Zd(a),
                  writable: !0,
                });
              }
            : dn;
        function _T(o) {
          return cs(Xi(o));
        }
        function Un(o, a, s) {
          var d = -1,
            y = o.length;
          a < 0 && (a = -a > y ? 0 : y + a),
            (s = s > y ? y : s),
            s < 0 && (s += y),
            (y = a > s ? 0 : (s - a) >>> 0),
            (a >>>= 0);
          for (var O = Z(y); ++d < y; ) O[d] = o[d + a];
          return O;
        }
        function xT(o, a) {
          var s;
          return (
            go(o, function (d, y, O) {
              return (s = a(d, y, O)), !s;
            }),
            !!s
          );
        }
        function ts(o, a, s) {
          var d = 0,
            y = o == null ? d : o.length;
          if (typeof a == 'number' && a === a && y <= D) {
            for (; d < y; ) {
              var O = (d + y) >>> 1,
                A = o[O];
              A !== null && !xn(A) && (s ? A <= a : A < a) ? (d = O + 1) : (y = O);
            }
            return y;
          }
          return bd(o, a, dn, s);
        }
        function bd(o, a, s, d) {
          var y = 0,
            O = o == null ? 0 : o.length;
          if (O === 0) return 0;
          a = s(a);
          for (var A = a !== a, I = a === null, z = xn(a), re = a === n; y < O; ) {
            var oe = Xl((y + O) / 2),
              se = s(o[oe]),
              ge = se !== n,
              _e = se === null,
              Te = se === se,
              ze = xn(se);
            if (A) var Me = d || Te;
            else
              re
                ? (Me = Te && (d || ge))
                : I
                ? (Me = Te && ge && (d || !_e))
                : z
                ? (Me = Te && ge && !_e && (d || !ze))
                : _e || ze
                ? (Me = !1)
                : (Me = d ? se <= a : se < a);
            Me ? (y = oe + 1) : (O = oe);
          }
          return Yt(O, k);
        }
        function b0(o, a) {
          for (var s = -1, d = o.length, y = 0, O = []; ++s < d; ) {
            var A = o[s],
              I = a ? a(A) : A;
            if (!s || !ar(I, z)) {
              var z = I;
              O[y++] = A === 0 ? 0 : A;
            }
          }
          return O;
        }
        function C0(o) {
          return typeof o == 'number' ? o : xn(o) ? ue : +o;
        }
        function _n(o) {
          if (typeof o == 'string') return o;
          if (He(o)) return vt(o, _n) + '';
          if (xn(o)) return r0 ? r0.call(o) : '';
          var a = o + '';
          return a == '0' && 1 / o == -X ? '-0' : a;
        }
        function mo(o, a, s) {
          var d = -1,
            y = Rl,
            O = o.length,
            A = !0,
            I = [],
            z = I;
          if (s) (A = !1), (y = Jf);
          else if (O >= i) {
            var re = a ? null : RT(o);
            if (re) return Ll(re);
            (A = !1), (y = Ua), (z = new ei());
          } else z = a ? [] : I;
          e: for (; ++d < O; ) {
            var oe = o[d],
              se = a ? a(oe) : oe;
            if (((oe = s || oe !== 0 ? oe : 0), A && se === se)) {
              for (var ge = z.length; ge--; ) if (z[ge] === se) continue e;
              a && z.push(se), I.push(oe);
            } else y(z, se, s) || (z !== I && z.push(se), I.push(oe));
          }
          return I;
        }
        function Cd(o, a) {
          return (a = yo(a, o)), (o = J0(o, a)), o == null || delete o[_r(jn(a))];
        }
        function O0(o, a, s, d) {
          return Qa(o, a, s(ni(o, a)), d);
        }
        function ns(o, a, s, d) {
          for (var y = o.length, O = d ? y : -1; (d ? O-- : ++O < y) && a(o[O], O, o); );
          return s ? Un(o, d ? 0 : O, d ? O + 1 : y) : Un(o, d ? O + 1 : 0, d ? y : O);
        }
        function N0(o, a) {
          var s = o;
          return (
            s instanceof Ge && (s = s.value()),
            ed(
              a,
              function (d, y) {
                return y.func.apply(y.thisArg, po([d], y.args));
              },
              s,
            )
          );
        }
        function Od(o, a, s) {
          var d = o.length;
          if (d < 2) return d ? mo(o[0]) : [];
          for (var y = -1, O = Z(d); ++y < d; )
            for (var A = o[y], I = -1; ++I < d; ) I != y && (O[y] = qa(O[y] || A, o[I], a, s));
          return mo($t(O, 1), a, s);
        }
        function T0(o, a, s) {
          for (var d = -1, y = o.length, O = a.length, A = {}; ++d < y; ) {
            var I = d < O ? a[d] : n;
            s(A, o[d], I);
          }
          return A;
        }
        function Nd(o) {
          return Ot(o) ? o : [];
        }
        function Td(o) {
          return typeof o == 'function' ? o : dn;
        }
        function yo(o, a) {
          return He(o) ? o : Hd(o, a) ? [o] : ry(tt(o));
        }
        var bT = je;
        function wo(o, a, s) {
          var d = o.length;
          return (s = s === n ? d : s), !a && s >= d ? o : Un(o, a, s);
        }
        var M0 =
          fN ||
          function (o) {
            return Ft.clearTimeout(o);
          };
        function P0(o, a) {
          if (a) return o.slice();
          var s = o.length,
            d = Km ? Km(s) : new o.constructor(s);
          return o.copy(d), d;
        }
        function Md(o) {
          var a = new o.constructor(o.byteLength);
          return new Ul(a).set(new Ul(o)), a;
        }
        function CT(o, a) {
          var s = a ? Md(o.buffer) : o.buffer;
          return new o.constructor(s, o.byteOffset, o.byteLength);
        }
        function OT(o) {
          var a = new o.constructor(o.source, za.exec(o));
          return (a.lastIndex = o.lastIndex), a;
        }
        function NT(o) {
          return Xa ? lt(Xa.call(o)) : {};
        }
        function A0(o, a) {
          var s = a ? Md(o.buffer) : o.buffer;
          return new o.constructor(s, o.byteOffset, o.length);
        }
        function D0(o, a) {
          if (o !== a) {
            var s = o !== n,
              d = o === null,
              y = o === o,
              O = xn(o),
              A = a !== n,
              I = a === null,
              z = a === a,
              re = xn(a);
            if (
              (!I && !re && !O && o > a) ||
              (O && A && z && !I && !re) ||
              (d && A && z) ||
              (!s && z) ||
              !y
            )
              return 1;
            if (
              (!d && !O && !re && o < a) ||
              (re && s && y && !d && !O) ||
              (I && s && y) ||
              (!A && y) ||
              !z
            )
              return -1;
          }
          return 0;
        }
        function TT(o, a, s) {
          for (var d = -1, y = o.criteria, O = a.criteria, A = y.length, I = s.length; ++d < A; ) {
            var z = D0(y[d], O[d]);
            if (z) {
              if (d >= I) return z;
              var re = s[d];
              return z * (re == 'desc' ? -1 : 1);
            }
          }
          return o.index - a.index;
        }
        function k0(o, a, s, d) {
          for (
            var y = -1,
              O = o.length,
              A = s.length,
              I = -1,
              z = a.length,
              re = Dt(O - A, 0),
              oe = Z(z + re),
              se = !d;
            ++I < z;

          )
            oe[I] = a[I];
          for (; ++y < A; ) (se || y < O) && (oe[s[y]] = o[y]);
          for (; re--; ) oe[I++] = o[y++];
          return oe;
        }
        function R0(o, a, s, d) {
          for (
            var y = -1,
              O = o.length,
              A = -1,
              I = s.length,
              z = -1,
              re = a.length,
              oe = Dt(O - I, 0),
              se = Z(oe + re),
              ge = !d;
            ++y < oe;

          )
            se[y] = o[y];
          for (var _e = y; ++z < re; ) se[_e + z] = a[z];
          for (; ++A < I; ) (ge || y < O) && (se[_e + s[A]] = o[y++]);
          return se;
        }
        function sn(o, a) {
          var s = -1,
            d = o.length;
          for (a || (a = Z(d)); ++s < d; ) a[s] = o[s];
          return a;
        }
        function Er(o, a, s, d) {
          var y = !s;
          s || (s = {});
          for (var O = -1, A = a.length; ++O < A; ) {
            var I = a[O],
              z = d ? d(s[I], o[I], I, s, o) : n;
            z === n && (z = o[I]), y ? jr(s, I, z) : Ga(s, I, z);
          }
          return s;
        }
        function MT(o, a) {
          return Er(o, Ld(o), a);
        }
        function PT(o, a) {
          return Er(o, X0(o), a);
        }
        function rs(o, a) {
          return function (s, d) {
            var y = He(s) ? IO : QN,
              O = a ? a() : {};
            return y(s, o, Ne(d, 2), O);
          };
        }
        function ji(o) {
          return je(function (a, s) {
            var d = -1,
              y = s.length,
              O = y > 1 ? s[y - 1] : n,
              A = y > 2 ? s[2] : n;
            for (
              O = o.length > 3 && typeof O == 'function' ? (y--, O) : n,
                A && nn(s[0], s[1], A) && ((O = y < 3 ? n : O), (y = 1)),
                a = lt(a);
              ++d < y;

            ) {
              var I = s[d];
              I && o(a, I, d, O);
            }
            return a;
          });
        }
        function I0(o, a) {
          return function (s, d) {
            if (s == null) return s;
            if (!cn(s)) return o(s, d);
            for (
              var y = s.length, O = a ? y : -1, A = lt(s);
              (a ? O-- : ++O < y) && d(A[O], O, A) !== !1;

            );
            return s;
          };
        }
        function L0(o) {
          return function (a, s, d) {
            for (var y = -1, O = lt(a), A = d(a), I = A.length; I--; ) {
              var z = A[o ? I : ++y];
              if (s(O[z], z, O) === !1) break;
            }
            return a;
          };
        }
        function AT(o, a, s) {
          var d = a & m,
            y = Ja(o);
          function O() {
            var A = this && this !== Ft && this instanceof O ? y : o;
            return A.apply(d ? s : this, arguments);
          }
          return O;
        }
        function H0(o) {
          return function (a) {
            a = tt(a);
            var s = Li(a) ? or(a) : n,
              d = s ? s[0] : a.charAt(0),
              y = s ? wo(s, 1).join('') : a.slice(1);
            return d[o]() + y;
          };
        }
        function Wi(o) {
          return function (a) {
            return ed(Iy(Ry(a).replace(EO, '')), o, '');
          };
        }
        function Ja(o) {
          return function () {
            var a = arguments;
            switch (a.length) {
              case 0:
                return new o();
              case 1:
                return new o(a[0]);
              case 2:
                return new o(a[0], a[1]);
              case 3:
                return new o(a[0], a[1], a[2]);
              case 4:
                return new o(a[0], a[1], a[2], a[3]);
              case 5:
                return new o(a[0], a[1], a[2], a[3], a[4]);
              case 6:
                return new o(a[0], a[1], a[2], a[3], a[4], a[5]);
              case 7:
                return new o(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
            }
            var s = Ui(o.prototype),
              d = o.apply(s, a);
            return mt(d) ? d : s;
          };
        }
        function DT(o, a, s) {
          var d = Ja(o);
          function y() {
            for (var O = arguments.length, A = Z(O), I = O, z = Yi(y); I--; ) A[I] = arguments[I];
            var re = O < 3 && A[0] !== z && A[O - 1] !== z ? [] : ho(A, z);
            if (((O -= re.length), O < s))
              return U0(o, a, os, y.placeholder, n, A, re, n, n, s - O);
            var oe = this && this !== Ft && this instanceof y ? d : o;
            return Sn(oe, this, A);
          }
          return y;
        }
        function B0(o) {
          return function (a, s, d) {
            var y = lt(a);
            if (!cn(a)) {
              var O = Ne(s, 3);
              (a = Rt(a)),
                (s = function (I) {
                  return O(y[I], I, y);
                });
            }
            var A = o(a, s, d);
            return A > -1 ? y[O ? a[A] : A] : n;
          };
        }
        function F0(o) {
          return Yr(function (a) {
            var s = a.length,
              d = s,
              y = $n.prototype.thru;
            for (o && a.reverse(); d--; ) {
              var O = a[d];
              if (typeof O != 'function') throw new Fn(l);
              if (y && !A && ls(O) == 'wrapper') var A = new $n([], !0);
            }
            for (d = A ? d : s; ++d < s; ) {
              O = a[d];
              var I = ls(O),
                z = I == 'wrapper' ? Rd(O) : n;
              z && Bd(z[0]) && z[1] == (H | N | M | F) && !z[4].length && z[9] == 1
                ? (A = A[ls(z[0])].apply(A, z[3]))
                : (A = O.length == 1 && Bd(O) ? A[I]() : A.thru(O));
            }
            return function () {
              var re = arguments,
                oe = re[0];
              if (A && re.length == 1 && He(oe)) return A.plant(oe).value();
              for (var se = 0, ge = s ? a[se].apply(this, re) : oe; ++se < s; )
                ge = a[se].call(this, ge);
              return ge;
            };
          });
        }
        function os(o, a, s, d, y, O, A, I, z, re) {
          var oe = a & H,
            se = a & m,
            ge = a & v,
            _e = a & (N | g),
            Te = a & U,
            ze = ge ? n : Ja(o);
          function Me() {
            for (var Ye = arguments.length, qe = Z(Ye), bn = Ye; bn--; ) qe[bn] = arguments[bn];
            if (_e)
              var rn = Yi(Me),
                Cn = WO(qe, rn);
            if (
              (d && (qe = k0(qe, d, y, _e)),
              O && (qe = R0(qe, O, A, _e)),
              (Ye -= Cn),
              _e && Ye < re)
            ) {
              var Nt = ho(qe, rn);
              return U0(o, a, os, Me.placeholder, s, qe, Nt, I, z, re - Ye);
            }
            var ur = se ? s : this,
              qr = ge ? ur[o] : o;
            return (
              (Ye = qe.length),
              I ? (qe = QT(qe, I)) : Te && Ye > 1 && qe.reverse(),
              oe && z < Ye && (qe.length = z),
              this && this !== Ft && this instanceof Me && (qr = ze || Ja(qr)),
              qr.apply(ur, qe)
            );
          }
          return Me;
        }
        function $0(o, a) {
          return function (s, d) {
            return aT(s, o, a(d), {});
          };
        }
        function is(o, a) {
          return function (s, d) {
            var y;
            if (s === n && d === n) return a;
            if ((s !== n && (y = s), d !== n)) {
              if (y === n) return d;
              typeof s == 'string' || typeof d == 'string'
                ? ((s = _n(s)), (d = _n(d)))
                : ((s = C0(s)), (d = C0(d))),
                (y = o(s, d));
            }
            return y;
          };
        }
        function Pd(o) {
          return Yr(function (a) {
            return (
              (a = vt(a, En(Ne()))),
              je(function (s) {
                var d = this;
                return o(a, function (y) {
                  return Sn(y, d, s);
                });
              })
            );
          });
        }
        function as(o, a) {
          a = a === n ? ' ' : _n(a);
          var s = a.length;
          if (s < 2) return s ? xd(a, o) : a;
          var d = xd(a, Vl(o / Hi(a)));
          return Li(a) ? wo(or(d), 0, o).join('') : d.slice(0, o);
        }
        function kT(o, a, s, d) {
          var y = a & m,
            O = Ja(o);
          function A() {
            for (
              var I = -1,
                z = arguments.length,
                re = -1,
                oe = d.length,
                se = Z(oe + z),
                ge = this && this !== Ft && this instanceof A ? O : o;
              ++re < oe;

            )
              se[re] = d[re];
            for (; z--; ) se[re++] = arguments[++I];
            return Sn(ge, y ? s : this, se);
          }
          return A;
        }
        function z0(o) {
          return function (a, s, d) {
            return (
              d && typeof d != 'number' && nn(a, s, d) && (s = d = n),
              (a = Gr(a)),
              s === n ? ((s = a), (a = 0)) : (s = Gr(s)),
              (d = d === n ? (a < s ? 1 : -1) : Gr(d)),
              yT(a, s, d, o)
            );
          };
        }
        function us(o) {
          return function (a, s) {
            return (
              (typeof a == 'string' && typeof s == 'string') || ((a = Wn(a)), (s = Wn(s))), o(a, s)
            );
          };
        }
        function U0(o, a, s, d, y, O, A, I, z, re) {
          var oe = a & N,
            se = oe ? A : n,
            ge = oe ? n : A,
            _e = oe ? O : n,
            Te = oe ? n : O;
          (a |= oe ? M : P), (a &= ~(oe ? P : M)), a & w || (a &= ~(m | v));
          var ze = [o, a, y, _e, se, Te, ge, I, z, re],
            Me = s.apply(n, ze);
          return Bd(o) && ey(Me, ze), (Me.placeholder = d), ty(Me, o, a);
        }
        function Ad(o) {
          var a = At[o];
          return function (s, d) {
            if (((s = Wn(s)), (d = d == null ? 0 : Yt(Be(d), 292)), d && t0(s))) {
              var y = (tt(s) + 'e').split('e'),
                O = a(y[0] + 'e' + (+y[1] + d));
              return (y = (tt(O) + 'e').split('e')), +(y[0] + 'e' + (+y[1] - d));
            }
            return a(s);
          };
        }
        var RT =
          $i && 1 / Ll(new $i([, -0]))[1] == X
            ? function (o) {
                return new $i(o);
              }
            : Jd;
        function j0(o) {
          return function (a) {
            var s = Vt(a);
            return s == J ? ud(a) : s == Fe ? KO(a) : jO(a, o(a));
          };
        }
        function Wr(o, a, s, d, y, O, A, I) {
          var z = a & v;
          if (!z && typeof o != 'function') throw new Fn(l);
          var re = d ? d.length : 0;
          if (
            (re || ((a &= ~(M | P)), (d = y = n)),
            (A = A === n ? A : Dt(Be(A), 0)),
            (I = I === n ? I : Be(I)),
            (re -= y ? y.length : 0),
            a & P)
          ) {
            var oe = d,
              se = y;
            d = y = n;
          }
          var ge = z ? n : Rd(o),
            _e = [o, a, s, d, y, oe, se, O, A, I];
          if (
            (ge && qT(_e, ge),
            (o = _e[0]),
            (a = _e[1]),
            (s = _e[2]),
            (d = _e[3]),
            (y = _e[4]),
            (I = _e[9] = _e[9] === n ? (z ? 0 : o.length) : Dt(_e[9] - re, 0)),
            !I && a & (N | g) && (a &= ~(N | g)),
            !a || a == m)
          )
            var Te = AT(o, a, s);
          else
            a == N || a == g
              ? (Te = DT(o, a, I))
              : (a == M || a == (m | M)) && !y.length
              ? (Te = kT(o, a, s, d))
              : (Te = os.apply(n, _e));
          var ze = ge ? x0 : ey;
          return ty(ze(Te, _e), o, a);
        }
        function W0(o, a, s, d) {
          return o === n || (ar(o, Fi[s]) && !rt.call(d, s)) ? a : o;
        }
        function Y0(o, a, s, d, y, O) {
          return mt(o) && mt(a) && (O.set(a, o), es(o, a, n, Y0, O), O.delete(a)), o;
        }
        function IT(o) {
          return nu(o) ? n : o;
        }
        function V0(o, a, s, d, y, O) {
          var A = s & E,
            I = o.length,
            z = a.length;
          if (I != z && !(A && z > I)) return !1;
          var re = O.get(o),
            oe = O.get(a);
          if (re && oe) return re == a && oe == o;
          var se = -1,
            ge = !0,
            _e = s & _ ? new ei() : n;
          for (O.set(o, a), O.set(a, o); ++se < I; ) {
            var Te = o[se],
              ze = a[se];
            if (d) var Me = A ? d(ze, Te, se, a, o, O) : d(Te, ze, se, o, a, O);
            if (Me !== n) {
              if (Me) continue;
              ge = !1;
              break;
            }
            if (_e) {
              if (
                !td(a, function (Ye, qe) {
                  if (!Ua(_e, qe) && (Te === Ye || y(Te, Ye, s, d, O))) return _e.push(qe);
                })
              ) {
                ge = !1;
                break;
              }
            } else if (!(Te === ze || y(Te, ze, s, d, O))) {
              ge = !1;
              break;
            }
          }
          return O.delete(o), O.delete(a), ge;
        }
        function LT(o, a, s, d, y, O, A) {
          switch (s) {
            case bt:
              if (o.byteLength != a.byteLength || o.byteOffset != a.byteOffset) return !1;
              (o = o.buffer), (a = a.buffer);
            case yt:
              return !(o.byteLength != a.byteLength || !O(new Ul(o), new Ul(a)));
            case de:
            case pe:
            case te:
              return ar(+o, +a);
            case it:
              return o.name == a.name && o.message == a.message;
            case Xe:
            case nt:
              return o == a + '';
            case J:
              var I = ud;
            case Fe:
              var z = d & E;
              if ((I || (I = Ll), o.size != a.size && !z)) return !1;
              var re = A.get(o);
              if (re) return re == a;
              (d |= _), A.set(o, a);
              var oe = V0(I(o), I(a), d, y, O, A);
              return A.delete(o), oe;
            case xt:
              if (Xa) return Xa.call(o) == Xa.call(a);
          }
          return !1;
        }
        function HT(o, a, s, d, y, O) {
          var A = s & E,
            I = Dd(o),
            z = I.length,
            re = Dd(a),
            oe = re.length;
          if (z != oe && !A) return !1;
          for (var se = z; se--; ) {
            var ge = I[se];
            if (!(A ? ge in a : rt.call(a, ge))) return !1;
          }
          var _e = O.get(o),
            Te = O.get(a);
          if (_e && Te) return _e == a && Te == o;
          var ze = !0;
          O.set(o, a), O.set(a, o);
          for (var Me = A; ++se < z; ) {
            ge = I[se];
            var Ye = o[ge],
              qe = a[ge];
            if (d) var bn = A ? d(qe, Ye, ge, a, o, O) : d(Ye, qe, ge, o, a, O);
            if (!(bn === n ? Ye === qe || y(Ye, qe, s, d, O) : bn)) {
              ze = !1;
              break;
            }
            Me || (Me = ge == 'constructor');
          }
          if (ze && !Me) {
            var rn = o.constructor,
              Cn = a.constructor;
            rn != Cn &&
              'constructor' in o &&
              'constructor' in a &&
              !(
                typeof rn == 'function' &&
                rn instanceof rn &&
                typeof Cn == 'function' &&
                Cn instanceof Cn
              ) &&
              (ze = !1);
          }
          return O.delete(o), O.delete(a), ze;
        }
        function Yr(o) {
          return $d(Q0(o, n, uy), o + '');
        }
        function Dd(o) {
          return d0(o, Rt, Ld);
        }
        function kd(o) {
          return d0(o, fn, X0);
        }
        var Rd = Gl
          ? function (o) {
              return Gl.get(o);
            }
          : Jd;
        function ls(o) {
          for (var a = o.name + '', s = zi[a], d = rt.call(zi, a) ? s.length : 0; d--; ) {
            var y = s[d],
              O = y.func;
            if (O == null || O == o) return y.name;
          }
          return a;
        }
        function Yi(o) {
          var a = rt.call(C, 'placeholder') ? C : o;
          return a.placeholder;
        }
        function Ne() {
          var o = C.iteratee || Kd;
          return (o = o === Kd ? v0 : o), arguments.length ? o(arguments[0], arguments[1]) : o;
        }
        function ss(o, a) {
          var s = o.__data__;
          return YT(a) ? s[typeof a == 'string' ? 'string' : 'hash'] : s.map;
        }
        function Id(o) {
          for (var a = Rt(o), s = a.length; s--; ) {
            var d = a[s],
              y = o[d];
            a[s] = [d, y, Z0(y)];
          }
          return a;
        }
        function ri(o, a) {
          var s = GO(o, a);
          return h0(s) ? s : n;
        }
        function BT(o) {
          var a = rt.call(o, Qo),
            s = o[Qo];
          try {
            o[Qo] = n;
            var d = !0;
          } catch (O) {}
          var y = $l.call(o);
          return d && (a ? (o[Qo] = s) : delete o[Qo]), y;
        }
        var Ld = sd
            ? function (o) {
                return o == null
                  ? []
                  : ((o = lt(o)),
                    fo(sd(o), function (a) {
                      return Jm.call(o, a);
                    }));
              }
            : ep,
          X0 = sd
            ? function (o) {
                for (var a = []; o; ) po(a, Ld(o)), (o = jl(o));
                return a;
              }
            : ep,
          Vt = tn;
        ((cd && Vt(new cd(new ArrayBuffer(1))) != bt) ||
          (Wa && Vt(new Wa()) != J) ||
          (fd && Vt(fd.resolve()) != ye) ||
          ($i && Vt(new $i()) != Fe) ||
          (Ya && Vt(new Ya()) != $e)) &&
          (Vt = function (o) {
            var a = tn(o),
              s = a == G ? o.constructor : n,
              d = s ? oi(s) : '';
            if (d)
              switch (d) {
                case SN:
                  return bt;
                case EN:
                  return J;
                case _N:
                  return ye;
                case xN:
                  return Fe;
                case bN:
                  return $e;
              }
            return a;
          });
        function FT(o, a, s) {
          for (var d = -1, y = s.length; ++d < y; ) {
            var O = s[d],
              A = O.size;
            switch (O.type) {
              case 'drop':
                o += A;
                break;
              case 'dropRight':
                a -= A;
                break;
              case 'take':
                a = Yt(a, o + A);
                break;
              case 'takeRight':
                o = Dt(o, a - A);
                break;
            }
          }
          return { start: o, end: a };
        }
        function $T(o) {
          var a = o.match(Je);
          return a ? a[1].split($a) : [];
        }
        function G0(o, a, s) {
          a = yo(a, o);
          for (var d = -1, y = a.length, O = !1; ++d < y; ) {
            var A = _r(a[d]);
            if (!(O = o != null && s(o, A))) break;
            o = o[A];
          }
          return O || ++d != y
            ? O
            : ((y = o == null ? 0 : o.length), !!y && gs(y) && Vr(A, y) && (He(o) || ii(o)));
        }
        function zT(o) {
          var a = o.length,
            s = new o.constructor(a);
          return (
            a &&
              typeof o[0] == 'string' &&
              rt.call(o, 'index') &&
              ((s.index = o.index), (s.input = o.input)),
            s
          );
        }
        function q0(o) {
          return typeof o.constructor == 'function' && !eu(o) ? Ui(jl(o)) : {};
        }
        function UT(o, a, s) {
          var d = o.constructor;
          switch (a) {
            case yt:
              return Md(o);
            case de:
            case pe:
              return new d(+o);
            case bt:
              return CT(o, s);
            case Ae:
            case ln:
            case In:
            case nr:
            case Ln:
            case K:
            case we:
            case Ce:
            case We:
              return A0(o, s);
            case J:
              return new d();
            case te:
            case nt:
              return new d(o);
            case Xe:
              return OT(o);
            case Fe:
              return new d();
            case xt:
              return NT(o);
          }
        }
        function jT(o, a) {
          var s = a.length;
          if (!s) return o;
          var d = s - 1;
          return (
            (a[d] = (s > 1 ? '& ' : '') + a[d]),
            (a = a.join(s > 2 ? ', ' : ' ')),
            o.replace(
              Di,
              `{
/* [wrapped with ` +
                a +
                `] */
`,
            )
          );
        }
        function WT(o) {
          return He(o) || ii(o) || !!(e0 && o && o[e0]);
        }
        function Vr(o, a) {
          var s = typeof o;
          return (
            (a = a == null ? ne : a),
            !!a && (s == 'number' || (s != 'symbol' && Wf.test(o))) && o > -1 && o % 1 == 0 && o < a
          );
        }
        function nn(o, a, s) {
          if (!mt(s)) return !1;
          var d = typeof a;
          return (d == 'number' ? cn(s) && Vr(a, s.length) : d == 'string' && a in s)
            ? ar(s[a], o)
            : !1;
        }
        function Hd(o, a) {
          if (He(o)) return !1;
          var s = typeof o;
          return s == 'number' || s == 'symbol' || s == 'boolean' || o == null || xn(o)
            ? !0
            : en.test(o) || !rr.test(o) || (a != null && o in lt(a));
        }
        function YT(o) {
          var a = typeof o;
          return a == 'string' || a == 'number' || a == 'symbol' || a == 'boolean'
            ? o !== '__proto__'
            : o === null;
        }
        function Bd(o) {
          var a = ls(o),
            s = C[a];
          if (typeof s != 'function' || !(a in Ge.prototype)) return !1;
          if (o === s) return !0;
          var d = Rd(s);
          return !!d && o === d[0];
        }
        function VT(o) {
          return !!Zm && Zm in o;
        }
        var XT = Bl ? Xr : tp;
        function eu(o) {
          var a = o && o.constructor,
            s = (typeof a == 'function' && a.prototype) || Fi;
          return o === s;
        }
        function Z0(o) {
          return o === o && !mt(o);
        }
        function K0(o, a) {
          return function (s) {
            return s == null ? !1 : s[o] === a && (a !== n || o in lt(s));
          };
        }
        function GT(o) {
          var a = hs(o, function (d) {
              return s.size === p && s.clear(), d;
            }),
            s = a.cache;
          return a;
        }
        function qT(o, a) {
          var s = o[1],
            d = a[1],
            y = s | d,
            O = y < (m | v | H),
            A =
              (d == H && s == N) ||
              (d == H && s == F && o[7].length <= a[8]) ||
              (d == (H | F) && a[7].length <= a[8] && s == N);
          if (!(O || A)) return o;
          d & m && ((o[2] = a[2]), (y |= s & m ? 0 : w));
          var I = a[3];
          if (I) {
            var z = o[3];
            (o[3] = z ? k0(z, I, a[4]) : I), (o[4] = z ? ho(o[3], h) : a[4]);
          }
          return (
            (I = a[5]),
            I && ((z = o[5]), (o[5] = z ? R0(z, I, a[6]) : I), (o[6] = z ? ho(o[5], h) : a[6])),
            (I = a[7]),
            I && (o[7] = I),
            d & H && (o[8] = o[8] == null ? a[8] : Yt(o[8], a[8])),
            o[9] == null && (o[9] = a[9]),
            (o[0] = a[0]),
            (o[1] = y),
            o
          );
        }
        function ZT(o) {
          var a = [];
          if (o != null) for (var s in lt(o)) a.push(s);
          return a;
        }
        function KT(o) {
          return $l.call(o);
        }
        function Q0(o, a, s) {
          return (
            (a = Dt(a === n ? o.length - 1 : a, 0)),
            function () {
              for (var d = arguments, y = -1, O = Dt(d.length - a, 0), A = Z(O); ++y < O; )
                A[y] = d[a + y];
              y = -1;
              for (var I = Z(a + 1); ++y < a; ) I[y] = d[y];
              return (I[a] = s(A)), Sn(o, this, I);
            }
          );
        }
        function J0(o, a) {
          return a.length < 2 ? o : ni(o, Un(a, 0, -1));
        }
        function QT(o, a) {
          for (var s = o.length, d = Yt(a.length, s), y = sn(o); d--; ) {
            var O = a[d];
            o[d] = Vr(O, s) ? y[O] : n;
          }
          return o;
        }
        function Fd(o, a) {
          if (!(a === 'constructor' && typeof o[a] == 'function') && a != '__proto__') return o[a];
        }
        var ey = ny(x0),
          tu =
            pN ||
            function (o, a) {
              return Ft.setTimeout(o, a);
            },
          $d = ny(ET);
        function ty(o, a, s) {
          var d = a + '';
          return $d(o, jT(d, JT($T(d), s)));
        }
        function ny(o) {
          var a = 0,
            s = 0;
          return function () {
            var d = mN(),
              y = he - (d - s);
            if (((s = d), y > 0)) {
              if (++a >= ae) return arguments[0];
            } else a = 0;
            return o.apply(n, arguments);
          };
        }
        function cs(o, a) {
          var s = -1,
            d = o.length,
            y = d - 1;
          for (a = a === n ? d : a; ++s < a; ) {
            var O = _d(s, y),
              A = o[O];
            (o[O] = o[s]), (o[s] = A);
          }
          return (o.length = a), o;
        }
        var ry = GT(function (o) {
          var a = [];
          return (
            o.charCodeAt(0) === 46 && a.push(''),
            o.replace(Mi, function (s, d, y, O) {
              a.push(y ? O.replace(Pl, '$1') : d || s);
            }),
            a
          );
        });
        function _r(o) {
          if (typeof o == 'string' || xn(o)) return o;
          var a = o + '';
          return a == '0' && 1 / o == -X ? '-0' : a;
        }
        function oi(o) {
          if (o != null) {
            try {
              return Fl.call(o);
            } catch (a) {}
            try {
              return o + '';
            } catch (a) {}
          }
          return '';
        }
        function JT(o, a) {
          return (
            Bn(B, function (s) {
              var d = '_.' + s[0];
              a & s[1] && !Rl(o, d) && o.push(d);
            }),
            o.sort()
          );
        }
        function oy(o) {
          if (o instanceof Ge) return o.clone();
          var a = new $n(o.__wrapped__, o.__chain__);
          return (
            (a.__actions__ = sn(o.__actions__)),
            (a.__index__ = o.__index__),
            (a.__values__ = o.__values__),
            a
          );
        }
        function eM(o, a, s) {
          (s ? nn(o, a, s) : a === n) ? (a = 1) : (a = Dt(Be(a), 0));
          var d = o == null ? 0 : o.length;
          if (!d || a < 1) return [];
          for (var y = 0, O = 0, A = Z(Vl(d / a)); y < d; ) A[O++] = Un(o, y, (y += a));
          return A;
        }
        function tM(o) {
          for (var a = -1, s = o == null ? 0 : o.length, d = 0, y = []; ++a < s; ) {
            var O = o[a];
            O && (y[d++] = O);
          }
          return y;
        }
        function nM() {
          var o = arguments.length;
          if (!o) return [];
          for (var a = Z(o - 1), s = arguments[0], d = o; d--; ) a[d - 1] = arguments[d];
          return po(He(s) ? sn(s) : [s], $t(a, 1));
        }
        var rM = je(function (o, a) {
            return Ot(o) ? qa(o, $t(a, 1, Ot, !0)) : [];
          }),
          oM = je(function (o, a) {
            var s = jn(a);
            return Ot(s) && (s = n), Ot(o) ? qa(o, $t(a, 1, Ot, !0), Ne(s, 2)) : [];
          }),
          iM = je(function (o, a) {
            var s = jn(a);
            return Ot(s) && (s = n), Ot(o) ? qa(o, $t(a, 1, Ot, !0), n, s) : [];
          });
        function aM(o, a, s) {
          var d = o == null ? 0 : o.length;
          return d ? ((a = s || a === n ? 1 : Be(a)), Un(o, a < 0 ? 0 : a, d)) : [];
        }
        function uM(o, a, s) {
          var d = o == null ? 0 : o.length;
          return d ? ((a = s || a === n ? 1 : Be(a)), (a = d - a), Un(o, 0, a < 0 ? 0 : a)) : [];
        }
        function lM(o, a) {
          return o && o.length ? ns(o, Ne(a, 3), !0, !0) : [];
        }
        function sM(o, a) {
          return o && o.length ? ns(o, Ne(a, 3), !0) : [];
        }
        function cM(o, a, s, d) {
          var y = o == null ? 0 : o.length;
          return y
            ? (s && typeof s != 'number' && nn(o, a, s) && ((s = 0), (d = y)), nT(o, a, s, d))
            : [];
        }
        function iy(o, a, s) {
          var d = o == null ? 0 : o.length;
          if (!d) return -1;
          var y = s == null ? 0 : Be(s);
          return y < 0 && (y = Dt(d + y, 0)), Il(o, Ne(a, 3), y);
        }
        function ay(o, a, s) {
          var d = o == null ? 0 : o.length;
          if (!d) return -1;
          var y = d - 1;
          return (
            s !== n && ((y = Be(s)), (y = s < 0 ? Dt(d + y, 0) : Yt(y, d - 1))),
            Il(o, Ne(a, 3), y, !0)
          );
        }
        function uy(o) {
          var a = o == null ? 0 : o.length;
          return a ? $t(o, 1) : [];
        }
        function fM(o) {
          var a = o == null ? 0 : o.length;
          return a ? $t(o, X) : [];
        }
        function dM(o, a) {
          var s = o == null ? 0 : o.length;
          return s ? ((a = a === n ? 1 : Be(a)), $t(o, a)) : [];
        }
        function pM(o) {
          for (var a = -1, s = o == null ? 0 : o.length, d = {}; ++a < s; ) {
            var y = o[a];
            d[y[0]] = y[1];
          }
          return d;
        }
        function ly(o) {
          return o && o.length ? o[0] : n;
        }
        function hM(o, a, s) {
          var d = o == null ? 0 : o.length;
          if (!d) return -1;
          var y = s == null ? 0 : Be(s);
          return y < 0 && (y = Dt(d + y, 0)), Ii(o, a, y);
        }
        function vM(o) {
          var a = o == null ? 0 : o.length;
          return a ? Un(o, 0, -1) : [];
        }
        var gM = je(function (o) {
            var a = vt(o, Nd);
            return a.length && a[0] === o[0] ? md(a) : [];
          }),
          mM = je(function (o) {
            var a = jn(o),
              s = vt(o, Nd);
            return (
              a === jn(s) ? (a = n) : s.pop(), s.length && s[0] === o[0] ? md(s, Ne(a, 2)) : []
            );
          }),
          yM = je(function (o) {
            var a = jn(o),
              s = vt(o, Nd);
            return (
              (a = typeof a == 'function' ? a : n),
              a && s.pop(),
              s.length && s[0] === o[0] ? md(s, n, a) : []
            );
          });
        function wM(o, a) {
          return o == null ? '' : vN.call(o, a);
        }
        function jn(o) {
          var a = o == null ? 0 : o.length;
          return a ? o[a - 1] : n;
        }
        function SM(o, a, s) {
          var d = o == null ? 0 : o.length;
          if (!d) return -1;
          var y = d;
          return (
            s !== n && ((y = Be(s)), (y = y < 0 ? Dt(d + y, 0) : Yt(y, d - 1))),
            a === a ? JO(o, a, y) : Il(o, Um, y, !0)
          );
        }
        function EM(o, a) {
          return o && o.length ? w0(o, Be(a)) : n;
        }
        var _M = je(sy);
        function sy(o, a) {
          return o && o.length && a && a.length ? Ed(o, a) : o;
        }
        function xM(o, a, s) {
          return o && o.length && a && a.length ? Ed(o, a, Ne(s, 2)) : o;
        }
        function bM(o, a, s) {
          return o && o.length && a && a.length ? Ed(o, a, n, s) : o;
        }
        var CM = Yr(function (o, a) {
          var s = o == null ? 0 : o.length,
            d = pd(o, a);
          return (
            _0(
              o,
              vt(a, function (y) {
                return Vr(y, s) ? +y : y;
              }).sort(D0),
            ),
            d
          );
        });
        function OM(o, a) {
          var s = [];
          if (!(o && o.length)) return s;
          var d = -1,
            y = [],
            O = o.length;
          for (a = Ne(a, 3); ++d < O; ) {
            var A = o[d];
            a(A, d, o) && (s.push(A), y.push(d));
          }
          return _0(o, y), s;
        }
        function zd(o) {
          return o == null ? o : wN.call(o);
        }
        function NM(o, a, s) {
          var d = o == null ? 0 : o.length;
          return d
            ? (s && typeof s != 'number' && nn(o, a, s)
                ? ((a = 0), (s = d))
                : ((a = a == null ? 0 : Be(a)), (s = s === n ? d : Be(s))),
              Un(o, a, s))
            : [];
        }
        function TM(o, a) {
          return ts(o, a);
        }
        function MM(o, a, s) {
          return bd(o, a, Ne(s, 2));
        }
        function PM(o, a) {
          var s = o == null ? 0 : o.length;
          if (s) {
            var d = ts(o, a);
            if (d < s && ar(o[d], a)) return d;
          }
          return -1;
        }
        function AM(o, a) {
          return ts(o, a, !0);
        }
        function DM(o, a, s) {
          return bd(o, a, Ne(s, 2), !0);
        }
        function kM(o, a) {
          var s = o == null ? 0 : o.length;
          if (s) {
            var d = ts(o, a, !0) - 1;
            if (ar(o[d], a)) return d;
          }
          return -1;
        }
        function RM(o) {
          return o && o.length ? b0(o) : [];
        }
        function IM(o, a) {
          return o && o.length ? b0(o, Ne(a, 2)) : [];
        }
        function LM(o) {
          var a = o == null ? 0 : o.length;
          return a ? Un(o, 1, a) : [];
        }
        function HM(o, a, s) {
          return o && o.length ? ((a = s || a === n ? 1 : Be(a)), Un(o, 0, a < 0 ? 0 : a)) : [];
        }
        function BM(o, a, s) {
          var d = o == null ? 0 : o.length;
          return d ? ((a = s || a === n ? 1 : Be(a)), (a = d - a), Un(o, a < 0 ? 0 : a, d)) : [];
        }
        function FM(o, a) {
          return o && o.length ? ns(o, Ne(a, 3), !1, !0) : [];
        }
        function $M(o, a) {
          return o && o.length ? ns(o, Ne(a, 3)) : [];
        }
        var zM = je(function (o) {
            return mo($t(o, 1, Ot, !0));
          }),
          UM = je(function (o) {
            var a = jn(o);
            return Ot(a) && (a = n), mo($t(o, 1, Ot, !0), Ne(a, 2));
          }),
          jM = je(function (o) {
            var a = jn(o);
            return (a = typeof a == 'function' ? a : n), mo($t(o, 1, Ot, !0), n, a);
          });
        function WM(o) {
          return o && o.length ? mo(o) : [];
        }
        function YM(o, a) {
          return o && o.length ? mo(o, Ne(a, 2)) : [];
        }
        function VM(o, a) {
          return (a = typeof a == 'function' ? a : n), o && o.length ? mo(o, n, a) : [];
        }
        function Ud(o) {
          if (!(o && o.length)) return [];
          var a = 0;
          return (
            (o = fo(o, function (s) {
              if (Ot(s)) return (a = Dt(s.length, a)), !0;
            })),
            id(a, function (s) {
              return vt(o, nd(s));
            })
          );
        }
        function cy(o, a) {
          if (!(o && o.length)) return [];
          var s = Ud(o);
          return a == null
            ? s
            : vt(s, function (d) {
                return Sn(a, n, d);
              });
        }
        var XM = je(function (o, a) {
            return Ot(o) ? qa(o, a) : [];
          }),
          GM = je(function (o) {
            return Od(fo(o, Ot));
          }),
          qM = je(function (o) {
            var a = jn(o);
            return Ot(a) && (a = n), Od(fo(o, Ot), Ne(a, 2));
          }),
          ZM = je(function (o) {
            var a = jn(o);
            return (a = typeof a == 'function' ? a : n), Od(fo(o, Ot), n, a);
          }),
          KM = je(Ud);
        function QM(o, a) {
          return T0(o || [], a || [], Ga);
        }
        function JM(o, a) {
          return T0(o || [], a || [], Qa);
        }
        var e2 = je(function (o) {
          var a = o.length,
            s = a > 1 ? o[a - 1] : n;
          return (s = typeof s == 'function' ? (o.pop(), s) : n), cy(o, s);
        });
        function fy(o) {
          var a = C(o);
          return (a.__chain__ = !0), a;
        }
        function t2(o, a) {
          return a(o), o;
        }
        function fs(o, a) {
          return a(o);
        }
        var n2 = Yr(function (o) {
          var a = o.length,
            s = a ? o[0] : 0,
            d = this.__wrapped__,
            y = function (O) {
              return pd(O, o);
            };
          return a > 1 || this.__actions__.length || !(d instanceof Ge) || !Vr(s)
            ? this.thru(y)
            : ((d = d.slice(s, +s + (a ? 1 : 0))),
              d.__actions__.push({ func: fs, args: [y], thisArg: n }),
              new $n(d, this.__chain__).thru(function (O) {
                return a && !O.length && O.push(n), O;
              }));
        });
        function r2() {
          return fy(this);
        }
        function o2() {
          return new $n(this.value(), this.__chain__);
        }
        function i2() {
          this.__values__ === n && (this.__values__ = Cy(this.value()));
          var o = this.__index__ >= this.__values__.length,
            a = o ? n : this.__values__[this.__index__++];
          return { done: o, value: a };
        }
        function a2() {
          return this;
        }
        function u2(o) {
          for (var a, s = this; s instanceof Zl; ) {
            var d = oy(s);
            (d.__index__ = 0), (d.__values__ = n), a ? (y.__wrapped__ = d) : (a = d);
            var y = d;
            s = s.__wrapped__;
          }
          return (y.__wrapped__ = o), a;
        }
        function l2() {
          var o = this.__wrapped__;
          if (o instanceof Ge) {
            var a = o;
            return (
              this.__actions__.length && (a = new Ge(this)),
              (a = a.reverse()),
              a.__actions__.push({ func: fs, args: [zd], thisArg: n }),
              new $n(a, this.__chain__)
            );
          }
          return this.thru(zd);
        }
        function s2() {
          return N0(this.__wrapped__, this.__actions__);
        }
        var c2 = rs(function (o, a, s) {
          rt.call(o, s) ? ++o[s] : jr(o, s, 1);
        });
        function f2(o, a, s) {
          var d = He(o) ? $m : tT;
          return s && nn(o, a, s) && (a = n), d(o, Ne(a, 3));
        }
        function d2(o, a) {
          var s = He(o) ? fo : c0;
          return s(o, Ne(a, 3));
        }
        var p2 = B0(iy),
          h2 = B0(ay);
        function v2(o, a) {
          return $t(ds(o, a), 1);
        }
        function g2(o, a) {
          return $t(ds(o, a), X);
        }
        function m2(o, a, s) {
          return (s = s === n ? 1 : Be(s)), $t(ds(o, a), s);
        }
        function dy(o, a) {
          var s = He(o) ? Bn : go;
          return s(o, Ne(a, 3));
        }
        function py(o, a) {
          var s = He(o) ? LO : s0;
          return s(o, Ne(a, 3));
        }
        var y2 = rs(function (o, a, s) {
          rt.call(o, s) ? o[s].push(a) : jr(o, s, [a]);
        });
        function w2(o, a, s, d) {
          (o = cn(o) ? o : Xi(o)), (s = s && !d ? Be(s) : 0);
          var y = o.length;
          return (
            s < 0 && (s = Dt(y + s, 0)),
            ms(o) ? s <= y && o.indexOf(a, s) > -1 : !!y && Ii(o, a, s) > -1
          );
        }
        var S2 = je(function (o, a, s) {
            var d = -1,
              y = typeof a == 'function',
              O = cn(o) ? Z(o.length) : [];
            return (
              go(o, function (A) {
                O[++d] = y ? Sn(a, A, s) : Za(A, a, s);
              }),
              O
            );
          }),
          E2 = rs(function (o, a, s) {
            jr(o, s, a);
          });
        function ds(o, a) {
          var s = He(o) ? vt : g0;
          return s(o, Ne(a, 3));
        }
        function _2(o, a, s, d) {
          return o == null
            ? []
            : (He(a) || (a = a == null ? [] : [a]),
              (s = d ? n : s),
              He(s) || (s = s == null ? [] : [s]),
              S0(o, a, s));
        }
        var x2 = rs(
          function (o, a, s) {
            o[s ? 0 : 1].push(a);
          },
          function () {
            return [[], []];
          },
        );
        function b2(o, a, s) {
          var d = He(o) ? ed : Wm,
            y = arguments.length < 3;
          return d(o, Ne(a, 4), s, y, go);
        }
        function C2(o, a, s) {
          var d = He(o) ? HO : Wm,
            y = arguments.length < 3;
          return d(o, Ne(a, 4), s, y, s0);
        }
        function O2(o, a) {
          var s = He(o) ? fo : c0;
          return s(o, vs(Ne(a, 3)));
        }
        function N2(o) {
          var a = He(o) ? i0 : wT;
          return a(o);
        }
        function T2(o, a, s) {
          (s ? nn(o, a, s) : a === n) ? (a = 1) : (a = Be(a));
          var d = He(o) ? ZN : ST;
          return d(o, a);
        }
        function M2(o) {
          var a = He(o) ? KN : _T;
          return a(o);
        }
        function P2(o) {
          if (o == null) return 0;
          if (cn(o)) return ms(o) ? Hi(o) : o.length;
          var a = Vt(o);
          return a == J || a == Fe ? o.size : wd(o).length;
        }
        function A2(o, a, s) {
          var d = He(o) ? td : xT;
          return s && nn(o, a, s) && (a = n), d(o, Ne(a, 3));
        }
        var D2 = je(function (o, a) {
            if (o == null) return [];
            var s = a.length;
            return (
              s > 1 && nn(o, a[0], a[1]) ? (a = []) : s > 2 && nn(a[0], a[1], a[2]) && (a = [a[0]]),
              S0(o, $t(a, 1), [])
            );
          }),
          ps =
            dN ||
            function () {
              return Ft.Date.now();
            };
        function k2(o, a) {
          if (typeof a != 'function') throw new Fn(l);
          return (
            (o = Be(o)),
            function () {
              if (--o < 1) return a.apply(this, arguments);
            }
          );
        }
        function hy(o, a, s) {
          return (a = s ? n : a), (a = o && a == null ? o.length : a), Wr(o, H, n, n, n, n, a);
        }
        function vy(o, a) {
          var s;
          if (typeof a != 'function') throw new Fn(l);
          return (
            (o = Be(o)),
            function () {
              return --o > 0 && (s = a.apply(this, arguments)), o <= 1 && (a = n), s;
            }
          );
        }
        var jd = je(function (o, a, s) {
            var d = m;
            if (s.length) {
              var y = ho(s, Yi(jd));
              d |= M;
            }
            return Wr(o, d, a, s, y);
          }),
          gy = je(function (o, a, s) {
            var d = m | v;
            if (s.length) {
              var y = ho(s, Yi(gy));
              d |= M;
            }
            return Wr(a, d, o, s, y);
          });
        function my(o, a, s) {
          a = s ? n : a;
          var d = Wr(o, N, n, n, n, n, n, a);
          return (d.placeholder = my.placeholder), d;
        }
        function yy(o, a, s) {
          a = s ? n : a;
          var d = Wr(o, g, n, n, n, n, n, a);
          return (d.placeholder = yy.placeholder), d;
        }
        function wy(o, a, s) {
          var d,
            y,
            O,
            A,
            I,
            z,
            re = 0,
            oe = !1,
            se = !1,
            ge = !0;
          if (typeof o != 'function') throw new Fn(l);
          (a = Wn(a) || 0),
            mt(s) &&
              ((oe = !!s.leading),
              (se = 'maxWait' in s),
              (O = se ? Dt(Wn(s.maxWait) || 0, a) : O),
              (ge = 'trailing' in s ? !!s.trailing : ge));
          function _e(Nt) {
            var ur = d,
              qr = y;
            return (d = y = n), (re = Nt), (A = o.apply(qr, ur)), A;
          }
          function Te(Nt) {
            return (re = Nt), (I = tu(Ye, a)), oe ? _e(Nt) : A;
          }
          function ze(Nt) {
            var ur = Nt - z,
              qr = Nt - re,
              By = a - ur;
            return se ? Yt(By, O - qr) : By;
          }
          function Me(Nt) {
            var ur = Nt - z,
              qr = Nt - re;
            return z === n || ur >= a || ur < 0 || (se && qr >= O);
          }
          function Ye() {
            var Nt = ps();
            if (Me(Nt)) return qe(Nt);
            I = tu(Ye, ze(Nt));
          }
          function qe(Nt) {
            return (I = n), ge && d ? _e(Nt) : ((d = y = n), A);
          }
          function bn() {
            I !== n && M0(I), (re = 0), (d = z = y = I = n);
          }
          function rn() {
            return I === n ? A : qe(ps());
          }
          function Cn() {
            var Nt = ps(),
              ur = Me(Nt);
            if (((d = arguments), (y = this), (z = Nt), ur)) {
              if (I === n) return Te(z);
              if (se) return M0(I), (I = tu(Ye, a)), _e(z);
            }
            return I === n && (I = tu(Ye, a)), A;
          }
          return (Cn.cancel = bn), (Cn.flush = rn), Cn;
        }
        var R2 = je(function (o, a) {
            return l0(o, 1, a);
          }),
          I2 = je(function (o, a, s) {
            return l0(o, Wn(a) || 0, s);
          });
        function L2(o) {
          return Wr(o, U);
        }
        function hs(o, a) {
          if (typeof o != 'function' || (a != null && typeof a != 'function')) throw new Fn(l);
          var s = function () {
            var d = arguments,
              y = a ? a.apply(this, d) : d[0],
              O = s.cache;
            if (O.has(y)) return O.get(y);
            var A = o.apply(this, d);
            return (s.cache = O.set(y, A) || O), A;
          };
          return (s.cache = new (hs.Cache || Ur)()), s;
        }
        hs.Cache = Ur;
        function vs(o) {
          if (typeof o != 'function') throw new Fn(l);
          return function () {
            var a = arguments;
            switch (a.length) {
              case 0:
                return !o.call(this);
              case 1:
                return !o.call(this, a[0]);
              case 2:
                return !o.call(this, a[0], a[1]);
              case 3:
                return !o.call(this, a[0], a[1], a[2]);
            }
            return !o.apply(this, a);
          };
        }
        function H2(o) {
          return vy(2, o);
        }
        var B2 = bT(function (o, a) {
            a = a.length == 1 && He(a[0]) ? vt(a[0], En(Ne())) : vt($t(a, 1), En(Ne()));
            var s = a.length;
            return je(function (d) {
              for (var y = -1, O = Yt(d.length, s); ++y < O; ) d[y] = a[y].call(this, d[y]);
              return Sn(o, this, d);
            });
          }),
          Wd = je(function (o, a) {
            var s = ho(a, Yi(Wd));
            return Wr(o, M, n, a, s);
          }),
          Sy = je(function (o, a) {
            var s = ho(a, Yi(Sy));
            return Wr(o, P, n, a, s);
          }),
          F2 = Yr(function (o, a) {
            return Wr(o, F, n, n, n, a);
          });
        function $2(o, a) {
          if (typeof o != 'function') throw new Fn(l);
          return (a = a === n ? a : Be(a)), je(o, a);
        }
        function z2(o, a) {
          if (typeof o != 'function') throw new Fn(l);
          return (
            (a = a == null ? 0 : Dt(Be(a), 0)),
            je(function (s) {
              var d = s[a],
                y = wo(s, 0, a);
              return d && po(y, d), Sn(o, this, y);
            })
          );
        }
        function U2(o, a, s) {
          var d = !0,
            y = !0;
          if (typeof o != 'function') throw new Fn(l);
          return (
            mt(s) &&
              ((d = 'leading' in s ? !!s.leading : d), (y = 'trailing' in s ? !!s.trailing : y)),
            wy(o, a, { leading: d, maxWait: a, trailing: y })
          );
        }
        function j2(o) {
          return hy(o, 1);
        }
        function W2(o, a) {
          return Wd(Td(a), o);
        }
        function Y2() {
          if (!arguments.length) return [];
          var o = arguments[0];
          return He(o) ? o : [o];
        }
        function V2(o) {
          return zn(o, b);
        }
        function X2(o, a) {
          return (a = typeof a == 'function' ? a : n), zn(o, b, a);
        }
        function G2(o) {
          return zn(o, x | b);
        }
        function q2(o, a) {
          return (a = typeof a == 'function' ? a : n), zn(o, x | b, a);
        }
        function Z2(o, a) {
          return a == null || u0(o, a, Rt(a));
        }
        function ar(o, a) {
          return o === a || (o !== o && a !== a);
        }
        var K2 = us(gd),
          Q2 = us(function (o, a) {
            return o >= a;
          }),
          ii = p0(
            (function () {
              return arguments;
            })(),
          )
            ? p0
            : function (o) {
                return wt(o) && rt.call(o, 'callee') && !Jm.call(o, 'callee');
              },
          He = Z.isArray,
          J2 = Rm ? En(Rm) : uT;
        function cn(o) {
          return o != null && gs(o.length) && !Xr(o);
        }
        function Ot(o) {
          return wt(o) && cn(o);
        }
        function eP(o) {
          return o === !0 || o === !1 || (wt(o) && tn(o) == de);
        }
        var So = hN || tp,
          tP = Im ? En(Im) : lT;
        function nP(o) {
          return wt(o) && o.nodeType === 1 && !nu(o);
        }
        function rP(o) {
          if (o == null) return !0;
          if (
            cn(o) &&
            (He(o) ||
              typeof o == 'string' ||
              typeof o.splice == 'function' ||
              So(o) ||
              Vi(o) ||
              ii(o))
          )
            return !o.length;
          var a = Vt(o);
          if (a == J || a == Fe) return !o.size;
          if (eu(o)) return !wd(o).length;
          for (var s in o) if (rt.call(o, s)) return !1;
          return !0;
        }
        function oP(o, a) {
          return Ka(o, a);
        }
        function iP(o, a, s) {
          s = typeof s == 'function' ? s : n;
          var d = s ? s(o, a) : n;
          return d === n ? Ka(o, a, n, s) : !!d;
        }
        function Yd(o) {
          if (!wt(o)) return !1;
          var a = tn(o);
          return (
            a == it ||
            a == Ee ||
            (typeof o.message == 'string' && typeof o.name == 'string' && !nu(o))
          );
        }
        function aP(o) {
          return typeof o == 'number' && t0(o);
        }
        function Xr(o) {
          if (!mt(o)) return !1;
          var a = tn(o);
          return a == Ve || a == ut || a == le || a == be;
        }
        function Ey(o) {
          return typeof o == 'number' && o == Be(o);
        }
        function gs(o) {
          return typeof o == 'number' && o > -1 && o % 1 == 0 && o <= ne;
        }
        function mt(o) {
          var a = typeof o;
          return o != null && (a == 'object' || a == 'function');
        }
        function wt(o) {
          return o != null && typeof o == 'object';
        }
        var _y = Lm ? En(Lm) : cT;
        function uP(o, a) {
          return o === a || yd(o, a, Id(a));
        }
        function lP(o, a, s) {
          return (s = typeof s == 'function' ? s : n), yd(o, a, Id(a), s);
        }
        function sP(o) {
          return xy(o) && o != +o;
        }
        function cP(o) {
          if (XT(o)) throw new Le(u);
          return h0(o);
        }
        function fP(o) {
          return o === null;
        }
        function dP(o) {
          return o == null;
        }
        function xy(o) {
          return typeof o == 'number' || (wt(o) && tn(o) == te);
        }
        function nu(o) {
          if (!wt(o) || tn(o) != G) return !1;
          var a = jl(o);
          if (a === null) return !0;
          var s = rt.call(a, 'constructor') && a.constructor;
          return typeof s == 'function' && s instanceof s && Fl.call(s) == lN;
        }
        var Vd = Hm ? En(Hm) : fT;
        function pP(o) {
          return Ey(o) && o >= -ne && o <= ne;
        }
        var by = Bm ? En(Bm) : dT;
        function ms(o) {
          return typeof o == 'string' || (!He(o) && wt(o) && tn(o) == nt);
        }
        function xn(o) {
          return typeof o == 'symbol' || (wt(o) && tn(o) == xt);
        }
        var Vi = Fm ? En(Fm) : pT;
        function hP(o) {
          return o === n;
        }
        function vP(o) {
          return wt(o) && Vt(o) == $e;
        }
        function gP(o) {
          return wt(o) && tn(o) == ht;
        }
        var mP = us(Sd),
          yP = us(function (o, a) {
            return o <= a;
          });
        function Cy(o) {
          if (!o) return [];
          if (cn(o)) return ms(o) ? or(o) : sn(o);
          if (ja && o[ja]) return ZO(o[ja]());
          var a = Vt(o),
            s = a == J ? ud : a == Fe ? Ll : Xi;
          return s(o);
        }
        function Gr(o) {
          if (!o) return o === 0 ? o : 0;
          if (((o = Wn(o)), o === X || o === -X)) {
            var a = o < 0 ? -1 : 1;
            return a * ce;
          }
          return o === o ? o : 0;
        }
        function Be(o) {
          var a = Gr(o),
            s = a % 1;
          return a === a ? (s ? a - s : a) : 0;
        }
        function Oy(o) {
          return o ? ti(Be(o), 0, j) : 0;
        }
        function Wn(o) {
          if (typeof o == 'number') return o;
          if (xn(o)) return ue;
          if (mt(o)) {
            var a = typeof o.valueOf == 'function' ? o.valueOf() : o;
            o = mt(a) ? a + '' : a;
          }
          if (typeof o != 'string') return o === 0 ? o : +o;
          o = Ym(o);
          var s = Al.test(o);
          return s || jf.test(o) ? kO(o.slice(2), s ? 2 : 8) : zf.test(o) ? ue : +o;
        }
        function Ny(o) {
          return Er(o, fn(o));
        }
        function wP(o) {
          return o ? ti(Be(o), -ne, ne) : o === 0 ? o : 0;
        }
        function tt(o) {
          return o == null ? '' : _n(o);
        }
        var SP = ji(function (o, a) {
            if (eu(a) || cn(a)) {
              Er(a, Rt(a), o);
              return;
            }
            for (var s in a) rt.call(a, s) && Ga(o, s, a[s]);
          }),
          Ty = ji(function (o, a) {
            Er(a, fn(a), o);
          }),
          ys = ji(function (o, a, s, d) {
            Er(a, fn(a), o, d);
          }),
          EP = ji(function (o, a, s, d) {
            Er(a, Rt(a), o, d);
          }),
          _P = Yr(pd);
        function xP(o, a) {
          var s = Ui(o);
          return a == null ? s : a0(s, a);
        }
        var bP = je(function (o, a) {
            o = lt(o);
            var s = -1,
              d = a.length,
              y = d > 2 ? a[2] : n;
            for (y && nn(a[0], a[1], y) && (d = 1); ++s < d; )
              for (var O = a[s], A = fn(O), I = -1, z = A.length; ++I < z; ) {
                var re = A[I],
                  oe = o[re];
                (oe === n || (ar(oe, Fi[re]) && !rt.call(o, re))) && (o[re] = O[re]);
              }
            return o;
          }),
          CP = je(function (o) {
            return o.push(n, Y0), Sn(My, n, o);
          });
        function OP(o, a) {
          return zm(o, Ne(a, 3), Sr);
        }
        function NP(o, a) {
          return zm(o, Ne(a, 3), vd);
        }
        function TP(o, a) {
          return o == null ? o : hd(o, Ne(a, 3), fn);
        }
        function MP(o, a) {
          return o == null ? o : f0(o, Ne(a, 3), fn);
        }
        function PP(o, a) {
          return o && Sr(o, Ne(a, 3));
        }
        function AP(o, a) {
          return o && vd(o, Ne(a, 3));
        }
        function DP(o) {
          return o == null ? [] : Jl(o, Rt(o));
        }
        function kP(o) {
          return o == null ? [] : Jl(o, fn(o));
        }
        function Xd(o, a, s) {
          var d = o == null ? n : ni(o, a);
          return d === n ? s : d;
        }
        function RP(o, a) {
          return o != null && G0(o, a, rT);
        }
        function Gd(o, a) {
          return o != null && G0(o, a, oT);
        }
        var IP = $0(function (o, a, s) {
            a != null && typeof a.toString != 'function' && (a = $l.call(a)), (o[a] = s);
          }, Zd(dn)),
          LP = $0(function (o, a, s) {
            a != null && typeof a.toString != 'function' && (a = $l.call(a)),
              rt.call(o, a) ? o[a].push(s) : (o[a] = [s]);
          }, Ne),
          HP = je(Za);
        function Rt(o) {
          return cn(o) ? o0(o) : wd(o);
        }
        function fn(o) {
          return cn(o) ? o0(o, !0) : hT(o);
        }
        function BP(o, a) {
          var s = {};
          return (
            (a = Ne(a, 3)),
            Sr(o, function (d, y, O) {
              jr(s, a(d, y, O), d);
            }),
            s
          );
        }
        function FP(o, a) {
          var s = {};
          return (
            (a = Ne(a, 3)),
            Sr(o, function (d, y, O) {
              jr(s, y, a(d, y, O));
            }),
            s
          );
        }
        var $P = ji(function (o, a, s) {
            es(o, a, s);
          }),
          My = ji(function (o, a, s, d) {
            es(o, a, s, d);
          }),
          zP = Yr(function (o, a) {
            var s = {};
            if (o == null) return s;
            var d = !1;
            (a = vt(a, function (O) {
              return (O = yo(O, o)), d || (d = O.length > 1), O;
            })),
              Er(o, kd(o), s),
              d && (s = zn(s, x | S | b, IT));
            for (var y = a.length; y--; ) Cd(s, a[y]);
            return s;
          });
        function UP(o, a) {
          return Py(o, vs(Ne(a)));
        }
        var jP = Yr(function (o, a) {
          return o == null ? {} : gT(o, a);
        });
        function Py(o, a) {
          if (o == null) return {};
          var s = vt(kd(o), function (d) {
            return [d];
          });
          return (
            (a = Ne(a)),
            E0(o, s, function (d, y) {
              return a(d, y[0]);
            })
          );
        }
        function WP(o, a, s) {
          a = yo(a, o);
          var d = -1,
            y = a.length;
          for (y || ((y = 1), (o = n)); ++d < y; ) {
            var O = o == null ? n : o[_r(a[d])];
            O === n && ((d = y), (O = s)), (o = Xr(O) ? O.call(o) : O);
          }
          return o;
        }
        function YP(o, a, s) {
          return o == null ? o : Qa(o, a, s);
        }
        function VP(o, a, s, d) {
          return (d = typeof d == 'function' ? d : n), o == null ? o : Qa(o, a, s, d);
        }
        var Ay = j0(Rt),
          Dy = j0(fn);
        function XP(o, a, s) {
          var d = He(o),
            y = d || So(o) || Vi(o);
          if (((a = Ne(a, 4)), s == null)) {
            var O = o && o.constructor;
            y ? (s = d ? new O() : []) : mt(o) ? (s = Xr(O) ? Ui(jl(o)) : {}) : (s = {});
          }
          return (
            (y ? Bn : Sr)(o, function (A, I, z) {
              return a(s, A, I, z);
            }),
            s
          );
        }
        function GP(o, a) {
          return o == null ? !0 : Cd(o, a);
        }
        function qP(o, a, s) {
          return o == null ? o : O0(o, a, Td(s));
        }
        function ZP(o, a, s, d) {
          return (d = typeof d == 'function' ? d : n), o == null ? o : O0(o, a, Td(s), d);
        }
        function Xi(o) {
          return o == null ? [] : ad(o, Rt(o));
        }
        function KP(o) {
          return o == null ? [] : ad(o, fn(o));
        }
        function QP(o, a, s) {
          return (
            s === n && ((s = a), (a = n)),
            s !== n && ((s = Wn(s)), (s = s === s ? s : 0)),
            a !== n && ((a = Wn(a)), (a = a === a ? a : 0)),
            ti(Wn(o), a, s)
          );
        }
        function JP(o, a, s) {
          return (a = Gr(a)), s === n ? ((s = a), (a = 0)) : (s = Gr(s)), (o = Wn(o)), iT(o, a, s);
        }
        function eA(o, a, s) {
          if (
            (s && typeof s != 'boolean' && nn(o, a, s) && (a = s = n),
            s === n &&
              (typeof a == 'boolean'
                ? ((s = a), (a = n))
                : typeof o == 'boolean' && ((s = o), (o = n))),
            o === n && a === n
              ? ((o = 0), (a = 1))
              : ((o = Gr(o)), a === n ? ((a = o), (o = 0)) : (a = Gr(a))),
            o > a)
          ) {
            var d = o;
            (o = a), (a = d);
          }
          if (s || o % 1 || a % 1) {
            var y = n0();
            return Yt(o + y * (a - o + DO('1e-' + ((y + '').length - 1))), a);
          }
          return _d(o, a);
        }
        var tA = Wi(function (o, a, s) {
          return (a = a.toLowerCase()), o + (s ? ky(a) : a);
        });
        function ky(o) {
          return qd(tt(o).toLowerCase());
        }
        function Ry(o) {
          return (o = tt(o)), o && o.replace(Yf, YO).replace(_O, '');
        }
        function nA(o, a, s) {
          (o = tt(o)), (a = _n(a));
          var d = o.length;
          s = s === n ? d : ti(Be(s), 0, d);
          var y = s;
          return (s -= a.length), s >= 0 && o.slice(s, y) == a;
        }
        function rA(o) {
          return (o = tt(o)), o && yr.test(o) ? o.replace(mr, VO) : o;
        }
        function oA(o) {
          return (o = tt(o)), o && Pi.test(o) ? o.replace(so, '\\$&') : o;
        }
        var iA = Wi(function (o, a, s) {
            return o + (s ? '-' : '') + a.toLowerCase();
          }),
          aA = Wi(function (o, a, s) {
            return o + (s ? ' ' : '') + a.toLowerCase();
          }),
          uA = H0('toLowerCase');
        function lA(o, a, s) {
          (o = tt(o)), (a = Be(a));
          var d = a ? Hi(o) : 0;
          if (!a || d >= a) return o;
          var y = (a - d) / 2;
          return as(Xl(y), s) + o + as(Vl(y), s);
        }
        function sA(o, a, s) {
          (o = tt(o)), (a = Be(a));
          var d = a ? Hi(o) : 0;
          return a && d < a ? o + as(a - d, s) : o;
        }
        function cA(o, a, s) {
          (o = tt(o)), (a = Be(a));
          var d = a ? Hi(o) : 0;
          return a && d < a ? as(a - d, s) + o : o;
        }
        function fA(o, a, s) {
          return s || a == null ? (a = 0) : a && (a = +a), yN(tt(o).replace(co, ''), a || 0);
        }
        function dA(o, a, s) {
          return (s ? nn(o, a, s) : a === n) ? (a = 1) : (a = Be(a)), xd(tt(o), a);
        }
        function pA() {
          var o = arguments,
            a = tt(o[0]);
          return o.length < 3 ? a : a.replace(o[1], o[2]);
        }
        var hA = Wi(function (o, a, s) {
          return o + (s ? '_' : '') + a.toLowerCase();
        });
        function vA(o, a, s) {
          return (
            s && typeof s != 'number' && nn(o, a, s) && (a = s = n),
            (s = s === n ? j : s >>> 0),
            s
              ? ((o = tt(o)),
                o && (typeof a == 'string' || (a != null && !Vd(a))) && ((a = _n(a)), !a && Li(o))
                  ? wo(or(o), 0, s)
                  : o.split(a, s))
              : []
          );
        }
        var gA = Wi(function (o, a, s) {
          return o + (s ? ' ' : '') + qd(a);
        });
        function mA(o, a, s) {
          return (
            (o = tt(o)),
            (s = s == null ? 0 : ti(Be(s), 0, o.length)),
            (a = _n(a)),
            o.slice(s, s + a.length) == a
          );
        }
        function yA(o, a, s) {
          var d = C.templateSettings;
          s && nn(o, a, s) && (a = n), (o = tt(o)), (a = ys({}, a, d, W0));
          var y = ys({}, a.imports, d.imports, W0),
            O = Rt(y),
            A = ad(y, O),
            I,
            z,
            re = 0,
            oe = a.interpolate || ki,
            se = "__p += '",
            ge = ld(
              (a.escape || ki).source +
                '|' +
                oe.source +
                '|' +
                (oe === lo ? $f : ki).source +
                '|' +
                (a.evaluate || ki).source +
                '|$',
              'g',
            ),
            _e =
              '//# sourceURL=' +
              (rt.call(a, 'sourceURL')
                ? (a.sourceURL + '').replace(/\s/g, ' ')
                : 'lodash.templateSources[' + ++NO + ']') +
              `
`;
          o.replace(ge, function (Me, Ye, qe, bn, rn, Cn) {
            return (
              qe || (qe = bn),
              (se += o.slice(re, Cn).replace(oO, XO)),
              Ye &&
                ((I = !0),
                (se +=
                  `' +
__e(` +
                  Ye +
                  `) +
'`)),
              rn &&
                ((z = !0),
                (se +=
                  `';
` +
                  rn +
                  `;
__p += '`)),
              qe &&
                (se +=
                  `' +
((__t = (` +
                  qe +
                  `)) == null ? '' : __t) +
'`),
              (re = Cn + Me.length),
              Me
            );
          }),
            (se += `';
`);
          var Te = rt.call(a, 'variable') && a.variable;
          if (!Te)
            se =
              `with (obj) {
` +
              se +
              `
}
`;
          else if (Ff.test(Te)) throw new Le(c);
          (se = (z ? se.replace(Ue, '') : se).replace(Ct, '$1').replace(Pt, '$1;')),
            (se =
              'function(' +
              (Te || 'obj') +
              `) {
` +
              (Te
                ? ''
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (I ? ', __e = _.escape' : '') +
              (z
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              se +
              `return __p
}`);
          var ze = Ly(function () {
            return et(O, _e + 'return ' + se).apply(n, A);
          });
          if (((ze.source = se), Yd(ze))) throw ze;
          return ze;
        }
        function wA(o) {
          return tt(o).toLowerCase();
        }
        function SA(o) {
          return tt(o).toUpperCase();
        }
        function EA(o, a, s) {
          if (((o = tt(o)), o && (s || a === n))) return Ym(o);
          if (!o || !(a = _n(a))) return o;
          var d = or(o),
            y = or(a),
            O = Vm(d, y),
            A = Xm(d, y) + 1;
          return wo(d, O, A).join('');
        }
        function _A(o, a, s) {
          if (((o = tt(o)), o && (s || a === n))) return o.slice(0, qm(o) + 1);
          if (!o || !(a = _n(a))) return o;
          var d = or(o),
            y = Xm(d, or(a)) + 1;
          return wo(d, 0, y).join('');
        }
        function xA(o, a, s) {
          if (((o = tt(o)), o && (s || a === n))) return o.replace(co, '');
          if (!o || !(a = _n(a))) return o;
          var d = or(o),
            y = Vm(d, or(a));
          return wo(d, y).join('');
        }
        function bA(o, a) {
          var s = V,
            d = fe;
          if (mt(a)) {
            var y = 'separator' in a ? a.separator : y;
            (s = 'length' in a ? Be(a.length) : s), (d = 'omission' in a ? _n(a.omission) : d);
          }
          o = tt(o);
          var O = o.length;
          if (Li(o)) {
            var A = or(o);
            O = A.length;
          }
          if (s >= O) return o;
          var I = s - Hi(d);
          if (I < 1) return d;
          var z = A ? wo(A, 0, I).join('') : o.slice(0, I);
          if (y === n) return z + d;
          if ((A && (I += z.length - I), Vd(y))) {
            if (o.slice(I).search(y)) {
              var re,
                oe = z;
              for (
                y.global || (y = ld(y.source, tt(za.exec(y)) + 'g')), y.lastIndex = 0;
                (re = y.exec(oe));

              )
                var se = re.index;
              z = z.slice(0, se === n ? I : se);
            }
          } else if (o.indexOf(_n(y), I) != I) {
            var ge = z.lastIndexOf(y);
            ge > -1 && (z = z.slice(0, ge));
          }
          return z + d;
        }
        function CA(o) {
          return (o = tt(o)), o && yn.test(o) ? o.replace(mn, eN) : o;
        }
        var OA = Wi(function (o, a, s) {
            return o + (s ? ' ' : '') + a.toUpperCase();
          }),
          qd = H0('toUpperCase');
        function Iy(o, a, s) {
          return (o = tt(o)), (a = s ? n : a), a === n ? (qO(o) ? rN(o) : $O(o)) : o.match(a) || [];
        }
        var Ly = je(function (o, a) {
            try {
              return Sn(o, n, a);
            } catch (s) {
              return Yd(s) ? s : new Le(s);
            }
          }),
          NA = Yr(function (o, a) {
            return (
              Bn(a, function (s) {
                (s = _r(s)), jr(o, s, jd(o[s], o));
              }),
              o
            );
          });
        function TA(o) {
          var a = o == null ? 0 : o.length,
            s = Ne();
          return (
            (o = a
              ? vt(o, function (d) {
                  if (typeof d[1] != 'function') throw new Fn(l);
                  return [s(d[0]), d[1]];
                })
              : []),
            je(function (d) {
              for (var y = -1; ++y < a; ) {
                var O = o[y];
                if (Sn(O[0], this, d)) return Sn(O[1], this, d);
              }
            })
          );
        }
        function MA(o) {
          return eT(zn(o, x));
        }
        function Zd(o) {
          return function () {
            return o;
          };
        }
        function PA(o, a) {
          return o == null || o !== o ? a : o;
        }
        var AA = F0(),
          DA = F0(!0);
        function dn(o) {
          return o;
        }
        function Kd(o) {
          return v0(typeof o == 'function' ? o : zn(o, x));
        }
        function kA(o) {
          return m0(zn(o, x));
        }
        function RA(o, a) {
          return y0(o, zn(a, x));
        }
        var IA = je(function (o, a) {
            return function (s) {
              return Za(s, o, a);
            };
          }),
          LA = je(function (o, a) {
            return function (s) {
              return Za(o, s, a);
            };
          });
        function Qd(o, a, s) {
          var d = Rt(a),
            y = Jl(a, d);
          s == null &&
            !(mt(a) && (y.length || !d.length)) &&
            ((s = a), (a = o), (o = this), (y = Jl(a, Rt(a))));
          var O = !(mt(s) && 'chain' in s) || !!s.chain,
            A = Xr(o);
          return (
            Bn(y, function (I) {
              var z = a[I];
              (o[I] = z),
                A &&
                  (o.prototype[I] = function () {
                    var re = this.__chain__;
                    if (O || re) {
                      var oe = o(this.__wrapped__),
                        se = (oe.__actions__ = sn(this.__actions__));
                      return (
                        se.push({ func: z, args: arguments, thisArg: o }), (oe.__chain__ = re), oe
                      );
                    }
                    return z.apply(o, po([this.value()], arguments));
                  });
            }),
            o
          );
        }
        function HA() {
          return Ft._ === this && (Ft._ = sN), this;
        }
        function Jd() {}
        function BA(o) {
          return (
            (o = Be(o)),
            je(function (a) {
              return w0(a, o);
            })
          );
        }
        var FA = Pd(vt),
          $A = Pd($m),
          zA = Pd(td);
        function Hy(o) {
          return Hd(o) ? nd(_r(o)) : mT(o);
        }
        function UA(o) {
          return function (a) {
            return o == null ? n : ni(o, a);
          };
        }
        var jA = z0(),
          WA = z0(!0);
        function ep() {
          return [];
        }
        function tp() {
          return !1;
        }
        function YA() {
          return {};
        }
        function VA() {
          return '';
        }
        function XA() {
          return !0;
        }
        function GA(o, a) {
          if (((o = Be(o)), o < 1 || o > ne)) return [];
          var s = j,
            d = Yt(o, j);
          (a = Ne(a)), (o -= j);
          for (var y = id(d, a); ++s < o; ) a(s);
          return y;
        }
        function qA(o) {
          return He(o) ? vt(o, _r) : xn(o) ? [o] : sn(ry(tt(o)));
        }
        function ZA(o) {
          var a = ++uN;
          return tt(o) + a;
        }
        var KA = is(function (o, a) {
            return o + a;
          }, 0),
          QA = Ad('ceil'),
          JA = is(function (o, a) {
            return o / a;
          }, 1),
          e3 = Ad('floor');
        function t3(o) {
          return o && o.length ? Ql(o, dn, gd) : n;
        }
        function n3(o, a) {
          return o && o.length ? Ql(o, Ne(a, 2), gd) : n;
        }
        function r3(o) {
          return jm(o, dn);
        }
        function o3(o, a) {
          return jm(o, Ne(a, 2));
        }
        function i3(o) {
          return o && o.length ? Ql(o, dn, Sd) : n;
        }
        function a3(o, a) {
          return o && o.length ? Ql(o, Ne(a, 2), Sd) : n;
        }
        var u3 = is(function (o, a) {
            return o * a;
          }, 1),
          l3 = Ad('round'),
          s3 = is(function (o, a) {
            return o - a;
          }, 0);
        function c3(o) {
          return o && o.length ? od(o, dn) : 0;
        }
        function f3(o, a) {
          return o && o.length ? od(o, Ne(a, 2)) : 0;
        }
        return (
          (C.after = k2),
          (C.ary = hy),
          (C.assign = SP),
          (C.assignIn = Ty),
          (C.assignInWith = ys),
          (C.assignWith = EP),
          (C.at = _P),
          (C.before = vy),
          (C.bind = jd),
          (C.bindAll = NA),
          (C.bindKey = gy),
          (C.castArray = Y2),
          (C.chain = fy),
          (C.chunk = eM),
          (C.compact = tM),
          (C.concat = nM),
          (C.cond = TA),
          (C.conforms = MA),
          (C.constant = Zd),
          (C.countBy = c2),
          (C.create = xP),
          (C.curry = my),
          (C.curryRight = yy),
          (C.debounce = wy),
          (C.defaults = bP),
          (C.defaultsDeep = CP),
          (C.defer = R2),
          (C.delay = I2),
          (C.difference = rM),
          (C.differenceBy = oM),
          (C.differenceWith = iM),
          (C.drop = aM),
          (C.dropRight = uM),
          (C.dropRightWhile = lM),
          (C.dropWhile = sM),
          (C.fill = cM),
          (C.filter = d2),
          (C.flatMap = v2),
          (C.flatMapDeep = g2),
          (C.flatMapDepth = m2),
          (C.flatten = uy),
          (C.flattenDeep = fM),
          (C.flattenDepth = dM),
          (C.flip = L2),
          (C.flow = AA),
          (C.flowRight = DA),
          (C.fromPairs = pM),
          (C.functions = DP),
          (C.functionsIn = kP),
          (C.groupBy = y2),
          (C.initial = vM),
          (C.intersection = gM),
          (C.intersectionBy = mM),
          (C.intersectionWith = yM),
          (C.invert = IP),
          (C.invertBy = LP),
          (C.invokeMap = S2),
          (C.iteratee = Kd),
          (C.keyBy = E2),
          (C.keys = Rt),
          (C.keysIn = fn),
          (C.map = ds),
          (C.mapKeys = BP),
          (C.mapValues = FP),
          (C.matches = kA),
          (C.matchesProperty = RA),
          (C.memoize = hs),
          (C.merge = $P),
          (C.mergeWith = My),
          (C.method = IA),
          (C.methodOf = LA),
          (C.mixin = Qd),
          (C.negate = vs),
          (C.nthArg = BA),
          (C.omit = zP),
          (C.omitBy = UP),
          (C.once = H2),
          (C.orderBy = _2),
          (C.over = FA),
          (C.overArgs = B2),
          (C.overEvery = $A),
          (C.overSome = zA),
          (C.partial = Wd),
          (C.partialRight = Sy),
          (C.partition = x2),
          (C.pick = jP),
          (C.pickBy = Py),
          (C.property = Hy),
          (C.propertyOf = UA),
          (C.pull = _M),
          (C.pullAll = sy),
          (C.pullAllBy = xM),
          (C.pullAllWith = bM),
          (C.pullAt = CM),
          (C.range = jA),
          (C.rangeRight = WA),
          (C.rearg = F2),
          (C.reject = O2),
          (C.remove = OM),
          (C.rest = $2),
          (C.reverse = zd),
          (C.sampleSize = T2),
          (C.set = YP),
          (C.setWith = VP),
          (C.shuffle = M2),
          (C.slice = NM),
          (C.sortBy = D2),
          (C.sortedUniq = RM),
          (C.sortedUniqBy = IM),
          (C.split = vA),
          (C.spread = z2),
          (C.tail = LM),
          (C.take = HM),
          (C.takeRight = BM),
          (C.takeRightWhile = FM),
          (C.takeWhile = $M),
          (C.tap = t2),
          (C.throttle = U2),
          (C.thru = fs),
          (C.toArray = Cy),
          (C.toPairs = Ay),
          (C.toPairsIn = Dy),
          (C.toPath = qA),
          (C.toPlainObject = Ny),
          (C.transform = XP),
          (C.unary = j2),
          (C.union = zM),
          (C.unionBy = UM),
          (C.unionWith = jM),
          (C.uniq = WM),
          (C.uniqBy = YM),
          (C.uniqWith = VM),
          (C.unset = GP),
          (C.unzip = Ud),
          (C.unzipWith = cy),
          (C.update = qP),
          (C.updateWith = ZP),
          (C.values = Xi),
          (C.valuesIn = KP),
          (C.without = XM),
          (C.words = Iy),
          (C.wrap = W2),
          (C.xor = GM),
          (C.xorBy = qM),
          (C.xorWith = ZM),
          (C.zip = KM),
          (C.zipObject = QM),
          (C.zipObjectDeep = JM),
          (C.zipWith = e2),
          (C.entries = Ay),
          (C.entriesIn = Dy),
          (C.extend = Ty),
          (C.extendWith = ys),
          Qd(C, C),
          (C.add = KA),
          (C.attempt = Ly),
          (C.camelCase = tA),
          (C.capitalize = ky),
          (C.ceil = QA),
          (C.clamp = QP),
          (C.clone = V2),
          (C.cloneDeep = G2),
          (C.cloneDeepWith = q2),
          (C.cloneWith = X2),
          (C.conformsTo = Z2),
          (C.deburr = Ry),
          (C.defaultTo = PA),
          (C.divide = JA),
          (C.endsWith = nA),
          (C.eq = ar),
          (C.escape = rA),
          (C.escapeRegExp = oA),
          (C.every = f2),
          (C.find = p2),
          (C.findIndex = iy),
          (C.findKey = OP),
          (C.findLast = h2),
          (C.findLastIndex = ay),
          (C.findLastKey = NP),
          (C.floor = e3),
          (C.forEach = dy),
          (C.forEachRight = py),
          (C.forIn = TP),
          (C.forInRight = MP),
          (C.forOwn = PP),
          (C.forOwnRight = AP),
          (C.get = Xd),
          (C.gt = K2),
          (C.gte = Q2),
          (C.has = RP),
          (C.hasIn = Gd),
          (C.head = ly),
          (C.identity = dn),
          (C.includes = w2),
          (C.indexOf = hM),
          (C.inRange = JP),
          (C.invoke = HP),
          (C.isArguments = ii),
          (C.isArray = He),
          (C.isArrayBuffer = J2),
          (C.isArrayLike = cn),
          (C.isArrayLikeObject = Ot),
          (C.isBoolean = eP),
          (C.isBuffer = So),
          (C.isDate = tP),
          (C.isElement = nP),
          (C.isEmpty = rP),
          (C.isEqual = oP),
          (C.isEqualWith = iP),
          (C.isError = Yd),
          (C.isFinite = aP),
          (C.isFunction = Xr),
          (C.isInteger = Ey),
          (C.isLength = gs),
          (C.isMap = _y),
          (C.isMatch = uP),
          (C.isMatchWith = lP),
          (C.isNaN = sP),
          (C.isNative = cP),
          (C.isNil = dP),
          (C.isNull = fP),
          (C.isNumber = xy),
          (C.isObject = mt),
          (C.isObjectLike = wt),
          (C.isPlainObject = nu),
          (C.isRegExp = Vd),
          (C.isSafeInteger = pP),
          (C.isSet = by),
          (C.isString = ms),
          (C.isSymbol = xn),
          (C.isTypedArray = Vi),
          (C.isUndefined = hP),
          (C.isWeakMap = vP),
          (C.isWeakSet = gP),
          (C.join = wM),
          (C.kebabCase = iA),
          (C.last = jn),
          (C.lastIndexOf = SM),
          (C.lowerCase = aA),
          (C.lowerFirst = uA),
          (C.lt = mP),
          (C.lte = yP),
          (C.max = t3),
          (C.maxBy = n3),
          (C.mean = r3),
          (C.meanBy = o3),
          (C.min = i3),
          (C.minBy = a3),
          (C.stubArray = ep),
          (C.stubFalse = tp),
          (C.stubObject = YA),
          (C.stubString = VA),
          (C.stubTrue = XA),
          (C.multiply = u3),
          (C.nth = EM),
          (C.noConflict = HA),
          (C.noop = Jd),
          (C.now = ps),
          (C.pad = lA),
          (C.padEnd = sA),
          (C.padStart = cA),
          (C.parseInt = fA),
          (C.random = eA),
          (C.reduce = b2),
          (C.reduceRight = C2),
          (C.repeat = dA),
          (C.replace = pA),
          (C.result = WP),
          (C.round = l3),
          (C.runInContext = $),
          (C.sample = N2),
          (C.size = P2),
          (C.snakeCase = hA),
          (C.some = A2),
          (C.sortedIndex = TM),
          (C.sortedIndexBy = MM),
          (C.sortedIndexOf = PM),
          (C.sortedLastIndex = AM),
          (C.sortedLastIndexBy = DM),
          (C.sortedLastIndexOf = kM),
          (C.startCase = gA),
          (C.startsWith = mA),
          (C.subtract = s3),
          (C.sum = c3),
          (C.sumBy = f3),
          (C.template = yA),
          (C.times = GA),
          (C.toFinite = Gr),
          (C.toInteger = Be),
          (C.toLength = Oy),
          (C.toLower = wA),
          (C.toNumber = Wn),
          (C.toSafeInteger = wP),
          (C.toString = tt),
          (C.toUpper = SA),
          (C.trim = EA),
          (C.trimEnd = _A),
          (C.trimStart = xA),
          (C.truncate = bA),
          (C.unescape = CA),
          (C.uniqueId = ZA),
          (C.upperCase = OA),
          (C.upperFirst = qd),
          (C.each = dy),
          (C.eachRight = py),
          (C.first = ly),
          Qd(
            C,
            (function () {
              var o = {};
              return (
                Sr(C, function (a, s) {
                  rt.call(C.prototype, s) || (o[s] = a);
                }),
                o
              );
            })(),
            { chain: !1 },
          ),
          (C.VERSION = r),
          Bn(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (o) {
            C[o].placeholder = C;
          }),
          Bn(['drop', 'take'], function (o, a) {
            (Ge.prototype[o] = function (s) {
              s = s === n ? 1 : Dt(Be(s), 0);
              var d = this.__filtered__ && !a ? new Ge(this) : this.clone();
              return (
                d.__filtered__
                  ? (d.__takeCount__ = Yt(s, d.__takeCount__))
                  : d.__views__.push({ size: Yt(s, j), type: o + (d.__dir__ < 0 ? 'Right' : '') }),
                d
              );
            }),
              (Ge.prototype[o + 'Right'] = function (s) {
                return this.reverse()[o](s).reverse();
              });
          }),
          Bn(['filter', 'map', 'takeWhile'], function (o, a) {
            var s = a + 1,
              d = s == R || s == W;
            Ge.prototype[o] = function (y) {
              var O = this.clone();
              return (
                O.__iteratees__.push({ iteratee: Ne(y, 3), type: s }),
                (O.__filtered__ = O.__filtered__ || d),
                O
              );
            };
          }),
          Bn(['head', 'last'], function (o, a) {
            var s = 'take' + (a ? 'Right' : '');
            Ge.prototype[o] = function () {
              return this[s](1).value()[0];
            };
          }),
          Bn(['initial', 'tail'], function (o, a) {
            var s = 'drop' + (a ? '' : 'Right');
            Ge.prototype[o] = function () {
              return this.__filtered__ ? new Ge(this) : this[s](1);
            };
          }),
          (Ge.prototype.compact = function () {
            return this.filter(dn);
          }),
          (Ge.prototype.find = function (o) {
            return this.filter(o).head();
          }),
          (Ge.prototype.findLast = function (o) {
            return this.reverse().find(o);
          }),
          (Ge.prototype.invokeMap = je(function (o, a) {
            return typeof o == 'function'
              ? new Ge(this)
              : this.map(function (s) {
                  return Za(s, o, a);
                });
          })),
          (Ge.prototype.reject = function (o) {
            return this.filter(vs(Ne(o)));
          }),
          (Ge.prototype.slice = function (o, a) {
            o = Be(o);
            var s = this;
            return s.__filtered__ && (o > 0 || a < 0)
              ? new Ge(s)
              : (o < 0 ? (s = s.takeRight(-o)) : o && (s = s.drop(o)),
                a !== n && ((a = Be(a)), (s = a < 0 ? s.dropRight(-a) : s.take(a - o))),
                s);
          }),
          (Ge.prototype.takeRightWhile = function (o) {
            return this.reverse().takeWhile(o).reverse();
          }),
          (Ge.prototype.toArray = function () {
            return this.take(j);
          }),
          Sr(Ge.prototype, function (o, a) {
            var s = /^(?:filter|find|map|reject)|While$/.test(a),
              d = /^(?:head|last)$/.test(a),
              y = C[d ? 'take' + (a == 'last' ? 'Right' : '') : a],
              O = d || /^find/.test(a);
            !y ||
              (C.prototype[a] = function () {
                var A = this.__wrapped__,
                  I = d ? [1] : arguments,
                  z = A instanceof Ge,
                  re = I[0],
                  oe = z || He(A),
                  se = function (Ye) {
                    var qe = y.apply(C, po([Ye], I));
                    return d && ge ? qe[0] : qe;
                  };
                oe && s && typeof re == 'function' && re.length != 1 && (z = oe = !1);
                var ge = this.__chain__,
                  _e = !!this.__actions__.length,
                  Te = O && !ge,
                  ze = z && !_e;
                if (!O && oe) {
                  A = ze ? A : new Ge(this);
                  var Me = o.apply(A, I);
                  return Me.__actions__.push({ func: fs, args: [se], thisArg: n }), new $n(Me, ge);
                }
                return Te && ze
                  ? o.apply(this, I)
                  : ((Me = this.thru(se)), Te ? (d ? Me.value()[0] : Me.value()) : Me);
              });
          }),
          Bn(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (o) {
            var a = Hl[o],
              s = /^(?:push|sort|unshift)$/.test(o) ? 'tap' : 'thru',
              d = /^(?:pop|shift)$/.test(o);
            C.prototype[o] = function () {
              var y = arguments;
              if (d && !this.__chain__) {
                var O = this.value();
                return a.apply(He(O) ? O : [], y);
              }
              return this[s](function (A) {
                return a.apply(He(A) ? A : [], y);
              });
            };
          }),
          Sr(Ge.prototype, function (o, a) {
            var s = C[a];
            if (s) {
              var d = s.name + '';
              rt.call(zi, d) || (zi[d] = []), zi[d].push({ name: a, func: s });
            }
          }),
          (zi[os(n, v).name] = [{ name: 'wrapper', func: n }]),
          (Ge.prototype.clone = CN),
          (Ge.prototype.reverse = ON),
          (Ge.prototype.value = NN),
          (C.prototype.at = n2),
          (C.prototype.chain = r2),
          (C.prototype.commit = o2),
          (C.prototype.next = i2),
          (C.prototype.plant = u2),
          (C.prototype.reverse = l2),
          (C.prototype.toJSON = C.prototype.valueOf = C.prototype.value = s2),
          (C.prototype.first = C.prototype.head),
          ja && (C.prototype[ja] = a2),
          C
        );
      },
      Bi = oN();
    Ko ? (((Ko.exports = Bi)._ = Bi), (Kf._ = Bi)) : (Ft._ = Bi);
  }.call(ru));
})(mv, mv.exports);
var cF = mv.exports;
cF.constant(1);
function xi(e) {
  return Oa(e);
}
function cc(e, t) {
  return UR(e, t);
}
function nm(e) {
  return xi(e) && e.type === 'course';
}
function fF(e) {
  return xi(e) && ['or', 'and'].includes(e.type);
}
const hC = { x: 0, y: 0 },
  yv = String.raw`(?:[A-Z&]+ )+\d{3}`,
  dF = new RegExp(yv, 'g');
function vC(e) {
  return e.match(dF);
}
function pF(e, t = hC) {
  return {
    id: `${e.toUpperCase()}-${lF()}`,
    type: e,
    position: t,
    data: { nodeStatus: 'completed', nodeConnected: !1 },
  };
}
function qt(e, t) {
  return `${e} -> ${t}`;
}
function wv(e, t, n = !1, r = '') {
  return {
    id: r || qt(e, t),
    type: 'custom',
    source: e,
    target: t,
    className: 'over-one-away',
    data: { concurrent: n },
  };
}
function gC(e, t, n) {
  const r = n.get(e);
  if (r.depth !== t) {
    t > r.depth && (r.depth = t);
    for (const i of r.outgoingNodes) gC(i, t + 1, n);
  }
}
function Qr(e) {
  const t = new Map();
  function n(i) {
    t.has(i) ||
      t.set(i, {
        depth: -1,
        incomingNodes: [],
        incomingEdges: [],
        outgoingEdges: [],
        outgoingNodes: [],
      });
  }
  for (const i of e) {
    const u = i.id;
    if (xi(i)) n(u);
    else {
      const { source: l, target: c } = i;
      n(l), n(c);
      const f = t.get(l),
        p = t.get(c);
      f.outgoingEdges.push(u),
        f.outgoingNodes.push(c),
        p.incomingEdges.push(u),
        p.incomingNodes.push(l);
    }
  }
  const r = e.filter(i => xi(i) && !t.get(i.id).incomingEdges.length);
  for (const i of r) gC(i.id, 0, t);
  return t;
}
function hF(e, t) {
  return e.sort((n, r) => {
    const i = xi(n) ? t.get(n.id).depth : Number.POSITIVE_INFINITY,
      u = xi(r) ? t.get(r.id).depth : Number.POSITIVE_INFINITY;
    return i - u;
  });
}
function Jr(e) {
  return new Map(e.map((t, n) => [t.id, n]));
}
const Sv = ['completed', 'enrolled', 'ready', 'under-one-away', 'one-away', 'over-one-away'],
  fc = Object.freeze(Object.fromEntries(Sv.map((e, t) => [e, t])));
function Ev(e, t, n, r, i) {
  n[i.get(e)].data.nodeStatus = t;
  for (const u of r.get(e).outgoingEdges) n[i.get(u)] = at(Ze({}, n[i.get(u)]), { className: t });
}
function Kp(e) {
  let t = fc[e.className];
  return t === fc.enrolled && e.data.concurrent && (t = fc.completed), t;
}
function _v(e, t, n, r) {
  const i = t[r.get(e)],
    u = i.data.nodeStatus,
    l = n.get(e).incomingEdges.map(f => t[r.get(f)]);
  let c;
  switch (i.type) {
    case 'course': {
      let f = Math.max(...l.map(Kp));
      (f = f === Number.NEGATIVE_INFINITY ? 0 : f),
        f === 0
          ? (c = u === 'completed' || u === 'enrolled' ? u : 'ready')
          : f === 1
          ? (c = 'under-one-away')
          : f === 2
          ? (c = 'one-away')
          : f > 2 && (c = 'over-one-away');
      break;
    }
    case 'and': {
      let f = Math.max(...l.map(Kp));
      (f = f === Number.NEGATIVE_INFINITY ? 0 : f), (c = Sv[f]);
      break;
    }
    case 'or': {
      let f = Math.min(...l.map(Kp));
      (f = f === Number.POSITIVE_INFINITY ? 0 : f), (c = Sv[f]);
      break;
    }
  }
  Ev(e, c, t, n, r);
}
function Qp(e, t, n) {
  const r = e.slice(),
    i = t.size;
  for (let u = 0; u < i; u++) _v(e[u].id, r, t, n);
  return r;
}
const vF = 250,
  gF = 172,
  kS = vF + gF;
function mF(e, t = []) {
  let n = e.slice(),
    r = Qr(n),
    i = Jr(n);
  const u = t.length ? t : n.filter(l => fF(l));
  for (const l of u) {
    const c = r.get(l.id);
    for (const f of c.incomingNodes)
      for (const p of c.outgoingNodes) {
        const h = qt(f, p);
        i.has(h) || n.push(wv(f, p));
      }
    (n = cc([l], n)), (r = Qr(n)), (i = Jr(n));
  }
  return n;
}
function zs(e, t) {
  return { x: e, y: t };
}
function Jp(e) {
  return e.map(t => t.y).reduce((t, n) => t + n) / e.length;
}
function Us(e) {
  return e.map(t =>
    xi(t)
      ? at(Ze({}, t), { data: at(Ze({}, t.data), { nodeConnected: !1 }) })
      : at(Ze({}, t), { animated: !1 }),
  );
}
function yF(e, t, n, r, i = { prereq: !0, postreq: !0 }, u = !1) {
  const l = e.id,
    c = vC(e.data.prerequisite) || [];
  let f = [];
  i.prereq &&
    (f = [...new Set(c)]
      .filter(h => r.has(h))
      .filter(h => !r.has(qt(h, l)))
      .map(h => t[r.get(h)]));
  const p = [];
  if (i.postreq)
    for (let h = 0; h < n; h++) {
      const x = t[h];
      nm(x) && x.data.prerequisite.includes(l) && !r.has(qt(l, x.id)) && p.push(x);
    }
  for (const h of f) t.push(wv(h.id, l));
  for (const h of p) t.push(wv(l, h.id));
  if (u) {
    const h = f.map(S => S.position),
      x = p.map(S => S.position);
    if (h.length && x.length) {
      const S = h.concat(x),
        b = (Math.max(...h.map(_ => _.x)) + Math.min(...x.map(_ => _.x))) / 2,
        E = Jp(S);
      e.position = { x: b, y: E };
    } else if (h.length && !x.length) {
      const S = Math.max(...h.map(E => E.x)) + kS,
        b = Jp(h);
      e.position = { x: S, y: b };
    } else if (!h.length && x.length) {
      const S = Math.min(...x.map(E => E.x)) - kS,
        b = Jp(x);
      e.position = { x: S, y: b };
    }
  }
  return r.has(l) || t.push(e), t;
}
function wF(e) {
  return t =>
    function (r) {
      e(i => at(Ze({}, i), { [t]: r.target.value }));
    };
}
function SF(e) {
  return `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
}
function Vc(e, t = !1) {
  return t
    ? SF(e)
        .replaceAll('/', '/\u200B')
        .split(new RegExp(`(${yv})`))
    : e.replaceAll('/', '/\u200B').split(new RegExp(`(${yv})`));
}
function Xc(e, t) {
  for (let n = 1; n < e.length; n += 2) e[n] = t(e[n], n);
}
function RS(e) {
  const t = Vc(e, !0);
  return (
    Xc(t, (n, r) =>
      L('span', { className: 'uw-course-id uw-course-id--highlighted', children: n }, r),
    ),
    t
  );
}
const EF = {
  autumn: /\bA(?=W|Sp|S|\b)(?=[WSp]*\.\s*$)/,
  winter: /\bW(?=Sp|S|\b)(?=[Sp]*\.\s*$)/,
  spring: /\bSp(?=S|\b)(?=S?\.\s*$)/,
  summer: /\bS(?=\b\.\s*$)/,
};
function mC(e) {
  for (const [t, n] of Object.entries(EF)) {
    const r = e.length - 1,
      i = e[r],
      u = i.match(n);
    if (u) {
      const [l] = u,
        c = i.split(n);
      c.splice(1, 0, L('span', { className: `offered-${t}`, children: l }, t)),
        e.splice(r, 1, ...c);
    }
  }
}
function _F({ data: e }) {
  const t = Lf(),
    n = RS(e.description),
    r = RS(e.prerequisite);
  let i = null;
  e.offered &&
    ((i = Vc(e.offered, !0)),
    Xc(i, (l, c) => L('span', { className: 'uw-course-id', children: l }, c)),
    mC(i),
    (i = xe('p', { children: ['Offered: ', i] })));
  const u = xe(Tt, {
    children: [
      xe('p', { children: [e.id, ' \u2014 ', e.name, ' (', e.credits, ')'] }),
      L('p', { children: n }),
      L('hr', {}),
      xe('p', { children: ['Prerequisite: ', r] }),
      i,
    ],
  });
  return L(tm, {
    className: 'tippy-box--flow',
    content: u,
    duration: t ? 0 : 100,
    maxWidth: '15rem',
    hideOnClick: !0,
    trigger: 'mouseenter',
    children: xe('div', {
      className: Vn('CourseNode', e.nodeStatus, { connected: e.nodeConnected }),
      children: [
        L(kr, { type: 'target', position: De.Left }),
        L('div', { children: e.id }),
        L(kr, { type: 'source', position: De.Right }),
      ],
    }),
  });
}
function xF({ data: e }) {
  return xe('div', {
    className: Vn('OrNode', e.nodeStatus, { connected: e.nodeConnected }),
    children: [
      L(kr, { type: 'target', position: De.Left }),
      L('div', { children: 'OR' }),
      L(kr, { type: 'source', position: De.Right }),
    ],
  });
}
function bF({ data: e }) {
  return xe('div', {
    className: Vn('AndNode', e.nodeStatus, { connected: e.nodeConnected }),
    children: [
      L(kr, { type: 'target', position: De.Left }),
      L('div', { children: 'AND' }),
      L(kr, { type: 'source', position: De.Right }),
    ],
  });
}
const CF = /^(?:[A-Z&]+ )+\d{3}$/;
function OF({ contextProps: e, sharedOpts: t }) {
  const {
      elements: n,
      nodeData: r,
      elemIndexes: i,
      data: u,
      setSelectionStatuses: l,
      editCourseData: c,
    } = e,
    {
      connectPrereqsOpt: f,
      connectPostreqsOpt: p,
      connectAllOpt: h,
      disconnectPrereqsOpt: x,
      disconnectPostreqsOpt: S,
      disconnectAllOpt: b,
      deleteElemsOpt: E,
    } = t,
    { target: _, targetStatus: m } = u,
    v = _[0],
    w = fc[m],
    N = xe(Tt, {
      children: [
        L(
          'li',
          {
            className: w >= 2 ? 'current' : '',
            onClick: () => l(_, 'ready'),
            children: L('p', { children: 'Planned' }),
          },
          'planned',
        ),
        L(
          'li',
          {
            className: m === 'enrolled' ? 'current' : '',
            onClick: () => l(_, 'enrolled'),
            children: L('p', { children: 'Enrolled' }),
          },
          'enrolled',
        ),
        L(
          'li',
          {
            className: m === 'completed' ? 'current' : '',
            onClick: () => l(_, 'completed'),
            children: L('p', { children: 'Completed' }),
          },
          'complete',
        ),
        L('hr', {}),
      ],
    }),
    g = vC(n[i.get(v)].data.prerequisite),
    M = g ? g.every(V => !i.has(V) || i.has(qt(V, v))) : !0,
    P = [],
    H = r.size;
  for (let V = 0; V < H; V++) {
    const fe = n[V];
    nm(fe) && fe.data.prerequisite.includes(v) && !i.has(qt(v, fe.id)) && P.push(fe);
  }
  const F = !!r.get(v).incomingEdges.length,
    U = !!r.get(v).outgoingEdges.length;
  return xe(Tt, {
    children: [
      w < 3 && N,
      !M && f,
      !!P.length && p,
      !M && !!P.length && h,
      F && x,
      U && S,
      F && U && b,
      L('li', { onClick: () => c(v), children: L('p', { children: 'Edit data' }) }),
      E,
      CF.test(v)
        ? xe(Tt, {
            children: [
              L('hr', {}),
              L('li', {
                children: L('p', {
                  children: L('a', {
                    href: `https://myplan.uw.edu/course/#/courses/${v}`,
                    target: '_blank',
                    rel: 'noreferrer',
                    children: 'Open in MyPlan',
                  }),
                }),
              }),
            ],
          })
        : null,
    ],
  });
}
function NF({ contextProps: e, sharedOpts: t }) {
  const { elements: n, nodeData: r, data: i, rerouteSingle: u, reroutePointless: l } = e,
    {
      disconnectPrereqsOpt: c,
      disconnectPostreqsOpt: f,
      disconnectAllOpt: p,
      deleteElemsOpt: h,
    } = t,
    { target: x } = i,
    S = !!r.get(x[0]).incomingEdges.length,
    b = !!r.get(x[0]).outgoingEdges.length;
  let E = !1;
  const _ = r.size;
  for (let w = 0; w < _; w++) {
    const N = n[w];
    if (N.type === 'or' && r.get(N.id).incomingEdges.length <= 1) {
      E = !0;
      break;
    }
  }
  return xe(Tt, {
    children: [
      S && c,
      b && f,
      S && b && p,
      S &&
        b &&
        L('li', {
          className: 'reroute',
          onClick: () => u(x[0]),
          children: L('p', { children: 'Reroute' }),
        }),
      E && L('li', { onClick: l, children: L('p', { children: 'Reroute pointless OR nodes' }) }),
      h,
    ],
  });
}
function TF({ contextProps: e }) {
  const { elements: t, nodeData: n, xy: r, newConditionalNode: i, reroutePointless: u } = e;
  let l = !1;
  const c = n.size;
  for (let p = 0; p < c; p++) {
    const h = t[p];
    if (h.type === 'or' && n.get(h.id).incomingEdges.length <= 1) {
      l = !0;
      break;
    }
  }
  return xe(Tt, {
    children: [
      L('li', { onClick: () => i('or', r), children: L('p', { children: 'New OR node' }) }),
      L('li', { onClick: () => i('and', r), children: L('p', { children: 'New AND node' }) }),
      l && L('li', { onClick: u, children: L('p', { children: 'Reroute pointless OR nodes' }) }),
    ],
  });
}
function MF(e) {
  const t = Ie(P => P.unsetNodesSelection);
  if (!e.active) return null;
  const { target: n, targetType: r, targetStatus: i } = e.data;
  function u() {
    t(), e.deleteElems(n);
  }
  function l(P, H) {
    return L('li', {
      onClick: () => e.setSelectionStatuses(n, P),
      children: L('p', { children: H }),
    });
  }
  const c = l('ready', 'Planned'),
    f = l('enrolled', 'Enrolled'),
    p = l('completed', 'Completed');
  function h(P, H, F) {
    return L('li', {
      onClick: () => e.connect(n[0], { prereq: P, postreq: H }),
      children: L('p', { children: F }),
    });
  }
  const x = h(!0, !1, 'Connect\xA0prereqs'),
    S = h(!1, !0, 'Connect\xA0postreqs'),
    b = h(!0, !0, 'Connect\xA0all');
  function E(P, H, F) {
    return L('li', {
      onClick: () => e.disconnect(n, { prereq: P, postreq: H }),
      children: L('p', { children: F }),
    });
  }
  const _ = E(!0, !1, 'Disconnect\xA0prereqs'),
    m = E(!1, !0, 'Disconnect\xA0postreqs'),
    v = E(!0, !0, 'Disconnect\xA0all'),
    w = L('li', { onClick: () => e.deleteElems(n), children: L('p', { children: 'Delete' }) }),
    N = L('li', { onClick: u, children: L('p', { children: 'Delete' }) }),
    g = {
      setReadyOpt: c,
      setEnrolledOpt: f,
      setCompletedOpt: p,
      connectPrereqsOpt: x,
      connectPostreqsOpt: S,
      connectAllOpt: b,
      disconnectPrereqsOpt: _,
      disconnectPostreqsOpt: m,
      disconnectAllOpt: v,
      deleteElemsOpt: w,
      deleteAndClearOpt: N,
    };
  let M;
  switch (r) {
    case 'coursenode':
      M = L(OF, { contextProps: e, sharedOpts: g });
      break;
    case 'conditionalnode':
      M = L(NF, { contextProps: e, sharedOpts: g });
      break;
    case 'edge':
      M = xe(Tt, {
        children: [
          L(
            'li',
            {
              className: i === 'concurrent' ? 'current' : '',
              onClick: () => e.toggleEdgeConcurrency(n[0]),
              children: L('p', { children: 'Concurrent' }),
            },
            'concurrent',
          ),
          L('hr', {}),
          w,
        ],
      });
      break;
    case 'coursemultiselect':
      M = xe(Tt, { children: [c, f, p, L('hr', {}), _, m, v, w] });
      break;
    case 'conditionalmultiselect':
      M = xe(Tt, { children: [_, m, v, w] });
      break;
    case 'mixedmultiselect':
      M = w;
      break;
    case 'courseselection':
      M = xe(Tt, { children: [c, f, p, L('hr', {}), _, m, v, N] });
      break;
    case 'conditionalselection':
      M = xe(Tt, { children: [_, m, v, N] });
      break;
    case 'pane':
      M = L(TF, { contextProps: e });
      break;
    default:
      return console.error('Invalid context target'), null;
  }
  return L('ul', { className: 'ContextMenu', style: { top: e.xy.y, left: e.xy.x }, children: M });
}
const PF = { label: 'CC', labelBgPadding: [2, 2], labelBgBorderRadius: 4 };
function AF({
  id: e,
  sourceX: t,
  sourceY: n,
  targetX: r,
  targetY: i,
  sourcePosition: u,
  targetPosition: l,
  data: c = { concurrent: !1 },
}) {
  const f = jg({
      sourceX: t,
      sourceY: n,
      sourcePosition: u,
      targetX: r,
      targetY: i,
      targetPosition: l,
    }),
    [p, h, x, S] = Ol({ sourceX: t, sourceY: n, targetX: r, targetY: i });
  return xe(Tt, {
    children: [
      L('path', { className: 'react-flow__edge-path', d: f, 'data-testid': e }),
      L(kf, Ze({ x: p, y: h }, c.concurrent ? PF : {})),
    ],
  });
}
var IS = '/assets/times.90060acd.svg';
function yC() {
  return !!(typeof window != 'undefined' && window.document && window.document.createElement);
}
var DF = yC() ? T.exports.useLayoutEffect : T.exports.useEffect;
function kF() {
  var e = T.exports.useState(Object.create(null)),
    t = e[1];
  return T.exports.useCallback(function () {
    t(Object.create(null));
  }, []);
}
var RF = function (t) {
  var n = t.children,
    r = t.type,
    i = r === void 0 ? 'reach-portal' : r,
    u = T.exports.useRef(null),
    l = T.exports.useRef(null),
    c = kF();
  return (
    DF(
      function () {
        if (!!u.current) {
          var f = u.current.ownerDocument;
          return (
            (l.current = f == null ? void 0 : f.createElement(i)),
            f.body.appendChild(l.current),
            c(),
            function () {
              l.current &&
                l.current.ownerDocument &&
                l.current.ownerDocument.body.removeChild(l.current);
            }
          );
        }
      },
      [i, c],
    ),
    l.current ? ml.exports.createPortal(n, l.current) : T.exports.createElement('span', { ref: u })
  );
};
function IF(e) {
  return yC() ? (e ? e.ownerDocument : document) : null;
}
function LF(e) {
  return !!(e && {}.toString.call(e) == '[object Function]');
}
function wC() {}
function LS(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function HF(e, t) {
  if (!!e) {
    if (typeof e == 'string') return LS(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ((n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set'))
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return LS(e, t);
  }
}
function BF(e, t) {
  var n;
  if (typeof Symbol == 'undefined' || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = HF(e)) || (t && e && typeof e.length == 'number')) {
      n && (e = n);
      var r = 0;
      return function () {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  return (n = e[Symbol.iterator]()), n.next.bind(n);
}
function FF(e, t) {
  if (e != null)
    if (LF(e)) e(t);
    else
      try {
        e.current = t;
      } catch (n) {
        throw new Error('Cannot assign value "' + t + '" to ref "' + e + '"');
      }
}
function $F() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return T.exports.useCallback(function (r) {
    for (var i = BF(t), u; !(u = i()).done; ) {
      var l = u.value;
      FF(l, r);
    }
  }, t);
}
function dc(e, t) {
  return function (n) {
    if ((e && e(n), !n.defaultPrevented)) return t(n);
  };
}
function zF(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    u;
  for (u = 0; u < r.length; u++) (i = r[u]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function dl() {
  return (
    (dl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    dl.apply(this, arguments)
  );
}
var SC = { exports: {} },
  UF = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  jF = UF,
  WF = jF;
function EC() {}
function _C() {}
_C.resetWarningCache = EC;
var YF = function () {
  function e(r, i, u, l, c, f) {
    if (f !== WF) {
      var p = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      );
      throw ((p.name = 'Invariant Violation'), p);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: _C,
    resetWarningCache: EC,
  };
  return (n.PropTypes = n), n;
};
SC.exports = YF();
var js = SC.exports,
  xv = 'data-focus-lock',
  xC = 'data-focus-lock-disabled',
  VF = 'data-no-focus-lock',
  XF = 'data-autofocus-inside',
  GF = 'data-no-autofocus';
function qF(e, t) {
  return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function ZF(e, t) {
  var n = T.exports.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var i = n.value;
          i !== r && ((n.value = r), n.callback(r, i));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
function bC(e, t) {
  return ZF(t || null, function (n) {
    return e.forEach(function (r) {
      return qF(r, n);
    });
  });
}
var eh = {
    width: '1px',
    height: '0px',
    padding: 0,
    overflow: 'hidden',
    position: 'fixed',
    top: '1px',
    left: '1px',
  },
  Gc = function () {
    return (
      (Gc =
        Object.assign ||
        function (t) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var u in n) Object.prototype.hasOwnProperty.call(n, u) && (t[u] = n[u]);
          }
          return t;
        }),
      Gc.apply(this, arguments)
    );
  };
function KF(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function CC(e) {
  return e;
}
function OC(e, t) {
  t === void 0 && (t = CC);
  var n = [],
    r = !1,
    i = {
      read: function () {
        if (r)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (u) {
        var l = t(u, r);
        return (
          n.push(l),
          function () {
            n = n.filter(function (c) {
              return c !== l;
            });
          }
        );
      },
      assignSyncMedium: function (u) {
        for (r = !0; n.length; ) {
          var l = n;
          (n = []), l.forEach(u);
        }
        n = {
          push: function (c) {
            return u(c);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (u) {
        r = !0;
        var l = [];
        if (n.length) {
          var c = n;
          (n = []), c.forEach(u), (l = n);
        }
        var f = function () {
            var h = l;
            (l = []), h.forEach(u);
          },
          p = function () {
            return Promise.resolve().then(f);
          };
        p(),
          (n = {
            push: function (h) {
              l.push(h), p();
            },
            filter: function (h) {
              return (l = l.filter(h)), n;
            },
          });
      },
    };
  return i;
}
function rm(e, t) {
  return t === void 0 && (t = CC), OC(e, t);
}
function NC(e) {
  e === void 0 && (e = {});
  var t = OC(null);
  return (t.options = Gc({ async: !0, ssr: !1 }, e)), t;
}
var TC = function (e) {
  var t = e.sideCar,
    n = KF(e, ['sideCar']);
  if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
  var r = t.read();
  if (!r) throw new Error('Sidecar medium not found');
  return T.exports.createElement(r, Gc({}, n));
};
TC.isSideCarExport = !0;
function QF(e, t) {
  return e.useMedium(t), TC;
}
var MC = rm({}, function (e) {
    var t = e.target,
      n = e.currentTarget;
    return { target: t, currentTarget: n };
  }),
  PC = rm(),
  JF = rm(),
  e$ = NC({ async: !0 }),
  t$ = [],
  om = T.exports.forwardRef(function (t, n) {
    var r,
      i = T.exports.useState(),
      u = i[0],
      l = i[1],
      c = T.exports.useRef(),
      f = T.exports.useRef(!1),
      p = T.exports.useRef(null),
      h = t.children,
      x = t.disabled,
      S = t.noFocusGuards,
      b = t.persistentFocus,
      E = t.crossFrame,
      _ = t.autoFocus;
    t.allowTextSelection;
    var m = t.group,
      v = t.className,
      w = t.whiteList,
      N = t.hasPositiveIndices,
      g = t.shards,
      M = g === void 0 ? t$ : g,
      P = t.as,
      H = P === void 0 ? 'div' : P,
      F = t.lockProps,
      U = F === void 0 ? {} : F,
      V = t.sideCar,
      fe = t.returnFocus,
      ae = t.focusOptions,
      he = t.onActivation,
      R = t.onDeactivation,
      Y = T.exports.useState({}),
      W = Y[0],
      X = T.exports.useCallback(
        function () {
          (p.current = p.current || (document && document.activeElement)),
            c.current && he && he(c.current),
            (f.current = !0);
        },
        [he],
      ),
      ne = T.exports.useCallback(
        function () {
          (f.current = !1), R && R(c.current);
        },
        [R],
      );
    T.exports.useEffect(function () {
      x || (p.current = null);
    }, []);
    var ce = T.exports.useCallback(
        function (le) {
          var de = p.current;
          if (de && de.focus) {
            var pe = typeof fe == 'function' ? fe(de) : fe;
            if (pe) {
              var Ee = typeof pe == 'object' ? pe : void 0;
              (p.current = null),
                le
                  ? Promise.resolve().then(function () {
                      return de.focus(Ee);
                    })
                  : de.focus(Ee);
            }
          }
        },
        [fe],
      ),
      ue = T.exports.useCallback(function (le) {
        f.current && MC.useMedium(le);
      }, []),
      j = PC.useMedium,
      k = T.exports.useCallback(function (le) {
        c.current !== le && ((c.current = le), l(le));
      }, []),
      D = dl(((r = {}), (r[xC] = x && 'disabled'), (r[xv] = m), r), U),
      B = S !== !0,
      q = B && S !== 'tail',
      Q = bC([n, k]);
    return T.exports.createElement(
      T.exports.Fragment,
      null,
      B && [
        T.exports.createElement('div', {
          key: 'guard-first',
          'data-focus-guard': !0,
          tabIndex: x ? -1 : 0,
          style: eh,
        }),
        N
          ? T.exports.createElement('div', {
              key: 'guard-nearest',
              'data-focus-guard': !0,
              tabIndex: x ? -1 : 1,
              style: eh,
            })
          : null,
      ],
      !x &&
        T.exports.createElement(V, {
          id: W,
          sideCar: e$,
          observed: u,
          disabled: x,
          persistentFocus: b,
          crossFrame: E,
          autoFocus: _,
          whiteList: w,
          shards: M,
          onActivation: X,
          onDeactivation: ne,
          returnFocus: ce,
          focusOptions: ae,
        }),
      T.exports.createElement(H, dl({ ref: Q }, D, { className: v, onBlur: j, onFocus: ue }), h),
      q &&
        T.exports.createElement('div', { 'data-focus-guard': !0, tabIndex: x ? -1 : 0, style: eh }),
    );
  });
om.propTypes = {};
om.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  focusOptions: void 0,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: 'div',
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0,
};
var AC = om;
function bv(e, t) {
  return (
    (bv = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    bv(e, t)
  );
}
function n$(e, t) {
  (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), bv(e, t);
}
function r$(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function o$(e, t) {
  function n(r) {
    return r.displayName || r.name || 'Component';
  }
  return function (i) {
    var u = [],
      l;
    function c() {
      (l = e(
        u.map(function (p) {
          return p.props;
        }),
      )),
        t(l);
    }
    var f = (function (p) {
      n$(h, p);
      function h() {
        return p.apply(this, arguments) || this;
      }
      h.peek = function () {
        return l;
      };
      var x = h.prototype;
      return (
        (x.componentDidMount = function () {
          u.push(this), c();
        }),
        (x.componentDidUpdate = function () {
          c();
        }),
        (x.componentWillUnmount = function () {
          var b = u.indexOf(this);
          u.splice(b, 1), c();
        }),
        (x.render = function () {
          return L(i, Ze({}, this.props));
        }),
        h
      );
    })(T.exports.PureComponent);
    return r$(f, 'displayName', 'SideEffect(' + n(i) + ')'), f;
  };
}
var $r = function (e) {
    for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
    return t;
  },
  Cv = function (e) {
    return Array.isArray(e) ? e : [e];
  },
  i$ = function (e) {
    if (e.nodeType !== Node.ELEMENT_NODE) return !1;
    var t = window.getComputedStyle(e, null);
    return !t || !t.getPropertyValue
      ? !1
      : t.getPropertyValue('display') === 'none' || t.getPropertyValue('visibility') === 'hidden';
  },
  DC = function (e) {
    return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
      ? e.parentNode.host
      : e.parentNode;
  },
  kC = function (e) {
    return e === document || (e && e.nodeType === Node.DOCUMENT_NODE);
  },
  a$ = function (e, t) {
    return !e || kC(e) || (!i$(e) && t(DC(e)));
  },
  RC = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = a$(t, RC.bind(void 0, e));
    return e.set(t, r), r;
  },
  u$ = function (e, t) {
    return e && !kC(e) ? (c$(e) ? t(DC(e)) : !1) : !0;
  },
  IC = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = u$(t, IC.bind(void 0, e));
    return e.set(t, r), r;
  },
  LC = function (e) {
    return e.dataset;
  },
  l$ = function (e) {
    return e.tagName === 'BUTTON';
  },
  HC = function (e) {
    return e.tagName === 'INPUT';
  },
  BC = function (e) {
    return HC(e) && e.type === 'radio';
  },
  s$ = function (e) {
    return !((HC(e) || l$(e)) && (e.type === 'hidden' || e.disabled));
  },
  c$ = function (e) {
    var t = e.getAttribute(GF);
    return ![!0, 'true', ''].includes(t);
  },
  im = function (e) {
    var t;
    return Boolean(e && ((t = LC(e)) === null || t === void 0 ? void 0 : t.focusGuard));
  },
  qc = function (e) {
    return !im(e);
  },
  f$ = function (e) {
    return Boolean(e);
  },
  d$ = function (e, t) {
    var n = e.tabIndex - t.tabIndex,
      r = e.index - t.index;
    if (n) {
      if (!e.tabIndex) return 1;
      if (!t.tabIndex) return -1;
    }
    return n || r;
  },
  FC = function (e, t, n) {
    return $r(e)
      .map(function (r, i) {
        return {
          node: r,
          index: i,
          tabIndex: n && r.tabIndex === -1 ? ((r.dataset || {}).focusGuard ? 0 : -1) : r.tabIndex,
        };
      })
      .filter(function (r) {
        return !t || r.tabIndex >= 0;
      })
      .sort(d$);
  },
  p$ = [
    'button:enabled',
    'select:enabled',
    'textarea:enabled',
    'input:enabled',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[tabindex]',
    '[contenteditable]',
    '[autofocus]',
  ],
  am = p$.join(','),
  h$ = ''.concat(am, ', [data-focus-guard]'),
  $C = function (e, t) {
    var n;
    return $r(
      ((n = e.shadowRoot) === null || n === void 0 ? void 0 : n.children) || e.children,
    ).reduce(function (r, i) {
      return r.concat(i.matches(t ? h$ : am) ? [i] : [], $C(i));
    }, []);
  },
  um = function (e, t) {
    return e.reduce(function (n, r) {
      return n.concat(
        $C(r, t),
        r.parentNode
          ? $r(r.parentNode.querySelectorAll(am)).filter(function (i) {
              return i === r;
            })
          : [],
      );
    }, []);
  },
  v$ = function (e) {
    var t = e.querySelectorAll('['.concat(XF, ']'));
    return $r(t)
      .map(function (n) {
        return um([n]);
      })
      .reduce(function (n, r) {
        return n.concat(r);
      }, []);
  },
  lm = function (e, t) {
    return $r(e)
      .filter(function (n) {
        return RC(t, n);
      })
      .filter(function (n) {
        return s$(n);
      });
  },
  HS = function (e, t) {
    return (
      t === void 0 && (t = new Map()),
      $r(e).filter(function (n) {
        return IC(t, n);
      })
    );
  },
  Ov = function (e, t, n) {
    return FC(lm(um(e, n), t), !0, n);
  },
  BS = function (e, t) {
    return FC(lm(um(e), t), !1);
  },
  g$ = function (e, t) {
    return lm(v$(e), t);
  },
  pl = function (e, t) {
    return (
      (e.shadowRoot ? pl(e.shadowRoot, t) : Object.getPrototypeOf(e).contains.call(e, t)) ||
      $r(e.children).some(function (n) {
        return pl(n, t);
      })
    );
  },
  m$ = function (e) {
    for (var t = new Set(), n = e.length, r = 0; r < n; r += 1)
      for (var i = r + 1; i < n; i += 1) {
        var u = e[r].compareDocumentPosition(e[i]);
        (u & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i),
          (u & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
      }
    return e.filter(function (l, c) {
      return !t.has(c);
    });
  },
  zC = function (e) {
    return e.parentNode ? zC(e.parentNode) : e;
  },
  sm = function (e) {
    var t = Cv(e);
    return t.filter(Boolean).reduce(function (n, r) {
      var i = r.getAttribute(xv);
      return (
        n.push.apply(
          n,
          i
            ? m$(
                $r(
                  zC(r).querySelectorAll(
                    '['.concat(xv, '="').concat(i, '"]:not([').concat(xC, '="disabled"])'),
                  ),
                ),
              )
            : [r],
        ),
        n
      );
    }, []);
  },
  UC = function (e) {
    return e.activeElement
      ? e.activeElement.shadowRoot
        ? UC(e.activeElement.shadowRoot)
        : e.activeElement
      : void 0;
  },
  cm = function () {
    return document.activeElement
      ? document.activeElement.shadowRoot
        ? UC(document.activeElement.shadowRoot)
        : document.activeElement
      : void 0;
  },
  y$ = function (e) {
    return e === document.activeElement;
  },
  w$ = function (e) {
    return Boolean(
      $r(e.querySelectorAll('iframe')).some(function (t) {
        return y$(t);
      }),
    );
  },
  jC = function (e) {
    var t = document && cm();
    return !t || (t.dataset && t.dataset.focusGuard)
      ? !1
      : sm(e).some(function (n) {
          return pl(n, t) || w$(n);
        });
  },
  S$ = function () {
    var e = document && cm();
    return e
      ? $r(document.querySelectorAll('['.concat(VF, ']'))).some(function (t) {
          return pl(t, e);
        })
      : !1;
  },
  E$ = function (e, t) {
    return (
      t
        .filter(BC)
        .filter(function (n) {
          return n.name === e.name;
        })
        .filter(function (n) {
          return n.checked;
        })[0] || e
    );
  },
  fm = function (e, t) {
    return BC(e) && e.name ? E$(e, t) : e;
  },
  _$ = function (e) {
    var t = new Set();
    return (
      e.forEach(function (n) {
        return t.add(fm(n, e));
      }),
      e.filter(function (n) {
        return t.has(n);
      })
    );
  },
  FS = function (e) {
    return e[0] && e.length > 1 ? fm(e[0], e) : e[0];
  },
  $S = function (e, t) {
    return e.length > 1 ? e.indexOf(fm(e[t], e)) : t;
  },
  WC = 'NEW_FOCUS',
  x$ = function (e, t, n, r) {
    var i = e.length,
      u = e[0],
      l = e[i - 1],
      c = im(n);
    if (!(n && e.indexOf(n) >= 0)) {
      var f = n !== void 0 ? t.indexOf(n) : -1,
        p = r ? t.indexOf(r) : f,
        h = r ? e.indexOf(r) : -1,
        x = f - p,
        S = t.indexOf(u),
        b = t.indexOf(l),
        E = _$(t),
        _ = n !== void 0 ? E.indexOf(n) : -1,
        m = _ - (r ? E.indexOf(r) : f),
        v = $S(e, 0),
        w = $S(e, i - 1);
      if (f === -1 || h === -1) return WC;
      if (!x && h >= 0) return h;
      if (f <= S && c && Math.abs(x) > 1) return w;
      if (f >= b && c && Math.abs(x) > 1) return v;
      if (x && Math.abs(m) > 1) return h;
      if (f <= S) return w;
      if (f > b) return v;
      if (x) return Math.abs(x) > 1 ? h : (i + h + x) % i;
    }
  },
  Nv = function (e, t) {
    return (
      t === void 0 && (t = []),
      t.push(e),
      e.parentNode && Nv(e.parentNode.host || e.parentNode, t),
      t
    );
  },
  th = function (e, t) {
    for (var n = Nv(e), r = Nv(t), i = 0; i < n.length; i += 1) {
      var u = n[i];
      if (r.indexOf(u) >= 0) return u;
    }
    return !1;
  },
  YC = function (e, t, n) {
    var r = Cv(e),
      i = Cv(t),
      u = r[0],
      l = !1;
    return (
      i.filter(Boolean).forEach(function (c) {
        (l = th(l || c, c) || l),
          n.filter(Boolean).forEach(function (f) {
            var p = th(u, f);
            p && (!l || pl(p, l) ? (l = p) : (l = th(p, l)));
          });
      }),
      l
    );
  },
  b$ = function (e, t) {
    return e.reduce(function (n, r) {
      return n.concat(g$(r, t));
    }, []);
  },
  C$ = function (e) {
    return function (t) {
      var n;
      return (
        t.autofocus ||
        !!(!((n = LC(t)) === null || n === void 0) && n.autofocus) ||
        e.indexOf(t) >= 0
      );
    };
  },
  O$ = function (e, t) {
    var n = new Map();
    return (
      t.forEach(function (r) {
        return n.set(r.node, r);
      }),
      e
        .map(function (r) {
          return n.get(r);
        })
        .filter(f$)
    );
  },
  N$ = function (e, t) {
    var n = document && cm(),
      r = sm(e).filter(qc),
      i = YC(n || e, e, r),
      u = new Map(),
      l = BS(r, u),
      c = Ov(r, u).filter(function (b) {
        var E = b.node;
        return qc(E);
      });
    if (!(!c[0] && ((c = l), !c[0]))) {
      var f = BS([i], u).map(function (b) {
          var E = b.node;
          return E;
        }),
        p = O$(f, c),
        h = p.map(function (b) {
          var E = b.node;
          return E;
        }),
        x = x$(h, f, n, t);
      if (x === WC) {
        var S = HS(
          l.map(function (b) {
            var E = b.node;
            return E;
          }),
        ).filter(C$(b$(r, u)));
        return { node: S && S.length ? FS(S) : FS(HS(h)) };
      }
      return x === void 0 ? x : p[x];
    }
  },
  T$ = function (e) {
    var t = sm(e).filter(qc),
      n = YC(e, e, t),
      r = new Map(),
      i = Ov([n], r, !0),
      u = Ov(t, r)
        .filter(function (l) {
          var c = l.node;
          return qc(c);
        })
        .map(function (l) {
          var c = l.node;
          return c;
        });
    return i.map(function (l) {
      var c = l.node,
        f = l.index;
      return { node: c, index: f, lockItem: u.indexOf(c) >= 0, guard: im(c) };
    });
  },
  M$ = function (e, t) {
    'focus' in e && e.focus(t), 'contentWindow' in e && e.contentWindow && e.contentWindow.focus();
  },
  nh = 0,
  rh = !1,
  P$ = function (e, t, n) {
    n === void 0 && (n = {});
    var r = N$(e, t);
    if (!rh && r) {
      if (nh > 2) {
        console.error(
          'FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting',
        ),
          (rh = !0),
          setTimeout(function () {
            rh = !1;
          }, 1);
        return;
      }
      nh++, M$(r.node, n.focusOptions), nh--;
    }
  },
  VC = P$;
function XC(e) {
  var t = window,
    n = t.setImmediate;
  typeof n != 'undefined' ? n(e) : setTimeout(e, 1);
}
var A$ = function () {
    return document && document.activeElement === document.body;
  },
  D$ = function () {
    return A$() || S$();
  },
  Sa = null,
  aa = null,
  Ea = null,
  hl = !1,
  k$ = function () {
    return !0;
  },
  R$ = function (t) {
    return (Sa.whiteList || k$)(t);
  },
  I$ = function (t, n) {
    Ea = { observerNode: t, portaledElement: n };
  },
  L$ = function (t) {
    return Ea && Ea.portaledElement === t;
  };
function zS(e, t, n, r) {
  var i = null,
    u = e;
  do {
    var l = r[u];
    if (l.guard) l.node.dataset.focusAutoGuard && (i = l);
    else if (l.lockItem) {
      if (u !== e) return;
      i = null;
    } else break;
  } while ((u += n) !== t);
  i && (i.node.tabIndex = 0);
}
var H$ = function (t) {
    return t && 'current' in t ? t.current : t;
  },
  B$ = function (t) {
    return t ? Boolean(hl) : hl === 'meanwhile';
  },
  F$ = function e(t, n, r) {
    return (
      n &&
      ((n.host === t && (!n.activeElement || r.contains(n.activeElement))) ||
        (n.parentNode && e(t, n.parentNode, r)))
    );
  },
  $$ = function (t, n) {
    return n.some(function (r) {
      return F$(t, r, r);
    });
  },
  Zc = function () {
    var t = !1;
    if (Sa) {
      var n = Sa,
        r = n.observed,
        i = n.persistentFocus,
        u = n.autoFocus,
        l = n.shards,
        c = n.crossFrame,
        f = n.focusOptions,
        p = r || (Ea && Ea.portaledElement),
        h = document && document.activeElement;
      if (p) {
        var x = [p].concat(l.map(H$).filter(Boolean));
        if (
          ((!h || R$(h)) &&
            (i || B$(c) || !D$() || (!aa && u)) &&
            (p &&
              !(jC(x) || (h && $$(h, x)) || L$(h)) &&
              (document && !aa && h && !u
                ? (h.blur && h.blur(), document.body.focus())
                : ((t = VC(x, aa, { focusOptions: f })), (Ea = {}))),
            (hl = !1),
            (aa = document && document.activeElement)),
          document)
        ) {
          var S = document && document.activeElement,
            b = T$(x),
            E = b
              .map(function (_) {
                var m = _.node;
                return m;
              })
              .indexOf(S);
          E > -1 &&
            (b
              .filter(function (_) {
                var m = _.guard,
                  v = _.node;
                return m && v.dataset.focusAutoGuard;
              })
              .forEach(function (_) {
                var m = _.node;
                return m.removeAttribute('tabIndex');
              }),
            zS(E, b.length, 1, b),
            zS(E, -1, -1, b));
        }
      }
    }
    return t;
  },
  GC = function (t) {
    Zc() && t && (t.stopPropagation(), t.preventDefault());
  },
  dm = function () {
    return XC(Zc);
  },
  z$ = function (t) {
    var n = t.target,
      r = t.currentTarget;
    r.contains(n) || I$(r, n);
  },
  U$ = function () {
    return null;
  },
  qC = function () {
    (hl = 'just'),
      setTimeout(function () {
        hl = 'meanwhile';
      }, 0);
  },
  j$ = function () {
    document.addEventListener('focusin', GC),
      document.addEventListener('focusout', dm),
      window.addEventListener('blur', qC);
  },
  W$ = function () {
    document.removeEventListener('focusin', GC),
      document.removeEventListener('focusout', dm),
      window.removeEventListener('blur', qC);
  };
function Y$(e) {
  return e.filter(function (t) {
    var n = t.disabled;
    return !n;
  });
}
function V$(e) {
  var t = e.slice(-1)[0];
  t && !Sa && j$();
  var n = Sa,
    r = n && t && t.id === n.id;
  (Sa = t),
    n &&
      !r &&
      (n.onDeactivation(),
      e.filter(function (i) {
        var u = i.id;
        return u === n.id;
      }).length || n.returnFocus(!t)),
    t
      ? ((aa = null), (!r || n.observed !== t.observed) && t.onActivation(), Zc(), XC(Zc))
      : (W$(), (aa = null));
}
MC.assignSyncMedium(z$);
PC.assignMedium(dm);
JF.assignMedium(function (e) {
  return e({ moveFocusInside: VC, focusInside: jC });
});
var X$ = o$(Y$, V$)(U$),
  ZC = T.exports.forwardRef(function (t, n) {
    return T.exports.createElement(AC, dl({ sideCar: X$, ref: n }, t));
  }),
  KC = AC.propTypes || {};
KC.sideCar;
zF(KC, ['sideCar']);
ZC.propTypes = {};
var G$ = ZC,
  No = function () {
    return (
      (No =
        Object.assign ||
        function (t) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var u in n) Object.prototype.hasOwnProperty.call(n, u) && (t[u] = n[u]);
          }
          return t;
        }),
      No.apply(this, arguments)
    );
  };
function q$(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function Z$(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, u; r < i; r++)
      (u || !(r in t)) && (u || (u = Array.prototype.slice.call(t, 0, r)), (u[r] = t[r]));
  return e.concat(u || Array.prototype.slice.call(t));
}
var pc = 'right-scroll-bar-position',
  hc = 'width-before-scroll-bar',
  K$ = 'with-scroll-bars-hidden',
  Q$ = '--removed-body-scroll-bar-size',
  QC = NC(),
  oh = function () {},
  Hf = T.exports.forwardRef(function (e, t) {
    var n = T.exports.useRef(null),
      r = T.exports.useState({ onScrollCapture: oh, onWheelCapture: oh, onTouchMoveCapture: oh }),
      i = r[0],
      u = r[1],
      l = e.forwardProps,
      c = e.children,
      f = e.className,
      p = e.removeScrollBar,
      h = e.enabled,
      x = e.shards,
      S = e.sideCar,
      b = e.noIsolation,
      E = e.inert,
      _ = e.allowPinchZoom,
      m = e.as,
      v = m === void 0 ? 'div' : m,
      w = q$(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
      ]),
      N = S,
      g = bC([n, t]),
      M = No(No({}, w), i);
    return T.exports.createElement(
      T.exports.Fragment,
      null,
      h &&
        T.exports.createElement(N, {
          sideCar: QC,
          removeScrollBar: p,
          shards: x,
          noIsolation: b,
          inert: E,
          setCallbacks: u,
          allowPinchZoom: !!_,
          lockRef: n,
        }),
      l
        ? T.exports.cloneElement(T.exports.Children.only(c), No(No({}, M), { ref: g }))
        : T.exports.createElement(v, No({}, M, { className: f, ref: g }), c),
    );
  });
Hf.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Hf.classNames = { fullWidth: hc, zeroRight: pc };
var J$ = function () {
  if (typeof __webpack_nonce__ != 'undefined') return __webpack_nonce__;
};
function e8() {
  if (!document) return null;
  var e = document.createElement('style');
  e.type = 'text/css';
  var t = J$();
  return t && e.setAttribute('nonce', t), e;
}
function t8(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function n8(e) {
  var t = document.head || document.getElementsByTagName('head')[0];
  t.appendChild(e);
}
var r8 = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = e8()) && (t8(t, n), n8(t)), e++;
      },
      remove: function () {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  o8 = function () {
    var e = r8();
    return function (t, n) {
      T.exports.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  JC = function () {
    var e = o8(),
      t = function (n) {
        var r = n.styles,
          i = n.dynamic;
        return e(r, i), null;
      };
    return t;
  },
  i8 = { left: 0, top: 0, right: 0, gap: 0 },
  ih = function (e) {
    return parseInt(e || '', 10) || 0;
  },
  a8 = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      i = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
    return [ih(n), ih(r), ih(i)];
  },
  u8 = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window == 'undefined')) return i8;
    var t = a8(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
  },
  l8 = JC(),
  s8 = function (e, t, n, r) {
    var i = e.left,
      u = e.top,
      l = e.right,
      c = e.gap;
    return (
      n === void 0 && (n = 'margin'),
      `
  .`
        .concat(
          K$,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(c, 'px ')
        .concat(
          r,
          `;
  }
  body {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && 'position: relative '.concat(r, ';'),
            n === 'margin' &&
              `
    padding-left: `
                .concat(
                  i,
                  `px;
    padding-top: `,
                )
                .concat(
                  u,
                  `px;
    padding-right: `,
                )
                .concat(
                  l,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(c, 'px ')
                .concat(
                  r,
                  `;
    `,
                ),
            n === 'padding' && 'padding-right: '.concat(c, 'px ').concat(r, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`,
        )
        .concat(
          pc,
          ` {
    right: `,
        )
        .concat(c, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          hc,
          ` {
    margin-right: `,
        )
        .concat(c, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(pc, ' .')
        .concat(
          pc,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(hc, ' .')
        .concat(
          hc,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body {
    `,
        )
        .concat(Q$, ': ')
        .concat(
          c,
          `px;
  }
`,
        )
    );
  },
  c8 = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      i = r === void 0 ? 'margin' : r,
      u = T.exports.useMemo(
        function () {
          return u8(i);
        },
        [i],
      );
    return T.exports.createElement(l8, { styles: s8(u, !t, i, n ? '' : '!important') });
  },
  Tv = !1;
if (typeof window != 'undefined')
  try {
    var Ws = Object.defineProperty({}, 'passive', {
      get: function () {
        return (Tv = !0), !0;
      },
    });
    window.addEventListener('test', Ws, Ws), window.removeEventListener('test', Ws, Ws);
  } catch (e) {
    Tv = !1;
  }
var qi = Tv ? { passive: !1 } : !1,
  f8 = function (e) {
    var t = window.getComputedStyle(e);
    return t.overflowY !== 'hidden' && !(t.overflowY === t.overflowX && t.overflowY === 'visible');
  },
  d8 = function (e) {
    var t = window.getComputedStyle(e);
    return t.overflowX !== 'hidden' && !(t.overflowY === t.overflowX && t.overflowX === 'visible');
  },
  US = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot != 'undefined' && n instanceof ShadowRoot && (n = n.host);
      var r = eO(e, n);
      if (r) {
        var i = tO(e, n),
          u = i[1],
          l = i[2];
        if (u > l) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  p8 = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  h8 = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  eO = function (e, t) {
    return e === 'v' ? f8(t) : d8(t);
  },
  tO = function (e, t) {
    return e === 'v' ? p8(t) : h8(t);
  },
  v8 = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1;
  },
  g8 = function (e, t, n, r, i) {
    var u = v8(e, window.getComputedStyle(t).direction),
      l = u * r,
      c = n.target,
      f = t.contains(c),
      p = !1,
      h = l > 0,
      x = 0,
      S = 0;
    do {
      var b = tO(e, c),
        E = b[0],
        _ = b[1],
        m = b[2],
        v = _ - m - u * E;
      (E || v) && eO(e, c) && ((x += v), (S += E)), (c = c.parentNode);
    } while ((!f && c !== document.body) || (f && (t.contains(c) || t === c)));
    return (
      ((h && ((i && x === 0) || (!i && l > x))) || (!h && ((i && S === 0) || (!i && -l > S)))) &&
        (p = !0),
      p
    );
  },
  Ys = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  jS = function (e) {
    return [e.deltaX, e.deltaY];
  },
  WS = function (e) {
    return e && 'current' in e ? e.current : e;
  },
  m8 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  y8 = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  w8 = 0,
  Zi = [];
function S8(e) {
  var t = T.exports.useRef([]),
    n = T.exports.useRef([0, 0]),
    r = T.exports.useRef(),
    i = T.exports.useState(w8++)[0],
    u = T.exports.useState(function () {
      return JC();
    })[0],
    l = T.exports.useRef(e);
  T.exports.useEffect(
    function () {
      l.current = e;
    },
    [e],
  ),
    T.exports.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(i));
          var _ = Z$([e.lockRef.current], (e.shards || []).map(WS), !0).filter(Boolean);
          return (
            _.forEach(function (m) {
              return m.classList.add('allow-interactivity-'.concat(i));
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(i)),
                _.forEach(function (m) {
                  return m.classList.remove('allow-interactivity-'.concat(i));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var c = T.exports.useCallback(function (_, m) {
      if ('touches' in _ && _.touches.length === 2) return !l.current.allowPinchZoom;
      var v = Ys(_),
        w = n.current,
        N = 'deltaX' in _ ? _.deltaX : w[0] - v[0],
        g = 'deltaY' in _ ? _.deltaY : w[1] - v[1],
        M,
        P = _.target,
        H = Math.abs(N) > Math.abs(g) ? 'h' : 'v';
      if ('touches' in _ && H === 'h' && P.type === 'range') return !1;
      var F = US(H, P);
      if (!F) return !0;
      if ((F ? (M = H) : ((M = H === 'v' ? 'h' : 'v'), (F = US(H, P))), !F)) return !1;
      if ((!r.current && 'changedTouches' in _ && (N || g) && (r.current = M), !M)) return !0;
      var U = r.current || M;
      return g8(U, m, _, U === 'h' ? N : g, !0);
    }, []),
    f = T.exports.useCallback(function (_) {
      var m = _;
      if (!(!Zi.length || Zi[Zi.length - 1] !== u)) {
        var v = 'deltaY' in m ? jS(m) : Ys(m),
          w = t.current.filter(function (M) {
            return M.name === m.type && M.target === m.target && m8(M.delta, v);
          })[0];
        if (w && w.should) {
          m.preventDefault();
          return;
        }
        if (!w) {
          var N = (l.current.shards || [])
              .map(WS)
              .filter(Boolean)
              .filter(function (M) {
                return M.contains(m.target);
              }),
            g = N.length > 0 ? c(m, N[0]) : !l.current.noIsolation;
          g && m.preventDefault();
        }
      }
    }, []),
    p = T.exports.useCallback(function (_, m, v, w) {
      var N = { name: _, delta: m, target: v, should: w };
      t.current.push(N),
        setTimeout(function () {
          t.current = t.current.filter(function (g) {
            return g !== N;
          });
        }, 1);
    }, []),
    h = T.exports.useCallback(function (_) {
      (n.current = Ys(_)), (r.current = void 0);
    }, []),
    x = T.exports.useCallback(function (_) {
      p(_.type, jS(_), _.target, c(_, e.lockRef.current));
    }, []),
    S = T.exports.useCallback(function (_) {
      p(_.type, Ys(_), _.target, c(_, e.lockRef.current));
    }, []);
  T.exports.useEffect(function () {
    return (
      Zi.push(u),
      e.setCallbacks({ onScrollCapture: x, onWheelCapture: x, onTouchMoveCapture: S }),
      document.addEventListener('wheel', f, qi),
      document.addEventListener('touchmove', f, qi),
      document.addEventListener('touchstart', h, qi),
      function () {
        (Zi = Zi.filter(function (_) {
          return _ !== u;
        })),
          document.removeEventListener('wheel', f, qi),
          document.removeEventListener('touchmove', f, qi),
          document.removeEventListener('touchstart', h, qi);
      }
    );
  }, []);
  var b = e.removeScrollBar,
    E = e.inert;
  return T.exports.createElement(
    T.exports.Fragment,
    null,
    E ? T.exports.createElement(u, { styles: y8(i) }) : null,
    b ? T.exports.createElement(c8, { gapMode: 'margin' }) : null,
  );
}
var E8 = QF(QC, S8),
  nO = T.exports.forwardRef(function (e, t) {
    return T.exports.createElement(Hf, No({}, e, { ref: t, sideCar: E8 }));
  });
nO.classNames = Hf.classNames;
var _8 = nO;
function vl() {
  return (
    (vl =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    vl.apply(this, arguments)
  );
}
function pm(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    u;
  for (u = 0; u < r.length; u++) (i = r[u]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var x8 = ['as', 'isOpen'],
  b8 = [
    'allowPinchZoom',
    'as',
    'dangerouslyBypassFocusLock',
    'dangerouslyBypassScrollLock',
    'initialFocusRef',
    'onClick',
    'onDismiss',
    'onKeyDown',
    'onMouseDown',
    'unstable_lockFocusAcrossFrames',
  ],
  C8 = ['as', 'onClick', 'onKeyDown'];
js.bool, js.bool, js.bool, js.func;
var O8 = T.exports.forwardRef(function (t, n) {
    var r = t.as,
      i = r === void 0 ? 'div' : r,
      u = t.isOpen,
      l = u === void 0 ? !0 : u,
      c = pm(t, x8);
    return (
      T.exports.useEffect(
        function () {
          l
            ? (window.__REACH_DISABLE_TOOLTIPS = !0)
            : window.requestAnimationFrame(function () {
                window.__REACH_DISABLE_TOOLTIPS = !1;
              });
        },
        [l],
      ),
      l
        ? T.exports.createElement(
            RF,
            { 'data-reach-dialog-wrapper': '' },
            T.exports.createElement(N8, vl({ ref: n, as: i }, c)),
          )
        : null
    );
  }),
  N8 = T.exports.forwardRef(function (t, n) {
    var r = t.allowPinchZoom,
      i = t.as,
      u = i === void 0 ? 'div' : i,
      l = t.dangerouslyBypassFocusLock,
      c = l === void 0 ? !1 : l,
      f = t.dangerouslyBypassScrollLock,
      p = f === void 0 ? !1 : f,
      h = t.initialFocusRef,
      x = t.onClick,
      S = t.onDismiss,
      b = S === void 0 ? wC : S,
      E = t.onKeyDown,
      _ = t.onMouseDown,
      m = t.unstable_lockFocusAcrossFrames,
      v = m === void 0 ? !0 : m,
      w = pm(t, b8),
      N = T.exports.useRef(null),
      g = T.exports.useRef(null),
      M = $F(g, n),
      P = T.exports.useCallback(
        function () {
          h && h.current && h.current.focus();
        },
        [h],
      );
    function H(V) {
      N.current === V.target && (V.stopPropagation(), b(V));
    }
    function F(V) {
      V.key === 'Escape' && (V.stopPropagation(), b(V));
    }
    function U(V) {
      N.current = V.target;
    }
    return (
      T.exports.useEffect(function () {
        return g.current ? M8(g.current) : void 0;
      }, []),
      T.exports.createElement(
        G$,
        { autoFocus: !0, returnFocus: !0, onActivation: P, disabled: c, crossFrame: v },
        T.exports.createElement(
          _8,
          { allowPinchZoom: r, enabled: !p },
          T.exports.createElement(
            u,
            vl({}, w, {
              ref: M,
              'data-reach-dialog-overlay': '',
              onClick: dc(x, H),
              onKeyDown: dc(E, F),
              onMouseDown: dc(_, U),
            }),
          ),
        ),
      )
    );
  }),
  T8 = T.exports.forwardRef(function (t, n) {
    var r = t.as,
      i = r === void 0 ? 'div' : r,
      u = t.onClick;
    t.onKeyDown;
    var l = pm(t, C8);
    return T.exports.createElement(
      i,
      vl({ 'aria-modal': 'true', role: 'dialog', tabIndex: -1 }, l, {
        ref: n,
        'data-reach-dialog-content': '',
        onClick: dc(u, function (c) {
          c.stopPropagation();
        }),
      }),
    );
  });
function M8(e) {
  var t = [],
    n = [],
    r = IF(e);
  return e
    ? (Array.prototype.forEach.call(r.querySelectorAll('body > *'), function (i) {
        var u,
          l,
          c = (u = e.parentNode) == null || (l = u.parentNode) == null ? void 0 : l.parentNode;
        if (i !== c) {
          var f = i.getAttribute('aria-hidden'),
            p = f !== null && f !== 'false';
          p || (t.push(f), n.push(i), i.setAttribute('aria-hidden', 'true'));
        }
      }),
      function () {
        n.forEach(function (i, u) {
          var l = t[u];
          l === null ? i.removeAttribute('aria-hidden') : i.setAttribute('aria-hidden', l);
        });
      })
    : wC;
}
var P8 = '/assets/x-black.e3b48a9a.svg';
function A8({ btnRef: e = null, onClick: t, disabled: n = !1 }) {
  return L('button', {
    ref: e,
    type: 'button',
    className: 'CloseButton',
    onClick: t,
    disabled: n,
    children: L('img', { src: P8, alt: 'Close' }),
  });
}
function rO({
  modalCls: e,
  close: t,
  closeBtnRef: n = null,
  busy: r,
  contentCls: i,
  contentAriaLabel: u,
  children: l,
}) {
  return L(O8, {
    className: e,
    isOpen: !e.includes('--display-none'),
    onDismiss: c => {
      c.key === 'Escape' && !r && t();
    },
    children: xe(T8, {
      className: i,
      'aria-label': u,
      children: [L(A8, at(Ze({}, n ? { btnRef: n } : {}), { onClick: t, disabled: r })), l],
    }),
  });
}
const ah = /^(?:[A-Z&]+ )+\d{3}$/,
  YS = /\b\d{3}\b/;
function D8({ modalCls: e, closeDialog: t, elements: n, onElementsRemove: r }) {
  const [i, u] = T.exports.useState(!1),
    [l, c] = T.exports.useState('id'),
    [f, p] = T.exports.useMemo(() => {
      const E = mF(n),
        _ = Qr(E);
      return [E.slice(0, _.size), _];
    }, [n]);
  switch (l) {
    case 'depth':
      f.sort((E, _) => p.get(E.id).depth - p.get(_.id).depth);
      break;
    case 'id':
      f.sort((E, _) => E.id.localeCompare(_.id));
      break;
    case 'id-num':
      f.sort((E, _) => {
        var w, N;
        const m = Number(((w = E.id.match(YS)) != null ? w : ['Infinity'])[0]),
          v = Number(((N = _.id.match(YS)) != null ? N : ['Infinity'])[0]);
        return m - v;
      });
      break;
    case 'name':
      f.sort((E, _) => E.data.name.localeCompare(_.data.name));
      break;
  }
  const h = Jr(f);
  function x(E) {
    return () => {
      u(!0), r([E]), u(!1);
    };
  }
  function S(E) {
    return L('button', {
      type: 'button',
      className: 'TableDialog__small-delete-btn',
      onClick: x(f[h.get(E)]),
      children: L('img', { src: IS, alt: 'Delete' }),
    });
  }
  const b = f.map(E => {
    const _ = p.get(E.id),
      m = Vc(E.data.prerequisite, !0);
    Xc(m, (w, N) =>
      L(
        'a',
        {
          className: Vn('uw-course-id', p.has(w) ? f[h.get(w)].data.nodeStatus : ''),
          href: `https://myplan.uw.edu/course/#/courses/${w}`,
          target: '_blank',
          rel: 'noreferrer',
          children: w,
        },
        N,
      ),
    );
    const v = Vc(E.data.offered, !0);
    return (
      Xc(v, (w, N) =>
        L(
          'span',
          {
            className: Vn('uw-course-id', p.has(w) ? f[h.get(w)].data.nodeStatus : ''),
            children: w,
          },
          N,
        ),
      ),
      mC(v),
      xe(
        'tr',
        {
          children: [
            L('td', { children: _.depth }),
            L('td', {
              children: ah.test(E.id)
                ? L('a', {
                    className: Vn('uw-course-id', E.data.nodeStatus),
                    href: `https://myplan.uw.edu/course/#/courses/${E.id}`,
                    target: '_blank',
                    rel: 'noreferrer',
                    children: E.id,
                  })
                : L('span', { className: E.data.nodeStatus, children: E.id }),
            }),
            L('td', { children: E.data.name.replace(/ (\S+?)$/, '\xA0$1') }),
            L('td', { children: m }),
            L('td', { children: v }),
            L('td', {
              children: L('ul', {
                children: _.incomingNodes.map(w =>
                  xe(
                    'li',
                    {
                      children: [
                        S(w),
                        ah.test(w)
                          ? L('a', {
                              className: Vn('uw-course-id', f[h.get(w)].data.nodeStatus),
                              href: `https://myplan.uw.edu/course/#/courses/${w}`,
                              target: '_blank',
                              rel: 'noreferrer',
                              children: w,
                            })
                          : L('span', { className: Vn(f[h.get(w)].data.nodeStatus), children: w }),
                      ],
                    },
                    w,
                  ),
                ),
              }),
            }),
            L('td', {
              children: L('ul', {
                children: _.outgoingNodes.map(w =>
                  xe(
                    'li',
                    {
                      children: [
                        S(w),
                        ah.test(w)
                          ? L('a', {
                              className: Vn('uw-course-id', f[h.get(w)].data.nodeStatus),
                              href: `https://myplan.uw.edu/course/#/courses/${w}`,
                              target: '_blank',
                              rel: 'noreferrer',
                              children: w,
                            })
                          : L('span', { className: Vn(f[h.get(w)].data.nodeStatus), children: w }),
                      ],
                    },
                    w,
                  ),
                ),
              }),
            }),
            L('td', {
              children: L('button', {
                type: 'button',
                className: 'TableDialog__large-delete-btn',
                onClick: x(E),
                children: L('img', { src: IS, alt: 'Delete' }),
              }),
            }),
          ],
        },
        E.id,
      )
    );
  });
  return xe(rO, {
    modalCls: e,
    close: t,
    busy: i,
    contentCls: 'TableDialog',
    contentAriaLabel: 'Table dialog',
    children: [
      L('h2', { children: 'Courses' }),
      L('p', {
        className: 'TableDialog__prereq-warning',
        children:
          '\u26A0\uFE0F Prerequisites may refer to courses that are no longer offered \u26A0\uFE0F',
      }),
      xe('fieldset', {
        className: 'SortBy',
        disabled: i,
        children: [
          'Sort by:',
          xe('label', {
            className: 'SortBy__radio-label SortBy__radio-label--depth',
            children: [
              L('input', {
                type: 'radio',
                className: 'SortBy__radio-button',
                name: 'sort-by',
                checked: l === 'depth',
                onChange: () => c('depth'),
              }),
              'Depth',
            ],
          }),
          xe('label', {
            className: 'SortBy__radio-label SortBy__radio-label--id',
            children: [
              L('input', {
                type: 'radio',
                className: 'SortBy__radio-button',
                name: 'sort-by',
                checked: l === 'id',
                onChange: () => c('id'),
              }),
              'ID',
            ],
          }),
          xe('label', {
            className: 'SortBy__radio-label SortBy__radio-label--id-num',
            children: [
              L('input', {
                type: 'radio',
                className: 'SortBy__radio-button',
                name: 'sort-by',
                checked: l === 'id-num',
                onChange: () => c('id-num'),
              }),
              'ID#',
            ],
          }),
          xe('label', {
            className: 'SortBy__radio-label SortBy__radio-label--name',
            children: [
              L('input', {
                type: 'radio',
                className: 'SortBy__radio-button',
                name: 'sort-by',
                checked: l === 'name',
                onChange: () => c('name'),
              }),
              'Name',
            ],
          }),
        ],
      }),
      xe('table', {
        className: 'TableDialog__course-table',
        children: [
          L('thead', {
            children: xe('tr', {
              children: [
                L('th', { children: 'Depth' }),
                L('th', { children: 'ID' }),
                L('th', { children: 'Name' }),
                L('th', { children: 'Prerequisite' }),
                L('th', { children: 'Offered' }),
                L('th', { children: 'Incoming' }),
                L('th', { children: 'Outgoing' }),
                L('th', { children: 'Delete' }),
              ],
            }),
          }),
          L('tbody', { children: b }),
        ],
      }),
    ],
  });
}
function k8({
  modalCls: e,
  closeDialog: t,
  originalData: n,
  nodeData: r,
  saveCourseData: i,
  resetSelectedElements: u,
}) {
  const [l, c] = T.exports.useState(!1),
    [f, p] = T.exports.useState({
      id: '',
      name: '',
      credits: '',
      description: '',
      prerequisite: '',
      offered: '',
    });
  T.exports.useEffect(() => {
    p(n);
  }, [n]);
  const h = T.exports.useRef(null),
    x = T.exports.useRef(null);
  T.exports.useEffect(() => {
    e === '' &&
      setTimeout(() => {
        var m, v;
        (m = x.current) == null || m.setSelectionRange(f.description.length, f.description.length),
          (v = h.current) == null || v.focus();
      });
  }, [e]);
  const S = Lf();
  function b() {
    u(),
      t(),
      S
        ? c(!1)
        : setTimeout(() => {
            c(!1);
          }, 100);
  }
  function E() {
    c(!0), i(n.id, f), b();
  }
  const _ = wF(p);
  return xe(rO, {
    modalCls: e,
    close: b,
    busy: l,
    contentCls: 'EditDataDialog',
    contentAriaLabel: 'Edit course data dialog',
    children: [
      L('h2', { children: 'Edit course data' }),
      xe('form', {
        className: 'EditDataForm',
        children: [
          xe('div', {
            className: 'EditDataForm__header-row',
            children: [
              L(tm, {
                className: 'tippy-box--error',
                content: 'ID already in use',
                placement: 'bottom-start',
                arrow: !1,
                duration: 0,
                offset: [0, 5],
                visible:
                  r.has(f.id) &&
                  f.id !== n.id &&
                  !e.includes('--transparent') &&
                  !e.includes('--display-none'),
                children: L('input', {
                  disabled: l,
                  className: 'EditDataForm__id-input',
                  type: 'text',
                  ref: h,
                  required: !0,
                  placeholder: 'Course ID (required)',
                  value: f.id,
                  onChange: _('id'),
                }),
              }),
              L('input', {
                disabled: l,
                className: 'EditDataForm__name-input',
                type: 'text',
                placeholder: 'Course name',
                value: f.name,
                onChange: _('name'),
              }),
              L('input', {
                disabled: l,
                className: 'EditDataForm__credits-input',
                type: 'text',
                placeholder: 'Credits',
                value: f.credits,
                onChange: _('credits'),
              }),
            ],
          }),
          L('textarea', {
            ref: x,
            disabled: l,
            className: 'EditDataForm__description-input',
            placeholder: 'Description',
            value: f.description,
            onChange: _('description'),
          }),
          xe('div', {
            className: 'EditDataForm__footer-row',
            children: [
              L('input', {
                disabled: l,
                className: 'EditDataForm__prerequisite-input',
                type: 'text',
                placeholder: 'Prerequisite',
                value: f.prerequisite,
                onChange: _('prerequisite'),
              }),
              L('input', {
                disabled: l,
                className: 'EditDataForm__offered-input',
                type: 'text',
                placeholder: 'Offered',
                value: f.offered,
                onChange: _('offered'),
              }),
            ],
          }),
          L('button', {
            type: 'button',
            className: 'EditDataForm__add-button',
            onClick: E,
            disabled: !f.id.trim() || (r.has(f.id) && f.id !== n.id) || l,
            children: 'Save',
          }),
        ],
      }),
    ],
  });
}
const R8 = 20;
function I8({ initialElements: e }) {
  const [t, n] = T.exports.useState(!0),
    [r, i, u] = DS(),
    [l, c, f] = DS(),
    p = T.exports.useRef(),
    h = T.exports.useRef(() => {}),
    x = T.exports.useRef([]),
    S = T.exports.useRef(() => {}),
    b = T.exports.useRef(() => {}),
    E = T.exports.useRef(() => {}),
    [_, m] = T.exports.useState(e),
    v = T.exports.useRef(Qr(e)),
    w = T.exports.useRef(Jr(e)),
    N = T.exports.useRef([]),
    g = T.exports.useRef([]),
    M = T.exports.useRef([]),
    [P, H] = T.exports.useState(!1),
    F = T.exports.useRef({ target: [], targetType: 'pane', targetStatus: '' }),
    [U, V] = T.exports.useState(hC),
    fe = T.exports.useRef({
      id: '',
      name: '',
      credits: '',
      description: '',
      prerequisite: '',
      offered: '',
    }),
    ae = Lf();
  function he(J) {
    J.fitView(), (p.current = J);
  }
  function R(J) {
    v.current = Qr(J);
    let te = hF(J, v.current);
    return (w.current = Jr(te)), (te = Qp(te, v.current, w.current)), Us(te);
  }
  function Y(J = null) {
    var ie;
    const te = J != null ? J : (ie = p.current) == null ? void 0 : ie.toObject().elements;
    N.current.length === R8 && N.current.shift(), N.current.push(Us(te)), (g.current = []);
  }
  const W = T.exports.useMemo(() => [l].some(J => !J.includes('--display-none')), [l]);
  T.exports.useEffect(() => {
    function J(ie) {
      var G;
      if (ie.ctrlKey && ie.key === 'z' && !W && N.current.length) {
        E.current(), g.current.push(Us((G = p.current) == null ? void 0 : G.toObject().elements));
        const ye = N.current.pop();
        for (const be of ye) v.current.has(be.id) && h.current({ id: be.id, pos: be.position });
        (v.current = Qr(ye)), (w.current = Jr(ye)), m(ye);
      }
    }
    function te(ie) {
      var G;
      if (ie.ctrlKey && ie.key === 'y' && !W && g.current.length) {
        E.current(), N.current.push(Us((G = p.current) == null ? void 0 : G.toObject().elements));
        const ye = g.current.pop();
        for (const be of ye) v.current.has(be.id) && h.current({ id: be.id, pos: be.position });
        (v.current = Qr(ye)), (w.current = Jr(ye)), m(ye);
      }
    }
    return (
      document.addEventListener('keydown', J),
      document.addEventListener('keydown', te),
      () => {
        document.removeEventListener('keydown', J), document.removeEventListener('keydown', te);
      }
    );
  }, [W]);
  function X(J, te) {
    Y();
    const ie = _.slice(),
      G = w.current.get(J);
    if (
      ((ie[G] = at(Ze({}, ie[G]), { id: te.id, data: Ze(Ze({}, ie[G].data), te) })), J !== te.id)
    ) {
      for (const ye of v.current.get(J).incomingNodes) {
        const be = qt(ye, J),
          Xe = w.current.get(be);
        ie[Xe] = at(Ze({}, ie[Xe]), { id: qt(ye, te.id), target: te.id });
      }
      for (const ye of v.current.get(J).outgoingNodes) {
        const be = qt(J, ye),
          Xe = w.current.get(be);
        ie[Xe] = at(Ze({}, ie[Xe]), { id: qt(te.id, ye), source: te.id });
      }
    }
    m(R(ie));
  }
  function ne(J, te) {
    if (J.altKey && nm(te)) {
      b.current();
      const ie = te.id,
        G = _.slice();
      let ye;
      switch (_[w.current.get(ie)].data.nodeStatus) {
        case 'ready':
          ye = 'enrolled';
          break;
        case 'enrolled':
          ye = 'completed';
          break;
        default:
          return;
      }
      Y(), Ev(ie, ye, G, v.current, w.current);
      const Xe = v.current.get(ie).outgoingNodes;
      for (const nt of Xe) _v(nt, G, v.current, w.current);
      const Fe = new Set(Xe.flatMap(nt => v.current.get(nt).outgoingNodes));
      for (const nt of Fe.values()) _v(nt, G, v.current, w.current);
      m(G);
    }
  }
  function ce(J) {
    Y(), m(R(cc(J, _)));
  }
  function ue(J, te) {
    var ie;
    (M.current = (ie = p.current) == null ? void 0 : ie.toObject().elements), H(!1);
  }
  function j(J, te) {
    Y(M.current);
  }
  function k(J, te) {
    for (const ie of v.current.get(J).incomingEdges) {
      const G = w.current.get(ie);
      te[G] = at(Ze({}, te[G]), { animated: !ae });
    }
    for (const ie of v.current.get(J).incomingNodes) {
      const G = w.current.get(ie);
      (te[G] = at(Ze({}, te[G]), { data: at(Ze({}, te[G].data), { nodeConnected: !0 }) })),
        ['or', 'and'].includes(te[G].type) && k(ie, te);
    }
  }
  function D(J, te) {
    for (const ie of v.current.get(J).outgoingEdges) {
      const G = w.current.get(ie);
      te[G] = at(Ze({}, te[G]), { animated: !ae });
    }
    for (const ie of v.current.get(J).outgoingNodes) {
      const G = w.current.get(ie);
      (te[G] = at(Ze({}, te[G]), { data: at(Ze({}, te[G].data), { nodeConnected: !0 }) })),
        ['or', 'and'].includes(te[G].type) && D(ie, te);
    }
  }
  function B(J, te) {
    const ie = te.id,
      G = _.slice();
    k(ie, G), D(ie, G), m(G);
  }
  function q(J, te) {
    const ie = _.slice(),
      G = v.current.size,
      ye = ie.length;
    for (let be = 0; be < G; be++)
      ie[be] = at(Ze({}, ie[be]), { data: at(Ze({}, ie[be].data), { nodeConnected: !1 }) });
    for (let be = G; be < ye; be++) ie[be] = at(Ze({}, ie[be]), { animated: !1 });
    m(ie);
  }
  function Q(J, te) {
    J.preventDefault(), E.current();
    const ie = x.current ? x.current.map(G => G.id) : [];
    if (ie.includes(te.id))
      if (ie.length === 1)
        F.current = {
          target: [te.id],
          targetType: te.type === 'course' ? 'coursenode' : 'conditionalnode',
          targetStatus: te.data.nodeStatus,
        };
      else if (ie.some(G => G.includes('->')))
        F.current = { target: ie, targetType: 'mixedmultiselect', targetStatus: '' };
      else {
        const G = ie.some(ye => _[w.current.get(ye)].type === 'course');
        F.current = {
          target: ie,
          targetType: G ? 'coursemultiselect' : 'conditionalmultiselect',
          targetStatus: '',
        };
      }
    else
      S.current([te]),
        (F.current = {
          target: [te.id],
          targetType: te.type === 'course' ? 'coursenode' : 'conditionalnode',
          targetStatus: te.data.nodeStatus,
        });
    V(zs(J.clientX, J.clientY)), H(!0);
  }
  function le(J, te) {
    const ie = te.source,
      G = te.target,
      ye = qt(ie, G),
      be = qt(G, ie);
    !w.current.has(ye) &&
      !w.current.has(be) &&
      (Y(),
      m(Xe => {
        const Fe = Xe.slice(),
          nt = Xe[w.current.get(ie)];
        return (
          (Fe[w.current.get(J.id)] = at(Ze({}, J), {
            id: ye,
            source: te.source,
            target: te.target,
            className: nt.data.nodeStatus,
          })),
          R(Fe)
        );
      }));
  }
  function de(J, te) {
    J.preventDefault(), E.current();
    const ie = x.current ? x.current.map(ye => ye.id) : [],
      G = _[w.current.get(te.id)].data.concurrent ? 'concurrent' : '';
    ie.includes(te.id)
      ? ie.length === 1
        ? (F.current = { target: [te.id], targetType: 'edge', targetStatus: G })
        : (F.current = { target: ie, targetType: 'mixedmultiselect', targetStatus: '' })
      : (S.current([te]), (F.current = { target: [te.id], targetType: 'edge', targetStatus: G })),
      V(zs(J.clientX, J.clientY)),
      H(!0);
  }
  function pe(J) {
    H(!1);
  }
  function Ee(J, te) {
    var ie;
    M.current = (ie = p.current) == null ? void 0 : ie.toObject().elements;
  }
  function it(J, te) {
    Y(M.current);
  }
  function Ve(J, te) {
    J.preventDefault();
    const ie = te.some(G => _[w.current.get(G.id)].type === 'course');
    (F.current = {
      target: te.map(G => G.id),
      targetType: ie ? 'courseselection' : 'conditionalselection',
      targetStatus: '',
    }),
      V(zs(J.clientX, J.clientY)),
      H(!0);
  }
  function ut(J) {
    J.preventDefault(),
      b.current(),
      E.current(),
      (F.current = { target: [], targetType: 'pane', targetStatus: '' }),
      V(zs(J.clientX, J.clientY)),
      H(!0);
  }
  return xe('div', {
    className: 'App',
    onClick: () => H(!1),
    onWheel: () => H(!1),
    children: [
      L(tm, {
        content: t ? 'Hide minimap' : 'Show minimap',
        trigger: 'mouseenter',
        hideOnClick: !1,
        placement: 'right',
        duration: ae ? 0 : 100,
        children: L('button', {
          className: Vn('react-flow__minimap-pin-button', {
            'react-flow__minimap-pin-button--pinned': t,
          }),
          type: 'button',
          onClick: () => n(!t),
          children: L('img', { src: oF, alt: 'Show/hide minimap' }),
        }),
      }),
      L('button', {
        type: 'button',
        className: 'TableDialog__open-btn',
        onClick: i,
        children: L('img', { src: iF, alt: 'Open table dialog' }),
      }),
      xe(Vb, {
        children: [
          L(uF, {
            updateNodePos: h,
            selectedElements: x,
            setSelectedElements: S,
            resetSelectedElements: b,
            unsetNodesSelection: E,
          }),
          xe(zb, {
            minZoom: 0.2,
            onLoad: he,
            elements: _,
            nodeTypes: { course: _F, or: xF, and: bF },
            edgeTypes: { custom: AF },
            onElementClick: ne,
            onElementsRemove: ce,
            onNodeDragStart: ue,
            onNodeDragStop: j,
            onNodeMouseEnter: B,
            onNodeMouseLeave: q,
            onNodeContextMenu: Q,
            onEdgeUpdate: le,
            onEdgeContextMenu: de,
            onMoveStart: pe,
            onSelectionDragStart: Ee,
            onSelectionDragStop: it,
            onSelectionContextMenu: Ve,
            onPaneContextMenu: ut,
            selectNodesOnDrag: !1,
            zoomOnDoubleClick: !1,
            deleteKeyCode: 'Delete',
            multiSelectionKeyCode: 'Control',
            children: [
              L(SB, { variant: _i.Lines, gap: 32, size: 1 }),
              L(lB, {
                className: Vn({ 'react-flow__minimap--pinned': t }),
                nodeColor: J => {
                  switch (J.data.nodeStatus) {
                    case 'completed':
                      return '#000000';
                    case 'enrolled':
                      return '#9400d3';
                    case 'ready':
                      return '#32cd32';
                    case 'under-one-away':
                      return '#daa520';
                    case 'one-away':
                      return '#ff8c00';
                    case 'over-one-away':
                      return '#ff0000';
                    default:
                      return '#808080';
                  }
                },
                nodeBorderRadius: 2,
              }),
              L(gB, { showInteractive: !1 }),
            ],
          }),
          L(MF, {
            elements: _,
            nodeData: v.current,
            elemIndexes: w.current,
            active: P,
            data: F.current,
            xy: U,
            setSelectionStatuses: (J, te) => {
              b.current(), Y();
              const ie = _.slice();
              for (const G of J)
                _[w.current.get(G)].type === 'course' && Ev(G, te, ie, v.current, w.current);
              m(Qp(ie, v.current, w.current));
            },
            toggleEdgeConcurrency: J => {
              b.current(), Y();
              const te = _.slice(),
                ie = w.current.get(J),
                G = te[ie];
              (te[ie] = at(Ze({}, G), { data: { concurrent: !G.data.concurrent } })),
                m(Qp(te, v.current, w.current));
            },
            editCourseData: J => {
              const te = _[w.current.get(J)];
              (fe.current = Ze({}, te.data)), c();
            },
            deleteElems: J => {
              b.current(), ce(J.map(te => _[w.current.get(te)]));
            },
            connect: (J, te = { prereq: !0, postreq: !0 }) => {
              b.current(), Y();
              const ie = yF(_[w.current.get(J)], _.slice(), v.current.size, w.current, te);
              m(R(ie));
            },
            disconnect: (J, te = { prereq: !0, postreq: !0 }) => {
              b.current(), Y();
              const ie = new Set();
              for (const G of J) {
                if (te.prereq) for (const ye of v.current.get(G).incomingEdges) ie.add(ye);
                if (te.postreq) for (const ye of v.current.get(G).outgoingEdges) ie.add(ye);
              }
              m(R(_.filter(G => !ie.has(G.id))));
            },
            newConditionalNode: (J, te) => {
              var G;
              b.current(), Y();
              const ie = pF(J, (G = p.current) == null ? void 0 : G.project(te));
              m(R(_.concat([ie])));
            },
            rerouteSingle: J => {
              b.current(), Y();
              let te = _.slice();
              const ie = te[w.current.get(J)],
                G = v.current.get(J);
              for (const ye of G.incomingNodes)
                for (const be of G.outgoingNodes) {
                  const Xe = qt(ye, J),
                    Fe = qt(ye, be);
                  w.current.has(Fe) ||
                    te.push(at(Ze({}, te[w.current.get(Xe)]), { id: Fe, source: ye, target: be }));
                }
              (te = cc([ie], te)), m(R(te));
            },
            reroutePointless: () => {
              b.current(), Y();
              let J = _.slice(),
                te = Qr(_),
                ie = Jr(_);
              const G = te.size;
              for (let ye = 0; ye < G; ye++) {
                const be = _[ye];
                if (be.type === 'or' && te.get(be.id).incomingNodes.length <= 1) {
                  const Xe = te.get(be.id).incomingNodes;
                  if (Xe.length) {
                    const [Fe] = Xe,
                      nt = qt(Fe, be.id),
                      xt = te.get(be.id).outgoingNodes;
                    for (const ke of xt) {
                      const $e = qt(Fe, ke);
                      ie.has($e) ||
                        J.push(at(Ze({}, J[ie.get(nt)]), { id: $e, source: Fe, target: ke }));
                    }
                  }
                  (J = cc([be], J)), (te = Qr(J)), (ie = Jr(J));
                }
              }
              m(R(J));
            },
          }),
        ],
      }),
      xe('aside', {
        className: 'Legend',
        children: [
          L('div', { className: 'completed', children: 'Completed' }),
          L('div', { className: 'enrolled', children: 'Enrolled' }),
          L('div', { className: 'ready', children: 'Ready' }),
          L('div', { className: 'under-one-away', children: '<1\xA0away' }),
          L('div', { className: 'one-away', children: '1\xA0away' }),
          L('div', { className: 'over-one-away', children: '>1\xA0away' }),
        ],
      }),
      L(D8, { modalCls: r, closeDialog: u, elements: _, onElementsRemove: ce }),
      L(k8, {
        modalCls: l,
        closeDialog: f,
        originalData: fe.current,
        nodeData: v.current,
        saveCourseData: X,
        resetSelectedElements: b.current,
      }),
    ],
  });
}
const L8 = '1.0.0',
  H8 = [
    {
      id: 'CHEM 124',
      type: 'course',
      position: { x: 848.000048551749, y: 195.75 },
      data: {
        campus: 'Seattle',
        id: 'CHEM 124',
        name: 'General Chemistry',
        credits: '5',
        description:
          'For science and engineering majors. Atomic nature of matter, quantum mechanics, ionic and covalent bonding, molecular geometry, stoichiometry, solution stoichiometry, kinetics, and gas laws. Includes laboratory. Cannot be taken for credit if credit received for CHEM 120.',
        prerequisite:
          'either a minimum grade of 1.7 in CHEM 110, a passing score in the General Chemistry Placement exam, or a score of 1 or higher on Chemistry AP test.',
        offered: 'AWSpS.',
        nodeStatus: 'ready',
        nodeConnected: !1,
      },
    },
    {
      id: 'M E 123',
      type: 'course',
      position: { x: 1287.000909751596, y: 402.5 },
      data: {
        campus: 'Seattle',
        id: 'M E 123',
        name: 'Introduction to Visualization and Computer-Aided Design',
        credits: '4',
        description:
          'Methods of depicting three-dimensional objects and communicating design information. Development of three-dimensional skills through freehand sketching and computer-aided design using parametric solid modeling.',
        prerequisite: 'None.',
        offered: 'AWSpS.',
        nodeStatus: 'ready',
        nodeConnected: !1,
      },
    },
    {
      id: 'MATH 124',
      type: 'course',
      position: { x: 52.146607568855764, y: 879.8978957358919 },
      data: {
        campus: 'Seattle',
        id: 'MATH 124',
        name: 'Calculus with Analytic Geometry I',
        credits: '5',
        description:
          "First quarter in calculus of functions of a single variable. Emphasizes differential calculus. Emphasizes applications and problem solving using the tools of calculus. Recommended: completion of Department of Mathematics' Guided Self-Placement.",
        prerequisite: 'None.',
        offered: 'AWSpS.',
        nodeStatus: 'ready',
        nodeConnected: !1,
      },
    },
    {
      id: 'ENGR 231',
      type: 'course',
      position: { x: 67.14567202211748, y: 1035.3978957358918 },
      data: {
        campus: 'Seattle',
        id: 'ENGR 231',
        name: 'Introduction to Technical Communication',
        credits: '3',
        description:
          'Examines basics of researching and presenting technical information for different audiences and purposes. Individually and in teams, students learn to construct document and presentations, following conventions of oral, written, and visual communication. Assignments are grounded in ethical and sustainable engineering practices.',
        prerequisite:
          'either both ENGL 109 and ENGL 110, or any one of the following:  C LIT 240, ENGL 111, ENGL 121, ENGL 131, ENGL 141, ENGL 182, ENGL 197, ENGL 198, ENGL 199, ENGL 281, ENGL 282, ENGL 297, ENGL 298, ENGL 299, ENGL 381, ENGL 382, HONORS 205, HONORS 345',
        offered: 'AWSpS.',
        nodeStatus: 'ready',
        nodeConnected: !1,
      },
    },
    {
      id: 'CHEM 152',
      type: 'course',
      position: { x: 1266.0005463422913, y: 106.49999999999999 },
      data: {
        campus: 'Seattle',
        id: 'CHEM 152',
        name: 'General Chemistry',
        credits: '5',
        description:
          'Gas phase and aqueous equilibria, thermochemistry, thermodynamics, and electrochemistry. Includes laboratory. No more than 5 credits can be counted toward graduation from the following course group: CHEM 152, CHEM 155.',
        prerequisite: 'minimum grade of 1.7 in either CHEM 123, CHEM 143 or CHEM 145.',
        offered: 'AWSpS.',
        nodeStatus: 'one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'MATH 125',
      type: 'course',
      position: { x: 308.1458317027439, y: 881.3978957358919 },
      data: {
        campus: 'Seattle',
        id: 'MATH 125',
        name: 'Calculus with Analytic Geometry II',
        credits: '5',
        description:
          'Second quarter in the calculus of functions of a single variable. Emphasizes integral calculus. Emphasizes applications and problem solving using the tools of calculus.',
        prerequisite:
          'either minimum grade of 2.0 in MATH 124, score of 3 on AB advanced placement test, or score of 3 on BC advanced placement test.',
        offered: 'AWSpS.',
        nodeStatus: 'one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'MSE 170',
      type: 'course',
      position: { x: 1854.3619517168659, y: 161.73572358216921 },
      data: {
        campus: 'Seattle',
        id: 'MSE 170',
        name: 'Fundamentals of Materials Science',
        credits: '4',
        description:
          'Fundamental principles of structure and properties of materials utilized in the practice of engineering. Properties of materials as related to atomic, molecular, and crystalline structures. Metals, ceramics, multiphase systems, and polymeric materials. Relationships between structure and electrical, mechanical, thermal, and chemical properties.',
        prerequisite: 'Either CHEM 123, CHEM 143,  or CHEM 145.',
        offered: 'AWSpS.',
        nodeStatus: 'one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'PHYS 121',
      type: 'course',
      position: { x: 341.14618475115793, y: 722.1478957358919 },
      data: {
        campus: 'Seattle',
        id: 'PHYS 121',
        name: 'Mechanics',
        credits: '5',
        description:
          'Basic principles of mechanics and experiments in mechanics for physical science and engineering majors. Lecture tutorial and lab components must all be taken to receive credit.  Maximum 5 credits allowed for any combination of PHYS 114, PHYS 117, PHYS 121, and PHYS 141.',
        prerequisite: 'either MATH 124 or MATH 134, which may be taken concurrently.',
        offered: 'AWSpS.',
        nodeStatus: 'one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'AMATH 301',
      type: 'course',
      position: { x: 746.1462826540036, y: 1461.3978957358922 },
      data: {
        campus: 'Seattle',
        id: 'AMATH 301',
        name: 'Beginning Scientific Computing',
        credits: '4',
        description:
          'Introduction to the use of computers to solve problems arising in the physical, biological, and engineering sciences. Application of mathematical judgment, programming architecture, and flow control in solving scientific problems. Introduction to MATLAB and Python routines for numerical programming, computation, and visualization.',
        prerequisite: 'either MATH 125, Q SCI 292, or MATH 135.',
        offered: 'AWSpS.',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'AMATH 351',
      type: 'course',
      position: { x: 738.1457131000195, y: 1307.3978957358922 },
      data: {
        campus: 'Seattle',
        id: 'AMATH 351',
        name: 'Introduction to Differential Equations and Applications',
        credits: '3',
        description:
          'Introductory survey of ordinary differential equations; linear and nonlinear equations; Taylor series; and. Laplace transforms. Emphasizes on formulation, solution, and interpretation of results. Examples drawn from physical and biological sciences and engineering.',
        prerequisite: 'MATH 125 or MATH 135.',
        offered: 'AWSpS.',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'MATH 126',
      type: 'course',
      position: { x: 717.1466076504955, y: 879.8978957358919 },
      data: {
        campus: 'Seattle',
        id: 'MATH 126',
        name: 'Calculus with Analytic Geometry III',
        credits: '5',
        description:
          'Third quarter in calculus sequence. Introduction to Taylor polynomials and Taylor series, vector geometry in three dimensions, introduction to multivariable differential calculus, double integrals in Cartesian and polar coordinates.',
        prerequisite:
          'either a minimum grade of 2.0 in MATH 125, or a score of 4 on BC advanced placement test.',
        offered: 'AWSpS.',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'MATH 207',
      type: 'course',
      position: { x: 736.1465357626265, y: 1246.6478957358922 },
      data: {
        campus: 'Seattle',
        id: 'MATH 207',
        name: 'Introduction to Differential Equations',
        credits: '3',
        description:
          'Introductory course in ordinary differential equations. Includes first- and second-order equations and Laplace transform.',
        prerequisite: 'minimum grade of 2.0 in MATH 125.',
        offered: 'AWSpS.',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'PHYS 122',
      type: 'course',
      position: { x: 723.1462189412337, y: 715.8978957358919 },
      data: {
        campus: 'Seattle',
        id: 'PHYS 122',
        name: 'Electromagnetism',
        credits: '5',
        description:
          'Covers the basic principles of electromagnetism and experiments in these topics for physical science and engineering majors. Lecture tutorial and lab components must all be taken to receive credit. Maximum 5 credits allowed for any combination of PHYS 115, PHYS 118, PHYS 122, and PHYS 142.',
        prerequisite:
          'either PHYS 121 or PHYS 141; and either MATH 125 or MATH 134, which may be taken concurrently.',
        offered: 'AWSpS.',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'OR-qR0ZeX8TFhw_v0xeAiGFs',
      type: 'or',
      position: { x: 1088.7465931469117, y: 1137.1693520289527 },
      data: { nodeStatus: 'over-one-away', nodeConnected: !1 },
    },
    {
      id: 'A A 210',
      type: 'course',
      position: { x: 1275.0002453401455, y: 223.5 },
      selected: !1,
      data: {
        campus: 'Seattle',
        id: 'A A 210',
        name: 'Engineering Statics',
        credits: '4',
        description:
          'Applies vector analysis to equilibrium of rigid body systems and subsystems. Includes force and moment resultants, free body diagrams, internal forces, and friction. Analyzes basic structural and machine systems and components.',
        prerequisite:
          'a minimum grade of 2.0 in either MATH 126 or MATH 136; and a minimum grade of 2.0 in either PHYS 121 or PHYS 141.',
        offered: 'AWSpS.',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'AMATH 352',
      type: 'course',
      position: { x: 1317.454387753464, y: 959.779853475863 },
      data: {
        campus: 'Seattle',
        id: 'AMATH 352',
        name: 'Applied Linear Algebra and Numerical Analysis',
        credits: '3',
        description:
          'Analysis and application of numerical methods and algorithms to problems in the applied sciences and engineering. Applied linear algebra, including eigenvalue problems. Emphasis on use of conceptual methods in engineering, mathematics, and science. Extensive use of MATLAB and/or Python for programming and solution techniques.',
        prerequisite: 'MATH 126 or MATH 136.',
        offered: 'AWSpS.',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'M E 323',
      type: 'course',
      position: { x: 1281.0005638064465, y: 307.5 },
      data: {
        campus: 'Seattle',
        id: 'M E 323',
        name: 'Engineering Thermodynamics',
        credits: '5',
        description:
          'Engineering thermodynamics, including thermodynamic concepts and properties, the first and second laws of thermodynamics, energy conversion, refrigeration, humidification, and combustion. Engineering design applications.',
        prerequisite:
          'either CHEM 123, CHEM 143, or CHEM 145; either MATH 126 or MATH 136; and either PHYS 121 or PHYS 141.',
        offered: '',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'MATH 208',
      type: 'course',
      position: { x: 1310.0006255911997, y: 892.5 },
      data: {
        campus: 'Seattle',
        id: 'MATH 208',
        name: 'Matrix Algebra with Applications',
        credits: '3',
        description:
          'Systems of linear equations, vector spaces, matrices, subspaces, orthogonality, least squares, eigenvalues, eigenvectors, applications. For students in engineering, mathematics, and the sciences.',
        prerequisite: 'minimum grade of 2.0 in MATH 126.',
        offered: 'AWSpS.',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'MATH 224',
      type: 'course',
      position: { x: 1291.0000853713518, y: 597.5 },
      data: {
        campus: 'Seattle',
        id: 'MATH 224',
        name: 'Advanced Multivariable Calculus',
        credits: '3',
        description:
          'Topics include double and triple integrals, the chain rule, vector fields, line and surface integrals. Culminates in the theorems of Green and Stokes, along with the Divergence Theorem.',
        prerequisite: 'minimum grade of 2.0 in either MATH 126 or MATH 136.',
        offered: 'AWSpS.',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'PHYS 123',
      type: 'course',
      position: { x: 1287.00048009902, y: 506.5 },
      data: {
        campus: 'Seattle',
        id: 'PHYS 123',
        name: 'Waves',
        credits: '5',
        description:
          'Explores electromagnetic waves, the mechanics of oscillatory motion, optics, waves in matter, and experiments in these topics for physical science and engineering majors. Lecture tutorial and lab components must all be taken to receive credit. Maximum 5 credits allowed for any combination of PHYS 116, PHYS 119, PHYS 123 and PHYS 143.',
        prerequisite:
          'either PHYS 122 or PHYS 142; and either MATH 126 or MATH 134, which may be taken concurrently.',
        offered: 'AWSpS.',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'STAT 390',
      type: 'course',
      position: { x: 1303.000529097901, y: 717.5 },
      data: {
        campus: 'Seattle',
        id: 'STAT 390',
        name: 'Statistical Methods in Engineering and Science',
        credits: '4',
        description:
          'Concepts of probability and statistics. Conditional probability, independence, random variables, distribution functions. Descriptive statistics, transformations, sampling errors, confidence intervals, least squares and maximum likelihood. Exploratory data analysis and interactive computing. Cannot be taken for credit if credit received for STAT509/CS&SS 509/ECON 580.',
        prerequisite: 'either MATH 126 or MATH 136.',
        offered: 'AWSpS.',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'OR-hTI35R5FbO3fPa0FkYf1j',
      type: 'or',
      position: { x: 1039.3270823163182, y: 1303.5420089426314 },
      data: { nodeStatus: 'over-one-away', nodeConnected: !1 },
    },
    {
      id: 'AND-2MGbF6xiUnrjZNactyECT',
      type: 'and',
      position: { x: 1212.2728452171434, y: 1103.6138018079248 },
      data: { nodeStatus: 'over-one-away', nodeConnected: !1 },
    },
    {
      id: 'AMATH 353',
      type: 'course',
      position: { x: 1307.3270823163182, y: 1228.761172619212 },
      data: {
        campus: 'Seattle',
        id: 'AMATH 353',
        name: 'Partial Differential Equations and Waves',
        credits: '3',
        description:
          "Covers traveling waves of linear equations, dispersion relation, stability, superposition and Fourier analysis, d'Alembert solution, standing waves, vibrations and separation of variables, traveling waves of nonlinear equations, conservation laws, characteristics, breaking, shocks, and rarefaction.",
        prerequisite: 'either AMATH 351, MATH 136, or MATH 207.',
        offered: 'Sp.',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'CEE 220',
      type: 'course',
      position: { x: 1858.3624277634028, y: 253.73572358216927 },
      data: {
        campus: 'Seattle',
        id: 'CEE 220',
        name: 'Introduction to Mechanics of Materials',
        credits: '4',
        description:
          'Introduction to the concepts of stress, deformation, and strain in solid materials. Development of basic relationships among loads, stresses, and deflections of structural and machine elements such as rods, shafts, and beams. Load-carrying capacity of these elements under tension, compression, torsion, bending, and shear forces.',
        prerequisite: 'minimum grade of 2.0 in A A 210.',
        offered: 'AWSp.',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'IND E 315',
      type: 'course',
      position: { x: 1298.2408923608027, y: 788.2696332254579 },
      data: {
        campus: 'Seattle',
        id: 'IND E 315',
        name: 'Probability and Statistics for Engineers',
        credits: '3',
        description:
          'Application of probability theory and statistics to engineering problems, distribution theory and discussion of particular distributions of interest in engineering, statistical estimation and data analysis. Illustrative statistical applications may include quality control, linear regression, and analysis of engineering data sets.',
        prerequisite: 'either MATH 136, MATH 207, or AMATH 351.',
        offered: 'AWSpS.',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'M E 230',
      type: 'course',
      position: { x: 1864.3615699515985, y: 412.73572358216916 },
      data: {
        campus: 'Seattle',
        id: 'M E 230',
        name: 'Kinematics and Dynamics',
        credits: '4',
        description:
          'Kinematics of particles, systems of particles, and rigid bodies; moving reference frames; kinetics of particles, systems of particles, and rigid bodies; equilibrium, energy, linear momentum, angular momentum.',
        prerequisite: 'A A 210.',
        offered: '',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'M E 333',
      type: 'course',
      position: { x: 1869.3623290283915, y: 1315.735723582169 },
      data: {
        campus: 'Seattle',
        id: 'M E 333',
        name: 'Introduction to Fluid Mechanics',
        credits: '5',
        description:
          'Introduction to the basic fluid laws and their application. Conservation equations, dynamic similarity, potential flow, boundary-layer concepts, effects of friction, compressible flow, fluid machinery, measurement techniques.',
        prerequisite: 'AMATH 301; M E 323; either MATH 207 or AMATH 351.',
        offered: '',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'MATH 209',
      type: 'course',
      position: { x: 1946.3621167409506, y: 1007.7357235821689 },
      data: {
        campus: 'Seattle',
        id: 'MATH 209',
        name: 'Linear Analysis',
        credits: '3',
        description:
          'First order systems of linear differential equations, Fourier series and partial differential equations, and the phase plane.',
        prerequisite:
          'either a minimum grade of 2.0 in both MATH 207 and MATH 208 or minimum grade of 2.0 in MATH 136.',
        offered: 'AWSpS.',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'OR-NcdJvmIRQoGpbDutNlZki',
      type: 'or',
      position: { x: 2089.3624716159884, y: 1130.2412837910572 },
      data: { nodeStatus: 'over-one-away', nodeConnected: !1 },
    },
    {
      id: 'E E 215',
      type: 'course',
      position: { x: 1323.0004659549606, y: 1058.5 },
      data: {
        campus: 'Seattle',
        id: 'E E 215',
        name: 'Fundamentals of Electrical Engineering',
        credits: '4',
        description:
          "Introduction to electrical engineering. Basic circuit and systems concepts. Mathematical models of components. Kirchhoff's laws. Resistors, sources, capacitors, inductors, and operational amplifiers. Solution of first and second order linear differential equations associated with basic circuit forms.",
        prerequisite:
          'either MATH 136, or MATH 126 and either MATH 207 or AMATH 351, either of which may be taken concurrently; PHYS 122.',
        offered: '',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'OR-VXfYd0P7Ad4ZZRmehvO_9',
      type: 'or',
      position: { x: 1741.0695518193668, y: 827.9340170063881 },
      data: { nodeStatus: 'over-one-away', nodeConnected: !1 },
    },
    {
      id: 'M E 331',
      type: 'course',
      position: { x: 2261.3615936756255, y: 1315.985723582169 },
      data: {
        campus: 'Seattle',
        id: 'M E 331',
        name: 'Introduction to Heat Transfer',
        credits: '4',
        description:
          'Study of heat transfer by conduction, radiation, and convection; elementary heat-exchanger design.',
        prerequisite: 'either M E 333 or CEE 342.',
        offered: '',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'M E 354',
      type: 'course',
      position: { x: 2260.3619381900835, y: 254.23572358216927 },
      data: {
        campus: 'Seattle',
        id: 'M E 354',
        name: 'Mechanics of Materials Laboratory',
        credits: '5',
        description:
          'Properties and behavior of engineering materials including stress-strain relations, strength, deformation mechanisms, strength, deformation, fracture, creep, and cyclic fatigue. Introduces experimental techniques common to structural engineering, interpretation of experimental data, comparison of measurements to numerical/analytical predictions, and formal, engineering report writing. Lecture and laboratory.',
        prerequisite: 'MSE 170, CEE 220.',
        offered: '',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'M E 373',
      type: 'course',
      position: { x: 2261.362471615989, y: 1174.7357235821694 },
      data: {
        campus: 'Seattle',
        id: 'M E 373',
        name: 'Introduction to System Dynamics',
        credits: '5',
        description:
          'Mathematical modeling, analysis, and design of physical dynamic systems involving energy storage and transfer by lumped-parameter linear elements. Time-domain response by analytical methods and numeric simulation. Laboratory experiments.',
        prerequisite:
          'either AMATH 351 or MATH 207; either AMATH 352 or MATH 208; E E 215; M E 230.',
        offered: '',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'M E 395',
      type: 'course',
      position: { x: 1857.3625281547445, y: 794.9857235821693 },
      data: {
        campus: 'Seattle',
        id: 'M E 395',
        name: 'Introduction to Mechanical Design',
        credits: '4',
        description:
          'Design process and methodology; decision making; optimization techniques; project planning; engineering economics; probabilistic and statistical aspects of mechanical design; ethical and legal issues.',
        prerequisite:
          'M E 123; M E 323; IND E 315 or MATH 390/STAT 390 either of which may be taken concurrently.',
        offered: '',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'M E 355',
      type: 'course',
      position: { x: 2538.3624844965584, y: 328.23572358216927 },
      data: {
        campus: 'Seattle',
        id: 'M E 355',
        name: 'Introduction to Manufacturing Processes',
        credits: '4',
        description:
          'Study of manufacturing processes, including interrelationships between the properties of the material, the manufacturing process, and the design of components. Interpretation of experimental data, comparison of measurements to numerical/analytical predictions, and formal, engineering report writing.',
        prerequisite: 'M E 354.',
        offered: '',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'M E 356',
      type: 'course',
      position: { x: 2544.362012420261, y: 165.73572358216927 },
      data: {
        campus: 'Seattle',
        id: 'M E 356',
        name: 'Machine Design Analysis',
        credits: '4',
        description:
          'Analysis, design, and selection of mechanical and electromechanical subsystems and elements, such as gears, linkages, cams, motors, and bearings.',
        prerequisite: 'M E 354.',
        offered: '',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'M E 374',
      type: 'course',
      position: { x: 2588.3618093283044, y: 1391.235723582169 },
      data: {
        campus: 'Seattle',
        id: 'M E 374',
        name: 'Systems Dynamic Analysis and Design',
        credits: '5',
        description:
          'Extension of M E 373. Frequency response analysis, generalized impedance concepts and applications, Fourier series analysis and Laplace transform techniques. Modeling and analysis of electromechanical actuators and rotating machinery. Laboratory experiments and design projects.',
        prerequisite: 'AMATH 301; M E 373.',
        offered: '',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'M E 495',
      type: 'course',
      position: { x: 2258.362300874968, y: 797.9857235821693 },
      data: {
        campus: 'Seattle',
        id: 'M E 495',
        name: 'Mechanical Engineering Design',
        credits: '4',
        description:
          'Design laboratory involving the identification and synthesis of engineering factors to plan and achieve specific project goals. Current literature and prerequisite texts used as reference sources.',
        prerequisite: 'M E 395.',
        offered: '',
        nodeStatus: 'over-one-away',
        nodeConnected: !1,
      },
    },
    {
      id: 'A A 210 -> CEE 220',
      source: 'A A 210',
      target: 'CEE 220',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'PHYS 122 -> E E 215',
      source: 'PHYS 122',
      target: 'E E 215',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'A A 210 -> M E 230',
      source: 'A A 210',
      target: 'M E 230',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'AMATH 301 -> M E 333',
      source: 'AMATH 301',
      target: 'M E 333',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'M E 323 -> M E 333',
      source: 'M E 323',
      target: 'M E 333',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'M E 354 -> M E 355',
      source: 'M E 354',
      target: 'M E 355',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'M E 354 -> M E 356',
      source: 'M E 354',
      target: 'M E 356',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'E E 215 -> M E 373',
      source: 'E E 215',
      target: 'M E 373',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'M E 230 -> M E 373',
      source: 'M E 230',
      target: 'M E 373',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'AMATH 301 -> M E 374',
      source: 'AMATH 301',
      target: 'M E 374',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'M E 373 -> M E 374',
      source: 'M E 373',
      target: 'M E 374',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'M E 123 -> M E 395',
      source: 'M E 123',
      target: 'M E 395',
      className: 'ready',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'M E 323 -> M E 395',
      source: 'M E 323',
      target: 'M E 395',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'M E 395 -> M E 495',
      source: 'M E 395',
      target: 'M E 495',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 124 -> MATH 125',
      source: 'MATH 124',
      target: 'MATH 125',
      className: 'ready',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 125 -> MATH 126',
      source: 'MATH 125',
      target: 'MATH 126',
      className: 'one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 125 -> MATH 207',
      source: 'MATH 125',
      target: 'MATH 207',
      className: 'one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 126 -> MATH 208',
      source: 'MATH 126',
      target: 'MATH 208',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 126 -> A A 210',
      source: 'MATH 126',
      target: 'A A 210',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'PHYS 121 -> A A 210',
      source: 'PHYS 121',
      target: 'A A 210',
      className: 'one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 125 -> AMATH 301',
      source: 'MATH 125',
      target: 'AMATH 301',
      className: 'one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 125 -> AMATH 351',
      source: 'MATH 125',
      target: 'AMATH 351',
      className: 'one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 126 -> AMATH 352',
      source: 'MATH 126',
      target: 'AMATH 352',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'OR-hTI35R5FbO3fPa0FkYf1j -> AMATH 353',
      source: 'OR-hTI35R5FbO3fPa0FkYf1j',
      target: 'AMATH 353',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'AMATH 351 -> OR-hTI35R5FbO3fPa0FkYf1j',
      source: 'AMATH 351',
      target: 'OR-hTI35R5FbO3fPa0FkYf1j',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 207 -> OR-hTI35R5FbO3fPa0FkYf1j',
      source: 'MATH 207',
      target: 'OR-hTI35R5FbO3fPa0FkYf1j',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'CHEM 123 -> CHEM 152',
      source: 'CHEM 124',
      target: 'CHEM 152',
      className: 'ready',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 126 -> AND-2MGbF6xiUnrjZNactyECT',
      source: 'MATH 126',
      target: 'AND-2MGbF6xiUnrjZNactyECT',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 207 -> OR-qR0ZeX8TFhw_v0xeAiGFs',
      source: 'MATH 207',
      target: 'OR-qR0ZeX8TFhw_v0xeAiGFs',
      className: 'over-one-away',
      label: 'CC',
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      labelBgPadding: [2, 2],
      labelBgBorderRadius: 4,
      data: { concurrent: !0 },
    },
    {
      id: 'AMATH 351 -> OR-qR0ZeX8TFhw_v0xeAiGFs',
      source: 'AMATH 351',
      target: 'OR-qR0ZeX8TFhw_v0xeAiGFs',
      className: 'over-one-away',
      label: 'CC',
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      labelBgPadding: [2, 2],
      labelBgBorderRadius: 4,
      data: { concurrent: !0 },
    },
    {
      id: 'CHEM 123 -> M E 323',
      source: 'CHEM 124',
      target: 'M E 323',
      className: 'ready',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 126 -> M E 323',
      source: 'MATH 126',
      target: 'M E 323',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'PHYS 121 -> M E 323',
      source: 'PHYS 121',
      target: 'M E 323',
      className: 'one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'M E 333 -> M E 331',
      source: 'M E 333',
      target: 'M E 331',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MSE 170 -> M E 354',
      source: 'MSE 170',
      target: 'M E 354',
      className: 'one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'CEE 220 -> M E 354',
      source: 'CEE 220',
      target: 'M E 354',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'OR-NcdJvmIRQoGpbDutNlZki -> M E 373',
      source: 'OR-NcdJvmIRQoGpbDutNlZki',
      target: 'M E 373',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'AMATH 352 -> OR-NcdJvmIRQoGpbDutNlZki',
      source: 'AMATH 352',
      target: 'OR-NcdJvmIRQoGpbDutNlZki',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 208 -> OR-NcdJvmIRQoGpbDutNlZki',
      source: 'MATH 208',
      target: 'OR-NcdJvmIRQoGpbDutNlZki',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'IND E 315 -> OR-VXfYd0P7Ad4ZZRmehvO_9',
      source: 'IND E 315',
      target: 'OR-VXfYd0P7Ad4ZZRmehvO_9',
      className: 'over-one-away',
      label: 'CC',
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      labelBgPadding: [2, 2],
      labelBgBorderRadius: 4,
      data: { concurrent: !0 },
    },
    {
      id: 'STAT 390 -> OR-VXfYd0P7Ad4ZZRmehvO_9',
      source: 'STAT 390',
      target: 'OR-VXfYd0P7Ad4ZZRmehvO_9',
      className: 'over-one-away',
      label: 'CC',
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      labelBgPadding: [2, 2],
      labelBgBorderRadius: 4,
      data: { concurrent: !0 },
    },
    {
      id: 'MATH 207 -> MATH 209',
      source: 'MATH 207',
      target: 'MATH 209',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 208 -> MATH 209',
      source: 'MATH 208',
      target: 'MATH 209',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 126 -> MATH 224',
      source: 'MATH 126',
      target: 'MATH 224',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'CHEM 123 -> MSE 170',
      source: 'CHEM 124',
      target: 'MSE 170',
      className: 'ready',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 124 -> PHYS 121',
      source: 'MATH 124',
      target: 'PHYS 121',
      className: 'ready',
      label: 'CC',
      labelBgPadding: [2, 2],
      labelBgBorderRadius: 4,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !0 },
    },
    {
      id: 'PHYS 121 -> PHYS 122',
      source: 'PHYS 121',
      target: 'PHYS 122',
      className: 'one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 125 -> PHYS 122',
      source: 'MATH 125',
      target: 'PHYS 122',
      className: 'one-away',
      label: 'CC',
      labelBgPadding: [2, 2],
      labelBgBorderRadius: 4,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !0 },
    },
    {
      id: 'PHYS 122 -> PHYS 123',
      source: 'PHYS 122',
      target: 'PHYS 123',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'MATH 126 -> PHYS 123',
      source: 'MATH 126',
      target: 'PHYS 123',
      className: 'over-one-away',
      label: 'CC',
      labelBgPadding: [2, 2],
      labelBgBorderRadius: 4,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !0 },
    },
    {
      id: 'MATH 126 -> STAT 390',
      source: 'MATH 126',
      target: 'STAT 390',
      className: 'over-one-away',
      label: null,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      animated: !1,
      data: { concurrent: !1 },
    },
    {
      id: 'OR-VXfYd0P7Ad4ZZRmehvO_9 -> M E 395',
      source: 'OR-VXfYd0P7Ad4ZZRmehvO_9',
      target: 'M E 395',
      className: 'over-one-away',
      label: null,
      animated: !1,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      data: { concurrent: !1 },
    },
    {
      id: 'OR-qR0ZeX8TFhw_v0xeAiGFs -> AND-2MGbF6xiUnrjZNactyECT',
      source: 'OR-qR0ZeX8TFhw_v0xeAiGFs',
      target: 'AND-2MGbF6xiUnrjZNactyECT',
      className: 'over-one-away',
      label: null,
      animated: !1,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      data: { concurrent: !1 },
    },
    {
      id: 'AND-2MGbF6xiUnrjZNactyECT -> E E 215',
      source: 'AND-2MGbF6xiUnrjZNactyECT',
      target: 'E E 215',
      className: 'over-one-away',
      label: null,
      animated: !1,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      data: { concurrent: !1 },
    },
    {
      id: 'OR-hTI35R5FbO3fPa0FkYf1j -> M E 373',
      source: 'OR-hTI35R5FbO3fPa0FkYf1j',
      target: 'M E 373',
      className: 'over-one-away',
      label: null,
      animated: !1,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      data: { concurrent: !1 },
    },
    {
      id: 'OR-hTI35R5FbO3fPa0FkYf1j -> M E 333',
      source: 'OR-hTI35R5FbO3fPa0FkYf1j',
      target: 'M E 333',
      className: 'over-one-away',
      label: null,
      animated: !1,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      data: { concurrent: !1 },
    },
    {
      id: 'OR-hTI35R5FbO3fPa0FkYf1j -> IND E 315',
      source: 'OR-hTI35R5FbO3fPa0FkYf1j',
      target: 'IND E 315',
      className: 'over-one-away',
      label: null,
      animated: !1,
      sourceHandle: null,
      targetHandle: null,
      type: 'custom',
      data: { concurrent: !1 },
    },
  ];
var B8 = { version: L8, elements: H8 };
Cg.render(
  L(Kc.StrictMode, { children: L(I8, { initialElements: B8.elements }) }),
  document.getElementById('root'),
);
