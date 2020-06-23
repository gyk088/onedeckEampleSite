(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/onedeck/ondeck.js
var ondeck = __webpack_require__(29);
var ondeck_default = /*#__PURE__*/__webpack_require__.n(ondeck);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/ExampleAuth/App.vue?vue&type=template&id=288bb39a&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "ROOT" } }, [
    _c(
      "div",
      { staticClass: "auth" },
      [
        _c("q-btn", {
          staticClass: "q-px-xl q-py-xs",
          attrs: { size: "22px", color: "purple", label: "АВТОРИЗАЦИЯ" },
          on: { click: _vm.auth }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/modules/ExampleAuth/App.vue?vue&type=template&id=288bb39a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/ExampleAuth/App.vue?vue&type=script&lang=js&
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
  el: '#ROOT',
  name: 'VueApp',
  methods: {
    auth: function auth() {
      this.$emit('onAuth');
    }
  }
});
// CONCATENATED MODULE: ./src/modules/ExampleAuth/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExampleAuth_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/modules/ExampleAuth/App.vue?vue&type=style&index=0&id=288bb39a&scoped=true&lang=css&
var Appvue_type_style_index_0_id_288bb39a_scoped_true_lang_css_ = __webpack_require__(387);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(366);

// CONCATENATED MODULE: ./src/modules/ExampleAuth/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExampleAuth_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "288bb39a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/modules/ExampleAuth/App.vue"
/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./src/modules/ExampleAuth/module.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return module_ExampleAuth; });
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
 * Class ExampleAuth
 * module use Vue
 */

var module_ExampleAuth =
/*#__PURE__*/
function (_Onedeck$Module) {
  _inherits(ExampleAuth, _Onedeck$Module);

  function ExampleAuth() {
    _classCallCheck(this, ExampleAuth);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExampleAuth).apply(this, arguments));
  }

  _createClass(ExampleAuth, [{
    key: "init",
    value: function init(path, state) {
      console.log('init', this.constructor.name, path, state);
      this.VueApp = new vue_runtime_esm["a" /* default */](App);
      this.eventHandler();
    }
  }, {
    key: "eventHandler",
    value: function eventHandler() {
      var _this = this;

      this.VueApp.$on('onAuth', function () {
        return _this.$$rout({
          path: '/main/',
          state: null
        });
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
    key: "destroy",
    value: function destroy() {
      this.$$offAll();
      this.VueApp.$destroy();
      document.getElementById('ROOT').innerHTML = '';
    }
  }]);

  return ExampleAuth;
}(ondeck_default.a.Module);



/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(388);

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

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_288bb39a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(382);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_288bb39a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_288bb39a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_288bb39a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=4.655b6586b1d47d4c1401.js.map