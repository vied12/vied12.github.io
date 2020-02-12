webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_activeOnHover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/activeOnHover */ "./src/helpers/activeOnHover.js");
/* harmony import */ var _helpers_preloadPicture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/preloadPicture */ "./src/helpers/preloadPicture.js");
/* harmony import */ var _helpers_activeShortlyWhenVisible__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/activeShortlyWhenVisible */ "./src/helpers/activeShortlyWhenVisible.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recompose/compose */ "./node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

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
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(classes.root, (_classNames = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.active, active), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.hasLink, !!project.link), _classNames)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
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
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: picture,
    type: "video/webm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.background,
    style: {
      backgroundImage: "url(".concat(picture, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "textPrimary",
    variant: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, project.name, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "textPrimary",
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, project.tags.replace(/!/g, '').split('\n').map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, item, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "textPrimary",
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(classes.showOnHover),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, project.description.replace(/!/g, '').split('\n').map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, item, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }));
  }))), project.link && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: project.link,
    rel: "noopener noreferrer",
    target: "_blank",
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(classes.openLink, classes.showOnHover),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fa fa-external-link",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  })));
}; // export default compose(
//   withStyles(styles),
//   preloadPicture,
//   activeShortlyWhenVisible,
//   activeOnHover
// )(Project)


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    artwork: {
      position: 'relative',
      minHeight: 200
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
    }
  };
});

var Project2 = function Project2(_ref2) {
  var project = _ref2.project,
      picture = _ref2.picture,
      flip = _ref2.flip;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    my: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    md: 4,
    className: classes.artwork,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
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
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: picture,
    type: "video/webm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.background,
    style: {
      backgroundImage: "url(".concat(picture, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ml: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h4",
    gutterBottom: true,
    color: "textPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, project.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gutterBottom: true,
    color: "textPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, project.description.split('\n').map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, item, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "textSecondary",
    gutterBottom: true,
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, project.tags.replace(/!/g, '').split('\n').map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, item, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }));
  })), project.link && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    href: project.link,
    rel: "noopener noreferrer",
    target: "_blank" // className={classNames(classes.openLink, classes.showOnHover)}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "See more", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fa fa-external-link",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_helpers_preloadPicture__WEBPACK_IMPORTED_MODULE_9__["default"])(Project2));

/***/ })

})
//# sourceMappingURL=index.js.ff7e9343d037645c2844.hot-update.js.map