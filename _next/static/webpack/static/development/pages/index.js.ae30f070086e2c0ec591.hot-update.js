webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@material-ui/core/esm/Hidden/Hidden.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Hidden/Hidden.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HiddenJs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HiddenJs */ "./node_modules/@material-ui/core/esm/Hidden/HiddenJs.js");
/* harmony import */ var _HiddenCss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HiddenCss */ "./node_modules/@material-ui/core/esm/Hidden/HiddenCss.js");





/**
 * Responsively hides children based on the selected implementation.
 */

function Hidden(props) {
  var implementation = props.implementation,
      other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(props, ["implementation"]);

  if (implementation === 'js') {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HiddenJs__WEBPACK_IMPORTED_MODULE_3__["default"], other);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HiddenCss__WEBPACK_IMPORTED_MODULE_4__["default"], other);
}

 true ? Hidden.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for
   * server-side rendering.
   */
  implementation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['js', 'css']),

  /**
   * You can use this property when choosing the `js` implementation with server-side rendering.
   *
   * As `window.innerWidth` is unavailable on the server,
   * we default to rendering an empty component during the first mount.
   * You might want to use an heuristic to approximate
   * the screen width of the client browser screen width.
   *
   * For instance, you could be using the user-agent or the client-hints.
   * https://caniuse.com/#search=client%20hint
   */
  initialWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /**
   * If true, screens this size and down will be hidden.
   */
  lgDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  lgUp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * If true, screens this size and down will be hidden.
   */
  mdDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  mdUp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Hide the given breakpoint(s).
   */
  only: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['xs', 'sm', 'md', 'lg', 'xl']), prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),

  /**
   * If true, screens this size and down will be hidden.
   */
  smDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  smUp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * If true, screens this size and down will be hidden.
   */
  xlDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  xlUp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * If true, screens this size and down will be hidden.
   */
  xsDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  xsUp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
} : undefined;
Hidden.defaultProps = {
  implementation: 'js',
  lgDown: false,
  lgUp: false,
  mdDown: false,
  mdUp: false,
  smDown: false,
  smUp: false,
  xlDown: false,
  xlUp: false,
  xsDown: false,
  xsUp: false
};
/* harmony default export */ __webpack_exports__["default"] = (Hidden);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Hidden/HiddenCss.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Hidden/HiddenCss.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "./node_modules/@material-ui/core/node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/helpers */ "./node_modules/@material-ui/core/esm/utils/helpers.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");









var styles = function styles(theme) {
  var hidden = {
    display: 'none'
  };
  return _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_5__["keys"].reduce(function (acc, key) {
    acc["only".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["capitalize"])(key))] = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, theme.breakpoints.only(key), hidden);
    acc["".concat(key, "Up")] = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, theme.breakpoints.up(key), hidden);
    acc["".concat(key, "Down")] = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, theme.breakpoints.down(key), hidden);
    return acc;
  }, {});
};
/**
 * @ignore - internal component.
 */


function HiddenCss(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      lgDown = props.lgDown,
      lgUp = props.lgUp,
      mdDown = props.mdDown,
      mdUp = props.mdUp,
      only = props.only,
      smDown = props.smDown,
      smUp = props.smUp,
      xlDown = props.xlDown,
      xlUp = props.xlUp,
      xsDown = props.xsDown,
      xsUp = props.xsUp,
      other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(props, ["children", "classes", "className", "lgDown", "lgUp", "mdDown", "mdUp", "only", "smDown", "smUp", "xlDown", "xlUp", "xsDown", "xsUp"]);

   true ? warning__WEBPACK_IMPORTED_MODULE_4___default()(Object.keys(other).length === 0 || Object.keys(other).length === 1 && other.hasOwnProperty('ref'), "Material-UI: unsupported properties received ".concat(Object.keys(other).join(', '), " by `<Hidden />`.")) : undefined;
  var clsx = [];

  if (className) {
    clsx.push(className);
  }

  for (var i = 0; i < _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_5__["keys"].length; i += 1) {
    var breakpoint = _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_5__["keys"][i];
    var breakpointUp = props["".concat(breakpoint, "Up")];
    var breakpointDown = props["".concat(breakpoint, "Down")];

    if (breakpointUp) {
      clsx.push(classes["".concat(breakpoint, "Up")]);
    }

    if (breakpointDown) {
      clsx.push(classes["".concat(breakpoint, "Down")]);
    }
  }

  if (only) {
    var onlyBreakpoints = Array.isArray(only) ? only : [only];
    onlyBreakpoints.forEach(function (breakpoint) {
      clsx.push(classes["only".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["capitalize"])(breakpoint))]);
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: clsx.join(' ')
  }, children);
}

 true ? HiddenCss.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for
   * server-side rendering.
   */
  implementation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['js', 'css']),

  /**
   * If true, screens this size and down will be hidden.
   */
  lgDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  lgUp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If true, screens this size and down will be hidden.
   */
  mdDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  mdUp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Hide the given breakpoint(s).
   */
  only: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['xs', 'sm', 'md', 'lg', 'xl']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),

  /**
   * If true, screens this size and down will be hidden.
   */
  smDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  smUp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If true, screens this size and down will be hidden.
   */
  xlDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  xlUp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If true, screens this size and down will be hidden.
   */
  xsDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  xsUp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'PrivateHiddenCss'
})(HiddenCss));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Hidden/HiddenJs.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Hidden/HiddenJs.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");
/* harmony import */ var _withWidth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withWidth */ "./node_modules/@material-ui/core/esm/withWidth/index.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");




/**
 * @ignore - internal component.
 */

function HiddenJs(props) {
  var children = props.children,
      only = props.only,
      width = props.width;
  var visible = true; // `only` check is faster to get out sooner if used.

  if (only) {
    if (Array.isArray(only)) {
      for (var i = 0; i < only.length; i += 1) {
        var breakpoint = only[i];

        if (width === breakpoint) {
          visible = false;
          break;
        }
      }
    } else if (only && width === only) {
      visible = false;
    }
  } // Allow `only` to be combined with other props. If already hidden, no need to check others.


  if (visible) {
    // determine visibility based on the smallest size up
    for (var _i = 0; _i < _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_1__["keys"].length; _i += 1) {
      var _breakpoint = _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_1__["keys"][_i];
      var breakpointUp = props["".concat(_breakpoint, "Up")];
      var breakpointDown = props["".concat(_breakpoint, "Down")];

      if (breakpointUp && Object(_withWidth__WEBPACK_IMPORTED_MODULE_2__["isWidthUp"])(_breakpoint, width) || breakpointDown && Object(_withWidth__WEBPACK_IMPORTED_MODULE_2__["isWidthDown"])(_breakpoint, width)) {
        visible = false;
        break;
      }
    }
  }

  if (!visible) {
    return null;
  }

  return children;
}

HiddenJs.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Specify which implementation to use.  'js' is the default, 'css' works better for
   * server-side rendering.
   */
  implementation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['js', 'css']),

  /**
   * You can use this property when choosing the `js` implementation with server-side rendering.
   *
   * As `window.innerWidth` is unavailable on the server,
   * we default to rendering an empty component during the first mount.
   * You might want to use an heuristic to approximate
   * the screen width of the client browser screen width.
   *
   * For instance, you could be using the user-agent or the client-hints.
   * https://caniuse.com/#search=client%20hint
   */
  initialWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /**
   * If true, screens this size and down will be hidden.
   */
  lgDown: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  lgUp: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * If true, screens this size and down will be hidden.
   */
  mdDown: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  mdUp: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Hide the given breakpoint(s).
   */
  only: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['xs', 'sm', 'md', 'lg', 'xl']), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['xs', 'sm', 'md', 'lg', 'xl']))]),

  /**
   * If true, screens this size and down will be hidden.
   */
  smDown: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  smUp: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * @ignore
   * width prop provided by withWidth decorator.
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,

  /**
   * If true, screens this size and down will be hidden.
   */
  xlDown: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  xlUp: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * If true, screens this size and down will be hidden.
   */
  xsDown: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * If true, screens this size and up will be hidden.
   */
  xsUp: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
};

if (true) {
  HiddenJs.propTypes = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__["exactProp"])(HiddenJs.propTypes);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_withWidth__WEBPACK_IMPORTED_MODULE_2__["default"])()(HiddenJs));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Hidden/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Hidden/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hidden */ "./node_modules/@material-ui/core/esm/Hidden/Hidden.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Hidden__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/withWidth/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/withWidth/index.js ***!
  \***************************************************************/
/*! exports provided: default, isWidthUp, isWidthDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withWidth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withWidth */ "./node_modules/@material-ui/core/esm/withWidth/withWidth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _withWidth__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWidthUp", function() { return _withWidth__WEBPACK_IMPORTED_MODULE_0__["isWidthUp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWidthDown", function() { return _withWidth__WEBPACK_IMPORTED_MODULE_0__["isWidthDown"]; });




/***/ }),

/***/ "./node_modules/@material-ui/core/esm/withWidth/withWidth.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/withWidth/withWidth.js ***!
  \*******************************************************************/
/*! exports provided: isWidthUp, isWidthDown, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWidthUp", function() { return isWidthUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWidthDown", function() { return isWidthDown; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_event_listener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-event-listener */ "./node_modules/react-event-listener/dist/react-event-listener.cjs.js");
/* harmony import */ var react_event_listener__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_event_listener__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/@material-ui/core/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_withTheme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/withTheme */ "./node_modules/@material-ui/core/esm/styles/withTheme.js");
/* harmony import */ var _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/createBreakpoints */ "./node_modules/@material-ui/core/esm/styles/createBreakpoints.js");










 // < 1kb payload overhead when lodash/debounce is > 3kb.





 // By default, returns true if screen width is the same or greater than the given breakpoint.

var isWidthUp = function isWidthUp(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_15__["keys"].indexOf(breakpoint) <= _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_15__["keys"].indexOf(width);
  }

  return _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_15__["keys"].indexOf(breakpoint) < _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_15__["keys"].indexOf(width);
}; // By default, returns true if screen width is the same or less than the given breakpoint.

var isWidthDown = function isWidthDown(breakpoint, width) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_15__["keys"].indexOf(width) <= _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_15__["keys"].indexOf(breakpoint);
  }

  return _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_15__["keys"].indexOf(width) < _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_15__["keys"].indexOf(breakpoint);
};

var withWidth = function withWidth() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Component) {
    var _options$withTheme = options.withTheme,
        withThemeOption = _options$withTheme === void 0 ? false : _options$withTheme,
        _options$noSSR = options.noSSR,
        noSSR = _options$noSSR === void 0 ? false : _options$noSSR,
        initialWidthOption = options.initialWidth,
        _options$resizeInterv = options.resizeInterval,
        resizeInterval = _options$resizeInterv === void 0 ? 166 : _options$resizeInterv;

    var WithWidth =
    /*#__PURE__*/
    function (_React$Component) {
      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(WithWidth, _React$Component);

      function WithWidth(props) {
        var _this;

        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, WithWidth);

        _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(WithWidth).call(this, props));
        _this.state = {
          width: noSSR ? _this.getWidth() : undefined
        };

        if (typeof window !== 'undefined') {
          _this.handleResize = debounce__WEBPACK_IMPORTED_MODULE_10___default()(function () {
            var width2 = _this.getWidth();

            if (width2 !== _this.state.width) {
              _this.setState({
                width: width2
              });
            }
          }, resizeInterval);
        }

        return _this;
      }

      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(WithWidth, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var width = this.getWidth();

          if (width !== this.state.width) {
            this.setState({
              width: width
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.handleResize.clear();
        }
      }, {
        key: "getWidth",
        value: function getWidth() {
          var innerWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.innerWidth;
          var breakpoints = this.props.theme.breakpoints;
          var width = null;
          /**
           * Start with the slowest value as low end devices often have a small screen.
           *
           * innerWidth |xs      sm      md      lg      xl
           *            |-------|-------|-------|-------|------>
           * width      |  xs   |  sm   |  md   |  lg   |  xl
           */

          var index = 1;

          while (width === null && index < _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_15__["keys"].length) {
            var currentWidth = _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_15__["keys"][index]; // @media are inclusive, so reproduce the behavior here.

            if (innerWidth < breakpoints.values[currentWidth]) {
              width = _styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_15__["keys"][index - 1];
              break;
            }

            index += 1;
          }

          width = width || 'xl';
          return width;
        }
      }, {
        key: "render",
        value: function render() {
          var _getThemeProps = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_12__["getThemeProps"])({
            theme: this.props.theme,
            name: 'MuiWithWidth',
            props: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props)
          }),
              initialWidth = _getThemeProps.initialWidth,
              theme = _getThemeProps.theme,
              width = _getThemeProps.width,
              other = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_getThemeProps, ["initialWidth", "theme", "width"]);

          var more = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            width: width || this.state.width || initialWidth || initialWidthOption
          }, other); // When rendering the component on the server,
          // we have no idea about the client browser screen width.
          // In order to prevent blinks and help the reconciliation of the React tree
          // we are not rendering the child component.
          //
          // An alternative is to use the `initialWidth` property.


          if (more.width === undefined) {
            return null;
          }

          if (withThemeOption) {
            more.theme = theme;
          }

          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, more), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_event_listener__WEBPACK_IMPORTED_MODULE_9___default.a, {
            target: "window",
            onResize: this.handleResize
          }));
        }
      }]);

      return WithWidth;
    }(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

     true ? WithWidth.propTypes = {
      /**
       * As `window.innerWidth` is unavailable on the server,
       * we default to rendering an empty component during the first mount.
       * You might want to use an heuristic to approximate
       * the screen width of the client browser screen width.
       *
       * For instance, you could be using the user-agent or the client-hints.
       * https://caniuse.com/#search=client%20hint
       */
      initialWidth: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

      /**
       * @ignore
       */
      theme: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,

      /**
       * Bypass the width calculation logic.
       */
      width: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
    } : undefined;

    if (true) {
      WithWidth.displayName = "WithWidth(".concat(Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_11__["getDisplayName"])(Component), ")");
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_13___default()(WithWidth, Component);
    return Object(_styles_withTheme__WEBPACK_IMPORTED_MODULE_14__["default"])(WithWidth);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withWidth);

/***/ }),

/***/ "./node_modules/@material-ui/core/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ }),

/***/ "./node_modules/react-event-listener/dist/react-event-listener.cjs.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-event-listener/dist/react-event-listener.cjs.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _classCallCheck = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _inherits = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _typeof = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _objectWithoutProperties = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));
var _extends = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));
var React = _interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var PropTypes = _interopDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/react-event-listener/node_modules/warning/warning.js"));

function defineProperty(object, property, attr) {
  return Object.defineProperty(object, property, attr);
} // Passive options
// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js


var passiveOption = function () {
  var cache = null;
  return function () {
    if (cache !== null) {
      return cache;
    }

    var supportsPassiveOption = false;

    try {
      window.addEventListener('test', null, defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      }));
    } catch (err) {//
    }

    cache = supportsPassiveOption;
    return supportsPassiveOption;
  }();
}();

var defaultEventOptions = {
  capture: false,
  passive: false
};

function mergeDefaultEventOptions(options) {
  return _extends({}, defaultEventOptions, options);
}

function getEventListenerArgs(eventName, callback, options) {
  var args = [eventName, callback];
  args.push(passiveOption ? options : options.capture);
  return args;
}

function on(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function off(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function forEachListener(props, iteratee) {
  var children = props.children,
      target = props.target,
      eventProps = _objectWithoutProperties(props, ["children", "target"]);

  Object.keys(eventProps).forEach(function (name) {
    if (name.substring(0, 2) !== 'on') {
      return;
    }

    var prop = eventProps[name];

    var type = _typeof(prop);

    var isObject = type === 'object';
    var isFunction = type === 'function';

    if (!isObject && !isFunction) {
      return;
    }

    var capture = name.substr(-7).toLowerCase() === 'capture';
    var eventName = name.substring(2).toLowerCase();
    eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

    if (isObject) {
      iteratee(eventName, prop.handler, prop.options);
    } else {
      iteratee(eventName, prop, mergeDefaultEventOptions({
        capture: capture
      }));
    }
  });
}

function withOptions(handler, options) {
   true ? warning(options, 'react-event-listener: should be specified options in withOptions.') : undefined;
  return {
    handler: handler,
    options: mergeDefaultEventOptions(options)
  };
}

var EventListener =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(EventListener, _React$PureComponent);

  function EventListener() {
    _classCallCheck(this, EventListener);

    return _possibleConstructorReturn(this, _getPrototypeOf(EventListener).apply(this, arguments));
  }

  _createClass(EventListener, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.applyListeners(on);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.applyListeners(off, prevProps);
      this.applyListeners(on);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.applyListeners(off);
    }
  }, {
    key: "applyListeners",
    value: function applyListeners(onOrOff) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
      var target = props.target;

      if (target) {
        var element = target;

        if (typeof target === 'string') {
          element = window[target];
        }

        forEachListener(props, onOrOff.bind(null, element));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children || null;
    }
  }]);

  return EventListener;
}(React.PureComponent);

EventListener.propTypes =  true ? {
  /**
   * You can provide a single child too.
   */
  children: PropTypes.node,

  /**
   * The DOM target to listen to.
   */
  target: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
} : undefined;

exports.withOptions = withOptions;
exports.default = EventListener;


/***/ }),

/***/ "./node_modules/react-event-listener/node_modules/warning/warning.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-event-listener/node_modules/warning/warning.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


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
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "./node_modules/@material-ui/core/esm/ExpansionPanel/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "./node_modules/@material-ui/core/esm/ExpansionPanelSummary/index.js");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "./node_modules/@material-ui/core/esm/ExpansionPanelDetails/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
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
    },
    flexWrap: {
      flexWrap: 'wrap'
    }
  };
};

var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles);

var RenderTags = function RenderTags(_ref) {
  var tags = _ref.tags,
      selectedTags = _ref.selectedTags,
      _onClick = _ref.onClick;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, tags.slice(3).map(function (p) {
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
        lineNumber: 31
      },
      __self: this
    }, p);
  }));
};

var Tags = function Tags(_ref2) {
  var classes = _ref2.classes,
      tags = _ref2.tags,
      selectedTags = _ref2.selectedTags,
      onClick = _ref2.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "h6",
    color: "textPrimary",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Features"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__["default"], {
    mdUp: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.tags,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RenderTags, {
    tags: tags,
    selectedTags: selectedTags,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__["default"], {
    smDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_5__["default"], {
    expandIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }),
    "aria-controls": "panel1a-content",
    id: "panel1a-header",
    classes: {
      content: classes.flexWrap
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Filter by feature")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      flexWrap: 'wrap'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RenderTags, {
    tags: tags,
    selectedTags: selectedTags,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(Tags));

/***/ })

})
//# sourceMappingURL=index.js.ae30f070086e2c0ec591.hot-update.js.map