(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExampleNotification; });
/* harmony import */ var onedeck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony import */ var quasar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(346);
/* harmony import */ var simple_notify_dist_simple_notify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(343);
/* harmony import */ var simple_notify_dist_simple_notify_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_notify_dist_simple_notify_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ExampleNotification_css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(371);
/* harmony import */ var ExampleNotification_css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ExampleNotification_css_main_css__WEBPACK_IMPORTED_MODULE_3__);
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
 * Class ExampleNotification
 * module use Vue
 */

var ExampleNotification =
/*#__PURE__*/
function (_Onedeck$Module) {
  _inherits(ExampleNotification, _Onedeck$Module);

  function ExampleNotification() {
    _classCallCheck(this, ExampleNotification);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExampleNotification).apply(this, arguments));
  }

  _createClass(ExampleNotification, [{
    key: "init",
    value: function init(path, state) {// console.log('init', this.constructor.name, path, state);
    }
  }, {
    key: "dispatcher",
    value: function dispatcher(path, state) {
      console.log('dispatcher', this.constructor.name, path, state);
      quasar__WEBPACK_IMPORTED_MODULE_1__[/* Notify */ "a"].create({
        color: 'teal',
        position: 'top-right',
        timeout: 5000,
        textColor: 'white',
        actions: [{
          icon: 'close',
          color: 'white'
        }],
        message: "MODULE : ".concat(path[0])
      });
    }
  }, {
    key: "mounted",
    value: function mounted(module, layout) {// console.log('mounted', this.constructor.name, module, layout);
    }
  }, {
    key: "notify",
    value: function notify(text) {
      // console.log('dispatcher', this.constructor.name, path, state);
      quasar__WEBPACK_IMPORTED_MODULE_1__[/* Notify */ "a"].create({
        position: 'top',
        timeout: 500,
        textColor: 'white',
        actions: [{
          icon: 'close',
          color: 'white'
        }],
        message: text
      });
    }
  }]);

  return ExampleNotification;
}(onedeck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].Module);



/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(372);

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

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=8.ca04cc90df69347aa9c7.js.map