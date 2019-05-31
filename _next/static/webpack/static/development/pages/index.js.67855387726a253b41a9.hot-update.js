webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/helpers/preloadPicture.js":
/*!***************************************!*\
  !*** ./src/helpers/preloadPicture.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_placeholder_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/placeholder/index */ "./src/assets/placeholder/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/home/edouard/work/vied12.github.io/src/helpers/preloadPicture.js";





var loadPicture = function loadPicture(Component) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LoadPicture, _React$Component);

      function LoadPicture(props) {
        var _this;

        Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoadPicture);

        _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LoadPicture).call(this, props));

        Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "unmounted", false);

        Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
          loaded: false,
          picture: undefined
        });

        Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onImageLoaded", function (imageName) {
          if (_this.unmounted) {
            return;
          }

          _this.setState({
            picture: "/static/screenshots/".concat(_this.props.project.picture),
            loaded: true
          });
        });

        Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentWillUnmount", function () {
          _this.unmounted = true;

          if (_this.image) {
            _this.image.onload = undefined;
            _this.image = undefined;
          }
        });

        Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "preloadImage", function (picture) {
          if (false) {}

          _this.image = new Image();

          _this.image.onload = function () {
            return _this.onImageLoaded(picture);
          };

          _this.image.src = "/static/screenshots/".concat(picture);
        });

        Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (isVisible) {
          if (isVisible && !_this.state.loaded) {
            _this.preloadImage(_this.props.project.picture);
          }
        });

        Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "render", function () {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default.a, {
            onChange: _this.onChange,
            minTopValue: 120,
            partialVisibility: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.props, {
            picture: _this.state.picture,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          })));
        });

        if (props.project.picture.indexOf('webm') > -1) {
          _this.state = {
            picture: "/static/screenshots/".concat(_this.props.project.picture)
          };
        } else {
          _this.state = {
            picture: _assets_placeholder_index__WEBPACK_IMPORTED_MODULE_8__[Object(lodash__WEBPACK_IMPORTED_MODULE_9__["camelCase"])(_this.props.project.picture + '.svg')]
          };
        }

        return _this;
      }

      return LoadPicture;
    }(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (loadPicture);

/***/ })

})
//# sourceMappingURL=index.js.67855387726a253b41a9.hot-update.js.map