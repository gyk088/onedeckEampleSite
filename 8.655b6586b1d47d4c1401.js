(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/ExampleVue/App.vue?vue&type=template&id=d2f1de22&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "MainContent" } }, [
    _c(
      "div",
      { staticClass: "q-pa-md" },
      [
        _c("q-table", {
          attrs: {
            title: "Treats",
            data: _vm.data,
            columns: _vm.columns,
            "row-key": "name",
            selection: "single",
            "selected-rows-label": _vm.getSelectedString,
            selected: _vm.vSelected
          },
          on: {
            "update:selected": function($event) {
              _vm.vSelected = $event
            }
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/modules/ExampleVue/App.vue?vue&type=template&id=d2f1de22&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/ExampleVue/App.vue?vue&type=script&lang=js&
var Appvue_type_script_lang_js_ = __webpack_require__(386);

// CONCATENATED MODULE: ./src/modules/ExampleVue/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var ExampleVue_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(366);

// CONCATENATED MODULE: ./src/modules/ExampleVue/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ExampleVue_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/modules/ExampleVue/App.vue"
/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/onedeck/ondeck.js
var ondeck = __webpack_require__(29);
var ondeck_default = /*#__PURE__*/__webpack_require__.n(ondeck);

// CONCATENATED MODULE: ./src/modules/ExampleVue/module.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return module_ExampleVue; });
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
 * Class ExampleVue
 * module use Vue and Quasar
 */

var module_ExampleVue =
/*#__PURE__*/
function (_Onedeck$Module) {
  _inherits(ExampleVue, _Onedeck$Module);

  function ExampleVue() {
    _classCallCheck(this, ExampleVue);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExampleVue).apply(this, arguments));
  }

  _createClass(ExampleVue, [{
    key: "init",
    value: function init(path, state) {
      console.log('init', this.constructor.name, path, state); // Инициализируем приложение модуля

      this.VueApp = new vue_runtime_esm["a" /* default */](App);
      this.eventHandler();
    }
  }, {
    key: "eventHandler",
    value: function eventHandler() {
      var _this = this;

      // По клику на строчку в таблице переходим на новый url
      this.$$on('onRowClick', function (row) {
        return _this.$$rout({
          path: "/main/item/".concat(row[0].id),
          state: row[0]
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
      // Уничтожаем приложение модуля
      this.VueApp.$destroy(); // Чистим DOM дерево, куда был встроем модуль

      document.getElementById('MainContent').innerHTML = '';
    }
  }]);

  return ExampleVue;
}(ondeck_default.a.Module);



/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(367);
/* harmony import */ var ExampleVue_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(408);
/* harmony import */ var ExampleVue_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(372);
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
//



/* harmony default export */ __webpack_exports__["a"] = ({
  el: '#MainContent',
  name: 'VueApp',
  store: ExampleVue_store__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__[/* mapState */ "c"])({
    data: function data(state) {
      return state.data;
    },
    columns: function columns(state) {
      return state.columns;
    },
    selected: function selected(state) {
      return state.selected;
    }
  }), {
    vSelected: {
      get: function get() {
        return this.selected;
      },
      set: function set(value) {
        this.select(value);
      }
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__[/* mapMutations */ "b"])(['select']), {
    getSelectedString: function getSelectedString() {
      module = new ExampleVue_module__WEBPACK_IMPORTED_MODULE_2__["default"]();
      module.$$emit('onRowClick', this.selected);
    }
  })
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(369)(module)))

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(367);


vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

var defaultState = function defaultState() {
  return {
    selected: [],
    columns: [{
      name: 'id',
      label: 'ID',
      field: 'id',
      sortable: true
    }, {
      name: 'name',
      required: true,
      label: 'Dessert (100g serving)',
      align: 'left',
      field: function field(row) {
        return row.name;
      },
      format: function format(val) {
        return "".concat(val);
      },
      sortable: true
    }, {
      name: 'calories',
      align: 'center',
      label: 'Calories',
      field: 'calories',
      sortable: true
    }, {
      name: 'fat',
      label: 'Fat (g)',
      field: 'fat',
      sortable: true
    }, {
      name: 'carbs',
      label: 'Carbs (g)',
      field: 'carbs'
    }, {
      name: 'protein',
      label: 'Protein (g)',
      field: 'protein'
    }, {
      name: 'sodium',
      label: 'Sodium (mg)',
      field: 'sodium'
    }, {
      name: 'calcium',
      label: 'Calcium (%)',
      field: 'calcium',
      sortable: true,
      sort: function sort(a, b) {
        return parseInt(a, 10) - parseInt(b, 10);
      }
    }, {
      name: 'iron',
      label: 'Iron (%)',
      field: 'iron',
      sortable: true,
      sort: function sort(a, b) {
        return parseInt(a, 10) - parseInt(b, 10);
      }
    }],
    data: [{
      id: 1,
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      sodium: 87,
      calcium: '14%',
      iron: '1%'
    }, {
      id: 2,
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      sodium: 129,
      calcium: '8%',
      iron: '1%'
    }, {
      id: 3,
      name: 'Eclair',
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      sodium: 337,
      calcium: '6%',
      iron: '7%'
    }, {
      id: 1,
      name: 'Cupcake',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      sodium: 413,
      calcium: '3%',
      iron: '8%'
    }, {
      id: 4,
      name: 'Gingerbread',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      sodium: 327,
      calcium: '7%',
      iron: '16%'
    }, {
      id: 5,
      name: 'Jelly bean',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      sodium: 50,
      calcium: '0%',
      iron: '0%'
    }, {
      id: 6,
      name: 'Lollipop',
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      sodium: 38,
      calcium: '0%',
      iron: '2%'
    }, {
      id: 7,
      name: 'Honeycomb',
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      sodium: 562,
      calcium: '0%',
      iron: '45%'
    }, {
      id: 8,
      name: 'Donut',
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      sodium: 326,
      calcium: '2%',
      iron: '22%'
    }, {
      id: 9,
      name: 'KitKat',
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      sodium: 54,
      calcium: '12%',
      iron: '6%'
    }]
  };
};

/* harmony default export */ __webpack_exports__["a"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Store({
  state: defaultState(),
  mutations: {
    select: function select(state, selected) {
      vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].set(state, 'selected', selected);
    }
  }
}));

/***/ })

}]);
//# sourceMappingURL=8.655b6586b1d47d4c1401.js.map