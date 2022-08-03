(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/onedeck/index.js + 6 modules
var onedeck = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/ExampleEmbedGlobal/App.vue?vue&type=template&id=c9888b76&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "embed-block", attrs: { id: "EmbedWnd" } },
    [
      _c("q-btn", {
        staticClass: "q-px-xl q-py-xs",
        attrs: { size: "22px", color: "purple", label: _vm.data },
        on: { click: _vm.test }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/modules/ExampleEmbedGlobal/App.vue?vue&type=template&id=c9888b76&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(372);

// CONCATENATED MODULE: ./src/modules/ExampleEmbedGlobal/store/index.js


vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);

var defaultState = function defaultState() {
  return {
    data: ''
  };
};

/* harmony default export */ var store = (new vuex_esm["a" /* default */].Store({
  state: defaultState(),
  mutations: {
    setData: function setData(state, str) {
      vue_runtime_esm["a" /* default */].set(state, 'data', str);
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/ExampleEmbedGlobal/App.vue?vue&type=script&lang=js&
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
//
//



/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'EmbedAppWnd',
  store: store,
  computed: _objectSpread({}, Object(vuex_esm["d" /* mapState */])({
    data: function data(state) {
      return state.data;
    }
  })),
  methods: _objectSpread({}, Object(vuex_esm["c" /* mapMutations */])(['setData']), {
    test: function test() {
      var module = new module_ExampleEmbedGlobal();
      console.log(module);
      module.$$gstore.state.token = '2322323';
      this.$emit('notify');
    }
  })
});
// CONCATENATED MODULE: ./src/modules/ExampleEmbedGlobal/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExampleEmbedGlobal_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/modules/ExampleEmbedGlobal/App.vue?vue&type=style&index=0&id=c9888b76&scoped=true&lang=css&
var Appvue_type_style_index_0_id_c9888b76_scoped_true_lang_css_ = __webpack_require__(400);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(371);

// CONCATENATED MODULE: ./src/modules/ExampleEmbedGlobal/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExampleEmbedGlobal_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "c9888b76",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/modules/ExampleEmbedGlobal/App.vue"
/* harmony default export */ var App = (component.exports);
// CONCATENATED MODULE: ./src/modules/ExampleEmbedGlobal/module.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return module_ExampleEmbedGlobal; });
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
 * Class ExampleEmbedGlobal
 * module use Vue
 */

var module_ExampleEmbedGlobal =
/*#__PURE__*/
function (_Onedeck$Module) {
  _inherits(ExampleEmbedGlobal, _Onedeck$Module);

  function ExampleEmbedGlobal() {
    _classCallCheck(this, ExampleEmbedGlobal);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExampleEmbedGlobal).apply(this, arguments));
  }

  _createClass(ExampleEmbedGlobal, [{
    key: "init",
    value: function init(path, state) {
      // console.log('init', this.constructor.name, path, state);
      App.el = "#".concat(this.$$mountId);
      this.VueApp = new vue_runtime_esm["a" /* default */](App);
      this.eventHandler();
    }
  }, {
    key: "eventHandler",
    value: function eventHandler() {
      var _this = this;

      this.VueApp.$on('notify', function () {
        return _this.$$gemit('notify', "GLOBAL IN: ".concat(_this.moduleName));
      });
    }
  }, {
    key: "dispatcher",
    value: function dispatcher(path, state) {
      // console.log('dispatcher', this.constructor.name, path, state);
      var _path = _slicedToArray(path, 1);

      this.moduleName = _path[0];
      this.VueApp.setData(this.moduleName);
    }
  }, {
    key: "mounted",
    value: function mounted(module, layout) {// console.log('mounted', this.constructor.name, module, layout);
    }
  }]);

  return ExampleEmbedGlobal;
}(onedeck["a" /* default */].Module);



/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(401);

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

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_c9888b76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(392);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_c9888b76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_c9888b76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_c9888b76_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=5.505b40a526ff1e630ab5.js.map