webpackHotUpdate("static/development/pages/index.js",{

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
        title: 'Story Telling',
        headline: 'encourage users to understand via exploration and intuition',
        projects: projects.filter(function (p) {
          return p.isStoryTelling;
        })
      }, {
        title: 'Tools',
        headline: 'face a problem and solve it',
        projects: projects.filter(function (p) {
          return p.isTool;
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
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Margin__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: "h2",
        color: "textPrimary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Recent Output"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        color: "textPrimary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "This is what I have been doing during this time"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Tags__WEBPACK_IMPORTED_MODULE_19__["default"], {
        tags: tags,
        selectedTags: selectedTags,
        onClick: this.onTagClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "contained",
        color: "primary",
        className: classnames__WEBPACK_IMPORTED_MODULE_20___default()(classes.clearFilters, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, classes.invisible, selectedTags.length === 0)),
        onClick: this.clearTags,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
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
            lineNumber: 133
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Margin__WEBPACK_IMPORTED_MODULE_18__["default"], {
          className: classes.titleContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "h3",
          color: "textPrimary",
          className: classes.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, c.title, c.headline && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: "caption",
          component: "div",
          color: "textPrimary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, c.headline))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Margin__WEBPACK_IMPORTED_MODULE_18__["default"], {
          disableOnMobile: true,
          color: "white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          container: true,
          spacing: 4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, c.projects.map(function (p) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            item: true,
            xs: 12 // sm={12}
            // md={p.featured ? 12 : 6}
            ,
            key: p.name,
            id: p.name,
            className: classes.item,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }, p.name));
        }))));
      }));
    }
  }]);

  return RecentOutput;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); // export default withStyles(styles)(RecentOutput)


/* harmony default export */ __webpack_exports__["default"] = (Object(_themes__WEBPACK_IMPORTED_MODULE_13__["withDarkTheme"])(Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])(styles)(RecentOutput)));

/***/ })

})
//# sourceMappingURL=index.js.194a6967bff25ec9851c.hot-update.js.map