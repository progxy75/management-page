let e,
  t,
  n,
  l = !1,
  o = !1,
  s = !1,
  i = !1,
  r = !1;
const c = "http://www.w3.org/1999/xlink",
  f = {},
  a = (e) => "object" == (e = typeof e) || "function" === e,
  u = (e, t, ...n) => {
    let s = null,
      l = null,
      o = null,
      r = !1,
      i = !1;
    const c = [],
      p = (t) => {
        for (let n = 0; n < t.length; n++)
          (s = t[n]),
            Array.isArray(s)
              ? p(s)
              : null != s &&
                "boolean" != typeof s &&
                ((r = "function" != typeof e && !a(s)) && (s += ""),
                r && i ? (c[c.length - 1].t += s) : c.push(r ? d(null, s) : s),
                (i = r));
      };
    if ((p(n), t)) {
      t.key && (l = t.key), t.name && (o = t.name);
      {
        const e = t.className || t.class;
        e &&
          (t.class =
            "object" != typeof e
              ? e
              : Object.keys(e)
                  .filter((t) => e[t])
                  .join(" "));
      }
    }
    if ("function" == typeof e) return e(null === t ? {} : t, c, h);
    const u = d(e, null);
    return (u.l = t), c.length > 0 && (u.o = c), (u.i = l), (u.u = o), u;
  },
  d = (e, t) => ({
    $: 0,
    h: e,
    t: t,
    p: null,
    o: null,
    l: null,
    i: null,
    u: null,
  }),
  $ = {},
  h = {
    forEach: (e, t) => e.map(p).forEach(t),
    map: (e, t) => e.map(p).map(t).map(y),
  },
  p = (e) => ({
    vattrs: e.l,
    vchildren: e.o,
    vkey: e.i,
    vname: e.u,
    vtag: e.h,
    vtext: e.t,
  }),
  y = (e) => {
    if ("function" == typeof e.vtag) {
      const t = Object.assign({}, e.vattrs);
      return (
        e.vkey && (t.key = e.vkey),
        e.vname && (t.name = e.vname),
        u(e.vtag, t, ...(e.vchildren || []))
      );
    }
    const t = d(e.vtag, e.vtext);
    return (
      (t.l = e.vattrs), (t.o = e.vchildren), (t.i = e.vkey), (t.u = e.vname), t
    );
  },
  m = (e) => ne(e).m,
  b = (e, t, n) => {
    const s = m(e);
    return {
      emit: (e) =>
        w(s, t, {
          bubbles: !!(4 & n),
          composed: !!(2 & n),
          cancelable: !!(1 & n),
          detail: e,
        }),
    };
  },
  w = (e, t, n) => {
    const s = de.ce(t, n);
    return e.dispatchEvent(s), s;
  },
  g = new WeakMap(),
  v = (e) => "sc-" + e.g,
  k = (e, t, n, s, l, o) => {
    if (n !== s) {
      let r = se(e, t),
        i = t.toLowerCase();
      if ("class" === t) {
        const t = e.classList,
          l = S(n),
          o = S(s);
        t.remove(...l.filter((e) => e && !o.includes(e))),
          t.add(...o.filter((e) => e && !l.includes(e)));
      } else if ("style" === t) {
        for (const t in n)
          (s && null != s[t]) ||
            (t.includes("-") ? e.style.removeProperty(t) : (e.style[t] = ""));
        for (const t in s)
          (n && s[t] === n[t]) ||
            (t.includes("-")
              ? e.style.setProperty(t, s[t])
              : (e.style[t] = s[t]));
      } else if ("key" === t);
      else if ("ref" === t) s && s(e);
      else if (r || "o" !== t[0] || "n" !== t[1]) {
        const d = a(s);
        if ((r || (d && null !== s)) && !l)
          try {
            if (e.tagName.includes("-")) e[t] = s;
            else {
              const l = null == s ? "" : s;
              "list" === t ? (r = !1) : (null != n && e[t] == l) || (e[t] = l);
            }
          } catch (e) {}
        let h = !1;
        i !== (i = i.replace(/^xlink\:?/, "")) && ((t = i), (h = !0)),
          null == s || !1 === s
            ? (!1 === s && "" !== e.getAttribute(t)) ||
              (h ? e.removeAttributeNS(c, t) : e.removeAttribute(t))
            : (!r || 4 & o || l) &&
              !d &&
              ((s = !0 === s ? "" : s),
              h ? e.setAttributeNS(c, t, s) : e.setAttribute(t, s));
      } else
        (t =
          "-" === t[2]
            ? t.slice(3)
            : se(ae, i)
            ? i.slice(2)
            : i[2] + t.slice(3)),
          n && de.rel(e, t, n, !1),
          s && de.ael(e, t, s, !1);
    }
  },
  j = /\s/,
  S = (e) => (e ? e.split(j) : []),
  O = (e, t, n, s) => {
    const l = 11 === t.p.nodeType && t.p.host ? t.p.host : t.p,
      o = (e && e.l) || f,
      r = t.l || f;
    for (s in o) s in r || k(l, s, o[s], void 0, n, t.$);
    for (s in r) k(l, s, o[s], r[s], n, t.$);
  },
  M = (o, r, a, c) => {
    const d = r.o[a];
    let h,
      p,
      u,
      f = 0;
    if (
      (l ||
        ((s = !0),
        "slot" === d.h &&
          (e && c.classList.add(e + "-s"), (d.$ |= d.o ? 2 : 1))),
      null !== d.t)
    )
      h = d.p = ue.createTextNode(d.t);
    else if (1 & d.$) h = d.p = ue.createTextNode("");
    else {
      if (
        (i || (i = "svg" === d.h),
        (h = d.p =
          ue.createElementNS(
            i ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
            2 & d.$ ? "slot-fb" : d.h
          )),
        i && "foreignObject" === d.h && (i = !1),
        O(null, d, i),
        null != e && h["s-si"] !== e && h.classList.add((h["s-si"] = e)),
        d.o)
      )
        for (f = 0; f < d.o.length; ++f)
          (p = M(o, d, f, h)), p && h.appendChild(p);
      "svg" === d.h ? (i = !1) : "foreignObject" === h.tagName && (i = !0);
    }
    return (
      (h["s-hn"] = n),
      3 & d.$ &&
        ((h["s-sr"] = !0),
        (h["s-cr"] = t),
        (h["s-sn"] = d.u || ""),
        (u = o && o.o && o.o[a]),
        u && u.h === d.h && o.p && x(o.p, !1)),
      h
    );
  },
  x = (e, t) => {
    de.$ |= 1;
    const l = e.childNodes;
    for (let e = l.length - 1; e >= 0; e--) {
      const o = l[e];
      o["s-hn"] !== n &&
        o["s-ol"] &&
        (E(o).insertBefore(o, T(o)),
        o["s-ol"].remove(),
        (o["s-ol"] = void 0),
        (s = !0)),
        t && x(o, t);
    }
    de.$ &= -2;
  },
  C = (e, t, s, l, o, r) => {
    let i,
      a = (e["s-cr"] && e["s-cr"].parentNode) || e;
    for (a.shadowRoot && a.tagName === n && (a = a.shadowRoot); o <= r; ++o)
      l[o] &&
        ((i = M(null, s, o, e)), i && ((l[o].p = i), a.insertBefore(i, T(t))));
  },
  R = (e, t, n, s, l) => {
    for (; t <= n; ++t)
      (s = e[t]) &&
        ((l = s.p),
        F(s),
        (o = !0),
        l["s-ol"] ? l["s-ol"].remove() : x(l, !0),
        l.remove());
  },
  P = (e, t) => e.h === t.h && ("slot" === e.h ? e.u === t.u : e.i === t.i),
  T = (e) => (e && e["s-ol"]) || e,
  E = (e) => (e["s-ol"] ? e["s-ol"] : e).parentNode,
  L = (e, t) => {
    const n = (t.p = e.p),
      s = e.o,
      l = t.o,
      o = t.h,
      r = t.t;
    let a;
    null === r
      ? ((i = "svg" === o || ("foreignObject" !== o && i)),
        "slot" === o || O(e, t, i),
        null !== s && null !== l
          ? ((e, t, n, s) => {
              let l,
                o,
                r = 0,
                i = 0,
                a = 0,
                c = 0,
                d = t.length - 1,
                h = t[0],
                p = t[d],
                u = s.length - 1,
                f = s[0],
                m = s[u];
              for (; r <= d && i <= u; )
                if (null == h) h = t[++r];
                else if (null == p) p = t[--d];
                else if (null == f) f = s[++i];
                else if (null == m) m = s[--u];
                else if (P(h, f)) L(h, f), (h = t[++r]), (f = s[++i]);
                else if (P(p, m)) L(p, m), (p = t[--d]), (m = s[--u]);
                else if (P(h, m))
                  ("slot" !== h.h && "slot" !== m.h) || x(h.p.parentNode, !1),
                    L(h, m),
                    e.insertBefore(h.p, p.p.nextSibling),
                    (h = t[++r]),
                    (m = s[--u]);
                else if (P(p, f))
                  ("slot" !== h.h && "slot" !== m.h) || x(p.p.parentNode, !1),
                    L(p, f),
                    e.insertBefore(p.p, h.p),
                    (p = t[--d]),
                    (f = s[++i]);
                else {
                  for (a = -1, c = r; c <= d; ++c)
                    if (t[c] && null !== t[c].i && t[c].i === f.i) {
                      a = c;
                      break;
                    }
                  a >= 0
                    ? ((o = t[a]),
                      o.h !== f.h
                        ? (l = M(t && t[i], n, a, e))
                        : (L(o, f), (t[a] = void 0), (l = o.p)),
                      (f = s[++i]))
                    : ((l = M(t && t[i], n, i, e)), (f = s[++i])),
                    l && E(h.p).insertBefore(l, T(h.p));
                }
              r > d
                ? C(e, null == s[u + 1] ? null : s[u + 1].p, n, s, i, u)
                : i > u && R(t, r, d);
            })(n, s, t, l)
          : null !== l
          ? (null !== e.t && (n.textContent = ""),
            C(n, null, t, l, 0, l.length - 1))
          : null !== s && R(s, 0, s.length - 1),
        i && "svg" === o && (i = !1))
      : (a = n["s-cr"])
      ? (a.parentNode.textContent = r)
      : e.t !== r && (n.data = r);
  },
  N = (e) => {
    const t = e.childNodes;
    let n, s, l, o, r, i;
    for (s = 0, l = t.length; s < l; s++)
      if (((n = t[s]), 1 === n.nodeType)) {
        if (n["s-sr"])
          for (r = n["s-sn"], n.hidden = !1, o = 0; o < l; o++)
            if (((i = t[o].nodeType), t[o]["s-hn"] !== n["s-hn"] || "" !== r)) {
              if (1 === i && r === t[o].getAttribute("slot")) {
                n.hidden = !0;
                break;
              }
            } else if (1 === i || (3 === i && "" !== t[o].textContent.trim())) {
              n.hidden = !0;
              break;
            }
        N(n);
      }
  },
  W = [],
  A = (e) => {
    let t,
      n,
      s,
      l,
      r,
      i,
      a = 0;
    const c = e.childNodes,
      d = c.length;
    for (; a < d; a++) {
      if (((t = c[a]), t["s-sr"] && (n = t["s-cr"]) && n.parentNode))
        for (
          s = n.parentNode.childNodes, l = t["s-sn"], i = s.length - 1;
          i >= 0;
          i--
        )
          (n = s[i]),
            n["s-cn"] ||
              n["s-nr"] ||
              n["s-hn"] === t["s-hn"] ||
              (D(n, l)
                ? ((r = W.find((e) => e.v === n)),
                  (o = !0),
                  (n["s-sn"] = n["s-sn"] || l),
                  r ? (r.k = t) : W.push({ k: t, v: n }),
                  n["s-sr"] &&
                    W.map((e) => {
                      D(e.v, n["s-sn"]) &&
                        ((r = W.find((e) => e.v === n)),
                        r && !e.k && (e.k = r.k));
                    }))
                : W.some((e) => e.v === n) || W.push({ v: n }));
      1 === t.nodeType && A(t);
    }
  },
  D = (e, t) =>
    1 === e.nodeType
      ? (null === e.getAttribute("slot") && "" === t) ||
        e.getAttribute("slot") === t
      : e["s-sn"] === t || "" === t,
  F = (e) => {
    e.l && e.l.ref && e.l.ref(null), e.o && e.o.map(F);
  },
  H = (e, t) => {
    t && !e.j && t["s-p"] && t["s-p"].push(new Promise((t) => (e.j = t)));
  },
  U = (e, t) => {
    if (((e.$ |= 16), !(4 & e.$))) return H(e, e.S), ve(() => q(e, t));
    e.$ |= 512;
  },
  q = (e, t) => {
    const n = e.O;
    let s;
    return (
      t &&
        ((e.$ |= 256),
        e.M && (e.M.map(([e, t]) => G(n, e, t)), (e.M = null)),
        (s = G(n, "componentWillLoad"))),
      I(s, () => V(e, n, t))
    );
  },
  V = async (e, t, n) => {
    const s = e.m,
      l = s["s-rc"];
    n &&
      ((e) => {
        const t = e.C,
          n = e.m,
          s = t.$,
          l = ((e, t) => {
            let n = v(t);
            const s = fe.get(n);
            if (((e = 11 === e.nodeType ? e : ue), s))
              if ("string" == typeof s) {
                let t,
                  l = g.get((e = e.head || e));
                l || g.set(e, (l = new Set())),
                  l.has(n) ||
                    ((t = ue.createElement("style")),
                    (t.innerHTML = s),
                    e.insertBefore(t, e.querySelector("link")),
                    l && l.add(n));
              } else
                e.adoptedStyleSheets.includes(s) ||
                  (e.adoptedStyleSheets = [...e.adoptedStyleSheets, s]);
            return n;
          })(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
        10 & s && ((n["s-sc"] = l), n.classList.add(l + "-h"));
      })(e),
      _(e, t),
      l && (l.map((e) => e()), (s["s-rc"] = void 0));
    {
      const t = s["s-p"],
        n = () => z(e);
      0 === t.length
        ? n()
        : (Promise.all(t).then(n), (e.$ |= 4), (t.length = 0));
    }
  },
  _ = (r, i) => {
    try {
      (i = i.render()),
        (r.$ &= -17),
        (r.$ |= 2),
        ((r, i) => {
          const a = r.m,
            c = r.C,
            h = r.R || d(null, null),
            p = ((e) => e && e.h === $)(i) ? i : u(null, null, i);
          if (
            ((n = a.tagName),
            c.P && ((p.l = p.l || {}), c.P.map(([e, t]) => (p.l[t] = a[e]))),
            (p.h = null),
            (p.$ |= 4),
            (r.R = p),
            (p.p = h.p = a.shadowRoot || a),
            (e = a["s-sc"]),
            (t = a["s-cr"]),
            (l = 0 != (1 & c.$)),
            (o = !1),
            L(h, p),
            (de.$ |= 1),
            s)
          ) {
            let e, t, n, s, l, o;
            A(p.p);
            let r = 0;
            for (; r < W.length; r++)
              (e = W[r]),
                (t = e.v),
                t["s-ol"] ||
                  ((n = ue.createTextNode("")),
                  (n["s-nr"] = t),
                  t.parentNode.insertBefore((t["s-ol"] = n), t));
            for (r = 0; r < W.length; r++)
              if (((e = W[r]), (t = e.v), e.k)) {
                for (
                  s = e.k.parentNode, l = e.k.nextSibling, n = t["s-ol"];
                  (n = n.previousSibling);

                )
                  if (
                    ((o = n["s-nr"]),
                    o &&
                      o["s-sn"] === t["s-sn"] &&
                      s === o.parentNode &&
                      ((o = o.nextSibling), !o || !o["s-nr"]))
                  ) {
                    l = o;
                    break;
                  }
                ((!l && s !== t.parentNode) || t.nextSibling !== l) &&
                  t !== l &&
                  (!t["s-hn"] &&
                    t["s-ol"] &&
                    (t["s-hn"] = t["s-ol"].parentNode.nodeName),
                  s.insertBefore(t, l));
              } else 1 === t.nodeType && (t.hidden = !0);
          }
          o && N(p.p), (de.$ &= -2), (W.length = 0);
        })(r, i);
    } catch (e) {
      ie(e, r.m);
    }
    return null;
  },
  z = (e) => {
    const t = e.m,
      n = e.O,
      s = e.S;
    G(n, "componentDidRender"),
      64 & e.$ ||
        ((e.$ |= 64), J(t), G(n, "componentDidLoad"), e.T(t), s || B()),
      e.L(t),
      e.j && (e.j(), (e.j = void 0)),
      512 & e.$ && ge(() => U(e, !1)),
      (e.$ &= -517);
  },
  B = () => {
    J(ue.documentElement),
      ge(() => w(ae, "appload", { detail: { namespace: "web-components" } }));
  },
  G = (e, t, n) => {
    if (e && e[t])
      try {
        return e[t](n);
      } catch (e) {
        ie(e);
      }
  },
  I = (e, t) => (e && e.then ? e.then(t) : t()),
  J = (e) => e.classList.add("hydrated"),
  K = (e, t, n) => {
    if (t.N) {
      e.watchers && (t.W = e.watchers);
      const s = Object.entries(t.N),
        l = e.prototype;
      if (
        (s.map(([e, [s]]) => {
          31 & s || (2 & n && 32 & s)
            ? Object.defineProperty(l, e, {
                get() {
                  return ((e, t) => ne(this).A.get(t))(0, e);
                },
                set(n) {
                  ((e, t, n, s) => {
                    const l = ne(this),
                      o = l.m,
                      r = l.A.get(t),
                      i = l.$,
                      c = l.O;
                    if (
                      ((n = ((e, t) =>
                        null == e || a(e)
                          ? e
                          : 4 & t
                          ? "false" !== e && ("" === e || !!e)
                          : 2 & t
                          ? parseFloat(e)
                          : 1 & t
                          ? e + ""
                          : e)(n, s.N[t][0])),
                      (!(8 & i) || void 0 === r) &&
                        n !== r &&
                        (!Number.isNaN(r) || !Number.isNaN(n)) &&
                        (l.A.set(t, n), c))
                    ) {
                      if (s.W && 128 & i) {
                        const e = s.W[t];
                        e &&
                          e.map((e) => {
                            try {
                              c[e](n, r, t);
                            } catch (e) {
                              ie(e, o);
                            }
                          });
                      }
                      2 == (18 & i) && U(l, !1);
                    }
                  })(0, e, n, t);
                },
                configurable: !0,
                enumerable: !0,
              })
            : 1 & n &&
              64 & s &&
              Object.defineProperty(l, e, {
                value(...t) {
                  const n = ne(this);
                  return n.D.then(() => n.O[e](...t));
                },
              });
        }),
        1 & n)
      ) {
        const n = new Map();
        (l.attributeChangedCallback = function (e, t, s) {
          de.jmp(() => {
            const t = n.get(e);
            if (this.hasOwnProperty(t)) (s = this[t]), delete this[t];
            else if (
              l.hasOwnProperty(t) &&
              "number" == typeof this[t] &&
              this[t] == s
            )
              return;
            this[t] = (null !== s || "boolean" != typeof this[t]) && s;
          });
        }),
          (e.observedAttributes = s
            .filter(([e, t]) => 15 & t[0])
            .map(([e, s]) => {
              const l = s[1] || e;
              return n.set(l, e), 512 & s[0] && t.P.push([e, l]), l;
            }));
      }
    }
    return e;
  },
  Q = (e, t = {}) => {
    const n = [],
      s = t.exclude || [],
      l = ae.customElements,
      o = ue.head,
      r = o.querySelector("meta[charset]"),
      i = ue.createElement("style"),
      a = [];
    let c,
      d = !0;
    Object.assign(de, t),
      (de.F = new URL(t.resourcesUrl || "./", ue.baseURI).href),
      e.map((e) => {
        e[1].map((t) => {
          const o = { $: t[0], g: t[1], N: t[2], H: t[3] };
          (o.N = t[2]), (o.H = t[3]), (o.P = []), (o.W = {});
          const r = o.g,
            i = class extends HTMLElement {
              constructor(e) {
                super(e),
                  oe((e = this), o),
                  1 & o.$ && e.attachShadow({ mode: "open" });
              }
              connectedCallback() {
                c && (clearTimeout(c), (c = null)),
                  d
                    ? a.push(this)
                    : de.jmp(() =>
                        ((e) => {
                          if (0 == (1 & de.$)) {
                            const t = ne(e),
                              n = t.C,
                              s = () => {};
                            if (1 & t.$) X(e, t, n.H);
                            else {
                              (t.$ |= 1),
                                12 & n.$ &&
                                  ((e) => {
                                    const t = (e["s-cr"] =
                                      ue.createComment(""));
                                    (t["s-cn"] = !0),
                                      e.insertBefore(t, e.firstChild);
                                  })(e);
                              {
                                let n = e;
                                for (; (n = n.parentNode || n.host); )
                                  if (n["s-p"]) {
                                    H(t, (t.S = n));
                                    break;
                                  }
                              }
                              n.N &&
                                Object.entries(n.N).map(([t, [n]]) => {
                                  if (31 & n && e.hasOwnProperty(t)) {
                                    const n = e[t];
                                    delete e[t], (e[t] = n);
                                  }
                                }),
                                (async (e, t, n, s, l) => {
                                  if (0 == (32 & t.$)) {
                                    {
                                      if (((t.$ |= 32), (l = ce(n)).then)) {
                                        const e = () => {};
                                        (l = await l), e();
                                      }
                                      l.isProxied ||
                                        ((n.W = l.watchers),
                                        K(l, n, 2),
                                        (l.isProxied = !0));
                                      const s = () => {};
                                      t.$ |= 8;
                                      try {
                                        new l(t);
                                      } catch (e) {
                                        ie(e);
                                      }
                                      (t.$ &= -9), (t.$ |= 128), s();
                                    }
                                    if (l.style) {
                                      let e = l.style;
                                      const t = v(n);
                                      if (!fe.has(t)) {
                                        const s = () => {};
                                        ((e, t, n) => {
                                          let s = fe.get(e);
                                          he && n
                                            ? ((s = s || new CSSStyleSheet()),
                                              "string" == typeof s
                                                ? (s = t)
                                                : s.replaceSync(t))
                                            : (s = t),
                                            fe.set(e, s);
                                        })(t, e, !!(1 & n.$)),
                                          s();
                                      }
                                    }
                                  }
                                  const o = t.S,
                                    r = () => U(t, !0);
                                  o && o["s-rc"] ? o["s-rc"].push(r) : r();
                                })(0, t, n);
                            }
                            s();
                          }
                        })(this)
                      );
              }
              disconnectedCallback() {
                de.jmp(() =>
                  (() => {
                    if (0 == (1 & de.$)) {
                      const e = ne(this),
                        t = e.O;
                      e.U && (e.U.map((e) => e()), (e.U = void 0)),
                        G(t, "disconnectedCallback");
                    }
                  })()
                );
              }
              componentOnReady() {
                return ne(this).q;
              }
            };
          (o.V = e[0]),
            s.includes(r) || l.get(r) || (n.push(r), l.define(r, K(i, o, 1)));
        });
      }),
      (i.innerHTML = n + "{visibility:hidden}.hydrated{visibility:inherit}"),
      i.setAttribute("data-styles", ""),
      o.insertBefore(i, r ? r.nextSibling : o.firstChild),
      (d = !1),
      a.length
        ? a.map((e) => e.connectedCallback())
        : de.jmp(() => (c = setTimeout(B, 30)));
  },
  X = (e, t, n) => {
    n &&
      n.map(([n, s, l]) => {
        const o = Z(e, n),
          r = Y(t, l),
          i = ee(n);
        de.ael(o, s, r, i), (t.U = t.U || []).push(() => de.rel(o, s, r, i));
      });
  },
  Y = (e, t) => (n) => {
    try {
      256 & e.$ ? e.O[t](n) : (e.M = e.M || []).push([t, n]);
    } catch (e) {
      ie(e);
    }
  },
  Z = (e, t) => (8 & t ? ae : e),
  ee = (e) => 0 != (2 & e),
  te = new WeakMap(),
  ne = (e) => te.get(e),
  le = (e, t) => te.set((t.O = e), t),
  oe = (e, t) => {
    const n = { $: 0, m: e, C: t, A: new Map() };
    return (
      (n.D = new Promise((e) => (n.L = e))),
      (n.q = new Promise((e) => (n.T = e))),
      (e["s-p"] = []),
      (e["s-rc"] = []),
      X(e, n, t.H),
      te.set(e, n)
    );
  },
  se = (e, t) => t in e,
  ie = (e, t) => (0, console.error)(e, t),
  re = new Map(),
  ce = (e) => {
    const t = e.g.replace(/-/g, "_"),
      n = e.V,
      s = re.get(n);
    return s
      ? s[t]
      : import(`./${n}.entry.js`).then((e) => (re.set(n, e), e[t]), ie);
  },
  fe = new Map(),
  ae = "undefined" != typeof window ? window : {},
  ue = ae.document || { head: {} },
  de = {
    $: 0,
    F: "",
    jmp: (e) => e(),
    raf: (e) => requestAnimationFrame(e),
    ael: (e, t, n, s) => e.addEventListener(t, n, s),
    rel: (e, t, n, s) => e.removeEventListener(t, n, s),
    ce: (e, t) => new CustomEvent(e, t),
  },
  $e = (e) => Promise.resolve(e),
  he = (() => {
    try {
      return (
        new CSSStyleSheet(),
        "function" == typeof new CSSStyleSheet().replaceSync
      );
    } catch (e) {}
    return !1;
  })(),
  pe = [],
  ye = [],
  me = (e, t) => (n) => {
    e.push(n), r || ((r = !0), t && 4 & de.$ ? ge(we) : de.raf(we));
  },
  be = (e) => {
    for (let t = 0; t < e.length; t++)
      try {
        e[t](performance.now());
      } catch (e) {
        ie(e);
      }
    e.length = 0;
  },
  we = () => {
    be(pe), be(ye), (r = pe.length > 0) && de.raf(we);
  },
  ge = (e) => $e().then(e),
  ve = me(ye, !0);
export { $ as H, Q as b, b as c, m as g, u as h, $e as p, le as r };
