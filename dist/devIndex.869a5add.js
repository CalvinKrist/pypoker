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
})({"jjamN":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "524d3c90869a5add";
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

},{}],"6aAXe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "game", ()=>game
);
parcelHelpers.export(exports, "createGame", ()=>createGame
);
var _cardsPng = require("./assets/cards.png");
var _cardsPngDefault = parcelHelpers.interopDefault(_cardsPng);
var _userIconPng = require("./assets/user_icon.png");
var _userIconPngDefault = parcelHelpers.interopDefault(_userIconPng);
var _activeUserIconPng = require("./assets/active_user_icon.png");
var _activeUserIconPngDefault = parcelHelpers.interopDefault(_activeUserIconPng);
var _cardBackPng = require("./assets/card_back.png");
var _cardBackPngDefault = parcelHelpers.interopDefault(_cardBackPng);
var _pokerChipPng = require("./assets/poker_chip.png");
var _pokerChipPngDefault = parcelHelpers.interopDefault(_pokerChipPng);
var _roundRectPng = require("./assets/round_rect.png");
var _roundRectPngDefault = parcelHelpers.interopDefault(_roundRectPng);
var _button = require("./Button");
var _userSprite = require("./UserSprite");
var _readystate = require("../messages/readystate");
var _pubsubJs = require("pubsub-js");
var _pubsubJsDefault = parcelHelpers.interopDefault(_pubsubJs);
var _phaserMinJs = require("./phaser.min.js");
var _phaserMinJsDefault = parcelHelpers.interopDefault(_phaserMinJs);
var _gameOptions = require("./GameOptions");
var _gameState = require("../state/GameState");
var _playeraction = require("../messages/playeraction");
let game;
let renderer;
function arrayRotate(arr, reverse) {
    arr.push(arr.shift());
    return arr;
}
function createGame() {
    document.body.style['overflow'] = 'hidden';
    let gameConfig = {
        type: _phaserMinJsDefault.default.AUTO,
        backgroundColor: 13421772,
        scale: {
            mode: _phaserMinJsDefault.default.Scale.RESIZE,
            autoCenter: _phaserMinJsDefault.default.Scale.CENTER_BOTH,
            parent: "canvas"
        },
        scene: PlayGame,
        dom: {
            createContainer: true
        }
    };
    game = new _phaserMinJsDefault.default.Game(gameConfig);
    renderer = game.scene;
    window.focus();
    var doit;
    window.onresize = function(event) {
        clearTimeout(doit);
        doit = setTimeout(resizedw, 100);
    };
    return renderer;
}
function resizedw() {
    renderer.scenes[0].scene.restart();
}
class DealerChit extends _phaserMinJsDefault.default.GameObjects.Container {
    constructor(scene, x, y){
        super(scene, x, y);
        scene.children.add(this);
        this.dealer_chit_outline = scene.add.ellipse(0, 0, 40, 40, 0);
        this.dealer_chit_fill = scene.add.ellipse(0, 0, 32, 32, 16777215);
        this.dealer_chit_label = scene.add.text(0, 0, 'D', {
            fontFamily: 'Quicksand',
            fontSize: '32px',
            color: '#000',
            align: 'center'
        }).setOrigin(0.5);
        this.add(this.dealer_chit_outline);
        this.add(this.dealer_chit_fill);
        this.add(this.dealer_chit_label);
    }
}
/*
This implementes Player, but because this is JS and not TS 
the 'implements Player' syntax doesn't work
*/ class PlayGame extends _phaserMinJsDefault.default.Scene {
    constructor(){
        super("PlayGame");
        this.state = new _gameState.GameState();
        this.userId = null;
        this.room = null;
    }
    preload() {
        // loading the sprite sheet with all cards
        this.load.spritesheet("cards", _cardsPngDefault.default, {
            frameWidth: _gameOptions.gameOptions.cardWidth,
            frameHeight: _gameOptions.gameOptions.cardHeight
        });
        this.load.image("user_icon", _userIconPngDefault.default);
        this.load.image("active_user_icon", _activeUserIconPngDefault.default);
        this.load.image("card_back", _cardBackPngDefault.default);
        this.load.image("poker_chip", _pokerChipPngDefault.default);
        this.load.image("round_rect", _roundRectPngDefault.default);
        this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);
    }
    create() {
        // create an array with 52 integers from 0 to 51
        this.deck = _phaserMinJsDefault.default.Utils.Array.NumberArray(0, 51);
        // Render poker table
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.table = this.add.ellipse(screenCenterX, screenCenterY, this.cameras.main.width / 1.4, this.cameras.main.height * 0.45, 3499341);
        let pot_size_x_anchor = 10;
        this.pot_size = this.add.text(pot_size_x_anchor, this.cameras.main.height * 0.98, "Pot: " + this.state.pot, {
            fontFamily: 'Quicksand',
            fontSize: '64px',
            color: '#000',
            align: 'center'
        }).setOrigin(1).setVisible(false);
        _pubsubJsDefault.default.subscribe('running', (_, change)=>{
            if (change.previousValue != change.value) this.pot_size.setVisible(change.value);
        });
        _pubsubJsDefault.default.subscribe('pot', (_, change)=>{
            if (change.previousValue != change.value) {
                this.pot_size.setText("Pot: " + change.value);
                this.pot_size.x = pot_size_x_anchor + this.pot_size.displayWidth;
            }
        });
        _pubsubJsDefault.default.subscribe('num-winners', (_, change)=>{
            if (this.state.winners["$items"].length > 0) this.pot_size.setVisible(false);
        });
        this.dealerChit = new DealerChit(this, 0, 0);
        this.dealerChit.setVisible(false);
        let player_sprites = [];
        for(let i1 = 0; i1 < 6; i1++)player_sprites.push(new _userSprite.UserSprite(this, -1000, -1000, this.dealerChit));
        this.raise_btn = this.drawButton("Raise To", this.cameras.main.width, this.cameras.main.height * 0.9, ()=>{});
        this.raise_btn.x -= this.raise_btn.width * 0.5 + 30;
        this.call = this.drawButton("Call", this.raise_btn.x - this.raise_btn.width * 0.5 - 5, this.cameras.main.height * 0.9, ()=>{
            this.room.send("call", {});
        });
        this.call.x -= this.call.width * 0.5;
        this.fold = this.drawButton("Fold", this.call.x - this.call.width * 0.5 - 5, this.cameras.main.height * 0.9, ()=>{
            this.room.send("fold", {});
        });
        this.fold.x -= this.fold.width * 0.5;
        this.fold.setVisible(false);
        this.call.setVisible(false);
        this.raise_btn.setVisible(false);
        this.fold.setBgColor(13935950);
        this.call.setBgColor(13935950);
        this.raise_btn.setBgColor(13935950);
        this.fold.setBgMouseOverColor(12420154);
        this.call.setBgMouseOverColor(12420154);
        this.raise_btn.setBgMouseOverColor(12420154);
        this.fold.setFontMouseOverColor("#fff");
        this.call.setFontMouseOverColor("#fff");
        this.raise_btn.setFontMouseOverColor("#fff");
        this.bet_submit_btn = this.drawSquareButton("Send", this.raise_btn.x + this.raise_btn.displayWidth * 0.3, this.raise_btn.y - this.raise_btn.displayHeight * 1.2, ()=>{});
        this.bet_submit_btn.setStyle({
            fontFamily: 'Quicksand',
            fontSize: '18px',
            color: '#fff',
            align: 'center'
        });
        this.bet_submit_btn.setVisible(false);
        this.betInput = this.add.rexInputText(this.bet_submit_btn.x - this.bet_submit_btn.width - 5, this.bet_submit_btn.y, 80, 40, {
            type: 'textarea',
            fontFamily: 'Quicksand',
            text: '',
            fontSize: '24px',
            backgroundColor: 'white',
            paddingTop: 0,
            paddingBottom: 0,
            color: '#000000',
            borderColor: '#000000',
            border: 3
        });
        this.betInput.setVisible(false);
        this.betInput.height = this.bet_submit_btn.displayHeight;
        this.betInput.setTooltip("Bet size in big blinds");
        this.bet_submit_btn.on('pointerdown', ()=>{
            this.room.send("raise", _playeraction.raise(Number(this.betInput.text)));
        });
        let visible = false;
        this.betInput.visible = visible;
        this.bet_submit_btn.visible = visible;
        this.raise_btn.on('pointerdown', ()=>{
            visible = !visible;
            this.betInput.visible = visible;
            this.bet_submit_btn.visible = visible;
        });
        let player_pos_map = new Map();
        let player_states = new Map();
        _pubsubJsDefault.default.subscribe('state-change', (_, __)=>{
            for (let player_sprite of player_sprites)player_sprite.setVisible(false);
            const player_ids = this.state.player_order;
            const players = this.state.player_map;
            // Rotate the player state so the player is in the center bottom
            let player_keys = Array.from(player_ids.values());
            if (player_keys.length > 0 && player_keys.indexOf(this.userId) != -1) while(players.get(player_keys[0]).id != this.userId)arrayRotate(player_keys);
            let index = 0;
            for (let key of player_keys){
                const [x, y] = this.get_player_location(players.size, index);
                player_sprites[index].setPosition(x, y);
                let player_state = JSON.stringify(players.get(key));
                // Update the sprite when the player changes
                if (player_pos_map.has(key) && player_pos_map.get(key) == index && player_states.get(key) != player_state) player_sprites[index].updatePlayer(this, players.get(key));
                else if (!player_pos_map.has(key) || player_pos_map.get(key) != index) player_sprites[index].setNewPlayer(this, players.get(key));
                player_pos_map.set(key, index);
                player_states.set(key, player_state);
                player_sprites[index++].setVisible(true);
            }
            // Create player actions
            if (this.state.winners["$items"].length == 0 && player_keys.indexOf(this.userId) != -1 && this.state.running && players.get(this.userId).isTurn) {
                this.fold.setVisible(true);
                this.call.setVisible(true);
                this.raise_btn.setVisible(true);
            } else {
                visible = false;
                this.fold.setVisible(false);
                this.call.setVisible(false);
                this.raise_btn.setVisible(false);
                this.betInput.setVisible(false);
                this.bet_submit_btn.setVisible(false);
            }
        });
        // TODO: when the window is resized mid-game, this becomes visible
        this.startbutton = this.drawButton("BEGIN", screenCenterX, screenCenterY, ()=>{
            this.room.send("ready", _readystate.READY);
            this.waiting_message.visible = true;
            this.startbutton.setVisible(false);
        });
        this.waiting_message = this.add.text(screenCenterX, screenCenterY, 'WAITING', {
            fontFamily: 'Quicksand',
            fontSize: '32px',
            color: '#fff',
            align: 'center'
        }).setOrigin(0.5).setVisible(false);
        _pubsubJsDefault.default.subscribe('running', (_, change)=>{
            if (change.previousValue != change.value) {
                if (change.value == true) this.waiting_message.setVisible(false);
                else this.startbutton.setVisible(true);
            }
        });
        _pubsubJsDefault.default.subscribe('state-change', (_, __)=>{
            if (!this.state.running && this.state.player_order.indexOf(this.userId) == -1) this.startbutton.setVisible(false);
        });
        _pubsubJsDefault.default.subscribe('num-winners', (_, __)=>{
            if (this.state.winners["$items"].length > 0 && this.state.player_order.indexOf(this.userId) != -1) {
                this.startbutton.setVisible(true);
                this.startbutton.setText("Next Hand");
                this.startbutton.y = screenCenterY * 1.3;
                this.children.bringToTop(this.startbutton);
            }
        });
        // Draw the river
        // TODO: when the river is visible and a window is resized, the 
        // old river is not deleted even when the new one is drawn
        let board_sprites = [];
        let update_board = ()=>{
            for (let card of board_sprites)card.destroy();
            board_sprites = [];
            let board = Array.from(this.state.board);
            let scale_up = 1.2;
            if (board.length > 0) {
                let card_with = _gameOptions.gameOptions.cardWidth * _gameOptions.gameOptions.cardScale * scale_up + 15;
                let x_offset = screenCenterX - card_with * board.length / 2 + card_with / 2;
                let i = 0;
                for (let card of board){
                    let card_sprite = this.createCard(card.suit, card.value).setOrigin(0.5);
                    card_sprite.scale *= scale_up;
                    card_sprite.x = i * card_with + x_offset;
                    card_sprite.y = screenCenterY;
                    i += 1;
                    board_sprites.push(card_sprite);
                }
            }
        };
        _pubsubJsDefault.default.subscribe("num-board", (_)=>{
            update_board();
        });
        // Draw the winner
        this.winner_text = this.add.text(screenCenterX, screenCenterY * 0.7, '', {
            fontFamily: 'Quicksand',
            fontSize: '48px',
            color: '#fff',
            align: 'center',
            stroke: "#000",
            fontWeight: 'bold',
            strokeThickness: 8
        }).setOrigin(0.5).setVisible(false);
        // The value is filled in, even when it's null for the server -- 
        // but it's primitive children can be undefined
        if (this.state.winningMessage != null) {
            this.winner_text.setVisible(true);
            this.winner_text.setText(this.state.winningMessage);
        }
        _pubsubJsDefault.default.subscribe('state-change', (_, __)=>{
            if (this.state.winningMessage) {
                this.winner_text.setVisible(true);
                this.winner_text.setText(this.state.winningMessage);
                this.children.bringToTop(this.winner_text);
            } else this.winner_text.setVisible(false);
        });
        // Trigger some events immediatly so we display the correct values
        _pubsubJsDefault.default.publishSync('state-change', {});
        _pubsubJsDefault.default.publishSync('num-board', {});
        _pubsubJsDefault.default.publishSync('num-winners', {});
    }
    drawButton(text, x, y, callback) {
        let button = new _button.Button(this, x, y, text, callback);
        return button;
    }
    drawSquareButton(text, x, y, callback) {
        let button = this.add.text(x, y, text, {
            fontFamily: 'Quicksand',
            fontSize: '32px',
            color: '#fff',
            align: 'center'
        }).setOrigin(0.5).setPadding(10).setStyle({
            backgroundColor: "#111"
        }).setInteractive({
            useHandCursor: true
        }).on('pointerover', ()=>button.setStyle({
                fill: "#f39c12"
            })
        ).on('pointerout', ()=>button.setStyle({
                fill: "#FFF"
            })
        ).on('pointerdown', callback);
        return button;
    }
    updateState(gameState) {
        gameState.player_map = new Map(Object.entries(gameState.player_map));
        gameState.player_map["$items"] = gameState.player_map;
        gameState.winners["$items"] = gameState.winners;
        gameState.player_order["$items"] = gameState.player_order;
        gameState.board["$items"] = gameState.board;
        for (let player of gameState.player_map.values())player.hand["$items"] = player.hand;
        let old_num_winners = 0;
        if (this.state && this.state.winners) old_num_winners = this.state.winners.length;
        let old_num_board = 0;
        if (this.state && this.state.board) old_num_board = this.state.board.length;
        this.state = gameState;
        _pubsubJsDefault.default.publishSync('state-change', this.state);
        if (this.state.winners["$items"].length != old_num_winners) _pubsubJsDefault.default.publishSync('num-winners', {});
        if (this.state.board["$items"].length != old_num_board) _pubsubJsDefault.default.publishSync('num-board', {});
    }
    onStateChanges(changes) {
        changes.forEach((change)=>{
            if (typeof change.previousValue !== 'undefined') _pubsubJsDefault.default.publishSync(change.field, change);
        });
    }
    setUserId(userId) {
        this.userId = userId;
    }
    setRoom(room) {
        this.room = room;
    }
    // method to create a card, given an index
    createCard(suit, value) {
        if (value == 14) value = 1;
        let i = suit * 13 + value - 1;
        // the card itself, a sprite created outside the stage, on the left
        let card = this.add.sprite(-_gameOptions.gameOptions.cardWidth * _gameOptions.gameOptions.cardScale, game.config.height / 2, "cards", this.deck[i]);
        // scale the sprite
        card.setScale(_gameOptions.gameOptions.cardScale);
        // return the card
        return card;
    }
    get_player_location(num_players, player_index) {
        const center_x = 0.5;
        const player_bottom = 0.82;
        const player_top = 0.13;
        const left_player_x = 0.3;
        const right_player_x = 0.7;
        const far_left_player_x = 0.2;
        const far_right_player_x = 0.8;
        const upper_edge_y = 0.22;
        const lower_edge_y = 0.78;
        const upper_shared_y = 0.16;
        const lower_shared_y = 0.79;
        const mapping = {
            1: [
                [
                    center_x,
                    player_bottom
                ]
            ],
            2: [
                [
                    center_x,
                    player_bottom
                ],
                [
                    center_x,
                    player_top
                ]
            ],
            3: [
                [
                    center_x,
                    player_bottom
                ],
                [
                    left_player_x,
                    upper_shared_y
                ],
                [
                    right_player_x,
                    upper_shared_y
                ]
            ],
            4: [
                [
                    right_player_x,
                    lower_shared_y
                ],
                [
                    left_player_x,
                    lower_shared_y
                ],
                [
                    left_player_x,
                    upper_shared_y
                ],
                [
                    right_player_x,
                    upper_shared_y
                ]
            ],
            5: [
                [
                    right_player_x,
                    lower_shared_y
                ],
                [
                    left_player_x,
                    lower_shared_y
                ],
                [
                    far_left_player_x,
                    upper_edge_y
                ],
                [
                    center_x,
                    player_top
                ],
                [
                    far_right_player_x,
                    upper_edge_y
                ]
            ],
            6: [
                [
                    center_x,
                    player_bottom
                ],
                [
                    far_left_player_x,
                    lower_edge_y
                ],
                [
                    far_left_player_x,
                    upper_edge_y
                ],
                [
                    center_x,
                    player_top
                ],
                [
                    far_right_player_x,
                    upper_edge_y
                ],
                [
                    far_right_player_x,
                    lower_edge_y
                ]
            ]
        };
        let player_loc = mapping[num_players][player_index];
        return [
            this.cameras.main.worldView.x + this.cameras.main.width * player_loc[0],
            this.cameras.main.worldView.y + this.cameras.main.height * player_loc[1]
        ];
    }
    onServerError(errorMessage) {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        let errorTxt = this.add.text(screenCenterX, screenCenterY, errorMessage.error, {
            fontFamily: 'Quicksand',
            fontSize: '32px',
            color: '#ff0000',
            align: 'center',
            stroke: "#000",
            fontWeight: 'bold',
            strokeThickness: 8
        }).setOrigin(0.5).setPadding(10).setStyle({
            backgroundColor: "#111"
        }).setVisible(true);
        var tween = this.tweens.add({
            targets: errorTxt,
            alpha: 0,
            ease: 'linear',
            delay: 1000,
            duration: 500,
            onComplete: function() {
                errorTxt.destroy();
            }
        });
    }
}

},{"./assets/cards.png":"9H5j7","./assets/user_icon.png":"TQFdN","./assets/active_user_icon.png":"012wM","./assets/card_back.png":"69fkW","./assets/poker_chip.png":"1FOdH","./assets/round_rect.png":"dmYsQ","./Button":"ls0za","./UserSprite":"1immA","../messages/readystate":"azZen","pubsub-js":"7Q0x0","./phaser.min.js":"boWxm","./GameOptions":"eXjCt","../state/GameState":"5hkYg","../messages/playeraction":"lgSKO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9H5j7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('745A8') + "cards.19e466de.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"TQFdN":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('745A8') + "user_icon.a19cd842.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"012wM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('745A8') + "active_user_icon.8715ba99.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"69fkW":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('745A8') + "card_back.6c87db62.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1FOdH":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('745A8') + "poker_chip.9d888b01.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dmYsQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('745A8') + "round_rect.dcb5c51a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"ls0za":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Button", ()=>Button
);
var _phaserMinJs = require("./phaser.min.js");
var _phaserMinJsDefault = parcelHelpers.interopDefault(_phaserMinJs);
class Button extends _phaserMinJsDefault.default.GameObjects.Container {
    constructor(scene, x, y, text, callback){
        super(scene, x, y);
        scene.children.add(this);
        this.bgColor = 0;
        this.bgMouseOverColor = 0;
        this.fontColor = "#fff";
        this.fontMouseOverColor = "#f39c12";
        let tmp = this;
        this.button = scene.add.text(0, 0, text, {
            fontFamily: 'Quicksand',
            fontSize: '32px',
            color: tmp.fontColor,
            align: 'center'
        }).setOrigin(0.5).setInteractive({
            useHandCursor: true
        }).on('pointerover', ()=>{
            tmp.button.setStyle({
                fill: tmp.fontMouseOverColor
            });
            tmp.bg.tint = tmp.bgMouseOverColor;
        }).on('pointerout', ()=>{
            tmp.button.setStyle({
                fill: tmp.fontColor
            });
            tmp.bg.tint = tmp.bgColor;
        }).on('pointerdown', callback);
        this.bg = scene.add.image(0, 0, "round_rect");
        this.bg.tint = this.bgColor;
        this.add(this.button);
        this.add(this.bg);
        this.bringToTop(this.button);
        this.resize();
    }
    setBgColor(color) {
        this.bg.tint = color;
        this.bgColor = color;
    }
    setBgMouseOverColor(color) {
        this.bgMouseOverColor = color;
    }
    setFontColor(color) {
        this.button.setStyle({
            fill: color
        });
        this.fontColor = color;
    }
    setFontMouseOverColor(color) {
        this.fontMouseOverColor = color;
    }
    set(property, value) {
        this.button[property] = value;
        this.bg[property] = value;
    }
    setText(text) {
        this.button.setText(text);
        this.resize();
    }
    resize() {
        let y_pad = 12;
        let x_pad = 12;
        let rw = this.button.displayWidth + x_pad * 2; // double padding for top and bottom
        if (rw < 110) {
            x_pad = (110 - this.button.displayWidth) / 2;
            rw = this.button.displayWidth + x_pad * 2;
        }
        let rh = this.button.displayHeight + y_pad * 2;
        this.bg.displayWidth = rw;
        this.bg.displayHeight = rh;
        // increase it by 1.3x so the button hitbox is slightly bigger than the visual hitbox
        this.button.setPadding(x_pad * 1.3, y_pad * 1.3);
        this.width = this.button.width;
        this.height = this.button.height;
        this.displayWidth = this.button.displayWidth;
        this.displayHeight = this.button.displayHeight;
    }
    on(label, functor) {
        this.button.on(label, functor);
    }
}

},{"./phaser.min.js":"boWxm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1immA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserSprite", ()=>UserSprite
);
var _card = require("./Card");
var _playeraction = require("../messages/playeraction");
const ABOVE = 0;
const BELOW = 1;
const NONE = 2;
class UserSprite extends Phaser.GameObjects.Container {
    constructor(scene, x, y, dealerChit){
        super(scene, x, y);
        scene.children.add(this);
        this.dealerChit = dealerChit;
        let name_str = "";
        let bb = 0;
        let isDealer = false;
        this.active_user_sprite = scene.add.sprite(0, 0, "active_user_icon");
        this.inactive_user_sprite = scene.add.sprite(0, 0, "user_icon");
        // Scale the user sprite to 17.5% of the camera's height
        let scaleFactor = scene.cameras.main.height / this.active_user_sprite.displayHeight;
        this.active_user_sprite.setScale(this.active_user_sprite.scale * scaleFactor * 0.175);
        this.inactive_user_sprite.setScale(this.inactive_user_sprite.scale * scaleFactor * 0.175);
        this.active_user_sprite.setVisible(false);
        this.add(this.active_user_sprite);
        this.add(this.inactive_user_sprite);
        this.name = scene.add.text(0, this.active_user_sprite.getBottomCenter().y + 10, name_str, {
            fontFamily: 'Quicksand',
            fontSize: '16px',
            color: '#000',
            align: 'center'
        }).setOrigin(0.5);
        this.add(this.name);
        this.num_chips_label = scene.add.text(0, this.active_user_sprite.getBottomCenter().y + 32, bb + " bb", {
            fontFamily: 'Quicksand',
            fontSize: '16px',
            color: '#000',
            align: 'center'
        }).setOrigin(0.5);
        this.add(this.num_chips_label);
        this.card1 = null;
        this.card2 = null;
        if (isDealer) {
            this.dealerChit.setPosition(this.x - this.active_user_sprite.displayWidth / 2, this.y);
            this.dealerChit.setVisible(true);
        }
        this.screenCenterX = scene.cameras.main.worldView.x + scene.cameras.main.width / 2;
        this.screenCenterY = scene.cameras.main.worldView.y + scene.cameras.main.height / 2;
        this.chips = [];
        let chit_x = this.active_user_sprite.displayWidth * 0.8;
        for(let i = 0; i < 4; i++){
            let chip_sprite = scene.add.sprite(chit_x + Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), "poker_chip").setOrigin(0.5);
            chip_sprite.displayHeight = 40;
            chip_sprite.displayWidth = 40;
            this.chips.push(chip_sprite);
            chip_sprite.setVisible(false);
            this.add(chip_sprite);
        }
        this.chip_label = scene.add.text(chit_x, 40, '0 BB', {
            fontFamily: 'Quicksand',
            fontSize: '24px',
            color: '#000',
            align: 'center'
        }).setOrigin(0.5);
        this.add(this.chip_label);
        this.chip_label.setVisible(false);
        this.orrientation = NONE;
    }
    dealCards(scene) {}
    foldCards(scene) {
        this.makeMessage(scene, "Fold", 15419994);
        for (let card of [
            this.card1.card,
            this.card1.shadow,
            this.card2.card,
            this.card2.shadow
        ]){
            let endY = card.y + card.displayHeight;
            let playerObj = this;
            var tween = scene.tweens.add({
                targets: card,
                y: endY,
                alpha: 0.2,
                ease: 'linear',
                delay: 50,
                duration: 400,
                onComplete: function() {
                    playerObj.deleteCards();
                }
            });
        }
    }
    call(scene) {
        this.makeMessage(scene, "Call", 15121498);
    }
    raise(scene) {
        this.makeMessage(scene, "Raise", 3969731);
    }
    makeMessage(scene, message, color) {
        let callMsg = scene.add.text(this.x, this.y, message, {
            fontFamily: 'Quicksand',
            fontSize: '36px',
            color: '#fff',
            align: 'center'
        }).setOrigin(0.5).setVisible(true);
        let padding = 12;
        let rw = callMsg.displayWidth + padding * 2;
        let rh = callMsg.displayHeight + padding;
        let bg = scene.add.image(this.x, this.y, "round_rect");
        bg.displayWidth = rw;
        bg.displayHeight = rh;
        bg.tint = color;
        var tween = scene.tweens.add({
            targets: [
                callMsg,
                bg
            ],
            alpha: 0,
            ease: 'linear',
            delay: 1200,
            duration: 560,
            onComplete: function() {
                callMsg.destroy();
                bg.destroy();
            }
        });
        scene.children.bringToTop(callMsg);
    }
    updatePlayer(scene, player) {
        let name_str = player.id;
        let bb = player.bb;
        let hand = Array.from(player.hand.values());
        let isDealer = player.isDealer;
        let active = player.isTurn;
        this.active_user_sprite.setVisible(active);
        this.inactive_user_sprite.setVisible(!active);
        if (scene.state.running && !player.inRound) this.inactive_user_sprite.alpha = 0.5;
        else this.inactive_user_sprite.alpha = 1;
        if (isDealer) {
            this.dealerChit.setPosition(this.x - this.active_user_sprite.displayWidth * 0.75, this.y + 15);
            this.dealerChit.setVisible(true);
        }
        this.name.text = name_str;
        this.num_chips_label.setText(bb + " bb");
        let newOrrientation = this.y < this.screenCenterY ? BELOW : ABOVE;
        if (player.hand.length > 0 && this.oldPlayerState.hand.length == 0) this.dealCards(scene);
        // TODO: if in a round, a player does call -> fold -> call and the game moves to the next state, this logic doesn't work because the same player goes twice in a row
        if (!player.isTurn && this.oldPlayerState.isTurn) {
            if (player.lastAction === _playeraction.FOLD) this.foldCards(scene);
            else if (player.lastAction === _playeraction.CALL) this.call(scene);
            else if (player.lastAction === _playeraction.RAISE) this.raise(scene);
        }
        if (hand.length > 1 && player.inRound && JSON.stringify(player.hand) !== JSON.stringify(this.oldPlayerState.hand) || player.shouldShowHand != this.oldPlayerState.shouldShowHand) {
            this.deleteCards();
            this.drawCards(scene, player);
        }
        // Move the chips above or below the player
        // if the orrientation has changed
        if (newOrrientation != this.orrientation) {
            let deltaY = 40;
            if (newOrrientation == ABOVE) deltaY *= -1;
            if (this.orrientation != NONE) deltaY *= 2;
            this.orrientation = newOrrientation;
            for(let i = 0; i < this.chips.length; i++)this.chips[i].y += deltaY;
            this.chip_label.y += deltaY;
        }
        for(let i = 0; i < this.chips.length; i++)this.chips[i].setVisible(scene.state.running);
        this.chip_label.setVisible(scene.state.running);
        this.chip_label.text = player.currentBet + ' BB';
        this.oldPlayerState = player;
    }
    setNewPlayer(scene, player) {
        let name_str = player.id;
        let bb = player.bb;
        let hand = Array.from(player.hand.values());
        let isDealer = player.isDealer;
        let active = player.isTurn;
        this.active_user_sprite.setVisible(active);
        this.inactive_user_sprite.setVisible(!active);
        if (scene.state.running && !player.inRound) this.inactive_user_sprite.alpha = 0.5;
        else this.inactive_user_sprite.alpha = 1;
        if (isDealer) {
            this.dealerChit.setPosition(this.x - this.active_user_sprite.displayWidth * 0.75, this.y + 15);
            this.dealerChit.setVisible(true);
        }
        this.name.text = name_str;
        this.num_chips_label.setText(bb + " bb");
        this.deleteCards();
        let newOrrientation = this.y < this.screenCenterY ? BELOW : ABOVE;
        if (hand.length > 1 && player.inRound) this.drawCards(scene, player);
        // Move the chips above or below the player
        // if the orrientation has changed
        if (newOrrientation != this.orrientation) {
            let deltaY = 40;
            if (newOrrientation == ABOVE) deltaY *= -1;
            if (this.orrientation != NONE) deltaY *= 2;
            this.orrientation = newOrrientation;
            for(let i = 0; i < this.chips.length; i++)this.chips[i].y += deltaY;
            this.chip_label.y += deltaY;
        }
        for(let i = 0; i < this.chips.length; i++)this.chips[i].setVisible(scene.state.running);
        this.chip_label.setVisible(scene.state.running);
        this.chip_label.text = player.currentBet + ' BB';
        this.oldPlayerState = player;
    }
    drawCards(scene, player) {
        if (player.id == scene.userId || player.shouldShowHand) {
            this.card1 = new _card.CardSprite(scene, player.hand[0].suit, player.hand[0].value);
            this.card2 = new _card.CardSprite(scene, player.hand[1].suit, player.hand[1].value);
        } else {
            this.card1 = new _card.CardBackSprite(scene);
            this.card2 = new _card.CardBackSprite(scene);
        }
        // Scale the card to 80% of the user sprite height
        let scaleFactor = this.active_user_sprite.displayHeight / this.card1.card.displayHeight;
        this.card1.setScale(scaleFactor * this.card1.card.scale * 0.75);
        this.card2.setScale(scaleFactor * this.card2.card.scale * 0.75);
        this.add(this.card1);
        this.add(this.card2);
        // Calculate the y of the card so that a non-rotated card would be exactly at
        // the bottom of the user sprite
        let y = this.active_user_sprite.displayHeight * 0.5 - this.card1.card.displayHeight * 0.4;
        this.card1.setPosition(this.card1.card.width * this.card1.card.scale * 0.35, y);
        this.card2.setPosition(-this.card1.card.width * this.card1.card.scale * 0.35, y);
        this.card1.setAngle(3);
        this.card2.setAngle(-3);
        this.bringToTop(this.card2);
        this.bringToTop(this.card1);
        // Add card mask
        for (let card of [
            this.card1,
            this.card2
        ]){
            let cardMask = scene.add.rectangle(this.x - this.active_user_sprite.displayWidth, this.y + this.active_user_sprite.displayHeight / 2, this.active_user_sprite.displayWidth * 2, 100, 0).setOrigin(0).setVisible(false);
            let mask = new Phaser.Display.Masks.BitmapMask(scene, cardMask);
            card.card.mask = mask;
            card.shadow.mask = mask;
            mask.invertAlpha = true;
        }
    }
    deleteCards() {
        // TODO: this deletion code crashes things when the screen is resized
        if (this.card1 != null) this.card1.destroy();
        if (this.card2 != null) this.card2.destroy();
    }
}

},{"./Card":"GegN8","../messages/playeraction":"lgSKO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"GegN8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CardSprite", ()=>CardSprite
);
parcelHelpers.export(exports, "CardBackSprite", ()=>CardBackSprite
);
var _phaserMinJs = require("./phaser.min.js");
var _phaserMinJsDefault = parcelHelpers.interopDefault(_phaserMinJs);
var _gameOptions = require("./GameOptions");
class CardBase extends _phaserMinJsDefault.default.GameObjects.Container {
    constructor(scene, card, shadow){
        super(scene, 0, 0);
        scene.children.add(this);
        this.card = card;
        this.shadow = shadow;
        this.card.setOrigin(0.5);
        this.shadow.setOrigin(0.5);
        this.card.setPosition(0, 0);
        this.shadow.setPosition(0, 0);
        this.shadow.x = -3;
        this.shadow.y = 2;
        this.shadow.scale = this.card.scale;
        this.shadow.tint = 0;
        this.shadow.alpha = 0.6;
        this.shadow.angle = this.card.angle;
        this.add(this.card);
        this.add(this.shadow);
        this.bringToTop(this.card);
    }
    setScale(s) {
        this.shadow.scale = s;
        this.card.scale = s;
    }
}
class CardSprite extends CardBase {
    constructor(scene, suit, value){
        super(scene, scene.createCard(suit, value), scene.createCard(suit, value));
    }
}
class CardBackSprite extends CardBase {
    constructor(scene){
        super(scene, scene.add.sprite(0, 0, "card_back").setScale(_gameOptions.gameOptions.cardScale * 0.64), scene.add.sprite(0, 0, "card_back").setScale(_gameOptions.gameOptions.cardScale * 0.64));
    }
}

},{"./phaser.min.js":"boWxm","./GameOptions":"eXjCt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eXjCt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameOptions", ()=>gameOptions
);
let gameOptions = {
    // card width, in pixels
    cardWidth: 334,
    // card height, in pixels
    cardHeight: 440,
    cardScale: 0.2
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lgSKO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "raise", ()=>raise
);
parcelHelpers.export(exports, "FOLD", ()=>FOLD
);
parcelHelpers.export(exports, "CALL", ()=>CALL
);
parcelHelpers.export(exports, "RAISE", ()=>RAISE
);
parcelHelpers.export(exports, "ALL_IN", ()=>ALL_IN
);
function raise(amount) {
    return {
        amount: amount
    };
}
const FOLD = "fold";
const CALL = "call";
const RAISE = "raise";
const ALL_IN = "all-in";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"azZen":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "READY", ()=>READY
);
parcelHelpers.export(exports, "NOT_READY", ()=>NOT_READY
);
const READY = {
    isReady: true
};
const NOT_READY = {
    isReady: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Q0x0":[function(require,module,exports) {
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */ (function(root, factory) {
    var PubSub = {};
    if (root.PubSub) {
        PubSub = root.PubSub;
        console.warn("PubSub already loaded, using existing version");
    } else {
        root.PubSub = PubSub;
        factory(PubSub);
    }
    if (module !== undefined && module.exports) exports = module.exports = PubSub; // Node.js specific `module.exports`
    exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
    module.exports = exports = PubSub; // CommonJS
})(typeof window === 'object' && window || this, function(PubSub) {
    'use strict';
    var messages = {}, lastUid = -1, ALL_SUBSCRIBING_MSG = '*';
    function hasKeys(obj) {
        var key;
        for(key in obj){
            if (Object.prototype.hasOwnProperty.call(obj, key)) return true;
        }
        return false;
    }
    /**
     * Returns a function that throws the passed exception, for use as argument for setTimeout
     * @alias throwException
     * @function
     * @param { Object } ex An Error object
     */ function throwException(ex) {
        return function reThrowException() {
            throw ex;
        };
    }
    function callSubscriberWithDelayedExceptions(subscriber, message, data) {
        try {
            subscriber(message, data);
        } catch (ex) {
            setTimeout(throwException(ex), 0);
        }
    }
    function callSubscriberWithImmediateExceptions(subscriber, message, data) {
        subscriber(message, data);
    }
    function deliverMessage(originalMessage, matchedMessage, data, immediateExceptions) {
        var subscribers = messages[matchedMessage], callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions, s;
        if (!Object.prototype.hasOwnProperty.call(messages, matchedMessage)) return;
        for(s in subscribers)if (Object.prototype.hasOwnProperty.call(subscribers, s)) callSubscriber(subscribers[s], originalMessage, data);
    }
    function createDeliveryFunction(message, data, immediateExceptions) {
        return function deliverNamespaced() {
            var topic = String(message), position = topic.lastIndexOf('.');
            // deliver the message as it is now
            deliverMessage(message, message, data, immediateExceptions);
            // trim the hierarchy and deliver message to each level
            while(position !== -1){
                topic = topic.substr(0, position);
                position = topic.lastIndexOf('.');
                deliverMessage(message, topic, data, immediateExceptions);
            }
            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
        };
    }
    function hasDirectSubscribersFor(message) {
        var topic = String(message), found = Boolean(Object.prototype.hasOwnProperty.call(messages, topic) && hasKeys(messages[topic]));
        return found;
    }
    function messageHasSubscribers(message) {
        var topic = String(message), found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG), position = topic.lastIndexOf('.');
        while(!found && position !== -1){
            topic = topic.substr(0, position);
            position = topic.lastIndexOf('.');
            found = hasDirectSubscribersFor(topic);
        }
        return found;
    }
    function publish(message, data, sync, immediateExceptions) {
        message = typeof message === 'symbol' ? message.toString() : message;
        var deliver = createDeliveryFunction(message, data, immediateExceptions), hasSubscribers = messageHasSubscribers(message);
        if (!hasSubscribers) return false;
        if (sync === true) deliver();
        else setTimeout(deliver, 0);
        return true;
    }
    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @alias publish
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */ PubSub.publish = function(message, data) {
        return publish(message, data, false, PubSub.immediateExceptions);
    };
    /**
     * Publishes the message synchronously, passing the data to it's subscribers
     * @function
     * @alias publishSync
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */ PubSub.publishSync = function(message, data) {
        return publish(message, data, true, PubSub.immediateExceptions);
    };
    /**
     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @alias subscribe
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { String }
     */ PubSub.subscribe = function(message, func) {
        if (typeof func !== 'function') return false;
        message = typeof message === 'symbol' ? message.toString() : message;
        // message is not registered yet
        if (!Object.prototype.hasOwnProperty.call(messages, message)) messages[message] = {};
        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++lastUid);
        messages[message][token] = func;
        // return token for unsubscribing
        return token;
    };
    PubSub.subscribeAll = function(func) {
        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);
    };
    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @alias subscribeOnce
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { PubSub }
     */ PubSub.subscribeOnce = function(message, func) {
        var token = PubSub.subscribe(message, function() {
            // before func apply, unsubscribe message
            PubSub.unsubscribe(token);
            func.apply(this, arguments);
        });
        return PubSub;
    };
    /**
     * Clears all subscriptions
     * @function
     * @public
     * @alias clearAllSubscriptions
     */ PubSub.clearAllSubscriptions = function clearAllSubscriptions() {
        messages = {};
    };
    /**
     * Clear subscriptions by the topic
     * @function
     * @public
     * @alias clearAllSubscriptions
     * @return { int }
     */ PubSub.clearSubscriptions = function clearSubscriptions(topic) {
        var m;
        for(m in messages)if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) delete messages[m];
    };
    /**
       Count subscriptions by the topic
     * @function
     * @public
     * @alias countSubscriptions
     * @return { Array }
    */ PubSub.countSubscriptions = function countSubscriptions(topic) {
        var m;
        // eslint-disable-next-line no-unused-vars
        var token;
        var count = 0;
        for(m in messages)if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
            for(token in messages[m])count++;
            break;
        }
        return count;
    };
    /**
       Gets subscriptions by the topic
     * @function
     * @public
     * @alias getSubscriptions
    */ PubSub.getSubscriptions = function getSubscriptions(topic) {
        var m;
        var list = [];
        for(m in messages)if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) list.push(m);
        return list;
    };
    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
	 * - When passed a function, removes all subscriptions for that function
     *
	 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @public
     * @alias subscribeOnce
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = PubSub.subscribe('mytopic', myFunc);
     * PubSub.unsubscribe(token);
     * @example // Unsubscribing with a function
     * PubSub.unsubscribe(myFunc);
     * @example // Unsubscribing from a topic
     * PubSub.unsubscribe('mytopic');
     */ PubSub.unsubscribe = function(value) {
        var descendantTopicExists = function(topic) {
            var m;
            for(m in messages){
                if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) // a descendant of the topic exists:
                return true;
            }
            return false;
        }, isTopic = typeof value === 'string' && (Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value)), isToken = !isTopic && typeof value === 'string', isFunction = typeof value === 'function', result = false, m1, message, t;
        if (isTopic) {
            PubSub.clearSubscriptions(value);
            return;
        }
        for(m1 in messages)if (Object.prototype.hasOwnProperty.call(messages, m1)) {
            message = messages[m1];
            if (isToken && message[value]) {
                delete message[value];
                result = value;
                break;
            }
            if (isFunction) {
                for(t in message)if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value) {
                    delete message[t];
                    result = true;
                }
            }
        }
        return result;
    };
});

},{}],"5hkYg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameState", ()=>GameState
);
var _helpers = require("@swc/helpers");
var _schema = require("@colyseus/schema");
var _player = require("./Player");
var _card = require("./Card");
var _class, _descriptor, _dec, _descriptor1, _dec1, _descriptor2, _dec2, _descriptor3, _dec3, _descriptor4, _dec4, _descriptor5, _dec5, _descriptor6, _dec6, _descriptor7, _dec7;
let GameState = (_class = class GameState extends _schema.Schema {
    constructor(){
        super();
        _helpers.initializerDefineProperty(this, "player_map", _descriptor, this);
        _helpers.initializerDefineProperty(this, "player_order", _descriptor1, this);
        _helpers.initializerDefineProperty(this, "board", _descriptor2, this);
        _helpers.initializerDefineProperty(this, "running", _descriptor3, this);
        _helpers.initializerDefineProperty(this, "pot", _descriptor4, this);
        _helpers.initializerDefineProperty(this, "winners", _descriptor5, this);
        _helpers.initializerDefineProperty(this, "winningMessage", _descriptor6, this);
        _helpers.initializerDefineProperty(this, "numSpectators", _descriptor7, this);
        this.player_map = new _schema.MapSchema();
        this.running = false;
        this.player_order = new _schema.ArraySchema();
        this.pot = 0;
        this.board = new _schema.ArraySchema();
        this.winners = new _schema.ArraySchema();
        this.winningMessage = null;
        this.numSpectators = 0;
    }
}, _dec = _schema.type({
    map: _player.Player
}), _dec1 = _schema.type([
    "string"
]), _dec2 = _schema.type([
    _card.Card
]), _dec3 = _schema.type("boolean"), _dec4 = _schema.type("number"), _dec5 = _schema.type([
    _player.Player
]), _dec6 = _schema.type("string"), _dec7 = _schema.type("number"), _descriptor = _helpers.applyDecoratedDescriptor(_class.prototype, "player_map", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor1 = _helpers.applyDecoratedDescriptor(_class.prototype, "player_order", [
    _dec1
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor2 = _helpers.applyDecoratedDescriptor(_class.prototype, "board", [
    _dec2
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor3 = _helpers.applyDecoratedDescriptor(_class.prototype, "running", [
    _dec3
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor4 = _helpers.applyDecoratedDescriptor(_class.prototype, "pot", [
    _dec4
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor5 = _helpers.applyDecoratedDescriptor(_class.prototype, "winners", [
    _dec5
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor6 = _helpers.applyDecoratedDescriptor(_class.prototype, "winningMessage", [
    _dec6
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor7 = _helpers.applyDecoratedDescriptor(_class.prototype, "numSpectators", [
    _dec7
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class);

},{"@swc/helpers":"6Uysx","@colyseus/schema":"77vsq","./Player":"9WNGX","./Card":"drn3t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Uysx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyDecoratedDescriptor", ()=>_applyDecoratedDescriptorDefault.default
);
parcelHelpers.export(exports, "arrayLikeToArray", ()=>_arrayLikeToArrayDefault.default
);
parcelHelpers.export(exports, "arrayWithHoles", ()=>_arrayWithHolesDefault.default
);
parcelHelpers.export(exports, "arrayWithoutHoles", ()=>_arrayWithoutHolesDefault.default
);
parcelHelpers.export(exports, "assertThisInitialized", ()=>_assertThisInitializedDefault.default
);
parcelHelpers.export(exports, "asyncGenerator", ()=>_asyncGeneratorDefault.default
);
parcelHelpers.export(exports, "asyncGeneratorDelegate", ()=>_asyncGeneratorDelegateDefault.default
);
parcelHelpers.export(exports, "asyncIterator", ()=>_asyncIteratorDefault.default
);
parcelHelpers.export(exports, "asyncToGenerator", ()=>_asyncToGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitAsyncGenerator", ()=>_awaitAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "awaitValue", ()=>_awaitValueDefault.default
);
parcelHelpers.export(exports, "checkPrivateRedeclaration", ()=>_checkPrivateRedeclarationDefault.default
);
parcelHelpers.export(exports, "classApplyDescriptorDestructureSet", ()=>_classApplyDescriptorDestructureDefault.default
);
parcelHelpers.export(exports, "classApplyDescriptorGet", ()=>_classApplyDescriptorGetDefault.default
);
parcelHelpers.export(exports, "classApplyDescriptorSet", ()=>_classApplyDescriptorSetDefault.default
);
parcelHelpers.export(exports, "classCallCheck", ()=>_classCallCheckDefault.default
);
parcelHelpers.export(exports, "classCheckPrivateStaticFieldDescriptor", ()=>_classCheckPrivateStaticFieldDescriptorDefault.default
);
parcelHelpers.export(exports, "classCheckPrivateStaticAccess", ()=>_classCheckPrivateStaticAccessDefault.default
);
parcelHelpers.export(exports, "classNameTDZError", ()=>_classNameTdzErrorDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldDestructureSet", ()=>_classPrivateFieldDestructureDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldGet", ()=>_classPrivateFieldGetDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldInit", ()=>_classPrivateFieldInitDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldLooseBase", ()=>_classPrivateFieldLooseBaseDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldLooseKey", ()=>_classPrivateFieldLooseKeyDefault.default
);
parcelHelpers.export(exports, "classPrivateFieldSet", ()=>_classPrivateFieldSetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodGet", ()=>_classPrivateMethodGetDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodInit", ()=>_classPrivateMethodInitDefault.default
);
parcelHelpers.export(exports, "classPrivateMethodSet", ()=>_classPrivateMethodSetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldDestructureSet", ()=>_classStaticPrivateFieldDestructureDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecGet", ()=>_classStaticPrivateFieldSpecGetDefault.default
);
parcelHelpers.export(exports, "classStaticPrivateFieldSpecSet", ()=>_classStaticPrivateFieldSpecSetDefault.default
);
parcelHelpers.export(exports, "construct", ()=>_constructDefault.default
);
parcelHelpers.export(exports, "createClass", ()=>_createClassDefault.default
);
parcelHelpers.export(exports, "createSuper", ()=>_createSuperDefault.default
);
parcelHelpers.export(exports, "decorate", ()=>_decorateDefault.default
);
parcelHelpers.export(exports, "defaults", ()=>_defaultsDefault.default
);
parcelHelpers.export(exports, "defineEnumerableProperties", ()=>_defineEnumerablePropertiesDefault.default
);
parcelHelpers.export(exports, "defineProperty", ()=>_definePropertyDefault.default
);
parcelHelpers.export(exports, "extends", ()=>_extendsDefault.default
);
parcelHelpers.export(exports, "get", ()=>_getDefault.default
);
parcelHelpers.export(exports, "getPrototypeOf", ()=>_getPrototypeOfDefault.default
);
parcelHelpers.export(exports, "inherits", ()=>_inheritsDefault.default
);
parcelHelpers.export(exports, "inheritsLoose", ()=>_inheritsLooseDefault.default
);
parcelHelpers.export(exports, "initializerDefineProperty", ()=>_initializerDefinePropertyDefault.default
);
parcelHelpers.export(exports, "initializerWarningHelper", ()=>_initializerWarningHelperDefault.default
);
parcelHelpers.export(exports, "_instanceof", ()=>_instanceofDefault.default
);
parcelHelpers.export(exports, "interopRequireDefault", ()=>_interopRequireDefaultDefault.default
);
parcelHelpers.export(exports, "interopRequireWildcard", ()=>_interopRequireWildcardDefault.default
);
parcelHelpers.export(exports, "isNativeFunction", ()=>_isNativeFunctionDefault.default
);
parcelHelpers.export(exports, "isNativeReflectConstruct", ()=>_isNativeReflectConstructDefault.default
);
parcelHelpers.export(exports, "iterableToArray", ()=>_iterableToArrayDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimit", ()=>_iterableToArrayLimitDefault.default
);
parcelHelpers.export(exports, "iterableToArrayLimitLoose", ()=>_iterableToArrayLimitLooseDefault.default
);
parcelHelpers.export(exports, "jsx", ()=>_jsxDefault.default
);
parcelHelpers.export(exports, "newArrowCheck", ()=>_newArrowCheckDefault.default
);
parcelHelpers.export(exports, "nonIterableRest", ()=>_nonIterableRestDefault.default
);
parcelHelpers.export(exports, "nonIterableSpread", ()=>_nonIterableSpreadDefault.default
);
parcelHelpers.export(exports, "objectSpread", ()=>_objectSpreadDefault.default
);
parcelHelpers.export(exports, "objectWithoutProperties", ()=>_objectWithoutPropertiesDefault.default
);
parcelHelpers.export(exports, "objectWithoutPropertiesLoose", ()=>_objectWithoutPropertiesLooseDefault.default
);
parcelHelpers.export(exports, "possibleConstructorReturn", ()=>_possibleConstructorReturnDefault.default
);
parcelHelpers.export(exports, "readOnlyError", ()=>_readOnlyErrorDefault.default
);
parcelHelpers.export(exports, "set", ()=>_setDefault.default
);
parcelHelpers.export(exports, "setPrototypeOf", ()=>_setPrototypeOfDefault.default
);
parcelHelpers.export(exports, "skipFirstGeneratorNext", ()=>_skipFirstGeneratorNextDefault.default
);
parcelHelpers.export(exports, "slicedToArray", ()=>_slicedToArrayDefault.default
);
parcelHelpers.export(exports, "slicedToArrayLoose", ()=>_slicedToArrayLooseDefault.default
);
parcelHelpers.export(exports, "superPropBase", ()=>_superPropBaseDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteral", ()=>_taggedTemplateLiteralDefault.default
);
parcelHelpers.export(exports, "taggedTemplateLiteralLoose", ()=>_taggedTemplateLiteralLooseDefault.default
);
parcelHelpers.export(exports, "_throw", ()=>_throwDefault.default
);
parcelHelpers.export(exports, "toArray", ()=>_toArrayDefault.default
);
parcelHelpers.export(exports, "toConsumableArray", ()=>_toConsumableArrayDefault.default
);
parcelHelpers.export(exports, "toPrimitive", ()=>_toPrimitiveDefault.default
);
parcelHelpers.export(exports, "toPropertyKey", ()=>_toPropertyKeyDefault.default
);
parcelHelpers.export(exports, "typeOf", ()=>_typeOfDefault.default
);
parcelHelpers.export(exports, "unsupportedIterableToArray", ()=>_unsupportedIterableToArrayDefault.default
);
parcelHelpers.export(exports, "wrapAsyncGenerator", ()=>_wrapAsyncGeneratorDefault.default
);
parcelHelpers.export(exports, "wrapNativeSuper", ()=>_wrapNativeSuperDefault.default
);
var _applyDecoratedDescriptor = require("./_apply_decorated_descriptor");
var _applyDecoratedDescriptorDefault = parcelHelpers.interopDefault(_applyDecoratedDescriptor);
var _arrayLikeToArray = require("./_array_like_to_array");
var _arrayLikeToArrayDefault = parcelHelpers.interopDefault(_arrayLikeToArray);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
var _asyncGeneratorDelegate = require("./_async_generator_delegate");
var _asyncGeneratorDelegateDefault = parcelHelpers.interopDefault(_asyncGeneratorDelegate);
var _asyncIterator = require("./_async_iterator");
var _asyncIteratorDefault = parcelHelpers.interopDefault(_asyncIterator);
var _asyncToGenerator = require("./_async_to_generator");
var _asyncToGeneratorDefault = parcelHelpers.interopDefault(_asyncToGenerator);
var _awaitAsyncGenerator = require("./_await_async_generator");
var _awaitAsyncGeneratorDefault = parcelHelpers.interopDefault(_awaitAsyncGenerator);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
var _checkPrivateRedeclaration = require("./_check_private_redeclaration");
var _checkPrivateRedeclarationDefault = parcelHelpers.interopDefault(_checkPrivateRedeclaration);
var _classApplyDescriptorDestructure = require("./_class_apply_descriptor_destructure");
var _classApplyDescriptorDestructureDefault = parcelHelpers.interopDefault(_classApplyDescriptorDestructure);
var _classApplyDescriptorGet = require("./_class_apply_descriptor_get");
var _classApplyDescriptorGetDefault = parcelHelpers.interopDefault(_classApplyDescriptorGet);
var _classApplyDescriptorSet = require("./_class_apply_descriptor_set");
var _classApplyDescriptorSetDefault = parcelHelpers.interopDefault(_classApplyDescriptorSet);
var _classCallCheck = require("./_class_call_check");
var _classCallCheckDefault = parcelHelpers.interopDefault(_classCallCheck);
var _classCheckPrivateStaticFieldDescriptor = require("./_class_check_private_static_field_descriptor");
var _classCheckPrivateStaticFieldDescriptorDefault = parcelHelpers.interopDefault(_classCheckPrivateStaticFieldDescriptor);
var _classCheckPrivateStaticAccess = require("./_class_check_private_static_access");
var _classCheckPrivateStaticAccessDefault = parcelHelpers.interopDefault(_classCheckPrivateStaticAccess);
var _classNameTdzError = require("./_class_name_tdz_error");
var _classNameTdzErrorDefault = parcelHelpers.interopDefault(_classNameTdzError);
var _classPrivateFieldDestructure = require("./_class_private_field_destructure");
var _classPrivateFieldDestructureDefault = parcelHelpers.interopDefault(_classPrivateFieldDestructure);
var _classPrivateFieldGet = require("./_class_private_field_get");
var _classPrivateFieldGetDefault = parcelHelpers.interopDefault(_classPrivateFieldGet);
var _classPrivateFieldInit = require("./_class_private_field_init");
var _classPrivateFieldInitDefault = parcelHelpers.interopDefault(_classPrivateFieldInit);
var _classPrivateFieldLooseBase = require("./_class_private_field_loose_base");
var _classPrivateFieldLooseBaseDefault = parcelHelpers.interopDefault(_classPrivateFieldLooseBase);
var _classPrivateFieldLooseKey = require("./_class_private_field_loose_key");
var _classPrivateFieldLooseKeyDefault = parcelHelpers.interopDefault(_classPrivateFieldLooseKey);
var _classPrivateFieldSet = require("./_class_private_field_set");
var _classPrivateFieldSetDefault = parcelHelpers.interopDefault(_classPrivateFieldSet);
var _classPrivateMethodGet = require("./_class_private_method_get");
var _classPrivateMethodGetDefault = parcelHelpers.interopDefault(_classPrivateMethodGet);
var _classPrivateMethodInit = require("./_class_private_method_init");
var _classPrivateMethodInitDefault = parcelHelpers.interopDefault(_classPrivateMethodInit);
var _classPrivateMethodSet = require("./_class_private_method_set");
var _classPrivateMethodSetDefault = parcelHelpers.interopDefault(_classPrivateMethodSet);
var _classStaticPrivateFieldDestructure = require("./_class_static_private_field_destructure");
var _classStaticPrivateFieldDestructureDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldDestructure);
var _classStaticPrivateFieldSpecGet = require("./_class_static_private_field_spec_get");
var _classStaticPrivateFieldSpecGetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecGet);
var _classStaticPrivateFieldSpecSet = require("./_class_static_private_field_spec_set");
var _classStaticPrivateFieldSpecSetDefault = parcelHelpers.interopDefault(_classStaticPrivateFieldSpecSet);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _createClass = require("./_create_class");
var _createClassDefault = parcelHelpers.interopDefault(_createClass);
var _createSuper = require("./_create_super");
var _createSuperDefault = parcelHelpers.interopDefault(_createSuper);
var _decorate = require("./_decorate");
var _decorateDefault = parcelHelpers.interopDefault(_decorate);
var _defaults = require("./_defaults");
var _defaultsDefault = parcelHelpers.interopDefault(_defaults);
var _defineEnumerableProperties = require("./_define_enumerable_properties");
var _defineEnumerablePropertiesDefault = parcelHelpers.interopDefault(_defineEnumerableProperties);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _extends = require("./_extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _get = require("./_get");
var _getDefault = parcelHelpers.interopDefault(_get);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _inherits = require("./_inherits");
var _inheritsDefault = parcelHelpers.interopDefault(_inherits);
var _inheritsLoose = require("./_inherits_loose");
var _inheritsLooseDefault = parcelHelpers.interopDefault(_inheritsLoose);
var _initializerDefineProperty = require("./_initializer_define_property");
var _initializerDefinePropertyDefault = parcelHelpers.interopDefault(_initializerDefineProperty);
var _initializerWarningHelper = require("./_initializer_warning_helper");
var _initializerWarningHelperDefault = parcelHelpers.interopDefault(_initializerWarningHelper);
var _instanceof = require("./_instanceof");
var _instanceofDefault = parcelHelpers.interopDefault(_instanceof);
var _interopRequireDefault = require("./_interop_require_default");
var _interopRequireDefaultDefault = parcelHelpers.interopDefault(_interopRequireDefault);
var _interopRequireWildcard = require("./_interop_require_wildcard");
var _interopRequireWildcardDefault = parcelHelpers.interopDefault(_interopRequireWildcard);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _isNativeReflectConstruct = require("./_is_native_reflect_construct");
var _isNativeReflectConstructDefault = parcelHelpers.interopDefault(_isNativeReflectConstruct);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _iterableToArrayLimit = require("./_iterable_to_array_limit");
var _iterableToArrayLimitDefault = parcelHelpers.interopDefault(_iterableToArrayLimit);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _jsx = require("./_jsx");
var _jsxDefault = parcelHelpers.interopDefault(_jsx);
var _newArrowCheck = require("./_new_arrow_check");
var _newArrowCheckDefault = parcelHelpers.interopDefault(_newArrowCheck);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
var _objectSpread = require("./_object_spread");
var _objectSpreadDefault = parcelHelpers.interopDefault(_objectSpread);
var _objectWithoutProperties = require("./_object_without_properties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
var _possibleConstructorReturn = require("./_possible_constructor_return");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
var _readOnlyError = require("./_read_only_error");
var _readOnlyErrorDefault = parcelHelpers.interopDefault(_readOnlyError);
var _set = require("./_set");
var _setDefault = parcelHelpers.interopDefault(_set);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
var _skipFirstGeneratorNext = require("./_skip_first_generator_next");
var _skipFirstGeneratorNextDefault = parcelHelpers.interopDefault(_skipFirstGeneratorNext);
var _slicedToArray = require("./_sliced_to_array");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _slicedToArrayLoose = require("./_sliced_to_array_loose");
var _slicedToArrayLooseDefault = parcelHelpers.interopDefault(_slicedToArrayLoose);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
var _taggedTemplateLiteral = require("./_tagged_template_literal");
var _taggedTemplateLiteralDefault = parcelHelpers.interopDefault(_taggedTemplateLiteral);
var _taggedTemplateLiteralLoose = require("./_tagged_template_literal_loose");
var _taggedTemplateLiteralLooseDefault = parcelHelpers.interopDefault(_taggedTemplateLiteralLoose);
var _throw = require("./_throw");
var _throwDefault = parcelHelpers.interopDefault(_throw);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toConsumableArray = require("./_to_consumable_array");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _unsupportedIterableToArray = require("./_unsupported_iterable_to_array");
var _unsupportedIterableToArrayDefault = parcelHelpers.interopDefault(_unsupportedIterableToArray);
var _wrapAsyncGenerator = require("./_wrap_async_generator");
var _wrapAsyncGeneratorDefault = parcelHelpers.interopDefault(_wrapAsyncGenerator);
var _wrapNativeSuper = require("./_wrap_native_super");
var _wrapNativeSuperDefault = parcelHelpers.interopDefault(_wrapNativeSuper);

},{"./_apply_decorated_descriptor":"jRYya","./_array_like_to_array":"5fJP0","./_array_with_holes":"7RfHu","./_array_without_holes":"3GN4c","./_assert_this_initialized":"j8MLO","./_async_generator":"4otb1","./_async_generator_delegate":"acUaV","./_async_iterator":"cEDbt","./_async_to_generator":"3lSxN","./_await_async_generator":"7XFid","./_await_value":"8dgrP","./_check_private_redeclaration":"4QUTM","./_class_apply_descriptor_destructure":"Hb9Ag","./_class_apply_descriptor_get":"46vPA","./_class_apply_descriptor_set":"3O4Vp","./_class_call_check":"g2Ziw","./_class_check_private_static_field_descriptor":"1FZpB","./_class_check_private_static_access":"8Dt3U","./_class_name_tdz_error":"50JKw","./_class_private_field_destructure":"fYZY5","./_class_private_field_get":"6QAu8","./_class_private_field_init":"isyZN","./_class_private_field_loose_base":"iEFml","./_class_private_field_loose_key":"jEYO6","./_class_private_field_set":"cnufZ","./_class_private_method_get":"36P3z","./_class_private_method_init":"bkIiA","./_class_private_method_set":"1o5u5","./_class_static_private_field_destructure":"lF1F8","./_class_static_private_field_spec_get":"4j2mn","./_class_static_private_field_spec_set":"7y4W2","./_construct":"79Zak","./_create_class":"xIen3","./_create_super":"3CDP7","./_decorate":"Cznku","./_defaults":"hrV1Y","./_define_enumerable_properties":"gt5o9","./_define_property":"5RMOb","./_extends":"vJeNc","./_get":"6tDuR","./_get_prototype_of":"g6dnE","./_inherits":"fD3VF","./_inherits_loose":"fELNH","./_initializer_define_property":"3TO4f","./_initializer_warning_helper":"2CTl1","./_instanceof":"7x29e","./_interop_require_default":"6MKjY","./_interop_require_wildcard":"i3Ocj","./_is_native_function":"49J6w","./_is_native_reflect_construct":"bttt4","./_iterable_to_array":"d8jf5","./_iterable_to_array_limit":"hK5PL","./_iterable_to_array_limit_loose":"l4Hz2","./_jsx":"3ldcc","./_new_arrow_check":"aiIAY","./_non_iterable_rest":"51yKj","./_non_iterable_spread":"2F8a8","./_object_spread":"e4YvT","./_object_without_properties":"1TgmY","./_object_without_properties_loose":"kdsko","./_possible_constructor_return":"4osjF","./_read_only_error":"lpriK","./_set":"kNsU5","./_set_prototype_of":"7eUoq","./_skip_first_generator_next":"8LtBV","./_sliced_to_array":"kt98A","./_sliced_to_array_loose":"iaZIC","./_super_prop_base":"h41tg","./_tagged_template_literal":"gAyvx","./_tagged_template_literal_loose":"d2boP","./_throw":"kzyx2","./_to_array":"2yzSp","./_to_consumable_array":"eprTL","./_to_primitive":"hjFTf","./_to_property_key":"bAIKj","./_type_of":"eUBAy","./_unsupported_iterable_to_array":"1HJ22","./_wrap_async_generator":"eCVXq","./_wrap_native_super":"jjGYK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jRYya":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc1 = {};
    Object["keys"](descriptor).forEach(function(key) {
        desc1[key] = descriptor[key];
    });
    desc1.enumerable = !!desc1.enumerable;
    desc1.configurable = !!desc1.configurable;
    if ('value' in desc1 || desc1.initializer) desc1.writable = true;
    desc1 = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator ? decorator(target, property, desc) || desc : desc;
    }, desc1);
    if (context && desc1.initializer !== void 0) {
        desc1.value = desc1.initializer ? desc1.initializer.call(context) : void 0;
        desc1.initializer = undefined;
    }
    if (desc1.initializer === void 0) {
        Object["defineProperty"](target, property, desc1);
        desc1 = null;
    }
    return desc1;
}
exports.default = _applyDecoratedDescriptor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5fJP0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
exports.default = _arrayLikeToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7RfHu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
exports.default = _arrayWithHoles;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GN4c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeToArray = require("./_array_like_to_array");
var _arrayLikeToArrayDefault = parcelHelpers.interopDefault(_arrayLikeToArray);
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArrayDefault.default(arr);
}
exports.default = _arrayWithoutHoles;

},{"./_array_like_to_array":"5fJP0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j8MLO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
exports.default = _assertThisInitialized;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4otb1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function AsyncGenerator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) back = back.next = request;
            else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg1) {
        try {
            var result = gen[key](arg1);
            var value = result.value;
            var wrappedAwait = value instanceof _awaitValueDefault.default;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) resume(front.key, front.arg);
        else back = null;
    }
    this._invoke = send;
    if (typeof gen.return !== "function") this.return = undefined;
}
exports.default = AsyncGenerator;
if (typeof Symbol === "function" && Symbol.asyncIterator) AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
    return this;
};
AsyncGenerator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
AsyncGenerator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
AsyncGenerator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};

},{"./_await_value":"8dgrP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8dgrP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _AwaitValue(value) {
    this.wrapped = value;
}
exports.default = _AwaitValue;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acUaV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;
    function pump(key, value) {
        waiting = true;
        value = new Promise(function(resolve) {
            resolve(inner[key](value));
        });
        return {
            done: false,
            value: awaitWrap(value)
        };
    }
    if (typeof Symbol === "function" && Symbol.iterator) iter[Symbol.iterator] = function() {
        return this;
    };
    iter.next = function(value) {
        if (waiting) {
            waiting = false;
            return value;
        }
        return pump("next", value);
    };
    if (typeof inner.throw === "function") iter.throw = function(value) {
        if (waiting) {
            waiting = false;
            throw value;
        }
        return pump("throw", value);
    };
    if (typeof inner.return === "function") iter.return = function(value) {
        return pump("return", value);
    };
    return iter;
}
exports.default = _asyncGeneratorDelegate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cEDbt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _asyncIterator(iterable) {
    var method;
    if (typeof Symbol === "function") {
        if (Symbol.asyncIterator) {
            method = iterable[Symbol.asyncIterator];
            if (method != null) return method.call(iterable);
        }
        if (Symbol.iterator) {
            method = iterable[Symbol.iterator];
            if (method != null) return method.call(iterable);
        }
    }
    throw new TypeError("Object is not async iterable");
}
exports.default = _asyncIterator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3lSxN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
exports.default = _asyncToGenerator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7XFid":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _awaitValue = require("./_await_value");
var _awaitValueDefault = parcelHelpers.interopDefault(_awaitValue);
function _awaitAsyncGenerator(value) {
    return new _awaitValueDefault.default(value);
}
exports.default = _awaitAsyncGenerator;

},{"./_await_value":"8dgrP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QUTM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
exports.default = _checkPrivateRedeclaration;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Hb9Ag":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classApplyDescriptorDestructureSet(receiver, descriptor) {
    if (descriptor.set) {
        if (!("__destrObj" in descriptor)) descriptor.__destrObj = {
            set value (v){
                descriptor.set.call(receiver, v);
            }
        };
        return descriptor.__destrObj;
    } else {
        if (!descriptor.writable) // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        return descriptor;
    }
}
exports.default = _classApplyDescriptorDestructureSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"46vPA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}
exports.default = _classApplyDescriptorGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3O4Vp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}
exports.default = _classApplyDescriptorSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g2Ziw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
exports.default = _classCallCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FZpB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) throw new TypeError("attempted to " + action + " private static field before its declaration");
}
exports.default = _classCheckPrivateStaticFieldDescriptor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Dt3U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) throw new TypeError("Private static access of wrong provenance");
}
exports.default = _classCheckPrivateStaticAccess;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"50JKw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classNameTDZError(name) {
    throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
}
exports.default = _classNameTDZError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fYZY5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classExtractFieldDescriptor = require("./_class_extract_field_descriptor");
var _classExtractFieldDescriptorDefault = parcelHelpers.interopDefault(_classExtractFieldDescriptor);
var _classApplyDescriptorDestructure = require("./_class_apply_descriptor_destructure");
var _classApplyDescriptorDestructureDefault = parcelHelpers.interopDefault(_classApplyDescriptorDestructure);
function _classPrivateFieldDestructureSet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptorDefault.default(receiver, privateMap, "set");
    return _classApplyDescriptorDestructureDefault.default(receiver, descriptor);
}
exports.default = _classPrivateFieldDestructureSet;

},{"./_class_extract_field_descriptor":"gurxg","./_class_apply_descriptor_destructure":"Hb9Ag","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gurxg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
exports.default = _classExtractFieldDescriptor;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6QAu8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classExtractFieldDescriptor = require("./_class_extract_field_descriptor");
var _classExtractFieldDescriptorDefault = parcelHelpers.interopDefault(_classExtractFieldDescriptor);
var _classApplyDescriptorGet = require("./_class_apply_descriptor_get");
var _classApplyDescriptorGetDefault = parcelHelpers.interopDefault(_classApplyDescriptorGet);
function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptorDefault.default(receiver, privateMap, "get");
    return _classApplyDescriptorGetDefault.default(receiver, descriptor);
}
exports.default = _classPrivateFieldGet;

},{"./_class_extract_field_descriptor":"gurxg","./_class_apply_descriptor_get":"46vPA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"isyZN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkPrivateRedeclaration = require("./_check_private_redeclaration");
var _checkPrivateRedeclarationDefault = parcelHelpers.interopDefault(_checkPrivateRedeclaration);
function _classPrivateFieldInit(obj, privateMap, value) {
    _checkPrivateRedeclarationDefault.default(obj, privateMap);
    privateMap.set(obj, value);
}
exports.default = _classPrivateFieldInit;

},{"./_check_private_redeclaration":"4QUTM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iEFml":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) throw new TypeError("attempted to use private field on non-instance");
    return receiver;
}
exports.default = _classPrivateFieldBase;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jEYO6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var id = 0;
function _classPrivateFieldLooseKey(name) {
    return "__private_" + id++ + "_" + name;
}
exports.default = _classPrivateFieldLooseKey;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnufZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classExtractFieldDescriptor = require("./_class_extract_field_descriptor");
var _classExtractFieldDescriptorDefault = parcelHelpers.interopDefault(_classExtractFieldDescriptor);
var _classApplyDescriptorSet = require("./_class_apply_descriptor_set");
var _classApplyDescriptorSetDefault = parcelHelpers.interopDefault(_classApplyDescriptorSet);
function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptorDefault.default(receiver, privateMap, "set");
    _classApplyDescriptorSetDefault.default(receiver, descriptor, value);
    return value;
}
exports.default = _classPrivateFieldSet;

},{"./_class_extract_field_descriptor":"gurxg","./_class_apply_descriptor_set":"3O4Vp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"36P3z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return fn;
}
exports.default = _classPrivateMethodGet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bkIiA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkPrivateRedeclaration = require("./_check_private_redeclaration");
var _checkPrivateRedeclarationDefault = parcelHelpers.interopDefault(_checkPrivateRedeclaration);
function _classPrivateMethodInit(obj, privateSet) {
    _checkPrivateRedeclarationDefault.default(obj, privateSet);
    privateSet.add(obj);
}
exports.default = _classPrivateMethodInit;

},{"./_check_private_redeclaration":"4QUTM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1o5u5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
}
exports.default = _classPrivateMethodSet;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lF1F8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classCheckPrivateStaticAccess = require("./_class_check_private_static_access");
var _classCheckPrivateStaticAccessDefault = parcelHelpers.interopDefault(_classCheckPrivateStaticAccess);
var _classApplyDescriptorDestructure = require("./_class_apply_descriptor_destructure");
var _classApplyDescriptorDestructureDefault = parcelHelpers.interopDefault(_classApplyDescriptorDestructure);
function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    _classCheckPrivateStaticAccessDefault.default(receiver, classConstructor);
    _classCheckPrivateStaticAccessDefault.default(descriptor, "set");
    return _classApplyDescriptorDestructureDefault.default(receiver, descriptor);
}
exports.default = _classStaticPrivateFieldDestructureSet;

},{"./_class_check_private_static_access":"8Dt3U","./_class_apply_descriptor_destructure":"Hb9Ag","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4j2mn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classCheckPrivateStaticAccess = require("./_class_check_private_static_access");
var _classCheckPrivateStaticAccessDefault = parcelHelpers.interopDefault(_classCheckPrivateStaticAccess);
var _classApplyDescriptorGet = require("./_class_apply_descriptor_get");
var _classApplyDescriptorGetDefault = parcelHelpers.interopDefault(_classApplyDescriptorGet);
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    _classCheckPrivateStaticAccessDefault.default(receiver, classConstructor);
    _classCheckPrivateStaticAccessDefault.default(descriptor, "get");
    return _classApplyDescriptorGetDefault.default(receiver, descriptor);
}
exports.default = _classStaticPrivateFieldSpecGet;

},{"./_class_check_private_static_access":"8Dt3U","./_class_apply_descriptor_get":"46vPA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7y4W2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _classCheckPrivateStaticAccess = require("./_class_check_private_static_access");
var _classCheckPrivateStaticAccessDefault = parcelHelpers.interopDefault(_classCheckPrivateStaticAccess);
var _classApplyDescriptorSet = require("./_class_apply_descriptor_set");
var _classApplyDescriptorSetDefault = parcelHelpers.interopDefault(_classApplyDescriptorSet);
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    _classCheckPrivateStaticAccessDefault.default(receiver, classConstructor);
    _classCheckPrivateStaticAccessDefault.default(descriptor, "set");
    _classApplyDescriptorSetDefault.default(receiver, descriptor, value);
    return value;
}
exports.default = _classStaticPrivateFieldSpecSet;

},{"./_class_check_private_static_access":"8Dt3U","./_class_apply_descriptor_set":"3O4Vp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"79Zak":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function construct(Parent1, args1, Class1) {
    if (isNativeReflectConstruct()) construct = Reflect.construct;
    else construct = function construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOfDefault.default(instance, Class.prototype);
        return instance;
    };
    return construct.apply(null, arguments);
}
function _construct(Parent, args, Class) {
    return construct.apply(null, arguments);
}
exports.default = _construct;

},{"./_set_prototype_of":"7eUoq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7eUoq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function setPrototypeOf(o1, p1) {
    setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return setPrototypeOf(o1, p1);
}
function _setPrototypeOf(o, p) {
    return setPrototypeOf(o, p);
}
exports.default = _setPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"xIen3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
exports.default = _createClass;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3CDP7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNativeReflectConstruct = require("./_is_native_reflect_construct");
var _isNativeReflectConstructDefault = parcelHelpers.interopDefault(_isNativeReflectConstruct);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _possibleConstructorReturn = require("./_possible_constructor_return");
var _possibleConstructorReturnDefault = parcelHelpers.interopDefault(_possibleConstructorReturn);
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstructDefault.default();
    return function _createSuperInternal() {
        var Super = _getPrototypeOfDefault.default(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOfDefault.default(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturnDefault.default(this, result);
    };
}
exports.default = _createSuper;

},{"./_is_native_reflect_construct":"bttt4","./_get_prototype_of":"g6dnE","./_possible_constructor_return":"4osjF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bttt4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
exports.default = _isNativeReflectConstruct;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g6dnE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getPrototypeOf(o1) {
    getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return getPrototypeOf(o1);
}
function _getPrototypeOf(o) {
    return getPrototypeOf(o);
}
exports.default = _getPrototypeOf;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4osjF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _assertThisInitialized = require("./_assert_this_initialized");
var _assertThisInitializedDefault = parcelHelpers.interopDefault(_assertThisInitialized);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _possibleConstructorReturn(self, call) {
    if (call && (_typeOfDefault.default(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitializedDefault.default(self);
}
exports.default = _possibleConstructorReturn;

},{"./_assert_this_initialized":"j8MLO","./_type_of":"eUBAy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eUBAy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}
exports.default = _typeof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Cznku":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toArray = require("./_to_array");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _toPropertyKey = require("./_to_property_key");
var _toPropertyKeyDefault = parcelHelpers.interopDefault(_toPropertyKey);
function _decorate(decorators, factory, superClass) {
    var r = factory(function initialize(O) {
        _initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = _decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
    _initializeClassElements(r.F, decorated.elements);
    return _runClassFinishers(r.F, decorated.finishers);
}
exports.default = _decorate;
function _createElementDescriptor(def) {
    var key = _toPropertyKeyDefault.default(def.key);
    var descriptor;
    if (def.kind === "method") {
        descriptor = {
            value: def.value,
            writable: true,
            configurable: true,
            enumerable: false
        };
        Object.defineProperty(def.value, "name", {
            value: _typeof(key) === "symbol" ? "" : key,
            configurable: true
        });
    } else if (def.kind === "get") descriptor = {
        get: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "set") descriptor = {
        set: def.value,
        configurable: true,
        enumerable: false
    };
    else if (def.kind === "field") descriptor = {
        configurable: true,
        writable: true,
        enumerable: true
    };
    var element = {
        kind: def.kind === "field" ? "field" : "method",
        key: key,
        placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
        descriptor: descriptor
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;
    return element;
}
function _coalesceGetterSetter(element, other) {
    if (element.descriptor.get !== undefined) other.descriptor.get = element.descriptor.get;
    else other.descriptor.set = element.descriptor.set;
}
function _coalesceClassElements(elements) {
    var newElements = [];
    var isSameElement = function isSameElement(other) {
        return other.kind === "method" && other.key === element.key && other.placement === element.placement;
    };
    for(var i = 0; i < elements.length; i++){
        var element = elements[i];
        var other1;
        if (element.kind === "method" && (other1 = newElements.find(isSameElement))) {
            if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other1.descriptor)) {
                if (_hasDecorators(element) || _hasDecorators(other1)) throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
                other1.descriptor = element.descriptor;
            } else {
                if (_hasDecorators(element)) {
                    if (_hasDecorators(other1)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + element.key + ").");
                    other1.decorators = element.decorators;
                }
                _coalesceGetterSetter(element, other1);
            }
        } else newElements.push(element);
    }
    return newElements;
}
function _hasDecorators(element) {
    return element.decorators && element.decorators.length;
}
function _isDataDescriptor(desc) {
    return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
}
function _initializeClassElements(F, elements) {
    var proto = F.prototype;
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            var placement = element.placement;
            if (element.kind === kind && (placement === "static" || placement === "prototype")) {
                var receiver = placement === "static" ? F : proto;
                _defineClassElement(receiver, element);
            }
        });
    });
}
function _initializeInstanceElements(O, elements) {
    [
        "method",
        "field"
    ].forEach(function(kind) {
        elements.forEach(function(element) {
            if (element.kind === kind && element.placement === "own") _defineClassElement(O, element);
        });
    });
}
function _defineClassElement(receiver, element) {
    var descriptor = element.descriptor;
    if (element.kind === "field") {
        var initializer = element.initializer;
        descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
    }
    Object.defineProperty(receiver, element.key, descriptor);
}
function _decorateClass(elements, decorators) {
    var newElements = [];
    var finishers = [];
    var placements = {
        static: [],
        prototype: [],
        own: []
    };
    elements.forEach(function(element) {
        _addElementPlacement(element, placements);
    });
    elements.forEach(function(element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = _decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
    });
    if (!decorators) return {
        elements: newElements,
        finishers: finishers
    };
    var result = _decorateConstructor(newElements, decorators);
    finishers.push.apply(finishers, result.finishers);
    result.finishers = finishers;
    return result;
}
function _addElementPlacement(element, placements, silent) {
    var keys = placements[element.placement];
    if (!silent && keys.indexOf(element.key) !== -1) throw new TypeError("Duplicated element (" + element.key + ")");
    keys.push(element.key);
}
function _decorateElement(element, placements) {
    var extras = [];
    var finishers = [];
    for(var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--){
        var keys = placements[element.placement];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = _fromElementDescriptor(element);
        var elementFinisherExtras = _toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        _addElementPlacement(element, placements);
        if (elementFinisherExtras.finisher) finishers.push(elementFinisherExtras.finisher);
        var newExtras = elementFinisherExtras.extras;
        if (newExtras) {
            for(var j = 0; j < newExtras.length; j++)_addElementPlacement(newExtras[j], placements);
            extras.push.apply(extras, newExtras);
        }
    }
    return {
        element: element,
        finishers: finishers,
        extras: extras
    };
}
function _decorateConstructor(elements, decorators) {
    var finishers = [];
    for(var i = decorators.length - 1; i >= 0; i--){
        var obj = _fromClassDescriptor(elements);
        var elementsAndFinisher = _toClassDescriptor((0, decorators[i])(obj) || obj);
        if (elementsAndFinisher.finisher !== undefined) finishers.push(elementsAndFinisher.finisher);
        if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;
            for(var j = 0; j < elements.length - 1; j++)for(var k = j + 1; k < elements.length; k++){
                if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) throw new TypeError("Duplicated element (" + elements[j].key + ")");
            }
        }
    }
    return {
        elements: elements,
        finishers: finishers
    };
}
function _fromElementDescriptor(element) {
    var obj = {
        kind: element.kind,
        key: element.key,
        placement: element.placement,
        descriptor: element.descriptor
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    if (element.kind === "field") obj.initializer = element.initializer;
    return obj;
}
function _toElementDescriptors(elementObjects) {
    if (elementObjects === undefined) return;
    return _toArrayDefault.default(elementObjects).map(function(elementObject) {
        var element = _toElementDescriptor(elementObject);
        _disallowProperty(elementObject, "finisher", "An element descriptor");
        _disallowProperty(elementObject, "extras", "An element descriptor");
        return element;
    });
}
function _toElementDescriptor(elementObject) {
    var kind = String(elementObject.kind);
    if (kind !== "method" && kind !== "field") throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' + kind + '"');
    var key = _toPropertyKeyDefault.default(elementObject.key);
    var placement = String(elementObject.placement);
    if (placement !== "static" && placement !== "prototype" && placement !== "own") throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' + placement + '"');
    var descriptor = elementObject.descriptor;
    _disallowProperty(elementObject, "elements", "An element descriptor");
    var element = {
        kind: kind,
        key: key,
        placement: placement,
        descriptor: Object.assign({}, descriptor)
    };
    if (kind !== "field") _disallowProperty(elementObject, "initializer", "A method descriptor");
    else {
        _disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
        _disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
        element.initializer = elementObject.initializer;
    }
    return element;
}
function _toElementFinisherExtras(elementObject) {
    var element = _toElementDescriptor(elementObject);
    var finisher = _optionalCallableProperty(elementObject, "finisher");
    var extras = _toElementDescriptors(elementObject.extras);
    return {
        element: element,
        finisher: finisher,
        extras: extras
    };
}
function _fromClassDescriptor(elements) {
    var obj = {
        kind: "class",
        elements: elements.map(_fromElementDescriptor)
    };
    var desc = {
        value: "Descriptor",
        configurable: true
    };
    Object.defineProperty(obj, Symbol.toStringTag, desc);
    return obj;
}
function _toClassDescriptor(obj) {
    var kind = String(obj.kind);
    if (kind !== "class") throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' + kind + '"');
    _disallowProperty(obj, "key", "A class descriptor");
    _disallowProperty(obj, "placement", "A class descriptor");
    _disallowProperty(obj, "descriptor", "A class descriptor");
    _disallowProperty(obj, "initializer", "A class descriptor");
    _disallowProperty(obj, "extras", "A class descriptor");
    var finisher = _optionalCallableProperty(obj, "finisher");
    var elements = _toElementDescriptors(obj.elements);
    return {
        elements: elements,
        finisher: finisher
    };
}
function _disallowProperty(obj, name, objectType) {
    if (obj[name] !== undefined) throw new TypeError(objectType + " can't have a ." + name + " property.");
}
function _optionalCallableProperty(obj, name) {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") throw new TypeError("Expected '" + name + "' to be a function");
    return value;
}
function _runClassFinishers(constructor, finishers) {
    for(var i = 0; i < finishers.length; i++){
        var newConstructor = (0, finishers[i])(constructor);
        if (newConstructor !== undefined) {
            if (typeof newConstructor !== "function") throw new TypeError("Finishers must return a constructor.");
            constructor = newConstructor;
        }
    }
    return constructor;
}

},{"./_to_array":"2yzSp","./_to_property_key":"bAIKj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2yzSp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _unsupportedIterableToArray = require("./_unsupported_iterable_to_array");
var _unsupportedIterableToArrayDefault = parcelHelpers.interopDefault(_unsupportedIterableToArray);
function _toArray(arr) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _unsupportedIterableToArrayDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _toArray;

},{"./_array_with_holes":"7RfHu","./_iterable_to_array":"d8jf5","./_non_iterable_rest":"51yKj","./_unsupported_iterable_to_array":"1HJ22","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d8jf5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
exports.default = _iterableToArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"51yKj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
exports.default = _nonIterableRest;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1HJ22":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayLikeToArray = require("./_array_like_to_array");
var _arrayLikeToArrayDefault = parcelHelpers.interopDefault(_arrayLikeToArray);
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArrayDefault.default(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArrayDefault.default(o, minLen);
}
exports.default = _unsupportedIterableToArray;

},{"./_array_like_to_array":"5fJP0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bAIKj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
var _toPrimitive = require("./_to_primitive");
var _toPrimitiveDefault = parcelHelpers.interopDefault(_toPrimitive);
function _toPropertyKey(arg) {
    var key = _toPrimitiveDefault.default(arg, "string");
    return _typeOfDefault.default(key) === "symbol" ? key : String(key);
}
exports.default = _toPropertyKey;

},{"./_type_of":"eUBAy","./_to_primitive":"hjFTf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjFTf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeOf = require("./_type_of");
var _typeOfDefault = parcelHelpers.interopDefault(_typeOf);
function _toPrimitive(input, hint) {
    if (_typeOfDefault.default(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeOfDefault.default(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
exports.default = _toPrimitive;

},{"./_type_of":"eUBAy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hrV1Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        var value = Object.getOwnPropertyDescriptor(defaults, key);
        if (value && value.configurable && obj[key] === undefined) Object.defineProperty(obj, key, value);
    }
    return obj;
}
exports.default = _defaults;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gt5o9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineEnumerableProperties(obj, descs) {
    for(var key in descs){
        var desc = descs[key];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, key, desc);
    }
    if (Object.getOwnPropertySymbols) {
        var objectSymbols = Object.getOwnPropertySymbols(descs);
        for(var i = 0; i < objectSymbols.length; i++){
            var sym = objectSymbols[i];
            var desc = descs[sym];
            desc.configurable = desc.enumerable = true;
            if ("value" in desc) desc.writable = true;
            Object.defineProperty(obj, sym, desc);
        }
    }
    return obj;
}
exports.default = _defineEnumerableProperties;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5RMOb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _defineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"vJeNc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return extends_.apply(this, arguments);
}
function _extends() {
    return extends_.apply(this, arguments);
}
exports.default = _extends;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6tDuR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function get(target1, property1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.get) get = Reflect.get;
    else get = function get(target, property, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(receiver || target);
        return desc.value;
    };
    return get(target1, property1, receiver1);
}
function _get(target, property, reciever) {
    return get(target, property, reciever);
}
exports.default = _get;

},{"./_super_prop_base":"h41tg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h41tg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOfDefault.default(object);
        if (object === null) break;
    }
    return object;
}
exports.default = _superPropBase;

},{"./_get_prototype_of":"g6dnE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fD3VF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOfDefault.default(subClass, superClass);
}
exports.default = _inherits;

},{"./_set_prototype_of":"7eUoq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fELNH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
exports.default = _inheritsLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3TO4f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
exports.default = _initializerDefineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2CTl1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _initializerWarningHelper(descriptor, context) {
    throw new Error("Decorating class property failed. Please ensure that proposal-class-properties is enabled and set to use loose mode. To use proposal-class-properties in spec mode with decorators, wait for the next major version of decorators in stage 2.");
}
exports.default = _initializerWarningHelper;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7x29e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) return !!right[Symbol.hasInstance](left);
    else return left instanceof right;
}
exports.default = _instanceof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6MKjY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports.default = _interopRequireDefault;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3Ocj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                if (desc.get || desc.set) Object.defineProperty(newObj, key, desc);
                else newObj[key] = obj[key];
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
exports.default = _interopRequireWildcard;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49J6w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
exports.default = _isNativeFunction;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hK5PL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
exports.default = _iterableToArrayLimit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l4Hz2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _iterableToArrayLimitLoose(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;
    var _arr = [];
    for(_i = _i.call(arr); !(_step = _i.next()).done;){
        _arr.push(_step.value);
        if (i && _arr.length === i) break;
    }
    return _arr;
}
exports.default = _iterableToArrayLimitLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ldcc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var REACT_ELEMENT_TYPE;
function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;
    if (!props && childrenLength !== 0) props = {
        children: void 0
    };
    if (props && defaultProps) {
        for(var propName in defaultProps)if (props[propName] === void 0) props[propName] = defaultProps[propName];
    } else if (!props) props = defaultProps || {};
    if (childrenLength === 1) props.children = children;
    else if (childrenLength > 1) {
        var childArray = new Array(childrenLength);
        for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 3];
        props.children = childArray;
    }
    return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key === undefined ? null : '' + key,
        ref: null,
        props: props,
        _owner: null
    };
}
exports.default = _createRawReactElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aiIAY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) throw new TypeError("Cannot instantiate an arrow function");
}
exports.default = _newArrowCheck;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2F8a8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
exports.default = _nonIterableSpread;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4YvT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _definePropertyDefault.default(target, key, source[key]);
        });
    }
    return target;
}
exports.default = _objectSpread;

},{"./_define_property":"5RMOb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1TgmY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectWithoutPropertiesLoose = require("./_object_without_properties_loose");
var _objectWithoutPropertiesLooseDefault = parcelHelpers.interopDefault(_objectWithoutPropertiesLoose);
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLooseDefault.default(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
exports.default = _objectWithoutProperties;

},{"./_object_without_properties_loose":"kdsko","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kdsko":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
exports.default = _objectWithoutPropertiesLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lpriK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _readOnlyError(name) {
    throw new Error("\"" + name + "\" is read-only");
}
exports.default = _readOnlyError;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kNsU5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("./_define_property");
var _definePropertyDefault = parcelHelpers.interopDefault(_defineProperty);
var _superPropBase = require("./_super_prop_base");
var _superPropBaseDefault = parcelHelpers.interopDefault(_superPropBase);
function set(target1, property1, value1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.set) set = Reflect.set;
    else set = function set(target, property, value, receiver) {
        var base = _superPropBaseDefault.default(target, property);
        var desc;
        if (base) {
            desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.set) {
                desc.set.call(receiver, value);
                return true;
            } else if (!desc.writable) return false;
        }
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
            if (!desc.writable) return false;
            desc.value = value;
            Object.defineProperty(receiver, property, desc);
        } else _definePropertyDefault.default(receiver, property, value);
        return true;
    };
    return set(target1, property1, value1, receiver1);
}
function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) throw new Error('failed to set property');
    return value;
}
exports.default = _set;

},{"./_define_property":"5RMOb","./_super_prop_base":"h41tg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8LtBV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _skipFirstGeneratorNext(fn) {
    return function() {
        var it = fn.apply(this, arguments);
        it.next();
        return it;
    };
}
exports.default = _skipFirstGeneratorNext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kt98A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _unsupportedIterableToArray = require("./_unsupported_iterable_to_array");
var _unsupportedIterableToArrayDefault = parcelHelpers.interopDefault(_unsupportedIterableToArray);
function _slicedToArray(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayDefault.default(arr, i) || _unsupportedIterableToArrayDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArray;

},{"./_array_with_holes":"7RfHu","./_iterable_to_array":"d8jf5","./_non_iterable_rest":"51yKj","./_unsupported_iterable_to_array":"1HJ22","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iaZIC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithHoles = require("./_array_with_holes");
var _arrayWithHolesDefault = parcelHelpers.interopDefault(_arrayWithHoles);
var _iterableToArrayLimitLoose = require("./_iterable_to_array_limit_loose");
var _iterableToArrayLimitLooseDefault = parcelHelpers.interopDefault(_iterableToArrayLimitLoose);
var _nonIterableRest = require("./_non_iterable_rest");
var _nonIterableRestDefault = parcelHelpers.interopDefault(_nonIterableRest);
var _unsupportedIterableToArray = require("./_unsupported_iterable_to_array");
var _unsupportedIterableToArrayDefault = parcelHelpers.interopDefault(_unsupportedIterableToArray);
function _slicedToArrayLoose(arr, i) {
    return _arrayWithHolesDefault.default(arr) || _iterableToArrayLimitLooseDefault.default(arr, i) || _unsupportedIterableToArrayDefault.default(arr, i) || _nonIterableRestDefault.default();
}
exports.default = _slicedToArrayLoose;

},{"./_array_with_holes":"7RfHu","./_iterable_to_array_limit_loose":"l4Hz2","./_non_iterable_rest":"51yKj","./_unsupported_iterable_to_array":"1HJ22","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gAyvx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
exports.default = _taggedTemplateLiteral;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d2boP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) raw = strings.slice(0);
    strings.raw = raw;
    return strings;
}
exports.default = _taggedTemplateLiteralLoose;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kzyx2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _throw(e) {
    throw e;
}
exports.default = _throw;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eprTL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayWithoutHoles = require("./_array_without_holes");
var _arrayWithoutHolesDefault = parcelHelpers.interopDefault(_arrayWithoutHoles);
var _iterableToArray = require("./_iterable_to_array");
var _iterableToArrayDefault = parcelHelpers.interopDefault(_iterableToArray);
var _nonIterableSpread = require("./_non_iterable_spread");
var _nonIterableSpreadDefault = parcelHelpers.interopDefault(_nonIterableSpread);
var _unsupportedIterableToArray = require("./_unsupported_iterable_to_array");
var _unsupportedIterableToArrayDefault = parcelHelpers.interopDefault(_unsupportedIterableToArray);
function _toConsumableArray(arr) {
    return _arrayWithoutHolesDefault.default(arr) || _iterableToArrayDefault.default(arr) || _unsupportedIterableToArrayDefault.default(arr) || _nonIterableSpreadDefault.default();
}
exports.default = _toConsumableArray;

},{"./_array_without_holes":"3GN4c","./_iterable_to_array":"d8jf5","./_non_iterable_spread":"2F8a8","./_unsupported_iterable_to_array":"1HJ22","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eCVXq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _asyncGenerator = require("./_async_generator");
var _asyncGeneratorDefault = parcelHelpers.interopDefault(_asyncGenerator);
function _wrapAsyncGenerator(fn) {
    return function() {
        return new _asyncGeneratorDefault.default(fn.apply(this, arguments));
    };
}
exports.default = _wrapAsyncGenerator;

},{"./_async_generator":"4otb1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jjGYK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _construct = require("./_construct");
var _constructDefault = parcelHelpers.interopDefault(_construct);
var _isNativeFunction = require("./_is_native_function");
var _isNativeFunctionDefault = parcelHelpers.interopDefault(_isNativeFunction);
var _getPrototypeOf = require("./_get_prototype_of");
var _getPrototypeOfDefault = parcelHelpers.interopDefault(_getPrototypeOf);
var _setPrototypeOf = require("./_set_prototype_of");
var _setPrototypeOfDefault = parcelHelpers.interopDefault(_setPrototypeOf);
function wrapNativeSuper(Class1) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    wrapNativeSuper = function wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunctionDefault.default(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _constructDefault.default(Class, arguments, _getPrototypeOfDefault.default(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOfDefault.default(Wrapper, Class);
    };
    return wrapNativeSuper(Class1);
}
function _wrapNativeSuper(Class) {
    return wrapNativeSuper(Class);
}
exports.default = _wrapNativeSuper;

},{"./_construct":"79Zak","./_is_native_function":"49J6w","./_get_prototype_of":"g6dnE","./_set_prototype_of":"7eUoq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"77vsq":[function(require,module,exports) {
(function(global, factory) {
    factory(exports);
})(this, function(exports) {
    'use strict';
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
    ***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
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
            return Array.prototype.reduce.apply(Array.from(this.$items.values()), arguments);
        };
        /**
         * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
         * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
         * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
         */ ArraySchema.prototype.reduceRight = function(callbackfn, initialValue) {
            return Array.prototype.reduceRight.apply(Array.from(this.$items.values()), arguments);
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
            if (!type) throw new Error("Type not found. Ensure your `@type` annotations are correct and that you don't have any circular dependencies.");
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

},{}],"9WNGX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Player", ()=>Player
);
var _helpers = require("@swc/helpers");
var _schema = require("@colyseus/schema");
var _card = require("./Card");
var _class, _descriptor, _dec, _descriptor1, _dec1, _descriptor2, _dec2, _descriptor3, _dec3, _descriptor4, _dec4, _descriptor5, _dec5, _descriptor6, _dec6, _descriptor7, _dec7, _descriptor8, _dec8, _descriptor9, _dec9, _descriptor10, _dec10;
let Player = (_class = class Player extends _schema.Schema {
    constructor(id, ready){
        super();
        _helpers.initializerDefineProperty(this, "ready", _descriptor, this);
        _helpers.initializerDefineProperty(this, "isDealer", _descriptor1, this);
        _helpers.initializerDefineProperty(this, "isTurn", _descriptor2, this);
        _helpers.initializerDefineProperty(this, "inRound", _descriptor3, this);
        _helpers.initializerDefineProperty(this, "bb", _descriptor4, this);
        _helpers.initializerDefineProperty(this, "currentBet", _descriptor5, this);
        _helpers.initializerDefineProperty(this, "id", _descriptor6, this);
        _helpers.initializerDefineProperty(this, "hand", _descriptor7, this);
        _helpers.initializerDefineProperty(this, "bestHand", _descriptor8, this);
        _helpers.initializerDefineProperty(this, "shouldShowHand", _descriptor9, this);
        _helpers.initializerDefineProperty(this, "lastAction", _descriptor10, this);
        this.ready = ready;
        this.id = id;
        this.hand = new _schema.ArraySchema();
        this.isDealer = false;
        this.isTurn = false;
        this.bb = 0;
        this.inRound = false;
        this.currentBet = 0;
        this.bestHand = new _schema.ArraySchema();
        this.shouldShowHand = false;
        this.lastAction = "";
    }
    get isReady() {
        return this.ready;
    }
    set isReady(isReady) {
        this.ready = isReady;
    }
}, _dec = _schema.type("boolean"), _dec1 = _schema.type("boolean"), _dec2 = _schema.type("boolean"), _dec3 = _schema.type("boolean"), _dec4 = _schema.type("number"), _dec5 = _schema.type("number"), _dec6 = _schema.type("string"), _dec7 = _schema.type([
    _card.Card
]), _dec8 = _schema.type([
    _card.Card
]), _dec9 = _schema.type("boolean"), _dec10 = _schema.type("string"), _descriptor = _helpers.applyDecoratedDescriptor(_class.prototype, "ready", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor1 = _helpers.applyDecoratedDescriptor(_class.prototype, "isDealer", [
    _dec1
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor2 = _helpers.applyDecoratedDescriptor(_class.prototype, "isTurn", [
    _dec2
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor3 = _helpers.applyDecoratedDescriptor(_class.prototype, "inRound", [
    _dec3
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor4 = _helpers.applyDecoratedDescriptor(_class.prototype, "bb", [
    _dec4
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor5 = _helpers.applyDecoratedDescriptor(_class.prototype, "currentBet", [
    _dec5
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor6 = _helpers.applyDecoratedDescriptor(_class.prototype, "id", [
    _dec6
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor7 = _helpers.applyDecoratedDescriptor(_class.prototype, "hand", [
    _dec7
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor8 = _helpers.applyDecoratedDescriptor(_class.prototype, "bestHand", [
    _dec8
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor9 = _helpers.applyDecoratedDescriptor(_class.prototype, "shouldShowHand", [
    _dec9
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor10 = _helpers.applyDecoratedDescriptor(_class.prototype, "lastAction", [
    _dec10
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class);

},{"@swc/helpers":"6Uysx","@colyseus/schema":"77vsq","./Card":"drn3t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"drn3t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Card", ()=>Card
);
var _helpers = require("@swc/helpers");
var _schema = require("@colyseus/schema");
var _class, _descriptor, _dec, _descriptor1, _dec1;
const SPADE = 0;
const CLUB = 1;
const DIAMOIND = 2;
const HEART = 3;
let Card = (_class = class Card extends _schema.Schema {
    constructor(value, suit){
        super();
        _helpers.initializerDefineProperty(this, "value", _descriptor, this);
        _helpers.initializerDefineProperty(this, "suit", _descriptor1, this);
        this.value = value;
        this.suit = suit;
    }
}, _dec = _schema.type("number"), _dec1 = _schema.type("number"), _descriptor = _helpers.applyDecoratedDescriptor(_class.prototype, "value", [
    _dec
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _descriptor1 = _helpers.applyDecoratedDescriptor(_class.prototype, "suit", [
    _dec1
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), _class);

},{"@swc/helpers":"6Uysx","@colyseus/schema":"77vsq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jjamN","6aAXe"], "6aAXe", "parcelRequire1d12")

//# sourceMappingURL=devIndex.869a5add.js.map
