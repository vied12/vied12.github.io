webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@material-ui/core/colors/purple.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/purple.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff'
};
var _default = purple;
exports.default = _default;

/***/ }),

/***/ "./src/themes.js":
/*!***********************!*\
  !*** ./src/themes.js ***!
  \***********************/
/*! exports provided: lightTheme, noTheme, darkTheme, withDarkTheme, withLightTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return lightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTheme", function() { return noTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDarkTheme", function() { return withDarkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLightTheme", function() { return withLightTheme; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors/purple */ "./node_modules/@material-ui/core/colors/purple.js");
/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "/home/edouard/work/vied12.github.io/src/themes.js";



var titleStyle = {
  fontFamily: 'Oswald,sans-serif,Arial',
  margin: '20px 0'
};
var theme = {
  layout: {
    maxWidth: 1000
  },
  palette: {
    primary: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, 500, '#9d7caa'))
  },
  typography: {
    fontFamily: 'Inconsolata,monospace,Arial',
    body1: {
      fontSize: 18,
      lineHeight: '26px'
    },
    h1: titleStyle,
    h2: titleStyle,
    h3: titleStyle,
    h4: titleStyle,
    title: titleStyle,
    headline: titleStyle
  }
};
var lightTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])(theme);
var noTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])();
var darkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme, {
  palette: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.palette, {
    type: 'dark'
  })
}));
var withDarkTheme = function withDarkTheme(Component) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["MuiThemeProvider"], {
      theme: darkTheme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })));
  };
};
var withLightTheme = function withLightTheme(Component) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["MuiThemeProvider"], {
      theme: lightTheme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })));
  };
};
/* harmony default export */ __webpack_exports__["default"] = (lightTheme);

/***/ })

})
//# sourceMappingURL=index.js.eed77c5d8034f61be435.hot-update.js.map