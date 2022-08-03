(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/onedeck/index.js + 6 modules
var onedeck = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/webix/webix.js
var webix = __webpack_require__(334);

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
      this.Window = new window_WindowGlobal();
      this.Window.show();
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

}]);
//# sourceMappingURL=10.ca04cc90df69347aa9c7.js.map