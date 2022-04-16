// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cX96g":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d9fa1eccb09edd77";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3B1EN":[function(require,module,exports) {
var _colyseusJs = require("colyseus.js");
var _randomBot = require("./RandomBot");
const { createGame  } = require("./game");
async function joinRoom(playerPromise) {
    const client = new _colyseusJs.Client('ws://localhost:2567');
    // Need to wait before we join the room, or we may miss the
    // first message with our updateed state
    let player = await playerPromise;
    const room = await client.joinOrCreate("poker");
    player.setUserId(room.sessionId);
    player.setRoom(room);
    room.state.onChange = (changes)=>{
        player.onStateChanges(changes);
    };
    room.onMessage("state-update", (newState)=>{
        console.log(newState);
        console.log(JSON.stringify(newState));
        player.updateState(newState);
    });
    room.onMessage("error", (errorMessage)=>{
        player.onServerError(errorMessage);
    });
    room.onLeave((code)=>{
        console.log("client left the room");
    });
}
function startRandomBot() {
    let element = document.getElementById('game-modes');
    element.remove();
    element = document.getElementById('canvas');
    element.remove();
    joinRoom(new Promise((resolve, reject)=>{
        resolve(new _randomBot.RandomBot());
    }));
}
function startGame() {
    const element = document.getElementById('game-modes');
    element.remove();
    let renderer = createGame();
    // The scene is not ready yet, so we need to use a 
    // promise for the player intead
    joinRoom(new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(renderer.scenes[0]);
        }, 300);
    }));
}
console.log("in my dev index!!!");
window.startGame = startGame;
window.startRandomBot = startRandomBot;

},{"colyseus.js":"1QKAp","./RandomBot":"he2do","./game":"6aAXe"}],"1QKAp":[function(require,module,exports) {
var global = arguments[3];
// colyseus.js@0.14.13 (@colyseus/schema 1.0.25)
(function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    'use strict';
    //
    // Polyfills for legacy environments
    //
    /*
     * Support Android 4.4.x
     */ if (!ArrayBuffer.isView) ArrayBuffer.isView = function(a) {
        return a !== null && typeof a === 'object' && a.buffer instanceof ArrayBuffer;
    };
    // Define globalThis if not available.
    // https://github.com/colyseus/colyseus.js/issues/86
    if (typeof globalThis === "undefined" && typeof window !== "undefined") // @ts-ignore
    window['globalThis'] = window;
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ /* global Reflect, Promise */ var extendStatics1 = function(d1, b1) {
        extendStatics1 = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics1(d1, b1);
    };
    function __extends1(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics1(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
                resolve(value);
            });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = {
            label: 0,
            sent: function() {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        }, f, y, t, g;
        return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
        }), g;
        function verb(n) {
            return function(v) {
                return step([
                    n,
                    v
                ]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while(_)try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [
                    op[0] & 2,
                    t.value
                ];
                switch(op[0]){
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false
                        };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [
                            0
                        ];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [
                    6,
                    e
                ];
                y = 0;
            } finally{
                f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
    }
    function apply(src, tar) {
        tar.headers = src.headers || {};
        tar.statusMessage = src.statusText;
        tar.statusCode = src.status;
        tar.data = src.response;
    }
    function send(method, uri, opts) {
        return new Promise(function(res, rej) {
            opts = opts || {};
            var req = new XMLHttpRequest;
            var k, tmp, arr, str = opts.body;
            var headers = opts.headers || {};
            // IE compatible
            if (opts.timeout) req.timeout = opts.timeout;
            req.ontimeout = req.onerror = function(err) {
                err.timeout = err.type == 'timeout';
                rej(err);
            };
            req.open(method, uri.href || uri);
            req.onload = function() {
                arr = req.getAllResponseHeaders().trim().split(/[\r\n]+/);
                apply(req, req); //=> req.headers
                while(tmp = arr.shift()){
                    tmp = tmp.split(': ');
                    req.headers[tmp.shift().toLowerCase()] = tmp.join(': ');
                }
                tmp = req.headers['content-type'];
                if (tmp && !!~tmp.indexOf('application/json')) try {
                    req.data = JSON.parse(req.data, opts.reviver);
                } catch (err) {
                    apply(req, err);
                    return rej(err);
                }
                (req.status >= 400 ? rej : res)(req);
            };
            if (typeof FormData < 'u' && str instanceof FormData) ;
            else if (str && typeof str == 'object') {
                headers['content-type'] = 'application/json';
                str = JSON.stringify(str);
            }
            req.withCredentials = !!opts.withCredentials;
            for(k in headers)req.setRequestHeader(k, headers[k]);
            req.send(str);
        });
    }
    var get = /*#__PURE__*/ send.bind(send, 'GET');
    var post = /*#__PURE__*/ send.bind(send, 'POST');
    var patch = /*#__PURE__*/ send.bind(send, 'PATCH');
    var del = /*#__PURE__*/ send.bind(send, 'DELETE');
    var put = /*#__PURE__*/ send.bind(send, 'PUT');
    var del_1 = del;
    var get_1 = get;
    var patch_1 = patch;
    var post_1 = post;
    var put_1 = put;
    var send_1 = send;
    var xhr = {
        del: del_1,
        get: get_1,
        patch: patch_1,
        post: post_1,
        put: put_1,
        send: send_1
    };
    var http = /*#__PURE__*/ Object.freeze(/*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.create(null), xhr, {
        'default': xhr,
        del: del_1,
        get: get_1,
        patch: patch_1,
        post: post_1,
        put: put_1,
        send: send_1
    }));
    var ServerError1 = /** @class */ function(_super) {
        __extends1(ServerError, _super);
        function ServerError(code, message) {
            var _this = _super.call(this, message) || this;
            _this.name = "ServerError";
            _this.code = code;
            return _this;
        }
        return ServerError;
    }(Error);
    /**
     * Copyright (c) 2014 Ion Drive Software Ltd.
     * https://github.com/darrachequesne/notepack/
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     */ /**
     * Patch for Colyseus:
     * -------------------
     *
     * added `offset` on Decoder constructor, for messages arriving with a code
     * before actual msgpack data
     */ // 
    // DECODER
    // 
    function Decoder(buffer, offset) {
        this._offset = offset;
        if (buffer instanceof ArrayBuffer) {
            this._buffer = buffer;
            this._view = new DataView(this._buffer);
        } else if (ArrayBuffer.isView(buffer)) {
            this._buffer = buffer.buffer;
            this._view = new DataView(this._buffer, buffer.byteOffset, buffer.byteLength);
        } else throw new Error('Invalid argument');
    }
    function utf8Read$1(view, offset, length) {
        var string = '', chr = 0;
        for(var i = offset, end = offset + length; i < end; i++){
            var byte = view.getUint8(i);
            if ((byte & 128) === 0) {
                string += String.fromCharCode(byte);
                continue;
            }
            if ((byte & 224) === 192) {
                string += String.fromCharCode((byte & 31) << 6 | view.getUint8(++i) & 63);
                continue;
            }
            if ((byte & 240) === 224) {
                string += String.fromCharCode((byte & 15) << 12 | (view.getUint8(++i) & 63) << 6 | (view.getUint8(++i) & 63) << 0);
                continue;
            }
            if ((byte & 248) === 240) {
                chr = (byte & 7) << 18 | (view.getUint8(++i) & 63) << 12 | (view.getUint8(++i) & 63) << 6 | (view.getUint8(++i) & 63) << 0;
                if (chr >= 65536) {
                    chr -= 65536;
                    string += String.fromCharCode((chr >>> 10) + 55296, (chr & 1023) + 56320);
                } else string += String.fromCharCode(chr);
                continue;
            }
            throw new Error('Invalid byte ' + byte.toString(16));
        }
        return string;
    }
    Decoder.prototype._array = function(length) {
        var value = new Array(length);
        for(var i = 0; i < length; i++)value[i] = this._parse();
        return value;
    };
    Decoder.prototype._map = function(length) {
        var key = '', value = {};
        for(var i = 0; i < length; i++){
            key = this._parse();
            value[key] = this._parse();
        }
        return value;
    };
    Decoder.prototype._str = function(length) {
        var value = utf8Read$1(this._view, this._offset, length);
        this._offset += length;
        return value;
    };
    Decoder.prototype._bin = function(length) {
        var value = this._buffer.slice(this._offset, this._offset + length);
        this._offset += length;
        return value;
    };
    Decoder.prototype._parse = function() {
        var prefix = this._view.getUint8(this._offset++);
        var value, length = 0, type = 0, hi = 0, lo = 0;
        if (prefix < 192) {
            // positive fixint
            if (prefix < 128) return prefix;
            // fixmap
            if (prefix < 144) return this._map(prefix & 15);
            // fixarray
            if (prefix < 160) return this._array(prefix & 15);
            // fixstr
            return this._str(prefix & 31);
        }
        // negative fixint
        if (prefix > 223) return (255 - prefix + 1) * -1;
        switch(prefix){
            // nil
            case 192:
                return null;
            // false
            case 194:
                return false;
            // true
            case 195:
                return true;
            // bin
            case 196:
                length = this._view.getUint8(this._offset);
                this._offset += 1;
                return this._bin(length);
            case 197:
                length = this._view.getUint16(this._offset);
                this._offset += 2;
                return this._bin(length);
            case 198:
                length = this._view.getUint32(this._offset);
                this._offset += 4;
                return this._bin(length);
            // ext
            case 199:
                length = this._view.getUint8(this._offset);
                type = this._view.getInt8(this._offset + 1);
                this._offset += 2;
                return [
                    type,
                    this._bin(length)
                ];
            case 200:
                length = this._view.getUint16(this._offset);
                type = this._view.getInt8(this._offset + 2);
                this._offset += 3;
                return [
                    type,
                    this._bin(length)
                ];
            case 201:
                length = this._view.getUint32(this._offset);
                type = this._view.getInt8(this._offset + 4);
                this._offset += 5;
                return [
                    type,
                    this._bin(length)
                ];
            // float
            case 202:
                value = this._view.getFloat32(this._offset);
                this._offset += 4;
                return value;
            case 203:
                value = this._view.getFloat64(this._offset);
                this._offset += 8;
                return value;
            // uint
            case 204:
                value = this._view.getUint8(this._offset);
                this._offset += 1;
                return value;
            case 205:
                value = this._view.getUint16(this._offset);
                this._offset += 2;
                return value;
            case 206:
                value = this._view.getUint32(this._offset);
                this._offset += 4;
                return value;
            case 207:
                hi = this._view.getUint32(this._offset) * Math.pow(2, 32);
                lo = this._view.getUint32(this._offset + 4);
                this._offset += 8;
                return hi + lo;
            // int
            case 208:
                value = this._view.getInt8(this._offset);
                this._offset += 1;
                return value;
            case 209:
                value = this._view.getInt16(this._offset);
                this._offset += 2;
                return value;
            case 210:
                value = this._view.getInt32(this._offset);
                this._offset += 4;
                return value;
            case 211:
                hi = this._view.getInt32(this._offset) * Math.pow(2, 32);
                lo = this._view.getUint32(this._offset + 4);
                this._offset += 8;
                return hi + lo;
            // fixext
            case 212:
                type = this._view.getInt8(this._offset);
                this._offset += 1;
                if (type === 0) {
                    this._offset += 1;
                    return void 0;
                }
                return [
                    type,
                    this._bin(1)
                ];
            case 213:
                type = this._view.getInt8(this._offset);
                this._offset += 1;
                return [
                    type,
                    this._bin(2)
                ];
            case 214:
                type = this._view.getInt8(this._offset);
                this._offset += 1;
                return [
                    type,
                    this._bin(4)
                ];
            case 215:
                type = this._view.getInt8(this._offset);
                this._offset += 1;
                if (type === 0) {
                    hi = this._view.getInt32(this._offset) * Math.pow(2, 32);
                    lo = this._view.getUint32(this._offset + 4);
                    this._offset += 8;
                    return new Date(hi + lo);
                }
                return [
                    type,
                    this._bin(8)
                ];
            case 216:
                type = this._view.getInt8(this._offset);
                this._offset += 1;
                return [
                    type,
                    this._bin(16)
                ];
            // str
            case 217:
                length = this._view.getUint8(this._offset);
                this._offset += 1;
                return this._str(length);
            case 218:
                length = this._view.getUint16(this._offset);
                this._offset += 2;
                return this._str(length);
            case 219:
                length = this._view.getUint32(this._offset);
                this._offset += 4;
                return this._str(length);
            // array
            case 220:
                length = this._view.getUint16(this._offset);
                this._offset += 2;
                return this._array(length);
            case 221:
                length = this._view.getUint32(this._offset);
                this._offset += 4;
                return this._array(length);
            // map
            case 222:
                length = this._view.getUint16(this._offset);
                this._offset += 2;
                return this._map(length);
            case 223:
                length = this._view.getUint32(this._offset);
                this._offset += 4;
                return this._map(length);
        }
        throw new Error('Could not parse');
    };
    function decode1(buffer, offset) {
        if (offset === void 0) offset = 0;
        var decoder = new Decoder(buffer, offset);
        var value = decoder._parse();
        if (decoder._offset !== buffer.byteLength) throw new Error(buffer.byteLength - decoder._offset + ' trailing bytes');
        return value;
    }
    // 
    // ENCODER
    // 
    function utf8Write1(view, offset, str) {
        var c = 0;
        for(var i = 0, l = str.length; i < l; i++){
            c = str.charCodeAt(i);
            if (c < 128) view.setUint8(offset++, c);
            else if (c < 2048) {
                view.setUint8(offset++, 192 | c >> 6);
                view.setUint8(offset++, 128 | c & 63);
            } else if (c < 55296 || c >= 57344) {
                view.setUint8(offset++, 224 | c >> 12);
                view.setUint8(offset++, 128 | c >> 6 & 63);
                view.setUint8(offset++, 128 | c & 63);
            } else {
                i++;
                c = 65536 + ((c & 1023) << 10 | str.charCodeAt(i) & 1023);
                view.setUint8(offset++, 240 | c >> 18);
                view.setUint8(offset++, 128 | c >> 12 & 63);
                view.setUint8(offset++, 128 | c >> 6 & 63);
                view.setUint8(offset++, 128 | c & 63);
            }
        }
    }
    function utf8Length$1(str) {
        var c = 0, length = 0;
        for(var i = 0, l = str.length; i < l; i++){
            c = str.charCodeAt(i);
            if (c < 128) length += 1;
            else if (c < 2048) length += 2;
            else if (c < 55296 || c >= 57344) length += 3;
            else {
                i++;
                length += 4;
            }
        }
        return length;
    }
    function _encode(bytes, defers, value) {
        var type = typeof value, i = 0, l = 0, hi = 0, lo = 0, length = 0, size = 0;
        if (type === 'string') {
            length = utf8Length$1(value);
            // fixstr
            if (length < 32) {
                bytes.push(length | 160);
                size = 1;
            } else if (length < 256) {
                bytes.push(217, length);
                size = 2;
            } else if (length < 65536) {
                bytes.push(218, length >> 8, length);
                size = 3;
            } else if (length < 4294967296) {
                bytes.push(219, length >> 24, length >> 16, length >> 8, length);
                size = 5;
            } else throw new Error('String too long');
            defers.push({
                _str: value,
                _length: length,
                _offset: bytes.length
            });
            return size + length;
        }
        if (type === 'number') {
            // TODO: encode to float 32?
            // float 64
            if (Math.floor(value) !== value || !isFinite(value)) {
                bytes.push(203);
                defers.push({
                    _float: value,
                    _length: 8,
                    _offset: bytes.length
                });
                return 9;
            }
            if (value >= 0) {
                // positive fixnum
                if (value < 128) {
                    bytes.push(value);
                    return 1;
                }
                // uint 8
                if (value < 256) {
                    bytes.push(204, value);
                    return 2;
                }
                // uint 16
                if (value < 65536) {
                    bytes.push(205, value >> 8, value);
                    return 3;
                }
                // uint 32
                if (value < 4294967296) {
                    bytes.push(206, value >> 24, value >> 16, value >> 8, value);
                    return 5;
                }
                // uint 64
                hi = value / Math.pow(2, 32) >> 0;
                lo = value >>> 0;
                bytes.push(207, hi >> 24, hi >> 16, hi >> 8, hi, lo >> 24, lo >> 16, lo >> 8, lo);
                return 9;
            } else {
                // negative fixnum
                if (value >= -32) {
                    bytes.push(value);
                    return 1;
                }
                // int 8
                if (value >= -128) {
                    bytes.push(208, value);
                    return 2;
                }
                // int 16
                if (value >= -32768) {
                    bytes.push(209, value >> 8, value);
                    return 3;
                }
                // int 32
                if (value >= -2147483648) {
                    bytes.push(210, value >> 24, value >> 16, value >> 8, value);
                    return 5;
                }
                // int 64
                hi = Math.floor(value / Math.pow(2, 32));
                lo = value >>> 0;
                bytes.push(211, hi >> 24, hi >> 16, hi >> 8, hi, lo >> 24, lo >> 16, lo >> 8, lo);
                return 9;
            }
        }
        if (type === 'object') {
            // nil
            if (value === null) {
                bytes.push(192);
                return 1;
            }
            if (Array.isArray(value)) {
                length = value.length;
                // fixarray
                if (length < 16) {
                    bytes.push(length | 144);
                    size = 1;
                } else if (length < 65536) {
                    bytes.push(220, length >> 8, length);
                    size = 3;
                } else if (length < 4294967296) {
                    bytes.push(221, length >> 24, length >> 16, length >> 8, length);
                    size = 5;
                } else throw new Error('Array too large');
                for(i = 0; i < length; i++)size += _encode(bytes, defers, value[i]);
                return size;
            }
            // fixext 8 / Date
            if (value instanceof Date) {
                var time = value.getTime();
                hi = Math.floor(time / Math.pow(2, 32));
                lo = time >>> 0;
                bytes.push(215, 0, hi >> 24, hi >> 16, hi >> 8, hi, lo >> 24, lo >> 16, lo >> 8, lo);
                return 10;
            }
            if (value instanceof ArrayBuffer) {
                length = value.byteLength;
                // bin 8
                if (length < 256) {
                    bytes.push(196, length);
                    size = 2;
                } else // bin 16
                if (length < 65536) {
                    bytes.push(197, length >> 8, length);
                    size = 3;
                } else // bin 32
                if (length < 4294967296) {
                    bytes.push(198, length >> 24, length >> 16, length >> 8, length);
                    size = 5;
                } else throw new Error('Buffer too large');
                defers.push({
                    _bin: value,
                    _length: length,
                    _offset: bytes.length
                });
                return size + length;
            }
            if (typeof value.toJSON === 'function') return _encode(bytes, defers, value.toJSON());
            var keys = [], key = '';
            var allKeys = Object.keys(value);
            for(i = 0, l = allKeys.length; i < l; i++){
                key = allKeys[i];
                if (typeof value[key] !== 'function') keys.push(key);
            }
            length = keys.length;
            // fixmap
            if (length < 16) {
                bytes.push(length | 128);
                size = 1;
            } else if (length < 65536) {
                bytes.push(222, length >> 8, length);
                size = 3;
            } else if (length < 4294967296) {
                bytes.push(223, length >> 24, length >> 16, length >> 8, length);
                size = 5;
            } else throw new Error('Object too large');
            for(i = 0; i < length; i++){
                key = keys[i];
                size += _encode(bytes, defers, key);
                size += _encode(bytes, defers, value[key]);
            }
            return size;
        }
        // false/true
        if (type === 'boolean') {
            bytes.push(value ? 195 : 194);
            return 1;
        }
        // fixext 1 / undefined
        if (type === 'undefined') {
            bytes.push(212, 0, 0);
            return 3;
        }
        throw new Error('Could not encode');
    }
    function encode1(value) {
        var bytes = [];
        var defers = [];
        var size = _encode(bytes, defers, value);
        var buf = new ArrayBuffer(size);
        var view = new DataView(buf);
        var deferIndex = 0;
        var deferWritten = 0;
        var nextOffset = -1;
        if (defers.length > 0) nextOffset = defers[0]._offset;
        var defer, deferLength = 0, offset = 0;
        for(var i = 0, l = bytes.length; i < l; i++){
            view.setUint8(deferWritten + i, bytes[i]);
            if (i + 1 !== nextOffset) continue;
            defer = defers[deferIndex];
            deferLength = defer._length;
            offset = deferWritten + nextOffset;
            if (defer._bin) {
                var bin = new Uint8Array(defer._bin);
                for(var j = 0; j < deferLength; j++)view.setUint8(offset + j, bin[j]);
            } else if (defer._str) utf8Write1(view, offset, defer._str);
            else if (defer._float !== undefined) view.setFloat64(offset, defer._float);
            deferIndex++;
            deferWritten += deferLength;
            if (defers[deferIndex]) nextOffset = defers[deferIndex]._offset;
        }
        return buf;
    }
    var browser = function() {
        throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
    };
    var WebSocket = globalThis.WebSocket || browser;
    var WebSocketTransport1 = /** @class */ function() {
        function WebSocketTransport(events) {
            this.events = events;
        }
        WebSocketTransport.prototype.send = function(data) {
            if (data instanceof ArrayBuffer) this.ws.send(data);
            else if (Array.isArray(data)) this.ws.send(new Uint8Array(data).buffer);
        };
        WebSocketTransport.prototype.connect = function(url) {
            this.ws = new WebSocket(url, this.protocols);
            this.ws.binaryType = 'arraybuffer';
            this.ws.onopen = this.events.onopen;
            this.ws.onmessage = this.events.onmessage;
            this.ws.onclose = this.events.onclose;
            this.ws.onerror = this.events.onerror;
        };
        WebSocketTransport.prototype.close = function(code, reason) {
            this.ws.close(code, reason);
        };
        return WebSocketTransport;
    }();
    var Connection1 = /** @class */ function() {
        function Connection() {
            this.events = {};
            this.transport = new WebSocketTransport1(this.events);
        }
        Connection.prototype.send = function(data) {
            this.transport.send(data);
        };
        Connection.prototype.connect = function(url) {
            this.transport.connect(url);
        };
        Connection.prototype.close = function(code, reason) {
            this.transport.close(code, reason);
        };
        return Connection;
    }();
    var serializers = {};
    function registerSerializer(id, serializer) {
        serializers[id] = serializer;
    }
    function getSerializer(id) {
        var serializer = serializers[id];
        if (!serializer) throw new Error("missing serializer: " + id);
        return serializer;
    }
    // Use codes between 0~127 for lesser throughput (1 byte)
    exports1.Protocol = void 0;
    (function(Protocol) {
        // Room-related (10~19)
        Protocol[Protocol["HANDSHAKE"] = 9] = "HANDSHAKE";
        Protocol[Protocol["JOIN_ROOM"] = 10] = "JOIN_ROOM";
        Protocol[Protocol["ERROR"] = 11] = "ERROR";
        Protocol[Protocol["LEAVE_ROOM"] = 12] = "LEAVE_ROOM";
        Protocol[Protocol["ROOM_DATA"] = 13] = "ROOM_DATA";
        Protocol[Protocol["ROOM_STATE"] = 14] = "ROOM_STATE";
        Protocol[Protocol["ROOM_STATE_PATCH"] = 15] = "ROOM_STATE_PATCH";
        Protocol[Protocol["ROOM_DATA_SCHEMA"] = 16] = "ROOM_DATA_SCHEMA";
    })(exports1.Protocol || (exports1.Protocol = {}));
    exports1.ErrorCode = void 0;
    (function(ErrorCode) {
        ErrorCode[ErrorCode["MATCHMAKE_NO_HANDLER"] = 4210] = "MATCHMAKE_NO_HANDLER";
        ErrorCode[ErrorCode["MATCHMAKE_INVALID_CRITERIA"] = 4211] = "MATCHMAKE_INVALID_CRITERIA";
        ErrorCode[ErrorCode["MATCHMAKE_INVALID_ROOM_ID"] = 4212] = "MATCHMAKE_INVALID_ROOM_ID";
        ErrorCode[ErrorCode["MATCHMAKE_UNHANDLED"] = 4213] = "MATCHMAKE_UNHANDLED";
        ErrorCode[ErrorCode["MATCHMAKE_EXPIRED"] = 4214] = "MATCHMAKE_EXPIRED";
        ErrorCode[ErrorCode["AUTH_FAILED"] = 4215] = "AUTH_FAILED";
        ErrorCode[ErrorCode["APPLICATION_ERROR"] = 4216] = "APPLICATION_ERROR";
    })(exports1.ErrorCode || (exports1.ErrorCode = {}));
    function utf8Read1(view, offset) {
        var length = view[offset++];
        var string = '', chr = 0;
        for(var i = offset, end = offset + length; i < end; i++){
            var byte = view[i];
            if ((byte & 128) === 0) {
                string += String.fromCharCode(byte);
                continue;
            }
            if ((byte & 224) === 192) {
                string += String.fromCharCode((byte & 31) << 6 | view[++i] & 63);
                continue;
            }
            if ((byte & 240) === 224) {
                string += String.fromCharCode((byte & 15) << 12 | (view[++i] & 63) << 6 | (view[++i] & 63) << 0);
                continue;
            }
            if ((byte & 248) === 240) {
                chr = (byte & 7) << 18 | (view[++i] & 63) << 12 | (view[++i] & 63) << 6 | (view[++i] & 63) << 0;
                if (chr >= 65536) {
                    chr -= 65536;
                    string += String.fromCharCode((chr >>> 10) + 55296, (chr & 1023) + 56320);
                } else string += String.fromCharCode(chr);
                continue;
            }
            throw new Error('Invalid byte ' + byte.toString(16));
        }
        return string;
    }
    // Faster for short strings than Buffer.byteLength
    function utf8Length1(str) {
        if (str === void 0) str = '';
        var c = 0;
        var length = 0;
        for(var i = 0, l = str.length; i < l; i++){
            c = str.charCodeAt(i);
            if (c < 128) length += 1;
            else if (c < 2048) length += 2;
            else if (c < 55296 || c >= 57344) length += 3;
            else {
                i++;
                length += 4;
            }
        }
        return length + 1;
    }
    let createNanoEvents = ()=>({
            events: {},
            emit (event, ...args) {
                (this.events[event] || []).forEach((i)=>i(...args)
                );
            },
            on (event, cb) {
                (this.events[event] = this.events[event] || []).push(cb);
                return ()=>this.events[event] = (this.events[event] || []).filter((i)=>i !== cb
                    )
                ;
            }
        })
    ;
    var EventEmitter1 = /** @class */ function() {
        function EventEmitter() {
            this.handlers = [];
        }
        EventEmitter.prototype.register = function(cb, once) {
            this.handlers.push(cb);
            return this;
        };
        EventEmitter.prototype.invoke = function() {
            var _this = this;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            this.handlers.forEach(function(handler) {
                return handler.apply(_this, args);
            });
        };
        EventEmitter.prototype.invokeAsync = function() {
            var _this = this;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return Promise.all(this.handlers.map(function(handler) {
                return handler.apply(_this, args);
            }));
        };
        EventEmitter.prototype.remove = function(cb) {
            var index = this.handlers.indexOf(cb);
            this.handlers[index] = this.handlers[this.handlers.length - 1];
            this.handlers.pop();
        };
        EventEmitter.prototype.clear = function() {
            this.handlers = [];
        };
        return EventEmitter;
    }();
    function createSignal() {
        var emitter = new EventEmitter1();
        function register(cb) {
            return emitter.register(cb, this === null);
        }
        register.once = function(cb) {
            var callback = function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                cb.apply(this, args);
                emitter.remove(callback);
            };
            emitter.register(callback);
        };
        register.remove = function(cb) {
            return emitter.remove(cb);
        };
        register.invoke = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return emitter.invoke.apply(emitter, args);
        };
        register.invokeAsync = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return emitter.invokeAsync.apply(emitter, args);
        };
        register.clear = function() {
            return emitter.clear();
        };
        return register;
    }
    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
    function createCommonjsModule(fn) {
        var module = {
            exports: {}
        };
        return fn(module, module.exports), module.exports;
    }
    var umd = createCommonjsModule(function(module, exports2) {
        (function(global, factory) {
            factory(exports2);
        })(commonjsGlobal, function(exports) {
            /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.

        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.

        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d2, b2) {
                extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
                return extendStatics(d2, b2);
            };
            function __extends(d, b) {
                if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __spreadArray(to, from) {
                for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
                return to;
            }
            // export const SWITCH_TO_STRUCTURE = 193; (easily collides with DELETE_AND_ADD + fieldIndex = 2)
            var SWITCH_TO_STRUCTURE = 255; // (decoding collides with DELETE_AND_ADD + fieldIndex = 63)
            var TYPE_ID = 213;
            /**
         * Encoding Schema field operations.
         */ exports.OPERATION = void 0;
            (function(OPERATION) {
                // add new structure/primitive
                OPERATION[OPERATION["ADD"] = 128] = "ADD";
                // replace structure/primitive
                OPERATION[OPERATION["REPLACE"] = 0] = "REPLACE";
                // delete field
                OPERATION[OPERATION["DELETE"] = 64] = "DELETE";
                // DELETE field, followed by an ADD
                OPERATION[OPERATION["DELETE_AND_ADD"] = 192] = "DELETE_AND_ADD";
                // TOUCH is used to determine hierarchy of nested Schema structures during serialization.
                // touches are NOT encoded.
                OPERATION[OPERATION["TOUCH"] = 1] = "TOUCH";
                // MapSchema Operations
                OPERATION[OPERATION["CLEAR"] = 10] = "CLEAR";
            })(exports.OPERATION || (exports.OPERATION = {}));
            // export enum OPERATION {
            //     // add new structure/primitive
            //     // (128)
            //     ADD = 128, // 10000000,
            //     // replace structure/primitive
            //     REPLACE = 1,// 00000001
            //     // delete field
            //     DELETE = 192, // 11000000
            //     // DELETE field, followed by an ADD
            //     DELETE_AND_ADD = 224, // 11100000
            //     // TOUCH is used to determine hierarchy of nested Schema structures during serialization.
            //     // touches are NOT encoded.
            //     TOUCH = 0, // 00000000
            //     // MapSchema Operations
            //     CLEAR = 10,
            // }
            //
            // Root holds all schema references by unique id
            //
            var Root1 = /** @class */ function() {
                function Root() {
                    //
                    // Relation of refId => Schema structure
                    // For direct access of structures during decoding time.
                    //
                    this.refs = new Map();
                    this.refCounts = {};
                    this.deletedRefs = new Set();
                    this.nextUniqueId = 0;
                }
                Root.prototype.getNextUniqueId = function() {
                    return this.nextUniqueId++;
                };
                // for decoding
                Root.prototype.addRef = function(refId, ref, incrementCount) {
                    if (incrementCount === void 0) incrementCount = true;
                    this.refs.set(refId, ref);
                    if (incrementCount) this.refCounts[refId] = (this.refCounts[refId] || 0) + 1;
                };
                // for decoding
                Root.prototype.removeRef = function(refId) {
                    this.refCounts[refId] = this.refCounts[refId] - 1;
                    this.deletedRefs.add(refId);
                };
                Root.prototype.clearRefs = function() {
                    this.refs.clear();
                    this.deletedRefs.clear();
                    this.refCounts = {};
                };
                // for decoding
                Root.prototype.garbageCollectDeletedRefs = function() {
                    var _this = this;
                    this.deletedRefs.forEach(function(refId) {
                        if (_this.refCounts[refId] <= 0) {
                            var ref = _this.refs.get(refId);
                            //
                            // Ensure child schema instances have their references removed as well.
                            //
                            if (ref instanceof Schema1) {
                                for(var fieldName in ref['_definition'].schema)if (typeof ref['_definition'].schema[fieldName] !== "string" && ref[fieldName] && ref[fieldName]['$changes']) _this.removeRef(ref[fieldName]['$changes'].refId);
                            } else {
                                var definition = ref['$changes'].parent._definition;
                                var type = definition.schema[definition.fieldsByIndex[ref['$changes'].parentIndex]];
                                if (typeof Object.values(type)[0] === "function") Array.from(ref.values()).forEach(function(child) {
                                    return _this.removeRef(child['$changes'].refId);
                                });
                            }
                            _this.refs.delete(refId);
                            delete _this.refCounts[refId];
                        }
                    });
                    // clear deleted refs.
                    this.deletedRefs.clear();
                };
                return Root;
            }();
            var ChangeTree1 = /** @class */ function() {
                function ChangeTree(ref, parent, root) {
                    this.changed = false;
                    this.changes = new Map();
                    this.allChanges = new Set();
                    // cached indexes for filtering
                    this.caches = {};
                    this.currentCustomOperation = 0;
                    this.ref = ref;
                    this.setParent(parent, root);
                }
                ChangeTree.prototype.setParent = function(parent, root, parentIndex) {
                    var _this = this;
                    if (!this.indexes) this.indexes = this.ref instanceof Schema1 ? this.ref['_definition'].indexes : {};
                    this.parent = parent;
                    this.parentIndex = parentIndex;
                    // avoid setting parents with empty `root`
                    if (!root) return;
                    this.root = root;
                    //
                    // assign same parent on child structures
                    //
                    if (this.ref instanceof Schema1) {
                        var definition = this.ref['_definition'];
                        for(var field in definition.schema){
                            var value = this.ref[field];
                            if (value && value['$changes']) {
                                var parentIndex_1 = definition.indexes[field];
                                value['$changes'].setParent(this.ref, root, parentIndex_1);
                            }
                        }
                    } else if (typeof this.ref === "object") this.ref.forEach(function(value, key) {
                        if (value instanceof Schema1) {
                            var changeTreee = value['$changes'];
                            var parentIndex_2 = _this.ref['$changes'].indexes[key];
                            changeTreee.setParent(_this.ref, _this.root, parentIndex_2);
                        }
                    });
                };
                ChangeTree.prototype.operation = function(op) {
                    this.changes.set(--this.currentCustomOperation, op);
                };
                ChangeTree.prototype.change = function(fieldName, operation) {
                    if (operation === void 0) operation = exports.OPERATION.ADD;
                    var index = typeof fieldName === "number" ? fieldName : this.indexes[fieldName];
                    this.assertValidIndex(index, fieldName);
                    var previousChange = this.changes.get(index);
                    if (!previousChange || previousChange.op === exports.OPERATION.DELETE || previousChange.op === exports.OPERATION.TOUCH // (mazmorra.io's BattleAction issue)
                    ) this.changes.set(index, {
                        op: !previousChange ? operation : previousChange.op === exports.OPERATION.DELETE ? exports.OPERATION.DELETE_AND_ADD : operation,
                        // : OPERATION.REPLACE,
                        index: index
                    });
                    this.allChanges.add(index);
                    this.changed = true;
                    this.touchParents();
                };
                ChangeTree.prototype.touch = function(fieldName) {
                    var index = typeof fieldName === "number" ? fieldName : this.indexes[fieldName];
                    this.assertValidIndex(index, fieldName);
                    if (!this.changes.has(index)) this.changes.set(index, {
                        op: exports.OPERATION.TOUCH,
                        index: index
                    });
                    this.allChanges.add(index);
                    // ensure touch is placed until the $root is found.
                    this.touchParents();
                };
                ChangeTree.prototype.touchParents = function() {
                    if (this.parent) this.parent['$changes'].touch(this.parentIndex);
                };
                ChangeTree.prototype.getType = function(index) {
                    if (this.ref['_definition']) {
                        var definition = this.ref['_definition'];
                        return definition.schema[definition.fieldsByIndex[index]];
                    } else {
                        var definition = this.parent['_definition'];
                        var parentType = definition.schema[definition.fieldsByIndex[this.parentIndex]];
                        //
                        // Get the child type from parent structure.
                        // - ["string"] => "string"
                        // - { map: "string" } => "string"
                        // - { set: "string" } => "string"
                        //
                        return Object.values(parentType)[0];
                    }
                };
                ChangeTree.prototype.getChildrenFilter = function() {
                    var childFilters = this.parent['_definition'].childFilters;
                    return childFilters && childFilters[this.parentIndex];
                };
                //
                // used during `.encode()`
                //
                ChangeTree.prototype.getValue = function(index) {
                    return this.ref['getByIndex'](index);
                };
                ChangeTree.prototype.delete = function(fieldName) {
                    var index = typeof fieldName === "number" ? fieldName : this.indexes[fieldName];
                    if (index === undefined) {
                        console.warn("@colyseus/schema " + this.ref.constructor.name + ": trying to delete non-existing index: " + fieldName + " (" + index + ")");
                        return;
                    }
                    var previousValue = this.getValue(index);
                    // console.log("$changes.delete =>", { fieldName, index, previousValue });
                    this.changes.set(index, {
                        op: exports.OPERATION.DELETE,
                        index: index
                    });
                    this.allChanges.delete(index);
                    // delete cache
                    delete this.caches[index];
                    // remove `root` reference
                    if (previousValue && previousValue['$changes']) previousValue['$changes'].parent = undefined;
                    this.changed = true;
                    this.touchParents();
                };
                ChangeTree.prototype.discard = function(changed, discardAll) {
                    var _this = this;
                    if (changed === void 0) changed = false;
                    if (discardAll === void 0) discardAll = false;
                    //
                    // Map, Array, etc:
                    // Remove cached key to ensure ADD operations is unsed instead of
                    // REPLACE in case same key is used on next patches.
                    //
                    // TODO: refactor this. this is not relevant for Collection and Set.
                    //
                    if (!(this.ref instanceof Schema1)) this.changes.forEach(function(change) {
                        if (change.op === exports.OPERATION.DELETE) {
                            var index = _this.ref['getIndex'](change.index);
                            delete _this.indexes[index];
                        }
                    });
                    this.changes.clear();
                    this.changed = changed;
                    if (discardAll) this.allChanges.clear();
                    // re-set `currentCustomOperation`
                    this.currentCustomOperation = 0;
                };
                /**
             * Recursively discard all changes from this, and child structures.
             */ ChangeTree.prototype.discardAll = function() {
                    var _this = this;
                    this.changes.forEach(function(change) {
                        var value = _this.getValue(change.index);
                        if (value && value['$changes']) value['$changes'].discardAll();
                    });
                    this.discard();
                };
                // cache(field: number, beginIndex: number, endIndex: number) {
                ChangeTree.prototype.cache = function(field, cachedBytes) {
                    this.caches[field] = cachedBytes;
                };
                ChangeTree.prototype.clone = function() {
                    return new ChangeTree(this.ref, this.parent, this.root);
                };
                ChangeTree.prototype.ensureRefId = function() {
                    // skip if refId is already set.
                    if (this.refId !== undefined) return;
                    this.refId = this.root.getNextUniqueId();
                };
                ChangeTree.prototype.assertValidIndex = function(index, fieldName) {
                    if (index === undefined) throw new Error("ChangeTree: missing index for field \"" + fieldName + "\"");
                };
                return ChangeTree;
            }();
            //
            // Notes:
            // -----
            //
            // - The tsconfig.json of @colyseus/schema uses ES2018.
            // - ES2019 introduces `flatMap` / `flat`, which is not currently relevant, and caused other issues.
            //
            var DEFAULT_SORT = function(a, b) {
                var A = a.toString();
                var B = b.toString();
                if (A < B) return -1;
                else if (A > B) return 1;
                else return 0;
            };
            function getArrayProxy(value) {
                value['$proxy'] = true;
                //
                // compatibility with @colyseus/schema 0.5.x
                // - allow `map["key"]`
                // - allow `map["key"] = "xxx"`
                // - allow `delete map["key"]`
                //
                value = new Proxy(value, {
                    get: function(obj, prop) {
                        if (typeof prop !== "symbol" && !isNaN(prop) // https://stackoverflow.com/a/175787/892698
                        ) return obj.at(prop);
                        else return obj[prop];
                    },
                    set: function(obj, prop, setValue) {
                        if (typeof prop !== "symbol" && !isNaN(prop)) {
                            var indexes = Array.from(obj['$items'].keys());
                            var key = parseInt(indexes[prop] || prop);
                            if (setValue === undefined || setValue === null) obj.deleteAt(key);
                            else obj.setAt(key, setValue);
                        } else obj[prop] = setValue;
                        return true;
                    },
                    deleteProperty: function(obj, prop) {
                        if (typeof prop === "number") obj.deleteAt(prop);
                        else delete obj[prop];
                        return true;
                    }
                });
                return value;
            }
            var ArraySchema1 = /** @class */ function() {
                function ArraySchema() {
                    var items = [];
                    for(var _i = 0; _i < arguments.length; _i++)items[_i] = arguments[_i];
                    this.$changes = new ChangeTree1(this);
                    this.$items = new Map();
                    this.$indexes = new Map();
                    this.$refId = 0;
                    this.push.apply(this, items);
                }
                ArraySchema.is = function(type) {
                    return(// type format: ["string"]
                    Array.isArray(type) || type['array'] !== undefined);
                };
                Object.defineProperty(ArraySchema.prototype, "length", {
                    get: function() {
                        return this.$items.size;
                    },
                    set: function(value) {
                        if (value === 0) this.clear();
                        else this.splice(value, this.length - value);
                    },
                    enumerable: false,
                    configurable: true
                });
                ArraySchema.prototype.push = function() {
                    var _this = this;
                    var values = [];
                    for(var _i = 0; _i < arguments.length; _i++)values[_i] = arguments[_i];
                    var lastIndex;
                    values.forEach(function(value) {
                        // set "index" for reference.
                        lastIndex = _this.$refId++;
                        _this.setAt(lastIndex, value);
                    });
                    return lastIndex;
                };
                /**
             * Removes the last element from an array and returns it.
             */ ArraySchema.prototype.pop = function() {
                    var key = Array.from(this.$indexes.values()).pop();
                    if (key === undefined) return undefined;
                    this.$changes.delete(key);
                    this.$indexes.delete(key);
                    var value = this.$items.get(key);
                    this.$items.delete(key);
                    return value;
                };
                ArraySchema.prototype.at = function(index) {
                    //
                    // FIXME: this should be O(1)
                    //
                    var key = Array.from(this.$items.keys())[index];
                    return this.$items.get(key);
                };
                ArraySchema.prototype.setAt = function(index, value) {
                    var _a, _b;
                    if (value['$changes'] !== undefined) value['$changes'].setParent(this, this.$changes.root, index);
                    var operation = (_b = (_a = this.$changes.indexes[index]) === null || _a === void 0 ? void 0 : _a.op) !== null && _b !== void 0 ? _b : exports.OPERATION.ADD;
                    this.$changes.indexes[index] = index;
                    this.$indexes.set(index, index);
                    this.$items.set(index, value);
                    this.$changes.change(index, operation);
                };
                ArraySchema.prototype.deleteAt = function(index) {
                    var key = Array.from(this.$items.keys())[index];
                    if (key === undefined) return false;
                    return this.$deleteAt(key);
                };
                ArraySchema.prototype.$deleteAt = function(index) {
                    // delete at internal index
                    this.$changes.delete(index);
                    this.$indexes.delete(index);
                    return this.$items.delete(index);
                };
                ArraySchema.prototype.clear = function(isDecoding) {
                    var _this = this;
                    // discard previous operations.
                    this.$changes.discard(true, true);
                    this.$changes.indexes = {};
                    // clear previous indexes
                    this.$indexes.clear();
                    // flag child items for garbage collection.
                    if (isDecoding && typeof this.$changes.getType() !== "string") this.$items.forEach(function(item) {
                        _this.$changes.root.removeRef(item['$changes'].refId);
                    });
                    // clear items
                    this.$items.clear();
                    this.$changes.operation({
                        index: 0,
                        op: exports.OPERATION.CLEAR
                    });
                    // touch all structures until reach root
                    this.$changes.touchParents();
                };
                /**
             * Combines two or more arrays.
             * @param items Additional items to add to the end of array1.
             */ ArraySchema.prototype.concat = function() {
                    var _a;
                    var items = [];
                    for(var _i = 0; _i < arguments.length; _i++)items[_i] = arguments[_i];
                    return new (ArraySchema.bind.apply(ArraySchema, __spreadArray([
                        void 0
                    ], (_a = Array.from(this.$items.values())).concat.apply(_a, items))))();
                };
                /**
             * Adds all the elements of an array separated by the specified separator string.
             * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
             */ ArraySchema.prototype.join = function(separator) {
                    return Array.from(this.$items.values()).join(separator);
                };
                /**
             * Reverses the elements in an Array.
             */ ArraySchema.prototype.reverse = function() {
                    var _this = this;
                    var indexes = Array.from(this.$items.keys());
                    var reversedItems = Array.from(this.$items.values()).reverse();
                    reversedItems.forEach(function(item, i) {
                        _this.setAt(indexes[i], item);
                    });
                    return this;
                };
                /**
             * Removes the first element from an array and returns it.
             */ ArraySchema.prototype.shift = function() {
                    var indexes = Array.from(this.$items.keys());
                    var shiftAt = indexes.shift();
                    if (shiftAt === undefined) return undefined;
                    var value = this.$items.get(shiftAt);
                    this.$deleteAt(shiftAt);
                    return value;
                };
                /**
             * Returns a section of an array.
             * @param start The beginning of the specified portion of the array.
             * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
             */ ArraySchema.prototype.slice = function(start, end) {
                    return new (ArraySchema.bind.apply(ArraySchema, __spreadArray([
                        void 0
                    ], Array.from(this.$items.values()).slice(start, end))))();
                };
                /**
             * Sorts an array.
             * @param compareFn Function used to determine the order of the elements. It is expected to return
             * a negative value if first argument is less than second argument, zero if they're equal and a positive
             * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
             * ```ts
             * [11,2,22,1].sort((a, b) => a - b)
             * ```
             */ ArraySchema.prototype.sort = function(compareFn) {
                    var _this = this;
                    if (compareFn === void 0) compareFn = DEFAULT_SORT;
                    var indexes = Array.from(this.$items.keys());
                    var sortedItems = Array.from(this.$items.values()).sort(compareFn);
                    sortedItems.forEach(function(item, i) {
                        _this.setAt(indexes[i], item);
                    });
                    return this;
                };
                /**
             * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
             * @param start The zero-based location in the array from which to start removing elements.
             * @param deleteCount The number of elements to remove.
             * @param items Elements to insert into the array in place of the deleted elements.
             */ ArraySchema.prototype.splice = function(start, deleteCount) {
                    if (deleteCount === void 0) deleteCount = this.length - start;
                    var items = [];
                    for(var _i = 2; _i < arguments.length; _i++)items[_i - 2] = arguments[_i];
                    var indexes = Array.from(this.$items.keys());
                    var removedItems = [];
                    for(var i = start; i < start + deleteCount; i++){
                        removedItems.push(this.$items.get(indexes[i]));
                        this.$deleteAt(indexes[i]);
                    }
                    return removedItems;
                };
                /**
             * Inserts new elements at the start of an array.
             * @param items  Elements to insert at the start of the Array.
             */ ArraySchema.prototype.unshift = function() {
                    var _this = this;
                    var items = [];
                    for(var _i = 0; _i < arguments.length; _i++)items[_i] = arguments[_i];
                    var length = this.length;
                    var addedLength = items.length;
                    // const indexes = Array.from(this.$items.keys());
                    var previousValues = Array.from(this.$items.values());
                    items.forEach(function(item, i) {
                        _this.setAt(i, item);
                    });
                    previousValues.forEach(function(previousValue, i) {
                        _this.setAt(addedLength + i, previousValue);
                    });
                    return length + addedLength;
                };
                /**
             * Returns the index of the first occurrence of a value in an array.
             * @param searchElement The value to locate in the array.
             * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
             */ ArraySchema.prototype.indexOf = function(searchElement, fromIndex) {
                    return Array.from(this.$items.values()).indexOf(searchElement, fromIndex);
                };
                /**
             * Returns the index of the last occurrence of a specified value in an array.
             * @param searchElement The value to locate in the array.
             * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
             */ ArraySchema.prototype.lastIndexOf = function(searchElement, fromIndex) {
                    if (fromIndex === void 0) fromIndex = this.length - 1;
                    return Array.from(this.$items.values()).lastIndexOf(searchElement, fromIndex);
                };
                /**
             * Determines whether all the members of an array satisfy the specified test.
             * @param callbackfn A function that accepts up to three arguments. The every method calls
             * the callbackfn function for each element in the array until the callbackfn returns a value
             * which is coercible to the Boolean value false, or until the end of the array.
             * @param thisArg An object to which the this keyword can refer in the callbackfn function.
             * If thisArg is omitted, undefined is used as the this value.
             */ ArraySchema.prototype.every = function(callbackfn, thisArg) {
                    return Array.from(this.$items.values()).every(callbackfn, thisArg);
                };
                /**
             * Determines whether the specified callback function returns true for any element of an array.
             * @param callbackfn A function that accepts up to three arguments. The some method calls
             * the callbackfn function for each element in the array until the callbackfn returns a value
             * which is coercible to the Boolean value true, or until the end of the array.
             * @param thisArg An object to which the this keyword can refer in the callbackfn function.
             * If thisArg is omitted, undefined is used as the this value.
             */ ArraySchema.prototype.some = function(callbackfn, thisArg) {
                    return Array.from(this.$items.values()).some(callbackfn, thisArg);
                };
                /**
             * Performs the specified action for each element in an array.
             * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
             * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
             */ ArraySchema.prototype.forEach = function(callbackfn, thisArg) {
                    Array.from(this.$items.values()).forEach(callbackfn, thisArg);
                };
                /**
             * Calls a defined callback function on each element of an array, and returns an array that contains the results.
             * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
             * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
             */ ArraySchema.prototype.map = function(callbackfn, thisArg) {
                    return Array.from(this.$items.values()).map(callbackfn, thisArg);
                };
                ArraySchema.prototype.filter = function(callbackfn, thisArg) {
                    return Array.from(this.$items.values()).filter(callbackfn, thisArg);
                };
                /**
             * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
             * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
             * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
             */ ArraySchema.prototype.reduce = function(callbackfn, initialValue) {
                    return Array.from(this.$items.values()).reduce(callbackfn, initialValue);
                };
                /**
             * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
             * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
             * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
             */ ArraySchema.prototype.reduceRight = function(callbackfn, initialValue) {
                    return Array.from(this.$items.values()).reduceRight(callbackfn, initialValue);
                };
                /**
             * Returns the value of the first element in the array where predicate is true, and undefined
             * otherwise.
             * @param predicate find calls predicate once for each element of the array, in ascending
             * order, until it finds one where predicate returns true. If such an element is found, find
             * immediately returns that element value. Otherwise, find returns undefined.
             * @param thisArg If provided, it will be used as the this value for each invocation of
             * predicate. If it is not provided, undefined is used instead.
             */ ArraySchema.prototype.find = function(predicate, thisArg) {
                    return Array.from(this.$items.values()).find(predicate, thisArg);
                };
                /**
             * Returns the index of the first element in the array where predicate is true, and -1
             * otherwise.
             * @param predicate find calls predicate once for each element of the array, in ascending
             * order, until it finds one where predicate returns true. If such an element is found,
             * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
             * @param thisArg If provided, it will be used as the this value for each invocation of
             * predicate. If it is not provided, undefined is used instead.
             */ ArraySchema.prototype.findIndex = function(predicate, thisArg) {
                    return Array.from(this.$items.values()).findIndex(predicate, thisArg);
                };
                /**
             * Returns the this object after filling the section identified by start and end with value
             * @param value value to fill array section with
             * @param start index to start filling the array at. If start is negative, it is treated as
             * length+start where length is the length of the array.
             * @param end index to stop filling the array at. If end is negative, it is treated as
             * length+end.
             */ ArraySchema.prototype.fill = function(value, start, end) {
                    //
                    // TODO
                    //
                    throw new Error("ArraySchema#fill() not implemented");
                };
                /**
             * Returns the this object after copying a section of the array identified by start and end
             * to the same array starting at position target
             * @param target If target is negative, it is treated as length+target where length is the
             * length of the array.
             * @param start If start is negative, it is treated as length+start. If end is negative, it
             * is treated as length+end.
             * @param end If not specified, length of the this object is used as its default value.
             */ ArraySchema.prototype.copyWithin = function(target, start, end) {
                    //
                    // TODO
                    //
                    throw new Error("ArraySchema#copyWithin() not implemented");
                };
                /**
             * Returns a string representation of an array.
             */ ArraySchema.prototype.toString = function() {
                    return this.$items.toString();
                };
                /**
             * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
             */ ArraySchema.prototype.toLocaleString = function() {
                    return this.$items.toLocaleString();
                };
                /** Iterator */ ArraySchema.prototype[Symbol.iterator] = function() {
                    return Array.from(this.$items.values())[Symbol.iterator]();
                };
                ArraySchema.prototype[Symbol.unscopables] = function() {
                    return this.$items[Symbol.unscopables]();
                };
                /**
             * Returns an iterable of key, value pairs for every entry in the array
             */ ArraySchema.prototype.entries = function() {
                    return this.$items.entries();
                };
                /**
             * Returns an iterable of keys in the array
             */ ArraySchema.prototype.keys = function() {
                    return this.$items.keys();
                };
                /**
             * Returns an iterable of values in the array
             */ ArraySchema.prototype.values = function() {
                    return this.$items.values();
                };
                /**
             * Determines whether an array includes a certain element, returning true or false as appropriate.
             * @param searchElement The element to search for.
             * @param fromIndex The position in this array at which to begin searching for searchElement.
             */ ArraySchema.prototype.includes = function(searchElement, fromIndex) {
                    return Array.from(this.$items.values()).includes(searchElement, fromIndex);
                };
                /**
             * Calls a defined callback function on each element of an array. Then, flattens the result into
             * a new array.
             * This is identical to a map followed by flat with depth 1.
             *
             * @param callback A function that accepts up to three arguments. The flatMap method calls the
             * callback function one time for each element in the array.
             * @param thisArg An object to which the this keyword can refer in the callback function. If
             * thisArg is omitted, undefined is used as the this value.
             */ // @ts-ignore
                ArraySchema.prototype.flatMap = function(callback, thisArg) {
                    // @ts-ignore
                    throw new Error("ArraySchema#flatMap() is not supported.");
                };
                /**
             * Returns a new array with all sub-array elements concatenated into it recursively up to the
             * specified depth.
             *
             * @param depth The maximum recursion depth
             */ // @ts-ignore
                ArraySchema.prototype.flat = function(depth) {
                    // @ts-ignore
                    throw new Error("ArraySchema#flat() is not supported.");
                };
                // get size () {
                //     return this.$items.size;
                // }
                ArraySchema.prototype.setIndex = function(index, key) {
                    this.$indexes.set(index, key);
                };
                ArraySchema.prototype.getIndex = function(index) {
                    return this.$indexes.get(index);
                };
                ArraySchema.prototype.getByIndex = function(index) {
                    return this.$items.get(this.$indexes.get(index));
                };
                ArraySchema.prototype.deleteByIndex = function(index) {
                    var key = this.$indexes.get(index);
                    this.$items.delete(key);
                    this.$indexes.delete(index);
                };
                ArraySchema.prototype.toArray = function() {
                    return Array.from(this.$items.values());
                };
                ArraySchema.prototype.toJSON = function() {
                    return this.toArray().map(function(value) {
                        return typeof value['toJSON'] === "function" ? value['toJSON']() : value;
                    });
                };
                //
                // Decoding utilities
                //
                ArraySchema.prototype.clone = function(isDecoding) {
                    var cloned;
                    if (isDecoding) cloned = new (ArraySchema.bind.apply(ArraySchema, __spreadArray([
                        void 0
                    ], Array.from(this.$items.values()))))();
                    else cloned = new (ArraySchema.bind.apply(ArraySchema, __spreadArray([
                        void 0
                    ], this.map(function(item) {
                        return item['$changes'] ? item.clone() : item;
                    }))))();
                    return cloned;
                };
                ArraySchema.prototype.triggerAll = function() {
                    Schema1.prototype.triggerAll.apply(this);
                };
                return ArraySchema;
            }();
            function getMapProxy(value) {
                value['$proxy'] = true;
                value = new Proxy(value, {
                    get: function(obj, prop) {
                        if (typeof prop !== "symbol" && typeof obj[prop] === "undefined") return obj.get(prop);
                        else return obj[prop];
                    },
                    set: function(obj, prop, setValue) {
                        if (typeof prop !== "symbol" && prop.indexOf("$") === -1 && prop !== "onAdd" && prop !== "onRemove" && prop !== "onChange") obj.set(prop, setValue);
                        else obj[prop] = setValue;
                        return true;
                    },
                    deleteProperty: function(obj, prop) {
                        obj.delete(prop);
                        return true;
                    }
                });
                return value;
            }
            var MapSchema1 = /** @class */ function() {
                function MapSchema(initialValues) {
                    var _this = this;
                    this.$changes = new ChangeTree1(this);
                    this.$items = new Map();
                    this.$indexes = new Map();
                    this.$refId = 0;
                    if (initialValues) {
                        if (initialValues instanceof Map) initialValues.forEach(function(v, k) {
                            return _this.set(k, v);
                        });
                        else for(var k1 in initialValues)this.set(k1, initialValues[k1]);
                    }
                }
                MapSchema.is = function(type) {
                    return type['map'] !== undefined;
                };
                /** Iterator */ MapSchema.prototype[Symbol.iterator] = function() {
                    return this.$items[Symbol.iterator]();
                };
                Object.defineProperty(MapSchema.prototype, Symbol.toStringTag, {
                    get: function() {
                        return this.$items[Symbol.toStringTag];
                    },
                    enumerable: false,
                    configurable: true
                });
                MapSchema.prototype.set = function(key, value) {
                    if (value === undefined || value === null) throw new Error("MapSchema#set('" + key + "', " + value + "): trying to set " + value + " value on '" + key + "'.");
                    // get "index" for this value.
                    var hasIndex = typeof this.$changes.indexes[key] !== "undefined";
                    var index = hasIndex ? this.$changes.indexes[key] : this.$refId++;
                    var operation = hasIndex ? exports.OPERATION.REPLACE : exports.OPERATION.ADD;
                    var isRef = value['$changes'] !== undefined;
                    if (isRef) value['$changes'].setParent(this, this.$changes.root, index);
                    //
                    // (encoding)
                    // set a unique id to relate directly with this key/value.
                    //
                    if (!hasIndex) {
                        this.$changes.indexes[key] = index;
                        this.$indexes.set(index, key);
                    } else if (isRef && this.$items.get(key) !== value) operation = exports.OPERATION.ADD;
                    this.$items.set(key, value);
                    this.$changes.change(key, operation);
                    return this;
                };
                MapSchema.prototype.get = function(key) {
                    return this.$items.get(key);
                };
                MapSchema.prototype.delete = function(key) {
                    //
                    // TODO: add a "purge" method after .encode() runs, to cleanup removed `$indexes`
                    //
                    // We don't remove $indexes to allow setting the same key in the same patch
                    // (See "should allow to remove and set an item in the same place" test)
                    //
                    // // const index = this.$changes.indexes[key];
                    // // this.$indexes.delete(index);
                    this.$changes.delete(key);
                    return this.$items.delete(key);
                };
                MapSchema.prototype.clear = function(isDecoding) {
                    var _this = this;
                    // discard previous operations.
                    this.$changes.discard(true, true);
                    this.$changes.indexes = {};
                    // clear previous indexes
                    this.$indexes.clear();
                    // flag child items for garbage collection.
                    if (isDecoding && typeof this.$changes.getType() !== "string") this.$items.forEach(function(item) {
                        _this.$changes.root.removeRef(item['$changes'].refId);
                    });
                    // clear items
                    this.$items.clear();
                    this.$changes.operation({
                        index: 0,
                        op: exports.OPERATION.CLEAR
                    });
                    // touch all structures until reach root
                    this.$changes.touchParents();
                };
                MapSchema.prototype.has = function(key) {
                    return this.$items.has(key);
                };
                MapSchema.prototype.forEach = function(callbackfn) {
                    this.$items.forEach(callbackfn);
                };
                MapSchema.prototype.entries = function() {
                    return this.$items.entries();
                };
                MapSchema.prototype.keys = function() {
                    return this.$items.keys();
                };
                MapSchema.prototype.values = function() {
                    return this.$items.values();
                };
                Object.defineProperty(MapSchema.prototype, "size", {
                    get: function() {
                        return this.$items.size;
                    },
                    enumerable: false,
                    configurable: true
                });
                MapSchema.prototype.setIndex = function(index, key) {
                    this.$indexes.set(index, key);
                };
                MapSchema.prototype.getIndex = function(index) {
                    return this.$indexes.get(index);
                };
                MapSchema.prototype.getByIndex = function(index) {
                    return this.$items.get(this.$indexes.get(index));
                };
                MapSchema.prototype.deleteByIndex = function(index) {
                    var key = this.$indexes.get(index);
                    this.$items.delete(key);
                    this.$indexes.delete(index);
                };
                MapSchema.prototype.toJSON = function() {
                    var map = {};
                    this.forEach(function(value, key) {
                        map[key] = typeof value['toJSON'] === "function" ? value['toJSON']() : value;
                    });
                    return map;
                };
                //
                // Decoding utilities
                //
                MapSchema.prototype.clone = function(isDecoding) {
                    var cloned;
                    if (isDecoding) // client-side
                    cloned = Object.assign(new MapSchema(), this);
                    else {
                        // server-side
                        cloned = new MapSchema();
                        this.forEach(function(value, key) {
                            if (value['$changes']) cloned.set(key, value['clone']());
                            else cloned.set(key, value);
                        });
                    }
                    return cloned;
                };
                MapSchema.prototype.triggerAll = function() {
                    Schema1.prototype.triggerAll.apply(this);
                };
                return MapSchema;
            }();
            var registeredTypes = {};
            function registerType(identifier, definition) {
                registeredTypes[identifier] = definition;
            }
            function getType(identifier) {
                return registeredTypes[identifier];
            }
            var SchemaDefinition1 = /** @class */ function() {
                function SchemaDefinition() {
                    //
                    // TODO: use a "field" structure combining all these properties per-field.
                    //
                    this.indexes = {};
                    this.fieldsByIndex = {};
                    this.deprecated = {};
                    this.descriptors = {};
                }
                SchemaDefinition.create = function(parent) {
                    var definition = new SchemaDefinition();
                    // support inheritance
                    definition.schema = Object.assign({}, parent && parent.schema || {});
                    definition.indexes = Object.assign({}, parent && parent.indexes || {});
                    definition.fieldsByIndex = Object.assign({}, parent && parent.fieldsByIndex || {});
                    definition.descriptors = Object.assign({}, parent && parent.descriptors || {});
                    definition.deprecated = Object.assign({}, parent && parent.deprecated || {});
                    return definition;
                };
                SchemaDefinition.prototype.addField = function(field, type) {
                    var index = this.getNextFieldIndex();
                    this.fieldsByIndex[index] = field;
                    this.indexes[field] = index;
                    this.schema[field] = Array.isArray(type) ? {
                        array: type[0]
                    } : type;
                };
                SchemaDefinition.prototype.addFilter = function(field, cb) {
                    if (!this.filters) {
                        this.filters = {};
                        this.indexesWithFilters = [];
                    }
                    this.filters[this.indexes[field]] = cb;
                    this.indexesWithFilters.push(this.indexes[field]);
                    return true;
                };
                SchemaDefinition.prototype.addChildrenFilter = function(field, cb) {
                    var index = this.indexes[field];
                    var type = this.schema[field];
                    if (getType(Object.keys(type)[0])) {
                        if (!this.childFilters) this.childFilters = {};
                        this.childFilters[index] = cb;
                        return true;
                    } else console.warn("@filterChildren: field '" + field + "' can't have children. Ignoring filter.");
                };
                SchemaDefinition.prototype.getChildrenFilter = function(field) {
                    return this.childFilters && this.childFilters[this.indexes[field]];
                };
                SchemaDefinition.prototype.getNextFieldIndex = function() {
                    return Object.keys(this.schema || {}).length;
                };
                return SchemaDefinition;
            }();
            function hasFilter(klass) {
                return klass._context && klass._context.useFilters;
            }
            var Context1 = /** @class */ function() {
                function Context() {
                    this.types = {};
                    this.schemas = new Map();
                    this.useFilters = false;
                }
                Context.prototype.has = function(schema) {
                    return this.schemas.has(schema);
                };
                Context.prototype.get = function(typeid) {
                    return this.types[typeid];
                };
                Context.prototype.add = function(schema, typeid) {
                    if (typeid === void 0) typeid = this.schemas.size;
                    // FIXME: move this to somewhere else?
                    // support inheritance
                    schema._definition = SchemaDefinition1.create(schema._definition);
                    schema._typeid = typeid;
                    this.types[typeid] = schema;
                    this.schemas.set(schema, typeid);
                };
                Context.create = function(context) {
                    if (context === void 0) context = new Context;
                    return function(definition) {
                        return type1(definition, context);
                    };
                };
                return Context;
            }();
            var globalContext = new Context1();
            /**
         * `@type()` decorator for proxies
         */ function type1(type, context) {
                if (context === void 0) context = globalContext;
                return function(target, field) {
                    var constructor = target.constructor;
                    constructor._context = context;
                    /*
                 * static schema
                 */ if (!context.has(constructor)) context.add(constructor);
                    var definition = constructor._definition;
                    definition.addField(field, type);
                    /**
                 * skip if descriptor already exists for this field (`@deprecated()`)
                 */ if (definition.descriptors[field]) {
                        if (definition.deprecated[field]) // do not create accessors for deprecated properties.
                        return;
                        else // trying to define same property multiple times across inheritance.
                        // https://github.com/colyseus/colyseus-unity3d/issues/131#issuecomment-814308572
                        try {
                            throw new Error("@colyseus/schema: Duplicate '" + field + "' definition on '" + constructor.name + "'.\nCheck @type() annotation");
                        } catch (e) {
                            var definitionAtLine = e.stack.split("\n")[4].trim();
                            throw new Error(e.message + " " + definitionAtLine);
                        }
                    }
                    var isArray = ArraySchema1.is(type);
                    var isMap = !isArray && MapSchema1.is(type);
                    // TODO: refactor me.
                    // Allow abstract intermediary classes with no fields to be serialized
                    // (See "should support an inheritance with a Schema type without fields" test)
                    if (typeof type !== "string" && !Schema1.is(type)) {
                        var childType = Object.values(type)[0];
                        if (typeof childType !== "string" && !context.has(childType)) context.add(childType);
                    }
                    var fieldCached = "_" + field;
                    definition.descriptors[fieldCached] = {
                        enumerable: false,
                        configurable: false,
                        writable: true
                    };
                    definition.descriptors[field] = {
                        get: function() {
                            return this[fieldCached];
                        },
                        set: function(value) {
                            /**
                         * Create Proxy for array or map items
                         */ // skip if value is the same as cached.
                            if (value === this[fieldCached]) return;
                            if (value !== undefined && value !== null) {
                                // automaticallty transform Array into ArraySchema
                                if (isArray && !(value instanceof ArraySchema1)) value = new (ArraySchema1.bind.apply(ArraySchema1, __spreadArray([
                                    void 0
                                ], value)))();
                                // automaticallty transform Map into MapSchema
                                if (isMap && !(value instanceof MapSchema1)) value = new MapSchema1(value);
                                // try to turn provided structure into a Proxy
                                if (value['$proxy'] === undefined) {
                                    if (isMap) value = getMapProxy(value);
                                    else if (isArray) value = getArrayProxy(value);
                                }
                                // flag the change for encoding.
                                this.$changes.change(field);
                                //
                                // call setParent() recursively for this and its child
                                // structures.
                                //
                                if (value['$changes']) value['$changes'].setParent(this, this.$changes.root, this._definition.indexes[field]);
                            } else //
                            // Setting a field to `null` or `undefined` will delete it.
                            //
                            this.$changes.delete(field);
                            this[fieldCached] = value;
                        },
                        enumerable: true,
                        configurable: true
                    };
                };
            }
            /**
         * `@filter()` decorator for defining data filters per client
         */ function filter1(cb) {
                return function(target, field) {
                    var constructor = target.constructor;
                    var definition = constructor._definition;
                    if (definition.addFilter(field, cb)) constructor._context.useFilters = true;
                };
            }
            function filterChildren(cb) {
                return function(target, field) {
                    var constructor = target.constructor;
                    var definition = constructor._definition;
                    if (definition.addChildrenFilter(field, cb)) constructor._context.useFilters = true;
                };
            }
            /**
         * `@deprecated()` flag a field as deprecated.
         * The previous `@type()` annotation should remain along with this one.
         */ function deprecated1(throws, context) {
                if (throws === void 0) throws = true;
                return function(target, field) {
                    var constructor = target.constructor;
                    var definition = constructor._definition;
                    definition.deprecated[field] = true;
                    if (throws) definition.descriptors[field] = {
                        get: function() {
                            throw new Error(field + " is deprecated.");
                        },
                        set: function(value) {},
                        enumerable: false,
                        configurable: true
                    };
                };
            }
            function defineTypes(target, fields, context) {
                if (context === void 0) context = target._context || globalContext;
                for(var field in fields)type1(fields[field], context)(target.prototype, field);
                return target;
            }
            /**
         * Copyright (c) 2018 Endel Dreyer
         * Copyright (c) 2014 Ion Drive Software Ltd.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in all
         * copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
         * SOFTWARE
         */ /**
         * msgpack implementation highly based on notepack.io
         * https://github.com/darrachequesne/notepack
         */ function utf8Length(str) {
                var c = 0, length = 0;
                for(var i = 0, l = str.length; i < l; i++){
                    c = str.charCodeAt(i);
                    if (c < 128) length += 1;
                    else if (c < 2048) length += 2;
                    else if (c < 55296 || c >= 57344) length += 3;
                    else {
                        i++;
                        length += 4;
                    }
                }
                return length;
            }
            function utf8Write(view, offset, str) {
                var c = 0;
                for(var i = 0, l = str.length; i < l; i++){
                    c = str.charCodeAt(i);
                    if (c < 128) view[offset++] = c;
                    else if (c < 2048) {
                        view[offset++] = 192 | c >> 6;
                        view[offset++] = 128 | c & 63;
                    } else if (c < 55296 || c >= 57344) {
                        view[offset++] = 224 | c >> 12;
                        view[offset++] = 128 | c >> 6 & 63;
                        view[offset++] = 128 | c & 63;
                    } else {
                        i++;
                        c = 65536 + ((c & 1023) << 10 | str.charCodeAt(i) & 1023);
                        view[offset++] = 240 | c >> 18;
                        view[offset++] = 128 | c >> 12 & 63;
                        view[offset++] = 128 | c >> 6 & 63;
                        view[offset++] = 128 | c & 63;
                    }
                }
            }
            function int8$1(bytes, value) {
                bytes.push(value & 255);
            }
            function uint8$1(bytes, value) {
                bytes.push(value & 255);
            }
            function int16$1(bytes, value) {
                bytes.push(value & 255);
                bytes.push(value >> 8 & 255);
            }
            function uint16$1(bytes, value) {
                bytes.push(value & 255);
                bytes.push(value >> 8 & 255);
            }
            function int32$1(bytes, value) {
                bytes.push(value & 255);
                bytes.push(value >> 8 & 255);
                bytes.push(value >> 16 & 255);
                bytes.push(value >> 24 & 255);
            }
            function uint32$1(bytes, value) {
                var b4 = value >> 24;
                var b3 = value >> 16;
                var b2 = value >> 8;
                var b1 = value;
                bytes.push(b1 & 255);
                bytes.push(b2 & 255);
                bytes.push(b3 & 255);
                bytes.push(b4 & 255);
            }
            function int64$1(bytes, value) {
                var high = Math.floor(value / Math.pow(2, 32));
                var low = value >>> 0;
                uint32$1(bytes, low);
                uint32$1(bytes, high);
            }
            function uint64$1(bytes, value) {
                var high = value / Math.pow(2, 32) >> 0;
                var low = value >>> 0;
                uint32$1(bytes, low);
                uint32$1(bytes, high);
            }
            function float32$1(bytes, value) {
                writeFloat32(bytes, value);
            }
            function float64$1(bytes, value) {
                writeFloat64(bytes, value);
            }
            var _int32$1 = new Int32Array(2);
            var _float32$1 = new Float32Array(_int32$1.buffer);
            var _float64$1 = new Float64Array(_int32$1.buffer);
            function writeFloat32(bytes, value) {
                _float32$1[0] = value;
                int32$1(bytes, _int32$1[0]);
            }
            function writeFloat64(bytes, value) {
                _float64$1[0] = value;
                int32$1(bytes, _int32$1[0]);
                int32$1(bytes, _int32$1[1]);
            }
            function boolean$1(bytes, value) {
                return uint8$1(bytes, value ? 1 : 0);
            }
            function string$1(bytes, value) {
                // encode `null` strings as empty.
                if (!value) value = "";
                var length = utf8Length(value);
                var size = 0;
                // fixstr
                if (length < 32) {
                    bytes.push(length | 160);
                    size = 1;
                } else if (length < 256) {
                    bytes.push(217);
                    uint8$1(bytes, length);
                    size = 2;
                } else if (length < 65536) {
                    bytes.push(218);
                    uint16$1(bytes, length);
                    size = 3;
                } else if (length < 4294967296) {
                    bytes.push(219);
                    uint32$1(bytes, length);
                    size = 5;
                } else throw new Error('String too long');
                utf8Write(bytes, bytes.length, value);
                return size + length;
            }
            function number$1(bytes, value) {
                if (isNaN(value)) return number$1(bytes, 0);
                else if (!isFinite(value)) return number$1(bytes, value > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER);
                else if (value !== (value | 0)) {
                    bytes.push(203);
                    writeFloat64(bytes, value);
                    return 9;
                // TODO: encode float 32?
                // is it possible to differentiate between float32 / float64 here?
                // // float 32
                // bytes.push(0xca);
                // writeFloat32(bytes, value);
                // return 5;
                }
                if (value >= 0) {
                    // positive fixnum
                    if (value < 128) {
                        uint8$1(bytes, value);
                        return 1;
                    }
                    // uint 8
                    if (value < 256) {
                        bytes.push(204);
                        uint8$1(bytes, value);
                        return 2;
                    }
                    // uint 16
                    if (value < 65536) {
                        bytes.push(205);
                        uint16$1(bytes, value);
                        return 3;
                    }
                    // uint 32
                    if (value < 4294967296) {
                        bytes.push(206);
                        uint32$1(bytes, value);
                        return 5;
                    }
                    // uint 64
                    bytes.push(207);
                    uint64$1(bytes, value);
                    return 9;
                } else {
                    // negative fixnum
                    if (value >= -32) {
                        bytes.push(224 | value + 32);
                        return 1;
                    }
                    // int 8
                    if (value >= -128) {
                        bytes.push(208);
                        int8$1(bytes, value);
                        return 2;
                    }
                    // int 16
                    if (value >= -32768) {
                        bytes.push(209);
                        int16$1(bytes, value);
                        return 3;
                    }
                    // int 32
                    if (value >= -2147483648) {
                        bytes.push(210);
                        int32$1(bytes, value);
                        return 5;
                    }
                    // int 64
                    bytes.push(211);
                    int64$1(bytes, value);
                    return 9;
                }
            }
            var encode = /*#__PURE__*/ Object.freeze({
                __proto__: null,
                utf8Write: utf8Write,
                int8: int8$1,
                uint8: uint8$1,
                int16: int16$1,
                uint16: uint16$1,
                int32: int32$1,
                uint32: uint32$1,
                int64: int64$1,
                uint64: uint64$1,
                float32: float32$1,
                float64: float64$1,
                writeFloat32: writeFloat32,
                writeFloat64: writeFloat64,
                boolean: boolean$1,
                string: string$1,
                number: number$1
            });
            /**
         * Copyright (c) 2018 Endel Dreyer
         * Copyright (c) 2014 Ion Drive Software Ltd.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in all
         * copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
         * SOFTWARE
         */ function utf8Read(bytes, offset, length) {
                var string = '', chr = 0;
                for(var i = offset, end = offset + length; i < end; i++){
                    var byte = bytes[i];
                    if ((byte & 128) === 0) {
                        string += String.fromCharCode(byte);
                        continue;
                    }
                    if ((byte & 224) === 192) {
                        string += String.fromCharCode((byte & 31) << 6 | bytes[++i] & 63);
                        continue;
                    }
                    if ((byte & 240) === 224) {
                        string += String.fromCharCode((byte & 15) << 12 | (bytes[++i] & 63) << 6 | (bytes[++i] & 63) << 0);
                        continue;
                    }
                    if ((byte & 248) === 240) {
                        chr = (byte & 7) << 18 | (bytes[++i] & 63) << 12 | (bytes[++i] & 63) << 6 | (bytes[++i] & 63) << 0;
                        if (chr >= 65536) {
                            chr -= 65536;
                            string += String.fromCharCode((chr >>> 10) + 55296, (chr & 1023) + 56320);
                        } else string += String.fromCharCode(chr);
                        continue;
                    }
                    console.error('Invalid byte ' + byte.toString(16));
                // (do not throw error to avoid server/client from crashing due to hack attemps)
                // throw new Error('Invalid byte ' + byte.toString(16));
                }
                return string;
            }
            function int8(bytes, it) {
                return uint8(bytes, it) << 24 >> 24;
            }
            function uint8(bytes, it) {
                return bytes[it.offset++];
            }
            function int16(bytes, it) {
                return uint16(bytes, it) << 16 >> 16;
            }
            function uint16(bytes, it) {
                return bytes[it.offset++] | bytes[it.offset++] << 8;
            }
            function int32(bytes, it) {
                return bytes[it.offset++] | bytes[it.offset++] << 8 | bytes[it.offset++] << 16 | bytes[it.offset++] << 24;
            }
            function uint32(bytes, it) {
                return int32(bytes, it) >>> 0;
            }
            function float32(bytes, it) {
                return readFloat32(bytes, it);
            }
            function float64(bytes, it) {
                return readFloat64(bytes, it);
            }
            function int64(bytes, it) {
                var low = uint32(bytes, it);
                var high = int32(bytes, it) * Math.pow(2, 32);
                return high + low;
            }
            function uint64(bytes, it) {
                var low = uint32(bytes, it);
                var high = uint32(bytes, it) * Math.pow(2, 32);
                return high + low;
            }
            var _int32 = new Int32Array(2);
            var _float32 = new Float32Array(_int32.buffer);
            var _float64 = new Float64Array(_int32.buffer);
            function readFloat32(bytes, it) {
                _int32[0] = int32(bytes, it);
                return _float32[0];
            }
            function readFloat64(bytes, it) {
                _int32[0] = int32(bytes, it);
                _int32[1] = int32(bytes, it);
                return _float64[0];
            }
            function boolean(bytes, it) {
                return uint8(bytes, it) > 0;
            }
            function string1(bytes, it) {
                var prefix = bytes[it.offset++];
                var length;
                if (prefix < 192) // fixstr
                length = prefix & 31;
                else if (prefix === 217) length = uint8(bytes, it);
                else if (prefix === 218) length = uint16(bytes, it);
                else if (prefix === 219) length = uint32(bytes, it);
                var value = utf8Read(bytes, it.offset, length);
                it.offset += length;
                return value;
            }
            function stringCheck(bytes, it) {
                var prefix = bytes[it.offset];
                return(// fixstr
                prefix < 192 && prefix > 160 || // str 8
                prefix === 217 || // str 16
                prefix === 218 || // str 32
                prefix === 219);
            }
            function number(bytes, it) {
                var prefix = bytes[it.offset++];
                if (prefix < 128) // positive fixint
                return prefix;
                else if (prefix === 202) // float 32
                return readFloat32(bytes, it);
                else if (prefix === 203) // float 64
                return readFloat64(bytes, it);
                else if (prefix === 204) // uint 8
                return uint8(bytes, it);
                else if (prefix === 205) // uint 16
                return uint16(bytes, it);
                else if (prefix === 206) // uint 32
                return uint32(bytes, it);
                else if (prefix === 207) // uint 64
                return uint64(bytes, it);
                else if (prefix === 208) // int 8
                return int8(bytes, it);
                else if (prefix === 209) // int 16
                return int16(bytes, it);
                else if (prefix === 210) // int 32
                return int32(bytes, it);
                else if (prefix === 211) // int 64
                return int64(bytes, it);
                else if (prefix > 223) // negative fixint
                return (255 - prefix + 1) * -1;
            }
            function numberCheck(bytes, it) {
                var prefix = bytes[it.offset];
                // positive fixint - 0x00 - 0x7f
                // float 32        - 0xca
                // float 64        - 0xcb
                // uint 8          - 0xcc
                // uint 16         - 0xcd
                // uint 32         - 0xce
                // uint 64         - 0xcf
                // int 8           - 0xd0
                // int 16          - 0xd1
                // int 32          - 0xd2
                // int 64          - 0xd3
                return prefix < 128 || prefix >= 202 && prefix <= 211;
            }
            function arrayCheck(bytes, it) {
                return bytes[it.offset] < 160;
            // const prefix = bytes[it.offset] ;
            // if (prefix < 0xa0) {
            //   return prefix;
            // // array
            // } else if (prefix === 0xdc) {
            //   it.offset += 2;
            // } else if (0xdd) {
            //   it.offset += 4;
            // }
            // return prefix;
            }
            function switchStructureCheck(bytes, it) {
                return(// previous byte should be `SWITCH_TO_STRUCTURE`
                bytes[it.offset - 1] === SWITCH_TO_STRUCTURE && (bytes[it.offset] < 128 || bytes[it.offset] >= 202 && bytes[it.offset] <= 211));
            }
            var decode = /*#__PURE__*/ Object.freeze({
                __proto__: null,
                int8: int8,
                uint8: uint8,
                int16: int16,
                uint16: uint16,
                int32: int32,
                uint32: uint32,
                float32: float32,
                float64: float64,
                int64: int64,
                uint64: uint64,
                readFloat32: readFloat32,
                readFloat64: readFloat64,
                boolean: boolean,
                string: string1,
                stringCheck: stringCheck,
                number: number,
                numberCheck: numberCheck,
                arrayCheck: arrayCheck,
                switchStructureCheck: switchStructureCheck
            });
            var CollectionSchema1 = /** @class */ function() {
                function CollectionSchema(initialValues) {
                    var _this = this;
                    this.$changes = new ChangeTree1(this);
                    this.$items = new Map();
                    this.$indexes = new Map();
                    this.$refId = 0;
                    if (initialValues) initialValues.forEach(function(v) {
                        return _this.add(v);
                    });
                }
                CollectionSchema.is = function(type) {
                    return type['collection'] !== undefined;
                };
                CollectionSchema.prototype.add = function(value) {
                    // set "index" for reference.
                    var index = this.$refId++;
                    var isRef = value['$changes'] !== undefined;
                    if (isRef) value['$changes'].setParent(this, this.$changes.root, index);
                    this.$changes.indexes[index] = index;
                    this.$indexes.set(index, index);
                    this.$items.set(index, value);
                    this.$changes.change(index);
                    return index;
                };
                CollectionSchema.prototype.at = function(index) {
                    var key = Array.from(this.$items.keys())[index];
                    return this.$items.get(key);
                };
                CollectionSchema.prototype.entries = function() {
                    return this.$items.entries();
                };
                CollectionSchema.prototype.delete = function(item) {
                    var entries = this.$items.entries();
                    var index;
                    var entry;
                    while(entry = entries.next()){
                        if (entry.done) break;
                        if (item === entry.value[1]) {
                            index = entry.value[0];
                            break;
                        }
                    }
                    if (index === undefined) return false;
                    this.$changes.delete(index);
                    this.$indexes.delete(index);
                    return this.$items.delete(index);
                };
                CollectionSchema.prototype.clear = function(isDecoding) {
                    var _this = this;
                    // discard previous operations.
                    this.$changes.discard(true, true);
                    this.$changes.indexes = {};
                    // clear previous indexes
                    this.$indexes.clear();
                    // flag child items for garbage collection.
                    if (isDecoding && typeof this.$changes.getType() !== "string") this.$items.forEach(function(item) {
                        _this.$changes.root.removeRef(item['$changes'].refId);
                    });
                    // clear items
                    this.$items.clear();
                    this.$changes.operation({
                        index: 0,
                        op: exports.OPERATION.CLEAR
                    });
                    // touch all structures until reach root
                    this.$changes.touchParents();
                };
                CollectionSchema.prototype.has = function(value) {
                    return Array.from(this.$items.values()).some(function(v) {
                        return v === value;
                    });
                };
                CollectionSchema.prototype.forEach = function(callbackfn) {
                    var _this = this;
                    this.$items.forEach(function(value, key, _) {
                        return callbackfn(value, key, _this);
                    });
                };
                CollectionSchema.prototype.values = function() {
                    return this.$items.values();
                };
                Object.defineProperty(CollectionSchema.prototype, "size", {
                    get: function() {
                        return this.$items.size;
                    },
                    enumerable: false,
                    configurable: true
                });
                CollectionSchema.prototype.setIndex = function(index, key) {
                    this.$indexes.set(index, key);
                };
                CollectionSchema.prototype.getIndex = function(index) {
                    return this.$indexes.get(index);
                };
                CollectionSchema.prototype.getByIndex = function(index) {
                    return this.$items.get(this.$indexes.get(index));
                };
                CollectionSchema.prototype.deleteByIndex = function(index) {
                    var key = this.$indexes.get(index);
                    this.$items.delete(key);
                    this.$indexes.delete(index);
                };
                CollectionSchema.prototype.toArray = function() {
                    return Array.from(this.$items.values());
                };
                CollectionSchema.prototype.toJSON = function() {
                    var values = [];
                    this.forEach(function(value, key) {
                        values.push(typeof value['toJSON'] === "function" ? value['toJSON']() : value);
                    });
                    return values;
                };
                //
                // Decoding utilities
                //
                CollectionSchema.prototype.clone = function(isDecoding) {
                    var cloned;
                    if (isDecoding) // client-side
                    cloned = Object.assign(new CollectionSchema(), this);
                    else {
                        // server-side
                        cloned = new CollectionSchema();
                        this.forEach(function(value) {
                            if (value['$changes']) cloned.add(value['clone']());
                            else cloned.add(value);
                        });
                    }
                    return cloned;
                };
                CollectionSchema.prototype.triggerAll = function() {
                    Schema1.prototype.triggerAll.apply(this);
                };
                return CollectionSchema;
            }();
            var SetSchema1 = /** @class */ function() {
                function SetSchema(initialValues) {
                    var _this = this;
                    this.$changes = new ChangeTree1(this);
                    this.$items = new Map();
                    this.$indexes = new Map();
                    this.$refId = 0;
                    if (initialValues) initialValues.forEach(function(v) {
                        return _this.add(v);
                    });
                }
                SetSchema.is = function(type) {
                    return type['set'] !== undefined;
                };
                SetSchema.prototype.add = function(value) {
                    var _a, _b;
                    // immediatelly return false if value already added.
                    if (this.has(value)) return false;
                    // set "index" for reference.
                    var index = this.$refId++;
                    if (value['$changes'] !== undefined) value['$changes'].setParent(this, this.$changes.root, index);
                    var operation = (_b = (_a = this.$changes.indexes[index]) === null || _a === void 0 ? void 0 : _a.op) !== null && _b !== void 0 ? _b : exports.OPERATION.ADD;
                    this.$changes.indexes[index] = index;
                    this.$indexes.set(index, index);
                    this.$items.set(index, value);
                    this.$changes.change(index, operation);
                    return index;
                };
                SetSchema.prototype.entries = function() {
                    return this.$items.entries();
                };
                SetSchema.prototype.delete = function(item) {
                    var entries = this.$items.entries();
                    var index;
                    var entry;
                    while(entry = entries.next()){
                        if (entry.done) break;
                        if (item === entry.value[1]) {
                            index = entry.value[0];
                            break;
                        }
                    }
                    if (index === undefined) return false;
                    this.$changes.delete(index);
                    this.$indexes.delete(index);
                    return this.$items.delete(index);
                };
                SetSchema.prototype.clear = function(isDecoding) {
                    var _this = this;
                    // discard previous operations.
                    this.$changes.discard(true, true);
                    this.$changes.indexes = {};
                    // clear previous indexes
                    this.$indexes.clear();
                    // flag child items for garbage collection.
                    if (isDecoding && typeof this.$changes.getType() !== "string") this.$items.forEach(function(item) {
                        _this.$changes.root.removeRef(item['$changes'].refId);
                    });
                    // clear items
                    this.$items.clear();
                    this.$changes.operation({
                        index: 0,
                        op: exports.OPERATION.CLEAR
                    });
                    // touch all structures until reach root
                    this.$changes.touchParents();
                };
                SetSchema.prototype.has = function(value) {
                    var values = this.$items.values();
                    var has = false;
                    var entry;
                    while(entry = values.next()){
                        if (entry.done) break;
                        if (value === entry.value) {
                            has = true;
                            break;
                        }
                    }
                    return has;
                };
                SetSchema.prototype.forEach = function(callbackfn) {
                    var _this = this;
                    this.$items.forEach(function(value, key, _) {
                        return callbackfn(value, key, _this);
                    });
                };
                SetSchema.prototype.values = function() {
                    return this.$items.values();
                };
                Object.defineProperty(SetSchema.prototype, "size", {
                    get: function() {
                        return this.$items.size;
                    },
                    enumerable: false,
                    configurable: true
                });
                SetSchema.prototype.setIndex = function(index, key) {
                    this.$indexes.set(index, key);
                };
                SetSchema.prototype.getIndex = function(index) {
                    return this.$indexes.get(index);
                };
                SetSchema.prototype.getByIndex = function(index) {
                    return this.$items.get(this.$indexes.get(index));
                };
                SetSchema.prototype.deleteByIndex = function(index) {
                    var key = this.$indexes.get(index);
                    this.$items.delete(key);
                    this.$indexes.delete(index);
                };
                SetSchema.prototype.toArray = function() {
                    return Array.from(this.$items.values());
                };
                SetSchema.prototype.toJSON = function() {
                    var values = [];
                    this.forEach(function(value, key) {
                        values.push(typeof value['toJSON'] === "function" ? value['toJSON']() : value);
                    });
                    return values;
                };
                //
                // Decoding utilities
                //
                SetSchema.prototype.clone = function(isDecoding) {
                    var cloned;
                    if (isDecoding) // client-side
                    cloned = Object.assign(new SetSchema(), this);
                    else {
                        // server-side
                        cloned = new SetSchema();
                        this.forEach(function(value) {
                            if (value['$changes']) cloned.add(value['clone']());
                            else cloned.add(value);
                        });
                    }
                    return cloned;
                };
                SetSchema.prototype.triggerAll = function() {
                    Schema1.prototype.triggerAll.apply(this);
                };
                return SetSchema;
            }();
            /**
         * Extracted from https://www.npmjs.com/package/strong-events
         */ var EventEmitter_1 = /** @class */ function() {
                function EventEmitter_() {
                    this.handlers = [];
                }
                EventEmitter_.prototype.register = function(cb, once) {
                    this.handlers.push(cb);
                    return this;
                };
                EventEmitter_.prototype.invoke = function() {
                    var args = [];
                    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                    this.handlers.forEach(function(handler) {
                        return handler.apply(void 0, args);
                    });
                };
                EventEmitter_.prototype.invokeAsync = function() {
                    var args = [];
                    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                    return Promise.all(this.handlers.map(function(handler) {
                        return handler.apply(void 0, args);
                    }));
                };
                EventEmitter_.prototype.remove = function(cb) {
                    var index = this.handlers.indexOf(cb);
                    this.handlers[index] = this.handlers[this.handlers.length - 1];
                    this.handlers.pop();
                };
                EventEmitter_.prototype.clear = function() {
                    this.handlers = [];
                };
                return EventEmitter_;
            }();
            var ClientState1 = /** @class */ function() {
                function ClientState() {
                    this.refIds = new WeakSet();
                    this.containerIndexes = new WeakMap();
                }
                // containerIndexes = new Map<ChangeTree, Set<number>>();
                ClientState.prototype.addRefId = function(changeTree) {
                    if (!this.refIds.has(changeTree)) {
                        this.refIds.add(changeTree);
                        this.containerIndexes.set(changeTree, new Set());
                    }
                };
                ClientState.get = function(client) {
                    if (client.$filterState === undefined) client.$filterState = new ClientState();
                    return client.$filterState;
                };
                return ClientState;
            }();
            var EncodeSchemaError1 = /** @class */ function(_super) {
                __extends(EncodeSchemaError, _super);
                function EncodeSchemaError() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return EncodeSchemaError;
            }(Error);
            function assertType(value, type, klass, field) {
                var typeofTarget;
                var allowNull = false;
                switch(type){
                    case "number":
                    case "int8":
                    case "uint8":
                    case "int16":
                    case "uint16":
                    case "int32":
                    case "uint32":
                    case "int64":
                    case "uint64":
                    case "float32":
                    case "float64":
                        typeofTarget = "number";
                        if (isNaN(value)) console.log("trying to encode \"NaN\" in " + klass.constructor.name + "#" + field);
                        break;
                    case "string":
                        typeofTarget = "string";
                        allowNull = true;
                        break;
                    case "boolean":
                        // boolean is always encoded as true/false based on truthiness
                        return;
                }
                if (typeof value !== typeofTarget && (!allowNull || allowNull && value !== null)) {
                    var foundValue = "'" + JSON.stringify(value) + "'" + (value && value.constructor && " (" + value.constructor.name + ")" || '');
                    throw new EncodeSchemaError1("a '" + typeofTarget + "' was expected, but " + foundValue + " was provided in " + klass.constructor.name + "#" + field);
                }
            }
            function assertInstanceType(value, type, klass, field) {
                if (!(value instanceof type)) throw new EncodeSchemaError1("a '" + type.name + "' was expected, but '" + value.constructor.name + "' was provided in " + klass.constructor.name + "#" + field);
            }
            function encodePrimitiveType(type, bytes, value, klass, field) {
                assertType(value, type, klass, field);
                var encodeFunc = encode[type];
                if (encodeFunc) encodeFunc(bytes, value);
                else throw new EncodeSchemaError1("a '" + type + "' was expected, but " + value + " was provided in " + klass.constructor.name + "#" + field);
            }
            function decodePrimitiveType(type, bytes, it) {
                return decode[type](bytes, it);
            }
            /**
         * Schema encoder / decoder
         */ var Schema1 = /** @class */ function() {
                // allow inherited classes to have a constructor
                function Schema() {
                    var args = [];
                    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                    // fix enumerability of fields for end-user
                    Object.defineProperties(this, {
                        $changes: {
                            value: new ChangeTree1(this, undefined, new Root1()),
                            enumerable: false,
                            writable: true
                        },
                        $listeners: {
                            value: {},
                            enumerable: false,
                            writable: true
                        }
                    });
                    var descriptors = this._definition.descriptors;
                    if (descriptors) Object.defineProperties(this, descriptors);
                    //
                    // Assign initial values
                    //
                    if (args[0]) this.assign(args[0]);
                }
                Schema.onError = function(e) {
                    console.error(e);
                };
                Schema.is = function(type) {
                    return type['_definition'] && type['_definition'].schema !== undefined;
                };
                Schema.prototype.assign = function(props) {
                    Object.assign(this, props);
                    return this;
                };
                Object.defineProperty(Schema.prototype, "_definition", {
                    get: function() {
                        return this.constructor._definition;
                    },
                    enumerable: false,
                    configurable: true
                });
                Schema.prototype.listen = function(attr, callback) {
                    var _this = this;
                    if (!this.$listeners[attr]) this.$listeners[attr] = new EventEmitter_1();
                    this.$listeners[attr].register(callback);
                    // return un-register callback.
                    return function() {
                        return _this.$listeners[attr].remove(callback);
                    };
                };
                Schema.prototype.decode = function(bytes, it, ref, allChanges) {
                    if (it === void 0) it = {
                        offset: 0
                    };
                    if (ref === void 0) ref = this;
                    if (allChanges === void 0) allChanges = new Map();
                    var $root = this.$changes.root;
                    var totalBytes = bytes.length;
                    var refId = 0;
                    var changes = [];
                    $root.refs.set(refId, this);
                    allChanges.set(refId, changes);
                    while(it.offset < totalBytes){
                        var byte = bytes[it.offset++];
                        if (byte == SWITCH_TO_STRUCTURE) {
                            refId = number(bytes, it);
                            var nextRef = $root.refs.get(refId);
                            //
                            // Trying to access a reference that haven't been decoded yet.
                            //
                            if (!nextRef) throw new Error("\"refId\" not found: " + refId);
                            ref = nextRef;
                            // create empty list of changes for this refId.
                            changes = [];
                            allChanges.set(refId, changes);
                            continue;
                        }
                        var changeTree = ref['$changes'];
                        var isSchema = ref['_definition'] !== undefined;
                        var operation = isSchema ? byte >> 6 << 6 // "compressed" index + operation
                         : byte; // "uncompressed" index + operation (array/map items)
                        if (operation === exports.OPERATION.CLEAR) {
                            //
                            // TODO: refactor me!
                            // The `.clear()` method is calling `$root.removeRef(refId)` for
                            // each item inside this collection
                            //
                            ref.clear(true);
                            continue;
                        }
                        var fieldIndex = isSchema ? byte % (operation || 255 // if "REPLACE" operation (0), use 255
                        ) : number(bytes, it);
                        var fieldName = isSchema ? ref['_definition'].fieldsByIndex[fieldIndex] : "";
                        var type = changeTree.getType(fieldIndex);
                        var value = void 0;
                        var previousValue = void 0;
                        var dynamicIndex = void 0;
                        if (!isSchema) {
                            previousValue = ref['getByIndex'](fieldIndex);
                            if ((operation & exports.OPERATION.ADD) === exports.OPERATION.ADD) {
                                dynamicIndex = ref instanceof MapSchema1 ? string1(bytes, it) : fieldIndex;
                                ref['setIndex'](fieldIndex, dynamicIndex);
                            } else // here
                            dynamicIndex = ref['getIndex'](fieldIndex);
                        } else previousValue = ref["_" + fieldName];
                        //
                        // Delete operations
                        //
                        if ((operation & exports.OPERATION.DELETE) === exports.OPERATION.DELETE) {
                            if (operation !== exports.OPERATION.DELETE_AND_ADD) ref['deleteByIndex'](fieldIndex);
                            // Flag `refId` for garbage collection.
                            if (previousValue && previousValue['$changes']) $root.removeRef(previousValue['$changes'].refId);
                            value = null;
                        }
                        if (fieldName === undefined) {
                            console.warn("@colyseus/schema: definition mismatch");
                            //
                            // keep skipping next bytes until reaches a known structure
                            // by local decoder.
                            //
                            var nextIterator = {
                                offset: it.offset
                            };
                            while(it.offset < totalBytes){
                                if (switchStructureCheck(bytes, it)) {
                                    nextIterator.offset = it.offset + 1;
                                    if ($root.refs.has(number(bytes, nextIterator))) break;
                                }
                                it.offset++;
                            }
                            continue;
                        } else if (operation === exports.OPERATION.DELETE) ;
                        else if (Schema.is(type)) {
                            var refId_1 = number(bytes, it);
                            value = $root.refs.get(refId_1);
                            if (operation !== exports.OPERATION.REPLACE) {
                                var childType = this.getSchemaType(bytes, it, type);
                                if (!value) {
                                    value = this.createTypeInstance(childType);
                                    value.$changes.refId = refId_1;
                                    if (previousValue) {
                                        value.onChange = previousValue.onChange;
                                        value.onRemove = previousValue.onRemove;
                                        value.$listeners = previousValue.$listeners;
                                        if (previousValue['$changes'].refId && refId_1 !== previousValue['$changes'].refId) $root.removeRef(previousValue['$changes'].refId);
                                    }
                                }
                                $root.addRef(refId_1, value, value !== previousValue);
                            }
                        } else if (typeof type === "string") //
                        // primitive value (number, string, boolean, etc)
                        //
                        value = decodePrimitiveType(type, bytes, it);
                        else {
                            var typeDef = getType(Object.keys(type)[0]);
                            var refId_2 = number(bytes, it);
                            var valueRef = $root.refs.has(refId_2) ? previousValue || $root.refs.get(refId_2) : new typeDef.constructor();
                            value = valueRef.clone(true);
                            value.$changes.refId = refId_2;
                            // preserve schema callbacks
                            if (previousValue) {
                                value.onAdd = previousValue.onAdd;
                                value.onRemove = previousValue.onRemove;
                                value.onChange = previousValue.onChange;
                                if (previousValue['$changes'].refId && refId_2 !== previousValue['$changes'].refId) {
                                    $root.removeRef(previousValue['$changes'].refId);
                                    //
                                    // Trigger onRemove if structure has been replaced.
                                    //
                                    var deletes = [];
                                    var entries = previousValue.entries();
                                    var iter = void 0;
                                    while((iter = entries.next()) && !iter.done){
                                        var _a = iter.value, key = _a[0], value_1 = _a[1];
                                        deletes.push({
                                            op: exports.OPERATION.DELETE,
                                            field: key,
                                            value: undefined,
                                            previousValue: value_1
                                        });
                                    }
                                    allChanges.set(previousValue['$changes'].refId, deletes);
                                }
                            }
                            $root.addRef(refId_2, value, valueRef !== previousValue);
                            //
                            // TODO: deprecate proxies on next version.
                            // get proxy to target value.
                            //
                            if (typeDef.getProxy) value = typeDef.getProxy(value);
                        }
                        var hasChange = previousValue !== value;
                        if (value !== null && value !== undefined) {
                            if (value['$changes']) value['$changes'].setParent(changeTree.ref, changeTree.root, fieldIndex);
                            if (ref instanceof Schema) ref[fieldName] = value;
                            else if (ref instanceof MapSchema1) {
                                // const key = ref['$indexes'].get(field);
                                var key = dynamicIndex;
                                // ref.set(key, value);
                                ref['$items'].set(key, value);
                            } else if (ref instanceof ArraySchema1) // const key = ref['$indexes'][field];
                            // console.log("SETTING FOR ArraySchema =>", { field, key, value });
                            // ref[key] = value;
                            ref.setAt(fieldIndex, value);
                            else if (ref instanceof CollectionSchema1) {
                                var index = ref.add(value);
                                ref['setIndex'](fieldIndex, index);
                            } else if (ref instanceof SetSchema1) {
                                var index = ref.add(value);
                                if (index !== false) ref['setIndex'](fieldIndex, index);
                            }
                        }
                        if (hasChange) changes.push({
                            op: operation,
                            field: fieldName,
                            dynamicIndex: dynamicIndex,
                            value: value,
                            previousValue: previousValue
                        });
                    }
                    this._triggerChanges(allChanges);
                    // drop references of unused schemas
                    $root.garbageCollectDeletedRefs();
                    return allChanges;
                };
                Schema.prototype.encode = function(encodeAll, bytes, useFilters) {
                    if (encodeAll === void 0) encodeAll = false;
                    if (bytes === void 0) bytes = [];
                    if (useFilters === void 0) useFilters = false;
                    var rootChangeTree = this.$changes;
                    var refIdsVisited = new WeakSet();
                    var changeTrees = [
                        rootChangeTree
                    ];
                    var numChangeTrees = 1;
                    for(var i = 0; i < numChangeTrees; i++){
                        var changeTree = changeTrees[i];
                        var ref = changeTree.ref;
                        var isSchema = ref instanceof Schema;
                        // Generate unique refId for the ChangeTree.
                        changeTree.ensureRefId();
                        // mark this ChangeTree as visited.
                        refIdsVisited.add(changeTree);
                        // root `refId` is skipped.
                        if (changeTree !== rootChangeTree && (changeTree.changed || encodeAll)) {
                            uint8$1(bytes, SWITCH_TO_STRUCTURE);
                            number$1(bytes, changeTree.refId);
                        }
                        var changes = encodeAll ? Array.from(changeTree.allChanges) : Array.from(changeTree.changes.values());
                        for(var j = 0, cl = changes.length; j < cl; j++){
                            var operation = encodeAll ? {
                                op: exports.OPERATION.ADD,
                                index: changes[j]
                            } : changes[j];
                            var fieldIndex = operation.index;
                            var field = isSchema ? ref['_definition'].fieldsByIndex && ref['_definition'].fieldsByIndex[fieldIndex] : fieldIndex;
                            // cache begin index if `useFilters`
                            var beginIndex = bytes.length;
                            // encode field index + operation
                            if (operation.op !== exports.OPERATION.TOUCH) {
                                if (isSchema) //
                                // Compress `fieldIndex` + `operation` into a single byte.
                                // This adds a limitaion of 64 fields per Schema structure
                                //
                                uint8$1(bytes, fieldIndex | operation.op);
                                else {
                                    uint8$1(bytes, operation.op);
                                    // custom operations
                                    if (operation.op === exports.OPERATION.CLEAR) continue;
                                    // indexed operations
                                    number$1(bytes, fieldIndex);
                                }
                            }
                            //
                            // encode "alias" for dynamic fields (maps)
                            //
                            if (!isSchema && (operation.op & exports.OPERATION.ADD) == exports.OPERATION.ADD // ADD or DELETE_AND_ADD
                            ) {
                                if (ref instanceof MapSchema1) {
                                    //
                                    // MapSchema dynamic key
                                    //
                                    var dynamicIndex = changeTree.ref['$indexes'].get(fieldIndex);
                                    string$1(bytes, dynamicIndex);
                                }
                            }
                            if (operation.op === exports.OPERATION.DELETE) continue;
                            // const type = changeTree.childType || ref._schema[field];
                            var type = changeTree.getType(fieldIndex);
                            // const type = changeTree.getType(fieldIndex);
                            var value = changeTree.getValue(fieldIndex);
                            // Enqueue ChangeTree to be visited
                            if (value && value['$changes'] && !refIdsVisited.has(value['$changes'])) {
                                changeTrees.push(value['$changes']);
                                value['$changes'].ensureRefId();
                                numChangeTrees++;
                            }
                            if (operation.op === exports.OPERATION.TOUCH) continue;
                            if (Schema.is(type)) {
                                assertInstanceType(value, type, ref, field);
                                //
                                // Encode refId for this instance.
                                // The actual instance is going to be encoded on next `changeTree` iteration.
                                //
                                number$1(bytes, value.$changes.refId);
                                // Try to encode inherited TYPE_ID if it's an ADD operation.
                                if ((operation.op & exports.OPERATION.ADD) === exports.OPERATION.ADD) this.tryEncodeTypeId(bytes, type, value.constructor);
                            } else if (typeof type === "string") //
                            // Primitive values
                            //
                            encodePrimitiveType(type, bytes, value, ref, field);
                            else {
                                //
                                // Custom type (MapSchema, ArraySchema, etc)
                                //
                                var definition = getType(Object.keys(type)[0]);
                                //
                                // ensure a ArraySchema has been provided
                                //
                                assertInstanceType(ref["_" + field], definition.constructor, ref, field);
                                //
                                // Encode refId for this instance.
                                // The actual instance is going to be encoded on next `changeTree` iteration.
                                //
                                number$1(bytes, value.$changes.refId);
                            }
                            if (useFilters) // cache begin / end index
                            changeTree.cache(fieldIndex, bytes.slice(beginIndex));
                        }
                        if (!encodeAll && !useFilters) changeTree.discard();
                    }
                    return bytes;
                };
                Schema.prototype.encodeAll = function(useFilters) {
                    return this.encode(true, [], useFilters);
                };
                Schema.prototype.applyFilters = function(client, encodeAll) {
                    var _a, _b;
                    if (encodeAll === void 0) encodeAll = false;
                    var root = this;
                    var refIdsDissallowed = new Set();
                    var $filterState = ClientState1.get(client);
                    var changeTrees = [
                        this.$changes
                    ];
                    var numChangeTrees = 1;
                    var filteredBytes = [];
                    var _loop_1 = function(i) {
                        var changeTree = changeTrees[i];
                        if (refIdsDissallowed.has(changeTree.refId)) return "continue";
                        var ref = changeTree.ref;
                        var isSchema = ref instanceof Schema;
                        uint8$1(filteredBytes, SWITCH_TO_STRUCTURE);
                        number$1(filteredBytes, changeTree.refId);
                        var clientHasRefId = $filterState.refIds.has(changeTree);
                        var isEncodeAll = encodeAll || !clientHasRefId;
                        // console.log("REF:", ref.constructor.name);
                        // console.log("Encode all?", isEncodeAll);
                        //
                        // include `changeTree` on list of known refIds by this client.
                        //
                        $filterState.addRefId(changeTree);
                        var containerIndexes = $filterState.containerIndexes.get(changeTree);
                        var changes = isEncodeAll ? Array.from(changeTree.allChanges) : Array.from(changeTree.changes.values());
                        //
                        // WORKAROUND: tries to re-evaluate previously not included @filter() attributes
                        // - see "DELETE a field of Schema" test case.
                        //
                        if (!encodeAll && isSchema && ref._definition.indexesWithFilters) {
                            var indexesWithFilters = ref._definition.indexesWithFilters;
                            indexesWithFilters.forEach(function(indexWithFilter) {
                                if (!containerIndexes.has(indexWithFilter) && changeTree.allChanges.has(indexWithFilter)) {
                                    if (isEncodeAll) changes.push(indexWithFilter);
                                    else changes.push({
                                        op: exports.OPERATION.ADD,
                                        index: indexWithFilter
                                    });
                                }
                            });
                        }
                        for(var j = 0, cl = changes.length; j < cl; j++){
                            var change = isEncodeAll ? {
                                op: exports.OPERATION.ADD,
                                index: changes[j]
                            } : changes[j];
                            // custom operations
                            if (change.op === exports.OPERATION.CLEAR) {
                                uint8$1(filteredBytes, change.op);
                                continue;
                            }
                            var fieldIndex = change.index;
                            //
                            // Deleting fields: encode the operation + field index
                            //
                            if (change.op === exports.OPERATION.DELETE) {
                                //
                                // DELETE operations also need to go through filtering.
                                //
                                // TODO: cache the previous value so we can access the value (primitive or `refId`)
                                // (check against `$filterState.refIds`)
                                //
                                if (isSchema) uint8$1(filteredBytes, change.op | fieldIndex);
                                else {
                                    uint8$1(filteredBytes, change.op);
                                    number$1(filteredBytes, fieldIndex);
                                }
                                continue;
                            }
                            // indexed operation
                            var value = changeTree.getValue(fieldIndex);
                            var type = changeTree.getType(fieldIndex);
                            if (isSchema) {
                                // Is a Schema!
                                var filter = ref._definition.filters && ref._definition.filters[fieldIndex];
                                if (filter && !filter.call(ref, client, value, root)) {
                                    if (value && value['$changes']) refIdsDissallowed.add(value['$changes'].refId);
                                    continue;
                                }
                            } else {
                                // Is a collection! (map, array, etc.)
                                var parent = changeTree.parent;
                                var filter = changeTree.getChildrenFilter();
                                if (filter && !filter.call(parent, client, ref['$indexes'].get(fieldIndex), value, root)) {
                                    if (value && value['$changes']) refIdsDissallowed.add(value['$changes'].refId);
                                    continue;
                                }
                            }
                            // visit child ChangeTree on further iteration.
                            if (value['$changes']) {
                                changeTrees.push(value['$changes']);
                                numChangeTrees++;
                            }
                            //
                            // Copy cached bytes
                            //
                            if (change.op !== exports.OPERATION.TOUCH) {
                                //
                                // TODO: refactor me!
                                //
                                if (change.op === exports.OPERATION.ADD || isSchema) {
                                    //
                                    // use cached bytes directly if is from Schema type.
                                    //
                                    filteredBytes.push.apply(filteredBytes, (_a = changeTree.caches[fieldIndex]) !== null && _a !== void 0 ? _a : []);
                                    containerIndexes.add(fieldIndex);
                                } else if (containerIndexes.has(fieldIndex)) //
                                // use cached bytes if already has the field
                                //
                                filteredBytes.push.apply(filteredBytes, (_b = changeTree.caches[fieldIndex]) !== null && _b !== void 0 ? _b : []);
                                else {
                                    //
                                    // force ADD operation if field is not known by this client.
                                    //
                                    containerIndexes.add(fieldIndex);
                                    uint8$1(filteredBytes, exports.OPERATION.ADD);
                                    number$1(filteredBytes, fieldIndex);
                                    if (ref instanceof MapSchema1) {
                                        //
                                        // MapSchema dynamic key
                                        //
                                        var dynamicIndex = changeTree.ref['$indexes'].get(fieldIndex);
                                        string$1(filteredBytes, dynamicIndex);
                                    }
                                    if (value['$changes']) number$1(filteredBytes, value['$changes'].refId);
                                    else // "encodePrimitiveType" without type checking.
                                    // the type checking has been done on the first .encode() call.
                                    encode[type](filteredBytes, value);
                                }
                            } else if (value['$changes'] && !isSchema) {
                                //
                                // TODO:
                                // - track ADD/REPLACE/DELETE instances on `$filterState`
                                // - do NOT always encode dynamicIndex for MapSchema.
                                //   (If client already has that key, only the first index is necessary.)
                                //
                                uint8$1(filteredBytes, exports.OPERATION.ADD);
                                number$1(filteredBytes, fieldIndex);
                                if (ref instanceof MapSchema1) {
                                    //
                                    // MapSchema dynamic key
                                    //
                                    var dynamicIndex = changeTree.ref['$indexes'].get(fieldIndex);
                                    string$1(filteredBytes, dynamicIndex);
                                }
                                number$1(filteredBytes, value['$changes'].refId);
                            }
                        }
                    };
                    for(var i1 = 0; i1 < numChangeTrees; i1++)_loop_1(i1);
                    return filteredBytes;
                };
                Schema.prototype.clone = function() {
                    var cloned = new this.constructor;
                    var schema = this._definition.schema;
                    for(var field in schema)if (typeof this[field] === "object" && typeof this[field].clone === "function") // deep clone
                    cloned[field] = this[field].clone();
                    else // primitive values
                    cloned[field] = this[field];
                    return cloned;
                };
                Schema.prototype.triggerAll = function() {
                    // skip if haven't received any remote refs yet.
                    if (this.$changes.root.refs.size === 0) return;
                    var allChanges = new Map();
                    Schema.prototype._triggerAllFillChanges.call(this, this, allChanges);
                    try {
                        Schema.prototype._triggerChanges.call(this, allChanges);
                    } catch (e) {
                        Schema.onError(e);
                    }
                };
                Schema.prototype.toJSON = function() {
                    var schema = this._definition.schema;
                    var deprecated = this._definition.deprecated;
                    var obj = {};
                    for(var field in schema)if (!deprecated[field] && this[field] !== null && typeof this[field] !== "undefined") obj[field] = typeof this[field]['toJSON'] === "function" ? this[field]['toJSON']() : this["_" + field];
                    return obj;
                };
                Schema.prototype.discardAllChanges = function() {
                    this.$changes.discardAll();
                };
                Schema.prototype.getByIndex = function(index) {
                    return this[this._definition.fieldsByIndex[index]];
                };
                Schema.prototype.deleteByIndex = function(index) {
                    this[this._definition.fieldsByIndex[index]] = undefined;
                };
                Schema.prototype.tryEncodeTypeId = function(bytes, type, targetType) {
                    if (type._typeid !== targetType._typeid) {
                        uint8$1(bytes, TYPE_ID);
                        number$1(bytes, targetType._typeid);
                    }
                };
                Schema.prototype.getSchemaType = function(bytes, it, defaultType) {
                    var type;
                    if (bytes[it.offset] === TYPE_ID) {
                        it.offset++;
                        type = this.constructor._context.get(number(bytes, it));
                    }
                    return type || defaultType;
                };
                Schema.prototype.createTypeInstance = function(type) {
                    var instance = new type();
                    // assign root on $changes
                    instance.$changes.root = this.$changes.root;
                    return instance;
                };
                Schema.prototype._triggerAllFillChanges = function(ref, allChanges) {
                    if (allChanges.has(ref['$changes'].refId)) return;
                    var changes = [];
                    allChanges.set(ref['$changes'].refId || 0, changes);
                    if (ref instanceof Schema) {
                        var schema = ref._definition.schema;
                        for(var fieldName in schema){
                            var _field = "_" + fieldName;
                            var value = ref[_field];
                            if (value !== undefined) {
                                changes.push({
                                    op: exports.OPERATION.ADD,
                                    field: fieldName,
                                    value: value,
                                    previousValue: undefined
                                });
                                if (value['$changes'] !== undefined) Schema.prototype._triggerAllFillChanges.call(this, value, allChanges);
                            }
                        }
                    } else {
                        var entries = ref.entries();
                        var iter = void 0;
                        while((iter = entries.next()) && !iter.done){
                            var _a = iter.value, key = _a[0], value = _a[1];
                            changes.push({
                                op: exports.OPERATION.ADD,
                                field: key,
                                dynamicIndex: key,
                                value: value,
                                previousValue: undefined
                            });
                            if (value['$changes'] !== undefined) Schema.prototype._triggerAllFillChanges.call(this, value, allChanges);
                        }
                    }
                };
                Schema.prototype._triggerChanges = function(allChanges) {
                    var _this = this;
                    allChanges.forEach(function(changes, refId) {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                        if (changes.length > 0) {
                            var ref = _this.$changes.root.refs.get(refId);
                            var isSchema = ref instanceof Schema;
                            for(var i = 0; i < changes.length; i++){
                                var change = changes[i];
                                var listener = ref['$listeners'] && ref['$listeners'][change.field];
                                if (!isSchema) {
                                    if (change.op === exports.OPERATION.ADD && change.previousValue === undefined) (_b = (_a = ref).onAdd) === null || _b === void 0 || _b.call(_a, change.value, (_c = change.dynamicIndex) !== null && _c !== void 0 ? _c : change.field);
                                    else if (change.op === exports.OPERATION.DELETE) //
                                    // FIXME: `previousValue` should always be avaiiable.
                                    // ADD + DELETE operations are still encoding DELETE operation.
                                    //
                                    {
                                        if (change.previousValue !== undefined) (_e = (_d = ref).onRemove) === null || _e === void 0 || _e.call(_d, change.previousValue, (_f = change.dynamicIndex) !== null && _f !== void 0 ? _f : change.field);
                                    } else if (change.op === exports.OPERATION.DELETE_AND_ADD) {
                                        if (change.previousValue !== undefined) (_h = (_g = ref).onRemove) === null || _h === void 0 || _h.call(_g, change.previousValue, change.dynamicIndex);
                                        (_k = (_j = ref).onAdd) === null || _k === void 0 || _k.call(_j, change.value, change.dynamicIndex);
                                    } else if (change.op === exports.OPERATION.REPLACE || change.value !== change.previousValue) (_m = (_l = ref).onChange) === null || _m === void 0 || _m.call(_l, change.value, change.dynamicIndex);
                                }
                                //
                                // trigger onRemove on child structure.
                                //
                                if ((change.op & exports.OPERATION.DELETE) === exports.OPERATION.DELETE && change.previousValue instanceof Schema && change.previousValue.onRemove) change.previousValue.onRemove();
                                if (listener) try {
                                    listener.invoke(change.value, change.previousValue);
                                } catch (e) {
                                    Schema.onError(e);
                                }
                            }
                            if (isSchema) {
                                if (ref.onChange) try {
                                    ref.onChange(changes);
                                } catch (e) {
                                    Schema.onError(e);
                                }
                            }
                        }
                    });
                };
                Schema._definition = SchemaDefinition1.create();
                return Schema;
            }();
            function dumpChanges(schema) {
                var changeTrees = [
                    schema['$changes']
                ];
                var numChangeTrees = 1;
                var dump = {};
                var currentStructure = dump;
                var _loop_1 = function(i) {
                    var changeTree = changeTrees[i];
                    changeTree.changes.forEach(function(change) {
                        var ref = changeTree.ref;
                        var fieldIndex = change.index;
                        var field = ref['_definition'] ? ref['_definition'].fieldsByIndex[fieldIndex] : ref['$indexes'].get(fieldIndex);
                        currentStructure[field] = changeTree.getValue(fieldIndex);
                    });
                };
                for(var i2 = 0; i2 < numChangeTrees; i2++)_loop_1(i2);
                return dump;
            }
            var reflectionContext = new Context1();
            /**
         * Reflection
         */ var ReflectionField1 = /** @class */ function(_super) {
                __extends(ReflectionField, _super);
                function ReflectionField() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    type1("string", reflectionContext)
                ], ReflectionField.prototype, "name", void 0);
                __decorate([
                    type1("string", reflectionContext)
                ], ReflectionField.prototype, "type", void 0);
                __decorate([
                    type1("number", reflectionContext)
                ], ReflectionField.prototype, "referencedType", void 0);
                return ReflectionField;
            }(Schema1);
            var ReflectionType1 = /** @class */ function(_super) {
                __extends(ReflectionType, _super);
                function ReflectionType() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.fields = new ArraySchema1();
                    return _this;
                }
                __decorate([
                    type1("number", reflectionContext)
                ], ReflectionType.prototype, "id", void 0);
                __decorate([
                    type1([
                        ReflectionField1
                    ], reflectionContext)
                ], ReflectionType.prototype, "fields", void 0);
                return ReflectionType;
            }(Schema1);
            var Reflection1 = /** @class */ function(_super1) {
                __extends(Reflection, _super1);
                function Reflection() {
                    var _this = _super1 !== null && _super1.apply(this, arguments) || this;
                    _this.types = new ArraySchema1();
                    return _this;
                }
                Reflection.encode = function(instance) {
                    var rootSchemaType = instance.constructor;
                    var reflection = new Reflection();
                    reflection.rootType = rootSchemaType._typeid;
                    var buildType = function(currentType, schema) {
                        for(var fieldName in schema){
                            var field = new ReflectionField1();
                            field.name = fieldName;
                            var fieldType = void 0;
                            if (typeof schema[fieldName] === "string") fieldType = schema[fieldName];
                            else {
                                var type_1 = schema[fieldName];
                                var childTypeSchema = void 0;
                                //
                                // TODO: refactor below.
                                //
                                if (Schema1.is(type_1)) {
                                    fieldType = "ref";
                                    childTypeSchema = schema[fieldName];
                                } else {
                                    fieldType = Object.keys(type_1)[0];
                                    if (typeof type_1[fieldType] === "string") fieldType += ":" + type_1[fieldType]; // array:string
                                    else childTypeSchema = type_1[fieldType];
                                }
                                field.referencedType = childTypeSchema ? childTypeSchema._typeid : -1;
                            }
                            field.type = fieldType;
                            currentType.fields.push(field);
                        }
                        reflection.types.push(currentType);
                    };
                    var types = rootSchemaType._context.types;
                    for(var typeid in types){
                        var type_2 = new ReflectionType1();
                        type_2.id = Number(typeid);
                        buildType(type_2, types[typeid]._definition.schema);
                    }
                    return reflection.encodeAll();
                };
                Reflection.decode = function(bytes, it) {
                    var context = new Context1();
                    var reflection = new Reflection();
                    reflection.decode(bytes, it);
                    var schemaTypes = reflection.types.reduce(function(types, reflectionType) {
                        var schema = /** @class */ function(_super) {
                            __extends(_, _super);
                            function _() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            return _;
                        }(Schema1);
                        var typeid = reflectionType.id;
                        types[typeid] = schema;
                        context.add(schema, typeid);
                        return types;
                    }, {});
                    reflection.types.forEach(function(reflectionType) {
                        var schemaType = schemaTypes[reflectionType.id];
                        reflectionType.fields.forEach(function(field) {
                            var _a;
                            if (field.referencedType !== undefined) {
                                var fieldType = field.type;
                                var refType = schemaTypes[field.referencedType];
                                // map or array of primitive type (-1)
                                if (!refType) {
                                    var typeInfo = field.type.split(":");
                                    fieldType = typeInfo[0];
                                    refType = typeInfo[1];
                                }
                                if (fieldType === "ref") type1(refType, context)(schemaType.prototype, field.name);
                                else type1((_a = {}, _a[fieldType] = refType, _a), context)(schemaType.prototype, field.name);
                            } else type1(field.type, context)(schemaType.prototype, field.name);
                        });
                    });
                    var rootType = schemaTypes[reflection.rootType];
                    var rootInstance = new rootType();
                    /**
                 * auto-initialize referenced types on root type
                 * to allow registering listeners immediatelly on client-side
                 */ for(var fieldName in rootType._definition.schema){
                        var fieldType1 = rootType._definition.schema[fieldName];
                        if (typeof fieldType1 !== "string") rootInstance[fieldName] = typeof fieldType1 === "function" ? new fieldType1() // is a schema reference
                         : new (getType(Object.keys(fieldType1)[0])).constructor(); // is a "collection"
                    }
                    return rootInstance;
                };
                __decorate([
                    type1([
                        ReflectionType1
                    ], reflectionContext)
                ], Reflection.prototype, "types", void 0);
                __decorate([
                    type1("number", reflectionContext)
                ], Reflection.prototype, "rootType", void 0);
                return Reflection;
            }(Schema1);
            registerType("map", {
                constructor: MapSchema1,
                getProxy: getMapProxy
            });
            registerType("array", {
                constructor: ArraySchema1,
                getProxy: getArrayProxy
            });
            registerType("set", {
                constructor: SetSchema1
            });
            registerType("collection", {
                constructor: CollectionSchema1
            });
            exports.ArraySchema = ArraySchema1;
            exports.CollectionSchema = CollectionSchema1;
            exports.Context = Context1;
            exports.MapSchema = MapSchema1;
            exports.Reflection = Reflection1;
            exports.ReflectionField = ReflectionField1;
            exports.ReflectionType = ReflectionType1;
            exports.Schema = Schema1;
            exports.SchemaDefinition = SchemaDefinition1;
            exports.SetSchema = SetSchema1;
            exports.decode = decode;
            exports.defineTypes = defineTypes;
            exports.deprecated = deprecated1;
            exports.dumpChanges = dumpChanges;
            exports.encode = encode;
            exports.filter = filter1;
            exports.filterChildren = filterChildren;
            exports.hasFilter = hasFilter;
            exports.registerType = registerType;
            exports.type = type1;
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
        });
    });
    var Room1 = /** @class */ function() {
        function Room(name, rootSchema) {
            var _this = this;
            // Public signals
            this.onStateChange = createSignal();
            this.onError = createSignal();
            this.onLeave = createSignal();
            this.onJoin = createSignal();
            this.hasJoined = false;
            this.onMessageHandlers = createNanoEvents();
            this.id = null;
            this.name = name;
            if (rootSchema) {
                this.serializer = new (getSerializer("schema"));
                this.rootSchema = rootSchema;
                this.serializer.state = new rootSchema();
            }
            this.onError(function(code, message) {
                return console.warn("colyseus.js - onError => (" + code + ") " + message);
            });
            this.onLeave(function() {
                return _this.removeAllListeners();
            });
        }
        Room.prototype.connect = function(endpoint) {
            var _this = this;
            this.connection = new Connection1();
            this.connection.events.onmessage = this.onMessageCallback.bind(this);
            this.connection.events.onclose = function(e) {
                if (!_this.hasJoined) {
                    console.warn("Room connection was closed unexpectedly (" + e.code + "): " + e.reason);
                    _this.onError.invoke(e.code, e.reason);
                    return;
                }
                _this.onLeave.invoke(e.code);
                _this.destroy();
            };
            this.connection.events.onerror = function(e) {
                console.warn("Room, onError (" + e.code + "): " + e.reason);
                _this.onError.invoke(e.code, e.reason);
            };
            this.connection.connect(endpoint);
        };
        Room.prototype.leave = function(consented) {
            var _this = this;
            if (consented === void 0) consented = true;
            return new Promise(function(resolve) {
                _this.onLeave(function(code) {
                    return resolve(code);
                });
                if (_this.connection) {
                    if (consented) _this.connection.send([
                        exports1.Protocol.LEAVE_ROOM
                    ]);
                    else _this.connection.close();
                } else _this.onLeave.invoke(4000); // "consented" code
            });
        };
        Room.prototype.onMessage = function(type, callback) {
            return this.onMessageHandlers.on(this.getMessageHandlerKey(type), callback);
        };
        Room.prototype.send = function(type, message) {
            var initialBytes = [
                exports1.Protocol.ROOM_DATA
            ];
            if (typeof type === "string") umd.encode.string(initialBytes, type);
            else umd.encode.number(initialBytes, type);
            var arr;
            if (message !== undefined) {
                var encoded = encode1(message);
                arr = new Uint8Array(initialBytes.length + encoded.byteLength);
                arr.set(new Uint8Array(initialBytes), 0);
                arr.set(new Uint8Array(encoded), initialBytes.length);
            } else arr = new Uint8Array(initialBytes);
            this.connection.send(arr.buffer);
        };
        Object.defineProperty(Room.prototype, "state", {
            get: function() {
                return this.serializer.getState();
            },
            enumerable: false,
            configurable: true
        });
        Room.prototype.removeAllListeners = function() {
            this.onJoin.clear();
            this.onStateChange.clear();
            this.onError.clear();
            this.onLeave.clear();
            this.onMessageHandlers.events = {};
        };
        Room.prototype.onMessageCallback = function(event) {
            var bytes = Array.from(new Uint8Array(event.data));
            var code = bytes[0];
            if (code === exports1.Protocol.JOIN_ROOM) {
                var offset = 1;
                this.serializerId = utf8Read1(bytes, offset);
                offset += utf8Length1(this.serializerId);
                // Instantiate serializer if not locally available.
                if (!this.serializer) {
                    var serializer = getSerializer(this.serializerId);
                    this.serializer = new serializer();
                }
                if (bytes.length > offset && this.serializer.handshake) this.serializer.handshake(bytes, {
                    offset: offset
                });
                this.hasJoined = true;
                this.onJoin.invoke();
                // acknowledge successfull JOIN_ROOM
                this.connection.send([
                    exports1.Protocol.JOIN_ROOM
                ]);
            } else if (code === exports1.Protocol.ERROR) {
                var it_1 = {
                    offset: 1
                };
                var code_1 = umd.decode.number(bytes, it_1);
                var message = umd.decode.string(bytes, it_1);
                this.onError.invoke(code_1, message);
            } else if (code === exports1.Protocol.LEAVE_ROOM) this.leave();
            else if (code === exports1.Protocol.ROOM_DATA_SCHEMA) {
                var it_2 = {
                    offset: 1
                };
                var context_1 = this.serializer.getState().constructor._context;
                var type = context_1.get(umd.decode.number(bytes, it_2));
                var message = new type();
                message.decode(bytes, it_2);
                this.dispatchMessage(type, message);
            } else if (code === exports1.Protocol.ROOM_STATE) {
                bytes.shift(); // drop `code` byte
                this.setState(bytes);
            } else if (code === exports1.Protocol.ROOM_STATE_PATCH) {
                bytes.shift(); // drop `code` byte
                this.patch(bytes);
            } else if (code === exports1.Protocol.ROOM_DATA) {
                var it_3 = {
                    offset: 1
                };
                var type = umd.decode.stringCheck(bytes, it_3) ? umd.decode.string(bytes, it_3) : umd.decode.number(bytes, it_3);
                var message = bytes.length > it_3.offset ? decode1(event.data, it_3.offset) : undefined;
                this.dispatchMessage(type, message);
            }
        };
        Room.prototype.setState = function(encodedState) {
            this.serializer.setState(encodedState);
            this.onStateChange.invoke(this.serializer.getState());
        };
        Room.prototype.patch = function(binaryPatch) {
            this.serializer.patch(binaryPatch);
            this.onStateChange.invoke(this.serializer.getState());
        };
        Room.prototype.dispatchMessage = function(type, message) {
            var messageType = this.getMessageHandlerKey(type);
            if (this.onMessageHandlers.events[messageType]) this.onMessageHandlers.emit(messageType, message);
            else if (this.onMessageHandlers.events['*']) this.onMessageHandlers.emit('*', type, message);
            else console.warn("colyseus.js: onMessage() not registered for type '" + type + "'.");
        };
        Room.prototype.destroy = function() {
            if (this.serializer) this.serializer.teardown();
        };
        Room.prototype.getMessageHandlerKey = function(type) {
            switch(typeof type){
                // typeof Schema
                case "function":
                    return "$" + type._typeid;
                // string
                case "string":
                    return type;
                // number
                case "number":
                    return "i" + type;
                default:
                    throw new Error("invalid message type.");
            }
        };
        return Room;
    }();
    /// <reference path="../typings/cocos-creator.d.ts" />
    /**
     * We do not assign 'storage' to window.localStorage immediatelly for React
     * Native compatibility. window.localStorage is not present when this module is
     * loaded.
     */ var storage;
    function getStorage() {
        if (!storage) storage = typeof cc !== 'undefined' && cc.sys && cc.sys.localStorage ? cc.sys.localStorage // compatibility with cocos creator
         : typeof window !== "undefined" && window.localStorage //RN does have window object at this point, but localStorage is not defined
         ? window.localStorage // regular browser environment
         : {
            cache: {},
            setItem: function(key, value) {
                this.cache[key] = value;
            },
            getItem: function(key) {
                this.cache[key];
            },
            removeItem: function(key) {
                delete this.cache[key];
            }
        };
        return storage;
    }
    function setItem(key, value) {
        getStorage().setItem(key, value);
    }
    function removeItem(key) {
        getStorage().removeItem(key);
    }
    function getItem(key, callback) {
        var value = getStorage().getItem(key);
        if (typeof Promise === 'undefined' || !(value instanceof Promise)) // browser has synchronous return
        callback(value);
        else // react-native is asynchronous
        value.then(function(id) {
            return callback(id);
        });
    }
    var TOKEN_STORAGE = "colyseus-auth-token";
    exports1.Platform = void 0;
    (function(Platform) {
        Platform["ios"] = "ios";
        Platform["android"] = "android";
    })(exports1.Platform || (exports1.Platform = {}));
    var Auth1 = /** @class */ function() {
        function Auth(endpoint) {
            var _this = this;
            this._id = undefined;
            this.username = undefined;
            this.displayName = undefined;
            this.avatarUrl = undefined;
            this.isAnonymous = undefined;
            this.email = undefined;
            this.lang = undefined;
            this.location = undefined;
            this.timezone = undefined;
            this.metadata = undefined;
            this.devices = undefined;
            this.facebookId = undefined;
            this.twitterId = undefined;
            this.googleId = undefined;
            this.gameCenterId = undefined;
            this.steamId = undefined;
            this.friendIds = undefined;
            this.blockedUserIds = undefined;
            this.createdAt = undefined;
            this.updatedAt = undefined;
            // auth token
            this.token = undefined;
            this.endpoint = endpoint.replace("ws", "http");
            getItem(TOKEN_STORAGE, function(token) {
                return _this.token = token;
            });
        }
        Object.defineProperty(Auth.prototype, "hasToken", {
            get: function() {
                return !!this.token;
            },
            enumerable: false,
            configurable: true
        });
        Auth.prototype.login = function(options) {
            if (options === void 0) options = {};
            return __awaiter(this, void 0, void 0, function() {
                var queryParams, data, attr;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            queryParams = Object.assign({}, options);
                            if (this.hasToken) queryParams.token = this.token;
                            return [
                                4 /*yield*/ ,
                                this.request('post', '/auth', queryParams)
                            ];
                        case 1:
                            data = _a.sent();
                            // set & cache token
                            this.token = data.token;
                            setItem(TOKEN_STORAGE, this.token);
                            for(attr in data)if (this.hasOwnProperty(attr)) this[attr] = data[attr];
                            this.registerPingService();
                            return [
                                2 /*return*/ ,
                                this
                            ];
                    }
                });
            });
        };
        Auth.prototype.save = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request('put', '/auth', {}, {
                                    username: this.username,
                                    displayName: this.displayName,
                                    avatarUrl: this.avatarUrl,
                                    lang: this.lang,
                                    location: this.location,
                                    timezone: this.timezone
                                })
                            ];
                        case 1:
                            _a.sent();
                            return [
                                2 /*return*/ ,
                                this
                            ];
                    }
                });
            });
        };
        Auth.prototype.getFriends = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request('get', '/friends/all')
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.getOnlineFriends = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request('get', '/friends/online')
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.getFriendRequests = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request('get', '/friends/requests')
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.sendFriendRequest = function(friendId) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request('post', '/friends/requests', {
                                    userId: friendId
                                })
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.acceptFriendRequest = function(friendId) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request('put', '/friends/requests', {
                                    userId: friendId
                                })
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.declineFriendRequest = function(friendId) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request('del', '/friends/requests', {
                                    userId: friendId
                                })
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.blockUser = function(friendId) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request('post', '/friends/block', {
                                    userId: friendId
                                })
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.unblockUser = function(friendId) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request('put', '/friends/block', {
                                    userId: friendId
                                })
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.request = function(method, segments, query, body, headers) {
            if (query === void 0) query = {};
            if (headers === void 0) headers = {};
            return __awaiter(this, void 0, void 0, function() {
                var queryParams, name_1, queryString, opts;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            headers['Accept'] = 'application/json';
                            if (this.hasToken) headers['Authorization'] = 'Bearer ' + this.token;
                            queryParams = [];
                            for(name_1 in query)queryParams.push(name_1 + "=" + query[name_1]);
                            queryString = queryParams.length > 0 ? "?" + queryParams.join("&") : '';
                            opts = {
                                headers: headers
                            };
                            if (body) opts.body = body;
                            return [
                                4 /*yield*/ ,
                                http[method]("" + this.endpoint + segments + queryString, opts)
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent().data
                            ];
                    }
                });
            });
        };
        Auth.prototype.logout = function() {
            this.token = undefined;
            removeItem(TOKEN_STORAGE);
            this.unregisterPingService();
        };
        Auth.prototype.registerPingService = function(timeout) {
            var _this = this;
            if (timeout === void 0) timeout = 15000;
            this.unregisterPingService();
            this.keepOnlineInterval = setInterval(function() {
                return _this.request('get', '/auth');
            }, timeout);
        };
        Auth.prototype.unregisterPingService = function() {
            clearInterval(this.keepOnlineInterval);
        };
        return Auth;
    }();
    var _a1;
    var MatchMakeError1 = /** @class */ function(_super) {
        __extends1(MatchMakeError, _super);
        function MatchMakeError(message, code) {
            var _this = _super.call(this, message) || this;
            _this.code = code;
            Object.setPrototypeOf(_this, MatchMakeError.prototype);
            return _this;
        }
        return MatchMakeError;
    }(Error);
    // - React Native does not provide `window.location`
    // - Cocos Creator (Native) does not provide `window.location.hostname` 
    var DEFAULT_ENDPOINT = typeof window !== "undefined" && typeof ((_a1 = window === null || window === void 0 ? void 0 : window.location) === null || _a1 === void 0 ? void 0 : _a1.hostname) !== "undefined" ? window.location.protocol.replace("http", "ws") + "//" + window.location.hostname + (window.location.port && ":" + window.location.port) : "ws://127.0.0.1:2567";
    var Client1 = /** @class */ function() {
        function Client(endpoint) {
            if (endpoint === void 0) endpoint = DEFAULT_ENDPOINT;
            this.endpoint = endpoint;
        }
        Object.defineProperty(Client.prototype, "auth", {
            get: function() {
                if (!this._auth) this._auth = new Auth1(this.endpoint);
                return this._auth;
            },
            enumerable: false,
            configurable: true
        });
        Client.prototype.joinOrCreate = function(roomName, options, rootSchema) {
            if (options === void 0) options = {};
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.createMatchMakeRequest('joinOrCreate', roomName, options, rootSchema)
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Client.prototype.create = function(roomName, options, rootSchema) {
            if (options === void 0) options = {};
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.createMatchMakeRequest('create', roomName, options, rootSchema)
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Client.prototype.join = function(roomName, options, rootSchema) {
            if (options === void 0) options = {};
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.createMatchMakeRequest('join', roomName, options, rootSchema)
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Client.prototype.joinById = function(roomId, options, rootSchema) {
            if (options === void 0) options = {};
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.createMatchMakeRequest('joinById', roomId, options, rootSchema)
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Client.prototype.reconnect = function(roomId, sessionId, rootSchema) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.createMatchMakeRequest('joinById', roomId, {
                                    sessionId: sessionId
                                }, rootSchema)
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Client.prototype.getAvailableRooms = function(roomName) {
            if (roomName === void 0) roomName = "";
            return __awaiter(this, void 0, void 0, function() {
                var url;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            url = this.endpoint.replace("ws", "http") + "/matchmake/" + roomName;
                            return [
                                4 /*yield*/ ,
                                get_1(url, {
                                    headers: {
                                        'Accept': 'application/json'
                                    }
                                })
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent().data
                            ];
                    }
                });
            });
        };
        Client.prototype.consumeSeatReservation = function(response, rootSchema) {
            return __awaiter(this, void 0, void 0, function() {
                var room;
                return __generator(this, function(_a) {
                    room = this.createRoom(response.room.name, rootSchema);
                    room.id = response.room.roomId;
                    room.sessionId = response.sessionId;
                    room.connect(this.buildEndpoint(response.room, {
                        sessionId: room.sessionId
                    }));
                    return [
                        2 /*return*/ ,
                        new Promise(function(resolve, reject) {
                            var onError = function(code, message) {
                                return reject(new ServerError1(code, message));
                            };
                            room.onError.once(onError);
                            room['onJoin'].once(function() {
                                room.onError.remove(onError);
                                resolve(room);
                            });
                        })
                    ];
                });
            });
        };
        Client.prototype.createMatchMakeRequest = function(method, roomName, options, rootSchema) {
            if (options === void 0) options = {};
            return __awaiter(this, void 0, void 0, function() {
                var url, response;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            url = this.endpoint.replace("ws", "http") + "/matchmake/" + method + "/" + roomName;
                            // automatically forward auth token, if present
                            if (this._auth && this._auth.hasToken) options.token = this._auth.token;
                            return [
                                4 /*yield*/ ,
                                post_1(url, {
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(options)
                                })
                            ];
                        case 1:
                            response = _a.sent().data;
                            if (response.error) throw new MatchMakeError1(response.error, response.code);
                            return [
                                2 /*return*/ ,
                                this.consumeSeatReservation(response, rootSchema)
                            ];
                    }
                });
            });
        };
        Client.prototype.createRoom = function(roomName, rootSchema) {
            return new Room1(roomName, rootSchema);
        };
        Client.prototype.buildEndpoint = function(room, options) {
            if (options === void 0) options = {};
            var params = [];
            for(var name_1 in options){
                if (!options.hasOwnProperty(name_1)) continue;
                params.push(name_1 + "=" + options[name_1]);
            }
            return this.endpoint + "/" + room.processId + "/" + room.roomId + "?" + params.join('&');
        };
        return Client;
    }();
    var SchemaSerializer1 = /** @class */ function() {
        function SchemaSerializer() {}
        SchemaSerializer.prototype.setState = function(rawState) {
            this.state.decode(rawState);
        };
        SchemaSerializer.prototype.getState = function() {
            return this.state;
        };
        SchemaSerializer.prototype.patch = function(patches) {
            this.state.decode(patches);
        };
        SchemaSerializer.prototype.teardown = function() {
            var _a, _b;
            (_b = (_a = this.state) === null || _a === void 0 ? void 0 : _a['$changes']) === null || _b === void 0 || _b.root.clearRefs();
        };
        SchemaSerializer.prototype.handshake = function(bytes, it) {
            if (this.state) {
                // validate client/server definitinos
                var reflection = new umd.Reflection();
                reflection.decode(bytes, it);
            } else // initialize reflected state from server
            this.state = umd.Reflection.decode(bytes, it);
        };
        return SchemaSerializer;
    }();
    var NoneSerializer1 = /** @class */ function() {
        function NoneSerializer() {}
        NoneSerializer.prototype.setState = function(rawState) {};
        NoneSerializer.prototype.getState = function() {
            return null;
        };
        NoneSerializer.prototype.patch = function(patches) {};
        NoneSerializer.prototype.teardown = function() {};
        NoneSerializer.prototype.handshake = function(bytes) {};
        return NoneSerializer;
    }();
    registerSerializer('schema', SchemaSerializer1);
    registerSerializer('none', NoneSerializer1);
    exports1.Auth = Auth1;
    exports1.Client = Client1;
    exports1.Room = Room1;
    exports1.SchemaSerializer = SchemaSerializer1;
    exports1.registerSerializer = registerSerializer;
    Object.defineProperty(exports1, '__esModule', {
        value: true
    });
});

},{}],"he2do":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RandomBot", ()=>RandomBot
);
var _bot = require("./Bot");
var _readystate = require("../messages/readystate");
var _playeraction = require("../messages/playeraction");
class RandomBot extends _bot.Bot {
    constructor(){
        super();
    }
    updateState(newState) {
        super.updateState(newState);
        if (!this.state.player_map[this.id].ready) this.room.send("ready", _readystate.READY);
        if (this.isTurn != this.state.player_map[this.id].isTurn) {
            this.isTurn = this.state.player_map[this.id].isTurn;
            if (this.isTurn) {
                // Randomly select fold, call, or all-in
                let choice = Math.floor(Math.random() * 3);
                if (choice == 0) {
                    this.log("FOLDING");
                    this.room.send("fold", {});
                } else if (choice == 1) {
                    this.log("CALLING");
                    this.room.send("call", {});
                } else if (choice == 2) {
                    this.log("GOING ALL IN");
                    this.room.send("raise", _playeraction.raise(this.state.player_map[this.id].bb + this.state.player_map[this.id].currentBet));
                }
            }
        }
    }
    onStateChanges(changes) {
        super.onStateChanges(changes);
    }
}

},{"./Bot":"kfWQR","../messages/readystate":"azZen","../messages/playeraction":"lgSKO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kfWQR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Bot", ()=>Bot
);
var _xterm = require("xterm");
var _xtermAddonFit = require("xterm-addon-fit");
const fitAddon = new _xtermAddonFit.FitAddon();
function onSize() {
    fitAddon.fit();
}
window.addEventListener('resize', onSize, false);
function downloadLog(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
class Bot {
    constructor(){
        this.logFile = "";
        this.debug = false;
        let downloadBtn = document.createElement('button');
        downloadBtn.innerText = "Download Log";
        downloadBtn.onclick = ()=>{
            downloadLog('log.txt', this.logFile);
        };
        document.body.appendChild(downloadBtn);
        let d1 = document.createElement('div');
        d1.classList.add("codeRunCon");
        d1.classList.add("table-responsive");
        d1.id = "codeRunCon";
        document.body.appendChild(d1);
        let div = document.createElement('div');
        div.id = 'terminal';
        d1.appendChild(div);
        this.terminal = new _xterm.Terminal({
            convertEol: true
        });
        this.terminal.loadAddon(fitAddon);
        this.terminal.open(div);
        fitAddon.fit();
    }
    onServerError(error) {
        throw Error("Not implemented");
    }
    updateState(newState) {
        this.state = newState;
        console.log(this.debug);
        this.log("State updated:", this.debug);
        this.log(JSON.stringify(newState, null, 2), this.debug);
    }
    onStateChanges(changes) {
        this.log("Changes detected:", this.debug);
        this.log(JSON.stringify(changes, null, 2), this.debug);
        this.terminal.scrollToBottom();
    }
    setUserId(userId) {
        this.log("Running as user " + userId);
        this.id = userId;
    }
    setRoom(room) {
        this.room = room;
    }
    log(text, print = true) {
        if (print) {
            this.terminal.writeln(text);
            console.log(text);
            this.terminal.scrollToBottom();
        }
        this.logFile += text + "\n";
    }
}

},{"xterm":"aEUZq","xterm-addon-fit":"a5mjI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aEUZq":[function(require,module,exports) {
!function(e, t) {
    var r, i;
    module.exports = t();
}(self, function() {
    return (()=>{
        var e1 = {
            4567: function(e2, t2, r1) {
                var i1, n1 = this && this.__extends || (i1 = function(e3, t3) {
                    return i1 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i1(e3, t3);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i1(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t2, "__esModule", {
                    value: !0
                }), t2.AccessibilityManager = void 0;
                var o1 = r1(9042), s1 = r1(6114), a1 = r1(9924), c = r1(3656), l = r1(844), h = r1(5596), u = r1(9631), f = function(e4) {
                    function t4(t, r) {
                        var i = e4.call(this) || this;
                        i._terminal = t, i._renderService = r, i._liveRegionLineCount = 0, i._charsToConsume = [], i._charsToAnnounce = "", i._accessibilityTreeRoot = document.createElement("div"), i._accessibilityTreeRoot.classList.add("xterm-accessibility"), i._accessibilityTreeRoot.tabIndex = 0, i._rowContainer = document.createElement("div"), i._rowContainer.setAttribute("role", "list"), i._rowContainer.classList.add("xterm-accessibility-tree"), i._rowElements = [];
                        for(var n = 0; n < i._terminal.rows; n++)i._rowElements[n] = i._createAccessibilityTreeNode(), i._rowContainer.appendChild(i._rowElements[n]);
                        if (i._topBoundaryFocusListener = function(e) {
                            return i._onBoundaryFocus(e, 0);
                        }, i._bottomBoundaryFocusListener = function(e) {
                            return i._onBoundaryFocus(e, 1);
                        }, i._rowElements[0].addEventListener("focus", i._topBoundaryFocusListener), i._rowElements[i._rowElements.length - 1].addEventListener("focus", i._bottomBoundaryFocusListener), i._refreshRowsDimensions(), i._accessibilityTreeRoot.appendChild(i._rowContainer), i._renderRowsDebouncer = new a1.TimeBasedDebouncer(i._renderRows.bind(i)), i._refreshRows(), i._liveRegion = document.createElement("div"), i._liveRegion.classList.add("live-region"), i._liveRegion.setAttribute("aria-live", "assertive"), i._accessibilityTreeRoot.appendChild(i._liveRegion), !i._terminal.element) throw new Error("Cannot enable accessibility before Terminal.open");
                        return i._terminal.element.insertAdjacentElement("afterbegin", i._accessibilityTreeRoot), i.register(i._renderRowsDebouncer), i.register(i._terminal.onResize(function(e) {
                            return i._onResize(e.rows);
                        })), i.register(i._terminal.onRender(function(e) {
                            return i._refreshRows(e.start, e.end);
                        })), i.register(i._terminal.onScroll(function() {
                            return i._refreshRows();
                        })), i.register(i._terminal.onA11yChar(function(e) {
                            return i._onChar(e);
                        })), i.register(i._terminal.onLineFeed(function() {
                            return i._onChar("\n");
                        })), i.register(i._terminal.onA11yTab(function(e) {
                            return i._onTab(e);
                        })), i.register(i._terminal.onKey(function(e) {
                            return i._onKey(e.key);
                        })), i.register(i._terminal.onBlur(function() {
                            return i._clearLiveRegion();
                        })), i.register(i._renderService.onDimensionsChange(function() {
                            return i._refreshRowsDimensions();
                        })), i._screenDprMonitor = new h.ScreenDprMonitor, i.register(i._screenDprMonitor), i._screenDprMonitor.setListener(function() {
                            return i._refreshRowsDimensions();
                        }), i.register((0, c.addDisposableDomListener)(window, "resize", function() {
                            return i._refreshRowsDimensions();
                        })), i;
                    }
                    return n1(t4, e4), t4.prototype.dispose = function() {
                        e4.prototype.dispose.call(this), (0, u.removeElementFromParent)(this._accessibilityTreeRoot), this._rowElements.length = 0;
                    }, t4.prototype._onBoundaryFocus = function(e, t) {
                        var r = e.target, i = this._rowElements[0 === t ? 1 : this._rowElements.length - 2];
                        if (r.getAttribute("aria-posinset") !== (0 === t ? "1" : "" + this._terminal.buffer.lines.length) && e.relatedTarget === i) {
                            var n, o;
                            if (0 === t ? (n = r, o = this._rowElements.pop(), this._rowContainer.removeChild(o)) : (n = this._rowElements.shift(), o = r, this._rowContainer.removeChild(n)), n.removeEventListener("focus", this._topBoundaryFocusListener), o.removeEventListener("focus", this._bottomBoundaryFocusListener), 0 === t) {
                                var s = this._createAccessibilityTreeNode();
                                this._rowElements.unshift(s), this._rowContainer.insertAdjacentElement("afterbegin", s);
                            } else s = this._createAccessibilityTreeNode(), this._rowElements.push(s), this._rowContainer.appendChild(s);
                            this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(0 === t ? -1 : 1), this._rowElements[0 === t ? 1 : this._rowElements.length - 2].focus(), e.preventDefault(), e.stopImmediatePropagation();
                        }
                    }, t4.prototype._onResize = function(e) {
                        this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
                        for(var t = this._rowContainer.children.length; t < this._terminal.rows; t++)this._rowElements[t] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[t]);
                        for(; this._rowElements.length > e;)this._rowContainer.removeChild(this._rowElements.pop());
                        this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions();
                    }, t4.prototype._createAccessibilityTreeNode = function() {
                        var e = document.createElement("div");
                        return e.setAttribute("role", "listitem"), e.tabIndex = -1, this._refreshRowDimensions(e), e;
                    }, t4.prototype._onTab = function(e) {
                        for(var t = 0; t < e; t++)this._onChar(" ");
                    }, t4.prototype._onChar = function(e) {
                        var t = this;
                        this._liveRegionLineCount < 21 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== e && (this._charsToAnnounce += e) : this._charsToAnnounce += e, "\n" === e && (this._liveRegionLineCount++, 21 === this._liveRegionLineCount && (this._liveRegion.textContent += o1.tooMuchOutput)), s1.isMac && this._liveRegion.textContent && this._liveRegion.textContent.length > 0 && !this._liveRegion.parentNode && setTimeout(function() {
                            t._accessibilityTreeRoot.appendChild(t._liveRegion);
                        }, 0));
                    }, t4.prototype._clearLiveRegion = function() {
                        this._liveRegion.textContent = "", this._liveRegionLineCount = 0, s1.isMac && (0, u.removeElementFromParent)(this._liveRegion);
                    }, t4.prototype._onKey = function(e) {
                        this._clearLiveRegion(), this._charsToConsume.push(e);
                    }, t4.prototype._refreshRows = function(e, t) {
                        this._renderRowsDebouncer.refresh(e, t, this._terminal.rows);
                    }, t4.prototype._renderRows = function(e, t) {
                        for(var r = this._terminal.buffer, i = r.lines.length.toString(), n = e; n <= t; n++){
                            var o = r.translateBufferLineToString(r.ydisp + n, !0), s = (r.ydisp + n + 1).toString(), a = this._rowElements[n];
                            a && (0 === o.length ? a.innerText = " " : a.textContent = o, a.setAttribute("aria-posinset", s), a.setAttribute("aria-setsize", i));
                        }
                        this._announceCharacters();
                    }, t4.prototype._refreshRowsDimensions = function() {
                        if (this._renderService.dimensions.actualCellHeight) {
                            this._rowElements.length !== this._terminal.rows && this._onResize(this._terminal.rows);
                            for(var e = 0; e < this._terminal.rows; e++)this._refreshRowDimensions(this._rowElements[e]);
                        }
                    }, t4.prototype._refreshRowDimensions = function(e) {
                        e.style.height = this._renderService.dimensions.actualCellHeight + "px";
                    }, t4.prototype._announceCharacters = function() {
                        0 !== this._charsToAnnounce.length && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "");
                    }, t4;
                }(l.Disposable);
                t2.AccessibilityManager = f;
            },
            3614: (e5, t5)=>{
                function r2(e) {
                    return e.replace(/\r?\n/g, "\r");
                }
                function i2(e, t) {
                    return t ? "[200~" + e + "[201~" : e;
                }
                function n2(e, t, n) {
                    e = i2(e = r2(e), n.decPrivateModes.bracketedPasteMode), n.triggerDataEvent(e, !0), t.value = "";
                }
                function o2(e, t, r) {
                    var i = r.getBoundingClientRect(), n = e.clientX - i.left - 10, o = e.clientY - i.top - 10;
                    t.style.width = "20px", t.style.height = "20px", t.style.left = n + "px", t.style.top = o + "px", t.style.zIndex = "1000", t.focus();
                }
                Object.defineProperty(t5, "__esModule", {
                    value: !0
                }), t5.rightClickHandler = t5.moveTextAreaUnderMouseCursor = t5.paste = t5.handlePasteEvent = t5.copyHandler = t5.bracketTextForPaste = t5.prepareTextForTerminal = void 0, t5.prepareTextForTerminal = r2, t5.bracketTextForPaste = i2, t5.copyHandler = function(e, t) {
                    e.clipboardData && e.clipboardData.setData("text/plain", t.selectionText), e.preventDefault();
                }, t5.handlePasteEvent = function(e, t, r) {
                    e.stopPropagation(), e.clipboardData && n2(e.clipboardData.getData("text/plain"), t, r);
                }, t5.paste = n2, t5.moveTextAreaUnderMouseCursor = o2, t5.rightClickHandler = function(e, t, r, i, n) {
                    o2(e, t, r), n && i.rightClickSelect(e), t.value = i.selectionText, t.select();
                };
            },
            4774: (e6, t6)=>{
                var r3, i3, n3, o3;
                function s2(e) {
                    var t = e.toString(16);
                    return t.length < 2 ? "0" + t : t;
                }
                function a2(e, t) {
                    return e < t ? (t + 0.05) / (e + 0.05) : (e + 0.05) / (t + 0.05);
                }
                Object.defineProperty(t6, "__esModule", {
                    value: !0
                }), t6.contrastRatio = t6.toPaddedHex = t6.rgba = t6.rgb = t6.css = t6.color = t6.channels = void 0, function(e7) {
                    e7.toCss = function(e, t, r, i) {
                        return void 0 !== i ? "#" + s2(e) + s2(t) + s2(r) + s2(i) : "#" + s2(e) + s2(t) + s2(r);
                    }, e7.toRgba = function(e, t, r, i) {
                        return void 0 === i && (i = 255), (e << 24 | t << 16 | r << 8 | i) >>> 0;
                    };
                }(r3 = t6.channels || (t6.channels = {})), (i3 = t6.color || (t6.color = {})).blend = function(e, t) {
                    var i = (255 & t.rgba) / 255;
                    if (1 === i) return {
                        css: t.css,
                        rgba: t.rgba
                    };
                    var n = t.rgba >> 24 & 255, o = t.rgba >> 16 & 255, s = t.rgba >> 8 & 255, a = e.rgba >> 24 & 255, c = e.rgba >> 16 & 255, l = e.rgba >> 8 & 255, h = a + Math.round((n - a) * i), u = c + Math.round((o - c) * i), f = l + Math.round((s - l) * i);
                    return {
                        css: r3.toCss(h, u, f),
                        rgba: r3.toRgba(h, u, f)
                    };
                }, i3.isOpaque = function(e) {
                    return 255 == (255 & e.rgba);
                }, i3.ensureContrastRatio = function(e, t, r) {
                    var i = o3.ensureContrastRatio(e.rgba, t.rgba, r);
                    if (i) return o3.toColor(i >> 24 & 255, i >> 16 & 255, i >> 8 & 255);
                }, i3.opaque = function(e) {
                    var t = (255 | e.rgba) >>> 0, i = o3.toChannels(t), n = i[0], s = i[1], a = i[2];
                    return {
                        css: r3.toCss(n, s, a),
                        rgba: t
                    };
                }, i3.opacity = function(e, t) {
                    var i = Math.round(255 * t), n = o3.toChannels(e.rgba), s = n[0], a = n[1], c = n[2];
                    return {
                        css: r3.toCss(s, a, c, i),
                        rgba: r3.toRgba(s, a, c, i)
                    };
                }, i3.toColorRGB = function(e) {
                    return [
                        e.rgba >> 24 & 255,
                        e.rgba >> 16 & 255,
                        e.rgba >> 8 & 255
                    ];
                }, (t6.css || (t6.css = {})).toColor = function(e) {
                    switch(e.length){
                        case 7:
                            return {
                                css: e,
                                rgba: (parseInt(e.slice(1), 16) << 8 | 255) >>> 0
                            };
                        case 9:
                            return {
                                css: e,
                                rgba: parseInt(e.slice(1), 16) >>> 0
                            };
                    }
                    throw new Error("css.toColor: Unsupported css format");
                }, function(e8) {
                    function t7(e, t, r) {
                        var i = e / 255, n = t / 255, o = r / 255;
                        return 0.2126 * (i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4)) + 0.7152 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)) + 0.0722 * (o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4));
                    }
                    e8.relativeLuminance = function(e) {
                        return t7(e >> 16 & 255, e >> 8 & 255, 255 & e);
                    }, e8.relativeLuminance2 = t7;
                }(n3 = t6.rgb || (t6.rgb = {})), function(e9) {
                    function t8(e, t, r) {
                        for(var i = e >> 24 & 255, o = e >> 16 & 255, s = e >> 8 & 255, c = t >> 24 & 255, l = t >> 16 & 255, h = t >> 8 & 255, u = a2(n3.relativeLuminance2(c, h, l), n3.relativeLuminance2(i, o, s)); u < r && (c > 0 || l > 0 || h > 0);)c -= Math.max(0, Math.ceil(0.1 * c)), l -= Math.max(0, Math.ceil(0.1 * l)), h -= Math.max(0, Math.ceil(0.1 * h)), u = a2(n3.relativeLuminance2(c, h, l), n3.relativeLuminance2(i, o, s));
                        return (c << 24 | l << 16 | h << 8 | 255) >>> 0;
                    }
                    function i4(e, t, r) {
                        for(var i = e >> 24 & 255, o = e >> 16 & 255, s = e >> 8 & 255, c = t >> 24 & 255, l = t >> 16 & 255, h = t >> 8 & 255, u = a2(n3.relativeLuminance2(c, h, l), n3.relativeLuminance2(i, o, s)); u < r && (c < 255 || l < 255 || h < 255);)c = Math.min(255, c + Math.ceil(0.1 * (255 - c))), l = Math.min(255, l + Math.ceil(0.1 * (255 - l))), h = Math.min(255, h + Math.ceil(0.1 * (255 - h))), u = a2(n3.relativeLuminance2(c, h, l), n3.relativeLuminance2(i, o, s));
                        return (c << 24 | l << 16 | h << 8 | 255) >>> 0;
                    }
                    e9.ensureContrastRatio = function(e, r, o) {
                        var s = n3.relativeLuminance(e >> 8), c = n3.relativeLuminance(r >> 8);
                        if (a2(s, c) < o) return c < s ? t8(e, r, o) : i4(e, r, o);
                    }, e9.reduceLuminance = t8, e9.increaseLuminance = i4, e9.toChannels = function(e) {
                        return [
                            e >> 24 & 255,
                            e >> 16 & 255,
                            e >> 8 & 255,
                            255 & e
                        ];
                    }, e9.toColor = function(e, t, i) {
                        return {
                            css: r3.toCss(e, t, i),
                            rgba: r3.toRgba(e, t, i)
                        };
                    };
                }(o3 = t6.rgba || (t6.rgba = {})), t6.toPaddedHex = s2, t6.contrastRatio = a2;
            },
            7239: (e10, t9)=>{
                Object.defineProperty(t9, "__esModule", {
                    value: !0
                }), t9.ColorContrastCache = void 0;
                var r4 = function() {
                    function e11() {
                        this._color = {}, this._rgba = {};
                    }
                    return e11.prototype.clear = function() {
                        this._color = {}, this._rgba = {};
                    }, e11.prototype.setCss = function(e, t, r) {
                        this._rgba[e] || (this._rgba[e] = {}), this._rgba[e][t] = r;
                    }, e11.prototype.getCss = function(e, t) {
                        return this._rgba[e] ? this._rgba[e][t] : void 0;
                    }, e11.prototype.setColor = function(e, t, r) {
                        this._color[e] || (this._color[e] = {}), this._color[e][t] = r;
                    }, e11.prototype.getColor = function(e, t) {
                        return this._color[e] ? this._color[e][t] : void 0;
                    }, e11;
                }();
                t9.ColorContrastCache = r4;
            },
            5680: function(e12, t10, r5) {
                var i5 = this && this.__spreadArray || function(e, t, r) {
                    if (r || 2 === arguments.length) for(var i, n = 0, o = t.length; n < o; n++)!i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
                    return e.concat(i || Array.prototype.slice.call(t));
                };
                Object.defineProperty(t10, "__esModule", {
                    value: !0
                }), t10.ColorManager = t10.DEFAULT_ANSI_COLORS = void 0;
                var n4 = r5(4774), o4 = r5(7239), s3 = n4.css.toColor("#ffffff"), a3 = n4.css.toColor("#000000"), c1 = n4.css.toColor("#ffffff"), l1 = n4.css.toColor("#000000"), h1 = {
                    css: "rgba(255, 255, 255, 0.3)",
                    rgba: 4294967117
                };
                t10.DEFAULT_ANSI_COLORS = Object.freeze(function() {
                    for(var e = [
                        n4.css.toColor("#2e3436"),
                        n4.css.toColor("#cc0000"),
                        n4.css.toColor("#4e9a06"),
                        n4.css.toColor("#c4a000"),
                        n4.css.toColor("#3465a4"),
                        n4.css.toColor("#75507b"),
                        n4.css.toColor("#06989a"),
                        n4.css.toColor("#d3d7cf"),
                        n4.css.toColor("#555753"),
                        n4.css.toColor("#ef2929"),
                        n4.css.toColor("#8ae234"),
                        n4.css.toColor("#fce94f"),
                        n4.css.toColor("#729fcf"),
                        n4.css.toColor("#ad7fa8"),
                        n4.css.toColor("#34e2e2"),
                        n4.css.toColor("#eeeeec")
                    ], t = [
                        0,
                        95,
                        135,
                        175,
                        215,
                        255
                    ], r = 0; r < 216; r++){
                        var i = t[r / 36 % 6 | 0], o = t[r / 6 % 6 | 0], s = t[r % 6];
                        e.push({
                            css: n4.channels.toCss(i, o, s),
                            rgba: n4.channels.toRgba(i, o, s)
                        });
                    }
                    for(r = 0; r < 24; r++){
                        var a = 8 + 10 * r;
                        e.push({
                            css: n4.channels.toCss(a, a, a),
                            rgba: n4.channels.toRgba(a, a, a)
                        });
                    }
                    return e;
                }());
                var u1 = function() {
                    function e13(e, r) {
                        this.allowTransparency = r;
                        var i = e.createElement("canvas");
                        i.width = 1, i.height = 1;
                        var u = i.getContext("2d");
                        if (!u) throw new Error("Could not get rendering context");
                        this._ctx = u, this._ctx.globalCompositeOperation = "copy", this._litmusColor = this._ctx.createLinearGradient(0, 0, 1, 1), this._contrastCache = new o4.ColorContrastCache, this.colors = {
                            foreground: s3,
                            background: a3,
                            cursor: c1,
                            cursorAccent: l1,
                            selectionTransparent: h1,
                            selectionOpaque: n4.color.blend(a3, h1),
                            ansi: t10.DEFAULT_ANSI_COLORS.slice(),
                            contrastCache: this._contrastCache
                        }, this._updateRestoreColors();
                    }
                    return e13.prototype.onOptionsChange = function(e) {
                        "minimumContrastRatio" === e && this._contrastCache.clear();
                    }, e13.prototype.setTheme = function(e) {
                        void 0 === e && (e = {}), this.colors.foreground = this._parseColor(e.foreground, s3), this.colors.background = this._parseColor(e.background, a3), this.colors.cursor = this._parseColor(e.cursor, c1, !0), this.colors.cursorAccent = this._parseColor(e.cursorAccent, l1, !0), this.colors.selectionTransparent = this._parseColor(e.selection, h1, !0), this.colors.selectionOpaque = n4.color.blend(this.colors.background, this.colors.selectionTransparent), n4.color.isOpaque(this.colors.selectionTransparent) && (this.colors.selectionTransparent = n4.color.opacity(this.colors.selectionTransparent, 0.3)), this.colors.ansi[0] = this._parseColor(e.black, t10.DEFAULT_ANSI_COLORS[0]), this.colors.ansi[1] = this._parseColor(e.red, t10.DEFAULT_ANSI_COLORS[1]), this.colors.ansi[2] = this._parseColor(e.green, t10.DEFAULT_ANSI_COLORS[2]), this.colors.ansi[3] = this._parseColor(e.yellow, t10.DEFAULT_ANSI_COLORS[3]), this.colors.ansi[4] = this._parseColor(e.blue, t10.DEFAULT_ANSI_COLORS[4]), this.colors.ansi[5] = this._parseColor(e.magenta, t10.DEFAULT_ANSI_COLORS[5]), this.colors.ansi[6] = this._parseColor(e.cyan, t10.DEFAULT_ANSI_COLORS[6]), this.colors.ansi[7] = this._parseColor(e.white, t10.DEFAULT_ANSI_COLORS[7]), this.colors.ansi[8] = this._parseColor(e.brightBlack, t10.DEFAULT_ANSI_COLORS[8]), this.colors.ansi[9] = this._parseColor(e.brightRed, t10.DEFAULT_ANSI_COLORS[9]), this.colors.ansi[10] = this._parseColor(e.brightGreen, t10.DEFAULT_ANSI_COLORS[10]), this.colors.ansi[11] = this._parseColor(e.brightYellow, t10.DEFAULT_ANSI_COLORS[11]), this.colors.ansi[12] = this._parseColor(e.brightBlue, t10.DEFAULT_ANSI_COLORS[12]), this.colors.ansi[13] = this._parseColor(e.brightMagenta, t10.DEFAULT_ANSI_COLORS[13]), this.colors.ansi[14] = this._parseColor(e.brightCyan, t10.DEFAULT_ANSI_COLORS[14]), this.colors.ansi[15] = this._parseColor(e.brightWhite, t10.DEFAULT_ANSI_COLORS[15]), this._contrastCache.clear(), this._updateRestoreColors();
                    }, e13.prototype.restoreColor = function(e) {
                        if (void 0 !== e) switch(e){
                            case 256:
                                this.colors.foreground = this._restoreColors.foreground;
                                break;
                            case 257:
                                this.colors.background = this._restoreColors.background;
                                break;
                            case 258:
                                this.colors.cursor = this._restoreColors.cursor;
                                break;
                            default:
                                this.colors.ansi[e] = this._restoreColors.ansi[e];
                        }
                        else for(var t = 0; t < this._restoreColors.ansi.length; ++t)this.colors.ansi[t] = this._restoreColors.ansi[t];
                    }, e13.prototype._updateRestoreColors = function() {
                        this._restoreColors = {
                            foreground: this.colors.foreground,
                            background: this.colors.background,
                            cursor: this.colors.cursor,
                            ansi: i5([], this.colors.ansi, !0)
                        };
                    }, e13.prototype._parseColor = function(e14, t, r) {
                        if (void 0 === r && (r = this.allowTransparency), void 0 === e14) return t;
                        if (this._ctx.fillStyle = this._litmusColor, this._ctx.fillStyle = e14, "string" != typeof this._ctx.fillStyle) return console.warn("Color: " + e14 + " is invalid using fallback " + t.css), t;
                        this._ctx.fillRect(0, 0, 1, 1);
                        var i = this._ctx.getImageData(0, 0, 1, 1).data;
                        if (255 !== i[3]) {
                            if (!r) return console.warn("Color: " + e14 + " is using transparency, but allowTransparency is false. Using fallback " + t.css + "."), t;
                            var o = this._ctx.fillStyle.substring(5, this._ctx.fillStyle.length - 1).split(",").map(function(e) {
                                return Number(e);
                            }), s = o[0], a = o[1], c = o[2], l = o[3], h = Math.round(255 * l);
                            return {
                                rgba: n4.channels.toRgba(s, a, c, h),
                                css: e14
                            };
                        }
                        return {
                            css: this._ctx.fillStyle,
                            rgba: n4.channels.toRgba(i[0], i[1], i[2], i[3])
                        };
                    }, e13;
                }();
                t10.ColorManager = u1;
            },
            9631: (e15, t11)=>{
                Object.defineProperty(t11, "__esModule", {
                    value: !0
                }), t11.removeElementFromParent = void 0, t11.removeElementFromParent = function() {
                    for(var e, t = [], r = 0; r < arguments.length; r++)t[r] = arguments[r];
                    for(var i = 0, n = t; i < n.length; i++){
                        var o = n[i];
                        null === (e = null == o ? void 0 : o.parentElement) || void 0 === e || e.removeChild(o);
                    }
                };
            },
            3656: (e16, t12)=>{
                Object.defineProperty(t12, "__esModule", {
                    value: !0
                }), t12.addDisposableDomListener = void 0, t12.addDisposableDomListener = function(e, t, r, i) {
                    e.addEventListener(t, r, i);
                    var n = !1;
                    return {
                        dispose: function() {
                            n || (n = !0, e.removeEventListener(t, r, i));
                        }
                    };
                };
            },
            3551: function(e17, t13, r6) {
                var i6 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n5 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t13, "__esModule", {
                    value: !0
                }), t13.MouseZone = t13.Linkifier = void 0;
                var o5 = r6(8460), s4 = r6(2585), a4 = function() {
                    function e18(e, t, r) {
                        this._bufferService = e, this._logService = t, this._unicodeService = r, this._linkMatchers = [], this._nextLinkMatcherId = 0, this._onShowLinkUnderline = new o5.EventEmitter, this._onHideLinkUnderline = new o5.EventEmitter, this._onLinkTooltip = new o5.EventEmitter, this._rowsToLinkify = {
                            start: void 0,
                            end: void 0
                        };
                    }
                    return Object.defineProperty(e18.prototype, "onShowLinkUnderline", {
                        get: function() {
                            return this._onShowLinkUnderline.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e18.prototype, "onHideLinkUnderline", {
                        get: function() {
                            return this._onHideLinkUnderline.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e18.prototype, "onLinkTooltip", {
                        get: function() {
                            return this._onLinkTooltip.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e18.prototype.attachToDom = function(e, t) {
                        this._element = e, this._mouseZoneManager = t;
                    }, e18.prototype.linkifyRows = function(t, r) {
                        var i = this;
                        this._mouseZoneManager && (void 0 === this._rowsToLinkify.start || void 0 === this._rowsToLinkify.end ? (this._rowsToLinkify.start = t, this._rowsToLinkify.end = r) : (this._rowsToLinkify.start = Math.min(this._rowsToLinkify.start, t), this._rowsToLinkify.end = Math.max(this._rowsToLinkify.end, r)), this._mouseZoneManager.clearAll(t, r), this._rowsTimeoutId && clearTimeout(this._rowsTimeoutId), this._rowsTimeoutId = setTimeout(function() {
                            return i._linkifyRows();
                        }, e18._timeBeforeLatency));
                    }, e18.prototype._linkifyRows = function() {
                        this._rowsTimeoutId = void 0;
                        var e = this._bufferService.buffer;
                        if (void 0 !== this._rowsToLinkify.start && void 0 !== this._rowsToLinkify.end) {
                            var t = e.ydisp + this._rowsToLinkify.start;
                            if (!(t >= e.lines.length)) {
                                for(var r = e.ydisp + Math.min(this._rowsToLinkify.end, this._bufferService.rows) + 1, i = Math.ceil(2000 / this._bufferService.cols), n = this._bufferService.buffer.iterator(!1, t, r, i, i); n.hasNext();)for(var o = n.next(), s = 0; s < this._linkMatchers.length; s++)this._doLinkifyRow(o.range.first, o.content, this._linkMatchers[s]);
                                this._rowsToLinkify.start = void 0, this._rowsToLinkify.end = void 0;
                            }
                        } else this._logService.debug("_rowToLinkify was unset before _linkifyRows was called");
                    }, e18.prototype.registerLinkMatcher = function(e, t, r) {
                        if (void 0 === r && (r = {}), !t) throw new Error("handler must be defined");
                        var i = {
                            id: this._nextLinkMatcherId++,
                            regex: e,
                            handler: t,
                            matchIndex: r.matchIndex,
                            validationCallback: r.validationCallback,
                            hoverTooltipCallback: r.tooltipCallback,
                            hoverLeaveCallback: r.leaveCallback,
                            willLinkActivate: r.willLinkActivate,
                            priority: r.priority || 0
                        };
                        return this._addLinkMatcherToList(i), i.id;
                    }, e18.prototype._addLinkMatcherToList = function(e) {
                        if (0 !== this._linkMatchers.length) {
                            for(var t = this._linkMatchers.length - 1; t >= 0; t--)if (e.priority <= this._linkMatchers[t].priority) return void this._linkMatchers.splice(t + 1, 0, e);
                            this._linkMatchers.splice(0, 0, e);
                        } else this._linkMatchers.push(e);
                    }, e18.prototype.deregisterLinkMatcher = function(e) {
                        for(var t = 0; t < this._linkMatchers.length; t++)if (this._linkMatchers[t].id === e) return this._linkMatchers.splice(t, 1), !0;
                        return !1;
                    }, e18.prototype._doLinkifyRow = function(e19, t, r) {
                        for(var i, n = this, o = new RegExp(r.regex.source, (r.regex.flags || "") + "g"), s = -1, a5 = function() {
                            var a = i["number" != typeof r.matchIndex ? 0 : r.matchIndex];
                            if (!a) return c._logService.debug("match found without corresponding matchIndex", i, r), "break";
                            if (s = t.indexOf(a, s + 1), o.lastIndex = s + a.length, s < 0) return "break";
                            var l = c._bufferService.buffer.stringIndexToBufferIndex(e19, s);
                            if (l[0] < 0) return "break";
                            var h = c._bufferService.buffer.lines.get(l[0]);
                            if (!h) return "break";
                            var u = h.getFg(l[1]), f = u ? u >> 9 & 511 : void 0;
                            r.validationCallback ? r.validationCallback(a, function(e) {
                                n._rowsTimeoutId || e && n._addLink(l[1], l[0] - n._bufferService.buffer.ydisp, a, r, f);
                            }) : c._addLink(l[1], l[0] - c._bufferService.buffer.ydisp, a, r, f);
                        }, c = this; null !== (i = o.exec(t)) && "break" !== a5(););
                    }, e18.prototype._addLink = function(e20, t14, r, i, n) {
                        var o = this;
                        if (this._mouseZoneManager && this._element) {
                            var s = this._unicodeService.getStringCellWidth(r), a = e20 % this._bufferService.cols, l = t14 + Math.floor(e20 / this._bufferService.cols), h = (a + s) % this._bufferService.cols, u = l + Math.floor((a + s) / this._bufferService.cols);
                            0 === h && (h = this._bufferService.cols, u--), this._mouseZoneManager.add(new c2(a + 1, l + 1, h + 1, u + 1, function(e) {
                                if (i.handler) return i.handler(e, r);
                                var t = window.open();
                                t ? (t.opener = null, t.location.href = r) : console.warn("Opening link blocked as opener could not be cleared");
                            }, function() {
                                o._onShowLinkUnderline.fire(o._createLinkHoverEvent(a, l, h, u, n)), o._element.classList.add("xterm-cursor-pointer");
                            }, function(e) {
                                o._onLinkTooltip.fire(o._createLinkHoverEvent(a, l, h, u, n)), i.hoverTooltipCallback && i.hoverTooltipCallback(e, r, {
                                    start: {
                                        x: a,
                                        y: l
                                    },
                                    end: {
                                        x: h,
                                        y: u
                                    }
                                });
                            }, function() {
                                o._onHideLinkUnderline.fire(o._createLinkHoverEvent(a, l, h, u, n)), o._element.classList.remove("xterm-cursor-pointer"), i.hoverLeaveCallback && i.hoverLeaveCallback();
                            }, function(e) {
                                return !i.willLinkActivate || i.willLinkActivate(e, r);
                            }));
                        }
                    }, e18.prototype._createLinkHoverEvent = function(e, t, r, i, n) {
                        return {
                            x1: e,
                            y1: t,
                            x2: r,
                            y2: i,
                            cols: this._bufferService.cols,
                            fg: n
                        };
                    }, e18._timeBeforeLatency = 200, e18 = i6([
                        n5(0, s4.IBufferService),
                        n5(1, s4.ILogService),
                        n5(2, s4.IUnicodeService)
                    ], e18);
                }();
                t13.Linkifier = a4;
                var c2 = function(e, t, r, i, n, o, s, a, c) {
                    this.x1 = e, this.y1 = t, this.x2 = r, this.y2 = i, this.clickCallback = n, this.hoverCallback = o, this.tooltipCallback = s, this.leaveCallback = a, this.willLinkActivate = c;
                };
                t13.MouseZone = c2;
            },
            6465: function(e21, t15, r7) {
                var i7, n6 = this && this.__extends || (i7 = function(e22, t16) {
                    return i7 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i7(e22, t16);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i7(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o6 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s5 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t15, "__esModule", {
                    value: !0
                }), t15.Linkifier2 = void 0;
                var a6 = r7(2585), c3 = r7(8460), l2 = r7(844), h = r7(3656), u = function(e23) {
                    function t17(t) {
                        var r = e23.call(this) || this;
                        return r._bufferService = t, r._linkProviders = [], r._linkCacheDisposables = [], r._isMouseOut = !0, r._activeLine = -1, r._onShowLinkUnderline = r.register(new c3.EventEmitter), r._onHideLinkUnderline = r.register(new c3.EventEmitter), r.register((0, l2.getDisposeArrayDisposable)(r._linkCacheDisposables)), r;
                    }
                    return n6(t17, e23), Object.defineProperty(t17.prototype, "currentLink", {
                        get: function() {
                            return this._currentLink;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t17.prototype, "onShowLinkUnderline", {
                        get: function() {
                            return this._onShowLinkUnderline.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t17.prototype, "onHideLinkUnderline", {
                        get: function() {
                            return this._onHideLinkUnderline.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t17.prototype.registerLinkProvider = function(e) {
                        var t = this;
                        return this._linkProviders.push(e), {
                            dispose: function() {
                                var r = t._linkProviders.indexOf(e);
                                -1 !== r && t._linkProviders.splice(r, 1);
                            }
                        };
                    }, t17.prototype.attachToDom = function(e, t, r) {
                        var i = this;
                        this._element = e, this._mouseService = t, this._renderService = r, this.register((0, h.addDisposableDomListener)(this._element, "mouseleave", function() {
                            i._isMouseOut = !0, i._clearCurrentLink();
                        })), this.register((0, h.addDisposableDomListener)(this._element, "mousemove", this._onMouseMove.bind(this))), this.register((0, h.addDisposableDomListener)(this._element, "click", this._onClick.bind(this)));
                    }, t17.prototype._onMouseMove = function(e) {
                        if (this._lastMouseEvent = e, this._element && this._mouseService) {
                            var t = this._positionFromMouseEvent(e, this._element, this._mouseService);
                            if (t) {
                                this._isMouseOut = !1;
                                for(var r = e.composedPath(), i = 0; i < r.length; i++){
                                    var n = r[i];
                                    if (n.classList.contains("xterm")) break;
                                    if (n.classList.contains("xterm-hover")) return;
                                }
                                this._lastBufferCell && t.x === this._lastBufferCell.x && t.y === this._lastBufferCell.y || (this._onHover(t), this._lastBufferCell = t);
                            }
                        }
                    }, t17.prototype._onHover = function(e) {
                        if (this._activeLine !== e.y) return this._clearCurrentLink(), void this._askForLink(e, !1);
                        this._currentLink && this._linkAtPosition(this._currentLink.link, e) || (this._clearCurrentLink(), this._askForLink(e, !0));
                    }, t17.prototype._askForLink = function(e24, t18) {
                        var r8, i = this;
                        this._activeProviderReplies && t18 || (null === (r8 = this._activeProviderReplies) || void 0 === r8 || r8.forEach(function(e25) {
                            null == e25 || e25.forEach(function(e) {
                                e.link.dispose && e.link.dispose();
                            });
                        }), this._activeProviderReplies = new Map, this._activeLine = e24.y);
                        var n = !1;
                        this._linkProviders.forEach(function(r9, o) {
                            var s6;
                            t18 ? (null === (s6 = i._activeProviderReplies) || void 0 === s6 ? void 0 : s6.get(o)) && (n = i._checkLinkProviderResult(o, e24, n)) : r9.provideLinks(e24.y, function(t) {
                                var r, s;
                                if (!i._isMouseOut) {
                                    var a = null == t ? void 0 : t.map(function(e) {
                                        return {
                                            link: e
                                        };
                                    });
                                    null === (r = i._activeProviderReplies) || void 0 === r || r.set(o, a), n = i._checkLinkProviderResult(o, e24, n), (null === (s = i._activeProviderReplies) || void 0 === s ? void 0 : s.size) === i._linkProviders.length && i._removeIntersectingLinks(e24.y, i._activeProviderReplies);
                                }
                            });
                        });
                    }, t17.prototype._removeIntersectingLinks = function(e, t) {
                        for(var r = new Set, i = 0; i < t.size; i++){
                            var n = t.get(i);
                            if (n) for(var o = 0; o < n.length; o++)for(var s = n[o], a = s.link.range.start.y < e ? 0 : s.link.range.start.x, c = s.link.range.end.y > e ? this._bufferService.cols : s.link.range.end.x, l = a; l <= c; l++){
                                if (r.has(l)) {
                                    n.splice(o--, 1);
                                    break;
                                }
                                r.add(l);
                            }
                        }
                    }, t17.prototype._checkLinkProviderResult = function(e26, t, r) {
                        var i, n = this;
                        if (!this._activeProviderReplies) return r;
                        for(var o = this._activeProviderReplies.get(e26), s = !1, a = 0; a < e26; a++)this._activeProviderReplies.has(a) && !this._activeProviderReplies.get(a) || (s = !0);
                        if (!s && o) {
                            var c = o.find(function(e) {
                                return n._linkAtPosition(e.link, t);
                            });
                            c && (r = !0, this._handleNewLink(c));
                        }
                        if (this._activeProviderReplies.size === this._linkProviders.length && !r) for(a = 0; a < this._activeProviderReplies.size; a++){
                            var l = null === (i = this._activeProviderReplies.get(a)) || void 0 === i ? void 0 : i.find(function(e) {
                                return n._linkAtPosition(e.link, t);
                            });
                            if (l) {
                                r = !0, this._handleNewLink(l);
                                break;
                            }
                        }
                        return r;
                    }, t17.prototype._onClick = function(e) {
                        if (this._element && this._mouseService && this._currentLink) {
                            var t = this._positionFromMouseEvent(e, this._element, this._mouseService);
                            t && this._linkAtPosition(this._currentLink.link, t) && this._currentLink.link.activate(e, this._currentLink.link.text);
                        }
                    }, t17.prototype._clearCurrentLink = function(e, t) {
                        this._element && this._currentLink && this._lastMouseEvent && (!e || !t || this._currentLink.link.range.start.y >= e && this._currentLink.link.range.end.y <= t) && (this._linkLeave(this._element, this._currentLink.link, this._lastMouseEvent), this._currentLink = void 0, (0, l2.disposeArray)(this._linkCacheDisposables));
                    }, t17.prototype._handleNewLink = function(e27) {
                        var t = this;
                        if (this._element && this._lastMouseEvent && this._mouseService) {
                            var r10 = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
                            r10 && this._linkAtPosition(e27.link, r10) && (this._currentLink = e27, this._currentLink.state = {
                                decorations: {
                                    underline: void 0 === e27.link.decorations || e27.link.decorations.underline,
                                    pointerCursor: void 0 === e27.link.decorations || e27.link.decorations.pointerCursor
                                },
                                isHovered: !0
                            }, this._linkHover(this._element, e27.link, this._lastMouseEvent), e27.link.decorations = {}, Object.defineProperties(e27.link.decorations, {
                                pointerCursor: {
                                    get: function() {
                                        var e, r;
                                        return null === (r = null === (e = t._currentLink) || void 0 === e ? void 0 : e.state) || void 0 === r ? void 0 : r.decorations.pointerCursor;
                                    },
                                    set: function(e) {
                                        var r, i;
                                        (null === (r = t._currentLink) || void 0 === r ? void 0 : r.state) && t._currentLink.state.decorations.pointerCursor !== e && (t._currentLink.state.decorations.pointerCursor = e, t._currentLink.state.isHovered && (null === (i = t._element) || void 0 === i || i.classList.toggle("xterm-cursor-pointer", e)));
                                    }
                                },
                                underline: {
                                    get: function() {
                                        var e, r;
                                        return null === (r = null === (e = t._currentLink) || void 0 === e ? void 0 : e.state) || void 0 === r ? void 0 : r.decorations.underline;
                                    },
                                    set: function(r) {
                                        var i, n, o;
                                        (null === (i = t._currentLink) || void 0 === i ? void 0 : i.state) && (null === (o = null === (n = t._currentLink) || void 0 === n ? void 0 : n.state) || void 0 === o ? void 0 : o.decorations.underline) !== r && (t._currentLink.state.decorations.underline = r, t._currentLink.state.isHovered && t._fireUnderlineEvent(e27.link, r));
                                    }
                                }
                            }), this._renderService && this._linkCacheDisposables.push(this._renderService.onRenderedBufferChange(function(e) {
                                var r = 0 === e.start ? 0 : e.start + 1 + t._bufferService.buffer.ydisp;
                                t._clearCurrentLink(r, e.end + 1 + t._bufferService.buffer.ydisp);
                            })));
                        }
                    }, t17.prototype._linkHover = function(e, t, r) {
                        var i;
                        (null === (i = this._currentLink) || void 0 === i ? void 0 : i.state) && (this._currentLink.state.isHovered = !0, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t, !0), this._currentLink.state.decorations.pointerCursor && e.classList.add("xterm-cursor-pointer")), t.hover && t.hover(r, t.text);
                    }, t17.prototype._fireUnderlineEvent = function(e, t) {
                        var r = e.range, i = this._bufferService.buffer.ydisp, n = this._createLinkUnderlineEvent(r.start.x - 1, r.start.y - i - 1, r.end.x, r.end.y - i - 1, void 0);
                        (t ? this._onShowLinkUnderline : this._onHideLinkUnderline).fire(n);
                    }, t17.prototype._linkLeave = function(e, t, r) {
                        var i;
                        (null === (i = this._currentLink) || void 0 === i ? void 0 : i.state) && (this._currentLink.state.isHovered = !1, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t, !1), this._currentLink.state.decorations.pointerCursor && e.classList.remove("xterm-cursor-pointer")), t.leave && t.leave(r, t.text);
                    }, t17.prototype._linkAtPosition = function(e, t) {
                        var r = e.range.start.y === e.range.end.y, i = e.range.start.y < t.y, n = e.range.end.y > t.y;
                        return (r && e.range.start.x <= t.x && e.range.end.x >= t.x || i && e.range.end.x >= t.x || n && e.range.start.x <= t.x || i && n) && e.range.start.y <= t.y && e.range.end.y >= t.y;
                    }, t17.prototype._positionFromMouseEvent = function(e, t, r) {
                        var i = r.getCoords(e, t, this._bufferService.cols, this._bufferService.rows);
                        if (i) return {
                            x: i[0],
                            y: i[1] + this._bufferService.buffer.ydisp
                        };
                    }, t17.prototype._createLinkUnderlineEvent = function(e, t, r, i, n) {
                        return {
                            x1: e,
                            y1: t,
                            x2: r,
                            y2: i,
                            cols: this._bufferService.cols,
                            fg: n
                        };
                    }, o6([
                        s5(0, a6.IBufferService)
                    ], t17);
                }(l2.Disposable);
                t15.Linkifier2 = u;
            },
            9042: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.tooMuchOutput = t.promptLabel = void 0, t.promptLabel = "Terminal input", t.tooMuchOutput = "Too much output to announce, navigate to rows manually to read";
            },
            6954: function(e28, t19, r12) {
                var i8, n7 = this && this.__extends || (i8 = function(e29, t20) {
                    return i8 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i8(e29, t20);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i8(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o7 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s7 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t19, "__esModule", {
                    value: !0
                }), t19.MouseZoneManager = void 0;
                var a7 = r12(844), c = r12(3656), l = r12(4725), h = r12(2585), u = function(e30) {
                    function t21(t, r, i, n, o, s) {
                        var a = e30.call(this) || this;
                        return a._element = t, a._screenElement = r, a._bufferService = i, a._mouseService = n, a._selectionService = o, a._optionsService = s, a._zones = [], a._areZonesActive = !1, a._lastHoverCoords = [
                            void 0,
                            void 0
                        ], a._initialSelectionLength = 0, a.register((0, c.addDisposableDomListener)(a._element, "mousedown", function(e) {
                            return a._onMouseDown(e);
                        })), a._mouseMoveListener = function(e) {
                            return a._onMouseMove(e);
                        }, a._mouseLeaveListener = function(e) {
                            return a._onMouseLeave(e);
                        }, a._clickListener = function(e) {
                            return a._onClick(e);
                        }, a;
                    }
                    return n7(t21, e30), t21.prototype.dispose = function() {
                        e30.prototype.dispose.call(this), this._deactivate();
                    }, t21.prototype.add = function(e) {
                        this._zones.push(e), 1 === this._zones.length && this._activate();
                    }, t21.prototype.clearAll = function(e, t) {
                        if (0 !== this._zones.length) {
                            e && t || (e = 0, t = this._bufferService.rows - 1);
                            for(var r = 0; r < this._zones.length; r++){
                                var i = this._zones[r];
                                (i.y1 > e && i.y1 <= t + 1 || i.y2 > e && i.y2 <= t + 1 || i.y1 < e && i.y2 > t + 1) && (this._currentZone && this._currentZone === i && (this._currentZone.leaveCallback(), this._currentZone = void 0), this._zones.splice(r--, 1));
                            }
                            0 === this._zones.length && this._deactivate();
                        }
                    }, t21.prototype._activate = function() {
                        this._areZonesActive || (this._areZonesActive = !0, this._element.addEventListener("mousemove", this._mouseMoveListener), this._element.addEventListener("mouseleave", this._mouseLeaveListener), this._element.addEventListener("click", this._clickListener));
                    }, t21.prototype._deactivate = function() {
                        this._areZonesActive && (this._areZonesActive = !1, this._element.removeEventListener("mousemove", this._mouseMoveListener), this._element.removeEventListener("mouseleave", this._mouseLeaveListener), this._element.removeEventListener("click", this._clickListener));
                    }, t21.prototype._onMouseMove = function(e) {
                        this._lastHoverCoords[0] === e.pageX && this._lastHoverCoords[1] === e.pageY || (this._onHover(e), this._lastHoverCoords = [
                            e.pageX,
                            e.pageY
                        ]);
                    }, t21.prototype._onHover = function(e) {
                        var t = this, r = this._findZoneEventAt(e);
                        r !== this._currentZone && (this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = void 0, this._tooltipTimeout && clearTimeout(this._tooltipTimeout)), r && (this._currentZone = r, r.hoverCallback && r.hoverCallback(e), this._tooltipTimeout = window.setTimeout(function() {
                            return t._onTooltip(e);
                        }, this._optionsService.rawOptions.linkTooltipHoverDuration)));
                    }, t21.prototype._onTooltip = function(e) {
                        this._tooltipTimeout = void 0;
                        var t = this._findZoneEventAt(e);
                        null == t || t.tooltipCallback(e);
                    }, t21.prototype._onMouseDown = function(e) {
                        if (this._initialSelectionLength = this._getSelectionLength(), this._areZonesActive) {
                            var t = this._findZoneEventAt(e);
                            (null == t ? void 0 : t.willLinkActivate(e)) && (e.preventDefault(), e.stopImmediatePropagation());
                        }
                    }, t21.prototype._onMouseLeave = function(e) {
                        this._currentZone && (this._currentZone.leaveCallback(), this._currentZone = void 0, this._tooltipTimeout && clearTimeout(this._tooltipTimeout));
                    }, t21.prototype._onClick = function(e) {
                        var t = this._findZoneEventAt(e), r = this._getSelectionLength();
                        t && r === this._initialSelectionLength && (t.clickCallback(e), e.preventDefault(), e.stopImmediatePropagation());
                    }, t21.prototype._getSelectionLength = function() {
                        var e = this._selectionService.selectionText;
                        return e ? e.length : 0;
                    }, t21.prototype._findZoneEventAt = function(e) {
                        var t = this._mouseService.getCoords(e, this._screenElement, this._bufferService.cols, this._bufferService.rows);
                        if (t) for(var r = t[0], i = t[1], n = 0; n < this._zones.length; n++){
                            var o = this._zones[n];
                            if (o.y1 === o.y2) {
                                if (i === o.y1 && r >= o.x1 && r < o.x2) return o;
                            } else if (i === o.y1 && r >= o.x1 || i === o.y2 && r < o.x2 || i > o.y1 && i < o.y2) return o;
                        }
                    }, o7([
                        s7(2, h.IBufferService),
                        s7(3, l.IMouseService),
                        s7(4, l.ISelectionService),
                        s7(5, h.IOptionsService)
                    ], t21);
                }(a7.Disposable);
                t19.MouseZoneManager = u;
            },
            6193: (e31, t22)=>{
                Object.defineProperty(t22, "__esModule", {
                    value: !0
                }), t22.RenderDebouncer = void 0;
                var r13 = function() {
                    function e32(e) {
                        this._renderCallback = e;
                    }
                    return e32.prototype.dispose = function() {
                        this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
                    }, e32.prototype.refresh = function(e, t, r) {
                        var i = this;
                        this._rowCount = r, e = void 0 !== e ? e : 0, t = void 0 !== t ? t : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e) : e, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t) : t, this._animationFrame || (this._animationFrame = window.requestAnimationFrame(function() {
                            return i._innerRefresh();
                        }));
                    }, e32.prototype._innerRefresh = function() {
                        if (void 0 !== this._rowStart && void 0 !== this._rowEnd && void 0 !== this._rowCount) {
                            var e = Math.max(this._rowStart, 0), t = Math.min(this._rowEnd, this._rowCount - 1);
                            this._rowStart = void 0, this._rowEnd = void 0, this._animationFrame = void 0, this._renderCallback(e, t);
                        }
                    }, e32;
                }();
                t22.RenderDebouncer = r13;
            },
            5596: function(e33, t23, r14) {
                var i, n = this && this.__extends || (i = function(e34, t24) {
                    return i = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i(e34, t24);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t23, "__esModule", {
                    value: !0
                }), t23.ScreenDprMonitor = void 0;
                var o = function(e35) {
                    function t25() {
                        var t = null !== e35 && e35.apply(this, arguments) || this;
                        return t._currentDevicePixelRatio = window.devicePixelRatio, t;
                    }
                    return n(t25, e35), t25.prototype.setListener = function(e) {
                        var t = this;
                        this._listener && this.clearListener(), this._listener = e, this._outerListener = function() {
                            t._listener && (t._listener(window.devicePixelRatio, t._currentDevicePixelRatio), t._updateDpr());
                        }, this._updateDpr();
                    }, t25.prototype.dispose = function() {
                        e35.prototype.dispose.call(this), this.clearListener();
                    }, t25.prototype._updateDpr = function() {
                        var e;
                        this._outerListener && (null === (e = this._resolutionMediaMatchList) || void 0 === e || e.removeListener(this._outerListener), this._currentDevicePixelRatio = window.devicePixelRatio, this._resolutionMediaMatchList = window.matchMedia("screen and (resolution: " + window.devicePixelRatio + "dppx)"), this._resolutionMediaMatchList.addListener(this._outerListener));
                    }, t25.prototype.clearListener = function() {
                        this._resolutionMediaMatchList && this._listener && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._listener = void 0, this._outerListener = void 0);
                    }, t25;
                }(r14(844).Disposable);
                t23.ScreenDprMonitor = o;
            },
            3236: function(e36, t26, r15) {
                var i9, n8 = this && this.__extends || (i9 = function(e37, t27) {
                    return i9 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i9(e37, t27);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i9(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t26, "__esModule", {
                    value: !0
                }), t26.Terminal = void 0;
                var o8 = r15(2950), s8 = r15(1680), a8 = r15(3614), c = r15(2584), l3 = r15(5435), h = r15(3525), u = r15(3551), f = r15(9312), _ = r15(6114), d = r15(3656), p = r15(9042), v = r15(357), g = r15(6954), y = r15(4567), m = r15(1296), S = r15(7399), C = r15(8460), b = r15(8437), w = r15(5680), L = r15(3230), E = r15(4725), x = r15(428), k = r15(8934), M = r15(6465), A = r15(5114), R = r15(8969), O = r15(4774), T = r15(4269), D = r15(5941), B = r15(7641), P = "undefined" != typeof window ? window.document : null, I = function(e38) {
                    function t28(t29) {
                        void 0 === t29 && (t29 = {});
                        var r = e38.call(this, t29) || this;
                        return r.browser = _, r._keyDownHandled = !1, r._keyPressHandled = !1, r._unprocessedDeadKey = !1, r._onCursorMove = new C.EventEmitter, r._onKey = new C.EventEmitter, r._onRender = new C.EventEmitter, r._onSelectionChange = new C.EventEmitter, r._onTitleChange = new C.EventEmitter, r._onBell = new C.EventEmitter, r._onFocus = new C.EventEmitter, r._onBlur = new C.EventEmitter, r._onA11yCharEmitter = new C.EventEmitter, r._onA11yTabEmitter = new C.EventEmitter, r._setup(), r.linkifier = r._instantiationService.createInstance(u.Linkifier), r.linkifier2 = r.register(r._instantiationService.createInstance(M.Linkifier2)), r.decorationService = r.register(r._instantiationService.createInstance(B.DecorationService)), r.register(r._inputHandler.onRequestBell(function() {
                            return r.bell();
                        })), r.register(r._inputHandler.onRequestRefreshRows(function(e, t) {
                            return r.refresh(e, t);
                        })), r.register(r._inputHandler.onRequestSendFocus(function() {
                            return r._reportFocus();
                        })), r.register(r._inputHandler.onRequestReset(function() {
                            return r.reset();
                        })), r.register(r._inputHandler.onRequestWindowsOptionsReport(function(e) {
                            return r._reportWindowsOptions(e);
                        })), r.register(r._inputHandler.onColor(function(e) {
                            return r._handleColorEvent(e);
                        })), r.register((0, C.forwardEvent)(r._inputHandler.onCursorMove, r._onCursorMove)), r.register((0, C.forwardEvent)(r._inputHandler.onTitleChange, r._onTitleChange)), r.register((0, C.forwardEvent)(r._inputHandler.onA11yChar, r._onA11yCharEmitter)), r.register((0, C.forwardEvent)(r._inputHandler.onA11yTab, r._onA11yTabEmitter)), r.register(r._bufferService.onResize(function(e) {
                            return r._afterResize(e.cols, e.rows);
                        })), r;
                    }
                    return n8(t28, e38), Object.defineProperty(t28.prototype, "onCursorMove", {
                        get: function() {
                            return this._onCursorMove.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t28.prototype, "onKey", {
                        get: function() {
                            return this._onKey.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t28.prototype, "onRender", {
                        get: function() {
                            return this._onRender.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t28.prototype, "onSelectionChange", {
                        get: function() {
                            return this._onSelectionChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t28.prototype, "onTitleChange", {
                        get: function() {
                            return this._onTitleChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t28.prototype, "onBell", {
                        get: function() {
                            return this._onBell.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t28.prototype, "onFocus", {
                        get: function() {
                            return this._onFocus.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t28.prototype, "onBlur", {
                        get: function() {
                            return this._onBlur.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t28.prototype, "onA11yChar", {
                        get: function() {
                            return this._onA11yCharEmitter.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t28.prototype, "onA11yTab", {
                        get: function() {
                            return this._onA11yTabEmitter.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t28.prototype._handleColorEvent = function(e) {
                        var t, r;
                        if (this._colorManager) {
                            for(var i = 0, n = e; i < n.length; i++){
                                var o = n[i], s = void 0, a = "";
                                switch(o.index){
                                    case 256:
                                        s = "foreground", a = "10";
                                        break;
                                    case 257:
                                        s = "background", a = "11";
                                        break;
                                    case 258:
                                        s = "cursor", a = "12";
                                        break;
                                    default:
                                        s = "ansi", a = "4;" + o.index;
                                }
                                if (s) switch(o.type){
                                    case 0:
                                        var l = O.color.toColorRGB("ansi" === s ? this._colorManager.colors.ansi[o.index] : this._colorManager.colors[s]);
                                        this.coreService.triggerDataEvent(c.C0.ESC + "]" + a + ";" + (0, D.toRgbString)(l) + c.C0.BEL);
                                        break;
                                    case 1:
                                        "ansi" === s ? this._colorManager.colors.ansi[o.index] = O.rgba.toColor.apply(O.rgba, o.color) : this._colorManager.colors[s] = O.rgba.toColor.apply(O.rgba, o.color);
                                        break;
                                    case 2:
                                        this._colorManager.restoreColor(o.index);
                                }
                            }
                            null === (t = this._renderService) || void 0 === t || t.setColors(this._colorManager.colors), null === (r = this.viewport) || void 0 === r || r.onThemeChange(this._colorManager.colors);
                        }
                    }, t28.prototype.dispose = function() {
                        var t, r, i;
                        this._isDisposed || (e38.prototype.dispose.call(this), null === (t = this._renderService) || void 0 === t || t.dispose(), this._customKeyEventHandler = void 0, this.write = function() {}, null === (i = null === (r = this.element) || void 0 === r ? void 0 : r.parentNode) || void 0 === i || i.removeChild(this.element));
                    }, t28.prototype._setup = function() {
                        e38.prototype._setup.call(this), this._customKeyEventHandler = void 0;
                    }, Object.defineProperty(t28.prototype, "buffer", {
                        get: function() {
                            return this.buffers.active;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t28.prototype.focus = function() {
                        this.textarea && this.textarea.focus({
                            preventScroll: !0
                        });
                    }, t28.prototype._updateOptions = function(t) {
                        var r, i, n, o;
                        switch(e38.prototype._updateOptions.call(this, t), t){
                            case "fontFamily":
                            case "fontSize":
                                null === (r = this._renderService) || void 0 === r || r.clear(), null === (i = this._charSizeService) || void 0 === i || i.measure();
                                break;
                            case "cursorBlink":
                            case "cursorStyle":
                                this.refresh(this.buffer.y, this.buffer.y);
                                break;
                            case "customGlyphs":
                            case "drawBoldTextInBrightColors":
                            case "letterSpacing":
                            case "lineHeight":
                            case "fontWeight":
                            case "fontWeightBold":
                            case "minimumContrastRatio":
                                this._renderService && (this._renderService.clear(), this._renderService.onResize(this.cols, this.rows), this.refresh(0, this.rows - 1));
                                break;
                            case "rendererType":
                                this._renderService && (this._renderService.setRenderer(this._createRenderer()), this._renderService.onResize(this.cols, this.rows));
                                break;
                            case "scrollback":
                                null === (n = this.viewport) || void 0 === n || n.syncScrollArea();
                                break;
                            case "screenReaderMode":
                                this.optionsService.rawOptions.screenReaderMode ? !this._accessibilityManager && this._renderService && (this._accessibilityManager = new y.AccessibilityManager(this, this._renderService)) : (null === (o = this._accessibilityManager) || void 0 === o || o.dispose(), this._accessibilityManager = void 0);
                                break;
                            case "tabStopWidth":
                                this.buffers.setupTabStops();
                                break;
                            case "theme":
                                this._setTheme(this.optionsService.rawOptions.theme);
                        }
                    }, t28.prototype._onTextAreaFocus = function(e) {
                        this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(c.C0.ESC + "[I"), this.updateCursorStyle(e), this.element.classList.add("focus"), this._showCursor(), this._onFocus.fire();
                    }, t28.prototype.blur = function() {
                        var e;
                        return null === (e = this.textarea) || void 0 === e ? void 0 : e.blur();
                    }, t28.prototype._onTextAreaBlur = function() {
                        this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(c.C0.ESC + "[O"), this.element.classList.remove("focus"), this._onBlur.fire();
                    }, t28.prototype._syncTextArea = function() {
                        if (this.textarea && this.buffer.isCursorInViewport && !this._compositionHelper.isComposing && this._renderService) {
                            var e = this.buffer.ybase + this.buffer.y, t = this.buffer.lines.get(e);
                            if (t) {
                                var r = Math.min(this.buffer.x, this.cols - 1), i = this._renderService.dimensions.actualCellHeight, n = t.getWidth(r), o = this._renderService.dimensions.actualCellWidth * n, s = this.buffer.y * this._renderService.dimensions.actualCellHeight, a = r * this._renderService.dimensions.actualCellWidth;
                                this.textarea.style.left = a + "px", this.textarea.style.top = s + "px", this.textarea.style.width = o + "px", this.textarea.style.height = i + "px", this.textarea.style.lineHeight = i + "px", this.textarea.style.zIndex = "-5";
                            }
                        }
                    }, t28.prototype._initGlobal = function() {
                        var e = this;
                        this._bindKeys(), this.register((0, d.addDisposableDomListener)(this.element, "copy", function(t) {
                            e.hasSelection() && (0, a8.copyHandler)(t, e._selectionService);
                        }));
                        var t30 = function(t) {
                            return (0, a8.handlePasteEvent)(t, e.textarea, e.coreService);
                        };
                        this.register((0, d.addDisposableDomListener)(this.textarea, "paste", t30)), this.register((0, d.addDisposableDomListener)(this.element, "paste", t30)), _.isFirefox ? this.register((0, d.addDisposableDomListener)(this.element, "mousedown", function(t) {
                            2 === t.button && (0, a8.rightClickHandler)(t, e.textarea, e.screenElement, e._selectionService, e.options.rightClickSelectsWord);
                        })) : this.register((0, d.addDisposableDomListener)(this.element, "contextmenu", function(t) {
                            (0, a8.rightClickHandler)(t, e.textarea, e.screenElement, e._selectionService, e.options.rightClickSelectsWord);
                        })), _.isLinux && this.register((0, d.addDisposableDomListener)(this.element, "auxclick", function(t) {
                            1 === t.button && (0, a8.moveTextAreaUnderMouseCursor)(t, e.textarea, e.screenElement);
                        }));
                    }, t28.prototype._bindKeys = function() {
                        var e = this;
                        this.register((0, d.addDisposableDomListener)(this.textarea, "keyup", function(t) {
                            return e._keyUp(t);
                        }, !0)), this.register((0, d.addDisposableDomListener)(this.textarea, "keydown", function(t) {
                            return e._keyDown(t);
                        }, !0)), this.register((0, d.addDisposableDomListener)(this.textarea, "keypress", function(t) {
                            return e._keyPress(t);
                        }, !0)), this.register((0, d.addDisposableDomListener)(this.textarea, "compositionstart", function() {
                            return e._compositionHelper.compositionstart();
                        })), this.register((0, d.addDisposableDomListener)(this.textarea, "compositionupdate", function(t) {
                            return e._compositionHelper.compositionupdate(t);
                        })), this.register((0, d.addDisposableDomListener)(this.textarea, "compositionend", function() {
                            return e._compositionHelper.compositionend();
                        })), this.register((0, d.addDisposableDomListener)(this.textarea, "input", function(t) {
                            return e._inputEvent(t);
                        }, !0)), this.register(this.onRender(function() {
                            return e._compositionHelper.updateCompositionElements();
                        })), this.register(this.onRender(function(t) {
                            return e._queueLinkification(t.start, t.end);
                        }));
                    }, t28.prototype.open = function(e39) {
                        var t = this;
                        if (!e39) throw new Error("Terminal requires a parent element.");
                        e39.isConnected || this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"), this._document = e39.ownerDocument, this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), this.element.setAttribute("tabindex", "0"), e39.appendChild(this.element);
                        var r = P.createDocumentFragment();
                        this._viewportElement = P.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), r.appendChild(this._viewportElement), this._viewportScrollArea = P.createElement("div"), this._viewportScrollArea.classList.add("xterm-scroll-area"), this._viewportElement.appendChild(this._viewportScrollArea), this.screenElement = P.createElement("div"), this.screenElement.classList.add("xterm-screen"), this._helperContainer = P.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), r.appendChild(this.screenElement), this.textarea = P.createElement("textarea"), this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", p.promptLabel), this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this.register((0, d.addDisposableDomListener)(this.textarea, "focus", function(e) {
                            return t._onTextAreaFocus(e);
                        })), this.register((0, d.addDisposableDomListener)(this.textarea, "blur", function() {
                            return t._onTextAreaBlur();
                        })), this._helperContainer.appendChild(this.textarea);
                        var i = this._instantiationService.createInstance(A.CoreBrowserService, this.textarea);
                        this._instantiationService.setService(E.ICoreBrowserService, i), this._charSizeService = this._instantiationService.createInstance(x.CharSizeService, this._document, this._helperContainer), this._instantiationService.setService(E.ICharSizeService, this._charSizeService), this._theme = this.options.theme || this._theme, this._colorManager = new w.ColorManager(P, this.options.allowTransparency), this.register(this.optionsService.onOptionChange(function(e) {
                            return t._colorManager.onOptionsChange(e);
                        })), this._colorManager.setTheme(this._theme), this._characterJoinerService = this._instantiationService.createInstance(T.CharacterJoinerService), this._instantiationService.setService(E.ICharacterJoinerService, this._characterJoinerService);
                        var n = this._createRenderer();
                        this._renderService = this.register(this._instantiationService.createInstance(L.RenderService, n, this.rows, this.screenElement)), this._instantiationService.setService(E.IRenderService, this._renderService), this.register(this._renderService.onRenderedBufferChange(function(e) {
                            return t._onRender.fire(e);
                        })), this.onResize(function(e) {
                            return t._renderService.resize(e.cols, e.rows);
                        }), this._compositionView = P.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance(o8.CompositionHelper, this.textarea, this._compositionView), this._helperContainer.appendChild(this._compositionView), this.element.appendChild(r), this._soundService = this._instantiationService.createInstance(v.SoundService), this._instantiationService.setService(E.ISoundService, this._soundService), this._mouseService = this._instantiationService.createInstance(k.MouseService), this._instantiationService.setService(E.IMouseService, this._mouseService), this.viewport = this._instantiationService.createInstance(s8.Viewport, function(e) {
                            return t.scrollLines(e, !0, 1);
                        }, this._viewportElement, this._viewportScrollArea, this.element), this.viewport.onThemeChange(this._colorManager.colors), this.register(this._inputHandler.onRequestSyncScrollBar(function() {
                            return t.viewport.syncScrollArea();
                        })), this.register(this.viewport), this.register(this.onCursorMove(function() {
                            t._renderService.onCursorMove(), t._syncTextArea();
                        })), this.register(this.onResize(function() {
                            return t._renderService.onResize(t.cols, t.rows);
                        })), this.register(this.onBlur(function() {
                            return t._renderService.onBlur();
                        })), this.register(this.onFocus(function() {
                            return t._renderService.onFocus();
                        })), this.register(this._renderService.onDimensionsChange(function() {
                            return t.viewport.syncScrollArea();
                        })), this._selectionService = this.register(this._instantiationService.createInstance(f.SelectionService, this.element, this.screenElement, this.linkifier2)), this._instantiationService.setService(E.ISelectionService, this._selectionService), this.register(this._selectionService.onRequestScrollLines(function(e) {
                            return t.scrollLines(e.amount, e.suppressScrollEvent);
                        })), this.register(this._selectionService.onSelectionChange(function() {
                            return t._onSelectionChange.fire();
                        })), this.register(this._selectionService.onRequestRedraw(function(e) {
                            return t._renderService.onSelectionChanged(e.start, e.end, e.columnSelectMode);
                        })), this.register(this._selectionService.onLinuxMouseSelection(function(e) {
                            t.textarea.value = e, t.textarea.focus(), t.textarea.select();
                        })), this.register(this._onScroll.event(function(e) {
                            t.viewport.syncScrollArea(), t._selectionService.refresh();
                        })), this.register((0, d.addDisposableDomListener)(this._viewportElement, "scroll", function() {
                            return t._selectionService.refresh();
                        })), this._mouseZoneManager = this._instantiationService.createInstance(g.MouseZoneManager, this.element, this.screenElement), this.register(this._mouseZoneManager), this.register(this.onScroll(function() {
                            return t._mouseZoneManager.clearAll();
                        })), this.linkifier.attachToDom(this.element, this._mouseZoneManager), this.linkifier2.attachToDom(this.screenElement, this._mouseService, this._renderService), this.decorationService.attachToDom(this.screenElement, this._renderService, this._bufferService), this.register((0, d.addDisposableDomListener)(this.element, "mousedown", function(e) {
                            return t._selectionService.onMouseDown(e);
                        })), this.coreMouseService.areMouseEventsActive ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : this._selectionService.enable(), this.options.screenReaderMode && (this._accessibilityManager = new y.AccessibilityManager(this, this._renderService)), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse();
                    }, t28.prototype._createRenderer = function() {
                        switch(this.options.rendererType){
                            case "canvas":
                                return this._instantiationService.createInstance(h.Renderer, this._colorManager.colors, this.screenElement, this.linkifier, this.linkifier2);
                            case "dom":
                                return this._instantiationService.createInstance(m.DomRenderer, this._colorManager.colors, this.element, this.screenElement, this._viewportElement, this.linkifier, this.linkifier2);
                            default:
                                throw new Error('Unrecognized rendererType "' + this.options.rendererType + '"');
                        }
                    }, t28.prototype._setTheme = function(e) {
                        var t, r, i;
                        this._theme = e, null === (t = this._colorManager) || void 0 === t || t.setTheme(e), null === (r = this._renderService) || void 0 === r || r.setColors(this._colorManager.colors), null === (i = this.viewport) || void 0 === i || i.onThemeChange(this._colorManager.colors);
                    }, t28.prototype.bindMouse = function() {
                        var e40 = this, t31 = this, r16 = this.element;
                        function i10(e) {
                            var r, i, n = t31._mouseService.getRawByteCoords(e, t31.screenElement, t31.cols, t31.rows);
                            if (!n) return !1;
                            switch(e.overrideType || e.type){
                                case "mousemove":
                                    i = 32, void 0 === e.buttons ? (r = 3, void 0 !== e.button && (r = e.button < 3 ? e.button : 3)) : r = 1 & e.buttons ? 0 : 4 & e.buttons ? 1 : 2 & e.buttons ? 2 : 3;
                                    break;
                                case "mouseup":
                                    i = 0, r = e.button < 3 ? e.button : 3;
                                    break;
                                case "mousedown":
                                    i = 1, r = e.button < 3 ? e.button : 3;
                                    break;
                                case "wheel":
                                    0 !== e.deltaY && (i = e.deltaY < 0 ? 0 : 1), r = 4;
                                    break;
                                default:
                                    return !1;
                            }
                            return !(void 0 === i || void 0 === r || r > 4) && t31.coreMouseService.triggerMouseEvent({
                                col: n.x - 33,
                                row: n.y - 33,
                                button: r,
                                action: i,
                                ctrl: e.ctrlKey,
                                alt: e.altKey,
                                shift: e.shiftKey
                            });
                        }
                        var n9 = {
                            mouseup: null,
                            wheel: null,
                            mousedrag: null,
                            mousemove: null
                        }, o9 = function(t) {
                            return i10(t), t.buttons || (e40._document.removeEventListener("mouseup", n9.mouseup), n9.mousedrag && e40._document.removeEventListener("mousemove", n9.mousedrag)), e40.cancel(t);
                        }, s9 = function(t) {
                            return i10(t), e40.cancel(t, !0);
                        }, a = function(e) {
                            e.buttons && i10(e);
                        }, l = function(e) {
                            e.buttons || i10(e);
                        };
                        this.register(this.coreMouseService.onProtocolChange(function(t) {
                            t ? ("debug" === e40.optionsService.rawOptions.logLevel && e40._logService.debug("Binding to mouse events:", e40.coreMouseService.explainEvents(t)), e40.element.classList.add("enable-mouse-events"), e40._selectionService.disable()) : (e40._logService.debug("Unbinding from mouse events."), e40.element.classList.remove("enable-mouse-events"), e40._selectionService.enable()), 8 & t ? n9.mousemove || (r16.addEventListener("mousemove", l), n9.mousemove = l) : (r16.removeEventListener("mousemove", n9.mousemove), n9.mousemove = null), 16 & t ? n9.wheel || (r16.addEventListener("wheel", s9, {
                                passive: !1
                            }), n9.wheel = s9) : (r16.removeEventListener("wheel", n9.wheel), n9.wheel = null), 2 & t ? n9.mouseup || (n9.mouseup = o9) : (e40._document.removeEventListener("mouseup", n9.mouseup), n9.mouseup = null), 4 & t ? n9.mousedrag || (n9.mousedrag = a) : (e40._document.removeEventListener("mousemove", n9.mousedrag), n9.mousedrag = null);
                        })), this.coreMouseService.activeProtocol = this.coreMouseService.activeProtocol, this.register((0, d.addDisposableDomListener)(r16, "mousedown", function(t) {
                            if (t.preventDefault(), e40.focus(), e40.coreMouseService.areMouseEventsActive && !e40._selectionService.shouldForceSelection(t)) return i10(t), n9.mouseup && e40._document.addEventListener("mouseup", n9.mouseup), n9.mousedrag && e40._document.addEventListener("mousemove", n9.mousedrag), e40.cancel(t);
                        })), this.register((0, d.addDisposableDomListener)(r16, "wheel", function(t) {
                            if (!n9.wheel) {
                                if (!e40.buffer.hasScrollback) {
                                    var r = e40.viewport.getLinesScrolled(t);
                                    if (0 === r) return;
                                    for(var i = c.C0.ESC + (e40.coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (t.deltaY < 0 ? "A" : "B"), o = "", s = 0; s < Math.abs(r); s++)o += i;
                                    return e40.coreService.triggerDataEvent(o, !0), e40.cancel(t, !0);
                                }
                                return e40.viewport.onWheel(t) ? e40.cancel(t) : void 0;
                            }
                        }, {
                            passive: !1
                        })), this.register((0, d.addDisposableDomListener)(r16, "touchstart", function(t) {
                            if (!e40.coreMouseService.areMouseEventsActive) return e40.viewport.onTouchStart(t), e40.cancel(t);
                        }, {
                            passive: !0
                        })), this.register((0, d.addDisposableDomListener)(r16, "touchmove", function(t) {
                            if (!e40.coreMouseService.areMouseEventsActive) return e40.viewport.onTouchMove(t) ? void 0 : e40.cancel(t);
                        }, {
                            passive: !1
                        }));
                    }, t28.prototype.refresh = function(e, t) {
                        var r;
                        null === (r = this._renderService) || void 0 === r || r.refreshRows(e, t);
                    }, t28.prototype._queueLinkification = function(e, t) {
                        var r;
                        null === (r = this.linkifier) || void 0 === r || r.linkifyRows(e, t);
                    }, t28.prototype.updateCursorStyle = function(e) {
                        var t;
                        (null === (t = this._selectionService) || void 0 === t ? void 0 : t.shouldColumnSelect(e)) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select");
                    }, t28.prototype._showCursor = function() {
                        this.coreService.isCursorInitialized || (this.coreService.isCursorInitialized = !0, this.refresh(this.buffer.y, this.buffer.y));
                    }, t28.prototype.scrollLines = function(t, r, i) {
                        void 0 === i && (i = 0), e38.prototype.scrollLines.call(this, t, r, i), this.refresh(0, this.rows - 1);
                    }, t28.prototype.paste = function(e) {
                        (0, a8.paste)(e, this.textarea, this.coreService);
                    }, t28.prototype.attachCustomKeyEventHandler = function(e) {
                        this._customKeyEventHandler = e;
                    }, t28.prototype.registerLinkMatcher = function(e, t, r) {
                        var i = this.linkifier.registerLinkMatcher(e, t, r);
                        return this.refresh(0, this.rows - 1), i;
                    }, t28.prototype.deregisterLinkMatcher = function(e) {
                        this.linkifier.deregisterLinkMatcher(e) && this.refresh(0, this.rows - 1);
                    }, t28.prototype.registerLinkProvider = function(e) {
                        return this.linkifier2.registerLinkProvider(e);
                    }, t28.prototype.registerCharacterJoiner = function(e) {
                        if (!this._characterJoinerService) throw new Error("Terminal must be opened first");
                        var t = this._characterJoinerService.register(e);
                        return this.refresh(0, this.rows - 1), t;
                    }, t28.prototype.deregisterCharacterJoiner = function(e) {
                        if (!this._characterJoinerService) throw new Error("Terminal must be opened first");
                        this._characterJoinerService.deregister(e) && this.refresh(0, this.rows - 1);
                    }, Object.defineProperty(t28.prototype, "markers", {
                        get: function() {
                            return this.buffer.markers;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t28.prototype.addMarker = function(e) {
                        if (this.buffer === this.buffers.normal) return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e);
                    }, t28.prototype.registerDecoration = function(e) {
                        return this.decorationService.registerDecoration(e);
                    }, t28.prototype.hasSelection = function() {
                        return !!this._selectionService && this._selectionService.hasSelection;
                    }, t28.prototype.select = function(e, t, r) {
                        this._selectionService.setSelection(e, t, r);
                    }, t28.prototype.getSelection = function() {
                        return this._selectionService ? this._selectionService.selectionText : "";
                    }, t28.prototype.getSelectionPosition = function() {
                        if (this._selectionService && this._selectionService.hasSelection) return {
                            startColumn: this._selectionService.selectionStart[0],
                            startRow: this._selectionService.selectionStart[1],
                            endColumn: this._selectionService.selectionEnd[0],
                            endRow: this._selectionService.selectionEnd[1]
                        };
                    }, t28.prototype.clearSelection = function() {
                        var e;
                        null === (e = this._selectionService) || void 0 === e || e.clearSelection();
                    }, t28.prototype.selectAll = function() {
                        var e;
                        null === (e = this._selectionService) || void 0 === e || e.selectAll();
                    }, t28.prototype.selectLines = function(e, t) {
                        var r;
                        null === (r = this._selectionService) || void 0 === r || r.selectLines(e, t);
                    }, t28.prototype._keyDown = function(e) {
                        if (this._keyDownHandled = !1, this._customKeyEventHandler && !1 === this._customKeyEventHandler(e)) return !1;
                        if (!this._compositionHelper.keydown(e)) return this.buffer.ybase !== this.buffer.ydisp && this._bufferService.scrollToBottom(), !1;
                        "Dead" !== e.key && "AltGraph" !== e.key || (this._unprocessedDeadKey = !0);
                        var t = (0, S.evaluateKeyboardEvent)(e, this.coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
                        if (this.updateCursorStyle(e), 3 === t.type || 2 === t.type) {
                            var r = this.rows - 1;
                            return this.scrollLines(2 === t.type ? -r : r), this.cancel(e, !0);
                        }
                        return 1 === t.type && this.selectAll(), !!this._isThirdLevelShift(this.browser, e) || (t.cancel && this.cancel(e, !0), !t.key || (this._unprocessedDeadKey ? (this._unprocessedDeadKey = !1, !0) : (t.key !== c.C0.ETX && t.key !== c.C0.CR || (this.textarea.value = ""), this._onKey.fire({
                            key: t.key,
                            domEvent: e
                        }), this._showCursor(), this.coreService.triggerDataEvent(t.key, !0), this.optionsService.rawOptions.screenReaderMode ? void (this._keyDownHandled = !0) : this.cancel(e, !0))));
                    }, t28.prototype._isThirdLevelShift = function(e, t) {
                        var r = e.isMac && !this.options.macOptionIsMeta && t.altKey && !t.ctrlKey && !t.metaKey || e.isWindows && t.altKey && t.ctrlKey && !t.metaKey || e.isWindows && t.getModifierState("AltGraph");
                        return "keypress" === t.type ? r : r && (!t.keyCode || t.keyCode > 47);
                    }, t28.prototype._keyUp = function(e41) {
                        this._customKeyEventHandler && !1 === this._customKeyEventHandler(e41) || (function(e) {
                            return 16 === e.keyCode || 17 === e.keyCode || 18 === e.keyCode;
                        }(e41) || this.focus(), this.updateCursorStyle(e41), this._keyPressHandled = !1);
                    }, t28.prototype._keyPress = function(e) {
                        var t;
                        if (this._keyPressHandled = !1, this._keyDownHandled) return !1;
                        if (this._customKeyEventHandler && !1 === this._customKeyEventHandler(e)) return !1;
                        if (this.cancel(e), e.charCode) t = e.charCode;
                        else if (null === e.which || void 0 === e.which) t = e.keyCode;
                        else {
                            if (0 === e.which || 0 === e.charCode) return !1;
                            t = e.which;
                        }
                        return !(!t || (e.altKey || e.ctrlKey || e.metaKey) && !this._isThirdLevelShift(this.browser, e) || (t = String.fromCharCode(t), this._onKey.fire({
                            key: t,
                            domEvent: e
                        }), this._showCursor(), this.coreService.triggerDataEvent(t, !0), this._keyPressHandled = !0, this._unprocessedDeadKey = !1, 0));
                    }, t28.prototype._inputEvent = function(e) {
                        if (e.data && "insertText" === e.inputType && !e.composed && !this.optionsService.rawOptions.screenReaderMode) {
                            if (this._keyPressHandled) return !1;
                            this._unprocessedDeadKey = !1;
                            var t = e.data;
                            return this.coreService.triggerDataEvent(t, !0), this.cancel(e), !0;
                        }
                        return !1;
                    }, t28.prototype.bell = function() {
                        var e;
                        this._soundBell() && (null === (e = this._soundService) || void 0 === e || e.playBellSound()), this._onBell.fire();
                    }, t28.prototype.resize = function(t, r) {
                        t !== this.cols || r !== this.rows ? e38.prototype.resize.call(this, t, r) : this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure();
                    }, t28.prototype._afterResize = function(e, t) {
                        var r, i;
                        null === (r = this._charSizeService) || void 0 === r || r.measure(), null === (i = this.viewport) || void 0 === i || i.syncScrollArea(!0);
                    }, t28.prototype.clear = function() {
                        if (0 !== this.buffer.ybase || 0 !== this.buffer.y) {
                            this.buffer.clearMarkers(), this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
                            for(var e = 1; e < this.rows; e++)this.buffer.lines.push(this.buffer.getBlankLine(b.DEFAULT_ATTR_DATA));
                            this.refresh(0, this.rows - 1), this._onScroll.fire({
                                position: this.buffer.ydisp,
                                source: 0
                            });
                        }
                    }, t28.prototype.reset = function() {
                        var t, r;
                        this.options.rows = this.rows, this.options.cols = this.cols;
                        var i = this._customKeyEventHandler;
                        this._setup(), e38.prototype.reset.call(this), null === (t = this._selectionService) || void 0 === t || t.reset(), this._customKeyEventHandler = i, this.refresh(0, this.rows - 1), null === (r = this.viewport) || void 0 === r || r.syncScrollArea();
                    }, t28.prototype.clearTextureAtlas = function() {
                        var e;
                        null === (e = this._renderService) || void 0 === e || e.clearTextureAtlas();
                    }, t28.prototype._reportFocus = function() {
                        var e;
                        (null === (e = this.element) || void 0 === e ? void 0 : e.classList.contains("focus")) ? this.coreService.triggerDataEvent(c.C0.ESC + "[I") : this.coreService.triggerDataEvent(c.C0.ESC + "[O");
                    }, t28.prototype._reportWindowsOptions = function(e) {
                        if (this._renderService) switch(e){
                            case l3.WindowsOptionsReportType.GET_WIN_SIZE_PIXELS:
                                var t = this._renderService.dimensions.scaledCanvasWidth.toFixed(0), r = this._renderService.dimensions.scaledCanvasHeight.toFixed(0);
                                this.coreService.triggerDataEvent(c.C0.ESC + "[4;" + r + ";" + t + "t");
                                break;
                            case l3.WindowsOptionsReportType.GET_CELL_SIZE_PIXELS:
                                var i = this._renderService.dimensions.scaledCellWidth.toFixed(0), n = this._renderService.dimensions.scaledCellHeight.toFixed(0);
                                this.coreService.triggerDataEvent(c.C0.ESC + "[6;" + n + ";" + i + "t");
                        }
                    }, t28.prototype.cancel = function(e, t) {
                        if (this.options.cancelEvents || t) return e.preventDefault(), e.stopPropagation(), !1;
                    }, t28.prototype._visualBell = function() {
                        return !1;
                    }, t28.prototype._soundBell = function() {
                        return "sound" === this.options.bellStyle;
                    }, t28;
                }(R.CoreTerminal);
                t26.Terminal = I;
            },
            9924: (e42, t32)=>{
                Object.defineProperty(t32, "__esModule", {
                    value: !0
                }), t32.TimeBasedDebouncer = void 0;
                var r17 = function() {
                    function e43(e, t) {
                        void 0 === t && (t = 1000), this._renderCallback = e, this._debounceThresholdMS = t, this._lastRefreshMs = 0, this._additionalRefreshRequested = !1;
                    }
                    return e43.prototype.dispose = function() {
                        this._refreshTimeoutID && clearTimeout(this._refreshTimeoutID);
                    }, e43.prototype.refresh = function(e, t, r) {
                        var i = this;
                        this._rowCount = r, e = void 0 !== e ? e : 0, t = void 0 !== t ? t : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e) : e, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t) : t;
                        var n = Date.now();
                        if (n - this._lastRefreshMs >= this._debounceThresholdMS) this._lastRefreshMs = n, this._innerRefresh();
                        else if (!this._additionalRefreshRequested) {
                            var o = n - this._lastRefreshMs, s = this._debounceThresholdMS - o;
                            this._additionalRefreshRequested = !0, this._refreshTimeoutID = window.setTimeout(function() {
                                i._lastRefreshMs = Date.now(), i._innerRefresh(), i._additionalRefreshRequested = !1, i._refreshTimeoutID = void 0;
                            }, s);
                        }
                    }, e43.prototype._innerRefresh = function() {
                        if (void 0 !== this._rowStart && void 0 !== this._rowEnd && void 0 !== this._rowCount) {
                            var e = Math.max(this._rowStart, 0), t = Math.min(this._rowEnd, this._rowCount - 1);
                            this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e, t);
                        }
                    }, e43;
                }();
                t32.TimeBasedDebouncer = r17;
            },
            1680: function(e44, t33, r18) {
                var i11, n10 = this && this.__extends || (i11 = function(e45, t34) {
                    return i11 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i11(e45, t34);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i11(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o10 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s10 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t33, "__esModule", {
                    value: !0
                }), t33.Viewport = void 0;
                var a9 = r18(844), c = r18(3656), l4 = r18(4725), h2 = r18(2585), u = function(e46) {
                    function t35(t, r, i, n, o, s, a, l) {
                        var h = e46.call(this) || this;
                        return h._scrollLines = t, h._viewportElement = r, h._scrollArea = i, h._element = n, h._bufferService = o, h._optionsService = s, h._charSizeService = a, h._renderService = l, h.scrollBarWidth = 0, h._currentRowHeight = 0, h._currentScaledCellHeight = 0, h._lastRecordedBufferLength = 0, h._lastRecordedViewportHeight = 0, h._lastRecordedBufferHeight = 0, h._lastTouchY = 0, h._lastScrollTop = 0, h._lastHadScrollBar = !1, h._wheelPartialScroll = 0, h._refreshAnimationFrame = null, h._ignoreNextScrollEvent = !1, h.scrollBarWidth = h._viewportElement.offsetWidth - h._scrollArea.offsetWidth || 15, h._lastHadScrollBar = !0, h.register((0, c.addDisposableDomListener)(h._viewportElement, "scroll", h._onScroll.bind(h))), h._activeBuffer = h._bufferService.buffer, h.register(h._bufferService.buffers.onBufferActivate(function(e) {
                            return h._activeBuffer = e.activeBuffer;
                        })), h._renderDimensions = h._renderService.dimensions, h.register(h._renderService.onDimensionsChange(function(e) {
                            return h._renderDimensions = e;
                        })), setTimeout(function() {
                            return h.syncScrollArea();
                        }, 0), h;
                    }
                    return n10(t35, e46), t35.prototype.onThemeChange = function(e) {
                        this._viewportElement.style.backgroundColor = e.background.css;
                    }, t35.prototype._refresh = function(e) {
                        var t = this;
                        if (e) return this._innerRefresh(), void (null !== this._refreshAnimationFrame && cancelAnimationFrame(this._refreshAnimationFrame));
                        null === this._refreshAnimationFrame && (this._refreshAnimationFrame = requestAnimationFrame(function() {
                            return t._innerRefresh();
                        }));
                    }, t35.prototype._innerRefresh = function() {
                        if (this._charSizeService.height > 0) {
                            this._currentRowHeight = this._renderService.dimensions.scaledCellHeight / window.devicePixelRatio, this._currentScaledCellHeight = this._renderService.dimensions.scaledCellHeight, this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
                            var e = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._renderService.dimensions.canvasHeight);
                            this._lastRecordedBufferHeight !== e && (this._lastRecordedBufferHeight = e, this._scrollArea.style.height = this._lastRecordedBufferHeight + "px");
                        }
                        var t = this._bufferService.buffer.ydisp * this._currentRowHeight;
                        this._viewportElement.scrollTop !== t && (this._ignoreNextScrollEvent = !0, this._viewportElement.scrollTop = t), 0 === this._optionsService.rawOptions.scrollback ? this.scrollBarWidth = 0 : this.scrollBarWidth = this._viewportElement.offsetWidth - this._scrollArea.offsetWidth || 15, this._lastHadScrollBar = this.scrollBarWidth > 0;
                        var r = window.getComputedStyle(this._element), i = parseInt(r.paddingLeft) + parseInt(r.paddingRight);
                        this._viewportElement.style.width = (this._renderService.dimensions.actualCellWidth * this._bufferService.cols + this.scrollBarWidth + (this._lastHadScrollBar ? i : 0)).toString() + "px", this._refreshAnimationFrame = null;
                    }, t35.prototype.syncScrollArea = function(e) {
                        if (void 0 === e && (e = !1), this._lastRecordedBufferLength !== this._bufferService.buffer.lines.length) return this._lastRecordedBufferLength = this._bufferService.buffer.lines.length, void this._refresh(e);
                        this._lastRecordedViewportHeight === this._renderService.dimensions.canvasHeight && this._lastScrollTop === this._activeBuffer.ydisp * this._currentRowHeight && this._renderDimensions.scaledCellHeight === this._currentScaledCellHeight ? this._lastHadScrollBar !== this._optionsService.rawOptions.scrollback > 0 && this._refresh(e) : this._refresh(e);
                    }, t35.prototype._onScroll = function(e) {
                        if (this._lastScrollTop = this._viewportElement.scrollTop, this._viewportElement.offsetParent) {
                            if (this._ignoreNextScrollEvent) return this._ignoreNextScrollEvent = !1, void this._scrollLines(0);
                            var t = Math.round(this._lastScrollTop / this._currentRowHeight) - this._bufferService.buffer.ydisp;
                            this._scrollLines(t);
                        }
                    }, t35.prototype._bubbleScroll = function(e, t) {
                        var r = this._viewportElement.scrollTop + this._lastRecordedViewportHeight;
                        return !(t < 0 && 0 !== this._viewportElement.scrollTop || t > 0 && r < this._lastRecordedBufferHeight) || (e.cancelable && e.preventDefault(), !1);
                    }, t35.prototype.onWheel = function(e) {
                        var t = this._getPixelsScrolled(e);
                        return 0 !== t && (this._viewportElement.scrollTop += t, this._bubbleScroll(e, t));
                    }, t35.prototype._getPixelsScrolled = function(e) {
                        if (0 === e.deltaY || e.shiftKey) return 0;
                        var t = this._applyScrollModifier(e.deltaY, e);
                        return e.deltaMode === WheelEvent.DOM_DELTA_LINE ? t *= this._currentRowHeight : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._currentRowHeight * this._bufferService.rows), t;
                    }, t35.prototype.getLinesScrolled = function(e) {
                        if (0 === e.deltaY || e.shiftKey) return 0;
                        var t = this._applyScrollModifier(e.deltaY, e);
                        return e.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (t /= this._currentRowHeight + 0, this._wheelPartialScroll += t, t = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t *= this._bufferService.rows), t;
                    }, t35.prototype._applyScrollModifier = function(e, t) {
                        var r = this._optionsService.rawOptions.fastScrollModifier;
                        return "alt" === r && t.altKey || "ctrl" === r && t.ctrlKey || "shift" === r && t.shiftKey ? e * this._optionsService.rawOptions.fastScrollSensitivity * this._optionsService.rawOptions.scrollSensitivity : e * this._optionsService.rawOptions.scrollSensitivity;
                    }, t35.prototype.onTouchStart = function(e) {
                        this._lastTouchY = e.touches[0].pageY;
                    }, t35.prototype.onTouchMove = function(e) {
                        var t = this._lastTouchY - e.touches[0].pageY;
                        return this._lastTouchY = e.touches[0].pageY, 0 !== t && (this._viewportElement.scrollTop += t, this._bubbleScroll(e, t));
                    }, o10([
                        s10(4, h2.IBufferService),
                        s10(5, h2.IOptionsService),
                        s10(6, l4.ICharSizeService),
                        s10(7, l4.IRenderService)
                    ], t35);
                }(a9.Disposable);
                t33.Viewport = u;
            },
            2950: function(e47, t36, r19) {
                var i12 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n11 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t36, "__esModule", {
                    value: !0
                }), t36.CompositionHelper = void 0;
                var o11 = r19(4725), s11 = r19(2585), a10 = function() {
                    function e48(e, t, r, i, n, o) {
                        this._textarea = e, this._compositionView = t, this._bufferService = r, this._optionsService = i, this._coreService = n, this._renderService = o, this._isComposing = !1, this._isSendingComposition = !1, this._compositionPosition = {
                            start: 0,
                            end: 0
                        }, this._dataAlreadySent = "";
                    }
                    return Object.defineProperty(e48.prototype, "isComposing", {
                        get: function() {
                            return this._isComposing;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e48.prototype.compositionstart = function() {
                        this._isComposing = !0, this._compositionPosition.start = this._textarea.value.length, this._compositionView.textContent = "", this._dataAlreadySent = "", this._compositionView.classList.add("active");
                    }, e48.prototype.compositionupdate = function(e) {
                        var t = this;
                        this._compositionView.textContent = e.data, this.updateCompositionElements(), setTimeout(function() {
                            t._compositionPosition.end = t._textarea.value.length;
                        }, 0);
                    }, e48.prototype.compositionend = function() {
                        this._finalizeComposition(!0);
                    }, e48.prototype.keydown = function(e) {
                        if (this._isComposing || this._isSendingComposition) {
                            if (229 === e.keyCode) return !1;
                            if (16 === e.keyCode || 17 === e.keyCode || 18 === e.keyCode) return !1;
                            this._finalizeComposition(!1);
                        }
                        return 229 !== e.keyCode || (this._handleAnyTextareaChanges(), !1);
                    }, e48.prototype._finalizeComposition = function(e49) {
                        var t = this;
                        if (this._compositionView.classList.remove("active"), this._isComposing = !1, e49) {
                            var r = {
                                start: this._compositionPosition.start,
                                end: this._compositionPosition.end
                            };
                            this._isSendingComposition = !0, setTimeout(function() {
                                if (t._isSendingComposition) {
                                    t._isSendingComposition = !1;
                                    var e;
                                    r.start += t._dataAlreadySent.length, (e = t._isComposing ? t._textarea.value.substring(r.start, r.end) : t._textarea.value.substring(r.start)).length > 0 && t._coreService.triggerDataEvent(e, !0);
                                }
                            }, 0);
                        } else {
                            this._isSendingComposition = !1;
                            var i = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
                            this._coreService.triggerDataEvent(i, !0);
                        }
                    }, e48.prototype._handleAnyTextareaChanges = function() {
                        var e = this, t = this._textarea.value;
                        setTimeout(function() {
                            if (!e._isComposing) {
                                var r = e._textarea.value.replace(t, "");
                                r.length > 0 && (e._dataAlreadySent = r, e._coreService.triggerDataEvent(r, !0));
                            }
                        }, 0);
                    }, e48.prototype.updateCompositionElements = function(e) {
                        var t = this;
                        if (this._isComposing) {
                            if (this._bufferService.buffer.isCursorInViewport) {
                                var r = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), i = this._renderService.dimensions.actualCellHeight, n = this._bufferService.buffer.y * this._renderService.dimensions.actualCellHeight, o = r * this._renderService.dimensions.actualCellWidth;
                                this._compositionView.style.left = o + "px", this._compositionView.style.top = n + "px", this._compositionView.style.height = i + "px", this._compositionView.style.lineHeight = i + "px", this._compositionView.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._compositionView.style.fontSize = this._optionsService.rawOptions.fontSize + "px";
                                var s = this._compositionView.getBoundingClientRect();
                                this._textarea.style.left = o + "px", this._textarea.style.top = n + "px", this._textarea.style.width = Math.max(s.width, 1) + "px", this._textarea.style.height = Math.max(s.height, 1) + "px", this._textarea.style.lineHeight = s.height + "px";
                            }
                            e || setTimeout(function() {
                                return t.updateCompositionElements(!0);
                            }, 0);
                        }
                    }, i12([
                        n11(2, s11.IBufferService),
                        n11(3, s11.IOptionsService),
                        n11(4, s11.ICoreService),
                        n11(5, o11.IRenderService)
                    ], e48);
                }();
                t36.CompositionHelper = a10;
            },
            9806: (e50, t37)=>{
                function r20(e, t) {
                    var r = t.getBoundingClientRect();
                    return [
                        e.clientX - r.left,
                        e.clientY - r.top
                    ];
                }
                Object.defineProperty(t37, "__esModule", {
                    value: !0
                }), t37.getRawByteCoords = t37.getCoords = t37.getCoordsRelativeToElement = void 0, t37.getCoordsRelativeToElement = r20, t37.getCoords = function(e, t, i, n, o, s, a, c) {
                    if (o) {
                        var l = r20(e, t);
                        if (l) return l[0] = Math.ceil((l[0] + (c ? s / 2 : 0)) / s), l[1] = Math.ceil(l[1] / a), l[0] = Math.min(Math.max(l[0], 1), i + (c ? 1 : 0)), l[1] = Math.min(Math.max(l[1], 1), n), l;
                    }
                }, t37.getRawByteCoords = function(e) {
                    if (e) return {
                        x: e[0] + 32,
                        y: e[1] + 32
                    };
                };
            },
            9504: (e51, t38, r21)=>{
                Object.defineProperty(t38, "__esModule", {
                    value: !0
                }), t38.moveToCellSequence = void 0;
                var i13 = r21(2584);
                function n12(e52, t39, r22, i14) {
                    var n13 = e52 - o12(r22, e52), a12 = t39 - o12(r22, t39), h3 = Math.abs(n13 - a12) - function(e, t, r) {
                        for(var i = 0, n = e - o12(r, e), a = t - o12(r, t), c = 0; c < Math.abs(n - a); c++){
                            var l = "A" === s12(e, t) ? -1 : 1, h = r.buffer.lines.get(n + l * c);
                            (null == h ? void 0 : h.isWrapped) && i++;
                        }
                        return i;
                    }(e52, t39, r22);
                    return l5(h3, c4(s12(e52, t39), i14));
                }
                function o12(e, t) {
                    for(var r = 0, i = e.buffer.lines.get(t), n = null == i ? void 0 : i.isWrapped; n && t >= 0 && t < e.rows;)r++, n = null == (i = e.buffer.lines.get(--t)) ? void 0 : i.isWrapped;
                    return r;
                }
                function s12(e, t) {
                    return e > t ? "A" : "B";
                }
                function a11(e, t, r, i, n, o) {
                    for(var s = e, a = t, c = ""; s !== r || a !== i;)s += n ? 1 : -1, n && s > o.cols - 1 ? (c += o.buffer.translateBufferLineToString(a, !1, e, s), s = 0, e = 0, a++) : !n && s < 0 && (c += o.buffer.translateBufferLineToString(a, !1, 0, e + 1), e = s = o.cols - 1, a--);
                    return c + o.buffer.translateBufferLineToString(a, !1, e, s);
                }
                function c4(e, t) {
                    var r = t ? "O" : "[";
                    return i13.C0.ESC + r + e;
                }
                function l5(e, t) {
                    e = Math.floor(e);
                    for(var r = "", i = 0; i < e; i++)r += t;
                    return r;
                }
                t38.moveToCellSequence = function(e53, t40, r23, i15) {
                    var s13, h4 = r23.buffer.x, u2 = r23.buffer.y;
                    if (!r23.buffer.hasScrollback) return function(e, t, r, i, s, h) {
                        return 0 === n12(t, i, s, h).length ? "" : l5(a11(e, t, e, t - o12(s, t), !1, s).length, c4("D", h));
                    }(h4, u2, 0, t40, r23, i15) + n12(u2, t40, r23, i15) + function(e54, t41, r24, i16, s14, h) {
                        var u;
                        u = n12(t41, i16, s14, h).length > 0 ? i16 - o12(s14, i16) : t41;
                        var f = i16, _ = function(e, t, r, i, s, a) {
                            var c;
                            return c = n12(r, i, s, a).length > 0 ? i - o12(s, i) : t, e < r && c <= i || e >= r && c < i ? "C" : "D";
                        }(e54, t41, r24, i16, s14, h);
                        return l5(a11(e54, u, r24, f, "C" === _, s14).length, c4(_, h));
                    }(h4, u2, e53, t40, r23, i15);
                    if (u2 === t40) return s13 = h4 > e53 ? "D" : "C", l5(Math.abs(h4 - e53), c4(s13, i15));
                    s13 = u2 > t40 ? "D" : "C";
                    var f1 = Math.abs(u2 - t40);
                    return l5(function(e, t) {
                        return t.cols - e;
                    }(u2 > t40 ? e53 : h4, r23) + (f1 - 1) * r23.cols + 1 + ((u2 > t40 ? h4 : e53) - 1), c4(s13, i15));
                };
            },
            4389: function(e55, t42, r25) {
                var i17 = this && this.__assign || function() {
                    return i17 = Object.assign || function(e) {
                        for(var t, r = 1, i = arguments.length; r < i; r++)for(var n in t = arguments[r])Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e;
                    }, i17.apply(this, arguments);
                };
                Object.defineProperty(t42, "__esModule", {
                    value: !0
                }), t42.Terminal = void 0;
                var n14 = r25(3236), o13 = r25(9042), s15 = r25(7975), a13 = r25(7090), c = r25(5741), l = r25(8285), h = [
                    "cols",
                    "rows"
                ], u = function() {
                    function e56(e57) {
                        var t = this;
                        this._core = new n14.Terminal(e57), this._addonManager = new c.AddonManager, this._publicOptions = i17({}, this._core.options);
                        var r26 = function(e) {
                            return t._core.options[e];
                        }, o = function(e, r) {
                            t._checkReadonlyOptions(e), t._core.options[e] = r;
                        };
                        for(var s in this._core.options){
                            var a = {
                                get: r26.bind(this, s),
                                set: o.bind(this, s)
                            };
                            Object.defineProperty(this._publicOptions, s, a);
                        }
                    }
                    return e56.prototype._checkReadonlyOptions = function(e) {
                        if (h.includes(e)) throw new Error('Option "' + e + '" can only be set in the constructor');
                    }, e56.prototype._checkProposedApi = function() {
                        if (!this._core.optionsService.rawOptions.allowProposedApi) throw new Error("You must set the allowProposedApi option to true to use proposed API");
                    }, Object.defineProperty(e56.prototype, "onBell", {
                        get: function() {
                            return this._core.onBell;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "onBinary", {
                        get: function() {
                            return this._core.onBinary;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "onCursorMove", {
                        get: function() {
                            return this._core.onCursorMove;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "onData", {
                        get: function() {
                            return this._core.onData;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "onKey", {
                        get: function() {
                            return this._core.onKey;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "onLineFeed", {
                        get: function() {
                            return this._core.onLineFeed;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "onRender", {
                        get: function() {
                            return this._core.onRender;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "onResize", {
                        get: function() {
                            return this._core.onResize;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "onScroll", {
                        get: function() {
                            return this._core.onScroll;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "onSelectionChange", {
                        get: function() {
                            return this._core.onSelectionChange;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "onTitleChange", {
                        get: function() {
                            return this._core.onTitleChange;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "element", {
                        get: function() {
                            return this._core.element;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "parser", {
                        get: function() {
                            return this._checkProposedApi(), this._parser || (this._parser = new s15.ParserApi(this._core)), this._parser;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "unicode", {
                        get: function() {
                            return this._checkProposedApi(), new a13.UnicodeApi(this._core);
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "textarea", {
                        get: function() {
                            return this._core.textarea;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "rows", {
                        get: function() {
                            return this._core.rows;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "cols", {
                        get: function() {
                            return this._core.cols;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "buffer", {
                        get: function() {
                            return this._checkProposedApi(), this._buffer || (this._buffer = new l.BufferNamespaceApi(this._core)), this._buffer;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "markers", {
                        get: function() {
                            return this._checkProposedApi(), this._core.markers;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "modes", {
                        get: function() {
                            var e = this._core.coreService.decPrivateModes, t = "none";
                            switch(this._core.coreMouseService.activeProtocol){
                                case "X10":
                                    t = "x10";
                                    break;
                                case "VT200":
                                    t = "vt200";
                                    break;
                                case "DRAG":
                                    t = "drag";
                                    break;
                                case "ANY":
                                    t = "any";
                            }
                            return {
                                applicationCursorKeysMode: e.applicationCursorKeys,
                                applicationKeypadMode: e.applicationKeypad,
                                bracketedPasteMode: e.bracketedPasteMode,
                                insertMode: this._core.coreService.modes.insertMode,
                                mouseTrackingMode: t,
                                originMode: e.origin,
                                reverseWraparoundMode: e.reverseWraparound,
                                sendFocusMode: e.sendFocus,
                                wraparoundMode: e.wraparound
                            };
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e56.prototype, "options", {
                        get: function() {
                            return this._publicOptions;
                        },
                        set: function(e) {
                            for(var t in e)this._publicOptions[t] = e[t];
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e56.prototype.blur = function() {
                        this._core.blur();
                    }, e56.prototype.focus = function() {
                        this._core.focus();
                    }, e56.prototype.resize = function(e, t) {
                        this._verifyIntegers(e, t), this._core.resize(e, t);
                    }, e56.prototype.open = function(e) {
                        this._core.open(e);
                    }, e56.prototype.attachCustomKeyEventHandler = function(e) {
                        this._core.attachCustomKeyEventHandler(e);
                    }, e56.prototype.registerLinkMatcher = function(e, t, r) {
                        return this._checkProposedApi(), this._core.registerLinkMatcher(e, t, r);
                    }, e56.prototype.deregisterLinkMatcher = function(e) {
                        this._checkProposedApi(), this._core.deregisterLinkMatcher(e);
                    }, e56.prototype.registerLinkProvider = function(e) {
                        return this._checkProposedApi(), this._core.registerLinkProvider(e);
                    }, e56.prototype.registerCharacterJoiner = function(e) {
                        return this._checkProposedApi(), this._core.registerCharacterJoiner(e);
                    }, e56.prototype.deregisterCharacterJoiner = function(e) {
                        this._checkProposedApi(), this._core.deregisterCharacterJoiner(e);
                    }, e56.prototype.registerMarker = function(e) {
                        return void 0 === e && (e = 0), this._checkProposedApi(), this._verifyIntegers(e), this._core.addMarker(e);
                    }, e56.prototype.registerDecoration = function(e) {
                        var t, r, i;
                        return this._checkProposedApi(), this._verifyPositiveIntegers(null !== (t = e.x) && void 0 !== t ? t : 0, null !== (r = e.width) && void 0 !== r ? r : 0, null !== (i = e.height) && void 0 !== i ? i : 0), this._core.registerDecoration(e);
                    }, e56.prototype.addMarker = function(e) {
                        return this.registerMarker(e);
                    }, e56.prototype.hasSelection = function() {
                        return this._core.hasSelection();
                    }, e56.prototype.select = function(e, t, r) {
                        this._verifyIntegers(e, t, r), this._core.select(e, t, r);
                    }, e56.prototype.getSelection = function() {
                        return this._core.getSelection();
                    }, e56.prototype.getSelectionPosition = function() {
                        return this._core.getSelectionPosition();
                    }, e56.prototype.clearSelection = function() {
                        this._core.clearSelection();
                    }, e56.prototype.selectAll = function() {
                        this._core.selectAll();
                    }, e56.prototype.selectLines = function(e, t) {
                        this._verifyIntegers(e, t), this._core.selectLines(e, t);
                    }, e56.prototype.dispose = function() {
                        this._addonManager.dispose(), this._core.dispose();
                    }, e56.prototype.scrollLines = function(e) {
                        this._verifyIntegers(e), this._core.scrollLines(e);
                    }, e56.prototype.scrollPages = function(e) {
                        this._verifyIntegers(e), this._core.scrollPages(e);
                    }, e56.prototype.scrollToTop = function() {
                        this._core.scrollToTop();
                    }, e56.prototype.scrollToBottom = function() {
                        this._core.scrollToBottom();
                    }, e56.prototype.scrollToLine = function(e) {
                        this._verifyIntegers(e), this._core.scrollToLine(e);
                    }, e56.prototype.clear = function() {
                        this._core.clear();
                    }, e56.prototype.write = function(e, t) {
                        this._core.write(e, t);
                    }, e56.prototype.writeUtf8 = function(e, t) {
                        this._core.write(e, t);
                    }, e56.prototype.writeln = function(e, t) {
                        this._core.write(e), this._core.write("\r\n", t);
                    }, e56.prototype.paste = function(e) {
                        this._core.paste(e);
                    }, e56.prototype.getOption = function(e) {
                        return this._core.optionsService.getOption(e);
                    }, e56.prototype.setOption = function(e, t) {
                        this._checkReadonlyOptions(e), this._core.optionsService.setOption(e, t);
                    }, e56.prototype.refresh = function(e, t) {
                        this._verifyIntegers(e, t), this._core.refresh(e, t);
                    }, e56.prototype.reset = function() {
                        this._core.reset();
                    }, e56.prototype.clearTextureAtlas = function() {
                        this._core.clearTextureAtlas();
                    }, e56.prototype.loadAddon = function(e) {
                        return this._addonManager.loadAddon(this, e);
                    }, Object.defineProperty(e56, "strings", {
                        get: function() {
                            return o13;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e56.prototype._verifyIntegers = function() {
                        for(var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
                        for(var r = 0, i = e; r < i.length; r++){
                            var n = i[r];
                            if (n === 1 / 0 || isNaN(n) || n % 1 != 0) throw new Error("This API only accepts integers");
                        }
                    }, e56.prototype._verifyPositiveIntegers = function() {
                        for(var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
                        for(var r = 0, i = e; r < i.length; r++){
                            var n = i[r];
                            if (n && (n === 1 / 0 || isNaN(n) || n % 1 != 0 || n < 0)) throw new Error("This API only accepts positive integers");
                        }
                    }, e56;
                }();
                t42.Terminal = u;
            },
            1546: (e58, t43, r27)=>{
                Object.defineProperty(t43, "__esModule", {
                    value: !0
                }), t43.BaseRenderLayer = void 0;
                var i18 = r27(643), n15 = r27(8803), o14 = r27(1420), s16 = r27(3734), a14 = r27(1752), c5 = r27(4774), l6 = r27(9631), h5 = r27(8978), u3 = function() {
                    function e59(e, t, r, i, n, o, s, a) {
                        this._container = e, this._alpha = i, this._colors = n, this._rendererId = o, this._bufferService = s, this._optionsService = a, this._scaledCharWidth = 0, this._scaledCharHeight = 0, this._scaledCellWidth = 0, this._scaledCellHeight = 0, this._scaledCharLeft = 0, this._scaledCharTop = 0, this._currentGlyphIdentifier = {
                            chars: "",
                            code: 0,
                            bg: 0,
                            fg: 0,
                            bold: !1,
                            dim: !1,
                            italic: !1
                        }, this._canvas = document.createElement("canvas"), this._canvas.classList.add("xterm-" + t + "-layer"), this._canvas.style.zIndex = r.toString(), this._initCanvas(), this._container.appendChild(this._canvas);
                    }
                    return e59.prototype.dispose = function() {
                        var e;
                        (0, l6.removeElementFromParent)(this._canvas), null === (e = this._charAtlas) || void 0 === e || e.dispose();
                    }, e59.prototype._initCanvas = function() {
                        this._ctx = (0, a14.throwIfFalsy)(this._canvas.getContext("2d", {
                            alpha: this._alpha
                        })), this._alpha || this._clearAll();
                    }, e59.prototype.onOptionsChanged = function() {}, e59.prototype.onBlur = function() {}, e59.prototype.onFocus = function() {}, e59.prototype.onCursorMove = function() {}, e59.prototype.onGridChanged = function(e, t) {}, e59.prototype.onSelectionChanged = function(e, t, r) {
                        void 0 === r && (r = !1);
                    }, e59.prototype.setColors = function(e) {
                        this._refreshCharAtlas(e);
                    }, e59.prototype._setTransparency = function(e) {
                        if (e !== this._alpha) {
                            var t = this._canvas;
                            this._alpha = e, this._canvas = this._canvas.cloneNode(), this._initCanvas(), this._container.replaceChild(this._canvas, t), this._refreshCharAtlas(this._colors), this.onGridChanged(0, this._bufferService.rows - 1);
                        }
                    }, e59.prototype._refreshCharAtlas = function(e) {
                        this._scaledCharWidth <= 0 && this._scaledCharHeight <= 0 || (this._charAtlas = (0, o14.acquireCharAtlas)(this._optionsService.rawOptions, this._rendererId, e, this._scaledCharWidth, this._scaledCharHeight), this._charAtlas.warmUp());
                    }, e59.prototype.resize = function(e) {
                        this._scaledCellWidth = e.scaledCellWidth, this._scaledCellHeight = e.scaledCellHeight, this._scaledCharWidth = e.scaledCharWidth, this._scaledCharHeight = e.scaledCharHeight, this._scaledCharLeft = e.scaledCharLeft, this._scaledCharTop = e.scaledCharTop, this._canvas.width = e.scaledCanvasWidth, this._canvas.height = e.scaledCanvasHeight, this._canvas.style.width = e.canvasWidth + "px", this._canvas.style.height = e.canvasHeight + "px", this._alpha || this._clearAll(), this._refreshCharAtlas(this._colors);
                    }, e59.prototype.clearTextureAtlas = function() {
                        var e;
                        null === (e = this._charAtlas) || void 0 === e || e.clear();
                    }, e59.prototype._fillCells = function(e, t, r, i) {
                        this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight);
                    }, e59.prototype._fillMiddleLineAtCells = function(e, t, r) {
                        void 0 === r && (r = 1);
                        var i = Math.ceil(0.5 * this._scaledCellHeight);
                        this._ctx.fillRect(e * this._scaledCellWidth, (t + 1) * this._scaledCellHeight - i - window.devicePixelRatio, r * this._scaledCellWidth, window.devicePixelRatio);
                    }, e59.prototype._fillBottomLineAtCells = function(e, t, r) {
                        void 0 === r && (r = 1), this._ctx.fillRect(e * this._scaledCellWidth, (t + 1) * this._scaledCellHeight - window.devicePixelRatio - 1, r * this._scaledCellWidth, window.devicePixelRatio);
                    }, e59.prototype._fillLeftLineAtCell = function(e, t, r) {
                        this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, window.devicePixelRatio * r, this._scaledCellHeight);
                    }, e59.prototype._strokeRectAtCell = function(e, t, r, i) {
                        this._ctx.lineWidth = window.devicePixelRatio, this._ctx.strokeRect(e * this._scaledCellWidth + window.devicePixelRatio / 2, t * this._scaledCellHeight + window.devicePixelRatio / 2, r * this._scaledCellWidth - window.devicePixelRatio, i * this._scaledCellHeight - window.devicePixelRatio);
                    }, e59.prototype._clearAll = function() {
                        this._alpha ? this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height));
                    }, e59.prototype._clearCells = function(e, t, r, i) {
                        this._alpha ? this._ctx.clearRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight) : (this._ctx.fillStyle = this._colors.background.css, this._ctx.fillRect(e * this._scaledCellWidth, t * this._scaledCellHeight, r * this._scaledCellWidth, i * this._scaledCellHeight));
                    }, e59.prototype._fillCharTrueColor = function(e, t, r) {
                        this._ctx.font = this._getFont(!1, !1), this._ctx.textBaseline = n15.TEXT_BASELINE, this._clipRow(r);
                        var i = !1;
                        !1 !== this._optionsService.rawOptions.customGlyphs && (i = (0, h5.tryDrawCustomChar)(this._ctx, e.getChars(), t * this._scaledCellWidth, r * this._scaledCellHeight, this._scaledCellWidth, this._scaledCellHeight)), i || this._ctx.fillText(e.getChars(), t * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight);
                    }, e59.prototype._drawChars = function(e, t, r) {
                        var o, s, a, c = this._getContrastColor(e);
                        c || e.isFgRGB() || e.isBgRGB() ? this._drawUncachedChars(e, t, r, c) : (e.isInverse() ? (s = e.isBgDefault() ? n15.INVERTED_DEFAULT_COLOR : e.getBgColor(), a = e.isFgDefault() ? n15.INVERTED_DEFAULT_COLOR : e.getFgColor()) : (a = e.isBgDefault() ? i18.DEFAULT_COLOR : e.getBgColor(), s = e.isFgDefault() ? i18.DEFAULT_COLOR : e.getFgColor()), s += this._optionsService.rawOptions.drawBoldTextInBrightColors && e.isBold() && s < 8 ? 8 : 0, this._currentGlyphIdentifier.chars = e.getChars() || i18.WHITESPACE_CELL_CHAR, this._currentGlyphIdentifier.code = e.getCode() || i18.WHITESPACE_CELL_CODE, this._currentGlyphIdentifier.bg = a, this._currentGlyphIdentifier.fg = s, this._currentGlyphIdentifier.bold = !!e.isBold(), this._currentGlyphIdentifier.dim = !!e.isDim(), this._currentGlyphIdentifier.italic = !!e.isItalic(), (null === (o = this._charAtlas) || void 0 === o ? void 0 : o.draw(this._ctx, this._currentGlyphIdentifier, t * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop)) || this._drawUncachedChars(e, t, r));
                    }, e59.prototype._drawUncachedChars = function(e, t, r, i) {
                        if (this._ctx.save(), this._ctx.font = this._getFont(!!e.isBold(), !!e.isItalic()), this._ctx.textBaseline = n15.TEXT_BASELINE, e.isInverse()) {
                            if (i) this._ctx.fillStyle = i.css;
                            else if (e.isBgDefault()) this._ctx.fillStyle = c5.color.opaque(this._colors.background).css;
                            else if (e.isBgRGB()) this._ctx.fillStyle = "rgb(" + s16.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")";
                            else {
                                var o = e.getBgColor();
                                this._optionsService.rawOptions.drawBoldTextInBrightColors && e.isBold() && o < 8 && (o += 8), this._ctx.fillStyle = this._colors.ansi[o].css;
                            }
                        } else if (i) this._ctx.fillStyle = i.css;
                        else if (e.isFgDefault()) this._ctx.fillStyle = this._colors.foreground.css;
                        else if (e.isFgRGB()) this._ctx.fillStyle = "rgb(" + s16.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")";
                        else {
                            var a = e.getFgColor();
                            this._optionsService.rawOptions.drawBoldTextInBrightColors && e.isBold() && a < 8 && (a += 8), this._ctx.fillStyle = this._colors.ansi[a].css;
                        }
                        this._clipRow(r), e.isDim() && (this._ctx.globalAlpha = n15.DIM_OPACITY);
                        var l = !1;
                        !1 !== this._optionsService.rawOptions.customGlyphs && (l = (0, h5.tryDrawCustomChar)(this._ctx, e.getChars(), t * this._scaledCellWidth, r * this._scaledCellHeight, this._scaledCellWidth, this._scaledCellHeight)), l || this._ctx.fillText(e.getChars(), t * this._scaledCellWidth + this._scaledCharLeft, r * this._scaledCellHeight + this._scaledCharTop + this._scaledCharHeight), this._ctx.restore();
                    }, e59.prototype._clipRow = function(e) {
                        this._ctx.beginPath(), this._ctx.rect(0, e * this._scaledCellHeight, this._bufferService.cols * this._scaledCellWidth, this._scaledCellHeight), this._ctx.clip();
                    }, e59.prototype._getFont = function(e, t) {
                        return (t ? "italic" : "") + " " + (e ? this._optionsService.rawOptions.fontWeightBold : this._optionsService.rawOptions.fontWeight) + " " + this._optionsService.rawOptions.fontSize * window.devicePixelRatio + "px " + this._optionsService.rawOptions.fontFamily;
                    }, e59.prototype._getContrastColor = function(e) {
                        if (1 !== this._optionsService.rawOptions.minimumContrastRatio) {
                            var t = this._colors.contrastCache.getColor(e.bg, e.fg);
                            if (void 0 !== t) return t || void 0;
                            var r = e.getFgColor(), i = e.getFgColorMode(), n = e.getBgColor(), o = e.getBgColorMode(), s = !!e.isInverse(), a = !!e.isInverse();
                            if (s) {
                                var l = r;
                                r = n, n = l;
                                var h = i;
                                i = o, o = h;
                            }
                            var u = this._resolveBackgroundRgba(o, n, s), f = this._resolveForegroundRgba(i, r, s, a), _ = c5.rgba.ensureContrastRatio(u, f, this._optionsService.rawOptions.minimumContrastRatio);
                            if (_) {
                                var d = {
                                    css: c5.channels.toCss(_ >> 24 & 255, _ >> 16 & 255, _ >> 8 & 255),
                                    rgba: _
                                };
                                return this._colors.contrastCache.setColor(e.bg, e.fg, d), d;
                            }
                            this._colors.contrastCache.setColor(e.bg, e.fg, null);
                        }
                    }, e59.prototype._resolveBackgroundRgba = function(e, t, r) {
                        switch(e){
                            case 16777216:
                            case 33554432:
                                return this._colors.ansi[t].rgba;
                            case 50331648:
                                return t << 8;
                            default:
                                return r ? this._colors.foreground.rgba : this._colors.background.rgba;
                        }
                    }, e59.prototype._resolveForegroundRgba = function(e, t, r, i) {
                        switch(e){
                            case 16777216:
                            case 33554432:
                                return this._optionsService.rawOptions.drawBoldTextInBrightColors && i && t < 8 && (t += 8), this._colors.ansi[t].rgba;
                            case 50331648:
                                return t << 8;
                            default:
                                return r ? this._colors.background.rgba : this._colors.foreground.rgba;
                        }
                    }, e59;
                }();
                t43.BaseRenderLayer = u3;
            },
            2512: function(e60, t44, r28) {
                var i19, n16 = this && this.__extends || (i19 = function(e61, t45) {
                    return i19 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i19(e61, t45);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i19(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o15 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s17 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t44, "__esModule", {
                    value: !0
                }), t44.CursorRenderLayer = void 0;
                var a15 = r28(1546), c = r28(511), l7 = r28(2585), h6 = r28(4725), u4 = 600, f = function(e62) {
                    function t46(t, r, i, n, o, s, a, l, h) {
                        var u = e62.call(this, t, "cursor", r, !0, i, n, s, a) || this;
                        return u._onRequestRedraw = o, u._coreService = l, u._coreBrowserService = h, u._cell = new c.CellData, u._state = {
                            x: 0,
                            y: 0,
                            isFocused: !1,
                            style: "",
                            width: 0
                        }, u._cursorRenderers = {
                            bar: u._renderBarCursor.bind(u),
                            block: u._renderBlockCursor.bind(u),
                            underline: u._renderUnderlineCursor.bind(u)
                        }, u;
                    }
                    return n16(t46, e62), t46.prototype.dispose = function() {
                        this._cursorBlinkStateManager && (this._cursorBlinkStateManager.dispose(), this._cursorBlinkStateManager = void 0), e62.prototype.dispose.call(this);
                    }, t46.prototype.resize = function(t) {
                        e62.prototype.resize.call(this, t), this._state = {
                            x: 0,
                            y: 0,
                            isFocused: !1,
                            style: "",
                            width: 0
                        };
                    }, t46.prototype.reset = function() {
                        var e;
                        this._clearCursor(), null === (e = this._cursorBlinkStateManager) || void 0 === e || e.restartBlinkAnimation(), this.onOptionsChanged();
                    }, t46.prototype.onBlur = function() {
                        var e;
                        null === (e = this._cursorBlinkStateManager) || void 0 === e || e.pause(), this._onRequestRedraw.fire({
                            start: this._bufferService.buffer.y,
                            end: this._bufferService.buffer.y
                        });
                    }, t46.prototype.onFocus = function() {
                        var e;
                        null === (e = this._cursorBlinkStateManager) || void 0 === e || e.resume(), this._onRequestRedraw.fire({
                            start: this._bufferService.buffer.y,
                            end: this._bufferService.buffer.y
                        });
                    }, t46.prototype.onOptionsChanged = function() {
                        var e, t = this;
                        this._optionsService.rawOptions.cursorBlink ? this._cursorBlinkStateManager || (this._cursorBlinkStateManager = new _(this._coreBrowserService.isFocused, function() {
                            t._render(!0);
                        })) : (null === (e = this._cursorBlinkStateManager) || void 0 === e || e.dispose(), this._cursorBlinkStateManager = void 0), this._onRequestRedraw.fire({
                            start: this._bufferService.buffer.y,
                            end: this._bufferService.buffer.y
                        });
                    }, t46.prototype.onCursorMove = function() {
                        var e;
                        null === (e = this._cursorBlinkStateManager) || void 0 === e || e.restartBlinkAnimation();
                    }, t46.prototype.onGridChanged = function(e, t) {
                        !this._cursorBlinkStateManager || this._cursorBlinkStateManager.isPaused ? this._render(!1) : this._cursorBlinkStateManager.restartBlinkAnimation();
                    }, t46.prototype._render = function(e) {
                        if (this._coreService.isCursorInitialized && !this._coreService.isCursorHidden) {
                            var t = this._bufferService.buffer.ybase + this._bufferService.buffer.y, r = t - this._bufferService.buffer.ydisp;
                            if (r < 0 || r >= this._bufferService.rows) this._clearCursor();
                            else {
                                var i = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1);
                                if (this._bufferService.buffer.lines.get(t).loadCell(i, this._cell), void 0 !== this._cell.content) {
                                    if (!this._coreBrowserService.isFocused) {
                                        this._clearCursor(), this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css;
                                        var n = this._optionsService.rawOptions.cursorStyle;
                                        return n && "block" !== n ? this._cursorRenderers[n](i, r, this._cell) : this._renderBlurCursor(i, r, this._cell), this._ctx.restore(), this._state.x = i, this._state.y = r, this._state.isFocused = !1, this._state.style = n, void (this._state.width = this._cell.getWidth());
                                    }
                                    if (!this._cursorBlinkStateManager || this._cursorBlinkStateManager.isCursorVisible) {
                                        if (this._state) {
                                            if (this._state.x === i && this._state.y === r && this._state.isFocused === this._coreBrowserService.isFocused && this._state.style === this._optionsService.rawOptions.cursorStyle && this._state.width === this._cell.getWidth()) return;
                                            this._clearCursor();
                                        }
                                        this._ctx.save(), this._cursorRenderers[this._optionsService.rawOptions.cursorStyle || "block"](i, r, this._cell), this._ctx.restore(), this._state.x = i, this._state.y = r, this._state.isFocused = !1, this._state.style = this._optionsService.rawOptions.cursorStyle, this._state.width = this._cell.getWidth();
                                    } else this._clearCursor();
                                }
                            }
                        } else this._clearCursor();
                    }, t46.prototype._clearCursor = function() {
                        this._state && (window.devicePixelRatio < 1 ? this._clearAll() : this._clearCells(this._state.x, this._state.y, this._state.width, 1), this._state = {
                            x: 0,
                            y: 0,
                            isFocused: !1,
                            style: "",
                            width: 0
                        });
                    }, t46.prototype._renderBarCursor = function(e, t, r) {
                        this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillLeftLineAtCell(e, t, this._optionsService.rawOptions.cursorWidth), this._ctx.restore();
                    }, t46.prototype._renderBlockCursor = function(e, t, r) {
                        this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillCells(e, t, r.getWidth(), 1), this._ctx.fillStyle = this._colors.cursorAccent.css, this._fillCharTrueColor(r, e, t), this._ctx.restore();
                    }, t46.prototype._renderUnderlineCursor = function(e, t, r) {
                        this._ctx.save(), this._ctx.fillStyle = this._colors.cursor.css, this._fillBottomLineAtCells(e, t), this._ctx.restore();
                    }, t46.prototype._renderBlurCursor = function(e, t, r) {
                        this._ctx.save(), this._ctx.strokeStyle = this._colors.cursor.css, this._strokeRectAtCell(e, t, r.getWidth(), 1), this._ctx.restore();
                    }, o15([
                        s17(5, l7.IBufferService),
                        s17(6, l7.IOptionsService),
                        s17(7, l7.ICoreService),
                        s17(8, h6.ICoreBrowserService)
                    ], t46);
                }(a15.BaseRenderLayer);
                t44.CursorRenderLayer = f;
                var _ = function() {
                    function e63(e, t) {
                        this._renderCallback = t, this.isCursorVisible = !0, e && this._restartInterval();
                    }
                    return Object.defineProperty(e63.prototype, "isPaused", {
                        get: function() {
                            return !(this._blinkStartTimeout || this._blinkInterval);
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e63.prototype.dispose = function() {
                        this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
                    }, e63.prototype.restartBlinkAnimation = function() {
                        var e = this;
                        this.isPaused || (this._animationTimeRestarted = Date.now(), this.isCursorVisible = !0, this._animationFrame || (this._animationFrame = window.requestAnimationFrame(function() {
                            e._renderCallback(), e._animationFrame = void 0;
                        })));
                    }, e63.prototype._restartInterval = function(e64) {
                        var t = this;
                        void 0 === e64 && (e64 = u4), this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout = window.setTimeout(function() {
                            if (t._animationTimeRestarted) {
                                var e = u4 - (Date.now() - t._animationTimeRestarted);
                                if (t._animationTimeRestarted = void 0, e > 0) return void t._restartInterval(e);
                            }
                            t.isCursorVisible = !1, t._animationFrame = window.requestAnimationFrame(function() {
                                t._renderCallback(), t._animationFrame = void 0;
                            }), t._blinkInterval = window.setInterval(function() {
                                if (t._animationTimeRestarted) {
                                    var e = u4 - (Date.now() - t._animationTimeRestarted);
                                    return t._animationTimeRestarted = void 0, void t._restartInterval(e);
                                }
                                t.isCursorVisible = !t.isCursorVisible, t._animationFrame = window.requestAnimationFrame(function() {
                                    t._renderCallback(), t._animationFrame = void 0;
                                });
                            }, u4);
                        }, e64);
                    }, e63.prototype.pause = function() {
                        this.isCursorVisible = !0, this._blinkInterval && (window.clearInterval(this._blinkInterval), this._blinkInterval = void 0), this._blinkStartTimeout && (window.clearTimeout(this._blinkStartTimeout), this._blinkStartTimeout = void 0), this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
                    }, e63.prototype.resume = function() {
                        this.pause(), this._animationTimeRestarted = void 0, this._restartInterval(), this.restartBlinkAnimation();
                    }, e63;
                }();
            },
            8978: (e65, t47, r29)=>{
                var i20, n17, o16, s18, a16, c6, l8, h7, u5, f2, _1, d1, p1, v1, g1, y1, m1, S1, C, b, w, L, E, x, k, M, A, R, O, T, D, B, P, I, H, F, j, W, U, q, N, z, K, G, V, X, Y, Z, J, $, Q, ee, te, re, ie, ne, oe, se, ae, ce, le, he, ue, fe, _e, de, pe, ve, ge, ye, me, Se, Ce, be, we, Le, Ee, xe, ke, Me, Ae, Re, Oe, Te, De, Be, Pe, Ie, He, Fe, je, We, Ue, qe, Ne, ze, Ke, Ge, Ve, Xe, Ye, Ze, Je, $e, Qe, et, tt, rt, it, nt, ot, st, at, ct, lt, ht, ut, ft, _t, dt, pt, vt, gt, yt, mt, St, Ct, bt;
                Object.defineProperty(t47, "__esModule", {
                    value: !0
                }), t47.tryDrawCustomChar = t47.boxDrawingDefinitions = t47.blockElementDefinitions = void 0;
                var wt = r29(1752);
                t47.blockElementDefinitions = {
                    "▀": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 4
                        }
                    ],
                    "▁": [
                        {
                            x: 0,
                            y: 7,
                            w: 8,
                            h: 1
                        }
                    ],
                    "▂": [
                        {
                            x: 0,
                            y: 6,
                            w: 8,
                            h: 2
                        }
                    ],
                    "▃": [
                        {
                            x: 0,
                            y: 5,
                            w: 8,
                            h: 3
                        }
                    ],
                    "▄": [
                        {
                            x: 0,
                            y: 4,
                            w: 8,
                            h: 4
                        }
                    ],
                    "▅": [
                        {
                            x: 0,
                            y: 3,
                            w: 8,
                            h: 5
                        }
                    ],
                    "▆": [
                        {
                            x: 0,
                            y: 2,
                            w: 8,
                            h: 6
                        }
                    ],
                    "▇": [
                        {
                            x: 0,
                            y: 1,
                            w: 8,
                            h: 7
                        }
                    ],
                    "█": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 8
                        }
                    ],
                    "▉": [
                        {
                            x: 0,
                            y: 0,
                            w: 7,
                            h: 8
                        }
                    ],
                    "▊": [
                        {
                            x: 0,
                            y: 0,
                            w: 6,
                            h: 8
                        }
                    ],
                    "▋": [
                        {
                            x: 0,
                            y: 0,
                            w: 5,
                            h: 8
                        }
                    ],
                    "▌": [
                        {
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 8
                        }
                    ],
                    "▍": [
                        {
                            x: 0,
                            y: 0,
                            w: 3,
                            h: 8
                        }
                    ],
                    "▎": [
                        {
                            x: 0,
                            y: 0,
                            w: 2,
                            h: 8
                        }
                    ],
                    "▏": [
                        {
                            x: 0,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "▐": [
                        {
                            x: 4,
                            y: 0,
                            w: 4,
                            h: 8
                        }
                    ],
                    "▔": [
                        {
                            x: 0,
                            y: 0,
                            w: 9,
                            h: 1
                        }
                    ],
                    "▕": [
                        {
                            x: 7,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "▖": [
                        {
                            x: 0,
                            y: 4,
                            w: 4,
                            h: 4
                        }
                    ],
                    "▗": [
                        {
                            x: 4,
                            y: 4,
                            w: 4,
                            h: 4
                        }
                    ],
                    "▘": [
                        {
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 4
                        }
                    ],
                    "▙": [
                        {
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 8
                        },
                        {
                            x: 0,
                            y: 4,
                            w: 8,
                            h: 4
                        }
                    ],
                    "▚": [
                        {
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 4
                        },
                        {
                            x: 4,
                            y: 4,
                            w: 4,
                            h: 4
                        }
                    ],
                    "▛": [
                        {
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 8
                        },
                        {
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 8
                        }
                    ],
                    "▜": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 4
                        },
                        {
                            x: 4,
                            y: 0,
                            w: 4,
                            h: 8
                        }
                    ],
                    "▝": [
                        {
                            x: 4,
                            y: 0,
                            w: 4,
                            h: 4
                        }
                    ],
                    "▞": [
                        {
                            x: 4,
                            y: 0,
                            w: 4,
                            h: 4
                        },
                        {
                            x: 0,
                            y: 4,
                            w: 4,
                            h: 4
                        }
                    ],
                    "▟": [
                        {
                            x: 4,
                            y: 0,
                            w: 4,
                            h: 8
                        },
                        {
                            x: 0,
                            y: 4,
                            w: 8,
                            h: 4
                        }
                    ],
                    "🭰": [
                        {
                            x: 1,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "🭱": [
                        {
                            x: 2,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "🭲": [
                        {
                            x: 3,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "🭳": [
                        {
                            x: 4,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "🭴": [
                        {
                            x: 5,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "🭵": [
                        {
                            x: 6,
                            y: 0,
                            w: 1,
                            h: 8
                        }
                    ],
                    "🭶": [
                        {
                            x: 0,
                            y: 1,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭷": [
                        {
                            x: 0,
                            y: 2,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭸": [
                        {
                            x: 0,
                            y: 3,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭹": [
                        {
                            x: 0,
                            y: 4,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭺": [
                        {
                            x: 0,
                            y: 5,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭻": [
                        {
                            x: 0,
                            y: 6,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭼": [
                        {
                            x: 0,
                            y: 0,
                            w: 1,
                            h: 8
                        },
                        {
                            x: 0,
                            y: 7,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭽": [
                        {
                            x: 0,
                            y: 0,
                            w: 1,
                            h: 8
                        },
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭾": [
                        {
                            x: 7,
                            y: 0,
                            w: 1,
                            h: 8
                        },
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🭿": [
                        {
                            x: 7,
                            y: 0,
                            w: 1,
                            h: 8
                        },
                        {
                            x: 0,
                            y: 7,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🮀": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 1
                        },
                        {
                            x: 0,
                            y: 7,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🮁": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 1
                        },
                        {
                            x: 0,
                            y: 2,
                            w: 8,
                            h: 1
                        },
                        {
                            x: 0,
                            y: 4,
                            w: 8,
                            h: 1
                        },
                        {
                            x: 0,
                            y: 7,
                            w: 8,
                            h: 1
                        }
                    ],
                    "🮂": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 2
                        }
                    ],
                    "🮃": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 3
                        }
                    ],
                    "🮄": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 5
                        }
                    ],
                    "🮅": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 6
                        }
                    ],
                    "🮆": [
                        {
                            x: 0,
                            y: 0,
                            w: 8,
                            h: 7
                        }
                    ],
                    "🮇": [
                        {
                            x: 6,
                            y: 0,
                            w: 2,
                            h: 8
                        }
                    ],
                    "🮈": [
                        {
                            x: 5,
                            y: 0,
                            w: 3,
                            h: 8
                        }
                    ],
                    "🮉": [
                        {
                            x: 3,
                            y: 0,
                            w: 5,
                            h: 8
                        }
                    ],
                    "🮊": [
                        {
                            x: 2,
                            y: 0,
                            w: 6,
                            h: 8
                        }
                    ],
                    "🮋": [
                        {
                            x: 1,
                            y: 0,
                            w: 7,
                            h: 8
                        }
                    ],
                    "🮕": [
                        {
                            x: 0,
                            y: 0,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 4,
                            y: 0,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 2,
                            y: 2,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 6,
                            y: 2,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 0,
                            y: 4,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 4,
                            y: 4,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 2,
                            y: 6,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 6,
                            y: 6,
                            w: 2,
                            h: 2
                        }
                    ],
                    "🮖": [
                        {
                            x: 2,
                            y: 0,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 6,
                            y: 0,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 0,
                            y: 2,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 4,
                            y: 2,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 2,
                            y: 4,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 6,
                            y: 4,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 0,
                            y: 6,
                            w: 2,
                            h: 2
                        },
                        {
                            x: 4,
                            y: 6,
                            w: 2,
                            h: 2
                        }
                    ],
                    "🮗": [
                        {
                            x: 0,
                            y: 2,
                            w: 8,
                            h: 2
                        },
                        {
                            x: 0,
                            y: 6,
                            w: 8,
                            h: 2
                        }
                    ]
                };
                var Lt = {
                    "░": [
                        [
                            1,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0
                        ],
                        [
                            0,
                            0,
                            1,
                            0
                        ],
                        [
                            0,
                            0,
                            0,
                            0
                        ]
                    ],
                    "▒": [
                        [
                            1,
                            0
                        ],
                        [
                            0,
                            0
                        ],
                        [
                            0,
                            1
                        ],
                        [
                            0,
                            0
                        ]
                    ],
                    "▓": [
                        [
                            0,
                            1
                        ],
                        [
                            1,
                            1
                        ],
                        [
                            1,
                            0
                        ],
                        [
                            1,
                            1
                        ]
                    ]
                };
                t47.boxDrawingDefinitions = {
                    "─": (i20 = {}, i20[1] = "M0,.5 L1,.5", i20),
                    "━": (n17 = {}, n17[3] = "M0,.5 L1,.5", n17),
                    "│": (o16 = {}, o16[1] = "M.5,0 L.5,1", o16),
                    "┃": (s18 = {}, s18[3] = "M.5,0 L.5,1", s18),
                    "┌": (a16 = {}, a16[1] = "M0.5,1 L.5,.5 L1,.5", a16),
                    "┏": (c6 = {}, c6[3] = "M0.5,1 L.5,.5 L1,.5", c6),
                    "┐": (l8 = {}, l8[1] = "M0,.5 L.5,.5 L.5,1", l8),
                    "┓": (h7 = {}, h7[3] = "M0,.5 L.5,.5 L.5,1", h7),
                    "└": (u5 = {}, u5[1] = "M.5,0 L.5,.5 L1,.5", u5),
                    "┗": (f2 = {}, f2[3] = "M.5,0 L.5,.5 L1,.5", f2),
                    "┘": (_1 = {}, _1[1] = "M.5,0 L.5,.5 L0,.5", _1),
                    "┛": (d1 = {}, d1[3] = "M.5,0 L.5,.5 L0,.5", d1),
                    "├": (p1 = {}, p1[1] = "M.5,0 L.5,1 M.5,.5 L1,.5", p1),
                    "┣": (v1 = {}, v1[3] = "M.5,0 L.5,1 M.5,.5 L1,.5", v1),
                    "┤": (g1 = {}, g1[1] = "M.5,0 L.5,1 M.5,.5 L0,.5", g1),
                    "┫": (y1 = {}, y1[3] = "M.5,0 L.5,1 M.5,.5 L0,.5", y1),
                    "┬": (m1 = {}, m1[1] = "M0,.5 L1,.5 M.5,.5 L.5,1", m1),
                    "┳": (S1 = {}, S1[3] = "M0,.5 L1,.5 M.5,.5 L.5,1", S1),
                    "┴": (C = {}, C[1] = "M0,.5 L1,.5 M.5,.5 L.5,0", C),
                    "┻": (b = {}, b[3] = "M0,.5 L1,.5 M.5,.5 L.5,0", b),
                    "┼": (w = {}, w[1] = "M0,.5 L1,.5 M.5,0 L.5,1", w),
                    "╋": (L = {}, L[3] = "M0,.5 L1,.5 M.5,0 L.5,1", L),
                    "╴": (E = {}, E[1] = "M.5,.5 L0,.5", E),
                    "╸": (x = {}, x[3] = "M.5,.5 L0,.5", x),
                    "╵": (k = {}, k[1] = "M.5,.5 L.5,0", k),
                    "╹": (M = {}, M[3] = "M.5,.5 L.5,0", M),
                    "╶": (A = {}, A[1] = "M.5,.5 L1,.5", A),
                    "╺": (R = {}, R[3] = "M.5,.5 L1,.5", R),
                    "╷": (O = {}, O[1] = "M.5,.5 L.5,1", O),
                    "╻": (T = {}, T[3] = "M.5,.5 L.5,1", T),
                    "═": (D = {}, D[1] = function(e, t) {
                        return "M0," + (0.5 - t) + " L1," + (0.5 - t) + " M0," + (0.5 + t) + " L1," + (0.5 + t);
                    }, D),
                    "║": (B = {}, B[1] = function(e, t) {
                        return "M" + (0.5 - e) + ",0 L" + (0.5 - e) + ",1 M" + (0.5 + e) + ",0 L" + (0.5 + e) + ",1";
                    }, B),
                    "╒": (P = {}, P[1] = function(e, t) {
                        return "M.5,1 L.5," + (0.5 - t) + " L1," + (0.5 - t) + " M.5," + (0.5 + t) + " L1," + (0.5 + t);
                    }, P),
                    "╓": (I = {}, I[1] = function(e, t) {
                        return "M" + (0.5 - e) + ",1 L" + (0.5 - e) + ",.5 L1,.5 M" + (0.5 + e) + ",.5 L" + (0.5 + e) + ",1";
                    }, I),
                    "╔": (H = {}, H[1] = function(e, t) {
                        return "M1," + (0.5 - t) + " L" + (0.5 - e) + "," + (0.5 - t) + " L" + (0.5 - e) + ",1 M1," + (0.5 + t) + " L" + (0.5 + e) + "," + (0.5 + t) + " L" + (0.5 + e) + ",1";
                    }, H),
                    "╕": (F = {}, F[1] = function(e, t) {
                        return "M0," + (0.5 - t) + " L.5," + (0.5 - t) + " L.5,1 M0," + (0.5 + t) + " L.5," + (0.5 + t);
                    }, F),
                    "╖": (j = {}, j[1] = function(e, t) {
                        return "M" + (0.5 + e) + ",1 L" + (0.5 + e) + ",.5 L0,.5 M" + (0.5 - e) + ",.5 L" + (0.5 - e) + ",1";
                    }, j),
                    "╗": (W = {}, W[1] = function(e, t) {
                        return "M0," + (0.5 + t) + " L" + (0.5 - e) + "," + (0.5 + t) + " L" + (0.5 - e) + ",1 M0," + (0.5 - t) + " L" + (0.5 + e) + "," + (0.5 - t) + " L" + (0.5 + e) + ",1";
                    }, W),
                    "╘": (U = {}, U[1] = function(e, t) {
                        return "M.5,0 L.5," + (0.5 + t) + " L1," + (0.5 + t) + " M.5," + (0.5 - t) + " L1," + (0.5 - t);
                    }, U),
                    "╙": (q = {}, q[1] = function(e, t) {
                        return "M1,.5 L" + (0.5 - e) + ",.5 L" + (0.5 - e) + ",0 M" + (0.5 + e) + ",.5 L" + (0.5 + e) + ",0";
                    }, q),
                    "╚": (N = {}, N[1] = function(e, t) {
                        return "M1," + (0.5 - t) + " L" + (0.5 + e) + "," + (0.5 - t) + " L" + (0.5 + e) + ",0 M1," + (0.5 + t) + " L" + (0.5 - e) + "," + (0.5 + t) + " L" + (0.5 - e) + ",0";
                    }, N),
                    "╛": (z = {}, z[1] = function(e, t) {
                        return "M0," + (0.5 + t) + " L.5," + (0.5 + t) + " L.5,0 M0," + (0.5 - t) + " L.5," + (0.5 - t);
                    }, z),
                    "╜": (K = {}, K[1] = function(e, t) {
                        return "M0,.5 L" + (0.5 + e) + ",.5 L" + (0.5 + e) + ",0 M" + (0.5 - e) + ",.5 L" + (0.5 - e) + ",0";
                    }, K),
                    "╝": (G = {}, G[1] = function(e, t) {
                        return "M0," + (0.5 - t) + " L" + (0.5 - e) + "," + (0.5 - t) + " L" + (0.5 - e) + ",0 M0," + (0.5 + t) + " L" + (0.5 + e) + "," + (0.5 + t) + " L" + (0.5 + e) + ",0";
                    }, G),
                    "╞": (V = {}, V[1] = function(e, t) {
                        return "M.5,0 L.5,1 M.5," + (0.5 - t) + " L1," + (0.5 - t) + " M.5," + (0.5 + t) + " L1," + (0.5 + t);
                    }, V),
                    "╟": (X = {}, X[1] = function(e, t) {
                        return "M" + (0.5 - e) + ",0 L" + (0.5 - e) + ",1 M" + (0.5 + e) + ",0 L" + (0.5 + e) + ",1 M" + (0.5 + e) + ",.5 L1,.5";
                    }, X),
                    "╠": (Y = {}, Y[1] = function(e, t) {
                        return "M" + (0.5 - e) + ",0 L" + (0.5 - e) + ",1 M1," + (0.5 + t) + " L" + (0.5 + e) + "," + (0.5 + t) + " L" + (0.5 + e) + ",1 M1," + (0.5 - t) + " L" + (0.5 + e) + "," + (0.5 - t) + " L" + (0.5 + e) + ",0";
                    }, Y),
                    "╡": (Z = {}, Z[1] = function(e, t) {
                        return "M.5,0 L.5,1 M0," + (0.5 - t) + " L.5," + (0.5 - t) + " M0," + (0.5 + t) + " L.5," + (0.5 + t);
                    }, Z),
                    "╢": (J = {}, J[1] = function(e, t) {
                        return "M0,.5 L" + (0.5 - e) + ",.5 M" + (0.5 - e) + ",0 L" + (0.5 - e) + ",1 M" + (0.5 + e) + ",0 L" + (0.5 + e) + ",1";
                    }, J),
                    "╣": ($ = {}, $[1] = function(e, t) {
                        return "M" + (0.5 + e) + ",0 L" + (0.5 + e) + ",1 M0," + (0.5 + t) + " L" + (0.5 - e) + "," + (0.5 + t) + " L" + (0.5 - e) + ",1 M0," + (0.5 - t) + " L" + (0.5 - e) + "," + (0.5 - t) + " L" + (0.5 - e) + ",0";
                    }, $),
                    "╤": (Q = {}, Q[1] = function(e, t) {
                        return "M0," + (0.5 - t) + " L1," + (0.5 - t) + " M0," + (0.5 + t) + " L1," + (0.5 + t) + " M.5," + (0.5 + t) + " L.5,1";
                    }, Q),
                    "╥": (ee = {}, ee[1] = function(e, t) {
                        return "M0,.5 L1,.5 M" + (0.5 - e) + ",.5 L" + (0.5 - e) + ",1 M" + (0.5 + e) + ",.5 L" + (0.5 + e) + ",1";
                    }, ee),
                    "╦": (te = {}, te[1] = function(e, t) {
                        return "M0," + (0.5 - t) + " L1," + (0.5 - t) + " M0," + (0.5 + t) + " L" + (0.5 - e) + "," + (0.5 + t) + " L" + (0.5 - e) + ",1 M1," + (0.5 + t) + " L" + (0.5 + e) + "," + (0.5 + t) + " L" + (0.5 + e) + ",1";
                    }, te),
                    "╧": (re = {}, re[1] = function(e, t) {
                        return "M.5,0 L.5," + (0.5 - t) + " M0," + (0.5 - t) + " L1," + (0.5 - t) + " M0," + (0.5 + t) + " L1," + (0.5 + t);
                    }, re),
                    "╨": (ie = {}, ie[1] = function(e, t) {
                        return "M0,.5 L1,.5 M" + (0.5 - e) + ",.5 L" + (0.5 - e) + ",0 M" + (0.5 + e) + ",.5 L" + (0.5 + e) + ",0";
                    }, ie),
                    "╩": (ne = {}, ne[1] = function(e, t) {
                        return "M0," + (0.5 + t) + " L1," + (0.5 + t) + " M0," + (0.5 - t) + " L" + (0.5 - e) + "," + (0.5 - t) + " L" + (0.5 - e) + ",0 M1," + (0.5 - t) + " L" + (0.5 + e) + "," + (0.5 - t) + " L" + (0.5 + e) + ",0";
                    }, ne),
                    "╪": (oe = {}, oe[1] = function(e, t) {
                        return "M.5,0 L.5,1 M0," + (0.5 - t) + " L1," + (0.5 - t) + " M0," + (0.5 + t) + " L1," + (0.5 + t);
                    }, oe),
                    "╫": (se = {}, se[1] = function(e, t) {
                        return "M0,.5 L1,.5 M" + (0.5 - e) + ",0 L" + (0.5 - e) + ",1 M" + (0.5 + e) + ",0 L" + (0.5 + e) + ",1";
                    }, se),
                    "╬": (ae = {}, ae[1] = function(e, t) {
                        return "M0," + (0.5 + t) + " L" + (0.5 - e) + "," + (0.5 + t) + " L" + (0.5 - e) + ",1 M1," + (0.5 + t) + " L" + (0.5 + e) + "," + (0.5 + t) + " L" + (0.5 + e) + ",1 M0," + (0.5 - t) + " L" + (0.5 - e) + "," + (0.5 - t) + " L" + (0.5 - e) + ",0 M1," + (0.5 - t) + " L" + (0.5 + e) + "," + (0.5 - t) + " L" + (0.5 + e) + ",0";
                    }, ae),
                    "╱": (ce = {}, ce[1] = "M1,0 L0,1", ce),
                    "╲": (le = {}, le[1] = "M0,0 L1,1", le),
                    "╳": (he = {}, he[1] = "M1,0 L0,1 M0,0 L1,1", he),
                    "╼": (ue = {}, ue[1] = "M.5,.5 L0,.5", ue[3] = "M.5,.5 L1,.5", ue),
                    "╽": (fe = {}, fe[1] = "M.5,.5 L.5,0", fe[3] = "M.5,.5 L.5,1", fe),
                    "╾": (_e = {}, _e[1] = "M.5,.5 L1,.5", _e[3] = "M.5,.5 L0,.5", _e),
                    "╿": (de = {}, de[1] = "M.5,.5 L.5,1", de[3] = "M.5,.5 L.5,0", de),
                    "┍": (pe = {}, pe[1] = "M.5,.5 L.5,1", pe[3] = "M.5,.5 L1,.5", pe),
                    "┎": (ve = {}, ve[1] = "M.5,.5 L1,.5", ve[3] = "M.5,.5 L.5,1", ve),
                    "┑": (ge = {}, ge[1] = "M.5,.5 L.5,1", ge[3] = "M.5,.5 L0,.5", ge),
                    "┒": (ye = {}, ye[1] = "M.5,.5 L0,.5", ye[3] = "M.5,.5 L.5,1", ye),
                    "┕": (me = {}, me[1] = "M.5,.5 L.5,0", me[3] = "M.5,.5 L1,.5", me),
                    "┖": (Se = {}, Se[1] = "M.5,.5 L1,.5", Se[3] = "M.5,.5 L.5,0", Se),
                    "┙": (Ce = {}, Ce[1] = "M.5,.5 L.5,0", Ce[3] = "M.5,.5 L0,.5", Ce),
                    "┚": (be = {}, be[1] = "M.5,.5 L0,.5", be[3] = "M.5,.5 L.5,0", be),
                    "┝": (we = {}, we[1] = "M.5,0 L.5,1", we[3] = "M.5,.5 L1,.5", we),
                    "┞": (Le = {}, Le[1] = "M0.5,1 L.5,.5 L1,.5", Le[3] = "M.5,.5 L.5,0", Le),
                    "┟": (Ee = {}, Ee[1] = "M.5,0 L.5,.5 L1,.5", Ee[3] = "M.5,.5 L.5,1", Ee),
                    "┠": (xe = {}, xe[1] = "M.5,.5 L1,.5", xe[3] = "M.5,0 L.5,1", xe),
                    "┡": (ke = {}, ke[1] = "M.5,.5 L.5,1", ke[3] = "M.5,0 L.5,.5 L1,.5", ke),
                    "┢": (Me = {}, Me[1] = "M.5,.5 L.5,0", Me[3] = "M0.5,1 L.5,.5 L1,.5", Me),
                    "┥": (Ae = {}, Ae[1] = "M.5,0 L.5,1", Ae[3] = "M.5,.5 L0,.5", Ae),
                    "┦": (Re = {}, Re[1] = "M0,.5 L.5,.5 L.5,1", Re[3] = "M.5,.5 L.5,0", Re),
                    "┧": (Oe = {}, Oe[1] = "M.5,0 L.5,.5 L0,.5", Oe[3] = "M.5,.5 L.5,1", Oe),
                    "┨": (Te = {}, Te[1] = "M.5,.5 L0,.5", Te[3] = "M.5,0 L.5,1", Te),
                    "┩": (De = {}, De[1] = "M.5,.5 L.5,1", De[3] = "M.5,0 L.5,.5 L0,.5", De),
                    "┪": (Be = {}, Be[1] = "M.5,.5 L.5,0", Be[3] = "M0,.5 L.5,.5 L.5,1", Be),
                    "┭": (Pe = {}, Pe[1] = "M0.5,1 L.5,.5 L1,.5", Pe[3] = "M.5,.5 L0,.5", Pe),
                    "┮": (Ie = {}, Ie[1] = "M0,.5 L.5,.5 L.5,1", Ie[3] = "M.5,.5 L1,.5", Ie),
                    "┯": (He = {}, He[1] = "M.5,.5 L.5,1", He[3] = "M0,.5 L1,.5", He),
                    "┰": (Fe = {}, Fe[1] = "M0,.5 L1,.5", Fe[3] = "M.5,.5 L.5,1", Fe),
                    "┱": (je = {}, je[1] = "M.5,.5 L1,.5", je[3] = "M0,.5 L.5,.5 L.5,1", je),
                    "┲": (We = {}, We[1] = "M.5,.5 L0,.5", We[3] = "M0.5,1 L.5,.5 L1,.5", We),
                    "┵": (Ue = {}, Ue[1] = "M.5,0 L.5,.5 L1,.5", Ue[3] = "M.5,.5 L0,.5", Ue),
                    "┶": (qe = {}, qe[1] = "M.5,0 L.5,.5 L0,.5", qe[3] = "M.5,.5 L1,.5", qe),
                    "┷": (Ne = {}, Ne[1] = "M.5,.5 L.5,0", Ne[3] = "M0,.5 L1,.5", Ne),
                    "┸": (ze = {}, ze[1] = "M0,.5 L1,.5", ze[3] = "M.5,.5 L.5,0", ze),
                    "┹": (Ke = {}, Ke[1] = "M.5,.5 L1,.5", Ke[3] = "M.5,0 L.5,.5 L0,.5", Ke),
                    "┺": (Ge = {}, Ge[1] = "M.5,.5 L0,.5", Ge[3] = "M.5,0 L.5,.5 L1,.5", Ge),
                    "┽": (Ve = {}, Ve[1] = "M.5,0 L.5,1 M.5,.5 L1,.5", Ve[3] = "M.5,.5 L0,.5", Ve),
                    "┾": (Xe = {}, Xe[1] = "M.5,0 L.5,1 M.5,.5 L0,.5", Xe[3] = "M.5,.5 L1,.5", Xe),
                    "┿": (Ye = {}, Ye[1] = "M.5,0 L.5,1", Ye[3] = "M0,.5 L1,.5", Ye),
                    "╀": (Ze = {}, Ze[1] = "M0,.5 L1,.5 M.5,.5 L.5,1", Ze[3] = "M.5,.5 L.5,0", Ze),
                    "╁": (Je = {}, Je[1] = "M.5,.5 L.5,0 M0,.5 L1,.5", Je[3] = "M.5,.5 L.5,1", Je),
                    "╂": ($e = {}, $e[1] = "M0,.5 L1,.5", $e[3] = "M.5,0 L.5,1", $e),
                    "╃": (Qe = {}, Qe[1] = "M0.5,1 L.5,.5 L1,.5", Qe[3] = "M.5,0 L.5,.5 L0,.5", Qe),
                    "╄": (et = {}, et[1] = "M0,.5 L.5,.5 L.5,1", et[3] = "M.5,0 L.5,.5 L1,.5", et),
                    "╅": (tt = {}, tt[1] = "M.5,0 L.5,.5 L1,.5", tt[3] = "M0,.5 L.5,.5 L.5,1", tt),
                    "╆": (rt = {}, rt[1] = "M.5,0 L.5,.5 L0,.5", rt[3] = "M0.5,1 L.5,.5 L1,.5", rt),
                    "╇": (it = {}, it[1] = "M.5,.5 L.5,1", it[3] = "M.5,.5 L.5,0 M0,.5 L1,.5", it),
                    "╈": (nt = {}, nt[1] = "M.5,.5 L.5,0", nt[3] = "M0,.5 L1,.5 M.5,.5 L.5,1", nt),
                    "╉": (ot = {}, ot[1] = "M.5,.5 L1,.5", ot[3] = "M.5,0 L.5,1 M.5,.5 L0,.5", ot),
                    "╊": (st = {}, st[1] = "M.5,.5 L0,.5", st[3] = "M.5,0 L.5,1 M.5,.5 L1,.5", st),
                    "╌": (at = {}, at[1] = "M.1,.5 L.4,.5 M.6,.5 L.9,.5", at),
                    "╍": (ct = {}, ct[3] = "M.1,.5 L.4,.5 M.6,.5 L.9,.5", ct),
                    "┄": (lt = {}, lt[1] = "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5", lt),
                    "┅": (ht = {}, ht[3] = "M.0667,.5 L.2667,.5 M.4,.5 L.6,.5 M.7333,.5 L.9333,.5", ht),
                    "┈": (ut = {}, ut[1] = "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5", ut),
                    "┉": (ft = {}, ft[3] = "M.05,.5 L.2,.5 M.3,.5 L.45,.5 M.55,.5 L.7,.5 M.8,.5 L.95,.5", ft),
                    "╎": (_t = {}, _t[1] = "M.5,.1 L.5,.4 M.5,.6 L.5,.9", _t),
                    "╏": (dt = {}, dt[3] = "M.5,.1 L.5,.4 M.5,.6 L.5,.9", dt),
                    "┆": (pt = {}, pt[1] = "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333", pt),
                    "┇": (vt = {}, vt[3] = "M.5,.0667 L.5,.2667 M.5,.4 L.5,.6 M.5,.7333 L.5,.9333", vt),
                    "┊": (gt = {}, gt[1] = "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95", gt),
                    "┋": (yt = {}, yt[3] = "M.5,.05 L.5,.2 M.5,.3 L.5,.45 L.5,.55 M.5,.7 L.5,.95", yt),
                    "╭": (mt = {}, mt[1] = "C.5,1,.5,.5,1,.5", mt),
                    "╮": (St = {}, St[1] = "C.5,1,.5,.5,0,.5", St),
                    "╯": (Ct = {}, Ct[1] = "C.5,0,.5,.5,0,.5", Ct),
                    "╰": (bt = {}, bt[1] = "C.5,0,.5,.5,1,.5", bt)
                }, t47.tryDrawCustomChar = function(e66, r30, i21, n18, o17, s19) {
                    var a17 = t47.blockElementDefinitions[r30];
                    if (a17) return function(e, t, r, i, n, o) {
                        for(var s = 0; s < t.length; s++){
                            var a = t[s], c = n / 8, l = o / 8;
                            e.fillRect(r + a.x * c, i + a.y * l, a.w * c, a.h * l);
                        }
                    }(e66, a17, i21, n18, o17, s19), !0;
                    var c7 = Lt[r30];
                    if (c7) return function(e67, t, r, i, n, o) {
                        var s, a = Et.get(t);
                        a || (a = new Map, Et.set(t, a));
                        var c = e67.fillStyle;
                        if ("string" != typeof c) throw new Error('Unexpected fillStyle type "' + c + '"');
                        var l = a.get(c);
                        if (!l) {
                            var h = t[0].length, u = t.length, f = document.createElement("canvas");
                            f.width = h, f.height = u;
                            var _ = (0, wt.throwIfFalsy)(f.getContext("2d")), d = new ImageData(h, u), p = void 0, v = void 0, g = void 0, y = void 0;
                            if (c.startsWith("#")) p = parseInt(c.substr(1, 2), 16), v = parseInt(c.substr(3, 2), 16), g = parseInt(c.substr(5, 2), 16), y = c.length > 7 && parseInt(c.substr(7, 2), 16) || 1;
                            else {
                                if (!c.startsWith("rgba")) throw new Error('Unexpected fillStyle color format "' + c + '" when drawing pattern glyph');
                                p = (s = c.substring(5, c.length - 1).split(",").map(function(e) {
                                    return parseFloat(e);
                                }))[0], v = s[1], g = s[2], y = s[3];
                            }
                            for(var m = 0; m < u; m++)for(var S = 0; S < h; S++)d.data[4 * (m * h + S)] = p, d.data[4 * (m * h + S) + 1] = v, d.data[4 * (m * h + S) + 2] = g, d.data[4 * (m * h + S) + 3] = t[m][S] * (255 * y);
                            _.putImageData(d, 0, 0), l = (0, wt.throwIfFalsy)(e67.createPattern(f, null)), a.set(c, l);
                        }
                        e67.fillStyle = l, e67.fillRect(r, i, n, o);
                    }(e66, c7, i21, n18, o17, s19), !0;
                    var l9 = t47.boxDrawingDefinitions[r30];
                    return !!l9 && (function(e, t, r, i, n, o) {
                        e.strokeStyle = e.fillStyle;
                        for(var s = 0, a = Object.entries(t); s < a.length; s++){
                            var c = a[s], l = c[0], h = c[1];
                            e.beginPath(), e.lineWidth = window.devicePixelRatio * Number.parseInt(l);
                            for(var u = 0, f = ("function" == typeof h ? h(0.15, 0.15 / o * n) : h).split(" "); u < f.length; u++){
                                var _ = f[u], d = _[0], p = kt[d];
                                if (p) {
                                    var v = _.substring(1).split(",");
                                    v[0] && v[1] && p(e, Mt(v, n, o, r, i));
                                } else console.error('Could not find drawing instructions for "' + d + '"');
                            }
                            e.stroke(), e.closePath();
                        }
                    }(e66, l9, i21, n18, o17, s19), !0);
                };
                var Et = new Map;
                function xt(e, t, r) {
                    return void 0 === r && (r = 0), Math.max(Math.min(e, t), r);
                }
                var kt = {
                    C: function(e, t) {
                        return e.bezierCurveTo(t[0], t[1], t[2], t[3], t[4], t[5]);
                    },
                    L: function(e, t) {
                        return e.lineTo(t[0], t[1]);
                    },
                    M: function(e, t) {
                        return e.moveTo(t[0], t[1]);
                    }
                };
                function Mt(e68, t, r, i, n) {
                    var o = e68.map(function(e) {
                        return parseFloat(e) || parseInt(e);
                    });
                    if (o.length < 2) throw new Error("Too few arguments for instruction");
                    for(var s = 0; s < o.length; s += 2)o[s] *= t, 0 !== o[s] && (o[s] = xt(Math.round(o[s] + 0.5) - 0.5, t, 0)), o[s] += i;
                    for(var a = 1; a < o.length; a += 2)o[a] *= r, 0 !== o[a] && (o[a] = xt(Math.round(o[a] + 0.5) - 0.5, r, 0)), o[a] += n;
                    return o;
                }
            },
            3700: (e69, t48)=>{
                Object.defineProperty(t48, "__esModule", {
                    value: !0
                }), t48.GridCache = void 0;
                var r31 = function() {
                    function e70() {
                        this.cache = [];
                    }
                    return e70.prototype.resize = function(e, t) {
                        for(var r = 0; r < e; r++){
                            this.cache.length <= r && this.cache.push([]);
                            for(var i = this.cache[r].length; i < t; i++)this.cache[r].push(void 0);
                            this.cache[r].length = t;
                        }
                        this.cache.length = e;
                    }, e70.prototype.clear = function() {
                        for(var e = 0; e < this.cache.length; e++)for(var t = 0; t < this.cache[e].length; t++)this.cache[e][t] = void 0;
                    }, e70;
                }();
                t48.GridCache = r31;
            },
            5098: function(e71, t49, r32) {
                var i22, n19 = this && this.__extends || (i22 = function(e72, t50) {
                    return i22 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i22(e72, t50);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i22(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o18 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s20 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t49, "__esModule", {
                    value: !0
                }), t49.LinkRenderLayer = void 0;
                var a18 = r32(1546), c8 = r32(8803), l10 = r32(2040), h = r32(2585), u = function(e73) {
                    function t51(t, r, i, n, o, s, a, c) {
                        var l = e73.call(this, t, "link", r, !0, i, n, a, c) || this;
                        return o.onShowLinkUnderline(function(e) {
                            return l._onShowLinkUnderline(e);
                        }), o.onHideLinkUnderline(function(e) {
                            return l._onHideLinkUnderline(e);
                        }), s.onShowLinkUnderline(function(e) {
                            return l._onShowLinkUnderline(e);
                        }), s.onHideLinkUnderline(function(e) {
                            return l._onHideLinkUnderline(e);
                        }), l;
                    }
                    return n19(t51, e73), t51.prototype.resize = function(t) {
                        e73.prototype.resize.call(this, t), this._state = void 0;
                    }, t51.prototype.reset = function() {
                        this._clearCurrentLink();
                    }, t51.prototype._clearCurrentLink = function() {
                        if (this._state) {
                            this._clearCells(this._state.x1, this._state.y1, this._state.cols - this._state.x1, 1);
                            var e = this._state.y2 - this._state.y1 - 1;
                            e > 0 && this._clearCells(0, this._state.y1 + 1, this._state.cols, e), this._clearCells(0, this._state.y2, this._state.x2, 1), this._state = void 0;
                        }
                    }, t51.prototype._onShowLinkUnderline = function(e) {
                        if (e.fg === c8.INVERTED_DEFAULT_COLOR ? this._ctx.fillStyle = this._colors.background.css : e.fg && (0, l10.is256Color)(e.fg) ? this._ctx.fillStyle = this._colors.ansi[e.fg].css : this._ctx.fillStyle = this._colors.foreground.css, e.y1 === e.y2) this._fillBottomLineAtCells(e.x1, e.y1, e.x2 - e.x1);
                        else {
                            this._fillBottomLineAtCells(e.x1, e.y1, e.cols - e.x1);
                            for(var t = e.y1 + 1; t < e.y2; t++)this._fillBottomLineAtCells(0, t, e.cols);
                            this._fillBottomLineAtCells(0, e.y2, e.x2);
                        }
                        this._state = e;
                    }, t51.prototype._onHideLinkUnderline = function(e) {
                        this._clearCurrentLink();
                    }, o18([
                        s20(6, h.IBufferService),
                        s20(7, h.IOptionsService)
                    ], t51);
                }(a18.BaseRenderLayer);
                t49.LinkRenderLayer = u;
            },
            3525: function(e74, t52, r33) {
                var i23, n20 = this && this.__extends || (i23 = function(e75, t53) {
                    return i23 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i23(e75, t53);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i23(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o19 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s21 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t52, "__esModule", {
                    value: !0
                }), t52.Renderer = void 0;
                var a19 = r33(9596), c = r33(4149), l = r33(2512), h = r33(5098), u6 = r33(844), f3 = r33(4725), _2 = r33(2585), d2 = r33(1420), p = r33(8460), v = 1, g = function(e76) {
                    function t54(t, r, i, n, o, s, u, f) {
                        var _ = e76.call(this) || this;
                        _._colors = t, _._screenElement = r, _._bufferService = s, _._charSizeService = u, _._optionsService = f, _._id = v++, _._onRequestRedraw = new p.EventEmitter;
                        var d = _._optionsService.rawOptions.allowTransparency;
                        return _._renderLayers = [
                            o.createInstance(a19.TextRenderLayer, _._screenElement, 0, _._colors, d, _._id),
                            o.createInstance(c.SelectionRenderLayer, _._screenElement, 1, _._colors, _._id),
                            o.createInstance(h.LinkRenderLayer, _._screenElement, 2, _._colors, _._id, i, n),
                            o.createInstance(l.CursorRenderLayer, _._screenElement, 3, _._colors, _._id, _._onRequestRedraw)
                        ], _.dimensions = {
                            scaledCharWidth: 0,
                            scaledCharHeight: 0,
                            scaledCellWidth: 0,
                            scaledCellHeight: 0,
                            scaledCharLeft: 0,
                            scaledCharTop: 0,
                            scaledCanvasWidth: 0,
                            scaledCanvasHeight: 0,
                            canvasWidth: 0,
                            canvasHeight: 0,
                            actualCellWidth: 0,
                            actualCellHeight: 0
                        }, _._devicePixelRatio = window.devicePixelRatio, _._updateDimensions(), _.onOptionsChanged(), _;
                    }
                    return n20(t54, e76), Object.defineProperty(t54.prototype, "onRequestRedraw", {
                        get: function() {
                            return this._onRequestRedraw.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t54.prototype.dispose = function() {
                        for(var t = 0, r = this._renderLayers; t < r.length; t++)r[t].dispose();
                        e76.prototype.dispose.call(this), (0, d2.removeTerminalFromCache)(this._id);
                    }, t54.prototype.onDevicePixelRatioChange = function() {
                        this._devicePixelRatio !== window.devicePixelRatio && (this._devicePixelRatio = window.devicePixelRatio, this.onResize(this._bufferService.cols, this._bufferService.rows));
                    }, t54.prototype.setColors = function(e) {
                        this._colors = e;
                        for(var t = 0, r = this._renderLayers; t < r.length; t++){
                            var i = r[t];
                            i.setColors(this._colors), i.reset();
                        }
                    }, t54.prototype.onResize = function(e, t) {
                        this._updateDimensions();
                        for(var r = 0, i = this._renderLayers; r < i.length; r++)i[r].resize(this.dimensions);
                        this._screenElement.style.width = this.dimensions.canvasWidth + "px", this._screenElement.style.height = this.dimensions.canvasHeight + "px";
                    }, t54.prototype.onCharSizeChanged = function() {
                        this.onResize(this._bufferService.cols, this._bufferService.rows);
                    }, t54.prototype.onBlur = function() {
                        this._runOperation(function(e) {
                            return e.onBlur();
                        });
                    }, t54.prototype.onFocus = function() {
                        this._runOperation(function(e) {
                            return e.onFocus();
                        });
                    }, t54.prototype.onSelectionChanged = function(e, t, r) {
                        void 0 === r && (r = !1), this._runOperation(function(i) {
                            return i.onSelectionChanged(e, t, r);
                        });
                    }, t54.prototype.onCursorMove = function() {
                        this._runOperation(function(e) {
                            return e.onCursorMove();
                        });
                    }, t54.prototype.onOptionsChanged = function() {
                        this._runOperation(function(e) {
                            return e.onOptionsChanged();
                        });
                    }, t54.prototype.clear = function() {
                        this._runOperation(function(e) {
                            return e.reset();
                        });
                    }, t54.prototype._runOperation = function(e) {
                        for(var t = 0, r = this._renderLayers; t < r.length; t++)e(r[t]);
                    }, t54.prototype.renderRows = function(e, t) {
                        for(var r = 0, i = this._renderLayers; r < i.length; r++)i[r].onGridChanged(e, t);
                    }, t54.prototype.clearTextureAtlas = function() {
                        for(var e = 0, t = this._renderLayers; e < t.length; e++)t[e].clearTextureAtlas();
                    }, t54.prototype._updateDimensions = function() {
                        this._charSizeService.hasValidSize && (this.dimensions.scaledCharWidth = Math.floor(this._charSizeService.width * window.devicePixelRatio), this.dimensions.scaledCharHeight = Math.ceil(this._charSizeService.height * window.devicePixelRatio), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._optionsService.rawOptions.lineHeight), this.dimensions.scaledCharTop = 1 === this._optionsService.rawOptions.lineHeight ? 0 : Math.round((this.dimensions.scaledCellHeight - this.dimensions.scaledCharHeight) / 2), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.scaledCharLeft = Math.floor(this._optionsService.rawOptions.letterSpacing / 2), this.dimensions.scaledCanvasHeight = this._bufferService.rows * this.dimensions.scaledCellHeight, this.dimensions.scaledCanvasWidth = this._bufferService.cols * this.dimensions.scaledCellWidth, this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._bufferService.rows, this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._bufferService.cols);
                    }, o19([
                        s21(4, _2.IInstantiationService),
                        s21(5, _2.IBufferService),
                        s21(6, f3.ICharSizeService),
                        s21(7, _2.IOptionsService)
                    ], t54);
                }(u6.Disposable);
                t52.Renderer = g;
            },
            1752: (e77, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.throwIfFalsy = void 0, t.throwIfFalsy = function(e) {
                    if (!e) throw new Error("value must not be falsy");
                    return e;
                };
            },
            4149: function(e78, t55, r34) {
                var i24, n21 = this && this.__extends || (i24 = function(e79, t56) {
                    return i24 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i24(e79, t56);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i24(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o20 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s22 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t55, "__esModule", {
                    value: !0
                }), t55.SelectionRenderLayer = void 0;
                var a20 = r34(1546), c9 = r34(2585), l11 = function(e80) {
                    function t57(t, r, i, n, o, s) {
                        var a = e80.call(this, t, "selection", r, !0, i, n, o, s) || this;
                        return a._clearState(), a;
                    }
                    return n21(t57, e80), t57.prototype._clearState = function() {
                        this._state = {
                            start: void 0,
                            end: void 0,
                            columnSelectMode: void 0,
                            ydisp: void 0
                        };
                    }, t57.prototype.resize = function(t) {
                        e80.prototype.resize.call(this, t), this._clearState();
                    }, t57.prototype.reset = function() {
                        this._state.start && this._state.end && (this._clearState(), this._clearAll());
                    }, t57.prototype.onSelectionChanged = function(e, t, r) {
                        if (this._didStateChange(e, t, r, this._bufferService.buffer.ydisp)) {
                            if (this._clearAll(), e && t) {
                                var i = e[1] - this._bufferService.buffer.ydisp, n = t[1] - this._bufferService.buffer.ydisp, o = Math.max(i, 0), s = Math.min(n, this._bufferService.rows - 1);
                                if (o >= this._bufferService.rows || s < 0) this._state.ydisp = this._bufferService.buffer.ydisp;
                                else {
                                    if (this._ctx.fillStyle = this._colors.selectionTransparent.css, r) {
                                        var a = e[0], c = t[0] - a, l = s - o + 1;
                                        this._fillCells(a, o, c, l);
                                    } else {
                                        a = i === o ? e[0] : 0;
                                        var h = o === n ? t[0] : this._bufferService.cols;
                                        this._fillCells(a, o, h - a, 1);
                                        var u = Math.max(s - o - 1, 0);
                                        if (this._fillCells(0, o + 1, this._bufferService.cols, u), o !== s) {
                                            var f = n === s ? t[0] : this._bufferService.cols;
                                            this._fillCells(0, s, f, 1);
                                        }
                                    }
                                    this._state.start = [
                                        e[0],
                                        e[1]
                                    ], this._state.end = [
                                        t[0],
                                        t[1]
                                    ], this._state.columnSelectMode = r, this._state.ydisp = this._bufferService.buffer.ydisp;
                                }
                            } else this._clearState();
                        }
                    }, t57.prototype._didStateChange = function(e, t, r, i) {
                        return !this._areCoordinatesEqual(e, this._state.start) || !this._areCoordinatesEqual(t, this._state.end) || r !== this._state.columnSelectMode || i !== this._state.ydisp;
                    }, t57.prototype._areCoordinatesEqual = function(e, t) {
                        return !(!e || !t) && e[0] === t[0] && e[1] === t[1];
                    }, o20([
                        s22(4, c9.IBufferService),
                        s22(5, c9.IOptionsService)
                    ], t57);
                }(a20.BaseRenderLayer);
                t55.SelectionRenderLayer = l11;
            },
            9596: function(e81, t58, r35) {
                var i25, n22 = this && this.__extends || (i25 = function(e82, t59) {
                    return i25 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i25(e82, t59);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i25(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o21 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s23 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t58, "__esModule", {
                    value: !0
                }), t58.TextRenderLayer = void 0;
                var a21 = r35(3700), c10 = r35(1546), l12 = r35(3734), h8 = r35(643), u7 = r35(511), f4 = r35(2585), _ = r35(4725), d = r35(4269), p = function(e83) {
                    function t60(t, r, i, n, o, s, c, l) {
                        var h = e83.call(this, t, "text", r, n, i, o, s, c) || this;
                        return h._characterJoinerService = l, h._characterWidth = 0, h._characterFont = "", h._characterOverlapCache = {}, h._workCell = new u7.CellData, h._state = new a21.GridCache, h;
                    }
                    return n22(t60, e83), t60.prototype.resize = function(t) {
                        e83.prototype.resize.call(this, t);
                        var r = this._getFont(!1, !1);
                        this._characterWidth === t.scaledCharWidth && this._characterFont === r || (this._characterWidth = t.scaledCharWidth, this._characterFont = r, this._characterOverlapCache = {}), this._state.clear(), this._state.resize(this._bufferService.cols, this._bufferService.rows);
                    }, t60.prototype.reset = function() {
                        this._state.clear(), this._clearAll();
                    }, t60.prototype._forEachCell = function(e, t, r) {
                        for(var i = e; i <= t; i++)for(var n = i + this._bufferService.buffer.ydisp, o = this._bufferService.buffer.lines.get(n), s = this._characterJoinerService.getJoinedCharacters(n), a = 0; a < this._bufferService.cols; a++){
                            o.loadCell(a, this._workCell);
                            var c = this._workCell, l = !1, u = a;
                            if (0 !== c.getWidth()) {
                                if (s.length > 0 && a === s[0][0]) {
                                    l = !0;
                                    var f = s.shift();
                                    c = new d.JoinedCellData(this._workCell, o.translateToString(!0, f[0], f[1]), f[1] - f[0]), u = f[1] - 1;
                                }
                                !l && this._isOverlapping(c) && u < o.length - 1 && o.getCodePoint(u + 1) === h8.NULL_CELL_CODE && (c.content &= -12582913, c.content |= 8388608), r(c, a, i), a = u;
                            }
                        }
                    }, t60.prototype._drawBackground = function(e84, t61) {
                        var r = this, i = this._ctx, n = this._bufferService.cols, o = 0, s = 0, a = null;
                        i.save(), this._forEachCell(e84, t61, function(e, t, c) {
                            var h = null;
                            e.isInverse() ? h = e.isFgDefault() ? r._colors.foreground.css : e.isFgRGB() ? "rgb(" + l12.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")" : r._colors.ansi[e.getFgColor()].css : e.isBgRGB() ? h = "rgb(" + l12.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")" : e.isBgPalette() && (h = r._colors.ansi[e.getBgColor()].css), null === a && (o = t, s = c), c !== s ? (i.fillStyle = a || "", r._fillCells(o, s, n - o, 1), o = t, s = c) : a !== h && (i.fillStyle = a || "", r._fillCells(o, s, t - o, 1), o = t, s = c), a = h;
                        }), null !== a && (i.fillStyle = a, this._fillCells(o, s, n - o, 1)), i.restore();
                    }, t60.prototype._drawForeground = function(e85, t62) {
                        var r = this;
                        this._forEachCell(e85, t62, function(e, t, i) {
                            if (!e.isInvisible() && (r._drawChars(e, t, i), e.isUnderline() || e.isStrikethrough())) {
                                if (r._ctx.save(), e.isInverse()) {
                                    if (e.isBgDefault()) r._ctx.fillStyle = r._colors.background.css;
                                    else if (e.isBgRGB()) r._ctx.fillStyle = "rgb(" + l12.AttributeData.toColorRGB(e.getBgColor()).join(",") + ")";
                                    else {
                                        var n = e.getBgColor();
                                        r._optionsService.rawOptions.drawBoldTextInBrightColors && e.isBold() && n < 8 && (n += 8), r._ctx.fillStyle = r._colors.ansi[n].css;
                                    }
                                } else if (e.isFgDefault()) r._ctx.fillStyle = r._colors.foreground.css;
                                else if (e.isFgRGB()) r._ctx.fillStyle = "rgb(" + l12.AttributeData.toColorRGB(e.getFgColor()).join(",") + ")";
                                else {
                                    var o = e.getFgColor();
                                    r._optionsService.rawOptions.drawBoldTextInBrightColors && e.isBold() && o < 8 && (o += 8), r._ctx.fillStyle = r._colors.ansi[o].css;
                                }
                                e.isStrikethrough() && r._fillMiddleLineAtCells(t, i, e.getWidth()), e.isUnderline() && r._fillBottomLineAtCells(t, i, e.getWidth()), r._ctx.restore();
                            }
                        });
                    }, t60.prototype.onGridChanged = function(e, t) {
                        0 !== this._state.cache.length && (this._charAtlas && this._charAtlas.beginFrame(), this._clearCells(0, e, this._bufferService.cols, t - e + 1), this._drawBackground(e, t), this._drawForeground(e, t));
                    }, t60.prototype.onOptionsChanged = function() {
                        this._setTransparency(this._optionsService.rawOptions.allowTransparency);
                    }, t60.prototype._isOverlapping = function(e) {
                        if (1 !== e.getWidth()) return !1;
                        if (e.getCode() < 256) return !1;
                        var t = e.getChars();
                        if (this._characterOverlapCache.hasOwnProperty(t)) return this._characterOverlapCache[t];
                        this._ctx.save(), this._ctx.font = this._characterFont;
                        var r = Math.floor(this._ctx.measureText(t).width) > this._characterWidth;
                        return this._ctx.restore(), this._characterOverlapCache[t] = r, r;
                    }, o21([
                        s23(5, f4.IBufferService),
                        s23(6, f4.IOptionsService),
                        s23(7, _.ICharacterJoinerService)
                    ], t60);
                }(c10.BaseRenderLayer);
                t58.TextRenderLayer = p;
            },
            9616: (e86, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BaseCharAtlas = void 0;
                var r = function() {
                    function e() {
                        this._didWarmUp = !1;
                    }
                    return e.prototype.dispose = function() {}, e.prototype.warmUp = function() {
                        this._didWarmUp || (this._doWarmUp(), this._didWarmUp = !0);
                    }, e.prototype._doWarmUp = function() {}, e.prototype.clear = function() {}, e.prototype.beginFrame = function() {}, e;
                }();
                t.BaseCharAtlas = r;
            },
            1420: (e87, t63, r36)=>{
                Object.defineProperty(t63, "__esModule", {
                    value: !0
                }), t63.removeTerminalFromCache = t63.acquireCharAtlas = void 0;
                var i = r36(2040), n = r36(1906), o = [];
                t63.acquireCharAtlas = function(e, t, r, s, a) {
                    for(var c = (0, i.generateConfig)(s, a, e, r), l = 0; l < o.length; l++){
                        var h = (u = o[l]).ownedBy.indexOf(t);
                        if (h >= 0) {
                            if ((0, i.configEquals)(u.config, c)) return u.atlas;
                            1 === u.ownedBy.length ? (u.atlas.dispose(), o.splice(l, 1)) : u.ownedBy.splice(h, 1);
                            break;
                        }
                    }
                    for(l = 0; l < o.length; l++){
                        var u = o[l];
                        if ((0, i.configEquals)(u.config, c)) return u.ownedBy.push(t), u.atlas;
                    }
                    var f = {
                        atlas: new n.DynamicCharAtlas(document, c),
                        config: c,
                        ownedBy: [
                            t
                        ]
                    };
                    return o.push(f), f.atlas;
                }, t63.removeTerminalFromCache = function(e) {
                    for(var t = 0; t < o.length; t++){
                        var r = o[t].ownedBy.indexOf(e);
                        if (-1 !== r) {
                            1 === o[t].ownedBy.length ? (o[t].atlas.dispose(), o.splice(t, 1)) : o[t].ownedBy.splice(r, 1);
                            break;
                        }
                    }
                };
            },
            2040: function(e88, t64, r37) {
                var i26 = this && this.__spreadArray || function(e, t, r) {
                    if (r || 2 === arguments.length) for(var i, n = 0, o = t.length; n < o; n++)!i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
                    return e.concat(i || Array.prototype.slice.call(t));
                };
                Object.defineProperty(t64, "__esModule", {
                    value: !0
                }), t64.is256Color = t64.configEquals = t64.generateConfig = void 0;
                var n23 = r37(643);
                t64.generateConfig = function(e, t, r, n) {
                    var o = {
                        foreground: n.foreground,
                        background: n.background,
                        cursor: void 0,
                        cursorAccent: void 0,
                        selection: void 0,
                        ansi: i26([], n.ansi, !0)
                    };
                    return {
                        devicePixelRatio: window.devicePixelRatio,
                        scaledCharWidth: e,
                        scaledCharHeight: t,
                        fontFamily: r.fontFamily,
                        fontSize: r.fontSize,
                        fontWeight: r.fontWeight,
                        fontWeightBold: r.fontWeightBold,
                        allowTransparency: r.allowTransparency,
                        colors: o
                    };
                }, t64.configEquals = function(e, t) {
                    for(var r = 0; r < e.colors.ansi.length; r++)if (e.colors.ansi[r].rgba !== t.colors.ansi[r].rgba) return !1;
                    return e.devicePixelRatio === t.devicePixelRatio && e.fontFamily === t.fontFamily && e.fontSize === t.fontSize && e.fontWeight === t.fontWeight && e.fontWeightBold === t.fontWeightBold && e.allowTransparency === t.allowTransparency && e.scaledCharWidth === t.scaledCharWidth && e.scaledCharHeight === t.scaledCharHeight && e.colors.foreground === t.colors.foreground && e.colors.background === t.colors.background;
                }, t64.is256Color = function(e) {
                    return e < n23.DEFAULT_COLOR;
                };
            },
            8803: (e, t, r)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CHAR_ATLAS_CELL_SPACING = t.TEXT_BASELINE = t.DIM_OPACITY = t.INVERTED_DEFAULT_COLOR = void 0;
                var i = r(6114);
                t.INVERTED_DEFAULT_COLOR = 257, t.DIM_OPACITY = 0.5, t.TEXT_BASELINE = i.isFirefox || i.isLegacyEdge ? "bottom" : "ideographic", t.CHAR_ATLAS_CELL_SPACING = 1;
            },
            1906: function(e89, t65, r38) {
                var i27, n24 = this && this.__extends || (i27 = function(e90, t66) {
                    return i27 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i27(e90, t66);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i27(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t65, "__esModule", {
                    value: !0
                }), t65.NoneCharAtlas = t65.DynamicCharAtlas = t65.getGlyphCacheKey = void 0;
                var o22 = r38(8803), s24 = r38(9616), a22 = r38(5680), c11 = r38(7001), l13 = r38(6114), h9 = r38(1752), u8 = r38(4774), f = 1024, _ = 1024, d = {
                    css: "rgba(0, 0, 0, 0)",
                    rgba: 0
                };
                function p(e) {
                    return e.code << 21 | e.bg << 12 | e.fg << 3 | (e.bold ? 0 : 4) + (e.dim ? 0 : 2) + (e.italic ? 0 : 1);
                }
                t65.getGlyphCacheKey = p;
                var v = function(e91) {
                    function t67(t, r) {
                        var i = e91.call(this) || this;
                        i._config = r, i._drawToCacheCount = 0, i._glyphsWaitingOnBitmap = [], i._bitmapCommitTimeout = null, i._bitmap = null, i._cacheCanvas = t.createElement("canvas"), i._cacheCanvas.width = f, i._cacheCanvas.height = _, i._cacheCtx = (0, h9.throwIfFalsy)(i._cacheCanvas.getContext("2d", {
                            alpha: !0
                        }));
                        var n = t.createElement("canvas");
                        n.width = i._config.scaledCharWidth, n.height = i._config.scaledCharHeight, i._tmpCtx = (0, h9.throwIfFalsy)(n.getContext("2d", {
                            alpha: i._config.allowTransparency
                        })), i._width = Math.floor(f / i._config.scaledCharWidth), i._height = Math.floor(_ / i._config.scaledCharHeight);
                        var o = i._width * i._height;
                        return i._cacheMap = new c11.LRUMap(o), i._cacheMap.prealloc(o), i;
                    }
                    return n24(t67, e91), t67.prototype.dispose = function() {
                        null !== this._bitmapCommitTimeout && (window.clearTimeout(this._bitmapCommitTimeout), this._bitmapCommitTimeout = null);
                    }, t67.prototype.beginFrame = function() {
                        this._drawToCacheCount = 0;
                    }, t67.prototype.clear = function() {
                        if (this._cacheMap.size > 0) {
                            var e = this._width * this._height;
                            this._cacheMap = new c11.LRUMap(e), this._cacheMap.prealloc(e);
                        }
                        this._cacheCtx.clearRect(0, 0, f, _), this._tmpCtx.clearRect(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight);
                    }, t67.prototype.draw = function(e, t, r, i) {
                        if (32 === t.code) return !0;
                        if (!this._canCache(t)) return !1;
                        var n = p(t), o = this._cacheMap.get(n);
                        if (null != o) return this._drawFromCache(e, o, r, i), !0;
                        if (this._drawToCacheCount < 100) {
                            var s;
                            s = this._cacheMap.size < this._cacheMap.capacity ? this._cacheMap.size : this._cacheMap.peek().index;
                            var a = this._drawToCache(t, s);
                            return this._cacheMap.set(n, a), this._drawFromCache(e, a, r, i), !0;
                        }
                        return !1;
                    }, t67.prototype._canCache = function(e) {
                        return e.code < 256;
                    }, t67.prototype._toCoordinateX = function(e) {
                        return e % this._width * this._config.scaledCharWidth;
                    }, t67.prototype._toCoordinateY = function(e) {
                        return Math.floor(e / this._width) * this._config.scaledCharHeight;
                    }, t67.prototype._drawFromCache = function(e, t, r, i) {
                        if (!t.isEmpty) {
                            var n = this._toCoordinateX(t.index), o = this._toCoordinateY(t.index);
                            e.drawImage(t.inBitmap ? this._bitmap : this._cacheCanvas, n, o, this._config.scaledCharWidth, this._config.scaledCharHeight, r, i, this._config.scaledCharWidth, this._config.scaledCharHeight);
                        }
                    }, t67.prototype._getColorFromAnsiIndex = function(e) {
                        return e < this._config.colors.ansi.length ? this._config.colors.ansi[e] : a22.DEFAULT_ANSI_COLORS[e];
                    }, t67.prototype._getBackgroundColor = function(e) {
                        return this._config.allowTransparency ? d : e.bg === o22.INVERTED_DEFAULT_COLOR ? this._config.colors.foreground : e.bg < 256 ? this._getColorFromAnsiIndex(e.bg) : this._config.colors.background;
                    }, t67.prototype._getForegroundColor = function(e) {
                        return e.fg === o22.INVERTED_DEFAULT_COLOR ? u8.color.opaque(this._config.colors.background) : e.fg < 256 ? this._getColorFromAnsiIndex(e.fg) : this._config.colors.foreground;
                    }, t67.prototype._drawToCache = function(e, t) {
                        this._drawToCacheCount++, this._tmpCtx.save();
                        var r = this._getBackgroundColor(e);
                        this._tmpCtx.globalCompositeOperation = "copy", this._tmpCtx.fillStyle = r.css, this._tmpCtx.fillRect(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), this._tmpCtx.globalCompositeOperation = "source-over";
                        var i = e.bold ? this._config.fontWeightBold : this._config.fontWeight, n = e.italic ? "italic" : "";
                        this._tmpCtx.font = n + " " + i + " " + this._config.fontSize * this._config.devicePixelRatio + "px " + this._config.fontFamily, this._tmpCtx.textBaseline = o22.TEXT_BASELINE, this._tmpCtx.fillStyle = this._getForegroundColor(e).css, e.dim && (this._tmpCtx.globalAlpha = o22.DIM_OPACITY), this._tmpCtx.fillText(e.chars, 0, this._config.scaledCharHeight);
                        var s = this._tmpCtx.getImageData(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), a = !1;
                        if (this._config.allowTransparency || (a = y(s, r)), a && "_" === e.chars && !this._config.allowTransparency) for(var c = 1; c <= 5 && (this._tmpCtx.fillText(e.chars, 0, this._config.scaledCharHeight - c), a = y(s = this._tmpCtx.getImageData(0, 0, this._config.scaledCharWidth, this._config.scaledCharHeight), r)); c++);
                        this._tmpCtx.restore();
                        var l = this._toCoordinateX(t), h = this._toCoordinateY(t);
                        this._cacheCtx.putImageData(s, l, h);
                        var u = {
                            index: t,
                            isEmpty: a,
                            inBitmap: !1
                        };
                        return this._addGlyphToBitmap(u), u;
                    }, t67.prototype._addGlyphToBitmap = function(e) {
                        var t = this;
                        !("createImageBitmap" in window) || l13.isFirefox || l13.isSafari || (this._glyphsWaitingOnBitmap.push(e), null === this._bitmapCommitTimeout && (this._bitmapCommitTimeout = window.setTimeout(function() {
                            return t._generateBitmap();
                        }, 100)));
                    }, t67.prototype._generateBitmap = function() {
                        var e = this, t = this._glyphsWaitingOnBitmap;
                        this._glyphsWaitingOnBitmap = [], window.createImageBitmap(this._cacheCanvas).then(function(r) {
                            e._bitmap = r;
                            for(var i = 0; i < t.length; i++)t[i].inBitmap = !0;
                        }), this._bitmapCommitTimeout = null;
                    }, t67;
                }(s24.BaseCharAtlas);
                t65.DynamicCharAtlas = v;
                var g = function(e) {
                    function t(t, r) {
                        return e.call(this) || this;
                    }
                    return n24(t, e), t.prototype.draw = function(e, t, r, i) {
                        return !1;
                    }, t;
                }(s24.BaseCharAtlas);
                function y(e, t) {
                    for(var r = !0, i = t.rgba >>> 24, n = t.rgba >>> 16 & 255, o = t.rgba >>> 8 & 255, s = 0; s < e.data.length; s += 4)e.data[s] === i && e.data[s + 1] === n && e.data[s + 2] === o ? e.data[s + 3] = 0 : r = !1;
                    return r;
                }
                t65.NoneCharAtlas = g;
            },
            7001: (e92, t68)=>{
                Object.defineProperty(t68, "__esModule", {
                    value: !0
                }), t68.LRUMap = void 0;
                var r39 = function() {
                    function e93(e) {
                        this.capacity = e, this._map = {}, this._head = null, this._tail = null, this._nodePool = [], this.size = 0;
                    }
                    return e93.prototype._unlinkNode = function(e) {
                        var t = e.prev, r = e.next;
                        e === this._head && (this._head = r), e === this._tail && (this._tail = t), null !== t && (t.next = r), null !== r && (r.prev = t);
                    }, e93.prototype._appendNode = function(e) {
                        var t = this._tail;
                        null !== t && (t.next = e), e.prev = t, e.next = null, this._tail = e, null === this._head && (this._head = e);
                    }, e93.prototype.prealloc = function(e) {
                        for(var t = this._nodePool, r = 0; r < e; r++)t.push({
                            prev: null,
                            next: null,
                            key: null,
                            value: null
                        });
                    }, e93.prototype.get = function(e) {
                        var t = this._map[e];
                        return void 0 !== t ? (this._unlinkNode(t), this._appendNode(t), t.value) : null;
                    }, e93.prototype.peekValue = function(e) {
                        var t = this._map[e];
                        return void 0 !== t ? t.value : null;
                    }, e93.prototype.peek = function() {
                        var e = this._head;
                        return null === e ? null : e.value;
                    }, e93.prototype.set = function(e, t) {
                        var r = this._map[e];
                        if (void 0 !== r) r = this._map[e], this._unlinkNode(r), r.value = t;
                        else if (this.size >= this.capacity) r = this._head, this._unlinkNode(r), delete this._map[r.key], r.key = e, r.value = t, this._map[e] = r;
                        else {
                            var i = this._nodePool;
                            i.length > 0 ? ((r = i.pop()).key = e, r.value = t) : r = {
                                prev: null,
                                next: null,
                                key: e,
                                value: t
                            }, this._map[e] = r, this.size++;
                        }
                        this._appendNode(r);
                    }, e93;
                }();
                t68.LRUMap = r39;
            },
            1296: function(e94, t69, r40) {
                var i28, n25 = this && this.__extends || (i28 = function(e95, t70) {
                    return i28 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i28(e95, t70);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i28(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o23 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s25 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t69, "__esModule", {
                    value: !0
                }), t69.DomRenderer = void 0;
                var a23 = r40(3787), c12 = r40(8803), l14 = r40(844), h10 = r40(4725), u9 = r40(2585), f5 = r40(8460), _ = r40(4774), d = r40(9631), p = "xterm-dom-renderer-owner-", v = "xterm-fg-", g = "xterm-bg-", y = "xterm-focus", m = 1, S = function(e96) {
                    function t71(t, r, i, n, o, s, c, l, h, u) {
                        var f = e96.call(this) || this;
                        return f._colors = t, f._element = r, f._screenElement = i, f._viewportElement = n, f._linkifier = o, f._linkifier2 = s, f._charSizeService = l, f._optionsService = h, f._bufferService = u, f._terminalClass = m++, f._rowElements = [], f._rowContainer = document.createElement("div"), f._rowContainer.classList.add("xterm-rows"), f._rowContainer.style.lineHeight = "normal", f._rowContainer.setAttribute("aria-hidden", "true"), f._refreshRowElements(f._bufferService.cols, f._bufferService.rows), f._selectionContainer = document.createElement("div"), f._selectionContainer.classList.add("xterm-selection"), f._selectionContainer.setAttribute("aria-hidden", "true"), f.dimensions = {
                            scaledCharWidth: 0,
                            scaledCharHeight: 0,
                            scaledCellWidth: 0,
                            scaledCellHeight: 0,
                            scaledCharLeft: 0,
                            scaledCharTop: 0,
                            scaledCanvasWidth: 0,
                            scaledCanvasHeight: 0,
                            canvasWidth: 0,
                            canvasHeight: 0,
                            actualCellWidth: 0,
                            actualCellHeight: 0
                        }, f._updateDimensions(), f._injectCss(), f._rowFactory = c.createInstance(a23.DomRendererRowFactory, document, f._colors), f._element.classList.add(p + f._terminalClass), f._screenElement.appendChild(f._rowContainer), f._screenElement.appendChild(f._selectionContainer), f._linkifier.onShowLinkUnderline(function(e) {
                            return f._onLinkHover(e);
                        }), f._linkifier.onHideLinkUnderline(function(e) {
                            return f._onLinkLeave(e);
                        }), f._linkifier2.onShowLinkUnderline(function(e) {
                            return f._onLinkHover(e);
                        }), f._linkifier2.onHideLinkUnderline(function(e) {
                            return f._onLinkLeave(e);
                        }), f;
                    }
                    return n25(t71, e96), Object.defineProperty(t71.prototype, "onRequestRedraw", {
                        get: function() {
                            return (new f5.EventEmitter).event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t71.prototype.dispose = function() {
                        this._element.classList.remove(p + this._terminalClass), (0, d.removeElementFromParent)(this._rowContainer, this._selectionContainer, this._themeStyleElement, this._dimensionsStyleElement), e96.prototype.dispose.call(this);
                    }, t71.prototype._updateDimensions = function() {
                        this.dimensions.scaledCharWidth = this._charSizeService.width * window.devicePixelRatio, this.dimensions.scaledCharHeight = Math.ceil(this._charSizeService.height * window.devicePixelRatio), this.dimensions.scaledCellWidth = this.dimensions.scaledCharWidth + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.scaledCellHeight = Math.floor(this.dimensions.scaledCharHeight * this._optionsService.rawOptions.lineHeight), this.dimensions.scaledCharLeft = 0, this.dimensions.scaledCharTop = 0, this.dimensions.scaledCanvasWidth = this.dimensions.scaledCellWidth * this._bufferService.cols, this.dimensions.scaledCanvasHeight = this.dimensions.scaledCellHeight * this._bufferService.rows, this.dimensions.canvasWidth = Math.round(this.dimensions.scaledCanvasWidth / window.devicePixelRatio), this.dimensions.canvasHeight = Math.round(this.dimensions.scaledCanvasHeight / window.devicePixelRatio), this.dimensions.actualCellWidth = this.dimensions.canvasWidth / this._bufferService.cols, this.dimensions.actualCellHeight = this.dimensions.canvasHeight / this._bufferService.rows;
                        for(var e = 0, t = this._rowElements; e < t.length; e++){
                            var r = t[e];
                            r.style.width = this.dimensions.canvasWidth + "px", r.style.height = this.dimensions.actualCellHeight + "px", r.style.lineHeight = this.dimensions.actualCellHeight + "px", r.style.overflow = "hidden";
                        }
                        this._dimensionsStyleElement || (this._dimensionsStyleElement = document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
                        var i = this._terminalSelector + " .xterm-rows span { display: inline-block; height: 100%; vertical-align: top; width: " + this.dimensions.actualCellWidth + "px}";
                        this._dimensionsStyleElement.textContent = i, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = this.dimensions.canvasWidth + "px", this._screenElement.style.height = this.dimensions.canvasHeight + "px";
                    }, t71.prototype.setColors = function(e) {
                        this._colors = e, this._injectCss();
                    }, t71.prototype._injectCss = function() {
                        var e = this;
                        this._themeStyleElement || (this._themeStyleElement = document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
                        var t = this._terminalSelector + " .xterm-rows { color: " + this._colors.foreground.css + "; font-family: " + this._optionsService.rawOptions.fontFamily + "; font-size: " + this._optionsService.rawOptions.fontSize + "px;}";
                        t += this._terminalSelector + " span:not(." + a23.BOLD_CLASS + ") { font-weight: " + this._optionsService.rawOptions.fontWeight + ";}" + this._terminalSelector + " span." + a23.BOLD_CLASS + " { font-weight: " + this._optionsService.rawOptions.fontWeightBold + ";}" + this._terminalSelector + " span." + a23.ITALIC_CLASS + " { font-style: italic;}", t += "@keyframes blink_box_shadow_" + this._terminalClass + " { 50% {  box-shadow: none; }}", t += "@keyframes blink_block_" + this._terminalClass + " { 0% {  background-color: " + this._colors.cursor.css + ";  color: " + this._colors.cursorAccent.css + "; } 50% {  background-color: " + this._colors.cursorAccent.css + ";  color: " + this._colors.cursor.css + "; }}", t += this._terminalSelector + " .xterm-rows:not(.xterm-focus) ." + a23.CURSOR_CLASS + "." + a23.CURSOR_STYLE_BLOCK_CLASS + " { outline: 1px solid " + this._colors.cursor.css + "; outline-offset: -1px;}" + this._terminalSelector + " .xterm-rows.xterm-focus ." + a23.CURSOR_CLASS + "." + a23.CURSOR_BLINK_CLASS + ":not(." + a23.CURSOR_STYLE_BLOCK_CLASS + ") { animation: blink_box_shadow_" + this._terminalClass + " 1s step-end infinite;}" + this._terminalSelector + " .xterm-rows.xterm-focus ." + a23.CURSOR_CLASS + "." + a23.CURSOR_BLINK_CLASS + "." + a23.CURSOR_STYLE_BLOCK_CLASS + " { animation: blink_block_" + this._terminalClass + " 1s step-end infinite;}" + this._terminalSelector + " .xterm-rows.xterm-focus ." + a23.CURSOR_CLASS + "." + a23.CURSOR_STYLE_BLOCK_CLASS + " { background-color: " + this._colors.cursor.css + "; color: " + this._colors.cursorAccent.css + ";}" + this._terminalSelector + " .xterm-rows ." + a23.CURSOR_CLASS + "." + a23.CURSOR_STYLE_BAR_CLASS + " { box-shadow: " + this._optionsService.rawOptions.cursorWidth + "px 0 0 " + this._colors.cursor.css + " inset;}" + this._terminalSelector + " .xterm-rows ." + a23.CURSOR_CLASS + "." + a23.CURSOR_STYLE_UNDERLINE_CLASS + " { box-shadow: 0 -1px 0 " + this._colors.cursor.css + " inset;}", t += this._terminalSelector + " .xterm-selection { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}" + this._terminalSelector + " .xterm-selection div { position: absolute; background-color: " + this._colors.selectionTransparent.css + ";}", this._colors.ansi.forEach(function(r, i) {
                            t += e._terminalSelector + " ." + v + i + " { color: " + r.css + "; }" + e._terminalSelector + " ." + g + i + " { background-color: " + r.css + "; }";
                        }), t += this._terminalSelector + " ." + v + c12.INVERTED_DEFAULT_COLOR + " { color: " + _.color.opaque(this._colors.background).css + "; }" + this._terminalSelector + " ." + g + c12.INVERTED_DEFAULT_COLOR + " { background-color: " + this._colors.foreground.css + "; }", this._themeStyleElement.textContent = t;
                    }, t71.prototype.onDevicePixelRatioChange = function() {
                        this._updateDimensions();
                    }, t71.prototype._refreshRowElements = function(e, t) {
                        for(var r = this._rowElements.length; r <= t; r++){
                            var i = document.createElement("div");
                            this._rowContainer.appendChild(i), this._rowElements.push(i);
                        }
                        for(; this._rowElements.length > t;)this._rowContainer.removeChild(this._rowElements.pop());
                    }, t71.prototype.onResize = function(e, t) {
                        this._refreshRowElements(e, t), this._updateDimensions();
                    }, t71.prototype.onCharSizeChanged = function() {
                        this._updateDimensions();
                    }, t71.prototype.onBlur = function() {
                        this._rowContainer.classList.remove(y);
                    }, t71.prototype.onFocus = function() {
                        this._rowContainer.classList.add(y);
                    }, t71.prototype.onSelectionChanged = function(e, t, r) {
                        for(; this._selectionContainer.children.length;)this._selectionContainer.removeChild(this._selectionContainer.children[0]);
                        if (e && t) {
                            var i = e[1] - this._bufferService.buffer.ydisp, n = t[1] - this._bufferService.buffer.ydisp, o = Math.max(i, 0), s = Math.min(n, this._bufferService.rows - 1);
                            if (!(o >= this._bufferService.rows || s < 0)) {
                                var a = document.createDocumentFragment();
                                if (r) a.appendChild(this._createSelectionElement(o, e[0], t[0], s - o + 1));
                                else {
                                    var c = i === o ? e[0] : 0, l = o === n ? t[0] : this._bufferService.cols;
                                    a.appendChild(this._createSelectionElement(o, c, l));
                                    var h = s - o - 1;
                                    if (a.appendChild(this._createSelectionElement(o + 1, 0, this._bufferService.cols, h)), o !== s) {
                                        var u = n === s ? t[0] : this._bufferService.cols;
                                        a.appendChild(this._createSelectionElement(s, 0, u));
                                    }
                                }
                                this._selectionContainer.appendChild(a);
                            }
                        }
                    }, t71.prototype._createSelectionElement = function(e, t, r, i) {
                        void 0 === i && (i = 1);
                        var n = document.createElement("div");
                        return n.style.height = i * this.dimensions.actualCellHeight + "px", n.style.top = e * this.dimensions.actualCellHeight + "px", n.style.left = t * this.dimensions.actualCellWidth + "px", n.style.width = this.dimensions.actualCellWidth * (r - t) + "px", n;
                    }, t71.prototype.onCursorMove = function() {}, t71.prototype.onOptionsChanged = function() {
                        this._updateDimensions(), this._injectCss();
                    }, t71.prototype.clear = function() {
                        for(var e = 0, t = this._rowElements; e < t.length; e++)t[e].innerText = "";
                    }, t71.prototype.renderRows = function(e, t) {
                        for(var r = this._bufferService.buffer.ybase + this._bufferService.buffer.y, i = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), n = this._optionsService.rawOptions.cursorBlink, o = e; o <= t; o++){
                            var s = this._rowElements[o];
                            s.innerText = "";
                            var a = o + this._bufferService.buffer.ydisp, c = this._bufferService.buffer.lines.get(a), l = this._optionsService.rawOptions.cursorStyle;
                            s.appendChild(this._rowFactory.createRow(c, a, a === r, l, i, n, this.dimensions.actualCellWidth, this._bufferService.cols));
                        }
                    }, Object.defineProperty(t71.prototype, "_terminalSelector", {
                        get: function() {
                            return "." + p + this._terminalClass;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t71.prototype._onLinkHover = function(e) {
                        this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !0);
                    }, t71.prototype._onLinkLeave = function(e) {
                        this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, !1);
                    }, t71.prototype._setCellUnderline = function(e, t, r, i, n, o) {
                        for(; e !== t || r !== i;){
                            var s = this._rowElements[r];
                            if (!s) return;
                            var a = s.children[e];
                            a && (a.style.textDecoration = o ? "underline" : "none"), ++e >= n && (e = 0, r++);
                        }
                    }, o23([
                        s25(6, u9.IInstantiationService),
                        s25(7, h10.ICharSizeService),
                        s25(8, u9.IOptionsService),
                        s25(9, u9.IBufferService)
                    ], t71);
                }(l14.Disposable);
                t69.DomRenderer = S;
            },
            3787: function(e97, t72, r41) {
                var i29 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n26 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t72, "__esModule", {
                    value: !0
                }), t72.DomRendererRowFactory = t72.CURSOR_STYLE_UNDERLINE_CLASS = t72.CURSOR_STYLE_BAR_CLASS = t72.CURSOR_STYLE_BLOCK_CLASS = t72.CURSOR_BLINK_CLASS = t72.CURSOR_CLASS = t72.STRIKETHROUGH_CLASS = t72.UNDERLINE_CLASS = t72.ITALIC_CLASS = t72.DIM_CLASS = t72.BOLD_CLASS = void 0;
                var o24 = r41(8803), s26 = r41(643), a24 = r41(511), c13 = r41(2585), l = r41(4774), h11 = r41(4725), u = r41(4269);
                t72.BOLD_CLASS = "xterm-bold", t72.DIM_CLASS = "xterm-dim", t72.ITALIC_CLASS = "xterm-italic", t72.UNDERLINE_CLASS = "xterm-underline", t72.STRIKETHROUGH_CLASS = "xterm-strikethrough", t72.CURSOR_CLASS = "xterm-cursor", t72.CURSOR_BLINK_CLASS = "xterm-cursor-blink", t72.CURSOR_STYLE_BLOCK_CLASS = "xterm-cursor-block", t72.CURSOR_STYLE_BAR_CLASS = "xterm-cursor-bar", t72.CURSOR_STYLE_UNDERLINE_CLASS = "xterm-cursor-underline";
                var f6 = function() {
                    function e98(e, t, r, i, n) {
                        this._document = e, this._colors = t, this._characterJoinerService = r, this._optionsService = i, this._coreService = n, this._workCell = new a24.CellData;
                    }
                    return e98.prototype.setColors = function(e) {
                        this._colors = e;
                    }, e98.prototype.createRow = function(e, r, i, n, a, c, h, f) {
                        for(var d = this._document.createDocumentFragment(), p = this._characterJoinerService.getJoinedCharacters(r), v = 0, g = Math.min(e.length, f) - 1; g >= 0; g--)if (e.loadCell(g, this._workCell).getCode() !== s26.NULL_CELL_CODE || i && g === a) {
                            v = g + 1;
                            break;
                        }
                        for(g = 0; g < v; g++){
                            e.loadCell(g, this._workCell);
                            var y = this._workCell.getWidth();
                            if (0 !== y) {
                                var m = !1, S = g, C = this._workCell;
                                if (p.length > 0 && g === p[0][0]) {
                                    m = !0;
                                    var b = p.shift();
                                    C = new u.JoinedCellData(this._workCell, e.translateToString(!0, b[0], b[1]), b[1] - b[0]), S = b[1] - 1, y = C.getWidth();
                                }
                                var w = this._document.createElement("span");
                                if (y > 1 && (w.style.width = h * y + "px"), m && (w.style.display = "inline", a >= g && a <= S && (a = g)), !this._coreService.isCursorHidden && i && g === a) switch(w.classList.add(t72.CURSOR_CLASS), c && w.classList.add(t72.CURSOR_BLINK_CLASS), n){
                                    case "bar":
                                        w.classList.add(t72.CURSOR_STYLE_BAR_CLASS);
                                        break;
                                    case "underline":
                                        w.classList.add(t72.CURSOR_STYLE_UNDERLINE_CLASS);
                                        break;
                                    default:
                                        w.classList.add(t72.CURSOR_STYLE_BLOCK_CLASS);
                                }
                                C.isBold() && w.classList.add(t72.BOLD_CLASS), C.isItalic() && w.classList.add(t72.ITALIC_CLASS), C.isDim() && w.classList.add(t72.DIM_CLASS), C.isUnderline() && w.classList.add(t72.UNDERLINE_CLASS), C.isInvisible() ? w.textContent = s26.WHITESPACE_CELL_CHAR : w.textContent = C.getChars() || s26.WHITESPACE_CELL_CHAR, C.isStrikethrough() && w.classList.add(t72.STRIKETHROUGH_CLASS);
                                var L = C.getFgColor(), E = C.getFgColorMode(), x = C.getBgColor(), k = C.getBgColorMode(), M = !!C.isInverse();
                                if (M) {
                                    var A = L;
                                    L = x, x = A;
                                    var R = E;
                                    E = k, k = R;
                                }
                                switch(E){
                                    case 16777216:
                                    case 33554432:
                                        C.isBold() && L < 8 && this._optionsService.rawOptions.drawBoldTextInBrightColors && (L += 8), this._applyMinimumContrast(w, this._colors.background, this._colors.ansi[L]) || w.classList.add("xterm-fg-" + L);
                                        break;
                                    case 50331648:
                                        var O = l.rgba.toColor(L >> 16 & 255, L >> 8 & 255, 255 & L);
                                        this._applyMinimumContrast(w, this._colors.background, O) || this._addStyle(w, "color:#" + _(L.toString(16), "0", 6));
                                        break;
                                    default:
                                        this._applyMinimumContrast(w, this._colors.background, this._colors.foreground) || M && w.classList.add("xterm-fg-" + o24.INVERTED_DEFAULT_COLOR);
                                }
                                switch(k){
                                    case 16777216:
                                    case 33554432:
                                        w.classList.add("xterm-bg-" + x);
                                        break;
                                    case 50331648:
                                        this._addStyle(w, "background-color:#" + _(x.toString(16), "0", 6));
                                        break;
                                    default:
                                        M && w.classList.add("xterm-bg-" + o24.INVERTED_DEFAULT_COLOR);
                                }
                                d.appendChild(w), g = S;
                            }
                        }
                        return d;
                    }, e98.prototype._applyMinimumContrast = function(e, t, r) {
                        if (1 === this._optionsService.rawOptions.minimumContrastRatio) return !1;
                        var i = this._colors.contrastCache.getColor(this._workCell.bg, this._workCell.fg);
                        return void 0 === i && (i = l.color.ensureContrastRatio(t, r, this._optionsService.rawOptions.minimumContrastRatio), this._colors.contrastCache.setColor(this._workCell.bg, this._workCell.fg, null != i ? i : null)), !!i && (this._addStyle(e, "color:" + i.css), !0);
                    }, e98.prototype._addStyle = function(e, t) {
                        e.setAttribute("style", "" + (e.getAttribute("style") || "") + t + ";");
                    }, i29([
                        n26(2, h11.ICharacterJoinerService),
                        n26(3, c13.IOptionsService),
                        n26(4, c13.ICoreService)
                    ], e98);
                }();
                function _(e, t, r) {
                    for(; e.length < r;)e = t + e;
                    return e;
                }
                t72.DomRendererRowFactory = f6;
            },
            456: (e99, t73)=>{
                Object.defineProperty(t73, "__esModule", {
                    value: !0
                }), t73.SelectionModel = void 0;
                var r = function() {
                    function e100(e) {
                        this._bufferService = e, this.isSelectAllActive = !1, this.selectionStartLength = 0;
                    }
                    return e100.prototype.clearSelection = function() {
                        this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = !1, this.selectionStartLength = 0;
                    }, Object.defineProperty(e100.prototype, "finalSelectionStart", {
                        get: function() {
                            return this.isSelectAllActive ? [
                                0,
                                0
                            ] : this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e100.prototype, "finalSelectionEnd", {
                        get: function() {
                            if (this.isSelectAllActive) return [
                                this._bufferService.cols,
                                this._bufferService.buffer.ybase + this._bufferService.rows - 1
                            ];
                            if (this.selectionStart) {
                                if (!this.selectionEnd || this.areSelectionValuesReversed()) {
                                    var e = this.selectionStart[0] + this.selectionStartLength;
                                    return e > this._bufferService.cols ? e % this._bufferService.cols == 0 ? [
                                        this._bufferService.cols,
                                        this.selectionStart[1] + Math.floor(e / this._bufferService.cols) - 1
                                    ] : [
                                        e % this._bufferService.cols,
                                        this.selectionStart[1] + Math.floor(e / this._bufferService.cols)
                                    ] : [
                                        e,
                                        this.selectionStart[1]
                                    ];
                                }
                                return this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1] ? [
                                    Math.max(this.selectionStart[0] + this.selectionStartLength, this.selectionEnd[0]),
                                    this.selectionEnd[1]
                                ] : this.selectionEnd;
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e100.prototype.areSelectionValuesReversed = function() {
                        var e = this.selectionStart, t = this.selectionEnd;
                        return !(!e || !t) && (e[1] > t[1] || e[1] === t[1] && e[0] > t[0]);
                    }, e100.prototype.onTrim = function(e) {
                        return this.selectionStart && (this.selectionStart[1] -= e), this.selectionEnd && (this.selectionEnd[1] -= e), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), !0) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), !1);
                    }, e100;
                }();
                t73.SelectionModel = r;
            },
            428: function(e101, t74, r42) {
                var i30 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n27 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t74, "__esModule", {
                    value: !0
                }), t74.CharSizeService = void 0;
                var o25 = r42(2585), s27 = r42(8460), a25 = function() {
                    function e102(e, t, r) {
                        this._optionsService = r, this.width = 0, this.height = 0, this._onCharSizeChange = new s27.EventEmitter, this._measureStrategy = new c(e, t, this._optionsService);
                    }
                    return Object.defineProperty(e102.prototype, "hasValidSize", {
                        get: function() {
                            return this.width > 0 && this.height > 0;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e102.prototype, "onCharSizeChange", {
                        get: function() {
                            return this._onCharSizeChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e102.prototype.measure = function() {
                        var e = this._measureStrategy.measure();
                        e.width === this.width && e.height === this.height || (this.width = e.width, this.height = e.height, this._onCharSizeChange.fire());
                    }, i30([
                        n27(2, o25.IOptionsService)
                    ], e102);
                }();
                t74.CharSizeService = a25;
                var c = function() {
                    function e103(e, t, r) {
                        this._document = e, this._parentElement = t, this._optionsService = r, this._result = {
                            width: 0,
                            height: 0
                        }, this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W", this._measureElement.setAttribute("aria-hidden", "true"), this._parentElement.appendChild(this._measureElement);
                    }
                    return e103.prototype.measure = function() {
                        this._measureElement.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._measureElement.style.fontSize = this._optionsService.rawOptions.fontSize + "px";
                        var e = this._measureElement.getBoundingClientRect();
                        return 0 !== e.width && 0 !== e.height && (this._result.width = e.width, this._result.height = Math.ceil(e.height)), this._result;
                    }, e103;
                }();
            },
            4269: function(e104, t75, r43) {
                var i31, n28 = this && this.__extends || (i31 = function(e105, t76) {
                    return i31 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i31(e105, t76);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i31(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o26 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s28 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t75, "__esModule", {
                    value: !0
                }), t75.CharacterJoinerService = t75.JoinedCellData = void 0;
                var a26 = r43(3734), c14 = r43(643), l15 = r43(511), h12 = r43(2585), u10 = function(e) {
                    function t77(t, r, i) {
                        var n = e.call(this) || this;
                        return n.content = 0, n.combinedData = "", n.fg = t.fg, n.bg = t.bg, n.combinedData = r, n._width = i, n;
                    }
                    return n28(t77, e), t77.prototype.isCombined = function() {
                        return 2097152;
                    }, t77.prototype.getWidth = function() {
                        return this._width;
                    }, t77.prototype.getChars = function() {
                        return this.combinedData;
                    }, t77.prototype.getCode = function() {
                        return 2097151;
                    }, t77.prototype.setFromCharData = function(e) {
                        throw new Error("not implemented");
                    }, t77.prototype.getAsCharData = function() {
                        return [
                            this.fg,
                            this.getChars(),
                            this.getWidth(),
                            this.getCode()
                        ];
                    }, t77;
                }(a26.AttributeData);
                t75.JoinedCellData = u10;
                var f7 = function() {
                    function e106(e) {
                        this._bufferService = e, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new l15.CellData;
                    }
                    return e106.prototype.register = function(e) {
                        var t = {
                            id: this._nextCharacterJoinerId++,
                            handler: e
                        };
                        return this._characterJoiners.push(t), t.id;
                    }, e106.prototype.deregister = function(e) {
                        for(var t = 0; t < this._characterJoiners.length; t++)if (this._characterJoiners[t].id === e) return this._characterJoiners.splice(t, 1), !0;
                        return !1;
                    }, e106.prototype.getJoinedCharacters = function(e) {
                        if (0 === this._characterJoiners.length) return [];
                        var t = this._bufferService.buffer.lines.get(e);
                        if (!t || 0 === t.length) return [];
                        for(var r = [], i = t.translateToString(!0), n = 0, o = 0, s = 0, a = t.getFg(0), l = t.getBg(0), h = 0; h < t.getTrimmedLength(); h++)if (t.loadCell(h, this._workCell), 0 !== this._workCell.getWidth()) {
                            if (this._workCell.fg !== a || this._workCell.bg !== l) {
                                if (h - n > 1) for(var u = this._getJoinedRanges(i, s, o, t, n), f = 0; f < u.length; f++)r.push(u[f]);
                                n = h, s = o, a = this._workCell.fg, l = this._workCell.bg;
                            }
                            o += this._workCell.getChars().length || c14.WHITESPACE_CELL_CHAR.length;
                        }
                        if (this._bufferService.cols - n > 1) for(u = this._getJoinedRanges(i, s, o, t, n), f = 0; f < u.length; f++)r.push(u[f]);
                        return r;
                    }, e106.prototype._getJoinedRanges = function(t, r, i, n, o) {
                        var s = t.substring(r, i), a = [];
                        try {
                            a = this._characterJoiners[0].handler(s);
                        } catch (e) {
                            console.error(e);
                        }
                        for(var c = 1; c < this._characterJoiners.length; c++)try {
                            for(var l = this._characterJoiners[c].handler(s), h = 0; h < l.length; h++)e106._mergeRanges(a, l[h]);
                        } catch (e107) {
                            console.error(e107);
                        }
                        return this._stringRangesToCellRanges(a, n, o), a;
                    }, e106.prototype._stringRangesToCellRanges = function(e, t, r) {
                        var i = 0, n = !1, o = 0, s = e[i];
                        if (s) {
                            for(var a = r; a < this._bufferService.cols; a++){
                                var l = t.getWidth(a), h = t.getString(a).length || c14.WHITESPACE_CELL_CHAR.length;
                                if (0 !== l) {
                                    if (!n && s[0] <= o && (s[0] = a, n = !0), s[1] <= o) {
                                        if (s[1] = a, !(s = e[++i])) break;
                                        s[0] <= o ? (s[0] = a, n = !0) : n = !1;
                                    }
                                    o += h;
                                }
                            }
                            s && (s[1] = this._bufferService.cols);
                        }
                    }, e106._mergeRanges = function(e, t) {
                        for(var r = !1, i = 0; i < e.length; i++){
                            var n = e[i];
                            if (r) {
                                if (t[1] <= n[0]) return e[i - 1][1] = t[1], e;
                                if (t[1] <= n[1]) return e[i - 1][1] = Math.max(t[1], n[1]), e.splice(i, 1), e;
                                e.splice(i, 1), i--;
                            } else {
                                if (t[1] <= n[0]) return e.splice(i, 0, t), e;
                                if (t[1] <= n[1]) return n[0] = Math.min(t[0], n[0]), e;
                                t[0] < n[1] && (n[0] = Math.min(t[0], n[0]), r = !0);
                            }
                        }
                        return r ? e[e.length - 1][1] = t[1] : e.push(t), e;
                    }, e106 = o26([
                        s28(0, h12.IBufferService)
                    ], e106);
                }();
                t75.CharacterJoinerService = f7;
            },
            5114: (e108, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CoreBrowserService = void 0;
                var r = function() {
                    function e109(e) {
                        this._textarea = e;
                    }
                    return Object.defineProperty(e109.prototype, "isFocused", {
                        get: function() {
                            return (this._textarea.getRootNode ? this._textarea.getRootNode() : document).activeElement === this._textarea && document.hasFocus();
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e109;
                }();
                t.CoreBrowserService = r;
            },
            7641: function(e110, t78, r44) {
                var i32, n29 = this && this.__extends || (i32 = function(e111, t79) {
                    return i32 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i32(e111, t79);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i32(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o27 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s29 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t78, "__esModule", {
                    value: !0
                }), t78.Decoration = t78.DecorationService = void 0;
                var a27 = r44(8460), c = r44(844), l = r44(2585), h = function(e112) {
                    function t80(t) {
                        var r = e112.call(this) || this;
                        return r._instantiationService = t, r._decorations = [], r;
                    }
                    return n29(t80, e112), t80.prototype.attachToDom = function(e, t) {
                        var r = this;
                        this._renderService = t, this._screenElement = e, this._container = document.createElement("div"), this._container.classList.add("xterm-decoration-container"), e.appendChild(this._container), this.register(this._renderService.onRenderedBufferChange(function() {
                            return r.refresh();
                        })), this.register(this._renderService.onDimensionsChange(function() {
                            return r.refresh(!0);
                        }));
                    }, t80.prototype.registerDecoration = function(e) {
                        var t = this;
                        if (!e.marker.isDisposed && this._container) {
                            var r = this._instantiationService.createInstance(u, e, this._container);
                            return this._decorations.push(r), r.onDispose(function() {
                                return t._decorations.splice(t._decorations.indexOf(r), 1);
                            }), this._queueRefresh(), r;
                        }
                    }, t80.prototype._queueRefresh = function() {
                        var e = this;
                        void 0 === this._animationFrame && (this._animationFrame = window.requestAnimationFrame(function() {
                            e.refresh(), e._animationFrame = void 0;
                        }));
                    }, t80.prototype.refresh = function(e) {
                        if (this._renderService) for(var t = 0, r = this._decorations; t < r.length; t++)r[t].render(this._renderService, e);
                    }, t80.prototype.dispose = function() {
                        for(var e = 0, t = this._decorations; e < t.length; e++)t[e].dispose();
                        this._screenElement && this._container && this._screenElement.contains(this._container) && this._screenElement.removeChild(this._container);
                    }, o27([
                        s29(0, l.IInstantiationService)
                    ], t80);
                }(c.Disposable);
                t78.DecorationService = h;
                var u = function(e113) {
                    function t81(t, r, i) {
                        var n, o = e113.call(this) || this;
                        return o._container = r, o._bufferService = i, o.isDisposed = !1, o._onDispose = new a27.EventEmitter, o._onRender = new a27.EventEmitter, o.x = null !== (n = t.x) && void 0 !== n ? n : 0, o._marker = t.marker, o._marker.onDispose(function() {
                            return o.dispose();
                        }), o.anchor = t.anchor || "left", o.width = t.width || 1, o.height = t.height || 1, o;
                    }
                    return n29(t81, e113), Object.defineProperty(t81.prototype, "element", {
                        get: function() {
                            return this._element;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t81.prototype, "marker", {
                        get: function() {
                            return this._marker;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t81.prototype, "onDispose", {
                        get: function() {
                            return this._onDispose.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t81.prototype, "onRender", {
                        get: function() {
                            return this._onRender.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t81.prototype.render = function(e, t) {
                        this._element && !t || this._createElement(e, t), this._container && this._element && !this._container.contains(this._element) && this._container.append(this._element), this._refreshStyle(e), this._element && this._onRender.fire(this._element);
                    }, t81.prototype._createElement = function(e, t) {
                        t && this._element && this._container.contains(this._element) && this._container.removeChild(this._element), this._element = document.createElement("div"), this._element.classList.add("xterm-decoration"), this._element.style.width = this.width * e.dimensions.actualCellWidth + "px", this._element.style.height = this.height * e.dimensions.actualCellHeight + "px", this._element.style.top = (this.marker.line - this._bufferService.buffers.active.ydisp) * e.dimensions.actualCellHeight + "px", this._element.style.lineHeight = e.dimensions.actualCellHeight + "px", this.x && this.x > this._bufferService.cols && (this._element.style.display = "none"), "right" === this.anchor ? this._element.style.right = this.x ? this.x * e.dimensions.actualCellWidth + "px" : "" : this._element.style.left = this.x ? this.x * e.dimensions.actualCellWidth + "px" : "";
                    }, t81.prototype._refreshStyle = function(e) {
                        if (this._element) {
                            var t = this.marker.line - this._bufferService.buffers.active.ydisp;
                            t < 0 || t > this._bufferService.rows ? this._element.style.display = "none" : (this._element.style.top = t * e.dimensions.actualCellHeight + "px", this._element.style.display = this._bufferService.buffer === this._bufferService.buffers.alt ? "none" : "block");
                        }
                    }, t81.prototype.dispose = function() {
                        this.isDisposed || (this._element && this._container.contains(this._element) && this._container.removeChild(this._element), this.isDisposed = !0, this._onDispose.fire());
                    }, o27([
                        s29(2, l.IBufferService)
                    ], t81);
                }(c.Disposable);
                t78.Decoration = u;
            },
            8934: function(e114, t82, r45) {
                var i33 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n30 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t82, "__esModule", {
                    value: !0
                }), t82.MouseService = void 0;
                var o28 = r45(4725), s30 = r45(9806), a28 = function() {
                    function e115(e, t) {
                        this._renderService = e, this._charSizeService = t;
                    }
                    return e115.prototype.getCoords = function(e, t, r, i, n) {
                        return (0, s30.getCoords)(e, t, r, i, this._charSizeService.hasValidSize, this._renderService.dimensions.actualCellWidth, this._renderService.dimensions.actualCellHeight, n);
                    }, e115.prototype.getRawByteCoords = function(e, t, r, i) {
                        var n = this.getCoords(e, t, r, i);
                        return (0, s30.getRawByteCoords)(n);
                    }, i33([
                        n30(0, o28.IRenderService),
                        n30(1, o28.ICharSizeService)
                    ], e115);
                }();
                t82.MouseService = a28;
            },
            3230: function(e116, t83, r46) {
                var i34, n31 = this && this.__extends || (i34 = function(e117, t84) {
                    return i34 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i34(e117, t84);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i34(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o29 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s31 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t83, "__esModule", {
                    value: !0
                }), t83.RenderService = void 0;
                var a29 = r46(6193), c = r46(8460), l16 = r46(844), h = r46(5596), u = r46(3656), f8 = r46(2585), _ = r46(4725), d = function(e118) {
                    function t85(t86, r, i, n, o, s) {
                        var l = e118.call(this) || this;
                        if (l._renderer = t86, l._rowCount = r, l._charSizeService = o, l._isPaused = !1, l._needsFullRefresh = !1, l._isNextRenderRedrawOnly = !0, l._needsSelectionRefresh = !1, l._canvasWidth = 0, l._canvasHeight = 0, l._selectionState = {
                            start: void 0,
                            end: void 0,
                            columnSelectMode: !1
                        }, l._onDimensionsChange = new c.EventEmitter, l._onRender = new c.EventEmitter, l._onRefreshRequest = new c.EventEmitter, l.register({
                            dispose: function() {
                                return l._renderer.dispose();
                            }
                        }), l._renderDebouncer = new a29.RenderDebouncer(function(e, t) {
                            return l._renderRows(e, t);
                        }), l.register(l._renderDebouncer), l._screenDprMonitor = new h.ScreenDprMonitor, l._screenDprMonitor.setListener(function() {
                            return l.onDevicePixelRatioChange();
                        }), l.register(l._screenDprMonitor), l.register(s.onResize(function() {
                            return l._fullRefresh();
                        })), l.register(s.buffers.onBufferActivate(function() {
                            var e;
                            return null === (e = l._renderer) || void 0 === e ? void 0 : e.clear();
                        })), l.register(n.onOptionChange(function() {
                            return l._renderer.onOptionsChanged();
                        })), l.register(l._charSizeService.onCharSizeChange(function() {
                            return l.onCharSizeChanged();
                        })), l._renderer.onRequestRedraw(function(e) {
                            return l.refreshRows(e.start, e.end, !0);
                        }), l.register((0, u.addDisposableDomListener)(window, "resize", function() {
                            return l.onDevicePixelRatioChange();
                        })), "IntersectionObserver" in window) {
                            var f = new IntersectionObserver(function(e) {
                                return l._onIntersectionChange(e[e.length - 1]);
                            }, {
                                threshold: 0
                            });
                            f.observe(i), l.register({
                                dispose: function() {
                                    return f.disconnect();
                                }
                            });
                        }
                        return l;
                    }
                    return n31(t85, e118), Object.defineProperty(t85.prototype, "onDimensionsChange", {
                        get: function() {
                            return this._onDimensionsChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t85.prototype, "onRenderedBufferChange", {
                        get: function() {
                            return this._onRender.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t85.prototype, "onRefreshRequest", {
                        get: function() {
                            return this._onRefreshRequest.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t85.prototype, "dimensions", {
                        get: function() {
                            return this._renderer.dimensions;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t85.prototype._onIntersectionChange = function(e) {
                        this._isPaused = void 0 === e.isIntersecting ? 0 === e.intersectionRatio : !e.isIntersecting, this._isPaused || this._charSizeService.hasValidSize || this._charSizeService.measure(), !this._isPaused && this._needsFullRefresh && (this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = !1);
                    }, t85.prototype.refreshRows = function(e, t, r) {
                        void 0 === r && (r = !1), this._isPaused ? this._needsFullRefresh = !0 : (r || (this._isNextRenderRedrawOnly = !1), this._renderDebouncer.refresh(e, t, this._rowCount));
                    }, t85.prototype._renderRows = function(e, t) {
                        this._renderer.renderRows(e, t), this._needsSelectionRefresh && (this._renderer.onSelectionChanged(this._selectionState.start, this._selectionState.end, this._selectionState.columnSelectMode), this._needsSelectionRefresh = !1), this._isNextRenderRedrawOnly || this._onRender.fire({
                            start: e,
                            end: t
                        }), this._isNextRenderRedrawOnly = !0;
                    }, t85.prototype.resize = function(e, t) {
                        this._rowCount = t, this._fireOnCanvasResize();
                    }, t85.prototype.changeOptions = function() {
                        this._renderer.onOptionsChanged(), this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize();
                    }, t85.prototype._fireOnCanvasResize = function() {
                        this._renderer.dimensions.canvasWidth === this._canvasWidth && this._renderer.dimensions.canvasHeight === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.dimensions);
                    }, t85.prototype.dispose = function() {
                        e118.prototype.dispose.call(this);
                    }, t85.prototype.setRenderer = function(e119) {
                        var t = this;
                        this._renderer.dispose(), this._renderer = e119, this._renderer.onRequestRedraw(function(e) {
                            return t.refreshRows(e.start, e.end, !0);
                        }), this._needsSelectionRefresh = !0, this._fullRefresh();
                    }, t85.prototype._fullRefresh = function() {
                        this._isPaused ? this._needsFullRefresh = !0 : this.refreshRows(0, this._rowCount - 1);
                    }, t85.prototype.clearTextureAtlas = function() {
                        var e, t;
                        null === (t = null === (e = this._renderer) || void 0 === e ? void 0 : e.clearTextureAtlas) || void 0 === t || t.call(e), this._fullRefresh();
                    }, t85.prototype.setColors = function(e) {
                        this._renderer.setColors(e), this._fullRefresh();
                    }, t85.prototype.onDevicePixelRatioChange = function() {
                        this._charSizeService.measure(), this._renderer.onDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1);
                    }, t85.prototype.onResize = function(e, t) {
                        this._renderer.onResize(e, t), this._fullRefresh();
                    }, t85.prototype.onCharSizeChanged = function() {
                        this._renderer.onCharSizeChanged();
                    }, t85.prototype.onBlur = function() {
                        this._renderer.onBlur();
                    }, t85.prototype.onFocus = function() {
                        this._renderer.onFocus();
                    }, t85.prototype.onSelectionChanged = function(e, t, r) {
                        this._selectionState.start = e, this._selectionState.end = t, this._selectionState.columnSelectMode = r, this._renderer.onSelectionChanged(e, t, r);
                    }, t85.prototype.onCursorMove = function() {
                        this._renderer.onCursorMove();
                    }, t85.prototype.clear = function() {
                        this._renderer.clear();
                    }, o29([
                        s31(3, f8.IOptionsService),
                        s31(4, _.ICharSizeService),
                        s31(5, f8.IBufferService)
                    ], t85);
                }(l16.Disposable);
                t83.RenderService = d;
            },
            9312: function(e120, t87, r47) {
                var i35, n32 = this && this.__extends || (i35 = function(e121, t88) {
                    return i35 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i35(e121, t88);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i35(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o30 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s32 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t87, "__esModule", {
                    value: !0
                }), t87.SelectionService = void 0;
                var a30 = r47(6114), c15 = r47(456), l17 = r47(511), h13 = r47(8460), u11 = r47(4725), f9 = r47(2585), _3 = r47(9806), d3 = r47(9504), p2 = r47(844), v2 = r47(4841), g2 = String.fromCharCode(160), y2 = new RegExp(g2, "g"), m2 = function(e122) {
                    function t89(t, r, i, n, o, s, a, u) {
                        var f = e122.call(this) || this;
                        return f._element = t, f._screenElement = r, f._linkifier = i, f._bufferService = n, f._coreService = o, f._mouseService = s, f._optionsService = a, f._renderService = u, f._dragScrollAmount = 0, f._enabled = !0, f._workCell = new l17.CellData, f._mouseDownTimeStamp = 0, f._oldHasSelection = !1, f._oldSelectionStart = void 0, f._oldSelectionEnd = void 0, f._onLinuxMouseSelection = f.register(new h13.EventEmitter), f._onRedrawRequest = f.register(new h13.EventEmitter), f._onSelectionChange = f.register(new h13.EventEmitter), f._onRequestScrollLines = f.register(new h13.EventEmitter), f._mouseMoveListener = function(e) {
                            return f._onMouseMove(e);
                        }, f._mouseUpListener = function(e) {
                            return f._onMouseUp(e);
                        }, f._coreService.onUserInput(function() {
                            f.hasSelection && f.clearSelection();
                        }), f._trimListener = f._bufferService.buffer.lines.onTrim(function(e) {
                            return f._onTrim(e);
                        }), f.register(f._bufferService.buffers.onBufferActivate(function(e) {
                            return f._onBufferActivate(e);
                        })), f.enable(), f._model = new c15.SelectionModel(f._bufferService), f._activeSelectionMode = 0, f;
                    }
                    return n32(t89, e122), Object.defineProperty(t89.prototype, "onLinuxMouseSelection", {
                        get: function() {
                            return this._onLinuxMouseSelection.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t89.prototype, "onRequestRedraw", {
                        get: function() {
                            return this._onRedrawRequest.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t89.prototype, "onSelectionChange", {
                        get: function() {
                            return this._onSelectionChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t89.prototype, "onRequestScrollLines", {
                        get: function() {
                            return this._onRequestScrollLines.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t89.prototype.dispose = function() {
                        this._removeMouseDownListeners();
                    }, t89.prototype.reset = function() {
                        this.clearSelection();
                    }, t89.prototype.disable = function() {
                        this.clearSelection(), this._enabled = !1;
                    }, t89.prototype.enable = function() {
                        this._enabled = !0;
                    }, Object.defineProperty(t89.prototype, "selectionStart", {
                        get: function() {
                            return this._model.finalSelectionStart;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t89.prototype, "selectionEnd", {
                        get: function() {
                            return this._model.finalSelectionEnd;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t89.prototype, "hasSelection", {
                        get: function() {
                            var e = this._model.finalSelectionStart, t = this._model.finalSelectionEnd;
                            return !(!e || !t || e[0] === t[0] && e[1] === t[1]);
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t89.prototype, "selectionText", {
                        get: function() {
                            var e123 = this._model.finalSelectionStart, t = this._model.finalSelectionEnd;
                            if (!e123 || !t) return "";
                            var r = this._bufferService.buffer, i = [];
                            if (3 === this._activeSelectionMode) {
                                if (e123[0] === t[0]) return "";
                                for(var n = e123[1]; n <= t[1]; n++){
                                    var o = r.translateBufferLineToString(n, !0, e123[0], t[0]);
                                    i.push(o);
                                }
                            } else {
                                var s = e123[1] === t[1] ? t[0] : void 0;
                                for(i.push(r.translateBufferLineToString(e123[1], !0, e123[0], s)), n = e123[1] + 1; n <= t[1] - 1; n++){
                                    var c = r.lines.get(n);
                                    o = r.translateBufferLineToString(n, !0), (null == c ? void 0 : c.isWrapped) ? i[i.length - 1] += o : i.push(o);
                                }
                                e123[1] !== t[1] && (c = r.lines.get(t[1]), o = r.translateBufferLineToString(t[1], !0, 0, t[0]), c && c.isWrapped ? i[i.length - 1] += o : i.push(o));
                            }
                            return i.map(function(e) {
                                return e.replace(y2, " ");
                            }).join(a30.isWindows ? "\r\n" : "\n");
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t89.prototype.clearSelection = function() {
                        this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire();
                    }, t89.prototype.refresh = function(e) {
                        var t = this;
                        this._refreshAnimationFrame || (this._refreshAnimationFrame = window.requestAnimationFrame(function() {
                            return t._refresh();
                        })), a30.isLinux && e && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText);
                    }, t89.prototype._refresh = function() {
                        this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({
                            start: this._model.finalSelectionStart,
                            end: this._model.finalSelectionEnd,
                            columnSelectMode: 3 === this._activeSelectionMode
                        });
                    }, t89.prototype._isClickInSelection = function(e) {
                        var t = this._getMouseBufferCoords(e), r = this._model.finalSelectionStart, i = this._model.finalSelectionEnd;
                        return !!(r && i && t) && this._areCoordsInSelection(t, r, i);
                    }, t89.prototype._areCoordsInSelection = function(e, t, r) {
                        return e[1] > t[1] && e[1] < r[1] || t[1] === r[1] && e[1] === t[1] && e[0] >= t[0] && e[0] < r[0] || t[1] < r[1] && e[1] === r[1] && e[0] < r[0] || t[1] < r[1] && e[1] === t[1] && e[0] >= t[0];
                    }, t89.prototype._selectWordAtCursor = function(e, t) {
                        var r, i, n = null === (i = null === (r = this._linkifier.currentLink) || void 0 === r ? void 0 : r.link) || void 0 === i ? void 0 : i.range;
                        if (n) return this._model.selectionStart = [
                            n.start.x - 1,
                            n.start.y - 1
                        ], this._model.selectionStartLength = (0, v2.getRangeLength)(n, this._bufferService.cols), this._model.selectionEnd = void 0, !0;
                        var o = this._getMouseBufferCoords(e);
                        return !!o && (this._selectWordAt(o, t), this._model.selectionEnd = void 0, !0);
                    }, t89.prototype.selectAll = function() {
                        this._model.isSelectAllActive = !0, this.refresh(), this._onSelectionChange.fire();
                    }, t89.prototype.selectLines = function(e, t) {
                        this._model.clearSelection(), e = Math.max(e, 0), t = Math.min(t, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [
                            0,
                            e
                        ], this._model.selectionEnd = [
                            this._bufferService.cols,
                            t
                        ], this.refresh(), this._onSelectionChange.fire();
                    }, t89.prototype._onTrim = function(e) {
                        this._model.onTrim(e) && this.refresh();
                    }, t89.prototype._getMouseBufferCoords = function(e) {
                        var t = this._mouseService.getCoords(e, this._screenElement, this._bufferService.cols, this._bufferService.rows, !0);
                        if (t) return t[0]--, t[1]--, t[1] += this._bufferService.buffer.ydisp, t;
                    }, t89.prototype._getMouseEventScrollAmount = function(e) {
                        var t = (0, _3.getCoordsRelativeToElement)(e, this._screenElement)[1], r = this._renderService.dimensions.canvasHeight;
                        return t >= 0 && t <= r ? 0 : (t > r && (t -= r), t = Math.min(Math.max(t, -50), 50), (t /= 50) / Math.abs(t) + Math.round(14 * t));
                    }, t89.prototype.shouldForceSelection = function(e) {
                        return a30.isMac ? e.altKey && this._optionsService.rawOptions.macOptionClickForcesSelection : e.shiftKey;
                    }, t89.prototype.onMouseDown = function(e) {
                        if (this._mouseDownTimeStamp = e.timeStamp, (2 !== e.button || !this.hasSelection) && 0 === e.button) {
                            if (!this._enabled) {
                                if (!this.shouldForceSelection(e)) return;
                                e.stopPropagation();
                            }
                            e.preventDefault(), this._dragScrollAmount = 0, this._enabled && e.shiftKey ? this._onIncrementalClick(e) : 1 === e.detail ? this._onSingleClick(e) : 2 === e.detail ? this._onDoubleClick(e) : 3 === e.detail && this._onTripleClick(e), this._addMouseDownListeners(), this.refresh(!0);
                        }
                    }, t89.prototype._addMouseDownListeners = function() {
                        var e = this;
                        this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = window.setInterval(function() {
                            return e._dragScroll();
                        }, 50);
                    }, t89.prototype._removeMouseDownListeners = function() {
                        this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0;
                    }, t89.prototype._onIncrementalClick = function(e) {
                        this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e));
                    }, t89.prototype._onSingleClick = function(e) {
                        if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = !1, this._activeSelectionMode = this.shouldColumnSelect(e) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e), this._model.selectionStart) {
                            this._model.selectionEnd = void 0;
                            var t = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
                            t && t.length !== this._model.selectionStart[0] && 0 === t.hasWidth(this._model.selectionStart[0]) && this._model.selectionStart[0]++;
                        }
                    }, t89.prototype._onDoubleClick = function(e) {
                        this._selectWordAtCursor(e, !0) && (this._activeSelectionMode = 1);
                    }, t89.prototype._onTripleClick = function(e) {
                        var t = this._getMouseBufferCoords(e);
                        t && (this._activeSelectionMode = 2, this._selectLineAt(t[1]));
                    }, t89.prototype.shouldColumnSelect = function(e) {
                        return e.altKey && !(a30.isMac && this._optionsService.rawOptions.macOptionClickForcesSelection);
                    }, t89.prototype._onMouseMove = function(e) {
                        if (e.stopImmediatePropagation(), this._model.selectionStart) {
                            var t = this._model.selectionEnd ? [
                                this._model.selectionEnd[0],
                                this._model.selectionEnd[1]
                            ] : null;
                            if (this._model.selectionEnd = this._getMouseBufferCoords(e), this._model.selectionEnd) {
                                2 === this._activeSelectionMode ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : 1 === this._activeSelectionMode && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e), 3 !== this._activeSelectionMode && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
                                var r = this._bufferService.buffer;
                                if (this._model.selectionEnd[1] < r.lines.length) {
                                    var i = r.lines.get(this._model.selectionEnd[1]);
                                    i && 0 === i.hasWidth(this._model.selectionEnd[0]) && this._model.selectionEnd[0]++;
                                }
                                t && t[0] === this._model.selectionEnd[0] && t[1] === this._model.selectionEnd[1] || this.refresh(!0);
                            } else this.refresh(!0);
                        }
                    }, t89.prototype._dragScroll = function() {
                        if (this._model.selectionEnd && this._model.selectionStart && this._dragScrollAmount) {
                            this._onRequestScrollLines.fire({
                                amount: this._dragScrollAmount,
                                suppressScrollEvent: !1
                            });
                            var e = this._bufferService.buffer;
                            this._dragScrollAmount > 0 ? (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(e.ydisp + this._bufferService.rows, e.lines.length - 1)) : (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = e.ydisp), this.refresh();
                        }
                    }, t89.prototype._onMouseUp = function(e) {
                        var t = e.timeStamp - this._mouseDownTimeStamp;
                        if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && t < 500 && e.altKey && this._optionsService.getOption("altClickMovesCursor")) {
                            if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
                                var r = this._mouseService.getCoords(e, this._element, this._bufferService.cols, this._bufferService.rows, !1);
                                if (r && void 0 !== r[0] && void 0 !== r[1]) {
                                    var i = (0, d3.moveToCellSequence)(r[0] - 1, r[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
                                    this._coreService.triggerDataEvent(i, !0);
                                }
                            }
                        } else this._fireEventIfSelectionChanged();
                    }, t89.prototype._fireEventIfSelectionChanged = function() {
                        var e = this._model.finalSelectionStart, t = this._model.finalSelectionEnd, r = !(!e || !t || e[0] === t[0] && e[1] === t[1]);
                        r ? e && t && (this._oldSelectionStart && this._oldSelectionEnd && e[0] === this._oldSelectionStart[0] && e[1] === this._oldSelectionStart[1] && t[0] === this._oldSelectionEnd[0] && t[1] === this._oldSelectionEnd[1] || this._fireOnSelectionChange(e, t, r)) : this._oldHasSelection && this._fireOnSelectionChange(e, t, r);
                    }, t89.prototype._fireOnSelectionChange = function(e, t, r) {
                        this._oldSelectionStart = e, this._oldSelectionEnd = t, this._oldHasSelection = r, this._onSelectionChange.fire();
                    }, t89.prototype._onBufferActivate = function(e124) {
                        var t = this;
                        this.clearSelection(), this._trimListener.dispose(), this._trimListener = e124.activeBuffer.lines.onTrim(function(e) {
                            return t._onTrim(e);
                        });
                    }, t89.prototype._convertViewportColToCharacterIndex = function(e, t) {
                        for(var r = t[0], i = 0; t[0] >= i; i++){
                            var n = e.loadCell(i, this._workCell).getChars().length;
                            0 === this._workCell.getWidth() ? r-- : n > 1 && t[0] !== i && (r += n - 1);
                        }
                        return r;
                    }, t89.prototype.setSelection = function(e, t, r) {
                        this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [
                            e,
                            t
                        ], this._model.selectionStartLength = r, this.refresh();
                    }, t89.prototype.rightClickSelect = function(e) {
                        this._isClickInSelection(e) || (this._selectWordAtCursor(e, !1) && this.refresh(!0), this._fireEventIfSelectionChanged());
                    }, t89.prototype._getWordAt = function(e, t, r, i) {
                        if (void 0 === r && (r = !0), void 0 === i && (i = !0), !(e[0] >= this._bufferService.cols)) {
                            var n = this._bufferService.buffer, o = n.lines.get(e[1]);
                            if (o) {
                                var s = n.translateBufferLineToString(e[1], !1), a = this._convertViewportColToCharacterIndex(o, e), c = a, l = e[0] - a, h = 0, u = 0, f = 0, _ = 0;
                                if (" " === s.charAt(a)) {
                                    for(; a > 0 && " " === s.charAt(a - 1);)a--;
                                    for(; c < s.length && " " === s.charAt(c + 1);)c++;
                                } else {
                                    var d = e[0], p = e[0];
                                    0 === o.getWidth(d) && (h++, d--), 2 === o.getWidth(p) && (u++, p++);
                                    var v = o.getString(p).length;
                                    for(v > 1 && (_ += v - 1, c += v - 1); d > 0 && a > 0 && !this._isCharWordSeparator(o.loadCell(d - 1, this._workCell));){
                                        o.loadCell(d - 1, this._workCell);
                                        var g = this._workCell.getChars().length;
                                        0 === this._workCell.getWidth() ? (h++, d--) : g > 1 && (f += g - 1, a -= g - 1), a--, d--;
                                    }
                                    for(; p < o.length && c + 1 < s.length && !this._isCharWordSeparator(o.loadCell(p + 1, this._workCell));){
                                        o.loadCell(p + 1, this._workCell);
                                        var y = this._workCell.getChars().length;
                                        2 === this._workCell.getWidth() ? (u++, p++) : y > 1 && (_ += y - 1, c += y - 1), c++, p++;
                                    }
                                }
                                c++;
                                var m = a + l - h + f, S = Math.min(this._bufferService.cols, c - a + h + u - f - _);
                                if (t || "" !== s.slice(a, c).trim()) {
                                    if (r && 0 === m && 32 !== o.getCodePoint(0)) {
                                        var C = n.lines.get(e[1] - 1);
                                        if (C && o.isWrapped && 32 !== C.getCodePoint(this._bufferService.cols - 1)) {
                                            var b = this._getWordAt([
                                                this._bufferService.cols - 1,
                                                e[1] - 1
                                            ], !1, !0, !1);
                                            if (b) {
                                                var w = this._bufferService.cols - b.start;
                                                m -= w, S += w;
                                            }
                                        }
                                    }
                                    if (i && m + S === this._bufferService.cols && 32 !== o.getCodePoint(this._bufferService.cols - 1)) {
                                        var L = n.lines.get(e[1] + 1);
                                        if ((null == L ? void 0 : L.isWrapped) && 32 !== L.getCodePoint(0)) {
                                            var E = this._getWordAt([
                                                0,
                                                e[1] + 1
                                            ], !1, !1, !0);
                                            E && (S += E.length);
                                        }
                                    }
                                    return {
                                        start: m,
                                        length: S
                                    };
                                }
                            }
                        }
                    }, t89.prototype._selectWordAt = function(e, t) {
                        var r = this._getWordAt(e, t);
                        if (r) {
                            for(; r.start < 0;)r.start += this._bufferService.cols, e[1]--;
                            this._model.selectionStart = [
                                r.start,
                                e[1]
                            ], this._model.selectionStartLength = r.length;
                        }
                    }, t89.prototype._selectToWordAt = function(e) {
                        var t = this._getWordAt(e, !0);
                        if (t) {
                            for(var r = e[1]; t.start < 0;)t.start += this._bufferService.cols, r--;
                            if (!this._model.areSelectionValuesReversed()) for(; t.start + t.length > this._bufferService.cols;)t.length -= this._bufferService.cols, r++;
                            this._model.selectionEnd = [
                                this._model.areSelectionValuesReversed() ? t.start : t.start + t.length,
                                r
                            ];
                        }
                    }, t89.prototype._isCharWordSeparator = function(e) {
                        return 0 !== e.getWidth() && this._optionsService.rawOptions.wordSeparator.indexOf(e.getChars()) >= 0;
                    }, t89.prototype._selectLineAt = function(e) {
                        var t = this._bufferService.buffer.getWrappedRangeForLine(e);
                        this._model.selectionStart = [
                            0,
                            t.first
                        ], this._model.selectionEnd = [
                            this._bufferService.cols,
                            t.last
                        ], this._model.selectionStartLength = 0;
                    }, o30([
                        s32(3, f9.IBufferService),
                        s32(4, f9.ICoreService),
                        s32(5, u11.IMouseService),
                        s32(6, f9.IOptionsService),
                        s32(7, u11.IRenderService)
                    ], t89);
                }(p2.Disposable);
                t87.SelectionService = m2;
            },
            4725: (e, t, r)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.IDecorationService = t.ICharacterJoinerService = t.ISoundService = t.ISelectionService = t.IRenderService = t.IMouseService = t.ICoreBrowserService = t.ICharSizeService = void 0;
                var i = r(8343);
                t.ICharSizeService = (0, i.createDecorator)("CharSizeService"), t.ICoreBrowserService = (0, i.createDecorator)("CoreBrowserService"), t.IMouseService = (0, i.createDecorator)("MouseService"), t.IRenderService = (0, i.createDecorator)("RenderService"), t.ISelectionService = (0, i.createDecorator)("SelectionService"), t.ISoundService = (0, i.createDecorator)("SoundService"), t.ICharacterJoinerService = (0, i.createDecorator)("CharacterJoinerService"), t.IDecorationService = (0, i.createDecorator)("DecorationService");
            },
            357: function(e125, t90, r48) {
                var i36 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n33 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t90, "__esModule", {
                    value: !0
                }), t90.SoundService = void 0;
                var o31 = r48(2585), s33 = function() {
                    function e126(e) {
                        this._optionsService = e;
                    }
                    return Object.defineProperty(e126, "audioContext", {
                        get: function() {
                            if (!e126._audioContext) {
                                var t = window.AudioContext || window.webkitAudioContext;
                                if (!t) return console.warn("Web Audio API is not supported by this browser. Consider upgrading to the latest version"), null;
                                e126._audioContext = new t;
                            }
                            return e126._audioContext;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e126.prototype.playBellSound = function() {
                        var t = e126.audioContext;
                        if (t) {
                            var r = t.createBufferSource();
                            t.decodeAudioData(this._base64ToArrayBuffer(this._removeMimeType(this._optionsService.rawOptions.bellSound)), function(e) {
                                r.buffer = e, r.connect(t.destination), r.start(0);
                            });
                        }
                    }, e126.prototype._base64ToArrayBuffer = function(e) {
                        for(var t = window.atob(e), r = t.length, i = new Uint8Array(r), n = 0; n < r; n++)i[n] = t.charCodeAt(n);
                        return i.buffer;
                    }, e126.prototype._removeMimeType = function(e) {
                        return e.split(",")[1];
                    }, e126 = i36([
                        n33(0, o31.IOptionsService)
                    ], e126);
                }();
                t90.SoundService = s33;
            },
            6349: (e127, t91, r49)=>{
                Object.defineProperty(t91, "__esModule", {
                    value: !0
                }), t91.CircularList = void 0;
                var i37 = r49(8460), n34 = function() {
                    function e128(e) {
                        this._maxLength = e, this.onDeleteEmitter = new i37.EventEmitter, this.onInsertEmitter = new i37.EventEmitter, this.onTrimEmitter = new i37.EventEmitter, this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0;
                    }
                    return Object.defineProperty(e128.prototype, "onDelete", {
                        get: function() {
                            return this.onDeleteEmitter.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e128.prototype, "onInsert", {
                        get: function() {
                            return this.onInsertEmitter.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e128.prototype, "onTrim", {
                        get: function() {
                            return this.onTrimEmitter.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e128.prototype, "maxLength", {
                        get: function() {
                            return this._maxLength;
                        },
                        set: function(e) {
                            if (this._maxLength !== e) {
                                for(var t = new Array(e), r = 0; r < Math.min(e, this.length); r++)t[r] = this._array[this._getCyclicIndex(r)];
                                this._array = t, this._maxLength = e, this._startIndex = 0;
                            }
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e128.prototype, "length", {
                        get: function() {
                            return this._length;
                        },
                        set: function(e) {
                            if (e > this._length) for(var t = this._length; t < e; t++)this._array[t] = void 0;
                            this._length = e;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e128.prototype.get = function(e) {
                        return this._array[this._getCyclicIndex(e)];
                    }, e128.prototype.set = function(e, t) {
                        this._array[this._getCyclicIndex(e)] = t;
                    }, e128.prototype.push = function(e) {
                        this._array[this._getCyclicIndex(this._length)] = e, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++;
                    }, e128.prototype.recycle = function() {
                        if (this._length !== this._maxLength) throw new Error("Can only recycle when the buffer is full");
                        return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)];
                    }, Object.defineProperty(e128.prototype, "isFull", {
                        get: function() {
                            return this._length === this._maxLength;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e128.prototype.pop = function() {
                        return this._array[this._getCyclicIndex((this._length--) - 1)];
                    }, e128.prototype.splice = function(e, t) {
                        for(var r = [], i = 2; i < arguments.length; i++)r[i - 2] = arguments[i];
                        if (t) {
                            for(var n = e; n < this._length - t; n++)this._array[this._getCyclicIndex(n)] = this._array[this._getCyclicIndex(n + t)];
                            this._length -= t, this.onDeleteEmitter.fire({
                                index: e,
                                amount: t
                            });
                        }
                        for(n = this._length - 1; n >= e; n--)this._array[this._getCyclicIndex(n + r.length)] = this._array[this._getCyclicIndex(n)];
                        for(n = 0; n < r.length; n++)this._array[this._getCyclicIndex(e + n)] = r[n];
                        if (r.length && this.onInsertEmitter.fire({
                            index: e,
                            amount: r.length
                        }), this._length + r.length > this._maxLength) {
                            var o = this._length + r.length - this._maxLength;
                            this._startIndex += o, this._length = this._maxLength, this.onTrimEmitter.fire(o);
                        } else this._length += r.length;
                    }, e128.prototype.trimStart = function(e) {
                        e > this._length && (e = this._length), this._startIndex += e, this._length -= e, this.onTrimEmitter.fire(e);
                    }, e128.prototype.shiftElements = function(e, t, r) {
                        if (!(t <= 0)) {
                            if (e < 0 || e >= this._length) throw new Error("start argument out of range");
                            if (e + r < 0) throw new Error("Cannot shift elements in list beyond index 0");
                            if (r > 0) {
                                for(var i = t - 1; i >= 0; i--)this.set(e + i + r, this.get(e + i));
                                var n = e + t + r - this._length;
                                if (n > 0) for(this._length += n; this._length > this._maxLength;)this._length--, this._startIndex++, this.onTrimEmitter.fire(1);
                            } else for(i = 0; i < t; i++)this.set(e + i + r, this.get(e + i));
                        }
                    }, e128.prototype._getCyclicIndex = function(e) {
                        return (this._startIndex + e) % this._maxLength;
                    }, e128;
                }();
                t91.CircularList = n34;
            },
            1439: (e129, t92)=>{
                Object.defineProperty(t92, "__esModule", {
                    value: !0
                }), t92.clone = void 0, t92.clone = function e(t, r) {
                    if (void 0 === r && (r = 5), "object" != typeof t) return t;
                    var i = Array.isArray(t) ? [] : {};
                    for(var n in t)i[n] = r <= 1 ? t[n] : t[n] && e(t[n], r - 1);
                    return i;
                };
            },
            8969: function(e130, t93, r50) {
                var i, n = this && this.__extends || (i = function(e131, t94) {
                    return i = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i(e131, t94);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t93, "__esModule", {
                    value: !0
                }), t93.CoreTerminal = void 0;
                var o = r50(844), s = r50(2585), a = r50(4348), c = r50(7866), l = r50(744), h = r50(7302), u = r50(6975), f = r50(8460), _ = r50(1753), d = r50(3730), p = r50(1480), v = r50(7994), g = r50(9282), y = r50(5435), m = r50(5981), S = !1, C = function(e132) {
                    function t95(t96) {
                        var r = e132.call(this) || this;
                        return r._onBinary = new f.EventEmitter, r._onData = new f.EventEmitter, r._onLineFeed = new f.EventEmitter, r._onResize = new f.EventEmitter, r._onScroll = new f.EventEmitter, r._instantiationService = new a.InstantiationService, r.optionsService = new h.OptionsService(t96), r._instantiationService.setService(s.IOptionsService, r.optionsService), r._bufferService = r.register(r._instantiationService.createInstance(l.BufferService)), r._instantiationService.setService(s.IBufferService, r._bufferService), r._logService = r._instantiationService.createInstance(c.LogService), r._instantiationService.setService(s.ILogService, r._logService), r.coreService = r.register(r._instantiationService.createInstance(u.CoreService, function() {
                            return r.scrollToBottom();
                        })), r._instantiationService.setService(s.ICoreService, r.coreService), r.coreMouseService = r._instantiationService.createInstance(_.CoreMouseService), r._instantiationService.setService(s.ICoreMouseService, r.coreMouseService), r._dirtyRowService = r._instantiationService.createInstance(d.DirtyRowService), r._instantiationService.setService(s.IDirtyRowService, r._dirtyRowService), r.unicodeService = r._instantiationService.createInstance(p.UnicodeService), r._instantiationService.setService(s.IUnicodeService, r.unicodeService), r._charsetService = r._instantiationService.createInstance(v.CharsetService), r._instantiationService.setService(s.ICharsetService, r._charsetService), r._inputHandler = new y.InputHandler(r._bufferService, r._charsetService, r.coreService, r._dirtyRowService, r._logService, r.optionsService, r.coreMouseService, r.unicodeService), r.register((0, f.forwardEvent)(r._inputHandler.onLineFeed, r._onLineFeed)), r.register(r._inputHandler), r.register((0, f.forwardEvent)(r._bufferService.onResize, r._onResize)), r.register((0, f.forwardEvent)(r.coreService.onData, r._onData)), r.register((0, f.forwardEvent)(r.coreService.onBinary, r._onBinary)), r.register(r.optionsService.onOptionChange(function(e) {
                            return r._updateOptions(e);
                        })), r.register(r._bufferService.onScroll(function(e) {
                            r._onScroll.fire({
                                position: r._bufferService.buffer.ydisp,
                                source: 0
                            }), r._dirtyRowService.markRangeDirty(r._bufferService.buffer.scrollTop, r._bufferService.buffer.scrollBottom);
                        })), r.register(r._inputHandler.onScroll(function(e) {
                            r._onScroll.fire({
                                position: r._bufferService.buffer.ydisp,
                                source: 0
                            }), r._dirtyRowService.markRangeDirty(r._bufferService.buffer.scrollTop, r._bufferService.buffer.scrollBottom);
                        })), r._writeBuffer = new m.WriteBuffer(function(e, t) {
                            return r._inputHandler.parse(e, t);
                        }), r;
                    }
                    return n(t95, e132), Object.defineProperty(t95.prototype, "onBinary", {
                        get: function() {
                            return this._onBinary.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t95.prototype, "onData", {
                        get: function() {
                            return this._onData.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t95.prototype, "onLineFeed", {
                        get: function() {
                            return this._onLineFeed.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t95.prototype, "onResize", {
                        get: function() {
                            return this._onResize.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t95.prototype, "onScroll", {
                        get: function() {
                            var e = this;
                            return this._onScrollApi || (this._onScrollApi = new f.EventEmitter, this.register(this._onScroll.event(function(t) {
                                var r;
                                null === (r = e._onScrollApi) || void 0 === r || r.fire(t.position);
                            }))), this._onScrollApi.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t95.prototype, "cols", {
                        get: function() {
                            return this._bufferService.cols;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t95.prototype, "rows", {
                        get: function() {
                            return this._bufferService.rows;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t95.prototype, "buffers", {
                        get: function() {
                            return this._bufferService.buffers;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t95.prototype, "options", {
                        get: function() {
                            return this.optionsService.options;
                        },
                        set: function(e) {
                            for(var t in e)this.optionsService.options[t] = e[t];
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t95.prototype.dispose = function() {
                        var t;
                        this._isDisposed || (e132.prototype.dispose.call(this), null === (t = this._windowsMode) || void 0 === t || t.dispose(), this._windowsMode = void 0);
                    }, t95.prototype.write = function(e, t) {
                        this._writeBuffer.write(e, t);
                    }, t95.prototype.writeSync = function(e, t) {
                        this._logService.logLevel <= s.LogLevelEnum.WARN && !S && (this._logService.warn("writeSync is unreliable and will be removed soon."), S = !0), this._writeBuffer.writeSync(e, t);
                    }, t95.prototype.resize = function(e, t) {
                        isNaN(e) || isNaN(t) || (e = Math.max(e, l.MINIMUM_COLS), t = Math.max(t, l.MINIMUM_ROWS), this._bufferService.resize(e, t));
                    }, t95.prototype.scroll = function(e, t) {
                        void 0 === t && (t = !1), this._bufferService.scroll(e, t);
                    }, t95.prototype.scrollLines = function(e, t, r) {
                        this._bufferService.scrollLines(e, t, r);
                    }, t95.prototype.scrollPages = function(e) {
                        this._bufferService.scrollPages(e);
                    }, t95.prototype.scrollToTop = function() {
                        this._bufferService.scrollToTop();
                    }, t95.prototype.scrollToBottom = function() {
                        this._bufferService.scrollToBottom();
                    }, t95.prototype.scrollToLine = function(e) {
                        this._bufferService.scrollToLine(e);
                    }, t95.prototype.registerEscHandler = function(e, t) {
                        return this._inputHandler.registerEscHandler(e, t);
                    }, t95.prototype.registerDcsHandler = function(e, t) {
                        return this._inputHandler.registerDcsHandler(e, t);
                    }, t95.prototype.registerCsiHandler = function(e, t) {
                        return this._inputHandler.registerCsiHandler(e, t);
                    }, t95.prototype.registerOscHandler = function(e, t) {
                        return this._inputHandler.registerOscHandler(e, t);
                    }, t95.prototype._setup = function() {
                        this.optionsService.rawOptions.windowsMode && this._enableWindowsMode();
                    }, t95.prototype.reset = function() {
                        this._inputHandler.reset(), this._bufferService.reset(), this._charsetService.reset(), this.coreService.reset(), this.coreMouseService.reset();
                    }, t95.prototype._updateOptions = function(e) {
                        var t;
                        switch(e){
                            case "scrollback":
                                this.buffers.resize(this.cols, this.rows);
                                break;
                            case "windowsMode":
                                this.optionsService.rawOptions.windowsMode ? this._enableWindowsMode() : (null === (t = this._windowsMode) || void 0 === t || t.dispose(), this._windowsMode = void 0);
                        }
                    }, t95.prototype._enableWindowsMode = function() {
                        var e133 = this;
                        if (!this._windowsMode) {
                            var t = [];
                            t.push(this.onLineFeed(g.updateWindowsModeWrappedState.bind(null, this._bufferService))), t.push(this.registerCsiHandler({
                                final: "H"
                            }, function() {
                                return (0, g.updateWindowsModeWrappedState)(e133._bufferService), !1;
                            })), this._windowsMode = {
                                dispose: function() {
                                    for(var e = 0, r = t; e < r.length; e++)r[e].dispose();
                                }
                            };
                        }
                    }, t95;
                }(o.Disposable);
                t93.CoreTerminal = C;
            },
            8460: (e134, t97)=>{
                Object.defineProperty(t97, "__esModule", {
                    value: !0
                }), t97.forwardEvent = t97.EventEmitter = void 0;
                var r51 = function() {
                    function e135() {
                        this._listeners = [], this._disposed = !1;
                    }
                    return Object.defineProperty(e135.prototype, "event", {
                        get: function() {
                            var e = this;
                            return this._event || (this._event = function(t) {
                                return e._listeners.push(t), {
                                    dispose: function() {
                                        if (!e._disposed) {
                                            for(var r = 0; r < e._listeners.length; r++)if (e._listeners[r] === t) return void e._listeners.splice(r, 1);
                                        }
                                    }
                                };
                            }), this._event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e135.prototype.fire = function(e, t) {
                        for(var r = [], i = 0; i < this._listeners.length; i++)r.push(this._listeners[i]);
                        for(i = 0; i < r.length; i++)r[i].call(void 0, e, t);
                    }, e135.prototype.dispose = function() {
                        this._listeners && (this._listeners.length = 0), this._disposed = !0;
                    }, e135;
                }();
                t97.EventEmitter = r51, t97.forwardEvent = function(e136, t) {
                    return e136(function(e) {
                        return t.fire(e);
                    });
                };
            },
            5435: function(e137, t98, r52) {
                var i38, n35 = this && this.__extends || (i38 = function(e138, t99) {
                    return i38 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i38(e138, t99);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i38(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t98, "__esModule", {
                    value: !0
                }), t98.InputHandler = t98.WindowsOptionsReportType = void 0;
                var o32, s34 = r52(2584), a31 = r52(7116), c16 = r52(2015), l18 = r52(844), h14 = r52(8273), u = r52(482), f10 = r52(8437), _4 = r52(8460), d4 = r52(643), p3 = r52(511), v3 = r52(3734), g3 = r52(2585), y = r52(6242), m3 = r52(6351), S2 = r52(5941), C1 = {
                    "(": 0,
                    ")": 1,
                    "*": 2,
                    "+": 3,
                    "-": 1,
                    ".": 2
                }, b = 131072;
                function w(e, t) {
                    if (e > 24) return t.setWinLines || !1;
                    switch(e){
                        case 1:
                            return !!t.restoreWin;
                        case 2:
                            return !!t.minimizeWin;
                        case 3:
                            return !!t.setWinPosition;
                        case 4:
                            return !!t.setWinSizePixels;
                        case 5:
                            return !!t.raiseWin;
                        case 6:
                            return !!t.lowerWin;
                        case 7:
                            return !!t.refreshWin;
                        case 8:
                            return !!t.setWinSizeChars;
                        case 9:
                            return !!t.maximizeWin;
                        case 10:
                            return !!t.fullscreenWin;
                        case 11:
                            return !!t.getWinState;
                        case 13:
                            return !!t.getWinPosition;
                        case 14:
                            return !!t.getWinSizePixels;
                        case 15:
                            return !!t.getScreenSizePixels;
                        case 16:
                            return !!t.getCellSizePixels;
                        case 18:
                            return !!t.getWinSizeChars;
                        case 19:
                            return !!t.getScreenSizeChars;
                        case 20:
                            return !!t.getIconTitle;
                        case 21:
                            return !!t.getWinTitle;
                        case 22:
                            return !!t.pushTitle;
                        case 23:
                            return !!t.popTitle;
                        case 24:
                            return !!t.setWinLines;
                    }
                    return !1;
                }
                !function(e) {
                    e[e.GET_WIN_SIZE_PIXELS = 0] = "GET_WIN_SIZE_PIXELS", e[e.GET_CELL_SIZE_PIXELS = 1] = "GET_CELL_SIZE_PIXELS";
                }(o32 = t98.WindowsOptionsReportType || (t98.WindowsOptionsReportType = {}));
                var L = function() {
                    function e139(e, t, r, i) {
                        this._bufferService = e, this._coreService = t, this._logService = r, this._optionsService = i, this._data = new Uint32Array(0);
                    }
                    return e139.prototype.hook = function(e) {
                        this._data = new Uint32Array(0);
                    }, e139.prototype.put = function(e, t, r) {
                        this._data = (0, h14.concat)(this._data, e.subarray(t, r));
                    }, e139.prototype.unhook = function(e) {
                        if (!e) return this._data = new Uint32Array(0), !0;
                        var t = (0, u.utf32ToString)(this._data);
                        switch(this._data = new Uint32Array(0), t){
                            case '"q':
                                this._coreService.triggerDataEvent(s34.C0.ESC + 'P1$r0"q' + s34.C0.ESC + "\\");
                                break;
                            case '"p':
                                this._coreService.triggerDataEvent(s34.C0.ESC + 'P1$r61;1"p' + s34.C0.ESC + "\\");
                                break;
                            case "r":
                                var r = this._bufferService.buffer.scrollTop + 1 + ";" + (this._bufferService.buffer.scrollBottom + 1) + "r";
                                this._coreService.triggerDataEvent(s34.C0.ESC + "P1$r" + r + s34.C0.ESC + "\\");
                                break;
                            case "m":
                                this._coreService.triggerDataEvent(s34.C0.ESC + "P1$r0m" + s34.C0.ESC + "\\");
                                break;
                            case " q":
                                var i = {
                                    block: 2,
                                    underline: 4,
                                    bar: 6
                                }[this._optionsService.rawOptions.cursorStyle];
                                i -= this._optionsService.rawOptions.cursorBlink ? 1 : 0, this._coreService.triggerDataEvent(s34.C0.ESC + "P1$r" + i + " q" + s34.C0.ESC + "\\");
                                break;
                            default:
                                this._logService.debug("Unknown DCS $q %s", t), this._coreService.triggerDataEvent(s34.C0.ESC + "P0$r" + s34.C0.ESC + "\\");
                        }
                        return !0;
                    }, e139;
                }(), E = function(e140) {
                    function t100(t101, r53, i, n, o, l, h, d, v) {
                        void 0 === v && (v = new c16.EscapeSequenceParser);
                        var g = e140.call(this) || this;
                        g._bufferService = t101, g._charsetService = r53, g._coreService = i, g._dirtyRowService = n, g._logService = o, g._optionsService = l, g._coreMouseService = h, g._unicodeService = d, g._parser = v, g._parseBuffer = new Uint32Array(4096), g._stringDecoder = new u.StringToUtf32, g._utf8Decoder = new u.Utf8ToUtf32, g._workCell = new p3.CellData, g._windowTitle = "", g._iconName = "", g._windowTitleStack = [], g._iconNameStack = [], g._curAttrData = f10.DEFAULT_ATTR_DATA.clone(), g._eraseAttrDataInternal = f10.DEFAULT_ATTR_DATA.clone(), g._onRequestBell = new _4.EventEmitter, g._onRequestRefreshRows = new _4.EventEmitter, g._onRequestReset = new _4.EventEmitter, g._onRequestSendFocus = new _4.EventEmitter, g._onRequestSyncScrollBar = new _4.EventEmitter, g._onRequestWindowsOptionsReport = new _4.EventEmitter, g._onA11yChar = new _4.EventEmitter, g._onA11yTab = new _4.EventEmitter, g._onCursorMove = new _4.EventEmitter, g._onLineFeed = new _4.EventEmitter, g._onScroll = new _4.EventEmitter, g._onTitleChange = new _4.EventEmitter, g._onColor = new _4.EventEmitter, g._parseStack = {
                            paused: !1,
                            cursorStartX: 0,
                            cursorStartY: 0,
                            decodedLength: 0,
                            position: 0
                        }, g._specialColors = [
                            256,
                            257,
                            258
                        ], g.register(g._parser), g._activeBuffer = g._bufferService.buffer, g.register(g._bufferService.buffers.onBufferActivate(function(e) {
                            return g._activeBuffer = e.activeBuffer;
                        })), g._parser.setCsiHandlerFallback(function(e, t) {
                            g._logService.debug("Unknown CSI code: ", {
                                identifier: g._parser.identToString(e),
                                params: t.toArray()
                            });
                        }), g._parser.setEscHandlerFallback(function(e) {
                            g._logService.debug("Unknown ESC code: ", {
                                identifier: g._parser.identToString(e)
                            });
                        }), g._parser.setExecuteHandlerFallback(function(e) {
                            g._logService.debug("Unknown EXECUTE code: ", {
                                code: e
                            });
                        }), g._parser.setOscHandlerFallback(function(e, t, r) {
                            g._logService.debug("Unknown OSC code: ", {
                                identifier: e,
                                action: t,
                                data: r
                            });
                        }), g._parser.setDcsHandlerFallback(function(e, t, r) {
                            "HOOK" === t && (r = r.toArray()), g._logService.debug("Unknown DCS code: ", {
                                identifier: g._parser.identToString(e),
                                action: t,
                                payload: r
                            });
                        }), g._parser.setPrintHandler(function(e, t, r) {
                            return g.print(e, t, r);
                        }), g._parser.registerCsiHandler({
                            final: "@"
                        }, function(e) {
                            return g.insertChars(e);
                        }), g._parser.registerCsiHandler({
                            intermediates: " ",
                            final: "@"
                        }, function(e) {
                            return g.scrollLeft(e);
                        }), g._parser.registerCsiHandler({
                            final: "A"
                        }, function(e) {
                            return g.cursorUp(e);
                        }), g._parser.registerCsiHandler({
                            intermediates: " ",
                            final: "A"
                        }, function(e) {
                            return g.scrollRight(e);
                        }), g._parser.registerCsiHandler({
                            final: "B"
                        }, function(e) {
                            return g.cursorDown(e);
                        }), g._parser.registerCsiHandler({
                            final: "C"
                        }, function(e) {
                            return g.cursorForward(e);
                        }), g._parser.registerCsiHandler({
                            final: "D"
                        }, function(e) {
                            return g.cursorBackward(e);
                        }), g._parser.registerCsiHandler({
                            final: "E"
                        }, function(e) {
                            return g.cursorNextLine(e);
                        }), g._parser.registerCsiHandler({
                            final: "F"
                        }, function(e) {
                            return g.cursorPrecedingLine(e);
                        }), g._parser.registerCsiHandler({
                            final: "G"
                        }, function(e) {
                            return g.cursorCharAbsolute(e);
                        }), g._parser.registerCsiHandler({
                            final: "H"
                        }, function(e) {
                            return g.cursorPosition(e);
                        }), g._parser.registerCsiHandler({
                            final: "I"
                        }, function(e) {
                            return g.cursorForwardTab(e);
                        }), g._parser.registerCsiHandler({
                            final: "J"
                        }, function(e) {
                            return g.eraseInDisplay(e);
                        }), g._parser.registerCsiHandler({
                            prefix: "?",
                            final: "J"
                        }, function(e) {
                            return g.eraseInDisplay(e);
                        }), g._parser.registerCsiHandler({
                            final: "K"
                        }, function(e) {
                            return g.eraseInLine(e);
                        }), g._parser.registerCsiHandler({
                            prefix: "?",
                            final: "K"
                        }, function(e) {
                            return g.eraseInLine(e);
                        }), g._parser.registerCsiHandler({
                            final: "L"
                        }, function(e) {
                            return g.insertLines(e);
                        }), g._parser.registerCsiHandler({
                            final: "M"
                        }, function(e) {
                            return g.deleteLines(e);
                        }), g._parser.registerCsiHandler({
                            final: "P"
                        }, function(e) {
                            return g.deleteChars(e);
                        }), g._parser.registerCsiHandler({
                            final: "S"
                        }, function(e) {
                            return g.scrollUp(e);
                        }), g._parser.registerCsiHandler({
                            final: "T"
                        }, function(e) {
                            return g.scrollDown(e);
                        }), g._parser.registerCsiHandler({
                            final: "X"
                        }, function(e) {
                            return g.eraseChars(e);
                        }), g._parser.registerCsiHandler({
                            final: "Z"
                        }, function(e) {
                            return g.cursorBackwardTab(e);
                        }), g._parser.registerCsiHandler({
                            final: "`"
                        }, function(e) {
                            return g.charPosAbsolute(e);
                        }), g._parser.registerCsiHandler({
                            final: "a"
                        }, function(e) {
                            return g.hPositionRelative(e);
                        }), g._parser.registerCsiHandler({
                            final: "b"
                        }, function(e) {
                            return g.repeatPrecedingCharacter(e);
                        }), g._parser.registerCsiHandler({
                            final: "c"
                        }, function(e) {
                            return g.sendDeviceAttributesPrimary(e);
                        }), g._parser.registerCsiHandler({
                            prefix: ">",
                            final: "c"
                        }, function(e) {
                            return g.sendDeviceAttributesSecondary(e);
                        }), g._parser.registerCsiHandler({
                            final: "d"
                        }, function(e) {
                            return g.linePosAbsolute(e);
                        }), g._parser.registerCsiHandler({
                            final: "e"
                        }, function(e) {
                            return g.vPositionRelative(e);
                        }), g._parser.registerCsiHandler({
                            final: "f"
                        }, function(e) {
                            return g.hVPosition(e);
                        }), g._parser.registerCsiHandler({
                            final: "g"
                        }, function(e) {
                            return g.tabClear(e);
                        }), g._parser.registerCsiHandler({
                            final: "h"
                        }, function(e) {
                            return g.setMode(e);
                        }), g._parser.registerCsiHandler({
                            prefix: "?",
                            final: "h"
                        }, function(e) {
                            return g.setModePrivate(e);
                        }), g._parser.registerCsiHandler({
                            final: "l"
                        }, function(e) {
                            return g.resetMode(e);
                        }), g._parser.registerCsiHandler({
                            prefix: "?",
                            final: "l"
                        }, function(e) {
                            return g.resetModePrivate(e);
                        }), g._parser.registerCsiHandler({
                            final: "m"
                        }, function(e) {
                            return g.charAttributes(e);
                        }), g._parser.registerCsiHandler({
                            final: "n"
                        }, function(e) {
                            return g.deviceStatus(e);
                        }), g._parser.registerCsiHandler({
                            prefix: "?",
                            final: "n"
                        }, function(e) {
                            return g.deviceStatusPrivate(e);
                        }), g._parser.registerCsiHandler({
                            intermediates: "!",
                            final: "p"
                        }, function(e) {
                            return g.softReset(e);
                        }), g._parser.registerCsiHandler({
                            intermediates: " ",
                            final: "q"
                        }, function(e) {
                            return g.setCursorStyle(e);
                        }), g._parser.registerCsiHandler({
                            final: "r"
                        }, function(e) {
                            return g.setScrollRegion(e);
                        }), g._parser.registerCsiHandler({
                            final: "s"
                        }, function(e) {
                            return g.saveCursor(e);
                        }), g._parser.registerCsiHandler({
                            final: "t"
                        }, function(e) {
                            return g.windowOptions(e);
                        }), g._parser.registerCsiHandler({
                            final: "u"
                        }, function(e) {
                            return g.restoreCursor(e);
                        }), g._parser.registerCsiHandler({
                            intermediates: "'",
                            final: "}"
                        }, function(e) {
                            return g.insertColumns(e);
                        }), g._parser.registerCsiHandler({
                            intermediates: "'",
                            final: "~"
                        }, function(e) {
                            return g.deleteColumns(e);
                        }), g._parser.setExecuteHandler(s34.C0.BEL, function() {
                            return g.bell();
                        }), g._parser.setExecuteHandler(s34.C0.LF, function() {
                            return g.lineFeed();
                        }), g._parser.setExecuteHandler(s34.C0.VT, function() {
                            return g.lineFeed();
                        }), g._parser.setExecuteHandler(s34.C0.FF, function() {
                            return g.lineFeed();
                        }), g._parser.setExecuteHandler(s34.C0.CR, function() {
                            return g.carriageReturn();
                        }), g._parser.setExecuteHandler(s34.C0.BS, function() {
                            return g.backspace();
                        }), g._parser.setExecuteHandler(s34.C0.HT, function() {
                            return g.tab();
                        }), g._parser.setExecuteHandler(s34.C0.SO, function() {
                            return g.shiftOut();
                        }), g._parser.setExecuteHandler(s34.C0.SI, function() {
                            return g.shiftIn();
                        }), g._parser.setExecuteHandler(s34.C1.IND, function() {
                            return g.index();
                        }), g._parser.setExecuteHandler(s34.C1.NEL, function() {
                            return g.nextLine();
                        }), g._parser.setExecuteHandler(s34.C1.HTS, function() {
                            return g.tabSet();
                        }), g._parser.registerOscHandler(0, new y.OscHandler(function(e) {
                            return g.setTitle(e), g.setIconName(e), !0;
                        })), g._parser.registerOscHandler(1, new y.OscHandler(function(e) {
                            return g.setIconName(e);
                        })), g._parser.registerOscHandler(2, new y.OscHandler(function(e) {
                            return g.setTitle(e);
                        })), g._parser.registerOscHandler(4, new y.OscHandler(function(e) {
                            return g.setOrReportIndexedColor(e);
                        })), g._parser.registerOscHandler(10, new y.OscHandler(function(e) {
                            return g.setOrReportFgColor(e);
                        })), g._parser.registerOscHandler(11, new y.OscHandler(function(e) {
                            return g.setOrReportBgColor(e);
                        })), g._parser.registerOscHandler(12, new y.OscHandler(function(e) {
                            return g.setOrReportCursorColor(e);
                        })), g._parser.registerOscHandler(104, new y.OscHandler(function(e) {
                            return g.restoreIndexedColor(e);
                        })), g._parser.registerOscHandler(110, new y.OscHandler(function(e) {
                            return g.restoreFgColor(e);
                        })), g._parser.registerOscHandler(111, new y.OscHandler(function(e) {
                            return g.restoreBgColor(e);
                        })), g._parser.registerOscHandler(112, new y.OscHandler(function(e) {
                            return g.restoreCursorColor(e);
                        })), g._parser.registerEscHandler({
                            final: "7"
                        }, function() {
                            return g.saveCursor();
                        }), g._parser.registerEscHandler({
                            final: "8"
                        }, function() {
                            return g.restoreCursor();
                        }), g._parser.registerEscHandler({
                            final: "D"
                        }, function() {
                            return g.index();
                        }), g._parser.registerEscHandler({
                            final: "E"
                        }, function() {
                            return g.nextLine();
                        }), g._parser.registerEscHandler({
                            final: "H"
                        }, function() {
                            return g.tabSet();
                        }), g._parser.registerEscHandler({
                            final: "M"
                        }, function() {
                            return g.reverseIndex();
                        }), g._parser.registerEscHandler({
                            final: "="
                        }, function() {
                            return g.keypadApplicationMode();
                        }), g._parser.registerEscHandler({
                            final: ">"
                        }, function() {
                            return g.keypadNumericMode();
                        }), g._parser.registerEscHandler({
                            final: "c"
                        }, function() {
                            return g.fullReset();
                        }), g._parser.registerEscHandler({
                            final: "n"
                        }, function() {
                            return g.setgLevel(2);
                        }), g._parser.registerEscHandler({
                            final: "o"
                        }, function() {
                            return g.setgLevel(3);
                        }), g._parser.registerEscHandler({
                            final: "|"
                        }, function() {
                            return g.setgLevel(3);
                        }), g._parser.registerEscHandler({
                            final: "}"
                        }, function() {
                            return g.setgLevel(2);
                        }), g._parser.registerEscHandler({
                            final: "~"
                        }, function() {
                            return g.setgLevel(1);
                        }), g._parser.registerEscHandler({
                            intermediates: "%",
                            final: "@"
                        }, function() {
                            return g.selectDefaultCharset();
                        }), g._parser.registerEscHandler({
                            intermediates: "%",
                            final: "G"
                        }, function() {
                            return g.selectDefaultCharset();
                        });
                        var m = function(e) {
                            S._parser.registerEscHandler({
                                intermediates: "(",
                                final: e
                            }, function() {
                                return g.selectCharset("(" + e);
                            }), S._parser.registerEscHandler({
                                intermediates: ")",
                                final: e
                            }, function() {
                                return g.selectCharset(")" + e);
                            }), S._parser.registerEscHandler({
                                intermediates: "*",
                                final: e
                            }, function() {
                                return g.selectCharset("*" + e);
                            }), S._parser.registerEscHandler({
                                intermediates: "+",
                                final: e
                            }, function() {
                                return g.selectCharset("+" + e);
                            }), S._parser.registerEscHandler({
                                intermediates: "-",
                                final: e
                            }, function() {
                                return g.selectCharset("-" + e);
                            }), S._parser.registerEscHandler({
                                intermediates: ".",
                                final: e
                            }, function() {
                                return g.selectCharset("." + e);
                            }), S._parser.registerEscHandler({
                                intermediates: "/",
                                final: e
                            }, function() {
                                return g.selectCharset("/" + e);
                            });
                        }, S = this;
                        for(var C in a31.CHARSETS)m(C);
                        return g._parser.registerEscHandler({
                            intermediates: "#",
                            final: "8"
                        }, function() {
                            return g.screenAlignmentPattern();
                        }), g._parser.setErrorHandler(function(e) {
                            return g._logService.error("Parsing error: ", e), e;
                        }), g._parser.registerDcsHandler({
                            intermediates: "$",
                            final: "q"
                        }, new L(g._bufferService, g._coreService, g._logService, g._optionsService)), g;
                    }
                    return n35(t100, e140), Object.defineProperty(t100.prototype, "onRequestBell", {
                        get: function() {
                            return this._onRequestBell.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t100.prototype, "onRequestRefreshRows", {
                        get: function() {
                            return this._onRequestRefreshRows.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t100.prototype, "onRequestReset", {
                        get: function() {
                            return this._onRequestReset.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t100.prototype, "onRequestSendFocus", {
                        get: function() {
                            return this._onRequestSendFocus.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t100.prototype, "onRequestSyncScrollBar", {
                        get: function() {
                            return this._onRequestSyncScrollBar.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t100.prototype, "onRequestWindowsOptionsReport", {
                        get: function() {
                            return this._onRequestWindowsOptionsReport.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t100.prototype, "onA11yChar", {
                        get: function() {
                            return this._onA11yChar.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t100.prototype, "onA11yTab", {
                        get: function() {
                            return this._onA11yTab.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t100.prototype, "onCursorMove", {
                        get: function() {
                            return this._onCursorMove.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t100.prototype, "onLineFeed", {
                        get: function() {
                            return this._onLineFeed.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t100.prototype, "onScroll", {
                        get: function() {
                            return this._onScroll.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t100.prototype, "onTitleChange", {
                        get: function() {
                            return this._onTitleChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t100.prototype, "onColor", {
                        get: function() {
                            return this._onColor.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t100.prototype.dispose = function() {
                        e140.prototype.dispose.call(this);
                    }, t100.prototype._preserveStack = function(e, t, r, i) {
                        this._parseStack.paused = !0, this._parseStack.cursorStartX = e, this._parseStack.cursorStartY = t, this._parseStack.decodedLength = r, this._parseStack.position = i;
                    }, t100.prototype._logSlowResolvingAsync = function(e141) {
                        this._logService.logLevel <= g3.LogLevelEnum.WARN && Promise.race([
                            e141,
                            new Promise(function(e, t) {
                                return setTimeout(function() {
                                    return t("#SLOW_TIMEOUT");
                                }, 5000);
                            })
                        ]).catch(function(e) {
                            if ("#SLOW_TIMEOUT" !== e) throw e;
                            console.warn("async parser handler taking longer than 5000 ms");
                        });
                    }, t100.prototype.parse = function(e142, t) {
                        var r, i = this._activeBuffer.x, n = this._activeBuffer.y, o = 0, s = this._parseStack.paused;
                        if (s) {
                            if (r = this._parser.parse(this._parseBuffer, this._parseStack.decodedLength, t)) return this._logSlowResolvingAsync(r), r;
                            i = this._parseStack.cursorStartX, n = this._parseStack.cursorStartY, this._parseStack.paused = !1, e142.length > b && (o = this._parseStack.position + b);
                        }
                        if (this._logService.logLevel <= g3.LogLevelEnum.DEBUG && this._logService.debug("parsing data" + ("string" == typeof e142 ? ' "' + e142 + '"' : ' "' + Array.prototype.map.call(e142, function(e) {
                            return String.fromCharCode(e);
                        }).join("") + '"'), "string" == typeof e142 ? e142.split("").map(function(e) {
                            return e.charCodeAt(0);
                        }) : e142), this._parseBuffer.length < e142.length && this._parseBuffer.length < b && (this._parseBuffer = new Uint32Array(Math.min(e142.length, b))), s || this._dirtyRowService.clearRange(), e142.length > b) for(var a = o; a < e142.length; a += b){
                            var c = a + b < e142.length ? a + b : e142.length, l = "string" == typeof e142 ? this._stringDecoder.decode(e142.substring(a, c), this._parseBuffer) : this._utf8Decoder.decode(e142.subarray(a, c), this._parseBuffer);
                            if (r = this._parser.parse(this._parseBuffer, l)) return this._preserveStack(i, n, l, a), this._logSlowResolvingAsync(r), r;
                        }
                        else if (!s && (l = "string" == typeof e142 ? this._stringDecoder.decode(e142, this._parseBuffer) : this._utf8Decoder.decode(e142, this._parseBuffer), r = this._parser.parse(this._parseBuffer, l))) return this._preserveStack(i, n, l, 0), this._logSlowResolvingAsync(r), r;
                        this._activeBuffer.x === i && this._activeBuffer.y === n || this._onCursorMove.fire(), this._onRequestRefreshRows.fire(this._dirtyRowService.start, this._dirtyRowService.end);
                    }, t100.prototype.print = function(e, t, r) {
                        var i, n, o = this._charsetService.charset, s = this._optionsService.rawOptions.screenReaderMode, a = this._bufferService.cols, c = this._coreService.decPrivateModes.wraparound, l = this._coreService.modes.insertMode, h = this._curAttrData, f = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                        this._dirtyRowService.markDirty(this._activeBuffer.y), this._activeBuffer.x && r - t > 0 && 2 === f.getWidth(this._activeBuffer.x - 1) && f.setCellFromCodePoint(this._activeBuffer.x - 1, 0, 1, h.fg, h.bg, h.extended);
                        for(var _ = t; _ < r; ++_){
                            if (i = e[_], n = this._unicodeService.wcwidth(i), i < 127 && o) {
                                var p = o[String.fromCharCode(i)];
                                p && (i = p.charCodeAt(0));
                            }
                            if (s && this._onA11yChar.fire((0, u.stringFromCodePoint)(i)), n || !this._activeBuffer.x) {
                                if (this._activeBuffer.x + n - 1 >= a) {
                                    if (c) {
                                        for(; this._activeBuffer.x < a;)f.setCellFromCodePoint(this._activeBuffer.x++, 0, 1, h.fg, h.bg, h.extended);
                                        this._activeBuffer.x = 0, this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData(), !0)) : (this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = !0), f = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                                    } else if (this._activeBuffer.x = a - 1, 2 === n) continue;
                                }
                                if (l && (f.insertCells(this._activeBuffer.x, n, this._activeBuffer.getNullCell(h), h), 2 === f.getWidth(a - 1) && f.setCellFromCodePoint(a - 1, d4.NULL_CELL_CODE, d4.NULL_CELL_WIDTH, h.fg, h.bg, h.extended)), f.setCellFromCodePoint(this._activeBuffer.x++, i, n, h.fg, h.bg, h.extended), n > 0) for(; --n;)f.setCellFromCodePoint(this._activeBuffer.x++, 0, 0, h.fg, h.bg, h.extended);
                            } else f.getWidth(this._activeBuffer.x - 1) ? f.addCodepointToCell(this._activeBuffer.x - 1, i) : f.addCodepointToCell(this._activeBuffer.x - 2, i);
                        }
                        r - t > 0 && (f.loadCell(this._activeBuffer.x - 1, this._workCell), 2 === this._workCell.getWidth() || this._workCell.getCode() > 65535 ? this._parser.precedingCodepoint = 0 : this._workCell.isCombined() ? this._parser.precedingCodepoint = this._workCell.getChars().charCodeAt(0) : this._parser.precedingCodepoint = this._workCell.content), this._activeBuffer.x < a && r - t > 0 && 0 === f.getWidth(this._activeBuffer.x) && !f.hasContent(this._activeBuffer.x) && f.setCellFromCodePoint(this._activeBuffer.x, 0, 1, h.fg, h.bg, h.extended), this._dirtyRowService.markDirty(this._activeBuffer.y);
                    }, t100.prototype.registerCsiHandler = function(e143, t) {
                        var r = this;
                        return "t" !== e143.final || e143.prefix || e143.intermediates ? this._parser.registerCsiHandler(e143, t) : this._parser.registerCsiHandler(e143, function(e) {
                            return !w(e.params[0], r._optionsService.rawOptions.windowOptions) || t(e);
                        });
                    }, t100.prototype.registerDcsHandler = function(e, t) {
                        return this._parser.registerDcsHandler(e, new m3.DcsHandler(t));
                    }, t100.prototype.registerEscHandler = function(e, t) {
                        return this._parser.registerEscHandler(e, t);
                    }, t100.prototype.registerOscHandler = function(e, t) {
                        return this._parser.registerOscHandler(e, new y.OscHandler(t));
                    }, t100.prototype.bell = function() {
                        return this._onRequestBell.fire(), !0;
                    }, t100.prototype.lineFeed = function() {
                        return this._dirtyRowService.markDirty(this._activeBuffer.y), this._optionsService.rawOptions.convertEol && (this._activeBuffer.x = 0), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.x >= this._bufferService.cols && this._activeBuffer.x--, this._dirtyRowService.markDirty(this._activeBuffer.y), this._onLineFeed.fire(), !0;
                    }, t100.prototype.carriageReturn = function() {
                        return this._activeBuffer.x = 0, !0;
                    }, t100.prototype.backspace = function() {
                        var e;
                        if (!this._coreService.decPrivateModes.reverseWraparound) return this._restrictCursor(), this._activeBuffer.x > 0 && this._activeBuffer.x--, !0;
                        if (this._restrictCursor(this._bufferService.cols), this._activeBuffer.x > 0) this._activeBuffer.x--;
                        else if (0 === this._activeBuffer.x && this._activeBuffer.y > this._activeBuffer.scrollTop && this._activeBuffer.y <= this._activeBuffer.scrollBottom && (null === (e = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y)) || void 0 === e ? void 0 : e.isWrapped)) {
                            this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = !1, this._activeBuffer.y--, this._activeBuffer.x = this._bufferService.cols - 1;
                            var t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                            t.hasWidth(this._activeBuffer.x) && !t.hasContent(this._activeBuffer.x) && this._activeBuffer.x--;
                        }
                        return this._restrictCursor(), !0;
                    }, t100.prototype.tab = function() {
                        if (this._activeBuffer.x >= this._bufferService.cols) return !0;
                        var e = this._activeBuffer.x;
                        return this._activeBuffer.x = this._activeBuffer.nextStop(), this._optionsService.rawOptions.screenReaderMode && this._onA11yTab.fire(this._activeBuffer.x - e), !0;
                    }, t100.prototype.shiftOut = function() {
                        return this._charsetService.setgLevel(1), !0;
                    }, t100.prototype.shiftIn = function() {
                        return this._charsetService.setgLevel(0), !0;
                    }, t100.prototype._restrictCursor = function(e) {
                        void 0 === e && (e = this._bufferService.cols - 1), this._activeBuffer.x = Math.min(e, Math.max(0, this._activeBuffer.x)), this._activeBuffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._activeBuffer.scrollBottom, Math.max(this._activeBuffer.scrollTop, this._activeBuffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._activeBuffer.y)), this._dirtyRowService.markDirty(this._activeBuffer.y);
                    }, t100.prototype._setCursor = function(e, t) {
                        this._dirtyRowService.markDirty(this._activeBuffer.y), this._coreService.decPrivateModes.origin ? (this._activeBuffer.x = e, this._activeBuffer.y = this._activeBuffer.scrollTop + t) : (this._activeBuffer.x = e, this._activeBuffer.y = t), this._restrictCursor(), this._dirtyRowService.markDirty(this._activeBuffer.y);
                    }, t100.prototype._moveCursor = function(e, t) {
                        this._restrictCursor(), this._setCursor(this._activeBuffer.x + e, this._activeBuffer.y + t);
                    }, t100.prototype.cursorUp = function(e) {
                        var t = this._activeBuffer.y - this._activeBuffer.scrollTop;
                        return t >= 0 ? this._moveCursor(0, -Math.min(t, e.params[0] || 1)) : this._moveCursor(0, -(e.params[0] || 1)), !0;
                    }, t100.prototype.cursorDown = function(e) {
                        var t = this._activeBuffer.scrollBottom - this._activeBuffer.y;
                        return t >= 0 ? this._moveCursor(0, Math.min(t, e.params[0] || 1)) : this._moveCursor(0, e.params[0] || 1), !0;
                    }, t100.prototype.cursorForward = function(e) {
                        return this._moveCursor(e.params[0] || 1, 0), !0;
                    }, t100.prototype.cursorBackward = function(e) {
                        return this._moveCursor(-(e.params[0] || 1), 0), !0;
                    }, t100.prototype.cursorNextLine = function(e) {
                        return this.cursorDown(e), this._activeBuffer.x = 0, !0;
                    }, t100.prototype.cursorPrecedingLine = function(e) {
                        return this.cursorUp(e), this._activeBuffer.x = 0, !0;
                    }, t100.prototype.cursorCharAbsolute = function(e) {
                        return this._setCursor((e.params[0] || 1) - 1, this._activeBuffer.y), !0;
                    }, t100.prototype.cursorPosition = function(e) {
                        return this._setCursor(e.length >= 2 ? (e.params[1] || 1) - 1 : 0, (e.params[0] || 1) - 1), !0;
                    }, t100.prototype.charPosAbsolute = function(e) {
                        return this._setCursor((e.params[0] || 1) - 1, this._activeBuffer.y), !0;
                    }, t100.prototype.hPositionRelative = function(e) {
                        return this._moveCursor(e.params[0] || 1, 0), !0;
                    }, t100.prototype.linePosAbsolute = function(e) {
                        return this._setCursor(this._activeBuffer.x, (e.params[0] || 1) - 1), !0;
                    }, t100.prototype.vPositionRelative = function(e) {
                        return this._moveCursor(0, e.params[0] || 1), !0;
                    }, t100.prototype.hVPosition = function(e) {
                        return this.cursorPosition(e), !0;
                    }, t100.prototype.tabClear = function(e) {
                        var t = e.params[0];
                        return 0 === t ? delete this._activeBuffer.tabs[this._activeBuffer.x] : 3 === t && (this._activeBuffer.tabs = {}), !0;
                    }, t100.prototype.cursorForwardTab = function(e) {
                        if (this._activeBuffer.x >= this._bufferService.cols) return !0;
                        for(var t = e.params[0] || 1; t--;)this._activeBuffer.x = this._activeBuffer.nextStop();
                        return !0;
                    }, t100.prototype.cursorBackwardTab = function(e) {
                        if (this._activeBuffer.x >= this._bufferService.cols) return !0;
                        for(var t = e.params[0] || 1; t--;)this._activeBuffer.x = this._activeBuffer.prevStop();
                        return !0;
                    }, t100.prototype._eraseInBufferLine = function(e, t, r, i) {
                        void 0 === i && (i = !1);
                        var n = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
                        n.replaceCells(t, r, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i && (n.isWrapped = !1);
                    }, t100.prototype._resetBufferLine = function(e) {
                        var t = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
                        t.fill(this._activeBuffer.getNullCell(this._eraseAttrData())), this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase + e), t.isWrapped = !1;
                    }, t100.prototype.eraseInDisplay = function(e) {
                        var t;
                        switch(this._restrictCursor(this._bufferService.cols), e.params[0]){
                            case 0:
                                for(t = this._activeBuffer.y, this._dirtyRowService.markDirty(t), this._eraseInBufferLine(t++, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x); t < this._bufferService.rows; t++)this._resetBufferLine(t);
                                this._dirtyRowService.markDirty(t);
                                break;
                            case 1:
                                for(t = this._activeBuffer.y, this._dirtyRowService.markDirty(t), this._eraseInBufferLine(t, 0, this._activeBuffer.x + 1, !0), this._activeBuffer.x + 1 >= this._bufferService.cols && (this._activeBuffer.lines.get(t + 1).isWrapped = !1); t--;)this._resetBufferLine(t);
                                this._dirtyRowService.markDirty(0);
                                break;
                            case 2:
                                for(t = this._bufferService.rows, this._dirtyRowService.markDirty(t - 1); t--;)this._resetBufferLine(t);
                                this._dirtyRowService.markDirty(0);
                                break;
                            case 3:
                                var r = this._activeBuffer.lines.length - this._bufferService.rows;
                                r > 0 && (this._activeBuffer.lines.trimStart(r), this._activeBuffer.ybase = Math.max(this._activeBuffer.ybase - r, 0), this._activeBuffer.ydisp = Math.max(this._activeBuffer.ydisp - r, 0), this._onScroll.fire(0));
                        }
                        return !0;
                    }, t100.prototype.eraseInLine = function(e) {
                        switch(this._restrictCursor(this._bufferService.cols), e.params[0]){
                            case 0:
                                this._eraseInBufferLine(this._activeBuffer.y, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x);
                                break;
                            case 1:
                                this._eraseInBufferLine(this._activeBuffer.y, 0, this._activeBuffer.x + 1, !1);
                                break;
                            case 2:
                                this._eraseInBufferLine(this._activeBuffer.y, 0, this._bufferService.cols, !0);
                        }
                        return this._dirtyRowService.markDirty(this._activeBuffer.y), !0;
                    }, t100.prototype.insertLines = function(e) {
                        this._restrictCursor();
                        var t = e.params[0] || 1;
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        for(var r = this._activeBuffer.ybase + this._activeBuffer.y, i = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, n = this._bufferService.rows - 1 + this._activeBuffer.ybase - i + 1; t--;)this._activeBuffer.lines.splice(n - 1, 1), this._activeBuffer.lines.splice(r, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, !0;
                    }, t100.prototype.deleteLines = function(e) {
                        this._restrictCursor();
                        var t = e.params[0] || 1;
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        var r, i = this._activeBuffer.ybase + this._activeBuffer.y;
                        for(r = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, r = this._bufferService.rows - 1 + this._activeBuffer.ybase - r; t--;)this._activeBuffer.lines.splice(i, 1), this._activeBuffer.lines.splice(r, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, !0;
                    }, t100.prototype.insertChars = function(e) {
                        this._restrictCursor();
                        var t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                        return t && (t.insertCells(this._activeBuffer.x, e.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._activeBuffer.y)), !0;
                    }, t100.prototype.deleteChars = function(e) {
                        this._restrictCursor();
                        var t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                        return t && (t.deleteCells(this._activeBuffer.x, e.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._activeBuffer.y)), !0;
                    }, t100.prototype.scrollUp = function(e) {
                        for(var t = e.params[0] || 1; t--;)this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }, t100.prototype.scrollDown = function(e) {
                        for(var t = e.params[0] || 1; t--;)this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 0, this._activeBuffer.getBlankLine(f10.DEFAULT_ATTR_DATA));
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }, t100.prototype.scrollLeft = function(e) {
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        for(var t = e.params[0] || 1, r = this._activeBuffer.scrollTop; r <= this._activeBuffer.scrollBottom; ++r){
                            var i = this._activeBuffer.lines.get(this._activeBuffer.ybase + r);
                            i.deleteCells(0, t, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i.isWrapped = !1;
                        }
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }, t100.prototype.scrollRight = function(e) {
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        for(var t = e.params[0] || 1, r = this._activeBuffer.scrollTop; r <= this._activeBuffer.scrollBottom; ++r){
                            var i = this._activeBuffer.lines.get(this._activeBuffer.ybase + r);
                            i.insertCells(0, t, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i.isWrapped = !1;
                        }
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }, t100.prototype.insertColumns = function(e) {
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        for(var t = e.params[0] || 1, r = this._activeBuffer.scrollTop; r <= this._activeBuffer.scrollBottom; ++r){
                            var i = this._activeBuffer.lines.get(this._activeBuffer.ybase + r);
                            i.insertCells(this._activeBuffer.x, t, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i.isWrapped = !1;
                        }
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }, t100.prototype.deleteColumns = function(e) {
                        if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) return !0;
                        for(var t = e.params[0] || 1, r = this._activeBuffer.scrollTop; r <= this._activeBuffer.scrollBottom; ++r){
                            var i = this._activeBuffer.lines.get(this._activeBuffer.ybase + r);
                            i.deleteCells(this._activeBuffer.x, t, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i.isWrapped = !1;
                        }
                        return this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), !0;
                    }, t100.prototype.eraseChars = function(e) {
                        this._restrictCursor();
                        var t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                        return t && (t.replaceCells(this._activeBuffer.x, this._activeBuffer.x + (e.params[0] || 1), this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowService.markDirty(this._activeBuffer.y)), !0;
                    }, t100.prototype.repeatPrecedingCharacter = function(e) {
                        if (!this._parser.precedingCodepoint) return !0;
                        for(var t = e.params[0] || 1, r = new Uint32Array(t), i = 0; i < t; ++i)r[i] = this._parser.precedingCodepoint;
                        return this.print(r, 0, r.length), !0;
                    }, t100.prototype.sendDeviceAttributesPrimary = function(e) {
                        return e.params[0] > 0 || (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen") ? this._coreService.triggerDataEvent(s34.C0.ESC + "[?1;2c") : this._is("linux") && this._coreService.triggerDataEvent(s34.C0.ESC + "[?6c")), !0;
                    }, t100.prototype.sendDeviceAttributesSecondary = function(e) {
                        return e.params[0] > 0 || (this._is("xterm") ? this._coreService.triggerDataEvent(s34.C0.ESC + "[>0;276;0c") : this._is("rxvt-unicode") ? this._coreService.triggerDataEvent(s34.C0.ESC + "[>85;95;0c") : this._is("linux") ? this._coreService.triggerDataEvent(e.params[0] + "c") : this._is("screen") && this._coreService.triggerDataEvent(s34.C0.ESC + "[>83;40003;0c")), !0;
                    }, t100.prototype._is = function(e) {
                        return 0 === (this._optionsService.rawOptions.termName + "").indexOf(e);
                    }, t100.prototype.setMode = function(e) {
                        for(var t = 0; t < e.length; t++)4 === e.params[t] && (this._coreService.modes.insertMode = !0);
                        return !0;
                    }, t100.prototype.setModePrivate = function(e) {
                        for(var t = 0; t < e.length; t++)switch(e.params[t]){
                            case 1:
                                this._coreService.decPrivateModes.applicationCursorKeys = !0;
                                break;
                            case 2:
                                this._charsetService.setgCharset(0, a31.DEFAULT_CHARSET), this._charsetService.setgCharset(1, a31.DEFAULT_CHARSET), this._charsetService.setgCharset(2, a31.DEFAULT_CHARSET), this._charsetService.setgCharset(3, a31.DEFAULT_CHARSET);
                                break;
                            case 3:
                                this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
                                break;
                            case 6:
                                this._coreService.decPrivateModes.origin = !0, this._setCursor(0, 0);
                                break;
                            case 7:
                                this._coreService.decPrivateModes.wraparound = !0;
                                break;
                            case 12:
                                break;
                            case 45:
                                this._coreService.decPrivateModes.reverseWraparound = !0;
                                break;
                            case 66:
                                this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = !0, this._onRequestSyncScrollBar.fire();
                                break;
                            case 9:
                                this._coreMouseService.activeProtocol = "X10";
                                break;
                            case 1000:
                                this._coreMouseService.activeProtocol = "VT200";
                                break;
                            case 1002:
                                this._coreMouseService.activeProtocol = "DRAG";
                                break;
                            case 1003:
                                this._coreMouseService.activeProtocol = "ANY";
                                break;
                            case 1004:
                                this._coreService.decPrivateModes.sendFocus = !0, this._onRequestSendFocus.fire();
                                break;
                            case 1005:
                                this._logService.debug("DECSET 1005 not supported (see #2507)");
                                break;
                            case 1006:
                                this._coreMouseService.activeEncoding = "SGR";
                                break;
                            case 1015:
                                this._logService.debug("DECSET 1015 not supported (see #2507)");
                                break;
                            case 25:
                                this._coreService.isCursorHidden = !1;
                                break;
                            case 1048:
                                this.saveCursor();
                                break;
                            case 1049:
                                this.saveCursor();
                            case 47:
                            case 1047:
                                this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._coreService.isCursorInitialized = !0, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                                break;
                            case 2004:
                                this._coreService.decPrivateModes.bracketedPasteMode = !0;
                        }
                        return !0;
                    }, t100.prototype.resetMode = function(e) {
                        for(var t = 0; t < e.length; t++)4 === e.params[t] && (this._coreService.modes.insertMode = !1);
                        return !0;
                    }, t100.prototype.resetModePrivate = function(e) {
                        for(var t = 0; t < e.length; t++)switch(e.params[t]){
                            case 1:
                                this._coreService.decPrivateModes.applicationCursorKeys = !1;
                                break;
                            case 3:
                                this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
                                break;
                            case 6:
                                this._coreService.decPrivateModes.origin = !1, this._setCursor(0, 0);
                                break;
                            case 7:
                                this._coreService.decPrivateModes.wraparound = !1;
                                break;
                            case 12:
                                break;
                            case 45:
                                this._coreService.decPrivateModes.reverseWraparound = !1;
                                break;
                            case 66:
                                this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = !1, this._onRequestSyncScrollBar.fire();
                                break;
                            case 9:
                            case 1000:
                            case 1002:
                            case 1003:
                                this._coreMouseService.activeProtocol = "NONE";
                                break;
                            case 1004:
                                this._coreService.decPrivateModes.sendFocus = !1;
                                break;
                            case 1005:
                                this._logService.debug("DECRST 1005 not supported (see #2507)");
                                break;
                            case 1006:
                                this._coreMouseService.activeEncoding = "DEFAULT";
                                break;
                            case 1015:
                                this._logService.debug("DECRST 1015 not supported (see #2507)");
                                break;
                            case 25:
                                this._coreService.isCursorHidden = !0;
                                break;
                            case 1048:
                                this.restoreCursor();
                                break;
                            case 1049:
                            case 47:
                            case 1047:
                                this._bufferService.buffers.activateNormalBuffer(), 1049 === e.params[t] && this.restoreCursor(), this._coreService.isCursorInitialized = !0, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                                break;
                            case 2004:
                                this._coreService.decPrivateModes.bracketedPasteMode = !1;
                        }
                        return !0;
                    }, t100.prototype._updateAttrColor = function(e, t, r, i, n) {
                        return 2 === t ? (e |= 50331648, e &= -16777216, e |= v3.AttributeData.fromColorRGB([
                            r,
                            i,
                            n
                        ])) : 5 === t && (e &= -50331904, e |= 33554432 | 255 & r), e;
                    }, t100.prototype._extractColor = function(e, t, r) {
                        var i = [
                            0,
                            0,
                            -1,
                            0,
                            0,
                            0
                        ], n = 0, o = 0;
                        do {
                            if (i[o + n] = e.params[t + o], e.hasSubParams(t + o)) {
                                var s = e.getSubParams(t + o), a = 0;
                                do 5 === i[1] && (n = 1), i[o + a + 1 + n] = s[a];
                                while (++a < s.length && a + o + 1 + n < i.length)
                                break;
                            }
                            if (5 === i[1] && o + n >= 2 || 2 === i[1] && o + n >= 5) break;
                            i[1] && (n = 1);
                        }while (++o + t < e.length && o + n < i.length)
                        for(a = 2; a < i.length; ++a)-1 === i[a] && (i[a] = 0);
                        switch(i[0]){
                            case 38:
                                r.fg = this._updateAttrColor(r.fg, i[1], i[3], i[4], i[5]);
                                break;
                            case 48:
                                r.bg = this._updateAttrColor(r.bg, i[1], i[3], i[4], i[5]);
                                break;
                            case 58:
                                r.extended = r.extended.clone(), r.extended.underlineColor = this._updateAttrColor(r.extended.underlineColor, i[1], i[3], i[4], i[5]);
                        }
                        return o;
                    }, t100.prototype._processUnderline = function(e, t) {
                        t.extended = t.extended.clone(), (!~e || e > 5) && (e = 1), t.extended.underlineStyle = e, t.fg |= 268435456, 0 === e && (t.fg &= -268435457), t.updateExtended();
                    }, t100.prototype.charAttributes = function(e) {
                        if (1 === e.length && 0 === e.params[0]) return this._curAttrData.fg = f10.DEFAULT_ATTR_DATA.fg, this._curAttrData.bg = f10.DEFAULT_ATTR_DATA.bg, !0;
                        for(var t, r = e.length, i = this._curAttrData, n = 0; n < r; n++)(t = e.params[n]) >= 30 && t <= 37 ? (i.fg &= -50331904, i.fg |= 16777216 | t - 30) : t >= 40 && t <= 47 ? (i.bg &= -50331904, i.bg |= 16777216 | t - 40) : t >= 90 && t <= 97 ? (i.fg &= -50331904, i.fg |= 16777224 | t - 90) : t >= 100 && t <= 107 ? (i.bg &= -50331904, i.bg |= 16777224 | t - 100) : 0 === t ? (i.fg = f10.DEFAULT_ATTR_DATA.fg, i.bg = f10.DEFAULT_ATTR_DATA.bg) : 1 === t ? i.fg |= 134217728 : 3 === t ? i.bg |= 67108864 : 4 === t ? (i.fg |= 268435456, this._processUnderline(e.hasSubParams(n) ? e.getSubParams(n)[0] : 1, i)) : 5 === t ? i.fg |= 536870912 : 7 === t ? i.fg |= 67108864 : 8 === t ? i.fg |= 1073741824 : 9 === t ? i.fg |= 2147483648 : 2 === t ? i.bg |= 134217728 : 21 === t ? this._processUnderline(2, i) : 22 === t ? (i.fg &= -134217729, i.bg &= -134217729) : 23 === t ? i.bg &= -67108865 : 24 === t ? i.fg &= -268435457 : 25 === t ? i.fg &= -536870913 : 27 === t ? i.fg &= -67108865 : 28 === t ? i.fg &= -1073741825 : 29 === t ? i.fg &= 2147483647 : 39 === t ? (i.fg &= -67108864, i.fg |= 16777215 & f10.DEFAULT_ATTR_DATA.fg) : 49 === t ? (i.bg &= -67108864, i.bg |= 16777215 & f10.DEFAULT_ATTR_DATA.bg) : 38 === t || 48 === t || 58 === t ? n += this._extractColor(e, n, i) : 59 === t ? (i.extended = i.extended.clone(), i.extended.underlineColor = -1, i.updateExtended()) : 100 === t ? (i.fg &= -67108864, i.fg |= 16777215 & f10.DEFAULT_ATTR_DATA.fg, i.bg &= -67108864, i.bg |= 16777215 & f10.DEFAULT_ATTR_DATA.bg) : this._logService.debug("Unknown SGR attribute: %d.", t);
                        return !0;
                    }, t100.prototype.deviceStatus = function(e) {
                        switch(e.params[0]){
                            case 5:
                                this._coreService.triggerDataEvent(s34.C0.ESC + "[0n");
                                break;
                            case 6:
                                var t = this._activeBuffer.y + 1, r = this._activeBuffer.x + 1;
                                this._coreService.triggerDataEvent(s34.C0.ESC + "[" + t + ";" + r + "R");
                        }
                        return !0;
                    }, t100.prototype.deviceStatusPrivate = function(e) {
                        if (6 === e.params[0]) {
                            var t = this._activeBuffer.y + 1, r = this._activeBuffer.x + 1;
                            this._coreService.triggerDataEvent(s34.C0.ESC + "[?" + t + ";" + r + "R");
                        }
                        return !0;
                    }, t100.prototype.softReset = function(e) {
                        return this._coreService.isCursorHidden = !1, this._onRequestSyncScrollBar.fire(), this._activeBuffer.scrollTop = 0, this._activeBuffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = f10.DEFAULT_ATTR_DATA.clone(), this._coreService.reset(), this._charsetService.reset(), this._activeBuffer.savedX = 0, this._activeBuffer.savedY = this._activeBuffer.ybase, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, this._coreService.decPrivateModes.origin = !1, !0;
                    }, t100.prototype.setCursorStyle = function(e) {
                        var t = e.params[0] || 1;
                        switch(t){
                            case 1:
                            case 2:
                                this._optionsService.options.cursorStyle = "block";
                                break;
                            case 3:
                            case 4:
                                this._optionsService.options.cursorStyle = "underline";
                                break;
                            case 5:
                            case 6:
                                this._optionsService.options.cursorStyle = "bar";
                        }
                        var r = t % 2 == 1;
                        return this._optionsService.options.cursorBlink = r, !0;
                    }, t100.prototype.setScrollRegion = function(e) {
                        var t, r = e.params[0] || 1;
                        return (e.length < 2 || (t = e.params[1]) > this._bufferService.rows || 0 === t) && (t = this._bufferService.rows), t > r && (this._activeBuffer.scrollTop = r - 1, this._activeBuffer.scrollBottom = t - 1, this._setCursor(0, 0)), !0;
                    }, t100.prototype.windowOptions = function(e) {
                        if (!w(e.params[0], this._optionsService.rawOptions.windowOptions)) return !0;
                        var t = e.length > 1 ? e.params[1] : 0;
                        switch(e.params[0]){
                            case 14:
                                2 !== t && this._onRequestWindowsOptionsReport.fire(o32.GET_WIN_SIZE_PIXELS);
                                break;
                            case 16:
                                this._onRequestWindowsOptionsReport.fire(o32.GET_CELL_SIZE_PIXELS);
                                break;
                            case 18:
                                this._bufferService && this._coreService.triggerDataEvent(s34.C0.ESC + "[8;" + this._bufferService.rows + ";" + this._bufferService.cols + "t");
                                break;
                            case 22:
                                0 !== t && 2 !== t || (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > 10 && this._windowTitleStack.shift()), 0 !== t && 1 !== t || (this._iconNameStack.push(this._iconName), this._iconNameStack.length > 10 && this._iconNameStack.shift());
                                break;
                            case 23:
                                0 !== t && 2 !== t || this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), 0 !== t && 1 !== t || this._iconNameStack.length && this.setIconName(this._iconNameStack.pop());
                        }
                        return !0;
                    }, t100.prototype.saveCursor = function(e) {
                        return this._activeBuffer.savedX = this._activeBuffer.x, this._activeBuffer.savedY = this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, !0;
                    }, t100.prototype.restoreCursor = function(e) {
                        return this._activeBuffer.x = this._activeBuffer.savedX || 0, this._activeBuffer.y = Math.max(this._activeBuffer.savedY - this._activeBuffer.ybase, 0), this._curAttrData.fg = this._activeBuffer.savedCurAttrData.fg, this._curAttrData.bg = this._activeBuffer.savedCurAttrData.bg, this._charsetService.charset = this._savedCharset, this._activeBuffer.savedCharset && (this._charsetService.charset = this._activeBuffer.savedCharset), this._restrictCursor(), !0;
                    }, t100.prototype.setTitle = function(e) {
                        return this._windowTitle = e, this._onTitleChange.fire(e), !0;
                    }, t100.prototype.setIconName = function(e) {
                        return this._iconName = e, !0;
                    }, t100.prototype.setOrReportIndexedColor = function(e) {
                        for(var t = [], r = e.split(";"); r.length > 1;){
                            var i = r.shift(), n = r.shift();
                            if (/^\d+$/.exec(i)) {
                                var o = parseInt(i);
                                if (0 <= o && o < 256) {
                                    if ("?" === n) t.push({
                                        type: 0,
                                        index: o
                                    });
                                    else {
                                        var s = (0, S2.parseColor)(n);
                                        s && t.push({
                                            type: 1,
                                            index: o,
                                            color: s
                                        });
                                    }
                                }
                            }
                        }
                        return t.length && this._onColor.fire(t), !0;
                    }, t100.prototype._setOrReportSpecialColor = function(e, t) {
                        for(var r = e.split(";"), i = 0; i < r.length && !(t >= this._specialColors.length); ++i, ++t)if ("?" === r[i]) this._onColor.fire([
                            {
                                type: 0,
                                index: this._specialColors[t]
                            }
                        ]);
                        else {
                            var n = (0, S2.parseColor)(r[i]);
                            n && this._onColor.fire([
                                {
                                    type: 1,
                                    index: this._specialColors[t],
                                    color: n
                                }
                            ]);
                        }
                        return !0;
                    }, t100.prototype.setOrReportFgColor = function(e) {
                        return this._setOrReportSpecialColor(e, 0);
                    }, t100.prototype.setOrReportBgColor = function(e) {
                        return this._setOrReportSpecialColor(e, 1);
                    }, t100.prototype.setOrReportCursorColor = function(e) {
                        return this._setOrReportSpecialColor(e, 2);
                    }, t100.prototype.restoreIndexedColor = function(e) {
                        if (!e) return this._onColor.fire([
                            {
                                type: 2
                            }
                        ]), !0;
                        for(var t = [], r = e.split(";"), i = 0; i < r.length; ++i)if (/^\d+$/.exec(r[i])) {
                            var n = parseInt(r[i]);
                            0 <= n && n < 256 && t.push({
                                type: 2,
                                index: n
                            });
                        }
                        return t.length && this._onColor.fire(t), !0;
                    }, t100.prototype.restoreFgColor = function(e) {
                        return this._onColor.fire([
                            {
                                type: 2,
                                index: 256
                            }
                        ]), !0;
                    }, t100.prototype.restoreBgColor = function(e) {
                        return this._onColor.fire([
                            {
                                type: 2,
                                index: 257
                            }
                        ]), !0;
                    }, t100.prototype.restoreCursorColor = function(e) {
                        return this._onColor.fire([
                            {
                                type: 2,
                                index: 258
                            }
                        ]), !0;
                    }, t100.prototype.nextLine = function() {
                        return this._activeBuffer.x = 0, this.index(), !0;
                    }, t100.prototype.keypadApplicationMode = function() {
                        return this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = !0, this._onRequestSyncScrollBar.fire(), !0;
                    }, t100.prototype.keypadNumericMode = function() {
                        return this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = !1, this._onRequestSyncScrollBar.fire(), !0;
                    }, t100.prototype.selectDefaultCharset = function() {
                        return this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, a31.DEFAULT_CHARSET), !0;
                    }, t100.prototype.selectCharset = function(e) {
                        return 2 !== e.length ? (this.selectDefaultCharset(), !0) : ("/" === e[0] || this._charsetService.setgCharset(C1[e[0]], a31.CHARSETS[e[1]] || a31.DEFAULT_CHARSET), !0);
                    }, t100.prototype.index = function() {
                        return this._restrictCursor(), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._restrictCursor(), !0;
                    }, t100.prototype.tabSet = function() {
                        return this._activeBuffer.tabs[this._activeBuffer.x] = !0, !0;
                    }, t100.prototype.reverseIndex = function() {
                        if (this._restrictCursor(), this._activeBuffer.y === this._activeBuffer.scrollTop) {
                            var e = this._activeBuffer.scrollBottom - this._activeBuffer.scrollTop;
                            this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase + this._activeBuffer.y, e, 1), this._activeBuffer.lines.set(this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.getBlankLine(this._eraseAttrData())), this._dirtyRowService.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
                        } else this._activeBuffer.y--, this._restrictCursor();
                        return !0;
                    }, t100.prototype.fullReset = function() {
                        return this._parser.reset(), this._onRequestReset.fire(), !0;
                    }, t100.prototype.reset = function() {
                        this._curAttrData = f10.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = f10.DEFAULT_ATTR_DATA.clone();
                    }, t100.prototype._eraseAttrData = function() {
                        return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= 67108863 & this._curAttrData.bg, this._eraseAttrDataInternal;
                    }, t100.prototype.setgLevel = function(e) {
                        return this._charsetService.setgLevel(e), !0;
                    }, t100.prototype.screenAlignmentPattern = function() {
                        var e = new p3.CellData;
                        e.content = 4194304 | "E".charCodeAt(0), e.fg = this._curAttrData.fg, e.bg = this._curAttrData.bg, this._setCursor(0, 0);
                        for(var t = 0; t < this._bufferService.rows; ++t){
                            var r = this._activeBuffer.ybase + this._activeBuffer.y + t, i = this._activeBuffer.lines.get(r);
                            i && (i.fill(e), i.isWrapped = !1);
                        }
                        return this._dirtyRowService.markAllDirty(), this._setCursor(0, 0), !0;
                    }, t100;
                }(l18.Disposable);
                t98.InputHandler = E;
            },
            844: (e144, t102)=>{
                Object.defineProperty(t102, "__esModule", {
                    value: !0
                }), t102.getDisposeArrayDisposable = t102.disposeArray = t102.Disposable = void 0;
                var r54 = function() {
                    function e145() {
                        this._disposables = [], this._isDisposed = !1;
                    }
                    return e145.prototype.dispose = function() {
                        this._isDisposed = !0;
                        for(var e = 0, t = this._disposables; e < t.length; e++)t[e].dispose();
                        this._disposables.length = 0;
                    }, e145.prototype.register = function(e) {
                        return this._disposables.push(e), e;
                    }, e145.prototype.unregister = function(e) {
                        var t = this._disposables.indexOf(e);
                        -1 !== t && this._disposables.splice(t, 1);
                    }, e145;
                }();
                function i(e) {
                    for(var t = 0, r = e; t < r.length; t++)r[t].dispose();
                    e.length = 0;
                }
                t102.Disposable = r54, t102.disposeArray = i, t102.getDisposeArrayDisposable = function(e) {
                    return {
                        dispose: function() {
                            return i(e);
                        }
                    };
                };
            },
            6114: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isLinux = t.isWindows = t.isIphone = t.isIpad = t.isMac = t.isSafari = t.isLegacyEdge = t.isFirefox = void 0;
                var r = "undefined" == typeof navigator, i = r ? "node" : navigator.userAgent, n = r ? "node" : navigator.platform;
                t.isFirefox = i.includes("Firefox"), t.isLegacyEdge = i.includes("Edge"), t.isSafari = /^((?!chrome|android).)*safari/i.test(i), t.isMac = [
                    "Macintosh",
                    "MacIntel",
                    "MacPPC",
                    "Mac68K"
                ].includes(n), t.isIpad = "iPad" === n, t.isIphone = "iPhone" === n, t.isWindows = [
                    "Windows",
                    "Win16",
                    "Win32",
                    "WinCE"
                ].includes(n), t.isLinux = n.indexOf("Linux") >= 0;
            },
            8273: (e146, t103)=>{
                function r55(e, t, r, i) {
                    if (void 0 === r && (r = 0), void 0 === i && (i = e.length), r >= e.length) return e;
                    r = (e.length + r) % e.length, i = i >= e.length ? e.length : (e.length + i) % e.length;
                    for(var n = r; n < i; ++n)e[n] = t;
                    return e;
                }
                Object.defineProperty(t103, "__esModule", {
                    value: !0
                }), t103.concat = t103.fillFallback = t103.fill = void 0, t103.fill = function(e, t, i, n) {
                    return e.fill ? e.fill(t, i, n) : r55(e, t, i, n);
                }, t103.fillFallback = r55, t103.concat = function(e, t) {
                    var r = new e.constructor(e.length + t.length);
                    return r.set(e), r.set(t, e.length), r;
                };
            },
            9282: (e147, t104, r56)=>{
                Object.defineProperty(t104, "__esModule", {
                    value: !0
                }), t104.updateWindowsModeWrappedState = void 0;
                var i = r56(643);
                t104.updateWindowsModeWrappedState = function(e) {
                    var t = e.buffer.lines.get(e.buffer.ybase + e.buffer.y - 1), r = null == t ? void 0 : t.get(e.cols - 1), n = e.buffer.lines.get(e.buffer.ybase + e.buffer.y);
                    n && r && (n.isWrapped = r[i.CHAR_DATA_CODE_INDEX] !== i.NULL_CELL_CODE && r[i.CHAR_DATA_CODE_INDEX] !== i.WHITESPACE_CELL_CODE);
                };
            },
            3734: (e148, t105)=>{
                Object.defineProperty(t105, "__esModule", {
                    value: !0
                }), t105.ExtendedAttrs = t105.AttributeData = void 0;
                var r = function() {
                    function e149() {
                        this.fg = 0, this.bg = 0, this.extended = new i;
                    }
                    return e149.toColorRGB = function(e) {
                        return [
                            e >>> 16 & 255,
                            e >>> 8 & 255,
                            255 & e
                        ];
                    }, e149.fromColorRGB = function(e) {
                        return (255 & e[0]) << 16 | (255 & e[1]) << 8 | 255 & e[2];
                    }, e149.prototype.clone = function() {
                        var t = new e149;
                        return t.fg = this.fg, t.bg = this.bg, t.extended = this.extended.clone(), t;
                    }, e149.prototype.isInverse = function() {
                        return 67108864 & this.fg;
                    }, e149.prototype.isBold = function() {
                        return 134217728 & this.fg;
                    }, e149.prototype.isUnderline = function() {
                        return 268435456 & this.fg;
                    }, e149.prototype.isBlink = function() {
                        return 536870912 & this.fg;
                    }, e149.prototype.isInvisible = function() {
                        return 1073741824 & this.fg;
                    }, e149.prototype.isItalic = function() {
                        return 67108864 & this.bg;
                    }, e149.prototype.isDim = function() {
                        return 134217728 & this.bg;
                    }, e149.prototype.isStrikethrough = function() {
                        return 2147483648 & this.fg;
                    }, e149.prototype.getFgColorMode = function() {
                        return 50331648 & this.fg;
                    }, e149.prototype.getBgColorMode = function() {
                        return 50331648 & this.bg;
                    }, e149.prototype.isFgRGB = function() {
                        return 50331648 == (50331648 & this.fg);
                    }, e149.prototype.isBgRGB = function() {
                        return 50331648 == (50331648 & this.bg);
                    }, e149.prototype.isFgPalette = function() {
                        return 16777216 == (50331648 & this.fg) || 33554432 == (50331648 & this.fg);
                    }, e149.prototype.isBgPalette = function() {
                        return 16777216 == (50331648 & this.bg) || 33554432 == (50331648 & this.bg);
                    }, e149.prototype.isFgDefault = function() {
                        return 0 == (50331648 & this.fg);
                    }, e149.prototype.isBgDefault = function() {
                        return 0 == (50331648 & this.bg);
                    }, e149.prototype.isAttributeDefault = function() {
                        return 0 === this.fg && 0 === this.bg;
                    }, e149.prototype.getFgColor = function() {
                        switch(50331648 & this.fg){
                            case 16777216:
                            case 33554432:
                                return 255 & this.fg;
                            case 50331648:
                                return 16777215 & this.fg;
                            default:
                                return -1;
                        }
                    }, e149.prototype.getBgColor = function() {
                        switch(50331648 & this.bg){
                            case 16777216:
                            case 33554432:
                                return 255 & this.bg;
                            case 50331648:
                                return 16777215 & this.bg;
                            default:
                                return -1;
                        }
                    }, e149.prototype.hasExtendedAttrs = function() {
                        return 268435456 & this.bg;
                    }, e149.prototype.updateExtended = function() {
                        this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
                    }, e149.prototype.getUnderlineColor = function() {
                        if (268435456 & this.bg && ~this.extended.underlineColor) switch(50331648 & this.extended.underlineColor){
                            case 16777216:
                            case 33554432:
                                return 255 & this.extended.underlineColor;
                            case 50331648:
                                return 16777215 & this.extended.underlineColor;
                            default:
                                return this.getFgColor();
                        }
                        return this.getFgColor();
                    }, e149.prototype.getUnderlineColorMode = function() {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode();
                    }, e149.prototype.isUnderlineColorRGB = function() {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 == (50331648 & this.extended.underlineColor) : this.isFgRGB();
                    }, e149.prototype.isUnderlineColorPalette = function() {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 16777216 == (50331648 & this.extended.underlineColor) || 33554432 == (50331648 & this.extended.underlineColor) : this.isFgPalette();
                    }, e149.prototype.isUnderlineColorDefault = function() {
                        return 268435456 & this.bg && ~this.extended.underlineColor ? 0 == (50331648 & this.extended.underlineColor) : this.isFgDefault();
                    }, e149.prototype.getUnderlineStyle = function() {
                        return 268435456 & this.fg ? 268435456 & this.bg ? this.extended.underlineStyle : 1 : 0;
                    }, e149;
                }();
                t105.AttributeData = r;
                var i = function() {
                    function e150(e, t) {
                        void 0 === e && (e = 0), void 0 === t && (t = -1), this.underlineStyle = e, this.underlineColor = t;
                    }
                    return e150.prototype.clone = function() {
                        return new e150(this.underlineStyle, this.underlineColor);
                    }, e150.prototype.isEmpty = function() {
                        return 0 === this.underlineStyle;
                    }, e150;
                }();
                t105.ExtendedAttrs = i;
            },
            9092: (e151, t106, r57)=>{
                Object.defineProperty(t106, "__esModule", {
                    value: !0
                }), t106.BufferStringIterator = t106.Buffer = t106.MAX_BUFFER_SIZE = void 0;
                var i39 = r57(6349), n36 = r57(8437), o33 = r57(511), s35 = r57(643), a32 = r57(4634), c17 = r57(4863), l19 = r57(7116), h15 = r57(3734);
                t106.MAX_BUFFER_SIZE = 4294967295;
                var u12 = function() {
                    function e152(e, t, r) {
                        this._hasScrollback = e, this._optionsService = t, this._bufferService = r, this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.savedY = 0, this.savedX = 0, this.savedCurAttrData = n36.DEFAULT_ATTR_DATA.clone(), this.savedCharset = l19.DEFAULT_CHARSET, this.markers = [], this._nullCell = o33.CellData.fromCharData([
                            0,
                            s35.NULL_CELL_CHAR,
                            s35.NULL_CELL_WIDTH,
                            s35.NULL_CELL_CODE
                        ]), this._whitespaceCell = o33.CellData.fromCharData([
                            0,
                            s35.WHITESPACE_CELL_CHAR,
                            s35.WHITESPACE_CELL_WIDTH,
                            s35.WHITESPACE_CELL_CODE
                        ]), this._isClearing = !1, this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new i39.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
                    }
                    return e152.prototype.getNullCell = function(e) {
                        return e ? (this._nullCell.fg = e.fg, this._nullCell.bg = e.bg, this._nullCell.extended = e.extended) : (this._nullCell.fg = 0, this._nullCell.bg = 0, this._nullCell.extended = new h15.ExtendedAttrs), this._nullCell;
                    }, e152.prototype.getWhitespaceCell = function(e) {
                        return e ? (this._whitespaceCell.fg = e.fg, this._whitespaceCell.bg = e.bg, this._whitespaceCell.extended = e.extended) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0, this._whitespaceCell.extended = new h15.ExtendedAttrs), this._whitespaceCell;
                    }, e152.prototype.getBlankLine = function(e, t) {
                        return new n36.BufferLine(this._bufferService.cols, this.getNullCell(e), t);
                    }, Object.defineProperty(e152.prototype, "hasScrollback", {
                        get: function() {
                            return this._hasScrollback && this.lines.maxLength > this._rows;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e152.prototype, "isCursorInViewport", {
                        get: function() {
                            var e = this.ybase + this.y - this.ydisp;
                            return e >= 0 && e < this._rows;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e152.prototype._getCorrectBufferLength = function(e) {
                        if (!this._hasScrollback) return e;
                        var r = e + this._optionsService.rawOptions.scrollback;
                        return r > t106.MAX_BUFFER_SIZE ? t106.MAX_BUFFER_SIZE : r;
                    }, e152.prototype.fillViewportRows = function(e) {
                        if (0 === this.lines.length) {
                            void 0 === e && (e = n36.DEFAULT_ATTR_DATA);
                            for(var t = this._rows; t--;)this.lines.push(this.getBlankLine(e));
                        }
                    }, e152.prototype.clear = function() {
                        this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new i39.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
                    }, e152.prototype.resize = function(e, t) {
                        var r = this.getNullCell(n36.DEFAULT_ATTR_DATA), i = this._getCorrectBufferLength(t);
                        if (i > this.lines.maxLength && (this.lines.maxLength = i), this.lines.length > 0) {
                            if (this._cols < e) for(var o = 0; o < this.lines.length; o++)this.lines.get(o).resize(e, r);
                            var s = 0;
                            if (this._rows < t) for(var a = this._rows; a < t; a++)this.lines.length < t + this.ybase && (this._optionsService.rawOptions.windowsMode ? this.lines.push(new n36.BufferLine(e, r)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + s + 1 ? (this.ybase--, s++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new n36.BufferLine(e, r)));
                            else for(a = this._rows; a > t; a--)this.lines.length > t + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
                            if (i < this.lines.maxLength) {
                                var c = this.lines.length - i;
                                c > 0 && (this.lines.trimStart(c), this.ybase = Math.max(this.ybase - c, 0), this.ydisp = Math.max(this.ydisp - c, 0), this.savedY = Math.max(this.savedY - c, 0)), this.lines.maxLength = i;
                            }
                            this.x = Math.min(this.x, e - 1), this.y = Math.min(this.y, t - 1), s && (this.y += s), this.savedX = Math.min(this.savedX, e - 1), this.scrollTop = 0;
                        }
                        if (this.scrollBottom = t - 1, this._isReflowEnabled && (this._reflow(e, t), this._cols > e)) for(o = 0; o < this.lines.length; o++)this.lines.get(o).resize(e, r);
                        this._cols = e, this._rows = t;
                    }, Object.defineProperty(e152.prototype, "_isReflowEnabled", {
                        get: function() {
                            return this._hasScrollback && !this._optionsService.rawOptions.windowsMode;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e152.prototype._reflow = function(e, t) {
                        this._cols !== e && (e > this._cols ? this._reflowLarger(e, t) : this._reflowSmaller(e, t));
                    }, e152.prototype._reflowLarger = function(e, t) {
                        var r = (0, a32.reflowLargerGetLinesToRemove)(this.lines, this._cols, e, this.ybase + this.y, this.getNullCell(n36.DEFAULT_ATTR_DATA));
                        if (r.length > 0) {
                            var i = (0, a32.reflowLargerCreateNewLayout)(this.lines, r);
                            (0, a32.reflowLargerApplyNewLayout)(this.lines, i.layout), this._reflowLargerAdjustViewport(e, t, i.countRemoved);
                        }
                    }, e152.prototype._reflowLargerAdjustViewport = function(e, t, r) {
                        for(var i = this.getNullCell(n36.DEFAULT_ATTR_DATA), o = r; o-- > 0;)0 === this.ybase ? (this.y > 0 && this.y--, this.lines.length < t && this.lines.push(new n36.BufferLine(e, i))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
                        this.savedY = Math.max(this.savedY - r, 0);
                    }, e152.prototype._reflowSmaller = function(e, t) {
                        for(var r = this.getNullCell(n36.DEFAULT_ATTR_DATA), i = [], o = 0, s = this.lines.length - 1; s >= 0; s--){
                            var c = this.lines.get(s);
                            if (!(!c || !c.isWrapped && c.getTrimmedLength() <= e)) {
                                for(var l = [
                                    c
                                ]; c.isWrapped && s > 0;)c = this.lines.get(--s), l.unshift(c);
                                var h = this.ybase + this.y;
                                if (!(h >= s && h < s + l.length)) {
                                    var u, f = l[l.length - 1].getTrimmedLength(), _ = (0, a32.reflowSmallerGetNewLineLengths)(l, this._cols, e), d = _.length - l.length;
                                    u = 0 === this.ybase && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + d) : Math.max(0, this.lines.length - this.lines.maxLength + d);
                                    for(var p = [], v = 0; v < d; v++){
                                        var g = this.getBlankLine(n36.DEFAULT_ATTR_DATA, !0);
                                        p.push(g);
                                    }
                                    p.length > 0 && (i.push({
                                        start: s + l.length + o,
                                        newLines: p
                                    }), o += p.length), l.push.apply(l, p);
                                    var y = _.length - 1, m = _[y];
                                    0 === m && (m = _[--y]);
                                    for(var S = l.length - d - 1, C = f; S >= 0;){
                                        var b = Math.min(C, m);
                                        if (void 0 === l[y]) break;
                                        if (l[y].copyCellsFrom(l[S], C - b, m - b, b, !0), 0 == (m -= b) && (m = _[--y]), 0 == (C -= b)) {
                                            S--;
                                            var w = Math.max(S, 0);
                                            C = (0, a32.getWrappedLineTrimmedLength)(l, w, this._cols);
                                        }
                                    }
                                    for(v = 0; v < l.length; v++)_[v] < e && l[v].setCell(_[v], r);
                                    for(var L = d - u; L-- > 0;)0 === this.ybase ? this.y < t - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + o) - t && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
                                    this.savedY = Math.min(this.savedY + d, this.ybase + t - 1);
                                }
                            }
                        }
                        if (i.length > 0) {
                            var E = [], x = [];
                            for(v = 0; v < this.lines.length; v++)x.push(this.lines.get(v));
                            var k = this.lines.length, M = k - 1, A = 0, R = i[A];
                            this.lines.length = Math.min(this.lines.maxLength, this.lines.length + o);
                            var O = 0;
                            for(v = Math.min(this.lines.maxLength - 1, k + o - 1); v >= 0; v--)if (R && R.start > M + O) {
                                for(var T = R.newLines.length - 1; T >= 0; T--)this.lines.set(v--, R.newLines[T]);
                                v++, E.push({
                                    index: M + 1,
                                    amount: R.newLines.length
                                }), O += R.newLines.length, R = i[++A];
                            } else this.lines.set(v, x[M--]);
                            var D = 0;
                            for(v = E.length - 1; v >= 0; v--)E[v].index += D, this.lines.onInsertEmitter.fire(E[v]), D += E[v].amount;
                            var B = Math.max(0, k + o - this.lines.maxLength);
                            B > 0 && this.lines.onTrimEmitter.fire(B);
                        }
                    }, e152.prototype.stringIndexToBufferIndex = function(e, t, r) {
                        for(void 0 === r && (r = !1); t;){
                            var i = this.lines.get(e);
                            if (!i) return [
                                -1,
                                -1
                            ];
                            for(var n = r ? i.getTrimmedLength() : i.length, o = 0; o < n; ++o)if (i.get(o)[s35.CHAR_DATA_WIDTH_INDEX] && (t -= i.get(o)[s35.CHAR_DATA_CHAR_INDEX].length || 1), t < 0) return [
                                e,
                                o
                            ];
                            e++;
                        }
                        return [
                            e,
                            0
                        ];
                    }, e152.prototype.translateBufferLineToString = function(e, t, r, i) {
                        void 0 === r && (r = 0);
                        var n = this.lines.get(e);
                        return n ? n.translateToString(t, r, i) : "";
                    }, e152.prototype.getWrappedRangeForLine = function(e) {
                        for(var t = e, r = e; t > 0 && this.lines.get(t).isWrapped;)t--;
                        for(; r + 1 < this.lines.length && this.lines.get(r + 1).isWrapped;)r++;
                        return {
                            first: t,
                            last: r
                        };
                    }, e152.prototype.setupTabStops = function(e) {
                        for(null != e ? this.tabs[e] || (e = this.prevStop(e)) : (this.tabs = {}, e = 0); e < this._cols; e += this._optionsService.rawOptions.tabStopWidth)this.tabs[e] = !0;
                    }, e152.prototype.prevStop = function(e) {
                        for(null == e && (e = this.x); !this.tabs[--e] && e > 0;);
                        return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e;
                    }, e152.prototype.nextStop = function(e) {
                        for(null == e && (e = this.x); !this.tabs[++e] && e < this._cols;);
                        return e >= this._cols ? this._cols - 1 : e < 0 ? 0 : e;
                    }, e152.prototype.clearMarkers = function(e) {
                        if (this._isClearing = !0, void 0 !== e) for(var t = 0; t < this.markers.length; t++)this.markers[t].line === e && (this.markers[t].dispose(), this.markers.splice(t--, 1));
                        else {
                            for(var r = 0, i = this.markers; r < i.length; r++)i[r].dispose();
                            this.markers = [];
                        }
                        this._isClearing = !1;
                    }, e152.prototype.addMarker = function(e153) {
                        var t = this, r = new c17.Marker(e153);
                        return this.markers.push(r), r.register(this.lines.onTrim(function(e) {
                            r.line -= e, r.line < 0 && r.dispose();
                        })), r.register(this.lines.onInsert(function(e) {
                            r.line >= e.index && (r.line += e.amount);
                        })), r.register(this.lines.onDelete(function(e) {
                            r.line >= e.index && r.line < e.index + e.amount && r.dispose(), r.line > e.index && (r.line -= e.amount);
                        })), r.register(r.onDispose(function() {
                            return t._removeMarker(r);
                        })), r;
                    }, e152.prototype._removeMarker = function(e) {
                        this._isClearing || this.markers.splice(this.markers.indexOf(e), 1);
                    }, e152.prototype.iterator = function(e, t, r, i, n) {
                        return new f11(this, e, t, r, i, n);
                    }, e152;
                }();
                t106.Buffer = u12;
                var f11 = function() {
                    function e154(e, t, r, i, n, o) {
                        void 0 === r && (r = 0), void 0 === i && (i = e.lines.length), void 0 === n && (n = 0), void 0 === o && (o = 0), this._buffer = e, this._trimRight = t, this._startIndex = r, this._endIndex = i, this._startOverscan = n, this._endOverscan = o, this._startIndex < 0 && (this._startIndex = 0), this._endIndex > this._buffer.lines.length && (this._endIndex = this._buffer.lines.length), this._current = this._startIndex;
                    }
                    return e154.prototype.hasNext = function() {
                        return this._current < this._endIndex;
                    }, e154.prototype.next = function() {
                        var e = this._buffer.getWrappedRangeForLine(this._current);
                        e.first < this._startIndex - this._startOverscan && (e.first = this._startIndex - this._startOverscan), e.last > this._endIndex + this._endOverscan && (e.last = this._endIndex + this._endOverscan), e.first = Math.max(e.first, 0), e.last = Math.min(e.last, this._buffer.lines.length);
                        for(var t = "", r = e.first; r <= e.last; ++r)t += this._buffer.translateBufferLineToString(r, this._trimRight);
                        return this._current = e.last + 1, {
                            range: e,
                            content: t
                        };
                    }, e154;
                }();
                t106.BufferStringIterator = f11;
            },
            8437: (e155, t107, r58)=>{
                Object.defineProperty(t107, "__esModule", {
                    value: !0
                }), t107.BufferLine = t107.DEFAULT_ATTR_DATA = void 0;
                var i40 = r58(482), n37 = r58(643), o34 = r58(511), s36 = r58(3734);
                t107.DEFAULT_ATTR_DATA = Object.freeze(new s36.AttributeData);
                var a33 = function() {
                    function e156(e, t, r) {
                        void 0 === r && (r = !1), this.isWrapped = r, this._combined = {}, this._extendedAttrs = {}, this._data = new Uint32Array(3 * e);
                        for(var i = t || o34.CellData.fromCharData([
                            0,
                            n37.NULL_CELL_CHAR,
                            n37.NULL_CELL_WIDTH,
                            n37.NULL_CELL_CODE
                        ]), s = 0; s < e; ++s)this.setCell(s, i);
                        this.length = e;
                    }
                    return e156.prototype.get = function(e) {
                        var t = this._data[3 * e + 0], r = 2097151 & t;
                        return [
                            this._data[3 * e + 1],
                            2097152 & t ? this._combined[e] : r ? (0, i40.stringFromCodePoint)(r) : "",
                            t >> 22,
                            2097152 & t ? this._combined[e].charCodeAt(this._combined[e].length - 1) : r
                        ];
                    }, e156.prototype.set = function(e, t) {
                        this._data[3 * e + 1] = t[n37.CHAR_DATA_ATTR_INDEX], t[n37.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[e] = t[1], this._data[3 * e + 0] = 2097152 | e | t[n37.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[3 * e + 0] = t[n37.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | t[n37.CHAR_DATA_WIDTH_INDEX] << 22;
                    }, e156.prototype.getWidth = function(e) {
                        return this._data[3 * e + 0] >> 22;
                    }, e156.prototype.hasWidth = function(e) {
                        return 12582912 & this._data[3 * e + 0];
                    }, e156.prototype.getFg = function(e) {
                        return this._data[3 * e + 1];
                    }, e156.prototype.getBg = function(e) {
                        return this._data[3 * e + 2];
                    }, e156.prototype.hasContent = function(e) {
                        return 4194303 & this._data[3 * e + 0];
                    }, e156.prototype.getCodePoint = function(e) {
                        var t = this._data[3 * e + 0];
                        return 2097152 & t ? this._combined[e].charCodeAt(this._combined[e].length - 1) : 2097151 & t;
                    }, e156.prototype.isCombined = function(e) {
                        return 2097152 & this._data[3 * e + 0];
                    }, e156.prototype.getString = function(e) {
                        var t = this._data[3 * e + 0];
                        return 2097152 & t ? this._combined[e] : 2097151 & t ? (0, i40.stringFromCodePoint)(2097151 & t) : "";
                    }, e156.prototype.loadCell = function(e, t) {
                        var r = 3 * e;
                        return t.content = this._data[r + 0], t.fg = this._data[r + 1], t.bg = this._data[r + 2], 2097152 & t.content && (t.combinedData = this._combined[e]), 268435456 & t.bg && (t.extended = this._extendedAttrs[e]), t;
                    }, e156.prototype.setCell = function(e, t) {
                        2097152 & t.content && (this._combined[e] = t.combinedData), 268435456 & t.bg && (this._extendedAttrs[e] = t.extended), this._data[3 * e + 0] = t.content, this._data[3 * e + 1] = t.fg, this._data[3 * e + 2] = t.bg;
                    }, e156.prototype.setCellFromCodePoint = function(e, t, r, i, n, o) {
                        268435456 & n && (this._extendedAttrs[e] = o), this._data[3 * e + 0] = t | r << 22, this._data[3 * e + 1] = i, this._data[3 * e + 2] = n;
                    }, e156.prototype.addCodepointToCell = function(e, t) {
                        var r = this._data[3 * e + 0];
                        2097152 & r ? this._combined[e] += (0, i40.stringFromCodePoint)(t) : (2097151 & r ? (this._combined[e] = (0, i40.stringFromCodePoint)(2097151 & r) + (0, i40.stringFromCodePoint)(t), r &= -2097152, r |= 2097152) : r = t | 4194304, this._data[3 * e + 0] = r);
                    }, e156.prototype.insertCells = function(e, t, r, i) {
                        if ((e %= this.length) && 2 === this.getWidth(e - 1) && this.setCellFromCodePoint(e - 1, 0, 1, (null == i ? void 0 : i.fg) || 0, (null == i ? void 0 : i.bg) || 0, (null == i ? void 0 : i.extended) || new s36.ExtendedAttrs), t < this.length - e) {
                            for(var n = new o34.CellData, a = this.length - e - t - 1; a >= 0; --a)this.setCell(e + t + a, this.loadCell(e + a, n));
                            for(a = 0; a < t; ++a)this.setCell(e + a, r);
                        } else for(a = e; a < this.length; ++a)this.setCell(a, r);
                        2 === this.getWidth(this.length - 1) && this.setCellFromCodePoint(this.length - 1, 0, 1, (null == i ? void 0 : i.fg) || 0, (null == i ? void 0 : i.bg) || 0, (null == i ? void 0 : i.extended) || new s36.ExtendedAttrs);
                    }, e156.prototype.deleteCells = function(e, t, r, i) {
                        if (e %= this.length, t < this.length - e) {
                            for(var n = new o34.CellData, a = 0; a < this.length - e - t; ++a)this.setCell(e + a, this.loadCell(e + t + a, n));
                            for(a = this.length - t; a < this.length; ++a)this.setCell(a, r);
                        } else for(a = e; a < this.length; ++a)this.setCell(a, r);
                        e && 2 === this.getWidth(e - 1) && this.setCellFromCodePoint(e - 1, 0, 1, (null == i ? void 0 : i.fg) || 0, (null == i ? void 0 : i.bg) || 0, (null == i ? void 0 : i.extended) || new s36.ExtendedAttrs), 0 !== this.getWidth(e) || this.hasContent(e) || this.setCellFromCodePoint(e, 0, 1, (null == i ? void 0 : i.fg) || 0, (null == i ? void 0 : i.bg) || 0, (null == i ? void 0 : i.extended) || new s36.ExtendedAttrs);
                    }, e156.prototype.replaceCells = function(e, t, r, i) {
                        for(e && 2 === this.getWidth(e - 1) && this.setCellFromCodePoint(e - 1, 0, 1, (null == i ? void 0 : i.fg) || 0, (null == i ? void 0 : i.bg) || 0, (null == i ? void 0 : i.extended) || new s36.ExtendedAttrs), t < this.length && 2 === this.getWidth(t - 1) && this.setCellFromCodePoint(t, 0, 1, (null == i ? void 0 : i.fg) || 0, (null == i ? void 0 : i.bg) || 0, (null == i ? void 0 : i.extended) || new s36.ExtendedAttrs); e < t && e < this.length;)this.setCell(e++, r);
                    }, e156.prototype.resize = function(e, t) {
                        if (e !== this.length) {
                            if (e > this.length) {
                                var r = new Uint32Array(3 * e);
                                this.length && (3 * e < this._data.length ? r.set(this._data.subarray(0, 3 * e)) : r.set(this._data)), this._data = r;
                                for(var i = this.length; i < e; ++i)this.setCell(i, t);
                            } else if (e) {
                                (r = new Uint32Array(3 * e)).set(this._data.subarray(0, 3 * e)), this._data = r;
                                var n = Object.keys(this._combined);
                                for(i = 0; i < n.length; i++){
                                    var o = parseInt(n[i], 10);
                                    o >= e && delete this._combined[o];
                                }
                            } else this._data = new Uint32Array(0), this._combined = {};
                            this.length = e;
                        }
                    }, e156.prototype.fill = function(e) {
                        this._combined = {}, this._extendedAttrs = {};
                        for(var t = 0; t < this.length; ++t)this.setCell(t, e);
                    }, e156.prototype.copyFrom = function(e) {
                        for(var t in this.length !== e.length ? this._data = new Uint32Array(e._data) : this._data.set(e._data), this.length = e.length, this._combined = {}, e._combined)this._combined[t] = e._combined[t];
                        for(var t in this._extendedAttrs = {}, e._extendedAttrs)this._extendedAttrs[t] = e._extendedAttrs[t];
                        this.isWrapped = e.isWrapped;
                    }, e156.prototype.clone = function() {
                        var t = new e156(0);
                        for(var r in t._data = new Uint32Array(this._data), t.length = this.length, this._combined)t._combined[r] = this._combined[r];
                        for(var r in this._extendedAttrs)t._extendedAttrs[r] = this._extendedAttrs[r];
                        return t.isWrapped = this.isWrapped, t;
                    }, e156.prototype.getTrimmedLength = function() {
                        for(var e = this.length - 1; e >= 0; --e)if (4194303 & this._data[3 * e + 0]) return e + (this._data[3 * e + 0] >> 22);
                        return 0;
                    }, e156.prototype.copyCellsFrom = function(e, t, r, i, n) {
                        var o = e._data;
                        if (n) for(var s = i - 1; s >= 0; s--)for(var a = 0; a < 3; a++)this._data[3 * (r + s) + a] = o[3 * (t + s) + a];
                        else for(s = 0; s < i; s++)for(a = 0; a < 3; a++)this._data[3 * (r + s) + a] = o[3 * (t + s) + a];
                        var c = Object.keys(e._combined);
                        for(a = 0; a < c.length; a++){
                            var l = parseInt(c[a], 10);
                            l >= t && (this._combined[l - t + r] = e._combined[l]);
                        }
                    }, e156.prototype.translateToString = function(e, t, r) {
                        void 0 === e && (e = !1), void 0 === t && (t = 0), void 0 === r && (r = this.length), e && (r = Math.min(r, this.getTrimmedLength()));
                        for(var o = ""; t < r;){
                            var s = this._data[3 * t + 0], a = 2097151 & s;
                            o += 2097152 & s ? this._combined[t] : a ? (0, i40.stringFromCodePoint)(a) : n37.WHITESPACE_CELL_CHAR, t += s >> 22 || 1;
                        }
                        return o;
                    }, e156;
                }();
                t107.BufferLine = a33;
            },
            4841: (e157, t108)=>{
                Object.defineProperty(t108, "__esModule", {
                    value: !0
                }), t108.getRangeLength = void 0, t108.getRangeLength = function(e, t) {
                    if (e.start.y > e.end.y) throw new Error("Buffer range end (" + e.end.x + ", " + e.end.y + ") cannot be before start (" + e.start.x + ", " + e.start.y + ")");
                    return t * (e.end.y - e.start.y) + (e.end.x - e.start.x + 1);
                };
            },
            4634: (e158, t109)=>{
                function r59(e, t, r) {
                    if (t === e.length - 1) return e[t].getTrimmedLength();
                    var i = !e[t].hasContent(r - 1) && 1 === e[t].getWidth(r - 1), n = 2 === e[t + 1].getWidth(0);
                    return i && n ? r - 1 : r;
                }
                Object.defineProperty(t109, "__esModule", {
                    value: !0
                }), t109.getWrappedLineTrimmedLength = t109.reflowSmallerGetNewLineLengths = t109.reflowLargerApplyNewLayout = t109.reflowLargerCreateNewLayout = t109.reflowLargerGetLinesToRemove = void 0, t109.reflowLargerGetLinesToRemove = function(e, t, i, n, o) {
                    for(var s = [], a = 0; a < e.length - 1; a++){
                        var c = a, l = e.get(++c);
                        if (l.isWrapped) {
                            for(var h = [
                                e.get(a)
                            ]; c < e.length && l.isWrapped;)h.push(l), l = e.get(++c);
                            if (n >= a && n < c) a += h.length - 1;
                            else {
                                for(var u = 0, f = r59(h, u, t), _ = 1, d = 0; _ < h.length;){
                                    var p = r59(h, _, t), v = p - d, g = i - f, y = Math.min(v, g);
                                    h[u].copyCellsFrom(h[_], d, f, y, !1), (f += y) === i && (u++, f = 0), (d += y) === p && (_++, d = 0), 0 === f && 0 !== u && 2 === h[u - 1].getWidth(i - 1) && (h[u].copyCellsFrom(h[u - 1], i - 1, f++, 1, !1), h[u - 1].setCell(i - 1, o));
                                }
                                h[u].replaceCells(f, i, o);
                                for(var m = 0, S = h.length - 1; S > 0 && (S > u || 0 === h[S].getTrimmedLength()); S--)m++;
                                m > 0 && (s.push(a + h.length - m), s.push(m)), a += h.length - 1;
                            }
                        }
                    }
                    return s;
                }, t109.reflowLargerCreateNewLayout = function(e, t) {
                    for(var r = [], i = 0, n = t[i], o = 0, s = 0; s < e.length; s++)if (n === s) {
                        var a = t[++i];
                        e.onDeleteEmitter.fire({
                            index: s - o,
                            amount: a
                        }), s += a - 1, o += a, n = t[++i];
                    } else r.push(s);
                    return {
                        layout: r,
                        countRemoved: o
                    };
                }, t109.reflowLargerApplyNewLayout = function(e, t) {
                    for(var r = [], i = 0; i < t.length; i++)r.push(e.get(t[i]));
                    for(i = 0; i < r.length; i++)e.set(i, r[i]);
                    e.length = t.length;
                }, t109.reflowSmallerGetNewLineLengths = function(e159, t110, i) {
                    for(var n38 = [], o = e159.map(function(i, n) {
                        return r59(e159, n, t110);
                    }).reduce(function(e, t) {
                        return e + t;
                    }), s = 0, a = 0, c = 0; c < o;){
                        if (o - c < i) {
                            n38.push(o - c);
                            break;
                        }
                        s += i;
                        var l = r59(e159, a, t110);
                        s > l && (s -= l, a++);
                        var h = 2 === e159[a].getWidth(s - 1);
                        h && s--;
                        var u = h ? i - 1 : i;
                        n38.push(u), c += u;
                    }
                    return n38;
                }, t109.getWrappedLineTrimmedLength = r59;
            },
            5295: function(e160, t111, r60) {
                var i41, n = this && this.__extends || (i41 = function(e161, t112) {
                    return i41 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i41(e161, t112);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i41(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t111, "__esModule", {
                    value: !0
                }), t111.BufferSet = void 0;
                var o = r60(9092), s = r60(8460), a = function(e162) {
                    function t113(t, r) {
                        var i = e162.call(this) || this;
                        return i._optionsService = t, i._bufferService = r, i._onBufferActivate = i.register(new s.EventEmitter), i.reset(), i;
                    }
                    return n(t113, e162), Object.defineProperty(t113.prototype, "onBufferActivate", {
                        get: function() {
                            return this._onBufferActivate.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t113.prototype.reset = function() {
                        this._normal = new o.Buffer(!0, this._optionsService, this._bufferService), this._normal.fillViewportRows(), this._alt = new o.Buffer(!1, this._optionsService, this._bufferService), this._activeBuffer = this._normal, this._onBufferActivate.fire({
                            activeBuffer: this._normal,
                            inactiveBuffer: this._alt
                        }), this.setupTabStops();
                    }, Object.defineProperty(t113.prototype, "alt", {
                        get: function() {
                            return this._alt;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t113.prototype, "active", {
                        get: function() {
                            return this._activeBuffer;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t113.prototype, "normal", {
                        get: function() {
                            return this._normal;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t113.prototype.activateNormalBuffer = function() {
                        this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({
                            activeBuffer: this._normal,
                            inactiveBuffer: this._alt
                        }));
                    }, t113.prototype.activateAltBuffer = function(e) {
                        this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({
                            activeBuffer: this._alt,
                            inactiveBuffer: this._normal
                        }));
                    }, t113.prototype.resize = function(e, t) {
                        this._normal.resize(e, t), this._alt.resize(e, t);
                    }, t113.prototype.setupTabStops = function(e) {
                        this._normal.setupTabStops(e), this._alt.setupTabStops(e);
                    }, t113;
                }(r60(844).Disposable);
                t111.BufferSet = a;
            },
            511: function(e163, t114, r61) {
                var i42, n = this && this.__extends || (i42 = function(e164, t115) {
                    return i42 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i42(e164, t115);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i42(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t114, "__esModule", {
                    value: !0
                }), t114.CellData = void 0;
                var o = r61(482), s = r61(643), a = r61(3734), c = function(e165) {
                    function t116() {
                        var t = null !== e165 && e165.apply(this, arguments) || this;
                        return t.content = 0, t.fg = 0, t.bg = 0, t.extended = new a.ExtendedAttrs, t.combinedData = "", t;
                    }
                    return n(t116, e165), t116.fromCharData = function(e) {
                        var r = new t116;
                        return r.setFromCharData(e), r;
                    }, t116.prototype.isCombined = function() {
                        return 2097152 & this.content;
                    }, t116.prototype.getWidth = function() {
                        return this.content >> 22;
                    }, t116.prototype.getChars = function() {
                        return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? (0, o.stringFromCodePoint)(2097151 & this.content) : "";
                    }, t116.prototype.getCode = function() {
                        return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
                    }, t116.prototype.setFromCharData = function(e) {
                        this.fg = e[s.CHAR_DATA_ATTR_INDEX], this.bg = 0;
                        var t = !1;
                        if (e[s.CHAR_DATA_CHAR_INDEX].length > 2) t = !0;
                        else if (2 === e[s.CHAR_DATA_CHAR_INDEX].length) {
                            var r = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                            if (55296 <= r && r <= 56319) {
                                var i = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                                56320 <= i && i <= 57343 ? this.content = 1024 * (r - 55296) + i - 56320 + 65536 | e[s.CHAR_DATA_WIDTH_INDEX] << 22 : t = !0;
                            } else t = !0;
                        } else this.content = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e[s.CHAR_DATA_WIDTH_INDEX] << 22;
                        t && (this.combinedData = e[s.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e[s.CHAR_DATA_WIDTH_INDEX] << 22);
                    }, t116.prototype.getAsCharData = function() {
                        return [
                            this.fg,
                            this.getChars(),
                            this.getWidth(),
                            this.getCode()
                        ];
                    }, t116;
                }(a.AttributeData);
                t114.CellData = c;
            },
            643: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.WHITESPACE_CELL_CODE = t.WHITESPACE_CELL_WIDTH = t.WHITESPACE_CELL_CHAR = t.NULL_CELL_CODE = t.NULL_CELL_WIDTH = t.NULL_CELL_CHAR = t.CHAR_DATA_CODE_INDEX = t.CHAR_DATA_WIDTH_INDEX = t.CHAR_DATA_CHAR_INDEX = t.CHAR_DATA_ATTR_INDEX = t.DEFAULT_ATTR = t.DEFAULT_COLOR = void 0, t.DEFAULT_COLOR = 256, t.DEFAULT_ATTR = 256 | t.DEFAULT_COLOR << 9, t.CHAR_DATA_ATTR_INDEX = 0, t.CHAR_DATA_CHAR_INDEX = 1, t.CHAR_DATA_WIDTH_INDEX = 2, t.CHAR_DATA_CODE_INDEX = 3, t.NULL_CELL_CHAR = "", t.NULL_CELL_WIDTH = 1, t.NULL_CELL_CODE = 0, t.WHITESPACE_CELL_CHAR = " ", t.WHITESPACE_CELL_WIDTH = 1, t.WHITESPACE_CELL_CODE = 32;
            },
            4863: function(e166, t117, r62) {
                var i43, n = this && this.__extends || (i43 = function(e167, t118) {
                    return i43 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i43(e167, t118);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i43(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t117, "__esModule", {
                    value: !0
                }), t117.Marker = void 0;
                var o = r62(8460), s = function(e) {
                    function t(r) {
                        var i = e.call(this) || this;
                        return i.line = r, i._id = t._nextId++, i.isDisposed = !1, i._onDispose = new o.EventEmitter, i;
                    }
                    return n(t, e), Object.defineProperty(t.prototype, "id", {
                        get: function() {
                            return this._id;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "onDispose", {
                        get: function() {
                            return this._onDispose.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.dispose = function() {
                        this.isDisposed || (this.isDisposed = !0, this.line = -1, this._onDispose.fire(), e.prototype.dispose.call(this));
                    }, t._nextId = 1, t;
                }(r62(844).Disposable);
                t117.Marker = s;
            },
            7116: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DEFAULT_CHARSET = t.CHARSETS = void 0, t.CHARSETS = {}, t.DEFAULT_CHARSET = t.CHARSETS.B, t.CHARSETS[0] = {
                    "`": "◆",
                    a: "▒",
                    b: "␉",
                    c: "␌",
                    d: "␍",
                    e: "␊",
                    f: "°",
                    g: "±",
                    h: "␤",
                    i: "␋",
                    j: "┘",
                    k: "┐",
                    l: "┌",
                    m: "└",
                    n: "┼",
                    o: "⎺",
                    p: "⎻",
                    q: "─",
                    r: "⎼",
                    s: "⎽",
                    t: "├",
                    u: "┤",
                    v: "┴",
                    w: "┬",
                    x: "│",
                    y: "≤",
                    z: "≥",
                    "{": "π",
                    "|": "≠",
                    "}": "£",
                    "~": "·"
                }, t.CHARSETS.A = {
                    "#": "£"
                }, t.CHARSETS.B = void 0, t.CHARSETS[4] = {
                    "#": "£",
                    "@": "¾",
                    "[": "ij",
                    "\\": "½",
                    "]": "|",
                    "{": "¨",
                    "|": "f",
                    "}": "¼",
                    "~": "´"
                }, t.CHARSETS.C = t.CHARSETS[5] = {
                    "[": "Ä",
                    "\\": "Ö",
                    "]": "Å",
                    "^": "Ü",
                    "`": "é",
                    "{": "ä",
                    "|": "ö",
                    "}": "å",
                    "~": "ü"
                }, t.CHARSETS.R = {
                    "#": "£",
                    "@": "à",
                    "[": "°",
                    "\\": "ç",
                    "]": "§",
                    "{": "é",
                    "|": "ù",
                    "}": "è",
                    "~": "¨"
                }, t.CHARSETS.Q = {
                    "@": "à",
                    "[": "â",
                    "\\": "ç",
                    "]": "ê",
                    "^": "î",
                    "`": "ô",
                    "{": "é",
                    "|": "ù",
                    "}": "è",
                    "~": "û"
                }, t.CHARSETS.K = {
                    "@": "§",
                    "[": "Ä",
                    "\\": "Ö",
                    "]": "Ü",
                    "{": "ä",
                    "|": "ö",
                    "}": "ü",
                    "~": "ß"
                }, t.CHARSETS.Y = {
                    "#": "£",
                    "@": "§",
                    "[": "°",
                    "\\": "ç",
                    "]": "é",
                    "`": "ù",
                    "{": "à",
                    "|": "ò",
                    "}": "è",
                    "~": "ì"
                }, t.CHARSETS.E = t.CHARSETS[6] = {
                    "@": "Ä",
                    "[": "Æ",
                    "\\": "Ø",
                    "]": "Å",
                    "^": "Ü",
                    "`": "ä",
                    "{": "æ",
                    "|": "ø",
                    "}": "å",
                    "~": "ü"
                }, t.CHARSETS.Z = {
                    "#": "£",
                    "@": "§",
                    "[": "¡",
                    "\\": "Ñ",
                    "]": "¿",
                    "{": "°",
                    "|": "ñ",
                    "}": "ç"
                }, t.CHARSETS.H = t.CHARSETS[7] = {
                    "@": "É",
                    "[": "Ä",
                    "\\": "Ö",
                    "]": "Å",
                    "^": "Ü",
                    "`": "é",
                    "{": "ä",
                    "|": "ö",
                    "}": "å",
                    "~": "ü"
                }, t.CHARSETS["="] = {
                    "#": "ù",
                    "@": "à",
                    "[": "é",
                    "\\": "ç",
                    "]": "ê",
                    "^": "î",
                    _: "è",
                    "`": "ô",
                    "{": "ä",
                    "|": "ö",
                    "}": "ü",
                    "~": "û"
                };
            },
            2584: (e, t)=>{
                var r, i;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.C1 = t.C0 = void 0, (i = t.C0 || (t.C0 = {})).NUL = "\0", i.SOH = "", i.STX = "", i.ETX = "", i.EOT = "", i.ENQ = "", i.ACK = "", i.BEL = "", i.BS = "\b", i.HT = "\t", i.LF = "\n", i.VT = "\v", i.FF = "\f", i.CR = "\r", i.SO = "", i.SI = "", i.DLE = "", i.DC1 = "", i.DC2 = "", i.DC3 = "", i.DC4 = "", i.NAK = "", i.SYN = "", i.ETB = "", i.CAN = "", i.EM = "", i.SUB = "", i.ESC = "", i.FS = "", i.GS = "", i.RS = "", i.US = "", i.SP = " ", i.DEL = "", (r = t.C1 || (t.C1 = {})).PAD = "", r.HOP = "", r.BPH = "", r.NBH = "", r.IND = "", r.NEL = "", r.SSA = "", r.ESA = "", r.HTS = "", r.HTJ = "", r.VTS = "", r.PLD = "", r.PLU = "", r.RI = "", r.SS2 = "", r.SS3 = "", r.DCS = "", r.PU1 = "", r.PU2 = "", r.STS = "", r.CCH = "", r.MW = "", r.SPA = "", r.EPA = "", r.SOS = "", r.SGCI = "", r.SCI = "", r.CSI = "", r.ST = "", r.OSC = "", r.PM = "", r.APC = "";
            },
            7399: (e168, t119, r63)=>{
                Object.defineProperty(t119, "__esModule", {
                    value: !0
                }), t119.evaluateKeyboardEvent = void 0;
                var i = r63(2584), n = {
                    48: [
                        "0",
                        ")"
                    ],
                    49: [
                        "1",
                        "!"
                    ],
                    50: [
                        "2",
                        "@"
                    ],
                    51: [
                        "3",
                        "#"
                    ],
                    52: [
                        "4",
                        "$"
                    ],
                    53: [
                        "5",
                        "%"
                    ],
                    54: [
                        "6",
                        "^"
                    ],
                    55: [
                        "7",
                        "&"
                    ],
                    56: [
                        "8",
                        "*"
                    ],
                    57: [
                        "9",
                        "("
                    ],
                    186: [
                        ";",
                        ":"
                    ],
                    187: [
                        "=",
                        "+"
                    ],
                    188: [
                        ",",
                        "<"
                    ],
                    189: [
                        "-",
                        "_"
                    ],
                    190: [
                        ".",
                        ">"
                    ],
                    191: [
                        "/",
                        "?"
                    ],
                    192: [
                        "`",
                        "~"
                    ],
                    219: [
                        "[",
                        "{"
                    ],
                    220: [
                        "\\",
                        "|"
                    ],
                    221: [
                        "]",
                        "}"
                    ],
                    222: [
                        "'",
                        '"'
                    ]
                };
                t119.evaluateKeyboardEvent = function(e, t, r, o) {
                    var s = {
                        type: 0,
                        cancel: !1,
                        key: void 0
                    }, a = (e.shiftKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.ctrlKey ? 4 : 0) | (e.metaKey ? 8 : 0);
                    switch(e.keyCode){
                        case 0:
                            "UIKeyInputUpArrow" === e.key ? s.key = t ? i.C0.ESC + "OA" : i.C0.ESC + "[A" : "UIKeyInputLeftArrow" === e.key ? s.key = t ? i.C0.ESC + "OD" : i.C0.ESC + "[D" : "UIKeyInputRightArrow" === e.key ? s.key = t ? i.C0.ESC + "OC" : i.C0.ESC + "[C" : "UIKeyInputDownArrow" === e.key && (s.key = t ? i.C0.ESC + "OB" : i.C0.ESC + "[B");
                            break;
                        case 8:
                            if (e.shiftKey) {
                                s.key = i.C0.BS;
                                break;
                            }
                            if (e.altKey) {
                                s.key = i.C0.ESC + i.C0.DEL;
                                break;
                            }
                            s.key = i.C0.DEL;
                            break;
                        case 9:
                            if (e.shiftKey) {
                                s.key = i.C0.ESC + "[Z";
                                break;
                            }
                            s.key = i.C0.HT, s.cancel = !0;
                            break;
                        case 13:
                            s.key = e.altKey ? i.C0.ESC + i.C0.CR : i.C0.CR, s.cancel = !0;
                            break;
                        case 27:
                            s.key = i.C0.ESC, e.altKey && (s.key = i.C0.ESC + i.C0.ESC), s.cancel = !0;
                            break;
                        case 37:
                            if (e.metaKey) break;
                            a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "D", s.key === i.C0.ESC + "[1;3D" && (s.key = i.C0.ESC + (r ? "b" : "[1;5D"))) : s.key = t ? i.C0.ESC + "OD" : i.C0.ESC + "[D";
                            break;
                        case 39:
                            if (e.metaKey) break;
                            a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "C", s.key === i.C0.ESC + "[1;3C" && (s.key = i.C0.ESC + (r ? "f" : "[1;5C"))) : s.key = t ? i.C0.ESC + "OC" : i.C0.ESC + "[C";
                            break;
                        case 38:
                            if (e.metaKey) break;
                            a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "A", r || s.key !== i.C0.ESC + "[1;3A" || (s.key = i.C0.ESC + "[1;5A")) : s.key = t ? i.C0.ESC + "OA" : i.C0.ESC + "[A";
                            break;
                        case 40:
                            if (e.metaKey) break;
                            a ? (s.key = i.C0.ESC + "[1;" + (a + 1) + "B", r || s.key !== i.C0.ESC + "[1;3B" || (s.key = i.C0.ESC + "[1;5B")) : s.key = t ? i.C0.ESC + "OB" : i.C0.ESC + "[B";
                            break;
                        case 45:
                            e.shiftKey || e.ctrlKey || (s.key = i.C0.ESC + "[2~");
                            break;
                        case 46:
                            s.key = a ? i.C0.ESC + "[3;" + (a + 1) + "~" : i.C0.ESC + "[3~";
                            break;
                        case 36:
                            s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "H" : t ? i.C0.ESC + "OH" : i.C0.ESC + "[H";
                            break;
                        case 35:
                            s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "F" : t ? i.C0.ESC + "OF" : i.C0.ESC + "[F";
                            break;
                        case 33:
                            e.shiftKey ? s.type = 2 : s.key = i.C0.ESC + "[5~";
                            break;
                        case 34:
                            e.shiftKey ? s.type = 3 : s.key = i.C0.ESC + "[6~";
                            break;
                        case 112:
                            s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "P" : i.C0.ESC + "OP";
                            break;
                        case 113:
                            s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "Q" : i.C0.ESC + "OQ";
                            break;
                        case 114:
                            s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "R" : i.C0.ESC + "OR";
                            break;
                        case 115:
                            s.key = a ? i.C0.ESC + "[1;" + (a + 1) + "S" : i.C0.ESC + "OS";
                            break;
                        case 116:
                            s.key = a ? i.C0.ESC + "[15;" + (a + 1) + "~" : i.C0.ESC + "[15~";
                            break;
                        case 117:
                            s.key = a ? i.C0.ESC + "[17;" + (a + 1) + "~" : i.C0.ESC + "[17~";
                            break;
                        case 118:
                            s.key = a ? i.C0.ESC + "[18;" + (a + 1) + "~" : i.C0.ESC + "[18~";
                            break;
                        case 119:
                            s.key = a ? i.C0.ESC + "[19;" + (a + 1) + "~" : i.C0.ESC + "[19~";
                            break;
                        case 120:
                            s.key = a ? i.C0.ESC + "[20;" + (a + 1) + "~" : i.C0.ESC + "[20~";
                            break;
                        case 121:
                            s.key = a ? i.C0.ESC + "[21;" + (a + 1) + "~" : i.C0.ESC + "[21~";
                            break;
                        case 122:
                            s.key = a ? i.C0.ESC + "[23;" + (a + 1) + "~" : i.C0.ESC + "[23~";
                            break;
                        case 123:
                            s.key = a ? i.C0.ESC + "[24;" + (a + 1) + "~" : i.C0.ESC + "[24~";
                            break;
                        default:
                            if (!e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
                                if (r && !o || !e.altKey || e.metaKey) !r || e.altKey || e.ctrlKey || e.shiftKey || !e.metaKey ? e.key && !e.ctrlKey && !e.altKey && !e.metaKey && e.keyCode >= 48 && 1 === e.key.length ? s.key = e.key : e.key && e.ctrlKey && "_" === e.key && (s.key = i.C0.US) : 65 === e.keyCode && (s.type = 1);
                                else {
                                    var c = n[e.keyCode], l = null == c ? void 0 : c[e.shiftKey ? 1 : 0];
                                    if (l) s.key = i.C0.ESC + l;
                                    else if (e.keyCode >= 65 && e.keyCode <= 90) {
                                        var h = e.ctrlKey ? e.keyCode - 64 : e.keyCode + 32;
                                        s.key = i.C0.ESC + String.fromCharCode(h);
                                    }
                                }
                            } else e.keyCode >= 65 && e.keyCode <= 90 ? s.key = String.fromCharCode(e.keyCode - 64) : 32 === e.keyCode ? s.key = i.C0.NUL : e.keyCode >= 51 && e.keyCode <= 55 ? s.key = String.fromCharCode(e.keyCode - 51 + 27) : 56 === e.keyCode ? s.key = i.C0.DEL : 219 === e.keyCode ? s.key = i.C0.ESC : 220 === e.keyCode ? s.key = i.C0.FS : 221 === e.keyCode && (s.key = i.C0.GS);
                    }
                    return s;
                };
            },
            482: (e169, t120)=>{
                Object.defineProperty(t120, "__esModule", {
                    value: !0
                }), t120.Utf8ToUtf32 = t120.StringToUtf32 = t120.utf32ToString = t120.stringFromCodePoint = void 0, t120.stringFromCodePoint = function(e) {
                    return e > 65535 ? (e -= 65536, String.fromCharCode(55296 + (e >> 10)) + String.fromCharCode(e % 1024 + 56320)) : String.fromCharCode(e);
                }, t120.utf32ToString = function(e, t, r) {
                    void 0 === t && (t = 0), void 0 === r && (r = e.length);
                    for(var i = "", n = t; n < r; ++n){
                        var o = e[n];
                        o > 65535 ? (o -= 65536, i += String.fromCharCode(55296 + (o >> 10)) + String.fromCharCode(o % 1024 + 56320)) : i += String.fromCharCode(o);
                    }
                    return i;
                };
                var r64 = function() {
                    function e170() {
                        this._interim = 0;
                    }
                    return e170.prototype.clear = function() {
                        this._interim = 0;
                    }, e170.prototype.decode = function(e, t) {
                        var r = e.length;
                        if (!r) return 0;
                        var i = 0, n = 0;
                        this._interim && (56320 <= (a = e.charCodeAt(n++)) && a <= 57343 ? t[i++] = 1024 * (this._interim - 55296) + a - 56320 + 65536 : (t[i++] = this._interim, t[i++] = a), this._interim = 0);
                        for(var o = n; o < r; ++o){
                            var s = e.charCodeAt(o);
                            if (55296 <= s && s <= 56319) {
                                if (++o >= r) return this._interim = s, i;
                                var a;
                                56320 <= (a = e.charCodeAt(o)) && a <= 57343 ? t[i++] = 1024 * (s - 55296) + a - 56320 + 65536 : (t[i++] = s, t[i++] = a);
                            } else 65279 !== s && (t[i++] = s);
                        }
                        return i;
                    }, e170;
                }();
                t120.StringToUtf32 = r64;
                var i44 = function() {
                    function e171() {
                        this.interim = new Uint8Array(3);
                    }
                    return e171.prototype.clear = function() {
                        this.interim.fill(0);
                    }, e171.prototype.decode = function(e, t) {
                        var r = e.length;
                        if (!r) return 0;
                        var i, n, o, s, a = 0, c = 0, l = 0;
                        if (this.interim[0]) {
                            var h = !1, u = this.interim[0];
                            u &= 192 == (224 & u) ? 31 : 224 == (240 & u) ? 15 : 7;
                            for(var f = 0, _ = void 0; (_ = 63 & this.interim[++f]) && f < 4;)u <<= 6, u |= _;
                            for(var d = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, p = d - f; l < p;){
                                if (l >= r) return 0;
                                if (128 != (192 & (_ = e[l++]))) {
                                    l--, h = !0;
                                    break;
                                }
                                this.interim[f++] = _, u <<= 6, u |= 63 & _;
                            }
                            h || (2 === d ? u < 128 ? l-- : t[a++] = u : 3 === d ? u < 2048 || u >= 55296 && u <= 57343 || 65279 === u || (t[a++] = u) : u < 65536 || u > 1114111 || (t[a++] = u)), this.interim.fill(0);
                        }
                        for(var v = r - 4, g = l; g < r;){
                            for(; !(!(g < v) || 128 & (i = e[g]) || 128 & (n = e[g + 1]) || 128 & (o = e[g + 2]) || 128 & (s = e[g + 3]));)t[a++] = i, t[a++] = n, t[a++] = o, t[a++] = s, g += 4;
                            if ((i = e[g++]) < 128) t[a++] = i;
                            else if (192 == (224 & i)) {
                                if (g >= r) return this.interim[0] = i, a;
                                if (128 != (192 & (n = e[g++]))) {
                                    g--;
                                    continue;
                                }
                                if ((c = (31 & i) << 6 | 63 & n) < 128) {
                                    g--;
                                    continue;
                                }
                                t[a++] = c;
                            } else if (224 == (240 & i)) {
                                if (g >= r) return this.interim[0] = i, a;
                                if (128 != (192 & (n = e[g++]))) {
                                    g--;
                                    continue;
                                }
                                if (g >= r) return this.interim[0] = i, this.interim[1] = n, a;
                                if (128 != (192 & (o = e[g++]))) {
                                    g--;
                                    continue;
                                }
                                if ((c = (15 & i) << 12 | (63 & n) << 6 | 63 & o) < 2048 || c >= 55296 && c <= 57343 || 65279 === c) continue;
                                t[a++] = c;
                            } else if (240 == (248 & i)) {
                                if (g >= r) return this.interim[0] = i, a;
                                if (128 != (192 & (n = e[g++]))) {
                                    g--;
                                    continue;
                                }
                                if (g >= r) return this.interim[0] = i, this.interim[1] = n, a;
                                if (128 != (192 & (o = e[g++]))) {
                                    g--;
                                    continue;
                                }
                                if (g >= r) return this.interim[0] = i, this.interim[1] = n, this.interim[2] = o, a;
                                if (128 != (192 & (s = e[g++]))) {
                                    g--;
                                    continue;
                                }
                                if ((c = (7 & i) << 18 | (63 & n) << 12 | (63 & o) << 6 | 63 & s) < 65536 || c > 1114111) continue;
                                t[a++] = c;
                            }
                        }
                        return a;
                    }, e171;
                }();
                t120.Utf8ToUtf32 = i44;
            },
            225: (e172, t121, r65)=>{
                Object.defineProperty(t121, "__esModule", {
                    value: !0
                }), t121.UnicodeV6 = void 0;
                var i45, n39 = r65(8273), o = [
                    [
                        768,
                        879
                    ],
                    [
                        1155,
                        1158
                    ],
                    [
                        1160,
                        1161
                    ],
                    [
                        1425,
                        1469
                    ],
                    [
                        1471,
                        1471
                    ],
                    [
                        1473,
                        1474
                    ],
                    [
                        1476,
                        1477
                    ],
                    [
                        1479,
                        1479
                    ],
                    [
                        1536,
                        1539
                    ],
                    [
                        1552,
                        1557
                    ],
                    [
                        1611,
                        1630
                    ],
                    [
                        1648,
                        1648
                    ],
                    [
                        1750,
                        1764
                    ],
                    [
                        1767,
                        1768
                    ],
                    [
                        1770,
                        1773
                    ],
                    [
                        1807,
                        1807
                    ],
                    [
                        1809,
                        1809
                    ],
                    [
                        1840,
                        1866
                    ],
                    [
                        1958,
                        1968
                    ],
                    [
                        2027,
                        2035
                    ],
                    [
                        2305,
                        2306
                    ],
                    [
                        2364,
                        2364
                    ],
                    [
                        2369,
                        2376
                    ],
                    [
                        2381,
                        2381
                    ],
                    [
                        2385,
                        2388
                    ],
                    [
                        2402,
                        2403
                    ],
                    [
                        2433,
                        2433
                    ],
                    [
                        2492,
                        2492
                    ],
                    [
                        2497,
                        2500
                    ],
                    [
                        2509,
                        2509
                    ],
                    [
                        2530,
                        2531
                    ],
                    [
                        2561,
                        2562
                    ],
                    [
                        2620,
                        2620
                    ],
                    [
                        2625,
                        2626
                    ],
                    [
                        2631,
                        2632
                    ],
                    [
                        2635,
                        2637
                    ],
                    [
                        2672,
                        2673
                    ],
                    [
                        2689,
                        2690
                    ],
                    [
                        2748,
                        2748
                    ],
                    [
                        2753,
                        2757
                    ],
                    [
                        2759,
                        2760
                    ],
                    [
                        2765,
                        2765
                    ],
                    [
                        2786,
                        2787
                    ],
                    [
                        2817,
                        2817
                    ],
                    [
                        2876,
                        2876
                    ],
                    [
                        2879,
                        2879
                    ],
                    [
                        2881,
                        2883
                    ],
                    [
                        2893,
                        2893
                    ],
                    [
                        2902,
                        2902
                    ],
                    [
                        2946,
                        2946
                    ],
                    [
                        3008,
                        3008
                    ],
                    [
                        3021,
                        3021
                    ],
                    [
                        3134,
                        3136
                    ],
                    [
                        3142,
                        3144
                    ],
                    [
                        3146,
                        3149
                    ],
                    [
                        3157,
                        3158
                    ],
                    [
                        3260,
                        3260
                    ],
                    [
                        3263,
                        3263
                    ],
                    [
                        3270,
                        3270
                    ],
                    [
                        3276,
                        3277
                    ],
                    [
                        3298,
                        3299
                    ],
                    [
                        3393,
                        3395
                    ],
                    [
                        3405,
                        3405
                    ],
                    [
                        3530,
                        3530
                    ],
                    [
                        3538,
                        3540
                    ],
                    [
                        3542,
                        3542
                    ],
                    [
                        3633,
                        3633
                    ],
                    [
                        3636,
                        3642
                    ],
                    [
                        3655,
                        3662
                    ],
                    [
                        3761,
                        3761
                    ],
                    [
                        3764,
                        3769
                    ],
                    [
                        3771,
                        3772
                    ],
                    [
                        3784,
                        3789
                    ],
                    [
                        3864,
                        3865
                    ],
                    [
                        3893,
                        3893
                    ],
                    [
                        3895,
                        3895
                    ],
                    [
                        3897,
                        3897
                    ],
                    [
                        3953,
                        3966
                    ],
                    [
                        3968,
                        3972
                    ],
                    [
                        3974,
                        3975
                    ],
                    [
                        3984,
                        3991
                    ],
                    [
                        3993,
                        4028
                    ],
                    [
                        4038,
                        4038
                    ],
                    [
                        4141,
                        4144
                    ],
                    [
                        4146,
                        4146
                    ],
                    [
                        4150,
                        4151
                    ],
                    [
                        4153,
                        4153
                    ],
                    [
                        4184,
                        4185
                    ],
                    [
                        4448,
                        4607
                    ],
                    [
                        4959,
                        4959
                    ],
                    [
                        5906,
                        5908
                    ],
                    [
                        5938,
                        5940
                    ],
                    [
                        5970,
                        5971
                    ],
                    [
                        6002,
                        6003
                    ],
                    [
                        6068,
                        6069
                    ],
                    [
                        6071,
                        6077
                    ],
                    [
                        6086,
                        6086
                    ],
                    [
                        6089,
                        6099
                    ],
                    [
                        6109,
                        6109
                    ],
                    [
                        6155,
                        6157
                    ],
                    [
                        6313,
                        6313
                    ],
                    [
                        6432,
                        6434
                    ],
                    [
                        6439,
                        6440
                    ],
                    [
                        6450,
                        6450
                    ],
                    [
                        6457,
                        6459
                    ],
                    [
                        6679,
                        6680
                    ],
                    [
                        6912,
                        6915
                    ],
                    [
                        6964,
                        6964
                    ],
                    [
                        6966,
                        6970
                    ],
                    [
                        6972,
                        6972
                    ],
                    [
                        6978,
                        6978
                    ],
                    [
                        7019,
                        7027
                    ],
                    [
                        7616,
                        7626
                    ],
                    [
                        7678,
                        7679
                    ],
                    [
                        8203,
                        8207
                    ],
                    [
                        8234,
                        8238
                    ],
                    [
                        8288,
                        8291
                    ],
                    [
                        8298,
                        8303
                    ],
                    [
                        8400,
                        8431
                    ],
                    [
                        12330,
                        12335
                    ],
                    [
                        12441,
                        12442
                    ],
                    [
                        43014,
                        43014
                    ],
                    [
                        43019,
                        43019
                    ],
                    [
                        43045,
                        43046
                    ],
                    [
                        64286,
                        64286
                    ],
                    [
                        65024,
                        65039
                    ],
                    [
                        65056,
                        65059
                    ],
                    [
                        65279,
                        65279
                    ],
                    [
                        65529,
                        65531
                    ]
                ], s = [
                    [
                        68097,
                        68099
                    ],
                    [
                        68101,
                        68102
                    ],
                    [
                        68108,
                        68111
                    ],
                    [
                        68152,
                        68154
                    ],
                    [
                        68159,
                        68159
                    ],
                    [
                        119143,
                        119145
                    ],
                    [
                        119155,
                        119170
                    ],
                    [
                        119173,
                        119179
                    ],
                    [
                        119210,
                        119213
                    ],
                    [
                        119362,
                        119364
                    ],
                    [
                        917505,
                        917505
                    ],
                    [
                        917536,
                        917631
                    ],
                    [
                        917760,
                        917999
                    ]
                ], a = function() {
                    function e173() {
                        if (this.version = "6", !i45) {
                            i45 = new Uint8Array(65536), (0, n39.fill)(i45, 1), i45[0] = 0, (0, n39.fill)(i45, 0, 1, 32), (0, n39.fill)(i45, 0, 127, 160), (0, n39.fill)(i45, 2, 4352, 4448), i45[9001] = 2, i45[9002] = 2, (0, n39.fill)(i45, 2, 11904, 42192), i45[12351] = 1, (0, n39.fill)(i45, 2, 44032, 55204), (0, n39.fill)(i45, 2, 63744, 64256), (0, n39.fill)(i45, 2, 65040, 65050), (0, n39.fill)(i45, 2, 65072, 65136), (0, n39.fill)(i45, 2, 65280, 65377), (0, n39.fill)(i45, 2, 65504, 65511);
                            for(var e = 0; e < o.length; ++e)(0, n39.fill)(i45, 0, o[e][0], o[e][1] + 1);
                        }
                    }
                    return e173.prototype.wcwidth = function(e174) {
                        return e174 < 32 ? 0 : e174 < 127 ? 1 : e174 < 65536 ? i45[e174] : function(e, t) {
                            var r, i = 0, n = t.length - 1;
                            if (e < t[0][0] || e > t[n][1]) return !1;
                            for(; n >= i;)if (e > t[r = i + n >> 1][1]) i = r + 1;
                            else {
                                if (!(e < t[r][0])) return !0;
                                n = r - 1;
                            }
                            return !1;
                        }(e174, s) ? 0 : e174 >= 131072 && e174 <= 196605 || e174 >= 196608 && e174 <= 262141 ? 2 : 1;
                    }, e173;
                }();
                t121.UnicodeV6 = a;
            },
            5981: (e175, t122)=>{
                Object.defineProperty(t122, "__esModule", {
                    value: !0
                }), t122.WriteBuffer = void 0;
                var r66 = "undefined" == typeof queueMicrotask ? function(e) {
                    Promise.resolve().then(e);
                } : queueMicrotask, i46 = function() {
                    function e176(e) {
                        this._action = e, this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0, this._isSyncWriting = !1, this._syncCalls = 0;
                    }
                    return e176.prototype.writeSync = function(e, t) {
                        if (void 0 !== t && this._syncCalls > t) this._syncCalls = 0;
                        else if (this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(void 0), this._syncCalls++, !this._isSyncWriting) {
                            var r;
                            for(this._isSyncWriting = !0; r = this._writeBuffer.shift();){
                                this._action(r);
                                var i = this._callbacks.shift();
                                i && i();
                            }
                            this._pendingData = 0, this._bufferOffset = 2147483647, this._isSyncWriting = !1, this._syncCalls = 0;
                        }
                    }, e176.prototype.write = function(e, t) {
                        var r = this;
                        if (this._pendingData > 50000000) throw new Error("write data discarded, use flow control to avoid losing data");
                        this._writeBuffer.length || (this._bufferOffset = 0, setTimeout(function() {
                            return r._innerWrite();
                        })), this._pendingData += e.length, this._writeBuffer.push(e), this._callbacks.push(t);
                    }, e176.prototype._innerWrite = function(e177, t) {
                        var i = this;
                        void 0 === e177 && (e177 = 0), void 0 === t && (t = !0);
                        for(var n = e177 || Date.now(); this._writeBuffer.length > this._bufferOffset;){
                            var o = this._writeBuffer[this._bufferOffset], s = this._action(o, t);
                            if (s) return void s.catch(function(e) {
                                return r66(function() {
                                    throw e;
                                }), Promise.resolve(!1);
                            }).then(function(e) {
                                return Date.now() - n >= 12 ? setTimeout(function() {
                                    return i._innerWrite(0, e);
                                }) : i._innerWrite(n, e);
                            });
                            var a = this._callbacks[this._bufferOffset];
                            if (a && a(), this._bufferOffset++, this._pendingData -= o.length, Date.now() - n >= 12) break;
                        }
                        this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > 50 && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout(function() {
                            return i._innerWrite();
                        })) : (this._writeBuffer.length = 0, this._callbacks.length = 0, this._pendingData = 0, this._bufferOffset = 0);
                    }, e176;
                }();
                t122.WriteBuffer = i46;
            },
            5941: (e178, t123)=>{
                Object.defineProperty(t123, "__esModule", {
                    value: !0
                }), t123.toRgbString = t123.parseColor = void 0;
                var r67 = /^([\da-f]{1})\/([\da-f]{1})\/([\da-f]{1})$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/, i47 = /^[\da-f]+$/;
                function n40(e, t) {
                    var r = e.toString(16), i = r.length < 2 ? "0" + r : r;
                    switch(t){
                        case 4:
                            return r[0];
                        case 8:
                            return i;
                        case 12:
                            return (i + i).slice(0, 3);
                        default:
                            return i + i;
                    }
                }
                t123.parseColor = function(e) {
                    if (e) {
                        var t = e.toLowerCase();
                        if (0 === t.indexOf("rgb:")) {
                            t = t.slice(4);
                            var n = r67.exec(t);
                            if (n) {
                                var o = n[1] ? 15 : n[4] ? 255 : n[7] ? 4095 : 65535;
                                return [
                                    Math.round(parseInt(n[1] || n[4] || n[7] || n[10], 16) / o * 255),
                                    Math.round(parseInt(n[2] || n[5] || n[8] || n[11], 16) / o * 255),
                                    Math.round(parseInt(n[3] || n[6] || n[9] || n[12], 16) / o * 255)
                                ];
                            }
                        } else if (0 === t.indexOf("#") && (t = t.slice(1), i47.exec(t) && [
                            3,
                            6,
                            9,
                            12
                        ].includes(t.length))) {
                            for(var s = t.length / 3, a = [
                                0,
                                0,
                                0
                            ], c = 0; c < 3; ++c){
                                var l = parseInt(t.slice(s * c, s * c + s), 16);
                                a[c] = 1 === s ? l << 4 : 2 === s ? l : 3 === s ? l >> 4 : l >> 8;
                            }
                            return a;
                        }
                    }
                }, t123.toRgbString = function(e, t) {
                    void 0 === t && (t = 16);
                    var r = e[0], i = e[1], o = e[2];
                    return "rgb:" + n40(r, t) + "/" + n40(i, t) + "/" + n40(o, t);
                };
            },
            5770: (e, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.PAYLOAD_LIMIT = void 0, t.PAYLOAD_LIMIT = 10000000;
            },
            6351: (e179, t124, r68)=>{
                Object.defineProperty(t124, "__esModule", {
                    value: !0
                }), t124.DcsHandler = t124.DcsParser = void 0;
                var i48 = r68(482), n41 = r68(8742), o = r68(5770), s = [], a = function() {
                    function e180() {
                        this._handlers = Object.create(null), this._active = s, this._ident = 0, this._handlerFb = function() {}, this._stack = {
                            paused: !1,
                            loopPosition: 0,
                            fallThrough: !1
                        };
                    }
                    return e180.prototype.dispose = function() {
                        this._handlers = Object.create(null), this._handlerFb = function() {}, this._active = s;
                    }, e180.prototype.registerHandler = function(e181, t) {
                        void 0 === this._handlers[e181] && (this._handlers[e181] = []);
                        var r = this._handlers[e181];
                        return r.push(t), {
                            dispose: function() {
                                var e = r.indexOf(t);
                                -1 !== e && r.splice(e, 1);
                            }
                        };
                    }, e180.prototype.clearHandler = function(e) {
                        this._handlers[e] && delete this._handlers[e];
                    }, e180.prototype.setHandlerFallback = function(e) {
                        this._handlerFb = e;
                    }, e180.prototype.reset = function() {
                        if (this._active.length) for(var e = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e >= 0; --e)this._active[e].unhook(!1);
                        this._stack.paused = !1, this._active = s, this._ident = 0;
                    }, e180.prototype.hook = function(e, t) {
                        if (this.reset(), this._ident = e, this._active = this._handlers[e] || s, this._active.length) for(var r = this._active.length - 1; r >= 0; r--)this._active[r].hook(t);
                        else this._handlerFb(this._ident, "HOOK", t);
                    }, e180.prototype.put = function(e, t, r) {
                        if (this._active.length) for(var n = this._active.length - 1; n >= 0; n--)this._active[n].put(e, t, r);
                        else this._handlerFb(this._ident, "PUT", (0, i48.utf32ToString)(e, t, r));
                    }, e180.prototype.unhook = function(e, t) {
                        if (void 0 === t && (t = !0), this._active.length) {
                            var r = !1, i = this._active.length - 1, n = !1;
                            if (this._stack.paused && (i = this._stack.loopPosition - 1, r = t, n = this._stack.fallThrough, this._stack.paused = !1), !n && !1 === r) {
                                for(; i >= 0 && !0 !== (r = this._active[i].unhook(e)); i--)if (r instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = i, this._stack.fallThrough = !1, r;
                                i--;
                            }
                            for(; i >= 0; i--)if ((r = this._active[i].unhook(!1)) instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = i, this._stack.fallThrough = !0, r;
                        } else this._handlerFb(this._ident, "UNHOOK", e);
                        this._active = s, this._ident = 0;
                    }, e180;
                }();
                t124.DcsParser = a;
                var c = new n41.Params;
                c.addParam(0);
                var l = function() {
                    function e182(e) {
                        this._handler = e, this._data = "", this._params = c, this._hitLimit = !1;
                    }
                    return e182.prototype.hook = function(e) {
                        this._params = e.length > 1 || e.params[0] ? e.clone() : c, this._data = "", this._hitLimit = !1;
                    }, e182.prototype.put = function(e, t, r) {
                        this._hitLimit || (this._data += (0, i48.utf32ToString)(e, t, r), this._data.length > o.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = !0));
                    }, e182.prototype.unhook = function(e183) {
                        var t = this, r = !1;
                        if (this._hitLimit) r = !1;
                        else if (e183 && (r = this._handler(this._data, this._params)) instanceof Promise) return r.then(function(e) {
                            return t._params = c, t._data = "", t._hitLimit = !1, e;
                        });
                        return this._params = c, this._data = "", this._hitLimit = !1, r;
                    }, e182;
                }();
                t124.DcsHandler = l;
            },
            2015: function(e184, t125, r69) {
                var i49, n42 = this && this.__extends || (i49 = function(e185, t126) {
                    return i49 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i49(e185, t126);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i49(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                });
                Object.defineProperty(t125, "__esModule", {
                    value: !0
                }), t125.EscapeSequenceParser = t125.VT500_TRANSITION_TABLE = t125.TransitionTable = void 0;
                var o35 = r69(844), s37 = r69(8273), a34 = r69(8742), c18 = r69(6242), l20 = r69(6351), h16 = function() {
                    function e186(e) {
                        this.table = new Uint8Array(e);
                    }
                    return e186.prototype.setDefault = function(e, t) {
                        (0, s37.fill)(this.table, e << 4 | t);
                    }, e186.prototype.add = function(e, t, r, i) {
                        this.table[t << 8 | e] = r << 4 | i;
                    }, e186.prototype.addMany = function(e, t, r, i) {
                        for(var n = 0; n < e.length; n++)this.table[t << 8 | e[n]] = r << 4 | i;
                    }, e186;
                }();
                t125.TransitionTable = h16;
                var u = 160;
                t125.VT500_TRANSITION_TABLE = function() {
                    var e187 = new h16(4095), t127 = Array.apply(null, Array(256)).map(function(e, t) {
                        return t;
                    }), r70 = function(e, r) {
                        return t127.slice(e, r);
                    }, i = r70(32, 127), n = r70(0, 24);
                    n.push(25), n.push.apply(n, r70(28, 32));
                    var o, s = r70(0, 14);
                    for(o in e187.setDefault(1, 0), e187.addMany(i, 0, 2, 0), s)e187.addMany([
                        24,
                        26,
                        153,
                        154
                    ], o, 3, 0), e187.addMany(r70(128, 144), o, 3, 0), e187.addMany(r70(144, 152), o, 3, 0), e187.add(156, o, 0, 0), e187.add(27, o, 11, 1), e187.add(157, o, 4, 8), e187.addMany([
                        152,
                        158,
                        159
                    ], o, 0, 7), e187.add(155, o, 11, 3), e187.add(144, o, 11, 9);
                    return e187.addMany(n, 0, 3, 0), e187.addMany(n, 1, 3, 1), e187.add(127, 1, 0, 1), e187.addMany(n, 8, 0, 8), e187.addMany(n, 3, 3, 3), e187.add(127, 3, 0, 3), e187.addMany(n, 4, 3, 4), e187.add(127, 4, 0, 4), e187.addMany(n, 6, 3, 6), e187.addMany(n, 5, 3, 5), e187.add(127, 5, 0, 5), e187.addMany(n, 2, 3, 2), e187.add(127, 2, 0, 2), e187.add(93, 1, 4, 8), e187.addMany(i, 8, 5, 8), e187.add(127, 8, 5, 8), e187.addMany([
                        156,
                        27,
                        24,
                        26,
                        7
                    ], 8, 6, 0), e187.addMany(r70(28, 32), 8, 0, 8), e187.addMany([
                        88,
                        94,
                        95
                    ], 1, 0, 7), e187.addMany(i, 7, 0, 7), e187.addMany(n, 7, 0, 7), e187.add(156, 7, 0, 0), e187.add(127, 7, 0, 7), e187.add(91, 1, 11, 3), e187.addMany(r70(64, 127), 3, 7, 0), e187.addMany(r70(48, 60), 3, 8, 4), e187.addMany([
                        60,
                        61,
                        62,
                        63
                    ], 3, 9, 4), e187.addMany(r70(48, 60), 4, 8, 4), e187.addMany(r70(64, 127), 4, 7, 0), e187.addMany([
                        60,
                        61,
                        62,
                        63
                    ], 4, 0, 6), e187.addMany(r70(32, 64), 6, 0, 6), e187.add(127, 6, 0, 6), e187.addMany(r70(64, 127), 6, 0, 0), e187.addMany(r70(32, 48), 3, 9, 5), e187.addMany(r70(32, 48), 5, 9, 5), e187.addMany(r70(48, 64), 5, 0, 6), e187.addMany(r70(64, 127), 5, 7, 0), e187.addMany(r70(32, 48), 4, 9, 5), e187.addMany(r70(32, 48), 1, 9, 2), e187.addMany(r70(32, 48), 2, 9, 2), e187.addMany(r70(48, 127), 2, 10, 0), e187.addMany(r70(48, 80), 1, 10, 0), e187.addMany(r70(81, 88), 1, 10, 0), e187.addMany([
                        89,
                        90,
                        92
                    ], 1, 10, 0), e187.addMany(r70(96, 127), 1, 10, 0), e187.add(80, 1, 11, 9), e187.addMany(n, 9, 0, 9), e187.add(127, 9, 0, 9), e187.addMany(r70(28, 32), 9, 0, 9), e187.addMany(r70(32, 48), 9, 9, 12), e187.addMany(r70(48, 60), 9, 8, 10), e187.addMany([
                        60,
                        61,
                        62,
                        63
                    ], 9, 9, 10), e187.addMany(n, 11, 0, 11), e187.addMany(r70(32, 128), 11, 0, 11), e187.addMany(r70(28, 32), 11, 0, 11), e187.addMany(n, 10, 0, 10), e187.add(127, 10, 0, 10), e187.addMany(r70(28, 32), 10, 0, 10), e187.addMany(r70(48, 60), 10, 8, 10), e187.addMany([
                        60,
                        61,
                        62,
                        63
                    ], 10, 0, 11), e187.addMany(r70(32, 48), 10, 9, 12), e187.addMany(n, 12, 0, 12), e187.add(127, 12, 0, 12), e187.addMany(r70(28, 32), 12, 0, 12), e187.addMany(r70(32, 48), 12, 9, 12), e187.addMany(r70(48, 64), 12, 0, 11), e187.addMany(r70(64, 127), 12, 12, 13), e187.addMany(r70(64, 127), 10, 12, 13), e187.addMany(r70(64, 127), 9, 12, 13), e187.addMany(n, 13, 13, 13), e187.addMany(i, 13, 13, 13), e187.add(127, 13, 0, 13), e187.addMany([
                        27,
                        156,
                        24,
                        26
                    ], 13, 14, 0), e187.add(u, 0, 2, 0), e187.add(u, 8, 5, 8), e187.add(u, 6, 0, 6), e187.add(u, 11, 0, 11), e187.add(u, 13, 13, 13), e187;
                }();
                var f12 = function(e188) {
                    function r71(r) {
                        void 0 === r && (r = t125.VT500_TRANSITION_TABLE);
                        var i = e188.call(this) || this;
                        return i._transitions = r, i._parseStack = {
                            state: 0,
                            handlers: [],
                            handlerPos: 0,
                            transition: 0,
                            chunkPos: 0
                        }, i.initialState = 0, i.currentState = i.initialState, i._params = new a34.Params, i._params.addParam(0), i._collect = 0, i.precedingCodepoint = 0, i._printHandlerFb = function(e, t, r) {}, i._executeHandlerFb = function(e) {}, i._csiHandlerFb = function(e, t) {}, i._escHandlerFb = function(e) {}, i._errorHandlerFb = function(e) {
                            return e;
                        }, i._printHandler = i._printHandlerFb, i._executeHandlers = Object.create(null), i._csiHandlers = Object.create(null), i._escHandlers = Object.create(null), i._oscParser = new c18.OscParser, i._dcsParser = new l20.DcsParser, i._errorHandler = i._errorHandlerFb, i.registerEscHandler({
                            final: "\\"
                        }, function() {
                            return !0;
                        }), i;
                    }
                    return n42(r71, e188), r71.prototype._identifier = function(e, t) {
                        void 0 === t && (t = [
                            64,
                            126
                        ]);
                        var r = 0;
                        if (e.prefix) {
                            if (e.prefix.length > 1) throw new Error("only one byte as prefix supported");
                            if ((r = e.prefix.charCodeAt(0)) && 60 > r || r > 63) throw new Error("prefix must be in range 0x3c .. 0x3f");
                        }
                        if (e.intermediates) {
                            if (e.intermediates.length > 2) throw new Error("only two bytes as intermediates are supported");
                            for(var i = 0; i < e.intermediates.length; ++i){
                                var n = e.intermediates.charCodeAt(i);
                                if (32 > n || n > 47) throw new Error("intermediate must be in range 0x20 .. 0x2f");
                                r <<= 8, r |= n;
                            }
                        }
                        if (1 !== e.final.length) throw new Error("final must be a single byte");
                        var o = e.final.charCodeAt(0);
                        if (t[0] > o || o > t[1]) throw new Error("final must be in range " + t[0] + " .. " + t[1]);
                        return (r <<= 8) | o;
                    }, r71.prototype.identToString = function(e) {
                        for(var t = []; e;)t.push(String.fromCharCode(255 & e)), e >>= 8;
                        return t.reverse().join("");
                    }, r71.prototype.dispose = function() {
                        this._csiHandlers = Object.create(null), this._executeHandlers = Object.create(null), this._escHandlers = Object.create(null), this._oscParser.dispose(), this._dcsParser.dispose();
                    }, r71.prototype.setPrintHandler = function(e) {
                        this._printHandler = e;
                    }, r71.prototype.clearPrintHandler = function() {
                        this._printHandler = this._printHandlerFb;
                    }, r71.prototype.registerEscHandler = function(e189, t) {
                        var r = this._identifier(e189, [
                            48,
                            126
                        ]);
                        void 0 === this._escHandlers[r] && (this._escHandlers[r] = []);
                        var i = this._escHandlers[r];
                        return i.push(t), {
                            dispose: function() {
                                var e = i.indexOf(t);
                                -1 !== e && i.splice(e, 1);
                            }
                        };
                    }, r71.prototype.clearEscHandler = function(e) {
                        this._escHandlers[this._identifier(e, [
                            48,
                            126
                        ])] && delete this._escHandlers[this._identifier(e, [
                            48,
                            126
                        ])];
                    }, r71.prototype.setEscHandlerFallback = function(e) {
                        this._escHandlerFb = e;
                    }, r71.prototype.setExecuteHandler = function(e, t) {
                        this._executeHandlers[e.charCodeAt(0)] = t;
                    }, r71.prototype.clearExecuteHandler = function(e) {
                        this._executeHandlers[e.charCodeAt(0)] && delete this._executeHandlers[e.charCodeAt(0)];
                    }, r71.prototype.setExecuteHandlerFallback = function(e) {
                        this._executeHandlerFb = e;
                    }, r71.prototype.registerCsiHandler = function(e190, t) {
                        var r = this._identifier(e190);
                        void 0 === this._csiHandlers[r] && (this._csiHandlers[r] = []);
                        var i = this._csiHandlers[r];
                        return i.push(t), {
                            dispose: function() {
                                var e = i.indexOf(t);
                                -1 !== e && i.splice(e, 1);
                            }
                        };
                    }, r71.prototype.clearCsiHandler = function(e) {
                        this._csiHandlers[this._identifier(e)] && delete this._csiHandlers[this._identifier(e)];
                    }, r71.prototype.setCsiHandlerFallback = function(e) {
                        this._csiHandlerFb = e;
                    }, r71.prototype.registerDcsHandler = function(e, t) {
                        return this._dcsParser.registerHandler(this._identifier(e), t);
                    }, r71.prototype.clearDcsHandler = function(e) {
                        this._dcsParser.clearHandler(this._identifier(e));
                    }, r71.prototype.setDcsHandlerFallback = function(e) {
                        this._dcsParser.setHandlerFallback(e);
                    }, r71.prototype.registerOscHandler = function(e, t) {
                        return this._oscParser.registerHandler(e, t);
                    }, r71.prototype.clearOscHandler = function(e) {
                        this._oscParser.clearHandler(e);
                    }, r71.prototype.setOscHandlerFallback = function(e) {
                        this._oscParser.setHandlerFallback(e);
                    }, r71.prototype.setErrorHandler = function(e) {
                        this._errorHandler = e;
                    }, r71.prototype.clearErrorHandler = function() {
                        this._errorHandler = this._errorHandlerFb;
                    }, r71.prototype.reset = function() {
                        this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0, 0 !== this._parseStack.state && (this._parseStack.state = 2, this._parseStack.handlers = []);
                    }, r71.prototype._preserveStack = function(e, t, r, i, n) {
                        this._parseStack.state = e, this._parseStack.handlers = t, this._parseStack.handlerPos = r, this._parseStack.transition = i, this._parseStack.chunkPos = n;
                    }, r71.prototype.parse = function(e, t, r) {
                        var i, n = 0, o = 0, s = 0;
                        if (this._parseStack.state) {
                            if (2 === this._parseStack.state) this._parseStack.state = 0, s = this._parseStack.chunkPos + 1;
                            else {
                                if (void 0 === r || 1 === this._parseStack.state) throw this._parseStack.state = 1, new Error("improper continuation due to previous async handler, giving up parsing");
                                var a = this._parseStack.handlers, c = this._parseStack.handlerPos - 1;
                                switch(this._parseStack.state){
                                    case 3:
                                        if (!1 === r && c > -1) {
                                            for(; c >= 0 && !0 !== (i = a[c](this._params)); c--)if (i instanceof Promise) return this._parseStack.handlerPos = c, i;
                                        }
                                        this._parseStack.handlers = [];
                                        break;
                                    case 4:
                                        if (!1 === r && c > -1) {
                                            for(; c >= 0 && !0 !== (i = a[c]()); c--)if (i instanceof Promise) return this._parseStack.handlerPos = c, i;
                                        }
                                        this._parseStack.handlers = [];
                                        break;
                                    case 6:
                                        if (n = e[this._parseStack.chunkPos], i = this._dcsParser.unhook(24 !== n && 26 !== n, r)) return i;
                                        27 === n && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                                        break;
                                    case 5:
                                        if (n = e[this._parseStack.chunkPos], i = this._oscParser.end(24 !== n && 26 !== n, r)) return i;
                                        27 === n && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                                }
                                this._parseStack.state = 0, s = this._parseStack.chunkPos + 1, this.precedingCodepoint = 0, this.currentState = 15 & this._parseStack.transition;
                            }
                        }
                        for(var l = s; l < t; ++l){
                            switch(n = e[l], (o = this._transitions.table[this.currentState << 8 | (n < 160 ? n : u)]) >> 4){
                                case 2:
                                    for(var h = l + 1;; ++h){
                                        if (h >= t || (n = e[h]) < 32 || n > 126 && n < u) {
                                            this._printHandler(e, l, h), l = h - 1;
                                            break;
                                        }
                                        if (++h >= t || (n = e[h]) < 32 || n > 126 && n < u) {
                                            this._printHandler(e, l, h), l = h - 1;
                                            break;
                                        }
                                        if (++h >= t || (n = e[h]) < 32 || n > 126 && n < u) {
                                            this._printHandler(e, l, h), l = h - 1;
                                            break;
                                        }
                                        if (++h >= t || (n = e[h]) < 32 || n > 126 && n < u) {
                                            this._printHandler(e, l, h), l = h - 1;
                                            break;
                                        }
                                    }
                                    break;
                                case 3:
                                    this._executeHandlers[n] ? this._executeHandlers[n]() : this._executeHandlerFb(n), this.precedingCodepoint = 0;
                                    break;
                                case 0:
                                    break;
                                case 1:
                                    if (this._errorHandler({
                                        position: l,
                                        code: n,
                                        currentState: this.currentState,
                                        collect: this._collect,
                                        params: this._params,
                                        abort: !1
                                    }).abort) return;
                                    break;
                                case 7:
                                    for(var f = (a = this._csiHandlers[this._collect << 8 | n]) ? a.length - 1 : -1; f >= 0 && !0 !== (i = a[f](this._params)); f--)if (i instanceof Promise) return this._preserveStack(3, a, f, o, l), i;
                                    f < 0 && this._csiHandlerFb(this._collect << 8 | n, this._params), this.precedingCodepoint = 0;
                                    break;
                                case 8:
                                    do switch(n){
                                        case 59:
                                            this._params.addParam(0);
                                            break;
                                        case 58:
                                            this._params.addSubParam(-1);
                                            break;
                                        default:
                                            this._params.addDigit(n - 48);
                                    }
                                    while (++l < t && (n = e[l]) > 47 && n < 60)
                                    l--;
                                    break;
                                case 9:
                                    this._collect <<= 8, this._collect |= n;
                                    break;
                                case 10:
                                    for(var _ = this._escHandlers[this._collect << 8 | n], d = _ ? _.length - 1 : -1; d >= 0 && !0 !== (i = _[d]()); d--)if (i instanceof Promise) return this._preserveStack(4, _, d, o, l), i;
                                    d < 0 && this._escHandlerFb(this._collect << 8 | n), this.precedingCodepoint = 0;
                                    break;
                                case 11:
                                    this._params.reset(), this._params.addParam(0), this._collect = 0;
                                    break;
                                case 12:
                                    this._dcsParser.hook(this._collect << 8 | n, this._params);
                                    break;
                                case 13:
                                    for(var p = l + 1;; ++p)if (p >= t || 24 === (n = e[p]) || 26 === n || 27 === n || n > 127 && n < u) {
                                        this._dcsParser.put(e, l, p), l = p - 1;
                                        break;
                                    }
                                    break;
                                case 14:
                                    if (i = this._dcsParser.unhook(24 !== n && 26 !== n)) return this._preserveStack(6, [], 0, o, l), i;
                                    27 === n && (o |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0;
                                    break;
                                case 4:
                                    this._oscParser.start();
                                    break;
                                case 5:
                                    for(var v = l + 1;; v++)if (v >= t || (n = e[v]) < 32 || n > 127 && n < u) {
                                        this._oscParser.put(e, l, v), l = v - 1;
                                        break;
                                    }
                                    break;
                                case 6:
                                    if (i = this._oscParser.end(24 !== n && 26 !== n)) return this._preserveStack(5, [], 0, o, l), i;
                                    27 === n && (o |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0;
                            }
                            this.currentState = 15 & o;
                        }
                    }, r71;
                }(o35.Disposable);
                t125.EscapeSequenceParser = f12;
            },
            6242: (e191, t128, r72)=>{
                Object.defineProperty(t128, "__esModule", {
                    value: !0
                }), t128.OscHandler = t128.OscParser = void 0;
                var i50 = r72(5770), n43 = r72(482), o = [], s = function() {
                    function e192() {
                        this._state = 0, this._active = o, this._id = -1, this._handlers = Object.create(null), this._handlerFb = function() {}, this._stack = {
                            paused: !1,
                            loopPosition: 0,
                            fallThrough: !1
                        };
                    }
                    return e192.prototype.registerHandler = function(e193, t) {
                        void 0 === this._handlers[e193] && (this._handlers[e193] = []);
                        var r = this._handlers[e193];
                        return r.push(t), {
                            dispose: function() {
                                var e = r.indexOf(t);
                                -1 !== e && r.splice(e, 1);
                            }
                        };
                    }, e192.prototype.clearHandler = function(e) {
                        this._handlers[e] && delete this._handlers[e];
                    }, e192.prototype.setHandlerFallback = function(e) {
                        this._handlerFb = e;
                    }, e192.prototype.dispose = function() {
                        this._handlers = Object.create(null), this._handlerFb = function() {}, this._active = o;
                    }, e192.prototype.reset = function() {
                        if (2 === this._state) for(var e = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e >= 0; --e)this._active[e].end(!1);
                        this._stack.paused = !1, this._active = o, this._id = -1, this._state = 0;
                    }, e192.prototype._start = function() {
                        if (this._active = this._handlers[this._id] || o, this._active.length) for(var e = this._active.length - 1; e >= 0; e--)this._active[e].start();
                        else this._handlerFb(this._id, "START");
                    }, e192.prototype._put = function(e, t, r) {
                        if (this._active.length) for(var i = this._active.length - 1; i >= 0; i--)this._active[i].put(e, t, r);
                        else this._handlerFb(this._id, "PUT", (0, n43.utf32ToString)(e, t, r));
                    }, e192.prototype.start = function() {
                        this.reset(), this._state = 1;
                    }, e192.prototype.put = function(e, t, r) {
                        if (3 !== this._state) {
                            if (1 === this._state) for(; t < r;){
                                var i = e[t++];
                                if (59 === i) {
                                    this._state = 2, this._start();
                                    break;
                                }
                                if (i < 48 || 57 < i) return void (this._state = 3);
                                -1 === this._id && (this._id = 0), this._id = 10 * this._id + i - 48;
                            }
                            2 === this._state && r - t > 0 && this._put(e, t, r);
                        }
                    }, e192.prototype.end = function(e, t) {
                        if (void 0 === t && (t = !0), 0 !== this._state) {
                            if (3 !== this._state) {
                                if (1 === this._state && this._start(), this._active.length) {
                                    var r = !1, i = this._active.length - 1, n = !1;
                                    if (this._stack.paused && (i = this._stack.loopPosition - 1, r = t, n = this._stack.fallThrough, this._stack.paused = !1), !n && !1 === r) {
                                        for(; i >= 0 && !0 !== (r = this._active[i].end(e)); i--)if (r instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = i, this._stack.fallThrough = !1, r;
                                        i--;
                                    }
                                    for(; i >= 0; i--)if ((r = this._active[i].end(!1)) instanceof Promise) return this._stack.paused = !0, this._stack.loopPosition = i, this._stack.fallThrough = !0, r;
                                } else this._handlerFb(this._id, "END", e);
                            }
                            this._active = o, this._id = -1, this._state = 0;
                        }
                    }, e192;
                }();
                t128.OscParser = s;
                var a = function() {
                    function e194(e) {
                        this._handler = e, this._data = "", this._hitLimit = !1;
                    }
                    return e194.prototype.start = function() {
                        this._data = "", this._hitLimit = !1;
                    }, e194.prototype.put = function(e, t, r) {
                        this._hitLimit || (this._data += (0, n43.utf32ToString)(e, t, r), this._data.length > i50.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = !0));
                    }, e194.prototype.end = function(e195) {
                        var t = this, r = !1;
                        if (this._hitLimit) r = !1;
                        else if (e195 && (r = this._handler(this._data)) instanceof Promise) return r.then(function(e) {
                            return t._data = "", t._hitLimit = !1, e;
                        });
                        return this._data = "", this._hitLimit = !1, r;
                    }, e194;
                }();
                t128.OscHandler = a;
            },
            8742: (e196, t129)=>{
                Object.defineProperty(t129, "__esModule", {
                    value: !0
                }), t129.Params = void 0;
                var r73 = 2147483647, i51 = function() {
                    function e197(e, t) {
                        if (void 0 === e && (e = 32), void 0 === t && (t = 32), this.maxLength = e, this.maxSubParamsLength = t, t > 256) throw new Error("maxSubParamsLength must not be greater than 256");
                        this.params = new Int32Array(e), this.length = 0, this._subParams = new Int32Array(t), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(e), this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1;
                    }
                    return e197.fromArray = function(t) {
                        var r = new e197;
                        if (!t.length) return r;
                        for(var i = Array.isArray(t[0]) ? 1 : 0; i < t.length; ++i){
                            var n = t[i];
                            if (Array.isArray(n)) for(var o = 0; o < n.length; ++o)r.addSubParam(n[o]);
                            else r.addParam(n);
                        }
                        return r;
                    }, e197.prototype.clone = function() {
                        var t = new e197(this.maxLength, this.maxSubParamsLength);
                        return t.params.set(this.params), t.length = this.length, t._subParams.set(this._subParams), t._subParamsLength = this._subParamsLength, t._subParamsIdx.set(this._subParamsIdx), t._rejectDigits = this._rejectDigits, t._rejectSubDigits = this._rejectSubDigits, t._digitIsSub = this._digitIsSub, t;
                    }, e197.prototype.toArray = function() {
                        for(var e = [], t = 0; t < this.length; ++t){
                            e.push(this.params[t]);
                            var r = this._subParamsIdx[t] >> 8, i = 255 & this._subParamsIdx[t];
                            i - r > 0 && e.push(Array.prototype.slice.call(this._subParams, r, i));
                        }
                        return e;
                    }, e197.prototype.reset = function() {
                        this.length = 0, this._subParamsLength = 0, this._rejectDigits = !1, this._rejectSubDigits = !1, this._digitIsSub = !1;
                    }, e197.prototype.addParam = function(e) {
                        if (this._digitIsSub = !1, this.length >= this.maxLength) this._rejectDigits = !0;
                        else {
                            if (e < -1) throw new Error("values lesser than -1 are not allowed");
                            this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = e > r73 ? r73 : e;
                        }
                    }, e197.prototype.addSubParam = function(e) {
                        if (this._digitIsSub = !0, this.length) {
                            if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength) this._rejectSubDigits = !0;
                            else {
                                if (e < -1) throw new Error("values lesser than -1 are not allowed");
                                this._subParams[this._subParamsLength++] = e > r73 ? r73 : e, this._subParamsIdx[this.length - 1]++;
                            }
                        }
                    }, e197.prototype.hasSubParams = function(e) {
                        return (255 & this._subParamsIdx[e]) - (this._subParamsIdx[e] >> 8) > 0;
                    }, e197.prototype.getSubParams = function(e) {
                        var t = this._subParamsIdx[e] >> 8, r = 255 & this._subParamsIdx[e];
                        return r - t > 0 ? this._subParams.subarray(t, r) : null;
                    }, e197.prototype.getSubParamsAll = function() {
                        for(var e = {}, t = 0; t < this.length; ++t){
                            var r = this._subParamsIdx[t] >> 8, i = 255 & this._subParamsIdx[t];
                            i - r > 0 && (e[t] = this._subParams.slice(r, i));
                        }
                        return e;
                    }, e197.prototype.addDigit = function(e) {
                        var t;
                        if (!(this._rejectDigits || !(t = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits)) {
                            var i = this._digitIsSub ? this._subParams : this.params, n = i[t - 1];
                            i[t - 1] = ~n ? Math.min(10 * n + e, r73) : e;
                        }
                    }, e197;
                }();
                t129.Params = i51;
            },
            5741: (e198, t130)=>{
                Object.defineProperty(t130, "__esModule", {
                    value: !0
                }), t130.AddonManager = void 0;
                var r74 = function() {
                    function e199() {
                        this._addons = [];
                    }
                    return e199.prototype.dispose = function() {
                        for(var e = this._addons.length - 1; e >= 0; e--)this._addons[e].instance.dispose();
                    }, e199.prototype.loadAddon = function(e, t) {
                        var r = this, i = {
                            instance: t,
                            dispose: t.dispose,
                            isDisposed: !1
                        };
                        this._addons.push(i), t.dispose = function() {
                            return r._wrappedAddonDispose(i);
                        }, t.activate(e);
                    }, e199.prototype._wrappedAddonDispose = function(e) {
                        if (!e.isDisposed) {
                            for(var t = -1, r = 0; r < this._addons.length; r++)if (this._addons[r] === e) {
                                t = r;
                                break;
                            }
                            if (-1 === t) throw new Error("Could not dispose an addon that has not been loaded");
                            e.isDisposed = !0, e.dispose.apply(e.instance), this._addons.splice(t, 1);
                        }
                    }, e199;
                }();
                t130.AddonManager = r74;
            },
            8771: (e200, t131, r)=>{
                Object.defineProperty(t131, "__esModule", {
                    value: !0
                }), t131.BufferApiView = void 0;
                var i = r(3785), n = r(511), o = function() {
                    function e201(e, t) {
                        this._buffer = e, this.type = t;
                    }
                    return e201.prototype.init = function(e) {
                        return this._buffer = e, this;
                    }, Object.defineProperty(e201.prototype, "cursorY", {
                        get: function() {
                            return this._buffer.y;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e201.prototype, "cursorX", {
                        get: function() {
                            return this._buffer.x;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e201.prototype, "viewportY", {
                        get: function() {
                            return this._buffer.ydisp;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e201.prototype, "baseY", {
                        get: function() {
                            return this._buffer.ybase;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e201.prototype, "length", {
                        get: function() {
                            return this._buffer.lines.length;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e201.prototype.getLine = function(e) {
                        var t = this._buffer.lines.get(e);
                        if (t) return new i.BufferLineApiView(t);
                    }, e201.prototype.getNullCell = function() {
                        return new n.CellData;
                    }, e201;
                }();
                t131.BufferApiView = o;
            },
            3785: (e202, t132, r75)=>{
                Object.defineProperty(t132, "__esModule", {
                    value: !0
                }), t132.BufferLineApiView = void 0;
                var i = r75(511), n = function() {
                    function e203(e) {
                        this._line = e;
                    }
                    return Object.defineProperty(e203.prototype, "isWrapped", {
                        get: function() {
                            return this._line.isWrapped;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e203.prototype, "length", {
                        get: function() {
                            return this._line.length;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e203.prototype.getCell = function(e, t) {
                        if (!(e < 0 || e >= this._line.length)) return t ? (this._line.loadCell(e, t), t) : this._line.loadCell(e, new i.CellData);
                    }, e203.prototype.translateToString = function(e, t, r) {
                        return this._line.translateToString(e, t, r);
                    }, e203;
                }();
                t132.BufferLineApiView = n;
            },
            8285: (e204, t133, r)=>{
                Object.defineProperty(t133, "__esModule", {
                    value: !0
                }), t133.BufferNamespaceApi = void 0;
                var i = r(8771), n = r(8460), o = function() {
                    function e205(e) {
                        var t = this;
                        this._core = e, this._onBufferChange = new n.EventEmitter, this._normal = new i.BufferApiView(this._core.buffers.normal, "normal"), this._alternate = new i.BufferApiView(this._core.buffers.alt, "alternate"), this._core.buffers.onBufferActivate(function() {
                            return t._onBufferChange.fire(t.active);
                        });
                    }
                    return Object.defineProperty(e205.prototype, "onBufferChange", {
                        get: function() {
                            return this._onBufferChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e205.prototype, "active", {
                        get: function() {
                            if (this._core.buffers.active === this._core.buffers.normal) return this.normal;
                            if (this._core.buffers.active === this._core.buffers.alt) return this.alternate;
                            throw new Error("Active buffer is neither normal nor alternate");
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e205.prototype, "normal", {
                        get: function() {
                            return this._normal.init(this._core.buffers.normal);
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e205.prototype, "alternate", {
                        get: function() {
                            return this._alternate.init(this._core.buffers.alt);
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e205;
                }();
                t133.BufferNamespaceApi = o;
            },
            7975: (e206, t134)=>{
                Object.defineProperty(t134, "__esModule", {
                    value: !0
                }), t134.ParserApi = void 0;
                var r76 = function() {
                    function e207(e) {
                        this._core = e;
                    }
                    return e207.prototype.registerCsiHandler = function(e208, t) {
                        return this._core.registerCsiHandler(e208, function(e) {
                            return t(e.toArray());
                        });
                    }, e207.prototype.addCsiHandler = function(e, t) {
                        return this.registerCsiHandler(e, t);
                    }, e207.prototype.registerDcsHandler = function(e209, t) {
                        return this._core.registerDcsHandler(e209, function(e, r) {
                            return t(e, r.toArray());
                        });
                    }, e207.prototype.addDcsHandler = function(e, t) {
                        return this.registerDcsHandler(e, t);
                    }, e207.prototype.registerEscHandler = function(e, t) {
                        return this._core.registerEscHandler(e, t);
                    }, e207.prototype.addEscHandler = function(e, t) {
                        return this.registerEscHandler(e, t);
                    }, e207.prototype.registerOscHandler = function(e, t) {
                        return this._core.registerOscHandler(e, t);
                    }, e207.prototype.addOscHandler = function(e, t) {
                        return this.registerOscHandler(e, t);
                    }, e207;
                }();
                t134.ParserApi = r76;
            },
            7090: (e210, t)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.UnicodeApi = void 0;
                var r = function() {
                    function e211(e) {
                        this._core = e;
                    }
                    return e211.prototype.register = function(e) {
                        this._core.unicodeService.register(e);
                    }, Object.defineProperty(e211.prototype, "versions", {
                        get: function() {
                            return this._core.unicodeService.versions;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e211.prototype, "activeVersion", {
                        get: function() {
                            return this._core.unicodeService.activeVersion;
                        },
                        set: function(e) {
                            this._core.unicodeService.activeVersion = e;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e211;
                }();
                t.UnicodeApi = r;
            },
            744: function(e212, t135, r77) {
                var i52, n44 = this && this.__extends || (i52 = function(e213, t136) {
                    return i52 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i52(e213, t136);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i52(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o36 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s38 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t135, "__esModule", {
                    value: !0
                }), t135.BufferService = t135.MINIMUM_ROWS = t135.MINIMUM_COLS = void 0;
                var a35 = r77(2585), c = r77(5295), l = r77(8460), h = r77(844);
                t135.MINIMUM_COLS = 2, t135.MINIMUM_ROWS = 1;
                var u = function(e214) {
                    function r78(r) {
                        var i = e214.call(this) || this;
                        return i._optionsService = r, i.isUserScrolling = !1, i._onResize = new l.EventEmitter, i._onScroll = new l.EventEmitter, i.cols = Math.max(r.rawOptions.cols || 0, t135.MINIMUM_COLS), i.rows = Math.max(r.rawOptions.rows || 0, t135.MINIMUM_ROWS), i.buffers = new c.BufferSet(r, i), i;
                    }
                    return n44(r78, e214), Object.defineProperty(r78.prototype, "onResize", {
                        get: function() {
                            return this._onResize.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(r78.prototype, "onScroll", {
                        get: function() {
                            return this._onScroll.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(r78.prototype, "buffer", {
                        get: function() {
                            return this.buffers.active;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), r78.prototype.dispose = function() {
                        e214.prototype.dispose.call(this), this.buffers.dispose();
                    }, r78.prototype.resize = function(e, t) {
                        this.cols = e, this.rows = t, this.buffers.resize(e, t), this.buffers.setupTabStops(this.cols), this._onResize.fire({
                            cols: e,
                            rows: t
                        });
                    }, r78.prototype.reset = function() {
                        this.buffers.reset(), this.isUserScrolling = !1;
                    }, r78.prototype.scroll = function(e, t) {
                        void 0 === t && (t = !1);
                        var r, i = this.buffer;
                        (r = this._cachedBlankLine) && r.length === this.cols && r.getFg(0) === e.fg && r.getBg(0) === e.bg || (r = i.getBlankLine(e, t), this._cachedBlankLine = r), r.isWrapped = t;
                        var n = i.ybase + i.scrollTop, o = i.ybase + i.scrollBottom;
                        if (0 === i.scrollTop) {
                            var s = i.lines.isFull;
                            o === i.lines.length - 1 ? s ? i.lines.recycle().copyFrom(r) : i.lines.push(r.clone()) : i.lines.splice(o + 1, 0, r.clone()), s ? this.isUserScrolling && (i.ydisp = Math.max(i.ydisp - 1, 0)) : (i.ybase++, this.isUserScrolling || i.ydisp++);
                        } else {
                            var a = o - n + 1;
                            i.lines.shiftElements(n + 1, a - 1, -1), i.lines.set(o, r.clone());
                        }
                        this.isUserScrolling || (i.ydisp = i.ybase), this._onScroll.fire(i.ydisp);
                    }, r78.prototype.scrollLines = function(e, t, r) {
                        var i = this.buffer;
                        if (e < 0) {
                            if (0 === i.ydisp) return;
                            this.isUserScrolling = !0;
                        } else e + i.ydisp >= i.ybase && (this.isUserScrolling = !1);
                        var n = i.ydisp;
                        i.ydisp = Math.max(Math.min(i.ydisp + e, i.ybase), 0), n !== i.ydisp && (t || this._onScroll.fire(i.ydisp));
                    }, r78.prototype.scrollPages = function(e) {
                        this.scrollLines(e * (this.rows - 1));
                    }, r78.prototype.scrollToTop = function() {
                        this.scrollLines(-this.buffer.ydisp);
                    }, r78.prototype.scrollToBottom = function() {
                        this.scrollLines(this.buffer.ybase - this.buffer.ydisp);
                    }, r78.prototype.scrollToLine = function(e) {
                        var t = e - this.buffer.ydisp;
                        0 !== t && this.scrollLines(t);
                    }, o36([
                        s38(0, a35.IOptionsService)
                    ], r78);
                }(h.Disposable);
                t135.BufferService = u;
            },
            7994: (e215, t137)=>{
                Object.defineProperty(t137, "__esModule", {
                    value: !0
                }), t137.CharsetService = void 0;
                var r = function() {
                    function e216() {
                        this.glevel = 0, this._charsets = [];
                    }
                    return e216.prototype.reset = function() {
                        this.charset = void 0, this._charsets = [], this.glevel = 0;
                    }, e216.prototype.setgLevel = function(e) {
                        this.glevel = e, this.charset = this._charsets[e];
                    }, e216.prototype.setgCharset = function(e, t) {
                        this._charsets[e] = t, this.glevel === e && (this.charset = t);
                    }, e216;
                }();
                t137.CharsetService = r;
            },
            1753: function(e217, t138, r79) {
                var i53 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n45 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t138, "__esModule", {
                    value: !0
                }), t138.CoreMouseService = void 0;
                var o37 = r79(2585), s39 = r79(8460), a36 = {
                    NONE: {
                        events: 0,
                        restrict: function() {
                            return !1;
                        }
                    },
                    X10: {
                        events: 1,
                        restrict: function(e) {
                            return 4 !== e.button && 1 === e.action && (e.ctrl = !1, e.alt = !1, e.shift = !1, !0);
                        }
                    },
                    VT200: {
                        events: 19,
                        restrict: function(e) {
                            return 32 !== e.action;
                        }
                    },
                    DRAG: {
                        events: 23,
                        restrict: function(e) {
                            return 32 !== e.action || 3 !== e.button;
                        }
                    },
                    ANY: {
                        events: 31,
                        restrict: function(e) {
                            return !0;
                        }
                    }
                };
                function c19(e, t) {
                    var r = (e.ctrl ? 16 : 0) | (e.shift ? 4 : 0) | (e.alt ? 8 : 0);
                    return 4 === e.button ? (r |= 64, r |= e.action) : (r |= 3 & e.button, 4 & e.button && (r |= 64), 8 & e.button && (r |= 128), 32 === e.action ? r |= 32 : 0 !== e.action || t || (r |= 3)), r;
                }
                var l21 = String.fromCharCode, h = {
                    DEFAULT: function(e) {
                        var t = [
                            c19(e, !1) + 32,
                            e.col + 32,
                            e.row + 32
                        ];
                        return t[0] > 255 || t[1] > 255 || t[2] > 255 ? "" : "[M" + l21(t[0]) + l21(t[1]) + l21(t[2]);
                    },
                    SGR: function(e) {
                        var t = 0 === e.action && 4 !== e.button ? "m" : "M";
                        return "[<" + c19(e, !0) + ";" + e.col + ";" + e.row + t;
                    }
                }, u = function() {
                    function e218(e, t) {
                        this._bufferService = e, this._coreService = t, this._protocols = {}, this._encodings = {}, this._activeProtocol = "", this._activeEncoding = "", this._onProtocolChange = new s39.EventEmitter, this._lastEvent = null;
                        for(var r = 0, i = Object.keys(a36); r < i.length; r++){
                            var n = i[r];
                            this.addProtocol(n, a36[n]);
                        }
                        for(var o = 0, c = Object.keys(h); o < c.length; o++){
                            var l = c[o];
                            this.addEncoding(l, h[l]);
                        }
                        this.reset();
                    }
                    return e218.prototype.addProtocol = function(e, t) {
                        this._protocols[e] = t;
                    }, e218.prototype.addEncoding = function(e, t) {
                        this._encodings[e] = t;
                    }, Object.defineProperty(e218.prototype, "activeProtocol", {
                        get: function() {
                            return this._activeProtocol;
                        },
                        set: function(e) {
                            if (!this._protocols[e]) throw new Error('unknown protocol "' + e + '"');
                            this._activeProtocol = e, this._onProtocolChange.fire(this._protocols[e].events);
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e218.prototype, "areMouseEventsActive", {
                        get: function() {
                            return 0 !== this._protocols[this._activeProtocol].events;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e218.prototype, "activeEncoding", {
                        get: function() {
                            return this._activeEncoding;
                        },
                        set: function(e) {
                            if (!this._encodings[e]) throw new Error('unknown encoding "' + e + '"');
                            this._activeEncoding = e;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e218.prototype.reset = function() {
                        this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null;
                    }, Object.defineProperty(e218.prototype, "onProtocolChange", {
                        get: function() {
                            return this._onProtocolChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e218.prototype.triggerMouseEvent = function(e) {
                        if (e.col < 0 || e.col >= this._bufferService.cols || e.row < 0 || e.row >= this._bufferService.rows) return !1;
                        if (4 === e.button && 32 === e.action) return !1;
                        if (3 === e.button && 32 !== e.action) return !1;
                        if (4 !== e.button && (2 === e.action || 3 === e.action)) return !1;
                        if (e.col++, e.row++, 32 === e.action && this._lastEvent && this._compareEvents(this._lastEvent, e)) return !1;
                        if (!this._protocols[this._activeProtocol].restrict(e)) return !1;
                        var t = this._encodings[this._activeEncoding](e);
                        return t && ("DEFAULT" === this._activeEncoding ? this._coreService.triggerBinaryEvent(t) : this._coreService.triggerDataEvent(t, !0)), this._lastEvent = e, !0;
                    }, e218.prototype.explainEvents = function(e) {
                        return {
                            down: !!(1 & e),
                            up: !!(2 & e),
                            drag: !!(4 & e),
                            move: !!(8 & e),
                            wheel: !!(16 & e)
                        };
                    }, e218.prototype._compareEvents = function(e, t) {
                        return e.col === t.col && e.row === t.row && e.button === t.button && e.action === t.action && e.ctrl === t.ctrl && e.alt === t.alt && e.shift === t.shift;
                    }, i53([
                        n45(0, o37.IBufferService),
                        n45(1, o37.ICoreService)
                    ], e218);
                }();
                t138.CoreMouseService = u;
            },
            6975: function(e219, t139, r80) {
                var i54, n46 = this && this.__extends || (i54 = function(e220, t140) {
                    return i54 = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(e, t) {
                        e.__proto__ = t;
                    } || function(e, t) {
                        for(var r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    }, i54(e220, t140);
                }, function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function r() {
                        this.constructor = e;
                    }
                    i54(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r);
                }), o38 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, s40 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t139, "__esModule", {
                    value: !0
                }), t139.CoreService = void 0;
                var a37 = r80(2585), c = r80(8460), l = r80(1439), h = r80(844), u = Object.freeze({
                    insertMode: !1
                }), f = Object.freeze({
                    applicationCursorKeys: !1,
                    applicationKeypad: !1,
                    bracketedPasteMode: !1,
                    origin: !1,
                    reverseWraparound: !1,
                    sendFocus: !1,
                    wraparound: !0
                }), _ = function(e221) {
                    function t141(t, r, i, n) {
                        var o = e221.call(this) || this;
                        return o._bufferService = r, o._logService = i, o._optionsService = n, o.isCursorInitialized = !1, o.isCursorHidden = !1, o._onData = o.register(new c.EventEmitter), o._onUserInput = o.register(new c.EventEmitter), o._onBinary = o.register(new c.EventEmitter), o._scrollToBottom = t, o.register({
                            dispose: function() {
                                return o._scrollToBottom = void 0;
                            }
                        }), o.modes = (0, l.clone)(u), o.decPrivateModes = (0, l.clone)(f), o;
                    }
                    return n46(t141, e221), Object.defineProperty(t141.prototype, "onData", {
                        get: function() {
                            return this._onData.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t141.prototype, "onUserInput", {
                        get: function() {
                            return this._onUserInput.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t141.prototype, "onBinary", {
                        get: function() {
                            return this._onBinary.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t141.prototype.reset = function() {
                        this.modes = (0, l.clone)(u), this.decPrivateModes = (0, l.clone)(f);
                    }, t141.prototype.triggerDataEvent = function(e222, t) {
                        if (void 0 === t && (t = !1), !this._optionsService.rawOptions.disableStdin) {
                            var r = this._bufferService.buffer;
                            r.ybase !== r.ydisp && this._scrollToBottom(), t && this._onUserInput.fire(), this._logService.debug('sending data "' + e222 + '"', function() {
                                return e222.split("").map(function(e) {
                                    return e.charCodeAt(0);
                                });
                            }), this._onData.fire(e222);
                        }
                    }, t141.prototype.triggerBinaryEvent = function(e223) {
                        this._optionsService.rawOptions.disableStdin || (this._logService.debug('sending binary "' + e223 + '"', function() {
                            return e223.split("").map(function(e) {
                                return e.charCodeAt(0);
                            });
                        }), this._onBinary.fire(e223));
                    }, o38([
                        s40(1, a37.IBufferService),
                        s40(2, a37.ILogService),
                        s40(3, a37.IOptionsService)
                    ], t141);
                }(h.Disposable);
                t139.CoreService = _;
            },
            3730: function(e224, t142, r81) {
                var i55 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n47 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                };
                Object.defineProperty(t142, "__esModule", {
                    value: !0
                }), t142.DirtyRowService = void 0;
                var o39 = r81(2585), s41 = function() {
                    function e225(e) {
                        this._bufferService = e, this.clearRange();
                    }
                    return Object.defineProperty(e225.prototype, "start", {
                        get: function() {
                            return this._start;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e225.prototype, "end", {
                        get: function() {
                            return this._end;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e225.prototype.clearRange = function() {
                        this._start = this._bufferService.buffer.y, this._end = this._bufferService.buffer.y;
                    }, e225.prototype.markDirty = function(e) {
                        e < this._start ? this._start = e : e > this._end && (this._end = e);
                    }, e225.prototype.markRangeDirty = function(e, t) {
                        if (e > t) {
                            var r = e;
                            e = t, t = r;
                        }
                        e < this._start && (this._start = e), t > this._end && (this._end = t);
                    }, e225.prototype.markAllDirty = function() {
                        this.markRangeDirty(0, this._bufferService.rows - 1);
                    }, i55([
                        n47(0, o39.IBufferService)
                    ], e225);
                }();
                t142.DirtyRowService = s41;
            },
            4348: function(e226, t143, r82) {
                var i56 = this && this.__spreadArray || function(e, t, r) {
                    if (r || 2 === arguments.length) for(var i, n = 0, o = t.length; n < o; n++)!i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
                    return e.concat(i || Array.prototype.slice.call(t));
                };
                Object.defineProperty(t143, "__esModule", {
                    value: !0
                }), t143.InstantiationService = t143.ServiceCollection = void 0;
                var n48 = r82(2585), o40 = r82(8343), s42 = function() {
                    function e227() {
                        for(var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
                        this._entries = new Map;
                        for(var r = 0, i = e; r < i.length; r++){
                            var n = i[r], o = n[0], s = n[1];
                            this.set(o, s);
                        }
                    }
                    return e227.prototype.set = function(e, t) {
                        var r = this._entries.get(e);
                        return this._entries.set(e, t), r;
                    }, e227.prototype.forEach = function(e) {
                        this._entries.forEach(function(t, r) {
                            return e(r, t);
                        });
                    }, e227.prototype.has = function(e) {
                        return this._entries.has(e);
                    }, e227.prototype.get = function(e) {
                        return this._entries.get(e);
                    }, e227;
                }();
                t143.ServiceCollection = s42;
                var a38 = function() {
                    function e228() {
                        this._services = new s42, this._services.set(n48.IInstantiationService, this);
                    }
                    return e228.prototype.setService = function(e, t) {
                        this._services.set(e, t);
                    }, e228.prototype.getService = function(e) {
                        return this._services.get(e);
                    }, e228.prototype.createInstance = function(e229) {
                        for(var t144 = [], r = 1; r < arguments.length; r++)t144[r - 1] = arguments[r];
                        for(var n = (0, o40.getServiceDependencies)(e229).sort(function(e, t) {
                            return e.index - t.index;
                        }), s = [], a = 0, c = n; a < c.length; a++){
                            var l = c[a], h = this._services.get(l.id);
                            if (!h) throw new Error("[createInstance] " + e229.name + " depends on UNKNOWN service " + l.id + ".");
                            s.push(h);
                        }
                        var u = n.length > 0 ? n[0].index : t144.length;
                        if (t144.length !== u) throw new Error("[createInstance] First service dependency of " + e229.name + " at position " + (u + 1) + " conflicts with " + t144.length + " static arguments");
                        return new (e229.bind.apply(e229, i56([
                            void 0
                        ], i56(i56([], t144, !0), s, !0), !1)));
                    }, e228;
                }();
                t143.InstantiationService = a38;
            },
            7866: function(e230, t145, r83) {
                var i57 = this && this.__decorate || function(e, t, r, i) {
                    var n, o = arguments.length, s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i);
                    else for(var a = e.length - 1; a >= 0; a--)(n = e[a]) && (s = (o < 3 ? n(s) : o > 3 ? n(t, r, s) : n(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s;
                }, n49 = this && this.__param || function(e, t) {
                    return function(r, i) {
                        t(r, i, e);
                    };
                }, o41 = this && this.__spreadArray || function(e, t, r) {
                    if (r || 2 === arguments.length) for(var i, n = 0, o = t.length; n < o; n++)!i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
                    return e.concat(i || Array.prototype.slice.call(t));
                };
                Object.defineProperty(t145, "__esModule", {
                    value: !0
                }), t145.LogService = void 0;
                var s43 = r83(2585), a39 = {
                    debug: s43.LogLevelEnum.DEBUG,
                    info: s43.LogLevelEnum.INFO,
                    warn: s43.LogLevelEnum.WARN,
                    error: s43.LogLevelEnum.ERROR,
                    off: s43.LogLevelEnum.OFF
                }, c = function() {
                    function e231(e232) {
                        var t = this;
                        this._optionsService = e232, this.logLevel = s43.LogLevelEnum.OFF, this._updateLogLevel(), this._optionsService.onOptionChange(function(e) {
                            "logLevel" === e && t._updateLogLevel();
                        });
                    }
                    return e231.prototype._updateLogLevel = function() {
                        this.logLevel = a39[this._optionsService.rawOptions.logLevel];
                    }, e231.prototype._evalLazyOptionalParams = function(e) {
                        for(var t = 0; t < e.length; t++)"function" == typeof e[t] && (e[t] = e[t]());
                    }, e231.prototype._log = function(e, t, r) {
                        this._evalLazyOptionalParams(r), e.call.apply(e, o41([
                            console,
                            "xterm.js: " + t
                        ], r, !1));
                    }, e231.prototype.debug = function(e) {
                        for(var t = [], r = 1; r < arguments.length; r++)t[r - 1] = arguments[r];
                        this.logLevel <= s43.LogLevelEnum.DEBUG && this._log(console.log, e, t);
                    }, e231.prototype.info = function(e) {
                        for(var t = [], r = 1; r < arguments.length; r++)t[r - 1] = arguments[r];
                        this.logLevel <= s43.LogLevelEnum.INFO && this._log(console.info, e, t);
                    }, e231.prototype.warn = function(e) {
                        for(var t = [], r = 1; r < arguments.length; r++)t[r - 1] = arguments[r];
                        this.logLevel <= s43.LogLevelEnum.WARN && this._log(console.warn, e, t);
                    }, e231.prototype.error = function(e) {
                        for(var t = [], r = 1; r < arguments.length; r++)t[r - 1] = arguments[r];
                        this.logLevel <= s43.LogLevelEnum.ERROR && this._log(console.error, e, t);
                    }, i57([
                        n49(0, s43.IOptionsService)
                    ], e231);
                }();
                t145.LogService = c;
            },
            7302: function(e233, t146, r84) {
                var i58 = this && this.__assign || function() {
                    return i58 = Object.assign || function(e) {
                        for(var t, r = 1, i = arguments.length; r < i; r++)for(var n in t = arguments[r])Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e;
                    }, i58.apply(this, arguments);
                };
                Object.defineProperty(t146, "__esModule", {
                    value: !0
                }), t146.OptionsService = t146.DEFAULT_OPTIONS = t146.DEFAULT_BELL_SOUND = void 0;
                var n50 = r84(8460), o42 = r84(6114);
                t146.DEFAULT_BELL_SOUND = "data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjMyLjEwNAAAAAAAAAAAAAAA//tQxAADB8AhSmxhIIEVCSiJrDCQBTcu3UrAIwUdkRgQbFAZC1CQEwTJ9mjRvBA4UOLD8nKVOWfh+UlK3z/177OXrfOdKl7pyn3Xf//WreyTRUoAWgBgkOAGbZHBgG1OF6zM82DWbZaUmMBptgQhGjsyYqc9ae9XFz280948NMBWInljyzsNRFLPWdnZGWrddDsjK1unuSrVN9jJsK8KuQtQCtMBjCEtImISdNKJOopIpBFpNSMbIHCSRpRR5iakjTiyzLhchUUBwCgyKiweBv/7UsQbg8isVNoMPMjAAAA0gAAABEVFGmgqK////9bP/6XCykxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", t146.DEFAULT_OPTIONS = {
                    cols: 80,
                    rows: 24,
                    cursorBlink: !1,
                    cursorStyle: "block",
                    cursorWidth: 1,
                    customGlyphs: !0,
                    bellSound: t146.DEFAULT_BELL_SOUND,
                    bellStyle: "none",
                    drawBoldTextInBrightColors: !0,
                    fastScrollModifier: "alt",
                    fastScrollSensitivity: 5,
                    fontFamily: "courier-new, courier, monospace",
                    fontSize: 15,
                    fontWeight: "normal",
                    fontWeightBold: "bold",
                    lineHeight: 1,
                    linkTooltipHoverDuration: 500,
                    letterSpacing: 0,
                    logLevel: "info",
                    scrollback: 1000,
                    scrollSensitivity: 1,
                    screenReaderMode: !1,
                    macOptionIsMeta: !1,
                    macOptionClickForcesSelection: !1,
                    minimumContrastRatio: 1,
                    disableStdin: !1,
                    allowProposedApi: !0,
                    allowTransparency: !1,
                    tabStopWidth: 8,
                    theme: {},
                    rightClickSelectsWord: o42.isMac,
                    rendererType: "canvas",
                    windowOptions: {},
                    windowsMode: !1,
                    wordSeparator: " ()[]{}',\"`",
                    altClickMovesCursor: !0,
                    convertEol: !1,
                    termName: "xterm",
                    cancelEvents: !1
                };
                var s44 = [
                    "normal",
                    "bold",
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900"
                ], a = function() {
                    function e234(e) {
                        this._onOptionChange = new n50.EventEmitter;
                        var r = i58({}, t146.DEFAULT_OPTIONS);
                        for(var o in e)if (o in r) try {
                            var s = e[o];
                            r[o] = this._sanitizeAndValidateOption(o, s);
                        } catch (e235) {
                            console.error(e235);
                        }
                        this.rawOptions = r, this.options = i58({}, r), this._setupOptions();
                    }
                    return Object.defineProperty(e234.prototype, "onOptionChange", {
                        get: function() {
                            return this._onOptionChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e234.prototype._setupOptions = function() {
                        var e = this, r85 = function(r) {
                            if (!(r in t146.DEFAULT_OPTIONS)) throw new Error('No option with key "' + r + '"');
                            return e.rawOptions[r];
                        }, i59 = function(r, i) {
                            if (!(r in t146.DEFAULT_OPTIONS)) throw new Error('No option with key "' + r + '"');
                            i = e._sanitizeAndValidateOption(r, i), e.rawOptions[r] !== i && (e.rawOptions[r] = i, e._onOptionChange.fire(r));
                        };
                        for(var n in this.rawOptions){
                            var o = {
                                get: r85.bind(this, n),
                                set: i59.bind(this, n)
                            };
                            Object.defineProperty(this.options, n, o);
                        }
                    }, e234.prototype.setOption = function(e, t) {
                        this.options[e] = t;
                    }, e234.prototype._sanitizeAndValidateOption = function(e, r) {
                        switch(e){
                            case "bellStyle":
                            case "cursorStyle":
                            case "rendererType":
                            case "wordSeparator":
                                r || (r = t146.DEFAULT_OPTIONS[e]);
                                break;
                            case "fontWeight":
                            case "fontWeightBold":
                                if ("number" == typeof r && 1 <= r && r <= 1000) break;
                                r = s44.includes(r) ? r : t146.DEFAULT_OPTIONS[e];
                                break;
                            case "cursorWidth":
                                r = Math.floor(r);
                            case "lineHeight":
                            case "tabStopWidth":
                                if (r < 1) throw new Error(e + " cannot be less than 1, value: " + r);
                                break;
                            case "minimumContrastRatio":
                                r = Math.max(1, Math.min(21, Math.round(10 * r) / 10));
                                break;
                            case "scrollback":
                                if ((r = Math.min(r, 4294967295)) < 0) throw new Error(e + " cannot be less than 0, value: " + r);
                                break;
                            case "fastScrollSensitivity":
                            case "scrollSensitivity":
                                if (r <= 0) throw new Error(e + " cannot be less than or equal to 0, value: " + r);
                            case "rows":
                            case "cols":
                                if (!r && 0 !== r) throw new Error(e + " must be numeric, value: " + r);
                        }
                        return r;
                    }, e234.prototype.getOption = function(e) {
                        return this.options[e];
                    }, e234;
                }();
                t146.OptionsService = a;
            },
            8343: (e236, t147)=>{
                function r86(e, t, r) {
                    t.di$target === t ? t.di$dependencies.push({
                        id: e,
                        index: r
                    }) : (t.di$dependencies = [
                        {
                            id: e,
                            index: r
                        }
                    ], t.di$target = t);
                }
                Object.defineProperty(t147, "__esModule", {
                    value: !0
                }), t147.createDecorator = t147.getServiceDependencies = t147.serviceRegistry = void 0, t147.serviceRegistry = new Map, t147.getServiceDependencies = function(e) {
                    return e.di$dependencies || [];
                }, t147.createDecorator = function(e237) {
                    if (t147.serviceRegistry.has(e237)) return t147.serviceRegistry.get(e237);
                    var i = function(e, t, n) {
                        if (3 !== arguments.length) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
                        r86(i, e, n);
                    };
                    return i.toString = function() {
                        return e237;
                    }, t147.serviceRegistry.set(e237, i), i;
                };
            },
            2585: (e, t, r)=>{
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.IUnicodeService = t.IOptionsService = t.ILogService = t.LogLevelEnum = t.IInstantiationService = t.IDirtyRowService = t.ICharsetService = t.ICoreService = t.ICoreMouseService = t.IBufferService = void 0;
                var i, n = r(8343);
                t.IBufferService = (0, n.createDecorator)("BufferService"), t.ICoreMouseService = (0, n.createDecorator)("CoreMouseService"), t.ICoreService = (0, n.createDecorator)("CoreService"), t.ICharsetService = (0, n.createDecorator)("CharsetService"), t.IDirtyRowService = (0, n.createDecorator)("DirtyRowService"), t.IInstantiationService = (0, n.createDecorator)("InstantiationService"), (i = t.LogLevelEnum || (t.LogLevelEnum = {}))[i.DEBUG = 0] = "DEBUG", i[i.INFO = 1] = "INFO", i[i.WARN = 2] = "WARN", i[i.ERROR = 3] = "ERROR", i[i.OFF = 4] = "OFF", t.ILogService = (0, n.createDecorator)("LogService"), t.IOptionsService = (0, n.createDecorator)("OptionsService"), t.IUnicodeService = (0, n.createDecorator)("UnicodeService");
            },
            1480: (e238, t148, r87)=>{
                Object.defineProperty(t148, "__esModule", {
                    value: !0
                }), t148.UnicodeService = void 0;
                var i60 = r87(8460), n51 = r87(225), o43 = function() {
                    function e239() {
                        this._providers = Object.create(null), this._active = "", this._onChange = new i60.EventEmitter;
                        var e = new n51.UnicodeV6;
                        this.register(e), this._active = e.version, this._activeProvider = e;
                    }
                    return Object.defineProperty(e239.prototype, "onChange", {
                        get: function() {
                            return this._onChange.event;
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e239.prototype, "versions", {
                        get: function() {
                            return Object.keys(this._providers);
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e239.prototype, "activeVersion", {
                        get: function() {
                            return this._active;
                        },
                        set: function(e) {
                            if (!this._providers[e]) throw new Error('unknown Unicode version "' + e + '"');
                            this._active = e, this._activeProvider = this._providers[e], this._onChange.fire(e);
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e239.prototype.register = function(e) {
                        this._providers[e.version] = e;
                    }, e239.prototype.wcwidth = function(e) {
                        return this._activeProvider.wcwidth(e);
                    }, e239.prototype.getStringCellWidth = function(e) {
                        for(var t = 0, r = e.length, i = 0; i < r; ++i){
                            var n = e.charCodeAt(i);
                            if (55296 <= n && n <= 56319) {
                                if (++i >= r) return t + this.wcwidth(n);
                                var o = e.charCodeAt(i);
                                56320 <= o && o <= 57343 ? n = 1024 * (n - 55296) + o - 56320 + 65536 : t += this.wcwidth(o);
                            }
                            t += this.wcwidth(n);
                        }
                        return t;
                    }, e239;
                }();
                t148.UnicodeService = o43;
            }
        }, t1 = {};
        return function r(i) {
            var n = t1[i];
            if (void 0 !== n) return n.exports;
            var o = t1[i] = {
                exports: {}
            };
            return e1[i].call(o.exports, o, o.exports, r), o.exports;
        }(4389);
    })();
});

},{}],"a5mjI":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(self, function() {
    return (()=>{
        var e1 = {
            775: (e2, t2)=>{
                Object.defineProperty(t2, "__esModule", {
                    value: !0
                }), t2.FitAddon = void 0;
                var r1 = function() {
                    function e3() {}
                    return e3.prototype.activate = function(e) {
                        this._terminal = e;
                    }, e3.prototype.dispose = function() {}, e3.prototype.fit = function() {
                        var e = this.proposeDimensions();
                        if (e && this._terminal) {
                            var t = this._terminal._core;
                            this._terminal.rows === e.rows && this._terminal.cols === e.cols || (t._renderService.clear(), this._terminal.resize(e.cols, e.rows));
                        }
                    }, e3.prototype.proposeDimensions = function() {
                        if (this._terminal && this._terminal.element && this._terminal.element.parentElement) {
                            var e = this._terminal._core;
                            if (0 !== e._renderService.dimensions.actualCellWidth && 0 !== e._renderService.dimensions.actualCellHeight) {
                                var t = window.getComputedStyle(this._terminal.element.parentElement), r = parseInt(t.getPropertyValue("height")), i = Math.max(0, parseInt(t.getPropertyValue("width"))), n = window.getComputedStyle(this._terminal.element), o = r - (parseInt(n.getPropertyValue("padding-top")) + parseInt(n.getPropertyValue("padding-bottom"))), a = i - (parseInt(n.getPropertyValue("padding-right")) + parseInt(n.getPropertyValue("padding-left"))) - e.viewport.scrollBarWidth;
                                return {
                                    cols: Math.max(2, Math.floor(a / e._renderService.dimensions.actualCellWidth)),
                                    rows: Math.max(1, Math.floor(o / e._renderService.dimensions.actualCellHeight))
                                };
                            }
                        }
                    }, e3;
                }();
                t2.FitAddon = r1;
            }
        }, t1 = {};
        return function r(i) {
            if (t1[i]) return t1[i].exports;
            var n = t1[i] = {
                exports: {}
            };
            return e1[i](n, n.exports, r), n.exports;
        }(775);
    })();
});

},{}]},["cX96g","3B1EN"], "3B1EN", "parcelRequire1d12")

//# sourceMappingURL=devIndex.b09edd77.js.map
