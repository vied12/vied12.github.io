webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../themes */ "./src/themes.js");
var _jsxFileName = "/home/edouard/work/vied12.github.io/src/components/Header.js";





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.background.default,
      backgroundImage: 'url(/static/screenshots/looped.gif)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      textAlign: 'center',
      padding: '60px',
      position: 'relative',
      '&:hover $caption': {
        visibility: 'visible'
      }
    },
    text: {},
    Box: {
      // border: '3px solid white',
      margin: 'auto',
      maxWidth: theme.layout.maxWidth,
      padding: 60,
      boxSizing: 'border-box'
    },
    caption: {
      position: 'absolute',
      right: 20,
      bottom: 0,
      fontSize: '1em',
      visibility: 'hidden'
    }
  };
});

var Header = function Header() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.Box,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "textPrimary",
    gutterBottom: true,
    variant: "h2",
    className: classes.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Edouard Richard"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "textPrimary",
    variant: "h4",
    component: "span",
    className: classes.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Freelance Web Application Engineer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "#Jump",
    className: classes.caption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Jump, electronic game I recently made")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_themes__WEBPACK_IMPORTED_MODULE_4__["withDarkTheme"])(Header));

/***/ })

})
//# sourceMappingURL=index.js.6e19a1092aca5b116459.hot-update.js.map