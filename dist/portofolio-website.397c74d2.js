// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
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
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"MAtcu":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5687d663397c74d2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"agb61":[function(require,module,exports,__globalThis) {
// main.js
var _navbarJs = require("./navbar.js");
var _scrollJs = require("./scroll.js");
var _observerJs = require("./observer.js");
var _formJs = require("./form.js");
var _counterJs = require("./counter.js");
var _skillsJs = require("./skills.js");
var _typingJs = require("./typing.js");
var _parallaxJs = require("./parallax.js");
var _heroAnimationJs = require("./modules/hero/hero-animation.js");
var _renderJs = require("./modules/render.js");
// Function to handle the preloader
function initPreloader() {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) window.addEventListener('load', ()=>{
        loader.classList.add('hidden');
    });
}
async function main() {
    try {
        (0, _renderJs.initRenderModules)();
        (0, _navbarJs.initNavbarToggle)();
        (0, _navbarJs.initNavbarScrollEffect)();
        (0, _navbarJs.initActiveLinkHighlight)();
        (0, _scrollJs.initSmoothScrolling)();
        (0, _observerJs.initScrollAnimations)();
        (0, _formJs.initContactForm)();
        (0, _counterJs.initCounters)();
        (0, _skillsJs.initInteractiveSkills)();
        (0, _typingJs.initTypingEffect)();
        (0, _parallaxJs.initParallaxEffect)();
        (0, _heroAnimationJs.initHeroAnimation)();
        // Scroll to the section specified in the URL hash, if any
        (0, _scrollJs.scrollToHashSection)();
    } catch (error) {
        console.error("Failed to initialize the application:", error);
    }
}
// Initialize the preloader immediately
initPreloader();
// Run the main initialization function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', main);

},{"./navbar.js":"5Qtsy","./scroll.js":"dW7hi","./observer.js":"a0YY9","./form.js":"bKFB2","./counter.js":"7plQ5","./skills.js":"fkrbl","./typing.js":"l9EU3","./parallax.js":"39K6c","./modules/hero/hero-animation.js":"6FH5n","./modules/render.js":"8hjPE"}],"5Qtsy":[function(require,module,exports,__globalThis) {
// ===== navbar.js =====
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initNavbarToggle", ()=>initNavbarToggle);
parcelHelpers.export(exports, "initNavbarScrollEffect", ()=>initNavbarScrollEffect);
parcelHelpers.export(exports, "initActiveLinkHighlight", ()=>initActiveLinkHighlight);
function initNavbarToggle() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach((link)=>{
        link.addEventListener('click', ()=>{
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}
function initNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    // Always add the 'scrolled' class to make the navbar visible from the start
    navbar.classList.add('scrolled');
}
function initActiveLinkHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let isClickScrolling = false;
    let scrollTimeout;
    // Function to handle link activation on click
    function handleLinkClick(clickedLink) {
        isClickScrolling = true;
        navLinks.forEach((link)=>link.classList.remove('active'));
        clickedLink.classList.add('active');
        // Reset the flag after the scroll animation likely finishes
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(()=>{
            isClickScrolling = false;
        }, 1000); // 1 second delay
    }
    // Add click listeners to all nav links
    navLinks.forEach((link)=>{
        link.addEventListener('click', ()=>handleLinkClick(link));
    });
    const observerOptions = {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };
    const observer = new IntersectionObserver((entries)=>{
        if (isClickScrolling) return; // Ignore observer if a click-scroll is in progress
        // Handle the case when at the very top of the page (Home section)
        if (window.scrollY < 50) {
            navLinks.forEach((link)=>{
                link.classList.remove('active');
                if (link.getAttribute('href') === '#hero') link.classList.add('active');
            });
            return; // Exit early as Home is handled
        }
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach((link)=>{
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
                });
            }
        });
    }, observerOptions);
    sections.forEach((section)=>{
        observer.observe(section);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
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
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"dW7hi":[function(require,module,exports,__globalThis) {
// ===== scroll.js =====
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSmoothScrolling", ()=>initSmoothScrolling);
parcelHelpers.export(exports, "scrollToHashSection", ()=>scrollToHashSection);
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}
function scrollToHashSection() {
    const hash = window.location.hash;
    if (hash) {
        const target = document.querySelector(hash);
        if (target) // Wait for a short moment to ensure all dynamic content is rendered and positioned
        // This might need adjustment based on content loading times
        setTimeout(()=>{
            const offsetTop = target.offsetTop - 70; // Adjust for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }, 100); // 100ms delay, adjust if needed
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a0YY9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initScrollAnimations", ()=>initScrollAnimations);
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger a little before it's fully in view
    };
    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                const element = entry.target;
                element.classList.add('visible');
                // Handle staggered children if the container asks for it
                if (element.classList.contains('reveal-stagger')) {
                    const children = element.querySelectorAll('.reveal');
                    children.forEach((child, index)=>{
                        // We can't set a CSS variable with JS easily without a lot of code,
                        // so we'll use inline style for the delay.
                        // This is a good use case for inline styles.
                        child.style.transitionDelay = `${index * 200}ms`; // 200ms delay between items
                    });
                }
                // We can unobserve the element after it's visible
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    // Observe all elements with the .reveal class
    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach((element)=>{
        observer.observe(element);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bKFB2":[function(require,module,exports,__globalThis) {
// Fungsi Utama
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initContactForm", ()=>initContactForm);
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    contactForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        clearErrors();
        const name = contactForm.querySelector('#name').value;
        const email = contactForm.querySelector('#email').value;
        const subject = contactForm.querySelector('#subject').value;
        const message = contactForm.querySelector('#message').value;
        let isValid = true;
        if (!name) {
            displayError('name', 'Name is required.');
            isValid = false;
        } else if (name.length < 2) {
            displayError('name', 'Name must be at least 2 characters long.');
            isValid = false;
        } else if (name.length > 50) {
            displayError('name', 'Name cannot exceed 50 characters.');
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            displayError('name', 'Name can only contain letters and spaces.');
            isValid = false;
        }
        // Validasi Email
        if (!email) {
            displayError('email', 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(email)) {
            displayError('email', 'Please enter a valid email address.');
            isValid = false;
        } else if (email.length > 100) {
            displayError('email', 'Email cannot exceed 100 characters.');
            isValid = false;
        }
        // Validasi Subjek
        if (!subject) {
            displayError('subject', 'Subject is required.');
            isValid = false;
        } else if (subject.length < 5) {
            displayError('subject', 'Subject must be at least 5 characters long.');
            isValid = false;
        } else if (subject.length > 100) {
            displayError('subject', 'Subject cannot exceed 100 characters.');
            isValid = false;
        }
        // Validasi Pesan
        if (!message) {
            displayError('message', 'Message is required.');
            isValid = false;
        } else if (message.length < 10) {
            displayError('message', 'Message must be at least 10 characters long.');
            isValid = false;
        } else if (message.length > 500) {
            displayError('message', 'Message cannot exceed 500 characters.');
            isValid = false;
        }
        if (isValid) {
            const submitButton = contactForm.querySelector('button[type="submit"]');
            // Start loading
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.classList.add('loading');
            }
            const formData = new FormData(contactForm);
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then((response)=>{
                // Stop loading first
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.classList.remove('loading');
                }
                // Then show notification after a short delay
                setTimeout(()=>{
                    if (response.ok) {
                        showNotification('Message sent successfully! I will get back to you soon.', 'success');
                        contactForm.reset();
                        contactForm.querySelectorAll('input, textarea').forEach((input)=>{
                            const maxLength = parseInt(input.dataset.maxLength || (input.id === 'name' ? 50 : input.id === 'email' ? 100 : input.id === 'subject' ? 100 : 500));
                            updateCharCount(input, maxLength);
                        });
                    } else response.json().then((data)=>{
                        if (data && data.errors) {
                            const isLimitError = data.errors.some((error)=>error.message && error.message.toLowerCase().includes('inactive'));
                            if (isLimitError) showNotification('Maaf, batas pengiriman formulir untuk bulan ini telah tercapai.', 'error');
                            else showNotification(data.errors.map((error)=>error.message).join(", "), 'error');
                        } else showNotification('Oops! Terjadi masalah saat mengirim formulir Anda.', 'error');
                    });
                }, 100); // 100ms delay
            }).catch((error)=>{
                // Stop loading first
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.classList.remove('loading');
                }
                // Then show notification
                setTimeout(()=>{
                    showNotification('Oops! There was a network error.', 'error');
                }, 100); // 100ms delay
            });
        } else {
            const firstErrorField = contactForm.querySelector('.input-error');
            if (firstErrorField) {
                firstErrorField.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                firstErrorField.focus();
            }
        }
    });
    // Event listener untuk validasi real-time dan counter karakter
    contactForm.querySelectorAll('input, textarea').forEach((input)=>{
        const maxLength = parseInt(input.dataset.maxLength || (input.id === 'name' ? 50 : input.id === 'email' ? 100 : input.id === 'subject' ? 100 : 500));
        updateCharCount(input, maxLength);
        input.addEventListener('input', ()=>{
            hideNotification(); // Hide notification on new input
            const fieldName = input.id;
            const errorElement = document.getElementById(`${fieldName}-error`);
            if (errorElement && errorElement.textContent) clearError(fieldName);
            if (input.id === 'name') input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
            if (input.value.length > maxLength) input.value = input.value.substring(0, maxLength);
            updateCharCount(input, maxLength);
        });
    });
    // Listener to close the notification
    const closeButton = document.getElementById('notification-close');
    if (closeButton) closeButton.addEventListener('click', hideNotification);
}
// Fungsi-Fungsi Helper (diletakkan di file yang sama, di luar export)
function updateCharCount(inputElement, maxLength) {
    const currentLength = inputElement.value.length;
    const charCountElement = document.getElementById(`${inputElement.id}-char-count`);
    if (charCountElement) {
        charCountElement.textContent = `${currentLength}/${maxLength}`;
        if (currentLength > maxLength) charCountElement.style.color = '#dc3545';
        else charCountElement.style.color = '';
    }
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function displayError(field, message) {
    const errorElement = document.getElementById(`${field}-error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    const inputElement = document.getElementById(field);
    if (inputElement) inputElement.classList.add('input-error');
}
function clearError(field) {
    const errorElement = document.getElementById(`${field}-error`);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
    const inputElement = document.getElementById(field);
    if (inputElement) inputElement.classList.remove('input-error');
}
function clearErrors() {
    document.querySelectorAll('.error-message').forEach((el)=>{
        el.textContent = '';
        el.style.display = 'none';
    });
    document.querySelectorAll('.input-error').forEach((el)=>{
        el.classList.remove('input-error');
    });
}
function showNotification(message, type) {
    const notification = document.getElementById('form-notification');
    const messageEl = document.getElementById('notification-message');
    const closeButton = document.getElementById('notification-close');
    if (!notification || !messageEl || !closeButton) return;
    messageEl.textContent = message;
    notification.className = `form-notification ${type}`;
    notification.classList.add('show');
    // Scroll the notification into view for all devices
    notification.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    // Delay focus slightly for reliability after scroll
    setTimeout(()=>{
        closeButton.focus();
    }, 150); // Increased delay slightly to ensure scroll completes
}
function hideNotification() {
    const notification = document.getElementById('form-notification');
    if (notification) notification.classList.remove('show');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7plQ5":[function(require,module,exports,__globalThis) {
// ===== counter.js =====
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCounters", ()=>initCounters);
function initCounters() {
    const animateCounters = ()=>{
        const counters = document.querySelectorAll('.stat h3');
        counters.forEach((counter)=>{
            const rect = counter.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible && !counter.classList.contains('animated')) {
                counter.classList.add('animated');
                const target = parseInt(counter.textContent);
                let current = 0;
                const increment = target / 50;
                const updateCounter = ()=>{
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current) + '+';
                        requestAnimationFrame(updateCounter);
                    } else counter.textContent = target + '+';
                };
                updateCounter();
            }
        });
    };
    window.addEventListener('scroll', animateCounters);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fkrbl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Initializes the interactive skills functionality.
 */ parcelHelpers.export(exports, "initInteractiveSkills", ()=>initInteractiveSkills);
var _dataJs = require("./modules/skill/data.js");
// Store the currently visible detail box, its corresponding skill item, and the overlay
let currentDetailBox = null;
let currentSkillItem = null;
let currentOverlay = null;
/**
 * Creates and displays the detail box for a clicked skill item.
 * @param {HTMLElement} skillItem - The skill item that was clicked.
 */ function showSkillDetail(skillItem) {
    // If the same item is clicked again, hide the detail box and exit.
    if (skillItem === currentSkillItem) {
        hideCurrentSkillDetail();
        return;
    }
    // If another box is open, close it first
    if (currentDetailBox) hideCurrentSkillDetail();
    // --- Get Data ---
    const navbar = document.getElementById('navbar');
    const categoryName = skillItem.closest('.skill-category').querySelector('h3').textContent;
    const skillName = skillItem.querySelector('span').textContent;
    const category = (0, _dataJs.skillsData).categories.find((c)=>c.name === categoryName);
    const skill = category.items.find((i)=>i.name === skillName);
    if (!skill) return; // Exit if data not found
    // Hide navbar only on mobile when modal is open
    if (navbar && window.innerWidth <= 768) navbar.classList.add('navbar-hidden');
    // --- Create Overlay (for mobile) ---
    if (window.innerWidth <= 768) {
        const overlay = document.createElement('div');
        overlay.className = 'skill-overlay';
        document.body.appendChild(overlay);
        currentOverlay = overlay;
        overlay.addEventListener('click', hideCurrentSkillDetail);
    }
    // --- Create Box Element ---
    const detailBox = document.createElement('div');
    detailBox.className = 'skill-detail-box';
    // Conditional HTML based on screen size
    if (window.innerWidth <= 768) {
        // Mobile: Full-screen modal with close button and icon
        detailBox.innerHTML = `
            <button class="close-skill-detail">&times;</button>
            <div class="skill-detail-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-detail-header">
                <h4>${skill.name}</h4>
                <span class="skill-detail-level">${skill.level}</span>
            </div>
            <div class="progress-bar">
                <div class="progress-bar-inner"></div>
            </div>
            <p class="skill-detail-description">${skill.description}</p>
        `;
        detailBox.querySelector('.close-skill-detail').addEventListener('click', hideCurrentSkillDetail);
    } else // Desktop: Simple pop-up without close button or icon
    detailBox.innerHTML = `
            <div class="skill-detail-header">
                <h4>${skill.name}</h4>
                <span class="skill-detail-level">${skill.level}</span>
            </div>
            <div class="progress-bar">
                <div class="progress-bar-inner"></div>
            </div>
            <p class="skill-detail-description">${skill.description}</p>
        `;
    // --- Position and Show ---
    document.body.appendChild(detailBox);
    // Only apply JavaScript positioning for larger screens
    if (window.innerWidth > 768) positionDetailBox(skillItem, detailBox);
    // Make it visible with an animation
    requestAnimationFrame(()=>{
        if (currentOverlay) currentOverlay.classList.add('visible');
        detailBox.classList.add('visible');
        // Use a small timeout to ensure the transition is applied correctly on all devices
        setTimeout(()=>{
            const progressBarInner = detailBox.querySelector('.progress-bar-inner');
            if (progressBarInner) {
                const levelClass = `level-${skill.level.toLowerCase()}`;
                progressBarInner.classList.add(levelClass);
            }
        }, 50); // A 50ms delay is enough to ensure the browser registers the initial state
    });
    // --- Update State ---
    currentDetailBox = detailBox;
    currentSkillItem = skillItem;
    // Add a class for the bounce animation
    skillItem.classList.add('clicked');
    // Remove the class after the animation finishes
    setTimeout(()=>skillItem.classList.remove('clicked'), 400);
}
/**
 * Positions the detail box relative to the skill item.
 * @param {HTMLElement} skillItem - The target skill item.
 * @param {HTMLElement} detailBox - The detail box to position.
 */ function positionDetailBox(skillItem, detailBox) {
    // Only apply JavaScript positioning for larger screens
    if (window.innerWidth > 768) {
        const itemRect = skillItem.getBoundingClientRect();
        const bodyRect = document.body.getBoundingClientRect();
        // Position the box centered below the item
        let top = itemRect.bottom + window.scrollY + 10; // 10px gap
        let left = itemRect.left + window.scrollX + itemRect.width / 2 - detailBox.offsetWidth / 2;
        // Adjust if it goes off-screen
        if (left < 10) left = 10;
        if (left + detailBox.offsetWidth > bodyRect.width - 10) left = bodyRect.width - detailBox.offsetWidth - 10;
        detailBox.style.top = `${top}px`;
        detailBox.style.left = `${left}px`;
    }
}
/**
 * Hides the currently visible skill detail box and overlay.
 */ function hideCurrentSkillDetail() {
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.remove('navbar-hidden');
    if (currentOverlay) {
        const overlayToRemove = currentOverlay;
        overlayToRemove.classList.remove('visible');
        overlayToRemove.addEventListener('transitionend', ()=>{
            if (overlayToRemove.parentNode) overlayToRemove.remove();
        }, {
            once: true
        });
    }
    if (currentDetailBox) {
        const boxToRemove = currentDetailBox; // Capture the specific box to remove
        boxToRemove.classList.remove('visible');
        // After the fade-out transition ends, remove the captured element
        boxToRemove.addEventListener('transitionend', ()=>{
            // Only remove if it's still in the DOM
            if (boxToRemove.parentNode) boxToRemove.remove();
        }, {
            once: true
        });
    }
    currentDetailBox = null;
    currentSkillItem = null;
    currentOverlay = null;
}
function initInteractiveSkills() {
    const skillsSection = document.getElementById('skill');
    if (!skillsSection) return;
    skillsSection.addEventListener('click', (event)=>{
        const skillItem = event.target.closest('.skill-item');
        if (skillItem) {
            event.stopPropagation(); // Prevent the document click listener from firing immediately
            showSkillDetail(skillItem);
        }
    });
    // Add a global click listener to close the box when clicking outside
    // This works for desktop. On mobile, the overlay handles it.
    document.addEventListener('click', (event)=>{
        if (currentDetailBox && !currentDetailBox.contains(event.target) && !event.target.closest('.skill-item')) hideCurrentSkillDetail();
    });
    // Add a resize listener to close the box when the window is resized
    window.addEventListener('resize', ()=>{
        hideCurrentSkillDetail();
    });
}

},{"./modules/skill/data.js":"5TheD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5TheD":[function(require,module,exports,__globalThis) {
// js/modules/skill/data.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skillsData", ()=>skillsData);
const skillsData = {
    title: "Skills & Technologies",
    categories: [
        {
            name: "Frontend",
            items: [
                {
                    icon: "devicon-html5-plain colored",
                    name: "HTML5",
                    level: "Advanced",
                    percentage: 95,
                    description: "Building semantic, accessible, and SEO-friendly web structures."
                },
                {
                    icon: "devicon-css3-plain colored",
                    name: "CSS3",
                    level: "Advanced",
                    percentage: 90,
                    description: "Designing responsive layouts (Flexbox/Grid) and modern animations."
                },
                {
                    icon: "devicon-bootstrap-plain colored",
                    name: "Bootstrap",
                    level: "Intermediate",
                    percentage: 75,
                    description: "Rapidly developing responsive websites with a proven and extensive component library."
                },
                {
                    icon: "devicon-tailwindcss-plain colored",
                    name: "TailwindCSS",
                    level: "Intermediate",
                    percentage: 70,
                    description: "Building custom designs without leaving your HTML using a utility-first CSS framework."
                },
                {
                    icon: "devicon-javascript-plain colored",
                    name: "JavaScript",
                    level: "Advanced",
                    percentage: 85,
                    description: "Implementing interactive logic, DOM manipulation, and ES6+ features."
                },
                {
                    icon: "devicon-react-original colored",
                    name: "React",
                    level: "Intermediate",
                    percentage: 70,
                    description: "Building Single Page Applications (SPAs) with functional components."
                },
                {
                    icon: "devicon-vuejs-plain colored",
                    name: "Vue.js",
                    level: "Basic",
                    percentage: 40,
                    description: "Understanding the basics of Vue to create reactive and modular UIs."
                }
            ]
        },
        {
            name: "Backend",
            items: [
                {
                    icon: "devicon-nodejs-plain colored",
                    name: "Node.js",
                    level: "Intermediate",
                    percentage: 75,
                    description: "Building server-side applications and RESTful APIs using Express."
                },
                {
                    icon: "devicon-python-plain colored",
                    name: "Python",
                    level: "Intermediate",
                    percentage: 65,
                    description: "Used for scripting, automation, and basic web development."
                },
                {
                    icon: "devicon-mysql-plain colored",
                    name: "MySQL",
                    level: "Advanced",
                    percentage: 90,
                    description: "Designing and managing efficient relational database schemas."
                },
                {
                    icon: "devicon-postgresql-plain colored",
                    name: "PostgreSQL",
                    level: "Intermediate",
                    percentage: 70,
                    description: "A powerful alternative to MySQL with support for advanced features."
                },
                {
                    icon: "devicon-php-plain colored",
                    name: "PHP",
                    level: "Intermediate",
                    percentage: 60,
                    description: "Experience with popular CMS and the basics of the Laravel framework."
                },
                {
                    icon: "devicon-laravel-plain colored",
                    name: "Laravel",
                    level: "Intermediate",
                    percentage: 65,
                    description: "Building full-stack web applications and RESTful APIs with Laravel's rich ecosystem, including templating with Blade."
                },
                {
                    icon: "devicon-express-original colored",
                    name: "Express.js",
                    level: "Intermediate",
                    percentage: 70,
                    description: "A minimalist framework for building APIs and web applications with Node.js."
                }
            ]
        },
        {
            name: "Tools",
            items: [
                {
                    icon: "devicon-git-plain colored",
                    name: "Git",
                    level: "Advanced",
                    percentage: 95,
                    description: "Version control system for team collaboration and efficient code management."
                },
                {
                    icon: "devicon-docker-plain colored",
                    name: "Docker",
                    level: "Intermediate",
                    percentage: 70,
                    description: "Creating containers for consistent development and deployment environments."
                },
                {
                    icon: "devicon-figma-plain colored",
                    name: "Figma",
                    level: "Advanced",
                    percentage: 85,
                    description: "Designing user interfaces (UI) and interactive prototypes."
                },
                {
                    icon: "devicon-vscode-plain colored",
                    name: "VS Code",
                    level: "Advanced",
                    percentage: 95,
                    description: "Primary code editor with customizations and extensions for productivity."
                },
                {
                    icon: "fas fa-terminal",
                    name: "Terminal",
                    level: "Advanced",
                    percentage: 90,
                    description: "Using the CLI for navigation, script automation, and system management."
                }
            ]
        }
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l9EU3":[function(require,module,exports,__globalThis) {
// ===== typing.js =====
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTypingEffect", ()=>initTypingEffect);
function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) callback();
    }
    type();
}
function initTypingEffect() {
    const typingTarget = document.getElementById('typing-target');
    if (typingTarget) {
        // Text to be typed
        const textToType = "Key Farel";
        // Typing speed in milliseconds
        const typingSpeed = 150;
        // Start the typing animation
        typeWriter(typingTarget, textToType, typingSpeed, ()=>{
            // Optional: Add a blinking cursor after typing is done
            typingTarget.style.borderRight = '2px solid white';
            setInterval(()=>{
                typingTarget.style.borderRightColor = typingTarget.style.borderRightColor === 'transparent' ? 'white' : 'transparent';
            }, 500);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"39K6c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initParallaxEffect", ()=>initParallaxEffect);
function initParallaxEffect() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;
    // The parallax effect ONLY applies to the content container.
    // The background is left alone to scroll normally.
    const contentContainer = heroSection.querySelector('.hero-container');
    if (!contentContainer) return;
    window.addEventListener('scroll', ()=>{
        const scrollY = window.scrollY;
        const heroHeight = heroSection.offsetHeight;
        // Define the point where the content starts to fade and move up.
        // Let's use 65% of the hero's height as the trigger point.
        const animationStartPoint = heroHeight * 0.65;
        // If we are scrolling before the trigger point, do nothing. Let it scroll normally.
        if (scrollY < animationStartPoint) {
            contentContainer.style.opacity = 1;
            contentContainer.style.transform = 'translateY(0px)';
            return;
        }
        // If we are past the trigger point, calculate the animation progress.
        const animationDuration = heroHeight - animationStartPoint;
        const progress = Math.min(1, (scrollY - animationStartPoint) / animationDuration);
        // Animate the content's opacity to fade it out.
        const opacity = 1 - progress;
        contentContainer.style.opacity = Math.max(0, opacity);
        // Optionally, move the content up slightly as it fades.
        const transformY = progress * 50; // Move up by a small amount (e.g., 50px)
        contentContainer.style.transform = `translateY(-${transformY}px)`;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6FH5n":[function(require,module,exports,__globalThis) {
// initHeroAnimation.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHeroAnimation", ()=>initHeroAnimation);
function initHeroAnimation() {
    const heroContainer = document.querySelector('.hero-container');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const heroBackground = document.querySelector('.hero-background');
    const heroSection = document.querySelector('.hero');
    if (!heroContainer || !scrollIndicator || !heroBackground || !heroSection) return;
    // Fungsi ini akan dipanggil setiap kali ada event scroll
    const handleScrollAnimation = ()=>{
        const scrollPosition = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        const isMobile = window.innerWidth <= 768; // Sesuaikan dengan breakpoint CSS Anda
        let opacity = 1;
        let transformY = 0;
        if (isMobile) {
            // ===== LOGIKA BARU KHUSUS MOBILE =====
            // Biarkan parallax tetap berjalan dari awal untuk efek kedalaman
            const parallaxSpeed = 0.3; // Kecepatan paralaks bisa dibuat lebih lambat di mobile
            transformY = scrollPosition * parallaxSpeed;
            // Tentukan kapan fade harus dimulai dan berapa lama durasinya
            const startFadePosition = heroHeight * 0.60; // Mulai fade setelah 60% konten di-scroll
            const fadeDuration = heroHeight - startFadePosition; // Fade akan terjadi di sisa 40% terakhir
            if (scrollPosition >= startFadePosition) {
                // Jika sudah masuk zona fade, hitung opasitasnya
                const scrollInFadeZone = scrollPosition - startFadePosition;
                opacity = 1 - scrollInFadeZone / fadeDuration;
            } else // Jika belum, opasitas tetap 1 (terlihat penuh)
            opacity = 1;
        } else {
            // ===== LOGIKA LAMA UNTUK DESKTOP =====
            // Efek Paralaks untuk Desktop
            const parallaxSpeed = 0.5;
            transformY = scrollPosition * parallaxSpeed;
            // Efek Opasitas untuk Desktop (menggunakan logika fade yang sudah ada)
            // Memisahkan konten dan background tetap ide yang bagus
            const contentFadeDistance = heroHeight * 0.9;
            const backgroundFadeDistance = heroHeight * 1.5;
            const contentOpacity = Math.max(0, 1 - scrollPosition / contentFadeDistance);
            const backgroundOpacity = Math.max(0, 1 - scrollPosition / backgroundFadeDistance);
            // Terapkan opasitas terpisah untuk desktop
            heroContainer.style.opacity = contentOpacity;
            scrollIndicator.style.opacity = contentOpacity;
            heroBackground.style.opacity = backgroundOpacity;
            // Terapkan transform dan keluar dari fungsi lebih awal
            heroBackground.style.transform = `translateY(${transformY}px)`;
            heroContainer.style.transform = `translateY(${transformY}px)`;
            return;
        }
        // --- TERAPKAN NILAI UNTUK MOBILE ---
        // (Kode ini hanya akan berjalan di mobile karena desktop sudah 'return' di atas)
        const finalOpacity = Math.max(0, opacity); // Pastikan tidak kurang dari 0
        // Terapkan opasitas yang sama ke semua elemen hero di mobile
        heroContainer.style.opacity = finalOpacity;
        scrollIndicator.style.opacity = finalOpacity;
        heroBackground.style.opacity = finalOpacity;
        // Terapkan transform
        heroBackground.style.transform = `translateY(${transformY}px)`;
        heroContainer.style.transform = `translateY(${transformY}px)`;
    };
    // Tambahkan event listener ke window
    window.addEventListener('scroll', handleScrollAnimation, {
        passive: true
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8hjPE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRenderModules", ()=>initRenderModules);
var _renderJs = require("./hero/render.js");
var _renderJs1 = require("./about/render.js");
var _renderJs2 = require("./skill/render.js");
var _renderJs3 = require("./project/render.js");
var _renderJs4 = require("./contact/render.js");
var _renderJs5 = require("./footer/render.js");
var _renderJs6 = require("./navbar/render.js");
function initRenderModules() {
    (0, _renderJs6.renderNavbar)();
    (0, _renderJs.renderHeroSection)();
    (0, _renderJs1.renderAboutSection)();
    (0, _renderJs2.renderSkillsSection)();
    (0, _renderJs3.renderProjects)();
    (0, _renderJs4.renderContactSection)();
    (0, _renderJs5.renderFooter)();
}

},{"./hero/render.js":"czIKS","./about/render.js":"hRlgc","./skill/render.js":"i2VmP","./project/render.js":"6A6kx","./contact/render.js":"2EjS9","./footer/render.js":"fYim5","./navbar/render.js":"9cnaD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"czIKS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHeroSection", ()=>renderHeroSection);
var _dataJs = require("./data.js");
function renderHeroSection() {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;
    heroSection.innerHTML = `
        <div class="hero-background"></div>
        <div class="container hero-container">
            <div class="hero-content">
                <div class="hero-text-content">
                    <h1 class="hero-title animate-on-load">${(0, _dataJs.heroData).title}</h1>
                    <p class="hero-subtitle animate-on-load">${(0, _dataJs.heroData).subtitle_prefix}<span class="highlight-role">${(0, _dataJs.heroData).subtitle_role}</span><span id="typing-effect"></span></p>
                    <p class="hero-description animate-on-load">${(0, _dataJs.heroData).description}</p>
                </div>
                <div class="hero-buttons animate-on-load">
                    <a href="${(0, _dataJs.heroData).primary_button.link}" class="btn btn-primary">${(0, _dataJs.heroData).primary_button.text}</a>
                    <a href="${(0, _dataJs.heroData).secondary_button.link}" class="btn btn-secondary">${(0, _dataJs.heroData).secondary_button.text}</a>
                </div>
            </div>
            <div class="hero-image">
                <div class="image-placeholder animate-on-load">
                    <i class="${(0, _dataJs.heroData).icon}"></i>
                </div>
            </div>
        </div>
        <a href="#about" class="scroll-indicator">
            <div class="scroll-arrow"></div>
        </a>
    `;
}

},{"./data.js":"bJ26s","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bJ26s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "heroData", ()=>heroData);
const heroData = {
    title: "Hi, I'm Key Farel",
    subtitle_prefix: "I'm a ",
    subtitle_role: "Fullstack Web Developer",
    description: "I build modern, responsive, and engaging web experiences from front to back. Let's create something amazing together.",
    primary_button: {
        text: "View My Work",
        link: "#project"
    },
    secondary_button: {
        text: "Contact Me",
        link: "#contact"
    },
    icon: "fas fa-code"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hRlgc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderAboutSection", ()=>renderAboutSection);
var _dataJs = require("./data.js");
function renderAboutSection() {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;
    const statsHTML = (0, _dataJs.aboutData).stats.map((stat)=>`
        <div class="stat">
            <h3 class="counter" data-target="${stat.value}">0</h3>
            <p>${stat.label}</p>
        </div>
    `).join('');
    aboutSection.innerHTML = `
        <div class="container">
            <h2 class="section-title reveal reveal-up">${(0, _dataJs.aboutData).title}</h2>
            <div class="about-content">
                <div class="about-text reveal reveal-left">
                    <p>${(0, _dataJs.aboutData).description}</p>
                    <div class="about-stats">
                        ${statsHTML}
                    </div>
                </div>
                <div class="about-image about-image-col reveal reveal-right">
                    <img src="${(0, _dataJs.aboutData).imageUrl}" alt="${(0, _dataJs.aboutData).imageAlt}">
                </div>
            </div>
        </div>
    `;
}

},{"./data.js":"2Ksme","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2Ksme":[function(require,module,exports,__globalThis) {
// js/modules/about/data.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aboutData", ()=>aboutData);
const aboutData = {
    title: 'About Me',
    description: `Hello! I'm Key, a passionate and detail-oriented developer with a love for creating elegant and efficient solutions. My journey in the world of programming began with a curiosity for how things work, and it has since evolved into a full-fledged passion for building beautiful and functional web applications.`,
    stats: [
        {
            value: 2,
            label: 'Years of Experience'
        },
        {
            value: 10,
            label: 'Completed Projects'
        },
        {
            value: 5,
            label: 'Happy Clients'
        }
    ],
    // imageUrl: `placeholder.2877b82e.svg`,
    imageUrl: `assets/placeholder/placeholder.svg`,
    imageAlt: 'A placeholder image representing Key Firdausi Alfarel'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i2VmP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderSkillsSection", ()=>renderSkillsSection);
var _dataJs = require("./data.js");
function renderSkillsSection() {
    const container = document.getElementById("skill");
    if (!container) return;
    // Membuat blok HTML untuk setiap kategori skill
    const categoriesHTML = (0, _dataJs.skillsData).categories.map((category)=>{
        // Untuk setiap kategori, buat list item skill-nya
        const itemsHTML = category.items.map((item)=>`
      <div class="skill-item">
        <i class="${item.icon}"></i>
        <span>${item.name}</span>
      </div>
    `).join('');
        // Kembalikan HTML untuk satu kategori penuh
        return `
      <div class="skill-category reveal reveal-up">
        <h3>${category.name}</h3>
        <div class="skill-items">
          ${itemsHTML}
        </div>
      </div>
    `;
    }).join('');
    // Rakit semua bagian menjadi HTML utuh
    const fullHTML = `
    <div class="container">
      <h2 class="section-title reveal reveal-up">${(0, _dataJs.skillsData).title}</h2>
      <div class="skills-grid reveal reveal-stagger">
        ${categoriesHTML}
      </div>
    </div>
  `;
    container.innerHTML = fullHTML;
}

},{"./data.js":"5TheD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6A6kx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderProjects", ()=>renderProjects);
var _dataJs = require("./data.js");
function renderProjects() {
    const projectSection = document.getElementById('project');
    if (!projectSection) return;
    const projectsHTML = (0, _dataJs.projectData).projects.map((project)=>`
        <div class="project-card reveal reveal-zoom">
            <div class="project-image">
                <img src="${project.imageUrl}" alt="${project.imageAlt}">
                <div class="project-overlay">
                    <div class="project-links">
                        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="project-link" aria-label="View Live Site"><i class="fas fa-eye"></i></a>` : ''}
                        <a href="${project.repoUrl}" target="_blank" class="project-link" aria-label="View Repository"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map((t)=>`<span>${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    projectSection.innerHTML = `
        <div class="parallax-bg" data-parallax-speed="0.5"></div>
        <div class="container">
            <h2 class="section-title reveal reveal-up">${(0, _dataJs.projectData).title}</h2>
            <div class="projects-grid reveal reveal-stagger">
                ${projectsHTML}
            </div>
        </div>
    `;
}

},{"./data.js":"bbx3z","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bbx3z":[function(require,module,exports,__globalThis) {
// js/modules/project/data.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "projectData", ()=>projectData);
const projectData = {
    title: 'Featured Projects',
    projects: [
        {
            title: 'Personal Portfolio',
            description: 'A personal portfolio website showcasing profile, skills, featured projects, and contact information in a clean and responsive design. Built with HTML, CSS, and JavaScript, it delivers a smooth user experience with lightweight performance and modern UI touches.',
            // imageUrl: 'project-1.899dc3a6.png',
            // imageUrl: `assets/placeholder/placeholder.svg`,
            imageUrl: `assets/placeholder/placeholder.svg`,
            imageAlt: 'Placeholder image for Project One',
            repoUrl: 'https://github.com/keyfarel/keyfarel.github.io',
            tech: [
                'HTML',
                'CSS',
                'JavaScript'
            ]
        },
        {
            title: 'Project Two',
            description: 'A brief description of Project Two, highlighting its main features and the technologies used.',
            // imageUrl: 'placeholder.2877b82e.svg',
            imageUrl: `assets/placeholder/placeholder.svg`,
            imageAlt: 'Placeholder image for Project Two',
            repoUrl: '#',
            tech: [
                'React',
                'Node.js',
                'Express'
            ]
        },
        {
            title: 'Project Three',
            description: 'A brief description of Project Three, highlighting its main features and the technologies used.',
            // imageUrl: 'placeholder.2877b82e.svg',
            imageUrl: `assets/placeholder/placeholder.svg`,
            imageAlt: 'Placeholder image for Project Three',
            liveUrl: '#',
            repoUrl: '#',
            tech: [
                'Vue',
                'Firebase',
                'SCSS'
            ]
        }
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2EjS9":[function(require,module,exports,__globalThis) {
// js/modules/contact/render.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderContactSection", ()=>renderContactSection);
var _dataJs = require("./data.js");
function renderContactSection() {
    const container = document.getElementById("contact");
    if (!container) return;
    // Membuat list item detail kontak secara dinamis
    const detailsHTML = (0, _dataJs.contactData).details.map((item)=>`
    <div class="contact-item">
      <i class="${item.icon}"></i>
      <a href="${item.link}">${item.text}</a>
    </div>
  `).join('');
    // Membuat link sosial secara dinamis
    const socialsHTML = (0, _dataJs.contactData).socials.map((social)=>`
    <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="social-link">
      <i class="${social.icon}"></i>
    </a>
  `).join('');
    // Merakit semua bagian menjadi HTML utuh
    const fullHTML = `
    <div class="container">
      <h2 class="section-title reveal reveal-up">${(0, _dataJs.contactData).title}</h2>
      <div class="contact-content">
        <div class="contact-info reveal reveal-left">
          <h3>${(0, _dataJs.contactData).info.heading}</h3>
          <p>${(0, _dataJs.contactData).info.paragraph}</p>
          <div class="contact-details">
            ${detailsHTML}
          </div>
          <div class="social-links">
            ${socialsHTML}
          </div>
        </div>
        <form action="https://formspree.io/f/myzpnplp" method="POST" class="contact-form reveal reveal-right" id="contact-form" novalidate>
          <div id="form-notification" class="form-notification" tabindex="-1" aria-live="assertive">
            <span id="notification-message"></span>
            <button type="button" id="notification-close" class="notification-close" aria-label="Close">&times;</button>
          </div>
          <div class="form-group">
            <input type="text" id="name" name="name" placeholder="Your Name" required>
            <div class="validation-feedback">
              <span class="error-message" id="name-error"></span>
              <span class="char-count" id="name-char-count">0/50</span>
            </div>
          </div>
          <div class="form-group">
            <input type="email" id="email" name="email" placeholder="Your Email" required>
            <div class="validation-feedback">
              <span class="error-message" id="email-error"></span>
              <span class="char-count" id="email-char-count">0/100</span>
            </div>
          </div>
          <div class="form-group">
            <input type="text" id="subject" name="subject" placeholder="Subject" required>
            <div class="validation-feedback">
              <span class="error-message" id="subject-error"></span>
              <span class="char-count" id="subject-char-count">0/100</span>
            </div>
          </div>
          <div class="form-group">
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
            <div class="validation-feedback">
              <span class="error-message" id="message-error"></span>
              <span class="char-count" id="message-char-count">0/500</span>
            </div>
          </div>
          <div id="form-notification" class="form-notification"></div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  `;
    container.innerHTML = fullHTML;
}

},{"./data.js":"f84s0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f84s0":[function(require,module,exports,__globalThis) {
// js/modules/contact/data.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "contactData", ()=>contactData);
const contactData = {
    title: "Get In Touch",
    info: {
        heading: "Let's work together!",
        paragraph: "I'm always interested in new opportunities and exciting project. Whether you have a question or just want to say hi, feel free to reach out!"
    },
    details: [
        {
            icon: "fas fa-envelope",
            text: "keyfarel645@gmail.com",
            link: "mailto:keyfarel645@gmail.com"
        },
        {
            icon: "fas fa-phone",
            text: "+62 815-4731-8665",
            link: "tel:+6281547318665"
        },
        {
            icon: "fas fa-map-marker-alt",
            text: "Malang, Jawa Timur, Indonesia",
            link: "https://maps.app.goo.gl/cZEHe3yXUASn3d356"
        }
    ],
    socials: [
        {
            icon: "fab fa-linkedin",
            url: "https://linkedin.com/in/key-firdausi-alfarel-566616290"
        },
        {
            icon: "fab fa-github",
            url: "https://github.com/keyfarel"
        },
        {
            icon: "fab fa-twitter",
            url: "#"
        },
        {
            icon: "fab fa-instagram",
            url: "https://www.instagram.com/farel_key05"
        }
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fYim5":[function(require,module,exports,__globalThis) {
// js/modules/footer/render.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderFooter", ()=>renderFooter);
var _dataJs = require("./data.js");
function renderFooter() {
    const container = document.getElementById("main-footer");
    if (!container) return;
    const currentYear = new Date().getFullYear();
    const copyrightHTML = `
    <div class="container">
      <p>&copy; ${currentYear} ${(0, _dataJs.footerData).copyrightName}</p>
    </div>
  `;
    container.innerHTML = copyrightHTML;
}

},{"./data.js":"hczg1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hczg1":[function(require,module,exports,__globalThis) {
// js/modules/footer/data.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "footerData", ()=>footerData);
const footerData = {
    copyrightName: "Key Firdausi Alfarel. All rights reserved."
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9cnaD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderNavbar", ()=>renderNavbar);
var _dataJs = require("./data.js");
function renderNavbar() {
    const container = document.getElementById("navbar");
    if (!container) return;
    // Membuat link navigasi secara dinamis dari data
    const linksHTML = (0, _dataJs.navbarData).links.map((link)=>`
    <a href="${link.url}" class="nav-link">${link.text}</a>
  `).join('');
    // Merakit HTML navbar secara lengkap
    const fullHTML = `
    <div class="nav-container">
      <div class="nav-logo">
        <a href="${(0, _dataJs.navbarData).logo.url}">${(0, _dataJs.navbarData).logo.text}</a>
      </div>
      <div class="nav-menu" id="nav-menu">
        ${linksHTML}
      </div>
      <div class="nav-toggle" id="nav-toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  `;
    container.innerHTML = fullHTML;
}

},{"./data.js":"lgYoP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lgYoP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "navbarData", ()=>navbarData);
const navbarData = {
    logo: {
        text: "Portfolio",
        url: "#hero"
    },
    links: [
        {
            text: "Home",
            url: "#hero"
        },
        {
            text: "About",
            url: "#about"
        },
        {
            text: "Skills",
            url: "#skill"
        },
        {
            text: "Projects",
            url: "#project"
        },
        {
            text: "Contact",
            url: "#contact"
        }
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["MAtcu","agb61"], "agb61", "parcelRequire412c", {})

//# sourceMappingURL=portofolio-website.397c74d2.js.map
