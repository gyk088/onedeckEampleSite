(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/onedeck/ondeck.js
var ondeck = __webpack_require__(29);
var ondeck_default = /*#__PURE__*/__webpack_require__.n(ondeck);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/ExampleEmbed/App.vue?vue&type=template&id=64aaf782&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "Embed" }, on: { click: _vm.notify } }, [
    _c(
      "div",
      { staticClass: "embed-block" },
      [
        _c(
          "q-parallax",
          { attrs: { src: "https://cdn.quasar.dev/img/parallax2.jpg" } },
          [_c("h1", [_vm._v(_vm._s(_vm.data))])]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/modules/ExampleEmbed/App.vue?vue&type=template&id=64aaf782&scoped=true&

// EXTERNAL MODULE: ./src/modules/ExampleEmbed/store/index.js
var store = __webpack_require__(389);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(367);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/ExampleEmbed/App.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  el: '#Embed',
  name: 'EmbedApp',
  store: store["a" /* default */],
  computed: _objectSpread({}, Object(vuex_esm["c" /* mapState */])({
    data: function data(state) {
      return state.data;
    }
  })),
  methods: _objectSpread({}, Object(vuex_esm["b" /* mapMutations */])(['setData']), {
    notify: function notify() {
      var module = new module_ExampleEmbed();
      module.$$emit('notify', this.data);
    }
  })
});
// CONCATENATED MODULE: ./src/modules/ExampleEmbed/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExampleEmbed_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/modules/ExampleEmbed/App.vue?vue&type=style&index=0&id=64aaf782&scoped=true&lang=css&
var Appvue_type_style_index_0_id_64aaf782_scoped_true_lang_css_ = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(366);

// CONCATENATED MODULE: ./src/modules/ExampleEmbed/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExampleEmbed_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "64aaf782",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/modules/ExampleEmbed/App.vue"
/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./src/modules/ExampleEmbed/module.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return module_ExampleEmbed; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * Class ExampleEmbed
 * module use Vue
 */

var module_ExampleEmbed =
/*#__PURE__*/
function (_Onedeck$Module) {
  _inherits(ExampleEmbed, _Onedeck$Module);

  function ExampleEmbed() {
    _classCallCheck(this, ExampleEmbed);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExampleEmbed).apply(this, arguments));
  }

  _createClass(ExampleEmbed, [{
    key: "init",
    value: function init(path, state) {
      var _this = this;

      console.log('init', this.constructor.name, path, state);
      this.VueApp = new vue_runtime_esm["a" /* default */](App);
      this.listeners = {
        notify: function notify(str) {
          return _this.$$gemit('notify', str);
        }
      };
      this.eventHandler();
    }
  }, {
    key: "eventHandler",
    value: function eventHandler() {
      this.$$on('notify', this.listeners.notify);
    }
  }, {
    key: "dispatcher",
    value: function dispatcher(path, state) {
      console.log('dispatcher', this.constructor.name, path, state);

      var _path = _slicedToArray(path, 1);

      this.moduleName = _path[0];
      this.VueApp.setData(this.moduleName);
    }
  }, {
    key: "mounted",
    value: function mounted(module, layout) {
      console.log('mounted', this.constructor.name, module, layout);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$$offAll();
      this.VueApp.$destroy();
      document.getElementById('Embed').innerHTML = '';
    }
  }]);

  return ExampleEmbed;
}(ondeck_default.a.Module);



/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(391);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(53)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(367);
/* harmony import */ var ExampleEmbed_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(371);



vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

var defaultState = function defaultState() {
  return {
    data: ''
  };
};

/* harmony default export */ __webpack_exports__["a"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Store({
  state: defaultState(),
  mutations: {
    setData: function setData(state, str) {
      module = new ExampleEmbed_module__WEBPACK_IMPORTED_MODULE_2__["default"]();
      module.$$emit('notify', "".concat(state.data, " + ").concat(str));
      vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].set(state, 'data', "".concat(state.data, " + ").concat(str));
    }
  }
}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(369)(module)))

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_64aaf782_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(383);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_64aaf782_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_64aaf782_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_64aaf782_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=3.9eda2b6aab6cdecd92c9.js.map