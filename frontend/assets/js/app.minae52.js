/* uglified */
!(function (e) {
  function t(t) {
    for (var n, r, o = t[0], s = t[1], a = 0, c = []; a < o.length; a++)
      (r = o[a]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && c.push(i[r][0]),
        (i[r] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    for (l && l(t); c.length; ) c.shift()();
  }
  var n = {},
    i = { 8: 0 };
  function r(t) {
    if (n[t]) return n[t].exports;
    var i = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.e = function (e) {
    var t = [],
      n = i[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var o = new Promise(function (t, r) {
          n = i[e] = [t, r];
        });
        t.push((n[2] = o));
        var s,
          a = document.createElement("script");
        (a.charset = "utf-8"),
          (a.timeout = 120),
          r.nc && a.setAttribute("nonce", r.nc),
          (a.src = (function (e) {
            return (
              r.p +
              "/" +
              ({
                0: "careers",
                1: "reports",
                2: "vendors",
                3: "News",
                4: "boardMembers~projects",
                5: "contact",
                6: "esg",
                7: "Newsletter",
                9: "boardMembers",
                11: "business",
                14: "companyDetailContent",
                15: "companyDetailPage",
                16: "companyFeatureSlider",
                23: "homeBannerSlider",
                24: "homeBannerVideoSlider",
                27: "insightsSlider",
                29: "missionVision",
                31: "newsInsightsSlider",
                32: "newsSlider",
                36: "ourPrinciples",
                38: "privacyPolicy",
                40: "projects",
                41: "search",
                43: "stats",
                45: "teamMessages",
                47: "twoColContent",
                49: "videoBlock",
                51: "vimeoCta",
              }[e] || e) +
              ".bundle.js"
            );
          })(e));
        var l = new Error();
        s = function (t) {
          (a.onerror = a.onload = null), clearTimeout(c);
          var n = i[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = r),
                (l.request = o),
                n[1](l);
            }
            i[e] = void 0;
          }
        };
        var c = setTimeout(function () {
          s({ type: "timeout", target: a });
        }, 12e4);
        (a.onerror = a.onload = s), document.head.appendChild(a);
      }
    return Promise.all(t);
  }),
    (r.m = e),
    (r.c = n),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    (r.oe = function (e) {
      throw e;
    });
  var o = (window.webpackJsonp = window.webpackJsonp || []),
    s = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var a = 0; a < o.length; a++) t(o[a]);
  var l = s;
  r((r.s = 21));
})([
  function (e, t, n) {
    var i,
      r,
      o = {},
      s =
        ((i = function () {
          return window && document && document.all && !window.atob;
        }),
        function () {
          return void 0 === r && (r = i.apply(this, arguments)), r;
        }),
      a = (function (e) {
        var t = {};
        return function (e) {
          if ("function" == typeof e) return e();
          if (void 0 === t[e]) {
            var n = function (e) {
              return document.querySelector(e);
            }.call(this, e);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            t[e] = n;
          }
          return t[e];
        };
      })(),
      l = null,
      c = 0,
      u = [],
      p = n(1);
    function d(e, t) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n],
          r = o[i.id];
        if (r) {
          r.refs++;
          for (var s = 0; s < r.parts.length; s++) r.parts[s](i.parts[s]);
          for (; s < i.parts.length; s++) r.parts.push(y(i.parts[s], t));
        }
        else {
          var a = [];
          for (s = 0; s < i.parts.length; s++) a.push(y(i.parts[s], t));
          o[i.id] = { id: i.id, refs: 1, parts: a };
        }
      }
    }
    function h(e, t) {
      for (var n = [], i = {}, r = 0; r < e.length; r++) {
        var o = e[r],
          s = t.base ? o[0] + t.base : o[0],
          a = { css: o[1], media: o[2], sourceMap: o[3] };
        i[s] ? i[s].parts.push(a) : n.push((i[s] = { id: s, parts: [a] }));
      }
      return n;
    }
    function f(e, t) {
      var n = a(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var i = u[u.length - 1];
      if ("top" === e.insertAt)
        i
          ? i.nextSibling
            ? n.insertBefore(t, i.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          u.push(t);
      else if ("bottom" === e.insertAt) n.appendChild(t);
      else {
        if ("object" != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var r = a(e.insertInto + " " + e.insertAt.before);
        n.insertBefore(t, r);
      }
    }
    function g(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = u.indexOf(e);
      t >= 0 && u.splice(t, 1);
    }
    function m(e) {
      var t = document.createElement("style");
      return (e.attrs.type = "text/css"), v(t, e.attrs), f(e, t), t;
    }
    function v(e, t) {
      Object.keys(t).forEach(function (n) {
        e.setAttribute(n, t[n]);
      });
    }
    function y(e, t) {
      var n, i, r, o;
      if (t.transform && e.css) {
        if (!(o = t.transform(e.css))) return function () {};
        e.css = o;
      }
      if (t.singleton) {
        var s = c++;
        (n = l || (l = m(t))),
          (i = x.bind(null, n, s, !1)),
          (r = x.bind(null, n, s, !0));
      }
      else
        e.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((n = (function (e) {
              var t = document.createElement("link");
              return (
                (e.attrs.type = "text/css"),
                (e.attrs.rel = "stylesheet"),
                v(t, e.attrs),
                f(e, t),
                t
              );
            })(t)),
            (i = function (e, t, n) {
              var i = n.css,
                r = n.sourceMap,
                o = void 0 === t.convertToAbsoluteUrls && r;
              (t.convertToAbsoluteUrls || o) && (i = p(i));
              r &&
                (i +=
                  "\n/*# sourceMappingURL=data:application/json;base64," +
                  btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                  " */");
              var s = new Blob([i], { type: "text/css" }),
                a = e.href;
              (e.href = URL.createObjectURL(s)), a && URL.revokeObjectURL(a);
            }.bind(null, n, t)),
            (r = function () {
              g(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = m(t)),
            (i = function (e, t) {
              var n = t.css,
                i = t.media;
              i && e.setAttribute("media", i);
              if (e.styleSheet) e.styleSheet.cssText = n;
              else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
              }
            }.bind(null, n)),
            (r = function () {
              g(n);
            }));
      return (
        i(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            i((e = t));
          }
          else r();
        }
      );
    }
    e.exports = function (e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        );
      ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = s()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
      var n = h(e, t);
      return (
        d(n, t),
        function (e) {
          for (var i = [], r = 0; r < n.length; r++) {
            var s = n[r];
            (a = o[s.id]).refs--, i.push(a);
          }
          e && d(h(e, t), t);
          for (r = 0; r < i.length; r++) {
            var a;
            if (0 === (a = i[r]).refs) {
              for (var l = 0; l < a.parts.length; l++) a.parts[l]();
              delete o[a.id];
            }
          }
        }
      );
    };
    var b,
      w =
        ((b = []),
        function (e, t) {
          return (b[e] = t), b.filter(Boolean).join("\n");
        });
    function x(e, t, n, i) {
      var r = n ? "" : i.css;
      if (e.styleSheet) e.styleSheet.cssText = w(t, r);
      else {
        var o = document.createTextNode(r),
          s = e.childNodes;
        s[t] && e.removeChild(s[t]),
          s.length ? e.insertBefore(o, s[t]) : e.appendChild(o);
      }
    }
  },
  function (e, t) {
    e.exports = function (e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host,
        i = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function (e, t) {
          var r,
            o = t
              .trim()
              .replace(/^"(.*)"$/, function (e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function (e, t) {
                return t;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)
            ? e
            : ((r =
                0 === o.indexOf("//")
                  ? o
                  : 0 === o.indexOf("/")
                  ? n + o
                  : i + o.replace(/^\.\//, "")),
              "url(" + JSON.stringify(r) + ")");
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function r(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = t);
    }
    n.d(t, "a", function () {
      return Ti;
    });
    var o,
      s,
      a,
      l,
      c,
      u,
      p,
      d,
      h,
      f,
      g,
      m,
      v,
      y,
      b,
      w,
      x,
      _,
      C,
      k,
      T,
      A,
      S,
      E,
      P,
      O,
      L,
      D,
      M = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      I = { duration: 0.5, overwrite: !1, delay: 0 },
      $ = 1e-8,
      N = 2 * Math.PI,
      z = N / 4,
      j = 0,
      R = Math.sqrt,
      B = Math.cos,
      F = Math.sin,
      q = function (e) {
        return "string" == typeof e;
      },
      H = function (e) {
        return "function" == typeof e;
      },
      U = function (e) {
        return "number" == typeof e;
      },
      G = function (e) {
        return void 0 === e;
      },
      V = function (e) {
        return "object" == typeof e;
      },
      W = function (e) {
        return !1 !== e;
      },
      Y = function () {
        return "undefined" != typeof window;
      },
      X = function (e) {
        return H(e) || q(e);
      },
      K =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      Z = Array.isArray,
      Q = /(?:-?\.?\d|\.)+/gi,
      J = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      ee = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      te = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      ne = /[+-]=-?[.\d]+/,
      ie = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      re = /[\d.+\-=]+(?:e[-+]\d*)*/i,
      oe = {},
      se = {},
      ae = function (e) {
        return (se = De(e, oe)) && hn;
      },
      le = function (e, t) {
        return !t && void 0;
      },
      ce = function (e, t) {
        return (e && (oe[e] = t) && se && (se[e] = t)) || oe;
      },
      ue = function () {
        return 0;
      },
      pe = {},
      de = [],
      he = {},
      fe = {},
      ge = {},
      me = 30,
      ve = [],
      ye = "",
      be = function (e) {
        var t,
          n,
          i = e[0];
        if ((V(i) || H(i) || (e = [e]), !(t = (i._gsap || {}).harness))) {
          for (n = ve.length; n-- && !ve[n].targetTest(i); );
          t = ve[n];
        }
        for (n = e.length; n--; )
          (e[n] && (e[n]._gsap || (e[n]._gsap = new jt(e[n], t)))) ||
            e.splice(n, 1);
        return e;
      },
      we = function (e) {
        return e._gsap || be(ot(e))[0]._gsap;
      },
      xe = function (e, t, n) {
        return (n = e[t]) && H(n)
          ? e[t]()
          : (G(n) && e.getAttribute && e.getAttribute(t)) || n;
      },
      _e = function (e, t) {
        return (e = e.split(",")).forEach(t) || e;
      },
      Ce = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      },
      ke = function (e, t) {
        for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; );
        return i < n;
      },
      Te = function (e, t, n) {
        var i,
          r = U(e[1]),
          o = (r ? 2 : 1) + (t < 2 ? 0 : 1),
          s = e[o];
        if ((r && (s.duration = e[1]), (s.parent = n), t)) {
          for (i = s; n && !("immediateRender" in i); )
            (i = n.vars.defaults || {}), (n = W(n.vars.inherit) && n.parent);
          (s.immediateRender = W(i.immediateRender)),
            t < 2 ? (s.runBackwards = 1) : (s.startAt = e[o - 1]);
        }
        return s;
      },
      Ae = function () {
        var e,
          t,
          n = de.length,
          i = de.slice(0);
        for (he = {}, de.length = 0, e = 0; e < n; e++)
          (t = i[e]) &&
            t._lazy &&
            (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
      },
      Se = function (e, t, n, i) {
        de.length && Ae(), e.render(t, n, i), de.length && Ae();
      },
      Ee = function (e) {
        var t = parseFloat(e);
        return (t || 0 === t) && (e + "").match(ie).length < 2
          ? t
          : q(e)
          ? e.trim()
          : e;
      },
      Pe = function (e) {
        return e;
      },
      Oe = function (e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e;
      },
      Le = function (e, t) {
        for (var n in t)
          n in e || "duration" === n || "ease" === n || (e[n] = t[n]);
      },
      De = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      },
      Me = function e(t, n) {
        for (var i in n)
          "__proto__" !== i &&
            "constructor" !== i &&
            "prototype" !== i &&
            (t[i] = V(n[i]) ? e(t[i] || (t[i] = {}), n[i]) : n[i]);
        return t;
      },
      Ie = function (e, t) {
        var n,
          i = {};
        for (n in e) n in t || (i[n] = e[n]);
        return i;
      },
      $e = function (e) {
        var t = e.parent || s,
          n = e.keyframes ? Le : Oe;
        if (W(e.inherit))
          for (; t; ) n(e, t.vars.defaults), (t = t.parent || t._dp);
        return e;
      },
      Ne = function (e, t, n, i) {
        void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
        var r = t._prev,
          o = t._next;
        r ? (r._next = o) : e[n] === t && (e[n] = o),
          o ? (o._prev = r) : e[i] === t && (e[i] = r),
          (t._next = t._prev = t.parent = null);
      },
      ze = function (e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
          (e._act = 0);
      },
      je = function (e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
          for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
        return e;
      },
      Re = function e(t) {
        return !t || (t._ts && e(t.parent));
      },
      Be = function (e) {
        return e._repeat ? Fe(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
      },
      Fe = function (e, t) {
        var n = Math.floor((e /= t));
        return e && n === e ? n - 1 : n;
      },
      qe = function (e, t) {
        return (
          (e - t._start) * t._ts +
          (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        );
      },
      He = function (e) {
        return (e._end = Ce(
          e._start + (e._tDur / Math.abs(e._ts || e._rts || $) || 0)
        ));
      },
      Ue = function (e, t) {
        var n = e._dp;
        return (
          n &&
            n.smoothChildTiming &&
            e._ts &&
            ((e._start = Ce(
              n._time -
                (e._ts > 0
                  ? t / e._ts
                  : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
            )),
            He(e),
            n._dirty || je(n, e)),
          e
        );
      },
      Ge = function (e, t) {
        var n;
        if (
          ((t._time || (t._initted && !t._dur)) &&
            ((n = qe(e.rawTime(), t)),
            (!t._dur || et(0, t.totalDuration(), n) - t._tTime > $) &&
              t.render(n, !0)),
          je(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
        ) {
          if (e._dur < e.duration())
            for (n = e; n._dp; )
              n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
          e._zTime = -$;
        }
      },
      Ve = function (e, t, n, i) {
        return (
          t.parent && ze(t),
          (t._start = Ce(n + t._delay)),
          (t._end = Ce(
            t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
          )),
          (function (e, t, n, i, r) {
            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
            var o,
              s = e[i];
            if (r) for (o = t[r]; s && s[r] > o; ) s = s._prev;
            s
              ? ((t._next = s._next), (s._next = t))
              : ((t._next = e[n]), (e[n] = t)),
              t._next ? (t._next._prev = t) : (e[i] = t),
              (t._prev = s),
              (t.parent = t._dp = e);
          })(e, t, "_first", "_last", e._sort ? "_start" : 0),
          (e._recent = t),
          i || Ge(e, t),
          e
        );
      },
      We = function (e, t) {
        return oe.ScrollTrigger ? oe.ScrollTrigger.create(t, e) : void 0;
      },
      Ye = function (e, t, n, i) {
        return (
          Ut(e, t),
          e._initted
            ? !n &&
              e._pt &&
              ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
              p !== Tt.frame
              ? (de.push(e), (e._lazy = [t, i]), 1)
              : void 0
            : 1
        );
      },
      Xe = function (e, t, n, i) {
        var r = e._repeat,
          o = Ce(t) || 0,
          s = e._tTime / e._tDur;
        return (
          s && !i && (e._time *= o / e._dur),
          (e._dur = o),
          (e._tDur = r ? (r < 0 ? 1e10 : Ce(o * (r + 1) + e._rDelay * r)) : o),
          s && !i ? Ue(e, (e._tTime = e._tDur * s)) : e.parent && He(e),
          n || je(e.parent, e),
          e
        );
      },
      Ke = function (e) {
        return e instanceof Bt ? je(e) : Xe(e, e._dur);
      },
      Ze = { _start: 0, endTime: ue },
      Qe = function e(t, n) {
        var i,
          r,
          o = t.labels,
          s = t._recent || Ze,
          a = t.duration() >= 1e8 ? s.endTime(!1) : t._dur;
        return q(n) && (isNaN(n) || n in o)
          ? "<" === (i = n.charAt(0)) || ">" === i
            ? ("<" === i ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0)
            : (i = n.indexOf("=")) < 0
            ? (n in o || (o[n] = a), o[n])
            : ((r = +(n.charAt(i - 1) + n.substr(i + 1))),
              i > 1 ? e(t, n.substr(0, i - 1)) + r : a + r)
          : null == n
          ? a
          : +n;
      },
      Je = function (e, t) {
        return e || 0 === e ? t(e) : t;
      },
      et = function (e, t, n) {
        return n < e ? e : n > t ? t : n;
      },
      tt = function (e) {
        if ("string" != typeof e) return "";
        var t = re.exec(e);
        return t ? e.substr(t.index + t[0].length) : "";
      },
      nt = [].slice,
      it = function (e, t) {
        return (
          e &&
          V(e) &&
          "length" in e &&
          ((!t && !e.length) || (e.length - 1 in e && V(e[0]))) &&
          !e.nodeType &&
          e !== a
        );
      },
      rt = function (e, t, n) {
        return (
          void 0 === n && (n = []),
          e.forEach(function (e) {
            var i;
            return (q(e) && !t) || it(e, 1)
              ? (i = n).push.apply(i, ot(e))
              : n.push(e);
          }) || n
        );
      },
      ot = function (e, t) {
        return !q(e) || t || (!l && At())
          ? Z(e)
            ? rt(e, t)
            : it(e)
            ? nt.call(e, 0)
            : e
            ? [e]
            : []
          : nt.call(c.querySelectorAll(e), 0);
      },
      st = function (e) {
        return e.sort(function () {
          return 0.5 - Math.random();
        });
      },
      at = function (e) {
        if (H(e)) return e;
        var t = V(e) ? e : { each: e },
          n = Mt(t.ease),
          i = t.from || 0,
          r = parseFloat(t.base) || 0,
          o = {},
          s = i > 0 && i < 1,
          a = isNaN(i) || s,
          l = t.axis,
          c = i,
          u = i;
        return (
          q(i)
            ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
            : !s && a && ((c = i[0]), (u = i[1])),
          function (e, s, p) {
            var d,
              h,
              f,
              g,
              m,
              v,
              y,
              b,
              w,
              x = (p || t).length,
              _ = o[x];
            if (!_) {
              if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, 1e8])[1])) {
                for (
                  y = -1e8;
                  y < (y = p[w++].getBoundingClientRect().left) && w < x;

                );
                w--;
              }
              for (
                _ = o[x] = [],
                  d = a ? Math.min(w, x) * c - 0.5 : i % w,
                  h = a ? (x * u) / w - 0.5 : (i / w) | 0,
                  y = 0,
                  b = 1e8,
                  v = 0;
                v < x;
                v++
              )
                (f = (v % w) - d),
                  (g = h - ((v / w) | 0)),
                  (_[v] = m =
                    l ? Math.abs("y" === l ? g : f) : R(f * f + g * g)),
                  m > y && (y = m),
                  m < b && (b = m);
              "random" === i && st(_),
                (_.max = y - b),
                (_.min = b),
                (_.v = x =
                  (parseFloat(t.amount) ||
                    parseFloat(t.each) *
                      (w > x
                        ? x - 1
                        : l
                        ? "y" === l
                          ? x / w
                          : w
                        : Math.max(w, x / w)) ||
                    0) * ("edges" === i ? -1 : 1)),
                (_.b = x < 0 ? r - x : r),
                (_.u = tt(t.amount || t.each) || 0),
                (n = n && x < 0 ? Lt(n) : n);
            }
            return (
              (x = (_[e] - _.min) / _.max || 0),
              Ce(_.b + (n ? n(x) : x) * _.v) + _.u
            );
          }
        );
      },
      lt = function (e) {
        var t = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
        return function (n) {
          var i = Math.round(parseFloat(n) / e) * e * t;
          return (i - (i % 1)) / t + (U(n) ? 0 : tt(n));
        };
      },
      ct = function (e, t) {
        var n,
          i,
          r = Z(e);
        return (
          !r &&
            V(e) &&
            ((n = r = e.radius || 1e8),
            e.values
              ? ((e = ot(e.values)), (i = !U(e[0])) && (n *= n))
              : (e = lt(e.increment))),
          Je(
            t,
            r
              ? H(e)
                ? function (t) {
                    return (i = e(t)), Math.abs(i - t) <= n ? i : t;
                  }
                : function (t) {
                    for (
                      var r,
                        o,
                        s = parseFloat(i ? t.x : t),
                        a = parseFloat(i ? t.y : 0),
                        l = 1e8,
                        c = 0,
                        u = e.length;
                      u--;

                    )
                      (r = i
                        ? (r = e[u].x - s) * r + (o = e[u].y - a) * o
                        : Math.abs(e[u] - s)) < l && ((l = r), (c = u));
                    return (
                      (c = !n || l <= n ? e[c] : t),
                      i || c === t || U(t) ? c : c + tt(t)
                    );
                  }
              : lt(e)
          )
        );
      },
      ut = function (e, t, n, i) {
        return Je(Z(e) ? !t : !0 === n ? !!(n = 0) : !i, function () {
          return Z(e)
            ? e[~~(Math.random() * e.length)]
            : (n = n || 1e-5) &&
                (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n
                  ) *
                    n *
                    i
                ) / i;
        });
      },
      pt = function (e, t, n) {
        return Je(n, function (n) {
          return e[~~t(n)];
        });
      },
      dt = function (e) {
        for (var t, n, i, r, o = 0, s = ""; ~(t = e.indexOf("random(", o)); )
          (i = e.indexOf(")", t)),
            (r = "[" === e.charAt(t + 7)),
            (n = e.substr(t + 7, i - t - 7).match(r ? ie : Q)),
            (s +=
              e.substr(o, t - o) +
              ut(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5)),
            (o = i + 1);
        return s + e.substr(o, e.length - o);
      },
      ht = function (e, t, n, i, r) {
        var o = t - e,
          s = i - n;
        return Je(r, function (t) {
          return n + (((t - e) / o) * s || 0);
        });
      },
      ft = function (e, t, n) {
        var i,
          r,
          o,
          s = e.labels,
          a = 1e8;
        for (i in s)
          (r = s[i] - t) < 0 == !!n &&
            r &&
            a > (r = Math.abs(r)) &&
            ((o = i), (a = r));
        return o;
      },
      gt = function (e, t, n) {
        var i,
          r,
          o = e.vars,
          s = o[t];
        if (s)
          return (
            (i = o[t + "Params"]),
            (r = o.callbackScope || e),
            n && de.length && Ae(),
            i ? s.apply(r, i) : s.call(r)
          );
      },
      mt = function (e) {
        return (
          ze(e),
          e.scrollTrigger && e.scrollTrigger.kill(!1),
          e.progress() < 1 && gt(e, "onInterrupt"),
          e
        );
      },
      vt = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0],
      },
      yt = function (e, t, n) {
        return (
          (255 *
            (6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1
              ? t + (n - t) * e * 6
              : e < 0.5
              ? n
              : 3 * e < 2
              ? t + (n - t) * (2 / 3 - e) * 6
              : t) +
            0.5) |
          0
        );
      },
      bt = function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u,
          p,
          d,
          h = e ? (U(e) ? [e >> 16, (e >> 8) & 255, 255 & e] : 0) : vt.black;
        if (!h) {
          if (("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), vt[e]))
            h = vt[e];
          else if ("#" === e.charAt(0)) {
            if (
              (e.length < 6 &&
                (e =
                  "#" +
                  (i = e.charAt(1)) +
                  i +
                  (r = e.charAt(2)) +
                  r +
                  (o = e.charAt(3)) +
                  o +
                  (5 === e.length ? e.charAt(4) + e.charAt(4) : "")),
              9 === e.length)
            )
              return [
                (h = parseInt(e.substr(1, 6), 16)) >> 16,
                (h >> 8) & 255,
                255 & h,
                parseInt(e.substr(7), 16) / 255,
              ];
            h = [
              (e = parseInt(e.substr(1), 16)) >> 16,
              (e >> 8) & 255,
              255 & e,
            ];
          }
          else if ("hsl" === e.substr(0, 3))
            if (((h = d = e.match(Q)), t)) {
              if (~e.indexOf("="))
                return (h = e.match(J)), n && h.length < 4 && (h[3] = 1), h;
            }
            else
              (s = (+h[0] % 360) / 360),
                (a = +h[1] / 100),
                (i =
                  2 * (l = +h[2] / 100) -
                  (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                h.length > 3 && (h[3] *= 1),
                (h[0] = yt(s + 1 / 3, i, r)),
                (h[1] = yt(s, i, r)),
                (h[2] = yt(s - 1 / 3, i, r));
          else h = e.match(Q) || vt.transparent;
          h = h.map(Number);
        }
        return (
          t &&
            !d &&
            ((i = h[0] / 255),
            (r = h[1] / 255),
            (o = h[2] / 255),
            (l = ((c = Math.max(i, r, o)) + (u = Math.min(i, r, o))) / 2),
            c === u
              ? (s = a = 0)
              : ((p = c - u),
                (a = l > 0.5 ? p / (2 - c - u) : p / (c + u)),
                (s =
                  c === i
                    ? (r - o) / p + (r < o ? 6 : 0)
                    : c === r
                    ? (o - i) / p + 2
                    : (i - r) / p + 4),
                (s *= 60)),
            (h[0] = ~~(s + 0.5)),
            (h[1] = ~~(100 * a + 0.5)),
            (h[2] = ~~(100 * l + 0.5))),
          n && h.length < 4 && (h[3] = 1),
          h
        );
      },
      wt = function (e) {
        var t = [],
          n = [],
          i = -1;
        return (
          e.split(_t).forEach(function (e) {
            var r = e.match(ee) || [];
            t.push.apply(t, r), n.push((i += r.length + 1));
          }),
          (t.c = n),
          t
        );
      },
      xt = function (e, t, n) {
        var i,
          r,
          o,
          s,
          a = "",
          l = (e + a).match(_t),
          c = t ? "hsla(" : "rgba(",
          u = 0;
        if (!l) return e;
        if (
          ((l = l.map(function (e) {
            return (
              (e = bt(e, t, 1)) &&
              c +
                (t
                  ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                  : e.join(",")) +
                ")"
            );
          })),
          n && ((o = wt(e)), (i = n.c).join(a) !== o.c.join(a)))
        )
          for (s = (r = e.replace(_t, "1").split(ee)).length - 1; u < s; u++)
            a +=
              r[u] +
              (~i.indexOf(u)
                ? l.shift() || c + "0,0,0,0)"
                : (o.length ? o : l.length ? l : n).shift());
        if (!r)
          for (s = (r = e.split(_t)).length - 1; u < s; u++) a += r[u] + l[u];
        return a + r[s];
      },
      _t = (function () {
        var e,
          t =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (e in vt) t += "|" + e + "\\b";
        return new RegExp(t + ")", "gi");
      })(),
      Ct = /hsl[a]?\(/,
      kt = function (e) {
        var t,
          n = e.join(" ");
        if (((_t.lastIndex = 0), _t.test(n)))
          return (
            (t = Ct.test(n)),
            (e[1] = xt(e[1], t)),
            (e[0] = xt(e[0], t, wt(e[1]))),
            !0
          );
      },
      Tt =
        ((w = Date.now),
        (x = 500),
        (_ = 33),
        (C = w()),
        (k = C),
        (A = T = 1e3 / 240),
        (E = function e(t) {
          var n,
            i,
            r,
            o,
            s = w() - k,
            a = !0 === t;
          if (
            (s > x && (C += s - _),
            ((n = (r = (k += s) - C) - A) > 0 || a) &&
              ((o = ++v.frame),
              (y = r - 1e3 * v.time),
              (v.time = r /= 1e3),
              (A += n + (n >= T ? 4 : T - n)),
              (i = 1)),
            a || (f = g(e)),
            i)
          )
            for (b = 0; b < S.length; b++) S[b](r, y, o, t);
        }),
        (v = {
          time: 0,
          frame: 0,
          tick: function () {
            E(!0);
          },
          deltaRatio: function (e) {
            return y / (1e3 / (e || 60));
          },
          wake: function () {
            u &&
              (!l &&
                Y() &&
                ((a = l = window),
                (c = a.document || {}),
                (oe.gsap = hn),
                (a.gsapVersions || (a.gsapVersions = [])).push(hn.version),
                ae(se || a.GreenSockGlobals || (!a.gsap && a) || {}),
                (m = a.requestAnimationFrame)),
              f && v.sleep(),
              (g =
                m ||
                function (e) {
                  return setTimeout(e, (A - 1e3 * v.time + 1) | 0);
                }),
              (h = 1),
              E(2));
          },
          sleep: function () {
            (m ? a.cancelAnimationFrame : clearTimeout)(f), (h = 0), (g = ue);
          },
          lagSmoothing: function (e, t) {
            (x = e || 1 / $), (_ = Math.min(t, x, 0));
          },
          fps: function (e) {
            (T = 1e3 / (e || 240)), (A = 1e3 * v.time + T);
          },
          add: function (e) {
            S.indexOf(e) < 0 && S.push(e), At();
          },
          remove: function (e) {
            var t;
            ~(t = S.indexOf(e)) && S.splice(t, 1) && b >= t && b--;
          },
          _listeners: (S = []),
        })),
      At = function () {
        return !h && Tt.wake();
      },
      St = {},
      Et = /^[\d.\-M][\d.\-,\s]/,
      Pt = /["']/g,
      Ot = function (e) {
        var t,
          n,
          i,
          r,
          o = (e + "").split("("),
          s = St[o[0]];
        return s && o.length > 1 && s.config
          ? s.config.apply(
              null,
              ~e.indexOf("{")
                ? [
                    (function (e) {
                      for (
                        var t,
                          n,
                          i,
                          r = {},
                          o = e.substr(1, e.length - 3).split(":"),
                          s = o[0],
                          a = 1,
                          l = o.length;
                        a < l;
                        a++
                      )
                        (n = o[a]),
                          (t = a !== l - 1 ? n.lastIndexOf(",") : n.length),
                          (i = n.substr(0, t)),
                          (r[s] = isNaN(i) ? i.replace(Pt, "").trim() : +i),
                          (s = n.substr(t + 1).trim());
                      return r;
                    })(o[1]),
                  ]
                : ((t = e),
                  (n = t.indexOf("(") + 1),
                  (i = t.indexOf(")")),
                  (r = t.indexOf("(", n)),
                  t.substring(n, ~r && r < i ? t.indexOf(")", i + 1) : i))
                    .split(",")
                    .map(Ee)
            )
          : St._CE && Et.test(e)
          ? St._CE("", e)
          : s;
      },
      Lt = function (e) {
        return function (t) {
          return 1 - e(1 - t);
        };
      },
      Dt = function e(t, n) {
        for (var i, r = t._first; r; )
          r instanceof Bt
            ? e(r, n)
            : !r.vars.yoyoEase ||
              (r._yoyo && r._repeat) ||
              r._yoyo === n ||
              (r.timeline
                ? e(r.timeline, n)
                : ((i = r._ease),
                  (r._ease = r._yEase),
                  (r._yEase = i),
                  (r._yoyo = n))),
            (r = r._next);
      },
      Mt = function (e, t) {
        return (e && (H(e) ? e : St[e] || Ot(e))) || t;
      },
      It = function (e, t, n, i) {
        void 0 === n &&
          (n = function (e) {
            return 1 - t(1 - e);
          }),
          void 0 === i &&
            (i = function (e) {
              return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
            });
        var r,
          o = { easeIn: t, easeOut: n, easeInOut: i };
        return (
          _e(e, function (e) {
            for (var t in ((St[e] = oe[e] = o),
            (St[(r = e.toLowerCase())] = n),
            o))
              St[
                r +
                  ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")
              ] = St[e + "." + t] = o[t];
          }),
          o
        );
      },
      $t = function (e) {
        return function (t) {
          return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
        };
      },
      Nt = function e(t, n, i) {
        var r = n >= 1 ? n : 1,
          o = (i || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
          s = (o / N) * (Math.asin(1 / r) || 0),
          a = function (e) {
            return 1 === e ? 1 : r * Math.pow(2, -10 * e) * F((e - s) * o) + 1;
          },
          l =
            "out" === t
              ? a
              : "in" === t
              ? function (e) {
                  return 1 - a(1 - e);
                }
              : $t(a);
        return (
          (o = N / o),
          (l.config = function (n, i) {
            return e(t, n, i);
          }),
          l
        );
      },
      zt = function e(t, n) {
        void 0 === n && (n = 1.70158);
        var i = function (e) {
            return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
          },
          r =
            "out" === t
              ? i
              : "in" === t
              ? function (e) {
                  return 1 - i(1 - e);
                }
              : $t(i);
        return (
          (r.config = function (n) {
            return e(t, n);
          }),
          r
        );
      };
    _e("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
      var n = t < 5 ? t + 1 : t;
      It(
        e + ",Power" + (n - 1),
        t
          ? function (e) {
              return Math.pow(e, n);
            }
          : function (e) {
              return e;
            },
        function (e) {
          return 1 - Math.pow(1 - e, n);
        },
        function (e) {
          return e < 0.5
            ? Math.pow(2 * e, n) / 2
            : 1 - Math.pow(2 * (1 - e), n) / 2;
        }
      );
    }),
      (St.Linear.easeNone = St.none = St.Linear.easeIn),
      It("Elastic", Nt("in"), Nt("out"), Nt()),
      (P = 7.5625),
      (L = 1 / (O = 2.75)),
      It(
        "Bounce",
        function (e) {
          return 1 - D(1 - e);
        },
        (D = function (e) {
          return e < L
            ? P * e * e
            : e < 0.7272727272727273
            ? P * Math.pow(e - 1.5 / O, 2) + 0.75
            : e < 0.9090909090909092
            ? P * (e -= 2.25 / O) * e + 0.9375
            : P * Math.pow(e - 2.625 / O, 2) + 0.984375;
        })
      ),
      It("Expo", function (e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0;
      }),
      It("Circ", function (e) {
        return -(R(1 - e * e) - 1);
      }),
      It("Sine", function (e) {
        return 1 === e ? 1 : 1 - B(e * z);
      }),
      It("Back", zt("in"), zt("out"), zt()),
      (St.SteppedEase =
        St.steps =
        oe.SteppedEase =
          {
            config: function (e, t) {
              void 0 === e && (e = 1);
              var n = 1 / e,
                i = e + (t ? 0 : 1),
                r = t ? 1 : 0,
                o = 1 - $;
              return function (e) {
                return (((i * et(0, o, e)) | 0) + r) * n;
              };
            },
          }),
      (I.ease = St["quad.out"]),
      _e(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (e) {
          return (ye += e + "," + e + "Params,");
        }
      );
    var jt = function (e, t) {
        (this.id = j++),
          (e._gsap = this),
          (this.target = e),
          (this.harness = t),
          (this.get = t ? t.get : xe),
          (this.set = t ? t.getSetter : Jt);
      },
      Rt = (function () {
        function e(e, t) {
          var n = e.parent || s;
          (this.vars = e),
            (this._delay = +e.delay || 0),
            (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
              ((this._rDelay = e.repeatDelay || 0),
              (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
            (this._ts = 1),
            Xe(this, +e.duration, 1, 1),
            (this.data = e.data),
            h || Tt.wake(),
            n && Ve(n, this, t || 0 === t ? t : n._time, 1),
            e.reversed && this.reverse(),
            e.paused && this.paused(!0);
        }
        var t = e.prototype;
        return (
          (t.delay = function (e) {
            return e || 0 === e
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + e - this._delay),
                (this._delay = e),
                this)
              : this._delay;
          }),
          (t.duration = function (e) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
                )
              : this.totalDuration() && this._dur;
          }),
          (t.totalDuration = function (e) {
            return arguments.length
              ? ((this._dirty = 0),
                Xe(
                  this,
                  this._repeat < 0
                    ? e
                    : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                ))
              : this._tDur;
          }),
          (t.totalTime = function (e, t) {
            if ((At(), !arguments.length)) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (Ue(this, e), !n._dp || n.parent || Ge(n, this); n.parent; )
                n.parent._time !==
                  n._start +
                    (n._ts >= 0
                      ? n._tTime / n._ts
                      : (n.totalDuration() - n._tTime) / -n._ts) &&
                  n.totalTime(n._tTime, !0),
                  (n = n.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && e < this._tDur) ||
                  (this._ts < 0 && e > 0) ||
                  (!this._tDur && !e)) &&
                Ve(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== e ||
                (!this._dur && !t) ||
                (this._initted && Math.abs(this._zTime) === $) ||
                (!e && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = e), Se(this, e, t)),
              this
            );
          }),
          (t.time = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), e + Be(this)) % this._dur ||
                    (e ? this._dur : 0),
                  t
                )
              : this._time;
          }),
          (t.totalProgress = function (e, t) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * e, t)
              : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.ratio;
          }),
          (t.progress = function (e, t) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                    Be(this),
                  t
                )
              : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.ratio;
          }),
          (t.iteration = function (e, t) {
            var n = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (e - 1) * n, t)
              : this._repeat
              ? Fe(this._tTime, n) + 1
              : 1;
          }),
          (t.timeScale = function (e) {
            if (!arguments.length) return this._rts === -$ ? 0 : this._rts;
            if (this._rts === e) return this;
            var t =
              this.parent && this._ts
                ? qe(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +e || 0),
              (this._ts = this._ps || e === -$ ? 0 : this._rts),
              (function (e) {
                for (var t = e.parent; t && t.parent; )
                  (t._dirty = 1), t.totalDuration(), (t = t.parent);
                return e;
              })(this.totalTime(et(-this._delay, this._tDur, t), !0))
            );
          }),
          (t.paused = function (e) {
            return arguments.length
              ? (this._ps !== e &&
                  ((this._ps = e),
                  e
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (At(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          (this._tTime -= $) &&
                          Math.abs(this._zTime) !== $
                      ))),
                this)
              : this._ps;
          }),
          (t.startTime = function (e) {
            if (arguments.length) {
              this._start = e;
              var t = this.parent || this._dp;
              return (
                t && (t._sort || !this.parent) && Ve(t, this, e - this._delay),
                this
              );
            }
            return this._start;
          }),
          (t.endTime = function (e) {
            return (
              this._start +
              (W(e) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts)
            );
          }),
          (t.rawTime = function (e) {
            var t = this.parent || this._dp;
            return t
              ? e &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                ? qe(t.rawTime(e), this)
                : this._tTime
              : this._tTime;
          }),
          (t.globalTime = function (e) {
            for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
              (n = t._start + n / (t._ts || 1)), (t = t._dp);
            return n;
          }),
          (t.repeat = function (e) {
            return arguments.length
              ? ((this._repeat = e === 1 / 0 ? -2 : e), Ke(this))
              : -2 === this._repeat
              ? 1 / 0
              : this._repeat;
          }),
          (t.repeatDelay = function (e) {
            return arguments.length
              ? ((this._rDelay = e), Ke(this))
              : this._rDelay;
          }),
          (t.yoyo = function (e) {
            return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
          }),
          (t.seek = function (e, t) {
            return this.totalTime(Qe(this, e), W(t));
          }),
          (t.restart = function (e, t) {
            return this.play().totalTime(e ? -this._delay : 0, W(t));
          }),
          (t.play = function (e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
          }),
          (t.reverse = function (e, t) {
            return (
              null != e && this.seek(e || this.totalDuration(), t),
              this.reversed(!0).paused(!1)
            );
          }),
          (t.pause = function (e, t) {
            return null != e && this.seek(e, t), this.paused(!0);
          }),
          (t.resume = function () {
            return this.paused(!1);
          }),
          (t.reversed = function (e) {
            return arguments.length
              ? (!!e !== this.reversed() &&
                  this.timeScale(-this._rts || (e ? -$ : 0)),
                this)
              : this._rts < 0;
          }),
          (t.invalidate = function () {
            return (this._initted = this._act = 0), (this._zTime = -$), this;
          }),
          (t.isActive = function () {
            var e,
              t = this.parent || this._dp,
              n = this._start;
            return !(
              t &&
              !(
                this._ts &&
                this._initted &&
                t.isActive() &&
                (e = t.rawTime(!0)) >= n &&
                e < this.endTime(!0) - $
              )
            );
          }),
          (t.eventCallback = function (e, t, n) {
            var i = this.vars;
            return arguments.length > 1
              ? (t
                  ? ((i[e] = t),
                    n && (i[e + "Params"] = n),
                    "onUpdate" === e && (this._onUpdate = t))
                  : delete i[e],
                this)
              : i[e];
          }),
          (t.then = function (e) {
            var t = this;
            return new Promise(function (n) {
              var i = H(e) ? e : Pe,
                r = function () {
                  var e = t.then;
                  (t.then = null),
                    H(i) && (i = i(t)) && (i.then || i === t) && (t.then = e),
                    n(i),
                    (t.then = e);
                };
              (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
              (!t._tTime && t._ts < 0)
                ? r()
                : (t._prom = r);
            });
          }),
          (t.kill = function () {
            mt(this);
          }),
          e
        );
      })();
    Oe(Rt.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -$,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var Bt = (function (e) {
      function t(t, n) {
        var r;
        return (
          void 0 === t && (t = {}),
          ((r = e.call(this, t, n) || this).labels = {}),
          (r.smoothChildTiming = !!t.smoothChildTiming),
          (r.autoRemoveChildren = !!t.autoRemoveChildren),
          (r._sort = W(t.sortChildren)),
          r.parent && Ge(r.parent, i(r)),
          t.scrollTrigger && We(i(r), t.scrollTrigger),
          r
        );
      }
      r(t, e);
      var n = t.prototype;
      return (
        (n.to = function (e, t, n) {
          return (
            new Yt(
              e,
              Te(arguments, 0, this),
              Qe(this, U(t) ? arguments[3] : n)
            ),
            this
          );
        }),
        (n.from = function (e, t, n) {
          return (
            new Yt(
              e,
              Te(arguments, 1, this),
              Qe(this, U(t) ? arguments[3] : n)
            ),
            this
          );
        }),
        (n.fromTo = function (e, t, n, i) {
          return (
            new Yt(
              e,
              Te(arguments, 2, this),
              Qe(this, U(t) ? arguments[4] : i)
            ),
            this
          );
        }),
        (n.set = function (e, t, n) {
          return (
            (t.duration = 0),
            (t.parent = this),
            $e(t).repeatDelay || (t.repeat = 0),
            (t.immediateRender = !!t.immediateRender),
            new Yt(e, t, Qe(this, n), 1),
            this
          );
        }),
        (n.call = function (e, t, n) {
          return Ve(this, Yt.delayedCall(0, e, t), Qe(this, n));
        }),
        (n.staggerTo = function (e, t, n, i, r, o, s) {
          return (
            (n.duration = t),
            (n.stagger = n.stagger || i),
            (n.onComplete = o),
            (n.onCompleteParams = s),
            (n.parent = this),
            new Yt(e, n, Qe(this, r)),
            this
          );
        }),
        (n.staggerFrom = function (e, t, n, i, r, o, s) {
          return (
            (n.runBackwards = 1),
            ($e(n).immediateRender = W(n.immediateRender)),
            this.staggerTo(e, t, n, i, r, o, s)
          );
        }),
        (n.staggerFromTo = function (e, t, n, i, r, o, s, a) {
          return (
            (i.startAt = n),
            ($e(i).immediateRender = W(i.immediateRender)),
            this.staggerTo(e, t, i, r, o, s, a)
          );
        }),
        (n.render = function (e, t, n) {
          var i,
            r,
            o,
            a,
            l,
            c,
            u,
            p,
            d,
            h,
            f,
            g,
            m = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            y = this._dur,
            b = this !== s && e > v - $ && e >= 0 ? v : e < $ ? 0 : e,
            w = this._zTime < 0 != e < 0 && (this._initted || !y);
          if (b !== this._tTime || n || w) {
            if (
              (m !== this._time &&
                y &&
                ((b += this._time - m), (e += this._time - m)),
              (i = b),
              (d = this._start),
              (c = !(p = this._ts)),
              w && (y || (m = this._zTime), (e || !t) && (this._zTime = e)),
              this._repeat)
            ) {
              if (
                ((f = this._yoyo),
                (l = y + this._rDelay),
                this._repeat < -1 && e < 0)
              )
                return this.totalTime(100 * l + e, t, n);
              if (
                ((i = Ce(b % l)),
                b === v
                  ? ((a = this._repeat), (i = y))
                  : ((a = ~~(b / l)) && a === b / l && ((i = y), a--),
                    i > y && (i = y)),
                (h = Fe(this._tTime, l)),
                !m && this._tTime && h !== a && (h = a),
                f && 1 & a && ((i = y - i), (g = 1)),
                a !== h && !this._lock)
              ) {
                var x = f && 1 & h,
                  _ = x === (f && 1 & a);
                if (
                  (a < h && (x = !x),
                  (m = x ? 0 : y),
                  (this._lock = 1),
                  (this.render(m || (g ? 0 : Ce(a * l)), t, !y)._lock = 0),
                  !t && this.parent && gt(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !g &&
                    (this.invalidate()._lock = 1),
                  (m && m !== this._time) ||
                    c !== !this._ts ||
                    (this.vars.onRepeat && !this.parent && !this._act))
                )
                  return this;
                if (
                  ((y = this._dur),
                  (v = this._tDur),
                  _ &&
                    ((this._lock = 2), (m = x ? y : -1e-4), this.render(m, !0)),
                  (this._lock = 0),
                  !this._ts && !c)
                )
                  return this;
                Dt(this, g);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (u = (function (e, t, n) {
                  var i;
                  if (n > t)
                    for (i = e._first; i && i._start <= n; ) {
                      if (!i._dur && "isPause" === i.data && i._start > t)
                        return i;
                      i = i._next;
                    }
                  else
                    for (i = e._last; i && i._start >= n; ) {
                      if (!i._dur && "isPause" === i.data && i._start < t)
                        return i;
                      i = i._prev;
                    }
                })(this, Ce(m), Ce(i))) &&
                (b -= i - (i = u._start)),
              (this._tTime = b),
              (this._time = i),
              (this._act = !p),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = e),
                (m = 0)),
              !m && i && !t && gt(this, "onStart"),
              i >= m && e >= 0)
            )
              for (r = this._first; r; ) {
                if (
                  ((o = r._next), (r._act || i >= r._start) && r._ts && u !== r)
                ) {
                  if (r.parent !== this) return this.render(e, t, n);
                  if (
                    (r.render(
                      r._ts > 0
                        ? (i - r._start) * r._ts
                        : (r._dirty ? r.totalDuration() : r._tDur) +
                            (i - r._start) * r._ts,
                      t,
                      n
                    ),
                    i !== this._time || (!this._ts && !c))
                  ) {
                    (u = 0), o && (b += this._zTime = -$);
                    break;
                  }
                }
                r = o;
              }
            else {
              r = this._last;
              for (var C = e < 0 ? e : i; r; ) {
                if (
                  ((o = r._prev), (r._act || C <= r._end) && r._ts && u !== r)
                ) {
                  if (r.parent !== this) return this.render(e, t, n);
                  if (
                    (r.render(
                      r._ts > 0
                        ? (C - r._start) * r._ts
                        : (r._dirty ? r.totalDuration() : r._tDur) +
                            (C - r._start) * r._ts,
                      t,
                      n
                    ),
                    i !== this._time || (!this._ts && !c))
                  ) {
                    (u = 0), o && (b += this._zTime = C ? -$ : $);
                    break;
                  }
                }
                r = o;
              }
            }
            if (
              u &&
              !t &&
              (this.pause(),
              (u.render(i >= m ? 0 : -$)._zTime = i >= m ? 1 : -1),
              this._ts)
            )
              return (this._start = d), He(this), this.render(e, t, n);
            this._onUpdate && !t && gt(this, "onUpdate", !0),
              ((b === v && v >= this.totalDuration()) || (!b && m)) &&
                ((d !== this._start && Math.abs(p) === Math.abs(this._ts)) ||
                  this._lock ||
                  ((e || !y) &&
                    ((b === v && this._ts > 0) || (!b && this._ts < 0)) &&
                    ze(this, 1),
                  t ||
                    (e < 0 && !m) ||
                    (!b && !m) ||
                    (gt(this, b === v ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(b < v && this.timeScale() > 0) &&
                      this._prom())));
          }
          return this;
        }),
        (n.add = function (e, t) {
          var n = this;
          if ((U(t) || (t = Qe(this, t)), !(e instanceof Rt))) {
            if (Z(e))
              return (
                e.forEach(function (e) {
                  return n.add(e, t);
                }),
                this
              );
            if (q(e)) return this.addLabel(e, t);
            if (!H(e)) return this;
            e = Yt.delayedCall(0, e);
          }
          return this !== e ? Ve(this, e, t) : this;
        }),
        (n.getChildren = function (e, t, n, i) {
          void 0 === e && (e = !0),
            void 0 === t && (t = !0),
            void 0 === n && (n = !0),
            void 0 === i && (i = -1e8);
          for (var r = [], o = this._first; o; )
            o._start >= i &&
              (o instanceof Yt
                ? t && r.push(o)
                : (n && r.push(o),
                  e && r.push.apply(r, o.getChildren(!0, t, n)))),
              (o = o._next);
          return r;
        }),
        (n.getById = function (e) {
          for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
            if (t[n].vars.id === e) return t[n];
        }),
        (n.remove = function (e) {
          return q(e)
            ? this.removeLabel(e)
            : H(e)
            ? this.killTweensOf(e)
            : (Ne(this, e),
              e === this._recent && (this._recent = this._last),
              je(this));
        }),
        (n.totalTime = function (t, n) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = Ce(
                  Tt.time -
                    (this._ts > 0
                      ? t / this._ts
                      : (this.totalDuration() - t) / -this._ts)
                )),
              e.prototype.totalTime.call(this, t, n),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (n.addLabel = function (e, t) {
          return (this.labels[e] = Qe(this, t)), this;
        }),
        (n.removeLabel = function (e) {
          return delete this.labels[e], this;
        }),
        (n.addPause = function (e, t, n) {
          var i = Yt.delayedCall(0, t || ue, n);
          return (
            (i.data = "isPause"), (this._hasPause = 1), Ve(this, i, Qe(this, e))
          );
        }),
        (n.removePause = function (e) {
          var t = this._first;
          for (e = Qe(this, e); t; )
            t._start === e && "isPause" === t.data && ze(t), (t = t._next);
        }),
        (n.killTweensOf = function (e, t, n) {
          for (var i = this.getTweensOf(e, n), r = i.length; r--; )
            Ft !== i[r] && i[r].kill(e, t);
          return this;
        }),
        (n.getTweensOf = function (e, t) {
          for (var n, i = [], r = ot(e), o = this._first, s = U(t); o; )
            o instanceof Yt
              ? ke(o._targets, r) &&
                (s
                  ? (!Ft || (o._initted && o._ts)) &&
                    o.globalTime(0) <= t &&
                    o.globalTime(o.totalDuration()) > t
                  : !t || o.isActive()) &&
                i.push(o)
              : (n = o.getTweensOf(r, t)).length && i.push.apply(i, n),
              (o = o._next);
          return i;
        }),
        (n.tweenTo = function (e, t) {
          t = t || {};
          var n = this,
            i = Qe(n, e),
            r = t,
            o = r.startAt,
            s = r.onStart,
            a = r.onStartParams,
            l = r.immediateRender,
            c = Yt.to(
              n,
              Oe(
                {
                  ease: t.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: i,
                  overwrite: "auto",
                  duration:
                    t.duration ||
                    Math.abs(
                      (i - (o && "time" in o ? o.time : n._time)) /
                        n.timeScale()
                    ) ||
                    $,
                  onStart: function () {
                    n.pause();
                    var e =
                      t.duration || Math.abs((i - n._time) / n.timeScale());
                    c._dur !== e && Xe(c, e, 0, 1).render(c._time, !0, !0),
                      s && s.apply(c, a || []);
                  },
                },
                t
              )
            );
          return l ? c.render(0) : c;
        }),
        (n.tweenFromTo = function (e, t, n) {
          return this.tweenTo(t, Oe({ startAt: { time: Qe(this, e) } }, n));
        }),
        (n.recent = function () {
          return this._recent;
        }),
        (n.nextLabel = function (e) {
          return void 0 === e && (e = this._time), ft(this, Qe(this, e));
        }),
        (n.previousLabel = function (e) {
          return void 0 === e && (e = this._time), ft(this, Qe(this, e), 1);
        }),
        (n.currentLabel = function (e) {
          return arguments.length
            ? this.seek(e, !0)
            : this.previousLabel(this._time + $);
        }),
        (n.shiftChildren = function (e, t, n) {
          void 0 === n && (n = 0);
          for (var i, r = this._first, o = this.labels; r; )
            r._start >= n && ((r._start += e), (r._end += e)), (r = r._next);
          if (t) for (i in o) o[i] >= n && (o[i] += e);
          return je(this);
        }),
        (n.invalidate = function () {
          var t = this._first;
          for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
          return e.prototype.invalidate.call(this);
        }),
        (n.clear = function (e) {
          void 0 === e && (e = !0);
          for (var t, n = this._first; n; )
            (t = n._next), this.remove(n), (n = t);
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            e && (this.labels = {}),
            je(this)
          );
        }),
        (n.totalDuration = function (e) {
          var t,
            n,
            i,
            r = 0,
            o = this._last,
            a = 1e8;
          if (arguments.length)
            return this.timeScale(
              (this._repeat < 0 ? this.duration() : this.totalDuration()) /
                (this.reversed() ? -e : e)
            );
          if (this._dirty) {
            for (i = this.parent; o; )
              (t = o._prev),
                o._dirty && o.totalDuration(),
                (n = o._start) > a && this._sort && o._ts && !this._lock
                  ? ((this._lock = 1), (Ve(this, o, n - o._delay, 1)._lock = 0))
                  : (a = n),
                n < 0 &&
                  o._ts &&
                  ((r -= n),
                  ((!i && !this._dp) || (i && i.smoothChildTiming)) &&
                    ((this._start += n / this._ts),
                    (this._time -= n),
                    (this._tTime -= n)),
                  this.shiftChildren(-n, !1, -Infinity),
                  (a = 0)),
                o._end > r && o._ts && (r = o._end),
                (o = t);
            Xe(this, this === s && this._time > r ? this._time : r, 1, 1),
              (this._dirty = 0);
          }
          return this._tDur;
        }),
        (t.updateRoot = function (e) {
          if ((s._ts && (Se(s, qe(e, s)), (p = Tt.frame)), Tt.frame >= me)) {
            me += M.autoSleep || 120;
            var t = s._first;
            if ((!t || !t._ts) && M.autoSleep && Tt._listeners.length < 2) {
              for (; t && !t._ts; ) t = t._next;
              t || Tt.sleep();
            }
          }
        }),
        t
      );
    })(Rt);
    Oe(Bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var Ft,
      qt = function (e, t, n, i, r, o, s, a, l) {
        H(i) && (i = i(r || 0, e, o));
        var c,
          u = e[t],
          p =
            "get" !== n
              ? n
              : H(u)
              ? l
                ? e[
                    t.indexOf("set") || !H(e["get" + t.substr(3)])
                      ? t
                      : "get" + t.substr(3)
                  ](l)
                : e[t]()
              : u,
          d = H(u) ? (l ? Zt : Kt) : Xt;
        if (
          (q(i) &&
            (~i.indexOf("random(") && (i = dt(i)),
            "=" === i.charAt(1) &&
              (i =
                parseFloat(p) +
                parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) +
                (tt(p) || 0))),
          p !== i)
        )
          return isNaN(p * i)
            ? function (e, t, n, i, r, o, s) {
                var a,
                  l,
                  c,
                  u,
                  p,
                  d,
                  h,
                  f,
                  g = new cn(this._pt, e, t, 0, 1, nn, null, r),
                  m = 0,
                  v = 0;
                for (
                  g.b = n,
                    g.e = i,
                    n += "",
                    (h = ~(i += "").indexOf("random(")) && (i = dt(i)),
                    o && (o((f = [n, i]), e, t), (n = f[0]), (i = f[1])),
                    l = n.match(te) || [];
                  (a = te.exec(i));

                )
                  (u = a[0]),
                    (p = i.substring(m, a.index)),
                    c ? (c = (c + 1) % 5) : "rgba(" === p.substr(-5) && (c = 1),
                    u !== l[v++] &&
                      ((d = parseFloat(l[v - 1]) || 0),
                      (g._pt = {
                        _next: g._pt,
                        p: p || 1 === v ? p : ",",
                        s: d,
                        c:
                          "=" === u.charAt(1)
                            ? parseFloat(u.substr(2)) *
                              ("-" === u.charAt(0) ? -1 : 1)
                            : parseFloat(u) - d,
                        m: c && c < 4 ? Math.round : 0,
                      }),
                      (m = te.lastIndex));
                return (
                  (g.c = m < i.length ? i.substring(m, i.length) : ""),
                  (g.fp = s),
                  (ne.test(i) || h) && (g.e = 0),
                  (this._pt = g),
                  g
                );
              }.call(this, e, t, p, i, d, a || M.stringFilter, l)
            : ((c = new cn(
                this._pt,
                e,
                t,
                +p || 0,
                i - (p || 0),
                "boolean" == typeof u ? tn : en,
                0,
                d
              )),
              l && (c.fp = l),
              s && c.modifier(s, this, e),
              (this._pt = c));
      },
      Ht = function (e, t, n, i, r, o) {
        var s, a, l, c;
        if (
          fe[e] &&
          !1 !==
            (s = new fe[e]()).init(
              r,
              s.rawVars
                ? t[e]
                : (function (e, t, n, i, r) {
                    if (
                      (H(e) && (e = Gt(e, r, t, n, i)),
                      !V(e) || (e.style && e.nodeType) || Z(e) || K(e))
                    )
                      return q(e) ? Gt(e, r, t, n, i) : e;
                    var o,
                      s = {};
                    for (o in e) s[o] = Gt(e[o], r, t, n, i);
                    return s;
                  })(t[e], i, r, o, n),
              n,
              i,
              o
            ) &&
          ((n._pt = a = new cn(n._pt, r, e, 0, 1, s.render, s, 0, s.priority)),
          n !== d)
        )
          for (
            l = n._ptLookup[n._targets.indexOf(r)], c = s._props.length;
            c--;

          )
            l[s._props[c]] = a;
        return s;
      },
      Ut = function e(t, n) {
        var i,
          r,
          a,
          l,
          c,
          u,
          p,
          d,
          h,
          f,
          g,
          m,
          v,
          y = t.vars,
          b = y.ease,
          w = y.startAt,
          x = y.immediateRender,
          _ = y.lazy,
          C = y.onUpdate,
          k = y.onUpdateParams,
          T = y.callbackScope,
          A = y.runBackwards,
          S = y.yoyoEase,
          E = y.keyframes,
          P = y.autoRevert,
          O = t._dur,
          L = t._startAt,
          D = t._targets,
          M = t.parent,
          N = M && "nested" === M.data ? M.parent._targets : D,
          z = "auto" === t._overwrite && !o,
          j = t.timeline;
        if (
          (j && (!E || !b) && (b = "none"),
          (t._ease = Mt(b, I.ease)),
          (t._yEase = S ? Lt(Mt(!0 === S ? b : S, I.ease)) : 0),
          S &&
            t._yoyo &&
            !t._repeat &&
            ((S = t._yEase), (t._yEase = t._ease), (t._ease = S)),
          !j)
        ) {
          if (
            ((m = (d = D[0] ? we(D[0]).harness : 0) && y[d.prop]),
            (i = Ie(y, pe)),
            L && L.render(-1, !0).kill(),
            w)
          )
            if (
              (ze(
                (t._startAt = Yt.set(
                  D,
                  Oe(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: M,
                      immediateRender: !0,
                      lazy: W(_),
                      startAt: null,
                      delay: 0,
                      onUpdate: C,
                      onUpdateParams: k,
                      callbackScope: T,
                      stagger: 0,
                    },
                    w
                  )
                ))
              ),
              x)
            ) {
              if (n > 0) P || (t._startAt = 0);
              else if (O && !(n < 0 && L)) return void (n && (t._zTime = n));
            }
            else !1 === P && (t._startAt = 0);
          else if (A && O)
            if (L) !P && (t._startAt = 0);
            else if (
              (n && (x = !1),
              (a = Oe(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: x && W(_),
                  immediateRender: x,
                  stagger: 0,
                  parent: M,
                },
                i
              )),
              m && (a[d.prop] = m),
              ze((t._startAt = Yt.set(D, a))),
              x)
            ) {
              if (!n) return;
            }
            else e(t._startAt, $);
          for (
            t._pt = 0, _ = (O && W(_)) || (_ && !O), r = 0;
            r < D.length;
            r++
          ) {
            if (
              ((p = (c = D[r])._gsap || be(D)[r]._gsap),
              (t._ptLookup[r] = f = {}),
              he[p.id] && de.length && Ae(),
              (g = N === D ? r : N.indexOf(c)),
              d &&
                !1 !== (h = new d()).init(c, m || i, t, g, N) &&
                ((t._pt = l =
                  new cn(t._pt, c, h.name, 0, 1, h.render, h, 0, h.priority)),
                h._props.forEach(function (e) {
                  f[e] = l;
                }),
                h.priority && (u = 1)),
              !d || m)
            )
              for (a in i)
                fe[a] && (h = Ht(a, i, t, g, c, N))
                  ? h.priority && (u = 1)
                  : (f[a] = l =
                      qt.call(t, c, a, "get", i[a], g, N, 0, y.stringFilter));
            t._op && t._op[r] && t.kill(c, t._op[r]),
              z &&
                t._pt &&
                ((Ft = t),
                s.killTweensOf(c, f, t.globalTime(0)),
                (v = !t.parent),
                (Ft = 0)),
              t._pt && _ && (he[p.id] = 1);
          }
          u && ln(t), t._onInit && t._onInit(t);
        }
        (t._from = !j && !!y.runBackwards),
          (t._onUpdate = C),
          (t._initted = (!t._op || t._pt) && !v);
      },
      Gt = function (e, t, n, i, r) {
        return H(e)
          ? e.call(t, n, i, r)
          : q(e) && ~e.indexOf("random(")
          ? dt(e)
          : e;
      },
      Vt = ye + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      Wt = (Vt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
      Yt = (function (e) {
        function t(t, n, r, a) {
          var l;
          "number" == typeof n && ((r.duration = n), (n = r), (r = null));
          var c,
            u,
            p,
            d,
            h,
            f,
            g,
            m,
            v = (l = e.call(this, a ? n : $e(n), r) || this).vars,
            y = v.duration,
            b = v.delay,
            w = v.immediateRender,
            x = v.stagger,
            _ = v.overwrite,
            C = v.keyframes,
            k = v.defaults,
            T = v.scrollTrigger,
            A = v.yoyoEase,
            S = l.parent,
            E = (Z(t) || K(t) ? U(t[0]) : "length" in n) ? [t] : ot(t);
          if (
            ((l._targets = E.length
              ? be(E)
              : le(
                  "GSAP target " + t + " not found. https://greensock.com",
                  !M.nullTargetWarn
                ) || []),
            (l._ptLookup = []),
            (l._overwrite = _),
            C || x || X(y) || X(b))
          ) {
            if (
              ((n = l.vars),
              (c = l.timeline =
                new Bt({ data: "nested", defaults: k || {} })).kill(),
              (c.parent = c._dp = i(l)),
              (c._start = 0),
              C)
            )
              Oe(c.vars.defaults, { ease: "none" }),
                C.forEach(function (e) {
                  return c.to(E, e, ">");
                });
            else {
              if (((d = E.length), (g = x ? at(x) : ue), V(x)))
                for (h in x) ~Vt.indexOf(h) && (m || (m = {}), (m[h] = x[h]));
              for (u = 0; u < d; u++) {
                for (h in ((p = {}), n)) Wt.indexOf(h) < 0 && (p[h] = n[h]);
                (p.stagger = 0),
                  A && (p.yoyoEase = A),
                  m && De(p, m),
                  (f = E[u]),
                  (p.duration = +Gt(y, i(l), u, f, E)),
                  (p.delay = (+Gt(b, i(l), u, f, E) || 0) - l._delay),
                  !x &&
                    1 === d &&
                    p.delay &&
                    ((l._delay = b = p.delay), (l._start += b), (p.delay = 0)),
                  c.to(f, p, g(u, f, E));
              }
              c.duration() ? (y = b = 0) : (l.timeline = 0);
            }
            y || l.duration((y = c.duration()));
          }
          else l.timeline = 0;
          return (
            !0 !== _ || o || ((Ft = i(l)), s.killTweensOf(E), (Ft = 0)),
            S && Ge(S, i(l)),
            (w ||
              (!y &&
                !C &&
                l._start === Ce(S._time) &&
                W(w) &&
                Re(i(l)) &&
                "nested" !== S.data)) &&
              ((l._tTime = -$), l.render(Math.max(0, -b))),
            T && We(i(l), T),
            l
          );
        }
        r(t, e);
        var n = t.prototype;
        return (
          (n.render = function (e, t, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              u,
              p,
              d = this._time,
              h = this._tDur,
              f = this._dur,
              g = e > h - $ && e >= 0 ? h : e < $ ? 0 : e;
            if (f) {
              if (
                g !== this._tTime ||
                !e ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 != e < 0)
              ) {
                if (((i = g), (u = this.timeline), this._repeat)) {
                  if (((s = f + this._rDelay), this._repeat < -1 && e < 0))
                    return this.totalTime(100 * s + e, t, n);
                  if (
                    ((i = Ce(g % s)),
                    g === h
                      ? ((o = this._repeat), (i = f))
                      : ((o = ~~(g / s)) && o === g / s && ((i = f), o--),
                        i > f && (i = f)),
                    (l = this._yoyo && 1 & o) &&
                      ((p = this._yEase), (i = f - i)),
                    (a = Fe(this._tTime, s)),
                    i === d && !n && this._initted)
                  )
                    return this;
                  o !== a &&
                    (u && this._yEase && Dt(u, l),
                    !this.vars.repeatRefresh ||
                      l ||
                      this._lock ||
                      ((this._lock = n = 1),
                      (this.render(Ce(s * o), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (Ye(this, e < 0 ? e : i, n, t))
                    return (this._tTime = 0), this;
                  if (f !== this._dur) return this.render(e, t, n);
                }
                for (
                  this._tTime = g,
                    this._time = i,
                    !this._act &&
                      this._ts &&
                      ((this._act = 1), (this._lazy = 0)),
                    this.ratio = c = (p || this._ease)(i / f),
                    this._from && (this.ratio = c = 1 - c),
                    i && !d && !t && gt(this, "onStart"),
                    r = this._pt;
                  r;

                )
                  r.r(c, r.d), (r = r._next);
                (u && u.render(e < 0 ? e : !i && l ? -$ : u._dur * c, t, n)) ||
                  (this._startAt && (this._zTime = e)),
                  this._onUpdate &&
                    !t &&
                    (e < 0 && this._startAt && this._startAt.render(e, !0, n),
                    gt(this, "onUpdate")),
                  this._repeat &&
                    o !== a &&
                    this.vars.onRepeat &&
                    !t &&
                    this.parent &&
                    gt(this, "onRepeat"),
                  (g !== this._tDur && g) ||
                    this._tTime !== g ||
                    (e < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startAt.render(e, !0, !0),
                    (e || !f) &&
                      ((g === this._tDur && this._ts > 0) ||
                        (!g && this._ts < 0)) &&
                      ze(this, 1),
                    t ||
                      (e < 0 && !d) ||
                      (!g && !d) ||
                      (gt(
                        this,
                        g === h ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(g < h && this.timeScale() > 0) &&
                        this._prom()));
              }
            }
            else
              !(function (e, t, n, i) {
                var r,
                  o,
                  s,
                  a = e.ratio,
                  l =
                    t < 0 ||
                    (!t &&
                      ((!e._start &&
                        (function e(t) {
                          var n = t.parent;
                          return (
                            n &&
                            n._ts &&
                            n._initted &&
                            !n._lock &&
                            (n.rawTime() < 0 || e(n))
                          );
                        })(e)) ||
                        ((e._ts < 0 || e._dp._ts < 0) &&
                          "isFromStart" !== e.data &&
                          "isStart" !== e.data)))
                      ? 0
                      : 1,
                  c = e._rDelay,
                  u = 0;
                if (
                  (c &&
                    e._repeat &&
                    ((u = et(0, e._tDur, t)),
                    (o = Fe(u, c)),
                    (s = Fe(e._tTime, c)),
                    e._yoyo && 1 & o && (l = 1 - l),
                    o !== s &&
                      ((a = 1 - l),
                      e.vars.repeatRefresh && e._initted && e.invalidate())),
                  l !== a || i || e._zTime === $ || (!t && e._zTime))
                ) {
                  if (!e._initted && Ye(e, t, i, n)) return;
                  for (
                    s = e._zTime,
                      e._zTime = t || (n ? $ : 0),
                      n || (n = t && !s),
                      e.ratio = l,
                      e._from && (l = 1 - l),
                      e._time = 0,
                      e._tTime = u,
                      r = e._pt;
                    r;

                  )
                    r.r(l, r.d), (r = r._next);
                  e._startAt && t < 0 && e._startAt.render(t, !0, !0),
                    e._onUpdate && !n && gt(e, "onUpdate"),
                    u && e._repeat && !n && e.parent && gt(e, "onRepeat"),
                    (t >= e._tDur || t < 0) &&
                      e.ratio === l &&
                      (l && ze(e, 1),
                      n ||
                        (gt(e, l ? "onComplete" : "onReverseComplete", !0),
                        e._prom && e._prom()));
                }
                else e._zTime || (e._zTime = t);
              })(this, e, t, n);
            return this;
          }),
          (n.targets = function () {
            return this._targets;
          }),
          (n.invalidate = function () {
            return (
              (this._pt =
                this._op =
                this._startAt =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(),
              e.prototype.invalidate.call(this)
            );
          }),
          (n.kill = function (e, t) {
            if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t))))
              return (this._lazy = this._pt = 0), this.parent ? mt(this) : this;
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(e, t, Ft && !0 !== Ft.vars.overwrite)
                  ._first || mt(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  Xe(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              u = this._targets,
              p = e ? ot(e) : u,
              d = this._ptLookup,
              h = this._pt;
            if (
              (!t || "all" === t) &&
              (function (e, t) {
                for (
                  var n = e.length, i = n === t.length;
                  i && n-- && e[n] === t[n];

                );
                return n < 0;
              })(u, p)
            )
              return "all" === t && (this._pt = 0), mt(this);
            for (
              i = this._op = this._op || [],
                "all" !== t &&
                  (q(t) &&
                    ((a = {}),
                    _e(t, function (e) {
                      return (a[e] = 1);
                    }),
                    (t = a)),
                  (t = (function (e, t) {
                    var n,
                      i,
                      r,
                      o,
                      s = e[0] ? we(e[0]).harness : 0,
                      a = s && s.aliases;
                    if (!a) return t;
                    for (i in ((n = De({}, t)), a))
                      if ((i in n))
                        for (r = (o = a[i].split(",")).length; r--; )
                          n[o[r]] = n[i];
                    return n;
                  })(u, t))),
                c = u.length;
              c--;

            )
              if (~p.indexOf(u[c]))
                for (a in ((r = d[c]),
                "all" === t
                  ? ((i[c] = t), (s = r), (o = {}))
                  : ((o = i[c] = i[c] || {}), (s = t)),
                s))
                  (l = r && r[a]) &&
                    (("kill" in l.d && !0 !== l.d.kill(a)) ||
                      Ne(this, l, "_pt"),
                    delete r[a]),
                    "all" !== o && (o[a] = 1);
            return this._initted && !this._pt && h && mt(this), this;
          }),
          (t.to = function (e, n) {
            return new t(e, n, arguments[2]);
          }),
          (t.from = function (e, n) {
            return new t(e, Te(arguments, 1));
          }),
          (t.delayedCall = function (e, n, i, r) {
            return new t(n, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: e,
              onComplete: n,
              onReverseComplete: n,
              onCompleteParams: i,
              onReverseCompleteParams: i,
              callbackScope: r,
            });
          }),
          (t.fromTo = function (e, n, i) {
            return new t(e, Te(arguments, 2));
          }),
          (t.set = function (e, n) {
            return (
              (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n)
            );
          }),
          (t.killTweensOf = function (e, t, n) {
            return s.killTweensOf(e, t, n);
          }),
          t
        );
      })(Rt);
    Oe(Yt.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      _e("staggerTo,staggerFrom,staggerFromTo", function (e) {
        Yt[e] = function () {
          var t = new Bt(),
            n = nt.call(arguments, 0);
          return (
            n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
          );
        };
      });
    var Xt = function (e, t, n) {
        return (e[t] = n);
      },
      Kt = function (e, t, n) {
        return e[t](n);
      },
      Zt = function (e, t, n, i) {
        return e[t](i.fp, n);
      },
      Qt = function (e, t, n) {
        return e.setAttribute(t, n);
      },
      Jt = function (e, t) {
        return H(e[t]) ? Kt : G(e[t]) && e.setAttribute ? Qt : Xt;
      },
      en = function (e, t) {
        return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4, t);
      },
      tn = function (e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t);
      },
      nn = function (e, t) {
        var n = t._pt,
          i = "";
        if (!e && t.b) i = t.b;
        else if (1 === e && t.e) i = t.e;
        else {
          for (; n; )
            (i =
              n.p +
              (n.m
                ? n.m(n.s + n.c * e)
                : Math.round(1e4 * (n.s + n.c * e)) / 1e4) +
              i),
              (n = n._next);
          i += t.c;
        }
        t.set(t.t, t.p, i, t);
      },
      rn = function (e, t) {
        for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
      },
      on = function (e, t, n, i) {
        for (var r, o = this._pt; o; )
          (r = o._next), o.p === i && o.modifier(e, t, n), (o = r);
      },
      sn = function (e) {
        for (var t, n, i = this._pt; i; )
          (n = i._next),
            (i.p === e && !i.op) || i.op === e
              ? Ne(this, i, "_pt")
              : i.dep || (t = 1),
            (i = n);
        return !t;
      },
      an = function (e, t, n, i) {
        i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
      },
      ln = function (e) {
        for (var t, n, i, r, o = e._pt; o; ) {
          for (t = o._next, n = i; n && n.pr > o.pr; ) n = n._next;
          (o._prev = n ? n._prev : r) ? (o._prev._next = o) : (i = o),
            (o._next = n) ? (n._prev = o) : (r = o),
            (o = t);
        }
        e._pt = i;
      },
      cn = (function () {
        function e(e, t, n, i, r, o, s, a, l) {
          (this.t = t),
            (this.s = i),
            (this.c = r),
            (this.p = n),
            (this.r = o || en),
            (this.d = s || this),
            (this.set = a || Xt),
            (this.pr = l || 0),
            (this._next = e),
            e && (e._prev = this);
        }
        return (
          (e.prototype.modifier = function (e, t, n) {
            (this.mSet = this.mSet || this.set),
              (this.set = an),
              (this.m = e),
              (this.mt = n),
              (this.tween = t);
          }),
          e
        );
      })();
    _e(
      ye +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (e) {
        return (pe[e] = 1);
      }
    ),
      (oe.TweenMax = oe.TweenLite = Yt),
      (oe.TimelineLite = oe.TimelineMax = Bt),
      (s = new Bt({
        sortChildren: !1,
        defaults: I,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (M.stringFilter = kt);
    var un = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        t.forEach(function (e) {
          return (function (e) {
            var t = (e = (!e.name && e.default) || e).name,
              n = H(e),
              i =
                t && !n && e.init
                  ? function () {
                      this._props = [];
                    }
                  : e,
              r = {
                init: ue,
                render: rn,
                add: qt,
                kill: sn,
                modifier: on,
                rawVars: 0,
              },
              o = {
                targetTest: 0,
                get: 0,
                getSetter: Jt,
                aliases: {},
                register: 0,
              };
            if ((At(), e !== i)) {
              if (fe[t]) return;
              Oe(i, Oe(Ie(e, r), o)),
                De(i.prototype, De(r, Ie(e, o))),
                (fe[(i.prop = t)] = i),
                e.targetTest && (ve.push(i), (pe[t] = 1)),
                (t =
                  ("css" === t
                    ? "CSS"
                    : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
            }
            ce(t, i), e.register && e.register(hn, i, cn);
          })(e);
        });
      },
      timeline: function (e) {
        return new Bt(e);
      },
      getTweensOf: function (e, t) {
        return s.getTweensOf(e, t);
      },
      getProperty: function (e, t, n, i) {
        q(e) && (e = ot(e)[0]);
        var r = we(e || {}).get,
          o = n ? Pe : Ee;
        return (
          "native" === n && (n = ""),
          e
            ? t
              ? o(((fe[t] && fe[t].get) || r)(e, t, n, i))
              : function (t, n, i) {
                  return o(((fe[t] && fe[t].get) || r)(e, t, n, i));
                }
            : e
        );
      },
      quickSetter: function (e, t, n) {
        if ((e = ot(e)).length > 1) {
          var i = e.map(function (e) {
              return hn.quickSetter(e, t, n);
            }),
            r = i.length;
          return function (e) {
            for (var t = r; t--; ) i[t](e);
          };
        }
        e = e[0] || {};
        var o = fe[t],
          s = we(e),
          a = (s.harness && (s.harness.aliases || {})[t]) || t,
          l = o
            ? function (t) {
                var i = new o();
                (d._pt = 0),
                  i.init(e, n ? t + n : t, d, 0, [e]),
                  i.render(1, i),
                  d._pt && rn(1, d);
              }
            : s.set(e, a);
        return o
          ? l
          : function (t) {
              return l(e, a, n ? t + n : t, s, 1);
            };
      },
      isTweening: function (e) {
        return s.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = Mt(e.ease, I.ease)), Me(I, e || {});
      },
      config: function (e) {
        return Me(M, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          n = e.effect,
          i = e.plugins,
          r = e.defaults,
          o = e.extendTimeline;
        (i || "").split(",").forEach(function (e) {
          return (
            e &&
            !fe[e] &&
            !oe[e] &&
            le(t + " effect requires " + e + " plugin.")
          );
        }),
          (ge[t] = function (e, t, i) {
            return n(ot(e), Oe(t || {}, r), i);
          }),
          o &&
            (Bt.prototype[t] = function (e, n, i) {
              return this.add(ge[t](e, V(n) ? n : (i = n) && {}, this), i);
            });
      },
      registerEase: function (e, t) {
        St[e] = Mt(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? Mt(e, t) : St;
      },
      getById: function (e) {
        return s.getById(e);
      },
      exportRoot: function (e, t) {
        void 0 === e && (e = {});
        var n,
          i,
          r = new Bt(e);
        for (
          r.smoothChildTiming = W(e.smoothChildTiming),
            s.remove(r),
            r._dp = 0,
            r._time = r._tTime = s._time,
            n = s._first;
          n;

        )
          (i = n._next),
            (!t &&
              !n._dur &&
              n instanceof Yt &&
              n.vars.onComplete === n._targets[0]) ||
              Ve(r, n, n._start - n._delay),
            (n = i);
        return Ve(s, r, 0), r;
      },
      utils: {
        wrap: function e(t, n, i) {
          var r = n - t;
          return Z(t)
            ? pt(t, e(0, t.length), n)
            : Je(i, function (e) {
                return ((r + ((e - t) % r)) % r) + t;
              });
        },
        wrapYoyo: function e(t, n, i) {
          var r = n - t,
            o = 2 * r;
          return Z(t)
            ? pt(t, e(0, t.length - 1), n)
            : Je(i, function (e) {
                return t + ((e = (o + ((e - t) % o)) % o || 0) > r ? o - e : e);
              });
        },
        distribute: at,
        random: ut,
        snap: ct,
        normalize: function (e, t, n) {
          return ht(e, t, 0, 1, n);
        },
        getUnit: tt,
        clamp: function (e, t, n) {
          return Je(n, function (n) {
            return et(e, t, n);
          });
        },
        splitColor: bt,
        toArray: ot,
        mapRange: ht,
        pipe: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return function (e) {
            return t.reduce(function (e, t) {
              return t(e);
            }, e);
          };
        },
        unitize: function (e, t) {
          return function (n) {
            return e(parseFloat(n)) + (t || tt(n));
          };
        },
        interpolate: function e(t, n, i, r) {
          var o = isNaN(t + n)
            ? 0
            : function (e) {
                return (1 - e) * t + e * n;
              };
          if (!o) {
            var s,
              a,
              l,
              c,
              u,
              p = q(t),
              d = {};
            if ((!0 === i && (r = 1) && (i = null), p))
              (t = { p: t }), (n = { p: n });
            else if (Z(t) && !Z(n)) {
              for (l = [], c = t.length, u = c - 2, a = 1; a < c; a++)
                l.push(e(t[a - 1], t[a]));
              c--,
                (o = function (e) {
                  e *= c;
                  var t = Math.min(u, ~~e);
                  return l[t](e - t);
                }),
                (i = n);
            }
            else r || (t = De(Z(t) ? [] : {}, t));
            if (!l) {
              for (s in n) qt.call(d, t, s, "get", n[s]);
              o = function (e) {
                return rn(e, d) || (p ? t.p : t);
              };
            }
          }
          return Je(i, o);
        },
        shuffle: st,
      },
      install: ae,
      effects: ge,
      ticker: Tt,
      updateRoot: Bt.updateRoot,
      plugins: fe,
      globalTimeline: s,
      core: {
        PropTween: cn,
        globals: ce,
        Tween: Yt,
        Timeline: Bt,
        Animation: Rt,
        getCache: we,
        _removeLinkedListItem: Ne,
        suppressOverwrites: function (e) {
          return (o = e);
        },
      },
    };
    _e("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
      return (un[e] = Yt[e]);
    }),
      Tt.add(Bt.updateRoot),
      (d = un.to({}, { duration: 0 }));
    var pn = function (e, t) {
        for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
          n = n._next;
        return n;
      },
      dn = function (e, t) {
        return {
          name: e,
          rawVars: 1,
          init: function (e, n, i) {
            i._onInit = function (e) {
              var i, r;
              if (
                (q(n) &&
                  ((i = {}),
                  _e(n, function (e) {
                    return (i[e] = 1);
                  }),
                  (n = i)),
                t)
              ) {
                for (r in ((i = {}), n)) i[r] = t(n[r]);
                n = i;
              }
              !(function (e, t) {
                var n,
                  i,
                  r,
                  o = e._targets;
                for (n in t)
                  for (i = o.length; i--; )
                    (r = e._ptLookup[i][n]) &&
                      (r = r.d) &&
                      (r._pt && (r = pn(r, n)),
                      r && r.modifier && r.modifier(t[n], e, o[i], n));
              })(e, n);
            };
          },
        };
      },
      hn =
        un.registerPlugin(
          {
            name: "attr",
            init: function (e, t, n, i, r) {
              var o, s;
              for (o in t)
                (s = this.add(
                  e,
                  "setAttribute",
                  (e.getAttribute(o) || 0) + "",
                  t[o],
                  i,
                  r,
                  0,
                  0,
                  o
                )) && (s.op = o),
                  this._props.push(o);
            },
          },
          {
            name: "endArray",
            init: function (e, t) {
              for (var n = t.length; n--; ) this.add(e, n, e[n] || 0, t[n]);
            },
          },
          dn("roundProps", lt),
          dn("modifiers"),
          dn("snap", ct)
        ) || un;
    (Yt.version = Bt.version = hn.version = "3.6.1"), (u = 1), Y() && At();
    St.Power0,
      St.Power1,
      St.Power2,
      St.Power3,
      St.Power4,
      St.Linear,
      St.Quad,
      St.Cubic,
      St.Quart,
      St.Quint,
      St.Strong,
      St.Elastic,
      St.Back,
      St.SteppedEase,
      St.Bounce,
      St.Sine,
      St.Expo,
      St.Circ;
    var fn,
      gn,
      mn,
      vn,
      yn,
      bn,
      wn,
      xn = {},
      _n = 180 / Math.PI,
      Cn = Math.PI / 180,
      kn = Math.atan2,
      Tn = /([A-Z])/g,
      An = /(?:left|right|width|margin|padding|x)/i,
      Sn = /[\s,\(]\S/,
      En = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      Pn = function (e, t) {
        return t.set(
          t.t,
          t.p,
          Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
          t
        );
      },
      On = function (e, t) {
        return t.set(
          t.t,
          t.p,
          1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
          t
        );
      },
      Ln = function (e, t) {
        return t.set(
          t.t,
          t.p,
          e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
          t
        );
      },
      Dn = function (e, t) {
        var n = t.s + t.c * e;
        t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
      },
      Mn = function (e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t);
      },
      In = function (e, t) {
        return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
      },
      $n = function (e, t, n) {
        return (e.style[t] = n);
      },
      Nn = function (e, t, n) {
        return e.style.setProperty(t, n);
      },
      zn = function (e, t, n) {
        return (e._gsap[t] = n);
      },
      jn = function (e, t, n) {
        return (e._gsap.scaleX = e._gsap.scaleY = n);
      },
      Rn = function (e, t, n, i, r) {
        var o = e._gsap;
        (o.scaleX = o.scaleY = n), o.renderTransform(r, o);
      },
      Bn = function (e, t, n, i, r) {
        var o = e._gsap;
        (o[t] = n), o.renderTransform(r, o);
      },
      Fn = "transform",
      qn = Fn + "Origin",
      Hn = function (e, t) {
        var n = gn.createElementNS
          ? gn.createElementNS(
              (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              e
            )
          : gn.createElement(e);
        return n.style ? n : gn.createElement(e);
      },
      Un = function e(t, n, i) {
        var r = getComputedStyle(t);
        return (
          r[n] ||
          r.getPropertyValue(n.replace(Tn, "-$1").toLowerCase()) ||
          r.getPropertyValue(n) ||
          (!i && e(t, Vn(n) || n, 1)) ||
          ""
        );
      },
      Gn = "O,Moz,ms,Ms,Webkit".split(","),
      Vn = function (e, t, n) {
        var i = (t || yn).style,
          r = 5;
        if (e in i && !n) return e;
        for (
          e = e.charAt(0).toUpperCase() + e.substr(1);
          r-- && !(Gn[r] + e in i);

        );
        return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? Gn[r] : "") + e;
      },
      Wn = function () {
        "undefined" != typeof window &&
          window.document &&
          ((fn = window),
          (gn = fn.document),
          (mn = gn.documentElement),
          (yn = Hn("div") || { style: {} }),
          Hn("div"),
          (Fn = Vn(Fn)),
          (qn = Fn + "Origin"),
          (yn.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (wn = !!Vn("perspective")),
          (vn = 1));
      },
      Yn = function e(t) {
        var n,
          i = Hn(
            "svg",
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute("xmlns")) ||
              "http://www.w3.org/2000/svg"
          ),
          r = this.parentNode,
          o = this.nextSibling,
          s = this.style.cssText;
        if (
          (mn.appendChild(i),
          i.appendChild(this),
          (this.style.display = "block"),
          t)
        )
          try {
            (n = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = e);
          } catch (e) {}
        else this._gsapBBox && (n = this._gsapBBox());
        return (
          r && (o ? r.insertBefore(this, o) : r.appendChild(this)),
          mn.removeChild(i),
          (this.style.cssText = s),
          n
        );
      },
      Xn = function (e, t) {
        for (var n = t.length; n--; )
          if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
      },
      Kn = function (e) {
        var t;
        try {
          t = e.getBBox();
        } catch (n) {
          t = Yn.call(e, !0);
        }
        return (
          (t && (t.width || t.height)) ||
            e.getBBox === Yn ||
            (t = Yn.call(e, !0)),
          !t || t.width || t.x || t.y
            ? t
            : {
                x: +Xn(e, ["x", "cx", "x1"]) || 0,
                y: +Xn(e, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      Zn = function (e) {
        return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !Kn(e));
      },
      Qn = function (e, t) {
        if (t) {
          var n = e.style;
          t in xn && t !== qn && (t = Fn),
            n.removeProperty
              ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) ||
                  (t = "-" + t),
                n.removeProperty(t.replace(Tn, "-$1").toLowerCase()))
              : n.removeAttribute(t);
        }
      },
      Jn = function (e, t, n, i, r, o) {
        var s = new cn(e._pt, t, n, 0, 1, o ? In : Mn);
        return (e._pt = s), (s.b = i), (s.e = r), e._props.push(n), s;
      },
      ei = { deg: 1, rad: 1, turn: 1 },
      ti = function e(t, n, i, r) {
        var o,
          s,
          a,
          l,
          c = parseFloat(i) || 0,
          u = (i + "").trim().substr((c + "").length) || "px",
          p = yn.style,
          d = An.test(n),
          h = "svg" === t.tagName.toLowerCase(),
          f = (h ? "client" : "offset") + (d ? "Width" : "Height"),
          g = "px" === r,
          m = "%" === r;
        return r === u || !c || ei[r] || ei[u]
          ? c
          : ("px" !== u && !g && (c = e(t, n, i, "px")),
            (l = t.getCTM && Zn(t)),
            (!m && "%" !== u) || (!xn[n] && !~n.indexOf("adius"))
              ? ((p[d ? "width" : "height"] = 100 + (g ? u : r)),
                (s =
                  ~n.indexOf("adius") || ("em" === r && t.appendChild && !h)
                    ? t
                    : t.parentNode),
                l && (s = (t.ownerSVGElement || {}).parentNode),
                (s && s !== gn && s.appendChild) || (s = gn.body),
                (a = s._gsap) && m && a.width && d && a.time === Tt.time
                  ? Ce((c / a.width) * 100)
                  : ((m || "%" === u) && (p.position = Un(t, "position")),
                    s === t && (p.position = "static"),
                    s.appendChild(yn),
                    (o = yn[f]),
                    s.removeChild(yn),
                    (p.position = "absolute"),
                    d && m && (((a = we(s)).time = Tt.time), (a.width = s[f])),
                    Ce(g ? (o * c) / 100 : o && c ? (100 / o) * c : 0)))
              : ((o = l ? t.getBBox()[d ? "width" : "height"] : t[f]),
                Ce(m ? (c / o) * 100 : (c / 100) * o)));
      },
      ni = function (e, t, n, i) {
        var r;
        return (
          vn || Wn(),
          t in En &&
            "transform" !== t &&
            ~(t = En[t]).indexOf(",") &&
            (t = t.split(",")[0]),
          xn[t] && "transform" !== t
            ? ((r = hi(e, i)),
              (r =
                "transformOrigin" !== t
                  ? r[t]
                  : fi(Un(e, qn)) + " " + r.zOrigin + "px"))
            : (!(r = e.style[t]) ||
                "auto" === r ||
                i ||
                ~(r + "").indexOf("calc(")) &&
              (r =
                (si[t] && si[t](e, t, n)) ||
                Un(e, t) ||
                xe(e, t) ||
                ("opacity" === t ? 1 : 0)),
          n && !~(r + "").trim().indexOf(" ") ? ti(e, t, r, n) + n : r
        );
      },
      ii = function (e, t, n, i) {
        if (!n || "none" === n) {
          var r = Vn(t, e, 1),
            o = r && Un(e, r, 1);
          o && o !== n
            ? ((t = r), (n = o))
            : "borderColor" === t && (n = Un(e, "borderTopColor"));
        }
        var s,
          a,
          l,
          c,
          u,
          p,
          d,
          h,
          f,
          g,
          m,
          v,
          y = new cn(this._pt, e.style, t, 0, 1, nn),
          b = 0,
          w = 0;
        if (
          ((y.b = n),
          (y.e = i),
          (n += ""),
          "auto" === (i += "") &&
            ((e.style[t] = i), (i = Un(e, t) || i), (e.style[t] = n)),
          kt((s = [n, i])),
          (i = s[1]),
          (l = (n = s[0]).match(ee) || []),
          (i.match(ee) || []).length)
        ) {
          for (; (a = ee.exec(i)); )
            (d = a[0]),
              (f = i.substring(b, a.index)),
              u
                ? (u = (u + 1) % 5)
                : ("rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5)) ||
                  (u = 1),
              d !== (p = l[w++] || "") &&
                ((c = parseFloat(p) || 0),
                (m = p.substr((c + "").length)),
                (v = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) &&
                  (d = d.substr(2)),
                (h = parseFloat(d)),
                (g = d.substr((h + "").length)),
                (b = ee.lastIndex - g.length),
                g ||
                  ((g = g || M.units[t] || m),
                  b === i.length && ((i += g), (y.e += g))),
                m !== g && (c = ti(e, t, p, g) || 0),
                (y._pt = {
                  _next: y._pt,
                  p: f || 1 === w ? f : ",",
                  s: c,
                  c: v ? v * h : h - c,
                  m: (u && u < 4) || "zIndex" === t ? Math.round : 0,
                }));
          y.c = b < i.length ? i.substring(b, i.length) : "";
        }
        else y.r = "display" === t && "none" === i ? In : Mn;
        return ne.test(i) && (y.e = 0), (this._pt = y), y;
      },
      ri = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      oi = function (e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
          var n,
            i,
            r,
            o = t.t,
            s = o.style,
            a = t.u,
            l = o._gsap;
          if ("all" === a || !0 === a) (s.cssText = ""), (i = 1);
          else
            for (r = (a = a.split(",")).length; --r > -1; )
              (n = a[r]),
                xn[n] && ((i = 1), (n = "transformOrigin" === n ? qn : Fn)),
                Qn(o, n);
          i &&
            (Qn(o, Fn),
            l &&
              (l.svg && o.removeAttribute("transform"),
              hi(o, 1),
              (l.uncache = 1)));
        }
      },
      si = {
        clearProps: function (e, t, n, i, r) {
          if ("isFromStart" !== r.data) {
            var o = (e._pt = new cn(e._pt, t, n, 0, 0, oi));
            return (o.u = i), (o.pr = -10), (o.tween = r), e._props.push(n), 1;
          }
        },
      },
      ai = [1, 0, 0, 1, 0, 0],
      li = {},
      ci = function (e) {
        return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
      },
      ui = function (e) {
        var t = Un(e, Fn);
        return ci(t) ? ai : t.substr(7).match(J).map(Ce);
      },
      pi = function (e, t) {
        var n,
          i,
          r,
          o,
          s = e._gsap || we(e),
          a = e.style,
          l = ui(e);
        return s.svg && e.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (l = [
              (r = e.transform.baseVal.consolidate().matrix).a,
              r.b,
              r.c,
              r.d,
              r.e,
              r.f,
            ]).join(",")
            ? ai
            : l
          : (l !== ai ||
              e.offsetParent ||
              e === mn ||
              s.svg ||
              ((r = a.display),
              (a.display = "block"),
              ((n = e.parentNode) && e.offsetParent) ||
                ((o = 1), (i = e.nextSibling), mn.appendChild(e)),
              (l = ui(e)),
              r ? (a.display = r) : Qn(e, "display"),
              o &&
                (i
                  ? n.insertBefore(e, i)
                  : n
                  ? n.appendChild(e)
                  : mn.removeChild(e))),
            t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
      },
      di = function (e, t, n, i, r, o) {
        var s,
          a,
          l,
          c = e._gsap,
          u = r || pi(e, !0),
          p = c.xOrigin || 0,
          d = c.yOrigin || 0,
          h = c.xOffset || 0,
          f = c.yOffset || 0,
          g = u[0],
          m = u[1],
          v = u[2],
          y = u[3],
          b = u[4],
          w = u[5],
          x = t.split(" "),
          _ = parseFloat(x[0]) || 0,
          C = parseFloat(x[1]) || 0;
        n
          ? u !== ai &&
            (a = g * y - m * v) &&
            ((l = _ * (-m / a) + C * (g / a) - (g * w - m * b) / a),
            (_ = _ * (y / a) + C * (-v / a) + (v * w - y * b) / a),
            (C = l))
          : ((_ =
              (s = Kn(e)).x + (~x[0].indexOf("%") ? (_ / 100) * s.width : _)),
            (C =
              s.y + (~(x[1] || x[0]).indexOf("%") ? (C / 100) * s.height : C))),
          i || (!1 !== i && c.smooth)
            ? ((b = _ - p),
              (w = C - d),
              (c.xOffset = h + (b * g + w * v) - b),
              (c.yOffset = f + (b * m + w * y) - w))
            : (c.xOffset = c.yOffset = 0),
          (c.xOrigin = _),
          (c.yOrigin = C),
          (c.smooth = !!i),
          (c.origin = t),
          (c.originIsAbsolute = !!n),
          (e.style[qn] = "0px 0px"),
          o &&
            (Jn(o, c, "xOrigin", p, _),
            Jn(o, c, "yOrigin", d, C),
            Jn(o, c, "xOffset", h, c.xOffset),
            Jn(o, c, "yOffset", f, c.yOffset)),
          e.setAttribute("data-svg-origin", _ + " " + C);
      },
      hi = function (e, t) {
        var n = e._gsap || new jt(e);
        if ("x" in n && !t && !n.uncache) return n;
        var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u,
          p,
          d,
          h,
          f,
          g,
          m,
          v,
          y,
          b,
          w,
          x,
          _,
          C,
          k,
          T,
          A,
          S,
          E,
          P,
          O,
          L,
          D,
          I,
          $,
          N = e.style,
          z = n.scaleX < 0,
          j = Un(e, qn) || "0";
        return (
          (i = r = o = l = c = u = p = d = h = 0),
          (s = a = 1),
          (n.svg = !(!e.getCTM || !Zn(e))),
          (m = pi(e, n.svg)),
          n.svg &&
            ((A = !n.uncache && !t && e.getAttribute("data-svg-origin")),
            di(e, A || j, !!A || n.originIsAbsolute, !1 !== n.smooth, m)),
          (f = n.xOrigin || 0),
          (g = n.yOrigin || 0),
          m !== ai &&
            ((w = m[0]),
            (x = m[1]),
            (_ = m[2]),
            (C = m[3]),
            (i = k = m[4]),
            (r = T = m[5]),
            6 === m.length
              ? ((s = Math.sqrt(w * w + x * x)),
                (a = Math.sqrt(C * C + _ * _)),
                (l = w || x ? kn(x, w) * _n : 0),
                (p = _ || C ? kn(_, C) * _n + l : 0) &&
                  (a *= Math.abs(Math.cos(p * Cn))),
                n.svg &&
                  ((i -= f - (f * w + g * _)), (r -= g - (f * x + g * C))))
              : (($ = m[6]),
                (D = m[7]),
                (P = m[8]),
                (O = m[9]),
                (L = m[10]),
                (I = m[11]),
                (i = m[12]),
                (r = m[13]),
                (o = m[14]),
                (c = (v = kn($, L)) * _n),
                v &&
                  ((A = k * (y = Math.cos(-v)) + P * (b = Math.sin(-v))),
                  (S = T * y + O * b),
                  (E = $ * y + L * b),
                  (P = k * -b + P * y),
                  (O = T * -b + O * y),
                  (L = $ * -b + L * y),
                  (I = D * -b + I * y),
                  (k = A),
                  (T = S),
                  ($ = E)),
                (u = (v = kn(-_, L)) * _n),
                v &&
                  ((y = Math.cos(-v)),
                  (I = C * (b = Math.sin(-v)) + I * y),
                  (w = A = w * y - P * b),
                  (x = S = x * y - O * b),
                  (_ = E = _ * y - L * b)),
                (l = (v = kn(x, w)) * _n),
                v &&
                  ((A = w * (y = Math.cos(v)) + x * (b = Math.sin(v))),
                  (S = k * y + T * b),
                  (x = x * y - w * b),
                  (T = T * y - k * b),
                  (w = A),
                  (k = S)),
                c &&
                  Math.abs(c) + Math.abs(l) > 359.9 &&
                  ((c = l = 0), (u = 180 - u)),
                (s = Ce(Math.sqrt(w * w + x * x + _ * _))),
                (a = Ce(Math.sqrt(T * T + $ * $))),
                (v = kn(k, T)),
                (p = Math.abs(v) > 2e-4 ? v * _n : 0),
                (h = I ? 1 / (I < 0 ? -I : I) : 0)),
            n.svg &&
              ((A = e.getAttribute("transform")),
              (n.forceCSS = e.setAttribute("transform", "") || !ci(Un(e, Fn))),
              A && e.setAttribute("transform", A))),
          Math.abs(p) > 90 &&
            Math.abs(p) < 270 &&
            (z
              ? ((s *= -1),
                (p += l <= 0 ? 180 : -180),
                (l += l <= 0 ? 180 : -180))
              : ((a *= -1), (p += p <= 0 ? 180 : -180))),
          (n.x =
            i -
            ((n.xPercent =
              i &&
              (n.xPercent ||
                (Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
              ? (e.offsetWidth * n.xPercent) / 100
              : 0) +
            "px"),
          (n.y =
            r -
            ((n.yPercent =
              r &&
              (n.yPercent ||
                (Math.round(e.offsetHeight / 2) === Math.round(-r) ? -50 : 0)))
              ? (e.offsetHeight * n.yPercent) / 100
              : 0) +
            "px"),
          (n.z = o + "px"),
          (n.scaleX = Ce(s)),
          (n.scaleY = Ce(a)),
          (n.rotation = Ce(l) + "deg"),
          (n.rotationX = Ce(c) + "deg"),
          (n.rotationY = Ce(u) + "deg"),
          (n.skewX = p + "deg"),
          (n.skewY = d + "deg"),
          (n.transformPerspective = h + "px"),
          (n.zOrigin = parseFloat(j.split(" ")[2]) || 0) && (N[qn] = fi(j)),
          (n.xOffset = n.yOffset = 0),
          (n.force3D = M.force3D),
          (n.renderTransform = n.svg ? yi : wn ? vi : mi),
          (n.uncache = 0),
          n
        );
      },
      fi = function (e) {
        return (e = e.split(" "))[0] + " " + e[1];
      },
      gi = function (e, t, n) {
        var i = tt(t);
        return Ce(parseFloat(t) + parseFloat(ti(e, "x", n + "px", i))) + i;
      },
      mi = function (e, t) {
        (t.z = "0px"),
          (t.rotationY = t.rotationX = "0deg"),
          (t.force3D = 0),
          vi(e, t);
      },
      vi = function (e, t) {
        var n = t || this,
          i = n.xPercent,
          r = n.yPercent,
          o = n.x,
          s = n.y,
          a = n.z,
          l = n.rotation,
          c = n.rotationY,
          u = n.rotationX,
          p = n.skewX,
          d = n.skewY,
          h = n.scaleX,
          f = n.scaleY,
          g = n.transformPerspective,
          m = n.force3D,
          v = n.target,
          y = n.zOrigin,
          b = "",
          w = ("auto" === m && e && 1 !== e) || !0 === m;
        if (y && ("0deg" !== u || "0deg" !== c)) {
          var x,
            _ = parseFloat(c) * Cn,
            C = Math.sin(_),
            k = Math.cos(_);
          (_ = parseFloat(u) * Cn),
            (x = Math.cos(_)),
            (o = gi(v, o, C * x * -y)),
            (s = gi(v, s, -Math.sin(_) * -y)),
            (a = gi(v, a, k * x * -y + y));
        }
        "0px" !== g && (b += "perspective(" + g + ") "),
          (i || r) && (b += "translate(" + i + "%, " + r + "%) "),
          (w || "0px" !== o || "0px" !== s || "0px" !== a) &&
            (b +=
              "0px" !== a || w
                ? "translate3d(" + o + ", " + s + ", " + a + ") "
                : "translate(" + o + ", " + s + ") "),
          "0deg" !== l && (b += "rotate(" + l + ") "),
          "0deg" !== c && (b += "rotateY(" + c + ") "),
          "0deg" !== u && (b += "rotateX(" + u + ") "),
          ("0deg" === p && "0deg" === d) ||
            (b += "skew(" + p + ", " + d + ") "),
          (1 === h && 1 === f) || (b += "scale(" + h + ", " + f + ") "),
          (v.style[Fn] = b || "translate(0, 0)");
      },
      yi = function (e, t) {
        var n,
          i,
          r,
          o,
          s,
          a = t || this,
          l = a.xPercent,
          c = a.yPercent,
          u = a.x,
          p = a.y,
          d = a.rotation,
          h = a.skewX,
          f = a.skewY,
          g = a.scaleX,
          m = a.scaleY,
          v = a.target,
          y = a.xOrigin,
          b = a.yOrigin,
          w = a.xOffset,
          x = a.yOffset,
          _ = a.forceCSS,
          C = parseFloat(u),
          k = parseFloat(p);
        (d = parseFloat(d)),
          (h = parseFloat(h)),
          (f = parseFloat(f)) && ((h += f = parseFloat(f)), (d += f)),
          d || h
            ? ((d *= Cn),
              (h *= Cn),
              (n = Math.cos(d) * g),
              (i = Math.sin(d) * g),
              (r = Math.sin(d - h) * -m),
              (o = Math.cos(d - h) * m),
              h &&
                ((f *= Cn),
                (s = Math.tan(h - f)),
                (r *= s = Math.sqrt(1 + s * s)),
                (o *= s),
                f &&
                  ((s = Math.tan(f)),
                  (n *= s = Math.sqrt(1 + s * s)),
                  (i *= s))),
              (n = Ce(n)),
              (i = Ce(i)),
              (r = Ce(r)),
              (o = Ce(o)))
            : ((n = g), (o = m), (i = r = 0)),
          ((C && !~(u + "").indexOf("px")) ||
            (k && !~(p + "").indexOf("px"))) &&
            ((C = ti(v, "x", u, "px")), (k = ti(v, "y", p, "px"))),
          (y || b || w || x) &&
            ((C = Ce(C + y - (y * n + b * r) + w)),
            (k = Ce(k + b - (y * i + b * o) + x))),
          (l || c) &&
            ((s = v.getBBox()),
            (C = Ce(C + (l / 100) * s.width)),
            (k = Ce(k + (c / 100) * s.height))),
          (s =
            "matrix(" +
            n +
            "," +
            i +
            "," +
            r +
            "," +
            o +
            "," +
            C +
            "," +
            k +
            ")"),
          v.setAttribute("transform", s),
          _ && (v.style[Fn] = s);
      },
      bi = function (e, t, n, i, r, o) {
        var s,
          a,
          l = q(r),
          c = parseFloat(r) * (l && ~r.indexOf("rad") ? _n : 1),
          u = o ? c * o : c - i,
          p = i + u + "deg";
        return (
          l &&
            ("short" === (s = r.split("_")[1]) &&
              (u %= 360) !== u % 180 &&
              (u += u < 0 ? 360 : -360),
            "cw" === s && u < 0
              ? (u = ((u + 36e9) % 360) - 360 * ~~(u / 360))
              : "ccw" === s &&
                u > 0 &&
                (u = ((u - 36e9) % 360) - 360 * ~~(u / 360))),
          (e._pt = a = new cn(e._pt, t, n, i, u, On)),
          (a.e = p),
          (a.u = "deg"),
          e._props.push(n),
          a
        );
      },
      wi = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      },
      xi = function (e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u = wi({}, n._gsap),
          p = n.style;
        for (r in (u.svg
          ? ((o = n.getAttribute("transform")),
            n.setAttribute("transform", ""),
            (p[Fn] = t),
            (i = hi(n, 1)),
            Qn(n, Fn),
            n.setAttribute("transform", o))
          : ((o = getComputedStyle(n)[Fn]),
            (p[Fn] = t),
            (i = hi(n, 1)),
            (p[Fn] = o)),
        xn))
          (o = u[r]) !== (s = i[r]) &&
            "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
            ((a = tt(o) !== (c = tt(s)) ? ti(n, r, o, c) : parseFloat(o)),
            (l = parseFloat(s)),
            (e._pt = new cn(e._pt, i, r, a, l - a, Pn)),
            (e._pt.u = c || 0),
            e._props.push(r));
        wi(i, u);
      };
    _e("padding,margin,Width,Radius", function (e, t) {
      var n = "Top",
        i = "Right",
        r = "Bottom",
        o = "Left",
        s = (t < 3 ? [n, i, r, o] : [n + o, n + i, r + i, r + o]).map(function (
          n
        ) {
          return t < 2 ? e + n : "border" + n + e;
        });
      si[t > 1 ? "border" + e : e] = function (e, t, n, i, r) {
        var o, a;
        if (arguments.length < 4)
          return (
            (o = s.map(function (t) {
              return ni(e, t, n);
            })),
            5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
          );
        (o = (i + "").split(" ")),
          (a = {}),
          s.forEach(function (e, t) {
            return (a[e] = o[t] = o[t] || o[((t - 1) / 2) | 0]);
          }),
          e.init(t, a, r);
      };
    });
    var _i,
      Ci,
      ki = {
        name: "css",
        register: Wn,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, n, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            p,
            d,
            h,
            f,
            g,
            m,
            v,
            y,
            b,
            w,
            x,
            _,
            C,
            k = this._props,
            T = e.style,
            A = n.vars.startAt;
          for (p in (vn || Wn(), t))
            if (
              "autoRound" !== p &&
              ((s = t[p]), !fe[p] || !Ht(p, t, n, i, e, r))
            )
              if (
                ((c = typeof s),
                (u = si[p]),
                "function" === c && (c = typeof (s = s.call(n, i, e, r))),
                "string" === c && ~s.indexOf("random(") && (s = dt(s)),
                u)
              )
                u(this, e, p, s, n) && (b = 1);
              else if ("--" === p.substr(0, 2))
                (o = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
                  (s += ""),
                  (_t.lastIndex = 0),
                  _t.test(o) || ((d = tt(o)), (h = tt(s))),
                  h ? d !== h && (o = ti(e, p, o, h) + h) : d && (s += d),
                  this.add(T, "setProperty", o, s, i, r, 0, 0, p);
              else if ("undefined" !== c) {
                if (
                  (A && p in A
                    ? ((o =
                        "function" == typeof A[p]
                          ? A[p].call(n, i, e, r)
                          : A[p]),
                      p in M.units && !tt(o) && (o += M.units[p]),
                      "=" === (o + "").charAt(1) && (o = ni(e, p)))
                    : (o = ni(e, p)),
                  (l = parseFloat(o)),
                  (f =
                    "string" === c && "=" === s.charAt(1)
                      ? +(s.charAt(0) + "1")
                      : 0) && (s = s.substr(2)),
                  (a = parseFloat(s)),
                  p in En &&
                    ("autoAlpha" === p &&
                      (1 === l &&
                        "hidden" === ni(e, "visibility") &&
                        a &&
                        (l = 0),
                      Jn(
                        this,
                        T,
                        "visibility",
                        l ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a
                      )),
                    "scale" !== p &&
                      "transform" !== p &&
                      ~(p = En[p]).indexOf(",") &&
                      (p = p.split(",")[0])),
                  (g = p in xn))
                )
                  if (
                    (m ||
                      (((v = e._gsap).renderTransform && !t.parseTransform) ||
                        hi(e, t.parseTransform),
                      (y = !1 !== t.smoothOrigin && v.smooth),
                      ((m = this._pt =
                        new cn(
                          this._pt,
                          T,
                          Fn,
                          0,
                          1,
                          v.renderTransform,
                          v,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === p)
                  )
                    (this._pt = new cn(
                      this._pt,
                      v,
                      "scaleY",
                      v.scaleY,
                      f ? f * a : a - v.scaleY
                    )),
                      k.push("scaleY", p),
                      (p += "X");
                  else {
                    if ("transformOrigin" === p) {
                      (x = void 0),
                        (_ = void 0),
                        (C = void 0),
                        (x = (w = s).split(" ")),
                        (_ = x[0]),
                        (C = x[1] || "50%"),
                        ("top" !== _ &&
                          "bottom" !== _ &&
                          "left" !== C &&
                          "right" !== C) ||
                          ((w = _), (_ = C), (C = w)),
                        (x[0] = ri[_] || _),
                        (x[1] = ri[C] || C),
                        (s = x.join(" ")),
                        v.svg
                          ? di(e, s, 0, y, 0, this)
                          : ((h = parseFloat(s.split(" ")[2]) || 0) !==
                              v.zOrigin && Jn(this, v, "zOrigin", v.zOrigin, h),
                            Jn(this, T, p, fi(o), fi(s)));
                      continue;
                    }
                    if ("svgOrigin" === p) {
                      di(e, s, 1, y, 0, this);
                      continue;
                    }
                    if (p in li) {
                      bi(this, v, p, l, s, f);
                      continue;
                    }
                    if ("smoothOrigin" === p) {
                      Jn(this, v, "smooth", v.smooth, s);
                      continue;
                    }
                    if ("force3D" === p) {
                      v[p] = s;
                      continue;
                    }
                    if ("transform" === p) {
                      xi(this, s, e);
                      continue;
                    }
                  }
                else p in T || (p = Vn(p) || p);
                if (
                  g ||
                  ((a || 0 === a) && (l || 0 === l) && !Sn.test(s) && p in T)
                )
                  (d = (o + "").substr((l + "").length)),
                    a || (a = 0),
                    d !== (h = tt(s) || (p in M.units ? M.units[p] : d)) &&
                      (l = ti(e, p, o, h)),
                    (this._pt = new cn(
                      this._pt,
                      g ? v : T,
                      p,
                      l,
                      f ? f * a : a - l,
                      g || ("px" !== h && "zIndex" !== p) || !1 === t.autoRound
                        ? Pn
                        : Dn
                    )),
                    (this._pt.u = h || 0),
                    d !== h && ((this._pt.b = o), (this._pt.r = Ln));
                else if (p in T) ii.call(this, e, p, o, s);
                else {
                  if (!(p in e)) continue;
                  this.add(e, p, e[p], s, i, r);
                }
                k.push(p);
              }
          b && ln(this);
        },
        get: ni,
        aliases: En,
        getSetter: function (e, t, n) {
          var i = En[t];
          return (
            i && i.indexOf(",") < 0 && (t = i),
            t in xn && t !== qn && (e._gsap.x || ni(e, "x"))
              ? n && bn === n
                ? "scale" === t
                  ? jn
                  : zn
                : (bn = n || {}) && ("scale" === t ? Rn : Bn)
              : e.style && !G(e.style[t])
              ? $n
              : ~t.indexOf("-")
              ? Nn
              : Jt(e, t)
          );
        },
        core: { _removeProperty: Qn, _getMatrix: pi },
      };
    (hn.utils.checkPrefix = Vn),
      (Ci = _e(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
          (_i = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (e) {
          xn[e] = 1;
        }
      )),
      _e(_i, function (e) {
        (M.units[e] = "deg"), (li[e] = 1);
      }),
      (En[Ci[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + _i),
      _e(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (e) {
          var t = e.split(":");
          En[t[1]] = Ci[t[0]];
        }
      ),
      _e(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (e) {
          M.units[e] = "px";
        }
      ),
      hn.registerPlugin(ki);
    var Ti = hn.registerPlugin(ki) || hn;
    Ti.core.Tween;
  },
  function (e, t, n) {
    "use strict";
    function i(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function r(e = {}, t = {}) {
      Object.keys(t).forEach((n) => {
        void 0 === e[n]
          ? (e[n] = t[n])
          : i(t[n]) && i(e[n]) && Object.keys(t[n]).length > 0 && r(e[n], t[n]);
      });
    }
    n.d(t, "f", function () {
      return F;
    }),
      n.d(t, "d", function () {
        return H;
      }),
      n.d(t, "e", function () {
        return G;
      }),
      n.d(t, "b", function () {
        return V;
      }),
      n.d(t, "a", function () {
        return W;
      }),
      n.d(t, "c", function () {
        return Z;
      });
    const o = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function s() {
      const e = "undefined" != typeof document ? document : {};
      return r(e, o), e;
    }
    const a = {
      document: o,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function l() {
      const e = "undefined" != typeof window ? window : {};
      return r(e, a), e;
    }
    class c extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function u(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...u(e)) : t.push(e);
        }),
        t
      );
    }
    function p(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function d(e, t) {
      const n = l(),
        i = s();
      let r = [];
      if (!t && e instanceof c) return e;
      if (!e) return new c(r);
      if ("string" == typeof e) {
        const n = e.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          let e = "div";
          0 === n.indexOf("<li") && (e = "ul"),
            0 === n.indexOf("<tr") && (e = "tbody"),
            (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
            0 === n.indexOf("<tbody") && (e = "table"),
            0 === n.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = n;
          for (let e = 0; e < t.childNodes.length; e += 1)
            r.push(t.childNodes[e]);
        }
        else
          r = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) n.push(i[e]);
            return n;
          })(e.trim(), t || i);
      }
      else if (e.nodeType || e === n || e === i) r.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof c) return e;
        r = e;
      }
      return new c(
        (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(r)
      );
    }
    d.fn = c.prototype;
    const h = "resize scroll".split(" ");
    function f(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            h.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : d(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    f("click"),
      f("blur"),
      f("focus"),
      f("focusin"),
      f("focusout"),
      f("keyup"),
      f("keydown"),
      f("keypress"),
      f("submit"),
      f("change"),
      f("mousedown"),
      f("mousemove"),
      f("mouseup"),
      f("mouseenter"),
      f("mouseleave"),
      f("mouseout"),
      f("mouseover"),
      f("touchstart"),
      f("touchend"),
      f("touchmove"),
      f("resize"),
      f("scroll");
    const g = {
      addClass: function (...e) {
        const t = u(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = u(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = u(e.map((e) => e.split(" ")));
        return (
          p(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = u(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n].setAttribute(e, t);
          else
            for (const t in e)
              (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, n, i, r] = e;
        function o(e) {
          const t = e.target;
          if (!t) return;
          const r = e.target.dom7EventData || [];
          if ((r.indexOf(e) < 0 && r.unshift(e), d(t).is(n))) i.apply(t, r);
          else {
            const e = d(t).parents();
            for (let t = 0; t < e.length; t += 1)
              d(e[t]).is(n) && i.apply(e[t], r);
          }
        }
        function s(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
          r || (r = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (n)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: o }),
                t.addEventListener(e, o, r);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: s }),
                t.addEventListener(e, s, r);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, n, i, r] = e;
        "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
          r || (r = !1);
        const o = t.split(" ");
        for (let e = 0; e < o.length; e += 1) {
          const t = o[e];
          for (let e = 0; e < this.length; e += 1) {
            const o = this[e];
            let s;
            if (
              (!n && o.dom7Listeners
                ? (s = o.dom7Listeners[t])
                : n && o.dom7LiveListeners && (s = o.dom7LiveListeners[t]),
              s && s.length)
            )
              for (let e = s.length - 1; e >= 0; e -= 1) {
                const n = s[e];
                i && n.listener === i
                  ? (o.removeEventListener(t, n.proxyListener, r),
                    s.splice(e, 1))
                  : i &&
                    n.listener &&
                    n.listener.dom7proxy &&
                    n.listener.dom7proxy === i
                  ? (o.removeEventListener(t, n.proxyListener, r),
                    s.splice(e, 1))
                  : i ||
                    (o.removeEventListener(t, n.proxyListener, r),
                    s.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = l(),
          n = e[0].split(" "),
          i = e[1];
        for (let r = 0; r < n.length; r += 1) {
          const o = n[r];
          for (let n = 0; n < this.length; n += 1) {
            const r = this[n];
            if (t.CustomEvent) {
              const n = new t.CustomEvent(o, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (r.dom7EventData = e.filter((e, t) => t > 0)),
                r.dispatchEvent(n),
                (r.dom7EventData = []),
                delete r.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function n(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", n));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = l();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = l(),
            t = s(),
            n = this[0],
            i = n.getBoundingClientRect(),
            r = t.body,
            o = n.clientTop || r.clientTop || 0,
            a = n.clientLeft || r.clientLeft || 0,
            c = n === e ? e.scrollY : n.scrollTop,
            u = n === e ? e.scrollX : n.scrollLeft;
          return { top: i.top + c - o, left: i.left + u - a };
        }
        return null;
      },
      css: function (e, t) {
        const n = l();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, n) => {
              e.apply(t, [t, n]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = l(),
          n = s(),
          i = this[0];
        let r, o;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (r = d(e), o = 0; o < r.length; o += 1) if (r[o] === i) return !0;
          return !1;
        }
        if (e === n) return i === n;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof c) {
          for (r = e.nodeType ? [e] : e, o = 0; o < r.length; o += 1)
            if (r[o] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return d([]);
        if (e < 0) {
          const n = t + e;
          return d(n < 0 ? [] : [this[n]]);
        }
        return d([this[e]]);
      },
      append: function (...e) {
        let t;
        const n = s();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = n.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            }
            else if (t instanceof c)
              for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = s();
        let n, i;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const r = t.createElement("div");
            for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1)
              this[n].insertBefore(r.childNodes[i], this[n].childNodes[0]);
          }
          else if (e instanceof c)
            for (i = 0; i < e.length; i += 1)
              this[n].insertBefore(e[i], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e)
              ? d([this[0].nextElementSibling])
              : d([])
            : this[0].nextElementSibling
            ? d([this[0].nextElementSibling])
            : d([])
          : d([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return d([]);
        for (; n.nextElementSibling; ) {
          const i = n.nextElementSibling;
          e ? d(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return d(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && d(t.previousElementSibling).is(e)
              ? d([t.previousElementSibling])
              : d([])
            : t.previousElementSibling
            ? d([t.previousElementSibling])
            : d([]);
        }
        return d([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return d([]);
        for (; n.previousElementSibling; ) {
          const i = n.previousElementSibling;
          e ? d(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return d(t);
      },
      parent: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? d(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return d(t);
      },
      parents: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          let i = this[n].parentNode;
          for (; i; )
            e ? d(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return d(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return d(t);
      },
      children: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].children;
          for (let n = 0; n < i.length; n += 1)
            (e && !d(i[n]).is(e)) || t.push(i[n]);
        }
        return d(t);
      },
      filter: function (e) {
        return d(p(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(g).forEach((e) => {
      Object.defineProperty(d.fn, e, { value: g[e], writable: !0 });
    });
    var m = d;
    function v(e, t = 0) {
      return setTimeout(e, t);
    }
    function y() {
      return Date.now();
    }
    function b(e, t = "x") {
      const n = l();
      let i, r, o;
      const s = (function (e) {
        const t = l();
        let n;
        return (
          t.getComputedStyle && (n = t.getComputedStyle(e, null)),
          !n && e.currentStyle && (n = e.currentStyle),
          n || (n = e.style),
          n
        );
      })(e);
      return (
        n.WebKitCSSMatrix
          ? ((r = s.transform || s.webkitTransform).split(",").length > 6 &&
              (r = r
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (o = new n.WebKitCSSMatrix("none" === r ? "" : r)))
          : (i = (o =
              s.MozTransform ||
              s.OTransform ||
              s.MsTransform ||
              s.msTransform ||
              s.transform ||
              s
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,"))
              .toString()
              .split(",")),
        "x" === t &&
          (r = n.WebKitCSSMatrix
            ? o.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (r = n.WebKitCSSMatrix
            ? o.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        r || 0
      );
    }
    function w(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function x(...e) {
      const t = Object(e[0]),
        n = ["__proto__", "constructor", "prototype"];
      for (let r = 1; r < e.length; r += 1) {
        const o = e[r];
        if (
          void 0 !== o &&
          null !== o &&
          ((i = o),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const e = Object.keys(Object(o)).filter((e) => n.indexOf(e) < 0);
          for (let n = 0, i = e.length; n < i; n += 1) {
            const i = e[n],
              r = Object.getOwnPropertyDescriptor(o, i);
            void 0 !== r &&
              r.enumerable &&
              (w(t[i]) && w(o[i])
                ? o[i].__swiper__
                  ? (t[i] = o[i])
                  : x(t[i], o[i])
                : !w(t[i]) && w(o[i])
                ? ((t[i] = {}), o[i].__swiper__ ? (t[i] = o[i]) : x(t[i], o[i]))
                : (t[i] = o[i]));
          }
        }
      }
      var i;
      return t;
    }
    function _(e, t, n) {
      e.style.setProperty(t, n);
    }
    function C({ swiper: e, targetPosition: t, side: n }) {
      const i = l(),
        r = -e.translate;
      let o,
        s = null;
      const a = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(e.cssModeFrameID);
      const c = t > r ? "next" : "prev",
        u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        p = () => {
          (o = new Date().getTime()), null === s && (s = o);
          const l = Math.max(Math.min((o - s) / a, 1), 0),
            c = 0.5 - Math.cos(l * Math.PI) / 2;
          let d = r + c * (t - r);
          if ((u(d, t) && (d = t), e.wrapperEl.scrollTo({ [n]: d }), u(d, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [n]: d });
              }),
              void i.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = i.requestAnimationFrame(p);
        };
      p();
    }
    let k, T, A;
    function S() {
      return (
        k ||
          (k = (function () {
            const e = l(),
              t = s();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const n = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, n);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        k
      );
    }
    function E(e = {}) {
      return (
        T ||
          (T = (function ({ userAgent: e } = {}) {
            const t = S(),
              n = l(),
              i = n.navigator.platform,
              r = e || n.navigator.userAgent,
              o = { ios: !1, android: !1 },
              s = n.screen.width,
              a = n.screen.height,
              c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let u = r.match(/(iPad).*OS\s([\d_]+)/);
            const p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              d = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === i;
            let f = "MacIntel" === i;
            return (
              !u &&
                f &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${s}x${a}`) >= 0 &&
                ((u = r.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]),
                (f = !1)),
              c && !h && ((o.os = "android"), (o.android = !0)),
              (u || d || p) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        T
      );
    }
    function P() {
      return (
        A ||
          (A = (function () {
            const e = l();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        A
      );
    }
    function O({ swiper: e, runCallbacks: t, direction: n, step: i }) {
      const { activeIndex: r, previousIndex: o } = e;
      let s = n;
      if (
        (s || (s = r > o ? "next" : r < o ? "prev" : "reset"),
        e.emit(`transition${i}`),
        t && r !== o)
      ) {
        if ("reset" === s) return void e.emit(`slideResetTransition${i}`);
        e.emit(`slideChangeTransition${i}`),
          "next" === s
            ? e.emit(`slideNextTransition${i}`)
            : e.emit(`slidePrevTransition${i}`);
      }
    }
    function L(e) {
      const t = this,
        n = s(),
        i = l(),
        r = t.touchEventsData,
        { params: o, touches: a, enabled: c } = t;
      if (!c) return;
      if (t.animating && o.preventInteractionOnTransition) return;
      !t.animating && o.cssMode && o.loop && t.loopFix();
      let u = e;
      u.originalEvent && (u = u.originalEvent);
      let p = m(u.target);
      if ("wrapper" === o.touchEventsTarget && !p.closest(t.wrapperEl).length)
        return;
      if (
        ((r.isTouchEvent = "touchstart" === u.type),
        !r.isTouchEvent && "which" in u && 3 === u.which)
      )
        return;
      if (!r.isTouchEvent && "button" in u && u.button > 0) return;
      if (r.isTouched && r.isMoved) return;
      !!o.noSwipingClass &&
        "" !== o.noSwipingClass &&
        u.target &&
        u.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (p = m(e.path[0]));
      const d = o.noSwipingSelector
          ? o.noSwipingSelector
          : `.${o.noSwipingClass}`,
        h = !(!u.target || !u.target.shadowRoot);
      if (
        o.noSwiping &&
        (h
          ? (function (e, t = this) {
              return (function t(n) {
                return n && n !== s() && n !== l()
                  ? (n.assignedSlot && (n = n.assignedSlot),
                    n.closest(e) || t(n.getRootNode().host))
                  : null;
              })(t);
            })(d, u.target)
          : p.closest(d)[0])
      )
        return void (t.allowClick = !0);
      if (o.swipeHandler && !p.closest(o.swipeHandler)[0]) return;
      (a.currentX =
        "touchstart" === u.type ? u.targetTouches[0].pageX : u.pageX),
        (a.currentY =
          "touchstart" === u.type ? u.targetTouches[0].pageY : u.pageY);
      const f = a.currentX,
        g = a.currentY,
        v = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
        b = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
      if (v && (f <= b || f >= i.innerWidth - b)) {
        if ("prevent" !== v) return;
        e.preventDefault();
      }
      if (
        (Object.assign(r, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (a.startX = f),
        (a.startY = g),
        (r.touchStartTime = y()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        o.threshold > 0 && (r.allowThresholdMove = !1),
        "touchstart" !== u.type)
      ) {
        let e = !0;
        p.is(r.focusableElements) && (e = !1),
          n.activeElement &&
            m(n.activeElement).is(r.focusableElements) &&
            n.activeElement !== p[0] &&
            n.activeElement.blur();
        const i = e && t.allowTouchMove && o.touchStartPreventDefault;
        (!o.touchStartForcePreventDefault && !i) ||
          p[0].isContentEditable ||
          u.preventDefault();
      }
      t.emit("touchStart", u);
    }
    function D() {
      const e = this,
        { params: t, el: n } = e;
      if (n && 0 === n.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: r, snapGrid: o } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = r),
        (e.allowSlideNext = i),
        e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
    }
    let M = !1;
    function I() {}
    const $ = (e, t) => {
      const n = s(),
        {
          params: i,
          touchEvents: r,
          el: o,
          wrapperEl: a,
          device: l,
          support: c,
        } = e,
        u = !!i.nested,
        p = "on" === t ? "addEventListener" : "removeEventListener",
        d = t;
      if (c.touch) {
        const t = !(
          "touchstart" !== r.start ||
          !c.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        o[p](r.start, e.onTouchStart, t),
          o[p](
            r.move,
            e.onTouchMove,
            c.passiveListener ? { passive: !1, capture: u } : u
          ),
          o[p](r.end, e.onTouchEnd, t),
          r.cancel && o[p](r.cancel, e.onTouchEnd, t);
      }
      else
        o[p](r.start, e.onTouchStart, !1),
          n[p](r.move, e.onTouchMove, u),
          n[p](r.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        o[p]("click", e.onClick, !0),
        i.cssMode && a[p]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[d](
              l.ios || l.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              D,
              !0
            )
          : e[d]("observerUpdate", D, !0);
    };
    const N = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var z = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    const j = {
        eventsEmitter: {
          on(e, t, n) {
            const i = this;
            if ("function" != typeof t) return i;
            const r = n ? "unshift" : "push";
            return (
              e.split(" ").forEach((e) => {
                i.eventsListeners[e] || (i.eventsListeners[e] = []),
                  i.eventsListeners[e][r](t);
              }),
              i
            );
          },
          once(e, t, n) {
            const i = this;
            if ("function" != typeof t) return i;
            function r(...n) {
              i.off(e, r),
                r.__emitterProxy && delete r.__emitterProxy,
                t.apply(i, n);
            }
            return (r.__emitterProxy = t), i.on(e, r, n);
          },
          onAny(e, t) {
            const n = this;
            if ("function" != typeof e) return n;
            const i = t ? "unshift" : "push";
            return (
              n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e),
              n
            );
          },
          offAny(e) {
            const t = this;
            if (!t.eventsAnyListeners) return t;
            const n = t.eventsAnyListeners.indexOf(e);
            return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
          },
          off(e, t) {
            const n = this;
            return n.eventsListeners
              ? (e.split(" ").forEach((e) => {
                  void 0 === t
                    ? (n.eventsListeners[e] = [])
                    : n.eventsListeners[e] &&
                      n.eventsListeners[e].forEach((i, r) => {
                        (i === t ||
                          (i.__emitterProxy && i.__emitterProxy === t)) &&
                          n.eventsListeners[e].splice(r, 1);
                      });
                }),
                n)
              : n;
          },
          emit(...e) {
            const t = this;
            if (!t.eventsListeners) return t;
            let n, i, r;
            return (
              "string" == typeof e[0] || Array.isArray(e[0])
                ? ((n = e[0]), (i = e.slice(1, e.length)), (r = t))
                : ((n = e[0].events), (i = e[0].data), (r = e[0].context || t)),
              i.unshift(r),
              (Array.isArray(n) ? n : n.split(" ")).forEach((e) => {
                t.eventsAnyListeners &&
                  t.eventsAnyListeners.length &&
                  t.eventsAnyListeners.forEach((t) => {
                    t.apply(r, [e, ...i]);
                  }),
                  t.eventsListeners &&
                    t.eventsListeners[e] &&
                    t.eventsListeners[e].forEach((e) => {
                      e.apply(r, i);
                    });
              }),
              t
            );
          },
        },
        update: {
          updateSize: function () {
            const e = this;
            let t, n;
            const i = e.$el;
            (t =
              void 0 !== e.params.width && null !== e.params.width
                ? e.params.width
                : i[0].clientWidth),
              (n =
                void 0 !== e.params.height && null !== e.params.height
                  ? e.params.height
                  : i[0].clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === n && e.isVertical()) ||
                ((t =
                  t -
                  parseInt(i.css("padding-left") || 0, 10) -
                  parseInt(i.css("padding-right") || 0, 10)),
                (n =
                  n -
                  parseInt(i.css("padding-top") || 0, 10) -
                  parseInt(i.css("padding-bottom") || 0, 10)),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(n) && (n = 0),
                Object.assign(e, {
                  width: t,
                  height: n,
                  size: e.isHorizontal() ? t : n,
                }));
          },
          updateSlides: function () {
            const e = this;
            function t(t) {
              return e.isHorizontal()
                ? t
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[t];
            }
            function n(e, n) {
              return parseFloat(e.getPropertyValue(t(n)) || 0);
            }
            const i = e.params,
              { $wrapperEl: r, size: o, rtlTranslate: s, wrongRTL: a } = e,
              l = e.virtual && i.virtual.enabled,
              c = l ? e.virtual.slides.length : e.slides.length,
              u = r.children(`.${e.params.slideClass}`),
              p = l ? e.virtual.slides.length : u.length;
            let d = [];
            const h = [],
              f = [];
            let g = i.slidesOffsetBefore;
            "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
            let m = i.slidesOffsetAfter;
            "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
            const v = e.snapGrid.length,
              y = e.slidesGrid.length;
            let b = i.spaceBetween,
              w = -g,
              x = 0,
              C = 0;
            if (void 0 === o) return;
            "string" == typeof b &&
              b.indexOf("%") >= 0 &&
              (b = (parseFloat(b.replace("%", "")) / 100) * o),
              (e.virtualSize = -b),
              s
                ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              i.centeredSlides &&
                i.cssMode &&
                (_(e.wrapperEl, "--swiper-centered-offset-before", ""),
                _(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const k = i.grid && i.grid.rows > 1 && e.grid;
            let T;
            k && e.grid.initSlides(p);
            const A =
              "auto" === i.slidesPerView &&
              i.breakpoints &&
              Object.keys(i.breakpoints).filter(
                (e) => void 0 !== i.breakpoints[e].slidesPerView
              ).length > 0;
            for (let r = 0; r < p; r += 1) {
              T = 0;
              const s = u.eq(r);
              if (
                (k && e.grid.updateSlide(r, s, p, t),
                "none" !== s.css("display"))
              ) {
                if ("auto" === i.slidesPerView) {
                  A && (u[r].style[t("width")] = "");
                  const o = getComputedStyle(s[0]),
                    a = s[0].style.transform,
                    l = s[0].style.webkitTransform;
                  if (
                    (a && (s[0].style.transform = "none"),
                    l && (s[0].style.webkitTransform = "none"),
                    i.roundLengths)
                  )
                    T = e.isHorizontal() ? s.outerWidth(!0) : s.outerHeight(!0);
                  else {
                    const e = n(o, "width"),
                      t = n(o, "padding-left"),
                      i = n(o, "padding-right"),
                      r = n(o, "margin-left"),
                      a = n(o, "margin-right"),
                      l = o.getPropertyValue("box-sizing");
                    if (l && "border-box" === l) T = e + r + a;
                    else {
                      const { clientWidth: n, offsetWidth: o } = s[0];
                      T = e + t + i + r + a + (o - n);
                    }
                  }
                  a && (s[0].style.transform = a),
                    l && (s[0].style.webkitTransform = l),
                    i.roundLengths && (T = Math.floor(T));
                }
                else
                  (T = (o - (i.slidesPerView - 1) * b) / i.slidesPerView),
                    i.roundLengths && (T = Math.floor(T)),
                    u[r] && (u[r].style[t("width")] = `${T}px`);
                u[r] && (u[r].swiperSlideSize = T),
                  f.push(T),
                  i.centeredSlides
                    ? ((w = w + T / 2 + x / 2 + b),
                      0 === x && 0 !== r && (w = w - o / 2 - b),
                      0 === r && (w = w - o / 2 - b),
                      Math.abs(w) < 0.001 && (w = 0),
                      i.roundLengths && (w = Math.floor(w)),
                      C % i.slidesPerGroup == 0 && d.push(w),
                      h.push(w))
                    : (i.roundLengths && (w = Math.floor(w)),
                      (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                        e.params.slidesPerGroup ==
                        0 && d.push(w),
                      h.push(w),
                      (w = w + T + b)),
                  (e.virtualSize += T + b),
                  (x = T),
                  (C += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, o) + m),
              s &&
                a &&
                ("slide" === i.effect || "coverflow" === i.effect) &&
                r.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
              i.setWrapperSize &&
                r.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
              k && e.grid.updateWrapperSize(T, d, t),
              !i.centeredSlides)
            ) {
              const t = [];
              for (let n = 0; n < d.length; n += 1) {
                let r = d[n];
                i.roundLengths && (r = Math.floor(r)),
                  d[n] <= e.virtualSize - o && t.push(r);
              }
              (d = t),
                Math.floor(e.virtualSize - o) - Math.floor(d[d.length - 1]) >
                  1 && d.push(e.virtualSize - o);
            }
            if ((0 === d.length && (d = [0]), 0 !== i.spaceBetween)) {
              const n = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
              u.filter((e, t) => !i.cssMode || t !== u.length - 1).css({
                [n]: `${b}px`,
              });
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              let e = 0;
              f.forEach((t) => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0);
              });
              const t = (e -= i.spaceBetween) - o;
              d = d.map((e) => (e < 0 ? -g : e > t ? t + m : e));
            }
            if (i.centerInsufficientSlides) {
              let e = 0;
              if (
                (f.forEach((t) => {
                  e += t + (i.spaceBetween ? i.spaceBetween : 0);
                }),
                (e -= i.spaceBetween) < o)
              ) {
                const t = (o - e) / 2;
                d.forEach((e, n) => {
                  d[n] = e - t;
                }),
                  h.forEach((e, n) => {
                    h[n] = e + t;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: u,
                snapGrid: d,
                slidesGrid: h,
                slidesSizesGrid: f,
              }),
              i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
            ) {
              _(e.wrapperEl, "--swiper-centered-offset-before", `${-d[0]}px`),
                _(
                  e.wrapperEl,
                  "--swiper-centered-offset-after",
                  `${e.size / 2 - f[f.length - 1] / 2}px`
                );
              const t = -e.snapGrid[0],
                n = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map((e) => e + t)),
                (e.slidesGrid = e.slidesGrid.map((e) => e + n));
            }
            p !== c && e.emit("slidesLengthChange"),
              d.length !== v &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              h.length !== y && e.emit("slidesGridLengthChange"),
              i.watchSlidesProgress && e.updateSlidesOffset();
          },
          updateAutoHeight: function (e) {
            const t = this,
              n = [],
              i = t.virtual && t.params.virtual.enabled;
            let r,
              o = 0;
            "number" == typeof e
              ? t.setTransition(e)
              : !0 === e && t.setTransition(t.params.speed);
            const s = (e) =>
              i
                ? t.slides.filter(
                    (t) =>
                      parseInt(
                        t.getAttribute("data-swiper-slide-index"),
                        10
                      ) === e
                  )[0]
                : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)
                t.visibleSlides.each((e) => {
                  n.push(e);
                });
              else
                for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                  const e = t.activeIndex + r;
                  if (e > t.slides.length && !i) break;
                  n.push(s(e));
                }
            else n.push(s(t.activeIndex));
            for (r = 0; r < n.length; r += 1)
              if (void 0 !== n[r]) {
                const e = n[r].offsetHeight;
                o = e > o ? e : o;
              }
            (o || 0 === o) && t.$wrapperEl.css("height", `${o}px`);
          },
          updateSlidesOffset: function () {
            const e = this,
              t = e.slides;
            for (let n = 0; n < t.length; n += 1)
              t[n].swiperSlideOffset = e.isHorizontal()
                ? t[n].offsetLeft
                : t[n].offsetTop;
          },
          updateSlidesProgress: function (e = (this && this.translate) || 0) {
            const t = this,
              n = t.params,
              { slides: i, rtlTranslate: r, snapGrid: o } = t;
            if (0 === i.length) return;
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            let s = -e;
            r && (s = e),
              i.removeClass(n.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (let e = 0; e < i.length; e += 1) {
              const a = i[e];
              let l = a.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
              const c =
                  (s + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                  (a.swiperSlideSize + n.spaceBetween),
                u =
                  (s - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                  (a.swiperSlideSize + n.spaceBetween),
                p = -(s - l),
                d = p + t.slidesSizesGrid[e];
              ((p >= 0 && p < t.size - 1) ||
                (d > 1 && d <= t.size) ||
                (p <= 0 && d >= t.size)) &&
                (t.visibleSlides.push(a),
                t.visibleSlidesIndexes.push(e),
                i.eq(e).addClass(n.slideVisibleClass)),
                (a.progress = r ? -c : c),
                (a.originalProgress = r ? -u : u);
            }
            t.visibleSlides = m(t.visibleSlides);
          },
          updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
              const n = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * n) || 0;
            }
            const n = t.params,
              i = t.maxTranslate() - t.minTranslate();
            let { progress: r, isBeginning: o, isEnd: s } = t;
            const a = o,
              l = s;
            0 === i
              ? ((r = 0), (o = !0), (s = !0))
              : ((o = (r = (e - t.minTranslate()) / i) <= 0), (s = r >= 1)),
              Object.assign(t, { progress: r, isBeginning: o, isEnd: s }),
              (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
                t.updateSlidesProgress(e),
              o && !a && t.emit("reachBeginning toEdge"),
              s && !l && t.emit("reachEnd toEdge"),
              ((a && !o) || (l && !s)) && t.emit("fromEdge"),
              t.emit("progress", r);
          },
          updateSlidesClasses: function () {
            const e = this,
              {
                slides: t,
                params: n,
                $wrapperEl: i,
                activeIndex: r,
                realIndex: o,
              } = e,
              s = e.virtual && n.virtual.enabled;
            let a;
            t.removeClass(
              `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
            ),
              (a = s
                ? e.$wrapperEl.find(
                    `.${n.slideClass}[data-swiper-slide-index="${r}"]`
                  )
                : t.eq(r)).addClass(n.slideActiveClass),
              n.loop &&
                (a.hasClass(n.slideDuplicateClass)
                  ? i
                      .children(
                        `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o}"]`
                      )
                      .addClass(n.slideDuplicateActiveClass)
                  : i
                      .children(
                        `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o}"]`
                      )
                      .addClass(n.slideDuplicateActiveClass));
            let l = a
              .nextAll(`.${n.slideClass}`)
              .eq(0)
              .addClass(n.slideNextClass);
            n.loop &&
              0 === l.length &&
              (l = t.eq(0)).addClass(n.slideNextClass);
            let c = a
              .prevAll(`.${n.slideClass}`)
              .eq(0)
              .addClass(n.slidePrevClass);
            n.loop &&
              0 === c.length &&
              (c = t.eq(-1)).addClass(n.slidePrevClass),
              n.loop &&
                (l.hasClass(n.slideDuplicateClass)
                  ? i
                      .children(
                        `.${n.slideClass}:not(.${
                          n.slideDuplicateClass
                        })[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicateNextClass)
                  : i
                      .children(
                        `.${n.slideClass}.${
                          n.slideDuplicateClass
                        }[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicateNextClass),
                c.hasClass(n.slideDuplicateClass)
                  ? i
                      .children(
                        `.${n.slideClass}:not(.${
                          n.slideDuplicateClass
                        })[data-swiper-slide-index="${c.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicatePrevClass)
                  : i
                      .children(
                        `.${n.slideClass}.${
                          n.slideDuplicateClass
                        }[data-swiper-slide-index="${c.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicatePrevClass)),
              e.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            const t = this,
              n = t.rtlTranslate ? t.translate : -t.translate,
              {
                slidesGrid: i,
                snapGrid: r,
                params: o,
                activeIndex: s,
                realIndex: a,
                snapIndex: l,
              } = t;
            let c,
              u = e;
            if (void 0 === u) {
              for (let e = 0; e < i.length; e += 1)
                void 0 !== i[e + 1]
                  ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                    ? (u = e)
                    : n >= i[e] && n < i[e + 1] && (u = e + 1)
                  : n >= i[e] && (u = e);
              o.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
            }
            if (r.indexOf(n) >= 0) c = r.indexOf(n);
            else {
              const e = Math.min(o.slidesPerGroupSkip, u);
              c = e + Math.floor((u - e) / o.slidesPerGroup);
            }
            if ((c >= r.length && (c = r.length - 1), u === s))
              return void (
                c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
              );
            const p = parseInt(
              t.slides.eq(u).attr("data-swiper-slide-index") || u,
              10
            );
            Object.assign(t, {
              snapIndex: c,
              realIndex: p,
              previousIndex: s,
              activeIndex: u,
            }),
              t.emit("activeIndexChange"),
              t.emit("snapIndexChange"),
              a !== p && t.emit("realIndexChange"),
              (t.initialized || t.params.runCallbacksOnInit) &&
                t.emit("slideChange");
          },
          updateClickedSlide: function (e) {
            const t = this,
              n = t.params,
              i = m(e).closest(`.${n.slideClass}`)[0];
            let r,
              o = !1;
            if (i)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === i) {
                  (o = !0), (r = e);
                  break;
                }
            if (!i || !o)
              return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = i),
              t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                    m(i).attr("data-swiper-slide-index"),
                    10
                  ))
                : (t.clickedIndex = r),
              n.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        },
        translate: {
          getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
            const {
              params: t,
              rtlTranslate: n,
              translate: i,
              $wrapperEl: r,
            } = this;
            if (t.virtualTranslate) return n ? -i : i;
            if (t.cssMode) return i;
            let o = b(r[0], e);
            return n && (o = -o), o || 0;
          },
          setTranslate: function (e, t) {
            const n = this,
              {
                rtlTranslate: i,
                params: r,
                $wrapperEl: o,
                wrapperEl: s,
                progress: a,
              } = n;
            let l,
              c = 0,
              u = 0;
            n.isHorizontal() ? (c = i ? -e : e) : (u = e),
              r.roundLengths && ((c = Math.floor(c)), (u = Math.floor(u))),
              r.cssMode
                ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    n.isHorizontal() ? -c : -u)
                : r.virtualTranslate ||
                  o.transform(`translate3d(${c}px, ${u}px, 0px)`),
              (n.previousTranslate = n.translate),
              (n.translate = n.isHorizontal() ? c : u);
            const p = n.maxTranslate() - n.minTranslate();
            (l = 0 === p ? 0 : (e - n.minTranslate()) / p) !== a &&
              n.updateProgress(e),
              n.emit("setTranslate", n.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (
            e = 0,
            t = this.params.speed,
            n = !0,
            i = !0,
            r
          ) {
            const o = this,
              { params: s, wrapperEl: a } = o;
            if (o.animating && s.preventInteractionOnTransition) return !1;
            const l = o.minTranslate(),
              c = o.maxTranslate();
            let u;
            if (
              ((u = i && e > l ? l : i && e < c ? c : e),
              o.updateProgress(u),
              s.cssMode)
            ) {
              const e = o.isHorizontal();
              if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -u;
              else {
                if (!o.support.smoothScroll)
                  return (
                    C({
                      swiper: o,
                      targetPosition: -u,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                a.scrollTo({ [e ? "left" : "top"]: -u, behavior: "smooth" });
              }
              return !0;
            }
            return (
              0 === t
                ? (o.setTransition(0),
                  o.setTranslate(u),
                  n &&
                    (o.emit("beforeTransitionStart", t, r),
                    o.emit("transitionEnd")))
                : (o.setTransition(t),
                  o.setTranslate(u),
                  n &&
                    (o.emit("beforeTransitionStart", t, r),
                    o.emit("transitionStart")),
                  o.animating ||
                    ((o.animating = !0),
                    o.onTranslateToWrapperTransitionEnd ||
                      (o.onTranslateToWrapperTransitionEnd = function (e) {
                        o &&
                          !o.destroyed &&
                          e.target === this &&
                          (o.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            o.onTranslateToWrapperTransitionEnd
                          ),
                          o.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            o.onTranslateToWrapperTransitionEnd
                          ),
                          (o.onTranslateToWrapperTransitionEnd = null),
                          delete o.onTranslateToWrapperTransitionEnd,
                          n && o.emit("transitionEnd"));
                      }),
                    o.$wrapperEl[0].addEventListener(
                      "transitionend",
                      o.onTranslateToWrapperTransitionEnd
                    ),
                    o.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      o.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            const n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const n = this,
              { params: i } = n;
            i.cssMode ||
              (i.autoHeight && n.updateAutoHeight(),
              O({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const { params: n } = this;
            (this.animating = !1),
              n.cssMode ||
                (this.setTransition(0),
                O({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "End",
                }));
          },
        },
        slide: {
          slideTo: function (e = 0, t = this.params.speed, n = !0, i, r) {
            if ("number" != typeof e && "string" != typeof e)
              throw new Error(
                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
              );
            if ("string" == typeof e) {
              const t = parseInt(e, 10);
              if (!isFinite(t))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                );
              e = t;
            }
            const o = this;
            let s = e;
            s < 0 && (s = 0);
            const {
              params: a,
              snapGrid: l,
              slidesGrid: c,
              previousIndex: u,
              activeIndex: p,
              rtlTranslate: d,
              wrapperEl: h,
              enabled: f,
            } = o;
            if (
              (o.animating && a.preventInteractionOnTransition) ||
              (!f && !i && !r)
            )
              return !1;
            const g = Math.min(o.params.slidesPerGroupSkip, s);
            let m = g + Math.floor((s - g) / o.params.slidesPerGroup);
            m >= l.length && (m = l.length - 1),
              (p || a.initialSlide || 0) === (u || 0) &&
                n &&
                o.emit("beforeSlideChangeStart");
            const v = -l[m];
            if ((o.updateProgress(v), a.normalizeSlideIndex))
              for (let e = 0; e < c.length; e += 1) {
                const t = -Math.floor(100 * v),
                  n = Math.floor(100 * c[e]),
                  i = Math.floor(100 * c[e + 1]);
                void 0 !== c[e + 1]
                  ? t >= n && t < i - (i - n) / 2
                    ? (s = e)
                    : t >= n && t < i && (s = e + 1)
                  : t >= n && (s = e);
              }
            if (o.initialized && s !== p) {
              if (!o.allowSlideNext && v < o.translate && v < o.minTranslate())
                return !1;
              if (
                !o.allowSlidePrev &&
                v > o.translate &&
                v > o.maxTranslate() &&
                (p || 0) !== s
              )
                return !1;
            }
            let y;
            if (
              ((y = s > p ? "next" : s < p ? "prev" : "reset"),
              (d && -v === o.translate) || (!d && v === o.translate))
            )
              return (
                o.updateActiveIndex(s),
                a.autoHeight && o.updateAutoHeight(),
                o.updateSlidesClasses(),
                "slide" !== a.effect && o.setTranslate(v),
                "reset" !== y &&
                  (o.transitionStart(n, y), o.transitionEnd(n, y)),
                !1
              );
            if (a.cssMode) {
              const e = o.isHorizontal(),
                n = d ? v : -v;
              if (0 === t) {
                const t = o.virtual && o.params.virtual.enabled;
                t &&
                  ((o.wrapperEl.style.scrollSnapType = "none"),
                  (o._immediateVirtual = !0)),
                  (h[e ? "scrollLeft" : "scrollTop"] = n),
                  t &&
                    requestAnimationFrame(() => {
                      (o.wrapperEl.style.scrollSnapType = ""),
                        (o._swiperImmediateVirtual = !1);
                    });
              }
              else {
                if (!o.support.smoothScroll)
                  return (
                    C({
                      swiper: o,
                      targetPosition: n,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                h.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
              }
              return !0;
            }
            return (
              o.setTransition(t),
              o.setTranslate(v),
              o.updateActiveIndex(s),
              o.updateSlidesClasses(),
              o.emit("beforeTransitionStart", t, i),
              o.transitionStart(n, y),
              0 === t
                ? o.transitionEnd(n, y)
                : o.animating ||
                  ((o.animating = !0),
                  o.onSlideToWrapperTransitionEnd ||
                    (o.onSlideToWrapperTransitionEnd = function (e) {
                      o &&
                        !o.destroyed &&
                        e.target === this &&
                        (o.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          o.onSlideToWrapperTransitionEnd
                        ),
                        o.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          o.onSlideToWrapperTransitionEnd
                        ),
                        (o.onSlideToWrapperTransitionEnd = null),
                        delete o.onSlideToWrapperTransitionEnd,
                        o.transitionEnd(n, y));
                    }),
                  o.$wrapperEl[0].addEventListener(
                    "transitionend",
                    o.onSlideToWrapperTransitionEnd
                  ),
                  o.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    o.onSlideToWrapperTransitionEnd
                  )),
              !0
            );
          },
          slideToLoop: function (e = 0, t = this.params.speed, n = !0, i) {
            const r = this;
            let o = e;
            return (
              r.params.loop && (o += r.loopedSlides), r.slideTo(o, t, n, i)
            );
          },
          slideNext: function (e = this.params.speed, t = !0, n) {
            const i = this,
              { animating: r, enabled: o, params: s } = i;
            if (!o) return i;
            let a = s.slidesPerGroup;
            "auto" === s.slidesPerView &&
              1 === s.slidesPerGroup &&
              s.slidesPerGroupAuto &&
              (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
            const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : a;
            if (s.loop) {
              if (r && s.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            return s.rewind && i.isEnd
              ? i.slideTo(0, e, t, n)
              : i.slideTo(i.activeIndex + l, e, t, n);
          },
          slidePrev: function (e = this.params.speed, t = !0, n) {
            const i = this,
              {
                params: r,
                animating: o,
                snapGrid: s,
                slidesGrid: a,
                rtlTranslate: l,
                enabled: c,
              } = i;
            if (!c) return i;
            if (r.loop) {
              if (o && r.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            function u(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const p = u(l ? i.translate : -i.translate);
            let d = s[s.map((e) => u(e)).indexOf(p) - 1];
            if (void 0 === d && r.cssMode) {
              let e;
              s.forEach((t, n) => {
                p >= t && (e = n);
              }),
                void 0 !== e && (d = s[e > 0 ? e - 1 : e]);
            }
            let h = 0;
            return (
              void 0 !== d &&
                ((h = a.indexOf(d)) < 0 && (h = i.activeIndex - 1),
                "auto" === r.slidesPerView &&
                  1 === r.slidesPerGroup &&
                  r.slidesPerGroupAuto &&
                  ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
                  (h = Math.max(h, 0)))),
              r.rewind && i.isBeginning
                ? i.slideTo(i.slides.length - 1, e, t, n)
                : i.slideTo(h, e, t, n)
            );
          },
          slideReset: function (e = this.params.speed, t = !0, n) {
            return this.slideTo(this.activeIndex, e, t, n);
          },
          slideToClosest: function (e = this.params.speed, t = !0, n, i = 0.5) {
            const r = this;
            let o = r.activeIndex;
            const s = Math.min(r.params.slidesPerGroupSkip, o),
              a = s + Math.floor((o - s) / r.params.slidesPerGroup),
              l = r.rtlTranslate ? r.translate : -r.translate;
            if (l >= r.snapGrid[a]) {
              const e = r.snapGrid[a];
              l - e > (r.snapGrid[a + 1] - e) * i &&
                (o += r.params.slidesPerGroup);
            }
            else {
              const e = r.snapGrid[a - 1];
              l - e <= (r.snapGrid[a] - e) * i &&
                (o -= r.params.slidesPerGroup);
            }
            return (
              (o = Math.max(o, 0)),
              (o = Math.min(o, r.slidesGrid.length - 1)),
              r.slideTo(o, e, t, n)
            );
          },
          slideToClickedSlide: function () {
            const e = this,
              { params: t, $wrapperEl: n } = e,
              i =
                "auto" === t.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : t.slidesPerView;
            let r,
              o = e.clickedIndex;
            if (t.loop) {
              if (e.animating) return;
              (r = parseInt(
                m(e.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
                t.centeredSlides
                  ? o < e.loopedSlides - i / 2 ||
                    o > e.slides.length - e.loopedSlides + i / 2
                    ? (e.loopFix(),
                      (o = n
                        .children(
                          `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      v(() => {
                        e.slideTo(o);
                      }))
                    : e.slideTo(o)
                  : o > e.slides.length - i
                  ? (e.loopFix(),
                    (o = n
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    v(() => {
                      e.slideTo(o);
                    }))
                  : e.slideTo(o);
            }
            else e.slideTo(o);
          },
        },
        loop: {
          loopCreate: function () {
            const e = this,
              t = s(),
              { params: n, $wrapperEl: i } = e,
              r = i.children().length > 0 ? m(i.children()[0].parentNode) : i;
            r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
            let o = r.children(`.${n.slideClass}`);
            if (n.loopFillGroupWithBlank) {
              const e = n.slidesPerGroup - (o.length % n.slidesPerGroup);
              if (e !== n.slidesPerGroup) {
                for (let i = 0; i < e; i += 1) {
                  const e = m(t.createElement("div")).addClass(
                    `${n.slideClass} ${n.slideBlankClass}`
                  );
                  r.append(e);
                }
                o = r.children(`.${n.slideClass}`);
              }
            }
            "auto" !== n.slidesPerView ||
              n.loopedSlides ||
              (n.loopedSlides = o.length),
              (e.loopedSlides = Math.ceil(
                parseFloat(n.loopedSlides || n.slidesPerView, 10)
              )),
              (e.loopedSlides += n.loopAdditionalSlides),
              e.loopedSlides > o.length && (e.loopedSlides = o.length);
            const a = [],
              l = [];
            o.each((t, n) => {
              const i = m(t);
              n < e.loopedSlides && l.push(t),
                n < o.length && n >= o.length - e.loopedSlides && a.push(t),
                i.attr("data-swiper-slide-index", n);
            });
            for (let e = 0; e < l.length; e += 1)
              r.append(m(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
            for (let e = a.length - 1; e >= 0; e -= 1)
              r.prepend(m(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
          },
          loopFix: function () {
            const e = this;
            e.emit("beforeLoopFix");
            const {
              activeIndex: t,
              slides: n,
              loopedSlides: i,
              allowSlidePrev: r,
              allowSlideNext: o,
              snapGrid: s,
              rtlTranslate: a,
            } = e;
            let l;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            const c = -s[t] - e.getTranslate();
            t < i
              ? ((l = n.length - 3 * i + t),
                (l += i),
                e.slideTo(l, 0, !1, !0) &&
                  0 !== c &&
                  e.setTranslate((a ? -e.translate : e.translate) - c))
              : t >= n.length - i &&
                ((l = -n.length + t + i),
                (l += i),
                e.slideTo(l, 0, !1, !0) &&
                  0 !== c &&
                  e.setTranslate((a ? -e.translate : e.translate) - c));
            (e.allowSlidePrev = r), (e.allowSlideNext = o), e.emit("loopFix");
          },
          loopDestroy: function () {
            const { $wrapperEl: e, params: t, slides: n } = this;
            e
              .children(
                `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
              )
              .remove(),
              n.removeAttr("data-swiper-slide-index");
          },
        },
        grabCursor: {
          setGrabCursor: function (e) {
            if (
              this.support.touch ||
              !this.params.simulateTouch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode
            )
              return;
            const t =
              "container" === this.params.touchEventsTarget
                ? this.el
                : this.wrapperEl;
            (t.style.cursor = "move"),
              (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (t.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            this.support.touch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode ||
              (this[
                "container" === this.params.touchEventsTarget
                  ? "el"
                  : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = s(),
              { params: n, support: i } = e;
            (e.onTouchStart = L.bind(e)),
              (e.onTouchMove = function (e) {
                const t = s(),
                  n = this,
                  i = n.touchEventsData,
                  { params: r, touches: o, rtlTranslate: a, enabled: l } = n;
                if (!l) return;
                let c = e;
                if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
                  return void (
                    i.startMoving &&
                    i.isScrolling &&
                    n.emit("touchMoveOpposite", c)
                  );
                if (i.isTouchEvent && "touchmove" !== c.type) return;
                const u =
                    "touchmove" === c.type &&
                    c.targetTouches &&
                    (c.targetTouches[0] || c.changedTouches[0]),
                  p = "touchmove" === c.type ? u.pageX : c.pageX,
                  d = "touchmove" === c.type ? u.pageY : c.pageY;
                if (c.preventedByNestedSwiper)
                  return (o.startX = p), void (o.startY = d);
                if (!n.allowTouchMove)
                  return (
                    (n.allowClick = !1),
                    void (
                      i.isTouched &&
                      (Object.assign(o, {
                        startX: p,
                        startY: d,
                        currentX: p,
                        currentY: d,
                      }),
                      (i.touchStartTime = y()))
                    )
                  );
                if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                  if (n.isVertical()) {
                    if (
                      (d < o.startY && n.translate <= n.maxTranslate()) ||
                      (d > o.startY && n.translate >= n.minTranslate())
                    )
                      return (i.isTouched = !1), void (i.isMoved = !1);
                  }
                  else if (
                    (p < o.startX && n.translate <= n.maxTranslate()) ||
                    (p > o.startX && n.translate >= n.minTranslate())
                  )
                    return;
                if (
                  i.isTouchEvent &&
                  t.activeElement &&
                  c.target === t.activeElement &&
                  m(c.target).is(i.focusableElements)
                )
                  return (i.isMoved = !0), void (n.allowClick = !1);
                if (
                  (i.allowTouchCallbacks && n.emit("touchMove", c),
                  c.targetTouches && c.targetTouches.length > 1)
                )
                  return;
                (o.currentX = p), (o.currentY = d);
                const h = o.currentX - o.startX,
                  f = o.currentY - o.startY;
                if (
                  n.params.threshold &&
                  Math.sqrt(h ** 2 + f ** 2) < n.params.threshold
                )
                  return;
                if (void 0 === i.isScrolling) {
                  let e;
                  (n.isHorizontal() && o.currentY === o.startY) ||
                  (n.isVertical() && o.currentX === o.startX)
                    ? (i.isScrolling = !1)
                    : h * h + f * f >= 25 &&
                      ((e =
                        (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
                      (i.isScrolling = n.isHorizontal()
                        ? e > r.touchAngle
                        : 90 - e > r.touchAngle));
                }
                if (
                  (i.isScrolling && n.emit("touchMoveOpposite", c),
                  void 0 === i.startMoving &&
                    ((o.currentX === o.startX && o.currentY === o.startY) ||
                      (i.startMoving = !0)),
                  i.isScrolling)
                )
                  return void (i.isTouched = !1);
                if (!i.startMoving) return;
                (n.allowClick = !1),
                  !r.cssMode && c.cancelable && c.preventDefault(),
                  r.touchMoveStopPropagation &&
                    !r.nested &&
                    c.stopPropagation(),
                  i.isMoved ||
                    (r.loop && !r.cssMode && n.loopFix(),
                    (i.startTranslate = n.getTranslate()),
                    n.setTransition(0),
                    n.animating &&
                      n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                    (i.allowMomentumBounce = !1),
                    !r.grabCursor ||
                      (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
                      n.setGrabCursor(!0),
                    n.emit("sliderFirstMove", c)),
                  n.emit("sliderMove", c),
                  (i.isMoved = !0);
                let g = n.isHorizontal() ? h : f;
                (o.diff = g),
                  (g *= r.touchRatio),
                  a && (g = -g),
                  (n.swipeDirection = g > 0 ? "prev" : "next"),
                  (i.currentTranslate = g + i.startTranslate);
                let v = !0,
                  b = r.resistanceRatio;
                if (
                  (r.touchReleaseOnEdges && (b = 0),
                  g > 0 && i.currentTranslate > n.minTranslate()
                    ? ((v = !1),
                      r.resistance &&
                        (i.currentTranslate =
                          n.minTranslate() -
                          1 +
                          (-n.minTranslate() + i.startTranslate + g) ** b))
                    : g < 0 &&
                      i.currentTranslate < n.maxTranslate() &&
                      ((v = !1),
                      r.resistance &&
                        (i.currentTranslate =
                          n.maxTranslate() +
                          1 -
                          (n.maxTranslate() - i.startTranslate - g) ** b)),
                  v && (c.preventedByNestedSwiper = !0),
                  !n.allowSlideNext &&
                    "next" === n.swipeDirection &&
                    i.currentTranslate < i.startTranslate &&
                    (i.currentTranslate = i.startTranslate),
                  !n.allowSlidePrev &&
                    "prev" === n.swipeDirection &&
                    i.currentTranslate > i.startTranslate &&
                    (i.currentTranslate = i.startTranslate),
                  n.allowSlidePrev ||
                    n.allowSlideNext ||
                    (i.currentTranslate = i.startTranslate),
                  r.threshold > 0)
                ) {
                  if (!(Math.abs(g) > r.threshold || i.allowThresholdMove))
                    return void (i.currentTranslate = i.startTranslate);
                  if (!i.allowThresholdMove)
                    return (
                      (i.allowThresholdMove = !0),
                      (o.startX = o.currentX),
                      (o.startY = o.currentY),
                      (i.currentTranslate = i.startTranslate),
                      void (o.diff = n.isHorizontal()
                        ? o.currentX - o.startX
                        : o.currentY - o.startY)
                    );
                }
                r.followFinger &&
                  !r.cssMode &&
                  (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
                    r.watchSlidesProgress) &&
                    (n.updateActiveIndex(), n.updateSlidesClasses()),
                  n.params.freeMode &&
                    r.freeMode.enabled &&
                    n.freeMode &&
                    n.freeMode.onTouchMove(),
                  n.updateProgress(i.currentTranslate),
                  n.setTranslate(i.currentTranslate));
              }.bind(e)),
              (e.onTouchEnd = function (e) {
                const t = this,
                  n = t.touchEventsData,
                  {
                    params: i,
                    touches: r,
                    rtlTranslate: o,
                    slidesGrid: s,
                    enabled: a,
                  } = t;
                if (!a) return;
                let l = e;
                if (
                  (l.originalEvent && (l = l.originalEvent),
                  n.allowTouchCallbacks && t.emit("touchEnd", l),
                  (n.allowTouchCallbacks = !1),
                  !n.isTouched)
                )
                  return (
                    n.isMoved && i.grabCursor && t.setGrabCursor(!1),
                    (n.isMoved = !1),
                    void (n.startMoving = !1)
                  );
                i.grabCursor &&
                  n.isMoved &&
                  n.isTouched &&
                  (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                  t.setGrabCursor(!1);
                const c = y(),
                  u = c - n.touchStartTime;
                if (t.allowClick) {
                  const e = l.path || (l.composedPath && l.composedPath());
                  t.updateClickedSlide((e && e[0]) || l.target),
                    t.emit("tap click", l),
                    u < 300 &&
                      c - n.lastClickTime < 300 &&
                      t.emit("doubleTap doubleClick", l);
                }
                if (
                  ((n.lastClickTime = y()),
                  v(() => {
                    t.destroyed || (t.allowClick = !0);
                  }),
                  !n.isTouched ||
                    !n.isMoved ||
                    !t.swipeDirection ||
                    0 === r.diff ||
                    n.currentTranslate === n.startTranslate)
                )
                  return (
                    (n.isTouched = !1),
                    (n.isMoved = !1),
                    void (n.startMoving = !1)
                  );
                let p;
                if (
                  ((n.isTouched = !1),
                  (n.isMoved = !1),
                  (n.startMoving = !1),
                  (p = i.followFinger
                    ? o
                      ? t.translate
                      : -t.translate
                    : -n.currentTranslate),
                  i.cssMode)
                )
                  return;
                if (t.params.freeMode && i.freeMode.enabled)
                  return void t.freeMode.onTouchEnd({ currentPos: p });
                let d = 0,
                  h = t.slidesSizesGrid[0];
                for (
                  let e = 0;
                  e < s.length;
                  e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
                ) {
                  const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                  void 0 !== s[e + t]
                    ? p >= s[e] &&
                      p < s[e + t] &&
                      ((d = e), (h = s[e + t] - s[e]))
                    : p >= s[e] &&
                      ((d = e), (h = s[s.length - 1] - s[s.length - 2]));
                }
                const f = (p - s[d]) / h,
                  g = d < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                if (u > i.longSwipesMs) {
                  if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                  "next" === t.swipeDirection &&
                    (f >= i.longSwipesRatio ? t.slideTo(d + g) : t.slideTo(d)),
                    "prev" === t.swipeDirection &&
                      (f > 1 - i.longSwipesRatio
                        ? t.slideTo(d + g)
                        : t.slideTo(d));
                }
                else {
                  if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                  !t.navigation ||
                  (l.target !== t.navigation.nextEl &&
                    l.target !== t.navigation.prevEl)
                    ? ("next" === t.swipeDirection && t.slideTo(d + g),
                      "prev" === t.swipeDirection && t.slideTo(d))
                    : l.target === t.navigation.nextEl
                    ? t.slideTo(d + g)
                    : t.slideTo(d);
                }
              }.bind(e)),
              n.cssMode &&
                (e.onScroll = function () {
                  const e = this,
                    { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
                  if (!i) return;
                  let r;
                  (e.previousTranslate = e.translate),
                    e.isHorizontal()
                      ? (e.translate = -t.scrollLeft)
                      : (e.translate = -t.scrollTop),
                    -0 === e.translate && (e.translate = 0),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                  const o = e.maxTranslate() - e.minTranslate();
                  (r = 0 === o ? 0 : (e.translate - e.minTranslate()) / o) !==
                    e.progress &&
                    e.updateProgress(n ? -e.translate : e.translate),
                    e.emit("setTranslate", e.translate, !1);
                }.bind(e)),
              (e.onClick = function (e) {
                const t = this;
                t.enabled &&
                  (t.allowClick ||
                    (t.params.preventClicks && e.preventDefault(),
                    t.params.preventClicksPropagation &&
                      t.animating &&
                      (e.stopPropagation(), e.stopImmediatePropagation())));
              }.bind(e)),
              i.touch && !M && (t.addEventListener("touchstart", I), (M = !0)),
              $(e, "on");
          },
          detachEvents: function () {
            $(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              {
                activeIndex: t,
                initialized: n,
                loopedSlides: i = 0,
                params: r,
                $el: o,
              } = e,
              s = r.breakpoints;
            if (!s || (s && 0 === Object.keys(s).length)) return;
            const a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
            if (!a || e.currentBreakpoint === a) return;
            const l = (a in s ? s[a] : void 0) || e.originalParams,
              c = N(e, r),
              u = N(e, l),
              p = r.enabled;
            c && !u
              ? (o.removeClass(
                  `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !c &&
                u &&
                (o.addClass(`${r.containerModifierClass}grid`),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === r.grid.fill)) &&
                  o.addClass(`${r.containerModifierClass}grid-column`),
                e.emitContainerClasses());
            const d = l.direction && l.direction !== r.direction,
              h = r.loop && (l.slidesPerView !== r.slidesPerView || d);
            d && n && e.changeDirection(), x(e.params, l);
            const f = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              p && !f ? e.disable() : !p && f && e.enable(),
              (e.currentBreakpoint = a),
              e.emit("_beforeBreakpoint", l),
              h &&
                n &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - i + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", l);
          },
          getBreakpoint: function (e, t = "window", n) {
            if (!e || ("container" === t && !n)) return;
            let i = !1;
            const r = l(),
              o = "window" === t ? r.innerHeight : n.clientHeight,
              s = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: o * t, point: e };
                }
                return { value: e, point: e };
              });
            s.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < s.length; e += 1) {
              const { point: o, value: a } = s[e];
              "window" === t
                ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = o)
                : a <= n.clientWidth && (i = o);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: i } = n;
            if (i) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > n;
            }
            else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const {
                classNames: e,
                params: t,
                rtl: n,
                $el: i,
                device: r,
                support: o,
              } = this,
              s = (function (e, t) {
                const n = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && n.push(t + i);
                        })
                      : "string" == typeof e && n.push(t + e);
                  }),
                  n
                );
              })(
                [
                  "initialized",
                  t.direction,
                  { "pointer-events": !o.touch },
                  { "free-mode": this.params.freeMode && t.freeMode.enabled },
                  { autoheight: t.autoHeight },
                  { rtl: n },
                  { grid: t.grid && t.grid.rows > 1 },
                  {
                    "grid-column":
                      t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { "css-mode": t.cssMode },
                  { centered: t.cssMode && t.centeredSlides },
                ],
                t.containerModifierClass
              );
            e.push(...s),
              i.addClass([...e].join(" ")),
              this.emitContainerClasses();
          },
          removeClasses: function () {
            const { $el: e, classNames: t } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses();
          },
        },
        images: {
          loadImage: function (e, t, n, i, r, o) {
            const s = l();
            let a;
            function c() {
              o && o();
            }
            m(e).parent("picture")[0] || (e.complete && r)
              ? c()
              : t
              ? (((a = new s.Image()).onload = c),
                (a.onerror = c),
                i && (a.sizes = i),
                n && (a.srcset = n),
                t && (a.src = t))
              : c();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              void 0 !== e &&
                null !== e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let n = 0; n < e.imagesToLoad.length; n += 1) {
              const i = e.imagesToLoad[n];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      R = {};
    class B {
      constructor(...e) {
        let t, n;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (n = e[0])
            : ([t, n] = e),
          n || (n = {}),
          (n = x({}, n)),
          t && !n.el && (n.el = t),
          n.el && m(n.el).length > 1)
        ) {
          const e = [];
          return (
            m(n.el).each((t) => {
              const i = x({}, n, { el: t });
              e.push(new B(i));
            }),
            e
          );
        }
        const i = this;
        (i.__swiper__ = !0),
          (i.support = S()),
          (i.device = E({ userAgent: n.userAgent })),
          (i.browser = P()),
          (i.eventsListeners = {}),
          (i.eventsAnyListeners = []),
          (i.modules = [...i.__modules__]),
          n.modules && Array.isArray(n.modules) && i.modules.push(...n.modules);
        const r = {};
        i.modules.forEach((e) => {
          e({
            swiper: i,
            extendParams: (function (e, t) {
              return function (n = {}) {
                const i = Object.keys(n)[0],
                  r = n[i];
                "object" == typeof r && null !== r
                  ? (["navigation", "pagination", "scrollbar"].indexOf(i) >=
                      0 &&
                      !0 === e[i] &&
                      (e[i] = { auto: !0 }),
                    i in e && "enabled" in r
                      ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                        "object" != typeof e[i] ||
                          "enabled" in e[i] ||
                          (e[i].enabled = !0),
                        e[i] || (e[i] = { enabled: !1 }),
                        x(t, n))
                      : x(t, n))
                  : x(t, n);
              };
            })(n, r),
            on: i.on.bind(i),
            once: i.once.bind(i),
            off: i.off.bind(i),
            emit: i.emit.bind(i),
          });
        });
        const o = x({}, z, r);
        return (
          (i.params = x({}, o, R, n)),
          (i.originalParams = x({}, i.params)),
          (i.passedParams = x({}, n)),
          i.params &&
            i.params.on &&
            Object.keys(i.params.on).forEach((e) => {
              i.on(e, i.params.on[e]);
            }),
          i.params && i.params.onAny && i.onAny(i.params.onAny),
          (i.$ = m),
          Object.assign(i, {
            enabled: i.params.enabled,
            el: t,
            classNames: [],
            slides: m(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === i.params.direction,
            isVertical: () => "vertical" === i.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: i.params.allowSlideNext,
            allowSlidePrev: i.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (i.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                i.support.touch || !i.params.simulateTouch
                  ? i.touchEventsTouch
                  : i.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: i.params.focusableElements,
              lastClickTime: y(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: i.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          i.emit("_swiper"),
          i.params.init && i.init(),
          i
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        e = Math.min(Math.max(e, 0), 1);
        const n = this.minTranslate(),
          i = (this.maxTranslate() - n) * e + n;
        this.translateTo(i, void 0 === t ? 0 : t),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((n) => {
          const i = e.getSlideClasses(n);
          t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: n,
          slides: i,
          slidesGrid: r,
          slidesSizesGrid: o,
          size: s,
          activeIndex: a,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let e,
            t = i[a].swiperSlideSize;
          for (let n = a + 1; n < i.length; n += 1)
            i[n] &&
              !e &&
              ((l += 1), (t += i[n].swiperSlideSize) > s && (e = !0));
          for (let n = a - 1; n >= 0; n -= 1)
            i[n] &&
              !e &&
              ((l += 1), (t += i[n].swiperSlideSize) > s && (e = !0));
        }
        else if ("current" === e)
          for (let e = a + 1; e < i.length; e += 1) {
            (t ? r[e] + o[e] - r[a] < s : r[e] - r[a] < s) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            r[a] - r[e] < s && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: n } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        n.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : (r =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)) || i(),
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const n = this,
          i = n.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i || ("horizontal" !== e && "vertical" !== e)
            ? n
            : (n.$el
                .removeClass(`${n.params.containerModifierClass}${i}`)
                .addClass(`${n.params.containerModifierClass}${e}`),
              n.emitContainerClasses(),
              (n.params.direction = e),
              n.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              n.emit("changeDirection"),
              t && n.update(),
              n)
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const n = m(e || t.params.el);
        if (!(e = n[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = m(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => n.children(e)), t;
          }
          return n.children(i());
        })();
        if (0 === r.length && t.params.createElements) {
          const e = s().createElement("div");
          (r = m(e)),
            (e.className = t.params.wrapperClass),
            n.append(e),
            n.children(`.${t.params.slideClass}`).each((e) => {
              r.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: r,
            wrapperEl: r[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === r.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        return t.initialized
          ? t
          : !1 === t.mount(e)
          ? t
          : (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit"),
            t);
      }
      destroy(e = !0, t = !0) {
        const n = this,
          { params: i, $el: r, $wrapperEl: o, slides: s } = n;
        return void 0 === n.params || n.destroyed
          ? null
          : (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            i.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              r.removeAttr("style"),
              o.removeAttr("style"),
              s &&
                s.length &&
                s
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach((e) => {
              n.off(e);
            }),
            !1 !== e &&
              ((n.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(n)),
            (n.destroyed = !0),
            null);
      }
      static extendDefaults(e) {
        x(R, e);
      }
      static get extendedDefaults() {
        return R;
      }
      static get defaults() {
        return z;
      }
      static installModule(e) {
        B.prototype.__modules__ || (B.prototype.__modules__ = []);
        const t = B.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => B.installModule(e)), B)
          : (B.installModule(e), B);
      }
    }
    Object.keys(j).forEach((e) => {
      Object.keys(j[e]).forEach((t) => {
        B.prototype[t] = j[e][t];
      });
    }),
      B.use([
        function ({ swiper: e, on: t, emit: n }) {
          const i = l();
          let r = null;
          const o = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (n("beforeResize"), n("resize"));
            },
            s = () => {
              e && !e.destroyed && e.initialized && n("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                (r = new ResizeObserver((t) => {
                  const { width: n, height: i } = e;
                  let r = n,
                    s = i;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: n, target: i }) => {
                      (i && i !== e.el) ||
                        ((r = n ? n.width : (t[0] || t).inlineSize),
                        (s = n ? n.height : (t[0] || t).blockSize));
                    }
                  ),
                    (r === n && s === i) || o();
                })).observe(e.el)
              : (i.addEventListener("resize", o),
                i.addEventListener("orientationchange", s));
          }),
            t("destroy", () => {
              r && r.unobserve && e.el && (r.unobserve(e.el), (r = null)),
                i.removeEventListener("resize", o),
                i.removeEventListener("orientationchange", s);
            });
        },
        function ({ swiper: e, extendParams: t, on: n, emit: i }) {
          const r = [],
            o = l(),
            s = (e, t = {}) => {
              const n = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void i("observerUpdate", e[0]);
                  const t = function () {
                    i("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(t)
                    : o.setTimeout(t, 0);
                }
              );
              n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                r.push(n);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            n("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) s(t[e]);
                }
                s(e.$el[0], { childList: e.params.observeSlideChildren }),
                  s(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            n("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    var F = B;
    function q(e, t, n, i) {
      const r = s();
      return (
        e.params.createElements &&
          Object.keys(i).forEach((o) => {
            if (!n[o] && !0 === n.auto) {
              let s = e.$el.children(`.${i[o]}`)[0];
              s ||
                (((s = r.createElement("div")).className = i[o]),
                e.$el.append(s)),
                (n[o] = s),
                (t[o] = s);
            }
          }),
        n
      );
    }
    function H({ swiper: e, extendParams: t, on: n, emit: i }) {
      function r(t) {
        let n;
        return (
          t &&
            ((n = m(t)),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              n.length > 1 &&
              1 === e.$el.find(t).length &&
              (n = e.$el.find(t))),
          n
        );
      }
      function o(t, n) {
        const i = e.params.navigation;
        t &&
          t.length > 0 &&
          (t[n ? "addClass" : "removeClass"](i.disabledClass),
          t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = n),
          e.params.watchOverflow &&
            e.enabled &&
            t[e.isLocked ? "addClass" : "removeClass"](i.lockClass));
      }
      function s() {
        if (e.params.loop) return;
        const { $nextEl: t, $prevEl: n } = e.navigation;
        o(n, e.isBeginning && !e.params.rewind),
          o(t, e.isEnd && !e.params.rewind);
      }
      function a(t) {
        t.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev();
      }
      function l(t) {
        t.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
      }
      function c() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = q(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        const n = r(t.nextEl),
          i = r(t.prevEl);
        n && n.length > 0 && n.on("click", l),
          i && i.length > 0 && i.on("click", a),
          Object.assign(e.navigation, {
            $nextEl: n,
            nextEl: n && n[0],
            $prevEl: i,
            prevEl: i && i[0],
          }),
          e.enabled ||
            (n && n.addClass(t.lockClass), i && i.addClass(t.lockClass));
      }
      function u() {
        const { $nextEl: t, $prevEl: n } = e.navigation;
        t &&
          t.length &&
          (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)),
          n &&
            n.length &&
            (n.off("click", a),
            n.removeClass(e.params.navigation.disabledClass));
      }
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (e.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        n("init", () => {
          c(), s();
        }),
        n("toEdge fromEdge lock unlock", () => {
          s();
        }),
        n("destroy", () => {
          u();
        }),
        n("enable disable", () => {
          const { $nextEl: t, $prevEl: n } = e.navigation;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            ),
            n &&
              n[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              );
        }),
        n("click", (t, n) => {
          const { $nextEl: r, $prevEl: o } = e.navigation,
            s = n.target;
          if (e.params.navigation.hideOnClick && !m(s).is(o) && !m(s).is(r)) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === s || e.pagination.el.contains(s))
            )
              return;
            let t;
            r
              ? (t = r.hasClass(e.params.navigation.hiddenClass))
              : o && (t = o.hasClass(e.params.navigation.hiddenClass)),
              i(!0 === t ? "navigationShow" : "navigationHide"),
              r && r.toggleClass(e.params.navigation.hiddenClass),
              o && o.toggleClass(e.params.navigation.hiddenClass);
          }
        }),
        Object.assign(e.navigation, { update: s, init: c, destroy: u });
    }
    function U(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function G({ swiper: e, extendParams: t, on: n, emit: i }) {
      const r = "swiper-pagination";
      let o;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
        },
      }),
        (e.pagination = { el: null, $el: null, bullets: [] });
      let s = 0;
      function a() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        );
      }
      function l(t, n) {
        const { bulletActiveClass: i } = e.params.pagination;
        t[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`);
      }
      function c() {
        const t = e.rtl,
          n = e.params.pagination;
        if (a()) return;
        const r =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          c = e.pagination.$el;
        let u;
        const p = e.params.loop
          ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((u = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )) >
                r - 1 - 2 * e.loopedSlides && (u -= r - 2 * e.loopedSlides),
              u > p - 1 && (u -= p),
              u < 0 && "bullets" !== e.params.paginationType && (u = p + u))
            : (u = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === n.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const i = e.pagination.bullets;
          let r, a, p;
          if (
            (n.dynamicBullets &&
              ((o = i
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              c.css(
                e.isHorizontal() ? "width" : "height",
                `${o * (n.dynamicMainBullets + 4)}px`
              ),
              n.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((s += u - (e.previousIndex - e.loopedSlides || 0)) >
                n.dynamicMainBullets - 1
                  ? (s = n.dynamicMainBullets - 1)
                  : s < 0 && (s = 0)),
              (r = Math.max(u - s, 0)),
              (p =
                ((a = r + (Math.min(i.length, n.dynamicMainBullets) - 1)) + r) /
                2)),
            i.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${n.bulletActiveClass}${e}`)
                .join(" ")
            ),
            c.length > 1)
          )
            i.each((e) => {
              const t = m(e),
                i = t.index();
              i === u && t.addClass(n.bulletActiveClass),
                n.dynamicBullets &&
                  (i >= r &&
                    i <= a &&
                    t.addClass(`${n.bulletActiveClass}-main`),
                  i === r && l(t, "prev"),
                  i === a && l(t, "next"));
            });
          else {
            const t = i.eq(u),
              o = t.index();
            if ((t.addClass(n.bulletActiveClass), n.dynamicBullets)) {
              const t = i.eq(r),
                s = i.eq(a);
              for (let e = r; e <= a; e += 1)
                i.eq(e).addClass(`${n.bulletActiveClass}-main`);
              if (e.params.loop)
                if (o >= i.length) {
                  for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                    i.eq(i.length - e).addClass(`${n.bulletActiveClass}-main`);
                  i.eq(i.length - n.dynamicMainBullets - 1).addClass(
                    `${n.bulletActiveClass}-prev`
                  );
                }
                else l(t, "prev"), l(s, "next");
              else l(t, "prev"), l(s, "next");
            }
          }
          if (n.dynamicBullets) {
            const r = Math.min(i.length, n.dynamicMainBullets + 4),
              s = (o * r - o) / 2 - p * o,
              a = t ? "right" : "left";
            i.css(e.isHorizontal() ? a : "top", `${s}px`);
          }
        }
        if (
          ("fraction" === n.type &&
            (c.find(U(n.currentClass)).text(n.formatFractionCurrent(u + 1)),
            c.find(U(n.totalClass)).text(n.formatFractionTotal(p))),
          "progressbar" === n.type)
        ) {
          let t;
          t = n.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const i = (u + 1) / p;
          let r = 1,
            o = 1;
          "horizontal" === t ? (r = i) : (o = i),
            c
              .find(U(n.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${o})`)
              .transition(e.params.speed);
        }
        "custom" === n.type && n.renderCustom
          ? (c.html(n.renderCustom(e, u + 1, p)), i("paginationRender", c[0]))
          : i("paginationUpdate", c[0]),
          e.params.watchOverflow &&
            e.enabled &&
            c[e.isLocked ? "addClass" : "removeClass"](n.lockClass);
      }
      function u() {
        const t = e.params.pagination;
        if (a()) return;
        const n =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          r = e.pagination.$el;
        let o = "";
        if ("bullets" === t.type) {
          let i = e.params.loop
            ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode &&
            e.params.freeMode.enabled &&
            !e.params.loop &&
            i > n &&
            (i = n);
          for (let n = 0; n < i; n += 1)
            t.renderBullet
              ? (o += t.renderBullet.call(e, n, t.bulletClass))
              : (o += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          r.html(o), (e.pagination.bullets = r.find(U(t.bulletClass)));
        }
        "fraction" === t.type &&
          ((o = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span>` +
              " / " +
              `<span class="${t.totalClass}"></span>`),
          r.html(o)),
          "progressbar" === t.type &&
            ((o = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            r.html(o)),
          "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
      }
      function p() {
        e.params.pagination = q(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        const t = e.params.pagination;
        if (!t.el) return;
        let n = m(t.el);
        0 !== n.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            n.length > 1 &&
            (n = e.$el.find(t.el)).length > 1 &&
            (n = n.filter((t) => m(t).parents(".swiper")[0] === e.el)),
          "bullets" === t.type && t.clickable && n.addClass(t.clickableClass),
          n.addClass(t.modifierClass + t.type),
          n.addClass(t.modifierClass + e.params.direction),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (n.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (s = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            n.addClass(t.progressbarOppositeClass),
          t.clickable &&
            n.on("click", U(t.bulletClass), function (t) {
              t.preventDefault();
              let n = m(this).index() * e.params.slidesPerGroup;
              e.params.loop && (n += e.loopedSlides), e.slideTo(n);
            }),
          Object.assign(e.pagination, { $el: n, el: n[0] }),
          e.enabled || n.addClass(t.lockClass));
      }
      function d() {
        const t = e.params.pagination;
        if (a()) return;
        const n = e.pagination.$el;
        n.removeClass(t.hiddenClass),
          n.removeClass(t.modifierClass + t.type),
          n.removeClass(t.modifierClass + e.params.direction),
          e.pagination.bullets &&
            e.pagination.bullets.removeClass &&
            e.pagination.bullets.removeClass(t.bulletActiveClass),
          t.clickable && n.off("click", U(t.bulletClass));
      }
      n("init", () => {
        p(), u(), c();
      }),
        n("activeIndexChange", () => {
          e.params.loop ? c() : void 0 === e.snapIndex && c();
        }),
        n("snapIndexChange", () => {
          e.params.loop || c();
        }),
        n("slidesLengthChange", () => {
          e.params.loop && (u(), c());
        }),
        n("snapGridLengthChange", () => {
          e.params.loop || (u(), c());
        }),
        n("destroy", () => {
          d();
        }),
        n("enable disable", () => {
          const { $el: t } = e.pagination;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.pagination.lockClass
            );
        }),
        n("lock unlock", () => {
          c();
        }),
        n("click", (t, n) => {
          const r = n.target,
            { $el: o } = e.pagination;
          if (
            e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            o.length > 0 &&
            !m(r).hasClass(e.params.pagination.bulletClass)
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && r === e.navigation.nextEl) ||
                (e.navigation.prevEl && r === e.navigation.prevEl))
            )
              return;
            const t = o.hasClass(e.params.pagination.hiddenClass);
            i(!0 === t ? "paginationShow" : "paginationHide"),
              o.toggleClass(e.params.pagination.hiddenClass);
          }
        }),
        Object.assign(e.pagination, {
          render: u,
          update: c,
          init: p,
          destroy: d,
        });
    }
    function V({ swiper: e, extendParams: t, on: n }) {
      function i(e, t) {
        const n = (function () {
          let e, t, n;
          return (i, r) => {
            for (t = -1, e = i.length; e - t > 1; )
              i[(n = (e + t) >> 1)] <= r ? (t = n) : (e = n);
            return e;
          };
        })();
        let i, r;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((r = n(this.x, e)),
                (i = r - 1),
                ((e - this.x[i]) * (this.y[r] - this.y[i])) /
                  (this.x[r] - this.x[i]) +
                  this.y[i])
              : 0;
          }),
          this
        );
      }
      function r() {
        e.controller.control &&
          e.controller.spline &&
          ((e.controller.spline = void 0), delete e.controller.spline);
      }
      t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (e.controller = { control: void 0 }),
        n("beforeInit", () => {
          e.controller.control = e.params.controller.control;
        }),
        n("update", () => {
          r();
        }),
        n("resize", () => {
          r();
        }),
        n("observerUpdate", () => {
          r();
        }),
        n("setTranslate", (t, n, i) => {
          e.controller.control && e.controller.setTranslate(n, i);
        }),
        n("setTransition", (t, n, i) => {
          e.controller.control && e.controller.setTransition(n, i);
        }),
        Object.assign(e.controller, {
          setTranslate: function (t, n) {
            const r = e.controller.control;
            let o, s;
            const a = e.constructor;
            function l(t) {
              const n = e.rtlTranslate ? -e.translate : e.translate;
              "slide" === e.params.controller.by &&
                ((function (t) {
                  e.controller.spline ||
                    (e.controller.spline = e.params.loop
                      ? new i(e.slidesGrid, t.slidesGrid)
                      : new i(e.snapGrid, t.snapGrid));
                })(t),
                (s = -e.controller.spline.interpolate(-n))),
                (s && "container" !== e.params.controller.by) ||
                  ((o =
                    (t.maxTranslate() - t.minTranslate()) /
                    (e.maxTranslate() - e.minTranslate())),
                  (s = (n - e.minTranslate()) * o + t.minTranslate())),
                e.params.controller.inverse && (s = t.maxTranslate() - s),
                t.updateProgress(s),
                t.setTranslate(s, e),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            }
            if (Array.isArray(r))
              for (let e = 0; e < r.length; e += 1)
                r[e] !== n && r[e] instanceof a && l(r[e]);
            else r instanceof a && n !== r && l(r);
          },
          setTransition: function (t, n) {
            const i = e.constructor,
              r = e.controller.control;
            let o;
            function s(n) {
              n.setTransition(t, e),
                0 !== t &&
                  (n.transitionStart(),
                  n.params.autoHeight &&
                    v(() => {
                      n.updateAutoHeight();
                    }),
                  n.$wrapperEl.transitionEnd(() => {
                    r &&
                      (n.params.loop &&
                        "slide" === e.params.controller.by &&
                        n.loopFix(),
                      n.transitionEnd());
                  }));
            }
            if (Array.isArray(r))
              for (o = 0; o < r.length; o += 1)
                r[o] !== n && r[o] instanceof i && s(r[o]);
            else r instanceof i && n !== r && s(r);
          },
        });
    }
    function W({ swiper: e, extendParams: t, on: n, emit: i }) {
      let r;
      function o() {
        const t = e.slides.eq(e.activeIndex);
        let n = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(r),
          (r = v(() => {
            let t;
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  (t = e.slidePrev(e.params.speed, !0, !0)),
                  i("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((t = e.slideTo(
                      e.slides.length - 1,
                      e.params.speed,
                      !0,
                      !0
                    )),
                    i("autoplay"))
                : ((t = e.slidePrev(e.params.speed, !0, !0)), i("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                (t = e.slideNext(e.params.speed, !0, !0)),
                i("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? l()
                : ((t = e.slideTo(0, e.params.speed, !0, !0)), i("autoplay"))
              : ((t = e.slideNext(e.params.speed, !0, !0)), i("autoplay")),
              e.params.cssMode && e.autoplay.running ? o() : !1 === t && o();
          }, n));
      }
      function a() {
        return (
          void 0 === r &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0), i("autoplayStart"), o(), !0)
        );
      }
      function l() {
        return (
          !!e.autoplay.running &&
          void 0 !== r &&
          (r && (clearTimeout(r), (r = void 0)),
          (e.autoplay.running = !1),
          i("autoplayStop"),
          !0)
        );
      }
      function c(t) {
        e.autoplay.running &&
          (e.autoplay.paused ||
            (r && clearTimeout(r),
            (e.autoplay.paused = !0),
            0 !== t && e.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                  e.$wrapperEl[0].addEventListener(t, p);
                })
              : ((e.autoplay.paused = !1), o())));
      }
      function u() {
        const t = s();
        "hidden" === t.visibilityState && e.autoplay.running && c(),
          "visible" === t.visibilityState &&
            e.autoplay.paused &&
            (o(), (e.autoplay.paused = !1));
      }
      function p(t) {
        e &&
          !e.destroyed &&
          e.$wrapperEl &&
          t.target === e.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, p);
          }),
          (e.autoplay.paused = !1),
          e.autoplay.running ? o() : l());
      }
      function d() {
        e.params.autoplay.disableOnInteraction ? l() : c(),
          ["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, p);
          });
      }
      function h() {
        e.params.autoplay.disableOnInteraction ||
          ((e.autoplay.paused = !1), o());
      }
      (e.autoplay = { running: !1, paused: !1 }),
        t({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        n("init", () => {
          if (e.params.autoplay.enabled) {
            a(),
              s().addEventListener("visibilitychange", u),
              e.params.autoplay.pauseOnMouseEnter &&
                (e.$el.on("mouseenter", d), e.$el.on("mouseleave", h));
          }
        }),
        n("beforeTransitionStart", (t, n, i) => {
          e.autoplay.running &&
            (i || !e.params.autoplay.disableOnInteraction
              ? e.autoplay.pause(n)
              : l());
        }),
        n("sliderFirstMove", () => {
          e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction ? l() : c());
        }),
        n("touchEnd", () => {
          e.params.cssMode &&
            e.autoplay.paused &&
            !e.params.autoplay.disableOnInteraction &&
            o();
        }),
        n("destroy", () => {
          e.$el.off("mouseenter", d),
            e.$el.off("mouseleave", h),
            e.autoplay.running && l(),
            s().removeEventListener("visibilitychange", u);
        }),
        Object.assign(e.autoplay, { pause: c, run: o, start: a, stop: l });
    }
    function Y(e) {
      const {
        effect: t,
        swiper: n,
        on: i,
        setTranslate: r,
        setTransition: o,
        overwriteParams: s,
        perspective: a,
      } = e;
      i("beforeInit", () => {
        if (n.params.effect !== t) return;
        n.classNames.push(`${n.params.containerModifierClass}${t}`),
          a && a() && n.classNames.push(`${n.params.containerModifierClass}3d`);
        const e = s ? s() : {};
        Object.assign(n.params, e), Object.assign(n.originalParams, e);
      }),
        i("setTranslate", () => {
          n.params.effect === t && r();
        }),
        i("setTransition", (e, i) => {
          n.params.effect === t && o(i);
        });
    }
    function X(e, t) {
      return e.transformEl
        ? t
            .find(e.transformEl)
            .css({
              "backface-visibility": "hidden",
              "-webkit-backface-visibility": "hidden",
            })
        : t;
    }
    function K({ swiper: e, duration: t, transformEl: n, allSlides: i }) {
      const { slides: r, activeIndex: o, $wrapperEl: s } = e;
      if (e.params.virtualTranslate && 0 !== t) {
        let t,
          a = !1;
        (t = i
          ? n
            ? r.find(n)
            : r
          : n
          ? r.eq(o).find(n)
          : r.eq(o)).transitionEnd(() => {
          if (a) return;
          if (!e || e.destroyed) return;
          (a = !0), (e.animating = !1);
          const t = ["webkitTransitionEnd", "transitionend"];
          for (let e = 0; e < t.length; e += 1) s.trigger(t[e]);
        });
      }
    }
    function Z({ swiper: e, extendParams: t, on: n }) {
      t({ fadeEffect: { crossFade: !1, transformEl: null } });
      Y({
        effect: "fade",
        swiper: e,
        on: n,
        setTranslate: () => {
          const { slides: t } = e,
            n = e.params.fadeEffect;
          for (let i = 0; i < t.length; i += 1) {
            const t = e.slides.eq(i);
            let r = -t[0].swiperSlideOffset;
            e.params.virtualTranslate || (r -= e.translate);
            let o = 0;
            e.isHorizontal() || ((o = r), (r = 0));
            const s = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(t[0].progress), 0)
              : 1 + Math.min(Math.max(t[0].progress, -1), 0);
            X(n, t)
              .css({ opacity: s })
              .transform(`translate3d(${r}px, ${o}px, 0px)`);
          }
        },
        setTransition: (t) => {
          const { transformEl: n } = e.params.fadeEffect;
          (n ? e.slides.find(n) : e.slides).transition(t),
            K({ swiper: e, duration: t, transformEl: n, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
    }
  },
  function (e, t, n) {
    var i;
    !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, r) {
      "use strict";
      var o = [],
        s = Object.getPrototypeOf,
        a = o.slice,
        l = o.flat
          ? function (e) {
              return o.flat.call(e);
            }
          : function (e) {
              return o.concat.apply([], e);
            },
        c = o.push,
        u = o.indexOf,
        p = {},
        d = p.toString,
        h = p.hasOwnProperty,
        f = h.toString,
        g = f.call(Object),
        m = {},
        v = function (e) {
          return (
            "function" == typeof e &&
            "number" != typeof e.nodeType &&
            "function" != typeof e.item
          );
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        b = n.document,
        w = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function x(e, t, n) {
        var i,
          r,
          o = (n = n || b).createElement("script");
        if (((o.text = e), t))
          for (i in w)
            (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
              o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function _(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? p[d.call(e)] || "object"
          : typeof e;
      }
      var C = /HTML$/i,
        k = function (e, t) {
          return new k.fn.init(e, t);
        };
      function T(e) {
        var t = !!e && "length" in e && e.length,
          n = _(e);
        return (
          !v(e) &&
          !y(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      (k.fn = k.prototype =
        {
          jquery: "3.7.1",
          constructor: k,
          length: 0,
          toArray: function () {
            return a.call(this);
          },
          get: function (e) {
            return null == e
              ? a.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = k.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return k.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              k.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(a.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              k.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              k.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: c,
          sort: o.sort,
          splice: o.splice,
        }),
        (k.extend = k.fn.extend =
          function () {
            var e,
              t,
              n,
              i,
              r,
              o,
              s = arguments[0] || {},
              a = 1,
              l = arguments.length,
              c = !1;
            for (
              "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
                "object" == typeof s || v(s) || (s = {}),
                a === l && ((s = this), a--);
              a < l;
              a++
            )
              if (null != (e = arguments[a]))
                for (t in e)
                  (i = e[t]),
                    "__proto__" !== t &&
                      s !== i &&
                      (c && i && (k.isPlainObject(i) || (r = Array.isArray(i)))
                        ? ((n = s[t]),
                          (o =
                            r && !Array.isArray(n)
                              ? []
                              : r || k.isPlainObject(n)
                              ? n
                              : {}),
                          (r = !1),
                          (s[t] = k.extend(c, o, i)))
                        : void 0 !== i && (s[t] = i));
            return s;
          }),
        k.extend({
          expando: "jQuery" + ("3.7.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== d.call(e)) &&
              (!(t = s(e)) ||
                ("function" ==
                  typeof (n = h.call(t, "constructor") && t.constructor) &&
                  f.call(n) === g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            x(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              i = 0;
            if (T(e))
              for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
          },
          text: function (e) {
            var t,
              n = "",
              i = 0,
              r = e.nodeType;
            if (!r) for (; (t = e[i++]); ) n += k.text(t);
            return 1 === r || 11 === r
              ? e.textContent
              : 9 === r
              ? e.documentElement.textContent
              : 3 === r || 4 === r
              ? e.nodeValue
              : n;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (T(Object(e))
                  ? k.merge(n, "string" == typeof e ? [e] : e)
                  : c.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
          },
          isXMLDoc: function (e) {
            var t = e && e.namespaceURI,
              n = e && (e.ownerDocument || e).documentElement;
            return !C.test(t || (n && n.nodeName) || "HTML");
          },
          merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
              e[r++] = t[i];
            return (e.length = r), e;
          },
          grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
              !t(e[r], r) !== s && i.push(e[r]);
            return i;
          },
          map: function (e, t, n) {
            var i,
              r,
              o = 0,
              s = [];
            if (T(e))
              for (i = e.length; o < i; o++)
                null != (r = t(e[o], o, n)) && s.push(r);
            else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return l(s);
          },
          guid: 1,
          support: m,
        }),
        "function" == typeof Symbol &&
          (k.fn[Symbol.iterator] = o[Symbol.iterator]),
        k.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            p["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var S = o.pop,
        E = o.sort,
        P = o.splice,
        O = "[\\x20\\t\\r\\n\\f]",
        L = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g");
      k.contains = function (e, t) {
        var n = t && t.parentNode;
        return (
          e === n ||
          !(
            !n ||
            1 !== n.nodeType ||
            !(e.contains
              ? e.contains(n)
              : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
          )
        );
      };
      var D = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function M(e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      }
      k.escapeSelector = function (e) {
        return (e + "").replace(D, M);
      };
      var I = b,
        $ = c;
      !(function () {
        var e,
          t,
          i,
          r,
          s,
          l,
          c,
          p,
          d,
          f,
          g = $,
          v = k.expando,
          y = 0,
          b = 0,
          w = ee(),
          x = ee(),
          _ = ee(),
          C = ee(),
          T = function (e, t) {
            return e === t && (s = !0), 0;
          },
          D =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          M =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            O +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          N =
            "\\[" +
            O +
            "*(" +
            M +
            ")(?:" +
            O +
            "*([*^$|!~]?=)" +
            O +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            M +
            "))|)" +
            O +
            "*\\]",
          z =
            ":(" +
            M +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            N +
            ")*)|.*)\\)|)",
          j = new RegExp(O + "+", "g"),
          R = new RegExp("^" + O + "*," + O + "*"),
          B = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
          F = new RegExp(O + "|>"),
          q = new RegExp(z),
          H = new RegExp("^" + M + "$"),
          U = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + z),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                O +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                O +
                "*(?:([+-]|)" +
                O +
                "*(\\d+)|))" +
                O +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + D + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                O +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                O +
                "*((?:-\\d)?\\d*)" +
                O +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          G = /^(?:input|select|textarea|button)$/i,
          V = /^h\d$/i,
          W = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          Y = /[+~]/,
          X = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + O + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          K = function (e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return (
              t ||
              (n < 0
                ? String.fromCharCode(n + 65536)
                : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
            );
          },
          Z = function () {
            le();
          },
          Q = de(
            function (e) {
              return !0 === e.disabled && A(e, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          g.apply((o = a.call(I.childNodes)), I.childNodes),
            o[I.childNodes.length].nodeType;
        } catch (e) {
          g = {
            apply: function (e, t) {
              $.apply(e, a.call(t));
            },
            call: function (e) {
              $.apply(e, a.call(arguments, 1));
            },
          };
        }
        function J(e, t, n, i) {
          var r,
            o,
            s,
            a,
            c,
            u,
            h,
            f = t && t.ownerDocument,
            y = t ? t.nodeType : 9;
          if (
            ((n = n || []),
            "string" != typeof e || !e || (1 !== y && 9 !== y && 11 !== y))
          )
            return n;
          if (!i && (le(t), (t = t || l), p)) {
            if (11 !== y && (c = W.exec(e)))
              if ((r = c[1])) {
                if (9 === y) {
                  if (!(s = t.getElementById(r))) return n;
                  if (s.id === r) return g.call(n, s), n;
                }
                else if (
                  f &&
                  (s = f.getElementById(r)) &&
                  J.contains(t, s) &&
                  s.id === r
                )
                  return g.call(n, s), n;
              }
              else {
                if (c[2]) return g.apply(n, t.getElementsByTagName(e)), n;
                if ((r = c[3]) && t.getElementsByClassName)
                  return g.apply(n, t.getElementsByClassName(r)), n;
              }
            if (!(C[e + " "] || (d && d.test(e)))) {
              if (((h = e), (f = t), 1 === y && (F.test(e) || B.test(e)))) {
                for (
                  ((f = (Y.test(e) && ae(t.parentNode)) || t) == t &&
                    m.scope) ||
                    ((a = t.getAttribute("id"))
                      ? (a = k.escapeSelector(a))
                      : t.setAttribute("id", (a = v))),
                    o = (u = ue(e)).length;
                  o--;

                )
                  u[o] = (a ? "#" + a : ":scope") + " " + pe(u[o]);
                h = u.join(",");
              }
              try {
                return g.apply(n, f.querySelectorAll(h)), n;
              } catch (t) {
                C(e, !0);
              } finally {
                a === v && t.removeAttribute("id");
              }
            }
          }
          return ye(e.replace(L, "$1"), t, n, i);
        }
        function ee() {
          var e = [];
          return function n(i, r) {
            return (
              e.push(i + " ") > t.cacheLength && delete n[e.shift()],
              (n[i + " "] = r)
            );
          };
        }
        function te(e) {
          return (e[v] = !0), e;
        }
        function ne(e) {
          var t = l.createElement("fieldset");
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function ie(e) {
          return function (t) {
            return A(t, "input") && t.type === e;
          };
        }
        function re(e) {
          return function (t) {
            return (A(t, "input") || A(t, "button")) && t.type === e;
          };
        }
        function oe(e) {
          return function (t) {
            return "form" in t
              ? t.parentNode && !1 === t.disabled
                ? "label" in t
                  ? "label" in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && Q(t) === e)
                : t.disabled === e
              : "label" in t && t.disabled === e;
          };
        }
        function se(e) {
          return te(function (t) {
            return (
              (t = +t),
              te(function (n, i) {
                for (var r, o = e([], n.length, t), s = o.length; s--; )
                  n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
              })
            );
          });
        }
        function ae(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        function le(e) {
          var n,
            i = e ? e.ownerDocument || e : I;
          return i != l && 9 === i.nodeType && i.documentElement
            ? ((c = (l = i).documentElement),
              (p = !k.isXMLDoc(l)),
              (f = c.matches || c.webkitMatchesSelector || c.msMatchesSelector),
              c.msMatchesSelector &&
                I != l &&
                (n = l.defaultView) &&
                n.top !== n &&
                n.addEventListener("unload", Z),
              (m.getById = ne(function (e) {
                return (
                  (c.appendChild(e).id = k.expando),
                  !l.getElementsByName || !l.getElementsByName(k.expando).length
                );
              })),
              (m.disconnectedMatch = ne(function (e) {
                return f.call(e, "*");
              })),
              (m.scope = ne(function () {
                return l.querySelectorAll(":scope");
              })),
              (m.cssHas = ne(function () {
                try {
                  return l.querySelector(":has(*,:jqfake)"), !1;
                } catch (e) {
                  return !0;
                }
              })),
              m.getById
                ? ((t.filter.ID = function (e) {
                    var t = e.replace(X, K);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (t.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && p) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((t.filter.ID = function (e) {
                    var t = e.replace(X, K);
                    return function (e) {
                      var n =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                  (t.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && p) {
                      var n,
                        i,
                        r,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (t.find.TAG = function (e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : t.querySelectorAll(e);
              }),
              (t.find.CLASS = function (e, t) {
                if (void 0 !== t.getElementsByClassName && p)
                  return t.getElementsByClassName(e);
              }),
              (d = []),
              ne(function (e) {
                var t;
                (c.appendChild(e).innerHTML =
                  "<a id='" +
                  v +
                  "' href='' disabled='disabled'></a><select id='" +
                  v +
                  "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                  e.querySelectorAll("[selected]").length ||
                    d.push("\\[" + O + "*(?:value|" + D + ")"),
                  e.querySelectorAll("[id~=" + v + "-]").length || d.push("~="),
                  e.querySelectorAll("a#" + v + "+*").length ||
                    d.push(".#.+[+~]"),
                  e.querySelectorAll(":checked").length || d.push(":checked"),
                  (t = l.createElement("input")).setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  (c.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    d.push(":enabled", ":disabled"),
                  (t = l.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    d.push("\\[" + O + "*name" + O + "*=" + O + "*(?:''|\"\")");
              }),
              m.cssHas || d.push(":has"),
              (d = d.length && new RegExp(d.join("|"))),
              (T = function (e, t) {
                if (e === t) return (s = !0), 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  n ||
                  (1 &
                    (n =
                      (e.ownerDocument || e) == (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!m.sortDetached && t.compareDocumentPosition(e) === n)
                    ? e === l || (e.ownerDocument == I && J.contains(I, e))
                      ? -1
                      : t === l || (t.ownerDocument == I && J.contains(I, t))
                      ? 1
                      : r
                      ? u.call(r, e) - u.call(r, t)
                      : 0
                    : 4 & n
                    ? -1
                    : 1)
                );
              }),
              l)
            : l;
        }
        for (e in ((J.matches = function (e, t) {
          return J(e, null, null, t);
        }),
        (J.matchesSelector = function (e, t) {
          if ((le(e), p && !C[t + " "] && (!d || !d.test(t))))
            try {
              var n = f.call(e, t);
              if (
                n ||
                m.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return n;
            } catch (e) {
              C(t, !0);
            }
          return J(t, l, null, [e]).length > 0;
        }),
        (J.contains = function (e, t) {
          return (e.ownerDocument || e) != l && le(e), k.contains(e, t);
        }),
        (J.attr = function (e, n) {
          (e.ownerDocument || e) != l && le(e);
          var i = t.attrHandle[n.toLowerCase()],
            r =
              i && h.call(t.attrHandle, n.toLowerCase()) ? i(e, n, !p) : void 0;
          return void 0 !== r ? r : e.getAttribute(n);
        }),
        (J.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (k.uniqueSort = function (e) {
          var t,
            n = [],
            i = 0,
            o = 0;
          if (
            ((s = !m.sortStable),
            (r = !m.sortStable && a.call(e, 0)),
            E.call(e, T),
            s)
          ) {
            for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
            for (; i--; ) P.call(e, n[i], 1);
          }
          return (r = null), e;
        }),
        (k.fn.uniqueSort = function () {
          return this.pushStack(k.uniqueSort(a.apply(this)));
        }),
        ((t = k.expr =
          {
            cacheLength: 50,
            createPseudo: te,
            match: U,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(X, K)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(X, K)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || J.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && J.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return U.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        q.test(n) &&
                        (t = ue(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(X, K).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return A(e, t);
                    };
              },
              CLASS: function (e) {
                var t = w[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) &&
                    w(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (i) {
                  var r = J.attr(i, e);
                  return null == r
                    ? "!=" === t
                    : !t ||
                        ((r += ""),
                        "=" === t
                          ? r === n
                          : "!=" === t
                          ? r !== n
                          : "^=" === t
                          ? n && 0 === r.indexOf(n)
                          : "*=" === t
                          ? n && r.indexOf(n) > -1
                          : "$=" === t
                          ? n && r.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + r.replace(j, " ") + " ").indexOf(n) > -1
                          : "|=" === t &&
                            (r === n || r.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (e, t, n, i, r) {
                var o = "nth" !== e.slice(0, 3),
                  s = "last" !== e.slice(-4),
                  a = "of-type" === t;
                return 1 === i && 0 === r
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, l) {
                      var c,
                        u,
                        p,
                        d,
                        h,
                        f = o !== s ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        m = a && t.nodeName.toLowerCase(),
                        b = !l && !a,
                        w = !1;
                      if (g) {
                        if (o) {
                          for (; f; ) {
                            for (p = t; (p = p[f]); )
                              if (a ? A(p, m) : 1 === p.nodeType) return !1;
                            h = f = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [s ? g.firstChild : g.lastChild]), s && b)) {
                          for (
                            w =
                              (d =
                                (c = (u = g[v] || (g[v] = {}))[e] || [])[0] ===
                                  y && c[1]) && c[2],
                              p = d && g.childNodes[d];
                            (p = (++d && p && p[f]) || (w = d = 0) || h.pop());

                          )
                            if (1 === p.nodeType && ++w && p === t) {
                              u[e] = [y, d, w];
                              break;
                            }
                        }
                        else if (
                          (b &&
                            (w = d =
                              (c = (u = t[v] || (t[v] = {}))[e] || [])[0] ===
                                y && c[1]),
                          !1 === w)
                        )
                          for (
                            ;
                            (p =
                              (++d && p && p[f]) || (w = d = 0) || h.pop()) &&
                            ((a ? !A(p, m) : 1 !== p.nodeType) ||
                              !++w ||
                              (b && ((u = p[v] || (p[v] = {}))[e] = [y, w]),
                              p !== t));

                          );
                        return (w -= r) === i || (w % i == 0 && w / i >= 0);
                      }
                    };
              },
              PSEUDO: function (e, n) {
                var i,
                  r =
                    t.pseudos[e] ||
                    t.setFilters[e.toLowerCase()] ||
                    J.error("unsupported pseudo: " + e);
                return r[v]
                  ? r(n)
                  : r.length > 1
                  ? ((i = [e, e, "", n]),
                    t.setFilters.hasOwnProperty(e.toLowerCase())
                      ? te(function (e, t) {
                          for (var i, o = r(e, n), s = o.length; s--; )
                            e[(i = u.call(e, o[s]))] = !(t[i] = o[s]);
                        })
                      : function (e) {
                          return r(e, 0, i);
                        })
                  : r;
              },
            },
            pseudos: {
              not: te(function (e) {
                var t = [],
                  n = [],
                  i = ve(e.replace(L, "$1"));
                return i[v]
                  ? te(function (e, t, n, r) {
                      for (var o, s = i(e, null, r, []), a = e.length; a--; )
                        (o = s[a]) && (e[a] = !(t[a] = o));
                    })
                  : function (e, r, o) {
                      return (
                        (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: te(function (e) {
                return function (t) {
                  return J(e, t).length > 0;
                };
              }),
              contains: te(function (e) {
                return (
                  (e = e.replace(X, K)),
                  function (t) {
                    return (t.textContent || k.text(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: te(function (e) {
                return (
                  H.test(e || "") || J.error("unsupported lang: " + e),
                  (e = e.replace(X, K).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if (
                        (n = p
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (e) {
                var t = n.location && n.location.hash;
                return t && t.slice(1) === e.id;
              },
              root: function (e) {
                return e === c;
              },
              focus: function (e) {
                return (
                  e ===
                    (function () {
                      try {
                        return l.activeElement;
                      } catch (e) {}
                    })() &&
                  l.hasFocus() &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: oe(!1),
              disabled: oe(!0),
              checked: function (e) {
                return (
                  (A(e, "input") && !!e.checked) ||
                  (A(e, "option") && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !t.pseudos.empty(e);
              },
              header: function (e) {
                return V.test(e.nodeName);
              },
              input: function (e) {
                return G.test(e.nodeName);
              },
              button: function (e) {
                return (A(e, "input") && "button" === e.type) || A(e, "button");
              },
              text: function (e) {
                var t;
                return (
                  A(e, "input") &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: se(function () {
                return [0];
              }),
              last: se(function (e, t) {
                return [t - 1];
              }),
              eq: se(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: se(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: se(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: se(function (e, t, n) {
                var i;
                for (i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
                return e;
              }),
              gt: se(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                return e;
              }),
            },
          }).pseudos.nth = t.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          t.pseudos[e] = ie(e);
        for (e in { submit: !0, reset: !0 }) t.pseudos[e] = re(e);
        function ce() {}
        function ue(e, n) {
          var i,
            r,
            o,
            s,
            a,
            l,
            c,
            u = x[e + " "];
          if (u) return n ? 0 : u.slice(0);
          for (a = e, l = [], c = t.preFilter; a; ) {
            for (s in ((i && !(r = R.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
            (i = !1),
            (r = B.exec(a)) &&
              ((i = r.shift()),
              o.push({ value: i, type: r[0].replace(L, " ") }),
              (a = a.slice(i.length))),
            t.filter))
              !(r = U[s].exec(a)) ||
                (c[s] && !(r = c[s](r))) ||
                ((i = r.shift()),
                o.push({ value: i, type: s, matches: r }),
                (a = a.slice(i.length)));
            if (!i) break;
          }
          return n ? a.length : a ? J.error(e) : x(e, l).slice(0);
        }
        function pe(e) {
          for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
          return i;
        }
        function de(e, t, n) {
          var i = t.dir,
            r = t.next,
            o = r || i,
            s = n && "parentNode" === o,
            a = b++;
          return t.first
            ? function (t, n, r) {
                for (; (t = t[i]); )
                  if (1 === t.nodeType || s) return e(t, n, r);
                return !1;
              }
            : function (t, n, l) {
                var c,
                  u,
                  p = [y, a];
                if (l) {
                  for (; (t = t[i]); )
                    if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                }
                else
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || s)
                      if (((u = t[v] || (t[v] = {})), r && A(t, r)))
                        t = t[i] || t;
                      else {
                        if ((c = u[o]) && c[0] === y && c[1] === a)
                          return (p[2] = c[2]);
                        if (((u[o] = p), (p[2] = e(t, n, l)))) return !0;
                      }
                return !1;
              };
        }
        function he(e) {
          return e.length > 1
            ? function (t, n, i) {
                for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                return !0;
              }
            : e[0];
        }
        function fe(e, t, n, i, r) {
          for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
            (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
          return s;
        }
        function ge(e, t, n, i, r, o) {
          return (
            i && !i[v] && (i = ge(i)),
            r && !r[v] && (r = ge(r, o)),
            te(function (o, s, a, l) {
              var c,
                p,
                d,
                h,
                f = [],
                m = [],
                v = s.length,
                y =
                  o ||
                  (function (e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++) J(e, t[i], n);
                    return n;
                  })(t || "*", a.nodeType ? [a] : a, []),
                b = !e || (!o && t) ? y : fe(y, f, e, a, l);
              if (
                (n ? n(b, (h = r || (o ? e : v || i) ? [] : s), a, l) : (h = b),
                i)
              )
                for (c = fe(h, m), i(c, [], a, l), p = c.length; p--; )
                  (d = c[p]) && (h[m[p]] = !(b[m[p]] = d));
              if (o) {
                if (r || e) {
                  if (r) {
                    for (c = [], p = h.length; p--; )
                      (d = h[p]) && c.push((b[p] = d));
                    r(null, (h = []), c, l);
                  }
                  for (p = h.length; p--; )
                    (d = h[p]) &&
                      (c = r ? u.call(o, d) : f[p]) > -1 &&
                      (o[c] = !(s[c] = d));
                }
              }
              else
                (h = fe(h === s ? h.splice(v, h.length) : h)),
                  r ? r(null, s, h, l) : g.apply(s, h);
            })
          );
        }
        function me(e) {
          for (
            var n,
              r,
              o,
              s = e.length,
              a = t.relative[e[0].type],
              l = a || t.relative[" "],
              c = a ? 1 : 0,
              p = de(
                function (e) {
                  return e === n;
                },
                l,
                !0
              ),
              d = de(
                function (e) {
                  return u.call(n, e) > -1;
                },
                l,
                !0
              ),
              h = [
                function (e, t, r) {
                  var o =
                    (!a && (r || t != i)) ||
                    ((n = t).nodeType ? p(e, t, r) : d(e, t, r));
                  return (n = null), o;
                },
              ];
            c < s;
            c++
          )
            if ((r = t.relative[e[c].type])) h = [de(he(h), r)];
            else {
              if ((r = t.filter[e[c].type].apply(null, e[c].matches))[v]) {
                for (o = ++c; o < s && !t.relative[e[o].type]; o++);
                return ge(
                  c > 1 && he(h),
                  c > 1 &&
                    pe(
                      e
                        .slice(0, c - 1)
                        .concat({ value: " " === e[c - 2].type ? "*" : "" })
                    ).replace(L, "$1"),
                  r,
                  c < o && me(e.slice(c, o)),
                  o < s && me((e = e.slice(o))),
                  o < s && pe(e)
                );
              }
              h.push(r);
            }
          return he(h);
        }
        function ve(e, n) {
          var r,
            o = [],
            s = [],
            a = _[e + " "];
          if (!a) {
            for (n || (n = ue(e)), r = n.length; r--; )
              (a = me(n[r]))[v] ? o.push(a) : s.push(a);
            (a = _(
              e,
              (function (e, n) {
                var r = n.length > 0,
                  o = e.length > 0,
                  s = function (s, a, c, u, d) {
                    var h,
                      f,
                      m,
                      v = 0,
                      b = "0",
                      w = s && [],
                      x = [],
                      _ = i,
                      C = s || (o && t.find.TAG("*", d)),
                      T = (y += null == _ ? 1 : Math.random() || 0.1),
                      A = C.length;
                    for (
                      d && (i = a == l || a || d);
                      b !== A && null != (h = C[b]);
                      b++
                    ) {
                      if (o && h) {
                        for (
                          f = 0, a || h.ownerDocument == l || (le(h), (c = !p));
                          (m = e[f++]);

                        )
                          if (m(h, a || l, c)) {
                            g.call(u, h);
                            break;
                          }
                        d && (y = T);
                      }
                      r && ((h = !m && h) && v--, s && w.push(h));
                    }
                    if (((v += b), r && b !== v)) {
                      for (f = 0; (m = n[f++]); ) m(w, x, a, c);
                      if (s) {
                        if (v > 0)
                          for (; b--; ) w[b] || x[b] || (x[b] = S.call(u));
                        x = fe(x);
                      }
                      g.apply(u, x),
                        d &&
                          !s &&
                          x.length > 0 &&
                          v + n.length > 1 &&
                          k.uniqueSort(u);
                    }
                    return d && ((y = T), (i = _)), w;
                  };
                return r ? te(s) : s;
              })(s, o)
            )).selector = e;
          }
          return a;
        }
        function ye(e, n, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u = "function" == typeof e && e,
            d = !r && ue((e = u.selector || e));
          if (((i = i || []), 1 === d.length)) {
            if (
              (s = d[0] = d[0].slice(0)).length > 2 &&
              "ID" === (a = s[0]).type &&
              9 === n.nodeType &&
              p &&
              t.relative[s[1].type]
            ) {
              if (!(n = (t.find.ID(a.matches[0].replace(X, K), n) || [])[0]))
                return i;
              u && (n = n.parentNode), (e = e.slice(s.shift().value.length));
            }
            for (
              o = U.needsContext.test(e) ? 0 : s.length;
              o-- && ((a = s[o]), !t.relative[(l = a.type)]);

            )
              if (
                (c = t.find[l]) &&
                (r = c(
                  a.matches[0].replace(X, K),
                  (Y.test(s[0].type) && ae(n.parentNode)) || n
                ))
              ) {
                if ((s.splice(o, 1), !(e = r.length && pe(s))))
                  return g.apply(i, r), i;
                break;
              }
          }
          return (
            (u || ve(e, d))(
              r,
              n,
              !p,
              i,
              !n || (Y.test(e) && ae(n.parentNode)) || n
            ),
            i
          );
        }
        (ce.prototype = t.filters = t.pseudos),
          (t.setFilters = new ce()),
          (m.sortStable = v.split("").sort(T).join("") === v),
          le(),
          (m.sortDetached = ne(function (e) {
            return 1 & e.compareDocumentPosition(l.createElement("fieldset"));
          })),
          (k.find = J),
          (k.expr[":"] = k.expr.pseudos),
          (k.unique = k.uniqueSort),
          (J.compile = ve),
          (J.select = ye),
          (J.setDocument = le),
          (J.tokenize = ue),
          (J.escape = k.escapeSelector),
          (J.getText = k.text),
          (J.isXML = k.isXMLDoc),
          (J.selectors = k.expr),
          (J.support = k.support),
          (J.uniqueSort = k.uniqueSort);
      })();
      var N = function (e, t, n) {
          for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (r && k(e).is(n)) break;
              i.push(e);
            }
          return i;
        },
        z = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        j = k.expr.match.needsContext,
        R = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function B(e, t, n) {
        return v(t)
          ? k.grep(e, function (e, i) {
              return !!t.call(e, i, e) !== n;
            })
          : t.nodeType
          ? k.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? k.grep(e, function (e) {
              return u.call(t, e) > -1 !== n;
            })
          : k.filter(t, e, n);
      }
      (k.filter = function (e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === i.nodeType
            ? k.find.matchesSelector(i, e)
              ? [i]
              : []
            : k.find.matches(
                e,
                k.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        k.fn.extend({
          find: function (e) {
            var t,
              n,
              i = this.length,
              r = this;
            if ("string" != typeof e)
              return this.pushStack(
                k(e).filter(function () {
                  for (t = 0; t < i; t++) if (k.contains(r[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < i; t++) k.find(e, r[t], n);
            return i > 1 ? k.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(B(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(B(this, e || [], !0));
          },
          is: function (e) {
            return !!B(
              this,
              "string" == typeof e && j.test(e) ? k(e) : e || [],
              !1
            ).length;
          },
        });
      var F,
        q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((k.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (((n = n || F), "string" == typeof e)) {
          if (
            !(i =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : q.exec(e)) ||
            (!i[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof k ? t[0] : t),
              k.merge(
                this,
                k.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : b,
                  !0
                )
              ),
              R.test(i[1]) && k.isPlainObject(t))
            )
              for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (
            (r = b.getElementById(i[2])) && ((this[0] = r), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : v(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(k)
          : k.makeArray(e, this);
      }).prototype = k.fn),
        (F = k(b));
      var H = /^(?:parents|prev(?:Until|All))/,
        U = { children: !0, contents: !0, next: !0, prev: !0 };
      function G(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      k.fn.extend({
        has: function (e) {
          var t = k(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            i = 0,
            r = this.length,
            o = [],
            s = "string" != typeof e && k(e);
          if (!j.test(e))
            for (; i < r; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && k.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? u.call(k(e), this[0])
              : u.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        k.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return N(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return N(e, "parentNode", n);
            },
            next: function (e) {
              return G(e, "nextSibling");
            },
            prev: function (e) {
              return G(e, "previousSibling");
            },
            nextAll: function (e) {
              return N(e, "nextSibling");
            },
            prevAll: function (e) {
              return N(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return N(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return N(e, "previousSibling", n);
            },
            siblings: function (e) {
              return z((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return z(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && s(e.contentDocument)
                ? e.contentDocument
                : (A(e, "template") && (e = e.content || e),
                  k.merge([], e.childNodes));
            },
          },
          function (e, t) {
            k.fn[e] = function (n, i) {
              var r = k.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (r = k.filter(i, r)),
                this.length > 1 &&
                  (U[e] || k.uniqueSort(r), H.test(e) && r.reverse()),
                this.pushStack(r)
              );
            };
          }
        );
      var V = /[^\x20\t\r\n\f]+/g;
      function W(e) {
        return e;
      }
      function Y(e) {
        throw e;
      }
      function X(e, t, n, i) {
        var r;
        try {
          e && v((r = e.promise))
            ? r.call(e).done(t).fail(n)
            : e && v((r = e.then))
            ? r.call(e, t, n)
            : t.apply(void 0, [e].slice(i));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (k.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  k.each(e.match(V) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : k.extend({}, e);
        var t,
          n,
          i,
          r,
          o = [],
          s = [],
          a = -1,
          l = function () {
            for (r = r || e.once, i = t = !0; s.length; a = -1)
              for (n = s.shift(); ++a < o.length; )
                !1 === o[a].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((a = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
          },
          c = {
            add: function () {
              return (
                o &&
                  (n && !t && ((a = o.length - 1), s.push(n)),
                  (function t(n) {
                    k.each(n, function (n, i) {
                      v(i)
                        ? (e.unique && c.has(i)) || o.push(i)
                        : i && i.length && "string" !== _(i) && t(i);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
              return (
                k.each(arguments, function (e, t) {
                  for (var n; (n = k.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? k.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (r = s = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (r = s = []), n || t || (o = n = ""), this;
            },
            locked: function () {
              return !!r;
            },
            fireWith: function (e, n) {
              return (
                r ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  t || l()),
                this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return c;
      }),
        k.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  k.Callbacks("memory"),
                  k.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  k.Callbacks("once memory"),
                  k.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  k.Callbacks("once memory"),
                  k.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              i = "pending",
              r = {
                state: function () {
                  return i;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return r.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return k
                    .Deferred(function (n) {
                      k.each(t, function (t, i) {
                        var r = v(e[i[4]]) && e[i[4]];
                        o[i[1]](function () {
                          var e = r && r.apply(this, arguments);
                          e && v(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[i[0] + "With"](this, r ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    })
                    .promise();
                },
                then: function (e, i, r) {
                  var o = 0;
                  function s(e, t, i, r) {
                    return function () {
                      var a = this,
                        l = arguments,
                        c = function () {
                          var n, c;
                          if (!(e < o)) {
                            if ((n = i.apply(a, l)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              v(c)
                                ? r
                                  ? c.call(n, s(o, t, W, r), s(o, t, Y, r))
                                  : (o++,
                                    c.call(
                                      n,
                                      s(o, t, W, r),
                                      s(o, t, Y, r),
                                      s(o, t, W, t.notifyWith)
                                    ))
                                : (i !== W && ((a = void 0), (l = [n])),
                                  (r || t.resolveWith)(a, l));
                          }
                        },
                        u = r
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                k.Deferred.exceptionHook &&
                                  k.Deferred.exceptionHook(n, u.error),
                                  e + 1 >= o &&
                                    (i !== Y && ((a = void 0), (l = [n])),
                                    t.rejectWith(a, l));
                              }
                            };
                      e
                        ? u()
                        : (k.Deferred.getErrorHook
                            ? (u.error = k.Deferred.getErrorHook())
                            : k.Deferred.getStackHook &&
                              (u.error = k.Deferred.getStackHook()),
                          n.setTimeout(u));
                    };
                  }
                  return k
                    .Deferred(function (n) {
                      t[0][3].add(s(0, n, v(r) ? r : W, n.notifyWith)),
                        t[1][3].add(s(0, n, v(e) ? e : W)),
                        t[2][3].add(s(0, n, v(i) ? i : Y));
                    })
                    .promise();
                },
                promise: function (e) {
                  return null != e ? k.extend(e, r) : r;
                },
              },
              o = {};
            return (
              k.each(t, function (e, n) {
                var s = n[2],
                  a = n[5];
                (r[n[1]] = s.add),
                  a &&
                    s.add(
                      function () {
                        i = a;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = s.fireWith);
              }),
              r.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              i = Array(n),
              r = a.call(arguments),
              o = k.Deferred(),
              s = function (e) {
                return function (n) {
                  (i[e] = this),
                    (r[e] = arguments.length > 1 ? a.call(arguments) : n),
                    --t || o.resolveWith(i, r);
                };
              };
            if (
              t <= 1 &&
              (X(e, o.done(s(n)).resolve, o.reject, !t),
              "pending" === o.state() || v(r[n] && r[n].then))
            )
              return o.then();
            for (; n--; ) X(r[n], s(n), o.reject);
            return o.promise();
          },
        });
      var K = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (k.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          K.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (k.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var Z = k.Deferred();
      function Q() {
        b.removeEventListener("DOMContentLoaded", Q),
          n.removeEventListener("load", Q),
          k.ready();
      }
      (k.fn.ready = function (e) {
        return (
          Z.then(e).catch(function (e) {
            k.readyException(e);
          }),
          this
        );
      }),
        k.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --k.readyWait : k.isReady) ||
              ((k.isReady = !0),
              (!0 !== e && --k.readyWait > 0) || Z.resolveWith(b, [k]));
          },
        }),
        (k.ready.then = Z.then),
        "complete" === b.readyState ||
        ("loading" !== b.readyState && !b.documentElement.doScroll)
          ? n.setTimeout(k.ready)
          : (b.addEventListener("DOMContentLoaded", Q),
            n.addEventListener("load", Q));
      var J = function (e, t, n, i, r, o, s) {
          var a = 0,
            l = e.length,
            c = null == n;
          if ("object" === _(n))
            for (a in ((r = !0), n)) J(e, t, a, n[a], !0, o, s);
          else if (
            void 0 !== i &&
            ((r = !0),
            v(i) || (s = !0),
            c &&
              (s
                ? (t.call(e, i), (t = null))
                : ((c = t),
                  (t = function (e, t, n) {
                    return c.call(k(e), n);
                  }))),
            t)
          )
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
          return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
        },
        ee = /^-ms-/,
        te = /-([a-z])/g;
      function ne(e, t) {
        return t.toUpperCase();
      }
      function ie(e) {
        return e.replace(ee, "ms-").replace(te, ne);
      }
      var re = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function oe() {
        this.expando = k.expando + oe.uid++;
      }
      (oe.uid = 1),
        (oe.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                re(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var i,
              r = this.cache(e);
            if ("string" == typeof t) r[ie(t)] = n;
            else for (i in t) r[ie(i)] = t[i];
            return r;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][ie(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              i = e[this.expando];
            if (void 0 !== i) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(ie)
                  : (t = ie(t)) in i
                  ? [t]
                  : t.match(V) || []).length;
                for (; n--; ) delete i[t[n]];
              }
              (void 0 === t || k.isEmptyObject(i)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t);
          },
        });
      var se = new oe(),
        ae = new oe(),
        le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ce = /[A-Z]/g;
      function ue(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((i = "data-" + t.replace(ce, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(i)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : le.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            ae.set(e, t, n);
          }
          else n = void 0;
        return n;
      }
      k.extend({
        hasData: function (e) {
          return ae.hasData(e) || se.hasData(e);
        },
        data: function (e, t, n) {
          return ae.access(e, t, n);
        },
        removeData: function (e, t) {
          ae.remove(e, t);
        },
        _data: function (e, t, n) {
          return se.access(e, t, n);
        },
        _removeData: function (e, t) {
          se.remove(e, t);
        },
      }),
        k.fn.extend({
          data: function (e, t) {
            var n,
              i,
              r,
              o = this[0],
              s = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((r = ae.get(o)),
                1 === o.nodeType && !se.get(o, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (i = s[n].name).indexOf("data-") &&
                    ((i = ie(i.slice(5))), ue(o, i, r[i]));
                se.set(o, "hasDataAttrs", !0);
              }
              return r;
            }
            return "object" == typeof e
              ? this.each(function () {
                  ae.set(this, e);
                })
              : J(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t)
                      return void 0 !== (n = ae.get(o, e))
                        ? n
                        : void 0 !== (n = ue(o, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      ae.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              ae.remove(this, e);
            });
          },
        }),
        k.extend({
          queue: function (e, t, n) {
            var i;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (i = se.get(e, t)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = se.access(e, t, k.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
              i = n.length,
              r = n.shift(),
              o = k._queueHooks(e, t);
            "inprogress" === r && ((r = n.shift()), i--),
              r &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                r.call(
                  e,
                  function () {
                    k.dequeue(e, t);
                  },
                  o
                )),
              !i && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              se.get(e, n) ||
              se.access(e, n, {
                empty: k.Callbacks("once memory").add(function () {
                  se.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        k.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? k.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = k.queue(this, e, t);
                    k._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && k.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              k.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              i = 1,
              r = k.Deferred(),
              o = this,
              s = this.length,
              a = function () {
                --i || r.resolveWith(o, [o]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              s--;

            )
              (n = se.get(o[s], e + "queueHooks")) &&
                n.empty &&
                (i++, n.empty.add(a));
            return a(), r.promise(t);
          },
        });
      var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        de = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"),
        he = ["Top", "Right", "Bottom", "Left"],
        fe = b.documentElement,
        ge = function (e) {
          return k.contains(e.ownerDocument, e);
        },
        me = { composed: !0 };
      fe.getRootNode &&
        (ge = function (e) {
          return (
            k.contains(e.ownerDocument, e) ||
            e.getRootNode(me) === e.ownerDocument
          );
        });
      var ve = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && ge(e) && "none" === k.css(e, "display"))
        );
      };
      function ye(e, t, n, i) {
        var r,
          o,
          s = 20,
          a = i
            ? function () {
                return i.cur();
              }
            : function () {
                return k.css(e, t, "");
              },
          l = a(),
          c = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
          u =
            e.nodeType &&
            (k.cssNumber[t] || ("px" !== c && +l)) &&
            de.exec(k.css(e, t));
        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; s--; )
            k.style(e, t, u + c),
              (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
              (u /= o);
          (u *= 2), k.style(e, t, u + c), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +l || 0),
            (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = c), (i.start = u), (i.end = r))),
          r
        );
      }
      var be = {};
      function we(e) {
        var t,
          n = e.ownerDocument,
          i = e.nodeName,
          r = be[i];
        return (
          r ||
          ((t = n.body.appendChild(n.createElement(i))),
          (r = k.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === r && (r = "block"),
          (be[i] = r),
          r)
        );
      }
      function xe(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
          (i = e[o]).style &&
            ((n = i.style.display),
            t
              ? ("none" === n &&
                  ((r[o] = se.get(i, "display") || null),
                  r[o] || (i.style.display = "")),
                "" === i.style.display && ve(i) && (r[o] = we(i)))
              : "none" !== n && ((r[o] = "none"), se.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e;
      }
      k.fn.extend({
        show: function () {
          return xe(this, !0);
        },
        hide: function () {
          return xe(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ve(this) ? k(this).show() : k(this).hide();
              });
        },
      });
      var _e,
        Ce,
        ke = /^(?:checkbox|radio)$/i,
        Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Ae = /^$|^module$|\/(?:java|ecma)script/i;
      (_e = b.createDocumentFragment().appendChild(b.createElement("div"))),
        (Ce = b.createElement("input")).setAttribute("type", "radio"),
        Ce.setAttribute("checked", "checked"),
        Ce.setAttribute("name", "t"),
        _e.appendChild(Ce),
        (m.checkClone = _e.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (_e.innerHTML = "<textarea>x</textarea>"),
        (m.noCloneChecked = !!_e.cloneNode(!0).lastChild.defaultValue),
        (_e.innerHTML = "<option></option>"),
        (m.option = !!_e.lastChild);
      var Se = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function Ee(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && A(e, t)) ? k.merge([e], n) : n
        );
      }
      function Pe(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          se.set(e[n], "globalEval", !t || se.get(t[n], "globalEval"));
      }
      (Se.tbody = Se.tfoot = Se.colgroup = Se.caption = Se.thead),
        (Se.th = Se.td),
        m.option ||
          (Se.optgroup = Se.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var Oe = /<|&#?\w+;/;
      function Le(e, t, n, i, r) {
        for (
          var o,
            s,
            a,
            l,
            c,
            u,
            p = t.createDocumentFragment(),
            d = [],
            h = 0,
            f = e.length;
          h < f;
          h++
        )
          if ((o = e[h]) || 0 === o)
            if ("object" === _(o)) k.merge(d, o.nodeType ? [o] : o);
            else if (Oe.test(o)) {
              for (
                s = s || p.appendChild(t.createElement("div")),
                  a = (Te.exec(o) || ["", ""])[1].toLowerCase(),
                  l = Se[a] || Se._default,
                  s.innerHTML = l[1] + k.htmlPrefilter(o) + l[2],
                  u = l[0];
                u--;

              )
                s = s.lastChild;
              k.merge(d, s.childNodes), ((s = p.firstChild).textContent = "");
            }
            else d.push(t.createTextNode(o));
        for (p.textContent = "", h = 0; (o = d[h++]); )
          if (i && k.inArray(o, i) > -1) r && r.push(o);
          else if (
            ((c = ge(o)), (s = Ee(p.appendChild(o), "script")), c && Pe(s), n)
          )
            for (u = 0; (o = s[u++]); ) Ae.test(o.type || "") && n.push(o);
        return p;
      }
      var De = /^([^.]*)(?:\.(.+)|)/;
      function Me() {
        return !0;
      }
      function Ie() {
        return !1;
      }
      function $e(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
          for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
            $e(e, a, n, i, t[a], o);
          return e;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ("string" == typeof n
                ? ((r = i), (i = void 0))
                : ((r = i), (i = n), (n = void 0))),
          !1 === r)
        )
          r = Ie;
        else if (!r) return e;
        return (
          1 === o &&
            ((s = r),
            ((r = function (e) {
              return k().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = k.guid++))),
          e.each(function () {
            k.event.add(this, t, r, i, n);
          })
        );
      }
      function Ne(e, t, n) {
        n
          ? (se.set(e, t, !1),
            k.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var n,
                  i = se.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (i)
                    (k.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((i = a.call(arguments)),
                    se.set(this, t, i),
                    this[t](),
                    (n = se.get(this, t)),
                    se.set(this, t, !1),
                    i !== n)
                  )
                    return e.stopImmediatePropagation(), e.preventDefault(), n;
                }
                else
                  i &&
                    (se.set(this, t, k.event.trigger(i[0], i.slice(1), this)),
                    e.stopPropagation(),
                    (e.isImmediatePropagationStopped = Me));
              },
            }))
          : void 0 === se.get(e, t) && k.event.add(e, t, Me);
      }
      (k.event = {
        global: {},
        add: function (e, t, n, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            p,
            d,
            h,
            f,
            g,
            m = se.get(e);
          if (re(e))
            for (
              n.handler && ((n = (o = n).handler), (r = o.selector)),
                r && k.find.matchesSelector(fe, r),
                n.guid || (n.guid = k.guid++),
                (l = m.events) || (l = m.events = Object.create(null)),
                (s = m.handle) ||
                  (s = m.handle =
                    function (t) {
                      return void 0 !== k && k.event.triggered !== t.type
                        ? k.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                c = (t = (t || "").match(V) || [""]).length;
              c--;

            )
              (h = g = (a = De.exec(t[c]) || [])[1]),
                (f = (a[2] || "").split(".").sort()),
                h &&
                  ((p = k.event.special[h] || {}),
                  (h = (r ? p.delegateType : p.bindType) || h),
                  (p = k.event.special[h] || {}),
                  (u = k.extend(
                    {
                      type: h,
                      origType: g,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && k.expr.match.needsContext.test(r),
                      namespace: f.join("."),
                    },
                    o
                  )),
                  (d = l[h]) ||
                    (((d = l[h] = []).delegateCount = 0),
                    (p.setup && !1 !== p.setup.call(e, i, f, s)) ||
                      (e.addEventListener && e.addEventListener(h, s))),
                  p.add &&
                    (p.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                  (k.event.global[h] = !0));
        },
        remove: function (e, t, n, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            p,
            d,
            h,
            f,
            g,
            m = se.hasData(e) && se.get(e);
          if (m && (l = m.events)) {
            for (c = (t = (t || "").match(V) || [""]).length; c--; )
              if (
                ((h = g = (a = De.exec(t[c]) || [])[1]),
                (f = (a[2] || "").split(".").sort()),
                h)
              ) {
                for (
                  p = k.event.special[h] || {},
                    d = l[(h = (i ? p.delegateType : p.bindType) || h)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = o = d.length;
                  o--;

                )
                  (u = d[o]),
                    (!r && g !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (a && !a.test(u.namespace)) ||
                      (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                      (d.splice(o, 1),
                      u.selector && d.delegateCount--,
                      p.remove && p.remove.call(e, u));
                s &&
                  !d.length &&
                  ((p.teardown && !1 !== p.teardown.call(e, f, m.handle)) ||
                    k.removeEvent(e, h, m.handle),
                  delete l[h]);
              }
              else for (h in l) k.event.remove(e, h + t[c], n, i, !0);
            k.isEmptyObject(l) && se.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            i,
            r,
            o,
            s,
            a = new Array(arguments.length),
            l = k.event.fix(e),
            c = (se.get(this, "events") || Object.create(null))[l.type] || [],
            u = k.event.special[l.type] || {};
          for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
          if (
            ((l.delegateTarget = this),
            !u.preDispatch || !1 !== u.preDispatch.call(this, l))
          ) {
            for (
              s = k.event.handlers.call(this, l, c), t = 0;
              (r = s[t++]) && !l.isPropagationStopped();

            )
              for (
                l.currentTarget = r.elem, n = 0;
                (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

              )
                (l.rnamespace &&
                  !1 !== o.namespace &&
                  !l.rnamespace.test(o.namespace)) ||
                  ((l.handleObj = o),
                  (l.data = o.data),
                  void 0 !==
                    (i = (
                      (k.event.special[o.origType] || {}).handle || o.handler
                    ).apply(r.elem, a)) &&
                    !1 === (l.result = i) &&
                    (l.preventDefault(), l.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function (e, t) {
          var n,
            i,
            r,
            o,
            s,
            a = [],
            l = t.delegateCount,
            c = e.target;
          if (l && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (o = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(r = (i = t[n]).selector + " ")] &&
                    (s[r] = i.needsContext
                      ? k(r, this).index(c) > -1
                      : k.find(r, this, null, [c]).length),
                    s[r] && o.push(i);
                o.length && a.push({ elem: c, handlers: o });
              }
          return (
            (c = this),
            l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
            a
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(k.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: v(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[k.expando] ? e : new k.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                ke.test(t.type) &&
                  t.click &&
                  A(t, "input") &&
                  Ne(t, "click", !0),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                ke.test(t.type) && t.click && A(t, "input") && Ne(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (ke.test(t.type) &&
                  t.click &&
                  A(t, "input") &&
                  se.get(t, "click")) ||
                A(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (k.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (k.Event = function (e, t) {
          if (!(this instanceof k.Event)) return new k.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Me
                  : Ie),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && k.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[k.expando] = !0);
        }),
        (k.Event.prototype = {
          constructor: k.Event,
          isDefaultPrevented: Ie,
          isPropagationStopped: Ie,
          isImmediatePropagationStopped: Ie,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Me),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Me),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Me),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        k.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          k.event.addProp
        ),
        k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          function n(e) {
            if (b.documentMode) {
              var n = se.get(this, "handle"),
                i = k.event.fix(e);
              (i.type = "focusin" === e.type ? "focus" : "blur"),
                (i.isSimulated = !0),
                n(e),
                i.target === i.currentTarget && n(i);
            }
            else k.event.simulate(t, e.target, k.event.fix(e));
          }
          (k.event.special[e] = {
            setup: function () {
              var i;
              if ((Ne(this, e, !0), !b.documentMode)) return !1;
              (i = se.get(this, t)) || this.addEventListener(t, n),
                se.set(this, t, (i || 0) + 1);
            },
            trigger: function () {
              return Ne(this, e), !0;
            },
            teardown: function () {
              var e;
              if (!b.documentMode) return !1;
              (e = se.get(this, t) - 1)
                ? se.set(this, t, e)
                : (this.removeEventListener(t, n), se.remove(this, t));
            },
            _default: function (t) {
              return se.get(t.target, e);
            },
            delegateType: t,
          }),
            (k.event.special[t] = {
              setup: function () {
                var i = this.ownerDocument || this.document || this,
                  r = b.documentMode ? this : i,
                  o = se.get(r, t);
                o ||
                  (b.documentMode
                    ? this.addEventListener(t, n)
                    : i.addEventListener(e, n, !0)),
                  se.set(r, t, (o || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this.document || this,
                  r = b.documentMode ? this : i,
                  o = se.get(r, t) - 1;
                o
                  ? se.set(r, t, o)
                  : (b.documentMode
                      ? this.removeEventListener(t, n)
                      : i.removeEventListener(e, n, !0),
                    se.remove(r, t));
              },
            });
        }),
        k.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            k.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  i = e.relatedTarget,
                  r = e.handleObj;
                return (
                  (i && (i === this || k.contains(this, i))) ||
                    ((e.type = r.origType),
                    (n = r.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        k.fn.extend({
          on: function (e, t, n, i) {
            return $e(this, e, t, n, i);
          },
          one: function (e, t, n, i) {
            return $e(this, e, t, n, i, 1);
          },
          off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                k(e.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (r in e) this.off(r, t, e[r]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Ie),
              this.each(function () {
                k.event.remove(this, e, n, t);
              })
            );
          },
        });
      var ze = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Re = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function Be(e, t) {
        return (
          (A(e, "table") &&
            A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            k(e).children("tbody")[0]) ||
          e
        );
      }
      function Fe(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function qe(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function He(e, t) {
        var n, i, r, o, s, a;
        if (1 === t.nodeType) {
          if (se.hasData(e) && (a = se.get(e).events))
            for (r in (se.remove(t, "handle events"), a))
              for (n = 0, i = a[r].length; n < i; n++)
                k.event.add(t, r, a[r][n]);
          ae.hasData(e) &&
            ((o = ae.access(e)), (s = k.extend({}, o)), ae.set(t, s));
        }
      }
      function Ue(e, t, n, i) {
        t = l(t);
        var r,
          o,
          s,
          a,
          c,
          u,
          p = 0,
          d = e.length,
          h = d - 1,
          f = t[0],
          g = v(f);
        if (g || (d > 1 && "string" == typeof f && !m.checkClone && je.test(f)))
          return e.each(function (r) {
            var o = e.eq(r);
            g && (t[0] = f.call(this, r, o.html())), Ue(o, t, n, i);
          });
        if (
          d &&
          ((o = (r = Le(t, e[0].ownerDocument, !1, e, i)).firstChild),
          1 === r.childNodes.length && (r = o),
          o || i)
        ) {
          for (a = (s = k.map(Ee(r, "script"), Fe)).length; p < d; p++)
            (c = r),
              p !== h &&
                ((c = k.clone(c, !0, !0)), a && k.merge(s, Ee(c, "script"))),
              n.call(e[p], c, p);
          if (a)
            for (
              u = s[s.length - 1].ownerDocument, k.map(s, qe), p = 0;
              p < a;
              p++
            )
              (c = s[p]),
                Ae.test(c.type || "") &&
                  !se.access(c, "globalEval") &&
                  k.contains(u, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? k._evalUrl &&
                      !c.noModule &&
                      k._evalUrl(
                        c.src,
                        { nonce: c.nonce || c.getAttribute("nonce") },
                        u
                      )
                    : x(c.textContent.replace(Re, ""), c, u));
        }
        return e;
      }
      function Ge(e, t, n) {
        for (var i, r = t ? k.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
          n || 1 !== i.nodeType || k.cleanData(Ee(i)),
            i.parentNode &&
              (n && ge(i) && Pe(Ee(i, "script")), i.parentNode.removeChild(i));
        return e;
      }
      k.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var i,
            r,
            o,
            s,
            a,
            l,
            c,
            u = e.cloneNode(!0),
            p = ge(e);
          if (
            !(
              m.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              k.isXMLDoc(e)
            )
          )
            for (s = Ee(u), i = 0, r = (o = Ee(e)).length; i < r; i++)
              (a = o[i]),
                (l = s[i]),
                void 0,
                "input" === (c = l.nodeName.toLowerCase()) && ke.test(a.type)
                  ? (l.checked = a.checked)
                  : ("input" !== c && "textarea" !== c) ||
                    (l.defaultValue = a.defaultValue);
          if (t)
            if (n)
              for (
                o = o || Ee(e), s = s || Ee(u), i = 0, r = o.length;
                i < r;
                i++
              )
                He(o[i], s[i]);
            else He(e, u);
          return (
            (s = Ee(u, "script")).length > 0 && Pe(s, !p && Ee(e, "script")), u
          );
        },
        cleanData: function (e) {
          for (
            var t, n, i, r = k.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (re(n)) {
              if ((t = n[se.expando])) {
                if (t.events)
                  for (i in t.events)
                    r[i] ? k.event.remove(n, i) : k.removeEvent(n, i, t.handle);
                n[se.expando] = void 0;
              }
              n[ae.expando] && (n[ae.expando] = void 0);
            }
        },
      }),
        k.fn.extend({
          detach: function (e) {
            return Ge(this, e, !0);
          },
          remove: function (e) {
            return Ge(this, e);
          },
          text: function (e) {
            return J(
              this,
              function (e) {
                return void 0 === e
                  ? k.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Ue(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Be(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Ue(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Be(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Ue(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Ue(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (k.cleanData(Ee(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return k.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return J(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !ze.test(e) &&
                  !Se[(Te.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = k.htmlPrefilter(e);
                  try {
                    for (; n < i; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (k.cleanData(Ee(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return Ue(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                k.inArray(this, e) < 0 &&
                  (k.cleanData(Ee(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        k.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            k.fn[e] = function (e) {
              for (
                var n, i = [], r = k(e), o = r.length - 1, s = 0;
                s <= o;
                s++
              )
                (n = s === o ? this : this.clone(!0)),
                  k(r[s])[t](n),
                  c.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var Ve = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"),
        We = /^--/,
        Ye = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Xe = function (e, t, n) {
          var i,
            r,
            o = {};
          for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
          for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
          return i;
        },
        Ke = new RegExp(he.join("|"), "i");
      function Ze(e, t, n) {
        var i,
          r,
          o,
          s,
          a = We.test(t),
          l = e.style;
        return (
          (n = n || Ye(e)) &&
            ((s = n.getPropertyValue(t) || n[t]),
            a && s && (s = s.replace(L, "$1") || void 0),
            "" !== s || ge(e) || (s = k.style(e, t)),
            !m.pixelBoxStyles() &&
              Ve.test(s) &&
              Ke.test(t) &&
              ((i = l.width),
              (r = l.minWidth),
              (o = l.maxWidth),
              (l.minWidth = l.maxWidth = l.width = s),
              (s = n.width),
              (l.width = i),
              (l.minWidth = r),
              (l.maxWidth = o))),
          void 0 !== s ? s + "" : s
        );
      }
      function Qe(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (u) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (u.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              fe.appendChild(c).appendChild(u);
            var e = n.getComputedStyle(u);
            (i = "1%" !== e.top),
              (l = 12 === t(e.marginLeft)),
              (u.style.right = "60%"),
              (s = 36 === t(e.right)),
              (r = 36 === t(e.width)),
              (u.style.position = "absolute"),
              (o = 12 === t(u.offsetWidth / 3)),
              fe.removeChild(c),
              (u = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var i,
          r,
          o,
          s,
          a,
          l,
          c = b.createElement("div"),
          u = b.createElement("div");
        u.style &&
          ((u.style.backgroundClip = "content-box"),
          (u.cloneNode(!0).style.backgroundClip = ""),
          (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
          k.extend(m, {
            boxSizingReliable: function () {
              return e(), r;
            },
            pixelBoxStyles: function () {
              return e(), s;
            },
            pixelPosition: function () {
              return e(), i;
            },
            reliableMarginLeft: function () {
              return e(), l;
            },
            scrollboxSize: function () {
              return e(), o;
            },
            reliableTrDimensions: function () {
              var e, t, i, r;
              return (
                null == a &&
                  ((e = b.createElement("table")),
                  (t = b.createElement("tr")),
                  (i = b.createElement("div")),
                  (e.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (t.style.cssText = "box-sizing:content-box;border:1px solid"),
                  (t.style.height = "1px"),
                  (i.style.height = "9px"),
                  (i.style.display = "block"),
                  fe.appendChild(e).appendChild(t).appendChild(i),
                  (r = n.getComputedStyle(t)),
                  (a =
                    parseInt(r.height, 10) +
                      parseInt(r.borderTopWidth, 10) +
                      parseInt(r.borderBottomWidth, 10) ===
                    t.offsetHeight),
                  fe.removeChild(e)),
                a
              );
            },
          }));
      })();
      var Je = ["Webkit", "Moz", "ms"],
        et = b.createElement("div").style,
        tt = {};
      function nt(e) {
        var t = k.cssProps[e] || tt[e];
        return (
          t ||
          (e in et
            ? e
            : (tt[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Je.length;
                    n--;

                  )
                    if ((e = Je[n] + t) in et) return e;
                })(e) || e))
        );
      }
      var it = /^(none|table(?!-c[ea]).+)/,
        rt = { position: "absolute", visibility: "hidden", display: "block" },
        ot = { letterSpacing: "0", fontWeight: "400" };
      function st(e, t, n) {
        var i = de.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }
      function at(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
          a = 0,
          l = 0,
          c = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          "margin" === n && (c += k.css(e, n + he[s], !0, r)),
            i
              ? ("content" === n && (l -= k.css(e, "padding" + he[s], !0, r)),
                "margin" !== n &&
                  (l -= k.css(e, "border" + he[s] + "Width", !0, r)))
              : ((l += k.css(e, "padding" + he[s], !0, r)),
                "padding" !== n
                  ? (l += k.css(e, "border" + he[s] + "Width", !0, r))
                  : (a += k.css(e, "border" + he[s] + "Width", !0, r)));
        return (
          !i &&
            o >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    l -
                    a -
                    0.5
                )
              ) || 0),
          l + c
        );
      }
      function lt(e, t, n) {
        var i = Ye(e),
          r =
            (!m.boxSizingReliable() || n) &&
            "border-box" === k.css(e, "boxSizing", !1, i),
          o = r,
          s = Ze(e, t, i),
          a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ve.test(s)) {
          if (!n) return s;
          s = "auto";
        }
        return (
          ((!m.boxSizingReliable() && r) ||
            (!m.reliableTrDimensions() && A(e, "tr")) ||
            "auto" === s ||
            (!parseFloat(s) && "inline" === k.css(e, "display", !1, i))) &&
            e.getClientRects().length &&
            ((r = "border-box" === k.css(e, "boxSizing", !1, i)),
            (o = a in e) && (s = e[a])),
          (s = parseFloat(s) || 0) +
            at(e, t, n || (r ? "border" : "content"), o, i, s) +
            "px"
        );
      }
      function ct(e, t, n, i, r) {
        return new ct.prototype.init(e, t, n, i, r);
      }
      k.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ze(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageSlice: !0,
          columnCount: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var r,
              o,
              s,
              a = ie(t),
              l = We.test(t),
              c = e.style;
            if (
              (l || (t = nt(a)),
              (s = k.cssHooks[t] || k.cssHooks[a]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                ? r
                : c[t];
            "string" === (o = typeof n) &&
              (r = de.exec(n)) &&
              r[1] &&
              ((n = ye(e, t, r)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o ||
                  l ||
                  (n += (r && r[3]) || (k.cssNumber[a] ? "" : "px")),
                m.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                  (l ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function (e, t, n, i) {
          var r,
            o,
            s,
            a = ie(t);
          return (
            We.test(t) || (t = nt(a)),
            (s = k.cssHooks[t] || k.cssHooks[a]) &&
              "get" in s &&
              (r = s.get(e, !0, n)),
            void 0 === r && (r = Ze(e, t, i)),
            "normal" === r && t in ot && (r = ot[t]),
            "" === n || n
              ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
              : r
          );
        },
      }),
        k.each(["height", "width"], function (e, t) {
          k.cssHooks[t] = {
            get: function (e, n, i) {
              if (n)
                return !it.test(k.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? lt(e, t, i)
                  : Xe(e, rt, function () {
                      return lt(e, t, i);
                    });
            },
            set: function (e, n, i) {
              var r,
                o = Ye(e),
                s = !m.scrollboxSize() && "absolute" === o.position,
                a = (s || i) && "border-box" === k.css(e, "boxSizing", !1, o),
                l = i ? at(e, t, i, a, o) : 0;
              return (
                a &&
                  s &&
                  (l -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      at(e, t, "border", !1, o) -
                      0.5
                  )),
                l &&
                  (r = de.exec(n)) &&
                  "px" !== (r[3] || "px") &&
                  ((e.style[t] = n), (n = k.css(e, t))),
                st(0, n, l)
              );
            },
          };
        }),
        (k.cssHooks.marginLeft = Qe(m.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ze(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  Xe(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        k.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (k.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var i = 0,
                  r = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                r[e + he[i] + t] = o[i] || o[i - 2] || o[0];
              return r;
            },
          }),
            "margin" !== e && (k.cssHooks[e + t].set = st);
        }),
        k.fn.extend({
          css: function (e, t) {
            return J(
              this,
              function (e, t, n) {
                var i,
                  r,
                  o = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (i = Ye(e), r = t.length; s < r; s++)
                    o[t[s]] = k.css(e, t[s], !1, i);
                  return o;
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (k.Tween = ct),
        (ct.prototype = {
          constructor: ct,
          init: function (e, t, n, i, r, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = r || k.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = o || (k.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = ct.propHooks[this.prop];
            return e && e.get ? e.get(this) : ct.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = ct.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    k.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : ct.propHooks._default.set(this),
              this
            );
          },
        }),
        (ct.prototype.init.prototype = ct.prototype),
        (ct.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              k.fx.step[e.prop]
                ? k.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!k.cssHooks[e.prop] && null == e.elem.style[nt(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : k.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (ct.propHooks.scrollTop = ct.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (k.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (k.fx = ct.prototype.init),
        (k.fx.step = {});
      var ut,
        pt,
        dt = /^(?:toggle|show|hide)$/,
        ht = /queueHooks$/;
      function ft() {
        pt &&
          (!1 === b.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ft)
            : n.setTimeout(ft, k.fx.interval),
          k.fx.tick());
      }
      function gt() {
        return (
          n.setTimeout(function () {
            ut = void 0;
          }),
          (ut = Date.now())
        );
      }
      function mt(e, t) {
        var n,
          i = 0,
          r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
          r["margin" + (n = he[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
      }
      function vt(e, t, n) {
        for (
          var i,
            r = (yt.tweeners[t] || []).concat(yt.tweeners["*"]),
            o = 0,
            s = r.length;
          o < s;
          o++
        )
          if ((i = r[o].call(n, t, e))) return i;
      }
      function yt(e, t, n) {
        var i,
          r,
          o = 0,
          s = yt.prefilters.length,
          a = k.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (r) return !1;
            for (
              var t = ut || gt(),
                n = Math.max(0, c.startTime + c.duration - t),
                i = 1 - (n / c.duration || 0),
                o = 0,
                s = c.tweens.length;
              o < s;
              o++
            )
              c.tweens[o].run(i);
            return (
              a.notifyWith(e, [c, i, n]),
              i < 1 && s
                ? n
                : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            );
          },
          c = a.promise({
            elem: e,
            props: k.extend({}, t),
            opts: k.extend(
              !0,
              { specialEasing: {}, easing: k.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: ut || gt(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var i = k.Tween(
                e,
                c.opts,
                t,
                n,
                c.opts.specialEasing[t] || c.opts.easing
              );
              return c.tweens.push(i), i;
            },
            stop: function (t) {
              var n = 0,
                i = t ? c.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) c.tweens[n].run(1);
              return (
                t
                  ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                  : a.rejectWith(e, [c, t]),
                this
              );
            },
          }),
          u = c.props;
        for (
          !(function (e, t) {
            var n, i, r, o, s;
            for (n in e)
              if (
                ((r = t[(i = ie(n))]),
                (o = e[n]),
                Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                n !== i && ((e[i] = o), delete e[n]),
                (s = k.cssHooks[i]) && ("expand" in s))
              )
                for (n in ((o = s.expand(o)), delete e[i], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = r));
              else t[i] = r;
          })(u, c.opts.specialEasing);
          o < s;
          o++
        )
          if ((i = yt.prefilters[o].call(c, e, u, c.opts)))
            return (
              v(i.stop) &&
                (k._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          k.map(u, vt, c),
          v(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          k.fx.timer(k.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (k.Animation = k.extend(yt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ye(n.elem, e, de.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          v(e) ? ((t = e), (e = ["*"])) : (e = e.match(V));
          for (var n, i = 0, r = e.length; i < r; i++)
            (n = e[i]),
              (yt.tweeners[n] = yt.tweeners[n] || []),
              yt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              u,
              p = "width" in t || "height" in t,
              d = this,
              h = {},
              f = e.style,
              g = e.nodeType && ve(e),
              m = se.get(e, "fxshow");
            for (i in (n.queue ||
              (null == (s = k._queueHooks(e, "fx")).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function () {
                  s.unqueued || a();
                })),
              s.unqueued++,
              d.always(function () {
                d.always(function () {
                  s.unqueued--, k.queue(e, "fx").length || s.empty.fire();
                });
              })),
            t))
              if (((r = t[i]), dt.test(r))) {
                if (
                  (delete t[i],
                  (o = o || "toggle" === r),
                  r === (g ? "hide" : "show"))
                ) {
                  if ("show" !== r || !m || void 0 === m[i]) continue;
                  g = !0;
                }
                h[i] = (m && m[i]) || k.style(e, i);
              }
            if ((l = !k.isEmptyObject(t)) || !k.isEmptyObject(h))
              for (i in (p &&
                1 === e.nodeType &&
                ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                null == (c = m && m.display) && (c = se.get(e, "display")),
                "none" === (u = k.css(e, "display")) &&
                  (c
                    ? (u = c)
                    : (xe([e], !0),
                      (c = e.style.display || c),
                      (u = k.css(e, "display")),
                      xe([e]))),
                ("inline" === u || ("inline-block" === u && null != c)) &&
                  "none" === k.css(e, "float") &&
                  (l ||
                    (d.done(function () {
                      f.display = c;
                    }),
                    null == c &&
                      ((u = f.display), (c = "none" === u ? "" : u))),
                  (f.display = "inline-block"))),
              n.overflow &&
                ((f.overflow = "hidden"),
                d.always(function () {
                  (f.overflow = n.overflow[0]),
                    (f.overflowX = n.overflow[1]),
                    (f.overflowY = n.overflow[2]);
                })),
              (l = !1),
              h))
                l ||
                  (m
                    ? "hidden" in m && (g = m.hidden)
                    : (m = se.access(e, "fxshow", { display: c })),
                  o && (m.hidden = !g),
                  g && xe([e], !0),
                  d.done(function () {
                    for (i in (g || xe([e]), se.remove(e, "fxshow"), h))
                      k.style(e, i, h[i]);
                  })),
                  (l = vt(g ? m[i] : 0, i, d)),
                  i in m ||
                    ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
        },
      })),
        (k.speed = function (e, t, n) {
          var i =
            e && "object" == typeof e
              ? k.extend({}, e)
              : {
                  complete: n || (!n && t) || (v(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !v(t) && t),
                };
          return (
            k.fx.off
              ? (i.duration = 0)
              : "number" != typeof i.duration &&
                (i.duration in k.fx.speeds
                  ? (i.duration = k.fx.speeds[i.duration])
                  : (i.duration = k.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              v(i.old) && i.old.call(this), i.queue && k.dequeue(this, i.queue);
            }),
            i
          );
        }),
        k.fn.extend({
          fadeTo: function (e, t, n, i) {
            return this.filter(ve)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, i);
          },
          animate: function (e, t, n, i) {
            var r = k.isEmptyObject(e),
              o = k.speed(t, n, i),
              s = function () {
                var t = yt(this, k.extend({}, e), o);
                (r || se.get(this, "finish")) && t.stop(!0);
              };
            return (
              (s.finish = s),
              r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            );
          },
          stop: function (e, t, n) {
            var i = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  r = null != e && e + "queueHooks",
                  o = k.timers,
                  s = se.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else for (r in s) s[r] && s[r].stop && ht.test(r) && i(s[r]);
                for (r = o.length; r--; )
                  o[r].elem !== this ||
                    (null != e && o[r].queue !== e) ||
                    (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                (!t && n) || k.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = se.get(this),
                  i = n[e + "queue"],
                  r = n[e + "queueHooks"],
                  o = k.timers,
                  s = i ? i.length : 0;
                for (
                  n.finish = !0,
                    k.queue(this, e, []),
                    r && r.stop && r.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        k.each(["toggle", "show", "hide"], function (e, t) {
          var n = k.fn[t];
          k.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(mt(t, !0), e, i, r);
          };
        }),
        k.each(
          {
            slideDown: mt("show"),
            slideUp: mt("hide"),
            slideToggle: mt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            k.fn[e] = function (e, n, i) {
              return this.animate(t, e, n, i);
            };
          }
        ),
        (k.timers = []),
        (k.fx.tick = function () {
          var e,
            t = 0,
            n = k.timers;
          for (ut = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || k.fx.stop(), (ut = void 0);
        }),
        (k.fx.timer = function (e) {
          k.timers.push(e), k.fx.start();
        }),
        (k.fx.interval = 13),
        (k.fx.start = function () {
          pt || ((pt = !0), ft());
        }),
        (k.fx.stop = function () {
          pt = null;
        }),
        (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (k.fn.delay = function (e, t) {
          return (
            (e = (k.fx && k.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, i) {
              var r = n.setTimeout(t, e);
              i.stop = function () {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function () {
          var e = b.createElement("input"),
            t = b
              .createElement("select")
              .appendChild(b.createElement("option"));
          (e.type = "checkbox"),
            (m.checkOn = "" !== e.value),
            (m.optSelected = t.selected),
            ((e = b.createElement("input")).value = "t"),
            (e.type = "radio"),
            (m.radioValue = "t" === e.value);
        })();
      var bt,
        wt = k.expr.attrHandle;
      k.fn.extend({
        attr: function (e, t) {
          return J(this, k.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            k.removeAttr(this, e);
          });
        },
      }),
        k.extend({
          attr: function (e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? k.prop(e, t, n)
                : ((1 === o && k.isXMLDoc(e)) ||
                    (r =
                      k.attrHooks[t.toLowerCase()] ||
                      (k.expr.match.bool.test(t) ? bt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void k.removeAttr(e, t)
                      : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                      ? i
                      : (e.setAttribute(t, n + ""), n)
                    : r && "get" in r && null !== (i = r.get(e, t))
                    ? i
                    : null == (i = k.find.attr(e, t))
                    ? void 0
                    : i);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!m.radioValue && "radio" === t && A(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              i = 0,
              r = t && t.match(V);
            if (r && 1 === e.nodeType)
              for (; (n = r[i++]); ) e.removeAttribute(n);
          },
        }),
        (bt = {
          set: function (e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = wt[t] || k.find.attr;
          wt[t] = function (e, t, i) {
            var r,
              o,
              s = t.toLowerCase();
            return (
              i ||
                ((o = wt[s]),
                (wt[s] = r),
                (r = null != n(e, t, i) ? s : null),
                (wt[s] = o)),
              r
            );
          };
        });
      var xt = /^(?:input|select|textarea|button)$/i,
        _t = /^(?:a|area)$/i;
      function Ct(e) {
        return (e.match(V) || []).join(" ");
      }
      function kt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function Tt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(V)) || [];
      }
      k.fn.extend({
        prop: function (e, t) {
          return J(this, k.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[k.propFix[e] || e];
          });
        },
      }),
        k.extend({
          prop: function (e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && k.isXMLDoc(e)) ||
                  ((t = k.propFix[t] || t), (r = k.propHooks[t])),
                void 0 !== n
                  ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e[t] = n)
                  : r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = k.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : xt.test(e.nodeName) || (_t.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        m.optSelected ||
          (k.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        k.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            k.propFix[this.toLowerCase()] = this;
          }
        ),
        k.fn.extend({
          addClass: function (e) {
            var t, n, i, r, o, s;
            return v(e)
              ? this.each(function (t) {
                  k(this).addClass(e.call(this, t, kt(this)));
                })
              : (t = Tt(e)).length
              ? this.each(function () {
                  if (
                    ((i = kt(this)),
                    (n = 1 === this.nodeType && " " + Ct(i) + " "))
                  ) {
                    for (o = 0; o < t.length; o++)
                      (r = t[o]),
                        n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                    (s = Ct(n)), i !== s && this.setAttribute("class", s);
                  }
                })
              : this;
          },
          removeClass: function (e) {
            var t, n, i, r, o, s;
            return v(e)
              ? this.each(function (t) {
                  k(this).removeClass(e.call(this, t, kt(this)));
                })
              : arguments.length
              ? (t = Tt(e)).length
                ? this.each(function () {
                    if (
                      ((i = kt(this)),
                      (n = 1 === this.nodeType && " " + Ct(i) + " "))
                    ) {
                      for (o = 0; o < t.length; o++)
                        for (r = t[o]; n.indexOf(" " + r + " ") > -1; )
                          n = n.replace(" " + r + " ", " ");
                      (s = Ct(n)), i !== s && this.setAttribute("class", s);
                    }
                  })
                : this
              : this.attr("class", "");
          },
          toggleClass: function (e, t) {
            var n,
              i,
              r,
              o,
              s = typeof e,
              a = "string" === s || Array.isArray(e);
            return v(e)
              ? this.each(function (n) {
                  k(this).toggleClass(e.call(this, n, kt(this), t), t);
                })
              : "boolean" == typeof t && a
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : ((n = Tt(e)),
                this.each(function () {
                  if (a)
                    for (o = k(this), r = 0; r < n.length; r++)
                      (i = n[r]),
                        o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
                  else
                    (void 0 !== e && "boolean" !== s) ||
                      ((i = kt(this)) && se.set(this, "__className__", i),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          i || !1 === e
                            ? ""
                            : se.get(this, "__className__") || ""
                        ));
                }));
          },
          hasClass: function (e) {
            var t,
              n,
              i = 0;
            for (t = " " + e + " "; (n = this[i++]); )
              if (1 === n.nodeType && (" " + Ct(kt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var At = /\r/g;
      k.fn.extend({
        val: function (e) {
          var t,
            n,
            i,
            r = this[0];
          return arguments.length
            ? ((i = v(e)),
              this.each(function (n) {
                var r;
                1 === this.nodeType &&
                  (null == (r = i ? e.call(this, n, k(this).val()) : e)
                    ? (r = "")
                    : "number" == typeof r
                    ? (r += "")
                    : Array.isArray(r) &&
                      (r = k.map(r, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    k.valHooks[this.type] ||
                    k.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, r, "value")) ||
                    (this.value = r));
              }))
            : r
            ? (t =
                k.valHooks[r.type] || k.valHooks[r.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(r, "value"))
              ? n
              : "string" == typeof (n = r.value)
              ? n.replace(At, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        k.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = k.find.attr(e, "value");
                return null != t ? t : Ct(k.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  i,
                  r = e.options,
                  o = e.selectedIndex,
                  s = "select-one" === e.type,
                  a = s ? null : [],
                  l = s ? o + 1 : r.length;
                for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                  if (
                    ((n = r[i]).selected || i === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                  ) {
                    if (((t = k(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (
                  var n, i, r = e.options, o = k.makeArray(t), s = r.length;
                  s--;

                )
                  ((i = r[s]).selected =
                    k.inArray(k.valHooks.option.get(i), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        k.each(["radio", "checkbox"], function () {
          (k.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = k.inArray(k(e).val(), t) > -1);
            },
          }),
            m.checkOn ||
              (k.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        });
      var St = n.location,
        Et = { guid: Date.now() },
        Pt = /\?/;
      k.parseXML = function (e) {
        var t, i;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
          (i = t && t.getElementsByTagName("parsererror")[0]),
          (t && !i) ||
            k.error(
              "Invalid XML: " +
                (i
                  ? k
                      .map(i.childNodes, function (e) {
                        return e.textContent;
                      })
                      .join("\n")
                  : e)
            ),
          t
        );
      };
      var Ot = /^(?:focusinfocus|focusoutblur)$/,
        Lt = function (e) {
          e.stopPropagation();
        };
      k.extend(k.event, {
        trigger: function (e, t, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            p,
            d,
            f = [i || b],
            g = h.call(e, "type") ? e.type : e,
            m = h.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((s = d = a = i = i || b),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !Ot.test(g + k.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((g = (m = g.split(".")).shift()), m.sort()),
              (c = g.indexOf(":") < 0 && "on" + g),
              ((e = e[k.expando]
                ? e
                : new k.Event(g, "object" == typeof e && e)).isTrigger = r
                ? 2
                : 3),
              (e.namespace = m.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = i),
              (t = null == t ? [e] : k.makeArray(t, [e])),
              (p = k.event.special[g] || {}),
              r || !p.trigger || !1 !== p.trigger.apply(i, t)))
          ) {
            if (!r && !p.noBubble && !y(i)) {
              for (
                l = p.delegateType || g, Ot.test(l + g) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                f.push(s), (a = s);
              a === (i.ownerDocument || b) &&
                f.push(a.defaultView || a.parentWindow || n);
            }
            for (o = 0; (s = f[o++]) && !e.isPropagationStopped(); )
              (d = s),
                (e.type = o > 1 ? l : p.bindType || g),
                (u =
                  (se.get(s, "events") || Object.create(null))[e.type] &&
                  se.get(s, "handle")) && u.apply(s, t),
                (u = c && s[c]) &&
                  u.apply &&
                  re(s) &&
                  ((e.result = u.apply(s, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              r ||
                e.isDefaultPrevented() ||
                (p._default && !1 !== p._default.apply(f.pop(), t)) ||
                !re(i) ||
                (c &&
                  v(i[g]) &&
                  !y(i) &&
                  ((a = i[c]) && (i[c] = null),
                  (k.event.triggered = g),
                  e.isPropagationStopped() && d.addEventListener(g, Lt),
                  i[g](),
                  e.isPropagationStopped() && d.removeEventListener(g, Lt),
                  (k.event.triggered = void 0),
                  a && (i[c] = a))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var i = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
          k.event.trigger(i, null, t);
        },
      }),
        k.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              k.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0);
          },
        });
      var Dt = /\[\]$/,
        Mt = /\r?\n/g,
        It = /^(?:submit|button|image|reset|file)$/i,
        $t = /^(?:input|select|textarea|keygen)/i;
      function Nt(e, t, n, i) {
        var r;
        if (Array.isArray(t))
          k.each(t, function (t, r) {
            n || Dt.test(e)
              ? i(e, r)
              : Nt(
                  e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
                  r,
                  n,
                  i
                );
          });
        else if (n || "object" !== _(t)) i(e, t);
        else for (r in t) Nt(e + "[" + r + "]", t[r], n, i);
      }
      (k.param = function (e, t) {
        var n,
          i = [],
          r = function (e, t) {
            var n = v(t) ? t() : t;
            i[i.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
          k.each(e, function () {
            r(this.name, this.value);
          });
        else for (n in e) Nt(n, e[n], t, r);
        return i.join("&");
      }),
        k.fn.extend({
          serialize: function () {
            return k.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = k.prop(this, "elements");
              return e ? k.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !k(this).is(":disabled") &&
                  $t.test(this.nodeName) &&
                  !It.test(e) &&
                  (this.checked || !ke.test(e))
                );
              })
              .map(function (e, t) {
                var n = k(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? k.map(n, function (e) {
                      return { name: t.name, value: e.replace(Mt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(Mt, "\r\n") };
              })
              .get();
          },
        });
      var zt = /%20/g,
        jt = /#.*$/,
        Rt = /([?&])_=[^&]*/,
        Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ft = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        Ht = {},
        Ut = {},
        Gt = "*/".concat("*"),
        Vt = b.createElement("a");
      function Wt(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var i,
            r = 0,
            o = t.toLowerCase().match(V) || [];
          if (v(n))
            for (; (i = o[r++]); )
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                : (e[i] = e[i] || []).push(n);
        };
      }
      function Yt(e, t, n, i) {
        var r = {},
          o = e === Ut;
        function s(a) {
          var l;
          return (
            (r[a] = !0),
            k.each(e[a] || [], function (e, a) {
              var c = a(t, n, i);
              return "string" != typeof c || o || r[c]
                ? o
                  ? !(l = c)
                  : void 0
                : (t.dataTypes.unshift(c), s(c), !1);
            }),
            l
          );
        }
        return s(t.dataTypes[0]) || (!r["*"] && s("*"));
      }
      function Xt(e, t) {
        var n,
          i,
          r = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && k.extend(!0, e, i), e;
      }
      (Vt.href = St.href),
        k.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: St.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                St.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Gt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": k.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Xt(Xt(e, k.ajaxSettings), t) : Xt(k.ajaxSettings, e);
          },
          ajaxPrefilter: Wt(Ht),
          ajaxTransport: Wt(Ut),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              u,
              p,
              d,
              h = k.ajaxSetup({}, t),
              f = h.context || h,
              g = h.context && (f.nodeType || f.jquery) ? k(f) : k.event,
              m = k.Deferred(),
              v = k.Callbacks("once memory"),
              y = h.statusCode || {},
              w = {},
              x = {},
              _ = "canceled",
              C = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (c) {
                    if (!s)
                      for (s = {}; (t = Bt.exec(o)); )
                        s[t[1].toLowerCase() + " "] = (
                          s[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = s[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return c ? o : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == c &&
                      ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                      (w[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == c && (h.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (c) C.always(e[C.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || _;
                  return i && i.abort(t), T(0, t), this;
                },
              };
            if (
              (m.promise(C),
              (h.url = ((e || h.url || St.href) + "").replace(
                qt,
                St.protocol + "//"
              )),
              (h.type = t.method || t.type || h.method || h.type),
              (h.dataTypes = (h.dataType || "*").toLowerCase().match(V) || [
                "",
              ]),
              null == h.crossDomain)
            ) {
              l = b.createElement("a");
              try {
                (l.href = h.url),
                  (l.href = l.href),
                  (h.crossDomain =
                    Vt.protocol + "//" + Vt.host != l.protocol + "//" + l.host);
              } catch (e) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                "string" != typeof h.data &&
                (h.data = k.param(h.data, h.traditional)),
              Yt(Ht, h, t, C),
              c)
            )
              return C;
            for (p in ((u = k.event && h.global) &&
              0 == k.active++ &&
              k.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Ft.test(h.type)),
            (r = h.url.replace(jt, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (h.data = h.data.replace(zt, "+"))
              : ((d = h.url.slice(r.length)),
                h.data &&
                  (h.processData || "string" == typeof h.data) &&
                  ((r += (Pt.test(r) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((r = r.replace(Rt, "$1")),
                  (d = (Pt.test(r) ? "&" : "?") + "_=" + Et.guid++ + d)),
                (h.url = r + d)),
            h.ifModified &&
              (k.lastModified[r] &&
                C.setRequestHeader("If-Modified-Since", k.lastModified[r]),
              k.etag[r] && C.setRequestHeader("If-None-Match", k.etag[r])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              t.contentType) &&
              C.setRequestHeader("Content-Type", h.contentType),
            C.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + Gt + "; q=0.01" : "")
                : h.accepts["*"]
            ),
            h.headers))
              C.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(f, C, h) || c))
              return C.abort();
            if (
              ((_ = "abort"),
              v.add(h.complete),
              C.done(h.success),
              C.fail(h.error),
              (i = Yt(Ut, h, t, C)))
            ) {
              if (((C.readyState = 1), u && g.trigger("ajaxSend", [C, h]), c))
                return C;
              h.async &&
                h.timeout > 0 &&
                (a = n.setTimeout(function () {
                  C.abort("timeout");
                }, h.timeout));
              try {
                (c = !1), i.send(w, T);
              } catch (e) {
                if (c) throw e;
                T(-1, e);
              }
            }
            else T(-1, "No Transport");
            function T(e, t, s, l) {
              var p,
                d,
                b,
                w,
                x,
                _ = t;
              c ||
                ((c = !0),
                a && n.clearTimeout(a),
                (i = void 0),
                (o = l || ""),
                (C.readyState = e > 0 ? 4 : 0),
                (p = (e >= 200 && e < 300) || 304 === e),
                s &&
                  (w = (function (e, t, n) {
                    for (
                      var i, r, o, s, a = e.contents, l = e.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === i &&
                          (i =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                      for (r in a)
                        if (a[r] && a[r].test(i)) {
                          l.unshift(r);
                          break;
                        }
                    if (l[0] in n) o = l[0];
                    else {
                      for (r in n) {
                        if (!l[0] || e.converters[r + " " + l[0]]) {
                          o = r;
                          break;
                        }
                        s || (s = r);
                      }
                      o = o || s;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                  })(h, C, s)),
                !p &&
                  k.inArray("script", h.dataTypes) > -1 &&
                  k.inArray("json", h.dataTypes) < 0 &&
                  (h.converters["text script"] = function () {}),
                (w = (function (e, t, n, i) {
                  var r,
                    o,
                    s,
                    a,
                    l,
                    c = {},
                    u = e.dataTypes.slice();
                  if (u[1])
                    for (s in e.converters)
                      c[s.toLowerCase()] = e.converters[s];
                  for (o = u.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !l &&
                        i &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = o),
                      (o = u.shift()))
                    )
                      if ("*" === o) o = l;
                      else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o]))
                          for (r in c)
                            if (
                              (a = r.split(" "))[1] === o &&
                              (s = c[l + " " + a[0]] || c["* " + a[0]])
                            ) {
                              !0 === s
                                ? (s = c[r])
                                : !0 !== c[r] && ((o = a[0]), u.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else
                            try {
                              t = s(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: s
                                  ? e
                                  : "No conversion from " + l + " to " + o,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(h, w, C, p)),
                p
                  ? (h.ifModified &&
                      ((x = C.getResponseHeader("Last-Modified")) &&
                        (k.lastModified[r] = x),
                      (x = C.getResponseHeader("etag")) && (k.etag[r] = x)),
                    204 === e || "HEAD" === h.type
                      ? (_ = "nocontent")
                      : 304 === e
                      ? (_ = "notmodified")
                      : ((_ = w.state), (d = w.data), (p = !(b = w.error))))
                  : ((b = _), (!e && _) || ((_ = "error"), e < 0 && (e = 0))),
                (C.status = e),
                (C.statusText = (t || _) + ""),
                p ? m.resolveWith(f, [d, _, C]) : m.rejectWith(f, [C, _, b]),
                C.statusCode(y),
                (y = void 0),
                u &&
                  g.trigger(p ? "ajaxSuccess" : "ajaxError", [C, h, p ? d : b]),
                v.fireWith(f, [C, _]),
                u &&
                  (g.trigger("ajaxComplete", [C, h]),
                  --k.active || k.event.trigger("ajaxStop")));
            }
            return C;
          },
          getJSON: function (e, t, n) {
            return k.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return k.get(e, void 0, t, "script");
          },
        }),
        k.each(["get", "post"], function (e, t) {
          k[t] = function (e, n, i, r) {
            return (
              v(n) && ((r = r || i), (i = n), (n = void 0)),
              k.ajax(
                k.extend(
                  { url: e, type: t, dataType: r, data: n, success: i },
                  k.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        k.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (k._evalUrl = function (e, t, n) {
          return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              k.globalEval(e, t, n);
            },
          });
        }),
        k.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (v(e) && (e = e.call(this[0])),
                (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return v(e)
              ? this.each(function (t) {
                  k(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = k(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = v(e);
            return this.each(function (n) {
              k(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  k(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (k.expr.pseudos.hidden = function (e) {
          return !k.expr.pseudos.visible(e);
        }),
        (k.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (k.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Kt = { 0: 200, 1223: 204 },
        Zt = k.ajaxSettings.xhr();
      (m.cors = !!Zt && "withCredentials" in Zt),
        (m.ajax = Zt = !!Zt),
        k.ajaxTransport(function (e) {
          var t, i;
          if (m.cors || (Zt && !e.crossDomain))
            return {
              send: function (r, o) {
                var s,
                  a = e.xhr();
                if (
                  (a.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in (e.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  r["X-Requested-With"] ||
                  (r["X-Requested-With"] = "XMLHttpRequest"),
                r))
                  a.setRequestHeader(s, r[s]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        i =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      "abort" === e
                        ? a.abort()
                        : "error" === e
                        ? "number" != typeof a.status
                          ? o(0, "error")
                          : o(a.status, a.statusText)
                        : o(
                            Kt[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = t()),
                  (i = a.onerror = a.ontimeout = t("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          n.setTimeout(function () {
                            t && i();
                          });
                      }),
                  (t = t("abort"));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        k.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        k.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return k.globalEval(e), e;
            },
          },
        }),
        k.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        k.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (i, r) {
                (t = k("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && r("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  b.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Qt,
        Jt = [],
        en = /(=)\?(?=&|$)|\?\?/;
      k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Jt.pop() || k.expando + "_" + Et.guid++;
          return (this[e] = !0), e;
        },
      }),
        k.ajaxPrefilter("json jsonp", function (e, t, i) {
          var r,
            o,
            s,
            a =
              !1 !== e.jsonp &&
              (en.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  en.test(e.data) &&
                  "data");
          if (a || "jsonp" === e.dataTypes[0])
            return (
              (r = e.jsonpCallback =
                v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(en, "$1" + r))
                : !1 !== e.jsonp &&
                  (e.url += (Pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
              (e.converters["script json"] = function () {
                return s || k.error(r + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[r]),
              (n[r] = function () {
                s = arguments;
              }),
              i.always(function () {
                void 0 === o ? k(n).removeProp(r) : (n[r] = o),
                  e[r] && ((e.jsonpCallback = t.jsonpCallback), Jt.push(r)),
                  s && v(o) && o(s[0]),
                  (s = o = void 0);
              }),
              "script"
            );
        }),
        (m.createHTMLDocument =
          (((Qt = b.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Qt.childNodes.length)),
        (k.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (m.createHTMLDocument
                  ? (((i = (t =
                      b.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = b.location.href),
                    t.head.appendChild(i))
                  : (t = b)),
              (r = R.exec(e)),
              (o = !n && []),
              r
                ? [t.createElement(r[1])]
                : ((r = Le([e], t, o)),
                  o && o.length && k(o).remove(),
                  k.merge([], r.childNodes)));
          var i, r, o;
        }),
        (k.fn.load = function (e, t, n) {
          var i,
            r,
            o,
            s = this,
            a = e.indexOf(" ");
          return (
            a > -1 && ((i = Ct(e.slice(a))), (e = e.slice(0, a))),
            v(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (r = "POST"),
            s.length > 0 &&
              k
                .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    s.html(i ? k("<div>").append(k.parseHTML(e)).find(i) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      s.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (k.expr.pseudos.animated = function (e) {
          return k.grep(k.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (k.offset = {
          setOffset: function (e, t, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              c = k.css(e, "position"),
              u = k(e),
              p = {};
            "static" === c && (e.style.position = "relative"),
              (a = u.offset()),
              (o = k.css(e, "top")),
              (l = k.css(e, "left")),
              ("absolute" === c || "fixed" === c) &&
              (o + l).indexOf("auto") > -1
                ? ((s = (i = u.position()).top), (r = i.left))
                : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
              v(t) && (t = t.call(e, n, k.extend({}, a))),
              null != t.top && (p.top = t.top - a.top + s),
              null != t.left && (p.left = t.left - a.left + r),
              "using" in t ? t.using.call(e, p) : u.css(p);
          },
        }),
        k.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    k.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((t = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                i = this[0],
                r = { top: 0, left: 0 };
              if ("fixed" === k.css(i, "position"))
                t = i.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === k.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== i &&
                  1 === e.nodeType &&
                  (((r = k(e).offset()).top += k.css(e, "borderTopWidth", !0)),
                  (r.left += k.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - r.top - k.css(i, "marginTop", !0),
                left: t.left - r.left - k.css(i, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === k.css(e, "position");

              )
                e = e.offsetParent;
              return e || fe;
            });
          },
        }),
        k.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            k.fn[e] = function (i) {
              return J(
                this,
                function (e, i, r) {
                  var o;
                  if (
                    (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === r)
                  )
                    return o ? o[t] : e[i];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                    : (e[i] = r);
                },
                e,
                i,
                arguments.length
              );
            };
          }
        ),
        k.each(["top", "left"], function (e, t) {
          k.cssHooks[t] = Qe(m.pixelPosition, function (e, n) {
            if (n)
              return (n = Ze(e, t)), Ve.test(n) ? k(e).position()[t] + "px" : n;
          });
        }),
        k.each({ Height: "height", Width: "width" }, function (e, t) {
          k.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, i) {
              k.fn[i] = function (r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                  a = n || (!0 === r || !0 === o ? "margin" : "border");
                return J(
                  this,
                  function (t, n, r) {
                    var o;
                    return y(t)
                      ? 0 === i.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          o["scroll" + e],
                          t.body["offset" + e],
                          o["offset" + e],
                          o["client" + e]
                        ))
                      : void 0 === r
                      ? k.css(t, n, a)
                      : k.style(t, n, r, a);
                  },
                  t,
                  s ? r : void 0,
                  s
                );
              };
            }
          );
        }),
        k.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            k.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        k.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e);
          },
        }),
        k.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            k.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var tn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      (k.proxy = function (e, t) {
        var n, i, r;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
          return (
            (i = a.call(arguments, 2)),
            ((r = function () {
              return e.apply(t || this, i.concat(a.call(arguments)));
            }).guid = e.guid =
              e.guid || k.guid++),
            r
          );
      }),
        (k.holdReady = function (e) {
          e ? k.readyWait++ : k.ready(!0);
        }),
        (k.isArray = Array.isArray),
        (k.parseJSON = JSON.parse),
        (k.nodeName = A),
        (k.isFunction = v),
        (k.isWindow = y),
        (k.camelCase = ie),
        (k.type = _),
        (k.now = Date.now),
        (k.isNumeric = function (e) {
          var t = k.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (k.trim = function (e) {
          return null == e ? "" : (e + "").replace(tn, "$1");
        }),
        void 0 ===
          (i = function () {
            return k;
          }.apply(t, [])) || (e.exports = i);
      var nn = n.jQuery,
        rn = n.$;
      return (
        (k.noConflict = function (e) {
          return (
            n.$ === k && (n.$ = rn), e && n.jQuery === k && (n.jQuery = nn), k
          );
        }),
        void 0 === r && (n.jQuery = n.$ = k),
        k
      );
    });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return We;
    });
    var i,
      r,
      o,
      s,
      a,
      l,
      c,
      u,
      p,
      d,
      h,
      f,
      g,
      m,
      v,
      y,
      b,
      w,
      x,
      _,
      C,
      k,
      T,
      A,
      S,
      E,
      P,
      O = 1,
      L = [],
      D = [],
      M = Date.now,
      I = M(),
      $ = 0,
      N = 1,
      z = function (e) {
        return e;
      },
      j = function (e) {
        return Math.round(1e5 * e) / 1e5 || 0;
      },
      R = function () {
        return "undefined" != typeof window;
      },
      B = function () {
        return i || (R() && (i = window.gsap) && i.registerPlugin && i);
      },
      F = function (e) {
        return !!~c.indexOf(e);
      },
      q = function (e, t) {
        return ~L.indexOf(e) && L[L.indexOf(e) + 1][t];
      },
      H = function (e, t) {
        var n = t.s,
          i = t.sc,
          r = D.indexOf(e),
          o = i === ie.sc ? 1 : 2;
        return (
          !~r && (r = D.push(e) - 1),
          D[r + o] ||
            (D[r + o] =
              q(e, n) ||
              (F(e)
                ? i
                : function (t) {
                    return arguments.length ? (e[n] = t) : e[n];
                  }))
        );
      },
      U = function (e) {
        return (
          q(e, "getBoundingClientRect") ||
          (F(e)
            ? function () {
                return (
                  (qe.width = o.innerWidth), (qe.height = o.innerHeight), qe
                );
              }
            : function () {
                return se(e);
              })
        );
      },
      G = function (e, t) {
        var n = t.s,
          i = t.d2,
          r = t.d,
          s = t.a;
        return (n = "scroll" + i) && (s = q(e, n))
          ? s() - U(e)()[r]
          : F(e)
          ? Math.max(a[n], l[n]) -
            (o["inner" + i] || a["client" + i] || l["client" + i])
          : e[n] - e["offset" + i];
      },
      V = function (e, t) {
        for (var n = 0; n < C.length; n += 3)
          (!t || ~t.indexOf(C[n + 1])) && e(C[n], C[n + 1], C[n + 2]);
      },
      W = function (e) {
        return "string" == typeof e;
      },
      Y = function (e) {
        return "function" == typeof e;
      },
      X = function (e) {
        return "number" == typeof e;
      },
      K = function (e) {
        return "object" == typeof e;
      },
      Z = function (e) {
        return Y(e) && e();
      },
      Q = function (e, t) {
        return function () {
          var n = Z(e),
            i = Z(t);
          return function () {
            Z(n), Z(i);
          };
        };
      },
      J = Math.abs,
      ee = "padding",
      te = "px",
      ne = {
        s: "scrollLeft",
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: function (e) {
          return arguments.length
            ? o.scrollTo(e, ie.sc())
            : o.pageXOffset ||
                s.scrollLeft ||
                a.scrollLeft ||
                l.scrollLeft ||
                0;
        },
      },
      ie = {
        s: "scrollTop",
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: ne,
        sc: function (e) {
          return arguments.length
            ? o.scrollTo(ne.sc(), e)
            : o.pageYOffset || s.scrollTop || a.scrollTop || l.scrollTop || 0;
        },
      },
      re = function (e) {
        return o.getComputedStyle(e);
      },
      oe = function (e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e;
      },
      se = function (e, t) {
        var n =
            t &&
            "matrix(1, 0, 0, 1, 0, 0)" !== re(e)[b] &&
            i
              .to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              })
              .progress(1),
          r = e.getBoundingClientRect();
        return n && n.progress(0).kill(), r;
      },
      ae = function (e, t) {
        var n = t.d2;
        return e["offset" + n] || e["client" + n] || 0;
      },
      le = function (e) {
        var t,
          n = [],
          i = e.labels,
          r = e.duration();
        for (t in i) n.push(i[t] / r);
        return n;
      },
      ce = function (e, t, n, i) {
        return n.split(",").forEach(function (n) {
          return e(t, n, i);
        });
      },
      ue = function (e, t, n) {
        return e.addEventListener(t, n, { passive: !0 });
      },
      pe = function (e, t, n) {
        return e.removeEventListener(t, n);
      },
      de = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      he = { toggleActions: "play", anticipatePin: 0 },
      fe = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      ge = function (e, t) {
        if (W(e)) {
          var n = e.indexOf("="),
            i = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
          ~n &&
            (e.indexOf("%") > n && (i *= t / 100), (e = e.substr(0, n - 1))),
            (e =
              i +
              (e in fe
                ? fe[e] * t
                : ~e.indexOf("%")
                ? (parseFloat(e) * t) / 100
                : parseFloat(e) || 0));
        }
        return e;
      },
      me = function (e, t, n, i, r, o, a) {
        var c = r.startColor,
          u = r.endColor,
          p = r.fontSize,
          d = r.indent,
          h = r.fontWeight,
          f = s.createElement("div"),
          g = F(n) || "fixed" === q(n, "pinType"),
          m = -1 !== e.indexOf("scroller"),
          v = g ? l : n,
          y = -1 !== e.indexOf("start"),
          b = y ? c : u,
          w =
            "border-color:" +
            b +
            ";font-size:" +
            p +
            ";color:" +
            b +
            ";font-weight:" +
            h +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (w += "position:" + (m && g ? "fixed;" : "absolute;")),
          (m || !g) &&
            (w +=
              (i === ie ? "right" : "bottom") +
              ":" +
              (o + parseFloat(d)) +
              "px;"),
          a &&
            (w +=
              "box-sizing:border-box;text-align:left;width:" +
              a.offsetWidth +
              "px;"),
          (f._isStart = y),
          f.setAttribute("class", "gsap-marker-" + e),
          (f.style.cssText = w),
          (f.innerText = t || 0 === t ? e + "-" + t : e),
          v.children[0] ? v.insertBefore(f, v.children[0]) : v.appendChild(f),
          (f._offset = f["offset" + i.op.d2]),
          ve(f, 0, i, y),
          f
        );
      },
      ve = function (e, t, n, r) {
        var o = { display: "block" },
          s = n[r ? "os2" : "p2"],
          a = n[r ? "p2" : "os2"];
        (e._isFlipped = r),
          (o[n.a + "Percent"] = r ? -100 : 0),
          (o[n.a] = r ? "1px" : 0),
          (o["border" + s + "Width"] = 1),
          (o["border" + a + "Width"] = 0),
          (o[n.p] = t + "px"),
          i.set(e, o);
      },
      ye = [],
      be = {},
      we = function () {
        return d || (d = p($e));
      },
      xe = function () {
        d || ((d = p($e)), $ || Ee("scrollStart"), ($ = M()));
      },
      _e = function () {
        return !v && !A && !s.fullscreenElement && u.restart(!0);
      },
      Ce = {},
      ke = [],
      Te = [],
      Ae = function (e) {
        var t,
          n = i.ticker.frame,
          s = [],
          a = 0;
        if (P !== n || O) {
          for (Le(); a < Te.length; a += 4)
            (t = o.matchMedia(Te[a]).matches) !== Te[a + 3] &&
              ((Te[a + 3] = t),
              t ? s.push(a) : Le(1, Te[a]) || (Y(Te[a + 2]) && Te[a + 2]()));
          for (Oe(), a = 0; a < s.length; a++)
            (t = s[a]), (E = Te[t]), (Te[t + 2] = Te[t + 1](e));
          (E = 0), r && De(0, 1), (P = n), Ee("matchMedia");
        }
      },
      Se = function e() {
        return pe(We, "scrollEnd", e) || De(!0);
      },
      Ee = function (e) {
        return (
          (Ce[e] &&
            Ce[e].map(function (e) {
              return e();
            })) ||
          ke
        );
      },
      Pe = [],
      Oe = function (e) {
        for (var t = 0; t < Pe.length; t += 4)
          (e && Pe[t + 3] !== e) ||
            ((Pe[t].style.cssText = Pe[t + 1]), (Pe[t + 2].uncache = 1));
      },
      Le = function (e, t) {
        var n;
        for (w = 0; w < ye.length; w++)
          (n = ye[w]),
            (t && n.media !== t) ||
              (e
                ? n.kill(1)
                : (n.scroll.rec || (n.scroll.rec = n.scroll()), n.revert()));
        Oe(t), t || Ee("revert");
      },
      De = function (e, t) {
        if (!$ || e) {
          var n = Ee("refreshInit");
          for (k && We.sort(), t || Le(), w = 0; w < ye.length; w++)
            ye[w].refresh();
          for (
            n.forEach(function (e) {
              return e && e.render && e.render(-1);
            }),
              w = ye.length;
            w--;

          )
            ye[w].scroll.rec = 0;
          u.pause(), Ee("refresh");
        }
        else ue(We, "scrollEnd", Se);
      },
      Me = 0,
      Ie = 1,
      $e = function () {
        var e = ye.length,
          t = M(),
          n = t - I >= 50,
          i = e && ye[0].scroll();
        if (
          ((Ie = Me > i ? -1 : 1),
          (Me = i),
          n &&
            ($ && !y && t - $ > 200 && (($ = 0), Ee("scrollEnd")),
            (g = I),
            (I = t)),
          Ie < 0)
        ) {
          for (w = e; w-- > 0; ) ye[w] && ye[w].update(0, n);
          Ie = 1;
        }
        else for (w = 0; w < e; w++) ye[w] && ye[w].update(0, n);
        d = 0;
      },
      Ne = [
        "left",
        "top",
        "bottom",
        "right",
        "marginBottom",
        "marginRight",
        "marginTop",
        "marginLeft",
        "display",
        "flexShrink",
        "float",
        "zIndex",
      ],
      ze = Ne.concat([
        "width",
        "height",
        "boxSizing",
        "maxWidth",
        "maxHeight",
        "position",
        "margin",
        ee,
        "paddingTop",
        "paddingRight",
        "paddingBottom",
        "paddingLeft",
      ]),
      je = function (e, t, n, i) {
        if (e.parentNode !== t) {
          for (var r, o = Ne.length, s = t.style, a = e.style; o--; )
            s[(r = Ne[o])] = n[r];
          (s.position = "absolute" === n.position ? "absolute" : "relative"),
            "inline" === n.display && (s.display = "inline-block"),
            (a.bottom = a.right = "auto"),
            (s.overflow = "visible"),
            (s.boxSizing = "border-box"),
            (s.width = ae(e, ne) + te),
            (s.height = ae(e, ie) + te),
            (s.padding = a.margin = a.top = a.left = "0"),
            Be(i),
            (a.width = a.maxWidth = n.width),
            (a.height = a.maxHeight = n.height),
            (a.padding = n.padding),
            e.parentNode.insertBefore(t, e),
            t.appendChild(e);
        }
      },
      Re = /([A-Z])/g,
      Be = function (e) {
        if (e) {
          var t,
            n,
            r = e.t.style,
            o = e.length,
            s = 0;
          for ((e.t._gsap || i.core.getCache(e.t)).uncache = 1; s < o; s += 2)
            (n = e[s + 1]),
              (t = e[s]),
              n
                ? (r[t] = n)
                : r[t] && r.removeProperty(t.replace(Re, "-$1").toLowerCase());
        }
      },
      Fe = function (e) {
        for (var t = ze.length, n = e.style, i = [], r = 0; r < t; r++)
          i.push(ze[r], n[ze[r]]);
        return (i.t = e), i;
      },
      qe = { left: 0, top: 0 },
      He = function (e, t, n, i, r, o, s, c, u, p, d, f) {
        if (
          (Y(e) && (e = e(c)),
          W(e) &&
            "max" === e.substr(0, 3) &&
            (e = f + ("=" === e.charAt(4) ? ge("0" + e.substr(3), n) : 0)),
          X(e))
        )
          s && ve(s, n, i, !0);
        else {
          Y(t) && (t = t(c));
          var g,
            m,
            v,
            y = h(t)[0] || l,
            b = se(y) || {},
            w = e.split(" ");
          (b && (b.left || b.top)) ||
            "none" !== re(y).display ||
            ((v = y.style.display),
            (y.style.display = "block"),
            (b = se(y)),
            v ? (y.style.display = v) : y.style.removeProperty("display")),
            (g = ge(w[0], b[i.d])),
            (m = ge(w[1] || "0", n)),
            (e = b[i.p] - u[i.p] - p + g + r - m),
            s && ve(s, m, i, n - m < 20 || (s._isStart && m > 20)),
            (n -= n - m);
        }
        if (o) {
          var x = e + n,
            _ = o._isStart;
          (f = "scroll" + i.d2),
            ve(
              o,
              x,
              i,
              (_ && x > 20) ||
                (!_ && (d ? Math.max(l[f], a[f]) : o.parentNode[f]) <= x + 1)
            ),
            d &&
              ((u = se(s)),
              d && (o.style[i.op.p] = u[i.op.p] - i.op.m - o._offset + te));
        }
        return Math.round(e);
      },
      Ue = /(?:webkit|moz|length|cssText|inset)/i,
      Ge = function (e, t, n, r) {
        if (e.parentNode !== t) {
          var o,
            s,
            a = e.style;
          if (t === l) {
            for (o in ((e._stOrig = a.cssText), (s = re(e))))
              +o ||
                Ue.test(o) ||
                !s[o] ||
                "string" != typeof a[o] ||
                "0" === o ||
                (a[o] = s[o]);
            (a.top = n), (a.left = r);
          }
          else a.cssText = e._stOrig;
          (i.core.getCache(e).uncache = 1), t.appendChild(e);
        }
      },
      Ve = function (e, t) {
        var n,
          r,
          o = H(e, t),
          s = "_scroll" + t.p2,
          a = function t(a, l, c, u, p) {
            var d = t.tween,
              h = l.onComplete,
              f = {};
            return (
              d && d.kill(),
              (n = Math.round(c)),
              (l[s] = a),
              (l.modifiers = f),
              (f[s] = function (e) {
                return (
                  (e = j(o())) !== n && e !== r && Math.abs(e - n) > 2
                    ? (d.kill(), (t.tween = 0))
                    : (e = c + u * d.ratio + p * d.ratio * d.ratio),
                  (r = n),
                  (n = j(e))
                );
              }),
              (l.onComplete = function () {
                (t.tween = 0), h && h.call(d);
              }),
              (d = t.tween = i.to(e, l))
            );
          };
        return (
          (e[s] = o),
          e.addEventListener("wheel", function () {
            return a.tween && a.tween.kill() && (a.tween = 0);
          }),
          a
        );
      };
    ne.op = ie;
    var We = (function () {
      function e(t, n) {
        r || e.register(i), this.init(t, n);
      }
      return (
        (e.prototype.init = function (t, n) {
          if (
            ((this.progress = this.start = 0), this.vars && this.kill(1), N)
          ) {
            var r,
              c,
              u,
              p,
              d,
              m,
              b,
              x,
              _,
              C,
              A,
              P,
              D,
              I,
              j,
              R,
              B,
              V,
              Z,
              Q,
              ce,
              fe,
              ve,
              we,
              Ce,
              ke,
              Te,
              Ae,
              Ee,
              Pe,
              Oe,
              Le,
              De,
              Me,
              $e,
              Ne,
              ze,
              Re,
              Ue,
              We = (t = oe(W(t) || X(t) || t.nodeType ? { trigger: t } : t, he))
                .horizontal
                ? ne
                : ie,
              Ye = t,
              Xe = Ye.onUpdate,
              Ke = Ye.toggleClass,
              Ze = Ye.id,
              Qe = Ye.onToggle,
              Je = Ye.onRefresh,
              et = Ye.scrub,
              tt = Ye.trigger,
              nt = Ye.pin,
              it = Ye.pinSpacing,
              rt = Ye.invalidateOnRefresh,
              ot = Ye.anticipatePin,
              st = Ye.onScrubComplete,
              at = Ye.onSnapComplete,
              lt = Ye.once,
              ct = Ye.snap,
              ut = Ye.pinReparent,
              pt = !et && 0 !== et,
              dt = h(t.scroller || o)[0],
              ht = i.core.getCache(dt),
              ft = F(dt),
              gt =
                "pinType" in t
                  ? "fixed" === t.pinType
                  : ft || "fixed" === q(dt, "pinType"),
              mt = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
              vt = pt && t.toggleActions.split(" "),
              yt = "markers" in t ? t.markers : he.markers,
              bt = ft ? 0 : parseFloat(re(dt)["border" + We.p2 + "Width"]) || 0,
              wt = this,
              xt =
                t.onRefreshInit &&
                function () {
                  return t.onRefreshInit(wt);
                },
              _t = (function (e, t, n) {
                var i = n.d,
                  r = n.d2,
                  s = n.a;
                return (s = q(e, "getBoundingClientRect"))
                  ? function () {
                      return s()[i];
                    }
                  : function () {
                      return (t ? o["inner" + r] : e["client" + r]) || 0;
                    };
              })(dt, ft, We),
              Ct = (function (e, t) {
                return !t || ~L.indexOf(e)
                  ? U(e)
                  : function () {
                      return qe;
                    };
              })(dt, ft);
            (wt.media = E),
              (ot *= 45),
              ye.push(wt),
              (wt.scroller = dt),
              (wt.scroll = H(dt, We)),
              (d = wt.scroll()),
              (wt.vars = t),
              (n = n || t.animation),
              "refreshPriority" in t && (k = 1),
              (ht.tweenScroll = ht.tweenScroll || {
                top: Ve(dt, ie),
                left: Ve(dt, ne),
              }),
              (wt.tweenTo = r = ht.tweenScroll[We.p]),
              n &&
                ((n.vars.lazy = !1),
                n._initted ||
                  (!1 !== n.vars.immediateRender &&
                    !1 !== t.immediateRender &&
                    n.render(0, !0, !0)),
                (wt.animation = n.pause()),
                (n.scrollTrigger = wt),
                (Le = X(et) && et) &&
                  (Oe = i.to(n, {
                    ease: "power3",
                    duration: Le,
                    onComplete: function () {
                      return st && st(wt);
                    },
                  })),
                (Ee = 0),
                Ze || (Ze = n.vars.id)),
              ct &&
                (K(ct) || (ct = { snapTo: ct }),
                "scrollBehavior" in l.style &&
                  i.set(ft ? [l, a] : dt, { scrollBehavior: "auto" }),
                (u = Y(ct.snapTo)
                  ? ct.snapTo
                  : "labels" === ct.snapTo
                  ? (function (e) {
                      return function (t) {
                        return i.utils.snap(le(e), t);
                      };
                    })(n)
                  : "labelsDirectional" === ct.snapTo
                  ? ((Re = n),
                    function (e, t) {
                      var n,
                        i = le(Re);
                      if (
                        (i.sort(function (e, t) {
                          return e - t;
                        }),
                        t.direction > 0)
                      ) {
                        for (e -= 1e-4, n = 0; n < i.length; n++)
                          if (i[n] >= e) return i[n];
                        return i.pop();
                      }
                      for (n = i.length, e += 1e-4; n--; )
                        if (i[n] <= e) return i[n];
                      return i[0];
                    })
                  : i.utils.snap(ct.snapTo)),
                (De = ct.duration || { min: 0.1, max: 2 }),
                (De = K(De) ? f(De.min, De.max) : f(De, De)),
                (Me = i
                  .delayedCall(ct.delay || Le / 2 || 0.1, function () {
                    if (Math.abs(wt.getVelocity()) < 10 && !y) {
                      var e = n && !pt ? n.totalProgress() : wt.progress,
                        t = ((e - Pe) / (M() - g)) * 1e3 || 0,
                        i = (J(t / 2) * t) / 0.185,
                        o = e + (!1 === ct.inertia ? 0 : i),
                        s = f(0, 1, u(o, wt)),
                        a = wt.scroll(),
                        l = Math.round(b + s * I),
                        c = ct,
                        p = c.onStart,
                        d = c.onInterrupt,
                        h = c.onComplete,
                        m = r.tween;
                      if (a <= x && a >= b && l !== a) {
                        if (m && !m._initted && m.data <= Math.abs(l - a))
                          return;
                        r(
                          l,
                          {
                            duration: De(
                              J(
                                (0.185 * Math.max(J(o - e), J(s - e))) /
                                  t /
                                  0.05 || 0
                              )
                            ),
                            ease: ct.ease || "power3",
                            data: Math.abs(l - a),
                            onInterrupt: function () {
                              return Me.restart(!0) && d && d(wt);
                            },
                            onComplete: function () {
                              (Ee = Pe =
                                n && !pt ? n.totalProgress() : wt.progress),
                                at && at(wt),
                                h && h(wt);
                            },
                          },
                          a,
                          i * I,
                          l - a - i * I
                        ),
                          p && p(wt, r.tween);
                      }
                    }
                    else wt.isActive && Me.restart(!0);
                  })
                  .pause())),
              Ze && (be[Ze] = wt),
              (tt = wt.trigger = h(tt || nt)[0]),
              (nt = !0 === nt ? tt : h(nt)[0]),
              W(Ke) && (Ke = { targets: tt, className: Ke }),
              nt &&
                (!1 === it ||
                  "margin" === it ||
                  (it = !(!it && "flex" === re(nt.parentNode).display) && ee),
                (wt.pin = nt),
                !1 !== t.force3D && i.set(nt, { force3D: !0 }),
                (c = i.core.getCache(nt)).spacer
                  ? (j = c.pinState)
                  : ((c.spacer = V = s.createElement("div")),
                    V.setAttribute(
                      "class",
                      "pin-spacer" + (Ze ? " pin-spacer-" + Ze : "")
                    ),
                    (c.pinState = j = Fe(nt))),
                (wt.spacer = V = c.spacer),
                (Ae = re(nt)),
                (we = Ae[it + We.os2]),
                (Q = i.getProperty(nt)),
                (ce = i.quickSetter(nt, We.a, te)),
                je(nt, V, Ae),
                (B = Fe(nt))),
              yt &&
                ((D = K(yt) ? oe(yt, de) : de),
                (A = me("scroller-start", Ze, dt, We, D, 0)),
                (P = me("scroller-end", Ze, dt, We, D, 0, A)),
                (Z = A["offset" + We.op.d2]),
                (_ = me("start", Ze, dt, We, D, Z)),
                (C = me("end", Ze, dt, We, D, Z)),
                gt ||
                  (((Ue = ft ? l : dt).style.position =
                    "absolute" === re(Ue).position ? "absolute" : "relative"),
                  i.set([A, P], { force3D: !0 }),
                  (ke = i.quickSetter(A, We.a, te)),
                  (Te = i.quickSetter(P, We.a, te)))),
              (wt.revert = function (e) {
                var t = !1 !== e || !wt.enabled,
                  i = v;
                t !== p &&
                  (t &&
                    ((Ne = Math.max(wt.scroll(), wt.scroll.rec || 0)),
                    ($e = wt.progress),
                    (ze = n && n.progress())),
                  _ &&
                    [_, C, A, P].forEach(function (e) {
                      return (e.style.display = t ? "none" : "block");
                    }),
                  t && (v = 1),
                  wt.update(t),
                  (v = i),
                  nt &&
                    (t
                      ? (function (e, t, n) {
                          if ((Be(n), e.parentNode === t)) {
                            var i = t.parentNode;
                            i && (i.insertBefore(e, t), i.removeChild(t));
                          }
                        })(nt, V, j)
                      : (!ut || !wt.isActive) && je(nt, V, re(nt), Ce)),
                  (p = t));
              }),
              (wt.refresh = function (r, o) {
                if ((!v && wt.enabled) || o)
                  if (nt && r && $) ue(e, "scrollEnd", Se);
                  else {
                    (v = 1),
                      Oe && Oe.pause(),
                      rt && n && n.progress(0).invalidate(),
                      p || wt.revert();
                    for (
                      var s,
                        a,
                        c,
                        u,
                        h,
                        f,
                        g,
                        y,
                        w,
                        k = _t(),
                        S = Ct(),
                        E = G(dt, We),
                        O = 0,
                        L = 0,
                        D = t.end,
                        M = t.endTrigger || tt,
                        N =
                          t.start ||
                          (0 !== t.start && tt ? (nt ? "0 0" : "0 100%") : 0),
                        z = (tt && Math.max(0, ye.indexOf(wt))) || 0,
                        F = z;
                      F--;

                    )
                      (f = ye[F]).end || f.refresh(0, 1) || (v = 1),
                        (g = f.pin) && (g === tt || g === nt) && f.revert();
                    for (
                      b =
                        He(N, tt, k, We, wt.scroll(), _, A, wt, S, bt, gt, E) ||
                        (nt ? -0.001 : 0),
                        Y(D) && (D = D(wt)),
                        W(D) &&
                          !D.indexOf("+=") &&
                          (~D.indexOf(" ")
                            ? (D = (W(N) ? N.split(" ")[0] : "") + D)
                            : ((O = ge(D.substr(2), k)),
                              (D = W(N) ? N : b + O),
                              (M = tt))),
                        x =
                          Math.max(
                            b,
                            He(
                              D || (M ? "100% 0" : E),
                              M,
                              k,
                              We,
                              wt.scroll() + O,
                              C,
                              P,
                              wt,
                              S,
                              bt,
                              gt,
                              E
                            )
                          ) || -0.001,
                        I = x - b || ((b -= 0.01) && 0.001),
                        O = 0,
                        F = z;
                      F--;

                    )
                      (g = (f = ye[F]).pin) &&
                        f.start - f._pinPush < b &&
                        ((s = f.end - f.start),
                        g === tt && (O += s),
                        g === nt && (L += s));
                    if (
                      ((b += O),
                      (x += O),
                      (wt._pinPush = L),
                      _ && O && (((s = {})[We.a] = "+=" + O), i.set([_, C], s)),
                      nt)
                    )
                      (s = re(nt)),
                        (u = We === ie),
                        (c = wt.scroll()),
                        (fe = parseFloat(Q(We.a)) + L),
                        !E &&
                          x > 1 &&
                          ((ft ? l : dt).style["overflow-" + We.a] = "scroll"),
                        je(nt, V, s),
                        (B = Fe(nt)),
                        (a = se(nt, !0)),
                        (y = gt && H(dt, u ? ne : ie)()),
                        it &&
                          (((Ce = [it + We.os2, I + L + te]).t = V),
                          (F = it === ee ? ae(nt, We) + I + L : 0) &&
                            Ce.push(We.d, F + te),
                          Be(Ce),
                          gt && wt.scroll(Ne)),
                        gt &&
                          (((h = {
                            top: a.top + (u ? c - b : y) + te,
                            left: a.left + (u ? y : c - b) + te,
                            boxSizing: "border-box",
                            position: "fixed",
                          }).width = h.maxWidth =
                            Math.ceil(a.width) + te),
                          (h.height = h.maxHeight = Math.ceil(a.height) + te),
                          (h.margin =
                            h.marginTop =
                            h.marginRight =
                            h.marginBottom =
                            h.marginLeft =
                              "0"),
                          (h.padding = s.padding),
                          (h.paddingTop = s.paddingTop),
                          (h.paddingRight = s.paddingRight),
                          (h.paddingBottom = s.paddingBottom),
                          (h.paddingLeft = s.paddingLeft),
                          (R = (function (e, t, n) {
                            for (
                              var i, r = [], o = e.length, s = n ? 8 : 0;
                              s < o;
                              s += 2
                            )
                              (i = e[s]), r.push(i, i in t ? t[i] : e[s + 1]);
                            return (r.t = e.t), r;
                          })(j, h, ut))),
                        n
                          ? ((w = n._initted),
                            T(1),
                            n.progress(1, !0),
                            (ve = Q(We.a) - fe + I + L),
                            I !== ve && R.splice(R.length - 2, 2),
                            n.progress(0, !0),
                            w || n.invalidate(),
                            T(0))
                          : (ve = I);
                    else if (tt && wt.scroll())
                      for (a = tt.parentNode; a && a !== l; )
                        a._pinOffset &&
                          ((b -= a._pinOffset), (x -= a._pinOffset)),
                          (a = a.parentNode);
                    for (F = 0; F < z; F++)
                      (f = ye[F].pin) &&
                        (f === tt || f === nt) &&
                        ye[F].revert(!1);
                    (wt.start = b),
                      (wt.end = x),
                      (d = m = wt.scroll()) < Ne && wt.scroll(Ne),
                      wt.revert(!1),
                      (v = 0),
                      n &&
                        pt &&
                        n._initted &&
                        n.progress(ze, !0).render(n.time(), !0, !0),
                      $e !== wt.progress &&
                        (Oe && n.totalProgress($e, !0),
                        (wt.progress = $e),
                        wt.update()),
                      nt && it && (V._pinOffset = Math.round(wt.progress * ve)),
                      Je && Je(wt);
                  }
              }),
              (wt.getVelocity = function () {
                return ((wt.scroll() - m) / (M() - g)) * 1e3 || 0;
              }),
              (wt.update = function (e, t) {
                var i,
                  o,
                  s,
                  a,
                  c,
                  u = wt.scroll(),
                  p = e ? 0 : (u - b) / I,
                  f = p < 0 ? 0 : p > 1 ? 1 : p || 0,
                  y = wt.progress;
                if (
                  (t &&
                    ((m = d),
                    (d = u),
                    ct && ((Pe = Ee), (Ee = n && !pt ? n.totalProgress() : f))),
                  ot &&
                    !f &&
                    nt &&
                    !v &&
                    !O &&
                    $ &&
                    b < u + ((u - m) / (M() - g)) * ot &&
                    (f = 1e-4),
                  f !== y && wt.enabled)
                ) {
                  if (
                    ((a =
                      (c =
                        (i = wt.isActive = !!f && f < 1) !== (!!y && y < 1)) ||
                      !!f != !!y),
                    (wt.direction = f > y ? 1 : -1),
                    (wt.progress = f),
                    pt ||
                      (!Oe || v || O
                        ? n && n.totalProgress(f, !!v)
                        : ((Oe.vars.totalProgress = f),
                          Oe.invalidate().restart())),
                    nt)
                  )
                    if ((e && it && (V.style[it + We.os2] = we), gt)) {
                      if (a) {
                        if (
                          ((s = !e && f > y && x + 1 > u && u + 1 >= G(dt, We)),
                          ut)
                        )
                          if (e || (!i && !s)) Ge(nt, V);
                          else {
                            var w = se(nt, !0),
                              _ = u - b;
                            Ge(
                              nt,
                              l,
                              w.top + (We === ie ? _ : 0) + te,
                              w.left + (We === ie ? 0 : _) + te
                            );
                          }
                        Be(i || s ? R : B),
                          (ve !== I && f < 1 && i) ||
                            ce(fe + (1 !== f || s ? 0 : ve));
                      }
                    }
                    else ce(fe + ve * f);
                  ct && !r.tween && !v && !O && Me.restart(!0),
                    Ke &&
                      (c || (lt && f && (f < 1 || !S))) &&
                      h(Ke.targets).forEach(function (e) {
                        return e.classList[i || lt ? "add" : "remove"](
                          Ke.className
                        );
                      }),
                    Xe && !pt && !e && Xe(wt),
                    a && !v
                      ? ((o = f && !y ? 0 : 1 === f ? 1 : 1 === y ? 2 : 3),
                        pt &&
                          ((s =
                            (!c && "none" !== vt[o + 1] && vt[o + 1]) || vt[o]),
                          n &&
                            ("complete" === s || "reset" === s || s in n) &&
                            ("complete" === s
                              ? n.pause().totalProgress(1)
                              : "reset" === s
                              ? n.restart(!0).pause()
                              : n[s]()),
                          Xe && Xe(wt)),
                        (!c && S) ||
                          (Qe && c && Qe(wt),
                          mt[o] && mt[o](wt),
                          lt && (1 === f ? wt.kill(!1, 1) : (mt[o] = 0)),
                          c || (mt[(o = 1 === f ? 1 : 3)] && mt[o](wt))))
                      : pt && Xe && !v && Xe(wt);
                }
                Te && (ke(u + (A._isFlipped ? 1 : 0)), Te(u));
              }),
              (wt.enable = function () {
                wt.enabled ||
                  ((wt.enabled = !0),
                  ue(dt, "resize", _e),
                  ue(dt, "scroll", xe),
                  xt && ue(e, "refreshInit", xt),
                  n && n.add
                    ? i.delayedCall(0.01, function () {
                        return b || x || wt.refresh();
                      }) &&
                      (I = 0.01) &&
                      (b = x = 0)
                    : wt.refresh());
              }),
              (wt.disable = function (t, n) {
                if (
                  wt.enabled &&
                  (!1 !== t && wt.revert(),
                  (wt.enabled = wt.isActive = !1),
                  n || (Oe && Oe.pause()),
                  (Ne = 0),
                  c && (c.uncache = 1),
                  xt && pe(e, "refreshInit", xt),
                  Me &&
                    (Me.pause(), r.tween && r.tween.kill() && (r.tween = 0)),
                  !ft)
                ) {
                  for (var i = ye.length; i--; )
                    if (ye[i].scroller === dt && ye[i] !== wt) return;
                  pe(dt, "resize", _e), pe(dt, "scroll", xe);
                }
              }),
              (wt.kill = function (e, t) {
                wt.disable(e, t), Ze && delete be[Ze];
                var i = ye.indexOf(wt);
                ye.splice(i, 1),
                  i === w && Ie > 0 && w--,
                  n &&
                    ((n.scrollTrigger = null),
                    e && n.render(-1),
                    t || n.kill()),
                  _ &&
                    [_, C, A, P].forEach(function (e) {
                      return e.parentNode.removeChild(e);
                    }),
                  nt &&
                    (c && (c.uncache = 1),
                    (i = 0),
                    ye.forEach(function (e) {
                      return e.pin === nt && i++;
                    }),
                    i || (c.spacer = 0));
              }),
              wt.enable();
          }
          else this.update = this.refresh = this.kill = z;
        }),
        (e.register = function (t) {
          if (
            !r &&
            ((i = t || B()),
            R() &&
              window.document &&
              ((o = window),
              (s = document),
              (a = s.documentElement),
              (l = s.body)),
            i &&
              ((h = i.utils.toArray),
              (f = i.utils.clamp),
              (T = i.core.suppressOverwrites || z),
              i.core.globals("ScrollTrigger", e),
              l))
          ) {
            (p =
              o.requestAnimationFrame ||
              function (e) {
                return setTimeout(e, 16);
              }),
              ue(o, "wheel", xe),
              (c = [o, s, a, l]),
              ue(s, "scroll", xe);
            var n,
              d = l.style,
              g = d.borderTop;
            (d.borderTop = "1px solid #000"),
              (n = se(l)),
              (ie.m = Math.round(n.top + ie.sc()) || 0),
              (ne.m = Math.round(n.left + ne.sc()) || 0),
              g ? (d.borderTop = g) : d.removeProperty("border-top"),
              (m = setInterval(we, 200)),
              i.delayedCall(0.5, function () {
                return (O = 0);
              }),
              ue(s, "touchcancel", z),
              ue(l, "touchstart", z),
              ce(ue, s, "pointerdown,touchstart,mousedown", function () {
                return (y = 1);
              }),
              ce(ue, s, "pointerup,touchend,mouseup", function () {
                return (y = 0);
              }),
              (b = i.utils.checkPrefix("transform")),
              ze.push(b),
              (r = M()),
              (u = i.delayedCall(0.2, De).pause()),
              (C = [
                s,
                "visibilitychange",
                function () {
                  var e = o.innerWidth,
                    t = o.innerHeight;
                  s.hidden ? ((x = e), (_ = t)) : (x === e && _ === t) || _e();
                },
                s,
                "DOMContentLoaded",
                De,
                o,
                "load",
                function () {
                  return $ || De();
                },
                o,
                "resize",
                _e,
              ]),
              V(ue);
          }
          return r;
        }),
        (e.defaults = function (e) {
          for (var t in e) he[t] = e[t];
        }),
        (e.kill = function () {
          (N = 0),
            ye.slice(0).forEach(function (e) {
              return e.kill(1);
            });
        }),
        (e.config = function (e) {
          "limitCallbacks" in e && (S = !!e.limitCallbacks);
          var t = e.syncInterval;
          (t && clearInterval(m)) || ((m = t) && setInterval(we, t)),
            "autoRefreshEvents" in e &&
              (V(pe) || V(ue, e.autoRefreshEvents || "none"),
              (A = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
        }),
        (e.scrollerProxy = function (e, t) {
          var n = h(e)[0],
            i = D.indexOf(n),
            r = F(n);
          ~i && D.splice(i, r ? 6 : 2),
            r ? L.unshift(o, t, l, t, a, t) : L.unshift(n, t);
        }),
        (e.matchMedia = function (e) {
          var t, n, i, r, s;
          for (n in e)
            (i = Te.indexOf(n)),
              (r = e[n]),
              (E = n),
              "all" === n
                ? r()
                : (t = o.matchMedia(n)) &&
                  (t.matches && (s = r()),
                  ~i
                    ? ((Te[i + 1] = Q(Te[i + 1], r)),
                      (Te[i + 2] = Q(Te[i + 2], s)))
                    : ((i = Te.length),
                      Te.push(n, r, s),
                      t.addListener
                        ? t.addListener(Ae)
                        : t.addEventListener("change", Ae)),
                  (Te[i + 3] = t.matches)),
              (E = 0);
          return Te;
        }),
        (e.clearMatchMedia = function (e) {
          e || (Te.length = 0), (e = Te.indexOf(e)) >= 0 && Te.splice(e, 4);
        }),
        e
      );
    })();
    (We.version = "3.6.1"),
      (We.saveStyles = function (e) {
        return e
          ? h(e).forEach(function (e) {
              if (e && e.style) {
                var t = Pe.indexOf(e);
                t >= 0 && Pe.splice(t, 4),
                  Pe.push(e, e.style.cssText, i.core.getCache(e), E);
              }
            })
          : Pe;
      }),
      (We.revert = function (e, t) {
        return Le(!e, t);
      }),
      (We.create = function (e, t) {
        return new We(e, t);
      }),
      (We.refresh = function (e) {
        return e ? _e() : De(!0);
      }),
      (We.update = $e),
      (We.maxScroll = function (e, t) {
        return G(e, t ? ne : ie);
      }),
      (We.getScrollFunc = function (e, t) {
        return H(h(e)[0], t ? ne : ie);
      }),
      (We.getById = function (e) {
        return be[e];
      }),
      (We.getAll = function () {
        return ye.slice(0);
      }),
      (We.isScrolling = function () {
        return !!$;
      }),
      (We.addEventListener = function (e, t) {
        var n = Ce[e] || (Ce[e] = []);
        ~n.indexOf(t) || n.push(t);
      }),
      (We.removeEventListener = function (e, t) {
        var n = Ce[e],
          i = n && n.indexOf(t);
        i >= 0 && n.splice(i, 1);
      }),
      (We.batch = function (e, t) {
        var n,
          r = [],
          o = {},
          s = t.interval || 0.016,
          a = t.batchMax || 1e9,
          l = function (e, t) {
            var n = [],
              r = [],
              o = i
                .delayedCall(s, function () {
                  t(n, r), (n = []), (r = []);
                })
                .pause();
            return function (e) {
              n.length || o.restart(!0),
                n.push(e.trigger),
                r.push(e),
                a <= n.length && o.progress(1);
            };
          };
        for (n in t)
          o[n] =
            "on" === n.substr(0, 2) && Y(t[n]) && "onRefreshInit" !== n
              ? l(0, t[n])
              : t[n];
        return (
          Y(a) &&
            ((a = a()),
            ue(We, "refresh", function () {
              return (a = t.batchMax());
            })),
          h(e).forEach(function (e) {
            var t = {};
            for (n in o) t[n] = o[n];
            (t.trigger = e), r.push(We.create(t));
          }),
          r
        );
      }),
      (We.sort = function (e) {
        return ye.sort(
          e ||
            function (e, t) {
              return (
                -1e6 * (e.vars.refreshPriority || 0) +
                e.start -
                (t.start + -1e6 * (t.vars.refreshPriority || 0))
              );
            }
        );
      }),
      B() && i.registerPlugin(We);
  },
  function (e, t) {
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                i = e[3];
              if (!i) return n;
              if (t && "function" == typeof btoa) {
                var r =
                    ((s = i),
                    "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                      btoa(unescape(encodeURIComponent(JSON.stringify(s)))) +
                      " */"),
                  o = i.sources.map(function (e) {
                    return "/*# sourceURL=" + i.sourceRoot + e + " */";
                  });
                return [n].concat(o).concat([r]).join("\n");
              }
              var s;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
          }).join("");
        }),
        (t.i = function (e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var i = {}, r = 0; r < this.length; r++) {
            var o = this[r][0];
            "number" == typeof o && (i[o] = !0);
          }
          for (r = 0; r < e.length; r++) {
            var s = e[r];
            ("number" == typeof s[0] && i[s[0]]) ||
              (n && !s[2]
                ? (s[2] = n)
                : n && (s[2] = "(" + s[2] + ") and (" + n + ")"),
              t.push(s));
          }
        }),
        t
      );
    };
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e) {
        function i(e) {
          "@babel/helpers - typeof";
          return (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, s(i.key), i);
          }
        }
        function o(e, t, n) {
          return (
            (t = s(t)) in e
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
        function s(e) {
          var t = (function (e, t) {
            if ("object" !== i(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== i(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === i(t) ? t : String(t);
        }
        n.d(t, "default", function () {
          return a;
        });
        var a = (function (e, t, n) {
          return (
            t && r(e.prototype, t),
            n && r(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        })(function t() {
          var n = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            o(this, "init", function () {
              (n.page = 1),
                (n.mainContainer = e(".financeResults-main-container")),
                (n.itemList = n.mainContainer.find(".files-list")),
                (n.yearFilter = n.mainContainer.find(".yearsFilter")),
                (n.qtrFilter = n.mainContainer.find(".quarterFilter")),
                (n.qtrFilterOptions = n.qtrFilter
                  .parent()
                  .find(".select-options li")),
                (n.selectedYear = n.mainContainer.find("#selectedYear").val()),
                (n.selectedFolder = n.mainContainer.find("#folderName").val());
            }),
            o(this, "bindEvents", function () {
              n.yearFilter.click(n.tabClicked),
                n.qtrFilterOptions.click(n.filterSearch);
            }),
            o(this, "tabClicked", function (t) {
              var i = t.currentTarget ? t.currentTarget : t,
                r = e(i).data("value") || e(i).val();
              n.yearFilter.removeClass("active"),
                e(i).addClass("active"),
                n.selectedYear !== r &&
                  ((n.selectedYear = r), n.resetPage(), n.filterSearch());
            }),
            o(this, "resetPage", function () {
              n.page = 1;
            }),
            // o(this, "filterSearch", function () {
            //   n.resetPage(),
            //     e.ajax({
            //       dataType: "html",
            //       type: "GET",
            //       data: n.formFilters(),
            //       url: n.getCurrentPagePath(),
            //       success: n.applyFilters,
            //     });
            // }),
            o(this, "filterSearch", function () {
              n.resetPage();

              // Client-side filtering instead of AJAX call
              var selectedQuarter = n.qtrFilter.val();
              var selectedYear = n.selectedYear;
              var allItems = n.itemList.find("li");

              // Show all items if no filters are selected
              if (!selectedQuarter && !selectedYear) {
                allItems.show();
                return;
              }

              // Hide all items first
              allItems.hide();

              // Filter and show matching items
              allItems.each(function () {
                var item = $(this);
                var itemYear = item.data("year");
                var itemQuarter = item.data("quarter");

                var yearMatch = !selectedYear || itemYear == selectedYear;
                var quarterMatch =
                  !selectedQuarter || itemQuarter == selectedQuarter;

                if (yearMatch && quarterMatch) {
                  item.show();
                }
              });
            }),
            // o(this, "applyFilters", function (t) {
            //   var i;
            //   (t = JSON.parse(t)).success &&
            //     ((i = e(t.data)), n.itemList.empty(), n.itemList.append(i));
            // }),
            // o(this, "getCurrentPagePath", function () {
            //   return (
            //     CCM_APPLICATION_URL +
            //     "/index.php/api/v1/financialResultsBlock/financial_results_block"
            //   );
            // }),
            o(this, "formFilters", function () {
              return {
                page: n.page,
                qtr: n.encodeValue(n.qtrFilter),
                year: encodeURIComponent(n.selectedYear),
                folderName: encodeURIComponent(n.selectedFolder),
              };
            }),
            o(this, "encodeValue", function (e) {
              return e.val() ? encodeURIComponent(e.val()) : "";
            }),
            this.init(),
            this.bindEvents();
        });
      }.call(this, n(4));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", function () {
        return l;
      });
      var i = n(2);
      function r(e) {
        "@babel/helpers - typeof";
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, a(i.key), i);
        }
      }
      function s(e, t, n) {
        return (
          (t = a(t)) in e
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
      function a(e) {
        var t = (function (e, t) {
          if ("object" !== r(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" !== r(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === r(t) ? t : String(t);
      }
      var l = (function (e, t, n) {
        return (
          t && o(e.prototype, t),
          n && o(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      })(function t() {
        var n = this;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          s(this, "domReady", function () {
            n.bindEvents(),
              n.animation(),
              n.handleMegaMenu(),
              n.addActiveClass();
          }),
          s(this, "bindEvents", function () {}),
          s(this, "handleMobileMenu", function () {
            n.mobileMenu.hasClass("active")
              ? (n.mobileMenu.removeClass("active"),
                n.htmlBody.removeClass("active"),
                n.mobileNav.removeClass("active"),
                n.mobileMenuMask.removeClass("active"))
              : (n.mobileMenu.addClass("active"),
                n.htmlBody.addClass("active"),
                n.mobileNav.addClass("active"),
                n.mobileMenuMask.addClass("active"));
          }),
          s(this, "animation", function () {
            var e = 2.5;
            -1 !== document.cookie.indexOf("timer") && (e = 2.2),
              i.a
                .timeline({
                  onComplete: function () {
                    !(function (e, t) {
                      var n = new Date();
                      n.setTime(n.getTime() + 216e7);
                      var i = "expires=" + n.toUTCString();
                      document.cookie = e + "=" + t + "; " + i + "; path=/";
                    })("timer", 1);
                  },
                })
                .fromTo(
                  ".header .header-inner-wrapper",
                  0.8,
                  { y: "20%", autoAlpha: 0 },
                  { y: 0, autoAlpha: 1, ease: "Power2.easeOut" },
                  e - 1
                ),
              i.a
                .timeline()
                .from(".header .blur-overlay", {
                  y: "20%",
                  duration: 0.8,
                  opacity: 0,
                  ease: "Power2.easeOut",
                  delay: e - 0.8,
                });
          }),
          s(this, "handleMegaMenu", function () {
            var t = 0;
            n.header_submenu_one.hover(
              function () {
                t ||
                  (t = window.setTimeout(function () {
                    (t = null),
                      e(".headerExpand-one").addClass("hover-activated"),
                      e(".headerExpand-two").hasClass("hover-activated") ||
                      e(".headerExpand-three").hasClass("hover-activated") ||
                      e(".search-overlay").hasClass("hover-activated")
                        ? (e(".headerExpand").slideUp(500),
                          e(".search-overlay").slideUp(500),
                          setTimeout(function () {
                            e(".headerExpand-one").slideDown(500);
                          }, 510))
                        : (e(".headerExpand").slideUp(500),
                          e(".headerExpand-one").slideDown(500));
                  }, 600));
              },
              function () {
                if (!t) return null;
                window.clearTimeout(t), (t = null);
              }
            ),
              e(".no-sub-menu").on("mouseenter", function (t) {
                setTimeout(function () {
                  e(".headerExpand").slideUp(500),
                    e(".search-overlay").slideUp(500);
                }, 200);
              }),
              n.header_submenu_two.hover(
                function () {
                  t ||
                    (t = window.setTimeout(function () {
                      (t = null),
                        e(".headerExpand-two").addClass("hover-activated"),
                        e(".headerExpand-one").hasClass("hover-activated") ||
                        e(".headerExpand-three").hasClass("hover-activated") ||
                        e(".search-overlay").hasClass("hover-activated")
                          ? (e(".headerExpand").slideUp(500),
                            e(".search-overlay").slideUp(500),
                            setTimeout(function () {
                              e(".headerExpand-two").slideDown(500);
                            }, 510))
                          : (e(".headerExpand").slideUp(500),
                            e(".headerExpand-two").slideDown(500));
                    }, 600));
                },
                function () {
                  t && (window.clearTimeout(t), (t = null));
                }
              ),
              n.header_submenu_three.hover(
                function () {
                  t ||
                    (t = window.setTimeout(function () {
                      (t = null),
                        e(".headerExpand-three").addClass("hover-activated"),
                        e(".headerExpand-one").hasClass("hover-activated") ||
                        e(".headerExpand-two").hasClass("hover-activated") ||
                        e(".search-overlay").hasClass("hover-activated")
                          ? (e(".headerExpand").slideUp(500),
                            e(".search-overlay").slideUp(500),
                            setTimeout(function () {
                              e(".headerExpand-three").slideDown(500);
                            }, 510))
                          : (e(".headerExpand").slideUp(500),
                            e(".headerExpand-three").slideDown(500));
                    }, 600));
                },
                function () {
                  t && (window.clearTimeout(t), (t = null));
                }
              ),
              e(".headerExpand").on("mouseleave", function (t) {
                e(".headerExpand").slideUp(400),
                  setTimeout(function () {
                    e(".headerExpand").removeClass("hover-activated");
                  }, 600);
              }),
              e(window).width() > 1279
                ? (e("#search-1").hover(
                    function () {
                      t ||
                        (t = window.setTimeout(function () {
                          (t = null),
                            e(".headerExpand").slideUp(500),
                            e("#s-overlay-1").addClass("hover-activated"),
                            e(".headerExpand").hasClass("hover-activated")
                              ? setTimeout(function () {
                                  e("#s-overlay-1").slideDown(500);
                                }, 600)
                              : e("#s-overlay-1").slideDown(500);
                        }));
                    },
                    function () {
                      t && (window.clearTimeout(t), (t = null));
                    }
                  ),
                  e("header.header .all-wrap, .search-overlay").on(
                    "mouseleave",
                    function (t) {
                      e(".search-overlay").slideUp(500);
                    }
                  ),
                  e("#search-2").hover(
                    function () {
                      t ||
                        (t = window.setTimeout(function () {
                          (t = null),
                            e(".headerExpand").slideUp(500),
                            e(".s-overlay-2").addClass("hover-activated"),
                            e(".headerExpand").hasClass("hover-activated")
                              ? setTimeout(function () {
                                  e("#s-overlay-2").slideDown(500);
                                }, 600)
                              : e("#s-overlay-2").slideDown(500);
                        }));
                    },
                    function () {
                      t && (window.clearTimeout(t), (t = null));
                    }
                  ))
                : (e("#search-1").on("click", function (t) {
                    t.preventDefault(),
                      e(this).hasClass("active")
                        ? (e("#s-overlay-1").stop().slideUp(500),
                          e(this).removeClass("active"))
                        : (e("#s-overlay-1").stop().slideDown(500),
                          e(this).addClass("active"));
                  }),
                  e("#search-2").on("click", function (t) {
                    t.preventDefault(),
                      e(this).hasClass("active")
                        ? (e("#s-overlay-2").stop().slideUp(500),
                          e(this).removeClass("active"))
                        : (e("#s-overlay-2").stop().slideDown(500),
                          e(this).addClass("active"));
                  }));
          }),
          s(this, "addActiveClass", function () {
            var t = window.location.href;
            e(".navigation-links ul li a").each(function () {
              this.href === t && e(this).addClass("active");
            });
          }),
          (this.header = e("header")),
          (this.header_submenu = this.header.find(".submenu_sec")),
          (this.header_submenu_one = this.header.find(".submenu-one")),
          (this.header_submenu_two = this.header.find(".submenu-two")),
          (this.header_submenu_three = this.header.find(".submenu-three")),
          e(function () {
            n.domReady();
          });
      });
    }).call(this, n(4));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", function () {
        return c;
      });
      var i = n(2),
        r = n(5);
      function o(e) {
        "@babel/helpers - typeof";
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, l(i.key), i);
        }
      }
      function a(e, t, n) {
        return (
          (t = l(t)) in e
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
      function l(e) {
        var t = (function (e, t) {
          if ("object" !== o(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" !== o(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === o(t) ? t : String(t);
      }
      i.a.registerPlugin(r.a);
      var c = (function (e, t, n) {
        return (
          t && s(e.prototype, t),
          n && s(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      })(function t() {
        var n = this;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          a(this, "bindEvents", function () {
            n.headerAnim.length && n.header_anim();
          }),
          a(this, "header_anim", function () {
            i.a.to(e(".inner-banner .image"), {
              opacity: 1,
              duration: 0.2,
              delay: 0.1,
            }),
              document
                .querySelectorAll(".about-us-page .image-illustration-block")
                .forEach(function (t) {
                  var n = i.a.timeline({
                    scrollTrigger: {
                      trigger: t,
                      scrub: !0,
                      start: "-150% top",
                      end: "+=" + 2 * e(window).height(),
                    },
                  });
                  t.getAttribute("data-delay");
                  n.to(t, { x: "-200px", duration: 2 }, 0);
                }),
              document
                .querySelectorAll(".image-content-block .container .large")
                .forEach(function (t) {
                  var n = i.a.timeline({
                    scrollTrigger: {
                      trigger: t,
                      scrub: !0,
                      start: "-150% top",
                      end: "+=" + 2 * e(window).height(),
                    },
                  });
                  t.getAttribute("data-delay");
                  n.to(t, { y: 0, duration: 2 }, 0);
                }),
              document
                .querySelectorAll(".image-content-block .container .small")
                .forEach(function (t) {
                  var n = i.a.timeline({
                    scrollTrigger: {
                      trigger: t,
                      scrub: !0,
                      start: "-230% top",
                      end: "+=" + 1 * e(window).height(),
                    },
                  });
                  t.getAttribute("data-delay");
                  n.to(t, { y: 0, duration: 1 }, 0);
                }),
              i.a.utils
                .toArray(
                  ".anim-fade-up p,.anim-fade-up h2,.anim-fade-up h1,.anim-fade-up h3,.breadcrumb-wrap,.anim-fade-up ul,.inner-banner .banner-info p,.stories-block .header-block p"
                )
                .forEach(function (e, t) {
                  var n = i.a.fromTo(
                    e,
                    { autoAlpha: 0, y: 40 },
                    {
                      duration: 1,
                      delay: 0.4,
                      autoAlpha: 1,
                      y: 0,
                      ease: "power1",
                    }
                  );
                  r.a.create({
                    trigger: e,
                    animation: n,
                    toggleActions: "play none none none",
                    once: !0,
                  });
                }),
              i.a.utils.toArray(".block-fade-up").forEach(function (e, t) {
                var n = i.a.fromTo(
                  e,
                  { autoAlpha: 0, y: 40 },
                  {
                    duration: 1,
                    delay: 0.4,
                    autoAlpha: 1,
                    y: 0,
                    ease: "power1",
                  }
                );
                r.a.create({
                  trigger: e,
                  animation: n,
                  toggleActions: "play none none none",
                  once: !0,
                });
              }),
              i.a.utils.toArray(".block-fade-down").forEach(function (e, t) {
                var n = i.a.fromTo(
                  e,
                  { autoAlpha: 0, y: -40 },
                  { duration: 1, delay: 0, autoAlpha: 1, y: 0, ease: "power1" }
                );
                r.a.create({
                  trigger: e,
                  animation: n,
                  toggleActions: "play none none none",
                  once: !0,
                  start: "top 95%",
                });
              }),
              i.a.utils.toArray(".section-fade-up").forEach(function (e, t) {
                var n = i.a.fromTo(
                  e,
                  { autoAlpha: 0, y: 40 },
                  {
                    duration: 1,
                    delay: 0.4,
                    autoAlpha: 1,
                    y: 0,
                    ease: "power1",
                  }
                );
                r.a.create({
                  trigger: e,
                  animation: n,
                  toggleActions: "play none none none",
                  once: !0,
                  start: "top 80%",
                });
              }),
              i.a.utils.toArray(".block-slide-left").forEach(function (e, t) {
                var n = i.a.fromTo(
                  e,
                  { autoAlpha: 0, x: 40 },
                  {
                    duration: 1,
                    delay: 0.4,
                    autoAlpha: 1,
                    x: 0,
                    ease: "power1",
                  }
                );
                r.a.create({
                  trigger: e,
                  animation: n,
                  toggleActions: "play none none none",
                  once: !0,
                });
              });
          }),
          (this.headerAnim = e("body")),
          (this.about_page = e(".page-template-about")),
          (this.blogImage = e(".blog-image img")),
          (this.innerDiv = e(".inner-content_container")),
          this.bindEvents();
        var o = e(window),
          s = e(".tab-list-container"),
          l = e(".ir-area"),
          c = s.innerHeight(),
          u = (l.innerHeight(), e("footer").offset().top),
          p = s.offset(),
          d = l.offset(),
          h = e(".each_tab");
        if (
          e(".ir-detail-page .tab-list-container").length ||
          e(".privacy-policy-page .tab-list-container").length
        ) {
          var f = 0;
          o.scroll(function () {
            o.scrollTop() > p.top
              ? s.addClass("fixed")
              : s.removeClass("fixed"),
              o.scrollTop() + c > u &&
                s.css({ top: -(o.scrollTop() + c - u + 150) });
            var t = e(this).scrollTop();
            t > f
              ? (s.removeClass("scrolling-up"), s.addClass("scrolling-down"))
              : (s.removeClass("scrolling-down"), s.addClass("scrolling-up")),
              (f = t),
              h.each(function () {
                var t = e(this).attr("id"),
                  n = e(".tab-list li[data-tab='".concat(t, "']"));
                e(this).offset().top - e(window).height() / 2 <
                  e(window).scrollTop() &&
                e(this).offset().top +
                  e(this).height() -
                  e(window).height() / 2 >
                  e(window).scrollTop()
                  ? n.addClass("active")
                  : n.removeClass("active");
              });
          }),
            e(".tab_js").click(function () {
              var t = e(this).data("tab");
              e("html, body").animate(
                { scrollTop: e("#" + t).offset().top - 100 },
                1e3
              );
            });
        }
        if (e(".ir-detail-page .ir-area").length) {
          var g = 0;
          o.scroll(function () {
            o.scrollTop() > d.top
              ? l.addClass("fixed")
              : l.removeClass("fixed");
            var t = e(this).scrollTop();
            t > g
              ? (l.removeClass("scrolling-up"), l.addClass("scrolling-down"))
              : (l.removeClass("scrolling-down"), l.addClass("scrolling-up")),
              (g = t);
          });
        }
      });
    }).call(this, n(4));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      var i = n(13),
        r = n.n(i);
      t.a = function (t) {
        t.forEach(function (t) {
          var n = document.querySelector(t);
          if (n) {
            var i = r()(n, { preferredCountries: ["ae"] });
            if (!e(t).val()) {
              var o = i.getSelectedCountryData();
              e(t).val("+" + o.dialCode + " ");
            }
            n.addEventListener("countrychange", function () {
              var n = i.getSelectedCountryData();
              e(t).val("+" + n.dialCode + " ");
            });
          }
          e(t).on("keyup", function (n) {
            var i = e(t).val();
            (i = i.replace(/[^\d.-]/g, "")).length > 15 && (i = i.slice(0, 15)),
              e(t).val("+" + i);
          });
        });
      };
    }).call(this, n(4));
  },
  function (e, t, n) {
    (function (e) {
      function t(e) {
        "@babel/helpers - typeof";
        return (t =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var n;
      (n = (function (e, t, n) {
        "use strict";
        return (function () {
          for (
            var n = [
                ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
                ["Albania (Shqipëri)", "al", "355"],
                ["Algeria (‫الجزائر‬‎)", "dz", "213"],
                ["American Samoa", "as", "1684"],
                ["Andorra", "ad", "376"],
                ["Angola", "ao", "244"],
                ["Anguilla", "ai", "1264"],
                ["Antigua and Barbuda", "ag", "1268"],
                ["Argentina", "ar", "54"],
                ["Armenia (Հայաստան)", "am", "374"],
                ["Aruba", "aw", "297"],
                ["Australia", "au", "61", 0],
                ["Austria (Österreich)", "at", "43"],
                ["Azerbaijan (Azərbaycan)", "az", "994"],
                ["Bahamas", "bs", "1242"],
                ["Bahrain (‫البحرين‬‎)", "bh", "973"],
                ["Bangladesh (বাংলাদেশ)", "bd", "880"],
                ["Barbados", "bb", "1246"],
                ["Belarus (Беларусь)", "by", "375"],
                ["Belgium (België)", "be", "32"],
                ["Belize", "bz", "501"],
                ["Benin (Bénin)", "bj", "229"],
                ["Bermuda", "bm", "1441"],
                ["Bhutan (འབྲུག)", "bt", "975"],
                ["Bolivia", "bo", "591"],
                ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
                ["Botswana", "bw", "267"],
                ["Brazil (Brasil)", "br", "55"],
                ["British Indian Ocean Territory", "io", "246"],
                ["British Virgin Islands", "vg", "1284"],
                ["Brunei", "bn", "673"],
                ["Bulgaria (България)", "bg", "359"],
                ["Burkina Faso", "bf", "226"],
                ["Burundi (Uburundi)", "bi", "257"],
                ["Cambodia (កម្ពុជា)", "kh", "855"],
                ["Cameroon (Cameroun)", "cm", "237"],
                [
                  "Canada",
                  "ca",
                  "1",
                  1,
                  [
                    "204",
                    "226",
                    "236",
                    "249",
                    "250",
                    "289",
                    "306",
                    "343",
                    "365",
                    "387",
                    "403",
                    "416",
                    "418",
                    "431",
                    "437",
                    "438",
                    "450",
                    "506",
                    "514",
                    "519",
                    "548",
                    "579",
                    "581",
                    "587",
                    "604",
                    "613",
                    "639",
                    "647",
                    "672",
                    "705",
                    "709",
                    "742",
                    "778",
                    "780",
                    "782",
                    "807",
                    "819",
                    "825",
                    "867",
                    "873",
                    "902",
                    "905",
                  ],
                ],
                ["Cape Verde (Kabu Verdi)", "cv", "238"],
                ["Caribbean Netherlands", "bq", "599", 1],
                ["Cayman Islands", "ky", "1345"],
                [
                  "Central African Republic (République centrafricaine)",
                  "cf",
                  "236",
                ],
                ["Chad (Tchad)", "td", "235"],
                ["Chile", "cl", "56"],
                ["China (中国)", "cn", "86"],
                ["Christmas Island", "cx", "61", 2],
                ["Cocos (Keeling) Islands", "cc", "61", 1],
                ["Colombia", "co", "57"],
                ["Comoros (‫جزر القمر‬‎)", "km", "269"],
                ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
                ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
                ["Cook Islands", "ck", "682"],
                ["Costa Rica", "cr", "506"],
                ["Côte d’Ivoire", "ci", "225"],
                ["Croatia (Hrvatska)", "hr", "385"],
                ["Cuba", "cu", "53"],
                ["Curaçao", "cw", "599", 0],
                ["Cyprus (Κύπρος)", "cy", "357"],
                ["Czech Republic (Česká republika)", "cz", "420"],
                ["Denmark (Danmark)", "dk", "45"],
                ["Djibouti", "dj", "253"],
                ["Dominica", "dm", "1767"],
                [
                  "Dominican Republic (República Dominicana)",
                  "do",
                  "1",
                  2,
                  ["809", "829", "849"],
                ],
                ["Ecuador", "ec", "593"],
                ["Egypt (‫مصر‬‎)", "eg", "20"],
                ["El Salvador", "sv", "503"],
                ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
                ["Eritrea", "er", "291"],
                ["Estonia (Eesti)", "ee", "372"],
                ["Ethiopia", "et", "251"],
                ["Falkland Islands (Islas Malvinas)", "fk", "500"],
                ["Faroe Islands (Føroyar)", "fo", "298"],
                ["Fiji", "fj", "679"],
                ["Finland (Suomi)", "fi", "358", 0],
                ["France", "fr", "33"],
                ["French Guiana (Guyane française)", "gf", "594"],
                ["French Polynesia (Polynésie française)", "pf", "689"],
                ["Gabon", "ga", "241"],
                ["Gambia", "gm", "220"],
                ["Georgia (საქართველო)", "ge", "995"],
                ["Germany (Deutschland)", "de", "49"],
                ["Ghana (Gaana)", "gh", "233"],
                ["Gibraltar", "gi", "350"],
                ["Greece (Ελλάδα)", "gr", "30"],
                ["Greenland (Kalaallit Nunaat)", "gl", "299"],
                ["Grenada", "gd", "1473"],
                ["Guadeloupe", "gp", "590", 0],
                ["Guam", "gu", "1671"],
                ["Guatemala", "gt", "502"],
                ["Guernsey", "gg", "44", 1],
                ["Guinea (Guinée)", "gn", "224"],
                ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
                ["Guyana", "gy", "592"],
                ["Haiti", "ht", "509"],
                ["Honduras", "hn", "504"],
                ["Hong Kong (香港)", "hk", "852"],
                ["Hungary (Magyarország)", "hu", "36"],
                ["Iceland (Ísland)", "is", "354"],
                ["India (भारत)", "in", "91"],
                ["Indonesia", "id", "62"],
                ["Iran (‫ایران‬‎)", "ir", "98"],
                ["Iraq (‫العراق‬‎)", "iq", "964"],
                ["Ireland", "ie", "353"],
                ["Isle of Man", "im", "44", 2],
                ["Israel (‫ישראל‬‎)", "il", "972"],
                ["Italy (Italia)", "it", "39", 0],
                ["Jamaica", "jm", "1", 4, ["876", "658"]],
                ["Japan (日本)", "jp", "81"],
                ["Jersey", "je", "44", 3],
                ["Jordan (‫الأردن‬‎)", "jo", "962"],
                ["Kazakhstan (Казахстан)", "kz", "7", 1],
                ["Kenya", "ke", "254"],
                ["Kiribati", "ki", "686"],
                ["Kosovo", "xk", "383"],
                ["Kuwait (‫الكويت‬‎)", "kw", "965"],
                ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
                ["Laos (ລາວ)", "la", "856"],
                ["Latvia (Latvija)", "lv", "371"],
                ["Lebanon (‫لبنان‬‎)", "lb", "961"],
                ["Lesotho", "ls", "266"],
                ["Liberia", "lr", "231"],
                ["Libya (‫ليبيا‬‎)", "ly", "218"],
                ["Liechtenstein", "li", "423"],
                ["Lithuania (Lietuva)", "lt", "370"],
                ["Luxembourg", "lu", "352"],
                ["Macau (澳門)", "mo", "853"],
                ["Macedonia (FYROM) (Македонија)", "mk", "389"],
                ["Madagascar (Madagasikara)", "mg", "261"],
                ["Malawi", "mw", "265"],
                ["Malaysia", "my", "60"],
                ["Maldives", "mv", "960"],
                ["Mali", "ml", "223"],
                ["Malta", "mt", "356"],
                ["Marshall Islands", "mh", "692"],
                ["Martinique", "mq", "596"],
                ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
                ["Mauritius (Moris)", "mu", "230"],
                ["Mayotte", "yt", "262", 1],
                ["Mexico (México)", "mx", "52"],
                ["Micronesia", "fm", "691"],
                ["Moldova (Republica Moldova)", "md", "373"],
                ["Monaco", "mc", "377"],
                ["Mongolia (Монгол)", "mn", "976"],
                ["Montenegro (Crna Gora)", "me", "382"],
                ["Montserrat", "ms", "1664"],
                ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
                ["Mozambique (Moçambique)", "mz", "258"],
                ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
                ["Namibia (Namibië)", "na", "264"],
                ["Nauru", "nr", "674"],
                ["Nepal (नेपाल)", "np", "977"],
                ["Netherlands (Nederland)", "nl", "31"],
                ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
                ["New Zealand", "nz", "64"],
                ["Nicaragua", "ni", "505"],
                ["Niger (Nijar)", "ne", "227"],
                ["Nigeria", "ng", "234"],
                ["Niue", "nu", "683"],
                ["Norfolk Island", "nf", "672"],
                ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
                ["Northern Mariana Islands", "mp", "1670"],
                ["Norway (Norge)", "no", "47", 0],
                ["Oman (‫عُمان‬‎)", "om", "968"],
                ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
                ["Palau", "pw", "680"],
                ["Palestine (‫فلسطين‬‎)", "ps", "970"],
                ["Panama (Panamá)", "pa", "507"],
                ["Papua New Guinea", "pg", "675"],
                ["Paraguay", "py", "595"],
                ["Peru (Perú)", "pe", "51"],
                ["Philippines", "ph", "63"],
                ["Poland (Polska)", "pl", "48"],
                ["Portugal", "pt", "351"],
                ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
                ["Qatar (‫قطر‬‎)", "qa", "974"],
                ["Réunion (La Réunion)", "re", "262", 0],
                ["Romania (România)", "ro", "40"],
                ["Russia (Россия)", "ru", "7", 0],
                ["Rwanda", "rw", "250"],
                ["Saint Barthélemy", "bl", "590", 1],
                ["Saint Helena", "sh", "290"],
                ["Saint Kitts and Nevis", "kn", "1869"],
                ["Saint Lucia", "lc", "1758"],
                [
                  "Saint Martin (Saint-Martin (partie française))",
                  "mf",
                  "590",
                  2,
                ],
                [
                  "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
                  "pm",
                  "508",
                ],
                ["Saint Vincent and the Grenadines", "vc", "1784"],
                ["Samoa", "ws", "685"],
                ["San Marino", "sm", "378"],
                ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
                ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
                ["Senegal (Sénégal)", "sn", "221"],
                ["Serbia (Србија)", "rs", "381"],
                ["Seychelles", "sc", "248"],
                ["Sierra Leone", "sl", "232"],
                ["Singapore", "sg", "65"],
                ["Sint Maarten", "sx", "1721"],
                ["Slovakia (Slovensko)", "sk", "421"],
                ["Slovenia (Slovenija)", "si", "386"],
                ["Solomon Islands", "sb", "677"],
                ["Somalia (Soomaaliya)", "so", "252"],
                ["South Africa", "za", "27"],
                ["South Korea (대한민국)", "kr", "82"],
                ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
                ["Spain (España)", "es", "34"],
                ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
                ["Sudan (‫السودان‬‎)", "sd", "249"],
                ["Suriname", "sr", "597"],
                ["Svalbard and Jan Mayen", "sj", "47", 1],
                ["Swaziland", "sz", "268"],
                ["Sweden (Sverige)", "se", "46"],
                ["Switzerland (Schweiz)", "ch", "41"],
                ["Syria (‫سوريا‬‎)", "sy", "963"],
                ["Taiwan (台灣)", "tw", "886"],
                ["Tajikistan", "tj", "992"],
                ["Tanzania", "tz", "255"],
                ["Thailand (ไทย)", "th", "66"],
                ["Timor-Leste", "tl", "670"],
                ["Togo", "tg", "228"],
                ["Tokelau", "tk", "690"],
                ["Tonga", "to", "676"],
                ["Trinidad and Tobago", "tt", "1868"],
                ["Tunisia (‫تونس‬‎)", "tn", "216"],
                ["Turkey (Türkiye)", "tr", "90"],
                ["Turkmenistan", "tm", "993"],
                ["Turks and Caicos Islands", "tc", "1649"],
                ["Tuvalu", "tv", "688"],
                ["U.S. Virgin Islands", "vi", "1340"],
                ["Uganda", "ug", "256"],
                ["Ukraine (Україна)", "ua", "380"],
                [
                  "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
                  "ae",
                  "971",
                ],
                ["United Kingdom", "gb", "44", 0],
                ["United States", "us", "1", 0],
                ["Uruguay", "uy", "598"],
                ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
                ["Vanuatu", "vu", "678"],
                ["Vatican City (Città del Vaticano)", "va", "39", 1],
                ["Venezuela", "ve", "58"],
                ["Vietnam (Việt Nam)", "vn", "84"],
                ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
                ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1],
                ["Yemen (‫اليمن‬‎)", "ye", "967"],
                ["Zambia", "zm", "260"],
                ["Zimbabwe", "zw", "263"],
                ["Åland Islands", "ax", "358", 1],
              ],
              i = 0;
            i < n.length;
            i++
          ) {
            var r = n[i];
            n[i] = {
              name: r[0],
              iso2: r[1],
              dialCode: r[2],
              priority: r[3] || 0,
              areaCodes: r[4] || null,
            };
          }
          function o(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          e.intlTelInputGlobals = {
            getInstance: function (t) {
              var n = t.getAttribute("data-intl-tel-input-id");
              return e.intlTelInputGlobals.instances[n];
            },
            instances: {},
          };
          var s = 0,
            a = {
              allowDropdown: !0,
              autoHideDialCode: !0,
              autoPlaceholder: "polite",
              customContainer: "",
              customPlaceholder: null,
              dropdownContainer: null,
              excludeCountries: [],
              formatOnDisplay: !0,
              geoIpLookup: null,
              hiddenInput: "",
              initialCountry: "",
              localizedCountries: null,
              nationalMode: !0,
              onlyCountries: [],
              placeholderNumberType: "MOBILE",
              preferredCountries: ["us", "gb"],
              separateDialCode: !1,
              utilsScript: "",
            },
            l = [
              "800",
              "822",
              "833",
              "844",
              "855",
              "866",
              "877",
              "880",
              "881",
              "882",
              "883",
              "884",
              "885",
              "886",
              "887",
              "888",
              "889",
            ];
          e.addEventListener("load", function () {
            e.intlTelInputGlobals.windowLoaded = !0;
          });
          var c = function (e, t) {
              for (var n = Object.keys(e), i = 0; i < n.length; i++)
                t(n[i], e[n[i]]);
            },
            u = function (t) {
              c(e.intlTelInputGlobals.instances, function (n) {
                e.intlTelInputGlobals.instances[n][t]();
              });
            },
            p = (function () {
              function i(e, t) {
                var n = this;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i),
                  (this.id = s++),
                  (this.telInput = e),
                  (this.activeItem = null),
                  (this.highlightedItem = null);
                var r = t || {};
                (this.options = {}),
                  c(a, function (e, t) {
                    n.options[e] = r.hasOwnProperty(e) ? r[e] : t;
                  }),
                  (this.hadInitialPlaceholder = Boolean(
                    e.getAttribute("placeholder")
                  ));
              }
              return (
                (function (e, t, n) {
                  t && o(e.prototype, t);
                  n && o(e, n);
                })(i, [
                  {
                    key: "_init",
                    value: function () {
                      var e = this;
                      if (
                        (this.options.nationalMode &&
                          (this.options.autoHideDialCode = !1),
                        this.options.separateDialCode &&
                          (this.options.autoHideDialCode =
                            this.options.nationalMode =
                              !1),
                        (this.isMobile =
                          /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                            navigator.userAgent
                          )),
                        this.isMobile &&
                          (t.body.classList.add("iti-mobile"),
                          this.options.dropdownContainer ||
                            (this.options.dropdownContainer = t.body)),
                        "undefined" != typeof Promise)
                      ) {
                        var n = new Promise(function (t, n) {
                            (e.resolveAutoCountryPromise = t),
                              (e.rejectAutoCountryPromise = n);
                          }),
                          i = new Promise(function (t, n) {
                            (e.resolveUtilsScriptPromise = t),
                              (e.rejectUtilsScriptPromise = n);
                          });
                        this.promise = Promise.all([n, i]);
                      }
                      else
                        (this.resolveAutoCountryPromise =
                          this.rejectAutoCountryPromise =
                            function () {}),
                          (this.resolveUtilsScriptPromise =
                            this.rejectUtilsScriptPromise =
                              function () {});
                      (this.selectedCountryData = {}),
                        this._processCountryData(),
                        this._generateMarkup(),
                        this._setInitialState(),
                        this._initListeners(),
                        this._initRequests();
                    },
                  },
                  {
                    key: "_processCountryData",
                    value: function () {
                      this._processAllCountries(),
                        this._processCountryCodes(),
                        this._processPreferredCountries(),
                        this.options.localizedCountries &&
                          this._translateCountriesByLocale(),
                        (this.options.onlyCountries.length ||
                          this.options.localizedCountries) &&
                          this.countries.sort(this._countryNameSort);
                    },
                  },
                  {
                    key: "_addCountryCode",
                    value: function (e, t, n) {
                      this.countryCodes.hasOwnProperty(t) ||
                        (this.countryCodes[t] = []);
                      var i = n || 0;
                      this.countryCodes[t][i] = e;
                    },
                  },
                  {
                    key: "_processAllCountries",
                    value: function () {
                      if (this.options.onlyCountries.length) {
                        var e = this.options.onlyCountries.map(function (e) {
                          return e.toLowerCase();
                        });
                        this.countries = n.filter(function (t) {
                          return e.indexOf(t.iso2) > -1;
                        });
                      }
                      else if (this.options.excludeCountries.length) {
                        var t = this.options.excludeCountries.map(function (e) {
                          return e.toLowerCase();
                        });
                        this.countries = n.filter(function (e) {
                          return -1 === t.indexOf(e.iso2);
                        });
                      }
                      else this.countries = n;
                    },
                  },
                  {
                    key: "_translateCountriesByLocale",
                    value: function () {
                      for (var e = 0; e < this.countries.length; e++) {
                        var t = this.countries[e].iso2.toLowerCase();
                        this.options.localizedCountries.hasOwnProperty(t) &&
                          (this.countries[e].name =
                            this.options.localizedCountries[t]);
                      }
                    },
                  },
                  {
                    key: "_countryNameSort",
                    value: function (e, t) {
                      return e.name.localeCompare(t.name);
                    },
                  },
                  {
                    key: "_processCountryCodes",
                    value: function () {
                      this.countryCodes = {};
                      for (var e = 0; e < this.countries.length; e++) {
                        var t = this.countries[e];
                        if (
                          (this._addCountryCode(t.iso2, t.dialCode, t.priority),
                          t.areaCodes)
                        )
                          for (var n = 0; n < t.areaCodes.length; n++)
                            this._addCountryCode(
                              t.iso2,
                              t.dialCode + t.areaCodes[n]
                            );
                      }
                    },
                  },
                  {
                    key: "_processPreferredCountries",
                    value: function () {
                      this.preferredCountries = [];
                      for (
                        var e = 0;
                        e < this.options.preferredCountries.length;
                        e++
                      ) {
                        var t =
                            this.options.preferredCountries[e].toLowerCase(),
                          n = this._getCountryData(t, !1, !0);
                        n && this.preferredCountries.push(n);
                      }
                    },
                  },
                  {
                    key: "_createEl",
                    value: function (e, n, i) {
                      var r = t.createElement(e);
                      return (
                        n &&
                          c(n, function (e, t) {
                            return r.setAttribute(e, t);
                          }),
                        i && i.appendChild(r),
                        r
                      );
                    },
                  },
                  {
                    key: "_generateMarkup",
                    value: function () {
                      this.telInput.setAttribute("autocomplete", "off");
                      var e = "intl-tel-input";
                      this.options.allowDropdown && (e += " allow-dropdown"),
                        this.options.separateDialCode &&
                          (e += " separate-dial-code"),
                        this.options.customContainer &&
                          ((e += " "), (e += this.options.customContainer));
                      var t = this._createEl("div", { class: e });
                      if (
                        (this.telInput.parentNode.insertBefore(
                          t,
                          this.telInput
                        ),
                        (this.flagsContainer = this._createEl(
                          "div",
                          { class: "flag-container" },
                          t
                        )),
                        t.appendChild(this.telInput),
                        (this.selectedFlag = this._createEl(
                          "div",
                          {
                            class: "selected-flag",
                            role: "combobox",
                            "aria-owns": "country-listbox",
                          },
                          this.flagsContainer
                        )),
                        (this.selectedFlagInner = this._createEl(
                          "div",
                          { class: "iti-flag" },
                          this.selectedFlag
                        )),
                        this.options.separateDialCode &&
                          (this.selectedDialCode = this._createEl(
                            "div",
                            { class: "selected-dial-code" },
                            this.selectedFlag
                          )),
                        this.options.allowDropdown &&
                          (this.selectedFlag.setAttribute("tabindex", "0"),
                          (this.dropdownArrow = this._createEl(
                            "div",
                            { class: "iti-arrow" },
                            this.selectedFlag
                          )),
                          (this.countryList = this._createEl("ul", {
                            class: "country-list hide",
                            id: "country-listbox",
                            "aria-expanded": "false",
                            role: "listbox",
                          })),
                          this.preferredCountries.length &&
                            (this._appendListItems(
                              this.preferredCountries,
                              "preferred"
                            ),
                            this._createEl(
                              "li",
                              {
                                class: "divider",
                                role: "separator",
                                "aria-disabled": "true",
                              },
                              this.countryList
                            )),
                          this._appendListItems(this.countries, "standard"),
                          this.options.dropdownContainer
                            ? ((this.dropdown = this._createEl("div", {
                                class: "intl-tel-input iti-container",
                              })),
                              this.dropdown.appendChild(this.countryList))
                            : this.flagsContainer.appendChild(
                                this.countryList
                              )),
                        this.options.hiddenInput)
                      ) {
                        var n = this.options.hiddenInput,
                          i = this.telInput.getAttribute("name");
                        if (i) {
                          var r = i.lastIndexOf("[");
                          -1 !== r &&
                            (n = "".concat(i.substr(0, r), "[").concat(n, "]"));
                        }
                        (this.hiddenInput = this._createEl("input", {
                          type: "hidden",
                          name: n,
                        })),
                          t.appendChild(this.hiddenInput);
                      }
                    },
                  },
                  {
                    key: "_appendListItems",
                    value: function (e, t) {
                      for (var n = "", i = 0; i < e.length; i++) {
                        var r = e[i];
                        (n += "<li class='country "
                          .concat(t, "' id='iti-item-")
                          .concat(r.iso2, "' role='option' data-dial-code='")
                          .concat(r.dialCode, "' data-country-code='")
                          .concat(r.iso2, "'>")),
                          (n +=
                            "<div class='flag-box'><div class='iti-flag ".concat(
                              r.iso2,
                              "'></div></div>"
                            )),
                          (n += "<span class='country-name'>".concat(
                            r.name,
                            "</span>"
                          )),
                          (n += "<span class='dial-code'>+".concat(
                            r.dialCode,
                            "</span>"
                          )),
                          (n += "</li>");
                      }
                      this.countryList.insertAdjacentHTML("beforeend", n);
                    },
                  },
                  {
                    key: "_setInitialState",
                    value: function () {
                      var e = this.telInput.value,
                        t = this._getDialCode(e),
                        n = this._isRegionlessNanp(e),
                        i = this.options,
                        r = i.initialCountry,
                        o = i.nationalMode,
                        s = i.autoHideDialCode,
                        a = i.separateDialCode;
                      t && !n
                        ? this._updateFlagFromNumber(e)
                        : "auto" !== r &&
                          (r
                            ? this._setFlag(r.toLowerCase())
                            : t && n
                            ? this._setFlag("us")
                            : ((this.defaultCountry = this.preferredCountries
                                .length
                                ? this.preferredCountries[0].iso2
                                : this.countries[0].iso2),
                              e || this._setFlag(this.defaultCountry)),
                          e ||
                            o ||
                            s ||
                            a ||
                            (this.telInput.value = "+".concat(
                              this.selectedCountryData.dialCode
                            ))),
                        e && this._updateValFromNumber(e);
                    },
                  },
                  {
                    key: "_initListeners",
                    value: function () {
                      this._initKeyListeners(),
                        this.options.autoHideDialCode &&
                          this._initBlurListeners(),
                        this.options.allowDropdown &&
                          this._initDropdownListeners(),
                        this.hiddenInput && this._initHiddenInputListener();
                    },
                  },
                  {
                    key: "_initHiddenInputListener",
                    value: function () {
                      var e = this;
                      (this._handleHiddenInputSubmit = function () {
                        e.hiddenInput.value = e.getNumber();
                      }),
                        this.telInput.form &&
                          this.telInput.form.addEventListener(
                            "submit",
                            this._handleHiddenInputSubmit
                          );
                    },
                  },
                  {
                    key: "_getClosestLabel",
                    value: function () {
                      for (var e = this.telInput; e && "LABEL" !== e.tagName; )
                        e = e.parentNode;
                      return e;
                    },
                  },
                  {
                    key: "_initDropdownListeners",
                    value: function () {
                      var e = this;
                      this._handleLabelClick = function (t) {
                        e.countryList.classList.contains("hide")
                          ? e.telInput.focus()
                          : t.preventDefault();
                      };
                      var t = this._getClosestLabel();
                      t && t.addEventListener("click", this._handleLabelClick),
                        (this._handleClickSelectedFlag = function () {
                          !e.countryList.classList.contains("hide") ||
                            e.telInput.disabled ||
                            e.telInput.readOnly ||
                            e._showDropdown();
                        }),
                        this.selectedFlag.addEventListener(
                          "click",
                          this._handleClickSelectedFlag
                        ),
                        (this._handleFlagsContainerKeydown = function (t) {
                          var n = e.countryList.classList.contains("hide");
                          n &&
                            -1 !==
                              ["ArrowUp", "ArrowDown", " ", "Enter"].indexOf(
                                t.key
                              ) &&
                            (t.preventDefault(),
                            t.stopPropagation(),
                            e._showDropdown()),
                            "Tab" === t.key && e._closeDropdown();
                        }),
                        this.flagsContainer.addEventListener(
                          "keydown",
                          this._handleFlagsContainerKeydown
                        );
                    },
                  },
                  {
                    key: "_initRequests",
                    value: function () {
                      var t = this;
                      this.options.utilsScript && !e.intlTelInputUtils
                        ? e.intlTelInputGlobals.windowLoaded
                          ? e.intlTelInputGlobals.loadUtils(
                              this.options.utilsScript
                            )
                          : e.addEventListener("load", function () {
                              e.intlTelInputGlobals.loadUtils(
                                t.options.utilsScript
                              );
                            })
                        : this.resolveUtilsScriptPromise(),
                        "auto" === this.options.initialCountry
                          ? this._loadAutoCountry()
                          : this.resolveAutoCountryPromise();
                    },
                  },
                  {
                    key: "_loadAutoCountry",
                    value: function () {
                      e.intlTelInputGlobals.autoCountry
                        ? this.handleAutoCountry()
                        : e.intlTelInputGlobals.startedLoadingAutoCountry ||
                          ((e.intlTelInputGlobals.startedLoadingAutoCountry =
                            !0),
                          "function" == typeof this.options.geoIpLookup &&
                            this.options.geoIpLookup(
                              function (t) {
                                (e.intlTelInputGlobals.autoCountry =
                                  t.toLowerCase()),
                                  setTimeout(function () {
                                    return u("handleAutoCountry");
                                  });
                              },
                              function () {
                                return u("rejectAutoCountryPromise");
                              }
                            ));
                    },
                  },
                  {
                    key: "_initKeyListeners",
                    value: function () {
                      var e = this;
                      (this._handleKeyupEvent = function () {
                        e._updateFlagFromNumber(e.telInput.value) &&
                          e._triggerCountryChange();
                      }),
                        this.telInput.addEventListener(
                          "keyup",
                          this._handleKeyupEvent
                        ),
                        (this._handleClipboardEvent = function () {
                          setTimeout(e._handleKeyupEvent);
                        }),
                        this.telInput.addEventListener(
                          "cut",
                          this._handleClipboardEvent
                        ),
                        this.telInput.addEventListener(
                          "paste",
                          this._handleClipboardEvent
                        );
                    },
                  },
                  {
                    key: "_cap",
                    value: function (e) {
                      var t = this.telInput.getAttribute("maxlength");
                      return t && e.length > t ? e.substr(0, t) : e;
                    },
                  },
                  {
                    key: "_initBlurListeners",
                    value: function () {
                      var e = this;
                      (this._handleSubmitOrBlurEvent = function () {
                        e._removeEmptyDialCode();
                      }),
                        this.telInput.form &&
                          this.telInput.form.addEventListener(
                            "submit",
                            this._handleSubmitOrBlurEvent
                          ),
                        this.telInput.addEventListener(
                          "blur",
                          this._handleSubmitOrBlurEvent
                        );
                    },
                  },
                  {
                    key: "_removeEmptyDialCode",
                    value: function () {
                      if ("+" === this.telInput.value.charAt(0)) {
                        var e = this._getNumeric(this.telInput.value);
                        (e && this.selectedCountryData.dialCode !== e) ||
                          (this.telInput.value = "");
                      }
                    },
                  },
                  {
                    key: "_getNumeric",
                    value: function (e) {
                      return e.replace(/\D/g, "");
                    },
                  },
                  {
                    key: "_trigger",
                    value: function (e) {
                      var n = t.createEvent("Event");
                      n.initEvent(e, !0, !0), this.telInput.dispatchEvent(n);
                    },
                  },
                  {
                    key: "_showDropdown",
                    value: function () {
                      this.countryList.classList.remove("hide"),
                        this.countryList.setAttribute("aria-expanded", "true"),
                        this._setDropdownPosition(),
                        this.activeItem &&
                          (this._highlightListItem(this.activeItem),
                          this._scrollTo(this.activeItem)),
                        this._bindDropdownListeners(),
                        this.dropdownArrow.classList.add("up"),
                        this._trigger("open:countrydropdown");
                    },
                  },
                  {
                    key: "_toggleClass",
                    value: function (e, t, n) {
                      n && !e.classList.contains(t)
                        ? e.classList.add(t)
                        : !n &&
                          e.classList.contains(t) &&
                          e.classList.remove(t);
                    },
                  },
                  {
                    key: "_setDropdownPosition",
                    value: function () {
                      var n = this;
                      if (
                        (this.options.dropdownContainer &&
                          this.options.dropdownContainer.appendChild(
                            this.dropdown
                          ),
                        !this.isMobile)
                      ) {
                        var i = this.telInput.getBoundingClientRect(),
                          r = e.pageYOffset || t.documentElement.scrollTop,
                          o = i.top + r,
                          s = this.countryList.offsetHeight,
                          a =
                            o + this.telInput.offsetHeight + s <
                            r + e.innerHeight,
                          l = o - s > r;
                        if (
                          (this._toggleClass(
                            this.countryList,
                            "dropup",
                            !a && l
                          ),
                          this.options.dropdownContainer)
                        ) {
                          var c = !a && l ? 0 : this.telInput.offsetHeight;
                          (this.dropdown.style.top = "".concat(o + c, "px")),
                            (this.dropdown.style.left = "".concat(
                              i.left + t.body.scrollLeft,
                              "px"
                            )),
                            (this._handleWindowScroll = function () {
                              return n._closeDropdown();
                            }),
                            e.addEventListener(
                              "scroll",
                              this._handleWindowScroll
                            );
                        }
                      }
                    },
                  },
                  {
                    key: "_getClosestListItem",
                    value: function (e) {
                      for (
                        var t = e;
                        t &&
                        t !== this.countryList &&
                        !t.classList.contains("country");

                      )
                        t = t.parentNode;
                      return t === this.countryList ? null : t;
                    },
                  },
                  {
                    key: "_bindDropdownListeners",
                    value: function () {
                      var e = this;
                      (this._handleMouseoverCountryList = function (t) {
                        var n = e._getClosestListItem(t.target);
                        n && e._highlightListItem(n);
                      }),
                        this.countryList.addEventListener(
                          "mouseover",
                          this._handleMouseoverCountryList
                        ),
                        (this._handleClickCountryList = function (t) {
                          var n = e._getClosestListItem(t.target);
                          n && e._selectListItem(n);
                        }),
                        this.countryList.addEventListener(
                          "click",
                          this._handleClickCountryList
                        );
                      var n = !0;
                      (this._handleClickOffToClose = function () {
                        n || e._closeDropdown(), (n = !1);
                      }),
                        t.documentElement.addEventListener(
                          "click",
                          this._handleClickOffToClose
                        );
                      var i = "",
                        r = null;
                      (this._handleKeydownOnDropdown = function (t) {
                        t.preventDefault(),
                          "ArrowUp" === t.key || "ArrowDown" === t.key
                            ? e._handleUpDownKey(t.key)
                            : "Enter" === t.key
                            ? e._handleEnterKey()
                            : "Escape" === t.key
                            ? e._closeDropdown()
                            : /^[a-zA-ZÀ-ÿ ]$/.test(t.key) &&
                              (r && clearTimeout(r),
                              (i += t.key.toLowerCase()),
                              e._searchForCountry(i),
                              (r = setTimeout(function () {
                                i = "";
                              }, 1e3)));
                      }),
                        t.addEventListener(
                          "keydown",
                          this._handleKeydownOnDropdown
                        );
                    },
                  },
                  {
                    key: "_handleUpDownKey",
                    value: function (e) {
                      var t =
                        "ArrowUp" === e
                          ? this.highlightedItem.previousElementSibling
                          : this.highlightedItem.nextElementSibling;
                      t &&
                        (t.classList.contains("divider") &&
                          (t =
                            "ArrowUp" === e
                              ? t.previousElementSibling
                              : t.nextElementSibling),
                        this._highlightListItem(t),
                        this._scrollTo(t));
                    },
                  },
                  {
                    key: "_handleEnterKey",
                    value: function () {
                      this.highlightedItem &&
                        this._selectListItem(this.highlightedItem);
                    },
                  },
                  {
                    key: "_searchForCountry",
                    value: function (e) {
                      for (var t = 0; t < this.countries.length; t++)
                        if (this._startsWith(this.countries[t].name, e)) {
                          var n = this.countryList.querySelector(
                            "#iti-item-".concat(this.countries[t].iso2)
                          );
                          this._highlightListItem(n), this._scrollTo(n, !0);
                          break;
                        }
                    },
                  },
                  {
                    key: "_startsWith",
                    value: function (e, t) {
                      return e.substr(0, t.length).toLowerCase() === t;
                    },
                  },
                  {
                    key: "_updateValFromNumber",
                    value: function (t) {
                      var n = t;
                      if (
                        this.options.formatOnDisplay &&
                        e.intlTelInputUtils &&
                        this.selectedCountryData
                      ) {
                        var i =
                            !this.options.separateDialCode &&
                            (this.options.nationalMode || "+" !== n.charAt(0)),
                          r = intlTelInputUtils.numberFormat,
                          o = r.NATIONAL,
                          s = r.INTERNATIONAL,
                          a = i ? o : s;
                        n = intlTelInputUtils.formatNumber(
                          n,
                          this.selectedCountryData.iso2,
                          a
                        );
                      }
                      (n = this._beforeSetNumber(n)), (this.telInput.value = n);
                    },
                  },
                  {
                    key: "_updateFlagFromNumber",
                    value: function (e) {
                      var t = e,
                        n = "1" === this.selectedCountryData.dialCode;
                      t &&
                        this.options.nationalMode &&
                        n &&
                        "+" !== t.charAt(0) &&
                        ("1" !== t.charAt(0) && (t = "1".concat(t)),
                        (t = "+".concat(t)));
                      var i = this._getDialCode(t),
                        r = this._getNumeric(t),
                        o = null;
                      if (i) {
                        var s = this.countryCodes[this._getNumeric(i)],
                          a = -1 !== s.indexOf(this.selectedCountryData.iso2),
                          l = "+1" === i && r.length >= 4,
                          c =
                            "1" === this.selectedCountryData.dialCode &&
                            this._isRegionlessNanp(r);
                        if (!c && (!a || l))
                          for (var u = 0; u < s.length; u++)
                            if (s[u]) {
                              o = s[u];
                              break;
                            }
                      }
                      else
                        "+" === t.charAt(0) && r.length
                          ? (o = "")
                          : (t && "+" !== t) || (o = this.defaultCountry);
                      return null !== o && this._setFlag(o);
                    },
                  },
                  {
                    key: "_isRegionlessNanp",
                    value: function (e) {
                      var t = this._getNumeric(e);
                      if ("1" === t.charAt(0)) {
                        var n = t.substr(1, 3);
                        return -1 !== l.indexOf(n);
                      }
                      return !1;
                    },
                  },
                  {
                    key: "_highlightListItem",
                    value: function (e) {
                      var t = this.highlightedItem;
                      t && t.classList.remove("highlight"),
                        (this.highlightedItem = e),
                        this.highlightedItem.classList.add("highlight");
                    },
                  },
                  {
                    key: "_getCountryData",
                    value: function (e, t, i) {
                      for (
                        var r = t ? n : this.countries, o = 0;
                        o < r.length;
                        o++
                      )
                        if (r[o].iso2 === e) return r[o];
                      if (i) return null;
                      throw new Error("No country data for '".concat(e, "'"));
                    },
                  },
                  {
                    key: "_setFlag",
                    value: function (e) {
                      var t = this.selectedCountryData.iso2
                        ? this.selectedCountryData
                        : {};
                      (this.selectedCountryData = e
                        ? this._getCountryData(e, !1, !1)
                        : {}),
                        this.selectedCountryData.iso2 &&
                          (this.defaultCountry = this.selectedCountryData.iso2),
                        this.selectedFlagInner.setAttribute(
                          "class",
                          "iti-flag ".concat(e)
                        );
                      var n = e
                        ? ""
                            .concat(this.selectedCountryData.name, ": +")
                            .concat(this.selectedCountryData.dialCode)
                        : "Unknown";
                      if (
                        (this.selectedFlag.setAttribute("title", n),
                        this.options.separateDialCode)
                      ) {
                        var i = this.selectedCountryData.dialCode
                          ? "+".concat(this.selectedCountryData.dialCode)
                          : "";
                        (this.selectedDialCode.innerHTML = i),
                          (this.telInput.style.paddingLeft = "".concat(
                            this.selectedFlag.offsetWidth + 6,
                            "px"
                          ));
                      }
                      if (
                        (this._updatePlaceholder(), this.options.allowDropdown)
                      ) {
                        var r = this.activeItem;
                        if (
                          (r &&
                            (r.classList.remove("active"),
                            r.setAttribute("aria-selected", "false")),
                          e)
                        ) {
                          var o = this.countryList.querySelector(
                            "#iti-item-".concat(e)
                          );
                          o.setAttribute("aria-selected", "true"),
                            o.classList.add("active"),
                            (this.activeItem = o),
                            this.countryList.setAttribute(
                              "aria-activedescendant",
                              o.getAttribute("id")
                            );
                        }
                      }
                      return t.iso2 !== e;
                    },
                  },
                  {
                    key: "_updatePlaceholder",
                    value: function () {
                      var t =
                        "aggressive" === this.options.autoPlaceholder ||
                        (!this.hadInitialPlaceholder &&
                          "polite" === this.options.autoPlaceholder);
                      if (e.intlTelInputUtils && t) {
                        var n =
                            intlTelInputUtils.numberType[
                              this.options.placeholderNumberType
                            ],
                          i = this.selectedCountryData.iso2
                            ? intlTelInputUtils.getExampleNumber(
                                this.selectedCountryData.iso2,
                                this.options.nationalMode,
                                n
                              )
                            : "";
                        (i = this._beforeSetNumber(i)),
                          "function" == typeof this.options.customPlaceholder &&
                            (i = this.options.customPlaceholder(
                              i,
                              this.selectedCountryData
                            )),
                          this.telInput.setAttribute("placeholder", i);
                      }
                    },
                  },
                  {
                    key: "_selectListItem",
                    value: function (e) {
                      var t = this._setFlag(
                        e.getAttribute("data-country-code")
                      );
                      this._closeDropdown(),
                        this._updateDialCode(
                          e.getAttribute("data-dial-code"),
                          !0
                        ),
                        this.telInput.focus();
                      var n = this.telInput.value.length;
                      this.telInput.setSelectionRange(n, n),
                        t && this._triggerCountryChange();
                    },
                  },
                  {
                    key: "_closeDropdown",
                    value: function () {
                      this.countryList.classList.add("hide"),
                        this.countryList.setAttribute("aria-expanded", "false"),
                        this.dropdownArrow.classList.remove("up"),
                        t.removeEventListener(
                          "keydown",
                          this._handleKeydownOnDropdown
                        ),
                        t.documentElement.removeEventListener(
                          "click",
                          this._handleClickOffToClose
                        ),
                        this.countryList.removeEventListener(
                          "mouseover",
                          this._handleMouseoverCountryList
                        ),
                        this.countryList.removeEventListener(
                          "click",
                          this._handleClickCountryList
                        ),
                        this.options.dropdownContainer &&
                          (this.isMobile ||
                            e.removeEventListener(
                              "scroll",
                              this._handleWindowScroll
                            ),
                          this.dropdown.parentNode &&
                            this.dropdown.parentNode.removeChild(
                              this.dropdown
                            )),
                        this._trigger("close:countrydropdown");
                    },
                  },
                  {
                    key: "_scrollTo",
                    value: function (n, i) {
                      var r = this.countryList,
                        o = e.pageYOffset || t.documentElement.scrollTop,
                        s = r.offsetHeight,
                        a = r.getBoundingClientRect().top + o,
                        l = a + s,
                        c = n.offsetHeight,
                        u = n.getBoundingClientRect().top + o,
                        p = u + c,
                        d = u - a + r.scrollTop,
                        h = s / 2 - c / 2;
                      if (u < a) i && (d -= h), (r.scrollTop = d);
                      else if (p > l) {
                        i && (d += h);
                        var f = s - c;
                        r.scrollTop = d - f;
                      }
                    },
                  },
                  {
                    key: "_updateDialCode",
                    value: function (e, t) {
                      var n,
                        i = this.telInput.value,
                        r = "+".concat(e);
                      if ("+" === i.charAt(0)) {
                        var o = this._getDialCode(i);
                        n = o ? i.replace(o, r) : r;
                      }
                      else {
                        if (
                          this.options.nationalMode ||
                          this.options.separateDialCode
                        )
                          return;
                        if (i) n = r + i;
                        else {
                          if (!t && this.options.autoHideDialCode) return;
                          n = r;
                        }
                      }
                      this.telInput.value = n;
                    },
                  },
                  {
                    key: "_getDialCode",
                    value: function (e) {
                      var t = "";
                      if ("+" === e.charAt(0))
                        for (var n = "", i = 0; i < e.length; i++) {
                          var r = e.charAt(i);
                          if (
                            !isNaN(parseInt(r, 10)) &&
                            ((n += r),
                            this.countryCodes[n] && (t = e.substr(0, i + 1)),
                            4 === n.length)
                          )
                            break;
                        }
                      return t;
                    },
                  },
                  {
                    key: "_getFullNumber",
                    value: function () {
                      var e = this.telInput.value.trim(),
                        t = this.selectedCountryData.dialCode,
                        n = this._getNumeric(e),
                        i = "1" === n.charAt(0) ? n : "1".concat(n);
                      return (
                        (this.options.separateDialCode && "+" !== e.charAt(0)
                          ? "+".concat(t)
                          : e &&
                            "+" !== e.charAt(0) &&
                            "1" !== e.charAt(0) &&
                            t &&
                            "1" === t.charAt(0) &&
                            4 === t.length &&
                            t !== i.substr(0, 4)
                          ? t.substr(1)
                          : "") + e
                      );
                    },
                  },
                  {
                    key: "_beforeSetNumber",
                    value: function (e) {
                      var t = e;
                      if (this.options.separateDialCode) {
                        var n = this._getDialCode(t);
                        if (n) {
                          null !== this.selectedCountryData.areaCodes &&
                            (n = "+".concat(this.selectedCountryData.dialCode));
                          var i =
                            " " === t[n.length] || "-" === t[n.length]
                              ? n.length + 1
                              : n.length;
                          t = t.substr(i);
                        }
                      }
                      return this._cap(t);
                    },
                  },
                  {
                    key: "_triggerCountryChange",
                    value: function () {
                      this._trigger("countrychange");
                    },
                  },
                  {
                    key: "handleAutoCountry",
                    value: function () {
                      "auto" === this.options.initialCountry &&
                        ((this.defaultCountry =
                          e.intlTelInputGlobals.autoCountry),
                        this.telInput.value ||
                          this.setCountry(this.defaultCountry),
                        this.resolveAutoCountryPromise());
                    },
                  },
                  {
                    key: "handleUtils",
                    value: function () {
                      e.intlTelInputUtils &&
                        (this.telInput.value &&
                          this._updateValFromNumber(this.telInput.value),
                        this._updatePlaceholder()),
                        this.resolveUtilsScriptPromise();
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      var t = this.telInput.form;
                      if (this.options.allowDropdown) {
                        this._closeDropdown(),
                          this.selectedFlag.removeEventListener(
                            "click",
                            this._handleClickSelectedFlag
                          ),
                          this.flagsContainer.removeEventListener(
                            "keydown",
                            this._handleFlagsContainerKeydown
                          );
                        var n = this._getClosestLabel();
                        n &&
                          n.removeEventListener(
                            "click",
                            this._handleLabelClick
                          );
                      }
                      this.hiddenInput &&
                        t &&
                        t.removeEventListener(
                          "submit",
                          this._handleHiddenInputSubmit
                        ),
                        this.options.autoHideDialCode &&
                          (t &&
                            t.removeEventListener(
                              "submit",
                              this._handleSubmitOrBlurEvent
                            ),
                          this.telInput.removeEventListener(
                            "blur",
                            this._handleSubmitOrBlurEvent
                          )),
                        this.telInput.removeEventListener(
                          "keyup",
                          this._handleKeyupEvent
                        ),
                        this.telInput.removeEventListener(
                          "cut",
                          this._handleClipboardEvent
                        ),
                        this.telInput.removeEventListener(
                          "paste",
                          this._handleClipboardEvent
                        ),
                        this.telInput.removeAttribute("data-intl-tel-input-id");
                      var i = this.telInput.parentNode;
                      i.parentNode.insertBefore(this.telInput, i),
                        i.parentNode.removeChild(i),
                        delete e.intlTelInputGlobals.instances[this.id];
                    },
                  },
                  {
                    key: "getExtension",
                    value: function () {
                      return e.intlTelInputUtils
                        ? intlTelInputUtils.getExtension(
                            this._getFullNumber(),
                            this.selectedCountryData.iso2
                          )
                        : "";
                    },
                  },
                  {
                    key: "getNumber",
                    value: function (t) {
                      if (e.intlTelInputUtils) {
                        var n = this.selectedCountryData.iso2;
                        return intlTelInputUtils.formatNumber(
                          this._getFullNumber(),
                          n,
                          t
                        );
                      }
                      return "";
                    },
                  },
                  {
                    key: "getNumberType",
                    value: function () {
                      return e.intlTelInputUtils
                        ? intlTelInputUtils.getNumberType(
                            this._getFullNumber(),
                            this.selectedCountryData.iso2
                          )
                        : -99;
                    },
                  },
                  {
                    key: "getSelectedCountryData",
                    value: function () {
                      return this.selectedCountryData;
                    },
                  },
                  {
                    key: "getValidationError",
                    value: function () {
                      if (e.intlTelInputUtils) {
                        var t = this.selectedCountryData.iso2;
                        return intlTelInputUtils.getValidationError(
                          this._getFullNumber(),
                          t
                        );
                      }
                      return -99;
                    },
                  },
                  {
                    key: "isValidNumber",
                    value: function () {
                      var t = this._getFullNumber().trim(),
                        n = this.options.nationalMode
                          ? this.selectedCountryData.iso2
                          : "";
                      return e.intlTelInputUtils
                        ? intlTelInputUtils.isValidNumber(t, n)
                        : null;
                    },
                  },
                  {
                    key: "setCountry",
                    value: function (e) {
                      var t = e.toLowerCase();
                      this.selectedFlagInner.classList.contains(t) ||
                        (this._setFlag(t),
                        this._updateDialCode(
                          this.selectedCountryData.dialCode,
                          !1
                        ),
                        this._triggerCountryChange());
                    },
                  },
                  {
                    key: "setNumber",
                    value: function (e) {
                      var t = this._updateFlagFromNumber(e);
                      this._updateValFromNumber(e),
                        t && this._triggerCountryChange();
                    },
                  },
                  {
                    key: "setPlaceholderNumberType",
                    value: function (e) {
                      (this.options.placeholderNumberType = e),
                        this._updatePlaceholder();
                    },
                  },
                ]),
                i
              );
            })();
          e.intlTelInputGlobals.getCountryData = function () {
            return n;
          };
          var d = function (e, n, i) {
            var r = t.createElement("script");
            (r.onload = function () {
              u("handleUtils"), n && n();
            }),
              (r.onerror = function () {
                u("rejectUtilsScriptPromise"), i && i();
              }),
              (r.className = "iti-load-utils"),
              (r.async = !0),
              (r.src = e),
              t.body.appendChild(r);
          };
          return (
            (e.intlTelInputGlobals.loadUtils = function (t) {
              if (
                !e.intlTelInputUtils &&
                !e.intlTelInputGlobals.startedLoadingUtilsScript
              ) {
                if (
                  ((e.intlTelInputGlobals.startedLoadingUtilsScript = !0),
                  "undefined" != typeof Promise)
                )
                  return new Promise(function (e, n) {
                    return d(t, e, n);
                  });
                d(t);
              }
              return null;
            }),
            (e.intlTelInputGlobals.defaults = a),
            (e.intlTelInputGlobals.version = "15.0.1"),
            function (t, n) {
              var i = new p(t, n);
              return (
                i._init(),
                t.setAttribute("data-intl-tel-input-id", i.id),
                (e.intlTelInputGlobals.instances[i.id] = i),
                i
              );
            }
          );
        })();
      })(window, document)),
        "object" === t(e) && e.exports
          ? (e.exports = n)
          : (window.intlTelInput = n);
    }).call(this, n(23)(e));
  },
  function (e, t, n) {
    (function (i) {
      var r, o, s;
      (o = [n(4)]),
        void 0 ===
          (s =
            "function" ==
            typeof (r = function (e) {
              var t = (function () {
                  if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
                    var t = e.fn.select2.amd;
                  var n, r, o;
                  return (
                    (t && t.requirejs) ||
                      (t ? (r = t) : (t = {}),
                      (function (e) {
                        var t,
                          i,
                          s,
                          a,
                          l = {},
                          c = {},
                          u = {},
                          p = {},
                          d = Object.prototype.hasOwnProperty,
                          h = [].slice,
                          f = /\.js$/;
                        function g(e, t) {
                          return d.call(e, t);
                        }
                        function m(e, t) {
                          var n,
                            i,
                            r,
                            o,
                            s,
                            a,
                            l,
                            c,
                            p,
                            d,
                            h,
                            g,
                            m = t && t.split("/"),
                            v = u.map,
                            y = (v && v["*"]) || {};
                          if (e) {
                            for (
                              e = e.split("/"),
                                s = e.length - 1,
                                u.nodeIdCompat &&
                                  f.test(e[s]) &&
                                  (e[s] = e[s].replace(f, "")),
                                "." === e[0].charAt(0) &&
                                  m &&
                                  ((g = m.slice(0, m.length - 1)),
                                  (e = g.concat(e))),
                                p = 0;
                              p < e.length;
                              p++
                            )
                              if ("." === (h = e[p])) e.splice(p, 1), (p -= 1);
                              else if (".." === h) {
                                if (
                                  0 === p ||
                                  (1 === p && ".." === e[2]) ||
                                  ".." === e[p - 1]
                                )
                                  continue;
                                p > 0 && (e.splice(p - 1, 2), (p -= 2));
                              }
                            e = e.join("/");
                          }
                          if ((m || y) && v) {
                            for (
                              n = e.split("/"), p = n.length;
                              p > 0;
                              p -= 1
                            ) {
                              if (((i = n.slice(0, p).join("/")), m))
                                for (d = m.length; d > 0; d -= 1)
                                  if (
                                    (r = v[m.slice(0, d).join("/")]) &&
                                    (r = r[i])
                                  ) {
                                    (o = r), (a = p);
                                    break;
                                  }
                              if (o) break;
                              !l && y && y[i] && ((l = y[i]), (c = p));
                            }
                            !o && l && ((o = l), (a = c)),
                              o && (n.splice(0, a, o), (e = n.join("/")));
                          }
                          return e;
                        }
                        function v(t, n) {
                          return function () {
                            var r = h.call(arguments, 0);
                            return (
                              "string" != typeof r[0] &&
                                1 === r.length &&
                                r.push(null),
                              i.apply(e, r.concat([t, n]))
                            );
                          };
                        }
                        function y(e) {
                          return function (t) {
                            l[e] = t;
                          };
                        }
                        function b(n) {
                          if (g(c, n)) {
                            var i = c[n];
                            delete c[n], (p[n] = !0), t.apply(e, i);
                          }
                          if (!g(l, n) && !g(p, n)) throw new Error("No " + n);
                          return l[n];
                        }
                        function w(e) {
                          var t,
                            n = e ? e.indexOf("!") : -1;
                          return (
                            n > -1 &&
                              ((t = e.substring(0, n)),
                              (e = e.substring(n + 1, e.length))),
                            [t, e]
                          );
                        }
                        function x(e) {
                          return e ? w(e) : [];
                        }
                        (s = function (e, t) {
                          var n,
                            i,
                            r = w(e),
                            o = r[0],
                            s = t[1];
                          return (
                            (e = r[1]),
                            o && ((o = m(o, s)), (n = b(o))),
                            o
                              ? (e =
                                  n && n.normalize
                                    ? n.normalize(
                                        e,
                                        ((i = s),
                                        function (e) {
                                          return m(e, i);
                                        })
                                      )
                                    : m(e, s))
                              : ((e = m(e, s)),
                                (r = w(e)),
                                (o = r[0]),
                                (e = r[1]),
                                o && (n = b(o))),
                            { f: o ? o + "!" + e : e, n: e, pr: o, p: n }
                          );
                        }),
                          (a = {
                            require: function (e) {
                              return v(e);
                            },
                            exports: function (e) {
                              var t = l[e];
                              return void 0 !== t ? t : (l[e] = {});
                            },
                            module: function (e) {
                              return {
                                id: e,
                                uri: "",
                                exports: l[e],
                                config: (function (e) {
                                  return function () {
                                    return (u && u.config && u.config[e]) || {};
                                  };
                                })(e),
                              };
                            },
                          }),
                          (t = function (t, n, i, r) {
                            var o,
                              u,
                              d,
                              h,
                              f,
                              m,
                              w,
                              _ = [],
                              C = typeof i;
                            if (
                              ((m = x((r = r || t))),
                              "undefined" === C || "function" === C)
                            ) {
                              for (
                                n =
                                  !n.length && i.length
                                    ? ["require", "exports", "module"]
                                    : n,
                                  f = 0;
                                f < n.length;
                                f += 1
                              )
                                if (((h = s(n[f], m)), "require" === (u = h.f)))
                                  _[f] = a.require(t);
                                else if ("exports" === u)
                                  (_[f] = a.exports(t)), (w = !0);
                                else if ("module" === u) o = _[f] = a.module(t);
                                else if (g(l, u) || g(c, u) || g(p, u))
                                  _[f] = b(u);
                                else {
                                  if (!h.p)
                                    throw new Error(t + " missing " + u);
                                  h.p.load(h.n, v(r, !0), y(u), {}),
                                    (_[f] = l[u]);
                                }
                              (d = i ? i.apply(l[t], _) : void 0),
                                t &&
                                  (o && o.exports !== e && o.exports !== l[t]
                                    ? (l[t] = o.exports)
                                    : (d === e && w) || (l[t] = d));
                            }
                            else t && (l[t] = i);
                          }),
                          (n =
                            r =
                            i =
                              function (n, r, o, l, c) {
                                if ("string" == typeof n)
                                  return a[n] ? a[n](r) : b(s(n, x(r)).f);
                                if (!n.splice) {
                                  if (
                                    ((u = n).deps && i(u.deps, u.callback), !r)
                                  )
                                    return;
                                  r.splice
                                    ? ((n = r), (r = o), (o = null))
                                    : (n = e);
                                }
                                return (
                                  (r = r || function () {}),
                                  "function" == typeof o && ((o = l), (l = c)),
                                  l
                                    ? t(e, n, r, o)
                                    : setTimeout(function () {
                                        t(e, n, r, o);
                                      }, 4),
                                  i
                                );
                              }),
                          (i.config = function (e) {
                            return i(e);
                          }),
                          (n._defined = l),
                          ((o = function (e, t, n) {
                            if ("string" != typeof e)
                              throw new Error(
                                "See almond README: incorrect module build, no module name"
                              );
                            t.splice || ((n = t), (t = [])),
                              g(l, e) || g(c, e) || (c[e] = [e, t, n]);
                          }).amd = { jQuery: !0 });
                      })(),
                      (t.requirejs = n),
                      (t.require = r),
                      (t.define = o)),
                    t.define("almond", function () {}),
                    t.define("jquery", [], function () {
                      var t = e || i;
                      return null == t && console && console.error, t;
                    }),
                    t.define("select2/utils", ["jquery"], function (e) {
                      var t = {};
                      function n(e) {
                        var t = e.prototype,
                          n = [];
                        for (var i in t) {
                          var r = t[i];
                          "function" == typeof r &&
                            "constructor" !== i &&
                            n.push(i);
                        }
                        return n;
                      }
                      (t.Extend = function (e, t) {
                        var n = {}.hasOwnProperty;
                        function i() {
                          this.constructor = e;
                        }
                        for (var r in t) n.call(t, r) && (e[r] = t[r]);
                        return (
                          (i.prototype = t.prototype),
                          (e.prototype = new i()),
                          (e.__super__ = t.prototype),
                          e
                        );
                      }),
                        (t.Decorate = function (e, t) {
                          var i = n(t),
                            r = n(e);
                          function o() {
                            var n = Array.prototype.unshift,
                              i = t.prototype.constructor.length,
                              r = e.prototype.constructor;
                            i > 0 &&
                              (n.call(arguments, e.prototype.constructor),
                              (r = t.prototype.constructor)),
                              r.apply(this, arguments);
                          }
                          (t.displayName = e.displayName),
                            (o.prototype = new (function () {
                              this.constructor = o;
                            })());
                          for (var s = 0; s < r.length; s++) {
                            var a = r[s];
                            o.prototype[a] = e.prototype[a];
                          }
                          for (
                            var l = function (e) {
                                var n = function () {};
                                (e in o.prototype) && (n = o.prototype[e]);
                                var i = t.prototype[e];
                                return function () {
                                  var e = Array.prototype.unshift;
                                  return (
                                    e.call(arguments, n),
                                    i.apply(this, arguments)
                                  );
                                };
                              },
                              c = 0;
                            c < i.length;
                            c++
                          ) {
                            var u = i[c];
                            o.prototype[u] = l(u);
                          }
                          return o;
                        });
                      var i = function () {
                        this.listeners = {};
                      };
                      (i.prototype.on = function (e, t) {
                        (this.listeners = this.listeners || {}),
                          e in this.listeners
                            ? this.listeners[e].push(t)
                            : (this.listeners[e] = [t]);
                      }),
                        (i.prototype.trigger = function (e) {
                          var t = Array.prototype.slice,
                            n = t.call(arguments, 1);
                          (this.listeners = this.listeners || {}),
                            null == n && (n = []),
                            0 === n.length && n.push({}),
                            (n[0]._type = e),
                            e in this.listeners &&
                              this.invoke(
                                this.listeners[e],
                                t.call(arguments, 1)
                              ),
                            "*" in this.listeners &&
                              this.invoke(this.listeners["*"], arguments);
                        }),
                        (i.prototype.invoke = function (e, t) {
                          for (var n = 0, i = e.length; n < i; n++)
                            e[n].apply(this, t);
                        }),
                        (t.Observable = i),
                        (t.generateChars = function (e) {
                          for (var t = "", n = 0; n < e; n++) {
                            var i = Math.floor(36 * Math.random());
                            t += i.toString(36);
                          }
                          return t;
                        }),
                        (t.bind = function (e, t) {
                          return function () {
                            e.apply(t, arguments);
                          };
                        }),
                        (t._convertData = function (e) {
                          for (var t in e) {
                            var n = t.split("-"),
                              i = e;
                            if (1 !== n.length) {
                              for (var r = 0; r < n.length; r++) {
                                var o = n[r];
                                (o =
                                  o.substring(0, 1).toLowerCase() +
                                  o.substring(1)) in i || (i[o] = {}),
                                  r == n.length - 1 && (i[o] = e[t]),
                                  (i = i[o]);
                              }
                              delete e[t];
                            }
                          }
                          return e;
                        }),
                        (t.hasScroll = function (t, n) {
                          var i = e(n),
                            r = n.style.overflowX,
                            o = n.style.overflowY;
                          return (
                            (r !== o || ("hidden" !== o && "visible" !== o)) &&
                            ("scroll" === r ||
                              "scroll" === o ||
                              i.innerHeight() < n.scrollHeight ||
                              i.innerWidth() < n.scrollWidth)
                          );
                        }),
                        (t.escapeMarkup = function (e) {
                          var t = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;",
                          };
                          return "string" != typeof e
                            ? e
                            : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                                return t[e];
                              });
                        }),
                        (t.__cache = {});
                      var r = 0;
                      return (
                        (t.GetUniqueElementId = function (e) {
                          var n = e.getAttribute("data-select2-id");
                          return null != n
                            ? n
                            : ((n = e.id
                                ? "select2-data-" + e.id
                                : "select2-data-" +
                                  (++r).toString() +
                                  "-" +
                                  t.generateChars(4)),
                              e.setAttribute("data-select2-id", n),
                              n);
                        }),
                        (t.StoreData = function (e, n, i) {
                          var r = t.GetUniqueElementId(e);
                          t.__cache[r] || (t.__cache[r] = {}),
                            (t.__cache[r][n] = i);
                        }),
                        (t.GetData = function (n, i) {
                          var r = t.GetUniqueElementId(n);
                          return i
                            ? t.__cache[r] && null != t.__cache[r][i]
                              ? t.__cache[r][i]
                              : e(n).data(i)
                            : t.__cache[r];
                        }),
                        (t.RemoveData = function (e) {
                          var n = t.GetUniqueElementId(e);
                          null != t.__cache[n] && delete t.__cache[n],
                            e.removeAttribute("data-select2-id");
                        }),
                        (t.copyNonInternalCssClasses = function (e, t) {
                          var n = e.getAttribute("class").trim().split(/\s+/);
                          n = n.filter(function (e) {
                            return 0 === e.indexOf("select2-");
                          });
                          var i = t.getAttribute("class").trim().split(/\s+/);
                          i = i.filter(function (e) {
                            return 0 !== e.indexOf("select2-");
                          });
                          var r = n.concat(i);
                          e.setAttribute("class", r.join(" "));
                        }),
                        t
                      );
                    }),
                    t.define(
                      "select2/results",
                      ["jquery", "./utils"],
                      function (e, t) {
                        function n(e, t, i) {
                          (this.$element = e),
                            (this.data = i),
                            (this.options = t),
                            n.__super__.constructor.call(this);
                        }
                        return (
                          t.Extend(n, t.Observable),
                          (n.prototype.render = function () {
                            var t = e(
                              '<ul class="select2-results__options" role="listbox"></ul>'
                            );
                            return (
                              this.options.get("multiple") &&
                                t.attr("aria-multiselectable", "true"),
                              (this.$results = t),
                              t
                            );
                          }),
                          (n.prototype.clear = function () {
                            this.$results.empty();
                          }),
                          (n.prototype.displayMessage = function (t) {
                            var n = this.options.get("escapeMarkup");
                            this.clear(), this.hideLoading();
                            var i = e(
                                '<li role="alert" aria-live="assertive" class="select2-results__option"></li>'
                              ),
                              r = this.options
                                .get("translations")
                                .get(t.message);
                            i.append(n(r(t.args))),
                              (i[0].className += " select2-results__message"),
                              this.$results.append(i);
                          }),
                          (n.prototype.hideMessages = function () {
                            this.$results
                              .find(".select2-results__message")
                              .remove();
                          }),
                          (n.prototype.append = function (e) {
                            this.hideLoading();
                            var t = [];
                            if (null != e.results && 0 !== e.results.length) {
                              e.results = this.sort(e.results);
                              for (var n = 0; n < e.results.length; n++) {
                                var i = e.results[n],
                                  r = this.option(i);
                                t.push(r);
                              }
                              this.$results.append(t);
                            }
                            else
                              0 === this.$results.children().length &&
                                this.trigger("results:message", {
                                  message: "noResults",
                                });
                          }),
                          (n.prototype.position = function (e, t) {
                            var n = t.find(".select2-results");
                            n.append(e);
                          }),
                          (n.prototype.sort = function (e) {
                            var t = this.options.get("sorter");
                            return t(e);
                          }),
                          (n.prototype.highlightFirstItem = function () {
                            var e = this.$results.find(
                                ".select2-results__option--selectable"
                              ),
                              t = e.filter(
                                ".select2-results__option--selected"
                              );
                            t.length > 0
                              ? t.first().trigger("mouseenter")
                              : e.first().trigger("mouseenter"),
                              this.ensureHighlightVisible();
                          }),
                          (n.prototype.setClasses = function () {
                            var n = this;
                            this.data.current(function (i) {
                              var r = i.map(function (e) {
                                  return e.id.toString();
                                }),
                                o = n.$results.find(
                                  ".select2-results__option--selectable"
                                );
                              o.each(function () {
                                var n = e(this),
                                  i = t.GetData(this, "data"),
                                  o = "" + i.id;
                                (null != i.element && i.element.selected) ||
                                (null == i.element && r.indexOf(o) > -1)
                                  ? (this.classList.add(
                                      "select2-results__option--selected"
                                    ),
                                    n.attr("aria-selected", "true"))
                                  : (this.classList.remove(
                                      "select2-results__option--selected"
                                    ),
                                    n.attr("aria-selected", "false"));
                              });
                            });
                          }),
                          (n.prototype.showLoading = function (e) {
                            this.hideLoading();
                            var t = this.options
                                .get("translations")
                                .get("searching"),
                              n = { disabled: !0, loading: !0, text: t(e) },
                              i = this.option(n);
                            (i.className += " loading-results"),
                              this.$results.prepend(i);
                          }),
                          (n.prototype.hideLoading = function () {
                            this.$results.find(".loading-results").remove();
                          }),
                          (n.prototype.option = function (n) {
                            var i = document.createElement("li");
                            i.classList.add("select2-results__option"),
                              i.classList.add(
                                "select2-results__option--selectable"
                              );
                            var r = { role: "option" },
                              o =
                                window.Element.prototype.matches ||
                                window.Element.prototype.msMatchesSelector ||
                                window.Element.prototype.webkitMatchesSelector;
                            for (var s in (((null != n.element &&
                              o.call(n.element, ":disabled")) ||
                              (null == n.element && n.disabled)) &&
                              ((r["aria-disabled"] = "true"),
                              i.classList.remove(
                                "select2-results__option--selectable"
                              ),
                              i.classList.add(
                                "select2-results__option--disabled"
                              )),
                            null == n.id &&
                              i.classList.remove(
                                "select2-results__option--selectable"
                              ),
                            null != n._resultId && (i.id = n._resultId),
                            n.title && (i.title = n.title),
                            n.children &&
                              ((r.role = "group"),
                              (r["aria-label"] = n.text),
                              i.classList.remove(
                                "select2-results__option--selectable"
                              ),
                              i.classList.add(
                                "select2-results__option--group"
                              )),
                            r)) {
                              var a = r[s];
                              i.setAttribute(s, a);
                            }
                            if (n.children) {
                              var l = e(i),
                                c = document.createElement("strong");
                              (c.className = "select2-results__group"),
                                this.template(n, c);
                              for (
                                var u = [], p = 0;
                                p < n.children.length;
                                p++
                              ) {
                                var d = n.children[p],
                                  h = this.option(d);
                                u.push(h);
                              }
                              var f = e("<ul></ul>", {
                                class:
                                  "select2-results__options select2-results__options--nested",
                                role: "none",
                              });
                              f.append(u), l.append(c), l.append(f);
                            }
                            else this.template(n, i);
                            return t.StoreData(i, "data", n), i;
                          }),
                          (n.prototype.bind = function (n, i) {
                            var r = this,
                              o = n.id + "-results";
                            this.$results.attr("id", o),
                              n.on("results:all", function (e) {
                                r.clear(),
                                  r.append(e.data),
                                  n.isOpen() &&
                                    (r.setClasses(), r.highlightFirstItem());
                              }),
                              n.on("results:append", function (e) {
                                r.append(e.data), n.isOpen() && r.setClasses();
                              }),
                              n.on("query", function (e) {
                                r.hideMessages(), r.showLoading(e);
                              }),
                              n.on("select", function () {
                                n.isOpen() &&
                                  (r.setClasses(),
                                  r.options.get("scrollAfterSelect") &&
                                    r.highlightFirstItem());
                              }),
                              n.on("unselect", function () {
                                n.isOpen() &&
                                  (r.setClasses(),
                                  r.options.get("scrollAfterSelect") &&
                                    r.highlightFirstItem());
                              }),
                              n.on("open", function () {
                                r.$results.attr("aria-expanded", "true"),
                                  r.$results.attr("aria-hidden", "false"),
                                  r.setClasses(),
                                  r.ensureHighlightVisible();
                              }),
                              n.on("close", function () {
                                r.$results.attr("aria-expanded", "false"),
                                  r.$results.attr("aria-hidden", "true"),
                                  r.$results.removeAttr(
                                    "aria-activedescendant"
                                  );
                              }),
                              n.on("results:toggle", function () {
                                var e = r.getHighlightedResults();
                                0 !== e.length && e.trigger("mouseup");
                              }),
                              n.on("results:select", function () {
                                var e = r.getHighlightedResults();
                                if (0 !== e.length) {
                                  var n = t.GetData(e[0], "data");
                                  e.hasClass(
                                    "select2-results__option--selected"
                                  )
                                    ? r.trigger("close", {})
                                    : r.trigger("select", { data: n });
                                }
                              }),
                              n.on("results:previous", function () {
                                var e = r.getHighlightedResults(),
                                  t = r.$results.find(
                                    ".select2-results__option--selectable"
                                  ),
                                  n = t.index(e);
                                if (!(n <= 0)) {
                                  var i = n - 1;
                                  0 === e.length && (i = 0);
                                  var o = t.eq(i);
                                  o.trigger("mouseenter");
                                  var s = r.$results.offset().top,
                                    a = o.offset().top,
                                    l = r.$results.scrollTop() + (a - s);
                                  0 === i
                                    ? r.$results.scrollTop(0)
                                    : a - s < 0 && r.$results.scrollTop(l);
                                }
                              }),
                              n.on("results:next", function () {
                                var e = r.getHighlightedResults(),
                                  t = r.$results.find(
                                    ".select2-results__option--selectable"
                                  ),
                                  n = t.index(e),
                                  i = n + 1;
                                if (!(i >= t.length)) {
                                  var o = t.eq(i);
                                  o.trigger("mouseenter");
                                  var s =
                                      r.$results.offset().top +
                                      r.$results.outerHeight(!1),
                                    a = o.offset().top + o.outerHeight(!1),
                                    l = r.$results.scrollTop() + a - s;
                                  0 === i
                                    ? r.$results.scrollTop(0)
                                    : a > s && r.$results.scrollTop(l);
                                }
                              }),
                              n.on("results:focus", function (e) {
                                e.element[0].classList.add(
                                  "select2-results__option--highlighted"
                                ),
                                  e.element[0].setAttribute(
                                    "aria-selected",
                                    "true"
                                  );
                              }),
                              n.on("results:message", function (e) {
                                r.displayMessage(e);
                              }),
                              e.fn.mousewheel &&
                                this.$results.on("mousewheel", function (e) {
                                  var t = r.$results.scrollTop(),
                                    n =
                                      r.$results.get(0).scrollHeight -
                                      t +
                                      e.deltaY,
                                    i = e.deltaY > 0 && t - e.deltaY <= 0,
                                    o =
                                      e.deltaY < 0 && n <= r.$results.height();
                                  i
                                    ? (r.$results.scrollTop(0),
                                      e.preventDefault(),
                                      e.stopPropagation())
                                    : o &&
                                      (r.$results.scrollTop(
                                        r.$results.get(0).scrollHeight -
                                          r.$results.height()
                                      ),
                                      e.preventDefault(),
                                      e.stopPropagation());
                                }),
                              this.$results.on(
                                "mouseup",
                                ".select2-results__option--selectable",
                                function (n) {
                                  var i = e(this),
                                    o = t.GetData(this, "data");
                                  i.hasClass(
                                    "select2-results__option--selected"
                                  )
                                    ? r.options.get("multiple")
                                      ? r.trigger("unselect", {
                                          originalEvent: n,
                                          data: o,
                                        })
                                      : r.trigger("close", {})
                                    : r.trigger("select", {
                                        originalEvent: n,
                                        data: o,
                                      });
                                }
                              ),
                              this.$results.on(
                                "mouseenter",
                                ".select2-results__option--selectable",
                                function (n) {
                                  var i = t.GetData(this, "data");
                                  r
                                    .getHighlightedResults()
                                    .removeClass(
                                      "select2-results__option--highlighted"
                                    )
                                    .attr("aria-selected", "false"),
                                    r.trigger("results:focus", {
                                      data: i,
                                      element: e(this),
                                    });
                                }
                              );
                          }),
                          (n.prototype.getHighlightedResults = function () {
                            var e = this.$results.find(
                              ".select2-results__option--highlighted"
                            );
                            return e;
                          }),
                          (n.prototype.destroy = function () {
                            this.$results.remove();
                          }),
                          (n.prototype.ensureHighlightVisible = function () {
                            var e = this.getHighlightedResults();
                            if (0 !== e.length) {
                              var t = this.$results.find(
                                  ".select2-results__option--selectable"
                                ),
                                n = t.index(e),
                                i = this.$results.offset().top,
                                r = e.offset().top,
                                o = this.$results.scrollTop() + (r - i),
                                s = r - i;
                              (o -= 2 * e.outerHeight(!1)),
                                n <= 2
                                  ? this.$results.scrollTop(0)
                                  : (s > this.$results.outerHeight() ||
                                      s < 0) &&
                                    this.$results.scrollTop(o);
                            }
                          }),
                          (n.prototype.template = function (t, n) {
                            var i = this.options.get("templateResult"),
                              r = this.options.get("escapeMarkup"),
                              o = i(t, n);
                            null == o
                              ? (n.style.display = "none")
                              : "string" == typeof o
                              ? (n.innerHTML = r(o))
                              : e(n).append(o);
                          }),
                          n
                        );
                      }
                    ),
                    t.define("select2/keys", [], function () {
                      return {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46,
                      };
                    }),
                    t.define(
                      "select2/selection/base",
                      ["jquery", "../utils", "../keys"],
                      function (e, t, n) {
                        function i(e, t) {
                          (this.$element = e),
                            (this.options = t),
                            i.__super__.constructor.call(this);
                        }
                        return (
                          t.Extend(i, t.Observable),
                          (i.prototype.render = function () {
                            var n = e(
                              '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                            );
                            return (
                              (this._tabindex = 0),
                              null !=
                              t.GetData(this.$element[0], "old-tabindex")
                                ? (this._tabindex = t.GetData(
                                    this.$element[0],
                                    "old-tabindex"
                                  ))
                                : null != this.$element.attr("tabindex") &&
                                  (this._tabindex =
                                    this.$element.attr("tabindex")),
                              n.attr("title", this.$element.attr("title")),
                              n.attr("tabindex", this._tabindex),
                              n.attr("aria-disabled", "false"),
                              (this.$selection = n),
                              n
                            );
                          }),
                          (i.prototype.bind = function (e, t) {
                            var i = this,
                              r = e.id + "-results";
                            (this.container = e),
                              this.$selection.on("focus", function (e) {
                                i.trigger("focus", e);
                              }),
                              this.$selection.on("blur", function (e) {
                                i._handleBlur(e);
                              }),
                              this.$selection.on("keydown", function (e) {
                                i.trigger("keypress", e),
                                  e.which === n.SPACE && e.preventDefault();
                              }),
                              e.on("results:focus", function (e) {
                                i.$selection.attr(
                                  "aria-activedescendant",
                                  e.data._resultId
                                );
                              }),
                              e.on("selection:update", function (e) {
                                i.update(e.data);
                              }),
                              e.on("open", function () {
                                i.$selection.attr("aria-expanded", "true"),
                                  i.$selection.attr("aria-owns", r),
                                  i._attachCloseHandler(e);
                              }),
                              e.on("close", function () {
                                i.$selection.attr("aria-expanded", "false"),
                                  i.$selection.removeAttr(
                                    "aria-activedescendant"
                                  ),
                                  i.$selection.removeAttr("aria-owns"),
                                  i.$selection.trigger("focus"),
                                  i._detachCloseHandler(e);
                              }),
                              e.on("enable", function () {
                                i.$selection.attr("tabindex", i._tabindex),
                                  i.$selection.attr("aria-disabled", "false");
                              }),
                              e.on("disable", function () {
                                i.$selection.attr("tabindex", "-1"),
                                  i.$selection.attr("aria-disabled", "true");
                              });
                          }),
                          (i.prototype._handleBlur = function (t) {
                            var n = this;
                            window.setTimeout(function () {
                              document.activeElement == n.$selection[0] ||
                                e.contains(
                                  n.$selection[0],
                                  document.activeElement
                                ) ||
                                n.trigger("blur", t);
                            }, 1);
                          }),
                          (i.prototype._attachCloseHandler = function (n) {
                            e(document.body).on(
                              "mousedown.select2." + n.id,
                              function (n) {
                                var i = e(n.target),
                                  r = i.closest(".select2"),
                                  o = e(".select2.select2-container--open");
                                o.each(function () {
                                  if (this != r[0]) {
                                    var e = t.GetData(this, "element");
                                    e.select2("close");
                                  }
                                });
                              }
                            );
                          }),
                          (i.prototype._detachCloseHandler = function (t) {
                            e(document.body).off("mousedown.select2." + t.id);
                          }),
                          (i.prototype.position = function (e, t) {
                            var n = t.find(".selection");
                            n.append(e);
                          }),
                          (i.prototype.destroy = function () {
                            this._detachCloseHandler(this.container);
                          }),
                          (i.prototype.update = function (e) {
                            throw new Error(
                              "The `update` method must be defined in child classes."
                            );
                          }),
                          (i.prototype.isEnabled = function () {
                            return !this.isDisabled();
                          }),
                          (i.prototype.isDisabled = function () {
                            return this.options.get("disabled");
                          }),
                          i
                        );
                      }
                    ),
                    t.define(
                      "select2/selection/single",
                      ["jquery", "./base", "../utils", "../keys"],
                      function (e, t, n, i) {
                        function r() {
                          r.__super__.constructor.apply(this, arguments);
                        }
                        return (
                          n.Extend(r, t),
                          (r.prototype.render = function () {
                            var e = r.__super__.render.call(this);
                            return (
                              e[0].classList.add("select2-selection--single"),
                              e.html(
                                '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                              ),
                              e
                            );
                          }),
                          (r.prototype.bind = function (e, t) {
                            var n = this;
                            r.__super__.bind.apply(this, arguments);
                            var i = e.id + "-container";
                            this.$selection
                              .find(".select2-selection__rendered")
                              .attr("id", i)
                              .attr("role", "textbox")
                              .attr("aria-readonly", "true"),
                              this.$selection.attr("aria-labelledby", i),
                              this.$selection.attr("aria-controls", i),
                              this.$selection.on("mousedown", function (e) {
                                1 === e.which &&
                                  n.trigger("toggle", { originalEvent: e });
                              }),
                              this.$selection.on("focus", function (e) {}),
                              this.$selection.on("blur", function (e) {}),
                              e.on("focus", function (t) {
                                e.isOpen() || n.$selection.trigger("focus");
                              });
                          }),
                          (r.prototype.clear = function () {
                            var e = this.$selection.find(
                              ".select2-selection__rendered"
                            );
                            e.empty(), e.removeAttr("title");
                          }),
                          (r.prototype.display = function (e, t) {
                            var n = this.options.get("templateSelection"),
                              i = this.options.get("escapeMarkup");
                            return i(n(e, t));
                          }),
                          (r.prototype.selectionContainer = function () {
                            return e("<span></span>");
                          }),
                          (r.prototype.update = function (e) {
                            if (0 !== e.length) {
                              var t = e[0],
                                n = this.$selection.find(
                                  ".select2-selection__rendered"
                                ),
                                i = this.display(t, n);
                              n.empty().append(i);
                              var r = t.title || t.text;
                              r ? n.attr("title", r) : n.removeAttr("title");
                            }
                            else this.clear();
                          }),
                          r
                        );
                      }
                    ),
                    t.define(
                      "select2/selection/multiple",
                      ["jquery", "./base", "../utils"],
                      function (e, t, n) {
                        function i(e, t) {
                          i.__super__.constructor.apply(this, arguments);
                        }
                        return (
                          n.Extend(i, t),
                          (i.prototype.render = function () {
                            var e = i.__super__.render.call(this);
                            return (
                              e[0].classList.add("select2-selection--multiple"),
                              e.html(
                                '<ul class="select2-selection__rendered"></ul>'
                              ),
                              e
                            );
                          }),
                          (i.prototype.bind = function (t, r) {
                            var o = this;
                            i.__super__.bind.apply(this, arguments);
                            var s = t.id + "-container";
                            this.$selection
                              .find(".select2-selection__rendered")
                              .attr("id", s),
                              this.$selection.on("click", function (e) {
                                o.trigger("toggle", { originalEvent: e });
                              }),
                              this.$selection.on(
                                "click",
                                ".select2-selection__choice__remove",
                                function (t) {
                                  if (!o.isDisabled()) {
                                    var i = e(this),
                                      r = i.parent(),
                                      s = n.GetData(r[0], "data");
                                    o.trigger("unselect", {
                                      originalEvent: t,
                                      data: s,
                                    });
                                  }
                                }
                              ),
                              this.$selection.on(
                                "keydown",
                                ".select2-selection__choice__remove",
                                function (e) {
                                  o.isDisabled() || e.stopPropagation();
                                }
                              );
                          }),
                          (i.prototype.clear = function () {
                            var e = this.$selection.find(
                              ".select2-selection__rendered"
                            );
                            e.empty(), e.removeAttr("title");
                          }),
                          (i.prototype.display = function (e, t) {
                            var n = this.options.get("templateSelection"),
                              i = this.options.get("escapeMarkup");
                            return i(n(e, t));
                          }),
                          (i.prototype.selectionContainer = function () {
                            var t = e(
                              '<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>'
                            );
                            return t;
                          }),
                          (i.prototype.update = function (e) {
                            if ((this.clear(), 0 !== e.length)) {
                              for (
                                var t = [],
                                  i =
                                    this.$selection
                                      .find(".select2-selection__rendered")
                                      .attr("id") + "-choice-",
                                  r = 0;
                                r < e.length;
                                r++
                              ) {
                                var o = e[r],
                                  s = this.selectionContainer(),
                                  a = this.display(o, s),
                                  l = i + n.generateChars(4) + "-";
                                o.id ? (l += o.id) : (l += n.generateChars(4)),
                                  s
                                    .find(".select2-selection__choice__display")
                                    .append(a)
                                    .attr("id", l);
                                var c = o.title || o.text;
                                c && s.attr("title", c);
                                var u = this.options
                                    .get("translations")
                                    .get("removeItem"),
                                  p = s.find(
                                    ".select2-selection__choice__remove"
                                  );
                                p.attr("title", u()),
                                  p.attr("aria-label", u()),
                                  p.attr("aria-describedby", l),
                                  n.StoreData(s[0], "data", o),
                                  t.push(s);
                              }
                              var d = this.$selection.find(
                                ".select2-selection__rendered"
                              );
                              d.append(t);
                            }
                          }),
                          i
                        );
                      }
                    ),
                    t.define("select2/selection/placeholder", [], function () {
                      function e(e, t, n) {
                        (this.placeholder = this.normalizePlaceholder(
                          n.get("placeholder")
                        )),
                          e.call(this, t, n);
                      }
                      return (
                        (e.prototype.normalizePlaceholder = function (e, t) {
                          return (
                            "string" == typeof t && (t = { id: "", text: t }), t
                          );
                        }),
                        (e.prototype.createPlaceholder = function (e, t) {
                          var n = this.selectionContainer();
                          n.html(this.display(t)),
                            n[0].classList.add(
                              "select2-selection__placeholder"
                            ),
                            n[0].classList.remove("select2-selection__choice");
                          var i = t.title || t.text || n.text();
                          return (
                            this.$selection
                              .find(".select2-selection__rendered")
                              .attr("title", i),
                            n
                          );
                        }),
                        (e.prototype.update = function (e, t) {
                          var n =
                              1 == t.length && t[0].id != this.placeholder.id,
                            i = t.length > 1;
                          if (i || n) return e.call(this, t);
                          this.clear();
                          var r = this.createPlaceholder(this.placeholder);
                          this.$selection
                            .find(".select2-selection__rendered")
                            .append(r);
                        }),
                        e
                      );
                    }),
                    t.define(
                      "select2/selection/allowClear",
                      ["jquery", "../keys", "../utils"],
                      function (e, t, n) {
                        function i() {}
                        return (
                          (i.prototype.bind = function (e, t, n) {
                            var i = this;
                            e.call(this, t, n),
                              null == this.placeholder &&
                                this.options.get("debug") &&
                                window.console &&
                                console.error,
                              this.$selection.on(
                                "mousedown",
                                ".select2-selection__clear",
                                function (e) {
                                  i._handleClear(e);
                                }
                              ),
                              t.on("keypress", function (e) {
                                i._handleKeyboardClear(e, t);
                              });
                          }),
                          (i.prototype._handleClear = function (e, t) {
                            if (!this.isDisabled()) {
                              var i = this.$selection.find(
                                ".select2-selection__clear"
                              );
                              if (0 !== i.length) {
                                t.stopPropagation();
                                var r = n.GetData(i[0], "data"),
                                  o = this.$element.val();
                                this.$element.val(this.placeholder.id);
                                var s = { data: r };
                                if ((this.trigger("clear", s), s.prevented))
                                  this.$element.val(o);
                                else {
                                  for (var a = 0; a < r.length; a++)
                                    if (
                                      ((s = { data: r[a] }),
                                      this.trigger("unselect", s),
                                      s.prevented)
                                    )
                                      return void this.$element.val(o);
                                  this.$element
                                    .trigger("input")
                                    .trigger("change"),
                                    this.trigger("toggle", {});
                                }
                              }
                            }
                          }),
                          (i.prototype._handleKeyboardClear = function (
                            e,
                            n,
                            i
                          ) {
                            i.isOpen() ||
                              (n.which != t.DELETE && n.which != t.BACKSPACE) ||
                              this._handleClear(n);
                          }),
                          (i.prototype.update = function (t, i) {
                            if (
                              (t.call(this, i),
                              this.$selection
                                .find(".select2-selection__clear")
                                .remove(),
                              this.$selection[0].classList.remove(
                                "select2-selection--clearable"
                              ),
                              !(
                                this.$selection.find(
                                  ".select2-selection__placeholder"
                                ).length > 0 || 0 === i.length
                              ))
                            ) {
                              var r = this.$selection
                                  .find(".select2-selection__rendered")
                                  .attr("id"),
                                o = this.options
                                  .get("translations")
                                  .get("removeAllItems"),
                                s = e(
                                  '<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>'
                                );
                              s.attr("title", o()),
                                s.attr("aria-label", o()),
                                s.attr("aria-describedby", r),
                                n.StoreData(s[0], "data", i),
                                this.$selection.prepend(s),
                                this.$selection[0].classList.add(
                                  "select2-selection--clearable"
                                );
                            }
                          }),
                          i
                        );
                      }
                    ),
                    t.define(
                      "select2/selection/search",
                      ["jquery", "../utils", "../keys"],
                      function (e, t, n) {
                        function i(e, t, n) {
                          e.call(this, t, n);
                        }
                        return (
                          (i.prototype.render = function (t) {
                            var n = this.options
                                .get("translations")
                                .get("search"),
                              i = e(
                                '<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>'
                              );
                            (this.$searchContainer = i),
                              (this.$search = i.find("textarea")),
                              this.$search.prop(
                                "autocomplete",
                                this.options.get("autocomplete")
                              ),
                              this.$search.attr("aria-label", n());
                            var r = t.call(this);
                            return (
                              this._transferTabIndex(),
                              r.append(this.$searchContainer),
                              r
                            );
                          }),
                          (i.prototype.bind = function (e, i, r) {
                            var o = this,
                              s = i.id + "-results",
                              a = i.id + "-container";
                            e.call(this, i, r),
                              o.$search.attr("aria-describedby", a),
                              i.on("open", function () {
                                o.$search.attr("aria-controls", s),
                                  o.$search.trigger("focus");
                              }),
                              i.on("close", function () {
                                o.$search.val(""),
                                  o.resizeSearch(),
                                  o.$search.removeAttr("aria-controls"),
                                  o.$search.removeAttr("aria-activedescendant"),
                                  o.$search.trigger("focus");
                              }),
                              i.on("enable", function () {
                                o.$search.prop("disabled", !1),
                                  o._transferTabIndex();
                              }),
                              i.on("disable", function () {
                                o.$search.prop("disabled", !0);
                              }),
                              i.on("focus", function (e) {
                                o.$search.trigger("focus");
                              }),
                              i.on("results:focus", function (e) {
                                e.data._resultId
                                  ? o.$search.attr(
                                      "aria-activedescendant",
                                      e.data._resultId
                                    )
                                  : o.$search.removeAttr(
                                      "aria-activedescendant"
                                    );
                              }),
                              this.$selection.on(
                                "focusin",
                                ".select2-search--inline",
                                function (e) {
                                  o.trigger("focus", e);
                                }
                              ),
                              this.$selection.on(
                                "focusout",
                                ".select2-search--inline",
                                function (e) {
                                  o._handleBlur(e);
                                }
                              ),
                              this.$selection.on(
                                "keydown",
                                ".select2-search--inline",
                                function (e) {
                                  e.stopPropagation(),
                                    o.trigger("keypress", e),
                                    (o._keyUpPrevented =
                                      e.isDefaultPrevented());
                                  var i = e.which;
                                  if (
                                    i === n.BACKSPACE &&
                                    "" === o.$search.val()
                                  ) {
                                    var r = o.$selection
                                      .find(".select2-selection__choice")
                                      .last();
                                    if (r.length > 0) {
                                      var s = t.GetData(r[0], "data");
                                      o.searchRemoveChoice(s),
                                        e.preventDefault();
                                    }
                                  }
                                }
                              ),
                              this.$selection.on(
                                "click",
                                ".select2-search--inline",
                                function (e) {
                                  o.$search.val() && e.stopPropagation();
                                }
                              );
                            var l = document.documentMode,
                              c = l && l <= 11;
                            this.$selection.on(
                              "input.searchcheck",
                              ".select2-search--inline",
                              function (e) {
                                c
                                  ? o.$selection.off(
                                      "input.search input.searchcheck"
                                    )
                                  : o.$selection.off("keyup.search");
                              }
                            ),
                              this.$selection.on(
                                "keyup.search input.search",
                                ".select2-search--inline",
                                function (e) {
                                  if (c && "input" === e.type)
                                    o.$selection.off(
                                      "input.search input.searchcheck"
                                    );
                                  else {
                                    var t = e.which;
                                    t != n.SHIFT &&
                                      t != n.CTRL &&
                                      t != n.ALT &&
                                      t != n.TAB &&
                                      o.handleSearch(e);
                                  }
                                }
                              );
                          }),
                          (i.prototype._transferTabIndex = function (e) {
                            this.$search.attr(
                              "tabindex",
                              this.$selection.attr("tabindex")
                            ),
                              this.$selection.attr("tabindex", "-1");
                          }),
                          (i.prototype.createPlaceholder = function (e, t) {
                            this.$search.attr("placeholder", t.text);
                          }),
                          (i.prototype.update = function (e, t) {
                            var n = this.$search[0] == document.activeElement;
                            this.$search.attr("placeholder", ""),
                              e.call(this, t),
                              this.resizeSearch(),
                              n && this.$search.trigger("focus");
                          }),
                          (i.prototype.handleSearch = function () {
                            if ((this.resizeSearch(), !this._keyUpPrevented)) {
                              var e = this.$search.val();
                              this.trigger("query", { term: e });
                            }
                            this._keyUpPrevented = !1;
                          }),
                          (i.prototype.searchRemoveChoice = function (e, t) {
                            this.trigger("unselect", { data: t }),
                              this.$search.val(t.text),
                              this.handleSearch();
                          }),
                          (i.prototype.resizeSearch = function () {
                            this.$search.css("width", "25px");
                            var e = "100%";
                            if ("" === this.$search.attr("placeholder")) {
                              var t = this.$search.val().length + 1;
                              e = 0.75 * t + "em";
                            }
                            this.$search.css("width", e);
                          }),
                          i
                        );
                      }
                    ),
                    t.define(
                      "select2/selection/selectionCss",
                      ["../utils"],
                      function (e) {
                        function t() {}
                        return (
                          (t.prototype.render = function (t) {
                            var n = t.call(this),
                              i = this.options.get("selectionCssClass") || "";
                            return (
                              -1 !== i.indexOf(":all:") &&
                                ((i = i.replace(":all:", "")),
                                e.copyNonInternalCssClasses(
                                  n[0],
                                  this.$element[0]
                                )),
                              n.addClass(i),
                              n
                            );
                          }),
                          t
                        );
                      }
                    ),
                    t.define(
                      "select2/selection/eventRelay",
                      ["jquery"],
                      function (e) {
                        function t() {}
                        return (
                          (t.prototype.bind = function (t, n, i) {
                            var r = this,
                              o = [
                                "open",
                                "opening",
                                "close",
                                "closing",
                                "select",
                                "selecting",
                                "unselect",
                                "unselecting",
                                "clear",
                                "clearing",
                              ],
                              s = [
                                "opening",
                                "closing",
                                "selecting",
                                "unselecting",
                                "clearing",
                              ];
                            t.call(this, n, i),
                              n.on("*", function (t, n) {
                                if (-1 !== o.indexOf(t)) {
                                  n = n || {};
                                  var i = e.Event("select2:" + t, {
                                    params: n,
                                  });
                                  r.$element.trigger(i),
                                    -1 !== s.indexOf(t) &&
                                      (n.prevented = i.isDefaultPrevented());
                                }
                              });
                          }),
                          t
                        );
                      }
                    ),
                    t.define(
                      "select2/translation",
                      ["jquery", "require"],
                      function (e, t) {
                        function n(e) {
                          this.dict = e || {};
                        }
                        return (
                          (n.prototype.all = function () {
                            return this.dict;
                          }),
                          (n.prototype.get = function (e) {
                            return this.dict[e];
                          }),
                          (n.prototype.extend = function (t) {
                            this.dict = e.extend({}, t.all(), this.dict);
                          }),
                          (n._cache = {}),
                          (n.loadPath = function (e) {
                            if (!(e in n._cache)) {
                              var i = t(e);
                              n._cache[e] = i;
                            }
                            return new n(n._cache[e]);
                          }),
                          n
                        );
                      }
                    ),
                    t.define("select2/diacritics", [], function () {
                      return {
                        "Ⓐ": "A",
                        Ａ: "A",
                        À: "A",
                        Á: "A",
                        Â: "A",
                        Ầ: "A",
                        Ấ: "A",
                        Ẫ: "A",
                        Ẩ: "A",
                        Ã: "A",
                        Ā: "A",
                        Ă: "A",
                        Ằ: "A",
                        Ắ: "A",
                        Ẵ: "A",
                        Ẳ: "A",
                        Ȧ: "A",
                        Ǡ: "A",
                        Ä: "A",
                        Ǟ: "A",
                        Ả: "A",
                        Å: "A",
                        Ǻ: "A",
                        Ǎ: "A",
                        Ȁ: "A",
                        Ȃ: "A",
                        Ạ: "A",
                        Ậ: "A",
                        Ặ: "A",
                        Ḁ: "A",
                        Ą: "A",
                        Ⱥ: "A",
                        Ɐ: "A",
                        Ꜳ: "AA",
                        Æ: "AE",
                        Ǽ: "AE",
                        Ǣ: "AE",
                        Ꜵ: "AO",
                        Ꜷ: "AU",
                        Ꜹ: "AV",
                        Ꜻ: "AV",
                        Ꜽ: "AY",
                        "Ⓑ": "B",
                        Ｂ: "B",
                        Ḃ: "B",
                        Ḅ: "B",
                        Ḇ: "B",
                        Ƀ: "B",
                        Ƃ: "B",
                        Ɓ: "B",
                        "Ⓒ": "C",
                        Ｃ: "C",
                        Ć: "C",
                        Ĉ: "C",
                        Ċ: "C",
                        Č: "C",
                        Ç: "C",
                        Ḉ: "C",
                        Ƈ: "C",
                        Ȼ: "C",
                        Ꜿ: "C",
                        "Ⓓ": "D",
                        Ｄ: "D",
                        Ḋ: "D",
                        Ď: "D",
                        Ḍ: "D",
                        Ḑ: "D",
                        Ḓ: "D",
                        Ḏ: "D",
                        Đ: "D",
                        Ƌ: "D",
                        Ɗ: "D",
                        Ɖ: "D",
                        Ꝺ: "D",
                        Ǳ: "DZ",
                        Ǆ: "DZ",
                        ǲ: "Dz",
                        ǅ: "Dz",
                        "Ⓔ": "E",
                        Ｅ: "E",
                        È: "E",
                        É: "E",
                        Ê: "E",
                        Ề: "E",
                        Ế: "E",
                        Ễ: "E",
                        Ể: "E",
                        Ẽ: "E",
                        Ē: "E",
                        Ḕ: "E",
                        Ḗ: "E",
                        Ĕ: "E",
                        Ė: "E",
                        Ë: "E",
                        Ẻ: "E",
                        Ě: "E",
                        Ȅ: "E",
                        Ȇ: "E",
                        Ẹ: "E",
                        Ệ: "E",
                        Ȩ: "E",
                        Ḝ: "E",
                        Ę: "E",
                        Ḙ: "E",
                        Ḛ: "E",
                        Ɛ: "E",
                        Ǝ: "E",
                        "Ⓕ": "F",
                        Ｆ: "F",
                        Ḟ: "F",
                        Ƒ: "F",
                        Ꝼ: "F",
                        "Ⓖ": "G",
                        Ｇ: "G",
                        Ǵ: "G",
                        Ĝ: "G",
                        Ḡ: "G",
                        Ğ: "G",
                        Ġ: "G",
                        Ǧ: "G",
                        Ģ: "G",
                        Ǥ: "G",
                        Ɠ: "G",
                        Ꞡ: "G",
                        Ᵹ: "G",
                        Ꝿ: "G",
                        "Ⓗ": "H",
                        Ｈ: "H",
                        Ĥ: "H",
                        Ḣ: "H",
                        Ḧ: "H",
                        Ȟ: "H",
                        Ḥ: "H",
                        Ḩ: "H",
                        Ḫ: "H",
                        Ħ: "H",
                        Ⱨ: "H",
                        Ⱶ: "H",
                        Ɥ: "H",
                        "Ⓘ": "I",
                        Ｉ: "I",
                        Ì: "I",
                        Í: "I",
                        Î: "I",
                        Ĩ: "I",
                        Ī: "I",
                        Ĭ: "I",
                        İ: "I",
                        Ï: "I",
                        Ḯ: "I",
                        Ỉ: "I",
                        Ǐ: "I",
                        Ȉ: "I",
                        Ȋ: "I",
                        Ị: "I",
                        Į: "I",
                        Ḭ: "I",
                        Ɨ: "I",
                        "Ⓙ": "J",
                        Ｊ: "J",
                        Ĵ: "J",
                        Ɉ: "J",
                        "Ⓚ": "K",
                        Ｋ: "K",
                        Ḱ: "K",
                        Ǩ: "K",
                        Ḳ: "K",
                        Ķ: "K",
                        Ḵ: "K",
                        Ƙ: "K",
                        Ⱪ: "K",
                        Ꝁ: "K",
                        Ꝃ: "K",
                        Ꝅ: "K",
                        Ꞣ: "K",
                        "Ⓛ": "L",
                        Ｌ: "L",
                        Ŀ: "L",
                        Ĺ: "L",
                        Ľ: "L",
                        Ḷ: "L",
                        Ḹ: "L",
                        Ļ: "L",
                        Ḽ: "L",
                        Ḻ: "L",
                        Ł: "L",
                        Ƚ: "L",
                        Ɫ: "L",
                        Ⱡ: "L",
                        Ꝉ: "L",
                        Ꝇ: "L",
                        Ꞁ: "L",
                        Ǉ: "LJ",
                        ǈ: "Lj",
                        "Ⓜ": "M",
                        Ｍ: "M",
                        Ḿ: "M",
                        Ṁ: "M",
                        Ṃ: "M",
                        Ɱ: "M",
                        Ɯ: "M",
                        "Ⓝ": "N",
                        Ｎ: "N",
                        Ǹ: "N",
                        Ń: "N",
                        Ñ: "N",
                        Ṅ: "N",
                        Ň: "N",
                        Ṇ: "N",
                        Ņ: "N",
                        Ṋ: "N",
                        Ṉ: "N",
                        Ƞ: "N",
                        Ɲ: "N",
                        Ꞑ: "N",
                        Ꞥ: "N",
                        Ǌ: "NJ",
                        ǋ: "Nj",
                        "Ⓞ": "O",
                        Ｏ: "O",
                        Ò: "O",
                        Ó: "O",
                        Ô: "O",
                        Ồ: "O",
                        Ố: "O",
                        Ỗ: "O",
                        Ổ: "O",
                        Õ: "O",
                        Ṍ: "O",
                        Ȭ: "O",
                        Ṏ: "O",
                        Ō: "O",
                        Ṑ: "O",
                        Ṓ: "O",
                        Ŏ: "O",
                        Ȯ: "O",
                        Ȱ: "O",
                        Ö: "O",
                        Ȫ: "O",
                        Ỏ: "O",
                        Ő: "O",
                        Ǒ: "O",
                        Ȍ: "O",
                        Ȏ: "O",
                        Ơ: "O",
                        Ờ: "O",
                        Ớ: "O",
                        Ỡ: "O",
                        Ở: "O",
                        Ợ: "O",
                        Ọ: "O",
                        Ộ: "O",
                        Ǫ: "O",
                        Ǭ: "O",
                        Ø: "O",
                        Ǿ: "O",
                        Ɔ: "O",
                        Ɵ: "O",
                        Ꝋ: "O",
                        Ꝍ: "O",
                        Œ: "OE",
                        Ƣ: "OI",
                        Ꝏ: "OO",
                        Ȣ: "OU",
                        "Ⓟ": "P",
                        Ｐ: "P",
                        Ṕ: "P",
                        Ṗ: "P",
                        Ƥ: "P",
                        Ᵽ: "P",
                        Ꝑ: "P",
                        Ꝓ: "P",
                        Ꝕ: "P",
                        "Ⓠ": "Q",
                        Ｑ: "Q",
                        Ꝗ: "Q",
                        Ꝙ: "Q",
                        Ɋ: "Q",
                        "Ⓡ": "R",
                        Ｒ: "R",
                        Ŕ: "R",
                        Ṙ: "R",
                        Ř: "R",
                        Ȑ: "R",
                        Ȓ: "R",
                        Ṛ: "R",
                        Ṝ: "R",
                        Ŗ: "R",
                        Ṟ: "R",
                        Ɍ: "R",
                        Ɽ: "R",
                        Ꝛ: "R",
                        Ꞧ: "R",
                        Ꞃ: "R",
                        "Ⓢ": "S",
                        Ｓ: "S",
                        ẞ: "S",
                        Ś: "S",
                        Ṥ: "S",
                        Ŝ: "S",
                        Ṡ: "S",
                        Š: "S",
                        Ṧ: "S",
                        Ṣ: "S",
                        Ṩ: "S",
                        Ș: "S",
                        Ş: "S",
                        Ȿ: "S",
                        Ꞩ: "S",
                        Ꞅ: "S",
                        "Ⓣ": "T",
                        Ｔ: "T",
                        Ṫ: "T",
                        Ť: "T",
                        Ṭ: "T",
                        Ț: "T",
                        Ţ: "T",
                        Ṱ: "T",
                        Ṯ: "T",
                        Ŧ: "T",
                        Ƭ: "T",
                        Ʈ: "T",
                        Ⱦ: "T",
                        Ꞇ: "T",
                        Ꜩ: "TZ",
                        "Ⓤ": "U",
                        Ｕ: "U",
                        Ù: "U",
                        Ú: "U",
                        Û: "U",
                        Ũ: "U",
                        Ṹ: "U",
                        Ū: "U",
                        Ṻ: "U",
                        Ŭ: "U",
                        Ü: "U",
                        Ǜ: "U",
                        Ǘ: "U",
                        Ǖ: "U",
                        Ǚ: "U",
                        Ủ: "U",
                        Ů: "U",
                        Ű: "U",
                        Ǔ: "U",
                        Ȕ: "U",
                        Ȗ: "U",
                        Ư: "U",
                        Ừ: "U",
                        Ứ: "U",
                        Ữ: "U",
                        Ử: "U",
                        Ự: "U",
                        Ụ: "U",
                        Ṳ: "U",
                        Ų: "U",
                        Ṷ: "U",
                        Ṵ: "U",
                        Ʉ: "U",
                        "Ⓥ": "V",
                        Ｖ: "V",
                        Ṽ: "V",
                        Ṿ: "V",
                        Ʋ: "V",
                        Ꝟ: "V",
                        Ʌ: "V",
                        Ꝡ: "VY",
                        "Ⓦ": "W",
                        Ｗ: "W",
                        Ẁ: "W",
                        Ẃ: "W",
                        Ŵ: "W",
                        Ẇ: "W",
                        Ẅ: "W",
                        Ẉ: "W",
                        Ⱳ: "W",
                        "Ⓧ": "X",
                        Ｘ: "X",
                        Ẋ: "X",
                        Ẍ: "X",
                        "Ⓨ": "Y",
                        Ｙ: "Y",
                        Ỳ: "Y",
                        Ý: "Y",
                        Ŷ: "Y",
                        Ỹ: "Y",
                        Ȳ: "Y",
                        Ẏ: "Y",
                        Ÿ: "Y",
                        Ỷ: "Y",
                        Ỵ: "Y",
                        Ƴ: "Y",
                        Ɏ: "Y",
                        Ỿ: "Y",
                        "Ⓩ": "Z",
                        Ｚ: "Z",
                        Ź: "Z",
                        Ẑ: "Z",
                        Ż: "Z",
                        Ž: "Z",
                        Ẓ: "Z",
                        Ẕ: "Z",
                        Ƶ: "Z",
                        Ȥ: "Z",
                        Ɀ: "Z",
                        Ⱬ: "Z",
                        Ꝣ: "Z",
                        "ⓐ": "a",
                        ａ: "a",
                        ẚ: "a",
                        à: "a",
                        á: "a",
                        â: "a",
                        ầ: "a",
                        ấ: "a",
                        ẫ: "a",
                        ẩ: "a",
                        ã: "a",
                        ā: "a",
                        ă: "a",
                        ằ: "a",
                        ắ: "a",
                        ẵ: "a",
                        ẳ: "a",
                        ȧ: "a",
                        ǡ: "a",
                        ä: "a",
                        ǟ: "a",
                        ả: "a",
                        å: "a",
                        ǻ: "a",
                        ǎ: "a",
                        ȁ: "a",
                        ȃ: "a",
                        ạ: "a",
                        ậ: "a",
                        ặ: "a",
                        ḁ: "a",
                        ą: "a",
                        ⱥ: "a",
                        ɐ: "a",
                        ꜳ: "aa",
                        æ: "ae",
                        ǽ: "ae",
                        ǣ: "ae",
                        ꜵ: "ao",
                        ꜷ: "au",
                        ꜹ: "av",
                        ꜻ: "av",
                        ꜽ: "ay",
                        "ⓑ": "b",
                        ｂ: "b",
                        ḃ: "b",
                        ḅ: "b",
                        ḇ: "b",
                        ƀ: "b",
                        ƃ: "b",
                        ɓ: "b",
                        "ⓒ": "c",
                        ｃ: "c",
                        ć: "c",
                        ĉ: "c",
                        ċ: "c",
                        č: "c",
                        ç: "c",
                        ḉ: "c",
                        ƈ: "c",
                        ȼ: "c",
                        ꜿ: "c",
                        ↄ: "c",
                        "ⓓ": "d",
                        ｄ: "d",
                        ḋ: "d",
                        ď: "d",
                        ḍ: "d",
                        ḑ: "d",
                        ḓ: "d",
                        ḏ: "d",
                        đ: "d",
                        ƌ: "d",
                        ɖ: "d",
                        ɗ: "d",
                        ꝺ: "d",
                        ǳ: "dz",
                        ǆ: "dz",
                        "ⓔ": "e",
                        ｅ: "e",
                        è: "e",
                        é: "e",
                        ê: "e",
                        ề: "e",
                        ế: "e",
                        ễ: "e",
                        ể: "e",
                        ẽ: "e",
                        ē: "e",
                        ḕ: "e",
                        ḗ: "e",
                        ĕ: "e",
                        ė: "e",
                        ë: "e",
                        ẻ: "e",
                        ě: "e",
                        ȅ: "e",
                        ȇ: "e",
                        ẹ: "e",
                        ệ: "e",
                        ȩ: "e",
                        ḝ: "e",
                        ę: "e",
                        ḙ: "e",
                        ḛ: "e",
                        ɇ: "e",
                        ɛ: "e",
                        ǝ: "e",
                        "ⓕ": "f",
                        ｆ: "f",
                        ḟ: "f",
                        ƒ: "f",
                        ꝼ: "f",
                        "ⓖ": "g",
                        ｇ: "g",
                        ǵ: "g",
                        ĝ: "g",
                        ḡ: "g",
                        ğ: "g",
                        ġ: "g",
                        ǧ: "g",
                        ģ: "g",
                        ǥ: "g",
                        ɠ: "g",
                        ꞡ: "g",
                        ᵹ: "g",
                        ꝿ: "g",
                        "ⓗ": "h",
                        ｈ: "h",
                        ĥ: "h",
                        ḣ: "h",
                        ḧ: "h",
                        ȟ: "h",
                        ḥ: "h",
                        ḩ: "h",
                        ḫ: "h",
                        ẖ: "h",
                        ħ: "h",
                        ⱨ: "h",
                        ⱶ: "h",
                        ɥ: "h",
                        ƕ: "hv",
                        "ⓘ": "i",
                        ｉ: "i",
                        ì: "i",
                        í: "i",
                        î: "i",
                        ĩ: "i",
                        ī: "i",
                        ĭ: "i",
                        ï: "i",
                        ḯ: "i",
                        ỉ: "i",
                        ǐ: "i",
                        ȉ: "i",
                        ȋ: "i",
                        ị: "i",
                        į: "i",
                        ḭ: "i",
                        ɨ: "i",
                        ı: "i",
                        "ⓙ": "j",
                        ｊ: "j",
                        ĵ: "j",
                        ǰ: "j",
                        ɉ: "j",
                        "ⓚ": "k",
                        ｋ: "k",
                        ḱ: "k",
                        ǩ: "k",
                        ḳ: "k",
                        ķ: "k",
                        ḵ: "k",
                        ƙ: "k",
                        ⱪ: "k",
                        ꝁ: "k",
                        ꝃ: "k",
                        ꝅ: "k",
                        ꞣ: "k",
                        "ⓛ": "l",
                        ｌ: "l",
                        ŀ: "l",
                        ĺ: "l",
                        ľ: "l",
                        ḷ: "l",
                        ḹ: "l",
                        ļ: "l",
                        ḽ: "l",
                        ḻ: "l",
                        ſ: "l",
                        ł: "l",
                        ƚ: "l",
                        ɫ: "l",
                        ⱡ: "l",
                        ꝉ: "l",
                        ꞁ: "l",
                        ꝇ: "l",
                        ǉ: "lj",
                        "ⓜ": "m",
                        ｍ: "m",
                        ḿ: "m",
                        ṁ: "m",
                        ṃ: "m",
                        ɱ: "m",
                        ɯ: "m",
                        "ⓝ": "n",
                        ｎ: "n",
                        ǹ: "n",
                        ń: "n",
                        ñ: "n",
                        ṅ: "n",
                        ň: "n",
                        ṇ: "n",
                        ņ: "n",
                        ṋ: "n",
                        ṉ: "n",
                        ƞ: "n",
                        ɲ: "n",
                        ŉ: "n",
                        ꞑ: "n",
                        ꞥ: "n",
                        ǌ: "nj",
                        "ⓞ": "o",
                        ｏ: "o",
                        ò: "o",
                        ó: "o",
                        ô: "o",
                        ồ: "o",
                        ố: "o",
                        ỗ: "o",
                        ổ: "o",
                        õ: "o",
                        ṍ: "o",
                        ȭ: "o",
                        ṏ: "o",
                        ō: "o",
                        ṑ: "o",
                        ṓ: "o",
                        ŏ: "o",
                        ȯ: "o",
                        ȱ: "o",
                        ö: "o",
                        ȫ: "o",
                        ỏ: "o",
                        ő: "o",
                        ǒ: "o",
                        ȍ: "o",
                        ȏ: "o",
                        ơ: "o",
                        ờ: "o",
                        ớ: "o",
                        ỡ: "o",
                        ở: "o",
                        ợ: "o",
                        ọ: "o",
                        ộ: "o",
                        ǫ: "o",
                        ǭ: "o",
                        ø: "o",
                        ǿ: "o",
                        ɔ: "o",
                        ꝋ: "o",
                        ꝍ: "o",
                        ɵ: "o",
                        œ: "oe",
                        ƣ: "oi",
                        ȣ: "ou",
                        ꝏ: "oo",
                        "ⓟ": "p",
                        ｐ: "p",
                        ṕ: "p",
                        ṗ: "p",
                        ƥ: "p",
                        ᵽ: "p",
                        ꝑ: "p",
                        ꝓ: "p",
                        ꝕ: "p",
                        "ⓠ": "q",
                        ｑ: "q",
                        ɋ: "q",
                        ꝗ: "q",
                        ꝙ: "q",
                        "ⓡ": "r",
                        ｒ: "r",
                        ŕ: "r",
                        ṙ: "r",
                        ř: "r",
                        ȑ: "r",
                        ȓ: "r",
                        ṛ: "r",
                        ṝ: "r",
                        ŗ: "r",
                        ṟ: "r",
                        ɍ: "r",
                        ɽ: "r",
                        ꝛ: "r",
                        ꞧ: "r",
                        ꞃ: "r",
                        "ⓢ": "s",
                        ｓ: "s",
                        ß: "s",
                        ś: "s",
                        ṥ: "s",
                        ŝ: "s",
                        ṡ: "s",
                        š: "s",
                        ṧ: "s",
                        ṣ: "s",
                        ṩ: "s",
                        ș: "s",
                        ş: "s",
                        ȿ: "s",
                        ꞩ: "s",
                        ꞅ: "s",
                        ẛ: "s",
                        "ⓣ": "t",
                        ｔ: "t",
                        ṫ: "t",
                        ẗ: "t",
                        ť: "t",
                        ṭ: "t",
                        ț: "t",
                        ţ: "t",
                        ṱ: "t",
                        ṯ: "t",
                        ŧ: "t",
                        ƭ: "t",
                        ʈ: "t",
                        ⱦ: "t",
                        ꞇ: "t",
                        ꜩ: "tz",
                        "ⓤ": "u",
                        ｕ: "u",
                        ù: "u",
                        ú: "u",
                        û: "u",
                        ũ: "u",
                        ṹ: "u",
                        ū: "u",
                        ṻ: "u",
                        ŭ: "u",
                        ü: "u",
                        ǜ: "u",
                        ǘ: "u",
                        ǖ: "u",
                        ǚ: "u",
                        ủ: "u",
                        ů: "u",
                        ű: "u",
                        ǔ: "u",
                        ȕ: "u",
                        ȗ: "u",
                        ư: "u",
                        ừ: "u",
                        ứ: "u",
                        ữ: "u",
                        ử: "u",
                        ự: "u",
                        ụ: "u",
                        ṳ: "u",
                        ų: "u",
                        ṷ: "u",
                        ṵ: "u",
                        ʉ: "u",
                        "ⓥ": "v",
                        ｖ: "v",
                        ṽ: "v",
                        ṿ: "v",
                        ʋ: "v",
                        ꝟ: "v",
                        ʌ: "v",
                        ꝡ: "vy",
                        "ⓦ": "w",
                        ｗ: "w",
                        ẁ: "w",
                        ẃ: "w",
                        ŵ: "w",
                        ẇ: "w",
                        ẅ: "w",
                        ẘ: "w",
                        ẉ: "w",
                        ⱳ: "w",
                        "ⓧ": "x",
                        ｘ: "x",
                        ẋ: "x",
                        ẍ: "x",
                        "ⓨ": "y",
                        ｙ: "y",
                        ỳ: "y",
                        ý: "y",
                        ŷ: "y",
                        ỹ: "y",
                        ȳ: "y",
                        ẏ: "y",
                        ÿ: "y",
                        ỷ: "y",
                        ẙ: "y",
                        ỵ: "y",
                        ƴ: "y",
                        ɏ: "y",
                        ỿ: "y",
                        "ⓩ": "z",
                        ｚ: "z",
                        ź: "z",
                        ẑ: "z",
                        ż: "z",
                        ž: "z",
                        ẓ: "z",
                        ẕ: "z",
                        ƶ: "z",
                        ȥ: "z",
                        ɀ: "z",
                        ⱬ: "z",
                        ꝣ: "z",
                        Ά: "Α",
                        Έ: "Ε",
                        Ή: "Η",
                        Ί: "Ι",
                        Ϊ: "Ι",
                        Ό: "Ο",
                        Ύ: "Υ",
                        Ϋ: "Υ",
                        Ώ: "Ω",
                        ά: "α",
                        έ: "ε",
                        ή: "η",
                        ί: "ι",
                        ϊ: "ι",
                        ΐ: "ι",
                        ό: "ο",
                        ύ: "υ",
                        ϋ: "υ",
                        ΰ: "υ",
                        ώ: "ω",
                        ς: "σ",
                        "’": "'",
                      };
                    }),
                    t.define("select2/data/base", ["../utils"], function (e) {
                      function t(e, n) {
                        t.__super__.constructor.call(this);
                      }
                      return (
                        e.Extend(t, e.Observable),
                        (t.prototype.current = function (e) {
                          throw new Error(
                            "The `current` method must be defined in child classes."
                          );
                        }),
                        (t.prototype.query = function (e, t) {
                          throw new Error(
                            "The `query` method must be defined in child classes."
                          );
                        }),
                        (t.prototype.bind = function (e, t) {}),
                        (t.prototype.destroy = function () {}),
                        (t.prototype.generateResultId = function (t, n) {
                          var i = t.id + "-result-";
                          return (
                            (i += e.generateChars(4)),
                            null != n.id
                              ? (i += "-" + n.id.toString())
                              : (i += "-" + e.generateChars(4)),
                            i
                          );
                        }),
                        t
                      );
                    }),
                    t.define(
                      "select2/data/select",
                      ["./base", "../utils", "jquery"],
                      function (e, t, n) {
                        function i(e, t) {
                          (this.$element = e),
                            (this.options = t),
                            i.__super__.constructor.call(this);
                        }
                        return (
                          t.Extend(i, e),
                          (i.prototype.current = function (e) {
                            var t = this,
                              i = Array.prototype.map.call(
                                this.$element[0].querySelectorAll(":checked"),
                                function (e) {
                                  return t.item(n(e));
                                }
                              );
                            e(i);
                          }),
                          (i.prototype.select = function (e) {
                            var t = this;
                            if (
                              ((e.selected = !0),
                              null != e.element &&
                                "option" === e.element.tagName.toLowerCase())
                            )
                              return (
                                (e.element.selected = !0),
                                void this.$element
                                  .trigger("input")
                                  .trigger("change")
                              );
                            if (this.$element.prop("multiple"))
                              this.current(function (n) {
                                var i = [];
                                (e = [e]).push.apply(e, n);
                                for (var r = 0; r < e.length; r++) {
                                  var o = e[r].id;
                                  -1 === i.indexOf(o) && i.push(o);
                                }
                                t.$element.val(i),
                                  t.$element.trigger("input").trigger("change");
                              });
                            else {
                              var n = e.id;
                              this.$element.val(n),
                                this.$element
                                  .trigger("input")
                                  .trigger("change");
                            }
                          }),
                          (i.prototype.unselect = function (e) {
                            var t = this;
                            if (this.$element.prop("multiple")) {
                              if (
                                ((e.selected = !1),
                                null != e.element &&
                                  "option" === e.element.tagName.toLowerCase())
                              )
                                return (
                                  (e.element.selected = !1),
                                  void this.$element
                                    .trigger("input")
                                    .trigger("change")
                                );
                              this.current(function (n) {
                                for (var i = [], r = 0; r < n.length; r++) {
                                  var o = n[r].id;
                                  o !== e.id &&
                                    -1 === i.indexOf(o) &&
                                    i.push(o);
                                }
                                t.$element.val(i),
                                  t.$element.trigger("input").trigger("change");
                              });
                            }
                          }),
                          (i.prototype.bind = function (e, t) {
                            var n = this;
                            (this.container = e),
                              e.on("select", function (e) {
                                n.select(e.data);
                              }),
                              e.on("unselect", function (e) {
                                n.unselect(e.data);
                              });
                          }),
                          (i.prototype.destroy = function () {
                            this.$element.find("*").each(function () {
                              t.RemoveData(this);
                            });
                          }),
                          (i.prototype.query = function (e, t) {
                            var i = [],
                              r = this,
                              o = this.$element.children();
                            o.each(function () {
                              if (
                                "option" === this.tagName.toLowerCase() ||
                                "optgroup" === this.tagName.toLowerCase()
                              ) {
                                var t = n(this),
                                  o = r.item(t),
                                  s = r.matches(e, o);
                                null !== s && i.push(s);
                              }
                            }),
                              t({ results: i });
                          }),
                          (i.prototype.addOptions = function (e) {
                            this.$element.append(e);
                          }),
                          (i.prototype.option = function (e) {
                            var i;
                            e.children
                              ? ((i =
                                  document.createElement("optgroup")).label =
                                  e.text)
                              : void 0 !==
                                (i = document.createElement("option"))
                                  .textContent
                              ? (i.textContent = e.text)
                              : (i.innerText = e.text),
                              void 0 !== e.id && (i.value = e.id),
                              e.disabled && (i.disabled = !0),
                              e.selected && (i.selected = !0),
                              e.title && (i.title = e.title);
                            var r = this._normalizeItem(e);
                            return (
                              (r.element = i), t.StoreData(i, "data", r), n(i)
                            );
                          }),
                          (i.prototype.item = function (e) {
                            var i = {};
                            if (null != (i = t.GetData(e[0], "data"))) return i;
                            var r = e[0];
                            if ("option" === r.tagName.toLowerCase())
                              i = {
                                id: e.val(),
                                text: e.text(),
                                disabled: e.prop("disabled"),
                                selected: e.prop("selected"),
                                title: e.prop("title"),
                              };
                            else if ("optgroup" === r.tagName.toLowerCase()) {
                              i = {
                                text: e.prop("label"),
                                children: [],
                                title: e.prop("title"),
                              };
                              for (
                                var o = e.children("option"), s = [], a = 0;
                                a < o.length;
                                a++
                              ) {
                                var l = n(o[a]),
                                  c = this.item(l);
                                s.push(c);
                              }
                              i.children = s;
                            }
                            return (
                              ((i = this._normalizeItem(i)).element = e[0]),
                              t.StoreData(e[0], "data", i),
                              i
                            );
                          }),
                          (i.prototype._normalizeItem = function (e) {
                            return (
                              e !== Object(e) && (e = { id: e, text: e }),
                              null != (e = n.extend({}, { text: "" }, e)).id &&
                                (e.id = e.id.toString()),
                              null != e.text && (e.text = e.text.toString()),
                              null == e._resultId &&
                                e.id &&
                                null != this.container &&
                                (e._resultId = this.generateResultId(
                                  this.container,
                                  e
                                )),
                              n.extend({}, { selected: !1, disabled: !1 }, e)
                            );
                          }),
                          (i.prototype.matches = function (e, t) {
                            var n = this.options.get("matcher");
                            return n(e, t);
                          }),
                          i
                        );
                      }
                    ),
                    t.define(
                      "select2/data/array",
                      ["./select", "../utils", "jquery"],
                      function (e, t, n) {
                        function i(e, t) {
                          (this._dataToConvert = t.get("data") || []),
                            i.__super__.constructor.call(this, e, t);
                        }
                        return (
                          t.Extend(i, e),
                          (i.prototype.bind = function (e, t) {
                            i.__super__.bind.call(this, e, t),
                              this.addOptions(
                                this.convertToOptions(this._dataToConvert)
                              );
                          }),
                          (i.prototype.select = function (e) {
                            var t = this.$element
                              .find("option")
                              .filter(function (t, n) {
                                return n.value == e.id.toString();
                              });
                            0 === t.length &&
                              ((t = this.option(e)), this.addOptions(t)),
                              i.__super__.select.call(this, e);
                          }),
                          (i.prototype.convertToOptions = function (e) {
                            var t = this,
                              i = this.$element.find("option"),
                              r = i
                                .map(function () {
                                  return t.item(n(this)).id;
                                })
                                .get(),
                              o = [];
                            function s(e) {
                              return function () {
                                return n(this).val() == e.id;
                              };
                            }
                            for (var a = 0; a < e.length; a++) {
                              var l = this._normalizeItem(e[a]);
                              if (r.indexOf(l.id) >= 0) {
                                var c = i.filter(s(l)),
                                  u = this.item(c),
                                  p = n.extend(!0, {}, l, u),
                                  d = this.option(p);
                                c.replaceWith(d);
                              }
                              else {
                                var h = this.option(l);
                                if (l.children) {
                                  var f = this.convertToOptions(l.children);
                                  h.append(f);
                                }
                                o.push(h);
                              }
                            }
                            return o;
                          }),
                          i
                        );
                      }
                    ),
                    t.define(
                      "select2/data/ajax",
                      ["./array", "../utils", "jquery"],
                      function (e, t, n) {
                        function i(e, t) {
                          (this.ajaxOptions = this._applyDefaults(
                            t.get("ajax")
                          )),
                            null != this.ajaxOptions.processResults &&
                              (this.processResults =
                                this.ajaxOptions.processResults),
                            i.__super__.constructor.call(this, e, t);
                        }
                        return (
                          t.Extend(i, e),
                          (i.prototype._applyDefaults = function (e) {
                            var t = {
                              data: function (e) {
                                return n.extend({}, e, { q: e.term });
                              },
                              transport: function (e, t, i) {
                                var r = n.ajax(e);
                                return r.then(t), r.fail(i), r;
                              },
                            };
                            return n.extend({}, t, e, !0);
                          }),
                          (i.prototype.processResults = function (e) {
                            return e;
                          }),
                          (i.prototype.query = function (e, t) {
                            var i = this;
                            null != this._request &&
                              ("function" == typeof this._request.abort &&
                                this._request.abort(),
                              (this._request = null));
                            var r = n.extend({ type: "GET" }, this.ajaxOptions);
                            function o() {
                              var n = r.transport(
                                r,
                                function (n) {
                                  var r = i.processResults(n, e);
                                  i.options.get("debug") &&
                                    window.console &&
                                    console.error &&
                                    (!r ||
                                      !r.results ||
                                      Array.isArray(r.results)),
                                    t(r);
                                },
                                function () {
                                  ("status" in n &&
                                    (0 === n.status || "0" === n.status)) ||
                                    i.trigger("results:message", {
                                      message: "errorLoading",
                                    });
                                }
                              );
                              i._request = n;
                            }
                            "function" == typeof r.url &&
                              (r.url = r.url.call(this.$element, e)),
                              "function" == typeof r.data &&
                                (r.data = r.data.call(this.$element, e)),
                              this.ajaxOptions.delay && null != e.term
                                ? (this._queryTimeout &&
                                    window.clearTimeout(this._queryTimeout),
                                  (this._queryTimeout = window.setTimeout(
                                    o,
                                    this.ajaxOptions.delay
                                  )))
                                : o();
                          }),
                          i
                        );
                      }
                    ),
                    t.define("select2/data/tags", ["jquery"], function (e) {
                      function t(e, t, n) {
                        var i = n.get("tags"),
                          r = n.get("createTag");
                        void 0 !== r && (this.createTag = r);
                        var o = n.get("insertTag");
                        if (
                          (void 0 !== o && (this.insertTag = o),
                          e.call(this, t, n),
                          Array.isArray(i))
                        )
                          for (var s = 0; s < i.length; s++) {
                            var a = i[s],
                              l = this._normalizeItem(a),
                              c = this.option(l);
                            this.$element.append(c);
                          }
                      }
                      return (
                        (t.prototype.query = function (e, t, n) {
                          var i = this;
                          this._removeOldTags(),
                            null != t.term && null == t.page
                              ? e.call(this, t, function e(r, o) {
                                  for (
                                    var s = r.results, a = 0;
                                    a < s.length;
                                    a++
                                  ) {
                                    var l = s[a],
                                      c =
                                        null != l.children &&
                                        !e({ results: l.children }, !0),
                                      u = (l.text || "").toUpperCase(),
                                      p = (t.term || "").toUpperCase(),
                                      d = u === p;
                                    if (d || c)
                                      return !o && ((r.data = s), void n(r));
                                  }
                                  if (o) return !0;
                                  var h = i.createTag(t);
                                  if (null != h) {
                                    var f = i.option(h);
                                    f.attr("data-select2-tag", "true"),
                                      i.addOptions([f]),
                                      i.insertTag(s, h);
                                  }
                                  (r.results = s), n(r);
                                })
                              : e.call(this, t, n);
                        }),
                        (t.prototype.createTag = function (e, t) {
                          if (null == t.term) return null;
                          var n = t.term.trim();
                          return "" === n ? null : { id: n, text: n };
                        }),
                        (t.prototype.insertTag = function (e, t, n) {
                          t.unshift(n);
                        }),
                        (t.prototype._removeOldTags = function (t) {
                          var n = this.$element.find(
                            "option[data-select2-tag]"
                          );
                          n.each(function () {
                            this.selected || e(this).remove();
                          });
                        }),
                        t
                      );
                    }),
                    t.define(
                      "select2/data/tokenizer",
                      ["jquery"],
                      function (e) {
                        function t(e, t, n) {
                          var i = n.get("tokenizer");
                          void 0 !== i && (this.tokenizer = i),
                            e.call(this, t, n);
                        }
                        return (
                          (t.prototype.bind = function (e, t, n) {
                            e.call(this, t, n),
                              (this.$search =
                                t.dropdown.$search ||
                                t.selection.$search ||
                                n.find(".select2-search__field"));
                          }),
                          (t.prototype.query = function (t, n, i) {
                            var r = this;
                            n.term = n.term || "";
                            var o = this.tokenizer(
                              n,
                              this.options,
                              function (t) {
                                var n = r._normalizeItem(t);
                                if (
                                  !r.$element
                                    .find("option")
                                    .filter(function () {
                                      return e(this).val() === n.id;
                                    }).length
                                ) {
                                  var i = r.option(n);
                                  i.attr("data-select2-tag", !0),
                                    r._removeOldTags(),
                                    r.addOptions([i]);
                                }
                                !(function (e) {
                                  r.trigger("select", { data: e });
                                })(n);
                              }
                            );
                            o.term !== n.term &&
                              (this.$search.length &&
                                (this.$search.val(o.term),
                                this.$search.trigger("focus")),
                              (n.term = o.term)),
                              t.call(this, n, i);
                          }),
                          (t.prototype.tokenizer = function (t, n, i, r) {
                            for (
                              var o = i.get("tokenSeparators") || [],
                                s = n.term,
                                a = 0,
                                l =
                                  this.createTag ||
                                  function (e) {
                                    return { id: e.term, text: e.term };
                                  };
                              a < s.length;

                            ) {
                              var c = s[a];
                              if (-1 !== o.indexOf(c)) {
                                var u = s.substr(0, a),
                                  p = e.extend({}, n, { term: u }),
                                  d = l(p);
                                null != d
                                  ? (r(d), (s = s.substr(a + 1) || ""), (a = 0))
                                  : a++;
                              }
                              else a++;
                            }
                            return { term: s };
                          }),
                          t
                        );
                      }
                    ),
                    t.define(
                      "select2/data/minimumInputLength",
                      [],
                      function () {
                        function e(e, t, n) {
                          (this.minimumInputLength =
                            n.get("minimumInputLength")),
                            e.call(this, t, n);
                        }
                        return (
                          (e.prototype.query = function (e, t, n) {
                            (t.term = t.term || ""),
                              t.term.length < this.minimumInputLength
                                ? this.trigger("results:message", {
                                    message: "inputTooShort",
                                    args: {
                                      minimum: this.minimumInputLength,
                                      input: t.term,
                                      params: t,
                                    },
                                  })
                                : e.call(this, t, n);
                          }),
                          e
                        );
                      }
                    ),
                    t.define(
                      "select2/data/maximumInputLength",
                      [],
                      function () {
                        function e(e, t, n) {
                          (this.maximumInputLength =
                            n.get("maximumInputLength")),
                            e.call(this, t, n);
                        }
                        return (
                          (e.prototype.query = function (e, t, n) {
                            (t.term = t.term || ""),
                              this.maximumInputLength > 0 &&
                              t.term.length > this.maximumInputLength
                                ? this.trigger("results:message", {
                                    message: "inputTooLong",
                                    args: {
                                      maximum: this.maximumInputLength,
                                      input: t.term,
                                      params: t,
                                    },
                                  })
                                : e.call(this, t, n);
                          }),
                          e
                        );
                      }
                    ),
                    t.define(
                      "select2/data/maximumSelectionLength",
                      [],
                      function () {
                        function e(e, t, n) {
                          (this.maximumSelectionLength = n.get(
                            "maximumSelectionLength"
                          )),
                            e.call(this, t, n);
                        }
                        return (
                          (e.prototype.bind = function (e, t, n) {
                            var i = this;
                            e.call(this, t, n),
                              t.on("select", function () {
                                i._checkIfMaximumSelected();
                              });
                          }),
                          (e.prototype.query = function (e, t, n) {
                            var i = this;
                            this._checkIfMaximumSelected(function () {
                              e.call(i, t, n);
                            });
                          }),
                          (e.prototype._checkIfMaximumSelected = function (
                            e,
                            t
                          ) {
                            var n = this;
                            this.current(function (e) {
                              var i = null != e ? e.length : 0;
                              n.maximumSelectionLength > 0 &&
                              i >= n.maximumSelectionLength
                                ? n.trigger("results:message", {
                                    message: "maximumSelected",
                                    args: { maximum: n.maximumSelectionLength },
                                  })
                                : t && t();
                            });
                          }),
                          e
                        );
                      }
                    ),
                    t.define(
                      "select2/dropdown",
                      ["jquery", "./utils"],
                      function (e, t) {
                        function n(e, t) {
                          (this.$element = e),
                            (this.options = t),
                            n.__super__.constructor.call(this);
                        }
                        return (
                          t.Extend(n, t.Observable),
                          (n.prototype.render = function () {
                            var t = e(
                              '<span class="select2-dropdown"><span class="select2-results"></span></span>'
                            );
                            return (
                              t.attr("dir", this.options.get("dir")),
                              (this.$dropdown = t),
                              t
                            );
                          }),
                          (n.prototype.bind = function () {}),
                          (n.prototype.position = function (e, t) {}),
                          (n.prototype.destroy = function () {
                            this.$dropdown.remove();
                          }),
                          n
                        );
                      }
                    ),
                    t.define(
                      "select2/dropdown/search",
                      ["jquery"],
                      function (e) {
                        function t() {}
                        return (
                          (t.prototype.render = function (t) {
                            var n = t.call(this),
                              i = this.options
                                .get("translations")
                                .get("search"),
                              r = e(
                                '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>'
                              );
                            return (
                              (this.$searchContainer = r),
                              (this.$search = r.find("input")),
                              this.$search.prop(
                                "autocomplete",
                                this.options.get("autocomplete")
                              ),
                              this.$search.attr("aria-label", i()),
                              n.prepend(r),
                              n
                            );
                          }),
                          (t.prototype.bind = function (t, n, i) {
                            var r = this,
                              o = n.id + "-results";
                            t.call(this, n, i),
                              this.$search.on("keydown", function (e) {
                                r.trigger("keypress", e),
                                  (r._keyUpPrevented = e.isDefaultPrevented());
                              }),
                              this.$search.on("input", function (t) {
                                e(this).off("keyup");
                              }),
                              this.$search.on("keyup input", function (e) {
                                r.handleSearch(e);
                              }),
                              n.on("open", function () {
                                r.$search.attr("tabindex", 0),
                                  r.$search.attr("aria-controls", o),
                                  r.$search.trigger("focus"),
                                  window.setTimeout(function () {
                                    r.$search.trigger("focus");
                                  }, 0);
                              }),
                              n.on("close", function () {
                                r.$search.attr("tabindex", -1),
                                  r.$search.removeAttr("aria-controls"),
                                  r.$search.removeAttr("aria-activedescendant"),
                                  r.$search.val(""),
                                  r.$search.trigger("blur");
                              }),
                              n.on("focus", function () {
                                n.isOpen() || r.$search.trigger("focus");
                              }),
                              n.on("results:all", function (e) {
                                if (
                                  null == e.query.term ||
                                  "" === e.query.term
                                ) {
                                  var t = r.showSearch(e);
                                  t
                                    ? r.$searchContainer[0].classList.remove(
                                        "select2-search--hide"
                                      )
                                    : r.$searchContainer[0].classList.add(
                                        "select2-search--hide"
                                      );
                                }
                              }),
                              n.on("results:focus", function (e) {
                                e.data._resultId
                                  ? r.$search.attr(
                                      "aria-activedescendant",
                                      e.data._resultId
                                    )
                                  : r.$search.removeAttr(
                                      "aria-activedescendant"
                                    );
                              });
                          }),
                          (t.prototype.handleSearch = function (e) {
                            if (!this._keyUpPrevented) {
                              var t = this.$search.val();
                              this.trigger("query", { term: t });
                            }
                            this._keyUpPrevented = !1;
                          }),
                          (t.prototype.showSearch = function (e, t) {
                            return !0;
                          }),
                          t
                        );
                      }
                    ),
                    t.define(
                      "select2/dropdown/hidePlaceholder",
                      [],
                      function () {
                        function e(e, t, n, i) {
                          (this.placeholder = this.normalizePlaceholder(
                            n.get("placeholder")
                          )),
                            e.call(this, t, n, i);
                        }
                        return (
                          (e.prototype.append = function (e, t) {
                            (t.results = this.removePlaceholder(t.results)),
                              e.call(this, t);
                          }),
                          (e.prototype.normalizePlaceholder = function (e, t) {
                            return (
                              "string" == typeof t && (t = { id: "", text: t }),
                              t
                            );
                          }),
                          (e.prototype.removePlaceholder = function (e, t) {
                            for (
                              var n = t.slice(0), i = t.length - 1;
                              i >= 0;
                              i--
                            ) {
                              var r = t[i];
                              this.placeholder.id === r.id && n.splice(i, 1);
                            }
                            return n;
                          }),
                          e
                        );
                      }
                    ),
                    t.define(
                      "select2/dropdown/infiniteScroll",
                      ["jquery"],
                      function (e) {
                        function t(e, t, n, i) {
                          (this.lastParams = {}),
                            e.call(this, t, n, i),
                            (this.$loadingMore = this.createLoadingMore()),
                            (this.loading = !1);
                        }
                        return (
                          (t.prototype.append = function (e, t) {
                            this.$loadingMore.remove(),
                              (this.loading = !1),
                              e.call(this, t),
                              this.showLoadingMore(t) &&
                                (this.$results.append(this.$loadingMore),
                                this.loadMoreIfNeeded());
                          }),
                          (t.prototype.bind = function (e, t, n) {
                            var i = this;
                            e.call(this, t, n),
                              t.on("query", function (e) {
                                (i.lastParams = e), (i.loading = !0);
                              }),
                              t.on("query:append", function (e) {
                                (i.lastParams = e), (i.loading = !0);
                              }),
                              this.$results.on(
                                "scroll",
                                this.loadMoreIfNeeded.bind(this)
                              );
                          }),
                          (t.prototype.loadMoreIfNeeded = function () {
                            var t = e.contains(
                              document.documentElement,
                              this.$loadingMore[0]
                            );
                            if (!this.loading && t) {
                              var n =
                                  this.$results.offset().top +
                                  this.$results.outerHeight(!1),
                                i =
                                  this.$loadingMore.offset().top +
                                  this.$loadingMore.outerHeight(!1);
                              n + 50 >= i && this.loadMore();
                            }
                          }),
                          (t.prototype.loadMore = function () {
                            this.loading = !0;
                            var t = e.extend({}, { page: 1 }, this.lastParams);
                            t.page++, this.trigger("query:append", t);
                          }),
                          (t.prototype.showLoadingMore = function (e, t) {
                            return t.pagination && t.pagination.more;
                          }),
                          (t.prototype.createLoadingMore = function () {
                            var t = e(
                                '<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'
                              ),
                              n = this.options
                                .get("translations")
                                .get("loadingMore");
                            return t.html(n(this.lastParams)), t;
                          }),
                          t
                        );
                      }
                    ),
                    t.define(
                      "select2/dropdown/attachBody",
                      ["jquery", "../utils"],
                      function (e, t) {
                        function n(t, n, i) {
                          (this.$dropdownParent = e(
                            i.get("dropdownParent") || document.body
                          )),
                            t.call(this, n, i);
                        }
                        return (
                          (n.prototype.bind = function (e, t, n) {
                            var i = this;
                            e.call(this, t, n),
                              t.on("open", function () {
                                i._showDropdown(),
                                  i._attachPositioningHandler(t),
                                  i._bindContainerResultHandlers(t);
                              }),
                              t.on("close", function () {
                                i._hideDropdown(),
                                  i._detachPositioningHandler(t);
                              }),
                              this.$dropdownContainer.on(
                                "mousedown",
                                function (e) {
                                  e.stopPropagation();
                                }
                              );
                          }),
                          (n.prototype.destroy = function (e) {
                            e.call(this), this.$dropdownContainer.remove();
                          }),
                          (n.prototype.position = function (e, t, n) {
                            t.attr("class", n.attr("class")),
                              t[0].classList.remove("select2"),
                              t[0].classList.add("select2-container--open"),
                              t.css({ position: "absolute", top: -999999 }),
                              (this.$container = n);
                          }),
                          (n.prototype.render = function (t) {
                            var n = e("<span></span>"),
                              i = t.call(this);
                            return (
                              n.append(i), (this.$dropdownContainer = n), n
                            );
                          }),
                          (n.prototype._hideDropdown = function (e) {
                            this.$dropdownContainer.detach();
                          }),
                          (n.prototype._bindContainerResultHandlers = function (
                            e,
                            t
                          ) {
                            if (!this._containerResultsHandlersBound) {
                              var n = this;
                              t.on("results:all", function () {
                                n._positionDropdown(), n._resizeDropdown();
                              }),
                                t.on("results:append", function () {
                                  n._positionDropdown(), n._resizeDropdown();
                                }),
                                t.on("results:message", function () {
                                  n._positionDropdown(), n._resizeDropdown();
                                }),
                                t.on("select", function () {
                                  n._positionDropdown(), n._resizeDropdown();
                                }),
                                t.on("unselect", function () {
                                  n._positionDropdown(), n._resizeDropdown();
                                }),
                                (this._containerResultsHandlersBound = !0);
                            }
                          }),
                          (n.prototype._attachPositioningHandler = function (
                            n,
                            i
                          ) {
                            var r = this,
                              o = "scroll.select2." + i.id,
                              s = "resize.select2." + i.id,
                              a = "orientationchange.select2." + i.id,
                              l = this.$container.parents().filter(t.hasScroll);
                            l.each(function () {
                              t.StoreData(this, "select2-scroll-position", {
                                x: e(this).scrollLeft(),
                                y: e(this).scrollTop(),
                              });
                            }),
                              l.on(o, function (n) {
                                var i = t.GetData(
                                  this,
                                  "select2-scroll-position"
                                );
                                e(this).scrollTop(i.y);
                              }),
                              e(window).on(o + " " + s + " " + a, function (e) {
                                r._positionDropdown(), r._resizeDropdown();
                              });
                          }),
                          (n.prototype._detachPositioningHandler = function (
                            n,
                            i
                          ) {
                            var r = "scroll.select2." + i.id,
                              o = "resize.select2." + i.id,
                              s = "orientationchange.select2." + i.id,
                              a = this.$container.parents().filter(t.hasScroll);
                            a.off(r), e(window).off(r + " " + o + " " + s);
                          }),
                          (n.prototype._positionDropdown = function () {
                            var t = e(window),
                              n = this.$dropdown[0].classList.contains(
                                "select2-dropdown--above"
                              ),
                              i = this.$dropdown[0].classList.contains(
                                "select2-dropdown--below"
                              ),
                              r = null,
                              o = this.$container.offset();
                            o.bottom = o.top + this.$container.outerHeight(!1);
                            var s = { height: this.$container.outerHeight(!1) };
                            (s.top = o.top), (s.bottom = o.top + s.height);
                            var a = { height: this.$dropdown.outerHeight(!1) },
                              l = {
                                top: t.scrollTop(),
                                bottom: t.scrollTop() + t.height(),
                              },
                              c = l.top < o.top - a.height,
                              u = l.bottom > o.bottom + a.height,
                              p = { left: o.left, top: s.bottom },
                              d = this.$dropdownParent;
                            "static" === d.css("position") &&
                              (d = d.offsetParent());
                            var h = { top: 0, left: 0 };
                            (e.contains(document.body, d[0]) ||
                              d[0].isConnected) &&
                              (h = d.offset()),
                              (p.top -= h.top),
                              (p.left -= h.left),
                              n || i || (r = "below"),
                              u || !c || n
                                ? !c && u && n && (r = "below")
                                : (r = "above"),
                              ("above" == r || (n && "below" !== r)) &&
                                (p.top = s.top - h.top - a.height),
                              null != r &&
                                (this.$dropdown[0].classList.remove(
                                  "select2-dropdown--below"
                                ),
                                this.$dropdown[0].classList.remove(
                                  "select2-dropdown--above"
                                ),
                                this.$dropdown[0].classList.add(
                                  "select2-dropdown--" + r
                                ),
                                this.$container[0].classList.remove(
                                  "select2-container--below"
                                ),
                                this.$container[0].classList.remove(
                                  "select2-container--above"
                                ),
                                this.$container[0].classList.add(
                                  "select2-container--" + r
                                )),
                              this.$dropdownContainer.css(p);
                          }),
                          (n.prototype._resizeDropdown = function () {
                            var e = {
                              width: this.$container.outerWidth(!1) + "px",
                            };
                            this.options.get("dropdownAutoWidth") &&
                              ((e.minWidth = e.width),
                              (e.position = "relative"),
                              (e.width = "auto")),
                              this.$dropdown.css(e);
                          }),
                          (n.prototype._showDropdown = function (e) {
                            this.$dropdownContainer.appendTo(
                              this.$dropdownParent
                            ),
                              this._positionDropdown(),
                              this._resizeDropdown();
                          }),
                          n
                        );
                      }
                    ),
                    t.define(
                      "select2/dropdown/minimumResultsForSearch",
                      [],
                      function () {
                        function e(e, t, n, i) {
                          (this.minimumResultsForSearch = n.get(
                            "minimumResultsForSearch"
                          )),
                            this.minimumResultsForSearch < 0 &&
                              (this.minimumResultsForSearch = 1 / 0),
                            e.call(this, t, n, i);
                        }
                        return (
                          (e.prototype.showSearch = function (e, t) {
                            return (
                              !(
                                (function e(t) {
                                  for (var n = 0, i = 0; i < t.length; i++) {
                                    var r = t[i];
                                    r.children ? (n += e(r.children)) : n++;
                                  }
                                  return n;
                                })(t.data.results) <
                                this.minimumResultsForSearch
                              ) && e.call(this, t)
                            );
                          }),
                          e
                        );
                      }
                    ),
                    t.define(
                      "select2/dropdown/selectOnClose",
                      ["../utils"],
                      function (e) {
                        function t() {}
                        return (
                          (t.prototype.bind = function (e, t, n) {
                            var i = this;
                            e.call(this, t, n),
                              t.on("close", function (e) {
                                i._handleSelectOnClose(e);
                              });
                          }),
                          (t.prototype._handleSelectOnClose = function (t, n) {
                            if (n && null != n.originalSelect2Event) {
                              var i = n.originalSelect2Event;
                              if (
                                "select" === i._type ||
                                "unselect" === i._type
                              )
                                return;
                            }
                            var r = this.getHighlightedResults();
                            if (!(r.length < 1)) {
                              var o = e.GetData(r[0], "data");
                              (null != o.element && o.element.selected) ||
                                (null == o.element && o.selected) ||
                                this.trigger("select", { data: o });
                            }
                          }),
                          t
                        );
                      }
                    ),
                    t.define("select2/dropdown/closeOnSelect", [], function () {
                      function e() {}
                      return (
                        (e.prototype.bind = function (e, t, n) {
                          var i = this;
                          e.call(this, t, n),
                            t.on("select", function (e) {
                              i._selectTriggered(e);
                            }),
                            t.on("unselect", function (e) {
                              i._selectTriggered(e);
                            });
                        }),
                        (e.prototype._selectTriggered = function (e, t) {
                          var n = t.originalEvent;
                          (n && (n.ctrlKey || n.metaKey)) ||
                            this.trigger("close", {
                              originalEvent: n,
                              originalSelect2Event: t,
                            });
                        }),
                        e
                      );
                    }),
                    t.define(
                      "select2/dropdown/dropdownCss",
                      ["../utils"],
                      function (e) {
                        function t() {}
                        return (
                          (t.prototype.render = function (t) {
                            var n = t.call(this),
                              i = this.options.get("dropdownCssClass") || "";
                            return (
                              -1 !== i.indexOf(":all:") &&
                                ((i = i.replace(":all:", "")),
                                e.copyNonInternalCssClasses(
                                  n[0],
                                  this.$element[0]
                                )),
                              n.addClass(i),
                              n
                            );
                          }),
                          t
                        );
                      }
                    ),
                    t.define(
                      "select2/dropdown/tagsSearchHighlight",
                      ["../utils"],
                      function (e) {
                        function t() {}
                        return (
                          (t.prototype.highlightFirstItem = function (t) {
                            var n = this.$results.find(
                              ".select2-results__option--selectable:not(.select2-results__option--selected)"
                            );
                            if (n.length > 0) {
                              var i = n.first(),
                                r = e.GetData(i[0], "data"),
                                o = r.element;
                              if (
                                o &&
                                o.getAttribute &&
                                "true" === o.getAttribute("data-select2-tag")
                              )
                                return void i.trigger("mouseenter");
                            }
                            t.call(this);
                          }),
                          t
                        );
                      }
                    ),
                    t.define("select2/i18n/en", [], function () {
                      return {
                        errorLoading: function () {
                          return "The results could not be loaded.";
                        },
                        inputTooLong: function (e) {
                          var t = e.input.length - e.maximum,
                            n = "Please delete " + t + " character";
                          return 1 != t && (n += "s"), n;
                        },
                        inputTooShort: function (e) {
                          var t = e.minimum - e.input.length,
                            n = "Please enter " + t + " or more characters";
                          return n;
                        },
                        loadingMore: function () {
                          return "Loading more results…";
                        },
                        maximumSelected: function (e) {
                          var t = "You can only select " + e.maximum + " item";
                          return 1 != e.maximum && (t += "s"), t;
                        },
                        noResults: function () {
                          return "No results found";
                        },
                        searching: function () {
                          return "Searching…";
                        },
                        removeAllItems: function () {
                          return "Remove all items";
                        },
                        removeItem: function () {
                          return "Remove item";
                        },
                        search: function () {
                          return "Search";
                        },
                      };
                    }),
                    t.define(
                      "select2/defaults",
                      [
                        "jquery",
                        "./results",
                        "./selection/single",
                        "./selection/multiple",
                        "./selection/placeholder",
                        "./selection/allowClear",
                        "./selection/search",
                        "./selection/selectionCss",
                        "./selection/eventRelay",
                        "./utils",
                        "./translation",
                        "./diacritics",
                        "./data/select",
                        "./data/array",
                        "./data/ajax",
                        "./data/tags",
                        "./data/tokenizer",
                        "./data/minimumInputLength",
                        "./data/maximumInputLength",
                        "./data/maximumSelectionLength",
                        "./dropdown",
                        "./dropdown/search",
                        "./dropdown/hidePlaceholder",
                        "./dropdown/infiniteScroll",
                        "./dropdown/attachBody",
                        "./dropdown/minimumResultsForSearch",
                        "./dropdown/selectOnClose",
                        "./dropdown/closeOnSelect",
                        "./dropdown/dropdownCss",
                        "./dropdown/tagsSearchHighlight",
                        "./i18n/en",
                      ],
                      function (
                        e,
                        t,
                        n,
                        i,
                        r,
                        o,
                        s,
                        a,
                        l,
                        c,
                        u,
                        p,
                        d,
                        h,
                        f,
                        g,
                        m,
                        v,
                        y,
                        b,
                        w,
                        x,
                        _,
                        C,
                        k,
                        T,
                        A,
                        S,
                        E,
                        P,
                        O
                      ) {
                        function L() {
                          this.reset();
                        }
                        (L.prototype.apply = function (u) {
                          if (
                            (null ==
                              (u = e.extend(!0, {}, this.defaults, u))
                                .dataAdapter &&
                              (null != u.ajax
                                ? (u.dataAdapter = f)
                                : null != u.data
                                ? (u.dataAdapter = h)
                                : (u.dataAdapter = d),
                              u.minimumInputLength > 0 &&
                                (u.dataAdapter = c.Decorate(u.dataAdapter, v)),
                              u.maximumInputLength > 0 &&
                                (u.dataAdapter = c.Decorate(u.dataAdapter, y)),
                              u.maximumSelectionLength > 0 &&
                                (u.dataAdapter = c.Decorate(u.dataAdapter, b)),
                              u.tags &&
                                (u.dataAdapter = c.Decorate(u.dataAdapter, g)),
                              (null == u.tokenSeparators &&
                                null == u.tokenizer) ||
                                (u.dataAdapter = c.Decorate(u.dataAdapter, m))),
                            null == u.resultsAdapter &&
                              ((u.resultsAdapter = t),
                              null != u.ajax &&
                                (u.resultsAdapter = c.Decorate(
                                  u.resultsAdapter,
                                  C
                                )),
                              null != u.placeholder &&
                                (u.resultsAdapter = c.Decorate(
                                  u.resultsAdapter,
                                  _
                                )),
                              u.selectOnClose &&
                                (u.resultsAdapter = c.Decorate(
                                  u.resultsAdapter,
                                  A
                                )),
                              u.tags &&
                                (u.resultsAdapter = c.Decorate(
                                  u.resultsAdapter,
                                  P
                                ))),
                            null == u.dropdownAdapter)
                          ) {
                            if (u.multiple) u.dropdownAdapter = w;
                            else {
                              var p = c.Decorate(w, x);
                              u.dropdownAdapter = p;
                            }
                            0 !== u.minimumResultsForSearch &&
                              (u.dropdownAdapter = c.Decorate(
                                u.dropdownAdapter,
                                T
                              )),
                              u.closeOnSelect &&
                                (u.dropdownAdapter = c.Decorate(
                                  u.dropdownAdapter,
                                  S
                                )),
                              null != u.dropdownCssClass &&
                                (u.dropdownAdapter = c.Decorate(
                                  u.dropdownAdapter,
                                  E
                                )),
                              (u.dropdownAdapter = c.Decorate(
                                u.dropdownAdapter,
                                k
                              ));
                          }
                          null == u.selectionAdapter &&
                            (u.multiple
                              ? (u.selectionAdapter = i)
                              : (u.selectionAdapter = n),
                            null != u.placeholder &&
                              (u.selectionAdapter = c.Decorate(
                                u.selectionAdapter,
                                r
                              )),
                            u.allowClear &&
                              (u.selectionAdapter = c.Decorate(
                                u.selectionAdapter,
                                o
                              )),
                            u.multiple &&
                              (u.selectionAdapter = c.Decorate(
                                u.selectionAdapter,
                                s
                              )),
                            null != u.selectionCssClass &&
                              (u.selectionAdapter = c.Decorate(
                                u.selectionAdapter,
                                a
                              )),
                            (u.selectionAdapter = c.Decorate(
                              u.selectionAdapter,
                              l
                            ))),
                            (u.language = this._resolveLanguage(u.language)),
                            u.language.push("en");
                          for (var O = [], L = 0; L < u.language.length; L++) {
                            var D = u.language[L];
                            -1 === O.indexOf(D) && O.push(D);
                          }
                          return (
                            (u.language = O),
                            (u.translations = this._processTranslations(
                              u.language,
                              u.debug
                            )),
                            u
                          );
                        }),
                          (L.prototype.reset = function () {
                            function t(e) {
                              return e.replace(
                                /[^\u0000-\u007E]/g,
                                function (e) {
                                  return p[e] || e;
                                }
                              );
                            }
                            this.defaults = {
                              amdLanguageBase: "./i18n/",
                              autocomplete: "off",
                              closeOnSelect: !0,
                              debug: !1,
                              dropdownAutoWidth: !1,
                              escapeMarkup: c.escapeMarkup,
                              language: {},
                              matcher: function n(i, r) {
                                if (null == i.term || "" === i.term.trim())
                                  return r;
                                if (r.children && r.children.length > 0) {
                                  for (
                                    var o = e.extend(!0, {}, r),
                                      s = r.children.length - 1;
                                    s >= 0;
                                    s--
                                  ) {
                                    var a = r.children[s],
                                      l = n(i, a);
                                    null == l && o.children.splice(s, 1);
                                  }
                                  return o.children.length > 0 ? o : n(i, o);
                                }
                                var c = t(r.text).toUpperCase(),
                                  u = t(i.term).toUpperCase();
                                return c.indexOf(u) > -1 ? r : null;
                              },
                              minimumInputLength: 0,
                              maximumInputLength: 0,
                              maximumSelectionLength: 0,
                              minimumResultsForSearch: 0,
                              selectOnClose: !1,
                              scrollAfterSelect: !1,
                              sorter: function (e) {
                                return e;
                              },
                              templateResult: function (e) {
                                return e.text;
                              },
                              templateSelection: function (e) {
                                return e.text;
                              },
                              theme: "default",
                              width: "resolve",
                            };
                          }),
                          (L.prototype.applyFromElement = function (e, t) {
                            var n = e.language,
                              i = this.defaults.language,
                              r = t.prop("lang"),
                              o = t.closest("[lang]").prop("lang"),
                              s = Array.prototype.concat.call(
                                this._resolveLanguage(r),
                                this._resolveLanguage(n),
                                this._resolveLanguage(i),
                                this._resolveLanguage(o)
                              );
                            return (e.language = s), e;
                          }),
                          (L.prototype._resolveLanguage = function (t) {
                            if (!t) return [];
                            if (e.isEmptyObject(t)) return [];
                            if (e.isPlainObject(t)) return [t];
                            var n;
                            n = Array.isArray(t) ? t : [t];
                            for (var i = [], r = 0; r < n.length; r++)
                              if (
                                (i.push(n[r]),
                                "string" == typeof n[r] &&
                                  n[r].indexOf("-") > 0)
                              ) {
                                var o = n[r].split("-"),
                                  s = o[0];
                                i.push(s);
                              }
                            return i;
                          }),
                          (L.prototype._processTranslations = function (t, n) {
                            for (var i = new u(), r = 0; r < t.length; r++) {
                              var o = new u(),
                                s = t[r];
                              if ("string" == typeof s)
                                try {
                                  o = u.loadPath(s);
                                } catch (e) {
                                  try {
                                    (s = this.defaults.amdLanguageBase + s),
                                      (o = u.loadPath(s));
                                  } catch (e) {
                                    n && window.console && console.warn;
                                  }
                                }
                              else o = e.isPlainObject(s) ? new u(s) : s;
                              i.extend(o);
                            }
                            return i;
                          }),
                          (L.prototype.set = function (t, n) {
                            var i = e.camelCase(t),
                              r = {};
                            r[i] = n;
                            var o = c._convertData(r);
                            e.extend(!0, this.defaults, o);
                          });
                        var D = new L();
                        return D;
                      }
                    ),
                    t.define(
                      "select2/options",
                      ["jquery", "./defaults", "./utils"],
                      function (e, t, n) {
                        function i(e, n) {
                          (this.options = e),
                            null != n && this.fromElement(n),
                            null != n &&
                              (this.options = t.applyFromElement(
                                this.options,
                                n
                              )),
                            (this.options = t.apply(this.options));
                        }
                        return (
                          (i.prototype.fromElement = function (t) {
                            var i = ["select2"];
                            null == this.options.multiple &&
                              (this.options.multiple = t.prop("multiple")),
                              null == this.options.disabled &&
                                (this.options.disabled = t.prop("disabled")),
                              null == this.options.autocomplete &&
                                t.prop("autocomplete") &&
                                (this.options.autocomplete =
                                  t.prop("autocomplete")),
                              null == this.options.dir &&
                                (t.prop("dir")
                                  ? (this.options.dir = t.prop("dir"))
                                  : t.closest("[dir]").prop("dir")
                                  ? (this.options.dir = t
                                      .closest("[dir]")
                                      .prop("dir"))
                                  : (this.options.dir = "ltr")),
                              t.prop("disabled", this.options.disabled),
                              t.prop("multiple", this.options.multiple),
                              n.GetData(t[0], "select2Tags") &&
                                (this.options.debug &&
                                  window.console &&
                                  console.warn,
                                n.StoreData(
                                  t[0],
                                  "data",
                                  n.GetData(t[0], "select2Tags")
                                ),
                                n.StoreData(t[0], "tags", !0)),
                              n.GetData(t[0], "ajaxUrl") &&
                                (this.options.debug &&
                                  window.console &&
                                  console.warn,
                                t.attr("ajax--url", n.GetData(t[0], "ajaxUrl")),
                                n.StoreData(
                                  t[0],
                                  "ajax-Url",
                                  n.GetData(t[0], "ajaxUrl")
                                ));
                            var r = {};
                            function o(e, t) {
                              return t.toUpperCase();
                            }
                            for (var s = 0; s < t[0].attributes.length; s++) {
                              var a = t[0].attributes[s].name;
                              if ("data-" == a.substr(0, "data-".length)) {
                                var l = a.substring("data-".length),
                                  c = n.GetData(t[0], l),
                                  u = l.replace(/-([a-z])/g, o);
                                r[u] = c;
                              }
                            }
                            e.fn.jquery &&
                              "1." == e.fn.jquery.substr(0, 2) &&
                              t[0].dataset &&
                              (r = e.extend(!0, {}, t[0].dataset, r));
                            var p = e.extend(!0, {}, n.GetData(t[0]), r);
                            for (var d in (p = n._convertData(p)))
                              i.indexOf(d) > -1 ||
                                (e.isPlainObject(this.options[d])
                                  ? e.extend(this.options[d], p[d])
                                  : (this.options[d] = p[d]));
                            return this;
                          }),
                          (i.prototype.get = function (e) {
                            return this.options[e];
                          }),
                          (i.prototype.set = function (e, t) {
                            this.options[e] = t;
                          }),
                          i
                        );
                      }
                    ),
                    t.define(
                      "select2/core",
                      ["jquery", "./options", "./utils", "./keys"],
                      function (e, t, n, i) {
                        var r = function (e, i) {
                          null != n.GetData(e[0], "select2") &&
                            n.GetData(e[0], "select2").destroy(),
                            (this.$element = e),
                            (this.id = this._generateId(e)),
                            (i = i || {}),
                            (this.options = new t(i, e)),
                            r.__super__.constructor.call(this);
                          var o = e.attr("tabindex") || 0;
                          n.StoreData(e[0], "old-tabindex", o),
                            e.attr("tabindex", "-1");
                          var s = this.options.get("dataAdapter");
                          this.dataAdapter = new s(e, this.options);
                          var a = this.render();
                          this._placeContainer(a);
                          var l = this.options.get("selectionAdapter");
                          (this.selection = new l(e, this.options)),
                            (this.$selection = this.selection.render()),
                            this.selection.position(this.$selection, a);
                          var c = this.options.get("dropdownAdapter");
                          (this.dropdown = new c(e, this.options)),
                            (this.$dropdown = this.dropdown.render()),
                            this.dropdown.position(this.$dropdown, a);
                          var u = this.options.get("resultsAdapter");
                          (this.results = new u(
                            e,
                            this.options,
                            this.dataAdapter
                          )),
                            (this.$results = this.results.render()),
                            this.results.position(
                              this.$results,
                              this.$dropdown
                            );
                          var p = this;
                          this._bindAdapters(),
                            this._registerDomEvents(),
                            this._registerDataEvents(),
                            this._registerSelectionEvents(),
                            this._registerDropdownEvents(),
                            this._registerResultsEvents(),
                            this._registerEvents(),
                            this.dataAdapter.current(function (e) {
                              p.trigger("selection:update", { data: e });
                            }),
                            e[0].classList.add("select2-hidden-accessible"),
                            e.attr("aria-hidden", "true"),
                            this._syncAttributes(),
                            n.StoreData(e[0], "select2", this),
                            e.data("select2", this);
                        };
                        return (
                          n.Extend(r, n.Observable),
                          (r.prototype._generateId = function (e) {
                            return (
                              "select2-" +
                              (null != e.attr("id")
                                ? e.attr("id")
                                : null != e.attr("name")
                                ? e.attr("name") + "-" + n.generateChars(2)
                                : n.generateChars(4)
                              ).replace(/(:|\.|\[|\]|,)/g, "")
                            );
                          }),
                          (r.prototype._placeContainer = function (e) {
                            e.insertAfter(this.$element);
                            var t = this._resolveWidth(
                              this.$element,
                              this.options.get("width")
                            );
                            null != t && e.css("width", t);
                          }),
                          (r.prototype._resolveWidth = function (e, t) {
                            var n =
                              /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                            if ("resolve" == t) {
                              var i = this._resolveWidth(e, "style");
                              return null != i
                                ? i
                                : this._resolveWidth(e, "element");
                            }
                            if ("element" == t) {
                              var r = e.outerWidth(!1);
                              return r <= 0 ? "auto" : r + "px";
                            }
                            if ("style" == t) {
                              var o = e.attr("style");
                              if ("string" != typeof o) return null;
                              for (
                                var s = o.split(";"), a = 0, l = s.length;
                                a < l;
                                a += 1
                              ) {
                                var c = s[a].replace(/\s/g, ""),
                                  u = c.match(n);
                                if (null !== u && u.length >= 1) return u[1];
                              }
                              return null;
                            }
                            if ("computedstyle" == t) {
                              var p = window.getComputedStyle(e[0]);
                              return p.width;
                            }
                            return t;
                          }),
                          (r.prototype._bindAdapters = function () {
                            this.dataAdapter.bind(this, this.$container),
                              this.selection.bind(this, this.$container),
                              this.dropdown.bind(this, this.$container),
                              this.results.bind(this, this.$container);
                          }),
                          (r.prototype._registerDomEvents = function () {
                            var e = this;
                            this.$element.on("change.select2", function () {
                              e.dataAdapter.current(function (t) {
                                e.trigger("selection:update", { data: t });
                              });
                            }),
                              this.$element.on("focus.select2", function (t) {
                                e.trigger("focus", t);
                              }),
                              (this._syncA = n.bind(
                                this._syncAttributes,
                                this
                              )),
                              (this._syncS = n.bind(this._syncSubtree, this)),
                              (this._observer = new window.MutationObserver(
                                function (t) {
                                  e._syncA(), e._syncS(t);
                                }
                              )),
                              this._observer.observe(this.$element[0], {
                                attributes: !0,
                                childList: !0,
                                subtree: !1,
                              });
                          }),
                          (r.prototype._registerDataEvents = function () {
                            var e = this;
                            this.dataAdapter.on("*", function (t, n) {
                              e.trigger(t, n);
                            });
                          }),
                          (r.prototype._registerSelectionEvents = function () {
                            var e = this,
                              t = ["toggle", "focus"];
                            this.selection.on("toggle", function () {
                              e.toggleDropdown();
                            }),
                              this.selection.on("focus", function (t) {
                                e.focus(t);
                              }),
                              this.selection.on("*", function (n, i) {
                                -1 === t.indexOf(n) && e.trigger(n, i);
                              });
                          }),
                          (r.prototype._registerDropdownEvents = function () {
                            var e = this;
                            this.dropdown.on("*", function (t, n) {
                              e.trigger(t, n);
                            });
                          }),
                          (r.prototype._registerResultsEvents = function () {
                            var e = this;
                            this.results.on("*", function (t, n) {
                              e.trigger(t, n);
                            });
                          }),
                          (r.prototype._registerEvents = function () {
                            var e = this;
                            this.on("open", function () {
                              e.$container[0].classList.add(
                                "select2-container--open"
                              );
                            }),
                              this.on("close", function () {
                                e.$container[0].classList.remove(
                                  "select2-container--open"
                                );
                              }),
                              this.on("enable", function () {
                                e.$container[0].classList.remove(
                                  "select2-container--disabled"
                                );
                              }),
                              this.on("disable", function () {
                                e.$container[0].classList.add(
                                  "select2-container--disabled"
                                );
                              }),
                              this.on("blur", function () {
                                e.$container[0].classList.remove(
                                  "select2-container--focus"
                                );
                              }),
                              this.on("query", function (t) {
                                e.isOpen() || e.trigger("open", {}),
                                  this.dataAdapter.query(t, function (n) {
                                    e.trigger("results:all", {
                                      data: n,
                                      query: t,
                                    });
                                  });
                              }),
                              this.on("query:append", function (t) {
                                this.dataAdapter.query(t, function (n) {
                                  e.trigger("results:append", {
                                    data: n,
                                    query: t,
                                  });
                                });
                              }),
                              this.on("keypress", function (t) {
                                var n = t.which;
                                e.isOpen()
                                  ? n === i.ESC || (n === i.UP && t.altKey)
                                    ? (e.close(t), t.preventDefault())
                                    : n === i.ENTER || n === i.TAB
                                    ? (e.trigger("results:select", {}),
                                      t.preventDefault())
                                    : n === i.SPACE && t.ctrlKey
                                    ? (e.trigger("results:toggle", {}),
                                      t.preventDefault())
                                    : n === i.UP
                                    ? (e.trigger("results:previous", {}),
                                      t.preventDefault())
                                    : n === i.DOWN &&
                                      (e.trigger("results:next", {}),
                                      t.preventDefault())
                                  : (n === i.ENTER ||
                                      n === i.SPACE ||
                                      (n === i.DOWN && t.altKey)) &&
                                    (e.open(), t.preventDefault());
                              });
                          }),
                          (r.prototype._syncAttributes = function () {
                            this.options.set(
                              "disabled",
                              this.$element.prop("disabled")
                            ),
                              this.isDisabled()
                                ? (this.isOpen() && this.close(),
                                  this.trigger("disable", {}))
                                : this.trigger("enable", {});
                          }),
                          (r.prototype._isChangeMutation = function (e) {
                            var t = this;
                            if (e.addedNodes && e.addedNodes.length > 0)
                              for (var n = 0; n < e.addedNodes.length; n++) {
                                var i = e.addedNodes[n];
                                if (i.selected) return !0;
                              }
                            else {
                              if (e.removedNodes && e.removedNodes.length > 0)
                                return !0;
                              if (Array.isArray(e))
                                return e.some(function (e) {
                                  return t._isChangeMutation(e);
                                });
                            }
                            return !1;
                          }),
                          (r.prototype._syncSubtree = function (e) {
                            var t = this._isChangeMutation(e),
                              n = this;
                            t &&
                              this.dataAdapter.current(function (e) {
                                n.trigger("selection:update", { data: e });
                              });
                          }),
                          (r.prototype.trigger = function (e, t) {
                            var n = r.__super__.trigger,
                              i = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting",
                                clear: "clearing",
                              };
                            if ((void 0 === t && (t = {}), e in i)) {
                              var o = i[e],
                                s = { prevented: !1, name: e, args: t };
                              if ((n.call(this, o, s), s.prevented))
                                return void (t.prevented = !0);
                            }
                            n.call(this, e, t);
                          }),
                          (r.prototype.toggleDropdown = function () {
                            this.isDisabled() ||
                              (this.isOpen() ? this.close() : this.open());
                          }),
                          (r.prototype.open = function () {
                            this.isOpen() ||
                              this.isDisabled() ||
                              this.trigger("query", {});
                          }),
                          (r.prototype.close = function (e) {
                            this.isOpen() &&
                              this.trigger("close", { originalEvent: e });
                          }),
                          (r.prototype.isEnabled = function () {
                            return !this.isDisabled();
                          }),
                          (r.prototype.isDisabled = function () {
                            return this.options.get("disabled");
                          }),
                          (r.prototype.isOpen = function () {
                            return this.$container[0].classList.contains(
                              "select2-container--open"
                            );
                          }),
                          (r.prototype.hasFocus = function () {
                            return this.$container[0].classList.contains(
                              "select2-container--focus"
                            );
                          }),
                          (r.prototype.focus = function (e) {
                            this.hasFocus() ||
                              (this.$container[0].classList.add(
                                "select2-container--focus"
                              ),
                              this.trigger("focus", {}));
                          }),
                          (r.prototype.enable = function (e) {
                            this.options.get("debug") &&
                              window.console &&
                              console.warn,
                              (null != e && 0 !== e.length) || (e = [!0]);
                            var t = !e[0];
                            this.$element.prop("disabled", t);
                          }),
                          (r.prototype.data = function () {
                            this.options.get("debug") &&
                              arguments.length > 0 &&
                              window.console &&
                              console.warn;
                            var e = [];
                            return (
                              this.dataAdapter.current(function (t) {
                                e = t;
                              }),
                              e
                            );
                          }),
                          (r.prototype.val = function (e) {
                            if (
                              (this.options.get("debug") &&
                                window.console &&
                                console.warn,
                              null == e || 0 === e.length)
                            )
                              return this.$element.val();
                            var t = e[0];
                            Array.isArray(t) &&
                              (t = t.map(function (e) {
                                return e.toString();
                              })),
                              this.$element
                                .val(t)
                                .trigger("input")
                                .trigger("change");
                          }),
                          (r.prototype.destroy = function () {
                            n.RemoveData(this.$container[0]),
                              this.$container.remove(),
                              this._observer.disconnect(),
                              (this._observer = null),
                              (this._syncA = null),
                              (this._syncS = null),
                              this.$element.off(".select2"),
                              this.$element.attr(
                                "tabindex",
                                n.GetData(this.$element[0], "old-tabindex")
                              ),
                              this.$element[0].classList.remove(
                                "select2-hidden-accessible"
                              ),
                              this.$element.attr("aria-hidden", "false"),
                              n.RemoveData(this.$element[0]),
                              this.$element.removeData("select2"),
                              this.dataAdapter.destroy(),
                              this.selection.destroy(),
                              this.dropdown.destroy(),
                              this.results.destroy(),
                              (this.dataAdapter = null),
                              (this.selection = null),
                              (this.dropdown = null),
                              (this.results = null);
                          }),
                          (r.prototype.render = function () {
                            var t = e(
                              '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                            );
                            return (
                              t.attr("dir", this.options.get("dir")),
                              (this.$container = t),
                              this.$container[0].classList.add(
                                "select2-container--" +
                                  this.options.get("theme")
                              ),
                              n.StoreData(t[0], "element", this.$element),
                              t
                            );
                          }),
                          r
                        );
                      }
                    ),
                    t.define("jquery-mousewheel", ["jquery"], function (e) {
                      return e;
                    }),
                    t.define(
                      "jquery.select2",
                      [
                        "jquery",
                        "jquery-mousewheel",
                        "./select2/core",
                        "./select2/defaults",
                        "./select2/utils",
                      ],
                      function (e, t, n, i, r) {
                        if (null == e.fn.select2) {
                          var o = ["open", "close", "destroy"];
                          e.fn.select2 = function (t) {
                            if ("object" == typeof (t = t || {}))
                              return (
                                this.each(function () {
                                  var i = e.extend(!0, {}, t);
                                  new n(e(this), i);
                                }),
                                this
                              );
                            if ("string" == typeof t) {
                              var i,
                                s = Array.prototype.slice.call(arguments, 1);
                              return (
                                this.each(function () {
                                  var e = r.GetData(this, "select2");
                                  null == e && window.console && console.error,
                                    (i = e[t].apply(e, s));
                                }),
                                o.indexOf(t) > -1 ? this : i
                              );
                            }
                            throw new Error(
                              "Invalid arguments for Select2: " + t
                            );
                          };
                        }
                        return (
                          null == e.fn.select2.defaults &&
                            (e.fn.select2.defaults = i),
                          n
                        );
                      }
                    ),
                    { define: t.define, require: t.require }
                  );
                })(),
                n = t.require("jquery.select2");
              return (e.fn.select2.amd = t), n;
            })
              ? r.apply(t, o)
              : r) || (e.exports = s);
    }).call(this, n(4));
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    n(17), n(16);
    var i = n(3);
    function r(e) {
      "@babel/helpers - typeof";
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, s(i.key), i);
      }
    }
    function s(e) {
      var t = (function (e, t) {
        if ("object" !== r(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var i = n.call(e, t || "default");
          if ("object" !== r(i)) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === r(t) ? t : String(t);
    }
    i.f.use([i.d, i.e, i.c, i.a, i.b]);
    var a = (function (e, t, n) {
      return (
        t && o(e.prototype, t),
        n && o(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    })(function e() {
      var t, n, r;
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (t = this),
        (r = function () {
          new i.f(".strategySwiper", {
            autoHeight: !0,
            effect: "fade",
            fadeEffect: { crossFade: !0 },
            pagination: {
              el: ".swiper-pagination",
              type: "fraction",
              formatFractionCurrent: function (e) {
                return ("0" + e).slice(-2);
              },
              formatFractionTotal: function (e) {
                return ("0" + e).slice(-2);
              },
              renderFraction: function (e, t) {
                return (
                  '<span class="' +
                  e +
                  '"></span> <hr> <span class="' +
                  t +
                  '"></span>'
                );
              },
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        }),
        (n = s((n = "bindEvents"))) in t
          ? Object.defineProperty(t, n, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[n] = r),
        this.bindEvents();
    });
  },
  function (e, t, n) {
    var i = n(27);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(0)(i, r);
    i.locals && (e.exports = i.locals);
  },
  function (e, t, n) {
    var i = n(26);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(0)(i, r);
    i.locals && (e.exports = i.locals);
  },
  ,
  ,
  ,
  function (e, t, n) {
    n(22), (e.exports = n(28));
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e) {
        var i = n(10),
          r = (n(78), n(2)),
          o = n(11),
          s = n(12),
          a = (n(24), n(14), n(9), n(15));
        function l(e) {
          "@babel/helpers - typeof";
          return (l =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function c(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, p(i.key), i);
          }
        }
        function u(e, t, n) {
          return (
            (t = p(t)) in e
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
        function p(e) {
          var t = (function (e, t) {
            if ("object" !== l(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || "default");
              if ("object" !== l(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" === l(t) ? t : String(t);
        }
        (n.p = baseUrl),
          (e.fn.isInViewport = function () {
            if (e(this).length) {
              var t = e(this).offset().top,
                n = t + e(this).outerHeight(),
                i = e(window).scrollTop(),
                r = i + e(window).height();
              return n > i && t < r;
            }
          }),
          (e.fn.isInViewportOffset = function () {
            if (e(this).length) {
              var t = e(this).offset().top - 500,
                n = t + e(this).outerHeight(),
                i = e(window).scrollTop(),
                r = i + e(window).height();
              return n > i && t < r;
            }
          }),
          (e.fn.isInViewportTop = function () {
            if (e(this).length) {
              var t = e(this).offset().top + 200,
                n = t - e(this).outerHeight(),
                i = e(window).scrollTop(),
                r = i - e(window).height();
              return n < i && t > r;
            }
          }),
          (e.fn.isInViewportSection = function () {
            if (e(this).length) {
              var t = e(this).offset().top - 500;
              e(this).outerHeight();
              return t < e(window).scrollTop() + e(window).height();
            }
          }),
          (t.default = new ((function () {
            function t() {
              var l = this;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                u(this, "domReady", function () {
                  l.initComponents(),
                    l.dynamicComponents(),
                    l.captchaLoad(),
                    l.handleUserAgent(),
                    l.windowResize(),
                    l.bindEvents(),
                    l.handleSplashScreen();
                }),
                u(this, "initComponents", function () {
                  l.strategy.length && new a.a(),
                    e(".formidable").length &&
                      (setTimeout(function () {
                        l.intlInput();
                      }, 1e3),
                      e(".country").length && l.selectInput()),
                    new i.a({ header: l.header, htmlBody: l.htmlBody }),
                    new o.a(),
                    e("select").each(function () {
                      var t = e(this),
                        n = e(this).children("option").length;
                      t.addClass("select-hidden"),
                        t.wrap('<div class="select filter-class"></div>'),
                        t.after('<div class="select-styled"></div>');
                      var i = t.next("div.select-styled");
                      i.text(t.children("option").eq(0).text());
                      for (
                        var r = e("<ul />", {
                            class: "select-options",
                          }).insertAfter(i),
                          o = 0;
                        o < n;
                        o++
                      )
                        e("<li />", {
                          text: t.children("option").eq(o).text(),
                          rel: t.children("option").eq(o).val(),
                        }).appendTo(r);
                      var s = r.children("li");
                      i.click(function (t) {
                        t.stopPropagation(),
                          e("div.select-styled.active")
                            .not(this)
                            .each(function () {
                              e(this)
                                .removeClass("active")
                                .next("ul.select-options")
                                .hide();
                            }),
                          e(this)
                            .toggleClass("active")
                            .next("ul.select-options")
                            .toggle();
                      }),
                        s.click(function (n) {
                          n.stopPropagation(),
                            i.text(e(this).text()).removeClass("active"),
                            t.val(e(this).attr("rel")),
                            r.hide();
                        }),
                        e(document).click(function () {
                          i.removeClass("active"), r.hide();
                        });
                    });
                  e(".news-slider h4").each(function () {
                    var t = e(this).text();
                    if (t.length > 72) {
                      var n = t.substr(0, 72),
                        i = (t.substr(71, t.length - 72), n + "...");
                      e(this).text(i);
                    }
                  });
                  e(".news-listing-wrapper .news-listing .each-news .p").each(
                    function () {
                      var t = e(this).text();
                      if (t.length > 60) {
                        var n = t.substr(0, 60),
                          i = (t.substr(59, t.length - 60), n + "...");
                        e(this).text(i);
                      }
                    }
                  );
                  if (
                    (e(
                      ".featured-news.swiper-container .swiper-wrapper .swiper-slide .content-wrapper p"
                    ).each(function () {
                      var t = e(this).text();
                      if (t.length > 100) {
                        var n = t.substr(0, 100),
                          i = (t.substr(99, t.length - 100), n + "...");
                        e(this).text(i);
                      }
                    }),
                    e(".common-banner-block").length)
                  ) {
                    var t = 2.5;
                    if (
                      (-1 !== document.cookie.indexOf("timer") && (t = 2.2),
                      r.a
                        .timeline()
                        .fromTo(
                          ".common-banner-block .bg-img",
                          1.2,
                          { scale: 1.3 },
                          {
                            scale: 1,
                            duration: 2.5,
                            delay: t - 1.5,
                            ease: "Power2.easeOut",
                          }
                        ),
                      r.a
                        .timeline()
                        .to(".common-banner-block .breadcrumb", {
                          opacity: 1,
                          duration: 1,
                          delay: t - 1,
                          ease: "Power2.easeOut",
                        }),
                      e(".common-banner-block .scrollTo").length)
                    )
                      r.a
                        .timeline()
                        .to(".common-banner-block .scrollTo", {
                          opacity: 1,
                          duration: 1,
                          delay: t - 1,
                          ease: "Power2.easeOut",
                        });
                    r.a
                      .timeline()
                      .to(".common-banner-block h1", {
                        opacity: 1,
                        duration: 1.5,
                        delay: t - 1,
                        ease: "Power2.easeOut",
                      });
                  }
                  if (e(".company_detail_banner").length) {
                    var n = 2.5;
                    if (
                      (-1 !== document.cookie.indexOf("timer") && (n = 2.2),
                      r.a
                        .timeline()
                        .fromTo(
                          ".company_detail_banner .swiper-slide:first-child img",
                          1.2,
                          { scale: 1.3 },
                          {
                            scale: 1,
                            duration: 2.5,
                            delay: n - 1.5,
                            ease: "Power2.easeOut",
                          }
                        ),
                      r.a
                        .timeline()
                        .to(".company_detail_banner .breadcrumb_text", {
                          opacity: 1,
                          duration: 1,
                          delay: n - 1,
                          ease: "Power2.easeOut",
                        }),
                      e(".company_detail_banner .scrollTo").length)
                    )
                      r.a
                        .timeline()
                        .to(".company_detail_banner .scrollTo", {
                          opacity: 1,
                          duration: 1,
                          delay: n - 1,
                          ease: "Power2.easeOut",
                        });
                    if (e(".company_detail_banner .controls").length)
                      r.a
                        .timeline()
                        .to(".company_detail_banner .pagination-wrapper", {
                          opacity: 1,
                          duration: 1,
                          delay: n - 1,
                          ease: "Power2.easeOut",
                        }),
                        r.a
                          .timeline()
                          .to(".company_detail_banner .navigation", {
                            opacity: 1,
                            duration: 1,
                            delay: n - 1,
                            ease: "Power2.easeOut",
                          });
                    r.a
                      .timeline()
                      .to(".company_detail_banner h1", {
                        opacity: 1,
                        duration: 1.5,
                        delay: n - 1,
                        ease: "Power2.easeOut",
                      });
                  }
                  e(".simpleTabs").length &&
                    e(".simpleTabs").wrap('<div class="simpleTabWrap"></div>'),
                    e('.scrollTo[href^="#"]').on("click", function (t) {
                      t.preventDefault();
                      var n = e(this).attr("href"),
                        i = e(n).offset().top;
                      return (
                        i > 5e3
                          ? e("html, body")
                              .stop()
                              .animate({ scrollTop: i }, 1200, function () {
                                location.hash = n;
                              })
                          : top > 3e3 && top <= 5e3
                          ? e("html, body")
                              .stop()
                              .animate({ scrollTop: i }, 1e3, function () {
                                location.hash = n;
                              })
                          : e("html, body")
                              .stop()
                              .animate({ scrollTop: i }, 805, function () {
                                location.hash = n;
                              }),
                        !1
                      );
                    }),
                    e(".page-template-who-we-are ").length &&
                      e(".page-template-who-we-are")
                        .find(".video-section-block:eq(0)")
                        .attr("id", "explore"),
                    e(".page-template-who-we-are ").length &&
                      e(".simpleTabs li a").on("click", function () {
                        var t = e(".lazy");
                        0 != t.length && l.lazyWithoutViewport(t);
                      }),
                    e(".page-type-contact-us").length &&
                      l.htmlBody.addClass("contact-us"),
                    e(".page-template-investor-relations-contact").length &&
                      l.htmlBody.addClass("ir-contact"),
                    e(".headerExpand-one li a ").on("click", function (t) {
                      if ("" === this.hash);
                      else {
                        var n = this.hash;
                        e("html, body").animate(
                          { scrollTop: e(n).offset().top },
                          2e3,
                          function () {
                            window.location.hash = n;
                          }
                        );
                      }
                    }),
                    e(".mega-menu-desc div:first-child").show(),
                    e(".business-nav a").hover(
                      function () {
                        var t = e(this).text().trim();
                        e(".mega-menu-desc div").hide(),
                          e(".business-nav a").removeClass("active"),
                          e(this).addClass("active"),
                          e(".mega-menu-desc ." + t)
                            .stop(!0, !0)
                            .fadeIn();
                      },
                      function () {}
                    ),
                    (e(".page-template-contact-us").length ||
                      e(".page-template-whistleblower-form").length ||
                      e(".page-template-privacy-policy").length ||
                      e(".page-template-newsletter").length ||
                      e(".page-template-vacancy-listing").length ||
                      e(".page-template-vacancy-detail").length ||
                      e(".page-template-news").length ||
                      e(".page-template-news-and-insights-detail").length ||
                      e(".page-template-search").length ||
                      e(".page-template-thankyou-v2").length ||
                      e(".page-template-thank-you-whistleblower").length) &&
                      e(".header").addClass("dark-header"),
                    e(".user-creds input").on("click", function (t) {
                      e(this).select();
                      document.execCommand("copy"),
                        e(this).parent("div").addClass("copied"),
                        e(this).after(
                          '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d = "M10 0.625C4.82219 0.625 0.625 4.8225 0.625 10C0.625 15.1775 4.8225 19.375 10 19.375C15.1775 19.375 19.375 15.1775 19.375 10C19.375 4.8225 15.1775 0.625 10 0.625ZM7.82031 15.625L7.81406 15.6187L7.80875 15.625L3.4375 11.125L5.63406 8.88625L7.81438 11.1312L14.3769 4.37531L16.5625 6.62469L7.82031 15.625Z" fill = "#1D2428" /></svg>'
                        ),
                        setTimeout(function () {
                          e(".user-creds svg").fadeOut();
                        }, 3e3),
                        setTimeout(function () {
                          e(".user-creds svg").remove(),
                            e(".user-creds").find("div").removeClass("copied");
                        }, 3200),
                        window.getSelection
                          ? window.getSelection().empty
                            ? window.getSelection().empty()
                            : window.getSelection().removeAllRanges &&
                              window.getSelection().removeAllRanges()
                          : document.selection && document.selection.empty();
                    }),
                    e('[class*="page-type-whistleblowe"]').length &&
                      e(".select-options li").on("click", function () {
                        var t = e(this).parents(".select").find("select").val(),
                          n = e(this)
                            .parents(".element")
                            .next('[class*="other-"]');
                        "Others" == t ? n.slideDown() : n.slideUp();
                      });
                }),
                u(this, "intlInput", function () {
                  var t = [];
                  e("input[type=tel]").each(function (n, i) {
                    t.push("#" + e(i).attr("id"));
                  }),
                    Object(s.a)(t);
                }),
                u(this, "selectInput", function () {
                  e(".country").select2({});
                }),
                u(this, "dynamicComponents", function () {
                  e("section.home-banner-slider:not(.loaded)").length &&
                    n
                      .e(23)
                      .then(n.bind(null, 79))
                      .then(function (e) {
                        new e.default();
                      }),
                    e("section.home-video-banner-slider:not(.loaded)").length &&
                      n
                        .e(24)
                        .then(n.bind(null, 80))
                        .then(function (e) {
                          new e.default();
                        }),
                    e(".vimeo-cta-block:not(.loaded)").length &&
                      Promise.all([n.e(2), n.e(51)])
                        .then(n.bind(null, 81))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.stats-block:not(.loaded)").length &&
                      n
                        .e(43)
                        .then(n.bind(null, 82))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.businesses:not(.loaded)").length &&
                      n
                        .e(11)
                        .then(n.bind(null, 83))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.search-page").length &&
                      n
                        .e(41)
                        .then(n.bind(null, 84))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.js-news-insights:not(.loaded)").length &&
                      n
                        .e(31)
                        .then(n.bind(null, 85))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.js-only-news:not(.loaded)").length &&
                      n
                        .e(32)
                        .then(n.bind(null, 86))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.js-only-insights:not(.loaded)").length &&
                      n
                        .e(27)
                        .then(n.bind(null, 87))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.newsletter-page:not(.loaded)").length &&
                      n
                        .e(7)
                        .then(n.bind(null, 88))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.privacy-policy-page:not(.loaded)").length &&
                      n
                        .e(38)
                        .then(n.bind(null, 89))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.contact-page:not(.loaded)").length &&
                      n
                        .e(5)
                        .then(n.bind(null, 18))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.whistleblower-page:not(.loaded)").length &&
                      n
                        .e(5)
                        .then(n.bind(null, 18))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.careers-page:not(.loaded)").length &&
                      n
                        .e(0)
                        .then(n.bind(null, 7))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.vacancy-listing-page:not(.loaded)").length &&
                      n
                        .e(0)
                        .then(n.bind(null, 7))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.vacancy-detail-page:not(.loaded)").length &&
                      n
                        .e(0)
                        .then(n.bind(null, 7))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.news-page:not(.loaded)").length &&
                      n
                        .e(3)
                        .then(n.bind(null, 19))
                        .then(function (e) {
                          new e.default();
                        }),
                    l.financeResultsBlock.length &&
                      n
                        .e(3)
                        .then(n.bind(null, 9))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.news-and-insights-detail-page:not(.loaded)")
                      .length &&
                      n
                        .e(3)
                        .then(n.bind(null, 19))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.ir-detail-page:not(.loaded)").length &&
                      n
                        .e(1)
                        .then(n.bind(null, 8))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.investor-relations-page:not(.loaded)").length &&
                      n
                        .e(1)
                        .then(n.bind(null, 8))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.ir-detail-page:not(.loaded)").length &&
                      n
                        .e(1)
                        .then(n.bind(null, 8))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.two-col-content-section:not(.loaded)").length &&
                      (n
                        .e(47)
                        .then(n.bind(null, 90))
                        .then(function (e) {
                          new e.default();
                        }),
                      e(
                        "section.two-col-content-section:not(.loaded)"
                      ).addClass("isInView")),
                    e("section.video-section-block:not(.loaded)").length &&
                      Promise.all([n.e(2), n.e(49)])
                        .then(n.bind(null, 91))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.mission-vision-section:not(.loaded)").length &&
                      n
                        .e(29)
                        .then(n.bind(null, 92))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.our-principles:not(.loaded)").length &&
                      (n
                        .e(36)
                        .then(n.bind(null, 93))
                        .then(function (e) {
                          new e.default();
                        }),
                      e("section.our-principles:not(.loaded)").addClass(
                        "isInView"
                      )),
                    e("section.team-messages:not(.loaded)").length &&
                      n
                        .e(45)
                        .then(n.bind(null, 94))
                        .then(function (e) {
                          new e.default();
                        }),
                    e(
                      "section.our-team-section:not(.loaded), .multiplybusiness:not(.loaded)"
                    ).length &&
                      Promise.all([n.e(2), n.e(4), n.e(9)])
                        .then(n.bind(null, 95))
                        .then(function (e) {
                          new e.default();
                        }),
                    e(".key-projects-block:not(.loaded)").length &&
                      n
                        .e(6)
                        .then(n.bind(null, 20))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.esg-detail-page:not(.loaded)").length &&
                      n
                        .e(6)
                        .then(n.bind(null, 20))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.business-list:not(.loaded)").length &&
                      Promise.all([n.e(4), n.e(40)])
                        .then(n.bind(null, 96))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.company_detail_banner:not(.loaded)").length &&
                      n
                        .e(15)
                        .then(n.bind(null, 97))
                        .then(function (e) {
                          new e.default();
                        }),
                    e("section.company_detail_content:not(.loaded)").length &&
                      (n
                        .e(14)
                        .then(n.bind(null, 98))
                        .then(function (e) {
                          new e.default();
                        }),
                      e("section.company_detail_content:not(.loaded)").addClass(
                        "isInView"
                      )),
                    e("section.company_feature_slider:not(.loaded)").length &&
                      n
                        .e(16)
                        .then(n.bind(null, 99))
                        .then(function (e) {
                          new e.default();
                        });
                }),
                u(this, "captchaLoad", function () {
                  e(window).on("scroll load", function () {
                    e(".formidable").length &&
                      e(".formidable").isInViewport() &&
                      !e(".formidable").hasClass("formInview") &&
                      e(".formidable").addClass("formInview");
                  });
                }),
                u(this, "setDomMap", function () {
                  (l.window = e(window)),
                    (l.htmlNbody = e("body, html")),
                    (l.html = e("html")),
                    (l.htmlBody = e("body")),
                    (l.siteLoader = e(".site-loader")),
                    (l.header = e(".sticky-header")),
                    (l.siteBody = e(".site-body")),
                    (l.footer = e("footer")),
                    (l.gotoTop = e("#gotoTop")),
                    (l.gRecaptcha = e(".g-recaptcha")),
                    (l.wrapper = e(".wrapper")),
                    (l.pushDiv = l.wrapper.find(".push")),
                    (l.mapContainer = e("#map_canvas")),
                    (l.inputs = e("input, textarea").not(
                      '[type="checkbox"], [type="radio"]'
                    )),
                    (l.financeResultsBlock = e(
                      ".financeResults-main-container"
                    )),
                    (l.strategy = e(".our-strategy-section"));
                }),
                u(this, "bindEvents", function () {
                  l.window.resize(l.windowResize).scroll(l.windowScroll),
                    l.wrapper.on("click", ".disabled", function () {
                      return !1;
                    }),
                    l.gotoTop.on("click", function () {
                      l.htmlNbody.animate({ scrollTop: 0 });
                    }),
                    l.inputs
                      .on({
                        focus: function (t) {
                          e(t.currentTarget)
                            .closest(".element")
                            .addClass("active");
                        },
                        blur: function (t) {
                          var n = e(t.currentTarget);
                          "" !== n.val()
                            ? n.closest(".element").addClass("active")
                            : n.closest(".element").removeClass("active");
                        },
                      })
                      .trigger("blur"),
                    e(".element select").length &&
                      e("select").parents(".element").addClass("active");
                }),
                u(this, "windowResize", function () {
                  (l.screenWidth = l.window.width()),
                    (l.screenHeight = l.window.height()),
                    l.pushDiv.length &&
                      ((l.footerHeight = l.footer.outerHeight()),
                      l.wrapper.css("margin-bottom", -l.footerHeight),
                      l.pushDiv.height(l.footerHeight));
                }),
                u(this, "windowScroll", function () {
                  var t = e(".lazy");
                  0 != t.length && l.lazyLoad(t);
                  var n = l.window.scrollTop();
                  n > 200 &&
                    (e(".headerExpand").slideUp(600),
                    e(".search-overlay").slideUp(600)),
                    l.header.toggleClass("top", n > 300),
                    l.header.toggleClass("sticky", n > 600),
                    n > l.previousScroll || n < 500
                      ? l.header.removeClass("sticky")
                      : n < l.previousScroll &&
                        (l.header.addClass("sticky"),
                        n > 250
                          ? l.header.addClass("sticky")
                          : l.header.removeClass("sticky")),
                    e(".tab-section").length &&
                      (e(".tab-section").toggleClass("sticky", n > 600),
                      l.header.hasClass("sticky")
                        ? e(".tab-section").addClass("sticky-bottom")
                        : e(".tab-section").removeClass("sticky-bottom")),
                    (l.previousScroll = n),
                    l.gotoTop.toggleClass(
                      "active",
                      l.window.scrollTop() > l.screenHeight / 2
                    );
                }),
                u(this, "lazyLoad", function (t) {
                  t.each(function (t, n) {
                    var i = e(n),
                      r = i.attr("data-src");
                    (i.isInViewport() || i.isInViewportOffset()) &&
                      (i.hasClass("lazy") || i.hasClass("lazy-bg")) &&
                      (i.addClass("inview"),
                      i.hasClass("lazy-bg")
                        ? i
                            .removeClass("lazy-bg lazy")
                            .removeAttr("data-src")
                            .css({ "background-image": "url(" + r + ")" })
                        : i
                            .removeClass("lazy")
                            .removeAttr("data-src")
                            .attr("src", r));
                  });
                }),
                u(this, "lazyWithoutViewport", function (t) {
                  t.each(function (t, n) {
                    var i = e(n),
                      r = i.attr("data-src");
                    i.hasClass("lazy-bg")
                      ? i
                          .removeClass("lazy-bg lazy")
                          .removeAttr("data-src")
                          .css({ "background-image": "url(" + r + ")" })
                      : i
                          .removeClass("lazy")
                          .removeAttr("data-src")
                          .attr("src", r);
                  });
                }),
                u(this, "handleUserAgent", function () {
                  if (
                    (navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
                      l.htmlBody.addClass("ios-device"),
                    navigator.userAgent.match(/Android/i) &&
                      l.htmlBody.addClass("android-device"),
                    -1 !== navigator.appVersion.indexOf("Win") &&
                      l.htmlBody.addClass("win-os"),
                    -1 !== navigator.appVersion.indexOf("Mac") &&
                      l.htmlBody.addClass("mac-os"),
                    (-1 !== navigator.userAgent.indexOf("MSIE") ||
                      navigator.appVersion.indexOf("Trident/") > 0) &&
                      l.html.addClass("ie10"),
                    /Edge\/\d./i.test(navigator.userAgent) &&
                      l.html.addClass("ieEdge"),
                    l.html.hasClass("ie8"))
                  ) {
                    e("header .logo a img,.loading-screen img").attr(
                      "src",
                      "".concat("/themes/theedge/images/", "logo.png")
                    );
                  }
                  if (l.html.hasClass("ie9")) {
                    var t = e(
                      '<div class="no-support"> You are using outdated browser. Please <a href="https://browsehappy.com/" target="_blank">update</a> your browser or <a href="https://browsehappy.com/" target="_blank">install</a> modern browser like Google Chrome or Firefox.<div>'
                    );
                    l.htmlBody.prepend(t);
                  }
                }),
                this.setDomMap(),
                (this.previousScroll = 0),
                (this.topOffset = 0),
                (this.body = document.body),
                (this.loaded = !1),
                this.window.on("beforeunload", function () {
                  e(".init-overlay").fadeIn(500);
                }),
                this.window.on("load", function () {
                  r.a.to(".init-overlay", {
                    y: "-100%",
                    duration: 1,
                    ease: "Power4.easeOut",
                    delay: 0.7,
                  });
                  var t = e(".lazy");
                  0 != t.length && l.lazyLoad(t),
                    e(".mobile-nav-btn").on("click", function () {
                      e(".mobile-nav").addClass("active"),
                        e("body").addClass("active");
                    }),
                    e(".close-nav").on("click", function () {
                      e(".mobile-nav").removeClass("active"),
                        e("body").removeClass("active");
                    });
                }),
                e(function () {
                  l.domReady();
                });
            }
            var l, p, d;
            return (
              (l = t),
              (p = [
                {
                  key: "handleSplashScreen",
                  value: function () {
                    this.htmlBody.find(".logo-middle").fadeIn(500);
                    var e = r.a.timeline();
                    e.fromTo(
                      ".logo-middle img",
                      0.4,
                      { scale: 0.5, opacity: 0.5 },
                      { scale: 1, opacity: 1 }
                    ),
                      e.fromTo(
                        ".logo-middle img",
                        1,
                        { scale: 1 },
                        { scale: 1.4, delay: 0.2 }
                      ),
                      r.a.to(".site-loader .site-init-overlay ", {
                        y: "-100%",
                        duration: 2.2,
                        ease: "Power4.easeOut",
                        delay: 0.6,
                      }),
                      this.htmlBody
                        .find(".logo-middle")
                        .delay(300)
                        .fadeOut(100),
                      this.siteLoader.delay(2200).fadeOut(500);
                  },
                },
              ]) && c(l.prototype, p),
              d && c(l, d),
              Object.defineProperty(l, "prototype", { writable: !1 }),
              t
            );
          })())());
      }.call(this, n(4));
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t, n) {
    var i = n(25);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(0)(i, r);
    i.locals && (e.exports = i.locals);
  },
  function (e, t, n) {
    (e.exports = n(6)(!1)).push([
      e.i,
      '.intl-tel-input {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;}\r\n  .intl-tel-input * {\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box; }\r\n  .intl-tel-input .hide {\r\n    display: none; }\r\n  .intl-tel-input .v-hide {\r\n    visibility: hidden; }\r\n  .intl-tel-input input, .intl-tel-input input[type=text], .intl-tel-input input[type=tel] {\r\n    position: relative;\r\n    z-index: 0;\r\n    margin-top: 0 !important;\r\n    margin-bottom: 0 !important;\r\n    padding-right: 36px;\r\n    margin-right: 0; }\r\n  .intl-tel-input .flag-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    padding: 1px; }\r\n  .intl-tel-input .selected-flag {\r\n    z-index: 1;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 100%;\r\n    padding: 0 6px 0 8px; }\r\n    .intl-tel-input .selected-flag .iti-arrow {\r\n      margin-left: 6px;\r\n      width: 0;\r\n      height: 0;\r\n      border-left: 3px solid transparent;\r\n      border-right: 3px solid transparent;\r\n      border-top: 4px solid #555; }\r\n      .intl-tel-input .selected-flag .iti-arrow.up {\r\n        border-top: none;\r\n        border-bottom: 4px solid #555; }\r\n  .intl-tel-input .country-list {\r\n    position: absolute;\r\n    z-index: 2;\r\n    list-style: none;\r\n    text-align: left;\r\n    padding: 0;\r\n    margin: 0 0 0 -1px;\r\n    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);\r\n    background-color: white;\r\n    border: 1px solid #CCC;\r\n    white-space: nowrap;\r\n    max-height: 200px;\r\n    overflow-y: scroll;\r\n    -webkit-overflow-scrolling: touch; }\r\n    .intl-tel-input .country-list.dropup {\r\n      bottom: 100%;\r\n      margin-bottom: -1px; }\r\n    .intl-tel-input .country-list .flag-box {\r\n      display: inline-block;\r\n      width: 20px; }\r\n    @media (max-width: 500px) {\r\n      .intl-tel-input .country-list {\r\n        white-space: normal; } }\r\n    .intl-tel-input .country-list .divider {\r\n      padding-bottom: 5px;\r\n      margin-bottom: 5px;\r\n      border-bottom: 1px solid #CCC; }\r\n    .intl-tel-input .country-list .country {\r\n      padding: 5px 10px; }\r\n      .intl-tel-input .country-list .country .dial-code {\r\n        color: #999; }\r\n    .intl-tel-input .country-list .country.highlight {\r\n      background-color: rgba(0, 0, 0, 0.05); }\r\n    .intl-tel-input .country-list .flag-box, .intl-tel-input .country-list .country-name, .intl-tel-input .country-list .dial-code {\r\n      vertical-align: middle; }\r\n    .intl-tel-input .country-list .flag-box, .intl-tel-input .country-list .country-name {\r\n      margin-right: 6px; }\r\n  .intl-tel-input.allow-dropdown input, .intl-tel-input.allow-dropdown input[type=text], .intl-tel-input.allow-dropdown input[type=tel], .intl-tel-input.separate-dial-code input, .intl-tel-input.separate-dial-code input[type=text], .intl-tel-input.separate-dial-code input[type=tel] {\r\n    padding-right: 6px;\r\n    padding-left: 52px;\r\n    margin-left: 0; }\r\n  .intl-tel-input.allow-dropdown .flag-container, .intl-tel-input.separate-dial-code .flag-container {\r\n    right: auto;\r\n    left: 0; }\r\n  .intl-tel-input.allow-dropdown .flag-container:hover {\r\n    cursor: pointer; }\r\n    .intl-tel-input.allow-dropdown .flag-container:hover .selected-flag {\r\n      background-color: rgba(0, 0, 0, 0.05); }\r\n  .intl-tel-input.allow-dropdown input[disabled] + .flag-container:hover, .intl-tel-input.allow-dropdown input[readonly] + .flag-container:hover {\r\n    cursor: default; }\r\n    .intl-tel-input.allow-dropdown input[disabled] + .flag-container:hover .selected-flag, .intl-tel-input.allow-dropdown input[readonly] + .flag-container:hover .selected-flag {\r\n      background-color: transparent; }\r\n  .intl-tel-input.separate-dial-code .selected-flag {\r\n    background-color: rgba(0, 0, 0, 0.05); }\r\n  .intl-tel-input.separate-dial-code .selected-dial-code {\r\n    margin-left: 6px; }\r\n  .intl-tel-input.iti-container {\r\n    position: absolute;\r\n    top: -1000px;\r\n    left: -1000px;\r\n    z-index: 1060;\r\n    padding: 1px; }\r\n    .intl-tel-input.iti-container:hover {\r\n      cursor: pointer; }\r\n\r\n.iti-mobile .intl-tel-input.iti-container {\r\n  top: 30px;\r\n  bottom: 30px;\r\n  left: 30px;\r\n  right: 30px;\r\n  position: fixed; }\r\n\r\n.iti-mobile .intl-tel-input .country-list {\r\n  max-height: 100%;\r\n  width: 100%; }\r\n  .iti-mobile .intl-tel-input .country-list .country {\r\n    padding: 10px 10px;\r\n    line-height: 1.5em; }\r\n\r\n.iti-flag {\r\n  width: 20px; }\r\n  .iti-flag.be {\r\n    width: 18px; }\r\n  .iti-flag.ch {\r\n    width: 15px; }\r\n  .iti-flag.mc {\r\n    width: 19px; }\r\n  .iti-flag.ne {\r\n    width: 18px; }\r\n  .iti-flag.np {\r\n    width: 13px; }\r\n  .iti-flag.va {\r\n    width: 15px; }\r\n  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\r\n    .iti-flag {\r\n      background-size: 5652px 15px; } }\r\n  .iti-flag.ac {\r\n    height: 10px;\r\n    background-position: 0px 0px; }\r\n  .iti-flag.ad {\r\n    height: 14px;\r\n    background-position: -22px 0px; }\r\n  .iti-flag.ae {\r\n    height: 10px;\r\n    background-position: -44px 0px; }\r\n  .iti-flag.af {\r\n    height: 14px;\r\n    background-position: -66px 0px; }\r\n  .iti-flag.ag {\r\n    height: 14px;\r\n    background-position: -88px 0px; }\r\n  .iti-flag.ai {\r\n    height: 10px;\r\n    background-position: -110px 0px; }\r\n  .iti-flag.al {\r\n    height: 15px;\r\n    background-position: -132px 0px; }\r\n  .iti-flag.am {\r\n    height: 10px;\r\n    background-position: -154px 0px; }\r\n  .iti-flag.ao {\r\n    height: 14px;\r\n    background-position: -176px 0px; }\r\n  .iti-flag.aq {\r\n    height: 14px;\r\n    background-position: -198px 0px; }\r\n  .iti-flag.ar {\r\n    height: 13px;\r\n    background-position: -220px 0px; }\r\n  .iti-flag.as {\r\n    height: 10px;\r\n    background-position: -242px 0px; }\r\n  .iti-flag.at {\r\n    height: 14px;\r\n    background-position: -264px 0px; }\r\n  .iti-flag.au {\r\n    height: 10px;\r\n    background-position: -286px 0px; }\r\n  .iti-flag.aw {\r\n    height: 14px;\r\n    background-position: -308px 0px; }\r\n  .iti-flag.ax {\r\n    height: 13px;\r\n    background-position: -330px 0px; }\r\n  .iti-flag.az {\r\n    height: 10px;\r\n    background-position: -352px 0px; }\r\n  .iti-flag.ba {\r\n    height: 10px;\r\n    background-position: -374px 0px; }\r\n  .iti-flag.bb {\r\n    height: 14px;\r\n    background-position: -396px 0px; }\r\n  .iti-flag.bd {\r\n    height: 12px;\r\n    background-position: -418px 0px; }\r\n  .iti-flag.be {\r\n    height: 15px;\r\n    background-position: -440px 0px; }\r\n  .iti-flag.bf {\r\n    height: 14px;\r\n    background-position: -460px 0px; }\r\n  .iti-flag.bg {\r\n    height: 12px;\r\n    background-position: -482px 0px; }\r\n  .iti-flag.bh {\r\n    height: 12px;\r\n    background-position: -504px 0px; }\r\n  .iti-flag.bi {\r\n    height: 12px;\r\n    background-position: -526px 0px; }\r\n  .iti-flag.bj {\r\n    height: 14px;\r\n    background-position: -548px 0px; }\r\n  .iti-flag.bl {\r\n    height: 14px;\r\n    background-position: -570px 0px; }\r\n  .iti-flag.bm {\r\n    height: 10px;\r\n    background-position: -592px 0px; }\r\n  .iti-flag.bn {\r\n    height: 10px;\r\n    background-position: -614px 0px; }\r\n  .iti-flag.bo {\r\n    height: 14px;\r\n    background-position: -636px 0px; }\r\n  .iti-flag.bq {\r\n    height: 14px;\r\n    background-position: -658px 0px; }\r\n  .iti-flag.br {\r\n    height: 14px;\r\n    background-position: -680px 0px; }\r\n  .iti-flag.bs {\r\n    height: 10px;\r\n    background-position: -702px 0px; }\r\n  .iti-flag.bt {\r\n    height: 14px;\r\n    background-position: -724px 0px; }\r\n  .iti-flag.bv {\r\n    height: 15px;\r\n    background-position: -746px 0px; }\r\n  .iti-flag.bw {\r\n    height: 14px;\r\n    background-position: -768px 0px; }\r\n  .iti-flag.by {\r\n    height: 10px;\r\n    background-position: -790px 0px; }\r\n  .iti-flag.bz {\r\n    height: 14px;\r\n    background-position: -812px 0px; }\r\n  .iti-flag.ca {\r\n    height: 10px;\r\n    background-position: -834px 0px; }\r\n  .iti-flag.cc {\r\n    height: 10px;\r\n    background-position: -856px 0px; }\r\n  .iti-flag.cd {\r\n    height: 15px;\r\n    background-position: -878px 0px; }\r\n  .iti-flag.cf {\r\n    height: 14px;\r\n    background-position: -900px 0px; }\r\n  .iti-flag.cg {\r\n    height: 14px;\r\n    background-position: -922px 0px; }\r\n  .iti-flag.ch {\r\n    height: 15px;\r\n    background-position: -944px 0px; }\r\n  .iti-flag.ci {\r\n    height: 14px;\r\n    background-position: -961px 0px; }\r\n  .iti-flag.ck {\r\n    height: 10px;\r\n    background-position: -983px 0px; }\r\n  .iti-flag.cl {\r\n    height: 14px;\r\n    background-position: -1005px 0px; }\r\n  .iti-flag.cm {\r\n    height: 14px;\r\n    background-position: -1027px 0px; }\r\n  .iti-flag.cn {\r\n    height: 14px;\r\n    background-position: -1049px 0px; }\r\n  .iti-flag.co {\r\n    height: 14px;\r\n    background-position: -1071px 0px; }\r\n  .iti-flag.cp {\r\n    height: 14px;\r\n    background-position: -1093px 0px; }\r\n  .iti-flag.cr {\r\n    height: 12px;\r\n    background-position: -1115px 0px; }\r\n  .iti-flag.cu {\r\n    height: 10px;\r\n    background-position: -1137px 0px; }\r\n  .iti-flag.cv {\r\n    height: 12px;\r\n    background-position: -1159px 0px; }\r\n  .iti-flag.cw {\r\n    height: 14px;\r\n    background-position: -1181px 0px; }\r\n  .iti-flag.cx {\r\n    height: 10px;\r\n    background-position: -1203px 0px; }\r\n  .iti-flag.cy {\r\n    height: 14px;\r\n    background-position: -1225px 0px; }\r\n  .iti-flag.cz {\r\n    height: 14px;\r\n    background-position: -1247px 0px; }\r\n  .iti-flag.de {\r\n    height: 12px;\r\n    background-position: -1269px 0px; }\r\n  .iti-flag.dg {\r\n    height: 10px;\r\n    background-position: -1291px 0px; }\r\n  .iti-flag.dj {\r\n    height: 14px;\r\n    background-position: -1313px 0px; }\r\n  .iti-flag.dk {\r\n    height: 15px;\r\n    background-position: -1335px 0px; }\r\n  .iti-flag.dm {\r\n    height: 10px;\r\n    background-position: -1357px 0px; }\r\n  .iti-flag.do {\r\n    height: 14px;\r\n    background-position: -1379px 0px; }\r\n  .iti-flag.dz {\r\n    height: 14px;\r\n    background-position: -1401px 0px; }\r\n  .iti-flag.ea {\r\n    height: 14px;\r\n    background-position: -1423px 0px; }\r\n  .iti-flag.ec {\r\n    height: 14px;\r\n    background-position: -1445px 0px; }\r\n  .iti-flag.ee {\r\n    height: 13px;\r\n    background-position: -1467px 0px; }\r\n  .iti-flag.eg {\r\n    height: 14px;\r\n    background-position: -1489px 0px; }\r\n  .iti-flag.eh {\r\n    height: 10px;\r\n    background-position: -1511px 0px; }\r\n  .iti-flag.er {\r\n    height: 10px;\r\n    background-position: -1533px 0px; }\r\n  .iti-flag.es {\r\n    height: 14px;\r\n    background-position: -1555px 0px; }\r\n  .iti-flag.et {\r\n    height: 10px;\r\n    background-position: -1577px 0px; }\r\n  .iti-flag.eu {\r\n    height: 14px;\r\n    background-position: -1599px 0px; }\r\n  .iti-flag.fi {\r\n    height: 12px;\r\n    background-position: -1621px 0px; }\r\n  .iti-flag.fj {\r\n    height: 10px;\r\n    background-position: -1643px 0px; }\r\n  .iti-flag.fk {\r\n    height: 10px;\r\n    background-position: -1665px 0px; }\r\n  .iti-flag.fm {\r\n    height: 11px;\r\n    background-position: -1687px 0px; }\r\n  .iti-flag.fo {\r\n    height: 15px;\r\n    background-position: -1709px 0px; }\r\n  .iti-flag.fr {\r\n    height: 14px;\r\n    background-position: -1731px 0px; }\r\n  .iti-flag.ga {\r\n    height: 15px;\r\n    background-position: -1753px 0px; }\r\n  .iti-flag.gb {\r\n    height: 10px;\r\n    background-position: -1775px 0px; }\r\n  .iti-flag.gd {\r\n    height: 12px;\r\n    background-position: -1797px 0px; }\r\n  .iti-flag.ge {\r\n    height: 14px;\r\n    background-position: -1819px 0px; }\r\n  .iti-flag.gf {\r\n    height: 14px;\r\n    background-position: -1841px 0px; }\r\n  .iti-flag.gg {\r\n    height: 14px;\r\n    background-position: -1863px 0px; }\r\n  .iti-flag.gh {\r\n    height: 14px;\r\n    background-position: -1885px 0px; }\r\n  .iti-flag.gi {\r\n    height: 10px;\r\n    background-position: -1907px 0px; }\r\n  .iti-flag.gl {\r\n    height: 14px;\r\n    background-position: -1929px 0px; }\r\n  .iti-flag.gm {\r\n    height: 14px;\r\n    background-position: -1951px 0px; }\r\n  .iti-flag.gn {\r\n    height: 14px;\r\n    background-position: -1973px 0px; }\r\n  .iti-flag.gp {\r\n    height: 14px;\r\n    background-position: -1995px 0px; }\r\n  .iti-flag.gq {\r\n    height: 14px;\r\n    background-position: -2017px 0px; }\r\n  .iti-flag.gr {\r\n    height: 14px;\r\n    background-position: -2039px 0px; }\r\n  .iti-flag.gs {\r\n    height: 10px;\r\n    background-position: -2061px 0px; }\r\n  .iti-flag.gt {\r\n    height: 13px;\r\n    background-position: -2083px 0px; }\r\n  .iti-flag.gu {\r\n    height: 11px;\r\n    background-position: -2105px 0px; }\r\n  .iti-flag.gw {\r\n    height: 10px;\r\n    background-position: -2127px 0px; }\r\n  .iti-flag.gy {\r\n    height: 12px;\r\n    background-position: -2149px 0px; }\r\n  .iti-flag.hk {\r\n    height: 14px;\r\n    background-position: -2171px 0px; }\r\n  .iti-flag.hm {\r\n    height: 10px;\r\n    background-position: -2193px 0px; }\r\n  .iti-flag.hn {\r\n    height: 10px;\r\n    background-position: -2215px 0px; }\r\n  .iti-flag.hr {\r\n    height: 10px;\r\n    background-position: -2237px 0px; }\r\n  .iti-flag.ht {\r\n    height: 12px;\r\n    background-position: -2259px 0px; }\r\n  .iti-flag.hu {\r\n    height: 10px;\r\n    background-position: -2281px 0px; }\r\n  .iti-flag.ic {\r\n    height: 14px;\r\n    background-position: -2303px 0px; }\r\n  .iti-flag.id {\r\n    height: 14px;\r\n    background-position: -2325px 0px; }\r\n  .iti-flag.ie {\r\n    height: 10px;\r\n    background-position: -2347px 0px; }\r\n  .iti-flag.il {\r\n    height: 15px;\r\n    background-position: -2369px 0px; }\r\n  .iti-flag.im {\r\n    height: 10px;\r\n    background-position: -2391px 0px; }\r\n  .iti-flag.in {\r\n    height: 14px;\r\n    background-position: -2413px 0px; }\r\n  .iti-flag.io {\r\n    height: 10px;\r\n    background-position: -2435px 0px; }\r\n  .iti-flag.iq {\r\n    height: 14px;\r\n    background-position: -2457px 0px; }\r\n  .iti-flag.ir {\r\n    height: 12px;\r\n    background-position: -2479px 0px; }\r\n  .iti-flag.is {\r\n    height: 15px;\r\n    background-position: -2501px 0px; }\r\n  .iti-flag.it {\r\n    height: 14px;\r\n    background-position: -2523px 0px; }\r\n  .iti-flag.je {\r\n    height: 12px;\r\n    background-position: -2545px 0px; }\r\n  .iti-flag.jm {\r\n    height: 10px;\r\n    background-position: -2567px 0px; }\r\n  .iti-flag.jo {\r\n    height: 10px;\r\n    background-position: -2589px 0px; }\r\n  .iti-flag.jp {\r\n    height: 14px;\r\n    background-position: -2611px 0px; }\r\n  .iti-flag.ke {\r\n    height: 14px;\r\n    background-position: -2633px 0px; }\r\n  .iti-flag.kg {\r\n    height: 12px;\r\n    background-position: -2655px 0px; }\r\n  .iti-flag.kh {\r\n    height: 13px;\r\n    background-position: -2677px 0px; }\r\n  .iti-flag.ki {\r\n    height: 10px;\r\n    background-position: -2699px 0px; }\r\n  .iti-flag.km {\r\n    height: 12px;\r\n    background-position: -2721px 0px; }\r\n  .iti-flag.kn {\r\n    height: 14px;\r\n    background-position: -2743px 0px; }\r\n  .iti-flag.kp {\r\n    height: 10px;\r\n    background-position: -2765px 0px; }\r\n  .iti-flag.kr {\r\n    height: 14px;\r\n    background-position: -2787px 0px; }\r\n  .iti-flag.kw {\r\n    height: 10px;\r\n    background-position: -2809px 0px; }\r\n  .iti-flag.ky {\r\n    height: 10px;\r\n    background-position: -2831px 0px; }\r\n  .iti-flag.kz {\r\n    height: 10px;\r\n    background-position: -2853px 0px; }\r\n  .iti-flag.la {\r\n    height: 14px;\r\n    background-position: -2875px 0px; }\r\n  .iti-flag.lb {\r\n    height: 14px;\r\n    background-position: -2897px 0px; }\r\n  .iti-flag.lc {\r\n    height: 10px;\r\n    background-position: -2919px 0px; }\r\n  .iti-flag.li {\r\n    height: 12px;\r\n    background-position: -2941px 0px; }\r\n  .iti-flag.lk {\r\n    height: 10px;\r\n    background-position: -2963px 0px; }\r\n  .iti-flag.lr {\r\n    height: 11px;\r\n    background-position: -2985px 0px; }\r\n  .iti-flag.ls {\r\n    height: 14px;\r\n    background-position: -3007px 0px; }\r\n  .iti-flag.lt {\r\n    height: 12px;\r\n    background-position: -3029px 0px; }\r\n  .iti-flag.lu {\r\n    height: 12px;\r\n    background-position: -3051px 0px; }\r\n  .iti-flag.lv {\r\n    height: 10px;\r\n    background-position: -3073px 0px; }\r\n  .iti-flag.ly {\r\n    height: 10px;\r\n    background-position: -3095px 0px; }\r\n  .iti-flag.ma {\r\n    height: 14px;\r\n    background-position: -3117px 0px; }\r\n  .iti-flag.mc {\r\n    height: 15px;\r\n    background-position: -3139px 0px; }\r\n  .iti-flag.md {\r\n    height: 10px;\r\n    background-position: -3160px 0px; }\r\n  .iti-flag.me {\r\n    height: 10px;\r\n    background-position: -3182px 0px; }\r\n  .iti-flag.mf {\r\n    height: 14px;\r\n    background-position: -3204px 0px; }\r\n  .iti-flag.mg {\r\n    height: 14px;\r\n    background-position: -3226px 0px; }\r\n  .iti-flag.mh {\r\n    height: 11px;\r\n    background-position: -3248px 0px; }\r\n  .iti-flag.mk {\r\n    height: 10px;\r\n    background-position: -3270px 0px; }\r\n  .iti-flag.ml {\r\n    height: 14px;\r\n    background-position: -3292px 0px; }\r\n  .iti-flag.mm {\r\n    height: 14px;\r\n    background-position: -3314px 0px; }\r\n  .iti-flag.mn {\r\n    height: 10px;\r\n    background-position: -3336px 0px; }\r\n  .iti-flag.mo {\r\n    height: 14px;\r\n    background-position: -3358px 0px; }\r\n  .iti-flag.mp {\r\n    height: 10px;\r\n    background-position: -3380px 0px; }\r\n  .iti-flag.mq {\r\n    height: 14px;\r\n    background-position: -3402px 0px; }\r\n  .iti-flag.mr {\r\n    height: 14px;\r\n    background-position: -3424px 0px; }\r\n  .iti-flag.ms {\r\n    height: 10px;\r\n    background-position: -3446px 0px; }\r\n  .iti-flag.mt {\r\n    height: 14px;\r\n    background-position: -3468px 0px; }\r\n  .iti-flag.mu {\r\n    height: 14px;\r\n    background-position: -3490px 0px; }\r\n  .iti-flag.mv {\r\n    height: 14px;\r\n    background-position: -3512px 0px; }\r\n  .iti-flag.mw {\r\n    height: 14px;\r\n    background-position: -3534px 0px; }\r\n  .iti-flag.mx {\r\n    height: 12px;\r\n    background-position: -3556px 0px; }\r\n  .iti-flag.my {\r\n    height: 10px;\r\n    background-position: -3578px 0px; }\r\n  .iti-flag.mz {\r\n    height: 14px;\r\n    background-position: -3600px 0px; }\r\n  .iti-flag.na {\r\n    height: 14px;\r\n    background-position: -3622px 0px; }\r\n  .iti-flag.nc {\r\n    height: 10px;\r\n    background-position: -3644px 0px; }\r\n  .iti-flag.ne {\r\n    height: 15px;\r\n    background-position: -3666px 0px; }\r\n  .iti-flag.nf {\r\n    height: 10px;\r\n    background-position: -3686px 0px; }\r\n  .iti-flag.ng {\r\n    height: 10px;\r\n    background-position: -3708px 0px; }\r\n  .iti-flag.ni {\r\n    height: 12px;\r\n    background-position: -3730px 0px; }\r\n  .iti-flag.nl {\r\n    height: 14px;\r\n    background-position: -3752px 0px; }\r\n  .iti-flag.no {\r\n    height: 15px;\r\n    background-position: -3774px 0px; }\r\n  .iti-flag.np {\r\n    height: 15px;\r\n    background-position: -3796px 0px; }\r\n  .iti-flag.nr {\r\n    height: 10px;\r\n    background-position: -3811px 0px; }\r\n  .iti-flag.nu {\r\n    height: 10px;\r\n    background-position: -3833px 0px; }\r\n  .iti-flag.nz {\r\n    height: 10px;\r\n    background-position: -3855px 0px; }\r\n  .iti-flag.om {\r\n    height: 10px;\r\n    background-position: -3877px 0px; }\r\n  .iti-flag.pa {\r\n    height: 14px;\r\n    background-position: -3899px 0px; }\r\n  .iti-flag.pe {\r\n    height: 14px;\r\n    background-position: -3921px 0px; }\r\n  .iti-flag.pf {\r\n    height: 14px;\r\n    background-position: -3943px 0px; }\r\n  .iti-flag.pg {\r\n    height: 15px;\r\n    background-position: -3965px 0px; }\r\n  .iti-flag.ph {\r\n    height: 10px;\r\n    background-position: -3987px 0px; }\r\n  .iti-flag.pk {\r\n    height: 14px;\r\n    background-position: -4009px 0px; }\r\n  .iti-flag.pl {\r\n    height: 13px;\r\n    background-position: -4031px 0px; }\r\n  .iti-flag.pm {\r\n    height: 14px;\r\n    background-position: -4053px 0px; }\r\n  .iti-flag.pn {\r\n    height: 10px;\r\n    background-position: -4075px 0px; }\r\n  .iti-flag.pr {\r\n    height: 14px;\r\n    background-position: -4097px 0px; }\r\n  .iti-flag.ps {\r\n    height: 10px;\r\n    background-position: -4119px 0px; }\r\n  .iti-flag.pt {\r\n    height: 14px;\r\n    background-position: -4141px 0px; }\r\n  .iti-flag.pw {\r\n    height: 13px;\r\n    background-position: -4163px 0px; }\r\n  .iti-flag.py {\r\n    height: 11px;\r\n    background-position: -4185px 0px; }\r\n  .iti-flag.qa {\r\n    height: 8px;\r\n    background-position: -4207px 0px; }\r\n  .iti-flag.re {\r\n    height: 14px;\r\n    background-position: -4229px 0px; }\r\n  .iti-flag.ro {\r\n    height: 14px;\r\n    background-position: -4251px 0px; }\r\n  .iti-flag.rs {\r\n    height: 14px;\r\n    background-position: -4273px 0px; }\r\n  .iti-flag.ru {\r\n    height: 14px;\r\n    background-position: -4295px 0px; }\r\n  .iti-flag.rw {\r\n    height: 14px;\r\n    background-position: -4317px 0px; }\r\n  .iti-flag.sa {\r\n    height: 14px;\r\n    background-position: -4339px 0px; }\r\n  .iti-flag.sb {\r\n    height: 10px;\r\n    background-position: -4361px 0px; }\r\n  .iti-flag.sc {\r\n    height: 10px;\r\n    background-position: -4383px 0px; }\r\n  .iti-flag.sd {\r\n    height: 10px;\r\n    background-position: -4405px 0px; }\r\n  .iti-flag.se {\r\n    height: 13px;\r\n    background-position: -4427px 0px; }\r\n  .iti-flag.sg {\r\n    height: 14px;\r\n    background-position: -4449px 0px; }\r\n  .iti-flag.sh {\r\n    height: 10px;\r\n    background-position: -4471px 0px; }\r\n  .iti-flag.si {\r\n    height: 10px;\r\n    background-position: -4493px 0px; }\r\n  .iti-flag.sj {\r\n    height: 15px;\r\n    background-position: -4515px 0px; }\r\n  .iti-flag.sk {\r\n    height: 14px;\r\n    background-position: -4537px 0px; }\r\n  .iti-flag.sl {\r\n    height: 14px;\r\n    background-position: -4559px 0px; }\r\n  .iti-flag.sm {\r\n    height: 15px;\r\n    background-position: -4581px 0px; }\r\n  .iti-flag.sn {\r\n    height: 14px;\r\n    background-position: -4603px 0px; }\r\n  .iti-flag.so {\r\n    height: 14px;\r\n    background-position: -4625px 0px; }\r\n  .iti-flag.sr {\r\n    height: 14px;\r\n    background-position: -4647px 0px; }\r\n  .iti-flag.ss {\r\n    height: 10px;\r\n    background-position: -4669px 0px; }\r\n  .iti-flag.st {\r\n    height: 10px;\r\n    background-position: -4691px 0px; }\r\n  .iti-flag.sv {\r\n    height: 12px;\r\n    background-position: -4713px 0px; }\r\n  .iti-flag.sx {\r\n    height: 14px;\r\n    background-position: -4735px 0px; }\r\n  .iti-flag.sy {\r\n    height: 14px;\r\n    background-position: -4757px 0px; }\r\n  .iti-flag.sz {\r\n    height: 14px;\r\n    background-position: -4779px 0px; }\r\n  .iti-flag.ta {\r\n    height: 10px;\r\n    background-position: -4801px 0px; }\r\n  .iti-flag.tc {\r\n    height: 10px;\r\n    background-position: -4823px 0px; }\r\n  .iti-flag.td {\r\n    height: 14px;\r\n    background-position: -4845px 0px; }\r\n  .iti-flag.tf {\r\n    height: 14px;\r\n    background-position: -4867px 0px; }\r\n  .iti-flag.tg {\r\n    height: 13px;\r\n    background-position: -4889px 0px; }\r\n  .iti-flag.th {\r\n    height: 14px;\r\n    background-position: -4911px 0px; }\r\n  .iti-flag.tj {\r\n    height: 10px;\r\n    background-position: -4933px 0px; }\r\n  .iti-flag.tk {\r\n    height: 10px;\r\n    background-position: -4955px 0px; }\r\n  .iti-flag.tl {\r\n    height: 10px;\r\n    background-position: -4977px 0px; }\r\n  .iti-flag.tm {\r\n    height: 14px;\r\n    background-position: -4999px 0px; }\r\n  .iti-flag.tn {\r\n    height: 14px;\r\n    background-position: -5021px 0px; }\r\n  .iti-flag.to {\r\n    height: 10px;\r\n    background-position: -5043px 0px; }\r\n  .iti-flag.tr {\r\n    height: 14px;\r\n    background-position: -5065px 0px; }\r\n  .iti-flag.tt {\r\n    height: 12px;\r\n    background-position: -5087px 0px; }\r\n  .iti-flag.tv {\r\n    height: 10px;\r\n    background-position: -5109px 0px; }\r\n  .iti-flag.tw {\r\n    height: 14px;\r\n    background-position: -5131px 0px; }\r\n  .iti-flag.tz {\r\n    height: 14px;\r\n    background-position: -5153px 0px; }\r\n  .iti-flag.ua {\r\n    height: 14px;\r\n    background-position: -5175px 0px; }\r\n  .iti-flag.ug {\r\n    height: 14px;\r\n    background-position: -5197px 0px; }\r\n  .iti-flag.um {\r\n    height: 11px;\r\n    background-position: -5219px 0px; }\r\n  .iti-flag.un {\r\n    height: 14px;\r\n    background-position: -5241px 0px; }\r\n  .iti-flag.us {\r\n    height: 11px;\r\n    background-position: -5263px 0px; }\r\n  .iti-flag.uy {\r\n    height: 14px;\r\n    background-position: -5285px 0px; }\r\n  .iti-flag.uz {\r\n    height: 10px;\r\n    background-position: -5307px 0px; }\r\n  .iti-flag.va {\r\n    height: 15px;\r\n    background-position: -5329px 0px; }\r\n  .iti-flag.vc {\r\n    height: 14px;\r\n    background-position: -5346px 0px; }\r\n  .iti-flag.ve {\r\n    height: 14px;\r\n    background-position: -5368px 0px; }\r\n  .iti-flag.vg {\r\n    height: 10px;\r\n    background-position: -5390px 0px; }\r\n  .iti-flag.vi {\r\n    height: 14px;\r\n    background-position: -5412px 0px; }\r\n  .iti-flag.vn {\r\n    height: 14px;\r\n    background-position: -5434px 0px; }\r\n  .iti-flag.vu {\r\n    height: 12px;\r\n    background-position: -5456px 0px; }\r\n  .iti-flag.wf {\r\n    height: 14px;\r\n    background-position: -5478px 0px; }\r\n  .iti-flag.ws {\r\n    height: 10px;\r\n    background-position: -5500px 0px; }\r\n  .iti-flag.xk {\r\n    height: 15px;\r\n    background-position: -5522px 0px; }\r\n  .iti-flag.ye {\r\n    height: 14px;\r\n    background-position: -5544px 0px; }\r\n  .iti-flag.yt {\r\n    height: 14px;\r\n    background-position: -5566px 0px; }\r\n  .iti-flag.za {\r\n    height: 14px;\r\n    background-position: -5588px 0px; }\r\n  .iti-flag.zm {\r\n    height: 14px;\r\n    background-position: -5610px 0px; }\r\n  .iti-flag.zw {\r\n    height: 10px;\r\n    background-position: -5632px 0px; }\r\n\r\n.iti-flag {\r\n  height: 15px;\r\n  box-shadow: 0px 0px 1px 0px #888;\r\n  /* background-image: url("./flags.png"); */\r\n  background-repeat: no-repeat;\r\n  background-color: #DBDBDB;\r\n  background-position: 20px 0; }\r\n  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {\r\n    .iti-flag {\r\n      /* background-image: url("./flags@2x.png"); */\r\n    } }\r\n\r\n.iti-flag.np {\r\n  background-color: transparent; }\r\n',
      "",
    ]);
  },
  function (e, t, n) {
    (e.exports = n(6)(!1)).push([
      e.i,
      "/* scss variables */\n.news-insights-slider {\n  padding-top: 75px;\n  padding-bottom: 100px; }\n  @media only screen and (max-width: 767px) {\n    .news-insights-slider {\n      padding-top: 40px;\n      padding-bottom: 50px; } }\n  .news-insights-slider .row-wrap {\n    display: flex; }\n  .news-insights-slider .title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    will-change: transform, opacity; }\n    @media only screen and (max-width: 991px) {\n      .news-insights-slider .title {\n        flex-direction: column;\n        align-items: flex-start; } }\n    .news-insights-slider .title h2 {\n      margin: 0; }\n      @media only screen and (max-width: 991px) {\n        .news-insights-slider .title h2 {\n          margin-bottom: 20px; } }\n  .news-insights-slider .news-slider-wrapper {\n    width: 60%; }\n    @media only screen and (max-width: 1279px) {\n      .news-insights-slider .news-slider-wrapper {\n        width: 100%; } }\n  .news-insights-slider .featured-news-slider {\n    padding: 68px 0% 0 0; }\n    @media only screen and (max-width: 767px) {\n      .news-insights-slider .featured-news-slider {\n        padding-top: 33px; } }\n    .news-insights-slider .featured-news-slider .news-parallax-wrapper {\n      width: 97.8%;\n      height: auto;\n      position: relative;\n      overflow: hidden; }\n      .news-insights-slider .featured-news-slider .news-parallax-wrapper .swiper-container {\n        top: auto;\n        height: auto;\n        position: relative; }\n        .news-insights-slider .featured-news-slider .news-parallax-wrapper .swiper-container .swiper-wrapper .swiper-slide .media-wrapper {\n          top: auto;\n          bottom: 0;\n          height: 100%;\n          position: relative; }\n          .news-insights-slider .featured-news-slider .news-parallax-wrapper .swiper-container .swiper-wrapper .swiper-slide .media-wrapper img {\n            object-fit: contain; }\n        .news-insights-slider .featured-news-slider .news-parallax-wrapper .swiper-container .swiper-wrapper .swiper-slide:after {\n          display: none; }\n  .news-insights-slider .news-listing-wrapper {\n    width: 40%; }\n    @media only screen and (max-width: 1279px) {\n      .news-insights-slider .news-listing-wrapper {\n        display: none; } }\n  .news-insights-slider .news-listing {\n    padding-top: 68px; }\n    .news-insights-slider .news-listing .each-news {\n      padding: 30px 0 40px 0;\n      margin-left: auto;\n      max-width: 399px;\n      position: relative; }\n      .news-insights-slider .news-listing .each-news:last-child {\n        padding-bottom: 0; }\n      .news-insights-slider .news-listing .each-news .span {\n        position: absolute;\n        top: 0;\n        left: 0;\n        background-color: #323E48;\n        height: 1px;\n        width: 0%; }\n      .news-insights-slider .news-listing .each-news a span, .news-insights-slider .news-listing .each-news a h4, .news-insights-slider .news-listing .each-news a p {\n        transition: 0.3s all ease-out; }\n      .news-insights-slider .news-listing .each-news a:hover h4,\n      .news-insights-slider .news-listing .each-news a:hover p {\n        text-decoration: none;\n        color: #1D2428;\n        opacity: 0.5; }\n      .news-insights-slider .news-listing .each-news h4 {\n        margin-bottom: 10px;\n        letter-spacing: -1px;\n        color: #1D2428; }\n      .news-insights-slider .news-listing .each-news p {\n        color: #1D2428; }\n\n.featured-news {\n  margin-top: 33px;\n  padding-top: 27px;\n  position: relative; }\n  .featured-news .animated-line {\n    top: 0;\n    left: 0;\n    width: 97.8%; }\n  .featured-news h3, .featured-news p {\n    color: #1D2428;\n    transition: 0.3s all ease-out; }\n  .featured-news a:hover h3,\n  .featured-news a:hover p {\n    color: #1D2428;\n    opacity: 0.5; }\n  @media only screen and (max-width: 1279px) {\n    .featured-news p {\n      max-width: 673px; } }\n  @media only screen and (max-width: 991px) {\n    .featured-news p {\n      max-width: 100%; } }\n  @media only screen and (max-width: 1279px) {\n    .featured-news h3 {\n      padding-inline-end: 20%;\n      letter-spacing: -1px; } }\n  @media only screen and (max-width: 991px) {\n    .featured-news h3 {\n      padding-inline-end: 0px; } }\n  .featured-news .content-wrapper p {\n    margin-top: 10px; }\n  .featured-news .controls {\n    position: relative;\n    display: flex;\n    align-items: center;\n    width: 382px;\n    justify-content: space-between;\n    margin-top: 60px;\n    height: 16px; }\n    .featured-news .controls.disabled {\n      display: none; }\n    @media only screen and (max-width: 767px) {\n      .featured-news .controls {\n        width: 100%; } }\n    @media only screen and (max-width: 539px) {\n      .featured-news .controls .pagination-wrapper .swiper-progress-bar {\n        width: 140px; } }\n    .featured-news .controls .pagination-wrapper .swiper-progress-bar.animate:after {\n      transition-duration: 9s; }\n    @media only screen and (max-width: 536px) {\n      .featured-news .controls .navigation {\n        margin-left: 20px; } }\n    .featured-news .controls .pagination-wrapper,\n    .featured-news .controls .navigation {\n      position: relative;\n      top: auto;\n      left: auto;\n      right: auto;\n      bottom: auto;\n      display: flex;\n      align-items: center; }\n    .featured-news .controls .pagination-wrapper {\n      height: 100%; }\n      @media only screen and (max-width: 539px) {\n        .featured-news .controls .pagination-wrapper {\n          display: flex;\n          align-items: center;\n          width: 205px; } }\n      .featured-news .controls .pagination-wrapper .swiper-counter {\n        color: #323E48;\n        height: 16px; }\n\n.animated-line {\n  height: 1px;\n  width: 100%;\n  position: absolute;\n  background-color: #323E48; }",
      "",
    ]);
  },
  function (e, t, n) {
    (e.exports = n(6)(!1)).push([
      e.i,
      "/**\n * Swiper 7.4.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2021 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: December 24, 2021\n */\n\n@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:'next'}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:50%;background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;animation:swiper-preloader-spin 1s infinite linear;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{100%{transform:rotate(360deg)}}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-next+.swiper-slide,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}",
      "",
    ]);
  },
  function (e, t, n) {
    var i = n(29);
    "string" == typeof i && (i = [[e.i, i, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(0)(i, r);
    i.locals && (e.exports = i.locals);
  },
  function (e, t, n) {},
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    const i =
        "undefined" != typeof window &&
        null != window.customElements &&
        void 0 !== window.customElements.polyfillWrapFlushCallback,
      r = (e, t, n = null) => {
        for (; t !== n; ) {
          const n = t.nextSibling;
          e.removeChild(t), (t = n);
        }
      },
      o = `{{lit-${String(Math.random()).slice(2)}}}`,
      s = `\x3c!--${o}--\x3e`,
      a = new RegExp(`${o}|${s}`),
      l = "$lit$";
    class c {
      constructor(e, t) {
        (this.parts = []), (this.element = t);
        const n = [],
          i = [],
          r = document.createTreeWalker(t.content, 133, null, !1);
        let s = 0,
          c = -1,
          p = 0;
        const {
          strings: f,
          values: { length: g },
        } = e;
        for (; p < g; ) {
          const e = r.nextNode();
          if (null !== e) {
            if ((c++, 1 === e.nodeType)) {
              if (e.hasAttributes()) {
                const t = e.attributes,
                  { length: n } = t;
                let i = 0;
                for (let e = 0; e < n; e++) u(t[e].name, l) && i++;
                for (; i-- > 0; ) {
                  const t = f[p],
                    n = h.exec(t)[2],
                    i = n.toLowerCase() + l,
                    r = e.getAttribute(i);
                  e.removeAttribute(i);
                  const o = r.split(a);
                  this.parts.push({
                    type: "attribute",
                    index: c,
                    name: n,
                    strings: o,
                  }),
                    (p += o.length - 1);
                }
              }
              "TEMPLATE" === e.tagName &&
                (i.push(e), (r.currentNode = e.content));
            }
            else if (3 === e.nodeType) {
              const t = e.data;
              if (t.indexOf(o) >= 0) {
                const i = e.parentNode,
                  r = t.split(a),
                  o = r.length - 1;
                for (let t = 0; t < o; t++) {
                  let n,
                    o = r[t];
                  if ("" === o) n = d();
                  else {
                    const e = h.exec(o);
                    null !== e &&
                      u(e[2], l) &&
                      (o =
                        o.slice(0, e.index) +
                        e[1] +
                        e[2].slice(0, -l.length) +
                        e[3]),
                      (n = document.createTextNode(o));
                  }
                  i.insertBefore(n, e),
                    this.parts.push({ type: "node", index: ++c });
                }
                "" === r[o]
                  ? (i.insertBefore(d(), e), n.push(e))
                  : (e.data = r[o]),
                  (p += o);
              }
            }
            else if (8 === e.nodeType)
              if (e.data === o) {
                const t = e.parentNode;
                (null !== e.previousSibling && c !== s) ||
                  (c++, t.insertBefore(d(), e)),
                  (s = c),
                  this.parts.push({ type: "node", index: c }),
                  null === e.nextSibling ? (e.data = "") : (n.push(e), c--),
                  p++;
              }
              else {
                let t = -1;
                for (; -1 !== (t = e.data.indexOf(o, t + 1)); )
                  this.parts.push({ type: "node", index: -1 }), p++;
              }
          }
          else r.currentNode = i.pop();
        }
        for (const e of n) e.parentNode.removeChild(e);
      }
    }
    const u = (e, t) => {
        const n = e.length - t.length;
        return n >= 0 && e.slice(n) === t;
      },
      p = (e) => -1 !== e.index,
      d = () => document.createComment(""),
      h =
        /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,
      f = 133;
    function g(e, t) {
      const {
          element: { content: n },
          parts: i,
        } = e,
        r = document.createTreeWalker(n, f, null, !1);
      let o = v(i),
        s = i[o],
        a = -1,
        l = 0;
      const c = [];
      let u = null;
      for (; r.nextNode(); ) {
        a++;
        const e = r.currentNode;
        for (
          e.previousSibling === u && (u = null),
            t.has(e) && (c.push(e), null === u && (u = e)),
            null !== u && l++;
          void 0 !== s && s.index === a;

        )
          (s.index = null !== u ? -1 : s.index - l), (s = i[(o = v(i, o))]);
      }
      c.forEach((e) => e.parentNode.removeChild(e));
    }
    const m = (e) => {
        let t = 11 === e.nodeType ? 0 : 1;
        const n = document.createTreeWalker(e, f, null, !1);
        for (; n.nextNode(); ) t++;
        return t;
      },
      v = (e, t = -1) => {
        for (let n = t + 1; n < e.length; n++) {
          const t = e[n];
          if (p(t)) return n;
        }
        return -1;
      };
    const y = new WeakMap(),
      b = (e) => "function" == typeof e && y.has(e),
      w = {},
      x = {};
    class _ {
      constructor(e, t, n) {
        (this.__parts = []),
          (this.template = e),
          (this.processor = t),
          (this.options = n);
      }
      update(e) {
        let t = 0;
        for (const n of this.__parts) void 0 !== n && n.setValue(e[t]), t++;
        for (const e of this.__parts) void 0 !== e && e.commit();
      }
      _clone() {
        const e = i
            ? this.template.element.content.cloneNode(!0)
            : document.importNode(this.template.element.content, !0),
          t = [],
          n = this.template.parts,
          r = document.createTreeWalker(e, 133, null, !1);
        let o,
          s = 0,
          a = 0,
          l = r.nextNode();
        for (; s < n.length; )
          if (((o = n[s]), p(o))) {
            for (; a < o.index; )
              a++,
                "TEMPLATE" === l.nodeName &&
                  (t.push(l), (r.currentNode = l.content)),
                null === (l = r.nextNode()) &&
                  ((r.currentNode = t.pop()), (l = r.nextNode()));
            if ("node" === o.type) {
              const e = this.processor.handleTextExpression(this.options);
              e.insertAfterNode(l.previousSibling), this.__parts.push(e);
            }
            else
              this.__parts.push(
                ...this.processor.handleAttributeExpressions(
                  l,
                  o.name,
                  o.strings,
                  this.options
                )
              );
            s++;
          }
          else this.__parts.push(void 0), s++;
        return i && (document.adoptNode(e), customElements.upgrade(e)), e;
      }
    }
    const C =
        window.trustedTypes &&
        trustedTypes.createPolicy("lit-html", { createHTML: (e) => e }),
      k = ` ${o} `;
    class T {
      constructor(e, t, n, i) {
        (this.strings = e),
          (this.values = t),
          (this.type = n),
          (this.processor = i);
      }
      getHTML() {
        const e = this.strings.length - 1;
        let t = "",
          n = !1;
        for (let i = 0; i < e; i++) {
          const e = this.strings[i],
            r = e.lastIndexOf("\x3c!--");
          n = (r > -1 || n) && -1 === e.indexOf("--\x3e", r + 1);
          const a = h.exec(e);
          t +=
            null === a
              ? e + (n ? k : s)
              : e.substr(0, a.index) + a[1] + a[2] + l + a[3] + o;
        }
        return (t += this.strings[e]);
      }
      getTemplateElement() {
        const e = document.createElement("template");
        let t = this.getHTML();
        return void 0 !== C && (t = C.createHTML(t)), (e.innerHTML = t), e;
      }
    }
    const A = (e) =>
        null === e || !("object" == typeof e || "function" == typeof e),
      S = (e) => Array.isArray(e) || !(!e || !e[Symbol.iterator]);
    class E {
      constructor(e, t, n) {
        (this.dirty = !0),
          (this.element = e),
          (this.name = t),
          (this.strings = n),
          (this.parts = []);
        for (let e = 0; e < n.length - 1; e++)
          this.parts[e] = this._createPart();
      }
      _createPart() {
        return new P(this);
      }
      _getValue() {
        const e = this.strings,
          t = e.length - 1,
          n = this.parts;
        if (1 === t && "" === e[0] && "" === e[1]) {
          const e = n[0].value;
          if ("symbol" == typeof e) return String(e);
          if ("string" == typeof e || !S(e)) return e;
        }
        let i = "";
        for (let r = 0; r < t; r++) {
          i += e[r];
          const t = n[r];
          if (void 0 !== t) {
            const e = t.value;
            if (A(e) || !S(e)) i += "string" == typeof e ? e : String(e);
            else for (const t of e) i += "string" == typeof t ? t : String(t);
          }
        }
        return (i += e[t]);
      }
      commit() {
        this.dirty &&
          ((this.dirty = !1),
          this.element.setAttribute(this.name, this._getValue()));
      }
    }
    class P {
      constructor(e) {
        (this.value = void 0), (this.committer = e);
      }
      setValue(e) {
        e === w ||
          (A(e) && e === this.value) ||
          ((this.value = e), b(e) || (this.committer.dirty = !0));
      }
      commit() {
        for (; b(this.value); ) {
          const e = this.value;
          (this.value = w), e(this);
        }
        this.value !== w && this.committer.commit();
      }
    }
    class O {
      constructor(e) {
        (this.value = void 0),
          (this.__pendingValue = void 0),
          (this.options = e);
      }
      appendInto(e) {
        (this.startNode = e.appendChild(d())),
          (this.endNode = e.appendChild(d()));
      }
      insertAfterNode(e) {
        (this.startNode = e), (this.endNode = e.nextSibling);
      }
      appendIntoPart(e) {
        e.__insert((this.startNode = d())), e.__insert((this.endNode = d()));
      }
      insertAfterPart(e) {
        e.__insert((this.startNode = d())),
          (this.endNode = e.endNode),
          (e.endNode = this.startNode);
      }
      setValue(e) {
        this.__pendingValue = e;
      }
      commit() {
        if (null === this.startNode.parentNode) return;
        for (; b(this.__pendingValue); ) {
          const e = this.__pendingValue;
          (this.__pendingValue = w), e(this);
        }
        const e = this.__pendingValue;
        e !== w &&
          (A(e)
            ? e !== this.value && this.__commitText(e)
            : e instanceof T
            ? this.__commitTemplateResult(e)
            : e instanceof Node
            ? this.__commitNode(e)
            : S(e)
            ? this.__commitIterable(e)
            : e === x
            ? ((this.value = x), this.clear())
            : this.__commitText(e));
      }
      __insert(e) {
        this.endNode.parentNode.insertBefore(e, this.endNode);
      }
      __commitNode(e) {
        this.value !== e && (this.clear(), this.__insert(e), (this.value = e));
      }
      __commitText(e) {
        const t = this.startNode.nextSibling,
          n = "string" == typeof (e = null == e ? "" : e) ? e : String(e);
        t === this.endNode.previousSibling && 3 === t.nodeType
          ? (t.data = n)
          : this.__commitNode(document.createTextNode(n)),
          (this.value = e);
      }
      __commitTemplateResult(e) {
        const t = this.options.templateFactory(e);
        if (this.value instanceof _ && this.value.template === t)
          this.value.update(e.values);
        else {
          const n = new _(t, e.processor, this.options),
            i = n._clone();
          n.update(e.values), this.__commitNode(i), (this.value = n);
        }
      }
      __commitIterable(e) {
        Array.isArray(this.value) || ((this.value = []), this.clear());
        const t = this.value;
        let n,
          i = 0;
        for (const r of e)
          void 0 === (n = t[i]) &&
            ((n = new O(this.options)),
            t.push(n),
            0 === i ? n.appendIntoPart(this) : n.insertAfterPart(t[i - 1])),
            n.setValue(r),
            n.commit(),
            i++;
        i < t.length && ((t.length = i), this.clear(n && n.endNode));
      }
      clear(e = this.startNode) {
        r(this.startNode.parentNode, e.nextSibling, this.endNode);
      }
    }
    class L {
      constructor(e, t, n) {
        if (
          ((this.value = void 0),
          (this.__pendingValue = void 0),
          2 !== n.length || "" !== n[0] || "" !== n[1])
        )
          throw new Error(
            "Boolean attributes can only contain a single expression"
          );
        (this.element = e), (this.name = t), (this.strings = n);
      }
      setValue(e) {
        this.__pendingValue = e;
      }
      commit() {
        for (; b(this.__pendingValue); ) {
          const e = this.__pendingValue;
          (this.__pendingValue = w), e(this);
        }
        if (this.__pendingValue === w) return;
        const e = !!this.__pendingValue;
        this.value !== e &&
          (e
            ? this.element.setAttribute(this.name, "")
            : this.element.removeAttribute(this.name),
          (this.value = e)),
          (this.__pendingValue = w);
      }
    }
    class D extends E {
      constructor(e, t, n) {
        super(e, t, n),
          (this.single = 2 === n.length && "" === n[0] && "" === n[1]);
      }
      _createPart() {
        return new M(this);
      }
      _getValue() {
        return this.single ? this.parts[0].value : super._getValue();
      }
      commit() {
        this.dirty &&
          ((this.dirty = !1), (this.element[this.name] = this._getValue()));
      }
    }
    class M extends P {}
    let I = !1;
    (() => {
      try {
        const e = {
          get capture() {
            return (I = !0), !1;
          },
        };
        window.addEventListener("test", e, e),
          window.removeEventListener("test", e, e);
      } catch (e) {}
    })();
    class $ {
      constructor(e, t, n) {
        (this.value = void 0),
          (this.__pendingValue = void 0),
          (this.element = e),
          (this.eventName = t),
          (this.eventContext = n),
          (this.__boundHandleEvent = (e) => this.handleEvent(e));
      }
      setValue(e) {
        this.__pendingValue = e;
      }
      commit() {
        for (; b(this.__pendingValue); ) {
          const e = this.__pendingValue;
          (this.__pendingValue = w), e(this);
        }
        if (this.__pendingValue === w) return;
        const e = this.__pendingValue,
          t = this.value,
          n =
            null == e ||
            (null != t &&
              (e.capture !== t.capture ||
                e.once !== t.once ||
                e.passive !== t.passive)),
          i = null != e && (null == t || n);
        n &&
          this.element.removeEventListener(
            this.eventName,
            this.__boundHandleEvent,
            this.__options
          ),
          i &&
            ((this.__options = N(e)),
            this.element.addEventListener(
              this.eventName,
              this.__boundHandleEvent,
              this.__options
            )),
          (this.value = e),
          (this.__pendingValue = w);
      }
      handleEvent(e) {
        "function" == typeof this.value
          ? this.value.call(this.eventContext || this.element, e)
          : this.value.handleEvent(e);
      }
    }
    const N = (e) =>
      e &&
      (I
        ? { capture: e.capture, passive: e.passive, once: e.once }
        : e.capture);
    function z(e) {
      let t = j.get(e.type);
      void 0 === t &&
        ((t = { stringsArray: new WeakMap(), keyString: new Map() }),
        j.set(e.type, t));
      let n = t.stringsArray.get(e.strings);
      if (void 0 !== n) return n;
      const i = e.strings.join(o);
      return (
        void 0 === (n = t.keyString.get(i)) &&
          ((n = new c(e, e.getTemplateElement())), t.keyString.set(i, n)),
        t.stringsArray.set(e.strings, n),
        n
      );
    }
    const j = new Map(),
      R = new WeakMap();
    const B = new (class {
      handleAttributeExpressions(e, t, n, i) {
        const r = t[0];
        return "." === r
          ? new D(e, t.slice(1), n).parts
          : "@" === r
          ? [new $(e, t.slice(1), i.eventContext)]
          : "?" === r
          ? [new L(e, t.slice(1), n)]
          : new E(e, t, n).parts;
      }
      handleTextExpression(e) {
        return new O(e);
      }
    })();
    "undefined" != typeof window &&
      (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
    const F = (e, ...t) => new T(e, t, "html", B),
      q = (e, t) => `${e}--${t}`;
    let H = !0;
    void 0 === window.ShadyCSS
      ? (H = !1)
      : void 0 === window.ShadyCSS.prepareTemplateDom && (H = !1);
    const U = ["html", "svg"],
      G = new Set(),
      V = (e, t, n) => {
        G.add(e);
        const i = n ? n.element : document.createElement("template"),
          r = t.querySelectorAll("style"),
          { length: o } = r;
        if (0 === o) return void window.ShadyCSS.prepareTemplateStyles(i, e);
        const s = document.createElement("style");
        for (let e = 0; e < o; e++) {
          const t = r[e];
          t.parentNode.removeChild(t), (s.textContent += t.textContent);
        }
        (e = e),
          U.forEach((t) => {
            const n = j.get(q(t, e));
            void 0 !== n &&
              n.keyString.forEach((e) => {
                const {
                    element: { content: t },
                  } = e,
                  n = new Set();
                Array.from(t.querySelectorAll("style")).forEach((e) => {
                  n.add(e);
                }),
                  g(e, n);
              });
          });
        const a = i.content;
        n
          ? (function (e, t, n = null) {
              const {
                element: { content: i },
                parts: r,
              } = e;
              if (null === n || void 0 === n) return void i.appendChild(t);
              const o = document.createTreeWalker(i, f, null, !1);
              let s = v(r),
                a = 0,
                l = -1;
              for (; o.nextNode(); )
                for (
                  l++,
                    o.currentNode === n &&
                      ((a = m(t)), n.parentNode.insertBefore(t, n));
                  -1 !== s && r[s].index === l;

                ) {
                  if (a > 0) {
                    for (; -1 !== s; ) (r[s].index += a), (s = v(r, s));
                    return;
                  }
                  s = v(r, s);
                }
            })(n, s, a.firstChild)
          : a.insertBefore(s, a.firstChild),
          window.ShadyCSS.prepareTemplateStyles(i, e);
        const l = a.querySelector("style");
        if (window.ShadyCSS.nativeShadow && null !== l)
          t.insertBefore(l.cloneNode(!0), t.firstChild);
        else if (n) {
          a.insertBefore(s, a.firstChild);
          const e = new Set();
          e.add(s), g(n, e);
        }
      };
    var W;
    window.JSCompiler_renameProperty = (e, t) => e;
    const Y = {
        toAttribute(e, t) {
          switch (t) {
            case Boolean:
              return e ? "" : null;
            case Object:
            case Array:
              return null == e ? e : JSON.stringify(e);
          }
          return e;
        },
        fromAttribute(e, t) {
          switch (t) {
            case Boolean:
              return null !== e;
            case Number:
              return null === e ? null : Number(e);
            case Object:
            case Array:
              return JSON.parse(e);
          }
          return e;
        },
      },
      X = (e, t) => t !== e && (t == t || e == e),
      K = {
        attribute: !0,
        type: String,
        converter: Y,
        reflect: !1,
        hasChanged: X,
      },
      Z = 1,
      Q = 4,
      J = 8,
      ee = 16,
      te = "finalized";
    class ne extends HTMLElement {
      constructor() {
        super(), this.initialize();
      }
      static get observedAttributes() {
        this.finalize();
        const e = [];
        return (
          this._classProperties.forEach((t, n) => {
            const i = this._attributeNameForProperty(n, t);
            void 0 !== i && (this._attributeToPropertyMap.set(i, n), e.push(i));
          }),
          e
        );
      }
      static _ensureClassProperties() {
        if (
          !this.hasOwnProperty(
            JSCompiler_renameProperty("_classProperties", this)
          )
        ) {
          this._classProperties = new Map();
          const e = Object.getPrototypeOf(this)._classProperties;
          void 0 !== e && e.forEach((e, t) => this._classProperties.set(t, e));
        }
      }
      static createProperty(e, t = K) {
        if (
          (this._ensureClassProperties(),
          this._classProperties.set(e, t),
          t.noAccessor || this.prototype.hasOwnProperty(e))
        )
          return;
        const n = "symbol" == typeof e ? Symbol() : `__${e}`,
          i = this.getPropertyDescriptor(e, n, t);
        void 0 !== i && Object.defineProperty(this.prototype, e, i);
      }
      static getPropertyDescriptor(e, t, n) {
        return {
          get() {
            return this[t];
          },
          set(i) {
            const r = this[e];
            (this[t] = i), this.requestUpdateInternal(e, r, n);
          },
          configurable: !0,
          enumerable: !0,
        };
      }
      static getPropertyOptions(e) {
        return (this._classProperties && this._classProperties.get(e)) || K;
      }
      static finalize() {
        const e = Object.getPrototypeOf(this);
        if (
          (e.hasOwnProperty(te) || e.finalize(),
          (this[te] = !0),
          this._ensureClassProperties(),
          (this._attributeToPropertyMap = new Map()),
          this.hasOwnProperty(JSCompiler_renameProperty("properties", this)))
        ) {
          const e = this.properties,
            t = [
              ...Object.getOwnPropertyNames(e),
              ...("function" == typeof Object.getOwnPropertySymbols
                ? Object.getOwnPropertySymbols(e)
                : []),
            ];
          for (const n of t) this.createProperty(n, e[n]);
        }
      }
      static _attributeNameForProperty(e, t) {
        const n = t.attribute;
        return !1 === n
          ? void 0
          : "string" == typeof n
          ? n
          : "string" == typeof e
          ? e.toLowerCase()
          : void 0;
      }
      static _valueHasChanged(e, t, n = X) {
        return n(e, t);
      }
      static _propertyValueFromAttribute(e, t) {
        const n = t.type,
          i = t.converter || Y,
          r = "function" == typeof i ? i : i.fromAttribute;
        return r ? r(e, n) : e;
      }
      static _propertyValueToAttribute(e, t) {
        if (void 0 === t.reflect) return;
        const n = t.type,
          i = t.converter;
        return ((i && i.toAttribute) || Y.toAttribute)(e, n);
      }
      initialize() {
        (this._updateState = 0),
          (this._updatePromise = new Promise(
            (e) => (this._enableUpdatingResolver = e)
          )),
          (this._changedProperties = new Map()),
          this._saveInstanceProperties(),
          this.requestUpdateInternal();
      }
      _saveInstanceProperties() {
        this.constructor._classProperties.forEach((e, t) => {
          if (this.hasOwnProperty(t)) {
            const e = this[t];
            delete this[t],
              this._instanceProperties ||
                (this._instanceProperties = new Map()),
              this._instanceProperties.set(t, e);
          }
        });
      }
      _applyInstanceProperties() {
        this._instanceProperties.forEach((e, t) => (this[t] = e)),
          (this._instanceProperties = void 0);
      }
      connectedCallback() {
        this.enableUpdating();
      }
      enableUpdating() {
        void 0 !== this._enableUpdatingResolver &&
          (this._enableUpdatingResolver(),
          (this._enableUpdatingResolver = void 0));
      }
      disconnectedCallback() {}
      attributeChangedCallback(e, t, n) {
        t !== n && this._attributeToProperty(e, n);
      }
      _propertyToAttribute(e, t, n = K) {
        const i = this.constructor,
          r = i._attributeNameForProperty(e, n);
        if (void 0 !== r) {
          const e = i._propertyValueToAttribute(t, n);
          if (void 0 === e) return;
          (this._updateState = this._updateState | J),
            null == e ? this.removeAttribute(r) : this.setAttribute(r, e),
            (this._updateState = this._updateState & ~J);
        }
      }
      _attributeToProperty(e, t) {
        if (this._updateState & J) return;
        const n = this.constructor,
          i = n._attributeToPropertyMap.get(e);
        if (void 0 !== i) {
          const e = n.getPropertyOptions(i);
          (this._updateState = this._updateState | ee),
            (this[i] = n._propertyValueFromAttribute(t, e)),
            (this._updateState = this._updateState & ~ee);
        }
      }
      requestUpdateInternal(e, t, n) {
        let i = !0;
        if (void 0 !== e) {
          const r = this.constructor;
          (n = n || r.getPropertyOptions(e)),
            r._valueHasChanged(this[e], t, n.hasChanged)
              ? (this._changedProperties.has(e) ||
                  this._changedProperties.set(e, t),
                !0 !== n.reflect ||
                  this._updateState & ee ||
                  (void 0 === this._reflectingProperties &&
                    (this._reflectingProperties = new Map()),
                  this._reflectingProperties.set(e, n)))
              : (i = !1);
        }
        !this._hasRequestedUpdate &&
          i &&
          (this._updatePromise = this._enqueueUpdate());
      }
      requestUpdate(e, t) {
        return this.requestUpdateInternal(e, t), this.updateComplete;
      }
      async _enqueueUpdate() {
        this._updateState = this._updateState | Q;
        try {
          await this._updatePromise;
        } catch (e) {}
        const e = this.performUpdate();
        return null != e && (await e), !this._hasRequestedUpdate;
      }
      get _hasRequestedUpdate() {
        return this._updateState & Q;
      }
      get hasUpdated() {
        return this._updateState & Z;
      }
      performUpdate() {
        if (!this._hasRequestedUpdate) return;
        this._instanceProperties && this._applyInstanceProperties();
        let e = !1;
        const t = this._changedProperties;
        try {
          (e = this.shouldUpdate(t)) ? this.update(t) : this._markUpdated();
        } catch (t) {
          throw ((e = !1), this._markUpdated(), t);
        }
        e &&
          (this._updateState & Z ||
            ((this._updateState = this._updateState | Z), this.firstUpdated(t)),
          this.updated(t));
      }
      _markUpdated() {
        (this._changedProperties = new Map()),
          (this._updateState = this._updateState & ~Q);
      }
      get updateComplete() {
        return this._getUpdateComplete();
      }
      _getUpdateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._updatePromise;
      }
      shouldUpdate(e) {
        return !0;
      }
      update(e) {
        void 0 !== this._reflectingProperties &&
          this._reflectingProperties.size > 0 &&
          (this._reflectingProperties.forEach((e, t) =>
            this._propertyToAttribute(t, this[t], e)
          ),
          (this._reflectingProperties = void 0)),
          this._markUpdated();
      }
      updated(e) {}
      firstUpdated(e) {}
    }
    ne[te] = !0;
    const ie = (e, t) =>
        "method" !== t.kind || !t.descriptor || "value" in t.descriptor
          ? {
              kind: "field",
              key: Symbol(),
              placement: "own",
              descriptor: {},
              initializer() {
                "function" == typeof t.initializer &&
                  (this[t.key] = t.initializer.call(this));
              },
              finisher(n) {
                n.createProperty(t.key, e);
              },
            }
          : Object.assign(Object.assign({}, t), {
              finisher(n) {
                n.createProperty(t.key, e);
              },
            }),
      re = (e, t, n) => {
        t.constructor.createProperty(n, e);
      };
    function oe(e) {
      return (t, n) => (void 0 !== n ? re(e, t, n) : ie(e, t));
    }
    const se = Element.prototype;
    se.msMatchesSelector || se.webkitMatchesSelector;
    const ae =
        window.ShadowRoot &&
        (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
        "adoptedStyleSheets" in Document.prototype &&
        "replace" in CSSStyleSheet.prototype,
      le = Symbol();
    class ce {
      constructor(e, t) {
        if (t !== le)
          throw new Error(
            "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
          );
        this.cssText = e;
      }
      get styleSheet() {
        return (
          void 0 === this._styleSheet &&
            (ae
              ? ((this._styleSheet = new CSSStyleSheet()),
                this._styleSheet.replaceSync(this.cssText))
              : (this._styleSheet = null)),
          this._styleSheet
        );
      }
      toString() {
        return this.cssText;
      }
    }
    const ue = (e) => new ce(String(e), le),
      pe = (e, ...t) => {
        const n = t.reduce(
          (t, n, i) =>
            t +
            ((e) => {
              if (e instanceof ce) return e.cssText;
              if ("number" == typeof e) return e;
              throw new Error(
                `Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`
              );
            })(n) +
            e[i + 1],
          e[0]
        );
        return new ce(n, le);
      };
    (window.litElementVersions || (window.litElementVersions = [])).push(
      "2.5.1"
    );
    const de = {};
    class he extends ne {
      static getStyles() {
        return this.styles;
      }
      static _getUniqueStyles() {
        if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this)))
          return;
        const e = this.getStyles();
        if (Array.isArray(e)) {
          const t = (e, n) =>
              e.reduceRight(
                (e, n) => (Array.isArray(n) ? t(n, e) : (e.add(n), e)),
                n
              ),
            n = [];
          t(e, new Set()).forEach((e) => n.unshift(e)), (this._styles = n);
        }
        else this._styles = void 0 === e ? [] : [e];
        this._styles = this._styles.map((e) => {
          if (e instanceof CSSStyleSheet && !ae) {
            const t = Array.prototype.slice
              .call(e.cssRules)
              .reduce((e, t) => e + t.cssText, "");
            return ue(t);
          }
          return e;
        });
      }
      initialize() {
        super.initialize(),
          this.constructor._getUniqueStyles(),
          (this.renderRoot = this.createRenderRoot()),
          window.ShadowRoot &&
            this.renderRoot instanceof window.ShadowRoot &&
            this.adoptStyles();
      }
      createRenderRoot() {
        return this.attachShadow(this.constructor.shadowRootOptions);
      }
      adoptStyles() {
        const e = this.constructor._styles;
        0 !== e.length &&
          (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
            ? ae
              ? (this.renderRoot.adoptedStyleSheets = e.map((e) =>
                  e instanceof CSSStyleSheet ? e : e.styleSheet
                ))
              : (this._needsShimAdoptedStyleSheets = !0)
            : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
                e.map((e) => e.cssText),
                this.localName
              ));
      }
      connectedCallback() {
        super.connectedCallback(),
          this.hasUpdated &&
            void 0 !== window.ShadyCSS &&
            window.ShadyCSS.styleElement(this);
      }
      update(e) {
        const t = this.render();
        super.update(e),
          t !== de &&
            this.constructor.render(t, this.renderRoot, {
              scopeName: this.localName,
              eventContext: this,
            }),
          this._needsShimAdoptedStyleSheets &&
            ((this._needsShimAdoptedStyleSheets = !1),
            this.constructor._styles.forEach((e) => {
              const t = document.createElement("style");
              (t.textContent = e.cssText), this.renderRoot.appendChild(t);
            }));
      }
      render() {
        return de;
      }
    }
    (he.finalized = !0),
      (he.render = (e, t, n) => {
        if (!n || "object" != typeof n || !n.scopeName)
          throw new Error("The `scopeName` option is required.");
        const i = n.scopeName,
          s = R.has(t),
          a = H && 11 === t.nodeType && !!t.host,
          l = a && !G.has(i),
          u = l ? document.createDocumentFragment() : t;
        if (
          (((e, t, n) => {
            let i = R.get(t);
            void 0 === i &&
              (r(t, t.firstChild),
              R.set(t, (i = new O(Object.assign({ templateFactory: z }, n)))),
              i.appendInto(t)),
              i.setValue(e),
              i.commit();
          })(
            e,
            u,
            Object.assign(
              {
                templateFactory: ((e) => (t) => {
                  const n = q(t.type, e);
                  let i = j.get(n);
                  void 0 === i &&
                    ((i = {
                      stringsArray: new WeakMap(),
                      keyString: new Map(),
                    }),
                    j.set(n, i));
                  let r = i.stringsArray.get(t.strings);
                  if (void 0 !== r) return r;
                  const s = t.strings.join(o);
                  if (void 0 === (r = i.keyString.get(s))) {
                    const n = t.getTemplateElement();
                    H && window.ShadyCSS.prepareTemplateDom(n, e),
                      (r = new c(t, n)),
                      i.keyString.set(s, r);
                  }
                  return i.stringsArray.set(t.strings, r), r;
                })(i),
              },
              n
            )
          ),
          l)
        ) {
          const e = R.get(u);
          R.delete(u);
          const n = e.value instanceof _ ? e.value.template : void 0;
          V(i, u, n), r(t, t.firstChild), t.appendChild(u), R.set(t, e);
        }
        !s && a && window.ShadyCSS.styleElement(t.host);
      }),
      (he.shadowRootOptions = { mode: "open" });
    var fe = function (e, t, n, i) {
      var r,
        o = arguments.length,
        s =
          o < 3
            ? t
            : null === i
            ? (i = Object.getOwnPropertyDescriptor(t, n))
            : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, n, i);
      else
        for (var a = e.length - 1; a >= 0; a--)
          (r = e[a]) &&
            (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
      return o > 3 && s && Object.defineProperty(t, n, s), s;
    };
    let ge = class extends he {
      constructor() {
        super(...arguments), (this.filters = "none");
      }
      render() {
        return F`
      <div id="inner">
        ${this.cloneOutside()}
      </div>
    `;
      }
      connectedCallback() {
        super.connectedCallback();
        const { width: e, height: t } = document.body.getBoundingClientRect();
        this.style.setProperty("--body-width", `${e}px`),
          this.style.setProperty("--body-height", `${t}px`);
        const { left: n, top: i } = this.parentElement.getBoundingClientRect();
        this.style.setProperty("--x", `${n}px`),
          this.style.setProperty("--y", `${i}px`),
          window.addEventListener("scroll", () => {
            requestAnimationFrame(() => {
              this.shadowRoot.children[0].style.transform = `translateY(-${
                document.body.scrollTop || document.documentElement.scrollTop
              }px)`;
            });
          }),
          window.addEventListener("resize", () => {
            requestAnimationFrame(() => {
              const { left: e, top: t } =
                  this.parentElement.getBoundingClientRect(),
                { width: n, height: i } = document.body.getBoundingClientRect();
              this.style.setProperty("--body-width", `${n}px`),
                this.style.setProperty("--body-height", `${i}px`),
                this.style.setProperty("--x", `${e}px`),
                this.style.setProperty("--y", `${t}px`);
            });
          });
      }
      attributeChangedCallback(e, t, n) {
        super.attributeChangedCallback(e, t, n),
          this.style.setProperty("--filters", this.filters);
      }
      cloneOutside() {
        let e;
        this.isConnected && (e = this.parentElement).removeChild(this);
        const t = [...document.body.children, ...document.head.children].map(
          (e) => e.cloneNode(!0)
        );
        return e && e.appendChild(this), t;
      }
    };
    (ge.styles = [
      pe`
      :host {
        display: block;

        width: 100%;
        height: 100%;

        overflow: hidden;

        background-color: white;
      }

      #inner {
        position: relative;

        width: var(--body-width);
        height: var(--body-height);

        top: calc(8px - var(--y));
        left: calc(8px - var(--x));

        will-change: transform;

        filter: var(--filters);
      }
    `,
    ]),
      fe([oe({ type: String })], ge.prototype, "filters", void 0),
      (ge = fe(
        [
          (
            (e) => (t) =>
              "function" == typeof t
                ? ((e, t) => (window.customElements.define(e, t), t))(e, t)
                : ((e, t) => {
                    const { kind: n, elements: i } = t;
                    return {
                      kind: n,
                      elements: i,
                      finisher(t) {
                        window.customElements.define(e, t);
                      },
                    };
                  })(e, t)
          )("backdrop-filter"),
        ],
        ge
      ));
  },
]);
