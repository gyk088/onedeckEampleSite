(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/webix/webix.css
var webix = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/webix/skins/mini.min.css
var mini_min = __webpack_require__(145);

// EXTERNAL MODULE: ./node_modules/webix/webix.js
var webix_webix = __webpack_require__(49);

// EXTERNAL MODULE: ./src/onedeck/index.js + 6 modules
var onedeck = __webpack_require__(29);

// CONCATENATED MODULE: ./src/modules/ExampleWebix/views/table.ui.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class POUI
 */


var table_ui_TableUI =
/*#__PURE__*/
function () {
  function TableUI() {
    _classCallCheck(this, TableUI);

    this.module = new module_ExampleWebix();
    this.id = 'Table';
    return this.ui();
  }

  _createClass(TableUI, [{
    key: "columns",
    value: function columns() {
      return [{
        id: 'id',
        header: 'ID',
        css: {
          'text-align': 'right'
        },
        width: 50
      }, {
        id: 'title',
        header: 'Name',
        width: 250,
        template: '{common.treetable()} #title#'
      }, {
        id: 'description',
        header: 'Description',
        fillspace: true
      }, {
        id: 'sort',
        header: 'Sort',
        width: 150
      }, {
        id: 'hidden',
        header: 'Hidden',
        width: 150
      }];
    }
  }, {
    key: "ui",
    value: function ui() {
      return {
        id: this.id,
        container: this.module.$$mountId,
        view: 'treetable',
        select: 'row',
        selected: true,
        columns: this.columns(),
        height: 300
      };
    }
  }]);

  return TableUI;
}();


// CONCATENATED MODULE: ./src/modules/ExampleWebix/controllers/table.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function table_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function table_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function table_createClass(Constructor, protoProps, staticProps) { if (protoProps) table_defineProperties(Constructor.prototype, protoProps); if (staticProps) table_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * controller for CatalogTableUI
 */




var table_Table =
/*#__PURE__*/
function (_Onedeck$Observable) {
  _inherits(Table, _Onedeck$Observable);

  function Table() {
    var _this;

    table_classCallCheck(this, Table);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Table).call(this));
    _this.ui = new table_ui_TableUI();
    _this.id = _this.ui.id;
    _this.app = webix_webix["ui"](_this.ui);

    _this.eventHandler();

    _this.loadData();

    return _this;
  }

  table_createClass(Table, [{
    key: "destroy",
    value: function destroy() {
      console.log('2222222222222222222');
      this.app.destructor();
    }
  }, {
    key: "eventHandler",
    value: function eventHandler() {
      var _this2 = this;

      $$(this.id).attachEvent('onAfterSelect', function (id) {
        return _this2.$$emit('onClickRow', $$(_this2.id).getItem(id.row));
      });
    }
  }, {
    key: "loadData",
    value: function loadData() {
      $$(this.id).parse(this.exampleData());
    }
  }, {
    key: "exampleData",
    value: function exampleData() {
      return [{
        id: '1',
        title: 'The Shawshank Redemption',
        hidden: true,
        sort: 15,
        description: 'The Shawshank Redemption',
        open: true,
        data: [{
          id: '1.1',
          title: 'Part 1',
          description: 'alpha'
        }, {
          id: '1.2',
          title: 'Part 2',
          chaptdescriptioner: 'beta',
          open: true,
          data: [{
            id: '1.2.1',
            title: 'Part 1',
            description: 'beta-twin'
          }, {
            id: '1.2.2',
            title: 'Part 1',
            chapdescriptionter: 'beta-twin'
          }]
        }, {
          id: '1.3',
          title: 'Part 3',
          description: 'gamma'
        }]
      }, {
        id: '2',
        title: 'The Godfather',
        data: [{
          id: '2.1',
          title: 'Part 1',
          description: 'alpha'
        }, {
          id: '2.2',
          title: 'Part 2',
          description: 'beta'
        }]
      }];
    }
  }]);

  return Table;
}(onedeck["a" /* default */].Observable);


// CONCATENATED MODULE: ./src/modules/ExampleWebix/module.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return module_ExampleWebix; });
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
 * Class ExampleWebix
 * module use Webix
 */

var module_ExampleWebix =
/*#__PURE__*/
function (_Onedeck$Module) {
  module_inherits(ExampleWebix, _Onedeck$Module);

  function ExampleWebix() {
    module_classCallCheck(this, ExampleWebix);

    return module_possibleConstructorReturn(this, module_getPrototypeOf(ExampleWebix).apply(this, arguments));
  }

  module_createClass(ExampleWebix, [{
    key: "init",
    value: function init(path, state) {
      // console.log('init', this.constructor.name, path, state);
      this.Table = new table_Table();
      this.eventHandler();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      console.log('destroy');
      this.Table.destroy();
    }
  }, {
    key: "eventHandler",
    value: function eventHandler() {
      var _this = this;

      // Открыть меню
      this.Table.$$on('onClickRow', function (row) {
        _this.$$route({
          path: "/main/item/".concat(row.id),
          state: row
        });
      });
    }
  }, {
    key: "watchTest1",
    value: function watchTest1(data) {
      this.showItem(data.newValue, data.newValue.id);
    }
  }, {
    key: "dispatcher",
    value: function dispatcher(path, state) {
      // console.log('dispatcher', this.constructor.name, path, state);
      if (!path) return; // if (path[1] === 'item') this.showItem(state, path[2]);
    }
  }, {
    key: "mounted",
    value: function mounted(module, layout) {// console.log('mounted', this.constructor.name, module, layout);
    }
  }, {
    key: "showItem",
    value: function showItem(state, id) {
      var text = '';

      if (state) {
        Object.keys(state).forEach(function (key) {
          text += "".concat(key, " : ").concat(state[key], " </br>");
        });
      } else {
        text = 'API REQUEST IN THIS CASE';
      }

      webix_webix["confirm"]({
        title: "ID: ".concat(id),
        ok: 'Yes',
        cancel: 'No',
        type: 'confirm-error',
        text: text,
        callback: function callback(result) {
          if (result) {// console.log('OK');
          }
        }
      });
    }
  }]);

  return ExampleWebix;
}(onedeck["a" /* default */].Module);



/***/ })

}]);
//# sourceMappingURL=11.505b40a526ff1e630ab5.js.map