/*! For license information please see 4d99978a-54a1ce709f7c24d87da5.js.LICENSE.txt */
'use strict';
(self.webpackChunkv4 = self.webpackChunkv4 || []).push([
  [447],
  {
    3348: function (e, r, t) {
      t.d(r, {
        C5: function () {
          return E;
        },
        xv: function () {
          return fe;
        },
      });
      var a = t(6449),
        n = t(5671),
        i = t(3144),
        o = t(136),
        s = t(2963),
        u = t(1120),
        l = t(3433),
        f = t(9439),
        h = t(3456),
        d = t(3804),
        c = t(3703),
        v = t(7218),
        p = t(7519);
      function g(e) {
        var r = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            a = (0, u.Z)(e);
          if (r) {
            var n = (0, u.Z)(this).constructor;
            t = Reflect.construct(a, arguments, n);
          } else t = a.apply(this, arguments);
          return (0, s.Z)(this, t);
        };
      }
      var y,
        m = function () {
          return (self.performance || Date).now();
        },
        S = (0, c.Z)();
      var U = [],
        x = 0;
      function b() {
        for (var e = m(); U.length && m() - e < 5; ) U.shift()();
        x = U.length ? setTimeout(b, 0) : 0;
      }
      var k = function () {
          for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
          return new Promise(function (e, t) {
            U.push(function () {
              var a = m();
              try {
                var n;
                (n = S.webgl).generateIntoCanvas.apply(n, r), e({ timing: m() - a });
              } catch (i) {
                t(i);
              }
            }),
              x || (x = setTimeout(b, 0));
          });
        },
        T = 4,
        w = 2e3,
        F = {},
        C = 0;
      function _(e, r, t, a, n, i, o, s, u, l) {
        var f = 'TroikaTextSDFGenerator_JS_' + (C++ % T),
          h = F[f];
        return (
          h ||
            (h = F[f] =
              {
                workerModule: (0, d.Ch)({
                  name: f,
                  workerId: f,
                  dependencies: [c.Z, m],
                  init: function (e, r) {
                    var t = e().javascript.generate;
                    return function () {
                      var e = r();
                      return { textureData: t.apply(void 0, arguments), timing: r() - e };
                    };
                  },
                  getTransferables: function (e) {
                    return [e.textureData.buffer];
                  },
                }),
                requests: 0,
                idleTimer: null,
              }),
          h.requests++,
          clearTimeout(h.idleTimer),
          h.workerModule(e, r, t, a, n, i).then(function (t) {
            for (
              var a = t.textureData, n = t.timing, i = m(), c = new Uint8Array(4 * a.length), v = 0;
              v < a.length;
              v++
            )
              c[4 * v + l] = a[v];
            return (
              S.webglUtils.renderImageData(o, c, s, u, e, r, 1 << (3 - l)),
              (n += m() - i),
              0 == --h.requests &&
                (h.idleTimer = setTimeout(function () {
                  (0, d.Ae)(f);
                }, w)),
              { timing: n }
            );
          })
        );
      }
      var D = S.webglUtils.resizeWebGLCanvasWithoutClearing;
      var G = (0, d.Ch)({
          name: 'Typr Font Parser',
          dependencies: [
            function () {
              return (
                'undefined' == typeof window && (self.window = self),
                (function (e) {
                  var r = {
                    parse: function (e) {
                      var t = r._bin,
                        a = new Uint8Array(e);
                      if ('ttcf' == t.readASCII(a, 0, 4)) {
                        var n = 4;
                        t.readUshort(a, n), (n += 2), t.readUshort(a, n), (n += 2);
                        var i = t.readUint(a, n);
                        n += 4;
                        for (var o = [], s = 0; s < i; s++) {
                          var u = t.readUint(a, n);
                          (n += 4), o.push(r._readFont(a, u));
                        }
                        return o;
                      }
                      return [r._readFont(a, 0)];
                    },
                    _readFont: function (e, t) {
                      var a = r._bin,
                        n = t;
                      a.readFixed(e, t), (t += 4);
                      var i = a.readUshort(e, t);
                      (t += 2),
                        a.readUshort(e, t),
                        (t += 2),
                        a.readUshort(e, t),
                        (t += 2),
                        a.readUshort(e, t),
                        (t += 2);
                      for (
                        var o = [
                            'cmap',
                            'head',
                            'hhea',
                            'maxp',
                            'hmtx',
                            'name',
                            'OS/2',
                            'post',
                            'loca',
                            'glyf',
                            'kern',
                            'CFF ',
                            'GPOS',
                            'GSUB',
                            'SVG ',
                          ],
                          s = { _data: e, _offset: n },
                          u = {},
                          l = 0;
                        l < i;
                        l++
                      ) {
                        var f = a.readASCII(e, t, 4);
                        (t += 4), a.readUint(e, t), (t += 4);
                        var h = a.readUint(e, t);
                        t += 4;
                        var d = a.readUint(e, t);
                        (t += 4), (u[f] = { offset: h, length: d });
                      }
                      for (l = 0; l < o.length; l++) {
                        var c = o[l];
                        u[c] && (s[c.trim()] = r[c.trim()].parse(e, u[c].offset, u[c].length, s));
                      }
                      return s;
                    },
                    _tabOffset: function (e, t, a) {
                      for (
                        var n = r._bin, i = n.readUshort(e, a + 4), o = a + 12, s = 0;
                        s < i;
                        s++
                      ) {
                        var u = n.readASCII(e, o, 4);
                        (o += 4), n.readUint(e, o), (o += 4);
                        var l = n.readUint(e, o);
                        if (((o += 4), n.readUint(e, o), (o += 4), u == t)) return l;
                      }
                      return 0;
                    },
                  };
                  (r._bin = {
                    readFixed: function (e, r) {
                      return ((e[r] << 8) | e[r + 1]) + ((e[r + 2] << 8) | e[r + 3]) / 65540;
                    },
                    readF2dot14: function (e, t) {
                      return r._bin.readShort(e, t) / 16384;
                    },
                    readInt: function (e, t) {
                      return r._bin._view(e).getInt32(t);
                    },
                    readInt8: function (e, t) {
                      return r._bin._view(e).getInt8(t);
                    },
                    readShort: function (e, t) {
                      return r._bin._view(e).getInt16(t);
                    },
                    readUshort: function (e, t) {
                      return r._bin._view(e).getUint16(t);
                    },
                    readUshorts: function (e, t, a) {
                      for (var n = [], i = 0; i < a; i++) n.push(r._bin.readUshort(e, t + 2 * i));
                      return n;
                    },
                    readUint: function (e, t) {
                      return r._bin._view(e).getUint32(t);
                    },
                    readUint64: function (e, t) {
                      return 4294967296 * r._bin.readUint(e, t) + r._bin.readUint(e, t + 4);
                    },
                    readASCII: function (e, r, t) {
                      for (var a = '', n = 0; n < t; n++) a += String.fromCharCode(e[r + n]);
                      return a;
                    },
                    readUnicode: function (e, r, t) {
                      for (var a = '', n = 0; n < t; n++) {
                        var i = (e[r++] << 8) | e[r++];
                        a += String.fromCharCode(i);
                      }
                      return a;
                    },
                    _tdec:
                      'undefined' != typeof window && window.TextDecoder
                        ? new window.TextDecoder()
                        : null,
                    readUTF8: function (e, t, a) {
                      var n = r._bin._tdec;
                      return n && 0 == t && a == e.length ? n.decode(e) : r._bin.readASCII(e, t, a);
                    },
                    readBytes: function (e, r, t) {
                      for (var a = [], n = 0; n < t; n++) a.push(e[r + n]);
                      return a;
                    },
                    readASCIIArray: function (e, r, t) {
                      for (var a = [], n = 0; n < t; n++) a.push(String.fromCharCode(e[r + n]));
                      return a;
                    },
                    _view: function (e) {
                      return (
                        e._dataView ||
                        (e._dataView = e.buffer
                          ? new DataView(e.buffer, e.byteOffset, e.byteLength)
                          : new DataView(new Uint8Array(e).buffer))
                      );
                    },
                  }),
                    (r._lctf = {}),
                    (r._lctf.parse = function (e, t, a, n, i) {
                      var o = r._bin,
                        s = {},
                        u = t;
                      o.readFixed(e, t), (t += 4);
                      var l = o.readUshort(e, t);
                      t += 2;
                      var f = o.readUshort(e, t);
                      t += 2;
                      var h = o.readUshort(e, t);
                      return (
                        (t += 2),
                        (s.scriptList = r._lctf.readScriptList(e, u + l)),
                        (s.featureList = r._lctf.readFeatureList(e, u + f)),
                        (s.lookupList = r._lctf.readLookupList(e, u + h, i)),
                        s
                      );
                    }),
                    (r._lctf.readLookupList = function (e, t, a) {
                      var n = r._bin,
                        i = t,
                        o = [],
                        s = n.readUshort(e, t);
                      t += 2;
                      for (var u = 0; u < s; u++) {
                        var l = n.readUshort(e, t);
                        t += 2;
                        var f = r._lctf.readLookupTable(e, i + l, a);
                        o.push(f);
                      }
                      return o;
                    }),
                    (r._lctf.readLookupTable = function (e, t, a) {
                      var n = r._bin,
                        i = t,
                        o = { tabs: [] };
                      (o.ltype = n.readUshort(e, t)),
                        (t += 2),
                        (o.flag = n.readUshort(e, t)),
                        (t += 2);
                      var s = n.readUshort(e, t);
                      t += 2;
                      for (var u = o.ltype, l = 0; l < s; l++) {
                        var f = n.readUshort(e, t);
                        t += 2;
                        var h = a(e, u, i + f, o);
                        o.tabs.push(h);
                      }
                      return o;
                    }),
                    (r._lctf.numOfOnes = function (e) {
                      for (var r = 0, t = 0; t < 32; t++) 0 != ((e >>> t) & 1) && r++;
                      return r;
                    }),
                    (r._lctf.readClassDef = function (e, t) {
                      var a = r._bin,
                        n = [],
                        i = a.readUshort(e, t);
                      if (((t += 2), 1 == i)) {
                        var o = a.readUshort(e, t);
                        t += 2;
                        var s = a.readUshort(e, t);
                        t += 2;
                        for (var u = 0; u < s; u++)
                          n.push(o + u), n.push(o + u), n.push(a.readUshort(e, t)), (t += 2);
                      }
                      if (2 == i) {
                        var l = a.readUshort(e, t);
                        for (t += 2, u = 0; u < l; u++)
                          n.push(a.readUshort(e, t)),
                            (t += 2),
                            n.push(a.readUshort(e, t)),
                            (t += 2),
                            n.push(a.readUshort(e, t)),
                            (t += 2);
                      }
                      return n;
                    }),
                    (r._lctf.getInterval = function (e, r) {
                      for (var t = 0; t < e.length; t += 3) {
                        var a = e[t],
                          n = e[t + 1];
                        if ((e[t + 2], a <= r && r <= n)) return t;
                      }
                      return -1;
                    }),
                    (r._lctf.readCoverage = function (e, t) {
                      var a = r._bin,
                        n = {};
                      (n.fmt = a.readUshort(e, t)), (t += 2);
                      var i = a.readUshort(e, t);
                      return (
                        (t += 2),
                        1 == n.fmt && (n.tab = a.readUshorts(e, t, i)),
                        2 == n.fmt && (n.tab = a.readUshorts(e, t, 3 * i)),
                        n
                      );
                    }),
                    (r._lctf.coverageIndex = function (e, t) {
                      var a = e.tab;
                      if (1 == e.fmt) return a.indexOf(t);
                      if (2 == e.fmt) {
                        var n = r._lctf.getInterval(a, t);
                        if (-1 != n) return a[n + 2] + (t - a[n]);
                      }
                      return -1;
                    }),
                    (r._lctf.readFeatureList = function (e, t) {
                      var a = r._bin,
                        n = t,
                        i = [],
                        o = a.readUshort(e, t);
                      t += 2;
                      for (var s = 0; s < o; s++) {
                        var u = a.readASCII(e, t, 4);
                        t += 4;
                        var l = a.readUshort(e, t);
                        t += 2;
                        var f = r._lctf.readFeatureTable(e, n + l);
                        (f.tag = u.trim()), i.push(f);
                      }
                      return i;
                    }),
                    (r._lctf.readFeatureTable = function (e, t) {
                      var a = r._bin,
                        n = t,
                        i = {},
                        o = a.readUshort(e, t);
                      (t += 2), o > 0 && (i.featureParams = n + o);
                      var s = a.readUshort(e, t);
                      (t += 2), (i.tab = []);
                      for (var u = 0; u < s; u++) i.tab.push(a.readUshort(e, t + 2 * u));
                      return i;
                    }),
                    (r._lctf.readScriptList = function (e, t) {
                      var a = r._bin,
                        n = t,
                        i = {},
                        o = a.readUshort(e, t);
                      t += 2;
                      for (var s = 0; s < o; s++) {
                        var u = a.readASCII(e, t, 4);
                        t += 4;
                        var l = a.readUshort(e, t);
                        (t += 2), (i[u.trim()] = r._lctf.readScriptTable(e, n + l));
                      }
                      return i;
                    }),
                    (r._lctf.readScriptTable = function (e, t) {
                      var a = r._bin,
                        n = t,
                        i = {},
                        o = a.readUshort(e, t);
                      (t += 2), (i.default = r._lctf.readLangSysTable(e, n + o));
                      var s = a.readUshort(e, t);
                      t += 2;
                      for (var u = 0; u < s; u++) {
                        var l = a.readASCII(e, t, 4);
                        t += 4;
                        var f = a.readUshort(e, t);
                        (t += 2), (i[l.trim()] = r._lctf.readLangSysTable(e, n + f));
                      }
                      return i;
                    }),
                    (r._lctf.readLangSysTable = function (e, t) {
                      var a = r._bin,
                        n = {};
                      a.readUshort(e, t), (t += 2), (n.reqFeature = a.readUshort(e, t)), (t += 2);
                      var i = a.readUshort(e, t);
                      return (t += 2), (n.features = a.readUshorts(e, t, i)), n;
                    }),
                    (r.CFF = {}),
                    (r.CFF.parse = function (e, t, a) {
                      var n = r._bin;
                      (e = new Uint8Array(e.buffer, t, a))[(t = 0)], e[++t], e[++t], e[++t], t++;
                      var i = [];
                      t = r.CFF.readIndex(e, t, i);
                      for (var o = [], s = 0; s < i.length - 1; s++)
                        o.push(n.readASCII(e, t + i[s], i[s + 1] - i[s]));
                      t += i[i.length - 1];
                      var u = [];
                      t = r.CFF.readIndex(e, t, u);
                      var l = [];
                      for (s = 0; s < u.length - 1; s++)
                        l.push(r.CFF.readDict(e, t + u[s], t + u[s + 1]));
                      t += u[u.length - 1];
                      var f = l[0],
                        h = [];
                      t = r.CFF.readIndex(e, t, h);
                      var d = [];
                      for (s = 0; s < h.length - 1; s++)
                        d.push(n.readASCII(e, t + h[s], h[s + 1] - h[s]));
                      if (((t += h[h.length - 1]), r.CFF.readSubrs(e, t, f), f.CharStrings)) {
                        (t = f.CharStrings), (h = []), (t = r.CFF.readIndex(e, t, h));
                        var c = [];
                        for (s = 0; s < h.length - 1; s++)
                          c.push(n.readBytes(e, t + h[s], h[s + 1] - h[s]));
                        f.CharStrings = c;
                      }
                      if (f.ROS) {
                        t = f.FDArray;
                        var v = [];
                        for (
                          t = r.CFF.readIndex(e, t, v), f.FDArray = [], s = 0;
                          s < v.length - 1;
                          s++
                        ) {
                          var p = r.CFF.readDict(e, t + v[s], t + v[s + 1]);
                          r.CFF._readFDict(e, p, d), f.FDArray.push(p);
                        }
                        (t += v[v.length - 1]), (t = f.FDSelect), (f.FDSelect = []);
                        var g = e[t];
                        if ((t++, 3 != g)) throw g;
                        var y = n.readUshort(e, t);
                        for (t += 2, s = 0; s < y + 1; s++)
                          f.FDSelect.push(n.readUshort(e, t), e[t + 2]), (t += 3);
                      }
                      return (
                        f.Encoding &&
                          (f.Encoding = r.CFF.readEncoding(e, f.Encoding, f.CharStrings.length)),
                        f.charset &&
                          (f.charset = r.CFF.readCharset(e, f.charset, f.CharStrings.length)),
                        r.CFF._readFDict(e, f, d),
                        f
                      );
                    }),
                    (r.CFF._readFDict = function (e, t, a) {
                      var n;
                      for (var i in (t.Private &&
                        ((n = t.Private[1]),
                        (t.Private = r.CFF.readDict(e, n, n + t.Private[0])),
                        t.Private.Subrs && r.CFF.readSubrs(e, n + t.Private.Subrs, t.Private)),
                      t))
                        -1 !=
                          [
                            'FamilyName',
                            'FontName',
                            'FullName',
                            'Notice',
                            'version',
                            'Copyright',
                          ].indexOf(i) && (t[i] = a[t[i] - 426 + 35]);
                    }),
                    (r.CFF.readSubrs = function (e, t, a) {
                      var n = r._bin,
                        i = [];
                      t = r.CFF.readIndex(e, t, i);
                      var o,
                        s = i.length;
                      (o = s < 1240 ? 107 : s < 33900 ? 1131 : 32768), (a.Bias = o), (a.Subrs = []);
                      for (var u = 0; u < i.length - 1; u++)
                        a.Subrs.push(n.readBytes(e, t + i[u], i[u + 1] - i[u]));
                    }),
                    (r.CFF.tableSE = [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                      18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
                      37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
                      56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
                      75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
                      94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
                      106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119,
                      120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133,
                      0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0,
                      139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0,
                      146, 147, 148, 149, 0, 0, 0, 0,
                    ]),
                    (r.CFF.glyphByUnicode = function (e, r) {
                      for (var t = 0; t < e.charset.length; t++) if (e.charset[t] == r) return t;
                      return -1;
                    }),
                    (r.CFF.glyphBySE = function (e, t) {
                      return t < 0 || t > 255 ? -1 : r.CFF.glyphByUnicode(e, r.CFF.tableSE[t]);
                    }),
                    (r.CFF.readEncoding = function (e, t, a) {
                      r._bin;
                      var n = ['.notdef'],
                        i = e[t];
                      if ((t++, 0 != i)) throw 'error: unknown encoding format: ' + i;
                      var o = e[t];
                      t++;
                      for (var s = 0; s < o; s++) n.push(e[t + s]);
                      return n;
                    }),
                    (r.CFF.readCharset = function (e, t, a) {
                      var n = r._bin,
                        i = ['.notdef'],
                        o = e[t];
                      if ((t++, 0 == o))
                        for (var s = 0; s < a; s++) {
                          var u = n.readUshort(e, t);
                          (t += 2), i.push(u);
                        }
                      else {
                        if (1 != o && 2 != o) throw 'error: format: ' + o;
                        for (; i.length < a; ) {
                          (u = n.readUshort(e, t)), (t += 2);
                          var l = 0;
                          for (
                            1 == o ? ((l = e[t]), t++) : ((l = n.readUshort(e, t)), (t += 2)),
                              s = 0;
                            s <= l;
                            s++
                          )
                            i.push(u), u++;
                        }
                      }
                      return i;
                    }),
                    (r.CFF.readIndex = function (e, t, a) {
                      var n = r._bin,
                        i = n.readUshort(e, t) + 1,
                        o = e[(t += 2)];
                      if ((t++, 1 == o)) for (var s = 0; s < i; s++) a.push(e[t + s]);
                      else if (2 == o) for (s = 0; s < i; s++) a.push(n.readUshort(e, t + 2 * s));
                      else if (3 == o)
                        for (s = 0; s < i; s++) a.push(16777215 & n.readUint(e, t + 3 * s - 1));
                      else if (1 != i) throw 'unsupported offset size: ' + o + ', count: ' + i;
                      return (t += i * o) - 1;
                    }),
                    (r.CFF.getCharString = function (e, t, a) {
                      var n = r._bin,
                        i = e[t],
                        o = e[t + 1];
                      e[t + 2], e[t + 3], e[t + 4];
                      var s = 1,
                        u = null,
                        l = null;
                      i <= 20 && ((u = i), (s = 1)),
                        12 == i && ((u = 100 * i + o), (s = 2)),
                        21 <= i && i <= 27 && ((u = i), (s = 1)),
                        28 == i && ((l = n.readShort(e, t + 1)), (s = 3)),
                        29 <= i && i <= 31 && ((u = i), (s = 1)),
                        32 <= i && i <= 246 && ((l = i - 139), (s = 1)),
                        247 <= i && i <= 250 && ((l = 256 * (i - 247) + o + 108), (s = 2)),
                        251 <= i && i <= 254 && ((l = 256 * -(i - 251) - o - 108), (s = 2)),
                        255 == i && ((l = n.readInt(e, t + 1) / 65535), (s = 5)),
                        (a.val = null != l ? l : 'o' + u),
                        (a.size = s);
                    }),
                    (r.CFF.readCharString = function (e, t, a) {
                      for (var n = t + a, i = r._bin, o = []; t < n; ) {
                        var s = e[t],
                          u = e[t + 1];
                        e[t + 2], e[t + 3], e[t + 4];
                        var l = 1,
                          f = null,
                          h = null;
                        s <= 20 && ((f = s), (l = 1)),
                          12 == s && ((f = 100 * s + u), (l = 2)),
                          (19 != s && 20 != s) || ((f = s), (l = 2)),
                          21 <= s && s <= 27 && ((f = s), (l = 1)),
                          28 == s && ((h = i.readShort(e, t + 1)), (l = 3)),
                          29 <= s && s <= 31 && ((f = s), (l = 1)),
                          32 <= s && s <= 246 && ((h = s - 139), (l = 1)),
                          247 <= s && s <= 250 && ((h = 256 * (s - 247) + u + 108), (l = 2)),
                          251 <= s && s <= 254 && ((h = 256 * -(s - 251) - u - 108), (l = 2)),
                          255 == s && ((h = i.readInt(e, t + 1) / 65535), (l = 5)),
                          o.push(null != h ? h : 'o' + f),
                          (t += l);
                      }
                      return o;
                    }),
                    (r.CFF.readDict = function (e, t, a) {
                      for (var n = r._bin, i = {}, o = []; t < a; ) {
                        var s = e[t],
                          u = e[t + 1];
                        e[t + 2], e[t + 3], e[t + 4];
                        var l = 1,
                          f = null,
                          h = null;
                        if (
                          (28 == s && ((h = n.readShort(e, t + 1)), (l = 3)),
                          29 == s && ((h = n.readInt(e, t + 1)), (l = 5)),
                          32 <= s && s <= 246 && ((h = s - 139), (l = 1)),
                          247 <= s && s <= 250 && ((h = 256 * (s - 247) + u + 108), (l = 2)),
                          251 <= s && s <= 254 && ((h = 256 * -(s - 251) - u - 108), (l = 2)),
                          255 == s)
                        )
                          throw ((h = n.readInt(e, t + 1) / 65535), (l = 5), 'unknown number');
                        if (30 == s) {
                          var d = [];
                          for (l = 1; ; ) {
                            var c = e[t + l];
                            l++;
                            var v = c >> 4,
                              p = 15 & c;
                            if ((15 != v && d.push(v), 15 != p && d.push(p), 15 == p)) break;
                          }
                          for (
                            var g = '',
                              y = [
                                0,
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                7,
                                8,
                                9,
                                '.',
                                'e',
                                'e-',
                                'reserved',
                                '-',
                                'endOfNumber',
                              ],
                              m = 0;
                            m < d.length;
                            m++
                          )
                            g += y[d[m]];
                          h = parseFloat(g);
                        }
                        s <= 21 &&
                          ((f = [
                            'version',
                            'Notice',
                            'FullName',
                            'FamilyName',
                            'Weight',
                            'FontBBox',
                            'BlueValues',
                            'OtherBlues',
                            'FamilyBlues',
                            'FamilyOtherBlues',
                            'StdHW',
                            'StdVW',
                            'escape',
                            'UniqueID',
                            'XUID',
                            'charset',
                            'Encoding',
                            'CharStrings',
                            'Private',
                            'Subrs',
                            'defaultWidthX',
                            'nominalWidthX',
                          ][s]),
                          (l = 1),
                          12 == s &&
                            ((f = [
                              'Copyright',
                              'isFixedPitch',
                              'ItalicAngle',
                              'UnderlinePosition',
                              'UnderlineThickness',
                              'PaintType',
                              'CharstringType',
                              'FontMatrix',
                              'StrokeWidth',
                              'BlueScale',
                              'BlueShift',
                              'BlueFuzz',
                              'StemSnapH',
                              'StemSnapV',
                              'ForceBold',
                              0,
                              0,
                              'LanguageGroup',
                              'ExpansionFactor',
                              'initialRandomSeed',
                              'SyntheticBase',
                              'PostScript',
                              'BaseFontName',
                              'BaseFontBlend',
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              'ROS',
                              'CIDFontVersion',
                              'CIDFontRevision',
                              'CIDFontType',
                              'CIDCount',
                              'UIDBase',
                              'FDArray',
                              'FDSelect',
                              'FontName',
                            ][u]),
                            (l = 2))),
                          null != f ? ((i[f] = 1 == o.length ? o[0] : o), (o = [])) : o.push(h),
                          (t += l);
                      }
                      return i;
                    }),
                    (r.cmap = {}),
                    (r.cmap.parse = function (e, t, a) {
                      (e = new Uint8Array(e.buffer, t, a)), (t = 0);
                      var n = r._bin,
                        i = {};
                      n.readUshort(e, t), (t += 2);
                      var o = n.readUshort(e, t);
                      t += 2;
                      var s = [];
                      i.tables = [];
                      for (var u = 0; u < o; u++) {
                        var l = n.readUshort(e, t);
                        t += 2;
                        var f = n.readUshort(e, t);
                        t += 2;
                        var h = n.readUint(e, t);
                        t += 4;
                        var d = 'p' + l + 'e' + f,
                          c = s.indexOf(h);
                        if (-1 == c) {
                          var v;
                          (c = i.tables.length), s.push(h);
                          var p = n.readUshort(e, h);
                          0 == p
                            ? (v = r.cmap.parse0(e, h))
                            : 4 == p
                            ? (v = r.cmap.parse4(e, h))
                            : 6 == p
                            ? (v = r.cmap.parse6(e, h))
                            : 12 == p
                            ? (v = r.cmap.parse12(e, h))
                            : console.debug('unknown format: ' + p, l, f, h),
                            i.tables.push(v);
                        }
                        if (null != i[d]) throw 'multiple tables for one platform+encoding';
                        i[d] = c;
                      }
                      return i;
                    }),
                    (r.cmap.parse0 = function (e, t) {
                      var a = r._bin,
                        n = {};
                      (n.format = a.readUshort(e, t)), (t += 2);
                      var i = a.readUshort(e, t);
                      (t += 2), a.readUshort(e, t), (t += 2), (n.map = []);
                      for (var o = 0; o < i - 6; o++) n.map.push(e[t + o]);
                      return n;
                    }),
                    (r.cmap.parse4 = function (e, t) {
                      var a = r._bin,
                        n = t,
                        i = {};
                      (i.format = a.readUshort(e, t)), (t += 2);
                      var o = a.readUshort(e, t);
                      (t += 2), a.readUshort(e, t), (t += 2);
                      var s = a.readUshort(e, t);
                      t += 2;
                      var u = s / 2;
                      (i.searchRange = a.readUshort(e, t)),
                        (t += 2),
                        (i.entrySelector = a.readUshort(e, t)),
                        (t += 2),
                        (i.rangeShift = a.readUshort(e, t)),
                        (t += 2),
                        (i.endCount = a.readUshorts(e, t, u)),
                        (t += 2 * u),
                        (t += 2),
                        (i.startCount = a.readUshorts(e, t, u)),
                        (t += 2 * u),
                        (i.idDelta = []);
                      for (var l = 0; l < u; l++) i.idDelta.push(a.readShort(e, t)), (t += 2);
                      for (
                        i.idRangeOffset = a.readUshorts(e, t, u), t += 2 * u, i.glyphIdArray = [];
                        t < n + o;

                      )
                        i.glyphIdArray.push(a.readUshort(e, t)), (t += 2);
                      return i;
                    }),
                    (r.cmap.parse6 = function (e, t) {
                      var a = r._bin,
                        n = {};
                      (n.format = a.readUshort(e, t)),
                        (t += 2),
                        a.readUshort(e, t),
                        (t += 2),
                        a.readUshort(e, t),
                        (t += 2),
                        (n.firstCode = a.readUshort(e, t)),
                        (t += 2);
                      var i = a.readUshort(e, t);
                      (t += 2), (n.glyphIdArray = []);
                      for (var o = 0; o < i; o++) n.glyphIdArray.push(a.readUshort(e, t)), (t += 2);
                      return n;
                    }),
                    (r.cmap.parse12 = function (e, t) {
                      var a = r._bin,
                        n = {};
                      (n.format = a.readUshort(e, t)),
                        (t += 2),
                        (t += 2),
                        a.readUint(e, t),
                        (t += 4),
                        a.readUint(e, t),
                        (t += 4);
                      var i = a.readUint(e, t);
                      (t += 4), (n.groups = []);
                      for (var o = 0; o < i; o++) {
                        var s = t + 12 * o,
                          u = a.readUint(e, s + 0),
                          l = a.readUint(e, s + 4),
                          f = a.readUint(e, s + 8);
                        n.groups.push([u, l, f]);
                      }
                      return n;
                    }),
                    (r.glyf = {}),
                    (r.glyf.parse = function (e, r, t, a) {
                      for (var n = [], i = 0; i < a.maxp.numGlyphs; i++) n.push(null);
                      return n;
                    }),
                    (r.glyf._parseGlyf = function (e, t) {
                      var a = r._bin,
                        n = e._data,
                        i = r._tabOffset(n, 'glyf', e._offset) + e.loca[t];
                      if (e.loca[t] == e.loca[t + 1]) return null;
                      var o = {};
                      if (
                        ((o.noc = a.readShort(n, i)),
                        (i += 2),
                        (o.xMin = a.readShort(n, i)),
                        (i += 2),
                        (o.yMin = a.readShort(n, i)),
                        (i += 2),
                        (o.xMax = a.readShort(n, i)),
                        (i += 2),
                        (o.yMax = a.readShort(n, i)),
                        (i += 2),
                        o.xMin >= o.xMax || o.yMin >= o.yMax)
                      )
                        return null;
                      if (o.noc > 0) {
                        o.endPts = [];
                        for (var s = 0; s < o.noc; s++) o.endPts.push(a.readUshort(n, i)), (i += 2);
                        var u = a.readUshort(n, i);
                        if (((i += 2), n.length - i < u)) return null;
                        (o.instructions = a.readBytes(n, i, u)), (i += u);
                        var l = o.endPts[o.noc - 1] + 1;
                        for (o.flags = [], s = 0; s < l; s++) {
                          var f = n[i];
                          if ((i++, o.flags.push(f), 0 != (8 & f))) {
                            var h = n[i];
                            i++;
                            for (var d = 0; d < h; d++) o.flags.push(f), s++;
                          }
                        }
                        for (o.xs = [], s = 0; s < l; s++) {
                          var c = 0 != (2 & o.flags[s]),
                            v = 0 != (16 & o.flags[s]);
                          c
                            ? (o.xs.push(v ? n[i] : -n[i]), i++)
                            : v
                            ? o.xs.push(0)
                            : (o.xs.push(a.readShort(n, i)), (i += 2));
                        }
                        for (o.ys = [], s = 0; s < l; s++)
                          (c = 0 != (4 & o.flags[s])),
                            (v = 0 != (32 & o.flags[s])),
                            c
                              ? (o.ys.push(v ? n[i] : -n[i]), i++)
                              : v
                              ? o.ys.push(0)
                              : (o.ys.push(a.readShort(n, i)), (i += 2));
                        var p = 0,
                          g = 0;
                        for (s = 0; s < l; s++)
                          (p += o.xs[s]), (g += o.ys[s]), (o.xs[s] = p), (o.ys[s] = g);
                      } else {
                        var y;
                        o.parts = [];
                        do {
                          (y = a.readUshort(n, i)), (i += 2);
                          var m = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
                          if (
                            (o.parts.push(m), (m.glyphIndex = a.readUshort(n, i)), (i += 2), 1 & y)
                          ) {
                            var S = a.readShort(n, i);
                            i += 2;
                            var U = a.readShort(n, i);
                            i += 2;
                          } else (S = a.readInt8(n, i)), i++, (U = a.readInt8(n, i)), i++;
                          2 & y ? ((m.m.tx = S), (m.m.ty = U)) : ((m.p1 = S), (m.p2 = U)),
                            8 & y
                              ? ((m.m.a = m.m.d = a.readF2dot14(n, i)), (i += 2))
                              : 64 & y
                              ? ((m.m.a = a.readF2dot14(n, i)),
                                (i += 2),
                                (m.m.d = a.readF2dot14(n, i)),
                                (i += 2))
                              : 128 & y &&
                                ((m.m.a = a.readF2dot14(n, i)),
                                (i += 2),
                                (m.m.b = a.readF2dot14(n, i)),
                                (i += 2),
                                (m.m.c = a.readF2dot14(n, i)),
                                (i += 2),
                                (m.m.d = a.readF2dot14(n, i)),
                                (i += 2));
                        } while (32 & y);
                        if (256 & y) {
                          var x = a.readUshort(n, i);
                          for (i += 2, o.instr = [], s = 0; s < x; s++) o.instr.push(n[i]), i++;
                        }
                      }
                      return o;
                    }),
                    (r.GPOS = {}),
                    (r.GPOS.parse = function (e, t, a, n) {
                      return r._lctf.parse(e, t, a, n, r.GPOS.subt);
                    }),
                    (r.GPOS.subt = function (e, t, a, n) {
                      var i = r._bin,
                        o = a,
                        s = {};
                      if (
                        ((s.fmt = i.readUshort(e, a)),
                        (a += 2),
                        1 == t || 2 == t || 3 == t || 7 == t || (8 == t && s.fmt <= 2))
                      ) {
                        var u = i.readUshort(e, a);
                        (a += 2), (s.coverage = r._lctf.readCoverage(e, u + o));
                      }
                      if (1 == t && 1 == s.fmt) {
                        var l = i.readUshort(e, a);
                        a += 2;
                        var f = r._lctf.numOfOnes(l);
                        0 != l && (s.pos = r.GPOS.readValueRecord(e, a, l));
                      } else if (2 == t && s.fmt >= 1 && s.fmt <= 2) {
                        (l = i.readUshort(e, a)), (a += 2);
                        var h = i.readUshort(e, a);
                        (a += 2), (f = r._lctf.numOfOnes(l));
                        var d = r._lctf.numOfOnes(h);
                        if (1 == s.fmt) {
                          s.pairsets = [];
                          var c = i.readUshort(e, a);
                          a += 2;
                          for (var v = 0; v < c; v++) {
                            var p = o + i.readUshort(e, a);
                            a += 2;
                            var g = i.readUshort(e, p);
                            p += 2;
                            for (var y = [], m = 0; m < g; m++) {
                              var S = i.readUshort(e, p);
                              (p += 2),
                                0 != l && ((w = r.GPOS.readValueRecord(e, p, l)), (p += 2 * f)),
                                0 != h && ((F = r.GPOS.readValueRecord(e, p, h)), (p += 2 * d)),
                                y.push({ gid2: S, val1: w, val2: F });
                            }
                            s.pairsets.push(y);
                          }
                        }
                        if (2 == s.fmt) {
                          var U = i.readUshort(e, a);
                          a += 2;
                          var x = i.readUshort(e, a);
                          a += 2;
                          var b = i.readUshort(e, a);
                          a += 2;
                          var k = i.readUshort(e, a);
                          for (
                            a += 2,
                              s.classDef1 = r._lctf.readClassDef(e, o + U),
                              s.classDef2 = r._lctf.readClassDef(e, o + x),
                              s.matrix = [],
                              v = 0;
                            v < b;
                            v++
                          ) {
                            var T = [];
                            for (m = 0; m < k; m++) {
                              var w = null,
                                F = null;
                              0 != l && ((w = r.GPOS.readValueRecord(e, a, l)), (a += 2 * f)),
                                0 != h && ((F = r.GPOS.readValueRecord(e, a, h)), (a += 2 * d)),
                                T.push({ val1: w, val2: F });
                            }
                            s.matrix.push(T);
                          }
                        }
                      } else {
                        if (9 == t && 1 == s.fmt) {
                          var C = i.readUshort(e, a);
                          a += 2;
                          var _ = i.readUint(e, a);
                          if (((a += 4), 9 == n.ltype)) n.ltype = C;
                          else if (n.ltype != C) throw 'invalid extension substitution';
                          return r.GPOS.subt(e, n.ltype, o + _);
                        }
                        console.debug('unsupported GPOS table LookupType', t, 'format', s.fmt);
                      }
                      return s;
                    }),
                    (r.GPOS.readValueRecord = function (e, t, a) {
                      var n = r._bin,
                        i = [];
                      return (
                        i.push(1 & a ? n.readShort(e, t) : 0),
                        (t += 1 & a ? 2 : 0),
                        i.push(2 & a ? n.readShort(e, t) : 0),
                        (t += 2 & a ? 2 : 0),
                        i.push(4 & a ? n.readShort(e, t) : 0),
                        (t += 4 & a ? 2 : 0),
                        i.push(8 & a ? n.readShort(e, t) : 0),
                        (t += 8 & a ? 2 : 0),
                        i
                      );
                    }),
                    (r.GSUB = {}),
                    (r.GSUB.parse = function (e, t, a, n) {
                      return r._lctf.parse(e, t, a, n, r.GSUB.subt);
                    }),
                    (r.GSUB.subt = function (e, t, a, n) {
                      var i = r._bin,
                        o = a,
                        s = {};
                      if (
                        ((s.fmt = i.readUshort(e, a)),
                        (a += 2),
                        1 != t && 4 != t && 5 != t && 6 != t)
                      )
                        return null;
                      if (1 == t || 4 == t || (5 == t && s.fmt <= 2) || (6 == t && s.fmt <= 2)) {
                        var u = i.readUshort(e, a);
                        (a += 2), (s.coverage = r._lctf.readCoverage(e, o + u));
                      }
                      if (1 == t && s.fmt >= 1 && s.fmt <= 2) {
                        if (1 == s.fmt) (s.delta = i.readShort(e, a)), (a += 2);
                        else if (2 == s.fmt) {
                          var l = i.readUshort(e, a);
                          (a += 2), (s.newg = i.readUshorts(e, a, l)), (a += 2 * s.newg.length);
                        }
                      } else if (4 == t) {
                        (s.vals = []), (l = i.readUshort(e, a)), (a += 2);
                        for (var f = 0; f < l; f++) {
                          var h = i.readUshort(e, a);
                          (a += 2), s.vals.push(r.GSUB.readLigatureSet(e, o + h));
                        }
                      } else if (5 == t && 2 == s.fmt) {
                        if (2 == s.fmt) {
                          var d = i.readUshort(e, a);
                          (a += 2), (s.cDef = r._lctf.readClassDef(e, o + d)), (s.scset = []);
                          var c = i.readUshort(e, a);
                          for (a += 2, f = 0; f < c; f++) {
                            var v = i.readUshort(e, a);
                            (a += 2),
                              s.scset.push(0 == v ? null : r.GSUB.readSubClassSet(e, o + v));
                          }
                        }
                      } else if (6 == t && 3 == s.fmt) {
                        if (3 == s.fmt) {
                          for (f = 0; f < 3; f++) {
                            (l = i.readUshort(e, a)), (a += 2);
                            for (var p = [], g = 0; g < l; g++)
                              p.push(r._lctf.readCoverage(e, o + i.readUshort(e, a + 2 * g)));
                            (a += 2 * l),
                              0 == f && (s.backCvg = p),
                              1 == f && (s.inptCvg = p),
                              2 == f && (s.ahedCvg = p);
                          }
                          (l = i.readUshort(e, a)),
                            (a += 2),
                            (s.lookupRec = r.GSUB.readSubstLookupRecords(e, a, l));
                        }
                      } else {
                        if (7 == t && 1 == s.fmt) {
                          var y = i.readUshort(e, a);
                          a += 2;
                          var m = i.readUint(e, a);
                          if (((a += 4), 9 == n.ltype)) n.ltype = y;
                          else if (n.ltype != y) throw 'invalid extension substitution';
                          return r.GSUB.subt(e, n.ltype, o + m);
                        }
                        console.debug('unsupported GSUB table LookupType', t, 'format', s.fmt);
                      }
                      return s;
                    }),
                    (r.GSUB.readSubClassSet = function (e, t) {
                      var a = r._bin.readUshort,
                        n = t,
                        i = [],
                        o = a(e, t);
                      t += 2;
                      for (var s = 0; s < o; s++) {
                        var u = a(e, t);
                        (t += 2), i.push(r.GSUB.readSubClassRule(e, n + u));
                      }
                      return i;
                    }),
                    (r.GSUB.readSubClassRule = function (e, t) {
                      var a = r._bin.readUshort,
                        n = {},
                        i = a(e, t),
                        o = a(e, (t += 2));
                      (t += 2), (n.input = []);
                      for (var s = 0; s < i - 1; s++) n.input.push(a(e, t)), (t += 2);
                      return (n.substLookupRecords = r.GSUB.readSubstLookupRecords(e, t, o)), n;
                    }),
                    (r.GSUB.readSubstLookupRecords = function (e, t, a) {
                      for (var n = r._bin.readUshort, i = [], o = 0; o < a; o++)
                        i.push(n(e, t), n(e, t + 2)), (t += 4);
                      return i;
                    }),
                    (r.GSUB.readChainSubClassSet = function (e, t) {
                      var a = r._bin,
                        n = t,
                        i = [],
                        o = a.readUshort(e, t);
                      t += 2;
                      for (var s = 0; s < o; s++) {
                        var u = a.readUshort(e, t);
                        (t += 2), i.push(r.GSUB.readChainSubClassRule(e, n + u));
                      }
                      return i;
                    }),
                    (r.GSUB.readChainSubClassRule = function (e, t) {
                      for (
                        var a = r._bin, n = {}, i = ['backtrack', 'input', 'lookahead'], o = 0;
                        o < i.length;
                        o++
                      ) {
                        var s = a.readUshort(e, t);
                        (t += 2),
                          1 == o && s--,
                          (n[i[o]] = a.readUshorts(e, t, s)),
                          (t += 2 * n[i[o]].length);
                      }
                      return (
                        (s = a.readUshort(e, t)),
                        (t += 2),
                        (n.subst = a.readUshorts(e, t, 2 * s)),
                        (t += 2 * n.subst.length),
                        n
                      );
                    }),
                    (r.GSUB.readLigatureSet = function (e, t) {
                      var a = r._bin,
                        n = t,
                        i = [],
                        o = a.readUshort(e, t);
                      t += 2;
                      for (var s = 0; s < o; s++) {
                        var u = a.readUshort(e, t);
                        (t += 2), i.push(r.GSUB.readLigature(e, n + u));
                      }
                      return i;
                    }),
                    (r.GSUB.readLigature = function (e, t) {
                      var a = r._bin,
                        n = { chain: [] };
                      (n.nglyph = a.readUshort(e, t)), (t += 2);
                      var i = a.readUshort(e, t);
                      t += 2;
                      for (var o = 0; o < i - 1; o++) n.chain.push(a.readUshort(e, t)), (t += 2);
                      return n;
                    }),
                    (r.head = {}),
                    (r.head.parse = function (e, t, a) {
                      var n = r._bin,
                        i = {};
                      return (
                        n.readFixed(e, t),
                        (t += 4),
                        (i.fontRevision = n.readFixed(e, t)),
                        (t += 4),
                        n.readUint(e, t),
                        (t += 4),
                        n.readUint(e, t),
                        (t += 4),
                        (i.flags = n.readUshort(e, t)),
                        (t += 2),
                        (i.unitsPerEm = n.readUshort(e, t)),
                        (t += 2),
                        (i.created = n.readUint64(e, t)),
                        (t += 8),
                        (i.modified = n.readUint64(e, t)),
                        (t += 8),
                        (i.xMin = n.readShort(e, t)),
                        (t += 2),
                        (i.yMin = n.readShort(e, t)),
                        (t += 2),
                        (i.xMax = n.readShort(e, t)),
                        (t += 2),
                        (i.yMax = n.readShort(e, t)),
                        (t += 2),
                        (i.macStyle = n.readUshort(e, t)),
                        (t += 2),
                        (i.lowestRecPPEM = n.readUshort(e, t)),
                        (t += 2),
                        (i.fontDirectionHint = n.readShort(e, t)),
                        (t += 2),
                        (i.indexToLocFormat = n.readShort(e, t)),
                        (t += 2),
                        (i.glyphDataFormat = n.readShort(e, t)),
                        (t += 2),
                        i
                      );
                    }),
                    (r.hhea = {}),
                    (r.hhea.parse = function (e, t, a) {
                      var n = r._bin,
                        i = {};
                      return (
                        n.readFixed(e, t),
                        (t += 4),
                        (i.ascender = n.readShort(e, t)),
                        (t += 2),
                        (i.descender = n.readShort(e, t)),
                        (t += 2),
                        (i.lineGap = n.readShort(e, t)),
                        (t += 2),
                        (i.advanceWidthMax = n.readUshort(e, t)),
                        (t += 2),
                        (i.minLeftSideBearing = n.readShort(e, t)),
                        (t += 2),
                        (i.minRightSideBearing = n.readShort(e, t)),
                        (t += 2),
                        (i.xMaxExtent = n.readShort(e, t)),
                        (t += 2),
                        (i.caretSlopeRise = n.readShort(e, t)),
                        (t += 2),
                        (i.caretSlopeRun = n.readShort(e, t)),
                        (t += 2),
                        (i.caretOffset = n.readShort(e, t)),
                        (t += 2),
                        (t += 8),
                        (i.metricDataFormat = n.readShort(e, t)),
                        (t += 2),
                        (i.numberOfHMetrics = n.readUshort(e, t)),
                        (t += 2),
                        i
                      );
                    }),
                    (r.hmtx = {}),
                    (r.hmtx.parse = function (e, t, a, n) {
                      for (
                        var i = r._bin, o = { aWidth: [], lsBearing: [] }, s = 0, u = 0, l = 0;
                        l < n.maxp.numGlyphs;
                        l++
                      )
                        l < n.hhea.numberOfHMetrics &&
                          ((s = i.readUshort(e, t)), (t += 2), (u = i.readShort(e, t)), (t += 2)),
                          o.aWidth.push(s),
                          o.lsBearing.push(u);
                      return o;
                    }),
                    (r.kern = {}),
                    (r.kern.parse = function (e, t, a, n) {
                      var i = r._bin,
                        o = i.readUshort(e, t);
                      if (((t += 2), 1 == o)) return r.kern.parseV1(e, t - 2, a, n);
                      var s = i.readUshort(e, t);
                      t += 2;
                      for (var u = { glyph1: [], rval: [] }, l = 0; l < s; l++) {
                        (t += 2), (a = i.readUshort(e, t)), (t += 2);
                        var f = i.readUshort(e, t);
                        t += 2;
                        var h = f >>> 8;
                        if (0 != (h &= 15)) throw 'unknown kern table format: ' + h;
                        t = r.kern.readFormat0(e, t, u);
                      }
                      return u;
                    }),
                    (r.kern.parseV1 = function (e, t, a, n) {
                      var i = r._bin;
                      i.readFixed(e, t), (t += 4);
                      var o = i.readUint(e, t);
                      t += 4;
                      for (var s = { glyph1: [], rval: [] }, u = 0; u < o; u++) {
                        i.readUint(e, t), (t += 4);
                        var l = i.readUshort(e, t);
                        (t += 2), i.readUshort(e, t), (t += 2);
                        var f = l >>> 8;
                        if (0 != (f &= 15)) throw 'unknown kern table format: ' + f;
                        t = r.kern.readFormat0(e, t, s);
                      }
                      return s;
                    }),
                    (r.kern.readFormat0 = function (e, t, a) {
                      var n = r._bin,
                        i = -1,
                        o = n.readUshort(e, t);
                      (t += 2),
                        n.readUshort(e, t),
                        (t += 2),
                        n.readUshort(e, t),
                        (t += 2),
                        n.readUshort(e, t),
                        (t += 2);
                      for (var s = 0; s < o; s++) {
                        var u = n.readUshort(e, t);
                        t += 2;
                        var l = n.readUshort(e, t);
                        t += 2;
                        var f = n.readShort(e, t);
                        (t += 2),
                          u != i && (a.glyph1.push(u), a.rval.push({ glyph2: [], vals: [] }));
                        var h = a.rval[a.rval.length - 1];
                        h.glyph2.push(l), h.vals.push(f), (i = u);
                      }
                      return t;
                    }),
                    (r.loca = {}),
                    (r.loca.parse = function (e, t, a, n) {
                      var i = r._bin,
                        o = [],
                        s = n.head.indexToLocFormat,
                        u = n.maxp.numGlyphs + 1;
                      if (0 == s)
                        for (var l = 0; l < u; l++) o.push(i.readUshort(e, t + (l << 1)) << 1);
                      if (1 == s) for (l = 0; l < u; l++) o.push(i.readUint(e, t + (l << 2)));
                      return o;
                    }),
                    (r.maxp = {}),
                    (r.maxp.parse = function (e, t, a) {
                      var n = r._bin,
                        i = {},
                        o = n.readUint(e, t);
                      return (
                        (t += 4),
                        (i.numGlyphs = n.readUshort(e, t)),
                        (t += 2),
                        65536 == o &&
                          ((i.maxPoints = n.readUshort(e, t)),
                          (t += 2),
                          (i.maxContours = n.readUshort(e, t)),
                          (t += 2),
                          (i.maxCompositePoints = n.readUshort(e, t)),
                          (t += 2),
                          (i.maxCompositeContours = n.readUshort(e, t)),
                          (t += 2),
                          (i.maxZones = n.readUshort(e, t)),
                          (t += 2),
                          (i.maxTwilightPoints = n.readUshort(e, t)),
                          (t += 2),
                          (i.maxStorage = n.readUshort(e, t)),
                          (t += 2),
                          (i.maxFunctionDefs = n.readUshort(e, t)),
                          (t += 2),
                          (i.maxInstructionDefs = n.readUshort(e, t)),
                          (t += 2),
                          (i.maxStackElements = n.readUshort(e, t)),
                          (t += 2),
                          (i.maxSizeOfInstructions = n.readUshort(e, t)),
                          (t += 2),
                          (i.maxComponentElements = n.readUshort(e, t)),
                          (t += 2),
                          (i.maxComponentDepth = n.readUshort(e, t)),
                          (t += 2)),
                        i
                      );
                    }),
                    (r.name = {}),
                    (r.name.parse = function (e, t, a) {
                      var n = r._bin,
                        i = {};
                      n.readUshort(e, t), (t += 2);
                      var o = n.readUshort(e, t);
                      (t += 2), n.readUshort(e, t);
                      for (
                        var s,
                          u = [
                            'copyright',
                            'fontFamily',
                            'fontSubfamily',
                            'ID',
                            'fullName',
                            'version',
                            'postScriptName',
                            'trademark',
                            'manufacturer',
                            'designer',
                            'description',
                            'urlVendor',
                            'urlDesigner',
                            'licence',
                            'licenceURL',
                            '---',
                            'typoFamilyName',
                            'typoSubfamilyName',
                            'compatibleFull',
                            'sampleText',
                            'postScriptCID',
                            'wwsFamilyName',
                            'wwsSubfamilyName',
                            'lightPalette',
                            'darkPalette',
                          ],
                          l = (t += 2),
                          f = 0;
                        f < o;
                        f++
                      ) {
                        var h = n.readUshort(e, t);
                        t += 2;
                        var d = n.readUshort(e, t);
                        t += 2;
                        var c = n.readUshort(e, t);
                        t += 2;
                        var v = n.readUshort(e, t);
                        t += 2;
                        var p = n.readUshort(e, t);
                        t += 2;
                        var g = n.readUshort(e, t);
                        t += 2;
                        var y,
                          m = u[v],
                          S = l + 12 * o + g;
                        if (0 == h) y = n.readUnicode(e, S, p / 2);
                        else if (3 == h && 0 == d) y = n.readUnicode(e, S, p / 2);
                        else if (0 == d) y = n.readASCII(e, S, p);
                        else if (1 == d) y = n.readUnicode(e, S, p / 2);
                        else if (3 == d) y = n.readUnicode(e, S, p / 2);
                        else {
                          if (1 != h) throw 'unknown encoding ' + d + ', platformID: ' + h;
                          (y = n.readASCII(e, S, p)),
                            console.debug('reading unknown MAC encoding ' + d + ' as ASCII');
                        }
                        var U = 'p' + h + ',' + c.toString(16);
                        null == i[U] && (i[U] = {}),
                          (i[U][void 0 !== m ? m : v] = y),
                          (i[U]._lang = c);
                      }
                      for (var x in i)
                        if (null != i[x].postScriptName && 1033 == i[x]._lang) return i[x];
                      for (var x in i)
                        if (null != i[x].postScriptName && 0 == i[x]._lang) return i[x];
                      for (var x in i)
                        if (null != i[x].postScriptName && 3084 == i[x]._lang) return i[x];
                      for (var x in i) if (null != i[x].postScriptName) return i[x];
                      for (var x in i) {
                        s = x;
                        break;
                      }
                      return (
                        console.debug('returning name table with languageID ' + i[s]._lang), i[s]
                      );
                    }),
                    (r['OS/2'] = {}),
                    (r['OS/2'].parse = function (e, t, a) {
                      var n = r._bin.readUshort(e, t);
                      t += 2;
                      var i = {};
                      if (0 == n) r['OS/2'].version0(e, t, i);
                      else if (1 == n) r['OS/2'].version1(e, t, i);
                      else if (2 == n || 3 == n || 4 == n) r['OS/2'].version2(e, t, i);
                      else {
                        if (5 != n) throw 'unknown OS/2 table version: ' + n;
                        r['OS/2'].version5(e, t, i);
                      }
                      return i;
                    }),
                    (r['OS/2'].version0 = function (e, t, a) {
                      var n = r._bin;
                      return (
                        (a.xAvgCharWidth = n.readShort(e, t)),
                        (t += 2),
                        (a.usWeightClass = n.readUshort(e, t)),
                        (t += 2),
                        (a.usWidthClass = n.readUshort(e, t)),
                        (t += 2),
                        (a.fsType = n.readUshort(e, t)),
                        (t += 2),
                        (a.ySubscriptXSize = n.readShort(e, t)),
                        (t += 2),
                        (a.ySubscriptYSize = n.readShort(e, t)),
                        (t += 2),
                        (a.ySubscriptXOffset = n.readShort(e, t)),
                        (t += 2),
                        (a.ySubscriptYOffset = n.readShort(e, t)),
                        (t += 2),
                        (a.ySuperscriptXSize = n.readShort(e, t)),
                        (t += 2),
                        (a.ySuperscriptYSize = n.readShort(e, t)),
                        (t += 2),
                        (a.ySuperscriptXOffset = n.readShort(e, t)),
                        (t += 2),
                        (a.ySuperscriptYOffset = n.readShort(e, t)),
                        (t += 2),
                        (a.yStrikeoutSize = n.readShort(e, t)),
                        (t += 2),
                        (a.yStrikeoutPosition = n.readShort(e, t)),
                        (t += 2),
                        (a.sFamilyClass = n.readShort(e, t)),
                        (t += 2),
                        (a.panose = n.readBytes(e, t, 10)),
                        (t += 10),
                        (a.ulUnicodeRange1 = n.readUint(e, t)),
                        (t += 4),
                        (a.ulUnicodeRange2 = n.readUint(e, t)),
                        (t += 4),
                        (a.ulUnicodeRange3 = n.readUint(e, t)),
                        (t += 4),
                        (a.ulUnicodeRange4 = n.readUint(e, t)),
                        (t += 4),
                        (a.achVendID = [
                          n.readInt8(e, t),
                          n.readInt8(e, t + 1),
                          n.readInt8(e, t + 2),
                          n.readInt8(e, t + 3),
                        ]),
                        (t += 4),
                        (a.fsSelection = n.readUshort(e, t)),
                        (t += 2),
                        (a.usFirstCharIndex = n.readUshort(e, t)),
                        (t += 2),
                        (a.usLastCharIndex = n.readUshort(e, t)),
                        (t += 2),
                        (a.sTypoAscender = n.readShort(e, t)),
                        (t += 2),
                        (a.sTypoDescender = n.readShort(e, t)),
                        (t += 2),
                        (a.sTypoLineGap = n.readShort(e, t)),
                        (t += 2),
                        (a.usWinAscent = n.readUshort(e, t)),
                        (t += 2),
                        (a.usWinDescent = n.readUshort(e, t)),
                        t + 2
                      );
                    }),
                    (r['OS/2'].version1 = function (e, t, a) {
                      var n = r._bin;
                      return (
                        (t = r['OS/2'].version0(e, t, a)),
                        (a.ulCodePageRange1 = n.readUint(e, t)),
                        (t += 4),
                        (a.ulCodePageRange2 = n.readUint(e, t)),
                        t + 4
                      );
                    }),
                    (r['OS/2'].version2 = function (e, t, a) {
                      var n = r._bin;
                      return (
                        (t = r['OS/2'].version1(e, t, a)),
                        (a.sxHeight = n.readShort(e, t)),
                        (t += 2),
                        (a.sCapHeight = n.readShort(e, t)),
                        (t += 2),
                        (a.usDefault = n.readUshort(e, t)),
                        (t += 2),
                        (a.usBreak = n.readUshort(e, t)),
                        (t += 2),
                        (a.usMaxContext = n.readUshort(e, t)),
                        t + 2
                      );
                    }),
                    (r['OS/2'].version5 = function (e, t, a) {
                      var n = r._bin;
                      return (
                        (t = r['OS/2'].version2(e, t, a)),
                        (a.usLowerOpticalPointSize = n.readUshort(e, t)),
                        (t += 2),
                        (a.usUpperOpticalPointSize = n.readUshort(e, t)),
                        t + 2
                      );
                    }),
                    (r.post = {}),
                    (r.post.parse = function (e, t, a) {
                      var n = r._bin,
                        i = {};
                      return (
                        (i.version = n.readFixed(e, t)),
                        (t += 4),
                        (i.italicAngle = n.readFixed(e, t)),
                        (t += 4),
                        (i.underlinePosition = n.readShort(e, t)),
                        (t += 2),
                        (i.underlineThickness = n.readShort(e, t)),
                        (t += 2),
                        i
                      );
                    }),
                    null == r && (r = {}),
                    null == r.U && (r.U = {}),
                    (r.U.codeToGlyph = function (e, r) {
                      var t = e.cmap,
                        a = -1;
                      if (
                        (null != t.p0e4
                          ? (a = t.p0e4)
                          : null != t.p3e1
                          ? (a = t.p3e1)
                          : null != t.p1e0
                          ? (a = t.p1e0)
                          : null != t.p0e3 && (a = t.p0e3),
                        -1 == a)
                      )
                        throw 'no familiar platform and encoding!';
                      var n = t.tables[a];
                      if (0 == n.format) return r >= n.map.length ? 0 : n.map[r];
                      if (4 == n.format) {
                        for (var i = -1, o = 0; o < n.endCount.length; o++)
                          if (r <= n.endCount[o]) {
                            i = o;
                            break;
                          }
                        return -1 == i || n.startCount[i] > r
                          ? 0
                          : 65535 &
                              (0 != n.idRangeOffset[i]
                                ? n.glyphIdArray[
                                    r -
                                      n.startCount[i] +
                                      (n.idRangeOffset[i] >> 1) -
                                      (n.idRangeOffset.length - i)
                                  ]
                                : r + n.idDelta[i]);
                      }
                      if (12 == n.format) {
                        if (r > n.groups[n.groups.length - 1][1]) return 0;
                        for (o = 0; o < n.groups.length; o++) {
                          var s = n.groups[o];
                          if (s[0] <= r && r <= s[1]) return s[2] + (r - s[0]);
                        }
                        return 0;
                      }
                      throw 'unknown cmap table format ' + n.format;
                    }),
                    (r.U.glyphToPath = function (e, t) {
                      var a = { cmds: [], crds: [] };
                      if (e.SVG && e.SVG.entries[t]) {
                        var n = e.SVG.entries[t];
                        return null == n
                          ? a
                          : ('string' == typeof n &&
                              ((n = r.SVG.toPath(n)), (e.SVG.entries[t] = n)),
                            n);
                      }
                      if (e.CFF) {
                        var i = {
                            x: 0,
                            y: 0,
                            stack: [],
                            nStems: 0,
                            haveWidth: !1,
                            width: e.CFF.Private ? e.CFF.Private.defaultWidthX : 0,
                            open: !1,
                          },
                          o = e.CFF,
                          s = e.CFF.Private;
                        if (o.ROS) {
                          for (var u = 0; o.FDSelect[u + 2] <= t; ) u += 2;
                          s = o.FDArray[o.FDSelect[u + 1]].Private;
                        }
                        r.U._drawCFF(e.CFF.CharStrings[t], i, o, s, a);
                      } else e.glyf && r.U._drawGlyf(t, e, a);
                      return a;
                    }),
                    (r.U._drawGlyf = function (e, t, a) {
                      var n = t.glyf[e];
                      null == n && (n = t.glyf[e] = r.glyf._parseGlyf(t, e)),
                        null != n &&
                          (n.noc > -1 ? r.U._simpleGlyph(n, a) : r.U._compoGlyph(n, t, a));
                    }),
                    (r.U._simpleGlyph = function (e, t) {
                      for (var a = 0; a < e.noc; a++) {
                        for (
                          var n = 0 == a ? 0 : e.endPts[a - 1] + 1, i = e.endPts[a], o = n;
                          o <= i;
                          o++
                        ) {
                          var s = o == n ? i : o - 1,
                            u = o == i ? n : o + 1,
                            l = 1 & e.flags[o],
                            f = 1 & e.flags[s],
                            h = 1 & e.flags[u],
                            d = e.xs[o],
                            c = e.ys[o];
                          if (o == n)
                            if (l) {
                              if (!f) {
                                r.U.P.moveTo(t, d, c);
                                continue;
                              }
                              r.U.P.moveTo(t, e.xs[s], e.ys[s]);
                            } else
                              f
                                ? r.U.P.moveTo(t, e.xs[s], e.ys[s])
                                : r.U.P.moveTo(t, (e.xs[s] + d) / 2, (e.ys[s] + c) / 2);
                          l
                            ? f && r.U.P.lineTo(t, d, c)
                            : h
                            ? r.U.P.qcurveTo(t, d, c, e.xs[u], e.ys[u])
                            : r.U.P.qcurveTo(t, d, c, (d + e.xs[u]) / 2, (c + e.ys[u]) / 2);
                        }
                        r.U.P.closePath(t);
                      }
                    }),
                    (r.U._compoGlyph = function (e, t, a) {
                      for (var n = 0; n < e.parts.length; n++) {
                        var i = { cmds: [], crds: [] },
                          o = e.parts[n];
                        r.U._drawGlyf(o.glyphIndex, t, i);
                        for (var s = o.m, u = 0; u < i.crds.length; u += 2) {
                          var l = i.crds[u],
                            f = i.crds[u + 1];
                          a.crds.push(l * s.a + f * s.b + s.tx),
                            a.crds.push(l * s.c + f * s.d + s.ty);
                        }
                        for (u = 0; u < i.cmds.length; u++) a.cmds.push(i.cmds[u]);
                      }
                    }),
                    (r.U._getGlyphClass = function (e, t) {
                      var a = r._lctf.getInterval(t, e);
                      return -1 == a ? 0 : t[a + 2];
                    }),
                    (r.U.getPairAdjustment = function (e, t, a) {
                      var n = !1;
                      if (e.GPOS)
                        for (
                          var i = e.GPOS, o = i.lookupList, s = i.featureList, u = [], l = 0;
                          l < s.length;
                          l++
                        ) {
                          var f = s[l];
                          if ('kern' == f.tag) {
                            n = !0;
                            for (var h = 0; h < f.tab.length; h++)
                              if (!u[f.tab[h]]) {
                                u[f.tab[h]] = !0;
                                for (var d = o[f.tab[h]], c = 0; c < d.tabs.length; c++)
                                  if (null != d.tabs[c]) {
                                    var v,
                                      p = d.tabs[c];
                                    if (
                                      !p.coverage ||
                                      -1 != (v = r._lctf.coverageIndex(p.coverage, t))
                                    )
                                      if (1 == d.ltype);
                                      else if (2 == d.ltype) {
                                        var g = null;
                                        if (1 == p.fmt) {
                                          var y = p.pairsets[v];
                                          for (l = 0; l < y.length; l++)
                                            y[l].gid2 == a && (g = y[l]);
                                        } else if (2 == p.fmt) {
                                          var m = r.U._getGlyphClass(t, p.classDef1),
                                            S = r.U._getGlyphClass(a, p.classDef2);
                                          g = p.matrix[m][S];
                                        }
                                        if (g) {
                                          var U = 0;
                                          return (
                                            g.val1 && g.val1[2] && (U += g.val1[2]),
                                            g.val2 && g.val2[0] && (U += g.val2[0]),
                                            U
                                          );
                                        }
                                      }
                                  }
                              }
                          }
                        }
                      if (e.kern && !n) {
                        var x = e.kern.glyph1.indexOf(t);
                        if (-1 != x) {
                          var b = e.kern.rval[x].glyph2.indexOf(a);
                          if (-1 != b) return e.kern.rval[x].vals[b];
                        }
                      }
                      return 0;
                    }),
                    (r.U._applySubs = function (e, t, a, n) {
                      for (var i = e.length - t - 1, o = 0; o < a.tabs.length; o++)
                        if (null != a.tabs[o]) {
                          var s,
                            u = a.tabs[o];
                          if (!u.coverage || -1 != (s = r._lctf.coverageIndex(u.coverage, e[t])))
                            if (1 == a.ltype)
                              e[t], 1 == u.fmt ? (e[t] = e[t] + u.delta) : (e[t] = u.newg[s]);
                            else if (4 == a.ltype)
                              for (var l = u.vals[s], f = 0; f < l.length; f++) {
                                var h = l[f],
                                  d = h.chain.length;
                                if (!(d > i)) {
                                  for (var c = !0, v = 0, p = 0; p < d; p++) {
                                    for (; -1 == e[t + v + (1 + p)]; ) v++;
                                    h.chain[p] != e[t + v + (1 + p)] && (c = !1);
                                  }
                                  if (c) {
                                    for (e[t] = h.nglyph, p = 0; p < d + v; p++) e[t + p + 1] = -1;
                                    break;
                                  }
                                }
                              }
                            else if (5 == a.ltype && 2 == u.fmt)
                              for (
                                var g = r._lctf.getInterval(u.cDef, e[t]),
                                  y = u.cDef[g + 2],
                                  m = u.scset[y],
                                  S = 0;
                                S < m.length;
                                S++
                              ) {
                                var U = m[S],
                                  x = U.input;
                                if (!(x.length > i)) {
                                  for (c = !0, p = 0; p < x.length; p++) {
                                    var b = r._lctf.getInterval(u.cDef, e[t + 1 + p]);
                                    if (-1 == g && u.cDef[b + 2] != x[p]) {
                                      c = !1;
                                      break;
                                    }
                                  }
                                  if (c) {
                                    var k = U.substLookupRecords;
                                    for (f = 0; f < k.length; f += 2) k[f], k[f + 1];
                                  }
                                }
                              }
                            else if (6 == a.ltype && 3 == u.fmt) {
                              if (!r.U._glsCovered(e, u.backCvg, t - u.backCvg.length)) continue;
                              if (!r.U._glsCovered(e, u.inptCvg, t)) continue;
                              if (!r.U._glsCovered(e, u.ahedCvg, t + u.inptCvg.length)) continue;
                              var T = u.lookupRec;
                              for (S = 0; S < T.length; S += 2) {
                                g = T[S];
                                var w = n[T[S + 1]];
                                r.U._applySubs(e, t + g, w, n);
                              }
                            }
                        }
                    }),
                    (r.U._glsCovered = function (e, t, a) {
                      for (var n = 0; n < t.length; n++)
                        if (-1 == r._lctf.coverageIndex(t[n], e[a + n])) return !1;
                      return !0;
                    }),
                    (r.U.glyphsToPath = function (e, t, a) {
                      for (var n = { cmds: [], crds: [] }, i = 0, o = 0; o < t.length; o++) {
                        var s = t[o];
                        if (-1 != s) {
                          for (
                            var u = o < t.length - 1 && -1 != t[o + 1] ? t[o + 1] : 0,
                              l = r.U.glyphToPath(e, s),
                              f = 0;
                            f < l.crds.length;
                            f += 2
                          )
                            n.crds.push(l.crds[f] + i), n.crds.push(l.crds[f + 1]);
                          for (a && n.cmds.push(a), f = 0; f < l.cmds.length; f++)
                            n.cmds.push(l.cmds[f]);
                          a && n.cmds.push('X'),
                            (i += e.hmtx.aWidth[s]),
                            o < t.length - 1 && (i += r.U.getPairAdjustment(e, s, u));
                        }
                      }
                      return n;
                    }),
                    (r.U.P = {}),
                    (r.U.P.moveTo = function (e, r, t) {
                      e.cmds.push('M'), e.crds.push(r, t);
                    }),
                    (r.U.P.lineTo = function (e, r, t) {
                      e.cmds.push('L'), e.crds.push(r, t);
                    }),
                    (r.U.P.curveTo = function (e, r, t, a, n, i, o) {
                      e.cmds.push('C'), e.crds.push(r, t, a, n, i, o);
                    }),
                    (r.U.P.qcurveTo = function (e, r, t, a, n) {
                      e.cmds.push('Q'), e.crds.push(r, t, a, n);
                    }),
                    (r.U.P.closePath = function (e) {
                      e.cmds.push('Z');
                    }),
                    (r.U._drawCFF = function (e, t, a, n, i) {
                      for (
                        var o = t.stack,
                          s = t.nStems,
                          u = t.haveWidth,
                          l = t.width,
                          f = t.open,
                          h = 0,
                          d = t.x,
                          c = t.y,
                          v = 0,
                          p = 0,
                          g = 0,
                          y = 0,
                          m = 0,
                          S = 0,
                          U = 0,
                          x = 0,
                          b = 0,
                          k = 0,
                          T = { val: 0, size: 0 };
                        h < e.length;

                      ) {
                        r.CFF.getCharString(e, h, T);
                        var w = T.val;
                        if (((h += T.size), 'o1' == w || 'o18' == w))
                          o.length % 2 != 0 && !u && (l = o.shift() + n.nominalWidthX),
                            (s += o.length >> 1),
                            (o.length = 0),
                            (u = !0);
                        else if ('o3' == w || 'o23' == w)
                          o.length % 2 != 0 && !u && (l = o.shift() + n.nominalWidthX),
                            (s += o.length >> 1),
                            (o.length = 0),
                            (u = !0);
                        else if ('o4' == w)
                          o.length > 1 && !u && ((l = o.shift() + n.nominalWidthX), (u = !0)),
                            f && r.U.P.closePath(i),
                            (c += o.pop()),
                            r.U.P.moveTo(i, d, c),
                            (f = !0);
                        else if ('o5' == w)
                          for (; o.length > 0; )
                            (d += o.shift()), (c += o.shift()), r.U.P.lineTo(i, d, c);
                        else if ('o6' == w || 'o7' == w)
                          for (var F = o.length, C = 'o6' == w, _ = 0; _ < F; _++) {
                            var D = o.shift();
                            C ? (d += D) : (c += D), (C = !C), r.U.P.lineTo(i, d, c);
                          }
                        else if ('o8' == w || 'o24' == w) {
                          F = o.length;
                          for (var G = 0; G + 6 <= F; )
                            (v = d + o.shift()),
                              (p = c + o.shift()),
                              (g = v + o.shift()),
                              (y = p + o.shift()),
                              (d = g + o.shift()),
                              (c = y + o.shift()),
                              r.U.P.curveTo(i, v, p, g, y, d, c),
                              (G += 6);
                          'o24' == w && ((d += o.shift()), (c += o.shift()), r.U.P.lineTo(i, d, c));
                        } else {
                          if ('o11' == w) break;
                          if ('o1234' == w || 'o1235' == w || 'o1236' == w || 'o1237' == w)
                            'o1234' == w &&
                              ((p = c),
                              (g = (v = d + o.shift()) + o.shift()),
                              (k = y = p + o.shift()),
                              (S = y),
                              (x = c),
                              (d =
                                (U = (m = (b = g + o.shift()) + o.shift()) + o.shift()) +
                                o.shift()),
                              r.U.P.curveTo(i, v, p, g, y, b, k),
                              r.U.P.curveTo(i, m, S, U, x, d, c)),
                              'o1235' == w &&
                                ((v = d + o.shift()),
                                (p = c + o.shift()),
                                (g = v + o.shift()),
                                (y = p + o.shift()),
                                (b = g + o.shift()),
                                (k = y + o.shift()),
                                (m = b + o.shift()),
                                (S = k + o.shift()),
                                (U = m + o.shift()),
                                (x = S + o.shift()),
                                (d = U + o.shift()),
                                (c = x + o.shift()),
                                o.shift(),
                                r.U.P.curveTo(i, v, p, g, y, b, k),
                                r.U.P.curveTo(i, m, S, U, x, d, c)),
                              'o1236' == w &&
                                ((v = d + o.shift()),
                                (p = c + o.shift()),
                                (g = v + o.shift()),
                                (k = y = p + o.shift()),
                                (S = y),
                                (U = (m = (b = g + o.shift()) + o.shift()) + o.shift()),
                                (x = S + o.shift()),
                                (d = U + o.shift()),
                                r.U.P.curveTo(i, v, p, g, y, b, k),
                                r.U.P.curveTo(i, m, S, U, x, d, c)),
                              'o1237' == w &&
                                ((v = d + o.shift()),
                                (p = c + o.shift()),
                                (g = v + o.shift()),
                                (y = p + o.shift()),
                                (b = g + o.shift()),
                                (k = y + o.shift()),
                                (m = b + o.shift()),
                                (S = k + o.shift()),
                                (U = m + o.shift()),
                                (x = S + o.shift()),
                                Math.abs(U - d) > Math.abs(x - c)
                                  ? (d = U + o.shift())
                                  : (c = x + o.shift()),
                                r.U.P.curveTo(i, v, p, g, y, b, k),
                                r.U.P.curveTo(i, m, S, U, x, d, c));
                          else if ('o14' == w) {
                            if (
                              (o.length > 0 && !u && ((l = o.shift() + a.nominalWidthX), (u = !0)),
                              4 == o.length)
                            ) {
                              var O = o.shift(),
                                P = o.shift(),
                                B = o.shift(),
                                I = o.shift(),
                                A = r.CFF.glyphBySE(a, B),
                                R = r.CFF.glyphBySE(a, I);
                              r.U._drawCFF(a.CharStrings[A], t, a, n, i),
                                (t.x = O),
                                (t.y = P),
                                r.U._drawCFF(a.CharStrings[R], t, a, n, i);
                            }
                            f && (r.U.P.closePath(i), (f = !1));
                          } else if ('o19' == w || 'o20' == w)
                            o.length % 2 != 0 && !u && (l = o.shift() + n.nominalWidthX),
                              (s += o.length >> 1),
                              (o.length = 0),
                              (u = !0),
                              (h += (s + 7) >> 3);
                          else if ('o21' == w)
                            o.length > 2 && !u && ((l = o.shift() + n.nominalWidthX), (u = !0)),
                              (c += o.pop()),
                              (d += o.pop()),
                              f && r.U.P.closePath(i),
                              r.U.P.moveTo(i, d, c),
                              (f = !0);
                          else if ('o22' == w)
                            o.length > 1 && !u && ((l = o.shift() + n.nominalWidthX), (u = !0)),
                              (d += o.pop()),
                              f && r.U.P.closePath(i),
                              r.U.P.moveTo(i, d, c),
                              (f = !0);
                          else if ('o25' == w) {
                            for (; o.length > 6; )
                              (d += o.shift()), (c += o.shift()), r.U.P.lineTo(i, d, c);
                            (v = d + o.shift()),
                              (p = c + o.shift()),
                              (g = v + o.shift()),
                              (y = p + o.shift()),
                              (d = g + o.shift()),
                              (c = y + o.shift()),
                              r.U.P.curveTo(i, v, p, g, y, d, c);
                          } else if ('o26' == w)
                            for (o.length % 2 && (d += o.shift()); o.length > 0; )
                              (v = d),
                                (p = c + o.shift()),
                                (d = g = v + o.shift()),
                                (c = (y = p + o.shift()) + o.shift()),
                                r.U.P.curveTo(i, v, p, g, y, d, c);
                          else if ('o27' == w)
                            for (o.length % 2 && (c += o.shift()); o.length > 0; )
                              (p = c),
                                (g = (v = d + o.shift()) + o.shift()),
                                (y = p + o.shift()),
                                (d = g + o.shift()),
                                (c = y),
                                r.U.P.curveTo(i, v, p, g, y, d, c);
                          else if ('o10' == w || 'o29' == w) {
                            var M = 'o10' == w ? n : a;
                            if (0 == o.length) console.debug('error: empty stack');
                            else {
                              var E = o.pop(),
                                L = M.Subrs[E + M.Bias];
                              (t.x = d),
                                (t.y = c),
                                (t.nStems = s),
                                (t.haveWidth = u),
                                (t.width = l),
                                (t.open = f),
                                r.U._drawCFF(L, t, a, n, i),
                                (d = t.x),
                                (c = t.y),
                                (s = t.nStems),
                                (u = t.haveWidth),
                                (l = t.width),
                                (f = t.open);
                            }
                          } else if ('o30' == w || 'o31' == w) {
                            var z = o.length,
                              W = ((G = 0), 'o31' == w);
                            for (G += z - (F = -3 & z); G < F; )
                              W
                                ? ((p = c),
                                  (g = (v = d + o.shift()) + o.shift()),
                                  (c = (y = p + o.shift()) + o.shift()),
                                  F - G == 5 ? ((d = g + o.shift()), G++) : (d = g),
                                  (W = !1))
                                : ((v = d),
                                  (p = c + o.shift()),
                                  (g = v + o.shift()),
                                  (y = p + o.shift()),
                                  (d = g + o.shift()),
                                  F - G == 5 ? ((c = y + o.shift()), G++) : (c = y),
                                  (W = !0)),
                                r.U.P.curveTo(i, v, p, g, y, d, c),
                                (G += 4);
                          } else {
                            if ('o' == (w + '').charAt(0))
                              throw (console.debug('Unknown operation: ' + w, e), w);
                            o.push(w);
                          }
                        }
                      }
                      (t.x = d),
                        (t.y = c),
                        (t.nStems = s),
                        (t.haveWidth = u),
                        (t.width = l),
                        (t.open = f);
                    });
                  var t = r,
                    a = { Typr: t };
                  return (
                    (e.Typr = t),
                    (e.default = a),
                    Object.defineProperty(e, '__esModule', { value: !0 }),
                    e
                  );
                })({}).Typr
              );
            },
            function () {
              return (function (e) {
                var r = Uint8Array,
                  t = Uint16Array,
                  a = Uint32Array,
                  n = new r([
                    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5,
                    5, 0, 0, 0, 0,
                  ]),
                  i = new r([
                    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11,
                    11, 12, 12, 13, 13, 0, 0,
                  ]),
                  o = new r([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                  s = function (e, r) {
                    for (var n = new t(31), i = 0; i < 31; ++i) n[i] = r += 1 << e[i - 1];
                    var o = new a(n[30]);
                    for (i = 1; i < 30; ++i)
                      for (var s = n[i]; s < n[i + 1]; ++s) o[s] = ((s - n[i]) << 5) | i;
                    return [n, o];
                  },
                  u = s(n, 2),
                  l = u[0],
                  f = u[1];
                (l[28] = 258), (f[258] = 28);
                for (var h = s(i, 0)[0], d = new t(32768), c = 0; c < 32768; ++c) {
                  var v = ((43690 & c) >>> 1) | ((21845 & c) << 1);
                  (v =
                    ((61680 & (v = ((52428 & v) >>> 2) | ((13107 & v) << 2))) >>> 4) |
                    ((3855 & v) << 4)),
                    (d[c] = (((65280 & v) >>> 8) | ((255 & v) << 8)) >>> 1);
                }
                var p = function (e, r, a) {
                    for (var n = e.length, i = 0, o = new t(r); i < n; ++i) ++o[e[i] - 1];
                    var s,
                      u = new t(r);
                    for (i = 0; i < r; ++i) u[i] = (u[i - 1] + o[i - 1]) << 1;
                    if (a) {
                      s = new t(1 << r);
                      var l = 15 - r;
                      for (i = 0; i < n; ++i)
                        if (e[i])
                          for (
                            var f = (i << 4) | e[i],
                              h = r - e[i],
                              c = u[e[i] - 1]++ << h,
                              v = c | ((1 << h) - 1);
                            c <= v;
                            ++c
                          )
                            s[d[c] >>> l] = f;
                    } else
                      for (s = new t(n), i = 0; i < n; ++i)
                        e[i] && (s[i] = d[u[e[i] - 1]++] >>> (15 - e[i]));
                    return s;
                  },
                  g = new r(288);
                for (c = 0; c < 144; ++c) g[c] = 8;
                for (c = 144; c < 256; ++c) g[c] = 9;
                for (c = 256; c < 280; ++c) g[c] = 7;
                for (c = 280; c < 288; ++c) g[c] = 8;
                var y = new r(32);
                for (c = 0; c < 32; ++c) y[c] = 5;
                var m = p(g, 9, 1),
                  S = p(y, 5, 1),
                  U = function (e) {
                    for (var r = e[0], t = 1; t < e.length; ++t) e[t] > r && (r = e[t]);
                    return r;
                  },
                  x = function (e, r, t) {
                    var a = (r / 8) | 0;
                    return ((e[a] | (e[a + 1] << 8)) >> (7 & r)) & t;
                  },
                  b = function (e, r) {
                    var t = (r / 8) | 0;
                    return (e[t] | (e[t + 1] << 8) | (e[t + 2] << 16)) >> (7 & r);
                  },
                  k = [
                    'unexpected EOF',
                    'invalid block type',
                    'invalid length/literal',
                    'invalid distance',
                    'stream finished',
                    'no stream handler',
                    ,
                    'no callback',
                    'invalid UTF-8 data',
                    'extra field too long',
                    'date not in range 1980-2099',
                    'filename too long',
                    'stream finishing',
                    'invalid zip data',
                  ],
                  T = function e(r, t, a) {
                    var n = new Error(t || k[r]);
                    if (
                      ((n.code = r), Error.captureStackTrace && Error.captureStackTrace(n, e), !a)
                    )
                      throw n;
                    return n;
                  },
                  w = function (e, s, u) {
                    var f = e.length;
                    if (!f || (u && !u.l && f < 5)) return s || new r(0);
                    var d = !s || u,
                      c = !u || u.i;
                    u || (u = {}), s || (s = new r(3 * f));
                    var v,
                      g = function (e) {
                        var t = s.length;
                        if (e > t) {
                          var a = new r(Math.max(2 * t, e));
                          a.set(s), (s = a);
                        }
                      },
                      y = u.f || 0,
                      k = u.p || 0,
                      w = u.b || 0,
                      F = u.l,
                      C = u.d,
                      _ = u.m,
                      D = u.n,
                      G = 8 * f;
                    do {
                      if (!F) {
                        u.f = y = x(e, k, 1);
                        var O = x(e, k + 1, 3);
                        if (((k += 3), !O)) {
                          var P =
                              e[(j = (((v = k) / 8) | 0) + (7 & v && 1) + 4) - 4] | (e[j - 3] << 8),
                            B = j + P;
                          if (B > f) {
                            c && T(0);
                            break;
                          }
                          d && g(w + P),
                            s.set(e.subarray(j, B), w),
                            (u.b = w += P),
                            (u.p = k = 8 * B);
                          continue;
                        }
                        if (1 == O) (F = m), (C = S), (_ = 9), (D = 5);
                        else if (2 == O) {
                          var I = x(e, k, 31) + 257,
                            A = x(e, k + 10, 15) + 4,
                            R = I + x(e, k + 5, 31) + 1;
                          k += 14;
                          for (var M = new r(R), E = new r(19), L = 0; L < A; ++L)
                            E[o[L]] = x(e, k + 3 * L, 7);
                          k += 3 * A;
                          var z = U(E),
                            W = (1 << z) - 1,
                            V = p(E, z, 1);
                          for (L = 0; L < R; ) {
                            var j,
                              H = V[x(e, k, W)];
                            if (((k += 15 & H), (j = H >>> 4) < 16)) M[L++] = j;
                            else {
                              var N = 0,
                                X = 0;
                              for (
                                16 == j
                                  ? ((X = 3 + x(e, k, 3)), (k += 2), (N = M[L - 1]))
                                  : 17 == j
                                  ? ((X = 3 + x(e, k, 7)), (k += 3))
                                  : 18 == j && ((X = 11 + x(e, k, 127)), (k += 7));
                                X--;

                              )
                                M[L++] = N;
                            }
                          }
                          var Z = M.subarray(0, I),
                            q = M.subarray(I);
                          (_ = U(Z)), (D = U(q)), (F = p(Z, _, 1)), (C = p(q, D, 1));
                        } else T(1);
                        if (k > G) {
                          c && T(0);
                          break;
                        }
                      }
                      d && g(w + 131072);
                      for (var Y = (1 << _) - 1, $ = (1 << D) - 1, J = k; ; J = k) {
                        var Q = (N = F[b(e, k) & Y]) >>> 4;
                        if ((k += 15 & N) > G) {
                          c && T(0);
                          break;
                        }
                        if ((N || T(2), Q < 256)) s[w++] = Q;
                        else {
                          if (256 == Q) {
                            (J = k), (F = null);
                            break;
                          }
                          var K = Q - 254;
                          if (Q > 264) {
                            var ee = n[(L = Q - 257)];
                            (K = x(e, k, (1 << ee) - 1) + l[L]), (k += ee);
                          }
                          var re = C[b(e, k) & $],
                            te = re >>> 4;
                          if (
                            (re || T(3),
                            (k += 15 & re),
                            (q = h[te]),
                            te > 3 && ((ee = i[te]), (q += b(e, k) & ((1 << ee) - 1)), (k += ee)),
                            k > G)
                          ) {
                            c && T(0);
                            break;
                          }
                          d && g(w + 131072);
                          for (var ae = w + K; w < ae; w += 4)
                            (s[w] = s[w - q]),
                              (s[w + 1] = s[w + 1 - q]),
                              (s[w + 2] = s[w + 2 - q]),
                              (s[w + 3] = s[w + 3 - q]);
                          w = ae;
                        }
                      }
                      (u.l = F),
                        (u.p = J),
                        (u.b = w),
                        F && ((y = 1), (u.m = _), (u.d = C), (u.n = D));
                    } while (!y);
                    return w == s.length
                      ? s
                      : (function (e, n, i) {
                          (null == n || n < 0) && (n = 0),
                            (null == i || i > e.length) && (i = e.length);
                          var o = new (e instanceof t ? t : e instanceof a ? a : r)(i - n);
                          return o.set(e.subarray(n, i)), o;
                        })(s, 0, w);
                  },
                  F = new r(0),
                  C = 'undefined' != typeof TextDecoder && new TextDecoder();
                try {
                  C.decode(F, { stream: !0 });
                } catch (e) {}
                return (
                  (e.convert_streams = function (e) {
                    var r = new DataView(e),
                      t = 0;
                    function a() {
                      var e = r.getUint16(t);
                      return (t += 2), e;
                    }
                    function n() {
                      var e = r.getUint32(t);
                      return (t += 4), e;
                    }
                    function i(e) {
                      y.setUint16(m, e), (m += 2);
                    }
                    function o(e) {
                      y.setUint32(m, e), (m += 4);
                    }
                    for (
                      var s = {
                          signature: n(),
                          flavor: n(),
                          length: n(),
                          numTables: a(),
                          reserved: a(),
                          totalSfntSize: n(),
                          majorVersion: a(),
                          minorVersion: a(),
                          metaOffset: n(),
                          metaLength: n(),
                          metaOrigLength: n(),
                          privOffset: n(),
                          privLength: n(),
                        },
                        u = 0;
                      Math.pow(2, u) <= s.numTables;

                    )
                      u++;
                    u--;
                    for (
                      var l = 16 * Math.pow(2, u), f = 16 * s.numTables - l, h = 12, d = [], c = 0;
                      c < s.numTables;
                      c++
                    )
                      d.push({
                        tag: n(),
                        offset: n(),
                        compLength: n(),
                        origLength: n(),
                        origChecksum: n(),
                      }),
                        (h += 16);
                    var v,
                      p = new Uint8Array(
                        12 +
                          16 * d.length +
                          d.reduce(function (e, r) {
                            return e + r.origLength + 4;
                          }, 0),
                      ),
                      g = p.buffer,
                      y = new DataView(g),
                      m = 0;
                    return (
                      o(s.flavor),
                      i(s.numTables),
                      i(l),
                      i(u),
                      i(f),
                      d.forEach(function (e) {
                        o(e.tag),
                          o(e.origChecksum),
                          o(h),
                          o(e.origLength),
                          (e.outOffset = h),
                          (h += e.origLength) % 4 != 0 && (h += 4 - (h % 4));
                      }),
                      d.forEach(function (r) {
                        var t,
                          a = e.slice(r.offset, r.offset + r.compLength);
                        if (r.compLength != r.origLength) {
                          var n = new Uint8Array(r.origLength);
                          (t = new Uint8Array(a, 2)), w(t, n);
                        } else n = new Uint8Array(a);
                        p.set(n, r.outOffset);
                        var i = 0;
                        (h = r.outOffset + r.origLength) % 4 != 0 && (i = 4 - (h % 4)),
                          p.set(new Uint8Array(i).buffer, r.outOffset + r.origLength),
                          (v = h + i);
                      }),
                      g.slice(0, v)
                    );
                  }),
                  Object.defineProperty(e, '__esModule', { value: !0 }),
                  e
                );
              })({}).convert_streams;
            },
            function (e, r) {
              var t,
                a = { M: 2, L: 2, Q: 4, C: 6, Z: 0 },
                n = {
                  C: '18g,ca,368,1kz',
                  D: '17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v',
                  R: '17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6',
                  L: 'x9u,jff,a,fd,jv',
                  T: '4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n',
                },
                i = 1,
                o = 2,
                s = 4,
                u = 8,
                l = 16,
                h = 32;
              function d(e) {
                if (!t) {
                  var r = { R: o, L: i, D: s, C: l, U: h, T: u };
                  t = new Map();
                  var a = function (e) {
                    var a = 0;
                    n[e].split(',').forEach(function (n) {
                      var i = n.split('+'),
                        o = (0, f.Z)(i, 2),
                        s = o[0],
                        u = o[1];
                      (s = parseInt(s, 36)), (u = u ? parseInt(u, 36) : 0), t.set((a += s), r[e]);
                      for (var l = u; l--; ) t.set(++a, r[e]);
                    });
                  };
                  for (var d in n) a(d);
                }
                return t.get(e) || h;
              }
              var c = 1,
                v = 2,
                p = 3,
                g = 4,
                y = [null, 'isol', 'init', 'fina', 'medi'];
              function m(e) {
                for (
                  var r = new Uint8Array(e.length), t = h, a = c, n = -1, f = 0;
                  f < e.length;
                  f++
                ) {
                  var y = e.codePointAt(f),
                    m = 0 | d(y),
                    S = c;
                  m & u ||
                    (t & (i | s | l)
                      ? m & (o | s | l)
                        ? ((S = p), (a !== c && a !== p) || r[n]++)
                        : m & (i | h) && ((a !== v && a !== g) || r[n]--)
                      : t & (o | h) && ((a !== v && a !== g) || r[n]--),
                    (a = r[f] = S),
                    (t = m),
                    (n = f),
                    y > 65535 && f++);
                }
                return r;
              }
              function S() {
                for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
                  r[t] = arguments[t];
                for (var a = 0; a < r.length; a++) if ('number' == typeof r[a]) return r[a];
              }
              function U(r) {
                var t = Object.create(null),
                  n = r['OS/2'],
                  i = r.hhea,
                  o = r.head.unitsPerEm,
                  s = S(n && n.sTypoAscender, i && i.ascender, o),
                  u = {
                    unitsPerEm: o,
                    ascender: s,
                    descender: S(n && n.sTypoDescender, i && i.descender, 0),
                    capHeight: S(n && n.sCapHeight, s),
                    xHeight: S(n && n.sxHeight, s),
                    lineGap: S(n && n.sTypoLineGap, i && i.lineGap),
                    forEachGlyph: function (n, i, o, s) {
                      var l = 0,
                        f = (1 / u.unitsPerEm) * i,
                        h = (function (r, t) {
                          for (var a = [], n = 0; n < t.length; n++) {
                            var i = t.codePointAt(n);
                            i > 65535 && n++, a.push(e.U.codeToGlyph(r, i));
                          }
                          var o = r.GSUB;
                          if (o) {
                            var s,
                              u = o.lookupList,
                              l = o.featureList,
                              f = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,
                              h = [];
                            l.forEach(function (r) {
                              if (f.test(r.tag))
                                for (var n = 0; n < r.tab.length; n++)
                                  if (!h[r.tab[n]]) {
                                    h[r.tab[n]] = !0;
                                    var i = u[r.tab[n]],
                                      o = /^(isol|init|fina|medi)$/.test(r.tag);
                                    o && !s && (s = m(t));
                                    for (var l = 0; l < a.length; l++)
                                      (s && o && y[s[l]] !== r.tag) || e.U._applySubs(a, l, i, u);
                                  }
                            });
                          }
                          return a;
                        })(r, n),
                        d = 0,
                        c = -1;
                      return (
                        h.forEach(function (u, h) {
                          if (-1 !== u) {
                            var v = t[u];
                            if (!v) {
                              for (
                                var p,
                                  g,
                                  y,
                                  m,
                                  S = e.U.glyphToPath(r, u),
                                  U = S.cmds,
                                  x = S.crds,
                                  b = '',
                                  k = 0,
                                  T = 0,
                                  w = U.length;
                                T < w;
                                T++
                              ) {
                                var F = a[U[T]];
                                b += U[T];
                                for (var C = 1; C <= F; C++) b += (C > 1 ? ',' : '') + x[k++];
                              }
                              if (x.length) {
                                (p = g = 1 / 0), (y = m = -1 / 0);
                                for (var _ = 0, D = x.length; _ < D; _ += 2) {
                                  var G = x[_],
                                    O = x[_ + 1];
                                  G < p && (p = G),
                                    O < g && (g = O),
                                    G > y && (y = G),
                                    O > m && (m = O);
                                }
                              } else p = y = g = m = 0;
                              v = t[u] = {
                                index: u,
                                advanceWidth: r.hmtx.aWidth[u],
                                xMin: p,
                                yMin: g,
                                xMax: y,
                                yMax: m,
                                path: b,
                                pathCommandCount: U.length,
                              };
                            }
                            -1 !== c && (l += e.U.getPairAdjustment(r, c, u) * f),
                              s.call(null, v, l, d),
                              v.advanceWidth && (l += v.advanceWidth * f),
                              o && (l += o * i),
                              (c = u);
                          }
                          d += n.codePointAt(d) > 65535 ? 2 : 1;
                        }),
                        l
                      );
                    },
                  };
                return u;
              }
              return function (t) {
                var a = new Uint8Array(t, 0, 4),
                  n = e._bin.readASCII(a, 0, 4);
                if ('wOFF' === n) t = r(t);
                else if ('wOF2' === n) throw new Error('woff2 fonts not supported');
                return U(e.parse(t)[0]);
              };
            },
          ],
          init: function (e, r, t) {
            return t(e(), r());
          },
        }),
        O = {
          defaultFontURL: 'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff',
          sdfGlyphSize: 64,
          sdfMargin: 1 / 16,
          sdfExponent: 9,
          textureWidth: 2048,
        },
        P = new h.Color();
      function B() {
        return (self.performance || Date).now();
      }
      var I,
        A = Object.create(null);
      function R(e, r) {
        !0, (e = L({}, e));
        var t = B();
        if (
          ((e.font = (function (e) {
            I || (I = 'undefined' == typeof document ? {} : document.createElement('a'));
            return (I.href = e), I.href;
          })(e.font || O.defaultFontURL)),
          (e.text = '' + e.text),
          (e.sdfGlyphSize = e.sdfGlyphSize || O.sdfGlyphSize),
          null != e.colorRanges)
        ) {
          var a = {};
          for (var n in e.colorRanges)
            if (e.colorRanges.hasOwnProperty(n)) {
              var i = e.colorRanges[n];
              'number' != typeof i && (i = P.set(i).getHex()), (a[n] = i);
            }
          e.colorRanges = a;
        }
        Object.freeze(e);
        var o = O.textureWidth,
          s = O.sdfExponent,
          u = e.sdfGlyphSize,
          l = (o / u) * 4,
          f = A[u];
        if (!f) {
          var d = document.createElement('canvas');
          (d.width = o),
            (d.height = (256 * u) / l),
            ((f = A[u] =
              {
                glyphCount: 0,
                sdfGlyphSize: u,
                sdfCanvas: d,
                sdfTexture: new h.Texture(
                  d,
                  void 0,
                  void 0,
                  void 0,
                  h.LinearFilter,
                  h.LinearFilter,
                ),
                contextLost: !1,
                glyphsByFont: new Map(),
              }).sdfTexture.generateMipmaps = !1),
            (function (e) {
              var r = e.sdfCanvas;
              r.addEventListener('webglcontextlost', function (r) {
                console.log('Context Lost', r), r.preventDefault(), (e.contextLost = !0);
              }),
                r.addEventListener('webglcontextrestored', function (r) {
                  console.log('Context Restored', r), (e.contextLost = !1);
                  var t = [];
                  e.glyphsByFont.forEach(function (r) {
                    r.forEach(function (r) {
                      t.push(M(r, e, !0));
                    });
                  }),
                    Promise.all(t).then(function () {
                      z(e), (e.sdfTexture.needsUpdate = !0);
                    });
                });
            })(f);
        }
        var c = f,
          v = c.sdfTexture,
          p = c.sdfCanvas,
          g = f.glyphsByFont.get(e.font);
        g || f.glyphsByFont.set(e.font, (g = new Map())),
          V(e).then(function (a) {
            var n = a.glyphIds,
              i = a.glyphPositions,
              h = a.fontSize,
              d = a.unitsPerEm,
              c = a.timings,
              y = [],
              m = new Float32Array(4 * n.length),
              S = h / d,
              U = 0,
              x = 0,
              b = B();
            n.forEach(function (e, r) {
              var t = g.get(e);
              if (!t) {
                var o = a.glyphData[e],
                  s = o.path,
                  l = o.pathBounds,
                  h = (Math.max(l[2] - l[0], l[3] - l[1]) / u) * (O.sdfMargin * u + 0.5),
                  d = f.glyphCount++,
                  c = [l[0] - h, l[1] - h, l[2] + h, l[3] + h];
                g.set(e, (t = { path: s, atlasIndex: d, sdfViewBox: c })), y.push(t);
              }
              var v = t.sdfViewBox,
                p = i[x++],
                b = i[x++];
              (m[U++] = p + v[0] * S),
                (m[U++] = b + v[1] * S),
                (m[U++] = p + v[2] * S),
                (m[U++] = b + v[3] * S),
                (n[r] = t.atlasIndex);
            }),
              (c.quads = (c.quads || 0) + (B() - b));
            var k = B();
            c.sdf = {};
            var T = p.height,
              w = Math.ceil(f.glyphCount / l),
              F = Math.pow(2, Math.ceil(Math.log2(w * u)));
            F > T &&
              (console.info('Increasing SDF texture size '.concat(T, '->').concat(F)),
              D(p, o, F),
              v.dispose()),
              Promise.all(
                y.map(function (r) {
                  return M(r, f, e.gpuAccelerateSDF).then(function (e) {
                    var t = e.timing;
                    c.sdf[r.atlasIndex] = t;
                  });
                }),
              ).then(function () {
                y.length && !f.contextLost && (z(f), (v.needsUpdate = !0)),
                  (c.sdfTotal = B() - k),
                  (c.total = B() - t),
                  r(
                    Object.freeze({
                      parameters: e,
                      sdfTexture: v,
                      sdfGlyphSize: u,
                      sdfExponent: s,
                      glyphBounds: m,
                      glyphAtlasIndices: n,
                      glyphColors: a.glyphColors,
                      caretPositions: a.caretPositions,
                      caretHeight: a.caretHeight,
                      chunkedBounds: a.chunkedBounds,
                      ascender: a.ascender,
                      descender: a.descender,
                      lineHeight: a.lineHeight,
                      capHeight: a.capHeight,
                      xHeight: a.xHeight,
                      topBaseline: a.topBaseline,
                      blockBounds: a.blockBounds,
                      visibleBounds: a.visibleBounds,
                      timings: a.timings,
                    }),
                  );
              });
          }),
          Promise.resolve().then(function () {
            f.contextLost ||
              (function (e) {
                e._warm || (S.webgl.isSupported(e), (e._warm = !0));
              })(p);
          });
      }
      function M(e, r, t) {
        var a = e.path,
          n = e.atlasIndex,
          i = e.sdfViewBox,
          o = r.sdfGlyphSize,
          s = r.sdfCanvas;
        if (r.contextLost) return Promise.resolve({ timing: -1 });
        var u = O.textureWidth,
          l = O.sdfExponent,
          f = Math.max(i[2] - i[0], i[3] - i[1]),
          h = Math.floor(n / 4);
        return (function (e, r, t, a, n, i, o, s, u, l) {
          return arguments.length > 10 && void 0 !== arguments[10] && !arguments[10]
            ? _(e, r, t, a, n, i, o, s, u, l)
            : k(e, r, t, a, n, i, o, s, u, l).then(null, function (f) {
                return (
                  y ||
                    (console.warn('WebGL SDF generation failed, falling back to JS', f), (y = !0)),
                  _(e, r, t, a, n, i, o, s, u, l)
                );
              });
        })(o, o, a, i, f, l, s, (h % (u / o)) * o, Math.floor(h / (u / o)) * o, n % 4, t);
      }
      function E(e, r) {
        var t = e.font,
          a = e.characters;
        R(
          { font: t, sdfGlyphSize: e.sdfGlyphSize, text: Array.isArray(a) ? a.join('\n') : '' + a },
          r,
        );
      }
      function L(e, r) {
        for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
        return e;
      }
      function z(e) {
        if ('function' != typeof createImageBitmap) {
          console.info('Safari<15: applying SDF canvas workaround');
          var r = e.sdfCanvas,
            t = e.sdfTexture,
            a = r.width,
            n = r.height,
            i = e.sdfCanvas.getContext('webgl'),
            o = t.image.data;
          (o && o.length === a * n * 4) ||
            ((o = new Uint8Array(a * n * 4)),
            (t.image = { width: a, height: n, data: o }),
            (t.flipY = !1),
            (t.isDataTexture = !0)),
            i.readPixels(0, 0, a, n, i.RGBA, i.UNSIGNED_BYTE, o);
        }
      }
      var W = (0, d.Ch)({
          name: 'Typesetter',
          dependencies: [
            O,
            G,
            function (e, r, t) {
              var a = t.defaultFontURL,
                n = Object.create(null),
                i = 1 / 0,
                o =
                  /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,
                s = '[^\\S\\u00A0]',
                u = new RegExp(
                  ''.concat(
                    s,
                    '|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]',
                  ),
                );
              function l(r, t) {
                r || (r = a);
                var i = n[r];
                i
                  ? i.pending
                    ? i.pending.push(t)
                    : t(i)
                  : ((n[r] = { pending: [t] }),
                    (function (r, t) {
                      !(function n() {
                        var i = function (e) {
                          console.error(
                            'Failure loading font '
                              .concat(r)
                              .concat(r === a ? '' : '; trying fallback'),
                            e,
                          ),
                            r !== a && ((r = a), n());
                        };
                        try {
                          var o = new XMLHttpRequest();
                          o.open('get', r, !0),
                            (o.responseType = 'arraybuffer'),
                            (o.onload = function () {
                              if (o.status >= 400) i(new Error(o.statusText));
                              else if (o.status > 0)
                                try {
                                  var r = e(o.response);
                                  t(r);
                                } catch (a) {
                                  i(a);
                                }
                            }),
                            (o.onerror = i),
                            o.send();
                        } catch (s) {
                          i(s);
                        }
                      })();
                    })(r, function (e) {
                      var t = n[r].pending;
                      (n[r] = e),
                        t.forEach(function (r) {
                          return r(e);
                        });
                    }));
              }
              function h(e, t) {
                var n = e.text,
                  h = void 0 === n ? '' : n,
                  g = e.font,
                  y = void 0 === g ? a : g,
                  m = (e.sdfGlyphSize, e.fontSize),
                  S = void 0 === m ? 1 : m,
                  U = e.letterSpacing,
                  x = void 0 === U ? 0 : U,
                  b = e.lineHeight,
                  k = void 0 === b ? 'normal' : b,
                  T = e.maxWidth,
                  w = void 0 === T ? i : T,
                  F = e.direction,
                  C = e.textAlign,
                  _ = void 0 === C ? 'left' : C,
                  D = e.textIndent,
                  G = void 0 === D ? 0 : D,
                  O = e.whiteSpace,
                  P = void 0 === O ? 'normal' : O,
                  B = e.overflowWrap,
                  I = void 0 === B ? 'normal' : B,
                  A = e.anchorX,
                  R = void 0 === A ? 0 : A,
                  M = e.anchorY,
                  E = void 0 === M ? 0 : M,
                  L = e.includeCaretPositions,
                  z = void 0 !== L && L,
                  W = e.chunkedBoundsSize,
                  V = void 0 === W ? 8192 : W,
                  j = e.colorRanges,
                  H = void 0 === j ? null : j,
                  N = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  X = v(),
                  Z = { fontLoad: 0, typesetting: 0 };
                h.indexOf('\r') > -1 &&
                  (console.info('Typesetter: got text with \\r chars; normalizing to \\n'),
                  (h = h.replace(/\r\n/g, '\n').replace(/\r/g, '\n'))),
                  (S = +S),
                  (x = +x),
                  (w = +w),
                  (k = k || 'normal'),
                  (G = +G),
                  l(y, function (e) {
                    var a = isFinite(w),
                      n = null,
                      l = null,
                      g = null,
                      y = null,
                      m = null,
                      U = null,
                      b = null,
                      T = 0,
                      C = 0,
                      D = 'nowrap' !== P,
                      O = e.ascender,
                      B = e.descender,
                      A = e.unitsPerEm,
                      M = e.lineGap,
                      L = e.capHeight,
                      W = e.xHeight;
                    Z.fontLoad = v() - X;
                    var j = v(),
                      q = S / A;
                    'normal' === k && (k = (O - B + M) / A);
                    var Y = ((k *= S) - (O - B) * q) / 2,
                      $ = -(O * q + Y),
                      J = Math.min(k, (O - B) * q),
                      Q = ((O + B) / 2) * q - J / 2,
                      K = G,
                      ee = new p(),
                      re = [ee];
                    e.forEachGlyph(h, S, x, function (e, r, t) {
                      var n,
                        i = h.charAt(t),
                        l = e.advanceWidth * q,
                        f = ee.count;
                      if (
                        ('isEmpty' in e ||
                          ((e.isWhitespace = !!i && new RegExp(s).test(i)),
                          (e.canBreakAfter = !!i && u.test(i)),
                          (e.isEmpty = e.xMin === e.xMax || e.yMin === e.yMax || o.test(i))),
                        e.isWhitespace || e.isEmpty || C++,
                        D && a && !e.isWhitespace && r + l + K > w && f)
                      ) {
                        if (ee.glyphAt(f - 1).glyphObj.canBreakAfter) (n = new p()), (K = -r);
                        else
                          for (var d = f; d--; ) {
                            if (0 === d && 'break-word' === I) {
                              (n = new p()), (K = -r);
                              break;
                            }
                            if (ee.glyphAt(d).glyphObj.canBreakAfter) {
                              var c = (n = ee.splitAt(d + 1)).glyphAt(0).x;
                              K -= c;
                              for (var v = n.count; v--; ) n.glyphAt(v).x -= c;
                              break;
                            }
                          }
                        n && ((ee.isSoftWrapped = !0), (ee = n), re.push(ee), (T = w));
                      }
                      var g = ee.glyphAt(ee.count);
                      (g.glyphObj = e),
                        (g.x = r + K),
                        (g.width = l),
                        (g.charIndex = t),
                        '\n' === i && ((ee = new p()), re.push(ee), (K = -(r + l + x * S) + G));
                    }),
                      re.forEach(function (e) {
                        for (var r = e.count; r--; ) {
                          var t = e.glyphAt(r),
                            a = t.glyphObj,
                            n = t.x,
                            i = t.width;
                          if (!a.isWhitespace)
                            return (e.width = n + i), void (e.width > T && (T = e.width));
                        }
                      });
                    var te = 0,
                      ae = 0;
                    if (
                      (R &&
                        ('number' == typeof R
                          ? (te = -R)
                          : 'string' == typeof R &&
                            (te =
                              -T *
                              ('left' === R
                                ? 0
                                : 'center' === R
                                ? 0.5
                                : 'right' === R
                                ? 1
                                : d(R)))),
                      E)
                    )
                      if ('number' == typeof E) ae = -E;
                      else if ('string' == typeof E) {
                        var ne = re.length * k;
                        ae =
                          'top' === E
                            ? 0
                            : 'top-baseline' === E
                            ? -$
                            : 'top-cap' === E
                            ? -$ - L * q
                            : 'top-ex' === E
                            ? -$ - W * q
                            : 'middle' === E
                            ? ne / 2
                            : 'bottom' === E
                            ? ne
                            : 'bottom-baseline' === E
                            ? ne - Y + B * q
                            : d(E) * ne;
                      }
                    if (!N) {
                      var ie = r.getEmbeddingLevels(h, F);
                      (n = new Uint16Array(C)),
                        (l = new Float32Array(2 * C)),
                        (g = {}),
                        (U = [i, i, -i, -i]),
                        (b = []);
                      var oe = $;
                      z && (m = new Float32Array(3 * h.length)), H && (y = new Uint8Array(3 * C));
                      var se,
                        ue,
                        le = 0,
                        fe = -1,
                        he = -1;
                      if (
                        (re.forEach(function (t, a) {
                          var o = t.count,
                            s = t.width;
                          if (o > 0) {
                            for (var u = 0, d = o; d-- && t.glyphAt(d).glyphObj.isWhitespace; ) u++;
                            var v = 0,
                              p = 0;
                            if ('center' === _) v = (T - s) / 2;
                            else if ('right' === _) v = T - s;
                            else if ('justify' === _ && t.isSoftWrapped) {
                              for (var S = 0, x = o - u; x--; )
                                t.glyphAt(x).glyphObj.isWhitespace && S++;
                              p = (T - s) / S;
                            }
                            if (p || v)
                              for (var w = 0, F = 0; F < o; F++) {
                                var C = t.glyphAt(F),
                                  D = C.glyphObj;
                                (C.x += v + w),
                                  0 !== p &&
                                    D.isWhitespace &&
                                    F < o - u &&
                                    ((w += p), (C.width += p));
                              }
                            for (
                              var G,
                                O = r.getReorderSegments(
                                  h,
                                  ie,
                                  t.glyphAt(0).charIndex,
                                  t.glyphAt(t.count - 1).charIndex,
                                ),
                                P = 0;
                              P < O.length;
                              P++
                            )
                              for (
                                var B = (0, f.Z)(O[P], 2),
                                  I = B[0],
                                  A = B[1],
                                  R = 1 / 0,
                                  M = -1 / 0,
                                  E = 0;
                                E < o;
                                E++
                              )
                                if (t.glyphAt(E).charIndex >= I) {
                                  for (var L = E, W = E; W < o; W++) {
                                    var j = t.glyphAt(W);
                                    if (j.charIndex > A) break;
                                    W < o - u &&
                                      ((R = Math.min(R, j.x)), (M = Math.max(M, j.x + j.width)));
                                  }
                                  for (var N = L; N < W; N++) {
                                    var X = t.glyphAt(N);
                                    X.x = M - (X.x + X.width - R);
                                  }
                                  break;
                                }
                            for (
                              var Z = function (e) {
                                  return (G = e);
                                },
                                Y = 0;
                              Y < o;
                              Y++
                            ) {
                              var $ = t.glyphAt(Y),
                                J = (G = $.glyphObj).index,
                                K = 1 & ie.levels[$.charIndex];
                              if (K) {
                                var ee = r.getMirroredCharacter(h[$.charIndex]);
                                ee && e.forEachGlyph(ee, 0, 0, Z);
                              }
                              if (z) {
                                var re = $.charIndex,
                                  ne = $.x + te,
                                  de = $.x + $.width + te;
                                (m[3 * re] = K ? de : ne),
                                  (m[3 * re + 1] = K ? ne : de),
                                  (m[3 * re + 2] = oe + Q + ae);
                                var ce = re - fe;
                                ce > 1 && c(m, fe, ce), (fe = re);
                              }
                              if (H)
                                for (var ve = $.charIndex; ve > he; )
                                  he++, H.hasOwnProperty(he) && (ue = H[he]);
                              if (!G.isWhitespace && !G.isEmpty) {
                                var pe = le++;
                                g[J] ||
                                  (g[J] = {
                                    path: G.path,
                                    pathBounds: [G.xMin, G.yMin, G.xMax, G.yMax],
                                  });
                                var ge = $.x + te,
                                  ye = oe + ae;
                                (l[2 * pe] = ge), (l[2 * pe + 1] = ye);
                                var me = ge + G.xMin * q,
                                  Se = ye + G.yMin * q,
                                  Ue = ge + G.xMax * q,
                                  xe = ye + G.yMax * q;
                                me < U[0] && (U[0] = me),
                                  Se < U[1] && (U[1] = Se),
                                  Ue > U[2] && (U[2] = Ue),
                                  xe > U[3] && (U[3] = xe),
                                  pe % V == 0 &&
                                    ((se = { start: pe, end: pe, rect: [i, i, -i, -i] }),
                                    b.push(se)),
                                  se.end++;
                                var be = se.rect;
                                if (
                                  (me < be[0] && (be[0] = me),
                                  Se < be[1] && (be[1] = Se),
                                  Ue > be[2] && (be[2] = Ue),
                                  xe > be[3] && (be[3] = xe),
                                  (n[pe] = J),
                                  H)
                                ) {
                                  var ke = 3 * pe;
                                  (y[ke] = (ue >> 16) & 255),
                                    (y[ke + 1] = (ue >> 8) & 255),
                                    (y[ke + 2] = 255 & ue);
                                }
                              }
                            }
                          }
                          oe -= k;
                        }),
                        m)
                      ) {
                        var de = h.length - fe;
                        de > 1 && c(m, fe, de);
                      }
                    }
                    (Z.typesetting = v() - j),
                      t({
                        glyphIds: n,
                        glyphPositions: l,
                        glyphData: g,
                        caretPositions: m,
                        caretHeight: J,
                        glyphColors: y,
                        chunkedBounds: b,
                        fontSize: S,
                        unitsPerEm: A,
                        ascender: O * q,
                        descender: B * q,
                        capHeight: L * q,
                        xHeight: W * q,
                        lineHeight: k,
                        topBaseline: $,
                        blockBounds: [te, ae - re.length * k, te + T, ae],
                        visibleBounds: U,
                        timings: Z,
                      });
                  });
              }
              function d(e) {
                var r = e.match(/^([\d.]+)%$/),
                  t = r ? parseFloat(r[1]) : NaN;
                return isNaN(t) ? 0 : t / 100;
              }
              function c(e, r, t) {
                for (
                  var a = e[3 * r], n = e[3 * r + 1], i = e[3 * r + 2], o = (n - a) / t, s = 0;
                  s < t;
                  s++
                ) {
                  var u = 3 * (r + s);
                  (e[u] = a + o * s), (e[u + 1] = a + o * (s + 1)), (e[u + 2] = i);
                }
              }
              function v() {
                return (self.performance || Date).now();
              }
              function p() {
                this.data = [];
              }
              var g = ['glyphObj', 'x', 'width', 'charIndex'];
              return (
                (p.prototype = {
                  width: 0,
                  isSoftWrapped: !1,
                  get count() {
                    return Math.ceil(this.data.length / g.length);
                  },
                  glyphAt: function (e) {
                    var r = p.flyweight;
                    return (r.data = this.data), (r.index = e), r;
                  },
                  splitAt: function (e) {
                    var r = new p();
                    return (r.data = this.data.splice(e * g.length)), r;
                  },
                }),
                (p.flyweight = g.reduce(
                  function (e, r, t, a) {
                    return (
                      Object.defineProperty(e, r, {
                        get: function () {
                          return this.data[this.index * g.length + t];
                        },
                        set: function (e) {
                          this.data[this.index * g.length + t] = e;
                        },
                      }),
                      e
                    );
                  },
                  { data: null, index: 0 },
                )),
                {
                  typeset: h,
                  measure: function (e, r) {
                    h(
                      e,
                      function (e) {
                        var t = (0, f.Z)(e.blockBounds, 4),
                          a = t[0],
                          n = t[1],
                          i = t[2],
                          o = t[3];
                        r({ width: i - a, height: o - n });
                      },
                      { metricsOnly: !0 },
                    );
                  },
                  loadFont: l,
                }
              );
            },
            v.Z,
          ],
          init: function (e, r, t, a) {
            var n = e.defaultFontURL;
            return t(r, a(), { defaultFontURL: n });
          },
        }),
        V = (0, d.Ch)({
          name: 'Typesetter',
          dependencies: [W],
          init: function (e) {
            return function (r) {
              return new Promise(function (t) {
                e.typeset(r, t);
              });
            };
          },
          getTransferables: function (e) {
            var r = [e.glyphPositions.buffer, e.glyphIds.buffer];
            return (
              e.caretPositions && r.push(e.caretPositions.buffer),
              e.glyphColors && r.push(e.glyphColors.buffer),
              r
            );
          },
        });
      var j = {};
      var H = 'aTroikaGlyphIndex',
        N = (function (e) {
          (0, o.Z)(t, e);
          var r = g(t);
          function t() {
            var e;
            return (
              (0, n.Z)(this, t),
              ((e = r.call(this)).detail = 1),
              (e.curveRadius = 0),
              (e.groups = [
                { start: 0, count: 1 / 0, materialIndex: 0 },
                { start: 0, count: 1 / 0, materialIndex: 1 },
              ]),
              (e.boundingSphere = new h.Sphere()),
              (e.boundingBox = new h.Box3()),
              e
            );
          }
          return (
            (0, i.Z)(t, [
              { key: 'computeBoundingSphere', value: function () {} },
              { key: 'computeBoundingBox', value: function () {} },
              {
                key: 'setSide',
                value: function (e) {
                  var r = this.getIndex().count;
                  this.setDrawRange(e === h.BackSide ? r / 2 : 0, e === h.DoubleSide ? r : r / 2);
                },
              },
              {
                key: 'detail',
                get: function () {
                  return this._detail;
                },
                set: function (e) {
                  var r = this;
                  if (e !== this._detail) {
                    (this._detail = e), ('number' != typeof e || e < 1) && (e = 1);
                    var t = (function (e) {
                      var r = j[e];
                      if (!r) {
                        for (
                          var t = new h.PlaneGeometry(1, 1, e, e),
                            a = t.clone(),
                            n = t.attributes,
                            i = a.attributes,
                            o = new h.BufferGeometry(),
                            s = n.uv.count,
                            u = 0;
                          u < s;
                          u++
                        )
                          (i.position.array[3 * u] *= -1), (i.normal.array[3 * u + 2] *= -1);
                        ['position', 'normal', 'uv'].forEach(function (e) {
                          o.setAttribute(
                            e,
                            new h.Float32BufferAttribute(
                              [].concat((0, l.Z)(n[e].array), (0, l.Z)(i[e].array)),
                              n[e].itemSize,
                            ),
                          );
                        }),
                          o.setIndex(
                            [].concat(
                              (0, l.Z)(t.index.array),
                              (0, l.Z)(
                                a.index.array.map(function (e) {
                                  return e + s;
                                }),
                              ),
                            ),
                          ),
                          o.translate(0.5, 0.5, 0),
                          (r = j[e] = o);
                      }
                      return r;
                    })(e);
                    ['position', 'normal', 'uv'].forEach(function (e) {
                      r.attributes[e] = t.attributes[e].clone();
                    }),
                      this.setIndex(t.getIndex().clone());
                  }
                },
              },
              {
                key: 'curveRadius',
                get: function () {
                  return this._curveRadius;
                },
                set: function (e) {
                  e !== this._curveRadius && ((this._curveRadius = e), this._updateBounds());
                },
              },
              {
                key: 'updateGlyphs',
                value: function (e, r, t, a, n) {
                  X(this, 'aTroikaGlyphBounds', e, 4),
                    X(this, H, r, 1),
                    X(this, 'aTroikaGlyphColor', n, 3),
                    (this._blockBounds = t),
                    (this._chunkedBounds = a),
                    (this.instanceCount = r.length),
                    this._updateBounds();
                },
              },
              {
                key: '_updateBounds',
                value: function () {
                  var e = this._blockBounds;
                  if (e) {
                    var r = this.curveRadius,
                      t = this.boundingBox;
                    if (r) {
                      var a = Math.PI,
                        n = Math.floor,
                        i = Math.min,
                        o = Math.max,
                        s = Math.sin,
                        u = Math.cos,
                        l = a / 2,
                        f = 2 * a,
                        h = Math.abs(r),
                        d = e[0] / h,
                        c = e[2] / h,
                        v = n((d + l) / f) !== n((c + l) / f) ? -h : i(s(d) * h, s(c) * h),
                        p = n((d - l) / f) !== n((c - l) / f) ? h : o(s(d) * h, s(c) * h),
                        g =
                          n((d + a) / f) !== n((c + a) / f) ? 2 * h : o(h - u(d) * h, h - u(c) * h);
                      t.min.set(v, e[1], r < 0 ? -g : 0), t.max.set(p, e[3], r < 0 ? 0 : g);
                    } else t.min.set(e[0], e[1], 0), t.max.set(e[2], e[3], 0);
                    t.getBoundingSphere(this.boundingSphere);
                  }
                },
              },
              {
                key: 'applyClipRect',
                value: function (e) {
                  var r = this.getAttribute(H).count,
                    t = this._chunkedBounds;
                  if (t)
                    for (var a = t.length; a--; ) {
                      r = t[a].end;
                      var n = t[a].rect;
                      if (n[1] < e.w && n[3] > e.y && n[0] < e.z && n[2] > e.x) break;
                    }
                  this.instanceCount = r;
                },
              },
            ]),
            t
          );
        })(h.InstancedBufferGeometry);
      function X(e, r, t, a) {
        var n = e.getAttribute(r);
        t
          ? n && n.array.length === t.length
            ? (n.array.set(t), (n.needsUpdate = !0))
            : (e.setAttribute(r, new h.InstancedBufferAttribute(t, a)),
              delete e._maxInstanceCount,
              e.dispose())
          : n && e.deleteAttribute(r);
      }
      var Z =
          '\nvec4 bounds = aTroikaGlyphBounds;\nbounds.xz += uTroikaPositionOffset.x;\nbounds.yw -= uTroikaPositionOffset.y;\n\nvec4 outlineBounds = vec4(\n  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,\n  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius\n);\nvec4 clippedBounds = vec4(\n  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),\n  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)\n);\n\nvec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);\n\nposition.xy = mix(bounds.xy, bounds.zw, clippedXY);\n\nuv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);\n\nfloat rad = uTroikaCurveRadius;\nif (rad != 0.0) {\n  float angle = position.x / rad;\n  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);\n  normal.xz = vec2(sin(angle), cos(angle));\n}\n  \nposition = uTroikaOrient * position;\nnormal = uTroikaOrient * normal;\n\nvTroikaGlyphUV = clippedXY.xy;\nvTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);\n\n'.concat(
            '\nfloat txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;\nvec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;\nvec2 txStartUV = txUvPerSquare * vec2(\n  mod(floor(aTroikaGlyphIndex / 4.0), txCols),\n  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)\n);\nvTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);\nvTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);\n',
          ),
        q =
          '\nuniform sampler2D uTroikaSDFTexture;\nuniform vec2 uTroikaSDFTextureSize;\nuniform float uTroikaSDFGlyphSize;\nuniform float uTroikaSDFExponent;\nuniform float uTroikaDistanceOffset;\nuniform float uTroikaFillOpacity;\nuniform float uTroikaOutlineOpacity;\nuniform float uTroikaBlurRadius;\nuniform vec3 uTroikaStrokeColor;\nuniform float uTroikaStrokeWidth;\nuniform float uTroikaStrokeOpacity;\nuniform bool uTroikaSDFDebug;\nvarying vec2 vTroikaGlyphUV;\nvarying vec4 vTroikaTextureUVBounds;\nvarying float vTroikaTextureChannel;\nvarying vec2 vTroikaGlyphDimensions;\n\nfloat troikaSdfValueToSignedDistance(float alpha) {\n  // Inverse of exponential encoding in webgl-sdf-generator\n  '.concat(
            "\n  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);\n  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;\n  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);\n  return signedDist;\n}\n\nfloat troikaGlyphUvToSdfValue(vec2 glyphUV) {\n  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);\n  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);\n  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1\n  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;\n}\n\nfloat troikaGlyphUvToDistance(vec2 uv) {\n  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));\n}\n\nfloat troikaGetAADist() {\n  ",
            '\n  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300\n  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;\n  #else\n  return vTroikaGlyphDimensions.x / 64.0;\n  #endif\n}\n\nfloat troikaGetFragDistValue() {\n  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);\n  float distance = troikaGlyphUvToDistance(clampedGlyphUV);\n \n  // Extrapolate distance when outside bounds:\n  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : \n    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);\n\n  ',
            '\n\n  return distance;\n}\n\nfloat troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {\n  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)\n  float alpha = step(-distanceOffset, -distance);\n  #else\n\n  float alpha = smoothstep(\n    distanceOffset + aaDist,\n    distanceOffset - aaDist,\n    distance\n  );\n  #endif\n\n  return alpha;\n}\n',
          );
      var Y = new h.MeshBasicMaterial({ color: 16777215, side: h.DoubleSide, transparent: !0 }),
        $ = 8421504,
        J = new h.Matrix4(),
        Q = new h.Vector3(),
        K = new h.Vector3(),
        ee = [],
        re = new h.Vector3(),
        te = '+x+y';
      function ae(e) {
        return Array.isArray(e) ? e[0] : e;
      }
      var ne = function () {
          var e = new h.Mesh(new h.PlaneGeometry(1, 1), Y);
          return (
            (ne = function () {
              return e;
            }),
            e
          );
        },
        ie = function () {
          var e = new h.Mesh(new h.PlaneGeometry(1, 1, 32, 1), Y);
          return (
            (ie = function () {
              return e;
            }),
            e
          );
        },
        oe = { type: 'syncstart' },
        se = { type: 'synccomplete' },
        ue = [
          'font',
          'fontSize',
          'letterSpacing',
          'lineHeight',
          'maxWidth',
          'overflowWrap',
          'text',
          'direction',
          'textAlign',
          'textIndent',
          'whiteSpace',
          'anchorX',
          'anchorY',
          'colorRanges',
          'sdfGlyphSize',
        ],
        le = ue.concat(
          'material',
          'color',
          'depthOffset',
          'clipRect',
          'curveRadius',
          'orientation',
          'glyphGeometryDetail',
        ),
        fe = (function (e) {
          (0, o.Z)(t, e);
          var r = g(t);
          function t() {
            var e;
            (0, n.Z)(this, t);
            var a = new N();
            return (
              ((e = r.call(this, a, null)).text = ''),
              (e.anchorX = 0),
              (e.anchorY = 0),
              (e.curveRadius = 0),
              (e.direction = 'auto'),
              (e.font = null),
              (e.fontSize = 0.1),
              (e.letterSpacing = 0),
              (e.lineHeight = 'normal'),
              (e.maxWidth = 1 / 0),
              (e.overflowWrap = 'normal'),
              (e.textAlign = 'left'),
              (e.textIndent = 0),
              (e.whiteSpace = 'normal'),
              (e.material = null),
              (e.color = null),
              (e.colorRanges = null),
              (e.outlineWidth = 0),
              (e.outlineColor = 0),
              (e.outlineOpacity = 1),
              (e.outlineBlur = 0),
              (e.outlineOffsetX = 0),
              (e.outlineOffsetY = 0),
              (e.strokeWidth = 0),
              (e.strokeColor = $),
              (e.strokeOpacity = 1),
              (e.fillOpacity = 1),
              (e.depthOffset = 0),
              (e.clipRect = null),
              (e.orientation = te),
              (e.glyphGeometryDetail = 1),
              (e.sdfGlyphSize = null),
              (e.gpuAccelerateSDF = !0),
              (e.debugSDF = !1),
              e
            );
          }
          return (
            (0, i.Z)(t, [
              {
                key: 'sync',
                value: function (e) {
                  var r = this;
                  this._needsSync &&
                    ((this._needsSync = !1),
                    this._isSyncing
                      ? (this._queuedSyncs || (this._queuedSyncs = [])).push(e)
                      : ((this._isSyncing = !0),
                        this.dispatchEvent(oe),
                        R(
                          {
                            text: this.text,
                            font: this.font,
                            fontSize: this.fontSize || 0.1,
                            letterSpacing: this.letterSpacing || 0,
                            lineHeight: this.lineHeight || 'normal',
                            maxWidth: this.maxWidth,
                            direction: this.direction || 'auto',
                            textAlign: this.textAlign,
                            textIndent: this.textIndent,
                            whiteSpace: this.whiteSpace,
                            overflowWrap: this.overflowWrap,
                            anchorX: this.anchorX,
                            anchorY: this.anchorY,
                            colorRanges: this.colorRanges,
                            includeCaretPositions: !0,
                            sdfGlyphSize: this.sdfGlyphSize,
                            gpuAccelerateSDF: this.gpuAccelerateSDF,
                          },
                          function (t) {
                            (r._isSyncing = !1),
                              (r._textRenderInfo = t),
                              r.geometry.updateGlyphs(
                                t.glyphBounds,
                                t.glyphAtlasIndices,
                                t.blockBounds,
                                t.chunkedBounds,
                                t.glyphColors,
                              );
                            var a = r._queuedSyncs;
                            a &&
                              ((r._queuedSyncs = null),
                              (r._needsSync = !0),
                              r.sync(function () {
                                a.forEach(function (e) {
                                  return e && e();
                                });
                              })),
                              r.dispatchEvent(se),
                              e && e();
                          },
                        )));
                },
              },
              {
                key: 'onBeforeRender',
                value: function (e, r, t, a, n, i) {
                  this.sync(),
                    n.isTroikaTextMaterial && this._prepareForRender(n),
                    (n._hadOwnSide = n.hasOwnProperty('side')),
                    this.geometry.setSide((n._actualSide = n.side)),
                    (n.side = h.FrontSide);
                },
              },
              {
                key: 'onAfterRender',
                value: function (e, r, t, a, n, i) {
                  n._hadOwnSide ? (n.side = n._actualSide) : delete n.side;
                },
              },
              {
                key: 'dispose',
                value: function () {
                  this.geometry.dispose();
                },
              },
              {
                key: 'textRenderInfo',
                get: function () {
                  return this._textRenderInfo || null;
                },
              },
              {
                key: 'material',
                get: function () {
                  var e = this._derivedMaterial,
                    r =
                      this._baseMaterial ||
                      this._defaultMaterial ||
                      (this._defaultMaterial = Y.clone());
                  if (
                    ((e && e.baseMaterial === r) ||
                      ((e = this._derivedMaterial =
                        (function (e) {
                          var r = (0, p.B$)(e, {
                            chained: !0,
                            extensions: { derivatives: !0 },
                            uniforms: {
                              uTroikaSDFTexture: { value: null },
                              uTroikaSDFTextureSize: { value: new h.Vector2() },
                              uTroikaSDFGlyphSize: { value: 0 },
                              uTroikaSDFExponent: { value: 0 },
                              uTroikaTotalBounds: { value: new h.Vector4(0, 0, 0, 0) },
                              uTroikaClipRect: { value: new h.Vector4(0, 0, 0, 0) },
                              uTroikaDistanceOffset: { value: 0 },
                              uTroikaOutlineOpacity: { value: 0 },
                              uTroikaFillOpacity: { value: 1 },
                              uTroikaPositionOffset: { value: new h.Vector2() },
                              uTroikaCurveRadius: { value: 0 },
                              uTroikaBlurRadius: { value: 0 },
                              uTroikaStrokeWidth: { value: 0 },
                              uTroikaStrokeColor: { value: new h.Color() },
                              uTroikaStrokeOpacity: { value: 1 },
                              uTroikaOrient: { value: new h.Matrix3() },
                              uTroikaUseGlyphColors: { value: !0 },
                              uTroikaSDFDebug: { value: !1 },
                            },
                            vertexDefs:
                              '\nuniform vec2 uTroikaSDFTextureSize;\nuniform float uTroikaSDFGlyphSize;\nuniform vec4 uTroikaTotalBounds;\nuniform vec4 uTroikaClipRect;\nuniform mat3 uTroikaOrient;\nuniform bool uTroikaUseGlyphColors;\nuniform float uTroikaDistanceOffset;\nuniform float uTroikaBlurRadius;\nuniform vec2 uTroikaPositionOffset;\nuniform float uTroikaCurveRadius;\nattribute vec4 aTroikaGlyphBounds;\nattribute float aTroikaGlyphIndex;\nattribute vec3 aTroikaGlyphColor;\nvarying vec2 vTroikaGlyphUV;\nvarying vec4 vTroikaTextureUVBounds;\nvarying float vTroikaTextureChannel;\nvarying vec3 vTroikaGlyphColor;\nvarying vec2 vTroikaGlyphDimensions;\n',
                            vertexTransform: Z,
                            fragmentDefs: q,
                            fragmentColorTransform:
                              '\nfloat aaDist = troikaGetAADist();\nfloat fragDistance = troikaGetFragDistValue();\nfloat edgeAlpha = uTroikaSDFDebug ?\n  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :\n  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));\n\n#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)\nvec4 fillRGBA = gl_FragColor;\nfillRGBA.a *= uTroikaFillOpacity;\nvec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);\nif (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;\ngl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(\n  -uTroikaStrokeWidth - aaDist,\n  -uTroikaStrokeWidth + aaDist,\n  fragDistance\n));\ngl_FragColor.a *= edgeAlpha;\n#endif\n\nif (edgeAlpha == 0.0) {\n  discard;\n}\n',
                            customRewriter: function (e) {
                              var r = e.vertexShader,
                                t = e.fragmentShader,
                                a = /\buniform\s+vec3\s+diffuse\b/;
                              return (
                                a.test(t) &&
                                  ((t = t
                                    .replace(a, 'varying vec3 vTroikaGlyphColor')
                                    .replace(/\bdiffuse\b/g, 'vTroikaGlyphColor')),
                                  a.test(r) ||
                                    (r = r.replace(
                                      p.MW,
                                      'uniform vec3 diffuse;\n$&\nvTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;\n',
                                    ))),
                                { vertexShader: r, fragmentShader: t }
                              );
                            },
                          });
                          return (
                            (r.transparent = !0),
                            Object.defineProperties(r, {
                              isTroikaTextMaterial: { value: !0 },
                              shadowSide: {
                                get: function () {
                                  return this.side;
                                },
                                set: function () {},
                              },
                            }),
                            r
                          );
                        })(r)),
                      r.addEventListener('dispose', function t() {
                        r.removeEventListener('dispose', t), e.dispose();
                      })),
                    this.outlineWidth ||
                      this.outlineBlur ||
                      this.outlineOffsetX ||
                      this.outlineOffsetY)
                  ) {
                    var t = e._outlineMtl;
                    return (
                      t ||
                        (((t = e._outlineMtl =
                          Object.create(e, { id: { value: e.id + 0.1 } })).isTextOutlineMaterial =
                          !0),
                        (t.depthWrite = !1),
                        (t.map = null),
                        e.addEventListener('dispose', function r() {
                          e.removeEventListener('dispose', r), t.dispose();
                        })),
                      [t, e]
                    );
                  }
                  return e;
                },
                set: function (e) {
                  e && e.isTroikaTextMaterial
                    ? ((this._derivedMaterial = e), (this._baseMaterial = e.baseMaterial))
                    : (this._baseMaterial = e);
                },
              },
              {
                key: 'glyphGeometryDetail',
                get: function () {
                  return this.geometry.detail;
                },
                set: function (e) {
                  this.geometry.detail = e;
                },
              },
              {
                key: 'curveRadius',
                get: function () {
                  return this.geometry.curveRadius;
                },
                set: function (e) {
                  this.geometry.curveRadius = e;
                },
              },
              {
                key: 'customDepthMaterial',
                get: function () {
                  return ae(this.material).getDepthMaterial();
                },
              },
              {
                key: 'customDistanceMaterial',
                get: function () {
                  return ae(this.material).getDistanceMaterial();
                },
              },
              {
                key: '_prepareForRender',
                value: function (e) {
                  var r = e.isTextOutlineMaterial,
                    t = e.uniforms,
                    a = this.textRenderInfo;
                  if (a) {
                    var n = a.sdfTexture,
                      i = a.blockBounds;
                    (t.uTroikaSDFTexture.value = n),
                      t.uTroikaSDFTextureSize.value.set(n.image.width, n.image.height),
                      (t.uTroikaSDFGlyphSize.value = a.sdfGlyphSize),
                      (t.uTroikaSDFExponent.value = a.sdfExponent),
                      t.uTroikaTotalBounds.value.fromArray(i),
                      (t.uTroikaUseGlyphColors.value = !r && !!a.glyphColors);
                    var o,
                      s,
                      u,
                      l = 0,
                      d = 0,
                      c = 0,
                      v = 0,
                      p = 0;
                    if (r) {
                      var g = this.outlineWidth,
                        y = this.outlineOffsetX,
                        m = this.outlineOffsetY,
                        S = this.outlineBlur,
                        U = this.outlineOpacity;
                      (l = this._parsePercent(g) || 0),
                        (d = Math.max(0, this._parsePercent(S) || 0)),
                        (o = U),
                        (v = this._parsePercent(y) || 0),
                        (p = this._parsePercent(m) || 0);
                    } else
                      (c = Math.max(0, this._parsePercent(this.strokeWidth) || 0)) &&
                        ((u = this.strokeColor),
                        t.uTroikaStrokeColor.value.set(null == u ? $ : u),
                        null == (s = this.strokeOpacity) && (s = 1)),
                        (o = this.fillOpacity);
                    (t.uTroikaDistanceOffset.value = l),
                      t.uTroikaPositionOffset.value.set(v, p),
                      (t.uTroikaBlurRadius.value = d),
                      (t.uTroikaStrokeWidth.value = c),
                      (t.uTroikaStrokeOpacity.value = s),
                      (t.uTroikaFillOpacity.value = null == o ? 1 : o),
                      (t.uTroikaCurveRadius.value = this.curveRadius || 0);
                    var x = this.clipRect;
                    if (x && Array.isArray(x) && 4 === x.length)
                      t.uTroikaClipRect.value.fromArray(x);
                    else {
                      var b = 100 * (this.fontSize || 0.1);
                      t.uTroikaClipRect.value.set(i[0] - b, i[1] - b, i[2] + b, i[3] + b);
                    }
                    this.geometry.applyClipRect(t.uTroikaClipRect.value);
                  }
                  (t.uTroikaSDFDebug.value = !!this.debugSDF),
                    (e.polygonOffset = !!this.depthOffset),
                    (e.polygonOffsetFactor = e.polygonOffsetUnits = this.depthOffset || 0);
                  var k = r ? this.outlineColor || 0 : this.color;
                  if (null == k) delete e.color;
                  else {
                    var T = e.hasOwnProperty('color') ? e.color : (e.color = new h.Color());
                    (k === T._input && 'object' != typeof k) || T.set((T._input = k));
                  }
                  var w = this.orientation || te;
                  if (w !== e._orientation) {
                    var F = t.uTroikaOrient.value,
                      C =
                        (w = w.replace(/[^-+xyz]/g, '')) !== te &&
                        w.match(/^([-+])([xyz])([-+])([xyz])$/);
                    if (C) {
                      var _ = (0, f.Z)(C, 5),
                        D = _[1],
                        G = _[2],
                        O = _[3],
                        P = _[4];
                      (Q.set(0, 0, 0)[G] = '-' === D ? 1 : -1),
                        (K.set(0, 0, 0)[P] = '-' === O ? -1 : 1),
                        J.lookAt(re, Q.cross(K), K),
                        F.setFromMatrix4(J);
                    } else F.identity();
                    e._orientation = w;
                  }
                },
              },
              {
                key: '_parsePercent',
                value: function (e) {
                  if ('string' == typeof e) {
                    var r = e.match(/^(-?[\d.]+)%$/),
                      t = r ? parseFloat(r[1]) : NaN;
                    e = (isNaN(t) ? 0 : t / 100) * this.fontSize;
                  }
                  return e;
                },
              },
              {
                key: 'localPositionToTextCoords',
                value: function (e) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : new h.Vector2();
                  r.copy(e);
                  var t = this.curveRadius;
                  return t && (r.x = Math.atan2(e.x, Math.abs(t) - Math.abs(e.z)) * Math.abs(t)), r;
                },
              },
              {
                key: 'worldPositionToTextCoords',
                value: function (e) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : new h.Vector2();
                  return Q.copy(e), this.localPositionToTextCoords(this.worldToLocal(Q), r);
                },
              },
              {
                key: 'raycast',
                value: function (e, r) {
                  var t = this.textRenderInfo,
                    a = this.curveRadius;
                  if (t) {
                    for (
                      var n = t.blockBounds,
                        i = a ? ie() : ne(),
                        o = i.geometry,
                        s = o.attributes,
                        u = s.position,
                        l = s.uv,
                        f = 0;
                      f < l.count;
                      f++
                    ) {
                      var h = n[0] + l.getX(f) * (n[2] - n[0]),
                        d = n[1] + l.getY(f) * (n[3] - n[1]),
                        c = 0;
                      a && ((c = a - Math.cos(h / a) * a), (h = Math.sin(h / a) * a)),
                        u.setXYZ(f, h, d, c);
                    }
                    (o.boundingSphere = this.geometry.boundingSphere),
                      (o.boundingBox = this.geometry.boundingBox),
                      (i.matrixWorld = this.matrixWorld),
                      (i.material.side = this.material.side),
                      (ee.length = 0),
                      i.raycast(e, ee);
                    for (var v = 0; v < ee.length; v++) (ee[v].object = this), r.push(ee[v]);
                  }
                },
              },
              {
                key: 'copy',
                value: function (e) {
                  var r = this,
                    n = this.geometry;
                  return (
                    (0, a.Z)((0, u.Z)(t.prototype), 'copy', this).call(this, e),
                    (this.geometry = n),
                    le.forEach(function (t) {
                      r[t] = e[t];
                    }),
                    this
                  );
                },
              },
              {
                key: 'clone',
                value: function () {
                  return new this.constructor().copy(this);
                },
              },
            ]),
            t
          );
        })(h.Mesh);
      ue.forEach(function (e) {
        var r = '_private_' + e;
        Object.defineProperty(fe.prototype, e, {
          get: function () {
            return this[r];
          },
          set: function (e) {
            e !== this[r] && ((this[r] = e), (this._needsSync = !0));
          },
        });
      });
      new WeakMap();
      new WeakMap();
    },
  },
]);
//# sourceMappingURL=4d99978a-54a1ce709f7c24d87da5.js.map
