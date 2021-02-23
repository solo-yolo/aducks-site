(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(__create(__getProtoOf(module)), "default", {value: module, enumerable: true}), module);
  };

  // dist/build/_fallback-48127026.js
  var require_fallback_48127026 = __commonJS((exports) => {
    __export(exports, {
      default: () => fallback_48127026_default
    });
    const main = __toModule(require_main());
    function h(s2) {
      let t2, a2, d2, f2, h2, m2, p, b, x;
      return {c() {
        t2 = main.e("section"), a2 = main.e("div"), d2 = main.e("p"), d2.textContent = "404", f2 = main.a(), h2 = main.e("p"), m2 = main.t("Page not found.\n      "), p = main.e("a"), b = main.t("Go back"), main.b(d2, "class", "title"), main.b(p, "href", x = s2[0]("../")), main.b(h2, "class", "subtitle"), main.b(a2, "class", "hero-body"), main.b(t2, "class", "hero is-medium has-text-centered");
      }, m(s3, e2) {
        main.c(s3, t2, e2), main.d(t2, a2), main.d(a2, d2), main.d(a2, f2), main.d(a2, h2), main.d(h2, m2), main.d(h2, p), main.d(p, b);
      }, p(s3, [t3]) {
        1 & t3 && x !== (x = s3[0]("../")) && main.b(p, "href", x);
      }, i: main.n, o: main.n, d(s3) {
        s3 && main.f(t2);
      }};
    }
    function m(s2, t2, a2) {
      let e2;
      return main.g(s2, main.u, (s3) => a2(0, e2 = s3)), [e2];
    }
    class fallback_48127026_default extends main.S {
      constructor(s2) {
        super(), main.i(this, s2, m, h, main.s, {});
      }
    }
  });

  // dist/build/index-966b8bee.js
  var require_index_966b8bee = __commonJS((exports) => {
    __export(exports, {
      default: () => index_966b8bee_default
    });
    const main = __toModule(require_main());
    function c(t2) {
      let s2;
      return {c() {
        s2 = main.e("p"), s2.textContent = ":P";
      }, m(t3, n2) {
        main.c(t3, s2, n2);
      }, p: main.n, i: main.n, o: main.n, d(t3) {
        t3 && main.f(s2);
      }};
    }
    function p(t2) {
      return main.m.title = "\u0410\u0443\u0442\u044F\u0442\u0430", main.m.description = "Description coming soon...", [];
    }
    class index_966b8bee_default extends main.S {
      constructor(t2) {
        super(), main.i(this, t2, p, c, main.s, {});
      }
    }
  });

  // dist/build/_layout-47635a1c.js
  var require_layout_47635a1c = __commonJS((exports) => {
    __export(exports, {
      default: () => layout_47635a1c_default
    });
    const main = __toModule(require_main());
    function w(n2, a2, s2) {
      const t2 = n2.slice();
      return t2[4] = a2[s2][0], t2[5] = a2[s2][1], t2;
    }
    function q(n2) {
      let a2, s2, f2, d2, m2 = n2[4] + "";
      return {c() {
        a2 = main.e("a"), s2 = main.t(m2), f2 = main.a(), main.b(a2, "class", "navbar-item"), main.b(a2, "href", d2 = n2[0](n2[5])), main.h(a2, "is-active", n2[1](n2[5]));
      }, m(n3, t2) {
        main.c(n3, a2, t2), main.d(a2, s2), main.d(a2, f2);
      }, p(n3, s3) {
        1 & s3 && d2 !== (d2 = n3[0](n3[5])) && main.b(a2, "href", d2), 6 & s3 && main.h(a2, "is-active", n3[1](n3[5]));
      }, d(n3) {
        n3 && main.f(a2);
      }};
    }
    function C(n2) {
      let a2, s2, c2, o2, m2, $2, p2 = n2[2] && function(n3) {
        let a3, s3, c3 = n3[2], i2 = [];
        for (let a4 = 0; a4 < c3.length; a4 += 1)
          i2[a4] = q(w(n3, c3, a4));
        return {c() {
          a3 = main.e("div"), s3 = main.e("div");
          for (let n4 = 0; n4 < i2.length; n4 += 1)
            i2[n4].c();
          main.b(s3, "class", "navbar-start"), main.b(a3, "class", "navbar-menu");
        }, m(n4, t2) {
          main.c(n4, a3, t2), main.d(a3, s3);
          for (let n5 = 0; n5 < i2.length; n5 += 1)
            i2[n5].m(s3, null);
        }, p(n4, a4) {
          if (7 & a4) {
            let t2;
            for (c3 = n4[2], t2 = 0; t2 < c3.length; t2 += 1) {
              const e2 = w(n4, c3, t2);
              i2[t2] ? i2[t2].p(e2, a4) : (i2[t2] = q(e2), i2[t2].c(), i2[t2].m(s3, null));
            }
            for (; t2 < i2.length; t2 += 1)
              i2[t2].d(1);
            i2.length = c3.length;
          }
        }, d(n4) {
          n4 && main.f(a3), main.j(i2, n4);
        }};
      }(n2);
      return {c() {
        a2 = main.e("nav"), s2 = main.e("div"), c2 = main.e("a"), o2 = main.e("strong"), o2.textContent = "\u0410\u0443\u0442\u044F\u0442\u0430", $2 = main.a(), p2 && p2.c(), main.b(c2, "class", "navbar-item"), main.b(c2, "href", m2 = n2[0]("./index")), main.b(s2, "class", "navbar-brand"), main.b(a2, "class", "navbar is-dark is-mobile"), main.b(a2, "role", "navigation"), main.b(a2, "aria-label", "main navigation");
      }, m(n3, t2) {
        main.c(n3, a2, t2), main.d(a2, s2), main.d(s2, c2), main.d(c2, o2), main.d(a2, $2), p2 && p2.m(a2, null);
      }, p(n3, [a3]) {
        1 & a3 && m2 !== (m2 = n3[0]("./index")) && main.b(c2, "href", m2), n3[2] && p2.p(n3, a3);
      }, i: main.n, o: main.n, d(n3) {
        n3 && main.f(a2), p2 && p2.d();
      }};
    }
    function S(n2, a2, s2) {
      let t2, e2;
      main.g(n2, main.u, (n3) => s2(0, t2 = n3)), main.g(n2, main.k, (n3) => s2(1, e2 = n3));
      return [t2, e2, []];
    }
    class y extends main.S {
      constructor(n2) {
        super(), main.i(this, n2, S, C, main.s, {});
      }
    }
    function z(n2) {
      let a2, s2, t2;
      a2 = new y({});
      const e2 = n2[1].default, l2 = main.l(e2, n2, n2[0], null);
      return {c() {
        main.o(a2.$$.fragment), s2 = main.a(), l2 && l2.c();
      }, m(n3, e3) {
        main.p(a2, n3, e3), main.c(n3, s2, e3), l2 && l2.m(n3, e3), t2 = true;
      }, p(n3, [a3]) {
        l2 && l2.p && 1 & a3 && main.q(l2, e2, n3, n3[0], a3, null, null);
      }, i(n3) {
        t2 || (main.r(a2.$$.fragment, n3), main.r(l2, n3), t2 = true);
      }, o(n3) {
        main.v(a2.$$.fragment, n3), main.v(l2, n3), t2 = false;
      }, d(n3) {
        main.w(a2, n3), n3 && main.f(s2), l2 && l2.d(n3);
      }};
    }
    function A(n2, a2, s2) {
      let {$$slots: t2 = {}, $$scope: e2} = a2;
      return n2.$$set = (n3) => {
        "$$scope" in n3 && s2(0, e2 = n3.$$scope);
      }, [e2, t2];
    }
    class layout_47635a1c_default extends main.S {
      constructor(n2) {
        super(), main.i(this, n2, A, z, main.s, {});
      }
    }
  });

  // dist/build/main.js
  var require_main = __commonJS((exports) => {
    __export(exports, {
      S: () => tt,
      a: () => b,
      b: () => _,
      c: () => h,
      d: () => d,
      e: () => y,
      f: () => m,
      g: () => l,
      h: () => x,
      i: () => Y,
      j: () => g,
      k: () => Tt,
      l: () => u,
      m: () => qt,
      n: () => t,
      o: () => V,
      p: () => Z,
      q: () => f,
      r: () => J,
      s: () => s,
      t: () => $,
      u: () => Mt,
      v: () => z,
      w: () => X
    });
    function t() {
    }
    function e(t2, e2) {
      for (const n2 in e2)
        t2[n2] = e2[n2];
      return t2;
    }
    function n(t2) {
      return t2();
    }
    function o() {
      return Object.create(null);
    }
    function r(t2) {
      t2.forEach(n);
    }
    function i(t2) {
      return typeof t2 == "function";
    }
    function s(t2, e2) {
      return t2 != t2 ? e2 == e2 : t2 !== e2 || t2 && typeof t2 == "object" || typeof t2 == "function";
    }
    function a(e2, ...n2) {
      if (e2 == null)
        return t;
      const o2 = e2.subscribe(...n2);
      return o2.unsubscribe ? () => o2.unsubscribe() : o2;
    }
    function c(t2) {
      let e2;
      return a(t2, (t3) => e2 = t3)(), e2;
    }
    function l(t2, e2, n2) {
      t2.$$.on_destroy.push(a(e2, n2));
    }
    function u(t2, e2, n2, o2) {
      if (t2) {
        const r2 = p(t2, e2, n2, o2);
        return t2[0](r2);
      }
    }
    function p(t2, n2, o2, r2) {
      return t2[1] && r2 ? e(o2.ctx.slice(), t2[1](r2(n2))) : o2.ctx;
    }
    function f(t2, e2, n2, o2, r2, i2, s2) {
      const a2 = function(t3, e3, n3, o3) {
        if (t3[2] && o3) {
          const r3 = t3[2](o3(n3));
          if (e3.dirty === void 0)
            return r3;
          if (typeof r3 == "object") {
            const t4 = [], n4 = Math.max(e3.dirty.length, r3.length);
            for (let o4 = 0; o4 < n4; o4 += 1)
              t4[o4] = e3.dirty[o4] | r3[o4];
            return t4;
          }
          return e3.dirty | r3;
        }
        return e3.dirty;
      }(e2, o2, r2, i2);
      if (a2) {
        const r3 = p(e2, n2, o2, s2);
        t2.p(r3, a2);
      }
    }
    function d(t2, e2) {
      t2.appendChild(e2);
    }
    function h(t2, e2, n2) {
      t2.insertBefore(e2, n2 || null);
    }
    function m(t2) {
      t2.parentNode.removeChild(t2);
    }
    function g(t2, e2) {
      for (let n2 = 0; n2 < t2.length; n2 += 1)
        t2[n2] && t2[n2].d(e2);
    }
    function y(t2) {
      return document.createElement(t2);
    }
    function $(t2) {
      return document.createTextNode(t2);
    }
    function b() {
      return $(" ");
    }
    function w() {
      return $("");
    }
    function _(t2, e2, n2) {
      n2 == null ? t2.removeAttribute(e2) : t2.getAttribute(e2) !== n2 && t2.setAttribute(e2, n2);
    }
    function x(t2, e2, n2) {
      t2.classList[n2 ? "add" : "remove"](e2);
    }
    let v;
    function P(t2) {
      v = t2;
    }
    function k() {
      if (!v)
        throw new Error("Function called outside component initialization");
      return v;
    }
    function O(t2, e2) {
      k().$$.context.set(t2, e2);
    }
    function j(t2) {
      return k().$$.context.get(t2);
    }
    const E = [];
    const S = [];
    const I = [];
    const L = [];
    const F = Promise.resolve();
    let N = false;
    function R() {
      N || (N = true, F.then(C));
    }
    function M() {
      return R(), F;
    }
    function T(t2) {
      I.push(t2);
    }
    let A = false;
    const q = new Set();
    function C() {
      if (!A) {
        A = true;
        do {
          for (let t2 = 0; t2 < E.length; t2 += 1) {
            const e2 = E[t2];
            P(e2), B(e2.$$);
          }
          for (P(null), E.length = 0; S.length; )
            S.pop()();
          for (let t2 = 0; t2 < I.length; t2 += 1) {
            const e2 = I[t2];
            q.has(e2) || (q.add(e2), e2());
          }
          I.length = 0;
        } while (E.length);
        for (; L.length; )
          L.pop()();
        N = false, A = false, q.clear();
      }
    }
    function B(t2) {
      if (t2.fragment !== null) {
        t2.update(), r(t2.before_update);
        const e2 = t2.dirty;
        t2.dirty = [-1], t2.fragment && t2.fragment.p(t2.ctx, e2), t2.after_update.forEach(T);
      }
    }
    const U = new Set();
    let H;
    function K() {
      H = {r: 0, c: [], p: H};
    }
    function D() {
      H.r || r(H.c), H = H.p;
    }
    function J(t2, e2) {
      t2 && t2.i && (U.delete(t2), t2.i(e2));
    }
    function z(t2, e2, n2, o2) {
      if (t2 && t2.o) {
        if (U.has(t2))
          return;
        U.add(t2), H.c.push(() => {
          U.delete(t2), o2 && (n2 && t2.d(1), o2());
        }), t2.o(e2);
      }
    }
    function W(t2, e2) {
      t2.d(1), e2.delete(t2.key);
    }
    function G(t2, e2) {
      z(t2, 1, 1, () => {
        e2.delete(t2.key);
      });
    }
    function Q(t2, e2, n2, o2, r2, i2, s2, a2, c2, l2, u2, p2) {
      let f2 = t2.length, d2 = i2.length, h2 = f2;
      const m2 = {};
      for (; h2--; )
        m2[t2[h2].key] = h2;
      const g2 = [], y2 = new Map(), $2 = new Map();
      for (h2 = d2; h2--; ) {
        const t3 = p2(r2, i2, h2), a3 = n2(t3);
        let c3 = s2.get(a3);
        c3 ? o2 && c3.p(t3, e2) : (c3 = l2(a3, t3), c3.c()), y2.set(a3, g2[h2] = c3), a3 in m2 && $2.set(a3, Math.abs(h2 - m2[a3]));
      }
      const b2 = new Set(), w2 = new Set();
      function _2(t3) {
        J(t3, 1), t3.m(a2, u2), s2.set(t3.key, t3), u2 = t3.first, d2--;
      }
      for (; f2 && d2; ) {
        const e3 = g2[d2 - 1], n3 = t2[f2 - 1], o3 = e3.key, r3 = n3.key;
        e3 === n3 ? (u2 = e3.first, f2--, d2--) : y2.has(r3) ? !s2.has(o3) || b2.has(o3) ? _2(e3) : w2.has(r3) ? f2-- : $2.get(o3) > $2.get(r3) ? (w2.add(o3), _2(e3)) : (b2.add(r3), f2--) : (c2(n3, s2), f2--);
      }
      for (; f2--; ) {
        const e3 = t2[f2];
        y2.has(e3.key) || c2(e3, s2);
      }
      for (; d2; )
        _2(g2[d2 - 1]);
      return g2;
    }
    function V(t2) {
      t2 && t2.c();
    }
    function Z(t2, e2, o2) {
      const {fragment: s2, on_mount: a2, on_destroy: c2, after_update: l2} = t2.$$;
      s2 && s2.m(e2, o2), T(() => {
        const e3 = a2.map(n).filter(i);
        c2 ? c2.push(...e3) : r(e3), t2.$$.on_mount = [];
      }), l2.forEach(T);
    }
    function X(t2, e2) {
      const n2 = t2.$$;
      n2.fragment !== null && (r(n2.on_destroy), n2.fragment && n2.fragment.d(e2), n2.on_destroy = n2.fragment = null, n2.ctx = []);
    }
    function Y(e2, n2, i2, s2, a2, c2, l2 = [-1]) {
      const u2 = v;
      P(e2);
      const p2 = e2.$$ = {fragment: null, ctx: null, props: c2, update: t, not_equal: a2, bound: o(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : []), callbacks: o(), dirty: l2, skip_bound: false};
      let f2 = false;
      if (p2.ctx = i2 ? i2(e2, n2.props || {}, (t2, n3, ...o2) => {
        const r2 = o2.length ? o2[0] : n3;
        return p2.ctx && a2(p2.ctx[t2], p2.ctx[t2] = r2) && (!p2.skip_bound && p2.bound[t2] && p2.bound[t2](r2), f2 && function(t3, e3) {
          t3.$$.dirty[0] === -1 && (E.push(t3), R(), t3.$$.dirty.fill(0)), t3.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
        }(e2, t2)), n3;
      }) : [], p2.update(), f2 = true, r(p2.before_update), p2.fragment = !!s2 && s2(p2.ctx), n2.target) {
        if (n2.hydrate) {
          const t2 = function(t3) {
            return Array.from(t3.childNodes);
          }(n2.target);
          p2.fragment && p2.fragment.l(t2), t2.forEach(m);
        } else
          p2.fragment && p2.fragment.c();
        n2.intro && J(e2.$$.fragment), Z(e2, n2.target, n2.anchor), C();
      }
      P(u2);
    }
    class tt {
      $destroy() {
        X(this, 1), this.$destroy = t;
      }
      $on(t2, e2) {
        const n2 = this.$$.callbacks[t2] || (this.$$.callbacks[t2] = []);
        return n2.push(e2), () => {
          const t3 = n2.indexOf(e2);
          t3 !== -1 && n2.splice(t3, 1);
        };
      }
      $set(t2) {
        var e2;
        this.$$set && (e2 = t2, Object.keys(e2).length !== 0) && (this.$$.skip_bound = true, this.$$set(t2), this.$$.skip_bound = false);
      }
    }
    var et = {queryHandler: {parse: (t2) => {
      return e2 = new URLSearchParams(t2), [...e2].reduce((t3, [e3, n2]) => (t3[e3] = n2, t3), {});
      var e2;
    }, stringify: (t2) => "?" + new URLSearchParams(t2).toString()}, urlTransform: {apply: (t2) => t2, remove: (t2) => t2}, useHash: false};
    const nt = RegExp(/\:([^/()]+)/g);
    function ot(t2) {
      if (navigator.userAgent.includes("jsdom"))
        return false;
      rt(t2), function() {
        if (navigator.userAgent.includes("jsdom"))
          return false;
        const {hash: t3} = window.location;
        if (t3) {
          if (/^[A-Za-z]+[\w\-\:\.]*$/.test(t3.substring(1))) {
            const e2 = document.querySelector(t3);
            e2 && e2.scrollIntoView();
          }
        }
      }();
    }
    function rt(t2) {
      t2 && t2.scrollTo && t2.dataset.routify !== "scroll-lock" && t2.dataset["routify-scroll"] !== "lock" && (t2.style["scroll-behavior"] = "auto", t2.scrollTo({top: 0, behavior: "auto"}), t2.style["scroll-behavior"] = "", rt(t2.parentElement));
    }
    const it = (t2) => {
      const e2 = [];
      let n2;
      for (; n2 = nt.exec(t2); )
        e2.push(n2[1]);
      return e2;
    };
    function st(t2, e2) {
      st._console = st._console || {log: console.log, warn: console.warn};
      const {_console: n2} = st, o2 = t2.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t2.component.shortPath.split("/").pop()).replace(/^./, (t3) => t3.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r2 = [`<${o2}> received an unexpected slot "default".`, `<${o2}> was created with unknown prop 'scoped'`, `<${o2}> was created with unknown prop 'scopedSync'`];
      for (const t3 of ["log", "warn"])
        console[t3] = (...e3) => {
          r2.includes(e3[0]) || n2[t3](...e3);
        }, e2().then(() => {
          console[t3] = n2[t3];
        });
    }
    function at() {
      let t2 = window.location.pathname + window.location.search + window.location.hash;
      const {url: e2, options: n2} = function(t3) {
        const [e3, n3] = t3.split("__[[routify_url_options]]__"), o2 = JSON.parse(decodeURIComponent(n3 || "") || "{}");
        return window.routify = window.routify || {}, window.routify.prefetched = o2.prefetch, {url: e3, options: o2};
      }(t2);
      return {...ct(e2), options: n2};
    }
    function ct(t2) {
      et.useHash && (t2 = t2.replace(/.*#(.+)/, "$1"));
      const e2 = t2.startsWith("/") ? window.location.origin : void 0, n2 = new URL(t2, e2);
      return {url: n2, fullpath: n2.pathname + n2.search + n2.hash};
    }
    function lt(t2, e2, n2) {
      const o2 = et.useHash ? "#" : "";
      let r2;
      return r2 = function(t3, e3, n3) {
        const o3 = Object.assign({}, n3, e3), r3 = function(t4, e4) {
          if (!et.queryHandler)
            return "";
          const n4 = it(t4), o4 = {};
          e4 && Object.entries(e4).forEach(([t5, e5]) => {
            n4.includes(t5) || (o4[t5] = e5);
          });
          return et.queryHandler.stringify(o4).replace(/\?$/, "");
        }(t3, e3);
        for (const [e4, n4] of Object.entries(o3))
          t3 = t3.replace(`:${e4}`, n4);
        return `${t3}${r3}`;
      }(t2, e2, n2), r2 = et.urlTransform.apply(r2), r2 = o2 + r2, r2;
    }
    function ut(t2) {
      let e2;
      const n2 = t2[2].default, o2 = u(n2, t2, t2[1], null);
      return {c() {
        o2 && o2.c();
      }, m(t3, n3) {
        o2 && o2.m(t3, n3), e2 = true;
      }, p(t3, [e3]) {
        o2 && o2.p && 2 & e3 && f(o2, n2, t3, t3[1], e3, null, null);
      }, i(t3) {
        e2 || (J(o2, t3), e2 = true);
      }, o(t3) {
        z(o2, t3), e2 = false;
      }, d(t3) {
        o2 && o2.d(t3);
      }};
    }
    function pt(t2, e2, n2) {
      let {$$slots: o2 = {}, $$scope: r2} = e2, {scoped: i2 = {}} = e2;
      return t2.$$set = (t3) => {
        "scoped" in t3 && n2(0, i2 = t3.scoped), "$$scope" in t3 && n2(1, r2 = t3.$$scope);
      }, [i2, r2, o2];
    }
    class ft extends tt {
      constructor(t2) {
        super(), Y(this, t2, pt, ut, s, {scoped: 0});
      }
    }
    const dt = [];
    function ht(e2, n2 = t) {
      let o2;
      const r2 = [];
      function i2(t2) {
        if (s(e2, t2) && (e2 = t2, o2)) {
          const t3 = !dt.length;
          for (let t4 = 0; t4 < r2.length; t4 += 1) {
            const n3 = r2[t4];
            n3[1](), dt.push(n3, e2);
          }
          if (t3) {
            for (let t4 = 0; t4 < dt.length; t4 += 2)
              dt[t4][0](dt[t4 + 1]);
            dt.length = 0;
          }
        }
      }
      return {set: i2, update: function(t2) {
        i2(t2(e2));
      }, subscribe: function(s2, a2 = t) {
        const c2 = [s2, a2];
        return r2.push(c2), r2.length === 1 && (o2 = n2(i2) || t), s2(e2), () => {
          const t2 = r2.indexOf(c2);
          t2 !== -1 && r2.splice(t2, 1), r2.length === 0 && (o2(), o2 = null);
        };
      }};
    }
    function mt(e2, n2, o2) {
      const s2 = !Array.isArray(e2), c2 = s2 ? [e2] : e2, l2 = n2.length < 2;
      return {subscribe: ht(o2, (e3) => {
        let o3 = false;
        const u2 = [];
        let p2 = 0, f2 = t;
        const d2 = () => {
          if (p2)
            return;
          f2();
          const o4 = n2(s2 ? u2[0] : u2, e3);
          l2 ? e3(o4) : f2 = i(o4) ? o4 : t;
        }, h2 = c2.map((t2, e4) => a(t2, (t3) => {
          u2[e4] = t3, p2 &= ~(1 << e4), o3 && d2();
        }, () => {
          p2 |= 1 << e4;
        }));
        return o3 = true, d2(), function() {
          r(h2), f2();
        };
      }).subscribe};
    }
    window.routify = window.routify || {};
    const gt = ht(null);
    const yt = ht([]);
    yt.subscribe((t2) => window.routify.routes = t2);
    let $t = ht({component: {params: {}}});
    const bt = ht(null);
    const wt = ht(true);
    function _t(t2, e2 = false) {
      t2 = et.urlTransform.remove(t2);
      let {pathname: n2, search: o2} = ct(t2).url;
      const r2 = c(yt), i2 = r2.find((t3) => n2 === t3.meta.name) || r2.find((t3) => n2.match(t3.regex));
      if (!i2)
        throw new Error(`Route could not be found for "${n2}".`);
      const s2 = e2 ? Object.create(i2) : i2, {route: a2, redirectPath: l2, rewritePath: u2} = xt(s2, r2);
      return u2 && ({pathname: n2, search: o2} = ct(lt(u2, a2.params)).url, l2 && (a2.redirectTo = lt(l2, a2.params || {}))), et.queryHandler && (a2.params = Object.assign({}, et.queryHandler.parse(o2))), function(t3, e3) {
        if (t3.paramKeys) {
          const n3 = function(t4) {
            const e4 = [];
            return t4.forEach((t5) => {
              e4[t5.path.split("/").filter(Boolean).length - 1] = t5;
            }), e4;
          }(t3.layouts), o3 = e3.split("/").filter(Boolean);
          (function(t4) {
            return t4.split("/").filter(Boolean).map((t5) => t5.match(/\:(.+)/)).map((t5) => t5 && t5[1]);
          })(t3.path).forEach((e4, r3) => {
            e4 && (t3.params[e4] = o3[r3], n3[r3] ? n3[r3].param = {[e4]: o3[r3]} : t3.param = {[e4]: o3[r3]});
          });
        }
      }(a2, n2), a2.leftover = t2.replace(new RegExp(a2.regex), ""), a2;
    }
    function xt(t2, e2, n2, o2) {
      const {redirect: r2, rewrite: i2} = t2.meta;
      if (r2 || i2) {
        n2 = r2 ? r2.path || r2 : n2, o2 = i2 ? i2.path || i2 : n2;
        const s2 = r2 && r2.params, a2 = i2 && i2.params, c2 = e2.find((t3) => t3.path === o2);
        return c2 === t2 && console.error(`${o2} is redirecting to itself`), c2 || console.error(`${t2.path} is redirecting to non-existent path: ${o2}`), (s2 || a2) && (c2.params = Object.assign({}, c2.params, s2, a2)), xt(c2, e2, n2, o2);
      }
      return {route: t2, redirectPath: n2, rewritePath: o2};
    }
    function vt(t2, e2, n2) {
      const o2 = t2.slice();
      return o2[1] = e2[n2], o2;
    }
    function Pt(t2, e2) {
      let n2, o2;
      return {key: t2, first: null, c() {
        n2 = y("iframe"), n2.src !== (o2 = e2[1].url) && _(n2, "src", o2), _(n2, "frameborder", "0"), _(n2, "title", "routify prefetcher"), this.first = n2;
      }, m(t3, e3) {
        h(t3, n2, e3);
      }, p(t3, r2) {
        e2 = t3, 1 & r2 && n2.src !== (o2 = e2[1].url) && _(n2, "src", o2);
      }, d(t3) {
        t3 && m(n2);
      }};
    }
    function kt(e2) {
      let n2, o2 = [], r2 = new Map(), i2 = e2[0];
      const s2 = (t2) => t2[1].options.prefetch;
      for (let t2 = 0; t2 < i2.length; t2 += 1) {
        let n3 = vt(e2, i2, t2), a2 = s2(n3);
        r2.set(a2, o2[t2] = Pt(a2, n3));
      }
      return {c() {
        n2 = y("div");
        for (let t3 = 0; t3 < o2.length; t3 += 1)
          o2[t3].c();
        var t2, e3, r3;
        _(n2, "id", "__routify_iframes"), t2 = "display", e3 = "none", n2.style.setProperty(t2, e3, r3 ? "important" : "");
      }, m(t2, e3) {
        h(t2, n2, e3);
        for (let t3 = 0; t3 < o2.length; t3 += 1)
          o2[t3].m(n2, null);
      }, p(t2, [e3]) {
        1 & e3 && (i2 = t2[0], o2 = Q(o2, e3, s2, 1, t2, i2, r2, n2, W, Pt, null, vt));
      }, i: t, o: t, d(t2) {
        t2 && m(n2);
        for (let t3 = 0; t3 < o2.length; t3 += 1)
          o2[t3].d();
      }};
    }
    const Ot = ht([]);
    const jt = mt(Ot, (t2) => t2.slice(0, 2));
    function Et(t2) {
      const e2 = t2.data ? t2.data.prefetchId : t2;
      if (!e2)
        return null;
      const n2 = c(Ot).find((t3) => t3 && t3.options.prefetch == e2);
      if (n2) {
        const {gracePeriod: t3} = n2.options, o2 = new Promise((e3) => setTimeout(e3, t3)), r2 = new Promise((e3) => {
          window.requestIdleCallback ? window.requestIdleCallback(e3) : setTimeout(e3, t3 + 1e3);
        });
        Promise.all([o2, r2]).then(() => {
          Ot.update((t4) => t4.filter((t5) => t5.options.prefetch != e2));
        });
      }
    }
    function St(t2, e2, n2) {
      let o2;
      return l(t2, jt, (t3) => n2(0, o2 = t3)), [o2];
    }
    jt.subscribe((t2) => t2.forEach(({options: t3}) => {
      setTimeout(() => Et(t3.prefetch), t3.timeout);
    })), addEventListener("message", Et, false);
    class It extends tt {
      constructor(t2) {
        super(), Y(this, t2, St, kt, s, {});
      }
    }
    function Lt() {
      return j("routify") || $t;
    }
    const Ft = {_hooks: [(t2) => wt.set(false)], subscribe: Rt};
    const Nt = {_hooks: [], subscribe: Rt};
    function Rt(t2) {
      const e2 = this._hooks, n2 = e2.length;
      return t2((t3) => {
        e2[n2] = t3;
      }), () => delete e2[n2];
    }
    const Mt = {subscribe: (t2) => mt([Lt(), gt, yt], (t3) => function(t4, e2, n2) {
      return function(o2, r2 = {}, i2) {
        const {component: s2} = t4, a2 = Object.assign({}, e2.params, s2.params);
        let c2 = o2 && o2.nodeType && o2;
        c2 && (o2 = o2.getAttribute("href")), o2 = o2 ? p2(o2) : s2.shortPath;
        const l2 = n2.find((t5) => [t5.shortPath || "/", t5.path].includes(o2));
        if (l2 && l2.meta.preload === "proximity" && window.requestIdleCallback) {
          const t5 = routify.appLoaded ? 0 : 1500;
          setTimeout(() => {
            window.requestIdleCallback(() => l2.api.preload());
          }, t5);
        }
        i2 && i2.strict !== false || (o2 = o2.replace(/index$/, ""));
        let u2 = lt(o2, r2, a2);
        return c2 ? (c2.href = u2, {update(t5) {
          c2.href = lt(o2, t5, a2);
        }}) : u2;
        function p2(t5) {
          if (t5.match(/^\.\.?\//)) {
            let [, e3, n3] = t5.match(/^([\.\/]+)(.*)/), o3 = s2.path.replace(/\/$/, "");
            const r3 = e3.match(/\.\.\//g) || [];
            s2.isPage && r3.push(null), r3.forEach(() => o3 = o3.replace(/\/[^\/]+\/?$/, "")), t5 = (t5 = `${o3}/${n3}`.replace(/\/$/, "")) || "/";
          } else if (t5.match(/^\//))
            ;
          else {
            const e3 = n2.find((e4) => e4.meta.name === t5);
            e3 && (t5 = e3.shortPath);
          }
          return t5;
        }
      };
    }(...t3)).subscribe(t2)};
    const Tt = {subscribe: (t2) => mt([Mt, gt], ([t3, e2]) => function(n2 = "", o2 = {}, {strict: r2} = {strict: true}) {
      n2 = t3(n2, o2, {strict: r2});
      const i2 = t3(e2.path, null, {strict: r2}), s2 = new RegExp("^" + n2 + "($|/)");
      return !!i2.match(s2);
    }).subscribe(t2)};
    const At = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t2, e2) => [t2, (At.getLongest(At.templates, t2) || ((t3) => t3))(e2)]}, {name: "createMeta", condition: () => true, action(t2, e2) {
      At.writeMeta(t2, e2);
    }}, {name: "createOG", condition: (t2) => !t2.match(":"), action(t2, e2) {
      At.writeMeta(`og:${t2}`, e2);
    }}, {name: "createTitle", condition: (t2) => t2 === "title", action(t2, e2) {
      document.title = e2;
    }}], getLongest(t2, e2) {
      const n2 = t2[e2];
      if (n2) {
        const o2 = c(gt).path;
        return n2[Object.keys(t2[e2]).filter((t3) => o2.includes(t3)).sort((t3, e3) => e3.length - t3.length)[0]];
      }
    }, writeMeta(t2, e2) {
      const n2 = document.getElementsByTagName("head")[0], o2 = t2.match(/(.+)\:/), r2 = o2 && o2[1] || "plain", {propField: i2, valueField: s2} = qt.services[r2] || qt.services.plain, a2 = document.querySelector(`meta[${i2}='${t2}']`);
      a2 && a2.remove();
      const c2 = document.createElement("meta");
      c2.setAttribute(i2, t2), c2.setAttribute(s2, e2), c2.setAttribute("data-origin", "routify"), n2.appendChild(c2);
    }, set(t2, e2) {
      At.plugins.forEach((n2) => {
        n2.condition(t2, e2) && ([t2, e2] = n2.action(t2, e2) || [t2, e2]);
      });
    }, clear() {
      const t2 = document.querySelector("meta");
      t2 && t2.remove();
    }, template(t2, e2) {
      const n2 = At.getOrigin();
      At.templates[t2] = At.templates[t2] || {}, At.templates[t2][n2] = e2;
    }, update() {
      Object.keys(At.props).forEach((t2) => {
        let e2 = At.getLongest(At.props, t2);
        At.plugins.forEach((n2) => {
          n2.condition(t2, e2) && ([t2, e2] = n2.action(t2, e2) || [t2, e2]);
        });
      });
    }, batchedUpdate() {
      At._pendingUpdate || (At._pendingUpdate = true, setTimeout(() => {
        At._pendingUpdate = false, this.update();
      }));
    }, _updateQueued: false, getOrigin() {
      const t2 = Lt();
      return t2 && c(t2).path || "/";
    }, _pendingUpdate: false};
    const qt = new Proxy(At, {set(t2, e2, n2, o2) {
      const {props: r2, getOrigin: i2} = t2;
      return Reflect.has(t2, e2) ? Reflect.set(t2, e2, n2, o2) : (r2[e2] = r2[e2] || {}, r2[e2][i2()] = n2), window.routify.appLoaded && t2.batchedUpdate(), true;
    }});
    function Ct(t2, e2, n2) {
      const o2 = t2.slice();
      return o2[18] = e2[n2].component, o2[19] = e2[n2].componentFile, o2[2] = e2[n2].decorator, o2[1] = e2[n2].nodes, o2;
    }
    function Bt(t2) {
      let e2, n2, o2 = [], r2 = new Map(), i2 = [t2[4]];
      const s2 = (t3) => function({meta: t4, path: e3, param: n3, params: o3}) {
        return JSON.stringify({path: e3, param: (t4["param-is-page"] || t4["slug-is-page"]) && n3, queryParams: t4["query-params-is-page"] && o3});
      }(t3[18]);
      for (let e3 = 0; e3 < 1; e3 += 1) {
        let n3 = Ct(t2, i2, e3), a2 = s2(n3);
        r2.set(a2, o2[e3] = Dt(a2, n3));
      }
      return {c() {
        for (let t3 = 0; t3 < 1; t3 += 1)
          o2[t3].c();
        e2 = w();
      }, m(t3, r3) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o2[e3].m(t3, r3);
        h(t3, e2, r3), n2 = true;
      }, p(t3, n3) {
        4194365 & n3 && (i2 = [t3[4]], K(), o2 = Q(o2, n3, s2, 1, t3, i2, r2, e2.parentNode, G, Dt, e2, Ct), D());
      }, i(t3) {
        if (!n2) {
          for (let t4 = 0; t4 < 1; t4 += 1)
            J(o2[t4]);
          n2 = true;
        }
      }, o(t3) {
        for (let t4 = 0; t4 < 1; t4 += 1)
          z(o2[t4]);
        n2 = false;
      }, d(t3) {
        for (let e3 = 0; e3 < 1; e3 += 1)
          o2[e3].d(t3);
        t3 && m(e2);
      }};
    }
    function Ut(t2) {
      let e2, n2;
      return e2 = new Wt({props: {decorator: t2[2], nodes: [...t2[1]], scoped: {...t2[0], ...t2[22]}}}), {c() {
        V(e2.$$.fragment);
      }, m(t3, o2) {
        Z(e2, t3, o2), n2 = true;
      }, p(t3, n3) {
        const o2 = {};
        4 & n3 && (o2.decorator = t3[2]), 16 & n3 && (o2.nodes = [...t3[1]]), 4194305 & n3 && (o2.scoped = {...t3[0], ...t3[22]}), e2.$set(o2);
      }, i(t3) {
        n2 || (J(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        z(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        X(e2, t3);
      }};
    }
    function Ht(t2) {
      let e2, n2, o2 = t2[18] && t2[1].length && Ut(t2);
      return {c() {
        o2 && o2.c(), e2 = w();
      }, m(t3, r2) {
        o2 && o2.m(t3, r2), h(t3, e2, r2), n2 = true;
      }, p(t3, n3) {
        t3[18] && t3[1].length ? o2 ? (o2.p(t3, n3), 16 & n3 && J(o2, 1)) : (o2 = Ut(t3), o2.c(), J(o2, 1), o2.m(e2.parentNode, e2)) : o2 && (K(), z(o2, 1, 1, () => {
          o2 = null;
        }), D());
      }, i(t3) {
        n2 || (J(o2), n2 = true);
      }, o(t3) {
        z(o2), n2 = false;
      }, d(t3) {
        o2 && o2.d(t3), t3 && m(e2);
      }};
    }
    function Kt(t2) {
      let n2, o2, r2;
      const i2 = [{scoped: t2[0]}, {scopedSync: t2[5]}, t2[3].param || {}];
      var s2 = t2[19];
      function a2(t3) {
        let n3 = {$$slots: {default: [Ht, ({scoped: t4, decorator: e2}) => ({22: t4, 2: e2}), ({scoped: t4, decorator: e2}) => (t4 ? 4194304 : 0) | (e2 ? 4 : 0)]}, $$scope: {ctx: t3}};
        for (let t4 = 0; t4 < i2.length; t4 += 1)
          n3 = e(n3, i2[t4]);
        return {props: n3};
      }
      return s2 && (n2 = new s2(a2(t2))), {c() {
        n2 && V(n2.$$.fragment), o2 = b();
      }, m(t3, e2) {
        n2 && Z(n2, t3, e2), h(t3, o2, e2), r2 = true;
      }, p(t3, e2) {
        const r3 = 41 & e2 ? function(t4, e3) {
          const n3 = {}, o3 = {}, r4 = {$$scope: 1};
          let i3 = t4.length;
          for (; i3--; ) {
            const s3 = t4[i3], a3 = e3[i3];
            if (a3) {
              for (const t5 in s3)
                t5 in a3 || (o3[t5] = 1);
              for (const t5 in a3)
                r4[t5] || (n3[t5] = a3[t5], r4[t5] = 1);
              t4[i3] = a3;
            } else
              for (const t5 in s3)
                r4[t5] = 1;
          }
          for (const t5 in o3)
            t5 in n3 || (n3[t5] = void 0);
          return n3;
        }(i2, [1 & e2 && {scoped: t3[0]}, 32 & e2 && {scopedSync: t3[5]}, 8 & e2 && (c2 = t3[3].param || {}, typeof c2 == "object" && c2 !== null ? c2 : {})]) : {};
        var c2;
        if (12582933 & e2 && (r3.$$scope = {dirty: e2, ctx: t3}), s2 !== (s2 = t3[19])) {
          if (n2) {
            K();
            const t4 = n2;
            z(t4.$$.fragment, 1, 0, () => {
              X(t4, 1);
            }), D();
          }
          s2 ? (n2 = new s2(a2(t3)), V(n2.$$.fragment), J(n2.$$.fragment, 1), Z(n2, o2.parentNode, o2)) : n2 = null;
        } else
          s2 && n2.$set(r3);
      }, i(t3) {
        r2 || (n2 && J(n2.$$.fragment, t3), r2 = true);
      }, o(t3) {
        n2 && z(n2.$$.fragment, t3), r2 = false;
      }, d(t3) {
        n2 && X(n2, t3), t3 && m(o2);
      }};
    }
    function Dt(t2, e2) {
      let n2, o2, r2, i2;
      var s2 = e2[2];
      function a2(t3) {
        return {props: {scoped: t3[0], $$slots: {default: [Kt]}, $$scope: {ctx: t3}}};
      }
      return s2 && (o2 = new s2(a2(e2))), {key: t2, first: null, c() {
        n2 = w(), o2 && V(o2.$$.fragment), r2 = w(), this.first = n2;
      }, m(t3, e3) {
        h(t3, n2, e3), o2 && Z(o2, t3, e3), h(t3, r2, e3), i2 = true;
      }, p(t3, n3) {
        e2 = t3;
        const i3 = {};
        if (1 & n3 && (i3.scoped = e2[0]), 8388669 & n3 && (i3.$$scope = {dirty: n3, ctx: e2}), s2 !== (s2 = e2[2])) {
          if (o2) {
            K();
            const t4 = o2;
            z(t4.$$.fragment, 1, 0, () => {
              X(t4, 1);
            }), D();
          }
          s2 ? (o2 = new s2(a2(e2)), V(o2.$$.fragment), J(o2.$$.fragment, 1), Z(o2, r2.parentNode, r2)) : o2 = null;
        } else
          s2 && o2.$set(i3);
      }, i(t3) {
        i2 || (o2 && J(o2.$$.fragment, t3), i2 = true);
      }, o(t3) {
        o2 && z(o2.$$.fragment, t3), i2 = false;
      }, d(t3) {
        t3 && m(n2), t3 && m(r2), o2 && X(o2, t3);
      }};
    }
    function Jt(e2) {
      let n2, o2, r2, s2, a2, c2 = e2[4] && Bt(e2);
      return {c() {
        c2 && c2.c(), n2 = b(), o2 = y("span");
      }, m(l2, u2) {
        var p2;
        c2 && c2.m(l2, u2), h(l2, n2, u2), h(l2, o2, u2), r2 = true, s2 || (p2 = e2[8].call(null, o2), a2 = p2 && i(p2.destroy) ? p2.destroy : t, s2 = true);
      }, p(t2, [e3]) {
        t2[4] ? c2 ? (c2.p(t2, e3), 16 & e3 && J(c2, 1)) : (c2 = Bt(t2), c2.c(), J(c2, 1), c2.m(n2.parentNode, n2)) : c2 && (K(), z(c2, 1, 1, () => {
          c2 = null;
        }), D());
      }, i(t2) {
        r2 || (J(c2), r2 = true);
      }, o(t2) {
        z(c2), r2 = false;
      }, d(t2) {
        c2 && c2.d(t2), t2 && m(n2), t2 && m(o2), s2 = false, a2();
      }};
    }
    function zt(t2, e2, n2) {
      let o2, r2, i2, s2, a2;
      l(t2, $t, (t3) => n2(10, i2 = t3)), l(t2, gt, (t3) => n2(14, s2 = t3));
      let c2, {nodes: u2 = []} = e2, {scoped: p2 = {}} = e2, {decorator: f2} = e2, d2 = null, h2 = null, m2 = {};
      const g2 = ht(null);
      l(t2, g2, (t3) => n2(4, a2 = t3));
      const y2 = j("routify");
      l(t2, y2, (t3) => n2(9, r2 = t3));
      function $2(t3) {
        n2(5, m2 = {...p2}), h2.length === 0 && async function() {
          await M(), ot(c2);
          const t4 = a2.component.path === s2.path;
          !window.routify.stopAutoReady && t4 && async function({page: t5, metatags: e4, afterPageLoad: n3}) {
            const {path: o3} = t5, {options: r3} = at(), i3 = r3.prefetch;
            for (const e5 of n3._hooks)
              e5 && await e5(t5.api);
            e4.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: o3, prefetchId: i3}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
          }({page: a2.component, metatags: qt, afterPageLoad: Ft});
        }();
        const e3 = {nodes: h2, decorator: f2 || ft, layout: d2.isLayout ? d2 : o2.layout, component: d2, route: s2, componentFile: t3, parentNode: c2 || o2.parentNode};
        g2.set(e3);
      }
      return O("routify", g2), t2.$$set = (t3) => {
        "nodes" in t3 && n2(1, u2 = t3.nodes), "scoped" in t3 && n2(0, p2 = t3.scoped), "decorator" in t3 && n2(2, f2 = t3.decorator);
      }, t2.$$.update = () => {
        1536 & t2.$$.dirty && (o2 = r2 || i2), 2 & t2.$$.dirty && n2(3, [d2, ...h2] = u2, d2), 8 & t2.$$.dirty && function(t3) {
          let e3 = t3.component();
          e3 instanceof Promise ? e3.then($2) : $2(e3);
        }(d2), 16 & t2.$$.dirty && a2 && st(a2, M);
      }, [p2, u2, f2, d2, a2, m2, g2, y2, (t3) => c2 = t3.parentNode, r2, i2];
    }
    class Wt extends tt {
      constructor(t2) {
        super(), Y(this, t2, zt, Jt, s, {nodes: 1, scoped: 0, decorator: 2});
      }
    }
    function Gt(t2, e2) {
      let n2 = false;
      function o2(o3, r3) {
        const i2 = _t(o3 || at().fullpath);
        i2.redirectTo && (history.replaceStateNative({}, null, i2.redirectTo), delete i2.redirectTo);
        const s2 = [...(r3 && _t(at().fullpath, t2) || i2).layouts, i2];
        n2 && delete n2.last, i2.last = n2, n2 = i2, o3 || bt.set(i2), gt.set(i2), i2.api.preload().then(() => {
          wt.set(true), e2(s2);
        });
      }
      const r2 = function(t3) {
        ["pushState", "replaceState"].forEach((t4) => {
          history[t4 + "Native"] = history[t4], history[t4] = async function(e4 = {}, n4, o3) {
            if (o3 === location.pathname + location.search + location.hash)
              return false;
            const {id: r3, path: i2, params: s2} = c(gt);
            e4 = {id: r3, path: i2, params: s2, ...e4};
            const a2 = new Event(t4.toLowerCase());
            Object.assign(a2, {state: e4, title: n4, url: o3});
            return await Vt(a2, o3) ? (history[t4 + "Native"].apply(this, [e4, n4, o3]), dispatchEvent(a2)) : void 0;
          };
        });
        let e3 = false;
        const n3 = {click: Qt, pushstate: () => t3(), replacestate: () => t3(), popstate: async (n4) => {
          e3 ? e3 = false : await Vt(n4, at().fullpath) ? t3() : (e3 = true, n4.preventDefault(), history.go(1));
        }};
        Object.entries(n3).forEach((t4) => addEventListener(...t4));
        return () => {
          Object.entries(n3).forEach((t4) => removeEventListener(...t4));
        };
      }(o2);
      return {updatePage: o2, destroy: r2};
    }
    function Qt(t2) {
      const e2 = t2.target.closest("a"), n2 = e2 && e2.href;
      if (t2.ctrlKey || t2.metaKey || t2.altKey || t2.shiftKey || t2.button || t2.defaultPrevented)
        return;
      if (!n2 || e2.target || e2.host !== location.host)
        return;
      const o2 = new URL(n2), r2 = o2.pathname + o2.search + o2.hash;
      t2.preventDefault(), history.pushState({}, "", r2);
    }
    async function Vt(t2, e2) {
      const n2 = _t(e2).api;
      for (const o2 of Nt._hooks.filter(Boolean)) {
        if (!await o2(t2, n2, {url: e2}))
          return false;
      }
      return true;
    }
    function Zt(t2) {
      let e2, n2;
      return e2 = new Wt({props: {nodes: t2[0]}}), {c() {
        V(e2.$$.fragment);
      }, m(t3, o2) {
        Z(e2, t3, o2), n2 = true;
      }, p(t3, n3) {
        const o2 = {};
        1 & n3 && (o2.nodes = t3[0]), e2.$set(o2);
      }, i(t3) {
        n2 || (J(e2.$$.fragment, t3), n2 = true);
      }, o(t3) {
        z(e2.$$.fragment, t3), n2 = false;
      }, d(t3) {
        X(e2, t3);
      }};
    }
    function Xt(t2) {
      let e2, n2, o2, r2 = t2[0] && t2[1] !== null && Zt(t2);
      return n2 = new It({}), {c() {
        r2 && r2.c(), e2 = b(), V(n2.$$.fragment);
      }, m(t3, i2) {
        r2 && r2.m(t3, i2), h(t3, e2, i2), Z(n2, t3, i2), o2 = true;
      }, p(t3, [n3]) {
        t3[0] && t3[1] !== null ? r2 ? (r2.p(t3, n3), 3 & n3 && J(r2, 1)) : (r2 = Zt(t3), r2.c(), J(r2, 1), r2.m(e2.parentNode, e2)) : r2 && (K(), z(r2, 1, 1, () => {
          r2 = null;
        }), D());
      }, i(t3) {
        o2 || (J(r2), J(n2.$$.fragment, t3), o2 = true);
      }, o(t3) {
        z(r2), z(n2.$$.fragment, t3), o2 = false;
      }, d(t3) {
        r2 && r2.d(t3), t3 && m(e2), X(n2, t3);
      }};
    }
    function Yt(t2, e2, n2) {
      let o2;
      l(t2, gt, (t3) => n2(1, o2 = t3));
      let r2, i2, {routes: s2} = e2, {config: a2 = {}} = e2;
      window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(et, a2);
      O("routifyupdatepage", (...t3) => i2 && i2.updatePage(...t3));
      const c2 = (t3) => n2(0, r2 = t3), u2 = () => {
        i2 && (i2.destroy(), i2 = null);
      };
      let p2 = null;
      var f2;
      return f2 = u2, k().$$.on_destroy.push(f2), t2.$$set = (t3) => {
        "routes" in t3 && n2(2, s2 = t3.routes), "config" in t3 && n2(3, a2 = t3.config);
      }, t2.$$.update = () => {
        4 & t2.$$.dirty && s2 && (clearTimeout(p2), p2 = setTimeout(() => {
          u2(), i2 = Gt(s2, c2), yt.set(s2), i2.updatePage();
        }));
      }, [r2, o2, s2, a2];
    }
    class te extends tt {
      constructor(t2) {
        super(), Y(this, t2, Yt, Xt, s, {routes: 2, config: 3});
      }
    }
    function ee(t2) {
      const e2 = async function(e3) {
        return await ne(t2, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      };
      return e2.sync = function(e3) {
        return oe(t2, {file: e3.tree, state: {treePayload: e3}, scope: {}});
      }, e2;
    }
    async function ne(t2, e2) {
      const n2 = await t2(e2);
      if (n2 === false)
        return false;
      const o2 = n2 || e2.file;
      if (o2.children) {
        const n3 = await Promise.all(o2.children.map(async (n4) => ne(t2, {state: e2.state, scope: re(e2.scope || {}), parent: e2.file, file: await n4})));
        o2.children = n3.filter(Boolean);
      }
      return o2;
    }
    function oe(t2, e2) {
      const n2 = t2(e2);
      if (n2 === false)
        return false;
      const o2 = n2 || e2.file;
      if (o2.children) {
        const n3 = o2.children.map((n4) => oe(t2, {state: e2.state, scope: re(e2.scope || {}), parent: e2.file, file: n4}));
        o2.children = n3.filter(Boolean);
      }
      return o2;
    }
    function re(t2) {
      return JSON.parse(JSON.stringify(t2));
    }
    const ie = ee(({file: t2}) => {
      (t2.isPage || t2.isFallback) && (t2.regex = ((t3, e2) => {
        const n2 = e2 ? "" : "/?$";
        return `^${t3 = (t3 = (t3 = t3.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(nt, "([^/]+)") + n2}`;
      })(t2.path, t2.isFallback));
    });
    const se = ee(({file: t2}) => {
      t2.paramKeys = it(t2.path);
    });
    const ae = ee(({file: t2}) => {
      t2.isFallback || t2.isIndex ? t2.shortPath = t2.path.replace(/\/[^/]+$/, "") : t2.shortPath = t2.path;
    });
    const ce = ee(({file: t2}) => {
      t2.ranking = (({path: t3}) => t3.split("/").filter(Boolean).map((t4) => t4 === "_fallback" ? "A" : t4.startsWith(":") ? "B" : "C").join(""))(t2);
    });
    const le = ee(({file: t2}) => {
      const e2 = t2, n2 = t2.meta && t2.meta.children || [];
      n2.length && (e2.children = e2.children || [], e2.children.push(...n2.map((t3) => ({isMeta: true, ...t3, meta: t3}))));
    });
    const ue = ee((t2) => {
      const {file: e2} = t2, {isFallback: n2, meta: o2} = e2, r2 = e2.path.match("/:"), i2 = e2.path.endsWith("/index"), s2 = o2.index || o2.index === 0, a2 = o2.index === false;
      e2.isIndexable = s2 || !n2 && !r2 && !i2 && !a2, e2.isNonIndexable = !e2.isIndexable;
    });
    const pe = ee(({file: t2, parent: e2}) => {
      Object.defineProperty(t2, "parent", {get: () => e2}), Object.defineProperty(t2, "nextSibling", {get: () => de(t2, 1)}), Object.defineProperty(t2, "prevSibling", {get: () => de(t2, -1)}), Object.defineProperty(t2, "lineage", {get: () => fe(e2)});
    });
    function fe(t2, e2 = []) {
      return t2 && (e2.unshift(t2), fe(t2.parent, e2)), e2;
    }
    function de(t2, e2) {
      if (!t2.root) {
        const n2 = t2.parent.children.filter((t3) => t3.isIndexable), o2 = n2.indexOf(t2);
        return n2[o2 + e2];
      }
    }
    const he = ee(({file: t2, parent: e2}) => {
      t2.isIndex && Object.defineProperty(e2, "index", {get: () => t2});
    });
    const me = ee(({file: t2, scope: e2}) => {
      function n2(t3) {
        const {parent: e3} = t3, o2 = e3 && e3.component && e3, r2 = o2 && o2.isReset, i2 = e3 && !r2 && n2(e3) || [];
        return o2 && i2.push(o2), i2;
      }
      Object.defineProperty(t2, "layouts", {get: () => n2(t2)});
    });
    const ge = ee(({file: t2}) => {
      const e2 = t2.root ? function() {
      } : t2.children ? (t2.isPage, function() {
      }) : (t2.isReset || t2.isLayout || t2.isFallback, function() {
      });
      Object.setPrototypeOf(t2, e2.prototype);
    });
    var ye = Object.freeze({__proto__: null, setRegex: ie, setParamKeys: se, setShortPath: ae, setRank: ce, addMetaChildren: le, setIsIndexable: ue, assignRelations: pe, assignIndex: he, assignLayout: me, createFlatList: (t2) => {
      ee((t3) => {
        (t3.file.isPage || t3.file.isFallback) && t3.state.treePayload.routes.push(t3.file);
      }).sync(t2), t2.routes.sort((t3, e2) => t3.ranking >= e2.ranking ? -1 : 1);
    }, setPrototype: ge});
    const $e = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
    function be(t2) {
      return Object.entries($e).forEach(([e2, n2]) => {
        t2[e2] === void 0 && (t2[e2] = n2);
      }), t2.children && (t2.children = t2.children.map(be)), t2;
    }
    const we = ee(({file: t2}) => {
      t2.api = new _e(t2);
    });
    class _e {
      constructor(t2) {
        this.__file = t2, Object.defineProperty(this, "__file", {enumerable: false}), this.isMeta = !!t2.isMeta, this.path = t2.path, this.title = function(t3) {
          return t3.meta.title !== void 0 ? t3.meta.title : (t3.shortPath || t3.path).split("/").pop().replace(/-/g, " ");
        }(t2), this.meta = t2.meta;
      }
      get parent() {
        return !this.__file.root && this.__file.parent.api;
      }
      get children() {
        return (this.__file.children || this.__file.isLayout && this.__file.parent.children || []).filter((t2) => !t2.isNonIndexable).sort((t2, e2) => t2.isMeta && e2.isMeta ? 0 : (t2 = (t2.meta.index || t2.meta.title || t2.path).toString(), e2 = (e2.meta.index || e2.meta.title || e2.path).toString(), t2.localeCompare(e2, void 0, {numeric: true, sensitivity: "base"}))).map(({api: t2}) => t2);
      }
      get next() {
        return xe(this, 1);
      }
      get prev() {
        return xe(this, -1);
      }
      async preload() {
        const t2 = [...this.__file.layouts, this.__file].map((t3) => t3.component());
        await Promise.all(t2);
      }
      get component() {
        return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
      }
    }
    function xe(t2, e2) {
      if (!t2.__file.root) {
        const n2 = t2.parent.children.indexOf(t2);
        return t2.parent.children[n2 + e2];
      }
    }
    const ve = {...ye, restoreDefaults: ({tree: t2}) => be(t2), assignAPI: we};
    const Pe = {root: true, ownMeta: {preload: "proximity"}, children: [{isFallback: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/_fallback", component: () => Promise.resolve().then(() => __toModule(require_fallback_48127026())).then((t2) => t2.default)}, {isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/index", id: "_index", component: () => Promise.resolve().then(() => __toModule(require_index_966b8bee())).then((t2) => t2.default)}], isLayout: true, meta: {preload: "proximity", recursive: true, prerender: true}, path: "/", id: "__layout", component: () => Promise.resolve().then(() => __toModule(require_layout_47635a1c())).then((t2) => t2.default)};
    const {tree: ke, routes: Oe} = function(t2) {
      const e2 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n2 = {tree: t2, routes: []};
      for (let t3 of e2) {
        (ve[t3].sync || ve[t3])(n2);
      }
      return n2;
    }(Pe);
    function je(e2) {
      let n2, o2;
      return n2 = new te({props: {routes: Oe}}), {c() {
        V(n2.$$.fragment);
      }, m(t2, e3) {
        Z(n2, t2, e3), o2 = true;
      }, p: t, i(t2) {
        o2 || (J(n2.$$.fragment, t2), o2 = true);
      }, o(t2) {
        z(n2.$$.fragment, t2), o2 = false;
      }, d(t2) {
        X(n2, t2);
      }};
    }
    !function(t2, e2 = {target: document.body}, n2 = "hmr", o2 = "app-loaded") {
      const r2 = document.getElementById(n2), i2 = document.createElement("div");
      function s2() {
        r2 && r2.remove(), i2.style.visibility = null, i2.setAttribute("id", n2);
      }
      i2.style.visibility = "hidden", e2.target.appendChild(i2), r2 ? addEventListener(o2, s2) : s2(), new t2({...e2, target: i2});
    }(class extends tt {
      constructor(t2) {
        super(), Y(this, t2, null, je, s, {});
      }
    }, {target: document.body}, "routify-app");
  });
  require_main();
})();
