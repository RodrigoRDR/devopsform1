(() => {
  "use strict";

  var n = {
      56: (n, e) => {
        n.exports = function (n) {
          var r = e.nc;
          r && n.setAttribute("nonce", r);
        };
      },
      72: (n) => {
        var r = [];
        function e(n) {
          for (var e = -1, o = 0; o < r.length; o++)
            if (r[o].identifier === n) {
              e = o;
              break;
            }
          return e;
        }
        function o(n, o) {
          for (var a = {}, i = [], c = 0; c < n.length; c++) {
            var s = n[c],
              A = o.base ? s[0] + o.base : s[0],
              u = a[A] || 0,
              p = "".concat(A, " ").concat(u);
            a[A] = u + 1;
            var d = e(p),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== d) r[d].references++, r[d].updater(f);
            else {
              var l = t(f, o);
              (o.byIndex = c),
                r.splice(c, 0, { identifier: p, updater: l, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function t(n, r) {
          var e = r.domAPI(r);
          return (
            e.update(n),
            function (r) {
              if (r) {
                if (
                  r.css === n.css &&
                  r.media === n.media &&
                  r.sourceMap === n.sourceMap &&
                  r.supports === n.supports &&
                  r.layer === n.layer
                )
                  return;
                e.update((n = r));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, t) {
          var a = o((n = n || []), (t = t || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var c = e(a[i]);
              r[c].references--;
            }
            for (var s = o(n, t), A = 0; A < a.length; A++) {
              var u = e(a[A]);
              0 === r[u].references && (r[u].updater(), r.splice(u, 1));
            }
            a = s;
          };
        };
      },
      113: (n) => {
        n.exports = function (n, r) {
          if (r.styleSheet) r.styleSheet.cssText = n;
          else {
            for (; r.firstChild; ) r.removeChild(r.firstChild);
            r.appendChild(document.createTextNode(n));
          }
        };
      },
      314: (n) => {
        n.exports = function (n) {
          var r = [];
          return (
            (r.toString = function () {
              return this.map(function (r) {
                var e = "",
                  o = void 0 !== r[5];
                return (
                  r[4] && (e += "@supports (".concat(r[4], ") {")),
                  r[2] && (e += "@media ".concat(r[2], " {")),
                  o &&
                    (e += "@layer".concat(
                      r[5].length > 0 ? " ".concat(r[5]) : "",
                      " {"
                    )),
                  (e += n(r)),
                  o && (e += "}"),
                  r[2] && (e += "}"),
                  r[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (r.i = function (n, e, o, t, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (o)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var A = 0; A < n.length; A++) {
                var u = [].concat(n[A]);
                (o && i[u[0]]) ||
                  (void 0 !== a &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = a)),
                  e &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = e))
                      : (u[2] = e)),
                  t &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = t))
                      : (u[4] = "".concat(t))),
                  r.push(u));
              }
            }),
            r
          );
        };
      },
      354: (n) => {
        n.exports = function (n) {
          var r = n[1],
            e = n[3];
          if (!e) return r;
          if ("function" == typeof btoa) {
            var o = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
              t =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  o
                ),
              a = "/*# ".concat(t, " */");
            return [r].concat([a]).join("\n");
          }
          return [r].join("\n");
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var r = document.createElement("style");
          return n.setAttributes(r, n.attributes), n.insert(r, n.options), r;
        };
      },
      659: (n) => {
        var r = {};
        n.exports = function (n, e) {
          var o = (function (n) {
            if (void 0 === r[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              r[n] = e;
            }
            return r[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(e);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var r = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, r, e) {
                var o = "";
                e.supports && (o += "@supports (".concat(e.supports, ") {")),
                  e.media && (o += "@media ".concat(e.media, " {"));
                var t = void 0 !== e.layer;
                t &&
                  (o += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {"
                  )),
                  (o += e.css),
                  t && (o += "}"),
                  e.media && (o += "}"),
                  e.supports && (o += "}");
                var a = e.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  r.styleTagTransform(o, n, r.options);
              })(r, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(r);
            },
          };
        };
      },
      958: (n, r, e) => {
        e.d(r, { A: () => c });
        var o = e(354),
          t = e.n(o),
          a = e(314),
          i = e.n(a)()(t());
        i.push([
          n.id,
          "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);",
        ]),
          i.push([
            n.id,
            ":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n.senha-gerada {\n  font-size: 2em;\n  color: var(--primary-color);\n  margin: 40px 0;\n}\n\ninput[type=\"checkbox\"] {\n  width: 15px;\n  height: 15px;\n}\n\nbutton {\n  display: block;\n  margin: 40px 0;\n  font-size: 1em;\n}",
            "",
            {
              version: 3,
              sources: ["webpack://./src/assets/css/style.css"],
              names: [],
              mappings:
                "AACA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,cAAc;EACd,2BAA2B;EAC3B,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,cAAc;EACd,cAAc;AAChB",
              sourcesContent: [
                "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n.senha-gerada {\n  font-size: 2em;\n  color: var(--primary-color);\n  margin: 40px 0;\n}\n\ninput[type=\"checkbox\"] {\n  width: 15px;\n  height: 15px;\n}\n\nbutton {\n  display: block;\n  margin: 40px 0;\n  font-size: 1em;\n}",
              ],
              sourceRoot: "",
            },
          ]);
        const c = i;
      },
    },
    r = {};
  function e(o) {
    var t = r[o];
    if (void 0 !== t) return t.exports;
    var a = (r[o] = { id: o, exports: {} });
    return n[o](a, a.exports, e), a.exports;
  }
  (e.n = (n) => {
    var r = n && n.__esModule ? () => n.default : () => n;
    return e.d(r, { a: r }), r;
  }),
    (e.d = (n, r) => {
      for (var o in r)
        e.o(r, o) &&
          !e.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: r[o] });
    }),
    (e.o = (n, r) => Object.prototype.hasOwnProperty.call(n, r)),
    (e.nc = void 0);
  var o = function (n, r) {
      return Math.floor(Math.random() * (r - n) + n);
    },
    t = function () {
      return "!@#$%¨&*()_+=`[{}]~^,<.>;:/?"[o(0, 28)];
    },
    a = document.querySelector(".senha-gerada"),
    i = document.querySelector(".qtd-caracteres"),
    c = document.querySelector(".chk-maiusculas"),
    s = document.querySelector(".chk-minusculas"),
    A = document.querySelector(".chk-numeros"),
    u = document.querySelector(".chk-simbolos");
  document.querySelector(".gerar-senha");
  var p = e(72),
    d = e.n(p),
    f = e(825),
    l = e.n(f),
    m = e(659),
    h = e.n(m),
    C = e(56),
    g = e.n(C),
    v = e(540),
    E = e.n(v),
    b = e(113),
    y = e.n(b),
    x = e(958),
    B = {};
  (B.styleTagTransform = y()),
    (B.setAttributes = g()),
    (B.insert = h().bind(null, "head")),
    (B.domAPI = l()),
    (B.insertStyleElement = E()),
    d()(x.A, B),
    x.A && x.A.locals && x.A.locals,
    addEventListener("click", function () {
      a.innerHTML =
        (function (n, r, e, a, i) {
          var c = [];
          n = Number(n);
          for (var s = 0; s < n; s++)
            r && c.push(String.fromCharCode(o(65, 91))),
              e && c.push(String.fromCharCode(o(97, 123))),
              a && c.push(String.fromCharCode(o(48, 58))),
              i && c.push(t());
          return c.join("").slice(0, n);
        })(i.value, c.checked, s.checked, A.checked, u.checked) ||
        "Nada selecionado.";
    });
})();
//# sourceMappingURL=bundle.js.map
