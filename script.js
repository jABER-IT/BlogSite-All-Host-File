const svgCopy = '<i class="CBox_icn"></i>'
const svgCheck = '<i class="CBox_icn copied"></i>'
const addCopyButtons = (clipboard) => {
    document.querySelectorAll("pre > code").forEach((codeBlock) => {
        // Create button DOM element
        const button = document.createElement("button");
        button.className = "C_box_main";
        button.type = "button";
        button.innerHTML = svgCopy;
        button.addEventListener("click", () => {
            clipboard.writeText(codeBlock.innerText).then(() => {
                button.classList.add("copied");
                document.getElementById("LefttNotif").innerHTML = "<span>Copied to Clipboard!</span>";
                setTimeout(() => {
                    button.classList.remove("copied")
                }, 3e3);
                console.log('Text Copy');
            }, (error) => (button.innerHTML = "Error"));
        });
        // Attach button to DOM (.highlight > button > pre > code)
        const pre = codeBlock.parentNode;
        pre.parentNode.insertBefore(button, pre);
    });
};

if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js";
    script.integrity = "sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=";
    script.crossOrigin = "anonymous";
    script.onload = () => addCopyButtons(clipboard);
    document.body.appendChild(script);
}



(function() {
    var pre = document.getElementsByTagName('pre'),
        pl = pre.length;
    for (var i = 0; i < pl; i++) {
        pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
        var num = pre[i].innerHTML.split(/\n/).length;
        for (var j = 0; j < num; j++) {
            var line_num = pre[i].getElementsByTagName('span')[0];
            line_num.innerHTML += '<span>' + (j + 1) + '</span>';
        }
    }
})();


<script>
Offline.options = {checks: {xhr: {url: '#APP_IMAGES#check-internet-connection-javascript.gif'}}};
</script>

/*  
Internet Check JS Code Stert 
<script src="https://cdnjs.cloudflare.com/ajax/libs/offline-js/0.7.19/offline.min.js"></script>
*/

	(function() {
    var a, b, c, d, e, f, g;
    d = function(a, b) {
        var c, d, e;
        d = [];
        for (c in b.prototype) try {
            e = b.prototype[c], null == a[c] && "function" != typeof e ? d.push(a[c] = e) : d.push(void 0)
        } catch (f) {
            f
        }
        return d
    }, a = {}, a.options = window.Offline ? window.Offline.options || {} : {}, c = {
        checks: {
            xhr: {
                url: function() {
                    return "/favicon.ico?_=" + (new Date).getTime()
                },
                timeout: 5e3,
                type: "HEAD"
            },
            image: {
                url: function() {
                    return "/favicon.ico?_=" + (new Date).getTime()
                }
            },
            active: "xhr"
        },
        checkOnLoad: !1,
        interceptRequests: !0,
        reconnect: !0,
        deDupBody: !1
    }, e = function(a, b) {
        var c, d, e, f, g, h;
        for (c = a, h = b.split("."), d = e = 0, f = h.length; e < f && (g = h[d], "object" == typeof(c = c[g])); d = ++e);
        return d === h.length - 1 ? c : void 0
    }, a.getOption = function(b) {
        var d, f;
        return f = null != (d = e(a.options, b)) ? d : e(c, b), "function" == typeof f ? f() : f
    }, "function" == typeof window.addEventListener && window.addEventListener("online", function() {
        return setTimeout(a.confirmUp, 100)
    }, !1), "function" == typeof window.addEventListener && window.addEventListener("offline", function() {
        return a.confirmDown()
    }, !1), a.state = "up", a.markUp = function() {
        if (a.trigger("confirmed-up"), "up" !== a.state) return a.state = "up", a.trigger("up")
    }, a.markDown = function() {
        if (a.trigger("confirmed-down"), "down" !== a.state) return a.state = "down", a.trigger("down")
    }, f = {}, a.on = function(b, c, d) {
        var e, g, h, i, j;
        if (g = b.split(" "), g.length > 1) {
            for (j = [], h = 0, i = g.length; h < i; h++) e = g[h], j.push(a.on(e, c, d));
            return j
        }
        return null == f[b] && (f[b] = []), f[b].push([d, c])
    }, a.off = function(a, b) {
        var c, d, e, g;
        if (null != f[a]) {
            if (b) {
                for (d = 0, g = []; d < f[a].length;) e = f[a][d], e[0], c = e[1], c === b ? g.push(f[a].splice(d, 1)) : g.push(d++);
                return g
            }
            return f[a] = []
        }
    }, a.trigger = function(a) {
        var b, c, d, e, g, h, i;
        if (null != f[a]) {
            for (g = f[a].slice(0), i = [], d = 0, e = g.length; d < e; d++) h = g[d], b = h[0], c = h[1], i.push(c.call(b));
            return i
        }
    }, b = function(a, b, c) {
        var d, e, f, g, h;
        return h = function() {
            return a.status && a.status < 12e3 ? b() : c()
        }, null === a.onprogress ? (d = a.onerror, a.onerror = function() {
            return c(), "function" == typeof d ? d.apply(null, arguments) : void 0
        }, g = a.ontimeout, a.ontimeout = function() {
            return c(), "function" == typeof g ? g.apply(null, arguments) : void 0
        }, e = a.onload, a.onload = function() {
            return h(), "function" == typeof e ? e.apply(null, arguments) : void 0
        }) : (f = a.onreadystatechange, a.onreadystatechange = function() {
            return 4 === a.readyState ? h() : 0 === a.readyState && c(), "function" == typeof f ? f.apply(null, arguments) : void 0
        })
    }, a.checks = {}, a.checks.xhr = function() {
        var c;
        c = new XMLHttpRequest, c.offline = !1, c.open(a.getOption("checks.xhr.type"), a.getOption("checks.xhr.url"), !0), null != c.timeout && (c.timeout = a.getOption("checks.xhr.timeout")), b(c, a.markUp, a.markDown);
        try {
            c.send()
        } catch (d) {
            d,
            a.markDown()
        }
        return c
    }, a.checks.image = function() {
        var b;
        b = document.createElement("img"), b.onerror = a.markDown, b.onload = a.markUp, b.src = a.getOption("checks.image.url")
    }, a.checks.down = a.markDown, a.checks.up = a.markUp, a.check = function() {
        return a.trigger("checking"), a.checks[a.getOption("checks.active")]()
    }, a.confirmUp = a.confirmDown = a.check, a.onXHR = function(a) {
        var b, c, e;
        if (e = function(b, c) {
                var d;
                return d = b.open, b.open = function(e, f, g, h, i) {
                    return a({
                        type: e,
                        url: f,
                        async: g,
                        flags: c,
                        user: h,
                        password: i,
                        xhr: b
                    }), d.apply(b, arguments)
                }
            }, c = window.XMLHttpRequest, window.XMLHttpRequest = function(a) {
                var b, d, f;
                return f = new c(a), e(f, a), d = f.setRequestHeader, f.headers = {}, f.setRequestHeader = function(a, b) {
                    return f.headers[a] = b, d.call(f, a, b)
                }, b = f.overrideMimeType, f.overrideMimeType = function(a) {
                    return f.mimeType = a, b.call(f, a)
                }, f
            }, d(window.XMLHttpRequest, c), null != window.XDomainRequest) return b = window.XDomainRequest, window.XDomainRequest = function() {
            var a;
            return a = new b, e(a), a
        }, d(window.XDomainRequest, b)
    }, g = function() {
        if (a.getOption("interceptRequests") && a.onXHR(function(c) {
                var d;
                if (d = c.xhr, !1 !== d.offline) return b(d, a.markUp, a.confirmDown)
            }), a.getOption("checkOnLoad")) return a.check()
    }, setTimeout(g, 0), window.Offline = a
}).call(this),
    function() {
        var a, b, c, d, e, f, g, h, i;
        if (!window.Offline) throw new Error("Offline Reconnect brought in without offline.js");
        d = Offline.reconnect = {}, f = null, e = function() {
            var a;
            return null != d.state && "inactive" !== d.state && Offline.trigger("reconnect:stopped"), d.state = "inactive", d.remaining = d.delay = null != (a = Offline.getOption("reconnect.initialDelay")) ? a : 3
        }, b = function() {
            var a, b;
            return a = null != (b = Offline.getOption("reconnect.delay")) ? b : Math.min(Math.ceil(1.5 * d.delay), 3600), d.remaining = d.delay = a
        }, g = function() {
            if ("connecting" !== d.state) return d.remaining -= 1, Offline.trigger("reconnect:tick"), 0 === d.remaining ? h() : void 0
        }, h = function() {
            if ("waiting" === d.state) return Offline.trigger("reconnect:connecting"), d.state = "connecting", Offline.check()
        }, a = function() {
            if (Offline.getOption("reconnect")) return e(), d.state = "waiting", Offline.trigger("reconnect:started"), f = setInterval(g, 1e3)
        }, i = function() {
            return null != f && clearInterval(f), e()
        }, c = function() {
            if (Offline.getOption("reconnect")) return "connecting" === d.state ? (Offline.trigger("reconnect:failure"), d.state = "waiting", b()) : void 0
        }, d.tryNow = h, e(), Offline.on("down", a), Offline.on("confirmed-down", c), Offline.on("up", i)
    }.call(this),
    function() {
        var a, b, c, d, e, f;
        if (!window.Offline) throw new Error("Requests module brought in without offline.js");
        c = [], f = !1, d = function(a) {
            if (!1 !== Offline.getOption("requests")) return Offline.trigger("requests:capture"), "down" !== Offline.state && (f = !0), c.push(a)
        }, e = function(a) {
            var b, c, d, e, f, g, h, i, j;
            if (j = a.xhr, g = a.url, f = a.type, h = a.user, d = a.password, b = a.body, !1 !== Offline.getOption("requests")) {
                j.abort(), j.open(f, g, !0, h, d), e = j.headers;
                for (c in e) i = e[c], j.setRequestHeader(c, i);
                return j.mimeType && j.overrideMimeType(j.mimeType), j.send(b)
            }
        }, a = function() {
            return c = []
        }, b = function() {
            var b, d, f, g, h, i, j;
            if (!1 !== Offline.getOption("requests")) {
                for (Offline.trigger("requests:flush"), i = {}, d = 0, g = c.length; d < g; d++) h = c[d], j = h.url.replace(/(\?|&)_=[0-9]+/, function(a, b) {
                    return "?" === b ? b : ""
                }), Offline.getOption("deDupBody") ? (b = h.body, b = "[object Object]" === b.toString() ? JSON.stringify(b) : b.toString(), i[h.type.toUpperCase() + " - " + j + " - " + b] = h) : i[h.type.toUpperCase() + " - " + j] = h;
                for (f in i) h = i[f], e(h);
                return a()
            }
        }, setTimeout(function() {
            if (!1 !== Offline.getOption("requests")) return Offline.on("confirmed-up", function() {
                if (f) return f = !1, a()
            }), Offline.on("up", b), Offline.on("down", function() {
                return f = !1
            }), Offline.onXHR(function(a) {
                var b, c, e, f, g;
                if (g = a.xhr, e = a.async, !1 !== g.offline && (f = function() {
                        return d(a)
                    }, c = g.send, g.send = function(b) {
                        return a.body = b, c.apply(g, arguments)
                    }, e)) return null === g.onprogress ? (g.addEventListener("error", f, !1), g.addEventListener("timeout", f, !1)) : (b = g.onreadystatechange, g.onreadystatechange = function() {
                    return 0 === g.readyState ? f() : 4 === g.readyState && (0 === g.status || g.status >= 12e3) && f(), "function" == typeof b ? b.apply(null, arguments) : void 0
                })
            }), Offline.requests = {
                flush: b,
                clear: a
            }
        }, 0)
    }.call(this),
    function() {
        var a, b, c, d, e, f;
        if (!Offline) throw new Error("Offline simulate brought in without offline.js");
        for (d = ["up", "down"], b = 0, c = d.length; b < c; b++) {
            f = d[b];
            try {
                e = document.querySelector("script[data-simulate='" + f + "']") || ("undefined" != typeof localStorage && null !== localStorage ? localStorage.OFFLINE_SIMULATE : void 0) === f
            } catch (g) {
                g,
                e = !1
            }
        }
        e && (null == Offline.options && (Offline.options = {}), null == (a = Offline.options).checks && (a.checks = {}), Offline.options.checks.active = f)
    }.call(this),
    function() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m;
        if (!window.Offline) throw new Error("Offline UI brought in without offline.js");
        b = '<div class="offline-ui"><div class="offline-ui-content"></div></div>', a = '<a href class="offline-ui-retry"></a>', f = function(a) {
            var b;
            return b = document.createElement("div"), b.innerHTML = a, b.children[0]
        }, g = e = null, d = function(a) {
            return k(a), g.className += " " + a
        }, k = function(a) {
            return g.className = g.className.replace(new RegExp("(^| )" + a.split(" ").join("|") + "( |$)", "gi"), " ")
        }, i = {}, h = function(a, b) {
            return d(a), null != i[a] && clearTimeout(i[a]), i[a] = setTimeout(function() {
                return k(a), delete i[a]
            }, 1e3 * b)
        }, m = function(a) {
            var b, c, d, e;
            d = {
                day: 86400,
                hour: 3600,
                minute: 60,
                second: 1
            };
            for (c in d)
                if (b = d[c], a >= b) return e = Math.floor(a / b), [e, c];
            return ["now", ""]
        }, l = function() {
            var c, h;
            return g = f(b), document.body.appendChild(g), null != Offline.reconnect && Offline.getOption("reconnect") && (g.appendChild(f(a)), c = g.querySelector(".offline-ui-retry"), h = function(a) {
                return a.preventDefault(), Offline.reconnect.tryNow()
            }, null != c.addEventListener ? c.addEventListener("click", h, !1) : c.attachEvent("click", h)), d("offline-ui-" + Offline.state), e = g.querySelector(".offline-ui-content")
        }, j = function() {
            return l(), Offline.on("up", function() {
                return k("offline-ui-down"), d("offline-ui-up"), h("offline-ui-up-2s", 2), h("offline-ui-up-5s", 5)
            }), Offline.on("down", function() {
                return k("offline-ui-up"), d("offline-ui-down"), h("offline-ui-down-2s", 2), h("offline-ui-down-5s", 5)
            }), Offline.on("reconnect:connecting", function() {
                return d("offline-ui-connecting"), k("offline-ui-waiting")
            }), Offline.on("reconnect:tick", function() {
                var a, b, c;
                return d("offline-ui-waiting"), k("offline-ui-connecting"), a = m(Offline.reconnect.remaining), b = a[0], c = a[1], e.setAttribute("data-retry-in-value", b), e.setAttribute("data-retry-in-unit", c)
            }), Offline.on("reconnect:stopped", function() {
                return k("offline-ui-connecting offline-ui-waiting"), e.setAttribute("data-retry-in-value", null), e.setAttribute("data-retry-in-unit", null)
            }), Offline.on("reconnect:failure", function() {
                return h("offline-ui-reconnect-failed-2s", 2), h("offline-ui-reconnect-failed-5s", 5)
            }), Offline.on("reconnect:success", function() {
                return h("offline-ui-reconnect-succeeded-2s", 2), h("offline-ui-reconnect-succeeded-5s", 5)
            })
        }, "complete" === document.readyState ? j() : null != document.addEventListener ? document.addEventListener("DOMContentLoaded", j, !1) : (c = document.onreadystatechange, document.onreadystatechange = function() {
            return "complete" === document.readyState && j(), "function" == typeof c ? c.apply(null, arguments) : void 0
        })
    }.call(this);

/*  Internet Check JS Code End  */
/*
function disableselect(e) {
	return false
}
function reEnable() {
	return true
}
//if IE4+  
document.onselectstart = new Function("return false")
document.oncontextmenu = new Function("return false")
//if NS6  
if (window.sidebar) {
	document.onmousedown = disableselect
	document.onclick = reEnable
}
*/
