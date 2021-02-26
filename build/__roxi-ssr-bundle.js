(() => {
  // dist/build/main.js
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
  function g(t2) {
    return document.createElement(t2);
  }
  function $(t2) {
    return document.createTextNode(t2);
  }
  function y() {
    return $(" ");
  }
  function b() {
    return $("");
  }
  function w(t2, e2, n2) {
    n2 == null ? t2.removeAttribute(e2) : t2.getAttribute(e2) !== n2 && t2.setAttribute(e2, n2);
  }
  function x(t2, e2, n2) {
    t2.classList[n2 ? "add" : "remove"](e2);
  }
  let v;
  function _(t2) {
    v = t2;
  }
  function P() {
    if (!v)
      throw new Error("Function called outside component initialization");
    return v;
  }
  function k(t2, e2) {
    P().$$.context.set(t2, e2);
  }
  function O(t2) {
    return P().$$.context.get(t2);
  }
  const E = [];
  const j = [];
  const L = [];
  const I = [];
  const S = Promise.resolve();
  let R = false;
  function F() {
    R || (R = true, S.then(C));
  }
  function N() {
    return F(), S;
  }
  function T(t2) {
    L.push(t2);
  }
  let A = false;
  const M = new Set();
  function C() {
    if (!A) {
      A = true;
      do {
        for (let t2 = 0; t2 < E.length; t2 += 1) {
          const e2 = E[t2];
          _(e2), q(e2.$$);
        }
        for (_(null), E.length = 0; j.length; )
          j.pop()();
        for (let t2 = 0; t2 < L.length; t2 += 1) {
          const e2 = L[t2];
          M.has(e2) || (M.add(e2), e2());
        }
        L.length = 0;
      } while (E.length);
      for (; I.length; )
        I.pop()();
      R = false, A = false, M.clear();
    }
  }
  function q(t2) {
    if (t2.fragment !== null) {
      t2.update(), r(t2.before_update);
      const e2 = t2.dirty;
      t2.dirty = [-1], t2.fragment && t2.fragment.p(t2.ctx, e2), t2.after_update.forEach(T);
    }
  }
  const B = new Set();
  let U;
  function H() {
    U = {r: 0, c: [], p: U};
  }
  function K() {
    U.r || r(U.c), U = U.p;
  }
  function D(t2, e2) {
    t2 && t2.i && (B.delete(t2), t2.i(e2));
  }
  function J(t2, e2, n2, o2) {
    if (t2 && t2.o) {
      if (B.has(t2))
        return;
      B.add(t2), U.c.push(() => {
        B.delete(t2), o2 && (n2 && t2.d(1), o2());
      }), t2.o(e2);
    }
  }
  function z(t2, e2) {
    t2.d(1), e2.delete(t2.key);
  }
  function W(t2, e2) {
    J(t2, 1, 1, () => {
      e2.delete(t2.key);
    });
  }
  function G(t2, e2, n2, o2, r2, i2, s2, a2, c2, l2, u2, p2) {
    let f2 = t2.length, d2 = i2.length, h2 = f2;
    const m2 = {};
    for (; h2--; )
      m2[t2[h2].key] = h2;
    const g2 = [], $2 = new Map(), y2 = new Map();
    for (h2 = d2; h2--; ) {
      const t3 = p2(r2, i2, h2), a3 = n2(t3);
      let c3 = s2.get(a3);
      c3 ? o2 && c3.p(t3, e2) : (c3 = l2(a3, t3), c3.c()), $2.set(a3, g2[h2] = c3), a3 in m2 && y2.set(a3, Math.abs(h2 - m2[a3]));
    }
    const b2 = new Set(), w2 = new Set();
    function x2(t3) {
      D(t3, 1), t3.m(a2, u2), s2.set(t3.key, t3), u2 = t3.first, d2--;
    }
    for (; f2 && d2; ) {
      const e3 = g2[d2 - 1], n3 = t2[f2 - 1], o3 = e3.key, r3 = n3.key;
      e3 === n3 ? (u2 = e3.first, f2--, d2--) : $2.has(r3) ? !s2.has(o3) || b2.has(o3) ? x2(e3) : w2.has(r3) ? f2-- : y2.get(o3) > y2.get(r3) ? (w2.add(o3), x2(e3)) : (b2.add(r3), f2--) : (c2(n3, s2), f2--);
    }
    for (; f2--; ) {
      const e3 = t2[f2];
      $2.has(e3.key) || c2(e3, s2);
    }
    for (; d2; )
      x2(g2[d2 - 1]);
    return g2;
  }
  function Q(t2) {
    t2 && t2.c();
  }
  function V(t2, e2, o2) {
    const {fragment: s2, on_mount: a2, on_destroy: c2, after_update: l2} = t2.$$;
    s2 && s2.m(e2, o2), T(() => {
      const e3 = a2.map(n).filter(i);
      c2 ? c2.push(...e3) : r(e3), t2.$$.on_mount = [];
    }), l2.forEach(T);
  }
  function Z(t2, e2) {
    const n2 = t2.$$;
    n2.fragment !== null && (r(n2.on_destroy), n2.fragment && n2.fragment.d(e2), n2.on_destroy = n2.fragment = null, n2.ctx = []);
  }
  function X(e2, n2, i2, s2, a2, c2, l2 = [-1]) {
    const u2 = v;
    _(e2);
    const p2 = e2.$$ = {fragment: null, ctx: null, props: c2, update: t, not_equal: a2, bound: o(), on_mount: [], on_destroy: [], before_update: [], after_update: [], context: new Map(u2 ? u2.$$.context : []), callbacks: o(), dirty: l2, skip_bound: false};
    let f2 = false;
    if (p2.ctx = i2 ? i2(e2, n2.props || {}, (t2, n3, ...o2) => {
      const r2 = o2.length ? o2[0] : n3;
      return p2.ctx && a2(p2.ctx[t2], p2.ctx[t2] = r2) && (!p2.skip_bound && p2.bound[t2] && p2.bound[t2](r2), f2 && function(t3, e3) {
        t3.$$.dirty[0] === -1 && (E.push(t3), F(), t3.$$.dirty.fill(0)), t3.$$.dirty[e3 / 31 | 0] |= 1 << e3 % 31;
      }(e2, t2)), n3;
    }) : [], p2.update(), f2 = true, r(p2.before_update), p2.fragment = !!s2 && s2(p2.ctx), n2.target) {
      if (n2.hydrate) {
        const t2 = function(t3) {
          return Array.from(t3.childNodes);
        }(n2.target);
        p2.fragment && p2.fragment.l(t2), t2.forEach(m);
      } else
        p2.fragment && p2.fragment.c();
      n2.intro && D(e2.$$.fragment), V(e2, n2.target, n2.anchor), C();
    }
    _(u2);
  }
  class Y {
    $destroy() {
      Z(this, 1), this.$destroy = t;
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
  var tt = {queryHandler: {parse: (t2) => {
    return e2 = new URLSearchParams(t2), [...e2].reduce((t3, [e3, n2]) => (t3[e3] = n2, t3), {});
    var e2;
  }, stringify: (t2) => "?" + new URLSearchParams(t2).toString()}, urlTransform: {apply: (t2) => t2, remove: (t2) => t2}, useHash: false};
  const et = RegExp(/\:([^/()]+)/g);
  function nt(t2) {
    if (navigator.userAgent.includes("jsdom"))
      return false;
    ot(t2), function() {
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
  function ot(t2) {
    t2 && t2.scrollTo && t2.dataset.routify !== "scroll-lock" && t2.dataset["routify-scroll"] !== "lock" && (t2.style["scroll-behavior"] = "auto", t2.scrollTo({top: 0, behavior: "auto"}), t2.style["scroll-behavior"] = "", ot(t2.parentElement));
  }
  const rt = (t2) => {
    const e2 = [];
    let n2;
    for (; n2 = et.exec(t2); )
      e2.push(n2[1]);
    return e2;
  };
  function it(t2, e2) {
    it._console = it._console || {log: console.log, warn: console.warn};
    const {_console: n2} = it, o2 = t2.componentFile.name.replace(/Proxy<_?(.+)>/, "$1").replace(/^Index$/, t2.component.shortPath.split("/").pop()).replace(/^./, (t3) => t3.toUpperCase()).replace(/\:(.+)/, "U5B$1u5D"), r2 = [`<${o2}> received an unexpected slot "default".`, `<${o2}> was created with unknown prop 'scoped'`, `<${o2}> was created with unknown prop 'scopedSync'`];
    for (const t3 of ["log", "warn"])
      console[t3] = (...e3) => {
        r2.includes(e3[0]) || n2[t3](...e3);
      }, e2().then(() => {
        console[t3] = n2[t3];
      });
  }
  function st() {
    let t2 = window.location.pathname + window.location.search + window.location.hash;
    const {url: e2, options: n2} = function(t3) {
      const [e3, n3] = t3.split("__[[routify_url_options]]__"), o2 = JSON.parse(decodeURIComponent(n3 || "") || "{}");
      return window.routify = window.routify || {}, window.routify.prefetched = o2.prefetch, {url: e3, options: o2};
    }(t2);
    return {...at(e2), options: n2};
  }
  function at(t2) {
    tt.useHash && (t2 = t2.replace(/.*#(.+)/, "$1"));
    const e2 = t2.startsWith("/") ? window.location.origin : void 0, n2 = new URL(t2, e2);
    return {url: n2, fullpath: n2.pathname + n2.search + n2.hash};
  }
  function ct(t2, e2, n2) {
    const o2 = tt.useHash ? "#" : "";
    let r2;
    return r2 = function(t3, e3, n3) {
      const o3 = Object.assign({}, n3, e3), r3 = function(t4, e4) {
        if (!tt.queryHandler)
          return "";
        const n4 = rt(t4), o4 = {};
        e4 && Object.entries(e4).forEach(([t5, e5]) => {
          n4.includes(t5) || (o4[t5] = e5);
        });
        return tt.queryHandler.stringify(o4).replace(/\?$/, "");
      }(t3, e3);
      for (const [e4, n4] of Object.entries(o3))
        t3 = t3.replace(`:${e4}`, n4);
      return `${t3}${r3}`;
    }(t2, e2, n2), r2 = tt.urlTransform.apply(r2), r2 = o2 + r2, r2;
  }
  function lt(t2) {
    let e2;
    const n2 = t2[2].default, o2 = u(n2, t2, t2[1], null);
    return {c() {
      o2 && o2.c();
    }, m(t3, n3) {
      o2 && o2.m(t3, n3), e2 = true;
    }, p(t3, [e3]) {
      o2 && o2.p && 2 & e3 && f(o2, n2, t3, t3[1], e3, null, null);
    }, i(t3) {
      e2 || (D(o2, t3), e2 = true);
    }, o(t3) {
      J(o2, t3), e2 = false;
    }, d(t3) {
      o2 && o2.d(t3);
    }};
  }
  function ut(t2, e2, n2) {
    let {$$slots: o2 = {}, $$scope: r2} = e2, {scoped: i2 = {}} = e2;
    return t2.$$set = (t3) => {
      "scoped" in t3 && n2(0, i2 = t3.scoped), "$$scope" in t3 && n2(1, r2 = t3.$$scope);
    }, [i2, r2, o2];
  }
  class pt extends Y {
    constructor(t2) {
      super(), X(this, t2, ut, lt, s, {scoped: 0});
    }
  }
  const ft = [];
  function dt(e2, n2 = t) {
    let o2;
    const r2 = [];
    function i2(t2) {
      if (s(e2, t2) && (e2 = t2, o2)) {
        const t3 = !ft.length;
        for (let t4 = 0; t4 < r2.length; t4 += 1) {
          const n3 = r2[t4];
          n3[1](), ft.push(n3, e2);
        }
        if (t3) {
          for (let t4 = 0; t4 < ft.length; t4 += 2)
            ft[t4][0](ft[t4 + 1]);
          ft.length = 0;
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
  function ht(e2, n2, o2) {
    const s2 = !Array.isArray(e2), c2 = s2 ? [e2] : e2, l2 = n2.length < 2;
    return {subscribe: dt(o2, (e3) => {
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
  const mt = dt(null);
  const gt = dt([]);
  gt.subscribe((t2) => window.routify.routes = t2);
  let $t = dt({component: {params: {}}});
  const yt = dt(null);
  const bt = dt(true);
  async function wt({page: t2, metatags: e2, afterPageLoad: n2}) {
    const {path: o2} = t2, {options: r2} = st(), i2 = r2.prefetch;
    for (const e3 of n2._hooks)
      e3 && await e3(t2.api);
    e2.update(), dispatchEvent(new CustomEvent("app-loaded")), parent.postMessage({msg: "app-loaded", prefetched: window.routify.prefetched, path: o2, prefetchId: i2}, "*"), window.routify.appLoaded = true, window.routify.stopAutoReady = false;
  }
  function xt(t2, e2 = false) {
    t2 = tt.urlTransform.remove(t2);
    let {pathname: n2, search: o2} = at(t2).url;
    const r2 = c(gt), i2 = r2.find((t3) => n2 === t3.meta.name) || r2.find((t3) => n2.match(t3.regex));
    if (!i2)
      throw new Error(`Route could not be found for "${n2}".`);
    const s2 = e2 ? Object.create(i2) : i2, {route: a2, redirectPath: l2, rewritePath: u2} = vt(s2, r2);
    return u2 && ({pathname: n2, search: o2} = at(ct(u2, a2.params)).url, l2 && (a2.redirectTo = ct(l2, a2.params || {}))), tt.queryHandler && (a2.params = Object.assign({}, tt.queryHandler.parse(o2))), function(t3, e3) {
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
  function vt(t2, e2, n2, o2) {
    const {redirect: r2, rewrite: i2} = t2.meta;
    if (r2 || i2) {
      n2 = r2 ? r2.path || r2 : n2, o2 = i2 ? i2.path || i2 : n2;
      const s2 = r2 && r2.params, a2 = i2 && i2.params, c2 = e2.find((t3) => t3.path === o2);
      return c2 === t2 && console.error(`${o2} is redirecting to itself`), c2 || console.error(`${t2.path} is redirecting to non-existent path: ${o2}`), (s2 || a2) && (c2.params = Object.assign({}, c2.params, s2, a2)), vt(c2, e2, n2, o2);
    }
    return {route: t2, redirectPath: n2, rewritePath: o2};
  }
  function _t(t2, e2, n2) {
    const o2 = t2.slice();
    return o2[1] = e2[n2], o2;
  }
  function Pt(t2, e2) {
    let n2, o2;
    return {key: t2, first: null, c() {
      n2 = g("iframe"), n2.src !== (o2 = e2[1].url) && w(n2, "src", o2), w(n2, "frameborder", "0"), w(n2, "title", "routify prefetcher"), this.first = n2;
    }, m(t3, e3) {
      h(t3, n2, e3);
    }, p(t3, r2) {
      e2 = t3, 1 & r2 && n2.src !== (o2 = e2[1].url) && w(n2, "src", o2);
    }, d(t3) {
      t3 && m(n2);
    }};
  }
  function kt(e2) {
    let n2, o2 = [], r2 = new Map(), i2 = e2[0];
    const s2 = (t2) => t2[1].options.prefetch;
    for (let t2 = 0; t2 < i2.length; t2 += 1) {
      let n3 = _t(e2, i2, t2), a2 = s2(n3);
      r2.set(a2, o2[t2] = Pt(a2, n3));
    }
    return {c() {
      n2 = g("div");
      for (let t3 = 0; t3 < o2.length; t3 += 1)
        o2[t3].c();
      var t2, e3, r3;
      w(n2, "id", "__routify_iframes"), t2 = "display", e3 = "none", n2.style.setProperty(t2, e3, r3 ? "important" : "");
    }, m(t2, e3) {
      h(t2, n2, e3);
      for (let t3 = 0; t3 < o2.length; t3 += 1)
        o2[t3].m(n2, null);
    }, p(t2, [e3]) {
      1 & e3 && (i2 = t2[0], o2 = G(o2, e3, s2, 1, t2, i2, r2, n2, z, Pt, null, _t));
    }, i: t, o: t, d(t2) {
      t2 && m(n2);
      for (let t3 = 0; t3 < o2.length; t3 += 1)
        o2[t3].d();
    }};
  }
  const Ot = dt([]);
  const Et = ht(Ot, (t2) => t2.slice(0, 2));
  function jt(t2) {
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
  function Lt(t2, e2, n2) {
    let o2;
    return l(t2, Et, (t3) => n2(0, o2 = t3)), [o2];
  }
  Et.subscribe((t2) => t2.forEach(({options: t3}) => {
    setTimeout(() => jt(t3.prefetch), t3.timeout);
  })), addEventListener("message", jt, false);
  class It extends Y {
    constructor(t2) {
      super(), X(this, t2, Lt, kt, s, {});
    }
  }
  function St() {
    return O("routify") || $t;
  }
  const Rt = {subscribe: (t2) => (window.routify.stopAutoReady = true, t2(async function() {
    await N(), await wt({page: c(mt), metatags: qt, afterPageLoad: Ft});
  }), () => {
  })};
  const Ft = {_hooks: [(t2) => bt.set(false)], subscribe: Tt};
  const Nt = {_hooks: [], subscribe: Tt};
  function Tt(t2) {
    const e2 = this._hooks, n2 = e2.length;
    return t2((t3) => {
      e2[n2] = t3;
    }), () => delete e2[n2];
  }
  const At = {subscribe: (t2) => ht([St(), mt, gt], (t3) => function(t4, e2, n2) {
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
      let u2 = ct(o2, r2, a2);
      return c2 ? (c2.href = u2, {update(t5) {
        c2.href = ct(o2, t5, a2);
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
  const Mt = {subscribe: (t2) => ht([At, mt], ([t3, e2]) => function(n2 = "", o2 = {}, {strict: r2} = {strict: true}) {
    n2 = t3(n2, o2, {strict: r2});
    const i2 = t3(e2.path, null, {strict: r2}), s2 = new RegExp("^" + n2 + "($|/)");
    return !!i2.match(s2);
  }).subscribe(t2)};
  const Ct = {props: {}, templates: {}, services: {plain: {propField: "name", valueField: "content"}, twitter: {propField: "name", valueField: "content"}, og: {propField: "property", valueField: "content"}}, plugins: [{name: "applyTemplate", condition: () => true, action: (t2, e2) => [t2, (Ct.getLongest(Ct.templates, t2) || ((t3) => t3))(e2)]}, {name: "createMeta", condition: () => true, action(t2, e2) {
    Ct.writeMeta(t2, e2);
  }}, {name: "createOG", condition: (t2) => !t2.match(":"), action(t2, e2) {
    Ct.writeMeta(`og:${t2}`, e2);
  }}, {name: "createTitle", condition: (t2) => t2 === "title", action(t2, e2) {
    document.title = e2;
  }}], getLongest(t2, e2) {
    const n2 = t2[e2];
    if (n2) {
      const o2 = c(mt).path;
      return n2[Object.keys(t2[e2]).filter((t3) => o2.includes(t3)).sort((t3, e3) => e3.length - t3.length)[0]];
    }
  }, writeMeta(t2, e2) {
    const n2 = document.getElementsByTagName("head")[0], o2 = t2.match(/(.+)\:/), r2 = o2 && o2[1] || "plain", {propField: i2, valueField: s2} = qt.services[r2] || qt.services.plain, a2 = document.querySelector(`meta[${i2}='${t2}']`);
    a2 && a2.remove();
    const c2 = document.createElement("meta");
    c2.setAttribute(i2, t2), c2.setAttribute(s2, e2), c2.setAttribute("data-origin", "routify"), n2.appendChild(c2);
  }, set(t2, e2) {
    Ct.plugins.forEach((n2) => {
      n2.condition(t2, e2) && ([t2, e2] = n2.action(t2, e2) || [t2, e2]);
    });
  }, clear() {
    const t2 = document.querySelector("meta");
    t2 && t2.remove();
  }, template(t2, e2) {
    const n2 = Ct.getOrigin();
    Ct.templates[t2] = Ct.templates[t2] || {}, Ct.templates[t2][n2] = e2;
  }, update() {
    Object.keys(Ct.props).forEach((t2) => {
      let e2 = Ct.getLongest(Ct.props, t2);
      Ct.plugins.forEach((n2) => {
        n2.condition(t2, e2) && ([t2, e2] = n2.action(t2, e2) || [t2, e2]);
      });
    });
  }, batchedUpdate() {
    Ct._pendingUpdate || (Ct._pendingUpdate = true, setTimeout(() => {
      Ct._pendingUpdate = false, this.update();
    }));
  }, _updateQueued: false, getOrigin() {
    const t2 = St();
    return t2 && c(t2).path || "/";
  }, _pendingUpdate: false};
  const qt = new Proxy(Ct, {set(t2, e2, n2, o2) {
    const {props: r2, getOrigin: i2} = t2;
    return Reflect.has(t2, e2) ? Reflect.set(t2, e2, n2, o2) : (r2[e2] = r2[e2] || {}, r2[e2][i2()] = n2), window.routify.appLoaded && t2.batchedUpdate(), true;
  }});
  function Bt(t2, e2, n2) {
    const o2 = t2.slice();
    return o2[18] = e2[n2].component, o2[19] = e2[n2].componentFile, o2[2] = e2[n2].decorator, o2[1] = e2[n2].nodes, o2;
  }
  function Ut(t2) {
    let e2, n2, o2 = [], r2 = new Map(), i2 = [t2[4]];
    const s2 = (t3) => function({meta: t4, path: e3, param: n3, params: o3}) {
      return JSON.stringify({path: e3, param: (t4["param-is-page"] || t4["slug-is-page"]) && n3, queryParams: t4["query-params-is-page"] && o3});
    }(t3[18]);
    for (let e3 = 0; e3 < 1; e3 += 1) {
      let n3 = Bt(t2, i2, e3), a2 = s2(n3);
      r2.set(a2, o2[e3] = Jt(a2, n3));
    }
    return {c() {
      for (let t3 = 0; t3 < 1; t3 += 1)
        o2[t3].c();
      e2 = b();
    }, m(t3, r3) {
      for (let e3 = 0; e3 < 1; e3 += 1)
        o2[e3].m(t3, r3);
      h(t3, e2, r3), n2 = true;
    }, p(t3, n3) {
      4194365 & n3 && (i2 = [t3[4]], H(), o2 = G(o2, n3, s2, 1, t3, i2, r2, e2.parentNode, W, Jt, e2, Bt), K());
    }, i(t3) {
      if (!n2) {
        for (let t4 = 0; t4 < 1; t4 += 1)
          D(o2[t4]);
        n2 = true;
      }
    }, o(t3) {
      for (let t4 = 0; t4 < 1; t4 += 1)
        J(o2[t4]);
      n2 = false;
    }, d(t3) {
      for (let e3 = 0; e3 < 1; e3 += 1)
        o2[e3].d(t3);
      t3 && m(e2);
    }};
  }
  function Ht(t2) {
    let e2, n2;
    return e2 = new Gt({props: {decorator: t2[2], nodes: [...t2[1]], scoped: {...t2[0], ...t2[22]}}}), {c() {
      Q(e2.$$.fragment);
    }, m(t3, o2) {
      V(e2, t3, o2), n2 = true;
    }, p(t3, n3) {
      const o2 = {};
      4 & n3 && (o2.decorator = t3[2]), 16 & n3 && (o2.nodes = [...t3[1]]), 4194305 & n3 && (o2.scoped = {...t3[0], ...t3[22]}), e2.$set(o2);
    }, i(t3) {
      n2 || (D(e2.$$.fragment, t3), n2 = true);
    }, o(t3) {
      J(e2.$$.fragment, t3), n2 = false;
    }, d(t3) {
      Z(e2, t3);
    }};
  }
  function Kt(t2) {
    let e2, n2, o2 = t2[18] && t2[1].length && Ht(t2);
    return {c() {
      o2 && o2.c(), e2 = b();
    }, m(t3, r2) {
      o2 && o2.m(t3, r2), h(t3, e2, r2), n2 = true;
    }, p(t3, n3) {
      t3[18] && t3[1].length ? o2 ? (o2.p(t3, n3), 16 & n3 && D(o2, 1)) : (o2 = Ht(t3), o2.c(), D(o2, 1), o2.m(e2.parentNode, e2)) : o2 && (H(), J(o2, 1, 1, () => {
        o2 = null;
      }), K());
    }, i(t3) {
      n2 || (D(o2), n2 = true);
    }, o(t3) {
      J(o2), n2 = false;
    }, d(t3) {
      o2 && o2.d(t3), t3 && m(e2);
    }};
  }
  function Dt(t2) {
    let n2, o2, r2;
    const i2 = [{scoped: t2[0]}, {scopedSync: t2[5]}, t2[3].param || {}];
    var s2 = t2[19];
    function a2(t3) {
      let n3 = {$$slots: {default: [Kt, ({scoped: t4, decorator: e2}) => ({22: t4, 2: e2}), ({scoped: t4, decorator: e2}) => (t4 ? 4194304 : 0) | (e2 ? 4 : 0)]}, $$scope: {ctx: t3}};
      for (let t4 = 0; t4 < i2.length; t4 += 1)
        n3 = e(n3, i2[t4]);
      return {props: n3};
    }
    return s2 && (n2 = new s2(a2(t2))), {c() {
      n2 && Q(n2.$$.fragment), o2 = y();
    }, m(t3, e2) {
      n2 && V(n2, t3, e2), h(t3, o2, e2), r2 = true;
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
          H();
          const t4 = n2;
          J(t4.$$.fragment, 1, 0, () => {
            Z(t4, 1);
          }), K();
        }
        s2 ? (n2 = new s2(a2(t3)), Q(n2.$$.fragment), D(n2.$$.fragment, 1), V(n2, o2.parentNode, o2)) : n2 = null;
      } else
        s2 && n2.$set(r3);
    }, i(t3) {
      r2 || (n2 && D(n2.$$.fragment, t3), r2 = true);
    }, o(t3) {
      n2 && J(n2.$$.fragment, t3), r2 = false;
    }, d(t3) {
      n2 && Z(n2, t3), t3 && m(o2);
    }};
  }
  function Jt(t2, e2) {
    let n2, o2, r2, i2;
    var s2 = e2[2];
    function a2(t3) {
      return {props: {scoped: t3[0], $$slots: {default: [Dt]}, $$scope: {ctx: t3}}};
    }
    return s2 && (o2 = new s2(a2(e2))), {key: t2, first: null, c() {
      n2 = b(), o2 && Q(o2.$$.fragment), r2 = b(), this.first = n2;
    }, m(t3, e3) {
      h(t3, n2, e3), o2 && V(o2, t3, e3), h(t3, r2, e3), i2 = true;
    }, p(t3, n3) {
      e2 = t3;
      const i3 = {};
      if (1 & n3 && (i3.scoped = e2[0]), 8388669 & n3 && (i3.$$scope = {dirty: n3, ctx: e2}), s2 !== (s2 = e2[2])) {
        if (o2) {
          H();
          const t4 = o2;
          J(t4.$$.fragment, 1, 0, () => {
            Z(t4, 1);
          }), K();
        }
        s2 ? (o2 = new s2(a2(e2)), Q(o2.$$.fragment), D(o2.$$.fragment, 1), V(o2, r2.parentNode, r2)) : o2 = null;
      } else
        s2 && o2.$set(i3);
    }, i(t3) {
      i2 || (o2 && D(o2.$$.fragment, t3), i2 = true);
    }, o(t3) {
      o2 && J(o2.$$.fragment, t3), i2 = false;
    }, d(t3) {
      t3 && m(n2), t3 && m(r2), o2 && Z(o2, t3);
    }};
  }
  function zt(e2) {
    let n2, o2, r2, s2, a2, c2 = e2[4] && Ut(e2);
    return {c() {
      c2 && c2.c(), n2 = y(), o2 = g("span");
    }, m(l2, u2) {
      var p2;
      c2 && c2.m(l2, u2), h(l2, n2, u2), h(l2, o2, u2), r2 = true, s2 || (p2 = e2[8].call(null, o2), a2 = p2 && i(p2.destroy) ? p2.destroy : t, s2 = true);
    }, p(t2, [e3]) {
      t2[4] ? c2 ? (c2.p(t2, e3), 16 & e3 && D(c2, 1)) : (c2 = Ut(t2), c2.c(), D(c2, 1), c2.m(n2.parentNode, n2)) : c2 && (H(), J(c2, 1, 1, () => {
        c2 = null;
      }), K());
    }, i(t2) {
      r2 || (D(c2), r2 = true);
    }, o(t2) {
      J(c2), r2 = false;
    }, d(t2) {
      c2 && c2.d(t2), t2 && m(n2), t2 && m(o2), s2 = false, a2();
    }};
  }
  function Wt(t2, e2, n2) {
    let o2, r2, i2, s2, a2;
    l(t2, $t, (t3) => n2(10, i2 = t3)), l(t2, mt, (t3) => n2(14, s2 = t3));
    let c2, {nodes: u2 = []} = e2, {scoped: p2 = {}} = e2, {decorator: f2} = e2, d2 = null, h2 = null, m2 = {};
    const g2 = dt(null);
    l(t2, g2, (t3) => n2(4, a2 = t3));
    const $2 = O("routify");
    l(t2, $2, (t3) => n2(9, r2 = t3));
    function y2(t3) {
      n2(5, m2 = {...p2}), h2.length === 0 && async function() {
        await N(), nt(c2);
        const t4 = a2.component.path === s2.path;
        !window.routify.stopAutoReady && t4 && wt({page: a2.component, metatags: qt, afterPageLoad: Ft});
      }();
      const e3 = {nodes: h2, decorator: f2 || pt, layout: d2.isLayout ? d2 : o2.layout, component: d2, route: s2, componentFile: t3, parentNode: c2 || o2.parentNode};
      g2.set(e3);
    }
    return k("routify", g2), t2.$$set = (t3) => {
      "nodes" in t3 && n2(1, u2 = t3.nodes), "scoped" in t3 && n2(0, p2 = t3.scoped), "decorator" in t3 && n2(2, f2 = t3.decorator);
    }, t2.$$.update = () => {
      1536 & t2.$$.dirty && (o2 = r2 || i2), 2 & t2.$$.dirty && n2(3, [d2, ...h2] = u2, d2), 8 & t2.$$.dirty && function(t3) {
        let e3 = t3.component();
        e3 instanceof Promise ? e3.then(y2) : y2(e3);
      }(d2), 16 & t2.$$.dirty && a2 && it(a2, N);
    }, [p2, u2, f2, d2, a2, m2, g2, $2, (t3) => c2 = t3.parentNode, r2, i2];
  }
  class Gt extends Y {
    constructor(t2) {
      super(), X(this, t2, Wt, zt, s, {nodes: 1, scoped: 0, decorator: 2});
    }
  }
  function Qt(t2, e2) {
    let n2 = false;
    function o2(o3, r3) {
      const i2 = xt(o3 || st().fullpath);
      i2.redirectTo && (history.replaceStateNative({}, null, i2.redirectTo), delete i2.redirectTo);
      const s2 = [...(r3 && xt(st().fullpath, t2) || i2).layouts, i2];
      n2 && delete n2.last, i2.last = n2, n2 = i2, o3 || yt.set(i2), mt.set(i2), i2.api.preload().then(() => {
        bt.set(true), e2(s2);
      });
    }
    const r2 = function(t3) {
      ["pushState", "replaceState"].forEach((t4) => {
        history[t4 + "Native"] = history[t4], history[t4] = async function(e4 = {}, n4, o3) {
          if (o3 === location.pathname + location.search + location.hash)
            return false;
          const {id: r3, path: i2, params: s2} = c(mt);
          e4 = {id: r3, path: i2, params: s2, ...e4};
          const a2 = new Event(t4.toLowerCase());
          Object.assign(a2, {state: e4, title: n4, url: o3});
          return await Zt(a2, o3) ? (history[t4 + "Native"].apply(this, [e4, n4, o3]), dispatchEvent(a2)) : void 0;
        };
      });
      let e3 = false;
      const n3 = {click: Vt, pushstate: () => t3(), replacestate: () => t3(), popstate: async (n4) => {
        e3 ? e3 = false : await Zt(n4, st().fullpath) ? t3() : (e3 = true, n4.preventDefault(), history.go(1));
      }};
      Object.entries(n3).forEach((t4) => addEventListener(...t4));
      return () => {
        Object.entries(n3).forEach((t4) => removeEventListener(...t4));
      };
    }(o2);
    return {updatePage: o2, destroy: r2};
  }
  function Vt(t2) {
    const e2 = t2.target.closest("a"), n2 = e2 && e2.href;
    if (t2.ctrlKey || t2.metaKey || t2.altKey || t2.shiftKey || t2.button || t2.defaultPrevented)
      return;
    if (!n2 || e2.target || e2.host !== location.host)
      return;
    const o2 = new URL(n2), r2 = o2.pathname + o2.search + o2.hash;
    t2.preventDefault(), history.pushState({}, "", r2);
  }
  async function Zt(t2, e2) {
    const n2 = xt(e2).api;
    for (const o2 of Nt._hooks.filter(Boolean)) {
      if (!await o2(t2, n2, {url: e2}))
        return false;
    }
    return true;
  }
  function Xt(t2) {
    let e2, n2;
    return e2 = new Gt({props: {nodes: t2[0]}}), {c() {
      Q(e2.$$.fragment);
    }, m(t3, o2) {
      V(e2, t3, o2), n2 = true;
    }, p(t3, n3) {
      const o2 = {};
      1 & n3 && (o2.nodes = t3[0]), e2.$set(o2);
    }, i(t3) {
      n2 || (D(e2.$$.fragment, t3), n2 = true);
    }, o(t3) {
      J(e2.$$.fragment, t3), n2 = false;
    }, d(t3) {
      Z(e2, t3);
    }};
  }
  function Yt(t2) {
    let e2, n2, o2, r2 = t2[0] && t2[1] !== null && Xt(t2);
    return n2 = new It({}), {c() {
      r2 && r2.c(), e2 = y(), Q(n2.$$.fragment);
    }, m(t3, i2) {
      r2 && r2.m(t3, i2), h(t3, e2, i2), V(n2, t3, i2), o2 = true;
    }, p(t3, [n3]) {
      t3[0] && t3[1] !== null ? r2 ? (r2.p(t3, n3), 3 & n3 && D(r2, 1)) : (r2 = Xt(t3), r2.c(), D(r2, 1), r2.m(e2.parentNode, e2)) : r2 && (H(), J(r2, 1, 1, () => {
        r2 = null;
      }), K());
    }, i(t3) {
      o2 || (D(r2), D(n2.$$.fragment, t3), o2 = true);
    }, o(t3) {
      J(r2), J(n2.$$.fragment, t3), o2 = false;
    }, d(t3) {
      r2 && r2.d(t3), t3 && m(e2), Z(n2, t3);
    }};
  }
  function te(t2, e2, n2) {
    let o2;
    l(t2, mt, (t3) => n2(1, o2 = t3));
    let r2, i2, {routes: s2} = e2, {config: a2 = {}} = e2;
    window.routify = window.routify || {}, window.routify.inBrowser = !window.navigator.userAgent.match("jsdom"), Object.assign(tt, a2);
    k("routifyupdatepage", (...t3) => i2 && i2.updatePage(...t3));
    const c2 = (t3) => n2(0, r2 = t3), u2 = () => {
      i2 && (i2.destroy(), i2 = null);
    };
    let p2 = null;
    var f2;
    return f2 = u2, P().$$.on_destroy.push(f2), t2.$$set = (t3) => {
      "routes" in t3 && n2(2, s2 = t3.routes), "config" in t3 && n2(3, a2 = t3.config);
    }, t2.$$.update = () => {
      4 & t2.$$.dirty && s2 && (clearTimeout(p2), p2 = setTimeout(() => {
        u2(), i2 = Qt(s2, c2), gt.set(s2), i2.updatePage();
      }));
    }, [r2, o2, s2, a2];
  }
  class ee extends Y {
    constructor(t2) {
      super(), X(this, t2, te, Yt, s, {routes: 2, config: 3});
    }
  }
  function ne(t2) {
    const e2 = async function(e3) {
      return await oe(t2, {file: e3.tree, state: {treePayload: e3}, scope: {}});
    };
    return e2.sync = function(e3) {
      return re(t2, {file: e3.tree, state: {treePayload: e3}, scope: {}});
    }, e2;
  }
  async function oe(t2, e2) {
    const n2 = await t2(e2);
    if (n2 === false)
      return false;
    const o2 = n2 || e2.file;
    if (o2.children) {
      const n3 = await Promise.all(o2.children.map(async (n4) => oe(t2, {state: e2.state, scope: ie(e2.scope || {}), parent: e2.file, file: await n4})));
      o2.children = n3.filter(Boolean);
    }
    return o2;
  }
  function re(t2, e2) {
    const n2 = t2(e2);
    if (n2 === false)
      return false;
    const o2 = n2 || e2.file;
    if (o2.children) {
      const n3 = o2.children.map((n4) => re(t2, {state: e2.state, scope: ie(e2.scope || {}), parent: e2.file, file: n4}));
      o2.children = n3.filter(Boolean);
    }
    return o2;
  }
  function ie(t2) {
    return JSON.parse(JSON.stringify(t2));
  }
  const se = ne(({file: t2}) => {
    (t2.isPage || t2.isFallback) && (t2.regex = ((t3, e2) => {
      const n2 = e2 ? "" : "/?$";
      return `^${t3 = (t3 = (t3 = t3.replace(/\/_fallback?$/, "(/|$)")).replace(/\/index$/, "(/index)?")).replace(et, "([^/]+)") + n2}`;
    })(t2.path, t2.isFallback));
  });
  const ae = ne(({file: t2}) => {
    t2.paramKeys = rt(t2.path);
  });
  const ce = ne(({file: t2}) => {
    t2.isFallback || t2.isIndex ? t2.shortPath = t2.path.replace(/\/[^/]+$/, "") : t2.shortPath = t2.path;
  });
  const le = ne(({file: t2}) => {
    t2.ranking = (({path: t3}) => t3.split("/").filter(Boolean).map((t4) => t4 === "_fallback" ? "A" : t4.startsWith(":") ? "B" : "C").join(""))(t2);
  });
  const ue = ne(({file: t2}) => {
    const e2 = t2, n2 = t2.meta && t2.meta.children || [];
    n2.length && (e2.children = e2.children || [], e2.children.push(...n2.map((t3) => ({isMeta: true, ...t3, meta: t3}))));
  });
  const pe = ne((t2) => {
    const {file: e2} = t2, {isFallback: n2, meta: o2} = e2, r2 = e2.path.match("/:"), i2 = e2.path.endsWith("/index"), s2 = o2.index || o2.index === 0, a2 = o2.index === false;
    e2.isIndexable = s2 || !n2 && !r2 && !i2 && !a2, e2.isNonIndexable = !e2.isIndexable;
  });
  const fe = ne(({file: t2, parent: e2}) => {
    Object.defineProperty(t2, "parent", {get: () => e2}), Object.defineProperty(t2, "nextSibling", {get: () => he(t2, 1)}), Object.defineProperty(t2, "prevSibling", {get: () => he(t2, -1)}), Object.defineProperty(t2, "lineage", {get: () => de(e2)});
  });
  function de(t2, e2 = []) {
    return t2 && (e2.unshift(t2), de(t2.parent, e2)), e2;
  }
  function he(t2, e2) {
    if (!t2.root) {
      const n2 = t2.parent.children.filter((t3) => t3.isIndexable), o2 = n2.indexOf(t2);
      return n2[o2 + e2];
    }
  }
  const me = ne(({file: t2, parent: e2}) => {
    t2.isIndex && Object.defineProperty(e2, "index", {get: () => t2});
  });
  const ge = ne(({file: t2, scope: e2}) => {
    function n2(t3) {
      const {parent: e3} = t3, o2 = e3 && e3.component && e3, r2 = o2 && o2.isReset, i2 = e3 && !r2 && n2(e3) || [];
      return o2 && i2.push(o2), i2;
    }
    Object.defineProperty(t2, "layouts", {get: () => n2(t2)});
  });
  const $e = ne(({file: t2}) => {
    const e2 = t2.root ? function() {
    } : t2.children ? (t2.isPage, function() {
    }) : (t2.isReset || t2.isLayout || t2.isFallback, function() {
    });
    Object.setPrototypeOf(t2, e2.prototype);
  });
  var ye = Object.freeze({__proto__: null, setRegex: se, setParamKeys: ae, setShortPath: ce, setRank: le, addMetaChildren: ue, setIsIndexable: pe, assignRelations: fe, assignIndex: me, assignLayout: ge, createFlatList: (t2) => {
    ne((t3) => {
      (t3.file.isPage || t3.file.isFallback) && t3.state.treePayload.routes.push(t3.file);
    }).sync(t2), t2.routes.sort((t3, e2) => t3.ranking >= e2.ranking ? -1 : 1);
  }, setPrototype: $e});
  const be = {isDir: false, ext: "svelte", isLayout: false, isReset: false, isIndex: false, isFallback: false, isPage: false, ownMeta: {}, meta: {recursive: true, preload: false, prerender: true}, id: "__fallback"};
  function we(t2) {
    return Object.entries(be).forEach(([e2, n2]) => {
      t2[e2] === void 0 && (t2[e2] = n2);
    }), t2.children && (t2.children = t2.children.map(we)), t2;
  }
  const xe = ne(({file: t2}) => {
    t2.api = new ve(t2);
  });
  class ve {
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
      return _e(this, 1);
    }
    get prev() {
      return _e(this, -1);
    }
    async preload() {
      const t2 = [...this.__file.layouts, this.__file].map((t3) => t3.component());
      await Promise.all(t2);
    }
    get component() {
      return this.__file.component ? this.__file.component() : !!this.__file.index && this.__file.index.component();
    }
  }
  function _e(t2, e2) {
    if (!t2.__file.root) {
      const n2 = t2.parent.children.indexOf(t2);
      return t2.parent.children[n2 + e2];
    }
  }
  const Pe = {...ye, restoreDefaults: ({tree: t2}) => we(t2), assignAPI: xe};
  function ke(e2) {
    let n2, o2, r2, i2, s2, a2, c2, l2, u2;
    return {c() {
      n2 = g("section"), o2 = g("div"), r2 = g("p"), r2.textContent = "404", i2 = y(), s2 = g("p"), a2 = $("Page not found.\n      "), c2 = g("a"), l2 = $("Go back"), w(r2, "class", "title"), w(c2, "href", u2 = e2[0]("../")), w(s2, "class", "subtitle"), w(o2, "class", "hero-body"), w(n2, "class", "hero is-medium has-text-centered");
    }, m(t2, e3) {
      h(t2, n2, e3), d(n2, o2), d(o2, r2), d(o2, i2), d(o2, s2), d(s2, a2), d(s2, c2), d(c2, l2);
    }, p(t2, [e3]) {
      1 & e3 && u2 !== (u2 = t2[0]("../")) && w(c2, "href", u2);
    }, i: t, o: t, d(t2) {
      t2 && m(n2);
    }};
  }
  function Oe(t2, e2, n2) {
    let o2;
    return l(t2, At, (t3) => n2(0, o2 = t3)), [o2];
  }
  class Ee extends Y {
    constructor(t2) {
      super(), X(this, t2, Oe, ke, s, {});
    }
  }
  function je(e2) {
    let n2, o2, r2, i2, s2, a2, c2, l2, u2 = e2[0].message + "";
    return {c() {
      n2 = g("section"), o2 = g("div"), r2 = g("p"), r2.textContent = "yo", i2 = y(), s2 = g("p"), a2 = $(u2), c2 = $(" from "), l2 = $(e2[1]), w(o2, "class", "box"), w(n2, "class", "section");
    }, m(t2, e3) {
      h(t2, n2, e3), d(n2, o2), d(o2, r2), d(o2, i2), d(o2, s2), d(s2, a2), d(s2, c2), d(s2, l2);
    }, p(t2, [e3]) {
      1 & e3 && u2 !== (u2 = t2[0].message + "") && function(t3, e4) {
        e4 = "" + e4, t3.wholeText !== e4 && (t3.data = e4);
      }(a2, u2);
    }, i: t, o: t, d(t2) {
      t2 && m(n2);
    }};
  }
  function Le(t2, e2, n2) {
    let o2;
    l(t2, Rt, (t3) => n2(3, o2 = t3));
    const r2 = "https://aducks-api.herokuapp.com";
    qt.title = "\u0410\u0443\u0442\u044F\u0442\u0430", qt.description = "Description coming soon...";
    let i2 = {};
    return console.log(`api url: ${r2}`), fetch(r2 + "/foo").then((t3) => t3.json()).then((t3) => {
      n2(0, i2 = t3);
    }).then(o2), [i2, r2];
  }
  class Ie extends Y {
    constructor(t2) {
      super(), X(this, t2, Le, je, s, {});
    }
  }
  function Se(t2, e2, n2) {
    const o2 = t2.slice();
    return o2[4] = e2[n2][0], o2[5] = e2[n2][1], o2;
  }
  function Re(t2) {
    let e2, n2, o2, r2, i2 = t2[4] + "";
    return {c() {
      e2 = g("a"), n2 = $(i2), o2 = y(), w(e2, "class", "navbar-item"), w(e2, "href", r2 = t2[0](t2[5])), x(e2, "is-active", t2[1](t2[5]));
    }, m(t3, r3) {
      h(t3, e2, r3), d(e2, n2), d(e2, o2);
    }, p(t3, n3) {
      1 & n3 && r2 !== (r2 = t3[0](t3[5])) && w(e2, "href", r2), 6 & n3 && x(e2, "is-active", t3[1](t3[5]));
    }, d(t3) {
      t3 && m(e2);
    }};
  }
  function Fe(e2) {
    let n2, o2, r2, i2, s2, a2, c2 = e2[2] && function(t2) {
      let e3, n3, o3 = t2[2], r3 = [];
      for (let e4 = 0; e4 < o3.length; e4 += 1)
        r3[e4] = Re(Se(t2, o3, e4));
      return {c() {
        e3 = g("div"), n3 = g("div");
        for (let t3 = 0; t3 < r3.length; t3 += 1)
          r3[t3].c();
        w(n3, "class", "navbar-start"), w(e3, "class", "navbar-menu");
      }, m(t3, o4) {
        h(t3, e3, o4), d(e3, n3);
        for (let t4 = 0; t4 < r3.length; t4 += 1)
          r3[t4].m(n3, null);
      }, p(t3, e4) {
        if (7 & e4) {
          let i3;
          for (o3 = t3[2], i3 = 0; i3 < o3.length; i3 += 1) {
            const s3 = Se(t3, o3, i3);
            r3[i3] ? r3[i3].p(s3, e4) : (r3[i3] = Re(s3), r3[i3].c(), r3[i3].m(n3, null));
          }
          for (; i3 < r3.length; i3 += 1)
            r3[i3].d(1);
          r3.length = o3.length;
        }
      }, d(t3) {
        t3 && m(e3), function(t4, e4) {
          for (let n4 = 0; n4 < t4.length; n4 += 1)
            t4[n4] && t4[n4].d(e4);
        }(r3, t3);
      }};
    }(e2);
    return {c() {
      n2 = g("nav"), o2 = g("div"), r2 = g("a"), i2 = g("strong"), i2.textContent = "\u0410\u0443\u0442\u044F\u0442\u0430", a2 = y(), c2 && c2.c(), w(r2, "class", "navbar-item"), w(r2, "href", s2 = e2[0]("./index")), w(o2, "class", "navbar-brand"), w(n2, "class", "navbar is-dark is-mobile"), w(n2, "role", "navigation"), w(n2, "aria-label", "main navigation");
    }, m(t2, e3) {
      h(t2, n2, e3), d(n2, o2), d(o2, r2), d(r2, i2), d(n2, a2), c2 && c2.m(n2, null);
    }, p(t2, [e3]) {
      1 & e3 && s2 !== (s2 = t2[0]("./index")) && w(r2, "href", s2), t2[2] && c2.p(t2, e3);
    }, i: t, o: t, d(t2) {
      t2 && m(n2), c2 && c2.d();
    }};
  }
  function Ne(t2, e2, n2) {
    let o2, r2;
    l(t2, At, (t3) => n2(0, o2 = t3)), l(t2, Mt, (t3) => n2(1, r2 = t3));
    return [o2, r2, []];
  }
  class Te extends Y {
    constructor(t2) {
      super(), X(this, t2, Ne, Fe, s, {});
    }
  }
  function Ae(t2) {
    let e2, n2, o2;
    e2 = new Te({});
    const r2 = t2[1].default, i2 = u(r2, t2, t2[0], null);
    return {c() {
      Q(e2.$$.fragment), n2 = y(), i2 && i2.c();
    }, m(t3, r3) {
      V(e2, t3, r3), h(t3, n2, r3), i2 && i2.m(t3, r3), o2 = true;
    }, p(t3, [e3]) {
      i2 && i2.p && 1 & e3 && f(i2, r2, t3, t3[0], e3, null, null);
    }, i(t3) {
      o2 || (D(e2.$$.fragment, t3), D(i2, t3), o2 = true);
    }, o(t3) {
      J(e2.$$.fragment, t3), J(i2, t3), o2 = false;
    }, d(t3) {
      Z(e2, t3), t3 && m(n2), i2 && i2.d(t3);
    }};
  }
  function Me(t2, e2, n2) {
    let {$$slots: o2 = {}, $$scope: r2} = e2;
    return t2.$$set = (t3) => {
      "$$scope" in t3 && n2(0, r2 = t3.$$scope);
    }, [r2, o2];
  }
  class Ce extends Y {
    constructor(t2) {
      super(), X(this, t2, Me, Ae, s, {});
    }
  }
  const qe = {root: true, ownMeta: {preload: "proximity"}, children: [{isFallback: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/_fallback", component: () => Ee}, {isIndex: true, isPage: true, meta: {recursive: true, preload: "proximity", prerender: true}, path: "/index", id: "_index", component: () => Ie}], isLayout: true, meta: {preload: "proximity", recursive: true, prerender: true}, path: "/", id: "__layout", component: () => Ce};
  const {tree: Be, routes: Ue} = function(t2) {
    const e2 = ["restoreDefaults", "setParamKeys", "setRegex", "setShortPath", "setRank", "assignLayout", "setPrototype", "addMetaChildren", "assignRelations", "setIsIndexable", "assignIndex", "assignAPI", "createFlatList"], n2 = {tree: t2, routes: []};
    for (let t3 of e2) {
      (Pe[t3].sync || Pe[t3])(n2);
    }
    return n2;
  }(qe);
  function He(e2) {
    let n2, o2;
    return n2 = new ee({props: {routes: Ue}}), {c() {
      Q(n2.$$.fragment);
    }, m(t2, e3) {
      V(n2, t2, e3), o2 = true;
    }, p: t, i(t2) {
      o2 || (D(n2.$$.fragment, t2), o2 = true);
    }, o(t2) {
      J(n2.$$.fragment, t2), o2 = false;
    }, d(t2) {
      Z(n2, t2);
    }};
  }
  !function(t2, e2 = {target: document.body}, n2 = "hmr", o2 = "app-loaded") {
    const r2 = document.getElementById(n2), i2 = document.createElement("div");
    function s2() {
      r2 && r2.remove(), i2.style.visibility = null, i2.setAttribute("id", n2);
    }
    i2.style.visibility = "hidden", e2.target.appendChild(i2), r2 ? addEventListener(o2, s2) : s2(), new t2({...e2, target: i2});
  }(class extends Y {
    constructor(t2) {
      super(), X(this, t2, null, He, s, {});
    }
  }, {target: document.body}, "routify-app");
})();
