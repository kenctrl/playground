/*! For license information please see app-21c537d507356d9eb217.js.LICENSE.txt */
(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [143],
  {
    1506: function (t) {
      (t.exports = function (t) {
        if (void 0 === t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    3552: function (t, e, n) {
      'use strict';
      function r(t, e) {
        return (
          (r =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          r(t, e)
        );
      }
      function o(t, e) {
        (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), r(t, e);
      }
      n.d(e, {
        Z: function () {
          return o;
        },
      });
    },
    18: function (t, e, n) {
      'use strict';
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function o(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return r(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (t) {
              if ('string' == typeof t) return r(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                'Object' === n && t.constructor && (n = t.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(t)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(t, e)
                  : void 0
              );
            }
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      n.d(e, {
        Z: function () {
          return o;
        },
      });
    },
    7154: function (t) {
      function e() {
        return (
          (t.exports = e =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          e.apply(this, arguments)
        );
      }
      (t.exports = e), (t.exports.default = t.exports), (t.exports.__esModule = !0);
    },
    5354: function (t, e, n) {
      var r = n(9489);
      (t.exports = function (t, e) {
        (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), r(t, e);
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    5318: function (t) {
      (t.exports = function (t) {
        return t && t.__esModule ? t : { default: t };
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    862: function (t, e, n) {
      var r = n(8).default;
      function o(t) {
        if ('function' != typeof WeakMap) return null;
        var e = new WeakMap(),
          n = new WeakMap();
        return (o = function (t) {
          return t ? n : e;
        })(t);
      }
      (t.exports = function (t, e) {
        if (!e && t && t.__esModule) return t;
        if (null === t || ('object' !== r(t) && 'function' != typeof t)) return { default: t };
        var n = o(e);
        if (n && n.has(t)) return n.get(t);
        var a = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in t)
          if ('default' !== s && Object.prototype.hasOwnProperty.call(t, s)) {
            var u = i ? Object.getOwnPropertyDescriptor(t, s) : null;
            u && (u.get || u.set) ? Object.defineProperty(a, s, u) : (a[s] = t[s]);
          }
        return (a.default = t), n && n.set(t, a), a;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    7316: function (t) {
      (t.exports = function (t, e) {
        if (null == t) return {};
        var n,
          r,
          o = {},
          a = Object.keys(t);
        for (r = 0; r < a.length; r++) (n = a[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    9489: function (t) {
      function e(n, r) {
        return (
          (t.exports = e =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          e(n, r)
        );
      }
      (t.exports = e), (t.exports.default = t.exports), (t.exports.__esModule = !0);
    },
    8: function (t) {
      function e(n) {
        return (
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? ((t.exports = e = function (t) {
                return typeof t;
              }),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0))
            : ((t.exports = e = function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              }),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0)),
          e(n)
        );
      }
      (t.exports = e), (t.exports.default = t.exports), (t.exports.__esModule = !0);
    },
    9228: function (t) {
      t.exports = (function () {
        var t = !1;
        -1 !== navigator.appVersion.indexOf('MSIE 10') && (t = !0);
        var e,
          n = [],
          r = 'object' == typeof document && document,
          o = t ? r.documentElement.doScroll('left') : r.documentElement.doScroll,
          a = 'DOMContentLoaded',
          i = r && (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState);
        return (
          !i &&
            r &&
            r.addEventListener(
              a,
              (e = function () {
                for (r.removeEventListener(a, e), i = 1; (e = n.shift()); ) e();
              }),
            ),
          function (t) {
            i ? setTimeout(t, 0) : n.push(t);
          }
        );
      })();
    },
    2393: function (t, e) {
      'use strict';
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        r = function (t) {
          var e = t.location,
            n = e.search,
            r = e.hash,
            o = e.href,
            a = e.origin,
            s = e.protocol,
            u = e.host,
            c = e.hostname,
            l = e.port,
            p = t.location.pathname;
          !p && o && i && (p = new URL(o).pathname);
          return {
            pathname: encodeURI(decodeURI(p)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: s,
            host: u,
            hostname: c,
            port: l,
            state: t.history.state,
            key: (t.history.state && t.history.state.key) || 'initial',
          };
        },
        o = function (t, e) {
          var o = [],
            a = r(t),
            i = !1,
            s = function () {};
          return {
            get location() {
              return a;
            },
            get transitioning() {
              return i;
            },
            _onTransitionComplete: function () {
              (i = !1), s();
            },
            listen: function (e) {
              o.push(e);
              var n = function () {
                (a = r(t)), e({ location: a, action: 'POP' });
              };
              return (
                t.addEventListener('popstate', n),
                function () {
                  t.removeEventListener('popstate', n),
                    (o = o.filter(function (t) {
                      return t !== e;
                    }));
                }
              );
            },
            navigate: function (e) {
              var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                c = u.state,
                l = u.replace,
                p = void 0 !== l && l;
              if ('number' == typeof e) t.history.go(e);
              else {
                c = n({}, c, { key: Date.now() + '' });
                try {
                  i || p ? t.history.replaceState(c, null, e) : t.history.pushState(c, null, e);
                } catch (d) {
                  t.location[p ? 'replace' : 'assign'](e);
                }
              }
              (a = r(t)), (i = !0);
              var f = new Promise(function (t) {
                return (s = t);
              });
              return (
                o.forEach(function (t) {
                  return t({ location: a, action: 'PUSH' });
                }),
                f
              );
            },
          };
        },
        a = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '/',
            e = t.indexOf('?'),
            n = { pathname: e > -1 ? t.substr(0, e) : t, search: e > -1 ? t.substr(e) : '' },
            r = 0,
            o = [n],
            a = [null];
          return {
            get location() {
              return o[r];
            },
            addEventListener: function (t, e) {},
            removeEventListener: function (t, e) {},
            history: {
              get entries() {
                return o;
              },
              get index() {
                return r;
              },
              get state() {
                return a[r];
              },
              pushState: function (t, e, n) {
                var i = n.split('?'),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? '' : u;
                r++, o.push({ pathname: s, search: c.length ? '?' + c : c }), a.push(t);
              },
              replaceState: function (t, e, n) {
                var i = n.split('?'),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? '' : u;
                (o[r] = { pathname: s, search: c }), (a[r] = t);
              },
              go: function (t) {
                var e = r + t;
                e < 0 || e > a.length - 1 || (r = e);
              },
            },
          };
        },
        i = !('undefined' == typeof window || !window.document || !window.document.createElement),
        s = o(i ? window : a()),
        u = s.navigate;
      e.V5 = s;
    },
    2098: function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.shallowCompare = e.validateRedirect = e.insertParams = e.resolve = e.match = e.pick = e.startsWith = void 0);
      var r,
        o = n(1143),
        a = (r = o) && r.__esModule ? r : { default: r };
      var i = function (t, e) {
          return t.substr(0, e.length) === e;
        },
        s = function (t, e) {
          for (
            var n = void 0,
              r = void 0,
              o = e.split('?')[0],
              i = d(o),
              s = '' === i[0],
              c = f(t),
              p = 0,
              h = c.length;
            p < h;
            p++
          ) {
            var g = !1,
              m = c[p].route;
            if (m.default) r = { route: m, params: {}, uri: e };
            else {
              for (var y = d(m.path), w = {}, b = Math.max(i.length, y.length), P = 0; P < b; P++) {
                var E = y[P],
                  S = i[P];
                if (l(E)) {
                  w[E.slice(1) || '*'] = i.slice(P).map(decodeURIComponent).join('/');
                  break;
                }
                if (void 0 === S) {
                  g = !0;
                  break;
                }
                var _ = u.exec(E);
                if (_ && !s) {
                  -1 === v.indexOf(_[1]) || (0, a.default)(!1);
                  var R = decodeURIComponent(S);
                  w[_[1]] = R;
                } else if (E !== S) {
                  g = !0;
                  break;
                }
              }
              if (!g) {
                n = { route: m, params: w, uri: '/' + i.slice(0, P).join('/') };
                break;
              }
            }
          }
          return n || r || null;
        },
        u = /^:(.+)/,
        c = function (t) {
          return u.test(t);
        },
        l = function (t) {
          return t && '*' === t[0];
        },
        p = function (t, e) {
          return {
            route: t,
            score: t.default
              ? 0
              : d(t.path).reduce(function (t, e) {
                  return (
                    (t += 4),
                    !(function (t) {
                      return '' === t;
                    })(e)
                      ? c(e)
                        ? (t += 2)
                        : l(e)
                        ? (t -= 5)
                        : (t += 3)
                      : (t += 1),
                    t
                  );
                }, 0),
            index: e,
          };
        },
        f = function (t) {
          return t.map(p).sort(function (t, e) {
            return t.score < e.score ? 1 : t.score > e.score ? -1 : t.index - e.index;
          });
        },
        d = function (t) {
          return t.replace(/(^\/+|\/+$)/g, '').split('/');
        },
        h = function (t) {
          for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
            n[r - 1] = arguments[r];
          return (
            t +
            ((n = n.filter(function (t) {
              return t && t.length > 0;
            })) && n.length > 0
              ? '?' + n.join('&')
              : '')
          );
        },
        v = ['uri', 'path'];
      (e.startsWith = i),
        (e.pick = s),
        (e.match = function (t, e) {
          return s([{ path: t }], e);
        }),
        (e.resolve = function (t, e) {
          if (i(t, '/')) return t;
          var n = t.split('?'),
            r = n[0],
            o = n[1],
            a = e.split('?')[0],
            s = d(r),
            u = d(a);
          if ('' === s[0]) return h(a, o);
          if (!i(s[0], '.')) {
            var c = u.concat(s).join('/');
            return h(('/' === a ? '' : '/') + c, o);
          }
          for (var l = u.concat(s), p = [], f = 0, v = l.length; f < v; f++) {
            var g = l[f];
            '..' === g ? p.pop() : '.' !== g && p.push(g);
          }
          return h('/' + p.join('/'), o);
        }),
        (e.insertParams = function (t, e) {
          var n = t.split('?'),
            r = n[0],
            o = n[1],
            a = void 0 === o ? '' : o,
            i =
              '/' +
              d(r)
                .map(function (t) {
                  var n = u.exec(t);
                  return n ? e[n[1]] : t;
                })
                .join('/'),
            s = e.location,
            c = (s = void 0 === s ? {} : s).search,
            l = (void 0 === c ? '' : c).split('?')[1] || '';
          return (i = h(i, a, l));
        }),
        (e.validateRedirect = function (t, e) {
          var n = function (t) {
            return c(t);
          };
          return d(t).filter(n).sort().join('/') === d(e).filter(n).sort().join('/');
        }),
        (e.shallowCompare = function (t, e) {
          var n = Object.keys(t);
          return (
            n.length === Object.keys(e).length &&
            n.every(function (n) {
              return e.hasOwnProperty(n) && t[n] === e[n];
            })
          );
        });
    },
    4811: function (t) {
      'use strict';
      var e = function (t, e) {
        if ('string' != typeof t && !Array.isArray(t))
          throw new TypeError('Expected the input to be `string | string[]`');
        e = Object.assign({ pascalCase: !1 }, e);
        var n;
        return (
          (t = Array.isArray(t)
            ? t
                .map(function (t) {
                  return t.trim();
                })
                .filter(function (t) {
                  return t.length;
                })
                .join('-')
            : t.trim()),
          0 === t.length
            ? ''
            : 1 === t.length
            ? e.pascalCase
              ? t.toUpperCase()
              : t.toLowerCase()
            : (t !== t.toLowerCase() &&
                (t = (function (t) {
                  for (var e = !1, n = !1, r = !1, o = 0; o < t.length; o++) {
                    var a = t[o];
                    e && /[a-zA-Z]/.test(a) && a.toUpperCase() === a
                      ? ((t = t.slice(0, o) + '-' + t.slice(o)), (e = !1), (r = n), (n = !0), o++)
                      : n && r && /[a-zA-Z]/.test(a) && a.toLowerCase() === a
                      ? ((t = t.slice(0, o - 1) + '-' + t.slice(o - 1)),
                        (r = n),
                        (n = !1),
                        (e = !0))
                      : ((e = a.toLowerCase() === a && a.toUpperCase() !== a),
                        (r = n),
                        (n = a.toUpperCase() === a && a.toLowerCase() !== a));
                  }
                  return t;
                })(t)),
              (t = t
                .replace(/^[_.\- ]+/, '')
                .toLowerCase()
                .replace(/[_.\- ]+(\w|$)/g, function (t, e) {
                  return e.toUpperCase();
                })
                .replace(/\d+(\w|$)/g, function (t) {
                  return t.toUpperCase();
                })),
              (n = t),
              e.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n)
        );
      };
      (t.exports = e), (t.exports.default = e);
    },
    4041: function () {
      'use strict';
      var t,
        e,
        n = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        r =
          ((t = ['', '']),
          (e = ['', '']),
          Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } })));
      function o(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      var a = (function () {
          function t() {
            for (var e = this, n = arguments.length, r = Array(n), a = 0; a < n; a++)
              r[a] = arguments[a];
            return (
              o(this, t),
              (this.tag = function (t) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                  r[o - 1] = arguments[o];
                return 'function' == typeof t
                  ? e.interimTag.bind(e, t)
                  : 'string' == typeof t
                  ? e.transformEndResult(t)
                  : ((t = t.map(e.transformString.bind(e))),
                    e.transformEndResult(t.reduce(e.processSubstitutions.bind(e, r))));
              }),
              r.length > 0 && Array.isArray(r[0]) && (r = r[0]),
              (this.transformers = r.map(function (t) {
                return 'function' == typeof t ? t() : t;
              })),
              this.tag
            );
          }
          return (
            n(t, [
              {
                key: 'interimTag',
                value: function (t, e) {
                  for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
                    o[a - 2] = arguments[a];
                  return this.tag(r, t.apply(void 0, [e].concat(o)));
                },
              },
              {
                key: 'processSubstitutions',
                value: function (t, e, n) {
                  var r = this.transformSubstitution(t.shift(), e);
                  return ''.concat(e, r, n);
                },
              },
              {
                key: 'transformString',
                value: function (t) {
                  return this.transformers.reduce(function (t, e) {
                    return e.onString ? e.onString(t) : t;
                  }, t);
                },
              },
              {
                key: 'transformSubstitution',
                value: function (t, e) {
                  return this.transformers.reduce(function (t, n) {
                    return n.onSubstitution ? n.onSubstitution(t, e) : t;
                  }, t);
                },
              },
              {
                key: 'transformEndResult',
                value: function (t) {
                  return this.transformers.reduce(function (t, e) {
                    return e.onEndResult ? e.onEndResult(t) : t;
                  }, t);
                },
              },
            ]),
            t
          );
        })(),
        i = a,
        s = { separator: '', conjunction: '', serial: !1 },
        u = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
          return {
            onSubstitution: function (e, n) {
              if (Array.isArray(e)) {
                var r = e.length,
                  o = t.separator,
                  a = t.conjunction,
                  i = t.serial,
                  s = n.match(/(\n?[^\S\n]+)$/);
                if (((e = s ? e.join(o + s[1]) : e.join(o + ' ')), a && r > 1)) {
                  var u = e.lastIndexOf(o);
                  e = e.slice(0, u) + (i ? o : '') + ' ' + a + e.slice(u + 1);
                }
              }
              return e;
            },
          };
        };
      function c(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
          return n;
        }
        return Array.from(t);
      }
      var l = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'initial';
          return {
            onEndResult: function (e) {
              if ('initial' === t) {
                var n = e.match(/^[^\S\n]*(?=\S)/gm),
                  r =
                    n &&
                    Math.min.apply(
                      Math,
                      c(
                        n.map(function (t) {
                          return t.length;
                        }),
                      ),
                    );
                if (r) {
                  var o = new RegExp('^.{' + r + '}', 'gm');
                  return e.replace(o, '');
                }
                return e;
              }
              if ('all' === t) return e.replace(/^[^\S\n]+/gm, '');
              throw new Error('Unknown type: ' + t);
            },
          };
        },
        p = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
          return {
            onEndResult: function (e) {
              if ('' === t) return e.trim();
              if ('start' === (t = t.toLowerCase()) || 'left' === t) return e.replace(/^\s*/, '');
              if ('end' === t || 'right' === t) return e.replace(/\s*$/, '');
              throw new Error('Side not supported: ' + t);
            },
          };
        },
        f =
          (new i(u({ separator: ',' }), l, p),
          new i(u({ separator: ',', conjunction: 'and' }), l, p),
          new i(u({ separator: ',', conjunction: 'or' }), l, p),
          function (t) {
            return {
              onSubstitution: function (e, n) {
                if (null == t || 'string' != typeof t)
                  throw new Error('You need to specify a string character to split by.');
                return 'string' == typeof e && e.includes(t) && (e = e.split(t)), e;
              },
            };
          }),
        d = function (t) {
          return null != t && !Number.isNaN(t) && 'boolean' != typeof t;
        },
        h = function () {
          return {
            onSubstitution: function (t) {
              return Array.isArray(t) ? t.filter(d) : d(t) ? t : '';
            },
          };
        },
        v =
          (new i(f('\n'), h, u, l, p),
          function (t, e) {
            return {
              onSubstitution: function (n, r) {
                if (null == t || null == e)
                  throw new Error('replaceSubstitutionTransformer requires at least 2 arguments.');
                return null == n ? n : n.toString().replace(t, e);
              },
            };
          }),
        g =
          (new i(
            f('\n'),
            u,
            l,
            p,
            v(/&/g, '&amp;'),
            v(/</g, '&lt;'),
            v(/>/g, '&gt;'),
            v(/"/g, '&quot;'),
            v(/'/g, '&#x27;'),
            v(/`/g, '&#x60;'),
          ),
          function (t, e) {
            return {
              onEndResult: function (n) {
                if (null == t || null == e)
                  throw new Error('replaceResultTransformer requires at least 2 arguments.');
                return n.replace(t, e);
              },
            };
          });
      new i(g(/(?:\n(?:\s*))+/g, ' '), p),
        new i(g(/(?:\n\s*)/g, ''), p),
        new i(u({ separator: ',' }), g(/(?:\s+)/g, ' '), p),
        new i(u({ separator: ',', conjunction: 'or' }), g(/(?:\s+)/g, ' '), p),
        new i(u({ separator: ',', conjunction: 'and' }), g(/(?:\s+)/g, ' '), p),
        new i(u, l, p),
        new i(u, g(/(?:\s+)/g, ' '), p),
        new i(l, p),
        new i(l('all'), p);
    },
    6494: function (t) {
      'use strict';
      t.exports = Object.assign;
    },
    8037: function (t, e, n) {
      'use strict';
      var r = n(5318);
      (e.dq = h),
        (e.mc = function (t) {
          return h(t, v());
        }),
        (e.c4 = e.ZP = void 0);
      var o = r(n(7316)),
        a = r(n(1506)),
        i = r(n(5354)),
        s = r(n(7154)),
        u = r(n(5697)),
        c = r(n(7294)),
        l = n(9499),
        p = n(2098),
        f = n(1752);
      e.cP = f.parsePath;
      var d = function (t) {
        return null == t ? void 0 : t.startsWith('/');
      };
      function h(t, e) {
        var n, r;
        if ((void 0 === e && (e = g()), !m(t))) return t;
        if (t.startsWith('./') || t.startsWith('../')) return t;
        var o = null !== (n = null !== (r = e) && void 0 !== r ? r : v()) && void 0 !== n ? n : '/';
        return (
          '' +
          (null != o && o.endsWith('/') ? o.slice(0, -1) : o) +
          (t.startsWith('/') ? t : '/' + t)
        );
      }
      var v = function () {
          return '';
        },
        g = function () {
          return '';
        },
        m = function (t) {
          return t && !t.startsWith('http://') && !t.startsWith('https://') && !t.startsWith('//');
        };
      var y = function (t, e) {
          return 'number' == typeof t
            ? t
            : m(t)
            ? d(t)
              ? h(t)
              : (function (t, e) {
                  return d(t) ? t : (0, p.resolve)(t, e);
                })(t, e)
            : t;
        },
        w = {
          activeClassName: u.default.string,
          activeStyle: u.default.object,
          partiallyActive: u.default.bool,
        };
      function b(t) {
        return c.default.createElement(l.Location, null, function (e) {
          var n = e.location;
          return c.default.createElement(P, (0, s.default)({}, t, { _location: n }));
        });
      }
      var P = (function (t) {
        function e(e) {
          var n;
          (n = t.call(this, e) || this).defaultGetProps = function (t) {
            var e = t.isPartiallyCurrent,
              r = t.isCurrent;
            return (n.props.partiallyActive ? e : r)
              ? {
                  className: [n.props.className, n.props.activeClassName].filter(Boolean).join(' '),
                  style: (0, s.default)({}, n.props.style, n.props.activeStyle),
                }
              : null;
          };
          var r = !1;
          return (
            'undefined' != typeof window && window.IntersectionObserver && (r = !0),
            (n.state = { IOSupported: r }),
            (n.handleRef = n.handleRef.bind((0, a.default)(n))),
            n
          );
        }
        (0, i.default)(e, t);
        var n = e.prototype;
        return (
          (n._prefetch = function () {
            var t = window.location.pathname;
            this.props._location &&
              this.props._location.pathname &&
              (t = this.props._location.pathname);
            var e = y(this.props.to, t),
              n = (0, f.parsePath)(e).pathname;
            t !== n && ___loader.enqueue(n);
          }),
          (n.componentDidUpdate = function (t, e) {
            this.props.to === t.to || this.state.IOSupported || this._prefetch();
          }),
          (n.componentDidMount = function () {
            this.state.IOSupported || this._prefetch();
          }),
          (n.componentWillUnmount = function () {
            if (this.io) {
              var t = this.io,
                e = t.instance,
                n = t.el;
              e.unobserve(n), e.disconnect();
            }
          }),
          (n.handleRef = function (t) {
            var e,
              n,
              r,
              o = this;
            this.props.innerRef && this.props.innerRef.hasOwnProperty('current')
              ? (this.props.innerRef.current = t)
              : this.props.innerRef && this.props.innerRef(t),
              this.state.IOSupported &&
                t &&
                (this.io =
                  ((e = t),
                  (n = function () {
                    o._prefetch();
                  }),
                  (r = new window.IntersectionObserver(function (t) {
                    t.forEach(function (t) {
                      e === t.target &&
                        (t.isIntersecting || t.intersectionRatio > 0) &&
                        (r.unobserve(e), r.disconnect(), n());
                    });
                  })).observe(e),
                  { instance: r, el: e }));
          }),
          (n.render = function () {
            var t = this,
              e = this.props,
              n = e.to,
              r = e.getProps,
              a = void 0 === r ? this.defaultGetProps : r,
              i = e.onClick,
              u = e.onMouseEnter,
              p = (e.activeClassName, e.activeStyle, e.innerRef, e.partiallyActive, e.state),
              d = e.replace,
              h = e._location,
              v = (0, o.default)(e, [
                'to',
                'getProps',
                'onClick',
                'onMouseEnter',
                'activeClassName',
                'activeStyle',
                'innerRef',
                'partiallyActive',
                'state',
                'replace',
                '_location',
              ]);
            var g = y(n, h.pathname);
            return m(g)
              ? c.default.createElement(
                  l.Link,
                  (0, s.default)(
                    {
                      to: g,
                      state: p,
                      getProps: a,
                      innerRef: this.handleRef,
                      onMouseEnter: function (t) {
                        u && u(t), ___loader.hovering((0, f.parsePath)(g).pathname);
                      },
                      onClick: function (e) {
                        if (
                          (i && i(e),
                          !(
                            0 !== e.button ||
                            t.props.target ||
                            e.defaultPrevented ||
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          ))
                        ) {
                          e.preventDefault();
                          var n = d,
                            r = encodeURI(g) === h.pathname;
                          'boolean' != typeof d && r && (n = !0),
                            window.___navigate(g, { state: p, replace: n });
                        }
                        return !0;
                      },
                    },
                    v,
                  ),
                )
              : c.default.createElement('a', (0, s.default)({ href: g }, v));
          }),
          e
        );
      })(c.default.Component);
      P.propTypes = (0, s.default)({}, w, {
        onClick: u.default.func,
        to: u.default.string.isRequired,
        replace: u.default.bool,
        state: u.default.object,
      });
      var E = c.default.forwardRef(function (t, e) {
        return c.default.createElement(b, (0, s.default)({ innerRef: e }, t));
      });
      e.ZP = E;
      e.c4 = function (t, e) {
        window.___navigate(y(t, window.location.pathname), e);
      };
    },
    1752: function (t, e) {
      'use strict';
      (e.__esModule = !0),
        (e.parsePath = function (t) {
          var e = t || '/',
            n = '',
            r = '',
            o = e.indexOf('#');
          -1 !== o && ((r = e.substr(o)), (e = e.substr(0, o)));
          var a = e.indexOf('?');
          -1 !== a && ((n = e.substr(a)), (e = e.substr(0, a)));
          return { pathname: e, search: '?' === n ? '' : n, hash: '#' === r ? '' : r };
        });
    },
    9679: function (t, e, n) {
      'use strict';
      e.p2 = e.$C = void 0;
      var r = n(1432);
      e.$C = r.ScrollHandler;
      var o = n(4855);
      e.p2 = o.useScrollRestoration;
    },
    1432: function (t, e, n) {
      'use strict';
      var r = n(862),
        o = n(5318);
      (e.__esModule = !0), (e.ScrollHandler = e.ScrollContext = void 0);
      var a = o(n(1506)),
        i = o(n(5354)),
        s = r(n(7294)),
        u = o(n(5697)),
        c = n(1142),
        l = s.createContext(new c.SessionStorage());
      (e.ScrollContext = l), (l.displayName = 'GatsbyScrollContext');
      var p = (function (t) {
        function e() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((e =
              t.call.apply(t, [this].concat(r)) || this)._stateStorage = new c.SessionStorage()),
            (e._isTicking = !1),
            (e._latestKnownScrollY = 0),
            (e.scrollListener = function () {
              (e._latestKnownScrollY = window.scrollY),
                e._isTicking ||
                  ((e._isTicking = !0),
                  requestAnimationFrame(e._saveScroll.bind((0, a.default)(e))));
            }),
            (e.windowScroll = function (t, n) {
              e.shouldUpdateScroll(n, e.props) && window.scrollTo(0, t);
            }),
            (e.scrollToHash = function (t, n) {
              var r = document.getElementById(t.substring(1));
              r && e.shouldUpdateScroll(n, e.props) && r.scrollIntoView();
            }),
            (e.shouldUpdateScroll = function (t, n) {
              var r = e.props.shouldUpdateScroll;
              return !r || r.call((0, a.default)(e), t, n);
            }),
            e
          );
        }
        (0, i.default)(e, t);
        var n = e.prototype;
        return (
          (n._saveScroll = function () {
            var t = this.props.location.key || null;
            t && this._stateStorage.save(this.props.location, t, this._latestKnownScrollY),
              (this._isTicking = !1);
          }),
          (n.componentDidMount = function () {
            var t;
            window.addEventListener('scroll', this.scrollListener);
            var e = this.props.location,
              n = e.key,
              r = e.hash;
            n && (t = this._stateStorage.read(this.props.location, n)),
              t ? this.windowScroll(t, void 0) : r && this.scrollToHash(decodeURI(r), void 0);
          }),
          (n.componentWillUnmount = function () {
            window.removeEventListener('scroll', this.scrollListener);
          }),
          (n.componentDidUpdate = function (t) {
            var e,
              n = this.props.location,
              r = n.hash,
              o = n.key;
            o && (e = this._stateStorage.read(this.props.location, o)),
              r ? this.scrollToHash(decodeURI(r), t) : this.windowScroll(e, t);
          }),
          (n.render = function () {
            return s.createElement(l.Provider, { value: this._stateStorage }, this.props.children);
          }),
          e
        );
      })(s.Component);
      (e.ScrollHandler = p),
        (p.propTypes = {
          shouldUpdateScroll: u.default.func,
          children: u.default.element.isRequired,
          location: u.default.object.isRequired,
        });
    },
    1142: function (t, e) {
      'use strict';
      (e.__esModule = !0), (e.SessionStorage = void 0);
      var n = '___GATSBY_REACT_ROUTER_SCROLL',
        r = (function () {
          function t() {}
          var e = t.prototype;
          return (
            (e.read = function (t, e) {
              var r = this.getStateKey(t, e);
              try {
                var o = window.sessionStorage.getItem(r);
                return o ? JSON.parse(o) : 0;
              } catch (a) {
                return window && window[n] && window[n][r] ? window[n][r] : 0;
              }
            }),
            (e.save = function (t, e, r) {
              var o = this.getStateKey(t, e),
                a = JSON.stringify(r);
              try {
                window.sessionStorage.setItem(o, a);
              } catch (i) {
                (window && window[n]) || (window[n] = {}), (window[n][o] = JSON.parse(a));
              }
            }),
            (e.getStateKey = function (t, e) {
              var n = '@@scroll|' + t.pathname;
              return null == e ? n : n + '|' + e;
            }),
            t
          );
        })();
      e.SessionStorage = r;
    },
    4855: function (t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.useScrollRestoration = function (t) {
          var e = (0, a.useLocation)(),
            n = (0, o.useContext)(r.ScrollContext),
            i = (0, o.useRef)(null);
          return (
            (0, o.useLayoutEffect)(
              function () {
                if (i.current) {
                  var r = n.read(e, t);
                  i.current.scrollTo(0, r || 0);
                }
              },
              [e.key],
            ),
            {
              ref: i,
              onScroll: function () {
                i.current && n.save(e, t, i.current.scrollTop);
              },
            }
          );
        });
      var r = n(1432),
        o = n(7294),
        a = n(9499);
    },
    4999: function (t, e, n) {
      e.components = {
        'component---cache-caches-gatsby-plugin-offline-app-shell-js': function () {
          return n.e(306).then(n.bind(n, 1930));
        },
        'component---src-pages-404-js': function () {
          return Promise.all([n.e(98), n.e(883)]).then(n.bind(n, 9616));
        },
        'component---src-pages-archive-js': function () {
          return Promise.all([n.e(98), n.e(527)]).then(n.bind(n, 226));
        },
        'component---src-pages-index-js': function () {
          return Promise.all([n.e(98), n.e(678)]).then(n.bind(n, 5749));
        },
        'component---src-pages-pensieve-index-js': function () {
          return Promise.all([n.e(98), n.e(156)]).then(n.bind(n, 3174));
        },
        'component---src-pages-pensieve-tags-js': function () {
          return Promise.all([n.e(98), n.e(470)]).then(n.bind(n, 2981));
        },
        'component---src-templates-post-js': function () {
          return Promise.all([n.e(98), n.e(851)]).then(n.bind(n, 9857));
        },
        'component---src-templates-tag-js': function () {
          return Promise.all([n.e(98), n.e(969)]).then(n.bind(n, 5847));
        },
      };
    },
    5182: function (t, e, n) {
      t.exports = [
        { plugin: n(6988), options: { plugins: [] } },
        {
          plugin: n(992),
          options: {
            plugins: [],
            name: 'Brittany Chiang',
            short_name: 'Brittany Chiang',
            start_url: '/',
            background_color: '#020c1b',
            theme_color: '#0a192f',
            display: 'minimal-ui',
            icon: 'src/images/logo.png',
            legacy: !0,
            theme_color_in_head: !0,
            cache_busting_mode: 'query',
            crossOrigin: 'anonymous',
            include_favicon: !0,
            cacheDigest: 'dedd91ab2778735e31d0a7ccbb422fb7',
          },
        },
        { plugin: n(7996), options: { plugins: [] } },
        {
          plugin: n(3207),
          options: {
            plugins: [],
            maxWidth: 700,
            linkImagesToOriginal: !0,
            quality: 90,
            tracedSVG: {
              color: '#64ffda',
              turnPolicy: 'majority',
              turdSize: 100,
              optCurve: !0,
              optTolerance: 0.4,
              threshold: -1,
              blackOnWhite: !0,
              background: 'transparent',
            },
            showCaptions: !1,
            markdownCaptions: !1,
            sizeByPixelDensity: !1,
            backgroundColor: 'white',
            withWebp: !1,
            loading: 'lazy',
            disableBgImageOnAlpha: !1,
            disableBgImage: !1,
          },
        },
        {
          plugin: n(5854),
          options: {
            plugins: [],
            trackingId: 'UA-45666519-2',
            head: !1,
            anonymize: !1,
            respectDNT: !1,
            exclude: [],
            pageTransitionDelay: 0,
          },
        },
        { plugin: n(9037), options: { plugins: [] } },
      ];
    },
    7343: function (t, e, n) {
      var r = n(5182),
        o = n(8741).jN,
        a = o.getResourceURLsForPathname,
        i = o.loadPage,
        s = o.loadPageSync;
      (e.h = function (t, e, n, o) {
        void 0 === e && (e = {});
        var u = r.map(function (n) {
          if (n.plugin[t]) {
            (e.getResourceURLsForPathname = a), (e.loadPage = i), (e.loadPageSync = s);
            var r = n.plugin[t](e, n.options);
            return r && o && (e = o({ args: e, result: r, plugin: n })), r;
          }
        });
        return (u = u.filter(function (t) {
          return void 0 !== t;
        })).length > 0
          ? u
          : n
          ? [n]
          : [];
      }),
        (e.I = function (t, e, n) {
          return r.reduce(function (n, r) {
            return r.plugin[t]
              ? n.then(function () {
                  return r.plugin[t](e, r.options);
                })
              : n;
          }, Promise.resolve());
        });
    },
    8110: function (t, e, n) {
      'use strict';
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      var r = (function (t) {
        return (
          (t = t || Object.create(null)),
          {
            on: function (e, n) {
              (t[e] || (t[e] = [])).push(n);
            },
            off: function (e, n) {
              t[e] && t[e].splice(t[e].indexOf(n) >>> 0, 1);
            },
            emit: function (e, n) {
              (t[e] || []).slice().map(function (t) {
                t(n);
              }),
                (t['*'] || []).slice().map(function (t) {
                  t(e, n);
                });
            },
          }
        );
      })();
    },
    2257: function (t, e, n) {
      'use strict';
      n.d(e, {
        UD: function () {
          return p;
        },
        Cj: function () {
          return d;
        },
        GA: function () {
          return f;
        },
        DS: function () {
          return l;
        },
      });
      var r = n(2098),
        o = n(1578),
        a = function (t) {
          return void 0 === t
            ? t
            : '/' === t
            ? '/'
            : '/' === t.charAt(t.length - 1)
            ? t.slice(0, -1)
            : t;
        },
        i = new Map(),
        s = [],
        u = function (t) {
          var e = decodeURIComponent(t);
          return (0, o.Z)(e, decodeURIComponent('')).split('#')[0].split('?')[0];
        };
      function c(t) {
        return t.startsWith('/') || t.startsWith('https://') || t.startsWith('http://')
          ? t
          : new URL(t, window.location.href + (window.location.href.endsWith('/') ? '' : '/'))
              .pathname;
      }
      var l = function (t) {
          s = t;
        },
        p = function (t) {
          var e = h(t),
            n = s.map(function (t) {
              var e = t.path;
              return { path: t.matchPath, originalPath: e };
            }),
            o = (0, r.pick)(n, e);
          return o ? a(o.route.originalPath) : null;
        },
        f = function (t) {
          var e = h(t),
            n = s.map(function (t) {
              var e = t.path;
              return { path: t.matchPath, originalPath: e };
            }),
            o = (0, r.pick)(n, e);
          return o ? o.params : {};
        },
        d = function (t) {
          var e = u(c(t));
          if (i.has(e)) return i.get(e);
          var n = p(e);
          return n || (n = h(t)), i.set(e, n), n;
        },
        h = function (t) {
          var e = u(c(t));
          return '/index.html' === e && (e = '/'), (e = a(e));
        };
    },
    5444: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, {
          Link: function () {
            return o.ZP;
          },
          withAssetPrefix: function () {
            return o.mc;
          },
          withPrefix: function () {
            return o.dq;
          },
          graphql: function () {
            return d;
          },
          parsePath: function () {
            return o.cP;
          },
          navigate: function () {
            return o.c4;
          },
          useScrollRestoration: function () {
            return a.p2;
          },
          StaticQueryContext: function () {
            return c;
          },
          StaticQuery: function () {
            return p;
          },
          PageRenderer: function () {
            return s.a;
          },
          useStaticQuery: function () {
            return f;
          },
          prefetchPathname: function () {
            return u;
          },
        });
      var r = n(7294),
        o = n(8037),
        a = n(9679),
        i = n(861),
        s = n.n(i),
        u = n(8741).ZP.enqueue,
        c = r.createContext({});
      function l(t) {
        var e = t.staticQueryData,
          n = t.data,
          o = t.query,
          a = t.render,
          i = n ? n.data : e[o] && e[o].data;
        return r.createElement(
          r.Fragment,
          null,
          i && a(i),
          !i && r.createElement('div', null, 'Loading (StaticQuery)'),
        );
      }
      var p = function (t) {
          var e = t.data,
            n = t.query,
            o = t.render,
            a = t.children;
          return r.createElement(c.Consumer, null, function (t) {
            return r.createElement(l, { data: e, query: n, render: o || a, staticQueryData: t });
          });
        },
        f = function (t) {
          var e;
          r.useContext;
          var n = r.useContext(c);
          if (isNaN(Number(t)))
            throw new Error(
              "useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`" +
                t +
                '`);\n',
            );
          if (null !== (e = n[t]) && void 0 !== e && e.data) return n[t].data;
          throw new Error(
            'The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues',
          );
        };
      function d() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.',
        );
      }
    },
    8741: function (t, e, n) {
      'use strict';
      n.d(e, {
        uQ: function () {
          return l;
        },
        kL: function () {
          return y;
        },
        ZP: function () {
          return P;
        },
        hs: function () {
          return E;
        },
        jN: function () {
          return b;
        },
        N1: function () {
          return w;
        },
      });
      var r = n(3552),
        o = n(18),
        a = (function (t) {
          if ('undefined' == typeof document) return !1;
          var e = document.createElement('link');
          try {
            if (e.relList && 'function' == typeof e.relList.supports) return e.relList.supports(t);
          } catch (n) {
            return !1;
          }
          return !1;
        })('prefetch')
          ? function (t, e) {
              return new Promise(function (n, r) {
                if ('undefined' != typeof document) {
                  var o = document.createElement('link');
                  o.setAttribute('rel', 'prefetch'),
                    o.setAttribute('href', t),
                    Object.keys(e).forEach(function (t) {
                      o.setAttribute(t, e[t]);
                    }),
                    (o.onload = n),
                    (o.onerror = r),
                    (
                      document.getElementsByTagName('head')[0] ||
                      document.getElementsByName('script')[0].parentNode
                    ).appendChild(o);
                } else r();
              });
            }
          : function (t) {
              return new Promise(function (e, n) {
                var r = new XMLHttpRequest();
                r.open('GET', t, !0),
                  (r.onload = function () {
                    200 === r.status ? e() : n();
                  }),
                  r.send(null);
              });
            },
        i = {},
        s = function (t, e) {
          return new Promise(function (n) {
            i[t]
              ? n()
              : a(t, e)
                  .then(function () {
                    n(), (i[t] = !0);
                  })
                  .catch(function () {});
          });
        },
        u = n(8110),
        c = n(2257),
        l = { Error: 'error', Success: 'success' },
        p = function (t) {
          return (t && t.default) || t;
        },
        f = function (t) {
          return (
            '/page-data/' +
            ('/' === t
              ? 'index'
              : (function (t) {
                  return (t = '/' === t[0] ? t.slice(1) : t).endsWith('/') ? t.slice(0, -1) : t;
                })(t)) +
            '/page-data.json'
          );
        };
      function d(t, e) {
        return (
          void 0 === e && (e = 'GET'),
          new Promise(function (n, r) {
            var o = new XMLHttpRequest();
            o.open(e, t, !0),
              (o.onreadystatechange = function () {
                4 == o.readyState && n(o);
              }),
              o.send(null);
          })
        );
      }
      var h,
        v = function (t, e) {
          void 0 === e && (e = null);
          var n = {
            componentChunkName: t.componentChunkName,
            path: t.path,
            webpackCompilationHash: t.webpackCompilationHash,
            matchPath: t.matchPath,
            staticQueryHashes: t.staticQueryHashes,
          };
          return { component: e, json: t.result, page: n };
        },
        g = (function () {
          function t(t, e) {
            (this.inFlightNetworkRequests = new Map()),
              (this.pageDb = new Map()),
              (this.inFlightDb = new Map()),
              (this.staticQueryDb = {}),
              (this.pageDataDb = new Map()),
              (this.prefetchTriggered = new Set()),
              (this.prefetchCompleted = new Set()),
              (this.loadComponent = t),
              (0, c.DS)(e);
          }
          var e = t.prototype;
          return (
            (e.memoizedGet = function (t) {
              var e = this,
                n = this.inFlightNetworkRequests.get(t);
              return (
                n || ((n = d(t, 'GET')), this.inFlightNetworkRequests.set(t, n)),
                n
                  .then(function (n) {
                    return e.inFlightNetworkRequests.delete(t), n;
                  })
                  .catch(function (n) {
                    throw (e.inFlightNetworkRequests.delete(t), n);
                  })
              );
            }),
            (e.setApiRunner = function (t) {
              (this.apiRunner = t),
                (this.prefetchDisabled = t('disableCorePrefetching').some(function (t) {
                  return t;
                }));
            }),
            (e.fetchPageDataJson = function (t) {
              var e = this,
                n = t.pagePath,
                r = t.retries,
                o = void 0 === r ? 0 : r,
                a = f(n);
              return this.memoizedGet(a).then(function (r) {
                var a = r.status,
                  i = r.responseText;
                if (200 === a)
                  try {
                    var s = JSON.parse(i);
                    if (void 0 === s.path) throw new Error('not a valid pageData response');
                    return Object.assign(t, { status: l.Success, payload: s });
                  } catch (u) {}
                return 404 === a || 200 === a
                  ? '/404.html' === n
                    ? Object.assign(t, { status: l.Error })
                    : e.fetchPageDataJson(Object.assign(t, { pagePath: '/404.html', notFound: !0 }))
                  : 500 === a
                  ? Object.assign(t, { status: l.Error })
                  : o < 3
                  ? e.fetchPageDataJson(Object.assign(t, { retries: o + 1 }))
                  : Object.assign(t, { status: l.Error });
              });
            }),
            (e.loadPageDataJson = function (t) {
              var e = this,
                n = (0, c.Cj)(t);
              if (this.pageDataDb.has(n)) {
                var r = this.pageDataDb.get(n);
                return Promise.resolve(r);
              }
              return this.fetchPageDataJson({ pagePath: n }).then(function (t) {
                return e.pageDataDb.set(n, t), t;
              });
            }),
            (e.findMatchPath = function (t) {
              return (0, c.UD)(t);
            }),
            (e.loadPage = function (t) {
              var e = this,
                n = (0, c.Cj)(t);
              if (this.pageDb.has(n)) {
                var r = this.pageDb.get(n);
                return r.error ? { error: r.error, status: r.status } : Promise.resolve(r.payload);
              }
              if (this.inFlightDb.has(n)) return this.inFlightDb.get(n);
              var o = Promise.all([this.loadAppData(), this.loadPageDataJson(n)]).then(function (
                t,
              ) {
                var r = t[1];
                if (r.status === l.Error) return { status: l.Error };
                var o = r.payload,
                  a = o,
                  i = a.componentChunkName,
                  s = a.staticQueryHashes,
                  c = void 0 === s ? [] : s,
                  p = {},
                  f = e.loadComponent(i).then(function (e) {
                    var n;
                    return (
                      (p.createdAt = new Date()),
                      !e || e instanceof Error
                        ? ((p.status = l.Error), (p.error = e))
                        : ((p.status = l.Success),
                          !0 === r.notFound && (p.notFound = !0),
                          (o = Object.assign(o, {
                            webpackCompilationHash: t[0] ? t[0].webpackCompilationHash : '',
                          })),
                          (n = v(o, e))),
                      n
                    );
                  }),
                  d = Promise.all(
                    c.map(function (t) {
                      if (e.staticQueryDb[t]) {
                        var n = e.staticQueryDb[t];
                        return { staticQueryHash: t, jsonPayload: n };
                      }
                      return e
                        .memoizedGet('/page-data/sq/d/' + t + '.json')
                        .then(function (e) {
                          var n = JSON.parse(e.responseText);
                          return { staticQueryHash: t, jsonPayload: n };
                        })
                        .catch(function () {
                          throw new Error('We couldn\'t load "/page-data/sq/d/' + t + '.json"');
                        });
                    }),
                  ).then(function (t) {
                    var n = {};
                    return (
                      t.forEach(function (t) {
                        var r = t.staticQueryHash,
                          o = t.jsonPayload;
                        (n[r] = o), (e.staticQueryDb[r] = o);
                      }),
                      n
                    );
                  });
                return Promise.all([f, d])
                  .then(function (t) {
                    var r,
                      o = t[0],
                      a = t[1];
                    return (
                      o &&
                        ((r = Object.assign({}, o, { staticQueryResults: a })),
                        (p.payload = r),
                        u.Z.emit('onPostLoadPageResources', { page: r, pageResources: r })),
                      e.pageDb.set(n, p),
                      p.error ? { error: p.error, status: p.status } : r
                    );
                  })
                  .catch(function (t) {
                    return { error: t, status: l.Error };
                  });
              });
              return (
                o
                  .then(function () {
                    e.inFlightDb.delete(n);
                  })
                  .catch(function (t) {
                    throw (e.inFlightDb.delete(n), t);
                  }),
                this.inFlightDb.set(n, o),
                o
              );
            }),
            (e.loadPageSync = function (t, e) {
              void 0 === e && (e = {});
              var n = (0, c.Cj)(t);
              if (this.pageDb.has(n)) {
                var r,
                  o = this.pageDb.get(n);
                if (o.payload) return o.payload;
                if (null !== (r = e) && void 0 !== r && r.withErrorDetails)
                  return { error: o.error, status: o.status };
              }
            }),
            (e.shouldPrefetch = function (t) {
              return (
                !!(function () {
                  if ('connection' in navigator && void 0 !== navigator.connection) {
                    if ((navigator.connection.effectiveType || '').includes('2g')) return !1;
                    if (navigator.connection.saveData) return !1;
                  }
                  return !0;
                })() && !this.pageDb.has(t)
              );
            }),
            (e.prefetch = function (t) {
              var e = this;
              if (!this.shouldPrefetch(t)) return !1;
              if (
                (this.prefetchTriggered.has(t) ||
                  (this.apiRunner('onPrefetchPathname', { pathname: t }),
                  this.prefetchTriggered.add(t)),
                this.prefetchDisabled)
              )
                return !1;
              var n = (0, c.Cj)(t);
              return (
                this.doPrefetch(n).then(function () {
                  e.prefetchCompleted.has(t) ||
                    (e.apiRunner('onPostPrefetchPathname', { pathname: t }),
                    e.prefetchCompleted.add(t));
                }),
                !0
              );
            }),
            (e.doPrefetch = function (t) {
              var e = this,
                n = f(t);
              return s(n, { crossOrigin: 'anonymous', as: 'fetch' }).then(function () {
                return e.loadPageDataJson(t);
              });
            }),
            (e.hovering = function (t) {
              this.loadPage(t);
            }),
            (e.getResourceURLsForPathname = function (t) {
              var e = (0, c.Cj)(t),
                n = this.pageDataDb.get(e);
              if (n) {
                var r = v(n.payload);
                return [].concat((0, o.Z)(m(r.page.componentChunkName)), [f(e)]);
              }
              return null;
            }),
            (e.isPageNotFound = function (t) {
              var e = (0, c.Cj)(t),
                n = this.pageDb.get(e);
              return !n || n.notFound;
            }),
            (e.loadAppData = function (t) {
              var e = this;
              return (
                void 0 === t && (t = 0),
                this.memoizedGet('/page-data/app-data.json').then(function (n) {
                  var r,
                    o = n.status,
                    a = n.responseText;
                  if (200 !== o && t < 3) return e.loadAppData(t + 1);
                  if (200 === o)
                    try {
                      var i = JSON.parse(a);
                      if (void 0 === i.webpackCompilationHash)
                        throw new Error('not a valid app-data response');
                      r = i;
                    } catch (s) {}
                  return r;
                })
              );
            }),
            t
          );
        })(),
        m = function (t) {
          return (window.___chunkMapping[t] || []).map(function (t) {
            return '' + t;
          });
        },
        y = (function (t) {
          function e(e, n) {
            return (
              t.call(
                this,
                function (t) {
                  if (!e.components[t])
                    throw new Error(
                      "We couldn't find the correct component chunk with the name " + t,
                    );
                  return e.components[t]()
                    .then(p)
                    .catch(function (t) {
                      return t;
                    });
                },
                n,
              ) || this
            );
          }
          (0, r.Z)(e, t);
          var n = e.prototype;
          return (
            (n.doPrefetch = function (e) {
              return t.prototype.doPrefetch.call(this, e).then(function (t) {
                if (t.status !== l.Success) return Promise.resolve();
                var e = t.payload,
                  n = e.componentChunkName,
                  r = m(n);
                return Promise.all(r.map(s)).then(function () {
                  return e;
                });
              });
            }),
            (n.loadPageDataJson = function (e) {
              return t.prototype.loadPageDataJson.call(this, e).then(function (t) {
                return t.notFound
                  ? d(e, 'HEAD').then(function (e) {
                      return 200 === e.status ? { status: l.Error } : t;
                    })
                  : t;
              });
            }),
            e
          );
        })(g),
        w = function (t) {
          h = t;
        },
        b = {
          enqueue: function (t) {
            return h.prefetch(t);
          },
          getResourceURLsForPathname: function (t) {
            return h.getResourceURLsForPathname(t);
          },
          loadPage: function (t) {
            return h.loadPage(t);
          },
          loadPageSync: function (t, e) {
            return void 0 === e && (e = {}), h.loadPageSync(t, e);
          },
          prefetch: function (t) {
            return h.prefetch(t);
          },
          isPageNotFound: function (t) {
            return h.isPageNotFound(t);
          },
          hovering: function (t) {
            return h.hovering(t);
          },
          loadAppData: function () {
            return h.loadAppData();
          },
        },
        P = b;
      function E() {
        return h ? h.staticQueryDb : {};
      }
    },
    804: function (t, e, n) {
      'use strict';
      var r = n(3552),
        o = n(7294),
        a = n(7343),
        i = n(2257),
        s = (function (t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          return (
            (0, r.Z)(e, t),
            (e.prototype.render = function () {
              var t = Object.assign({}, this.props, {
                  params: Object.assign(
                    {},
                    (0, i.GA)(this.props.location.pathname),
                    this.props.pageResources.json.pageContext.__params,
                  ),
                }),
                e = (0, o.createElement)(
                  this.props.pageResources.component,
                  Object.assign({}, t, {
                    key: this.props.path || this.props.pageResources.page.path,
                  }),
                );
              return (0, a.h)('wrapPageElement', { element: e, props: t }, e, function (e) {
                return { element: e.result, props: t };
              }).pop();
            }),
            e
          );
        })(o.Component);
      e.Z = s;
    },
    376: function (t, e, n) {
      'use strict';
      var r = n(3552),
        o = n(7343),
        a = n(7294),
        i = n(3935),
        s = n(9499),
        u = n(9679),
        c = n(9228),
        l = n.n(c),
        p = n(5444),
        f = n(8741),
        d = n(8110),
        h = {
          id: 'gatsby-announcer',
          style: {
            position: 'absolute',
            top: 0,
            width: 1,
            height: 1,
            padding: 0,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0,
          },
          'aria-live': 'assertive',
          'aria-atomic': 'true',
        },
        v = n(2393),
        g = n(8037),
        m = new Map(),
        y = new Map();
      function w(t) {
        var e = m.get(t);
        return e || (e = y.get(t.toLowerCase())), null != e && (window.___replace(e.toPath), !0);
      }
      [].forEach(function (t) {
        t.ignoreCase ? y.set(t.fromPath, t) : m.set(t.fromPath, t);
      });
      var b = function (t, e) {
          w(t.pathname) || (0, o.h)('onPreRouteUpdate', { location: t, prevLocation: e });
        },
        P = function (t, e) {
          w(t.pathname) || (0, o.h)('onRouteUpdate', { location: t, prevLocation: e });
        },
        E = function (t, e) {
          if ((void 0 === e && (e = {}), 'number' != typeof t)) {
            var n = (0, g.cP)(t).pathname,
              r = m.get(n);
            if (
              (r || (r = y.get(n.toLowerCase())),
              r && ((t = r.toPath), (n = (0, g.cP)(t).pathname)),
              window.___swUpdated)
            )
              window.location = n;
            else {
              var a = setTimeout(function () {
                d.Z.emit('onDelayedLoadPageResources', { pathname: n }),
                  (0, o.h)('onRouteUpdateDelayed', { location: window.location });
              }, 1e3);
              f.ZP.loadPage(n).then(function (r) {
                if (!r || r.status === f.uQ.Error)
                  return (
                    window.history.replaceState({}, '', location.href),
                    (window.location = n),
                    void clearTimeout(a)
                  );
                r &&
                  r.page.webpackCompilationHash !== window.___webpackCompilationHash &&
                  ('serviceWorker' in navigator &&
                    null !== navigator.serviceWorker.controller &&
                    'activated' === navigator.serviceWorker.controller.state &&
                    navigator.serviceWorker.controller.postMessage({
                      gatsbyApi: 'clearPathResources',
                    }),
                  (window.location = n)),
                  (0, s.navigate)(t, e),
                  clearTimeout(a);
              });
            }
          } else v.V5.navigate(t);
        };
      function S(t, e) {
        var n = this,
          r = e.location,
          a = r.pathname,
          i = r.hash,
          s = (0, o.h)('shouldUpdateScroll', {
            prevRouterProps: t,
            pathname: a,
            routerProps: { location: r },
            getSavedScrollPosition: function (t) {
              return [0, n._stateStorage.read(t, t.key)];
            },
          });
        if (s.length > 0) return s[s.length - 1];
        if (t && t.location.pathname === a) return i ? decodeURI(i.slice(1)) : [0, 0];
        return !0;
      }
      var _ = (function (t) {
          function e(e) {
            var n;
            return ((n = t.call(this, e) || this).announcementRef = a.createRef()), n;
          }
          (0, r.Z)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidUpdate = function (t, e) {
              var n = this;
              requestAnimationFrame(function () {
                var t = 'new page at ' + n.props.location.pathname;
                document.title && (t = document.title);
                var e = document.querySelectorAll('#gatsby-focus-wrapper h1');
                e && e.length && (t = e[0].textContent);
                var r = 'Navigated to ' + t;
                n.announcementRef.current &&
                  n.announcementRef.current.innerText !== r &&
                  (n.announcementRef.current.innerText = r);
              });
            }),
            (n.render = function () {
              return a.createElement('div', Object.assign({}, h, { ref: this.announcementRef }));
            }),
            e
          );
        })(a.Component),
        R = function (t, e) {
          var n, r;
          return (
            t.href !== e.href ||
            (null == t || null === (n = t.state) || void 0 === n ? void 0 : n.key) !==
              (null == e || null === (r = e.state) || void 0 === r ? void 0 : r.key)
          );
        },
        C = (function (t) {
          function e(e) {
            var n;
            return (n = t.call(this, e) || this), b(e.location, null), n;
          }
          (0, r.Z)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidMount = function () {
              P(this.props.location, null);
            }),
            (n.shouldComponentUpdate = function (t) {
              return (
                !!R(t.location, this.props.location) && (b(this.props.location, t.location), !0)
              );
            }),
            (n.componentDidUpdate = function (t) {
              R(t.location, this.props.location) && P(this.props.location, t.location);
            }),
            (n.render = function () {
              return a.createElement(
                a.Fragment,
                null,
                this.props.children,
                a.createElement(_, { location: location }),
              );
            }),
            e
          );
        })(a.Component),
        k = n(804),
        x = n(4999);
      function j(t, e) {
        for (var n in t) if (!(n in e)) return !0;
        for (var r in e) if (t[r] !== e[r]) return !0;
        return !1;
      }
      var O = (function (t) {
          function e(e) {
            var n;
            n = t.call(this) || this;
            var r = e.location,
              o = e.pageResources;
            return (
              (n.state = {
                location: Object.assign({}, r),
                pageResources: o || f.ZP.loadPageSync(r.pathname, { withErrorDetails: !0 }),
              }),
              n
            );
          }
          (0, r.Z)(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              var n = t.location;
              return e.location.href !== n.href
                ? {
                    pageResources: f.ZP.loadPageSync(n.pathname, { withErrorDetails: !0 }),
                    location: Object.assign({}, n),
                  }
                : { location: Object.assign({}, n) };
            });
          var n = e.prototype;
          return (
            (n.loadResources = function (t) {
              var e = this;
              f.ZP.loadPage(t).then(function (n) {
                n && n.status !== f.uQ.Error
                  ? e.setState({ location: Object.assign({}, window.location), pageResources: n })
                  : (window.history.replaceState({}, '', location.href), (window.location = t));
              });
            }),
            (n.shouldComponentUpdate = function (t, e) {
              return e.pageResources
                ? this.state.pageResources !== e.pageResources ||
                    this.state.pageResources.component !== e.pageResources.component ||
                    this.state.pageResources.json !== e.pageResources.json ||
                    !(
                      this.state.location.key === e.location.key ||
                      !e.pageResources.page ||
                      (!e.pageResources.page.matchPath && !e.pageResources.page.path)
                    ) ||
                    (function (t, e, n) {
                      return j(t.props, e) || j(t.state, n);
                    })(this, t, e)
                : (this.loadResources(t.location.pathname), !1);
            }),
            (n.render = function () {
              return this.props.children(this.state);
            }),
            e
          );
        })(a.Component),
        L = n(1578),
        D = new f.kL(x, []);
      (0, f.N1)(D),
        D.setApiRunner(o.h),
        (window.asyncRequires = x),
        (window.___emitter = d.Z),
        (window.___loader = f.jN),
        v.V5.listen(function (t) {
          t.location.action = t.action;
        }),
        (window.___push = function (t) {
          return E(t, { replace: !1 });
        }),
        (window.___replace = function (t) {
          return E(t, { replace: !0 });
        }),
        (window.___navigate = function (t, e) {
          return E(t, e);
        }),
        w(window.location.pathname),
        (0, o.I)('onClientEntry').then(function () {
          (0, o.h)('registerServiceWorker').filter(Boolean).length > 0 && n(154);
          var t = function (t) {
              return a.createElement(
                s.BaseContext.Provider,
                { value: { baseuri: '/', basepath: '/' } },
                a.createElement(k.Z, t),
              );
            },
            e = a.createContext({}),
            c = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              return (
                (0, r.Z)(n, t),
                (n.prototype.render = function () {
                  var t = this.props.children;
                  return a.createElement(s.Location, null, function (n) {
                    var r = n.location;
                    return a.createElement(O, { location: r }, function (n) {
                      var r = n.pageResources,
                        o = n.location,
                        i = (0, f.hs)();
                      return a.createElement(
                        p.StaticQueryContext.Provider,
                        { value: i },
                        a.createElement(
                          e.Provider,
                          { value: { pageResources: r, location: o } },
                          t,
                        ),
                      );
                    });
                  });
                }),
                n
              );
            })(a.Component),
            d = (function (n) {
              function o() {
                return n.apply(this, arguments) || this;
              }
              return (
                (0, r.Z)(o, n),
                (o.prototype.render = function () {
                  var n = this;
                  return a.createElement(e.Consumer, null, function (e) {
                    var r = e.pageResources,
                      o = e.location;
                    return a.createElement(
                      C,
                      { location: o },
                      a.createElement(
                        u.$C,
                        { location: o, shouldUpdateScroll: S },
                        a.createElement(
                          s.Router,
                          { basepath: '', location: o, id: 'gatsby-focus-wrapper' },
                          a.createElement(
                            t,
                            Object.assign(
                              {
                                path:
                                  '/404.html' === r.page.path
                                    ? (0, L.Z)(o.pathname, '')
                                    : encodeURI(r.page.matchPath || r.page.path),
                              },
                              n.props,
                              { location: o, pageResources: r },
                              r.json,
                            ),
                          ),
                        ),
                      ),
                    );
                  });
                }),
                o
              );
            })(a.Component),
            h = window,
            v = h.pagePath,
            g = h.location;
          v &&
            '' + v !== g.pathname &&
            !(
              D.findMatchPath((0, L.Z)(g.pathname, '')) ||
              '/404.html' === v ||
              v.match(/^\/404\/?$/) ||
              v.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            (0, s.navigate)('' + v + g.search + g.hash, { replace: !0 }),
            f.jN.loadPage(g.pathname).then(function (t) {
              if (!t || t.status === f.uQ.Error) {
                var e = 'page resources for ' + g.pathname + ' not found. Not rendering React';
                if (t && t.error) throw (console.error(e), t.error);
                throw new Error(e);
              }
              window.___webpackCompilationHash = t.page.webpackCompilationHash;
              var n = (0, o.h)(
                  'wrapRootElement',
                  { element: a.createElement(d, null) },
                  a.createElement(d, null),
                  function (t) {
                    return { element: t.result };
                  },
                ).pop(),
                r = function () {
                  return a.createElement(c, null, n);
                },
                s = (0, o.h)('replaceHydrateFunction', void 0, i.hydrate)[0];
              l()(function () {
                s(
                  a.createElement(r, null),
                  'undefined' != typeof window ? document.getElementById('___gatsby') : void 0,
                  function () {
                    (0, o.h)('onInitialClientRender');
                  },
                );
              });
            });
        });
    },
    6947: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n(7294),
        o = n(8741),
        a = n(804);
      e.default = function (t) {
        var e = t.location,
          n = o.ZP.loadPageSync(e.pathname);
        return n
          ? r.createElement(a.Z, Object.assign({ location: e, pageResources: n }, n.json))
          : null;
      };
    },
    861: function (t, e, n) {
      var r;
      t.exports = ((r = n(6947)) && r.default) || r;
    },
    3639: function (t, e) {
      e.O = function (t) {
        return t;
      };
    },
    154: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n(7343);
      'https:' !== window.location.protocol && 'localhost' !== window.location.hostname
        ? console.error(
            'Service workers can only be used over HTTPS, or on localhost for development',
          )
        : 'serviceWorker' in navigator &&
          navigator.serviceWorker
            .register('/sw.js')
            .then(function (t) {
              t.addEventListener('updatefound', function () {
                (0, r.h)('onServiceWorkerUpdateFound', { serviceWorker: t });
                var e = t.installing;
                console.log('installingWorker', e),
                  e.addEventListener('statechange', function () {
                    switch (e.state) {
                      case 'installed':
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            (0, r.h)('onServiceWorkerUpdateReady', { serviceWorker: t }),
                            window.___failedResources &&
                              (console.log('resources failed, SW updated - reloading'),
                              window.location.reload()))
                          : (console.log('Content is now available offline!'),
                            (0, r.h)('onServiceWorkerInstalled', { serviceWorker: t }));
                        break;
                      case 'redundant':
                        console.error('The installing service worker became redundant.'),
                          (0, r.h)('onServiceWorkerRedundant', { serviceWorker: t });
                        break;
                      case 'activated':
                        (0, r.h)('onServiceWorkerActive', { serviceWorker: t });
                    }
                  });
              });
            })
            .catch(function (t) {
              console.error('Error during service worker registration:', t);
            });
    },
    1578: function (t, e, n) {
      'use strict';
      function r(t, e) {
        return (
          void 0 === e && (e = ''),
          e ? (t === e ? '/' : t.startsWith(e + '/') ? t.slice(e.length) : t) : t
        );
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    9037: function () {},
    5854: function (t, e) {
      'use strict';
      (e.__esModule = !0), (e.onRouteUpdate = void 0);
      e.onRouteUpdate = function (t, e) {
        var n = t.location;
        if ((void 0 === e && (e = {}), 'function' != typeof ga)) return null;
        if (
          n &&
          void 0 !== window.excludeGAPaths &&
          window.excludeGAPaths.some(function (t) {
            return t.test(n.pathname);
          })
        )
          return null;
        var r = Math.max(32, e.pageTransitionDelay || 0);
        return (
          setTimeout(function () {
            var t = n ? n.pathname + n.search + n.hash : void 0;
            window.ga('set', 'page', t), window.ga('send', 'pageview');
          }, r),
          null
        );
      };
    },
    9285: function (t, e, n) {
      'use strict';
      n.d(e, {
        G: function () {
          return k;
        },
        L: function () {
          return w;
        },
        M: function () {
          return S;
        },
        P: function () {
          return E;
        },
        S: function () {
          return D;
        },
        _: function () {
          return c;
        },
        a: function () {
          return s;
        },
        b: function () {
          return v;
        },
        c: function () {
          return T;
        },
        d: function () {
          return h;
        },
        g: function () {
          return g;
        },
      });
      var r = n(7294),
        o = (n(4041), n(4811), n(5697)),
        a = n.n(o),
        i = n(3935);
      function s() {
        return (s =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function u(t, e) {
        return (u =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function c(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = {},
          a = Object.keys(t);
        for (r = 0; r < a.length; r++) e.indexOf((n = a[r])) >= 0 || (o[n] = t[n]);
        return o;
      }
      var l = new Set(),
        p = function () {
          return 'undefined' != typeof HTMLImageElement && 'loading' in HTMLImageElement.prototype;
        };
      function f(t) {
        t && l.add(t);
      }
      function d(t) {
        return l.has(t);
      }
      var h = function (t) {
        var e;
        return (function (t) {
          var e, n;
          return Boolean(
            null == t || null == (e = t.images) || null == (n = e.fallback) ? void 0 : n.src,
          );
        })(t)
          ? t
          : (function (t) {
              return Boolean(null == t ? void 0 : t.gatsbyImageData);
            })(t)
          ? t.gatsbyImageData
          : null == t || null == (e = t.childImageSharp)
          ? void 0
          : e.gatsbyImageData;
      };
      function v(t, e, r, o, a, i, u, c) {
        var l, p;
        return (
          void 0 === c && (c = {}),
          null != u &&
            u.current &&
            !('objectFit' in document.documentElement.style) &&
            ((u.current.dataset.objectFit = null != (l = c.objectFit) ? l : 'cover'),
            (u.current.dataset.objectPosition =
              '' + (null != (p = c.objectPosition) ? p : '50% 50%')),
            (function (t) {
              try {
                var e = function () {
                    window.objectFitPolyfill(t.current);
                  },
                  r = (function () {
                    if (!('objectFitPolyfill' in window))
                      return Promise.resolve(
                        n.e(231).then(n.t.bind(n, 7231, 23)),
                      ).then(function () {});
                  })();
                Promise.resolve(r && r.then ? r.then(e) : e());
              } catch (t) {
                return Promise.reject(t);
              }
            })(u)),
          s({}, r, {
            loading: o,
            shouldLoad: t,
            'data-main-image': '',
            style: s({}, c, { opacity: e ? 1 : 0 }),
            onLoad: function (t) {
              if (!e) {
                f(i);
                var n = t.currentTarget,
                  r = new Image();
                (r.src = n.currentSrc),
                  r.decode
                    ? r
                        .decode()
                        .catch(function () {})
                        .then(function () {
                          a(!0);
                        })
                    : a(!0);
              }
            },
            ref: u,
          })
        );
      }
      function g(t, e, n, r, o, a, i, u) {
        var c = {};
        a &&
          ((c.backgroundColor = a),
          'fixed' === n
            ? ((c.width = r), (c.height = o), (c.backgroundColor = a), (c.position = 'relative'))
            : ('constrained' === n || 'fullWidth' === n) &&
              ((c.position = 'absolute'),
              (c.top = 0),
              (c.left = 0),
              (c.bottom = 0),
              (c.right = 0))),
          i && (c.objectFit = i),
          u && (c.objectPosition = u);
        var l = s({}, t, {
          'aria-hidden': !0,
          'data-placeholder-image': '',
          style: s({ opacity: e ? 0 : 1, transition: 'opacity 500ms linear' }, c),
        });
        return l;
      }
      var m,
        y = function (t) {
          var e = t.layout,
            n = t.width,
            o = t.height;
          return 'fullWidth' === e
            ? r.createElement('div', {
                'aria-hidden': !0,
                style: { paddingTop: (o / n) * 100 + '%' },
              })
            : 'constrained' === e
            ? r.createElement(
                'div',
                { style: { maxWidth: n, display: 'block' } },
                r.createElement('img', {
                  alt: '',
                  role: 'presentation',
                  'aria-hidden': 'true',
                  src:
                    "data:image/svg+xml;charset=utf-8,%3Csvg height='" +
                    o +
                    "' width='" +
                    n +
                    "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
                  style: { maxWidth: '100%', display: 'block', position: 'static' },
                }),
              )
            : null;
        },
        w = function (t) {
          var e = t.children,
            n = c(t, ['children']);
          return r.createElement(r.Fragment, null, r.createElement(y, Object.assign({}, n)), e, !1);
        },
        b = function (t) {
          var e = t.src,
            n = t.srcSet,
            o = t.loading,
            a = t.alt,
            i = void 0 === a ? '' : a,
            s = t.shouldLoad,
            u = t.innerRef,
            l = c(t, ['src', 'srcSet', 'loading', 'alt', 'shouldLoad', 'innerRef']);
          return r.createElement(
            'img',
            Object.assign({}, l, {
              decoding: 'async',
              loading: o,
              src: s ? e : void 0,
              'data-src': s ? void 0 : e,
              srcSet: s ? n : void 0,
              'data-srcset': s ? void 0 : n,
              alt: i,
              ref: u,
            }),
          );
        },
        P = (0, r.forwardRef)(function (t, e) {
          var n = t.fallback,
            o = t.sources,
            a = void 0 === o ? [] : o,
            i = t.shouldLoad,
            s = void 0 === i || i,
            u = c(t, ['fallback', 'sources', 'shouldLoad']),
            l = u.sizes || (null == n ? void 0 : n.sizes),
            p = r.createElement(
              b,
              Object.assign({}, u, n, { sizes: l, shouldLoad: s, innerRef: e }),
            );
          return a.length
            ? r.createElement(
                'picture',
                null,
                a.map(function (t) {
                  var e = t.media,
                    n = t.srcSet,
                    o = t.type;
                  return r.createElement('source', {
                    key: e + '-' + o + '-' + n,
                    type: o,
                    media: e,
                    srcSet: s ? n : void 0,
                    'data-srcset': s ? void 0 : n,
                    sizes: l,
                  });
                }),
                p,
              )
            : p;
        });
      (b.propTypes = {
        src: o.string.isRequired,
        alt: o.string.isRequired,
        sizes: o.string,
        srcSet: o.string,
        shouldLoad: o.bool,
      }),
        (P.displayName = 'Picture'),
        (P.propTypes = {
          alt: o.string.isRequired,
          shouldLoad: o.bool,
          fallback: (0, o.exact)({ src: o.string.isRequired, srcSet: o.string, sizes: o.string }),
          sources: (0, o.arrayOf)(
            (0, o.oneOfType)([
              (0, o.exact)({
                media: o.string.isRequired,
                type: o.string,
                sizes: o.string,
                srcSet: o.string.isRequired,
              }),
              (0, o.exact)({
                media: o.string,
                type: o.string.isRequired,
                sizes: o.string,
                srcSet: o.string.isRequired,
              }),
            ]),
          ),
        });
      var E = function (t) {
        var e = t.fallback,
          n = c(t, ['fallback']);
        return e
          ? r.createElement(
              P,
              Object.assign({}, n, { fallback: { src: e }, 'aria-hidden': !0, alt: '' }),
            )
          : r.createElement('div', Object.assign({}, n));
      };
      (E.displayName = 'Placeholder'),
        (E.propTypes = {
          fallback: o.string,
          sources: null == (m = P.propTypes) ? void 0 : m.sources,
          alt: function (t, e, n) {
            return t[e]
              ? new Error('Invalid prop `' + e + '` supplied to `' + n + '`. Validation failed.')
              : null;
          },
        });
      var S = (0, r.forwardRef)(function (t, e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(P, Object.assign({ ref: e }, t)),
          r.createElement(
            'noscript',
            null,
            r.createElement(P, Object.assign({}, t, { shouldLoad: !0 })),
          ),
        );
      });
      (S.displayName = 'MainImage'), (S.propTypes = P.propTypes);
      var _ = function (t, e, n) {
          return t.alt || '' === t.alt
            ? a().string.apply(a(), [t, e, n].concat([].slice.call(arguments, 3)))
            : new Error(
                'The "alt" prop is required in ' +
                  n +
                  '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html',
              );
        },
        R = { image: a().object.isRequired, alt: _ },
        C = (function (t) {
          var e, o;
          function a(e) {
            var n;
            return (
              ((n = t.call(this, e) || this).root = (0, r.createRef)()),
              (n.hydrated = { current: !1 }),
              (n.forceRender = { current: !1 }),
              (n.lazyHydrator = null),
              (n.ref = (0, r.createRef)()),
              (n.state = { isLoading: p(), isLoaded: !1 }),
              n
            );
          }
          (o = t),
            ((e = a).prototype = Object.create(o.prototype)),
            (e.prototype.constructor = e),
            u(e, o);
          var l = a.prototype;
          return (
            (l._lazyHydrate = function (t, e) {
              var r = this,
                o = this.root.current.querySelector('[data-gatsby-image-ssr]');
              return p() && o && !this.hydrated.current
                ? ((this.hydrated.current = !0), Promise.resolve())
                : n
                    .e(368)
                    .then(n.bind(n, 8368))
                    .then(function (n) {
                      r.lazyHydrator = (0, n.lazyHydrate)(
                        s(
                          {
                            image: t.image.images,
                            isLoading: e.isLoading,
                            isLoaded: e.isLoaded,
                            toggleIsLoaded: function () {
                              null == t.onLoad || t.onLoad(), r.setState({ isLoaded: !0 });
                            },
                            ref: r.ref,
                          },
                          t,
                        ),
                        r.root,
                        r.hydrated,
                        r.forceRender,
                      );
                    });
            }),
            (l._setupIntersectionObserver = function (t) {
              var e = this;
              void 0 === t && (t = !0),
                n
                  .e(175)
                  .then(n.bind(n, 7175))
                  .then(function (n) {
                    var r = (0, n.createIntersectionObserver)(function () {
                      if (e.root.current) {
                        var n = JSON.stringify(e.props.image.images);
                        null == e.props.onStartLoad ||
                          e.props.onStartLoad({ wasCached: t && d(n) }),
                          e.setState({ isLoading: !0, isLoaded: t && d(n) });
                      }
                    });
                    e.root.current && (e.unobserveRef = r(e.root));
                  });
            }),
            (l.shouldComponentUpdate = function (t, e) {
              var n = this,
                r = !1;
              return (
                this.state.isLoading ||
                  !e.isLoading ||
                  e.isLoaded ||
                  (this.forceRender.current = !0),
                this.props.image.images !== t.image.images &&
                  (this.unobserveRef &&
                    (this.unobserveRef(),
                    this.hydrated.current &&
                      this.lazyHydrator &&
                      (0, i.render)(null, this.root.current)),
                  this.setState({ isLoading: !1, isLoaded: !1 }, function () {
                    n._setupIntersectionObserver(!1);
                  }),
                  (r = !0)),
                this.root.current && !r && this._lazyHydrate(t, e),
                !1
              );
            }),
            (l.componentDidMount = function () {
              if (this.root.current) {
                var t = this.root.current.querySelector('[data-gatsby-image-ssr]'),
                  e = JSON.stringify(this.props.image.images);
                if (p() && t) {
                  var n, r;
                  if (
                    (null == (n = (r = this.props).onStartLoad) || n.call(r, { wasCached: !1 }),
                    t.complete)
                  ) {
                    var o, a;
                    null == (o = (a = this.props).onLoad) || o.call(a), f(e);
                  } else {
                    var i = this;
                    t.addEventListener('load', function n() {
                      t.removeEventListener('load', n),
                        null == i.props.onLoad || i.props.onLoad(),
                        f(e);
                    });
                  }
                  return;
                }
                this._setupIntersectionObserver(!0);
              }
            }),
            (l.componentWillUnmount = function () {
              this.unobserveRef &&
                (this.unobserveRef(),
                this.hydrated.current && this.lazyHydrator && this.lazyHydrator());
            }),
            (l.render = function () {
              var t = this.props.as || 'div',
                e = this.props.image,
                n = e.width,
                o = e.height,
                a = e.layout,
                i = (function (t, e, n) {
                  var r = {},
                    o = 'gatsby-image-wrapper';
                  return (
                    'fixed' === n
                      ? ((r.width = t), (r.height = e))
                      : 'constrained' === n &&
                        (o = 'gatsby-image-wrapper gatsby-image-wrapper-constrained'),
                    { className: o, 'data-gatsby-image-wrapper': '', style: r }
                  );
                })(n, o, a),
                u = i.style,
                l = i.className,
                p = c(i, ['style', 'className']),
                f = this.props.className;
              this.props.class && (f = this.props.class);
              var d = (function (t, e, n) {
                var r = null;
                return (
                  'fullWidth' === t &&
                    (r =
                      '<div aria-hidden="true" style="padding-top: ' +
                      (n / e) * 100 +
                      '%;"></div>'),
                  'constrained' === t &&
                    (r =
                      '<div style="max-width: ' +
                      e +
                      'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\'' +
                      n +
                      "' width='" +
                      e +
                      "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),
                  r
                );
              })(a, n, o);
              return r.createElement(
                t,
                Object.assign({}, p, {
                  style: s({}, u, this.props.style, {
                    backgroundColor: this.props.backgroundColor,
                  }),
                  className: l + (f ? ' ' + f : ''),
                  ref: this.root,
                  dangerouslySetInnerHTML: { __html: d },
                  suppressHydrationWarning: !0,
                }),
              );
            }),
            a
          );
        })(r.Component),
        k = function (t) {
          if (!t.image) return null;
          var e = t.image,
            n = JSON.stringify([
              e.width,
              e.height,
              e.layout,
              t.className,
              t.class,
              t.backgroundColor,
            ]);
          return r.createElement(C, Object.assign({ key: n }, t));
        };
      (k.propTypes = R), (k.displayName = 'GatsbyImage');
      var x,
        j = function (t, e) {
          return 'fullWidth' !== t.layout || ('width' !== e && 'height' !== e) || !t[e]
            ? a().number.apply(a(), [t, e].concat([].slice.call(arguments, 2)))
            : new Error('"' + e + '" ' + t[e] + ' may not be passed when layout is fullWidth.');
        },
        O = new Set(['fixed', 'fullWidth', 'constrained']),
        L = {
          src: a().string.isRequired,
          alt: _,
          width: j,
          height: j,
          sizes: a().string,
          layout: function (t) {
            if (void 0 !== t.layout && !O.has(t.layout))
              return new Error(
                'Invalid value ' +
                  t.layout +
                  '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".',
              );
          },
        },
        D =
          ((x = k),
          function (t) {
            var e = t.src,
              n = t.__imageData,
              o = t.__error,
              a = c(t, [
                'src',
                '__imageData',
                '__error',
                'width',
                'height',
                'aspectRatio',
                'tracedSVGOptions',
                'placeholder',
                'formats',
                'quality',
                'transformOptions',
                'jpgOptions',
                'pngOptions',
                'webpOptions',
                'avifOptions',
                'blurredOptions',
              ]);
            return (
              o && console.warn(o),
              n
                ? r.createElement(x, Object.assign({ image: n }, a))
                : (console.warn('Image not loaded', e), null)
            );
          });
      function T(t) {
        var e = t.children;
        return (
          (0, r.useEffect)(function () {
            n.e(368).then(n.bind(n, 8368));
          }, []),
          e
        );
      }
      (D.displayName = 'StaticImage'), (D.propTypes = L);
    },
    6988: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, {
          wrapRootElement: function () {
            return a;
          },
        });
      var r = n(7294),
        o = n(9285);
      function a(t) {
        var e = t.element;
        return r.createElement(o.c, null, e);
      }
    },
    992: function (t, e, n) {
      'use strict';
      var r = n(5318);
      n(5444), r(n(1632));
    },
    1632: function (t, e) {
      'use strict';
      (e.__esModule = !0), (e.default = void 0);
      e.default = function (t, e) {
        var n = 'manifest.webmanifest';
        if (!Array.isArray(e)) return n;
        var r = e.find(function (e) {
          return t.startsWith(e.start_url);
        });
        return r ? 'manifest_' + r.lang + '.webmanifest' : n;
      };
    },
    7996: function (t, e) {
      'use strict';
      e.registerServiceWorker = function () {
        return 'true' !== {}.GATSBY_IS_PREVIEW;
      };
      var n = /^(stylesheet|preload)$/,
        r = [];
      function o(t, e) {
        if (!window.___swUpdated && 'serviceWorker' in navigator) {
          var n = navigator.serviceWorker;
          if (null === n.controller) r.push(t);
          else {
            var o = e(t);
            n.controller.postMessage({ gatsbyApi: 'setPathResources', path: t, resources: o });
          }
        }
      }
      (e.onServiceWorkerActive = function (t) {
        var e = t.getResourceURLsForPathname,
          o = t.serviceWorker;
        if ('true' !== {}.GATSBY_IS_PREVIEW)
          if (window.___swUpdated) o.active.postMessage({ gatsbyApi: 'clearPathResources' });
          else {
            var a = document.querySelectorAll(
                '\n    head > script[src],\n    head > link[href],\n    head > style[data-href]\n  ',
              ),
              i = [].slice
                .call(a)
                .filter(function (t) {
                  return 'LINK' !== t.tagName || n.test(t.getAttribute('rel'));
                })
                .map(function (t) {
                  return t.src || t.href || t.getAttribute('data-href');
                }),
              s = [];
            r.forEach(function (t) {
              var n = e(t);
              s.push.apply(s, n),
                o.active.postMessage({ gatsbyApi: 'setPathResources', path: t, resources: n });
            }),
              [].concat(i, s).forEach(function (t) {
                var e = document.createElement('link');
                (e.rel = 'prefetch'),
                  (e.href = t),
                  (e.onload = e.remove),
                  (e.onerror = e.remove),
                  document.head.appendChild(e);
              });
          }
      }),
        (e.onRouteUpdate = function (t) {
          var e = t.location,
            n = t.getResourceURLsForPathname;
          o(e.pathname.replace('', ''), n),
            'serviceWorker' in navigator &&
              null !== navigator.serviceWorker.controller &&
              navigator.serviceWorker.controller.postMessage({ gatsbyApi: 'enableOfflineShell' });
        }),
        (e.onPostPrefetchPathname = function (t) {
          o(t.pathname, t.getResourceURLsForPathname);
        });
    },
    2862: function (t, e) {
      'use strict';
      (e.DEFAULT_OPTIONS = {
        maxWidth: 650,
        wrapperStyle: '',
        backgroundColor: 'white',
        linkImagesToOriginal: !0,
        showCaptions: !1,
        markdownCaptions: !1,
        withWebp: !1,
        withAvif: !1,
        tracedSVG: !1,
        loading: 'lazy',
        disableBgImageOnAlpha: !1,
        disableBgImage: !1,
      }),
        (e.EMPTY_ALT = 'GATSBY_EMPTY_ALT'),
        (e.imageClass = 'gatsby-resp-image-image'),
        (e.imageWrapperClass = 'gatsby-resp-image-wrapper'),
        (e.imageBackgroundClass = 'gatsby-resp-image-background-image');
    },
    3207: function (t, e, n) {
      'use strict';
      var r = n(2862),
        o = r.DEFAULT_OPTIONS,
        a = r.imageClass,
        i = r.imageBackgroundClass,
        s = r.imageWrapperClass;
      e.onRouteUpdate = function (t, e) {
        for (
          var n = Object.assign({}, o, e),
            r = document.querySelectorAll('.' + s),
            u = function (t) {
              var e = r[t],
                o = e.querySelector('.' + i),
                s = e.querySelector('.' + a),
                u = function () {
                  (o.style.transition = 'opacity 0.5s 0.5s'),
                    (s.style.transition = 'opacity 0.5s'),
                    c();
                },
                c = function t() {
                  (o.style.opacity = 0),
                    (s.style.opacity = 1),
                    (s.style.color = 'inherit'),
                    (s.style.boxShadow = 'inset 0px 0px 0px 400px ' + n.backgroundColor),
                    s.removeEventListener('load', u),
                    s.removeEventListener('error', t);
                };
              (s.style.opacity = 0),
                s.addEventListener('load', u),
                s.addEventListener('error', c),
                s.complete && c();
            },
            c = 0;
          c < r.length;
          c++
        )
          u(c);
      };
    },
    9499: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, {
          BaseContext: function () {
            return I;
          },
          Link: function () {
            return B;
          },
          Location: function () {
            return A;
          },
          LocationProvider: function () {
            return U;
          },
          Match: function () {
            return X;
          },
          Redirect: function () {
            return Y;
          },
          Router: function () {
            return W;
          },
          ServerLocation: function () {
            return M;
          },
          createHistory: function () {
            return E;
          },
          createMemorySource: function () {
            return S;
          },
          globalHistory: function () {
            return R;
          },
          isRedirect: function () {
            return K;
          },
          matchPath: function () {
            return c;
          },
          navigate: function () {
            return C;
          },
          redirectTo: function () {
            return $;
          },
          useLocation: function () {
            return tt;
          },
          useMatch: function () {
            return rt;
          },
          useNavigate: function () {
            return et;
          },
          useParams: function () {
            return nt;
          },
        });
      var r = n(7294),
        o = n(1143),
        a = n.n(o),
        i = n(3639),
        s = function (t, e) {
          return t.substr(0, e.length) === e;
        },
        u = function (t, e) {
          for (
            var n = void 0,
              r = void 0,
              o = e.split('?')[0],
              i = m(o),
              s = '' === i[0],
              u = g(t),
              c = 0,
              l = u.length;
            c < l;
            c++
          ) {
            var p = !1,
              d = u[c].route;
            if (d.default) r = { route: d, params: {}, uri: e };
            else {
              for (var v = m(d.path), y = {}, b = Math.max(i.length, v.length), P = 0; P < b; P++) {
                var E = v[P],
                  S = i[P];
                if (h(E)) {
                  y[E.slice(1) || '*'] = i.slice(P).map(decodeURIComponent).join('/');
                  break;
                }
                if (void 0 === S) {
                  p = !0;
                  break;
                }
                var _ = f.exec(E);
                if (_ && !s) {
                  -1 === w.indexOf(_[1]) || a()(!1);
                  var R = decodeURIComponent(S);
                  y[_[1]] = R;
                } else if (E !== S) {
                  p = !0;
                  break;
                }
              }
              if (!p) {
                n = { route: d, params: y, uri: '/' + i.slice(0, P).join('/') };
                break;
              }
            }
          }
          return n || r || null;
        },
        c = function (t, e) {
          return u([{ path: t }], e);
        },
        l = function (t, e) {
          if (s(t, '/')) return t;
          var n = t.split('?'),
            r = n[0],
            o = n[1],
            a = e.split('?')[0],
            i = m(r),
            u = m(a);
          if ('' === i[0]) return y(a, o);
          if (!s(i[0], '.')) {
            var c = u.concat(i).join('/');
            return y(('/' === a ? '' : '/') + c, o);
          }
          for (var l = u.concat(i), p = [], f = 0, d = l.length; f < d; f++) {
            var h = l[f];
            '..' === h ? p.pop() : '.' !== h && p.push(h);
          }
          return y('/' + p.join('/'), o);
        },
        p = function (t, e) {
          var n = t.split('?'),
            r = n[0],
            o = n[1],
            a = void 0 === o ? '' : o,
            i =
              '/' +
              m(r)
                .map(function (t) {
                  var n = f.exec(t);
                  return n ? e[n[1]] : t;
                })
                .join('/'),
            s = e.location,
            u = (s = void 0 === s ? {} : s).search,
            c = (void 0 === u ? '' : u).split('?')[1] || '';
          return (i = y(i, a, c));
        },
        f = /^:(.+)/,
        d = function (t) {
          return f.test(t);
        },
        h = function (t) {
          return t && '*' === t[0];
        },
        v = function (t, e) {
          return {
            route: t,
            score: t.default
              ? 0
              : m(t.path).reduce(function (t, e) {
                  return (
                    (t += 4),
                    !(function (t) {
                      return '' === t;
                    })(e)
                      ? d(e)
                        ? (t += 2)
                        : h(e)
                        ? (t -= 5)
                        : (t += 3)
                      : (t += 1),
                    t
                  );
                }, 0),
            index: e,
          };
        },
        g = function (t) {
          return t.map(v).sort(function (t, e) {
            return t.score < e.score ? 1 : t.score > e.score ? -1 : t.index - e.index;
          });
        },
        m = function (t) {
          return t.replace(/(^\/+|\/+$)/g, '').split('/');
        },
        y = function (t) {
          for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
            n[r - 1] = arguments[r];
          return (
            t +
            ((n = n.filter(function (t) {
              return t && t.length > 0;
            })) && n.length > 0
              ? '?' + n.join('&')
              : '')
          );
        },
        w = ['uri', 'path'],
        b =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        P = function (t) {
          var e = t.location,
            n = e.search,
            r = e.hash,
            o = e.href,
            a = e.origin,
            i = e.protocol,
            s = e.host,
            u = e.hostname,
            c = e.port,
            l = t.location.pathname;
          !l && o && _ && (l = new URL(o).pathname);
          return {
            pathname: encodeURI(decodeURI(l)),
            search: n,
            hash: r,
            href: o,
            origin: a,
            protocol: i,
            host: s,
            hostname: u,
            port: c,
            state: t.history.state,
            key: (t.history.state && t.history.state.key) || 'initial',
          };
        },
        E = function (t, e) {
          var n = [],
            r = P(t),
            o = !1,
            a = function () {};
          return {
            get location() {
              return r;
            },
            get transitioning() {
              return o;
            },
            _onTransitionComplete: function () {
              (o = !1), a();
            },
            listen: function (e) {
              n.push(e);
              var o = function () {
                (r = P(t)), e({ location: r, action: 'POP' });
              };
              return (
                t.addEventListener('popstate', o),
                function () {
                  t.removeEventListener('popstate', o),
                    (n = n.filter(function (t) {
                      return t !== e;
                    }));
                }
              );
            },
            navigate: function (e) {
              var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                s = i.state,
                u = i.replace,
                c = void 0 !== u && u;
              if ('number' == typeof e) t.history.go(e);
              else {
                s = b({}, s, { key: Date.now() + '' });
                try {
                  o || c ? t.history.replaceState(s, null, e) : t.history.pushState(s, null, e);
                } catch (p) {
                  t.location[c ? 'replace' : 'assign'](e);
                }
              }
              (r = P(t)), (o = !0);
              var l = new Promise(function (t) {
                return (a = t);
              });
              return (
                n.forEach(function (t) {
                  return t({ location: r, action: 'PUSH' });
                }),
                l
              );
            },
          };
        },
        S = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '/',
            e = t.indexOf('?'),
            n = { pathname: e > -1 ? t.substr(0, e) : t, search: e > -1 ? t.substr(e) : '' },
            r = 0,
            o = [n],
            a = [null];
          return {
            get location() {
              return o[r];
            },
            addEventListener: function (t, e) {},
            removeEventListener: function (t, e) {},
            history: {
              get entries() {
                return o;
              },
              get index() {
                return r;
              },
              get state() {
                return a[r];
              },
              pushState: function (t, e, n) {
                var i = n.split('?'),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? '' : u;
                r++, o.push({ pathname: s, search: c.length ? '?' + c : c }), a.push(t);
              },
              replaceState: function (t, e, n) {
                var i = n.split('?'),
                  s = i[0],
                  u = i[1],
                  c = void 0 === u ? '' : u;
                (o[r] = { pathname: s, search: c }), (a[r] = t);
              },
              go: function (t) {
                var e = r + t;
                e < 0 || e > a.length - 1 || (r = e);
              },
            },
          };
        },
        _ = !('undefined' == typeof window || !window.document || !window.document.createElement),
        R = E(_ ? window : S()),
        C = R.navigate,
        k =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          };
      function x(t, e) {
        var n = {};
        for (var r in t)
          e.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
        return n;
      }
      function j(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
      }
      function O(t, e) {
        if (!t)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
      }
      function L(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function, not ' + typeof e,
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
          e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
      }
      var D = function (t, e) {
          var n = (0, r.createContext)(e);
          return (n.displayName = t), n;
        },
        T = D('Location'),
        A = function (t) {
          var e = t.children;
          return r.createElement(T.Consumer, null, function (t) {
            return t ? e(t) : r.createElement(U, null, e);
          });
        },
        U = (function (t) {
          function e() {
            var n, r;
            j(this, e);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
            return (
              (n = r = O(this, t.call.apply(t, [this].concat(a)))),
              (r.state = { context: r.getContext(), refs: { unlisten: null } }),
              O(r, n)
            );
          }
          return (
            L(e, t),
            (e.prototype.getContext = function () {
              var t = this.props.history;
              return { navigate: t.navigate, location: t.location };
            }),
            (e.prototype.componentDidCatch = function (t, e) {
              if (!K(t)) throw t;
              (0, this.props.history.navigate)(t.uri, { replace: !0 });
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              e.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete();
            }),
            (e.prototype.componentDidMount = function () {
              var t = this,
                e = this.state.refs,
                n = this.props.history;
              n._onTransitionComplete(),
                (e.unlisten = n.listen(function () {
                  Promise.resolve().then(function () {
                    requestAnimationFrame(function () {
                      t.unmounted ||
                        t.setState(function () {
                          return { context: t.getContext() };
                        });
                    });
                  });
                }));
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.state.refs;
              (this.unmounted = !0), t.unlisten();
            }),
            (e.prototype.render = function () {
              var t = this.state.context,
                e = this.props.children;
              return r.createElement(
                T.Provider,
                { value: t },
                'function' == typeof e ? e(t) : e || null,
              );
            }),
            e
          );
        })(r.Component);
      U.defaultProps = { history: R };
      var M = function (t) {
          var e = t.url,
            n = t.children,
            o = e.indexOf('?'),
            a = void 0,
            i = '';
          return (
            o > -1 ? ((a = e.substring(0, o)), (i = e.substring(o))) : (a = e),
            r.createElement(
              T.Provider,
              {
                value: {
                  location: { pathname: a, search: i, hash: '' },
                  navigate: function () {
                    throw new Error("You can't call navigate on the server.");
                  },
                },
              },
              n,
            )
          );
        },
        I = D('Base', { baseuri: '/', basepath: '/', navigate: R.navigate }),
        W = function (t) {
          return r.createElement(I.Consumer, null, function (e) {
            return r.createElement(A, null, function (n) {
              return r.createElement(N, k({}, e, n, t));
            });
          });
        },
        N = (function (t) {
          function e() {
            return j(this, e), O(this, t.apply(this, arguments));
          }
          return (
            L(e, t),
            (e.prototype.render = function () {
              var t = this.props,
                e = t.location,
                n = t.navigate,
                o = t.basepath,
                a = t.primary,
                i = t.children,
                s = (t.baseuri, t.component),
                c = void 0 === s ? 'div' : s,
                p = x(t, [
                  'location',
                  'navigate',
                  'basepath',
                  'primary',
                  'children',
                  'baseuri',
                  'component',
                ]),
                f = r.Children.toArray(i).reduce(function (t, e) {
                  var n = at(o)(e);
                  return t.concat(n);
                }, []),
                d = e.pathname,
                h = u(f, d);
              if (h) {
                var v = h.params,
                  g = h.uri,
                  m = h.route,
                  y = h.route.value;
                o = m.default ? o : m.path.replace(/\*$/, '');
                var w = k({}, v, {
                    uri: g,
                    location: e,
                    navigate: function (t, e) {
                      return n(l(t, g), e);
                    },
                  }),
                  b = r.cloneElement(
                    y,
                    w,
                    y.props.children
                      ? r.createElement(W, { location: e, primary: a }, y.props.children)
                      : void 0,
                  ),
                  P = a ? F : c,
                  E = a ? k({ uri: g, location: e, component: c }, p) : p;
                return r.createElement(
                  I.Provider,
                  { value: { baseuri: g, basepath: o, navigate: w.navigate } },
                  r.createElement(P, E, b),
                );
              }
              return null;
            }),
            e
          );
        })(r.PureComponent);
      N.defaultProps = { primary: !0 };
      var q = D('Focus'),
        F = function (t) {
          var e = t.uri,
            n = t.location,
            o = t.component,
            a = x(t, ['uri', 'location', 'component']);
          return r.createElement(q.Consumer, null, function (t) {
            return r.createElement(
              z,
              k({}, a, { component: o, requestFocus: t, uri: e, location: n }),
            );
          });
        },
        H = !0,
        Z = 0,
        z = (function (t) {
          function e() {
            var n, r;
            j(this, e);
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
            return (
              (n = r = O(this, t.call.apply(t, [this].concat(a)))),
              (r.state = {}),
              (r.requestFocus = function (t) {
                !r.state.shouldFocus && t && t.focus();
              }),
              O(r, n)
            );
          }
          return (
            L(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              if (null == e.uri) return k({ shouldFocus: !0 }, t);
              var n = t.uri !== e.uri,
                r = e.location.pathname !== t.location.pathname && t.location.pathname === t.uri;
              return k({ shouldFocus: n || r }, t);
            }),
            (e.prototype.componentDidMount = function () {
              Z++, this.focus();
            }),
            (e.prototype.componentWillUnmount = function () {
              0 === --Z && (H = !0);
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              t.location !== this.props.location && this.state.shouldFocus && this.focus();
            }),
            (e.prototype.focus = function () {
              var t = this.props.requestFocus;
              t
                ? t(this.node)
                : H
                ? (H = !1)
                : this.node && (this.node.contains(document.activeElement) || this.node.focus());
            }),
            (e.prototype.render = function () {
              var t = this,
                e = this.props,
                n = (e.children, e.style),
                o = (e.requestFocus, e.component),
                a = void 0 === o ? 'div' : o,
                i =
                  (e.uri,
                  e.location,
                  x(e, ['children', 'style', 'requestFocus', 'component', 'uri', 'location']));
              return r.createElement(
                a,
                k(
                  {
                    style: k({ outline: 'none' }, n),
                    tabIndex: '-1',
                    ref: function (e) {
                      return (t.node = e);
                    },
                  },
                  i,
                ),
                r.createElement(q.Provider, { value: this.requestFocus }, this.props.children),
              );
            }),
            e
          );
        })(r.Component);
      (0, i.O)(z);
      var G = function () {},
        Q = r.forwardRef;
      void 0 === Q &&
        (Q = function (t) {
          return t;
        });
      var B = Q(function (t, e) {
        var n = t.innerRef,
          o = x(t, ['innerRef']);
        return r.createElement(I.Consumer, null, function (t) {
          t.basepath;
          var a = t.baseuri;
          return r.createElement(A, null, function (t) {
            var i = t.location,
              u = t.navigate,
              c = o.to,
              p = o.state,
              f = o.replace,
              d = o.getProps,
              h = void 0 === d ? G : d,
              v = x(o, ['to', 'state', 'replace', 'getProps']),
              g = l(c, a),
              m = encodeURI(g),
              y = i.pathname === m,
              w = s(i.pathname, m);
            return r.createElement(
              'a',
              k(
                { ref: e || n, 'aria-current': y ? 'page' : void 0 },
                v,
                h({ isCurrent: y, isPartiallyCurrent: w, href: g, location: i }),
                {
                  href: g,
                  onClick: function (t) {
                    if ((v.onClick && v.onClick(t), it(t))) {
                      t.preventDefault();
                      var e = f;
                      if ('boolean' != typeof f && y) {
                        var n = k({}, i.state),
                          r = (n.key, x(n, ['key']));
                        (o = k({}, p)),
                          (a = r),
                          (e =
                            (s = Object.keys(o)).length === Object.keys(a).length &&
                            s.every(function (t) {
                              return a.hasOwnProperty(t) && o[t] === a[t];
                            }));
                      }
                      u(g, { state: p, replace: e });
                    }
                    var o, a, s;
                  },
                },
              ),
            );
          });
        });
      });
      function J(t) {
        this.uri = t;
      }
      B.displayName = 'Link';
      var K = function (t) {
          return t instanceof J;
        },
        $ = function (t) {
          throw new J(t);
        },
        V = (function (t) {
          function e() {
            return j(this, e), O(this, t.apply(this, arguments));
          }
          return (
            L(e, t),
            (e.prototype.componentDidMount = function () {
              var t = this.props,
                e = t.navigate,
                n = t.to,
                r = (t.from, t.replace),
                o = void 0 === r || r,
                a = t.state,
                i = (t.noThrow, t.baseuri),
                s = x(t, ['navigate', 'to', 'from', 'replace', 'state', 'noThrow', 'baseuri']);
              Promise.resolve().then(function () {
                var t = l(n, i);
                e(p(t, s), { replace: o, state: a });
              });
            }),
            (e.prototype.render = function () {
              var t = this.props,
                e = (t.navigate, t.to),
                n = (t.from, t.replace, t.state, t.noThrow),
                r = t.baseuri,
                o = x(t, ['navigate', 'to', 'from', 'replace', 'state', 'noThrow', 'baseuri']),
                a = l(e, r);
              return n || $(p(a, o)), null;
            }),
            e
          );
        })(r.Component),
        Y = function (t) {
          return r.createElement(I.Consumer, null, function (e) {
            var n = e.baseuri;
            return r.createElement(A, null, function (e) {
              return r.createElement(V, k({}, e, { baseuri: n }, t));
            });
          });
        },
        X = function (t) {
          var e = t.path,
            n = t.children;
          return r.createElement(I.Consumer, null, function (t) {
            var o = t.baseuri;
            return r.createElement(A, null, function (t) {
              var r = t.navigate,
                a = t.location,
                i = l(e, o),
                s = c(i, a.pathname);
              return n({
                navigate: r,
                location: a,
                match: s ? k({}, s.params, { uri: s.uri, path: e }) : null,
              });
            });
          });
        },
        tt = function () {
          var t = (0, r.useContext)(T);
          if (!t)
            throw new Error(
              'useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
            );
          return t.location;
        },
        et = function () {
          var t = (0, r.useContext)(I);
          if (!t)
            throw new Error(
              'useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
            );
          return t.navigate;
        },
        nt = function () {
          var t = (0, r.useContext)(I);
          if (!t)
            throw new Error(
              'useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
            );
          var e = tt(),
            n = c(t.basepath, e.pathname);
          return n ? n.params : null;
        },
        rt = function (t) {
          if (!t)
            throw new Error(
              'useMatch(path: string) requires an argument of a string to match against',
            );
          var e = (0, r.useContext)(I);
          if (!e)
            throw new Error(
              'useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router',
            );
          var n = tt(),
            o = l(t, e.baseuri),
            a = c(o, n.pathname);
          return a ? k({}, a.params, { uri: a.uri, path: t }) : null;
        },
        ot = function (t) {
          return t.replace(/(^\/+|\/+$)/g, '');
        },
        at = function t(e) {
          return function (n) {
            if (!n) return null;
            if (n.type === r.Fragment && n.props.children)
              return r.Children.map(n.props.children, t(e));
            var o, i, s;
            if (
              (n.props.path || n.props.default || n.type === Y || a()(!1),
              n.type !== Y || (n.props.from && n.props.to) || a()(!1),
              n.type === Y &&
                ((o = n.props.from),
                (i = n.props.to),
                (s = function (t) {
                  return d(t);
                }),
                m(o).filter(s).sort().join('/') !== m(i).filter(s).sort().join('/')) &&
                a()(!1),
              n.props.default)
            )
              return { value: n, default: !0 };
            var u = n.type === Y ? n.props.from : n.props.path,
              c = '/' === u ? e : ot(e) + '/' + ot(u);
            return {
              value: n,
              default: n.props.default,
              path: n.props.children ? ot(c) + '/*' : c,
            };
          };
        },
        it = function (t) {
          return (
            !t.defaultPrevented &&
            0 === t.button &&
            !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
          );
        };
    },
    1143: function (t) {
      'use strict';
      t.exports = function (t, e, n, r, o, a, i, s) {
        if (!t) {
          var u;
          if (void 0 === e)
            u = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
            );
          else {
            var c = [n, r, o, a, i, s],
              l = 0;
            (u = new Error(
              e.replace(/%s/g, function () {
                return c[l++];
              }),
            )).name = 'Invariant Violation';
          }
          throw ((u.framesToPop = 1), u);
        }
      };
    },
  },
  function (t) {
    'use strict';
    t.O(0, [774], function () {
      return (e = 376), t((t.s = e));
      var e;
    });
    t.O();
  },
]);
//# sourceMappingURL=app-21c537d507356d9eb217.js.map
