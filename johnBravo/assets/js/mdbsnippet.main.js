!(function (t) {
    var n = {};
    function o(r) {
      if (n[r]) return n[r].exports;
      var e = (n[r] = { i: r, l: !1, exports: {} });
      return t[r].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
    }
    (o.m = t),
      (o.c = n),
      (o.d = function (r, e, t) {
        o.o(r, e) || Object.defineProperty(r, e, { enumerable: !0, get: t });
      }),
      (o.r = function (r) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(r, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(r, '__esModule', { value: !0 });
      }),
      (o.t = function (e, r) {
        if ((1 & r && (e = o(e)), 8 & r)) return e;
        if (4 & r && 'object' == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (
          (o.r(t),
          Object.defineProperty(t, 'default', { enumerable: !0, value: e }),
          2 & r && 'string' != typeof e)
        )
          for (var n in e)
            o.d(
              t,
              n,
              function (r) {
                return e[r];
              }.bind(null, n)
            );
        return t;
      }),
      (o.n = function (r) {
        var e =
          r && r.__esModule
            ? function () {
                return r.default;
              }
            : function () {
                return r;
              };
        return o.d(e, 'a', e), e;
      }),
      (o.o = function (r, e) {
        return Object.prototype.hasOwnProperty.call(r, e);
      }),
      (o.p = ''),
      o((o.s = 42));
  })([
    function (t, r, e) {
      (function (r) {
        function e(r) {
          return r && r.Math == Math && r;
        }
        t.exports =
          e('object' == typeof globalThis && globalThis) ||
          e('object' == typeof window && window) ||
          e('object' == typeof self && self) ||
          e('object' == typeof r && r) ||
          Function('return this')();
      }.call(this, e(44)));
    },
    function (r, e) {
      var t = {}.hasOwnProperty;
      r.exports = function (r, e) {
        return t.call(r, e);
      };
    },
    function (r, e, t) {
      var n = t(0),
        o = t(32),
        a = t(1),
        i = t(33),
        c = t(38),
        u = t(59),
        s = o('wks'),
        l = n.Symbol,
        p = u ? l : (l && l.withoutSetter) || i;
      r.exports = function (r) {
        return a(s, r) || (c && a(l, r) ? (s[r] = l[r]) : (s[r] = p('Symbol.' + r))), s[r];
      };
    },
    function (r, e) {
      r.exports = function (r) {
        try {
          return !!r();
        } catch (r) {
          return !0;
        }
      };
    },
    function (r, e, t) {
      var n = t(3);
      r.exports = !n(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    function (r, e, t) {
      var n = t(4),
        o = t(7),
        a = t(9);
      r.exports = n
        ? function (r, e, t) {
            return o.f(r, e, a(1, t));
          }
        : function (r, e, t) {
            return (r[e] = t), r;
          };
    },
    function (r, e) {
      r.exports = function (r) {
        return 'object' == typeof r ? null !== r : 'function' == typeof r;
      };
    },
    function (r, e, t) {
      var n = t(4),
        o = t(26),
        a = t(8),
        i = t(15),
        c = Object.defineProperty;
      e.f = n
        ? c
        : function (r, e, t) {
            if ((a(r), (e = i(e, !0)), a(t), o))
              try {
                return c(r, e, t);
              } catch (r) {}
            if ('get' in t || 'set' in t) throw TypeError('Accessors not supported');
            return 'value' in t && (r[e] = t.value), r;
          };
    },
    function (r, e, t) {
      var n = t(6);
      r.exports = function (r) {
        if (!n(r)) throw TypeError(String(r) + ' is not an object');
        return r;
      };
    },
    function (r, e) {
      r.exports = function (r, e) {
        return { enumerable: !(1 & r), configurable: !(2 & r), writable: !(4 & r), value: e };
      };
    },
    function (r, e) {
      r.exports = {};
    },
    function (r, e, t) {
      var l = t(0),
        p = t(24).f,
        f = t(5),
        d = t(28),
        g = t(16),
        h = t(47),
        m = t(54);
      r.exports = function (r, e) {
        var t,
          n,
          o,
          a,
          i = r.target,
          c = r.global,
          u = r.stat,
          s = c ? l : u ? l[i] || g(i, {}) : (l[i] || {}).prototype;
        if (s)
          for (t in e) {
            if (
              ((o = e[t]),
              (n = r.noTargetGet ? (a = p(s, t)) && a.value : s[t]),
              !m(c ? t : i + (u ? '.' : '#') + t, r.forced) && void 0 !== n)
            ) {
              if (typeof o == typeof n) continue;
              h(o, n);
            }
            (r.sham || (n && n.sham)) && f(o, 'sham', !0), d(s, t, o, r);
          }
      };
    },
    function (r, e, t) {
      var n = t(25),
        o = t(14);
      r.exports = function (r) {
        return n(o(r));
      };
    },
    function (r, e) {
      var t = {}.toString;
      r.exports = function (r) {
        return t.call(r).slice(8, -1);
      };
    },
    function (r, e) {
      r.exports = function (r) {
        if (null == r) throw TypeError("Can't call method on " + r);
        return r;
      };
    },
    function (r, e, t) {
      var o = t(6);
      r.exports = function (r, e) {
        if (!o(r)) return r;
        var t, n;
        if (e && 'function' == typeof (t = r.toString) && !o((n = t.call(r)))) return n;
        if ('function' == typeof (t = r.valueOf) && !o((n = t.call(r)))) return n;
        if (!e && 'function' == typeof (t = r.toString) && !o((n = t.call(r)))) return n;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (r, e, t) {
      var n = t(0),
        o = t(5);
      r.exports = function (e, t) {
        try {
          o(n, e, t);
        } catch (r) {
          n[e] = t;
        }
        return t;
      };
    },
    function (r, e, t) {
      var n = t(32),
        o = t(33),
        a = n('keys');
      r.exports = function (r) {
        return a[r] || (a[r] = o(r));
      };
    },
    function (r, e) {
      r.exports = !1;
    },
    function (r, e) {
      r.exports = {};
    },
    function (r, e, t) {
      var n = t(21),
        o = Math.min;
      r.exports = function (r) {
        return 0 < r ? o(n(r), 9007199254740991) : 0;
      };
    },
    function (r, e) {
      var t = Math.ceil,
        n = Math.floor;
      r.exports = function (r) {
        return isNaN((r = +r)) ? 0 : (0 < r ? n : t)(r);
      };
    },
    function (r, e) {
      r.exports = [
        'constructor',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf',
      ];
    },
    function (r, e, t) {
      var n = t(14);
      r.exports = function (r) {
        return Object(n(r));
      };
    },
    function (r, e, t) {
      var n = t(4),
        o = t(45),
        a = t(9),
        i = t(12),
        c = t(15),
        u = t(1),
        s = t(26),
        l = Object.getOwnPropertyDescriptor;
      e.f = n
        ? l
        : function (r, e) {
            if (((r = i(r)), (e = c(e, !0)), s))
              try {
                return l(r, e);
              } catch (r) {}
            if (u(r, e)) return a(!o.f.call(r, e), r[e]);
          };
    },
    function (r, e, t) {
      var n = t(3),
        o = t(13),
        a = ''.split;
      r.exports = n(function () {
        return !Object('z').propertyIsEnumerable(0);
      })
        ? function (r) {
            return 'String' == o(r) ? a.call(r, '') : Object(r);
          }
        : Object;
    },
    function (r, e, t) {
      var n = t(4),
        o = t(3),
        a = t(27);
      r.exports =
        !n &&
        !o(function () {
          return (
            7 !=
            Object.defineProperty(a('div'), 'a', {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (r, e, t) {
      var n = t(0),
        o = t(6),
        a = n.document,
        i = o(a) && o(a.createElement);
      r.exports = function (r) {
        return i ? a.createElement(r) : {};
      };
    },
    function (r, e, t) {
      var c = t(0),
        u = t(5),
        s = t(1),
        l = t(16),
        n = t(29),
        o = t(31),
        a = o.get,
        p = o.enforce,
        f = String(String).split('String');
      (r.exports = function (r, e, t, n) {
        var o = !!n && !!n.unsafe,
          a = !!n && !!n.enumerable,
          i = !!n && !!n.noTargetGet;
        'function' == typeof t &&
          ('string' != typeof e || s(t, 'name') || u(t, 'name', e),
          (p(t).source = f.join('string' == typeof e ? e : ''))),
          r !== c
            ? (o ? !i && r[e] && (a = !0) : delete r[e], a ? (r[e] = t) : u(r, e, t))
            : a
            ? (r[e] = t)
            : l(e, t);
      })(Function.prototype, 'toString', function () {
        return ('function' == typeof this && a(this).source) || n(this);
      });
    },
    function (r, e, t) {
      var n = t(30),
        o = Function.toString;
      'function' != typeof n.inspectSource &&
        (n.inspectSource = function (r) {
          return o.call(r);
        }),
        (r.exports = n.inspectSource);
    },
    function (r, e, t) {
      var n = t(0),
        o = t(16),
        a = '__core-js_shared__',
        i = n[a] || o(a, {});
      r.exports = i;
    },
    function (r, e, t) {
      var n,
        o,
        a,
        i,
        c,
        u,
        s,
        l,
        p = t(46),
        f = t(0),
        d = t(6),
        g = t(5),
        h = t(1),
        m = t(17),
        b = t(19),
        v = f.WeakMap;
      (s = p
        ? ((n = new v()),
          (o = n.get),
          (a = n.has),
          (i = n.set),
          (c = function (r, e) {
            return i.call(n, r, e), e;
          }),
          (u = function (r) {
            return o.call(n, r) || {};
          }),
          function (r) {
            return a.call(n, r);
          })
        : ((b[(l = m('state'))] = !0),
          (c = function (r, e) {
            return g(r, l, e), e;
          }),
          (u = function (r) {
            return h(r, l) ? r[l] : {};
          }),
          function (r) {
            return h(r, l);
          })),
        (r.exports = {
          set: c,
          get: u,
          has: s,
          enforce: function (r) {
            return s(r) ? u(r) : c(r, {});
          },
          getterFor: function (t) {
            return function (r) {
              var e;
              if (!d(r) || (e = u(r)).type !== t)
                throw TypeError('Incompatible receiver, ' + t + ' required');
              return e;
            };
          },
        });
    },
    function (r, e, t) {
      var n = t(18),
        o = t(30);
      (r.exports = function (r, e) {
        return o[r] || (o[r] = void 0 !== e ? e : {});
      })('versions', []).push({
        version: '3.6.5',
        mode: n ? 'pure' : 'global',
        copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
      });
    },
    function (r, e) {
      var t = 0,
        n = Math.random();
      r.exports = function (r) {
        return 'Symbol(' + String(void 0 === r ? '' : r) + ')_' + (++t + n).toString(36);
      };
    },
    function (r, e, t) {
      function n(r) {
        return 'function' == typeof r ? r : void 0;
      }
      var o = t(49),
        a = t(0);
      r.exports = function (r, e) {
        return arguments.length < 2 ? n(o[r]) || n(a[r]) : (o[r] && o[r][e]) || (a[r] && a[r][e]);
      };
    },
    function (r, e, t) {
      var i = t(1),
        c = t(12),
        u = t(51).indexOf,
        s = t(19);
      r.exports = function (r, e) {
        var t,
          n = c(r),
          o = 0,
          a = [];
        for (t in n) !i(s, t) && i(n, t) && a.push(t);
        for (; e.length > o; ) i(n, (t = e[o++])) && (~u(a, t) || a.push(t));
        return a;
      };
    },
    function (r, e, t) {
      'use strict';
      var n = t(55).forEach,
        o = t(60),
        a = t(61),
        i = o('forEach'),
        c = a('forEach');
      r.exports =
        i && c
          ? [].forEach
          : function (r, e) {
              return n(this, r, 1 < arguments.length ? e : void 0);
            };
    },
    function (r, e, t) {
      var a = t(56);
      r.exports = function (n, o, r) {
        if ((a(n), void 0 === o)) return n;
        switch (r) {
          case 0:
            return function () {
              return n.call(o);
            };
          case 1:
            return function (r) {
              return n.call(o, r);
            };
          case 2:
            return function (r, e) {
              return n.call(o, r, e);
            };
          case 3:
            return function (r, e, t) {
              return n.call(o, r, e, t);
            };
        }
        return function () {
          return n.apply(o, arguments);
        };
      };
    },
    function (r, e, t) {
      var n = t(3);
      r.exports =
        !!Object.getOwnPropertySymbols &&
        !n(function () {
          return !String(Symbol());
        });
    },
    function (r, e, t) {
      'use strict';
      var n,
        o,
        a,
        i = t(40),
        c = t(5),
        u = t(1),
        s = t(2),
        l = t(18),
        p = s('iterator'),
        f = !1;
      [].keys &&
        ('next' in (a = [].keys()) ? (o = i(i(a))) !== Object.prototype && (n = o) : (f = !0)),
        null == n && (n = {}),
        l ||
          u(n, p) ||
          c(n, p, function () {
            return this;
          }),
        (r.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: f });
    },
    function (r, e, t) {
      var n = t(1),
        o = t(23),
        a = t(17),
        i = t(76),
        c = a('IE_PROTO'),
        u = Object.prototype;
      r.exports = i
        ? Object.getPrototypeOf
        : function (r) {
            return (
              (r = o(r)),
              n(r, c)
                ? r[c]
                : 'function' == typeof r.constructor && r instanceof r.constructor
                ? r.constructor.prototype
                : r instanceof Object
                ? u
                : null
            );
          };
    },
    function (r, e, t) {
      var n = t(7).f,
        o = t(1),
        a = t(2)('toStringTag');
      r.exports = function (r, e, t) {
        r && !o((r = t ? r : r.prototype), a) && n(r, a, { configurable: !0, value: e });
      };
    },
    function (r, e, t) {
      'use strict';
      t.r(e);
      t(43), t(62), t(71), t(72), t(83);
      function o(r, e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(r, n.key, n);
        }
      }
      var a = new (t(85).AllHtmlEntities)(),
        n = (function () {
          function e(r) {
            !(function (r, e) {
              if (!(r instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.el = r),
              (this.data = []);
          }
          var r, t, n;
          return (
            (r = e),
            (t = [
              {
                key: 'init',
                value: function () {
                  this._getData(), this._encode(), this._replaceContent();
                },
              },
              {
                key: '_getData',
                value: function () {
                  var e = this;
                  Array.from(this.el.getElementsByTagName('code')).forEach(function (r) {
                    e.data.push({ lang: r.dataset.lang, name: r.dataset.name, content: r.innerHTML });
                  });
                },
              },
              {
                key: '_encode',
                value: function () {
                  this.data.forEach(function (r, e, t) {
                    t[e].content = a.encode(r.content);
                  });
                },
              },
              {
                key: '_createContent',
                value: function () {
                  var r = document.createElement('div'),
                    e = document.createElement('div'),
                    u = document.createElement('ul'),
                    s = document.createElement('div');
                  r.setAttribute('class', 'docs-pills border'),
                    e.setAttribute('class', 'd-flex justify-content-between py-2'),
                    (e.style.paddingLeft = '.6rem'),
                    u.setAttribute('class', 'nav nav-pills'),
                    s.setAttribute('class', 'tab-content'),
                    this.data.forEach(function (r, e) {
                      var t = document.createElement('li'),
                        n = document.createElement('a'),
                        o = document.createElement('div'),
                        a = document.createElement('code'),
                        i = document.createElement('pre'),
                        c = Math.floor(
                          (Math.random() + Math.floor(9 * Math.random()) + 1) * Math.pow(10, 8)
                        );
                      t.setAttribute('class', 'nav-item'),
                        n.setAttribute('role', 'tab'),
                        n.setAttribute('href', '#mdb'.concat(c)),
                        n.setAttribute('class', 'nav-link'),
                        (n.dataset.mdbToggle = 'tab'),
                        (n.innerHTML = r.name),
                        t.appendChild(n),
                        u.appendChild(t),
                        a.setAttribute('class', 'line-numbers language-'.concat(r.lang)),
                        (a.innerHTML = r.content),
                        i.appendChild(a),
                        i.setAttribute('class', 'mb-0'),
                        o.setAttribute('role', 'tabpanel'),
                        o.setAttribute('id', 'mdb'.concat(c)),
                        0 === e
                          ? (n.setAttribute('class', 'nav-link active show'),
                            o.setAttribute('class', 'tab-pane fade active show'))
                          : (n.setAttribute('class', 'nav-link'),
                            o.setAttribute('class', 'tab-pane')),
                        o.appendChild(i),
                        s.appendChild(o);
                    }),
                    e.appendChild(u),
                    r.appendChild(e),
                    r.appendChild(s),
                    this.el.appendChild(r);
                },
              },
              {
                key: '_replaceContent',
                value: function () {
                  this._removeContent(), this._createContent();
                },
              },
              {
                key: '_removeContent',
                value: function () {
                  this.el.innerHTML = '';
                },
              },
            ]) && o(r.prototype, t),
            n && o(r, n),
            e
          );
        })();
      Array.from(document.getElementsByTagName('mdbsnippet')).forEach(function (r) {
        new n(r).init();
      });
    },
    function (r, e, t) {
      'use strict';
      var n = t(11),
        o = t(36);
      n({ target: 'Array', proto: !0, forced: [].forEach != o }, { forEach: o });
    },
    function (r, e) {
      var t = (function () {
        return this;
      })();
      try {
        t = t || new Function('return this')();
      } catch (r) {
        'object' == typeof window && (t = window);
      }
      r.exports = t;
    },
    function (r, e, t) {
      'use strict';
      var n = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        a = o && !n.call({ 1: 2 }, 1);
      e.f = a
        ? function (r) {
            var e = o(this, r);
            return !!e && e.enumerable;
          }
        : n;
    },
    function (r, e, t) {
      var n = t(0),
        o = t(29),
        a = n.WeakMap;
      r.exports = 'function' == typeof a && /native code/.test(o(a));
    },
    function (r, e, t) {
      var c = t(1),
        u = t(48),
        s = t(24),
        l = t(7);
      r.exports = function (r, e) {
        for (var t = u(e), n = l.f, o = s.f, a = 0; a < t.length; a++) {
          var i = t[a];
          c(r, i) || n(r, i, o(e, i));
        }
      };
    },
    function (r, e, t) {
      var n = t(34),
        o = t(50),
        a = t(53),
        i = t(8);
      r.exports =
        n('Reflect', 'ownKeys') ||
        function (r) {
          var e = o.f(i(r)),
            t = a.f;
          return t ? e.concat(t(r)) : e;
        };
    },
    function (r, e, t) {
      var n = t(0);
      r.exports = n;
    },
    function (r, e, t) {
      var n = t(35),
        o = t(22).concat('length', 'prototype');
      e.f =
        Object.getOwnPropertyNames ||
        function (r) {
          return n(r, o);
        };
    },
    function (r, e, t) {
      function n(c) {
        return function (r, e, t) {
          var n,
            o = u(r),
            a = s(o.length),
            i = l(t, a);
          if (c && e != e) {
            for (; i < a; ) if ((n = o[i++]) != n) return !0;
          } else for (; i < a; i++) if ((c || i in o) && o[i] === e) return c || i || 0;
          return !c && -1;
        };
      }
      var u = t(12),
        s = t(20),
        l = t(52);
      r.exports = { includes: n(!0), indexOf: n(!1) };
    },
    function (r, e, t) {
      var n = t(21),
        o = Math.max,
        a = Math.min;
      r.exports = function (r, e) {
        var t = n(r);
        return t < 0 ? o(t + e, 0) : a(t, e);
      };
    },
    function (r, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    function (r, e, t) {
      function n(r, e) {
        var t = c[i(r)];
        return t == s || (t != u && ('function' == typeof e ? o(e) : !!e));
      }
      var o = t(3),
        a = /#|\.prototype\./,
        i = (n.normalize = function (r) {
          return String(r).replace(a, '.').toLowerCase();
        }),
        c = (n.data = {}),
        u = (n.NATIVE = 'N'),
        s = (n.POLYFILL = 'P');
      r.exports = n;
    },
    function (r, e, t) {
      function n(d) {
        var g = 1 == d,
          h = 2 == d,
          m = 3 == d,
          b = 4 == d,
          v = 6 == d,
          y = 5 == d || v;
        return function (r, e, t, n) {
          for (
            var o,
              a,
              i = x(r),
              c = q(i),
              u = w(e, t, 3),
              s = A(c.length),
              l = 0,
              p = n || S,
              f = g ? p(r, s) : h ? p(r, 0) : void 0;
            l < s;
            l++
          )
            if ((y || l in c) && ((a = u((o = c[l]), l, i)), d))
              if (g) f[l] = a;
              else if (a)
                switch (d) {
                  case 3:
                    return !0;
                  case 5:
                    return o;
                  case 6:
                    return l;
                  case 2:
                    E.call(f, o);
                }
              else if (b) return !1;
          return v ? -1 : m || b ? b : f;
        };
      }
      var w = t(37),
        q = t(25),
        x = t(23),
        A = t(20),
        S = t(57),
        E = [].push;
      r.exports = {
        forEach: n(0),
        map: n(1),
        filter: n(2),
        some: n(3),
        every: n(4),
        find: n(5),
        findIndex: n(6),
      };
    },
    function (r, e) {
      r.exports = function (r) {
        if ('function' != typeof r) throw TypeError(String(r) + ' is not a function');
        return r;
      };
    },
    function (r, e, t) {
      var n = t(6),
        o = t(58),
        a = t(2)('species');
      r.exports = function (r, e) {
        var t;
        return (
          o(r) &&
            (('function' == typeof (t = r.constructor) && (t === Array || o(t.prototype))) ||
              (n(t) && null === (t = t[a]))) &&
            (t = void 0),
          new (void 0 === t ? Array : t)(0 === e ? 0 : e)
        );
      };
    },
    function (r, e, t) {
      var n = t(13);
      r.exports =
        Array.isArray ||
        function (r) {
          return 'Array' == n(r);
        };
    },
    function (r, e, t) {
      var n = t(38);
      r.exports = n && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
    },
    function (r, e, t) {
      'use strict';
      var n = t(3);
      r.exports = function (r, e) {
        var t = [][r];
        return (
          !!t &&
          n(function () {
            t.call(
              null,
              e ||
                function () {
                  throw 1;
                },
              1
            );
          })
        );
      };
    },
    function (r, e, t) {
      function i(r) {
        throw r;
      }
      var c = t(4),
        u = t(3),
        s = t(1),
        l = Object.defineProperty,
        p = {};
      r.exports = function (r, e) {
        if (s(p, r)) return p[r];
        var t = [][r],
          n = !!s((e = e || {}), 'ACCESSORS') && e.ACCESSORS,
          o = s(e, 0) ? e[0] : i,
          a = s(e, 1) ? e[1] : void 0;
        return (p[r] =
          !!t &&
          !u(function () {
            if (n && !c) return !0;
            var r = { length: -1 };
            n ? l(r, 1, { enumerable: !0, get: i }) : (r[1] = 1), t.call(r, o, a);
          }));
      };
    },
    function (r, e, t) {
      var n = t(11),
        o = t(63);
      n(
        {
          target: 'Array',
          stat: !0,
          forced: !t(70)(function (r) {
            Array.from(r);
          }),
        },
        { from: o }
      );
    },
    function (r, e, t) {
      'use strict';
      var m = t(37),
        b = t(23),
        v = t(64),
        y = t(65),
        w = t(20),
        q = t(66),
        x = t(67);
      r.exports = function (r, e, t) {
        var n,
          o,
          a,
          i,
          c,
          u,
          s = b(r),
          l = 'function' == typeof this ? this : Array,
          p = arguments.length,
          f = 1 < p ? e : void 0,
          d = void 0 !== f,
          g = x(s),
          h = 0;
        if ((d && (f = m(f, 2 < p ? t : void 0, 2)), null == g || (l == Array && y(g))))
          for (o = new l((n = w(s.length))); h < n; h++) (u = d ? f(s[h], h) : s[h]), q(o, h, u);
        else
          for (c = (i = g.call(s)).next, o = new l(); !(a = c.call(i)).done; h++)
            (u = d ? v(i, f, [a.value, h], !0) : a.value), q(o, h, u);
        return (o.length = h), o;
      };
    },
    function (r, e, t) {
      var a = t(8);
      r.exports = function (e, r, t, n) {
        try {
          return n ? r(a(t)[0], t[1]) : r(t);
        } catch (r) {
          var o = e.return;
          throw (void 0 !== o && a(o.call(e)), r);
        }
      };
    },
    function (r, e, t) {
      var n = t(2),
        o = t(10),
        a = n('iterator'),
        i = Array.prototype;
      r.exports = function (r) {
        return void 0 !== r && (o.Array === r || i[a] === r);
      };
    },
    function (r, e, t) {
      'use strict';
      var o = t(15),
        a = t(7),
        i = t(9);
      r.exports = function (r, e, t) {
        var n = o(e);
        n in r ? a.f(r, n, i(0, t)) : (r[n] = t);
      };
    },
    function (r, e, t) {
      var n = t(68),
        o = t(10),
        a = t(2)('iterator');
      r.exports = function (r) {
        if (null != r) return r[a] || r['@@iterator'] || o[n(r)];
      };
    },
    function (r, e, t) {
      var n = t(69),
        o = t(13),
        a = t(2)('toStringTag'),
        i =
          'Arguments' ==
          o(
            (function () {
              return arguments;
            })()
          );
      r.exports = n
        ? o
        : function (r) {
            var e, t, n;
            return void 0 === r
              ? 'Undefined'
              : null === r
              ? 'Null'
              : 'string' ==
                typeof (t = (function (r, e) {
                  try {
                    return r[e];
                  } catch (r) {}
                })((e = Object(r)), a))
              ? t
              : i
              ? o(e)
              : 'Object' == (n = o(e)) && 'function' == typeof e.callee
              ? 'Arguments'
              : n;
          };
    },
    function (r, e, t) {
      var n = {};
      (n[t(2)('toStringTag')] = 'z'), (r.exports = '[object z]' === String(n));
    },
    function (r, e, t) {
      var o = t(2)('iterator'),
        a = !1;
      try {
        var n = 0,
          i = {
            next: function () {
              return { done: !!n++ };
            },
            return: function () {
              a = !0;
            },
          };
        (i[o] = function () {
          return this;
        }),
          Array.from(i, function () {
            throw 2;
          });
      } catch (r) {}
      r.exports = function (r, e) {
        if (!e && !a) return !1;
        var t = !1;
        try {
          var n = {};
          (n[o] = function () {
            return {
              next: function () {
                return { done: (t = !0) };
              },
            };
          }),
            r(n);
        } catch (r) {}
        return t;
      };
    },
    function (r, e, t) {
      var n = t(4),
        o = t(7).f,
        a = Function.prototype,
        i = a.toString,
        c = /^\s*function ([^ (]*)/;
      !n ||
        'name' in a ||
        o(a, 'name', {
          configurable: !0,
          get: function () {
            try {
              return i.call(this).match(c)[1];
            } catch (r) {
              return '';
            }
          },
        });
    },
    function (r, e, t) {
      'use strict';
      var o = t(73).charAt,
        n = t(31),
        a = t(74),
        i = 'String Iterator',
        c = n.set,
        u = n.getterFor(i);
      a(
        String,
        'String',
        function (r) {
          c(this, { type: i, string: String(r), index: 0 });
        },
        function () {
          var r,
            e = u(this),
            t = e.string,
            n = e.index;
          return n >= t.length
            ? { value: void 0, done: !0 }
            : ((r = o(t, n)), (e.index += r.length), { value: r, done: !1 });
        }
      );
    },
    function (r, e, t) {
      function n(c) {
        return function (r, e) {
          var t,
            n,
            o = String(s(r)),
            a = u(e),
            i = o.length;
          return a < 0 || i <= a
            ? c
              ? ''
              : void 0
            : (t = o.charCodeAt(a)) < 55296 ||
              56319 < t ||
              a + 1 === i ||
              (n = o.charCodeAt(a + 1)) < 56320 ||
              57343 < n
            ? c
              ? o.charAt(a)
              : t
            : c
            ? o.slice(a, a + 2)
            : n - 56320 + ((t - 55296) << 10) + 65536;
        };
      }
      var u = t(21),
        s = t(14);
      r.exports = { codeAt: n(!1), charAt: n(!0) };
    },
    function (r, e, t) {
      'use strict';
      function b() {
        return this;
      }
      var v = t(11),
        y = t(75),
        w = t(40),
        q = t(81),
        x = t(41),
        A = t(5),
        S = t(28),
        n = t(2),
        E = t(18),
        L = t(10),
        o = t(39),
        T = o.IteratorPrototype,
        k = o.BUGGY_SAFARI_ITERATORS,
        C = n('iterator'),
        D = 'values',
        N = 'entries';
      r.exports = function (r, e, t, n, o, a, i) {
        y(t, e, n);
        function c(r) {
          if (r === o && h) return h;
          if (!k && r in d) return d[r];
          switch (r) {
            case 'keys':
            case D:
            case N:
              return function () {
                return new t(this, r);
              };
          }
          return function () {
            return new t(this);
          };
        }
        var u,
          s,
          l,
          p = e + ' Iterator',
          f = !1,
          d = r.prototype,
          g = d[C] || d['@@iterator'] || (o && d[o]),
          h = (!k && g) || c(o),
          m = ('Array' == e && d.entries) || g;
        if (
          (m &&
            ((u = w(m.call(new r()))),
            T !== Object.prototype &&
              u.next &&
              (E || w(u) === T || (q ? q(u, T) : 'function' != typeof u[C] && A(u, C, b)),
              x(u, p, !0, !0),
              E && (L[p] = b))),
          o == D &&
            g &&
            g.name !== D &&
            ((f = !0),
            (h = function () {
              return g.call(this);
            })),
          (E && !i) || d[C] === h || A(d, C, h),
          (L[e] = h),
          o)
        )
          if (((s = { values: c(D), keys: a ? h : c('keys'), entries: c(N) }), i))
            for (l in s) (!k && !f && l in d) || S(d, l, s[l]);
          else v({ target: e, proto: !0, forced: k || f }, s);
        return s;
      };
    },
    function (r, e, t) {
      'use strict';
      function o() {
        return this;
      }
      var a = t(39).IteratorPrototype,
        i = t(77),
        c = t(9),
        u = t(41),
        s = t(10);
      r.exports = function (r, e, t) {
        var n = e + ' Iterator';
        return (r.prototype = i(a, { next: c(1, t) })), u(r, n, !1, !0), (s[n] = o), r;
      };
    },
    function (r, e, t) {
      var n = t(3);
      r.exports = !n(function () {
        function r() {}
        return (r.prototype.constructor = null), Object.getPrototypeOf(new r()) !== r.prototype;
      });
    },
    function (r, e, t) {
      function n() {}
      function o(r) {
        return '<script>' + r + '</' + g + '>';
      }
      var a,
        i = t(8),
        c = t(78),
        u = t(22),
        s = t(19),
        l = t(80),
        p = t(27),
        f = t(17),
        d = 'prototype',
        g = 'script',
        h = f('IE_PROTO'),
        m = function () {
          try {
            a = document.domain && new ActiveXObject('htmlfile');
          } catch (r) {}
          var r, e;
          m = a
            ? (function (r) {
                r.write(o('')), r.close();
                var e = r.parentWindow.Object;
                return (r = null), e;
              })(a)
            : (((e = p('iframe')).style.display = 'none'),
              l.appendChild(e),
              (e.src = String('javascript:')),
              (r = e.contentWindow.document).open(),
              r.write(o('document.F=Object')),
              r.close(),
              r.F);
          for (var t = u.length; t--; ) delete m[d][u[t]];
          return m();
        };
      (s[h] = !0),
        (r.exports =
          Object.create ||
          function (r, e) {
            var t;
            return (
              null !== r ? ((n[d] = i(r)), (t = new n()), (n[d] = null), (t[h] = r)) : (t = m()),
              void 0 === e ? t : c(t, e)
            );
          });
    },
    function (r, e, t) {
      var n = t(4),
        i = t(7),
        c = t(8),
        u = t(79);
      r.exports = n
        ? Object.defineProperties
        : function (r, e) {
            c(r);
            for (var t, n = u(e), o = n.length, a = 0; a < o; ) i.f(r, (t = n[a++]), e[t]);
            return r;
          };
    },
    function (r, e, t) {
      var n = t(35),
        o = t(22);
      r.exports =
        Object.keys ||
        function (r) {
          return n(r, o);
        };
    },
    function (r, e, t) {
      var n = t(34);
      r.exports = n('document', 'documentElement');
    },
    function (r, e, t) {
      var o = t(8),
        a = t(82);
      r.exports =
        Object.setPrototypeOf ||
        ('__proto__' in {}
          ? (function () {
              var t,
                n = !1,
                r = {};
              try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(r, []),
                  (n = r instanceof Array);
              } catch (r) {}
              return function (r, e) {
                return o(r), a(e), n ? t.call(r, e) : (r.__proto__ = e), r;
              };
            })()
          : void 0);
    },
    function (r, e, t) {
      var n = t(6);
      r.exports = function (r) {
        if (!n(r) && null !== r) throw TypeError("Can't set " + String(r) + ' as a prototype');
        return r;
      };
    },
    function (r, e, t) {
      var n = t(0),
        o = t(84),
        a = t(36),
        i = t(5);
      for (var c in o) {
        var u = n[c],
          s = u && u.prototype;
        if (s && s.forEach !== a)
          try {
            i(s, 'forEach', a);
          } catch (r) {
            s.forEach = a;
          }
      }
    },
    function (r, e) {
      r.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    function (r, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = t(86);
      e.XmlEntities = n.XmlEntities;
      var o = t(87);
      e.Html4Entities = o.Html4Entities;
      var a = t(88);
      (e.Html5Entities = a.Html5Entities), (e.AllHtmlEntities = a.Html5Entities);
    },
    function (r, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = {
          '&lt': '<',
          '&gt': '>',
          '&quot': '"',
          '&apos': "'",
          '&amp': '&',
          '&lt;': '<',
          '&gt;': '>',
          '&quot;': '"',
          '&apos;': "'",
          '&amp;': '&',
        },
        i = { 60: 'lt', 62: 'gt', 34: 'quot', 39: 'apos', 38: 'amp' },
        o = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;', '&': '&amp;' },
        a =
          ((c.prototype.encode = function (r) {
            return r && r.length
              ? r.replace(/[<>"'&]/g, function (r) {
                  return o[r];
                })
              : '';
          }),
          (c.encode = function (r) {
            return new c().encode(r);
          }),
          (c.prototype.decode = function (r) {
            return r && r.length
              ? r.replace(/&#?[0-9a-zA-Z]+;?/g, function (r) {
                  if ('#' !== r.charAt(1)) return n[r] || r;
                  var e =
                    'x' === r.charAt(2).toLowerCase()
                      ? parseInt(r.substr(3), 16)
                      : parseInt(r.substr(2));
                  return isNaN(e) || e < -32768 || 65535 < e ? '' : String.fromCharCode(e);
                })
              : '';
          }),
          (c.decode = function (r) {
            return new c().decode(r);
          }),
          (c.prototype.encodeNonUTF = function (r) {
            if (!r || !r.length) return '';
            for (var e = r.length, t = '', n = 0; n < e; ) {
              var o = r.charCodeAt(n),
                a = i[o];
              (t += a ? '&' + a + ';' : o < 32 || 126 < o ? '&#' + o + ';' : r.charAt(n)), n++;
            }
            return t;
          }),
          (c.encodeNonUTF = function (r) {
            return new c().encodeNonUTF(r);
          }),
          (c.prototype.encodeNonASCII = function (r) {
            if (!r || !r.length) return '';
            for (var e = r.length, t = '', n = 0; n < e; ) {
              var o = r.charCodeAt(n);
              o <= 255 ? (t += r[n++]) : ((t += '&#' + o + ';'), n++);
            }
            return t;
          }),
          (c.encodeNonASCII = function (r) {
            return new c().encodeNonASCII(r);
          }),
          c);
      function c() {}
      e.XmlEntities = a;
    },
    function (r, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = [
          'apos',
          'nbsp',
          'iexcl',
          'cent',
          'pound',
          'curren',
          'yen',
          'brvbar',
          'sect',
          'uml',
          'copy',
          'ordf',
          'laquo',
          'not',
          'shy',
          'reg',
          'macr',
          'deg',
          'plusmn',
          'sup2',
          'sup3',
          'acute',
          'micro',
          'para',
          'middot',
          'cedil',
          'sup1',
          'ordm',
          'raquo',
          'frac14',
          'frac12',
          'frac34',
          'iquest',
          'Agrave',
          'Aacute',
          'Acirc',
          'Atilde',
          'Auml',
          'Aring',
          'Aelig',
          'Ccedil',
          'Egrave',
          'Eacute',
          'Ecirc',
          'Euml',
          'Igrave',
          'Iacute',
          'Icirc',
          'Iuml',
          'ETH',
          'Ntilde',
          'Ograve',
          'Oacute',
          'Ocirc',
          'Otilde',
          'Ouml',
          'times',
          'Oslash',
          'Ugrave',
          'Uacute',
          'Ucirc',
          'Uuml',
          'Yacute',
          'THORN',
          'szlig',
          'agrave',
          'aacute',
          'acirc',
          'atilde',
          'auml',
          'aring',
          'aelig',
          'ccedil',
          'egrave',
          'eacute',
          'ecirc',
          'euml',
          'igrave',
          'iacute',
          'icirc',
          'iuml',
          'eth',
          'ntilde',
          'ograve',
          'oacute',
          'ocirc',
          'otilde',
          'ouml',
          'divide',
          'oslash',
          'ugrave',
          'uacute',
          'ucirc',
          'uuml',
          'yacute',
          'thorn',
          'yuml',
          'quot',
          'amp',
          'lt',
          'gt',
          'OElig',
          'oelig',
          'Scaron',
          'scaron',
          'Yuml',
          'circ',
          'tilde',
          'ensp',
          'emsp',
          'thinsp',
          'zwnj',
          'zwj',
          'lrm',
          'rlm',
          'ndash',
          'mdash',
          'lsquo',
          'rsquo',
          'sbquo',
          'ldquo',
          'rdquo',
          'bdquo',
          'dagger',
          'Dagger',
          'permil',
          'lsaquo',
          'rsaquo',
          'euro',
          'fnof',
          'Alpha',
          'Beta',
          'Gamma',
          'Delta',
          'Epsilon',
          'Zeta',
          'Eta',
          'Theta',
          'Iota',
          'Kappa',
          'Lambda',
          'Mu',
          'Nu',
          'Xi',
          'Omicron',
          'Pi',
          'Rho',
          'Sigma',
          'Tau',
          'Upsilon',
          'Phi',
          'Chi',
          'Psi',
          'Omega',
          'alpha',
          'beta',
          'gamma',
          'delta',
          'epsilon',
          'zeta',
          'eta',
          'theta',
          'iota',
          'kappa',
          'lambda',
          'mu',
          'nu',
          'xi',
          'omicron',
          'pi',
          'rho',
          'sigmaf',
          'sigma',
          'tau',
          'upsilon',
          'phi',
          'chi',
          'psi',
          'omega',
          'thetasym',
          'upsih',
          'piv',
          'bull',
          'hellip',
          'prime',
          'Prime',
          'oline',
          'frasl',
          'weierp',
          'image',
          'real',
          'trade',
          'alefsym',
          'larr',
          'uarr',
          'rarr',
          'darr',
          'harr',
          'crarr',
          'lArr',
          'uArr',
          'rArr',
          'dArr',
          'hArr',
          'forall',
          'part',
          'exist',
          'empty',
          'nabla',
          'isin',
          'notin',
          'ni',
          'prod',
          'sum',
          'minus',
          'lowast',
          'radic',
          'prop',
          'infin',
          'ang',
          'and',
          'or',
          'cap',
          'cup',
          'int',
          'there4',
          'sim',
          'cong',
          'asymp',
          'ne',
          'equiv',
          'le',
          'ge',
          'sub',
          'sup',
          'nsub',
          'sube',
          'supe',
          'oplus',
          'otimes',
          'perp',
          'sdot',
          'lceil',
          'rceil',
          'lfloor',
          'rfloor',
          'lang',
          'rang',
          'loz',
          'spades',
          'clubs',
          'hearts',
          'diams',
        ],
        a = [
          39,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          174,
          175,
          176,
          177,
          178,
          179,
          180,
          181,
          182,
          183,
          184,
          185,
          186,
          187,
          188,
          189,
          190,
          191,
          192,
          193,
          194,
          195,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          210,
          211,
          212,
          213,
          214,
          215,
          216,
          217,
          218,
          219,
          220,
          221,
          222,
          223,
          224,
          225,
          226,
          227,
          228,
          229,
          230,
          231,
          232,
          233,
          234,
          235,
          236,
          237,
          238,
          239,
          240,
          241,
          242,
          243,
          244,
          245,
          246,
          247,
          248,
          249,
          250,
          251,
          252,
          253,
          254,
          255,
          34,
          38,
          60,
          62,
          338,
          339,
          352,
          353,
          376,
          710,
          732,
          8194,
          8195,
          8201,
          8204,
          8205,
          8206,
          8207,
          8211,
          8212,
          8216,
          8217,
          8218,
          8220,
          8221,
          8222,
          8224,
          8225,
          8240,
          8249,
          8250,
          8364,
          402,
          913,
          914,
          915,
          916,
          917,
          918,
          919,
          920,
          921,
          922,
          923,
          924,
          925,
          926,
          927,
          928,
          929,
          931,
          932,
          933,
          934,
          935,
          936,
          937,
          945,
          946,
          947,
          948,
          949,
          950,
          951,
          952,
          953,
          954,
          955,
          956,
          957,
          958,
          959,
          960,
          961,
          962,
          963,
          964,
          965,
          966,
          967,
          968,
          969,
          977,
          978,
          982,
          8226,
          8230,
          8242,
          8243,
          8254,
          8260,
          8472,
          8465,
          8476,
          8482,
          8501,
          8592,
          8593,
          8594,
          8595,
          8596,
          8629,
          8656,
          8657,
          8658,
          8659,
          8660,
          8704,
          8706,
          8707,
          8709,
          8711,
          8712,
          8713,
          8715,
          8719,
          8721,
          8722,
          8727,
          8730,
          8733,
          8734,
          8736,
          8743,
          8744,
          8745,
          8746,
          8747,
          8756,
          8764,
          8773,
          8776,
          8800,
          8801,
          8804,
          8805,
          8834,
          8835,
          8836,
          8838,
          8839,
          8853,
          8855,
          8869,
          8901,
          8968,
          8969,
          8970,
          8971,
          9001,
          9002,
          9674,
          9824,
          9827,
          9829,
          9830,
        ],
        i = {},
        c = {};
      !(function () {
        for (var r = 0, e = o.length; r < e; ) {
          var t = o[r],
            n = a[r];
          (i[t] = String.fromCharCode(n)), (c[n] = t), r++;
        }
      })();
      var n =
        ((u.prototype.decode = function (r) {
          return r && r.length
            ? r.replace(/&(#?[\w\d]+);?/g, function (r, e) {
                var t, n;
                return (
                  '#' === e.charAt(0)
                    ? ((n =
                        'x' === e.charAt(1).toLowerCase()
                          ? parseInt(e.substr(2), 16)
                          : parseInt(e.substr(1))),
                      isNaN(n) || n < -32768 || 65535 < n || (t = String.fromCharCode(n)))
                    : (t = i[e]),
                  t || r
                );
              })
            : '';
        }),
        (u.decode = function (r) {
          return new u().decode(r);
        }),
        (u.prototype.encode = function (r) {
          if (!r || !r.length) return '';
          for (var e = r.length, t = '', n = 0; n < e; ) {
            var o = c[r.charCodeAt(n)];
            (t += o ? '&' + o + ';' : r.charAt(n)), n++;
          }
          return t;
        }),
        (u.encode = function (r) {
          return new u().encode(r);
        }),
        (u.prototype.encodeNonUTF = function (r) {
          if (!r || !r.length) return '';
          for (var e = r.length, t = '', n = 0; n < e; ) {
            var o = r.charCodeAt(n),
              a = c[o];
            (t += a ? '&' + a + ';' : o < 32 || 126 < o ? '&#' + o + ';' : r.charAt(n)), n++;
          }
          return t;
        }),
        (u.encodeNonUTF = function (r) {
          return new u().encodeNonUTF(r);
        }),
        (u.prototype.encodeNonASCII = function (r) {
          if (!r || !r.length) return '';
          for (var e = r.length, t = '', n = 0; n < e; ) {
            var o = r.charCodeAt(n);
            o <= 255 ? (t += r[n++]) : ((t += '&#' + o + ';'), n++);
          }
          return t;
        }),
        (u.encodeNonASCII = function (r) {
          return new u().encodeNonASCII(r);
        }),
        u);
      function u() {}
      e.Html4Entities = n;
    },
    function (r, e, t) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var l = [
          ['Aacute', [193]],
          ['aacute', [225]],
          ['Abreve', [258]],
          ['abreve', [259]],
          ['ac', [8766]],
          ['acd', [8767]],
          ['acE', [8766, 819]],
          ['Acirc', [194]],
          ['acirc', [226]],
          ['acute', [180]],
          ['Acy', [1040]],
          ['acy', [1072]],
          ['AElig', [198]],
          ['aelig', [230]],
          ['af', [8289]],
          ['Afr', [120068]],
          ['afr', [120094]],
          ['Agrave', [192]],
          ['agrave', [224]],
          ['alefsym', [8501]],
          ['aleph', [8501]],
          ['Alpha', [913]],
          ['alpha', [945]],
          ['Amacr', [256]],
          ['amacr', [257]],
          ['amalg', [10815]],
          ['amp', [38]],
          ['AMP', [38]],
          ['andand', [10837]],
          ['And', [10835]],
          ['and', [8743]],
          ['andd', [10844]],
          ['andslope', [10840]],
          ['andv', [10842]],
          ['ang', [8736]],
          ['ange', [10660]],
          ['angle', [8736]],
          ['angmsdaa', [10664]],
          ['angmsdab', [10665]],
          ['angmsdac', [10666]],
          ['angmsdad', [10667]],
          ['angmsdae', [10668]],
          ['angmsdaf', [10669]],
          ['angmsdag', [10670]],
          ['angmsdah', [10671]],
          ['angmsd', [8737]],
          ['angrt', [8735]],
          ['angrtvb', [8894]],
          ['angrtvbd', [10653]],
          ['angsph', [8738]],
          ['angst', [197]],
          ['angzarr', [9084]],
          ['Aogon', [260]],
          ['aogon', [261]],
          ['Aopf', [120120]],
          ['aopf', [120146]],
          ['apacir', [10863]],
          ['ap', [8776]],
          ['apE', [10864]],
          ['ape', [8778]],
          ['apid', [8779]],
          ['apos', [39]],
          ['ApplyFunction', [8289]],
          ['approx', [8776]],
          ['approxeq', [8778]],
          ['Aring', [197]],
          ['aring', [229]],
          ['Ascr', [119964]],
          ['ascr', [119990]],
          ['Assign', [8788]],
          ['ast', [42]],
          ['asymp', [8776]],
          ['asympeq', [8781]],
          ['Atilde', [195]],
          ['atilde', [227]],
          ['Auml', [196]],
          ['auml', [228]],
          ['awconint', [8755]],
          ['awint', [10769]],
          ['backcong', [8780]],
          ['backepsilon', [1014]],
          ['backprime', [8245]],
          ['backsim', [8765]],
          ['backsimeq', [8909]],
          ['Backslash', [8726]],
          ['Barv', [10983]],
          ['barvee', [8893]],
          ['barwed', [8965]],
          ['Barwed', [8966]],
          ['barwedge', [8965]],
          ['bbrk', [9141]],
          ['bbrktbrk', [9142]],
          ['bcong', [8780]],
          ['Bcy', [1041]],
          ['bcy', [1073]],
          ['bdquo', [8222]],
          ['becaus', [8757]],
          ['because', [8757]],
          ['Because', [8757]],
          ['bemptyv', [10672]],
          ['bepsi', [1014]],
          ['bernou', [8492]],
          ['Bernoullis', [8492]],
          ['Beta', [914]],
          ['beta', [946]],
          ['beth', [8502]],
          ['between', [8812]],
          ['Bfr', [120069]],
          ['bfr', [120095]],
          ['bigcap', [8898]],
          ['bigcirc', [9711]],
          ['bigcup', [8899]],
          ['bigodot', [10752]],
          ['bigoplus', [10753]],
          ['bigotimes', [10754]],
          ['bigsqcup', [10758]],
          ['bigstar', [9733]],
          ['bigtriangledown', [9661]],
          ['bigtriangleup', [9651]],
          ['biguplus', [10756]],
          ['bigvee', [8897]],
          ['bigwedge', [8896]],
          ['bkarow', [10509]],
          ['blacklozenge', [10731]],
          ['blacksquare', [9642]],
          ['blacktriangle', [9652]],
          ['blacktriangledown', [9662]],
          ['blacktriangleleft', [9666]],
          ['blacktriangleright', [9656]],
          ['blank', [9251]],
          ['blk12', [9618]],
          ['blk14', [9617]],
          ['blk34', [9619]],
          ['block', [9608]],
          ['bne', [61, 8421]],
          ['bnequiv', [8801, 8421]],
          ['bNot', [10989]],
          ['bnot', [8976]],
          ['Bopf', [120121]],
          ['bopf', [120147]],
          ['bot', [8869]],
          ['bottom', [8869]],
          ['bowtie', [8904]],
          ['boxbox', [10697]],
          ['boxdl', [9488]],
          ['boxdL', [9557]],
          ['boxDl', [9558]],
          ['boxDL', [9559]],
          ['boxdr', [9484]],
          ['boxdR', [9554]],
          ['boxDr', [9555]],
          ['boxDR', [9556]],
          ['boxh', [9472]],
          ['boxH', [9552]],
          ['boxhd', [9516]],
          ['boxHd', [9572]],
          ['boxhD', [9573]],
          ['boxHD', [9574]],
          ['boxhu', [9524]],
          ['boxHu', [9575]],
          ['boxhU', [9576]],
          ['boxHU', [9577]],
          ['boxminus', [8863]],
          ['boxplus', [8862]],
          ['boxtimes', [8864]],
          ['boxul', [9496]],
          ['boxuL', [9563]],
          ['boxUl', [9564]],
          ['boxUL', [9565]],
          ['boxur', [9492]],
          ['boxuR', [9560]],
          ['boxUr', [9561]],
          ['boxUR', [9562]],
          ['boxv', [9474]],
          ['boxV', [9553]],
          ['boxvh', [9532]],
          ['boxvH', [9578]],
          ['boxVh', [9579]],
          ['boxVH', [9580]],
          ['boxvl', [9508]],
          ['boxvL', [9569]],
          ['boxVl', [9570]],
          ['boxVL', [9571]],
          ['boxvr', [9500]],
          ['boxvR', [9566]],
          ['boxVr', [9567]],
          ['boxVR', [9568]],
          ['bprime', [8245]],
          ['breve', [728]],
          ['Breve', [728]],
          ['brvbar', [166]],
          ['bscr', [119991]],
          ['Bscr', [8492]],
          ['bsemi', [8271]],
          ['bsim', [8765]],
          ['bsime', [8909]],
          ['bsolb', [10693]],
          ['bsol', [92]],
          ['bsolhsub', [10184]],
          ['bull', [8226]],
          ['bullet', [8226]],
          ['bump', [8782]],
          ['bumpE', [10926]],
          ['bumpe', [8783]],
          ['Bumpeq', [8782]],
          ['bumpeq', [8783]],
          ['Cacute', [262]],
          ['cacute', [263]],
          ['capand', [10820]],
          ['capbrcup', [10825]],
          ['capcap', [10827]],
          ['cap', [8745]],
          ['Cap', [8914]],
          ['capcup', [10823]],
          ['capdot', [10816]],
          ['CapitalDifferentialD', [8517]],
          ['caps', [8745, 65024]],
          ['caret', [8257]],
          ['caron', [711]],
          ['Cayleys', [8493]],
          ['ccaps', [10829]],
          ['Ccaron', [268]],
          ['ccaron', [269]],
          ['Ccedil', [199]],
          ['ccedil', [231]],
          ['Ccirc', [264]],
          ['ccirc', [265]],
          ['Cconint', [8752]],
          ['ccups', [10828]],
          ['ccupssm', [10832]],
          ['Cdot', [266]],
          ['cdot', [267]],
          ['cedil', [184]],
          ['Cedilla', [184]],
          ['cemptyv', [10674]],
          ['cent', [162]],
          ['centerdot', [183]],
          ['CenterDot', [183]],
          ['cfr', [120096]],
          ['Cfr', [8493]],
          ['CHcy', [1063]],
          ['chcy', [1095]],
          ['check', [10003]],
          ['checkmark', [10003]],
          ['Chi', [935]],
          ['chi', [967]],
          ['circ', [710]],
          ['circeq', [8791]],
          ['circlearrowleft', [8634]],
          ['circlearrowright', [8635]],
          ['circledast', [8859]],
          ['circledcirc', [8858]],
          ['circleddash', [8861]],
          ['CircleDot', [8857]],
          ['circledR', [174]],
          ['circledS', [9416]],
          ['CircleMinus', [8854]],
          ['CirclePlus', [8853]],
          ['CircleTimes', [8855]],
          ['cir', [9675]],
          ['cirE', [10691]],
          ['cire', [8791]],
          ['cirfnint', [10768]],
          ['cirmid', [10991]],
          ['cirscir', [10690]],
          ['ClockwiseContourIntegral', [8754]],
          ['clubs', [9827]],
          ['clubsuit', [9827]],
          ['colon', [58]],
          ['Colon', [8759]],
          ['Colone', [10868]],
          ['colone', [8788]],
          ['coloneq', [8788]],
          ['comma', [44]],
          ['commat', [64]],
          ['comp', [8705]],
          ['compfn', [8728]],
          ['complement', [8705]],
          ['complexes', [8450]],
          ['cong', [8773]],
          ['congdot', [10861]],
          ['Congruent', [8801]],
          ['conint', [8750]],
          ['Conint', [8751]],
          ['ContourIntegral', [8750]],
          ['copf', [120148]],
          ['Copf', [8450]],
          ['coprod', [8720]],
          ['Coproduct', [8720]],
          ['copy', [169]],
          ['COPY', [169]],
          ['copysr', [8471]],
          ['CounterClockwiseContourIntegral', [8755]],
          ['crarr', [8629]],
          ['cross', [10007]],
          ['Cross', [10799]],
          ['Cscr', [119966]],
          ['cscr', [119992]],
          ['csub', [10959]],
          ['csube', [10961]],
          ['csup', [10960]],
          ['csupe', [10962]],
          ['ctdot', [8943]],
          ['cudarrl', [10552]],
          ['cudarrr', [10549]],
          ['cuepr', [8926]],
          ['cuesc', [8927]],
          ['cularr', [8630]],
          ['cularrp', [10557]],
          ['cupbrcap', [10824]],
          ['cupcap', [10822]],
          ['CupCap', [8781]],
          ['cup', [8746]],
          ['Cup', [8915]],
          ['cupcup', [10826]],
          ['cupdot', [8845]],
          ['cupor', [10821]],
          ['cups', [8746, 65024]],
          ['curarr', [8631]],
          ['curarrm', [10556]],
          ['curlyeqprec', [8926]],
          ['curlyeqsucc', [8927]],
          ['curlyvee', [8910]],
          ['curlywedge', [8911]],
          ['curren', [164]],
          ['curvearrowleft', [8630]],
          ['curvearrowright', [8631]],
          ['cuvee', [8910]],
          ['cuwed', [8911]],
          ['cwconint', [8754]],
          ['cwint', [8753]],
          ['cylcty', [9005]],
          ['dagger', [8224]],
          ['Dagger', [8225]],
          ['daleth', [8504]],
          ['darr', [8595]],
          ['Darr', [8609]],
          ['dArr', [8659]],
          ['dash', [8208]],
          ['Dashv', [10980]],
          ['dashv', [8867]],
          ['dbkarow', [10511]],
          ['dblac', [733]],
          ['Dcaron', [270]],
          ['dcaron', [271]],
          ['Dcy', [1044]],
          ['dcy', [1076]],
          ['ddagger', [8225]],
          ['ddarr', [8650]],
          ['DD', [8517]],
          ['dd', [8518]],
          ['DDotrahd', [10513]],
          ['ddotseq', [10871]],
          ['deg', [176]],
          ['Del', [8711]],
          ['Delta', [916]],
          ['delta', [948]],
          ['demptyv', [10673]],
          ['dfisht', [10623]],
          ['Dfr', [120071]],
          ['dfr', [120097]],
          ['dHar', [10597]],
          ['dharl', [8643]],
          ['dharr', [8642]],
          ['DiacriticalAcute', [180]],
          ['DiacriticalDot', [729]],
          ['DiacriticalDoubleAcute', [733]],
          ['DiacriticalGrave', [96]],
          ['DiacriticalTilde', [732]],
          ['diam', [8900]],
          ['diamond', [8900]],
          ['Diamond', [8900]],
          ['diamondsuit', [9830]],
          ['diams', [9830]],
          ['die', [168]],
          ['DifferentialD', [8518]],
          ['digamma', [989]],
          ['disin', [8946]],
          ['div', [247]],
          ['divide', [247]],
          ['divideontimes', [8903]],
          ['divonx', [8903]],
          ['DJcy', [1026]],
          ['djcy', [1106]],
          ['dlcorn', [8990]],
          ['dlcrop', [8973]],
          ['dollar', [36]],
          ['Dopf', [120123]],
          ['dopf', [120149]],
          ['Dot', [168]],
          ['dot', [729]],
          ['DotDot', [8412]],
          ['doteq', [8784]],
          ['doteqdot', [8785]],
          ['DotEqual', [8784]],
          ['dotminus', [8760]],
          ['dotplus', [8724]],
          ['dotsquare', [8865]],
          ['doublebarwedge', [8966]],
          ['DoubleContourIntegral', [8751]],
          ['DoubleDot', [168]],
          ['DoubleDownArrow', [8659]],
          ['DoubleLeftArrow', [8656]],
          ['DoubleLeftRightArrow', [8660]],
          ['DoubleLeftTee', [10980]],
          ['DoubleLongLeftArrow', [10232]],
          ['DoubleLongLeftRightArrow', [10234]],
          ['DoubleLongRightArrow', [10233]],
          ['DoubleRightArrow', [8658]],
          ['DoubleRightTee', [8872]],
          ['DoubleUpArrow', [8657]],
          ['DoubleUpDownArrow', [8661]],
          ['DoubleVerticalBar', [8741]],
          ['DownArrowBar', [10515]],
          ['downarrow', [8595]],
          ['DownArrow', [8595]],
          ['Downarrow', [8659]],
          ['DownArrowUpArrow', [8693]],
          ['DownBreve', [785]],
          ['downdownarrows', [8650]],
          ['downharpoonleft', [8643]],
          ['downharpoonright', [8642]],
          ['DownLeftRightVector', [10576]],
          ['DownLeftTeeVector', [10590]],
          ['DownLeftVectorBar', [10582]],
          ['DownLeftVector', [8637]],
          ['DownRightTeeVector', [10591]],
          ['DownRightVectorBar', [10583]],
          ['DownRightVector', [8641]],
          ['DownTeeArrow', [8615]],
          ['DownTee', [8868]],
          ['drbkarow', [10512]],
          ['drcorn', [8991]],
          ['drcrop', [8972]],
          ['Dscr', [119967]],
          ['dscr', [119993]],
          ['DScy', [1029]],
          ['dscy', [1109]],
          ['dsol', [10742]],
          ['Dstrok', [272]],
          ['dstrok', [273]],
          ['dtdot', [8945]],
          ['dtri', [9663]],
          ['dtrif', [9662]],
          ['duarr', [8693]],
          ['duhar', [10607]],
          ['dwangle', [10662]],
          ['DZcy', [1039]],
          ['dzcy', [1119]],
          ['dzigrarr', [10239]],
          ['Eacute', [201]],
          ['eacute', [233]],
          ['easter', [10862]],
          ['Ecaron', [282]],
          ['ecaron', [283]],
          ['Ecirc', [202]],
          ['ecirc', [234]],
          ['ecir', [8790]],
          ['ecolon', [8789]],
          ['Ecy', [1069]],
          ['ecy', [1101]],
          ['eDDot', [10871]],
          ['Edot', [278]],
          ['edot', [279]],
          ['eDot', [8785]],
          ['ee', [8519]],
          ['efDot', [8786]],
          ['Efr', [120072]],
          ['efr', [120098]],
          ['eg', [10906]],
          ['Egrave', [200]],
          ['egrave', [232]],
          ['egs', [10902]],
          ['egsdot', [10904]],
          ['el', [10905]],
          ['Element', [8712]],
          ['elinters', [9191]],
          ['ell', [8467]],
          ['els', [10901]],
          ['elsdot', [10903]],
          ['Emacr', [274]],
          ['emacr', [275]],
          ['empty', [8709]],
          ['emptyset', [8709]],
          ['EmptySmallSquare', [9723]],
          ['emptyv', [8709]],
          ['EmptyVerySmallSquare', [9643]],
          ['emsp13', [8196]],
          ['emsp14', [8197]],
          ['emsp', [8195]],
          ['ENG', [330]],
          ['eng', [331]],
          ['ensp', [8194]],
          ['Eogon', [280]],
          ['eogon', [281]],
          ['Eopf', [120124]],
          ['eopf', [120150]],
          ['epar', [8917]],
          ['eparsl', [10723]],
          ['eplus', [10865]],
          ['epsi', [949]],
          ['Epsilon', [917]],
          ['epsilon', [949]],
          ['epsiv', [1013]],
          ['eqcirc', [8790]],
          ['eqcolon', [8789]],
          ['eqsim', [8770]],
          ['eqslantgtr', [10902]],
          ['eqslantless', [10901]],
          ['Equal', [10869]],
          ['equals', [61]],
          ['EqualTilde', [8770]],
          ['equest', [8799]],
          ['Equilibrium', [8652]],
          ['equiv', [8801]],
          ['equivDD', [10872]],
          ['eqvparsl', [10725]],
          ['erarr', [10609]],
          ['erDot', [8787]],
          ['escr', [8495]],
          ['Escr', [8496]],
          ['esdot', [8784]],
          ['Esim', [10867]],
          ['esim', [8770]],
          ['Eta', [919]],
          ['eta', [951]],
          ['ETH', [208]],
          ['eth', [240]],
          ['Euml', [203]],
          ['euml', [235]],
          ['euro', [8364]],
          ['excl', [33]],
          ['exist', [8707]],
          ['Exists', [8707]],
          ['expectation', [8496]],
          ['exponentiale', [8519]],
          ['ExponentialE', [8519]],
          ['fallingdotseq', [8786]],
          ['Fcy', [1060]],
          ['fcy', [1092]],
          ['female', [9792]],
          ['ffilig', [64259]],
          ['fflig', [64256]],
          ['ffllig', [64260]],
          ['Ffr', [120073]],
          ['ffr', [120099]],
          ['filig', [64257]],
          ['FilledSmallSquare', [9724]],
          ['FilledVerySmallSquare', [9642]],
          ['fjlig', [102, 106]],
          ['flat', [9837]],
          ['fllig', [64258]],
          ['fltns', [9649]],
          ['fnof', [402]],
          ['Fopf', [120125]],
          ['fopf', [120151]],
          ['forall', [8704]],
          ['ForAll', [8704]],
          ['fork', [8916]],
          ['forkv', [10969]],
          ['Fouriertrf', [8497]],
          ['fpartint', [10765]],
          ['frac12', [189]],
          ['frac13', [8531]],
          ['frac14', [188]],
          ['frac15', [8533]],
          ['frac16', [8537]],
          ['frac18', [8539]],
          ['frac23', [8532]],
          ['frac25', [8534]],
          ['frac34', [190]],
          ['frac35', [8535]],
          ['frac38', [8540]],
          ['frac45', [8536]],
          ['frac56', [8538]],
          ['frac58', [8541]],
          ['frac78', [8542]],
          ['frasl', [8260]],
          ['frown', [8994]],
          ['fscr', [119995]],
          ['Fscr', [8497]],
          ['gacute', [501]],
          ['Gamma', [915]],
          ['gamma', [947]],
          ['Gammad', [988]],
          ['gammad', [989]],
          ['gap', [10886]],
          ['Gbreve', [286]],
          ['gbreve', [287]],
          ['Gcedil', [290]],
          ['Gcirc', [284]],
          ['gcirc', [285]],
          ['Gcy', [1043]],
          ['gcy', [1075]],
          ['Gdot', [288]],
          ['gdot', [289]],
          ['ge', [8805]],
          ['gE', [8807]],
          ['gEl', [10892]],
          ['gel', [8923]],
          ['geq', [8805]],
          ['geqq', [8807]],
          ['geqslant', [10878]],
          ['gescc', [10921]],
          ['ges', [10878]],
          ['gesdot', [10880]],
          ['gesdoto', [10882]],
          ['gesdotol', [10884]],
          ['gesl', [8923, 65024]],
          ['gesles', [10900]],
          ['Gfr', [120074]],
          ['gfr', [120100]],
          ['gg', [8811]],
          ['Gg', [8921]],
          ['ggg', [8921]],
          ['gimel', [8503]],
          ['GJcy', [1027]],
          ['gjcy', [1107]],
          ['gla', [10917]],
          ['gl', [8823]],
          ['glE', [10898]],
          ['glj', [10916]],
          ['gnap', [10890]],
          ['gnapprox', [10890]],
          ['gne', [10888]],
          ['gnE', [8809]],
          ['gneq', [10888]],
          ['gneqq', [8809]],
          ['gnsim', [8935]],
          ['Gopf', [120126]],
          ['gopf', [120152]],
          ['grave', [96]],
          ['GreaterEqual', [8805]],
          ['GreaterEqualLess', [8923]],
          ['GreaterFullEqual', [8807]],
          ['GreaterGreater', [10914]],
          ['GreaterLess', [8823]],
          ['GreaterSlantEqual', [10878]],
          ['GreaterTilde', [8819]],
          ['Gscr', [119970]],
          ['gscr', [8458]],
          ['gsim', [8819]],
          ['gsime', [10894]],
          ['gsiml', [10896]],
          ['gtcc', [10919]],
          ['gtcir', [10874]],
          ['gt', [62]],
          ['GT', [62]],
          ['Gt', [8811]],
          ['gtdot', [8919]],
          ['gtlPar', [10645]],
          ['gtquest', [10876]],
          ['gtrapprox', [10886]],
          ['gtrarr', [10616]],
          ['gtrdot', [8919]],
          ['gtreqless', [8923]],
          ['gtreqqless', [10892]],
          ['gtrless', [8823]],
          ['gtrsim', [8819]],
          ['gvertneqq', [8809, 65024]],
          ['gvnE', [8809, 65024]],
          ['Hacek', [711]],
          ['hairsp', [8202]],
          ['half', [189]],
          ['hamilt', [8459]],
          ['HARDcy', [1066]],
          ['hardcy', [1098]],
          ['harrcir', [10568]],
          ['harr', [8596]],
          ['hArr', [8660]],
          ['harrw', [8621]],
          ['Hat', [94]],
          ['hbar', [8463]],
          ['Hcirc', [292]],
          ['hcirc', [293]],
          ['hearts', [9829]],
          ['heartsuit', [9829]],
          ['hellip', [8230]],
          ['hercon', [8889]],
          ['hfr', [120101]],
          ['Hfr', [8460]],
          ['HilbertSpace', [8459]],
          ['hksearow', [10533]],
          ['hkswarow', [10534]],
          ['hoarr', [8703]],
          ['homtht', [8763]],
          ['hookleftarrow', [8617]],
          ['hookrightarrow', [8618]],
          ['hopf', [120153]],
          ['Hopf', [8461]],
          ['horbar', [8213]],
          ['HorizontalLine', [9472]],
          ['hscr', [119997]],
          ['Hscr', [8459]],
          ['hslash', [8463]],
          ['Hstrok', [294]],
          ['hstrok', [295]],
          ['HumpDownHump', [8782]],
          ['HumpEqual', [8783]],
          ['hybull', [8259]],
          ['hyphen', [8208]],
          ['Iacute', [205]],
          ['iacute', [237]],
          ['ic', [8291]],
          ['Icirc', [206]],
          ['icirc', [238]],
          ['Icy', [1048]],
          ['icy', [1080]],
          ['Idot', [304]],
          ['IEcy', [1045]],
          ['iecy', [1077]],
          ['iexcl', [161]],
          ['iff', [8660]],
          ['ifr', [120102]],
          ['Ifr', [8465]],
          ['Igrave', [204]],
          ['igrave', [236]],
          ['ii', [8520]],
          ['iiiint', [10764]],
          ['iiint', [8749]],
          ['iinfin', [10716]],
          ['iiota', [8489]],
          ['IJlig', [306]],
          ['ijlig', [307]],
          ['Imacr', [298]],
          ['imacr', [299]],
          ['image', [8465]],
          ['ImaginaryI', [8520]],
          ['imagline', [8464]],
          ['imagpart', [8465]],
          ['imath', [305]],
          ['Im', [8465]],
          ['imof', [8887]],
          ['imped', [437]],
          ['Implies', [8658]],
          ['incare', [8453]],
          ['in', [8712]],
          ['infin', [8734]],
          ['infintie', [10717]],
          ['inodot', [305]],
          ['intcal', [8890]],
          ['int', [8747]],
          ['Int', [8748]],
          ['integers', [8484]],
          ['Integral', [8747]],
          ['intercal', [8890]],
          ['Intersection', [8898]],
          ['intlarhk', [10775]],
          ['intprod', [10812]],
          ['InvisibleComma', [8291]],
          ['InvisibleTimes', [8290]],
          ['IOcy', [1025]],
          ['iocy', [1105]],
          ['Iogon', [302]],
          ['iogon', [303]],
          ['Iopf', [120128]],
          ['iopf', [120154]],
          ['Iota', [921]],
          ['iota', [953]],
          ['iprod', [10812]],
          ['iquest', [191]],
          ['iscr', [119998]],
          ['Iscr', [8464]],
          ['isin', [8712]],
          ['isindot', [8949]],
          ['isinE', [8953]],
          ['isins', [8948]],
          ['isinsv', [8947]],
          ['isinv', [8712]],
          ['it', [8290]],
          ['Itilde', [296]],
          ['itilde', [297]],
          ['Iukcy', [1030]],
          ['iukcy', [1110]],
          ['Iuml', [207]],
          ['iuml', [239]],
          ['Jcirc', [308]],
          ['jcirc', [309]],
          ['Jcy', [1049]],
          ['jcy', [1081]],
          ['Jfr', [120077]],
          ['jfr', [120103]],
          ['jmath', [567]],
          ['Jopf', [120129]],
          ['jopf', [120155]],
          ['Jscr', [119973]],
          ['jscr', [119999]],
          ['Jsercy', [1032]],
          ['jsercy', [1112]],
          ['Jukcy', [1028]],
          ['jukcy', [1108]],
          ['Kappa', [922]],
          ['kappa', [954]],
          ['kappav', [1008]],
          ['Kcedil', [310]],
          ['kcedil', [311]],
          ['Kcy', [1050]],
          ['kcy', [1082]],
          ['Kfr', [120078]],
          ['kfr', [120104]],
          ['kgreen', [312]],
          ['KHcy', [1061]],
          ['khcy', [1093]],
          ['KJcy', [1036]],
          ['kjcy', [1116]],
          ['Kopf', [120130]],
          ['kopf', [120156]],
          ['Kscr', [119974]],
          ['kscr', [12e4]],
          ['lAarr', [8666]],
          ['Lacute', [313]],
          ['lacute', [314]],
          ['laemptyv', [10676]],
          ['lagran', [8466]],
          ['Lambda', [923]],
          ['lambda', [955]],
          ['lang', [10216]],
          ['Lang', [10218]],
          ['langd', [10641]],
          ['langle', [10216]],
          ['lap', [10885]],
          ['Laplacetrf', [8466]],
          ['laquo', [171]],
          ['larrb', [8676]],
          ['larrbfs', [10527]],
          ['larr', [8592]],
          ['Larr', [8606]],
          ['lArr', [8656]],
          ['larrfs', [10525]],
          ['larrhk', [8617]],
          ['larrlp', [8619]],
          ['larrpl', [10553]],
          ['larrsim', [10611]],
          ['larrtl', [8610]],
          ['latail', [10521]],
          ['lAtail', [10523]],
          ['lat', [10923]],
          ['late', [10925]],
          ['lates', [10925, 65024]],
          ['lbarr', [10508]],
          ['lBarr', [10510]],
          ['lbbrk', [10098]],
          ['lbrace', [123]],
          ['lbrack', [91]],
          ['lbrke', [10635]],
          ['lbrksld', [10639]],
          ['lbrkslu', [10637]],
          ['Lcaron', [317]],
          ['lcaron', [318]],
          ['Lcedil', [315]],
          ['lcedil', [316]],
          ['lceil', [8968]],
          ['lcub', [123]],
          ['Lcy', [1051]],
          ['lcy', [1083]],
          ['ldca', [10550]],
          ['ldquo', [8220]],
          ['ldquor', [8222]],
          ['ldrdhar', [10599]],
          ['ldrushar', [10571]],
          ['ldsh', [8626]],
          ['le', [8804]],
          ['lE', [8806]],
          ['LeftAngleBracket', [10216]],
          ['LeftArrowBar', [8676]],
          ['leftarrow', [8592]],
          ['LeftArrow', [8592]],
          ['Leftarrow', [8656]],
          ['LeftArrowRightArrow', [8646]],
          ['leftarrowtail', [8610]],
          ['LeftCeiling', [8968]],
          ['LeftDoubleBracket', [10214]],
          ['LeftDownTeeVector', [10593]],
          ['LeftDownVectorBar', [10585]],
          ['LeftDownVector', [8643]],
          ['LeftFloor', [8970]],
          ['leftharpoondown', [8637]],
          ['leftharpoonup', [8636]],
          ['leftleftarrows', [8647]],
          ['leftrightarrow', [8596]],
          ['LeftRightArrow', [8596]],
          ['Leftrightarrow', [8660]],
          ['leftrightarrows', [8646]],
          ['leftrightharpoons', [8651]],
          ['leftrightsquigarrow', [8621]],
          ['LeftRightVector', [10574]],
          ['LeftTeeArrow', [8612]],
          ['LeftTee', [8867]],
          ['LeftTeeVector', [10586]],
          ['leftthreetimes', [8907]],
          ['LeftTriangleBar', [10703]],
          ['LeftTriangle', [8882]],
          ['LeftTriangleEqual', [8884]],
          ['LeftUpDownVector', [10577]],
          ['LeftUpTeeVector', [10592]],
          ['LeftUpVectorBar', [10584]],
          ['LeftUpVector', [8639]],
          ['LeftVectorBar', [10578]],
          ['LeftVector', [8636]],
          ['lEg', [10891]],
          ['leg', [8922]],
          ['leq', [8804]],
          ['leqq', [8806]],
          ['leqslant', [10877]],
          ['lescc', [10920]],
          ['les', [10877]],
          ['lesdot', [10879]],
          ['lesdoto', [10881]],
          ['lesdotor', [10883]],
          ['lesg', [8922, 65024]],
          ['lesges', [10899]],
          ['lessapprox', [10885]],
          ['lessdot', [8918]],
          ['lesseqgtr', [8922]],
          ['lesseqqgtr', [10891]],
          ['LessEqualGreater', [8922]],
          ['LessFullEqual', [8806]],
          ['LessGreater', [8822]],
          ['lessgtr', [8822]],
          ['LessLess', [10913]],
          ['lesssim', [8818]],
          ['LessSlantEqual', [10877]],
          ['LessTilde', [8818]],
          ['lfisht', [10620]],
          ['lfloor', [8970]],
          ['Lfr', [120079]],
          ['lfr', [120105]],
          ['lg', [8822]],
          ['lgE', [10897]],
          ['lHar', [10594]],
          ['lhard', [8637]],
          ['lharu', [8636]],
          ['lharul', [10602]],
          ['lhblk', [9604]],
          ['LJcy', [1033]],
          ['ljcy', [1113]],
          ['llarr', [8647]],
          ['ll', [8810]],
          ['Ll', [8920]],
          ['llcorner', [8990]],
          ['Lleftarrow', [8666]],
          ['llhard', [10603]],
          ['lltri', [9722]],
          ['Lmidot', [319]],
          ['lmidot', [320]],
          ['lmoustache', [9136]],
          ['lmoust', [9136]],
          ['lnap', [10889]],
          ['lnapprox', [10889]],
          ['lne', [10887]],
          ['lnE', [8808]],
          ['lneq', [10887]],
          ['lneqq', [8808]],
          ['lnsim', [8934]],
          ['loang', [10220]],
          ['loarr', [8701]],
          ['lobrk', [10214]],
          ['longleftarrow', [10229]],
          ['LongLeftArrow', [10229]],
          ['Longleftarrow', [10232]],
          ['longleftrightarrow', [10231]],
          ['LongLeftRightArrow', [10231]],
          ['Longleftrightarrow', [10234]],
          ['longmapsto', [10236]],
          ['longrightarrow', [10230]],
          ['LongRightArrow', [10230]],
          ['Longrightarrow', [10233]],
          ['looparrowleft', [8619]],
          ['looparrowright', [8620]],
          ['lopar', [10629]],
          ['Lopf', [120131]],
          ['lopf', [120157]],
          ['loplus', [10797]],
          ['lotimes', [10804]],
          ['lowast', [8727]],
          ['lowbar', [95]],
          ['LowerLeftArrow', [8601]],
          ['LowerRightArrow', [8600]],
          ['loz', [9674]],
          ['lozenge', [9674]],
          ['lozf', [10731]],
          ['lpar', [40]],
          ['lparlt', [10643]],
          ['lrarr', [8646]],
          ['lrcorner', [8991]],
          ['lrhar', [8651]],
          ['lrhard', [10605]],
          ['lrm', [8206]],
          ['lrtri', [8895]],
          ['lsaquo', [8249]],
          ['lscr', [120001]],
          ['Lscr', [8466]],
          ['lsh', [8624]],
          ['Lsh', [8624]],
          ['lsim', [8818]],
          ['lsime', [10893]],
          ['lsimg', [10895]],
          ['lsqb', [91]],
          ['lsquo', [8216]],
          ['lsquor', [8218]],
          ['Lstrok', [321]],
          ['lstrok', [322]],
          ['ltcc', [10918]],
          ['ltcir', [10873]],
          ['lt', [60]],
          ['LT', [60]],
          ['Lt', [8810]],
          ['ltdot', [8918]],
          ['lthree', [8907]],
          ['ltimes', [8905]],
          ['ltlarr', [10614]],
          ['ltquest', [10875]],
          ['ltri', [9667]],
          ['ltrie', [8884]],
          ['ltrif', [9666]],
          ['ltrPar', [10646]],
          ['lurdshar', [10570]],
          ['luruhar', [10598]],
          ['lvertneqq', [8808, 65024]],
          ['lvnE', [8808, 65024]],
          ['macr', [175]],
          ['male', [9794]],
          ['malt', [10016]],
          ['maltese', [10016]],
          ['Map', [10501]],
          ['map', [8614]],
          ['mapsto', [8614]],
          ['mapstodown', [8615]],
          ['mapstoleft', [8612]],
          ['mapstoup', [8613]],
          ['marker', [9646]],
          ['mcomma', [10793]],
          ['Mcy', [1052]],
          ['mcy', [1084]],
          ['mdash', [8212]],
          ['mDDot', [8762]],
          ['measuredangle', [8737]],
          ['MediumSpace', [8287]],
          ['Mellintrf', [8499]],
          ['Mfr', [120080]],
          ['mfr', [120106]],
          ['mho', [8487]],
          ['micro', [181]],
          ['midast', [42]],
          ['midcir', [10992]],
          ['mid', [8739]],
          ['middot', [183]],
          ['minusb', [8863]],
          ['minus', [8722]],
          ['minusd', [8760]],
          ['minusdu', [10794]],
          ['MinusPlus', [8723]],
          ['mlcp', [10971]],
          ['mldr', [8230]],
          ['mnplus', [8723]],
          ['models', [8871]],
          ['Mopf', [120132]],
          ['mopf', [120158]],
          ['mp', [8723]],
          ['mscr', [120002]],
          ['Mscr', [8499]],
          ['mstpos', [8766]],
          ['Mu', [924]],
          ['mu', [956]],
          ['multimap', [8888]],
          ['mumap', [8888]],
          ['nabla', [8711]],
          ['Nacute', [323]],
          ['nacute', [324]],
          ['nang', [8736, 8402]],
          ['nap', [8777]],
          ['napE', [10864, 824]],
          ['napid', [8779, 824]],
          ['napos', [329]],
          ['napprox', [8777]],
          ['natural', [9838]],
          ['naturals', [8469]],
          ['natur', [9838]],
          ['nbsp', [160]],
          ['nbump', [8782, 824]],
          ['nbumpe', [8783, 824]],
          ['ncap', [10819]],
          ['Ncaron', [327]],
          ['ncaron', [328]],
          ['Ncedil', [325]],
          ['ncedil', [326]],
          ['ncong', [8775]],
          ['ncongdot', [10861, 824]],
          ['ncup', [10818]],
          ['Ncy', [1053]],
          ['ncy', [1085]],
          ['ndash', [8211]],
          ['nearhk', [10532]],
          ['nearr', [8599]],
          ['neArr', [8663]],
          ['nearrow', [8599]],
          ['ne', [8800]],
          ['nedot', [8784, 824]],
          ['NegativeMediumSpace', [8203]],
          ['NegativeThickSpace', [8203]],
          ['NegativeThinSpace', [8203]],
          ['NegativeVeryThinSpace', [8203]],
          ['nequiv', [8802]],
          ['nesear', [10536]],
          ['nesim', [8770, 824]],
          ['NestedGreaterGreater', [8811]],
          ['NestedLessLess', [8810]],
          ['nexist', [8708]],
          ['nexists', [8708]],
          ['Nfr', [120081]],
          ['nfr', [120107]],
          ['ngE', [8807, 824]],
          ['nge', [8817]],
          ['ngeq', [8817]],
          ['ngeqq', [8807, 824]],
          ['ngeqslant', [10878, 824]],
          ['nges', [10878, 824]],
          ['nGg', [8921, 824]],
          ['ngsim', [8821]],
          ['nGt', [8811, 8402]],
          ['ngt', [8815]],
          ['ngtr', [8815]],
          ['nGtv', [8811, 824]],
          ['nharr', [8622]],
          ['nhArr', [8654]],
          ['nhpar', [10994]],
          ['ni', [8715]],
          ['nis', [8956]],
          ['nisd', [8954]],
          ['niv', [8715]],
          ['NJcy', [1034]],
          ['njcy', [1114]],
          ['nlarr', [8602]],
          ['nlArr', [8653]],
          ['nldr', [8229]],
          ['nlE', [8806, 824]],
          ['nle', [8816]],
          ['nleftarrow', [8602]],
          ['nLeftarrow', [8653]],
          ['nleftrightarrow', [8622]],
          ['nLeftrightarrow', [8654]],
          ['nleq', [8816]],
          ['nleqq', [8806, 824]],
          ['nleqslant', [10877, 824]],
          ['nles', [10877, 824]],
          ['nless', [8814]],
          ['nLl', [8920, 824]],
          ['nlsim', [8820]],
          ['nLt', [8810, 8402]],
          ['nlt', [8814]],
          ['nltri', [8938]],
          ['nltrie', [8940]],
          ['nLtv', [8810, 824]],
          ['nmid', [8740]],
          ['NoBreak', [8288]],
          ['NonBreakingSpace', [160]],
          ['nopf', [120159]],
          ['Nopf', [8469]],
          ['Not', [10988]],
          ['not', [172]],
          ['NotCongruent', [8802]],
          ['NotCupCap', [8813]],
          ['NotDoubleVerticalBar', [8742]],
          ['NotElement', [8713]],
          ['NotEqual', [8800]],
          ['NotEqualTilde', [8770, 824]],
          ['NotExists', [8708]],
          ['NotGreater', [8815]],
          ['NotGreaterEqual', [8817]],
          ['NotGreaterFullEqual', [8807, 824]],
          ['NotGreaterGreater', [8811, 824]],
          ['NotGreaterLess', [8825]],
          ['NotGreaterSlantEqual', [10878, 824]],
          ['NotGreaterTilde', [8821]],
          ['NotHumpDownHump', [8782, 824]],
          ['NotHumpEqual', [8783, 824]],
          ['notin', [8713]],
          ['notindot', [8949, 824]],
          ['notinE', [8953, 824]],
          ['notinva', [8713]],
          ['notinvb', [8951]],
          ['notinvc', [8950]],
          ['NotLeftTriangleBar', [10703, 824]],
          ['NotLeftTriangle', [8938]],
          ['NotLeftTriangleEqual', [8940]],
          ['NotLess', [8814]],
          ['NotLessEqual', [8816]],
          ['NotLessGreater', [8824]],
          ['NotLessLess', [8810, 824]],
          ['NotLessSlantEqual', [10877, 824]],
          ['NotLessTilde', [8820]],
          ['NotNestedGreaterGreater', [10914, 824]],
          ['NotNestedLessLess', [10913, 824]],
          ['notni', [8716]],
          ['notniva', [8716]],
          ['notnivb', [8958]],
          ['notnivc', [8957]],
          ['NotPrecedes', [8832]],
          ['NotPrecedesEqual', [10927, 824]],
          ['NotPrecedesSlantEqual', [8928]],
          ['NotReverseElement', [8716]],
          ['NotRightTriangleBar', [10704, 824]],
          ['NotRightTriangle', [8939]],
          ['NotRightTriangleEqual', [8941]],
          ['NotSquareSubset', [8847, 824]],
          ['NotSquareSubsetEqual', [8930]],
          ['NotSquareSuperset', [8848, 824]],
          ['NotSquareSupersetEqual', [8931]],
          ['NotSubset', [8834, 8402]],
          ['NotSubsetEqual', [8840]],
          ['NotSucceeds', [8833]],
          ['NotSucceedsEqual', [10928, 824]],
          ['NotSucceedsSlantEqual', [8929]],
          ['NotSucceedsTilde', [8831, 824]],
          ['NotSuperset', [8835, 8402]],
          ['NotSupersetEqual', [8841]],
          ['NotTilde', [8769]],
          ['NotTildeEqual', [8772]],
          ['NotTildeFullEqual', [8775]],
          ['NotTildeTilde', [8777]],
          ['NotVerticalBar', [8740]],
          ['nparallel', [8742]],
          ['npar', [8742]],
          ['nparsl', [11005, 8421]],
          ['npart', [8706, 824]],
          ['npolint', [10772]],
          ['npr', [8832]],
          ['nprcue', [8928]],
          ['nprec', [8832]],
          ['npreceq', [10927, 824]],
          ['npre', [10927, 824]],
          ['nrarrc', [10547, 824]],
          ['nrarr', [8603]],
          ['nrArr', [8655]],
          ['nrarrw', [8605, 824]],
          ['nrightarrow', [8603]],
          ['nRightarrow', [8655]],
          ['nrtri', [8939]],
          ['nrtrie', [8941]],
          ['nsc', [8833]],
          ['nsccue', [8929]],
          ['nsce', [10928, 824]],
          ['Nscr', [119977]],
          ['nscr', [120003]],
          ['nshortmid', [8740]],
          ['nshortparallel', [8742]],
          ['nsim', [8769]],
          ['nsime', [8772]],
          ['nsimeq', [8772]],
          ['nsmid', [8740]],
          ['nspar', [8742]],
          ['nsqsube', [8930]],
          ['nsqsupe', [8931]],
          ['nsub', [8836]],
          ['nsubE', [10949, 824]],
          ['nsube', [8840]],
          ['nsubset', [8834, 8402]],
          ['nsubseteq', [8840]],
          ['nsubseteqq', [10949, 824]],
          ['nsucc', [8833]],
          ['nsucceq', [10928, 824]],
          ['nsup', [8837]],
          ['nsupE', [10950, 824]],
          ['nsupe', [8841]],
          ['nsupset', [8835, 8402]],
          ['nsupseteq', [8841]],
          ['nsupseteqq', [10950, 824]],
          ['ntgl', [8825]],
          ['Ntilde', [209]],
          ['ntilde', [241]],
          ['ntlg', [8824]],
          ['ntriangleleft', [8938]],
          ['ntrianglelefteq', [8940]],
          ['ntriangleright', [8939]],
          ['ntrianglerighteq', [8941]],
          ['Nu', [925]],
          ['nu', [957]],
          ['num', [35]],
          ['numero', [8470]],
          ['numsp', [8199]],
          ['nvap', [8781, 8402]],
          ['nvdash', [8876]],
          ['nvDash', [8877]],
          ['nVdash', [8878]],
          ['nVDash', [8879]],
          ['nvge', [8805, 8402]],
          ['nvgt', [62, 8402]],
          ['nvHarr', [10500]],
          ['nvinfin', [10718]],
          ['nvlArr', [10498]],
          ['nvle', [8804, 8402]],
          ['nvlt', [60, 8402]],
          ['nvltrie', [8884, 8402]],
          ['nvrArr', [10499]],
          ['nvrtrie', [8885, 8402]],
          ['nvsim', [8764, 8402]],
          ['nwarhk', [10531]],
          ['nwarr', [8598]],
          ['nwArr', [8662]],
          ['nwarrow', [8598]],
          ['nwnear', [10535]],
          ['Oacute', [211]],
          ['oacute', [243]],
          ['oast', [8859]],
          ['Ocirc', [212]],
          ['ocirc', [244]],
          ['ocir', [8858]],
          ['Ocy', [1054]],
          ['ocy', [1086]],
          ['odash', [8861]],
          ['Odblac', [336]],
          ['odblac', [337]],
          ['odiv', [10808]],
          ['odot', [8857]],
          ['odsold', [10684]],
          ['OElig', [338]],
          ['oelig', [339]],
          ['ofcir', [10687]],
          ['Ofr', [120082]],
          ['ofr', [120108]],
          ['ogon', [731]],
          ['Ograve', [210]],
          ['ograve', [242]],
          ['ogt', [10689]],
          ['ohbar', [10677]],
          ['ohm', [937]],
          ['oint', [8750]],
          ['olarr', [8634]],
          ['olcir', [10686]],
          ['olcross', [10683]],
          ['oline', [8254]],
          ['olt', [10688]],
          ['Omacr', [332]],
          ['omacr', [333]],
          ['Omega', [937]],
          ['omega', [969]],
          ['Omicron', [927]],
          ['omicron', [959]],
          ['omid', [10678]],
          ['ominus', [8854]],
          ['Oopf', [120134]],
          ['oopf', [120160]],
          ['opar', [10679]],
          ['OpenCurlyDoubleQuote', [8220]],
          ['OpenCurlyQuote', [8216]],
          ['operp', [10681]],
          ['oplus', [8853]],
          ['orarr', [8635]],
          ['Or', [10836]],
          ['or', [8744]],
          ['ord', [10845]],
          ['order', [8500]],
          ['orderof', [8500]],
          ['ordf', [170]],
          ['ordm', [186]],
          ['origof', [8886]],
          ['oror', [10838]],
          ['orslope', [10839]],
          ['orv', [10843]],
          ['oS', [9416]],
          ['Oscr', [119978]],
          ['oscr', [8500]],
          ['Oslash', [216]],
          ['oslash', [248]],
          ['osol', [8856]],
          ['Otilde', [213]],
          ['otilde', [245]],
          ['otimesas', [10806]],
          ['Otimes', [10807]],
          ['otimes', [8855]],
          ['Ouml', [214]],
          ['ouml', [246]],
          ['ovbar', [9021]],
          ['OverBar', [8254]],
          ['OverBrace', [9182]],
          ['OverBracket', [9140]],
          ['OverParenthesis', [9180]],
          ['para', [182]],
          ['parallel', [8741]],
          ['par', [8741]],
          ['parsim', [10995]],
          ['parsl', [11005]],
          ['part', [8706]],
          ['PartialD', [8706]],
          ['Pcy', [1055]],
          ['pcy', [1087]],
          ['percnt', [37]],
          ['period', [46]],
          ['permil', [8240]],
          ['perp', [8869]],
          ['pertenk', [8241]],
          ['Pfr', [120083]],
          ['pfr', [120109]],
          ['Phi', [934]],
          ['phi', [966]],
          ['phiv', [981]],
          ['phmmat', [8499]],
          ['phone', [9742]],
          ['Pi', [928]],
          ['pi', [960]],
          ['pitchfork', [8916]],
          ['piv', [982]],
          ['planck', [8463]],
          ['planckh', [8462]],
          ['plankv', [8463]],
          ['plusacir', [10787]],
          ['plusb', [8862]],
          ['pluscir', [10786]],
          ['plus', [43]],
          ['plusdo', [8724]],
          ['plusdu', [10789]],
          ['pluse', [10866]],
          ['PlusMinus', [177]],
          ['plusmn', [177]],
          ['plussim', [10790]],
          ['plustwo', [10791]],
          ['pm', [177]],
          ['Poincareplane', [8460]],
          ['pointint', [10773]],
          ['popf', [120161]],
          ['Popf', [8473]],
          ['pound', [163]],
          ['prap', [10935]],
          ['Pr', [10939]],
          ['pr', [8826]],
          ['prcue', [8828]],
          ['precapprox', [10935]],
          ['prec', [8826]],
          ['preccurlyeq', [8828]],
          ['Precedes', [8826]],
          ['PrecedesEqual', [10927]],
          ['PrecedesSlantEqual', [8828]],
          ['PrecedesTilde', [8830]],
          ['preceq', [10927]],
          ['precnapprox', [10937]],
          ['precneqq', [10933]],
          ['precnsim', [8936]],
          ['pre', [10927]],
          ['prE', [10931]],
          ['precsim', [8830]],
          ['prime', [8242]],
          ['Prime', [8243]],
          ['primes', [8473]],
          ['prnap', [10937]],
          ['prnE', [10933]],
          ['prnsim', [8936]],
          ['prod', [8719]],
          ['Product', [8719]],
          ['profalar', [9006]],
          ['profline', [8978]],
          ['profsurf', [8979]],
          ['prop', [8733]],
          ['Proportional', [8733]],
          ['Proportion', [8759]],
          ['propto', [8733]],
          ['prsim', [8830]],
          ['prurel', [8880]],
          ['Pscr', [119979]],
          ['pscr', [120005]],
          ['Psi', [936]],
          ['psi', [968]],
          ['puncsp', [8200]],
          ['Qfr', [120084]],
          ['qfr', [120110]],
          ['qint', [10764]],
          ['qopf', [120162]],
          ['Qopf', [8474]],
          ['qprime', [8279]],
          ['Qscr', [119980]],
          ['qscr', [120006]],
          ['quaternions', [8461]],
          ['quatint', [10774]],
          ['quest', [63]],
          ['questeq', [8799]],
          ['quot', [34]],
          ['QUOT', [34]],
          ['rAarr', [8667]],
          ['race', [8765, 817]],
          ['Racute', [340]],
          ['racute', [341]],
          ['radic', [8730]],
          ['raemptyv', [10675]],
          ['rang', [10217]],
          ['Rang', [10219]],
          ['rangd', [10642]],
          ['range', [10661]],
          ['rangle', [10217]],
          ['raquo', [187]],
          ['rarrap', [10613]],
          ['rarrb', [8677]],
          ['rarrbfs', [10528]],
          ['rarrc', [10547]],
          ['rarr', [8594]],
          ['Rarr', [8608]],
          ['rArr', [8658]],
          ['rarrfs', [10526]],
          ['rarrhk', [8618]],
          ['rarrlp', [8620]],
          ['rarrpl', [10565]],
          ['rarrsim', [10612]],
          ['Rarrtl', [10518]],
          ['rarrtl', [8611]],
          ['rarrw', [8605]],
          ['ratail', [10522]],
          ['rAtail', [10524]],
          ['ratio', [8758]],
          ['rationals', [8474]],
          ['rbarr', [10509]],
          ['rBarr', [10511]],
          ['RBarr', [10512]],
          ['rbbrk', [10099]],
          ['rbrace', [125]],
          ['rbrack', [93]],
          ['rbrke', [10636]],
          ['rbrksld', [10638]],
          ['rbrkslu', [10640]],
          ['Rcaron', [344]],
          ['rcaron', [345]],
          ['Rcedil', [342]],
          ['rcedil', [343]],
          ['rceil', [8969]],
          ['rcub', [125]],
          ['Rcy', [1056]],
          ['rcy', [1088]],
          ['rdca', [10551]],
          ['rdldhar', [10601]],
          ['rdquo', [8221]],
          ['rdquor', [8221]],
          ['CloseCurlyDoubleQuote', [8221]],
          ['rdsh', [8627]],
          ['real', [8476]],
          ['realine', [8475]],
          ['realpart', [8476]],
          ['reals', [8477]],
          ['Re', [8476]],
          ['rect', [9645]],
          ['reg', [174]],
          ['REG', [174]],
          ['ReverseElement', [8715]],
          ['ReverseEquilibrium', [8651]],
          ['ReverseUpEquilibrium', [10607]],
          ['rfisht', [10621]],
          ['rfloor', [8971]],
          ['rfr', [120111]],
          ['Rfr', [8476]],
          ['rHar', [10596]],
          ['rhard', [8641]],
          ['rharu', [8640]],
          ['rharul', [10604]],
          ['Rho', [929]],
          ['rho', [961]],
          ['rhov', [1009]],
          ['RightAngleBracket', [10217]],
          ['RightArrowBar', [8677]],
          ['rightarrow', [8594]],
          ['RightArrow', [8594]],
          ['Rightarrow', [8658]],
          ['RightArrowLeftArrow', [8644]],
          ['rightarrowtail', [8611]],
          ['RightCeiling', [8969]],
          ['RightDoubleBracket', [10215]],
          ['RightDownTeeVector', [10589]],
          ['RightDownVectorBar', [10581]],
          ['RightDownVector', [8642]],
          ['RightFloor', [8971]],
          ['rightharpoondown', [8641]],
          ['rightharpoonup', [8640]],
          ['rightleftarrows', [8644]],
          ['rightleftharpoons', [8652]],
          ['rightrightarrows', [8649]],
          ['rightsquigarrow', [8605]],
          ['RightTeeArrow', [8614]],
          ['RightTee', [8866]],
          ['RightTeeVector', [10587]],
          ['rightthreetimes', [8908]],
          ['RightTriangleBar', [10704]],
          ['RightTriangle', [8883]],
          ['RightTriangleEqual', [8885]],
          ['RightUpDownVector', [10575]],
          ['RightUpTeeVector', [10588]],
          ['RightUpVectorBar', [10580]],
          ['RightUpVector', [8638]],
          ['RightVectorBar', [10579]],
          ['RightVector', [8640]],
          ['ring', [730]],
          ['risingdotseq', [8787]],
          ['rlarr', [8644]],
          ['rlhar', [8652]],
          ['rlm', [8207]],
          ['rmoustache', [9137]],
          ['rmoust', [9137]],
          ['rnmid', [10990]],
          ['roang', [10221]],
          ['roarr', [8702]],
          ['robrk', [10215]],
          ['ropar', [10630]],
          ['ropf', [120163]],
          ['Ropf', [8477]],
          ['roplus', [10798]],
          ['rotimes', [10805]],
          ['RoundImplies', [10608]],
          ['rpar', [41]],
          ['rpargt', [10644]],
          ['rppolint', [10770]],
          ['rrarr', [8649]],
          ['Rrightarrow', [8667]],
          ['rsaquo', [8250]],
          ['rscr', [120007]],
          ['Rscr', [8475]],
          ['rsh', [8625]],
          ['Rsh', [8625]],
          ['rsqb', [93]],
          ['rsquo', [8217]],
          ['rsquor', [8217]],
          ['CloseCurlyQuote', [8217]],
          ['rthree', [8908]],
          ['rtimes', [8906]],
          ['rtri', [9657]],
          ['rtrie', [8885]],
          ['rtrif', [9656]],
          ['rtriltri', [10702]],
          ['RuleDelayed', [10740]],
          ['ruluhar', [10600]],
          ['rx', [8478]],
          ['Sacute', [346]],
          ['sacute', [347]],
          ['sbquo', [8218]],
          ['scap', [10936]],
          ['Scaron', [352]],
          ['scaron', [353]],
          ['Sc', [10940]],
          ['sc', [8827]],
          ['sccue', [8829]],
          ['sce', [10928]],
          ['scE', [10932]],
          ['Scedil', [350]],
          ['scedil', [351]],
          ['Scirc', [348]],
          ['scirc', [349]],
          ['scnap', [10938]],
          ['scnE', [10934]],
          ['scnsim', [8937]],
          ['scpolint', [10771]],
          ['scsim', [8831]],
          ['Scy', [1057]],
          ['scy', [1089]],
          ['sdotb', [8865]],
          ['sdot', [8901]],
          ['sdote', [10854]],
          ['searhk', [10533]],
          ['searr', [8600]],
          ['seArr', [8664]],
          ['searrow', [8600]],
          ['sect', [167]],
          ['semi', [59]],
          ['seswar', [10537]],
          ['setminus', [8726]],
          ['setmn', [8726]],
          ['sext', [10038]],
          ['Sfr', [120086]],
          ['sfr', [120112]],
          ['sfrown', [8994]],
          ['sharp', [9839]],
          ['SHCHcy', [1065]],
          ['shchcy', [1097]],
          ['SHcy', [1064]],
          ['shcy', [1096]],
          ['ShortDownArrow', [8595]],
          ['ShortLeftArrow', [8592]],
          ['shortmid', [8739]],
          ['shortparallel', [8741]],
          ['ShortRightArrow', [8594]],
          ['ShortUpArrow', [8593]],
          ['shy', [173]],
          ['Sigma', [931]],
          ['sigma', [963]],
          ['sigmaf', [962]],
          ['sigmav', [962]],
          ['sim', [8764]],
          ['simdot', [10858]],
          ['sime', [8771]],
          ['simeq', [8771]],
          ['simg', [10910]],
          ['simgE', [10912]],
          ['siml', [10909]],
          ['simlE', [10911]],
          ['simne', [8774]],
          ['simplus', [10788]],
          ['simrarr', [10610]],
          ['slarr', [8592]],
          ['SmallCircle', [8728]],
          ['smallsetminus', [8726]],
          ['smashp', [10803]],
          ['smeparsl', [10724]],
          ['smid', [8739]],
          ['smile', [8995]],
          ['smt', [10922]],
          ['smte', [10924]],
          ['smtes', [10924, 65024]],
          ['SOFTcy', [1068]],
          ['softcy', [1100]],
          ['solbar', [9023]],
          ['solb', [10692]],
          ['sol', [47]],
          ['Sopf', [120138]],
          ['sopf', [120164]],
          ['spades', [9824]],
          ['spadesuit', [9824]],
          ['spar', [8741]],
          ['sqcap', [8851]],
          ['sqcaps', [8851, 65024]],
          ['sqcup', [8852]],
          ['sqcups', [8852, 65024]],
          ['Sqrt', [8730]],
          ['sqsub', [8847]],
          ['sqsube', [8849]],
          ['sqsubset', [8847]],
          ['sqsubseteq', [8849]],
          ['sqsup', [8848]],
          ['sqsupe', [8850]],
          ['sqsupset', [8848]],
          ['sqsupseteq', [8850]],
          ['square', [9633]],
          ['Square', [9633]],
          ['SquareIntersection', [8851]],
          ['SquareSubset', [8847]],
          ['SquareSubsetEqual', [8849]],
          ['SquareSuperset', [8848]],
          ['SquareSupersetEqual', [8850]],
          ['SquareUnion', [8852]],
          ['squarf', [9642]],
          ['squ', [9633]],
          ['squf', [9642]],
          ['srarr', [8594]],
          ['Sscr', [119982]],
          ['sscr', [120008]],
          ['ssetmn', [8726]],
          ['ssmile', [8995]],
          ['sstarf', [8902]],
          ['Star', [8902]],
          ['star', [9734]],
          ['starf', [9733]],
          ['straightepsilon', [1013]],
          ['straightphi', [981]],
          ['strns', [175]],
          ['sub', [8834]],
          ['Sub', [8912]],
          ['subdot', [10941]],
          ['subE', [10949]],
          ['sube', [8838]],
          ['subedot', [10947]],
          ['submult', [10945]],
          ['subnE', [10955]],
          ['subne', [8842]],
          ['subplus', [10943]],
          ['subrarr', [10617]],
          ['subset', [8834]],
          ['Subset', [8912]],
          ['subseteq', [8838]],
          ['subseteqq', [10949]],
          ['SubsetEqual', [8838]],
          ['subsetneq', [8842]],
          ['subsetneqq', [10955]],
          ['subsim', [10951]],
          ['subsub', [10965]],
          ['subsup', [10963]],
          ['succapprox', [10936]],
          ['succ', [8827]],
          ['succcurlyeq', [8829]],
          ['Succeeds', [8827]],
          ['SucceedsEqual', [10928]],
          ['SucceedsSlantEqual', [8829]],
          ['SucceedsTilde', [8831]],
          ['succeq', [10928]],
          ['succnapprox', [10938]],
          ['succneqq', [10934]],
          ['succnsim', [8937]],
          ['succsim', [8831]],
          ['SuchThat', [8715]],
          ['sum', [8721]],
          ['Sum', [8721]],
          ['sung', [9834]],
          ['sup1', [185]],
          ['sup2', [178]],
          ['sup3', [179]],
          ['sup', [8835]],
          ['Sup', [8913]],
          ['supdot', [10942]],
          ['supdsub', [10968]],
          ['supE', [10950]],
          ['supe', [8839]],
          ['supedot', [10948]],
          ['Superset', [8835]],
          ['SupersetEqual', [8839]],
          ['suphsol', [10185]],
          ['suphsub', [10967]],
          ['suplarr', [10619]],
          ['supmult', [10946]],
          ['supnE', [10956]],
          ['supne', [8843]],
          ['supplus', [10944]],
          ['supset', [8835]],
          ['Supset', [8913]],
          ['supseteq', [8839]],
          ['supseteqq', [10950]],
          ['supsetneq', [8843]],
          ['supsetneqq', [10956]],
          ['supsim', [10952]],
          ['supsub', [10964]],
          ['supsup', [10966]],
          ['swarhk', [10534]],
          ['swarr', [8601]],
          ['swArr', [8665]],
          ['swarrow', [8601]],
          ['swnwar', [10538]],
          ['szlig', [223]],
          ['Tab', [9]],
          ['target', [8982]],
          ['Tau', [932]],
          ['tau', [964]],
          ['tbrk', [9140]],
          ['Tcaron', [356]],
          ['tcaron', [357]],
          ['Tcedil', [354]],
          ['tcedil', [355]],
          ['Tcy', [1058]],
          ['tcy', [1090]],
          ['tdot', [8411]],
          ['telrec', [8981]],
          ['Tfr', [120087]],
          ['tfr', [120113]],
          ['there4', [8756]],
          ['therefore', [8756]],
          ['Therefore', [8756]],
          ['Theta', [920]],
          ['theta', [952]],
          ['thetasym', [977]],
          ['thetav', [977]],
          ['thickapprox', [8776]],
          ['thicksim', [8764]],
          ['ThickSpace', [8287, 8202]],
          ['ThinSpace', [8201]],
          ['thinsp', [8201]],
          ['thkap', [8776]],
          ['thksim', [8764]],
          ['THORN', [222]],
          ['thorn', [254]],
          ['tilde', [732]],
          ['Tilde', [8764]],
          ['TildeEqual', [8771]],
          ['TildeFullEqual', [8773]],
          ['TildeTilde', [8776]],
          ['timesbar', [10801]],
          ['timesb', [8864]],
          ['times', [215]],
          ['timesd', [10800]],
          ['tint', [8749]],
          ['toea', [10536]],
          ['topbot', [9014]],
          ['topcir', [10993]],
          ['top', [8868]],
          ['Topf', [120139]],
          ['topf', [120165]],
          ['topfork', [10970]],
          ['tosa', [10537]],
          ['tprime', [8244]],
          ['trade', [8482]],
          ['TRADE', [8482]],
          ['triangle', [9653]],
          ['triangledown', [9663]],
          ['triangleleft', [9667]],
          ['trianglelefteq', [8884]],
          ['triangleq', [8796]],
          ['triangleright', [9657]],
          ['trianglerighteq', [8885]],
          ['tridot', [9708]],
          ['trie', [8796]],
          ['triminus', [10810]],
          ['TripleDot', [8411]],
          ['triplus', [10809]],
          ['trisb', [10701]],
          ['tritime', [10811]],
          ['trpezium', [9186]],
          ['Tscr', [119983]],
          ['tscr', [120009]],
          ['TScy', [1062]],
          ['tscy', [1094]],
          ['TSHcy', [1035]],
          ['tshcy', [1115]],
          ['Tstrok', [358]],
          ['tstrok', [359]],
          ['twixt', [8812]],
          ['twoheadleftarrow', [8606]],
          ['twoheadrightarrow', [8608]],
          ['Uacute', [218]],
          ['uacute', [250]],
          ['uarr', [8593]],
          ['Uarr', [8607]],
          ['uArr', [8657]],
          ['Uarrocir', [10569]],
          ['Ubrcy', [1038]],
          ['ubrcy', [1118]],
          ['Ubreve', [364]],
          ['ubreve', [365]],
          ['Ucirc', [219]],
          ['ucirc', [251]],
          ['Ucy', [1059]],
          ['ucy', [1091]],
          ['udarr', [8645]],
          ['Udblac', [368]],
          ['udblac', [369]],
          ['udhar', [10606]],
          ['ufisht', [10622]],
          ['Ufr', [120088]],
          ['ufr', [120114]],
          ['Ugrave', [217]],
          ['ugrave', [249]],
          ['uHar', [10595]],
          ['uharl', [8639]],
          ['uharr', [8638]],
          ['uhblk', [9600]],
          ['ulcorn', [8988]],
          ['ulcorner', [8988]],
          ['ulcrop', [8975]],
          ['ultri', [9720]],
          ['Umacr', [362]],
          ['umacr', [363]],
          ['uml', [168]],
          ['UnderBar', [95]],
          ['UnderBrace', [9183]],
          ['UnderBracket', [9141]],
          ['UnderParenthesis', [9181]],
          ['Union', [8899]],
          ['UnionPlus', [8846]],
          ['Uogon', [370]],
          ['uogon', [371]],
          ['Uopf', [120140]],
          ['uopf', [120166]],
          ['UpArrowBar', [10514]],
          ['uparrow', [8593]],
          ['UpArrow', [8593]],
          ['Uparrow', [8657]],
          ['UpArrowDownArrow', [8645]],
          ['updownarrow', [8597]],
          ['UpDownArrow', [8597]],
          ['Updownarrow', [8661]],
          ['UpEquilibrium', [10606]],
          ['upharpoonleft', [8639]],
          ['upharpoonright', [8638]],
          ['uplus', [8846]],
          ['UpperLeftArrow', [8598]],
          ['UpperRightArrow', [8599]],
          ['upsi', [965]],
          ['Upsi', [978]],
          ['upsih', [978]],
          ['Upsilon', [933]],
          ['upsilon', [965]],
          ['UpTeeArrow', [8613]],
          ['UpTee', [8869]],
          ['upuparrows', [8648]],
          ['urcorn', [8989]],
          ['urcorner', [8989]],
          ['urcrop', [8974]],
          ['Uring', [366]],
          ['uring', [367]],
          ['urtri', [9721]],
          ['Uscr', [119984]],
          ['uscr', [120010]],
          ['utdot', [8944]],
          ['Utilde', [360]],
          ['utilde', [361]],
          ['utri', [9653]],
          ['utrif', [9652]],
          ['uuarr', [8648]],
          ['Uuml', [220]],
          ['uuml', [252]],
          ['uwangle', [10663]],
          ['vangrt', [10652]],
          ['varepsilon', [1013]],
          ['varkappa', [1008]],
          ['varnothing', [8709]],
          ['varphi', [981]],
          ['varpi', [982]],
          ['varpropto', [8733]],
          ['varr', [8597]],
          ['vArr', [8661]],
          ['varrho', [1009]],
          ['varsigma', [962]],
          ['varsubsetneq', [8842, 65024]],
          ['varsubsetneqq', [10955, 65024]],
          ['varsupsetneq', [8843, 65024]],
          ['varsupsetneqq', [10956, 65024]],
          ['vartheta', [977]],
          ['vartriangleleft', [8882]],
          ['vartriangleright', [8883]],
          ['vBar', [10984]],
          ['Vbar', [10987]],
          ['vBarv', [10985]],
          ['Vcy', [1042]],
          ['vcy', [1074]],
          ['vdash', [8866]],
          ['vDash', [8872]],
          ['Vdash', [8873]],
          ['VDash', [8875]],
          ['Vdashl', [10982]],
          ['veebar', [8891]],
          ['vee', [8744]],
          ['Vee', [8897]],
          ['veeeq', [8794]],
          ['vellip', [8942]],
          ['verbar', [124]],
          ['Verbar', [8214]],
          ['vert', [124]],
          ['Vert', [8214]],
          ['VerticalBar', [8739]],
          ['VerticalLine', [124]],
          ['VerticalSeparator', [10072]],
          ['VerticalTilde', [8768]],
          ['VeryThinSpace', [8202]],
          ['Vfr', [120089]],
          ['vfr', [120115]],
          ['vltri', [8882]],
          ['vnsub', [8834, 8402]],
          ['vnsup', [8835, 8402]],
          ['Vopf', [120141]],
          ['vopf', [120167]],
          ['vprop', [8733]],
          ['vrtri', [8883]],
          ['Vscr', [119985]],
          ['vscr', [120011]],
          ['vsubnE', [10955, 65024]],
          ['vsubne', [8842, 65024]],
          ['vsupnE', [10956, 65024]],
          ['vsupne', [8843, 65024]],
          ['Vvdash', [8874]],
          ['vzigzag', [10650]],
          ['Wcirc', [372]],
          ['wcirc', [373]],
          ['wedbar', [10847]],
          ['wedge', [8743]],
          ['Wedge', [8896]],
          ['wedgeq', [8793]],
          ['weierp', [8472]],
          ['Wfr', [120090]],
          ['wfr', [120116]],
          ['Wopf', [120142]],
          ['wopf', [120168]],
          ['wp', [8472]],
          ['wr', [8768]],
          ['wreath', [8768]],
          ['Wscr', [119986]],
          ['wscr', [120012]],
          ['xcap', [8898]],
          ['xcirc', [9711]],
          ['xcup', [8899]],
          ['xdtri', [9661]],
          ['Xfr', [120091]],
          ['xfr', [120117]],
          ['xharr', [10231]],
          ['xhArr', [10234]],
          ['Xi', [926]],
          ['xi', [958]],
          ['xlarr', [10229]],
          ['xlArr', [10232]],
          ['xmap', [10236]],
          ['xnis', [8955]],
          ['xodot', [10752]],
          ['Xopf', [120143]],
          ['xopf', [120169]],
          ['xoplus', [10753]],
          ['xotime', [10754]],
          ['xrarr', [10230]],
          ['xrArr', [10233]],
          ['Xscr', [119987]],
          ['xscr', [120013]],
          ['xsqcup', [10758]],
          ['xuplus', [10756]],
          ['xutri', [9651]],
          ['xvee', [8897]],
          ['xwedge', [8896]],
          ['Yacute', [221]],
          ['yacute', [253]],
          ['YAcy', [1071]],
          ['yacy', [1103]],
          ['Ycirc', [374]],
          ['ycirc', [375]],
          ['Ycy', [1067]],
          ['ycy', [1099]],
          ['yen', [165]],
          ['Yfr', [120092]],
          ['yfr', [120118]],
          ['YIcy', [1031]],
          ['yicy', [1111]],
          ['Yopf', [120144]],
          ['yopf', [120170]],
          ['Yscr', [119988]],
          ['yscr', [120014]],
          ['YUcy', [1070]],
          ['yucy', [1102]],
          ['yuml', [255]],
          ['Yuml', [376]],
          ['Zacute', [377]],
          ['zacute', [378]],
          ['Zcaron', [381]],
          ['zcaron', [382]],
          ['Zcy', [1047]],
          ['zcy', [1079]],
          ['Zdot', [379]],
          ['zdot', [380]],
          ['zeetrf', [8488]],
          ['ZeroWidthSpace', [8203]],
          ['Zeta', [918]],
          ['zeta', [950]],
          ['zfr', [120119]],
          ['Zfr', [8488]],
          ['ZHcy', [1046]],
          ['zhcy', [1078]],
          ['zigrarr', [8669]],
          ['zopf', [120171]],
          ['Zopf', [8484]],
          ['Zscr', [119989]],
          ['zscr', [120015]],
          ['zwj', [8205]],
          ['zwnj', [8204]],
        ],
        o = {},
        c = {};
      !(function (r, e) {
        var t = l.length;
        for (; t--; ) {
          var n,
            o = l[t],
            a = o[0],
            i = o[1],
            c = i[0],
            u = c < 32 || 126 < c || 62 === c || 60 === c || 38 === c || 34 === c || 39 === c,
            s = void 0;
          u && (s = e[c] = e[c] || {}),
            i[1]
              ? ((n = i[1]),
                (r[a] = String.fromCharCode(c) + String.fromCharCode(n)),
                u && (s[n] = a))
              : ((r[a] = String.fromCharCode(c)), u && (s[''] = a));
        }
      })(o, c);
      var n =
        ((a.prototype.decode = function (r) {
          return r && r.length
            ? r.replace(/&(#?[\w\d]+);?/g, function (r, e) {
                var t, n;
                return (
                  '#' === e.charAt(0)
                    ? ((n =
                        'x' === e.charAt(1)
                          ? parseInt(e.substr(2).toLowerCase(), 16)
                          : parseInt(e.substr(1))),
                      isNaN(n) || n < -32768 || 65535 < n || (t = String.fromCharCode(n)))
                    : (t = o[e]),
                  t || r
                );
              })
            : '';
        }),
        (a.decode = function (r) {
          return new a().decode(r);
        }),
        (a.prototype.encode = function (r) {
          if (!r || !r.length) return '';
          for (var e = r.length, t = '', n = 0; n < e; ) {
            var o = c[r.charCodeAt(n)];
            if (o) {
              var a = o[r.charCodeAt(n + 1)];
              if ((a ? n++ : (a = o['']), a)) {
                (t += '&' + a + ';'), n++;
                continue;
              }
            }
            (t += r.charAt(n)), n++;
          }
          return t;
        }),
        (a.encode = function (r) {
          return new a().encode(r);
        }),
        (a.prototype.encodeNonUTF = function (r) {
          if (!r || !r.length) return '';
          for (var e = r.length, t = '', n = 0; n < e; ) {
            var o = r.charCodeAt(n),
              a = c[o];
            if (a) {
              var i = a[r.charCodeAt(n + 1)];
              if ((i ? n++ : (i = a['']), i)) {
                (t += '&' + i + ';'), n++;
                continue;
              }
            }
            (t += o < 32 || 126 < o ? '&#' + o + ';' : r.charAt(n)), n++;
          }
          return t;
        }),
        (a.encodeNonUTF = function (r) {
          return new a().encodeNonUTF(r);
        }),
        (a.prototype.encodeNonASCII = function (r) {
          if (!r || !r.length) return '';
          for (var e = r.length, t = '', n = 0; n < e; ) {
            var o = r.charCodeAt(n);
            o <= 255 ? (t += r[n++]) : ((t += '&#' + o + ';'), n++);
          }
          return t;
        }),
        (a.encodeNonASCII = function (r) {
          return new a().encodeNonASCII(r);
        }),
        a);
      function a() {}
      e.Html5Entities = n;
    },
  ]);
  //# sourceMappingURL=mdbsnippet.min.js.map
  