function KT(t, e) {
    for (var n = 0; n < e.length; n++) {
        const s = e[n];
        if (typeof s != "string" && !Array.isArray(s)) {
            for (const o in s)
                if (o !== "default" && !(o in t)) {
                    const l = Object.getOwnPropertyDescriptor(s, o);
                    l && Object.defineProperty(t, o, l.get ? l : {
                        enumerable: !0,
                        get: () => s[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        s(o);
    new MutationObserver(o => {
        for (const l of o)
            if (l.type === "childList")
                for (const u of l.addedNodes)
                    u.tagName === "LINK" && u.rel === "modulepreload" && s(u)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const l = {};
        return o.integrity && (l.integrity = o.integrity),
        o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? l.credentials = "include" : o.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function s(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const l = n(o);
        fetch(o.href, l)
    }
}
)();
var Pl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function q0(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var qd = {
    exports: {}
}
  , bo = {}
  , Qd = {
    exports: {}
}
  , Be = {};
var sy;
function ZT() {
    if (sy)
        return Be;
    sy = 1;
    var t = Symbol.for("react.element")
      , e = Symbol.for("react.portal")
      , n = Symbol.for("react.fragment")
      , s = Symbol.for("react.strict_mode")
      , o = Symbol.for("react.profiler")
      , l = Symbol.for("react.provider")
      , u = Symbol.for("react.context")
      , d = Symbol.for("react.forward_ref")
      , f = Symbol.for("react.suspense")
      , h = Symbol.for("react.memo")
      , m = Symbol.for("react.lazy")
      , y = Symbol.iterator;
    function v(D) {
        return D === null || typeof D != "object" ? null : (D = y && D[y] || D["@@iterator"],
        typeof D == "function" ? D : null)
    }
    var w = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , b = Object.assign
      , S = {};
    function T(D, Z, be) {
        this.props = D,
        this.context = Z,
        this.refs = S,
        this.updater = be || w
    }
    T.prototype.isReactComponent = {},
    T.prototype.setState = function(D, Z) {
        if (typeof D != "object" && typeof D != "function" && D != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, D, Z, "setState")
    }
    ,
    T.prototype.forceUpdate = function(D) {
        this.updater.enqueueForceUpdate(this, D, "forceUpdate")
    }
    ;
    function _() {}
    _.prototype = T.prototype;
    function P(D, Z, be) {
        this.props = D,
        this.context = Z,
        this.refs = S,
        this.updater = be || w
    }
    var A = P.prototype = new _;
    A.constructor = P,
    b(A, T.prototype),
    A.isPureReactComponent = !0;
    var I = Array.isArray
      , L = Object.prototype.hasOwnProperty
      , B = {
        current: null
    }
      , F = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function W(D, Z, be) {
        var Ce, Ie = {}, Le = null, Ne = null;
        if (Z != null)
            for (Ce in Z.ref !== void 0 && (Ne = Z.ref),
            Z.key !== void 0 && (Le = "" + Z.key),
            Z)
                L.call(Z, Ce) && !F.hasOwnProperty(Ce) && (Ie[Ce] = Z[Ce]);
        var Te = arguments.length - 2;
        if (Te === 1)
            Ie.children = be;
        else if (1 < Te) {
            for (var Oe = Array(Te), Ze = 0; Ze < Te; Ze++)
                Oe[Ze] = arguments[Ze + 2];
            Ie.children = Oe
        }
        if (D && D.defaultProps)
            for (Ce in Te = D.defaultProps,
            Te)
                Ie[Ce] === void 0 && (Ie[Ce] = Te[Ce]);
        return {
            $$typeof: t,
            type: D,
            key: Le,
            ref: Ne,
            props: Ie,
            _owner: B.current
        }
    }
    function X(D, Z) {
        return {
            $$typeof: t,
            type: D.type,
            key: Z,
            ref: D.ref,
            props: D.props,
            _owner: D._owner
        }
    }
    function G(D) {
        return typeof D == "object" && D !== null && D.$$typeof === t
    }
    function Q(D) {
        var Z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + D.replace(/[=:]/g, function(be) {
            return Z[be]
        })
    }
    var O = /\/+/g;
    function q(D, Z) {
        return typeof D == "object" && D !== null && D.key != null ? Q("" + D.key) : Z.toString(36)
    }
    function V(D, Z, be, Ce, Ie) {
        var Le = typeof D;
        (Le === "undefined" || Le === "boolean") && (D = null);
        var Ne = !1;
        if (D === null)
            Ne = !0;
        else
            switch (Le) {
            case "string":
            case "number":
                Ne = !0;
                break;
            case "object":
                switch (D.$$typeof) {
                case t:
                case e:
                    Ne = !0
                }
            }
        if (Ne)
            return Ne = D,
            Ie = Ie(Ne),
            D = Ce === "" ? "." + q(Ne, 0) : Ce,
            I(Ie) ? (be = "",
            D != null && (be = D.replace(O, "$&/") + "/"),
            V(Ie, Z, be, "", function(Ze) {
                return Ze
            })) : Ie != null && (G(Ie) && (Ie = X(Ie, be + (!Ie.key || Ne && Ne.key === Ie.key ? "" : ("" + Ie.key).replace(O, "$&/") + "/") + D)),
            Z.push(Ie)),
            1;
        if (Ne = 0,
        Ce = Ce === "" ? "." : Ce + ":",
        I(D))
            for (var Te = 0; Te < D.length; Te++) {
                Le = D[Te];
                var Oe = Ce + q(Le, Te);
                Ne += V(Le, Z, be, Oe, Ie)
            }
        else if (Oe = v(D),
        typeof Oe == "function")
            for (D = Oe.call(D),
            Te = 0; !(Le = D.next()).done; )
                Le = Le.value,
                Oe = Ce + q(Le, Te++),
                Ne += V(Le, Z, be, Oe, Ie);
        else if (Le === "object")
            throw Z = String(D),
            Error("Objects are not valid as a React child (found: " + (Z === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : Z) + "). If you meant to render a collection of children, use an array instead.");
        return Ne
    }
    function me(D, Z, be) {
        if (D == null)
            return D;
        var Ce = []
          , Ie = 0;
        return V(D, Ce, "", "", function(Le) {
            return Z.call(be, Le, Ie++)
        }),
        Ce
    }
    function ce(D) {
        if (D._status === -1) {
            var Z = D._result;
            Z = Z(),
            Z.then(function(be) {
                (D._status === 0 || D._status === -1) && (D._status = 1,
                D._result = be)
            }, function(be) {
                (D._status === 0 || D._status === -1) && (D._status = 2,
                D._result = be)
            }),
            D._status === -1 && (D._status = 0,
            D._result = Z)
        }
        if (D._status === 1)
            return D._result.default;
        throw D._result
    }
    var se = {
        current: null
    }
      , H = {
        transition: null
    }
      , ie = {
        ReactCurrentDispatcher: se,
        ReactCurrentBatchConfig: H,
        ReactCurrentOwner: B
    };
    function ne() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Be.Children = {
        map: me,
        forEach: function(D, Z, be) {
            me(D, function() {
                Z.apply(this, arguments)
            }, be)
        },
        count: function(D) {
            var Z = 0;
            return me(D, function() {
                Z++
            }),
            Z
        },
        toArray: function(D) {
            return me(D, function(Z) {
                return Z
            }) || []
        },
        only: function(D) {
            if (!G(D))
                throw Error("React.Children.only expected to receive a single React element child.");
            return D
        }
    },
    Be.Component = T,
    Be.Fragment = n,
    Be.Profiler = o,
    Be.PureComponent = P,
    Be.StrictMode = s,
    Be.Suspense = f,
    Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ie,
    Be.act = ne,
    Be.cloneElement = function(D, Z, be) {
        if (D == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
        var Ce = b({}, D.props)
          , Ie = D.key
          , Le = D.ref
          , Ne = D._owner;
        if (Z != null) {
            if (Z.ref !== void 0 && (Le = Z.ref,
            Ne = B.current),
            Z.key !== void 0 && (Ie = "" + Z.key),
            D.type && D.type.defaultProps)
                var Te = D.type.defaultProps;
            for (Oe in Z)
                L.call(Z, Oe) && !F.hasOwnProperty(Oe) && (Ce[Oe] = Z[Oe] === void 0 && Te !== void 0 ? Te[Oe] : Z[Oe])
        }
        var Oe = arguments.length - 2;
        if (Oe === 1)
            Ce.children = be;
        else if (1 < Oe) {
            Te = Array(Oe);
            for (var Ze = 0; Ze < Oe; Ze++)
                Te[Ze] = arguments[Ze + 2];
            Ce.children = Te
        }
        return {
            $$typeof: t,
            type: D.type,
            key: Ie,
            ref: Le,
            props: Ce,
            _owner: Ne
        }
    }
    ,
    Be.createContext = function(D) {
        return D = {
            $$typeof: u,
            _currentValue: D,
            _currentValue2: D,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        D.Provider = {
            $$typeof: l,
            _context: D
        },
        D.Consumer = D
    }
    ,
    Be.createElement = W,
    Be.createFactory = function(D) {
        var Z = W.bind(null, D);
        return Z.type = D,
        Z
    }
    ,
    Be.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Be.forwardRef = function(D) {
        return {
            $$typeof: d,
            render: D
        }
    }
    ,
    Be.isValidElement = G,
    Be.lazy = function(D) {
        return {
            $$typeof: m,
            _payload: {
                _status: -1,
                _result: D
            },
            _init: ce
        }
    }
    ,
    Be.memo = function(D, Z) {
        return {
            $$typeof: h,
            type: D,
            compare: Z === void 0 ? null : Z
        }
    }
    ,
    Be.startTransition = function(D) {
        var Z = H.transition;
        H.transition = {};
        try {
            D()
        } finally {
            H.transition = Z
        }
    }
    ,
    Be.unstable_act = ne,
    Be.useCallback = function(D, Z) {
        return se.current.useCallback(D, Z)
    }
    ,
    Be.useContext = function(D) {
        return se.current.useContext(D)
    }
    ,
    Be.useDebugValue = function() {}
    ,
    Be.useDeferredValue = function(D) {
        return se.current.useDeferredValue(D)
    }
    ,
    Be.useEffect = function(D, Z) {
        return se.current.useEffect(D, Z)
    }
    ,
    Be.useId = function() {
        return se.current.useId()
    }
    ,
    Be.useImperativeHandle = function(D, Z, be) {
        return se.current.useImperativeHandle(D, Z, be)
    }
    ,
    Be.useInsertionEffect = function(D, Z) {
        return se.current.useInsertionEffect(D, Z)
    }
    ,
    Be.useLayoutEffect = function(D, Z) {
        return se.current.useLayoutEffect(D, Z)
    }
    ,
    Be.useMemo = function(D, Z) {
        return se.current.useMemo(D, Z)
    }
    ,
    Be.useReducer = function(D, Z, be) {
        return se.current.useReducer(D, Z, be)
    }
    ,
    Be.useRef = function(D) {
        return se.current.useRef(D)
    }
    ,
    Be.useState = function(D) {
        return se.current.useState(D)
    }
    ,
    Be.useSyncExternalStore = function(D, Z, be) {
        return se.current.useSyncExternalStore(D, Z, be)
    }
    ,
    Be.useTransition = function() {
        return se.current.useTransition()
    }
    ,
    Be.version = "18.3.1",
    Be
}
var oy;
function nr() {
    return oy || (oy = 1,
    Qd.exports = ZT()),
    Qd.exports
}
var ay;
function GT() {
    if (ay)
        return bo;
    ay = 1;
    var t = nr()
      , e = Symbol.for("react.element")
      , n = Symbol.for("react.fragment")
      , s = Object.prototype.hasOwnProperty
      , o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , l = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function u(d, f, h) {
        var m, y = {}, v = null, w = null;
        h !== void 0 && (v = "" + h),
        f.key !== void 0 && (v = "" + f.key),
        f.ref !== void 0 && (w = f.ref);
        for (m in f)
            s.call(f, m) && !l.hasOwnProperty(m) && (y[m] = f[m]);
        if (d && d.defaultProps)
            for (m in f = d.defaultProps,
            f)
                y[m] === void 0 && (y[m] = f[m]);
        return {
            $$typeof: e,
            type: d,
            key: v,
            ref: w,
            props: y,
            _owner: o.current
        }
    }
    return bo.Fragment = n,
    bo.jsx = u,
    bo.jsxs = u,
    bo
}
var ly;
function XT() {
    return ly || (ly = 1,
    qd.exports = GT()),
    qd.exports
}
var E = XT()
  , Cl = {}
  , Kd = {
    exports: {}
}
  , nn = {}
  , Zd = {
    exports: {}
}
  , Gd = {};
var uy;
function YT() {
    return uy || (uy = 1,
    (function(t) {
        function e(H, ie) {
            var ne = H.length;
            H.push(ie);
            e: for (; 0 < ne; ) {
                var D = ne - 1 >>> 1
                  , Z = H[D];
                if (0 < o(Z, ie))
                    H[D] = ie,
                    H[ne] = Z,
                    ne = D;
                else
                    break e
            }
        }
        function n(H) {
            return H.length === 0 ? null : H[0]
        }
        function s(H) {
            if (H.length === 0)
                return null;
            var ie = H[0]
              , ne = H.pop();
            if (ne !== ie) {
                H[0] = ne;
                e: for (var D = 0, Z = H.length, be = Z >>> 1; D < be; ) {
                    var Ce = 2 * (D + 1) - 1
                      , Ie = H[Ce]
                      , Le = Ce + 1
                      , Ne = H[Le];
                    if (0 > o(Ie, ne))
                        Le < Z && 0 > o(Ne, Ie) ? (H[D] = Ne,
                        H[Le] = ne,
                        D = Le) : (H[D] = Ie,
                        H[Ce] = ne,
                        D = Ce);
                    else if (Le < Z && 0 > o(Ne, ne))
                        H[D] = Ne,
                        H[Le] = ne,
                        D = Le;
                    else
                        break e
                }
            }
            return ie
        }
        function o(H, ie) {
            var ne = H.sortIndex - ie.sortIndex;
            return ne !== 0 ? ne : H.id - ie.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var l = performance;
            t.unstable_now = function() {
                return l.now()
            }
        } else {
            var u = Date
              , d = u.now();
            t.unstable_now = function() {
                return u.now() - d
            }
        }
        var f = []
          , h = []
          , m = 1
          , y = null
          , v = 3
          , w = !1
          , b = !1
          , S = !1
          , T = typeof setTimeout == "function" ? setTimeout : null
          , _ = typeof clearTimeout == "function" ? clearTimeout : null
          , P = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function A(H) {
            for (var ie = n(h); ie !== null; ) {
                if (ie.callback === null)
                    s(h);
                else if (ie.startTime <= H)
                    s(h),
                    ie.sortIndex = ie.expirationTime,
                    e(f, ie);
                else
                    break;
                ie = n(h)
            }
        }
        function I(H) {
            if (S = !1,
            A(H),
            !b)
                if (n(f) !== null)
                    b = !0,
                    ce(L);
                else {
                    var ie = n(h);
                    ie !== null && se(I, ie.startTime - H)
                }
        }
        function L(H, ie) {
            b = !1,
            S && (S = !1,
            _(W),
            W = -1),
            w = !0;
            var ne = v;
            try {
                for (A(ie),
                y = n(f); y !== null && (!(y.expirationTime > ie) || H && !Q()); ) {
                    var D = y.callback;
                    if (typeof D == "function") {
                        y.callback = null,
                        v = y.priorityLevel;
                        var Z = D(y.expirationTime <= ie);
                        ie = t.unstable_now(),
                        typeof Z == "function" ? y.callback = Z : y === n(f) && s(f),
                        A(ie)
                    } else
                        s(f);
                    y = n(f)
                }
                if (y !== null)
                    var be = !0;
                else {
                    var Ce = n(h);
                    Ce !== null && se(I, Ce.startTime - ie),
                    be = !1
                }
                return be
            } finally {
                y = null,
                v = ne,
                w = !1
            }
        }
        var B = !1
          , F = null
          , W = -1
          , X = 5
          , G = -1;
        function Q() {
            return !(t.unstable_now() - G < X)
        }
        function O() {
            if (F !== null) {
                var H = t.unstable_now();
                G = H;
                var ie = !0;
                try {
                    ie = F(!0, H)
                } finally {
                    ie ? q() : (B = !1,
                    F = null)
                }
            } else
                B = !1
        }
        var q;
        if (typeof P == "function")
            q = function() {
                P(O)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var V = new MessageChannel
              , me = V.port2;
            V.port1.onmessage = O,
            q = function() {
                me.postMessage(null)
            }
        } else
            q = function() {
                T(O, 0)
            }
            ;
        function ce(H) {
            F = H,
            B || (B = !0,
            q())
        }
        function se(H, ie) {
            W = T(function() {
                H(t.unstable_now())
            }, ie)
        }
        t.unstable_IdlePriority = 5,
        t.unstable_ImmediatePriority = 1,
        t.unstable_LowPriority = 4,
        t.unstable_NormalPriority = 3,
        t.unstable_Profiling = null,
        t.unstable_UserBlockingPriority = 2,
        t.unstable_cancelCallback = function(H) {
            H.callback = null
        }
        ,
        t.unstable_continueExecution = function() {
            b || w || (b = !0,
            ce(L))
        }
        ,
        t.unstable_forceFrameRate = function(H) {
            0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < H ? Math.floor(1e3 / H) : 5
        }
        ,
        t.unstable_getCurrentPriorityLevel = function() {
            return v
        }
        ,
        t.unstable_getFirstCallbackNode = function() {
            return n(f)
        }
        ,
        t.unstable_next = function(H) {
            switch (v) {
            case 1:
            case 2:
            case 3:
                var ie = 3;
                break;
            default:
                ie = v
            }
            var ne = v;
            v = ie;
            try {
                return H()
            } finally {
                v = ne
            }
        }
        ,
        t.unstable_pauseExecution = function() {}
        ,
        t.unstable_requestPaint = function() {}
        ,
        t.unstable_runWithPriority = function(H, ie) {
            switch (H) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                H = 3
            }
            var ne = v;
            v = H;
            try {
                return ie()
            } finally {
                v = ne
            }
        }
        ,
        t.unstable_scheduleCallback = function(H, ie, ne) {
            var D = t.unstable_now();
            switch (typeof ne == "object" && ne !== null ? (ne = ne.delay,
            ne = typeof ne == "number" && 0 < ne ? D + ne : D) : ne = D,
            H) {
            case 1:
                var Z = -1;
                break;
            case 2:
                Z = 250;
                break;
            case 5:
                Z = 1073741823;
                break;
            case 4:
                Z = 1e4;
                break;
            default:
                Z = 5e3
            }
            return Z = ne + Z,
            H = {
                id: m++,
                callback: ie,
                priorityLevel: H,
                startTime: ne,
                expirationTime: Z,
                sortIndex: -1
            },
            ne > D ? (H.sortIndex = ne,
            e(h, H),
            n(f) === null && H === n(h) && (S ? (_(W),
            W = -1) : S = !0,
            se(I, ne - D))) : (H.sortIndex = Z,
            e(f, H),
            b || w || (b = !0,
            ce(L))),
            H
        }
        ,
        t.unstable_shouldYield = Q,
        t.unstable_wrapCallback = function(H) {
            var ie = v;
            return function() {
                var ne = v;
                v = ie;
                try {
                    return H.apply(this, arguments)
                } finally {
                    v = ne
                }
            }
        }
    }
    )(Gd)),
    Gd
}
var cy;
function JT() {
    return cy || (cy = 1,
    Zd.exports = YT()),
    Zd.exports
}
var dy;
function e_() {
    if (dy)
        return nn;
    dy = 1;
    var t = nr()
      , e = JT();
    function n(r) {
        for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, a = 1; a < arguments.length; a++)
            i += "&args[]=" + encodeURIComponent(arguments[a]);
        return "Minified React error #" + r + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var s = new Set
      , o = {};
    function l(r, i) {
        u(r, i),
        u(r + "Capture", i)
    }
    function u(r, i) {
        for (o[r] = i,
        r = 0; r < i.length; r++)
            s.add(i[r])
    }
    var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , f = Object.prototype.hasOwnProperty
      , h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , m = {}
      , y = {};
    function v(r) {
        return f.call(y, r) ? !0 : f.call(m, r) ? !1 : h.test(r) ? y[r] = !0 : (m[r] = !0,
        !1)
    }
    function w(r, i, a, c) {
        if (a !== null && a.type === 0)
            return !1;
        switch (typeof i) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return c ? !1 : a !== null ? !a.acceptsBooleans : (r = r.toLowerCase().slice(0, 5),
            r !== "data-" && r !== "aria-");
        default:
            return !1
        }
    }
    function b(r, i, a, c) {
        if (i === null || typeof i > "u" || w(r, i, a, c))
            return !0;
        if (c)
            return !1;
        if (a !== null)
            switch (a.type) {
            case 3:
                return !i;
            case 4:
                return i === !1;
            case 5:
                return isNaN(i);
            case 6:
                return isNaN(i) || 1 > i
            }
        return !1
    }
    function S(r, i, a, c, p, g, x) {
        this.acceptsBooleans = i === 2 || i === 3 || i === 4,
        this.attributeName = c,
        this.attributeNamespace = p,
        this.mustUseProperty = a,
        this.propertyName = r,
        this.type = i,
        this.sanitizeURL = g,
        this.removeEmptyString = x
    }
    var T = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r) {
        T[r] = new S(r,0,!1,r,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
        var i = r[0];
        T[i] = new S(i,1,!1,r[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
        T[r] = new S(r,2,!1,r.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
        T[r] = new S(r,2,!1,r,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r) {
        T[r] = new S(r,3,!1,r.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(r) {
        T[r] = new S(r,3,!0,r,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(r) {
        T[r] = new S(r,4,!1,r,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(r) {
        T[r] = new S(r,6,!1,r,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(r) {
        T[r] = new S(r,5,!1,r.toLowerCase(),null,!1,!1)
    });
    var _ = /[\-:]([a-z])/g;
    function P(r) {
        return r[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r) {
        var i = r.replace(_, P);
        T[i] = new S(i,1,!1,r,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r) {
        var i = r.replace(_, P);
        T[i] = new S(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(r) {
        var i = r.replace(_, P);
        T[i] = new S(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(r) {
        T[r] = new S(r,1,!1,r.toLowerCase(),null,!1,!1)
    }),
    T.xlinkHref = new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(r) {
        T[r] = new S(r,1,!1,r.toLowerCase(),null,!0,!0)
    });
    function A(r, i, a, c) {
        var p = T.hasOwnProperty(i) ? T[i] : null;
        (p !== null ? p.type !== 0 : c || !(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (b(i, a, p, c) && (a = null),
        c || p === null ? v(i) && (a === null ? r.removeAttribute(i) : r.setAttribute(i, "" + a)) : p.mustUseProperty ? r[p.propertyName] = a === null ? p.type === 3 ? !1 : "" : a : (i = p.attributeName,
        c = p.attributeNamespace,
        a === null ? r.removeAttribute(i) : (p = p.type,
        a = p === 3 || p === 4 && a === !0 ? "" : "" + a,
        c ? r.setAttributeNS(c, i, a) : r.setAttribute(i, a))))
    }
    var I = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , L = Symbol.for("react.element")
      , B = Symbol.for("react.portal")
      , F = Symbol.for("react.fragment")
      , W = Symbol.for("react.strict_mode")
      , X = Symbol.for("react.profiler")
      , G = Symbol.for("react.provider")
      , Q = Symbol.for("react.context")
      , O = Symbol.for("react.forward_ref")
      , q = Symbol.for("react.suspense")
      , V = Symbol.for("react.suspense_list")
      , me = Symbol.for("react.memo")
      , ce = Symbol.for("react.lazy")
      , se = Symbol.for("react.offscreen")
      , H = Symbol.iterator;
    function ie(r) {
        return r === null || typeof r != "object" ? null : (r = H && r[H] || r["@@iterator"],
        typeof r == "function" ? r : null)
    }
    var ne = Object.assign, D;
    function Z(r) {
        if (D === void 0)
            try {
                throw Error()
            } catch (a) {
                var i = a.stack.trim().match(/\n( *(at )?)/);
                D = i && i[1] || ""
            }
        return `
` + D + r
    }
    var be = !1;
    function Ce(r, i) {
        if (!r || be)
            return "";
        be = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (i)
                if (i = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(i.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(i, [])
                    } catch ($) {
                        var c = $
                    }
                    Reflect.construct(r, [], i)
                } else {
                    try {
                        i.call()
                    } catch ($) {
                        c = $
                    }
                    r.call(i.prototype)
                }
            else {
                try {
                    throw Error()
                } catch ($) {
                    c = $
                }
                r()
            }
        } catch ($) {
            if ($ && c && typeof $.stack == "string") {
                for (var p = $.stack.split(`
`), g = c.stack.split(`
`), x = p.length - 1, k = g.length - 1; 1 <= x && 0 <= k && p[x] !== g[k]; )
                    k--;
                for (; 1 <= x && 0 <= k; x--,
                k--)
                    if (p[x] !== g[k]) {
                        if (x !== 1 || k !== 1)
                            do
                                if (x--,
                                k--,
                                0 > k || p[x] !== g[k]) {
                                    var N = `
` + p[x].replace(" at new ", " at ");
                                    return r.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", r.displayName)),
                                    N
                                }
                            while (1 <= x && 0 <= k);
                        break
                    }
            }
        } finally {
            be = !1,
            Error.prepareStackTrace = a
        }
        return (r = r ? r.displayName || r.name : "") ? Z(r) : ""
    }
    function Ie(r) {
        switch (r.tag) {
        case 5:
            return Z(r.type);
        case 16:
            return Z("Lazy");
        case 13:
            return Z("Suspense");
        case 19:
            return Z("SuspenseList");
        case 0:
        case 2:
        case 15:
            return r = Ce(r.type, !1),
            r;
        case 11:
            return r = Ce(r.type.render, !1),
            r;
        case 1:
            return r = Ce(r.type, !0),
            r;
        default:
            return ""
        }
    }
    function Le(r) {
        if (r == null)
            return null;
        if (typeof r == "function")
            return r.displayName || r.name || null;
        if (typeof r == "string")
            return r;
        switch (r) {
        case F:
            return "Fragment";
        case B:
            return "Portal";
        case X:
            return "Profiler";
        case W:
            return "StrictMode";
        case q:
            return "Suspense";
        case V:
            return "SuspenseList"
        }
        if (typeof r == "object")
            switch (r.$$typeof) {
            case Q:
                return (r.displayName || "Context") + ".Consumer";
            case G:
                return (r._context.displayName || "Context") + ".Provider";
            case O:
                var i = r.render;
                return r = r.displayName,
                r || (r = i.displayName || i.name || "",
                r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"),
                r;
            case me:
                return i = r.displayName || null,
                i !== null ? i : Le(r.type) || "Memo";
            case ce:
                i = r._payload,
                r = r._init;
                try {
                    return Le(r(i))
                } catch {}
            }
        return null
    }
    function Ne(r) {
        var i = r.type;
        switch (r.tag) {
        case 24:
            return "Cache";
        case 9:
            return (i.displayName || "Context") + ".Consumer";
        case 10:
            return (i._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return r = i.render,
            r = r.displayName || r.name || "",
            i.displayName || (r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return i;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Le(i);
        case 8:
            return i === W ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof i == "function")
                return i.displayName || i.name || null;
            if (typeof i == "string")
                return i
        }
        return null
    }
    function Te(r) {
        switch (typeof r) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return r;
        case "object":
            return r;
        default:
            return ""
        }
    }
    function Oe(r) {
        var i = r.type;
        return (r = r.nodeName) && r.toLowerCase() === "input" && (i === "checkbox" || i === "radio")
    }
    function Ze(r) {
        var i = Oe(r) ? "checked" : "value"
          , a = Object.getOwnPropertyDescriptor(r.constructor.prototype, i)
          , c = "" + r[i];
        if (!r.hasOwnProperty(i) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var p = a.get
              , g = a.set;
            return Object.defineProperty(r, i, {
                configurable: !0,
                get: function() {
                    return p.call(this)
                },
                set: function(x) {
                    c = "" + x,
                    g.call(this, x)
                }
            }),
            Object.defineProperty(r, i, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return c
                },
                setValue: function(x) {
                    c = "" + x
                },
                stopTracking: function() {
                    r._valueTracker = null,
                    delete r[i]
                }
            }
        }
    }
    function It(r) {
        r._valueTracker || (r._valueTracker = Ze(r))
    }
    function ir(r) {
        if (!r)
            return !1;
        var i = r._valueTracker;
        if (!i)
            return !0;
        var a = i.getValue()
          , c = "";
        return r && (c = Oe(r) ? r.checked ? "true" : "false" : r.value),
        r = c,
        r !== a ? (i.setValue(r),
        !0) : !1
    }
    function Tn(r) {
        if (r = r || (typeof document < "u" ? document : void 0),
        typeof r > "u")
            return null;
        try {
            return r.activeElement || r.body
        } catch {
            return r.body
        }
    }
    function Di(r, i) {
        var a = i.checked;
        return ne({}, i, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: a ?? r._wrapperState.initialChecked
        })
    }
    function ga(r, i) {
        var a = i.defaultValue == null ? "" : i.defaultValue
          , c = i.checked != null ? i.checked : i.defaultChecked;
        a = Te(i.value != null ? i.value : a),
        r._wrapperState = {
            initialChecked: c,
            initialValue: a,
            controlled: i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null
        }
    }
    function Ls(r, i) {
        i = i.checked,
        i != null && A(r, "checked", i, !1)
    }
    function Mi(r, i) {
        Ls(r, i);
        var a = Te(i.value)
          , c = i.type;
        if (a != null)
            c === "number" ? (a === 0 && r.value === "" || r.value != a) && (r.value = "" + a) : r.value !== "" + a && (r.value = "" + a);
        else if (c === "submit" || c === "reset") {
            r.removeAttribute("value");
            return
        }
        i.hasOwnProperty("value") ? js(r, i.type, a) : i.hasOwnProperty("defaultValue") && js(r, i.type, Te(i.defaultValue)),
        i.checked == null && i.defaultChecked != null && (r.defaultChecked = !!i.defaultChecked)
    }
    function ya(r, i, a) {
        if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
            var c = i.type;
            if (!(c !== "submit" && c !== "reset" || i.value !== void 0 && i.value !== null))
                return;
            i = "" + r._wrapperState.initialValue,
            a || i === r.value || (r.value = i),
            r.defaultValue = i
        }
        a = r.name,
        a !== "" && (r.name = ""),
        r.defaultChecked = !!r._wrapperState.initialChecked,
        a !== "" && (r.name = a)
    }
    function js(r, i, a) {
        (i !== "number" || Tn(r.ownerDocument) !== r) && (a == null ? r.defaultValue = "" + r._wrapperState.initialValue : r.defaultValue !== "" + a && (r.defaultValue = "" + a))
    }
    var Ii = Array.isArray;
    function sr(r, i, a, c) {
        if (r = r.options,
        i) {
            i = {};
            for (var p = 0; p < a.length; p++)
                i["$" + a[p]] = !0;
            for (a = 0; a < r.length; a++)
                p = i.hasOwnProperty("$" + r[a].value),
                r[a].selected !== p && (r[a].selected = p),
                p && c && (r[a].defaultSelected = !0)
        } else {
            for (a = "" + Te(a),
            i = null,
            p = 0; p < r.length; p++) {
                if (r[p].value === a) {
                    r[p].selected = !0,
                    c && (r[p].defaultSelected = !0);
                    return
                }
                i !== null || r[p].disabled || (i = r[p])
            }
            i !== null && (i.selected = !0)
        }
    }
    function R(r, i) {
        if (i.dangerouslySetInnerHTML != null)
            throw Error(n(91));
        return ne({}, i, {
            value: void 0,
            defaultValue: void 0,
            children: "" + r._wrapperState.initialValue
        })
    }
    function U(r, i) {
        var a = i.value;
        if (a == null) {
            if (a = i.children,
            i = i.defaultValue,
            a != null) {
                if (i != null)
                    throw Error(n(92));
                if (Ii(a)) {
                    if (1 < a.length)
                        throw Error(n(93));
                    a = a[0]
                }
                i = a
            }
            i == null && (i = ""),
            a = i
        }
        r._wrapperState = {
            initialValue: Te(a)
        }
    }
    function K(r, i) {
        var a = Te(i.value)
          , c = Te(i.defaultValue);
        a != null && (a = "" + a,
        a !== r.value && (r.value = a),
        i.defaultValue == null && r.defaultValue !== a && (r.defaultValue = a)),
        c != null && (r.defaultValue = "" + c)
    }
    function fe(r) {
        var i = r.textContent;
        i === r._wrapperState.initialValue && i !== "" && i !== null && (r.value = i)
    }
    function le(r) {
        switch (r) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function oe(r, i) {
        return r == null || r === "http://www.w3.org/1999/xhtml" ? le(i) : r === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r
    }
    var ge, ze = (function(r) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(i, a, c, p) {
            MSApp.execUnsafeLocalFunction(function() {
                return r(i, a, c, p)
            })
        }
        : r
    }
    )(function(r, i) {
        if (r.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in r)
            r.innerHTML = i;
        else {
            for (ge = ge || document.createElement("div"),
            ge.innerHTML = "<svg>" + i.valueOf().toString() + "</svg>",
            i = ge.firstChild; r.firstChild; )
                r.removeChild(r.firstChild);
            for (; i.firstChild; )
                r.appendChild(i.firstChild)
        }
    });
    function Ge(r, i) {
        if (i) {
            var a = r.firstChild;
            if (a && a === r.lastChild && a.nodeType === 3) {
                a.nodeValue = i;
                return
            }
        }
        r.textContent = i
    }
    var ut = {
        animationIterationCount: !0,
        aspectRatio: !0,
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
        strokeWidth: !0
    }
      , sc = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ut).forEach(function(r) {
        sc.forEach(function(i) {
            i = i + r.charAt(0).toUpperCase() + r.substring(1),
            ut[i] = ut[r]
        })
    });
    function Li(r, i, a) {
        return i == null || typeof i == "boolean" || i === "" ? "" : a || typeof i != "number" || i === 0 || ut.hasOwnProperty(r) && ut[r] ? ("" + i).trim() : i + "px"
    }
    function ji(r, i) {
        r = r.style;
        for (var a in i)
            if (i.hasOwnProperty(a)) {
                var c = a.indexOf("--") === 0
                  , p = Li(a, i[a], c);
                a === "float" && (a = "cssFloat"),
                c ? r.setProperty(a, p) : r[a] = p
            }
    }
    var oc = ne({
        menuitem: !0
    }, {
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
        wbr: !0
    });
    function Vi(r, i) {
        if (i) {
            if (oc[r] && (i.children != null || i.dangerouslySetInnerHTML != null))
                throw Error(n(137, r));
            if (i.dangerouslySetInnerHTML != null) {
                if (i.children != null)
                    throw Error(n(60));
                if (typeof i.dangerouslySetInnerHTML != "object" || !("__html"in i.dangerouslySetInnerHTML))
                    throw Error(n(61))
            }
            if (i.style != null && typeof i.style != "object")
                throw Error(n(62))
        }
    }
    function Vs(r, i) {
        if (r.indexOf("-") === -1)
            return typeof i.is == "string";
        switch (r) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Fi = null;
    function ac(r) {
        return r = r.target || r.srcElement || window,
        r.correspondingUseElement && (r = r.correspondingUseElement),
        r.nodeType === 3 ? r.parentNode : r
    }
    var lc = null
      , Bi = null
      , zi = null;
    function bp(r) {
        if (r = oo(r)) {
            if (typeof lc != "function")
                throw Error(n(280));
            var i = r.stateNode;
            i && (i = Ba(i),
            lc(r.stateNode, r.type, i))
        }
    }
    function Tp(r) {
        Bi ? zi ? zi.push(r) : zi = [r] : Bi = r
    }
    function _p() {
        if (Bi) {
            var r = Bi
              , i = zi;
            if (zi = Bi = null,
            bp(r),
            i)
                for (r = 0; r < i.length; r++)
                    bp(i[r])
        }
    }
    function Pp(r, i) {
        return r(i)
    }
    function Cp() {}
    var uc = !1;
    function Ep(r, i, a) {
        if (uc)
            return r(i, a);
        uc = !0;
        try {
            return Pp(r, i, a)
        } finally {
            uc = !1,
            (Bi !== null || zi !== null) && (Cp(),
            _p())
        }
    }
    function Fs(r, i) {
        var a = r.stateNode;
        if (a === null)
            return null;
        var c = Ba(a);
        if (c === null)
            return null;
        a = c[i];
        e: switch (i) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (c = !c.disabled) || (r = r.type,
            c = !(r === "button" || r === "input" || r === "select" || r === "textarea")),
            r = !c;
            break e;
        default:
            r = !1
        }
        if (r)
            return null;
        if (a && typeof a != "function")
            throw Error(n(231, i, typeof a));
        return a
    }
    var cc = !1;
    if (d)
        try {
            var Bs = {};
            Object.defineProperty(Bs, "passive", {
                get: function() {
                    cc = !0
                }
            }),
            window.addEventListener("test", Bs, Bs),
            window.removeEventListener("test", Bs, Bs)
        } catch {
            cc = !1
        }
    function e1(r, i, a, c, p, g, x, k, N) {
        var $ = Array.prototype.slice.call(arguments, 3);
        try {
            i.apply(a, $)
        } catch (ee) {
            this.onError(ee)
        }
    }
    var zs = !1
      , va = null
      , xa = !1
      , dc = null
      , t1 = {
        onError: function(r) {
            zs = !0,
            va = r
        }
    };
    function n1(r, i, a, c, p, g, x, k, N) {
        zs = !1,
        va = null,
        e1.apply(t1, arguments)
    }
    function r1(r, i, a, c, p, g, x, k, N) {
        if (n1.apply(this, arguments),
        zs) {
            if (zs) {
                var $ = va;
                zs = !1,
                va = null
            } else
                throw Error(n(198));
            xa || (xa = !0,
            dc = $)
        }
    }
    function oi(r) {
        var i = r
          , a = r;
        if (r.alternate)
            for (; i.return; )
                i = i.return;
        else {
            r = i;
            do
                i = r,
                (i.flags & 4098) !== 0 && (a = i.return),
                r = i.return;
            while (r)
        }
        return i.tag === 3 ? a : null
    }
    function kp(r) {
        if (r.tag === 13) {
            var i = r.memoizedState;
            if (i === null && (r = r.alternate,
            r !== null && (i = r.memoizedState)),
            i !== null)
                return i.dehydrated
        }
        return null
    }
    function Ap(r) {
        if (oi(r) !== r)
            throw Error(n(188))
    }
    function i1(r) {
        var i = r.alternate;
        if (!i) {
            if (i = oi(r),
            i === null)
                throw Error(n(188));
            return i !== r ? null : r
        }
        for (var a = r, c = i; ; ) {
            var p = a.return;
            if (p === null)
                break;
            var g = p.alternate;
            if (g === null) {
                if (c = p.return,
                c !== null) {
                    a = c;
                    continue
                }
                break
            }
            if (p.child === g.child) {
                for (g = p.child; g; ) {
                    if (g === a)
                        return Ap(p),
                        r;
                    if (g === c)
                        return Ap(p),
                        i;
                    g = g.sibling
                }
                throw Error(n(188))
            }
            if (a.return !== c.return)
                a = p,
                c = g;
            else {
                for (var x = !1, k = p.child; k; ) {
                    if (k === a) {
                        x = !0,
                        a = p,
                        c = g;
                        break
                    }
                    if (k === c) {
                        x = !0,
                        c = p,
                        a = g;
                        break
                    }
                    k = k.sibling
                }
                if (!x) {
                    for (k = g.child; k; ) {
                        if (k === a) {
                            x = !0,
                            a = g,
                            c = p;
                            break
                        }
                        if (k === c) {
                            x = !0,
                            c = g,
                            a = p;
                            break
                        }
                        k = k.sibling
                    }
                    if (!x)
                        throw Error(n(189))
                }
            }
            if (a.alternate !== c)
                throw Error(n(190))
        }
        if (a.tag !== 3)
            throw Error(n(188));
        return a.stateNode.current === a ? r : i
    }
    function Rp(r) {
        return r = i1(r),
        r !== null ? Np(r) : null
    }
    function Np(r) {
        if (r.tag === 5 || r.tag === 6)
            return r;
        for (r = r.child; r !== null; ) {
            var i = Np(r);
            if (i !== null)
                return i;
            r = r.sibling
        }
        return null
    }
    var Op = e.unstable_scheduleCallback
      , Dp = e.unstable_cancelCallback
      , s1 = e.unstable_shouldYield
      , o1 = e.unstable_requestPaint
      , ht = e.unstable_now
      , a1 = e.unstable_getCurrentPriorityLevel
      , fc = e.unstable_ImmediatePriority
      , Mp = e.unstable_UserBlockingPriority
      , wa = e.unstable_NormalPriority
      , l1 = e.unstable_LowPriority
      , Ip = e.unstable_IdlePriority
      , Sa = null
      , Un = null;
    function u1(r) {
        if (Un && typeof Un.onCommitFiberRoot == "function")
            try {
                Un.onCommitFiberRoot(Sa, r, void 0, (r.current.flags & 128) === 128)
            } catch {}
    }
    var _n = Math.clz32 ? Math.clz32 : f1
      , c1 = Math.log
      , d1 = Math.LN2;
    function f1(r) {
        return r >>>= 0,
        r === 0 ? 32 : 31 - (c1(r) / d1 | 0) | 0
    }
    var ba = 64
      , Ta = 4194304;
    function Us(r) {
        switch (r & -r) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return r & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return r & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return r
        }
    }
    function _a(r, i) {
        var a = r.pendingLanes;
        if (a === 0)
            return 0;
        var c = 0
          , p = r.suspendedLanes
          , g = r.pingedLanes
          , x = a & 268435455;
        if (x !== 0) {
            var k = x & ~p;
            k !== 0 ? c = Us(k) : (g &= x,
            g !== 0 && (c = Us(g)))
        } else
            x = a & ~p,
            x !== 0 ? c = Us(x) : g !== 0 && (c = Us(g));
        if (c === 0)
            return 0;
        if (i !== 0 && i !== c && (i & p) === 0 && (p = c & -c,
        g = i & -i,
        p >= g || p === 16 && (g & 4194240) !== 0))
            return i;
        if ((c & 4) !== 0 && (c |= a & 16),
        i = r.entangledLanes,
        i !== 0)
            for (r = r.entanglements,
            i &= c; 0 < i; )
                a = 31 - _n(i),
                p = 1 << a,
                c |= r[a],
                i &= ~p;
        return c
    }
    function h1(r, i) {
        switch (r) {
        case 1:
        case 2:
        case 4:
            return i + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return i + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function p1(r, i) {
        for (var a = r.suspendedLanes, c = r.pingedLanes, p = r.expirationTimes, g = r.pendingLanes; 0 < g; ) {
            var x = 31 - _n(g)
              , k = 1 << x
              , N = p[x];
            N === -1 ? ((k & a) === 0 || (k & c) !== 0) && (p[x] = h1(k, i)) : N <= i && (r.expiredLanes |= k),
            g &= ~k
        }
    }
    function hc(r) {
        return r = r.pendingLanes & -1073741825,
        r !== 0 ? r : r & 1073741824 ? 1073741824 : 0
    }
    function Lp() {
        var r = ba;
        return ba <<= 1,
        (ba & 4194240) === 0 && (ba = 64),
        r
    }
    function pc(r) {
        for (var i = [], a = 0; 31 > a; a++)
            i.push(r);
        return i
    }
    function $s(r, i, a) {
        r.pendingLanes |= i,
        i !== 536870912 && (r.suspendedLanes = 0,
        r.pingedLanes = 0),
        r = r.eventTimes,
        i = 31 - _n(i),
        r[i] = a
    }
    function m1(r, i) {
        var a = r.pendingLanes & ~i;
        r.pendingLanes = i,
        r.suspendedLanes = 0,
        r.pingedLanes = 0,
        r.expiredLanes &= i,
        r.mutableReadLanes &= i,
        r.entangledLanes &= i,
        i = r.entanglements;
        var c = r.eventTimes;
        for (r = r.expirationTimes; 0 < a; ) {
            var p = 31 - _n(a)
              , g = 1 << p;
            i[p] = 0,
            c[p] = -1,
            r[p] = -1,
            a &= ~g
        }
    }
    function mc(r, i) {
        var a = r.entangledLanes |= i;
        for (r = r.entanglements; a; ) {
            var c = 31 - _n(a)
              , p = 1 << c;
            p & i | r[c] & i && (r[c] |= i),
            a &= ~p
        }
    }
    var Qe = 0;
    function jp(r) {
        return r &= -r,
        1 < r ? 4 < r ? (r & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Vp, gc, Fp, Bp, zp, yc = !1, Pa = [], Pr = null, Cr = null, Er = null, Hs = new Map, Ws = new Map, kr = [], g1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Up(r, i) {
        switch (r) {
        case "focusin":
        case "focusout":
            Pr = null;
            break;
        case "dragenter":
        case "dragleave":
            Cr = null;
            break;
        case "mouseover":
        case "mouseout":
            Er = null;
            break;
        case "pointerover":
        case "pointerout":
            Hs.delete(i.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ws.delete(i.pointerId)
        }
    }
    function qs(r, i, a, c, p, g) {
        return r === null || r.nativeEvent !== g ? (r = {
            blockedOn: i,
            domEventName: a,
            eventSystemFlags: c,
            nativeEvent: g,
            targetContainers: [p]
        },
        i !== null && (i = oo(i),
        i !== null && gc(i)),
        r) : (r.eventSystemFlags |= c,
        i = r.targetContainers,
        p !== null && i.indexOf(p) === -1 && i.push(p),
        r)
    }
    function y1(r, i, a, c, p) {
        switch (i) {
        case "focusin":
            return Pr = qs(Pr, r, i, a, c, p),
            !0;
        case "dragenter":
            return Cr = qs(Cr, r, i, a, c, p),
            !0;
        case "mouseover":
            return Er = qs(Er, r, i, a, c, p),
            !0;
        case "pointerover":
            var g = p.pointerId;
            return Hs.set(g, qs(Hs.get(g) || null, r, i, a, c, p)),
            !0;
        case "gotpointercapture":
            return g = p.pointerId,
            Ws.set(g, qs(Ws.get(g) || null, r, i, a, c, p)),
            !0
        }
        return !1
    }
    function $p(r) {
        var i = ai(r.target);
        if (i !== null) {
            var a = oi(i);
            if (a !== null) {
                if (i = a.tag,
                i === 13) {
                    if (i = kp(a),
                    i !== null) {
                        r.blockedOn = i,
                        zp(r.priority, function() {
                            Fp(a)
                        });
                        return
                    }
                } else if (i === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    r.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        r.blockedOn = null
    }
    function Ca(r) {
        if (r.blockedOn !== null)
            return !1;
        for (var i = r.targetContainers; 0 < i.length; ) {
            var a = xc(r.domEventName, r.eventSystemFlags, i[0], r.nativeEvent);
            if (a === null) {
                a = r.nativeEvent;
                var c = new a.constructor(a.type,a);
                Fi = c,
                a.target.dispatchEvent(c),
                Fi = null
            } else
                return i = oo(a),
                i !== null && gc(i),
                r.blockedOn = a,
                !1;
            i.shift()
        }
        return !0
    }
    function Hp(r, i, a) {
        Ca(r) && a.delete(i)
    }
    function v1() {
        yc = !1,
        Pr !== null && Ca(Pr) && (Pr = null),
        Cr !== null && Ca(Cr) && (Cr = null),
        Er !== null && Ca(Er) && (Er = null),
        Hs.forEach(Hp),
        Ws.forEach(Hp)
    }
    function Qs(r, i) {
        r.blockedOn === i && (r.blockedOn = null,
        yc || (yc = !0,
        e.unstable_scheduleCallback(e.unstable_NormalPriority, v1)))
    }
    function Ks(r) {
        function i(p) {
            return Qs(p, r)
        }
        if (0 < Pa.length) {
            Qs(Pa[0], r);
            for (var a = 1; a < Pa.length; a++) {
                var c = Pa[a];
                c.blockedOn === r && (c.blockedOn = null)
            }
        }
        for (Pr !== null && Qs(Pr, r),
        Cr !== null && Qs(Cr, r),
        Er !== null && Qs(Er, r),
        Hs.forEach(i),
        Ws.forEach(i),
        a = 0; a < kr.length; a++)
            c = kr[a],
            c.blockedOn === r && (c.blockedOn = null);
        for (; 0 < kr.length && (a = kr[0],
        a.blockedOn === null); )
            $p(a),
            a.blockedOn === null && kr.shift()
    }
    var Ui = I.ReactCurrentBatchConfig
      , Ea = !0;
    function x1(r, i, a, c) {
        var p = Qe
          , g = Ui.transition;
        Ui.transition = null;
        try {
            Qe = 1,
            vc(r, i, a, c)
        } finally {
            Qe = p,
            Ui.transition = g
        }
    }
    function w1(r, i, a, c) {
        var p = Qe
          , g = Ui.transition;
        Ui.transition = null;
        try {
            Qe = 4,
            vc(r, i, a, c)
        } finally {
            Qe = p,
            Ui.transition = g
        }
    }
    function vc(r, i, a, c) {
        if (Ea) {
            var p = xc(r, i, a, c);
            if (p === null)
                Lc(r, i, c, ka, a),
                Up(r, c);
            else if (y1(p, r, i, a, c))
                c.stopPropagation();
            else if (Up(r, c),
            i & 4 && -1 < g1.indexOf(r)) {
                for (; p !== null; ) {
                    var g = oo(p);
                    if (g !== null && Vp(g),
                    g = xc(r, i, a, c),
                    g === null && Lc(r, i, c, ka, a),
                    g === p)
                        break;
                    p = g
                }
                p !== null && c.stopPropagation()
            } else
                Lc(r, i, c, null, a)
        }
    }
    var ka = null;
    function xc(r, i, a, c) {
        if (ka = null,
        r = ac(c),
        r = ai(r),
        r !== null)
            if (i = oi(r),
            i === null)
                r = null;
            else if (a = i.tag,
            a === 13) {
                if (r = kp(i),
                r !== null)
                    return r;
                r = null
            } else if (a === 3) {
                if (i.stateNode.current.memoizedState.isDehydrated)
                    return i.tag === 3 ? i.stateNode.containerInfo : null;
                r = null
            } else
                i !== r && (r = null);
        return ka = r,
        null
    }
    function Wp(r) {
        switch (r) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (a1()) {
            case fc:
                return 1;
            case Mp:
                return 4;
            case wa:
            case l1:
                return 16;
            case Ip:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var Ar = null
      , wc = null
      , Aa = null;
    function qp() {
        if (Aa)
            return Aa;
        var r, i = wc, a = i.length, c, p = "value"in Ar ? Ar.value : Ar.textContent, g = p.length;
        for (r = 0; r < a && i[r] === p[r]; r++)
            ;
        var x = a - r;
        for (c = 1; c <= x && i[a - c] === p[g - c]; c++)
            ;
        return Aa = p.slice(r, 1 < c ? 1 - c : void 0)
    }
    function Ra(r) {
        var i = r.keyCode;
        return "charCode"in r ? (r = r.charCode,
        r === 0 && i === 13 && (r = 13)) : r = i,
        r === 10 && (r = 13),
        32 <= r || r === 13 ? r : 0
    }
    function Na() {
        return !0
    }
    function Qp() {
        return !1
    }
    function sn(r) {
        function i(a, c, p, g, x) {
            this._reactName = a,
            this._targetInst = p,
            this.type = c,
            this.nativeEvent = g,
            this.target = x,
            this.currentTarget = null;
            for (var k in r)
                r.hasOwnProperty(k) && (a = r[k],
                this[k] = a ? a(g) : g[k]);
            return this.isDefaultPrevented = (g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1) ? Na : Qp,
            this.isPropagationStopped = Qp,
            this
        }
        return ne(i.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = Na)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = Na)
            },
            persist: function() {},
            isPersistent: Na
        }),
        i
    }
    var $i = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(r) {
            return r.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Sc = sn($i), Zs = ne({}, $i, {
        view: 0,
        detail: 0
    }), S1 = sn(Zs), bc, Tc, Gs, Oa = ne({}, Zs, {
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
        getModifierState: Pc,
        button: 0,
        buttons: 0,
        relatedTarget: function(r) {
            return r.relatedTarget === void 0 ? r.fromElement === r.srcElement ? r.toElement : r.fromElement : r.relatedTarget
        },
        movementX: function(r) {
            return "movementX"in r ? r.movementX : (r !== Gs && (Gs && r.type === "mousemove" ? (bc = r.screenX - Gs.screenX,
            Tc = r.screenY - Gs.screenY) : Tc = bc = 0,
            Gs = r),
            bc)
        },
        movementY: function(r) {
            return "movementY"in r ? r.movementY : Tc
        }
    }), Kp = sn(Oa), b1 = ne({}, Oa, {
        dataTransfer: 0
    }), T1 = sn(b1), _1 = ne({}, Zs, {
        relatedTarget: 0
    }), _c = sn(_1), P1 = ne({}, $i, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), C1 = sn(P1), E1 = ne({}, $i, {
        clipboardData: function(r) {
            return "clipboardData"in r ? r.clipboardData : window.clipboardData
        }
    }), k1 = sn(E1), A1 = ne({}, $i, {
        data: 0
    }), Zp = sn(A1), R1 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, N1 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, O1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function D1(r) {
        var i = this.nativeEvent;
        return i.getModifierState ? i.getModifierState(r) : (r = O1[r]) ? !!i[r] : !1
    }
    function Pc() {
        return D1
    }
    var M1 = ne({}, Zs, {
        key: function(r) {
            if (r.key) {
                var i = R1[r.key] || r.key;
                if (i !== "Unidentified")
                    return i
            }
            return r.type === "keypress" ? (r = Ra(r),
            r === 13 ? "Enter" : String.fromCharCode(r)) : r.type === "keydown" || r.type === "keyup" ? N1[r.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Pc,
        charCode: function(r) {
            return r.type === "keypress" ? Ra(r) : 0
        },
        keyCode: function(r) {
            return r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0
        },
        which: function(r) {
            return r.type === "keypress" ? Ra(r) : r.type === "keydown" || r.type === "keyup" ? r.keyCode : 0
        }
    })
      , I1 = sn(M1)
      , L1 = ne({}, Oa, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Gp = sn(L1)
      , j1 = ne({}, Zs, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Pc
    })
      , V1 = sn(j1)
      , F1 = ne({}, $i, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , B1 = sn(F1)
      , z1 = ne({}, Oa, {
        deltaX: function(r) {
            return "deltaX"in r ? r.deltaX : "wheelDeltaX"in r ? -r.wheelDeltaX : 0
        },
        deltaY: function(r) {
            return "deltaY"in r ? r.deltaY : "wheelDeltaY"in r ? -r.wheelDeltaY : "wheelDelta"in r ? -r.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , U1 = sn(z1)
      , $1 = [9, 13, 27, 32]
      , Cc = d && "CompositionEvent"in window
      , Xs = null;
    d && "documentMode"in document && (Xs = document.documentMode);
    var H1 = d && "TextEvent"in window && !Xs
      , Xp = d && (!Cc || Xs && 8 < Xs && 11 >= Xs)
      , Yp = " "
      , Jp = !1;
    function em(r, i) {
        switch (r) {
        case "keyup":
            return $1.indexOf(i.keyCode) !== -1;
        case "keydown":
            return i.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function tm(r) {
        return r = r.detail,
        typeof r == "object" && "data"in r ? r.data : null
    }
    var Hi = !1;
    function W1(r, i) {
        switch (r) {
        case "compositionend":
            return tm(i);
        case "keypress":
            return i.which !== 32 ? null : (Jp = !0,
            Yp);
        case "textInput":
            return r = i.data,
            r === Yp && Jp ? null : r;
        default:
            return null
        }
    }
    function q1(r, i) {
        if (Hi)
            return r === "compositionend" || !Cc && em(r, i) ? (r = qp(),
            Aa = wc = Ar = null,
            Hi = !1,
            r) : null;
        switch (r) {
        case "paste":
            return null;
        case "keypress":
            if (!(i.ctrlKey || i.altKey || i.metaKey) || i.ctrlKey && i.altKey) {
                if (i.char && 1 < i.char.length)
                    return i.char;
                if (i.which)
                    return String.fromCharCode(i.which)
            }
            return null;
        case "compositionend":
            return Xp && i.locale !== "ko" ? null : i.data;
        default:
            return null
        }
    }
    var Q1 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
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
        week: !0
    };
    function nm(r) {
        var i = r && r.nodeName && r.nodeName.toLowerCase();
        return i === "input" ? !!Q1[r.type] : i === "textarea"
    }
    function rm(r, i, a, c) {
        Tp(c),
        i = ja(i, "onChange"),
        0 < i.length && (a = new Sc("onChange","change",null,a,c),
        r.push({
            event: a,
            listeners: i
        }))
    }
    var Ys = null
      , Js = null;
    function K1(r) {
        Sm(r, 0)
    }
    function Da(r) {
        var i = Zi(r);
        if (ir(i))
            return r
    }
    function Z1(r, i) {
        if (r === "change")
            return i
    }
    var im = !1;
    if (d) {
        var Ec;
        if (d) {
            var kc = "oninput"in document;
            if (!kc) {
                var sm = document.createElement("div");
                sm.setAttribute("oninput", "return;"),
                kc = typeof sm.oninput == "function"
            }
            Ec = kc
        } else
            Ec = !1;
        im = Ec && (!document.documentMode || 9 < document.documentMode)
    }
    function om() {
        Ys && (Ys.detachEvent("onpropertychange", am),
        Js = Ys = null)
    }
    function am(r) {
        if (r.propertyName === "value" && Da(Js)) {
            var i = [];
            rm(i, Js, r, ac(r)),
            Ep(K1, i)
        }
    }
    function G1(r, i, a) {
        r === "focusin" ? (om(),
        Ys = i,
        Js = a,
        Ys.attachEvent("onpropertychange", am)) : r === "focusout" && om()
    }
    function X1(r) {
        if (r === "selectionchange" || r === "keyup" || r === "keydown")
            return Da(Js)
    }
    function Y1(r, i) {
        if (r === "click")
            return Da(i)
    }
    function J1(r, i) {
        if (r === "input" || r === "change")
            return Da(i)
    }
    function eT(r, i) {
        return r === i && (r !== 0 || 1 / r === 1 / i) || r !== r && i !== i
    }
    var Pn = typeof Object.is == "function" ? Object.is : eT;
    function eo(r, i) {
        if (Pn(r, i))
            return !0;
        if (typeof r != "object" || r === null || typeof i != "object" || i === null)
            return !1;
        var a = Object.keys(r)
          , c = Object.keys(i);
        if (a.length !== c.length)
            return !1;
        for (c = 0; c < a.length; c++) {
            var p = a[c];
            if (!f.call(i, p) || !Pn(r[p], i[p]))
                return !1
        }
        return !0
    }
    function lm(r) {
        for (; r && r.firstChild; )
            r = r.firstChild;
        return r
    }
    function um(r, i) {
        var a = lm(r);
        r = 0;
        for (var c; a; ) {
            if (a.nodeType === 3) {
                if (c = r + a.textContent.length,
                r <= i && c >= i)
                    return {
                        node: a,
                        offset: i - r
                    };
                r = c
            }
            e: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = lm(a)
        }
    }
    function cm(r, i) {
        return r && i ? r === i ? !0 : r && r.nodeType === 3 ? !1 : i && i.nodeType === 3 ? cm(r, i.parentNode) : "contains"in r ? r.contains(i) : r.compareDocumentPosition ? !!(r.compareDocumentPosition(i) & 16) : !1 : !1
    }
    function dm() {
        for (var r = window, i = Tn(); i instanceof r.HTMLIFrameElement; ) {
            try {
                var a = typeof i.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                r = i.contentWindow;
            else
                break;
            i = Tn(r.document)
        }
        return i
    }
    function Ac(r) {
        var i = r && r.nodeName && r.nodeName.toLowerCase();
        return i && (i === "input" && (r.type === "text" || r.type === "search" || r.type === "tel" || r.type === "url" || r.type === "password") || i === "textarea" || r.contentEditable === "true")
    }
    function tT(r) {
        var i = dm()
          , a = r.focusedElem
          , c = r.selectionRange;
        if (i !== a && a && a.ownerDocument && cm(a.ownerDocument.documentElement, a)) {
            if (c !== null && Ac(a)) {
                if (i = c.start,
                r = c.end,
                r === void 0 && (r = i),
                "selectionStart"in a)
                    a.selectionStart = i,
                    a.selectionEnd = Math.min(r, a.value.length);
                else if (r = (i = a.ownerDocument || document) && i.defaultView || window,
                r.getSelection) {
                    r = r.getSelection();
                    var p = a.textContent.length
                      , g = Math.min(c.start, p);
                    c = c.end === void 0 ? g : Math.min(c.end, p),
                    !r.extend && g > c && (p = c,
                    c = g,
                    g = p),
                    p = um(a, g);
                    var x = um(a, c);
                    p && x && (r.rangeCount !== 1 || r.anchorNode !== p.node || r.anchorOffset !== p.offset || r.focusNode !== x.node || r.focusOffset !== x.offset) && (i = i.createRange(),
                    i.setStart(p.node, p.offset),
                    r.removeAllRanges(),
                    g > c ? (r.addRange(i),
                    r.extend(x.node, x.offset)) : (i.setEnd(x.node, x.offset),
                    r.addRange(i)))
                }
            }
            for (i = [],
            r = a; r = r.parentNode; )
                r.nodeType === 1 && i.push({
                    element: r,
                    left: r.scrollLeft,
                    top: r.scrollTop
                });
            for (typeof a.focus == "function" && a.focus(),
            a = 0; a < i.length; a++)
                r = i[a],
                r.element.scrollLeft = r.left,
                r.element.scrollTop = r.top
        }
    }
    var nT = d && "documentMode"in document && 11 >= document.documentMode
      , Wi = null
      , Rc = null
      , to = null
      , Nc = !1;
    function fm(r, i, a) {
        var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Nc || Wi == null || Wi !== Tn(c) || (c = Wi,
        "selectionStart"in c && Ac(c) ? c = {
            start: c.selectionStart,
            end: c.selectionEnd
        } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(),
        c = {
            anchorNode: c.anchorNode,
            anchorOffset: c.anchorOffset,
            focusNode: c.focusNode,
            focusOffset: c.focusOffset
        }),
        to && eo(to, c) || (to = c,
        c = ja(Rc, "onSelect"),
        0 < c.length && (i = new Sc("onSelect","select",null,i,a),
        r.push({
            event: i,
            listeners: c
        }),
        i.target = Wi)))
    }
    function Ma(r, i) {
        var a = {};
        return a[r.toLowerCase()] = i.toLowerCase(),
        a["Webkit" + r] = "webkit" + i,
        a["Moz" + r] = "moz" + i,
        a
    }
    var qi = {
        animationend: Ma("Animation", "AnimationEnd"),
        animationiteration: Ma("Animation", "AnimationIteration"),
        animationstart: Ma("Animation", "AnimationStart"),
        transitionend: Ma("Transition", "TransitionEnd")
    }
      , Oc = {}
      , hm = {};
    d && (hm = document.createElement("div").style,
    "AnimationEvent"in window || (delete qi.animationend.animation,
    delete qi.animationiteration.animation,
    delete qi.animationstart.animation),
    "TransitionEvent"in window || delete qi.transitionend.transition);
    function Ia(r) {
        if (Oc[r])
            return Oc[r];
        if (!qi[r])
            return r;
        var i = qi[r], a;
        for (a in i)
            if (i.hasOwnProperty(a) && a in hm)
                return Oc[r] = i[a];
        return r
    }
    var pm = Ia("animationend")
      , mm = Ia("animationiteration")
      , gm = Ia("animationstart")
      , ym = Ia("transitionend")
      , vm = new Map
      , xm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Rr(r, i) {
        vm.set(r, i),
        l(i, [r])
    }
    for (var Dc = 0; Dc < xm.length; Dc++) {
        var Mc = xm[Dc]
          , rT = Mc.toLowerCase()
          , iT = Mc[0].toUpperCase() + Mc.slice(1);
        Rr(rT, "on" + iT)
    }
    Rr(pm, "onAnimationEnd"),
    Rr(mm, "onAnimationIteration"),
    Rr(gm, "onAnimationStart"),
    Rr("dblclick", "onDoubleClick"),
    Rr("focusin", "onFocus"),
    Rr("focusout", "onBlur"),
    Rr(ym, "onTransitionEnd"),
    u("onMouseEnter", ["mouseout", "mouseover"]),
    u("onMouseLeave", ["mouseout", "mouseover"]),
    u("onPointerEnter", ["pointerout", "pointerover"]),
    u("onPointerLeave", ["pointerout", "pointerover"]),
    l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var no = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , sT = new Set("cancel close invalid load scroll toggle".split(" ").concat(no));
    function wm(r, i, a) {
        var c = r.type || "unknown-event";
        r.currentTarget = a,
        r1(c, i, void 0, r),
        r.currentTarget = null
    }
    function Sm(r, i) {
        i = (i & 4) !== 0;
        for (var a = 0; a < r.length; a++) {
            var c = r[a]
              , p = c.event;
            c = c.listeners;
            e: {
                var g = void 0;
                if (i)
                    for (var x = c.length - 1; 0 <= x; x--) {
                        var k = c[x]
                          , N = k.instance
                          , $ = k.currentTarget;
                        if (k = k.listener,
                        N !== g && p.isPropagationStopped())
                            break e;
                        wm(p, k, $),
                        g = N
                    }
                else
                    for (x = 0; x < c.length; x++) {
                        if (k = c[x],
                        N = k.instance,
                        $ = k.currentTarget,
                        k = k.listener,
                        N !== g && p.isPropagationStopped())
                            break e;
                        wm(p, k, $),
                        g = N
                    }
            }
        }
        if (xa)
            throw r = dc,
            xa = !1,
            dc = null,
            r
    }
    function Ye(r, i) {
        var a = i[Uc];
        a === void 0 && (a = i[Uc] = new Set);
        var c = r + "__bubble";
        a.has(c) || (bm(i, r, 2, !1),
        a.add(c))
    }
    function Ic(r, i, a) {
        var c = 0;
        i && (c |= 4),
        bm(a, r, c, i)
    }
    var La = "_reactListening" + Math.random().toString(36).slice(2);
    function ro(r) {
        if (!r[La]) {
            r[La] = !0,
            s.forEach(function(a) {
                a !== "selectionchange" && (sT.has(a) || Ic(a, !1, r),
                Ic(a, !0, r))
            });
            var i = r.nodeType === 9 ? r : r.ownerDocument;
            i === null || i[La] || (i[La] = !0,
            Ic("selectionchange", !1, i))
        }
    }
    function bm(r, i, a, c) {
        switch (Wp(i)) {
        case 1:
            var p = x1;
            break;
        case 4:
            p = w1;
            break;
        default:
            p = vc
        }
        a = p.bind(null, i, a, r),
        p = void 0,
        !cc || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (p = !0),
        c ? p !== void 0 ? r.addEventListener(i, a, {
            capture: !0,
            passive: p
        }) : r.addEventListener(i, a, !0) : p !== void 0 ? r.addEventListener(i, a, {
            passive: p
        }) : r.addEventListener(i, a, !1)
    }
    function Lc(r, i, a, c, p) {
        var g = c;
        if ((i & 1) === 0 && (i & 2) === 0 && c !== null)
            e: for (; ; ) {
                if (c === null)
                    return;
                var x = c.tag;
                if (x === 3 || x === 4) {
                    var k = c.stateNode.containerInfo;
                    if (k === p || k.nodeType === 8 && k.parentNode === p)
                        break;
                    if (x === 4)
                        for (x = c.return; x !== null; ) {
                            var N = x.tag;
                            if ((N === 3 || N === 4) && (N = x.stateNode.containerInfo,
                            N === p || N.nodeType === 8 && N.parentNode === p))
                                return;
                            x = x.return
                        }
                    for (; k !== null; ) {
                        if (x = ai(k),
                        x === null)
                            return;
                        if (N = x.tag,
                        N === 5 || N === 6) {
                            c = g = x;
                            continue e
                        }
                        k = k.parentNode
                    }
                }
                c = c.return
            }
        Ep(function() {
            var $ = g
              , ee = ac(a)
              , te = [];
            e: {
                var Y = vm.get(r);
                if (Y !== void 0) {
                    var he = Sc
                      , ve = r;
                    switch (r) {
                    case "keypress":
                        if (Ra(a) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        he = I1;
                        break;
                    case "focusin":
                        ve = "focus",
                        he = _c;
                        break;
                    case "focusout":
                        ve = "blur",
                        he = _c;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        he = _c;
                        break;
                    case "click":
                        if (a.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        he = Kp;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        he = T1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        he = V1;
                        break;
                    case pm:
                    case mm:
                    case gm:
                        he = C1;
                        break;
                    case ym:
                        he = B1;
                        break;
                    case "scroll":
                        he = S1;
                        break;
                    case "wheel":
                        he = U1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        he = k1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        he = Gp
                    }
                    var xe = (i & 4) !== 0
                      , pt = !xe && r === "scroll"
                      , j = xe ? Y !== null ? Y + "Capture" : null : Y;
                    xe = [];
                    for (var M = $, z; M !== null; ) {
                        z = M;
                        var ae = z.stateNode;
                        if (z.tag === 5 && ae !== null && (z = ae,
                        j !== null && (ae = Fs(M, j),
                        ae != null && xe.push(io(M, ae, z)))),
                        pt)
                            break;
                        M = M.return
                    }
                    0 < xe.length && (Y = new he(Y,ve,null,a,ee),
                    te.push({
                        event: Y,
                        listeners: xe
                    }))
                }
            }
            if ((i & 7) === 0) {
                e: {
                    if (Y = r === "mouseover" || r === "pointerover",
                    he = r === "mouseout" || r === "pointerout",
                    Y && a !== Fi && (ve = a.relatedTarget || a.fromElement) && (ai(ve) || ve[or]))
                        break e;
                    if ((he || Y) && (Y = ee.window === ee ? ee : (Y = ee.ownerDocument) ? Y.defaultView || Y.parentWindow : window,
                    he ? (ve = a.relatedTarget || a.toElement,
                    he = $,
                    ve = ve ? ai(ve) : null,
                    ve !== null && (pt = oi(ve),
                    ve !== pt || ve.tag !== 5 && ve.tag !== 6) && (ve = null)) : (he = null,
                    ve = $),
                    he !== ve)) {
                        if (xe = Kp,
                        ae = "onMouseLeave",
                        j = "onMouseEnter",
                        M = "mouse",
                        (r === "pointerout" || r === "pointerover") && (xe = Gp,
                        ae = "onPointerLeave",
                        j = "onPointerEnter",
                        M = "pointer"),
                        pt = he == null ? Y : Zi(he),
                        z = ve == null ? Y : Zi(ve),
                        Y = new xe(ae,M + "leave",he,a,ee),
                        Y.target = pt,
                        Y.relatedTarget = z,
                        ae = null,
                        ai(ee) === $ && (xe = new xe(j,M + "enter",ve,a,ee),
                        xe.target = z,
                        xe.relatedTarget = pt,
                        ae = xe),
                        pt = ae,
                        he && ve)
                            t: {
                                for (xe = he,
                                j = ve,
                                M = 0,
                                z = xe; z; z = Qi(z))
                                    M++;
                                for (z = 0,
                                ae = j; ae; ae = Qi(ae))
                                    z++;
                                for (; 0 < M - z; )
                                    xe = Qi(xe),
                                    M--;
                                for (; 0 < z - M; )
                                    j = Qi(j),
                                    z--;
                                for (; M--; ) {
                                    if (xe === j || j !== null && xe === j.alternate)
                                        break t;
                                    xe = Qi(xe),
                                    j = Qi(j)
                                }
                                xe = null
                            }
                        else
                            xe = null;
                        he !== null && Tm(te, Y, he, xe, !1),
                        ve !== null && pt !== null && Tm(te, pt, ve, xe, !0)
                    }
                }
                e: {
                    if (Y = $ ? Zi($) : window,
                    he = Y.nodeName && Y.nodeName.toLowerCase(),
                    he === "select" || he === "input" && Y.type === "file")
                        var we = Z1;
                    else if (nm(Y))
                        if (im)
                            we = J1;
                        else {
                            we = X1;
                            var _e = G1
                        }
                    else
                        (he = Y.nodeName) && he.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (we = Y1);
                    if (we && (we = we(r, $))) {
                        rm(te, we, a, ee);
                        break e
                    }
                    _e && _e(r, Y, $),
                    r === "focusout" && (_e = Y._wrapperState) && _e.controlled && Y.type === "number" && js(Y, "number", Y.value)
                }
                switch (_e = $ ? Zi($) : window,
                r) {
                case "focusin":
                    (nm(_e) || _e.contentEditable === "true") && (Wi = _e,
                    Rc = $,
                    to = null);
                    break;
                case "focusout":
                    to = Rc = Wi = null;
                    break;
                case "mousedown":
                    Nc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Nc = !1,
                    fm(te, a, ee);
                    break;
                case "selectionchange":
                    if (nT)
                        break;
                case "keydown":
                case "keyup":
                    fm(te, a, ee)
                }
                var Pe;
                if (Cc)
                    e: {
                        switch (r) {
                        case "compositionstart":
                            var Re = "onCompositionStart";
                            break e;
                        case "compositionend":
                            Re = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            Re = "onCompositionUpdate";
                            break e
                        }
                        Re = void 0
                    }
                else
                    Hi ? em(r, a) && (Re = "onCompositionEnd") : r === "keydown" && a.keyCode === 229 && (Re = "onCompositionStart");
                Re && (Xp && a.locale !== "ko" && (Hi || Re !== "onCompositionStart" ? Re === "onCompositionEnd" && Hi && (Pe = qp()) : (Ar = ee,
                wc = "value"in Ar ? Ar.value : Ar.textContent,
                Hi = !0)),
                _e = ja($, Re),
                0 < _e.length && (Re = new Zp(Re,r,null,a,ee),
                te.push({
                    event: Re,
                    listeners: _e
                }),
                Pe ? Re.data = Pe : (Pe = tm(a),
                Pe !== null && (Re.data = Pe)))),
                (Pe = H1 ? W1(r, a) : q1(r, a)) && ($ = ja($, "onBeforeInput"),
                0 < $.length && (ee = new Zp("onBeforeInput","beforeinput",null,a,ee),
                te.push({
                    event: ee,
                    listeners: $
                }),
                ee.data = Pe))
            }
            Sm(te, i)
        })
    }
    function io(r, i, a) {
        return {
            instance: r,
            listener: i,
            currentTarget: a
        }
    }
    function ja(r, i) {
        for (var a = i + "Capture", c = []; r !== null; ) {
            var p = r
              , g = p.stateNode;
            p.tag === 5 && g !== null && (p = g,
            g = Fs(r, a),
            g != null && c.unshift(io(r, g, p)),
            g = Fs(r, i),
            g != null && c.push(io(r, g, p))),
            r = r.return
        }
        return c
    }
    function Qi(r) {
        if (r === null)
            return null;
        do
            r = r.return;
        while (r && r.tag !== 5);
        return r || null
    }
    function Tm(r, i, a, c, p) {
        for (var g = i._reactName, x = []; a !== null && a !== c; ) {
            var k = a
              , N = k.alternate
              , $ = k.stateNode;
            if (N !== null && N === c)
                break;
            k.tag === 5 && $ !== null && (k = $,
            p ? (N = Fs(a, g),
            N != null && x.unshift(io(a, N, k))) : p || (N = Fs(a, g),
            N != null && x.push(io(a, N, k)))),
            a = a.return
        }
        x.length !== 0 && r.push({
            event: i,
            listeners: x
        })
    }
    var oT = /\r\n?/g
      , aT = /\u0000|\uFFFD/g;
    function _m(r) {
        return (typeof r == "string" ? r : "" + r).replace(oT, `
`).replace(aT, "")
    }
    function Va(r, i, a) {
        if (i = _m(i),
        _m(r) !== i && a)
            throw Error(n(425))
    }
    function Fa() {}
    var jc = null
      , Vc = null;
    function Fc(r, i) {
        return r === "textarea" || r === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null
    }
    var Bc = typeof setTimeout == "function" ? setTimeout : void 0
      , lT = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Pm = typeof Promise == "function" ? Promise : void 0
      , uT = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pm < "u" ? function(r) {
        return Pm.resolve(null).then(r).catch(cT)
    }
    : Bc;
    function cT(r) {
        setTimeout(function() {
            throw r
        })
    }
    function zc(r, i) {
        var a = i
          , c = 0;
        do {
            var p = a.nextSibling;
            if (r.removeChild(a),
            p && p.nodeType === 8)
                if (a = p.data,
                a === "/$") {
                    if (c === 0) {
                        r.removeChild(p),
                        Ks(i);
                        return
                    }
                    c--
                } else
                    a !== "$" && a !== "$?" && a !== "$!" || c++;
            a = p
        } while (a);
        Ks(i)
    }
    function Nr(r) {
        for (; r != null; r = r.nextSibling) {
            var i = r.nodeType;
            if (i === 1 || i === 3)
                break;
            if (i === 8) {
                if (i = r.data,
                i === "$" || i === "$!" || i === "$?")
                    break;
                if (i === "/$")
                    return null
            }
        }
        return r
    }
    function Cm(r) {
        r = r.previousSibling;
        for (var i = 0; r; ) {
            if (r.nodeType === 8) {
                var a = r.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (i === 0)
                        return r;
                    i--
                } else
                    a === "/$" && i++
            }
            r = r.previousSibling
        }
        return null
    }
    var Ki = Math.random().toString(36).slice(2)
      , $n = "__reactFiber$" + Ki
      , so = "__reactProps$" + Ki
      , or = "__reactContainer$" + Ki
      , Uc = "__reactEvents$" + Ki
      , dT = "__reactListeners$" + Ki
      , fT = "__reactHandles$" + Ki;
    function ai(r) {
        var i = r[$n];
        if (i)
            return i;
        for (var a = r.parentNode; a; ) {
            if (i = a[or] || a[$n]) {
                if (a = i.alternate,
                i.child !== null || a !== null && a.child !== null)
                    for (r = Cm(r); r !== null; ) {
                        if (a = r[$n])
                            return a;
                        r = Cm(r)
                    }
                return i
            }
            r = a,
            a = r.parentNode
        }
        return null
    }
    function oo(r) {
        return r = r[$n] || r[or],
        !r || r.tag !== 5 && r.tag !== 6 && r.tag !== 13 && r.tag !== 3 ? null : r
    }
    function Zi(r) {
        if (r.tag === 5 || r.tag === 6)
            return r.stateNode;
        throw Error(n(33))
    }
    function Ba(r) {
        return r[so] || null
    }
    var $c = []
      , Gi = -1;
    function Or(r) {
        return {
            current: r
        }
    }
    function Je(r) {
        0 > Gi || (r.current = $c[Gi],
        $c[Gi] = null,
        Gi--)
    }
    function Xe(r, i) {
        Gi++,
        $c[Gi] = r.current,
        r.current = i
    }
    var Dr = {}
      , Lt = Or(Dr)
      , Xt = Or(!1)
      , li = Dr;
    function Xi(r, i) {
        var a = r.type.contextTypes;
        if (!a)
            return Dr;
        var c = r.stateNode;
        if (c && c.__reactInternalMemoizedUnmaskedChildContext === i)
            return c.__reactInternalMemoizedMaskedChildContext;
        var p = {}, g;
        for (g in a)
            p[g] = i[g];
        return c && (r = r.stateNode,
        r.__reactInternalMemoizedUnmaskedChildContext = i,
        r.__reactInternalMemoizedMaskedChildContext = p),
        p
    }
    function Yt(r) {
        return r = r.childContextTypes,
        r != null
    }
    function za() {
        Je(Xt),
        Je(Lt)
    }
    function Em(r, i, a) {
        if (Lt.current !== Dr)
            throw Error(n(168));
        Xe(Lt, i),
        Xe(Xt, a)
    }
    function km(r, i, a) {
        var c = r.stateNode;
        if (i = i.childContextTypes,
        typeof c.getChildContext != "function")
            return a;
        c = c.getChildContext();
        for (var p in c)
            if (!(p in i))
                throw Error(n(108, Ne(r) || "Unknown", p));
        return ne({}, a, c)
    }
    function Ua(r) {
        return r = (r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext || Dr,
        li = Lt.current,
        Xe(Lt, r),
        Xe(Xt, Xt.current),
        !0
    }
    function Am(r, i, a) {
        var c = r.stateNode;
        if (!c)
            throw Error(n(169));
        a ? (r = km(r, i, li),
        c.__reactInternalMemoizedMergedChildContext = r,
        Je(Xt),
        Je(Lt),
        Xe(Lt, r)) : Je(Xt),
        Xe(Xt, a)
    }
    var ar = null
      , $a = !1
      , Hc = !1;
    function Rm(r) {
        ar === null ? ar = [r] : ar.push(r)
    }
    function hT(r) {
        $a = !0,
        Rm(r)
    }
    function Mr() {
        if (!Hc && ar !== null) {
            Hc = !0;
            var r = 0
              , i = Qe;
            try {
                var a = ar;
                for (Qe = 1; r < a.length; r++) {
                    var c = a[r];
                    do
                        c = c(!0);
                    while (c !== null)
                }
                ar = null,
                $a = !1
            } catch (p) {
                throw ar !== null && (ar = ar.slice(r + 1)),
                Op(fc, Mr),
                p
            } finally {
                Qe = i,
                Hc = !1
            }
        }
        return null
    }
    var Yi = []
      , Ji = 0
      , Ha = null
      , Wa = 0
      , mn = []
      , gn = 0
      , ui = null
      , lr = 1
      , ur = "";
    function ci(r, i) {
        Yi[Ji++] = Wa,
        Yi[Ji++] = Ha,
        Ha = r,
        Wa = i
    }
    function Nm(r, i, a) {
        mn[gn++] = lr,
        mn[gn++] = ur,
        mn[gn++] = ui,
        ui = r;
        var c = lr;
        r = ur;
        var p = 32 - _n(c) - 1;
        c &= ~(1 << p),
        a += 1;
        var g = 32 - _n(i) + p;
        if (30 < g) {
            var x = p - p % 5;
            g = (c & (1 << x) - 1).toString(32),
            c >>= x,
            p -= x,
            lr = 1 << 32 - _n(i) + p | a << p | c,
            ur = g + r
        } else
            lr = 1 << g | a << p | c,
            ur = r
    }
    function Wc(r) {
        r.return !== null && (ci(r, 1),
        Nm(r, 1, 0))
    }
    function qc(r) {
        for (; r === Ha; )
            Ha = Yi[--Ji],
            Yi[Ji] = null,
            Wa = Yi[--Ji],
            Yi[Ji] = null;
        for (; r === ui; )
            ui = mn[--gn],
            mn[gn] = null,
            ur = mn[--gn],
            mn[gn] = null,
            lr = mn[--gn],
            mn[gn] = null
    }
    var on = null
      , an = null
      , tt = !1
      , Cn = null;
    function Om(r, i) {
        var a = wn(5, null, null, 0);
        a.elementType = "DELETED",
        a.stateNode = i,
        a.return = r,
        i = r.deletions,
        i === null ? (r.deletions = [a],
        r.flags |= 16) : i.push(a)
    }
    function Dm(r, i) {
        switch (r.tag) {
        case 5:
            var a = r.type;
            return i = i.nodeType !== 1 || a.toLowerCase() !== i.nodeName.toLowerCase() ? null : i,
            i !== null ? (r.stateNode = i,
            on = r,
            an = Nr(i.firstChild),
            !0) : !1;
        case 6:
            return i = r.pendingProps === "" || i.nodeType !== 3 ? null : i,
            i !== null ? (r.stateNode = i,
            on = r,
            an = null,
            !0) : !1;
        case 13:
            return i = i.nodeType !== 8 ? null : i,
            i !== null ? (a = ui !== null ? {
                id: lr,
                overflow: ur
            } : null,
            r.memoizedState = {
                dehydrated: i,
                treeContext: a,
                retryLane: 1073741824
            },
            a = wn(18, null, null, 0),
            a.stateNode = i,
            a.return = r,
            r.child = a,
            on = r,
            an = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function Qc(r) {
        return (r.mode & 1) !== 0 && (r.flags & 128) === 0
    }
    function Kc(r) {
        if (tt) {
            var i = an;
            if (i) {
                var a = i;
                if (!Dm(r, i)) {
                    if (Qc(r))
                        throw Error(n(418));
                    i = Nr(a.nextSibling);
                    var c = on;
                    i && Dm(r, i) ? Om(c, a) : (r.flags = r.flags & -4097 | 2,
                    tt = !1,
                    on = r)
                }
            } else {
                if (Qc(r))
                    throw Error(n(418));
                r.flags = r.flags & -4097 | 2,
                tt = !1,
                on = r
            }
        }
    }
    function Mm(r) {
        for (r = r.return; r !== null && r.tag !== 5 && r.tag !== 3 && r.tag !== 13; )
            r = r.return;
        on = r
    }
    function qa(r) {
        if (r !== on)
            return !1;
        if (!tt)
            return Mm(r),
            tt = !0,
            !1;
        var i;
        if ((i = r.tag !== 3) && !(i = r.tag !== 5) && (i = r.type,
        i = i !== "head" && i !== "body" && !Fc(r.type, r.memoizedProps)),
        i && (i = an)) {
            if (Qc(r))
                throw Im(),
                Error(n(418));
            for (; i; )
                Om(r, i),
                i = Nr(i.nextSibling)
        }
        if (Mm(r),
        r.tag === 13) {
            if (r = r.memoizedState,
            r = r !== null ? r.dehydrated : null,
            !r)
                throw Error(n(317));
            e: {
                for (r = r.nextSibling,
                i = 0; r; ) {
                    if (r.nodeType === 8) {
                        var a = r.data;
                        if (a === "/$") {
                            if (i === 0) {
                                an = Nr(r.nextSibling);
                                break e
                            }
                            i--
                        } else
                            a !== "$" && a !== "$!" && a !== "$?" || i++
                    }
                    r = r.nextSibling
                }
                an = null
            }
        } else
            an = on ? Nr(r.stateNode.nextSibling) : null;
        return !0
    }
    function Im() {
        for (var r = an; r; )
            r = Nr(r.nextSibling)
    }
    function es() {
        an = on = null,
        tt = !1
    }
    function Zc(r) {
        Cn === null ? Cn = [r] : Cn.push(r)
    }
    var pT = I.ReactCurrentBatchConfig;
    function ao(r, i, a) {
        if (r = a.ref,
        r !== null && typeof r != "function" && typeof r != "object") {
            if (a._owner) {
                if (a = a._owner,
                a) {
                    if (a.tag !== 1)
                        throw Error(n(309));
                    var c = a.stateNode
                }
                if (!c)
                    throw Error(n(147, r));
                var p = c
                  , g = "" + r;
                return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === g ? i.ref : (i = function(x) {
                    var k = p.refs;
                    x === null ? delete k[g] : k[g] = x
                }
                ,
                i._stringRef = g,
                i)
            }
            if (typeof r != "string")
                throw Error(n(284));
            if (!a._owner)
                throw Error(n(290, r))
        }
        return r
    }
    function Qa(r, i) {
        throw r = Object.prototype.toString.call(i),
        Error(n(31, r === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : r))
    }
    function Lm(r) {
        var i = r._init;
        return i(r._payload)
    }
    function jm(r) {
        function i(j, M) {
            if (r) {
                var z = j.deletions;
                z === null ? (j.deletions = [M],
                j.flags |= 16) : z.push(M)
            }
        }
        function a(j, M) {
            if (!r)
                return null;
            for (; M !== null; )
                i(j, M),
                M = M.sibling;
            return null
        }
        function c(j, M) {
            for (j = new Map; M !== null; )
                M.key !== null ? j.set(M.key, M) : j.set(M.index, M),
                M = M.sibling;
            return j
        }
        function p(j, M) {
            return j = Ur(j, M),
            j.index = 0,
            j.sibling = null,
            j
        }
        function g(j, M, z) {
            return j.index = z,
            r ? (z = j.alternate,
            z !== null ? (z = z.index,
            z < M ? (j.flags |= 2,
            M) : z) : (j.flags |= 2,
            M)) : (j.flags |= 1048576,
            M)
        }
        function x(j) {
            return r && j.alternate === null && (j.flags |= 2),
            j
        }
        function k(j, M, z, ae) {
            return M === null || M.tag !== 6 ? (M = Bd(z, j.mode, ae),
            M.return = j,
            M) : (M = p(M, z),
            M.return = j,
            M)
        }
        function N(j, M, z, ae) {
            var we = z.type;
            return we === F ? ee(j, M, z.props.children, ae, z.key) : M !== null && (M.elementType === we || typeof we == "object" && we !== null && we.$$typeof === ce && Lm(we) === M.type) ? (ae = p(M, z.props),
            ae.ref = ao(j, M, z),
            ae.return = j,
            ae) : (ae = yl(z.type, z.key, z.props, null, j.mode, ae),
            ae.ref = ao(j, M, z),
            ae.return = j,
            ae)
        }
        function $(j, M, z, ae) {
            return M === null || M.tag !== 4 || M.stateNode.containerInfo !== z.containerInfo || M.stateNode.implementation !== z.implementation ? (M = zd(z, j.mode, ae),
            M.return = j,
            M) : (M = p(M, z.children || []),
            M.return = j,
            M)
        }
        function ee(j, M, z, ae, we) {
            return M === null || M.tag !== 7 ? (M = vi(z, j.mode, ae, we),
            M.return = j,
            M) : (M = p(M, z),
            M.return = j,
            M)
        }
        function te(j, M, z) {
            if (typeof M == "string" && M !== "" || typeof M == "number")
                return M = Bd("" + M, j.mode, z),
                M.return = j,
                M;
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                case L:
                    return z = yl(M.type, M.key, M.props, null, j.mode, z),
                    z.ref = ao(j, null, M),
                    z.return = j,
                    z;
                case B:
                    return M = zd(M, j.mode, z),
                    M.return = j,
                    M;
                case ce:
                    var ae = M._init;
                    return te(j, ae(M._payload), z)
                }
                if (Ii(M) || ie(M))
                    return M = vi(M, j.mode, z, null),
                    M.return = j,
                    M;
                Qa(j, M)
            }
            return null
        }
        function Y(j, M, z, ae) {
            var we = M !== null ? M.key : null;
            if (typeof z == "string" && z !== "" || typeof z == "number")
                return we !== null ? null : k(j, M, "" + z, ae);
            if (typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case L:
                    return z.key === we ? N(j, M, z, ae) : null;
                case B:
                    return z.key === we ? $(j, M, z, ae) : null;
                case ce:
                    return we = z._init,
                    Y(j, M, we(z._payload), ae)
                }
                if (Ii(z) || ie(z))
                    return we !== null ? null : ee(j, M, z, ae, null);
                Qa(j, z)
            }
            return null
        }
        function he(j, M, z, ae, we) {
            if (typeof ae == "string" && ae !== "" || typeof ae == "number")
                return j = j.get(z) || null,
                k(M, j, "" + ae, we);
            if (typeof ae == "object" && ae !== null) {
                switch (ae.$$typeof) {
                case L:
                    return j = j.get(ae.key === null ? z : ae.key) || null,
                    N(M, j, ae, we);
                case B:
                    return j = j.get(ae.key === null ? z : ae.key) || null,
                    $(M, j, ae, we);
                case ce:
                    var _e = ae._init;
                    return he(j, M, z, _e(ae._payload), we)
                }
                if (Ii(ae) || ie(ae))
                    return j = j.get(z) || null,
                    ee(M, j, ae, we, null);
                Qa(M, ae)
            }
            return null
        }
        function ve(j, M, z, ae) {
            for (var we = null, _e = null, Pe = M, Re = M = 0, Ct = null; Pe !== null && Re < z.length; Re++) {
                Pe.index > Re ? (Ct = Pe,
                Pe = null) : Ct = Pe.sibling;
                var We = Y(j, Pe, z[Re], ae);
                if (We === null) {
                    Pe === null && (Pe = Ct);
                    break
                }
                r && Pe && We.alternate === null && i(j, Pe),
                M = g(We, M, Re),
                _e === null ? we = We : _e.sibling = We,
                _e = We,
                Pe = Ct
            }
            if (Re === z.length)
                return a(j, Pe),
                tt && ci(j, Re),
                we;
            if (Pe === null) {
                for (; Re < z.length; Re++)
                    Pe = te(j, z[Re], ae),
                    Pe !== null && (M = g(Pe, M, Re),
                    _e === null ? we = Pe : _e.sibling = Pe,
                    _e = Pe);
                return tt && ci(j, Re),
                we
            }
            for (Pe = c(j, Pe); Re < z.length; Re++)
                Ct = he(Pe, j, Re, z[Re], ae),
                Ct !== null && (r && Ct.alternate !== null && Pe.delete(Ct.key === null ? Re : Ct.key),
                M = g(Ct, M, Re),
                _e === null ? we = Ct : _e.sibling = Ct,
                _e = Ct);
            return r && Pe.forEach(function($r) {
                return i(j, $r)
            }),
            tt && ci(j, Re),
            we
        }
        function xe(j, M, z, ae) {
            var we = ie(z);
            if (typeof we != "function")
                throw Error(n(150));
            if (z = we.call(z),
            z == null)
                throw Error(n(151));
            for (var _e = we = null, Pe = M, Re = M = 0, Ct = null, We = z.next(); Pe !== null && !We.done; Re++,
            We = z.next()) {
                Pe.index > Re ? (Ct = Pe,
                Pe = null) : Ct = Pe.sibling;
                var $r = Y(j, Pe, We.value, ae);
                if ($r === null) {
                    Pe === null && (Pe = Ct);
                    break
                }
                r && Pe && $r.alternate === null && i(j, Pe),
                M = g($r, M, Re),
                _e === null ? we = $r : _e.sibling = $r,
                _e = $r,
                Pe = Ct
            }
            if (We.done)
                return a(j, Pe),
                tt && ci(j, Re),
                we;
            if (Pe === null) {
                for (; !We.done; Re++,
                We = z.next())
                    We = te(j, We.value, ae),
                    We !== null && (M = g(We, M, Re),
                    _e === null ? we = We : _e.sibling = We,
                    _e = We);
                return tt && ci(j, Re),
                we
            }
            for (Pe = c(j, Pe); !We.done; Re++,
            We = z.next())
                We = he(Pe, j, Re, We.value, ae),
                We !== null && (r && We.alternate !== null && Pe.delete(We.key === null ? Re : We.key),
                M = g(We, M, Re),
                _e === null ? we = We : _e.sibling = We,
                _e = We);
            return r && Pe.forEach(function(QT) {
                return i(j, QT)
            }),
            tt && ci(j, Re),
            we
        }
        function pt(j, M, z, ae) {
            if (typeof z == "object" && z !== null && z.type === F && z.key === null && (z = z.props.children),
            typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case L:
                    e: {
                        for (var we = z.key, _e = M; _e !== null; ) {
                            if (_e.key === we) {
                                if (we = z.type,
                                we === F) {
                                    if (_e.tag === 7) {
                                        a(j, _e.sibling),
                                        M = p(_e, z.props.children),
                                        M.return = j,
                                        j = M;
                                        break e
                                    }
                                } else if (_e.elementType === we || typeof we == "object" && we !== null && we.$$typeof === ce && Lm(we) === _e.type) {
                                    a(j, _e.sibling),
                                    M = p(_e, z.props),
                                    M.ref = ao(j, _e, z),
                                    M.return = j,
                                    j = M;
                                    break e
                                }
                                a(j, _e);
                                break
                            } else
                                i(j, _e);
                            _e = _e.sibling
                        }
                        z.type === F ? (M = vi(z.props.children, j.mode, ae, z.key),
                        M.return = j,
                        j = M) : (ae = yl(z.type, z.key, z.props, null, j.mode, ae),
                        ae.ref = ao(j, M, z),
                        ae.return = j,
                        j = ae)
                    }
                    return x(j);
                case B:
                    e: {
                        for (_e = z.key; M !== null; ) {
                            if (M.key === _e)
                                if (M.tag === 4 && M.stateNode.containerInfo === z.containerInfo && M.stateNode.implementation === z.implementation) {
                                    a(j, M.sibling),
                                    M = p(M, z.children || []),
                                    M.return = j,
                                    j = M;
                                    break e
                                } else {
                                    a(j, M);
                                    break
                                }
                            else
                                i(j, M);
                            M = M.sibling
                        }
                        M = zd(z, j.mode, ae),
                        M.return = j,
                        j = M
                    }
                    return x(j);
                case ce:
                    return _e = z._init,
                    pt(j, M, _e(z._payload), ae)
                }
                if (Ii(z))
                    return ve(j, M, z, ae);
                if (ie(z))
                    return xe(j, M, z, ae);
                Qa(j, z)
            }
            return typeof z == "string" && z !== "" || typeof z == "number" ? (z = "" + z,
            M !== null && M.tag === 6 ? (a(j, M.sibling),
            M = p(M, z),
            M.return = j,
            j = M) : (a(j, M),
            M = Bd(z, j.mode, ae),
            M.return = j,
            j = M),
            x(j)) : a(j, M)
        }
        return pt
    }
    var ts = jm(!0)
      , Vm = jm(!1)
      , Ka = Or(null)
      , Za = null
      , ns = null
      , Gc = null;
    function Xc() {
        Gc = ns = Za = null
    }
    function Yc(r) {
        var i = Ka.current;
        Je(Ka),
        r._currentValue = i
    }
    function Jc(r, i, a) {
        for (; r !== null; ) {
            var c = r.alternate;
            if ((r.childLanes & i) !== i ? (r.childLanes |= i,
            c !== null && (c.childLanes |= i)) : c !== null && (c.childLanes & i) !== i && (c.childLanes |= i),
            r === a)
                break;
            r = r.return
        }
    }
    function rs(r, i) {
        Za = r,
        Gc = ns = null,
        r = r.dependencies,
        r !== null && r.firstContext !== null && ((r.lanes & i) !== 0 && (Jt = !0),
        r.firstContext = null)
    }
    function yn(r) {
        var i = r._currentValue;
        if (Gc !== r)
            if (r = {
                context: r,
                memoizedValue: i,
                next: null
            },
            ns === null) {
                if (Za === null)
                    throw Error(n(308));
                ns = r,
                Za.dependencies = {
                    lanes: 0,
                    firstContext: r
                }
            } else
                ns = ns.next = r;
        return i
    }
    var di = null;
    function ed(r) {
        di === null ? di = [r] : di.push(r)
    }
    function Fm(r, i, a, c) {
        var p = i.interleaved;
        return p === null ? (a.next = a,
        ed(i)) : (a.next = p.next,
        p.next = a),
        i.interleaved = a,
        cr(r, c)
    }
    function cr(r, i) {
        r.lanes |= i;
        var a = r.alternate;
        for (a !== null && (a.lanes |= i),
        a = r,
        r = r.return; r !== null; )
            r.childLanes |= i,
            a = r.alternate,
            a !== null && (a.childLanes |= i),
            a = r,
            r = r.return;
        return a.tag === 3 ? a.stateNode : null
    }
    var Ir = !1;
    function td(r) {
        r.updateQueue = {
            baseState: r.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function Bm(r, i) {
        r = r.updateQueue,
        i.updateQueue === r && (i.updateQueue = {
            baseState: r.baseState,
            firstBaseUpdate: r.firstBaseUpdate,
            lastBaseUpdate: r.lastBaseUpdate,
            shared: r.shared,
            effects: r.effects
        })
    }
    function dr(r, i) {
        return {
            eventTime: r,
            lane: i,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Lr(r, i, a) {
        var c = r.updateQueue;
        if (c === null)
            return null;
        if (c = c.shared,
        ($e & 2) !== 0) {
            var p = c.pending;
            return p === null ? i.next = i : (i.next = p.next,
            p.next = i),
            c.pending = i,
            cr(r, a)
        }
        return p = c.interleaved,
        p === null ? (i.next = i,
        ed(c)) : (i.next = p.next,
        p.next = i),
        c.interleaved = i,
        cr(r, a)
    }
    function Ga(r, i, a) {
        if (i = i.updateQueue,
        i !== null && (i = i.shared,
        (a & 4194240) !== 0)) {
            var c = i.lanes;
            c &= r.pendingLanes,
            a |= c,
            i.lanes = a,
            mc(r, a)
        }
    }
    function zm(r, i) {
        var a = r.updateQueue
          , c = r.alternate;
        if (c !== null && (c = c.updateQueue,
        a === c)) {
            var p = null
              , g = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var x = {
                        eventTime: a.eventTime,
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: a.callback,
                        next: null
                    };
                    g === null ? p = g = x : g = g.next = x,
                    a = a.next
                } while (a !== null);
                g === null ? p = g = i : g = g.next = i
            } else
                p = g = i;
            a = {
                baseState: c.baseState,
                firstBaseUpdate: p,
                lastBaseUpdate: g,
                shared: c.shared,
                effects: c.effects
            },
            r.updateQueue = a;
            return
        }
        r = a.lastBaseUpdate,
        r === null ? a.firstBaseUpdate = i : r.next = i,
        a.lastBaseUpdate = i
    }
    function Xa(r, i, a, c) {
        var p = r.updateQueue;
        Ir = !1;
        var g = p.firstBaseUpdate
          , x = p.lastBaseUpdate
          , k = p.shared.pending;
        if (k !== null) {
            p.shared.pending = null;
            var N = k
              , $ = N.next;
            N.next = null,
            x === null ? g = $ : x.next = $,
            x = N;
            var ee = r.alternate;
            ee !== null && (ee = ee.updateQueue,
            k = ee.lastBaseUpdate,
            k !== x && (k === null ? ee.firstBaseUpdate = $ : k.next = $,
            ee.lastBaseUpdate = N))
        }
        if (g !== null) {
            var te = p.baseState;
            x = 0,
            ee = $ = N = null,
            k = g;
            do {
                var Y = k.lane
                  , he = k.eventTime;
                if ((c & Y) === Y) {
                    ee !== null && (ee = ee.next = {
                        eventTime: he,
                        lane: 0,
                        tag: k.tag,
                        payload: k.payload,
                        callback: k.callback,
                        next: null
                    });
                    e: {
                        var ve = r
                          , xe = k;
                        switch (Y = i,
                        he = a,
                        xe.tag) {
                        case 1:
                            if (ve = xe.payload,
                            typeof ve == "function") {
                                te = ve.call(he, te, Y);
                                break e
                            }
                            te = ve;
                            break e;
                        case 3:
                            ve.flags = ve.flags & -65537 | 128;
                        case 0:
                            if (ve = xe.payload,
                            Y = typeof ve == "function" ? ve.call(he, te, Y) : ve,
                            Y == null)
                                break e;
                            te = ne({}, te, Y);
                            break e;
                        case 2:
                            Ir = !0
                        }
                    }
                    k.callback !== null && k.lane !== 0 && (r.flags |= 64,
                    Y = p.effects,
                    Y === null ? p.effects = [k] : Y.push(k))
                } else
                    he = {
                        eventTime: he,
                        lane: Y,
                        tag: k.tag,
                        payload: k.payload,
                        callback: k.callback,
                        next: null
                    },
                    ee === null ? ($ = ee = he,
                    N = te) : ee = ee.next = he,
                    x |= Y;
                if (k = k.next,
                k === null) {
                    if (k = p.shared.pending,
                    k === null)
                        break;
                    Y = k,
                    k = Y.next,
                    Y.next = null,
                    p.lastBaseUpdate = Y,
                    p.shared.pending = null
                }
            } while (!0);
            if (ee === null && (N = te),
            p.baseState = N,
            p.firstBaseUpdate = $,
            p.lastBaseUpdate = ee,
            i = p.shared.interleaved,
            i !== null) {
                p = i;
                do
                    x |= p.lane,
                    p = p.next;
                while (p !== i)
            } else
                g === null && (p.shared.lanes = 0);
            pi |= x,
            r.lanes = x,
            r.memoizedState = te
        }
    }
    function Um(r, i, a) {
        if (r = i.effects,
        i.effects = null,
        r !== null)
            for (i = 0; i < r.length; i++) {
                var c = r[i]
                  , p = c.callback;
                if (p !== null) {
                    if (c.callback = null,
                    c = a,
                    typeof p != "function")
                        throw Error(n(191, p));
                    p.call(c)
                }
            }
    }
    var lo = {}
      , Hn = Or(lo)
      , uo = Or(lo)
      , co = Or(lo);
    function fi(r) {
        if (r === lo)
            throw Error(n(174));
        return r
    }
    function nd(r, i) {
        switch (Xe(co, i),
        Xe(uo, r),
        Xe(Hn, lo),
        r = i.nodeType,
        r) {
        case 9:
        case 11:
            i = (i = i.documentElement) ? i.namespaceURI : oe(null, "");
            break;
        default:
            r = r === 8 ? i.parentNode : i,
            i = r.namespaceURI || null,
            r = r.tagName,
            i = oe(i, r)
        }
        Je(Hn),
        Xe(Hn, i)
    }
    function is() {
        Je(Hn),
        Je(uo),
        Je(co)
    }
    function $m(r) {
        fi(co.current);
        var i = fi(Hn.current)
          , a = oe(i, r.type);
        i !== a && (Xe(uo, r),
        Xe(Hn, a))
    }
    function rd(r) {
        uo.current === r && (Je(Hn),
        Je(uo))
    }
    var rt = Or(0);
    function Ya(r) {
        for (var i = r; i !== null; ) {
            if (i.tag === 13) {
                var a = i.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || a.data === "$?" || a.data === "$!"))
                    return i
            } else if (i.tag === 19 && i.memoizedProps.revealOrder !== void 0) {
                if ((i.flags & 128) !== 0)
                    return i
            } else if (i.child !== null) {
                i.child.return = i,
                i = i.child;
                continue
            }
            if (i === r)
                break;
            for (; i.sibling === null; ) {
                if (i.return === null || i.return === r)
                    return null;
                i = i.return
            }
            i.sibling.return = i.return,
            i = i.sibling
        }
        return null
    }
    var id = [];
    function sd() {
        for (var r = 0; r < id.length; r++)
            id[r]._workInProgressVersionPrimary = null;
        id.length = 0
    }
    var Ja = I.ReactCurrentDispatcher
      , od = I.ReactCurrentBatchConfig
      , hi = 0
      , it = null
      , wt = null
      , _t = null
      , el = !1
      , fo = !1
      , ho = 0
      , mT = 0;
    function jt() {
        throw Error(n(321))
    }
    function ad(r, i) {
        if (i === null)
            return !1;
        for (var a = 0; a < i.length && a < r.length; a++)
            if (!Pn(r[a], i[a]))
                return !1;
        return !0
    }
    function ld(r, i, a, c, p, g) {
        if (hi = g,
        it = i,
        i.memoizedState = null,
        i.updateQueue = null,
        i.lanes = 0,
        Ja.current = r === null || r.memoizedState === null ? xT : wT,
        r = a(c, p),
        fo) {
            g = 0;
            do {
                if (fo = !1,
                ho = 0,
                25 <= g)
                    throw Error(n(301));
                g += 1,
                _t = wt = null,
                i.updateQueue = null,
                Ja.current = ST,
                r = a(c, p)
            } while (fo)
        }
        if (Ja.current = rl,
        i = wt !== null && wt.next !== null,
        hi = 0,
        _t = wt = it = null,
        el = !1,
        i)
            throw Error(n(300));
        return r
    }
    function ud() {
        var r = ho !== 0;
        return ho = 0,
        r
    }
    function Wn() {
        var r = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return _t === null ? it.memoizedState = _t = r : _t = _t.next = r,
        _t
    }
    function vn() {
        if (wt === null) {
            var r = it.alternate;
            r = r !== null ? r.memoizedState : null
        } else
            r = wt.next;
        var i = _t === null ? it.memoizedState : _t.next;
        if (i !== null)
            _t = i,
            wt = r;
        else {
            if (r === null)
                throw Error(n(310));
            wt = r,
            r = {
                memoizedState: wt.memoizedState,
                baseState: wt.baseState,
                baseQueue: wt.baseQueue,
                queue: wt.queue,
                next: null
            },
            _t === null ? it.memoizedState = _t = r : _t = _t.next = r
        }
        return _t
    }
    function po(r, i) {
        return typeof i == "function" ? i(r) : i
    }
    function cd(r) {
        var i = vn()
          , a = i.queue;
        if (a === null)
            throw Error(n(311));
        a.lastRenderedReducer = r;
        var c = wt
          , p = c.baseQueue
          , g = a.pending;
        if (g !== null) {
            if (p !== null) {
                var x = p.next;
                p.next = g.next,
                g.next = x
            }
            c.baseQueue = p = g,
            a.pending = null
        }
        if (p !== null) {
            g = p.next,
            c = c.baseState;
            var k = x = null
              , N = null
              , $ = g;
            do {
                var ee = $.lane;
                if ((hi & ee) === ee)
                    N !== null && (N = N.next = {
                        lane: 0,
                        action: $.action,
                        hasEagerState: $.hasEagerState,
                        eagerState: $.eagerState,
                        next: null
                    }),
                    c = $.hasEagerState ? $.eagerState : r(c, $.action);
                else {
                    var te = {
                        lane: ee,
                        action: $.action,
                        hasEagerState: $.hasEagerState,
                        eagerState: $.eagerState,
                        next: null
                    };
                    N === null ? (k = N = te,
                    x = c) : N = N.next = te,
                    it.lanes |= ee,
                    pi |= ee
                }
                $ = $.next
            } while ($ !== null && $ !== g);
            N === null ? x = c : N.next = k,
            Pn(c, i.memoizedState) || (Jt = !0),
            i.memoizedState = c,
            i.baseState = x,
            i.baseQueue = N,
            a.lastRenderedState = c
        }
        if (r = a.interleaved,
        r !== null) {
            p = r;
            do
                g = p.lane,
                it.lanes |= g,
                pi |= g,
                p = p.next;
            while (p !== r)
        } else
            p === null && (a.lanes = 0);
        return [i.memoizedState, a.dispatch]
    }
    function dd(r) {
        var i = vn()
          , a = i.queue;
        if (a === null)
            throw Error(n(311));
        a.lastRenderedReducer = r;
        var c = a.dispatch
          , p = a.pending
          , g = i.memoizedState;
        if (p !== null) {
            a.pending = null;
            var x = p = p.next;
            do
                g = r(g, x.action),
                x = x.next;
            while (x !== p);
            Pn(g, i.memoizedState) || (Jt = !0),
            i.memoizedState = g,
            i.baseQueue === null && (i.baseState = g),
            a.lastRenderedState = g
        }
        return [g, c]
    }
    function Hm() {}
    function Wm(r, i) {
        var a = it
          , c = vn()
          , p = i()
          , g = !Pn(c.memoizedState, p);
        if (g && (c.memoizedState = p,
        Jt = !0),
        c = c.queue,
        fd(Km.bind(null, a, c, r), [r]),
        c.getSnapshot !== i || g || _t !== null && _t.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            mo(9, Qm.bind(null, a, c, p, i), void 0, null),
            Pt === null)
                throw Error(n(349));
            (hi & 30) !== 0 || qm(a, i, p)
        }
        return p
    }
    function qm(r, i, a) {
        r.flags |= 16384,
        r = {
            getSnapshot: i,
            value: a
        },
        i = it.updateQueue,
        i === null ? (i = {
            lastEffect: null,
            stores: null
        },
        it.updateQueue = i,
        i.stores = [r]) : (a = i.stores,
        a === null ? i.stores = [r] : a.push(r))
    }
    function Qm(r, i, a, c) {
        i.value = a,
        i.getSnapshot = c,
        Zm(i) && Gm(r)
    }
    function Km(r, i, a) {
        return a(function() {
            Zm(i) && Gm(r)
        })
    }
    function Zm(r) {
        var i = r.getSnapshot;
        r = r.value;
        try {
            var a = i();
            return !Pn(r, a)
        } catch {
            return !0
        }
    }
    function Gm(r) {
        var i = cr(r, 1);
        i !== null && Rn(i, r, 1, -1)
    }
    function Xm(r) {
        var i = Wn();
        return typeof r == "function" && (r = r()),
        i.memoizedState = i.baseState = r,
        r = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: po,
            lastRenderedState: r
        },
        i.queue = r,
        r = r.dispatch = vT.bind(null, it, r),
        [i.memoizedState, r]
    }
    function mo(r, i, a, c) {
        return r = {
            tag: r,
            create: i,
            destroy: a,
            deps: c,
            next: null
        },
        i = it.updateQueue,
        i === null ? (i = {
            lastEffect: null,
            stores: null
        },
        it.updateQueue = i,
        i.lastEffect = r.next = r) : (a = i.lastEffect,
        a === null ? i.lastEffect = r.next = r : (c = a.next,
        a.next = r,
        r.next = c,
        i.lastEffect = r)),
        r
    }
    function Ym() {
        return vn().memoizedState
    }
    function tl(r, i, a, c) {
        var p = Wn();
        it.flags |= r,
        p.memoizedState = mo(1 | i, a, void 0, c === void 0 ? null : c)
    }
    function nl(r, i, a, c) {
        var p = vn();
        c = c === void 0 ? null : c;
        var g = void 0;
        if (wt !== null) {
            var x = wt.memoizedState;
            if (g = x.destroy,
            c !== null && ad(c, x.deps)) {
                p.memoizedState = mo(i, a, g, c);
                return
            }
        }
        it.flags |= r,
        p.memoizedState = mo(1 | i, a, g, c)
    }
    function Jm(r, i) {
        return tl(8390656, 8, r, i)
    }
    function fd(r, i) {
        return nl(2048, 8, r, i)
    }
    function eg(r, i) {
        return nl(4, 2, r, i)
    }
    function tg(r, i) {
        return nl(4, 4, r, i)
    }
    function ng(r, i) {
        if (typeof i == "function")
            return r = r(),
            i(r),
            function() {
                i(null)
            }
            ;
        if (i != null)
            return r = r(),
            i.current = r,
            function() {
                i.current = null
            }
    }
    function rg(r, i, a) {
        return a = a != null ? a.concat([r]) : null,
        nl(4, 4, ng.bind(null, i, r), a)
    }
    function hd() {}
    function ig(r, i) {
        var a = vn();
        i = i === void 0 ? null : i;
        var c = a.memoizedState;
        return c !== null && i !== null && ad(i, c[1]) ? c[0] : (a.memoizedState = [r, i],
        r)
    }
    function sg(r, i) {
        var a = vn();
        i = i === void 0 ? null : i;
        var c = a.memoizedState;
        return c !== null && i !== null && ad(i, c[1]) ? c[0] : (r = r(),
        a.memoizedState = [r, i],
        r)
    }
    function og(r, i, a) {
        return (hi & 21) === 0 ? (r.baseState && (r.baseState = !1,
        Jt = !0),
        r.memoizedState = a) : (Pn(a, i) || (a = Lp(),
        it.lanes |= a,
        pi |= a,
        r.baseState = !0),
        i)
    }
    function gT(r, i) {
        var a = Qe;
        Qe = a !== 0 && 4 > a ? a : 4,
        r(!0);
        var c = od.transition;
        od.transition = {};
        try {
            r(!1),
            i()
        } finally {
            Qe = a,
            od.transition = c
        }
    }
    function ag() {
        return vn().memoizedState
    }
    function yT(r, i, a) {
        var c = Br(r);
        if (a = {
            lane: c,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        lg(r))
            ug(i, a);
        else if (a = Fm(r, i, a, c),
        a !== null) {
            var p = qt();
            Rn(a, r, c, p),
            cg(a, i, c)
        }
    }
    function vT(r, i, a) {
        var c = Br(r)
          , p = {
            lane: c,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (lg(r))
            ug(i, p);
        else {
            var g = r.alternate;
            if (r.lanes === 0 && (g === null || g.lanes === 0) && (g = i.lastRenderedReducer,
            g !== null))
                try {
                    var x = i.lastRenderedState
                      , k = g(x, a);
                    if (p.hasEagerState = !0,
                    p.eagerState = k,
                    Pn(k, x)) {
                        var N = i.interleaved;
                        N === null ? (p.next = p,
                        ed(i)) : (p.next = N.next,
                        N.next = p),
                        i.interleaved = p;
                        return
                    }
                } catch {}
            a = Fm(r, i, p, c),
            a !== null && (p = qt(),
            Rn(a, r, c, p),
            cg(a, i, c))
        }
    }
    function lg(r) {
        var i = r.alternate;
        return r === it || i !== null && i === it
    }
    function ug(r, i) {
        fo = el = !0;
        var a = r.pending;
        a === null ? i.next = i : (i.next = a.next,
        a.next = i),
        r.pending = i
    }
    function cg(r, i, a) {
        if ((a & 4194240) !== 0) {
            var c = i.lanes;
            c &= r.pendingLanes,
            a |= c,
            i.lanes = a,
            mc(r, a)
        }
    }
    var rl = {
        readContext: yn,
        useCallback: jt,
        useContext: jt,
        useEffect: jt,
        useImperativeHandle: jt,
        useInsertionEffect: jt,
        useLayoutEffect: jt,
        useMemo: jt,
        useReducer: jt,
        useRef: jt,
        useState: jt,
        useDebugValue: jt,
        useDeferredValue: jt,
        useTransition: jt,
        useMutableSource: jt,
        useSyncExternalStore: jt,
        useId: jt,
        unstable_isNewReconciler: !1
    }
      , xT = {
        readContext: yn,
        useCallback: function(r, i) {
            return Wn().memoizedState = [r, i === void 0 ? null : i],
            r
        },
        useContext: yn,
        useEffect: Jm,
        useImperativeHandle: function(r, i, a) {
            return a = a != null ? a.concat([r]) : null,
            tl(4194308, 4, ng.bind(null, i, r), a)
        },
        useLayoutEffect: function(r, i) {
            return tl(4194308, 4, r, i)
        },
        useInsertionEffect: function(r, i) {
            return tl(4, 2, r, i)
        },
        useMemo: function(r, i) {
            var a = Wn();
            return i = i === void 0 ? null : i,
            r = r(),
            a.memoizedState = [r, i],
            r
        },
        useReducer: function(r, i, a) {
            var c = Wn();
            return i = a !== void 0 ? a(i) : i,
            c.memoizedState = c.baseState = i,
            r = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: r,
                lastRenderedState: i
            },
            c.queue = r,
            r = r.dispatch = yT.bind(null, it, r),
            [c.memoizedState, r]
        },
        useRef: function(r) {
            var i = Wn();
            return r = {
                current: r
            },
            i.memoizedState = r
        },
        useState: Xm,
        useDebugValue: hd,
        useDeferredValue: function(r) {
            return Wn().memoizedState = r
        },
        useTransition: function() {
            var r = Xm(!1)
              , i = r[0];
            return r = gT.bind(null, r[1]),
            Wn().memoizedState = r,
            [i, r]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(r, i, a) {
            var c = it
              , p = Wn();
            if (tt) {
                if (a === void 0)
                    throw Error(n(407));
                a = a()
            } else {
                if (a = i(),
                Pt === null)
                    throw Error(n(349));
                (hi & 30) !== 0 || qm(c, i, a)
            }
            p.memoizedState = a;
            var g = {
                value: a,
                getSnapshot: i
            };
            return p.queue = g,
            Jm(Km.bind(null, c, g, r), [r]),
            c.flags |= 2048,
            mo(9, Qm.bind(null, c, g, a, i), void 0, null),
            a
        },
        useId: function() {
            var r = Wn()
              , i = Pt.identifierPrefix;
            if (tt) {
                var a = ur
                  , c = lr;
                a = (c & ~(1 << 32 - _n(c) - 1)).toString(32) + a,
                i = ":" + i + "R" + a,
                a = ho++,
                0 < a && (i += "H" + a.toString(32)),
                i += ":"
            } else
                a = mT++,
                i = ":" + i + "r" + a.toString(32) + ":";
            return r.memoizedState = i
        },
        unstable_isNewReconciler: !1
    }
      , wT = {
        readContext: yn,
        useCallback: ig,
        useContext: yn,
        useEffect: fd,
        useImperativeHandle: rg,
        useInsertionEffect: eg,
        useLayoutEffect: tg,
        useMemo: sg,
        useReducer: cd,
        useRef: Ym,
        useState: function() {
            return cd(po)
        },
        useDebugValue: hd,
        useDeferredValue: function(r) {
            var i = vn();
            return og(i, wt.memoizedState, r)
        },
        useTransition: function() {
            var r = cd(po)[0]
              , i = vn().memoizedState;
            return [r, i]
        },
        useMutableSource: Hm,
        useSyncExternalStore: Wm,
        useId: ag,
        unstable_isNewReconciler: !1
    }
      , ST = {
        readContext: yn,
        useCallback: ig,
        useContext: yn,
        useEffect: fd,
        useImperativeHandle: rg,
        useInsertionEffect: eg,
        useLayoutEffect: tg,
        useMemo: sg,
        useReducer: dd,
        useRef: Ym,
        useState: function() {
            return dd(po)
        },
        useDebugValue: hd,
        useDeferredValue: function(r) {
            var i = vn();
            return wt === null ? i.memoizedState = r : og(i, wt.memoizedState, r)
        },
        useTransition: function() {
            var r = dd(po)[0]
              , i = vn().memoizedState;
            return [r, i]
        },
        useMutableSource: Hm,
        useSyncExternalStore: Wm,
        useId: ag,
        unstable_isNewReconciler: !1
    };
    function En(r, i) {
        if (r && r.defaultProps) {
            i = ne({}, i),
            r = r.defaultProps;
            for (var a in r)
                i[a] === void 0 && (i[a] = r[a]);
            return i
        }
        return i
    }
    function pd(r, i, a, c) {
        i = r.memoizedState,
        a = a(c, i),
        a = a == null ? i : ne({}, i, a),
        r.memoizedState = a,
        r.lanes === 0 && (r.updateQueue.baseState = a)
    }
    var il = {
        isMounted: function(r) {
            return (r = r._reactInternals) ? oi(r) === r : !1
        },
        enqueueSetState: function(r, i, a) {
            r = r._reactInternals;
            var c = qt()
              , p = Br(r)
              , g = dr(c, p);
            g.payload = i,
            a != null && (g.callback = a),
            i = Lr(r, g, p),
            i !== null && (Rn(i, r, p, c),
            Ga(i, r, p))
        },
        enqueueReplaceState: function(r, i, a) {
            r = r._reactInternals;
            var c = qt()
              , p = Br(r)
              , g = dr(c, p);
            g.tag = 1,
            g.payload = i,
            a != null && (g.callback = a),
            i = Lr(r, g, p),
            i !== null && (Rn(i, r, p, c),
            Ga(i, r, p))
        },
        enqueueForceUpdate: function(r, i) {
            r = r._reactInternals;
            var a = qt()
              , c = Br(r)
              , p = dr(a, c);
            p.tag = 2,
            i != null && (p.callback = i),
            i = Lr(r, p, c),
            i !== null && (Rn(i, r, c, a),
            Ga(i, r, c))
        }
    };
    function dg(r, i, a, c, p, g, x) {
        return r = r.stateNode,
        typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(c, g, x) : i.prototype && i.prototype.isPureReactComponent ? !eo(a, c) || !eo(p, g) : !0
    }
    function fg(r, i, a) {
        var c = !1
          , p = Dr
          , g = i.contextType;
        return typeof g == "object" && g !== null ? g = yn(g) : (p = Yt(i) ? li : Lt.current,
        c = i.contextTypes,
        g = (c = c != null) ? Xi(r, p) : Dr),
        i = new i(a,g),
        r.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        i.updater = il,
        r.stateNode = i,
        i._reactInternals = r,
        c && (r = r.stateNode,
        r.__reactInternalMemoizedUnmaskedChildContext = p,
        r.__reactInternalMemoizedMaskedChildContext = g),
        i
    }
    function hg(r, i, a, c) {
        r = i.state,
        typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(a, c),
        typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(a, c),
        i.state !== r && il.enqueueReplaceState(i, i.state, null)
    }
    function md(r, i, a, c) {
        var p = r.stateNode;
        p.props = a,
        p.state = r.memoizedState,
        p.refs = {},
        td(r);
        var g = i.contextType;
        typeof g == "object" && g !== null ? p.context = yn(g) : (g = Yt(i) ? li : Lt.current,
        p.context = Xi(r, g)),
        p.state = r.memoizedState,
        g = i.getDerivedStateFromProps,
        typeof g == "function" && (pd(r, i, g, a),
        p.state = r.memoizedState),
        typeof i.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (i = p.state,
        typeof p.componentWillMount == "function" && p.componentWillMount(),
        typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(),
        i !== p.state && il.enqueueReplaceState(p, p.state, null),
        Xa(r, a, p, c),
        p.state = r.memoizedState),
        typeof p.componentDidMount == "function" && (r.flags |= 4194308)
    }
    function ss(r, i) {
        try {
            var a = ""
              , c = i;
            do
                a += Ie(c),
                c = c.return;
            while (c);
            var p = a
        } catch (g) {
            p = `
Error generating stack: ` + g.message + `
` + g.stack
        }
        return {
            value: r,
            source: i,
            stack: p,
            digest: null
        }
    }
    function gd(r, i, a) {
        return {
            value: r,
            source: null,
            stack: a ?? null,
            digest: i ?? null
        }
    }
    function yd(r, i) {
        try {
            console.error(i.value)
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    var bT = typeof WeakMap == "function" ? WeakMap : Map;
    function pg(r, i, a) {
        a = dr(-1, a),
        a.tag = 3,
        a.payload = {
            element: null
        };
        var c = i.value;
        return a.callback = function() {
            dl || (dl = !0,
            Od = c),
            yd(r, i)
        }
        ,
        a
    }
    function mg(r, i, a) {
        a = dr(-1, a),
        a.tag = 3;
        var c = r.type.getDerivedStateFromError;
        if (typeof c == "function") {
            var p = i.value;
            a.payload = function() {
                return c(p)
            }
            ,
            a.callback = function() {
                yd(r, i)
            }
        }
        var g = r.stateNode;
        return g !== null && typeof g.componentDidCatch == "function" && (a.callback = function() {
            yd(r, i),
            typeof c != "function" && (Vr === null ? Vr = new Set([this]) : Vr.add(this));
            var x = i.stack;
            this.componentDidCatch(i.value, {
                componentStack: x !== null ? x : ""
            })
        }
        ),
        a
    }
    function gg(r, i, a) {
        var c = r.pingCache;
        if (c === null) {
            c = r.pingCache = new bT;
            var p = new Set;
            c.set(i, p)
        } else
            p = c.get(i),
            p === void 0 && (p = new Set,
            c.set(i, p));
        p.has(a) || (p.add(a),
        r = LT.bind(null, r, i, a),
        i.then(r, r))
    }
    function yg(r) {
        do {
            var i;
            if ((i = r.tag === 13) && (i = r.memoizedState,
            i = i !== null ? i.dehydrated !== null : !0),
            i)
                return r;
            r = r.return
        } while (r !== null);
        return null
    }
    function vg(r, i, a, c, p) {
        return (r.mode & 1) === 0 ? (r === i ? r.flags |= 65536 : (r.flags |= 128,
        a.flags |= 131072,
        a.flags &= -52805,
        a.tag === 1 && (a.alternate === null ? a.tag = 17 : (i = dr(-1, 1),
        i.tag = 2,
        Lr(a, i, 1))),
        a.lanes |= 1),
        r) : (r.flags |= 65536,
        r.lanes = p,
        r)
    }
    var TT = I.ReactCurrentOwner
      , Jt = !1;
    function Wt(r, i, a, c) {
        i.child = r === null ? Vm(i, null, a, c) : ts(i, r.child, a, c)
    }
    function xg(r, i, a, c, p) {
        a = a.render;
        var g = i.ref;
        return rs(i, p),
        c = ld(r, i, a, c, g, p),
        a = ud(),
        r !== null && !Jt ? (i.updateQueue = r.updateQueue,
        i.flags &= -2053,
        r.lanes &= ~p,
        fr(r, i, p)) : (tt && a && Wc(i),
        i.flags |= 1,
        Wt(r, i, c, p),
        i.child)
    }
    function wg(r, i, a, c, p) {
        if (r === null) {
            var g = a.type;
            return typeof g == "function" && !Fd(g) && g.defaultProps === void 0 && a.compare === null && a.defaultProps === void 0 ? (i.tag = 15,
            i.type = g,
            Sg(r, i, g, c, p)) : (r = yl(a.type, null, c, i, i.mode, p),
            r.ref = i.ref,
            r.return = i,
            i.child = r)
        }
        if (g = r.child,
        (r.lanes & p) === 0) {
            var x = g.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : eo,
            a(x, c) && r.ref === i.ref)
                return fr(r, i, p)
        }
        return i.flags |= 1,
        r = Ur(g, c),
        r.ref = i.ref,
        r.return = i,
        i.child = r
    }
    function Sg(r, i, a, c, p) {
        if (r !== null) {
            var g = r.memoizedProps;
            if (eo(g, c) && r.ref === i.ref)
                if (Jt = !1,
                i.pendingProps = c = g,
                (r.lanes & p) !== 0)
                    (r.flags & 131072) !== 0 && (Jt = !0);
                else
                    return i.lanes = r.lanes,
                    fr(r, i, p)
        }
        return vd(r, i, a, c, p)
    }
    function bg(r, i, a) {
        var c = i.pendingProps
          , p = c.children
          , g = r !== null ? r.memoizedState : null;
        if (c.mode === "hidden")
            if ((i.mode & 1) === 0)
                i.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Xe(as, ln),
                ln |= a;
            else {
                if ((a & 1073741824) === 0)
                    return r = g !== null ? g.baseLanes | a : a,
                    i.lanes = i.childLanes = 1073741824,
                    i.memoizedState = {
                        baseLanes: r,
                        cachePool: null,
                        transitions: null
                    },
                    i.updateQueue = null,
                    Xe(as, ln),
                    ln |= r,
                    null;
                i.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                c = g !== null ? g.baseLanes : a,
                Xe(as, ln),
                ln |= c
            }
        else
            g !== null ? (c = g.baseLanes | a,
            i.memoizedState = null) : c = a,
            Xe(as, ln),
            ln |= c;
        return Wt(r, i, p, a),
        i.child
    }
    function Tg(r, i) {
        var a = i.ref;
        (r === null && a !== null || r !== null && r.ref !== a) && (i.flags |= 512,
        i.flags |= 2097152)
    }
    function vd(r, i, a, c, p) {
        var g = Yt(a) ? li : Lt.current;
        return g = Xi(i, g),
        rs(i, p),
        a = ld(r, i, a, c, g, p),
        c = ud(),
        r !== null && !Jt ? (i.updateQueue = r.updateQueue,
        i.flags &= -2053,
        r.lanes &= ~p,
        fr(r, i, p)) : (tt && c && Wc(i),
        i.flags |= 1,
        Wt(r, i, a, p),
        i.child)
    }
    function _g(r, i, a, c, p) {
        if (Yt(a)) {
            var g = !0;
            Ua(i)
        } else
            g = !1;
        if (rs(i, p),
        i.stateNode === null)
            ol(r, i),
            fg(i, a, c),
            md(i, a, c, p),
            c = !0;
        else if (r === null) {
            var x = i.stateNode
              , k = i.memoizedProps;
            x.props = k;
            var N = x.context
              , $ = a.contextType;
            typeof $ == "object" && $ !== null ? $ = yn($) : ($ = Yt(a) ? li : Lt.current,
            $ = Xi(i, $));
            var ee = a.getDerivedStateFromProps
              , te = typeof ee == "function" || typeof x.getSnapshotBeforeUpdate == "function";
            te || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (k !== c || N !== $) && hg(i, x, c, $),
            Ir = !1;
            var Y = i.memoizedState;
            x.state = Y,
            Xa(i, c, x, p),
            N = i.memoizedState,
            k !== c || Y !== N || Xt.current || Ir ? (typeof ee == "function" && (pd(i, a, ee, c),
            N = i.memoizedState),
            (k = Ir || dg(i, a, k, c, Y, N, $)) ? (te || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(),
            typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()),
            typeof x.componentDidMount == "function" && (i.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (i.flags |= 4194308),
            i.memoizedProps = c,
            i.memoizedState = N),
            x.props = c,
            x.state = N,
            x.context = $,
            c = k) : (typeof x.componentDidMount == "function" && (i.flags |= 4194308),
            c = !1)
        } else {
            x = i.stateNode,
            Bm(r, i),
            k = i.memoizedProps,
            $ = i.type === i.elementType ? k : En(i.type, k),
            x.props = $,
            te = i.pendingProps,
            Y = x.context,
            N = a.contextType,
            typeof N == "object" && N !== null ? N = yn(N) : (N = Yt(a) ? li : Lt.current,
            N = Xi(i, N));
            var he = a.getDerivedStateFromProps;
            (ee = typeof he == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (k !== te || Y !== N) && hg(i, x, c, N),
            Ir = !1,
            Y = i.memoizedState,
            x.state = Y,
            Xa(i, c, x, p);
            var ve = i.memoizedState;
            k !== te || Y !== ve || Xt.current || Ir ? (typeof he == "function" && (pd(i, a, he, c),
            ve = i.memoizedState),
            ($ = Ir || dg(i, a, $, c, Y, ve, N) || !1) ? (ee || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(c, ve, N),
            typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(c, ve, N)),
            typeof x.componentDidUpdate == "function" && (i.flags |= 4),
            typeof x.getSnapshotBeforeUpdate == "function" && (i.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || k === r.memoizedProps && Y === r.memoizedState || (i.flags |= 4),
            typeof x.getSnapshotBeforeUpdate != "function" || k === r.memoizedProps && Y === r.memoizedState || (i.flags |= 1024),
            i.memoizedProps = c,
            i.memoizedState = ve),
            x.props = c,
            x.state = ve,
            x.context = N,
            c = $) : (typeof x.componentDidUpdate != "function" || k === r.memoizedProps && Y === r.memoizedState || (i.flags |= 4),
            typeof x.getSnapshotBeforeUpdate != "function" || k === r.memoizedProps && Y === r.memoizedState || (i.flags |= 1024),
            c = !1)
        }
        return xd(r, i, a, c, g, p)
    }
    function xd(r, i, a, c, p, g) {
        Tg(r, i);
        var x = (i.flags & 128) !== 0;
        if (!c && !x)
            return p && Am(i, a, !1),
            fr(r, i, g);
        c = i.stateNode,
        TT.current = i;
        var k = x && typeof a.getDerivedStateFromError != "function" ? null : c.render();
        return i.flags |= 1,
        r !== null && x ? (i.child = ts(i, r.child, null, g),
        i.child = ts(i, null, k, g)) : Wt(r, i, k, g),
        i.memoizedState = c.state,
        p && Am(i, a, !0),
        i.child
    }
    function Pg(r) {
        var i = r.stateNode;
        i.pendingContext ? Em(r, i.pendingContext, i.pendingContext !== i.context) : i.context && Em(r, i.context, !1),
        nd(r, i.containerInfo)
    }
    function Cg(r, i, a, c, p) {
        return es(),
        Zc(p),
        i.flags |= 256,
        Wt(r, i, a, c),
        i.child
    }
    var wd = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Sd(r) {
        return {
            baseLanes: r,
            cachePool: null,
            transitions: null
        }
    }
    function Eg(r, i, a) {
        var c = i.pendingProps, p = rt.current, g = !1, x = (i.flags & 128) !== 0, k;
        if ((k = x) || (k = r !== null && r.memoizedState === null ? !1 : (p & 2) !== 0),
        k ? (g = !0,
        i.flags &= -129) : (r === null || r.memoizedState !== null) && (p |= 1),
        Xe(rt, p & 1),
        r === null)
            return Kc(i),
            r = i.memoizedState,
            r !== null && (r = r.dehydrated,
            r !== null) ? ((i.mode & 1) === 0 ? i.lanes = 1 : r.data === "$!" ? i.lanes = 8 : i.lanes = 1073741824,
            null) : (x = c.children,
            r = c.fallback,
            g ? (c = i.mode,
            g = i.child,
            x = {
                mode: "hidden",
                children: x
            },
            (c & 1) === 0 && g !== null ? (g.childLanes = 0,
            g.pendingProps = x) : g = vl(x, c, 0, null),
            r = vi(r, c, a, null),
            g.return = i,
            r.return = i,
            g.sibling = r,
            i.child = g,
            i.child.memoizedState = Sd(a),
            i.memoizedState = wd,
            r) : bd(i, x));
        if (p = r.memoizedState,
        p !== null && (k = p.dehydrated,
        k !== null))
            return _T(r, i, x, c, k, p, a);
        if (g) {
            g = c.fallback,
            x = i.mode,
            p = r.child,
            k = p.sibling;
            var N = {
                mode: "hidden",
                children: c.children
            };
            return (x & 1) === 0 && i.child !== p ? (c = i.child,
            c.childLanes = 0,
            c.pendingProps = N,
            i.deletions = null) : (c = Ur(p, N),
            c.subtreeFlags = p.subtreeFlags & 14680064),
            k !== null ? g = Ur(k, g) : (g = vi(g, x, a, null),
            g.flags |= 2),
            g.return = i,
            c.return = i,
            c.sibling = g,
            i.child = c,
            c = g,
            g = i.child,
            x = r.child.memoizedState,
            x = x === null ? Sd(a) : {
                baseLanes: x.baseLanes | a,
                cachePool: null,
                transitions: x.transitions
            },
            g.memoizedState = x,
            g.childLanes = r.childLanes & ~a,
            i.memoizedState = wd,
            c
        }
        return g = r.child,
        r = g.sibling,
        c = Ur(g, {
            mode: "visible",
            children: c.children
        }),
        (i.mode & 1) === 0 && (c.lanes = a),
        c.return = i,
        c.sibling = null,
        r !== null && (a = i.deletions,
        a === null ? (i.deletions = [r],
        i.flags |= 16) : a.push(r)),
        i.child = c,
        i.memoizedState = null,
        c
    }
    function bd(r, i) {
        return i = vl({
            mode: "visible",
            children: i
        }, r.mode, 0, null),
        i.return = r,
        r.child = i
    }
    function sl(r, i, a, c) {
        return c !== null && Zc(c),
        ts(i, r.child, null, a),
        r = bd(i, i.pendingProps.children),
        r.flags |= 2,
        i.memoizedState = null,
        r
    }
    function _T(r, i, a, c, p, g, x) {
        if (a)
            return i.flags & 256 ? (i.flags &= -257,
            c = gd(Error(n(422))),
            sl(r, i, x, c)) : i.memoizedState !== null ? (i.child = r.child,
            i.flags |= 128,
            null) : (g = c.fallback,
            p = i.mode,
            c = vl({
                mode: "visible",
                children: c.children
            }, p, 0, null),
            g = vi(g, p, x, null),
            g.flags |= 2,
            c.return = i,
            g.return = i,
            c.sibling = g,
            i.child = c,
            (i.mode & 1) !== 0 && ts(i, r.child, null, x),
            i.child.memoizedState = Sd(x),
            i.memoizedState = wd,
            g);
        if ((i.mode & 1) === 0)
            return sl(r, i, x, null);
        if (p.data === "$!") {
            if (c = p.nextSibling && p.nextSibling.dataset,
            c)
                var k = c.dgst;
            return c = k,
            g = Error(n(419)),
            c = gd(g, c, void 0),
            sl(r, i, x, c)
        }
        if (k = (x & r.childLanes) !== 0,
        Jt || k) {
            if (c = Pt,
            c !== null) {
                switch (x & -x) {
                case 4:
                    p = 2;
                    break;
                case 16:
                    p = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    p = 32;
                    break;
                case 536870912:
                    p = 268435456;
                    break;
                default:
                    p = 0
                }
                p = (p & (c.suspendedLanes | x)) !== 0 ? 0 : p,
                p !== 0 && p !== g.retryLane && (g.retryLane = p,
                cr(r, p),
                Rn(c, r, p, -1))
            }
            return Vd(),
            c = gd(Error(n(421))),
            sl(r, i, x, c)
        }
        return p.data === "$?" ? (i.flags |= 128,
        i.child = r.child,
        i = jT.bind(null, r),
        p._reactRetry = i,
        null) : (r = g.treeContext,
        an = Nr(p.nextSibling),
        on = i,
        tt = !0,
        Cn = null,
        r !== null && (mn[gn++] = lr,
        mn[gn++] = ur,
        mn[gn++] = ui,
        lr = r.id,
        ur = r.overflow,
        ui = i),
        i = bd(i, c.children),
        i.flags |= 4096,
        i)
    }
    function kg(r, i, a) {
        r.lanes |= i;
        var c = r.alternate;
        c !== null && (c.lanes |= i),
        Jc(r.return, i, a)
    }
    function Td(r, i, a, c, p) {
        var g = r.memoizedState;
        g === null ? r.memoizedState = {
            isBackwards: i,
            rendering: null,
            renderingStartTime: 0,
            last: c,
            tail: a,
            tailMode: p
        } : (g.isBackwards = i,
        g.rendering = null,
        g.renderingStartTime = 0,
        g.last = c,
        g.tail = a,
        g.tailMode = p)
    }
    function Ag(r, i, a) {
        var c = i.pendingProps
          , p = c.revealOrder
          , g = c.tail;
        if (Wt(r, i, c.children, a),
        c = rt.current,
        (c & 2) !== 0)
            c = c & 1 | 2,
            i.flags |= 128;
        else {
            if (r !== null && (r.flags & 128) !== 0)
                e: for (r = i.child; r !== null; ) {
                    if (r.tag === 13)
                        r.memoizedState !== null && kg(r, a, i);
                    else if (r.tag === 19)
                        kg(r, a, i);
                    else if (r.child !== null) {
                        r.child.return = r,
                        r = r.child;
                        continue
                    }
                    if (r === i)
                        break e;
                    for (; r.sibling === null; ) {
                        if (r.return === null || r.return === i)
                            break e;
                        r = r.return
                    }
                    r.sibling.return = r.return,
                    r = r.sibling
                }
            c &= 1
        }
        if (Xe(rt, c),
        (i.mode & 1) === 0)
            i.memoizedState = null;
        else
            switch (p) {
            case "forwards":
                for (a = i.child,
                p = null; a !== null; )
                    r = a.alternate,
                    r !== null && Ya(r) === null && (p = a),
                    a = a.sibling;
                a = p,
                a === null ? (p = i.child,
                i.child = null) : (p = a.sibling,
                a.sibling = null),
                Td(i, !1, p, a, g);
                break;
            case "backwards":
                for (a = null,
                p = i.child,
                i.child = null; p !== null; ) {
                    if (r = p.alternate,
                    r !== null && Ya(r) === null) {
                        i.child = p;
                        break
                    }
                    r = p.sibling,
                    p.sibling = a,
                    a = p,
                    p = r
                }
                Td(i, !0, a, null, g);
                break;
            case "together":
                Td(i, !1, null, null, void 0);
                break;
            default:
                i.memoizedState = null
            }
        return i.child
    }
    function ol(r, i) {
        (i.mode & 1) === 0 && r !== null && (r.alternate = null,
        i.alternate = null,
        i.flags |= 2)
    }
    function fr(r, i, a) {
        if (r !== null && (i.dependencies = r.dependencies),
        pi |= i.lanes,
        (a & i.childLanes) === 0)
            return null;
        if (r !== null && i.child !== r.child)
            throw Error(n(153));
        if (i.child !== null) {
            for (r = i.child,
            a = Ur(r, r.pendingProps),
            i.child = a,
            a.return = i; r.sibling !== null; )
                r = r.sibling,
                a = a.sibling = Ur(r, r.pendingProps),
                a.return = i;
            a.sibling = null
        }
        return i.child
    }
    function PT(r, i, a) {
        switch (i.tag) {
        case 3:
            Pg(i),
            es();
            break;
        case 5:
            $m(i);
            break;
        case 1:
            Yt(i.type) && Ua(i);
            break;
        case 4:
            nd(i, i.stateNode.containerInfo);
            break;
        case 10:
            var c = i.type._context
              , p = i.memoizedProps.value;
            Xe(Ka, c._currentValue),
            c._currentValue = p;
            break;
        case 13:
            if (c = i.memoizedState,
            c !== null)
                return c.dehydrated !== null ? (Xe(rt, rt.current & 1),
                i.flags |= 128,
                null) : (a & i.child.childLanes) !== 0 ? Eg(r, i, a) : (Xe(rt, rt.current & 1),
                r = fr(r, i, a),
                r !== null ? r.sibling : null);
            Xe(rt, rt.current & 1);
            break;
        case 19:
            if (c = (a & i.childLanes) !== 0,
            (r.flags & 128) !== 0) {
                if (c)
                    return Ag(r, i, a);
                i.flags |= 128
            }
            if (p = i.memoizedState,
            p !== null && (p.rendering = null,
            p.tail = null,
            p.lastEffect = null),
            Xe(rt, rt.current),
            c)
                break;
            return null;
        case 22:
        case 23:
            return i.lanes = 0,
            bg(r, i, a)
        }
        return fr(r, i, a)
    }
    var Rg, _d, Ng, Og;
    Rg = function(r, i) {
        for (var a = i.child; a !== null; ) {
            if (a.tag === 5 || a.tag === 6)
                r.appendChild(a.stateNode);
            else if (a.tag !== 4 && a.child !== null) {
                a.child.return = a,
                a = a.child;
                continue
            }
            if (a === i)
                break;
            for (; a.sibling === null; ) {
                if (a.return === null || a.return === i)
                    return;
                a = a.return
            }
            a.sibling.return = a.return,
            a = a.sibling
        }
    }
    ,
    _d = function() {}
    ,
    Ng = function(r, i, a, c) {
        var p = r.memoizedProps;
        if (p !== c) {
            r = i.stateNode,
            fi(Hn.current);
            var g = null;
            switch (a) {
            case "input":
                p = Di(r, p),
                c = Di(r, c),
                g = [];
                break;
            case "select":
                p = ne({}, p, {
                    value: void 0
                }),
                c = ne({}, c, {
                    value: void 0
                }),
                g = [];
                break;
            case "textarea":
                p = R(r, p),
                c = R(r, c),
                g = [];
                break;
            default:
                typeof p.onClick != "function" && typeof c.onClick == "function" && (r.onclick = Fa)
            }
            Vi(a, c);
            var x;
            a = null;
            for ($ in p)
                if (!c.hasOwnProperty($) && p.hasOwnProperty($) && p[$] != null)
                    if ($ === "style") {
                        var k = p[$];
                        for (x in k)
                            k.hasOwnProperty(x) && (a || (a = {}),
                            a[x] = "")
                    } else
                        $ !== "dangerouslySetInnerHTML" && $ !== "children" && $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && $ !== "autoFocus" && (o.hasOwnProperty($) ? g || (g = []) : (g = g || []).push($, null));
            for ($ in c) {
                var N = c[$];
                if (k = p?.[$],
                c.hasOwnProperty($) && N !== k && (N != null || k != null))
                    if ($ === "style")
                        if (k) {
                            for (x in k)
                                !k.hasOwnProperty(x) || N && N.hasOwnProperty(x) || (a || (a = {}),
                                a[x] = "");
                            for (x in N)
                                N.hasOwnProperty(x) && k[x] !== N[x] && (a || (a = {}),
                                a[x] = N[x])
                        } else
                            a || (g || (g = []),
                            g.push($, a)),
                            a = N;
                    else
                        $ === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0,
                        k = k ? k.__html : void 0,
                        N != null && k !== N && (g = g || []).push($, N)) : $ === "children" ? typeof N != "string" && typeof N != "number" || (g = g || []).push($, "" + N) : $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && (o.hasOwnProperty($) ? (N != null && $ === "onScroll" && Ye("scroll", r),
                        g || k === N || (g = [])) : (g = g || []).push($, N))
            }
            a && (g = g || []).push("style", a);
            var $ = g;
            (i.updateQueue = $) && (i.flags |= 4)
        }
    }
    ,
    Og = function(r, i, a, c) {
        a !== c && (i.flags |= 4)
    }
    ;
    function go(r, i) {
        if (!tt)
            switch (r.tailMode) {
            case "hidden":
                i = r.tail;
                for (var a = null; i !== null; )
                    i.alternate !== null && (a = i),
                    i = i.sibling;
                a === null ? r.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = r.tail;
                for (var c = null; a !== null; )
                    a.alternate !== null && (c = a),
                    a = a.sibling;
                c === null ? i || r.tail === null ? r.tail = null : r.tail.sibling = null : c.sibling = null
            }
    }
    function Vt(r) {
        var i = r.alternate !== null && r.alternate.child === r.child
          , a = 0
          , c = 0;
        if (i)
            for (var p = r.child; p !== null; )
                a |= p.lanes | p.childLanes,
                c |= p.subtreeFlags & 14680064,
                c |= p.flags & 14680064,
                p.return = r,
                p = p.sibling;
        else
            for (p = r.child; p !== null; )
                a |= p.lanes | p.childLanes,
                c |= p.subtreeFlags,
                c |= p.flags,
                p.return = r,
                p = p.sibling;
        return r.subtreeFlags |= c,
        r.childLanes = a,
        i
    }
    function CT(r, i, a) {
        var c = i.pendingProps;
        switch (qc(i),
        i.tag) {
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
            return Vt(i),
            null;
        case 1:
            return Yt(i.type) && za(),
            Vt(i),
            null;
        case 3:
            return c = i.stateNode,
            is(),
            Je(Xt),
            Je(Lt),
            sd(),
            c.pendingContext && (c.context = c.pendingContext,
            c.pendingContext = null),
            (r === null || r.child === null) && (qa(i) ? i.flags |= 4 : r === null || r.memoizedState.isDehydrated && (i.flags & 256) === 0 || (i.flags |= 1024,
            Cn !== null && (Id(Cn),
            Cn = null))),
            _d(r, i),
            Vt(i),
            null;
        case 5:
            rd(i);
            var p = fi(co.current);
            if (a = i.type,
            r !== null && i.stateNode != null)
                Ng(r, i, a, c, p),
                r.ref !== i.ref && (i.flags |= 512,
                i.flags |= 2097152);
            else {
                if (!c) {
                    if (i.stateNode === null)
                        throw Error(n(166));
                    return Vt(i),
                    null
                }
                if (r = fi(Hn.current),
                qa(i)) {
                    c = i.stateNode,
                    a = i.type;
                    var g = i.memoizedProps;
                    switch (c[$n] = i,
                    c[so] = g,
                    r = (i.mode & 1) !== 0,
                    a) {
                    case "dialog":
                        Ye("cancel", c),
                        Ye("close", c);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Ye("load", c);
                        break;
                    case "video":
                    case "audio":
                        for (p = 0; p < no.length; p++)
                            Ye(no[p], c);
                        break;
                    case "source":
                        Ye("error", c);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Ye("error", c),
                        Ye("load", c);
                        break;
                    case "details":
                        Ye("toggle", c);
                        break;
                    case "input":
                        ga(c, g),
                        Ye("invalid", c);
                        break;
                    case "select":
                        c._wrapperState = {
                            wasMultiple: !!g.multiple
                        },
                        Ye("invalid", c);
                        break;
                    case "textarea":
                        U(c, g),
                        Ye("invalid", c)
                    }
                    Vi(a, g),
                    p = null;
                    for (var x in g)
                        if (g.hasOwnProperty(x)) {
                            var k = g[x];
                            x === "children" ? typeof k == "string" ? c.textContent !== k && (g.suppressHydrationWarning !== !0 && Va(c.textContent, k, r),
                            p = ["children", k]) : typeof k == "number" && c.textContent !== "" + k && (g.suppressHydrationWarning !== !0 && Va(c.textContent, k, r),
                            p = ["children", "" + k]) : o.hasOwnProperty(x) && k != null && x === "onScroll" && Ye("scroll", c)
                        }
                    switch (a) {
                    case "input":
                        It(c),
                        ya(c, g, !0);
                        break;
                    case "textarea":
                        It(c),
                        fe(c);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof g.onClick == "function" && (c.onclick = Fa)
                    }
                    c = p,
                    i.updateQueue = c,
                    c !== null && (i.flags |= 4)
                } else {
                    x = p.nodeType === 9 ? p : p.ownerDocument,
                    r === "http://www.w3.org/1999/xhtml" && (r = le(a)),
                    r === "http://www.w3.org/1999/xhtml" ? a === "script" ? (r = x.createElement("div"),
                    r.innerHTML = "<script><\/script>",
                    r = r.removeChild(r.firstChild)) : typeof c.is == "string" ? r = x.createElement(a, {
                        is: c.is
                    }) : (r = x.createElement(a),
                    a === "select" && (x = r,
                    c.multiple ? x.multiple = !0 : c.size && (x.size = c.size))) : r = x.createElementNS(r, a),
                    r[$n] = i,
                    r[so] = c,
                    Rg(r, i, !1, !1),
                    i.stateNode = r;
                    e: {
                        switch (x = Vs(a, c),
                        a) {
                        case "dialog":
                            Ye("cancel", r),
                            Ye("close", r),
                            p = c;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Ye("load", r),
                            p = c;
                            break;
                        case "video":
                        case "audio":
                            for (p = 0; p < no.length; p++)
                                Ye(no[p], r);
                            p = c;
                            break;
                        case "source":
                            Ye("error", r),
                            p = c;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Ye("error", r),
                            Ye("load", r),
                            p = c;
                            break;
                        case "details":
                            Ye("toggle", r),
                            p = c;
                            break;
                        case "input":
                            ga(r, c),
                            p = Di(r, c),
                            Ye("invalid", r);
                            break;
                        case "option":
                            p = c;
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!c.multiple
                            },
                            p = ne({}, c, {
                                value: void 0
                            }),
                            Ye("invalid", r);
                            break;
                        case "textarea":
                            U(r, c),
                            p = R(r, c),
                            Ye("invalid", r);
                            break;
                        default:
                            p = c
                        }
                        Vi(a, p),
                        k = p;
                        for (g in k)
                            if (k.hasOwnProperty(g)) {
                                var N = k[g];
                                g === "style" ? ji(r, N) : g === "dangerouslySetInnerHTML" ? (N = N ? N.__html : void 0,
                                N != null && ze(r, N)) : g === "children" ? typeof N == "string" ? (a !== "textarea" || N !== "") && Ge(r, N) : typeof N == "number" && Ge(r, "" + N) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (o.hasOwnProperty(g) ? N != null && g === "onScroll" && Ye("scroll", r) : N != null && A(r, g, N, x))
                            }
                        switch (a) {
                        case "input":
                            It(r),
                            ya(r, c, !1);
                            break;
                        case "textarea":
                            It(r),
                            fe(r);
                            break;
                        case "option":
                            c.value != null && r.setAttribute("value", "" + Te(c.value));
                            break;
                        case "select":
                            r.multiple = !!c.multiple,
                            g = c.value,
                            g != null ? sr(r, !!c.multiple, g, !1) : c.defaultValue != null && sr(r, !!c.multiple, c.defaultValue, !0);
                            break;
                        default:
                            typeof p.onClick == "function" && (r.onclick = Fa)
                        }
                        switch (a) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            c = !!c.autoFocus;
                            break e;
                        case "img":
                            c = !0;
                            break e;
                        default:
                            c = !1
                        }
                    }
                    c && (i.flags |= 4)
                }
                i.ref !== null && (i.flags |= 512,
                i.flags |= 2097152)
            }
            return Vt(i),
            null;
        case 6:
            if (r && i.stateNode != null)
                Og(r, i, r.memoizedProps, c);
            else {
                if (typeof c != "string" && i.stateNode === null)
                    throw Error(n(166));
                if (a = fi(co.current),
                fi(Hn.current),
                qa(i)) {
                    if (c = i.stateNode,
                    a = i.memoizedProps,
                    c[$n] = i,
                    (g = c.nodeValue !== a) && (r = on,
                    r !== null))
                        switch (r.tag) {
                        case 3:
                            Va(c.nodeValue, a, (r.mode & 1) !== 0);
                            break;
                        case 5:
                            r.memoizedProps.suppressHydrationWarning !== !0 && Va(c.nodeValue, a, (r.mode & 1) !== 0)
                        }
                    g && (i.flags |= 4)
                } else
                    c = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(c),
                    c[$n] = i,
                    i.stateNode = c
            }
            return Vt(i),
            null;
        case 13:
            if (Je(rt),
            c = i.memoizedState,
            r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
                if (tt && an !== null && (i.mode & 1) !== 0 && (i.flags & 128) === 0)
                    Im(),
                    es(),
                    i.flags |= 98560,
                    g = !1;
                else if (g = qa(i),
                c !== null && c.dehydrated !== null) {
                    if (r === null) {
                        if (!g)
                            throw Error(n(318));
                        if (g = i.memoizedState,
                        g = g !== null ? g.dehydrated : null,
                        !g)
                            throw Error(n(317));
                        g[$n] = i
                    } else
                        es(),
                        (i.flags & 128) === 0 && (i.memoizedState = null),
                        i.flags |= 4;
                    Vt(i),
                    g = !1
                } else
                    Cn !== null && (Id(Cn),
                    Cn = null),
                    g = !0;
                if (!g)
                    return i.flags & 65536 ? i : null
            }
            return (i.flags & 128) !== 0 ? (i.lanes = a,
            i) : (c = c !== null,
            c !== (r !== null && r.memoizedState !== null) && c && (i.child.flags |= 8192,
            (i.mode & 1) !== 0 && (r === null || (rt.current & 1) !== 0 ? St === 0 && (St = 3) : Vd())),
            i.updateQueue !== null && (i.flags |= 4),
            Vt(i),
            null);
        case 4:
            return is(),
            _d(r, i),
            r === null && ro(i.stateNode.containerInfo),
            Vt(i),
            null;
        case 10:
            return Yc(i.type._context),
            Vt(i),
            null;
        case 17:
            return Yt(i.type) && za(),
            Vt(i),
            null;
        case 19:
            if (Je(rt),
            g = i.memoizedState,
            g === null)
                return Vt(i),
                null;
            if (c = (i.flags & 128) !== 0,
            x = g.rendering,
            x === null)
                if (c)
                    go(g, !1);
                else {
                    if (St !== 0 || r !== null && (r.flags & 128) !== 0)
                        for (r = i.child; r !== null; ) {
                            if (x = Ya(r),
                            x !== null) {
                                for (i.flags |= 128,
                                go(g, !1),
                                c = x.updateQueue,
                                c !== null && (i.updateQueue = c,
                                i.flags |= 4),
                                i.subtreeFlags = 0,
                                c = a,
                                a = i.child; a !== null; )
                                    g = a,
                                    r = c,
                                    g.flags &= 14680066,
                                    x = g.alternate,
                                    x === null ? (g.childLanes = 0,
                                    g.lanes = r,
                                    g.child = null,
                                    g.subtreeFlags = 0,
                                    g.memoizedProps = null,
                                    g.memoizedState = null,
                                    g.updateQueue = null,
                                    g.dependencies = null,
                                    g.stateNode = null) : (g.childLanes = x.childLanes,
                                    g.lanes = x.lanes,
                                    g.child = x.child,
                                    g.subtreeFlags = 0,
                                    g.deletions = null,
                                    g.memoizedProps = x.memoizedProps,
                                    g.memoizedState = x.memoizedState,
                                    g.updateQueue = x.updateQueue,
                                    g.type = x.type,
                                    r = x.dependencies,
                                    g.dependencies = r === null ? null : {
                                        lanes: r.lanes,
                                        firstContext: r.firstContext
                                    }),
                                    a = a.sibling;
                                return Xe(rt, rt.current & 1 | 2),
                                i.child
                            }
                            r = r.sibling
                        }
                    g.tail !== null && ht() > ls && (i.flags |= 128,
                    c = !0,
                    go(g, !1),
                    i.lanes = 4194304)
                }
            else {
                if (!c)
                    if (r = Ya(x),
                    r !== null) {
                        if (i.flags |= 128,
                        c = !0,
                        a = r.updateQueue,
                        a !== null && (i.updateQueue = a,
                        i.flags |= 4),
                        go(g, !0),
                        g.tail === null && g.tailMode === "hidden" && !x.alternate && !tt)
                            return Vt(i),
                            null
                    } else
                        2 * ht() - g.renderingStartTime > ls && a !== 1073741824 && (i.flags |= 128,
                        c = !0,
                        go(g, !1),
                        i.lanes = 4194304);
                g.isBackwards ? (x.sibling = i.child,
                i.child = x) : (a = g.last,
                a !== null ? a.sibling = x : i.child = x,
                g.last = x)
            }
            return g.tail !== null ? (i = g.tail,
            g.rendering = i,
            g.tail = i.sibling,
            g.renderingStartTime = ht(),
            i.sibling = null,
            a = rt.current,
            Xe(rt, c ? a & 1 | 2 : a & 1),
            i) : (Vt(i),
            null);
        case 22:
        case 23:
            return jd(),
            c = i.memoizedState !== null,
            r !== null && r.memoizedState !== null !== c && (i.flags |= 8192),
            c && (i.mode & 1) !== 0 ? (ln & 1073741824) !== 0 && (Vt(i),
            i.subtreeFlags & 6 && (i.flags |= 8192)) : Vt(i),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(n(156, i.tag))
    }
    function ET(r, i) {
        switch (qc(i),
        i.tag) {
        case 1:
            return Yt(i.type) && za(),
            r = i.flags,
            r & 65536 ? (i.flags = r & -65537 | 128,
            i) : null;
        case 3:
            return is(),
            Je(Xt),
            Je(Lt),
            sd(),
            r = i.flags,
            (r & 65536) !== 0 && (r & 128) === 0 ? (i.flags = r & -65537 | 128,
            i) : null;
        case 5:
            return rd(i),
            null;
        case 13:
            if (Je(rt),
            r = i.memoizedState,
            r !== null && r.dehydrated !== null) {
                if (i.alternate === null)
                    throw Error(n(340));
                es()
            }
            return r = i.flags,
            r & 65536 ? (i.flags = r & -65537 | 128,
            i) : null;
        case 19:
            return Je(rt),
            null;
        case 4:
            return is(),
            null;
        case 10:
            return Yc(i.type._context),
            null;
        case 22:
        case 23:
            return jd(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var al = !1
      , Ft = !1
      , kT = typeof WeakSet == "function" ? WeakSet : Set
      , ye = null;
    function os(r, i) {
        var a = r.ref;
        if (a !== null)
            if (typeof a == "function")
                try {
                    a(null)
                } catch (c) {
                    ct(r, i, c)
                }
            else
                a.current = null
    }
    function Pd(r, i, a) {
        try {
            a()
        } catch (c) {
            ct(r, i, c)
        }
    }
    var Dg = !1;
    function AT(r, i) {
        if (jc = Ea,
        r = dm(),
        Ac(r)) {
            if ("selectionStart"in r)
                var a = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                };
            else
                e: {
                    a = (a = r.ownerDocument) && a.defaultView || window;
                    var c = a.getSelection && a.getSelection();
                    if (c && c.rangeCount !== 0) {
                        a = c.anchorNode;
                        var p = c.anchorOffset
                          , g = c.focusNode;
                        c = c.focusOffset;
                        try {
                            a.nodeType,
                            g.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var x = 0
                          , k = -1
                          , N = -1
                          , $ = 0
                          , ee = 0
                          , te = r
                          , Y = null;
                        t: for (; ; ) {
                            for (var he; te !== a || p !== 0 && te.nodeType !== 3 || (k = x + p),
                            te !== g || c !== 0 && te.nodeType !== 3 || (N = x + c),
                            te.nodeType === 3 && (x += te.nodeValue.length),
                            (he = te.firstChild) !== null; )
                                Y = te,
                                te = he;
                            for (; ; ) {
                                if (te === r)
                                    break t;
                                if (Y === a && ++$ === p && (k = x),
                                Y === g && ++ee === c && (N = x),
                                (he = te.nextSibling) !== null)
                                    break;
                                te = Y,
                                Y = te.parentNode
                            }
                            te = he
                        }
                        a = k === -1 || N === -1 ? null : {
                            start: k,
                            end: N
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (Vc = {
            focusedElem: r,
            selectionRange: a
        },
        Ea = !1,
        ye = i; ye !== null; )
            if (i = ye,
            r = i.child,
            (i.subtreeFlags & 1028) !== 0 && r !== null)
                r.return = i,
                ye = r;
            else
                for (; ye !== null; ) {
                    i = ye;
                    try {
                        var ve = i.alternate;
                        if ((i.flags & 1024) !== 0)
                            switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (ve !== null) {
                                    var xe = ve.memoizedProps
                                      , pt = ve.memoizedState
                                      , j = i.stateNode
                                      , M = j.getSnapshotBeforeUpdate(i.elementType === i.type ? xe : En(i.type, xe), pt);
                                    j.__reactInternalSnapshotBeforeUpdate = M
                                }
                                break;
                            case 3:
                                var z = i.stateNode.containerInfo;
                                z.nodeType === 1 ? z.textContent = "" : z.nodeType === 9 && z.documentElement && z.removeChild(z.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(n(163))
                            }
                    } catch (ae) {
                        ct(i, i.return, ae)
                    }
                    if (r = i.sibling,
                    r !== null) {
                        r.return = i.return,
                        ye = r;
                        break
                    }
                    ye = i.return
                }
        return ve = Dg,
        Dg = !1,
        ve
    }
    function yo(r, i, a) {
        var c = i.updateQueue;
        if (c = c !== null ? c.lastEffect : null,
        c !== null) {
            var p = c = c.next;
            do {
                if ((p.tag & r) === r) {
                    var g = p.destroy;
                    p.destroy = void 0,
                    g !== void 0 && Pd(i, a, g)
                }
                p = p.next
            } while (p !== c)
        }
    }
    function ll(r, i) {
        if (i = i.updateQueue,
        i = i !== null ? i.lastEffect : null,
        i !== null) {
            var a = i = i.next;
            do {
                if ((a.tag & r) === r) {
                    var c = a.create;
                    a.destroy = c()
                }
                a = a.next
            } while (a !== i)
        }
    }
    function Cd(r) {
        var i = r.ref;
        if (i !== null) {
            var a = r.stateNode;
            r.tag,
            r = a,
            typeof i == "function" ? i(r) : i.current = r
        }
    }
    function Mg(r) {
        var i = r.alternate;
        i !== null && (r.alternate = null,
        Mg(i)),
        r.child = null,
        r.deletions = null,
        r.sibling = null,
        r.tag === 5 && (i = r.stateNode,
        i !== null && (delete i[$n],
        delete i[so],
        delete i[Uc],
        delete i[dT],
        delete i[fT])),
        r.stateNode = null,
        r.return = null,
        r.dependencies = null,
        r.memoizedProps = null,
        r.memoizedState = null,
        r.pendingProps = null,
        r.stateNode = null,
        r.updateQueue = null
    }
    function Ig(r) {
        return r.tag === 5 || r.tag === 3 || r.tag === 4
    }
    function Lg(r) {
        e: for (; ; ) {
            for (; r.sibling === null; ) {
                if (r.return === null || Ig(r.return))
                    return null;
                r = r.return
            }
            for (r.sibling.return = r.return,
            r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
                if (r.flags & 2 || r.child === null || r.tag === 4)
                    continue e;
                r.child.return = r,
                r = r.child
            }
            if (!(r.flags & 2))
                return r.stateNode
        }
    }
    function Ed(r, i, a) {
        var c = r.tag;
        if (c === 5 || c === 6)
            r = r.stateNode,
            i ? a.nodeType === 8 ? a.parentNode.insertBefore(r, i) : a.insertBefore(r, i) : (a.nodeType === 8 ? (i = a.parentNode,
            i.insertBefore(r, a)) : (i = a,
            i.appendChild(r)),
            a = a._reactRootContainer,
            a != null || i.onclick !== null || (i.onclick = Fa));
        else if (c !== 4 && (r = r.child,
        r !== null))
            for (Ed(r, i, a),
            r = r.sibling; r !== null; )
                Ed(r, i, a),
                r = r.sibling
    }
    function kd(r, i, a) {
        var c = r.tag;
        if (c === 5 || c === 6)
            r = r.stateNode,
            i ? a.insertBefore(r, i) : a.appendChild(r);
        else if (c !== 4 && (r = r.child,
        r !== null))
            for (kd(r, i, a),
            r = r.sibling; r !== null; )
                kd(r, i, a),
                r = r.sibling
    }
    var kt = null
      , kn = !1;
    function jr(r, i, a) {
        for (a = a.child; a !== null; )
            jg(r, i, a),
            a = a.sibling
    }
    function jg(r, i, a) {
        if (Un && typeof Un.onCommitFiberUnmount == "function")
            try {
                Un.onCommitFiberUnmount(Sa, a)
            } catch {}
        switch (a.tag) {
        case 5:
            Ft || os(a, i);
        case 6:
            var c = kt
              , p = kn;
            kt = null,
            jr(r, i, a),
            kt = c,
            kn = p,
            kt !== null && (kn ? (r = kt,
            a = a.stateNode,
            r.nodeType === 8 ? r.parentNode.removeChild(a) : r.removeChild(a)) : kt.removeChild(a.stateNode));
            break;
        case 18:
            kt !== null && (kn ? (r = kt,
            a = a.stateNode,
            r.nodeType === 8 ? zc(r.parentNode, a) : r.nodeType === 1 && zc(r, a),
            Ks(r)) : zc(kt, a.stateNode));
            break;
        case 4:
            c = kt,
            p = kn,
            kt = a.stateNode.containerInfo,
            kn = !0,
            jr(r, i, a),
            kt = c,
            kn = p;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ft && (c = a.updateQueue,
            c !== null && (c = c.lastEffect,
            c !== null))) {
                p = c = c.next;
                do {
                    var g = p
                      , x = g.destroy;
                    g = g.tag,
                    x !== void 0 && ((g & 2) !== 0 || (g & 4) !== 0) && Pd(a, i, x),
                    p = p.next
                } while (p !== c)
            }
            jr(r, i, a);
            break;
        case 1:
            if (!Ft && (os(a, i),
            c = a.stateNode,
            typeof c.componentWillUnmount == "function"))
                try {
                    c.props = a.memoizedProps,
                    c.state = a.memoizedState,
                    c.componentWillUnmount()
                } catch (k) {
                    ct(a, i, k)
                }
            jr(r, i, a);
            break;
        case 21:
            jr(r, i, a);
            break;
        case 22:
            a.mode & 1 ? (Ft = (c = Ft) || a.memoizedState !== null,
            jr(r, i, a),
            Ft = c) : jr(r, i, a);
            break;
        default:
            jr(r, i, a)
        }
    }
    function Vg(r) {
        var i = r.updateQueue;
        if (i !== null) {
            r.updateQueue = null;
            var a = r.stateNode;
            a === null && (a = r.stateNode = new kT),
            i.forEach(function(c) {
                var p = VT.bind(null, r, c);
                a.has(c) || (a.add(c),
                c.then(p, p))
            })
        }
    }
    function An(r, i) {
        var a = i.deletions;
        if (a !== null)
            for (var c = 0; c < a.length; c++) {
                var p = a[c];
                try {
                    var g = r
                      , x = i
                      , k = x;
                    e: for (; k !== null; ) {
                        switch (k.tag) {
                        case 5:
                            kt = k.stateNode,
                            kn = !1;
                            break e;
                        case 3:
                            kt = k.stateNode.containerInfo,
                            kn = !0;
                            break e;
                        case 4:
                            kt = k.stateNode.containerInfo,
                            kn = !0;
                            break e
                        }
                        k = k.return
                    }
                    if (kt === null)
                        throw Error(n(160));
                    jg(g, x, p),
                    kt = null,
                    kn = !1;
                    var N = p.alternate;
                    N !== null && (N.return = null),
                    p.return = null
                } catch ($) {
                    ct(p, i, $)
                }
            }
        if (i.subtreeFlags & 12854)
            for (i = i.child; i !== null; )
                Fg(i, r),
                i = i.sibling
    }
    function Fg(r, i) {
        var a = r.alternate
          , c = r.flags;
        switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (An(i, r),
            qn(r),
            c & 4) {
                try {
                    yo(3, r, r.return),
                    ll(3, r)
                } catch (xe) {
                    ct(r, r.return, xe)
                }
                try {
                    yo(5, r, r.return)
                } catch (xe) {
                    ct(r, r.return, xe)
                }
            }
            break;
        case 1:
            An(i, r),
            qn(r),
            c & 512 && a !== null && os(a, a.return);
            break;
        case 5:
            if (An(i, r),
            qn(r),
            c & 512 && a !== null && os(a, a.return),
            r.flags & 32) {
                var p = r.stateNode;
                try {
                    Ge(p, "")
                } catch (xe) {
                    ct(r, r.return, xe)
                }
            }
            if (c & 4 && (p = r.stateNode,
            p != null)) {
                var g = r.memoizedProps
                  , x = a !== null ? a.memoizedProps : g
                  , k = r.type
                  , N = r.updateQueue;
                if (r.updateQueue = null,
                N !== null)
                    try {
                        k === "input" && g.type === "radio" && g.name != null && Ls(p, g),
                        Vs(k, x);
                        var $ = Vs(k, g);
                        for (x = 0; x < N.length; x += 2) {
                            var ee = N[x]
                              , te = N[x + 1];
                            ee === "style" ? ji(p, te) : ee === "dangerouslySetInnerHTML" ? ze(p, te) : ee === "children" ? Ge(p, te) : A(p, ee, te, $)
                        }
                        switch (k) {
                        case "input":
                            Mi(p, g);
                            break;
                        case "textarea":
                            K(p, g);
                            break;
                        case "select":
                            var Y = p._wrapperState.wasMultiple;
                            p._wrapperState.wasMultiple = !!g.multiple;
                            var he = g.value;
                            he != null ? sr(p, !!g.multiple, he, !1) : Y !== !!g.multiple && (g.defaultValue != null ? sr(p, !!g.multiple, g.defaultValue, !0) : sr(p, !!g.multiple, g.multiple ? [] : "", !1))
                        }
                        p[so] = g
                    } catch (xe) {
                        ct(r, r.return, xe)
                    }
            }
            break;
        case 6:
            if (An(i, r),
            qn(r),
            c & 4) {
                if (r.stateNode === null)
                    throw Error(n(162));
                p = r.stateNode,
                g = r.memoizedProps;
                try {
                    p.nodeValue = g
                } catch (xe) {
                    ct(r, r.return, xe)
                }
            }
            break;
        case 3:
            if (An(i, r),
            qn(r),
            c & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    Ks(i.containerInfo)
                } catch (xe) {
                    ct(r, r.return, xe)
                }
            break;
        case 4:
            An(i, r),
            qn(r);
            break;
        case 13:
            An(i, r),
            qn(r),
            p = r.child,
            p.flags & 8192 && (g = p.memoizedState !== null,
            p.stateNode.isHidden = g,
            !g || p.alternate !== null && p.alternate.memoizedState !== null || (Nd = ht())),
            c & 4 && Vg(r);
            break;
        case 22:
            if (ee = a !== null && a.memoizedState !== null,
            r.mode & 1 ? (Ft = ($ = Ft) || ee,
            An(i, r),
            Ft = $) : An(i, r),
            qn(r),
            c & 8192) {
                if ($ = r.memoizedState !== null,
                (r.stateNode.isHidden = $) && !ee && (r.mode & 1) !== 0)
                    for (ye = r,
                    ee = r.child; ee !== null; ) {
                        for (te = ye = ee; ye !== null; ) {
                            switch (Y = ye,
                            he = Y.child,
                            Y.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                yo(4, Y, Y.return);
                                break;
                            case 1:
                                os(Y, Y.return);
                                var ve = Y.stateNode;
                                if (typeof ve.componentWillUnmount == "function") {
                                    c = Y,
                                    a = Y.return;
                                    try {
                                        i = c,
                                        ve.props = i.memoizedProps,
                                        ve.state = i.memoizedState,
                                        ve.componentWillUnmount()
                                    } catch (xe) {
                                        ct(c, a, xe)
                                    }
                                }
                                break;
                            case 5:
                                os(Y, Y.return);
                                break;
                            case 22:
                                if (Y.memoizedState !== null) {
                                    Ug(te);
                                    continue
                                }
                            }
                            he !== null ? (he.return = Y,
                            ye = he) : Ug(te)
                        }
                        ee = ee.sibling
                    }
                e: for (ee = null,
                te = r; ; ) {
                    if (te.tag === 5) {
                        if (ee === null) {
                            ee = te;
                            try {
                                p = te.stateNode,
                                $ ? (g = p.style,
                                typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none") : (k = te.stateNode,
                                N = te.memoizedProps.style,
                                x = N != null && N.hasOwnProperty("display") ? N.display : null,
                                k.style.display = Li("display", x))
                            } catch (xe) {
                                ct(r, r.return, xe)
                            }
                        }
                    } else if (te.tag === 6) {
                        if (ee === null)
                            try {
                                te.stateNode.nodeValue = $ ? "" : te.memoizedProps
                            } catch (xe) {
                                ct(r, r.return, xe)
                            }
                    } else if ((te.tag !== 22 && te.tag !== 23 || te.memoizedState === null || te === r) && te.child !== null) {
                        te.child.return = te,
                        te = te.child;
                        continue
                    }
                    if (te === r)
                        break e;
                    for (; te.sibling === null; ) {
                        if (te.return === null || te.return === r)
                            break e;
                        ee === te && (ee = null),
                        te = te.return
                    }
                    ee === te && (ee = null),
                    te.sibling.return = te.return,
                    te = te.sibling
                }
            }
            break;
        case 19:
            An(i, r),
            qn(r),
            c & 4 && Vg(r);
            break;
        case 21:
            break;
        default:
            An(i, r),
            qn(r)
        }
    }
    function qn(r) {
        var i = r.flags;
        if (i & 2) {
            try {
                e: {
                    for (var a = r.return; a !== null; ) {
                        if (Ig(a)) {
                            var c = a;
                            break e
                        }
                        a = a.return
                    }
                    throw Error(n(160))
                }
                switch (c.tag) {
                case 5:
                    var p = c.stateNode;
                    c.flags & 32 && (Ge(p, ""),
                    c.flags &= -33);
                    var g = Lg(r);
                    kd(r, g, p);
                    break;
                case 3:
                case 4:
                    var x = c.stateNode.containerInfo
                      , k = Lg(r);
                    Ed(r, k, x);
                    break;
                default:
                    throw Error(n(161))
                }
            } catch (N) {
                ct(r, r.return, N)
            }
            r.flags &= -3
        }
        i & 4096 && (r.flags &= -4097)
    }
    function RT(r, i, a) {
        ye = r,
        Bg(r)
    }
    function Bg(r, i, a) {
        for (var c = (r.mode & 1) !== 0; ye !== null; ) {
            var p = ye
              , g = p.child;
            if (p.tag === 22 && c) {
                var x = p.memoizedState !== null || al;
                if (!x) {
                    var k = p.alternate
                      , N = k !== null && k.memoizedState !== null || Ft;
                    k = al;
                    var $ = Ft;
                    if (al = x,
                    (Ft = N) && !$)
                        for (ye = p; ye !== null; )
                            x = ye,
                            N = x.child,
                            x.tag === 22 && x.memoizedState !== null ? $g(p) : N !== null ? (N.return = x,
                            ye = N) : $g(p);
                    for (; g !== null; )
                        ye = g,
                        Bg(g),
                        g = g.sibling;
                    ye = p,
                    al = k,
                    Ft = $
                }
                zg(r)
            } else
                (p.subtreeFlags & 8772) !== 0 && g !== null ? (g.return = p,
                ye = g) : zg(r)
        }
    }
    function zg(r) {
        for (; ye !== null; ) {
            var i = ye;
            if ((i.flags & 8772) !== 0) {
                var a = i.alternate;
                try {
                    if ((i.flags & 8772) !== 0)
                        switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ft || ll(5, i);
                            break;
                        case 1:
                            var c = i.stateNode;
                            if (i.flags & 4 && !Ft)
                                if (a === null)
                                    c.componentDidMount();
                                else {
                                    var p = i.elementType === i.type ? a.memoizedProps : En(i.type, a.memoizedProps);
                                    c.componentDidUpdate(p, a.memoizedState, c.__reactInternalSnapshotBeforeUpdate)
                                }
                            var g = i.updateQueue;
                            g !== null && Um(i, g, c);
                            break;
                        case 3:
                            var x = i.updateQueue;
                            if (x !== null) {
                                if (a = null,
                                i.child !== null)
                                    switch (i.child.tag) {
                                    case 5:
                                        a = i.child.stateNode;
                                        break;
                                    case 1:
                                        a = i.child.stateNode
                                    }
                                Um(i, x, a)
                            }
                            break;
                        case 5:
                            var k = i.stateNode;
                            if (a === null && i.flags & 4) {
                                a = k;
                                var N = i.memoizedProps;
                                switch (i.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    N.autoFocus && a.focus();
                                    break;
                                case "img":
                                    N.src && (a.src = N.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (i.memoizedState === null) {
                                var $ = i.alternate;
                                if ($ !== null) {
                                    var ee = $.memoizedState;
                                    if (ee !== null) {
                                        var te = ee.dehydrated;
                                        te !== null && Ks(te)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(n(163))
                        }
                    Ft || i.flags & 512 && Cd(i)
                } catch (Y) {
                    ct(i, i.return, Y)
                }
            }
            if (i === r) {
                ye = null;
                break
            }
            if (a = i.sibling,
            a !== null) {
                a.return = i.return,
                ye = a;
                break
            }
            ye = i.return
        }
    }
    function Ug(r) {
        for (; ye !== null; ) {
            var i = ye;
            if (i === r) {
                ye = null;
                break
            }
            var a = i.sibling;
            if (a !== null) {
                a.return = i.return,
                ye = a;
                break
            }
            ye = i.return
        }
    }
    function $g(r) {
        for (; ye !== null; ) {
            var i = ye;
            try {
                switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    var a = i.return;
                    try {
                        ll(4, i)
                    } catch (N) {
                        ct(i, a, N)
                    }
                    break;
                case 1:
                    var c = i.stateNode;
                    if (typeof c.componentDidMount == "function") {
                        var p = i.return;
                        try {
                            c.componentDidMount()
                        } catch (N) {
                            ct(i, p, N)
                        }
                    }
                    var g = i.return;
                    try {
                        Cd(i)
                    } catch (N) {
                        ct(i, g, N)
                    }
                    break;
                case 5:
                    var x = i.return;
                    try {
                        Cd(i)
                    } catch (N) {
                        ct(i, x, N)
                    }
                }
            } catch (N) {
                ct(i, i.return, N)
            }
            if (i === r) {
                ye = null;
                break
            }
            var k = i.sibling;
            if (k !== null) {
                k.return = i.return,
                ye = k;
                break
            }
            ye = i.return
        }
    }
    var NT = Math.ceil
      , ul = I.ReactCurrentDispatcher
      , Ad = I.ReactCurrentOwner
      , xn = I.ReactCurrentBatchConfig
      , $e = 0
      , Pt = null
      , xt = null
      , At = 0
      , ln = 0
      , as = Or(0)
      , St = 0
      , vo = null
      , pi = 0
      , cl = 0
      , Rd = 0
      , xo = null
      , en = null
      , Nd = 0
      , ls = 1 / 0
      , hr = null
      , dl = !1
      , Od = null
      , Vr = null
      , fl = !1
      , Fr = null
      , hl = 0
      , wo = 0
      , Dd = null
      , pl = -1
      , ml = 0;
    function qt() {
        return ($e & 6) !== 0 ? ht() : pl !== -1 ? pl : pl = ht()
    }
    function Br(r) {
        return (r.mode & 1) === 0 ? 1 : ($e & 2) !== 0 && At !== 0 ? At & -At : pT.transition !== null ? (ml === 0 && (ml = Lp()),
        ml) : (r = Qe,
        r !== 0 || (r = window.event,
        r = r === void 0 ? 16 : Wp(r.type)),
        r)
    }
    function Rn(r, i, a, c) {
        if (50 < wo)
            throw wo = 0,
            Dd = null,
            Error(n(185));
        $s(r, a, c),
        (($e & 2) === 0 || r !== Pt) && (r === Pt && (($e & 2) === 0 && (cl |= a),
        St === 4 && zr(r, At)),
        tn(r, c),
        a === 1 && $e === 0 && (i.mode & 1) === 0 && (ls = ht() + 500,
        $a && Mr()))
    }
    function tn(r, i) {
        var a = r.callbackNode;
        p1(r, i);
        var c = _a(r, r === Pt ? At : 0);
        if (c === 0)
            a !== null && Dp(a),
            r.callbackNode = null,
            r.callbackPriority = 0;
        else if (i = c & -c,
        r.callbackPriority !== i) {
            if (a != null && Dp(a),
            i === 1)
                r.tag === 0 ? hT(Wg.bind(null, r)) : Rm(Wg.bind(null, r)),
                uT(function() {
                    ($e & 6) === 0 && Mr()
                }),
                a = null;
            else {
                switch (jp(c)) {
                case 1:
                    a = fc;
                    break;
                case 4:
                    a = Mp;
                    break;
                case 16:
                    a = wa;
                    break;
                case 536870912:
                    a = Ip;
                    break;
                default:
                    a = wa
                }
                a = Jg(a, Hg.bind(null, r))
            }
            r.callbackPriority = i,
            r.callbackNode = a
        }
    }
    function Hg(r, i) {
        if (pl = -1,
        ml = 0,
        ($e & 6) !== 0)
            throw Error(n(327));
        var a = r.callbackNode;
        if (us() && r.callbackNode !== a)
            return null;
        var c = _a(r, r === Pt ? At : 0);
        if (c === 0)
            return null;
        if ((c & 30) !== 0 || (c & r.expiredLanes) !== 0 || i)
            i = gl(r, c);
        else {
            i = c;
            var p = $e;
            $e |= 2;
            var g = Qg();
            (Pt !== r || At !== i) && (hr = null,
            ls = ht() + 500,
            gi(r, i));
            do
                try {
                    MT();
                    break
                } catch (k) {
                    qg(r, k)
                }
            while (!0);
            Xc(),
            ul.current = g,
            $e = p,
            xt !== null ? i = 0 : (Pt = null,
            At = 0,
            i = St)
        }
        if (i !== 0) {
            if (i === 2 && (p = hc(r),
            p !== 0 && (c = p,
            i = Md(r, p))),
            i === 1)
                throw a = vo,
                gi(r, 0),
                zr(r, c),
                tn(r, ht()),
                a;
            if (i === 6)
                zr(r, c);
            else {
                if (p = r.current.alternate,
                (c & 30) === 0 && !OT(p) && (i = gl(r, c),
                i === 2 && (g = hc(r),
                g !== 0 && (c = g,
                i = Md(r, g))),
                i === 1))
                    throw a = vo,
                    gi(r, 0),
                    zr(r, c),
                    tn(r, ht()),
                    a;
                switch (r.finishedWork = p,
                r.finishedLanes = c,
                i) {
                case 0:
                case 1:
                    throw Error(n(345));
                case 2:
                    yi(r, en, hr);
                    break;
                case 3:
                    if (zr(r, c),
                    (c & 130023424) === c && (i = Nd + 500 - ht(),
                    10 < i)) {
                        if (_a(r, 0) !== 0)
                            break;
                        if (p = r.suspendedLanes,
                        (p & c) !== c) {
                            qt(),
                            r.pingedLanes |= r.suspendedLanes & p;
                            break
                        }
                        r.timeoutHandle = Bc(yi.bind(null, r, en, hr), i);
                        break
                    }
                    yi(r, en, hr);
                    break;
                case 4:
                    if (zr(r, c),
                    (c & 4194240) === c)
                        break;
                    for (i = r.eventTimes,
                    p = -1; 0 < c; ) {
                        var x = 31 - _n(c);
                        g = 1 << x,
                        x = i[x],
                        x > p && (p = x),
                        c &= ~g
                    }
                    if (c = p,
                    c = ht() - c,
                    c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * NT(c / 1960)) - c,
                    10 < c) {
                        r.timeoutHandle = Bc(yi.bind(null, r, en, hr), c);
                        break
                    }
                    yi(r, en, hr);
                    break;
                case 5:
                    yi(r, en, hr);
                    break;
                default:
                    throw Error(n(329))
                }
            }
        }
        return tn(r, ht()),
        r.callbackNode === a ? Hg.bind(null, r) : null
    }
    function Md(r, i) {
        var a = xo;
        return r.current.memoizedState.isDehydrated && (gi(r, i).flags |= 256),
        r = gl(r, i),
        r !== 2 && (i = en,
        en = a,
        i !== null && Id(i)),
        r
    }
    function Id(r) {
        en === null ? en = r : en.push.apply(en, r)
    }
    function OT(r) {
        for (var i = r; ; ) {
            if (i.flags & 16384) {
                var a = i.updateQueue;
                if (a !== null && (a = a.stores,
                a !== null))
                    for (var c = 0; c < a.length; c++) {
                        var p = a[c]
                          , g = p.getSnapshot;
                        p = p.value;
                        try {
                            if (!Pn(g(), p))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (a = i.child,
            i.subtreeFlags & 16384 && a !== null)
                a.return = i,
                i = a;
            else {
                if (i === r)
                    break;
                for (; i.sibling === null; ) {
                    if (i.return === null || i.return === r)
                        return !0;
                    i = i.return
                }
                i.sibling.return = i.return,
                i = i.sibling
            }
        }
        return !0
    }
    function zr(r, i) {
        for (i &= ~Rd,
        i &= ~cl,
        r.suspendedLanes |= i,
        r.pingedLanes &= ~i,
        r = r.expirationTimes; 0 < i; ) {
            var a = 31 - _n(i)
              , c = 1 << a;
            r[a] = -1,
            i &= ~c
        }
    }
    function Wg(r) {
        if (($e & 6) !== 0)
            throw Error(n(327));
        us();
        var i = _a(r, 0);
        if ((i & 1) === 0)
            return tn(r, ht()),
            null;
        var a = gl(r, i);
        if (r.tag !== 0 && a === 2) {
            var c = hc(r);
            c !== 0 && (i = c,
            a = Md(r, c))
        }
        if (a === 1)
            throw a = vo,
            gi(r, 0),
            zr(r, i),
            tn(r, ht()),
            a;
        if (a === 6)
            throw Error(n(345));
        return r.finishedWork = r.current.alternate,
        r.finishedLanes = i,
        yi(r, en, hr),
        tn(r, ht()),
        null
    }
    function Ld(r, i) {
        var a = $e;
        $e |= 1;
        try {
            return r(i)
        } finally {
            $e = a,
            $e === 0 && (ls = ht() + 500,
            $a && Mr())
        }
    }
    function mi(r) {
        Fr !== null && Fr.tag === 0 && ($e & 6) === 0 && us();
        var i = $e;
        $e |= 1;
        var a = xn.transition
          , c = Qe;
        try {
            if (xn.transition = null,
            Qe = 1,
            r)
                return r()
        } finally {
            Qe = c,
            xn.transition = a,
            $e = i,
            ($e & 6) === 0 && Mr()
        }
    }
    function jd() {
        ln = as.current,
        Je(as)
    }
    function gi(r, i) {
        r.finishedWork = null,
        r.finishedLanes = 0;
        var a = r.timeoutHandle;
        if (a !== -1 && (r.timeoutHandle = -1,
        lT(a)),
        xt !== null)
            for (a = xt.return; a !== null; ) {
                var c = a;
                switch (qc(c),
                c.tag) {
                case 1:
                    c = c.type.childContextTypes,
                    c != null && za();
                    break;
                case 3:
                    is(),
                    Je(Xt),
                    Je(Lt),
                    sd();
                    break;
                case 5:
                    rd(c);
                    break;
                case 4:
                    is();
                    break;
                case 13:
                    Je(rt);
                    break;
                case 19:
                    Je(rt);
                    break;
                case 10:
                    Yc(c.type._context);
                    break;
                case 22:
                case 23:
                    jd()
                }
                a = a.return
            }
        if (Pt = r,
        xt = r = Ur(r.current, null),
        At = ln = i,
        St = 0,
        vo = null,
        Rd = cl = pi = 0,
        en = xo = null,
        di !== null) {
            for (i = 0; i < di.length; i++)
                if (a = di[i],
                c = a.interleaved,
                c !== null) {
                    a.interleaved = null;
                    var p = c.next
                      , g = a.pending;
                    if (g !== null) {
                        var x = g.next;
                        g.next = p,
                        c.next = x
                    }
                    a.pending = c
                }
            di = null
        }
        return r
    }
    function qg(r, i) {
        do {
            var a = xt;
            try {
                if (Xc(),
                Ja.current = rl,
                el) {
                    for (var c = it.memoizedState; c !== null; ) {
                        var p = c.queue;
                        p !== null && (p.pending = null),
                        c = c.next
                    }
                    el = !1
                }
                if (hi = 0,
                _t = wt = it = null,
                fo = !1,
                ho = 0,
                Ad.current = null,
                a === null || a.return === null) {
                    St = 1,
                    vo = i,
                    xt = null;
                    break
                }
                e: {
                    var g = r
                      , x = a.return
                      , k = a
                      , N = i;
                    if (i = At,
                    k.flags |= 32768,
                    N !== null && typeof N == "object" && typeof N.then == "function") {
                        var $ = N
                          , ee = k
                          , te = ee.tag;
                        if ((ee.mode & 1) === 0 && (te === 0 || te === 11 || te === 15)) {
                            var Y = ee.alternate;
                            Y ? (ee.updateQueue = Y.updateQueue,
                            ee.memoizedState = Y.memoizedState,
                            ee.lanes = Y.lanes) : (ee.updateQueue = null,
                            ee.memoizedState = null)
                        }
                        var he = yg(x);
                        if (he !== null) {
                            he.flags &= -257,
                            vg(he, x, k, g, i),
                            he.mode & 1 && gg(g, $, i),
                            i = he,
                            N = $;
                            var ve = i.updateQueue;
                            if (ve === null) {
                                var xe = new Set;
                                xe.add(N),
                                i.updateQueue = xe
                            } else
                                ve.add(N);
                            break e
                        } else {
                            if ((i & 1) === 0) {
                                gg(g, $, i),
                                Vd();
                                break e
                            }
                            N = Error(n(426))
                        }
                    } else if (tt && k.mode & 1) {
                        var pt = yg(x);
                        if (pt !== null) {
                            (pt.flags & 65536) === 0 && (pt.flags |= 256),
                            vg(pt, x, k, g, i),
                            Zc(ss(N, k));
                            break e
                        }
                    }
                    g = N = ss(N, k),
                    St !== 4 && (St = 2),
                    xo === null ? xo = [g] : xo.push(g),
                    g = x;
                    do {
                        switch (g.tag) {
                        case 3:
                            g.flags |= 65536,
                            i &= -i,
                            g.lanes |= i;
                            var j = pg(g, N, i);
                            zm(g, j);
                            break e;
                        case 1:
                            k = N;
                            var M = g.type
                              , z = g.stateNode;
                            if ((g.flags & 128) === 0 && (typeof M.getDerivedStateFromError == "function" || z !== null && typeof z.componentDidCatch == "function" && (Vr === null || !Vr.has(z)))) {
                                g.flags |= 65536,
                                i &= -i,
                                g.lanes |= i;
                                var ae = mg(g, k, i);
                                zm(g, ae);
                                break e
                            }
                        }
                        g = g.return
                    } while (g !== null)
                }
                Zg(a)
            } catch (we) {
                i = we,
                xt === a && a !== null && (xt = a = a.return);
                continue
            }
            break
        } while (!0)
    }
    function Qg() {
        var r = ul.current;
        return ul.current = rl,
        r === null ? rl : r
    }
    function Vd() {
        (St === 0 || St === 3 || St === 2) && (St = 4),
        Pt === null || (pi & 268435455) === 0 && (cl & 268435455) === 0 || zr(Pt, At)
    }
    function gl(r, i) {
        var a = $e;
        $e |= 2;
        var c = Qg();
        (Pt !== r || At !== i) && (hr = null,
        gi(r, i));
        do
            try {
                DT();
                break
            } catch (p) {
                qg(r, p)
            }
        while (!0);
        if (Xc(),
        $e = a,
        ul.current = c,
        xt !== null)
            throw Error(n(261));
        return Pt = null,
        At = 0,
        St
    }
    function DT() {
        for (; xt !== null; )
            Kg(xt)
    }
    function MT() {
        for (; xt !== null && !s1(); )
            Kg(xt)
    }
    function Kg(r) {
        var i = Yg(r.alternate, r, ln);
        r.memoizedProps = r.pendingProps,
        i === null ? Zg(r) : xt = i,
        Ad.current = null
    }
    function Zg(r) {
        var i = r;
        do {
            var a = i.alternate;
            if (r = i.return,
            (i.flags & 32768) === 0) {
                if (a = CT(a, i, ln),
                a !== null) {
                    xt = a;
                    return
                }
            } else {
                if (a = ET(a, i),
                a !== null) {
                    a.flags &= 32767,
                    xt = a;
                    return
                }
                if (r !== null)
                    r.flags |= 32768,
                    r.subtreeFlags = 0,
                    r.deletions = null;
                else {
                    St = 6,
                    xt = null;
                    return
                }
            }
            if (i = i.sibling,
            i !== null) {
                xt = i;
                return
            }
            xt = i = r
        } while (i !== null);
        St === 0 && (St = 5)
    }
    function yi(r, i, a) {
        var c = Qe
          , p = xn.transition;
        try {
            xn.transition = null,
            Qe = 1,
            IT(r, i, a, c)
        } finally {
            xn.transition = p,
            Qe = c
        }
        return null
    }
    function IT(r, i, a, c) {
        do
            us();
        while (Fr !== null);
        if (($e & 6) !== 0)
            throw Error(n(327));
        a = r.finishedWork;
        var p = r.finishedLanes;
        if (a === null)
            return null;
        if (r.finishedWork = null,
        r.finishedLanes = 0,
        a === r.current)
            throw Error(n(177));
        r.callbackNode = null,
        r.callbackPriority = 0;
        var g = a.lanes | a.childLanes;
        if (m1(r, g),
        r === Pt && (xt = Pt = null,
        At = 0),
        (a.subtreeFlags & 2064) === 0 && (a.flags & 2064) === 0 || fl || (fl = !0,
        Jg(wa, function() {
            return us(),
            null
        })),
        g = (a.flags & 15990) !== 0,
        (a.subtreeFlags & 15990) !== 0 || g) {
            g = xn.transition,
            xn.transition = null;
            var x = Qe;
            Qe = 1;
            var k = $e;
            $e |= 4,
            Ad.current = null,
            AT(r, a),
            Fg(a, r),
            tT(Vc),
            Ea = !!jc,
            Vc = jc = null,
            r.current = a,
            RT(a),
            o1(),
            $e = k,
            Qe = x,
            xn.transition = g
        } else
            r.current = a;
        if (fl && (fl = !1,
        Fr = r,
        hl = p),
        g = r.pendingLanes,
        g === 0 && (Vr = null),
        u1(a.stateNode),
        tn(r, ht()),
        i !== null)
            for (c = r.onRecoverableError,
            a = 0; a < i.length; a++)
                p = i[a],
                c(p.value, {
                    componentStack: p.stack,
                    digest: p.digest
                });
        if (dl)
            throw dl = !1,
            r = Od,
            Od = null,
            r;
        return (hl & 1) !== 0 && r.tag !== 0 && us(),
        g = r.pendingLanes,
        (g & 1) !== 0 ? r === Dd ? wo++ : (wo = 0,
        Dd = r) : wo = 0,
        Mr(),
        null
    }
    function us() {
        if (Fr !== null) {
            var r = jp(hl)
              , i = xn.transition
              , a = Qe;
            try {
                if (xn.transition = null,
                Qe = 16 > r ? 16 : r,
                Fr === null)
                    var c = !1;
                else {
                    if (r = Fr,
                    Fr = null,
                    hl = 0,
                    ($e & 6) !== 0)
                        throw Error(n(331));
                    var p = $e;
                    for ($e |= 4,
                    ye = r.current; ye !== null; ) {
                        var g = ye
                          , x = g.child;
                        if ((ye.flags & 16) !== 0) {
                            var k = g.deletions;
                            if (k !== null) {
                                for (var N = 0; N < k.length; N++) {
                                    var $ = k[N];
                                    for (ye = $; ye !== null; ) {
                                        var ee = ye;
                                        switch (ee.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            yo(8, ee, g)
                                        }
                                        var te = ee.child;
                                        if (te !== null)
                                            te.return = ee,
                                            ye = te;
                                        else
                                            for (; ye !== null; ) {
                                                ee = ye;
                                                var Y = ee.sibling
                                                  , he = ee.return;
                                                if (Mg(ee),
                                                ee === $) {
                                                    ye = null;
                                                    break
                                                }
                                                if (Y !== null) {
                                                    Y.return = he,
                                                    ye = Y;
                                                    break
                                                }
                                                ye = he
                                            }
                                    }
                                }
                                var ve = g.alternate;
                                if (ve !== null) {
                                    var xe = ve.child;
                                    if (xe !== null) {
                                        ve.child = null;
                                        do {
                                            var pt = xe.sibling;
                                            xe.sibling = null,
                                            xe = pt
                                        } while (xe !== null)
                                    }
                                }
                                ye = g
                            }
                        }
                        if ((g.subtreeFlags & 2064) !== 0 && x !== null)
                            x.return = g,
                            ye = x;
                        else
                            e: for (; ye !== null; ) {
                                if (g = ye,
                                (g.flags & 2048) !== 0)
                                    switch (g.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        yo(9, g, g.return)
                                    }
                                var j = g.sibling;
                                if (j !== null) {
                                    j.return = g.return,
                                    ye = j;
                                    break e
                                }
                                ye = g.return
                            }
                    }
                    var M = r.current;
                    for (ye = M; ye !== null; ) {
                        x = ye;
                        var z = x.child;
                        if ((x.subtreeFlags & 2064) !== 0 && z !== null)
                            z.return = x,
                            ye = z;
                        else
                            e: for (x = M; ye !== null; ) {
                                if (k = ye,
                                (k.flags & 2048) !== 0)
                                    try {
                                        switch (k.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ll(9, k)
                                        }
                                    } catch (we) {
                                        ct(k, k.return, we)
                                    }
                                if (k === x) {
                                    ye = null;
                                    break e
                                }
                                var ae = k.sibling;
                                if (ae !== null) {
                                    ae.return = k.return,
                                    ye = ae;
                                    break e
                                }
                                ye = k.return
                            }
                    }
                    if ($e = p,
                    Mr(),
                    Un && typeof Un.onPostCommitFiberRoot == "function")
                        try {
                            Un.onPostCommitFiberRoot(Sa, r)
                        } catch {}
                    c = !0
                }
                return c
            } finally {
                Qe = a,
                xn.transition = i
            }
        }
        return !1
    }
    function Gg(r, i, a) {
        i = ss(a, i),
        i = pg(r, i, 1),
        r = Lr(r, i, 1),
        i = qt(),
        r !== null && ($s(r, 1, i),
        tn(r, i))
    }
    function ct(r, i, a) {
        if (r.tag === 3)
            Gg(r, r, a);
        else
            for (; i !== null; ) {
                if (i.tag === 3) {
                    Gg(i, r, a);
                    break
                } else if (i.tag === 1) {
                    var c = i.stateNode;
                    if (typeof i.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Vr === null || !Vr.has(c))) {
                        r = ss(a, r),
                        r = mg(i, r, 1),
                        i = Lr(i, r, 1),
                        r = qt(),
                        i !== null && ($s(i, 1, r),
                        tn(i, r));
                        break
                    }
                }
                i = i.return
            }
    }
    function LT(r, i, a) {
        var c = r.pingCache;
        c !== null && c.delete(i),
        i = qt(),
        r.pingedLanes |= r.suspendedLanes & a,
        Pt === r && (At & a) === a && (St === 4 || St === 3 && (At & 130023424) === At && 500 > ht() - Nd ? gi(r, 0) : Rd |= a),
        tn(r, i)
    }
    function Xg(r, i) {
        i === 0 && ((r.mode & 1) === 0 ? i = 1 : (i = Ta,
        Ta <<= 1,
        (Ta & 130023424) === 0 && (Ta = 4194304)));
        var a = qt();
        r = cr(r, i),
        r !== null && ($s(r, i, a),
        tn(r, a))
    }
    function jT(r) {
        var i = r.memoizedState
          , a = 0;
        i !== null && (a = i.retryLane),
        Xg(r, a)
    }
    function VT(r, i) {
        var a = 0;
        switch (r.tag) {
        case 13:
            var c = r.stateNode
              , p = r.memoizedState;
            p !== null && (a = p.retryLane);
            break;
        case 19:
            c = r.stateNode;
            break;
        default:
            throw Error(n(314))
        }
        c !== null && c.delete(i),
        Xg(r, a)
    }
    var Yg;
    Yg = function(r, i, a) {
        if (r !== null)
            if (r.memoizedProps !== i.pendingProps || Xt.current)
                Jt = !0;
            else {
                if ((r.lanes & a) === 0 && (i.flags & 128) === 0)
                    return Jt = !1,
                    PT(r, i, a);
                Jt = (r.flags & 131072) !== 0
            }
        else
            Jt = !1,
            tt && (i.flags & 1048576) !== 0 && Nm(i, Wa, i.index);
        switch (i.lanes = 0,
        i.tag) {
        case 2:
            var c = i.type;
            ol(r, i),
            r = i.pendingProps;
            var p = Xi(i, Lt.current);
            rs(i, a),
            p = ld(null, i, c, r, p, a);
            var g = ud();
            return i.flags |= 1,
            typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (i.tag = 1,
            i.memoizedState = null,
            i.updateQueue = null,
            Yt(c) ? (g = !0,
            Ua(i)) : g = !1,
            i.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null,
            td(i),
            p.updater = il,
            i.stateNode = p,
            p._reactInternals = i,
            md(i, c, r, a),
            i = xd(null, i, c, !0, g, a)) : (i.tag = 0,
            tt && g && Wc(i),
            Wt(null, i, p, a),
            i = i.child),
            i;
        case 16:
            c = i.elementType;
            e: {
                switch (ol(r, i),
                r = i.pendingProps,
                p = c._init,
                c = p(c._payload),
                i.type = c,
                p = i.tag = BT(c),
                r = En(c, r),
                p) {
                case 0:
                    i = vd(null, i, c, r, a);
                    break e;
                case 1:
                    i = _g(null, i, c, r, a);
                    break e;
                case 11:
                    i = xg(null, i, c, r, a);
                    break e;
                case 14:
                    i = wg(null, i, c, En(c.type, r), a);
                    break e
                }
                throw Error(n(306, c, ""))
            }
            return i;
        case 0:
            return c = i.type,
            p = i.pendingProps,
            p = i.elementType === c ? p : En(c, p),
            vd(r, i, c, p, a);
        case 1:
            return c = i.type,
            p = i.pendingProps,
            p = i.elementType === c ? p : En(c, p),
            _g(r, i, c, p, a);
        case 3:
            e: {
                if (Pg(i),
                r === null)
                    throw Error(n(387));
                c = i.pendingProps,
                g = i.memoizedState,
                p = g.element,
                Bm(r, i),
                Xa(i, c, null, a);
                var x = i.memoizedState;
                if (c = x.element,
                g.isDehydrated)
                    if (g = {
                        element: c,
                        isDehydrated: !1,
                        cache: x.cache,
                        pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
                        transitions: x.transitions
                    },
                    i.updateQueue.baseState = g,
                    i.memoizedState = g,
                    i.flags & 256) {
                        p = ss(Error(n(423)), i),
                        i = Cg(r, i, c, a, p);
                        break e
                    } else if (c !== p) {
                        p = ss(Error(n(424)), i),
                        i = Cg(r, i, c, a, p);
                        break e
                    } else
                        for (an = Nr(i.stateNode.containerInfo.firstChild),
                        on = i,
                        tt = !0,
                        Cn = null,
                        a = Vm(i, null, c, a),
                        i.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling;
                else {
                    if (es(),
                    c === p) {
                        i = fr(r, i, a);
                        break e
                    }
                    Wt(r, i, c, a)
                }
                i = i.child
            }
            return i;
        case 5:
            return $m(i),
            r === null && Kc(i),
            c = i.type,
            p = i.pendingProps,
            g = r !== null ? r.memoizedProps : null,
            x = p.children,
            Fc(c, p) ? x = null : g !== null && Fc(c, g) && (i.flags |= 32),
            Tg(r, i),
            Wt(r, i, x, a),
            i.child;
        case 6:
            return r === null && Kc(i),
            null;
        case 13:
            return Eg(r, i, a);
        case 4:
            return nd(i, i.stateNode.containerInfo),
            c = i.pendingProps,
            r === null ? i.child = ts(i, null, c, a) : Wt(r, i, c, a),
            i.child;
        case 11:
            return c = i.type,
            p = i.pendingProps,
            p = i.elementType === c ? p : En(c, p),
            xg(r, i, c, p, a);
        case 7:
            return Wt(r, i, i.pendingProps, a),
            i.child;
        case 8:
            return Wt(r, i, i.pendingProps.children, a),
            i.child;
        case 12:
            return Wt(r, i, i.pendingProps.children, a),
            i.child;
        case 10:
            e: {
                if (c = i.type._context,
                p = i.pendingProps,
                g = i.memoizedProps,
                x = p.value,
                Xe(Ka, c._currentValue),
                c._currentValue = x,
                g !== null)
                    if (Pn(g.value, x)) {
                        if (g.children === p.children && !Xt.current) {
                            i = fr(r, i, a);
                            break e
                        }
                    } else
                        for (g = i.child,
                        g !== null && (g.return = i); g !== null; ) {
                            var k = g.dependencies;
                            if (k !== null) {
                                x = g.child;
                                for (var N = k.firstContext; N !== null; ) {
                                    if (N.context === c) {
                                        if (g.tag === 1) {
                                            N = dr(-1, a & -a),
                                            N.tag = 2;
                                            var $ = g.updateQueue;
                                            if ($ !== null) {
                                                $ = $.shared;
                                                var ee = $.pending;
                                                ee === null ? N.next = N : (N.next = ee.next,
                                                ee.next = N),
                                                $.pending = N
                                            }
                                        }
                                        g.lanes |= a,
                                        N = g.alternate,
                                        N !== null && (N.lanes |= a),
                                        Jc(g.return, a, i),
                                        k.lanes |= a;
                                        break
                                    }
                                    N = N.next
                                }
                            } else if (g.tag === 10)
                                x = g.type === i.type ? null : g.child;
                            else if (g.tag === 18) {
                                if (x = g.return,
                                x === null)
                                    throw Error(n(341));
                                x.lanes |= a,
                                k = x.alternate,
                                k !== null && (k.lanes |= a),
                                Jc(x, a, i),
                                x = g.sibling
                            } else
                                x = g.child;
                            if (x !== null)
                                x.return = g;
                            else
                                for (x = g; x !== null; ) {
                                    if (x === i) {
                                        x = null;
                                        break
                                    }
                                    if (g = x.sibling,
                                    g !== null) {
                                        g.return = x.return,
                                        x = g;
                                        break
                                    }
                                    x = x.return
                                }
                            g = x
                        }
                Wt(r, i, p.children, a),
                i = i.child
            }
            return i;
        case 9:
            return p = i.type,
            c = i.pendingProps.children,
            rs(i, a),
            p = yn(p),
            c = c(p),
            i.flags |= 1,
            Wt(r, i, c, a),
            i.child;
        case 14:
            return c = i.type,
            p = En(c, i.pendingProps),
            p = En(c.type, p),
            wg(r, i, c, p, a);
        case 15:
            return Sg(r, i, i.type, i.pendingProps, a);
        case 17:
            return c = i.type,
            p = i.pendingProps,
            p = i.elementType === c ? p : En(c, p),
            ol(r, i),
            i.tag = 1,
            Yt(c) ? (r = !0,
            Ua(i)) : r = !1,
            rs(i, a),
            fg(i, c, p),
            md(i, c, p, a),
            xd(null, i, c, !0, r, a);
        case 19:
            return Ag(r, i, a);
        case 22:
            return bg(r, i, a)
        }
        throw Error(n(156, i.tag))
    }
    ;
    function Jg(r, i) {
        return Op(r, i)
    }
    function FT(r, i, a, c) {
        this.tag = r,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = i,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = c,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function wn(r, i, a, c) {
        return new FT(r,i,a,c)
    }
    function Fd(r) {
        return r = r.prototype,
        !(!r || !r.isReactComponent)
    }
    function BT(r) {
        if (typeof r == "function")
            return Fd(r) ? 1 : 0;
        if (r != null) {
            if (r = r.$$typeof,
            r === O)
                return 11;
            if (r === me)
                return 14
        }
        return 2
    }
    function Ur(r, i) {
        var a = r.alternate;
        return a === null ? (a = wn(r.tag, i, r.key, r.mode),
        a.elementType = r.elementType,
        a.type = r.type,
        a.stateNode = r.stateNode,
        a.alternate = r,
        r.alternate = a) : (a.pendingProps = i,
        a.type = r.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = r.flags & 14680064,
        a.childLanes = r.childLanes,
        a.lanes = r.lanes,
        a.child = r.child,
        a.memoizedProps = r.memoizedProps,
        a.memoizedState = r.memoizedState,
        a.updateQueue = r.updateQueue,
        i = r.dependencies,
        a.dependencies = i === null ? null : {
            lanes: i.lanes,
            firstContext: i.firstContext
        },
        a.sibling = r.sibling,
        a.index = r.index,
        a.ref = r.ref,
        a
    }
    function yl(r, i, a, c, p, g) {
        var x = 2;
        if (c = r,
        typeof r == "function")
            Fd(r) && (x = 1);
        else if (typeof r == "string")
            x = 5;
        else
            e: switch (r) {
            case F:
                return vi(a.children, p, g, i);
            case W:
                x = 8,
                p |= 8;
                break;
            case X:
                return r = wn(12, a, i, p | 2),
                r.elementType = X,
                r.lanes = g,
                r;
            case q:
                return r = wn(13, a, i, p),
                r.elementType = q,
                r.lanes = g,
                r;
            case V:
                return r = wn(19, a, i, p),
                r.elementType = V,
                r.lanes = g,
                r;
            case se:
                return vl(a, p, g, i);
            default:
                if (typeof r == "object" && r !== null)
                    switch (r.$$typeof) {
                    case G:
                        x = 10;
                        break e;
                    case Q:
                        x = 9;
                        break e;
                    case O:
                        x = 11;
                        break e;
                    case me:
                        x = 14;
                        break e;
                    case ce:
                        x = 16,
                        c = null;
                        break e
                    }
                throw Error(n(130, r == null ? r : typeof r, ""))
            }
        return i = wn(x, a, i, p),
        i.elementType = r,
        i.type = c,
        i.lanes = g,
        i
    }
    function vi(r, i, a, c) {
        return r = wn(7, r, c, i),
        r.lanes = a,
        r
    }
    function vl(r, i, a, c) {
        return r = wn(22, r, c, i),
        r.elementType = se,
        r.lanes = a,
        r.stateNode = {
            isHidden: !1
        },
        r
    }
    function Bd(r, i, a) {
        return r = wn(6, r, null, i),
        r.lanes = a,
        r
    }
    function zd(r, i, a) {
        return i = wn(4, r.children !== null ? r.children : [], r.key, i),
        i.lanes = a,
        i.stateNode = {
            containerInfo: r.containerInfo,
            pendingChildren: null,
            implementation: r.implementation
        },
        i
    }
    function zT(r, i, a, c, p) {
        this.tag = i,
        this.containerInfo = r,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = pc(0),
        this.expirationTimes = pc(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = pc(0),
        this.identifierPrefix = c,
        this.onRecoverableError = p,
        this.mutableSourceEagerHydrationData = null
    }
    function Ud(r, i, a, c, p, g, x, k, N) {
        return r = new zT(r,i,a,k,N),
        i === 1 ? (i = 1,
        g === !0 && (i |= 8)) : i = 0,
        g = wn(3, null, null, i),
        r.current = g,
        g.stateNode = r,
        g.memoizedState = {
            element: c,
            isDehydrated: a,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        td(g),
        r
    }
    function UT(r, i, a) {
        var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: B,
            key: c == null ? null : "" + c,
            children: r,
            containerInfo: i,
            implementation: a
        }
    }
    function ey(r) {
        if (!r)
            return Dr;
        r = r._reactInternals;
        e: {
            if (oi(r) !== r || r.tag !== 1)
                throw Error(n(170));
            var i = r;
            do {
                switch (i.tag) {
                case 3:
                    i = i.stateNode.context;
                    break e;
                case 1:
                    if (Yt(i.type)) {
                        i = i.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                i = i.return
            } while (i !== null);
            throw Error(n(171))
        }
        if (r.tag === 1) {
            var a = r.type;
            if (Yt(a))
                return km(r, a, i)
        }
        return i
    }
    function ty(r, i, a, c, p, g, x, k, N) {
        return r = Ud(a, c, !0, r, p, g, x, k, N),
        r.context = ey(null),
        a = r.current,
        c = qt(),
        p = Br(a),
        g = dr(c, p),
        g.callback = i ?? null,
        Lr(a, g, p),
        r.current.lanes = p,
        $s(r, p, c),
        tn(r, c),
        r
    }
    function xl(r, i, a, c) {
        var p = i.current
          , g = qt()
          , x = Br(p);
        return a = ey(a),
        i.context === null ? i.context = a : i.pendingContext = a,
        i = dr(g, x),
        i.payload = {
            element: r
        },
        c = c === void 0 ? null : c,
        c !== null && (i.callback = c),
        r = Lr(p, i, x),
        r !== null && (Rn(r, p, x, g),
        Ga(r, p, x)),
        x
    }
    function wl(r) {
        return r = r.current,
        r.child ? (r.child.tag === 5,
        r.child.stateNode) : null
    }
    function ny(r, i) {
        if (r = r.memoizedState,
        r !== null && r.dehydrated !== null) {
            var a = r.retryLane;
            r.retryLane = a !== 0 && a < i ? a : i
        }
    }
    function $d(r, i) {
        ny(r, i),
        (r = r.alternate) && ny(r, i)
    }
    function $T() {
        return null
    }
    var ry = typeof reportError == "function" ? reportError : function(r) {
        console.error(r)
    }
    ;
    function Hd(r) {
        this._internalRoot = r
    }
    Sl.prototype.render = Hd.prototype.render = function(r) {
        var i = this._internalRoot;
        if (i === null)
            throw Error(n(409));
        xl(r, i, null, null)
    }
    ,
    Sl.prototype.unmount = Hd.prototype.unmount = function() {
        var r = this._internalRoot;
        if (r !== null) {
            this._internalRoot = null;
            var i = r.containerInfo;
            mi(function() {
                xl(null, r, null, null)
            }),
            i[or] = null
        }
    }
    ;
    function Sl(r) {
        this._internalRoot = r
    }
    Sl.prototype.unstable_scheduleHydration = function(r) {
        if (r) {
            var i = Bp();
            r = {
                blockedOn: null,
                target: r,
                priority: i
            };
            for (var a = 0; a < kr.length && i !== 0 && i < kr[a].priority; a++)
                ;
            kr.splice(a, 0, r),
            a === 0 && $p(r)
        }
    }
    ;
    function Wd(r) {
        return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11)
    }
    function bl(r) {
        return !(!r || r.nodeType !== 1 && r.nodeType !== 9 && r.nodeType !== 11 && (r.nodeType !== 8 || r.nodeValue !== " react-mount-point-unstable "))
    }
    function iy() {}
    function HT(r, i, a, c, p) {
        if (p) {
            if (typeof c == "function") {
                var g = c;
                c = function() {
                    var $ = wl(x);
                    g.call($)
                }
            }
            var x = ty(i, c, r, 0, null, !1, !1, "", iy);
            return r._reactRootContainer = x,
            r[or] = x.current,
            ro(r.nodeType === 8 ? r.parentNode : r),
            mi(),
            x
        }
        for (; p = r.lastChild; )
            r.removeChild(p);
        if (typeof c == "function") {
            var k = c;
            c = function() {
                var $ = wl(N);
                k.call($)
            }
        }
        var N = Ud(r, 0, !1, null, null, !1, !1, "", iy);
        return r._reactRootContainer = N,
        r[or] = N.current,
        ro(r.nodeType === 8 ? r.parentNode : r),
        mi(function() {
            xl(i, N, a, c)
        }),
        N
    }
    function Tl(r, i, a, c, p) {
        var g = a._reactRootContainer;
        if (g) {
            var x = g;
            if (typeof p == "function") {
                var k = p;
                p = function() {
                    var N = wl(x);
                    k.call(N)
                }
            }
            xl(i, x, r, p)
        } else
            x = HT(a, i, r, p, c);
        return wl(x)
    }
    Vp = function(r) {
        switch (r.tag) {
        case 3:
            var i = r.stateNode;
            if (i.current.memoizedState.isDehydrated) {
                var a = Us(i.pendingLanes);
                a !== 0 && (mc(i, a | 1),
                tn(i, ht()),
                ($e & 6) === 0 && (ls = ht() + 500,
                Mr()))
            }
            break;
        case 13:
            mi(function() {
                var c = cr(r, 1);
                if (c !== null) {
                    var p = qt();
                    Rn(c, r, 1, p)
                }
            }),
            $d(r, 1)
        }
    }
    ,
    gc = function(r) {
        if (r.tag === 13) {
            var i = cr(r, 134217728);
            if (i !== null) {
                var a = qt();
                Rn(i, r, 134217728, a)
            }
            $d(r, 134217728)
        }
    }
    ,
    Fp = function(r) {
        if (r.tag === 13) {
            var i = Br(r)
              , a = cr(r, i);
            if (a !== null) {
                var c = qt();
                Rn(a, r, i, c)
            }
            $d(r, i)
        }
    }
    ,
    Bp = function() {
        return Qe
    }
    ,
    zp = function(r, i) {
        var a = Qe;
        try {
            return Qe = r,
            i()
        } finally {
            Qe = a
        }
    }
    ,
    lc = function(r, i, a) {
        switch (i) {
        case "input":
            if (Mi(r, a),
            i = a.name,
            a.type === "radio" && i != null) {
                for (a = r; a.parentNode; )
                    a = a.parentNode;
                for (a = a.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'),
                i = 0; i < a.length; i++) {
                    var c = a[i];
                    if (c !== r && c.form === r.form) {
                        var p = Ba(c);
                        if (!p)
                            throw Error(n(90));
                        ir(c),
                        Mi(c, p)
                    }
                }
            }
            break;
        case "textarea":
            K(r, a);
            break;
        case "select":
            i = a.value,
            i != null && sr(r, !!a.multiple, i, !1)
        }
    }
    ,
    Pp = Ld,
    Cp = mi;
    var WT = {
        usingClientEntryPoint: !1,
        Events: [oo, Zi, Ba, Tp, _p, Ld]
    }
      , So = {
        findFiberByHostInstance: ai,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , qT = {
        bundleType: So.bundleType,
        version: So.version,
        rendererPackageName: So.rendererPackageName,
        rendererConfig: So.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: I.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(r) {
            return r = Rp(r),
            r === null ? null : r.stateNode
        },
        findFiberByHostInstance: So.findFiberByHostInstance || $T,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var _l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!_l.isDisabled && _l.supportsFiber)
            try {
                Sa = _l.inject(qT),
                Un = _l
            } catch {}
    }
    return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WT,
    nn.createPortal = function(r, i) {
        var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Wd(i))
            throw Error(n(200));
        return UT(r, i, null, a)
    }
    ,
    nn.createRoot = function(r, i) {
        if (!Wd(r))
            throw Error(n(299));
        var a = !1
          , c = ""
          , p = ry;
        return i != null && (i.unstable_strictMode === !0 && (a = !0),
        i.identifierPrefix !== void 0 && (c = i.identifierPrefix),
        i.onRecoverableError !== void 0 && (p = i.onRecoverableError)),
        i = Ud(r, 1, !1, null, null, a, !1, c, p),
        r[or] = i.current,
        ro(r.nodeType === 8 ? r.parentNode : r),
        new Hd(i)
    }
    ,
    nn.findDOMNode = function(r) {
        if (r == null)
            return null;
        if (r.nodeType === 1)
            return r;
        var i = r._reactInternals;
        if (i === void 0)
            throw typeof r.render == "function" ? Error(n(188)) : (r = Object.keys(r).join(","),
            Error(n(268, r)));
        return r = Rp(i),
        r = r === null ? null : r.stateNode,
        r
    }
    ,
    nn.flushSync = function(r) {
        return mi(r)
    }
    ,
    nn.hydrate = function(r, i, a) {
        if (!bl(i))
            throw Error(n(200));
        return Tl(null, r, i, !0, a)
    }
    ,
    nn.hydrateRoot = function(r, i, a) {
        if (!Wd(r))
            throw Error(n(405));
        var c = a != null && a.hydratedSources || null
          , p = !1
          , g = ""
          , x = ry;
        if (a != null && (a.unstable_strictMode === !0 && (p = !0),
        a.identifierPrefix !== void 0 && (g = a.identifierPrefix),
        a.onRecoverableError !== void 0 && (x = a.onRecoverableError)),
        i = ty(i, null, r, 1, a ?? null, p, !1, g, x),
        r[or] = i.current,
        ro(r),
        c)
            for (r = 0; r < c.length; r++)
                a = c[r],
                p = a._getVersion,
                p = p(a._source),
                i.mutableSourceEagerHydrationData == null ? i.mutableSourceEagerHydrationData = [a, p] : i.mutableSourceEagerHydrationData.push(a, p);
        return new Sl(i)
    }
    ,
    nn.render = function(r, i, a) {
        if (!bl(i))
            throw Error(n(200));
        return Tl(null, r, i, !1, a)
    }
    ,
    nn.unmountComponentAtNode = function(r) {
        if (!bl(r))
            throw Error(n(40));
        return r._reactRootContainer ? (mi(function() {
            Tl(null, null, r, !1, function() {
                r._reactRootContainer = null,
                r[or] = null
            })
        }),
        !0) : !1
    }
    ,
    nn.unstable_batchedUpdates = Ld,
    nn.unstable_renderSubtreeIntoContainer = function(r, i, a, c) {
        if (!bl(a))
            throw Error(n(200));
        if (r == null || r._reactInternals === void 0)
            throw Error(n(38));
        return Tl(r, i, a, !1, c)
    }
    ,
    nn.version = "18.3.1-next-f1338f8080-20240426",
    nn
}
var fy;
function Ou() {
    if (fy)
        return Kd.exports;
    fy = 1;
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (e) {
                console.error(e)
            }
    }
    return t(),
    Kd.exports = e_(),
    Kd.exports
}
var hy;
function t_() {
    if (hy)
        return Cl;
    hy = 1;
    var t = Ou();
    return Cl.createRoot = t.createRoot,
    Cl.hydrateRoot = t.hydrateRoot,
    Cl
}
var n_ = t_();
function r_(t, e) {
    if (t instanceof RegExp)
        return {
            keys: !1,
            pattern: t
        };
    var n, s, o, l, u = [], d = "", f = t.split("/");
    for (f[0] || f.shift(); o = f.shift(); )
        n = o[0],
        n === "*" ? (u.push(n),
        d += o[1] === "?" ? "(?:/(.*))?" : "/(.*)") : n === ":" ? (s = o.indexOf("?", 1),
        l = o.indexOf(".", 1),
        u.push(o.substring(1, ~s ? s : ~l ? l : o.length)),
        d += ~s && !~l ? "(?:/([^/]+?))?" : "/([^/]+?)",
        ~l && (d += (~s ? "?" : "") + "\\" + o.substring(l))) : d += "/" + o;
    return {
        keys: u,
        pattern: new RegExp("^" + d + (e ? "(?=$|/)" : "/?$"),"i")
    }
}
var C = nr();
const De = q0(C)
  , i_ = KT({
    __proto__: null,
    default: De
}, [C]);
var Xd = {
    exports: {}
}
  , Yd = {};
var py;
function s_() {
    if (py)
        return Yd;
    py = 1;
    var t = nr();
    function e(y, v) {
        return y === v && (y !== 0 || 1 / y === 1 / v) || y !== y && v !== v
    }
    var n = typeof Object.is == "function" ? Object.is : e
      , s = t.useState
      , o = t.useEffect
      , l = t.useLayoutEffect
      , u = t.useDebugValue;
    function d(y, v) {
        var w = v()
          , b = s({
            inst: {
                value: w,
                getSnapshot: v
            }
        })
          , S = b[0].inst
          , T = b[1];
        return l(function() {
            S.value = w,
            S.getSnapshot = v,
            f(S) && T({
                inst: S
            })
        }, [y, w, v]),
        o(function() {
            return f(S) && T({
                inst: S
            }),
            y(function() {
                f(S) && T({
                    inst: S
                })
            })
        }, [y]),
        u(w),
        w
    }
    function f(y) {
        var v = y.getSnapshot;
        y = y.value;
        try {
            var w = v();
            return !n(y, w)
        } catch {
            return !0
        }
    }
    function h(y, v) {
        return v()
    }
    var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? h : d;
    return Yd.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : m,
    Yd
}
var my;
function o_() {
    return my || (my = 1,
    Xd.exports = s_()),
    Xd.exports
}
var a_ = o_();
const l_ = i_.useInsertionEffect
  , u_ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , c_ = u_ ? C.useLayoutEffect : C.useEffect
  , d_ = l_ || c_
  , Q0 = t => {
    const e = C.useRef([t, (...n) => e[0](...n)]).current;
    return d_( () => {
        e[0] = t
    }
    ),
    e[1]
}
  , f_ = "popstate"
  , hh = "pushState"
  , ph = "replaceState"
  , h_ = "hashchange"
  , gy = [f_, hh, ph, h_]
  , p_ = t => {
    for (const e of gy)
        addEventListener(e, t);
    return () => {
        for (const e of gy)
            removeEventListener(e, t)
    }
}
  , K0 = (t, e) => a_.useSyncExternalStore(p_, t, e)
  , m_ = () => location.search
  , g_ = ({ssrSearch: t=""}={}) => K0(m_, () => t)
  , yy = () => location.pathname
  , y_ = ({ssrPath: t}={}) => K0(yy, t ? () => t : yy)
  , v_ = (t, {replace: e=!1, state: n=null}={}) => history[e ? ph : hh](n, "", t)
  , x_ = (t={}) => [y_(t), v_]
  , vy = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[vy] > "u") {
    for (const t of [hh, ph]) {
        const e = history[t];
        history[t] = function() {
            const n = e.apply(this, arguments)
              , s = new Event(t);
            return s.arguments = arguments,
            dispatchEvent(s),
            n
        }
    }
    Object.defineProperty(window, vy, {
        value: !0
    })
}
const w_ = (t, e) => e.toLowerCase().indexOf(t.toLowerCase()) ? "~" + e : e.slice(t.length) || "/"
  , Z0 = (t="") => t === "/" ? "" : t
  , S_ = (t, e) => t[0] === "~" ? t.slice(1) : Z0(e) + t
  , b_ = (t="", e) => w_(xy(Z0(t)), xy(e))
  , xy = t => {
    try {
        return decodeURI(t)
    } catch {
        return t
    }
}
  , G0 = {
    hook: x_,
    searchHook: g_,
    parser: r_,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    hrefs: t => t
}
  , X0 = C.createContext(G0)
  , Du = () => C.useContext(X0)
  , Y0 = {}
  , J0 = C.createContext(Y0)
  , T_ = () => C.useContext(J0)
  , mh = t => {
    const [e,n] = t.hook(t);
    return [b_(t.base, e), Q0( (s, o) => n(S_(s, t.base), o))]
}
  , ex = (t, e, n, s) => {
    const {pattern: o, keys: l} = e instanceof RegExp ? {
        keys: !1,
        pattern: e
    } : t(e || "*", s)
      , u = o.exec(n) || []
      , [d,...f] = u;
    return d !== void 0 ? [!0, ( () => {
        const h = l !== !1 ? Object.fromEntries(l.map( (y, v) => [y, f[v]])) : u.groups;
        let m = {
            ...f
        };
        return h && Object.assign(m, h),
        m
    }
    )(), ...s ? [d] : []] : [!1, null]
}
  , __ = ({children: t, ...e}) => {
    const n = Du()
      , s = e.hook ? G0 : n;
    let o = s;
    const [l,u] = e.ssrPath?.split("?") ?? [];
    u && (e.ssrSearch = u,
    e.ssrPath = l),
    e.hrefs = e.hrefs ?? e.hook?.hrefs;
    let d = C.useRef({})
      , f = d.current
      , h = f;
    for (let m in s) {
        const y = m === "base" ? s[m] + (e[m] || "") : e[m] || s[m];
        f === h && y !== h[m] && (d.current = h = {
            ...h
        }),
        h[m] = y,
        y !== s[m] && (o = h)
    }
    return C.createElement(X0.Provider, {
        value: o,
        children: t
    })
}
  , wy = ({children: t, component: e}, n) => e ? C.createElement(e, {
    params: n
}) : typeof t == "function" ? t(n) : t
  , P_ = t => {
    let e = C.useRef(Y0)
      , n = e.current;
    for (const s in t)
        t[s] !== n[s] && (n = t);
    return Object.keys(t).length === 0 && (n = t),
    e.current = n
}
  , Sy = ({path: t, nest: e, match: n, ...s}) => {
    const o = Du()
      , [l] = mh(o)
      , [u,d,f] = n ?? ex(o.parser, t, l, e)
      , h = P_({
        ...T_(),
        ...d
    });
    if (!u)
        return null;
    const m = f ? C.createElement(__, {
        base: f
    }, wy(s, h)) : wy(s, h);
    return C.createElement(J0.Provider, {
        value: h,
        children: m
    })
}
;
C.forwardRef( (t, e) => {
    const n = Du()
      , [s,o] = mh(n)
      , {to: l="", href: u=l, onClick: d, asChild: f, children: h, className: m, replace: y, state: v, ...w} = t
      , b = Q0(T => {
        T.ctrlKey || T.metaKey || T.altKey || T.shiftKey || T.button !== 0 || (d?.(T),
        T.defaultPrevented || (T.preventDefault(),
        o(u, t)))
    }
    )
      , S = n.hrefs(u[0] === "~" ? u.slice(1) : n.base + u, n);
    return f && C.isValidElement(h) ? C.cloneElement(h, {
        onClick: b,
        href: S
    }) : C.createElement("a", {
        ...w,
        onClick: b,
        href: S,
        className: m?.call ? m(s === u) : m,
        children: h,
        ref: e
    })
}
);
const tx = t => Array.isArray(t) ? t.flatMap(e => tx(e && e.type === C.Fragment ? e.props.children : e)) : [t]
  , C_ = ({children: t, location: e}) => {
    const n = Du()
      , [s] = mh(n);
    for (const o of tx(t)) {
        let l = 0;
        if (C.isValidElement(o) && (l = ex(n.parser, o.props.path, e || s, o.props.nest))[0])
            return C.cloneElement(o, {
                match: l
            })
    }
    return null
}
;
var aa = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
        return this.listeners.add(t),
        this.onSubscribe(),
        () => {
            this.listeners.delete(t),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Mu = typeof window > "u" || "Deno"in globalThis;
function On() {}
function E_(t, e) {
    return typeof t == "function" ? t(e) : t
}
function k_(t) {
    return typeof t == "number" && t >= 0 && t !== 1 / 0
}
function A_(t, e) {
    return Math.max(t + (e || 0) - Date.now(), 0)
}
function by(t, e) {
    return typeof t == "function" ? t(e) : t
}
function R_(t, e) {
    return typeof t == "function" ? t(e) : t
}
function Ty(t, e) {
    const {type: n="all", exact: s, fetchStatus: o, predicate: l, queryKey: u, stale: d} = t;
    if (u) {
        if (s) {
            if (e.queryHash !== gh(u, e.options))
                return !1
        } else if (!Bo(e.queryKey, u))
            return !1
    }
    if (n !== "all") {
        const f = e.isActive();
        if (n === "active" && !f || n === "inactive" && f)
            return !1
    }
    return !(typeof d == "boolean" && e.isStale() !== d || o && o !== e.state.fetchStatus || l && !l(e))
}
function _y(t, e) {
    const {exact: n, status: s, predicate: o, mutationKey: l} = t;
    if (l) {
        if (!e.options.mutationKey)
            return !1;
        if (n) {
            if (Ci(e.options.mutationKey) !== Ci(l))
                return !1
        } else if (!Bo(e.options.mutationKey, l))
            return !1
    }
    return !(s && e.state.status !== s || o && !o(e))
}
function gh(t, e) {
    return (e?.queryKeyHashFn || Ci)(t)
}
function Ci(t) {
    return JSON.stringify(t, (e, n) => Nf(n) ? Object.keys(n).sort().reduce( (s, o) => (s[o] = n[o],
    s), {}) : n)
}
function Bo(t, e) {
    return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some(n => !Bo(t[n], e[n])) : !1
}
function nx(t, e) {
    if (t === e)
        return t;
    const n = Py(t) && Py(e);
    if (n || Nf(t) && Nf(e)) {
        const s = n ? t : Object.keys(t)
          , o = s.length
          , l = n ? e : Object.keys(e)
          , u = l.length
          , d = n ? [] : {};
        let f = 0;
        for (let h = 0; h < u; h++) {
            const m = n ? h : l[h];
            (!n && s.includes(m) || n) && t[m] === void 0 && e[m] === void 0 ? (d[m] = void 0,
            f++) : (d[m] = nx(t[m], e[m]),
            d[m] === t[m] && t[m] !== void 0 && f++)
        }
        return o === u && f === o ? t : d
    }
    return e
}
function N_(t, e) {
    if (!e || Object.keys(t).length !== Object.keys(e).length)
        return !1;
    for (const n in t)
        if (t[n] !== e[n])
            return !1;
    return !0
}
function Py(t) {
    return Array.isArray(t) && t.length === Object.keys(t).length
}
function Nf(t) {
    if (!Cy(t))
        return !1;
    const e = t.constructor;
    if (e === void 0)
        return !0;
    const n = e.prototype;
    return !(!Cy(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype)
}
function Cy(t) {
    return Object.prototype.toString.call(t) === "[object Object]"
}
function O_(t) {
    return new Promise(e => {
        setTimeout(e, t)
    }
    )
}
function D_(t, e, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(t, e) : n.structuralSharing !== !1 ? nx(t, e) : e
}
function M_(t, e, n=0) {
    const s = [...t, e];
    return n && s.length > n ? s.slice(1) : s
}
function I_(t, e, n=0) {
    const s = [e, ...t];
    return n && s.length > n ? s.slice(0, -1) : s
}
var yh = Symbol();
function rx(t, e) {
    return !t.queryFn && e?.initialPromise ? () => e.initialPromise : !t.queryFn || t.queryFn === yh ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn
}
var L_ = class extends aa {
    #e;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = t => {
            if (!Mu && window.addEventListener) {
                const e = () => t();
                return window.addEventListener("visibilitychange", e, !1),
                () => {
                    window.removeEventListener("visibilitychange", e)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(t) {
        this.#n = t,
        this.#t?.(),
        this.#t = t(e => {
            typeof e == "boolean" ? this.setFocused(e) : this.onFocus()
        }
        )
    }
    setFocused(t) {
        this.#e !== t && (this.#e = t,
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(e => {
            e(t)
        }
        )
    }
    isFocused() {
        return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden"
    }
}
  , ix = new L_
  , j_ = class extends aa {
    #e = !0;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = t => {
            if (!Mu && window.addEventListener) {
                const e = () => t(!0)
                  , n = () => t(!1);
                return window.addEventListener("online", e, !1),
                window.addEventListener("offline", n, !1),
                () => {
                    window.removeEventListener("online", e),
                    window.removeEventListener("offline", n)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(t) {
        this.#n = t,
        this.#t?.(),
        this.#t = t(this.setOnline.bind(this))
    }
    setOnline(t) {
        this.#e !== t && (this.#e = t,
        this.listeners.forEach(n => {
            n(t)
        }
        ))
    }
    isOnline() {
        return this.#e
    }
}
  , ou = new j_;
function V_() {
    let t, e;
    const n = new Promise( (o, l) => {
        t = o,
        e = l
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function s(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        s({
            status: "fulfilled",
            value: o
        }),
        t(o)
    }
    ,
    n.reject = o => {
        s({
            status: "rejected",
            reason: o
        }),
        e(o)
    }
    ,
    n
}
function F_(t) {
    return Math.min(1e3 * 2 ** t, 3e4)
}
function sx(t) {
    return (t ?? "online") === "online" ? ou.isOnline() : !0
}
var ox = class extends Error {
    constructor(t) {
        super("CancelledError"),
        this.revert = t?.revert,
        this.silent = t?.silent
    }
}
;
function Jd(t) {
    return t instanceof ox
}
function ax(t) {
    let e = !1, n = 0, s = !1, o;
    const l = V_()
      , u = S => {
        s || (v(new ox(S)),
        t.abort?.())
    }
      , d = () => {
        e = !0
    }
      , f = () => {
        e = !1
    }
      , h = () => ix.isFocused() && (t.networkMode === "always" || ou.isOnline()) && t.canRun()
      , m = () => sx(t.networkMode) && t.canRun()
      , y = S => {
        s || (s = !0,
        t.onSuccess?.(S),
        o?.(),
        l.resolve(S))
    }
      , v = S => {
        s || (s = !0,
        t.onError?.(S),
        o?.(),
        l.reject(S))
    }
      , w = () => new Promise(S => {
        o = T => {
            (s || h()) && S(T)
        }
        ,
        t.onPause?.()
    }
    ).then( () => {
        o = void 0,
        s || t.onContinue?.()
    }
    )
      , b = () => {
        if (s)
            return;
        let S;
        const T = n === 0 ? t.initialPromise : void 0;
        try {
            S = T ?? t.fn()
        } catch (_) {
            S = Promise.reject(_)
        }
        Promise.resolve(S).then(y).catch(_ => {
            if (s)
                return;
            const P = t.retry ?? (Mu ? 0 : 3)
              , A = t.retryDelay ?? F_
              , I = typeof A == "function" ? A(n, _) : A
              , L = P === !0 || typeof P == "number" && n < P || typeof P == "function" && P(n, _);
            if (e || !L) {
                v(_);
                return
            }
            n++,
            t.onFail?.(n, _),
            O_(I).then( () => h() ? void 0 : w()).then( () => {
                e ? v(_) : b()
            }
            )
        }
        )
    }
    ;
    return {
        promise: l,
        cancel: u,
        continue: () => (o?.(),
        l),
        cancelRetry: d,
        continueRetry: f,
        canStart: m,
        start: () => (m() ? b() : w().then(b),
        l)
    }
}
function B_() {
    let t = []
      , e = 0
      , n = d => {
        d()
    }
      , s = d => {
        d()
    }
      , o = d => setTimeout(d, 0);
    const l = d => {
        e ? t.push(d) : o( () => {
            n(d)
        }
        )
    }
      , u = () => {
        const d = t;
        t = [],
        d.length && o( () => {
            s( () => {
                d.forEach(f => {
                    n(f)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: d => {
            let f;
            e++;
            try {
                f = d()
            } finally {
                e--,
                e || u()
            }
            return f
        }
        ,
        batchCalls: d => (...f) => {
            l( () => {
                d(...f)
            }
            )
        }
        ,
        schedule: l,
        setNotifyFunction: d => {
            n = d
        }
        ,
        setBatchNotifyFunction: d => {
            s = d
        }
        ,
        setScheduler: d => {
            o = d
        }
    }
}
var Dt = B_()
  , lx = class {
    #e;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        k_(this.gcTime) && (this.#e = setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(t) {
        this.gcTime = Math.max(this.gcTime || 0, t ?? (Mu ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#e && (clearTimeout(this.#e),
        this.#e = void 0)
    }
}
  , z_ = class extends lx {
    #e;
    #t;
    #n;
    #r;
    #o;
    #i;
    constructor(t) {
        super(),
        this.#i = !1,
        this.#o = t.defaultOptions,
        this.setOptions(t.options),
        this.observers = [],
        this.#n = t.cache,
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        this.#e = $_(this.options),
        this.state = t.state ?? this.#e,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        return this.#r?.promise
    }
    setOptions(t) {
        this.options = {
            ...this.#o,
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this)
    }
    setData(t, e) {
        const n = D_(this.state.data, t, this.options);
        return this.#s({
            data: n,
            type: "success",
            dataUpdatedAt: e?.updatedAt,
            manual: e?.manual
        }),
        n
    }
    setState(t, e) {
        this.#s({
            type: "setState",
            state: t,
            setStateOptions: e
        })
    }
    cancel(t) {
        const e = this.#r?.promise;
        return this.#r?.cancel(t),
        e ? e.then(On).catch(On) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(this.#e)
    }
    isActive() {
        return this.observers.some(t => R_(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === yh || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStale() {
        return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || this.state.data === void 0 || !A_(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        this.observers.find(e => e.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }),
        this.#r?.continue()
    }
    onOnline() {
        this.observers.find(e => e.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }),
        this.#r?.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        this.#n.notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(e => e !== t),
        this.observers.length || (this.#r && (this.#i ? this.#r.cancel({
            revert: !0
        }) : this.#r.cancelRetry()),
        this.scheduleGc()),
        this.#n.notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.#s({
            type: "invalidate"
        })
    }
    fetch(t, e) {
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && e?.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.#r)
                return this.#r.continueRetry(),
                this.#r.promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const d = this.observers.find(f => f.options.queryFn);
            d && this.setOptions(d.options)
        }
        const n = new AbortController
          , s = d => {
            Object.defineProperty(d, "signal", {
                enumerable: !0,
                get: () => (this.#i = !0,
                n.signal)
            })
        }
          , o = () => {
            const d = rx(this.options, e)
              , f = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            return s(f),
            this.#i = !1,
            this.options.persister ? this.options.persister(d, f, this) : d(f)
        }
          , l = {
            fetchOptions: e,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: o
        };
        s(l),
        this.options.behavior?.onFetch(l, this),
        this.#t = this.state,
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== l.fetchOptions?.meta) && this.#s({
            type: "fetch",
            meta: l.fetchOptions?.meta
        });
        const u = d => {
            Jd(d) && d.silent || this.#s({
                type: "error",
                error: d
            }),
            Jd(d) || (this.#n.config.onError?.(d, this),
            this.#n.config.onSettled?.(this.state.data, d, this)),
            this.scheduleGc()
        }
        ;
        return this.#r = ax({
            initialPromise: e?.initialPromise,
            fn: l.fetchFn,
            abort: n.abort.bind(n),
            onSuccess: d => {
                if (d === void 0) {
                    u(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(d)
                } catch (f) {
                    u(f);
                    return
                }
                this.#n.config.onSuccess?.(d, this),
                this.#n.config.onSettled?.(d, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: u,
            onFail: (d, f) => {
                this.#s({
                    type: "failed",
                    failureCount: d,
                    error: f
                })
            }
            ,
            onPause: () => {
                this.#s({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.#s({
                    type: "continue"
                })
            }
            ,
            retry: l.options.retry,
            retryDelay: l.options.retryDelay,
            networkMode: l.options.networkMode,
            canRun: () => !0
        }),
        this.#r.start()
    }
    #s(t) {
        const e = n => {
            switch (t.type) {
            case "failed":
                return {
                    ...n,
                    fetchFailureCount: t.failureCount,
                    fetchFailureReason: t.error
                };
            case "pause":
                return {
                    ...n,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...n,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...n,
                    ...U_(n.data, this.options),
                    fetchMeta: t.meta ?? null
                };
            case "success":
                return {
                    ...n,
                    data: t.data,
                    dataUpdateCount: n.dataUpdateCount + 1,
                    dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...!t.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
            case "error":
                const s = t.error;
                return Jd(s) && s.revert && this.#t ? {
                    ...this.#t,
                    fetchStatus: "idle"
                } : {
                    ...n,
                    error: s,
                    errorUpdateCount: n.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: n.fetchFailureCount + 1,
                    fetchFailureReason: s,
                    fetchStatus: "idle",
                    status: "error"
                };
            case "invalidate":
                return {
                    ...n,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...n,
                    ...t.state
                }
            }
        }
        ;
        this.state = e(this.state),
        Dt.batch( () => {
            this.observers.forEach(n => {
                n.onQueryUpdate()
            }
            ),
            this.#n.notify({
                query: this,
                type: "updated",
                action: t
            })
        }
        )
    }
}
;
function U_(t, e) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: sx(e.networkMode) ? "fetching" : "paused",
        ...t === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function $_(t) {
    const e = typeof t.initialData == "function" ? t.initialData() : t.initialData
      , n = e !== void 0
      , s = n ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
    return {
        data: e,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? s ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var H_ = class extends aa {
    constructor(t={}) {
        super(),
        this.config = t,
        this.#e = new Map
    }
    #e;
    build(t, e, n) {
        const s = e.queryKey
          , o = e.queryHash ?? gh(s, e);
        let l = this.get(o);
        return l || (l = new z_({
            cache: this,
            queryKey: s,
            queryHash: o,
            options: t.defaultQueryOptions(e),
            state: n,
            defaultOptions: t.getQueryDefaults(s)
        }),
        this.add(l)),
        l
    }
    add(t) {
        this.#e.has(t.queryHash) || (this.#e.set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const e = this.#e.get(t.queryHash);
        e && (t.destroy(),
        e === t && this.#e.delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Dt.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return this.#e.get(t)
    }
    getAll() {
        return [...this.#e.values()]
    }
    find(t) {
        const e = {
            exact: !0,
            ...t
        };
        return this.getAll().find(n => Ty(e, n))
    }
    findAll(t={}) {
        const e = this.getAll();
        return Object.keys(t).length > 0 ? e.filter(n => Ty(t, n)) : e
    }
    notify(t) {
        Dt.batch( () => {
            this.listeners.forEach(e => {
                e(t)
            }
            )
        }
        )
    }
    onFocus() {
        Dt.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Dt.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
  , W_ = class extends lx {
    #e;
    #t;
    #n;
    constructor(t) {
        super(),
        this.mutationId = t.mutationId,
        this.#t = t.mutationCache,
        this.#e = [],
        this.state = t.state || ux(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        this.#e.includes(t) || (this.#e.push(t),
        this.clearGcTimeout(),
        this.#t.notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.#e = this.#e.filter(e => e !== t),
        this.scheduleGc(),
        this.#t.notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        this.#e.length || (this.state.status === "pending" ? this.scheduleGc() : this.#t.remove(this))
    }
    continue() {
        return this.#n?.continue() ?? this.execute(this.state.variables)
    }
    async execute(t) {
        this.#n = ax({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (s, o) => {
                this.#r({
                    type: "failed",
                    failureCount: s,
                    error: o
                })
            }
            ,
            onPause: () => {
                this.#r({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.#r({
                    type: "continue"
                })
            }
            ,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#t.canRun(this)
        });
        const e = this.state.status === "pending"
          , n = !this.#n.canStart();
        try {
            if (!e) {
                this.#r({
                    type: "pending",
                    variables: t,
                    isPaused: n
                }),
                await this.#t.config.onMutate?.(t, this);
                const o = await this.options.onMutate?.(t);
                o !== this.state.context && this.#r({
                    type: "pending",
                    context: o,
                    variables: t,
                    isPaused: n
                })
            }
            const s = await this.#n.start();
            return await this.#t.config.onSuccess?.(s, t, this.state.context, this),
            await this.options.onSuccess?.(s, t, this.state.context),
            await this.#t.config.onSettled?.(s, null, this.state.variables, this.state.context, this),
            await this.options.onSettled?.(s, null, t, this.state.context),
            this.#r({
                type: "success",
                data: s
            }),
            s
        } catch (s) {
            try {
                throw await this.#t.config.onError?.(s, t, this.state.context, this),
                await this.options.onError?.(s, t, this.state.context),
                await this.#t.config.onSettled?.(void 0, s, this.state.variables, this.state.context, this),
                await this.options.onSettled?.(void 0, s, t, this.state.context),
                s
            } finally {
                this.#r({
                    type: "error",
                    error: s
                })
            }
        } finally {
            this.#t.runNext(this)
        }
    }
    #r(t) {
        const e = n => {
            switch (t.type) {
            case "failed":
                return {
                    ...n,
                    failureCount: t.failureCount,
                    failureReason: t.error
                };
            case "pause":
                return {
                    ...n,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...n,
                    isPaused: !1
                };
            case "pending":
                return {
                    ...n,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: "pending",
                    variables: t.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...n,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...n,
                    data: void 0,
                    error: t.error,
                    failureCount: n.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: "error"
                }
            }
        }
        ;
        this.state = e(this.state),
        Dt.batch( () => {
            this.#e.forEach(n => {
                n.onMutationUpdate(t)
            }
            ),
            this.#t.notify({
                mutation: this,
                type: "updated",
                action: t
            })
        }
        )
    }
}
;
function ux() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var q_ = class extends aa {
    constructor(t={}) {
        super(),
        this.config = t,
        this.#e = new Map,
        this.#t = Date.now()
    }
    #e;
    #t;
    build(t, e, n) {
        const s = new W_({
            mutationCache: this,
            mutationId: ++this.#t,
            options: t.defaultMutationOptions(e),
            state: n
        });
        return this.add(s),
        s
    }
    add(t) {
        const e = El(t)
          , n = this.#e.get(e) ?? [];
        n.push(t),
        this.#e.set(e, n),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        const e = El(t);
        if (this.#e.has(e)) {
            const n = this.#e.get(e)?.filter(s => s !== t);
            n && (n.length === 0 ? this.#e.delete(e) : this.#e.set(e, n))
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const e = this.#e.get(El(t))?.find(n => n.state.status === "pending");
        return !e || e === t
    }
    runNext(t) {
        return this.#e.get(El(t))?.find(n => n !== t && n.state.isPaused)?.continue() ?? Promise.resolve()
    }
    clear() {
        Dt.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return [...this.#e.values()].flat()
    }
    find(t) {
        const e = {
            exact: !0,
            ...t
        };
        return this.getAll().find(n => _y(e, n))
    }
    findAll(t={}) {
        return this.getAll().filter(e => _y(t, e))
    }
    notify(t) {
        Dt.batch( () => {
            this.listeners.forEach(e => {
                e(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(e => e.state.isPaused);
        return Dt.batch( () => Promise.all(t.map(e => e.continue().catch(On))))
    }
}
;
function El(t) {
    return t.options.scope?.id ?? String(t.mutationId)
}
function Ey(t) {
    return {
        onFetch: (e, n) => {
            const s = e.options
              , o = e.fetchOptions?.meta?.fetchMore?.direction
              , l = e.state.data?.pages || []
              , u = e.state.data?.pageParams || [];
            let d = {
                pages: [],
                pageParams: []
            }
              , f = 0;
            const h = async () => {
                let m = !1;
                const y = b => {
                    Object.defineProperty(b, "signal", {
                        enumerable: !0,
                        get: () => (e.signal.aborted ? m = !0 : e.signal.addEventListener("abort", () => {
                            m = !0
                        }
                        ),
                        e.signal)
                    })
                }
                  , v = rx(e.options, e.fetchOptions)
                  , w = async (b, S, T) => {
                    if (m)
                        return Promise.reject();
                    if (S == null && b.pages.length)
                        return Promise.resolve(b);
                    const _ = {
                        queryKey: e.queryKey,
                        pageParam: S,
                        direction: T ? "backward" : "forward",
                        meta: e.options.meta
                    };
                    y(_);
                    const P = await v(_)
                      , {maxPages: A} = e.options
                      , I = T ? I_ : M_;
                    return {
                        pages: I(b.pages, P, A),
                        pageParams: I(b.pageParams, S, A)
                    }
                }
                ;
                if (o && l.length) {
                    const b = o === "backward"
                      , S = b ? Q_ : ky
                      , T = {
                        pages: l,
                        pageParams: u
                    }
                      , _ = S(s, T);
                    d = await w(T, _, b)
                } else {
                    const b = t ?? l.length;
                    do {
                        const S = f === 0 ? u[0] ?? s.initialPageParam : ky(s, d);
                        if (f > 0 && S == null)
                            break;
                        d = await w(d, S),
                        f++
                    } while (f < b)
                }
                return d
            }
            ;
            e.options.persister ? e.fetchFn = () => e.options.persister?.(h, {
                queryKey: e.queryKey,
                meta: e.options.meta,
                signal: e.signal
            }, n) : e.fetchFn = h
        }
    }
}
function ky(t, {pages: e, pageParams: n}) {
    const s = e.length - 1;
    return e.length > 0 ? t.getNextPageParam(e[s], e, n[s], n) : void 0
}
function Q_(t, {pages: e, pageParams: n}) {
    return e.length > 0 ? t.getPreviousPageParam?.(e[0], e, n[0], n) : void 0
}
var K_ = class {
    #e;
    #t;
    #n;
    #r;
    #o;
    #i;
    #s;
    #a;
    constructor(t={}) {
        this.#e = t.queryCache || new H_,
        this.#t = t.mutationCache || new q_,
        this.#n = t.defaultOptions || {},
        this.#r = new Map,
        this.#o = new Map,
        this.#i = 0
    }
    mount() {
        this.#i++,
        this.#i === 1 && (this.#s = ix.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            this.#e.onFocus())
        }
        ),
        this.#a = ou.subscribe(async t => {
            t && (await this.resumePausedMutations(),
            this.#e.onOnline())
        }
        ))
    }
    unmount() {
        this.#i--,
        this.#i === 0 && (this.#s?.(),
        this.#s = void 0,
        this.#a?.(),
        this.#a = void 0)
    }
    isFetching(t) {
        return this.#e.findAll({
            ...t,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(t) {
        return this.#t.findAll({
            ...t,
            status: "pending"
        }).length
    }
    getQueryData(t) {
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return this.#e.get(e.queryHash)?.state.data
    }
    ensureQueryData(t) {
        const e = this.getQueryData(t.queryKey);
        if (e === void 0)
            return this.fetchQuery(t);
        {
            const n = this.defaultQueryOptions(t)
              , s = this.#e.build(this, n);
            return t.revalidateIfStale && s.isStaleByTime(by(n.staleTime, s)) && this.prefetchQuery(n),
            Promise.resolve(e)
        }
    }
    getQueriesData(t) {
        return this.#e.findAll(t).map( ({queryKey: e, state: n}) => {
            const s = n.data;
            return [e, s]
        }
        )
    }
    setQueryData(t, e, n) {
        const s = this.defaultQueryOptions({
            queryKey: t
        })
          , l = this.#e.get(s.queryHash)?.state.data
          , u = E_(e, l);
        if (u !== void 0)
            return this.#e.build(this, s).setData(u, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(t, e, n) {
        return Dt.batch( () => this.#e.findAll(t).map( ({queryKey: s}) => [s, this.setQueryData(s, e, n)]))
    }
    getQueryState(t) {
        const e = this.defaultQueryOptions({
            queryKey: t
        });
        return this.#e.get(e.queryHash)?.state
    }
    removeQueries(t) {
        const e = this.#e;
        Dt.batch( () => {
            e.findAll(t).forEach(n => {
                e.remove(n)
            }
            )
        }
        )
    }
    resetQueries(t, e) {
        const n = this.#e
          , s = {
            type: "active",
            ...t
        };
        return Dt.batch( () => (n.findAll(t).forEach(o => {
            o.reset()
        }
        ),
        this.refetchQueries(s, e)))
    }
    cancelQueries(t={}, e={}) {
        const n = {
            revert: !0,
            ...e
        }
          , s = Dt.batch( () => this.#e.findAll(t).map(o => o.cancel(n)));
        return Promise.all(s).then(On).catch(On)
    }
    invalidateQueries(t={}, e={}) {
        return Dt.batch( () => {
            if (this.#e.findAll(t).forEach(s => {
                s.invalidate()
            }
            ),
            t.refetchType === "none")
                return Promise.resolve();
            const n = {
                ...t,
                type: t.refetchType ?? t.type ?? "active"
            };
            return this.refetchQueries(n, e)
        }
        )
    }
    refetchQueries(t={}, e) {
        const n = {
            ...e,
            cancelRefetch: e?.cancelRefetch ?? !0
        }
          , s = Dt.batch( () => this.#e.findAll(t).filter(o => !o.isDisabled()).map(o => {
            let l = o.fetch(void 0, n);
            return n.throwOnError || (l = l.catch(On)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : l
        }
        ));
        return Promise.all(s).then(On)
    }
    fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const n = this.#e.build(this, e);
        return n.isStaleByTime(by(e.staleTime, n)) ? n.fetch(e) : Promise.resolve(n.state.data)
    }
    prefetchQuery(t) {
        return this.fetchQuery(t).then(On).catch(On)
    }
    fetchInfiniteQuery(t) {
        return t.behavior = Ey(t.pages),
        this.fetchQuery(t)
    }
    prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(On).catch(On)
    }
    ensureInfiniteQueryData(t) {
        return t.behavior = Ey(t.pages),
        this.ensureQueryData(t)
    }
    resumePausedMutations() {
        return ou.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return this.#e
    }
    getMutationCache() {
        return this.#t
    }
    getDefaultOptions() {
        return this.#n
    }
    setDefaultOptions(t) {
        this.#n = t
    }
    setQueryDefaults(t, e) {
        this.#r.set(Ci(t), {
            queryKey: t,
            defaultOptions: e
        })
    }
    getQueryDefaults(t) {
        const e = [...this.#r.values()];
        let n = {};
        return e.forEach(s => {
            Bo(t, s.queryKey) && (n = {
                ...n,
                ...s.defaultOptions
            })
        }
        ),
        n
    }
    setMutationDefaults(t, e) {
        this.#o.set(Ci(t), {
            mutationKey: t,
            defaultOptions: e
        })
    }
    getMutationDefaults(t) {
        const e = [...this.#o.values()];
        let n = {};
        return e.forEach(s => {
            Bo(t, s.mutationKey) && (n = {
                ...n,
                ...s.defaultOptions
            })
        }
        ),
        n
    }
    defaultQueryOptions(t) {
        if (t._defaulted)
            return t;
        const e = {
            ...this.#n.queries,
            ...this.getQueryDefaults(t.queryKey),
            ...t,
            _defaulted: !0
        };
        return e.queryHash || (e.queryHash = gh(e.queryKey, e)),
        e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"),
        e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
        !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
        e.enabled !== !0 && e.queryFn === yh && (e.enabled = !1),
        e
    }
    defaultMutationOptions(t) {
        return t?._defaulted ? t : {
            ...this.#n.mutations,
            ...t?.mutationKey && this.getMutationDefaults(t.mutationKey),
            ...t,
            _defaulted: !0
        }
    }
    clear() {
        this.#e.clear(),
        this.#t.clear()
    }
}
  , Z_ = class extends aa {
    #e;
    #t = void 0;
    #n;
    #r;
    constructor(e, n) {
        super(),
        this.#e = e,
        this.setOptions(n),
        this.bindMethods(),
        this.#o()
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this),
        this.reset = this.reset.bind(this)
    }
    setOptions(e) {
        const n = this.options;
        this.options = this.#e.defaultMutationOptions(e),
        N_(this.options, n) || this.#e.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#n,
            observer: this
        }),
        n?.mutationKey && this.options.mutationKey && Ci(n.mutationKey) !== Ci(this.options.mutationKey) ? this.reset() : this.#n?.state.status === "pending" && this.#n.setOptions(this.options)
    }
    onUnsubscribe() {
        this.hasListeners() || this.#n?.removeObserver(this)
    }
    onMutationUpdate(e) {
        this.#o(),
        this.#i(e)
    }
    getCurrentResult() {
        return this.#t
    }
    reset() {
        this.#n?.removeObserver(this),
        this.#n = void 0,
        this.#o(),
        this.#i()
    }
    mutate(e, n) {
        return this.#r = n,
        this.#n?.removeObserver(this),
        this.#n = this.#e.getMutationCache().build(this.#e, this.options),
        this.#n.addObserver(this),
        this.#n.execute(e)
    }
    #o() {
        const e = this.#n?.state ?? ux();
        this.#t = {
            ...e,
            isPending: e.status === "pending",
            isSuccess: e.status === "success",
            isError: e.status === "error",
            isIdle: e.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        }
    }
    #i(e) {
        Dt.batch( () => {
            if (this.#r && this.hasListeners()) {
                const n = this.#t.variables
                  , s = this.#t.context;
                e?.type === "success" ? (this.#r.onSuccess?.(e.data, n, s),
                this.#r.onSettled?.(e.data, null, n, s)) : e?.type === "error" && (this.#r.onError?.(e.error, n, s),
                this.#r.onSettled?.(void 0, e.error, n, s))
            }
            this.listeners.forEach(n => {
                n(this.#t)
            }
            )
        }
        )
    }
}
  , cx = C.createContext(void 0)
  , G_ = t => {
    const e = C.useContext(cx);
    if (!e)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return e
}
  , X_ = ({client: t, children: e}) => (C.useEffect( () => (t.mount(),
() => {
    t.unmount()
}
), [t]),
E.jsx(cx.Provider, {
    value: t,
    children: e
}));
function Y_(t, e) {
    return typeof t == "function" ? t(...e) : !!t
}
function J_() {}
function eP(t, e) {
    const n = G_()
      , [s] = C.useState( () => new Z_(n,t));
    C.useEffect( () => {
        s.setOptions(t)
    }
    , [s, t]);
    const o = C.useSyncExternalStore(C.useCallback(u => s.subscribe(Dt.batchCalls(u)), [s]), () => s.getCurrentResult(), () => s.getCurrentResult())
      , l = C.useCallback( (u, d) => {
        s.mutate(u, d).catch(J_)
    }
    , [s]);
    if (o.error && Y_(s.options.throwOnError, [o.error]))
        throw o.error;
    return {
        ...o,
        mutate: l,
        mutateAsync: o.mutate
    }
}
async function tP(t) {
    if (!t.ok) {
        const e = await t.text() || t.statusText;
        throw new Error(`${t.status}: ${e}`)
    }
}
const nP = ({on401: t}) => async ({queryKey: e}) => {
    const n = await fetch(e.join("/"), {
        credentials: "include"
    });
    return await tP(n),
    await n.json()
}
  , rP = new K_({
    defaultOptions: {
        queries: {
            queryFn: nP({
                on401: "throw"
            }),
            refetchInterval: !1,
            refetchOnWindowFocus: !1,
            staleTime: 1 / 0,
            retry: !1
        },
        mutations: {
            retry: !1
        }
    }
})
  , iP = 1
  , sP = 1e6;
let ef = 0;
function oP() {
    return ef = (ef + 1) % Number.MAX_SAFE_INTEGER,
    ef.toString()
}
const tf = new Map
  , Ay = t => {
    if (tf.has(t))
        return;
    const e = setTimeout( () => {
        tf.delete(t),
        Do({
            type: "REMOVE_TOAST",
            toastId: t
        })
    }
    , sP);
    tf.set(t, e)
}
  , aP = (t, e) => {
    switch (e.type) {
    case "ADD_TOAST":
        return {
            ...t,
            toasts: [e.toast, ...t.toasts].slice(0, iP)
        };
    case "UPDATE_TOAST":
        return {
            ...t,
            toasts: t.toasts.map(n => n.id === e.toast.id ? {
                ...n,
                ...e.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = e;
            return n ? Ay(n) : t.toasts.forEach(s => {
                Ay(s.id)
            }
            ),
            {
                ...t,
                toasts: t.toasts.map(s => s.id === n || n === void 0 ? {
                    ...s,
                    open: !1
                } : s)
            }
        }
    case "REMOVE_TOAST":
        return e.toastId === void 0 ? {
            ...t,
            toasts: []
        } : {
            ...t,
            toasts: t.toasts.filter(n => n.id !== e.toastId)
        }
    }
}
  , Kl = [];
let Zl = {
    toasts: []
};
function Do(t) {
    Zl = aP(Zl, t),
    Kl.forEach(e => {
        e(Zl)
    }
    )
}
function lP({...t}) {
    const e = oP()
      , n = o => Do({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: e
        }
    })
      , s = () => Do({
        type: "DISMISS_TOAST",
        toastId: e
    });
    return Do({
        type: "ADD_TOAST",
        toast: {
            ...t,
            id: e,
            open: !0,
            onOpenChange: o => {
                o || s()
            }
        }
    }),
    {
        id: e,
        dismiss: s,
        update: n
    }
}
function dx() {
    const [t,e] = C.useState(Zl);
    return C.useEffect( () => (Kl.push(e),
    () => {
        const n = Kl.indexOf(e);
        n > -1 && Kl.splice(n, 1)
    }
    ), [t]),
    {
        ...t,
        toast: lP,
        dismiss: n => Do({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
var Iu = Ou();
const uP = q0(Iu);
function Tt(t, e, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (t?.(o),
        n === !1 || !o.defaultPrevented)
            return e?.(o)
    }
}
function Ry(t, e) {
    if (typeof t == "function")
        return t(e);
    t != null && (t.current = e)
}
function fx(...t) {
    return e => {
        let n = !1;
        const s = t.map(o => {
            const l = Ry(o, e);
            return !n && typeof l == "function" && (n = !0),
            l
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < s.length; o++) {
                    const l = s[o];
                    typeof l == "function" ? l() : Ry(t[o], null)
                }
            }
    }
}
function Vn(...t) {
    return C.useCallback(fx(...t), t)
}
function Lu(t, e=[]) {
    let n = [];
    function s(l, u) {
        const d = C.createContext(u)
          , f = n.length;
        n = [...n, u];
        const h = y => {
            const {scope: v, children: w, ...b} = y
              , S = v?.[t]?.[f] || d
              , T = C.useMemo( () => b, Object.values(b));
            return E.jsx(S.Provider, {
                value: T,
                children: w
            })
        }
        ;
        h.displayName = l + "Provider";
        function m(y, v) {
            const w = v?.[t]?.[f] || d
              , b = C.useContext(w);
            if (b)
                return b;
            if (u !== void 0)
                return u;
            throw new Error(`\`${y}\` must be used within \`${l}\``)
        }
        return [h, m]
    }
    const o = () => {
        const l = n.map(u => C.createContext(u));
        return function(d) {
            const f = d?.[t] || l;
            return C.useMemo( () => ({
                [`__scope${t}`]: {
                    ...d,
                    [t]: f
                }
            }), [d, f])
        }
    }
    ;
    return o.scopeName = t,
    [s, cP(o, ...e)]
}
function cP(...t) {
    const e = t[0];
    if (t.length === 1)
        return e;
    const n = () => {
        const s = t.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(l) {
            const u = s.reduce( (d, {useScope: f, scopeName: h}) => {
                const y = f(l)[`__scope${h}`];
                return {
                    ...d,
                    ...y
                }
            }
            , {});
            return C.useMemo( () => ({
                [`__scope${e.scopeName}`]: u
            }), [u])
        }
    }
    ;
    return n.scopeName = e.scopeName,
    n
}
function au(t) {
    const e = dP(t)
      , n = C.forwardRef( (s, o) => {
        const {children: l, ...u} = s
          , d = C.Children.toArray(l)
          , f = d.find(hP);
        if (f) {
            const h = f.props.children
              , m = d.map(y => y === f ? C.Children.count(h) > 1 ? C.Children.only(null) : C.isValidElement(h) ? h.props.children : null : y);
            return E.jsx(e, {
                ...u,
                ref: o,
                children: C.isValidElement(h) ? C.cloneElement(h, void 0, m) : null
            })
        }
        return E.jsx(e, {
            ...u,
            ref: o,
            children: l
        })
    }
    );
    return n.displayName = `${t}.Slot`,
    n
}
var hx = au("Slot");
function dP(t) {
    const e = C.forwardRef( (n, s) => {
        const {children: o, ...l} = n;
        if (C.isValidElement(o)) {
            const u = mP(o)
              , d = pP(l, o.props);
            return o.type !== C.Fragment && (d.ref = s ? fx(s, u) : u),
            C.cloneElement(o, d)
        }
        return C.Children.count(o) > 1 ? C.Children.only(null) : null
    }
    );
    return e.displayName = `${t}.SlotClone`,
    e
}
var px = Symbol("radix.slottable");
function fP(t) {
    const e = ({children: n}) => E.jsx(E.Fragment, {
        children: n
    });
    return e.displayName = `${t}.Slottable`,
    e.__radixId = px,
    e
}
function hP(t) {
    return C.isValidElement(t) && typeof t.type == "function" && "__radixId"in t.type && t.type.__radixId === px
}
function pP(t, e) {
    const n = {
        ...e
    };
    for (const s in e) {
        const o = t[s]
          , l = e[s];
        /^on[A-Z]/.test(s) ? o && l ? n[s] = (...d) => {
            l(...d),
            o(...d)
        }
        : o && (n[s] = o) : s === "style" ? n[s] = {
            ...o,
            ...l
        } : s === "className" && (n[s] = [o, l].filter(Boolean).join(" "))
    }
    return {
        ...t,
        ...n
    }
}
function mP(t) {
    let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get
      , n = e && "isReactWarning"in e && e.isReactWarning;
    return n ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get,
    n = e && "isReactWarning"in e && e.isReactWarning,
    n ? t.props.ref : t.props.ref || t.ref)
}
function gP(t) {
    const e = t + "CollectionProvider"
      , [n,s] = Lu(e)
      , [o,l] = n(e, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , u = S => {
        const {scope: T, children: _} = S
          , P = De.useRef(null)
          , A = De.useRef(new Map).current;
        return E.jsx(o, {
            scope: T,
            itemMap: A,
            collectionRef: P,
            children: _
        })
    }
    ;
    u.displayName = e;
    const d = t + "CollectionSlot"
      , f = au(d)
      , h = De.forwardRef( (S, T) => {
        const {scope: _, children: P} = S
          , A = l(d, _)
          , I = Vn(T, A.collectionRef);
        return E.jsx(f, {
            ref: I,
            children: P
        })
    }
    );
    h.displayName = d;
    const m = t + "CollectionItemSlot"
      , y = "data-radix-collection-item"
      , v = au(m)
      , w = De.forwardRef( (S, T) => {
        const {scope: _, children: P, ...A} = S
          , I = De.useRef(null)
          , L = Vn(T, I)
          , B = l(m, _);
        return De.useEffect( () => (B.itemMap.set(I, {
            ref: I,
            ...A
        }),
        () => {
            B.itemMap.delete(I)
        }
        )),
        E.jsx(v, {
            [y]: "",
            ref: L,
            children: P
        })
    }
    );
    w.displayName = m;
    function b(S) {
        const T = l(t + "CollectionConsumer", S);
        return De.useCallback( () => {
            const P = T.collectionRef.current;
            if (!P)
                return [];
            const A = Array.from(P.querySelectorAll(`[${y}]`));
            return Array.from(T.itemMap.values()).sort( (B, F) => A.indexOf(B.ref.current) - A.indexOf(F.ref.current))
        }
        , [T.collectionRef, T.itemMap])
    }
    return [{
        Provider: u,
        Slot: h,
        ItemSlot: w
    }, b, s]
}
var yP = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , Gt = yP.reduce( (t, e) => {
    const n = au(`Primitive.${e}`)
      , s = C.forwardRef( (o, l) => {
        const {asChild: u, ...d} = o
          , f = u ? n : e;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        E.jsx(f, {
            ...d,
            ref: l
        })
    }
    );
    return s.displayName = `Primitive.${e}`,
    {
        ...t,
        [e]: s
    }
}
, {});
function mx(t, e) {
    t && Iu.flushSync( () => t.dispatchEvent(e))
}
function Yn(t) {
    const e = C.useRef(t);
    return C.useEffect( () => {
        e.current = t
    }
    ),
    C.useMemo( () => (...n) => e.current?.(...n), [])
}
function vP(t, e=globalThis?.document) {
    const n = Yn(t);
    C.useEffect( () => {
        const s = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return e.addEventListener("keydown", s, {
            capture: !0
        }),
        () => e.removeEventListener("keydown", s, {
            capture: !0
        })
    }
    , [n, e])
}
var xP = "DismissableLayer", Of = "dismissableLayer.update", wP = "dismissableLayer.pointerDownOutside", SP = "dismissableLayer.focusOutside", Ny, gx = C.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), vh = C.forwardRef( (t, e) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: s, onPointerDownOutside: o, onFocusOutside: l, onInteractOutside: u, onDismiss: d, ...f} = t
      , h = C.useContext(gx)
      , [m,y] = C.useState(null)
      , v = m?.ownerDocument ?? globalThis?.document
      , [,w] = C.useState({})
      , b = Vn(e, F => y(F))
      , S = Array.from(h.layers)
      , [T] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1)
      , _ = S.indexOf(T)
      , P = m ? S.indexOf(m) : -1
      , A = h.layersWithOutsidePointerEventsDisabled.size > 0
      , I = P >= _
      , L = TP(F => {
        const W = F.target
          , X = [...h.branches].some(G => G.contains(W));
        !I || X || (o?.(F),
        u?.(F),
        F.defaultPrevented || d?.())
    }
    , v)
      , B = _P(F => {
        const W = F.target;
        [...h.branches].some(G => G.contains(W)) || (l?.(F),
        u?.(F),
        F.defaultPrevented || d?.())
    }
    , v);
    return vP(F => {
        P === h.layers.size - 1 && (s?.(F),
        !F.defaultPrevented && d && (F.preventDefault(),
        d()))
    }
    , v),
    C.useEffect( () => {
        if (m)
            return n && (h.layersWithOutsidePointerEventsDisabled.size === 0 && (Ny = v.body.style.pointerEvents,
            v.body.style.pointerEvents = "none"),
            h.layersWithOutsidePointerEventsDisabled.add(m)),
            h.layers.add(m),
            Oy(),
            () => {
                n && h.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = Ny)
            }
    }
    , [m, v, n, h]),
    C.useEffect( () => () => {
        m && (h.layers.delete(m),
        h.layersWithOutsidePointerEventsDisabled.delete(m),
        Oy())
    }
    , [m, h]),
    C.useEffect( () => {
        const F = () => w({});
        return document.addEventListener(Of, F),
        () => document.removeEventListener(Of, F)
    }
    , []),
    E.jsx(Gt.div, {
        ...f,
        ref: b,
        style: {
            pointerEvents: A ? I ? "auto" : "none" : void 0,
            ...t.style
        },
        onFocusCapture: Tt(t.onFocusCapture, B.onFocusCapture),
        onBlurCapture: Tt(t.onBlurCapture, B.onBlurCapture),
        onPointerDownCapture: Tt(t.onPointerDownCapture, L.onPointerDownCapture)
    })
}
);
vh.displayName = xP;
var bP = "DismissableLayerBranch"
  , yx = C.forwardRef( (t, e) => {
    const n = C.useContext(gx)
      , s = C.useRef(null)
      , o = Vn(e, s);
    return C.useEffect( () => {
        const l = s.current;
        if (l)
            return n.branches.add(l),
            () => {
                n.branches.delete(l)
            }
    }
    , [n.branches]),
    E.jsx(Gt.div, {
        ...t,
        ref: o
    })
}
);
yx.displayName = bP;
function TP(t, e=globalThis?.document) {
    const n = Yn(t)
      , s = C.useRef(!1)
      , o = C.useRef( () => {}
    );
    return C.useEffect( () => {
        const l = d => {
            if (d.target && !s.current) {
                let f = function() {
                    vx(wP, n, h, {
                        discrete: !0
                    })
                };
                const h = {
                    originalEvent: d
                };
                d.pointerType === "touch" ? (e.removeEventListener("click", o.current),
                o.current = f,
                e.addEventListener("click", o.current, {
                    once: !0
                })) : f()
            } else
                e.removeEventListener("click", o.current);
            s.current = !1
        }
          , u = window.setTimeout( () => {
            e.addEventListener("pointerdown", l)
        }
        , 0);
        return () => {
            window.clearTimeout(u),
            e.removeEventListener("pointerdown", l),
            e.removeEventListener("click", o.current)
        }
    }
    , [e, n]),
    {
        onPointerDownCapture: () => s.current = !0
    }
}
function _P(t, e=globalThis?.document) {
    const n = Yn(t)
      , s = C.useRef(!1);
    return C.useEffect( () => {
        const o = l => {
            l.target && !s.current && vx(SP, n, {
                originalEvent: l
            }, {
                discrete: !1
            })
        }
        ;
        return e.addEventListener("focusin", o),
        () => e.removeEventListener("focusin", o)
    }
    , [e, n]),
    {
        onFocusCapture: () => s.current = !0,
        onBlurCapture: () => s.current = !1
    }
}
function Oy() {
    const t = new CustomEvent(Of);
    document.dispatchEvent(t)
}
function vx(t, e, n, {discrete: s}) {
    const o = n.originalEvent.target
      , l = new CustomEvent(t,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    e && o.addEventListener(t, e, {
        once: !0
    }),
    s ? mx(o, l) : o.dispatchEvent(l)
}
var PP = vh
  , CP = yx
  , Ei = globalThis?.document ? C.useLayoutEffect : () => {}
  , EP = "Portal"
  , xx = C.forwardRef( (t, e) => {
    const {container: n, ...s} = t
      , [o,l] = C.useState(!1);
    Ei( () => l(!0), []);
    const u = n || o && globalThis?.document?.body;
    return u ? uP.createPortal(E.jsx(Gt.div, {
        ...s,
        ref: e
    }), u) : null
}
);
xx.displayName = EP;
function kP(t, e) {
    return C.useReducer( (n, s) => e[n][s] ?? n, t)
}
var xh = t => {
    const {present: e, children: n} = t
      , s = AP(e)
      , o = typeof n == "function" ? n({
        present: s.isPresent
    }) : C.Children.only(n)
      , l = Vn(s.ref, RP(o));
    return typeof n == "function" || s.isPresent ? C.cloneElement(o, {
        ref: l
    }) : null
}
;
xh.displayName = "Presence";
function AP(t) {
    const [e,n] = C.useState()
      , s = C.useRef({})
      , o = C.useRef(t)
      , l = C.useRef("none")
      , u = t ? "mounted" : "unmounted"
      , [d,f] = kP(u, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return C.useEffect( () => {
        const h = kl(s.current);
        l.current = d === "mounted" ? h : "none"
    }
    , [d]),
    Ei( () => {
        const h = s.current
          , m = o.current;
        if (m !== t) {
            const v = l.current
              , w = kl(h);
            t ? f("MOUNT") : w === "none" || h?.display === "none" ? f("UNMOUNT") : f(m && v !== w ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = t
        }
    }
    , [t, f]),
    Ei( () => {
        if (e) {
            let h;
            const m = e.ownerDocument.defaultView ?? window
              , y = w => {
                const S = kl(s.current).includes(w.animationName);
                if (w.target === e && S && (f("ANIMATION_END"),
                !o.current)) {
                    const T = e.style.animationFillMode;
                    e.style.animationFillMode = "forwards",
                    h = m.setTimeout( () => {
                        e.style.animationFillMode === "forwards" && (e.style.animationFillMode = T)
                    }
                    )
                }
            }
              , v = w => {
                w.target === e && (l.current = kl(s.current))
            }
            ;
            return e.addEventListener("animationstart", v),
            e.addEventListener("animationcancel", y),
            e.addEventListener("animationend", y),
            () => {
                m.clearTimeout(h),
                e.removeEventListener("animationstart", v),
                e.removeEventListener("animationcancel", y),
                e.removeEventListener("animationend", y)
            }
        } else
            f("ANIMATION_END")
    }
    , [e, f]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(d),
        ref: C.useCallback(h => {
            h && (s.current = getComputedStyle(h)),
            n(h)
        }
        , [])
    }
}
function kl(t) {
    return t?.animationName || "none"
}
function RP(t) {
    let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get
      , n = e && "isReactWarning"in e && e.isReactWarning;
    return n ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get,
    n = e && "isReactWarning"in e && e.isReactWarning,
    n ? t.props.ref : t.props.ref || t.ref)
}
function NP({prop: t, defaultProp: e, onChange: n= () => {}
}) {
    const [s,o] = OP({
        defaultProp: e,
        onChange: n
    })
      , l = t !== void 0
      , u = l ? t : s
      , d = Yn(n)
      , f = C.useCallback(h => {
        if (l) {
            const y = typeof h == "function" ? h(t) : h;
            y !== t && d(y)
        } else
            o(h)
    }
    , [l, t, o, d]);
    return [u, f]
}
function OP({defaultProp: t, onChange: e}) {
    const n = C.useState(t)
      , [s] = n
      , o = C.useRef(s)
      , l = Yn(e);
    return C.useEffect( () => {
        o.current !== s && (l(s),
        o.current = s)
    }
    , [s, o, l]),
    n
}
var DP = "VisuallyHidden"
  , ju = C.forwardRef( (t, e) => E.jsx(Gt.span, {
    ...t,
    ref: e,
    style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...t.style
    }
}));
ju.displayName = DP;
var MP = ju
  , wh = "ToastProvider"
  , [Sh,IP,LP] = gP("Toast")
  , [wx] = Lu("Toast", [LP])
  , [jP,Vu] = wx(wh)
  , Sx = t => {
    const {__scopeToast: e, label: n="Notification", duration: s=5e3, swipeDirection: o="right", swipeThreshold: l=50, children: u} = t
      , [d,f] = C.useState(null)
      , [h,m] = C.useState(0)
      , y = C.useRef(!1)
      , v = C.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${wh}\`. Expected non-empty \`string\`.`),
    E.jsx(Sh.Provider, {
        scope: e,
        children: E.jsx(jP, {
            scope: e,
            label: n,
            duration: s,
            swipeDirection: o,
            swipeThreshold: l,
            toastCount: h,
            viewport: d,
            onViewportChange: f,
            onToastAdd: C.useCallback( () => m(w => w + 1), []),
            onToastRemove: C.useCallback( () => m(w => w - 1), []),
            isFocusedToastEscapeKeyDownRef: y,
            isClosePausedRef: v,
            children: u
        })
    })
}
;
Sx.displayName = wh;
var bx = "ToastViewport"
  , VP = ["F8"]
  , Df = "toast.viewportPause"
  , Mf = "toast.viewportResume"
  , Tx = C.forwardRef( (t, e) => {
    const {__scopeToast: n, hotkey: s=VP, label: o="Notifications ({hotkey})", ...l} = t
      , u = Vu(bx, n)
      , d = IP(n)
      , f = C.useRef(null)
      , h = C.useRef(null)
      , m = C.useRef(null)
      , y = C.useRef(null)
      , v = Vn(e, y, u.onViewportChange)
      , w = s.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , b = u.toastCount > 0;
    C.useEffect( () => {
        const T = _ => {
            s.length !== 0 && s.every(A => _[A] || _.code === A) && y.current?.focus()
        }
        ;
        return document.addEventListener("keydown", T),
        () => document.removeEventListener("keydown", T)
    }
    , [s]),
    C.useEffect( () => {
        const T = f.current
          , _ = y.current;
        if (b && T && _) {
            const P = () => {
                if (!u.isClosePausedRef.current) {
                    const B = new CustomEvent(Df);
                    _.dispatchEvent(B),
                    u.isClosePausedRef.current = !0
                }
            }
              , A = () => {
                if (u.isClosePausedRef.current) {
                    const B = new CustomEvent(Mf);
                    _.dispatchEvent(B),
                    u.isClosePausedRef.current = !1
                }
            }
              , I = B => {
                !T.contains(B.relatedTarget) && A()
            }
              , L = () => {
                T.contains(document.activeElement) || A()
            }
            ;
            return T.addEventListener("focusin", P),
            T.addEventListener("focusout", I),
            T.addEventListener("pointermove", P),
            T.addEventListener("pointerleave", L),
            window.addEventListener("blur", P),
            window.addEventListener("focus", A),
            () => {
                T.removeEventListener("focusin", P),
                T.removeEventListener("focusout", I),
                T.removeEventListener("pointermove", P),
                T.removeEventListener("pointerleave", L),
                window.removeEventListener("blur", P),
                window.removeEventListener("focus", A)
            }
        }
    }
    , [b, u.isClosePausedRef]);
    const S = C.useCallback( ({tabbingDirection: T}) => {
        const P = d().map(A => {
            const I = A.ref.current
              , L = [I, ...XP(I)];
            return T === "forwards" ? L : L.reverse()
        }
        );
        return (T === "forwards" ? P.reverse() : P).flat()
    }
    , [d]);
    return C.useEffect( () => {
        const T = y.current;
        if (T) {
            const _ = P => {
                const A = P.altKey || P.ctrlKey || P.metaKey;
                if (P.key === "Tab" && !A) {
                    const L = document.activeElement
                      , B = P.shiftKey;
                    if (P.target === T && B) {
                        h.current?.focus();
                        return
                    }
                    const X = S({
                        tabbingDirection: B ? "backwards" : "forwards"
                    })
                      , G = X.findIndex(Q => Q === L);
                    nf(X.slice(G + 1)) ? P.preventDefault() : B ? h.current?.focus() : m.current?.focus()
                }
            }
            ;
            return T.addEventListener("keydown", _),
            () => T.removeEventListener("keydown", _)
        }
    }
    , [d, S]),
    E.jsxs(CP, {
        ref: f,
        role: "region",
        "aria-label": o.replace("{hotkey}", w),
        tabIndex: -1,
        style: {
            pointerEvents: b ? void 0 : "none"
        },
        children: [b && E.jsx(If, {
            ref: h,
            onFocusFromOutsideViewport: () => {
                const T = S({
                    tabbingDirection: "forwards"
                });
                nf(T)
            }
        }), E.jsx(Sh.Slot, {
            scope: n,
            children: E.jsx(Gt.ol, {
                tabIndex: -1,
                ...l,
                ref: v
            })
        }), b && E.jsx(If, {
            ref: m,
            onFocusFromOutsideViewport: () => {
                const T = S({
                    tabbingDirection: "backwards"
                });
                nf(T)
            }
        })]
    })
}
);
Tx.displayName = bx;
var _x = "ToastFocusProxy"
  , If = C.forwardRef( (t, e) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: s, ...o} = t
      , l = Vu(_x, n);
    return E.jsx(ju, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: e,
        style: {
            position: "fixed"
        },
        onFocus: u => {
            const d = u.relatedTarget;
            !l.viewport?.contains(d) && s()
        }
    })
}
);
If.displayName = _x;
var Fu = "Toast"
  , FP = "toast.swipeStart"
  , BP = "toast.swipeMove"
  , zP = "toast.swipeCancel"
  , UP = "toast.swipeEnd"
  , Px = C.forwardRef( (t, e) => {
    const {forceMount: n, open: s, defaultOpen: o, onOpenChange: l, ...u} = t
      , [d=!0,f] = NP({
        prop: s,
        defaultProp: o,
        onChange: l
    });
    return E.jsx(xh, {
        present: n || d,
        children: E.jsx(WP, {
            open: d,
            ...u,
            ref: e,
            onClose: () => f(!1),
            onPause: Yn(t.onPause),
            onResume: Yn(t.onResume),
            onSwipeStart: Tt(t.onSwipeStart, h => {
                h.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Tt(t.onSwipeMove, h => {
                const {x: m, y} = h.detail.delta;
                h.currentTarget.setAttribute("data-swipe", "move"),
                h.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${m}px`),
                h.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${y}px`)
            }
            ),
            onSwipeCancel: Tt(t.onSwipeCancel, h => {
                h.currentTarget.setAttribute("data-swipe", "cancel"),
                h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                h.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                h.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Tt(t.onSwipeEnd, h => {
                const {x: m, y} = h.detail.delta;
                h.currentTarget.setAttribute("data-swipe", "end"),
                h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                h.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${m}px`),
                h.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${y}px`),
                f(!1)
            }
            )
        })
    })
}
);
Px.displayName = Fu;
var [$P,HP] = wx(Fu, {
    onClose() {}
})
  , WP = C.forwardRef( (t, e) => {
    const {__scopeToast: n, type: s="foreground", duration: o, open: l, onClose: u, onEscapeKeyDown: d, onPause: f, onResume: h, onSwipeStart: m, onSwipeMove: y, onSwipeCancel: v, onSwipeEnd: w, ...b} = t
      , S = Vu(Fu, n)
      , [T,_] = C.useState(null)
      , P = Vn(e, V => _(V))
      , A = C.useRef(null)
      , I = C.useRef(null)
      , L = o || S.duration
      , B = C.useRef(0)
      , F = C.useRef(L)
      , W = C.useRef(0)
      , {onToastAdd: X, onToastRemove: G} = S
      , Q = Yn( () => {
        T?.contains(document.activeElement) && S.viewport?.focus(),
        u()
    }
    )
      , O = C.useCallback(V => {
        !V || V === 1 / 0 || (window.clearTimeout(W.current),
        B.current = new Date().getTime(),
        W.current = window.setTimeout(Q, V))
    }
    , [Q]);
    C.useEffect( () => {
        const V = S.viewport;
        if (V) {
            const me = () => {
                O(F.current),
                h?.()
            }
              , ce = () => {
                const se = new Date().getTime() - B.current;
                F.current = F.current - se,
                window.clearTimeout(W.current),
                f?.()
            }
            ;
            return V.addEventListener(Df, ce),
            V.addEventListener(Mf, me),
            () => {
                V.removeEventListener(Df, ce),
                V.removeEventListener(Mf, me)
            }
        }
    }
    , [S.viewport, L, f, h, O]),
    C.useEffect( () => {
        l && !S.isClosePausedRef.current && O(L)
    }
    , [l, L, S.isClosePausedRef, O]),
    C.useEffect( () => (X(),
    () => G()), [X, G]);
    const q = C.useMemo( () => T ? Ox(T) : null, [T]);
    return S.viewport ? E.jsxs(E.Fragment, {
        children: [q && E.jsx(qP, {
            __scopeToast: n,
            role: "status",
            "aria-live": s === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: q
        }), E.jsx($P, {
            scope: n,
            onClose: Q,
            children: Iu.createPortal(E.jsx(Sh.ItemSlot, {
                scope: n,
                children: E.jsx(PP, {
                    asChild: !0,
                    onEscapeKeyDown: Tt(d, () => {
                        S.isFocusedToastEscapeKeyDownRef.current || Q(),
                        S.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: E.jsx(Gt.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": l ? "open" : "closed",
                        "data-swipe-direction": S.swipeDirection,
                        ...b,
                        ref: P,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...t.style
                        },
                        onKeyDown: Tt(t.onKeyDown, V => {
                            V.key === "Escape" && (d?.(V.nativeEvent),
                            V.nativeEvent.defaultPrevented || (S.isFocusedToastEscapeKeyDownRef.current = !0,
                            Q()))
                        }
                        ),
                        onPointerDown: Tt(t.onPointerDown, V => {
                            V.button === 0 && (A.current = {
                                x: V.clientX,
                                y: V.clientY
                            })
                        }
                        ),
                        onPointerMove: Tt(t.onPointerMove, V => {
                            if (!A.current)
                                return;
                            const me = V.clientX - A.current.x
                              , ce = V.clientY - A.current.y
                              , se = !!I.current
                              , H = ["left", "right"].includes(S.swipeDirection)
                              , ie = ["left", "up"].includes(S.swipeDirection) ? Math.min : Math.max
                              , ne = H ? ie(0, me) : 0
                              , D = H ? 0 : ie(0, ce)
                              , Z = V.pointerType === "touch" ? 10 : 2
                              , be = {
                                x: ne,
                                y: D
                            }
                              , Ce = {
                                originalEvent: V,
                                delta: be
                            };
                            se ? (I.current = be,
                            Al(BP, y, Ce, {
                                discrete: !1
                            })) : Dy(be, S.swipeDirection, Z) ? (I.current = be,
                            Al(FP, m, Ce, {
                                discrete: !1
                            }),
                            V.target.setPointerCapture(V.pointerId)) : (Math.abs(me) > Z || Math.abs(ce) > Z) && (A.current = null)
                        }
                        ),
                        onPointerUp: Tt(t.onPointerUp, V => {
                            const me = I.current
                              , ce = V.target;
                            if (ce.hasPointerCapture(V.pointerId) && ce.releasePointerCapture(V.pointerId),
                            I.current = null,
                            A.current = null,
                            me) {
                                const se = V.currentTarget
                                  , H = {
                                    originalEvent: V,
                                    delta: me
                                };
                                Dy(me, S.swipeDirection, S.swipeThreshold) ? Al(UP, w, H, {
                                    discrete: !0
                                }) : Al(zP, v, H, {
                                    discrete: !0
                                }),
                                se.addEventListener("click", ie => ie.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), S.viewport)
        })]
    }) : null
}
)
  , qP = t => {
    const {__scopeToast: e, children: n, ...s} = t
      , o = Vu(Fu, e)
      , [l,u] = C.useState(!1)
      , [d,f] = C.useState(!1);
    return ZP( () => u(!0)),
    C.useEffect( () => {
        const h = window.setTimeout( () => f(!0), 1e3);
        return () => window.clearTimeout(h)
    }
    , []),
    d ? null : E.jsx(xx, {
        asChild: !0,
        children: E.jsx(ju, {
            ...s,
            children: l && E.jsxs(E.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , QP = "ToastTitle"
  , Cx = C.forwardRef( (t, e) => {
    const {__scopeToast: n, ...s} = t;
    return E.jsx(Gt.div, {
        ...s,
        ref: e
    })
}
);
Cx.displayName = QP;
var KP = "ToastDescription"
  , Ex = C.forwardRef( (t, e) => {
    const {__scopeToast: n, ...s} = t;
    return E.jsx(Gt.div, {
        ...s,
        ref: e
    })
}
);
Ex.displayName = KP;
var kx = "ToastAction"
  , Ax = C.forwardRef( (t, e) => {
    const {altText: n, ...s} = t;
    return n.trim() ? E.jsx(Nx, {
        altText: n,
        asChild: !0,
        children: E.jsx(bh, {
            ...s,
            ref: e
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${kx}\`. Expected non-empty \`string\`.`),
    null)
}
);
Ax.displayName = kx;
var Rx = "ToastClose"
  , bh = C.forwardRef( (t, e) => {
    const {__scopeToast: n, ...s} = t
      , o = HP(Rx, n);
    return E.jsx(Nx, {
        asChild: !0,
        children: E.jsx(Gt.button, {
            type: "button",
            ...s,
            ref: e,
            onClick: Tt(t.onClick, o.onClose)
        })
    })
}
);
bh.displayName = Rx;
var Nx = C.forwardRef( (t, e) => {
    const {__scopeToast: n, altText: s, ...o} = t;
    return E.jsx(Gt.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": s || void 0,
        ...o,
        ref: e
    })
}
);
function Ox(t) {
    const e = [];
    return Array.from(t.childNodes).forEach(s => {
        if (s.nodeType === s.TEXT_NODE && s.textContent && e.push(s.textContent),
        GP(s)) {
            const o = s.ariaHidden || s.hidden || s.style.display === "none"
              , l = s.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (l) {
                    const u = s.dataset.radixToastAnnounceAlt;
                    u && e.push(u)
                } else
                    e.push(...Ox(s))
        }
    }
    ),
    e
}
function Al(t, e, n, {discrete: s}) {
    const o = n.originalEvent.currentTarget
      , l = new CustomEvent(t,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    e && o.addEventListener(t, e, {
        once: !0
    }),
    s ? mx(o, l) : o.dispatchEvent(l)
}
var Dy = (t, e, n=0) => {
    const s = Math.abs(t.x)
      , o = Math.abs(t.y)
      , l = s > o;
    return e === "left" || e === "right" ? l && s > n : !l && o > n
}
;
function ZP(t= () => {}
) {
    const e = Yn(t);
    Ei( () => {
        let n = 0
          , s = 0;
        return n = window.requestAnimationFrame( () => s = window.requestAnimationFrame(e)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(s)
        }
    }
    , [e])
}
function GP(t) {
    return t.nodeType === t.ELEMENT_NODE
}
function XP(t) {
    const e = []
      , n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
        acceptNode: s => {
            const o = s.tagName === "INPUT" && s.type === "hidden";
            return s.disabled || s.hidden || o ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        e.push(n.currentNode);
    return e
}
function nf(t) {
    const e = document.activeElement;
    return t.some(n => n === e ? !0 : (n.focus(),
    document.activeElement !== e))
}
var YP = Sx
  , Dx = Tx
  , Mx = Px
  , Ix = Cx
  , Lx = Ex
  , jx = Ax
  , Vx = bh;
function Fx(t) {
    var e, n, s = "";
    if (typeof t == "string" || typeof t == "number")
        s += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var o = t.length;
            for (e = 0; e < o; e++)
                t[e] && (n = Fx(t[e])) && (s && (s += " "),
                s += n)
        } else
            for (n in t)
                t[n] && (s && (s += " "),
                s += n);
    return s
}
function Bx() {
    for (var t, e, n = 0, s = "", o = arguments.length; n < o; n++)
        (t = arguments[n]) && (e = Fx(t)) && (s && (s += " "),
        s += e);
    return s
}
const My = t => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t
  , Iy = Bx
  , Bu = (t, e) => n => {
    var s;
    if (e?.variants == null)
        return Iy(t, n?.class, n?.className);
    const {variants: o, defaultVariants: l} = e
      , u = Object.keys(o).map(h => {
        const m = n?.[h]
          , y = l?.[h];
        if (m === null)
            return null;
        const v = My(m) || My(y);
        return o[h][v]
    }
    )
      , d = n && Object.entries(n).reduce( (h, m) => {
        let[y,v] = m;
        return v === void 0 || (h[y] = v),
        h
    }
    , {})
      , f = e == null || (s = e.compoundVariants) === null || s === void 0 ? void 0 : s.reduce( (h, m) => {
        let {class: y, className: v, ...w} = m;
        return Object.entries(w).every(b => {
            let[S,T] = b;
            return Array.isArray(T) ? T.includes({
                ...l,
                ...d
            }[S]) : {
                ...l,
                ...d
            }[S] === T
        }
        ) ? [...h, y, v] : h
    }
    , []);
    return Iy(t, u, f, n?.class, n?.className)
}
;
const JP = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , zx = (...t) => t.filter( (e, n, s) => !!e && s.indexOf(e) === n).join(" ");
var eC = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const tC = C.forwardRef( ({color: t="currentColor", size: e=24, strokeWidth: n=2, absoluteStrokeWidth: s, className: o="", children: l, iconNode: u, ...d}, f) => C.createElement("svg", {
    ref: f,
    ...eC,
    width: e,
    height: e,
    stroke: t,
    strokeWidth: s ? Number(n) * 24 / Number(e) : n,
    className: zx("lucide", o),
    ...d
}, [...u.map( ([h,m]) => C.createElement(h, m)), ...Array.isArray(l) ? l : [l]]));
const Ht = (t, e) => {
    const n = C.forwardRef( ({className: s, ...o}, l) => C.createElement(tC, {
        ref: l,
        iconNode: e,
        className: zx(`lucide-${JP(t)}`, s),
        ...o
    }));
    return n.displayName = `${t}`,
    n
}
;
const nC = Ht("Box", [["path", {
    d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
    key: "hh9hay"
}], ["path", {
    d: "m3.3 7 8.7 5 8.7-5",
    key: "g66t2b"
}], ["path", {
    d: "M12 22V12",
    key: "d0xqtd"
}]]);
const rC = Ht("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
const iC = Ht("CircleAlert", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
const sC = Ht("CodeXml", [["path", {
    d: "m18 16 4-4-4-4",
    key: "1inbqp"
}], ["path", {
    d: "m6 8-4 4 4 4",
    key: "15zrgr"
}], ["path", {
    d: "m14.5 4-5 16",
    key: "e7oirm"
}]]);
const oC = Ht("Cpu", [["rect", {
    width: "16",
    height: "16",
    x: "4",
    y: "4",
    rx: "2",
    key: "14l7u7"
}], ["rect", {
    width: "6",
    height: "6",
    x: "9",
    y: "9",
    rx: "1",
    key: "5aljv4"
}], ["path", {
    d: "M15 2v2",
    key: "13l42r"
}], ["path", {
    d: "M15 20v2",
    key: "15mkzm"
}], ["path", {
    d: "M2 15h2",
    key: "1gxd5l"
}], ["path", {
    d: "M2 9h2",
    key: "1bbxkp"
}], ["path", {
    d: "M20 15h2",
    key: "19e6y8"
}], ["path", {
    d: "M20 9h2",
    key: "19tzq7"
}], ["path", {
    d: "M9 2v2",
    key: "165o2o"
}], ["path", {
    d: "M9 20v2",
    key: "i2bqo8"
}]]);
const aC = Ht("Gamepad2", [["line", {
    x1: "6",
    x2: "10",
    y1: "11",
    y2: "11",
    key: "1gktln"
}], ["line", {
    x1: "8",
    x2: "8",
    y1: "9",
    y2: "13",
    key: "qnk9ow"
}], ["line", {
    x1: "15",
    x2: "15.01",
    y1: "12",
    y2: "12",
    key: "krot7o"
}], ["line", {
    x1: "18",
    x2: "18.01",
    y1: "10",
    y2: "10",
    key: "1lcuu1"
}], ["path", {
    d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
    key: "mfqc10"
}]]);
const lC = Ht("Github", [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]);
const uC = Ht("Layers", [["path", {
    d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
    key: "8b97xw"
}], ["path", {
    d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",
    key: "dd6zsq"
}], ["path", {
    d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",
    key: "ep9fru"
}]]);
const cC = Ht("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
const dC = Ht("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
const fC = Ht("PanelsTopLeft", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    key: "afitv7"
}], ["path", {
    d: "M3 9h18",
    key: "1pudct"
}], ["path", {
    d: "M9 21V9",
    key: "1oto5p"
}]]);
const hC = Ht("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]);
const pC = Ht("Server", [["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "2",
    rx: "2",
    ry: "2",
    key: "ngkwjq"
}], ["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "14",
    rx: "2",
    ry: "2",
    key: "iecqi9"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "6",
    y2: "6",
    key: "16zg32"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "18",
    y2: "18",
    key: "nzw8ys"
}]]);
const mC = Ht("ShieldCheck", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]);
const Lf = Ht("Terminal", [["polyline", {
    points: "4 17 10 11 4 5",
    key: "akl6gq"
}], ["line", {
    x1: "12",
    x2: "20",
    y1: "19",
    y2: "19",
    key: "q2wloq"
}]]);
const Ux = Ht("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , Th = "-"
  , gC = t => {
    const e = vC(t)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: s} = t;
    return {
        getClassGroupId: u => {
            const d = u.split(Th);
            return d[0] === "" && d.length !== 1 && d.shift(),
            $x(d, e) || yC(u)
        }
        ,
        getConflictingClassGroupIds: (u, d) => {
            const f = n[u] || [];
            return d && s[u] ? [...f, ...s[u]] : f
        }
    }
}
  , $x = (t, e) => {
    if (t.length === 0)
        return e.classGroupId;
    const n = t[0]
      , s = e.nextPart.get(n)
      , o = s ? $x(t.slice(1), s) : void 0;
    if (o)
        return o;
    if (e.validators.length === 0)
        return;
    const l = t.join(Th);
    return e.validators.find( ({validator: u}) => u(l))?.classGroupId
}
  , Ly = /^\[(.+)\]$/
  , yC = t => {
    if (Ly.test(t)) {
        const e = Ly.exec(t)[1]
          , n = e?.substring(0, e.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , vC = t => {
    const {theme: e, prefix: n} = t
      , s = {
        nextPart: new Map,
        validators: []
    };
    return wC(Object.entries(t.classGroups), n).forEach( ([l,u]) => {
        jf(u, s, l, e)
    }
    ),
    s
}
  , jf = (t, e, n, s) => {
    t.forEach(o => {
        if (typeof o == "string") {
            const l = o === "" ? e : jy(e, o);
            l.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (xC(o)) {
                jf(o(s), e, n, s);
                return
            }
            e.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([l,u]) => {
            jf(u, jy(e, l), n, s)
        }
        )
    }
    )
}
  , jy = (t, e) => {
    let n = t;
    return e.split(Th).forEach(s => {
        n.nextPart.has(s) || n.nextPart.set(s, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(s)
    }
    ),
    n
}
  , xC = t => t.isThemeGetter
  , wC = (t, e) => e ? t.map( ([n,s]) => {
    const o = s.map(l => typeof l == "string" ? e + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map( ([u,d]) => [e + u, d])) : l);
    return [n, o]
}
) : t
  , SC = t => {
    if (t < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let e = 0
      , n = new Map
      , s = new Map;
    const o = (l, u) => {
        n.set(l, u),
        e++,
        e > t && (e = 0,
        s = n,
        n = new Map)
    }
    ;
    return {
        get(l) {
            let u = n.get(l);
            if (u !== void 0)
                return u;
            if ((u = s.get(l)) !== void 0)
                return o(l, u),
                u
        },
        set(l, u) {
            n.has(l) ? n.set(l, u) : o(l, u)
        }
    }
}
  , Hx = "!"
  , bC = t => {
    const {separator: e, experimentalParseClassName: n} = t
      , s = e.length === 1
      , o = e[0]
      , l = e.length
      , u = d => {
        const f = [];
        let h = 0, m = 0, y;
        for (let T = 0; T < d.length; T++) {
            let _ = d[T];
            if (h === 0) {
                if (_ === o && (s || d.slice(T, T + l) === e)) {
                    f.push(d.slice(m, T)),
                    m = T + l;
                    continue
                }
                if (_ === "/") {
                    y = T;
                    continue
                }
            }
            _ === "[" ? h++ : _ === "]" && h--
        }
        const v = f.length === 0 ? d : d.substring(m)
          , w = v.startsWith(Hx)
          , b = w ? v.substring(1) : v
          , S = y && y > m ? y - m : void 0;
        return {
            modifiers: f,
            hasImportantModifier: w,
            baseClassName: b,
            maybePostfixModifierPosition: S
        }
    }
    ;
    return n ? d => n({
        className: d,
        parseClassName: u
    }) : u
}
  , TC = t => {
    if (t.length <= 1)
        return t;
    const e = [];
    let n = [];
    return t.forEach(s => {
        s[0] === "[" ? (e.push(...n.sort(), s),
        n = []) : n.push(s)
    }
    ),
    e.push(...n.sort()),
    e
}
  , _C = t => ({
    cache: SC(t.cacheSize),
    parseClassName: bC(t),
    ...gC(t)
})
  , PC = /\s+/
  , CC = (t, e) => {
    const {parseClassName: n, getClassGroupId: s, getConflictingClassGroupIds: o} = e
      , l = []
      , u = t.trim().split(PC);
    let d = "";
    for (let f = u.length - 1; f >= 0; f -= 1) {
        const h = u[f]
          , {modifiers: m, hasImportantModifier: y, baseClassName: v, maybePostfixModifierPosition: w} = n(h);
        let b = !!w
          , S = s(b ? v.substring(0, w) : v);
        if (!S) {
            if (!b) {
                d = h + (d.length > 0 ? " " + d : d);
                continue
            }
            if (S = s(v),
            !S) {
                d = h + (d.length > 0 ? " " + d : d);
                continue
            }
            b = !1
        }
        const T = TC(m).join(":")
          , _ = y ? T + Hx : T
          , P = _ + S;
        if (l.includes(P))
            continue;
        l.push(P);
        const A = o(S, b);
        for (let I = 0; I < A.length; ++I) {
            const L = A[I];
            l.push(_ + L)
        }
        d = h + (d.length > 0 ? " " + d : d)
    }
    return d
}
;
function EC() {
    let t = 0, e, n, s = "";
    for (; t < arguments.length; )
        (e = arguments[t++]) && (n = Wx(e)) && (s && (s += " "),
        s += n);
    return s
}
const Wx = t => {
    if (typeof t == "string")
        return t;
    let e, n = "";
    for (let s = 0; s < t.length; s++)
        t[s] && (e = Wx(t[s])) && (n && (n += " "),
        n += e);
    return n
}
;
function kC(t, ...e) {
    let n, s, o, l = u;
    function u(f) {
        const h = e.reduce( (m, y) => y(m), t());
        return n = _C(h),
        s = n.cache.get,
        o = n.cache.set,
        l = d,
        d(f)
    }
    function d(f) {
        const h = s(f);
        if (h)
            return h;
        const m = CC(f, n);
        return o(f, m),
        m
    }
    return function() {
        return l(EC.apply(null, arguments))
    }
}
const et = t => {
    const e = n => n[t] || [];
    return e.isThemeGetter = !0,
    e
}
  , qx = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , AC = /^\d+\/\d+$/
  , RC = new Set(["px", "full", "screen"])
  , NC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , OC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , DC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , MC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , IC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , pr = t => vs(t) || RC.has(t) || AC.test(t)
  , Hr = t => Os(t, "length", $C)
  , vs = t => !!t && !Number.isNaN(Number(t))
  , rf = t => Os(t, "number", vs)
  , To = t => !!t && Number.isInteger(Number(t))
  , LC = t => t.endsWith("%") && vs(t.slice(0, -1))
  , je = t => qx.test(t)
  , Wr = t => NC.test(t)
  , jC = new Set(["length", "size", "percentage"])
  , VC = t => Os(t, jC, Qx)
  , FC = t => Os(t, "position", Qx)
  , BC = new Set(["image", "url"])
  , zC = t => Os(t, BC, WC)
  , UC = t => Os(t, "", HC)
  , _o = () => !0
  , Os = (t, e, n) => {
    const s = qx.exec(t);
    return s ? s[1] ? typeof e == "string" ? s[1] === e : e.has(s[1]) : n(s[2]) : !1
}
  , $C = t => OC.test(t) && !DC.test(t)
  , Qx = () => !1
  , HC = t => MC.test(t)
  , WC = t => IC.test(t)
  , qC = () => {
    const t = et("colors")
      , e = et("spacing")
      , n = et("blur")
      , s = et("brightness")
      , o = et("borderColor")
      , l = et("borderRadius")
      , u = et("borderSpacing")
      , d = et("borderWidth")
      , f = et("contrast")
      , h = et("grayscale")
      , m = et("hueRotate")
      , y = et("invert")
      , v = et("gap")
      , w = et("gradientColorStops")
      , b = et("gradientColorStopPositions")
      , S = et("inset")
      , T = et("margin")
      , _ = et("opacity")
      , P = et("padding")
      , A = et("saturate")
      , I = et("scale")
      , L = et("sepia")
      , B = et("skew")
      , F = et("space")
      , W = et("translate")
      , X = () => ["auto", "contain", "none"]
      , G = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , Q = () => ["auto", je, e]
      , O = () => [je, e]
      , q = () => ["", pr, Hr]
      , V = () => ["auto", vs, je]
      , me = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , ce = () => ["solid", "dashed", "dotted", "double", "none"]
      , se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , H = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , ie = () => ["", "0", je]
      , ne = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , D = () => [vs, je];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [_o],
            spacing: [pr, Hr],
            blur: ["none", "", Wr, je],
            brightness: D(),
            borderColor: [t],
            borderRadius: ["none", "", "full", Wr, je],
            borderSpacing: O(),
            borderWidth: q(),
            contrast: D(),
            grayscale: ie(),
            hueRotate: D(),
            invert: ie(),
            gap: O(),
            gradientColorStops: [t],
            gradientColorStopPositions: [LC, Hr],
            inset: Q(),
            margin: Q(),
            opacity: D(),
            padding: O(),
            saturate: D(),
            scale: D(),
            sepia: ie(),
            skew: D(),
            space: O(),
            translate: O()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", je]
            }],
            container: ["container"],
            columns: [{
                columns: [Wr]
            }],
            "break-after": [{
                "break-after": ne()
            }],
            "break-before": [{
                "break-before": ne()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...me(), je]
            }],
            overflow: [{
                overflow: G()
            }],
            "overflow-x": [{
                "overflow-x": G()
            }],
            "overflow-y": [{
                "overflow-y": G()
            }],
            overscroll: [{
                overscroll: X()
            }],
            "overscroll-x": [{
                "overscroll-x": X()
            }],
            "overscroll-y": [{
                "overscroll-y": X()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [S]
            }],
            "inset-x": [{
                "inset-x": [S]
            }],
            "inset-y": [{
                "inset-y": [S]
            }],
            start: [{
                start: [S]
            }],
            end: [{
                end: [S]
            }],
            top: [{
                top: [S]
            }],
            right: [{
                right: [S]
            }],
            bottom: [{
                bottom: [S]
            }],
            left: [{
                left: [S]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", To, je]
            }],
            basis: [{
                basis: Q()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", je]
            }],
            grow: [{
                grow: ie()
            }],
            shrink: [{
                shrink: ie()
            }],
            order: [{
                order: ["first", "last", "none", To, je]
            }],
            "grid-cols": [{
                "grid-cols": [_o]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", To, je]
                }, je]
            }],
            "col-start": [{
                "col-start": V()
            }],
            "col-end": [{
                "col-end": V()
            }],
            "grid-rows": [{
                "grid-rows": [_o]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [To, je]
                }, je]
            }],
            "row-start": [{
                "row-start": V()
            }],
            "row-end": [{
                "row-end": V()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", je]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", je]
            }],
            gap: [{
                gap: [v]
            }],
            "gap-x": [{
                "gap-x": [v]
            }],
            "gap-y": [{
                "gap-y": [v]
            }],
            "justify-content": [{
                justify: ["normal", ...H()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...H(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...H(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [P]
            }],
            px: [{
                px: [P]
            }],
            py: [{
                py: [P]
            }],
            ps: [{
                ps: [P]
            }],
            pe: [{
                pe: [P]
            }],
            pt: [{
                pt: [P]
            }],
            pr: [{
                pr: [P]
            }],
            pb: [{
                pb: [P]
            }],
            pl: [{
                pl: [P]
            }],
            m: [{
                m: [T]
            }],
            mx: [{
                mx: [T]
            }],
            my: [{
                my: [T]
            }],
            ms: [{
                ms: [T]
            }],
            me: [{
                me: [T]
            }],
            mt: [{
                mt: [T]
            }],
            mr: [{
                mr: [T]
            }],
            mb: [{
                mb: [T]
            }],
            ml: [{
                ml: [T]
            }],
            "space-x": [{
                "space-x": [F]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [F]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", je, e]
            }],
            "min-w": [{
                "min-w": [je, e, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [je, e, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Wr]
                }, Wr]
            }],
            h: [{
                h: [je, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [je, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [je, e, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [je, e, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Wr, Hr]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", rf]
            }],
            "font-family": [{
                font: [_o]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", je]
            }],
            "line-clamp": [{
                "line-clamp": ["none", vs, rf]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", pr, je]
            }],
            "list-image": [{
                "list-image": ["none", je]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", je]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [t]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [_]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [t]
            }],
            "text-opacity": [{
                "text-opacity": [_]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...ce(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", pr, Hr]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", pr, je]
            }],
            "text-decoration-color": [{
                decoration: [t]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: O()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", je]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", je]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [_]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...me(), FC]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", VC]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, zC]
            }],
            "bg-color": [{
                bg: [t]
            }],
            "gradient-from-pos": [{
                from: [b]
            }],
            "gradient-via-pos": [{
                via: [b]
            }],
            "gradient-to-pos": [{
                to: [b]
            }],
            "gradient-from": [{
                from: [w]
            }],
            "gradient-via": [{
                via: [w]
            }],
            "gradient-to": [{
                to: [w]
            }],
            rounded: [{
                rounded: [l]
            }],
            "rounded-s": [{
                "rounded-s": [l]
            }],
            "rounded-e": [{
                "rounded-e": [l]
            }],
            "rounded-t": [{
                "rounded-t": [l]
            }],
            "rounded-r": [{
                "rounded-r": [l]
            }],
            "rounded-b": [{
                "rounded-b": [l]
            }],
            "rounded-l": [{
                "rounded-l": [l]
            }],
            "rounded-ss": [{
                "rounded-ss": [l]
            }],
            "rounded-se": [{
                "rounded-se": [l]
            }],
            "rounded-ee": [{
                "rounded-ee": [l]
            }],
            "rounded-es": [{
                "rounded-es": [l]
            }],
            "rounded-tl": [{
                "rounded-tl": [l]
            }],
            "rounded-tr": [{
                "rounded-tr": [l]
            }],
            "rounded-br": [{
                "rounded-br": [l]
            }],
            "rounded-bl": [{
                "rounded-bl": [l]
            }],
            "border-w": [{
                border: [d]
            }],
            "border-w-x": [{
                "border-x": [d]
            }],
            "border-w-y": [{
                "border-y": [d]
            }],
            "border-w-s": [{
                "border-s": [d]
            }],
            "border-w-e": [{
                "border-e": [d]
            }],
            "border-w-t": [{
                "border-t": [d]
            }],
            "border-w-r": [{
                "border-r": [d]
            }],
            "border-w-b": [{
                "border-b": [d]
            }],
            "border-w-l": [{
                "border-l": [d]
            }],
            "border-opacity": [{
                "border-opacity": [_]
            }],
            "border-style": [{
                border: [...ce(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [d]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [d]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [_]
            }],
            "divide-style": [{
                divide: ce()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...ce()]
            }],
            "outline-offset": [{
                "outline-offset": [pr, je]
            }],
            "outline-w": [{
                outline: [pr, Hr]
            }],
            "outline-color": [{
                outline: [t]
            }],
            "ring-w": [{
                ring: q()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [t]
            }],
            "ring-opacity": [{
                "ring-opacity": [_]
            }],
            "ring-offset-w": [{
                "ring-offset": [pr, Hr]
            }],
            "ring-offset-color": [{
                "ring-offset": [t]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Wr, UC]
            }],
            "shadow-color": [{
                shadow: [_o]
            }],
            opacity: [{
                opacity: [_]
            }],
            "mix-blend": [{
                "mix-blend": [...se(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": se()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [s]
            }],
            contrast: [{
                contrast: [f]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Wr, je]
            }],
            grayscale: [{
                grayscale: [h]
            }],
            "hue-rotate": [{
                "hue-rotate": [m]
            }],
            invert: [{
                invert: [y]
            }],
            saturate: [{
                saturate: [A]
            }],
            sepia: [{
                sepia: [L]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [s]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [f]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [h]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [m]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [y]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [_]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [A]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [L]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [u]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [u]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [u]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", je]
            }],
            duration: [{
                duration: D()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", je]
            }],
            delay: [{
                delay: D()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", je]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [I]
            }],
            "scale-x": [{
                "scale-x": [I]
            }],
            "scale-y": [{
                "scale-y": [I]
            }],
            rotate: [{
                rotate: [To, je]
            }],
            "translate-x": [{
                "translate-x": [W]
            }],
            "translate-y": [{
                "translate-y": [W]
            }],
            "skew-x": [{
                "skew-x": [B]
            }],
            "skew-y": [{
                "skew-y": [B]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", je]
            }],
            accent: [{
                accent: ["auto", t]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", je]
            }],
            "caret-color": [{
                caret: [t]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": O()
            }],
            "scroll-mx": [{
                "scroll-mx": O()
            }],
            "scroll-my": [{
                "scroll-my": O()
            }],
            "scroll-ms": [{
                "scroll-ms": O()
            }],
            "scroll-me": [{
                "scroll-me": O()
            }],
            "scroll-mt": [{
                "scroll-mt": O()
            }],
            "scroll-mr": [{
                "scroll-mr": O()
            }],
            "scroll-mb": [{
                "scroll-mb": O()
            }],
            "scroll-ml": [{
                "scroll-ml": O()
            }],
            "scroll-p": [{
                "scroll-p": O()
            }],
            "scroll-px": [{
                "scroll-px": O()
            }],
            "scroll-py": [{
                "scroll-py": O()
            }],
            "scroll-ps": [{
                "scroll-ps": O()
            }],
            "scroll-pe": [{
                "scroll-pe": O()
            }],
            "scroll-pt": [{
                "scroll-pt": O()
            }],
            "scroll-pr": [{
                "scroll-pr": O()
            }],
            "scroll-pb": [{
                "scroll-pb": O()
            }],
            "scroll-pl": [{
                "scroll-pl": O()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", je]
            }],
            fill: [{
                fill: [t, "none"]
            }],
            "stroke-w": [{
                stroke: [pr, Hr, rf]
            }],
            stroke: [{
                stroke: [t, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , QC = kC(qC);
function lt(...t) {
    return QC(Bx(t))
}
const KC = YP
  , Kx = C.forwardRef( ({className: t, ...e}, n) => E.jsx(Dx, {
    ref: n,
    className: lt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", t),
    ...e
}));
Kx.displayName = Dx.displayName;
const ZC = Bu("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Zx = C.forwardRef( ({className: t, variant: e, ...n}, s) => E.jsx(Mx, {
    ref: s,
    className: lt(ZC({
        variant: e
    }), t),
    ...n
}));
Zx.displayName = Mx.displayName;
const GC = C.forwardRef( ({className: t, ...e}, n) => E.jsx(jx, {
    ref: n,
    className: lt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", t),
    ...e
}));
GC.displayName = jx.displayName;
const Gx = C.forwardRef( ({className: t, ...e}, n) => E.jsx(Vx, {
    ref: n,
    className: lt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", t),
    "toast-close": "",
    ...e,
    children: E.jsx(Ux, {
        className: "h-4 w-4"
    })
}));
Gx.displayName = Vx.displayName;
const Xx = C.forwardRef( ({className: t, ...e}, n) => E.jsx(Ix, {
    ref: n,
    className: lt("text-sm font-semibold", t),
    ...e
}));
Xx.displayName = Ix.displayName;
const Yx = C.forwardRef( ({className: t, ...e}, n) => E.jsx(Lx, {
    ref: n,
    className: lt("text-sm opacity-90", t),
    ...e
}));
Yx.displayName = Lx.displayName;
function XC() {
    const {toasts: t} = dx();
    return E.jsxs(KC, {
        children: [t.map(function({id: e, title: n, description: s, action: o, ...l}) {
            return E.jsxs(Zx, {
                ...l,
                children: [E.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && E.jsx(Xx, {
                        children: n
                    }), s && E.jsx(Yx, {
                        children: s
                    })]
                }), o, E.jsx(Gx, {})]
            }, e)
        }), E.jsx(Kx, {})]
    })
}
const YC = ["top", "right", "bottom", "left"]
  , Gr = Math.min
  , cn = Math.max
  , lu = Math.round
  , Rl = Math.floor
  , Kn = t => ({
    x: t,
    y: t
})
  , JC = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , eE = {
    start: "end",
    end: "start"
};
function Vf(t, e, n) {
    return cn(t, Gr(e, n))
}
function Sr(t, e) {
    return typeof t == "function" ? t(e) : t
}
function br(t) {
    return t.split("-")[0]
}
function Ds(t) {
    return t.split("-")[1]
}
function _h(t) {
    return t === "x" ? "y" : "x"
}
function Ph(t) {
    return t === "y" ? "height" : "width"
}
function Xr(t) {
    return ["top", "bottom"].includes(br(t)) ? "y" : "x"
}
function Ch(t) {
    return _h(Xr(t))
}
function tE(t, e, n) {
    n === void 0 && (n = !1);
    const s = Ds(t)
      , o = Ch(t)
      , l = Ph(o);
    let u = o === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
    return e.reference[l] > e.floating[l] && (u = uu(u)),
    [u, uu(u)]
}
function nE(t) {
    const e = uu(t);
    return [Ff(t), e, Ff(e)]
}
function Ff(t) {
    return t.replace(/start|end/g, e => eE[e])
}
function rE(t, e, n) {
    const s = ["left", "right"]
      , o = ["right", "left"]
      , l = ["top", "bottom"]
      , u = ["bottom", "top"];
    switch (t) {
    case "top":
    case "bottom":
        return n ? e ? o : s : e ? s : o;
    case "left":
    case "right":
        return e ? l : u;
    default:
        return []
    }
}
function iE(t, e, n, s) {
    const o = Ds(t);
    let l = rE(br(t), n === "start", s);
    return o && (l = l.map(u => u + "-" + o),
    e && (l = l.concat(l.map(Ff)))),
    l
}
function uu(t) {
    return t.replace(/left|right|bottom|top/g, e => JC[e])
}
function sE(t) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...t
    }
}
function Jx(t) {
    return typeof t != "number" ? sE(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}
function cu(t) {
    const {x: e, y: n, width: s, height: o} = t;
    return {
        width: s,
        height: o,
        top: n,
        left: e,
        right: e + s,
        bottom: n + o,
        x: e,
        y: n
    }
}
function Vy(t, e, n) {
    let {reference: s, floating: o} = t;
    const l = Xr(e)
      , u = Ch(e)
      , d = Ph(u)
      , f = br(e)
      , h = l === "y"
      , m = s.x + s.width / 2 - o.width / 2
      , y = s.y + s.height / 2 - o.height / 2
      , v = s[d] / 2 - o[d] / 2;
    let w;
    switch (f) {
    case "top":
        w = {
            x: m,
            y: s.y - o.height
        };
        break;
    case "bottom":
        w = {
            x: m,
            y: s.y + s.height
        };
        break;
    case "right":
        w = {
            x: s.x + s.width,
            y
        };
        break;
    case "left":
        w = {
            x: s.x - o.width,
            y
        };
        break;
    default:
        w = {
            x: s.x,
            y: s.y
        }
    }
    switch (Ds(e)) {
    case "start":
        w[u] -= v * (n && h ? -1 : 1);
        break;
    case "end":
        w[u] += v * (n && h ? -1 : 1);
        break
    }
    return w
}
const oE = async (t, e, n) => {
    const {placement: s="bottom", strategy: o="absolute", middleware: l=[], platform: u} = n
      , d = l.filter(Boolean)
      , f = await (u.isRTL == null ? void 0 : u.isRTL(e));
    let h = await u.getElementRects({
        reference: t,
        floating: e,
        strategy: o
    })
      , {x: m, y} = Vy(h, s, f)
      , v = s
      , w = {}
      , b = 0;
    for (let S = 0; S < d.length; S++) {
        const {name: T, fn: _} = d[S]
          , {x: P, y: A, data: I, reset: L} = await _({
            x: m,
            y,
            initialPlacement: s,
            placement: v,
            strategy: o,
            middlewareData: w,
            rects: h,
            platform: u,
            elements: {
                reference: t,
                floating: e
            }
        });
        m = P ?? m,
        y = A ?? y,
        w = {
            ...w,
            [T]: {
                ...w[T],
                ...I
            }
        },
        L && b <= 50 && (b++,
        typeof L == "object" && (L.placement && (v = L.placement),
        L.rects && (h = L.rects === !0 ? await u.getElementRects({
            reference: t,
            floating: e,
            strategy: o
        }) : L.rects),
        {x: m, y} = Vy(h, v, f)),
        S = -1)
    }
    return {
        x: m,
        y,
        placement: v,
        strategy: o,
        middlewareData: w
    }
}
;
async function zo(t, e) {
    var n;
    e === void 0 && (e = {});
    const {x: s, y: o, platform: l, rects: u, elements: d, strategy: f} = t
      , {boundary: h="clippingAncestors", rootBoundary: m="viewport", elementContext: y="floating", altBoundary: v=!1, padding: w=0} = Sr(e, t)
      , b = Jx(w)
      , T = d[v ? y === "floating" ? "reference" : "floating" : y]
      , _ = cu(await l.getClippingRect({
        element: (n = await (l.isElement == null ? void 0 : l.isElement(T))) == null || n ? T : T.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(d.floating)),
        boundary: h,
        rootBoundary: m,
        strategy: f
    }))
      , P = y === "floating" ? {
        x: s,
        y: o,
        width: u.floating.width,
        height: u.floating.height
    } : u.reference
      , A = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d.floating))
      , I = await (l.isElement == null ? void 0 : l.isElement(A)) ? await (l.getScale == null ? void 0 : l.getScale(A)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , L = cu(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: d,
        rect: P,
        offsetParent: A,
        strategy: f
    }) : P);
    return {
        top: (_.top - L.top + b.top) / I.y,
        bottom: (L.bottom - _.bottom + b.bottom) / I.y,
        left: (_.left - L.left + b.left) / I.x,
        right: (L.right - _.right + b.right) / I.x
    }
}
const aE = t => ({
    name: "arrow",
    options: t,
    async fn(e) {
        const {x: n, y: s, placement: o, rects: l, platform: u, elements: d, middlewareData: f} = e
          , {element: h, padding: m=0} = Sr(t, e) || {};
        if (h == null)
            return {};
        const y = Jx(m)
          , v = {
            x: n,
            y: s
        }
          , w = Ch(o)
          , b = Ph(w)
          , S = await u.getDimensions(h)
          , T = w === "y"
          , _ = T ? "top" : "left"
          , P = T ? "bottom" : "right"
          , A = T ? "clientHeight" : "clientWidth"
          , I = l.reference[b] + l.reference[w] - v[w] - l.floating[b]
          , L = v[w] - l.reference[w]
          , B = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(h));
        let F = B ? B[A] : 0;
        (!F || !await (u.isElement == null ? void 0 : u.isElement(B))) && (F = d.floating[A] || l.floating[b]);
        const W = I / 2 - L / 2
          , X = F / 2 - S[b] / 2 - 1
          , G = Gr(y[_], X)
          , Q = Gr(y[P], X)
          , O = G
          , q = F - S[b] - Q
          , V = F / 2 - S[b] / 2 + W
          , me = Vf(O, V, q)
          , ce = !f.arrow && Ds(o) != null && V !== me && l.reference[b] / 2 - (V < O ? G : Q) - S[b] / 2 < 0
          , se = ce ? V < O ? V - O : V - q : 0;
        return {
            [w]: v[w] + se,
            data: {
                [w]: me,
                centerOffset: V - me - se,
                ...ce && {
                    alignmentOffset: se
                }
            },
            reset: ce
        }
    }
})
  , lE = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "flip",
        options: t,
        async fn(e) {
            var n, s;
            const {placement: o, middlewareData: l, rects: u, initialPlacement: d, platform: f, elements: h} = e
              , {mainAxis: m=!0, crossAxis: y=!0, fallbackPlacements: v, fallbackStrategy: w="bestFit", fallbackAxisSideDirection: b="none", flipAlignment: S=!0, ...T} = Sr(t, e);
            if ((n = l.arrow) != null && n.alignmentOffset)
                return {};
            const _ = br(o)
              , P = Xr(d)
              , A = br(d) === d
              , I = await (f.isRTL == null ? void 0 : f.isRTL(h.floating))
              , L = v || (A || !S ? [uu(d)] : nE(d))
              , B = b !== "none";
            !v && B && L.push(...iE(d, S, b, I));
            const F = [d, ...L]
              , W = await zo(e, T)
              , X = [];
            let G = ((s = l.flip) == null ? void 0 : s.overflows) || [];
            if (m && X.push(W[_]),
            y) {
                const V = tE(o, u, I);
                X.push(W[V[0]], W[V[1]])
            }
            if (G = [...G, {
                placement: o,
                overflows: X
            }],
            !X.every(V => V <= 0)) {
                var Q, O;
                const V = (((Q = l.flip) == null ? void 0 : Q.index) || 0) + 1
                  , me = F[V];
                if (me)
                    return {
                        data: {
                            index: V,
                            overflows: G
                        },
                        reset: {
                            placement: me
                        }
                    };
                let ce = (O = G.filter(se => se.overflows[0] <= 0).sort( (se, H) => se.overflows[1] - H.overflows[1])[0]) == null ? void 0 : O.placement;
                if (!ce)
                    switch (w) {
                    case "bestFit":
                        {
                            var q;
                            const se = (q = G.filter(H => {
                                if (B) {
                                    const ie = Xr(H.placement);
                                    return ie === P || ie === "y"
                                }
                                return !0
                            }
                            ).map(H => [H.placement, H.overflows.filter(ie => ie > 0).reduce( (ie, ne) => ie + ne, 0)]).sort( (H, ie) => H[1] - ie[1])[0]) == null ? void 0 : q[0];
                            se && (ce = se);
                            break
                        }
                    case "initialPlacement":
                        ce = d;
                        break
                    }
                if (o !== ce)
                    return {
                        reset: {
                            placement: ce
                        }
                    }
            }
            return {}
        }
    }
};
function Fy(t, e) {
    return {
        top: t.top - e.height,
        right: t.right - e.width,
        bottom: t.bottom - e.height,
        left: t.left - e.width
    }
}
function By(t) {
    return YC.some(e => t[e] >= 0)
}
const uE = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "hide",
        options: t,
        async fn(e) {
            const {rects: n} = e
              , {strategy: s="referenceHidden", ...o} = Sr(t, e);
            switch (s) {
            case "referenceHidden":
                {
                    const l = await zo(e, {
                        ...o,
                        elementContext: "reference"
                    })
                      , u = Fy(l, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: u,
                            referenceHidden: By(u)
                        }
                    }
                }
            case "escaped":
                {
                    const l = await zo(e, {
                        ...o,
                        altBoundary: !0
                    })
                      , u = Fy(l, n.floating);
                    return {
                        data: {
                            escapedOffsets: u,
                            escaped: By(u)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function cE(t, e) {
    const {placement: n, platform: s, elements: o} = t
      , l = await (s.isRTL == null ? void 0 : s.isRTL(o.floating))
      , u = br(n)
      , d = Ds(n)
      , f = Xr(n) === "y"
      , h = ["left", "top"].includes(u) ? -1 : 1
      , m = l && f ? -1 : 1
      , y = Sr(e, t);
    let {mainAxis: v, crossAxis: w, alignmentAxis: b} = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: y.mainAxis || 0,
        crossAxis: y.crossAxis || 0,
        alignmentAxis: y.alignmentAxis
    };
    return d && typeof b == "number" && (w = d === "end" ? b * -1 : b),
    f ? {
        x: w * m,
        y: v * h
    } : {
        x: v * h,
        y: w * m
    }
}
const dE = function(t) {
    return t === void 0 && (t = 0),
    {
        name: "offset",
        options: t,
        async fn(e) {
            var n, s;
            const {x: o, y: l, placement: u, middlewareData: d} = e
              , f = await cE(e, t);
            return u === ((n = d.offset) == null ? void 0 : n.placement) && (s = d.arrow) != null && s.alignmentOffset ? {} : {
                x: o + f.x,
                y: l + f.y,
                data: {
                    ...f,
                    placement: u
                }
            }
        }
    }
}
  , fE = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "shift",
        options: t,
        async fn(e) {
            const {x: n, y: s, placement: o} = e
              , {mainAxis: l=!0, crossAxis: u=!1, limiter: d={
                fn: T => {
                    let {x: _, y: P} = T;
                    return {
                        x: _,
                        y: P
                    }
                }
            }, ...f} = Sr(t, e)
              , h = {
                x: n,
                y: s
            }
              , m = await zo(e, f)
              , y = Xr(br(o))
              , v = _h(y);
            let w = h[v]
              , b = h[y];
            if (l) {
                const T = v === "y" ? "top" : "left"
                  , _ = v === "y" ? "bottom" : "right"
                  , P = w + m[T]
                  , A = w - m[_];
                w = Vf(P, w, A)
            }
            if (u) {
                const T = y === "y" ? "top" : "left"
                  , _ = y === "y" ? "bottom" : "right"
                  , P = b + m[T]
                  , A = b - m[_];
                b = Vf(P, b, A)
            }
            const S = d.fn({
                ...e,
                [v]: w,
                [y]: b
            });
            return {
                ...S,
                data: {
                    x: S.x - n,
                    y: S.y - s,
                    enabled: {
                        [v]: l,
                        [y]: u
                    }
                }
            }
        }
    }
}
  , hE = function(t) {
    return t === void 0 && (t = {}),
    {
        options: t,
        fn(e) {
            const {x: n, y: s, placement: o, rects: l, middlewareData: u} = e
              , {offset: d=0, mainAxis: f=!0, crossAxis: h=!0} = Sr(t, e)
              , m = {
                x: n,
                y: s
            }
              , y = Xr(o)
              , v = _h(y);
            let w = m[v]
              , b = m[y];
            const S = Sr(d, e)
              , T = typeof S == "number" ? {
                mainAxis: S,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...S
            };
            if (f) {
                const A = v === "y" ? "height" : "width"
                  , I = l.reference[v] - l.floating[A] + T.mainAxis
                  , L = l.reference[v] + l.reference[A] - T.mainAxis;
                w < I ? w = I : w > L && (w = L)
            }
            if (h) {
                var _, P;
                const A = v === "y" ? "width" : "height"
                  , I = ["top", "left"].includes(br(o))
                  , L = l.reference[y] - l.floating[A] + (I && ((_ = u.offset) == null ? void 0 : _[y]) || 0) + (I ? 0 : T.crossAxis)
                  , B = l.reference[y] + l.reference[A] + (I ? 0 : ((P = u.offset) == null ? void 0 : P[y]) || 0) - (I ? T.crossAxis : 0);
                b < L ? b = L : b > B && (b = B)
            }
            return {
                [v]: w,
                [y]: b
            }
        }
    }
}
  , pE = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "size",
        options: t,
        async fn(e) {
            var n, s;
            const {placement: o, rects: l, platform: u, elements: d} = e
              , {apply: f= () => {}
            , ...h} = Sr(t, e)
              , m = await zo(e, h)
              , y = br(o)
              , v = Ds(o)
              , w = Xr(o) === "y"
              , {width: b, height: S} = l.floating;
            let T, _;
            y === "top" || y === "bottom" ? (T = y,
            _ = v === (await (u.isRTL == null ? void 0 : u.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (_ = y,
            T = v === "end" ? "top" : "bottom");
            const P = S - m.top - m.bottom
              , A = b - m.left - m.right
              , I = Gr(S - m[T], P)
              , L = Gr(b - m[_], A)
              , B = !e.middlewareData.shift;
            let F = I
              , W = L;
            if ((n = e.middlewareData.shift) != null && n.enabled.x && (W = A),
            (s = e.middlewareData.shift) != null && s.enabled.y && (F = P),
            B && !v) {
                const G = cn(m.left, 0)
                  , Q = cn(m.right, 0)
                  , O = cn(m.top, 0)
                  , q = cn(m.bottom, 0);
                w ? W = b - 2 * (G !== 0 || Q !== 0 ? G + Q : cn(m.left, m.right)) : F = S - 2 * (O !== 0 || q !== 0 ? O + q : cn(m.top, m.bottom))
            }
            await f({
                ...e,
                availableWidth: W,
                availableHeight: F
            });
            const X = await u.getDimensions(d.floating);
            return b !== X.width || S !== X.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function zu() {
    return typeof window < "u"
}
function Ms(t) {
    return ew(t) ? (t.nodeName || "").toLowerCase() : "#document"
}
function fn(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window
}
function rr(t) {
    var e;
    return (e = (ew(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement
}
function ew(t) {
    return zu() ? t instanceof Node || t instanceof fn(t).Node : !1
}
function Fn(t) {
    return zu() ? t instanceof Element || t instanceof fn(t).Element : !1
}
function Jn(t) {
    return zu() ? t instanceof HTMLElement || t instanceof fn(t).HTMLElement : !1
}
function zy(t) {
    return !zu() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof fn(t).ShadowRoot
}
function la(t) {
    const {overflow: e, overflowX: n, overflowY: s, display: o} = Bn(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + s + n) && !["inline", "contents"].includes(o)
}
function mE(t) {
    return ["table", "td", "th"].includes(Ms(t))
}
function Uu(t) {
    return [":popover-open", ":modal"].some(e => {
        try {
            return t.matches(e)
        } catch {
            return !1
        }
    }
    )
}
function Eh(t) {
    const e = kh()
      , n = Fn(t) ? Bn(t) : t;
    return ["transform", "translate", "scale", "rotate", "perspective"].some(s => n[s] ? n[s] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(s => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some(s => (n.contain || "").includes(s))
}
function gE(t) {
    let e = Yr(t);
    for (; Jn(e) && !_s(e); ) {
        if (Eh(e))
            return e;
        if (Uu(e))
            return null;
        e = Yr(e)
    }
    return null
}
function kh() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function _s(t) {
    return ["html", "body", "#document"].includes(Ms(t))
}
function Bn(t) {
    return fn(t).getComputedStyle(t)
}
function $u(t) {
    return Fn(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.scrollX,
        scrollTop: t.scrollY
    }
}
function Yr(t) {
    if (Ms(t) === "html")
        return t;
    const e = t.assignedSlot || t.parentNode || zy(t) && t.host || rr(t);
    return zy(e) ? e.host : e
}
function tw(t) {
    const e = Yr(t);
    return _s(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Jn(e) && la(e) ? e : tw(e)
}
function Uo(t, e, n) {
    var s;
    e === void 0 && (e = []),
    n === void 0 && (n = !0);
    const o = tw(t)
      , l = o === ((s = t.ownerDocument) == null ? void 0 : s.body)
      , u = fn(o);
    if (l) {
        const d = Bf(u);
        return e.concat(u, u.visualViewport || [], la(o) ? o : [], d && n ? Uo(d) : [])
    }
    return e.concat(o, Uo(o, [], n))
}
function Bf(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
}
function nw(t) {
    const e = Bn(t);
    let n = parseFloat(e.width) || 0
      , s = parseFloat(e.height) || 0;
    const o = Jn(t)
      , l = o ? t.offsetWidth : n
      , u = o ? t.offsetHeight : s
      , d = lu(n) !== l || lu(s) !== u;
    return d && (n = l,
    s = u),
    {
        width: n,
        height: s,
        $: d
    }
}
function Ah(t) {
    return Fn(t) ? t : t.contextElement
}
function xs(t) {
    const e = Ah(t);
    if (!Jn(e))
        return Kn(1);
    const n = e.getBoundingClientRect()
      , {width: s, height: o, $: l} = nw(e);
    let u = (l ? lu(n.width) : n.width) / s
      , d = (l ? lu(n.height) : n.height) / o;
    return (!u || !Number.isFinite(u)) && (u = 1),
    (!d || !Number.isFinite(d)) && (d = 1),
    {
        x: u,
        y: d
    }
}
const yE = Kn(0);
function rw(t) {
    const e = fn(t);
    return !kh() || !e.visualViewport ? yE : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    }
}
function vE(t, e, n) {
    return e === void 0 && (e = !1),
    !n || e && n !== fn(t) ? !1 : e
}
function ki(t, e, n, s) {
    e === void 0 && (e = !1),
    n === void 0 && (n = !1);
    const o = t.getBoundingClientRect()
      , l = Ah(t);
    let u = Kn(1);
    e && (s ? Fn(s) && (u = xs(s)) : u = xs(t));
    const d = vE(l, n, s) ? rw(l) : Kn(0);
    let f = (o.left + d.x) / u.x
      , h = (o.top + d.y) / u.y
      , m = o.width / u.x
      , y = o.height / u.y;
    if (l) {
        const v = fn(l)
          , w = s && Fn(s) ? fn(s) : s;
        let b = v
          , S = Bf(b);
        for (; S && s && w !== b; ) {
            const T = xs(S)
              , _ = S.getBoundingClientRect()
              , P = Bn(S)
              , A = _.left + (S.clientLeft + parseFloat(P.paddingLeft)) * T.x
              , I = _.top + (S.clientTop + parseFloat(P.paddingTop)) * T.y;
            f *= T.x,
            h *= T.y,
            m *= T.x,
            y *= T.y,
            f += A,
            h += I,
            b = fn(S),
            S = Bf(b)
        }
    }
    return cu({
        width: m,
        height: y,
        x: f,
        y: h
    })
}
function Rh(t, e) {
    const n = $u(t).scrollLeft;
    return e ? e.left + n : ki(rr(t)).left + n
}
function iw(t, e, n) {
    n === void 0 && (n = !1);
    const s = t.getBoundingClientRect()
      , o = s.left + e.scrollLeft - (n ? 0 : Rh(t, s))
      , l = s.top + e.scrollTop;
    return {
        x: o,
        y: l
    }
}
function xE(t) {
    let {elements: e, rect: n, offsetParent: s, strategy: o} = t;
    const l = o === "fixed"
      , u = rr(s)
      , d = e ? Uu(e.floating) : !1;
    if (s === u || d && l)
        return n;
    let f = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , h = Kn(1);
    const m = Kn(0)
      , y = Jn(s);
    if ((y || !y && !l) && ((Ms(s) !== "body" || la(u)) && (f = $u(s)),
    Jn(s))) {
        const w = ki(s);
        h = xs(s),
        m.x = w.x + s.clientLeft,
        m.y = w.y + s.clientTop
    }
    const v = u && !y && !l ? iw(u, f, !0) : Kn(0);
    return {
        width: n.width * h.x,
        height: n.height * h.y,
        x: n.x * h.x - f.scrollLeft * h.x + m.x + v.x,
        y: n.y * h.y - f.scrollTop * h.y + m.y + v.y
    }
}
function wE(t) {
    return Array.from(t.getClientRects())
}
function SE(t) {
    const e = rr(t)
      , n = $u(t)
      , s = t.ownerDocument.body
      , o = cn(e.scrollWidth, e.clientWidth, s.scrollWidth, s.clientWidth)
      , l = cn(e.scrollHeight, e.clientHeight, s.scrollHeight, s.clientHeight);
    let u = -n.scrollLeft + Rh(t);
    const d = -n.scrollTop;
    return Bn(s).direction === "rtl" && (u += cn(e.clientWidth, s.clientWidth) - o),
    {
        width: o,
        height: l,
        x: u,
        y: d
    }
}
function bE(t, e) {
    const n = fn(t)
      , s = rr(t)
      , o = n.visualViewport;
    let l = s.clientWidth
      , u = s.clientHeight
      , d = 0
      , f = 0;
    if (o) {
        l = o.width,
        u = o.height;
        const h = kh();
        (!h || h && e === "fixed") && (d = o.offsetLeft,
        f = o.offsetTop)
    }
    return {
        width: l,
        height: u,
        x: d,
        y: f
    }
}
function TE(t, e) {
    const n = ki(t, !0, e === "fixed")
      , s = n.top + t.clientTop
      , o = n.left + t.clientLeft
      , l = Jn(t) ? xs(t) : Kn(1)
      , u = t.clientWidth * l.x
      , d = t.clientHeight * l.y
      , f = o * l.x
      , h = s * l.y;
    return {
        width: u,
        height: d,
        x: f,
        y: h
    }
}
function Uy(t, e, n) {
    let s;
    if (e === "viewport")
        s = bE(t, n);
    else if (e === "document")
        s = SE(rr(t));
    else if (Fn(e))
        s = TE(e, n);
    else {
        const o = rw(t);
        s = {
            x: e.x - o.x,
            y: e.y - o.y,
            width: e.width,
            height: e.height
        }
    }
    return cu(s)
}
function sw(t, e) {
    const n = Yr(t);
    return n === e || !Fn(n) || _s(n) ? !1 : Bn(n).position === "fixed" || sw(n, e)
}
function _E(t, e) {
    const n = e.get(t);
    if (n)
        return n;
    let s = Uo(t, [], !1).filter(d => Fn(d) && Ms(d) !== "body")
      , o = null;
    const l = Bn(t).position === "fixed";
    let u = l ? Yr(t) : t;
    for (; Fn(u) && !_s(u); ) {
        const d = Bn(u)
          , f = Eh(u);
        !f && d.position === "fixed" && (o = null),
        (l ? !f && !o : !f && d.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || la(u) && !f && sw(t, u)) ? s = s.filter(m => m !== u) : o = d,
        u = Yr(u)
    }
    return e.set(t, s),
    s
}
function PE(t) {
    let {element: e, boundary: n, rootBoundary: s, strategy: o} = t;
    const u = [...n === "clippingAncestors" ? Uu(e) ? [] : _E(e, this._c) : [].concat(n), s]
      , d = u[0]
      , f = u.reduce( (h, m) => {
        const y = Uy(e, m, o);
        return h.top = cn(y.top, h.top),
        h.right = Gr(y.right, h.right),
        h.bottom = Gr(y.bottom, h.bottom),
        h.left = cn(y.left, h.left),
        h
    }
    , Uy(e, d, o));
    return {
        width: f.right - f.left,
        height: f.bottom - f.top,
        x: f.left,
        y: f.top
    }
}
function CE(t) {
    const {width: e, height: n} = nw(t);
    return {
        width: e,
        height: n
    }
}
function EE(t, e, n) {
    const s = Jn(e)
      , o = rr(e)
      , l = n === "fixed"
      , u = ki(t, !0, l, e);
    let d = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const f = Kn(0);
    if (s || !s && !l)
        if ((Ms(e) !== "body" || la(o)) && (d = $u(e)),
        s) {
            const v = ki(e, !0, l, e);
            f.x = v.x + e.clientLeft,
            f.y = v.y + e.clientTop
        } else
            o && (f.x = Rh(o));
    const h = o && !s && !l ? iw(o, d) : Kn(0)
      , m = u.left + d.scrollLeft - f.x - h.x
      , y = u.top + d.scrollTop - f.y - h.y;
    return {
        x: m,
        y,
        width: u.width,
        height: u.height
    }
}
function sf(t) {
    return Bn(t).position === "static"
}
function $y(t, e) {
    if (!Jn(t) || Bn(t).position === "fixed")
        return null;
    if (e)
        return e(t);
    let n = t.offsetParent;
    return rr(t) === n && (n = n.ownerDocument.body),
    n
}
function ow(t, e) {
    const n = fn(t);
    if (Uu(t))
        return n;
    if (!Jn(t)) {
        let o = Yr(t);
        for (; o && !_s(o); ) {
            if (Fn(o) && !sf(o))
                return o;
            o = Yr(o)
        }
        return n
    }
    let s = $y(t, e);
    for (; s && mE(s) && sf(s); )
        s = $y(s, e);
    return s && _s(s) && sf(s) && !Eh(s) ? n : s || gE(t) || n
}
const kE = async function(t) {
    const e = this.getOffsetParent || ow
      , n = this.getDimensions
      , s = await n(t.floating);
    return {
        reference: EE(t.reference, await e(t.floating), t.strategy),
        floating: {
            x: 0,
            y: 0,
            width: s.width,
            height: s.height
        }
    }
};
function AE(t) {
    return Bn(t).direction === "rtl"
}
const RE = {
    convertOffsetParentRelativeRectToViewportRelativeRect: xE,
    getDocumentElement: rr,
    getClippingRect: PE,
    getOffsetParent: ow,
    getElementRects: kE,
    getClientRects: wE,
    getDimensions: CE,
    getScale: xs,
    isElement: Fn,
    isRTL: AE
};
function aw(t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
}
function NE(t, e) {
    let n = null, s;
    const o = rr(t);
    function l() {
        var d;
        clearTimeout(s),
        (d = n) == null || d.disconnect(),
        n = null
    }
    function u(d, f) {
        d === void 0 && (d = !1),
        f === void 0 && (f = 1),
        l();
        const h = t.getBoundingClientRect()
          , {left: m, top: y, width: v, height: w} = h;
        if (d || e(),
        !v || !w)
            return;
        const b = Rl(y)
          , S = Rl(o.clientWidth - (m + v))
          , T = Rl(o.clientHeight - (y + w))
          , _ = Rl(m)
          , A = {
            rootMargin: -b + "px " + -S + "px " + -T + "px " + -_ + "px",
            threshold: cn(0, Gr(1, f)) || 1
        };
        let I = !0;
        function L(B) {
            const F = B[0].intersectionRatio;
            if (F !== f) {
                if (!I)
                    return u();
                F ? u(!1, F) : s = setTimeout( () => {
                    u(!1, 1e-7)
                }
                , 1e3)
            }
            F === 1 && !aw(h, t.getBoundingClientRect()) && u(),
            I = !1
        }
        try {
            n = new IntersectionObserver(L,{
                ...A,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(L,A)
        }
        n.observe(t)
    }
    return u(!0),
    l
}
function OE(t, e, n, s) {
    s === void 0 && (s = {});
    const {ancestorScroll: o=!0, ancestorResize: l=!0, elementResize: u=typeof ResizeObserver == "function", layoutShift: d=typeof IntersectionObserver == "function", animationFrame: f=!1} = s
      , h = Ah(t)
      , m = o || l ? [...h ? Uo(h) : [], ...Uo(e)] : [];
    m.forEach(_ => {
        o && _.addEventListener("scroll", n, {
            passive: !0
        }),
        l && _.addEventListener("resize", n)
    }
    );
    const y = h && d ? NE(h, n) : null;
    let v = -1
      , w = null;
    u && (w = new ResizeObserver(_ => {
        let[P] = _;
        P && P.target === h && w && (w.unobserve(e),
        cancelAnimationFrame(v),
        v = requestAnimationFrame( () => {
            var A;
            (A = w) == null || A.observe(e)
        }
        )),
        n()
    }
    ),
    h && !f && w.observe(h),
    w.observe(e));
    let b, S = f ? ki(t) : null;
    f && T();
    function T() {
        const _ = ki(t);
        S && !aw(S, _) && n(),
        S = _,
        b = requestAnimationFrame(T)
    }
    return n(),
    () => {
        var _;
        m.forEach(P => {
            o && P.removeEventListener("scroll", n),
            l && P.removeEventListener("resize", n)
        }
        ),
        y?.(),
        (_ = w) == null || _.disconnect(),
        w = null,
        f && cancelAnimationFrame(b)
    }
}
const DE = dE
  , ME = fE
  , IE = lE
  , LE = pE
  , jE = uE
  , Hy = aE
  , VE = hE
  , FE = (t, e, n) => {
    const s = new Map
      , o = {
        platform: RE,
        ...n
    }
      , l = {
        ...o.platform,
        _c: s
    };
    return oE(t, e, {
        ...o,
        platform: l
    })
}
;
var Gl = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
function du(t, e) {
    if (t === e)
        return !0;
    if (typeof t != typeof e)
        return !1;
    if (typeof t == "function" && t.toString() === e.toString())
        return !0;
    let n, s, o;
    if (t && e && typeof t == "object") {
        if (Array.isArray(t)) {
            if (n = t.length,
            n !== e.length)
                return !1;
            for (s = n; s-- !== 0; )
                if (!du(t[s], e[s]))
                    return !1;
            return !0
        }
        if (o = Object.keys(t),
        n = o.length,
        n !== Object.keys(e).length)
            return !1;
        for (s = n; s-- !== 0; )
            if (!{}.hasOwnProperty.call(e, o[s]))
                return !1;
        for (s = n; s-- !== 0; ) {
            const l = o[s];
            if (!(l === "_owner" && t.$$typeof) && !du(t[l], e[l]))
                return !1
        }
        return !0
    }
    return t !== t && e !== e
}
function lw(t) {
    return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Wy(t, e) {
    const n = lw(t);
    return Math.round(e * n) / n
}
function of(t) {
    const e = C.useRef(t);
    return Gl( () => {
        e.current = t
    }
    ),
    e
}
function BE(t) {
    t === void 0 && (t = {});
    const {placement: e="bottom", strategy: n="absolute", middleware: s=[], platform: o, elements: {reference: l, floating: u}={}, transform: d=!0, whileElementsMounted: f, open: h} = t
      , [m,y] = C.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: e,
        middlewareData: {},
        isPositioned: !1
    })
      , [v,w] = C.useState(s);
    du(v, s) || w(s);
    const [b,S] = C.useState(null)
      , [T,_] = C.useState(null)
      , P = C.useCallback(H => {
        H !== B.current && (B.current = H,
        S(H))
    }
    , [])
      , A = C.useCallback(H => {
        H !== F.current && (F.current = H,
        _(H))
    }
    , [])
      , I = l || b
      , L = u || T
      , B = C.useRef(null)
      , F = C.useRef(null)
      , W = C.useRef(m)
      , X = f != null
      , G = of(f)
      , Q = of(o)
      , O = of(h)
      , q = C.useCallback( () => {
        if (!B.current || !F.current)
            return;
        const H = {
            placement: e,
            strategy: n,
            middleware: v
        };
        Q.current && (H.platform = Q.current),
        FE(B.current, F.current, H).then(ie => {
            const ne = {
                ...ie,
                isPositioned: O.current !== !1
            };
            V.current && !du(W.current, ne) && (W.current = ne,
            Iu.flushSync( () => {
                y(ne)
            }
            ))
        }
        )
    }
    , [v, e, n, Q, O]);
    Gl( () => {
        h === !1 && W.current.isPositioned && (W.current.isPositioned = !1,
        y(H => ({
            ...H,
            isPositioned: !1
        })))
    }
    , [h]);
    const V = C.useRef(!1);
    Gl( () => (V.current = !0,
    () => {
        V.current = !1
    }
    ), []),
    Gl( () => {
        if (I && (B.current = I),
        L && (F.current = L),
        I && L) {
            if (G.current)
                return G.current(I, L, q);
            q()
        }
    }
    , [I, L, q, G, X]);
    const me = C.useMemo( () => ({
        reference: B,
        floating: F,
        setReference: P,
        setFloating: A
    }), [P, A])
      , ce = C.useMemo( () => ({
        reference: I,
        floating: L
    }), [I, L])
      , se = C.useMemo( () => {
        const H = {
            position: n,
            left: 0,
            top: 0
        };
        if (!ce.floating)
            return H;
        const ie = Wy(ce.floating, m.x)
          , ne = Wy(ce.floating, m.y);
        return d ? {
            ...H,
            transform: "translate(" + ie + "px, " + ne + "px)",
            ...lw(ce.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: ie,
            top: ne
        }
    }
    , [n, d, ce.floating, m.x, m.y]);
    return C.useMemo( () => ({
        ...m,
        update: q,
        refs: me,
        elements: ce,
        floatingStyles: se
    }), [m, q, me, ce, se])
}
const zE = t => {
    function e(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: t,
        fn(n) {
            const {element: s, padding: o} = typeof t == "function" ? t(n) : t;
            return s && e(s) ? s.current != null ? Hy({
                element: s.current,
                padding: o
            }).fn(n) : {} : s ? Hy({
                element: s,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , UE = (t, e) => ({
    ...DE(t),
    options: [t, e]
})
  , $E = (t, e) => ({
    ...ME(t),
    options: [t, e]
})
  , HE = (t, e) => ({
    ...VE(t),
    options: [t, e]
})
  , WE = (t, e) => ({
    ...IE(t),
    options: [t, e]
})
  , qE = (t, e) => ({
    ...LE(t),
    options: [t, e]
})
  , QE = (t, e) => ({
    ...jE(t),
    options: [t, e]
})
  , KE = (t, e) => ({
    ...zE(t),
    options: [t, e]
});
var ZE = "Arrow"
  , uw = C.forwardRef( (t, e) => {
    const {children: n, width: s=10, height: o=5, ...l} = t;
    return E.jsx(Gt.svg, {
        ...l,
        ref: e,
        width: s,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: t.asChild ? n : E.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
uw.displayName = ZE;
var GE = uw;
function XE(t) {
    const [e,n] = C.useState(void 0);
    return Ei( () => {
        if (t) {
            n({
                width: t.offsetWidth,
                height: t.offsetHeight
            });
            const s = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const l = o[0];
                let u, d;
                if ("borderBoxSize"in l) {
                    const f = l.borderBoxSize
                      , h = Array.isArray(f) ? f[0] : f;
                    u = h.inlineSize,
                    d = h.blockSize
                } else
                    u = t.offsetWidth,
                    d = t.offsetHeight;
                n({
                    width: u,
                    height: d
                })
            }
            );
            return s.observe(t, {
                box: "border-box"
            }),
            () => s.unobserve(t)
        } else
            n(void 0)
    }
    , [t]),
    e
}
var cw = "Popper"
  , [dw,fw] = Lu(cw)
  , [CL,hw] = dw(cw)
  , pw = "PopperAnchor"
  , mw = C.forwardRef( (t, e) => {
    const {__scopePopper: n, virtualRef: s, ...o} = t
      , l = hw(pw, n)
      , u = C.useRef(null)
      , d = Vn(e, u);
    return C.useEffect( () => {
        l.onAnchorChange(s?.current || u.current)
    }
    ),
    s ? null : E.jsx(Gt.div, {
        ...o,
        ref: d
    })
}
);
mw.displayName = pw;
var Nh = "PopperContent"
  , [YE,JE] = dw(Nh)
  , gw = C.forwardRef( (t, e) => {
    const {__scopePopper: n, side: s="bottom", sideOffset: o=0, align: l="center", alignOffset: u=0, arrowPadding: d=0, avoidCollisions: f=!0, collisionBoundary: h=[], collisionPadding: m=0, sticky: y="partial", hideWhenDetached: v=!1, updatePositionStrategy: w="optimized", onPlaced: b, ...S} = t
      , T = hw(Nh, n)
      , [_,P] = C.useState(null)
      , A = Vn(e, Ne => P(Ne))
      , [I,L] = C.useState(null)
      , B = XE(I)
      , F = B?.width ?? 0
      , W = B?.height ?? 0
      , X = s + (l !== "center" ? "-" + l : "")
      , G = typeof m == "number" ? m : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...m
    }
      , Q = Array.isArray(h) ? h : [h]
      , O = Q.length > 0
      , q = {
        padding: G,
        boundary: Q.filter(tk),
        altBoundary: O
    }
      , {refs: V, floatingStyles: me, placement: ce, isPositioned: se, middlewareData: H} = BE({
        strategy: "fixed",
        placement: X,
        whileElementsMounted: (...Ne) => OE(...Ne, {
            animationFrame: w === "always"
        }),
        elements: {
            reference: T.anchor
        },
        middleware: [UE({
            mainAxis: o + W,
            alignmentAxis: u
        }), f && $E({
            mainAxis: !0,
            crossAxis: !1,
            limiter: y === "partial" ? HE() : void 0,
            ...q
        }), f && WE({
            ...q
        }), qE({
            ...q,
            apply: ({elements: Ne, rects: Te, availableWidth: Oe, availableHeight: Ze}) => {
                const {width: It, height: ir} = Te.reference
                  , Tn = Ne.floating.style;
                Tn.setProperty("--radix-popper-available-width", `${Oe}px`),
                Tn.setProperty("--radix-popper-available-height", `${Ze}px`),
                Tn.setProperty("--radix-popper-anchor-width", `${It}px`),
                Tn.setProperty("--radix-popper-anchor-height", `${ir}px`)
            }
        }), I && KE({
            element: I,
            padding: d
        }), nk({
            arrowWidth: F,
            arrowHeight: W
        }), v && QE({
            strategy: "referenceHidden",
            ...q
        })]
    })
      , [ie,ne] = xw(ce)
      , D = Yn(b);
    Ei( () => {
        se && D?.()
    }
    , [se, D]);
    const Z = H.arrow?.x
      , be = H.arrow?.y
      , Ce = H.arrow?.centerOffset !== 0
      , [Ie,Le] = C.useState();
    return Ei( () => {
        _ && Le(window.getComputedStyle(_).zIndex)
    }
    , [_]),
    E.jsx("div", {
        ref: V.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...me,
            transform: se ? me.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Ie,
            "--radix-popper-transform-origin": [H.transformOrigin?.x, H.transformOrigin?.y].join(" "),
            ...H.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: t.dir,
        children: E.jsx(YE, {
            scope: n,
            placedSide: ie,
            onArrowChange: L,
            arrowX: Z,
            arrowY: be,
            shouldHideArrow: Ce,
            children: E.jsx(Gt.div, {
                "data-side": ie,
                "data-align": ne,
                ...S,
                ref: A,
                style: {
                    ...S.style,
                    animation: se ? void 0 : "none"
                }
            })
        })
    })
}
);
gw.displayName = Nh;
var yw = "PopperArrow"
  , ek = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , vw = C.forwardRef(function(e, n) {
    const {__scopePopper: s, ...o} = e
      , l = JE(yw, s)
      , u = ek[l.placedSide];
    return E.jsx("span", {
        ref: l.onArrowChange,
        style: {
            position: "absolute",
            left: l.arrowX,
            top: l.arrowY,
            [u]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[l.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[l.placedSide],
            visibility: l.shouldHideArrow ? "hidden" : void 0
        },
        children: E.jsx(GE, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
vw.displayName = yw;
function tk(t) {
    return t !== null
}
var nk = t => ({
    name: "transformOrigin",
    options: t,
    fn(e) {
        const {placement: n, rects: s, middlewareData: o} = e
          , u = o.arrow?.centerOffset !== 0
          , d = u ? 0 : t.arrowWidth
          , f = u ? 0 : t.arrowHeight
          , [h,m] = xw(n)
          , y = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[m]
          , v = (o.arrow?.x ?? 0) + d / 2
          , w = (o.arrow?.y ?? 0) + f / 2;
        let b = ""
          , S = "";
        return h === "bottom" ? (b = u ? y : `${v}px`,
        S = `${-f}px`) : h === "top" ? (b = u ? y : `${v}px`,
        S = `${s.floating.height + f}px`) : h === "right" ? (b = `${-f}px`,
        S = u ? y : `${w}px`) : h === "left" && (b = `${s.floating.width + f}px`,
        S = u ? y : `${w}px`),
        {
            data: {
                x: b,
                y: S
            }
        }
    }
});
function xw(t) {
    const [e,n="center"] = t.split("-");
    return [e, n]
}
var rk = mw
  , ik = gw
  , sk = vw
  , [Hu] = Lu("Tooltip", [fw])
  , Oh = fw()
  , ww = "TooltipProvider"
  , ok = 700
  , qy = "tooltip.open"
  , [ak,Sw] = Hu(ww)
  , bw = t => {
    const {__scopeTooltip: e, delayDuration: n=ok, skipDelayDuration: s=300, disableHoverableContent: o=!1, children: l} = t
      , u = C.useRef(!0)
      , d = C.useRef(!1)
      , f = C.useRef(0);
    return C.useEffect( () => {
        const h = f.current;
        return () => window.clearTimeout(h)
    }
    , []),
    E.jsx(ak, {
        scope: e,
        isOpenDelayedRef: u,
        delayDuration: n,
        onOpen: C.useCallback( () => {
            window.clearTimeout(f.current),
            u.current = !1
        }
        , []),
        onClose: C.useCallback( () => {
            window.clearTimeout(f.current),
            f.current = window.setTimeout( () => u.current = !0, s)
        }
        , [s]),
        isPointerInTransitRef: d,
        onPointerInTransitChange: C.useCallback(h => {
            d.current = h
        }
        , []),
        disableHoverableContent: o,
        children: l
    })
}
;
bw.displayName = ww;
var Tw = "Tooltip"
  , [EL,Wu] = Hu(Tw)
  , zf = "TooltipTrigger"
  , lk = C.forwardRef( (t, e) => {
    const {__scopeTooltip: n, ...s} = t
      , o = Wu(zf, n)
      , l = Sw(zf, n)
      , u = Oh(n)
      , d = C.useRef(null)
      , f = Vn(e, d, o.onTriggerChange)
      , h = C.useRef(!1)
      , m = C.useRef(!1)
      , y = C.useCallback( () => h.current = !1, []);
    return C.useEffect( () => () => document.removeEventListener("pointerup", y), [y]),
    E.jsx(rk, {
        asChild: !0,
        ...u,
        children: E.jsx(Gt.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...s,
            ref: f,
            onPointerMove: Tt(t.onPointerMove, v => {
                v.pointerType !== "touch" && !m.current && !l.isPointerInTransitRef.current && (o.onTriggerEnter(),
                m.current = !0)
            }
            ),
            onPointerLeave: Tt(t.onPointerLeave, () => {
                o.onTriggerLeave(),
                m.current = !1
            }
            ),
            onPointerDown: Tt(t.onPointerDown, () => {
                o.open && o.onClose(),
                h.current = !0,
                document.addEventListener("pointerup", y, {
                    once: !0
                })
            }
            ),
            onFocus: Tt(t.onFocus, () => {
                h.current || o.onOpen()
            }
            ),
            onBlur: Tt(t.onBlur, o.onClose),
            onClick: Tt(t.onClick, o.onClose)
        })
    })
}
);
lk.displayName = zf;
var uk = "TooltipPortal"
  , [kL,ck] = Hu(uk, {
    forceMount: void 0
})
  , Ps = "TooltipContent"
  , _w = C.forwardRef( (t, e) => {
    const n = ck(Ps, t.__scopeTooltip)
      , {forceMount: s=n.forceMount, side: o="top", ...l} = t
      , u = Wu(Ps, t.__scopeTooltip);
    return E.jsx(xh, {
        present: s || u.open,
        children: u.disableHoverableContent ? E.jsx(Pw, {
            side: o,
            ...l,
            ref: e
        }) : E.jsx(dk, {
            side: o,
            ...l,
            ref: e
        })
    })
}
)
  , dk = C.forwardRef( (t, e) => {
    const n = Wu(Ps, t.__scopeTooltip)
      , s = Sw(Ps, t.__scopeTooltip)
      , o = C.useRef(null)
      , l = Vn(e, o)
      , [u,d] = C.useState(null)
      , {trigger: f, onClose: h} = n
      , m = o.current
      , {onPointerInTransitChange: y} = s
      , v = C.useCallback( () => {
        d(null),
        y(!1)
    }
    , [y])
      , w = C.useCallback( (b, S) => {
        const T = b.currentTarget
          , _ = {
            x: b.clientX,
            y: b.clientY
        }
          , P = gk(_, T.getBoundingClientRect())
          , A = yk(_, P)
          , I = vk(S.getBoundingClientRect())
          , L = wk([...A, ...I]);
        d(L),
        y(!0)
    }
    , [y]);
    return C.useEffect( () => () => v(), [v]),
    C.useEffect( () => {
        if (f && m) {
            const b = T => w(T, m)
              , S = T => w(T, f);
            return f.addEventListener("pointerleave", b),
            m.addEventListener("pointerleave", S),
            () => {
                f.removeEventListener("pointerleave", b),
                m.removeEventListener("pointerleave", S)
            }
        }
    }
    , [f, m, w, v]),
    C.useEffect( () => {
        if (u) {
            const b = S => {
                const T = S.target
                  , _ = {
                    x: S.clientX,
                    y: S.clientY
                }
                  , P = f?.contains(T) || m?.contains(T)
                  , A = !xk(_, u);
                P ? v() : A && (v(),
                h())
            }
            ;
            return document.addEventListener("pointermove", b),
            () => document.removeEventListener("pointermove", b)
        }
    }
    , [f, m, u, h, v]),
    E.jsx(Pw, {
        ...t,
        ref: l
    })
}
)
  , [fk,hk] = Hu(Tw, {
    isInside: !1
})
  , pk = fP("TooltipContent")
  , Pw = C.forwardRef( (t, e) => {
    const {__scopeTooltip: n, children: s, "aria-label": o, onEscapeKeyDown: l, onPointerDownOutside: u, ...d} = t
      , f = Wu(Ps, n)
      , h = Oh(n)
      , {onClose: m} = f;
    return C.useEffect( () => (document.addEventListener(qy, m),
    () => document.removeEventListener(qy, m)), [m]),
    C.useEffect( () => {
        if (f.trigger) {
            const y = v => {
                v.target?.contains(f.trigger) && m()
            }
            ;
            return window.addEventListener("scroll", y, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", y, {
                capture: !0
            })
        }
    }
    , [f.trigger, m]),
    E.jsx(vh, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: l,
        onPointerDownOutside: u,
        onFocusOutside: y => y.preventDefault(),
        onDismiss: m,
        children: E.jsxs(ik, {
            "data-state": f.stateAttribute,
            ...h,
            ...d,
            ref: e,
            style: {
                ...d.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [E.jsx(pk, {
                children: s
            }), E.jsx(fk, {
                scope: n,
                isInside: !0,
                children: E.jsx(MP, {
                    id: f.contentId,
                    role: "tooltip",
                    children: o || s
                })
            })]
        })
    })
}
);
_w.displayName = Ps;
var Cw = "TooltipArrow"
  , mk = C.forwardRef( (t, e) => {
    const {__scopeTooltip: n, ...s} = t
      , o = Oh(n);
    return hk(Cw, n).isInside ? null : E.jsx(sk, {
        ...o,
        ...s,
        ref: e
    })
}
);
mk.displayName = Cw;
function gk(t, e) {
    const n = Math.abs(e.top - t.y)
      , s = Math.abs(e.bottom - t.y)
      , o = Math.abs(e.right - t.x)
      , l = Math.abs(e.left - t.x);
    switch (Math.min(n, s, o, l)) {
    case l:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case s:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function yk(t, e, n=5) {
    const s = [];
    switch (e) {
    case "top":
        s.push({
            x: t.x - n,
            y: t.y + n
        }, {
            x: t.x + n,
            y: t.y + n
        });
        break;
    case "bottom":
        s.push({
            x: t.x - n,
            y: t.y - n
        }, {
            x: t.x + n,
            y: t.y - n
        });
        break;
    case "left":
        s.push({
            x: t.x + n,
            y: t.y - n
        }, {
            x: t.x + n,
            y: t.y + n
        });
        break;
    case "right":
        s.push({
            x: t.x - n,
            y: t.y - n
        }, {
            x: t.x - n,
            y: t.y + n
        });
        break
    }
    return s
}
function vk(t) {
    const {top: e, right: n, bottom: s, left: o} = t;
    return [{
        x: o,
        y: e
    }, {
        x: n,
        y: e
    }, {
        x: n,
        y: s
    }, {
        x: o,
        y: s
    }]
}
function xk(t, e) {
    const {x: n, y: s} = t;
    let o = !1;
    for (let l = 0, u = e.length - 1; l < e.length; u = l++) {
        const d = e[l].x
          , f = e[l].y
          , h = e[u].x
          , m = e[u].y;
        f > s != m > s && n < (h - d) * (s - f) / (m - f) + d && (o = !o)
    }
    return o
}
function wk(t) {
    const e = t.slice();
    return e.sort( (n, s) => n.x < s.x ? -1 : n.x > s.x ? 1 : n.y < s.y ? -1 : n.y > s.y ? 1 : 0),
    Sk(e)
}
function Sk(t) {
    if (t.length <= 1)
        return t.slice();
    const e = [];
    for (let s = 0; s < t.length; s++) {
        const o = t[s];
        for (; e.length >= 2; ) {
            const l = e[e.length - 1]
              , u = e[e.length - 2];
            if ((l.x - u.x) * (o.y - u.y) >= (l.y - u.y) * (o.x - u.x))
                e.pop();
            else
                break
        }
        e.push(o)
    }
    e.pop();
    const n = [];
    for (let s = t.length - 1; s >= 0; s--) {
        const o = t[s];
        for (; n.length >= 2; ) {
            const l = n[n.length - 1]
              , u = n[n.length - 2];
            if ((l.x - u.x) * (o.y - u.y) >= (l.y - u.y) * (o.x - u.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    e.length === 1 && n.length === 1 && e[0].x === n[0].x && e[0].y === n[0].y ? e : e.concat(n)
}
var bk = bw
  , Ew = _w;
const Tk = bk
  , _k = C.forwardRef( ({className: t, sideOffset: e=4, ...n}, s) => E.jsx(Ew, {
    ref: s,
    sideOffset: e,
    className: lt("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", t),
    ...n
}));
_k.displayName = Ew.displayName;
const Dh = C.forwardRef( ({className: t, ...e}, n) => E.jsx("div", {
    ref: n,
    className: lt("shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm", t),
    ...e
}));
Dh.displayName = "Card";
const kw = C.forwardRef( ({className: t, ...e}, n) => E.jsx("div", {
    ref: n,
    className: lt("flex flex-col space-y-1.5 p-6", t),
    ...e
}));
kw.displayName = "CardHeader";
const Aw = C.forwardRef( ({className: t, ...e}, n) => E.jsx("div", {
    ref: n,
    className: lt("text-2xl font-semibold leading-none tracking-tight", t),
    ...e
}));
Aw.displayName = "CardTitle";
const Rw = C.forwardRef( ({className: t, ...e}, n) => E.jsx("div", {
    ref: n,
    className: lt("text-sm text-muted-foreground", t),
    ...e
}));
Rw.displayName = "CardDescription";
const Mh = C.forwardRef( ({className: t, ...e}, n) => E.jsx("div", {
    ref: n,
    className: lt("p-6 pt-0", t),
    ...e
}));
Mh.displayName = "CardContent";
const Pk = C.forwardRef( ({className: t, ...e}, n) => E.jsx("div", {
    ref: n,
    className: lt("flex items-center p-6 pt-0", t),
    ...e
}));
Pk.displayName = "CardFooter";
function Ck() {
    return E.jsx("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
        children: E.jsx(Dh, {
            className: "w-full max-w-md mx-4",
            children: E.jsxs(Mh, {
                className: "pt-6",
                children: [E.jsxs("div", {
                    className: "flex mb-4 gap-2",
                    children: [E.jsx(iC, {
                        className: "h-8 w-8 text-red-500"
                    }), E.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "404 Page Not Found"
                    })]
                }), E.jsx("p", {
                    className: "mt-4 text-sm text-gray-600",
                    children: "Did you forget to add the page to the router?"
                })]
            })
        })
    })
}
function Ek(t) {
    if (typeof Proxy > "u")
        return t;
    const e = new Map
      , n = (...s) => t(...s);
    return new Proxy(n,{
        get: (s, o) => o === "create" ? t : (e.has(o) || e.set(o, t(o)),
        e.get(o))
    })
}
function qu(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
const Uf = t => Array.isArray(t);
function Nw(t, e) {
    if (!Array.isArray(e))
        return !1;
    const n = e.length;
    if (n !== t.length)
        return !1;
    for (let s = 0; s < n; s++)
        if (e[s] !== t[s])
            return !1;
    return !0
}
function $o(t) {
    return typeof t == "string" || Array.isArray(t)
}
function Qy(t) {
    const e = [{}, {}];
    return t?.values.forEach( (n, s) => {
        e[0][s] = n.get(),
        e[1][s] = n.getVelocity()
    }
    ),
    e
}
function Ih(t, e, n, s) {
    if (typeof e == "function") {
        const [o,l] = Qy(s);
        e = e(n !== void 0 ? n : t.custom, o, l)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function") {
        const [o,l] = Qy(s);
        e = e(n !== void 0 ? n : t.custom, o, l)
    }
    return e
}
function Qu(t, e, n) {
    const s = t.getProps();
    return Ih(s, e, n !== void 0 ? n : s.custom, t)
}
const Lh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , jh = ["initial", ...Lh]
  , ua = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Oi = new Set(ua)
  , xr = t => t * 1e3
  , wr = t => t / 1e3
  , kk = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , Ak = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , Rk = {
    type: "keyframes",
    duration: .8
}
  , Nk = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , Ok = (t, {keyframes: e}) => e.length > 2 ? Rk : Oi.has(t) ? t.startsWith("scale") ? Ak(e[1]) : kk : Nk;
function Vh(t, e) {
    return t ? t[e] || t.default || t : void 0
}
const Dk = {
    useManualTiming: !1
}
  , Mk = t => t !== null;
function Ku(t, {repeat: e, repeatType: n="loop"}, s) {
    const o = t.filter(Mk)
      , l = e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
    return !l || s === void 0 ? o[l] : s
}
const Ut = t => t;
let Ow = Ut;
function Ik(t) {
    let e = new Set
      , n = new Set
      , s = !1
      , o = !1;
    const l = new WeakSet;
    let u = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function d(h) {
        l.has(h) && (f.schedule(h),
        t()),
        h(u)
    }
    const f = {
        schedule: (h, m=!1, y=!1) => {
            const w = y && s ? e : n;
            return m && l.add(h),
            w.has(h) || w.add(h),
            h
        }
        ,
        cancel: h => {
            n.delete(h),
            l.delete(h)
        }
        ,
        process: h => {
            if (u = h,
            s) {
                o = !0;
                return
            }
            s = !0,
            [e,n] = [n, e],
            n.clear(),
            e.forEach(d),
            s = !1,
            o && (o = !1,
            f.process(h))
        }
    };
    return f
}
const Nl = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , Lk = 40;
function Dw(t, e) {
    let n = !1
      , s = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = () => n = !0
      , u = Nl.reduce( (_, P) => (_[P] = Ik(l),
    _), {})
      , {read: d, resolveKeyframes: f, update: h, preRender: m, render: y, postRender: v} = u
      , w = () => {
        const _ = performance.now();
        n = !1,
        o.delta = s ? 1e3 / 60 : Math.max(Math.min(_ - o.timestamp, Lk), 1),
        o.timestamp = _,
        o.isProcessing = !0,
        d.process(o),
        f.process(o),
        h.process(o),
        m.process(o),
        y.process(o),
        v.process(o),
        o.isProcessing = !1,
        n && e && (s = !1,
        t(w))
    }
      , b = () => {
        n = !0,
        s = !0,
        o.isProcessing || t(w)
    }
    ;
    return {
        schedule: Nl.reduce( (_, P) => {
            const A = u[P];
            return _[P] = (I, L=!1, B=!1) => (n || b(),
            A.schedule(I, L, B)),
            _
        }
        , {}),
        cancel: _ => {
            for (let P = 0; P < Nl.length; P++)
                u[Nl[P]].cancel(_)
        }
        ,
        state: o,
        steps: u
    }
}
const {schedule: Ke, cancel: Jr, state: Ot, steps: af} = Dw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ut, !0)
  , Mw = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
  , jk = 1e-7
  , Vk = 12;
function Fk(t, e, n, s, o) {
    let l, u, d = 0;
    do
        u = e + (n - e) / 2,
        l = Mw(u, s, o) - t,
        l > 0 ? n = u : e = u;
    while (Math.abs(l) > jk && ++d < Vk);
    return u
}
function ca(t, e, n, s) {
    if (t === e && n === s)
        return Ut;
    const o = l => Fk(l, 0, 1, t, n);
    return l => l === 0 || l === 1 ? l : Mw(o(l), e, s)
}
const Iw = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , Lw = t => e => 1 - t(1 - e)
  , jw = ca(.33, 1.53, .69, .99)
  , Fh = Lw(jw)
  , Vw = Iw(Fh)
  , Fw = t => (t *= 2) < 1 ? .5 * Fh(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , Bh = t => 1 - Math.sin(Math.acos(t))
  , Bw = Lw(Bh)
  , zw = Iw(Bh)
  , Uw = t => /^0[^.\s]+$/u.test(t);
function Bk(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Uw(t) : !0
}
const $w = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
  , Hw = t => e => typeof e == "string" && e.startsWith(t)
  , Ww = Hw("--")
  , zk = Hw("var(--")
  , zh = t => zk(t) ? Uk.test(t.split("/*")[0].trim()) : !1
  , Uk = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , $k = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Hk(t) {
    const e = $k.exec(t);
    if (!e)
        return [, ];
    const [,n,s,o] = e;
    return [`--${n ?? s}`, o]
}
function qw(t, e, n=1) {
    const [s,o] = Hk(t);
    if (!s)
        return;
    const l = window.getComputedStyle(e).getPropertyValue(s);
    if (l) {
        const u = l.trim();
        return $w(u) ? parseFloat(u) : u
    }
    return zh(o) ? qw(o, e, n + 1) : o
}
const Tr = (t, e, n) => n > e ? e : n < t ? t : n
  , Is = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
}
  , Ho = {
    ...Is,
    transform: t => Tr(0, 1, t)
}
  , Ol = {
    ...Is,
    default: 1
}
  , da = t => ({
    test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
})
  , qr = da("deg")
  , Zn = da("%")
  , Ee = da("px")
  , Wk = da("vh")
  , qk = da("vw")
  , Ky = {
    ...Zn,
    parse: t => Zn.parse(t) / 100,
    transform: t => Zn.transform(t * 100)
}
  , Qk = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , Zy = t => t === Is || t === Ee
  , Gy = (t, e) => parseFloat(t.split(", ")[e])
  , Xy = (t, e) => (n, {transform: s}) => {
    if (s === "none" || !s)
        return 0;
    const o = s.match(/^matrix3d\((.+)\)$/u);
    if (o)
        return Gy(o[1], e);
    {
        const l = s.match(/^matrix\((.+)\)$/u);
        return l ? Gy(l[1], t) : 0
    }
}
  , Kk = new Set(["x", "y", "z"])
  , Zk = ua.filter(t => !Kk.has(t));
function Gk(t) {
    const e = [];
    return Zk.forEach(n => {
        const s = t.getValue(n);
        s !== void 0 && (e.push([n, s.get()]),
        s.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    e
}
const Cs = {
    width: ({x: t}, {paddingLeft: e="0", paddingRight: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({y: t}, {paddingTop: e="0", paddingBottom: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {top: e}) => parseFloat(e),
    left: (t, {left: e}) => parseFloat(e),
    bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
    right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
    x: Xy(4, 13),
    y: Xy(5, 14)
};
Cs.translateX = Cs.x;
Cs.translateY = Cs.y;
const Qw = t => e => e.test(t)
  , Xk = {
    test: t => t === "auto",
    parse: t => t
}
  , Kw = [Is, Ee, Zn, qr, qk, Wk, Xk]
  , Yy = t => Kw.find(Qw(t))
  , _i = new Set;
let $f = !1
  , Hf = !1;
function Zw() {
    if (Hf) {
        const t = Array.from(_i).filter(s => s.needsMeasurement)
          , e = new Set(t.map(s => s.element))
          , n = new Map;
        e.forEach(s => {
            const o = Gk(s);
            o.length && (n.set(s, o),
            s.render())
        }
        ),
        t.forEach(s => s.measureInitialState()),
        e.forEach(s => {
            s.render();
            const o = n.get(s);
            o && o.forEach( ([l,u]) => {
                var d;
                (d = s.getValue(l)) === null || d === void 0 || d.set(u)
            }
            )
        }
        ),
        t.forEach(s => s.measureEndState()),
        t.forEach(s => {
            s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY)
        }
        )
    }
    Hf = !1,
    $f = !1,
    _i.forEach(t => t.complete()),
    _i.clear()
}
function Gw() {
    _i.forEach(t => {
        t.readKeyframes(),
        t.needsMeasurement && (Hf = !0)
    }
    )
}
function Yk() {
    Gw(),
    Zw()
}
class Uh {
    constructor(e, n, s, o, l, u=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...e],
        this.onComplete = n,
        this.name = s,
        this.motionValue = o,
        this.element = l,
        this.isAsync = u
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (_i.add(this),
        $f || ($f = !0,
        Ke.read(Gw),
        Ke.resolveKeyframes(Zw))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, name: n, element: s, motionValue: o} = this;
        for (let l = 0; l < e.length; l++)
            if (e[l] === null)
                if (l === 0) {
                    const u = o?.get()
                      , d = e[e.length - 1];
                    if (u !== void 0)
                        e[0] = u;
                    else if (s && n) {
                        const f = s.readValue(n, d);
                        f != null && (e[0] = f)
                    }
                    e[0] === void 0 && (e[0] = d),
                    o && u === void 0 && o.set(e[0])
                } else
                    e[l] = e[l - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        _i.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        _i.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Mo = t => Math.round(t * 1e5) / 1e5
  , $h = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Jk(t) {
    return t == null
}
const eA = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Hh = (t, e) => n => !!(typeof n == "string" && eA.test(n) && n.startsWith(t) || e && !Jk(n) && Object.prototype.hasOwnProperty.call(n, e))
  , Xw = (t, e, n) => s => {
    if (typeof s != "string")
        return s;
    const [o,l,u,d] = s.match($h);
    return {
        [t]: parseFloat(o),
        [e]: parseFloat(l),
        [n]: parseFloat(u),
        alpha: d !== void 0 ? parseFloat(d) : 1
    }
}
  , tA = t => Tr(0, 255, t)
  , lf = {
    ...Is,
    transform: t => Math.round(tA(t))
}
  , bi = {
    test: Hh("rgb", "red"),
    parse: Xw("red", "green", "blue"),
    transform: ({red: t, green: e, blue: n, alpha: s=1}) => "rgba(" + lf.transform(t) + ", " + lf.transform(e) + ", " + lf.transform(n) + ", " + Mo(Ho.transform(s)) + ")"
};
function nA(t) {
    let e = ""
      , n = ""
      , s = ""
      , o = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    n = t.substring(3, 5),
    s = t.substring(5, 7),
    o = t.substring(7, 9)) : (e = t.substring(1, 2),
    n = t.substring(2, 3),
    s = t.substring(3, 4),
    o = t.substring(4, 5),
    e += e,
    n += n,
    s += s,
    o += o),
    {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(s, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const Wf = {
    test: Hh("#"),
    parse: nA,
    transform: bi.transform
}
  , fs = {
    test: Hh("hsl", "hue"),
    parse: Xw("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: n, alpha: s=1}) => "hsla(" + Math.round(t) + ", " + Zn.transform(Mo(e)) + ", " + Zn.transform(Mo(n)) + ", " + Mo(Ho.transform(s)) + ")"
}
  , Bt = {
    test: t => bi.test(t) || Wf.test(t) || fs.test(t),
    parse: t => bi.test(t) ? bi.parse(t) : fs.test(t) ? fs.parse(t) : Wf.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? bi.transform(t) : fs.transform(t)
}
  , rA = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function iA(t) {
    var e, n;
    return isNaN(t) && typeof t == "string" && (((e = t.match($h)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(rA)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Yw = "number"
  , Jw = "color"
  , sA = "var"
  , oA = "var("
  , Jy = "${}"
  , aA = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Wo(t) {
    const e = t.toString()
      , n = []
      , s = {
        color: [],
        number: [],
        var: []
    }
      , o = [];
    let l = 0;
    const d = e.replace(aA, f => (Bt.test(f) ? (s.color.push(l),
    o.push(Jw),
    n.push(Bt.parse(f))) : f.startsWith(oA) ? (s.var.push(l),
    o.push(sA),
    n.push(f)) : (s.number.push(l),
    o.push(Yw),
    n.push(parseFloat(f))),
    ++l,
    Jy)).split(Jy);
    return {
        values: n,
        split: d,
        indexes: s,
        types: o
    }
}
function eS(t) {
    return Wo(t).values
}
function tS(t) {
    const {split: e, types: n} = Wo(t)
      , s = e.length;
    return o => {
        let l = "";
        for (let u = 0; u < s; u++)
            if (l += e[u],
            o[u] !== void 0) {
                const d = n[u];
                d === Yw ? l += Mo(o[u]) : d === Jw ? l += Bt.transform(o[u]) : l += o[u]
            }
        return l
    }
}
const lA = t => typeof t == "number" ? 0 : t;
function uA(t) {
    const e = eS(t);
    return tS(t)(e.map(lA))
}
const ei = {
    test: iA,
    parse: eS,
    createTransformer: tS,
    getAnimatableNone: uA
}
  , cA = new Set(["brightness", "contrast", "saturate", "opacity"]);
function dA(t) {
    const [e,n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [s] = n.match($h) || [];
    if (!s)
        return t;
    const o = n.replace(s, "");
    let l = cA.has(e) ? 1 : 0;
    return s !== n && (l *= 100),
    e + "(" + l + o + ")"
}
const fA = /\b([a-z-]*)\(.*?\)/gu
  , qf = {
    ...ei,
    getAnimatableNone: t => {
        const e = t.match(fA);
        return e ? e.map(dA).join(" ") : t
    }
}
  , hA = {
    borderWidth: Ee,
    borderTopWidth: Ee,
    borderRightWidth: Ee,
    borderBottomWidth: Ee,
    borderLeftWidth: Ee,
    borderRadius: Ee,
    radius: Ee,
    borderTopLeftRadius: Ee,
    borderTopRightRadius: Ee,
    borderBottomRightRadius: Ee,
    borderBottomLeftRadius: Ee,
    width: Ee,
    maxWidth: Ee,
    height: Ee,
    maxHeight: Ee,
    top: Ee,
    right: Ee,
    bottom: Ee,
    left: Ee,
    padding: Ee,
    paddingTop: Ee,
    paddingRight: Ee,
    paddingBottom: Ee,
    paddingLeft: Ee,
    margin: Ee,
    marginTop: Ee,
    marginRight: Ee,
    marginBottom: Ee,
    marginLeft: Ee,
    backgroundPositionX: Ee,
    backgroundPositionY: Ee
}
  , pA = {
    rotate: qr,
    rotateX: qr,
    rotateY: qr,
    rotateZ: qr,
    scale: Ol,
    scaleX: Ol,
    scaleY: Ol,
    scaleZ: Ol,
    skew: qr,
    skewX: qr,
    skewY: qr,
    distance: Ee,
    translateX: Ee,
    translateY: Ee,
    translateZ: Ee,
    x: Ee,
    y: Ee,
    z: Ee,
    perspective: Ee,
    transformPerspective: Ee,
    opacity: Ho,
    originX: Ky,
    originY: Ky,
    originZ: Ee
}
  , ev = {
    ...Is,
    transform: Math.round
}
  , Wh = {
    ...hA,
    ...pA,
    zIndex: ev,
    size: Ee,
    fillOpacity: Ho,
    strokeOpacity: Ho,
    numOctaves: ev
}
  , mA = {
    ...Wh,
    color: Bt,
    backgroundColor: Bt,
    outlineColor: Bt,
    fill: Bt,
    stroke: Bt,
    borderColor: Bt,
    borderTopColor: Bt,
    borderRightColor: Bt,
    borderBottomColor: Bt,
    borderLeftColor: Bt,
    filter: qf,
    WebkitFilter: qf
}
  , qh = t => mA[t];
function nS(t, e) {
    let n = qh(t);
    return n !== qf && (n = ei),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const gA = new Set(["auto", "none", "0"]);
function yA(t, e, n) {
    let s = 0, o;
    for (; s < t.length && !o; ) {
        const l = t[s];
        typeof l == "string" && !gA.has(l) && Wo(l).values.length && (o = t[s]),
        s++
    }
    if (o && n)
        for (const l of e)
            t[l] = nS(n, o)
}
class rS extends Uh {
    constructor(e, n, s, o, l) {
        super(e, n, s, o, l, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, element: n, name: s} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let f = 0; f < e.length; f++) {
            let h = e[f];
            if (typeof h == "string" && (h = h.trim(),
            zh(h))) {
                const m = qw(h, n.current);
                m !== void 0 && (e[f] = m),
                f === e.length - 1 && (this.finalKeyframe = h)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Qk.has(s) || e.length !== 2)
            return;
        const [o,l] = e
          , u = Yy(o)
          , d = Yy(l);
        if (u !== d)
            if (Zy(u) && Zy(d))
                for (let f = 0; f < e.length; f++) {
                    const h = e[f];
                    typeof h == "string" && (e[f] = parseFloat(h))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: e, name: n} = this
          , s = [];
        for (let o = 0; o < e.length; o++)
            Bk(e[o]) && s.push(o);
        s.length && yA(e, s, n)
    }
    measureInitialState() {
        const {element: e, unresolvedKeyframes: n, name: s} = this;
        if (!e || !e.current)
            return;
        s === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Cs[s](e.measureViewportBox(), window.getComputedStyle(e.current)),
        n[0] = this.measuredOrigin;
        const o = n[n.length - 1];
        o !== void 0 && e.getValue(s, o).jump(o, !1)
    }
    measureEndState() {
        var e;
        const {element: n, name: s, unresolvedKeyframes: o} = this;
        if (!n || !n.current)
            return;
        const l = n.getValue(s);
        l && l.jump(this.measuredOrigin, !1);
        const u = o.length - 1
          , d = o[u];
        o[u] = Cs[s](n.measureViewportBox(), window.getComputedStyle(n.current)),
        d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
        !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach( ([f,h]) => {
            n.getValue(f).set(h)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function Qh(t) {
    return typeof t == "function"
}
let Xl;
function vA() {
    Xl = void 0
}
const Gn = {
    now: () => (Xl === void 0 && Gn.set(Ot.isProcessing || Dk.useManualTiming ? Ot.timestamp : performance.now()),
    Xl),
    set: t => {
        Xl = t,
        queueMicrotask(vA)
    }
}
  , tv = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (ei.test(t) || t === "0") && !t.startsWith("url("));
function xA(t) {
    const e = t[0];
    if (t.length === 1)
        return !0;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e)
            return !0
}
function wA(t, e, n, s) {
    const o = t[0];
    if (o === null)
        return !1;
    if (e === "display" || e === "visibility")
        return !0;
    const l = t[t.length - 1]
      , u = tv(o, e)
      , d = tv(l, e);
    return !u || !d ? !1 : xA(t) || (n === "spring" || Qh(n)) && s
}
const SA = 40;
class iS {
    constructor({autoplay: e=!0, delay: n=0, type: s="keyframes", repeat: o=0, repeatDelay: l=0, repeatType: u="loop", ...d}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = Gn.now(),
        this.options = {
            autoplay: e,
            delay: n,
            type: s,
            repeat: o,
            repeatDelay: l,
            repeatType: u,
            ...d
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > SA ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Yk(),
        this._resolved
    }
    onKeyframesResolved(e, n) {
        this.resolvedAt = Gn.now(),
        this.hasAttemptedResolve = !0;
        const {name: s, type: o, velocity: l, delay: u, onComplete: d, onUpdate: f, isGenerator: h} = this.options;
        if (!h && !wA(e, s, o, l))
            if (u)
                this.options.duration = 0;
            else {
                f?.(Ku(e, this.options, n)),
                d?.(),
                this.resolveFinishedPromise();
                return
            }
        const m = this.initPlayback(e, n);
        m !== !1 && (this._resolved = {
            keyframes: e,
            finalKeyframe: n,
            ...m
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(e, n) {
        return this.currentFinishedPromise.then(e, n)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(e => {
            this.resolveFinishedPromise = e
        }
        )
    }
}
const Es = (t, e, n) => {
    const s = e - t;
    return s === 0 ? 1 : (n - t) / s
}
  , sS = (t, e, n=10) => {
    let s = "";
    const o = Math.max(Math.round(e / n), 2);
    for (let l = 0; l < o; l++)
        s += t(Es(0, o - 1, l)) + ", ";
    return `linear(${s.substring(0, s.length - 2)})`
}
;
function oS(t, e) {
    return e ? t * (1e3 / e) : 0
}
const bA = 5;
function aS(t, e, n) {
    const s = Math.max(e - bA, 0);
    return oS(n - t(s), e - s)
}
const dt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , uf = .001;
function TA({duration: t=dt.duration, bounce: e=dt.bounce, velocity: n=dt.velocity, mass: s=dt.mass}) {
    let o, l, u = 1 - e;
    u = Tr(dt.minDamping, dt.maxDamping, u),
    t = Tr(dt.minDuration, dt.maxDuration, wr(t)),
    u < 1 ? (o = h => {
        const m = h * u
          , y = m * t
          , v = m - n
          , w = Qf(h, u)
          , b = Math.exp(-y);
        return uf - v / w * b
    }
    ,
    l = h => {
        const y = h * u * t
          , v = y * n + n
          , w = Math.pow(u, 2) * Math.pow(h, 2) * t
          , b = Math.exp(-y)
          , S = Qf(Math.pow(h, 2), u);
        return (-o(h) + uf > 0 ? -1 : 1) * ((v - w) * b) / S
    }
    ) : (o = h => {
        const m = Math.exp(-h * t)
          , y = (h - n) * t + 1;
        return -uf + m * y
    }
    ,
    l = h => {
        const m = Math.exp(-h * t)
          , y = (n - h) * (t * t);
        return m * y
    }
    );
    const d = 5 / t
      , f = PA(o, l, d);
    if (t = xr(t),
    isNaN(f))
        return {
            stiffness: dt.stiffness,
            damping: dt.damping,
            duration: t
        };
    {
        const h = Math.pow(f, 2) * s;
        return {
            stiffness: h,
            damping: u * 2 * Math.sqrt(s * h),
            duration: t
        }
    }
}
const _A = 12;
function PA(t, e, n) {
    let s = n;
    for (let o = 1; o < _A; o++)
        s = s - t(s) / e(s);
    return s
}
function Qf(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const Kf = 2e4;
function lS(t) {
    let e = 0;
    const n = 50;
    let s = t.next(e);
    for (; !s.done && e < Kf; )
        e += n,
        s = t.next(e);
    return e >= Kf ? 1 / 0 : e
}
const CA = ["duration", "bounce"]
  , EA = ["stiffness", "damping", "mass"];
function nv(t, e) {
    return e.some(n => t[n] !== void 0)
}
function kA(t) {
    let e = {
        velocity: dt.velocity,
        stiffness: dt.stiffness,
        damping: dt.damping,
        mass: dt.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!nv(t, EA) && nv(t, CA))
        if (t.visualDuration) {
            const n = t.visualDuration
              , s = 2 * Math.PI / (n * 1.2)
              , o = s * s
              , l = 2 * Tr(.05, 1, 1 - t.bounce) * Math.sqrt(o);
            e = {
                ...e,
                mass: dt.mass,
                stiffness: o,
                damping: l
            }
        } else {
            const n = TA(t);
            e = {
                ...e,
                ...n,
                mass: dt.mass
            },
            e.isResolvedFromDuration = !0
        }
    return e
}
function uS(t=dt.visualDuration, e=dt.bounce) {
    const n = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {restSpeed: s, restDelta: o} = n;
    const l = n.keyframes[0]
      , u = n.keyframes[n.keyframes.length - 1]
      , d = {
        done: !1,
        value: l
    }
      , {stiffness: f, damping: h, mass: m, duration: y, velocity: v, isResolvedFromDuration: w} = kA({
        ...n,
        velocity: -wr(n.velocity || 0)
    })
      , b = v || 0
      , S = h / (2 * Math.sqrt(f * m))
      , T = u - l
      , _ = wr(Math.sqrt(f / m))
      , P = Math.abs(T) < 5;
    s || (s = P ? dt.restSpeed.granular : dt.restSpeed.default),
    o || (o = P ? dt.restDelta.granular : dt.restDelta.default);
    let A;
    if (S < 1) {
        const L = Qf(_, S);
        A = B => {
            const F = Math.exp(-S * _ * B);
            return u - F * ((b + S * _ * T) / L * Math.sin(L * B) + T * Math.cos(L * B))
        }
    } else if (S === 1)
        A = L => u - Math.exp(-_ * L) * (T + (b + _ * T) * L);
    else {
        const L = _ * Math.sqrt(S * S - 1);
        A = B => {
            const F = Math.exp(-S * _ * B)
              , W = Math.min(L * B, 300);
            return u - F * ((b + S * _ * T) * Math.sinh(W) + L * T * Math.cosh(W)) / L
        }
    }
    const I = {
        calculatedDuration: w && y || null,
        next: L => {
            const B = A(L);
            if (w)
                d.done = L >= y;
            else {
                let F = 0;
                S < 1 && (F = L === 0 ? xr(b) : aS(A, L, B));
                const W = Math.abs(F) <= s
                  , X = Math.abs(u - B) <= o;
                d.done = W && X
            }
            return d.value = d.done ? u : B,
            d
        }
        ,
        toString: () => {
            const L = Math.min(lS(I), Kf)
              , B = sS(F => I.next(L * F).value, L, 30);
            return L + "ms " + B
        }
    };
    return I
}
function rv({keyframes: t, velocity: e=0, power: n=.8, timeConstant: s=325, bounceDamping: o=10, bounceStiffness: l=500, modifyTarget: u, min: d, max: f, restDelta: h=.5, restSpeed: m}) {
    const y = t[0]
      , v = {
        done: !1,
        value: y
    }
      , w = W => d !== void 0 && W < d || f !== void 0 && W > f
      , b = W => d === void 0 ? f : f === void 0 || Math.abs(d - W) < Math.abs(f - W) ? d : f;
    let S = n * e;
    const T = y + S
      , _ = u === void 0 ? T : u(T);
    _ !== T && (S = _ - y);
    const P = W => -S * Math.exp(-W / s)
      , A = W => _ + P(W)
      , I = W => {
        const X = P(W)
          , G = A(W);
        v.done = Math.abs(X) <= h,
        v.value = v.done ? _ : G
    }
    ;
    let L, B;
    const F = W => {
        w(v.value) && (L = W,
        B = uS({
            keyframes: [v.value, b(v.value)],
            velocity: aS(A, W, v.value),
            damping: o,
            stiffness: l,
            restDelta: h,
            restSpeed: m
        }))
    }
    ;
    return F(0),
    {
        calculatedDuration: null,
        next: W => {
            let X = !1;
            return !B && L === void 0 && (X = !0,
            I(W),
            F(W)),
            L !== void 0 && W >= L ? B.next(W - L) : (!X && I(W),
            v)
        }
    }
}
const AA = ca(.42, 0, 1, 1)
  , RA = ca(0, 0, .58, 1)
  , cS = ca(.42, 0, .58, 1)
  , NA = t => Array.isArray(t) && typeof t[0] != "number"
  , Kh = t => Array.isArray(t) && typeof t[0] == "number"
  , OA = {
    linear: Ut,
    easeIn: AA,
    easeInOut: cS,
    easeOut: RA,
    circIn: Bh,
    circInOut: zw,
    circOut: Bw,
    backIn: Fh,
    backInOut: Vw,
    backOut: jw,
    anticipate: Fw
}
  , iv = t => {
    if (Kh(t)) {
        Ow(t.length === 4);
        const [e,n,s,o] = t;
        return ca(e, n, s, o)
    } else if (typeof t == "string")
        return OA[t];
    return t
}
  , DA = (t, e) => n => e(t(n))
  , Kr = (...t) => t.reduce(DA)
  , at = (t, e, n) => t + (e - t) * n;
function cf(t, e, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}
function MA({hue: t, saturation: e, lightness: n, alpha: s}) {
    t /= 360,
    e /= 100,
    n /= 100;
    let o = 0
      , l = 0
      , u = 0;
    if (!e)
        o = l = u = n;
    else {
        const d = n < .5 ? n * (1 + e) : n + e - n * e
          , f = 2 * n - d;
        o = cf(f, d, t + 1 / 3),
        l = cf(f, d, t),
        u = cf(f, d, t - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(l * 255),
        blue: Math.round(u * 255),
        alpha: s
    }
}
function fu(t, e) {
    return n => n > 0 ? e : t
}
const df = (t, e, n) => {
    const s = t * t
      , o = n * (e * e - s) + s;
    return o < 0 ? 0 : Math.sqrt(o)
}
  , IA = [Wf, bi, fs]
  , LA = t => IA.find(e => e.test(t));
function sv(t) {
    const e = LA(t);
    if (!e)
        return !1;
    let n = e.parse(t);
    return e === fs && (n = MA(n)),
    n
}
const ov = (t, e) => {
    const n = sv(t)
      , s = sv(e);
    if (!n || !s)
        return fu(t, e);
    const o = {
        ...n
    };
    return l => (o.red = df(n.red, s.red, l),
    o.green = df(n.green, s.green, l),
    o.blue = df(n.blue, s.blue, l),
    o.alpha = at(n.alpha, s.alpha, l),
    bi.transform(o))
}
  , Zf = new Set(["none", "hidden"]);
function jA(t, e) {
    return Zf.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}
function VA(t, e) {
    return n => at(t, e, n)
}
function Zh(t) {
    return typeof t == "number" ? VA : typeof t == "string" ? zh(t) ? fu : Bt.test(t) ? ov : zA : Array.isArray(t) ? dS : typeof t == "object" ? Bt.test(t) ? ov : FA : fu
}
function dS(t, e) {
    const n = [...t]
      , s = n.length
      , o = t.map( (l, u) => Zh(l)(l, e[u]));
    return l => {
        for (let u = 0; u < s; u++)
            n[u] = o[u](l);
        return n
    }
}
function FA(t, e) {
    const n = {
        ...t,
        ...e
    }
      , s = {};
    for (const o in n)
        t[o] !== void 0 && e[o] !== void 0 && (s[o] = Zh(t[o])(t[o], e[o]));
    return o => {
        for (const l in s)
            n[l] = s[l](o);
        return n
    }
}
function BA(t, e) {
    var n;
    const s = []
      , o = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let l = 0; l < e.values.length; l++) {
        const u = e.types[l]
          , d = t.indexes[u][o[u]]
          , f = (n = t.values[d]) !== null && n !== void 0 ? n : 0;
        s[l] = f,
        o[u]++
    }
    return s
}
const zA = (t, e) => {
    const n = ei.createTransformer(e)
      , s = Wo(t)
      , o = Wo(e);
    return s.indexes.var.length === o.indexes.var.length && s.indexes.color.length === o.indexes.color.length && s.indexes.number.length >= o.indexes.number.length ? Zf.has(t) && !o.values.length || Zf.has(e) && !s.values.length ? jA(t, e) : Kr(dS(BA(s, o), o.values), n) : fu(t, e)
}
;
function fS(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? at(t, e, n) : Zh(t)(t, e)
}
function UA(t, e, n) {
    const s = []
      , o = n || fS
      , l = t.length - 1;
    for (let u = 0; u < l; u++) {
        let d = o(t[u], t[u + 1]);
        if (e) {
            const f = Array.isArray(e) ? e[u] || Ut : e;
            d = Kr(f, d)
        }
        s.push(d)
    }
    return s
}
function $A(t, e, {clamp: n=!0, ease: s, mixer: o}={}) {
    const l = t.length;
    if (Ow(l === e.length),
    l === 1)
        return () => e[0];
    if (l === 2 && t[0] === t[1])
        return () => e[1];
    t[0] > t[l - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const u = UA(e, s, o)
      , d = u.length
      , f = h => {
        let m = 0;
        if (d > 1)
            for (; m < t.length - 2 && !(h < t[m + 1]); m++)
                ;
        const y = Es(t[m], t[m + 1], h);
        return u[m](y)
    }
    ;
    return n ? h => f(Tr(t[0], t[l - 1], h)) : f
}
function HA(t, e) {
    const n = t[t.length - 1];
    for (let s = 1; s <= e; s++) {
        const o = Es(0, e, s);
        t.push(at(n, 1, o))
    }
}
function WA(t) {
    const e = [0];
    return HA(e, t.length - 1),
    e
}
function qA(t, e) {
    return t.map(n => n * e)
}
function QA(t, e) {
    return t.map( () => e || cS).splice(0, t.length - 1)
}
function hu({duration: t=300, keyframes: e, times: n, ease: s="easeInOut"}) {
    const o = NA(s) ? s.map(iv) : iv(s)
      , l = {
        done: !1,
        value: e[0]
    }
      , u = qA(n && n.length === e.length ? n : WA(e), t)
      , d = $A(u, e, {
        ease: Array.isArray(o) ? o : QA(e, o)
    });
    return {
        calculatedDuration: t,
        next: f => (l.value = d(f),
        l.done = f >= t,
        l)
    }
}
const KA = t => {
    const e = ({timestamp: n}) => t(n);
    return {
        start: () => Ke.update(e, !0),
        stop: () => Jr(e),
        now: () => Ot.isProcessing ? Ot.timestamp : Gn.now()
    }
}
  , ZA = {
    decay: rv,
    inertia: rv,
    tween: hu,
    keyframes: hu,
    spring: uS
}
  , GA = t => t / 100;
class Gh extends iS {
    constructor(e) {
        super(e),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: f} = this.options;
            f && f()
        }
        ;
        const {name: n, motionValue: s, element: o, keyframes: l} = this.options
          , u = o?.KeyframeResolver || Uh
          , d = (f, h) => this.onKeyframesResolved(f, h);
        this.resolver = new u(l,d,n,s,o),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(e) {
        const {type: n="keyframes", repeat: s=0, repeatDelay: o=0, repeatType: l, velocity: u=0} = this.options
          , d = Qh(n) ? n : ZA[n] || hu;
        let f, h;
        d !== hu && typeof e[0] != "number" && (f = Kr(GA, fS(e[0], e[1])),
        e = [0, 100]);
        const m = d({
            ...this.options,
            keyframes: e
        });
        l === "mirror" && (h = d({
            ...this.options,
            keyframes: [...e].reverse(),
            velocity: -u
        })),
        m.calculatedDuration === null && (m.calculatedDuration = lS(m));
        const {calculatedDuration: y} = m
          , v = y + o
          , w = v * (s + 1) - o;
        return {
            generator: m,
            mirroredGenerator: h,
            mapPercentToKeyframes: f,
            calculatedDuration: y,
            resolvedDuration: v,
            totalDuration: w
        }
    }
    onPostResolved() {
        const {autoplay: e=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState
    }
    tick(e, n=!1) {
        const {resolved: s} = this;
        if (!s) {
            const {keyframes: W} = this.options;
            return {
                done: !0,
                value: W[W.length - 1]
            }
        }
        const {finalKeyframe: o, generator: l, mirroredGenerator: u, mapPercentToKeyframes: d, keyframes: f, calculatedDuration: h, totalDuration: m, resolvedDuration: y} = s;
        if (this.startTime === null)
            return l.next(0);
        const {delay: v, repeat: w, repeatType: b, repeatDelay: S, onUpdate: T} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - m / this.speed, this.startTime)),
        n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
        const _ = this.currentTime - v * (this.speed >= 0 ? 1 : -1)
          , P = this.speed >= 0 ? _ < 0 : _ > m;
        this.currentTime = Math.max(_, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = m);
        let A = this.currentTime
          , I = l;
        if (w) {
            const W = Math.min(this.currentTime, m) / y;
            let X = Math.floor(W)
              , G = W % 1;
            !G && W >= 1 && (G = 1),
            G === 1 && X--,
            X = Math.min(X, w + 1),
            X % 2 && (b === "reverse" ? (G = 1 - G,
            S && (G -= S / y)) : b === "mirror" && (I = u)),
            A = Tr(0, 1, G) * y
        }
        const L = P ? {
            done: !1,
            value: f[0]
        } : I.next(A);
        d && (L.value = d(L.value));
        let {done: B} = L;
        !P && h !== null && (B = this.speed >= 0 ? this.currentTime >= m : this.currentTime <= 0);
        const F = this.holdTime === null && (this.state === "finished" || this.state === "running" && B);
        return F && o !== void 0 && (L.value = Ku(f, this.options, o)),
        T && T(L.value),
        F && this.finish(),
        L
    }
    get duration() {
        const {resolved: e} = this;
        return e ? wr(e.calculatedDuration) : 0
    }
    get time() {
        return wr(this.currentTime)
    }
    set time(e) {
        e = xr(e),
        this.currentTime = e,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const n = this.playbackSpeed !== e;
        this.playbackSpeed = e,
        n && (this.time = wr(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: e=KA, onPlay: n, startTime: s} = this.options;
        this.driver || (this.driver = e(l => this.tick(l))),
        n && n();
        const o = this.driver.now();
        this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = o) : this.startTime = s ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var e;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: e} = this.options;
        e && e()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0,
        this.tick(e, !0)
    }
}
const XA = new Set(["opacity", "clipPath", "filter", "transform"]);
function Xh(t) {
    let e;
    return () => (e === void 0 && (e = t()),
    e)
}
const YA = {
    linearEasing: void 0
};
function JA(t, e) {
    const n = Xh(t);
    return () => {
        var s;
        return (s = YA[e]) !== null && s !== void 0 ? s : n()
    }
}
const pu = JA( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing");
function hS(t) {
    return !!(typeof t == "function" && pu() || !t || typeof t == "string" && (t in Gf || pu()) || Kh(t) || Array.isArray(t) && t.every(hS))
}
const Ao = ([t,e,n,s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`
  , Gf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ao([0, .65, .55, 1]),
    circOut: Ao([.55, 0, 1, .45]),
    backIn: Ao([.31, .01, .66, -.59]),
    backOut: Ao([.33, 1.53, .69, .99])
};
function pS(t, e) {
    if (t)
        return typeof t == "function" && pu() ? sS(t, e) : Kh(t) ? Ao(t) : Array.isArray(t) ? t.map(n => pS(n, e) || Gf.easeOut) : Gf[t]
}
function eR(t, e, n, {delay: s=0, duration: o=300, repeat: l=0, repeatType: u="loop", ease: d="easeInOut", times: f}={}) {
    const h = {
        [e]: n
    };
    f && (h.offset = f);
    const m = pS(d, o);
    return Array.isArray(m) && (h.easing = m),
    t.animate(h, {
        delay: s,
        duration: o,
        easing: Array.isArray(m) ? "linear" : m,
        fill: "both",
        iterations: l + 1,
        direction: u === "reverse" ? "alternate" : "normal"
    })
}
function av(t, e) {
    t.timeline = e,
    t.onfinish = null
}
const tR = Xh( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , mu = 10
  , nR = 2e4;
function rR(t) {
    return Qh(t.type) || t.type === "spring" || !hS(t.ease)
}
function iR(t, e) {
    const n = new Gh({
        ...e,
        keyframes: t,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let s = {
        done: !1,
        value: t[0]
    };
    const o = [];
    let l = 0;
    for (; !s.done && l < nR; )
        s = n.sample(l),
        o.push(s.value),
        l += mu;
    return {
        times: void 0,
        keyframes: o,
        duration: l - mu,
        ease: "linear"
    }
}
const mS = {
    anticipate: Fw,
    backInOut: Vw,
    circInOut: zw
};
function sR(t) {
    return t in mS
}
class lv extends iS {
    constructor(e) {
        super(e);
        const {name: n, motionValue: s, element: o, keyframes: l} = this.options;
        this.resolver = new rS(l, (u, d) => this.onKeyframesResolved(u, d),n,s,o),
        this.resolver.scheduleResolve()
    }
    initPlayback(e, n) {
        var s;
        let {duration: o=300, times: l, ease: u, type: d, motionValue: f, name: h, startTime: m} = this.options;
        if (!(!((s = f.owner) === null || s === void 0) && s.current))
            return !1;
        if (typeof u == "string" && pu() && sR(u) && (u = mS[u]),
        rR(this.options)) {
            const {onComplete: v, onUpdate: w, motionValue: b, element: S, ...T} = this.options
              , _ = iR(e, T);
            e = _.keyframes,
            e.length === 1 && (e[1] = e[0]),
            o = _.duration,
            l = _.times,
            u = _.ease,
            d = "keyframes"
        }
        const y = eR(f.owner.current, h, e, {
            ...this.options,
            duration: o,
            times: l,
            ease: u
        });
        return y.startTime = m ?? this.calcStartTime(),
        this.pendingTimeline ? (av(y, this.pendingTimeline),
        this.pendingTimeline = void 0) : y.onfinish = () => {
            const {onComplete: v} = this.options;
            f.set(Ku(e, this.options, n)),
            v && v(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: y,
            duration: o,
            times: l,
            type: d,
            ease: u,
            keyframes: e
        }
    }
    get duration() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {duration: n} = e;
        return wr(n)
    }
    get time() {
        const {resolved: e} = this;
        if (!e)
            return 0;
        const {animation: n} = e;
        return wr(n.currentTime || 0)
    }
    set time(e) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: s} = n;
        s.currentTime = xr(e)
    }
    get speed() {
        const {resolved: e} = this;
        if (!e)
            return 1;
        const {animation: n} = e;
        return n.playbackRate
    }
    set speed(e) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: s} = n;
        s.playbackRate = e
    }
    get state() {
        const {resolved: e} = this;
        if (!e)
            return "idle";
        const {animation: n} = e;
        return n.playState
    }
    get startTime() {
        const {resolved: e} = this;
        if (!e)
            return null;
        const {animation: n} = e;
        return n.startTime
    }
    attachTimeline(e) {
        if (!this._resolved)
            this.pendingTimeline = e;
        else {
            const {resolved: n} = this;
            if (!n)
                return Ut;
            const {animation: s} = n;
            av(s, e)
        }
        return Ut
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n} = e;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n} = e;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: e} = this;
        if (!e)
            return;
        const {animation: n, keyframes: s, duration: o, type: l, ease: u, times: d} = e;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: h, onUpdate: m, onComplete: y, element: v, ...w} = this.options
              , b = new Gh({
                ...w,
                keyframes: s,
                duration: o,
                type: l,
                ease: u,
                times: d,
                isGenerator: !0
            })
              , S = xr(this.time);
            h.setWithVelocity(b.sample(S - mu).value, b.sample(S).value, mu)
        }
        const {onStop: f} = this.options;
        f && f(),
        this.cancel()
    }
    complete() {
        const {resolved: e} = this;
        e && e.animation.finish()
    }
    cancel() {
        const {resolved: e} = this;
        e && e.animation.cancel()
    }
    static supports(e) {
        const {motionValue: n, name: s, repeatDelay: o, repeatType: l, damping: u, type: d} = e;
        return tR() && s && XA.has(s) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !o && l !== "mirror" && u !== 0 && d !== "inertia"
    }
}
const oR = Xh( () => window.ScrollTimeline !== void 0);
class aR {
    constructor(e) {
        this.stop = () => this.runAll("stop"),
        this.animations = e.filter(Boolean)
    }
    then(e, n) {
        return Promise.all(this.animations).then(e).catch(n)
    }
    getAll(e) {
        return this.animations[0][e]
    }
    setAll(e, n) {
        for (let s = 0; s < this.animations.length; s++)
            this.animations[s][e] = n
    }
    attachTimeline(e, n) {
        const s = this.animations.map(o => oR() && o.attachTimeline ? o.attachTimeline(e) : n(o));
        return () => {
            s.forEach( (o, l) => {
                o && o(),
                this.animations[l].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(e) {
        this.setAll("time", e)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(e) {
        this.setAll("speed", e)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let e = 0;
        for (let n = 0; n < this.animations.length; n++)
            e = Math.max(e, this.animations[n].duration);
        return e
    }
    runAll(e) {
        this.animations.forEach(n => n[e]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
function lR({when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: o, repeat: l, repeatType: u, repeatDelay: d, from: f, elapsed: h, ...m}) {
    return !!Object.keys(m).length
}
const Yh = (t, e, n, s={}, o, l) => u => {
    const d = Vh(s, t) || {}
      , f = d.delay || s.delay || 0;
    let {elapsed: h=0} = s;
    h = h - xr(f);
    let m = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...d,
        delay: -h,
        onUpdate: v => {
            e.set(v),
            d.onUpdate && d.onUpdate(v)
        }
        ,
        onComplete: () => {
            u(),
            d.onComplete && d.onComplete()
        }
        ,
        name: t,
        motionValue: e,
        element: l ? void 0 : o
    };
    lR(d) || (m = {
        ...m,
        ...Ok(t, m)
    }),
    m.duration && (m.duration = xr(m.duration)),
    m.repeatDelay && (m.repeatDelay = xr(m.repeatDelay)),
    m.from !== void 0 && (m.keyframes[0] = m.from);
    let y = !1;
    if ((m.type === !1 || m.duration === 0 && !m.repeatDelay) && (m.duration = 0,
    m.delay === 0 && (y = !0)),
    y && !l && e.get() !== void 0) {
        const v = Ku(m.keyframes, d);
        if (v !== void 0)
            return Ke.update( () => {
                m.onUpdate(v),
                m.onComplete()
            }
            ),
            new aR([])
    }
    return !l && lv.supports(m) ? new lv(m) : new Gh(m)
}
  , uR = t => !!(t && typeof t == "object" && t.mix && t.toValue)
  , cR = t => Uf(t) ? t[t.length - 1] || 0 : t;
function Jh(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function ep(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
class tp {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return Jh(this.subscriptions, e),
        () => ep(this.subscriptions, e)
    }
    notify(e, n, s) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](e, n, s);
            else
                for (let l = 0; l < o; l++) {
                    const u = this.subscriptions[l];
                    u && u(e, n, s)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const uv = 30
  , dR = t => !isNaN(parseFloat(t));
class fR {
    constructor(e, n={}) {
        this.version = "11.13.1",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (s, o=!0) => {
            const l = Gn.now();
            this.updatedAt !== l && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(s),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(e),
        this.owner = n.owner
    }
    setCurrent(e) {
        this.current = e,
        this.updatedAt = Gn.now(),
        this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = dR(this.current))
    }
    setPrevFrameValue(e=this.current) {
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new tp);
        const s = this.events[e].add(n);
        return e === "change" ? () => {
            s(),
            Ke.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : s
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e,
        this.stopPassiveEffect = n
    }
    set(e, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, n, s) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt - s
    }
    jump(e, n=!0) {
        this.updateAndNotify(e),
        this.prev = e,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = Gn.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > uv)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, uv);
        return oS(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(e) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = e(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function qo(t, e) {
    return new fR(t,e)
}
function hR(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, qo(n))
}
function pR(t, e) {
    const n = Qu(t, e);
    let {transitionEnd: s={}, transition: o={}, ...l} = n || {};
    l = {
        ...l,
        ...s
    };
    for (const u in l) {
        const d = cR(l[u]);
        hR(t, u, d)
    }
}
const np = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , mR = "framerAppearId"
  , gS = "data-" + np(mR);
function yS(t) {
    return t.props[gS]
}
const zt = t => !!(t && t.getVelocity);
function gR(t) {
    return !!(zt(t) && t.add)
}
function Xf(t, e) {
    const n = t.getValue("willChange");
    if (gR(n))
        return n.add(e)
}
function yR({protectedKeys: t, needsAnimating: e}, n) {
    const s = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1,
    s
}
function vS(t, e, {delay: n=0, transitionOverride: s, type: o}={}) {
    var l;
    let {transition: u=t.getDefaultTransition(), transitionEnd: d, ...f} = e;
    s && (u = s);
    const h = []
      , m = o && t.animationState && t.animationState.getState()[o];
    for (const y in f) {
        const v = t.getValue(y, (l = t.latestValues[y]) !== null && l !== void 0 ? l : null)
          , w = f[y];
        if (w === void 0 || m && yR(m, y))
            continue;
        const b = {
            delay: n,
            ...Vh(u || {}, y)
        };
        let S = !1;
        if (window.MotionHandoffAnimation) {
            const _ = yS(t);
            if (_) {
                const P = window.MotionHandoffAnimation(_, y, Ke);
                P !== null && (b.startTime = P,
                S = !0)
            }
        }
        Xf(t, y),
        v.start(Yh(y, v, w, t.shouldReduceMotion && Oi.has(y) ? {
            type: !1
        } : b, t, S));
        const T = v.animation;
        T && h.push(T)
    }
    return d && Promise.all(h).then( () => {
        Ke.update( () => {
            d && pR(t, d)
        }
        )
    }
    ),
    h
}
function Yf(t, e, n={}) {
    var s;
    const o = Qu(t, e, n.type === "exit" ? (s = t.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
    let {transition: l=t.getDefaultTransition() || {}} = o || {};
    n.transitionOverride && (l = n.transitionOverride);
    const u = o ? () => Promise.all(vS(t, o, n)) : () => Promise.resolve()
      , d = t.variantChildren && t.variantChildren.size ? (h=0) => {
        const {delayChildren: m=0, staggerChildren: y, staggerDirection: v} = l;
        return vR(t, e, m + h, y, v, n)
    }
    : () => Promise.resolve()
      , {when: f} = l;
    if (f) {
        const [h,m] = f === "beforeChildren" ? [u, d] : [d, u];
        return h().then( () => m())
    } else
        return Promise.all([u(), d(n.delay)])
}
function vR(t, e, n=0, s=0, o=1, l) {
    const u = []
      , d = (t.variantChildren.size - 1) * s
      , f = o === 1 ? (h=0) => h * s : (h=0) => d - h * s;
    return Array.from(t.variantChildren).sort(xR).forEach( (h, m) => {
        h.notify("AnimationStart", e),
        u.push(Yf(h, e, {
            ...l,
            delay: n + f(m)
        }).then( () => h.notify("AnimationComplete", e)))
    }
    ),
    Promise.all(u)
}
function xR(t, e) {
    return t.sortNodePosition(e)
}
function wR(t, e, n={}) {
    t.notify("AnimationStart", e);
    let s;
    if (Array.isArray(e)) {
        const o = e.map(l => Yf(t, l, n));
        s = Promise.all(o)
    } else if (typeof e == "string")
        s = Yf(t, e, n);
    else {
        const o = typeof e == "function" ? Qu(t, e, n.custom) : e;
        s = Promise.all(vS(t, o, n))
    }
    return s.then( () => {
        t.notify("AnimationComplete", e)
    }
    )
}
const SR = jh.length;
function xS(t) {
    if (!t)
        return;
    if (!t.isControllingVariants) {
        const n = t.parent ? xS(t.parent) || {} : {};
        return t.props.initial !== void 0 && (n.initial = t.props.initial),
        n
    }
    const e = {};
    for (let n = 0; n < SR; n++) {
        const s = jh[n]
          , o = t.props[s];
        ($o(o) || o === !1) && (e[s] = o)
    }
    return e
}
const bR = [...Lh].reverse()
  , TR = Lh.length;
function _R(t) {
    return e => Promise.all(e.map( ({animation: n, options: s}) => wR(t, n, s)))
}
function PR(t) {
    let e = _R(t)
      , n = cv()
      , s = !0;
    const o = f => (h, m) => {
        var y;
        const v = Qu(t, m, f === "exit" ? (y = t.presenceContext) === null || y === void 0 ? void 0 : y.custom : void 0);
        if (v) {
            const {transition: w, transitionEnd: b, ...S} = v;
            h = {
                ...h,
                ...S,
                ...b
            }
        }
        return h
    }
    ;
    function l(f) {
        e = f(t)
    }
    function u(f) {
        const {props: h} = t
          , m = xS(t.parent) || {}
          , y = []
          , v = new Set;
        let w = {}
          , b = 1 / 0;
        for (let T = 0; T < TR; T++) {
            const _ = bR[T]
              , P = n[_]
              , A = h[_] !== void 0 ? h[_] : m[_]
              , I = $o(A)
              , L = _ === f ? P.isActive : null;
            L === !1 && (b = T);
            let B = A === m[_] && A !== h[_] && I;
            if (B && s && t.manuallyAnimateOnMount && (B = !1),
            P.protectedKeys = {
                ...w
            },
            !P.isActive && L === null || !A && !P.prevProp || qu(A) || typeof A == "boolean")
                continue;
            const F = CR(P.prevProp, A);
            let W = F || _ === f && P.isActive && !B && I || T > b && I
              , X = !1;
            const G = Array.isArray(A) ? A : [A];
            let Q = G.reduce(o(_), {});
            L === !1 && (Q = {});
            const {prevResolvedValues: O={}} = P
              , q = {
                ...O,
                ...Q
            }
              , V = se => {
                W = !0,
                v.has(se) && (X = !0,
                v.delete(se)),
                P.needsAnimating[se] = !0;
                const H = t.getValue(se);
                H && (H.liveStyle = !1)
            }
            ;
            for (const se in q) {
                const H = Q[se]
                  , ie = O[se];
                if (w.hasOwnProperty(se))
                    continue;
                let ne = !1;
                Uf(H) && Uf(ie) ? ne = !Nw(H, ie) : ne = H !== ie,
                ne ? H != null ? V(se) : v.add(se) : H !== void 0 && v.has(se) ? V(se) : P.protectedKeys[se] = !0
            }
            P.prevProp = A,
            P.prevResolvedValues = Q,
            P.isActive && (w = {
                ...w,
                ...Q
            }),
            s && t.blockInitialAnimation && (W = !1),
            W && (!(B && F) || X) && y.push(...G.map(se => ({
                animation: se,
                options: {
                    type: _
                }
            })))
        }
        if (v.size) {
            const T = {};
            v.forEach(_ => {
                const P = t.getBaseTarget(_)
                  , A = t.getValue(_);
                A && (A.liveStyle = !0),
                T[_] = P ?? null
            }
            ),
            y.push({
                animation: T
            })
        }
        let S = !!y.length;
        return s && (h.initial === !1 || h.initial === h.animate) && !t.manuallyAnimateOnMount && (S = !1),
        s = !1,
        S ? e(y) : Promise.resolve()
    }
    function d(f, h) {
        var m;
        if (n[f].isActive === h)
            return Promise.resolve();
        (m = t.variantChildren) === null || m === void 0 || m.forEach(v => {
            var w;
            return (w = v.animationState) === null || w === void 0 ? void 0 : w.setActive(f, h)
        }
        ),
        n[f].isActive = h;
        const y = u(f);
        for (const v in n)
            n[v].protectedKeys = {};
        return y
    }
    return {
        animateChanges: u,
        setActive: d,
        setAnimateFunction: l,
        getState: () => n,
        reset: () => {
            n = cv(),
            s = !0
        }
    }
}
function CR(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !Nw(e, t) : !1
}
function xi(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function cv() {
    return {
        animate: xi(!0),
        whileInView: xi(),
        whileHover: xi(),
        whileTap: xi(),
        whileDrag: xi(),
        whileFocus: xi(),
        exit: xi()
    }
}
class si {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
class ER extends si {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = PR(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        qu(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this)
    }
}
let kR = 0;
class AR extends si {
    constructor() {
        super(...arguments),
        this.id = kR++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: n} = this.node.presenceContext
          , {isPresent: s} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === s)
            return;
        const o = this.node.animationState.setActive("exit", !e);
        n && !e && o.then( () => n(this.id))
    }
    mount() {
        const {register: e} = this.node.presenceContext || {};
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const RR = {
    animation: {
        Feature: ER
    },
    exit: {
        Feature: AR
    }
};
function NR(t, e, n) {
    var s;
    if (t instanceof Element)
        return [t];
    if (typeof t == "string") {
        let o = document;
        const l = (s = void 0) !== null && s !== void 0 ? s : o.querySelectorAll(t);
        return l ? Array.from(l) : []
    }
    return Array.from(t)
}
const Nn = {
    x: !1,
    y: !1
};
function wS() {
    return Nn.x || Nn.y
}
function dv(t) {
    return e => {
        e.pointerType === "touch" || wS() || t(e)
    }
}
function OR(t, e, n={}) {
    const s = new AbortController
      , o = {
        passive: !0,
        ...n,
        signal: s.signal
    }
      , l = dv(u => {
        const {target: d} = u
          , f = e(u);
        if (!f || !d)
            return;
        const h = dv(m => {
            f(m),
            d.removeEventListener("pointerleave", h)
        }
        );
        d.addEventListener("pointerleave", h, o)
    }
    );
    return NR(t).forEach(u => {
        u.addEventListener("pointerenter", l, o)
    }
    ),
    () => s.abort()
}
function DR(t) {
    return t === "x" || t === "y" ? Nn[t] ? null : (Nn[t] = !0,
    () => {
        Nn[t] = !1
    }
    ) : Nn.x || Nn.y ? null : (Nn.x = Nn.y = !0,
    () => {
        Nn.x = Nn.y = !1
    }
    )
}
const SS = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;
function fa(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const MR = t => e => SS(e) && t(e, fa(e));
function vr(t, e, n, s={
    passive: !0
}) {
    return t.addEventListener(e, n, s),
    () => t.removeEventListener(e, n)
}
function Zr(t, e, n, s) {
    return vr(t, e, MR(n), s)
}
const fv = (t, e) => Math.abs(t - e);
function IR(t, e) {
    const n = fv(t.x, e.x)
      , s = fv(t.y, e.y);
    return Math.sqrt(n ** 2 + s ** 2)
}
class bS {
    constructor(e, n, {transformPagePoint: s, contextWindow: o, dragSnapToOrigin: l=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const y = hf(this.lastMoveEventInfo, this.history)
              , v = this.startEvent !== null
              , w = IR(y.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!v && !w)
                return;
            const {point: b} = y
              , {timestamp: S} = Ot;
            this.history.push({
                ...b,
                timestamp: S
            });
            const {onStart: T, onMove: _} = this.handlers;
            v || (T && T(this.lastMoveEvent, y),
            this.startEvent = this.lastMoveEvent),
            _ && _(this.lastMoveEvent, y)
        }
        ,
        this.handlePointerMove = (y, v) => {
            this.lastMoveEvent = y,
            this.lastMoveEventInfo = ff(v, this.transformPagePoint),
            Ke.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (y, v) => {
            this.end();
            const {onEnd: w, onSessionEnd: b, resumeAnimation: S} = this.handlers;
            if (this.dragSnapToOrigin && S && S(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const T = hf(y.type === "pointercancel" ? this.lastMoveEventInfo : ff(v, this.transformPagePoint), this.history);
            this.startEvent && w && w(y, T),
            b && b(y, T)
        }
        ,
        !SS(e))
            return;
        this.dragSnapToOrigin = l,
        this.handlers = n,
        this.transformPagePoint = s,
        this.contextWindow = o || window;
        const u = fa(e)
          , d = ff(u, this.transformPagePoint)
          , {point: f} = d
          , {timestamp: h} = Ot;
        this.history = [{
            ...f,
            timestamp: h
        }];
        const {onSessionStart: m} = n;
        m && m(e, hf(d, this.history)),
        this.removeListeners = Kr(Zr(this.contextWindow, "pointermove", this.handlePointerMove), Zr(this.contextWindow, "pointerup", this.handlePointerUp), Zr(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Jr(this.updatePoint)
    }
}
function ff(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function hv(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function hf({point: t}, e) {
    return {
        point: t,
        delta: hv(t, TS(e)),
        offset: hv(t, LR(e)),
        velocity: jR(e, .1)
    }
}
function LR(t) {
    return t[0]
}
function TS(t) {
    return t[t.length - 1]
}
function jR(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = t.length - 1
      , s = null;
    const o = TS(t);
    for (; n >= 0 && (s = t[n],
    !(o.timestamp - s.timestamp > xr(e))); )
        n--;
    if (!s)
        return {
            x: 0,
            y: 0
        };
    const l = wr(o.timestamp - s.timestamp);
    if (l === 0)
        return {
            x: 0,
            y: 0
        };
    const u = {
        x: (o.x - s.x) / l,
        y: (o.y - s.y) / l
    };
    return u.x === 1 / 0 && (u.x = 0),
    u.y === 1 / 0 && (u.y = 0),
    u
}
function hs(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
const _S = 1e-4
  , VR = 1 - _S
  , FR = 1 + _S
  , PS = .01
  , BR = 0 - PS
  , zR = 0 + PS;
function pn(t) {
    return t.max - t.min
}
function UR(t, e, n) {
    return Math.abs(t - e) <= n
}
function pv(t, e, n, s=.5) {
    t.origin = s,
    t.originPoint = at(e.min, e.max, t.origin),
    t.scale = pn(n) / pn(e),
    t.translate = at(n.min, n.max, t.origin) - t.originPoint,
    (t.scale >= VR && t.scale <= FR || isNaN(t.scale)) && (t.scale = 1),
    (t.translate >= BR && t.translate <= zR || isNaN(t.translate)) && (t.translate = 0)
}
function Io(t, e, n, s) {
    pv(t.x, e.x, n.x, s ? s.originX : void 0),
    pv(t.y, e.y, n.y, s ? s.originY : void 0)
}
function mv(t, e, n) {
    t.min = n.min + e.min,
    t.max = t.min + pn(e)
}
function $R(t, e, n) {
    mv(t.x, e.x, n.x),
    mv(t.y, e.y, n.y)
}
function gv(t, e, n) {
    t.min = e.min - n.min,
    t.max = t.min + pn(e)
}
function Lo(t, e, n) {
    gv(t.x, e.x, n.x),
    gv(t.y, e.y, n.y)
}
function HR(t, {min: e, max: n}, s) {
    return e !== void 0 && t < e ? t = s ? at(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? at(n, t, s.max) : Math.min(t, n)),
    t
}
function yv(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}
function WR(t, {top: e, left: n, bottom: s, right: o}) {
    return {
        x: yv(t.x, n, o),
        y: yv(t.y, e, s)
    }
}
function vv(t, e) {
    let n = e.min - t.min
      , s = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n,s] = [s, n]),
    {
        min: n,
        max: s
    }
}
function qR(t, e) {
    return {
        x: vv(t.x, e.x),
        y: vv(t.y, e.y)
    }
}
function QR(t, e) {
    let n = .5;
    const s = pn(t)
      , o = pn(e);
    return o > s ? n = Es(e.min, e.max - s, t.min) : s > o && (n = Es(t.min, t.max - o, e.min)),
    Tr(0, 1, n)
}
function KR(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
}
const Jf = .35;
function ZR(t=Jf) {
    return t === !1 ? t = 0 : t === !0 && (t = Jf),
    {
        x: xv(t, "left", "right"),
        y: xv(t, "top", "bottom")
    }
}
function xv(t, e, n) {
    return {
        min: wv(t, e),
        max: wv(t, n)
    }
}
function wv(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const Sv = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , ps = () => ({
    x: Sv(),
    y: Sv()
})
  , bv = () => ({
    min: 0,
    max: 0
})
  , mt = () => ({
    x: bv(),
    y: bv()
});
function bn(t) {
    return [t("x"), t("y")]
}
function CS({top: t, left: e, right: n, bottom: s}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: s
        }
    }
}
function GR({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function XR(t, e) {
    if (!e)
        return t;
    const n = e({
        x: t.left,
        y: t.top
    })
      , s = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: s.y,
        right: s.x
    }
}
function pf(t) {
    return t === void 0 || t === 1
}
function eh({scale: t, scaleX: e, scaleY: n}) {
    return !pf(t) || !pf(e) || !pf(n)
}
function wi(t) {
    return eh(t) || ES(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function ES(t) {
    return Tv(t.x) || Tv(t.y)
}
function Tv(t) {
    return t && t !== "0%"
}
function gu(t, e, n) {
    const s = t - n
      , o = e * s;
    return n + o
}
function _v(t, e, n, s, o) {
    return o !== void 0 && (t = gu(t, o, s)),
    gu(t, n, s) + e
}
function th(t, e=0, n=1, s, o) {
    t.min = _v(t.min, e, n, s, o),
    t.max = _v(t.max, e, n, s, o)
}
function kS(t, {x: e, y: n}) {
    th(t.x, e.translate, e.scale, e.originPoint),
    th(t.y, n.translate, n.scale, n.originPoint)
}
const Pv = .999999999999
  , Cv = 1.0000000000001;
function YR(t, e, n, s=!1) {
    const o = n.length;
    if (!o)
        return;
    e.x = e.y = 1;
    let l, u;
    for (let d = 0; d < o; d++) {
        l = n[d],
        u = l.projectionDelta;
        const {visualElement: f} = l.options;
        f && f.props.style && f.props.style.display === "contents" || (s && l.options.layoutScroll && l.scroll && l !== l.root && gs(t, {
            x: -l.scroll.offset.x,
            y: -l.scroll.offset.y
        }),
        u && (e.x *= u.x.scale,
        e.y *= u.y.scale,
        kS(t, u)),
        s && wi(l.latestValues) && gs(t, l.latestValues))
    }
    e.x < Cv && e.x > Pv && (e.x = 1),
    e.y < Cv && e.y > Pv && (e.y = 1)
}
function ms(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function Ev(t, e, n, s, o=.5) {
    const l = at(t.min, t.max, o);
    th(t, e, n, l, s)
}
function gs(t, e) {
    Ev(t.x, e.x, e.scaleX, e.scale, e.originX),
    Ev(t.y, e.y, e.scaleY, e.scale, e.originY)
}
function AS(t, e) {
    return CS(XR(t.getBoundingClientRect(), e))
}
function JR(t, e, n) {
    const s = AS(t, n)
      , {scroll: o} = e;
    return o && (ms(s.x, o.offset.x),
    ms(s.y, o.offset.y)),
    s
}
const RS = ({current: t}) => t ? t.ownerDocument.defaultView : null
  , eN = new WeakMap;
class tN {
    constructor(e) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = mt(),
        this.visualElement = e
    }
    start(e, {snapToCursor: n=!1}={}) {
        const {presenceContext: s} = this.visualElement;
        if (s && s.isPresent === !1)
            return;
        const o = m => {
            const {dragSnapToOrigin: y} = this.getProps();
            y ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(fa(m).point)
        }
          , l = (m, y) => {
            const {drag: v, dragPropagation: w, onDragStart: b} = this.getProps();
            if (v && !w && (this.openDragLock && this.openDragLock(),
            this.openDragLock = DR(v),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            bn(T => {
                let _ = this.getAxisMotionValue(T).get() || 0;
                if (Zn.test(_)) {
                    const {projection: P} = this.visualElement;
                    if (P && P.layout) {
                        const A = P.layout.layoutBox[T];
                        A && (_ = pn(A) * (parseFloat(_) / 100))
                    }
                }
                this.originPoint[T] = _
            }
            ),
            b && Ke.postRender( () => b(m, y)),
            Xf(this.visualElement, "transform");
            const {animationState: S} = this.visualElement;
            S && S.setActive("whileDrag", !0)
        }
          , u = (m, y) => {
            const {dragPropagation: v, dragDirectionLock: w, onDirectionLock: b, onDrag: S} = this.getProps();
            if (!v && !this.openDragLock)
                return;
            const {offset: T} = y;
            if (w && this.currentDirection === null) {
                this.currentDirection = nN(T),
                this.currentDirection !== null && b && b(this.currentDirection);
                return
            }
            this.updateAxis("x", y.point, T),
            this.updateAxis("y", y.point, T),
            this.visualElement.render(),
            S && S(m, y)
        }
          , d = (m, y) => this.stop(m, y)
          , f = () => bn(m => {
            var y;
            return this.getAnimationState(m) === "paused" && ((y = this.getAxisMotionValue(m).animation) === null || y === void 0 ? void 0 : y.play())
        }
        )
          , {dragSnapToOrigin: h} = this.getProps();
        this.panSession = new bS(e,{
            onSessionStart: o,
            onStart: l,
            onMove: u,
            onSessionEnd: d,
            resumeAnimation: f
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: h,
            contextWindow: RS(this.visualElement)
        })
    }
    stop(e, n) {
        const s = this.isDragging;
        if (this.cancel(),
        !s)
            return;
        const {velocity: o} = n;
        this.startAnimation(o);
        const {onDragEnd: l} = this.getProps();
        l && Ke.postRender( () => l(e, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: n} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: s} = this.getProps();
        !s && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, s) {
        const {drag: o} = this.getProps();
        if (!s || !Dl(e, o, this.currentDirection))
            return;
        const l = this.getAxisMotionValue(e);
        let u = this.originPoint[e] + s[e];
        this.constraints && this.constraints[e] && (u = HR(u, this.constraints[e], this.elastic[e])),
        l.set(u)
    }
    resolveConstraints() {
        var e;
        const {dragConstraints: n, dragElastic: s} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout
          , l = this.constraints;
        n && hs(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = WR(o.layoutBox, n) : this.constraints = !1,
        this.elastic = ZR(s),
        l !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && bn(u => {
            this.constraints !== !1 && this.getAxisMotionValue(u) && (this.constraints[u] = KR(o.layoutBox[u], this.constraints[u]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
        if (!e || !hs(e))
            return !1;
        const s = e.current
          , {projection: o} = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const l = JR(s, o.root, this.visualElement.getTransformPagePoint());
        let u = qR(o.layout.layoutBox, l);
        if (n) {
            const d = n(GR(u));
            this.hasMutatedConstraints = !!d,
            d && (u = CS(d))
        }
        return u
    }
    startAnimation(e) {
        const {drag: n, dragMomentum: s, dragElastic: o, dragTransition: l, dragSnapToOrigin: u, onDragTransitionEnd: d} = this.getProps()
          , f = this.constraints || {}
          , h = bn(m => {
            if (!Dl(m, n, this.currentDirection))
                return;
            let y = f && f[m] || {};
            u && (y = {
                min: 0,
                max: 0
            });
            const v = o ? 200 : 1e6
              , w = o ? 40 : 1e7
              , b = {
                type: "inertia",
                velocity: s ? e[m] : 0,
                bounceStiffness: v,
                bounceDamping: w,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...l,
                ...y
            };
            return this.startAxisValueAnimation(m, b)
        }
        );
        return Promise.all(h).then(d)
    }
    startAxisValueAnimation(e, n) {
        const s = this.getAxisMotionValue(e);
        return Xf(this.visualElement, e),
        s.start(Yh(e, s, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        bn(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        bn(e => {
            var n;
            return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(e) {
        var n;
        return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(e) {
        const n = `_drag${e.toUpperCase()}`
          , s = this.visualElement.getProps()
          , o = s[n];
        return o || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        bn(n => {
            const {drag: s} = this.getProps();
            if (!Dl(n, s, this.currentDirection))
                return;
            const {projection: o} = this.visualElement
              , l = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const {min: u, max: d} = o.layout.layoutBox[n];
                l.set(e[n] - at(u, d, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: n} = this.getProps()
          , {projection: s} = this.visualElement;
        if (!hs(n) || !s || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        bn(u => {
            const d = this.getAxisMotionValue(u);
            if (d && this.constraints !== !1) {
                const f = d.get();
                o[u] = QR({
                    min: f,
                    max: f
                }, this.constraints[u])
            }
        }
        );
        const {transformTemplate: l} = this.visualElement.getProps();
        this.visualElement.current.style.transform = l ? l({}, "") : "none",
        s.root && s.root.updateScroll(),
        s.updateLayout(),
        this.resolveConstraints(),
        bn(u => {
            if (!Dl(u, e, null))
                return;
            const d = this.getAxisMotionValue(u)
              , {min: f, max: h} = this.constraints[u];
            d.set(at(f, h, o[u]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        eN.set(this.visualElement, this);
        const e = this.visualElement.current
          , n = Zr(e, "pointerdown", f => {
            const {drag: h, dragListener: m=!0} = this.getProps();
            h && m && this.start(f)
        }
        )
          , s = () => {
            const {dragConstraints: f} = this.getProps();
            hs(f) && f.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: o} = this.visualElement
          , l = o.addEventListener("measure", s);
        o && !o.layout && (o.root && o.root.updateScroll(),
        o.updateLayout()),
        Ke.read(s);
        const u = vr(window, "resize", () => this.scalePositionWithinConstraints())
          , d = o.addEventListener("didUpdate", ( ({delta: f, hasLayoutChanged: h}) => {
            this.isDragging && h && (bn(m => {
                const y = this.getAxisMotionValue(m);
                y && (this.originPoint[m] += f[m].translate,
                y.set(y.get() + f[m].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            u(),
            n(),
            l(),
            d && d()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: s=!1, dragPropagation: o=!1, dragConstraints: l=!1, dragElastic: u=Jf, dragMomentum: d=!0} = e;
        return {
            ...e,
            drag: n,
            dragDirectionLock: s,
            dragPropagation: o,
            dragConstraints: l,
            dragElastic: u,
            dragMomentum: d
        }
    }
}
function Dl(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}
function nN(t, e=10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
    n
}
class rN extends si {
    constructor(e) {
        super(e),
        this.removeGroupControls = Ut,
        this.removeListeners = Ut,
        this.controls = new tN(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Ut
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const kv = t => (e, n) => {
    t && Ke.postRender( () => t(e, n))
}
;
class iN extends si {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Ut
    }
    onPointerDown(e) {
        this.session = new bS(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: RS(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: o} = this.node.getProps();
        return {
            onSessionStart: kv(e),
            onStart: kv(n),
            onMove: s,
            onEnd: (l, u) => {
                delete this.session,
                o && Ke.postRender( () => o(l, u))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Zr(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const rp = C.createContext(null);
function sN() {
    const t = C.useContext(rp);
    if (t === null)
        return [!0, null];
    const {isPresent: e, onExitComplete: n, register: s} = t
      , o = C.useId();
    C.useEffect( () => s(o), []);
    const l = C.useCallback( () => n && n(o), [o, n]);
    return !e && n ? [!1, l] : [!0]
}
const NS = C.createContext({})
  , OS = C.createContext({})
  , Yl = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Av(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Po = {
    correct: (t, e) => {
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (Ee.test(t))
                t = parseFloat(t);
            else
                return t;
        const n = Av(t, e.target.x)
          , s = Av(t, e.target.y);
        return `${n}% ${s}%`
    }
}
  , oN = {
    correct: (t, {treeScale: e, projectionDelta: n}) => {
        const s = t
          , o = ei.parse(t);
        if (o.length > 5)
            return s;
        const l = ei.createTransformer(t)
          , u = typeof o[0] != "number" ? 1 : 0
          , d = n.x.scale * e.x
          , f = n.y.scale * e.y;
        o[0 + u] /= d,
        o[1 + u] /= f;
        const h = at(d, f, .5);
        return typeof o[2 + u] == "number" && (o[2 + u] /= h),
        typeof o[3 + u] == "number" && (o[3 + u] /= h),
        l(o)
    }
}
  , yu = {};
function aN(t) {
    Object.assign(yu, t)
}
const {schedule: ip} = Dw(queueMicrotask, !1);
class lN extends C.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: o} = this.props
          , {projection: l} = e;
        aN(uN),
        l && (n.group && n.group.add(l),
        s && s.register && o && s.register(l),
        l.root.didUpdate(),
        l.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        l.setOptions({
            ...l.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Yl.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: n, visualElement: s, drag: o, isPresent: l} = this.props
          , u = s.projection;
        return u && (u.isPresent = l,
        o || e.layoutDependency !== n || n === void 0 ? u.willUpdate() : this.safeToRemove(),
        e.isPresent !== l && (l ? u.promote() : u.relegate() || Ke.postRender( () => {
            const d = u.getStack();
            (!d || !d.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: e} = this.props.visualElement;
        e && (e.root.didUpdate(),
        ip.postRender( () => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: s} = this.props
          , {projection: o} = e;
        o && (o.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(o),
        s && s.deregister && s.deregister(o))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function DS(t) {
    const [e,n] = sN()
      , s = C.useContext(NS);
    return E.jsx(lN, {
        ...t,
        layoutGroup: s,
        switchLayoutGroup: C.useContext(OS),
        isPresent: e,
        safeToRemove: n
    })
}
const uN = {
    borderRadius: {
        ...Po,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Po,
    borderTopRightRadius: Po,
    borderBottomLeftRadius: Po,
    borderBottomRightRadius: Po,
    boxShadow: oN
}
  , MS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , cN = MS.length
  , Rv = t => typeof t == "string" ? parseFloat(t) : t
  , Nv = t => typeof t == "number" || Ee.test(t);
function dN(t, e, n, s, o, l) {
    o ? (t.opacity = at(0, n.opacity !== void 0 ? n.opacity : 1, fN(s)),
    t.opacityExit = at(e.opacity !== void 0 ? e.opacity : 1, 0, hN(s))) : l && (t.opacity = at(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
    for (let u = 0; u < cN; u++) {
        const d = `border${MS[u]}Radius`;
        let f = Ov(e, d)
          , h = Ov(n, d);
        if (f === void 0 && h === void 0)
            continue;
        f || (f = 0),
        h || (h = 0),
        f === 0 || h === 0 || Nv(f) === Nv(h) ? (t[d] = Math.max(at(Rv(f), Rv(h), s), 0),
        (Zn.test(h) || Zn.test(f)) && (t[d] += "%")) : t[d] = h
    }
    (e.rotate || n.rotate) && (t.rotate = at(e.rotate || 0, n.rotate || 0, s))
}
function Ov(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const fN = IS(0, .5, Bw)
  , hN = IS(.5, .95, Ut);
function IS(t, e, n) {
    return s => s < t ? 0 : s > e ? 1 : n(Es(t, e, s))
}
function Dv(t, e) {
    t.min = e.min,
    t.max = e.max
}
function Sn(t, e) {
    Dv(t.x, e.x),
    Dv(t.y, e.y)
}
function Mv(t, e) {
    t.translate = e.translate,
    t.scale = e.scale,
    t.originPoint = e.originPoint,
    t.origin = e.origin
}
function Iv(t, e, n, s, o) {
    return t -= e,
    t = gu(t, 1 / n, s),
    o !== void 0 && (t = gu(t, 1 / o, s)),
    t
}
function pN(t, e=0, n=1, s=.5, o, l=t, u=t) {
    if (Zn.test(e) && (e = parseFloat(e),
    e = at(u.min, u.max, e / 100) - u.min),
    typeof e != "number")
        return;
    let d = at(l.min, l.max, s);
    t === l && (d -= e),
    t.min = Iv(t.min, e, n, d, o),
    t.max = Iv(t.max, e, n, d, o)
}
function Lv(t, e, [n,s,o], l, u) {
    pN(t, e[n], e[s], e[o], e.scale, l, u)
}
const mN = ["x", "scaleX", "originX"]
  , gN = ["y", "scaleY", "originY"];
function jv(t, e, n, s) {
    Lv(t.x, e, mN, n ? n.x : void 0, s ? s.x : void 0),
    Lv(t.y, e, gN, n ? n.y : void 0, s ? s.y : void 0)
}
function Vv(t) {
    return t.translate === 0 && t.scale === 1
}
function LS(t) {
    return Vv(t.x) && Vv(t.y)
}
function Fv(t, e) {
    return t.min === e.min && t.max === e.max
}
function yN(t, e) {
    return Fv(t.x, e.x) && Fv(t.y, e.y)
}
function Bv(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}
function jS(t, e) {
    return Bv(t.x, e.x) && Bv(t.y, e.y)
}
function zv(t) {
    return pn(t.x) / pn(t.y)
}
function Uv(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class vN {
    constructor() {
        this.members = []
    }
    add(e) {
        Jh(this.members, e),
        e.scheduleRender()
    }
    remove(e) {
        if (ep(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(o => e === o);
        if (n === 0)
            return !1;
        let s;
        for (let o = n; o >= 0; o--) {
            const l = this.members[o];
            if (l.isPresent !== !1) {
                s = l;
                break
            }
        }
        return s ? (this.promote(s),
        !0) : !1
    }
    promote(e, n) {
        const s = this.lead;
        if (e !== s && (this.prevLead = s,
        this.lead = e,
        e.show(),
        s)) {
            s.instance && s.scheduleRender(),
            e.scheduleRender(),
            e.resumeFrom = s,
            n && (e.resumeFrom.preserveOpacity = !0),
            s.snapshot && (e.snapshot = s.snapshot,
            e.snapshot.latestValues = s.animationValues || s.latestValues),
            e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {crossfade: o} = e.options;
            o === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {options: n, resumingFrom: s} = e;
            n.onExitComplete && n.onExitComplete(),
            s && s.options.onExitComplete && s.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function xN(t, e, n) {
    let s = "";
    const o = t.x.translate / e.x
      , l = t.y.translate / e.y
      , u = n?.z || 0;
    if ((o || l || u) && (s = `translate3d(${o}px, ${l}px, ${u}px) `),
    (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
    n) {
        const {transformPerspective: h, rotate: m, rotateX: y, rotateY: v, skewX: w, skewY: b} = n;
        h && (s = `perspective(${h}px) ${s}`),
        m && (s += `rotate(${m}deg) `),
        y && (s += `rotateX(${y}deg) `),
        v && (s += `rotateY(${v}deg) `),
        w && (s += `skewX(${w}deg) `),
        b && (s += `skewY(${b}deg) `)
    }
    const d = t.x.scale * e.x
      , f = t.y.scale * e.y;
    return (d !== 1 || f !== 1) && (s += `scale(${d}, ${f})`),
    s || "none"
}
const wN = (t, e) => t.depth - e.depth;
class SN {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        Jh(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        ep(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(wN),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function Jl(t) {
    const e = zt(t) ? t.get() : t;
    return uR(e) ? e.toValue() : e
}
function bN(t, e) {
    const n = Gn.now()
      , s = ({timestamp: o}) => {
        const l = o - n;
        l >= e && (Jr(s),
        t(l - e))
    }
    ;
    return Ke.read(s, !0),
    () => Jr(s)
}
function TN(t) {
    return t instanceof SVGElement && t.tagName !== "svg"
}
function _N(t, e, n) {
    const s = zt(t) ? t : qo(t);
    return s.start(Yh("", s, e, n)),
    s.animation
}
const Si = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , Ro = typeof window < "u" && window.MotionDebug !== void 0
  , mf = ["", "X", "Y", "Z"]
  , PN = {
    visibility: "hidden"
}
  , $v = 1e3;
let CN = 0;
function gf(t, e, n, s) {
    const {latestValues: o} = e;
    o[t] && (n[t] = o[t],
    e.setStaticValue(t, 0),
    s && (s[t] = 0))
}
function VS(t) {
    if (t.hasCheckedOptimisedAppear = !0,
    t.root === t)
        return;
    const {visualElement: e} = t.options;
    if (!e)
        return;
    const n = yS(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: o, layoutId: l} = t.options;
        window.MotionCancelOptimisedAnimation(n, "transform", Ke, !(o || l))
    }
    const {parent: s} = t;
    s && !s.hasCheckedOptimisedAppear && VS(s)
}
function FS({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: o}) {
    return class {
        constructor(u={}, d=e?.()) {
            this.id = CN++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                Ro && (Si.totalNodes = Si.resolvedTargetDeltas = Si.recalculatedProjection = 0),
                this.nodes.forEach(AN),
                this.nodes.forEach(MN),
                this.nodes.forEach(IN),
                this.nodes.forEach(RN),
                Ro && window.MotionDebug.record(Si)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = u,
            this.root = d ? d.root || d : this,
            this.path = d ? [...d.path, d] : [],
            this.parent = d,
            this.depth = d ? d.depth + 1 : 0;
            for (let f = 0; f < this.path.length; f++)
                this.path[f].shouldResetTransform = !0;
            this.root === this && (this.nodes = new SN)
        }
        addEventListener(u, d) {
            return this.eventHandlers.has(u) || this.eventHandlers.set(u, new tp),
            this.eventHandlers.get(u).add(d)
        }
        notifyListeners(u, ...d) {
            const f = this.eventHandlers.get(u);
            f && f.notify(...d)
        }
        hasListeners(u) {
            return this.eventHandlers.has(u)
        }
        mount(u, d=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = TN(u),
            this.instance = u;
            const {layoutId: f, layout: h, visualElement: m} = this.options;
            if (m && !m.current && m.mount(u),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            d && (h || f) && (this.isLayoutDirty = !0),
            t) {
                let y;
                const v = () => this.root.updateBlockedByResize = !1;
                t(u, () => {
                    this.root.updateBlockedByResize = !0,
                    y && y(),
                    y = bN(v, 250),
                    Yl.hasAnimatedSinceResize && (Yl.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Wv))
                }
                )
            }
            f && this.root.registerSharedNode(f, this),
            this.options.animate !== !1 && m && (f || h) && this.addEventListener("didUpdate", ({delta: y, hasLayoutChanged: v, hasRelativeTargetChanged: w, layout: b}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const S = this.options.transition || m.getDefaultTransition() || BN
                  , {onLayoutAnimationStart: T, onLayoutAnimationComplete: _} = m.getProps()
                  , P = !this.targetLayout || !jS(this.targetLayout, b) || w
                  , A = !v && w;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || A || v && (P || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(y, A);
                    const I = {
                        ...Vh(S, "layout"),
                        onPlay: T,
                        onComplete: _
                    };
                    (m.shouldReduceMotion || this.options.layoutRoot) && (I.delay = 0,
                    I.type = !1),
                    this.startAnimation(I)
                } else
                    v || Wv(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = b
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const u = this.getStack();
            u && u.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Jr(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(LN),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: u} = this.options;
            return u && u.getProps().transformTemplate
        }
        willUpdate(u=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && VS(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m];
                y.shouldResetTransform = !0,
                y.updateScroll("snapshot"),
                y.options.layoutRoot && y.willUpdate(!1)
            }
            const {layoutId: d, layout: f} = this.options;
            if (d === void 0 && !f)
                return;
            const h = this.getTransformTemplate();
            this.prevTransformTemplateValue = h ? h(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            u && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Hv);
                return
            }
            this.isUpdating || this.nodes.forEach(ON),
            this.isUpdating = !1,
            this.nodes.forEach(DN),
            this.nodes.forEach(EN),
            this.nodes.forEach(kN),
            this.clearAllSnapshots();
            const d = Gn.now();
            Ot.delta = Tr(0, 1e3 / 60, d - Ot.timestamp),
            Ot.timestamp = d,
            Ot.isProcessing = !0,
            af.update.process(Ot),
            af.preRender.process(Ot),
            af.render.process(Ot),
            Ot.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            ip.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(NN),
            this.sharedNodes.forEach(jN)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Ke.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ke.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let f = 0; f < this.path.length; f++)
                    this.path[f].updateScroll();
            const u = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = mt(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: d} = this.options;
            d && d.notify("LayoutMeasure", this.layout.layoutBox, u ? u.layoutBox : void 0)
        }
        updateScroll(u="measure") {
            let d = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === u && (d = !1),
            d) {
                const f = s(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: u,
                    isRoot: f,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : f
                }
            }
        }
        resetTransform() {
            if (!o)
                return;
            const u = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , d = this.projectionDelta && !LS(this.projectionDelta)
              , f = this.getTransformTemplate()
              , h = f ? f(this.latestValues, "") : void 0
              , m = h !== this.prevTransformTemplateValue;
            u && (d || wi(this.latestValues) || m) && (o(this.instance, h),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(u=!0) {
            const d = this.measurePageBox();
            let f = this.removeElementScroll(d);
            return u && (f = this.removeTransform(f)),
            zN(f),
            {
                animationId: this.root.animationId,
                measuredBox: d,
                layoutBox: f,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: d} = this.options;
            if (!d)
                return mt();
            const f = d.measureViewportBox();
            if (!(((u = this.scroll) === null || u === void 0 ? void 0 : u.wasRoot) || this.path.some(UN))) {
                const {scroll: m} = this.root;
                m && (ms(f.x, m.offset.x),
                ms(f.y, m.offset.y))
            }
            return f
        }
        removeElementScroll(u) {
            var d;
            const f = mt();
            if (Sn(f, u),
            !((d = this.scroll) === null || d === void 0) && d.wasRoot)
                return f;
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h]
                  , {scroll: y, options: v} = m;
                m !== this.root && y && v.layoutScroll && (y.wasRoot && Sn(f, u),
                ms(f.x, y.offset.x),
                ms(f.y, y.offset.y))
            }
            return f
        }
        applyTransform(u, d=!1) {
            const f = mt();
            Sn(f, u);
            for (let h = 0; h < this.path.length; h++) {
                const m = this.path[h];
                !d && m.options.layoutScroll && m.scroll && m !== m.root && gs(f, {
                    x: -m.scroll.offset.x,
                    y: -m.scroll.offset.y
                }),
                wi(m.latestValues) && gs(f, m.latestValues)
            }
            return wi(this.latestValues) && gs(f, this.latestValues),
            f
        }
        removeTransform(u) {
            const d = mt();
            Sn(d, u);
            for (let f = 0; f < this.path.length; f++) {
                const h = this.path[f];
                if (!h.instance || !wi(h.latestValues))
                    continue;
                eh(h.latestValues) && h.updateSnapshot();
                const m = mt()
                  , y = h.measurePageBox();
                Sn(m, y),
                jv(d, h.latestValues, h.snapshot ? h.snapshot.layoutBox : void 0, m)
            }
            return wi(this.latestValues) && jv(d, this.latestValues),
            d
        }
        setTargetDelta(u) {
            this.targetDelta = u,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(u) {
            this.options = {
                ...this.options,
                ...u,
                crossfade: u.crossfade !== void 0 ? u.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ot.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(u=!1) {
            var d;
            const f = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = f.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = f.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = f.isSharedProjectionDirty);
            const h = !!this.resumingFrom || this !== f;
            if (!(u || h && this.isSharedProjectionDirty || this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: y, layoutId: v} = this.options;
            if (!(!this.layout || !(y || v))) {
                if (this.resolvedRelativeTargetAt = Ot.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const w = this.getClosestProjectingParent();
                    w && w.layout && this.animationProgress !== 1 ? (this.relativeParent = w,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = mt(),
                    this.relativeTargetOrigin = mt(),
                    Lo(this.relativeTargetOrigin, this.layout.layoutBox, w.layout.layoutBox),
                    Sn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = mt(),
                    this.targetWithTransforms = mt()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    $R(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Sn(this.target, this.layout.layoutBox),
                    kS(this.target, this.targetDelta)) : Sn(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const w = this.getClosestProjectingParent();
                        w && !!w.resumingFrom == !!this.resumingFrom && !w.options.layoutScroll && w.target && this.animationProgress !== 1 ? (this.relativeParent = w,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = mt(),
                        this.relativeTargetOrigin = mt(),
                        Lo(this.relativeTargetOrigin, this.target, w.target),
                        Sn(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Ro && Si.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || eh(this.parent.latestValues) || ES(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var u;
            const d = this.getLead()
              , f = !!this.resumingFrom || this !== d;
            let h = !0;
            if ((this.isProjectionDirty || !((u = this.parent) === null || u === void 0) && u.isProjectionDirty) && (h = !1),
            f && (this.isSharedProjectionDirty || this.isTransformDirty) && (h = !1),
            this.resolvedRelativeTargetAt === Ot.timestamp && (h = !1),
            h)
                return;
            const {layout: m, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(m || y))
                return;
            Sn(this.layoutCorrected, this.layout.layoutBox);
            const v = this.treeScale.x
              , w = this.treeScale.y;
            YR(this.layoutCorrected, this.treeScale, this.path, f),
            d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
            d.targetWithTransforms = mt());
            const {target: b} = d;
            if (!b) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Mv(this.prevProjectionDelta.x, this.projectionDelta.x),
            Mv(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Io(this.projectionDelta, this.layoutCorrected, b, this.latestValues),
            (this.treeScale.x !== v || this.treeScale.y !== w || !Uv(this.projectionDelta.x, this.prevProjectionDelta.x) || !Uv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", b)),
            Ro && Si.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(u=!0) {
            var d;
            if ((d = this.options.visualElement) === null || d === void 0 || d.scheduleRender(),
            u) {
                const f = this.getStack();
                f && f.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = ps(),
            this.projectionDelta = ps(),
            this.projectionDeltaWithTransform = ps()
        }
        setAnimationOrigin(u, d=!1) {
            const f = this.snapshot
              , h = f ? f.latestValues : {}
              , m = {
                ...this.latestValues
            }
              , y = ps();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !d;
            const v = mt()
              , w = f ? f.source : void 0
              , b = this.layout ? this.layout.source : void 0
              , S = w !== b
              , T = this.getStack()
              , _ = !T || T.members.length <= 1
              , P = !!(S && !_ && this.options.crossfade === !0 && !this.path.some(FN));
            this.animationProgress = 0;
            let A;
            this.mixTargetDelta = I => {
                const L = I / 1e3;
                qv(y.x, u.x, L),
                qv(y.y, u.y, L),
                this.setTargetDelta(y),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Lo(v, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                VN(this.relativeTarget, this.relativeTargetOrigin, v, L),
                A && yN(this.relativeTarget, A) && (this.isProjectionDirty = !1),
                A || (A = mt()),
                Sn(A, this.relativeTarget)),
                S && (this.animationValues = m,
                dN(m, h, this.latestValues, L, P, _)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = L
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(u) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Jr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ke.update( () => {
                Yl.hasAnimatedSinceResize = !0,
                this.currentAnimation = _N(0, $v, {
                    ...u,
                    onUpdate: d => {
                        this.mixTargetDelta(d),
                        u.onUpdate && u.onUpdate(d)
                    }
                    ,
                    onComplete: () => {
                        u.onComplete && u.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const u = this.getStack();
            u && u.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta($v),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const u = this.getLead();
            let {targetWithTransforms: d, target: f, layout: h, latestValues: m} = u;
            if (!(!d || !f || !h)) {
                if (this !== u && this.layout && h && BS(this.options.animationType, this.layout.layoutBox, h.layoutBox)) {
                    f = this.target || mt();
                    const y = pn(this.layout.layoutBox.x);
                    f.x.min = u.target.x.min,
                    f.x.max = f.x.min + y;
                    const v = pn(this.layout.layoutBox.y);
                    f.y.min = u.target.y.min,
                    f.y.max = f.y.min + v
                }
                Sn(d, f),
                gs(d, m),
                Io(this.projectionDeltaWithTransform, this.layoutCorrected, d, m)
            }
        }
        registerSharedNode(u, d) {
            this.sharedNodes.has(u) || this.sharedNodes.set(u, new vN),
            this.sharedNodes.get(u).add(d);
            const h = d.options.initialPromotionConfig;
            d.promote({
                transition: h ? h.transition : void 0,
                preserveFollowOpacity: h && h.shouldPreserveFollowOpacity ? h.shouldPreserveFollowOpacity(d) : void 0
            })
        }
        isLead() {
            const u = this.getStack();
            return u ? u.lead === this : !0
        }
        getLead() {
            var u;
            const {layoutId: d} = this.options;
            return d ? ((u = this.getStack()) === null || u === void 0 ? void 0 : u.lead) || this : this
        }
        getPrevLead() {
            var u;
            const {layoutId: d} = this.options;
            return d ? (u = this.getStack()) === null || u === void 0 ? void 0 : u.prevLead : void 0
        }
        getStack() {
            const {layoutId: u} = this.options;
            if (u)
                return this.root.sharedNodes.get(u)
        }
        promote({needsReset: u, transition: d, preserveFollowOpacity: f}={}) {
            const h = this.getStack();
            h && h.promote(this, f),
            u && (this.projectionDelta = void 0,
            this.needsReset = !0),
            d && this.setOptions({
                transition: d
            })
        }
        relegate() {
            const u = this.getStack();
            return u ? u.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: u} = this.options;
            if (!u)
                return;
            let d = !1;
            const {latestValues: f} = u;
            if ((f.z || f.rotate || f.rotateX || f.rotateY || f.rotateZ || f.skewX || f.skewY) && (d = !0),
            !d)
                return;
            const h = {};
            f.z && gf("z", u, h, this.animationValues);
            for (let m = 0; m < mf.length; m++)
                gf(`rotate${mf[m]}`, u, h, this.animationValues),
                gf(`skew${mf[m]}`, u, h, this.animationValues);
            u.render();
            for (const m in h)
                u.setStaticValue(m, h[m]),
                this.animationValues && (this.animationValues[m] = h[m]);
            u.scheduleRender()
        }
        getProjectionStyles(u) {
            var d, f;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return PN;
            const h = {
                visibility: ""
            }
              , m = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                h.opacity = "",
                h.pointerEvents = Jl(u?.pointerEvents) || "",
                h.transform = m ? m(this.latestValues, "") : "none",
                h;
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                const S = {};
                return this.options.layoutId && (S.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                S.pointerEvents = Jl(u?.pointerEvents) || ""),
                this.hasProjected && !wi(this.latestValues) && (S.transform = m ? m({}, "") : "none",
                this.hasProjected = !1),
                S
            }
            const v = y.animationValues || y.latestValues;
            this.applyTransformsToTarget(),
            h.transform = xN(this.projectionDeltaWithTransform, this.treeScale, v),
            m && (h.transform = m(v, h.transform));
            const {x: w, y: b} = this.projectionDelta;
            h.transformOrigin = `${w.origin * 100}% ${b.origin * 100}% 0`,
            y.animationValues ? h.opacity = y === this ? (f = (d = v.opacity) !== null && d !== void 0 ? d : this.latestValues.opacity) !== null && f !== void 0 ? f : 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : h.opacity = y === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
            for (const S in yu) {
                if (v[S] === void 0)
                    continue;
                const {correct: T, applyTo: _} = yu[S]
                  , P = h.transform === "none" ? v[S] : T(v[S], y);
                if (_) {
                    const A = _.length;
                    for (let I = 0; I < A; I++)
                        h[_[I]] = P
                } else
                    h[S] = P
            }
            return this.options.layoutId && (h.pointerEvents = y === this ? Jl(u?.pointerEvents) || "" : "none"),
            h
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(u => {
                var d;
                return (d = u.currentAnimation) === null || d === void 0 ? void 0 : d.stop()
            }
            ),
            this.root.nodes.forEach(Hv),
            this.root.sharedNodes.clear()
        }
    }
}
function EN(t) {
    t.updateLayout()
}
function kN(t) {
    var e;
    const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {layoutBox: s, measuredBox: o} = t.layout
          , {animationType: l} = t.options
          , u = n.source !== t.layout.source;
        l === "size" ? bn(y => {
            const v = u ? n.measuredBox[y] : n.layoutBox[y]
              , w = pn(v);
            v.min = s[y].min,
            v.max = v.min + w
        }
        ) : BS(l, n.layoutBox, s) && bn(y => {
            const v = u ? n.measuredBox[y] : n.layoutBox[y]
              , w = pn(s[y]);
            v.max = v.min + w,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[y].max = t.relativeTarget[y].min + w)
        }
        );
        const d = ps();
        Io(d, s, n.layoutBox);
        const f = ps();
        u ? Io(f, t.applyTransform(o, !0), n.measuredBox) : Io(f, s, n.layoutBox);
        const h = !LS(d);
        let m = !1;
        if (!t.resumeFrom) {
            const y = t.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {snapshot: v, layout: w} = y;
                if (v && w) {
                    const b = mt();
                    Lo(b, n.layoutBox, v.layoutBox);
                    const S = mt();
                    Lo(S, s, w.layoutBox),
                    jS(b, S) || (m = !0),
                    y.options.layoutRoot && (t.relativeTarget = S,
                    t.relativeTargetOrigin = b,
                    t.relativeParent = y)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: n,
            delta: f,
            layoutDelta: d,
            hasLayoutChanged: h,
            hasRelativeTargetChanged: m
        })
    } else if (t.isLead()) {
        const {onExitComplete: s} = t.options;
        s && s()
    }
    t.options.transition = void 0
}
function AN(t) {
    Ro && Si.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function RN(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function NN(t) {
    t.clearSnapshot()
}
function Hv(t) {
    t.clearMeasurements()
}
function ON(t) {
    t.isLayoutDirty = !1
}
function DN(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function Wv(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function MN(t) {
    t.resolveTargetDelta()
}
function IN(t) {
    t.calcProjection()
}
function LN(t) {
    t.resetSkewAndRotation()
}
function jN(t) {
    t.removeLeadSnapshot()
}
function qv(t, e, n) {
    t.translate = at(e.translate, 0, n),
    t.scale = at(e.scale, 1, n),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function Qv(t, e, n, s) {
    t.min = at(e.min, n.min, s),
    t.max = at(e.max, n.max, s)
}
function VN(t, e, n, s) {
    Qv(t.x, e.x, n.x, s),
    Qv(t.y, e.y, n.y, s)
}
function FN(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const BN = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Kv = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
  , Zv = Kv("applewebkit/") && !Kv("chrome/") ? Math.round : Ut;
function Gv(t) {
    t.min = Zv(t.min),
    t.max = Zv(t.max)
}
function zN(t) {
    Gv(t.x),
    Gv(t.y)
}
function BS(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !UR(zv(e), zv(n), .2)
}
function UN(t) {
    var e;
    return t !== t.root && ((e = t.scroll) === null || e === void 0 ? void 0 : e.wasRoot)
}
const $N = FS({
    attachResizeListener: (t, e) => vr(t, "resize", e),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , yf = {
    current: void 0
}
  , zS = FS({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!yf.current) {
            const t = new $N({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            yf.current = t
        }
        return yf.current
    }
    ,
    resetTransform: (t, e) => {
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
  , HN = {
    pan: {
        Feature: iN
    },
    drag: {
        Feature: rN,
        ProjectionNode: zS,
        MeasureLayout: DS
    }
};
function Xv(t, e, n) {
    const {props: s} = t;
    t.animationState && s.whileHover && t.animationState.setActive("whileHover", n);
    const o = s[n ? "onHoverStart" : "onHoverEnd"];
    o && Ke.postRender( () => o(e, fa(e)))
}
class WN extends si {
    mount() {
        const {current: e, props: n} = this.node;
        e && (this.unmount = OR(e, s => (Xv(this.node, s, !0),
        o => Xv(this.node, o, !1)), {
            passive: !n.onHoverStart && !n.onHoverEnd
        }))
    }
    unmount() {}
}
class qN extends si {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = Kr(vr(this.node.current, "focus", () => this.onFocus()), vr(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const US = (t, e) => e ? t === e ? !0 : US(t, e.parentElement) : !1;
function vf(t, e) {
    if (!e)
        return;
    const n = new PointerEvent("pointer" + t);
    e(n, fa(n))
}
class QN extends si {
    constructor() {
        super(...arguments),
        this.removeStartListeners = Ut,
        this.removeEndListeners = Ut,
        this.removeAccessibleListeners = Ut,
        this.startPointerPress = (e, n) => {
            if (this.isPressing)
                return;
            this.removeEndListeners();
            const s = this.node.getProps()
              , l = Zr(window, "pointerup", (d, f) => {
                if (!this.checkPressEnd())
                    return;
                const {onTap: h, onTapCancel: m, globalTapTarget: y} = this.node.getProps()
                  , v = !y && !US(this.node.current, d.target) ? m : h;
                v && Ke.update( () => v(d, f))
            }
            , {
                passive: !(s.onTap || s.onPointerUp)
            })
              , u = Zr(window, "pointercancel", (d, f) => this.cancelPress(d, f), {
                passive: !(s.onTapCancel || s.onPointerCancel)
            });
            this.removeEndListeners = Kr(l, u),
            this.startPress(e, n)
        }
        ,
        this.startAccessiblePress = () => {
            const e = l => {
                if (l.key !== "Enter" || this.isPressing)
                    return;
                const u = d => {
                    d.key !== "Enter" || !this.checkPressEnd() || vf("up", (f, h) => {
                        const {onTap: m} = this.node.getProps();
                        m && Ke.postRender( () => m(f, h))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = vr(this.node.current, "keyup", u),
                vf("down", (d, f) => {
                    this.startPress(d, f)
                }
                )
            }
              , n = vr(this.node.current, "keydown", e)
              , s = () => {
                this.isPressing && vf("cancel", (l, u) => this.cancelPress(l, u))
            }
              , o = vr(this.node.current, "blur", s);
            this.removeAccessibleListeners = Kr(n, o)
        }
    }
    startPress(e, n) {
        this.isPressing = !0;
        const {onTapStart: s, whileTap: o} = this.node.getProps();
        o && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        s && Ke.postRender( () => s(e, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !wS()
    }
    cancelPress(e, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: s} = this.node.getProps();
        s && Ke.postRender( () => s(e, n))
    }
    mount() {
        const e = this.node.getProps()
          , n = Zr(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(e.onTapStart || e.onPointerStart)
        })
          , s = vr(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = Kr(n, s)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const nh = new WeakMap
  , xf = new WeakMap
  , KN = t => {
    const e = nh.get(t.target);
    e && e(t)
}
  , ZN = t => {
    t.forEach(KN)
}
;
function GN({root: t, ...e}) {
    const n = t || document;
    xf.has(n) || xf.set(n, {});
    const s = xf.get(n)
      , o = JSON.stringify(e);
    return s[o] || (s[o] = new IntersectionObserver(ZN,{
        root: t,
        ...e
    })),
    s[o]
}
function XN(t, e, n) {
    const s = GN(e);
    return nh.set(t, n),
    s.observe(t),
    () => {
        nh.delete(t),
        s.unobserve(t)
    }
}
const YN = {
    some: 0,
    all: 1
};
class JN extends si {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: e={}} = this.node.getProps()
          , {root: n, margin: s, amount: o="some", once: l} = e
          , u = {
            root: n ? n.current : void 0,
            rootMargin: s,
            threshold: typeof o == "number" ? o : YN[o]
        }
          , d = f => {
            const {isIntersecting: h} = f;
            if (this.isInView === h || (this.isInView = h,
            l && !h && this.hasEnteredView))
                return;
            h && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", h);
            const {onViewportEnter: m, onViewportLeave: y} = this.node.getProps()
              , v = h ? m : y;
            v && v(f)
        }
        ;
        return XN(this.node.current, u, d)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(eO(e, n)) && this.startObserver()
    }
    unmount() {}
}
function eO({viewport: t={}}, {viewport: e={}}={}) {
    return n => t[n] !== e[n]
}
const tO = {
    inView: {
        Feature: JN
    },
    tap: {
        Feature: QN
    },
    focus: {
        Feature: qN
    },
    hover: {
        Feature: WN
    }
}
  , nO = {
    layout: {
        ProjectionNode: zS,
        MeasureLayout: DS
    }
}
  , $S = C.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
})
  , Zu = C.createContext({})
  , sp = typeof window < "u"
  , rO = sp ? C.useLayoutEffect : C.useEffect
  , HS = C.createContext({
    strict: !1
});
function iO(t, e, n, s, o) {
    var l, u;
    const {visualElement: d} = C.useContext(Zu)
      , f = C.useContext(HS)
      , h = C.useContext(rp)
      , m = C.useContext($S).reducedMotion
      , y = C.useRef();
    s = s || f.renderer,
    !y.current && s && (y.current = s(t, {
        visualState: e,
        parent: d,
        props: n,
        presenceContext: h,
        blockInitialAnimation: h ? h.initial === !1 : !1,
        reducedMotionConfig: m
    }));
    const v = y.current
      , w = C.useContext(OS);
    v && !v.projection && o && (v.type === "html" || v.type === "svg") && sO(y.current, n, o, w);
    const b = C.useRef(!1);
    C.useInsertionEffect( () => {
        v && b.current && v.update(n, h)
    }
    );
    const S = n[gS]
      , T = C.useRef(!!S && !(!((l = window.MotionHandoffIsComplete) === null || l === void 0) && l.call(window, S)) && ((u = window.MotionHasOptimisedAnimation) === null || u === void 0 ? void 0 : u.call(window, S)));
    return rO( () => {
        v && (b.current = !0,
        window.MotionIsMounted = !0,
        v.updateFeatures(),
        ip.render(v.render),
        T.current && v.animationState && v.animationState.animateChanges())
    }
    ),
    C.useEffect( () => {
        v && (!T.current && v.animationState && v.animationState.animateChanges(),
        T.current && (queueMicrotask( () => {
            var _;
            (_ = window.MotionHandoffMarkAsComplete) === null || _ === void 0 || _.call(window, S)
        }
        ),
        T.current = !1))
    }
    ),
    v
}
function sO(t, e, n, s) {
    const {layoutId: o, layout: l, drag: u, dragConstraints: d, layoutScroll: f, layoutRoot: h} = e;
    t.projection = new n(t.latestValues,e["data-framer-portal-id"] ? void 0 : WS(t.parent)),
    t.projection.setOptions({
        layoutId: o,
        layout: l,
        alwaysMeasureLayout: !!u || d && hs(d),
        visualElement: t,
        animationType: typeof l == "string" ? l : "both",
        initialPromotionConfig: s,
        layoutScroll: f,
        layoutRoot: h
    })
}
function WS(t) {
    if (t)
        return t.options.allowProjection !== !1 ? t.projection : WS(t.parent)
}
function oO(t, e, n) {
    return C.useCallback(s => {
        s && t.mount && t.mount(s),
        e && (s ? e.mount(s) : e.unmount()),
        n && (typeof n == "function" ? n(s) : hs(n) && (n.current = s))
    }
    , [e])
}
function Gu(t) {
    return qu(t.animate) || jh.some(e => $o(t[e]))
}
function qS(t) {
    return !!(Gu(t) || t.variants)
}
function aO(t, e) {
    if (Gu(t)) {
        const {initial: n, animate: s} = t;
        return {
            initial: n === !1 || $o(n) ? n : void 0,
            animate: $o(s) ? s : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function lO(t) {
    const {initial: e, animate: n} = aO(t, C.useContext(Zu));
    return C.useMemo( () => ({
        initial: e,
        animate: n
    }), [Yv(e), Yv(n)])
}
function Yv(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const Jv = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , ks = {};
for (const t in Jv)
    ks[t] = {
        isEnabled: e => Jv[t].some(n => !!e[n])
    };
function uO(t) {
    for (const e in t)
        ks[e] = {
            ...ks[e],
            ...t[e]
        }
}
const cO = Symbol.for("motionComponentSymbol");
function dO({preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: s, Component: o}) {
    t && uO(t);
    function l(d, f) {
        let h;
        const m = {
            ...C.useContext($S),
            ...d,
            layoutId: fO(d)
        }
          , {isStatic: y} = m
          , v = lO(d)
          , w = s(d, y);
        if (!y && sp) {
            hO();
            const b = pO(m);
            h = b.MeasureLayout,
            v.visualElement = iO(o, w, m, e, b.ProjectionNode)
        }
        return E.jsxs(Zu.Provider, {
            value: v,
            children: [h && v.visualElement ? E.jsx(h, {
                visualElement: v.visualElement,
                ...m
            }) : null, n(o, d, oO(w, v.visualElement, f), w, y, v.visualElement)]
        })
    }
    const u = C.forwardRef(l);
    return u[cO] = o,
    u
}
function fO({layoutId: t}) {
    const e = C.useContext(NS).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function hO(t, e) {
    C.useContext(HS).strict
}
function pO(t) {
    const {drag: e, layout: n} = ks;
    if (!e && !n)
        return {};
    const s = {
        ...e,
        ...n
    };
    return {
        MeasureLayout: e?.isEnabled(t) || n?.isEnabled(t) ? s.MeasureLayout : void 0,
        ProjectionNode: s.ProjectionNode
    }
}
const mO = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function op(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(mO.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
function QS(t, {style: e, vars: n}, s, o) {
    Object.assign(t.style, e, o && o.getProjectionStyles(s));
    for (const l in n)
        t.style.setProperty(l, n[l])
}
const KS = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function ZS(t, e, n, s) {
    QS(t, e, void 0, s);
    for (const o in e.attrs)
        t.setAttribute(KS.has(o) ? o : np(o), e.attrs[o])
}
function GS(t, {layout: e, layoutId: n}) {
    return Oi.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!yu[t] || t === "opacity")
}
function ap(t, e, n) {
    var s;
    const {style: o} = t
      , l = {};
    for (const u in o)
        (zt(o[u]) || e.style && zt(e.style[u]) || GS(u, t) || ((s = n?.getValue(u)) === null || s === void 0 ? void 0 : s.liveStyle) !== void 0) && (l[u] = o[u]);
    return l
}
function XS(t, e, n) {
    const s = ap(t, e, n);
    for (const o in t)
        if (zt(t[o]) || zt(e[o])) {
            const l = ua.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
            s[l] = t[o]
        }
    return s
}
function gO(t) {
    const e = C.useRef(null);
    return e.current === null && (e.current = t()),
    e.current
}
function yO({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n}, s, o, l) {
    const u = {
        latestValues: vO(s, o, l, t),
        renderState: e()
    };
    return n && (u.mount = d => n(s, d, u)),
    u
}
const YS = t => (e, n) => {
    const s = C.useContext(Zu)
      , o = C.useContext(rp)
      , l = () => yO(t, e, s, o);
    return n ? l() : gO(l)
}
;
function vO(t, e, n, s) {
    const o = {}
      , l = s(t, {});
    for (const v in l)
        o[v] = Jl(l[v]);
    let {initial: u, animate: d} = t;
    const f = Gu(t)
      , h = qS(t);
    e && h && !f && t.inherit !== !1 && (u === void 0 && (u = e.initial),
    d === void 0 && (d = e.animate));
    let m = n ? n.initial === !1 : !1;
    m = m || u === !1;
    const y = m ? d : u;
    if (y && typeof y != "boolean" && !qu(y)) {
        const v = Array.isArray(y) ? y : [y];
        for (let w = 0; w < v.length; w++) {
            const b = Ih(t, v[w]);
            if (b) {
                const {transitionEnd: S, transition: T, ..._} = b;
                for (const P in _) {
                    let A = _[P];
                    if (Array.isArray(A)) {
                        const I = m ? A.length - 1 : 0;
                        A = A[I]
                    }
                    A !== null && (o[P] = A)
                }
                for (const P in S)
                    o[P] = S[P]
            }
        }
    }
    return o
}
const lp = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , JS = () => ({
    ...lp(),
    attrs: {}
})
  , eb = (t, e) => e && typeof t == "number" ? e.transform(t) : t
  , xO = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , wO = ua.length;
function SO(t, e, n) {
    let s = ""
      , o = !0;
    for (let l = 0; l < wO; l++) {
        const u = ua[l]
          , d = t[u];
        if (d === void 0)
            continue;
        let f = !0;
        if (typeof d == "number" ? f = d === (u.startsWith("scale") ? 1 : 0) : f = parseFloat(d) === 0,
        !f || n) {
            const h = eb(d, Wh[u]);
            if (!f) {
                o = !1;
                const m = xO[u] || u;
                s += `${m}(${h}) `
            }
            n && (e[u] = h)
        }
    }
    return s = s.trim(),
    n ? s = n(e, o ? "" : s) : o && (s = "none"),
    s
}
function up(t, e, n) {
    const {style: s, vars: o, transformOrigin: l} = t;
    let u = !1
      , d = !1;
    for (const f in e) {
        const h = e[f];
        if (Oi.has(f)) {
            u = !0;
            continue
        } else if (Ww(f)) {
            o[f] = h;
            continue
        } else {
            const m = eb(h, Wh[f]);
            f.startsWith("origin") ? (d = !0,
            l[f] = m) : s[f] = m
        }
    }
    if (e.transform || (u || n ? s.transform = SO(e, t.transform, n) : s.transform && (s.transform = "none")),
    d) {
        const {originX: f="50%", originY: h="50%", originZ: m=0} = l;
        s.transformOrigin = `${f} ${h} ${m}`
    }
}
function e0(t, e, n) {
    return typeof t == "string" ? t : Ee.transform(e + n * t)
}
function bO(t, e, n) {
    const s = e0(e, t.x, t.width)
      , o = e0(n, t.y, t.height);
    return `${s} ${o}`
}
const TO = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , _O = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function PO(t, e, n=1, s=0, o=!0) {
    t.pathLength = 1;
    const l = o ? TO : _O;
    t[l.offset] = Ee.transform(-s);
    const u = Ee.transform(e)
      , d = Ee.transform(n);
    t[l.array] = `${u} ${d}`
}
function cp(t, {attrX: e, attrY: n, attrScale: s, originX: o, originY: l, pathLength: u, pathSpacing: d=1, pathOffset: f=0, ...h}, m, y) {
    if (up(t, h, y),
    m) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: v, style: w, dimensions: b} = t;
    v.transform && (b && (w.transform = v.transform),
    delete v.transform),
    b && (o !== void 0 || l !== void 0 || w.transform) && (w.transformOrigin = bO(b, o !== void 0 ? o : .5, l !== void 0 ? l : .5)),
    e !== void 0 && (v.x = e),
    n !== void 0 && (v.y = n),
    s !== void 0 && (v.scale = s),
    u !== void 0 && PO(v, u, d, f, !1)
}
const dp = t => typeof t == "string" && t.toLowerCase() === "svg"
  , CO = {
    useVisualState: YS({
        scrapeMotionValuesFromProps: XS,
        createRenderState: JS,
        onMount: (t, e, {renderState: n, latestValues: s}) => {
            Ke.read( () => {
                try {
                    n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            Ke.render( () => {
                cp(n, s, dp(e.tagName), t.transformTemplate),
                ZS(e, n)
            }
            )
        }
    })
}
  , EO = {
    useVisualState: YS({
        scrapeMotionValuesFromProps: ap,
        createRenderState: lp
    })
};
function tb(t, e, n) {
    for (const s in e)
        !zt(e[s]) && !GS(s, n) && (t[s] = e[s])
}
function kO({transformTemplate: t}, e) {
    return C.useMemo( () => {
        const n = lp();
        return up(n, e, t),
        Object.assign({}, n.vars, n.style)
    }
    , [e])
}
function AO(t, e) {
    const n = t.style || {}
      , s = {};
    return tb(s, n, t),
    Object.assign(s, kO(t, e)),
    s
}
function RO(t, e) {
    const n = {}
      , s = AO(t, e);
    return t.drag && t.dragListener !== !1 && (n.draggable = !1,
    s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none",
    s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
    n.style = s,
    n
}
const NO = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function vu(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || NO.has(t)
}
let nb = t => !vu(t);
function OO(t) {
    t && (nb = e => e.startsWith("on") ? !vu(e) : t(e))
}
try {
    OO(require("@emotion/is-prop-valid").default)
} catch {}
function DO(t, e, n) {
    const s = {};
    for (const o in t)
        o === "values" && typeof t.values == "object" || (nb(o) || n === !0 && vu(o) || !e && !vu(o) || t.draggable && o.startsWith("onDrag")) && (s[o] = t[o]);
    return s
}
function MO(t, e, n, s) {
    const o = C.useMemo( () => {
        const l = JS();
        return cp(l, e, dp(s), t.transformTemplate),
        {
            ...l.attrs,
            style: {
                ...l.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const l = {};
        tb(l, t.style, t),
        o.style = {
            ...l,
            ...o.style
        }
    }
    return o
}
function IO(t=!1) {
    return (n, s, o, {latestValues: l}, u) => {
        const f = (op(n) ? MO : RO)(s, l, u, n)
          , h = DO(s, typeof n == "string", t)
          , m = n !== C.Fragment ? {
            ...h,
            ...f,
            ref: o
        } : {}
          , {children: y} = s
          , v = C.useMemo( () => zt(y) ? y.get() : y, [y]);
        return C.createElement(n, {
            ...m,
            children: v
        })
    }
}
function LO(t, e) {
    return function(s, {forwardMotionProps: o}={
        forwardMotionProps: !1
    }) {
        const u = {
            ...op(s) ? CO : EO,
            preloadedFeatures: t,
            useRender: IO(o),
            createVisualElement: e,
            Component: s
        };
        return dO(u)
    }
}
const rh = {
    current: null
}
  , rb = {
    current: !1
};
function jO() {
    if (rb.current = !0,
    !!sp)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = () => rh.current = t.matches;
            t.addListener(e),
            e()
        } else
            rh.current = !1
}
function VO(t, e, n) {
    for (const s in e) {
        const o = e[s]
          , l = n[s];
        if (zt(o))
            t.addValue(s, o);
        else if (zt(l))
            t.addValue(s, qo(o, {
                owner: t
            }));
        else if (l !== o)
            if (t.hasValue(s)) {
                const u = t.getValue(s);
                u.liveStyle === !0 ? u.jump(o) : u.hasAnimated || u.set(o)
            } else {
                const u = t.getStaticValue(s);
                t.addValue(s, qo(u !== void 0 ? u : o, {
                    owner: t
                }))
            }
    }
    for (const s in n)
        e[s] === void 0 && t.removeValue(s);
    return e
}
const t0 = new WeakMap
  , FO = [...Kw, Bt, ei]
  , BO = t => FO.find(Qw(t))
  , n0 = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class zO {
    scrapeMotionValuesFromProps(e, n, s) {
        return {}
    }
    constructor({parent: e, props: n, presenceContext: s, reducedMotionConfig: o, blockInitialAnimation: l, visualState: u}, d={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = Uh,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const v = Gn.now();
            this.renderScheduledAt < v && (this.renderScheduledAt = v,
            Ke.render(this.render, !1, !0))
        }
        ;
        const {latestValues: f, renderState: h} = u;
        this.latestValues = f,
        this.baseTarget = {
            ...f
        },
        this.initialValues = n.initial ? {
            ...f
        } : {},
        this.renderState = h,
        this.parent = e,
        this.props = n,
        this.presenceContext = s,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = o,
        this.options = d,
        this.blockInitialAnimation = !!l,
        this.isControllingVariants = Gu(n),
        this.isVariantNode = qS(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: m, ...y} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const v in y) {
            const w = y[v];
            f[v] !== void 0 && zt(w) && w.set(f[v], !1)
        }
    }
    mount(e) {
        this.current = e,
        t0.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, s) => this.bindToMotionValue(s, n)),
        rb.current || jO(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : rh.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        t0.delete(this.current),
        this.projection && this.projection.unmount(),
        Jr(this.notifyUpdate),
        Jr(this.render),
        this.valueSubscriptions.forEach(e => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const e in this.events)
            this.events[e].clear();
        for (const e in this.features) {
            const n = this.features[e];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(e, n) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const s = Oi.has(e)
          , o = n.on("change", d => {
            this.latestValues[e] = d,
            this.props.onUpdate && Ke.preRender(this.notifyUpdate),
            s && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , l = n.on("renderRequest", this.scheduleRender);
        let u;
        window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, e, n)),
        this.valueSubscriptions.set(e, () => {
            o(),
            l(),
            u && u(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in ks) {
            const n = ks[e];
            if (!n)
                continue;
            const {isEnabled: s, Feature: o} = n;
            if (!this.features[e] && o && s(this.props) && (this.features[e] = new o(this)),
            this.features[e]) {
                const l = this.features[e];
                l.isMounted ? l.update() : (l.mount(),
                l.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : mt()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let s = 0; s < n0.length; s++) {
            const o = n0[s];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
            delete this.propEventSubscriptions[o]);
            const l = "on" + o
              , u = e[l];
            u && (this.propEventSubscriptions[o] = this.on(o, u))
        }
        this.prevMotionValues = VO(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(e),
            () => n.variantChildren.delete(e)
    }
    addValue(e, n) {
        const s = this.values.get(e);
        n !== s && (s && this.removeValue(e),
        this.bindToMotionValue(e, n),
        this.values.set(e, n),
        this.latestValues[e] = n.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let s = this.values.get(e);
        return s === void 0 && n !== void 0 && (s = qo(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(e, s)),
        s
    }
    readValue(e, n) {
        var s;
        let o = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (s = this.getBaseTargetFromProps(this.props, e)) !== null && s !== void 0 ? s : this.readValueFromInstance(this.current, e, this.options);
        return o != null && (typeof o == "string" && ($w(o) || Uw(o)) ? o = parseFloat(o) : !BO(o) && ei.test(n) && (o = nS(e, n)),
        this.setBaseTarget(e, zt(o) ? o.get() : o)),
        zt(o) ? o.get() : o
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var n;
        const {initial: s} = this.props;
        let o;
        if (typeof s == "string" || typeof s == "object") {
            const u = Ih(this.props, s, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            u && (o = u[e])
        }
        if (s && o !== void 0)
            return o;
        const l = this.getBaseTargetFromProps(this.props, e);
        return l !== void 0 && !zt(l) ? l : this.initialValues[e] !== void 0 && o === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new tp),
        this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
}
class ib extends zO {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = rS
    }
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {vars: n, style: s}) {
        delete n[e],
        delete s[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        zt(e) && (this.childSubscription = e.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function UO(t) {
    return window.getComputedStyle(t)
}
class $O extends ib {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = QS
    }
    readValueFromInstance(e, n) {
        if (Oi.has(n)) {
            const s = qh(n);
            return s && s.default || 0
        } else {
            const s = UO(e)
              , o = (Ww(n) ? s.getPropertyValue(n) : s[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: n}) {
        return AS(e, n)
    }
    build(e, n, s) {
        up(e, n, s.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n, s) {
        return ap(e, n, s)
    }
}
class HO extends ib {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = mt
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (Oi.has(n)) {
            const s = qh(n);
            return s && s.default || 0
        }
        return n = KS.has(n) ? n : np(n),
        e.getAttribute(n)
    }
    scrapeMotionValuesFromProps(e, n, s) {
        return XS(e, n, s)
    }
    build(e, n, s) {
        cp(e, n, this.isSVGTag, s.transformTemplate)
    }
    renderInstance(e, n, s, o) {
        ZS(e, n, s, o)
    }
    mount(e) {
        this.isSVGTag = dp(e.tagName),
        super.mount(e)
    }
}
const WO = (t, e) => op(t) ? new HO(e) : new $O(e,{
    allowProjection: t !== C.Fragment
})
  , qO = LO({
    ...RR,
    ...tO,
    ...HN,
    ...nO
}, WO)
  , rn = Ek(qO);
var nt = {}, Ml = {}, Il = {}, Ll = {}, wf, r0;
function QO() {
    if (r0)
        return wf;
    r0 = 1;
    var t = "Expected a function"
      , e = NaN
      , n = "[object Symbol]"
      , s = /^\s+|\s+$/g
      , o = /^[-+]0x[0-9a-f]+$/i
      , l = /^0b[01]+$/i
      , u = /^0o[0-7]+$/i
      , d = parseInt
      , f = typeof Pl == "object" && Pl && Pl.Object === Object && Pl
      , h = typeof self == "object" && self && self.Object === Object && self
      , m = f || h || Function("return this")()
      , y = Object.prototype
      , v = y.toString
      , w = Math.max
      , b = Math.min
      , S = function() {
        return m.Date.now()
    };
    function T(B, F, W) {
        var X, G, Q, O, q, V, me = 0, ce = !1, se = !1, H = !0;
        if (typeof B != "function")
            throw new TypeError(t);
        F = L(F) || 0,
        P(W) && (ce = !!W.leading,
        se = "maxWait"in W,
        Q = se ? w(L(W.maxWait) || 0, F) : Q,
        H = "trailing"in W ? !!W.trailing : H);
        function ie(Te) {
            var Oe = X
              , Ze = G;
            return X = G = void 0,
            me = Te,
            O = B.apply(Ze, Oe),
            O
        }
        function ne(Te) {
            return me = Te,
            q = setTimeout(be, F),
            ce ? ie(Te) : O
        }
        function D(Te) {
            var Oe = Te - V
              , Ze = Te - me
              , It = F - Oe;
            return se ? b(It, Q - Ze) : It
        }
        function Z(Te) {
            var Oe = Te - V
              , Ze = Te - me;
            return V === void 0 || Oe >= F || Oe < 0 || se && Ze >= Q
        }
        function be() {
            var Te = S();
            if (Z(Te))
                return Ce(Te);
            q = setTimeout(be, D(Te))
        }
        function Ce(Te) {
            return q = void 0,
            H && X ? ie(Te) : (X = G = void 0,
            O)
        }
        function Ie() {
            q !== void 0 && clearTimeout(q),
            me = 0,
            X = V = G = q = void 0
        }
        function Le() {
            return q === void 0 ? O : Ce(S())
        }
        function Ne() {
            var Te = S()
              , Oe = Z(Te);
            if (X = arguments,
            G = this,
            V = Te,
            Oe) {
                if (q === void 0)
                    return ne(V);
                if (se)
                    return q = setTimeout(be, F),
                    ie(V)
            }
            return q === void 0 && (q = setTimeout(be, F)),
            O
        }
        return Ne.cancel = Ie,
        Ne.flush = Le,
        Ne
    }
    function _(B, F, W) {
        var X = !0
          , G = !0;
        if (typeof B != "function")
            throw new TypeError(t);
        return P(W) && (X = "leading"in W ? !!W.leading : X,
        G = "trailing"in W ? !!W.trailing : G),
        T(B, F, {
            leading: X,
            maxWait: F,
            trailing: G
        })
    }
    function P(B) {
        var F = typeof B;
        return !!B && (F == "object" || F == "function")
    }
    function A(B) {
        return !!B && typeof B == "object"
    }
    function I(B) {
        return typeof B == "symbol" || A(B) && v.call(B) == n
    }
    function L(B) {
        if (typeof B == "number")
            return B;
        if (I(B))
            return e;
        if (P(B)) {
            var F = typeof B.valueOf == "function" ? B.valueOf() : B;
            B = P(F) ? F + "" : F
        }
        if (typeof B != "string")
            return B === 0 ? B : +B;
        B = B.replace(s, "");
        var W = l.test(B);
        return W || u.test(B) ? d(B.slice(2), W ? 2 : 8) : o.test(B) ? e : +B
    }
    return wf = _,
    wf
}
var Co = {}, i0;
function fp() {
    if (i0)
        return Co;
    i0 = 1,
    Object.defineProperty(Co, "__esModule", {
        value: !0
    }),
    Co.addPassiveEventListener = function(n, s, o) {
        var l = o.name;
        l || (l = s,
        console.warn("Listener must be a named function.")),
        t.has(s) || t.set(s, new Set);
        var u = t.get(s);
        if (!u.has(l)) {
            var d = (function() {
                var f = !1;
                try {
                    var h = Object.defineProperty({}, "passive", {
                        get: function() {
                            f = !0
                        }
                    });
                    window.addEventListener("test", null, h)
                } catch {}
                return f
            }
            )();
            n.addEventListener(s, o, d ? {
                passive: !0
            } : !1),
            u.add(l)
        }
    }
    ,
    Co.removePassiveEventListener = function(n, s, o) {
        n.removeEventListener(s, o),
        t.get(s).delete(o.name || s)
    }
    ;
    var t = new Map;
    return Co
}
var s0;
function hp() {
    if (s0)
        return Ll;
    s0 = 1,
    Object.defineProperty(Ll, "__esModule", {
        value: !0
    });
    var t = QO()
      , e = s(t)
      , n = fp();
    function s(u) {
        return u && u.__esModule ? u : {
            default: u
        }
    }
    var o = function(d) {
        var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
        return (0,
        e.default)(d, f)
    }
      , l = {
        spyCallbacks: [],
        spySetState: [],
        scrollSpyContainers: [],
        mount: function(d, f) {
            if (d) {
                var h = o(function(m) {
                    l.scrollHandler(d)
                }, f);
                return l.scrollSpyContainers.push(d),
                (0,
                n.addPassiveEventListener)(d, "scroll", h),
                function() {
                    (0,
                    n.removePassiveEventListener)(d, "scroll", h),
                    l.scrollSpyContainers.splice(l.scrollSpyContainers.indexOf(d), 1)
                }
            }
            return function() {}
        },
        isMounted: function(d) {
            return l.scrollSpyContainers.indexOf(d) !== -1
        },
        currentPositionX: function(d) {
            if (d === document) {
                var f = window.scrollY !== void 0
                  , h = (document.compatMode || "") === "CSS1Compat";
                return f ? window.scrollX : h ? document.documentElement.scrollLeft : document.body.scrollLeft
            } else
                return d.scrollLeft
        },
        currentPositionY: function(d) {
            if (d === document) {
                var f = window.scrollX !== void 0
                  , h = (document.compatMode || "") === "CSS1Compat";
                return f ? window.scrollY : h ? document.documentElement.scrollTop : document.body.scrollTop
            } else
                return d.scrollTop
        },
        scrollHandler: function(d) {
            var f = l.scrollSpyContainers[l.scrollSpyContainers.indexOf(d)].spyCallbacks || [];
            f.forEach(function(h) {
                return h(l.currentPositionX(d), l.currentPositionY(d))
            })
        },
        addStateHandler: function(d) {
            l.spySetState.push(d)
        },
        addSpyHandler: function(d, f) {
            var h = l.scrollSpyContainers[l.scrollSpyContainers.indexOf(f)];
            h.spyCallbacks || (h.spyCallbacks = []),
            h.spyCallbacks.push(d)
        },
        updateStates: function() {
            l.spySetState.forEach(function(d) {
                return d()
            })
        },
        unmount: function(d, f) {
            l.scrollSpyContainers.forEach(function(h) {
                return h.spyCallbacks && h.spyCallbacks.length && h.spyCallbacks.indexOf(f) > -1 && h.spyCallbacks.splice(h.spyCallbacks.indexOf(f), 1)
            }),
            l.spySetState && l.spySetState.length && l.spySetState.indexOf(d) > -1 && l.spySetState.splice(l.spySetState.indexOf(d), 1),
            document.removeEventListener("scroll", l.scrollHandler)
        },
        update: function() {
            return l.scrollSpyContainers.forEach(function(d) {
                return l.scrollHandler(d)
            })
        }
    };
    return Ll.default = l,
    Ll
}
var jl = {}, Vl = {}, o0;
function Xu() {
    if (o0)
        return Vl;
    o0 = 1,
    Object.defineProperty(Vl, "__esModule", {
        value: !0
    });
    var t = function(d, f) {
        var h = d.indexOf("#") === 0 ? d.substring(1) : d
          , m = h ? "#" + h : ""
          , y = window && window.location
          , v = m ? y.pathname + y.search + m : y.pathname + y.search;
        f ? history.pushState(history.state, "", v) : history.replaceState(history.state, "", v)
    }
      , e = function() {
        return window.location.hash.replace(/^#/, "")
    }
      , n = function(d) {
        return function(f) {
            return d.contains ? d != f && d.contains(f) : !!(d.compareDocumentPosition(f) & 16)
        }
    }
      , s = function(d) {
        return getComputedStyle(d).position !== "static"
    }
      , o = function(d, f) {
        for (var h = d.offsetTop, m = d.offsetParent; m && !f(m); )
            h += m.offsetTop,
            m = m.offsetParent;
        return {
            offsetTop: h,
            offsetParent: m
        }
    }
      , l = function(d, f, h) {
        if (h)
            return d === document ? f.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(d).position !== "static" ? f.offsetLeft : f.offsetLeft - d.offsetLeft;
        if (d === document)
            return f.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
        if (s(d)) {
            if (f.offsetParent !== d) {
                var m = function(T) {
                    return T === d || T === document
                }
                  , y = o(f, m)
                  , v = y.offsetTop
                  , w = y.offsetParent;
                if (w !== d)
                    throw new Error("Seems containerElement is not an ancestor of the Element");
                return v
            }
            return f.offsetTop
        }
        if (f.offsetParent === d.offsetParent)
            return f.offsetTop - d.offsetTop;
        var b = function(T) {
            return T === document
        };
        return o(f, b).offsetTop - o(d, b).offsetTop
    };
    return Vl.default = {
        updateHash: t,
        getHash: e,
        filterElementInContainer: n,
        scrollOffset: l
    },
    Vl
}
var Fl = {}, Bl = {}, a0;
function KO() {
    return a0 || (a0 = 1,
    Object.defineProperty(Bl, "__esModule", {
        value: !0
    }),
    Bl.default = {
        defaultEasing: function(e) {
            return e < .5 ? Math.pow(e * 2, 2) / 2 : 1 - Math.pow((1 - e) * 2, 2) / 2
        },
        linear: function(e) {
            return e
        },
        easeInQuad: function(e) {
            return e * e
        },
        easeOutQuad: function(e) {
            return e * (2 - e)
        },
        easeInOutQuad: function(e) {
            return e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e
        },
        easeInCubic: function(e) {
            return e * e * e
        },
        easeOutCubic: function(e) {
            return --e * e * e + 1
        },
        easeInOutCubic: function(e) {
            return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
        },
        easeInQuart: function(e) {
            return e * e * e * e
        },
        easeOutQuart: function(e) {
            return 1 - --e * e * e * e
        },
        easeInOutQuart: function(e) {
            return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
        },
        easeInQuint: function(e) {
            return e * e * e * e * e
        },
        easeOutQuint: function(e) {
            return 1 + --e * e * e * e * e
        },
        easeInOutQuint: function(e) {
            return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
        }
    }),
    Bl
}
var zl = {}, l0;
function ZO() {
    if (l0)
        return zl;
    l0 = 1,
    Object.defineProperty(zl, "__esModule", {
        value: !0
    });
    var t = fp()
      , e = ["mousedown", "wheel", "touchmove", "keydown"];
    return zl.default = {
        subscribe: function(s) {
            return typeof document < "u" && e.forEach(function(o) {
                return (0,
                t.addPassiveEventListener)(document, o, s)
            })
        }
    },
    zl
}
var Ul = {}, u0;
function pp() {
    if (u0)
        return Ul;
    u0 = 1,
    Object.defineProperty(Ul, "__esModule", {
        value: !0
    });
    var t = {
        registered: {},
        scrollEvent: {
            register: function(n, s) {
                t.registered[n] = s
            },
            remove: function(n) {
                t.registered[n] = null
            }
        }
    };
    return Ul.default = t,
    Ul
}
var c0;
function sb() {
    if (c0)
        return Fl;
    c0 = 1,
    Object.defineProperty(Fl, "__esModule", {
        value: !0
    });
    var t = Object.assign || function(G) {
        for (var Q = 1; Q < arguments.length; Q++) {
            var O = arguments[Q];
            for (var q in O)
                Object.prototype.hasOwnProperty.call(O, q) && (G[q] = O[q])
        }
        return G
    }
      , e = Xu();
    f(e);
    var n = KO()
      , s = f(n)
      , o = ZO()
      , l = f(o)
      , u = pp()
      , d = f(u);
    function f(G) {
        return G && G.__esModule ? G : {
            default: G
        }
    }
    var h = function(Q) {
        return s.default[Q.smooth] || s.default.defaultEasing
    }
      , m = function(Q) {
        return typeof Q == "function" ? Q : function() {
            return Q
        }
    }
      , y = function() {
        if (typeof window < "u")
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame
    }
      , v = (function() {
        return y() || function(G, Q, O) {
            window.setTimeout(G, O || 1e3 / 60, new Date().getTime())
        }
    }
    )()
      , w = function() {
        return {
            currentPosition: 0,
            startPosition: 0,
            targetPosition: 0,
            progress: 0,
            duration: 0,
            cancel: !1,
            target: null,
            containerElement: null,
            to: null,
            start: null,
            delta: null,
            percent: null,
            delayTimeout: null
        }
    }
      , b = function(Q) {
        var O = Q.data.containerElement;
        if (O && O !== document && O !== document.body)
            return O.scrollLeft;
        var q = window.pageXOffset !== void 0
          , V = (document.compatMode || "") === "CSS1Compat";
        return q ? window.pageXOffset : V ? document.documentElement.scrollLeft : document.body.scrollLeft
    }
      , S = function(Q) {
        var O = Q.data.containerElement;
        if (O && O !== document && O !== document.body)
            return O.scrollTop;
        var q = window.pageXOffset !== void 0
          , V = (document.compatMode || "") === "CSS1Compat";
        return q ? window.pageYOffset : V ? document.documentElement.scrollTop : document.body.scrollTop
    }
      , T = function(Q) {
        var O = Q.data.containerElement;
        if (O && O !== document && O !== document.body)
            return O.scrollWidth - O.offsetWidth;
        var q = document.body
          , V = document.documentElement;
        return Math.max(q.scrollWidth, q.offsetWidth, V.clientWidth, V.scrollWidth, V.offsetWidth)
    }
      , _ = function(Q) {
        var O = Q.data.containerElement;
        if (O && O !== document && O !== document.body)
            return O.scrollHeight - O.offsetHeight;
        var q = document.body
          , V = document.documentElement;
        return Math.max(q.scrollHeight, q.offsetHeight, V.clientHeight, V.scrollHeight, V.offsetHeight)
    }
      , P = function G(Q, O, q) {
        var V = O.data;
        if (!O.ignoreCancelEvents && V.cancel) {
            d.default.registered.end && d.default.registered.end(V.to, V.target, V.currentPositionY);
            return
        }
        if (V.delta = Math.round(V.targetPosition - V.startPosition),
        V.start === null && (V.start = q),
        V.progress = q - V.start,
        V.percent = V.progress >= V.duration ? 1 : Q(V.progress / V.duration),
        V.currentPosition = V.startPosition + Math.ceil(V.delta * V.percent),
        V.containerElement && V.containerElement !== document && V.containerElement !== document.body ? O.horizontal ? V.containerElement.scrollLeft = V.currentPosition : V.containerElement.scrollTop = V.currentPosition : O.horizontal ? window.scrollTo(V.currentPosition, 0) : window.scrollTo(0, V.currentPosition),
        V.percent < 1) {
            var me = G.bind(null, Q, O);
            v.call(window, me);
            return
        }
        d.default.registered.end && d.default.registered.end(V.to, V.target, V.currentPosition)
    }
      , A = function(Q) {
        Q.data.containerElement = Q ? Q.containerId ? document.getElementById(Q.containerId) : Q.container && Q.container.nodeType ? Q.container : document : null
    }
      , I = function(Q, O, q, V) {
        O.data = O.data || w(),
        window.clearTimeout(O.data.delayTimeout);
        var me = function() {
            O.data.cancel = !0
        };
        if (l.default.subscribe(me),
        A(O),
        O.data.start = null,
        O.data.cancel = !1,
        O.data.startPosition = O.horizontal ? b(O) : S(O),
        O.data.targetPosition = O.absolute ? Q : Q + O.data.startPosition,
        O.data.startPosition === O.data.targetPosition) {
            d.default.registered.end && d.default.registered.end(O.data.to, O.data.target, O.data.currentPosition);
            return
        }
        O.data.delta = Math.round(O.data.targetPosition - O.data.startPosition),
        O.data.duration = m(O.duration)(O.data.delta),
        O.data.duration = isNaN(parseFloat(O.data.duration)) ? 1e3 : parseFloat(O.data.duration),
        O.data.to = q,
        O.data.target = V;
        var ce = h(O)
          , se = P.bind(null, ce, O);
        if (O && O.delay > 0) {
            O.data.delayTimeout = window.setTimeout(function() {
                d.default.registered.begin && d.default.registered.begin(O.data.to, O.data.target),
                v.call(window, se)
            }, O.delay);
            return
        }
        d.default.registered.begin && d.default.registered.begin(O.data.to, O.data.target),
        v.call(window, se)
    }
      , L = function(Q) {
        return Q = t({}, Q),
        Q.data = Q.data || w(),
        Q.absolute = !0,
        Q
    }
      , B = function(Q) {
        I(0, L(Q))
    }
      , F = function(Q, O) {
        I(Q, L(O))
    }
      , W = function(Q) {
        Q = L(Q),
        A(Q),
        I(Q.horizontal ? T(Q) : _(Q), Q)
    }
      , X = function(Q, O) {
        O = L(O),
        A(O);
        var q = O.horizontal ? b(O) : S(O);
        I(Q + q, O)
    };
    return Fl.default = {
        animateTopScroll: I,
        getAnimationType: h,
        scrollToTop: B,
        scrollToBottom: W,
        scrollTo: F,
        scrollMore: X
    },
    Fl
}
var d0;
function Yu() {
    if (d0)
        return jl;
    d0 = 1,
    Object.defineProperty(jl, "__esModule", {
        value: !0
    });
    var t = Object.assign || function(m) {
        for (var y = 1; y < arguments.length; y++) {
            var v = arguments[y];
            for (var w in v)
                Object.prototype.hasOwnProperty.call(v, w) && (m[w] = v[w])
        }
        return m
    }
      , e = Xu()
      , n = d(e)
      , s = sb()
      , o = d(s)
      , l = pp()
      , u = d(l);
    function d(m) {
        return m && m.__esModule ? m : {
            default: m
        }
    }
    var f = {}
      , h = void 0;
    return jl.default = {
        unmount: function() {
            f = {}
        },
        register: function(y, v) {
            f[y] = v
        },
        unregister: function(y) {
            delete f[y]
        },
        get: function(y) {
            return f[y] || document.getElementById(y) || document.getElementsByName(y)[0] || document.getElementsByClassName(y)[0]
        },
        setActiveLink: function(y) {
            return h = y
        },
        getActiveLink: function() {
            return h
        },
        scrollTo: function(y, v) {
            var w = this.get(y);
            if (!w) {
                console.warn("target Element not found");
                return
            }
            v = t({}, v, {
                absolute: !1
            });
            var b = v.containerId
              , S = v.container
              , T = void 0;
            b ? T = document.getElementById(b) : S && S.nodeType ? T = S : T = document,
            v.absolute = !0;
            var _ = v.horizontal
              , P = n.default.scrollOffset(T, w, _) + (v.offset || 0);
            if (!v.smooth) {
                u.default.registered.begin && u.default.registered.begin(y, w),
                T === document ? v.horizontal ? window.scrollTo(P, 0) : window.scrollTo(0, P) : T.scrollTop = P,
                u.default.registered.end && u.default.registered.end(y, w);
                return
            }
            o.default.animateTopScroll(P, v, y, w)
        }
    },
    jl
}
var Sf = {
    exports: {}
}, bf, f0;
function GO() {
    if (f0)
        return bf;
    f0 = 1;
    var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return bf = t,
    bf
}
var Tf, h0;
function XO() {
    if (h0)
        return Tf;
    h0 = 1;
    var t = GO();
    function e() {}
    function n() {}
    return n.resetWarningCache = e,
    Tf = function() {
        function s(u, d, f, h, m, y) {
            if (y !== t) {
                var v = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw v.name = "Invariant Violation",
                v
            }
        }
        s.isRequired = s;
        function o() {
            return s
        }
        var l = {
            array: s,
            bigint: s,
            bool: s,
            func: s,
            number: s,
            object: s,
            string: s,
            symbol: s,
            any: s,
            arrayOf: o,
            element: s,
            elementType: s,
            instanceOf: o,
            node: s,
            objectOf: o,
            oneOf: o,
            oneOfType: o,
            shape: o,
            exact: o,
            checkPropTypes: n,
            resetWarningCache: e
        };
        return l.PropTypes = l,
        l
    }
    ,
    Tf
}
var p0;
function Ju() {
    return p0 || (p0 = 1,
    Sf.exports = XO()()),
    Sf.exports
}
var $l = {}, m0;
function ob() {
    if (m0)
        return $l;
    m0 = 1,
    Object.defineProperty($l, "__esModule", {
        value: !0
    }),
    fp();
    var t = Xu()
      , e = n(t);
    function n(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }
    var s = {
        mountFlag: !1,
        initialized: !1,
        scroller: null,
        containers: {},
        mount: function(l) {
            this.scroller = l,
            this.handleHashChange = this.handleHashChange.bind(this),
            window.addEventListener("hashchange", this.handleHashChange),
            this.initStateFromHash(),
            this.mountFlag = !0
        },
        mapContainer: function(l, u) {
            this.containers[l] = u
        },
        isMounted: function() {
            return this.mountFlag
        },
        isInitialized: function() {
            return this.initialized
        },
        initStateFromHash: function() {
            var l = this
              , u = this.getHash();
            u ? window.setTimeout(function() {
                l.scrollTo(u, !0),
                l.initialized = !0
            }, 10) : this.initialized = !0
        },
        scrollTo: function(l, u) {
            var d = this.scroller
              , f = d.get(l);
            if (f && (u || l !== d.getActiveLink())) {
                var h = this.containers[l] || document;
                d.scrollTo(l, {
                    container: h
                })
            }
        },
        getHash: function() {
            return e.default.getHash()
        },
        changeHash: function(l, u) {
            this.isInitialized() && e.default.getHash() !== l && e.default.updateHash(l, u)
        },
        handleHashChange: function() {
            this.scrollTo(this.getHash())
        },
        unmount: function() {
            this.scroller = null,
            this.containers = null,
            window.removeEventListener("hashchange", this.handleHashChange)
        }
    };
    return $l.default = s,
    $l
}
var g0;
function mp() {
    if (g0)
        return Il;
    g0 = 1,
    Object.defineProperty(Il, "__esModule", {
        value: !0
    });
    var t = Object.assign || function(_) {
        for (var P = 1; P < arguments.length; P++) {
            var A = arguments[P];
            for (var I in A)
                Object.prototype.hasOwnProperty.call(A, I) && (_[I] = A[I])
        }
        return _
    }
      , e = (function() {
        function _(P, A) {
            for (var I = 0; I < A.length; I++) {
                var L = A[I];
                L.enumerable = L.enumerable || !1,
                L.configurable = !0,
                "value"in L && (L.writable = !0),
                Object.defineProperty(P, L.key, L)
            }
        }
        return function(P, A, I) {
            return A && _(P.prototype, A),
            I && _(P, I),
            P
        }
    }
    )()
      , n = nr()
      , s = v(n)
      , o = hp()
      , l = v(o)
      , u = Yu()
      , d = v(u)
      , f = Ju()
      , h = v(f)
      , m = ob()
      , y = v(m);
    function v(_) {
        return _ && _.__esModule ? _ : {
            default: _
        }
    }
    function w(_, P) {
        if (!(_ instanceof P))
            throw new TypeError("Cannot call a class as a function")
    }
    function b(_, P) {
        if (!_)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return P && (typeof P == "object" || typeof P == "function") ? P : _
    }
    function S(_, P) {
        if (typeof P != "function" && P !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof P);
        _.prototype = Object.create(P && P.prototype, {
            constructor: {
                value: _,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        P && (Object.setPrototypeOf ? Object.setPrototypeOf(_, P) : _.__proto__ = P)
    }
    var T = {
        to: h.default.string.isRequired,
        containerId: h.default.string,
        container: h.default.object,
        activeClass: h.default.string,
        activeStyle: h.default.object,
        spy: h.default.bool,
        horizontal: h.default.bool,
        smooth: h.default.oneOfType([h.default.bool, h.default.string]),
        offset: h.default.number,
        delay: h.default.number,
        isDynamic: h.default.bool,
        onClick: h.default.func,
        duration: h.default.oneOfType([h.default.number, h.default.func]),
        absolute: h.default.bool,
        onSetActive: h.default.func,
        onSetInactive: h.default.func,
        ignoreCancelEvents: h.default.bool,
        hashSpy: h.default.bool,
        saveHashHistory: h.default.bool,
        spyThrottle: h.default.number
    };
    return Il.default = function(_, P) {
        var A = P || d.default
          , I = (function(B) {
            S(F, B);
            function F(W) {
                w(this, F);
                var X = b(this, (F.__proto__ || Object.getPrototypeOf(F)).call(this, W));
                return L.call(X),
                X.state = {
                    active: !1
                },
                X.beforeUnmountCallbacks = [],
                X
            }
            return e(F, [{
                key: "getScrollSpyContainer",
                value: function() {
                    var X = this.props.containerId
                      , G = this.props.container;
                    return X && !G ? document.getElementById(X) : G && G.nodeType ? G : document
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    if (this.props.spy || this.props.hashSpy) {
                        var X = this.getScrollSpyContainer();
                        if (!l.default.isMounted(X)) {
                            var G = l.default.mount(X, this.props.spyThrottle);
                            this.beforeUnmountCallbacks.push(G)
                        }
                        this.props.hashSpy && (y.default.isMounted() || y.default.mount(A),
                        y.default.mapContainer(this.props.to, X)),
                        l.default.addSpyHandler(this.spyHandler, X),
                        this.setState({
                            container: X
                        })
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    l.default.unmount(this.stateHandler, this.spyHandler),
                    this.beforeUnmountCallbacks.forEach(function(X) {
                        return X()
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var X = "";
                    this.state && this.state.active ? X = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : X = this.props.className;
                    var G = {};
                    this.state && this.state.active ? G = t({}, this.props.style, this.props.activeStyle) : G = t({}, this.props.style);
                    var Q = t({}, this.props);
                    for (var O in T)
                        Q.hasOwnProperty(O) && delete Q[O];
                    return Q.className = X,
                    Q.style = G,
                    Q.onClick = this.handleClick,
                    s.default.createElement(_, Q)
                }
            }]),
            F
        }
        )(s.default.PureComponent)
          , L = function() {
            var F = this;
            this.scrollTo = function(W, X) {
                A.scrollTo(W, t({}, F.state, X))
            }
            ,
            this.handleClick = function(W) {
                F.props.onClick && F.props.onClick(W),
                W.stopPropagation && W.stopPropagation(),
                W.preventDefault && W.preventDefault(),
                F.scrollTo(F.props.to, F.props)
            }
            ,
            this.spyHandler = function(W, X) {
                var G = F.getScrollSpyContainer();
                if (!(y.default.isMounted() && !y.default.isInitialized())) {
                    var Q = F.props.horizontal
                      , O = F.props.to
                      , q = null
                      , V = void 0
                      , me = void 0;
                    if (Q) {
                        var ce = 0
                          , se = 0
                          , H = 0;
                        if (G.getBoundingClientRect) {
                            var ie = G.getBoundingClientRect();
                            H = ie.left
                        }
                        if (!q || F.props.isDynamic) {
                            if (q = A.get(O),
                            !q)
                                return;
                            var ne = q.getBoundingClientRect();
                            ce = ne.left - H + W,
                            se = ce + ne.width
                        }
                        var D = W - F.props.offset;
                        V = D >= Math.floor(ce) && D < Math.floor(se),
                        me = D < Math.floor(ce) || D >= Math.floor(se)
                    } else {
                        var Z = 0
                          , be = 0
                          , Ce = 0;
                        if (G.getBoundingClientRect) {
                            var Ie = G.getBoundingClientRect();
                            Ce = Ie.top
                        }
                        if (!q || F.props.isDynamic) {
                            if (q = A.get(O),
                            !q)
                                return;
                            var Le = q.getBoundingClientRect();
                            Z = Le.top - Ce + X,
                            be = Z + Le.height
                        }
                        var Ne = X - F.props.offset;
                        V = Ne >= Math.floor(Z) && Ne < Math.floor(be),
                        me = Ne < Math.floor(Z) || Ne >= Math.floor(be)
                    }
                    var Te = A.getActiveLink();
                    if (me) {
                        if (O === Te && A.setActiveLink(void 0),
                        F.props.hashSpy && y.default.getHash() === O) {
                            var Oe = F.props.saveHashHistory
                              , Ze = Oe === void 0 ? !1 : Oe;
                            y.default.changeHash("", Ze)
                        }
                        F.props.spy && F.state.active && (F.setState({
                            active: !1
                        }),
                        F.props.onSetInactive && F.props.onSetInactive(O, q))
                    }
                    if (V && (Te !== O || F.state.active === !1)) {
                        A.setActiveLink(O);
                        var It = F.props.saveHashHistory
                          , ir = It === void 0 ? !1 : It;
                        F.props.hashSpy && y.default.changeHash(O, ir),
                        F.props.spy && (F.setState({
                            active: !0
                        }),
                        F.props.onSetActive && F.props.onSetActive(O, q))
                    }
                }
            }
        };
        return I.propTypes = T,
        I.defaultProps = {
            offset: 0
        },
        I
    }
    ,
    Il
}
var y0;
function YO() {
    if (y0)
        return Ml;
    y0 = 1,
    Object.defineProperty(Ml, "__esModule", {
        value: !0
    });
    var t = nr()
      , e = o(t)
      , n = mp()
      , s = o(n);
    function o(h) {
        return h && h.__esModule ? h : {
            default: h
        }
    }
    function l(h, m) {
        if (!(h instanceof m))
            throw new TypeError("Cannot call a class as a function")
    }
    function u(h, m) {
        if (!h)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return m && (typeof m == "object" || typeof m == "function") ? m : h
    }
    function d(h, m) {
        if (typeof m != "function" && m !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof m);
        h.prototype = Object.create(m && m.prototype, {
            constructor: {
                value: h,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        m && (Object.setPrototypeOf ? Object.setPrototypeOf(h, m) : h.__proto__ = m)
    }
    var f = (function(h) {
        d(m, h);
        function m() {
            var y, v, w, b;
            l(this, m);
            for (var S = arguments.length, T = Array(S), _ = 0; _ < S; _++)
                T[_] = arguments[_];
            return b = (v = (w = u(this, (y = m.__proto__ || Object.getPrototypeOf(m)).call.apply(y, [this].concat(T))),
            w),
            w.render = function() {
                return e.default.createElement("a", w.props, w.props.children)
            }
            ,
            v),
            u(w, b)
        }
        return m
    }
    )(e.default.Component);
    return Ml.default = (0,
    s.default)(f),
    Ml
}
var Hl = {}, v0;
function JO() {
    if (v0)
        return Hl;
    v0 = 1,
    Object.defineProperty(Hl, "__esModule", {
        value: !0
    });
    var t = (function() {
        function m(y, v) {
            for (var w = 0; w < v.length; w++) {
                var b = v[w];
                b.enumerable = b.enumerable || !1,
                b.configurable = !0,
                "value"in b && (b.writable = !0),
                Object.defineProperty(y, b.key, b)
            }
        }
        return function(y, v, w) {
            return v && m(y.prototype, v),
            w && m(y, w),
            y
        }
    }
    )()
      , e = nr()
      , n = l(e)
      , s = mp()
      , o = l(s);
    function l(m) {
        return m && m.__esModule ? m : {
            default: m
        }
    }
    function u(m, y) {
        if (!(m instanceof y))
            throw new TypeError("Cannot call a class as a function")
    }
    function d(m, y) {
        if (!m)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return y && (typeof y == "object" || typeof y == "function") ? y : m
    }
    function f(m, y) {
        if (typeof y != "function" && y !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof y);
        m.prototype = Object.create(y && y.prototype, {
            constructor: {
                value: m,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        y && (Object.setPrototypeOf ? Object.setPrototypeOf(m, y) : m.__proto__ = y)
    }
    var h = (function(m) {
        f(y, m);
        function y() {
            return u(this, y),
            d(this, (y.__proto__ || Object.getPrototypeOf(y)).apply(this, arguments))
        }
        return t(y, [{
            key: "render",
            value: function() {
                return n.default.createElement("button", this.props, this.props.children)
            }
        }]),
        y
    }
    )(n.default.Component);
    return Hl.default = (0,
    o.default)(h),
    Hl
}
var Wl = {}, ql = {}, x0;
function ab() {
    if (x0)
        return ql;
    x0 = 1,
    Object.defineProperty(ql, "__esModule", {
        value: !0
    });
    var t = Object.assign || function(w) {
        for (var b = 1; b < arguments.length; b++) {
            var S = arguments[b];
            for (var T in S)
                Object.prototype.hasOwnProperty.call(S, T) && (w[T] = S[T])
        }
        return w
    }
      , e = (function() {
        function w(b, S) {
            for (var T = 0; T < S.length; T++) {
                var _ = S[T];
                _.enumerable = _.enumerable || !1,
                _.configurable = !0,
                "value"in _ && (_.writable = !0),
                Object.defineProperty(b, _.key, _)
            }
        }
        return function(b, S, T) {
            return S && w(b.prototype, S),
            T && w(b, T),
            b
        }
    }
    )()
      , n = nr()
      , s = h(n)
      , o = Ou();
    h(o);
    var l = Yu()
      , u = h(l)
      , d = Ju()
      , f = h(d);
    function h(w) {
        return w && w.__esModule ? w : {
            default: w
        }
    }
    function m(w, b) {
        if (!(w instanceof b))
            throw new TypeError("Cannot call a class as a function")
    }
    function y(w, b) {
        if (!w)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return b && (typeof b == "object" || typeof b == "function") ? b : w
    }
    function v(w, b) {
        if (typeof b != "function" && b !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        w.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: w,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(w, b) : w.__proto__ = b)
    }
    return ql.default = function(w) {
        var b = (function(S) {
            v(T, S);
            function T(_) {
                m(this, T);
                var P = y(this, (T.__proto__ || Object.getPrototypeOf(T)).call(this, _));
                return P.childBindings = {
                    domNode: null
                },
                P
            }
            return e(T, [{
                key: "componentDidMount",
                value: function() {
                    if (typeof window > "u")
                        return !1;
                    this.registerElems(this.props.name)
                }
            }, {
                key: "componentDidUpdate",
                value: function(P) {
                    this.props.name !== P.name && this.registerElems(this.props.name)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    if (typeof window > "u")
                        return !1;
                    u.default.unregister(this.props.name)
                }
            }, {
                key: "registerElems",
                value: function(P) {
                    u.default.register(P, this.childBindings.domNode)
                }
            }, {
                key: "render",
                value: function() {
                    return s.default.createElement(w, t({}, this.props, {
                        parentBindings: this.childBindings
                    }))
                }
            }]),
            T
        }
        )(s.default.Component);
        return b.propTypes = {
            name: f.default.string,
            id: f.default.string
        },
        b
    }
    ,
    ql
}
var w0;
function eD() {
    if (w0)
        return Wl;
    w0 = 1,
    Object.defineProperty(Wl, "__esModule", {
        value: !0
    });
    var t = Object.assign || function(w) {
        for (var b = 1; b < arguments.length; b++) {
            var S = arguments[b];
            for (var T in S)
                Object.prototype.hasOwnProperty.call(S, T) && (w[T] = S[T])
        }
        return w
    }
      , e = (function() {
        function w(b, S) {
            for (var T = 0; T < S.length; T++) {
                var _ = S[T];
                _.enumerable = _.enumerable || !1,
                _.configurable = !0,
                "value"in _ && (_.writable = !0),
                Object.defineProperty(b, _.key, _)
            }
        }
        return function(b, S, T) {
            return S && w(b.prototype, S),
            T && w(b, T),
            b
        }
    }
    )()
      , n = nr()
      , s = f(n)
      , o = ab()
      , l = f(o)
      , u = Ju()
      , d = f(u);
    function f(w) {
        return w && w.__esModule ? w : {
            default: w
        }
    }
    function h(w, b) {
        if (!(w instanceof b))
            throw new TypeError("Cannot call a class as a function")
    }
    function m(w, b) {
        if (!w)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return b && (typeof b == "object" || typeof b == "function") ? b : w
    }
    function y(w, b) {
        if (typeof b != "function" && b !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        w.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: w,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(w, b) : w.__proto__ = b)
    }
    var v = (function(w) {
        y(b, w);
        function b() {
            return h(this, b),
            m(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments))
        }
        return e(b, [{
            key: "render",
            value: function() {
                var T = this
                  , _ = t({}, this.props);
                return delete _.name,
                _.parentBindings && delete _.parentBindings,
                s.default.createElement("div", t({}, _, {
                    ref: function(A) {
                        T.props.parentBindings.domNode = A
                    }
                }), this.props.children)
            }
        }]),
        b
    }
    )(s.default.Component);
    return v.propTypes = {
        name: d.default.string,
        id: d.default.string
    },
    Wl.default = (0,
    l.default)(v),
    Wl
}
var _f, S0;
function tD() {
    if (S0)
        return _f;
    S0 = 1;
    var t = Object.assign || function(v) {
        for (var w = 1; w < arguments.length; w++) {
            var b = arguments[w];
            for (var S in b)
                Object.prototype.hasOwnProperty.call(b, S) && (v[S] = b[S])
        }
        return v
    }
      , e = (function() {
        function v(w, b) {
            for (var S = 0; S < b.length; S++) {
                var T = b[S];
                T.enumerable = T.enumerable || !1,
                T.configurable = !0,
                "value"in T && (T.writable = !0),
                Object.defineProperty(w, T.key, T)
            }
        }
        return function(w, b, S) {
            return b && v(w.prototype, b),
            S && v(w, S),
            w
        }
    }
    )();
    function n(v, w) {
        if (!(v instanceof w))
            throw new TypeError("Cannot call a class as a function")
    }
    function s(v, w) {
        if (!v)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return w && (typeof w == "object" || typeof w == "function") ? w : v
    }
    function o(v, w) {
        if (typeof w != "function" && w !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof w);
        v.prototype = Object.create(w && w.prototype, {
            constructor: {
                value: v,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        w && (Object.setPrototypeOf ? Object.setPrototypeOf(v, w) : v.__proto__ = w)
    }
    var l = nr();
    Ou(),
    Xu();
    var u = hp()
      , d = Yu()
      , f = Ju()
      , h = ob()
      , m = {
        to: f.string.isRequired,
        containerId: f.string,
        container: f.object,
        activeClass: f.string,
        spy: f.bool,
        smooth: f.oneOfType([f.bool, f.string]),
        offset: f.number,
        delay: f.number,
        isDynamic: f.bool,
        onClick: f.func,
        duration: f.oneOfType([f.number, f.func]),
        absolute: f.bool,
        onSetActive: f.func,
        onSetInactive: f.func,
        ignoreCancelEvents: f.bool,
        hashSpy: f.bool,
        spyThrottle: f.number
    }
      , y = {
        Scroll: function(w, b) {
            console.warn("Helpers.Scroll is deprecated since v1.7.0");
            var S = b || d
              , T = (function(P) {
                o(A, P);
                function A(I) {
                    n(this, A);
                    var L = s(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, I));
                    return _.call(L),
                    L.state = {
                        active: !1
                    },
                    L
                }
                return e(A, [{
                    key: "getScrollSpyContainer",
                    value: function() {
                        var L = this.props.containerId
                          , B = this.props.container;
                        return L ? document.getElementById(L) : B && B.nodeType ? B : document
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        if (this.props.spy || this.props.hashSpy) {
                            var L = this.getScrollSpyContainer();
                            u.isMounted(L) || u.mount(L, this.props.spyThrottle),
                            this.props.hashSpy && (h.isMounted() || h.mount(S),
                            h.mapContainer(this.props.to, L)),
                            this.props.spy && u.addStateHandler(this.stateHandler),
                            u.addSpyHandler(this.spyHandler, L),
                            this.setState({
                                container: L
                            })
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        u.unmount(this.stateHandler, this.spyHandler)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var L = "";
                        this.state && this.state.active ? L = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : L = this.props.className;
                        var B = t({}, this.props);
                        for (var F in m)
                            B.hasOwnProperty(F) && delete B[F];
                        return B.className = L,
                        B.onClick = this.handleClick,
                        l.createElement(w, B)
                    }
                }]),
                A
            }
            )(l.Component)
              , _ = function() {
                var A = this;
                this.scrollTo = function(I, L) {
                    S.scrollTo(I, t({}, A.state, L))
                }
                ,
                this.handleClick = function(I) {
                    A.props.onClick && A.props.onClick(I),
                    I.stopPropagation && I.stopPropagation(),
                    I.preventDefault && I.preventDefault(),
                    A.scrollTo(A.props.to, A.props)
                }
                ,
                this.stateHandler = function() {
                    S.getActiveLink() !== A.props.to && (A.state !== null && A.state.active && A.props.onSetInactive && A.props.onSetInactive(),
                    A.setState({
                        active: !1
                    }))
                }
                ,
                this.spyHandler = function(I) {
                    var L = A.getScrollSpyContainer();
                    if (!(h.isMounted() && !h.isInitialized())) {
                        var B = A.props.to
                          , F = null
                          , W = 0
                          , X = 0
                          , G = 0;
                        if (L.getBoundingClientRect) {
                            var Q = L.getBoundingClientRect();
                            G = Q.top
                        }
                        if (!F || A.props.isDynamic) {
                            if (F = S.get(B),
                            !F)
                                return;
                            var O = F.getBoundingClientRect();
                            W = O.top - G + I,
                            X = W + O.height
                        }
                        var q = I - A.props.offset
                          , V = q >= Math.floor(W) && q < Math.floor(X)
                          , me = q < Math.floor(W) || q >= Math.floor(X)
                          , ce = S.getActiveLink();
                        if (me)
                            return B === ce && S.setActiveLink(void 0),
                            A.props.hashSpy && h.getHash() === B && h.changeHash(),
                            A.props.spy && A.state.active && (A.setState({
                                active: !1
                            }),
                            A.props.onSetInactive && A.props.onSetInactive()),
                            u.updateStates();
                        if (V && ce !== B)
                            return S.setActiveLink(B),
                            A.props.hashSpy && h.changeHash(B),
                            A.props.spy && (A.setState({
                                active: !0
                            }),
                            A.props.onSetActive && A.props.onSetActive(B)),
                            u.updateStates()
                    }
                }
            };
            return T.propTypes = m,
            T.defaultProps = {
                offset: 0
            },
            T
        },
        Element: function(w) {
            console.warn("Helpers.Element is deprecated since v1.7.0");
            var b = (function(S) {
                o(T, S);
                function T(_) {
                    n(this, T);
                    var P = s(this, (T.__proto__ || Object.getPrototypeOf(T)).call(this, _));
                    return P.childBindings = {
                        domNode: null
                    },
                    P
                }
                return e(T, [{
                    key: "componentDidMount",
                    value: function() {
                        if (typeof window > "u")
                            return !1;
                        this.registerElems(this.props.name)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(P) {
                        this.props.name !== P.name && this.registerElems(this.props.name)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        if (typeof window > "u")
                            return !1;
                        d.unregister(this.props.name)
                    }
                }, {
                    key: "registerElems",
                    value: function(P) {
                        d.register(P, this.childBindings.domNode)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return l.createElement(w, t({}, this.props, {
                            parentBindings: this.childBindings
                        }))
                    }
                }]),
                T
            }
            )(l.Component);
            return b.propTypes = {
                name: f.string,
                id: f.string
            },
            b
        }
    };
    return _f = y,
    _f
}
var b0;
function nD() {
    if (b0)
        return nt;
    b0 = 1,
    Object.defineProperty(nt, "__esModule", {
        value: !0
    }),
    nt.Helpers = nt.ScrollElement = nt.ScrollLink = nt.animateScroll = nt.scrollSpy = nt.Events = nt.scroller = nt.Element = nt.Button = nt.Link = void 0;
    var t = YO()
      , e = I(t)
      , n = JO()
      , s = I(n)
      , o = eD()
      , l = I(o)
      , u = Yu()
      , d = I(u)
      , f = pp()
      , h = I(f)
      , m = hp()
      , y = I(m)
      , v = sb()
      , w = I(v)
      , b = mp()
      , S = I(b)
      , T = ab()
      , _ = I(T)
      , P = tD()
      , A = I(P);
    function I(L) {
        return L && L.__esModule ? L : {
            default: L
        }
    }
    return nt.Link = e.default,
    nt.Button = s.default,
    nt.Element = l.default,
    nt.scroller = d.default,
    nt.Events = h.default,
    nt.scrollSpy = y.default,
    nt.animateScroll = w.default,
    nt.ScrollLink = S.default,
    nt.ScrollElement = _.default,
    nt.Helpers = A.default,
    nt.default = {
        Link: e.default,
        Button: s.default,
        Element: l.default,
        scroller: d.default,
        Events: h.default,
        scrollSpy: y.default,
        animateScroll: w.default,
        ScrollLink: S.default,
        ScrollElement: _.default,
        Helpers: A.default
    },
    nt
}
var jo = nD();
const rD = Bu("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground border border-primary-border",
            destructive: "bg-destructive text-destructive-foreground border border-destructive-border",
            outline: " border [border-color:var(--button-outline)]  shadow-xs active:shadow-none ",
            secondary: "border bg-secondary text-secondary-foreground border border-secondary-border ",
            ghost: "border border-transparent"
        },
        size: {
            default: "min-h-9 px-4 py-2",
            sm: "min-h-8 rounded-md px-3 text-xs",
            lg: "min-h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , ws = C.forwardRef( ({className: t, variant: e, size: n, asChild: s=!1, ...o}, l) => {
    const u = s ? hx : "button";
    return E.jsx(u, {
        className: lt(rD({
            variant: e,
            size: n,
            className: t
        })),
        ref: l,
        ...o
    })
}
);
ws.displayName = "Button";
function iD() {
    const [t,e] = C.useState(!1)
      , [n,s] = C.useState(!1);
    C.useEffect( () => {
        const l = () => {
            s(window.scrollY > 50)
        }
        ;
        return window.addEventListener("scroll", l),
        () => window.removeEventListener("scroll", l)
    }
    , []);
    const o = [{
        name: "About",
        to: "about"
    }, {
        name: "Skills",
        to: "skills"
    }, {
        name: "Projects",
        to: "projects"
    }, {
        name: "Contact",
        to: "contact"
    }];
    return E.jsxs("nav", {
        className: lt("fixed w-full z-50 transition-all duration-300 border-b border-transparent", n ? "bg-background/80 backdrop-blur-md border-border/40 py-4 shadow-lg shadow-primary/5" : "bg-transparent py-6"),
        children: [E.jsxs("div", {
            className: "container mx-auto px-4 md:px-6 flex justify-between items-center",
            children: [E.jsxs(jo.Link, {
                to: "hero",
                smooth: !0,
                duration: 500,
                className: "cursor-pointer flex items-center gap-2 group",
                children: [E.jsx("div", {
                    className: "p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors",
                    children: E.jsx(Lf, {
                        className: "w-6 h-6 text-primary"
                    })
                }), E.jsxs("span", {
                    className: "font-display font-bold text-xl tracking-tight",
                    children: ["Liad", E.jsx("span", {
                        className: "text-primary",
                        children: "Protop"
                    })]
                })]
            }), E.jsxs("div", {
                className: "hidden md:flex items-center gap-8",
                children: [o.map(l => E.jsxs(jo.Link, {
                    to: l.to,
                    smooth: !0,
                    duration: 500,
                    offset: -100,
                    className: "text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors relative group",
                    children: [l.name, E.jsx("span", {
                        className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"
                    })]
                }, l.name)), E.jsx(ws, {
                    variant: "default",
                    className: "ml-4 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all",
                    onClick: () => document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth"
                    }),
                    children: "Hire Me"
                })]
            }), E.jsx("button", {
                className: "md:hidden text-foreground hover:text-primary transition-colors",
                onClick: () => e(!t),
                children: t ? E.jsx(Ux, {
                    className: "w-6 h-6"
                }) : E.jsx(dC, {
                    className: "w-6 h-6"
                })
            })]
        }), t && E.jsxs("div", {
            className: "md:hidden absolute top-full left-0 w-full bg-card/95 backdrop-blur-xl border-b border-border/40 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5",
            children: [o.map(l => E.jsx(jo.Link, {
                to: l.to,
                smooth: !0,
                duration: 500,
                offset: -100,
                className: "text-lg font-medium text-foreground/80 hover:text-primary py-2 border-b border-border/20",
                onClick: () => e(!1),
                children: l.name
            }, l.name)), E.jsx(ws, {
                className: "mt-4 w-full",
                onClick: () => {
                    e(!1),
                    document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth"
                    })
                }
                ,
                children: "Get in Touch"
            })]
        })]
    })
}
function Ql({title: t, subtitle: e, align: n="center"}) {
    return E.jsxs("div", {
        className: `mb-16 ${n === "center" ? "text-center" : "text-left"}`,
        children: [E.jsx(rn.span, {
            initial: {
                opacity: 0,
                y: 10
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .5
            },
            className: "text-primary font-mono text-sm uppercase tracking-wider mb-2 block",
            children: e
        }), E.jsx(rn.h2, {
            initial: {
                opacity: 0,
                y: 10
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .5,
                delay: .1
            },
            className: "text-3xl md:text-5xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60",
            children: t
        }), E.jsx(rn.div, {
            initial: {
                scaleX: 0
            },
            whileInView: {
                scaleX: 1
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .5,
                delay: .2
            },
            className: `h-1 w-24 bg-primary rounded-full mt-4 ${n === "center" ? "mx-auto" : ""}`
        })]
    })
}
function sD({name: t, level: e, icon: n, delay: s}) {
    return E.jsxs(rn.div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: !0
        },
        transition: {
            duration: .5,
            delay: s
        },
        whileHover: {
            y: -5
        },
        className: "bg-card/40 backdrop-blur-sm border border-border/50 p-6 rounded-xl hover:border-primary/50 hover:bg-card/60 transition-all group",
        children: [E.jsxs("div", {
            className: "flex items-start justify-between mb-4",
            children: [E.jsx("div", {
                className: "p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors",
                children: E.jsx(n, {
                    className: "w-6 h-6"
                })
            }), E.jsx("span", {
                className: "text-xs font-mono py-1 px-2 rounded-full bg-secondary text-secondary-foreground border border-border/50",
                children: e
            })]
        }), E.jsx("h3", {
            className: "text-lg font-bold mb-1 font-display",
            children: t
        }), E.jsx("div", {
            className: "w-full bg-secondary h-1.5 rounded-full mt-3 overflow-hidden",
            children: E.jsx(rn.div, {
                className: "h-full bg-primary",
                initial: {
                    width: 0
                },
                whileInView: {
                    width: e === "Advanced" ? "90%" : e === "Intermediate" ? "70%" : "50%"
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: 1,
                    delay: s + .2
                }
            })
        })]
    })
}
function oD() {
    const {toast: t} = dx();
    return eP({
        mutationFn: async e => {
            const n = new FormData;
            if (n.append("name", e.name),
            n.append("email", e.email),
            n.append("message", e.message),
            !(await fetch("https://script.google.com/macros/s/AKfycbx9IkbQNO4C4Cpu-lQHWFALrBPT0dnbkSxI6xTVUVcRjQcBWTOADgQU9kcxQzZ3TQwi/exec", {
                method: "POST",
                body: n
            })).ok)
                throw new Error("Failed to send message");
            return {
                success: !0
            }
        }
        ,
        onSuccess: () => {
            t({
                title: "Message Sent",
                description: "Thank you for reaching out. I'll get back to you shortly.",
                variant: "default"
            })
        }
        ,
        onError: e => {
            t({
                title: "Error",
                description: e.message,
                variant: "destructive"
            })
        }
    })
}
var ha = t => t.type === "checkbox"
  , Ti = t => t instanceof Date
  , Kt = t => t == null;
const lb = t => typeof t == "object";
var vt = t => !Kt(t) && !Array.isArray(t) && lb(t) && !Ti(t)
  , ub = t => vt(t) && t.target ? ha(t.target) ? t.target.checked : t.target.value : t
  , aD = t => t.substring(0, t.search(/\.\d+(\.|$)/)) || t
  , cb = (t, e) => t.has(aD(e))
  , lD = t => {
    const e = t.constructor && t.constructor.prototype;
    return vt(e) && e.hasOwnProperty("isPrototypeOf")
}
  , gp = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Rt(t) {
    let e;
    const n = Array.isArray(t)
      , s = typeof FileList < "u" ? t instanceof FileList : !1;
    if (t instanceof Date)
        e = new Date(t);
    else if (t instanceof Set)
        e = new Set(t);
    else if (!(gp && (t instanceof Blob || s)) && (n || vt(t)))
        if (e = n ? [] : {},
        !n && !lD(t))
            e = t;
        else
            for (const o in t)
                t.hasOwnProperty(o) && (e[o] = Rt(t[o]));
    else
        return t;
    return e
}
var ec = t => Array.isArray(t) ? t.filter(Boolean) : []
  , yt = t => t === void 0
  , ue = (t, e, n) => {
    if (!e || !vt(t))
        return n;
    const s = ec(e.split(/[,[\].]+?/)).reduce( (o, l) => Kt(o) ? o : o[l], t);
    return yt(s) || s === t ? yt(t[e]) ? n : t[e] : s
}
  , un = t => typeof t == "boolean"
  , yp = t => /^\w*$/.test(t)
  , db = t => ec(t.replace(/["|']|\]/g, "").split(/\.|\[/))
  , qe = (t, e, n) => {
    let s = -1;
    const o = yp(e) ? [e] : db(e)
      , l = o.length
      , u = l - 1;
    for (; ++s < l; ) {
        const d = o[s];
        let f = n;
        if (s !== u) {
            const h = t[d];
            f = vt(h) || Array.isArray(h) ? h : isNaN(+o[s + 1]) ? {} : []
        }
        if (d === "__proto__" || d === "constructor" || d === "prototype")
            return;
        t[d] = f,
        t = t[d]
    }
}
;
const xu = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    CHANGE: "change"
}
  , Mn = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all"
}
  , mr = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
}
  , fb = De.createContext(null)
  , tc = () => De.useContext(fb)
  , uD = t => {
    const {children: e, ...n} = t;
    return De.createElement(fb.Provider, {
        value: n
    }, e)
}
;
var hb = (t, e, n, s=!0) => {
    const o = {
        defaultValues: e._defaultValues
    };
    for (const l in t)
        Object.defineProperty(o, l, {
            get: () => {
                const u = l;
                return e._proxyFormState[u] !== Mn.all && (e._proxyFormState[u] = !s || Mn.all),
                n && (n[u] = !0),
                t[u]
            }
        });
    return o
}
;
function cD(t) {
    const e = tc()
      , {control: n=e.control, disabled: s, name: o, exact: l} = t || {}
      , [u,d] = De.useState(n._formState)
      , f = De.useRef({
        isDirty: !1,
        isLoading: !1,
        dirtyFields: !1,
        touchedFields: !1,
        validatingFields: !1,
        isValidating: !1,
        isValid: !1,
        errors: !1
    })
      , h = De.useRef(o);
    return h.current = o,
    De.useEffect( () => n._subscribe({
        name: h.current,
        formState: f.current,
        exact: l,
        callback: m => {
            !s && d({
                ...n._formState,
                ...m
            })
        }
    }), [n, s, l]),
    De.useEffect( () => {
        f.current.isValid && n._setValid(!0)
    }
    , [n]),
    De.useMemo( () => hb(u, n, f.current, !1), [u, n])
}
var Qn = t => typeof t == "string"
  , pb = (t, e, n, s, o) => Qn(t) ? (s && e.watch.add(t),
ue(n, t, o)) : Array.isArray(t) ? t.map(l => (s && e.watch.add(l),
ue(n, l))) : (s && (e.watchAll = !0),
n);
function dD(t) {
    const e = tc()
      , {control: n=e.control, name: s, defaultValue: o, disabled: l, exact: u} = t || {}
      , d = De.useRef(s)
      , f = De.useRef(o);
    d.current = s,
    De.useEffect( () => n._subscribe({
        name: d.current,
        formState: {
            values: !0
        },
        exact: u,
        callback: y => !l && m(pb(d.current, n._names, y.values || n._formValues, !1, f.current))
    }), [n, l, u]);
    const [h,m] = De.useState(n._getWatch(s, o));
    return De.useEffect( () => n._removeUnmounted()),
    h
}
function fD(t) {
    const e = tc()
      , {name: n, disabled: s, control: o=e.control, shouldUnregister: l} = t
      , u = cb(o._names.array, n)
      , d = dD({
        control: o,
        name: n,
        defaultValue: ue(o._formValues, n, ue(o._defaultValues, n, t.defaultValue)),
        exact: !0
    })
      , f = cD({
        control: o,
        name: n,
        exact: !0
    })
      , h = De.useRef(t)
      , m = De.useRef(o.register(n, {
        ...t.rules,
        value: d,
        ...un(t.disabled) ? {
            disabled: t.disabled
        } : {}
    }))
      , y = De.useMemo( () => Object.defineProperties({}, {
        invalid: {
            enumerable: !0,
            get: () => !!ue(f.errors, n)
        },
        isDirty: {
            enumerable: !0,
            get: () => !!ue(f.dirtyFields, n)
        },
        isTouched: {
            enumerable: !0,
            get: () => !!ue(f.touchedFields, n)
        },
        isValidating: {
            enumerable: !0,
            get: () => !!ue(f.validatingFields, n)
        },
        error: {
            enumerable: !0,
            get: () => ue(f.errors, n)
        }
    }), [f, n])
      , v = De.useCallback(T => m.current.onChange({
        target: {
            value: ub(T),
            name: n
        },
        type: xu.CHANGE
    }), [n])
      , w = De.useCallback( () => m.current.onBlur({
        target: {
            value: ue(o._formValues, n),
            name: n
        },
        type: xu.BLUR
    }), [n, o._formValues])
      , b = De.useCallback(T => {
        const _ = ue(o._fields, n);
        _ && T && (_._f.ref = {
            focus: () => T.focus(),
            select: () => T.select(),
            setCustomValidity: P => T.setCustomValidity(P),
            reportValidity: () => T.reportValidity()
        })
    }
    , [o._fields, n])
      , S = De.useMemo( () => ({
        name: n,
        value: d,
        ...un(s) || f.disabled ? {
            disabled: f.disabled || s
        } : {},
        onChange: v,
        onBlur: w,
        ref: b
    }), [n, s, f.disabled, v, w, b, d]);
    return De.useEffect( () => {
        const T = o._options.shouldUnregister || l;
        o.register(n, {
            ...h.current.rules,
            ...un(h.current.disabled) ? {
                disabled: h.current.disabled
            } : {}
        });
        const _ = (P, A) => {
            const I = ue(o._fields, P);
            I && I._f && (I._f.mount = A)
        }
        ;
        if (_(n, !0),
        T) {
            const P = Rt(ue(o._options.defaultValues, n));
            qe(o._defaultValues, n, P),
            yt(ue(o._formValues, n)) && qe(o._formValues, n, P)
        }
        return !u && o.register(n),
        () => {
            (u ? T && !o._state.action : T) ? o.unregister(n) : _(n, !1)
        }
    }
    , [n, o, u, l]),
    De.useEffect( () => {
        o._setDisabledField({
            disabled: s,
            name: n
        })
    }
    , [s, n, o]),
    De.useMemo( () => ({
        field: S,
        formState: f,
        fieldState: y
    }), [S, f, y])
}
const hD = t => t.render(fD(t));
var mb = (t, e, n, s, o) => e ? {
    ...n[t],
    types: {
        ...n[t] && n[t].types ? n[t].types : {},
        [s]: o || !0
    }
} : {}
  , Vo = t => Array.isArray(t) ? t : [t]
  , T0 = () => {
    let t = [];
    return {
        get observers() {
            return t
        },
        next: o => {
            for (const l of t)
                l.next && l.next(o)
        }
        ,
        subscribe: o => (t.push(o),
        {
            unsubscribe: () => {
                t = t.filter(l => l !== o)
            }
        }),
        unsubscribe: () => {
            t = []
        }
    }
}
  , ih = t => Kt(t) || !lb(t);
function Qr(t, e) {
    if (ih(t) || ih(e))
        return t === e;
    if (Ti(t) && Ti(e))
        return t.getTime() === e.getTime();
    const n = Object.keys(t)
      , s = Object.keys(e);
    if (n.length !== s.length)
        return !1;
    for (const o of n) {
        const l = t[o];
        if (!s.includes(o))
            return !1;
        if (o !== "ref") {
            const u = e[o];
            if (Ti(l) && Ti(u) || vt(l) && vt(u) || Array.isArray(l) && Array.isArray(u) ? !Qr(l, u) : l !== u)
                return !1
        }
    }
    return !0
}
var Qt = t => vt(t) && !Object.keys(t).length
  , vp = t => t.type === "file"
  , In = t => typeof t == "function"
  , wu = t => {
    if (!gp)
        return !1;
    const e = t ? t.ownerDocument : 0;
    return t instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement)
}
  , gb = t => t.type === "select-multiple"
  , xp = t => t.type === "radio"
  , pD = t => xp(t) || ha(t)
  , Pf = t => wu(t) && t.isConnected;
function mD(t, e) {
    const n = e.slice(0, -1).length;
    let s = 0;
    for (; s < n; )
        t = yt(t) ? s++ : t[e[s++]];
    return t
}
function gD(t) {
    for (const e in t)
        if (t.hasOwnProperty(e) && !yt(t[e]))
            return !1;
    return !0
}
function bt(t, e) {
    const n = Array.isArray(e) ? e : yp(e) ? [e] : db(e)
      , s = n.length === 1 ? t : mD(t, n)
      , o = n.length - 1
      , l = n[o];
    return s && delete s[l],
    o !== 0 && (vt(s) && Qt(s) || Array.isArray(s) && gD(s)) && bt(t, n.slice(0, -1)),
    t
}
var yb = t => {
    for (const e in t)
        if (In(t[e]))
            return !0;
    return !1
}
;
function Su(t, e={}) {
    const n = Array.isArray(t);
    if (vt(t) || n)
        for (const s in t)
            Array.isArray(t[s]) || vt(t[s]) && !yb(t[s]) ? (e[s] = Array.isArray(t[s]) ? [] : {},
            Su(t[s], e[s])) : Kt(t[s]) || (e[s] = !0);
    return e
}
function vb(t, e, n) {
    const s = Array.isArray(t);
    if (vt(t) || s)
        for (const o in t)
            Array.isArray(t[o]) || vt(t[o]) && !yb(t[o]) ? yt(e) || ih(n[o]) ? n[o] = Array.isArray(t[o]) ? Su(t[o], []) : {
                ...Su(t[o])
            } : vb(t[o], Kt(e) ? {} : e[o], n[o]) : n[o] = !Qr(t[o], e[o]);
    return n
}
var Eo = (t, e) => vb(t, e, Su(e));
const _0 = {
    value: !1,
    isValid: !1
}
  , P0 = {
    value: !0,
    isValid: !0
};
var xb = t => {
    if (Array.isArray(t)) {
        if (t.length > 1) {
            const e = t.filter(n => n && n.checked && !n.disabled).map(n => n.value);
            return {
                value: e,
                isValid: !!e.length
            }
        }
        return t[0].checked && !t[0].disabled ? t[0].attributes && !yt(t[0].attributes.value) ? yt(t[0].value) || t[0].value === "" ? P0 : {
            value: t[0].value,
            isValid: !0
        } : P0 : _0
    }
    return _0
}
  , wb = (t, {valueAsNumber: e, valueAsDate: n, setValueAs: s}) => yt(t) ? t : e ? t === "" ? NaN : t && +t : n && Qn(t) ? new Date(t) : s ? s(t) : t;
const C0 = {
    isValid: !1,
    value: null
};
var Sb = t => Array.isArray(t) ? t.reduce( (e, n) => n && n.checked && !n.disabled ? {
    isValid: !0,
    value: n.value
} : e, C0) : C0;
function E0(t) {
    const e = t.ref;
    return vp(e) ? e.files : xp(e) ? Sb(t.refs).value : gb(e) ? [...e.selectedOptions].map( ({value: n}) => n) : ha(e) ? xb(t.refs).value : wb(yt(e.value) ? t.ref.value : e.value, t)
}
var yD = (t, e, n, s) => {
    const o = {};
    for (const l of t) {
        const u = ue(e, l);
        u && qe(o, l, u._f)
    }
    return {
        criteriaMode: n,
        names: [...t],
        fields: o,
        shouldUseNativeValidation: s
    }
}
  , bu = t => t instanceof RegExp
  , ko = t => yt(t) ? t : bu(t) ? t.source : vt(t) ? bu(t.value) ? t.value.source : t.value : t
  , k0 = t => ({
    isOnSubmit: !t || t === Mn.onSubmit,
    isOnBlur: t === Mn.onBlur,
    isOnChange: t === Mn.onChange,
    isOnAll: t === Mn.all,
    isOnTouch: t === Mn.onTouched
});
const A0 = "AsyncFunction";
var vD = t => !!t && !!t.validate && !!(In(t.validate) && t.validate.constructor.name === A0 || vt(t.validate) && Object.values(t.validate).find(e => e.constructor.name === A0))
  , xD = t => t.mount && (t.required || t.min || t.max || t.maxLength || t.minLength || t.pattern || t.validate)
  , R0 = (t, e, n) => !n && (e.watchAll || e.watch.has(t) || [...e.watch].some(s => t.startsWith(s) && /^\.\w+/.test(t.slice(s.length))));
const Fo = (t, e, n, s) => {
    for (const o of n || Object.keys(t)) {
        const l = ue(t, o);
        if (l) {
            const {_f: u, ...d} = l;
            if (u) {
                if (u.refs && u.refs[0] && e(u.refs[0], o) && !s)
                    return !0;
                if (u.ref && e(u.ref, u.name) && !s)
                    return !0;
                if (Fo(d, e))
                    break
            } else if (vt(d) && Fo(d, e))
                break
        }
    }
}
;
function N0(t, e, n) {
    const s = ue(t, n);
    if (s || yp(n))
        return {
            error: s,
            name: n
        };
    const o = n.split(".");
    for (; o.length; ) {
        const l = o.join(".")
          , u = ue(e, l)
          , d = ue(t, l);
        if (u && !Array.isArray(u) && n !== l)
            return {
                name: n
            };
        if (d && d.type)
            return {
                name: l,
                error: d
            };
        o.pop()
    }
    return {
        name: n
    }
}
var wD = (t, e, n, s) => {
    n(t);
    const {name: o, ...l} = t;
    return Qt(l) || Object.keys(l).length >= Object.keys(e).length || Object.keys(l).find(u => e[u] === (!s || Mn.all))
}
  , SD = (t, e, n) => !t || !e || t === e || Vo(t).some(s => s && (n ? s === e : s.startsWith(e) || e.startsWith(s)))
  , bD = (t, e, n, s, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(e || t) : (n ? s.isOnBlur : o.isOnBlur) ? !t : (n ? s.isOnChange : o.isOnChange) ? t : !0
  , TD = (t, e) => !ec(ue(t, e)).length && bt(t, e)
  , _D = (t, e, n) => {
    const s = Vo(ue(t, n));
    return qe(s, "root", e[n]),
    qe(t, n, s),
    t
}
  , eu = t => Qn(t);
function O0(t, e, n="validate") {
    if (eu(t) || Array.isArray(t) && t.every(eu) || un(t) && !t)
        return {
            type: n,
            message: eu(t) ? t : "",
            ref: e
        }
}
var cs = t => vt(t) && !bu(t) ? t : {
    value: t,
    message: ""
}
  , D0 = async (t, e, n, s, o, l) => {
    const {ref: u, refs: d, required: f, maxLength: h, minLength: m, min: y, max: v, pattern: w, validate: b, name: S, valueAsNumber: T, mount: _} = t._f
      , P = ue(n, S);
    if (!_ || e.has(S))
        return {};
    const A = d ? d[0] : u
      , I = O => {
        o && A.reportValidity && (A.setCustomValidity(un(O) ? "" : O || ""),
        A.reportValidity())
    }
      , L = {}
      , B = xp(u)
      , F = ha(u)
      , W = B || F
      , X = (T || vp(u)) && yt(u.value) && yt(P) || wu(u) && u.value === "" || P === "" || Array.isArray(P) && !P.length
      , G = mb.bind(null, S, s, L)
      , Q = (O, q, V, me=mr.maxLength, ce=mr.minLength) => {
        const se = O ? q : V;
        L[S] = {
            type: O ? me : ce,
            message: se,
            ref: u,
            ...G(O ? me : ce, se)
        }
    }
    ;
    if (l ? !Array.isArray(P) || !P.length : f && (!W && (X || Kt(P)) || un(P) && !P || F && !xb(d).isValid || B && !Sb(d).isValid)) {
        const {value: O, message: q} = eu(f) ? {
            value: !!f,
            message: f
        } : cs(f);
        if (O && (L[S] = {
            type: mr.required,
            message: q,
            ref: A,
            ...G(mr.required, q)
        },
        !s))
            return I(q),
            L
    }
    if (!X && (!Kt(y) || !Kt(v))) {
        let O, q;
        const V = cs(v)
          , me = cs(y);
        if (!Kt(P) && !isNaN(P)) {
            const ce = u.valueAsNumber || P && +P;
            Kt(V.value) || (O = ce > V.value),
            Kt(me.value) || (q = ce < me.value)
        } else {
            const ce = u.valueAsDate || new Date(P)
              , se = ne => new Date(new Date().toDateString() + " " + ne)
              , H = u.type == "time"
              , ie = u.type == "week";
            Qn(V.value) && P && (O = H ? se(P) > se(V.value) : ie ? P > V.value : ce > new Date(V.value)),
            Qn(me.value) && P && (q = H ? se(P) < se(me.value) : ie ? P < me.value : ce < new Date(me.value))
        }
        if ((O || q) && (Q(!!O, V.message, me.message, mr.max, mr.min),
        !s))
            return I(L[S].message),
            L
    }
    if ((h || m) && !X && (Qn(P) || l && Array.isArray(P))) {
        const O = cs(h)
          , q = cs(m)
          , V = !Kt(O.value) && P.length > +O.value
          , me = !Kt(q.value) && P.length < +q.value;
        if ((V || me) && (Q(V, O.message, q.message),
        !s))
            return I(L[S].message),
            L
    }
    if (w && !X && Qn(P)) {
        const {value: O, message: q} = cs(w);
        if (bu(O) && !P.match(O) && (L[S] = {
            type: mr.pattern,
            message: q,
            ref: u,
            ...G(mr.pattern, q)
        },
        !s))
            return I(q),
            L
    }
    if (b) {
        if (In(b)) {
            const O = await b(P, n)
              , q = O0(O, A);
            if (q && (L[S] = {
                ...q,
                ...G(mr.validate, q.message)
            },
            !s))
                return I(q.message),
                L
        } else if (vt(b)) {
            let O = {};
            for (const q in b) {
                if (!Qt(O) && !s)
                    break;
                const V = O0(await b[q](P, n), A, q);
                V && (O = {
                    ...V,
                    ...G(q, V.message)
                },
                I(V.message),
                s && (L[S] = O))
            }
            if (!Qt(O) && (L[S] = {
                ref: A,
                ...O
            },
            !s))
                return L
        }
    }
    return I(!0),
    L
}
;
const PD = {
    mode: Mn.onSubmit,
    reValidateMode: Mn.onChange,
    shouldFocusError: !0
};
function CD(t={}) {
    let e = {
        ...PD,
        ...t
    }
      , n = {
        submitCount: 0,
        isDirty: !1,
        isLoading: In(e.defaultValues),
        isValidating: !1,
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: e.errors || {},
        disabled: e.disabled || !1
    };
    const s = {};
    let o = vt(e.defaultValues) || vt(e.values) ? Rt(e.values || e.defaultValues) || {} : {}, l = e.shouldUnregister ? {} : Rt(o), u = {
        action: !1,
        mount: !1,
        watch: !1
    }, d = {
        mount: new Set,
        disabled: new Set,
        unMount: new Set,
        array: new Set,
        watch: new Set
    }, f, h = 0;
    const m = {
        isDirty: !1,
        dirtyFields: !1,
        validatingFields: !1,
        touchedFields: !1,
        isValidating: !1,
        isValid: !1,
        errors: !1
    };
    let y = {
        ...m
    };
    const v = {
        array: T0(),
        state: T0()
    }
      , w = k0(e.mode)
      , b = k0(e.reValidateMode)
      , S = e.criteriaMode === Mn.all
      , T = R => U => {
        clearTimeout(h),
        h = setTimeout(R, U)
    }
      , _ = async R => {
        if (!e.disabled && (m.isValid || y.isValid || R)) {
            const U = e.resolver ? Qt((await X()).errors) : await Q(s, !0);
            U !== n.isValid && v.state.next({
                isValid: U
            })
        }
    }
      , P = (R, U) => {
        !e.disabled && (m.isValidating || m.validatingFields || y.isValidating || y.validatingFields) && ((R || Array.from(d.mount)).forEach(K => {
            K && (U ? qe(n.validatingFields, K, U) : bt(n.validatingFields, K))
        }
        ),
        v.state.next({
            validatingFields: n.validatingFields,
            isValidating: !Qt(n.validatingFields)
        }))
    }
      , A = (R, U=[], K, fe, le=!0, oe=!0) => {
        if (fe && K && !e.disabled) {
            if (u.action = !0,
            oe && Array.isArray(ue(s, R))) {
                const ge = K(ue(s, R), fe.argA, fe.argB);
                le && qe(s, R, ge)
            }
            if (oe && Array.isArray(ue(n.errors, R))) {
                const ge = K(ue(n.errors, R), fe.argA, fe.argB);
                le && qe(n.errors, R, ge),
                TD(n.errors, R)
            }
            if ((m.touchedFields || y.touchedFields) && oe && Array.isArray(ue(n.touchedFields, R))) {
                const ge = K(ue(n.touchedFields, R), fe.argA, fe.argB);
                le && qe(n.touchedFields, R, ge)
            }
            (m.dirtyFields || y.dirtyFields) && (n.dirtyFields = Eo(o, l)),
            v.state.next({
                name: R,
                isDirty: q(R, U),
                dirtyFields: n.dirtyFields,
                errors: n.errors,
                isValid: n.isValid
            })
        } else
            qe(l, R, U)
    }
      , I = (R, U) => {
        qe(n.errors, R, U),
        v.state.next({
            errors: n.errors
        })
    }
      , L = R => {
        n.errors = R,
        v.state.next({
            errors: n.errors,
            isValid: !1
        })
    }
      , B = (R, U, K, fe) => {
        const le = ue(s, R);
        if (le) {
            const oe = ue(l, R, yt(K) ? ue(o, R) : K);
            yt(oe) || fe && fe.defaultChecked || U ? qe(l, R, U ? oe : E0(le._f)) : ce(R, oe),
            u.mount && _()
        }
    }
      , F = (R, U, K, fe, le) => {
        let oe = !1
          , ge = !1;
        const ze = {
            name: R
        };
        if (!e.disabled) {
            if (!K || fe) {
                (m.isDirty || y.isDirty) && (ge = n.isDirty,
                n.isDirty = ze.isDirty = q(),
                oe = ge !== ze.isDirty);
                const Ge = Qr(ue(o, R), U);
                ge = !!ue(n.dirtyFields, R),
                Ge ? bt(n.dirtyFields, R) : qe(n.dirtyFields, R, !0),
                ze.dirtyFields = n.dirtyFields,
                oe = oe || (m.dirtyFields || y.dirtyFields) && ge !== !Ge
            }
            if (K) {
                const Ge = ue(n.touchedFields, R);
                Ge || (qe(n.touchedFields, R, K),
                ze.touchedFields = n.touchedFields,
                oe = oe || (m.touchedFields || y.touchedFields) && Ge !== K)
            }
            oe && le && v.state.next(ze)
        }
        return oe ? ze : {}
    }
      , W = (R, U, K, fe) => {
        const le = ue(n.errors, R)
          , oe = (m.isValid || y.isValid) && un(U) && n.isValid !== U;
        if (e.delayError && K ? (f = T( () => I(R, K)),
        f(e.delayError)) : (clearTimeout(h),
        f = null,
        K ? qe(n.errors, R, K) : bt(n.errors, R)),
        (K ? !Qr(le, K) : le) || !Qt(fe) || oe) {
            const ge = {
                ...fe,
                ...oe && un(U) ? {
                    isValid: U
                } : {},
                errors: n.errors,
                name: R
            };
            n = {
                ...n,
                ...ge
            },
            v.state.next(ge)
        }
    }
      , X = async R => {
        P(R, !0);
        const U = await e.resolver(l, e.context, yD(R || d.mount, s, e.criteriaMode, e.shouldUseNativeValidation));
        return P(R),
        U
    }
      , G = async R => {
        const {errors: U} = await X(R);
        if (R)
            for (const K of R) {
                const fe = ue(U, K);
                fe ? qe(n.errors, K, fe) : bt(n.errors, K)
            }
        else
            n.errors = U;
        return U
    }
      , Q = async (R, U, K={
        valid: !0
    }) => {
        for (const fe in R) {
            const le = R[fe];
            if (le) {
                const {_f: oe, ...ge} = le;
                if (oe) {
                    const ze = d.array.has(oe.name)
                      , Ge = le._f && vD(le._f);
                    Ge && m.validatingFields && P([fe], !0);
                    const ut = await D0(le, d.disabled, l, S, e.shouldUseNativeValidation && !U, ze);
                    if (Ge && m.validatingFields && P([fe]),
                    ut[oe.name] && (K.valid = !1,
                    U))
                        break;
                    !U && (ue(ut, oe.name) ? ze ? _D(n.errors, ut, oe.name) : qe(n.errors, oe.name, ut[oe.name]) : bt(n.errors, oe.name))
                }
                !Qt(ge) && await Q(ge, U, K)
            }
        }
        return K.valid
    }
      , O = () => {
        for (const R of d.unMount) {
            const U = ue(s, R);
            U && (U._f.refs ? U._f.refs.every(K => !Pf(K)) : !Pf(U._f.ref)) && Oe(R)
        }
        d.unMount = new Set
    }
      , q = (R, U) => !e.disabled && (R && U && qe(l, R, U),
    !Qr(Z(), o))
      , V = (R, U, K) => pb(R, d, {
        ...u.mount ? l : yt(U) ? o : Qn(R) ? {
            [R]: U
        } : U
    }, K, U)
      , me = R => ec(ue(u.mount ? l : o, R, e.shouldUnregister ? ue(o, R, []) : []))
      , ce = (R, U, K={}) => {
        const fe = ue(s, R);
        let le = U;
        if (fe) {
            const oe = fe._f;
            oe && (!oe.disabled && qe(l, R, wb(U, oe)),
            le = wu(oe.ref) && Kt(U) ? "" : U,
            gb(oe.ref) ? [...oe.ref.options].forEach(ge => ge.selected = le.includes(ge.value)) : oe.refs ? ha(oe.ref) ? oe.refs.length > 1 ? oe.refs.forEach(ge => (!ge.defaultChecked || !ge.disabled) && (ge.checked = Array.isArray(le) ? !!le.find(ze => ze === ge.value) : le === ge.value)) : oe.refs[0] && (oe.refs[0].checked = !!le) : oe.refs.forEach(ge => ge.checked = ge.value === le) : vp(oe.ref) ? oe.ref.value = "" : (oe.ref.value = le,
            oe.ref.type || v.state.next({
                name: R,
                values: Rt(l)
            })))
        }
        (K.shouldDirty || K.shouldTouch) && F(R, le, K.shouldTouch, K.shouldDirty, !0),
        K.shouldValidate && D(R)
    }
      , se = (R, U, K) => {
        for (const fe in U) {
            const le = U[fe]
              , oe = `${R}.${fe}`
              , ge = ue(s, oe);
            (d.array.has(R) || vt(le) || ge && !ge._f) && !Ti(le) ? se(oe, le, K) : ce(oe, le, K)
        }
    }
      , H = (R, U, K={}) => {
        const fe = ue(s, R)
          , le = d.array.has(R)
          , oe = Rt(U);
        qe(l, R, oe),
        le ? (v.array.next({
            name: R,
            values: Rt(l)
        }),
        (m.isDirty || m.dirtyFields || y.isDirty || y.dirtyFields) && K.shouldDirty && v.state.next({
            name: R,
            dirtyFields: Eo(o, l),
            isDirty: q(R, oe)
        })) : fe && !fe._f && !Kt(oe) ? se(R, oe, K) : ce(R, oe, K),
        R0(R, d) && v.state.next({
            ...n
        }),
        v.state.next({
            name: u.mount ? R : void 0,
            values: Rt(l)
        })
    }
      , ie = async R => {
        u.mount = !0;
        const U = R.target;
        let K = U.name
          , fe = !0;
        const le = ue(s, K)
          , oe = ge => {
            fe = Number.isNaN(ge) || Ti(ge) && isNaN(ge.getTime()) || Qr(ge, ue(l, K, ge))
        }
        ;
        if (le) {
            let ge, ze;
            const Ge = U.type ? E0(le._f) : ub(R)
              , ut = R.type === xu.BLUR || R.type === xu.FOCUS_OUT
              , sc = !xD(le._f) && !e.resolver && !ue(n.errors, K) && !le._f.deps || bD(ut, ue(n.touchedFields, K), n.isSubmitted, b, w)
              , Li = R0(K, d, ut);
            qe(l, K, Ge),
            ut ? (le._f.onBlur && le._f.onBlur(R),
            f && f(0)) : le._f.onChange && le._f.onChange(R);
            const ji = F(K, Ge, ut)
              , oc = !Qt(ji) || Li;
            if (!ut && v.state.next({
                name: K,
                type: R.type,
                values: Rt(l)
            }),
            sc)
                return (m.isValid || y.isValid) && (e.mode === "onBlur" ? ut && _() : ut || _()),
                oc && v.state.next({
                    name: K,
                    ...Li ? {} : ji
                });
            if (!ut && Li && v.state.next({
                ...n
            }),
            e.resolver) {
                const {errors: Vi} = await X([K]);
                if (oe(Ge),
                fe) {
                    const Vs = N0(n.errors, s, K)
                      , Fi = N0(Vi, s, Vs.name || K);
                    ge = Fi.error,
                    K = Fi.name,
                    ze = Qt(Vi)
                }
            } else
                P([K], !0),
                ge = (await D0(le, d.disabled, l, S, e.shouldUseNativeValidation))[K],
                P([K]),
                oe(Ge),
                fe && (ge ? ze = !1 : (m.isValid || y.isValid) && (ze = await Q(s, !0)));
            fe && (le._f.deps && D(le._f.deps),
            W(K, ze, ge, ji))
        }
    }
      , ne = (R, U) => {
        if (ue(n.errors, U) && R.focus)
            return R.focus(),
            1
    }
      , D = async (R, U={}) => {
        let K, fe;
        const le = Vo(R);
        if (e.resolver) {
            const oe = await G(yt(R) ? R : le);
            K = Qt(oe),
            fe = R ? !le.some(ge => ue(oe, ge)) : K
        } else
            R ? (fe = (await Promise.all(le.map(async oe => {
                const ge = ue(s, oe);
                return await Q(ge && ge._f ? {
                    [oe]: ge
                } : ge)
            }
            ))).every(Boolean),
            !(!fe && !n.isValid) && _()) : fe = K = await Q(s);
        return v.state.next({
            ...!Qn(R) || (m.isValid || y.isValid) && K !== n.isValid ? {} : {
                name: R
            },
            ...e.resolver || !R ? {
                isValid: K
            } : {},
            errors: n.errors
        }),
        U.shouldFocus && !fe && Fo(s, ne, R ? le : d.mount),
        fe
    }
      , Z = R => {
        const U = {
            ...u.mount ? l : o
        };
        return yt(R) ? U : Qn(R) ? ue(U, R) : R.map(K => ue(U, K))
    }
      , be = (R, U) => ({
        invalid: !!ue((U || n).errors, R),
        isDirty: !!ue((U || n).dirtyFields, R),
        error: ue((U || n).errors, R),
        isValidating: !!ue(n.validatingFields, R),
        isTouched: !!ue((U || n).touchedFields, R)
    })
      , Ce = R => {
        R && Vo(R).forEach(U => bt(n.errors, U)),
        v.state.next({
            errors: R ? n.errors : {}
        })
    }
      , Ie = (R, U, K) => {
        const fe = (ue(s, R, {
            _f: {}
        })._f || {}).ref
          , le = ue(n.errors, R) || {}
          , {ref: oe, message: ge, type: ze, ...Ge} = le;
        qe(n.errors, R, {
            ...Ge,
            ...U,
            ref: fe
        }),
        v.state.next({
            name: R,
            errors: n.errors,
            isValid: !1
        }),
        K && K.shouldFocus && fe && fe.focus && fe.focus()
    }
      , Le = (R, U) => In(R) ? v.state.subscribe({
        next: K => R(V(void 0, U), K)
    }) : V(R, U, !0)
      , Ne = R => v.state.subscribe({
        next: U => {
            SD(R.name, U.name, R.exact) && wD(U, R.formState || m, js, R.reRenderRoot) && R.callback({
                values: {
                    ...l
                },
                ...n,
                ...U
            })
        }
    }).unsubscribe
      , Te = R => (u.mount = !0,
    y = {
        ...y,
        ...R.formState
    },
    Ne({
        ...R,
        formState: y
    }))
      , Oe = (R, U={}) => {
        for (const K of R ? Vo(R) : d.mount)
            d.mount.delete(K),
            d.array.delete(K),
            U.keepValue || (bt(s, K),
            bt(l, K)),
            !U.keepError && bt(n.errors, K),
            !U.keepDirty && bt(n.dirtyFields, K),
            !U.keepTouched && bt(n.touchedFields, K),
            !U.keepIsValidating && bt(n.validatingFields, K),
            !e.shouldUnregister && !U.keepDefaultValue && bt(o, K);
        v.state.next({
            values: Rt(l)
        }),
        v.state.next({
            ...n,
            ...U.keepDirty ? {
                isDirty: q()
            } : {}
        }),
        !U.keepIsValid && _()
    }
      , Ze = ({disabled: R, name: U}) => {
        (un(R) && u.mount || R || d.disabled.has(U)) && (R ? d.disabled.add(U) : d.disabled.delete(U))
    }
      , It = (R, U={}) => {
        let K = ue(s, R);
        const fe = un(U.disabled) || un(e.disabled);
        return qe(s, R, {
            ...K || {},
            _f: {
                ...K && K._f ? K._f : {
                    ref: {
                        name: R
                    }
                },
                name: R,
                mount: !0,
                ...U
            }
        }),
        d.mount.add(R),
        K ? Ze({
            disabled: un(U.disabled) ? U.disabled : e.disabled,
            name: R
        }) : B(R, !0, U.value),
        {
            ...fe ? {
                disabled: U.disabled || e.disabled
            } : {},
            ...e.progressive ? {
                required: !!U.required,
                min: ko(U.min),
                max: ko(U.max),
                minLength: ko(U.minLength),
                maxLength: ko(U.maxLength),
                pattern: ko(U.pattern)
            } : {},
            name: R,
            onChange: ie,
            onBlur: ie,
            ref: le => {
                if (le) {
                    It(R, U),
                    K = ue(s, R);
                    const oe = yt(le.value) && le.querySelectorAll && le.querySelectorAll("input,select,textarea")[0] || le
                      , ge = pD(oe)
                      , ze = K._f.refs || [];
                    if (ge ? ze.find(Ge => Ge === oe) : oe === K._f.ref)
                        return;
                    qe(s, R, {
                        _f: {
                            ...K._f,
                            ...ge ? {
                                refs: [...ze.filter(Pf), oe, ...Array.isArray(ue(o, R)) ? [{}] : []],
                                ref: {
                                    type: oe.type,
                                    name: R
                                }
                            } : {
                                ref: oe
                            }
                        }
                    }),
                    B(R, !1, void 0, oe)
                } else
                    K = ue(s, R, {}),
                    K._f && (K._f.mount = !1),
                    (e.shouldUnregister || U.shouldUnregister) && !(cb(d.array, R) && u.action) && d.unMount.add(R)
            }
        }
    }
      , ir = () => e.shouldFocusError && Fo(s, ne, d.mount)
      , Tn = R => {
        un(R) && (v.state.next({
            disabled: R
        }),
        Fo(s, (U, K) => {
            const fe = ue(s, K);
            fe && (U.disabled = fe._f.disabled || R,
            Array.isArray(fe._f.refs) && fe._f.refs.forEach(le => {
                le.disabled = fe._f.disabled || R
            }
            ))
        }
        , 0, !1))
    }
      , Di = (R, U) => async K => {
        let fe;
        K && (K.preventDefault && K.preventDefault(),
        K.persist && K.persist());
        let le = Rt(l);
        if (v.state.next({
            isSubmitting: !0
        }),
        e.resolver) {
            const {errors: oe, values: ge} = await X();
            n.errors = oe,
            le = ge
        } else
            await Q(s);
        if (d.disabled.size)
            for (const oe of d.disabled)
                qe(le, oe, void 0);
        if (bt(n.errors, "root"),
        Qt(n.errors)) {
            v.state.next({
                errors: {}
            });
            try {
                await R(le, K)
            } catch (oe) {
                fe = oe
            }
        } else
            U && await U({
                ...n.errors
            }, K),
            ir(),
            setTimeout(ir);
        if (v.state.next({
            isSubmitted: !0,
            isSubmitting: !1,
            isSubmitSuccessful: Qt(n.errors) && !fe,
            submitCount: n.submitCount + 1,
            errors: n.errors
        }),
        fe)
            throw fe
    }
      , ga = (R, U={}) => {
        ue(s, R) && (yt(U.defaultValue) ? H(R, Rt(ue(o, R))) : (H(R, U.defaultValue),
        qe(o, R, Rt(U.defaultValue))),
        U.keepTouched || bt(n.touchedFields, R),
        U.keepDirty || (bt(n.dirtyFields, R),
        n.isDirty = U.defaultValue ? q(R, Rt(ue(o, R))) : q()),
        U.keepError || (bt(n.errors, R),
        m.isValid && _()),
        v.state.next({
            ...n
        }))
    }
      , Ls = (R, U={}) => {
        const K = R ? Rt(R) : o
          , fe = Rt(K)
          , le = Qt(R)
          , oe = le ? o : fe;
        if (U.keepDefaultValues || (o = K),
        !U.keepValues) {
            if (U.keepDirtyValues) {
                const ge = new Set([...d.mount, ...Object.keys(Eo(o, l))]);
                for (const ze of Array.from(ge))
                    ue(n.dirtyFields, ze) ? qe(oe, ze, ue(l, ze)) : H(ze, ue(oe, ze))
            } else {
                if (gp && yt(R))
                    for (const ge of d.mount) {
                        const ze = ue(s, ge);
                        if (ze && ze._f) {
                            const Ge = Array.isArray(ze._f.refs) ? ze._f.refs[0] : ze._f.ref;
                            if (wu(Ge)) {
                                const ut = Ge.closest("form");
                                if (ut) {
                                    ut.reset();
                                    break
                                }
                            }
                        }
                    }
                for (const ge of d.mount)
                    H(ge, ue(oe, ge))
            }
            l = Rt(oe),
            v.array.next({
                values: {
                    ...oe
                }
            }),
            v.state.next({
                values: {
                    ...oe
                }
            })
        }
        d = {
            mount: U.keepDirtyValues ? d.mount : new Set,
            unMount: new Set,
            array: new Set,
            disabled: new Set,
            watch: new Set,
            watchAll: !1,
            focus: ""
        },
        u.mount = !m.isValid || !!U.keepIsValid || !!U.keepDirtyValues,
        u.watch = !!e.shouldUnregister,
        v.state.next({
            submitCount: U.keepSubmitCount ? n.submitCount : 0,
            isDirty: le ? !1 : U.keepDirty ? n.isDirty : !!(U.keepDefaultValues && !Qr(R, o)),
            isSubmitted: U.keepIsSubmitted ? n.isSubmitted : !1,
            dirtyFields: le ? {} : U.keepDirtyValues ? U.keepDefaultValues && l ? Eo(o, l) : n.dirtyFields : U.keepDefaultValues && R ? Eo(o, R) : U.keepDirty ? n.dirtyFields : {},
            touchedFields: U.keepTouched ? n.touchedFields : {},
            errors: U.keepErrors ? n.errors : {},
            isSubmitSuccessful: U.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
            isSubmitting: !1
        })
    }
      , Mi = (R, U) => Ls(In(R) ? R(l) : R, U)
      , ya = (R, U={}) => {
        const K = ue(s, R)
          , fe = K && K._f;
        if (fe) {
            const le = fe.refs ? fe.refs[0] : fe.ref;
            le.focus && (le.focus(),
            U.shouldSelect && In(le.select) && le.select())
        }
    }
      , js = R => {
        n = {
            ...n,
            ...R
        }
    }
      , sr = {
        control: {
            register: It,
            unregister: Oe,
            getFieldState: be,
            handleSubmit: Di,
            setError: Ie,
            _subscribe: Ne,
            _runSchema: X,
            _getWatch: V,
            _getDirty: q,
            _setValid: _,
            _setFieldArray: A,
            _setDisabledField: Ze,
            _setErrors: L,
            _getFieldArray: me,
            _reset: Ls,
            _resetDefaultValues: () => In(e.defaultValues) && e.defaultValues().then(R => {
                Mi(R, e.resetOptions),
                v.state.next({
                    isLoading: !1
                })
            }
            ),
            _removeUnmounted: O,
            _disableForm: Tn,
            _subjects: v,
            _proxyFormState: m,
            get _fields() {
                return s
            },
            get _formValues() {
                return l
            },
            get _state() {
                return u
            },
            set _state(R) {
                u = R
            },
            get _defaultValues() {
                return o
            },
            get _names() {
                return d
            },
            set _names(R) {
                d = R
            },
            get _formState() {
                return n
            },
            get _options() {
                return e
            },
            set _options(R) {
                e = {
                    ...e,
                    ...R
                }
            }
        },
        subscribe: Te,
        trigger: D,
        register: It,
        handleSubmit: Di,
        watch: Le,
        setValue: H,
        getValues: Z,
        reset: Mi,
        resetField: ga,
        clearErrors: Ce,
        unregister: Oe,
        setError: Ie,
        setFocus: ya,
        getFieldState: be
    };
    return {
        ...sr,
        formControl: sr
    }
}
function ED(t={}) {
    const e = De.useRef(void 0)
      , n = De.useRef(void 0)
      , [s,o] = De.useState({
        isDirty: !1,
        isValidating: !1,
        isLoading: In(t.defaultValues),
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: t.errors || {},
        disabled: t.disabled || !1,
        defaultValues: In(t.defaultValues) ? void 0 : t.defaultValues
    });
    e.current || (e.current = {
        ...t.formControl ? t.formControl : CD(t),
        formState: s
    },
    t.formControl && t.defaultValues && !In(t.defaultValues) && t.formControl.reset(t.defaultValues, t.resetOptions));
    const l = e.current.control;
    return l._options = t,
    De.useLayoutEffect( () => l._subscribe({
        formState: l._proxyFormState,
        callback: () => o({
            ...l._formState
        }),
        reRenderRoot: !0
    }), [l]),
    De.useEffect( () => l._disableForm(t.disabled), [l, t.disabled]),
    De.useEffect( () => {
        if (l._proxyFormState.isDirty) {
            const u = l._getDirty();
            u !== s.isDirty && l._subjects.state.next({
                isDirty: u
            })
        }
    }
    , [l, s.isDirty]),
    De.useEffect( () => {
        t.values && !Qr(t.values, n.current) ? (l._reset(t.values, l._options.resetOptions),
        n.current = t.values,
        o(u => ({
            ...u
        }))) : l._resetDefaultValues()
    }
    , [t.values, l]),
    De.useEffect( () => {
        t.errors && !Qt(t.errors) && l._setErrors(t.errors)
    }
    , [t.errors, l]),
    De.useEffect( () => {
        l._state.mount || (l._setValid(),
        l._state.mount = !0),
        l._state.watch && (l._state.watch = !1,
        l._subjects.state.next({
            ...l._formState
        })),
        l._removeUnmounted()
    }
    ),
    De.useEffect( () => {
        t.shouldUnregister && l._subjects.state.next({
            values: l._getWatch()
        })
    }
    , [t.shouldUnregister, l]),
    e.current.formState = hb(s, l),
    e.current
}
const M0 = (t, e, n) => {
    if (t && "reportValidity"in t) {
        const s = ue(n, e);
        t.setCustomValidity(s && s.message || ""),
        t.reportValidity()
    }
}
  , bb = (t, e) => {
    for (const n in e.fields) {
        const s = e.fields[n];
        s && s.ref && "reportValidity"in s.ref ? M0(s.ref, n, t) : s.refs && s.refs.forEach(o => M0(o, n, t))
    }
}
  , kD = (t, e) => {
    e.shouldUseNativeValidation && bb(t, e);
    const n = {};
    for (const s in t) {
        const o = ue(e.fields, s)
          , l = Object.assign(t[s] || {}, {
            ref: o && o.ref
        });
        if (AD(e.names || Object.keys(t), s)) {
            const u = Object.assign({}, ue(n, s));
            qe(u, "root", l),
            qe(n, s, u)
        } else
            qe(n, s, l)
    }
    return n
}
  , AD = (t, e) => t.some(n => n.startsWith(e + "."));
var RD = function(t, e) {
    for (var n = {}; t.length; ) {
        var s = t[0]
          , o = s.code
          , l = s.message
          , u = s.path.join(".");
        if (!n[u])
            if ("unionErrors"in s) {
                var d = s.unionErrors[0].errors[0];
                n[u] = {
                    message: d.message,
                    type: d.code
                }
            } else
                n[u] = {
                    message: l,
                    type: o
                };
        if ("unionErrors"in s && s.unionErrors.forEach(function(m) {
            return m.errors.forEach(function(y) {
                return t.push(y)
            })
        }),
        e) {
            var f = n[u].types
              , h = f && f[s.code];
            n[u] = mb(u, e, n, o, h ? [].concat(h, s.message) : s.message)
        }
        t.shift()
    }
    return n
}
  , ND = function(t, e, n) {
    return n === void 0 && (n = {}),
    function(s, o, l) {
        try {
            return Promise.resolve((function(u, d) {
                try {
                    var f = Promise.resolve(t[n.mode === "sync" ? "parse" : "parseAsync"](s, e)).then(function(h) {
                        return l.shouldUseNativeValidation && bb({}, l),
                        {
                            errors: {},
                            values: n.raw ? s : h
                        }
                    })
                } catch (h) {
                    return d(h)
                }
                return f && f.then ? f.then(void 0, d) : f
            }
            )(0, function(u) {
                if ((function(d) {
                    return Array.isArray(d?.errors)
                }
                )(u))
                    return {
                        values: {},
                        errors: kD(RD(u.errors, !l.shouldUseNativeValidation && l.criteriaMode === "all"), l)
                    };
                throw u
            }))
        } catch (u) {
            return Promise.reject(u)
        }
    }
};
const J = Symbol.for("drizzle:entityKind");
function Nt(t, e) {
    if (!t || typeof t != "object")
        return !1;
    if (t instanceof e)
        return !0;
    if (!Object.prototype.hasOwnProperty.call(e, J))
        throw new Error(`Class "${e.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`);
    let n = Object.getPrototypeOf(t).constructor;
    if (n)
        for (; n; ) {
            if (J in n && n[J] === e[J])
                return !0;
            n = Object.getPrototypeOf(n)
        }
    return !1
}
class Qo {
    constructor(e, n) {
        this.table = e,
        this.config = n,
        this.name = n.name,
        this.keyAsName = n.keyAsName,
        this.notNull = n.notNull,
        this.default = n.default,
        this.defaultFn = n.defaultFn,
        this.onUpdateFn = n.onUpdateFn,
        this.hasDefault = n.hasDefault,
        this.primary = n.primaryKey,
        this.isUnique = n.isUnique,
        this.uniqueName = n.uniqueName,
        this.uniqueType = n.uniqueType,
        this.dataType = n.dataType,
        this.columnType = n.columnType,
        this.generated = n.generated,
        this.generatedIdentity = n.generatedIdentity
    }
    static[J] = "Column";
    name;
    keyAsName;
    primary;
    notNull;
    default;
    defaultFn;
    onUpdateFn;
    hasDefault;
    isUnique;
    uniqueName;
    uniqueType;
    dataType;
    columnType;
    enumValues = void 0;
    generated = void 0;
    generatedIdentity = void 0;
    config;
    mapFromDriverValue(e) {
        return e
    }
    mapToDriverValue(e) {
        return e
    }
    shouldDisableInsert() {
        return this.config.generated !== void 0 && this.config.generated.type !== "byDefault"
    }
}
class OD {
    static[J] = "ColumnBuilder";
    config;
    constructor(e, n, s) {
        this.config = {
            name: e,
            keyAsName: e === "",
            notNull: !1,
            default: void 0,
            hasDefault: !1,
            primaryKey: !1,
            isUnique: !1,
            uniqueName: void 0,
            uniqueType: void 0,
            dataType: n,
            columnType: s,
            generated: void 0
        }
    }
    $type() {
        return this
    }
    notNull() {
        return this.config.notNull = !0,
        this
    }
    default(e) {
        return this.config.default = e,
        this.config.hasDefault = !0,
        this
    }
    $defaultFn(e) {
        return this.config.defaultFn = e,
        this.config.hasDefault = !0,
        this
    }
    $default = this.$defaultFn;
    $onUpdateFn(e) {
        return this.config.onUpdateFn = e,
        this.config.hasDefault = !0,
        this
    }
    $onUpdate = this.$onUpdateFn;
    primaryKey() {
        return this.config.primaryKey = !0,
        this.config.notNull = !0,
        this
    }
    setName(e) {
        this.config.name === "" && (this.config.name = e)
    }
}
const Ss = Symbol.for("drizzle:Name");
class DD {
    static[J] = "PgForeignKeyBuilder";
    reference;
    _onUpdate = "no action";
    _onDelete = "no action";
    constructor(e, n) {
        this.reference = () => {
            const {name: s, columns: o, foreignColumns: l} = e();
            return {
                name: s,
                columns: o,
                foreignTable: l[0].table,
                foreignColumns: l
            }
        }
        ,
        n && (this._onUpdate = n.onUpdate,
        this._onDelete = n.onDelete)
    }
    onUpdate(e) {
        return this._onUpdate = e === void 0 ? "no action" : e,
        this
    }
    onDelete(e) {
        return this._onDelete = e === void 0 ? "no action" : e,
        this
    }
    build(e) {
        return new MD(e,this)
    }
}
class MD {
    constructor(e, n) {
        this.table = e,
        this.reference = n.reference,
        this.onUpdate = n._onUpdate,
        this.onDelete = n._onDelete
    }
    static[J] = "PgForeignKey";
    reference;
    onUpdate;
    onDelete;
    getName() {
        const {name: e, columns: n, foreignColumns: s} = this.reference()
          , o = n.map(d => d.name)
          , l = s.map(d => d.name)
          , u = [this.table[Ss], ...o, s[0].table[Ss], ...l];
        return e ?? `${u.join("_")}_fk`
    }
}
function ID(t, ...e) {
    return t(...e)
}
function LD(t, e) {
    return `${t[Ss]}_${e.join("_")}_unique`
}
function I0(t, e, n) {
    for (let s = e; s < t.length; s++) {
        const o = t[s];
        if (o === "\\") {
            s++;
            continue
        }
        if (o === '"')
            return [t.slice(e, s).replace(/\\/g, ""), s + 1];
        if (!n && (o === "," || o === "}"))
            return [t.slice(e, s).replace(/\\/g, ""), s]
    }
    return [t.slice(e).replace(/\\/g, ""), t.length]
}
function Tb(t, e=0) {
    const n = [];
    let s = e
      , o = !1;
    for (; s < t.length; ) {
        const l = t[s];
        if (l === ",") {
            (o || s === e) && n.push(""),
            o = !0,
            s++;
            continue
        }
        if (o = !1,
        l === "\\") {
            s += 2;
            continue
        }
        if (l === '"') {
            const [f,h] = I0(t, s + 1, !0);
            n.push(f),
            s = h;
            continue
        }
        if (l === "}")
            return [n, s + 1];
        if (l === "{") {
            const [f,h] = Tb(t, s + 1);
            n.push(f),
            s = h;
            continue
        }
        const [u,d] = I0(t, s, !1);
        n.push(u),
        s = d
    }
    return [n, s]
}
function jD(t) {
    const [e] = Tb(t, 1);
    return e
}
function _b(t) {
    return `{${t.map(e => Array.isArray(e) ? _b(e) : typeof e == "string" ? `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : `${e}`).join(",")}}`
}
class He extends OD {
    foreignKeyConfigs = [];
    static[J] = "PgColumnBuilder";
    array(e) {
        return new FD(this.config.name,this,e)
    }
    references(e, n={}) {
        return this.foreignKeyConfigs.push({
            ref: e,
            actions: n
        }),
        this
    }
    unique(e, n) {
        return this.config.isUnique = !0,
        this.config.uniqueName = e,
        this.config.uniqueType = n?.nulls,
        this
    }
    generatedAlwaysAs(e) {
        return this.config.generated = {
            as: e,
            type: "always",
            mode: "stored"
        },
        this
    }
    buildForeignKeys(e, n) {
        return this.foreignKeyConfigs.map( ({ref: s, actions: o}) => ID( (l, u) => {
            const d = new DD( () => {
                const f = l();
                return {
                    columns: [e],
                    foreignColumns: [f]
                }
            }
            );
            return u.onUpdate && d.onUpdate(u.onUpdate),
            u.onDelete && d.onDelete(u.onDelete),
            d.build(n)
        }
        , s, o))
    }
    buildExtraConfigColumn(e) {
        return new VD(e,this.config)
    }
}
class Ve extends Qo {
    constructor(e, n) {
        n.uniqueName || (n.uniqueName = LD(e, [n.name])),
        super(e, n),
        this.table = e
    }
    static[J] = "PgColumn"
}
class VD extends Ve {
    static[J] = "ExtraConfigColumn";
    getSQLType() {
        return this.getSQLType()
    }
    indexConfig = {
        order: this.config.order ?? "asc",
        nulls: this.config.nulls ?? "last",
        opClass: this.config.opClass
    };
    defaultConfig = {
        order: "asc",
        nulls: "last",
        opClass: void 0
    };
    asc() {
        return this.indexConfig.order = "asc",
        this
    }
    desc() {
        return this.indexConfig.order = "desc",
        this
    }
    nullsFirst() {
        return this.indexConfig.nulls = "first",
        this
    }
    nullsLast() {
        return this.indexConfig.nulls = "last",
        this
    }
    op(e) {
        return this.indexConfig.opClass = e,
        this
    }
}
class FD extends He {
    static[J] = "PgArrayBuilder";
    constructor(e, n, s) {
        super(e, "array", "PgArray"),
        this.config.baseBuilder = n,
        this.config.size = s
    }
    build(e) {
        const n = this.config.baseBuilder.build(e);
        return new wp(e,this.config,n)
    }
}
class wp extends Ve {
    constructor(e, n, s, o) {
        super(e, n),
        this.baseColumn = s,
        this.range = o,
        this.size = n.size
    }
    size;
    static[J] = "PgArray";
    getSQLType() {
        return `${this.baseColumn.getSQLType()}[${typeof this.size == "number" ? this.size : ""}]`
    }
    mapFromDriverValue(e) {
        return typeof e == "string" && (e = jD(e)),
        e.map(n => this.baseColumn.mapFromDriverValue(n))
    }
    mapToDriverValue(e, n=!1) {
        const s = e.map(o => o === null ? null : Nt(this.baseColumn, wp) ? this.baseColumn.mapToDriverValue(o, !0) : this.baseColumn.mapToDriverValue(o));
        return n ? s : _b(s)
    }
}
const L0 = Symbol.for("drizzle:isPgEnum");
function BD(t) {
    return !!t && typeof t == "function" && L0 in t && t[L0] === !0
}
class Pb {
    static[J] = "Subquery";
    constructor(e, n, s, o=!1) {
        this._ = {
            brand: "Subquery",
            sql: e,
            selectedFields: n,
            alias: s,
            isWith: o
        }
    }
}
const zD = {
    startActiveSpan(t, e) {
        return e()
    }
}
  , bs = Symbol.for("drizzle:ViewBaseConfig")
  , Cf = Symbol.for("drizzle:Schema")
  , j0 = Symbol.for("drizzle:Columns")
  , V0 = Symbol.for("drizzle:ExtraConfigColumns")
  , Ef = Symbol.for("drizzle:OriginalName")
  , kf = Symbol.for("drizzle:BaseName")
  , Tu = Symbol.for("drizzle:IsAlias")
  , F0 = Symbol.for("drizzle:ExtraConfigBuilder")
  , Cb = Symbol.for("drizzle:IsDrizzleTable");
class dn {
    static[J] = "Table";
    static Symbol = {
        Name: Ss,
        Schema: Cf,
        OriginalName: Ef,
        Columns: j0,
        ExtraConfigColumns: V0,
        BaseName: kf,
        IsAlias: Tu,
        ExtraConfigBuilder: F0
    };
    [Ss];
    [Ef];
    [Cf];
    [j0];
    [V0];
    [kf];
    [Tu] = !1;
    [Cb] = !0;
    [F0] = void 0;
    constructor(e, n, s) {
        this[Ss] = this[Ef] = e,
        this[Cf] = n,
        this[kf] = s
    }
}
function Eb(t) {
    return typeof t == "object" && t !== null && Cb in t
}
function UD(t) {
    return t != null && typeof t.getSQL == "function"
}
function $D(t) {
    const e = {
        sql: "",
        params: []
    };
    for (const n of t)
        e.sql += n.sql,
        e.params.push(...n.params),
        n.typings?.length && (e.typings || (e.typings = []),
        e.typings.push(...n.typings));
    return e
}
class Dn {
    static[J] = "StringChunk";
    value;
    constructor(e) {
        this.value = Array.isArray(e) ? e : [e]
    }
    getSQL() {
        return new ft([this])
    }
}
class ft {
    constructor(e) {
        this.queryChunks = e
    }
    static[J] = "SQL";
    decoder = kb;
    shouldInlineParams = !1;
    append(e) {
        return this.queryChunks.push(...e.queryChunks),
        this
    }
    toQuery(e) {
        return zD.startActiveSpan("drizzle.buildSQL", n => {
            const s = this.buildQueryFromSourceParams(this.queryChunks, e);
            return n?.setAttributes({
                "drizzle.query.text": s.sql,
                "drizzle.query.params": JSON.stringify(s.params)
            }),
            s
        }
        )
    }
    buildQueryFromSourceParams(e, n) {
        const s = Object.assign({}, n, {
            inlineParams: n.inlineParams || this.shouldInlineParams,
            paramStartIndex: n.paramStartIndex || {
                value: 0
            }
        })
          , {casing: o, escapeName: l, escapeParam: u, prepareTyping: d, inlineParams: f, paramStartIndex: h} = s;
        return $D(e.map(m => {
            if (Nt(m, Dn))
                return {
                    sql: m.value.join(""),
                    params: []
                };
            if (Nt(m, sh))
                return {
                    sql: l(m.value),
                    params: []
                };
            if (m === void 0)
                return {
                    sql: "",
                    params: []
                };
            if (Array.isArray(m)) {
                const y = [new Dn("(")];
                for (const [v,w] of m.entries())
                    y.push(w),
                    v < m.length - 1 && y.push(new Dn(", "));
                return y.push(new Dn(")")),
                this.buildQueryFromSourceParams(y, s)
            }
            if (Nt(m, ft))
                return this.buildQueryFromSourceParams(m.queryChunks, {
                    ...s,
                    inlineParams: f || m.shouldInlineParams
                });
            if (Nt(m, dn)) {
                const y = m[dn.Symbol.Schema]
                  , v = m[dn.Symbol.Name];
                return {
                    sql: y === void 0 || m[Tu] ? l(v) : l(y) + "." + l(v),
                    params: []
                }
            }
            if (Nt(m, Qo)) {
                const y = o.getColumnCasing(m);
                if (n.invokeSource === "indexes")
                    return {
                        sql: l(y),
                        params: []
                    };
                const v = m.table[dn.Symbol.Schema];
                return {
                    sql: m.table[Tu] || v === void 0 ? l(m.table[dn.Symbol.Name]) + "." + l(y) : l(v) + "." + l(m.table[dn.Symbol.Name]) + "." + l(y),
                    params: []
                }
            }
            if (Nt(m, HD)) {
                const y = m[bs].schema
                  , v = m[bs].name;
                return {
                    sql: y === void 0 || m[bs].isAlias ? l(v) : l(y) + "." + l(v),
                    params: []
                }
            }
            if (Nt(m, Rb)) {
                if (Nt(m.value, oh))
                    return {
                        sql: u(h.value++, m),
                        params: [m],
                        typings: ["none"]
                    };
                const y = m.value === null ? null : m.encoder.mapToDriverValue(m.value);
                if (Nt(y, ft))
                    return this.buildQueryFromSourceParams([y], s);
                if (f)
                    return {
                        sql: this.mapInlineParam(y, s),
                        params: []
                    };
                let v = ["none"];
                return d && (v = [d(m.encoder)]),
                {
                    sql: u(h.value++, y),
                    params: [y],
                    typings: v
                }
            }
            return Nt(m, oh) ? {
                sql: u(h.value++, m),
                params: [m],
                typings: ["none"]
            } : Nt(m, ft.Aliased) && m.fieldAlias !== void 0 ? {
                sql: l(m.fieldAlias),
                params: []
            } : Nt(m, Pb) ? m._.isWith ? {
                sql: l(m._.alias),
                params: []
            } : this.buildQueryFromSourceParams([new Dn("("), m._.sql, new Dn(") "), new sh(m._.alias)], s) : BD(m) ? m.schema ? {
                sql: l(m.schema) + "." + l(m.enumName),
                params: []
            } : {
                sql: l(m.enumName),
                params: []
            } : UD(m) ? m.shouldOmitSQLParens?.() ? this.buildQueryFromSourceParams([m.getSQL()], s) : this.buildQueryFromSourceParams([new Dn("("), m.getSQL(), new Dn(")")], s) : f ? {
                sql: this.mapInlineParam(m, s),
                params: []
            } : {
                sql: u(h.value++, m),
                params: [m],
                typings: ["none"]
            }
        }
        ))
    }
    mapInlineParam(e, {escapeString: n}) {
        if (e === null)
            return "null";
        if (typeof e == "number" || typeof e == "boolean")
            return e.toString();
        if (typeof e == "string")
            return n(e);
        if (typeof e == "object") {
            const s = e.toString();
            return n(s === "[object Object]" ? JSON.stringify(e) : s)
        }
        throw new Error("Unexpected param value: " + e)
    }
    getSQL() {
        return this
    }
    as(e) {
        return e === void 0 ? this : new ft.Aliased(this,e)
    }
    mapWith(e) {
        return this.decoder = typeof e == "function" ? {
            mapFromDriverValue: e
        } : e,
        this
    }
    inlineParams() {
        return this.shouldInlineParams = !0,
        this
    }
    if(e) {
        return e ? this : void 0
    }
}
class sh {
    constructor(e) {
        this.value = e
    }
    static[J] = "Name";
    brand;
    getSQL() {
        return new ft([this])
    }
}
const kb = {
    mapFromDriverValue: t => t
}
  , Ab = {
    mapToDriverValue: t => t
};
({
    ...kb,
    ...Ab
});
class Rb {
    constructor(e, n=Ab) {
        this.value = e,
        this.encoder = n
    }
    static[J] = "Param";
    brand;
    getSQL() {
        return new ft([this])
    }
}
function _u(t, ...e) {
    const n = [];
    (e.length > 0 || t.length > 0 && t[0] !== "") && n.push(new Dn(t[0]));
    for (const [s,o] of e.entries())
        n.push(o, new Dn(t[s + 1]));
    return new ft(n)
}
(t => {
    function e() {
        return new ft([])
    }
    t.empty = e;
    function n(f) {
        return new ft(f)
    }
    t.fromList = n;
    function s(f) {
        return new ft([new Dn(f)])
    }
    t.raw = s;
    function o(f, h) {
        const m = [];
        for (const [y,v] of f.entries())
            y > 0 && h !== void 0 && m.push(h),
            m.push(v);
        return new ft(m)
    }
    t.join = o;
    function l(f) {
        return new sh(f)
    }
    t.identifier = l;
    function u(f) {
        return new oh(f)
    }
    t.placeholder = u;
    function d(f, h) {
        return new Rb(f,h)
    }
    t.param = d
}
)(_u || (_u = {}));
(t => {
    class e {
        constructor(s, o) {
            this.sql = s,
            this.fieldAlias = o
        }
        static[J] = "SQL.Aliased";
        isSelectionField = !1;
        getSQL() {
            return this.sql
        }
        clone() {
            return new e(this.sql,this.fieldAlias)
        }
    }
    t.Aliased = e
}
)(ft || (ft = {}));
class oh {
    constructor(e) {
        this.name = e
    }
    static[J] = "Placeholder";
    getSQL() {
        return new ft([this])
    }
}
const Nb = Symbol.for("drizzle:IsDrizzleView");
class HD {
    static[J] = "View";
    [bs];
    [Nb] = !0;
    constructor({name: e, schema: n, selectedFields: s, query: o}) {
        this[bs] = {
            name: e,
            originalName: e,
            schema: n,
            selectedFields: s,
            query: o,
            isExisting: !o,
            isAlias: !1
        }
    }
    getSQL() {
        return new ft([this])
    }
}
function WD(t) {
    return typeof t == "object" && t !== null && Nb in t
}
Qo.prototype.getSQL = function() {
    return new ft([this])
}
;
dn.prototype.getSQL = function() {
    return new ft([this])
}
;
Pb.prototype.getSQL = function() {
    return new ft([this])
}
;
function qD(t) {
    return t[dn.Symbol.Columns]
}
function QD(t) {
    return t[bs].selectedFields
}
function Et(t, e) {
    return {
        name: typeof t == "string" && t.length > 0 ? t : "",
        config: typeof t == "object" ? t : e
    }
}
class nc extends He {
    static[J] = "PgIntColumnBaseBuilder";
    generatedAlwaysAsIdentity(e) {
        if (e) {
            const {name: n, ...s} = e;
            this.config.generatedIdentity = {
                type: "always",
                sequenceName: n,
                sequenceOptions: s
            }
        } else
            this.config.generatedIdentity = {
                type: "always"
            };
        return this.config.hasDefault = !0,
        this.config.notNull = !0,
        this
    }
    generatedByDefaultAsIdentity(e) {
        if (e) {
            const {name: n, ...s} = e;
            this.config.generatedIdentity = {
                type: "byDefault",
                sequenceName: n,
                sequenceOptions: s
            }
        } else
            this.config.generatedIdentity = {
                type: "byDefault"
            };
        return this.config.hasDefault = !0,
        this.config.notNull = !0,
        this
    }
}
class KD extends nc {
    static[J] = "PgBigInt53Builder";
    constructor(e) {
        super(e, "number", "PgBigInt53")
    }
    build(e) {
        return new ZD(e,this.config)
    }
}
class ZD extends Ve {
    static[J] = "PgBigInt53";
    getSQLType() {
        return "bigint"
    }
    mapFromDriverValue(e) {
        return typeof e == "number" ? e : Number(e)
    }
}
class GD extends nc {
    static[J] = "PgBigInt64Builder";
    constructor(e) {
        super(e, "bigint", "PgBigInt64")
    }
    build(e) {
        return new XD(e,this.config)
    }
}
class XD extends Ve {
    static[J] = "PgBigInt64";
    getSQLType() {
        return "bigint"
    }
    mapFromDriverValue(e) {
        return BigInt(e)
    }
}
function YD(t, e) {
    const {name: n, config: s} = Et(t, e);
    return s.mode === "number" ? new KD(n) : new GD(n)
}
class JD extends He {
    static[J] = "PgBigSerial53Builder";
    constructor(e) {
        super(e, "number", "PgBigSerial53"),
        this.config.hasDefault = !0,
        this.config.notNull = !0
    }
    build(e) {
        return new eM(e,this.config)
    }
}
class eM extends Ve {
    static[J] = "PgBigSerial53";
    getSQLType() {
        return "bigserial"
    }
    mapFromDriverValue(e) {
        return typeof e == "number" ? e : Number(e)
    }
}
class tM extends He {
    static[J] = "PgBigSerial64Builder";
    constructor(e) {
        super(e, "bigint", "PgBigSerial64"),
        this.config.hasDefault = !0
    }
    build(e) {
        return new nM(e,this.config)
    }
}
class nM extends Ve {
    static[J] = "PgBigSerial64";
    getSQLType() {
        return "bigserial"
    }
    mapFromDriverValue(e) {
        return BigInt(e)
    }
}
function rM(t, e) {
    const {name: n, config: s} = Et(t, e);
    return s.mode === "number" ? new JD(n) : new tM(n)
}
class iM extends He {
    static[J] = "PgBooleanBuilder";
    constructor(e) {
        super(e, "boolean", "PgBoolean")
    }
    build(e) {
        return new sM(e,this.config)
    }
}
class sM extends Ve {
    static[J] = "PgBoolean";
    getSQLType() {
        return "boolean"
    }
}
function oM(t) {
    return new iM(t ?? "")
}
class aM extends He {
    static[J] = "PgCharBuilder";
    constructor(e, n) {
        super(e, "string", "PgChar"),
        this.config.length = n.length,
        this.config.enumValues = n.enum
    }
    build(e) {
        return new lM(e,this.config)
    }
}
class lM extends Ve {
    static[J] = "PgChar";
    length = this.config.length;
    enumValues = this.config.enumValues;
    getSQLType() {
        return this.length === void 0 ? "char" : `char(${this.length})`
    }
}
function uM(t, e={}) {
    const {name: n, config: s} = Et(t, e);
    return new aM(n,s)
}
class cM extends He {
    static[J] = "PgCidrBuilder";
    constructor(e) {
        super(e, "string", "PgCidr")
    }
    build(e) {
        return new dM(e,this.config)
    }
}
class dM extends Ve {
    static[J] = "PgCidr";
    getSQLType() {
        return "cidr"
    }
}
function fM(t) {
    return new cM(t ?? "")
}
class hM extends He {
    static[J] = "PgCustomColumnBuilder";
    constructor(e, n, s) {
        super(e, "custom", "PgCustomColumn"),
        this.config.fieldConfig = n,
        this.config.customTypeParams = s
    }
    build(e) {
        return new pM(e,this.config)
    }
}
class pM extends Ve {
    static[J] = "PgCustomColumn";
    sqlName;
    mapTo;
    mapFrom;
    constructor(e, n) {
        super(e, n),
        this.sqlName = n.customTypeParams.dataType(n.fieldConfig),
        this.mapTo = n.customTypeParams.toDriver,
        this.mapFrom = n.customTypeParams.fromDriver
    }
    getSQLType() {
        return this.sqlName
    }
    mapFromDriverValue(e) {
        return typeof this.mapFrom == "function" ? this.mapFrom(e) : e
    }
    mapToDriverValue(e) {
        return typeof this.mapTo == "function" ? this.mapTo(e) : e
    }
}
function mM(t) {
    return (e, n) => {
        const {name: s, config: o} = Et(e, n);
        return new hM(s,o,t)
    }
}
class pa extends He {
    static[J] = "PgDateColumnBaseBuilder";
    defaultNow() {
        return this.default(_u`now()`)
    }
}
class gM extends pa {
    static[J] = "PgDateBuilder";
    constructor(e) {
        super(e, "date", "PgDate")
    }
    build(e) {
        return new yM(e,this.config)
    }
}
class yM extends Ve {
    static[J] = "PgDate";
    getSQLType() {
        return "date"
    }
    mapFromDriverValue(e) {
        return new Date(e)
    }
    mapToDriverValue(e) {
        return e.toISOString()
    }
}
class vM extends pa {
    static[J] = "PgDateStringBuilder";
    constructor(e) {
        super(e, "string", "PgDateString")
    }
    build(e) {
        return new xM(e,this.config)
    }
}
class xM extends Ve {
    static[J] = "PgDateString";
    getSQLType() {
        return "date"
    }
}
function wM(t, e) {
    const {name: n, config: s} = Et(t, e);
    return s?.mode === "date" ? new gM(n) : new vM(n)
}
class SM extends He {
    static[J] = "PgDoublePrecisionBuilder";
    constructor(e) {
        super(e, "number", "PgDoublePrecision")
    }
    build(e) {
        return new bM(e,this.config)
    }
}
class bM extends Ve {
    static[J] = "PgDoublePrecision";
    getSQLType() {
        return "double precision"
    }
    mapFromDriverValue(e) {
        return typeof e == "string" ? Number.parseFloat(e) : e
    }
}
function TM(t) {
    return new SM(t ?? "")
}
class _M extends He {
    static[J] = "PgInetBuilder";
    constructor(e) {
        super(e, "string", "PgInet")
    }
    build(e) {
        return new PM(e,this.config)
    }
}
class PM extends Ve {
    static[J] = "PgInet";
    getSQLType() {
        return "inet"
    }
}
function CM(t) {
    return new _M(t ?? "")
}
class EM extends nc {
    static[J] = "PgIntegerBuilder";
    constructor(e) {
        super(e, "number", "PgInteger")
    }
    build(e) {
        return new kM(e,this.config)
    }
}
class kM extends Ve {
    static[J] = "PgInteger";
    getSQLType() {
        return "integer"
    }
    mapFromDriverValue(e) {
        return typeof e == "string" ? Number.parseInt(e) : e
    }
}
function AM(t) {
    return new EM(t ?? "")
}
class RM extends He {
    static[J] = "PgIntervalBuilder";
    constructor(e, n) {
        super(e, "string", "PgInterval"),
        this.config.intervalConfig = n
    }
    build(e) {
        return new NM(e,this.config)
    }
}
class NM extends Ve {
    static[J] = "PgInterval";
    fields = this.config.intervalConfig.fields;
    precision = this.config.intervalConfig.precision;
    getSQLType() {
        const e = this.fields ? ` ${this.fields}` : ""
          , n = this.precision ? `(${this.precision})` : "";
        return `interval${e}${n}`
    }
}
function OM(t, e={}) {
    const {name: n, config: s} = Et(t, e);
    return new RM(n,s)
}
class DM extends He {
    static[J] = "PgJsonBuilder";
    constructor(e) {
        super(e, "json", "PgJson")
    }
    build(e) {
        return new MM(e,this.config)
    }
}
class MM extends Ve {
    static[J] = "PgJson";
    constructor(e, n) {
        super(e, n)
    }
    getSQLType() {
        return "json"
    }
    mapToDriverValue(e) {
        return JSON.stringify(e)
    }
    mapFromDriverValue(e) {
        if (typeof e == "string")
            try {
                return JSON.parse(e)
            } catch {
                return e
            }
        return e
    }
}
function IM(t) {
    return new DM(t ?? "")
}
class LM extends He {
    static[J] = "PgJsonbBuilder";
    constructor(e) {
        super(e, "json", "PgJsonb")
    }
    build(e) {
        return new jM(e,this.config)
    }
}
class jM extends Ve {
    static[J] = "PgJsonb";
    constructor(e, n) {
        super(e, n)
    }
    getSQLType() {
        return "jsonb"
    }
    mapToDriverValue(e) {
        return JSON.stringify(e)
    }
    mapFromDriverValue(e) {
        if (typeof e == "string")
            try {
                return JSON.parse(e)
            } catch {
                return e
            }
        return e
    }
}
function VM(t) {
    return new LM(t ?? "")
}
class FM extends He {
    static[J] = "PgLineBuilder";
    constructor(e) {
        super(e, "array", "PgLine")
    }
    build(e) {
        return new BM(e,this.config)
    }
}
class BM extends Ve {
    static[J] = "PgLine";
    getSQLType() {
        return "line"
    }
    mapFromDriverValue(e) {
        const [n,s,o] = e.slice(1, -1).split(",");
        return [Number.parseFloat(n), Number.parseFloat(s), Number.parseFloat(o)]
    }
    mapToDriverValue(e) {
        return `{${e[0]},${e[1]},${e[2]}}`
    }
}
class zM extends He {
    static[J] = "PgLineABCBuilder";
    constructor(e) {
        super(e, "json", "PgLineABC")
    }
    build(e) {
        return new UM(e,this.config)
    }
}
class UM extends Ve {
    static[J] = "PgLineABC";
    getSQLType() {
        return "line"
    }
    mapFromDriverValue(e) {
        const [n,s,o] = e.slice(1, -1).split(",");
        return {
            a: Number.parseFloat(n),
            b: Number.parseFloat(s),
            c: Number.parseFloat(o)
        }
    }
    mapToDriverValue(e) {
        return `{${e.a},${e.b},${e.c}}`
    }
}
function $M(t, e) {
    const {name: n, config: s} = Et(t, e);
    return !s?.mode || s.mode === "tuple" ? new FM(n) : new zM(n)
}
class HM extends He {
    static[J] = "PgMacaddrBuilder";
    constructor(e) {
        super(e, "string", "PgMacaddr")
    }
    build(e) {
        return new WM(e,this.config)
    }
}
class WM extends Ve {
    static[J] = "PgMacaddr";
    getSQLType() {
        return "macaddr"
    }
}
function qM(t) {
    return new HM(t ?? "")
}
class QM extends He {
    static[J] = "PgMacaddr8Builder";
    constructor(e) {
        super(e, "string", "PgMacaddr8")
    }
    build(e) {
        return new KM(e,this.config)
    }
}
class KM extends Ve {
    static[J] = "PgMacaddr8";
    getSQLType() {
        return "macaddr8"
    }
}
function ZM(t) {
    return new QM(t ?? "")
}
class GM extends He {
    static[J] = "PgNumericBuilder";
    constructor(e, n, s) {
        super(e, "string", "PgNumeric"),
        this.config.precision = n,
        this.config.scale = s
    }
    build(e) {
        return new XM(e,this.config)
    }
}
class XM extends Ve {
    static[J] = "PgNumeric";
    precision;
    scale;
    constructor(e, n) {
        super(e, n),
        this.precision = n.precision,
        this.scale = n.scale
    }
    getSQLType() {
        return this.precision !== void 0 && this.scale !== void 0 ? `numeric(${this.precision}, ${this.scale})` : this.precision === void 0 ? "numeric" : `numeric(${this.precision})`
    }
}
function YM(t, e) {
    const {name: n, config: s} = Et(t, e);
    return new GM(n,s?.precision,s?.scale)
}
class JM extends He {
    static[J] = "PgPointTupleBuilder";
    constructor(e) {
        super(e, "array", "PgPointTuple")
    }
    build(e) {
        return new e2(e,this.config)
    }
}
class e2 extends Ve {
    static[J] = "PgPointTuple";
    getSQLType() {
        return "point"
    }
    mapFromDriverValue(e) {
        if (typeof e == "string") {
            const [n,s] = e.slice(1, -1).split(",");
            return [Number.parseFloat(n), Number.parseFloat(s)]
        }
        return [e.x, e.y]
    }
    mapToDriverValue(e) {
        return `(${e[0]},${e[1]})`
    }
}
class t2 extends He {
    static[J] = "PgPointObjectBuilder";
    constructor(e) {
        super(e, "json", "PgPointObject")
    }
    build(e) {
        return new n2(e,this.config)
    }
}
class n2 extends Ve {
    static[J] = "PgPointObject";
    getSQLType() {
        return "point"
    }
    mapFromDriverValue(e) {
        if (typeof e == "string") {
            const [n,s] = e.slice(1, -1).split(",");
            return {
                x: Number.parseFloat(n),
                y: Number.parseFloat(s)
            }
        }
        return e
    }
    mapToDriverValue(e) {
        return `(${e.x},${e.y})`
    }
}
function r2(t, e) {
    const {name: n, config: s} = Et(t, e);
    return !s?.mode || s.mode === "tuple" ? new JM(n) : new t2(n)
}
function i2(t) {
    const e = [];
    for (let n = 0; n < t.length; n += 2)
        e.push(Number.parseInt(t.slice(n, n + 2), 16));
    return new Uint8Array(e)
}
function B0(t, e) {
    const n = new ArrayBuffer(8)
      , s = new DataView(n);
    for (let o = 0; o < 8; o++)
        s.setUint8(o, t[e + o]);
    return s.getFloat64(0, !0)
}
function Ob(t) {
    const e = i2(t);
    let n = 0;
    const s = e[n];
    n += 1;
    const o = new DataView(e.buffer)
      , l = o.getUint32(n, s === 1);
    if (n += 4,
    l & 536870912 && (o.getUint32(n, s === 1),
    n += 4),
    (l & 65535) === 1) {
        const u = B0(e, n);
        n += 8;
        const d = B0(e, n);
        return n += 8,
        [u, d]
    }
    throw new Error("Unsupported geometry type")
}
class s2 extends He {
    static[J] = "PgGeometryBuilder";
    constructor(e) {
        super(e, "array", "PgGeometry")
    }
    build(e) {
        return new o2(e,this.config)
    }
}
class o2 extends Ve {
    static[J] = "PgGeometry";
    getSQLType() {
        return "geometry(point)"
    }
    mapFromDriverValue(e) {
        return Ob(e)
    }
    mapToDriverValue(e) {
        return `point(${e[0]} ${e[1]})`
    }
}
class a2 extends He {
    static[J] = "PgGeometryObjectBuilder";
    constructor(e) {
        super(e, "json", "PgGeometryObject")
    }
    build(e) {
        return new l2(e,this.config)
    }
}
class l2 extends Ve {
    static[J] = "PgGeometryObject";
    getSQLType() {
        return "geometry(point)"
    }
    mapFromDriverValue(e) {
        const n = Ob(e);
        return {
            x: n[0],
            y: n[1]
        }
    }
    mapToDriverValue(e) {
        return `point(${e.x} ${e.y})`
    }
}
function u2(t, e) {
    const {name: n, config: s} = Et(t, e);
    return !s?.mode || s.mode === "tuple" ? new s2(n) : new a2(n)
}
class c2 extends He {
    static[J] = "PgRealBuilder";
    constructor(e, n) {
        super(e, "number", "PgReal"),
        this.config.length = n
    }
    build(e) {
        return new d2(e,this.config)
    }
}
class d2 extends Ve {
    static[J] = "PgReal";
    constructor(e, n) {
        super(e, n)
    }
    getSQLType() {
        return "real"
    }
    mapFromDriverValue = e => typeof e == "string" ? Number.parseFloat(e) : e
}
function f2(t) {
    return new c2(t ?? "")
}
class h2 extends He {
    static[J] = "PgSerialBuilder";
    constructor(e) {
        super(e, "number", "PgSerial"),
        this.config.hasDefault = !0,
        this.config.notNull = !0
    }
    build(e) {
        return new p2(e,this.config)
    }
}
class p2 extends Ve {
    static[J] = "PgSerial";
    getSQLType() {
        return "serial"
    }
}
function Db(t) {
    return new h2(t ?? "")
}
class m2 extends nc {
    static[J] = "PgSmallIntBuilder";
    constructor(e) {
        super(e, "number", "PgSmallInt")
    }
    build(e) {
        return new g2(e,this.config)
    }
}
class g2 extends Ve {
    static[J] = "PgSmallInt";
    getSQLType() {
        return "smallint"
    }
    mapFromDriverValue = e => typeof e == "string" ? Number(e) : e
}
function y2(t) {
    return new m2(t ?? "")
}
class v2 extends He {
    static[J] = "PgSmallSerialBuilder";
    constructor(e) {
        super(e, "number", "PgSmallSerial"),
        this.config.hasDefault = !0,
        this.config.notNull = !0
    }
    build(e) {
        return new x2(e,this.config)
    }
}
class x2 extends Ve {
    static[J] = "PgSmallSerial";
    getSQLType() {
        return "smallserial"
    }
}
function w2(t) {
    return new v2(t ?? "")
}
class S2 extends He {
    static[J] = "PgTextBuilder";
    constructor(e, n) {
        super(e, "string", "PgText"),
        this.config.enumValues = n.enum
    }
    build(e) {
        return new b2(e,this.config)
    }
}
class b2 extends Ve {
    static[J] = "PgText";
    enumValues = this.config.enumValues;
    getSQLType() {
        return "text"
    }
}
function tu(t, e={}) {
    const {name: n, config: s} = Et(t, e);
    return new S2(n,s)
}
class T2 extends pa {
    constructor(e, n, s) {
        super(e, "string", "PgTime"),
        this.withTimezone = n,
        this.precision = s,
        this.config.withTimezone = n,
        this.config.precision = s
    }
    static[J] = "PgTimeBuilder";
    build(e) {
        return new _2(e,this.config)
    }
}
class _2 extends Ve {
    static[J] = "PgTime";
    withTimezone;
    precision;
    constructor(e, n) {
        super(e, n),
        this.withTimezone = n.withTimezone,
        this.precision = n.precision
    }
    getSQLType() {
        return `time${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`
    }
}
function P2(t, e={}) {
    const {name: n, config: s} = Et(t, e);
    return new T2(n,s.withTimezone ?? !1,s.precision)
}
class C2 extends pa {
    static[J] = "PgTimestampBuilder";
    constructor(e, n, s) {
        super(e, "date", "PgTimestamp"),
        this.config.withTimezone = n,
        this.config.precision = s
    }
    build(e) {
        return new E2(e,this.config)
    }
}
class E2 extends Ve {
    static[J] = "PgTimestamp";
    withTimezone;
    precision;
    constructor(e, n) {
        super(e, n),
        this.withTimezone = n.withTimezone,
        this.precision = n.precision
    }
    getSQLType() {
        return `timestamp${this.precision === void 0 ? "" : ` (${this.precision})`}${this.withTimezone ? " with time zone" : ""}`
    }
    mapFromDriverValue = e => new Date(this.withTimezone ? e : e + "+0000");
    mapToDriverValue = e => e.toISOString()
}
class k2 extends pa {
    static[J] = "PgTimestampStringBuilder";
    constructor(e, n, s) {
        super(e, "string", "PgTimestampString"),
        this.config.withTimezone = n,
        this.config.precision = s
    }
    build(e) {
        return new A2(e,this.config)
    }
}
class A2 extends Ve {
    static[J] = "PgTimestampString";
    withTimezone;
    precision;
    constructor(e, n) {
        super(e, n),
        this.withTimezone = n.withTimezone,
        this.precision = n.precision
    }
    getSQLType() {
        return `timestamp${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`
    }
}
function Mb(t, e={}) {
    const {name: n, config: s} = Et(t, e);
    return s?.mode === "string" ? new k2(n,s.withTimezone ?? !1,s.precision) : new C2(n,s?.withTimezone ?? !1,s?.precision)
}
class R2 extends He {
    static[J] = "PgUUIDBuilder";
    constructor(e) {
        super(e, "string", "PgUUID")
    }
    defaultRandom() {
        return this.default(_u`gen_random_uuid()`)
    }
    build(e) {
        return new N2(e,this.config)
    }
}
class N2 extends Ve {
    static[J] = "PgUUID";
    getSQLType() {
        return "uuid"
    }
}
function O2(t) {
    return new R2(t ?? "")
}
class D2 extends He {
    static[J] = "PgVarcharBuilder";
    constructor(e, n) {
        super(e, "string", "PgVarchar"),
        this.config.length = n.length,
        this.config.enumValues = n.enum
    }
    build(e) {
        return new M2(e,this.config)
    }
}
class M2 extends Ve {
    static[J] = "PgVarchar";
    length = this.config.length;
    enumValues = this.config.enumValues;
    getSQLType() {
        return this.length === void 0 ? "varchar" : `varchar(${this.length})`
    }
}
function I2(t, e={}) {
    const {name: n, config: s} = Et(t, e);
    return new D2(n,s)
}
class L2 extends He {
    static[J] = "PgBinaryVectorBuilder";
    constructor(e, n) {
        super(e, "string", "PgBinaryVector"),
        this.config.dimensions = n.dimensions
    }
    build(e) {
        return new j2(e,this.config)
    }
}
class j2 extends Ve {
    static[J] = "PgBinaryVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `bit(${this.dimensions})`
    }
}
function V2(t, e) {
    const {name: n, config: s} = Et(t, e);
    return new L2(n,s)
}
class F2 extends He {
    static[J] = "PgHalfVectorBuilder";
    constructor(e, n) {
        super(e, "array", "PgHalfVector"),
        this.config.dimensions = n.dimensions
    }
    build(e) {
        return new B2(e,this.config)
    }
}
class B2 extends Ve {
    static[J] = "PgHalfVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `halfvec(${this.dimensions})`
    }
    mapToDriverValue(e) {
        return JSON.stringify(e)
    }
    mapFromDriverValue(e) {
        return e.slice(1, -1).split(",").map(n => Number.parseFloat(n))
    }
}
function z2(t, e) {
    const {name: n, config: s} = Et(t, e);
    return new F2(n,s)
}
class U2 extends He {
    static[J] = "PgSparseVectorBuilder";
    constructor(e, n) {
        super(e, "string", "PgSparseVector"),
        this.config.dimensions = n.dimensions
    }
    build(e) {
        return new $2(e,this.config)
    }
}
class $2 extends Ve {
    static[J] = "PgSparseVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `sparsevec(${this.dimensions})`
    }
}
function H2(t, e) {
    const {name: n, config: s} = Et(t, e);
    return new U2(n,s)
}
class W2 extends He {
    static[J] = "PgVectorBuilder";
    constructor(e, n) {
        super(e, "array", "PgVector"),
        this.config.dimensions = n.dimensions
    }
    build(e) {
        return new q2(e,this.config)
    }
}
class q2 extends Ve {
    static[J] = "PgVector";
    dimensions = this.config.dimensions;
    getSQLType() {
        return `vector(${this.dimensions})`
    }
    mapToDriverValue(e) {
        return JSON.stringify(e)
    }
    mapFromDriverValue(e) {
        return e.slice(1, -1).split(",").map(n => Number.parseFloat(n))
    }
}
function Q2(t, e) {
    const {name: n, config: s} = Et(t, e);
    return new W2(n,s)
}
function K2() {
    return {
        bigint: YD,
        bigserial: rM,
        boolean: oM,
        char: uM,
        cidr: fM,
        customType: mM,
        date: wM,
        doublePrecision: TM,
        inet: CM,
        integer: AM,
        interval: OM,
        json: IM,
        jsonb: VM,
        line: $M,
        macaddr: qM,
        macaddr8: ZM,
        numeric: YM,
        point: r2,
        geometry: u2,
        real: f2,
        serial: Db,
        smallint: y2,
        smallserial: w2,
        text: tu,
        time: P2,
        timestamp: Mb,
        uuid: O2,
        varchar: I2,
        bit: V2,
        halfvec: z2,
        sparsevec: H2,
        vector: Q2
    }
}
const ah = Symbol.for("drizzle:PgInlineForeignKeys")
  , z0 = Symbol.for("drizzle:EnableRLS");
class U0 extends dn {
    static[J] = "PgTable";
    static Symbol = Object.assign({}, dn.Symbol, {
        InlineForeignKeys: ah,
        EnableRLS: z0
    });
    [ah] = [];
    [z0] = !1;
    [dn.Symbol.ExtraConfigBuilder] = void 0
}
function Z2(t, e, n, s, o=t) {
    const l = new U0(t,s,o)
      , u = typeof e == "function" ? e(K2()) : e
      , d = Object.fromEntries(Object.entries(u).map( ([m,y]) => {
        const v = y;
        v.setName(m);
        const w = v.build(l);
        return l[ah].push(...v.buildForeignKeys(w, l)),
        [m, w]
    }
    ))
      , f = Object.fromEntries(Object.entries(u).map( ([m,y]) => {
        const v = y;
        v.setName(m);
        const w = v.buildExtraConfigColumn(l);
        return [m, w]
    }
    ))
      , h = Object.assign(l, d);
    return h[dn.Symbol.Columns] = d,
    h[dn.Symbol.ExtraConfigColumns] = f,
    Object.assign(h, {
        enableRLS: () => (h[U0.Symbol.EnableRLS] = !0,
        h)
    })
}
const G2 = (t, e, n) => Z2(t, e, n, void 0);
var Ue;
(function(t) {
    t.assertEqual = o => o;
    function e(o) {}
    t.assertIs = e;
    function n(o) {
        throw new Error
    }
    t.assertNever = n,
    t.arrayToEnum = o => {
        const l = {};
        for (const u of o)
            l[u] = u;
        return l
    }
    ,
    t.getValidEnumValues = o => {
        const l = t.objectKeys(o).filter(d => typeof o[o[d]] != "number")
          , u = {};
        for (const d of l)
            u[d] = o[d];
        return t.objectValues(u)
    }
    ,
    t.objectValues = o => t.objectKeys(o).map(function(l) {
        return o[l]
    }),
    t.objectKeys = typeof Object.keys == "function" ? o => Object.keys(o) : o => {
        const l = [];
        for (const u in o)
            Object.prototype.hasOwnProperty.call(o, u) && l.push(u);
        return l
    }
    ,
    t.find = (o, l) => {
        for (const u of o)
            if (l(u))
                return u
    }
    ,
    t.isInteger = typeof Number.isInteger == "function" ? o => Number.isInteger(o) : o => typeof o == "number" && isFinite(o) && Math.floor(o) === o;
    function s(o, l=" | ") {
        return o.map(u => typeof u == "string" ? `'${u}'` : u).join(l)
    }
    t.joinValues = s,
    t.jsonStringifyReplacer = (o, l) => typeof l == "bigint" ? l.toString() : l
}
)(Ue || (Ue = {}));
var lh;
(function(t) {
    t.mergeShapes = (e, n) => ({
        ...e,
        ...n
    })
}
)(lh || (lh = {}));
const pe = Ue.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
  , yr = t => {
    switch (typeof t) {
    case "undefined":
        return pe.undefined;
    case "string":
        return pe.string;
    case "number":
        return isNaN(t) ? pe.nan : pe.number;
    case "boolean":
        return pe.boolean;
    case "function":
        return pe.function;
    case "bigint":
        return pe.bigint;
    case "symbol":
        return pe.symbol;
    case "object":
        return Array.isArray(t) ? pe.array : t === null ? pe.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? pe.promise : typeof Map < "u" && t instanceof Map ? pe.map : typeof Set < "u" && t instanceof Set ? pe.set : typeof Date < "u" && t instanceof Date ? pe.date : pe.object;
    default:
        return pe.unknown
    }
}
  , re = Ue.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"])
  , X2 = t => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class hn extends Error {
    get errors() {
        return this.issues
    }
    constructor(e) {
        super(),
        this.issues = [],
        this.addIssue = s => {
            this.issues = [...this.issues, s]
        }
        ,
        this.addIssues = (s=[]) => {
            this.issues = [...this.issues, ...s]
        }
        ;
        const n = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n,
        this.name = "ZodError",
        this.issues = e
    }
    format(e) {
        const n = e || function(l) {
            return l.message
        }
          , s = {
            _errors: []
        }
          , o = l => {
            for (const u of l.issues)
                if (u.code === "invalid_union")
                    u.unionErrors.map(o);
                else if (u.code === "invalid_return_type")
                    o(u.returnTypeError);
                else if (u.code === "invalid_arguments")
                    o(u.argumentsError);
                else if (u.path.length === 0)
                    s._errors.push(n(u));
                else {
                    let d = s
                      , f = 0;
                    for (; f < u.path.length; ) {
                        const h = u.path[f];
                        f === u.path.length - 1 ? (d[h] = d[h] || {
                            _errors: []
                        },
                        d[h]._errors.push(n(u))) : d[h] = d[h] || {
                            _errors: []
                        },
                        d = d[h],
                        f++
                    }
                }
        }
        ;
        return o(this),
        s
    }
    static assert(e) {
        if (!(e instanceof hn))
            throw new Error(`Not a ZodError: ${e}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, Ue.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(e=n => n.message) {
        const n = {}
          , s = [];
        for (const o of this.issues)
            o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [],
            n[o.path[0]].push(e(o))) : s.push(e(o));
        return {
            formErrors: s,
            fieldErrors: n
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
hn.create = t => new hn(t);
const As = (t, e) => {
    let n;
    switch (t.code) {
    case re.invalid_type:
        t.received === pe.undefined ? n = "Required" : n = `Expected ${t.expected}, received ${t.received}`;
        break;
    case re.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(t.expected, Ue.jsonStringifyReplacer)}`;
        break;
    case re.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${Ue.joinValues(t.keys, ", ")}`;
        break;
    case re.invalid_union:
        n = "Invalid input";
        break;
    case re.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${Ue.joinValues(t.options)}`;
        break;
    case re.invalid_enum_value:
        n = `Invalid enum value. Expected ${Ue.joinValues(t.options)}, received '${t.received}'`;
        break;
    case re.invalid_arguments:
        n = "Invalid function arguments";
        break;
    case re.invalid_return_type:
        n = "Invalid function return type";
        break;
    case re.invalid_date:
        n = "Invalid date";
        break;
    case re.invalid_string:
        typeof t.validation == "object" ? "includes"in t.validation ? (n = `Invalid input: must include "${t.validation.includes}"`,
        typeof t.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith"in t.validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith"in t.validation ? n = `Invalid input: must end with "${t.validation.endsWith}"` : Ue.assertNever(t.validation) : t.validation !== "regex" ? n = `Invalid ${t.validation}` : n = "Invalid";
        break;
    case re.too_small:
        t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : n = "Invalid input";
        break;
    case re.too_big:
        t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? n = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : n = "Invalid input";
        break;
    case re.custom:
        n = "Invalid input";
        break;
    case re.invalid_intersection_types:
        n = "Intersection results could not be merged";
        break;
    case re.not_multiple_of:
        n = `Number must be a multiple of ${t.multipleOf}`;
        break;
    case re.not_finite:
        n = "Number must be finite";
        break;
    default:
        n = e.defaultError,
        Ue.assertNever(t)
    }
    return {
        message: n
    }
}
;
let Ib = As;
function Y2(t) {
    Ib = t
}
function Pu() {
    return Ib
}
const Cu = t => {
    const {data: e, path: n, errorMaps: s, issueData: o} = t
      , l = [...n, ...o.path || []]
      , u = {
        ...o,
        path: l
    };
    if (o.message !== void 0)
        return {
            ...o,
            path: l,
            message: o.message
        };
    let d = "";
    const f = s.filter(h => !!h).slice().reverse();
    for (const h of f)
        d = h(u, {
            data: e,
            defaultError: d
        }).message;
    return {
        ...o,
        path: l,
        message: d
    }
}
  , J2 = [];
function de(t, e) {
    const n = Pu()
      , s = Cu({
        issueData: e,
        data: t.data,
        path: t.path,
        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, n, n === As ? void 0 : As].filter(o => !!o)
    });
    t.common.issues.push(s)
}
class $t {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(e, n) {
        const s = [];
        for (const o of n) {
            if (o.status === "aborted")
                return Ae;
            o.status === "dirty" && e.dirty(),
            s.push(o.value)
        }
        return {
            status: e.value,
            value: s
        }
    }
    static async mergeObjectAsync(e, n) {
        const s = [];
        for (const o of n) {
            const l = await o.key
              , u = await o.value;
            s.push({
                key: l,
                value: u
            })
        }
        return $t.mergeObjectSync(e, s)
    }
    static mergeObjectSync(e, n) {
        const s = {};
        for (const o of n) {
            const {key: l, value: u} = o;
            if (l.status === "aborted" || u.status === "aborted")
                return Ae;
            l.status === "dirty" && e.dirty(),
            u.status === "dirty" && e.dirty(),
            l.value !== "__proto__" && (typeof u.value < "u" || o.alwaysSet) && (s[l.value] = u.value)
        }
        return {
            status: e.value,
            value: s
        }
    }
}
const Ae = Object.freeze({
    status: "aborted"
})
  , ys = t => ({
    status: "dirty",
    value: t
})
  , Zt = t => ({
    status: "valid",
    value: t
})
  , uh = t => t.status === "aborted"
  , ch = t => t.status === "dirty"
  , Ai = t => t.status === "valid"
  , Ko = t => typeof Promise < "u" && t instanceof Promise;
function Eu(t, e, n, s) {
    if (typeof e == "function" ? t !== e || !0 : !e.has(t))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return e.get(t)
}
function Lb(t, e, n, s, o) {
    if (typeof e == "function" ? t !== e || !0 : !e.has(t))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return e.set(t, n),
    n
}
var Se;
(function(t) {
    t.errToObj = e => typeof e == "string" ? {
        message: e
    } : e || {},
    t.toString = e => typeof e == "string" ? e : e?.message
}
)(Se || (Se = {}));
var No, Oo;
class er {
    constructor(e, n, s, o) {
        this._cachedPath = [],
        this.parent = e,
        this.data = n,
        this._path = s,
        this._key = o
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
const $0 = (t, e) => {
    if (Ai(e))
        return {
            success: !0,
            data: e.value
        };
    if (!t.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            const n = new hn(t.common.issues);
            return this._error = n,
            this._error
        }
    }
}
;
function Me(t) {
    if (!t)
        return {};
    const {errorMap: e, invalid_type_error: n, required_error: s, description: o} = t;
    if (e && (n || s))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return e ? {
        errorMap: e,
        description: o
    } : {
        errorMap: (u, d) => {
            var f, h;
            const {message: m} = t;
            return u.code === "invalid_enum_value" ? {
                message: m ?? d.defaultError
            } : typeof d.data > "u" ? {
                message: (f = m ?? s) !== null && f !== void 0 ? f : d.defaultError
            } : u.code !== "invalid_type" ? {
                message: d.defaultError
            } : {
                message: (h = m ?? n) !== null && h !== void 0 ? h : d.defaultError
            }
        }
        ,
        description: o
    }
}
class Fe {
    get description() {
        return this._def.description
    }
    _getType(e) {
        return yr(e.data)
    }
    _getOrReturnCtx(e, n) {
        return n || {
            common: e.parent.common,
            data: e.data,
            parsedType: yr(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        }
    }
    _processInputParams(e) {
        return {
            status: new $t,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: yr(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        }
    }
    _parseSync(e) {
        const n = this._parse(e);
        if (Ko(n))
            throw new Error("Synchronous parse encountered promise.");
        return n
    }
    _parseAsync(e) {
        const n = this._parse(e);
        return Promise.resolve(n)
    }
    parse(e, n) {
        const s = this.safeParse(e, n);
        if (s.success)
            return s.data;
        throw s.error
    }
    safeParse(e, n) {
        var s;
        const o = {
            common: {
                issues: [],
                async: (s = n?.async) !== null && s !== void 0 ? s : !1,
                contextualErrorMap: n?.errorMap
            },
            path: n?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: yr(e)
        }
          , l = this._parseSync({
            data: e,
            path: o.path,
            parent: o
        });
        return $0(o, l)
    }
    "~validate"(e) {
        var n, s;
        const o = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: yr(e)
        };
        if (!this["~standard"].async)
            try {
                const l = this._parseSync({
                    data: e,
                    path: [],
                    parent: o
                });
                return Ai(l) ? {
                    value: l.value
                } : {
                    issues: o.common.issues
                }
            } catch (l) {
                !((s = (n = l?.message) === null || n === void 0 ? void 0 : n.toLowerCase()) === null || s === void 0) && s.includes("encountered") && (this["~standard"].async = !0),
                o.common = {
                    issues: [],
                    async: !0
                }
            }
        return this._parseAsync({
            data: e,
            path: [],
            parent: o
        }).then(l => Ai(l) ? {
            value: l.value
        } : {
            issues: o.common.issues
        })
    }
    async parseAsync(e, n) {
        const s = await this.safeParseAsync(e, n);
        if (s.success)
            return s.data;
        throw s.error
    }
    async safeParseAsync(e, n) {
        const s = {
            common: {
                issues: [],
                contextualErrorMap: n?.errorMap,
                async: !0
            },
            path: n?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: yr(e)
        }
          , o = this._parse({
            data: e,
            path: s.path,
            parent: s
        })
          , l = await (Ko(o) ? o : Promise.resolve(o));
        return $0(s, l)
    }
    refine(e, n) {
        const s = o => typeof n == "string" || typeof n > "u" ? {
            message: n
        } : typeof n == "function" ? n(o) : n;
        return this._refinement( (o, l) => {
            const u = e(o)
              , d = () => l.addIssue({
                code: re.custom,
                ...s(o)
            });
            return typeof Promise < "u" && u instanceof Promise ? u.then(f => f ? !0 : (d(),
            !1)) : u ? !0 : (d(),
            !1)
        }
        )
    }
    refinement(e, n) {
        return this._refinement( (s, o) => e(s) ? !0 : (o.addIssue(typeof n == "function" ? n(s, o) : n),
        !1))
    }
    _refinement(e) {
        return new zn({
            schema: this,
            typeName: ke.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        })
    }
    superRefine(e) {
        return this._refinement(e)
    }
    constructor(e) {
        this.spa = this.safeParseAsync,
        this._def = e,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this),
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: n => this["~validate"](n)
        }
    }
    optional() {
        return Xn.create(this, this._def)
    }
    nullable() {
        return ii.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return jn.create(this)
    }
    promise() {
        return Ns.create(this, this._def)
    }
    or(e) {
        return Yo.create([this, e], this._def)
    }
    and(e) {
        return Jo.create(this, e, this._def)
    }
    transform(e) {
        return new zn({
            ...Me(this._def),
            schema: this,
            typeName: ke.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        })
    }
    default(e) {
        const n = typeof e == "function" ? e : () => e;
        return new ia({
            ...Me(this._def),
            innerType: this,
            defaultValue: n,
            typeName: ke.ZodDefault
        })
    }
    brand() {
        return new Sp({
            typeName: ke.ZodBranded,
            type: this,
            ...Me(this._def)
        })
    }
    catch(e) {
        const n = typeof e == "function" ? e : () => e;
        return new sa({
            ...Me(this._def),
            innerType: this,
            catchValue: n,
            typeName: ke.ZodCatch
        })
    }
    describe(e) {
        const n = this.constructor;
        return new n({
            ...this._def,
            description: e
        })
    }
    pipe(e) {
        return ma.create(this, e)
    }
    readonly() {
        return oa.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const eI = /^c[^\s-]{8,}$/i
  , tI = /^[0-9a-z]+$/
  , nI = /^[0-9A-HJKMNP-TV-Z]{26}$/i
  , rI = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
  , iI = /^[a-z0-9_-]{21}$/i
  , sI = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
  , oI = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/
  , aI = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
  , lI = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Af;
const uI = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
  , cI = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/
  , dI = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
  , fI = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/
  , hI = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
  , pI = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/
  , jb = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"
  , mI = new RegExp(`^${jb}$`);
function Vb(t) {
    let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return t.precision ? e = `${e}\\.\\d{${t.precision}}` : t.precision == null && (e = `${e}(\\.\\d+)?`),
    e
}
function gI(t) {
    return new RegExp(`^${Vb(t)}$`)
}
function Fb(t) {
    let e = `${jb}T${Vb(t)}`;
    const n = [];
    return n.push(t.local ? "Z?" : "Z"),
    t.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    e = `${e}(${n.join("|")})`,
    new RegExp(`^${e}$`)
}
function yI(t, e) {
    return !!((e === "v4" || !e) && uI.test(t) || (e === "v6" || !e) && dI.test(t))
}
function vI(t, e) {
    if (!sI.test(t))
        return !1;
    try {
        const [n] = t.split(".")
          , s = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "=")
          , o = JSON.parse(atob(s));
        return !(typeof o != "object" || o === null || !o.typ || !o.alg || e && o.alg !== e)
    } catch {
        return !1
    }
}
function xI(t, e) {
    return !!((e === "v4" || !e) && cI.test(t) || (e === "v6" || !e) && fI.test(t))
}
class Ln extends Fe {
    _parse(e) {
        if (this._def.coerce && (e.data = String(e.data)),
        this._getType(e) !== pe.string) {
            const l = this._getOrReturnCtx(e);
            return de(l, {
                code: re.invalid_type,
                expected: pe.string,
                received: l.parsedType
            }),
            Ae
        }
        const s = new $t;
        let o;
        for (const l of this._def.checks)
            if (l.kind === "min")
                e.data.length < l.value && (o = this._getOrReturnCtx(e, o),
                de(o, {
                    code: re.too_small,
                    minimum: l.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: l.message
                }),
                s.dirty());
            else if (l.kind === "max")
                e.data.length > l.value && (o = this._getOrReturnCtx(e, o),
                de(o, {
                    code: re.too_big,
                    maximum: l.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: l.message
                }),
                s.dirty());
            else if (l.kind === "length") {
                const u = e.data.length > l.value
                  , d = e.data.length < l.value;
                (u || d) && (o = this._getOrReturnCtx(e, o),
                u ? de(o, {
                    code: re.too_big,
                    maximum: l.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: l.message
                }) : d && de(o, {
                    code: re.too_small,
                    minimum: l.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: l.message
                }),
                s.dirty())
            } else if (l.kind === "email")
                aI.test(e.data) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    validation: "email",
                    code: re.invalid_string,
                    message: l.message
                }),
                s.dirty());
            else if (l.kind === "emoji")
                Af || (Af = new RegExp(lI,"u")),
                Af.test(e.data) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    validation: "emoji",
                    code: re.invalid_string,
                    message: l.message
                }),
                s.dirty());
            else if (l.kind === "uuid")
                rI.test(e.data) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    validation: "uuid",
                    code: re.invalid_string,
                    message: l.message
                }),
                s.dirty());
            else if (l.kind === "nanoid")
                iI.test(e.data) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    validation: "nanoid",
                    code: re.invalid_string,
                    message: l.message
                }),
                s.dirty());
            else if (l.kind === "cuid")
                eI.test(e.data) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    validation: "cuid",
                    code: re.invalid_string,
                    message: l.message
                }),
                s.dirty());
            else if (l.kind === "cuid2")
                tI.test(e.data) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    validation: "cuid2",
                    code: re.invalid_string,
                    message: l.message
                }),
                s.dirty());
            else if (l.kind === "ulid")
                nI.test(e.data) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    validation: "ulid",
                    code: re.invalid_string,
                    message: l.message
                }),
                s.dirty());
            else if (l.kind === "url")
                try {
                    new URL(e.data)
                } catch {
                    o = this._getOrReturnCtx(e, o),
                    de(o, {
                        validation: "url",
                        code: re.invalid_string,
                        message: l.message
                    }),
                    s.dirty()
                }
            else
                l.kind === "regex" ? (l.regex.lastIndex = 0,
                l.regex.test(e.data) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    validation: "regex",
                    code: re.invalid_string,
                    message: l.message
                }),
                s.dirty())) : l.kind === "trim" ? e.data = e.data.trim() : l.kind === "includes" ? e.data.includes(l.value, l.position) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    code: re.invalid_string,
                    validation: {
                        includes: l.value,
                        position: l.position
                    },
                    message: l.message
                }),
                s.dirty()) : l.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : l.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : l.kind === "startsWith" ? e.data.startsWith(l.value) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    code: re.invalid_string,
                    validation: {
                        startsWith: l.value
                    },
                    message: l.message
                }),
                s.dirty()) : l.kind === "endsWith" ? e.data.endsWith(l.value) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    code: re.invalid_string,
                    validation: {
                        endsWith: l.value
                    },
                    message: l.message
                }),
                s.dirty()) : l.kind === "datetime" ? Fb(l).test(e.data) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    code: re.invalid_string,
                    validation: "datetime",
                    message: l.message
                }),
                s.dirty()) : l.kind === "date" ? mI.test(e.data) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    code: re.invalid_string,
                    validation: "date",
                    message: l.message
                }),
                s.dirty()) : l.kind === "time" ? gI(l).test(e.data) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    code: re.invalid_string,
                    validation: "time",
                    message: l.message
                }),
                s.dirty()) : l.kind === "duration" ? oI.test(e.data) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    validation: "duration",
                    code: re.invalid_string,
                    message: l.message
                }),
                s.dirty()) : l.kind === "ip" ? yI(e.data, l.version) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    validation: "ip",
                    code: re.invalid_string,
                    message: l.message
                }),
                s.dirty()) : l.kind === "jwt" ? vI(e.data, l.alg) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    validation: "jwt",
                    code: re.invalid_string,
                    message: l.message
                }),
                s.dirty()) : l.kind === "cidr" ? xI(e.data, l.version) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    validation: "cidr",
                    code: re.invalid_string,
                    message: l.message
                }),
                s.dirty()) : l.kind === "base64" ? hI.test(e.data) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    validation: "base64",
                    code: re.invalid_string,
                    message: l.message
                }),
                s.dirty()) : l.kind === "base64url" ? pI.test(e.data) || (o = this._getOrReturnCtx(e, o),
                de(o, {
                    validation: "base64url",
                    code: re.invalid_string,
                    message: l.message
                }),
                s.dirty()) : Ue.assertNever(l);
        return {
            status: s.value,
            value: e.data
        }
    }
    _regex(e, n, s) {
        return this.refinement(o => e.test(o), {
            validation: n,
            code: re.invalid_string,
            ...Se.errToObj(s)
        })
    }
    _addCheck(e) {
        return new Ln({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...Se.errToObj(e)
        })
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...Se.errToObj(e)
        })
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...Se.errToObj(e)
        })
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...Se.errToObj(e)
        })
    }
    nanoid(e) {
        return this._addCheck({
            kind: "nanoid",
            ...Se.errToObj(e)
        })
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...Se.errToObj(e)
        })
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...Se.errToObj(e)
        })
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...Se.errToObj(e)
        })
    }
    base64(e) {
        return this._addCheck({
            kind: "base64",
            ...Se.errToObj(e)
        })
    }
    base64url(e) {
        return this._addCheck({
            kind: "base64url",
            ...Se.errToObj(e)
        })
    }
    jwt(e) {
        return this._addCheck({
            kind: "jwt",
            ...Se.errToObj(e)
        })
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...Se.errToObj(e)
        })
    }
    cidr(e) {
        return this._addCheck({
            kind: "cidr",
            ...Se.errToObj(e)
        })
    }
    datetime(e) {
        var n, s;
        return typeof e == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof e?.precision > "u" ? null : e?.precision,
            offset: (n = e?.offset) !== null && n !== void 0 ? n : !1,
            local: (s = e?.local) !== null && s !== void 0 ? s : !1,
            ...Se.errToObj(e?.message)
        })
    }
    date(e) {
        return this._addCheck({
            kind: "date",
            message: e
        })
    }
    time(e) {
        return typeof e == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: e
        }) : this._addCheck({
            kind: "time",
            precision: typeof e?.precision > "u" ? null : e?.precision,
            ...Se.errToObj(e?.message)
        })
    }
    duration(e) {
        return this._addCheck({
            kind: "duration",
            ...Se.errToObj(e)
        })
    }
    regex(e, n) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...Se.errToObj(n)
        })
    }
    includes(e, n) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: n?.position,
            ...Se.errToObj(n?.message)
        })
    }
    startsWith(e, n) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...Se.errToObj(n)
        })
    }
    endsWith(e, n) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...Se.errToObj(n)
        })
    }
    min(e, n) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...Se.errToObj(n)
        })
    }
    max(e, n) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...Se.errToObj(n)
        })
    }
    length(e, n) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...Se.errToObj(n)
        })
    }
    nonempty(e) {
        return this.min(1, Se.errToObj(e))
    }
    trim() {
        return new Ln({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new Ln({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new Ln({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(e => e.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(e => e.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(e => e.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(e => e.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(e => e.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(e => e.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(e => e.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(e => e.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(e => e.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(e => e.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(e => e.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(e => e.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(e => e.kind === "ip")
    }
    get isCIDR() {
        return !!this._def.checks.find(e => e.kind === "cidr")
    }
    get isBase64() {
        return !!this._def.checks.find(e => e.kind === "base64")
    }
    get isBase64url() {
        return !!this._def.checks.find(e => e.kind === "base64url")
    }
    get minLength() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxLength() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
}
Ln.create = t => {
    var e;
    return new Ln({
        checks: [],
        typeName: ke.ZodString,
        coerce: (e = t?.coerce) !== null && e !== void 0 ? e : !1,
        ...Me(t)
    })
}
;
function wI(t, e) {
    const n = (t.toString().split(".")[1] || "").length
      , s = (e.toString().split(".")[1] || "").length
      , o = n > s ? n : s
      , l = parseInt(t.toFixed(o).replace(".", ""))
      , u = parseInt(e.toFixed(o).replace(".", ""));
    return l % u / Math.pow(10, o)
}
class ti extends Fe {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(e) {
        if (this._def.coerce && (e.data = Number(e.data)),
        this._getType(e) !== pe.number) {
            const l = this._getOrReturnCtx(e);
            return de(l, {
                code: re.invalid_type,
                expected: pe.number,
                received: l.parsedType
            }),
            Ae
        }
        let s;
        const o = new $t;
        for (const l of this._def.checks)
            l.kind === "int" ? Ue.isInteger(e.data) || (s = this._getOrReturnCtx(e, s),
            de(s, {
                code: re.invalid_type,
                expected: "integer",
                received: "float",
                message: l.message
            }),
            o.dirty()) : l.kind === "min" ? (l.inclusive ? e.data < l.value : e.data <= l.value) && (s = this._getOrReturnCtx(e, s),
            de(s, {
                code: re.too_small,
                minimum: l.value,
                type: "number",
                inclusive: l.inclusive,
                exact: !1,
                message: l.message
            }),
            o.dirty()) : l.kind === "max" ? (l.inclusive ? e.data > l.value : e.data >= l.value) && (s = this._getOrReturnCtx(e, s),
            de(s, {
                code: re.too_big,
                maximum: l.value,
                type: "number",
                inclusive: l.inclusive,
                exact: !1,
                message: l.message
            }),
            o.dirty()) : l.kind === "multipleOf" ? wI(e.data, l.value) !== 0 && (s = this._getOrReturnCtx(e, s),
            de(s, {
                code: re.not_multiple_of,
                multipleOf: l.value,
                message: l.message
            }),
            o.dirty()) : l.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s),
            de(s, {
                code: re.not_finite,
                message: l.message
            }),
            o.dirty()) : Ue.assertNever(l);
        return {
            status: o.value,
            value: e.data
        }
    }
    gte(e, n) {
        return this.setLimit("min", e, !0, Se.toString(n))
    }
    gt(e, n) {
        return this.setLimit("min", e, !1, Se.toString(n))
    }
    lte(e, n) {
        return this.setLimit("max", e, !0, Se.toString(n))
    }
    lt(e, n) {
        return this.setLimit("max", e, !1, Se.toString(n))
    }
    setLimit(e, n, s, o) {
        return new ti({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: n,
                inclusive: s,
                message: Se.toString(o)
            }]
        })
    }
    _addCheck(e) {
        return new ti({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: Se.toString(e)
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: Se.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: Se.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: Se.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: Se.toString(e)
        })
    }
    multipleOf(e, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: Se.toString(n)
        })
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: Se.toString(e)
        })
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: Se.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: Se.toString(e)
        })
    }
    get minValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
    get isInt() {
        return !!this._def.checks.find(e => e.kind === "int" || e.kind === "multipleOf" && Ue.isInteger(e.value))
    }
    get isFinite() {
        let e = null
          , n = null;
        for (const s of this._def.checks) {
            if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
                return !0;
            s.kind === "min" ? (n === null || s.value > n) && (n = s.value) : s.kind === "max" && (e === null || s.value < e) && (e = s.value)
        }
        return Number.isFinite(n) && Number.isFinite(e)
    }
}
ti.create = t => new ti({
    checks: [],
    typeName: ke.ZodNumber,
    coerce: t?.coerce || !1,
    ...Me(t)
});
class ni extends Fe {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(e) {
        if (this._def.coerce)
            try {
                e.data = BigInt(e.data)
            } catch {
                return this._getInvalidInput(e)
            }
        if (this._getType(e) !== pe.bigint)
            return this._getInvalidInput(e);
        let s;
        const o = new $t;
        for (const l of this._def.checks)
            l.kind === "min" ? (l.inclusive ? e.data < l.value : e.data <= l.value) && (s = this._getOrReturnCtx(e, s),
            de(s, {
                code: re.too_small,
                type: "bigint",
                minimum: l.value,
                inclusive: l.inclusive,
                message: l.message
            }),
            o.dirty()) : l.kind === "max" ? (l.inclusive ? e.data > l.value : e.data >= l.value) && (s = this._getOrReturnCtx(e, s),
            de(s, {
                code: re.too_big,
                type: "bigint",
                maximum: l.value,
                inclusive: l.inclusive,
                message: l.message
            }),
            o.dirty()) : l.kind === "multipleOf" ? e.data % l.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s),
            de(s, {
                code: re.not_multiple_of,
                multipleOf: l.value,
                message: l.message
            }),
            o.dirty()) : Ue.assertNever(l);
        return {
            status: o.value,
            value: e.data
        }
    }
    _getInvalidInput(e) {
        const n = this._getOrReturnCtx(e);
        return de(n, {
            code: re.invalid_type,
            expected: pe.bigint,
            received: n.parsedType
        }),
        Ae
    }
    gte(e, n) {
        return this.setLimit("min", e, !0, Se.toString(n))
    }
    gt(e, n) {
        return this.setLimit("min", e, !1, Se.toString(n))
    }
    lte(e, n) {
        return this.setLimit("max", e, !0, Se.toString(n))
    }
    lt(e, n) {
        return this.setLimit("max", e, !1, Se.toString(n))
    }
    setLimit(e, n, s, o) {
        return new ni({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: n,
                inclusive: s,
                message: Se.toString(o)
            }]
        })
    }
    _addCheck(e) {
        return new ni({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: Se.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: Se.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: Se.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: Se.toString(e)
        })
    }
    multipleOf(e, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: Se.toString(n)
        })
    }
    get minValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
}
ni.create = t => {
    var e;
    return new ni({
        checks: [],
        typeName: ke.ZodBigInt,
        coerce: (e = t?.coerce) !== null && e !== void 0 ? e : !1,
        ...Me(t)
    })
}
;
class Zo extends Fe {
    _parse(e) {
        if (this._def.coerce && (e.data = !!e.data),
        this._getType(e) !== pe.boolean) {
            const s = this._getOrReturnCtx(e);
            return de(s, {
                code: re.invalid_type,
                expected: pe.boolean,
                received: s.parsedType
            }),
            Ae
        }
        return Zt(e.data)
    }
}
Zo.create = t => new Zo({
    typeName: ke.ZodBoolean,
    coerce: t?.coerce || !1,
    ...Me(t)
});
class Ri extends Fe {
    _parse(e) {
        if (this._def.coerce && (e.data = new Date(e.data)),
        this._getType(e) !== pe.date) {
            const l = this._getOrReturnCtx(e);
            return de(l, {
                code: re.invalid_type,
                expected: pe.date,
                received: l.parsedType
            }),
            Ae
        }
        if (isNaN(e.data.getTime())) {
            const l = this._getOrReturnCtx(e);
            return de(l, {
                code: re.invalid_date
            }),
            Ae
        }
        const s = new $t;
        let o;
        for (const l of this._def.checks)
            l.kind === "min" ? e.data.getTime() < l.value && (o = this._getOrReturnCtx(e, o),
            de(o, {
                code: re.too_small,
                message: l.message,
                inclusive: !0,
                exact: !1,
                minimum: l.value,
                type: "date"
            }),
            s.dirty()) : l.kind === "max" ? e.data.getTime() > l.value && (o = this._getOrReturnCtx(e, o),
            de(o, {
                code: re.too_big,
                message: l.message,
                inclusive: !0,
                exact: !1,
                maximum: l.value,
                type: "date"
            }),
            s.dirty()) : Ue.assertNever(l);
        return {
            status: s.value,
            value: new Date(e.data.getTime())
        }
    }
    _addCheck(e) {
        return new Ri({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    min(e, n) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: Se.toString(n)
        })
    }
    max(e, n) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: Se.toString(n)
        })
    }
    get minDate() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e != null ? new Date(e) : null
    }
    get maxDate() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e != null ? new Date(e) : null
    }
}
Ri.create = t => new Ri({
    checks: [],
    coerce: t?.coerce || !1,
    typeName: ke.ZodDate,
    ...Me(t)
});
class ku extends Fe {
    _parse(e) {
        if (this._getType(e) !== pe.symbol) {
            const s = this._getOrReturnCtx(e);
            return de(s, {
                code: re.invalid_type,
                expected: pe.symbol,
                received: s.parsedType
            }),
            Ae
        }
        return Zt(e.data)
    }
}
ku.create = t => new ku({
    typeName: ke.ZodSymbol,
    ...Me(t)
});
class Go extends Fe {
    _parse(e) {
        if (this._getType(e) !== pe.undefined) {
            const s = this._getOrReturnCtx(e);
            return de(s, {
                code: re.invalid_type,
                expected: pe.undefined,
                received: s.parsedType
            }),
            Ae
        }
        return Zt(e.data)
    }
}
Go.create = t => new Go({
    typeName: ke.ZodUndefined,
    ...Me(t)
});
class Xo extends Fe {
    _parse(e) {
        if (this._getType(e) !== pe.null) {
            const s = this._getOrReturnCtx(e);
            return de(s, {
                code: re.invalid_type,
                expected: pe.null,
                received: s.parsedType
            }),
            Ae
        }
        return Zt(e.data)
    }
}
Xo.create = t => new Xo({
    typeName: ke.ZodNull,
    ...Me(t)
});
class Rs extends Fe {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(e) {
        return Zt(e.data)
    }
}
Rs.create = t => new Rs({
    typeName: ke.ZodAny,
    ...Me(t)
});
class Pi extends Fe {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(e) {
        return Zt(e.data)
    }
}
Pi.create = t => new Pi({
    typeName: ke.ZodUnknown,
    ...Me(t)
});
class _r extends Fe {
    _parse(e) {
        const n = this._getOrReturnCtx(e);
        return de(n, {
            code: re.invalid_type,
            expected: pe.never,
            received: n.parsedType
        }),
        Ae
    }
}
_r.create = t => new _r({
    typeName: ke.ZodNever,
    ...Me(t)
});
class Au extends Fe {
    _parse(e) {
        if (this._getType(e) !== pe.undefined) {
            const s = this._getOrReturnCtx(e);
            return de(s, {
                code: re.invalid_type,
                expected: pe.void,
                received: s.parsedType
            }),
            Ae
        }
        return Zt(e.data)
    }
}
Au.create = t => new Au({
    typeName: ke.ZodVoid,
    ...Me(t)
});
class jn extends Fe {
    _parse(e) {
        const {ctx: n, status: s} = this._processInputParams(e)
          , o = this._def;
        if (n.parsedType !== pe.array)
            return de(n, {
                code: re.invalid_type,
                expected: pe.array,
                received: n.parsedType
            }),
            Ae;
        if (o.exactLength !== null) {
            const u = n.data.length > o.exactLength.value
              , d = n.data.length < o.exactLength.value;
            (u || d) && (de(n, {
                code: u ? re.too_big : re.too_small,
                minimum: d ? o.exactLength.value : void 0,
                maximum: u ? o.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: o.exactLength.message
            }),
            s.dirty())
        }
        if (o.minLength !== null && n.data.length < o.minLength.value && (de(n, {
            code: re.too_small,
            minimum: o.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: o.minLength.message
        }),
        s.dirty()),
        o.maxLength !== null && n.data.length > o.maxLength.value && (de(n, {
            code: re.too_big,
            maximum: o.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: o.maxLength.message
        }),
        s.dirty()),
        n.common.async)
            return Promise.all([...n.data].map( (u, d) => o.type._parseAsync(new er(n,u,n.path,d)))).then(u => $t.mergeArray(s, u));
        const l = [...n.data].map( (u, d) => o.type._parseSync(new er(n,u,n.path,d)));
        return $t.mergeArray(s, l)
    }
    get element() {
        return this._def.type
    }
    min(e, n) {
        return new jn({
            ...this._def,
            minLength: {
                value: e,
                message: Se.toString(n)
            }
        })
    }
    max(e, n) {
        return new jn({
            ...this._def,
            maxLength: {
                value: e,
                message: Se.toString(n)
            }
        })
    }
    length(e, n) {
        return new jn({
            ...this._def,
            exactLength: {
                value: e,
                message: Se.toString(n)
            }
        })
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
jn.create = (t, e) => new jn({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ke.ZodArray,
    ...Me(e)
});
function ds(t) {
    if (t instanceof ot) {
        const e = {};
        for (const n in t.shape) {
            const s = t.shape[n];
            e[n] = Xn.create(ds(s))
        }
        return new ot({
            ...t._def,
            shape: () => e
        })
    } else
        return t instanceof jn ? new jn({
            ...t._def,
            type: ds(t.element)
        }) : t instanceof Xn ? Xn.create(ds(t.unwrap())) : t instanceof ii ? ii.create(ds(t.unwrap())) : t instanceof tr ? tr.create(t.items.map(e => ds(e))) : t
}
class ot extends Fe {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const e = this._def.shape()
          , n = Ue.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: n
        }
    }
    _parse(e) {
        if (this._getType(e) !== pe.object) {
            const h = this._getOrReturnCtx(e);
            return de(h, {
                code: re.invalid_type,
                expected: pe.object,
                received: h.parsedType
            }),
            Ae
        }
        const {status: s, ctx: o} = this._processInputParams(e)
          , {shape: l, keys: u} = this._getCached()
          , d = [];
        if (!(this._def.catchall instanceof _r && this._def.unknownKeys === "strip"))
            for (const h in o.data)
                u.includes(h) || d.push(h);
        const f = [];
        for (const h of u) {
            const m = l[h]
              , y = o.data[h];
            f.push({
                key: {
                    status: "valid",
                    value: h
                },
                value: m._parse(new er(o,y,o.path,h)),
                alwaysSet: h in o.data
            })
        }
        if (this._def.catchall instanceof _r) {
            const h = this._def.unknownKeys;
            if (h === "passthrough")
                for (const m of d)
                    f.push({
                        key: {
                            status: "valid",
                            value: m
                        },
                        value: {
                            status: "valid",
                            value: o.data[m]
                        }
                    });
            else if (h === "strict")
                d.length > 0 && (de(o, {
                    code: re.unrecognized_keys,
                    keys: d
                }),
                s.dirty());
            else if (h !== "strip")
                throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const h = this._def.catchall;
            for (const m of d) {
                const y = o.data[m];
                f.push({
                    key: {
                        status: "valid",
                        value: m
                    },
                    value: h._parse(new er(o,y,o.path,m)),
                    alwaysSet: m in o.data
                })
            }
        }
        return o.common.async ? Promise.resolve().then(async () => {
            const h = [];
            for (const m of f) {
                const y = await m.key
                  , v = await m.value;
                h.push({
                    key: y,
                    value: v,
                    alwaysSet: m.alwaysSet
                })
            }
            return h
        }
        ).then(h => $t.mergeObjectSync(s, h)) : $t.mergeObjectSync(s, f)
    }
    get shape() {
        return this._def.shape()
    }
    strict(e) {
        return Se.errToObj,
        new ot({
            ...this._def,
            unknownKeys: "strict",
            ...e !== void 0 ? {
                errorMap: (n, s) => {
                    var o, l, u, d;
                    const f = (u = (l = (o = this._def).errorMap) === null || l === void 0 ? void 0 : l.call(o, n, s).message) !== null && u !== void 0 ? u : s.defaultError;
                    return n.code === "unrecognized_keys" ? {
                        message: (d = Se.errToObj(e).message) !== null && d !== void 0 ? d : f
                    } : {
                        message: f
                    }
                }
            } : {}
        })
    }
    strip() {
        return new ot({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new ot({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(e) {
        return new ot({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...e
            })
        })
    }
    merge(e) {
        return new ot({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...e._def.shape()
            }),
            typeName: ke.ZodObject
        })
    }
    setKey(e, n) {
        return this.augment({
            [e]: n
        })
    }
    catchall(e) {
        return new ot({
            ...this._def,
            catchall: e
        })
    }
    pick(e) {
        const n = {};
        return Ue.objectKeys(e).forEach(s => {
            e[s] && this.shape[s] && (n[s] = this.shape[s])
        }
        ),
        new ot({
            ...this._def,
            shape: () => n
        })
    }
    omit(e) {
        const n = {};
        return Ue.objectKeys(this.shape).forEach(s => {
            e[s] || (n[s] = this.shape[s])
        }
        ),
        new ot({
            ...this._def,
            shape: () => n
        })
    }
    deepPartial() {
        return ds(this)
    }
    partial(e) {
        const n = {};
        return Ue.objectKeys(this.shape).forEach(s => {
            const o = this.shape[s];
            e && !e[s] ? n[s] = o : n[s] = o.optional()
        }
        ),
        new ot({
            ...this._def,
            shape: () => n
        })
    }
    required(e) {
        const n = {};
        return Ue.objectKeys(this.shape).forEach(s => {
            if (e && !e[s])
                n[s] = this.shape[s];
            else {
                let l = this.shape[s];
                for (; l instanceof Xn; )
                    l = l._def.innerType;
                n[s] = l
            }
        }
        ),
        new ot({
            ...this._def,
            shape: () => n
        })
    }
    keyof() {
        return Bb(Ue.objectKeys(this.shape))
    }
}
ot.create = (t, e) => new ot({
    shape: () => t,
    unknownKeys: "strip",
    catchall: _r.create(),
    typeName: ke.ZodObject,
    ...Me(e)
});
ot.strictCreate = (t, e) => new ot({
    shape: () => t,
    unknownKeys: "strict",
    catchall: _r.create(),
    typeName: ke.ZodObject,
    ...Me(e)
});
ot.lazycreate = (t, e) => new ot({
    shape: t,
    unknownKeys: "strip",
    catchall: _r.create(),
    typeName: ke.ZodObject,
    ...Me(e)
});
class Yo extends Fe {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e)
          , s = this._def.options;
        function o(l) {
            for (const d of l)
                if (d.result.status === "valid")
                    return d.result;
            for (const d of l)
                if (d.result.status === "dirty")
                    return n.common.issues.push(...d.ctx.common.issues),
                    d.result;
            const u = l.map(d => new hn(d.ctx.common.issues));
            return de(n, {
                code: re.invalid_union,
                unionErrors: u
            }),
            Ae
        }
        if (n.common.async)
            return Promise.all(s.map(async l => {
                const u = {
                    ...n,
                    common: {
                        ...n.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await l._parseAsync({
                        data: n.data,
                        path: n.path,
                        parent: u
                    }),
                    ctx: u
                }
            }
            )).then(o);
        {
            let l;
            const u = [];
            for (const f of s) {
                const h = {
                    ...n,
                    common: {
                        ...n.common,
                        issues: []
                    },
                    parent: null
                }
                  , m = f._parseSync({
                    data: n.data,
                    path: n.path,
                    parent: h
                });
                if (m.status === "valid")
                    return m;
                m.status === "dirty" && !l && (l = {
                    result: m,
                    ctx: h
                }),
                h.common.issues.length && u.push(h.common.issues)
            }
            if (l)
                return n.common.issues.push(...l.ctx.common.issues),
                l.result;
            const d = u.map(f => new hn(f));
            return de(n, {
                code: re.invalid_union,
                unionErrors: d
            }),
            Ae
        }
    }
    get options() {
        return this._def.options
    }
}
Yo.create = (t, e) => new Yo({
    options: t,
    typeName: ke.ZodUnion,
    ...Me(e)
});
const gr = t => t instanceof ta ? gr(t.schema) : t instanceof zn ? gr(t.innerType()) : t instanceof na ? [t.value] : t instanceof ri ? t.options : t instanceof ra ? Ue.objectValues(t.enum) : t instanceof ia ? gr(t._def.innerType) : t instanceof Go ? [void 0] : t instanceof Xo ? [null] : t instanceof Xn ? [void 0, ...gr(t.unwrap())] : t instanceof ii ? [null, ...gr(t.unwrap())] : t instanceof Sp || t instanceof oa ? gr(t.unwrap()) : t instanceof sa ? gr(t._def.innerType) : [];
class rc extends Fe {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        if (n.parsedType !== pe.object)
            return de(n, {
                code: re.invalid_type,
                expected: pe.object,
                received: n.parsedType
            }),
            Ae;
        const s = this.discriminator
          , o = n.data[s]
          , l = this.optionsMap.get(o);
        return l ? n.common.async ? l._parseAsync({
            data: n.data,
            path: n.path,
            parent: n
        }) : l._parseSync({
            data: n.data,
            path: n.path,
            parent: n
        }) : (de(n, {
            code: re.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [s]
        }),
        Ae)
    }
    get discriminator() {
        return this._def.discriminator
    }
    get options() {
        return this._def.options
    }
    get optionsMap() {
        return this._def.optionsMap
    }
    static create(e, n, s) {
        const o = new Map;
        for (const l of n) {
            const u = gr(l.shape[e]);
            if (!u.length)
                throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const d of u) {
                if (o.has(d))
                    throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(d)}`);
                o.set(d, l)
            }
        }
        return new rc({
            typeName: ke.ZodDiscriminatedUnion,
            discriminator: e,
            options: n,
            optionsMap: o,
            ...Me(s)
        })
    }
}
function dh(t, e) {
    const n = yr(t)
      , s = yr(e);
    if (t === e)
        return {
            valid: !0,
            data: t
        };
    if (n === pe.object && s === pe.object) {
        const o = Ue.objectKeys(e)
          , l = Ue.objectKeys(t).filter(d => o.indexOf(d) !== -1)
          , u = {
            ...t,
            ...e
        };
        for (const d of l) {
            const f = dh(t[d], e[d]);
            if (!f.valid)
                return {
                    valid: !1
                };
            u[d] = f.data
        }
        return {
            valid: !0,
            data: u
        }
    } else if (n === pe.array && s === pe.array) {
        if (t.length !== e.length)
            return {
                valid: !1
            };
        const o = [];
        for (let l = 0; l < t.length; l++) {
            const u = t[l]
              , d = e[l]
              , f = dh(u, d);
            if (!f.valid)
                return {
                    valid: !1
                };
            o.push(f.data)
        }
        return {
            valid: !0,
            data: o
        }
    } else
        return n === pe.date && s === pe.date && +t == +e ? {
            valid: !0,
            data: t
        } : {
            valid: !1
        }
}
class Jo extends Fe {
    _parse(e) {
        const {status: n, ctx: s} = this._processInputParams(e)
          , o = (l, u) => {
            if (uh(l) || uh(u))
                return Ae;
            const d = dh(l.value, u.value);
            return d.valid ? ((ch(l) || ch(u)) && n.dirty(),
            {
                status: n.value,
                value: d.data
            }) : (de(s, {
                code: re.invalid_intersection_types
            }),
            Ae)
        }
        ;
        return s.common.async ? Promise.all([this._def.left._parseAsync({
            data: s.data,
            path: s.path,
            parent: s
        }), this._def.right._parseAsync({
            data: s.data,
            path: s.path,
            parent: s
        })]).then( ([l,u]) => o(l, u)) : o(this._def.left._parseSync({
            data: s.data,
            path: s.path,
            parent: s
        }), this._def.right._parseSync({
            data: s.data,
            path: s.path,
            parent: s
        }))
    }
}
Jo.create = (t, e, n) => new Jo({
    left: t,
    right: e,
    typeName: ke.ZodIntersection,
    ...Me(n)
});
class tr extends Fe {
    _parse(e) {
        const {status: n, ctx: s} = this._processInputParams(e);
        if (s.parsedType !== pe.array)
            return de(s, {
                code: re.invalid_type,
                expected: pe.array,
                received: s.parsedType
            }),
            Ae;
        if (s.data.length < this._def.items.length)
            return de(s, {
                code: re.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
            Ae;
        !this._def.rest && s.data.length > this._def.items.length && (de(s, {
            code: re.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }),
        n.dirty());
        const l = [...s.data].map( (u, d) => {
            const f = this._def.items[d] || this._def.rest;
            return f ? f._parse(new er(s,u,s.path,d)) : null
        }
        ).filter(u => !!u);
        return s.common.async ? Promise.all(l).then(u => $t.mergeArray(n, u)) : $t.mergeArray(n, l)
    }
    get items() {
        return this._def.items
    }
    rest(e) {
        return new tr({
            ...this._def,
            rest: e
        })
    }
}
tr.create = (t, e) => {
    if (!Array.isArray(t))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new tr({
        items: t,
        typeName: ke.ZodTuple,
        rest: null,
        ...Me(e)
    })
}
;
class ea extends Fe {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {status: n, ctx: s} = this._processInputParams(e);
        if (s.parsedType !== pe.object)
            return de(s, {
                code: re.invalid_type,
                expected: pe.object,
                received: s.parsedType
            }),
            Ae;
        const o = []
          , l = this._def.keyType
          , u = this._def.valueType;
        for (const d in s.data)
            o.push({
                key: l._parse(new er(s,d,s.path,d)),
                value: u._parse(new er(s,s.data[d],s.path,d)),
                alwaysSet: d in s.data
            });
        return s.common.async ? $t.mergeObjectAsync(n, o) : $t.mergeObjectSync(n, o)
    }
    get element() {
        return this._def.valueType
    }
    static create(e, n, s) {
        return n instanceof Fe ? new ea({
            keyType: e,
            valueType: n,
            typeName: ke.ZodRecord,
            ...Me(s)
        }) : new ea({
            keyType: Ln.create(),
            valueType: e,
            typeName: ke.ZodRecord,
            ...Me(n)
        })
    }
}
class Ru extends Fe {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {status: n, ctx: s} = this._processInputParams(e);
        if (s.parsedType !== pe.map)
            return de(s, {
                code: re.invalid_type,
                expected: pe.map,
                received: s.parsedType
            }),
            Ae;
        const o = this._def.keyType
          , l = this._def.valueType
          , u = [...s.data.entries()].map( ([d,f], h) => ({
            key: o._parse(new er(s,d,s.path,[h, "key"])),
            value: l._parse(new er(s,f,s.path,[h, "value"]))
        }));
        if (s.common.async) {
            const d = new Map;
            return Promise.resolve().then(async () => {
                for (const f of u) {
                    const h = await f.key
                      , m = await f.value;
                    if (h.status === "aborted" || m.status === "aborted")
                        return Ae;
                    (h.status === "dirty" || m.status === "dirty") && n.dirty(),
                    d.set(h.value, m.value)
                }
                return {
                    status: n.value,
                    value: d
                }
            }
            )
        } else {
            const d = new Map;
            for (const f of u) {
                const h = f.key
                  , m = f.value;
                if (h.status === "aborted" || m.status === "aborted")
                    return Ae;
                (h.status === "dirty" || m.status === "dirty") && n.dirty(),
                d.set(h.value, m.value)
            }
            return {
                status: n.value,
                value: d
            }
        }
    }
}
Ru.create = (t, e, n) => new Ru({
    valueType: e,
    keyType: t,
    typeName: ke.ZodMap,
    ...Me(n)
});
class Ni extends Fe {
    _parse(e) {
        const {status: n, ctx: s} = this._processInputParams(e);
        if (s.parsedType !== pe.set)
            return de(s, {
                code: re.invalid_type,
                expected: pe.set,
                received: s.parsedType
            }),
            Ae;
        const o = this._def;
        o.minSize !== null && s.data.size < o.minSize.value && (de(s, {
            code: re.too_small,
            minimum: o.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: o.minSize.message
        }),
        n.dirty()),
        o.maxSize !== null && s.data.size > o.maxSize.value && (de(s, {
            code: re.too_big,
            maximum: o.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: o.maxSize.message
        }),
        n.dirty());
        const l = this._def.valueType;
        function u(f) {
            const h = new Set;
            for (const m of f) {
                if (m.status === "aborted")
                    return Ae;
                m.status === "dirty" && n.dirty(),
                h.add(m.value)
            }
            return {
                status: n.value,
                value: h
            }
        }
        const d = [...s.data.values()].map( (f, h) => l._parse(new er(s,f,s.path,h)));
        return s.common.async ? Promise.all(d).then(f => u(f)) : u(d)
    }
    min(e, n) {
        return new Ni({
            ...this._def,
            minSize: {
                value: e,
                message: Se.toString(n)
            }
        })
    }
    max(e, n) {
        return new Ni({
            ...this._def,
            maxSize: {
                value: e,
                message: Se.toString(n)
            }
        })
    }
    size(e, n) {
        return this.min(e, n).max(e, n)
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
Ni.create = (t, e) => new Ni({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: ke.ZodSet,
    ...Me(e)
});
class Ts extends Fe {
    constructor() {
        super(...arguments),
        this.validate = this.implement
    }
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        if (n.parsedType !== pe.function)
            return de(n, {
                code: re.invalid_type,
                expected: pe.function,
                received: n.parsedType
            }),
            Ae;
        function s(d, f) {
            return Cu({
                data: d,
                path: n.path,
                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Pu(), As].filter(h => !!h),
                issueData: {
                    code: re.invalid_arguments,
                    argumentsError: f
                }
            })
        }
        function o(d, f) {
            return Cu({
                data: d,
                path: n.path,
                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, Pu(), As].filter(h => !!h),
                issueData: {
                    code: re.invalid_return_type,
                    returnTypeError: f
                }
            })
        }
        const l = {
            errorMap: n.common.contextualErrorMap
        }
          , u = n.data;
        if (this._def.returns instanceof Ns) {
            const d = this;
            return Zt(async function(...f) {
                const h = new hn([])
                  , m = await d._def.args.parseAsync(f, l).catch(w => {
                    throw h.addIssue(s(f, w)),
                    h
                }
                )
                  , y = await Reflect.apply(u, this, m);
                return await d._def.returns._def.type.parseAsync(y, l).catch(w => {
                    throw h.addIssue(o(y, w)),
                    h
                }
                )
            })
        } else {
            const d = this;
            return Zt(function(...f) {
                const h = d._def.args.safeParse(f, l);
                if (!h.success)
                    throw new hn([s(f, h.error)]);
                const m = Reflect.apply(u, this, h.data)
                  , y = d._def.returns.safeParse(m, l);
                if (!y.success)
                    throw new hn([o(m, y.error)]);
                return y.data
            })
        }
    }
    parameters() {
        return this._def.args
    }
    returnType() {
        return this._def.returns
    }
    args(...e) {
        return new Ts({
            ...this._def,
            args: tr.create(e).rest(Pi.create())
        })
    }
    returns(e) {
        return new Ts({
            ...this._def,
            returns: e
        })
    }
    implement(e) {
        return this.parse(e)
    }
    strictImplement(e) {
        return this.parse(e)
    }
    static create(e, n, s) {
        return new Ts({
            args: e || tr.create([]).rest(Pi.create()),
            returns: n || Pi.create(),
            typeName: ke.ZodFunction,
            ...Me(s)
        })
    }
}
class ta extends Fe {
    get schema() {
        return this._def.getter()
    }
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        return this._def.getter()._parse({
            data: n.data,
            path: n.path,
            parent: n
        })
    }
}
ta.create = (t, e) => new ta({
    getter: t,
    typeName: ke.ZodLazy,
    ...Me(e)
});
class na extends Fe {
    _parse(e) {
        if (e.data !== this._def.value) {
            const n = this._getOrReturnCtx(e);
            return de(n, {
                received: n.data,
                code: re.invalid_literal,
                expected: this._def.value
            }),
            Ae
        }
        return {
            status: "valid",
            value: e.data
        }
    }
    get value() {
        return this._def.value
    }
}
na.create = (t, e) => new na({
    value: t,
    typeName: ke.ZodLiteral,
    ...Me(e)
});
function Bb(t, e) {
    return new ri({
        values: t,
        typeName: ke.ZodEnum,
        ...Me(e)
    })
}
class ri extends Fe {
    constructor() {
        super(...arguments),
        No.set(this, void 0)
    }
    _parse(e) {
        if (typeof e.data != "string") {
            const n = this._getOrReturnCtx(e)
              , s = this._def.values;
            return de(n, {
                expected: Ue.joinValues(s),
                received: n.parsedType,
                code: re.invalid_type
            }),
            Ae
        }
        if (Eu(this, No) || Lb(this, No, new Set(this._def.values)),
        !Eu(this, No).has(e.data)) {
            const n = this._getOrReturnCtx(e)
              , s = this._def.values;
            return de(n, {
                received: n.data,
                code: re.invalid_enum_value,
                options: s
            }),
            Ae
        }
        return Zt(e.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const e = {};
        for (const n of this._def.values)
            e[n] = n;
        return e
    }
    get Values() {
        const e = {};
        for (const n of this._def.values)
            e[n] = n;
        return e
    }
    get Enum() {
        const e = {};
        for (const n of this._def.values)
            e[n] = n;
        return e
    }
    extract(e, n=this._def) {
        return ri.create(e, {
            ...this._def,
            ...n
        })
    }
    exclude(e, n=this._def) {
        return ri.create(this.options.filter(s => !e.includes(s)), {
            ...this._def,
            ...n
        })
    }
}
No = new WeakMap;
ri.create = Bb;
class ra extends Fe {
    constructor() {
        super(...arguments),
        Oo.set(this, void 0)
    }
    _parse(e) {
        const n = Ue.getValidEnumValues(this._def.values)
          , s = this._getOrReturnCtx(e);
        if (s.parsedType !== pe.string && s.parsedType !== pe.number) {
            const o = Ue.objectValues(n);
            return de(s, {
                expected: Ue.joinValues(o),
                received: s.parsedType,
                code: re.invalid_type
            }),
            Ae
        }
        if (Eu(this, Oo) || Lb(this, Oo, new Set(Ue.getValidEnumValues(this._def.values))),
        !Eu(this, Oo).has(e.data)) {
            const o = Ue.objectValues(n);
            return de(s, {
                received: s.data,
                code: re.invalid_enum_value,
                options: o
            }),
            Ae
        }
        return Zt(e.data)
    }
    get enum() {
        return this._def.values
    }
}
Oo = new WeakMap;
ra.create = (t, e) => new ra({
    values: t,
    typeName: ke.ZodNativeEnum,
    ...Me(e)
});
class Ns extends Fe {
    unwrap() {
        return this._def.type
    }
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        if (n.parsedType !== pe.promise && n.common.async === !1)
            return de(n, {
                code: re.invalid_type,
                expected: pe.promise,
                received: n.parsedType
            }),
            Ae;
        const s = n.parsedType === pe.promise ? n.data : Promise.resolve(n.data);
        return Zt(s.then(o => this._def.type.parseAsync(o, {
            path: n.path,
            errorMap: n.common.contextualErrorMap
        })))
    }
}
Ns.create = (t, e) => new Ns({
    type: t,
    typeName: ke.ZodPromise,
    ...Me(e)
});
class zn extends Fe {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === ke.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(e) {
        const {status: n, ctx: s} = this._processInputParams(e)
          , o = this._def.effect || null
          , l = {
            addIssue: u => {
                de(s, u),
                u.fatal ? n.abort() : n.dirty()
            }
            ,
            get path() {
                return s.path
            }
        };
        if (l.addIssue = l.addIssue.bind(l),
        o.type === "preprocess") {
            const u = o.transform(s.data, l);
            if (s.common.async)
                return Promise.resolve(u).then(async d => {
                    if (n.value === "aborted")
                        return Ae;
                    const f = await this._def.schema._parseAsync({
                        data: d,
                        path: s.path,
                        parent: s
                    });
                    return f.status === "aborted" ? Ae : f.status === "dirty" || n.value === "dirty" ? ys(f.value) : f
                }
                );
            {
                if (n.value === "aborted")
                    return Ae;
                const d = this._def.schema._parseSync({
                    data: u,
                    path: s.path,
                    parent: s
                });
                return d.status === "aborted" ? Ae : d.status === "dirty" || n.value === "dirty" ? ys(d.value) : d
            }
        }
        if (o.type === "refinement") {
            const u = d => {
                const f = o.refinement(d, l);
                if (s.common.async)
                    return Promise.resolve(f);
                if (f instanceof Promise)
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return d
            }
            ;
            if (s.common.async === !1) {
                const d = this._def.schema._parseSync({
                    data: s.data,
                    path: s.path,
                    parent: s
                });
                return d.status === "aborted" ? Ae : (d.status === "dirty" && n.dirty(),
                u(d.value),
                {
                    status: n.value,
                    value: d.value
                })
            } else
                return this._def.schema._parseAsync({
                    data: s.data,
                    path: s.path,
                    parent: s
                }).then(d => d.status === "aborted" ? Ae : (d.status === "dirty" && n.dirty(),
                u(d.value).then( () => ({
                    status: n.value,
                    value: d.value
                }))))
        }
        if (o.type === "transform")
            if (s.common.async === !1) {
                const u = this._def.schema._parseSync({
                    data: s.data,
                    path: s.path,
                    parent: s
                });
                if (!Ai(u))
                    return u;
                const d = o.transform(u.value, l);
                if (d instanceof Promise)
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: n.value,
                    value: d
                }
            } else
                return this._def.schema._parseAsync({
                    data: s.data,
                    path: s.path,
                    parent: s
                }).then(u => Ai(u) ? Promise.resolve(o.transform(u.value, l)).then(d => ({
                    status: n.value,
                    value: d
                })) : u);
        Ue.assertNever(o)
    }
}
zn.create = (t, e, n) => new zn({
    schema: t,
    typeName: ke.ZodEffects,
    effect: e,
    ...Me(n)
});
zn.createWithPreprocess = (t, e, n) => new zn({
    schema: e,
    effect: {
        type: "preprocess",
        transform: t
    },
    typeName: ke.ZodEffects,
    ...Me(n)
});
class Xn extends Fe {
    _parse(e) {
        return this._getType(e) === pe.undefined ? Zt(void 0) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
Xn.create = (t, e) => new Xn({
    innerType: t,
    typeName: ke.ZodOptional,
    ...Me(e)
});
class ii extends Fe {
    _parse(e) {
        return this._getType(e) === pe.null ? Zt(null) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
ii.create = (t, e) => new ii({
    innerType: t,
    typeName: ke.ZodNullable,
    ...Me(e)
});
class ia extends Fe {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        let s = n.data;
        return n.parsedType === pe.undefined && (s = this._def.defaultValue()),
        this._def.innerType._parse({
            data: s,
            path: n.path,
            parent: n
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
ia.create = (t, e) => new ia({
    innerType: t,
    typeName: ke.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...Me(e)
});
class sa extends Fe {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e)
          , s = {
            ...n,
            common: {
                ...n.common,
                issues: []
            }
        }
          , o = this._def.innerType._parse({
            data: s.data,
            path: s.path,
            parent: {
                ...s
            }
        });
        return Ko(o) ? o.then(l => ({
            status: "valid",
            value: l.status === "valid" ? l.value : this._def.catchValue({
                get error() {
                    return new hn(s.common.issues)
                },
                input: s.data
            })
        })) : {
            status: "valid",
            value: o.status === "valid" ? o.value : this._def.catchValue({
                get error() {
                    return new hn(s.common.issues)
                },
                input: s.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
sa.create = (t, e) => new sa({
    innerType: t,
    typeName: ke.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...Me(e)
});
class Nu extends Fe {
    _parse(e) {
        if (this._getType(e) !== pe.nan) {
            const s = this._getOrReturnCtx(e);
            return de(s, {
                code: re.invalid_type,
                expected: pe.nan,
                received: s.parsedType
            }),
            Ae
        }
        return {
            status: "valid",
            value: e.data
        }
    }
}
Nu.create = t => new Nu({
    typeName: ke.ZodNaN,
    ...Me(t)
});
const SI = Symbol("zod_brand");
class Sp extends Fe {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e)
          , s = n.data;
        return this._def.type._parse({
            data: s,
            path: n.path,
            parent: n
        })
    }
    unwrap() {
        return this._def.type
    }
}
class ma extends Fe {
    _parse(e) {
        const {status: n, ctx: s} = this._processInputParams(e);
        if (s.common.async)
            return (async () => {
                const l = await this._def.in._parseAsync({
                    data: s.data,
                    path: s.path,
                    parent: s
                });
                return l.status === "aborted" ? Ae : l.status === "dirty" ? (n.dirty(),
                ys(l.value)) : this._def.out._parseAsync({
                    data: l.value,
                    path: s.path,
                    parent: s
                })
            }
            )();
        {
            const o = this._def.in._parseSync({
                data: s.data,
                path: s.path,
                parent: s
            });
            return o.status === "aborted" ? Ae : o.status === "dirty" ? (n.dirty(),
            {
                status: "dirty",
                value: o.value
            }) : this._def.out._parseSync({
                data: o.value,
                path: s.path,
                parent: s
            })
        }
    }
    static create(e, n) {
        return new ma({
            in: e,
            out: n,
            typeName: ke.ZodPipeline
        })
    }
}
class oa extends Fe {
    _parse(e) {
        const n = this._def.innerType._parse(e)
          , s = o => (Ai(o) && (o.value = Object.freeze(o.value)),
        o);
        return Ko(n) ? n.then(o => s(o)) : s(n)
    }
    unwrap() {
        return this._def.innerType
    }
}
oa.create = (t, e) => new oa({
    innerType: t,
    typeName: ke.ZodReadonly,
    ...Me(e)
});
function H0(t, e) {
    const n = typeof t == "function" ? t(e) : typeof t == "string" ? {
        message: t
    } : t;
    return typeof n == "string" ? {
        message: n
    } : n
}
function zb(t, e={}, n) {
    return t ? Rs.create().superRefine( (s, o) => {
        var l, u;
        const d = t(s);
        if (d instanceof Promise)
            return d.then(f => {
                var h, m;
                if (!f) {
                    const y = H0(e, s)
                      , v = (m = (h = y.fatal) !== null && h !== void 0 ? h : n) !== null && m !== void 0 ? m : !0;
                    o.addIssue({
                        code: "custom",
                        ...y,
                        fatal: v
                    })
                }
            }
            );
        if (!d) {
            const f = H0(e, s)
              , h = (u = (l = f.fatal) !== null && l !== void 0 ? l : n) !== null && u !== void 0 ? u : !0;
            o.addIssue({
                code: "custom",
                ...f,
                fatal: h
            })
        }
    }
    ) : Rs.create()
}
const bI = {
    object: ot.lazycreate
};
var ke;
(function(t) {
    t.ZodString = "ZodString",
    t.ZodNumber = "ZodNumber",
    t.ZodNaN = "ZodNaN",
    t.ZodBigInt = "ZodBigInt",
    t.ZodBoolean = "ZodBoolean",
    t.ZodDate = "ZodDate",
    t.ZodSymbol = "ZodSymbol",
    t.ZodUndefined = "ZodUndefined",
    t.ZodNull = "ZodNull",
    t.ZodAny = "ZodAny",
    t.ZodUnknown = "ZodUnknown",
    t.ZodNever = "ZodNever",
    t.ZodVoid = "ZodVoid",
    t.ZodArray = "ZodArray",
    t.ZodObject = "ZodObject",
    t.ZodUnion = "ZodUnion",
    t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
    t.ZodIntersection = "ZodIntersection",
    t.ZodTuple = "ZodTuple",
    t.ZodRecord = "ZodRecord",
    t.ZodMap = "ZodMap",
    t.ZodSet = "ZodSet",
    t.ZodFunction = "ZodFunction",
    t.ZodLazy = "ZodLazy",
    t.ZodLiteral = "ZodLiteral",
    t.ZodEnum = "ZodEnum",
    t.ZodEffects = "ZodEffects",
    t.ZodNativeEnum = "ZodNativeEnum",
    t.ZodOptional = "ZodOptional",
    t.ZodNullable = "ZodNullable",
    t.ZodDefault = "ZodDefault",
    t.ZodCatch = "ZodCatch",
    t.ZodPromise = "ZodPromise",
    t.ZodBranded = "ZodBranded",
    t.ZodPipeline = "ZodPipeline",
    t.ZodReadonly = "ZodReadonly"
}
)(ke || (ke = {}));
const TI = (t, e={
    message: `Input not instance of ${t.name}`
}) => zb(n => n instanceof t, e)
  , Ub = Ln.create
  , $b = ti.create
  , _I = Nu.create
  , PI = ni.create
  , Hb = Zo.create
  , CI = Ri.create
  , EI = ku.create
  , kI = Go.create
  , AI = Xo.create
  , RI = Rs.create
  , NI = Pi.create
  , OI = _r.create
  , DI = Au.create
  , MI = jn.create
  , II = ot.create
  , LI = ot.strictCreate
  , jI = Yo.create
  , VI = rc.create
  , FI = Jo.create
  , BI = tr.create
  , zI = ea.create
  , UI = Ru.create
  , $I = Ni.create
  , HI = Ts.create
  , WI = ta.create
  , qI = na.create
  , QI = ri.create
  , KI = ra.create
  , ZI = Ns.create
  , W0 = zn.create
  , GI = Xn.create
  , XI = ii.create
  , YI = zn.createWithPreprocess
  , JI = ma.create
  , eL = () => Ub().optional()
  , tL = () => $b().optional()
  , nL = () => Hb().optional()
  , rL = {
    string: (t => Ln.create({
        ...t,
        coerce: !0
    })),
    number: (t => ti.create({
        ...t,
        coerce: !0
    })),
    boolean: (t => Zo.create({
        ...t,
        coerce: !0
    })),
    bigint: (t => ni.create({
        ...t,
        coerce: !0
    })),
    date: (t => Ri.create({
        ...t,
        coerce: !0
    }))
}
  , iL = Ae;
var Mt = Object.freeze({
    __proto__: null,
    defaultErrorMap: As,
    setErrorMap: Y2,
    getErrorMap: Pu,
    makeIssue: Cu,
    EMPTY_PATH: J2,
    addIssueToContext: de,
    ParseStatus: $t,
    INVALID: Ae,
    DIRTY: ys,
    OK: Zt,
    isAborted: uh,
    isDirty: ch,
    isValid: Ai,
    isAsync: Ko,
    get util() {
        return Ue
    },
    get objectUtil() {
        return lh
    },
    ZodParsedType: pe,
    getParsedType: yr,
    ZodType: Fe,
    datetimeRegex: Fb,
    ZodString: Ln,
    ZodNumber: ti,
    ZodBigInt: ni,
    ZodBoolean: Zo,
    ZodDate: Ri,
    ZodSymbol: ku,
    ZodUndefined: Go,
    ZodNull: Xo,
    ZodAny: Rs,
    ZodUnknown: Pi,
    ZodNever: _r,
    ZodVoid: Au,
    ZodArray: jn,
    ZodObject: ot,
    ZodUnion: Yo,
    ZodDiscriminatedUnion: rc,
    ZodIntersection: Jo,
    ZodTuple: tr,
    ZodRecord: ea,
    ZodMap: Ru,
    ZodSet: Ni,
    ZodFunction: Ts,
    ZodLazy: ta,
    ZodLiteral: na,
    ZodEnum: ri,
    ZodNativeEnum: ra,
    ZodPromise: Ns,
    ZodEffects: zn,
    ZodTransformer: zn,
    ZodOptional: Xn,
    ZodNullable: ii,
    ZodDefault: ia,
    ZodCatch: sa,
    ZodNaN: Nu,
    BRAND: SI,
    ZodBranded: Sp,
    ZodPipeline: ma,
    ZodReadonly: oa,
    custom: zb,
    Schema: Fe,
    ZodSchema: Fe,
    late: bI,
    get ZodFirstPartyTypeKind() {
        return ke
    },
    coerce: rL,
    any: RI,
    array: MI,
    bigint: PI,
    boolean: Hb,
    date: CI,
    discriminatedUnion: VI,
    effect: W0,
    enum: QI,
    function: HI,
    instanceof: TI,
    intersection: FI,
    lazy: WI,
    literal: qI,
    map: UI,
    nan: _I,
    nativeEnum: KI,
    never: OI,
    null: AI,
    nullable: XI,
    number: $b,
    object: II,
    oboolean: nL,
    onumber: tL,
    optional: GI,
    ostring: eL,
    pipeline: JI,
    preprocess: YI,
    promise: ZI,
    record: zI,
    set: $I,
    strictObject: LI,
    string: Ub,
    symbol: EI,
    transformer: W0,
    tuple: BI,
    undefined: kI,
    union: jI,
    unknown: NI,
    void: DI,
    NEVER: iL,
    ZodIssueCode: re,
    quotelessJson: X2,
    ZodError: hn
});
const st = {
    INT8_MIN: -128,
    INT8_MAX: 127,
    INT8_UNSIGNED_MAX: 255,
    INT16_MIN: -32768,
    INT16_MAX: 32767,
    INT16_UNSIGNED_MAX: 65535,
    INT24_MIN: -8388608,
    INT24_MAX: 8388607,
    INT24_UNSIGNED_MAX: 16777215,
    INT32_MIN: -2147483648,
    INT32_MAX: 2147483647,
    INT32_UNSIGNED_MAX: 4294967295,
    INT48_MIN: -0x800000000000,
    INT48_MAX: 0x7fffffffffff,
    INT48_UNSIGNED_MAX: 0xffffffffffff,
    INT64_MIN: -9223372036854775808n,
    INT64_MAX: 9223372036854775807n,
    INT64_UNSIGNED_MAX: 18446744073709551615n
};
function gt(t, e) {
    return e.includes(t.columnType)
}
function sL(t) {
    return "enumValues"in t && Array.isArray(t.enumValues) && t.enumValues.length > 0
}
const oL = Mt.union([Mt.string(), Mt.number(), Mt.boolean(), Mt.null()])
  , aL = Mt.union([oL, Mt.record(Mt.any()), Mt.array(Mt.any())])
  , lL = Mt.custom(t => t instanceof Buffer);
function Wb(t, e) {
    const n = e?.zodInstance ?? Mt
      , s = e?.coerce ?? {};
    let o;
    return sL(t) && (o = t.enumValues.length ? n.enum(t.enumValues) : n.string()),
    o || (gt(t, ["PgGeometry", "PgPointTuple"]) ? o = n.tuple([n.number(), n.number()]) : gt(t, ["PgGeometryObject", "PgPointObject"]) ? o = n.object({
        x: n.number(),
        y: n.number()
    }) : gt(t, ["PgHalfVector", "PgVector"]) ? (o = n.array(n.number()),
    o = t.dimensions ? o.length(t.dimensions) : o) : gt(t, ["PgLine"]) ? o = n.tuple([n.number(), n.number(), n.number()]) : gt(t, ["PgLineABC"]) ? o = n.object({
        a: n.number(),
        b: n.number(),
        c: n.number()
    }) : gt(t, ["PgArray"]) ? (o = n.array(Wb(t.baseColumn, n)),
    o = t.size ? o.length(t.size) : o) : t.dataType === "array" ? o = n.array(n.any()) : t.dataType === "number" ? o = uL(t, n, s) : t.dataType === "bigint" ? o = cL(t, n, s) : t.dataType === "boolean" ? o = s === !0 || s.boolean ? n.coerce.boolean() : n.boolean() : t.dataType === "date" ? o = s === !0 || s.date ? n.coerce.date() : n.date() : t.dataType === "string" ? o = dL(t, n, s) : t.dataType === "json" ? o = aL : t.dataType === "custom" ? o = n.any() : t.dataType === "buffer" && (o = lL)),
    o || (o = n.any()),
    o
}
function uL(t, e, n) {
    let s = t.getSQLType().includes("unsigned"), o, l, u = !1;
    gt(t, ["MySqlTinyInt", "SingleStoreTinyInt"]) ? (o = s ? 0 : st.INT8_MIN,
    l = s ? st.INT8_UNSIGNED_MAX : st.INT8_MAX,
    u = !0) : gt(t, ["PgSmallInt", "PgSmallSerial", "MySqlSmallInt", "SingleStoreSmallInt"]) ? (o = s ? 0 : st.INT16_MIN,
    l = s ? st.INT16_UNSIGNED_MAX : st.INT16_MAX,
    u = !0) : gt(t, ["PgReal", "MySqlFloat", "MySqlMediumInt", "SingleStoreMediumInt", "SingleStoreFloat"]) ? (o = s ? 0 : st.INT24_MIN,
    l = s ? st.INT24_UNSIGNED_MAX : st.INT24_MAX,
    u = gt(t, ["MySqlMediumInt", "SingleStoreMediumInt"])) : gt(t, ["PgInteger", "PgSerial", "MySqlInt", "SingleStoreInt"]) ? (o = s ? 0 : st.INT32_MIN,
    l = s ? st.INT32_UNSIGNED_MAX : st.INT32_MAX,
    u = !0) : gt(t, ["PgDoublePrecision", "MySqlReal", "MySqlDouble", "SingleStoreReal", "SingleStoreDouble", "SQLiteReal"]) ? (o = s ? 0 : st.INT48_MIN,
    l = s ? st.INT48_UNSIGNED_MAX : st.INT48_MAX) : gt(t, ["PgBigInt53", "PgBigSerial53", "MySqlBigInt53", "MySqlSerial", "SingleStoreBigInt53", "SingleStoreSerial", "SQLiteInteger"]) ? (s = s || gt(t, ["MySqlSerial", "SingleStoreSerial"]),
    o = s ? 0 : Number.MIN_SAFE_INTEGER,
    l = Number.MAX_SAFE_INTEGER,
    u = !0) : gt(t, ["MySqlYear", "SingleStoreYear"]) ? (o = 1901,
    l = 2155,
    u = !0) : (o = Number.MIN_SAFE_INTEGER,
    l = Number.MAX_SAFE_INTEGER);
    let d = n === !0 || n?.number ? e.coerce.number() : e.number();
    return d = d.min(o).max(l),
    u ? d.int() : d
}
function cL(t, e, n) {
    const s = t.getSQLType().includes("unsigned")
      , o = s ? 0n : st.INT64_MIN
      , l = s ? st.INT64_UNSIGNED_MAX : st.INT64_MAX;
    return (n === !0 || n?.bigint ? e.coerce.bigint() : e.bigint()).min(o).max(l)
}
function dL(t, e, n) {
    if (gt(t, ["PgUUID"]))
        return e.string().uuid();
    let s, o, l = !1;
    gt(t, ["PgVarchar", "SQLiteText"]) ? s = t.length : gt(t, ["MySqlVarChar", "SingleStoreVarChar"]) ? s = t.length ?? st.INT16_UNSIGNED_MAX : gt(t, ["MySqlText", "SingleStoreText"]) && (t.textType === "longtext" ? s = st.INT32_UNSIGNED_MAX : t.textType === "mediumtext" ? s = st.INT24_UNSIGNED_MAX : t.textType === "text" ? s = st.INT16_UNSIGNED_MAX : s = st.INT8_UNSIGNED_MAX),
    gt(t, ["PgChar", "MySqlChar", "SingleStoreChar"]) && (s = t.length,
    l = !0),
    gt(t, ["PgBinaryVector"]) && (o = /^[01]+$/,
    s = t.dimensions);
    let u = n === !0 || n?.string ? e.coerce.string() : e.string();
    return u = o ? u.regex(o) : u,
    s && l ? u.length(s) : s ? u.max(s) : u
}
function qb(t) {
    return Eb(t) ? qD(t) : QD(t)
}
function Qb(t, e, n, s) {
    const o = {};
    for (const [l,u] of Object.entries(t)) {
        if (!Nt(u, Qo) && !Nt(u, ft) && !Nt(u, ft.Aliased) && typeof u == "object") {
            const y = Eb(u) || WD(u) ? qb(u) : u;
            o[l] = Qb(y, e[l] ?? {}, n, s);
            continue
        }
        const d = e[l];
        if (d !== void 0 && typeof d != "function") {
            o[l] = d;
            continue
        }
        const f = Nt(u, Qo) ? u : void 0
          , h = f ? Wb(f, s) : Mt.any()
          , m = typeof d == "function" ? d(h) : h;
        n.never(f) || (o[l] = m,
        f && (n.nullable(f) && (o[l] = o[l].nullable()),
        n.optional(f) && (o[l] = o[l].optional())))
    }
    return Mt.object(o)
}
const fL = {
    never: t => t?.generated?.type === "always" || t?.generatedIdentity?.type === "always",
    optional: t => !t.notNull || t.notNull && t.hasDefault,
    nullable: t => !t.notNull
}
  , hL = (t, e) => {
    const n = qb(t);
    return Qb(n, {}, fL)
}
  , pL = G2("contacts", {
    id: Db("id").primaryKey(),
    name: tu("name").notNull(),
    email: tu("email").notNull(),
    message: tu("message").notNull(),
    createdAt: Mb("created_at").defaultNow()
})
  , mL = hL(pL).omit({
    id: !0,
    createdAt: !0
}).extend({
    email: Mt.string().email(),
    name: Mt.string().min(1, "Name is required"),
    message: Mt.string().min(1, "Message is required")
});
var gL = "Label"
  , Kb = C.forwardRef( (t, e) => E.jsx(Gt.label, {
    ...t,
    ref: e,
    onMouseDown: n => {
        n.target.closest("button, input, select, textarea") || (t.onMouseDown?.(n),
        !n.defaultPrevented && n.detail > 1 && n.preventDefault())
    }
}));
Kb.displayName = gL;
var Zb = Kb;
const yL = Bu("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , Gb = C.forwardRef( ({className: t, ...e}, n) => E.jsx(Zb, {
    ref: n,
    className: lt(yL(), t),
    ...e
}));
Gb.displayName = Zb.displayName;
const vL = uD
  , Xb = C.createContext({})
  , Rf = ({...t}) => E.jsx(Xb.Provider, {
    value: {
        name: t.name
    },
    children: E.jsx(hD, {
        ...t
    })
})
  , ic = () => {
    const t = C.useContext(Xb)
      , e = C.useContext(Yb)
      , {getFieldState: n, formState: s} = tc()
      , o = n(t.name, s);
    if (!t)
        throw new Error("useFormField should be used within <FormField>");
    const {id: l} = e;
    return {
        id: l,
        name: t.name,
        formItemId: `${l}-form-item`,
        formDescriptionId: `${l}-form-item-description`,
        formMessageId: `${l}-form-item-message`,
        ...o
    }
}
  , Yb = C.createContext({})
  , nu = C.forwardRef( ({className: t, ...e}, n) => {
    const s = C.useId();
    return E.jsx(Yb.Provider, {
        value: {
            id: s
        },
        children: E.jsx("div", {
            ref: n,
            className: lt("space-y-2", t),
            ...e
        })
    })
}
);
nu.displayName = "FormItem";
const ru = C.forwardRef( ({className: t, ...e}, n) => {
    const {error: s, formItemId: o} = ic();
    return E.jsx(Gb, {
        ref: n,
        className: lt(s && "text-destructive", t),
        htmlFor: o,
        ...e
    })
}
);
ru.displayName = "FormLabel";
const iu = C.forwardRef( ({...t}, e) => {
    const {error: n, formItemId: s, formDescriptionId: o, formMessageId: l} = ic();
    return E.jsx(hx, {
        ref: e,
        id: s,
        "aria-describedby": n ? `${o} ${l}` : `${o}`,
        "aria-invalid": !!n,
        ...t
    })
}
);
iu.displayName = "FormControl";
const xL = C.forwardRef( ({className: t, ...e}, n) => {
    const {formDescriptionId: s} = ic();
    return E.jsx("p", {
        ref: n,
        id: s,
        className: lt("text-sm text-muted-foreground", t),
        ...e
    })
}
);
xL.displayName = "FormDescription";
const su = C.forwardRef( ({className: t, children: e, ...n}, s) => {
    const {error: o, formMessageId: l} = ic()
      , u = o ? String(o?.message ?? "") : e;
    return u ? E.jsx("p", {
        ref: s,
        id: l,
        className: lt("text-sm font-medium text-destructive", t),
        ...n,
        children: u
    }) : null
}
);
su.displayName = "FormMessage";
const fh = C.forwardRef( ({className: t, type: e, ...n}, s) => E.jsx("input", {
    type: e,
    className: lt("flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
    ref: s,
    ...n
}));
fh.displayName = "Input";
const Jb = C.forwardRef( ({className: t, ...e}, n) => E.jsx("textarea", {
    className: lt("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t),
    ref: n,
    ...e
}));
Jb.displayName = "Textarea";
const wL = Bu("whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate ", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow-xs",
            secondary: "border-transparent bg-secondary text-secondary-foreground",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow-xs",
            outline: " border [border-color:var(--badge-outline)] shadow-xs"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function SL({className: t, variant: e, ...n}) {
    return E.jsx("div", {
        className: lt(wL({
            variant: e
        }), t),
        ...n
    })
}
function bL() {
    const t = oD()
      , e = ED({
        resolver: ND(mL),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    })
      , n = l => {
        t.mutate(l, {
            onSuccess: () => {
                e.reset()
            }
        })
    }
      , s = [{
        name: "Luau (Roblox)",
        level: "Advanced",
        icon: aC
    }, {
        name: "Python",
        level: "Advanced",
        icon: Lf
    }, {
        name: "Java",
        level: "Intermediate",
        icon: sC
    }, {
        name: "System Architecture",
        level: "Advanced",
        icon: uC
    }, {
        name: "Client-Server Logic",
        level: "Advanced",
        icon: pC
    }, {
        name: "Debugging",
        level: "Advanced",
        icon: hC
    }]
      , o = [{
        title: "Retail Simulation Infrastructure",
        description: "A modular checkout system simulating real-world POS environments in Roblox.",
        tags: ["Luau", "Client-Server", "Automation"],
        icon: nC,
        details: ["Dynamic checkout recognition system", "Receipt validation logic with role-based overrides", "Barcode scanning integrated with RemoteEvents", "Secure server-side validation preventing abuse"]
    }, {
        title: "Adaptive UI Framework",
        description: "Engineered a fully adaptive multi-screen UI framework for in-game systems.",
        tags: ["UI/UX", "Scaling", "Cross-Platform"],
        icon: fC,
        details: ["Resolution-independent GUI scaling", "Multi-layer screen navigation architecture", "Persistent GUI logic with non-reset config", "Consistent behavior across desktop and mobile"]
    }, {
        title: "Access Control System",
        description: "Role-based authorization framework protecting sensitive game actions.",
        tags: ["Security", "Permissions", "Logic"],
        icon: mC,
        details: ["Whitelist rank system with bypass logic", "Server-side validation for privileged actions", "Receipt attribute parsing for permissions", "Prevents client-side exploitation"]
    }, {
        title: "Runtime Model Systems",
        description: "Complex environment manipulation and model restructuring tools.",
        tags: ["3D Math", "Workspace", "Optimization"],
        icon: oC,
        details: ["Dynamic model scaling for player instances", "Real-time orientation/transform manipulation", "ProximityPrompt integration in nested hierarchies", "Workspace restructuring adaptation"]
    }];
    return E.jsxs("div", {
        className: "min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20",
        children: [E.jsx(iD, {}), E.jsxs("section", {
            id: "hero",
            className: "relative min-h-screen flex items-center justify-center pt-20 overflow-hidden",
            children: [E.jsxs("div", {
                className: "absolute inset-0 z-0 opacity-20",
                children: [E.jsx("div", {
                    className: "absolute top-0 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
                }), E.jsx("div", {
                    className: "absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/40 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3"
                })]
            }), E.jsxs("div", {
                className: "container px-4 md:px-6 z-10 text-center",
                children: [E.jsx(rn.div, {
                    initial: {
                        opacity: 0,
                        scale: .9
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: .8
                    },
                    className: "inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm",
                    children: "Software & Systems Developer"
                }), E.jsxs(rn.h1, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    className: "text-5xl md:text-8xl font-bold font-display tracking-tight mb-6",
                    children: ["Liad", E.jsx("span", {
                        className: "text-primary text-glow",
                        children: "Protop"
                    })]
                }), E.jsx(rn.p, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .4
                    },
                    className: "text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed",
                    children: "Building scalable, production-ready systems inside the Roblox engine. Specialized in real-time game architecture and logic-driven automation."
                }), E.jsxs(rn.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .6
                    },
                    className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                    children: [E.jsx(jo.Link, {
                        to: "projects",
                        smooth: !0,
                        duration: 500,
                        offset: -100,
                        children: E.jsx(ws, {
                            size: "lg",
                            className: "h-12 px-8 text-lg font-semibold shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all",
                            children: "View My Work"
                        })
                    }), E.jsx(jo.Link, {
                        to: "contact",
                        smooth: !0,
                        duration: 500,
                        children: E.jsx(ws, {
                            variant: "outline",
                            size: "lg",
                            className: "h-12 px-8 text-lg hover:bg-white/5 border-white/10",
                            children: "Contact Me"
                        })
                    })]
                })]
            }), E.jsx(rn.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1,
                    duration: 1
                },
                className: "absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground",
                children: E.jsx(rC, {
                    className: "w-6 h-6"
                })
            })]
        }), E.jsx("section", {
            id: "about",
            className: "section-padding bg-card/30 border-y border-white/5",
            children: E.jsx("div", {
                className: "container px-4 md:px-6 mx-auto",
                children: E.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [E.jsxs(rn.div, {
                        initial: {
                            opacity: 0,
                            x: -50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .7
                        },
                        children: [E.jsx(Ql, {
                            title: "Professional Summary",
                            subtitle: "Who I Am",
                            align: "left"
                        }), E.jsxs("div", {
                            className: "space-y-6 text-lg text-muted-foreground",
                            children: [E.jsxs("p", {
                                children: ["I am a software developer with strong experience in ", E.jsx("span", {
                                    className: "text-white font-medium",
                                    children: "real-time game systems"
                                }), ", client-server architecture, and logic-driven automation."]
                            }), E.jsxs("p", {
                                children: ["My expertise lies in building scalable, production-ready systems inside the Roblox engine using ", E.jsx("span", {
                                    className: "text-primary font-mono",
                                    children: "Luau"
                                }), ", with additional experience in Python and Java for structured programming and system logic design."]
                            }), E.jsx("p", {
                                children: "I excel at debugging complex runtime issues, refactoring broken systems, reverse-engineering protected code, and building modular architectures from scratch."
                            })]
                        }), E.jsx("div", {
                            className: "grid grid-cols-2 gap-4 mt-8",
                            children: ["System-level Thinking", "Event-Driven Design", "Secure Architecture", "Modular Logic"].map( (l, u) => E.jsxs("div", {
                                className: "flex items-center gap-2 text-sm font-medium",
                                children: [E.jsx("div", {
                                    className: "w-1.5 h-1.5 rounded-full bg-primary"
                                }), l]
                            }, u))
                        })]
                    }), E.jsxs(rn.div, {
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .7
                        },
                        className: "relative",
                        children: [E.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full"
                        }), E.jsxs("div", {
                            className: "relative bg-card/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl",
                            children: [E.jsxs("h3", {
                                className: "text-xl font-bold font-display mb-6 flex items-center gap-2",
                                children: [E.jsx(Lf, {
                                    className: "text-primary w-5 h-5"
                                }), "Core Engineering Strengths"]
                            }), E.jsx("ul", {
                                className: "space-y-4",
                                children: ["System-level thinking rather than feature-level scripting", "Strong debugging and error-tracing capability", "Refactoring legacy/broken systems into structured architecture", "Understanding of event-driven programming", "Clean logic separation between client and server", "Rapid problem diagnosis under runtime constraints"].map( (l, u) => E.jsxs(rn.li, {
                                    initial: {
                                        opacity: 0,
                                        x: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: !0
                                    },
                                    transition: {
                                        delay: u * .1
                                    },
                                    className: "flex items-start gap-3 text-sm md:text-base text-muted-foreground",
                                    children: [E.jsx("div", {
                                        className: "mt-1.5 min-w-[6px] h-[6px] rounded-full bg-primary"
                                    }), l]
                                }, u))
                            })]
                        })]
                    })]
                })
            })
        }), E.jsx("section", {
            id: "skills",
            className: "section-padding relative",
            children: E.jsxs("div", {
                className: "container px-4 md:px-6 mx-auto",
                children: [E.jsx(Ql, {
                    title: "Technical Arsenal",
                    subtitle: "Skills & Expertise"
                }), E.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: s.map( (l, u) => E.jsx(sD, {
                        ...l,
                        delay: u * .1
                    }, u))
                })]
            })
        }), E.jsx("section", {
            id: "projects",
            className: "section-padding bg-secondary/20 border-y border-white/5",
            children: E.jsxs("div", {
                className: "container px-4 md:px-6 mx-auto",
                children: [E.jsx(Ql, {
                    title: "Selected Works",
                    subtitle: "Portfolio"
                }), E.jsx("div", {
                    className: "grid lg:grid-cols-2 gap-8",
                    children: o.map( (l, u) => E.jsxs(rn.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: .6,
                            delay: u * .1
                        },
                        className: "group relative",
                        children: [E.jsx("div", {
                            className: "absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-colors"
                        }), E.jsxs(Dh, {
                            className: "relative h-full bg-card/80 backdrop-blur border-white/10 overflow-hidden hover:border-primary/50 transition-colors",
                            children: [E.jsxs(kw, {
                                children: [E.jsxs("div", {
                                    className: "flex justify-between items-start mb-2",
                                    children: [E.jsx("div", {
                                        className: "p-3 bg-primary/10 rounded-lg text-primary",
                                        children: E.jsx(l.icon, {
                                            className: "w-6 h-6"
                                        })
                                    }), E.jsx("div", {
                                        className: "flex gap-2"
                                    })]
                                }), E.jsx(Aw, {
                                    className: "text-2xl font-display",
                                    children: l.title
                                }), E.jsx("div", {
                                    className: "flex flex-wrap gap-2 mt-3",
                                    children: l.tags.map( (d, f) => E.jsx(SL, {
                                        variant: "secondary",
                                        className: "bg-secondary/50 hover:bg-secondary text-xs",
                                        children: d
                                    }, f))
                                })]
                            }), E.jsxs(Mh, {
                                children: [E.jsx(Rw, {
                                    className: "text-base text-foreground/80 mb-6",
                                    children: l.description
                                }), E.jsx("ul", {
                                    className: "space-y-2",
                                    children: l.details.map( (d, f) => E.jsxs("li", {
                                        className: "flex items-start gap-2 text-sm text-muted-foreground",
                                        children: [E.jsx("span", {
                                            className: "text-primary mt-1",
                                            children: "▹"
                                        }), d]
                                    }, f))
                                })]
                            })]
                        })]
                    }, u))
                })]
            })
        }), E.jsxs("section", {
            id: "contact",
            className: "section-padding relative overflow-hidden",
            children: [E.jsx("div", {
                className: "absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"
            }), E.jsx("div", {
                className: "container px-4 md:px-6 mx-auto relative z-10",
                children: E.jsxs("div", {
                    className: "max-w-4xl mx-auto",
                    children: [E.jsx(Ql, {
                        title: "Get In Touch",
                        subtitle: "Contact Me"
                    }), E.jsxs("div", {
                        className: "grid md:grid-cols-5 gap-12 bg-card/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl",
                        children: [E.jsxs("div", {
                            className: "md:col-span-2 space-y-8",
                            children: [E.jsxs("div", {
                                children: [E.jsx("h3", {
                                    className: "text-xl font-bold font-display mb-4 text-white",
                                    children: "Let's talk code"
                                }), E.jsx("p", {
                                    className: "text-muted-foreground",
                                    children: "Interested in my work or have a project idea? I'm always open to discussing new opportunities in game development and systems architecture."
                                })]
                            }), E.jsxs("div", {
                                className: "space-y-4",
                                children: [E.jsxs("div", {
                                    className: "flex items-center gap-4 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer group",
                                    children: [E.jsx("div", {
                                        className: "p-2 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors",
                                        children: E.jsx(cC, {
                                            className: "w-5 h-5 text-primary"
                                        })
                                    }), E.jsx("span", {
                                        children: "contact@liadprotop.run.place"
                                    })]
                                }), E.jsxs("div", {
                                    className: "flex items-center gap-4 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer group",
                                    children: [E.jsx("div", {
                                        className: "p-2 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors",
                                        children: E.jsx(lC, {
                                            className: "w-5 h-5 text-primary"
                                        })
                                    }), E.jsx("span", {
                                        children: "github.com/LiadProtop"
                                    })]
                                })]
                            }), E.jsx("div", {
                                className: "p-6 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/10",
                                children: E.jsx("p", {
                                    className: "text-sm font-medium text-muted-foreground",
                                    children: '"Experienced in debugging complex runtime issues and building modular architectures."'
                                })
                            })]
                        }), E.jsx("div", {
                            className: "md:col-span-3",
                            children: E.jsx(vL, {
                                ...e,
                                children: E.jsxs("form", {
                                    onSubmit: e.handleSubmit(n),
                                    className: "space-y-6",
                                    children: [E.jsx(Rf, {
                                        control: e.control,
                                        name: "name",
                                        render: ({field: l}) => E.jsxs(nu, {
                                            children: [E.jsx(ru, {
                                                children: "Name"
                                            }), E.jsx(iu, {
                                                children: E.jsx(fh, {
                                                    placeholder: "Your Name",
                                                    ...l,
                                                    className: "bg-secondary/30 border-white/5 focus:border-primary/50 transition-all h-12"
                                                })
                                            }), E.jsx(su, {})]
                                        })
                                    }), E.jsx(Rf, {
                                        control: e.control,
                                        name: "email",
                                        render: ({field: l}) => E.jsxs(nu, {
                                            children: [E.jsx(ru, {
                                                children: "Email"
                                            }), E.jsx(iu, {
                                                children: E.jsx(fh, {
                                                    placeholder: "your.email@example.com",
                                                    ...l,
                                                    className: "bg-secondary/30 border-white/5 focus:border-primary/50 transition-all h-12"
                                                })
                                            }), E.jsx(su, {})]
                                        })
                                    }), E.jsx(Rf, {
                                        control: e.control,
                                        name: "message",
                                        render: ({field: l}) => E.jsxs(nu, {
                                            children: [E.jsx(ru, {
                                                children: "Message"
                                            }), E.jsx(iu, {
                                                children: E.jsx(Jb, {
                                                    placeholder: "Tell me about your project...",
                                                    className: "min-h-[150px] bg-secondary/30 border-white/5 focus:border-primary/50 transition-all resize-none",
                                                    ...l
                                                })
                                            }), E.jsx(su, {})]
                                        })
                                    }), E.jsx(ws, {
                                        type: "submit",
                                        className: "w-full h-12 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all",
                                        disabled: t.isPending,
                                        children: t.isPending ? "Sending..." : "Send Message"
                                    })]
                                })
                            })
                        })]
                    })]
                })
            })]
        }), E.jsx("footer", {
            className: "py-8 border-t border-white/5 text-center text-muted-foreground text-sm",
            children: E.jsxs("div", {
                className: "container mx-auto",
                children: [E.jsxs("p", {
                    children: ["© ", new Date().getFullYear(), " LiadProtop. All rights reserved."]
                }), E.jsx("p", {
                    className: "mt-2 text-xs opacity-50",
                    children: "Built with React, Tailwind & Framer Motion"
                })]
            })
        })]
    })
}
function TL() {
    return E.jsxs(C_, {
        children: [E.jsx(Sy, {
            path: "/",
            component: bL
        }), E.jsx(Sy, {
            component: Ck
        })]
    })
}
function _L() {
    return E.jsx(X_, {
        client: rP,
        children: E.jsxs(Tk, {
            children: [E.jsx(XC, {}), E.jsx(TL, {})]
        })
    })
}
n_.createRoot(document.getElementById("root")).render(E.jsx(_L, {}));
