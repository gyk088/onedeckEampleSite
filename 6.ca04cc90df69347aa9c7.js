(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/onedeck/index.js + 6 modules
var onedeck = __webpack_require__(92);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/ExampleError404/App.vue?vue&type=template&id=3d201b8a&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "MainContent" } }, [
    _c("div", { staticClass: "auth" }, [
      _c(
        "div",
        [
          _c("q-btn", {
            staticClass: "q-px-xl q-py-xs",
            attrs: {
              size: "22px",
              color: "purple",
              label: "404 Page not found, go to the main page",
              "icon-right": "sentiment_very_dissatisfied"
            },
            on: { click: _vm.auth }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/modules/ExampleError404/App.vue?vue&type=template&id=3d201b8a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/ExampleError404/App.vue?vue&type=script&lang=js&
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
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'VueApp',
  methods: {
    auth: function auth() {
      this.$emit('onAuth');
    }
  }
});
// CONCATENATED MODULE: ./src/modules/ExampleError404/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExampleError404_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/modules/ExampleError404/App.vue?vue&type=style&index=0&id=3d201b8a&scoped=true&lang=css&
var Appvue_type_style_index_0_id_3d201b8a_scoped_true_lang_css_ = __webpack_require__(367);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(332);

// CONCATENATED MODULE: ./src/modules/ExampleError404/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExampleError404_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3d201b8a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/modules/ExampleError404/App.vue"
/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./src/modules/ExampleError404/module.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return module_ExampleError404; });
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
 * Class ExampleError404
 * module use Vue
 */

var module_ExampleError404 =
/*#__PURE__*/
function (_Onedeck$Module) {
  _inherits(ExampleError404, _Onedeck$Module);

  function ExampleError404() {
    _classCallCheck(this, ExampleError404);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExampleError404).apply(this, arguments));
  }

  _createClass(ExampleError404, [{
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

      this.VueApp.$on('onAuth', function () {
        return _this.$$route({
          path: '/main/',
          state: null
        });
      });
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
    key: "destroy",
    value: function destroy() {
      this.VueApp.$destroy();
      document.getElementById('MainContent').innerHTML = '';
      this.$$offAll();
    }
  }]);

  return ExampleError404;
}(onedeck["a" /* default */].Module);



/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(368);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(49)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3d201b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3d201b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3d201b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_index_js_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3d201b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=6.ca04cc90df69347aa9c7.js.map