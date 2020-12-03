// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/genres.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genres = void 0;
const genres = [{
  id: 1,
  name: "Action"
}, {
  id: 2,
  name: "Adventure"
}, {
  id: 3,
  name: "Cars"
}, {
  id: 4,
  name: "Comedy"
}, {
  id: 5,
  name: "Dementia"
}, {
  id: 6,
  name: "Demons"
}, {
  id: 7,
  name: "Mystery"
}, {
  id: 8,
  name: "Drama"
}, {
  id: 9,
  name: "Ecchi"
}, {
  id: 10,
  name: "Fantasy"
}, {
  id: 11,
  name: "Game"
}, {
  id: 12,
  name: "Hentai"
}, {
  id: 13,
  name: "Historical"
}, {
  id: 14,
  name: "Horror"
}, {
  id: 15,
  name: "Kids"
}, {
  id: 16,
  name: "Magic"
}, {
  id: 17,
  name: "Martial Arts"
}, {
  id: 18,
  name: "Mecha"
}, {
  id: 19,
  name: "Music"
}, {
  id: 20,
  name: "Parody"
}, {
  id: 21,
  name: "Samurai"
}, {
  id: 22,
  name: "Romance"
}, {
  id: 23,
  name: "School"
}, {
  id: 24,
  name: "Sci Fi"
}, {
  id: 25,
  name: "Shoujo"
}, {
  id: 26,
  name: "Shoujo Ai"
}, {
  id: 27,
  name: "Shounen"
}, {
  id: 28,
  name: "Shounen Ai"
}, {
  id: 29,
  name: "Space"
}, {
  id: 30,
  name: "Sports"
}, {
  id: 31,
  name: "Super Power"
}, {
  id: 32,
  name: "Vampire"
}, {
  id: 33,
  name: "Yaoi"
}, {
  id: 34,
  name: "Yuri"
}, {
  id: 35,
  name: "Harem"
}, {
  id: 36,
  name: "Slice Of Life"
}, {
  id: 37,
  name: "Supernatural"
}, {
  id: 38,
  name: "Military"
}, {
  id: 39,
  name: "Police"
}, {
  id: 40,
  name: "Psychological"
}, {
  id: 41,
  name: "Thriller"
}, {
  id: 42,
  name: "Seinen"
}, {
  id: 43,
  name: "Josei"
}];
exports.genres = genres;
},{}],"js/DOM.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMSelectors = void 0;
const DOMSelectors = {
  grid: document.querySelector(".anime-grid"),
  //searchForm: document.getElementById("search-form"),
  searchArea: document.getElementById("search-area")
  /*  btnPrev: document.querySelector(".btn-prev"),
      btnNext: document.querySelector(".btn-next"), */

};
exports.DOMSelectors = DOMSelectors;
},{}],"js/search.js":[function(require,module,exports) {
"use strict";

var _genres = require("./genres");

var _DOM = require("./DOM");

const listen = function listen() {
  _DOM.DOMSelectors.searchArea.addEventListener("submit", function (e) {
    e.preventDefault(); //search

    const searchParams = _DOM.DOMSelectors.searchArea.value; //async

    console.log(searchParams);

    const animeSearch = async function animeSearch() {
      const requestUrl = "https://api.jikan.moe/v3/search/anime?q=".concat(searchParams);
      console.log(requestUrl);

      try {
        const response = await fetch(requestUrl);
        const data = await response.json();
        data.results.forEach(anime => {
          _DOM.DOMSelectors.grid.insertAdjacentHTML("beforeend", "<div class=\"anime-card\">\n                <div class=\"anime-card-front\">\n                  <img\n                    src=\"".concat(item.image_url, "\"\n                    alt=\"\"\n                    class=\"poster\"\n                  />\n                </div>\n                <div class=\"anime-card-back\">\n                  <h3 class=\"anime-card-header\">").concat(anime.title, "</h3>\n                  <div class=\"score-box\">\n                    <p class=\"user-score\">Community Score</p>\n                    <p class=\"user-score\">").concat(anime.score, "</p>\n                  </div>\n        \n                  <div class=\"release-box\">\n                    <p class=\"release-date\">Released</p>\n                    <p class=\"release-date\">").concat(anime.start_date, "</p>\n                  </div>\n        \n                  <div class=\"anime-genres\">\n                    <div>").concat(genreArr, "</div>\n                  </div>\n                </div>\n              </div>"));
        });
      } catch (error) {
        console.log(error);
      }
    };

    animeSearch();
  });
};

listen();
/* 
document.getElementById("btn").onclick = () => {
    let query = document.getElementById('search_query').value;
    let requestUrl = `https://api.jikan.moe/v3/search/anime?q=${searchParams}`;
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => {
        // reset le contenu de la div
        // clear les recherches
        let results = document.getElementById("resultApi")
        results.innerHTML = ''
        data.results.forEach(item => {
          // pour chaque resultat va utiliser createElement
          let newDiv = document.createElement("div")
          // innerHTML remplace directement le contenu de newDiv
          newDiv.innerHTML = `
          <a href="${item.url}">
          '<h2>${item.title}</h2>'
          </a>`
  
          // ajout de l'image
          let newImage = document.createElement("img")
          newImage.src = item.image_url;
          newDiv.appendChild(newImage)
          // groupe toute la div, l'image et le lien vers le site pour les details
          results.appendChild(newDiv)
          
          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
                `<div class="anime-card">
                <div class="anime-card-front">
                  <img
                    src="https://api.jikan.moe/v3/anime/${anime.id}/pictures"
                    alt=""
                    class="poster"
                  />
                </div>
                <div class="anime-card-back">
                  <h3 class="anime-card-header">${anime.title}</h3>
                  <div class="score-box">
                    <p class="user-score">Community Score</p>
                    <p class="user-score">${anime.score}</p>
                  </div>
        
                  <div class="release-box">
                    <p class="release-date">Released</p>
                    <p class="release-date">${anime.start_date}</p>
                  </div>
        
                  <div class="anime-genres">
                    <div>${genreArr}</div>
                  </div>
                </div>
              </div>`
            );
          
        });
      });
  } */
},{"./genres":"js/genres.js","./DOM":"js/DOM.js"}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "3834" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/search.js"], null)
//# sourceMappingURL=/search.a3177960.js.map