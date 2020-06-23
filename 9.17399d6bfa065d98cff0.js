(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/ExampleLayoutVue/App.vue?vue&type=template&id=19e4fc25&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "ROOT" } },
    [
      _c(
        "q-layout",
        { attrs: { view: "hhh lpR fFf" } },
        [
          _c(
            "q-header",
            { staticClass: "bg-primary text-white", attrs: { elevated: "" } },
            [
              _c(
                "q-toolbar",
                [
                  _c("q-btn", {
                    attrs: { dense: "", flat: "", round: "", icon: "menu" },
                    on: {
                      click: function($event) {
                        _vm.left = !_vm.left
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "q-toolbar-title",
                    [
                      _c("q-avatar", [
                        _c("img", {
                          attrs: {
                            src:
                              "https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
                          }
                        })
                      ]),
                      _vm._v("\n          Title\n        ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("q-space"),
                  _vm._v(" "),
                  _c("q-btn", {
                    attrs: { dense: "", flat: "", icon: "new_releases" },
                    on: {
                      click: function($event) {
                        return _vm.showGlobalWnd()
                      }
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "q-drawer",
            {
              attrs: { side: "left", overlay: "", bordered: "" },
              model: {
                value: _vm.left,
                callback: function($$v) {
                  _vm.left = $$v
                },
                expression: "left"
              }
            },
            [
              _c(
                "q-list",
                { attrs: { bordered: "", separator: "" } },
                _vm._l(_vm.config.modules, function(m, url) {
                  return _c(
                    "div",
                    { key: url },
                    [
                      !m.global
                        ? _c(
                            "q-item",
                            {
                              directives: [
                                { name: "ripple", rawName: "v-ripple" }
                              ],
                              attrs: { clickable: "" },
                              on: {
                                click: function($event) {
                                  return _vm.rout("/" + url)
                                }
                              }
                            },
                            [_c("q-item-section", [_vm._v(_vm._s(m.name))])],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                }),
                0
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("q-page-container", [_c("div", { attrs: { id: "MainContent" } })])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/modules/ExampleLayoutVue/App.vue?vue&type=template&id=19e4fc25&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/ExampleLayoutVue/App.vue?vue&type=script&lang=js&
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
  el: '#ROOT',
  name: 'ExampleVueRoot',
  data: function data() {
    return {
      left: false,
      config: {}
    };
  },
  created: function created() {
    var module = new module_ExampleLayoutVue();
    this.config = module.$$config;
  },
  methods: {
    rout: function rout(url, state) {
      this.$emit('rout', {
        url: url,
        state: state
      });
      this.left = false;
    },
    showGlobalWnd: function showGlobalWnd() {
      this.$emit('showGlobalWnd');
    }
  }
});
// CONCATENATED MODULE: ./src/modules/ExampleLayoutVue/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExampleLayoutVue_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(366);

// CONCATENATED MODULE: ./src/modules/ExampleLayoutVue/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExampleLayoutVue_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/modules/ExampleLayoutVue/App.vue"
/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/onedeck/ondeck.js
var ondeck = __webpack_require__(29);
var ondeck_default = /*#__PURE__*/__webpack_require__.n(ondeck);

// CONCATENATED MODULE: ./src/modules/ExampleLayoutVue/module.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return module_ExampleLayoutVue; });
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




var module_ExampleLayoutVue =
/*#__PURE__*/
function (_Onedeck$Module) {
  _inherits(ExampleLayoutVue, _Onedeck$Module);

  function ExampleLayoutVue() {
    _classCallCheck(this, ExampleLayoutVue);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExampleLayoutVue).apply(this, arguments));
  }

  _createClass(ExampleLayoutVue, [{
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

      this.VueApp.$on('rout', function (data) {
        return _this.$$rout({
          path: data.url,
          state: data.state
        });
      });
      this.VueApp.$on('showGlobalWnd', function () {
        return _this.$$gemit('showGlobalWnd');
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
      this.VueApp.$destroy();
      document.getElementById('ROOT').innerHTML = '';
    }
  }]);

  return ExampleLayoutVue;
}(ondeck_default.a.Module);



/***/ })

}]);
//# sourceMappingURL=9.17399d6bfa065d98cff0.js.map