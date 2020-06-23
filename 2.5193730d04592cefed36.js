(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(143);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(373);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(368);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./src/modules/ExampleReact/component/Display.css
var component_Display = __webpack_require__(398);

// CONCATENATED MODULE: ./src/modules/ExampleReact/component/Display.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Display_Display =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Display, _React$Component);

  function Display() {
    _classCallCheck(this, Display);

    return _possibleConstructorReturn(this, _getPrototypeOf(Display).apply(this, arguments));
  }

  _createClass(Display, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        className: "component-display"
      }, react_default.a.createElement("div", null, this.props.value));
    }
  }]);

  return Display;
}(react_default.a.Component);

Display_Display.propTypes = {
  value: prop_types_default.a.string
};

// EXTERNAL MODULE: ./src/modules/ExampleReact/component/Button.css
var component_Button = __webpack_require__(400);

// CONCATENATED MODULE: ./src/modules/ExampleReact/component/Button.js
function Button_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Button_typeof = function _typeof(obj) { return typeof obj; }; } else { Button_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Button_typeof(obj); }

function Button_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Button_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Button_createClass(Constructor, protoProps, staticProps) { if (protoProps) Button_defineProperties(Constructor.prototype, protoProps); if (staticProps) Button_defineProperties(Constructor, staticProps); return Constructor; }

function Button_possibleConstructorReturn(self, call) { if (call && (Button_typeof(call) === "object" || typeof call === "function")) { return call; } return Button_assertThisInitialized(self); }

function Button_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Button_getPrototypeOf(o) { Button_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Button_getPrototypeOf(o); }

function Button_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Button_setPrototypeOf(subClass, superClass); }

function Button_setPrototypeOf(o, p) { Button_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Button_setPrototypeOf(o, p); }





var Button_Button =
/*#__PURE__*/
function (_React$Component) {
  Button_inherits(Button, _React$Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    Button_classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Button_possibleConstructorReturn(this, (_getPrototypeOf2 = Button_getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleClick = function () {
      _this.props.clickHandler(_this.props.name);
    };

    return _this;
  }

  Button_createClass(Button, [{
    key: "render",
    value: function render() {
      var className = ['component-button', this.props.orange ? 'orange' : '', this.props.wide ? 'wide' : ''];
      return react_default.a.createElement("div", {
        className: className.join(' ').trim()
      }, react_default.a.createElement("button", {
        onClick: this.handleClick
      }, this.props.name));
    }
  }]);

  return Button;
}(react_default.a.Component);

Button_Button.propTypes = {
  name: prop_types_default.a.string,
  orange: prop_types_default.a.bool,
  wide: prop_types_default.a.bool,
  clickHandler: prop_types_default.a.func
};

// EXTERNAL MODULE: ./src/modules/ExampleReact/component/ButtonPanel.css
var component_ButtonPanel = __webpack_require__(402);

// CONCATENATED MODULE: ./src/modules/ExampleReact/component/ButtonPanel.js
function ButtonPanel_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ButtonPanel_typeof = function _typeof(obj) { return typeof obj; }; } else { ButtonPanel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ButtonPanel_typeof(obj); }

function ButtonPanel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ButtonPanel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ButtonPanel_createClass(Constructor, protoProps, staticProps) { if (protoProps) ButtonPanel_defineProperties(Constructor.prototype, protoProps); if (staticProps) ButtonPanel_defineProperties(Constructor, staticProps); return Constructor; }

function ButtonPanel_possibleConstructorReturn(self, call) { if (call && (ButtonPanel_typeof(call) === "object" || typeof call === "function")) { return call; } return ButtonPanel_assertThisInitialized(self); }

function ButtonPanel_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ButtonPanel_getPrototypeOf(o) { ButtonPanel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ButtonPanel_getPrototypeOf(o); }

function ButtonPanel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ButtonPanel_setPrototypeOf(subClass, superClass); }

function ButtonPanel_setPrototypeOf(o, p) { ButtonPanel_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ButtonPanel_setPrototypeOf(o, p); }






var ButtonPanel_ButtonPanel =
/*#__PURE__*/
function (_React$Component) {
  ButtonPanel_inherits(ButtonPanel, _React$Component);

  function ButtonPanel() {
    var _getPrototypeOf2;

    var _this;

    ButtonPanel_classCallCheck(this, ButtonPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ButtonPanel_possibleConstructorReturn(this, (_getPrototypeOf2 = ButtonPanel_getPrototypeOf(ButtonPanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleClick = function (buttonName) {
      _this.props.clickHandler(buttonName);
    };

    return _this;
  }

  ButtonPanel_createClass(ButtonPanel, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        className: "component-button-panel"
      }, react_default.a.createElement("div", null, react_default.a.createElement(Button_Button, {
        name: "AC",
        clickHandler: this.handleClick
      }), react_default.a.createElement(Button_Button, {
        name: "+/-",
        clickHandler: this.handleClick
      }), react_default.a.createElement(Button_Button, {
        name: "%",
        clickHandler: this.handleClick
      }), react_default.a.createElement(Button_Button, {
        name: "\xF7",
        clickHandler: this.handleClick,
        orange: true
      })), react_default.a.createElement("div", null, react_default.a.createElement(Button_Button, {
        name: "7",
        clickHandler: this.handleClick
      }), react_default.a.createElement(Button_Button, {
        name: "8",
        clickHandler: this.handleClick
      }), react_default.a.createElement(Button_Button, {
        name: "9",
        clickHandler: this.handleClick
      }), react_default.a.createElement(Button_Button, {
        name: "x",
        clickHandler: this.handleClick,
        orange: true
      })), react_default.a.createElement("div", null, react_default.a.createElement(Button_Button, {
        name: "4",
        clickHandler: this.handleClick
      }), react_default.a.createElement(Button_Button, {
        name: "5",
        clickHandler: this.handleClick
      }), react_default.a.createElement(Button_Button, {
        name: "6",
        clickHandler: this.handleClick
      }), react_default.a.createElement(Button_Button, {
        name: "-",
        clickHandler: this.handleClick,
        orange: true
      })), react_default.a.createElement("div", null, react_default.a.createElement(Button_Button, {
        name: "1",
        clickHandler: this.handleClick
      }), react_default.a.createElement(Button_Button, {
        name: "2",
        clickHandler: this.handleClick
      }), react_default.a.createElement(Button_Button, {
        name: "3",
        clickHandler: this.handleClick
      }), react_default.a.createElement(Button_Button, {
        name: "+",
        clickHandler: this.handleClick,
        orange: true
      })), react_default.a.createElement("div", null, react_default.a.createElement(Button_Button, {
        name: "0",
        clickHandler: this.handleClick,
        wide: true
      }), react_default.a.createElement(Button_Button, {
        name: ".",
        clickHandler: this.handleClick
      }), react_default.a.createElement(Button_Button, {
        name: "=",
        clickHandler: this.handleClick,
        orange: true
      })));
    }
  }]);

  return ButtonPanel;
}(react_default.a.Component);

ButtonPanel_ButtonPanel.propTypes = {
  clickHandler: prop_types_default.a.func
};

// EXTERNAL MODULE: ./node_modules/big.js/big.js
var big = __webpack_require__(370);
var big_default = /*#__PURE__*/__webpack_require__.n(big);

// CONCATENATED MODULE: ./src/modules/ExampleReact/logic/operate.js


function operate(numberOne, numberTwo, operation) {
  var module = new module_ExampleReact();
  var one = big_default()(numberOne || '0');
  var two = big_default()(numberTwo || (operation === '÷' || operation === 'x' ? '1' : '0')); // If dividing or multiplying, then 1 maintains current value in cases of null

  if (operation === '+') {
    return one.plus(two).toString();
  }

  if (operation === '-') {
    return one.minus(two).toString();
  }

  if (operation === 'x') {
    return one.times(two).toString();
  }

  if (operation === '÷') {
    if (two.toString() === '0') {
      module.$$emit('notify', 'нельзя делить на 0');
      return '0';
    }

    return one.div(two).toString();
  }

  throw Error("Unknown operation '".concat(operation, "'"));
}
// CONCATENATED MODULE: ./src/modules/ExampleReact/logic/isNumber.js
function isNumber(item) {
  return /[0-9]+/.test(item);
}
// CONCATENATED MODULE: ./src/modules/ExampleReact/logic/calculate.js



/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */

function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    } // If there is an operation, update next


    if (obj.operation) {
      if (obj.next) {
        return {
          next: obj.next + buttonName
        };
      }

      return {
        next: buttonName
      };
    } // If there is no operation, update next and clear the value


    if (obj.next) {
      var next = obj.next === '0' ? buttonName : obj.next + buttonName;
      return {
        next: next,
        total: null
      };
    }

    return {
      next: buttonName,
      total: null
    };
  }

  if (buttonName === '%') {
    if (obj.operation && obj.next) {
      var result = operate(obj.total, obj.next, obj.operation);
      return {
        total: big_default()(result).div(big_default()('100')).toString(),
        next: null,
        operation: null
      };
    }

    if (obj.next) {
      return {
        next: big_default()(obj.next).div(big_default()('100')).toString()
      };
    }

    return {};
  }

  if (buttonName === '.') {
    if (obj.next) {
      // ignore a . if the next number already has one
      if (obj.next.includes('.')) {
        return {};
      }

      return {
        next: "".concat(obj.next, ".")
      };
    }

    return {
      next: '0.'
    };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null
      };
    } // '=' with no operation, nothing to do


    return {};
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return {
        next: (-1 * parseFloat(obj.next)).toString()
      };
    }

    if (obj.total) {
      return {
        total: (-1 * parseFloat(obj.total)).toString()
      };
    }

    return {};
  } // Button must be an operation
  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }
  // User pressed an operation button and there is an existing operation


  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName
    };
  } // no operation yet, but the user typed one
  // The user hasn't typed a number yet, just save the operation


  if (!obj.next) {
    return {
      operation: buttonName
    };
  } // save the operation and shift 'next' into 'total'


  return {
    total: obj.next,
    next: null,
    operation: buttonName
  };
}
// EXTERNAL MODULE: ./src/modules/ExampleReact/component/App.css
var component_App = __webpack_require__(404);

// CONCATENATED MODULE: ./src/modules/ExampleReact/component/App.js
function App_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { App_typeof = function _typeof(obj) { return typeof obj; }; } else { App_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return App_typeof(obj); }

function App_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function App_createClass(Constructor, protoProps, staticProps) { if (protoProps) App_defineProperties(Constructor.prototype, protoProps); if (staticProps) App_defineProperties(Constructor, staticProps); return Constructor; }

function App_possibleConstructorReturn(self, call) { if (call && (App_typeof(call) === "object" || typeof call === "function")) { return call; } return App_assertThisInitialized(self); }

function App_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function App_getPrototypeOf(o) { App_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return App_getPrototypeOf(o); }

function App_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) App_setPrototypeOf(subClass, superClass); }

function App_setPrototypeOf(o, p) { App_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return App_setPrototypeOf(o, p); }








var App_App =
/*#__PURE__*/
function (_React$Component) {
  App_inherits(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    App_classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = App_possibleConstructorReturn(this, (_getPrototypeOf2 = App_getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      total: null,
      next: null,
      operation: null
    };

    _this.handleClick = function (buttonName) {
      var module = new module_ExampleReact();

      _this.setState(calculate(_this.state, buttonName));

      if (buttonName === '=' && _this.state.total) {
        module.$$emit('onSumm', _this.state.total);
      }

      module.$$emit('notify', buttonName);
    };

    return _this;
  }

  App_createClass(App, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement("div", {
        className: "component-app"
      }, react_default.a.createElement(Display_Display, {
        value: this.state.next || this.state.total || '0'
      }), react_default.a.createElement(ButtonPanel_ButtonPanel, {
        clickHandler: this.handleClick
      }));
    }
  }]);

  return App;
}(react_default.a.Component);


// EXTERNAL MODULE: ./src/modules/ExampleReact/index.css
var modules_ExampleReact = __webpack_require__(406);

// EXTERNAL MODULE: ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css
var gh_fork_ribbon = __webpack_require__(374);

// EXTERNAL MODULE: ./node_modules/onedeck/ondeck.js
var ondeck = __webpack_require__(29);
var ondeck_default = /*#__PURE__*/__webpack_require__.n(ondeck);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(131);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/modules/ExampleReact/module.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return module_ExampleReact; });
function module_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { module_typeof = function _typeof(obj) { return typeof obj; }; } else { module_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return module_typeof(obj); }

function module_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function module_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function module_createClass(Constructor, protoProps, staticProps) { if (protoProps) module_defineProperties(Constructor.prototype, protoProps); if (staticProps) module_defineProperties(Constructor, staticProps); return Constructor; }

function module_possibleConstructorReturn(self, call) { if (call && (module_typeof(call) === "object" || typeof call === "function")) { return call; } return module_assertThisInitialized(self); }

function module_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function module_getPrototypeOf(o) { module_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return module_getPrototypeOf(o); }

function module_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) module_setPrototypeOf(subClass, superClass); }

function module_setPrototypeOf(o, p) { module_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return module_setPrototypeOf(o, p); }

// eslint-disable-next-line







/**
 * Class ExampleReact
 * module use React
 */

var module_ExampleReact =
/*#__PURE__*/
function (_Onedeck$Module) {
  module_inherits(ExampleReact, _Onedeck$Module);

  function ExampleReact() {
    module_classCallCheck(this, ExampleReact);

    return module_possibleConstructorReturn(this, module_getPrototypeOf(ExampleReact).apply(this, arguments));
  }

  module_createClass(ExampleReact, [{
    key: "init",
    value: function init(path, state) {
      console.log('init', this.constructor.name, path, state);
      this.reactApp = react_dom_default.a.render(react_default.a.createElement(App_App, null), document.getElementById('MainContent'));
      axios_default()('/some.pl');
      this.eventHandler();
    }
  }, {
    key: "eventHandler",
    value: function eventHandler() {
      var _this = this;

      this.$$on('onSumm', function (summ) {
        return _this.$$gemit('examplEvent', summ);
      });
      this.$$on('notify', function (btnmane) {
        return _this.$$gemit('notify', btnmane);
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
      react_dom_default.a.unmountComponentAtNode(document.getElementById('MainContent'));
    }
  }]);

  return ExampleReact;
}(ondeck_default.a.Module);



/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(399);

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

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(401);

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

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(403);

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

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

var update = __webpack_require__(53)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(407);

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

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=2.5193730d04592cefed36.js.map