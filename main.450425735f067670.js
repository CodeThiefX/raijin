(self.webpackChunkboss_fe = self.webpackChunkboss_fe || []).push([
            [179], {
                2011: (Ce, me, H) => {
                    "use strict";
                    H.d(me, {
                        Dh: () => $,
                        GT: () => B,
                        cc: () => nt,
                        hO: () => qe,
                        on: () => ie,
                        pX: () => A,
                        xv: () => ae
                    });
                    var r = H(4650),
                        y = H(127),
                        x = H(5813);
                    Ce = H.hmd(Ce);
                    const D = ["ngOnDestroy"],
                        A = (ze, Et, At, it = {}) => new Proxy(ze, {
                            get: (ot, Ge) => At.runOutsideAngular(() => {
                                var kt;
                                if (ze[Ge]) return !(null === (kt = it ? .spy) || void 0 === kt) && kt.get && it.spy.get(Ge, ze[Ge]), ze[Ge];
                                if (D.indexOf(Ge) > -1) return () => {};
                                const Ee = Et.toPromise().then(Be => {
                                    const Je = Be && Be[Ge];
                                    return "function" == typeof Je ? Je.bind(Be) : Je && Je.then ? Je.then(ke => At.run(() => ke)) : At.run(() => Je)
                                });
                                return new Proxy(() => {}, {
                                    get: (Be, Je) => Ee[Je],
                                    apply: (Be, Je, ke) => Ee.then(Pe => {
                                        var Ve;
                                        const Ne = Pe && Pe(...ke);
                                        return !(null === (Ve = it ? .spy) || void 0 === Ve) && Ve.apply && it.spy.apply(Ge, ke, Ne), Ne
                                    })
                                })
                            })
                        }),
                        B = (ze, Et) => {
                            Et.forEach(At => {
                                Object.getOwnPropertyNames(At.prototype || At).forEach(it => {
                                    Object.defineProperty(ze.prototype, it, Object.getOwnPropertyDescriptor(At.prototype || At, it))
                                })
                            })
                        };
                    class j {
                        constructor(Et) {
                            return Et
                        }
                    }
                    const $ = new r.OlP("angularfire2.app.options"),
                        ae = new r.OlP("angularfire2.app.name");

                    function ie(ze, Et, At) {
                        const ot = "object" == typeof At && At || {};
                        ot.name = ot.name || "string" == typeof At && At || "[DEFAULT]";
                        const kt = y.Z.apps.filter(Ee => Ee && Ee.name === ot.name)[0] || Et.runOutsideAngular(() => y.Z.initializeApp(ze, ot));
                        try {
                            JSON.stringify(ze) !== JSON.stringify(kt.options) && ce("error", `${kt.name} Firebase App already initialized with different options${Ce.hot?", you may need to reload as Firebase is not HMR aware.":"."}`)
                        } catch {}
                        return new j(kt)
                    }
                    const ce = (ze, ...Et) => {
                            (0, r.X6Q)() && typeof console < "u" && console[ze](...Et)
                        },
                        fe = {
                            provide: j,
                            useFactory: ie,
                            deps: [$, r.R0b, [new r.FiY, ae]]
                        };
                    let qe = (() => {
                        class ze {
                            constructor(At) {
                                y.Z.registerVersion("angularfire", x.q4.full, "core"), y.Z.registerVersion("angularfire", x.q4.full, "app-compat"), y.Z.registerVersion("angular", r.q4F.full, At.toString())
                            }
                            static initializeApp(At, it) {
                                return {
                                    ngModule: ze,
                                    providers: [{
                                        provide: $,
                                        useValue: At
                                    }, {
                                        provide: ae,
                                        useValue: it
                                    }]
                                }
                            }
                        }
                        return ze.\u0275fac = function(At) {
                            return new(At || ze)(r.LFG(r.Lbi))
                        }, ze.\u0275mod = r.oAB({
                            type: ze
                        }), ze.\u0275inj = r.cJS({
                            providers: [fe]
                        }), ze
                    })();

                    function nt(ze, Et, At, it, ot) {
                        const [, Ge, kt] = globalThis.\u0275AngularfireInstanceCache.find(Ee => Ee[0] === ze) || [];
                        if (Ge) return function Te(ze, Et) {
                            try {
                                return ze.toString() === Et.toString()
                            } catch {
                                return ze === Et
                            }
                        }(ot, kt) || (Ze("error", `${Et} was already initialized on the ${At} Firebase App with different settings.${xt?" You may need to reload as Firebase is not HMR aware.":""}`), Ze("warn", {
                            is: ot,
                            was: kt
                        })), Ge; {
                            const Ee = it();
                            return globalThis.\u0275AngularfireInstanceCache.push([ze, Ee, ot]), Ee
                        }
                    }
                    const xt = !!Ce.hot,
                        Ze = (ze, ...Et) => {
                            (0, r.X6Q)() && typeof console < "u" && console[ze](...Et)
                        };
                    globalThis.\u0275AngularfireInstanceCache || (globalThis.\u0275AngularfireInstanceCache = [])
                },
                5813: (Ce, me, H) => {
                    "use strict";
                    H.d(me, {
                        q4: () => wt,
                        iC: () => hu,
                        fc: () => oo,
                        HU: () => kc,
                        vb: () => xc,
                        JM: () => od,
                        u3: () => sd
                    });
                    var r = H(4650),
                        y = H(5867),
                        x = H(5861),
                        D = H(9681),
                        A = H(2090),
                        B = H(4859),
                        j = H(1877),
                        $ = H(8766);
                    const ae = "@firebase/installations",
                        ie = "0.5.16",
                        fe = `w:${ie}`,
                        qe = "FIS_v2",
                        Et = new A.LL("installations", "Installations", {
                            "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
                            "not-registered": "Firebase Installation is not registered.",
                            "installation-not-found": "Firebase Installation not found.",
                            "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
                            "app-offline": "Could not process request. Application offline.",
                            "delete-pending-registration": "Can't delete installation while there is a pending registration request."
                        });

                    function At(F) {
                        return F instanceof A.ZR && F.code.includes("request-failed")
                    }

                    function it({
                        projectId: F
                    }) {
                        return `https://firebaseinstallations.googleapis.com/v1/projects/${F}/installations`
                    }

                    function ot(F) {
                        return {
                            token: F.token,
                            requestStatus: 2,
                            expiresIn: Pe(F.expiresIn),
                            creationTime: Date.now()
                        }
                    }

                    function Ge(F, V) {
                        return kt.apply(this, arguments)
                    }

                    function kt() {
                        return (kt = (0, x.Z)(function*(F, V) {
                            const he = (yield V.json()).error;
                            return Et.create("request-failed", {
                                requestName: F,
                                serverCode: he.code,
                                serverMessage: he.message,
                                serverStatus: he.status
                            })
                        })).apply(this, arguments)
                    }

                    function Ee({
                        apiKey: F
                    }) {
                        return new Headers({
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            "x-goog-api-key": F
                        })
                    }

                    function Be(F, {
                        refreshToken: V
                    }) {
                        const X = Ee(F);
                        return X.append("Authorization", function Ve(F) {
                            return `${qe} ${F}`
                        }(V)), X
                    }

                    function Je(F) {
                        return ke.apply(this, arguments)
                    }

                    function ke() {
                        return (ke = (0, x.Z)(function*(F) {
                            const V = yield F();
                            return V.status >= 500 && V.status < 600 ? F() : V
                        })).apply(this, arguments)
                    }

                    function Pe(F) {
                        return Number(F.replace("s", "000"))
                    }

                    function Ne(F, V) {
                        return ft.apply(this, arguments)
                    }

                    function ft() {
                        return (ft = (0, x.Z)(function*({
                            appConfig: F,
                            heartbeatServiceProvider: V
                        }, {
                            fid: X
                        }) {
                            const he = it(F),
                                De = Ee(F),
                                Ye = V.getImmediate({
                                    optional: !0
                                });
                            if (Ye) {
                                const gn = yield Ye.getHeartbeatsHeader();
                                gn && De.append("x-firebase-client", gn)
                            }
                            const It = {
                                    method: "POST",
                                    headers: De,
                                    body: JSON.stringify({
                                        fid: X,
                                        authVersion: qe,
                                        appId: F.appId,
                                        sdkVersion: fe
                                    })
                                },
                                on = yield Je(() => fetch(he, It));
                            if (on.ok) {
                                const gn = yield on.json();
                                return {
                                    fid: gn.fid || X,
                                    registrationStatus: 2,
                                    refreshToken: gn.refreshToken,
                                    authToken: ot(gn.authToken)
                                }
                            }
                            throw yield Ge("Create Installation", on)
                        })).apply(this, arguments)
                    }

                    function mt(F) {
                        return new Promise(V => {
                            setTimeout(V, F)
                        })
                    }
                    const Nn = /^[cdef][\w-]{21}$/;

                    function Mt() {
                        try {
                            const F = new Uint8Array(17);
                            (self.crypto || self.msCrypto).getRandomValues(F), F[0] = 112 + F[0] % 16;
                            const X = function ki(F) {
                                return function qt(F) {
                                    return btoa(String.fromCharCode(...F)).replace(/\+/g, "-").replace(/\//g, "_")
                                }(F).substr(0, 22)
                            }(F);
                            return Nn.test(X) ? X : ""
                        } catch {
                            return ""
                        }
                    }

                    function Oi(F) {
                        return `${F.appName}!${F.appId}`
                    }
                    const Ot = new Map;

                    function $n(F, V) {
                        const X = Oi(F);
                        Pr(X, V),
                            function Fo(F, V) {
                                const X = function tr() {
                                    return !No && "BroadcastChannel" in self && (No = new BroadcastChannel("[Firebase] FID Change"), No.onmessage = F => {
                                        Pr(F.data.key, F.data.fid)
                                    }), No
                                }();
                                X && X.postMessage({
                                        key: F,
                                        fid: V
                                    }),
                                    function ps() {
                                        0 === Ot.size && No && (No.close(), No = null)
                                    }()
                            }(X, V)
                    }

                    function Pr(F, V) {
                        const X = Ot.get(F);
                        if (X)
                            for (const he of X) he(V)
                    }
                    let No = null;
                    const sr = "firebase-installations-store";
                    let Ns = null;

                    function Kr() {
                        return Ns || (Ns = (0, $.X3)("firebase-installations-database", 1, {
                            upgrade: (F, V) => {
                                0 === V && F.createObjectStore(sr)
                            }
                        })), Ns
                    }

                    function Ht(F, V) {
                        return hr.apply(this, arguments)
                    }

                    function hr() {
                        return (hr = (0, x.Z)(function*(F, V) {
                            const X = Oi(F),
                                De = (yield Kr()).transaction(sr, "readwrite"),
                                Ye = De.objectStore(sr),
                                Xe = yield Ye.get(X);
                            return yield Ye.put(V, X), yield De.done, (!Xe || Xe.fid !== V.fid) && $n(F, V.fid), V
                        })).apply(this, arguments)
                    }

                    function Wn(F) {
                        return kn.apply(this, arguments)
                    }

                    function kn() {
                        return (kn = (0, x.Z)(function*(F) {
                            const V = Oi(F),
                                he = (yield Kr()).transaction(sr, "readwrite");
                            yield he.objectStore(sr).delete(V), yield he.done
                        })).apply(this, arguments)
                    }

                    function pr(F, V) {
                        return Hs.apply(this, arguments)
                    }

                    function Hs() {
                        return (Hs = (0, x.Z)(function*(F, V) {
                            const X = Oi(F),
                                De = (yield Kr()).transaction(sr, "readwrite"),
                                Ye = De.objectStore(sr),
                                Xe = yield Ye.get(X), It = V(Xe);
                            return void 0 === It ? yield Ye.delete(X): yield Ye.put(It, X), yield De.done, It && (!Xe || Xe.fid !== It.fid) && $n(F, It.fid), It
                        })).apply(this, arguments)
                    }

                    function Bn(F) {
                        return Ei.apply(this, arguments)
                    }

                    function Ei() {
                        return (Ei = (0, x.Z)(function*(F) {
                            let V;
                            const X = yield pr(F.appConfig, he => {
                                const De = Ti(he),
                                    Ye = Bt(F, De);
                                return V = Ye.registrationPromise, Ye.installationEntry
                            });
                            return "" === X.fid ? {
                                installationEntry: yield V
                            } : {
                                installationEntry: X,
                                registrationPromise: V
                            }
                        })).apply(this, arguments)
                    }

                    function Ti(F) {
                        return _n(F || {
                            fid: Mt(),
                            registrationStatus: 0
                        })
                    }

                    function Bt(F, V) {
                        if (0 === V.registrationStatus) {
                            if (!navigator.onLine) return {
                                installationEntry: V,
                                registrationPromise: Promise.reject(Et.create("app-offline"))
                            };
                            const X = {
                                    fid: V.fid,
                                    registrationStatus: 1,
                                    registrationTime: Date.now()
                                },
                                he = function _t(F, V) {
                                    return mn.apply(this, arguments)
                                }(F, X);
                            return {
                                installationEntry: X,
                                registrationPromise: he
                            }
                        }
                        return 1 === V.registrationStatus ? {
                            installationEntry: V,
                            registrationPromise: Br(F)
                        } : {
                            installationEntry: V
                        }
                    }

                    function mn() {
                        return (mn = (0, x.Z)(function*(F, V) {
                            try {
                                const X = yield Ne(F, V);
                                return Ht(F.appConfig, X)
                            } catch (X) {
                                throw At(X) && 409 === X.customData.serverCode ? yield Wn(F.appConfig): yield Ht(F.appConfig, {
                                    fid: V.fid,
                                    registrationStatus: 0
                                }), X
                            }
                        })).apply(this, arguments)
                    }

                    function Br(F) {
                        return _r.apply(this, arguments)
                    }

                    function _r() {
                        return (_r = (0, x.Z)(function*(F) {
                            let V = yield Qr(F.appConfig);
                            for (; 1 === V.registrationStatus;) yield mt(100), V = yield Qr(F.appConfig);
                            if (0 === V.registrationStatus) {
                                const {
                                    installationEntry: X,
                                    registrationPromise: he
                                } = yield Bn(F);
                                return he || X
                            }
                            return V
                        })).apply(this, arguments)
                    }

                    function Qr(F) {
                        return pr(F, V => {
                            if (!V) throw Et.create("installation-not-found");
                            return _n(V)
                        })
                    }

                    function _n(F) {
                        return function Xr(F) {
                            return 1 === F.registrationStatus && F.registrationTime + 1e4 < Date.now()
                        }(F) ? {
                            fid: F.fid,
                            registrationStatus: 0
                        } : F
                    }

                    function sn(F, V) {
                        return Mo.apply(this, arguments)
                    }

                    function Mo() {
                        return (Mo = (0, x.Z)(function*({
                            appConfig: F,
                            heartbeatServiceProvider: V
                        }, X) {
                            const he = Vn(F, X),
                                De = Be(F, X),
                                Ye = V.getImmediate({
                                    optional: !0
                                });
                            if (Ye) {
                                const gn = yield Ye.getHeartbeatsHeader();
                                gn && De.append("x-firebase-client", gn)
                            }
                            const It = {
                                    method: "POST",
                                    headers: De,
                                    body: JSON.stringify({
                                        installation: {
                                            sdkVersion: fe,
                                            appId: F.appId
                                        }
                                    })
                                },
                                on = yield Je(() => fetch(he, It));
                            if (on.ok) return ot(yield on.json());
                            throw yield Ge("Generate Auth Token", on)
                        })).apply(this, arguments)
                    }

                    function Vn(F, {
                        fid: V
                    }) {
                        return `${it(F)}/${V}/authTokens:generate`
                    }

                    function Cr(F) {
                        return Mn.apply(this, arguments)
                    }

                    function Mn() {
                        return (Mn = (0, x.Z)(function*(F, V = !1) {
                            let X;
                            const he = yield pr(F.appConfig, Ye => {
                                if (!jn(Ye)) throw Et.create("not-registered");
                                const Xe = Ye.authToken;
                                if (!V && ve(Xe)) return Ye;
                                if (1 === Xe.requestStatus) return X = jt(F, V), Ye; {
                                    if (!navigator.onLine) throw Et.create("app-offline");
                                    const It = xe(Ye);
                                    return X = cn(F, It), It
                                }
                            });
                            return X ? yield X: he.authToken
                        })).apply(this, arguments)
                    }

                    function jt(F, V) {
                        return st.apply(this, arguments)
                    }

                    function st() {
                        return (st = (0, x.Z)(function*(F, V) {
                            let X = yield Nt(F.appConfig);
                            for (; 1 === X.authToken.requestStatus;) yield mt(100), X = yield Nt(F.appConfig);
                            const he = X.authToken;
                            return 0 === he.requestStatus ? Cr(F, V) : he
                        })).apply(this, arguments)
                    }

                    function Nt(F) {
                        return pr(F, V => {
                            if (!jn(V)) throw Et.create("not-registered");
                            return function pe(F) {
                                return 1 === F.requestStatus && F.requestTime + 1e4 < Date.now()
                            }(V.authToken) ? Object.assign(Object.assign({}, V), {
                                authToken: {
                                    requestStatus: 0
                                }
                            }) : V
                        })
                    }

                    function cn(F, V) {
                        return dn.apply(this, arguments)
                    }

                    function dn() {
                        return (dn = (0, x.Z)(function*(F, V) {
                            try {
                                const X = yield sn(F, V), he = Object.assign(Object.assign({}, V), {
                                    authToken: X
                                });
                                return yield Ht(F.appConfig, he), X
                            } catch (X) {
                                if (!At(X) || 401 !== X.customData.serverCode && 404 !== X.customData.serverCode) {
                                    const he = Object.assign(Object.assign({}, V), {
                                        authToken: {
                                            requestStatus: 0
                                        }
                                    });
                                    yield Ht(F.appConfig, he)
                                } else yield Wn(F.appConfig);
                                throw X
                            }
                        })).apply(this, arguments)
                    }

                    function jn(F) {
                        return void 0 !== F && 2 === F.registrationStatus
                    }

                    function ve(F) {
                        return 2 === F.requestStatus && ! function ge(F) {
                            const V = Date.now();
                            return V < F.creationTime || F.creationTime + F.expiresIn < V + 36e5
                        }(F)
                    }

                    function xe(F) {
                        const V = {
                            requestStatus: 1,
                            requestTime: Date.now()
                        };
                        return Object.assign(Object.assign({}, F), {
                            authToken: V
                        })
                    }

                    function de() {
                        return (de = (0, x.Z)(function*(F) {
                            const V = F,
                                {
                                    installationEntry: X,
                                    registrationPromise: he
                                } = yield Bn(V);
                            return he ? he.catch(console.error) : Cr(V).catch(console.error), X.fid
                        })).apply(this, arguments)
                    }

                    function pt() {
                        return (pt = (0, x.Z)(function*(F, V = !1) {
                            const X = F;
                            return yield Zt(X), (yield Cr(X, V)).token
                        })).apply(this, arguments)
                    }

                    function Zt(F) {
                        return Lt.apply(this, arguments)
                    }

                    function Lt() {
                        return (Lt = (0, x.Z)(function*(F) {
                            const {
                                registrationPromise: V
                            } = yield Bn(F);
                            V && (yield V)
                        })).apply(this, arguments)
                    }

                    function eo(F) {
                        return Et.create("missing-app-config-values", {
                            valueName: F
                        })
                    }
                    const Ho = "installations",
                        Sl = F => {
                            const V = F.getProvider("app").getImmediate(),
                                X = function An(F) {
                                    if (!F || !F.options) throw eo("App Configuration");
                                    if (!F.name) throw eo("App Name");
                                    const V = ["projectId", "apiKey", "appId"];
                                    for (const X of V)
                                        if (!F.options[X]) throw eo(X);
                                    return {
                                        appName: F.name,
                                        projectId: F.options.projectId,
                                        apiKey: F.options.apiKey,
                                        appId: F.options.appId
                                    }
                                }(V);
                            return {
                                app: V,
                                appConfig: X,
                                heartbeatServiceProvider: (0, D._getProvider)(V, "heartbeat"),
                                _delete: () => Promise.resolve()
                            }
                        },
                        Dl = F => {
                            const V = F.getProvider("app").getImmediate(),
                                X = (0, D._getProvider)(V, Ho).getImmediate();
                            return {
                                getId: () => function ee(F) {
                                    return de.apply(this, arguments)
                                }(X),
                                getToken: De => function ye(F) {
                                    return pt.apply(this, arguments)
                                }(X, De)
                            }
                        };
                    (function Pl() {
                        (0, D._registerComponent)(new B.wA(Ho, Sl, "PUBLIC")), (0, D._registerComponent)(new B.wA("installations-internal", Dl, "PRIVATE"))
                    })(), (0, D.registerVersion)(ae, ie), (0, D.registerVersion)(ae, ie, "esm2017");
                    const Ii = "@firebase/remote-config",
                        Mr = new A.LL("remoteconfig", "Remote Config", {
                            "registration-window": "Undefined window object. This SDK only supports usage in a browser environment.",
                            "registration-project-id": "Undefined project identifier. Check Firebase app initialization.",
                            "registration-api-key": "Undefined API key. Check Firebase app initialization.",
                            "registration-app-id": "Undefined app identifier. Check Firebase app initialization.",
                            "storage-open": "Error thrown when opening storage. Original error: {$originalErrorMessage}.",
                            "storage-get": "Error thrown when reading from storage. Original error: {$originalErrorMessage}.",
                            "storage-set": "Error thrown when writing to storage. Original error: {$originalErrorMessage}.",
                            "storage-delete": "Error thrown when deleting from storage. Original error: {$originalErrorMessage}.",
                            "fetch-client-network": "Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",
                            "fetch-timeout": 'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',
                            "fetch-throttle": 'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',
                            "fetch-client-parse": "Fetch client could not parse response. Original error: {$originalErrorMessage}.",
                            "fetch-status": "Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",
                            "indexed-db-unavailable": "Indexed DB is not supported by current browser"
                        });
                    class po {
                        constructor(V, X, he, De) {
                            this.client = V, this.storage = X, this.storageCache = he, this.logger = De
                        }
                        isCachedDataFresh(V, X) {
                            if (!X) return this.logger.debug("Config fetch cache check. Cache unpopulated."), !1;
                            const he = Date.now() - X,
                                De = he <= V;
                            return this.logger.debug(`Config fetch cache check. Cache age millis: ${he}. Cache max age millis (minimumFetchIntervalMillis setting): ${V}. Is cache hit: ${De}.`), De
                        }
                        fetch(V) {
                            var X = this;
                            return (0, x.Z)(function*() {
                                const [he, De] = yield Promise.all([X.storage.getLastSuccessfulFetchTimestampMillis(), X.storage.getLastSuccessfulFetchResponse()]);
                                if (De && X.isCachedDataFresh(V.cacheMaxAgeMillis, he)) return De;
                                V.eTag = De && De.eTag;
                                const Ye = yield X.client.fetch(V), Xe = [X.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];
                                return 200 === Ye.status && Xe.push(X.storage.setLastSuccessfulFetchResponse(Ye)), yield Promise.all(Xe), Ye
                            })()
                        }
                    }

                    function Il(F = navigator) {
                        return F.languages && F.languages[0] || F.language
                    }
                    class Ta {
                        constructor(V, X, he, De, Ye, Xe) {
                            this.firebaseInstallations = V, this.sdkVersion = X, this.namespace = he, this.projectId = De, this.apiKey = Ye, this.appId = Xe
                        }
                        fetch(V) {
                            var X = this;
                            return (0, x.Z)(function*() {
                                var he, De, Ye;
                                const [Xe, It] = yield Promise.all([X.firebaseInstallations.getId(), X.firebaseInstallations.getToken()]), gn = `${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${X.projectId}/namespaces/${X.namespace}:fetch?key=${X.apiKey}`, fn = {
                                    "Content-Type": "application/json",
                                    "Content-Encoding": "gzip",
                                    "If-None-Match": V.eTag || "*"
                                }, en = {
                                    sdk_version: X.sdkVersion,
                                    app_instance_id: Xe,
                                    app_instance_id_token: It,
                                    app_id: X.appId,
                                    language_code: Il()
                                }, Wi = {
                                    method: "POST",
                                    headers: fn,
                                    body: JSON.stringify(en)
                                }, fo = fetch(gn, Wi), Dr = new Promise((Ms, Gs) => {
                                    V.signal.addEventListener(() => {
                                        const Ku = new Error("The operation was aborted.");
                                        Ku.name = "AbortError", Gs(Ku)
                                    })
                                });
                                let zl;
                                try {
                                    yield Promise.race([fo, Dr]), zl = yield fo
                                } catch (Ms) {
                                    let Gs = "fetch-client-network";
                                    throw "AbortError" === (null === (he = Ms) || void 0 === he ? void 0 : he.name) && (Gs = "fetch-timeout"), Mr.create(Gs, {
                                        originalErrorMessage: null === (De = Ms) || void 0 === De ? void 0 : De.message
                                    })
                                }
                                let Ws = zl.status;
                                const Oc = zl.headers.get("ETag") || void 0;
                                let pu, So;
                                if (200 === zl.status) {
                                    let Ms;
                                    try {
                                        Ms = yield zl.json()
                                    } catch (Gs) {
                                        throw Mr.create("fetch-client-parse", {
                                            originalErrorMessage: null === (Ye = Gs) || void 0 === Ye ? void 0 : Ye.message
                                        })
                                    }
                                    pu = Ms.entries, So = Ms.state
                                }
                                if ("INSTANCE_STATE_UNSPECIFIED" === So ? Ws = 500 : "NO_CHANGE" === So ? Ws = 304 : ("NO_TEMPLATE" === So || "EMPTY_CONFIG" === So) && (pu = {}), 304 !== Ws && 200 !== Ws) throw Mr.create("fetch-status", {
                                    httpStatus: Ws
                                });
                                return {
                                    status: Ws,
                                    eTag: Oc,
                                    config: pu
                                }
                            })()
                        }
                    }
                    class ia {
                        constructor(V, X) {
                            this.client = V, this.storage = X
                        }
                        fetch(V) {
                            var X = this;
                            return (0, x.Z)(function*() {
                                const he = (yield X.storage.getThrottleMetadata()) || {
                                    backoffCount: 0,
                                    throttleEndTimeMillis: Date.now()
                                };
                                return X.attemptFetch(V, he)
                            })()
                        }
                        attemptFetch(V, {
                            throttleEndTimeMillis: X,
                            backoffCount: he
                        }) {
                            var De = this;
                            return (0, x.Z)(function*() {
                                yield function no(F, V) {
                                    return new Promise((X, he) => {
                                        const De = Math.max(V - Date.now(), 0),
                                            Ye = setTimeout(X, De);
                                        F.addEventListener(() => {
                                            clearTimeout(Ye), he(Mr.create("fetch-throttle", {
                                                throttleEndTimeMillis: V
                                            }))
                                        })
                                    })
                                }(V.signal, X);
                                try {
                                    const Ye = yield De.client.fetch(V);
                                    return yield De.storage.deleteThrottleMetadata(), Ye
                                } catch (Ye) {
                                    if (! function Dh(F) {
                                            if (!(F instanceof A.ZR && F.customData)) return !1;
                                            const V = Number(F.customData.httpStatus);
                                            return 429 === V || 500 === V || 503 === V || 504 === V
                                        }(Ye)) throw Ye;
                                    const Xe = {
                                        throttleEndTimeMillis: Date.now() + (0, A.$s)(he),
                                        backoffCount: he + 1
                                    };
                                    return yield De.storage.setThrottleMetadata(Xe), De.attemptFetch(V, Xe)
                                }
                            })()
                        }
                    }
                    class Ph {
                        constructor(V, X, he, De, Ye) {
                            this.app = V, this._client = X, this._storageCache = he, this._storage = De, this._logger = Ye, this._isInitializationComplete = !1, this.settings = {
                                fetchTimeoutMillis: 6e4,
                                minimumFetchIntervalMillis: 432e5
                            }, this.defaultConfig = {}
                        }
                        get fetchTimeMillis() {
                            return this._storageCache.getLastSuccessfulFetchTimestampMillis() || -1
                        }
                        get lastFetchStatus() {
                            return this._storageCache.getLastFetchStatus() || "no-fetch-yet"
                        }
                    }

                    function nl(F, V) {
                        var X;
                        const he = F.target.error || void 0;
                        return Mr.create(V, {
                            originalErrorMessage: he && (null === (X = he) || void 0 === X ? void 0 : X.message)
                        })
                    }
                    const Al = "app_namespace_store";
                    class nu {
                        constructor(V, X, he, De = function op() {
                            return new Promise((F, V) => {
                                var X;
                                try {
                                    const he = indexedDB.open("firebase_remote_config", 1);
                                    he.onerror = De => {
                                        V(nl(De, "storage-open"))
                                    }, he.onsuccess = De => {
                                        F(De.target.result)
                                    }, he.onupgradeneeded = De => {
                                        0 === De.oldVersion && De.target.result.createObjectStore(Al, {
                                            keyPath: "compositeKey"
                                        })
                                    }
                                } catch (he) {
                                    V(Mr.create("storage-open", {
                                        originalErrorMessage: null === (X = he) || void 0 === X ? void 0 : X.message
                                    }))
                                }
                            })
                        }()) {
                            this.appId = V, this.appName = X, this.namespace = he, this.openDbPromise = De
                        }
                        getLastFetchStatus() {
                            return this.get("last_fetch_status")
                        }
                        setLastFetchStatus(V) {
                            return this.set("last_fetch_status", V)
                        }
                        getLastSuccessfulFetchTimestampMillis() {
                            return this.get("last_successful_fetch_timestamp_millis")
                        }
                        setLastSuccessfulFetchTimestampMillis(V) {
                            return this.set("last_successful_fetch_timestamp_millis", V)
                        }
                        getLastSuccessfulFetchResponse() {
                            return this.get("last_successful_fetch_response")
                        }
                        setLastSuccessfulFetchResponse(V) {
                            return this.set("last_successful_fetch_response", V)
                        }
                        getActiveConfig() {
                            return this.get("active_config")
                        }
                        setActiveConfig(V) {
                            return this.set("active_config", V)
                        }
                        getActiveConfigEtag() {
                            return this.get("active_config_etag")
                        }
                        setActiveConfigEtag(V) {
                            return this.set("active_config_etag", V)
                        }
                        getThrottleMetadata() {
                            return this.get("throttle_metadata")
                        }
                        setThrottleMetadata(V) {
                            return this.set("throttle_metadata", V)
                        }
                        deleteThrottleMetadata() {
                            return this.delete("throttle_metadata")
                        }
                        get(V) {
                            var X = this;
                            return (0, x.Z)(function*() {
                                const he = yield X.openDbPromise;
                                return new Promise((De, Ye) => {
                                    var Xe;
                                    const on = he.transaction([Al], "readonly").objectStore(Al),
                                        gn = X.createCompositeKey(V);
                                    try {
                                        const fn = on.get(gn);
                                        fn.onerror = en => {
                                            Ye(nl(en, "storage-get"))
                                        }, fn.onsuccess = en => {
                                            const Wi = en.target.result;
                                            De(Wi ? Wi.value : void 0)
                                        }
                                    } catch (fn) {
                                        Ye(Mr.create("storage-get", {
                                            originalErrorMessage: null === (Xe = fn) || void 0 === Xe ? void 0 : Xe.message
                                        }))
                                    }
                                })
                            })()
                        }
                        set(V, X) {
                            var he = this;
                            return (0, x.Z)(function*() {
                                const De = yield he.openDbPromise;
                                return new Promise((Ye, Xe) => {
                                    var It;
                                    const gn = De.transaction([Al], "readwrite").objectStore(Al),
                                        fn = he.createCompositeKey(V);
                                    try {
                                        const en = gn.put({
                                            compositeKey: fn,
                                            value: X
                                        });
                                        en.onerror = Wi => {
                                            Xe(nl(Wi, "storage-set"))
                                        }, en.onsuccess = () => {
                                            Ye()
                                        }
                                    } catch (en) {
                                        Xe(Mr.create("storage-set", {
                                            originalErrorMessage: null === (It = en) || void 0 === It ? void 0 : It.message
                                        }))
                                    }
                                })
                            })()
                        }
                        delete(V) {
                            var X = this;
                            return (0, x.Z)(function*() {
                                const he = yield X.openDbPromise;
                                return new Promise((De, Ye) => {
                                    var Xe;
                                    const on = he.transaction([Al], "readwrite").objectStore(Al),
                                        gn = X.createCompositeKey(V);
                                    try {
                                        const fn = on.delete(gn);
                                        fn.onerror = en => {
                                            Ye(nl(en, "storage-delete"))
                                        }, fn.onsuccess = () => {
                                            De()
                                        }
                                    } catch (fn) {
                                        Ye(Mr.create("storage-delete", {
                                            originalErrorMessage: null === (Xe = fn) || void 0 === Xe ? void 0 : Xe.message
                                        }))
                                    }
                                })
                            })()
                        }
                        createCompositeKey(V) {
                            return [this.appId, this.appName, this.namespace, V].join()
                        }
                    }
                    class sc {
                        constructor(V) {
                            this.storage = V
                        }
                        getLastFetchStatus() {
                            return this.lastFetchStatus
                        }
                        getLastSuccessfulFetchTimestampMillis() {
                            return this.lastSuccessfulFetchTimestampMillis
                        }
                        getActiveConfig() {
                            return this.activeConfig
                        }
                        loadFromStorage() {
                            var V = this;
                            return (0, x.Z)(function*() {
                                const X = V.storage.getLastFetchStatus(),
                                    he = V.storage.getLastSuccessfulFetchTimestampMillis(),
                                    De = V.storage.getActiveConfig(),
                                    Ye = yield X;
                                Ye && (V.lastFetchStatus = Ye);
                                const Xe = yield he;
                                Xe && (V.lastSuccessfulFetchTimestampMillis = Xe);
                                const It = yield De;
                                It && (V.activeConfig = It)
                            })()
                        }
                        setLastFetchStatus(V) {
                            return this.lastFetchStatus = V, this.storage.setLastFetchStatus(V)
                        }
                        setLastSuccessfulFetchTimestampMillis(V) {
                            return this.lastSuccessfulFetchTimestampMillis = V, this.storage.setLastSuccessfulFetchTimestampMillis(V)
                        }
                        setActiveConfig(V) {
                            return this.activeConfig = V, this.storage.setActiveConfig(V)
                        }
                    }

                    function Eh() {
                        return xd.apply(this, arguments)
                    }

                    function xd() {
                        return (xd = (0, x.Z)(function*() {
                            if (!(0, A.hl)()) return !1;
                            try {
                                return yield(0, A.eu)()
                            } catch {
                                return !1
                            }
                        })).apply(this, arguments)
                    }! function Vu() {
                        (0, D._registerComponent)(new B.wA("remote-config", function F(V, {
                            instanceIdentifier: X
                        }) {
                            const he = V.getProvider("app").getImmediate(),
                                De = V.getProvider("installations-internal").getImmediate();
                            if (typeof window > "u") throw Mr.create("registration-window");
                            if (!(0, A.hl)()) throw Mr.create("indexed-db-unavailable");
                            const {
                                projectId: Ye,
                                apiKey: Xe,
                                appId: It
                            } = he.options;
                            if (!Ye) throw Mr.create("registration-project-id");
                            if (!Xe) throw Mr.create("registration-api-key");
                            if (!It) throw Mr.create("registration-app-id");
                            const on = new nu(It, he.name, X = X || "firebase"),
                                gn = new sc(on),
                                fn = new j.Yd(Ii);
                            fn.logLevel = j.in.ERROR;
                            const en = new Ta(De, D.SDK_VERSION, X, Ye, Xe, It),
                                Wi = new ia(en, on),
                                fo = new po(Wi, on, gn, fn),
                                Dr = new Ph(he, fo, gn, on, fn);
                            return function Xt(F) {
                                const V = (0, A.m9)(F);
                                V._initializePromise || (V._initializePromise = V._storageCache.loadFromStorage().then(() => {
                                    V._isInitializationComplete = !0
                                }))
                            }(Dr), Dr
                        }, "PUBLIC").setMultipleInstances(!0)), (0, D.registerVersion)(Ii, "0.3.15"), (0, D.registerVersion)(Ii, "0.3.15", "esm2017")
                    }();
                    const mo = "/firebase-messaging-sw.js",
                        lc = "/firebase-cloud-messaging-push-scope",
                        il = "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",
                        Yi = "google.c.a.c_id",
                        Bi = "google.c.a.c_l",
                        Zc = "google.c.a.ts",
                        rl = "google.c.a.e";
                    var es = (() => {
                        return (F = es || (es = {})).PUSH_RECEIVED = "push-received", F.NOTIFICATION_CLICKED = "notification-clicked", es;
                        var F
                    })();

                    function ra(F) {
                        const V = new Uint8Array(F);
                        return btoa(String.fromCharCode(...V)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
                    }

                    function ts(F) {
                        const X = (F + "=".repeat((4 - F.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
                            he = atob(X),
                            De = new Uint8Array(he.length);
                        for (let Ye = 0; Ye < he.length; ++Ye) De[Ye] = he.charCodeAt(Ye);
                        return De
                    }
                    const ol = "fcm_token_details_db",
                        yr = "fcm_token_object_Store";

                    function zu(F) {
                        return Si.apply(this, arguments)
                    }

                    function Si() {
                        return Si = (0, x.Z)(function*(F) {
                            if ("databases" in indexedDB && !(yield indexedDB.databases()).map(Ye => Ye.name).includes(ol)) return null;
                            let V = null;
                            return (yield(0, $.X3)(ol, 5, {
                                upgrade: (he = (0, x.Z)(function*(De, Ye, Xe, It) {
                                    var on;
                                    if (Ye < 2 || !De.objectStoreNames.contains(yr)) return;
                                    const gn = It.objectStore(yr),
                                        fn = yield gn.index("fcmSenderId").get(F);
                                    if (yield gn.clear(), fn)
                                        if (2 === Ye) {
                                            const en = fn;
                                            if (!en.auth || !en.p256dh || !en.endpoint) return;
                                            V = {
                                                token: en.fcmToken,
                                                createTime: null !== (on = en.createTime) && void 0 !== on ? on : Date.now(),
                                                subscriptionOptions: {
                                                    auth: en.auth,
                                                    p256dh: en.p256dh,
                                                    endpoint: en.endpoint,
                                                    swScope: en.swScope,
                                                    vapidKey: "string" == typeof en.vapidKey ? en.vapidKey : ra(en.vapidKey)
                                                }
                                            }
                                        } else if (3 === Ye) {
                                        const en = fn;
                                        V = {
                                            token: en.fcmToken,
                                            createTime: en.createTime,
                                            subscriptionOptions: {
                                                auth: ra(en.auth),
                                                p256dh: ra(en.p256dh),
                                                endpoint: en.endpoint,
                                                swScope: en.swScope,
                                                vapidKey: ra(en.vapidKey)
                                            }
                                        }
                                    } else if (4 === Ye) {
                                        const en = fn;
                                        V = {
                                            token: en.fcmToken,
                                            createTime: en.createTime,
                                            subscriptionOptions: {
                                                auth: ra(en.auth),
                                                p256dh: ra(en.p256dh),
                                                endpoint: en.endpoint,
                                                swScope: en.swScope,
                                                vapidKey: ra(en.vapidKey)
                                            }
                                        }
                                    }
                                }), function(Ye, Xe, It, on) {
                                    return he.apply(this, arguments)
                                })
                            })).close(), yield(0, $.Lj)(ol), yield(0, $.Lj)("fcm_vapid_details_db"), yield(0, $.Lj)("undefined"), zi(V) ? V : null;
                            var he
                        }), Si.apply(this, arguments)
                    }

                    function zi(F) {
                        if (!F || !F.subscriptionOptions) return !1;
                        const {
                            subscriptionOptions: V
                        } = F;
                        return "number" == typeof F.createTime && F.createTime > 0 && "string" == typeof F.token && F.token.length > 0 && "string" == typeof V.auth && V.auth.length > 0 && "string" == typeof V.p256dh && V.p256dh.length > 0 && "string" == typeof V.endpoint && V.endpoint.length > 0 && "string" == typeof V.swScope && V.swScope.length > 0 && "string" == typeof V.vapidKey && V.vapidKey.length > 0
                    }
                    const ns = "firebase-messaging-store";
                    let io = null;

                    function $c() {
                        return io || (io = (0, $.X3)("firebase-messaging-database", 1, {
                            upgrade: (F, V) => {
                                0 === V && F.createObjectStore(ns)
                            }
                        })), io
                    }

                    function Bs(F) {
                        return jr.apply(this, arguments)
                    }

                    function jr() {
                        return (jr = (0, x.Z)(function*(F) {
                            const V = Vo(F),
                                he = yield(yield $c()).transaction(ns).objectStore(ns).get(V);
                            if (he) return he; {
                                const De = yield zu(F.appConfig.senderId);
                                if (De) return yield si(F, De), De
                            }
                        })).apply(this, arguments)
                    }

                    function si(F, V) {
                        return xo.apply(this, arguments)
                    }

                    function xo() {
                        return (xo = (0, x.Z)(function*(F, V) {
                            const X = Vo(F),
                                De = (yield $c()).transaction(ns, "readwrite");
                            return yield De.objectStore(ns).put(V, X), yield De.done, V
                        })).apply(this, arguments)
                    }

                    function go(F) {
                        return Bo.apply(this, arguments)
                    }

                    function Bo() {
                        return (Bo = (0, x.Z)(function*(F) {
                            const V = Vo(F),
                                he = (yield $c()).transaction(ns, "readwrite");
                            yield he.objectStore(ns).delete(V), yield he.done
                        })).apply(this, arguments)
                    }

                    function Vo({
                        appConfig: F
                    }) {
                        return F.appId
                    }
                    const Vi = new A.LL("messaging", "Messaging", {
                        "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
                        "only-available-in-window": "This method is available in a Window context.",
                        "only-available-in-sw": "This method is available in a service worker context.",
                        "permission-default": "The notification permission was not granted and dismissed instead.",
                        "permission-blocked": "The notification permission was not granted and blocked instead.",
                        "unsupported-browser": "This browser doesn't support the API's required to use the Firebase SDK.",
                        "indexed-db-unsupported": "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
                        "failed-service-worker-registration": "We are unable to register the default service worker. {$browserErrorMessage}",
                        "token-subscribe-failed": "A problem occurred while subscribing the user to FCM: {$errorInfo}",
                        "token-subscribe-no-token": "FCM returned no token when subscribing the user to push.",
                        "token-unsubscribe-failed": "A problem occurred while unsubscribing the user from FCM: {$errorInfo}",
                        "token-update-failed": "A problem occurred while updating the user from FCM: {$errorInfo}",
                        "token-update-no-token": "FCM returned no token when updating the user to push.",
                        "use-sw-after-get-token": "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
                        "invalid-sw-registration": "The input to useServiceWorker() must be a ServiceWorkerRegistration.",
                        "invalid-bg-handler": "The input to setBackgroundMessageHandler() must be a function.",
                        "invalid-vapid-key": "The public VAPID key must be a string.",
                        "use-vapid-key-after-get-token": "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."
                    });

                    function xn(F, V) {
                        return oa.apply(this, arguments)
                    }

                    function oa() {
                        return (oa = (0, x.Z)(function*(F, V) {
                            var X;
                            const he = yield Jc(F), De = ht(V), Ye = {
                                method: "POST",
                                headers: he,
                                body: JSON.stringify(De)
                            };
                            let Xe;
                            try {
                                Xe = yield(yield fetch(sa(F.appConfig), Ye)).json()
                            } catch (It) {
                                throw Vi.create("token-subscribe-failed", {
                                    errorInfo: null === (X = It) || void 0 === X ? void 0 : X.toString()
                                })
                            }
                            if (Xe.error) throw Vi.create("token-subscribe-failed", {
                                errorInfo: Xe.error.message
                            });
                            if (!Xe.token) throw Vi.create("token-subscribe-no-token");
                            return Xe.token
                        })).apply(this, arguments)
                    }

                    function nr(F, V) {
                        return gs.apply(this, arguments)
                    }

                    function gs() {
                        return (gs = (0, x.Z)(function*(F, V) {
                            var X;
                            const he = yield Jc(F), De = ht(V.subscriptionOptions), Ye = {
                                method: "PATCH",
                                headers: he,
                                body: JSON.stringify(De)
                            };
                            let Xe;
                            try {
                                Xe = yield(yield fetch(`${sa(F.appConfig)}/${V.token}`, Ye)).json()
                            } catch (It) {
                                throw Vi.create("token-update-failed", {
                                    errorInfo: null === (X = It) || void 0 === X ? void 0 : X.toString()
                                })
                            }
                            if (Xe.error) throw Vi.create("token-update-failed", {
                                errorInfo: Xe.error.message
                            });
                            if (!Xe.token) throw Vi.create("token-update-no-token");
                            return Xe.token
                        })).apply(this, arguments)
                    }

                    function kd(F, V) {
                        return qc.apply(this, arguments)
                    }

                    function qc() {
                        return (qc = (0, x.Z)(function*(F, V) {
                            var X;
                            const De = {
                                method: "DELETE",
                                headers: yield Jc(F)
                            };
                            try {
                                const Xe = yield(yield fetch(`${sa(F.appConfig)}/${V}`, De)).json();
                                if (Xe.error) throw Vi.create("token-unsubscribe-failed", {
                                    errorInfo: Xe.error.message
                                })
                            } catch (Ye) {
                                throw Vi.create("token-unsubscribe-failed", {
                                    errorInfo: null === (X = Ye) || void 0 === X ? void 0 : X.toString()
                                })
                            }
                        })).apply(this, arguments)
                    }

                    function sa({
                        projectId: F
                    }) {
                        return `https://fcmregistrations.googleapis.com/v1/projects/${F}/registrations`
                    }

                    function Jc(F) {
                        return dc.apply(this, arguments)
                    }

                    function dc() {
                        return (dc = (0, x.Z)(function*({
                            appConfig: F,
                            installations: V
                        }) {
                            const X = yield V.getToken();
                            return new Headers({
                                "Content-Type": "application/json",
                                Accept: "application/json",
                                "x-goog-api-key": F.apiKey,
                                "x-goog-firebase-installations-auth": `FIS ${X}`
                            })
                        })).apply(this, arguments)
                    }

                    function ht({
                        p256dh: F,
                        auth: V,
                        endpoint: X,
                        vapidKey: he
                    }) {
                        const De = {
                            web: {
                                endpoint: X,
                                auth: V,
                                p256dh: F
                            }
                        };
                        return he !== il && (De.web.applicationPubKey = he), De
                    }
                    const qn = 6048e5;

                    function Od(F) {
                        return fs.apply(this, arguments)
                    }

                    function fs() {
                        return (fs = (0, x.Z)(function*(F) {
                            const V = yield Ih(F.swRegistration, F.vapidKey), X = {
                                vapidKey: F.vapidKey,
                                swScope: F.swRegistration.scope,
                                endpoint: V.endpoint,
                                auth: ra(V.getKey("auth")),
                                p256dh: ra(V.getKey("p256dh"))
                            }, he = yield Bs(F.firebaseDependencies);
                            if (he) {
                                if (Wu(he.subscriptionOptions, X)) return Date.now() >= he.createTime + qn ? Kc(F, {
                                    token: he.token,
                                    createTime: Date.now(),
                                    subscriptionOptions: X
                                }) : he.token;
                                try {
                                    yield kd(F.firebaseDependencies, he.token)
                                } catch (De) {
                                    console.warn(De)
                                }
                                return uc(F.firebaseDependencies, X)
                            }
                            return uc(F.firebaseDependencies, X)
                        })).apply(this, arguments)
                    }

                    function Hr(F) {
                        return _s.apply(this, arguments)
                    }

                    function _s() {
                        return (_s = (0, x.Z)(function*(F) {
                            const V = yield Bs(F.firebaseDependencies);
                            V && (yield kd(F.firebaseDependencies, V.token), yield go(F.firebaseDependencies));
                            const X = yield F.swRegistration.pushManager.getSubscription();
                            return !X || X.unsubscribe()
                        })).apply(this, arguments)
                    }

                    function Kc(F, V) {
                        return Ur.apply(this, arguments)
                    }

                    function Ur() {
                        return (Ur = (0, x.Z)(function*(F, V) {
                            try {
                                const X = yield nr(F.firebaseDependencies, V), he = Object.assign(Object.assign({}, V), {
                                    token: X,
                                    createTime: Date.now()
                                });
                                return yield si(F.firebaseDependencies, he), X
                            } catch (X) {
                                throw yield Hr(F), X
                            }
                        })).apply(this, arguments)
                    }

                    function uc(F, V) {
                        return Da.apply(this, arguments)
                    }

                    function Da() {
                        return (Da = (0, x.Z)(function*(F, V) {
                            const he = {
                                token: yield xn(F, V), createTime: Date.now(), subscriptionOptions: V
                            };
                            return yield si(F, he), he.token
                        })).apply(this, arguments)
                    }

                    function Ih(F, V) {
                        return Ll.apply(this, arguments)
                    }

                    function Ll() {
                        return (Ll = (0, x.Z)(function*(F, V) {
                            return (yield F.pushManager.getSubscription()) || F.pushManager.subscribe({
                                userVisibleOnly: !0,
                                applicationServerKey: ts(V)
                            })
                        })).apply(this, arguments)
                    }

                    function Wu(F, V) {
                        return V.vapidKey === F.vapidKey && V.endpoint === F.endpoint && V.auth === F.auth && V.p256dh === F.p256dh
                    }

                    function Rl(F) {
                        const V = {
                            from: F.from,
                            collapseKey: F.collapse_key,
                            messageId: F.fcmMessageId
                        };
                        return function xr(F, V) {
                                if (!V.notification) return;
                                F.notification = {};
                                const X = V.notification.title;
                                X && (F.notification.title = X);
                                const he = V.notification.body;
                                he && (F.notification.body = he);
                                const De = V.notification.image;
                                De && (F.notification.image = De);
                                const Ye = V.notification.icon;
                                Ye && (F.notification.icon = Ye)
                            }(V, F),
                            function vr(F, V) {
                                !V.data || (F.data = V.data)
                            }(V, F),
                            function al(F, V) {
                                var X, he, De, Ye, Xe;
                                if (!(V.fcmOptions || null !== (X = V.notification) && void 0 !== X && X.click_action)) return;
                                F.fcmOptions = {};
                                const It = null !== (De = null === (he = V.fcmOptions) || void 0 === he ? void 0 : he.link) && void 0 !== De ? De : null === (Ye = V.notification) || void 0 === Ye ? void 0 : Ye.click_action;
                                It && (F.fcmOptions.link = It);
                                const on = null === (Xe = V.fcmOptions) || void 0 === Xe ? void 0 : Xe.analytics_label;
                                on && (F.fcmOptions.analyticsLabel = on)
                            }(V, F), V
                    }

                    function pi(F) {
                        return "object" == typeof F && !!F && Yi in F
                    }

                    function aa(F, V) {
                        const X = [];
                        for (let he = 0; he < F.length; he++) X.push(F.charAt(he)), he < V.length && X.push(V.charAt(he));
                        return X.join("")
                    }

                    function Td(F) {
                        return Vi.create("missing-app-config-values", {
                            valueName: F
                        })
                    }
                    aa("hts/frbslgigp.ogepscmv/ieo/eaylg", "tp:/ieaeogn-agolai.o/1frlglgc/o"), aa("AzSCbw63g1R0nCw85jG8", "Iaya3yLKwmgvh7cF0q4");
                    class Gu {
                        constructor(V, X, he) {
                            this.deliveryMetricsExportedToBigQueryEnabled = !1, this.onBackgroundMessageHandler = null, this.onMessageHandler = null, this.logEvents = [], this.isLogServiceStarted = !1;
                            const De = function iu(F) {
                                if (!F || !F.options) throw Td("App Configuration Object");
                                if (!F.name) throw Td("App Name");
                                const V = ["projectId", "apiKey", "appId", "messagingSenderId"],
                                    {
                                        options: X
                                    } = F;
                                for (const he of V)
                                    if (!X[he]) throw Td(he);
                                return {
                                    appName: F.name,
                                    projectId: X.projectId,
                                    apiKey: X.apiKey,
                                    appId: X.appId,
                                    senderId: X.messagingSenderId
                                }
                            }(V);
                            this.firebaseDependencies = {
                                app: V,
                                appConfig: De,
                                installations: X,
                                analyticsProvider: he
                            }
                        }
                        _delete() {
                            return Promise.resolve()
                        }
                    }

                    function Ah(F) {
                        return hc.apply(this, arguments)
                    }

                    function hc() {
                        return (hc = (0, x.Z)(function*(F) {
                            var V;
                            try {
                                F.swRegistration = yield navigator.serviceWorker.register(mo, {
                                    scope: lc
                                }), F.swRegistration.update().catch(() => {})
                            } catch (X) {
                                throw Vi.create("failed-service-worker-registration", {
                                    browserErrorMessage: null === (V = X) || void 0 === V ? void 0 : V.message
                                })
                            }
                        })).apply(this, arguments)
                    }

                    function Fl(F, V) {
                        return la.apply(this, arguments)
                    }

                    function la() {
                        return (la = (0, x.Z)(function*(F, V) {
                            if (!V && !F.swRegistration && (yield Ah(F)), V || !F.swRegistration) {
                                if (!(V instanceof ServiceWorkerRegistration)) throw Vi.create("invalid-sw-registration");
                                F.swRegistration = V
                            }
                        })).apply(this, arguments)
                    }

                    function ru(F, V) {
                        return Qc.apply(this, arguments)
                    }

                    function Qc() {
                        return (Qc = (0, x.Z)(function*(F, V) {
                            V ? F.vapidKey = V : F.vapidKey || (F.vapidKey = il)
                        })).apply(this, arguments)
                    }

                    function ca() {
                        return (ca = (0, x.Z)(function*(F, V) {
                            if (!navigator) throw Vi.create("only-available-in-window");
                            if ("default" === Notification.permission && (yield Notification.requestPermission()), "granted" !== Notification.permission) throw Vi.create("permission-blocked");
                            return yield ru(F, V ? .vapidKey), yield Fl(F, V ? .serviceWorkerRegistration), Od(F)
                        })).apply(this, arguments)
                    }

                    function da(F, V, X) {
                        return ll.apply(this, arguments)
                    }

                    function ll() {
                        return (ll = (0, x.Z)(function*(F, V, X) {
                            const he = Zu(V);
                            (yield F.firebaseDependencies.analyticsProvider.get()).logEvent(he, {
                                message_id: X[Yi],
                                message_name: X[Bi],
                                message_time: X[Zc],
                                message_device_time: Math.floor(Date.now() / 1e3)
                            })
                        })).apply(this, arguments)
                    }

                    function Zu(F) {
                        switch (F) {
                            case es.NOTIFICATION_CLICKED:
                                return "notification_open";
                            case es.PUSH_RECEIVED:
                                return "notification_foreground";
                            default:
                                throw new Error
                        }
                    }

                    function ua() {
                        return (ua = (0, x.Z)(function*(F, V) {
                            const X = V.data;
                            if (!X.isFirebaseMessaging) return;
                            F.onMessageHandler && X.messageType === es.PUSH_RECEIVED && ("function" == typeof F.onMessageHandler ? F.onMessageHandler(Rl(X)) : F.onMessageHandler.next(Rl(X)));
                            const he = X.data;
                            pi(he) && "1" === he[rl] && (yield da(F, X.messageType, he))
                        })).apply(this, arguments)
                    }
                    const ko = "@firebase/messaging",
                        lr = F => {
                            const V = new Gu(F.getProvider("app").getImmediate(), F.getProvider("installations-internal").getImmediate(), F.getProvider("analytics-internal"));
                            return navigator.serviceWorker.addEventListener("message", X => function $u(F, V) {
                                return ua.apply(this, arguments)
                            }(V, X)), V
                        },
                        Pa = F => {
                            const V = F.getProvider("messaging").getImmediate();
                            return {
                                getToken: he => function Nl(F, V) {
                                    return ca.apply(this, arguments)
                                }(V, he)
                            }
                        };

                    function ou() {
                        return su.apply(this, arguments)
                    }

                    function su() {
                        return (su = (0, x.Z)(function*() {
                            try {
                                yield(0, A.eu)()
                            } catch {
                                return !1
                            }
                            return typeof window < "u" && (0, A.hl)() && (0, A.zI)() && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
                        })).apply(this, arguments)
                    }! function mr() {
                        (0, D._registerComponent)(new B.wA("messaging", lr, "PUBLIC")), (0, D._registerComponent)(new B.wA("messaging-internal", Pa, "PRIVATE")), (0, D.registerVersion)(ko, "0.10.0"), (0, D.registerVersion)(ko, "0.10.0", "esm2017")
                    }();
                    const ci = "analytics",
                        di = "firebase_id",
                        Oo = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",
                        mc = "https://www.googletagmanager.com/gtag/js",
                        kr = new j.Yd("@firebase/analytics");

                    function Ea(F) {
                        return Promise.all(F.map(V => V.catch(X => X)))
                    }

                    function cl(F, V) {
                        const X = document.createElement("script");
                        X.src = `${mc}?l=${F}&id=${V}`, X.async = !0, document.head.appendChild(X)
                    }

                    function Ai(F, V, X, he, De, Ye) {
                        return Xc.apply(this, arguments)
                    }

                    function Xc() {
                        return (Xc = (0, x.Z)(function*(F, V, X, he, De, Ye) {
                            const Xe = he[De];
                            try {
                                if (Xe) yield V[Xe];
                                else {
                                    const on = (yield Ea(X)).find(gn => gn.measurementId === De);
                                    on && (yield V[on.appId])
                                }
                            } catch (It) {
                                kr.error(It)
                            }
                            F("config", De, Ye)
                        })).apply(this, arguments)
                    }

                    function ha(F, V, X, he, De) {
                        return dl.apply(this, arguments)
                    }

                    function dl() {
                        return (dl = (0, x.Z)(function*(F, V, X, he, De) {
                            try {
                                let Ye = [];
                                if (De && De.send_to) {
                                    let Xe = De.send_to;
                                    Array.isArray(Xe) || (Xe = [Xe]);
                                    const It = yield Ea(X);
                                    for (const on of Xe) {
                                        const gn = It.find(en => en.measurementId === on),
                                            fn = gn && V[gn.appId];
                                        if (!fn) {
                                            Ye = [];
                                            break
                                        }
                                        Ye.push(fn)
                                    }
                                }
                                0 === Ye.length && (Ye = Object.values(V)), yield Promise.all(Ye), F("event", he, De || {})
                            } catch (Ye) {
                                kr.error(Ye)
                            }
                        })).apply(this, arguments)
                    }

                    function Ju(F) {
                        const V = window.document.getElementsByTagName("script");
                        for (const X of Object.values(V))
                            if (X.src && X.src.includes(mc) && X.src.includes(F)) return X;
                        return null
                    }
                    const qi = new A.LL("analytics", "Analytics", {
                            "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
                            "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
                            "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
                            "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
                            "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
                            "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
                            "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
                            "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
                            "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
                            "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'
                        }),
                        fc = new class gc {
                            constructor(V = {}, X = 1e3) {
                                this.throttleMetadata = V, this.intervalMillis = X
                            }
                            getThrottleMetadata(V) {
                                return this.throttleMetadata[V]
                            }
                            setThrottleMetadata(V, X) {
                                this.throttleMetadata[V] = X
                            }
                            deleteThrottleMetadata(V) {
                                delete this.throttleMetadata[V]
                            }
                        };

                    function pa(F) {
                        return new Headers({
                            Accept: "application/json",
                            "x-goog-api-key": F
                        })
                    }

                    function Pd(F) {
                        return br.apply(this, arguments)
                    }

                    function br() {
                        return (br = (0, x.Z)(function*(F) {
                            var V;
                            const {
                                appId: X,
                                apiKey: he
                            } = F, De = {
                                method: "GET",
                                headers: pa(he)
                            }, Ye = Oo.replace("{app-id}", X), Xe = yield fetch(Ye, De);
                            if (200 !== Xe.status && 304 !== Xe.status) {
                                let It = "";
                                try {
                                    const on = yield Xe.json();
                                    null !== (V = on.error) && void 0 !== V && V.message && (It = on.error.message)
                                } catch {}
                                throw qi.create("config-fetch-failed", {
                                    httpStatus: Xe.status,
                                    responseMessage: It
                                })
                            }
                            return Xe.json()
                        })).apply(this, arguments)
                    }

                    function _c(F) {
                        return Yr.apply(this, arguments)
                    }

                    function Yr() {
                        return (Yr = (0, x.Z)(function*(F, V = fc, X) {
                            const {
                                appId: he,
                                apiKey: De,
                                measurementId: Ye
                            } = F.options;
                            if (!he) throw qi.create("no-app-id");
                            if (!De) {
                                if (Ye) return {
                                    measurementId: Ye,
                                    appId: he
                                };
                                throw qi.create("no-api-key")
                            }
                            const Xe = V.getThrottleMetadata(he) || {
                                    backoffCount: 0,
                                    throttleEndTimeMillis: Date.now()
                                },
                                It = new La;
                            return setTimeout((0, x.Z)(function*() {
                                It.abort()
                            }), void 0 !== X ? X : 6e4), td({
                                appId: he,
                                apiKey: De,
                                measurementId: Ye
                            }, Xe, It, V)
                        })).apply(this, arguments)
                    }

                    function td(F, V, X) {
                        return Aa.apply(this, arguments)
                    }

                    function Aa() {
                        return (Aa = (0, x.Z)(function*(F, {
                            throttleEndTimeMillis: V,
                            backoffCount: X
                        }, he, De = fc) {
                            var Ye, Xe;
                            const {
                                appId: It,
                                measurementId: on
                            } = F;
                            try {
                                yield lu(he, V)
                            } catch (gn) {
                                if (on) return kr.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${on} provided in the "measurementId" field in the local Firebase config. [${null===(Ye=gn)||void 0===Ye?void 0:Ye.message}]`), {
                                    appId: It,
                                    measurementId: on
                                };
                                throw gn
                            }
                            try {
                                const gn = yield Pd(F);
                                return De.deleteThrottleMetadata(It), gn
                            } catch (gn) {
                                const fn = gn;
                                if (!Ed(fn)) {
                                    if (De.deleteThrottleMetadata(It), on) return kr.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${on} provided in the "measurementId" field in the local Firebase config. [${fn?.message}]`), {
                                        appId: It,
                                        measurementId: on
                                    };
                                    throw gn
                                }
                                const en = 503 === Number(null === (Xe = fn ? .customData) || void 0 === Xe ? void 0 : Xe.httpStatus) ? (0, A.$s)(X, De.intervalMillis, 30) : (0, A.$s)(X, De.intervalMillis),
                                    Wi = {
                                        throttleEndTimeMillis: Date.now() + en,
                                        backoffCount: X + 1
                                    };
                                return De.setThrottleMetadata(It, Wi), kr.debug(`Calling attemptFetch again in ${en} millis`), td(F, Wi, he, De)
                            }
                        })).apply(this, arguments)
                    }

                    function lu(F, V) {
                        return new Promise((X, he) => {
                            const De = Math.max(V - Date.now(), 0),
                                Ye = setTimeout(X, De);
                            F.addEventListener(() => {
                                clearTimeout(Ye), he(qi.create("fetch-throttle", {
                                    throttleEndTimeMillis: V
                                }))
                            })
                        })
                    }

                    function Ed(F) {
                        if (!(F instanceof A.ZR && F.customData)) return !1;
                        const V = Number(F.customData.httpStatus);
                        return 429 === V || 500 === V || 503 === V || 504 === V
                    }
                    class La {
                        constructor() {
                            this.listeners = []
                        }
                        addEventListener(V) {
                            this.listeners.push(V)
                        }
                        abort() {
                            this.listeners.forEach(V => V())
                        }
                    }
                    let Vs, Id;

                    function Ra() {
                        return (Ra = (0, x.Z)(function*(F, V, X, he, De) {
                            if (De && De.global) F("event", X, he);
                            else {
                                const Ye = yield V;
                                F("event", X, Object.assign(Object.assign({}, he), {
                                    send_to: Ye
                                }))
                            }
                        })).apply(this, arguments)
                    }

                    function hl(F) {
                        Id = F
                    }

                    function Bl(F) {
                        Vs = F
                    }

                    function ga() {
                        return js.apply(this, arguments)
                    }

                    function js() {
                        return (js = (0, x.Z)(function*() {
                            var F;
                            if (!(0, A.hl)()) return kr.warn(qi.create("indexeddb-unavailable", {
                                errorInfo: "IndexedDB is not available in this environment."
                            }).message), !1;
                            try {
                                yield(0, A.eu)()
                            } catch (V) {
                                return kr.warn(qi.create("indexeddb-unavailable", {
                                    errorInfo: null === (F = V) || void 0 === F ? void 0 : F.toString()
                                }).message), !1
                            }
                            return !0
                        })).apply(this, arguments)
                    }

                    function fa() {
                        return (fa = (0, x.Z)(function*(F, V, X, he, De, Ye, Xe) {
                            var It;
                            const on = _c(F);
                            on.then(fo => {
                                X[fo.measurementId] = fo.appId, F.options.measurementId && fo.measurementId !== F.options.measurementId && kr.warn(`The measurement ID in the local Firebase config (${F.options.measurementId}) does not match the measurement ID fetched from the server (${fo.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
                            }).catch(fo => kr.error(fo)), V.push(on);
                            const gn = ga().then(fo => {
                                    if (fo) return he.getId()
                                }),
                                [fn, en] = yield Promise.all([on, gn]);
                            Ju(Ye) || cl(Ye, fn.measurementId), Id && (De("consent", "default", Id), hl(void 0)), De("js", new Date);
                            const Wi = null !== (It = Xe ? .config) && void 0 !== It ? It : {};
                            return Wi.origin = "firebase", Wi.update = !0, null != en && (Wi[di] = en), De("config", fn.measurementId, Wi), Vs && (De("set", Vs), Bl(void 0)), fn.measurementId
                        })).apply(this, arguments)
                    }
                    class Vl {
                        constructor(V) {
                            this.app = V
                        }
                        _delete() {
                            return delete Er[this.app.options.appId], Promise.resolve()
                        }
                    }
                    let Er = {},
                        yc = [];
                    const jl = {};
                    let bc, rs, vc = "dataLayer",
                        wc = !1;

                    function Cc(F, V, X) {
                        ! function re() {
                            const F = [];
                            if ((0, A.ru)() && F.push("This is a browser extension environment."), (0, A.zI)() || F.push("Cookies are not available."), F.length > 0) {
                                const V = F.map((he, De) => `(${De+1}) ${he}`).join(" "),
                                    X = qi.create("invalid-analytics-context", {
                                        errorInfo: V
                                    });
                                kr.warn(X.message)
                            }
                        }();
                        const he = F.options.appId;
                        if (!he) throw qi.create("no-app-id");
                        if (!F.options.apiKey) {
                            if (!F.options.measurementId) throw qi.create("no-api-key");
                            kr.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${F.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
                        }
                        if (null != Er[he]) throw qi.create("already-exists", {
                            id: he
                        });
                        if (!wc) {
                            ! function Hl(F) {
                                let V = [];
                                Array.isArray(window[F]) ? V = window[F] : window[F] = V
                            }(vc);
                            const {
                                wrappedGtag: Ye,
                                gtagCore: Xe
                            } = function ed(F, V, X, he, De) {
                                let Ye = function(...Xe) {
                                    window[he].push(arguments)
                                };
                                return window[De] && "function" == typeof window[De] && (Ye = window[De]), window[De] = function au(F, V, X, he) {
                                    function Ye() {
                                        return (Ye = (0, x.Z)(function*(Xe, It, on) {
                                            try {
                                                "event" === Xe ? yield ha(F, V, X, It, on): "config" === Xe ? yield Ai(F, V, X, he, It, on): "consent" === Xe ? F("consent", "update", on) : F("set", It)
                                            } catch (gn) {
                                                kr.error(gn)
                                            }
                                        })).apply(this, arguments)
                                    }
                                    return function De(Xe, It, on) {
                                        return Ye.apply(this, arguments)
                                    }
                                }(Ye, F, V, X), {
                                    gtagCore: Ye,
                                    wrappedGtag: window[De]
                                }
                            }(Er, yc, jl, vc, "gtag");
                            rs = Ye, bc = Xe, wc = !0
                        }
                        return Er[he] = function id(F, V, X, he, De, Ye, Xe) {
                            return fa.apply(this, arguments)
                        }(F, yc, jl, V, bc, vc, X), new Vl(F)
                    }

                    function ui() {
                        return Fh.apply(this, arguments)
                    }

                    function Fh() {
                        return (Fh = (0, x.Z)(function*() {
                            if ((0, A.ru)() || !(0, A.zI)() || !(0, A.hl)()) return !1;
                            try {
                                return yield(0, A.eu)()
                            } catch {
                                return !1
                            }
                        })).apply(this, arguments)
                    }
                    const Ft = "@firebase/analytics";
                    ! function yi() {
                        (0, D._registerComponent)(new B.wA(ci, (V, {
                            options: X
                        }) => Cc(V.getProvider("app").getImmediate(), V.getProvider("installations-internal").getImmediate(), X), "PUBLIC")), (0, D._registerComponent)(new B.wA("analytics-internal", function F(V) {
                            try {
                                const X = V.getProvider(ci).getImmediate();
                                return {
                                    logEvent: (he, De, Ye) => function bs(F, V, X, he) {
                                        F = (0, A.m9)(F),
                                            function ul(F, V, X, he, De) {
                                                return Ra.apply(this, arguments)
                                            }(rs, Er[F.app.options.appId], V, X, he).catch(De => kr.error(De))
                                    }(X, he, De, Ye)
                                }
                            } catch (X) {
                                throw qi.create("interop-component-reg-failed", {
                                    reason: X
                                })
                            }
                        }, "PRIVATE")), (0, D.registerVersion)(Ft, "0.8.4"), (0, D.registerVersion)(Ft, "0.8.4", "esm2017")
                    }();
                    var Tr = H(4408),
                        Li = H(7565);
                    const Gn = new class Ri extends Li.v {}(class Us extends Tr.o {
                        constructor(V, X) {
                            super(V, X), this.scheduler = V, this.work = X
                        }
                        schedule(V, X = 0) {
                            return X > 0 ? super.schedule(V, X) : (this.delay = X, this.state = V, this.scheduler.flush(this), this)
                        }
                        execute(V, X) {
                            return X > 0 || this.closed ? super.execute(V, X) : this._execute(V, X)
                        }
                        requestAsyncId(V, X, he = 0) {
                            return null != he && he > 0 || null == he && this.delay > 0 ? super.requestAsyncId(V, X, he) : (V.flush(this), 0)
                        }
                    });
                    var Fa = H(4986),
                        Na = H(9751),
                        ya = H(8505),
                        du = H(5363),
                        Ir = H(9468);
                    const wt = new r.GfV("7.4.1"),
                        va = "__angularfire_symbol__analyticsIsSupportedValue",
                        os = "__angularfire_symbol__analyticsIsSupported",
                        Mc = "__angularfire_symbol__remoteConfigIsSupportedValue",
                        ei = "__angularfire_symbol__remoteConfigIsSupported",
                        To = "__angularfire_symbol__messagingIsSupportedValue",
                        uu = "__angularfire_symbol__messagingIsSupported";

                    function od(F, V, X) {
                        if (V) {
                            if (1 === V.length) return V[0];
                            const Ye = V.filter(Xe => Xe.app === X);
                            if (1 === Ye.length) return Ye[0]
                        }
                        return X.container.getProvider(F).getImmediate({
                            optional: !0
                        })
                    }
                    globalThis[os] || (globalThis[os] = ui().then(F => globalThis[va] = F).catch(() => globalThis[va] = !1)), globalThis[uu] || (globalThis[uu] = ou().then(F => globalThis[To] = F).catch(() => globalThis[To] = !1)), globalThis[ei] || (globalThis[ei] = Eh().then(F => globalThis[Mc] = F).catch(() => globalThis[Mc] = !1));
                    const xc = (F, V) => {
                        const X = V ? [V] : (0, y.C6)(),
                            he = [];
                        return X.forEach(De => {
                            De.container.getProvider(F).instances.forEach(Xe => {
                                he.includes(Xe) || he.push(Xe)
                            })
                        }), he
                    };

                    function Ki() {}
                    class Qi {
                        constructor(V, X = Gn) {
                            this.zone = V, this.delegate = X
                        }
                        now() {
                            return this.delegate.now()
                        }
                        schedule(V, X, he) {
                            const De = this.zone;
                            return this.delegate.schedule(function(Xe) {
                                De.runGuarded(() => {
                                    V.apply(this, [Xe])
                                })
                            }, X, he)
                        }
                    }
                    class Ha {
                        constructor(V) {
                            this.zone = V, this.task = null
                        }
                        call(V, X) {
                            const he = this.unscheduleTask.bind(this);
                            return this.task = this.zone.run(() => Zone.current.scheduleMacroTask("firebaseZoneBlock", Ki, {}, Ki, Ki)), X.pipe((0, ya.b)({
                                next: he,
                                complete: he,
                                error: he
                            })).subscribe(V).add(he)
                        }
                        unscheduleTask() {
                            setTimeout(() => {
                                null != this.task && "scheduled" === this.task.state && (this.task.invoke(), this.task = null)
                            }, 10)
                        }
                    }
                    let kc = (() => {
                        class F {
                            constructor(X) {
                                this.ngZone = X, this.outsideAngular = X.runOutsideAngular(() => new Qi(Zone.current)), this.insideAngular = X.run(() => new Qi(Zone.current, Fa.z)), globalThis.\u0275AngularFireScheduler || (globalThis.\u0275AngularFireScheduler = this)
                            }
                        }
                        return F.\u0275fac = function(X) {
                            return new(X || F)(r.LFG(r.R0b))
                        }, F.\u0275prov = r.Yz7({
                            token: F,
                            factory: F.\u0275fac,
                            providedIn: "root"
                        }), F
                    })();

                    function ws() {
                        const F = globalThis.\u0275AngularFireScheduler;
                        if (!F) throw new Error("Either AngularFireModule has not been provided in your AppModule (this can be done manually or implictly using\nprovideFirebaseApp) or you're calling an AngularFire method outside of an NgModule (which is not supported).");
                        return F
                    }

                    function zs(F) {
                        return ws().ngZone.runOutsideAngular(() => F())
                    }

                    function ss(F) {
                        return ws().ngZone.run(() => F())
                    }

                    function oo(F) {
                        return F.pipe((0, du.Q)(ws().outsideAngular))
                    }

                    function hu(F) {
                        return ws(),
                            function Sr(F) {
                                return function(X) {
                                    return (X = X.lift(new Ha(F.ngZone))).pipe((0, Ir.R)(F.outsideAngular), (0, du.Q)(F.insideAngular))
                                }
                            }(ws())(F)
                    }
                    const Cs = (F, V) => function() {
                            const he = arguments;
                            return V && setTimeout(() => {
                                "scheduled" === V.state && V.invoke()
                            }, 10), ss(() => F.apply(void 0, he))
                        },
                        sd = (F, V) => function() {
                            let X;
                            const he = arguments;
                            for (let Ye = 0; Ye < arguments.length; Ye++) "function" == typeof he[Ye] && (V && (X || (X = ss(() => Zone.current.scheduleMacroTask("firebaseZoneBlock", Ki, {}, Ki, Ki)))), he[Ye] = Cs(he[Ye], X));
                            const De = zs(() => F.apply(this, he));
                            if (!V) {
                                if (De instanceof Na.y) {
                                    const Ye = ws();
                                    return De.pipe((0, Ir.R)(Ye.outsideAngular), (0, du.Q)(Ye.insideAngular))
                                }
                                return ss(() => De)
                            }
                            return De instanceof Na.y ? De.pipe(hu) : De instanceof Promise ? ss(() => new Promise((Ye, Xe) => De.then(It => ss(() => Ye(It)), It => ss(() => Xe(It))))) : "function" == typeof De && X ? function() {
                                return setTimeout(() => {
                                    X && "scheduled" === X.state && X.invoke()
                                }, 10), De.apply(this, arguments)
                            } : ss(() => De)
                        }
                },
                8247: (Ce, me, H) => {
                        "use strict";
                        H.d(me, {
                            $: () => sa,
                            A: () => ce,
                            B: () => nt,
                            G: () => Dl,
                            H: () => Yo,
                            J: () => ia,
                            L: () => ve,
                            M: () => xd,
                            N: () => Uu,
                            P: () => Fa,
                            Q: () => Yi,
                            R: () => sp,
                            T: () => Bi,
                            U: () => il,
                            V: () => es,
                            W: () => ra,
                            X: () => zu,
                            Y: () => cc,
                            Z: () => xn,
                            _: () => nr,
                            a: () => Ia,
                            a0: () => Od,
                            a1: () => Hr,
                            a2: () => Kc,
                            a3: () => uc,
                            a4: () => Ih,
                            a5: () => Wu,
                            a6: () => xr,
                            a7: () => vr,
                            a8: () => pi,
                            a9: () => aa,
                            aA: () => ge,
                            aB: () => It,
                            aC: () => ss,
                            aD: () => zs,
                            aE: () => Qt,
                            aI: () => pa,
                            aL: () => rl,
                            aa: () => Ah,
                            ab: () => Fl,
                            ac: () => ru,
                            af: () => da,
                            ag: () => Zu,
                            ah: () => $u,
                            ak: () => ns,
                            al: () => pc,
                            an: () => mc,
                            ao: () => Xc,
                            ap: () => Je,
                            aq: () => et,
                            ar: () => Zt,
                            as: () => At,
                            at: () => zr,
                            au: () => Ws,
                            av: () => yn,
                            aw: () => it,
                            ax: () => Ee,
                            ay: () => Wi,
                            az: () => Pe,
                            b: () => qi,
                            c: () => ei,
                            d: () => Nh,
                            e: () => uu,
                            f: () => hu,
                            g: () => X,
                            h: () => sd,
                            i: () => js,
                            j: () => Ye,
                            k: () => am,
                            l: () => wi,
                            m: () => Tc,
                            n: () => wg,
                            o: () => $,
                            r: () => Tr,
                            s: () => _i,
                            u: () => Gn
                        });
                        var r = H(5861),
                            y = H(2090),
                            x = H(9681),
                            D = H(1877),
                            A = H(655),
                            B = H(4859);
                        const $ = {
                                FACEBOOK: "facebook.com",
                                GITHUB: "github.com",
                                GOOGLE: "google.com",
                                PASSWORD: "password",
                                PHONE: "phone",
                                TWITTER: "twitter.com"
                            },
                            ce = {
                                EMAIL_SIGNIN: "EMAIL_SIGNIN",
                                PASSWORD_RESET: "PASSWORD_RESET",
                                RECOVER_EMAIL: "RECOVER_EMAIL",
                                REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
                                VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
                                VERIFY_EMAIL: "VERIFY_EMAIL"
                            };
                        const nt = function fe() {
                                return {
                                    "admin-restricted-operation": "This operation is restricted to administrators only.",
                                    "argument-error": "",
                                    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
                                    "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
                                    "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
                                    "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
                                    "cordova-not-ready": "Cordova framework is not ready.",
                                    "cors-unsupported": "This browser is not supported.",
                                    "credential-already-in-use": "This credential is already associated with a different user account.",
                                    "custom-token-mismatch": "The custom token corresponds to a different audience.",
                                    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
                                    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
                                    "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
                                    "email-change-needs-verification": "Multi-factor users must always have a verified email.",
                                    "email-already-in-use": "The email address is already in use by another account.",
                                    "emulator-config-failed": 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
                                    "expired-action-code": "The action code has expired.",
                                    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
                                    "internal-error": "An internal AuthError has occurred.",
                                    "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
                                    "invalid-app-id": "The mobile app identifier is not registed for the current project.",
                                    "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
                                    "invalid-auth-event": "An internal AuthError has occurred.",
                                    "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
                                    "invalid-continue-uri": "The continue URL provided in the request is invalid.",
                                    "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
                                    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
                                    "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
                                    "invalid-email": "The email address is badly formatted.",
                                    "invalid-emulator-scheme": "Emulator URL must start with a valid scheme (http:// or https://).",
                                    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
                                    "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
                                    "invalid-credential": "The supplied auth credential is malformed or has expired.",
                                    "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
                                    "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
                                    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
                                    "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
                                    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
                                    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                                    "wrong-password": "The password is invalid or the user does not have a password.",
                                    "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
                                    "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
                                    "invalid-provider-id": "The specified provider ID is invalid.",
                                    "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
                                    "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
                                    "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
                                    "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
                                    "login-blocked": "Login blocked by user-provided method: {$originalMessage}",
                                    "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
                                    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
                                    "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
                                    "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
                                    "missing-continue-uri": "A continue URL must be provided in the request.",
                                    "missing-iframe-start": "An internal AuthError has occurred.",
                                    "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
                                    "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
                                    "missing-multi-factor-info": "No second factor identifier is provided.",
                                    "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
                                    "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
                                    "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
                                    "app-deleted": "This instance of FirebaseApp has been deleted.",
                                    "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
                                    "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
                                    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
                                    "network-request-failed": "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
                                    "no-auth-event": "An internal AuthError has occurred.",
                                    "no-such-provider": "User was not linked to an account with the given provider.",
                                    "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
                                    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
                                    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
                                    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
                                    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
                                    "provider-already-linked": "User can only be linked to one identity for the given provider.",
                                    "quota-exceeded": "The project's quota for this operation has been exceeded.",
                                    "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
                                    "redirect-operation-pending": "A redirect sign-in operation is already pending.",
                                    "rejected-credential": "The request contains malformed or mismatching credentials.",
                                    "second-factor-already-in-use": "The second factor is already enrolled on this account.",
                                    "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
                                    "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
                                    timeout: "The operation has timed out.",
                                    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
                                    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
                                    "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
                                    "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
                                    "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
                                    "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
                                    "unverified-email": "The operation requires a verified email.",
                                    "user-cancelled": "The user did not grant your application the permissions it requested.",
                                    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                                    "user-disabled": "The user account has been disabled by an administrator.",
                                    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
                                    "user-signed-out": "",
                                    "weak-password": "The password must be 6 characters long or more.",
                                    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled.",
                                    "already-initialized": "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."
                                }
                            },
                            Te = function qe() {
                                return {
                                    "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
                                }
                            },
                            xt = new y.LL("auth", "Firebase", {
                                "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
                            }),
                            ze = new D.Yd("@firebase/auth");

                        function Et(P, ...w) {
                            ze.logLevel <= D.in.ERROR && ze.error(`Auth (${x.SDK_VERSION}): ${P}`, ...w)
                        }

                        function At(P, ...w) {
                            throw kt(P, ...w)
                        }

                        function it(P, ...w) {
                            return kt(P, ...w)
                        }

                        function ot(P, w, C) {
                            const L = Object.assign(Object.assign({}, Te()), {
                                [w]: C
                            });
                            return new y.LL("auth", "Firebase", L).create(w, {
                                appName: P.name
                            })
                        }

                        function Ge(P, w, C) {
                            if (!(w instanceof C)) throw C.name !== w.constructor.name && At(P, "argument-error"), ot(P, "argument-error", `Type of ${w.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
                        }

                        function kt(P, ...w) {
                            if ("string" != typeof P) {
                                const C = w[0],
                                    L = [...w.slice(1)];
                                return L[0] && (L[0].appName = P.name), P._errorFactory.create(C, ...L)
                            }
                            return xt.create(P, ...w)
                        }

                        function Ee(P, w, ...C) {
                            if (!P) throw kt(w, ...C)
                        }

                        function Be(P) {
                            const w = "INTERNAL ASSERTION FAILED: " + P;
                            throw Et(w), new Error(w)
                        }

                        function Je(P, w) {
                            P || Be(w)
                        }
                        const ke = new Map;

                        function Pe(P) {
                            Je(P instanceof Function, "Expected a class definition");
                            let w = ke.get(P);
                            return w ? (Je(w instanceof P, "Instance stored in cache mismatched with class"), w) : (w = new P, ke.set(P, w), w)
                        }

                        function ft() {
                            var P;
                            return typeof self < "u" && (null === (P = self.location) || void 0 === P ? void 0 : P.href) || ""
                        }

                        function mt() {
                            return "http:" === qt() || "https:" === qt()
                        }

                        function qt() {
                            var P;
                            return typeof self < "u" && (null === (P = self.location) || void 0 === P ? void 0 : P.protocol) || null
                        }
                        class Mt {
                            constructor(w, C) {
                                this.shortDelay = w, this.longDelay = C, Je(C > w, "Short delay should be less than long delay!"), this.isMobile = (0, y.uI)() || (0, y.b$)()
                            }
                            get() {
                                return function Nn() {
                                    return !(typeof navigator < "u" && navigator && "onLine" in navigator && "boolean" == typeof navigator.onLine && (mt() || (0, y.ru)() || "connection" in navigator)) || navigator.onLine
                                }() ? this.isMobile ? this.longDelay : this.shortDelay : Math.min(5e3, this.shortDelay)
                            }
                        }

                        function ki(P, w) {
                            Je(P.emulator, "Emulator should always be set here");
                            const {
                                url: C
                            } = P.emulator;
                            return w ? `${C}${w.startsWith("/")?w.slice(1):w}` : C
                        }
                        class Oi {
                            static initialize(w, C, L) {
                                this.fetchImpl = w, C && (this.headersImpl = C), L && (this.responseImpl = L)
                            }
                            static fetch() {
                                return this.fetchImpl ? this.fetchImpl : typeof self < "u" && "fetch" in self ? self.fetch : void Be("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
                            }
                            static headers() {
                                return this.headersImpl ? this.headersImpl : typeof self < "u" && "Headers" in self ? self.Headers : void Be("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
                            }
                            static response() {
                                return this.responseImpl ? this.responseImpl : typeof self < "u" && "Response" in self ? self.Response : void Be("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
                            }
                        }
                        const Ot = {
                                CREDENTIAL_MISMATCH: "custom-token-mismatch",
                                MISSING_CUSTOM_TOKEN: "internal-error",
                                INVALID_IDENTIFIER: "invalid-email",
                                MISSING_CONTINUE_URI: "internal-error",
                                INVALID_PASSWORD: "wrong-password",
                                MISSING_PASSWORD: "internal-error",
                                EMAIL_EXISTS: "email-already-in-use",
                                PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                                INVALID_IDP_RESPONSE: "invalid-credential",
                                INVALID_PENDING_TOKEN: "invalid-credential",
                                FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                                MISSING_REQ_TYPE: "internal-error",
                                EMAIL_NOT_FOUND: "user-not-found",
                                RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                                EXPIRED_OOB_CODE: "expired-action-code",
                                INVALID_OOB_CODE: "invalid-action-code",
                                MISSING_OOB_CODE: "internal-error",
                                CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                                INVALID_ID_TOKEN: "invalid-user-token",
                                TOKEN_EXPIRED: "user-token-expired",
                                USER_NOT_FOUND: "user-token-expired",
                                TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                                INVALID_CODE: "invalid-verification-code",
                                INVALID_SESSION_INFO: "invalid-verification-id",
                                INVALID_TEMPORARY_PROOF: "invalid-credential",
                                MISSING_SESSION_INFO: "missing-verification-id",
                                SESSION_EXPIRED: "code-expired",
                                MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                                UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                                INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                                ADMIN_ONLY_OPERATION: "admin-restricted-operation",
                                INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
                                MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
                                MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
                                MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
                                SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
                                SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
                                BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error"
                            },
                            $n = new Mt(3e4, 6e4);

                        function Hn(P, w) {
                            return P.tenantId && !w.tenantId ? Object.assign(Object.assign({}, w), {
                                tenantId: P.tenantId
                            }) : w
                        }

                        function Dn(P, w, C, L) {
                            return Pr.apply(this, arguments)
                        }

                        function Pr() {
                            return (Pr = (0, r.Z)(function*(P, w, C, L, K = {}) {
                                return Fo(P, K, (0, r.Z)(function*() {
                                    let oe = {},
                                        Le = {};
                                    L && ("GET" === w ? Le = L : oe = {
                                        body: JSON.stringify(L)
                                    });
                                    const ct = (0, y.xO)(Object.assign({
                                            key: P.config.apiKey
                                        }, Le)).slice(1),
                                        Wt = yield P._getAdditionalHeaders();
                                    return Wt["Content-Type"] = "application/json", P.languageCode && (Wt["X-Firebase-Locale"] = P.languageCode), Oi.fetch()(ea(P, P.config.apiHost, C, ct), Object.assign({
                                        method: w,
                                        headers: Wt,
                                        referrerPolicy: "no-referrer"
                                    }, oe))
                                }))
                            })).apply(this, arguments)
                        }

                        function Fo(P, w, C) {
                            return No.apply(this, arguments)
                        }

                        function No() {
                            return (No = (0, r.Z)(function*(P, w, C) {
                                P._canInitEmulator = !1;
                                const L = Object.assign(Object.assign({}, Ot), w);
                                try {
                                    const K = new or(P),
                                        oe = yield Promise.race([C(), K.promise]);
                                    K.clearNetworkTimeout();
                                    const Le = yield oe.json();
                                    if ("needConfirmation" in Le) throw sr(P, "account-exists-with-different-credential", Le);
                                    if (oe.ok && !("errorMessage" in Le)) return Le; {
                                        const ct = oe.ok ? Le.errorMessage : Le.error.message,
                                            [Wt, ln] = ct.split(" : ");
                                        if ("FEDERATED_USER_ID_ALREADY_LINKED" === Wt) throw sr(P, "credential-already-in-use", Le);
                                        if ("EMAIL_EXISTS" === Wt) throw sr(P, "email-already-in-use", Le);
                                        if ("USER_DISABLED" === Wt) throw sr(P, "user-disabled", Le);
                                        const Kn = L[Wt] || Wt.toLowerCase().replace(/[_\s]+/g, "-");
                                        if (ln) throw ot(P, Kn, ln);
                                        At(P, Kn)
                                    }
                                } catch (K) {
                                    if (K instanceof y.ZR) throw K;
                                    At(P, "network-request-failed")
                                }
                            })).apply(this, arguments)
                        }

                        function tr(P, w, C, L) {
                            return ps.apply(this, arguments)
                        }

                        function ps() {
                            return (ps = (0, r.Z)(function*(P, w, C, L, K = {}) {
                                const oe = yield Dn(P, w, C, L, K);
                                return "mfaPendingCredential" in oe && At(P, "multi-factor-auth-required", {
                                    _serverResponse: oe
                                }), oe
                            })).apply(this, arguments)
                        }

                        function ea(P, w, C, L) {
                            const K = `${w}${C}?${L}`;
                            return P.config.emulator ? ki(P.config, K) : `${P.config.apiScheme}://${K}`
                        }
                        class or {
                            constructor(w) {
                                this.auth = w, this.timer = null, this.promise = new Promise((C, L) => {
                                    this.timer = setTimeout(() => L(it(this.auth, "network-request-failed")), $n.get())
                                })
                            }
                            clearNetworkTimeout() {
                                clearTimeout(this.timer)
                            }
                        }

                        function sr(P, w, C) {
                            const L = {
                                appName: P.name
                            };
                            C.email && (L.email = C.email), C.phoneNumber && (L.phoneNumber = C.phoneNumber);
                            const K = it(P, w, L);
                            return K.customData._tokenResponse = C, K
                        }

                        function Kr() {
                            return (Kr = (0, r.Z)(function*(P, w) {
                                return Dn(P, "POST", "/v1/accounts:delete", w)
                            })).apply(this, arguments)
                        }

                        function Ht(P, w) {
                            return hr.apply(this, arguments)
                        }

                        function hr() {
                            return (hr = (0, r.Z)(function*(P, w) {
                                return Dn(P, "POST", "/v1/accounts:update", w)
                            })).apply(this, arguments)
                        }

                        function Wn(P, w) {
                            return kn.apply(this, arguments)
                        }

                        function kn() {
                            return (kn = (0, r.Z)(function*(P, w) {
                                return Dn(P, "POST", "/v1/accounts:lookup", w)
                            })).apply(this, arguments)
                        }

                        function pr(P) {
                            if (P) try {
                                const w = new Date(Number(P));
                                if (!isNaN(w.getTime())) return w.toUTCString()
                            } catch {}
                        }

                        function Ei() {
                            return (Ei = (0, r.Z)(function*(P, w = !1) {
                                const C = (0, y.m9)(P),
                                    L = yield C.getIdToken(w), K = Bt(L);
                                Ee(K && K.exp && K.auth_time && K.iat, C.auth, "internal-error");
                                const oe = "object" == typeof K.firebase ? K.firebase : void 0,
                                    Le = oe ? .sign_in_provider;
                                return {
                                    claims: K,
                                    token: L,
                                    authTime: pr(Ti(K.auth_time)),
                                    issuedAtTime: pr(Ti(K.iat)),
                                    expirationTime: pr(Ti(K.exp)),
                                    signInProvider: Le || null,
                                    signInSecondFactor: oe ? .sign_in_second_factor || null
                                }
                            })).apply(this, arguments)
                        }

                        function Ti(P) {
                            return 1e3 * Number(P)
                        }

                        function Bt(P) {
                            var w;
                            const [C, L, K] = P.split(".");
                            if (void 0 === C || void 0 === L || void 0 === K) return Et("JWT malformed, contained fewer than 3 sections"), null;
                            try {
                                const oe = (0, y.tV)(L);
                                return oe ? JSON.parse(oe) : (Et("Failed to decode base64 JWT payload"), null)
                            } catch (oe) {
                                return Et("Caught error parsing JWT payload as JSON", null === (w = oe) || void 0 === w ? void 0 : w.toString()), null
                            }
                        }

                        function mn(P, w) {
                            return Br.apply(this, arguments)
                        }

                        function Br() {
                            return (Br = (0, r.Z)(function*(P, w, C = !1) {
                                if (C) return w;
                                try {
                                    return yield w
                                } catch (L) {
                                    throw L instanceof y.ZR && _r(L) && P.auth.currentUser === P && (yield P.auth.signOut()), L
                                }
                            })).apply(this, arguments)
                        }

                        function _r({
                            code: P
                        }) {
                            return "auth/user-disabled" === P || "auth/user-token-expired" === P
                        }
                        class Qr {
                            constructor(w) {
                                this.user = w, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
                            }
                            _start() {
                                this.isRunning || (this.isRunning = !0, this.schedule())
                            }
                            _stop() {
                                !this.isRunning || (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
                            }
                            getInterval(w) {
                                var C;
                                if (w) {
                                    const L = this.errorBackoff;
                                    return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), L
                                } {
                                    this.errorBackoff = 3e4;
                                    const K = (null !== (C = this.user.stsTokenManager.expirationTime) && void 0 !== C ? C : 0) - Date.now() - 3e5;
                                    return Math.max(0, K)
                                }
                            }
                            schedule(w = !1) {
                                var C = this;
                                if (!this.isRunning) return;
                                const L = this.getInterval(w);
                                this.timerId = setTimeout((0, r.Z)(function*() {
                                    yield C.iteration()
                                }), L)
                            }
                            iteration() {
                                var w = this;
                                return (0, r.Z)(function*() {
                                    var C;
                                    try {
                                        yield w.user.getIdToken(!0)
                                    } catch (L) {
                                        return void("auth/network-request-failed" === (null === (C = L) || void 0 === C ? void 0 : C.code) && w.schedule(!0))
                                    }
                                    w.schedule()
                                })()
                            }
                        }
                        class _n {
                            constructor(w, C) {
                                this.createdAt = w, this.lastLoginAt = C, this._initializeTime()
                            }
                            _initializeTime() {
                                this.lastSignInTime = pr(this.lastLoginAt), this.creationTime = pr(this.createdAt)
                            }
                            _copy(w) {
                                this.createdAt = w.createdAt, this.lastLoginAt = w.lastLoginAt, this._initializeTime()
                            }
                            toJSON() {
                                return {
                                    createdAt: this.createdAt,
                                    lastLoginAt: this.lastLoginAt
                                }
                            }
                        }

                        function Xr(P) {
                            return sn.apply(this, arguments)
                        }

                        function sn() {
                            return (sn = (0, r.Z)(function*(P) {
                                var w;
                                const C = P.auth,
                                    L = yield P.getIdToken(), K = yield mn(P, Wn(C, {
                                        idToken: L
                                    }));
                                Ee(K ? .users.length, C, "internal-error");
                                const oe = K.users[0];
                                P._notifyReloadListener(oe);
                                const Le = null !== (w = oe.providerUserInfo) && void 0 !== w && w.length ? Mn(oe.providerUserInfo) : [],
                                    ct = Cr(P.providerData, Le),
                                    Kn = !!P.isAnonymous && !(P.email && oe.passwordHash || ct ? .length),
                                    Di = {
                                        uid: oe.localId,
                                        displayName: oe.displayName || null,
                                        photoURL: oe.photoUrl || null,
                                        email: oe.email || null,
                                        emailVerified: oe.emailVerified || !1,
                                        phoneNumber: oe.phoneNumber || null,
                                        tenantId: oe.tenantId || null,
                                        providerData: ct,
                                        metadata: new _n(oe.createdAt, oe.lastLoginAt),
                                        isAnonymous: Kn
                                    };
                                Object.assign(P, Di)
                            })).apply(this, arguments)
                        }

                        function Vn() {
                            return (Vn = (0, r.Z)(function*(P) {
                                const w = (0, y.m9)(P);
                                yield Xr(w), yield w.auth._persistUserIfCurrent(w), w.auth._notifyListenersIfCurrent(w)
                            })).apply(this, arguments)
                        }

                        function Cr(P, w) {
                            return [...P.filter(L => !w.some(K => K.providerId === L.providerId)), ...w]
                        }

                        function Mn(P) {
                            return P.map(w => {
                                var {
                                    providerId: C
                                } = w, L = (0, A._T)(w, ["providerId"]);
                                return {
                                    providerId: C,
                                    uid: L.rawId || "",
                                    displayName: L.displayName || null,
                                    email: L.email || null,
                                    phoneNumber: L.phoneNumber || null,
                                    photoURL: L.photoUrl || null
                                }
                            })
                        }

                        function st() {
                            return (st = (0, r.Z)(function*(P, w) {
                                const C = yield Fo(P, {}, (0, r.Z)(function*() {
                                    const L = (0, y.xO)({
                                            grant_type: "refresh_token",
                                            refresh_token: w
                                        }).slice(1),
                                        {
                                            tokenApiHost: K,
                                            apiKey: oe
                                        } = P.config,
                                        Le = ea(P, K, "/v1/token", `key=${oe}`),
                                        ct = yield P._getAdditionalHeaders();
                                    return ct["Content-Type"] = "application/x-www-form-urlencoded", Oi.fetch()(Le, {
                                        method: "POST",
                                        headers: ct,
                                        body: L
                                    })
                                }));
                                return {
                                    accessToken: C.access_token,
                                    expiresIn: C.expires_in,
                                    refreshToken: C.refresh_token
                                }
                            })).apply(this, arguments)
                        }
                        class Nt {
                            constructor() {
                                this.refreshToken = null, this.accessToken = null, this.expirationTime = null
                            }
                            get isExpired() {
                                return !this.expirationTime || Date.now() > this.expirationTime - 3e4
                            }
                            updateFromServerResponse(w) {
                                Ee(w.idToken, "internal-error"), Ee(typeof w.idToken < "u", "internal-error"), Ee(typeof w.refreshToken < "u", "internal-error");
                                const C = "expiresIn" in w && typeof w.expiresIn < "u" ? Number(w.expiresIn) : function _t(P) {
                                    const w = Bt(P);
                                    return Ee(w, "internal-error"), Ee(typeof w.exp < "u", "internal-error"), Ee(typeof w.iat < "u", "internal-error"), Number(w.exp) - Number(w.iat)
                                }(w.idToken);
                                this.updateTokensAndExpiration(w.idToken, w.refreshToken, C)
                            }
                            getToken(w, C = !1) {
                                var L = this;
                                return (0, r.Z)(function*() {
                                    return Ee(!L.accessToken || L.refreshToken, w, "user-token-expired"), C || !L.accessToken || L.isExpired ? L.refreshToken ? (yield L.refresh(w, L.refreshToken), L.accessToken) : null : L.accessToken
                                })()
                            }
                            clearRefreshToken() {
                                this.refreshToken = null
                            }
                            refresh(w, C) {
                                var L = this;
                                return (0, r.Z)(function*() {
                                    const {
                                        accessToken: K,
                                        refreshToken: oe,
                                        expiresIn: Le
                                    } = yield function jt(P, w) {
                                        return st.apply(this, arguments)
                                    }(w, C);
                                    L.updateTokensAndExpiration(K, oe, Number(Le))
                                })()
                            }
                            updateTokensAndExpiration(w, C, L) {
                                this.refreshToken = C || null, this.accessToken = w || null, this.expirationTime = Date.now() + 1e3 * L
                            }
                            static fromJSON(w, C) {
                                const {
                                    refreshToken: L,
                                    accessToken: K,
                                    expirationTime: oe
                                } = C, Le = new Nt;
                                return L && (Ee("string" == typeof L, "internal-error", {
                                    appName: w
                                }), Le.refreshToken = L), K && (Ee("string" == typeof K, "internal-error", {
                                    appName: w
                                }), Le.accessToken = K), oe && (Ee("number" == typeof oe, "internal-error", {
                                    appName: w
                                }), Le.expirationTime = oe), Le
                            }
                            toJSON() {
                                return {
                                    refreshToken: this.refreshToken,
                                    accessToken: this.accessToken,
                                    expirationTime: this.expirationTime
                                }
                            }
                            _assign(w) {
                                this.accessToken = w.accessToken, this.refreshToken = w.refreshToken, this.expirationTime = w.expirationTime
                            }
                            _clone() {
                                return Object.assign(new Nt, this.toJSON())
                            }
                            _performRefresh() {
                                return Be("not implemented")
                            }
                        }

                        function cn(P, w) {
                            Ee("string" == typeof P || typeof P > "u", "internal-error", {
                                appName: w
                            })
                        }
                        class dn {
                            constructor(w) {
                                var {
                                    uid: C,
                                    auth: L,
                                    stsTokenManager: K
                                } = w, oe = (0, A._T)(w, ["uid", "auth", "stsTokenManager"]);
                                this.providerId = "firebase", this.proactiveRefresh = new Qr(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = C, this.auth = L, this.stsTokenManager = K, this.accessToken = K.accessToken, this.displayName = oe.displayName || null, this.email = oe.email || null, this.emailVerified = oe.emailVerified || !1, this.phoneNumber = oe.phoneNumber || null, this.photoURL = oe.photoURL || null, this.isAnonymous = oe.isAnonymous || !1, this.tenantId = oe.tenantId || null, this.providerData = oe.providerData ? [...oe.providerData] : [], this.metadata = new _n(oe.createdAt || void 0, oe.lastLoginAt || void 0)
                            }
                            getIdToken(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    const L = yield mn(C, C.stsTokenManager.getToken(C.auth, w));
                                    return Ee(L, C.auth, "internal-error"), C.accessToken !== L && (C.accessToken = L, yield C.auth._persistUserIfCurrent(C), C.auth._notifyListenersIfCurrent(C)), L
                                })()
                            }
                            getIdTokenResult(w) {
                                return function Bn(P) {
                                    return Ei.apply(this, arguments)
                                }(this, w)
                            }
                            reload() {
                                return function Mo(P) {
                                    return Vn.apply(this, arguments)
                                }(this)
                            }
                            _assign(w) {
                                this !== w && (Ee(this.uid === w.uid, this.auth, "internal-error"), this.displayName = w.displayName, this.photoURL = w.photoURL, this.email = w.email, this.emailVerified = w.emailVerified, this.phoneNumber = w.phoneNumber, this.isAnonymous = w.isAnonymous, this.tenantId = w.tenantId, this.providerData = w.providerData.map(C => Object.assign({}, C)), this.metadata._copy(w.metadata), this.stsTokenManager._assign(w.stsTokenManager))
                            }
                            _clone(w) {
                                return new dn(Object.assign(Object.assign({}, this), {
                                    auth: w,
                                    stsTokenManager: this.stsTokenManager._clone()
                                }))
                            }
                            _onReload(w) {
                                Ee(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = w, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
                            }
                            _notifyReloadListener(w) {
                                this.reloadListener ? this.reloadListener(w) : this.reloadUserInfo = w
                            }
                            _startProactiveRefresh() {
                                this.proactiveRefresh._start()
                            }
                            _stopProactiveRefresh() {
                                this.proactiveRefresh._stop()
                            }
                            _updateTokensIfNecessary(w, C = !1) {
                                var L = this;
                                return (0, r.Z)(function*() {
                                    let K = !1;
                                    w.idToken && w.idToken !== L.stsTokenManager.accessToken && (L.stsTokenManager.updateFromServerResponse(w), K = !0), C && (yield Xr(L)), yield L.auth._persistUserIfCurrent(L), K && L.auth._notifyListenersIfCurrent(L)
                                })()
                            }
                            delete() {
                                var w = this;
                                return (0, r.Z)(function*() {
                                    const C = yield w.getIdToken();
                                    return yield mn(w, function Ns(P, w) {
                                        return Kr.apply(this, arguments)
                                    }(w.auth, {
                                        idToken: C
                                    })), w.stsTokenManager.clearRefreshToken(), w.auth.signOut()
                                })()
                            }
                            toJSON() {
                                return Object.assign(Object.assign({
                                    uid: this.uid,
                                    email: this.email || void 0,
                                    emailVerified: this.emailVerified,
                                    displayName: this.displayName || void 0,
                                    isAnonymous: this.isAnonymous,
                                    photoURL: this.photoURL || void 0,
                                    phoneNumber: this.phoneNumber || void 0,
                                    tenantId: this.tenantId || void 0,
                                    providerData: this.providerData.map(w => Object.assign({}, w)),
                                    stsTokenManager: this.stsTokenManager.toJSON(),
                                    _redirectEventId: this._redirectEventId
                                }, this.metadata.toJSON()), {
                                    apiKey: this.auth.config.apiKey,
                                    appName: this.auth.name
                                })
                            }
                            get refreshToken() {
                                return this.stsTokenManager.refreshToken || ""
                            }
                            static _fromJSON(w, C) {
                                var L, K, oe, Le, ct, Wt, ln, Kn;
                                const Di = null !== (L = C.displayName) && void 0 !== L ? L : void 0,
                                    Ba = null !== (K = C.email) && void 0 !== K ? K : void 0,
                                    cr = null !== (oe = C.phoneNumber) && void 0 !== oe ? oe : void 0,
                                    Va = null !== (Le = C.photoURL) && void 0 !== Le ? Le : void 0,
                                    Hh = null !== (ct = C.tenantId) && void 0 !== ct ? ct : void 0,
                                    mp = null !== (Wt = C._redirectEventId) && void 0 !== Wt ? Wt : void 0,
                                    n_ = null !== (ln = C.createdAt) && void 0 !== ln ? ln : void 0,
                                    Do = null !== (Kn = C.lastLoginAt) && void 0 !== Kn ? Kn : void 0,
                                    {
                                        uid: cm,
                                        emailVerified: Qu,
                                        isAnonymous: cd,
                                        providerData: gp,
                                        stsTokenManager: _u
                                    } = C;
                                Ee(cm && _u, w, "internal-error");
                                const Cg = Nt.fromJSON(this.name, _u);
                                Ee("string" == typeof cm, w, "internal-error"), cn(Di, w.name), cn(Ba, w.name), Ee("boolean" == typeof Qu, w, "internal-error"), Ee("boolean" == typeof cd, w, "internal-error"), cn(cr, w.name), cn(Va, w.name), cn(Hh, w.name), cn(mp, w.name), cn(n_, w.name), cn(Do, w.name);
                                const Ci = new dn({
                                    uid: cm,
                                    auth: w,
                                    email: Ba,
                                    emailVerified: Qu,
                                    displayName: Di,
                                    isAnonymous: cd,
                                    photoURL: Va,
                                    phoneNumber: cr,
                                    tenantId: Hh,
                                    stsTokenManager: Cg,
                                    createdAt: n_,
                                    lastLoginAt: Do
                                });
                                return gp && Array.isArray(gp) && (Ci.providerData = gp.map(Sc => Object.assign({}, Sc))), mp && (Ci._redirectEventId = mp), Ci
                            }
                            static _fromIdTokenResponse(w, C, L = !1) {
                                return (0, r.Z)(function*() {
                                    const K = new Nt;
                                    K.updateFromServerResponse(C);
                                    const oe = new dn({
                                        uid: C.localId,
                                        auth: w,
                                        stsTokenManager: K,
                                        isAnonymous: L
                                    });
                                    return yield Xr(oe), oe
                                })()
                            }
                        }
                        const ve = (() => {
                            class P {
                                constructor() {
                                    this.type = "NONE", this.storage = {}
                                }
                                _isAvailable() {
                                    return (0, r.Z)(function*() {
                                        return !0
                                    })()
                                }
                                _set(C, L) {
                                    var K = this;
                                    return (0, r.Z)(function*() {
                                        K.storage[C] = L
                                    })()
                                }
                                _get(C) {
                                    var L = this;
                                    return (0, r.Z)(function*() {
                                        const K = L.storage[C];
                                        return void 0 === K ? null : K
                                    })()
                                }
                                _remove(C) {
                                    var L = this;
                                    return (0, r.Z)(function*() {
                                        delete L.storage[C]
                                    })()
                                }
                                _addListener(C, L) {}
                                _removeListener(C, L) {}
                            }
                            return P.type = "NONE", P
                        })();

                        function ge(P, w, C) {
                            return `firebase:${P}:${w}:${C}`
                        }
                        class xe {
                            constructor(w, C, L) {
                                this.persistence = w, this.auth = C, this.userKey = L;
                                const {
                                    config: K,
                                    name: oe
                                } = this.auth;
                                this.fullUserKey = ge(this.userKey, K.apiKey, oe), this.fullPersistenceKey = ge("persistence", K.apiKey, oe), this.boundEventHandler = C._onStorageEvent.bind(C), this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
                            }
                            setCurrentUser(w) {
                                return this.persistence._set(this.fullUserKey, w.toJSON())
                            }
                            getCurrentUser() {
                                var w = this;
                                return (0, r.Z)(function*() {
                                    const C = yield w.persistence._get(w.fullUserKey);
                                    return C ? dn._fromJSON(w.auth, C) : null
                                })()
                            }
                            removeCurrentUser() {
                                return this.persistence._remove(this.fullUserKey)
                            }
                            savePersistenceForRedirect() {
                                return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
                            }
                            setPersistence(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    if (C.persistence === w) return;
                                    const L = yield C.getCurrentUser();
                                    return yield C.removeCurrentUser(), C.persistence = w, L ? C.setCurrentUser(L) : void 0
                                })()
                            }
                            delete() {
                                this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
                            }
                            static create(w, C, L = "authUser") {
                                return (0, r.Z)(function*() {
                                    if (!C.length) return new xe(Pe(ve), w, L);
                                    const K = (yield Promise.all(C.map(function() {
                                        var ln = (0, r.Z)(function*(Kn) {
                                            if (yield Kn._isAvailable()) return Kn
                                        });
                                        return function(Kn) {
                                            return ln.apply(this, arguments)
                                        }
                                    }()))).filter(ln => ln);
                                    let oe = K[0] || Pe(ve);
                                    const Le = ge(L, w.config.apiKey, w.name);
                                    let ct = null;
                                    for (const ln of C) try {
                                        const Kn = yield ln._get(Le);
                                        if (Kn) {
                                            const Di = dn._fromJSON(w, Kn);
                                            ln !== oe && (ct = Di), oe = ln;
                                            break
                                        }
                                    } catch {}
                                    const Wt = K.filter(ln => ln._shouldAllowMigration);
                                    return oe._shouldAllowMigration && Wt.length ? (oe = Wt[0], ct && (yield oe._set(Le, ct.toJSON())), yield Promise.all(C.map(function() {
                                        var ln = (0, r.Z)(function*(Kn) {
                                            if (Kn !== oe) try {
                                                yield Kn._remove(Le)
                                            } catch {}
                                        });
                                        return function(Kn) {
                                            return ln.apply(this, arguments)
                                        }
                                    }())), new xe(oe, w, L)) : new xe(oe, w, L)
                                })()
                            }
                        }

                        function pe(P) {
                            const w = P.toLowerCase();
                            if (w.includes("opera/") || w.includes("opr/") || w.includes("opios/")) return "Opera";
                            if (pt(w)) return "IEMobile";
                            if (w.includes("msie") || w.includes("trident/")) return "IE";
                            if (w.includes("edge/")) return "Edge";
                            if (ee(w)) return "Firefox";
                            if (w.includes("silk/")) return "Silk";
                            if (Lt(w)) return "Blackberry";
                            if (at(w)) return "Webos";
                            if (de(w)) return "Safari";
                            if ((w.includes("chrome/") || ye(w)) && !w.includes("edge/")) return "Chrome";
                            if (Zt(w)) return "Android"; {
                                const L = P.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);
                                if (2 === L ? .length) return L[1]
                            }
                            return "Other"
                        }

                        function ee(P = (0, y.z$)()) {
                            return /firefox\//i.test(P)
                        }

                        function de(P = (0, y.z$)()) {
                            const w = P.toLowerCase();
                            return w.includes("safari/") && !w.includes("chrome/") && !w.includes("crios/") && !w.includes("android")
                        }

                        function ye(P = (0, y.z$)()) {
                            return /crios\//i.test(P)
                        }

                        function pt(P = (0, y.z$)()) {
                            return /iemobile/i.test(P)
                        }

                        function Zt(P = (0, y.z$)()) {
                            return /android/i.test(P)
                        }

                        function Lt(P = (0, y.z$)()) {
                            return /blackberry/i.test(P)
                        }

                        function at(P = (0, y.z$)()) {
                            return /webos/i.test(P)
                        }

                        function et(P = (0, y.z$)()) {
                            return /iphone|ipad|ipod/i.test(P) || /macintosh/i.test(P) && /mobile/i.test(P)
                        }

                        function yn(P = (0, y.z$)()) {
                            return /(iPad|iPhone|iPod).*OS 7_\d/i.test(P) || /(iPad|iPhone|iPod).*OS 8_\d/i.test(P)
                        }

                        function ii(P = (0, y.z$)()) {
                            return et(P) || Zt(P) || at(P) || Lt(P) || /windows phone/i.test(P) || pt(P)
                        }

                        function An(P, w = []) {
                            let C;
                            switch (P) {
                                case "Browser":
                                    C = pe((0, y.z$)());
                                    break;
                                case "Worker":
                                    C = `${pe((0,y.z$)())}-${P}`;
                                    break;
                                default:
                                    C = P
                            }
                            const L = w.length ? w.join(",") : "FirebaseCore-web";
                            return `${C}/JsCore/${x.SDK_VERSION}/${L}`
                        }
                        class eo {
                            constructor(w) {
                                this.auth = w, this.queue = []
                            }
                            pushCallback(w, C) {
                                const L = oe => new Promise((Le, ct) => {
                                    try {
                                        Le(w(oe))
                                    } catch (Wt) {
                                        ct(Wt)
                                    }
                                });
                                L.onAbort = C, this.queue.push(L);
                                const K = this.queue.length - 1;
                                return () => {
                                    this.queue[K] = () => Promise.resolve()
                                }
                            }
                            runMiddleware(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    var L;
                                    if (C.auth.currentUser === w) return;
                                    const K = [];
                                    try {
                                        for (const oe of C.queue) yield oe(w), oe.onAbort && K.push(oe.onAbort)
                                    } catch (oe) {
                                        K.reverse();
                                        for (const Le of K) try {
                                            Le()
                                        } catch {}
                                        throw C.auth._errorFactory.create("login-blocked", {
                                            originalMessage: null === (L = oe) || void 0 === L ? void 0 : L.message
                                        })
                                    }
                                })()
                            }
                        }
                        class Ho {
                            constructor(w, C, L) {
                                this.app = w, this.heartbeatServiceProvider = C, this.config = L, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new Sl(this), this.idTokenSubscription = new Sl(this), this.beforeStateQueue = new eo(this), this.redirectUser = null, this.isProactiveRefreshEnabled = !1, this._canInitEmulator = !0, this._isInitialized = !1, this._deleted = !1, this._initializationPromise = null, this._popupRedirectResolver = null, this._errorFactory = xt, this.lastNotifiedUid = void 0, this.languageCode = null, this.tenantId = null, this.settings = {
                                    appVerificationDisabledForTesting: !1
                                }, this.frameworks = [], this.name = w.name, this.clientVersion = L.sdkClientVersion
                            }
                            _initializeWithPersistence(w, C) {
                                var L = this;
                                return C && (this._popupRedirectResolver = Pe(C)), this._initializationPromise = this.queue((0, r.Z)(function*() {
                                    var K, oe;
                                    if (!L._deleted && (L.persistenceManager = yield xe.create(L, w), !L._deleted)) {
                                        if (null !== (K = L._popupRedirectResolver) && void 0 !== K && K._shouldInitProactively) try {
                                            yield L._popupRedirectResolver._initialize(L)
                                        } catch {}
                                        yield L.initializeCurrentUser(C), L.lastNotifiedUid = (null === (oe = L.currentUser) || void 0 === oe ? void 0 : oe.uid) || null, !L._deleted && (L._isInitialized = !0)
                                    }
                                })), this._initializationPromise
                            }
                            _onStorageEvent() {
                                var w = this;
                                return (0, r.Z)(function*() {
                                    if (w._deleted) return;
                                    const C = yield w.assertedPersistence.getCurrentUser();
                                    if (w.currentUser || C) {
                                        if (w.currentUser && C && w.currentUser.uid === C.uid) return w._currentUser._assign(C), void(yield w.currentUser.getIdToken());
                                        yield w._updateCurrentUser(C, !0)
                                    }
                                })()
                            }
                            initializeCurrentUser(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    var L;
                                    const K = yield C.assertedPersistence.getCurrentUser();
                                    let oe = K,
                                        Le = !1;
                                    if (w && C.config.authDomain) {
                                        yield C.getOrInitRedirectPersistenceManager();
                                        const ct = null === (L = C.redirectUser) || void 0 === L ? void 0 : L._redirectEventId,
                                            Wt = oe ? ._redirectEventId,
                                            ln = yield C.tryRedirectSignIn(w);
                                        (!ct || ct === Wt) && ln ? .user && (oe = ln.user, Le = !0)
                                    }
                                    if (!oe) return C.directlySetCurrentUser(null);
                                    if (!oe._redirectEventId) {
                                        if (Le) try {
                                            yield C.beforeStateQueue.runMiddleware(oe)
                                        } catch (ct) {
                                            oe = K, C._popupRedirectResolver._overrideRedirectResult(C, () => Promise.reject(ct))
                                        }
                                        return oe ? C.reloadAndSetCurrentUserOrClear(oe) : C.directlySetCurrentUser(null)
                                    }
                                    return Ee(C._popupRedirectResolver, C, "argument-error"), yield C.getOrInitRedirectPersistenceManager(), C.redirectUser && C.redirectUser._redirectEventId === oe._redirectEventId ? C.directlySetCurrentUser(oe) : C.reloadAndSetCurrentUserOrClear(oe)
                                })()
                            }
                            tryRedirectSignIn(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    let L = null;
                                    try {
                                        L = yield C._popupRedirectResolver._completeRedirectFn(C, w, !0)
                                    } catch {
                                        yield C._setRedirectUser(null)
                                    }
                                    return L
                                })()
                            }
                            reloadAndSetCurrentUserOrClear(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    var L;
                                    try {
                                        yield Xr(w)
                                    } catch (K) {
                                        if ("auth/network-request-failed" !== (null === (L = K) || void 0 === L ? void 0 : L.code)) return C.directlySetCurrentUser(null)
                                    }
                                    return C.directlySetCurrentUser(w)
                                })()
                            }
                            useDeviceLanguage() {
                                this.languageCode = function Sn() {
                                    if (typeof navigator > "u") return null;
                                    const P = navigator;
                                    return P.languages && P.languages[0] || P.language || null
                                }()
                            }
                            _delete() {
                                var w = this;
                                return (0, r.Z)(function*() {
                                    w._deleted = !0
                                })()
                            }
                            updateCurrentUser(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    const L = w ? (0, y.m9)(w) : null;
                                    return L && Ee(L.auth.config.apiKey === C.config.apiKey, C, "invalid-user-token"), C._updateCurrentUser(L && L._clone(C))
                                })()
                            }
                            _updateCurrentUser(w, C = !1) {
                                var L = this;
                                return (0, r.Z)(function*() {
                                    if (!L._deleted) return w && Ee(L.tenantId === w.tenantId, L, "tenant-id-mismatch"), C || (yield L.beforeStateQueue.runMiddleware(w)), L.queue((0, r.Z)(function*() {
                                        yield L.directlySetCurrentUser(w), L.notifyAuthListeners()
                                    }))
                                })()
                            }
                            signOut() {
                                var w = this;
                                return (0, r.Z)(function*() {
                                    return yield w.beforeStateQueue.runMiddleware(null), (w.redirectPersistenceManager || w._popupRedirectResolver) && (yield w._setRedirectUser(null)), w._updateCurrentUser(null, !0)
                                })()
                            }
                            setPersistence(w) {
                                var C = this;
                                return this.queue((0, r.Z)(function*() {
                                    yield C.assertedPersistence.setPersistence(Pe(w))
                                }))
                            }
                            _getPersistence() {
                                return this.assertedPersistence.persistence.type
                            }
                            _updateErrorMap(w) {
                                this._errorFactory = new y.LL("auth", "Firebase", w())
                            }
                            onAuthStateChanged(w, C, L) {
                                return this.registerStateListener(this.authStateSubscription, w, C, L)
                            }
                            beforeAuthStateChanged(w, C) {
                                return this.beforeStateQueue.pushCallback(w, C)
                            }
                            onIdTokenChanged(w, C, L) {
                                return this.registerStateListener(this.idTokenSubscription, w, C, L)
                            }
                            toJSON() {
                                var w;
                                return {
                                    apiKey: this.config.apiKey,
                                    authDomain: this.config.authDomain,
                                    appName: this.name,
                                    currentUser: null === (w = this._currentUser) || void 0 === w ? void 0 : w.toJSON()
                                }
                            }
                            _setRedirectUser(w, C) {
                                var L = this;
                                return (0, r.Z)(function*() {
                                    const K = yield L.getOrInitRedirectPersistenceManager(C);
                                    return null === w ? K.removeCurrentUser() : K.setCurrentUser(w)
                                })()
                            }
                            getOrInitRedirectPersistenceManager(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    if (!C.redirectPersistenceManager) {
                                        const L = w && Pe(w) || C._popupRedirectResolver;
                                        Ee(L, C, "argument-error"), C.redirectPersistenceManager = yield xe.create(C, [Pe(L._redirectPersistence)], "redirectUser"), C.redirectUser = yield C.redirectPersistenceManager.getCurrentUser()
                                    }
                                    return C.redirectPersistenceManager
                                })()
                            }
                            _redirectUserForId(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    var L, K;
                                    return C._isInitialized && (yield C.queue((0, r.Z)(function*() {}))), (null === (L = C._currentUser) || void 0 === L ? void 0 : L._redirectEventId) === w ? C._currentUser : (null === (K = C.redirectUser) || void 0 === K ? void 0 : K._redirectEventId) === w ? C.redirectUser : null
                                })()
                            }
                            _persistUserIfCurrent(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    if (w === C.currentUser) return C.queue((0, r.Z)(function*() {
                                        return C.directlySetCurrentUser(w)
                                    }))
                                })()
                            }
                            _notifyListenersIfCurrent(w) {
                                w === this.currentUser && this.notifyAuthListeners()
                            }
                            _key() {
                                return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
                            }
                            _startProactiveRefresh() {
                                this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
                            }
                            _stopProactiveRefresh() {
                                this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
                            }
                            get _currentUser() {
                                return this.currentUser
                            }
                            notifyAuthListeners() {
                                var w, C;
                                if (!this._isInitialized) return;
                                this.idTokenSubscription.next(this.currentUser);
                                const L = null !== (C = null === (w = this.currentUser) || void 0 === w ? void 0 : w.uid) && void 0 !== C ? C : null;
                                this.lastNotifiedUid !== L && (this.lastNotifiedUid = L, this.authStateSubscription.next(this.currentUser))
                            }
                            registerStateListener(w, C, L, K) {
                                if (this._deleted) return () => {};
                                const oe = "function" == typeof C ? C : C.next.bind(C),
                                    Le = this._isInitialized ? Promise.resolve() : this._initializationPromise;
                                return Ee(Le, this, "internal-error"), Le.then(() => oe(this.currentUser)), "function" == typeof C ? w.addObserver(C, L, K) : w.addObserver(C)
                            }
                            directlySetCurrentUser(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    C.currentUser && C.currentUser !== w && C._currentUser._stopProactiveRefresh(), w && C.isProactiveRefreshEnabled && w._startProactiveRefresh(), C.currentUser = w, w ? yield C.assertedPersistence.setCurrentUser(w): yield C.assertedPersistence.removeCurrentUser()
                                })()
                            }
                            queue(w) {
                                return this.operations = this.operations.then(w, w), this.operations
                            }
                            get assertedPersistence() {
                                return Ee(this.persistenceManager, this, "internal-error"), this.persistenceManager
                            }
                            _logFramework(w) {
                                !w || this.frameworks.includes(w) || (this.frameworks.push(w), this.frameworks.sort(), this.clientVersion = An(this.config.clientPlatform, this._getFrameworks()))
                            }
                            _getFrameworks() {
                                return this.frameworks
                            }
                            _getAdditionalHeaders() {
                                var w = this;
                                return (0, r.Z)(function*() {
                                    var C;
                                    const L = {
                                        "X-Client-Version": w.clientVersion
                                    };
                                    w.app.options.appId && (L["X-Firebase-gmpid"] = w.app.options.appId);
                                    const K = yield null === (C = w.heartbeatServiceProvider.getImmediate({
                                        optional: !0
                                    })) || void 0 === C ? void 0 : C.getHeartbeatsHeader();
                                    return K && (L["X-Firebase-Client"] = K), L
                                })()
                            }
                        }

                        function Qt(P) {
                            return (0, y.m9)(P)
                        }
                        class Sl {
                            constructor(w) {
                                this.auth = w, this.observer = null, this.addObserver = (0, y.ne)(C => this.observer = C)
                            }
                            get next() {
                                return Ee(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
                            }
                        }

                        function Dl(P, w, C) {
                            const L = Qt(P);
                            Ee(L._canInitEmulator, L, "emulator-config-failed"), Ee(/^https?:\/\//.test(w), L, "invalid-emulator-scheme");
                            const K = !!C ? .disableWarnings,
                                oe = Pl(w),
                                {
                                    host: Le,
                                    port: ct
                                } = function Ii(P) {
                                    const w = Pl(P),
                                        C = /(\/\/)?([^?#/]+)/.exec(P.substr(w.length));
                                    if (!C) return {
                                        host: "",
                                        port: null
                                    };
                                    const L = C[2].split("@").pop() || "",
                                        K = /^(\[[^\]]+\])(:|$)/.exec(L);
                                    if (K) {
                                        const oe = K[1];
                                        return {
                                            host: oe,
                                            port: $i(L.substr(oe.length + 1))
                                        }
                                    } {
                                        const [oe, Le] = L.split(":");
                                        return {
                                            host: oe,
                                            port: $i(Le)
                                        }
                                    }
                                }(w);
                            L.config.emulator = {
                                url: `${oe}//${Le}${null===ct?"":`:${ct}`}/`
                            }, L.settings.appVerificationDisabledForTesting = !0, L.emulatorConfig = Object.freeze({
                                host: Le,
                                port: ct,
                                protocol: oe.replace(":", ""),
                                options: Object.freeze({
                                    disableWarnings: K
                                })
                            }), K || function El() {
                                function P() {
                                    const w = document.createElement("p"),
                                        C = w.style;
                                    w.innerText = "Running in emulator mode. Do not use with production credentials.", C.position = "fixed", C.width = "100%", C.backgroundColor = "#ffffff", C.border = ".1em solid #000000", C.color = "#b50000", C.bottom = "0px", C.left = "0px", C.margin = "0px", C.zIndex = "10000", C.textAlign = "center", w.classList.add("firebase-emulator-warning"), document.body.appendChild(w)
                                }
                                typeof console < "u" && "function" == typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), typeof window < "u" && typeof document < "u" && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", P) : P())
                            }()
                        }

                        function Pl(P) {
                            const w = P.indexOf(":");
                            return w < 0 ? "" : P.substr(0, w + 1)
                        }

                        function $i(P) {
                            if (!P) return null;
                            const w = Number(P);
                            return isNaN(w) ? null : w
                        }
                        class Yo {
                            constructor(w, C) {
                                this.providerId = w, this.signInMethod = C
                            }
                            toJSON() {
                                return Be("not implemented")
                            }
                            _getIdTokenResponse(w) {
                                return Be("not implemented")
                            }
                            _linkToIdToken(w, C) {
                                return Be("not implemented")
                            }
                            _getReauthenticationResolver(w) {
                                return Be("not implemented")
                            }
                        }

                        function Xo(P, w) {
                            return Mr.apply(this, arguments)
                        }

                        function Mr() {
                            return (Mr = (0, r.Z)(function*(P, w) {
                                return Dn(P, "POST", "/v1/accounts:resetPassword", Hn(P, w))
                            })).apply(this, arguments)
                        }

                        function zc(P, w) {
                            return Yn.apply(this, arguments)
                        }

                        function Yn() {
                            return (Yn = (0, r.Z)(function*(P, w) {
                                return Dn(P, "POST", "/v1/accounts:update", w)
                            })).apply(this, arguments)
                        }

                        function Sh(P, w) {
                            return Wc.apply(this, arguments)
                        }

                        function Wc() {
                            return (Wc = (0, r.Z)(function*(P, w) {
                                return Dn(P, "POST", "/v1/accounts:update", Hn(P, w))
                            })).apply(this, arguments)
                        }

                        function el() {
                            return (el = (0, r.Z)(function*(P, w) {
                                return tr(P, "POST", "/v1/accounts:signInWithPassword", Hn(P, w))
                            })).apply(this, arguments)
                        }

                        function Xn(P, w) {
                            return tl.apply(this, arguments)
                        }

                        function tl() {
                            return (tl = (0, r.Z)(function*(P, w) {
                                return Dn(P, "POST", "/v1/accounts:sendOobCode", Hn(P, w))
                            })).apply(this, arguments)
                        }

                        function ta(P, w) {
                            return Xt.apply(this, arguments)
                        }

                        function Xt() {
                            return (Xt = (0, r.Z)(function*(P, w) {
                                return Xn(P, w)
                            })).apply(this, arguments)
                        }

                        function Bu(P, w) {
                            return ar.apply(this, arguments)
                        }

                        function ar() {
                            return (ar = (0, r.Z)(function*(P, w) {
                                return Xn(P, w)
                            })).apply(this, arguments)
                        }

                        function ho(P, w) {
                            return na.apply(this, arguments)
                        }

                        function na() {
                            return (na = (0, r.Z)(function*(P, w) {
                                return Xn(P, w)
                            })).apply(this, arguments)
                        }

                        function rc(P, w) {
                            return Ys.apply(this, arguments)
                        }

                        function Ys() {
                            return (Ys = (0, r.Z)(function*(P, w) {
                                return Xn(P, w)
                            })).apply(this, arguments)
                        }

                        function oc() {
                            return (oc = (0, r.Z)(function*(P, w) {
                                return tr(P, "POST", "/v1/accounts:signInWithEmailLink", Hn(P, w))
                            })).apply(this, arguments)
                        }

                        function po() {
                            return (po = (0, r.Z)(function*(P, w) {
                                return tr(P, "POST", "/v1/accounts:signInWithEmailLink", Hn(P, w))
                            })).apply(this, arguments)
                        }
                        class Il extends Yo {
                            constructor(w, C, L, K = null) {
                                super("password", L), this._email = w, this._password = C, this._tenantId = K
                            }
                            static _fromEmailAndPassword(w, C) {
                                return new Il(w, C, "password")
                            }
                            static _fromEmailAndCode(w, C, L = null) {
                                return new Il(w, C, "emailLink", L)
                            }
                            toJSON() {
                                return {
                                    email: this._email,
                                    password: this._password,
                                    signInMethod: this.signInMethod,
                                    tenantId: this._tenantId
                                }
                            }
                            static fromJSON(w) {
                                const C = "string" == typeof w ? JSON.parse(w) : w;
                                if (C ? .email && C ? .password) {
                                    if ("password" === C.signInMethod) return this._fromEmailAndPassword(C.email, C.password);
                                    if ("emailLink" === C.signInMethod) return this._fromEmailAndCode(C.email, C.password, C.tenantId)
                                }
                                return null
                            }
                            _getIdTokenResponse(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    switch (C.signInMethod) {
                                        case "password":
                                            return function Gc(P, w) {
                                                return el.apply(this, arguments)
                                            }(w, {
                                                returnSecureToken: !0,
                                                email: C._email,
                                                password: C._password
                                            });
                                        case "emailLink":
                                            return function to(P, w) {
                                                return oc.apply(this, arguments)
                                            }(w, {
                                                email: C._email,
                                                oobCode: C._password
                                            });
                                        default:
                                            At(w, "internal-error")
                                    }
                                })()
                            }
                            _linkToIdToken(w, C) {
                                var L = this;
                                return (0, r.Z)(function*() {
                                    switch (L.signInMethod) {
                                        case "password":
                                            return zc(w, {
                                                idToken: C,
                                                returnSecureToken: !0,
                                                email: L._email,
                                                password: L._password
                                            });
                                        case "emailLink":
                                            return function Md(P, w) {
                                                return po.apply(this, arguments)
                                            }(w, {
                                                idToken: C,
                                                email: L._email,
                                                oobCode: L._password
                                            });
                                        default:
                                            At(w, "internal-error")
                                    }
                                })()
                            }
                            _getReauthenticationResolver(w) {
                                return this._getIdTokenResponse(w)
                            }
                        }

                        function Ta(P, w) {
                            return no.apply(this, arguments)
                        }

                        function no() {
                            return (no = (0, r.Z)(function*(P, w) {
                                return tr(P, "POST", "/v1/accounts:signInWithIdp", Hn(P, w))
                            })).apply(this, arguments)
                        }
                        class ia extends Yo {
                            constructor() {
                                super(...arguments), this.pendingToken = null
                            }
                            static _fromParams(w) {
                                const C = new ia(w.providerId, w.signInMethod);
                                return w.idToken || w.accessToken ? (w.idToken && (C.idToken = w.idToken), w.accessToken && (C.accessToken = w.accessToken), w.nonce && !w.pendingToken && (C.nonce = w.nonce), w.pendingToken && (C.pendingToken = w.pendingToken)) : w.oauthToken && w.oauthTokenSecret ? (C.accessToken = w.oauthToken, C.secret = w.oauthTokenSecret) : At("argument-error"), C
                            }
                            toJSON() {
                                return {
                                    idToken: this.idToken,
                                    accessToken: this.accessToken,
                                    secret: this.secret,
                                    nonce: this.nonce,
                                    pendingToken: this.pendingToken,
                                    providerId: this.providerId,
                                    signInMethod: this.signInMethod
                                }
                            }
                            static fromJSON(w) {
                                const C = "string" == typeof w ? JSON.parse(w) : w,
                                    {
                                        providerId: L,
                                        signInMethod: K
                                    } = C,
                                    oe = (0, A._T)(C, ["providerId", "signInMethod"]);
                                if (!L || !K) return null;
                                const Le = new ia(L, K);
                                return Le.idToken = oe.idToken || void 0, Le.accessToken = oe.accessToken || void 0, Le.secret = oe.secret, Le.nonce = oe.nonce, Le.pendingToken = oe.pendingToken || null, Le
                            }
                            _getIdTokenResponse(w) {
                                return Ta(w, this.buildRequest())
                            }
                            _linkToIdToken(w, C) {
                                const L = this.buildRequest();
                                return L.idToken = C, Ta(w, L)
                            }
                            _getReauthenticationResolver(w) {
                                const C = this.buildRequest();
                                return C.autoCreate = !1, Ta(w, C)
                            }
                            buildRequest() {
                                const w = {
                                    requestUri: "http://localhost",
                                    returnSecureToken: !0
                                };
                                if (this.pendingToken) w.pendingToken = this.pendingToken;
                                else {
                                    const C = {};
                                    this.idToken && (C.id_token = this.idToken), this.accessToken && (C.access_token = this.accessToken), this.secret && (C.oauth_token_secret = this.secret), C.providerId = this.providerId, this.nonce && !this.pendingToken && (C.nonce = this.nonce), w.postBody = (0, y.xO)(C)
                                }
                                return w
                            }
                        }

                        function ip(P, w) {
                            return eu.apply(this, arguments)
                        }

                        function eu() {
                            return (eu = (0, r.Z)(function*(P, w) {
                                return Dn(P, "POST", "/v1/accounts:sendVerificationCode", Hn(P, w))
                            })).apply(this, arguments)
                        }

                        function nl() {
                            return (nl = (0, r.Z)(function*(P, w) {
                                return tr(P, "POST", "/v1/accounts:signInWithPhoneNumber", Hn(P, w))
                            })).apply(this, arguments)
                        }

                        function tu() {
                            return (tu = (0, r.Z)(function*(P, w) {
                                const C = yield tr(P, "POST", "/v1/accounts:signInWithPhoneNumber", Hn(P, w));
                                if (C.temporaryProof) throw sr(P, "account-exists-with-different-credential", C);
                                return C
                            })).apply(this, arguments)
                        }
                        const rp = {
                            USER_NOT_FOUND: "user-not-found"
                        };

                        function nu() {
                            return (nu = (0, r.Z)(function*(P, w) {
                                return tr(P, "POST", "/v1/accounts:signInWithPhoneNumber", Hn(P, Object.assign(Object.assign({}, w), {
                                    operation: "REAUTH"
                                })), rp)
                            })).apply(this, arguments)
                        }
                        class sc extends Yo {
                            constructor(w) {
                                super("phone", "phone"), this.params = w
                            }
                            static _fromVerification(w, C) {
                                return new sc({
                                    verificationId: w,
                                    verificationCode: C
                                })
                            }
                            static _fromTokenResponse(w, C) {
                                return new sc({
                                    phoneNumber: w,
                                    temporaryProof: C
                                })
                            }
                            _getIdTokenResponse(w) {
                                return function Ph(P, w) {
                                    return nl.apply(this, arguments)
                                }(w, this._makeVerificationRequest())
                            }
                            _linkToIdToken(w, C) {
                                return function Al(P, w) {
                                    return tu.apply(this, arguments)
                                }(w, Object.assign({
                                    idToken: C
                                }, this._makeVerificationRequest()))
                            }
                            _getReauthenticationResolver(w) {
                                return function op(P, w) {
                                    return nu.apply(this, arguments)
                                }(w, this._makeVerificationRequest())
                            }
                            _makeVerificationRequest() {
                                const {
                                    temporaryProof: w,
                                    phoneNumber: C,
                                    verificationId: L,
                                    verificationCode: K
                                } = this.params;
                                return w && C ? {
                                    temporaryProof: w,
                                    phoneNumber: C
                                } : {
                                    sessionInfo: L,
                                    code: K
                                }
                            }
                            toJSON() {
                                const w = {
                                    providerId: this.providerId
                                };
                                return this.params.phoneNumber && (w.phoneNumber = this.params.phoneNumber), this.params.temporaryProof && (w.temporaryProof = this.params.temporaryProof), this.params.verificationCode && (w.verificationCode = this.params.verificationCode), this.params.verificationId && (w.verificationId = this.params.verificationId), w
                            }
                            static fromJSON(w) {
                                "string" == typeof w && (w = JSON.parse(w));
                                const {
                                    verificationId: C,
                                    verificationCode: L,
                                    phoneNumber: K,
                                    temporaryProof: oe
                                } = w;
                                return L || C || K || oe ? new sc({
                                    verificationId: C,
                                    verificationCode: L,
                                    phoneNumber: K,
                                    temporaryProof: oe
                                }) : null
                            }
                        }
                        class ac {
                            constructor(w) {
                                var C, L, K, oe, Le, ct;
                                const Wt = (0, y.zd)((0, y.pd)(w)),
                                    ln = null !== (C = Wt.apiKey) && void 0 !== C ? C : null,
                                    Kn = null !== (L = Wt.oobCode) && void 0 !== L ? L : null,
                                    Di = function Vu(P) {
                                        switch (P) {
                                            case "recoverEmail":
                                                return "RECOVER_EMAIL";
                                            case "resetPassword":
                                                return "PASSWORD_RESET";
                                            case "signIn":
                                                return "EMAIL_SIGNIN";
                                            case "verifyEmail":
                                                return "VERIFY_EMAIL";
                                            case "verifyAndChangeEmail":
                                                return "VERIFY_AND_CHANGE_EMAIL";
                                            case "revertSecondFactorAddition":
                                                return "REVERT_SECOND_FACTOR_ADDITION";
                                            default:
                                                return null
                                        }
                                    }(null !== (K = Wt.mode) && void 0 !== K ? K : null);
                                Ee(ln && Kn && Di, "argument-error"), this.apiKey = ln, this.operation = Di, this.code = Kn, this.continueUrl = null !== (oe = Wt.continueUrl) && void 0 !== oe ? oe : null, this.languageCode = null !== (Le = Wt.languageCode) && void 0 !== Le ? Le : null, this.tenantId = null !== (ct = Wt.tenantId) && void 0 !== ct ? ct : null
                            }
                            static parseLink(w) {
                                const C = function ju(P) {
                                    const w = (0, y.zd)((0, y.pd)(P)).link,
                                        C = w ? (0, y.zd)((0, y.pd)(w)).deep_link_id : null,
                                        L = (0, y.zd)((0, y.pd)(P)).deep_link_id;
                                    return (L ? (0, y.zd)((0, y.pd)(L)).link : null) || L || C || w || P
                                }(w);
                                try {
                                    return new ac(C)
                                } catch {
                                    return null
                                }
                            }
                        }
                        let xd = (() => {
                            class P {
                                constructor() {
                                    this.providerId = P.PROVIDER_ID
                                }
                                static credential(C, L) {
                                    return Il._fromEmailAndPassword(C, L)
                                }
                                static credentialWithLink(C, L) {
                                    const K = ac.parseLink(L);
                                    return Ee(K, "argument-error"), Il._fromEmailAndCode(C, K.code, K.tenantId)
                                }
                            }
                            return P.PROVIDER_ID = "password", P.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", P.EMAIL_LINK_SIGN_IN_METHOD = "emailLink", P
                        })();
                        class mo {
                            constructor(w) {
                                this.providerId = w, this.defaultLanguageCode = null, this.customParameters = {}
                            }
                            setDefaultLanguage(w) {
                                this.defaultLanguageCode = w
                            }
                            setCustomParameters(w) {
                                return this.customParameters = w, this
                            }
                            getCustomParameters() {
                                return this.customParameters
                            }
                        }
                        class lc extends mo {
                            constructor() {
                                super(...arguments), this.scopes = []
                            }
                            addScope(w) {
                                return this.scopes.includes(w) || this.scopes.push(w), this
                            }
                            getScopes() {
                                return [...this.scopes]
                            }
                        }
                        class il extends lc {
                            static credentialFromJSON(w) {
                                const C = "string" == typeof w ? JSON.parse(w) : w;
                                return Ee("providerId" in C && "signInMethod" in C, "argument-error"), ia._fromParams(C)
                            }
                            credential(w) {
                                return this._credential(Object.assign(Object.assign({}, w), {
                                    nonce: w.rawNonce
                                }))
                            }
                            _credential(w) {
                                return Ee(w.idToken || w.accessToken, "argument-error"), ia._fromParams(Object.assign(Object.assign({}, w), {
                                    providerId: this.providerId,
                                    signInMethod: this.providerId
                                }))
                            }
                            static credentialFromResult(w) {
                                return il.oauthCredentialFromTaggedObject(w)
                            }
                            static credentialFromError(w) {
                                return il.oauthCredentialFromTaggedObject(w.customData || {})
                            }
                            static oauthCredentialFromTaggedObject({
                                _tokenResponse: w
                            }) {
                                if (!w) return null;
                                const {
                                    oauthIdToken: C,
                                    oauthAccessToken: L,
                                    oauthTokenSecret: K,
                                    pendingToken: oe,
                                    nonce: Le,
                                    providerId: ct
                                } = w;
                                if (!L && !K && !C && !oe || !ct) return null;
                                try {
                                    return new il(ct)._credential({
                                        idToken: C,
                                        accessToken: L,
                                        nonce: Le,
                                        pendingToken: oe
                                    })
                                } catch {
                                    return null
                                }
                            }
                        }
                        let Uu = (() => {
                                class P extends lc {
                                    constructor() {
                                        super("facebook.com")
                                    }
                                    static credential(C) {
                                        return ia._fromParams({
                                            providerId: P.PROVIDER_ID,
                                            signInMethod: P.FACEBOOK_SIGN_IN_METHOD,
                                            accessToken: C
                                        })
                                    }
                                    static credentialFromResult(C) {
                                        return P.credentialFromTaggedObject(C)
                                    }
                                    static credentialFromError(C) {
                                        return P.credentialFromTaggedObject(C.customData || {})
                                    }
                                    static credentialFromTaggedObject({
                                        _tokenResponse: C
                                    }) {
                                        if (!C || !("oauthAccessToken" in C) || !C.oauthAccessToken) return null;
                                        try {
                                            return P.credential(C.oauthAccessToken)
                                        } catch {
                                            return null
                                        }
                                    }
                                }
                                return P.FACEBOOK_SIGN_IN_METHOD = "facebook.com", P.PROVIDER_ID = "facebook.com", P
                            })(),
                            Yi = (() => {
                                class P extends lc {
                                    constructor() {
                                        super("google.com"), this.addScope("profile")
                                    }
                                    static credential(C, L) {
                                        return ia._fromParams({
                                            providerId: P.PROVIDER_ID,
                                            signInMethod: P.GOOGLE_SIGN_IN_METHOD,
                                            idToken: C,
                                            accessToken: L
                                        })
                                    }
                                    static credentialFromResult(C) {
                                        return P.credentialFromTaggedObject(C)
                                    }
                                    static credentialFromError(C) {
                                        return P.credentialFromTaggedObject(C.customData || {})
                                    }
                                    static credentialFromTaggedObject({
                                        _tokenResponse: C
                                    }) {
                                        if (!C) return null;
                                        const {
                                            oauthIdToken: L,
                                            oauthAccessToken: K
                                        } = C;
                                        if (!L && !K) return null;
                                        try {
                                            return P.credential(L, K)
                                        } catch {
                                            return null
                                        }
                                    }
                                }
                                return P.GOOGLE_SIGN_IN_METHOD = "google.com", P.PROVIDER_ID = "google.com", P
                            })(),
                            Bi = (() => {
                                class P extends lc {
                                    constructor() {
                                        super("github.com")
                                    }
                                    static credential(C) {
                                        return ia._fromParams({
                                            providerId: P.PROVIDER_ID,
                                            signInMethod: P.GITHUB_SIGN_IN_METHOD,
                                            accessToken: C
                                        })
                                    }
                                    static credentialFromResult(C) {
                                        return P.credentialFromTaggedObject(C)
                                    }
                                    static credentialFromError(C) {
                                        return P.credentialFromTaggedObject(C.customData || {})
                                    }
                                    static credentialFromTaggedObject({
                                        _tokenResponse: C
                                    }) {
                                        if (!C || !("oauthAccessToken" in C) || !C.oauthAccessToken) return null;
                                        try {
                                            return P.credential(C.oauthAccessToken)
                                        } catch {
                                            return null
                                        }
                                    }
                                }
                                return P.GITHUB_SIGN_IN_METHOD = "github.com", P.PROVIDER_ID = "github.com", P
                            })();
                        class rl extends Yo {
                            constructor(w, C) {
                                super(w, w), this.pendingToken = C
                            }
                            _getIdTokenResponse(w) {
                                return Ta(w, this.buildRequest())
                            }
                            _linkToIdToken(w, C) {
                                const L = this.buildRequest();
                                return L.idToken = C, Ta(w, L)
                            }
                            _getReauthenticationResolver(w) {
                                const C = this.buildRequest();
                                return C.autoCreate = !1, Ta(w, C)
                            }
                            toJSON() {
                                return {
                                    signInMethod: this.signInMethod,
                                    providerId: this.providerId,
                                    pendingToken: this.pendingToken
                                }
                            }
                            static fromJSON(w) {
                                const C = "string" == typeof w ? JSON.parse(w) : w,
                                    {
                                        providerId: L,
                                        signInMethod: K,
                                        pendingToken: oe
                                    } = C;
                                return L && K && oe && L === K ? new rl(L, oe) : null
                            }
                            static _create(w, C) {
                                return new rl(w, C)
                            }
                            buildRequest() {
                                return {
                                    requestUri: "http://localhost",
                                    returnSecureToken: !0,
                                    pendingToken: this.pendingToken
                                }
                            }
                        }
                        class es extends mo {
                            constructor(w) {
                                Ee(w.startsWith("saml."), "argument-error"), super(w)
                            }
                            static credentialFromResult(w) {
                                return es.samlCredentialFromTaggedObject(w)
                            }
                            static credentialFromError(w) {
                                return es.samlCredentialFromTaggedObject(w.customData || {})
                            }
                            static credentialFromJSON(w) {
                                const C = rl.fromJSON(w);
                                return Ee(C, "argument-error"), C
                            }
                            static samlCredentialFromTaggedObject({
                                _tokenResponse: w
                            }) {
                                if (!w) return null;
                                const {
                                    pendingToken: C,
                                    providerId: L
                                } = w;
                                if (!C || !L) return null;
                                try {
                                    return rl._create(L, C)
                                } catch {
                                    return null
                                }
                            }
                        }
                        let ra = (() => {
                            class P extends lc {
                                constructor() {
                                    super("twitter.com")
                                }
                                static credential(C, L) {
                                    return ia._fromParams({
                                        providerId: P.PROVIDER_ID,
                                        signInMethod: P.TWITTER_SIGN_IN_METHOD,
                                        oauthToken: C,
                                        oauthTokenSecret: L
                                    })
                                }
                                static credentialFromResult(C) {
                                    return P.credentialFromTaggedObject(C)
                                }
                                static credentialFromError(C) {
                                    return P.credentialFromTaggedObject(C.customData || {})
                                }
                                static credentialFromTaggedObject({
                                    _tokenResponse: C
                                }) {
                                    if (!C) return null;
                                    const {
                                        oauthAccessToken: L,
                                        oauthTokenSecret: K
                                    } = C;
                                    if (!L || !K) return null;
                                    try {
                                        return P.credential(L, K)
                                    } catch {
                                        return null
                                    }
                                }
                            }
                            return P.TWITTER_SIGN_IN_METHOD = "twitter.com", P.PROVIDER_ID = "twitter.com", P
                        })();

                        function ts(P, w) {
                            return ol.apply(this, arguments)
                        }

                        function ol() {
                            return (ol = (0, r.Z)(function*(P, w) {
                                return tr(P, "POST", "/v1/accounts:signUp", Hn(P, w))
                            })).apply(this, arguments)
                        }
                        class Vr {
                            constructor(w) {
                                this.user = w.user, this.providerId = w.providerId, this._tokenResponse = w._tokenResponse, this.operationType = w.operationType
                            }
                            static _fromIdTokenResponse(w, C, L, K = !1) {
                                return (0, r.Z)(function*() {
                                    const oe = yield dn._fromIdTokenResponse(w, L, K), Le = yr(L);
                                    return new Vr({
                                        user: oe,
                                        providerId: Le,
                                        _tokenResponse: L,
                                        operationType: C
                                    })
                                })()
                            }
                            static _forOperation(w, C, L) {
                                return (0, r.Z)(function*() {
                                    yield w._updateTokensIfNecessary(L, !0);
                                    const K = yr(L);
                                    return new Vr({
                                        user: w,
                                        providerId: K,
                                        _tokenResponse: L,
                                        operationType: C
                                    })
                                })()
                            }
                        }

                        function yr(P) {
                            return P.providerId ? P.providerId : "phoneNumber" in P ? "phone" : null
                        }

                        function zu(P) {
                            return Si.apply(this, arguments)
                        }

                        function Si() {
                            return (Si = (0, r.Z)(function*(P) {
                                var w;
                                const C = Qt(P);
                                if (yield C._initializationPromise, null !== (w = C.currentUser) && void 0 !== w && w.isAnonymous) return new Vr({
                                    user: C.currentUser,
                                    providerId: null,
                                    operationType: "signIn"
                                });
                                const L = yield ts(C, {
                                    returnSecureToken: !0
                                }), K = yield Vr._fromIdTokenResponse(C, "signIn", L, !0);
                                return yield C._updateCurrentUser(K.user), K
                            })).apply(this, arguments)
                        }
                        class zi extends y.ZR {
                            constructor(w, C, L, K) {
                                var oe;
                                super(C.code, C.message), this.operationType = L, this.user = K, Object.setPrototypeOf(this, zi.prototype), this.customData = {
                                    appName: w.name,
                                    tenantId: null !== (oe = w.tenantId) && void 0 !== oe ? oe : void 0,
                                    _serverResponse: C.customData._serverResponse,
                                    operationType: L
                                }
                            }
                            static _fromErrorAndOperation(w, C, L, K) {
                                return new zi(w, C, L, K)
                            }
                        }

                        function sl(P, w, C, L) {
                            return ("reauthenticate" === w ? C._getReauthenticationResolver(P) : C._getIdTokenResponse(P)).catch(oe => {
                                throw "auth/multi-factor-auth-required" === oe.code ? zi._fromErrorAndOperation(P, oe, w, L) : oe
                            })
                        }

                        function ms(P) {
                            return new Set(P.map(({
                                providerId: w
                            }) => w).filter(w => !!w))
                        }

                        function ns(P, w) {
                            return io.apply(this, arguments)
                        }

                        function io() {
                            return (io = (0, r.Z)(function*(P, w) {
                                const C = (0, y.m9)(P);
                                yield jr(!0, C, w);
                                const {
                                    providerUserInfo: L
                                } = yield Ht(C.auth, {
                                    idToken: yield C.getIdToken(), deleteProvider: [w]
                                }), K = ms(L || []);
                                return C.providerData = C.providerData.filter(oe => K.has(oe.providerId)), K.has("phone") || (C.phoneNumber = null), yield C.auth._persistUserIfCurrent(C), C
                            })).apply(this, arguments)
                        }

                        function $c(P, w) {
                            return Bs.apply(this, arguments)
                        }

                        function Bs() {
                            return (Bs = (0, r.Z)(function*(P, w, C = !1) {
                                const L = yield mn(P, w._linkToIdToken(P.auth, yield P.getIdToken()), C);
                                return Vr._forOperation(P, "link", L)
                            })).apply(this, arguments)
                        }

                        function jr(P, w, C) {
                            return si.apply(this, arguments)
                        }

                        function si() {
                            return (si = (0, r.Z)(function*(P, w, C) {
                                yield Xr(w);
                                const K = !1 === P ? "provider-already-linked" : "no-such-provider";
                                Ee(ms(w.providerData).has(C) === P, w.auth, K)
                            })).apply(this, arguments)
                        }

                        function xo(P, w) {
                            return go.apply(this, arguments)
                        }

                        function go() {
                            return (go = (0, r.Z)(function*(P, w, C = !1) {
                                var L;
                                const {
                                    auth: K
                                } = P, oe = "reauthenticate";
                                try {
                                    const Le = yield mn(P, sl(K, oe, w, P), C);
                                    Ee(Le.idToken, K, "internal-error");
                                    const ct = Bt(Le.idToken);
                                    Ee(ct, K, "internal-error");
                                    const {
                                        sub: Wt
                                    } = ct;
                                    return Ee(P.uid === Wt, K, "user-mismatch"), Vr._forOperation(P, oe, Le)
                                } catch (Le) {
                                    throw "auth/user-not-found" === (null === (L = Le) || void 0 === L ? void 0 : L.code) && At(K, "user-mismatch"), Le
                                }
                            })).apply(this, arguments)
                        }

                        function Bo(P, w) {
                            return Vo.apply(this, arguments)
                        }

                        function Vo() {
                            return (Vo = (0, r.Z)(function*(P, w, C = !1) {
                                const L = "signIn",
                                    K = yield sl(P, L, w), oe = yield Vr._fromIdTokenResponse(P, L, K);
                                return C || (yield P._updateCurrentUser(oe.user)), oe
                            })).apply(this, arguments)
                        }

                        function cc(P, w) {
                            return Vi.apply(this, arguments)
                        }

                        function Vi() {
                            return (Vi = (0, r.Z)(function*(P, w) {
                                return Bo(Qt(P), w)
                            })).apply(this, arguments)
                        }

                        function xn(P, w) {
                            return oa.apply(this, arguments)
                        }

                        function oa() {
                            return (oa = (0, r.Z)(function*(P, w) {
                                const C = (0, y.m9)(P);
                                return yield jr(!1, C, w.providerId), $c(C, w)
                            })).apply(this, arguments)
                        }

                        function nr(P, w) {
                            return gs.apply(this, arguments)
                        }

                        function gs() {
                            return (gs = (0, r.Z)(function*(P, w) {
                                return xo((0, y.m9)(P), w)
                            })).apply(this, arguments)
                        }

                        function kd(P, w) {
                            return qc.apply(this, arguments)
                        }

                        function qc() {
                            return (qc = (0, r.Z)(function*(P, w) {
                                return tr(P, "POST", "/v1/accounts:signInWithCustomToken", Hn(P, w))
                            })).apply(this, arguments)
                        }

                        function sa(P, w) {
                            return Jc.apply(this, arguments)
                        }

                        function Jc() {
                            return (Jc = (0, r.Z)(function*(P, w) {
                                const C = Qt(P),
                                    L = yield kd(C, {
                                        token: w,
                                        returnSecureToken: !0
                                    }), K = yield Vr._fromIdTokenResponse(C, "signIn", L);
                                return yield C._updateCurrentUser(K.user), K
                            })).apply(this, arguments)
                        }
                        class dc {
                            constructor(w, C) {
                                this.factorId = w, this.uid = C.mfaEnrollmentId, this.enrollmentTime = new Date(C.enrolledAt).toUTCString(), this.displayName = C.displayName
                            }
                            static _fromServerResponse(w, C) {
                                return "phoneInfo" in C ? ht._fromServerResponse(w, C) : At(w, "internal-error")
                            }
                        }
                        class ht extends dc {
                            constructor(w) {
                                super("phone", w), this.phoneNumber = w.phoneInfo
                            }
                            static _fromServerResponse(w, C) {
                                return new ht(C)
                            }
                        }

                        function qn(P, w, C) {
                            var L;
                            Ee((null === (L = C.url) || void 0 === L ? void 0 : L.length) > 0, P, "invalid-continue-uri"), Ee(typeof C.dynamicLinkDomain > "u" || C.dynamicLinkDomain.length > 0, P, "invalid-dynamic-link-domain"), w.continueUrl = C.url, w.dynamicLinkDomain = C.dynamicLinkDomain, w.canHandleCodeInApp = C.handleCodeInApp, C.iOS && (Ee(C.iOS.bundleId.length > 0, P, "missing-ios-bundle-id"), w.iOSBundleId = C.iOS.bundleId), C.android && (Ee(C.android.packageName.length > 0, P, "missing-android-pkg-name"), w.androidInstallApp = C.android.installApp, w.androidMinimumVersionCode = C.android.minimumVersion, w.androidPackageName = C.android.packageName)
                        }

                        function Od(P, w, C) {
                            return fs.apply(this, arguments)
                        }

                        function fs() {
                            return (fs = (0, r.Z)(function*(P, w, C) {
                                const L = (0, y.m9)(P),
                                    K = {
                                        requestType: "PASSWORD_RESET",
                                        email: w
                                    };
                                C && qn(L, K, C), yield Bu(L, K)
                            })).apply(this, arguments)
                        }

                        function Hr(P, w, C) {
                            return _s.apply(this, arguments)
                        }

                        function _s() {
                            return (_s = (0, r.Z)(function*(P, w, C) {
                                yield Xo((0, y.m9)(P), {
                                    oobCode: w,
                                    newPassword: C
                                })
                            })).apply(this, arguments)
                        }

                        function Kc(P, w) {
                            return Ur.apply(this, arguments)
                        }

                        function Ur() {
                            return (Ur = (0, r.Z)(function*(P, w) {
                                yield Sh((0, y.m9)(P), {
                                    oobCode: w
                                })
                            })).apply(this, arguments)
                        }

                        function uc(P, w) {
                            return Da.apply(this, arguments)
                        }

                        function Da() {
                            return (Da = (0, r.Z)(function*(P, w) {
                                const C = (0, y.m9)(P),
                                    L = yield Xo(C, {
                                        oobCode: w
                                    }), K = L.requestType;
                                switch (Ee(K, C, "internal-error"), K) {
                                    case "EMAIL_SIGNIN":
                                        break;
                                    case "VERIFY_AND_CHANGE_EMAIL":
                                        Ee(L.newEmail, C, "internal-error");
                                        break;
                                    case "REVERT_SECOND_FACTOR_ADDITION":
                                        Ee(L.mfaInfo, C, "internal-error");
                                    default:
                                        Ee(L.email, C, "internal-error")
                                }
                                let oe = null;
                                return L.mfaInfo && (oe = dc._fromServerResponse(Qt(C), L.mfaInfo)), {
                                    data: {
                                        email: ("VERIFY_AND_CHANGE_EMAIL" === L.requestType ? L.newEmail : L.email) || null,
                                        previousEmail: ("VERIFY_AND_CHANGE_EMAIL" === L.requestType ? L.email : L.newEmail) || null,
                                        multiFactorInfo: oe
                                    },
                                    operation: K
                                }
                            })).apply(this, arguments)
                        }

                        function Ih(P, w) {
                            return Ll.apply(this, arguments)
                        }

                        function Ll() {
                            return (Ll = (0, r.Z)(function*(P, w) {
                                const {
                                    data: C
                                } = yield uc((0, y.m9)(P), w);
                                return C.email
                            })).apply(this, arguments)
                        }

                        function Wu(P, w, C) {
                            return Rl.apply(this, arguments)
                        }

                        function Rl() {
                            return (Rl = (0, r.Z)(function*(P, w, C) {
                                const L = Qt(P),
                                    K = yield ts(L, {
                                        returnSecureToken: !0,
                                        email: w,
                                        password: C
                                    }), oe = yield Vr._fromIdTokenResponse(L, "signIn", K);
                                return yield L._updateCurrentUser(oe.user), oe
                            })).apply(this, arguments)
                        }

                        function xr(P, w, C) {
                            return cc((0, y.m9)(P), xd.credential(w, C))
                        }

                        function vr(P, w, C) {
                            return al.apply(this, arguments)
                        }

                        function al() {
                            return (al = (0, r.Z)(function*(P, w, C) {
                                const L = (0, y.m9)(P),
                                    K = {
                                        requestType: "EMAIL_SIGNIN",
                                        email: w
                                    };
                                Ee(C.handleCodeInApp, L, "argument-error"), C && qn(L, K, C), yield ho(L, K)
                            })).apply(this, arguments)
                        }

                        function pi(P, w) {
                            return "EMAIL_SIGNIN" === ac.parseLink(w) ? .operation
                        }

                        function aa(P, w, C) {
                            return iu.apply(this, arguments)
                        }

                        function iu() {
                            return (iu = (0, r.Z)(function*(P, w, C) {
                                const L = (0, y.m9)(P),
                                    K = xd.credentialWithLink(w, C || ft());
                                return Ee(K._tenantId === (L.tenantId || null), L, "tenant-id-mismatch"), cc(L, K)
                            })).apply(this, arguments)
                        }

                        function Td(P, w) {
                            return Gu.apply(this, arguments)
                        }

                        function Gu() {
                            return (Gu = (0, r.Z)(function*(P, w) {
                                return Dn(P, "POST", "/v1/accounts:createAuthUri", Hn(P, w))
                            })).apply(this, arguments)
                        }

                        function Ah(P, w) {
                            return hc.apply(this, arguments)
                        }

                        function hc() {
                            return (hc = (0, r.Z)(function*(P, w) {
                                const L = {
                                        identifier: w,
                                        continueUri: mt() ? ft() : "http://localhost"
                                    },
                                    {
                                        signinMethods: K
                                    } = yield Td((0, y.m9)(P), L);
                                return K || []
                            })).apply(this, arguments)
                        }

                        function Fl(P, w) {
                            return la.apply(this, arguments)
                        }

                        function la() {
                            return (la = (0, r.Z)(function*(P, w) {
                                const C = (0, y.m9)(P),
                                    K = {
                                        requestType: "VERIFY_EMAIL",
                                        idToken: yield P.getIdToken()
                                    };
                                w && qn(C.auth, K, w);
                                const {
                                    email: oe
                                } = yield ta(C.auth, K);
                                oe !== P.email && (yield P.reload())
                            })).apply(this, arguments)
                        }

                        function ru(P, w, C) {
                            return Qc.apply(this, arguments)
                        }

                        function Qc() {
                            return (Qc = (0, r.Z)(function*(P, w, C) {
                                const L = (0, y.m9)(P),
                                    oe = {
                                        requestType: "VERIFY_AND_CHANGE_EMAIL",
                                        idToken: yield P.getIdToken(), newEmail: w
                                    };
                                C && qn(L.auth, oe, C);
                                const {
                                    email: Le
                                } = yield rc(L.auth, oe);
                                Le !== P.email && (yield P.reload())
                            })).apply(this, arguments)
                        }

                        function Nl(P, w) {
                            return ca.apply(this, arguments)
                        }

                        function ca() {
                            return (ca = (0, r.Z)(function*(P, w) {
                                return Dn(P, "POST", "/v1/accounts:update", w)
                            })).apply(this, arguments)
                        }

                        function da(P, w) {
                            return ll.apply(this, arguments)
                        }

                        function ll() {
                            return (ll = (0, r.Z)(function*(P, {
                                displayName: w,
                                photoURL: C
                            }) {
                                if (void 0 === w && void 0 === C) return;
                                const L = (0, y.m9)(P),
                                    oe = {
                                        idToken: yield L.getIdToken(), displayName: w, photoUrl: C, returnSecureToken: !0
                                    },
                                    Le = yield mn(L, Nl(L.auth, oe));
                                L.displayName = Le.displayName || null, L.photoURL = Le.photoUrl || null;
                                const ct = L.providerData.find(({
                                    providerId: Wt
                                }) => "password" === Wt);
                                ct && (ct.displayName = L.displayName, ct.photoURL = L.photoURL), yield L._updateTokensIfNecessary(Le)
                            })).apply(this, arguments)
                        }

                        function Zu(P, w) {
                            return ua((0, y.m9)(P), w, null)
                        }

                        function $u(P, w) {
                            return ua((0, y.m9)(P), null, w)
                        }

                        function ua(P, w, C) {
                            return ko.apply(this, arguments)
                        }

                        function ko() {
                            return (ko = (0, r.Z)(function*(P, w, C) {
                                const {
                                    auth: L
                                } = P, oe = {
                                    idToken: yield P.getIdToken(), returnSecureToken: !0
                                };
                                w && (oe.email = w), C && (oe.password = C);
                                const Le = yield mn(P, zc(L, oe));
                                yield P._updateTokensIfNecessary(Le, !0)
                            })).apply(this, arguments)
                        }
                        class lr {
                            constructor(w, C, L = {}) {
                                this.isNewUser = w, this.providerId = C, this.profile = L
                            }
                        }
                        class Pa extends lr {
                            constructor(w, C, L, K) {
                                super(w, C, L), this.username = K
                            }
                        }
                        class mr extends lr {
                            constructor(w, C) {
                                super(w, "facebook.com", C)
                            }
                        }
                        class ou extends Pa {
                            constructor(w, C) {
                                super(w, "github.com", C, "string" == typeof C ? .login ? C ? .login : null)
                            }
                        }
                        class su extends lr {
                            constructor(w, C) {
                                super(w, "google.com", C)
                            }
                        }
                        class qu extends Pa {
                            constructor(w, C, L) {
                                super(w, "twitter.com", C, L)
                            }
                        }

                        function pc(P) {
                            const {
                                user: w,
                                _tokenResponse: C
                            } = P;
                            return w.isAnonymous && !C ? {
                                providerId: null,
                                isNewUser: !1,
                                profile: null
                            } : function jo(P) {
                                var w, C;
                                if (!P) return null;
                                const {
                                    providerId: L
                                } = P, K = P.rawUserInfo ? JSON.parse(P.rawUserInfo) : {}, oe = P.isNewUser || "identitytoolkit#SignupNewUserResponse" === P.kind;
                                if (!L && P ? .idToken) {
                                    const Le = null === (C = null === (w = Bt(P.idToken)) || void 0 === w ? void 0 : w.firebase) || void 0 === C ? void 0 : C.sign_in_provider;
                                    if (Le) return new lr(oe, "anonymous" !== Le && "custom" !== Le ? Le : null)
                                }
                                if (!L) return null;
                                switch (L) {
                                    case "facebook.com":
                                        return new mr(oe, K);
                                    case "github.com":
                                        return new ou(oe, K);
                                    case "google.com":
                                        return new su(oe, K);
                                    case "twitter.com":
                                        return new qu(oe, K, P.screenName || null);
                                    case "custom":
                                    case "anonymous":
                                        return new lr(oe, null);
                                    default:
                                        return new lr(oe, L, K)
                                }
                            }(C)
                        }
                        class ys {
                            constructor(w, C, L) {
                                this.type = w, this.credential = C, this.auth = L
                            }
                            static _fromIdtoken(w, C) {
                                return new ys("enroll", w, C)
                            }
                            static _fromMfaPendingCredential(w) {
                                return new ys("signin", w)
                            }
                            toJSON() {
                                return {
                                    multiFactorSession: {
                                        ["enroll" === this.type ? "idToken" : "pendingCredential"]: this.credential
                                    }
                                }
                            }
                            static fromJSON(w) {
                                var C, L;
                                if (w ? .multiFactorSession) {
                                    if (null !== (C = w.multiFactorSession) && void 0 !== C && C.pendingCredential) return ys._fromMfaPendingCredential(w.multiFactorSession.pendingCredential);
                                    if (null !== (L = w.multiFactorSession) && void 0 !== L && L.idToken) return ys._fromIdtoken(w.multiFactorSession.idToken)
                                }
                                return null
                            }
                        }
                        class Oo {
                            constructor(w, C, L) {
                                this.session = w, this.hints = C, this.signInResolver = L
                            }
                            static _fromError(w, C) {
                                const L = Qt(w),
                                    K = C.customData._serverResponse,
                                    oe = (K.mfaInfo || []).map(ct => dc._fromServerResponse(L, ct));
                                Ee(K.mfaPendingCredential, L, "internal-error");
                                const Le = ys._fromMfaPendingCredential(K.mfaPendingCredential);
                                return new Oo(Le, oe, function() {
                                    var ct = (0, r.Z)(function*(Wt) {
                                        const ln = yield Wt._process(L, Le);
                                        delete K.mfaInfo, delete K.mfaPendingCredential;
                                        const Kn = Object.assign(Object.assign({}, K), {
                                            idToken: ln.idToken,
                                            refreshToken: ln.refreshToken
                                        });
                                        switch (C.operationType) {
                                            case "signIn":
                                                const Di = yield Vr._fromIdTokenResponse(L, C.operationType, Kn);
                                                return yield L._updateCurrentUser(Di.user), Di;
                                            case "reauthenticate":
                                                return Ee(C.user, L, "internal-error"), Vr._forOperation(C.user, C.operationType, Kn);
                                            default:
                                                At(L, "internal-error")
                                        }
                                    });
                                    return function(Wt) {
                                        return ct.apply(this, arguments)
                                    }
                                }())
                            }
                            resolveSignIn(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    return C.signInResolver(w)
                                })()
                            }
                        }

                        function mc(P, w) {
                            var C;
                            const L = (0, y.m9)(P),
                                K = w;
                            return Ee(w.customData.operationType, L, "argument-error"), Ee(null === (C = K.customData._serverResponse) || void 0 === C ? void 0 : C.mfaPendingCredential, L, "argument-error"), Oo._fromError(L, K)
                        }

                        function kr(P, w) {
                            return Dn(P, "POST", "/v2/accounts/mfaEnrollment:start", Hn(P, w))
                        }
                        class Hl {
                            constructor(w) {
                                this.user = w, this.enrolledFactors = [], w._onReload(C => {
                                    C.mfaInfo && (this.enrolledFactors = C.mfaInfo.map(L => dc._fromServerResponse(w.auth, L)))
                                })
                            }
                            static _fromUser(w) {
                                return new Hl(w)
                            }
                            getSession() {
                                var w = this;
                                return (0, r.Z)(function*() {
                                    return ys._fromIdtoken(yield w.user.getIdToken(), w.user.auth)
                                })()
                            }
                            enroll(w, C) {
                                var L = this;
                                return (0, r.Z)(function*() {
                                    const K = w,
                                        oe = yield L.getSession(), Le = yield mn(L.user, K._process(L.user.auth, oe, C));
                                    return yield L.user._updateTokensIfNecessary(Le), L.user.reload()
                                })()
                            }
                            unenroll(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    var L;
                                    const K = "string" == typeof w ? w : w.uid,
                                        oe = yield C.user.getIdToken(), Le = yield mn(C.user, function cl(P, w) {
                                            return Dn(P, "POST", "/v2/accounts/mfaEnrollment:withdraw", Hn(P, w))
                                        }(C.user.auth, {
                                            idToken: oe,
                                            mfaEnrollmentId: K
                                        }));
                                    C.enrolledFactors = C.enrolledFactors.filter(({
                                        uid: ct
                                    }) => ct !== K), yield C.user._updateTokensIfNecessary(Le);
                                    try {
                                        yield C.user.reload()
                                    } catch (ct) {
                                        if ("auth/user-token-expired" !== (null === (L = ct) || void 0 === L ? void 0 : L.code)) throw ct
                                    }
                                })()
                            }
                        }
                        const Ai = new WeakMap;

                        function Xc(P) {
                            const w = (0, y.m9)(P);
                            return Ai.has(w) || Ai.set(w, Hl._fromUser(w)), Ai.get(w)
                        }
                        const ha = "__sak";
                        class dl {
                            constructor(w, C) {
                                this.storageRetriever = w, this.type = C
                            }
                            _isAvailable() {
                                try {
                                    return this.storage ? (this.storage.setItem(ha, "1"), this.storage.removeItem(ha), Promise.resolve(!0)) : Promise.resolve(!1)
                                } catch {
                                    return Promise.resolve(!1)
                                }
                            }
                            _set(w, C) {
                                return this.storage.setItem(w, JSON.stringify(C)), Promise.resolve()
                            }
                            _get(w) {
                                const C = this.storage.getItem(w);
                                return Promise.resolve(C ? JSON.parse(C) : null)
                            }
                            _remove(w) {
                                return this.storage.removeItem(w), Promise.resolve()
                            }
                            get storage() {
                                return this.storageRetriever()
                            }
                        }
                        const qi = (() => {
                                class P extends dl {
                                    constructor() {
                                        super(() => window.localStorage, "LOCAL"), this.boundEventHandler = (C, L) => this.onStorageEvent(C, L), this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.safariLocalStorageNotSynced = function au() {
                                            const P = (0, y.z$)();
                                            return de(P) || et(P)
                                        }() && function Nr() {
                                            try {
                                                return !(!window || window === window.top)
                                            } catch {
                                                return !1
                                            }
                                        }(), this.fallbackToPolling = ii(), this._shouldAllowMigration = !0
                                    }
                                    forAllChangedKeys(C) {
                                        for (const L of Object.keys(this.listeners)) {
                                            const K = this.storage.getItem(L),
                                                oe = this.localCache[L];
                                            K !== oe && C(L, oe, K)
                                        }
                                    }
                                    onStorageEvent(C, L = !1) {
                                        if (!C.key) return void this.forAllChangedKeys((ct, Wt, ln) => {
                                            this.notifyListeners(ct, ln)
                                        });
                                        const K = C.key;
                                        if (L ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
                                            const ct = this.storage.getItem(K);
                                            if (C.newValue !== ct) null !== C.newValue ? this.storage.setItem(K, C.newValue) : this.storage.removeItem(K);
                                            else if (this.localCache[K] === C.newValue && !L) return
                                        }
                                        const oe = () => {
                                                const ct = this.storage.getItem(K);
                                                !L && this.localCache[K] === ct || this.notifyListeners(K, ct)
                                            },
                                            Le = this.storage.getItem(K);
                                        ! function nn() {
                                            return (0, y.w1)() && 10 === document.documentMode
                                        }() || Le === C.newValue || C.newValue === C.oldValue ? oe() : setTimeout(oe, 10)
                                    }
                                    notifyListeners(C, L) {
                                        this.localCache[C] = L;
                                        const K = this.listeners[C];
                                        if (K)
                                            for (const oe of Array.from(K)) oe(L && JSON.parse(L))
                                    }
                                    startPolling() {
                                        this.stopPolling(), this.pollTimer = setInterval(() => {
                                            this.forAllChangedKeys((C, L, K) => {
                                                this.onStorageEvent(new StorageEvent("storage", {
                                                    key: C,
                                                    oldValue: L,
                                                    newValue: K
                                                }), !0)
                                            })
                                        }, 1e3)
                                    }
                                    stopPolling() {
                                        this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
                                    }
                                    attachListener() {
                                        window.addEventListener("storage", this.boundEventHandler)
                                    }
                                    detachListener() {
                                        window.removeEventListener("storage", this.boundEventHandler)
                                    }
                                    _addListener(C, L) {
                                        0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()), this.listeners[C] || (this.listeners[C] = new Set, this.localCache[C] = this.storage.getItem(C)), this.listeners[C].add(L)
                                    }
                                    _removeListener(C, L) {
                                        this.listeners[C] && (this.listeners[C].delete(L), 0 === this.listeners[C].size && delete this.listeners[C]), 0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling())
                                    }
                                    _set(C, L) {
                                        var K = () => super._set,
                                            oe = this;
                                        return (0, r.Z)(function*() {
                                            yield K().call(oe, C, L), oe.localCache[C] = JSON.stringify(L)
                                        })()
                                    }
                                    _get(C) {
                                        var L = () => super._get,
                                            K = this;
                                        return (0, r.Z)(function*() {
                                            const oe = yield L().call(K, C);
                                            return K.localCache[C] = JSON.stringify(oe), oe
                                        })()
                                    }
                                    _remove(C) {
                                        var L = () => super._remove,
                                            K = this;
                                        return (0, r.Z)(function*() {
                                            yield L().call(K, C), delete K.localCache[C]
                                        })()
                                    }
                                }
                                return P.type = "LOCAL", P
                            })(),
                            Ia = (() => {
                                class P extends dl {
                                    constructor() {
                                        super(() => window.sessionStorage, "SESSION")
                                    }
                                    _addListener(C, L) {}
                                    _removeListener(C, L) {}
                                }
                                return P.type = "SESSION", P
                            })();
                        let fc = (() => {
                            class P {
                                constructor(C) {
                                    this.eventTarget = C, this.handlersMap = {}, this.boundEventHandler = this.handleEvent.bind(this)
                                }
                                static _getInstance(C) {
                                    const L = this.receivers.find(oe => oe.isListeningto(C));
                                    if (L) return L;
                                    const K = new P(C);
                                    return this.receivers.push(K), K
                                }
                                isListeningto(C) {
                                    return this.eventTarget === C
                                }
                                handleEvent(C) {
                                    var L = this;
                                    return (0, r.Z)(function*() {
                                        const K = C,
                                            {
                                                eventId: oe,
                                                eventType: Le,
                                                data: ct
                                            } = K.data,
                                            Wt = L.handlersMap[Le];
                                        if (!Wt ? .size) return;
                                        K.ports[0].postMessage({
                                            status: "ack",
                                            eventId: oe,
                                            eventType: Le
                                        });
                                        const ln = Array.from(Wt).map(function() {
                                                var Di = (0, r.Z)(function*(Ba) {
                                                    return Ba(K.origin, ct)
                                                });
                                                return function(Ba) {
                                                    return Di.apply(this, arguments)
                                                }
                                            }()),
                                            Kn = yield function gc(P) {
                                                return Promise.all(P.map(function() {
                                                    var w = (0, r.Z)(function*(C) {
                                                        try {
                                                            return {
                                                                fulfilled: !0,
                                                                value: yield C
                                                            }
                                                        } catch (L) {
                                                            return {
                                                                fulfilled: !1,
                                                                reason: L
                                                            }
                                                        }
                                                    });
                                                    return function(C) {
                                                        return w.apply(this, arguments)
                                                    }
                                                }()))
                                            }(ln);
                                        K.ports[0].postMessage({
                                            status: "done",
                                            eventId: oe,
                                            eventType: Le,
                                            response: Kn
                                        })
                                    })()
                                }
                                _subscribe(C, L) {
                                    0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler), this.handlersMap[C] || (this.handlersMap[C] = new Set), this.handlersMap[C].add(L)
                                }
                                _unsubscribe(C, L) {
                                    this.handlersMap[C] && L && this.handlersMap[C].delete(L), (!L || 0 === this.handlersMap[C].size) && delete this.handlersMap[C], 0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler)
                                }
                            }
                            return P.receivers = [], P
                        })();

                        function pa(P = "", w = 10) {
                            let C = "";
                            for (let L = 0; L < w; L++) C += Math.floor(10 * Math.random());
                            return P + C
                        }
                        class Pd {
                            constructor(w) {
                                this.target = w, this.handlers = new Set
                            }
                            removeMessageHandler(w) {
                                w.messageChannel && (w.messageChannel.port1.removeEventListener("message", w.onMessage), w.messageChannel.port1.close()), this.handlers.delete(w)
                            }
                            _send(w, C, L = 50) {
                                var K = this;
                                return (0, r.Z)(function*() {
                                    const oe = typeof MessageChannel < "u" ? new MessageChannel : null;
                                    if (!oe) throw new Error("connection_unavailable");
                                    let Le, ct;
                                    return new Promise((Wt, ln) => {
                                        const Kn = pa("", 20);
                                        oe.port1.start();
                                        const Di = setTimeout(() => {
                                            ln(new Error("unsupported_event"))
                                        }, L);
                                        ct = {
                                            messageChannel: oe,
                                            onMessage(Ba) {
                                                const cr = Ba;
                                                if (cr.data.eventId === Kn) switch (cr.data.status) {
                                                    case "ack":
                                                        clearTimeout(Di), Le = setTimeout(() => {
                                                            ln(new Error("timeout"))
                                                        }, 3e3);
                                                        break;
                                                    case "done":
                                                        clearTimeout(Le), Wt(cr.data.response);
                                                        break;
                                                    default:
                                                        clearTimeout(Di), clearTimeout(Le), ln(new Error("invalid_response"))
                                                }
                                            }
                                        }, K.handlers.add(ct), oe.port1.addEventListener("message", ct.onMessage), K.target.postMessage({
                                            eventType: w,
                                            eventId: Kn,
                                            data: C
                                        }, [oe.port2])
                                    }).finally(() => {
                                        ct && K.removeMessageHandler(ct)
                                    })
                                })()
                            }
                        }

                        function br() {
                            return window
                        }

                        function Yr() {
                            return typeof br().WorkerGlobalScope < "u" && "function" == typeof br().importScripts
                        }

                        function Aa() {
                            return (Aa = (0, r.Z)(function*() {
                                if (!navigator ? .serviceWorker) return null;
                                try {
                                    return (yield navigator.serviceWorker.ready).active
                                } catch {
                                    return null
                                }
                            })).apply(this, arguments)
                        }
                        const La = "firebaseLocalStorageDb",
                            ul = "firebaseLocalStorage",
                            Ra = "fbase_key";
                        class zo {
                            constructor(w) {
                                this.request = w
                            }
                            toPromise() {
                                return new Promise((w, C) => {
                                    this.request.addEventListener("success", () => {
                                        w(this.request.result)
                                    }), this.request.addEventListener("error", () => {
                                        C(this.request.error)
                                    })
                                })
                            }
                        }

                        function ma(P, w) {
                            return P.transaction([ul], w ? "readwrite" : "readonly").objectStore(ul)
                        }

                        function ji() {
                            const P = indexedDB.open(La, 1);
                            return new Promise((w, C) => {
                                P.addEventListener("error", () => {
                                    C(P.error)
                                }), P.addEventListener("upgradeneeded", () => {
                                    const L = P.result;
                                    try {
                                        L.createObjectStore(ul, {
                                            keyPath: Ra
                                        })
                                    } catch (K) {
                                        C(K)
                                    }
                                }), P.addEventListener("success", (0, r.Z)(function*() {
                                    const L = P.result;
                                    L.objectStoreNames.contains(ul) ? w(L) : (L.close(), yield function nd() {
                                        const P = indexedDB.deleteDatabase(La);
                                        return new zo(P).toPromise()
                                    }(), w(yield ji()))
                                }))
                            })
                        }

                        function Or(P, w, C) {
                            return is.apply(this, arguments)
                        }

                        function is() {
                            return (is = (0, r.Z)(function*(P, w, C) {
                                const L = ma(P, !0).put({
                                    [Ra]: w,
                                    value: C
                                });
                                return new zo(L).toPromise()
                            })).apply(this, arguments)
                        }

                        function Yl() {
                            return (Yl = (0, r.Z)(function*(P, w) {
                                const C = ma(P, !1).get(w),
                                    L = yield new zo(C).toPromise();
                                return void 0 === L ? null : L.value
                            })).apply(this, arguments)
                        }

                        function Id(P, w) {
                            const C = ma(P, !0).delete(w);
                            return new zo(C).toPromise()
                        }
                        const js = (() => {
                            class P {
                                constructor() {
                                    this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {})
                                }
                                _openDb() {
                                    var C = this;
                                    return (0, r.Z)(function*() {
                                        return C.db || (C.db = yield ji()), C.db
                                    })()
                                }
                                _withRetries(C) {
                                    var L = this;
                                    return (0, r.Z)(function*() {
                                        let K = 0;
                                        for (;;) try {
                                            const oe = yield L._openDb();
                                            return yield C(oe)
                                        } catch (oe) {
                                            if (K++ > 3) throw oe;
                                            L.db && (L.db.close(), L.db = void 0)
                                        }
                                    })()
                                }
                                initializeServiceWorkerMessaging() {
                                    var C = this;
                                    return (0, r.Z)(function*() {
                                        return Yr() ? C.initializeReceiver() : C.initializeSender()
                                    })()
                                }
                                initializeReceiver() {
                                    var C = this;
                                    return (0, r.Z)(function*() {
                                        C.receiver = fc._getInstance(function Ed() {
                                            return Yr() ? self : null
                                        }()), C.receiver._subscribe("keyChanged", function() {
                                            var L = (0, r.Z)(function*(K, oe) {
                                                return {
                                                    keyProcessed: (yield C._poll()).includes(oe.key)
                                                }
                                            });
                                            return function(K, oe) {
                                                return L.apply(this, arguments)
                                            }
                                        }()), C.receiver._subscribe("ping", function() {
                                            var L = (0, r.Z)(function*(K, oe) {
                                                return ["keyChanged"]
                                            });
                                            return function(K, oe) {
                                                return L.apply(this, arguments)
                                            }
                                        }())
                                    })()
                                }
                                initializeSender() {
                                    var C = this;
                                    return (0, r.Z)(function*() {
                                        var L, K;
                                        if (C.activeServiceWorker = yield function td() {
                                                return Aa.apply(this, arguments)
                                            }(), !C.activeServiceWorker) return;
                                        C.sender = new Pd(C.activeServiceWorker);
                                        const oe = yield C.sender._send("ping", {}, 800);
                                        !oe || (null === (L = oe[0]) || void 0 === L ? void 0 : L.fulfilled) && (null === (K = oe[0]) || void 0 === K ? void 0 : K.value.includes("keyChanged")) && (C.serviceWorkerReceiverAvailable = !0)
                                    })()
                                }
                                notifyServiceWorker(C) {
                                    var L = this;
                                    return (0, r.Z)(function*() {
                                        if (L.sender && L.activeServiceWorker && function lu() {
                                                var P;
                                                return (null === (P = navigator ? .serviceWorker) || void 0 === P ? void 0 : P.controller) || null
                                            }() === L.activeServiceWorker) try {
                                            yield L.sender._send("keyChanged", {
                                                key: C
                                            }, L.serviceWorkerReceiverAvailable ? 800 : 50)
                                        } catch {}
                                    })()
                                }
                                _isAvailable() {
                                    return (0, r.Z)(function*() {
                                        try {
                                            if (!indexedDB) return !1;
                                            const C = yield ji();
                                            return yield Or(C, ha, "1"), yield Id(C, ha), !0
                                        } catch {}
                                        return !1
                                    })()
                                }
                                _withPendingWrite(C) {
                                    var L = this;
                                    return (0, r.Z)(function*() {
                                        L.pendingWrites++;
                                        try {
                                            yield C()
                                        } finally {
                                            L.pendingWrites--
                                        }
                                    })()
                                }
                                _set(C, L) {
                                    var K = this;
                                    return (0, r.Z)(function*() {
                                        return K._withPendingWrite((0, r.Z)(function*() {
                                            return yield K._withRetries(oe => Or(oe, C, L)), K.localCache[C] = L, K.notifyServiceWorker(C)
                                        }))
                                    })()
                                }
                                _get(C) {
                                    var L = this;
                                    return (0, r.Z)(function*() {
                                        const K = yield L._withRetries(oe => function Lh(P, w) {
                                            return Yl.apply(this, arguments)
                                        }(oe, C));
                                        return L.localCache[C] = K, K
                                    })()
                                }
                                _remove(C) {
                                    var L = this;
                                    return (0, r.Z)(function*() {
                                        return L._withPendingWrite((0, r.Z)(function*() {
                                            return yield L._withRetries(K => Id(K, C)), delete L.localCache[C], L.notifyServiceWorker(C)
                                        }))
                                    })()
                                }
                                _poll() {
                                    var C = this;
                                    return (0, r.Z)(function*() {
                                        const L = yield C._withRetries(Le => {
                                            const ct = ma(Le, !1).getAll();
                                            return new zo(ct).toPromise()
                                        });
                                        if (!L) return [];
                                        if (0 !== C.pendingWrites) return [];
                                        const K = [],
                                            oe = new Set;
                                        for (const {
                                                fbase_key: Le,
                                                value: ct
                                            } of L) oe.add(Le), JSON.stringify(C.localCache[Le]) !== JSON.stringify(ct) && (C.notifyListeners(Le, ct), K.push(Le));
                                        for (const Le of Object.keys(C.localCache)) C.localCache[Le] && !oe.has(Le) && (C.notifyListeners(Le, null), K.push(Le));
                                        return K
                                    })()
                                }
                                notifyListeners(C, L) {
                                    this.localCache[C] = L;
                                    const K = this.listeners[C];
                                    if (K)
                                        for (const oe of Array.from(K)) oe(L)
                                }
                                startPolling() {
                                    var C = this;
                                    this.stopPolling(), this.pollTimer = setInterval((0, r.Z)(function*() {
                                        return C._poll()
                                    }), 800)
                                }
                                stopPolling() {
                                    this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
                                }
                                _addListener(C, L) {
                                    0 === Object.keys(this.listeners).length && this.startPolling(), this.listeners[C] || (this.listeners[C] = new Set, this._get(C)), this.listeners[C].add(L)
                                }
                                _removeListener(C, L) {
                                    this.listeners[C] && (this.listeners[C].delete(L), 0 === this.listeners[C].size && delete this.listeners[C]), 0 === Object.keys(this.listeners).length && this.stopPolling()
                                }
                            }
                            return P.type = "LOCAL", P
                        })();

                        function id(P, w) {
                            return Dn(P, "POST", "/v2/accounts/mfaSignIn:start", Hn(P, w))
                        }

                        function Er() {
                            return (Er = (0, r.Z)(function*(P) {
                                return (yield Dn(P, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
                            })).apply(this, arguments)
                        }

                        function jl(P) {
                            return new Promise((w, C) => {
                                const L = document.createElement("script");
                                L.setAttribute("src", P), L.onload = w, L.onerror = K => {
                                        const oe = it("internal-error");
                                        oe.customData = K, C(oe)
                                    }, L.type = "text/javascript", L.charset = "UTF-8",
                                    function yc() {
                                        var P, w;
                                        return null !== (w = null === (P = document.getElementsByTagName("head")) || void 0 === P ? void 0 : P[0]) && void 0 !== w ? w : document
                                    }().appendChild(L)
                            })
                        }

                        function vc(P) {
                            return `__${P}${Math.floor(1e6*Math.random())}`
                        }
                        const rs = 1e12;
                        class wc {
                            constructor(w) {
                                this.auth = w, this.counter = rs, this._widgets = new Map
                            }
                            render(w, C) {
                                const L = this.counter;
                                return this._widgets.set(L, new Ji(w, this.auth.name, C || {})), this.counter++, L
                            }
                            reset(w) {
                                var C;
                                const L = w || rs;
                                null === (C = this._widgets.get(L)) || void 0 === C || C.delete(), this._widgets.delete(L)
                            }
                            getResponse(w) {
                                var C;
                                return (null === (C = this._widgets.get(w || rs)) || void 0 === C ? void 0 : C.getResponse()) || ""
                            }
                            execute(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    var L;
                                    return null === (L = C._widgets.get(w || rs)) || void 0 === L || L.execute(), ""
                                })()
                            }
                        }
                        class Ji {
                            constructor(w, C, L) {
                                this.params = L, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
                                    this.execute()
                                };
                                const K = "string" == typeof w ? document.getElementById(w) : w;
                                Ee(K, "argument-error", {
                                    appName: C
                                }), this.container = K, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
                            }
                            getResponse() {
                                return this.checkIfDeleted(), this.responseToken
                            }
                            delete() {
                                this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
                            }
                            execute() {
                                this.checkIfDeleted(), !this.timerId && (this.timerId = window.setTimeout(() => {
                                    this.responseToken = function re(P) {
                                        const w = [],
                                            C = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                                        for (let L = 0; L < P; L++) w.push(C.charAt(Math.floor(Math.random() * C.length)));
                                        return w.join("")
                                    }(50);
                                    const {
                                        callback: w,
                                        "expired-callback": C
                                    } = this.params;
                                    if (w) try {
                                        w(this.responseToken)
                                    } catch {}
                                    this.timerId = window.setTimeout(() => {
                                        if (this.timerId = null, this.responseToken = null, C) try {
                                            C()
                                        } catch {}
                                        this.isVisible && this.execute()
                                    }, 6e4)
                                }, 500))
                            }
                            checkIfDeleted() {
                                if (this.deleted) throw new Error("reCAPTCHA mock was already deleted!")
                            }
                        }
                        const Cc = vc("rcb"),
                            Rh = new Mt(3e4, 6e4);
                        class ui {
                            constructor() {
                                var w;
                                this.hostLanguage = "", this.counter = 0, this.librarySeparatelyLoaded = !(null === (w = br().grecaptcha) || void 0 === w || !w.render)
                            }
                            load(w, C = "") {
                                return Ee(function Fh(P) {
                                    return P.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(P)
                                }(C), w, "argument-error"), this.shouldResolveImmediately(C) ? Promise.resolve(br().grecaptcha) : new Promise((L, K) => {
                                    const oe = br().setTimeout(() => {
                                        K(it(w, "network-request-failed"))
                                    }, Rh.get());
                                    br()[Cc] = () => {
                                        br().clearTimeout(oe), delete br()[Cc];
                                        const ct = br().grecaptcha;
                                        if (!ct) return void K(it(w, "internal-error"));
                                        const Wt = ct.render;
                                        ct.render = (ln, Kn) => {
                                            const Di = Wt(ln, Kn);
                                            return this.counter++, Di
                                        }, this.hostLanguage = C, L(ct)
                                    }, jl(`https://www.google.com/recaptcha/api.js??${(0,y.xO)({onload:Cc,render:"explicit",hl:C})}`).catch(() => {
                                        clearTimeout(oe), K(it(w, "internal-error"))
                                    })
                                })
                            }
                            clearedOneInstance() {
                                this.counter--
                            }
                            shouldResolveImmediately(w) {
                                var C;
                                return !(null === (C = br().grecaptcha) || void 0 === C || !C.render) && (w === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
                            }
                        }
                        class yg {
                            load(w) {
                                return (0, r.Z)(function*() {
                                    return new wc(w)
                                })()
                            }
                            clearedOneInstance() {}
                        }
                        const _a = "recaptcha",
                            pl = {
                                theme: "light",
                                type: "image"
                            };
                        class sp {
                            constructor(w, C = Object.assign({}, pl), L) {
                                this.parameters = C, this.type = _a, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = Qt(L), this.isInvisible = "invisible" === this.parameters.size, Ee(typeof document < "u", this.auth, "operation-not-supported-in-this-environment");
                                const K = "string" == typeof w ? document.getElementById(w) : w;
                                Ee(K, this.auth, "argument-error"), this.container = K, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new yg : new ui, this.validateStartingState()
                            }
                            verify() {
                                var w = this;
                                return (0, r.Z)(function*() {
                                    w.assertNotDestroyed();
                                    const C = yield w.render(), L = w.getAssertedRecaptcha();
                                    return L.getResponse(C) || new Promise(oe => {
                                        const Le = ct => {
                                            !ct || (w.tokenChangeListeners.delete(Le), oe(ct))
                                        };
                                        w.tokenChangeListeners.add(Le), w.isInvisible && L.execute(C)
                                    })
                                })()
                            }
                            render() {
                                try {
                                    this.assertNotDestroyed()
                                } catch (w) {
                                    return Promise.reject(w)
                                }
                                return this.renderPromise || (this.renderPromise = this.makeRenderPromise().catch(w => {
                                    throw this.renderPromise = null, w
                                })), this.renderPromise
                            }
                            _reset() {
                                this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
                            }
                            clear() {
                                this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach(w => {
                                    this.container.removeChild(w)
                                })
                            }
                            validateStartingState() {
                                Ee(!this.parameters.sitekey, this.auth, "argument-error"), Ee(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), Ee(typeof document < "u", this.auth, "operation-not-supported-in-this-environment")
                            }
                            makeTokenCallback(w) {
                                return C => {
                                    if (this.tokenChangeListeners.forEach(L => L(C)), "function" == typeof w) w(C);
                                    else if ("string" == typeof w) {
                                        const L = br()[w];
                                        "function" == typeof L && L(C)
                                    }
                                }
                            }
                            assertNotDestroyed() {
                                Ee(!this.destroyed, this.auth, "internal-error")
                            }
                            makeRenderPromise() {
                                var w = this;
                                return (0, r.Z)(function*() {
                                    if (yield w.init(), !w.widgetId) {
                                        let C = w.container;
                                        if (!w.isInvisible) {
                                            const L = document.createElement("div");
                                            C.appendChild(L), C = L
                                        }
                                        w.widgetId = w.getAssertedRecaptcha().render(C, w.parameters)
                                    }
                                    return w.widgetId
                                })()
                            }
                            init() {
                                var w = this;
                                return (0, r.Z)(function*() {
                                    Ee(mt() && !Yr(), w.auth, "internal-error"), yield function ro() {
                                        let P = null;
                                        return new Promise(w => {
                                            "complete" !== document.readyState ? (P = () => w(), window.addEventListener("load", P)) : w()
                                        }).catch(w => {
                                            throw P && window.removeEventListener("load", P), w
                                        })
                                    }(), w.recaptcha = yield w._recaptchaLoader.load(w.auth, w.auth.languageCode || void 0);
                                    const C = yield function Vl(P) {
                                        return Er.apply(this, arguments)
                                    }(w.auth);
                                    Ee(C, w.auth, "internal-error"), w.parameters.sitekey = C
                                })()
                            }
                            getAssertedRecaptcha() {
                                return Ee(this.recaptcha, this.auth, "internal-error"), this.recaptcha
                            }
                        }
                        class bs {
                            constructor(w, C) {
                                this.verificationId = w, this.onConfirmation = C
                            }
                            confirm(w) {
                                const C = sc._fromVerification(this.verificationId, w);
                                return this.onConfirmation(C)
                            }
                        }

                        function _i(P, w, C) {
                            return Ft.apply(this, arguments)
                        }

                        function Ft() {
                            return (Ft = (0, r.Z)(function*(P, w, C) {
                                const L = Qt(P),
                                    K = yield Li(L, w, (0, y.m9)(C));
                                return new bs(K, oe => cc(L, oe))
                            })).apply(this, arguments)
                        }

                        function wi(P, w, C) {
                            return yi.apply(this, arguments)
                        }

                        function yi() {
                            return (yi = (0, r.Z)(function*(P, w, C) {
                                const L = (0, y.m9)(P);
                                yield jr(!1, L, "phone");
                                const K = yield Li(L.auth, w, (0, y.m9)(C));
                                return new bs(K, oe => xn(L, oe))
                            })).apply(this, arguments)
                        }

                        function Tr(P, w, C) {
                            return Us.apply(this, arguments)
                        }

                        function Us() {
                            return (Us = (0, r.Z)(function*(P, w, C) {
                                const L = (0, y.m9)(P),
                                    K = yield Li(L.auth, w, (0, y.m9)(C));
                                return new bs(K, oe => nr(L, oe))
                            })).apply(this, arguments)
                        }

                        function Li(P, w, C) {
                            return Ri.apply(this, arguments)
                        }

                        function Ri() {
                            return (Ri = (0, r.Z)(function*(P, w, C) {
                                var L;
                                const K = yield C.verify();
                                try {
                                    let oe;
                                    if (Ee("string" == typeof K, P, "argument-error"), Ee(C.type === _a, P, "argument-error"), oe = "string" == typeof w ? {
                                            phoneNumber: w
                                        } : w, "session" in oe) {
                                        const Le = oe.session;
                                        if ("phoneNumber" in oe) return Ee("enroll" === Le.type, P, "internal-error"), (yield kr(P, {
                                            idToken: Le.credential,
                                            phoneEnrollmentInfo: {
                                                phoneNumber: oe.phoneNumber,
                                                recaptchaToken: K
                                            }
                                        })).phoneSessionInfo.sessionInfo; {
                                            Ee("signin" === Le.type, P, "internal-error");
                                            const ct = (null === (L = oe.multiFactorHint) || void 0 === L ? void 0 : L.uid) || oe.multiFactorUid;
                                            return Ee(ct, P, "missing-multi-factor-info"), (yield id(P, {
                                                mfaPendingCredential: Le.credential,
                                                mfaEnrollmentId: ct,
                                                phoneSignInInfo: {
                                                    recaptchaToken: K
                                                }
                                            })).phoneResponseInfo.sessionInfo
                                        }
                                    } {
                                        const {
                                            sessionInfo: Le
                                        } = yield ip(P, {
                                            phoneNumber: oe.phoneNumber,
                                            recaptchaToken: K
                                        });
                                        return Le
                                    }
                                } finally {
                                    C._reset()
                                }
                            })).apply(this, arguments)
                        }

                        function Gn(P, w) {
                            return zt.apply(this, arguments)
                        }

                        function zt() {
                            return (zt = (0, r.Z)(function*(P, w) {
                                yield $c((0, y.m9)(P), w)
                            })).apply(this, arguments)
                        }
                        let Fa = (() => {
                            class P {
                                constructor(C) {
                                    this.providerId = P.PROVIDER_ID, this.auth = Qt(C)
                                }
                                verifyPhoneNumber(C, L) {
                                    return Li(this.auth, C, (0, y.m9)(L))
                                }
                                static credential(C, L) {
                                    return sc._fromVerification(C, L)
                                }
                                static credentialFromResult(C) {
                                    return P.credentialFromTaggedObject(C)
                                }
                                static credentialFromError(C) {
                                    return P.credentialFromTaggedObject(C.customData || {})
                                }
                                static credentialFromTaggedObject({
                                    _tokenResponse: C
                                }) {
                                    if (!C) return null;
                                    const {
                                        phoneNumber: L,
                                        temporaryProof: K
                                    } = C;
                                    return L && K ? sc._fromTokenResponse(L, K) : null
                                }
                            }
                            return P.PROVIDER_ID = "phone", P.PHONE_SIGN_IN_METHOD = "phone", P
                        })();

                        function Na(P, w) {
                            return w ? Pe(w) : (Ee(P._popupRedirectResolver, P, "argument-error"), P._popupRedirectResolver)
                        }
                        class ya extends Yo {
                            constructor(w) {
                                super("custom", "custom"), this.params = w
                            }
                            _getIdTokenResponse(w) {
                                return Ta(w, this._buildIdpRequest())
                            }
                            _linkToIdToken(w, C) {
                                return Ta(w, this._buildIdpRequest(C))
                            }
                            _getReauthenticationResolver(w) {
                                return Ta(w, this._buildIdpRequest())
                            }
                            _buildIdpRequest(w) {
                                const C = {
                                    requestUri: this.params.requestUri,
                                    sessionId: this.params.sessionId,
                                    postBody: this.params.postBody,
                                    tenantId: this.params.tenantId,
                                    pendingToken: this.params.pendingToken,
                                    returnSecureToken: !0,
                                    returnIdpCredential: !0
                                };
                                return w && (C.idToken = w), C
                            }
                        }

                        function du(P) {
                            return Bo(P.auth, new ya(P), P.bypassAuthState)
                        }

                        function Ir(P) {
                            const {
                                auth: w,
                                user: C
                            } = P;
                            return Ee(C, w, "internal-error"), xo(C, new ya(P), P.bypassAuthState)
                        }

                        function wt(P) {
                            return va.apply(this, arguments)
                        }

                        function va() {
                            return (va = (0, r.Z)(function*(P) {
                                const {
                                    auth: w,
                                    user: C
                                } = P;
                                return Ee(C, w, "internal-error"), $c(C, new ya(P), P.bypassAuthState)
                            })).apply(this, arguments)
                        }
                        class os {
                            constructor(w, C, L, K, oe = !1) {
                                this.auth = w, this.resolver = L, this.user = K, this.bypassAuthState = oe, this.pendingPromise = null, this.eventManager = null, this.filter = Array.isArray(C) ? C : [C]
                            }
                            execute() {
                                var w = this;
                                return new Promise(function() {
                                    var C = (0, r.Z)(function*(L, K) {
                                        w.pendingPromise = {
                                            resolve: L,
                                            reject: K
                                        };
                                        try {
                                            w.eventManager = yield w.resolver._initialize(w.auth), yield w.onExecution(), w.eventManager.registerConsumer(w)
                                        } catch (oe) {
                                            w.reject(oe)
                                        }
                                    });
                                    return function(L, K) {
                                        return C.apply(this, arguments)
                                    }
                                }())
                            }
                            onAuthEvent(w) {
                                var C = this;
                                return (0, r.Z)(function*() {
                                    const {
                                        urlResponse: L,
                                        sessionId: K,
                                        postBody: oe,
                                        tenantId: Le,
                                        error: ct,
                                        type: Wt
                                    } = w;
                                    if (ct) return void C.reject(ct);
                                    const ln = {
                                        auth: C.auth,
                                        requestUri: L,
                                        sessionId: K,
                                        tenantId: Le || void 0,
                                        postBody: oe || void 0,
                                        user: C.user,
                                        bypassAuthState: C.bypassAuthState
                                    };
                                    try {
                                        C.resolve(yield C.getIdpTask(Wt)(ln))
                                    } catch (Kn) {
                                        C.reject(Kn)
                                    }
                                })()
                            }
                            onError(w) {
                                this.reject(w)
                            }
                            getIdpTask(w) {
                                switch (w) {
                                    case "signInViaPopup":
                                    case "signInViaRedirect":
                                        return du;
                                    case "linkViaPopup":
                                    case "linkViaRedirect":
                                        return wt;
                                    case "reauthViaPopup":
                                    case "reauthViaRedirect":
                                        return Ir;
                                    default:
                                        At(this.auth, "internal-error")
                                }
                            }
                            resolve(w) {
                                Je(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(w), this.unregisterAndCleanUp()
                            }
                            reject(w) {
                                Je(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(w), this.unregisterAndCleanUp()
                            }
                            unregisterAndCleanUp() {
                                this.eventManager && this.eventManager.unregisterConsumer(this), this.pendingPromise = null, this.cleanUp()
                            }
                        }
                        const Mc = new Mt(2e3, 1e4);

                        function ei(P, w, C) {
                            return To.apply(this, arguments)
                        }

                        function To() {
                            return (To = (0, r.Z)(function*(P, w, C) {
                                const L = Qt(P);
                                Ge(P, w, mo);
                                const K = Na(L, C);
                                return new rd(L, "signInViaPopup", w, K).executeNotNull()
                            })).apply(this, arguments)
                        }

                        function uu(P, w, C) {
                            return Ul.apply(this, arguments)
                        }

                        function Ul() {
                            return (Ul = (0, r.Z)(function*(P, w, C) {
                                const L = (0, y.m9)(P);
                                Ge(L.auth, w, mo);
                                const K = Na(L.auth, C);
                                return new rd(L.auth, "reauthViaPopup", w, K, L).executeNotNull()
                            })).apply(this, arguments)
                        }

                        function Nh(P, w, C) {
                            return Ad.apply(this, arguments)
                        }

                        function Ad() {
                            return (Ad = (0, r.Z)(function*(P, w, C) {
                                const L = (0, y.m9)(P);
                                Ge(L.auth, w, mo);
                                const K = Na(L.auth, C);
                                return new rd(L.auth, "linkViaPopup", w, K, L).executeNotNull()
                            })).apply(this, arguments)
                        }
                        let rd = (() => {
                            class P extends os {
                                constructor(C, L, K, oe, Le) {
                                    super(C, L, oe, Le), this.provider = K, this.authWindow = null, this.pollId = null, P.currentPopupAction && P.currentPopupAction.cancel(), P.currentPopupAction = this
                                }
                                executeNotNull() {
                                    var C = this;
                                    return (0, r.Z)(function*() {
                                        const L = yield C.execute();
                                        return Ee(L, C.auth, "internal-error"), L
                                    })()
                                }
                                onExecution() {
                                    var C = this;
                                    return (0, r.Z)(function*() {
                                        Je(1 === C.filter.length, "Popup operations only handle one event");
                                        const L = pa();
                                        C.authWindow = yield C.resolver._openPopup(C.auth, C.provider, C.filter[0], L), C.authWindow.associatedEvent = L, C.resolver._originValidation(C.auth).catch(K => {
                                            C.reject(K)
                                        }), C.resolver._isIframeWebStorageSupported(C.auth, K => {
                                            K || C.reject(it(C.auth, "web-storage-unsupported"))
                                        }), C.pollUserCancellation()
                                    })()
                                }
                                get eventId() {
                                    var C;
                                    return (null === (C = this.authWindow) || void 0 === C ? void 0 : C.associatedEvent) || null
                                }
                                cancel() {
                                    this.reject(it(this.auth, "cancelled-popup-request"))
                                }
                                cleanUp() {
                                    this.authWindow && this.authWindow.close(), this.pollId && window.clearTimeout(this.pollId), this.authWindow = null, this.pollId = null, P.currentPopupAction = null
                                }
                                pollUserCancellation() {
                                    const C = () => {
                                        var L, K;
                                        this.pollId = null !== (K = null === (L = this.authWindow) || void 0 === L ? void 0 : L.window) && void 0 !== K && K.closed ? window.setTimeout(() => {
                                            this.pollId = null, this.reject(it(this.auth, "popup-closed-by-user"))
                                        }, 2e3) : window.setTimeout(C, Mc.get())
                                    };
                                    C()
                                }
                            }
                            return P.currentPopupAction = null, P
                        })();
                        const xc = new Map;
                        class Ki extends os {
                            constructor(w, C, L = !1) {
                                super(w, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], C, void 0, L), this.eventId = null
                            }
                            execute() {
                                var w = () => super.execute,
                                    C = this;
                                return (0, r.Z)(function*() {
                                    let L = xc.get(C.auth._key());
                                    if (!L) {
                                        try {
                                            const oe = (yield function Qi(P, w) {
                                                return Ha.apply(this, arguments)
                                            }(C.resolver, C.auth)) ? yield w().call(C): null;
                                            L = () => Promise.resolve(oe)
                                        } catch (K) {
                                            L = () => Promise.reject(K)
                                        }
                                        xc.set(C.auth._key(), L)
                                    }
                                    return C.bypassAuthState || xc.set(C.auth._key(), () => Promise.resolve(null)), L()
                                })()
                            }
                            onAuthEvent(w) {
                                var C = () => super.onAuthEvent,
                                    L = this;
                                return (0, r.Z)(function*() {
                                    if ("signInViaRedirect" === w.type) return C().call(L, w);
                                    if ("unknown" !== w.type) {
                                        if (w.eventId) {
                                            const K = yield L.auth._redirectUserForId(w.eventId);
                                            if (K) return L.user = K, C().call(L, w);
                                            L.resolve(null)
                                        }
                                    } else L.resolve(null)
                                })()
                            }
                            onExecution() {
                                return (0, r.Z)(function*() {})()
                            }
                            cleanUp() {}
                        }

                        function Ha() {
                            return (Ha = (0, r.Z)(function*(P, w) {
                                const C = Ar(w),
                                    L = oo(P);
                                if (!(yield L._isAvailable())) return !1;
                                const K = "true" === (yield L._get(C));
                                return yield L._remove(C), K
                            })).apply(this, arguments)
                        }

                        function kc(P, w) {
                            return ws.apply(this, arguments)
                        }

                        function ws() {
                            return (ws = (0, r.Z)(function*(P, w) {
                                return oo(P)._set(Ar(w), "true")
                            })).apply(this, arguments)
                        }

                        function zs() {
                            xc.clear()
                        }

                        function ss(P, w) {
                            xc.set(P._key(), w)
                        }

                        function oo(P) {
                            return Pe(P._redirectPersistence)
                        }

                        function Ar(P) {
                            return ge("pendingRedirect", P.config.apiKey, P.name)
                        }

                        function hu(P, w, C) {
                            return function Sr(P, w, C) {
                                return Cs.apply(this, arguments)
                            }(P, w, C)
                        }

                        function Cs() {
                            return (Cs = (0, r.Z)(function*(P, w, C) {
                                const L = Qt(P);
                                Ge(P, w, mo);
                                const K = Na(L, C);
                                return yield kc(K, L), K._openRedirect(L, w, "signInViaRedirect")
                            })).apply(this, arguments)
                        }

                        function sd(P, w, C) {
                            return function F(P, w, C) {
                                return V.apply(this, arguments)
                            }(P, w, C)
                        }

                        function V() {
                            return (V = (0, r.Z)(function*(P, w, C) {
                                const L = (0, y.m9)(P);
                                Ge(L.auth, w, mo);
                                const K = Na(L.auth, C);
                                yield kc(K, L.auth);
                                const oe = yield gn(L);
                                return K._openRedirect(L.auth, w, "reauthViaRedirect", oe)
                            })).apply(this, arguments)
                        }

                        function X(P, w, C) {
                            return function he(P, w, C) {
                                return De.apply(this, arguments)
                            }(P, w, C)
                        }

                        function De() {
                            return (De = (0, r.Z)(function*(P, w, C) {
                                const L = (0, y.m9)(P);
                                Ge(L.auth, w, mo);
                                const K = Na(L.auth, C);
                                yield jr(!1, L, w.providerId), yield kc(K, L.auth);
                                const oe = yield gn(L);
                                return K._openRedirect(L.auth, w, "linkViaRedirect", oe)
                            })).apply(this, arguments)
                        }

                        function Ye(P, w) {
                            return Xe.apply(this, arguments)
                        }

                        function Xe() {
                            return (Xe = (0, r.Z)(function*(P, w) {
                                return yield Qt(P)._initializationPromise, It(P, w, !1)
                            })).apply(this, arguments)
                        }

                        function It(P, w) {
                            return on.apply(this, arguments)
                        }

                        function on() {
                            return (on = (0, r.Z)(function*(P, w, C = !1) {
                                const L = Qt(P),
                                    K = Na(L, w),
                                    Le = yield new Ki(L, K, C).execute();
                                return Le && !C && (delete Le.user._redirectEventId, yield L._persistUserIfCurrent(Le.user), yield L._setRedirectUser(null, w)), Le
                            })).apply(this, arguments)
                        }

                        function gn(P) {
                            return fn.apply(this, arguments)
                        }

                        function fn() {
                            return (fn = (0, r.Z)(function*(P) {
                                const w = pa(`${P.uid}:::`);
                                return P._redirectEventId = w, yield P.auth._setRedirectUser(P), yield P.auth._persistUserIfCurrent(P), w
                            })).apply(this, arguments)
                        }
                        class Wi {
                            constructor(w) {
                                this.auth = w, this.cachedEventUids = new Set, this.consumers = new Set, this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1, this.lastProcessedEventTime = Date.now()
                            }
                            registerConsumer(w) {
                                this.consumers.add(w), this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, w) && (this.sendToConsumer(this.queuedRedirectEvent, w), this.saveEventToCache(this.queuedRedirectEvent), this.queuedRedirectEvent = null)
                            }
                            unregisterConsumer(w) {
                                this.consumers.delete(w)
                            }
                            onEvent(w) {
                                if (this.hasEventBeenHandled(w)) return !1;
                                let C = !1;
                                return this.consumers.forEach(L => {
                                    this.isEventForConsumer(w, L) && (C = !0, this.sendToConsumer(w, L), this.saveEventToCache(w))
                                }), this.hasHandledPotentialRedirect || ! function zl(P) {
                                    switch (P.type) {
                                        case "signInViaRedirect":
                                        case "linkViaRedirect":
                                        case "reauthViaRedirect":
                                            return !0;
                                        case "unknown":
                                            return Dr(P);
                                        default:
                                            return !1
                                    }
                                }(w) || (this.hasHandledPotentialRedirect = !0, C || (this.queuedRedirectEvent = w, C = !0)), C
                            }
                            sendToConsumer(w, C) {
                                var L;
                                if (w.error && !Dr(w)) {
                                    const K = (null === (L = w.error.code) || void 0 === L ? void 0 : L.split("auth/")[1]) || "internal-error";
                                    C.onError(it(this.auth, K))
                                } else C.onAuthEvent(w)
                            }
                            isEventForConsumer(w, C) {
                                const L = null === C.eventId || !!w.eventId && w.eventId === C.eventId;
                                return C.filter.includes(w.type) && L
                            }
                            hasEventBeenHandled(w) {
                                return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(fo(w))
                            }
                            saveEventToCache(w) {
                                this.cachedEventUids.add(fo(w)), this.lastProcessedEventTime = Date.now()
                            }
                        }

                        function fo(P) {
                            return [P.type, P.eventId, P.sessionId, P.tenantId].filter(w => w).join("-")
                        }

                        function Dr({
                            type: P,
                            error: w
                        }) {
                            return "unknown" === P && "auth/no-auth-event" === w ? .code
                        }

                        function Ws(P) {
                            return Oc.apply(this, arguments)
                        }

                        function Oc() {
                            return (Oc = (0, r.Z)(function*(P, w = {}) {
                                return Dn(P, "GET", "/v1/projects", w)
                            })).apply(this, arguments)
                        }
                        const pu = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
                            So = /^https?/;

                        function Gs() {
                            return (Gs = (0, r.Z)(function*(P) {
                                if (P.config.emulator) return;
                                const {
                                    authorizedDomains: w
                                } = yield Ws(P);
                                for (const C of w) try {
                                    if (Ku(C)) return
                                } catch {}
                                At(P, "unauthorized-domain")
                            })).apply(this, arguments)
                        }

                        function Ku(P) {
                            const w = ft(),
                                {
                                    protocol: C,
                                    hostname: L
                                } = new URL(w);
                            if (P.startsWith("chrome-extension://")) {
                                const Le = new URL(P);
                                return "" === Le.hostname && "" === L ? "chrome-extension:" === C && P.replace("chrome-extension://", "") === w.replace("chrome-extension://", "") : "chrome-extension:" === C && Le.hostname === L
                            }
                            if (!So.test(C)) return !1;
                            if (pu.test(P)) return L === P;
                            const K = P.replace(/\./g, "\\.");
                            return new RegExp("^(.+\\." + K + "|" + K + ")$", "i").test(L)
                        }
                        const sm = new Mt(3e4, 6e4);

                        function ap() {
                            const P = br().___jsl;
                            if (P ? .H)
                                for (const w of Object.keys(P.H))
                                    if (P.H[w].r = P.H[w].r || [], P.H[w].L = P.H[w].L || [], P.H[w].r = [...P.H[w].L], P.CP)
                                        for (let C = 0; C < P.CP.length; C++) P.CP[C] = null
                        }
                        let ml = null;

                        function ad(P) {
                            return ml = ml || function mu(P) {
                                return new Promise((w, C) => {
                                    var L, K, oe;

                                    function Le() {
                                        ap(), gapi.load("gapi.iframes", {
                                            callback: () => {
                                                w(gapi.iframes.getContext())
                                            },
                                            ontimeout: () => {
                                                ap(), C(it(P, "network-request-failed"))
                                            },
                                            timeout: sm.get()
                                        })
                                    }
                                    if (null !== (K = null === (L = br().gapi) || void 0 === L ? void 0 : L.iframes) && void 0 !== K && K.Iframe) w(gapi.iframes.getContext());
                                    else {
                                        if (null === (oe = br().gapi) || void 0 === oe || !oe.load) {
                                            const ct = vc("iframefcb");
                                            return br()[ct] = () => {
                                                gapi.load ? Le() : C(it(P, "network-request-failed"))
                                            }, jl(`https://apis.google.com/js/api.js?onload=${ct}`).catch(Wt => C(Wt))
                                        }
                                        Le()
                                    }
                                }).catch(w => {
                                    throw ml = null, w
                                })
                            }(P), ml
                        }
                        const xs = new Mt(5e3, 15e3),
                            S = {
                                style: {
                                    position: "absolute",
                                    top: "-100px",
                                    width: "1px",
                                    height: "1px"
                                },
                                "aria-hidden": "true",
                                tabindex: "-1"
                            },
                            Y = new Map([
                                ["identitytoolkit.googleapis.com", "p"],
                                ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
                                ["test-identitytoolkit.sandbox.googleapis.com", "t"]
                            ]);

                        function G(P) {
                            const w = P.config;
                            Ee(w.authDomain, P, "auth-domain-config-required");
                            const C = w.emulator ? ki(w, "emulator/auth/iframe") : `https://${P.config.authDomain}/__/auth/iframe`,
                                L = {
                                    apiKey: w.apiKey,
                                    appName: P.name,
                                    v: x.SDK_VERSION
                                },
                                K = Y.get(P.config.apiHost);
                            K && (L.eid = K);
                            const oe = P._getFrameworks();
                            return oe.length && (L.fw = oe.join(",")), `${C}?${(0,y.xO)(L).slice(1)}`
                        }

                        function be() {
                            return be = (0, r.Z)(function*(P) {
                                const w = yield ad(P), C = br().gapi;
                                return Ee(C, P, "internal-error"), w.open({
                                    where: document.body,
                                    url: G(P),
                                    messageHandlersFilter: C.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
                                    attributes: S,
                                    dontclear: !0
                                }, L => new Promise(function() {
                                    var K = (0, r.Z)(function*(oe, Le) {
                                        yield L.restyle({
                                            setHideOnLeave: !1
                                        });
                                        const ct = it(P, "network-request-failed"),
                                            Wt = br().setTimeout(() => {
                                                Le(ct)
                                            }, xs.get());

                                        function ln() {
                                            br().clearTimeout(Wt), oe(L)
                                        }
                                        L.ping(ln).then(ln, () => {
                                            Le(ct)
                                        })
                                    });
                                    return function(oe, Le) {
                                        return K.apply(this, arguments)
                                    }
                                }()))
                            }), be.apply(this, arguments)
                        }
                        const je = {
                            location: "yes",
                            resizable: "yes",
                            statusbar: "yes",
                            toolbar: "no"
                        };
                        class Wl {
                            constructor(w) {
                                this.window = w, this.associatedEvent = null
                            }
                            close() {
                                if (this.window) try {
                                    this.window.close()
                                } catch {}
                            }
                        }

                        function zr(P, w, C, L, K, oe) {
                            Ee(P.config.authDomain, P, "auth-domain-config-required"), Ee(P.config.apiKey, P, "invalid-api-key");
                            const Le = {
                                apiKey: P.config.apiKey,
                                appName: P.name,
                                authType: C,
                                redirectUrl: L,
                                v: x.SDK_VERSION,
                                eventId: K
                            };
                            if (w instanceof mo) {
                                w.setDefaultLanguage(P.languageCode), Le.providerId = w.providerId || "", (0, y.xb)(w.getCustomParameters()) || (Le.customParameters = JSON.stringify(w.getCustomParameters()));
                                for (const [Wt, ln] of Object.entries(oe || {})) Le[Wt] = ln
                            }
                            if (w instanceof lc) {
                                const Wt = w.getScopes().filter(ln => "" !== ln);
                                Wt.length > 0 && (Le.scopes = Wt.join(","))
                            }
                            P.tenantId && (Le.tid = P.tenantId);
                            const ct = Le;
                            for (const Wt of Object.keys(ct)) void 0 === ct[Wt] && delete ct[Wt];
                            return `${function ks({config:P}){return P.emulator?ki(P,"emulator/auth/handler"):`