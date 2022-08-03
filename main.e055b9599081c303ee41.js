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
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + "e055b9599081c303ee41" + ".js"
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
/******/ 		var cssChunks = {"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + chunkId + ".style." + "e055b9599081c303ee41" + ".css";
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
module.exports = __webpack_require__(370);


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/onedeck/observ.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Observable =
/*#__PURE__*/
function () {
  /**
   * Класс реализует паттерн [Наблюдатель (Observer)]{@link https://refactoring.guru/ru/design-patterns/observer}. </br>
   * Является родителем для классов Modle и RootModule.
   * @Module Observable
   */
  function Observable() {
    _classCallCheck(this, Observable);

    this._listeners = {};
  }
  /**
   * Подписаться на событие
   * @example
   * const cbName = (data) => console.log(data)
   * this.$$on('onEventName', cbName)
   *
   * @param {string} channel - название события.
   * @param {function} cb - callback функция.
   */


  _createClass(Observable, [{
    key: "$$on",
    value: function $$on(channel, cb) {
      if (!this._listeners[channel]) {
        this._listeners[channel] = {};
        this._listeners[channel].eventProperty = {};
        this._listeners[channel].eventProperty.isOnOnce = false;
        this._listeners[channel].data = [];
      }

      this._listeners[channel].data.push(cb);
    }
    /**
     * Подписаться на событие которое выполниться только 1 раз
     * @example
     * const cbName = (data) => console.log(data)
     * this.$$onOnce('onEventName', cbName)
     *
     * @param {string} channel - название события.
     * @param {function} cb - callback функция.
     */

  }, {
    key: "$$onOnce",
    value: function $$onOnce(channel, cb) {
      this.on(channel, cb);
      this._listeners[channel].eventProperty.isOnOnce = true;
    }
    /**
     * Отписаться от события
     * @example
     * this.$$off('onEventName', cbName)
     *
     * @param {string} channel - название события.
     * @param {function} cb - callback функция.
     */

  }, {
    key: "$$off",
    value: function $$off(channel, cb) {
      this._listeners[channel].data = this._listeners[channel].data.filter(function (listener) {
        return listener !== cb;
      });
    }
    /**
     * Отписаться от всех событий
     * @example
     * this.$$offAll()
     */

  }, {
    key: "$$offAll",
    value: function $$offAll() {
      this._listeners = {};
    }
    /**
     * Опубликовать событие
     * @example
     * this.$$emit('onEventName', data)
     *
     * @param {string} channel - название события.
     * @param {Object} data - данные события.
     */

  }, {
    key: "$$emit",
    value: function $$emit(channel, data) {
      var _this = this;

      if (!this._listeners[channel] || !this._listeners[channel].data) {
        console.error('No such event:', channel);
        return;
      }

      this._listeners[channel].data.forEach(function (listener) {
        if (_this._listeners[channel].eventProperty.isOnOnce) {
          _this.$$off(channel, _this._listeners[channel].data[0]);
        }

        listener(data);
      });
    }
    /**
     * Расширить объект для реализации паттерна наблюдатель
     * @example
     * const observ = new Observable()
     * observ.install(object)
     *
     * @param {Object} extendObj - объект который необходимо расширть
     */

  }, {
    key: "install",
    value: function install(extendObj) {
      extendObj._listeners = this._listeners;
      extendObj.$$on = this.$$on;
      extendObj.$$off = this.$$off;
      extendObj.$$onOnce = this.$$onOnce;
      extendObj.$$emit = this.$$emit;
    }
  }]);

  return Observable;
}();


// CONCATENATED MODULE: ./src/onedeck/module.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function module_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function module_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function module_createClass(Constructor, protoProps, staticProps) { if (protoProps) module_defineProperties(Constructor.prototype, protoProps); if (staticProps) module_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Module =
/*#__PURE__*/
function (_Observable) {
  _inherits(Module, _Observable);

  /**
   * Класс является родителем для всех модулей кроме главного модуля (Root Module). </br>
   * Наследуется от класса Observable для реализации паттерна [Наблюдатель (Observer)]{@link https://refactoring.guru/ru/design-patterns/observer}. </br>
   * Объект модуля реализует паттерн [Одиночка (Singleton)]{@link https://refactoring.guru/ru/design-patterns/singleton}. </br>
   * Каждый модуль создается только 1 раз, последующий вызов new Module() - вернет текущий экзепляр данного класса.
   * @example <caption>Пример создания модуля</caption>
   * import Onedeck from 'onedeck';
   *
   * export default class ModuleName extends Onedeck.Module { ... }
   *
   * @example <caption>Пример получения экземпляра модуля</caption>
   * import Module from 'ModuleName/module.js'
   * const module = new Module()
   * // Событие уровня модуля
   * module.$$emit('eventName', data)
   * // Событие уровня приложения
   * module.$$gemit('eventName', data)
   *
   * @Module Module
   */
  function Module() {
    var _this;

    module_classCallCheck(this, Module);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Module).call(this));
    /**
     * Объект содержит в себе инстансы всех моулей
     * Модуль создается только 1 раз
     * @static
     */

    Module.instances = Module.instances || {};

    if (Module.instances[_this.constructor.name]) {
      return _possibleConstructorReturn(_this, Module.instances[_this.constructor.name]);
    }

    Module.instances[_this.constructor.name] = _assertThisInitialized(_this);
    return _this;
  }
  /**
   * Абстрактный метод. Обработчик событий. </br>
   * В этом методе должны быть описаны все события текущего моудля. </br>
   *
   * @example
   * eventHandler () {
   *   // Cоздаем событие уровня модуля в котором эмитим событие уровня приложения
   *   this.$on('event1', (data) => this.$$gemit(data));
   *   // Cоздаем событие уровня модуля в котором выполняем метод doSomething
   *   this.$on('event2', (data) => this.doSomething(data));
   * }
   * @abstract
   */


  module_createClass(Module, [{
    key: "eventHandler",
    value: function eventHandler() {}
    /**
     * Абстрактный метод. Инициализация приложения модуля. </br>
     * В этом методе должна быть описана инициализация приложения модуля. </br>
     * Метод автоматически вызывается для каждого модуля старницы при переходе на страницу модуля. </br>
     * Для Global модуля, и для Embed модулей которые встороенные в Global - вызыввается только 1 раз, при инициализации приложения. </br>
     * Вызывается в следующем порядке: </br>
     * - init Layout модуля если на старнице меняется Layout </br>
     * - init Page модуля </br>
     * - init Embed модулей в произвольном порядке </br>
     *
     * @example
     * init (path, state) {
     *   console.log('init', this.constructor.name, path, state);
     *   // Создаем приложение модуля
     *   this.reactApp = ReactDOM.render(<App />, document.getElementById('MainContent'));
     *   // Вызываем обработчик событий
     *   this.eventHandler();
     * }
     *
     * @param {Array} path - массив с элементами url адреса.
     * @param {Object} state - данные переданные с url.
     * @abstract
     */

  }, {
    key: "init",
    value: function init() {}
    /**
     * Абстрактный метод. Деструктор. </br>
     * В этом методе должна быть описана деструктуризация модуля. </br>
     * Метод автоматически вызывается для каждого модуля старницы при переходе на другую старницу приложнеия. </br>
     * Для Global модуля - дестуркторизация не производится. </br>
     *
     * @example
     * destroy () {
     *   // Отписываемся от всех событий уровня модуля
     *   this.$$offAll()
     *
     *   ReactDOM.unmountComponentAtNode(document.getElementById('MainContent'));
     * }
     * @abstract
     */

  }, {
    key: "destroy",
    value: function destroy() {}
    /**
     * Абстрактный метод. Диспетчер. </br>
     * В этом методе должна быть описана логика модуля связанная с маршрутизацией. </br>
     * Метод автоматически вызывается для каждого модуля при изменении url адреса. </br>
     * Вызывается в следующем порядке: </br>
     * - dispatcher Root модуля </br>
     * - dispatcher всех Global модулей в произвольном порядке</br>
     * - dispatcher Layout модуля </br>
     * - dispatcher Page модуля </br>
     * - dispatcher Embed модулей в произвольном порядке </br>
     *
     * @example
     * dispatcher (path, state) {
     *   console.log('dispatcher', this.constructor.name, path, state);
     *   // Если путь my.site.com/moduleName/item/3
     *   if (path[1] === 'item') this.showItem(state, path[2]);
     * }
     *
     * @param {string} path - массив с элементами url адреса.
     * @param {Object} state - данные переданные с url.
     * @abstract
     */

  }, {
    key: "dispatcher",
    value: function dispatcher() {}
    /**
    * Абстрактный метод. Монитирование модуля. </br>
    * Метод автоматически вызывается для каждого модуля при изменении url адреса. </br>
    * В методе доступны объекты currentModule и currentLayout. </br>
    * Вызывается в следующем порядке: </br>
    * - mounted Root модуля </br>
    * - mounted всех Global модулей в произвольном порядке </br>
    * - mounted Layout модуля </br>
    * - mounted Page модуля </br>
    * - mounted Embed модулей в произвольном порядке </br>
    * @example
    * mounted (module, layout) {
    *   console.log('mounted', this.constructor.name, module, layout);
    * }
    *
    * @param {Object} currentModule - текущий Page модуль.
    * @param {Object} currentLayout - текущий Layout модуль.
    * @abstract
    */

  }, {
    key: "mounted",
    value: function mounted() {}
  }]);

  return Module;
}(Observable);


// CONCATENATED MODULE: ./src/onedeck/store.js
function store_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function store_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function store_createClass(Constructor, protoProps, staticProps) { if (protoProps) store_defineProperties(Constructor.prototype, protoProps); if (staticProps) store_defineProperties(Constructor, staticProps); return Constructor; }

var Watchers =
/*#__PURE__*/
function () {
  /**
   * Приватный класс для создания и удаления наблюдателей для стора. </br>
   *
   * @Module Watchers
   */
  function Watchers() {
    store_classCallCheck(this, Watchers);

    this._listeners = {};
  }
  /**
   * Добавить наблюдателя для поля стейта. </br>
   * @example <caption>Пример добавления</caption>
   * import Module from 'ModuleName/module.js'
   * const module = new Module()
   *
   * // Поле field1 - должно существовать в стейте
   * module.$$store.watcher.field1.add('watcherName', (data) => {
   *  conosole.log(data)
   * })
   *
   * @param {string} name - название название наблюдателя.
   * @param {function} cb - callback функция.
   */


  store_createClass(Watchers, [{
    key: "add",
    value: function add(name, cb) {
      this._listeners[name] = cb;
    }
    /**
     * Удалить наблюдателя для поля стейта. </br>
     * @example <caption>Пример удаления</caption>
     * import Module from 'ModuleName/module.js'
     * const module = new Module()
     *
     * // Поле field1 - должно существовать в стейте
     * module.$$store.watcher.field1.remove('watcherName')
     *
     * @param {string} name - название наблюдателя.
     */

  }, {
    key: "remove",
    value: function remove(name) {
      delete this._listeners[name];
    }
    /**
     * Выполнить все callback функции
     *
     * @param {object} data - название название наблюдателя.
     * @param {any} data.newValue - новое значение.
     * @param {any} data.oldValue - старое значение.
     * @param {object} data.state - текущий стейт.
     * @private
     */

  }, {
    key: "emit",
    value: function emit(data) {
      for (var name in this._listeners) {
        this._listeners[name](data);
      }
    }
  }]);

  return Watchers;
}();

var Store =
/**
 * Класс определяет глобальный стор для всех модулей, каждый модуль имеет доступ к глобальному стору. </br>
 * Стор создается 1 раз при инициализации приложения.
 * Для инициализации стора желательно использовать метод initState() который необходимо описать в модуле root
 * @example <caption>Пример инициализации стора</caption>
 * export default class Root extends Onedeck.RootModule {
 * initState() {
 *  return {
 *    field1: ....
 *    field2: ....
 *    ....
 *  }
 * }
 * .....
 *
 * @example <caption>Пример использования стора</caption>
 * import Module from 'ModuleName/module.js'
 * const module = new Module()
 * // создаем или изменяе поле в сторе
 * module.$$store.state.field1 = 'new data'
 *
 * // Добавляем наблюдатель за данным полем, при изменении поля сработает колбек функция
 * // name - произвольная строка, потом по этому имени мы можем удалить данный наблюдатель
 * // cb   - функция, которая сработает при изменении данных в стейте
 * module.$$store.watcher.field1.add('watcherName', (data) => {
 *  conosole.log(data)
 * })
 *
 * // Удаляем наблюдатель по имени
 * module.$$store.watcher.field1.remove('watcherName')
 *
 * @Module Store
 */
function Store() {
  var _this = this;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  store_classCallCheck(this, Store);

  this.state = new Proxy(state, {
    get: function get(target, name) {
      return target[name];
    },
    set: function set(obj, prop, value) {
      if (prop in _this.watchers) {
        _this.watchers[prop].emit({
          newValue: value,
          oldValue: obj[prop],
          state: obj
        });
      }

      obj[prop] = value;
      return true;
    },
    has: function has(target, key) {
      return key in target;
    }
  });
  this.watchers = new Proxy({}, {
    get: function get(target, name) {
      if (name in _this.state) {
        if (name in target) {
          return target[name];
        }

        target[name] = new Watchers();
        return target[name];
      }

      console.error("no such ".concat(name, " in state"));
      return null;
    },
    set: function set() {
      console.error('Watcher is read-only');
      return false;
    },
    has: function has(target, key) {
      return key in target;
    }
  });
};

/* harmony default export */ var store = (Store);
// CONCATENATED MODULE: ./src/onedeck/router.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function router_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function router_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function router_createClass(Constructor, protoProps, staticProps) { if (protoProps) router_defineProperties(Constructor.prototype, protoProps); if (staticProps) router_defineProperties(Constructor, staticProps); return Constructor; }

var Route =
/*#__PURE__*/
function () {
  /**
     * Приватный класс для роутинга. </br>
     *
     * @Module Route
     * @param {Core} core - объект ядра системы.
     */
  function Route(core) {
    router_classCallCheck(this, Route);

    this.core = core;
    this.urlState = [];
  }
  /**
     * Приватный метод. Содержит обработку событий popstate или hashchange. </br>
     * Обработка события popstate или hashchange зависит от параметра в конфиге historyApi
     * @private
     */


  router_createClass(Route, [{
    key: "eventHandler",
    value: function eventHandler() {
      var _this = this;

      if (this.core.$$config.historyApi) {
        window.addEventListener('popstate', function (event) {
          var urlData = _this.getModuleFromUrl(document.location.pathname + document.location.search);

          _this.core.initModule({
            module: urlData.url,
            path: document.location.pathname,
            state: event.state,
            queryParam: urlData.params
          });
        });
      } else {
        window.addEventListener('hashchange', function () {
          var urlData = _this.getModuleFromUrl(document.location.hash + document.location.search);

          _this.core.initModule({
            module: urlData.url,
            path: document.location.hash,
            state: _this.urlState[document.location.hash.replace(/^#/, '')],
            queryParam: urlData.params
          });
        });
      }
    }
    /**
     * В каждом модуле содержиться метод $$route. </br>
     * Метод необходим для реализации маршрутизации, так же может передавать данные.
     * @example <caption>Создания события для роутинга</caption>
     * this.$$on('onroute', (data) => this.$$route({
     *     path: `/module_name/item/${data.id}`,
     *     state: data
     *  })
     * @example  <caption>Переход на другую страницу</caption>
     * import Module from 'ModuleName/module.js'
     * const module = new Module()
     *
     * module.$$route({
     *     path: '/module_name/item/1',
     *     state: {
     *         id: 1,
     *         name: 'Example',
     *         ...
     *     },
     *  })
     *
     * @param {Object} routeData - Объек содержит url и state.
     * @param {string} routeData.path  - url, first element module name.
     * @param {Object} routeData.state - state passed from the module.
     */

  }, {
    key: "route",
    value: function route(routeData) {
      var path = this.core.$$config.rootPath ? this.core.$$config.rootPath + routeData.path : routeData.path; // Удалем двойные '//'

      path = path.replace(/\/\//, '/');

      if (this.core.$$config.historyApi) {
        // Если используем history Api - вызываем инициализацию модуля
        var urlData = this.getModuleFromUrl(path);
        this.core.initModule({
          module: urlData.url,
          path: path,
          state: routeData.state,
          pushState: true,
          queryParam: urlData.params
        });
      } else {
        // Если не используем - то сохраняем состояние, и переходим по нужному пути
        // Далее вызовится событие "hashchange" - в котором и произойдет вызов метода initModule
        this.urlState[path] = routeData.state;
        document.location.hash = path;
      }
    }
    /**
    * Метод парсить текущий урл
    * получаем название модуля и данные модуля url адреса,
    * @param {String} url - url
    * @returns {Arrat} массив сторк (разбитый урл адрес через / )
    * @private
    */

  }, {
    key: "getModuleFromUrl",
    value: function getModuleFromUrl(url) {
      console.log('1111', url); // Удалем ненужный нам путь

      if (this.core.$$config.rootPath) {
        url = url.replace(this.core.$$config.rootPath, '');
      } // Удалем первый '/' и #


      url = url.replace(/^[\/, #]/, '');

      var _url$split = url.split('?'),
          _url$split2 = _slicedToArray(_url$split, 2),
          urlParam = _url$split2[0],
          queryParam = _url$split2[1];

      var params = {};

      if (queryParam) {
        queryParam.split('&').forEach(function (param) {
          var _param$split = param.split('='),
              _param$split2 = _slicedToArray(_param$split, 2),
              key = _param$split2[0],
              val = _param$split2[1];

          params[key] = val;
        });
      }

      url = urlParam.split('/');
      return {
        url: url,
        params: params
      };
    }
  }, {
    key: "pushState",
    value: function pushState(moduleData) {
      window.history.pushState(moduleData.state, moduleData.module[0], moduleData.path);
    }
  }]);

  return Route;
}();

/* harmony default export */ var router = (Route);
// CONCATENATED MODULE: ./src/onedeck/core.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function core_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function core_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function core_createClass(Constructor, protoProps, staticProps) { if (protoProps) core_defineProperties(Constructor.prototype, protoProps); if (staticProps) core_defineProperties(Constructor, staticProps); return Constructor; }




var core_Core =
/*#__PURE__*/
function () {
  /**
   * Ядро системы (Root Module). </br>
   * Отвечает за создание и уничтожение всех модулей приложения.
   * @Module Core
   *
   * @param {RootModule} root - главный модуль Root
   */
  function Core(root) {
    var _this = this;

    core_classCallCheck(this, Core);

    this.initGlobalModules =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var globalNames, i;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              globalNames = Object.keys(_this.$$config.modules).filter(function (moduleName) {
                return _this.$$config.modules[moduleName].global;
              });
              i = 0;

            case 2:
              if (!(i < globalNames.length)) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return _this.createModule(globalNames[i], _this.$$config.modules[globalNames[i]]);

            case 5:
              i++;
              _context.next = 2;
              break;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    this.createModule =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(moduleName, moduleConf) {
        var ModuleClass, embedNames, i, EmbedClass;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this.modules[moduleName]) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return _this._import(moduleConf.module);

              case 4:
                ModuleClass = _context2.sent;

                if (!(!ModuleClass || !ModuleClass["default"])) {
                  _context2.next = 7;
                  break;
                }

                throw new SyntaxError("Error load module: ".concat(moduleName));

              case 7:
                ModuleClass = ModuleClass["default"]; // создаем модуль

                _this.modules[moduleName] = new ModuleClass(); // глобальный модуль

                _this.modules[moduleName].$$global = moduleConf.global; // добавляем метод route для маршрутизации

                _this.modules[moduleName].$$route = _this.router.route.bind(_this.router); // добавляем метод  publish для публикации глобальных событий

                _this.modules[moduleName].$$gemit = _this.root.$$emit.bind(_this.root); // глобальный стейт

                _this.modules[moduleName].$$gstore = _this.$$gstore; // конфиг

                _this.modules[moduleName].$$config = _this.$$config; // id элемента куда модуль встраивается

                _this.modules[moduleName].$$mountId = moduleConf.mountId; // id элемента куда встроено приложение

                _this.modules[moduleName].$$rootElementId = _this.$$config.rootElementId; // макет модуля

                _this.modules[moduleName].$$layoutName = moduleConf.layout; // встраиваемые модули

                _this.modules[moduleName].$$embed = {};

                if (!moduleConf.embed) {
                  _context2.next = 38;
                  break;
                }

                embedNames = Object.keys(moduleConf.embed);
                i = 0;

              case 21:
                if (!(i < embedNames.length)) {
                  _context2.next = 38;
                  break;
                }

                _context2.next = 24;
                return _this._import(moduleConf.embed[embedNames[i]].module);

              case 24:
                EmbedClass = _context2.sent;

                if (!(!EmbedClass || !EmbedClass["default"])) {
                  _context2.next = 27;
                  break;
                }

                throw new SyntaxError("Error load module: ".concat(embedNames[i]));

              case 27:
                EmbedClass = EmbedClass["default"];
                _this.modules[moduleName].$$embed[embedNames[i]] = new EmbedClass();
                _this.modules[moduleName].$$embed[embedNames[i]].$$route = _this.router.route.bind(_this.router);
                _this.modules[moduleName].$$embed[embedNames[i]].$$gemit = _this.root.$$emit.bind(_this.root);
                _this.modules[moduleName].$$embed[embedNames[i]].$$gstore = _this.$$gstore;
                _this.modules[moduleName].$$embed[embedNames[i]].$$config = _this.$$config;
                _this.modules[moduleName].$$embed[embedNames[i]].$$rootElementId = _this.$$config.rootElementId;
                _this.modules[moduleName].$$embed[embedNames[i]].$$mountId = moduleConf.embed[embedNames[i]].mountId;

              case 35:
                i++;
                _context2.next = 21;
                break;

              case 38:
                // Если модуль глобальный - сразу его инициализируем
                if (_this.modules[moduleName].$$global) {
                  _this.modules[moduleName].init(moduleName); // Инициализируем встроенные модули


                  Object.keys(_this.modules[moduleName].$$embed).forEach(function (name) {
                    return _this.modules[moduleName].$$embed[name].init(moduleName);
                  });
                }

              case 39:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.createLayout =
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(layoutName) {
        var LayoutClass;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this.layouts[layoutName]) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return _this._import(layoutName);

              case 4:
                LayoutClass = _context3.sent;

                if (!(!LayoutClass || !LayoutClass["default"])) {
                  _context3.next = 7;
                  break;
                }

                throw new SyntaxError("Error load module: ".concat(layoutName));

              case 7:
                LayoutClass = LayoutClass["default"]; // создаем макет

                _this.layouts[layoutName] = new LayoutClass(); // добавляем метод route для маршрутизации

                _this.layouts[layoutName].$$route = _this.router.route.bind(_this.router); // добавляем метод  publish для публикации глобальных событий

                _this.layouts[layoutName].$$gemit = _this.root.$$emit.bind(_this.root); // глобальный стейт

                _this.layouts[layoutName].$$gstore = _this.$$gstore; // конфиг

                _this.layouts[layoutName].$$config = _this.$$config;
                _this.layouts[layoutName].$$rootElementId = _this.$$config.rootElementId;

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    this.initModule =
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(moduleData) {
        var moduleName, mudules;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                moduleName = moduleData.module[0];
                mudules = _this.$$config.modules;

                if (moduleName) {
                  _context4.next = 5;
                  break;
                }

                _this.router.route({
                  path: _this.$$config.mainModule
                });

                return _context4.abrupt("return");

              case 5:
                if (mudules[moduleName]) {
                  _context4.next = 9;
                  break;
                }

                _this.router.route({
                  path: _this.$$config.module404
                });

                console.error('no such module:', moduleName);
                return _context4.abrupt("return");

              case 9:
                if (!mudules[moduleName].global) {
                  _context4.next = 13;
                  break;
                }

                _this.router.route({
                  path: _this.$$config.module404
                });

                console.error('global module:', moduleName);
                return _context4.abrupt("return");

              case 13:
                if (!(mudules[moduleName].layout && mudules[moduleName].layout === _this.$$currentLayout.name)) {
                  _context4.next = 17;
                  break;
                }

                // Если переход внутри текущего макета
                _this.$$currentLayout.obj.dispatcher(moduleData.module, moduleData.state, moduleData.queryParam);

                _context4.next = 34;
                break;

              case 17:
                if (!mudules[moduleName].layout) {
                  _context4.next = 32;
                  break;
                }

                _this.destroyModule();

                _this.destroyLayout(); // Если переход на новый макет то чистим модуль а потом макет


                _context4.prev = 20;
                _context4.next = 23;
                return _this.createLayout(mudules[moduleName].layout);

              case 23:
                _context4.next = 28;
                break;

              case 25:
                _context4.prev = 25;
                _context4.t0 = _context4["catch"](20);
                console.error(_context4.t0);

              case 28:
                // Cохраняем новый модуль в объекте currentModule
                _this.$$currentLayout = {
                  name: mudules[moduleName].layout,
                  obj: _this.layouts[mudules[moduleName].layout]
                }; // Инициализируем новый макет (вызываем метод init)

                _this.$$currentLayout.obj.init(moduleData.module, moduleData.state, moduleData.queryParam);

                _context4.next = 34;
                break;

              case 32:
                // Если у модуля нет макета - уничтожаем текущий макет
                _this.destroyModule();

                _this.destroyLayout();

              case 34:
                if (!(_this.$$currentModule.name && _this.$$currentModule.name === moduleName)) {
                  _context4.next = 38;
                  break;
                }

                // Если переход внутри текущего модуля - вызываем диспатчер модуля (метода dispatcher)
                _this.dispatcherModule(moduleData.module, moduleData.state, moduleData.queryParam);

                _context4.next = 51;
                break;

              case 38:
                // Если переход на новый модуль - вызываем деструктор текущего модуля (метод destroy)
                _this.destroyModule(); // Если переход на новый макет то чистим модуль а потом макет


                _context4.prev = 39;
                _context4.next = 42;
                return _this.createModule(moduleName, mudules[moduleName]);

              case 42:
                _context4.next = 47;
                break;

              case 44:
                _context4.prev = 44;
                _context4.t1 = _context4["catch"](39);
                console.error(_context4.t1);

              case 47:
                // Cохраняем новый модуль в объекте currentModule
                _this.$$currentModule = {
                  name: moduleName,
                  obj: _this.modules[moduleName]
                }; // Инициализируем новый модуль (вызываем метод init)

                _this.$$currentModule.obj.init(moduleData.module, moduleData.state, moduleData.queryParam); // Инициализируем встроенные модули


                Object.keys(_this.$$currentModule.obj.$$embed).forEach(function (name) {
                  return _this.$$currentModule.obj.$$embed[name].init(moduleData.module, moduleData.state, moduleData.queryParam);
                });

                _this.dispatcherModule(moduleData.module, moduleData.state, moduleData.queryParam);

              case 51:
                // Если используем history api - сохраняем новое состояние в истоии браузера
                if (moduleData.pushState && _this.$$config.historyApi) {
                  _this.router.pushState(moduleData);
                } // Вызываем методы жизненого цикла


                _this.mounted();

              case 53:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[20, 25], [39, 44]]);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    this.root = root; // this object contains config object
    // конфиг, доступен в каждом модуле
    // Присваиваем функцию import и удаляем ее из конфига

    this.$$config = this.root.$$config;
    this._import = this.$$config["import"];
    this.$$config["import"] = null; // this object contains current module
    // объект с текущим модулем

    this.$$currentModule = {}; // this object contains current layout
    // объект с текущим макетом

    this.$$currentLayout = {}; // this object contains all modules
    // объек содержит все модули приложения которые были инициализированы

    this.modules = {}; // this object contains all layouts
    // объек содержит все макеты приложения которые были инициализированы

    this.layouts = {}; // cоздаем роутер

    this.router = new router(this); // инициализируем глобальный store

    this.$$gstore = new store(this.root.initState());
    this.root.$$gstore = this.$$gstore;

    if (this.$$config.ssr) {
      this._clear().then(function () {
        _this.init();
      });
    } else {
      this.init();
    }
  }

  core_createClass(Core, [{
    key: "_clear",
    value: function _clear() {
      var _this2 = this;

      return new Promise(function (resolve) {
        document.addEventListener('DOMContentLoaded', function () {
          var scripts = document.querySelectorAll('script');
          document.body.innerHTML = "<div id=\"".concat(_this2.$$config.rootElementId, "\"></div>");

          if (NodeList.prototype.isPrototypeOf(scripts)) {
            scripts.forEach(function (s) {
              return document.body.appendChild(s);
            });
          }

          resolve();
        });
      });
    }
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        var urlData;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // получаем массив с данными из url
                urlData = this.router.getModuleFromUrl(this.$$config.historyApi ? document.location.pathname + document.location.search : document.location.hash + document.location.search); // вызываем глобаьное событие popstate

                this.router.eventHandler(); // вызывам метод init для модуля root

                this.root.init(urlData.url, urlData.params);
                _context5.prev = 3;
                _context5.next = 6;
                return this.initGlobalModules();

              case 6:
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](3);
                console.error('Error init global module', _context5.t0);

              case 11:
                // current module initialization
                this.initModule({
                  module: urlData.url,
                  queryParam: urlData.params,
                  path: document.location.pathname
                });

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[3, 8]]);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
    /**
    * Метод вызывает методы mounted всех модулей (см описание метода mounted)
    * @private
    */

  }, {
    key: "mounted",
    value: function mounted() {
      var _this3 = this;

      this.root.mounted(this.$$currentModule, this.$$currentLayout);
      Object.keys(this.modules).filter(function (moduleName) {
        return _this3.modules[moduleName].$$global;
      }).forEach(function (moduleName) {
        _this3.modules[moduleName].mounted(_this3.$$currentModule, _this3.$$currentLayout); // Встроенные модули


        Object.keys(_this3.modules[moduleName].$$embed).forEach(function (name) {
          return _this3.modules[moduleName].$$embed[name].mounted(_this3.$$currentModule, _this3.$$currentLayout);
        });
      });

      if (this.$$currentLayout.obj) {
        this.$$currentLayout.obj.mounted(this.$$currentModule, this.$$currentLayout);
      }

      if (this.$$currentModule.obj) {
        this.$$currentModule.obj.mounted(this.$$currentModule, this.$$currentLayout);
        Object.keys(this.$$currentModule.obj.$$embed).forEach(function (name) {
          return _this3.$$currentModule.obj.$$embed[name].mounted(_this3.$$currentModule, _this3.$$currentLayout);
        });
      }
    }
    /**
    * Метод вызывает метд destroy Page модуля и Embed модуле (см описание метода destroy в классе Module)
    * @private
    */

  }, {
    key: "destroyModule",
    value: function destroyModule() {
      var _this4 = this;

      // Если переход на новый макет то чистим модуль а потом макет
      if (this.$$currentModule.obj) {
        this.$$currentModule.obj.destroy();
        Object.keys(this.$$currentModule.obj.$$embed).forEach(function (name) {
          return _this4.$$currentModule.obj.$$embed[name].destroy();
        });
        this.$$currentModule = {};
      }
    }
    /**
     * Метод вызывает метд destroy Layout модуля (см описание метода destroy в классе Module)
     * @private
     */

  }, {
    key: "destroyLayout",
    value: function destroyLayout() {
      if (this.$$currentLayout.obj) {
        this.$$currentLayout.obj.destroy();
        this.$$currentLayout = {};
      }
    }
    /**
    * Метод вызывает методы dispatcher всех модулей (см описание метода dispatcher)
    * @param {Array} path - url array
    * @param {Object} state - current state
    * @param {Object} queryParam - параметры переданные вместе с url
    * @private
    */

  }, {
    key: "dispatcherModule",
    value: function dispatcherModule(path, state, queryParam) {
      var _this5 = this;

      this.root.dispatcher(path, state, queryParam); // Вызываем диспатчеры для глобальных модулей

      Object.keys(this.modules).filter(function (moduleName) {
        return _this5.modules[moduleName].$$global;
      }).forEach(function (moduleName) {
        _this5.modules[moduleName].dispatcher(path, state, queryParam); // Встроенные модули


        Object.keys(_this5.modules[moduleName].$$embed).forEach(function (name) {
          return _this5.modules[moduleName].$$embed[name].dispatcher(path, state, queryParam);
        });
      }); // Если переход на новый макет то чистим модуль а потом макет

      if (this.$$currentModule.obj) {
        // Вызываем диспатчер для текущего модуля
        this.$$currentModule.obj.dispatcher(path, state, queryParam); // Вызываем диспатчеры для всторенных модулей

        Object.keys(this.$$currentModule.obj.$$embed).forEach(function (name) {
          return _this5.$$currentModule.obj.$$embed[name].dispatcher(path, state, queryParam);
        });
      }
    }
  }]);

  return Core;
}();


// CONCATENATED MODULE: ./src/onedeck/root.module.js
function root_module_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { root_module_typeof = function _typeof(obj) { return typeof obj; }; } else { root_module_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return root_module_typeof(obj); }

function root_module_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function root_module_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function root_module_createClass(Constructor, protoProps, staticProps) { if (protoProps) root_module_defineProperties(Constructor.prototype, protoProps); if (staticProps) root_module_defineProperties(Constructor, staticProps); return Constructor; }

function root_module_possibleConstructorReturn(self, call) { if (call && (root_module_typeof(call) === "object" || typeof call === "function")) { return call; } return root_module_assertThisInitialized(self); }

function root_module_getPrototypeOf(o) { root_module_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return root_module_getPrototypeOf(o); }

function root_module_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function root_module_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) root_module_setPrototypeOf(subClass, superClass); }

function root_module_setPrototypeOf(o, p) { root_module_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return root_module_setPrototypeOf(o, p); }




var root_module_RootModule =
/*#__PURE__*/
function (_Module) {
  root_module_inherits(RootModule, _Module);

  /**
   * Класс является родителем для главного модуля (Root Module). </br>
   * Наследуется от класса Module для реализации паттерна [Наблюдатель (Observer)]{@link https://refactoring.guru/ru/design-patterns/observer}. </br>
   * Объект Root модуля реализует паттерн [Посредник (Mediator)]{@link https://refactoring.guru/ru/design-patterns/mediator}. </br>
   * @Module RootModule
   *
   * @example
   * import Onedeck from 'onedeck';
   *
   * export default class Root extends Onedeck.RootModule { ... }
   *
   * @param {Object} config - конфиг приложения (пример конфига в README.md)
   */
  function RootModule(config) {
    var _this;

    root_module_classCallCheck(this, RootModule);

    _this = root_module_possibleConstructorReturn(this, root_module_getPrototypeOf(RootModule).call(this));
    _this.$$config = config;
    new core_Core(root_module_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Абстрактный метод. Инициализация глобального состояния приложения. </br>
   * Этот метод должен вернуть объект с описанием всех полей глобального состояния. </br>
   * Метод вызывается 1 раз при инициализации всего приложения. </br>
   *
   * @example
   * initState () {
   *   return {
   *     test1: {
   *       test3: null,
   *       test4: null,
   *     },
   *     test2: {
   *       test5: null,
   *       test6: null,
   *     }
   *     ...
   *   }
   * }
   *
   * @returns {object} - global state
   * @abstract
   */


  root_module_createClass(RootModule, [{
    key: "initState",
    value: function initState() {
      return {};
    }
  }]);

  return RootModule;
}(Module);


// CONCATENATED MODULE: ./src/onedeck/index.js



/* harmony default export */ var onedeck = __webpack_exports__["a"] = ({
  Observable: Observable,
  Module: Module,
  RootModule: root_module_RootModule
});

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


var content = __webpack_require__(358);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(32)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ExampleAuth/module": [
		384,
		0,
		4
	],
	"./ExampleEmbed/module": [
		375,
		0,
		3
	],
	"./ExampleEmbedGlobal/module": [
		382,
		0,
		5
	],
	"./ExampleError404/module": [
		385,
		0,
		6
	],
	"./ExampleGlobalWnd/module": [
		97
	],
	"./ExampleLayoutVue/module": [
		386,
		0,
		9
	],
	"./ExampleLayoutWebix/module": [
		388,
		8
	],
	"./ExampleNotification/module": [
		96
	],
	"./ExamplePage/module": [
		387,
		0,
		7
	],
	"./ExampleReact/module": [
		381,
		0,
		2
	],
	"./ExampleVue/module": [
		383,
		0,
		10
	],
	"./ExampleWebix/module": [
		389,
		11
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
webpackAsyncContext.id = 361;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 370:
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
var webix_webix = __webpack_require__(49);

// EXTERNAL MODULE: ./src/onedeck/index.js + 6 modules
var onedeck = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(141);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./src/modules/ExampleNotification/module.js
var ExampleNotification_module = __webpack_require__(96);

// EXTERNAL MODULE: ./src/modules/ExampleGlobalWnd/module.js + 2 modules
var ExampleGlobalWnd_module = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/quasar/dist/quasar.min.css
var quasar_min = __webpack_require__(359);

// EXTERNAL MODULE: ./node_modules/quasar/dist/icon-set/mdi-v4.umd.min.js
var mdi_v4_umd_min = __webpack_require__(142);
var mdi_v4_umd_min_default = /*#__PURE__*/__webpack_require__.n(mdi_v4_umd_min);

// EXTERNAL MODULE: ./node_modules/quasar/src/index.esm.js + 281 modules
var index_esm = __webpack_require__(6);

// CONCATENATED MODULE: ./src/modules/ExampleRoot/quasar.config.js




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
    key: "initState",
    value: function initState() {
      return {
        test1: {
          test3: null,
          test4: null
        },
        test2: {
          test5: null,
          test6: null
        },
        token: 'asdasdsdasdas'
      };
    }
  }, {
    key: "init",
    value: function init(path) {
      quasar_config();
      console.log('init', this.constructor.name, path);
      this.$$gstore.watchers.test1.add('test', function (data) {
        console.log(data);
      });
      this.$$gstore.watchers.test1.remove('test');
      this.$$gstore.state.test1 = '23233222332';
      this.wnd = new ExampleGlobalWnd_module["default"]();
      this.notify = new ExampleNotification_module["default"]();
      this.eventHandler();
    }
  }, {
    key: "eventHandler",
    value: function eventHandler() {
      var _this = this;

      webix_webix["attachEvent"]('onAjaxError', this.ajaxError);
      axios_default.a.interceptors.response.use(undefined, function (error) {
        _this.ajaxError('Request error');

        return Promise.reject(error);
      });
      this.$$on('examplEvent', function (exampleData) {
        _this.exampleAction(exampleData);
      });
      this.$$on('showGlobalWnd', function () {
        _this.wnd.show();
      });
      this.$$on('notify', function (text) {
        _this.notify.notify(text);
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
        width: 630,
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
}(onedeck["a" /* default */].RootModule);


// CONCATENATED MODULE: ./src/conf.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ var conf = ({
  historyApi: false,
  apiUrl: "https://test.com/",
  version: "0.1.0 rev. 9036cbc",
  rootPath: "/",
  // корневой путь для приложения
  rootModule: root_Root,
  mainModule: 'main',
  module404: 'notfound',
  rootElementId: 'ROOT',
  "import": function () {
    var _import2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(module) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__(361)("./".concat(module, "/module"));

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
      mountId: 'ROOT',
      module: 'ExampleAuth',
      name: 'Auth page',
      icon: 'fa-camera'
    },
    main: {
      layout: 'ExampleLayoutVue',
      mountId: 'MainContent',
      module: 'ExampleWebix',
      name: 'Webix App',
      icon: 'fa-camera',
      embed: {
        example: {
          mountId: 'Embed',
          module: 'ExampleEmbed'
        }
      }
    },
    vueApp: {
      layout: 'ExampleLayoutWebix',
      module: 'ExampleVue',
      mountId: 'MainContent',
      name: 'Vue App',
      icon: 'mdi-watch-import-variant',
      embed: {
        example: {
          mountId: 'Embed',
          module: 'ExampleEmbed'
        }
      }
    },
    reactApp: {
      layout: 'ExampleLayoutVue',
      module: 'ExampleReact',
      mountId: 'MainContent',
      name: 'React App',
      icon: 'fa-address-book'
    },
    notfound: {
      mountId: 'MainContent',
      layout: 'ExampleLayoutWebix',
      module: 'ExampleError404',
      name: 'Not found page',
      icon: 'fa-address-book'
    },
    examplePage: {
      mountId: 'ROOT',
      module: 'ExamplePage',
      name: 'examplePage',
      icon: 'fa-address-book'
    },
    globalwnd: {
      global: true,
      module: 'ExampleGlobalWnd',
      icon: 'fa-address-book',
      embed: {
        example: {
          mountId: 'EmbedWnd',
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



console.info('version: ', conf.version); // eslint-disable-next-line

new root_Root(conf);

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExampleNotification; });
/* harmony import */ var onedeck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var quasar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var simple_notify_dist_simple_notify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(355);
/* harmony import */ var simple_notify_dist_simple_notify_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_notify_dist_simple_notify_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ExampleNotification_css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(357);
/* harmony import */ var ExampleNotification_css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ExampleNotification_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
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
    value: function init(path, state) {// console.log('init', this.constructor.name, path, state);
    }
  }, {
    key: "dispatcher",
    value: function dispatcher(path, state) {
      console.log('dispatcher', this.constructor.name, path, state); // Notify.create({
      //   color: 'teal',
      //   position: 'top-right',
      //   timeout: 5000,
      //   textColor: 'white',
      //   actions: [{ icon: 'close', color: 'white' }],
      //   message: `MODULE : ${path[0]}`,
      // });
    }
  }, {
    key: "mounted",
    value: function mounted(module, layout) {// console.log('mounted', this.constructor.name, module, layout);
    }
  }, {
    key: "notify",
    value: function notify(text) {
      // console.log('dispatcher', this.constructor.name, path, state);
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
}(onedeck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Module);



/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/onedeck/index.js + 6 modules
var onedeck = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/webix/webix.js
var webix = __webpack_require__(49);

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
    _this.module = new module_ExampleGlobalWnd();
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
}(onedeck["a" /* default */].Observable);


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
      // console.log('init', this.constructor.name, path, state);
      this.Window = new window_WindowGlobal(); //this.Window.show();
    }
  }, {
    key: "dispatcher",
    value: function dispatcher(path, state) {// console.log('dispatcher', this.constructor.name, path, state);
    }
  }, {
    key: "mounted",
    value: function mounted(module, layout) {// console.log('mounted', this.constructor.name, module, layout);
    }
  }, {
    key: "show",
    value: function show() {
      this.Window.show();
    }
  }]);

  return ExampleGlobalWnd;
}(onedeck["a" /* default */].Module);



/***/ })

/******/ });
//# sourceMappingURL=main.e055b9599081c303ee41.js.map