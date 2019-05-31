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
  }, "Freelance Developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

/***/ }),

/***/ "./src/components/Introduction.js":
/*!****************************************!*\
  !*** ./src/components/Introduction.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Margin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Margin */ "./src/components/Margin.js");
/* harmony import */ var _material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/VpnKey */ "./node_modules/@material-ui/icons/VpnKey.js");
/* harmony import */ var _material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../themes */ "./src/themes.js");
var _jsxFileName = "/home/edouard/work/vied12.github.io/src/components/Introduction.js";








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.background.default,
      padding: '60px 0'
    },
    links: {
      textAlign: 'center',
      paddingTop: 40,
      '& > *': {
        marginRight: 40
      },
      '& i': {
        fontSize: 30
      }
    },
    text: {
      maxWidth: 700,
      margin: 'auto' // color: theme.palette.text

    }
  };
});

var Introduction = function Introduction() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Margin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Hi,", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), "I'm a developer in Berlin. For the last few years I've built tools for news agencies at", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://sourcefabric.org",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Sourcefabric"), ' ', "after making interactive storytelling and data visualizations at", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://jplusplus.org",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Journalism++"), ".", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), "I now work as a freelancer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.links,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "mailto:vied12@gmail.com",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-envelope-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "https://twitter.com/vied12",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "https://github.com/vied12",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "https://keybase.io/vied12",
    target: "_blank",
    style: {
      top: 5,
      position: 'relative'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  },  false && false, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_VpnKey__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      width: 40,
      height: 35
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_themes__WEBPACK_IMPORTED_MODULE_7__["withLightTheme"])(Introduction));

/***/ }),

/***/ "./src/components/Project.js":
/*!***********************************!*\
  !*** ./src/components/Project.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_activeOnHover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/activeOnHover */ "./src/helpers/activeOnHover.js");
/* harmony import */ var _helpers_preloadPicture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/preloadPicture */ "./src/helpers/preloadPicture.js");
/* harmony import */ var _helpers_activeShortlyWhenVisible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/activeShortlyWhenVisible */ "./src/helpers/activeShortlyWhenVisible.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/home/edouard/work/vied12.github.io/src/components/Project.js";










var styles = function styles(theme) {
  return {
    root: {
      minHeight: 330,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'all .25s',
      boxSizing: 'border-box',
      padding: 10
    },
    active: {
      '& $background': {
        opacity: 0.2
      },
      '& $showOnHover': {
        visibility: 'visible'
      }
    },
    showOnHover: {
      visibility: 'hidden'
    },
    background: {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 1,
      transition: 'all .25s'
    },
    body: {
      flexGrow: 1,
      textAlign: 'center'
    },
    openLink: {
      '& i': {
        fontSize: '1.8em'
      }
    }
  };
};

var Project = function Project(_ref) {
  var _classNames;

  var classes = _ref.classes,
      project = _ref.project,
      active = _ref.active,
      picture = _ref.picture,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: onClick,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.root, (_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.active, active), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.hasLink, !!project.link), _classNames)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, picture && picture.indexOf('webm') > -1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", {
    className: classes.background,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    autoPlay: true,
    loop: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: picture,
    type: "video/webm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.background,
    style: {
      backgroundImage: "url(".concat(picture, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "textPrimary",
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, project.name, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "textPrimary",
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, project.tags.replace(/!/g, '').split('\n').map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, item, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "textPrimary",
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.showOnHover),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, project.description.replace(/!/g, '').split('\n').map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, item, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }));
  }))), project.link && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: project.link,
    rel: "noopener noreferrer",
    target: "_blank",
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.openLink, classes.showOnHover),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fa fa-external-link",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_9___default()(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles), _helpers_preloadPicture__WEBPACK_IMPORTED_MODULE_7__["default"], _helpers_activeShortlyWhenVisible__WEBPACK_IMPORTED_MODULE_8__["default"], _helpers_activeOnHover__WEBPACK_IMPORTED_MODULE_6__["default"])(Project));

/***/ }),

/***/ "./src/components/RecentOutput.js":
/*!****************************************!*\
  !*** ./src/components/RecentOutput.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../themes */ "./src/themes.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Project */ "./src/components/Project.js");
/* harmony import */ var _projects_tsv__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../projects.tsv */ "./src/projects.tsv");
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! d3-dsv */ "./node_modules/d3-dsv/src/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Margin__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Margin */ "./src/components/Margin.js");
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Tags */ "./src/components/Tags.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_20__);









var _ref,
    _jsxFileName = "/home/edouard/work/vied12.github.io/src/components/RecentOutput.js";















var styles = function styles(theme) {
  return {
    root: {
      backgroundColor: theme.palette.background.default,
      padding: '60px 0'
    },
    categories: {
      paddingTop: 30,
      paddingBottom: 40
    },
    titleContainer: {// position: 'sticky',
      // top: 0,
      // backgroundColor: theme.palette.background.default,
      // zIndex: 1,
    },
    title: {
      textAlign: 'center',
      marginBottom: 60
    },
    clearFilters: {
      transition: 'all .5s',
      marginTop: 10
    },
    invisible: {
      opacity: 0
    },
    item: {
      overflow: 'hidden'
    }
  };
};

var PROJECTS = Object(lodash__WEBPACK_IMPORTED_MODULE_17__["orderBy"])(Object(d3_dsv__WEBPACK_IMPORTED_MODULE_16__["tsvParse"])(_projects_tsv__WEBPACK_IMPORTED_MODULE_15__["default"]), ['featured', 'year'], ['desc', 'desc']);
var tags = Object(lodash__WEBPACK_IMPORTED_MODULE_17__["orderBy"])(Object(lodash__WEBPACK_IMPORTED_MODULE_17__["groupBy"])((_ref = []).concat.apply(_ref, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(PROJECTS.map(function (p) {
  return p.tags.split(', ').filter(function (p) {
    return !!p;
  });
})))), ['length'], ['desc']).map(function (d) {
  return d[0];
}).filter(function (d) {
  return d[0] !== '!';
});

var RecentOutput =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RecentOutput, _React$Component);

  function RecentOutput() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RecentOutput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RecentOutput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      selectedTags: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onTagClick", function (tag) {
      var selectedTags = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_this.state.selectedTags);

      if (selectedTags.indexOf(tag) > -1) {
        selectedTags.splice(selectedTags.indexOf(tag), 1);
      } else {
        selectedTags.push(tag);
      }

      _this.setState({
        selectedTags: selectedTags
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "clearTags", function () {
      _this.setState({
        selectedTags: []
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RecentOutput, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var selectedTags = this.state.selectedTags;
      var projects = selectedTags.length === 0 ? PROJECTS : Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(PROJECTS).filter(function (p) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_17__["intersection"])(p.tags.split(', '), selectedTags).length > 0;
      });
      var categories = [{
        title: 'Tools',
        headline: 'face a problem and solve it',
        projects: projects.filter(function (p) {
          return p.isTool;
        })
      }, {
        title: 'Story Telling',
        headline: 'encourage people to understand via exploration and intuition',
        projects: projects.filter(function (p) {
          return p.isStoryTelling;
        })
      }, {
        title: 'Side Projects, Art & Whatever',
        headline: 'are intended for learning something new, but mostly for having fun',
        projects: projects.filter(function (p) {
          return p.isArt;
        })
      }];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Margin__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "h2",
        color: "textPrimary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Recent Output"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        color: "textPrimary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "This is what I have been doing during this time"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tags__WEBPACK_IMPORTED_MODULE_19__["default"], {
        tags: tags,
        selectedTags: selectedTags,
        onClick: this.onTagClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "contained",
        color: "primary",
        className: classnames__WEBPACK_IMPORTED_MODULE_20___default()(classes.clearFilters, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, classes.invisible, selectedTags.length === 0)),
        onClick: this.clearTags,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Clear all filters"))), categories.filter(function (c) {
        return c.projects.length;
      }).map(function (c, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: c.title,
          className: classes.categories,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Margin__WEBPACK_IMPORTED_MODULE_18__["default"], {
          className: classes.titleContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "h3",
          color: "textPrimary",
          className: classes.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, c.title, c.headline && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "caption",
          component: "div",
          color: "textPrimary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, c.headline))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Margin__WEBPACK_IMPORTED_MODULE_18__["default"], {
          disableOnMobile: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          container: true,
          spacing: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        }, c.projects.map(function (p) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            item: true,
            xs: 12,
            sm: 12,
            md: p.featured ? 12 : 6,
            key: p.name,
            id: p.name,
            className: classes.item,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Project__WEBPACK_IMPORTED_MODULE_14__["default"], {
            project: p,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            },
            __self: this
          }));
        }))));
      }));
    }
  }]);

  return RecentOutput;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_themes__WEBPACK_IMPORTED_MODULE_13__["withDarkTheme"])(Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])(styles)(RecentOutput)));

/***/ }),

/***/ "./src/components/Tags.js":
/*!********************************!*\
  !*** ./src/components/Tags.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
var _jsxFileName = "/home/edouard/work/vied12.github.io/src/components/Tags.js";





var styles = function styles(theme) {
  return {
    root: {
      margin: '40px 0 20px 0'
    },
    tags: {// textAlign: 'center',
    },
    tag: {
      marginRight: 12,
      marginBottom: 12
    }
  };
};

var Tags = function Tags(_ref) {
  var classes = _ref.classes,
      tags = _ref.tags,
      selectedTags = _ref.selectedTags,
      _onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "h6",
    color: "textPrimary",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Features"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.tags,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, tags.map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: p,
      variant: "outlined",
      color: selectedTags.indexOf(p) > -1 ? 'secondary' : 'default',
      onClick: function onClick() {
        return _onClick(p);
      },
      className: classes.tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, p);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(Tags));

/***/ })

})
//# sourceMappingURL=index.js.6a604efa12a3c25c602f.hot-update.js.map