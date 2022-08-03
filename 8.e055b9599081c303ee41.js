(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/webix/webix.css
var webix = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/webix/skins/mini.min.css
var mini_min = __webpack_require__(145);

// EXTERNAL MODULE: ./src/onedeck/index.js + 6 modules
var onedeck = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/webix/webix.js
var webix_webix = __webpack_require__(49);

// CONCATENATED MODULE: ./src/modules/ExampleLayoutWebix/views/content.ui.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class ContentUI
 */


var content_ui_ContentUI =
/*#__PURE__*/
function () {
  function ContentUI() {
    _classCallCheck(this, ContentUI);

    this.id = 'Content';
    this.module = new module_ExampleLayoutWebix();
    return this.ui();
  }

  _createClass(ContentUI, [{
    key: "content",
    value: function content() {
      console.log('ExampleLayoutWebix', this.module);
      return {
        template: '<div id="MainContent"></div><div id="Embed"></div>'
      };
    }
  }, {
    key: "toolBar",
    value: function toolBar() {
      return {
        view: 'toolbar',
        id: "".concat(this.id, "Toolbar"),
        css: 'onedeck_toolbar',
        elements: [{
          view: 'icon',
          icon: 'mdi mdi-menu',
          id: "".concat(this.id, "MenuOpenBtn")
        }, {
          view: 'label',
          label: 'OneDeck',
          id: "".concat(this.id, "ToolbarLabel")
        }, {}, {
          view: 'icon',
          icon: 'mdi mdi-cogs',
          id: "".concat(this.id, "GlobalWndBtn")
        }]
      };
    }
  }, {
    key: "ui",
    value: function ui() {
      return {
        container: this.module.$$rootElementId,
        id: this.id,
        rows: [this.toolBar(), this.content()]
      };
    }
  }]);

  return ContentUI;
}();


// CONCATENATED MODULE: ./src/modules/ExampleLayoutWebix/controllers/content.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function content_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function content_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function content_createClass(Constructor, protoProps, staticProps) { if (protoProps) content_defineProperties(Constructor.prototype, protoProps); if (staticProps) content_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * controller for RootContentUI
 */




var content_RootContent =
/*#__PURE__*/
function (_Onedeck$Observable) {
  _inherits(RootContent, _Onedeck$Observable);

  function RootContent() {
    var _this;

    content_classCallCheck(this, RootContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RootContent).call(this));
    _this.ui = new content_ui_ContentUI();
    _this.id = _this.ui.id;
    _this.app = webix_webix["ui"](_this.ui);

    _this.eventHandler();

    return _this;
  }

  content_createClass(RootContent, [{
    key: "eventHandler",
    value: function eventHandler() {
      var _this2 = this;

      $$("".concat(this.id, "MenuOpenBtn")).attachEvent('onItemClick', function () {
        return _this2.$$emit('openMenu');
      });
      $$("".concat(this.id, "GlobalWndBtn")).attachEvent('onItemClick', function () {
        return _this2.$$emit('onShowGlobalWnd');
      });
    }
  }]);

  return RootContent;
}(onedeck["a" /* default */].Observable);


// CONCATENATED MODULE: ./src/modules/ExampleLayoutWebix/views/menu.ui.js
function menu_ui_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function menu_ui_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function menu_ui_createClass(Constructor, protoProps, staticProps) { if (protoProps) menu_ui_defineProperties(Constructor.prototype, protoProps); if (staticProps) menu_ui_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class RootMenuUI
 */
var MenuUI =
/*#__PURE__*/
function () {
  function MenuUI() {
    menu_ui_classCallCheck(this, MenuUI);

    this.id = 'Menu';
    return this.ui();
  }

  menu_ui_createClass(MenuUI, [{
    key: "body",
    value: function body() {
      return {
        view: 'list',
        css: 'onedeck_root_menu',
        id: "".concat(this.id, "List"),
        borderless: true,
        scroll: false,
        template: "<span class='webix_icon mdi #icon#'></span> #value#",
        select: true,
        type: {
          height: 40
        }
      };
    }
  }, {
    key: "ui",
    value: function ui() {
      return {
        id: this.id,
        view: 'sidemenu',
        width: 200,
        position: 'left',
        state: function state(_state) {
          var toolbarHeight = $$('ContentToolbar').$height;
          _state.top = toolbarHeight;
          _state.height -= toolbarHeight;
        },
        body: this.body()
      };
    }
  }]);

  return MenuUI;
}();


// CONCATENATED MODULE: ./src/modules/ExampleLayoutWebix/controllers/menu.js
function menu_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { menu_typeof = function _typeof(obj) { return typeof obj; }; } else { menu_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return menu_typeof(obj); }

function menu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function menu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function menu_createClass(Constructor, protoProps, staticProps) { if (protoProps) menu_defineProperties(Constructor.prototype, protoProps); if (staticProps) menu_defineProperties(Constructor, staticProps); return Constructor; }

function menu_possibleConstructorReturn(self, call) { if (call && (menu_typeof(call) === "object" || typeof call === "function")) { return call; } return menu_assertThisInitialized(self); }

function menu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function menu_getPrototypeOf(o) { menu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return menu_getPrototypeOf(o); }

function menu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) menu_setPrototypeOf(subClass, superClass); }

function menu_setPrototypeOf(o, p) { menu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return menu_setPrototypeOf(o, p); }

/**
 * controller for RootMenuUI
 */





var menu_Menu =
/*#__PURE__*/
function (_Onedeck$Observable) {
  menu_inherits(Menu, _Onedeck$Observable);

  function Menu() {
    var _this;

    menu_classCallCheck(this, Menu);

    _this = menu_possibleConstructorReturn(this, menu_getPrototypeOf(Menu).call(this));
    _this.ui = new MenuUI();
    _this.id = _this.ui.id;
    _this.app = webix_webix["ui"](_this.ui);

    _this.eventHandler();

    _this.createMenu();

    return _this;
  }

  menu_createClass(Menu, [{
    key: "eventHandler",
    value: function eventHandler() {
      var _this2 = this;

      $$("".concat(this.id, "List")).attachEvent('onAfterSelect', function (key) {
        $$(_this2.id).hide();

        _this2.$$emit('initModule', {
          url: "/".concat(key),
          state: null
        });
      });
    }
  }, {
    key: "createMenu",
    value: function createMenu() {
      var menu = [];
      var module = new module_ExampleLayoutWebix();
      Object.keys(module.$$config.modules).forEach(function (key) {
        var menuItem = module.$$config.modules[key];

        if (!menuItem.global) {
          menu.push({
            id: key,
            value: menuItem.name,
            icon: menuItem.icon,
            "class": menuItem["class"]
          });
        }
      });
      $$("".concat(this.id, "List")).parse(menu);
    }
  }, {
    key: "show",
    value: function show() {
      if ($$(this.id).config.hidden) {
        $$(this.id).show();
      } else {
        $$(this.id).hide();
      }
    }
  }]);

  return Menu;
}(onedeck["a" /* default */].Observable);


// EXTERNAL MODULE: ./src/modules/ExampleLayoutWebix/scss/main.scss
var main = __webpack_require__(404);

// CONCATENATED MODULE: ./src/modules/ExampleLayoutWebix/module.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return module_ExampleLayoutWebix; });
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
 * Class Root
 */







var module_ExampleLayoutWebix =
/*#__PURE__*/
function (_Onedeck$Module) {
  module_inherits(ExampleLayoutWebix, _Onedeck$Module);

  function ExampleLayoutWebix() {
    module_classCallCheck(this, ExampleLayoutWebix);

    return module_possibleConstructorReturn(this, module_getPrototypeOf(ExampleLayoutWebix).apply(this, arguments));
  }

  module_createClass(ExampleLayoutWebix, [{
    key: "init",
    value: function init(path, state) {
      // console.log('init', this.constructor.name, path, state);
      this.Content = new content_RootContent();
      this.Menu = new menu_Menu();
      this.eventHandler();
    }
  }, {
    key: "eventHandler",
    value: function eventHandler() {
      var _this = this;

      this.Content.$$on('openMenu', function () {
        _this.Menu.show();
      });
      this.Menu.$$on('initModule', function (data) {
        return _this.$$route({
          path: data.url,
          state: data.state
        });
      });
      this.Content.$$on('onShowGlobalWnd', function () {
        return _this.$$gemit('showGlobalWnd');
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
      this.Content.app.destructor();
      this.Menu.app.destructor();
    }
  }]);

  return ExampleLayoutWebix;
}(onedeck["a" /* default */].Module);



/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(405);

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

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=8.e055b9599081c303ee41.js.map