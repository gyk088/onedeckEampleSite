/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		1: 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + "e4b70b38ef10675eae85" + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"2":1,"3":1,"4":1,"5":1,"6":1,"7":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + chunkId + ".style." + "e4b70b38ef10675eae85" + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([146,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
module.exports = __webpack_require__(365);


/***/ }),

/***/ 333:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 333;

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ExampleAuth/module": [
		379,
		0,
		4
	],
	"./ExampleEmbed/module": [
		370,
		0,
		3
	],
	"./ExampleEmbedGlobal/module": [
		376,
		0,
		5
	],
	"./ExampleError404/module": [
		377,
		0,
		6
	],
	"./ExampleGlobalWnd/module": [
		97
	],
	"./ExampleLayoutVue/module": [
		378,
		0,
		9
	],
	"./ExampleLayoutWebix/module": [
		380,
		7
	],
	"./ExampleNotification/module": [
		96
	],
	"./ExampleReact/module": [
		375,
		0,
		2
	],
	"./ExampleVue/module": [
		372,
		0,
		8
	],
	"./ExampleWebix/module": [
		381,
		10
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 357;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/images/index.js
/* harmony default export */ var src_images = (__webpack_require__(333));
// EXTERNAL MODULE: ./node_modules/webix/webix.css
var webix = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/webix/skins/mini.min.css
var mini_min = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/webix/webix.js
var webix_webix = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/onedeck/ondeck.js
var ondeck = __webpack_require__(29);
var ondeck_default = /*#__PURE__*/__webpack_require__.n(ondeck);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(131);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./src/modules/ExampleNotification/module.js
var ExampleNotification_module = __webpack_require__(96);

// EXTERNAL MODULE: ./src/modules/ExampleGlobalWnd/module.js + 2 modules
var ExampleGlobalWnd_module = __webpack_require__(97);

// CONCATENATED MODULE: ./src/modules/ExampleRoot/root.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Class Root
 */








var root_Root =
/*#__PURE__*/
function (_Onedeck$RootModule) {
  _inherits(Root, _Onedeck$RootModule);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, _getPrototypeOf(Root).apply(this, arguments));
  }

  _createClass(Root, [{
    key: "init",
    value: function init(initObj) {
      console.log('init', this.constructor.name, initObj);
      this.eventHandler();
    }
  }, {
    key: "eventHandler",
    value: function eventHandler() {
      var _this = this;

      webix_webix["attachEvent"]('onAjaxError', this.ajaxError);
      axios_default.a.interceptors.response.use(undefined, function (error) {
        _this.ajaxError(error.response.data);

        return Promise.reject(error);
      });
      this.$$on('examplEvent', function (exampleData) {
        _this.exampleAction(exampleData);
      });
      this.$$on('showGlobalWnd', function () {
        var wnd = new ExampleGlobalWnd_module["default"]();
        wnd.show();
      });
      this.$$on('notify', function (text) {
        var notifyObj = new ExampleNotification_module["default"]();
        notifyObj.notify(text);
      });
    }
  }, {
    key: "dispatcher",
    value: function dispatcher(path, state) {
      console.log('dispatcher', this.constructor.name, path, state);
    }
  }, {
    key: "mounted",
    value: function mounted(module, layout) {
      console.log('mounted', this.constructor.name, module, layout);
    }
  }, {
    key: "exampleAction",
    value: function exampleAction(exampleData) {
      webix_webix["confirm"]({
        title: 'EXAMPLE EVENT',
        ok: 'Yes',
        cancel: 'No',
        type: 'confirm-error',
        text: "exampleData: ".concat(exampleData)
      });
    }
  }, {
    key: "ajaxError",
    value: function ajaxError(text) {
      webix_webix["confirm"]({
        title: 'SERVER ERROR',
        ok: 'Yes',
        cancel: 'No',
        type: 'confirm-error',
        text: text || 'Please reload the page',
        callback: function callback(result) {
          if (result) {
            document.location.reload(true);
          }
        }
      });
    }
  }]);

  return Root;
}(ondeck_default.a.RootModule);


// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/quasar/dist/quasar.min.css
var quasar_min = __webpack_require__(355);

// EXTERNAL MODULE: ./node_modules/quasar/dist/icon-set/mdi-v4.umd.min.js
var mdi_v4_umd_min = __webpack_require__(142);
var mdi_v4_umd_min_default = /*#__PURE__*/__webpack_require__.n(mdi_v4_umd_min);

// EXTERNAL MODULE: ./node_modules/quasar/src/index.esm.js + 281 modules
var index_esm = __webpack_require__(6);

// CONCATENATED MODULE: ./src/quasar.config.js




/* harmony default export */ var quasar_config = (function () {
  return vue_runtime_esm["a" /* default */].use(index_esm["y" /* default */], {
    config: {},
    iconSet: mdi_v4_umd_min_default.a,
    components: {
      QToolbar: index_esm["v" /* QToolbar */],
      QToolbarTitle: index_esm["w" /* QToolbarTitle */],
      QBtn: index_esm["c" /* QBtn */],
      QIcon: index_esm["g" /* QIcon */],
      QLayout: index_esm["k" /* QLayout */],
      QPageContainer: index_esm["n" /* QPageContainer */],
      QPage: index_esm["m" /* QPage */],
      QHeader: index_esm["f" /* QHeader */],
      QFooter: index_esm["e" /* QFooter */],
      QDrawer: index_esm["d" /* QDrawer */],
      QPageSticky: index_esm["p" /* QPageSticky */],
      QPageScroller: index_esm["o" /* QPageScroller */],
      QAvatar: index_esm["b" /* QAvatar */],
      QList: index_esm["l" /* QList */],
      QItem: index_esm["h" /* QItem */],
      QItemSection: index_esm["j" /* QItemSection */],
      QItemLabel: index_esm["i" /* QItemLabel */],
      QTable: index_esm["s" /* QTable */],
      QTh: index_esm["u" /* QTh */],
      QTr: index_esm["x" /* QTr */],
      QTd: index_esm["t" /* QTd */],
      QSpace: index_esm["r" /* QSpace */],
      QParallax: index_esm["q" /* QParallax */]
    }
  });
});
// CONCATENATED MODULE: ./src/conf.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



quasar_config();
/* harmony default export */ var conf = ({
  historyApi: false,
  apiUrl: "https://test.com/",
  version: "0.1.0 rev. 9e4b524",
  rootPath: "/example/path/",
  // корневой путь для приложения
  rootModule: root_Root,
  mainModule: 'main',
  module404: 'notfound',
  "import": function () {
    var _import2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(module) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__(357)("./".concat(module, "/module"));

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function _import(_x) {
      return _import2.apply(this, arguments);
    }

    return _import;
  }(),
  modules: {
    auth: {
      module: 'ExampleAuth',
      name: 'Auth page',
      icon: 'fa-camera'
    },
    main: {
      layout: 'ExampleLayoutWebix',
      module: 'ExampleWebix',
      name: 'Webix App',
      icon: 'fa-camera',
      embed: {
        example: {
          module: 'ExampleEmbed'
        }
      }
    },
    vueApp: {
      layout: 'ExampleLayoutWebix',
      module: 'ExampleVue',
      name: 'Vue App',
      icon: 'mdi-watch-import-variant',
      embed: {
        example: {
          module: 'ExampleEmbed'
        }
      }
    },
    reactApp: {
      layout: 'ExampleLayoutVue',
      module: 'ExampleReact',
      name: 'React App',
      icon: 'fa-address-book'
    },
    notfound: {
      layout: 'ExampleLayoutWebix',
      module: 'ExampleError404',
      name: 'Not found page',
      icon: 'fa-address-book'
    },
    globalwnd: {
      global: true,
      module: 'ExampleGlobalWnd',
      icon: 'fa-address-book',
      embed: {
        example: {
          module: 'ExampleEmbedGlobal'
        }
      }
    },
    globalnotification: {
      global: true,
      module: 'ExampleNotification',
      icon: 'fa-address-book'
    }
  }
});
// CONCATENATED MODULE: ./src/index.js


document.addEventListener('DOMContentLoaded', function () {
  console.info('version: ', conf.version); // eslint-disable-next-line

  new conf.rootModule(conf);
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExampleNotification; });
/* harmony import */ var onedeck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var onedeck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(onedeck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quasar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/**
 * Class ExampleNotification
 * module use Vue
 */

var ExampleNotification =
/*#__PURE__*/
function (_Onedeck$Module) {
  _inherits(ExampleNotification, _Onedeck$Module);

  function ExampleNotification() {
    _classCallCheck(this, ExampleNotification);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExampleNotification).apply(this, arguments));
  }

  _createClass(ExampleNotification, [{
    key: "init",
    value: function init(path, state) {
      console.log('init', this.constructor.name, path, state);
    }
  }, {
    key: "dispatcher",
    value: function dispatcher(path, state) {
      console.log('dispatcher', this.constructor.name, path, state);
      quasar__WEBPACK_IMPORTED_MODULE_1__[/* Notify */ "a"].create({
        color: 'teal',
        position: 'top-right',
        timeout: 5000,
        textColor: 'white',
        actions: [{
          icon: 'close',
          color: 'white'
        }],
        message: "MODULE : ".concat(path[0])
      });
    }
  }, {
    key: "mounted",
    value: function mounted(module, layout) {
      console.log('mounted', this.constructor.name, module, layout);
    }
  }, {
    key: "notify",
    value: function notify(text) {
      quasar__WEBPACK_IMPORTED_MODULE_1__[/* Notify */ "a"].create({
        position: 'top',
        timeout: 500,
        textColor: 'white',
        actions: [{
          icon: 'close',
          color: 'white'
        }],
        message: text
      });
    }
  }]);

  return ExampleNotification;
}(onedeck__WEBPACK_IMPORTED_MODULE_0___default.a.Module);



/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/onedeck/ondeck.js
var ondeck = __webpack_require__(29);
var ondeck_default = /*#__PURE__*/__webpack_require__.n(ondeck);

// EXTERNAL MODULE: ./node_modules/webix/webix.js
var webix = __webpack_require__(48);

// CONCATENATED MODULE: ./src/modules/ExampleGlobalWnd/views/window.ui.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class WindowGlobalUI
 */
var WindowGlobalUI =
/*#__PURE__*/
function () {
  function WindowGlobalUI() {
    _classCallCheck(this, WindowGlobalUI);

    this.id = 'WindowGloba';
    return this.ui();
  }

  _createClass(WindowGlobalUI, [{
    key: "ui",
    value: function ui() {
      return {
        id: this.id,
        view: 'window',
        close: true,
        position: 'center',
        move: true,
        resize: true,
        head: {
          view: 'toolbar',
          cols: [{
            view: 'label',
            label: 'Global Window'
          }, {
            view: 'button',
            label: 'Close Me',
            width: 100,
            align: 'right',
            id: "".concat(this.id, "BtnClose")
          }]
        },
        body: {
          template: '<div id="EmbedWnd"></div>'
        }
      };
    }
  }]);

  return WindowGlobalUI;
}();


// CONCATENATED MODULE: ./src/modules/ExampleGlobalWnd/comtrollers/window.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function window_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function window_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function window_createClass(Constructor, protoProps, staticProps) { if (protoProps) window_defineProperties(Constructor.prototype, protoProps); if (staticProps) window_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * controller for WindowGlobal
 */




var window_WindowGlobal =
/*#__PURE__*/
function (_Onedeck$Observable) {
  _inherits(WindowGlobal, _Onedeck$Observable);

  function WindowGlobal() {
    var _this;

    window_classCallCheck(this, WindowGlobal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WindowGlobal).call(this));
    _this.ui = new WindowGlobalUI();
    _this.id = _this.ui.id;
    _this.app = webix["ui"](_this.ui);

    _this.eventHandler();

    return _this;
  }

  window_createClass(WindowGlobal, [{
    key: "eventHandler",
    value: function eventHandler() {
      var _this2 = this;

      $$("".concat(this.id, "BtnClose")).attachEvent('onItemClick', function () {
        return _this2.hide();
      });
    }
  }, {
    key: "show",
    value: function show() {
      this.app.show();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.app.hide();
    }
  }]);

  return WindowGlobal;
}(ondeck_default.a.Observable);


// CONCATENATED MODULE: ./src/modules/ExampleGlobalWnd/module.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return module_ExampleGlobalWnd; });
function module_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { module_typeof = function _typeof(obj) { return typeof obj; }; } else { module_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return module_typeof(obj); }

function module_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function module_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function module_createClass(Constructor, protoProps, staticProps) { if (protoProps) module_defineProperties(Constructor.prototype, protoProps); if (staticProps) module_defineProperties(Constructor, staticProps); return Constructor; }

function module_possibleConstructorReturn(self, call) { if (call && (module_typeof(call) === "object" || typeof call === "function")) { return call; } return module_assertThisInitialized(self); }

function module_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function module_getPrototypeOf(o) { module_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return module_getPrototypeOf(o); }

function module_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) module_setPrototypeOf(subClass, superClass); }

function module_setPrototypeOf(o, p) { module_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return module_setPrototypeOf(o, p); }



/**
 * Class ExampleGlobalWnd
 * module use Vue
 */

var module_ExampleGlobalWnd =
/*#__PURE__*/
function (_Onedeck$Module) {
  module_inherits(ExampleGlobalWnd, _Onedeck$Module);

  function ExampleGlobalWnd() {
    module_classCallCheck(this, ExampleGlobalWnd);

    return module_possibleConstructorReturn(this, module_getPrototypeOf(ExampleGlobalWnd).apply(this, arguments));
  }

  module_createClass(ExampleGlobalWnd, [{
    key: "init",
    value: function init(path, state) {
      console.log('init', this.constructor.name, path, state);
      this.Window = new window_WindowGlobal();
      this.Window.show();
    }
  }, {
    key: "dispatcher",
    value: function dispatcher(path, state) {
      console.log('dispatcher', this.constructor.name, path, state);
    }
  }, {
    key: "mounted",
    value: function mounted(module, layout) {
      console.log('mounted', this.constructor.name, module, layout);
    }
  }, {
    key: "show",
    value: function show() {
      this.Window.show();
    }
  }]);

  return ExampleGlobalWnd;
}(ondeck_default.a.Module);



/***/ })

/******/ });
//# sourceMappingURL=main.e4b70b38ef10675eae85.js.map