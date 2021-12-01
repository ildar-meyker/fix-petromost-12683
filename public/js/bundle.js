/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import "./modules/globals";
// import "./modules/Notify";
var PopupBasket = {
  _$panel: $(),
  setHeight: function setHeight() {
    var $panel = this._$panel;
    var windowHeight = $(window).height();
    var panelOffsetTop = $panel.offset().top - $(window).scrollTop();
    var panelBottomSpace = 10;
    var newHeight = windowHeight - panelOffsetTop - panelBottomSpace;
    $panel.css({
      "max-height": "none",
      "min-height": "300px"
    }).outerHeight(newHeight);
  },
  openPanel: function openPanel() {
    this._$panel.addClass("active");

    SliderBasket.refresh();
    this.setHeight();
  },
  closePanel: function closePanel() {
    this._$panel.removeClass("active");
  },
  _handleOpenButton: function _handleOpenButton(e) {
    e.preventDefault();

    if ($(e.target).closest(".js-popup-basket-panel").length) {
      return;
    }

    if (this._$panel.hasClass("active")) {
      this.closePanel();
    } else {
      this.openPanel();
    }
  },
  _handleOutsideClick: function _handleOutsideClick(e) {
    if ($(e.target).closest(".js-popup-basket-open").length === 0) {
      this.closePanel();
    }
  },
  init: function init() {
    this._$panel = $("#popup-basket");
    $(document).on("click", ".js-popup-basket-open", this._handleOpenButton.bind(this));
    $(document).on("click", this._handleOutsideClick.bind(this));
  }
};
var SliderBasket = {
  _$root: $(),
  refresh: function refresh() {
    this._$root.find(".slider-basket__list").slick("setPosition");
  },
  init: function init() {
    this._$root = $("#slider-basket");

    this._$root.find(".slider-basket__list").slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: this._$root.find(".slider-basket__prev"),
      nextArrow: this._$root.find(".slider-basket__next")
    });
  }
};
$(function () {
  SliderBasket.init();
  PopupBasket.init();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map